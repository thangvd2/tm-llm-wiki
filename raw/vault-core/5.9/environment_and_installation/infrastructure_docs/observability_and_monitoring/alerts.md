---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/alerts"
title: "Alerts shipped with Vault Core"
scraped_at: "2026-06-22T19:14:25.027Z"
images: 0
---

# Alerts shipped with Vault Core

Bank-hosted

Each release of Vault Core includes a set of predefined alerting rules designed to monitor critical Vault Core and associated infrastructure components.

These alerting rules are implemented using PrometheusRule custom resources. Each rule specifies an expression that evaluates one or more Prometheus metrics. When the value of a metric crosses a predefined threshold, the corresponding alert is triggered.

This ensures proactive monitoring and facilitates timely identification of system issues.

The alerts listed in the following sections document three alert attributes:

-   Name
    
-   Severity
    
-   Description
    

## [](#severity_levels "Copy link to heading")Severity Levels

Alerts are defined by different severity levels, and the interpretation of severity levels can vary depending on the business needs. The below severity definition aims to define a general guideline around handling alerts with different severity levels.

 
| Severity Level | Description |
| --- | --- |
| 
*critical*

 | 

Issue is most likely impacting the availability of critical user-facing or infrastructure service and needs immediate attention. Such alerts must page the on-call engineer

 |
| 

*high*

 | 

Issue, if not addressed immediately, will likely convert into a critical issue. Such issues should page the on-call engineers

 |
| 

*medium*

 | 

Issue is not impacting any critical services but needs to be addressed soon. These issues can be converted into tickets for on-call engineer to look into during office hours

 |
| 

*low*

 | 

Issue has very low impact and can be addressed when the on-call engineer has no other high severity issues to look into. These issues also should ideally create a ticket for the on-call engineer

 |

## [](#alert_description "Copy link to heading")Alert Description

Alert descriptions provide human-readable explanations of what the alert represents and its potential impact if it is triggered.

To enhance clarity and provide contextual relevance, alert descriptions often utilize templated variables in the format `{{ $labels.<attribute> }}`. These variables are dynamically populated with actual metric label values at runtime, ensuring the alert message is specific and actionable.

For example, the description for the alert `ClusterIsUnderreplicated` is defined as:

If this alert is triggered for pod `kafka-1`, the rendered description will be:

## [](#5_9_5_alert_rules_list "Copy link to heading")5.9.5 Alert Rules List

  
| Rule Name | Severity | Description |
| --- | --- | --- |
| 
ClusterHasISRFailures

 | 

high

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has failed to update the in-sync replicas for partitions, which are stored in Zookeeper. Restart the erroring broker to resolve it.

 |
| 

PartitionsAreOffline

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had offline partitions for more than one minute. All brokers may be down.

 |
| 

PartitionsAreReadOnly

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had read-only partitions for more than one minute.

 |
| 

ClusterIsUnderreplicated

 | 

high

 | 

Kafka pod {{ $labels.kubernetes\_pod }} has had underreplicated partitions for more than one hour. Writes have been disabled for safety.

 |
| 

MultipleActiveControllersPresent

 | 

critical

 | 

Multiple Kafka brokers have been reporting themselves as the active controller for more than five minutes in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }}. Check the 'Zookeeper split-brain scenario' section of the Kafka runbook.

 |
| 

LongLivedConsumerLag

 | 

high

 | 

For three hours the group {{ $labels.group }} consuming topic {{ $labels.topic }} has been accumulating lag without having a net positive on work processed. Check the logs and health status of the service accumulating lag without being able to have a net positive on work processed.

 |
| 

ExternalConnectivityToKafkaClusterIsFailing

 | 

critical

 | 

External communication with Kafka Cluster is failing! Brokers in {{ $labels.kubernetes\_namespace }} are likely to have failed to refresh the JWK set used for the authentication of external Kafka clients.

 |
| 

KubeStateMetricsDown

 | 

high

 | 

We are unable to get the current state of kubernetes

 |
| 

PrometheusStatefulSetUnavailable

 | 

high

 | 

StatefulSet {{ $labels.statefulset }} in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has no ready pods for more than 10m. Please check the Prometheus Dashboard.

 |
| 

KafkaOrZKSTSUnavailable

 | 

critical

 | 

There has been one or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

KafkaOrZKSTSReducedAvailability

 | 

high

 | 

There have been two or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperUnavailable

 | 

critical

 | 

There have been two or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperReducedAvailability

 | 

critical

 | 

There have been one or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

KubeStateMetricsListErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in list operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

KubeStateMetricsWatchErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in watch operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

AuditCleanupCronJobFailed

 | 

medium

 | 

The latest audit cleanup job ('{{ $labels.job\_name }}') in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has failed. This failure isn’t an immediate issue, but if it continues to fail then audit logs will not get cleaned and start to fill up the database. This alert will fire until an audit cleanup job succeeds or the failed audit cleanup job is removed.

 |
| 

ReleaseBundleImporterJobFailed

 | 

medium

 | 

ReleaseBundleImporterJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

AccountsJobsFailed

 | 

medium

 | 

The AccountsJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

DeploymentStuckInCrashLoopBackOff

 | 

medium

 | 

The Vault Core deployment in the cluster is experiencing crash loops, possibly due to misconfiguration or application error at container startup.

 |
| 

InvalidDBIndex4h

 | 

high

 | 

The index may be slowly building, or may have failed to do so.

 |
| 

DBIsInRecovery

 | 

critical

 | 

All database instances are in recovery mode.

 |
| 

Redis\_ClusterFailed

 | 

medium

 | 

At least one Redis node is reporting cluster failure. Check if the reporting node is failed or if the cluster is down.

 |
| 

Redis\_ClusterSlotsFailed

 | 

medium

 | 

At least one Redis node is reporting failed cluster slots. Check cluster health.

 |
| 

PointInTimeHighRetryableOutcomeRate

 | 

low

 | 

The {{ $labels.app }} is receiving retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

PointInTimeHighErroredOutcomeRate

 | 

medium

 | 

The {{ $labels.app }} is receiving non-retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

MilestoneProcessorLagExceedsRefreshWindow

 | 

high

 | 

The Milestone Processor time lag has exceeded the refresh window in {{ $labels.kubernetes\_namespace }}

 |
| 

SelectBalanceSeriesHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

SelectBatchIDsHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

GetLiveBalanceValuesAsOfUpdateCountHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query GetLiveBalanceValuesAsOfUpdateCount: at least 4s for 99th percentile.

 |
| 

KafkaClientCertificateExpiriesWithin2Days

 | 

high

 | 

The kafka client certificate used in {{ $labels.app }} is within two days of its expiration date

 |
| 

KafkaConsumerIgnoringMessages

 | 

medium

 | 

Kafka consumers are committing message offsets without processing. This is expected behaviour ONLY during disaster recovery. Check consumer logs or the Kafka Clients Consumer dashboard.

 |
| 

KafkaTopicAdminACLCleanupFailure

 | 

high

 | 

Topic manager {{ $labels.app }} has failed to delete {{ $labels.type }} ACL for {{ $labels.operation }} operation for topic {{ $labels.topic }} in {{ $labels.kubernetes\_namespace }}. This may cause read/write locks for topics. Look at logs and restart the {{ $labels.app }}.

 |
| 

SuccessiveIncompleteDeletionHandlers

 | 

medium

 | 

The deletion handler for {{ $labels.vault\_component }} has failed to complete two or more times in the last two days.

 |
| 

HighFailedDeletionBatchRate

 | 

medium

 | 

Batches for the {{ $labels.vault\_component }} deletion handler have failed to complete 80% or more of the time in the last 10 minutes.

 |
| 

JWKSCacheRefreshFailed

 | 

critical

 | 

JWT JWKS cache has failed to update in the last refresh attempt either on bootstrap or on refresh interval in app {{ $labels.app }}. If all pods of app {{ $labels.app }} are failing and cache is out of date then requests will fail to be processed.

 |
| 

HighContractExecutionDropRate

 | 

medium

 | 

The {{ $labels.app }} is getting non-retryable errors when trying to insert executions. Check the logs to see what is causing these errors.

 |
| 

ContractExecutionProcessingLagHigherThan1Hour

 | 

medium

 | 

The {{ $labels.app }} may be in an unhealthy state, causing lag to build up on the inbound topic. Check the Contracts Observability Grafana dashboard.

 |
| 

TimedOutContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

TimedOutSupervisorContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsTopic

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution failed. As a result, a PostPostingFailure resource has been created, further post\_posting\_code Smart Contract hook executions on the account are blocked, and an AccountPostPostingExecutionFailureEvent is published to {{ $labels.topic }}.

 |
| 

HighAccountScheduleRepublishRate

 | 

low

 | 

The {{ $labels.app }} is republishing over 80% of account schedules it handles. This could be due to high load, such as many schedules running at once.

 |
| 

CoreAPIAccountsErrors

 | 

critical

 | 

Core API Accounts Endpoints failure rate has exceeded 5% in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIProductsErrors

 | 

critical

 | 

Core API Products Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPISmartContractsErrors

 | 

critical

 | 

Core API Smart Contracts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentSubmissionErrors

 | 

critical

 | 

Core API Payment Submissions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIInternalAccountsErrors

 | 

critical

 | 

Core API Internal Accounts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentDevicesErrors

 | 

critical

 | 

Core API Payment Devices Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPICustomersErrors

 | 

critical

 | 

Core API Customers Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIRestrictionsErrors

 | 

critical

 | 

Core API Restrictions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPostingInstructionBatchErrors

 | 

critical

 | 

Core API Posting Instruction Batch Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIBalancesErrors

 | 

critical

 | 

Core API Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPILedgerBalancesErrors

 | 

critical

 | 

Core API Ledger Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIAuthErrors

 | 

critical

 | 

Core API Auth Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIFlagsErrors

 | 

critical

 | 

Core API Flags Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

NewMessagesInAuditLogsDLQ

 | 

critical

 | 

Errors found while processing Audit Log messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInStreamAPIDLQ

 | 

critical

 | 

Errors found while processing Streaming API messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInSchedulerOutcomesDLQ

 | 

critical

 | 

Errors found while processing job outcomes Kafka messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInPostingAccountPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInPostingAsyncOperationsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInLedgerBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessageInEnrichedPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInCoreLedgerDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInWarmStorageDLQ

 | 

critical

 | 

Warm accounts backs the list accounts endpoint, so a missed event could mean an account is not listed even though it exists in hot storage.

 |
| 

NewMessagesInPaymentOrdersDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCalendarSchedulesDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduledPaymentsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInNextJobProcessorDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractAccountSchedulingDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractEngineAccountSchedulingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountScheduleOutcomeProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractHookDirectivesCommitterProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInStreamAPICustomersDLQ

 | 

critical

 | 

Errors found while processing Streaming API Customers messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInContractDirectivesAggregatorProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPlanScheduleExecutionProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostPostingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostBalanceUpdateProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsDLQ

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution was requested, but something went wrong. Vault Core attempted to publish an AccountPostPostingExecutionFailureEvent message, but this attempt also failed. As a result, the message has been annotated with DLQ metadata and published to {{ $labels.topic }}.

 |
| 

NewMessagesInPlanEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateBatchEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerExecutionEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerSchedulesEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

HighPercentageOfTTLExpiry

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last two minutes, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryFast

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last 45 seconds, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryV5

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last five minutes, postings requests failed with non-transient errors, possibly due to TTL expiry.

 |
| 

LedgerLatencySLOFastBurn

 | 

high

 | 

High Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

LedgerLatencySLOSlowBurn

 | 

medium

 | 

Sustained Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

UnprocessedBucketEntriesLagTooHigh

 | 

low

 | 

The ledger balances distribution or accumulator processor are unable to process queued bucket entries in a timely manner, this means that you are unable to query some ledger balances that have been processed in the last few hours. This alert only triggers if ListLedgerBalances has been called in the last seven days.

 |
| 

TableOrPartitionSizeExceeds80PercentOfLimit

 | 

medium

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 80% of the 32 TB capacity.

 |
| 

TableOrPartitionSizeExceeds90PercentOfLimit

 | 

critical

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 90% of the 32 TB capacity.

 |
| 

NotEnoughFuturePartitions

 | 

low

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} has fewer than two future partitions available. This will prevent new postings from being inserted if not fixed.

 |
| 

NoHeartbeatOnDataManagementServiceFor1Day

 | 

medium

 | 

The Ledger Data Management Service has had no partitioning activity recorded by the PartitionerHeartbeat in over 24h for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Ensure that the Ledger Data Management Service is working correctly.

 |
| 

PartitionSizeForecastExceeds90percentOfTableLimit

 | 

critical

 | 

The current partition size forecast suggests that over 90% of the 32TB limit will be reached before the end of the partition period for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Consider resizing the partition, reaching the table size limit will cause a system failure.

 |
| 

InitialPartitioningFailure

 | 

critical

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} failed

 |
| 

InitialPartitioningIncomplete

 | 

medium

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} was unable to complete, likely due to a timeout

 |
| 

NonDerivedIncorrectMilestonesFound

 | 

high

 | 

The `milestone-verifier` job has detected new non-derived incorrect milestones within the last hour.

 |
| 

MissingForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} is missing subscriptions to certain events. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

DeactivatedForm3Subscription

 | 

high

 | 

A required subscription is deactivated on {{ $labels.kubernetes\_namespace }}. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

UnexpectedForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} has a subscription to an unexpected resource, event type, or Callback URL. This may suggest a configuration issue with Form3, or a misconfigured alert. Check `form3-exporter` logs.

 |
| 

RegionUKGCSAuthenticationError

 | 

critical

 | 

Region UK File Processor pod(s) failed to authenticate with GCS in {{ $labels.kubernetes\_namespace }}. This may prevent the Payments Hub from processing payments, or processing payments using out-of-date information. Check the `ph-uk-file-processor` logs.

 |
| 

NewMessagesInBottomlineIntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInForm3IntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCreditTransferDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInPaymentHubBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInMigratedPostingsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInDirectDebitsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInRegionalProcessorsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

ChangeWatermarkLagTooHigh

 | 

medium

 | 

The effective time of the last processed Parameter change is {{ $value | humanizeDuration }} behind the current time, indicating that the Poller is significantly lagging. Consult the Parameter Change Grafana dashboard and investigate the cause of the slowness by checking the latency of DB queries and gRPC calls made by the accounts-change-poller deployment.

 |
| 

SchedulerLagWhenPublishingJobsTooHigh

 | 

medium

 | 

This metric measures the difference between the jobs publishedTime and scheduledTime.

 |
| 

SchedulerCreateGroupError

 | 

low

 | 

This metric tracks the number of `could not create group` errors

 |
| 

SchedulerAccountScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for an Account schedule was published to vault.core.schedule.execution.account.failure.events.

 |
| 

SchedulerPlanScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for a Plan schedule was published to vault.core.schedule.execution.plan.failure.events.

 |
| 

DuplicateInstancesScraped

 | 

low

 | 

Container {{ $labels.container }} - Pod {{ $labels.pod }} - {{ $labels.instance }} is scraped twice in namespace {{ $labels.kubernetes\_namespace }}. This can lead to metrics being counted twice - check service/pod labels and annotations and monitors for Prometheus Vault.

 |
| 

PrometheusLimitsTriggeredTargetScrapes

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedSampleLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

PrometheusLimitsTriggeredTargetLimit

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedTargetLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

AccountsFailedResources

 | 

medium

 | 

An account failed {{ $labels.runner\_type }} runner.

 |
| 

ParametersFailedResources

 | 

medium

 | 

A parameter failed {{ $labels.runner\_type }} runner.

 |
| 

PostingsFailedResources

 | 

medium

 | 

A posting failed {{ $labels.runner\_type }} runner.

 |
| 

PostPostingsFailedResources

 | 

medium

 | 

A post-posting failed {{ $labels.runner\_type }} runner.

 |

## [](#5_9_4_alert_rules_list "Copy link to heading")5.9.4 Alert Rules List

  
| Rule Name | Severity | Description |
| --- | --- | --- |
| 
ClusterHasISRFailures

 | 

high

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has failed to update the in-sync replicas for partitions, which are stored in Zookeeper. Restart the erroring broker to resolve it.

 |
| 

PartitionsAreOffline

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had offline partitions for more than one minute. All brokers may be down.

 |
| 

PartitionsAreReadOnly

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had read-only partitions for more than one minute.

 |
| 

ClusterIsUnderreplicated

 | 

high

 | 

Kafka pod {{ $labels.kubernetes\_pod }} has had underreplicated partitions for more than one hour. Writes have been disabled for safety.

 |
| 

MultipleActiveControllersPresent

 | 

critical

 | 

Multiple Kafka brokers have been reporting themselves as the active controller for more than five minutes in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }}. Check the 'Zookeeper split-brain scenario' section of the Kafka runbook.

 |
| 

LongLivedConsumerLag

 | 

high

 | 

For three hours the group {{ $labels.group }} consuming topic {{ $labels.topic }} has been accumulating lag without having a net positive on work processed. Check the logs and health status of the service accumulating lag without being able to have a net positive on work processed.

 |
| 

ExternalConnectivityToKafkaClusterIsFailing

 | 

critical

 | 

External communication with Kafka Cluster is failing! Brokers in {{ $labels.kubernetes\_namespace }} are likely to have failed to refresh the JWK set used for the authentication of external Kafka clients.

 |
| 

KubeStateMetricsDown

 | 

high

 | 

We are unable to get the current state of kubernetes

 |
| 

PrometheusStatefulSetUnavailable

 | 

high

 | 

StatefulSet {{ $labels.statefulset }} in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has no ready pods for more than 10m. Please check the Prometheus Dashboard.

 |
| 

KafkaOrZKSTSUnavailable

 | 

critical

 | 

There has been one or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

KafkaOrZKSTSReducedAvailability

 | 

high

 | 

There have been two or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperUnavailable

 | 

critical

 | 

There have been two or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperReducedAvailability

 | 

critical

 | 

There have been one or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

KubeStateMetricsListErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in list operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

KubeStateMetricsWatchErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in watch operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

AuditCleanupCronJobFailed

 | 

medium

 | 

The latest audit cleanup job ('{{ $labels.job\_name }}') in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has failed. This failure isn’t an immediate issue, but if it continues to fail then audit logs will not get cleaned and start to fill up the database. This alert will fire until an audit cleanup job succeeds or the failed audit cleanup job is removed.

 |
| 

ReleaseBundleImporterJobFailed

 | 

medium

 | 

ReleaseBundleImporterJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

AccountsJobsFailed

 | 

medium

 | 

The AccountsJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

DeploymentStuckInCrashLoopBackOff

 | 

medium

 | 

The Vault Core deployment in the cluster is experiencing crash loops, possibly due to misconfiguration or application error at container startup.

 |
| 

InvalidDBIndex4h

 | 

high

 | 

The index may be slowly building, or may have failed to do so.

 |
| 

DBIsInRecovery

 | 

critical

 | 

All database instances are in recovery mode.

 |
| 

Redis\_ClusterFailed

 | 

medium

 | 

At least one Redis node is reporting cluster failure. Check if the reporting node is failed or if the cluster is down.

 |
| 

Redis\_ClusterSlotsFailed

 | 

medium

 | 

At least one Redis node is reporting failed cluster slots. Check cluster health.

 |
| 

PointInTimeHighRetryableOutcomeRate

 | 

low

 | 

The {{ $labels.app }} is receiving retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

PointInTimeHighErroredOutcomeRate

 | 

medium

 | 

The {{ $labels.app }} is receiving non-retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

MilestoneProcessorLagExceedsRefreshWindow

 | 

high

 | 

The Milestone Processor time lag has exceeded the refresh window in {{ $labels.kubernetes\_namespace }}

 |
| 

SelectBalanceSeriesHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

SelectBatchIDsHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

GetLiveBalanceValuesAsOfUpdateCountHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query GetLiveBalanceValuesAsOfUpdateCount: at least 4s for 99th percentile.

 |
| 

KafkaClientCertificateExpiriesWithin2Days

 | 

high

 | 

The kafka client certificate used in {{ $labels.app }} is within two days of its expiration date

 |
| 

KafkaConsumerIgnoringMessages

 | 

medium

 | 

Kafka consumers are committing message offsets without processing. This is expected behaviour ONLY during disaster recovery. Check consumer logs or the Kafka Clients Consumer dashboard.

 |
| 

KafkaTopicAdminACLCleanupFailure

 | 

high

 | 

Topic manager {{ $labels.app }} has failed to delete {{ $labels.type }} ACL for {{ $labels.operation }} operation for topic {{ $labels.topic }} in {{ $labels.kubernetes\_namespace }}. This may cause read/write locks for topics. Look at logs and restart the {{ $labels.app }}.

 |
| 

SuccessiveIncompleteDeletionHandlers

 | 

medium

 | 

The deletion handler for {{ $labels.vault\_component }} has failed to complete two or more times in the last two days.

 |
| 

HighFailedDeletionBatchRate

 | 

medium

 | 

Batches for the {{ $labels.vault\_component }} deletion handler have failed to complete 80% or more of the time in the last 10 minutes.

 |
| 

JWKSCacheRefreshFailed

 | 

critical

 | 

JWT JWKS cache has failed to update in the last refresh attempt either on bootstrap or on refresh interval in app {{ $labels.app }}. If all pods of app {{ $labels.app }} are failing and cache is out of date then requests will fail to be processed.

 |
| 

HighContractExecutionDropRate

 | 

medium

 | 

The {{ $labels.app }} is getting non-retryable errors when trying to insert executions. Check the logs to see what is causing these errors.

 |
| 

ContractExecutionProcessingLagHigherThan1Hour

 | 

medium

 | 

The {{ $labels.app }} may be in an unhealthy state, causing lag to build up on the inbound topic. Check the Contracts Observability Grafana dashboard.

 |
| 

TimedOutContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

TimedOutSupervisorContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsTopic

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution failed. As a result, a PostPostingFailure resource has been created, further post\_posting\_code Smart Contract hook executions on the account are blocked, and an AccountPostPostingExecutionFailureEvent is published to {{ $labels.topic }}.

 |
| 

HighAccountScheduleRepublishRate

 | 

low

 | 

The {{ $labels.app }} is republishing over 80% of account schedules it handles. This could be due to high load, such as many schedules running at once.

 |
| 

CoreAPIAccountsErrors

 | 

critical

 | 

Core API Accounts Endpoints failure rate has exceeded 5% in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIProductsErrors

 | 

critical

 | 

Core API Products Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPISmartContractsErrors

 | 

critical

 | 

Core API Smart Contracts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentSubmissionErrors

 | 

critical

 | 

Core API Payment Submissions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIInternalAccountsErrors

 | 

critical

 | 

Core API Internal Accounts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentDevicesErrors

 | 

critical

 | 

Core API Payment Devices Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPICustomersErrors

 | 

critical

 | 

Core API Customers Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIRestrictionsErrors

 | 

critical

 | 

Core API Restrictions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPostingInstructionBatchErrors

 | 

critical

 | 

Core API Posting Instruction Batch Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIBalancesErrors

 | 

critical

 | 

Core API Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPILedgerBalancesErrors

 | 

critical

 | 

Core API Ledger Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIAuthErrors

 | 

critical

 | 

Core API Auth Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIFlagsErrors

 | 

critical

 | 

Core API Flags Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

NewMessagesInAuditLogsDLQ

 | 

critical

 | 

Errors found while processing Audit Log messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInStreamAPIDLQ

 | 

critical

 | 

Errors found while processing Streaming API messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInSchedulerOutcomesDLQ

 | 

critical

 | 

Errors found while processing job outcomes Kafka messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInPostingAccountPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInPostingAsyncOperationsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInLedgerBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessageInEnrichedPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInCoreLedgerDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInWarmStorageDLQ

 | 

critical

 | 

Warm accounts backs the list accounts endpoint, so a missed event could mean an account is not listed even though it exists in hot storage.

 |
| 

NewMessagesInPaymentOrdersDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCalendarSchedulesDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduledPaymentsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInNextJobProcessorDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractAccountSchedulingDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractEngineAccountSchedulingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountScheduleOutcomeProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractHookDirectivesCommitterProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInStreamAPICustomersDLQ

 | 

critical

 | 

Errors found while processing Streaming API Customers messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInContractDirectivesAggregatorProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPlanScheduleExecutionProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostPostingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostBalanceUpdateProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsDLQ

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution was requested, but something went wrong. Vault Core attempted to publish an AccountPostPostingExecutionFailureEvent message, but this attempt also failed. As a result, the message has been annotated with DLQ metadata and published to {{ $labels.topic }}.

 |
| 

NewMessagesInPlanEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateBatchEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerExecutionEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerSchedulesEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

HighPercentageOfTTLExpiry

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last two minutes, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryFast

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last 45 seconds, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryV5

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last five minutes, postings requests failed with non-transient errors, possibly due to TTL expiry.

 |
| 

LedgerLatencySLOFastBurn

 | 

high

 | 

High Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

LedgerLatencySLOSlowBurn

 | 

medium

 | 

Sustained Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

UnprocessedBucketEntriesLagTooHigh

 | 

low

 | 

The ledger balances distribution or accumulator processor are unable to process queued bucket entries in a timely manner, this means that you are unable to query some ledger balances that have been processed in the last few hours. This alert only triggers if ListLedgerBalances has been called in the last seven days.

 |
| 

TableOrPartitionSizeExceeds80PercentOfLimit

 | 

medium

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 80% of the 32 TB capacity.

 |
| 

TableOrPartitionSizeExceeds90PercentOfLimit

 | 

critical

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 90% of the 32 TB capacity.

 |
| 

NotEnoughFuturePartitions

 | 

low

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} has fewer than two future partitions available. This will prevent new postings from being inserted if not fixed.

 |
| 

NoHeartbeatOnDataManagementServiceFor1Day

 | 

medium

 | 

The Ledger Data Management Service has had no partitioning activity recorded by the PartitionerHeartbeat in over 24h for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Ensure that the Ledger Data Management Service is working correctly.

 |
| 

PartitionSizeForecastExceeds90percentOfTableLimit

 | 

critical

 | 

The current partition size forecast suggests that over 90% of the 32TB limit will be reached before the end of the partition period for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Consider resizing the partition, reaching the table size limit will cause a system failure.

 |
| 

InitialPartitioningFailure

 | 

critical

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} failed

 |
| 

InitialPartitioningIncomplete

 | 

medium

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} was unable to complete, likely due to a timeout

 |
| 

NonDerivedIncorrectMilestonesFound

 | 

high

 | 

The `milestone-verifier` job has detected new non-derived incorrect milestones within the last hour.

 |
| 

MissingForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} is missing subscriptions to certain events. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

DeactivatedForm3Subscription

 | 

high

 | 

A required subscription is deactivated on {{ $labels.kubernetes\_namespace }}. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

UnexpectedForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} has a subscription to an unexpected resource, event type, or Callback URL. This may suggest a configuration issue with Form3, or a misconfigured alert. Check `form3-exporter` logs.

 |
| 

RegionUKGCSAuthenticationError

 | 

critical

 | 

Region UK File Processor pod(s) failed to authenticate with GCS in {{ $labels.kubernetes\_namespace }}. This may prevent the Payments Hub from processing payments, or processing payments using out-of-date information. Check the `ph-uk-file-processor` logs.

 |
| 

NewMessagesInBottomlineIntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInForm3IntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCreditTransferDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInPaymentHubBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInMigratedPostingsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInDirectDebitsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInRegionalProcessorsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

ChangeWatermarkLagTooHigh

 | 

medium

 | 

The effective time of the last processed Parameter change is {{ $value | humanizeDuration }} behind the current time, indicating that the Poller is significantly lagging. Consult the Parameter Change Grafana dashboard and investigate the cause of the slowness by checking the latency of DB queries and gRPC calls made by the accounts-change-poller deployment.

 |
| 

SchedulerLagWhenPublishingJobsTooHigh

 | 

medium

 | 

This metric measures the difference between the jobs publishedTime and scheduledTime.

 |
| 

SchedulerCreateGroupError

 | 

low

 | 

This metric tracks the number of `could not create group` errors

 |
| 

SchedulerAccountScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for an Account schedule was published to vault.core.schedule.execution.account.failure.events.

 |
| 

SchedulerPlanScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for a Plan schedule was published to vault.core.schedule.execution.plan.failure.events.

 |
| 

DuplicateInstancesScraped

 | 

low

 | 

Container {{ $labels.container }} - Pod {{ $labels.pod }} - {{ $labels.instance }} is scraped twice in namespace {{ $labels.kubernetes\_namespace }}. This can lead to metrics being counted twice - check service/pod labels and annotations and monitors for Prometheus Vault.

 |
| 

PrometheusLimitsTriggeredTargetScrapes

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedSampleLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

PrometheusLimitsTriggeredTargetLimit

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedTargetLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

AccountsFailedResources

 | 

medium

 | 

An account failed {{ $labels.runner\_type }} runner.

 |
| 

ParametersFailedResources

 | 

medium

 | 

A parameter failed {{ $labels.runner\_type }} runner.

 |
| 

PostingsFailedResources

 | 

medium

 | 

A posting failed {{ $labels.runner\_type }} runner.

 |
| 

PostPostingsFailedResources

 | 

medium

 | 

A post-posting failed {{ $labels.runner\_type }} runner.

 |

## [](#5_9_3_alert_rules_list "Copy link to heading")5.9.3 Alert Rules List

  
| Rule Name | Severity | Description |
| --- | --- | --- |
| 
ClusterHasISRFailures

 | 

high

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has failed to update the in-sync replicas for partitions, which are stored in Zookeeper. Restart the erroring broker to resolve it.

 |
| 

PartitionsAreOffline

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had offline partitions for more than one minute. All brokers may be down.

 |
| 

PartitionsAreReadOnly

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had read-only partitions for more than one minute.

 |
| 

ClusterIsUnderreplicated

 | 

high

 | 

Kafka pod {{ $labels.kubernetes\_pod }} has had underreplicated partitions for more than one hour. Writes have been disabled for safety.

 |
| 

MultipleActiveControllersPresent

 | 

critical

 | 

Multiple Kafka brokers have been reporting themselves as the active controller for more than five minutes in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }}. Check the 'Zookeeper split-brain scenario' section of the Kafka runbook.

 |
| 

LongLivedConsumerLag

 | 

high

 | 

For three hours the group {{ $labels.group }} consuming topic {{ $labels.topic }} has been accumulating lag without having a net positive on work processed. Check the logs and health status of the service accumulating lag without being able to have a net positive on work processed.

 |
| 

ExternalConnectivityToKafkaClusterIsFailing

 | 

critical

 | 

External communication with Kafka Cluster is failing! Brokers in {{ $labels.kubernetes\_namespace }} are likely to have failed to refresh the JWK set used for the authentication of external Kafka clients.

 |
| 

KubeStateMetricsDown

 | 

high

 | 

We are unable to get the current state of kubernetes

 |
| 

PrometheusStatefulSetUnavailable

 | 

high

 | 

StatefulSet {{ $labels.statefulset }} in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has no ready pods for more than 10m. Please check the Prometheus Dashboard.

 |
| 

KafkaOrZKSTSUnavailable

 | 

critical

 | 

There has been one or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

KafkaOrZKSTSReducedAvailability

 | 

high

 | 

There have been two or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperUnavailable

 | 

critical

 | 

There have been two or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperReducedAvailability

 | 

critical

 | 

There have been one or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

KubeStateMetricsListErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in list operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

KubeStateMetricsWatchErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in watch operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

AuditCleanupCronJobFailed

 | 

medium

 | 

The latest audit cleanup job ('{{ $labels.job\_name }}') in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has failed. This failure isn’t an immediate issue, but if it continues to fail then audit logs will not get cleaned and start to fill up the database. This alert will fire until an audit cleanup job succeeds or the failed audit cleanup job is removed.

 |
| 

ReleaseBundleImporterJobFailed

 | 

medium

 | 

ReleaseBundleImporterJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

AccountsJobsFailed

 | 

medium

 | 

The AccountsJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

DeploymentStuckInCrashLoopBackOff

 | 

medium

 | 

The Vault Core deployment in the cluster is experiencing crash loops, possibly due to misconfiguration or application error at container startup.

 |
| 

InvalidDBIndex4h

 | 

high

 | 

The index may be slowly building, or may have failed to do so.

 |
| 

DBIsInRecovery

 | 

critical

 | 

All database instances are in recovery mode.

 |
| 

Redis\_ClusterFailed

 | 

medium

 | 

At least one Redis node is reporting cluster failure. Check if the reporting node is failed or if the cluster is down.

 |
| 

Redis\_ClusterSlotsFailed

 | 

medium

 | 

At least one Redis node is reporting failed cluster slots. Check cluster health.

 |
| 

PointInTimeHighRetryableOutcomeRate

 | 

low

 | 

The {{ $labels.app }} is receiving retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

PointInTimeHighErroredOutcomeRate

 | 

medium

 | 

The {{ $labels.app }} is receiving non-retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

MilestoneProcessorLagExceedsRefreshWindow

 | 

high

 | 

The Milestone Processor time lag has exceeded the refresh window in {{ $labels.kubernetes\_namespace }}

 |
| 

SelectBalanceSeriesHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

SelectBatchIDsHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

GetLiveBalanceValuesAsOfUpdateCountHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query GetLiveBalanceValuesAsOfUpdateCount: at least 4s for 99th percentile.

 |
| 

KafkaClientCertificateExpiriesWithin2Days

 | 

high

 | 

The kafka client certificate used in {{ $labels.app }} is within two days of its expiration date

 |
| 

KafkaConsumerIgnoringMessages

 | 

medium

 | 

Kafka consumers are committing message offsets without processing. This is expected behaviour ONLY during disaster recovery. Check consumer logs or the Kafka Clients Consumer dashboard.

 |
| 

KafkaTopicAdminACLCleanupFailure

 | 

high

 | 

Topic manager {{ $labels.app }} has failed to delete {{ $labels.type }} ACL for {{ $labels.operation }} operation for topic {{ $labels.topic }} in {{ $labels.kubernetes\_namespace }}. This may cause read/write locks for topics. Look at logs and restart the {{ $labels.app }}.

 |
| 

SuccessiveIncompleteDeletionHandlers

 | 

medium

 | 

The deletion handler for {{ $labels.vault\_component }} has failed to complete two or more times in the last two days.

 |
| 

HighFailedDeletionBatchRate

 | 

medium

 | 

Batches for the {{ $labels.vault\_component }} deletion handler have failed to complete 80% or more of the time in the last 10 minutes.

 |
| 

JWKSCacheRefreshFailed

 | 

critical

 | 

JWT JWKS cache has failed to update in the last refresh attempt either on bootstrap or on refresh interval in app {{ $labels.app }}. If all pods of app {{ $labels.app }} are failing and cache is out of date then requests will fail to be processed.

 |
| 

HighContractExecutionDropRate

 | 

medium

 | 

The {{ $labels.app }} is getting non-retryable errors when trying to insert executions. Check the logs to see what is causing these errors.

 |
| 

ContractExecutionProcessingLagHigherThan1Hour

 | 

medium

 | 

The {{ $labels.app }} may be in an unhealthy state, causing lag to build up on the inbound topic. Check the Contracts Observability Grafana dashboard.

 |
| 

TimedOutContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

TimedOutSupervisorContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsTopic

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution failed. As a result, a PostPostingFailure resource has been created, further post\_posting\_code Smart Contract hook executions on the account are blocked, and an AccountPostPostingExecutionFailureEvent is published to {{ $labels.topic }}.

 |
| 

HighAccountScheduleRepublishRate

 | 

low

 | 

The {{ $labels.app }} is republishing over 80% of account schedules it handles. This could be due to high load, such as many schedules running at once.

 |
| 

CoreAPIAccountsErrors

 | 

critical

 | 

Core API Accounts Endpoints failure rate has exceeded 5% in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIProductsErrors

 | 

critical

 | 

Core API Products Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPISmartContractsErrors

 | 

critical

 | 

Core API Smart Contracts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentSubmissionErrors

 | 

critical

 | 

Core API Payment Submissions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIInternalAccountsErrors

 | 

critical

 | 

Core API Internal Accounts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentDevicesErrors

 | 

critical

 | 

Core API Payment Devices Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPICustomersErrors

 | 

critical

 | 

Core API Customers Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIRestrictionsErrors

 | 

critical

 | 

Core API Restrictions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPostingInstructionBatchErrors

 | 

critical

 | 

Core API Posting Instruction Batch Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIBalancesErrors

 | 

critical

 | 

Core API Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPILedgerBalancesErrors

 | 

critical

 | 

Core API Ledger Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIAuthErrors

 | 

critical

 | 

Core API Auth Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIFlagsErrors

 | 

critical

 | 

Core API Flags Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

NewMessagesInAuditLogsDLQ

 | 

critical

 | 

Errors found while processing Audit Log messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInStreamAPIDLQ

 | 

critical

 | 

Errors found while processing Streaming API messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInSchedulerOutcomesDLQ

 | 

critical

 | 

Errors found while processing job outcomes Kafka messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInPostingAccountPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInPostingAsyncOperationsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInLedgerBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessageInEnrichedPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInCoreLedgerDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInWarmStorageDLQ

 | 

critical

 | 

Warm accounts backs the list accounts endpoint, so a missed event could mean an account is not listed even though it exists in hot storage.

 |
| 

NewMessagesInPaymentOrdersDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCalendarSchedulesDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduledPaymentsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInNextJobProcessorDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractAccountSchedulingDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractEngineAccountSchedulingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountScheduleOutcomeProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractHookDirectivesCommitterProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInStreamAPICustomersDLQ

 | 

critical

 | 

Errors found while processing Streaming API Customers messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInContractDirectivesAggregatorProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPlanScheduleExecutionProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostPostingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostBalanceUpdateProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsDLQ

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution was requested, but something went wrong. Vault Core attempted to publish an AccountPostPostingExecutionFailureEvent message, but this attempt also failed. As a result, the message has been annotated with DLQ metadata and published to {{ $labels.topic }}.

 |
| 

NewMessagesInPlanEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateBatchEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerExecutionEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerSchedulesEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

HighPercentageOfTTLExpiry

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last two minutes, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryFast

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last 45 seconds, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryV5

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last five minutes, postings requests failed with non-transient errors, possibly due to TTL expiry.

 |
| 

LedgerLatencySLOFastBurn

 | 

high

 | 

High Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

LedgerLatencySLOSlowBurn

 | 

medium

 | 

Sustained Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

UnprocessedBucketEntriesLagTooHigh

 | 

low

 | 

The ledger balances distribution or accumulator processor are unable to process queued bucket entries in a timely manner, this means that you are unable to query some ledger balances that have been processed in the last few hours. This alert only triggers if ListLedgerBalances has been called in the last seven days.

 |
| 

TableOrPartitionSizeExceeds80PercentOfLimit

 | 

medium

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 80% of the 32 TB capacity.

 |
| 

TableOrPartitionSizeExceeds90PercentOfLimit

 | 

critical

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 90% of the 32 TB capacity.

 |
| 

NotEnoughFuturePartitions

 | 

low

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} has fewer than two future partitions available. This will prevent new postings from being inserted if not fixed.

 |
| 

NoHeartbeatOnDataManagementServiceFor1Day

 | 

medium

 | 

The Ledger Data Management Service has had no partitioning activity recorded by the PartitionerHeartbeat in over 24h for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Ensure that the Ledger Data Management Service is working correctly.

 |
| 

PartitionSizeForecastExceeds90percentOfTableLimit

 | 

critical

 | 

The current partition size forecast suggests that over 90% of the 32TB limit will be reached before the end of the partition period for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Consider resizing the partition, reaching the table size limit will cause a system failure.

 |
| 

InitialPartitioningFailure

 | 

critical

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} failed

 |
| 

InitialPartitioningIncomplete

 | 

medium

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} was unable to complete, likely due to a timeout

 |
| 

NonDerivedIncorrectMilestonesFound

 | 

high

 | 

The `milestone-verifier` job has detected new non-derived incorrect milestones within the last hour.

 |
| 

MissingForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} is missing subscriptions to certain events. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

DeactivatedForm3Subscription

 | 

high

 | 

A required subscription is deactivated on {{ $labels.kubernetes\_namespace }}. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

UnexpectedForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} has a subscription to an unexpected resource, event type, or Callback URL. This may suggest a configuration issue with Form3, or a misconfigured alert. Check `form3-exporter` logs.

 |
| 

RegionUKGCSAuthenticationError

 | 

critical

 | 

Region UK File Processor pod(s) failed to authenticate with GCS in {{ $labels.kubernetes\_namespace }}. This may prevent the Payments Hub from processing payments, or processing payments using out-of-date information. Check the `ph-uk-file-processor` logs.

 |
| 

NewMessagesInBottomlineIntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInForm3IntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCreditTransferDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInPaymentHubBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInMigratedPostingsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInDirectDebitsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInRegionalProcessorsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

ChangeWatermarkLagTooHigh

 | 

medium

 | 

The effective time of the last processed Parameter change is {{ $value | humanizeDuration }} behind the current time, indicating that the Poller is significantly lagging. Consult the Parameter Change Grafana dashboard and investigate the cause of the slowness by checking the latency of DB queries and gRPC calls made by the accounts-change-poller deployment.

 |
| 

SchedulerLagWhenPublishingJobsTooHigh

 | 

medium

 | 

This metric measures the difference between the jobs publishedTime and scheduledTime.

 |
| 

SchedulerCreateGroupError

 | 

low

 | 

This metric tracks the number of `could not create group` errors

 |
| 

SchedulerAccountScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for an Account schedule was published to vault.core.schedule.execution.account.failure.events.

 |
| 

SchedulerPlanScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for a Plan schedule was published to vault.core.schedule.execution.plan.failure.events.

 |
| 

DuplicateInstancesScraped

 | 

low

 | 

Container {{ $labels.container }} - Pod {{ $labels.pod }} - {{ $labels.instance }} is scraped twice in namespace {{ $labels.kubernetes\_namespace }}. This can lead to metrics being counted twice - check service/pod labels and annotations and monitors for Prometheus Vault.

 |
| 

PrometheusLimitsTriggeredTargetScrapes

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedSampleLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

PrometheusLimitsTriggeredTargetLimit

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedTargetLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

AccountsFailedResources

 | 

medium

 | 

An account failed {{ $labels.runner\_type }} runner.

 |
| 

ParametersFailedResources

 | 

medium

 | 

A parameter failed {{ $labels.runner\_type }} runner.

 |
| 

PostingsFailedResources

 | 

medium

 | 

A posting failed {{ $labels.runner\_type }} runner.

 |
| 

PostPostingsFailedResources

 | 

medium

 | 

A post-posting failed {{ $labels.runner\_type }} runner.

 |

## [](#5_9_2_alert_rules_list "Copy link to heading")5.9.2 Alert Rules List

  
| Rule Name | Severity | Description |
| --- | --- | --- |
| 
ClusterHasISRFailures

 | 

high

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has failed to update the in-sync replicas for partitions, which are stored in Zookeeper. Restart the erroring broker to resolve it.

 |
| 

PartitionsAreOffline

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had offline partitions for more than one minute. All brokers may be down.

 |
| 

PartitionsAreReadOnly

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had read-only partitions for more than one minute.

 |
| 

ClusterIsUnderreplicated

 | 

high

 | 

Kafka pod {{ $labels.kubernetes\_pod }} has had underreplicated partitions for more than one hour. Writes have been disabled for safety.

 |
| 

MultipleActiveControllersPresent

 | 

critical

 | 

Multiple Kafka brokers have been reporting themselves as the active controller for more than five minutes in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }}. Check the 'Zookeeper split-brain scenario' section of the Kafka runbook.

 |
| 

LongLivedConsumerLag

 | 

high

 | 

For three hours the group {{ $labels.group }} consuming topic {{ $labels.topic }} has been accumulating lag without having a net positive on work processed. Check the logs and health status of the service accumulating lag without being able to have a net positive on work processed.

 |
| 

ExternalConnectivityToKafkaClusterIsFailing

 | 

critical

 | 

External communication with Kafka Cluster is failing! Brokers in {{ $labels.kubernetes\_namespace }} are likely to have failed to refresh the JWK set used for the authentication of external Kafka clients.

 |
| 

KubeStateMetricsDown

 | 

high

 | 

We are unable to get the current state of kubernetes

 |
| 

PrometheusStatefulSetUnavailable

 | 

high

 | 

StatefulSet {{ $labels.statefulset }} in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has no ready pods for more than 10m. Please check the Prometheus Dashboard.

 |
| 

KafkaOrZKSTSUnavailable

 | 

critical

 | 

There has been one or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

KafkaOrZKSTSReducedAvailability

 | 

high

 | 

There have been two or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperUnavailable

 | 

critical

 | 

There have been two or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperReducedAvailability

 | 

critical

 | 

There have been one or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

KubeStateMetricsListErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in list operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

KubeStateMetricsWatchErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in watch operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

AuditCleanupCronJobFailed

 | 

medium

 | 

The latest audit cleanup job ('{{ $labels.job\_name }}') in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has failed. This failure isn’t an immediate issue, but if it continues to fail then audit logs will not get cleaned and start to fill up the database. This alert will fire until an audit cleanup job succeeds or the failed audit cleanup job is removed.

 |
| 

ReleaseBundleImporterJobFailed

 | 

medium

 | 

ReleaseBundleImporterJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

AccountsJobsFailed

 | 

medium

 | 

The AccountsJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

DeploymentStuckInCrashLoopBackOff

 | 

medium

 | 

The Vault Core deployment in the cluster is experiencing crash loops, possibly due to misconfiguration or application error at container startup.

 |
| 

InvalidDBIndex4h

 | 

high

 | 

The index may be slowly building, or may have failed to do so.

 |
| 

DBIsInRecovery

 | 

critical

 | 

All database instances are in recovery mode.

 |
| 

Redis\_ClusterFailed

 | 

medium

 | 

At least one Redis node is reporting cluster failure. Check if the reporting node is failed or if the cluster is down.

 |
| 

Redis\_ClusterSlotsFailed

 | 

medium

 | 

At least one Redis node is reporting failed cluster slots. Check cluster health.

 |
| 

PointInTimeHighRetryableOutcomeRate

 | 

low

 | 

The {{ $labels.app }} is receiving retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

PointInTimeHighErroredOutcomeRate

 | 

medium

 | 

The {{ $labels.app }} is receiving non-retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

MilestoneProcessorLagExceedsRefreshWindow

 | 

high

 | 

The Milestone Processor time lag has exceeded the refresh window in {{ $labels.kubernetes\_namespace }}

 |
| 

SelectBalanceSeriesHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

SelectBatchIDsHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

GetLiveBalanceValuesAsOfUpdateCountHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query GetLiveBalanceValuesAsOfUpdateCount: at least 4s for 99th percentile.

 |
| 

KafkaClientCertificateExpiriesWithin2Days

 | 

high

 | 

The kafka client certificate used in {{ $labels.app }} is within two days of its expiration date

 |
| 

KafkaConsumerIgnoringMessages

 | 

medium

 | 

Kafka consumers are committing message offsets without processing. This is expected behaviour ONLY during disaster recovery. Check consumer logs or the Kafka Clients Consumer dashboard.

 |
| 

KafkaTopicAdminACLCleanupFailure

 | 

high

 | 

Topic manager {{ $labels.app }} has failed to delete {{ $labels.type }} ACL for {{ $labels.operation }} operation for topic {{ $labels.topic }} in {{ $labels.kubernetes\_namespace }}. This may cause read/write locks for topics. Look at logs and restart the {{ $labels.app }}.

 |
| 

SuccessiveIncompleteDeletionHandlers

 | 

medium

 | 

The deletion handler for {{ $labels.vault\_component }} has failed to complete two or more times in the last two days.

 |
| 

HighFailedDeletionBatchRate

 | 

medium

 | 

Batches for the {{ $labels.vault\_component }} deletion handler have failed to complete 80% or more of the time in the last 10 minutes.

 |
| 

JWKSCacheRefreshFailed

 | 

critical

 | 

JWT JWKS cache has failed to update in the last refresh attempt either on bootstrap or on refresh interval in app {{ $labels.app }}. If all pods of app {{ $labels.app }} are failing and cache is out of date then requests will fail to be processed.

 |
| 

HighContractExecutionDropRate

 | 

medium

 | 

The {{ $labels.app }} is getting non-retryable errors when trying to insert executions. Check the logs to see what is causing these errors.

 |
| 

ContractExecutionProcessingLagHigherThan1Hour

 | 

medium

 | 

The {{ $labels.app }} may be in an unhealthy state, causing lag to build up on the inbound topic. Check the Contracts Observability Grafana dashboard.

 |
| 

TimedOutContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

TimedOutSupervisorContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsTopic

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution failed. As a result, a PostPostingFailure resource has been created, further post\_posting\_code Smart Contract hook executions on the account are blocked, and an AccountPostPostingExecutionFailureEvent is published to {{ $labels.topic }}.

 |
| 

HighAccountScheduleRepublishRate

 | 

low

 | 

The {{ $labels.app }} is republishing over 80% of account schedules it handles. This could be due to high load, such as many schedules running at once.

 |
| 

CoreAPIAccountsErrors

 | 

critical

 | 

Core API Accounts Endpoints failure rate has exceeded 5% in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIProductsErrors

 | 

critical

 | 

Core API Products Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPISmartContractsErrors

 | 

critical

 | 

Core API Smart Contracts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentSubmissionErrors

 | 

critical

 | 

Core API Payment Submissions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIInternalAccountsErrors

 | 

critical

 | 

Core API Internal Accounts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentDevicesErrors

 | 

critical

 | 

Core API Payment Devices Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPICustomersErrors

 | 

critical

 | 

Core API Customers Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIRestrictionsErrors

 | 

critical

 | 

Core API Restrictions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPostingInstructionBatchErrors

 | 

critical

 | 

Core API Posting Instruction Batch Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIBalancesErrors

 | 

critical

 | 

Core API Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPILedgerBalancesErrors

 | 

critical

 | 

Core API Ledger Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIAuthErrors

 | 

critical

 | 

Core API Auth Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIFlagsErrors

 | 

critical

 | 

Core API Flags Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

NewMessagesInAuditLogsDLQ

 | 

critical

 | 

Errors found while processing Audit Log messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInStreamAPIDLQ

 | 

critical

 | 

Errors found while processing Streaming API messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInSchedulerOutcomesDLQ

 | 

critical

 | 

Errors found while processing job outcomes Kafka messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInPostingAccountPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInPostingAsyncOperationsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInLedgerBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessageInEnrichedPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInCoreLedgerDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInWarmStorageDLQ

 | 

critical

 | 

Warm accounts backs the list accounts endpoint, so a missed event could mean an account is not listed even though it exists in hot storage.

 |
| 

NewMessagesInPaymentOrdersDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCalendarSchedulesDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduledPaymentsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInNextJobProcessorDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractAccountSchedulingDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractEngineAccountSchedulingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountScheduleOutcomeProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractHookDirectivesCommitterProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInStreamAPICustomersDLQ

 | 

critical

 | 

Errors found while processing Streaming API Customers messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInContractDirectivesAggregatorProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPlanScheduleExecutionProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostPostingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostBalanceUpdateProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsDLQ

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution was requested, but something went wrong. Vault Core attempted to publish an AccountPostPostingExecutionFailureEvent message, but this attempt also failed. As a result, the message has been annotated with DLQ metadata and published to {{ $labels.topic }}.

 |
| 

NewMessagesInPlanEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateBatchEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerExecutionEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerSchedulesEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

HighPercentageOfTTLExpiry

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last two minutes, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryFast

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last 45 seconds, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryV5

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last five minutes, postings requests failed with non-transient errors, possibly due to TTL expiry.

 |
| 

LedgerLatencySLOFastBurn

 | 

high

 | 

High Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

LedgerLatencySLOSlowBurn

 | 

medium

 | 

Sustained Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

UnprocessedBucketEntriesLagTooHigh

 | 

low

 | 

The ledger balances distribution or accumulator processor are unable to process queued bucket entries in a timely manner, this means that you are unable to query some ledger balances that have been processed in the last few hours. This alert only triggers if ListLedgerBalances has been called in the last seven days.

 |
| 

TableOrPartitionSizeExceeds80PercentOfLimit

 | 

medium

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 80% of the 32 TB capacity.

 |
| 

TableOrPartitionSizeExceeds90PercentOfLimit

 | 

critical

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 90% of the 32 TB capacity.

 |
| 

NotEnoughFuturePartitions

 | 

low

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} has fewer than two future partitions available. This will prevent new postings from being inserted if not fixed.

 |
| 

NoHeartbeatOnDataManagementServiceFor1Day

 | 

medium

 | 

The Ledger Data Management Service has had no partitioning activity recorded by the PartitionerHeartbeat in over 24h for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Ensure that the Ledger Data Management Service is working correctly.

 |
| 

PartitionSizeForecastExceeds90percentOfTableLimit

 | 

critical

 | 

The current partition size forecast suggests that over 90% of the 32TB limit will be reached before the end of the partition period for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Consider resizing the partition, reaching the table size limit will cause a system failure.

 |
| 

InitialPartitioningFailure

 | 

critical

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} failed

 |
| 

InitialPartitioningIncomplete

 | 

medium

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} was unable to complete, likely due to a timeout

 |
| 

NonDerivedIncorrectMilestonesFound

 | 

high

 | 

The `milestone-verifier` job has detected new non-derived incorrect milestones within the last hour.

 |
| 

MissingForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} is missing subscriptions to certain events. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

DeactivatedForm3Subscription

 | 

high

 | 

A required subscription is deactivated on {{ $labels.kubernetes\_namespace }}. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

UnexpectedForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} has a subscription to an unexpected resource, event type, or Callback URL. This may suggest a configuration issue with Form3, or a misconfigured alert. Check `form3-exporter` logs.

 |
| 

RegionUKGCSAuthenticationError

 | 

critical

 | 

Region UK File Processor pod(s) failed to authenticate with GCS in {{ $labels.kubernetes\_namespace }}. This may prevent the Payments Hub from processing payments, or processing payments using out-of-date information. Check the `ph-uk-file-processor` logs.

 |
| 

NewMessagesInBottomlineIntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInForm3IntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCreditTransferDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInPaymentHubBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInMigratedPostingsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInDirectDebitsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInRegionalProcessorsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

ChangeWatermarkLagTooHigh

 | 

medium

 | 

The effective time of the last processed Parameter change is {{ $value | humanizeDuration }} behind the current time, indicating that the Poller is significantly lagging. Consult the Parameter Change Grafana dashboard and investigate the cause of the slowness by checking the latency of DB queries and gRPC calls made by the accounts-change-poller deployment.

 |
| 

SchedulerLagWhenPublishingJobsTooHigh

 | 

medium

 | 

This metric measures the difference between the jobs publishedTime and scheduledTime.

 |
| 

SchedulerCreateGroupError

 | 

low

 | 

This metric tracks the number of `could not create group` errors

 |
| 

SchedulerAccountScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for an Account schedule was published to vault.core.schedule.execution.account.failure.events.

 |
| 

SchedulerPlanScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for a Plan schedule was published to vault.core.schedule.execution.plan.failure.events.

 |
| 

DuplicateInstancesScraped

 | 

low

 | 

Container {{ $labels.container }} - Pod {{ $labels.pod }} - {{ $labels.instance }} is scraped twice in namespace {{ $labels.kubernetes\_namespace }}. This can lead to metrics being counted twice - check service/pod labels and annotations and monitors for Prometheus Vault.

 |
| 

PrometheusLimitsTriggeredTargetScrapes

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedSampleLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

PrometheusLimitsTriggeredTargetLimit

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedTargetLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

AccountsFailedResources

 | 

medium

 | 

An account failed {{ $labels.runner\_type }} runner.

 |
| 

ParametersFailedResources

 | 

medium

 | 

A parameter failed {{ $labels.runner\_type }} runner.

 |
| 

PostingsFailedResources

 | 

medium

 | 

A posting failed {{ $labels.runner\_type }} runner.

 |
| 

PostPostingsFailedResources

 | 

medium

 | 

A post-posting failed {{ $labels.runner\_type }} runner.

 |

## [](#5_9_1_alert_rules_list "Copy link to heading")5.9.1 Alert Rules List

  
| Rule Name | Severity | Description |
| --- | --- | --- |
| 
ClusterHasISRFailures

 | 

high

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has failed to update the in-sync replicas for partitions, which are stored in Zookeeper. Restart the erroring broker to resolve it.

 |
| 

PartitionsAreOffline

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had offline partitions for more than one minute. All brokers may be down.

 |
| 

PartitionsAreReadOnly

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had read-only partitions for more than one minute.

 |
| 

ClusterIsUnderreplicated

 | 

high

 | 

Kafka pod {{ $labels.kubernetes\_pod }} has had underreplicated partitions for more than one hour. Writes have been disabled for safety.

 |
| 

MultipleActiveControllersPresent

 | 

critical

 | 

Multiple Kafka brokers have been reporting themselves as the active controller for more than five minutes in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }}. Check the 'Zookeeper split-brain scenario' section of the Kafka runbook.

 |
| 

LongLivedConsumerLag

 | 

high

 | 

For three hours the group {{ $labels.group }} consuming topic {{ $labels.topic }} has been accumulating lag without having a net positive on work processed. Check the logs and health status of the service accumulating lag without being able to have a net positive on work processed.

 |
| 

ExternalConnectivityToKafkaClusterIsFailing

 | 

critical

 | 

External communication with Kafka Cluster is failing! Brokers in {{ $labels.kubernetes\_namespace }} are likely to have failed to refresh the JWK set used for the authentication of external Kafka clients.

 |
| 

KubeStateMetricsDown

 | 

high

 | 

We are unable to get the current state of kubernetes

 |
| 

PrometheusStatefulSetUnavailable

 | 

high

 | 

StatefulSet {{ $labels.statefulset }} in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has no ready pods for more than 10m. Please check the Prometheus Dashboard.

 |
| 

KafkaOrZKSTSUnavailable

 | 

critical

 | 

There has been one or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

KafkaOrZKSTSReducedAvailability

 | 

high

 | 

There have been two or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperUnavailable

 | 

critical

 | 

There have been two or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperReducedAvailability

 | 

critical

 | 

There have been one or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

KubeStateMetricsListErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in list operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

KubeStateMetricsWatchErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in watch operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

AuditCleanupCronJobFailed

 | 

medium

 | 

The latest audit cleanup job ('{{ $labels.job\_name }}') in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has failed. This failure isn’t an immediate issue, but if it continues to fail then audit logs will not get cleaned and start to fill up the database. This alert will fire until an audit cleanup job succeeds or the failed audit cleanup job is removed.

 |
| 

ReleaseBundleImporterJobFailed

 | 

medium

 | 

ReleaseBundleImporterJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

AccountsJobsFailed

 | 

medium

 | 

The AccountsJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

DeploymentStuckInCrashLoopBackOff

 | 

medium

 | 

The Vault Core deployment in the cluster is experiencing crash loops, possibly due to misconfiguration or application error at container startup.

 |
| 

InvalidDBIndex4h

 | 

high

 | 

The index may be slowly building, or may have failed to do so.

 |
| 

DBIsInRecovery

 | 

critical

 | 

All database instances are in recovery mode.

 |
| 

Redis\_ClusterFailed

 | 

medium

 | 

At least one Redis node is reporting cluster failure. Check if the reporting node is failed or if the cluster is down.

 |
| 

Redis\_ClusterSlotsFailed

 | 

medium

 | 

At least one Redis node is reporting failed cluster slots. Check cluster health.

 |
| 

PointInTimeHighRetryableOutcomeRate

 | 

low

 | 

The {{ $labels.app }} is receiving retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

PointInTimeHighErroredOutcomeRate

 | 

medium

 | 

The {{ $labels.app }} is receiving non-retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

MilestoneProcessorLagExceedsRefreshWindow

 | 

high

 | 

The Milestone Processor time lag has exceeded the refresh window in {{ $labels.kubernetes\_namespace }}

 |
| 

SelectBalanceSeriesHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

SelectBatchIDsHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

GetLiveBalanceValuesAsOfUpdateCountHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query GetLiveBalanceValuesAsOfUpdateCount: at least 4s for 99th percentile.

 |
| 

KafkaClientCertificateExpiriesWithin2Days

 | 

high

 | 

The kafka client certificate used in {{ $labels.app }} is within two days of its expiration date

 |
| 

KafkaConsumerIgnoringMessages

 | 

medium

 | 

Kafka consumers are committing message offsets without processing. This is expected behaviour ONLY during disaster recovery. Check consumer logs or the Kafka Clients Consumer dashboard.

 |
| 

KafkaTopicAdminACLCleanupFailure

 | 

high

 | 

Topic manager {{ $labels.app }} has failed to delete {{ $labels.type }} ACL for {{ $labels.operation }} operation for topic {{ $labels.topic }} in {{ $labels.kubernetes\_namespace }}. This may cause read/write locks for topics. Look at logs and restart the {{ $labels.app }}.

 |
| 

SuccessiveIncompleteDeletionHandlers

 | 

medium

 | 

The deletion handler for {{ $labels.vault\_component }} has failed to complete two or more times in the last two days.

 |
| 

HighFailedDeletionBatchRate

 | 

medium

 | 

Batches for the {{ $labels.vault\_component }} deletion handler have failed to complete 80% or more of the time in the last 10 minutes.

 |
| 

JWKSCacheRefreshFailed

 | 

critical

 | 

JWT JWKS cache has failed to update in the last refresh attempt either on bootstrap or on refresh interval in app {{ $labels.app }}. If all pods of app {{ $labels.app }} are failing and cache is out of date then requests will fail to be processed.

 |
| 

HighContractExecutionDropRate

 | 

medium

 | 

The {{ $labels.app }} is getting non-retryable errors when trying to insert executions. Check the logs to see what is causing these errors.

 |
| 

ContractExecutionProcessingLagHigherThan1Hour

 | 

medium

 | 

The {{ $labels.app }} may be in an unhealthy state, causing lag to build up on the inbound topic. Check the Contracts Observability Grafana dashboard.

 |
| 

TimedOutContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

TimedOutSupervisorContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsTopic

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution failed. As a result, a PostPostingFailure resource has been created, further post\_posting\_code Smart Contract hook executions on the account are blocked, and an AccountPostPostingExecutionFailureEvent is published to {{ $labels.topic }}.

 |
| 

HighAccountScheduleRepublishRate

 | 

low

 | 

The {{ $labels.app }} is republishing over 80% of account schedules it handles. This could be due to high load, such as many schedules running at once.

 |
| 

CoreAPIAccountsErrors

 | 

critical

 | 

Core API Accounts Endpoints failure rate has exceeded 5% in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIProductsErrors

 | 

critical

 | 

Core API Products Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPISmartContractsErrors

 | 

critical

 | 

Core API Smart Contracts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentSubmissionErrors

 | 

critical

 | 

Core API Payment Submissions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIInternalAccountsErrors

 | 

critical

 | 

Core API Internal Accounts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentDevicesErrors

 | 

critical

 | 

Core API Payment Devices Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPICustomersErrors

 | 

critical

 | 

Core API Customers Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIRestrictionsErrors

 | 

critical

 | 

Core API Restrictions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPostingInstructionBatchErrors

 | 

critical

 | 

Core API Posting Instruction Batch Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIBalancesErrors

 | 

critical

 | 

Core API Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPILedgerBalancesErrors

 | 

critical

 | 

Core API Ledger Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIAuthErrors

 | 

critical

 | 

Core API Auth Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIFlagsErrors

 | 

critical

 | 

Core API Flags Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

NewMessagesInAuditLogsDLQ

 | 

critical

 | 

Errors found while processing Audit Log messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInStreamAPIDLQ

 | 

critical

 | 

Errors found while processing Streaming API messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInSchedulerOutcomesDLQ

 | 

critical

 | 

Errors found while processing job outcomes Kafka messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInPostingAccountPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInPostingAsyncOperationsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInLedgerBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessageInEnrichedPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInCoreLedgerDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInWarmStorageDLQ

 | 

critical

 | 

Warm accounts backs the list accounts endpoint, so a missed event could mean an account is not listed even though it exists in hot storage.

 |
| 

NewMessagesInPaymentOrdersDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCalendarSchedulesDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduledPaymentsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInNextJobProcessorDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractAccountSchedulingDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractEngineAccountSchedulingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountScheduleOutcomeProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractHookDirectivesCommitterProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInStreamAPICustomersDLQ

 | 

critical

 | 

Errors found while processing Streaming API Customers messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInContractDirectivesAggregatorProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPlanScheduleExecutionProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostPostingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostBalanceUpdateProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsDLQ

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution was requested, but something went wrong. Vault Core attempted to publish an AccountPostPostingExecutionFailureEvent message, but this attempt also failed. As a result, the message has been annotated with DLQ metadata and published to {{ $labels.topic }}.

 |
| 

NewMessagesInPlanEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateBatchEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerExecutionEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerSchedulesEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

HighPercentageOfTTLExpiry

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last two minutes, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryFast

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last 45 seconds, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryV5

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last five minutes, postings requests failed with non-transient errors, possibly due to TTL expiry.

 |
| 

LedgerLatencySLOFastBurn

 | 

high

 | 

High Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

LedgerLatencySLOSlowBurn

 | 

medium

 | 

Sustained Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

UnprocessedBucketEntriesLagTooHigh

 | 

low

 | 

The ledger balances distribution or accumulator processor are unable to process queued bucket entries in a timely manner, this means that you are unable to query some ledger balances that have been processed in the last few hours. This alert only triggers if ListLedgerBalances has been called in the last seven days.

 |
| 

TableOrPartitionSizeExceeds80PercentOfLimit

 | 

medium

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 80% of the 32 TB capacity.

 |
| 

TableOrPartitionSizeExceeds90PercentOfLimit

 | 

critical

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 90% of the 32 TB capacity.

 |
| 

NotEnoughFuturePartitions

 | 

low

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} has fewer than two future partitions available. This will prevent new postings from being inserted if not fixed.

 |
| 

NoHeartbeatOnDataManagementServiceFor1Day

 | 

medium

 | 

The Ledger Data Management Service has had no partitioning activity recorded by the PartitionerHeartbeat in over 24h for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Ensure that the Ledger Data Management Service is working correctly.

 |
| 

PartitionSizeForecastExceeds90percentOfTableLimit

 | 

critical

 | 

The current partition size forecast suggests that over 90% of the 32TB limit will be reached before the end of the partition period for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Consider resizing the partition, reaching the table size limit will cause a system failure.

 |
| 

InitialPartitioningFailure

 | 

critical

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} failed

 |
| 

InitialPartitioningIncomplete

 | 

medium

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} was unable to complete, likely due to a timeout

 |
| 

NonDerivedIncorrectMilestonesFound

 | 

high

 | 

The `milestone-verifier` job has detected new non-derived incorrect milestones within the last hour.

 |
| 

MissingForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} is missing subscriptions to certain events. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

DeactivatedForm3Subscription

 | 

high

 | 

A required subscription is deactivated on {{ $labels.kubernetes\_namespace }}. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

UnexpectedForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} has a subscription to an unexpected resource, event type, or Callback URL. This may suggest a configuration issue with Form3, or a misconfigured alert. Check `form3-exporter` logs.

 |
| 

RegionUKGCSAuthenticationError

 | 

critical

 | 

Region UK File Processor pod(s) failed to authenticate with GCS in {{ $labels.kubernetes\_namespace }}. This may prevent the Payments Hub from processing payments, or processing payments using out-of-date information. Check the `ph-uk-file-processor` logs.

 |
| 

NewMessagesInBottomlineIntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInForm3IntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCreditTransferDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInPaymentHubBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInMigratedPostingsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInDirectDebitsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInRegionalProcessorsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

ChangeWatermarkLagTooHigh

 | 

medium

 | 

The effective time of the last processed Parameter change is {{ $value | humanizeDuration }} behind the current time, indicating that the Poller is significantly lagging. Consult the Parameter Change Grafana dashboard and investigate the cause of the slowness by checking the latency of DB queries and gRPC calls made by the accounts-change-poller deployment.

 |
| 

SchedulerLagWhenPublishingJobsTooHigh

 | 

medium

 | 

This metric measures the difference between the jobs publishedTime and scheduledTime.

 |
| 

SchedulerCreateGroupError

 | 

low

 | 

This metric tracks the number of `could not create group` errors

 |
| 

SchedulerAccountScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for an Account schedule was published to vault.core.schedule.execution.account.failure.events.

 |
| 

SchedulerPlanScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for a Plan schedule was published to vault.core.schedule.execution.plan.failure.events.

 |
| 

DuplicateInstancesScraped

 | 

low

 | 

Container {{ $labels.container }} - Pod {{ $labels.pod }} - {{ $labels.instance }} is scraped twice in namespace {{ $labels.kubernetes\_namespace }}. This can lead to metrics being counted twice - check service/pod labels and annotations and monitors for Prometheus Vault.

 |
| 

PrometheusLimitsTriggeredTargetScrapes

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedSampleLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

PrometheusLimitsTriggeredTargetLimit

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedTargetLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

AccountsFailedResources

 | 

medium

 | 

An account failed {{ $labels.runner\_type }} runner.

 |
| 

ParametersFailedResources

 | 

medium

 | 

A parameter failed {{ $labels.runner\_type }} runner.

 |
| 

PostingsFailedResources

 | 

medium

 | 

A posting failed {{ $labels.runner\_type }} runner.

 |
| 

PostPostingsFailedResources

 | 

medium

 | 

A post-posting failed {{ $labels.runner\_type }} runner.

 |

## [](#5_9_0_alert_rules_list "Copy link to heading")5.9.0 Alert Rules List

  
| Rule Name | Severity | Description |
| --- | --- | --- |
| 
ClusterHasISRFailures

 | 

high

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has failed to update the in-sync replicas for partitions, which are stored in Zookeeper. Restart the erroring broker to resolve it.

 |
| 

PartitionsAreOffline

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had offline partitions for more than one minute. All brokers may be down.

 |
| 

PartitionsAreReadOnly

 | 

critical

 | 

Broker {{ $labels.kubernetes\_pod }} in {{ $labels.kubernetes\_namespace }} has had read-only partitions for more than one minute.

 |
| 

ClusterIsUnderreplicated

 | 

high

 | 

Kafka pod {{ $labels.kubernetes\_pod }} has had underreplicated partitions for more than one hour. Writes have been disabled for safety.

 |
| 

MultipleActiveControllersPresent

 | 

critical

 | 

Multiple Kafka brokers have been reporting themselves as the active controller for more than five minutes in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }}. Check the 'Zookeeper split-brain scenario' section of the Kafka runbook.

 |
| 

LongLivedConsumerLag

 | 

high

 | 

For three hours the group {{ $labels.group }} consuming topic {{ $labels.topic }} has been accumulating lag without having a net positive on work processed. Check the logs and health status of the service accumulating lag without being able to have a net positive on work processed.

 |
| 

ExternalConnectivityToKafkaClusterIsFailing

 | 

critical

 | 

External communication with Kafka Cluster is failing! Brokers in {{ $labels.kubernetes\_namespace }} are likely to have failed to refresh the JWK set used for the authentication of external Kafka clients.

 |
| 

KubeStateMetricsDown

 | 

high

 | 

We are unable to get the current state of kubernetes

 |
| 

PrometheusStatefulSetUnavailable

 | 

high

 | 

StatefulSet {{ $labels.statefulset }} in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has no ready pods for more than 10m. Please check the Prometheus Dashboard.

 |
| 

KafkaOrZKSTSUnavailable

 | 

critical

 | 

There has been one or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

KafkaOrZKSTSReducedAvailability

 | 

high

 | 

There have been two or fewer {{ $labels.statefulset }} pods available in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperUnavailable

 | 

critical

 | 

There have been two or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than five minutes.

 |
| 

StrimziPodSetKafkaOrZookeeperReducedAvailability

 | 

critical

 | 

There have been one or more {{ $labels.strimzipodset }} pods unavailable in namespace {{ $labels.namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} for more than 30 minutes.

 |
| 

KubeStateMetricsListErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in list operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

KubeStateMetricsWatchErrors

 | 

high

 | 

{{ $labels.service }} is experiencing errors at an elevated rate in watch operations. This is likely causing it to not be able to expose metrics about Kubernetes objects correctly or at all.

 |
| 

AuditCleanupCronJobFailed

 | 

medium

 | 

The latest audit cleanup job ('{{ $labels.job\_name }}') in namespace {{ $labels.kubernetes\_namespace }} in cluster {{ $externalLabels.kubernetes\_cluster }} has failed. This failure isn’t an immediate issue, but if it continues to fail then audit logs will not get cleaned and start to fill up the database. This alert will fire until an audit cleanup job succeeds or the failed audit cleanup job is removed.

 |
| 

ReleaseBundleImporterJobFailed

 | 

medium

 | 

ReleaseBundleImporterJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

AccountsJobsFailed

 | 

medium

 | 

The AccountsJob failed. This job usually performs data migrations on accounts database schemas.

 |
| 

DeploymentStuckInCrashLoopBackOff

 | 

medium

 | 

The Vault Core deployment in the cluster is experiencing crash loops, possibly due to misconfiguration or application error at container startup.

 |
| 

InvalidDBIndex4h

 | 

high

 | 

The index may be slowly building, or may have failed to do so.

 |
| 

DBIsInRecovery

 | 

critical

 | 

All database instances are in recovery mode.

 |
| 

Redis\_ClusterFailed

 | 

medium

 | 

At least one Redis node is reporting cluster failure. Check if the reporting node is failed or if the cluster is down.

 |
| 

Redis\_ClusterSlotsFailed

 | 

medium

 | 

At least one Redis node is reporting failed cluster slots. Check cluster health.

 |
| 

PointInTimeHighRetryableOutcomeRate

 | 

low

 | 

The {{ $labels.app }} is receiving retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

PointInTimeHighErroredOutcomeRate

 | 

medium

 | 

The {{ $labels.app }} is receiving non-retryable errors for over 80% of point-in-time executions it processes. This indicates unhealthy upstream services.

 |
| 

MilestoneProcessorLagExceedsRefreshWindow

 | 

high

 | 

The Milestone Processor time lag has exceeded the refresh window in {{ $labels.kubernetes\_namespace }}

 |
| 

SelectBalanceSeriesHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

SelectBatchIDsHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query SelectBatchIDs: at least 4s for 99th percentile.

 |
| 

GetLiveBalanceValuesAsOfUpdateCountHighLatency

 | 

high

 | 

{{ $labels.app}} indicates that database latency is very high for the query GetLiveBalanceValuesAsOfUpdateCount: at least 4s for 99th percentile.

 |
| 

KafkaClientCertificateExpiriesWithin2Days

 | 

high

 | 

The kafka client certificate used in {{ $labels.app }} is within two days of its expiration date

 |
| 

KafkaConsumerIgnoringMessages

 | 

medium

 | 

Kafka consumers are committing message offsets without processing. This is expected behaviour ONLY during disaster recovery. Check consumer logs or the Kafka Clients Consumer dashboard.

 |
| 

KafkaTopicAdminACLCleanupFailure

 | 

high

 | 

Topic manager {{ $labels.app }} has failed to delete {{ $labels.type }} ACL for {{ $labels.operation }} operation for topic {{ $labels.topic }} in {{ $labels.kubernetes\_namespace }}. This may cause read/write locks for topics. Look at logs and restart the {{ $labels.app }}.

 |
| 

SuccessiveIncompleteDeletionHandlers

 | 

medium

 | 

The deletion handler for {{ $labels.vault\_component }} has failed to complete two or more times in the last two days.

 |
| 

HighFailedDeletionBatchRate

 | 

medium

 | 

Batches for the {{ $labels.vault\_component }} deletion handler have failed to complete 80% or more of the time in the last 10 minutes.

 |
| 

JWKSCacheRefreshFailed

 | 

critical

 | 

JWT JWKS cache has failed to update in the last refresh attempt either on bootstrap or on refresh interval in app {{ $labels.app }}. If all pods of app {{ $labels.app }} are failing and cache is out of date then requests will fail to be processed.

 |
| 

HighContractExecutionDropRate

 | 

medium

 | 

The {{ $labels.app }} is getting non-retryable errors when trying to insert executions. Check the logs to see what is causing these errors.

 |
| 

ContractExecutionProcessingLagHigherThan1Hour

 | 

medium

 | 

The {{ $labels.app }} may be in an unhealthy state, causing lag to build up on the inbound topic. Check the Contracts Observability Grafana dashboard.

 |
| 

TimedOutContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

TimedOutSupervisorContractExecutions

 | 

low

 | 

The {{ $labels.app }} is returning a lot of DeadlineExceeded errors. This could be due to high load or a possible infinite loop in a contract.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsTopic

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution failed. As a result, a PostPostingFailure resource has been created, further post\_posting\_code Smart Contract hook executions on the account are blocked, and an AccountPostPostingExecutionFailureEvent is published to {{ $labels.topic }}.

 |
| 

HighAccountScheduleRepublishRate

 | 

low

 | 

The {{ $labels.app }} is republishing over 80% of account schedules it handles. This could be due to high load, such as many schedules running at once.

 |
| 

CoreAPIAccountsErrors

 | 

critical

 | 

Core API Accounts Endpoints failure rate has exceeded 5% in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIProductsErrors

 | 

critical

 | 

Core API Products Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPISmartContractsErrors

 | 

critical

 | 

Core API Smart Contracts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentSubmissionErrors

 | 

critical

 | 

Core API Payment Submissions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIInternalAccountsErrors

 | 

critical

 | 

Core API Internal Accounts Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPaymentDevicesErrors

 | 

critical

 | 

Core API Payment Devices Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPICustomersErrors

 | 

critical

 | 

Core API Customers Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIRestrictionsErrors

 | 

critical

 | 

Core API Restrictions Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIPostingInstructionBatchErrors

 | 

critical

 | 

Core API Posting Instruction Batch Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIBalancesErrors

 | 

critical

 | 

Core API Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPILedgerBalancesErrors

 | 

critical

 | 

Core API Ledger Balances Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIAuthErrors

 | 

critical

 | 

Core API Auth Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

CoreAPIFlagsErrors

 | 

critical

 | 

Core API Flags Endpoints are failing in {{ $labels.kubernetes\_namespace }}. Check both the Core API and Accounts Service.

 |
| 

NewMessagesInAuditLogsDLQ

 | 

critical

 | 

Errors found while processing Audit Log messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInStreamAPIDLQ

 | 

critical

 | 

Errors found while processing Streaming API messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInSchedulerOutcomesDLQ

 | 

critical

 | 

Errors found while processing job outcomes Kafka messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInPostingAccountPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInPostingAsyncOperationsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInLedgerBalancesDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessageInEnrichedPostingsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInCoreLedgerDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ topic.

 |
| 

NewMessagesInWarmStorageDLQ

 | 

critical

 | 

Warm accounts backs the list accounts endpoint, so a missed event could mean an account is not listed even though it exists in hot storage.

 |
| 

NewMessagesInPaymentOrdersDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCalendarSchedulesDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduledPaymentsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInNextJobProcessorDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractAccountSchedulingDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractEngineAccountSchedulingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountScheduleOutcomeProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractHookDirectivesCommitterProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInStreamAPICustomersDLQ

 | 

critical

 | 

Errors found while processing Streaming API Customers messages in namespace {{ $labels.kubernetes\_namespace }}. Check the logs to see what is causing these errors.

 |
| 

NewMessagesInContractDirectivesAggregatorProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPlanScheduleExecutionProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostPostingProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractPostBalanceUpdateProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountPostPostingExecutionFailureEventsDLQ

 | 

critical

 | 

An account’s post\_posting\_code Smart Contract hook execution was requested, but something went wrong. Vault Core attempted to publish an AccountPostPostingExecutionFailureEvent message, but this attempt also failed. As a result, the message has been annotated with DLQ metadata and published to {{ $labels.topic }}.

 |
| 

NewMessagesInPlanEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountUpdateBatchEventProcessorDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInAccountProcessorRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationRequestsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInVaultJobsOperationEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerExecutionEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInScheduleManagerSchedulesEventsDLQ

 | 

critical

 | 

A message could not be unmarshalled or an unrecoverable error occurred during processing. Check the logs and look at the headers of the message in the DLQ.

 |
| 

HighPercentageOfTTLExpiry

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last two minutes, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryFast

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last 45 seconds, over 20% of Posting Instruction Batch requests failed with POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED.

 |
| 

HighPercentageOfTTLExpiryV5

 | 

high

 | 

{{ $labels.app }} in {{ $labels.namespace }} - In the last five minutes, postings requests failed with non-transient errors, possibly due to TTL expiry.

 |
| 

LedgerLatencySLOFastBurn

 | 

high

 | 

High Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

LedgerLatencySLOSlowBurn

 | 

medium

 | 

Sustained Postings Latency - The ledger is processing the 95th percentile of High Priority requests in more than 1s on {{ $labels.kubernetes\_namespace }}

 |
| 

UnprocessedBucketEntriesLagTooHigh

 | 

low

 | 

The ledger balances distribution or accumulator processor are unable to process queued bucket entries in a timely manner, this means that you are unable to query some ledger balances that have been processed in the last few hours. This alert only triggers if ListLedgerBalances has been called in the last seven days.

 |
| 

TableOrPartitionSizeExceeds80PercentOfLimit

 | 

medium

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 80% of the 32 TB capacity.

 |
| 

TableOrPartitionSizeExceeds90PercentOfLimit

 | 

critical

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} is approaching the Postgres table size limit (32 TB). The table has exceeded 90% of the 32 TB capacity.

 |
| 

NotEnoughFuturePartitions

 | 

low

 | 

Table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }} has fewer than two future partitions available. This will prevent new postings from being inserted if not fixed.

 |
| 

NoHeartbeatOnDataManagementServiceFor1Day

 | 

medium

 | 

The Ledger Data Management Service has had no partitioning activity recorded by the PartitionerHeartbeat in over 24h for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Ensure that the Ledger Data Management Service is working correctly.

 |
| 

PartitionSizeForecastExceeds90percentOfTableLimit

 | 

critical

 | 

The current partition size forecast suggests that over 90% of the 32TB limit will be reached before the end of the partition period for table {{ $labels.schemaname }}.{{ $labels.relname }} in database {{ $labels.server }}. Consider resizing the partition, reaching the table size limit will cause a system failure.

 |
| 

InitialPartitioningFailure

 | 

critical

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} failed

 |
| 

InitialPartitioningIncomplete

 | 

medium

 | 

Migration {{ $labels.migration }} for table {{ $labels.schemaname }}.{{ $labels.relname }} was unable to complete, likely due to a timeout

 |
| 

NonDerivedIncorrectMilestonesFound

 | 

high

 | 

The `milestone-verifier` job has detected new non-derived incorrect milestones within the last hour.

 |
| 

MissingForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} is missing subscriptions to certain events. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

DeactivatedForm3Subscription

 | 

high

 | 

A required subscription is deactivated on {{ $labels.kubernetes\_namespace }}. This may prevent payments being processed via Form3. Check `form3-exporter` logs for details on invalid subscriptions.

 |
| 

UnexpectedForm3Subscription

 | 

high

 | 

{{ $labels.kubernetes\_namespace }} has a subscription to an unexpected resource, event type, or Callback URL. This may suggest a configuration issue with Form3, or a misconfigured alert. Check `form3-exporter` logs.

 |
| 

RegionUKGCSAuthenticationError

 | 

critical

 | 

Region UK File Processor pod(s) failed to authenticate with GCS in {{ $labels.kubernetes\_namespace }}. This may prevent the Payments Hub from processing payments, or processing payments using out-of-date information. Check the `ph-uk-file-processor` logs.

 |
| 

NewMessagesInBottomlineIntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInForm3IntegrationDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInCreditTransferDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInPaymentHubBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInMigratedPostingsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInDirectDebitsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInContractsBridgeDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

NewMessagesInRegionalProcessorsDLQ

 | 

critical

 | 

A non-recoverable error occurred during message processing. Check the processor and look at the headers of the message in the DLQ.

 |
| 

ChangeWatermarkLagTooHigh

 | 

medium

 | 

The effective time of the last processed Parameter change is {{ $value | humanizeDuration }} behind the current time, indicating that the Poller is significantly lagging. Consult the Parameter Change Grafana dashboard and investigate the cause of the slowness by checking the latency of DB queries and gRPC calls made by the accounts-change-poller deployment.

 |
| 

SchedulerLagWhenPublishingJobsTooHigh

 | 

medium

 | 

This metric measures the difference between the jobs publishedTime and scheduledTime.

 |
| 

SchedulerCreateGroupError

 | 

low

 | 

This metric tracks the number of `could not create group` errors

 |
| 

SchedulerAccountScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for an Account schedule was published to vault.core.schedule.execution.account.failure.events.

 |
| 

SchedulerPlanScheduleJobFailedStatusReceived

 | 

high

 | 

A failed job outcome for a Plan schedule was published to vault.core.schedule.execution.plan.failure.events.

 |
| 

DuplicateInstancesScraped

 | 

low

 | 

Container {{ $labels.container }} - Pod {{ $labels.pod }} - {{ $labels.instance }} is scraped twice in namespace {{ $labels.kubernetes\_namespace }}. This can lead to metrics being counted twice - check service/pod labels and annotations and monitors for Prometheus Vault.

 |
| 

PrometheusLimitsTriggeredTargetScrapes

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedSampleLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

PrometheusLimitsTriggeredTargetLimit

 | 

medium

 | 

Pod {{ $labels.pod }} - {{ $labels.instance }} triggered a circuit breaker. {{ printf "%.0f" $value }} targets were dropped because the number of targets exceeded the configured enforcedTargetLimit. Consider adjusting the value for observability.cluster\_size (also specified in the pod and Prometheus annotations)

 |
| 

AccountsFailedResources

 | 

medium

 | 

An account failed {{ $labels.runner\_type }} runner.

 |
| 

ParametersFailedResources

 | 

medium

 | 

A parameter failed {{ $labels.runner\_type }} runner.

 |
| 

PostingsFailedResources

 | 

medium

 | 

A posting failed {{ $labels.runner\_type }} runner.

 |
| 

PostPostingsFailedResources

 | 

medium

 | 

A post-posting failed {{ $labels.runner\_type }} runner.

 |