---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/vault_release_information/patch_release_notes"
title: "Patch Release Notes"
scraped_at: "2026-06-16T15:24:42.644Z"
images: 0
---

# Patch Release Notes

## [](#5_8_24_patch_release_fixes "Copy link to heading")5.8.24 Patch Release Fixes

### [](#adjustments "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-128530

 | 

Parameter fetching now supports more than 100 Parameters to be fetched during Smart Contract execution.

 |

### [](#async_ledger_operations "Copy link to heading")Async Ledger Operations

 
| Reference | Description |
| --- | --- |
| 
TM-128844

 | 

Updated the post-posting sequencer’s logic to correctly handle `Custom Instructions` that affect multiple accounts. The sequencer now correctly groups postings by customer account ID, ensuring that all postings associated with the instruction are included in its output.

 |

### [](#observability "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-148331

 | 

Upgrade prometheus from version 3.11.2 to 3.12.0.

 |
| 

INFRA-148332

 | 

Upgrade opentelemetry-target-allocator from version 0.151.0 to 0.152.0.

 |
| 

INFRA-154432

 | 

Upgrade grafana from version 13.0.1-security-01 to 13.0.2.

 |
| 

INFRA-154433

 | 

Upgrade opentelemetry-operator from version 0.151.0 to 0.152.0.

 |

### [](#scheduler "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-128362

 | 

Updated the logic for schedule directives committer to first apply the updates for all the matching directives, and then returning the error map of the failed ones only after the other updates have gone through.

 |

## [](#5_8_23_patch_release_fixes "Copy link to heading")5.8.23 Patch Release Fixes

### [](#contracts_platform "Copy link to heading")Contracts Platform

 
| Reference | Description |
| --- | --- |
| 
TM-122161

 | 

The `attribute_hook` now correctly uses the timezone of the account’s Processing Group in `vault.event_timezone`.

 |

### [](#observability_2 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-154860

 | 

Upgrade kube-state-metrics from version 2.18.0 to 2.19.0.

 |

### [](#vc_product_configuration "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-127882

 | 

Internal calls to the Parameter service now returns all Parameter Values when the request contains multiple Parameters and the response is split accross multiple pages. This did not affect the GET v1/parameter-values endpoint but it did affect other Vault services that depend on the Parameter service (Adjustments and Existing Account Simulation).

 |

## [](#5_8_22_patch_release_fixes "Copy link to heading")5.8.22 Patch Release Fixes

### [](#observability_3 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-148332

 | 

Upgrade opentelemetry-target-allocator from version 0.150.0 to 0.151.0.

 |
| 

INFRA-148360

 | 

Upgrade otel-collector-contrib from version 0.150.1 to 0.152.0.

 |
| 

INFRA-154432

 | 

Upgrade grafana from version 13.0.1 to 13.0.1-security-01.

 |
| 

INFRA-154433

 | 

Upgrade opentelemetry-operator from version 0.150.0 to 0.151.0.

 |

## [](#5_8_21_patch_release_fixes "Copy link to heading")5.8.21 Patch Release Fixes

### [](#observability_4 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-150210

 | 

Upgrade prometheus-config-reloader from version 0.90.1 to 0.91.0.

 |
| 

INFRA-150211

 | 

Upgrade prometheus-operator from version 0.90.1 to 0.91.0.

 |

### [](#vault_data_services "Copy link to heading")Vault Data Services

 
| Reference | Description |
| --- | --- |
| 
TM-127568

 | 

The current hourly ledger RDB snapshot frequency creates a 60-minute window for potential cache staleness. During pod restarts or shard failures, Redis reloads these stale snapshots, causing High-Volume Accounts (HVAs) to breach our 20,000-posting safety threshold and trigger immediate application errors. By explicitly disabling RDB, we ensure that a restarting shard begins as an empty cache rather than a stale one.

In the event of a shard failure, the system will now experience a transient performance impact due to cache misses and increased database fallbacks, rather than the previous non-transient functional errors caused by stale cache reads causing a postings fetch limit breach. This ensures ledger reliability for HVAs at the cost of temporary DB pressure during cache warm-up.

 |

## [](#5_8_20_patch_release_fixes "Copy link to heading")5.8.20 Patch Release Fixes

### [](#observability_5 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-148249

 | 

Upgrade opentelemetry-operator from version 0.148.0 to 0.150.0.

 |
| 

INFRA-148332

 | 

Upgrade opentelemetry-target-allocator from version 0.148.0 to 0.150.0.

 |

### [](#vc_product_layer "Copy link to heading")VC - Product Layer

 
| Reference | Description |
| --- | --- |
| 
TM-127853

 | 

The `contracts-management-service` will no longer be deployed as part of vault version 5.8 to ensure zero downtime during rollbacks to 5.8. When upgrading your Vault Core instance from 5.8 you must ensure your instance on patch version 5.8.20 or above to prevent the small risk of downtime during a rollback to 5.8.

 |

## [](#5_8_19_patch_release_fixes "Copy link to heading")5.8.19 Patch Release Fixes

### [](#kafka "Copy link to heading")Kafka

 
| Reference | Description |
| --- | --- |
| 
INFRA-146934

 | 

The Message Produce Time panel on the Kafka Clients Producer dashboard has its unit correctly set to seconds in Grafana.

 |

### [](#observability_6 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-147295

 | 

Upgrade grafana from version 12.4.2 to 13.0.1.

 |
| 

INFRA-147431

 | 

Upgrade prometheus-cardinality-exporter from version 2.217.0 to 2.218.0.

 |

## [](#5_8_18_patch_release_fixes "Copy link to heading")5.8.18 Patch Release Fixes

### [](#core_upgrade_path "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-127385

 | 

The `remove-v4-data` job for dropping unused Vault 4 tables after upgrading to Vault 5 now accounts for clients configuring separate logical DBs for `postings` and `balances` DBs and will be able to delete data from the unused tables.

 |

### [](#edge_functions "Copy link to heading")Edge Functions

 
| Reference | Description |
| --- | --- |
| 
TM-124976

 | 

There was a memory leak in the edge function python libraries. The Python code kept references to object lock/unlock events, preventing garbage collection of memory. This has now been fixed. Additionally, redundant references to duplicated logging filters have been identified and removed, as these were further contributing to memory overhead.

 |
| 

TM-126686

 | 

There was a memory leak in the edge function python libraries. The Python code kept references to object lock/unlock events, preventing garbage collection of memory. This patch updates the packaged python libraries to fixed versions.

 |

### [](#kafka_2 "Copy link to heading")Kafka

 
| Reference | Description |
| --- | --- |
| 
INFRA-134047

 | 

We have updated the logic for the polling loop so that only a single topic is polled for the consumer. This still maintains the connection heartbeat to the broker while preventing the excessive memory fragmentation that was occurring.

 |

### [](#ledger "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-125899

 | 

The `LedgerE2ELatencyExceededOneSecond` alert has been replaced with a pair of burn rate style alerts. This change was implemented to address its excessive chattiness, minimize false positives, and ensure that latency-related problems are properly alerted. The two new alerts, `LedgerLatencySLOFastBurn` and `LedgerLatencySLOSlowBurn`, are triggered if the error budget is burning too quickly under the following conditions: - Fast Burn: 2% of the total 30-day error budget is burned in just 1 hour. - Slow Burn: 5% of the total 30-day error budget is burned in 6 hours.

 |

### [](#observability_7 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-141547

 | 

Upgrade prometheus from version 3.10.0 to 3.11.1.

 |
| 

INFRA-141601

 | 

Upgrade node-exporter from version 1.10.2 to 1.11.1.

 |

### [](#vc_product_configuration_2 "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-124918

 | 

When using `/v1/account-updates` to convert an account to a new Smart Contract, a conflict can arise if a new instance parameter is defined by the new contract and has either a default value or a value provided on the request, *and* there is a pre-existing value for this Parameter set via the `/v1/parameter-values` API. Vault Core now ensures that the **conversion-specific value** (from the contract or the request) takes precedence and becomes effective immediately upon conversion, correctly overriding any prior parameter value.

 |

## [](#5_8_17_patch_release_fixes "Copy link to heading")5.8.17 Patch Release Fixes

There are no changes for this section in the 5.8.17 Patch Release.

## [](#5_8_16_patch_release_fixes "Copy link to heading")5.8.16 Patch Release Fixes

### [](#disaster_recovery "Copy link to heading")Disaster Recovery

 
| Reference | Description |
| --- | --- |
| 
INFRA-139906

 | 

Revised the warm storage Kubernetes ConfigMap to decouple its operational mode from the primary database’s status in the passive environment, ensuring that necessary database initialisation steps can be performed in the passive environment for the standalone warm storage database.

 |

### [](#ledger_2 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-125054

 | 

Fixed ledger executor processing to correctly filter HVA accounts in the processing optimisation to avoid the incorrect error.

 |

## [](#5_8_15_patch_release_fixes "Copy link to heading")5.8.15 Patch Release Fixes

### [](#account_management "Copy link to heading")Account Management

 
| Reference | Description |
| --- | --- |
| 
TM-125776

 | 

Account Migrations are now always moved into `ACCOUNT_MIGRATION_STATUS_COMPLETED`, when all Account Updates have entered a terminal state.

 |

### [](#ledger_3 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-125825

 | 

The inefficient queries in the balance-milestone-reconciler have been updated to be more stable against unfavourable database statistics, and reliably opt for more efficient index reads.

 |

## [](#5_8_14_patch_release_fixes "Copy link to heading")5.8.14 Patch Release Fixes

### [](#contracts_language "Copy link to heading")Contracts Language

 
| Reference | Description |
| --- | --- |
| 
TM-125358

 | 

Fixes a networking configuration issue in the attributes service, allowing communication to the scheduler.

 |

### [](#edge_functions_2 "Copy link to heading")Edge Functions

 
| Reference | Description |
| --- | --- |
| 
TM-124976

 | 

There was a memory leak in the edge function python libraries. The Python code kept references to object lock/unlock events, preventing garbage collection of memory. This has now been fixed. Additionally, we identified and removed redundant references to duplicated logging filters that were further contributing to memory overhead.

 |

### [](#kafka_3 "Copy link to heading")Kafka

 
| Reference | Description |
| --- | --- |
| 
INFRA-132488

 | 

Kafka ACLs can now be successfully configured with no additional fields in the DN field (`kafka.client.ssl_subject: ''`).

 |

### [](#observability_8 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-123617

 | 

Sidecar configuration has been updated to ensure observability workloads `agent-otel-targetallocator` and `agent-otel-collector` can reach the Kubernetes API in Istio “Registry Only” mode.

 |

### [](#vc_product_configuration_3 "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-124500

 | 

When the flags table predominantly contains account-specific flags, specifying flag requirements for hook execution through `@requires(flags=True)` or `@fetch_account_data(flags=["flags_fetcher"])` within the contract has been optimised to eliminate latency issues, ensuring hook executions are not waiting on flag requirements. The process of fetching flags requirements will now be significantly quicker and more efficient.

 |

### [](#vault_applications "Copy link to heading")Vault Applications

 
| Reference | Description |
| --- | --- |
| 
TM-125164

 | 

Ops Dash’s Account view will now list all associated parameters.

 |

## [](#5_8_13_patch_release_fixes "Copy link to heading")5.8.13 Patch Release Fixes

There are no changes for this section in the 5.8.13 Patch Release.

## [](#5_8_12_patch_release_fixes "Copy link to heading")5.8.12 Patch Release Fixes

### [](#adjustments_2 "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-124852

 | 

Added a deduplication step in the `adjustments-compute` service to filter job IDs before calling the `RepublishJobs` endpoint. This change prevents validation errors caused by duplicate IDs and ensures the service continues processing subsequent batches even when the Kafka topic contains duplicate messages.

 |

### [](#contracts_language_2 "Copy link to heading")Contracts Language

 
| Reference | Description |
| --- | --- |
| 
TM-124614

 | 

Fixed a systematic failure occurring during CL4 account conversion specifically when an account’s existing schedules started within the Daylight Saving Time (DST) transition window (the "overlap hour" during the switch from summer to winter time). The conversion would previously error with ``The `start_datetime` of a ScheduledEvent for an existing schedule returned by the `conversion_hook` must be set to None or be left unmodified (matching the original schedule `start_datetime`).``, but these will now succeed as expected. Any account affected by this bug will benefit from the fix without any manual intervention.

 |

### [](#observability_9 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-132179

 | 

The dropping rule was removed from the vault-accounts pod monitor so GRPC metrics are now being scraped by prometheus.

 |

### [](#vc_product_configuration_4 "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-122639

 | 

Parameter Value events are now streamed immediately upon Account creation (on a best effort basis), significantly reducing latency.

 |

## [](#5_8_11_patch_release_fixes "Copy link to heading")5.8.11 Patch Release Fixes

There are no changes for this section in the 5.8.11 Patch Release.

## [](#5_8_10_patch_release_fixes "Copy link to heading")5.8.10 Patch Release Fixes

### [](#alerting "Copy link to heading")Alerting

 
| Reference | Description |
| --- | --- |
| 
INFRA-48875

 | 

The entrypoint for the Alertmanager image no longer depends on the third-party GNU envsubst utility.

 |

### [](#audit_and_access_control "Copy link to heading")Audit and Access Control

 
| Reference | Description |
| --- | --- |
| 
TM-124262

 | 

Added a new `values.yaml` field `audit.cleanup.batch_delay_seconds`. This configures the number of seconds that the `audit-cleanup` CronJob waits before deleting the next batch of Audit Logs, enabling more control over the I/O load on the database caused by the cleanup process.

 |
| 

TM-124608

 | 

Fixed a "casting failure" case in the audit cleanup job that occurred when run during periods of high DB load and led to the cleanup job exiting prematurely.

 |

### [](#contracts_platform_2 "Copy link to heading")Contracts Platform

 
| Reference | Description |
| --- | --- |
| 
TM-124252

 | 

This fix ensures that posting instruction directives with amounts smaller than 1e-6 are formatted as fixed-point strings which the ledger will accept, allowing them to be processed successfully.

 |

### [](#kubernetes "Copy link to heading")Kubernetes

 
| Reference | Description |
| --- | --- |
| 
INFRA-123700

 | 

Fixed compatibility issue between saml-idp and the Istio Ingress Gateway by changing the "pathType" from "ImplementationSpecific" to "Prefix" on the Ingress resource included with saml-idp.

 |

### [](#vault_installer "Copy link to heading")Vault Installer

 
| Reference | Description |
| --- | --- |
| 
INFRA-130440

 | 

Vault Installer no longer requires GnuPG in order to generate OpenPGP keys.

 |

## [](#5_8_9_patch_release_fixes "Copy link to heading")5.8.9 Patch Release Fixes

### [](#account_management_2 "Copy link to heading")Account Management

 
| Reference | Description |
| --- | --- |
| 
TM-122050

 | 

Correctly classify and retry transient directive-committing during V1 Account closure updates.

 |

### [](#adjustments_3 "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-123149

 | 

Services related to the Scheduled Adjustments extension will be scaled down on environments where the product key does not enable the extension.

 |

### [](#contracts_language_3 "Copy link to heading")Contracts Language

 
| Reference | Description |
| --- | --- |
| 
TM-120810

 | 

The error wrapping logic is updated so {{InvalidSmartContractError}} and {{StrongTypingError}} type errors are raised as they are, rather than being converted to {{IllegalPython}} errors. The error logs are improved, so they are now more user friendly.

 |
| 

TM-123206

 | 

Fixes a bug that was only possible when the Future Dated Postings feature was enabled and caused {{vault.get\_client\_transactions()}} to return duplicated posting instruction batch IDs when a posting and its chained postings with same client transaction ID are part of the same posting instruction batch. These IDs are now deduplicated.

 |

### [](#core_upgrade_path_2 "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-123243

 | 

Introduce support for parallelism within the upgrade path postings verification. Users can now leverage concurrent processing to handle large-scale verification tasks more efficiently.

 |

### [](#database_libraries "Copy link to heading")Database Libraries

 
| Reference | Description |
| --- | --- |
| 
INFRA-123768

 | 

The database migrator now supports validating databases in hot standby mode without blocking the upgrade process.

 |

### [](#ledger_4 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-124276

 | 

Trace propagation of spans for Postings sent over Kafka are now fixed.

 |

### [](#plans "Copy link to heading")Plans

 
| Reference | Description |
| --- | --- |
| 
TM-119579

 | 

Reclassified certain types of {{psycopg2.OperationalError}} as retryable, which make AccountUpdate operations more resilient to transient errors.

 |

### [](#saas "Copy link to heading")SaaS

 
| Reference | Description |
| --- | --- |
| 
INFRA-124015

 | 

JWKS cache refresh failures are captured as a counter metric and a corresponding alert is created.

 |

### [](#scheduler_2 "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-123265

 | 

One-off and expired schedules are now handled correctly in Simulation and no longer cause schedule validation errors.

 |

### [](#simulator "Copy link to heading")Simulator

 
| Reference | Description |
| --- | --- |
| 
TM-123541

 | 

The activation timestamp is now populated for V1 accounts during simulation.

 |

## [](#5_8_8_patch_release_fixes "Copy link to heading")5.8.8 Patch Release Fixes

### [](#adjustments_4 "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-123474

 | 

The proto definition for the vault.core\_api.v1.adjustments.adjustment.events topic is now part of the Core Streaming API download.

 |

### [](#core_upgrade_path_3 "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-123458

 | 

Increase the memory of the upgrade path pre-downtime and and downtime job to prevent out of memory

 |

### [](#observability_10 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-114656

 | 

Remove OpenTelemetry Collector dashboard as it is not useful at present state

 |

### [](#vc_product_configuration_5 "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-122159

 | 

When {{pre\_parameter\_change\_hook}} is run for an account belonging to a Processing Group (other than an unactivated default Processing Group) it is now correctly supplied with the Processing Group’s timezone in {{vault.event\_timezone}}.

 |

### [](#vault_applications_2 "Copy link to heading")Vault Applications

 
| Reference | Description |
| --- | --- |
| 
TM-117456

 | 

When using the ops dashboard, user is able to see the flag value (ON/OFF), along with status (Active/Inactive).

 |

## [](#5_8_7_patch_release_fixes "Copy link to heading")5.8.7 Patch Release Fixes

### [](#ledger_5 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-119285

 | 

Fixed issue where backdated postings can result in an incorrect order of balance objects in the balance timeseries returned from /v1/balances/timerange.

 |

## [](#5_8_6_patch_release_fixes "Copy link to heading")5.8.6 Patch Release Fixes

### [](#contract_events "Copy link to heading")Contract Events

 
| Reference | Description |
| --- | --- |
| 
TM-120742

 | 

The Contract Events service metrics have been updated with more granular bucket sizing to more accurately capture the time taken, which can be on the order of minutes or hours depending on the load elsewhere (this service is intentionally throttled to prioritise other services).

 |

### [](#contracts_language_4 "Copy link to heading")Contracts Language

 
| Reference | Description |
| --- | --- |
| 
TM-119597

 | 

Updates documentation to clarify that completed schedules can be updated by a Contract Hook.

 |

### [](#core_upgrade_path_4 "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-122061

 | 

Previously, the postings verifier and migrator shared a single batch size configuration (`POSTINGS_MAX_BATCH_SIZE`), which limited granular control. This fix introduces the ability to specify separate batch size for the verifier (`POSTINGS_VERIFICATION_BATCH_SIZE`)

 |
| 

TM-122630

 | 

The GetMilestones database query timeout is now configurable, removing the previous hardcoded limit.

 |

### [](#observability_11 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-123203

 | 

Update fsGroup to 65334 for prometheus-vault-scaler CronJob to be inline with security standards

 |

### [](#simulator_2 "Copy link to heading")Simulator

 
| Reference | Description |
| --- | --- |
| 
TM-122589

 | 

Fixes contract simulation to reflect the correct v1/accounts behaviour when running the CLv4 deactivation hook

 |
| 

TM-122594

 | 

Fixed an issue in contract simulation where if:  
\- a posting instruction batch is created for an already existing client transaction, and  
\- the posting instruction batch contains more than one posting instruction, and  
\- the client transaction has custom assets or account addresses in existing posting instructions  
Then the custom assets and account addresses are ignored and the posting instruction batch is applied to the default asset and account address.

 |

### [](#vault_applications_3 "Copy link to heading")Vault Applications

 
| Reference | Description |
| --- | --- |
| 
TM-119663

 | 

Duplicate accounts are removed from the search results in the Accounts App

 |
| 

TM-120996

 | 

A user of Vault Accounts Application may now unset an account-level (expected or instance) parameter value.

 |
| 

TM-122766

 | 

Edit permissions for Core Apps are now correctly set against the employee when corresponding scopes are defined on the user’s v2 role.

 |

## [](#5_8_5_patch_release_fixes "Copy link to heading")5.8.5 Patch Release Fixes

### [](#edge_functions_3 "Copy link to heading")Edge Functions

 
| Reference | Description |
| --- | --- |
| 
TM-122215

 | 

Fixed various issues causing Workflow `vault_callback` actions targeting the Edge Functions API to fail. Workflows can now make requests to the Edge Functions API successfully.

 |

### [](#scheduler_3 "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-119074

 | 

Introduced a mechanism to prevent & recover from a incorrect scheduler database states which sometimes occurred when performing operation’s to an account’s/plan’s schedules on CLv4

 |

### [](#simulator_3 "Copy link to heading")Simulator

 
| Reference | Description |
| --- | --- |
| 
TM-120808

 | 

In Simulation, postings from the activation, conversion and deactivation hook that target another account will now run the post\_posting\_hook.

 |

## [](#5_8_4_patch_release_fixes "Copy link to heading")5.8.4 Patch Release Fixes

### [](#account_management_3 "Copy link to heading")Account Management

 
| Reference | Description |
| --- | --- |
| 
TM-119363

 | 

Retry transient directive-committing issues during Instance Parameter Value updates.

 |

### [](#audit_and_access_control_2 "Copy link to heading")Audit and Access Control

 
| Reference | Description |
| --- | --- |
| 
TM-120039

 | 

When rejecting a request that creates or updates a Rego access policy because the new policy would reject the caller’s attempt to update the policy again, a clearer error is returned to explain the rejection.

 |
| 

TM-120040

 | 

When rejecting a request that creates or updates a Rego access policy because the request was not made with a JWT, a clearer error is returned to explain the rejection.

 |

### [](#ledger_6 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-119584

 | 

This improvement increases the limit on the sum total length of all keys and values available for enrichment data in pre-posting hook from 600 bytes to 1200 bytes. Performance guarantees will continue to be offered on a maximum limit of 600 bytes. Performance degradation may occur if this limit is exceeded.

 |

## [](#5_8_3_patch_release_fixes "Copy link to heading")5.8.3 Patch Release Fixes

### [](#adjustments_5 "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-114644

 | 

Bug fix where a post-parameter change hook in Adjustments was not triggered due to changing the Account’s Parameter Value Hierarchy Node. Before the fix this meant an Adjustment may have produced incorrect correction if all the following conditions are satisfied:  
\- An Account is attached to the Parameter Value Hierarchy, and obtains values for some of its contract’s expected\_parameters from the node it is attached to  
\- Its contract opts in to the post\_parameter\_change\_hook execution for changes to any of those expected\_parameters  
\- Its contract returns posting instruction directives when those parameters change  
\- A backdate causes a change in the account’s parameter\_value\_hierarchy\_node\_id to be included in the adjustment timeline  
  
In this scenario the change hook would not be executed, so if it originally returned any posting instructions, they would be completely offset in the resulting correction.

 |

### [](#async_ledger_operations_2 "Copy link to heading")Async Ledger Operations

 
| Reference | Description |
| --- | --- |
| 
TM-120027

 | 

In the event the posting enrichment processor receives 2 duplicate requests, and tries to concurrently insert them into the enriched\_posting\_instruction\_batch\_journal table, there is a chance that a race condition occurs resulting in 1 of the inserts failing (when it should’ve been skipped silently) which leads to message in the DLQ.

 |

### [](#audit_and_access_control_3 "Copy link to heading")Audit and Access Control

 
| Reference | Description |
| --- | --- |
| 
TM-119140

 | 

Ensure successful log in as the Admin User to the Operations Dashboard and other Vault Apps after performing a rollback from a later version to this version. The remediation steps in the 'About TMComponent Operator' rollback documentation are no longer required.

 |

### [](#ledger_7 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-119234

 | 

Rare race condition fixed where a PIB which is racing with account closure could be accepted, resulting in postings in that PIB being accepted against a closed account.

 |
| 

TM-120170

 | 

The ledger services no longer panics on rollout to clusters which uses OAuth mechanism for kafka authentication.

 |

### [](#observability_12 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-97870

 | 

This ticket resolves an issue with the Vault alerting system, which was impacted by recent sharding changes to the Prometheus instances in the namespaced observability package. The alerting system has now been updated

 |

### [](#vault_applications_4 "Copy link to heading")Vault Applications

 
| Reference | Description |
| --- | --- |
| 
TM-119755

 | 

Optional expected parameters with EnumerationConstraint can be un-set during Account creation

 |

### [](#vault_common_components "Copy link to heading")Vault Common Components

 
| Reference | Description |
| --- | --- |
| 
TM-119700

 | 

In the common queue library, fixed a wrongly assigned label of VeryHighPriority when instantiating the queue’s VeryLowPriority Buffer field. The Grafana dashboard will now accurately record metrics for the VeryLowPriority and VeryHighPriority queue.

 |

## [](#5_8_2_patch_release_fixes "Copy link to heading")5.8.2 Patch Release Fixes

### [](#ledger_8 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-119403

 | 

When sending a custom instruction with only internal accounts in the postings with a client transaction ID equal to an existing custom instruction with customer accounts, such request was indefinitely being retried by the Ledger due to an incorrect race condition check consistently failing.

 |

### [](#observability_13 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-97870

 | 

This ticket resolves an issue with the Vault alerting system, which was impacted by recent sharding changes to the Prometheus instances in the namespaced OBS package. The alerting system has now been updated

 |

### [](#scheduler_4 "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-105378

 | 

Fixed an issue where plan schedule failures were not published to the public facing Kafka topics.

 |

### [](#simulator_4 "Copy link to heading")Simulator

 
| Reference | Description |
| --- | --- |
| 
TM-119562

 | 

When attempting to create an account in Simulation, if more than 100 parameters are specified then the attempt will fail. This is fixed by this change, which now mirrors Vault Core in allowing a very large number of parameters to be specified.

 |

### [](#vc_product_configuration_6 "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-111100

 | 

Under some circumstances of heavy postings load on HVA, it is possible for contract execution to fail, reporting duplicate Flags observations being fetched as the error.  
  
Duplication of Flags observations fetched for contract hook execution has been removed. The duplicates were causing contract hooks to sometime fail under circumstances of heavy postings load on HVA.

 |
| 

TM-118630

 | 

When using the `@requires` decorator to fetch template-parameter values, the returned timeseries includes future values, instead of only including values up to the hook’s execution time.

 |

### [](#vault_applications_5 "Copy link to heading")Vault Applications

 
| Reference | Description |
| --- | --- |
| 
TM-119428

 | 

When creating an account from a Product containing a required Expected Parameter with a decimal constraint, the Accounts App will no longer automatically populating a value of zero.

 |

### [](#warm_storage "Copy link to heading")Warm Storage

 
| Reference | Description |
| --- | --- |
| 
TM-119727

 | 

During a voluntary Kubernetes disruption, the Warm Storage Inserter will remain highly available.

 |

### [](#workflows "Copy link to heading")Workflows

 
| Reference | Description |
| --- | --- |
| 
TM-119360

 | 

Adjusted the memory allocation of the workflow-processor Deployment to reduce the chance of it running out of heap space and crashing. Both the amount of memory requested and the proportion of memory made available for the heap have been increased.

 |

## [](#5_8_1_patch_release_fixes "Copy link to heading")5.8.1 Patch Release Fixes

### [](#adjustments_6 "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-119109

 | 

In Adjustments, any posting directives from the post\_parameter\_change\_hook that result from simulating it for the account activation time will be factored into the applied corrections.  
  
This only happens if:  
\- The adjustment covers the time the account was activated (always the case for an account’s first adjustment)  
\- The account was created with parameter values in the creation request to v2/accounts  
\- The post\_parameter\_change\_hook is used to instruct postings  
\- The contract does not opt out of execution of post\_parameter\_change\_hook for at least one of the values provided at account creation

 |
| 

TM-119186

 | 

When Vault encounters an unexpected error while processing an Adjustment, it may be retried indefinitely depending on the nature of the error. This will result in an Adjustment that is stuck in the "STATUS\_RUNNING" status.

 |

### [](#contract_notifications "Copy link to heading")Contract Notifications

 
| Reference | Description |
| --- | --- |
| 
TM-117226

 | 

Adds the `timestamp` field to contract notification events, representing the time that the event was published, keeping consistency with other events streamed from Vault.

 |

### [](#contracts_platform_3 "Copy link to heading")Contracts Platform

 
| Reference | Description |
| --- | --- |
| 
TM-117795

 | 

Resolves an issue where adding a new product version could time out if that product already had a very large number of product versions. This issue has only been identified in test environments.

 |

### [](#core_upgrade_path_5 "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-118766

 | 

The "Upgrade Path: Remove V4 Data Job" Grafana dashboard will be present starting from Vault versions 5.7.7 and 5.8.1.

 |
| 

TM-118883

 | 

Migration of the post posting failure resource can fail during downtime when it includes a Transfer. This leads to these resources being unable to be migrated necessitating a fix once on Vault 5. This case has now been handled allowing these all post posting failure resources to be migrated successfully.

 |

### [](#plans_2 "Copy link to heading")Plans

 
| Reference | Description |
| --- | --- |
| 
TM-114804

 | 

Fixes an issue where plan schedules are not preserved if they are in a failed state when migrating a contract from CLv3 → CLv3

 |

### [](#scheduler_5 "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-119072

 | 

Fixed an issue in the schedule-manager service where database contention at peak loads could result in the service incorrectly skipping the insert of schedules into the database, resulting in Schedule updates failing with "schedule and group have conflicting statuses".

 |