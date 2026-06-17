---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases"
title: "Configuring multiple databases"
scraped_at: "2026-06-16T15:22:37.003Z"
images: 0
---

# Configuring multiple databases

Vault Core is designed to run on a microservices architecture, which means certain functionality and infrastructure can be deployed independently. While Vault Core uses a single database for all data by default, this is not the only deployment option.

In fact, Vault Core can run with up to three physical databases, each housing different logical databases used by different Vault Core services. Here we are referring to primary databases and not read replicas.

Vault Core supports the following database topologies:

-   All data (Vault Core, Activity, and Warm Storage data) on a single physical database. This is the default deployment option.
    
-   Vault Core and Activity data on one physical database, with Warm Storage data on a second physical database (with an optional dedicated read-only replica).
    
-   Vault Core and Warm Storage data on one physical database, with Activity data on a second physical database.
    
-   Vault Core data on one physical database, Warm Storage data on a second physical database (with an optional dedicated read-only replica), and Activity data on a third physical database.
    

warning

Vault Core only supports a read replica for a dedicated physical Warm Storage database. Read replicas for the hot database or a single physical database topology are not supported.

The Warm Storage database is an eventually consistent, read-optimised logical database that stores data derived from the hot (primary) Ledger database. It serves the following public APIs:

-   ListPostingInstructionBatches
    
-   BatchGetPostingInstructionBatches
    
-   ListAccounts
    

The Activity database stores data for audit log, action log, and contract events. It serves the following public APIs:

-   ListContractEvents (Core API)
    
-   Audit API
    

## [](#recommended_setup "Copy link to heading")Recommended setup

How many databases you should use to run your Vault Core instance depends on your Account volumes and requirements:

-   **Option 1:** If your Account volumes exceed 10 million, you should consider a multiple database option. Splitting data across three physical databases will reduce contention and lead to increased data capacity and performance for the highest volumes of traffic.
    
-   **Option 2:** If your Account volumes exceed 30 million and you have a requirement for low latency on ListPostingInstructionBatches calls, you should consider additionally configuring and using a dedicated read replica for the Warm Storage database. Refer to your service provider’s documentation to determine the most suitable way of enabling this for your particular use case.
    

For the majority of Vault Core deployments, Option 1 is strongly recommended and will satisfy all functional and non functional requirements. Option 2 introduces additional operational and cost overhead; therefore, by default it is not recommended.

chat\_bubble

Contact your Thought Machine representative, or raise an advice ticket via the client portal for information about using a multiple database setup. Because it increases operational effort, it is only required for very large deployments or deployments aimed at maximum performance.

Using multiple databases has implications for disaster recovery - for more information, see the [Vault Disaster Recovery guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery) and [Using multiple physical databases](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases).

## [](#new_vault_core_installations "Copy link to heading")New Vault Core installations

Thought Machine supports the following configurations for new installations of Vault Core:

 
| Number of physical databases | Configuration |
| --- | --- |
| 
1

 | 

Everything

 |
| 

2

 | 

1.  Vault Core + Activity
    
2.  Warm Storage
    





 |
| 

2

 | 

1.  Vault Core + Warm Storage
    
2.  Activity
    





 |
| 

3

 | 

1.  Vault Core
    
2.  Warm Storage
    
3.  Activity
    





 |

## [](#values_yaml_settings "Copy link to heading")values.yaml settings

Relevant settings to add to the `values.yaml` file for configuring multiple databases when installing Vault Core:

 
| Parameter | Description |
| --- | --- |
| 
`warm_storage.db.host`

 | 

Must point to the Warm Storage database if separate.

 |
| 

`warm_storage.db.replica.host`

 | 

Optional: Read-only endpoint for the Warm Storage database (if required - see above).

This can be a single hostname, a comma-separated list of hostnames to use in order of preference, or a read-only endpoint exposed by your service provider, depending on your resiliency requirements.

 |
| 

`warm_storage.db_init.host`

 | 

Comma-separated list of database hosts to initialise, but not actively use.

This is distinct from the `db.host` setting and only of use if you intend to set up additional databases for replication. The schema is initalised for hosts assigned to this parameter.

Contact Thought Machine if you need advice.

 |
| 

`audit.db.host`

 | 

Must point to the Activity database if separate.

 |
| 

`contract_events.db.host`

 | 

Must point to the Activity database if separate.

 |

## [](#existing_vault_core_installations "Copy link to heading")Existing Vault Core installations

You can set up multiple databases for an existing Vault Core installation. However, you must consider how migrating your existing system to a multiple database setup can affect disaster recovery.

Data in the Activity database is not subject to the disaster recovery process, thus reducing the complexity of the migration.

The following sections cover the process of migration, but you should also refer to [Background to the disaster recovery process for Vault Core with multiple physical databases](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases#background_to_the_disaster_recovery_process_for_vault_core_with_multiple_physical_databases).

You can find information about making changes to the host settings in the [values.yaml](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#values_yaml_settings) section of this guide; however, there are some additional precautions to take.

## [](#migrating_to_an_additional_database "Copy link to heading")Migrating to an additional database

The following information describes approaches to clone or replicate an existing database to help backfill into a two-database setup.

### [](#prerequisites "Copy link to heading")Prerequisites

Before migrating to an additional physical database, you should have completed a standard Vault Core installation on a single database.

Each implementation of PostgreSQL within each cloud service provider has its own additional nuances. You can classify these by ease of migration:

1.  It supports same-region read-replica setup and promotion into a standalone instance - this is the most straightforward method to migrate with.
    
2.  It supports cloning the database within the same region.
    
3.  It supports cross-region replication.
    
4.  It does not support cloning the database or cross-region replication - this requires you to take manual action.
    

Cross-region operations have cost and time implications. It is possible to back up and restore from a snapshot, with the greatest time cost.

Thought Machine recommends that you keep the original databases for approximately seven days, until it is no longer possible to revert to them without loss of data.

### [](#resources_affected_by_the_database_migration "Copy link to heading")Resources affected by the database migration

#### [](#migrating_warm_storage_to_a_separate_database "Copy link to heading")Migrating Warm Storage to a separate database

##### [](#api_endpoints "Copy link to heading")API endpoints

It is still possible to read from the following API endpoints, but they are not updated while migration is in progress:

-   `/v1/ListPostingInstructionBatches`
    
-   `/v1/BatchGetPostingInstructionBatches`
    
-   `/v2/ListAccounts`
    

##### [](#services "Copy link to heading")Services

You must scale down the following services during the database migration:

-   Accounts Migrator
    
-   Usage Monitor
    
-   Warm Storage Inserter
    

##### [](#kafka_topics "Copy link to heading")Kafka topics

The following Kafka topics are affected by the database migration:

###### [](#input_into_warm_storage "Copy link to heading")Input into Warm Storage

Backlog will build up on these topics while the Warm Storage Inserter is scaled down:

-   `vault.core.accounts.account.events`
    
-   `vault.core.ledger.instruction_group.events`
    
-   `vault.core.ledger.instruction_group.migrated.events`
    

###### [](#output_from_warm_storage "Copy link to heading")Output from Warm Storage

While the Warm Storage Inserter is scaled down, backlog builds up on the following Kafka topics:

-   `vault.core.accounts.warm_storage.events` → `vault.core_api.v2.accounts.account.events`
    
-   `vault.core.posting_instruction_batch.created.event` → `vault.api.v1.postings.posting_instruction_batch.created`
    
-   `vault.core.balances.account_balance.events` → `vault.core_api.v1.balances.account_balance.events`
    

###### [](#internal_dlqs "Copy link to heading")Internal DLQs

These topics do not receive any new messages while you scale down the Warm Storage Inserter:

-   `vault.core.accounts.warm_storage.events.warm_storage.dlq`
    
-   `vault.core.ledger.instruction_group.events.warm_storage.dlq`
    
-   `vault.core.ledger.instruction_group.migrated.events.warm_storage.dlq`
    

#### [](#migrating_activity_data_to_a_separate_physical_database "Copy link to heading")Migrating Activity data to a separate physical database

##### [](#api_endpoints_2 "Copy link to heading")API endpoints

It is still possible to read from the affected API endpoints, but they are not updated while migration is in progress.

##### [](#services_2 "Copy link to heading")Services

You must scale down the following services during the database migration:

-   `audit-processor`
    
-   `contract-events-collector`
    

##### [](#kafka_topics_2 "Copy link to heading")Kafka topics

The following Kafka topics are affected by the database migration:

###### [](#inputs_into_affected_services "Copy link to heading")Inputs into affected services

Backlog will build up on these topics while services are scaled down:

-   `vault.core.audit.creation_requests`
    
-   `vault.core.contract_events.contract_execution.events`
    

###### [](#output_from_activity "Copy link to heading")Output from Activity

While services are scaled down, backlog builds up on the following Kafka topics:

-   `vault.core_api.v1.contract_events.contract_execution.events`
    
-   `vault.api.v1.audit_logs.audit_log.created`
    
-   `vault.api.v1.action_logs.action_log.created`
    

### [](#step_by_step_plan_for_migration "Copy link to heading")Step-by-step plan for migration

This is a high-level illustration of a plan to migrate to an additional database setup:

1.  Pause affected Vault Core services by [scaling down the relevant Kafka consumers](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#scaling_services_during_migration).
    
2.  Clone the database instance:
    
    1.  Update `values.yaml` to point to the new database.
        
    2.  Reinstall/update Vault Core.
        
    3.  [Query the API](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#testing_the_api) to verify functionality.
        
    
3.  Re-enable the affected Vault Core services by scaling up the relevant Kafka consumers.
    

chat\_bubble

You can clone the database instance by restoring it from a new snapshot when other duplication method are not available.

The API endpoints and Kafka topics that the database migration affects are frozen in between the scaling down and scaling up of services.

#### [](#lower_downtime_approach "Copy link to heading")Lower-downtime approach

You can reduce the downtime for the affected APIs by using replication. Some cloud service providers provide features that help streamline this process.

1.  Create a replica with physical replication and wait for the replication lag to settle close to `0`.
    
2.  Pause the affected Vault Core services by [scaling down the relevant Kafka consumers](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#scaling_services_during_migration).
    
3.  Convert the replica into a standalone instance:
    
    1.  Wait for replication to the new database instances.
        
    2.  Promote the replica into a standalone database instance.
        
    
4.  Switch database configuration by updating `values.yaml` to point to the new database - see [related values.yaml settings](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#values_yaml_settings).
    
5.  Reinstall/update Vault Core and [query the API](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#testing_the_api) to verify access to the new database.
    
6.  Re-enable the affected Vault Core services by scaling up the relevant Kafka consumers.
    

chat\_bubble

-   The replica may be a primary or standby instance that you have configured to receive data. For more information, see the [PostgreSQL Replication Server Configuration](https://www.postgresql.org/docs/14/runtime-config-replication.html) documentation.
    
-   Manually promoting the replica involves terminating replication connections.
    

The database replication management features available depend on the specific cloud service provider product you are using. The replication you perform here is independent of Vault Core.

Thought Machine expects the process of cloning a database instance to take hours, while promoting the replica into a standalone database instance takes several minutes. However, you should allow more recovery time to cater for any potential difficulties you might experience during this process.

### [](#scaling_services_during_migration "Copy link to heading")Scaling services during migration

During a migration there should be no writes to the database. To prevent writes, scale down the relevant Kafka consumers:

-   For the Warm Storage database, this is `warm-storage-inserter`
    
-   For the Activity database, these are `audit-processor` and `contract-events-collector`
    

chat\_bubble

Processing may continue for a short while as downstream lag clears. Make sure activity in the logical databases has stopped before continuing.

### [](#verifying_migrations "Copy link to heading")Verifying migrations

To verify that the database migration is successful, make sure that:

1.  The configuration changes are correct.
    
2.  It is possible to operate Vault Core services.
    
3.  Any accidental misconfiguration of the database host parameters does not lead to data loss.
    

#### [](#testing_the_api "Copy link to heading")Testing the API

You can run the following queries before and after installing Vault Core with the changes to the `values.yaml` configuration to verify that the API is still accessible.

To do this, you require either a JSON Web Token (JWT) or Service Account token.

##### [](#warm_storage "Copy link to heading")Warm Storage

###### [](#listing_accounts "Copy link to heading")Listing Accounts

Verify that you can return a list of accounts. A successful response verifies operation of the Warm Accounts database:

###### [](#listing_posting_instruction_batches "Copy link to heading")Listing Posting Instruction Batches

Verify that the Warm Ledger is accessible, and check how recent the data is:

##### [](#activity "Copy link to heading")Activity

###### [](#contract_events "Copy link to heading")Contract events

Verify that the API is reachable:

###### [](#audit "Copy link to heading")Audit

Verify that the API is reachable:

### [](#disabling_the_old_database "Copy link to heading")Disabling the old database

Keeping the old database allows you to roll back - see [Rolling back from an additional database](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#rolling_back_from_an_additional_database) for more information. However, you should ensure that you do not use the old database accidentally - therefore, it should be disabled.

Only a superuser of the database can disable the old database and perform a rollback. The following steps explain how to disable the old database:

1.  Connect to the base database of the primary physical database, for example `postgres`.
    
2.  Check for any ongoing activity using this connection:
    
3.  Terminate any remaining connections that are idle:
    
4.  Rename the database to protect against any accidental access:
    

After successfully completing the renaming, query the API to verify that you have correctly configured the Vault Core database parameters.

#### [](#deleting_the_warm_storage_database "Copy link to heading")Deleting the Warm Storage database

You can delete the renamed database if it is no longer possible to roll back the database, or if you no longer require it.

Run this command to drop the database:

1.  Drop the database.
    

### [](#cleaning_up_duplicated_schemas_in_the_new_physical_database "Copy link to heading")Cleaning up duplicated schemas in the new physical database

Performing cloning or physical replication to obtain the second database instance results in duplicating the schemas.

You must remove any unnecessary schemas. Before purging these schemas, it is safer to rename these logical databases first by giving them a temporary name to ensure there are no active connections.

The superuser must clean up the following databases in all new physical databases:

-   access\_control
    
-   calendar
    
-   calendar\_schedules
    
-   core
    
-   vault
    
-   data\_loader
    
-   edge\_functions
    
-   eplatform
    
-   integrations
    
-   ops
    
-   scheduler
    
-   schedule\_manager
    
-   vault\_jobs
    
-   xpl
    

The following databases may not exist; therefore, you can ignore any errors that reference them:

-   data\_retention
    
-   switchboard
    
-   usage
    

In the Warm Storage database only, the superuser should also clean up:

-   audit
    
-   contract\_events (If it exists)
    

In the Activity database only, the superuser should also clean up:

-   warm\_storage (If required)
    

info

If the database is still in active use, you will receive an error when you rename or delete it.

Duplicated schemas in the new database should not be in use; therefore, the action of modifying the schema serves as a warning.

#### [](#renaming_unwanted_databases "Copy link to heading")Renaming unwanted databases

A superuser can rename any unwanted databases - the following example provides as a suggestion for the naming scheme to use for each one:

#### [](#deleting_the_unwanted_databases "Copy link to heading")Deleting the unwanted databases

A superuser can safely delete the unwanted databases once they have renamed the databases in question and verified that Vault Core is operating correctly.

This example command deletes the unwanted databases:

## [](#aborting_the_migration "Copy link to heading")Aborting the migration

At any point from scaling down services to the point of re-enabling them, you have the ability to abort the migration if necessary.

To perform a rollback while migrating before/during downtime:

1.  Stop any ongoing replication to the new database.
    
    chat\_bubble
    
    This may not be possible with a database that is managed by a cloud service provider. Instead, deleting the new database later is sufficient.
    
2.  Revert the database configuration to its original state:
    
    1.  Reinstall/update Vault Core with the original database configuration.
        
    2.  [Query the API](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#testing_the_api) to verify access to the original database.
        
    
3.  Scale the services back up.
    

This is straightforward as long as services have not consumed any queued events that you intended for the new database. You can discard any new databases you have created at this point.

## [](#rolling_back_from_an_additional_database "Copy link to heading")Rolling back from an additional database

You can revert any databases that you have recently migrated back to the original physical database.

For the Warm Storage database, you can roll back within seven days, which is the default time-to-live (TTL) period for the event journal.

For the Activity database, you can conduct a rollback within two days of the migration and re-consume the relevant messages to restore data. Contact your Thought Machine representative for help with this.

### [](#rolling_back_a_warm_storage_migration "Copy link to heading")Rolling back a Warm Storage migration

warning

This operation will cause prolonged downtime because the Account and Posting retrieval from the API is not in a consistent state while re-consolidating the databases.

1.  Pause Vault Core services:
    
    1.  Pause the Warm Storage Inserter by scaling it down:
        
    2.  Pause the other Vault Core [services](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#services_2).
        
    3.  Place Vault Core into [Passive mode](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#passive_mode).
        
    
2.  Revert and reinstall database configuration:
    
    1.  Revert any database renaming:
        
        See [Disabling the old database](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#disabling_the_old_database).
        
    2.  Reinstall original database configuration via the [values.yaml settings](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#values_yaml_settings) - point Warm Storage to the original database.
        
    
3.  Flush any Ledger and Account events from the affected Kafka topics.
    
4.  Initiate replaying Ledger and Account events for Warm Storage:
    
    1.  Scale up the [Disaster Recovery Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#disaster_recovery_operator_instructions).
        
        You must [scale down the TMComponent and crown operators](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#scaling_down_the_tmcomponent_and_crown_operators) if it is in use.
        
    2.  Run the Disaster Recovery rehydration process for Warm Storage - see [Using the Disaster Recovery Operator](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#using_the_disaster_recovery_operator).
        
        For an example Disaster Recovery Process Definition (DRPD) for topics consumed by Warm Storage, see [Example Warm Storage DRPD](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases#example_warm_storage_drpd).
        
    3.  Scale up the Warm Storage Inserter:
        
    

chat\_bubble

Data from Warm Storage returns old data until the replay is complete, so you must take care with these components and API endpoints.

#### [](#resources_affected_from_reverting_the_migration "Copy link to heading")Resources affected from reverting the migration

##### [](#services_3 "Copy link to heading")Services

You must scale down the following services during the reverse-migration:

-   Accounts Migrator
    
-   Usage Monitor
    
-   Ledger Migrator
    
-   Ledger Router
    
-   Ledger Poller
    
-   Warm Storage Inserter
    

##### [](#api_endpoints_3 "Copy link to heading")API endpoints

-   `ListPostingInstructionBatches`
    
-   `BatchGetPostingInstructionBatches`
    
-   `ListAccounts`
    

##### [](#kafka_topics_3 "Copy link to heading")Kafka topics

The following Kafka topics are affected by the database reverse-migration:

###### [](#input_into_warm_storage_2 "Copy link to heading")Input into Warm Storage

While the Warm Storage Inserter is scaled down, backlog builds up on the following Kafka topics. Scaling down the Ledger components will stop all publishing to these topics.

-   `vault.core.accounts.account.events`
    
-   `vault.core.ledger.instruction_group.events`
    
-   `vault.core.ledger.instruction_group.migrated.events`
    

###### [](#output_from_warm_storage_2 "Copy link to heading")Output from Warm Storage

There are no new messages from these topics while the Warm Storage Inserter is scaled down:

-   `vault.core.accounts.warm_storage.events` → `vault.core_api.v2.accounts.account.events`
    
-   `vault.core.posting_instruction_batch.created.event` → `vault.api.v1.postings.posting_instruction_batch.created`
    
-   `vault.core.balances.account_balance.events` → `vault.core_api.v1.balances.account_balance.events`
    

###### [](#internal_dlqs_2 "Copy link to heading")Internal DLQs

The Warm Storage Inserter produces the following internal DLQs:

-   `vault.core.accounts.warm_storage.events.warm_storage.dlq`
    
-   `vault.core.ledger.instruction_group.events.warm_storage.dlq`
    
-   `vault.core.ledger.instruction_group.migrated.events.warm_storage.dlq`
    

#### [](#passive_mode "Copy link to heading")Passive mode

You must set the value `common.mode.passive` to enable Passive mode in the `values.yaml` file:

### [](#rolling_back_an_activity_database_migration "Copy link to heading")Rolling back an Activity database migration

You can roll back to the original database within two days of the migration. Contact your Thought Machine representative for help with this process.

1.  Pause affected Vault Core services by [scaling down the relevant Kafka consumers](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#scaling_services_during_migration).
    
2.  Revert and reinstall database configuration:
    
    1.  Revert any database renaming - see [Disabling the old database](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#disabling_the_old_database).
        
    2.  Update `values.yaml` to point to the new database.
        
    3.  Reinstall/update Vault Core.
        
    4.  [Query the API](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#testing_the_api) to verify functionality.
        
    
3.  Re-enable the affected Vault Core services by scaling up the relevant Kafka consumers.
    
4.  Rewind the Kafka consumer offsets of the [relevant consumers](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases#scaling_services_during_migration) to hydrate data written during the migration. Contact your Thought Machine representative for help with this.
    

## [](#configuring_snapshots "Copy link to heading")Configuring snapshots

You should consider using Point-in-Time-Recovery and snapshot frequency, which are methods to restore a new database instance in the event of a disaster. For more information, see [Background to the disaster recovery process for Vault Core with multiple physical databases](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/multiple_physical_databases#background_to_the_disaster_recovery_process_for_vault_core_with_multiple_physical_databases).