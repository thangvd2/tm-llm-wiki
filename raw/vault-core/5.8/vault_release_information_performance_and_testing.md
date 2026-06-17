---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/vault_release_information/performance_and_testing"
title: "Performance and testing"
scraped_at: "2026-06-17T05:28:53.039Z"
images: 0
---

# Performance and testing

## [](#performance_report "Copy link to heading")Performance report

### [](#about_the_performance_tests "Copy link to heading")About the performance tests

Performance tests use the public endpoints (HTTP or Kafka) that Vault exposes to replicate behaviour as closely as possible to real-world behaviour.

In all cases, the reported results are end-to-end measurements as observed by our load test frameworks and therefore representative of Vault API usage.

There are many parameters that adjust the trade-offs in Vault between cost, availability, and performance. These tests have been executed using realistic cloud hardware for banks of particular sizes.

### [](#the_performance_report "Copy link to heading")The performance report

Here are the reports for [AWS](/vault-core/5-8/EN/resources/performance_reports/vault_core_performance_report_aws.html), [Azure](/vault-core/5-8/EN/resources/performance_reports/vault_core_performance_report_azure.html) and [GCP](/vault-core/5-8/EN/resources/performance_reports/vault_core_performance_report_gcp.html).

chat\_bubble

Upon re-evaluation, the performance test for the end of day balance reconciliation journey does not align to client usage of the LedgerBalances API resource and therefore is not a useful measure of performance of this journey. Therefore this test will be removed and no longer reported from 5.9.0.

## [](#disaster_recovery_test_report "Copy link to heading")Disaster recovery test report

### [](#about_this_document "Copy link to heading")About this document

#### [](#background "Copy link to heading")Background

Disaster recovery (DR) in Vault Core involves ensuring that Thought Machine:

-   Restores any affected systems as quickly as possible
    
-   Understands the context within which a disaster can occur (the 'failure domain')
    
-   Can quantify and minimise any resultant data loss
    

#### [](#purpose "Copy link to heading")Purpose

This document describes:

-   How Thought Machine determine the potential scope of data loss in Vault Core
    
-   The strategies in place to deal with potential data loss
    
-   The testing that Thought Machine performs to verify that those strategies are effective
    
-   The results of that testing and any conclusions drawn
    

chat\_bubble

For information about the disaster recovery steps you should run in Vault Core after a database backup, see the [Vault Core Disaster Recovery Guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_disaster_recovery#about_this_guide).

#### [](#scope "Copy link to heading")Scope

This document covers the Vault Core services that were DR tested for Vault Core 5.8. These services are:

-   Accounts
    
-   Calendar
    
-   Flags
    
-   Payment Devices
    
-   Postings
    
-   Restrictions
    
-   Scheduler
    
-   Smart Contracts
    
-   Credit Transfers
    
-   Vault Jobs
    
-   Parameter Values
    
-   Edge Functions
    

#### [](#audience "Copy link to heading")Audience

This document should be used by client engineers who are interested in our DR testing.

### [](#disaster_recovery_in_vault_core "Copy link to heading")Disaster Recovery in Vault Core

#### [](#what_is_a_failure_domain "Copy link to heading")What is a failure domain?

A failure domain is the context within which a disaster can occur. A failure domain could be, for example:

-   A single server
    
-   Vault Core’s database
    
-   A data centre or availability zone
    
-   A Kafka cluster
    
-   A cloud region
    

#### [](#failure_domains_and_infrastructure_configurations "Copy link to heading")Failure domains and infrastructure configurations

Identifying potential failure domains helps ensure that Thought Machine:

-   Uses an infrastructure configuration that can cater for the loss of failure domains Thought Machine identifies as important
    
-   Understands the ramifications of the Recovery Point Objective (RPO) and the Recovery Time Objective (RTO)
    
-   Can adjust the underlying infrastructure configuration where necessary
    

chat\_bubble

For information about the RPO and RTO, see the [Database and Kafka failover test](#database_and_kafka_failover_test).

#### [](#infrastructure_configuration_example "Copy link to heading")Infrastructure configuration example

Thought Machine might, for example, hypothesise that the best possible infrastructure configuration would be to have two hot database standbys in two far away regions. However this could result in increased write commit time that makes Vault Core slow or cause timeouts if the regions are very far away.

#### [](#data_loss_overview "Copy link to heading")Data loss overview

Although the database in Vault Core is the 'single source of truth' for Vault, Thought Machine cannot simply 'failover' to a hot standby. As the data in the database is accessed by APIs only, Thought Machine must also ensure any data loss that is observable externally using these APIs is also considered. This could include, for example, a message getting 'lost' between writing to the database and writing to a streaming API topic and the journey getting 'stuck'.

#### [](#strategies_used_by_vault_core_to_address_data_loss "Copy link to heading")Strategies used by Vault Core to address data loss

##### [](#transactional_outbox_pattern "Copy link to heading")Transactional outbox pattern

-   Often used in Vault Core journeys that have an asynchronous element.
    
-   A service using this pattern writes an intent to its database (or 'outbox') before acknowledging each request.
    
-   In a happy path case, the work is done and the intent is resolved.
    
-   In an unhappy path case where the service dies, an accompanying 'poller' service picks up the unresolved intent and retries it. Since all intents (regardless of whether they have been resolved) are kept, Thought Machine can leverage the 'poller architecture' to 'rehydrate' a fresh Kafka cluster from an existing Vault Core database. For example, in a disaster recovery site, Thought Machine can simply mark all relevant intents as unresolved.
    

##### [](#job_republishing "Copy link to heading")Job republishing

-   Used in Vault Core journeys that have a scheduled component.
    
-   If a disaster event occurs while a scheduled job is in-flight, the process can become 'stuck'.
    
-   For example, a Smart Contract might have calculated an interest accrual but not yet applied the resulting postings to the database. Thought Machine can request jobs are 'republished', this will trigger the end-to-end journey of each job again. Leveraging the idempotent characteristics of Vault Core means the jobs will effectively pick up from where they got stuck.
    

##### [](#alternative_kafka_strategy_considered "Copy link to heading")Alternative Kafka strategy considered

Thought Machine considered backing up Kafka in lockstep with the Vault Core database but decided this approach was not appropriate because:

-   It is difficult to take a consistent snapshot of two datastores, especially in a scenario where each store is underpinned by different technologies (Postgres vs. Kafka in this case)
    
-   As Kafka is much less 'forgiving' around commit latency, synchronous replication of Kafka outside the region is generally not recommended
    

### [](#disaster_recovery_testing_in_vault_core "Copy link to heading")Disaster Recovery testing in Vault Core

#### [](#about_disaster_recovery_testing "Copy link to heading")About disaster recovery testing

Thought Machine performs disaster recovery testing by simulating a disaster event then performing tests to measure:

-   Data loss against the Recovery Point Objective (RPO)
    
-   The time taken to recover the data against the Recovery Time Objective (RTO)
    

For information about the RPO and RTO values that Thought Machine is testing against, see the [Database and Kafka failover test](#database_and_kafka_failover_test).

#### [](#infrastructure_setup_overview "Copy link to heading")Infrastructure setup overview

Thought Machine performed Disaster Recovery testing with two distinct Active-Passive configurations:

-   [Single database with a standalone Kafka cluster](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive#vault_core_setup)
    
-   [Multiple databases with kafka-based derived database replication](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/advanced_deployment_modes/active_passive#kafka_based_derived_database_replication_mode)
    

##### [](#single_database_with_a_standalone_kafka_cluster "Copy link to heading")Single database with a standalone Kafka cluster

In this configuration:

-   Vault Core is deployed in an active (primary) Kubernetes cluster and a passive (secondary) Kubernetes cluster
    
-   The active database is replicated asynchronously to the passive environment
    

The deployment in the passive (secondary) cluster has the Scheduler-ticker service scaled down to 0 replicas

##### [](#multiple_databases_with_kafka_based_derived_database_replication "Copy link to heading")Multiple databases with kafka-based derived database replication

In this configuration:

-   Vault Core is deployed in an active (primary) Kubernetes cluster and a passive (secondary) Kubernetes cluster
    
-   The active hot database is replicated asynchronously to the passive environment
    
-   The active Kafka cluster is replicated asynchronously to the passive environment
    
-   The passive Warm Storage database is populated from the replicated Kafka cluster
    

The deployment in the passive (secondary) cluster has the Scheduler-ticker service scaled down to 0 replicas

#### [](#test_overview "Copy link to heading")Test overview

1.  Generate an activity continuously in the system by:
    
    1.  Sending requests to the APIs used by Vault Core at a configurable rate (RPS).
        
    2.  Collecting relevant events published by Vault Core’s Streaming APIs.
        
    
2.  Simulate a disaster event in the active (primary) cluster; Kafka networking is cut at the ingress level causing a partial outage. A network policy is then applied blocking all access to the instance.
    
    The recovery process is triggered, with a failover into the passive (secondary) cluster; any in-flight API requests are recovered.
    
3.  Reconcile the state of the system exposed through the REST APIs and the events collected from the Streaming APIs.
    
    For more detailed information, see the [Failover and recovery procedure: Promoting the passive (secondary) instance](#failover_and_recovery_procedure_promoting_the_passive_secondary_instance).
    
4.  Generate a CSV test summary file containing:
    
    1.  All dispatched requests
        
    2.  Collected events
        
    3.  Any additional system metrics
        
    
5.  Review the CSV test summary file and determine:
    
    1.  Round-trip times and total recovery time.
        
    2.  Whether any of the expected events on the public streaming API or any expected state alterations on the REST APIs are missing (RPO) for any request successfully acknowledged by the system.
        
    
6.  Review the RPO and RTO values against the defined values to determine whether the tests have passed or failed.
    

#### [](#failover_and_recovery_procedure_promoting_the_passive_secondary_instance "Copy link to heading")Failover and recovery procedure: Promoting the passive (secondary) instance

1.  Promote the passive (secondary) DB instance to a standalone replica.
    
2.  Update the DNS records of the endpoints used by Vault Core and the Kafka endpoints to resolve to the secondary instance.
    
    chat\_bubble
    
    This redirects user requests to the healthy Vault Core instance after they refresh their DNS caches (which should happen in 60 seconds if TTL is observed by their DNS resolvers).
    
3.  Scale up resources in the secondary Vault Core instance.
    
4.  Restore the in-flight traffic using the steps in the Vault Core Disaster Recovery Guide included with the release.
    

### [](#tests_performed_and_results "Copy link to heading")Tests performed and results

#### [](#database_and_kafka_failover_test "Copy link to heading")Database and Kafka failover test

 
| Test scenario covered: | Total regional failure |
| --- | --- |
| 
Services under test:

 | 

-   Accounts
    
-   Calendar
    
-   Flags
    
-   Payment Devices
    
-   Postings
    
-   Restrictions
    
-   Scheduler
    
-   Smart Contracts
    
-   Credit Transfers
    
-   Vault Jobs
    
-   Parameter Values
    
-   Edge Functions
    





 |
| 

Description:

 | 

A load was generated against the Accounts API, Postings API and Edge Functions API. While the requests were being processed by the system, a failover into the standby database and Kafka was forced

 |
| 

Recovery objectives:

 | 

-   RPO: seconds (determined by database replication lag)
    
-   RTO: 30 minutes to 120 minutes
    





 |
| 

Steps follow:

 | 

1.  Start the test suites.
    
2.  Simulate a disaster event.
    
3.  Perform the [Failover and recovery procedure](#failover_and_recovery_procedure_promoting_the_passive_secondary_instance).
    
4.  Collect the test results.
    
5.  Compare against the RPO and RTO values.
    
6.  Determine if the service under test passes or fails.
    





 |
| 

Results overview:

 | 

-   Accounts: PASSED
    
-   Calendar: PASSED
    
-   Flags: PASSED
    
-   Payment Devices: PASSED
    
-   Postings: PASSED
    
-   Restrictions: PASSED
    
-   Scheduler: PASSED
    
-   Smart Contracts: PASSED
    
-   Credit Transfers: PASSED
    
-   Vault Jobs: PASSED
    
-   Parameter Values: PASSED
    
-   Edge Functions: PASSED
    





 |
| 

Commentary:

 |  |
| 

Fixes:

 |  |
| 

Conclusions

 | 

Tests passed cleanly

 |

## [](#test_report "Copy link to heading")Test report

### [](#preface "Copy link to heading")Preface

This document provides information on the type of functional tests executed and also the number of tests executed for this Vault release. Most regression tests executed are automated unless explicitly mentioned. We categorise our automated tests into three types:

-   Unit Tests: Tests which check functionality of individual bits of code
    
-   SAT (Service acceptance tests): Tests which check functionality of individual service with dependent services mocked
    
-   E2E (End to End tests): Tests which are run on a deployed instance of Vault which either cover an Acceptance criteria or a specific user journey spanning multiple services/components
    

chat\_bubble

NOTES:

-   Sometimes we also run additional manual exploratory tests along with automated tests during the development phase, but due to the nature of them being exploratory we don’t document them. If we find any issues during exploratory testing, we write an automated test to cover the use case and it is added to our regression test suite.
    
-   For all reported known issues, we assess the impact and suggest any workarounds if available.
    

### [](#introduction "Copy link to heading")Introduction

This document presents the final overview of the functional testing performed for this release and Internal Vault Release Candidates delivered as part of the test cycle of this release.

In the scope of this document are:

-   QE Recommendation
    
-   QE Recommendation per Vault Component
    

### [](#quality_engineering_qe_recommendation "Copy link to heading")Quality Engineering (QE) Recommendation

Based on the test results for the features within this Vault Release, QE recommends *GO* for this release.

The reasoning behind this recommendation is contained in the following sections of this Test Report.

### [](#quality_recommendation_per_vault_component "Copy link to heading")Quality Recommendation per Vault Component

Based on the test results for all Products contained within Vault, QE make the following Quality recommendation:

  
| Component | QE recommendation | Comments/Risks |
| --- | --- | --- |
| 
Account Management

 | 

GO

 |  |
| 

Smart Contracts and Simulator

 | 

GO

 |  |
| 

Ledger

 | 

GO

 |  |
| 

Scheduler

 | 

GO

 |  |
| 

Workflows and Ticket Engine

 | 

GO

 |  |
| 

Vault Applications

 | 

GO

 |  |
| 

Payments Hub

 | 

GO

 |  |
| 

Experience Layer

 | 

GO

 |  |

## [](#upgrade_path_testing "Copy link to heading")Upgrade Path Testing

### [](#about_upgrade_path_testing "Copy link to heading")About Upgrade Path Testing

These tests are run to make sure Vault Core can be upgraded from an older version to a newer version without downtime, unless explicitly stated otherwise. We test upgrades from the latest patch of all Minor Releases in the current Major Release line, as well as from the last Minor Release on the previous Major line. For definitions and naming conventions of releases see the [Vault Core Release Policy](/policy/latest/EN/company_policies_and_procedures/vault_core_release_policy#definitions). The tests cover installations, upgrades for both [small-scale and large-scale deployment sizes](/vault-core/5-8/EN/vault_release_information/performance_and_testing#deployment_size), [rollbacks](/policy/latest/EN/company_policies_and_procedures/vault_core_release_policy#rollbacks), any version-specific data migrations, as well as downtime.

chat\_bubble

Contracts Language (CL)

Upgrades from the 4.X release line use CLv3 contracts whereas upgrades starting on the 5.X release line use CLv4 contracts.

#### [](#deployment_size "Copy link to heading")Deployment size

Tests have been executed using realistic cloud hardware for banks of particular sizes based on a Standard Retail Blend bank profile. For further information on Standard Retail Blend, refer to the Bank profiles in the [performance report](/vault-core/5-8/EN/vault_release_information/performance_and_testing#the_performance_report) for your cloud service provider.

-   small-scale : 100k accounts and 4mil postings run on GCP
    
-   large-scale : 30mil accounts and 4bn postings run on GCP
    

### [](#acceptance_criteria "Copy link to heading")Acceptance Criteria

Both before and after the upgrade, performance tests are carried out to ensure that the End of Day business process completes within the defined performance thresholds. For more information on performance tests click [here](/vault-core/5-8/EN/vault_release_information/performance_and_testing#about_the_performance_tests). For Vault Core 4.7, additional end to end tests are run to test the functionality of the upgrade path data migration job.

During the upgrade there is constant monitoring of the Core API endpoints to detect service downtime. Unless explicitly stated otherwise, there will be no downtime.