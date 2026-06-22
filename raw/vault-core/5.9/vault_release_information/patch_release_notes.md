---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/vault_release_information/patch_release_notes"
title: "Patch Release Notes"
scraped_at: "2026-06-22T19:13:20.824Z"
images: 0
---

# Patch Release Notes

## [](#5_9_5_patch_release_fixes "Copy link to heading")5.9.5 Patch Release Fixes

### [](#migration_and_data_loader "Copy link to heading")Migration and Data Loader

 
| Reference | Description |
| --- | --- |
| 
TM-128333

 | 

An internal retry mechanism has been added which ensures that temporary interruptions in availability in Vault Core are handled more reliably when loading Accounts via the Data Loader API.

 |

### [](#observability "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-158822

 | 

Upgrade otel-collector-contrib from version 0.152.0 to 0.154.0.

 |
| 

INFRA-159993

 | 

Upgrade opentelemetry-target-allocator from version 0.152.0 to 0.153.0.

 |
| 

INFRA-159994

 | 

Upgrade opentelemetry-operator from version 0.152.0 to 0.153.0.

 |
| 

INFRA-160097

 | 

Upgrade prometheus-cardinality-exporter from version 2.219.0 to 2.220.0.

 |

## [](#5_9_4_patch_release_fixes "Copy link to heading")5.9.4 Patch Release Fixes

### [](#adjustments "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-128496

 | 

Resolved an issue when upgrading to Vault Core 5.9+ where running adjustments and simulating existing accounts would fail with errors such as `API endpoint is not ready` or `ADJUSTMENT_INVALID_TIMELINE_END_TIMESTAMP` before the installation was finalised.

 |
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

### [](#observability_2 "Copy link to heading")Observability

 
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

## [](#5_9_3_patch_release_fixes "Copy link to heading")5.9.3 Patch Release Fixes

### [](#asynchronous_executions "Copy link to heading")Asynchronous Executions

 
| Reference | Description |
| --- | --- |
| 
TM-128225

 | 

The creation of adjustments for a job that is overridden is now skipped. This change ensures that a potential failure in the underlying adjustment does not block the override request. As a result, overriding a scheduled adjustment job now correctly sets the job’s final status to `OVERRIDDEN`.

 |

### [](#database_libraries "Copy link to heading")Database Libraries

 
| Reference | Description |
| --- | --- |
| 
INFRA-121701

 | 

Vault Core customers using DB IAM authentication on AWS are no longer required to add any addresses to the istio.proxy.exclude\_cidr value for the AWS STS endpoint.

 |

### [](#observability_3 "Copy link to heading")Observability

 
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

## [](#5_9_2_patch_release_fixes "Copy link to heading")5.9.2 Patch Release Fixes

### [](#observability_4 "Copy link to heading")Observability

 
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

### [](#simulator "Copy link to heading")Simulator

 
| Reference | Description |
| --- | --- |
| 
TM-127443

 | 

The logic now correctly sorts schedules with the same execution time based on their `group_id` and `group_order` fields. This ensures that jobs within a simulation are processed in the same group and in the intended sequence.

 |

## [](#5_9_1_patch_release_fixes "Copy link to heading")5.9.1 Patch Release Fixes

### [](#async_ledger_operations_2 "Copy link to heading")Async Ledger Operations

 
| Reference | Description |
| --- | --- |
| 
TM-125891

 | 

The endpoint’s logic has been updated to gracefully handle requests made whilst the target Posting Instruction Batch being read is still being written to the database. The API now correctly identifies when a batch write to the warm ledger is still in progress.

 |

### [](#ca_injector "Copy link to heading")CA-Injector

 
| Reference | Description |
| --- | --- |
| 
INFRA-150233

 | 

It resolves an issue in the CA injector which may cause Vault Core installations to fail. This issue affects installations of Vault Core where a custom CA is provided to the `ca-injector-webhook` via a user-applied Kubernetes Configmap named `ca-injector-certs`. This fix updates the webhook logic to retain well-formatted PEM certificates when copying them from ConfigMaps to the Truststore.

 |

### [](#core_upgrade_path "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-127385

 | 

The `remove-v4-data` job for dropping unused Vault 4 tables after upgrading to Vault 5 now accounts for clients configuring separate logical DBs for `postings` and `balances` DBs and will be able to delete data from the unused tables.

 |

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

### [](#rbac_manager "Copy link to heading")RBAC Manager

 
| Reference | Description |
| --- | --- |
| 
INFRA-147432

 | 

The modification to `tm_iam_prefix` now accurately processes explicitly defined AWS default path `/`. The handling of empty strings remains the same, where an empty string causes the system to revert to the Vault Core default path.

 |

### [](#storage "Copy link to heading")Storage

 
| Reference | Description |
| --- | --- |
| 
INFRA-148250

 | 

The visibility of the `data_retention.db.user` and `data_retention.db.migrator_user` values have been adjusted to ensure consistency with the other Vault Core subdomains

 |
| 

INFRA-148252

 | 

The visibility of the `edge_functions.db.migration_user` value has been adjusted to ensure consistency with the other Vault Core subdomains.

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