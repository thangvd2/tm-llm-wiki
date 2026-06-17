---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide"
title: "Metrics and Tracing Guide"
scraped_at: "2026-06-16T15:24:19.017Z"
images: 0
---

# Metrics and Tracing Guide

SaaS

Use this guide to learn how to ingest Vault Core metrics into your own monitoring stack through the Observability Metrics Endpoint. This will enable you to provide a centralised view of your ecosystem and use the metrics to build custom dashboards and alerts.

## [](#about_this_guide "Copy link to heading")About this guide

This guide provides information about the Observability Metrics Endpoint and tracing functionality that Thought Machine enables for Vault Core SaaS clients to use.

It is intended for use by engineers who want to access data dashboards or to run ad-hoc queries to better understand the current execution state of their Vault Core SaaS environment.

### [](#scope "Copy link to heading")Scope

It covers the following:

-   Vault Core metrics that are exposed by the Observability Metrics Endpoint
    
-   How tracing headers are propagated in Vault Core SaaS
    

## [](#metrics "Copy link to heading")Metrics

Thought Machine provides the Observability Metrics Endpoint which clients can use as a data source for dashboards or to perform ad-hoc queries to better understand the current execution state of Vault Core.

Vault Core services are instrumented to expose Prometheus metrics. These metrics provide visibility into the state of Vault services at a service level; for example, batch processing time and error rates.

Only Vault Core-specific metrics are available for query through the Observability Metrics Endpoint. Cloud infrastructure metrics are monitored by Thought Machine and are NOT exposed using the endpoint.

See the following guides for further information:

-   [Environment details quick start guide](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide) - for configuration information to enable you to connect to the [Observability Metrics Endpoint](/vault-core/5-8/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#vault_metrics_endpoint)
    
-   [List of metrics and descriptions](/vault-core/5-8/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide#list_of_metrics_and_descriptions) - for a full list of the exposed metrics
    
-   [Vault API Monitoring Guide](/vault-core/5-8/EN/environment_and_installation/saas/observability_and_api_monitoring/api) - for how to monitor Vault SaaS endpoint availability
    

### [](#observability_metrics_endpoint "Copy link to heading")Observability Metrics Endpoint

Clients access Vault Core metrics using this endpoint. The endpoint allows read access to the Prometheus Time Series Database (TSDB) using the [Remote Read API](https://prometheus.io/docs/prometheus/latest/storage#remote-storage-integrations). The Prometheus project maintains a non-exhaustive list of [integrations](https://prometheus.io/docs/operating/integrations#remote-endpoints-and-storage) which clients can use to connect to the endpoint.

#### [](#performance "Copy link to heading")Performance

The Observability Metrics Endpoint is backed by a dedicated Prometheus instance. Queries made to the endpoint are isolated from instances carrying out critical monitoring functions across Vault Core SaaS.

#### [](#retention "Copy link to heading")Retention

Metrics are collected and stored in each Vault Core SaaS cluster for a period of 14 days with a 15-second period. For longer-term retention, clients can make use of a [remote storage integration](https://prometheus.io/docs/prometheus/latest/storage#remote-storage-integrations) to store metrics in their own infrastructure.

#### [](#authentication "Copy link to heading")Authentication

The Metrics Endpoint does not require authentication.

## [](#tracing "Copy link to heading")Tracing

Thought Machine allows clients to provide trace context with Vault Core requests. Vault services are instrumented for tracing within the OpenTelemetry framework.

Vault Core tracing propagation behaviour is explained in the section [Propagation of tracing ID through Vault Core services](/vault-core/5-7/EN/environment_and_installation/infrastructure_docs/observability_stack_installation_and_user_guide#propagation_of_tracing_id_through_vault_core_services) in the documentation for Vault Core 5.6+. Read it to understand the current tracing capabilities and limitations.

Tracing spans are collected and stored within the Vault Core SaaS environment for use by Thought Machine in incident triage, investigation and root cause analysis. Vault Core SaaS does not support the sending of tracing spans to a bank-hosted collector.

## [](#list_of_metrics_and_descriptions "Copy link to heading")List of metrics and descriptions

A variety of Vault Core metrics are available for you to query through the Observability Metrics Endpoint. These comprise a mixture of the following metric types:

-   Counter - cumulative and represents a single monotonically increasing counter. Its value only increases or resets to zero on restart. For example, the number of requests.
    
-   Gauge - represents a single numerical value that can arbitrarily go up and down.
    
-   Histogram - samples observations, such as the duration of a delay and time taken to complete a task, and counts them in configurable buckets. It also provides a sum of all observed values. While the `_bucket` metric holds the histogram bucket data, `_count` and `_sum` metrics also exist, and follow the same format (`<basename+suffix>`).
    

chat\_bubble

For some histogram metrics, only the base name appears in the code but Prometheus should generate the associated `_bucket`, `_count` and `_sum` metrics.

    
| Metric name | Vault 4.x | Vault 5.x | Metric type | Description |
| --- | --- | --- | --- | --- |
| 
`vault_account_processor_batch_creator_batch_execution_delay_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) for a delay between Kafka ACK and the processor pick up for batch events.

 |
| 

`vault_account_processor_updater_batch_process_time_duration_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) taken for the account processor to process a batch of account updates.

 |
| 

`vault_account_processor_updater_execution_delay_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) for a delay between Kafka ACK and processor pick up.

 |
| 

`vault_account_processor_updater_most_delayed_message_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The message with the longest delay before processing begins.

 |
| 

`vault_account_processor_updater_single_account_update_process_time_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) taken for the account processor to process one account update.

 |
| 

`vault_account_processor_updater_single_message_process_time_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) taken for the account processor to process one account update.

 |
| 

`vault_account_processor_updater_update_least_delayed_message_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The message with the shortest delay before processing begins.

 |
| 

`vault_account_service_update_account_updates_from_pending_execution_count`

 | 

✓

 | 

✓

 | 

counter

 | 

Number of account updates moved from pending execution to a final status.

 |
| 

`contract_simulation_contract_preparation_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent for preparing and parsing user Smart Contracts and Supervisor Contracts.

 |
| 

`contract_simulation_duration_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total time (in seconds) spent running the Contracts simulation.

 |
| 

`contract_simulation_requested_simulation_time_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total time (in seconds) requested to simulate in simulation.

 |
| 

`contract_simulation_response_conversion_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent on converting and preparing the response.

 |
| 

`contract_simulation_send_stream_response_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent sending response over gRPC.

 |
| 

`contracts_engine_api_committer_duration_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Total number of seconds spent committing directives in the Contracts Engine.

 |
| 

`contracts_engine_api_committer_invocation_total`

 | 

✓

 | 

✗

 | 

counter

 | 

Total number of times that a committer is invoked leading to a particular outcome in the Contracts Engine.

 |
| 

`contracts_engine_api_executor_duration_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Total number of seconds spent executing a contract in the Contracts Engine.

 |
| 

`contracts_engine_api_executor_invocation_total`

 | 

✓

 | 

✗

 | 

counter

 | 

Total number of times that an executor is invoked leading to an outcome in the Contracts Engine.

 |
| 

`contracts_engine_api_executor_operation_invocation_total`

 | 

✓

 | 

✗

 | 

counter

 | 

Total number of times that an executor operation is invoked leading to an outcome in the Contracts Engine.

 |
| 

`contracts_engine_api_executor_operation_number_of_retries_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Total number of retries attempted for an executor operation due to application layer retry logic before it finally succeeds or fails.

 |
| 

`contracts_engine_api_fetcher_operation_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds to execute a fetcher operation in the Contracts Engine.

 |
| 

`contracts_engine_api_fetcher_operation_invocation_total`

 | 

✓

 | 

✓

 | 

counter

 | 

Total number of times that a fetcher operation is invoked leading to a particular outcome in the Contracts Engine.

 |
| 

`contracts_engine_api_hook_bulk_request_lengths_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Number of requests in a bulk request.

 |
| 

`contracts_engine_api_hook_execution_duration_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Total number of seconds spent executing a hook in the Contracts Engine leading to a particular outcome.

 |
| 

`contracts_engine_api_hook_invocation_total`

 | 

✓

 | 

✗

 | 

counter

 | 

Total number of times that a hook is invoked leading to a particular outcome in the Contracts Engine.

 |
| 

`contracts_engine_api_hook_request_outcomes`

 | 

✓

 | 

✗

 | 

counter

 | 

Total number of requests that a hook is called with, incremented per request in the bulk, leading to a particular outcome.

 |
| 

`contracts_engine_api_hook_step_execution_duration_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Total number of seconds spent executing a hook step in the Contracts Engine leading to a particular outcome.

 |
| 

`language_contract_executor_cancelled_total`

 | 

✓

 | 

✓

 | 

counter

 | 

Number of requests that timed out when waiting to begin execution.

 |
| 

`language_contract_executor_run_hook_build_requirements_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to build hook requirements.

 |
| 

`language_contract_executor_run_hook_build_sandbox_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to build a sandbox for hook.

 |
| 

`language_contract_executor_run_hook_prepare_args_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to prepare hook arguments.

 |
| 

`language_contract_executor_run_hook_prepare_results_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to execute the hook itself.

 |
| 

`language_contract_executor_run_hook_wait_time_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) waiting to start executing the hook.

 |
| 

`simulation_engine_initialisation_duration_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total time (in seconds) spent initialising the simulation engine to handle a new request.

 |
| 

`simulation_engine_instruction_manager_update_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent during instruction result processing.

 |
| 

`simulation_engine_instruction_processing_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent during instruction processing.

 |
| 

`simulation_engine_instruction_result_processing_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent during instruction result processing

 |
| 

`simulation_engine_instructions_processed_total`

 | 

✓

 | 

✓

 | 

counter

 | 

Total number of simulation instructions processed.

 |
| 

`simulation_engine_orchestrator_run_duration_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) spent running the orchestrator to process simulation instruction.

 |
| 

`simulation_engine_response_preparation_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Total number of seconds spent on converting and preparing a response.

 |
| 

`vault_contract_executor_parse_contract_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) spent parsing a Smart Contract.

 |
| 

`vault_contract_executor_run_hook_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) spent running a Smart Contract’s hook

 |
| 

`vault_contract_parser_parse_contract_module_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) spent parsing a Contract Module.

 |
| 

`vault_plan_scheduled_execution_number_of_unique_batches`

 | 

✓

 | 

✗

 | 

counter

 | 

Number of unique batches created from an incoming batch as a result of non-unique plan IDs.

 |
| 

`vault_plan_scheduled_execution_publish_job_outcomes_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time taken (in seconds) to publish job outcomes.

 |
| 

`vault_post_posting_processor_number_of_unique_batches`

 | 

✓

 | 

✗

 | 

counter

 | 

Number of unique batches created from an incoming batch as a result of non-unique account IDs.

 |
| 

`vault_post_posting_processor_smart_contracts_response_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

The time taken (in seconds) from sending a gRPC call to `BulkProcessPostingInstructionBatch` to receiving the response. We associate a label to each outcome, Success or Error; it does not record partial errors.

 |
| 

`vault_supervisor_contract_executor_parse_contract_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) spent to parse a Supervisor Contract.

 |
| 

`vault_supervisor_contract_executor_run_hook_build_requirements_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to build hook requirements.

 |
| 

`vault_supervisor_contract_executor_run_hook_build_sandbox_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to build a sandbox for a hook.

 |
| 

`vault_supervisor_contract_executor_run_hook_prepare_args_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to prepare hook arguments.

 |
| 

`vault_supervisor_contract_executor_run_hook_prepare_results_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to prepare the hook response

 |
| 

`vault_supervisor_contract_executor_run_hook_run_contract_code_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) to execute the hook itself.

 |
| 

`vault_supervisor_contract_executor_run_hook_seconds_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Time (in seconds) spent running a Supervisor Contract hook.

 |
| 

`data_loader_resource_insertion_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) of the delay between sending resources to Vault Core and receiving a response.

 |
| 

`data_loader_resources_loaded_counter`

 | 

✓

 | 

✓

 | 

counter

 | 

Resources loaded via Data Loader.

 |
| 

`data_loader_resource_batch_responses_counter`

 | 

✓

 | 

✓

 | 

counter

 | 

Resource Batch response count.

 |
| 

`data_loader_resource_batch_events_counter`

 | 

✓

 | 

✓

 | 

counter

 | 

Resource Batch events count.

 |
| 

`data_loader_items_processed`

 | 

✓

 | 

✓

 | 

counter

 | 

Number of items processed by the Data Loader.

 |
| 

`data_loader_dependency_group_events_counter`

 | 

✓

 | 

✓

 | 

counter

 | 

Dependency Group events count.

 |
| 

`data_loader_vault_resource_processing_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Time (in seconds) for the duration of Data Loader resource processing.

 |
| 

`audit_log_creation_request_produced_counter`

 | 

✓

 | 

✗

 | 

counter

 | 

The number (count) of audit logs creation requests produced to Kafka.

 |
| 

`policy_engine_bulk_evaluate_policies_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The time taken for the execution of `BulkEvaluatePolicies` at the service level.

 |
| 

`policy_engine_bulk_evaluate_policies_num_entities_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The number of evaluation entities that `BulkEvaluatePolicies` is called with.

 |
| 

`policy_engine_evaluate_policies_action_counter`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of times that `evaluatePolicies` has called for a particular action.

 |
| 

`policy_engine_evaluate_policies_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The time taken for the execution of `evaluatePolicies`.

 |
| 

`policy_engine_evaluate_policies_num_of_policies_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The number of policies that were evaluated in calls to `evaluatePolicies`.

 |
| 

`policy_engine_evaluate_policies_response_counter`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of times (count) that there was a response given from `evaluatePolicies`.

 |
| 

`policy_engine_get_all_that_allow_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The time (in seconds) taken for the execution of `GetAllThatAllowTime`.

 |
| 

`policy_engine_get_all_that_allow_num_returned_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The number of allowed policies returned from calls to `GetAllThatAllow`.

 |
| 

`request_intercepted_by_audit_counter`

 | 

✓

 | 

✗

 | 

counter

 | 

The number of times (count) that a request was intercepted by the audit interceptor.

 |
| 

`vault_auth_get_certificate_data_elapsed_time_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Get Certificate Data Elapsed Seconds.

 |
| 

`PostingsService_grpc_batch_size_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Measures the batch size used for RPC calls.

 |
| 

`PostingsService_grpc_page_size_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Measures the returned page size for RPC calls.

 |
| 

`balance_service_grpc_batch_size_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Measures the batch size used for RPC calls.

 |
| 

`balance_service_grpc_page_size_bucket`

 | 

✓

 | 

✗

 | 

histogram

 | 

Measures the returned page size for RPC calls.

 |
| 

`ledger_balances_service_grpc_batch_size_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the batch size used for RPC calls.

 |
| 

`ledger_balances_watermark_processor_partition_consumer_lag`

 | 

✓

 | 

✓

 | 

gauge

 | 

Reports the consumer lag per partition.

 |
| 

`ledger_balances_watermark_processor_partition_health`

 | 

✓

 | 

✓

 | 

gauge

 | 

Reports the health of each partition.

 |
| 

`ledger_balances_watermark_processor_partition_publish_timestamp_delta_seconds`

 | 

✓

 | 

✓

 | 

gauge

 | 

Reports now() - the last received heartbeat publishes a timestamp per partition (in seconds).

 |
| 

`ledger_balances_watermark_processor_partition_publish_timestamp_unix`

 | 

✓

 | 

✓

 | 

gauge

 | 

Reports the last received heartbeat publishes a timestamp per partition in Unix format.

 |
| 

`ledger_balances_watermark_processor_watermark_lag_seconds`

 | 

✓

 | 

✓

 | 

gauge

 | 

Reports now() - the current watermark in seconds.

 |
| 

`live_balance_messages_processed`

 | 

✓

 | 

✗

 | 

counter

 | 

The number of live balance messages that have been processed.

 |
| 

`calendar_ticker_iteration_failed`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of times an iteration within the calendar ticker failed.

 |
| 

`duplicate_scheduler_job_outcome_update`

 | 

✓

 | 

✓

 | 

counter

 | 

The Kafka message has already been processed.

 |
| 

`scheduler_create_group_error`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of times that the Scheduler service returned an unknown error while creating a group.

 |
| 

`scheduler_failed_to_get_job_id`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of times that the Scheduler service could not get the job ID (either because the job ID does not exist or due to an error) before processing an update (job outcomes messages).

 |
| 

`scheduler_jd_batch_processing_errors`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of errors produced while processing the job outcomes messages.

 |
| 

`scheduler_job_execution_duration_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The time (in seconds) taken for a job to be successfully completed after it has been published.

 |
| 

`scheduler_job_outcome_batch_processing_errors`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of errors produced while processing the job outcomes messages.

 |
| 

`scheduler_job_outcome_status_hit`

 | 

✓

 | 

✗

 | 

counter

 | 

The number of messages processed with given outcome statuses and services as labels.

 |
| 

`scheduler_job_outcome_successful_messages`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of messages processed successfully by the job outcome processor.

 |
| 

`scheduler_job_outcome_unmarshalling_errors`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of errors produced while unmarshalling Kafka messages in the scheduler.job.outcome topic.

 |
| 

`scheduler_job_outcome_update_errors`

 | 

✓

 | 

✓

 | 

counter

 | 

The number of errors produced while trying to update a job after a Kafka message is received.

 |
| 

`scheduler_job_publish_lag_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

The difference in time (in seconds) between the scheduled time of publishing and the actual time of publishing.

 |
| 

`ticket_engine_tickets_to_tasks_migration_progress`

 | 

✓

 | 

✗

 | 

counter

 | 

Progress of the migration; the total number of tickets migrated from the tickets schema to the task.

 |
| 

`ticket_engine_tickets_to_tasks_migration_status`

 | 

✓

 | 

✓

 | 

gauge

 | 

Status of the migration from the tickets schema to the task.

 |
| 

`callback_router_request_latency_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Callback router request latency (in seconds).

 |
| 

`kafka_burrow_partition_lag`

 | 

✓

 | 

✓

 | 

gauge

 | 

Number of messages there are to consume from any given topic, consumer group or partition.

 |
| 

`kafka_server_brokertopicmetrics_messagesin_total`

 | 

✓

 | 

✓

 | 

counter

 | 

Total number of messages produced into any given topic.

 |
| 

`kafka_server_kafkaserver_brokerstate`

 | 

✓

 | 

✓

 | 

gauge

 | 

From each Kafka broker’s perspective, how many active brokers there are in the cluster.

 |
| 

`pipeline_request_latency_s_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the time spent in seconds (represented by "s") by a request spent in the Kafka topic before postings processing starts.

 |
| 

`pipeline_request_response_time_s_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the processing duration in seconds (represented by "s") of a posting request.

 |
| 

`pipeline_e2e_latency_s_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the total duration in seconds (represented by "s") of a posting request, end to end.In practice, an aggregation of `pipeline_request_latency_s_bucket` and `pipeline_request_response_time_s_bucket`.

 |
| 

`params_vepv_build_domain_request_duration_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the duration in seconds of the process of building an internal domain request to process a `ViewEffectiveParameterValues` request. Excludes failing request builds.

 |
| 

`params_vepv_interval_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the duration in seconds of the viewing interval of a `ViewEffectiveParameterValues` request.

 |
| 

`params_vepv_fetched_account_states_total_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Account states fetched while handling a `ViewEffectiveParameterValues` request.

 |
| 

`params_vepv_fetched_smart_contract_versions_total_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Smart Contracts fetched while handling a `ViewEffectiveParameterValues` request.

 |
| 

`params_vepv_expected_timeseries_total_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Expected Parameter Value intervals looked up to handle a `ViewEffectiveParameterValues` request.

 |
| 

`params_requirements_per_request_size_bucket"`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Parameter Value timeseries requirements generated to handle a `ViewEffectiveParameterValues` request.

 |
| 

`params_vepv_fetched_parameter_timeseries_total_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Parameter Value timeseries fetched to handle a `ViewEffectiveParameterValues` request.

 |
| 

`params_vepv_fetched_parameter_values_total_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Parameter Values fetched to handle a `ViewEffectiveParameterValues` request.

 |
| 

`params_vepv_yielded_values_total_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the number of Parameter Values yielded while iterating through timeseries data to build a `ViewEffectiveParameterValues` response.

 |
| 

`params_vepv_iteration_duration_seconds_bucket`

 | 

✓

 | 

✓

 | 

histogram

 | 

Measures the duration of time spent iterating through Parameter Values while building a `ViewEffectiveParameterValues` response.

 |