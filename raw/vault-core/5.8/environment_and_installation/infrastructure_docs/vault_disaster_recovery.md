---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery"
title: "Vault Disaster Recovery"
scraped_at: "2026-06-17T15:37:59.188Z"
images: 0
---

# Vault Disaster Recovery

## [](#about_this_guide "Copy link to heading")About this guide

### [](#background "Copy link to heading")Background

The single source of truth for Vault is the database. The Vault restore strategy is therefore a standard backup and restore of the Postgres database, which backs up the instance of Vault. The data is always written to a node in the isolated domain. The backup in itself ensures zero data loss, but there can be a perceived loss of data in the following scenarios:

-   where asynchronous journeys within Vault can halt progress
    
-   where downstream consumers of Vault’s streaming API are unable to consume all events happening up to the point of the disaster event
    

chat\_bubble

Metrics are not retained by the Observability Stack. RemoteWrite configuration is available from Vault 4.6.0 onwards and allows you to write Thought Machine’s metrics to a (compatible) system that you manage. If you want to retain and have the ability to recover your metrics in case of a disaster recovery (DR) scenario, you could include the RemoteWrite feature as part of your DR process. You will need to establish your own process that takes into consideration your business continuity needs. Alternatively, if you are considering backing up the Prometheus and Elasticsearch instances, the Prometheus website provides some related information that you may find helpful (for example, under [Prometheus → 2.45 (LTS) → Storage)](https://prometheus.io/docs/prometheus/2.45/storage/).

### [](#purpose "Copy link to heading")Purpose

This document describes disaster recovery steps you should run in Vault after a database backup.

### [](#scope "Copy link to heading")Scope

This document includes instructions on how to run disaster recovery steps for the Core and Payments Hub Vault subcomponents.

### [](#audience "Copy link to heading")Audience

This guide should be used by engineers responsible for disaster recovery of the Vault application.

### [](#disclaimer "Copy link to heading")Disclaimer

Thought Machine makes no claims, promises or guarantees about the accuracy, completeness or adequacy of this document. All information, content and materials are provided \`as is' and without any representation or warranty of any kind, express or implied, including (but not limited to) the implied warranties of merchantability, fitness for a particular purposes, title, or non-infringement. To the extent permitted by applicable law, Thought Machine does not accept liability for any direct, indirect, special, consequential, exemplary, punitive, or any other losses or damages of any kind, including (but not limited to) any loss of profits, business interruption, loss of data or otherwise, even if expressly advised of the possibility of such damages.

## [](#overview "Copy link to heading")Overview

### [](#architecture "Copy link to heading")Architecture

Vault is built to only use the database as the source of truth. The synchronous nature of the write operation to the database ensures that there is no writing to Kafka if the write operation to the database has not occurred. However, as some user journeys are asynchronous, when restoring an instance of Vault we must consider the state of such journeys held in Kafka.

To support resilience in asynchronous journeys, the architecture of Vault is built to support a variation of the Transactional Outbox pattern called the Journal Poller architecture. In this architecture, deployments write to both a domain table and an event store on any mutation request received. As with event sourcing, the event store (or journal in this case) remains append-only. By explicitly emitting events using an event store, the events are structured in a suitable format for consumers. This allows Vault to republish any historical message committed to the event store.

### [](#recovery "Copy link to heading")Recovery

You can use various deployment models to recover from regional or zonal outages. The disaster recovery steps for Vault are built using the following principles:

-   Following an outage, a consistent backup of the Postgres instance is restored so that no data is lost in the Vault domain tables.
    
-   Inflight messages on Kafka topics may be dropped before they are able to be consumed or processed. This applies to Vault deployments as well as upstream and downstream dependencies external to Vault (see: [Inbound Kafka topics that must be restored separately](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#inbound_kafka_topics_that_must_be_restored_separately)).
    

If inflight messages on outbound topics are dropped before they are able to be processed by downstream users, this risks users' view of state changes of Vault resources falling out of sync with the core database (the source of truth).

Each component in Vault maintains its own deployment of the Journal Poller architecture to run in isolation. These deployments are each associated with a unique bootstrap job in order to reset its state. We therefore leverage a combination of the Journal Poller architecture and the bootstrap framework to recover downstream Kafka topics for each component to a consistent state accordingly.

### [](#bootstrap_job "Copy link to heading")Bootstrap job

Leveraging the Journal Poller architecture, we can use a bootstrap job to rehydrate Kafka topics. This has the effect of restarting any asynchronous journeys that might have halted over the course of the database restore, and repopulating key streaming API topics for the use of downstream consumers. The bootstrap job targets the domain tables of the Vault component in question, and a number of bootstrap jobs must be triggered in a restore event.

The bootstrap job resets entries between a `from_timestamp` (inclusive) and `to_timestamp` (exclusive) in the event store by marking them as unprocessed. The Journal Poller architecture then retrieves those unprocessed entries and republishes them to downstream Kafka topics.

### [](#disaster_recovery_operator "Copy link to heading")Disaster Recovery Operator

Disaster recovery for a service typically involves updating a ConfigMap and running a bootstrap job. However, sometimes there are multiple ConfigMaps, multiple jobs, or even deployments that require scaling up in a specific order. The Disaster Recovery Operator is a tool you can use to automate these steps. For further information, see: [Disaster Recovery Operator instructions](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#disaster_recovery_operator_instructions)

### [](#kafka_topic_rehydration_process "Copy link to heading")Kafka topic rehydration process

When you run the Vault Kafka topic rehydration for a given component:

-   The event store of the component in question is reset within the time range you define in the bootstrap job
    
-   Downstream Kafka topics of the component are rehydrated
    
-   On being republished, entries in the event store for the component are marked as processed
    

## [](#before_you_start "Copy link to heading")Before you start

### [](#prerequisites "Copy link to heading")Prerequisites

To use these disaster recovery steps, you must be using the Kubernetes 1.14+ client.

### [](#before_you_run_the_disaster_recovery_steps "Copy link to heading")Before you run the disaster recovery steps

Before running the disaster recovery steps, you must make sure that:

-   you have restored a Postgres instance using a consistent snapshot, such that no data is lost
    
-   you have initialised a fresh Kafka cluster to use for rehydrating the topics
    
-   the Postgres instance is available to serve read and write operations
    
-   the Kafka cluster is available to serve read and write operations
    
-   if you used the Deployment Operators to deploy Vault Core, you must first scale down the Deployment Operators — for a guide, see Scaling down the Deployment Operators
    

#### [](#scaling_down_the_tmcomponent_and_crown_operators "Copy link to heading")Scaling down the TMComponent and Crown operators

If you used the TMComponent and Crown Operators to deploy Vault Core, you must first scale them down; otherwise, they will automatically revert any manual changes made to deployed resources.

chat\_bubble

If you did not use the Deployment Operators to deploy Vault Core then you do not need to do this — for the next steps, see [Using the Disaster Recovery Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#using_the_disaster_recovery_operator).

To do this, scale down their deployments using a `kubectl` command. If you installed Vault Core in a non-default namespace, use the `--namespace` flag to set the appropriate namespace.

chat\_bubble

You cannot restore journal entries that are older than seven days.

#### [](#after_restoration_from_a_database_snapshot "Copy link to heading")After restoration from a database snapshot

Snapshot restoration is considered a significant change to the distribution of data, and this causes table statistics to be obsolete. Running `ANALYZE` on the database is recommended to ensure optimal query performance. However, this can take time to complete for large datasets, and could impact subsequent use of Vault Core.

See [PostgreSQL: Run ANALYZE Afterwards](https://www.postgresql.org/docs/16/populate.html#POPULATE-ANALYZE)

### [](#inbound_kafka_topics_that_must_be_restored_separately "Copy link to heading")Inbound Kafka topics that must be restored separately

Inbound traffic that has not been processed in Vault cannot be restored because it has not reached the database. You must make separate provision for restoring inbound messages to ensure that no data is lost.

chat\_bubble

With the exception of the Postings API, the components below are optional. If you do not have these components deployed to your environment, you do not need to perform the disaster recovery process for them.

 
| Component | Kafka topic |
| --- | --- |
| 
Workflows

 | 

`vault.api.v1.workflows.workflow_instance.external_operation.responses`

 |
| 

Data Loader

 | 

`vault.data_loader_api.v1.data_loader.resource_batch.create.requests`

 |
| 

Postings API

 | 

`vault.core.postings.requests.v1` `vault.core.postings.requests.low_priority.v1`

 |
| 

Payments Hub (Bottomline gateway connector)

 | 

`vault.integrations.payments.fps.inbound.fdp.rtn.requests` `vault.integrations.payments.fps.inbound.sip.requests` `vault.integrations.payments.fps.inbound.sop.requests` `vault.integrations.payments.fps.inbound.standin.requests` `vault.integrations.payments.fps.inbound.usm` `vault.integrations.payments.fps.outbound.fdp.rtn.responses` `vault.integrations.payments.fps.outbound.sip.responses` `vault.integrations.payments.fps.outbound.sop.responses`

 |

### [](#high_level_disaster_recovery_strategy "Copy link to heading")High-level disaster recovery strategy

 
| Step | Action |
| --- | --- |
| 
1.

 | 

Maintain backups of the core database (DB) with:

-   Periodic snapshots of the DB providing zero data loss until the timestamp of the snapshot
    
-   A hot DB standby providing an up-to-date replica of the data that ensures no physical data loss
    





 |
| 

2.

 | 

When a disaster event occurs:

-   Take a 'fresh' (empty) Kafka cluster
    
-   Build a 'new' Vault instance around the backup DB; this could be a snapshot or a hot standby
    





 |
| 

3.

 | 

Run the [Disaster Recovery Operator instructions](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#disaster_recovery_operator_instructions) provided to:

-   Reset outboxes
    
-   Republish jobs to hydrate Kafka
    
-   Unblock any stuck processes
    





 |
| 

4.

 | 

Redirect traffic to the new Vault instance.

 |

## [](#disaster_recovery_operator_instructions "Copy link to heading")Disaster Recovery Operator instructions

### [](#about_the_disaster_recovery_operator "Copy link to heading")About the Disaster Recovery Operator

The Operator is itself a deployment that consumes Disaster Recovery Process Definitions (DRPDs) which can be applied to the cluster by using `kubectl`.

A single DRPD can even define recovery steps for multiple services. We provide the DRPDs as part of the Vault release pack; they are separated by Vault sub-component: Core, Edge Functions, Payments Hub, and XPL:

-   Core: `kernel-start.yaml`
    
-   Edge Functions: `edge-functions.yaml`
    
-   Schedule Jobs: `schedule-jobs.yaml`
    
-   Payments Hub: `payments-hub.yaml`
    
-   Experience Layer: `xpl.yaml`
    

Core DRPD contains the steps to rehydrate relevant Kafka topics to Vault Core. Once this completes, Vault Core is ready to handle incoming traffic again. However, Core DRPD does not contains instructions to rerun Schedule Jobs, see [Scheduler](/vault-core/5-8/EN/reference/scheduler). This is handled in Schedule Jobs DRPD, which for large deployments, this may take a number of hours to complete and it is not a blocker for allowing traffic to Vault Core.

### [](#downloadable_information "Copy link to heading")Downloadable information

You can download:

-   the `kernel-start.yaml` here: [Download](/vault-core/5-8/EN/resources/drpds/kernel-start.yaml)
    
-   the `edge-functions.yaml` here: [Download](/vault-core/5-8/EN/resources/drpds/edge-functions.yaml)
    
-   the `schedule-jobs.yaml` here: [Download](/vault-core/5-8/EN/resources/drpds/schedule-jobs.yaml)
    
-   the `payments-hub.yaml` here: [Download](/vault-core/5-8/EN/resources/drpds/payments-hub.yaml)
    
-   the `xpl.yaml` here: [Download](/vault-core/5-8/EN/resources/drpds/xpl.yaml)
    

### [](#using_the_disaster_recovery_operator "Copy link to heading")Using the Disaster Recovery Operator

warning

This guidance contains <placeholders> which you must replace with the unique details for your Vault Core instance: `<cluster>` and `<namespace>`

chat\_bubble

You cannot restore journal entries that are older than seven days.

To activate the Disaster Recovery Operator, Thought Machine recommends that you use the `vaultctl` tool to execute the necessary API calls on your behalf.

These calls trigger the following actions, in the following order:

1.  Scales up the Disaster Recovery Operator.
    
2.  Active-Passive only: Detects the appropriate `from` and `to` timestamps to pass to the Journal Bootstrappers.
    
3.  Templates the `from` and `to` timestamps into the given DRPDs, and applies them to the cluster.
    
4.  Monitors the DRPDs until they are completed, and then scales down the Disaster Recovery Operator.
    

The way that you should use this tool depends on the deployment mode of your Vault Core environment.

#### [](#standard_deployment "Copy link to heading")Standard deployment

The following instructions apply during disaster recovery of Vault Core to a new environment, after restoring the database from a snapshot.

In a standard Vault Core deployment, you must provide the `from` and `to` timestamps that are passed to the Journal Bootstrappers.

Use the following command to activate the Disaster Recovery Operator:

#### [](#active_passive_deployment "Copy link to heading")Active-Passive deployment

The following instructions apply during disaster recovery of Vault Core in the Active-Passive deployment mode, after executing the `vaultctl dr promote-env` command. In this mode, Kafka rehydration is part of a multi-step process for promoting a passive environment. For more details, see [Active-Passive environment promotions](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive#promoting_a_passive_environment).

The appropriate command flags that you must use depends on which [Kafka configuration](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive#kafka) you are using.

Standalone Kafka Replicated Kafka

In an Active-Passive Vault Core deployment with a [Standalone Kafka configuration](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive#kafka), `vaultctl` can infer the `from` and `to` timestamps automatically. The inferred `from` timestamp is derived from the maximum consumer lag of consumer groups in the active environment and the inferred `to` timestamp is the time of promotion. Use the following command to activate the Disaster Recovery Operator:

In an Active-Passive Vault Core deployment with a [Replicated Kafka configuration](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive#kafka), you can infer the `to` timestamp automatically; however, you must provide the `from` timestamp. You must derive the `from` timestamp from the lag of the Kafka replicator service. It represents a timestamp before or equal to the original timestamp of the message that was most recently replicated from the active environment. You can approximate this value to an earlier timestamp to over rehydrate and ensure that no messages are missed; however, this will impact the recovery time. The inferred `to` timestamp is the time of promotion. Use the following command to activate the Disaster Recovery Operator:

You can choose to override both timestamps using the following flags:

You may be required to do this if `vaultctl` is unable to infer the timestamps. For consistency, it is always preferable to over rehydrate than under rehydrate; however, this will affect the recovery time. In the context of the override flags, over rehydrating means setting the `--override-from-time` to an earlier timestamp than required and `--override-to-time` to a later timestamp than required.

### [](#recovery_with_multiple_databases "Copy link to heading")Recovery with multiple databases

When failing over into a secondary region - that is, using the Active-Passive deployment mode, you must restore the Warm-Storage database to an earlier state than that of Vault Core.

You can compare the databases to ascertain if manual restoration is needed. If the Warm Storage is ahead, you must restore this database to an earlier state predating that of the Vault Core database.

For more information, see [Multiple physical databases](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases#disaster_recovery) in the Advanced deployment modes guidance.

## [](#workflow_usage "Copy link to heading")Workflow usage

 
| Scenario | Information |
| --- | --- |
| 
A workflow is not started due to a disaster occurring

 | 

Any workflow that is usually started asynchronously, by a contract or another event in Vault (that is, has auto-instantiations conditions), will automatically be restarted by applying disaster recovery to those services.

 |
| 

A workflow instance is hanging due to a disaster event

 | 

The user should use the `/v1/workflow-instance-events:retryPrevious` POST endpoint for the stuck instance. This should restart the actions required for that particular instance to move on.

 |