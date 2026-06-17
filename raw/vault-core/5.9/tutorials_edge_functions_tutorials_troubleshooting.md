---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/tutorials/edge_functions_tutorials/troubleshooting"
title: "How to troubleshoot Edge Functions"
scraped_at: "2026-06-17T05:04:11.821Z"
images: 0
---

# How to troubleshoot Edge Functions

You should use this guidance in conjunction with the following guidance to help you identify and diagnose issues, including the symptoms and the cause, and remediate them:

-   [Edge Functions API reference](/vault-core/5-9/EN/api/edge_functions_api)
    
-   [Edge Functions Streaming API reference](/vault-core/5-9/EN/api/edge_functions_api/edge_functions_streaming_api)
    
-   [Monitoring and Disaster Recovery](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/observability_and_disaster_recovery)
    

Should you experience any problems with Edge Functions, you should start by making a note of the symptoms and follow a process of elimination.

Some basic checks include:

-   Have you checked the availability of any services that are involved?
    
-   Have you received any notifications about any services that are involved?
    
-   Have you tested the availability of a given API?
    

If you made an execution request and it failed, have you checked if it returned an error code? See [Debugging execution failures](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/troubleshooting#debugging_execution_failures) for advice.

If you have identified any of the following issues, follow the advice to help identify the cause and remediation steps:

-   High demand - for example, executions are at a high throughput
    
-   Executions are failing and the execution outcome failure metric shows a high error rate
    
-   Some Edge Functions are not operating as you expect
    

## [](#debugging_execution_failures "Copy link to heading")Debugging execution failures

There may be several explanations behind an execution failing. In order to identify the extent of the issue, carry out the following steps:

1.  Check the error rate. Note whether the execution outcome failure metric is showing a high error rate.
    
2.  What is the `error_code` of concern? Has there been a recent increase or dominating fraction?
    
    -   `FUNCTION_RAISED_EXCEPTION`: The Edge Function has raised an exception. Try to identify which Edge Functions that you are experiencing problems with. Check the execution records to identify which Edge Functions are exhibiting failures.
        
    -   `INTERNAL`: For banks who host their own instance of Vault Core and Edge Functions, if the error code indicates an internal error, refer to the Execution Service application logs. The application logs can sometimes provide an indication of the source of error. If you are unable to determine the cause of the issue and resolve it, escalate it to Thought Machine for Edge Function support.
        
    -   `INVALID_REQUEST`: Request error. Identify the bug with the Edge Function client or the Edge Function code itself. Check the execution records to identify failures and the details.
        
    -   `INVALID_RESPONSE`: Response error. Identify the bug with the Edge Function client or the Edge Function code itself. Check the execution records to identify failures and the details.
        
    -   `DEADLINE_EXCEEDED`: The execution was terminated because the deadline was exceeded. Try the request again - if the issue continues, contact Thought Machine for support.
        
    -   `CANCELLED`: The execution was terminated due to the execution request being cancelled.
        
    

### [](#identifying_a_problematic_edge_function "Copy link to heading")Identifying a problematic Edge Function

1.  Examine examples of high latency in total execution time.
    
2.  If you have configured tracing, so that Vault Core sends traces that it receives for API requests to your collector, do the following:
    
    1.  View the associated traces
        
    2.  Examine the attributes attached to the Edge Function execution span
        
    3.  Identify the Edge Function ID and version tag - is there a common ID and version tag?
        
        The trace for HTTP requests is the value of `traceparent`, and comprises the `trace-id` and parent `span-id`.
        
        Example: `00-0ab1234567de89fg0123hi456j789012k-l3mn4o567890000-01`
        
        -   the trace-id is: `00-0ab1234567de89fg0123hi456j789012k`
            
        -   the parent span-id is: `l3mn4o567890000-01`
            
        
    

If you are experiencing issues with Edge Functions and unable to resolve them by following the advice in this or the related guidance, then contact Thought Machine support for Edge Functions.

## [](#debugging_high_demand "Copy link to heading")Debugging high demand

In this scenario, carry out the following checks to identify whether the Execution Engine is either backlogging (hitting capacity) or using more compute resources than expected.

Check:

-   Are executions at high throughput or high concurrency?
    
-   Is there a significant bottleneck, such as a recent increase or a dominating fraction?
    

### [](#checking_edge_functions "Copy link to heading")Checking Edge Functions

The next step is to identify whether there are any costly Edge Functions, such as those causing latency, timeouts, and errors.

1.  Note whether you have received any errors, such as `DEADLINE_EXCEEDED`.
    
2.  Check the [**Execution dashboard**](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/observability_and_disaster_recovery) to monitor the general health of executions.
    
3.  Make a request to the `ListEdgeFunctionExecutions` endpoint.
    

In order to investigate whether there is an issue with an individual Edge Function, you need to make a request to the `ListEdgeFunctionExecutions` endpoint. The endpoint returns information in the response about all executions, including the duration of the executions and those that resulted in an error.

You can refine your request and the result to return only errored executions according to a specific [error code](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/troubleshooting#debugging_execution_failures). You can then analyse the response for the predominant Edge Function IDs and versions, and note the included stack traces.

To do this, pass the `error_codes` parameter with a specific error code as the value in the request.

You can check the metrics time series to see if there is an increase in instances of a particular error code, and check according to a particular period of time.

#### [](#listedgefunctionexecutions_all "Copy link to heading")ListEdgeFunctionExecutions - all:

#### [](#listedgefunctionexecutions_filtered_by_a_specific_error_code_error_codes "Copy link to heading")ListEdgeFunctionExecutions - filtered by a specific error code (error\_codes):

This example curl request lists all Edge Function Executions filtered by the `FUNCTION_RAISED_EXCEPTION` error code:

You can find a list of error codes in this guide under [Debugging execution failures](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/troubleshooting#debugging_execution_failures) and the [Edge Functions API reference](/vault-core/5-9/EN/api/edge_functions_api). The guidance also provides information about making requests to Edge Functions endpoints.

### [](#checking_upstream_network_backends "Copy link to heading")Checking Upstream network (backends)

Identify possible causes, such as Smart Contracts (see Performance considerations for [CLv3](/vault-core/5-9/EN/reference/contracts/contracts_api_3xx/performance_considerations/) or [CLv4](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/performance_considerations/)). If you are unable to identify or resolve the issue, escalate to Thought Machine support for the upstream services that are involved.

### [](#checking_the_execution_engine_overhead "Copy link to heading")Checking the Execution engine (overhead)

If you are unable to identify or resolve the issue, escalate to Thought Machine support for Edge Functions.