---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_manually_retry_triggered_operations"
title: "How to manually bulk retry Edge Function Trigger Operations"
scraped_at: "2026-06-16T15:27:49.180Z"
images: 0
---

# How to manually bulk retry Edge Function Trigger Operations

## [](#overview "Copy link to heading")Overview

Edge Function Trigger Operations can sometimes enter a `FAILED` or `FAILED_TRANSIENT` state due to various reasons. Vault Core provides a mechanism to manually request a retry for these operations multiple times, by calling the [BulkRetryEdgeFunctionTriggerOperations](/vault-core/5-8/EN/api/edge_functions_api#_edge_functions_api_v1_BulkRetryEdgeFunctionTriggerOperationsResponse_BulkRetryEdgeFunctionTriggerOperations) endpoint.

Each retry request is idempotent, as long as you use a unique `request_id` for the specific operation. The `request_id` acts as an idempotency key, meaning that sending the same request multiple times will not result in duplicate retries for that operation.

## [](#prerequisites "Copy link to heading")Prerequisites

Before attempting to retry an operation, ensure the following applies for each `EdgeFunctionTriggerOperation` you want to retry:

1.  **Operation status**: The Trigger Operation you want to retry must be in either a `FAILED` or `FAILED_TRANSIENT` status. Retrying operations in any other state (such as `NOT_STARTED`, `IN_PROGRESS`, `SUCCEEDED`) will result in an error.
    
2.  **Operation ID**: You need the unique identifier (`id`) of the Trigger Operation to be retried. Use the [ListEdgeFunctionTriggerOperations](/vault-core/5-8/EN/api/edge_functions_api#_edge_functions_api_v1_ListEdgeFunctionTriggerOperationsResponse_ListEdgeFunctionTriggerOperations) endpoint to fetch its `id`.
    
3.  **Request ID**: You must provide a unique `request_id` for each retry attempt. This request ID is used for idempotency, ensuring that if you send the same retry request multiple times, the operation is only retried once for that specific `request_id`.
    

## [](#finding_trigger_operations_to_retry "Copy link to heading")Finding Trigger Operations to retry

You can find the failed Trigger Operations in one of the two ways:

1.  Submitting a search query to the [ListEdgeFunctionTriggerOperations](/vault-core/5-8/EN/api/edge_functions_api#_edge_functions_api_v1_ListEdgeFunctionTriggerOperationsResponse_ListEdgeFunctionTriggerOperations) endpoint, and using a search filter on the `status` field to find `FAILED` or `FAILED_TRANSIENT` status operations.
    
2.  Monitoring the public execution topic and filtering for messages containing the following fields and values:
    
    -   `edge_function_trigger_operation_id`: is present, not `NULL`
        
    -   `status`: `FAILED` or `FAILED_TRANSIENT`
        
    

## [](#retrying_trigger_operations "Copy link to heading")Retrying Trigger Operations

To manually retry one or more trigger operations, create and send an HTTP POST request to the `/v1/edge-function-trigger-operations:bulkRetry` endpoint.

### [](#1_construct_the_request_payload "Copy link to heading")1\. Construct the request payload

The request payload should be a JSON object conforming to the request for `BulkRetryEdgeFunctionTriggerOperations` endpoint.

The payload body of the HTTP POST request contains a list of `RetryEdgeFunctionTriggerOperationRequest` objects, each one specifying an operation to retry:

#### [](#fields "Copy link to heading")Fields:

  
| Name | Description | Example |
| --- | --- | --- |
| 
`requests`

 | 

An array of `RetryEdgeFunctionTriggerOperationRequest` objects. Each object in this array represents a single retry operation request. Required.

 | 

N/A

 |
| 

`requests. **request_id**` *str*

 | 

A unique identifier for a specific retry attempt. This ensures idempotency. Use a Universally Unique Identifier, or a prefix string combined with a unique identifier. Required.

**Notes:**

-   Must be unique across all retry attempts for different operations. If you reuse a `request_id` that was previously used for a different `id`, an error will occur.
    
-   Must not be duplicated within the same `BulkRetryEdgeFunctionTriggerOperationsRequest` object.
    





 | 

`"56726f97-5de9-490a-acf6-0e05f6d1a618"` or `"my-issue-123345-123"`

 |
| 

`requests. **id**` *str*

 | 

The ID of the EdgeFunctionTriggerOperation resource to be retried. Required.

**Notes:**

-   Must be a valid existing Trigger Operation ID.
    
-   Must not be duplicated within the same `BulkRetryEdgeFunctionTriggerOperationsRequest` object.
    





 | 

`"86726f97-6de9-490a-acf6-1f05b5d1a532"`

 |

### [](#2_send_the_api_request "Copy link to heading")2\. Send the API request

Make an HTTP POST request to the following [BulkRetryEdgeFunctionTriggerOperations](/vault-core/5-8/EN/api/edge_functions_api#_edge_functions_api_v1_BulkRetryEdgeFunctionTriggerOperationsResponse_BulkRetryEdgeFunctionTriggerOperations) endpoint:

Include the JSON payload constructed in the first step as the request body. Ensure you have the necessary authentication and authorisation permissions (for example, `edge_functions:write` or `edge_functions.edge_function_trigger_operations:write` permission scopes).

#### [](#example_using_curl "Copy link to heading")Example using cURL:

### [](#3_get_the_api_response "Copy link to heading")3\. Get the API response

The API will respond with a `BulkRetryEdgeFunctionTriggerOperationsResponse` message.

If an operation retry request has failed, the response returns an errors map. This contains entries for all the operations that could not be successfully initiated, including details of the `request_id` and the associated errors that occurred:

If a retry request is successful, the operation’s `request_id` will not appear in the errors map. If all requested retries are successfully initiated, an empty errors map is returned:

### [](#4_successful_retry_initiation "Copy link to heading")4\. Successful retry initiation

If a retry for a Trigger Operation is successfully initiated:

1.  The target ``EdgeFunctionTriggerOperation’s status is updated to `NOT_STARTED``.
    
2.  Its `retry_count` is also incremented by 1.
    
3.  Any existing error message on the operation is cleared.
    
4.  The operation is queued for retry.
    
5.  The operation is picked up by the system asynchronously for execution, and a new execution record is generated.
    
6.  A [public streaming execution API event](/vault-core/5-8/EN/api/edge_functions_api/edge_functions_streaming_api#edgefunctionexecutionevent) happens post-execution.
    

## [](#potential_errors_and_troubleshooting "Copy link to heading")Potential errors and troubleshooting

There are several common reasons why a retry request might fail. By checking the errors map in the API response, you can identify which specific operations failed on retry request, as well as the reason for the failure:

   
| Error | Violation type/Error code | Reason | Description in error message |
| --- | --- | --- | --- |
| 
Non-retryable status

 | 

`NON_RETRYABLE_TRIGGER_OPERATION_STATUS`

 | 

The `EdgeFunctionTriggerOperation` identified by id is not in `FAILED` or `FAILED_TRANSIENT` state.

 | 

The error detail will include the current status of the operation.

 |
| 

Invalid `request_id` (idempotency check failure)

 | 

`badrequest.InvalidValue` for field `request_id`.

 | 

The provided `request_id` has already been used with a different `id` (operation ID) in the previous requests.

 | 

"Field \[request\_id\] has already been used".

 |
| 

Operation not found

 | 

`NOT_FOUND` (or similar, based on `apierrors.NewNotFound`)

 | 

The `EdgeFunctionTriggerOperation` specified by request ID does not exist.

 | 

"Edge function trigger operation not found for given id".

 |
| 

Missing fields in text

 | 

`badrequest.RequiredField`

 | 

Requests array is empty, or `request_id` or `id` is missing within an individual `RetryEdgeFunctionTriggerOperationRequest` object.

 | 

Identifies the missing field, such as "requests.id".

 |
| 

Duplicate `request_id` or `id` in the same Bulk Request

 | 

`badrequest.DuplicateValue`

 | 

The same `request_id` or `id` was provided multiple times within the requests array of a single `BulkRetryEdgeFunctionTriggerOperationsRequest`.

 | 

Identifies the duplicate field, such as "requests.request\_id".

 |
| 

Internal server or database errors

 | 

N/A

 | 

An unexpected error occurred while processing the request, such as database connectivity issues.

 | 

A more generic error message, such as "Error retrying trigger operation".

 |