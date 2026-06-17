---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function"
title: "How to execute an Edge Function"
scraped_at: "2026-06-17T05:04:05.304Z"
images: 0
---

# How to execute an Edge Function

## [](#overview_of_executing_edge_functions "Copy link to heading")Overview of executing Edge Functions

You can execute an Edge Function by making a `POST` HTTP request to the execution endpoint.

### [](#maintaining_idempotency "Copy link to heading")Maintaining idempotency

You should author an Edge Function in such a way that it maintains idempotency across retries, by using consistent request IDs in API requests that it makes. In combination with this, an execution request requires a unique idempotency key to facilitate generating request IDs, and for reuse across all of its retry attempts. See [Advice on implementing idempotency](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_retry_an_execution#advice_on_implementing_idempotency).

### [](#executions_default_to_the_current_edge_function_version "Copy link to heading")Executions default to the current Edge Function version

On executing an Edge Function, the default behaviour is to execute the current Edge Function Version, unless you request a specific version via `edge_function_version_tag`. It is possible for you to specify a particular version of an Edge Function to execute - for example, to test a particular version and validate its behaviour before making it the current version. However, Thought Machine recommends setting the correct Edge Function Version as the current version rather than specifying the version on a per-execution basis in a production environment. This makes it clear which version of the Edge Function is in use and reduces the risk of accidentally executing incorrect versions.

## [](#executing_an_edge_function "Copy link to heading")Executing an Edge Function

To execute an Edge Function, make a call to the [Execute EdgeFunction](/vault-core/5-9/EN/api/edge_functions_api#_edge_functions_api_v1_EdgeFunctionExecution_ExecuteEdgeFunction) HTTP endpoint. The URL of the endpoint must contain the ID of the Edge Function that you want to execute.

lightbulb

If you need to check the ID of the Edge Function that you want to execute, see [List EdgeFunction](/vault-core/5-9/EN/api/edge_functions_api#_edge_functions_api_v1_ListEdgeFunctionsResponse_ListEdgeFunctions).

A required - and important - parameter is the `idempotency_key`, which plays a key role in allowing you to safely retry Edge Functions. To learn more, see [Recommendations for using an idempotency key](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function) and [How to write an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function).

On executing an Edge Function, the default behaviour is to execute the current Edge Function Version, unless you request a specific version via `edge_function_version_tag`. For more information, see [Executions default to the current Edge Function version](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function#executions_default_to_the_current_edge_function_version).

### [](#example_request "Copy link to heading")Example request

### [](#response "Copy link to heading")Response

A response from the `EdgeFunctionExecution` request returns a [Execution resource](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function#execution_resource).

-   A successful execution contains the `response` from the Edge Function for the Python execution
    
-   An unsuccessful execution returns contains the `error` field containing an error, instead of a response that contains the `response` field
    

For a detailed reference of parameters and example responses, see the [Edge Functions API reference](/vault-core/5-9/EN/api/edge_functions_api). For more information about the `ExecutionContext`, see [ExecutionContext in How to write an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function#executioncontext).

### [](#execution_resource "Copy link to heading")Execution resource

When you execute an Edge Function, it results in creating an Execution resource in the database. The service assigns a unique Execution ID to it - you cannot assign it via an execution request. You can use the Execution ID to identify this Execution resource, and it is this same Execution ID that is also passed down to the `ExecutionContext`.

To learn more about the Execution resource, see [Execute EdgeFunction’s response](/vault-core/5-9/EN/api/edge_functions_api#responses_4).

#### [](#get_a_list_of_edgefunctionexecution_resources "Copy link to heading")Get a list of EdgeFunctionExecution resources

You can retrieve a list of all Edge Function Execution resources by calling the [List EdgeFunctionExecution endpoint](/vault-core/5-9/EN/api/edge_functions_api#_edge_functions_api_v1_ListEdgeFunctionExecutionsResponse_ListEdgeFunctionExecutions).

chat\_bubble

The `response` field of an `Execution` is not populated in list retrieval responses, as it is not retained following the execution itself.

#### [](#get_an_execution_resource "Copy link to heading")Get an Execution resource

You can retrieve a specific Execution resource by passing the unique identifier for the `EdgeFunctionExecution` in the URL of a call to the [Get EdgeFunctionExecution endpoint](/vault-core/5-9/EN/api/edge_functions_api#_edge_functions_api_v1_EdgeFunctionExecution_GetEdgeFunctionExecution).

chat\_bubble

The `response` field of an `Execution` is not populated in get responses, as it is not retained following the execution itself.