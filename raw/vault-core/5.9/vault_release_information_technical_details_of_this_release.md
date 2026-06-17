---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/vault_release_information/technical_details_of_this_release"
title: "Release notes"
scraped_at: "2026-06-17T04:57:18.275Z"
images: 0
---

# Release notes

## [](#new_features "Copy link to heading")New features

### [](#infra_database_libraries "Copy link to heading")INFRA - Database Libraries

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-2260

 | 

Flexible naming for AWS IAM roles and DB users with IAM DB authentication

 | 

Vault Core’s dependency on AWS IAM roles for AWS IAM DB Authentication has been enhanced to offer greater customisation and control, allowing banks to customise the IAM role prefix with a string of up to 32 characters and also override database user names, which previously had an enforced suffix when IAM authentication is enabled. This allows banks to control naming conventions for IAM and Database principals, helping them meet compliance framework requirements.

 |

### [](#infra_saas "Copy link to heading")INFRA - SaaS

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-167

 | 

Introduce JWT auth for Vault SaaS

 | 

JWT auth is available to all SaaS clients. This is the recommended method for authentication to Vault Core REST APIs. This option must be configured in your environment, please contact your TM representative to discuss.

 |

### [](#infra_vaultctl "Copy link to heading")INFRA - Vaultctl

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-2216

 | 

Automation of Manual Steps - TMC Finalisation

 | 

Upgrades now include a new "finalisation" step which completes an upgrade by performing final cleanup and switchover steps that previously required manual effort.

 |

### [](#ledger "Copy link to heading")Ledger

  
| Reference | Title | Description |
| --- | --- | --- |
| 
TM-119584

 | 

Increase of posting enrichment data limit

 | 

This improvement increases the limit on the sum total length of all keys and values available for enrichment data in pre-posting hook from 600 bytes to 1200 bytes. Performance guarantees will continue to be offered on a maximum limit of 600 bytes. Performance degradation may occur if this limit is exceeded.

 |

### [](#vc_all "Copy link to heading")VC - ALL

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-1195

 | 

Improve the performance of events reconciliation for large volumes of events

 | 

Improve the performance of events reconciliation for large volumes of events.

 |
| 

IMP-2462

 | 

Support for OIDC for Vault Jobs application

 | 

The Vault Jobs application now supports OIDC authentication and its endpoints are available as part of the Core API

 |
| 

IMP-2463

 | 

Support for OIDC for DLQ Inspector application

 | 

The DLQ Inspector application now supports OIDC authentication and its endpoints are available as part of the Core API

 |
| 

IMP-2464

 | 

Support for OIDC for Processing Group application

 | 

The Processing Group application now supports OIDC authentication

 |
| 

IMP-2465

 | 

Support for OIDC for Usage Monitor application

 | 

The Usage Monitor application now supports OIDC authentication and its endpoints are available as part of the Core API

 |

### [](#vc_access_control "Copy link to heading")VC - Access Control

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-2204

 | 

Create and Update scopes for Vault APIs using OIDC

 | 

This improvement adds create and update scopes to the Vault API using OIDC authentication with JWT tokens. New scopes are available through our Roles version 2 Access Control API. This enables the application of a granular permission model for Vault Apps supporting OIDC Authentication. It closes a feature parity gap with SAML.

 |

### [](#vc_account_management "Copy link to heading")VC - Account Management

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-1376

 | 

Improved operability of account opening and conversion journeys

 | 

Optimised the Vault Core Scheduler to enhance the operability and performance of schedule setup during account opening and product conversion journeys.

 |

### [](#vc_adjustments "Copy link to heading")VC - Adjustments

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-1648

 | 

Accurate Product timeline during Adjustments

 | 

Adjustments now consider Product Version changes over an account’s lifecycle.

 |

### [](#vc_bulk_operations "Copy link to heading")VC - Bulk Operations

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-646

 | 

Native Support For Financial Product Upgrades

 | 

Bulk conversions are now possible via the v2 account-migrations API, and support Expected Parameters, High Volume Accounts, Account Attributes, Vault Jobs, and Contract Events. Performance improvements have been introduced to the journey for both v1 and v2 account-migrations.

 |

### [](#vc_ledger "Copy link to heading")VC - Ledger

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-2247

 | 

Relaxing Client Transactions ordering guarantees across Posting Instruction batches to remove monotonically increasing validation

 | 

Client transactions no longer require strictly increasing value timestamps. The ordering logic has transitioned from ASC(value\_timestamp) to a prioritised sequence of ASC(value\_timestamp, booking\_timestamp, insertion\_timestamp). This allows multiple instructions within a single transaction to share the same value timestamp for fetching optimisations, provided they are differentiated by their booking or insertion times (sent in separate batches).

 |

### [](#vc_operations_dashboard "Copy link to heading")VC - Operations Dashboard

  
| Reference | Title | Description |
| --- | --- | --- |
| 
IMP-2249

 | 

Show activation\_timestamp in Accounts view

 | 

The time of activation is now shown when accounts are viewed, in addition to the opening time.

 |

## [](#deprecated_features "Copy link to heading")Deprecated features

There are no changes for this section in the 5.9.0 Minor Release.

## [](#backwards_incompatible_changes "Copy link to heading")Backwards incompatible changes

There are no changes for this section in the 5.9.0 Minor Release.

## [](#defect_fixes "Copy link to heading")Defect fixes

### [](#account_management "Copy link to heading")Account Management

 
| Reference | Description |
| --- | --- |
| 
TM-119363

 | 

Transient directive-committing issues during Instance Parameter Value updates are now retried.

 |
| 

TM-120019

 | 

Memory-based scaling has been added and the memory limit has been increased, which solved the problem of Kafka consumer lag accumulating if the `account-retry-executor` runs out of memory.

 |
| 

TM-125776

 | 

Account Migrations are now always moved into `ACCOUNT_MIGRATION_STATUS_COMPLETED`, when all Account Updates have entered a terminal state.

 |

### [](#adjustments "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-124406

 | 

Adjustments automatically load all necessary historical product versions, and the product versioning policy is configurable by clients to determine which contract version is used during the adjustment calculation.

 |
| 

TM-124785

 | 

Vault Core 5.9.0 introduces the ability to patch product versions used in Adjustments. Patches are resolved each time an Adjustment is run, including retries, and can therefore be used to address Smart Contract bugs that manifest themselves in Adjustments. For more information, please refer to the Adjustments reference documentation.

 |
| 

TM-124852

 | 

Added a deduplication step in the `adjustments-compute` service to filter job IDs before calling the `RepublishJobs` endpoint. This change prevents validation errors caused by duplicate IDs and ensures the service continues processing subsequent batches even when the Kafka topic contains duplicate messages.

 |

### [](#async_ledger_operations "Copy link to heading")Async Ledger Operations

 
| Reference | Description |
| --- | --- |
| 
TM-123216

 | 

The configuration value of `max_cache_kafka_buffer_size` has been reduced from `500000` to `5000` in the `ledger-journal-poller-config-ledger` config map.

 |

### [](#asynchronous_executions "Copy link to heading")Asynchronous Executions

 
| Reference | Description |
| --- | --- |
| 
TM-110905

 | 

The issue that caused completed post-posting failures to remain visible in the Core API after they had been successfully processed has been fixed. Completed failures are now reliably removed. This improves the accuracy of failure reporting and reduces confusion during monitoring and reconciliation.

 |

### [](#audit_and_access_control "Copy link to heading")Audit and Access Control

 
| Reference | Description |
| --- | --- |
| 
TM-125085

 | 

Pass through templating of the Entity ID for the Service Provider

 |

### [](#bulk_operations "Copy link to heading")Bulk Operations

 
| Reference | Description |
| --- | --- |
| 
TM-122277

 | 

The `point-in-time` metric was registered incorrectly and reporting the wrong values, and now this metric has been fixed to reflect accurate processing time data. This fix restores accurate visibility and improves diagnostic efforts during the End of Day.

 |

### [](#contracts_language "Copy link to heading")Contracts Language

 
| Reference | Description |
| --- | --- |
| 
TM-120593

 | 

The documentation is updated to clarify the relationship between Core API `/v1/account-attribute-values` requests and the Contracts Language `attribute_hook` executions, ensuring accurate information about how `AttributeHookArguments.effective_datetime` is determined.

 |
| 

TM-120810

 | 

The error wrapping logic is updated so `InvalidSmartContractError` and `StrongTypingError` type errors are raised as they are, rather than being converted to `IllegalPython` errors. The error logs are improved, so they are now more user friendly.

 |

### [](#database_libraries "Copy link to heading")Database Libraries

 
| Reference | Description |
| --- | --- |
| 
INFRA-123768

 | 

The database migrator now supports validating databases in hot standby mode without blocking the upgrade process.

 |

### [](#disaster_recovery "Copy link to heading")Disaster Recovery

 
| Reference | Description |
| --- | --- |
| 
INFRA-139906

 | 

Revised the warm storage Kubernetes ConfigMap to decouple its operational mode from the primary database’s status in the passive environment, ensuring that necessary database initialisation steps can be performed in the passive environment for the standalone warm storage database.

 |

### [](#edge_functions "Copy link to heading")Edge Functions

 
| Reference | Description |
| --- | --- |
| 
TM-117417

 | 

Edge Function Triggers can now correctly process all messages in the transition between JSON and protobuf encoded streaming API configurations.

 |
| 

TM-122215

 | 

Fixed various issues causing Workflow `vault_callback` actions targeting the Edge Functions API to fail. Workflows can now make requests to the Edge Functions API successfully.

 |
| 

TM-124976

 | 

There was a memory leak in the edge function python libraries. The Python code kept references to object lock/unlock events, preventing garbage collection of memory. This has now been fixed. Additionally, redundant references to duplicated logging filters have been identified and removed, because these were further contributing to memory overhead.

 |

### [](#kafka "Copy link to heading")Kafka

 
| Reference | Description |
| --- | --- |
| 
INFRA-132488

 | 

Kafka ACLs can now be successfully configured with no additional fields in the DN field (`kafka.client.ssl_subject: ''`).

 |
| 

INFRA-134047

 | 

We have updated the logic for the polling loop so that only a single topic is polled for the consumer. This still maintains the connection heartbeat to the broker while preventing the excessive memory fragmentation that was occurring.

 |
| 

INFRA-146934

 | 

The Message Produce Time panel on the Kafka Clients Producer dashboard has its unit correctly set to seconds in Grafana.

 |

### [](#ledger_2 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-107890

 | 

This fix adds validation for the Create Async endpoint that prevents disallowed PIBs from being submitted.

 |
| 

TM-112576

 | 

v1/balance timerange endpoint now returns a clearer error response when called with invalid from\_time and to\_time arguments.

 |
| 

TM-113153

 | 

When a PostingInstructionBatch has multiple PostingInstructions targeting the same account ID using different payment device tokens, restrictions to the corresponding payment device IDs were only applied to the payment device ID associated to the last PostingInstruction. This is now fixed

 |
| 

TM-119644

 | 

Fixed a problem when calling “v1/ListBalancesTimerange” with an unspecified “to\_time” for an account with unmatured future-dated postings could return a wrong subset of balances.

 |
| 

TM-124675

 | 

The alert parameters have been adjusted to make it more informative. The alert type has been updated to a burndown type alert which should reduce the false positives.

 |

### [](#observability "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-114656

 | 

Remove OpenTelemetry Collector dashboard as it is not useful at present state

 |
| 

INFRA-123617

 | 

Sidecar configuration has been updated to ensure observability workloads `agent-otel-targetallocator` and `agent-otel-collector` can reach the Kubernetes API in Istio “Registry Only” mode.

 |

### [](#plans "Copy link to heading")Plans

 
| Reference | Description |
| --- | --- |
| 
TM-114804

 | 

The issue has been resolved by updating how failed plan schedules are handled during migrations. Now, plan schedules in a failed state will be correctly preserved during plan migration from `Contracts Language API 3` to `Contracts Language API 3`. This ensures that plan schedules remain consistent and prevents duplicate schedules from running after migration.

 |
| 

TM-117410

 | 

It was possible for the `GET v1/account-plan-assocs` endpoint to omit a result if it shared a `create_timestamp` with another result and happened to fall on a pagination boundary. This has been fixed.

 |

### [](#scheduler "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-117615

 | 

Account conversions no longer fail due to `Invalid cron expression defined by ScheduleExpression` when the day\_of\_week value of Schedules in the existing\_schedules argument of the conversion hook was zero.

 |
| 

TM-119625

 | 

To permanently resolve the time zone discrepancies, we have implemented a comprehensive solution focused on data integrity and consistency. Mainly, we have removed a deprecated, third-party time zone library (4d63.com/tz) that was relying on outdated time zone rules, which was the root cause of the initial error. Our system now exclusively uses the official, up-to-date IANA Time Zone Database (tzdata) installed on the host environment. By enforcing this singular, reliable data source, we guarantee that the required UTC offset calculations are performed correctly across DST transitions, restoring the expected consistency for all scheduled events.

 |
| 

TM-123265

 | 

One-off and expired schedules are now handled correctly in Simulation and no longer cause schedule validation errors.

 |
| 

TM-125954

 | 

Schedules with disabled timestamp will be returned as disabled in the client facing APIs.

 |
| 

TM-125955

 | 

By adding new database columns and related constraints, it is no longer possible to have two concurrent schedule executions for a given event type for a given account or plan.

 |

### [](#simulator "Copy link to heading")Simulator

 
| Reference | Description |
| --- | --- |
| 
TM-99662

 | 

If existing\_smart\_contracts id is not present in the Simulation, a more specific error is returned.

 |
| 

TM-100023

 | 

This can be mitigated by leaving the `effective_from_timestamp` field empty, which will create a value effective from the instruction’s timestamp as intended.

This has been fixed by modifying the validation logic for the `create_parameter_value` instruction to allow this specific edge case without erroring, as it is a valid instruction.

 |
| 

TM-113459

 | 

Simulation now only accept updating one field with account v2, and will return error if multiple fields were updated at the same request.

 |
| 

TM-118862

 | 

Postings are now seeded into Existing Account Simulation if the effective time falls during the Simulation window, irrespective of their insertion time.

 |
| 

TM-125294

 | 

Contract Simulation of an existing account now supports live balances fetching on existing accounts.

 |

### [](#vc_product_configuration "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-106484

 | 

Improved resilience of the `post-parameter-change-resolver` service by increasing database timeouts. This addresses a non-functional issue where the service would restart repeatedly; this had no effect other than affecting monitoring.

 |
| 

TM-111100

 | 

Duplication of Flags observations fetched for contract hook execution has been removed. The duplicates were causing contract hooks to sometime fail under circumstances of heavy postings load on HVA.

 |
| 

TM-112463

 | 

When calling the POST /v1/product-versions endpoint, when a parameter value on the request is not defined in the contract, an InvalidArgument error for the parameter field is now correctly returned instead of a FailedPrecondition error.

 |
| 

TM-113133

 | 

When creating a new Product Version via `POST /v1/product-versions` with the migration strategy `PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION` or `PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION_APPLY_NEW_USERS` the service would use the current value for any template level parameter that was not provided a value on the request from the current version of that Product. This can lead to undesirable values being set for template level parameters on the new Product Version and it also means that if an optional template level parameter has a value currently set on the current version of that product, any new version of that product cannot be created with an unset value for this parameter.

Values will no longer be taken from existing versions of the product and all template level parameters must have a value defined on the request, regardless of the migration strategy set (excluding optional parameters).

 |
| 

TM-113988

 | 

The `GET /v1/product-versions:batchGet` endpoint now returns correct `is_current` field for Product Versions.

 |
| 

TM-118752

 | 

When simulating an existing Account that uses a Product Version (or when simulating an existing Product) with a non-empty `parameter_id_by_instance_parameter_name` field, this field is now respected when seeding data into the Simulation. Instance Parameter names will now be mapped in accordance to the mapping defined on this field. Instructions to create or update Parameter Values must reference the IDs from this field, in the same way they would if using the Core APIs.

 |
| 

TM-122159

 | 

When `pre_parameter_change_hook` is run for an account belonging to a Processing Group (other than an unactivated default Processing Group) it is now correctly supplied with the Processing Group’s timezone in `vault.event_timezone`.

 |
| 

TM-122160

 | 

When `post_parameter_change_hook` is run for an account belonging to a Processing Group (other than an unactivated default Processing Group) it is now correctly supplied with the Processing Group’s timezone in `vault.event_timezone`.

 |
| 

TM-122639

 | 

Parameter Value events are now streamed immediately upon Account creation (on a best effort basis), significantly reducing latency. At-least-once delivery guarantees are still provided.

 |
| 

TM-124303

 | 

When updating the `effective_to_timestamp` of a Parameter Value for a Non-Optional Instance Parameter via the `UpdateParameterValue` endpoint, the service will now raise an appropriate failed pre-condition error with a `CREATES_GAP_IN_PARAMETER_REQUIRED_BY_AN_ACCOUNT` violation irrespective of a Global Parameter Value existing for the same Parameter ID. This prevents gaps from arising when fetching Parameter Values for non-optional Instance Parameters within hooks.

 |
| 

TM-124500

 | 

When the flags table predominantly contains account-specific flags, specifying flag requirements for hook execution through `@requires(flags=True)` or `@fetch_account_data(flags=["flags_fetcher"])` within the contract has been optimised to eliminate latency issues, ensuring hook executions are not waiting on flag requirements. The process of fetching flags requirements will now be significantly quicker and more efficient.

 |

### [](#vc_product_layer "Copy link to heading")VC - Product Layer

 
| Reference | Description |
| --- | --- |
| 
TM-126451

 | 

When a Product Version is being created using the /v1/product-versions API, the request will be rejected as invalid if any numeric Template Parameters defined in the Product Version’s Smart Contract metadata have values specified using any Unicode digit characters other than ASCII digits (U\[underline\]#0030-U#0039). For example, fullwidth digits (U\[underline\]#FF10-U#FF19) or Devanagari digits (U\[underline\]#0966-U#096F) are not accepted in such values.

 |

### [](#vault_applications "Copy link to heading")Vault Applications

 
| Reference | Description |
| --- | --- |
| 
TM-114802

 | 

Instance parameters defined with DateShape and a default value are now supported during account creation

 |
| 

TM-119663

 | 

Duplicate accounts are removed from the search results in the Accounts App

 |

### [](#workflows "Copy link to heading")Workflows

 
| Reference | Description |
| --- | --- |
| 
TM-119360

 | 

Adjusted the memory allocation of the workflow-processor Deployment to reduce the chance of it running out of heap space and crashing. Both the amount of memory requested and the proportion of memory made available for the heap have been increased.

 |

## [](#known_issues "Copy link to heading")Known issues

### [](#account_management_2 "Copy link to heading")Account Management

 
| Reference | Description |
| --- | --- |
| 
TM-100952

 | 

A contract which defines an instance parameter and attempts to fetch the value of that Parameter in its activation hook for a time before the hook’s effective time will see `None` rather than the value specified on the Create request.

 |
| 

TM-117382

 | 

When an account is converted between identical to & from Smart Contract Versions, directives are committed. This should not be permitted, and the conversion operation should raise a precondition validation error.

 |
| 

TM-126341

 | 

Calls to List Accounts (GET /v2/accounts) can be slower than expected.

 |

### [](#adjustments_2 "Copy link to heading")Adjustments

 
| Reference | Description |
| --- | --- |
| 
TM-113790

 | 

An Adjustment will fail if its timeline includes Custom Instructions. This does not include Posting Directives produced by the adjusted account’s contract or corrections issued by a previous Adjustment.

 |
| 

TM-119190

 | 

Certain Smart Contract behaviours can cause an Adjustment to attempt to create invalid correction postings which are asymmetric that the Ledger will not accept. As a result, the Adjustment will not produce the expected corrections and will not complete successfully.

 |
| 

TM-119238

 | 

If an Adjustment-enabled Smart Contract can post to other Customer Accounts, Adjustments produce wrong corrections.

 |
| 

TM-124600

 | 

When using historic contract resolution for Adjustments, backdated Parameter Value changes for Parameters that existed only in an earlier Product Version and were later removed will not be detected. If the backdated Parameter Value was the only backdated resource, the Adjustment would be marked as STATUS\_NO\_ADJUSTMENT\_REQUIRED. If other backdates affecting the Account have occurred since the previous Adjustment, the Adjustment timeline would not include the backdated Parameter Value and corresponding Hook Execution. This could result in missing or incorrect corrections.

There is a workaround for clients to avoid missing or incorrect corrections: when an Account is on a Product Version with a historic Adjustments Versioning Policy, all Product Versions in the Accounts history must contain a subset of the latest Product Version’s Expected Parameters (i.e. whenever creating a new Product Version for a Product keep all of the old Expected Parameters, even if unused).

 |
| 

TM-127220

 | 

During an Adjustment computation, some parameters may not be observed if the account fetches a large number of parameters. This may cause hooks to run incorrectly if they depend on these parameters.

 |

### [](#async_ledger_operations_2 "Copy link to heading")Async Ledger Operations

 
| Reference | Description |
| --- | --- |
| 
TM-125891

 | 

When querying the GET `/v1/posting-instruction-batches` endpoint using filters other than Account ID, the API returns an error instead of an empty result if the Posting Instruction Batch is still being written to the warm ledger.

 |
| 

TM-125983

 | 

Under specific data migration conditions, an issue could lead to the creation of incorrect balance milestones. The process failed to carry over the balance from the preceding milestone, causing the new milestone to be initialised with a zero balance.

 |

### [](#asynchronous_executions_2 "Copy link to heading")Asynchronous Executions

 
| Reference | Description |
| --- | --- |
| 
TM-123568

 | 

We identified an issue with contract executions that generate multiple posting instructions. If a timeout occurred while committing them, some instructions could be committed while others were not. When the system retried the execution, it re-fetched live balances instead of replaying the original state. This meant the retry was not fully idempotent, and balances or outcomes could differ from the first attempt.

To reduce the likelihood of this happening, we have adjusted batch sizes and timeout thresholds. In addition, the system now raises a warning if a partial commit occurs, so users are aware of the situation.

 |

### [](#bulk_operations_2 "Copy link to heading")Bulk Operations

 
| Reference | Description |
| --- | --- |
| 
TM-125799

 | 

When creating or pausing an account conversion, a failed database transaction can leave the system in an inconsistent state. This prevents a safe rollback, because records related to the conversion may be persisted even if the primary transaction is aborted.

 |
| 

TM-125853

 | 

When an account conversion is created but does not match any accounts - that is, no accounts are on the source Smart Contract version(s) - an error is logged in the `bulk_operation_poller`, even though this is not a functional problem and requires no intervention. This is operational noise and can be ignored.

 |
| 

TM-125942

 | 

When an Account conversion is paused, the associated Vault job incorrectly displays a status of 'Completed'. This is misleading, because the conversion has not finished and is only in a paused state.

 |
| 

TM-126298

 | 

When calling ``PUT /v1/account-migrations/ or `PUT /v2/account-migrations/ to update an account conversion, only `ACCOUNT_MIGRATION_STATUS_PAUSED`` and `ACCOUNT_MIGRATION_STATUS_PENDING_EXECUTION` are valid statuses. If an invalid status is given, a `FAILED_PRECONDITION` error is returned without providing any information on what precondition failed, which makes it hard to understand what went wrong.

 |
| 

TM-126321

 | 

During an account conversion, the accounts that should be converted are determined based on warm storage, which is eventually consistent, meaning the account can be stale if it was converted recently. This can cause two possible scenarios:

\# An account no longer matches the source Smart Contract version in the account conversion request, but a conversion is still triggered (because it does match in warm storage). This mismatch is detected just before the conversion hook is executed and a failure is reported. These errors are safe to ignore, because the account should not have been converted anyway. # An account converted from one source Smart Contract version to another, matching the source Smart Contract version in the account conversion request (but it does not match in warm storage). This mismatch is detected just before the conversion hook is executed and a failure is reported. These accounts should have been converted, as they still match the source smart contract versions. To mitigate this, create the same account conversion again after warm storage is up to date, or manually convert the account using `POST /v1/account-updates` or \`PUT /v2/accounts/.

 |
| 

TM-126345

 | 

Several panels in the `Bulk Operations` dashboard, such as `Average Copy Account IDs Duration`, display time-based metrics as raw numerical values instead of formatted time durations. This makes the data difficult to interpret, especially with larger values that would normally be formatted in minutes. The panels show the a raw number which represents the average duration in seconds.

 |
| 

TM-126465

 | 

Account conversions determine which accounts to convert based on warm storage, which is eventually consistent. If an account has been converted recently, it could be stale and therefore incorrectly sent to be converted based on stale information. Just before the conversion hook is executed, this mismatch is detected and conversion is not carried out. However, a successful Vault job operation is reported for the account, even though it was not converted. To mitigate this, the Vault job operation should be disabled because it is not required.

 |
| 

TM-126645

 | 

In Vault Core 5.9.0, a data migration was introduced that changes how account conversions are stored in the database. If an account conversion is created in a small window of time, such as 10 seconds, when the data migration completes it may not be converted to the new database schema. This means any `GET` or `PUT` requests will return `NOT FOUND` errors for this resource. To mitigate this, create the account conversion again with a fresh `POST` request.

 |
| 

TM-126665

 | 

In Vault Core 5.9.0, the backend service that handles requests for the /v1/account-migrations API changed. During the Vault Core upgrade stage, there is a possibility that requests are sent to the new service before it is ready, meaning that `INTERNAL` errors are returned on the API. The mitigation for this is to wait for the new backend service, `bulk-operations`, to deploy, which should not take long.

 |
| 

TM-126668

 | 

When creating the account update and account update batch resources for an account conversion, these resources are processed in batches. These resources can fail processing for retryable and non-retryable reasons. If a resource fails with a retryable error, normally this will automatically be retried by the system. However, if this resource is processed in a batch with another resource that failed with a non-retryable error, both will be DLQed to `vault.core.bulk_operations.v1_resource.requests.dlq`. The mitigation for this is to republish the event that failed with a retryable error using the DLQ inspector.

 |
| 

TM-126672

 | 

Due to at-least-once delivery guarantees, duplicate events may be created by an account conversion to convert an account. If these events are processed concurrently and one of them fails due to a retryable error, this can be reported as a failed Vault job operation in the Vault jobs app despite the other event succeeding in converting the account. This can be confirmed by checking the ‘failed’ accounts using `GET /v1/accounts/` or `GET /v2/accounts/` to verify that they were successfully converted.

 |
| 

TM-126674

 | 

During v2 account conversions, if the conversion hook rejects the conversion or returns an exception, the account will have a pending Smart Contract version set and then quickly unset. This behaviour is inconsistent with other v2 account endpoints and can generate unnecessary operational events, which may be misinterpreted as a platform error.

 |
| 

TM-127056

 | 

When creating an account conversion, if a non-existent Smart Contract version ID is provided for either the source or target account, the API returns a generic `Internal error`. This response does not clearly indicate that the specified Smart Contract version cannot be found, making it difficult to diagnose the configuration error.

 |
| 

TM-127077

 | 

In Vault Core 5.9.0, a data migration was introduced that changes how account conversions are stored in the database. If an account conversion was updated using `PUT /v1/account-migrations/` before this data migration runs, and then the request and request ID are reused after the data migration completes, the endpoint will not behave idempotently. This means the subsequent update would have side effects, such as pausing or un-pausing the account conversion again. To mitigate this, update the account conversion with a fresh request ID to the desired status: either `ACCOUNT_MIGRATION_STATUS_PAUSED` or `ACCOUNT_MIGRATION_STATUS_PENDING_EXECUTION`.

 |
| 

TM-127079

 | 

If the account conversion process finishes while a data migration job is running, completed account conversions are not returned when calling `GET /v1/account-migrations`, `GET /v1/account-migrations:batchGet`, `GET /v2/account-migrations` or `GET /v2/account-migrations:batchGet`.

 |
| 

TM-127105

 | 

The payload for the `AccountUpdateBatchUpdated` event is inconsistent. When the event is triggered by an account migration, it contains the full details of the account update batch. This behaviour deviates from the API documentation, which states that the event should only contain the batch ID and status. This discrepancy can cause parsing issues for client event consumers that are built according to the documented specification.

 |
| 

TM-127378

 | 

During a v1 account conversion, account update and account update batch events are created. During processing, at-least-once delivery guarantees means duplicates of these events can be processed concurrently. If this occurs, there is a chance that they conflict and one of the events will be sent to the DLQ topic `vault.core.bulk_operations.v1_resource.requests.dlq`. This can be mitigated by republishing the DLQ via the DLQ Inspector.

 |
| 

TM-127429

 | 

During a bulk account conversion, individual accounts are converted. During this process, the account has a pending Smart Contract version set against it. If the conversion produces a non-retryable error, such as a contract exception, the account’s pending Smart Contract version must be unset. If this unset operation fails due to a transient error, this will not be retried, leaving the account with the pending Smart Contract version set. This will block some account operations, such as conversion.

To mitigate this, manually create an `account-update` for affected accounts to convert them back to their original Smart Contract version, which will complete the operation to unset the pending Smart Contract version.

 |
| 

TM-127434

 | 

Due to at-least-once delivery guarantees, the account conversion event produced by an account conversion may be duplicated. If this duplicate event is processed and a contract exception occurs, the way this event is handled idempotently is incorrect. Instead of reporting the conversion as rejected, as the original event would have been, it is marked as failed. This will appear in Vault jobs for the account conversion.

 |
| 

TM-127571

 | 

v2 accounts have a `pending_smart_contract_version` field which is set when an account is in the process of being converted. When this field is set, the account cannot be converted by other requests, only by the original request that set the pending Smart Contract version. If a separate account update is created with a product version update for an account with a pending Smart Contract version, the update will fail with a violation type `BLOCKED_BY_CONVERSION`. However, the pending Smart Contract version is then incorrectly removed from the resource, despite not being the original request that set it.

 |

### [](#contract_notifications "Copy link to heading")Contract Notifications

 
| Reference | Description |
| --- | --- |
| 
TM-112625

 | 

Under periods of high load on the database, `GetJournalEventsChecksum` endpoint may time out, resulting in event reconciliation not being possible during these times. This issue affects event reconciliation in all versions of Vault Core with the capability. Vault Core clients implementing event reconciliation using this endpoint are advised to conduct performance testing to ensure it can support the volumes/loads expected. Please reach out to your Thought Machine representative if you need further assistance.

 |
| 

TM-117226

 | 

Contract notification events that are streamed publicly do not include a `timestamp` field, which indicates when the notification was created.

 |

### [](#contracts_language_2 "Copy link to heading")Contracts Language

 
| Reference | Description |
| --- | --- |
| 
TM-112165

 | 

There is no documentation for the changes to custom dunder method behaviour for Contracts Language version 4 classes.

 |
| 

TM-113418

 | 

The `post_posting_hook` in Contracts Language version 4 fails when fetching live supervisee postings if there is a significant delay before the hook runs and an additional covering posting is committed in the interim. This results in the error `ClientTransaction does not support backdating`.

 |

### [](#contracts_platform "Copy link to heading")Contracts Platform

 
| Reference | Description |
| --- | --- |
| 
TM-122161

 | 

When the `attribute_hook` runs for an account that belongs to a Processing Group (other than an unactivated default Processing Group), it incorrectly uses either a default timezone or a contract-defined timezone in `vault.event_timezone`, when it should use the Processing Group’s timezone.

 |

### [](#core_upgrade_path "Copy link to heading")Core Upgrade Path

 
| Reference | Description |
| --- | --- |
| 
TM-127244

 | 

When running the `v4-data-deletion` job in `dry-run` mode but the job errors, the log message does not include the actual error.

 |
| 

TM-127385

 | 

The `remove-v4-data` job for dropping unused Vault 4 tables after upgrading to Vault 5 does not account for clients configuring separate logical DBs for `postings` and `balances` DBs. As a result, the job will error (whether run in dry mode or not) due to being unable to view the tables it’s configured to drop.

 |

### [](#ledger_3 "Copy link to heading")Ledger

 
| Reference | Description |
| --- | --- |
| 
TM-117303

 | 

Some Ledger dashboards such as Maturity Poller, Journal Poller V3 and Journal Cleaner V3 are not showing on Grafana.

 |
| 

TM-117304

 | 

Queuing Overview dashboard is not showing on Grafana.

 |
| 

TM-117668

 | 

Disaster Recovery Latency -

Disaster Recovery (DR) for Account Balance Events within the standard 28-day retention period may experience high latency for clients on 5.6, 5.7 and 5.8 that are not on this patch.

Performance Improvements -

Clients running Vault 5.6 or 5.7 with high traffic or a large balance.account\_balance\_journal table may not have their journal table being cleaned performantly.

 |
| 

TM-125494

 | 

This defect causes a regression in performance for contracts fetching future balance observations for accounts with a high number of transactions.

 |

### [](#ledger_balances "Copy link to heading")Ledger Balances

 
| Reference | Description |
| --- | --- |
| 
TM-124927

 | 

The data accumulator service was experiencing intermittent crashes due to a consumer panic. A heavy deletion query was experiencing high latency (taking roughly 2.5 seconds to execute). This delay triggered a consumer poll timeout. When the system attempted to unassign partitions to recover from the timeout, it created a race condition with a separate thread that was actively attempting to commit message offsets, ultimately causing the panic.

 |

### [](#ledger_data_access "Copy link to heading")Ledger Data Access

 
| Reference | Description |
| --- | --- |
| 
TM-127050

 | 

Redis error rate panel in Ledger Processor Breakdown dashboard is not showing any data.

 |

### [](#migration_and_data_loader "Copy link to heading")Migration and Data Loader

 
| Reference | Description |
| --- | --- |
| 
TM-91777

 | 

When making requests to create Parameter values in the data loader, the Parameter value ID is used as an idempotency key, so repeat requests with the same Parameter value ID should have no effect. However, if a second request is sent in with the same Parameter value ID as previously used, but a different request body, then the `effective_to_timestamp` of the Parameter value which:

1\. is effective immediately before; and 2. has the same owner as the value in the second request; and 3. has the same Parameter ID as the value in the second request

will be incorrectly set to the effective from time of the value in the second request.

This behaviour should be avoided — since Parameter value ID is the idempotency key, requests which reuse the same ID should be identical. If this is the case, this issue will not occur.

If this issue has already arisen, the effective to times of the affected Parameter values can be set manually via the Core API.

 |
| 

TM-118608

 | 

If a batch of resources is provided in a CreateResourceBatchRequest in the Data Loader API, where multiple resources have the same resource ID specified, one of the resources will be successfully created in Vault, and the other(s) dropped with no response/warning/error/DLQed messages.

 |

### [](#observability_2 "Copy link to heading")Observability

 
| Reference | Description |
| --- | --- |
| 
INFRA-114644

 | 

The issue preventing rollbacks due to immutable OpenTelemetry Collector label selectors has been resolved. The updated rollback process now correctly manages these resources, ensuring that the Crown Operator no longer attempts to modify read-only fields. This fix allows for successful rollbacks from Vault Core 5.7 or 5.8 to 5.5.24, 5.6.15, and later patch releases.

 |

### [](#plans_2 "Copy link to heading")Plans

 
| Reference | Description |
| --- | --- |
| 
TM-119579

 | 

We have identified an issue in the account update processing pipeline where transient database connection errors cause certain account update events to be incorrectly flagged as failed and sent to a DLQ, even though the updates are ultimately reprocessed and complete successfully. This was due to some of database `psycopg2.OperationalError` is misclassified as non-retryable.

 |

### [](#scheduler_2 "Copy link to heading")Scheduler

 
| Reference | Description |
| --- | --- |
| 
TM-125113

 | 

Account conversions can modify the schedules of many accounts in bulk which happens in two stages: first the schedules are updated and then the associated Vault jobs are updated. The latter process is asynchronous and can be delayed if there is heavy load on the system. This means that Vault job operations for converted accounts may take time to reflect the new schedules, making the number of pending Vault job operations inaccurate in the meantime. This can be mitigated by increasing performance of this processing by modifying the configmap for the `scheduler-vault-jobs-events-poller` deployment, increasing the `query_limit` of the config entry with topic `vault.core.jobs.operation.events.low_priority`.

 |
| 

TM-125755

 | 

We have identified an issue affecting the guaranteed delivery of Scheduler Operation Events. Currently, the system only records these events in its internal journal if the Operation Event message has been successfully produced on Kafka, which prevents any future recovery.

 |
| 

TM-126356

 | 

The system’s mechanism for sending OperationEvent only reacts to schedule job completions. This means if a pending job is cancelled while all other jobs have already completed for the same tag and scheduled time, no OperationEvent is sent.

 |

### [](#vc_product_configuration_2 "Copy link to heading")VC - Product Configuration

 
| Reference | Description |
| --- | --- |
| 
TM-73770

 | 

Requests to `POST v1/global-parameter-values` that reuse a request ID from a previously successful request should trigger idempotency and return the same response as the original request.

Different requests to this endpoint should use different request IDs. However, if an ID is used for a successful request, and later used for a different request, then the latter request may fail and cause a HTTP 400 error code to be returned.

 |
| 

TM-94398

 | 

An internal RPC called as part of creating a new Product Version is not fully idempotent, so in incredibly rare circumstances an internal error may be returned. Logs would indicate the error as `duplicate key value violates unique constraint "legacy_contract_parameters_pkey"`. A retry should succeed. This scenario has only been encountered under test conditions.

 |
| 

TM-99976

 | 

Creating a Global Parameter Value with the values "Inf", "Infinity", "-Inf", "-Infinity", or "NaN" will cause the API to return an Internal error instead of an Invalid Argument error.

 |
| 

TM-101221

 | 

If a request is made to simulate contracts with a request that include an invalid instruction relating to Parameters or Parameter Values, the Invalid Argument error returned will refer to fields that do not exist in the request (e.g. `parameter_value.parameter_id` instead of `create_parameter_value.parameter_id`).

 |
| 

TM-102318

 | 

Creating an Account with Parameter Values included as Create Options should not trigger the post-Parameter change hook, because activation should apply any business logic to the Parameter Values. This is the case for real Vault, but Simulation does not honour this when another Parameter Value is created concurrently.

 |
| 

TM-112757

 | 

If the `PUT /v1/parameter-values` endpoint is used to set the `effective_to_timestamp` of an account-owned value to a time in the past, then a 400 Failed Precondition error should be returned with the violation type `NEW_EFFECTIVE_TO_TIMESTAMP_IN_PAST`. However, if the account’s triggered `pre_parameter_change_hook` uses `get_parameter_timeseries()` then it will incorrectly return a violation type `EXCEPTION_RAISED_BY_SMART_CONTRACT` with exception args stating "'get\_parameter\_timeseries' cannot be called in the pre\_parameter\_change\_hook when the hook is effective in the future".

 |
| 

TM-113386

 | 

If the `/v1/parameter-values` API is used to set the effective-to time of a Parameter Value for a Parameter defined as an instance parameter within an account’s Smart Contract, then until the Parameter Value’s new effective-to time has passed, any attempts to use `/v1/account-updates` to change the Smart Contract associated with the account will fail with an unhelpful error message ("violation\_type: OVERLAPS\_EXPLICIT\_PARAMETER\_VALUE\_EFFECTIVE\_TIMESTAMP\_RANGE") if the new Smart Contract defines this instance parameter with the same shape.

A mitigation for the failure is to use the `/v1/parameter-values` API to update the effective-to time of the Parameter Value to be effective indefinitely, but that is not clear from the error message.

 |
| 

TM-125271

 | 

The Requirements Per Request panel in the Flags Service dashboard is displaying incorrect data. Instead of showing the number of requirements in each request, it is showing a cumulative request rate.

 |
| 

TM-127882

 | 

Internal calls to the Parameter service may not return all Parameter Values if the request contains multiple Parameters and the response is split across multiple pages. This will not affect the GET v1/parameter-values endpoint but it will affect other Vault services that depend on the Parameter service (Adjustments and Existing Account Simulation). However,

\* Any Existing Account Simulation request for an account with more than 50 Parameter Values *may* return incorrect results. \* Any Adjustment run for accounts with more than 50 Parameter Values in the Adjustment window may result in incorrect correction postings.

 |

### [](#vault_data_services "Copy link to heading")Vault Data Services

 
| Reference | Description |
| --- | --- |
| 
TM-127567

 | 

Vault can reject postings with “exceeded the postings per account limit when fetching postings” message when processing incoming postings.

 |