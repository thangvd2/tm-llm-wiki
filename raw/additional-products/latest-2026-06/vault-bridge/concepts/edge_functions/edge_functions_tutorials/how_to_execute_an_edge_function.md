---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function"
title: "How to execute an Edge Function"
scraped_at: "2026-06-17T15:53:51.541Z"
images: 0
---

# How to execute an Edge Function

## [](#overview_of_executing_edge_functions "Copy link to heading")Overview of executing Edge Functions

You can execute an Edge Function by making a `POST` HTTP request to the execution endpoint.

### [](#maintaining_idempotency "Copy link to heading")Maintaining idempotency

You should author an Edge Function in such a way that it maintains idempotency across retries, by using consistent request IDs in API requests that it makes. In combination with this, an execution request requires a unique idempotency key to facilitate generating request IDs, and for reuse across all of its retry attempts. See [Advice on implementing idempotency](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_retry_an_execution#advice_on_implementing_idempotency).

### [](#executions_default_to_the_active_edge_function_version "Copy link to heading")Executions default to the active Edge Function version

On executing an Edge Function, the default behaviour is to execute the active Edge Function Version, unless you request a specific version via `edge_function_version_tag`. It is possible for you to specify a particular version of an Edge Function to execute - for example, to test a particular version and validate its behaviour before making it the active version. However, Thought Machine recommends setting the correct Edge Function Version as the active version rather than specifying the version on a per-execution basis in a production environment. This makes it clear which version of the Edge Function is in use and reduces the risk of accidentally executing incorrect versions.

## [](#executing_an_edge_function "Copy link to heading")Executing an Edge Function

To execute an Edge Function, make a call to the [Execute EdgeFunction](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunctionExecution_ExecuteEdgeFunction) HTTP endpoint. The URL of the endpoint must contain the ID of the Edge Function that you want to execute.

lightbulb

If you need to check the ID of the Edge Function that you want to execute, see [List EdgeFunction](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_ListEdgeFunctionsResponse_ListEdgeFunctions).

A required - and important - parameter is the `idempotency_key`, which plays a key role in allowing you to safely retry Edge Functions. To learn more, see [Recommendations for using an idempotency key](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function) and [How to write an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function).

On executing an Edge Function, the default behaviour is to execute the active Edge Function Version, unless you request a specific version via `edge_function_version_tag`. For more information, see [Executions default to the active Edge Function version](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function#executions_default_to_the_active_edge_function_version).

### [](#example_request "Copy link to heading")Example request

### [](#response "Copy link to heading")Response

A response from the `EdgeFunctionExecution` request returns a [Execution resource](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function#execution_resource).

-   A successful execution contains the `response` from the Edge Function for the Python execution
    
-   An unsuccessful execution returns contains the `error` field containing an error, instead of a response that contains the `response` field
    

For a detailed reference of parameters and example responses, see the [Edge Functions API reference](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#edge_functions). For more information about the `ExecutionContext`, see [ExecutionContext in How to write an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function#executioncontext).

### [](#execution_resource "Copy link to heading")Execution resource

When you execute an Edge Function, it results in creating an Execution resource in the database. The service assigns a unique Execution ID to it - you cannot assign it via an execution request. You can use the Execution ID to identify this Execution resource, and it is this same Execution ID that is also passed down to the `ExecutionContext`.

To learn more about the Execution resource, see [Execute EdgeFunction’s response](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#responses_4).

The `response` field is only retained and available on successful executions if the [store\_successful\_response](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_ExecuteEdgeFunctionRequest) field was set to `true` in the initial [ExecuteEdgeFunction](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunctions_ExecuteEdgeFunction) request. [Triggered edge functions](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_create_a_trigger) have this always as true. The `response` is Always Available for Unsuccessful executions.

#### [](#get_a_list_of_edgefunctionexecution_resources "Copy link to heading")Get a list of EdgeFunctionExecution resources

You can retrieve a list of all Edge Function Execution resources by calling the [List EdgeFunctionExecution endpoint](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_ListEdgeFunctionExecutionsResponse_ListEdgeFunctionExecutions).

chat\_bubble

Fields like `request`, `response`, and `error` are omitted by default in List and Batch Get operations. To include these details in a list view, you must explicitly provide the [fields\_to\_include](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_ListEdgeFunctionExecutionsRequest) query parameter.

For example, to include error details, use `fields_to_include=INCLUDE_FIELD_ERROR`.

#### [](#get_an_execution_resource "Copy link to heading")Get an Execution resource

You can retrieve a specific Execution resource by passing the unique identifier for the `EdgeFunctionExecution` in the URL of a call to the [Get EdgeFunctionExecution endpoint](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunctionExecution_GetEdgeFunctionExecution).

#### [](#batch_get_execution_resources "Copy link to heading")Batch Get Execution resources

You can retrieve multiple specific Execution resources by their unique identifiers in a single request by calling the [BatchGetEdgeFunctionExecutions endpoint](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_BatchGetEdgeFunctionExecutionsResponse_BatchGetEdgeFunctionExecutions).

chat\_bubble

Fields like `request`, `response`, and `error` are omitted by default in List and Batch Get operations. To include these details, you must explicitly provide the [fields\_to\_include](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_BatchGetEdgeFunctionExecutionsRequest) query parameter.