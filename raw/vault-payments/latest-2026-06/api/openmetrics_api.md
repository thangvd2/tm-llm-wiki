---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/openmetrics_api"
title: "OpenMetrics"
scraped_at: "2026-06-17T15:49:29.290Z"
images: 0
---

# OpenMetrics

OpenMetrics allows you to ingest Vault Payments metrics into your own monitoring stack. This will enable you to use the metrics to build custom dashboards and alerts.

## [](#using_openmetrics "Copy link to heading")Using OpenMetrics

### [](#metrics_endpoint "Copy link to heading")Metrics Endpoint

`[https://sandbox.payments.tmachine.io/api/v1/openmetrics/metrics](https://sandbox.payments.tmachine.io/api/v1/openmetrics/metrics)`

Vault Payments metrics can be accessed via the metrics endpoint. This provides read access to the Prometheus Time Series Database (TSDB) in OpenMetrics text format.

### [](#federate_endpoint "Copy link to heading")Federate Endpoint

`[https://sandbox.payments.tmachine.io/api/v1/openmetrics/federate](https://sandbox.payments.tmachine.io/api/v1/openmetrics/federate)`

Vault Payments offers a fedarate enndpoint. This allows metrics to be [federated](https://prometheus.io/docs/prometheus/latest/federation) from the Vault Payments Prometheus server.

### [](#retention "Copy link to heading")Retention

Time series are collected and stored in Vault Payments for a period of 30 days, and are updated every 30 seconds.

### [](#authentication "Copy link to heading")Authentication

The OpenMetrics endpoints require [authentication](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#authentication) to scrape successfully. An example configuration has been provided below that can be added to your Prometheus instance to scrape from the Vault Payments OpenMetrics `metrics` endpoint:

## [](#available_metrics "Copy link to heading")Available Metrics

Multiple metric types are available through the Vault Payments OpenMetrics endpoint.

Metric Types:

-   Counter - cumulative and represents a single monotonically increasing counter. Its value only increases or resets to zero on restart. For example, the number of requests.
    
-   Gauge - represents a single numerical value that can arbitrarily go up and down.
    
-   Histogram - samples observations, such as the duration of a delay and time taken to complete a task, and counts them in buckets.
    

### [](#labels "Copy link to heading")Labels

All metrics include the following labels, some metrics will include additional labels:

-   `tenant`: Your tenant ID.
    
-   `instance`: The endpoint the metrics were scraped from e.g. `sandbox.payments.tmachine.io`.
    

### [](#metrics "Copy link to heading")Metrics

   
| Name | Type | Description | Additional Labels |
| --- | --- | --- | --- |
| 
`kafka_partition_lag`

 | 

gauge

 | 

The number of messages there are to consume from any given topic or consumer group.

 | 

`group`  
`topic`

 |
| 

`instructions_processed_total`

 | 

counter

 | 

The number of instructions processed to a final status (`COMPLETED` or `CANCELLED`).

 | 

`instruction_flow`  
`instruction_flow_version`  
`outcome`  
`payment_system`  
`status`  
`direction`  
`has_issues`  
`type`

 |
| 

`instructions_errored_total`

 | 

counter

 | 

The number of instructions that have transitioned to an `ERRORED` status. This does not decrement when an instruction transitions away from `ERRORED`; therefore, does not represent the current number of instructions errored in the system.

 | 

`instruction_flow`  
`instruction_flow_version`  
`payment_system`  
`direction`  
`type`

 |
| 

`integration_calls_total`

 | 

counter

 | 

The number of executed integration requests.

 | 

`integration`  
`integration_version`  
`outcome`

 |
| 

`integration_calls_duration_seconds_bucket`

 | 

histogram

 | 

The time (in seconds) taken to make a request to an integration.

 | 

`integration`  
`integration_version`  
`outcome`

 |
| 

`integration_oauth_token_fetch_duration_seconds`

 | 

histogram

 | 

The time (in seconds) to retrieve an integration OAuth2 token.

 | 

`integration`  
`integration_version`  
`outcome`  
`http_status_code`

 |
| 

`swift_agi_rest_api_poll_total`

 | 

counter

 | 

The number of polls the Swift AGI has performed.

 | 

`integration`  
`integration_version`  
`outcome`

 |
| 

`swift_agi_poll_duration_seconds_bucket`

 | 

histogram

 | 

The request time (in seconds) for polls from the Swift AGI gateway to the Swift AGI. The SWIFT AGI will time out after 5 seconds.

 | 

`http_status_code`  
`outcome`  
`scheme`

 |
| 

`swift_agi_rest_api_poll_error_response_total`

 | 

counter

 | 

The number of ErrorResponses received from polling by the SWIFT AGI Gateway.

 | 

`error_code`  
`scheme`

 |