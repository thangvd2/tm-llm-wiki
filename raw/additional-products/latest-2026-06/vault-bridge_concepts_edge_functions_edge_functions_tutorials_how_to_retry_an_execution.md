---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_retry_an_execution"
title: "How to retry an Edge Function Execution"
scraped_at: "2026-06-17T05:15:16.203Z"
images: 0
---

# How to retry an Edge Function Execution

## [](#overview "Copy link to heading")Overview

In the event that the Edge Function execution fails, it is possible to retry a failed Edge Function execution, while still retaining idempotency.

If you decide to retry a failed execution, you must make sure that you provide the same `idempotency_key` in the retry request as you provided in the original request to execute the Edge Function. Make sure that you do not change the request, including the payload, otherwise the request could fail or have unintended behaviour.

This allows you to attempt to resend an execution request while ensuring that this only triggers the execution of the Edge Function logic once.

There are a few considerations when implementing idempotency and ensuring you make and retry requests correctly. See [Advice on implementing idempotency](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function#advice_on_implementing_idempotency) for more information.

### [](#example_scenario "Copy link to heading")Example scenario

Take an Edge Function that orchestrates calls to open an account.

If the execution request fails, for example due to a temporary connection issue, then as long as you pass the same `idempotency_key` in the request, you can safely retry the same call to the [ExecuteEdgeFunction](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function#execute_an_edge_function) endpoint several times if necessary.

Any successful calls only result in the Edge Function being executed one - for example, it would not result in opening multiple new accounts.

## [](#checks_and_possible_reasons_for_failed_edge_function_execution_and_retry_requests "Copy link to heading")Checks and possible reasons for failed Edge Function execution and retry requests

There are a number of possible reasons that a request fails when attempting to execute an Edge Function or retry the original execution request.

In order to investigate and mitigate a failure, run through the following checks.

### [](#when_the_original_execution_request_fails "Copy link to heading")When the original execution request fails

Check: What idempotency key did you pass in the original request?

Reason: The `idempotency_key` is required for requests to the `ExecutionEdgeFunction` endpoint and must be unique to the original request.

### [](#when_retrying_the_execution_request_fails "Copy link to heading")When retrying the execution request fails

Check: Does the retry request contain the same idempotency key, passed as the request ID in the original execution request? If not, retry the request again after making sure that the idempotency key is passed in the `idempotency_key` field.

Reason: The `idempotency_key` is required for requests to the `ExecutionEdgeFunction` endpoint and must be unique to the original request.

Check: Did you change any data when attempting to retry the request?

Reason: Changing any aspect of the execution request means that the request is not the same and can fail as a result. For example, if the Edge Function ID you have requested to execute is the same, but you have changed something else, such as the payload or from specifying or not specifying a particular Edge Function Version ID/tag.

If you need to change the request, you must create a new execution request and use a new idempotency key.

### [](#error_message_execution_was_terminated_due_to_exceeding_its_deadline "Copy link to heading")Error message: "Execution was terminated due to exceeding its deadline"

Reason: The Edge Function execution ran for too long, and the service terminated it.

The response from the API returns the execution information for the Edge Function - this includes an `"error"` object instead of `"response"`.

When executing Edge Functions, Thought Machine expects the function to complete within 20 seconds.

This is because the current default setting for the overall execution request is 25 seconds, but 5 seconds is reserved to record the failed execution and return the error response.

If the execution exceeds this timeframe, the request fails and the response contains the following error information:

Error message:

Error code:

Example:

Actions:

-   Check the Edge Function source code to check that it is not performing more computational work than necessary, too many requests, or if it could have entered an infinite loop.
    
-   To manually retry an execution request, provide the same request parameters - including the same `idempotency_key` value - as the original request when you make the request again.
    

## [](#advice_on_implementing_idempotency "Copy link to heading")Advice on implementing idempotency

chat\_bubble

Terminology:

-   Request ID: Required for most mutation requests to Vault Core in order to maintain idempotency between retries of a request.
    
-   Idempotency key: Required parameter for an Edge Function execution request that provides a way for an Edge Function to form deterministic *request IDs* for requests to Vault Core on executing the Edge Function.
    
    While idempotency keys are often shown in examples as UUIDs in this documentation, there is nothing preventing you from using other strings that are generated uniquely.
    

### [](#uniqueness_of_idempotency_keys_and_request_ids "Copy link to heading")Uniqueness of idempotency keys and request IDs

#### [](#when_to_reuse_idempotency_keys_and_request_ids "Copy link to heading")When to reuse idempotency keys and request IDs

Reusing the same request ID for a retried request against Vault Core API endpoints helps to guarantee that no undesired mutations occur - for example, creating a duplicate resource. The `idempotency_key` must be unique for the initial execution request; however, if the request fails then you must use the same `idempotency_key` if and when retrying the request.

The following two points are key and act in combination with generating unique and deterministic request IDs for retried executions:

-   Within the Edge Function source code, use the `idempotency_key` to deterministically generate a `request_id` for each mutating request made to the Vault Core API
    
-   When retrying an execution request, use the same parameters and the same `idempotency_key`
    

#### [](#when_not_to_reuse_idempotency_keys_and_request_ids "Copy link to heading")When NOT to reuse idempotency keys and request IDs

Requests that are not related to each other must have distinct idempotency keys and request ID(s).

Even if you are retrying a request but using different parameters, you must use a new idempotency key and request ID(s). Otherwise, the request can mistakenly reuse a resource that the previous attempt created when using different parameters, or Vault Core might reject it because it is a conflicting request.

### [](#ensuring_that_the_idempotency_key_is_deterministic "Copy link to heading")Ensuring that the idempotency key is deterministic

You should ensure that the `request_id` that you use in a request to Vault Core is deterministically generated from the `idempotency_key`. The following are some recommendations for how to generate these request IDs:

-   If only one mutation per type of Vault Core API resource, for example Account, Customer or another type, is being mutated as part of an execution, it is *acceptable* to use the `idempotency_key` for the `request_id`
    
-   If multiple mutations occur against the same type of Vault Core API resource, then it is *required* that each mutation request have its own `request_id`. For information about how to implement this, see: [Deterministically generating request IDs](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_retry_an_execution#deterministically_generating_request_ids)
    

### [](#stability_of_get_data "Copy link to heading")Stability of GET data

For Vault Core API’s read-only endpoints - that is, those that support a `GET` method, you will receive the latest data, which might be different from the data that the original execution’s request received. This can be a problem if a value received from a `GET` response changes between retries and is used in parameters for a mutating request against the Vault Core API.

If you do not want this to occur then you (as an Edge Functions author) should use point-in-time fetching where available. For example:

-   Using [List LedgerBalances](/vault-core/latest/EN/api/core_api#_core_api_v1_ledger_balances_ListLedgerBalancesResponse_ListLedgerBalances) to request a balance at a specific `ledger_timestamp` that remains consistent between retries
    
-   Using [List PostingInstructionBatches](/vault-core/latest/EN/api/core_api#_core_api_v1_posting_instruction_batches_ListPostingInstructionBatchesResponse_ListPostingInstructionBatches) with specific timestamps for `start_time` and `end_time` that remain consistent between retries
    

### [](#use_different_idempotency_keys_for_different_requests "Copy link to heading")Use different idempotency keys for different requests

You MUST use different idempotency keys for different requests. Reusing the same idempotency key, even if the key is still valid, could result in failed requests and could result in activity that you did not intend.

### [](#implementing_idempotent_executions "Copy link to heading")Implementing idempotent executions

In order for executions to be idempotent, Vault Core API calls made from Edge Functions must use a consistent `request_id`, for any given `idempotency_key`. The `idempotency_key` is provided as an attribute of the `ExecutionContext`.

#### [](#deterministically_generating_request_ids "Copy link to heading")Deterministically generating request IDs

Thought Machine recommends that you create a `request_id` that is the result of appending a unique suffix to the `idempotency_key` that is specific to the context of the request being made. This is to ensure that a `request_id` is unique within this context and is still deterministically generated from the `idempotency_key`.

For example, if you need to make three Vault Core API requests to mutate accounts:

1.  Create account A.
    
2.  Update account B.
    
3.  Update account C.
    

You are required to deterministically generate a separate request ID for *each request*. This is so that if you were to retry the execution, which should be with the same `idempotency_key`, each request to Vault Core generates those same request IDs. In this case, you could append a unique suffix in each case in the Edge Function’s source code.

For example:

1.  `request_id_a = idempotency_key + "-create-account-a"`
    
2.  `request_id_b = idempotency_key + "-update-account-b"`
    
3.  `request_id_c = idempotency_key + "-update-account-c"`
    

Therefore, if the `idempotency_key` was `a05ee961-c863-4ca6-aaea-f1af0b1d0f56`, then the three request IDs would be as follows:

1.  `"a05ee961-c863-4ca6-aaea-f1af0b1d0f56-create-account-a"`
    
2.  `"a05ee961-c863-4ca6-aaea-f1af0b1d0f56-update-account-b"`
    
3.  `"a05ee961-c863-4ca6-aaea-f1af0b1d0f56-update-account-c"`
    

The suffix may be as verbose as the above, or more concise, provided that it both:

-   meets the [uniqueness criteria outlined above](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_retry_an_execution#uniqueness_of_idempotency_keys_and_request_ids)
    
-   is not so long that it exceeds the `request_id` length limit, which is often 256 or 512 characters. Refer to the Vault Core API reference documentation for the relevant request endpoint to learn its specific limit
    

chat\_bubble

An alternative to appending a suffix is to use [version-5 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Versions_3_and_5_\(namespace_name-based\)), where the `idempotency_key` must be a UUID as a precondition of executing the Edge Function.

You can achieve this with Python’s [`uuid.uuid5`](https://docs.python.org/3/library/uuid.html#uuid.uuid5) function with the `idempotency_key` as the `namespace` and a unique constant, for example `"create-account-a"`, per request as the name.

This approach does have the upside of fulfilling both determinism and also keeping concise request IDs.

However, it does have the downside of producing opaque \`request\_id\`s in Vault Core API requests, which you may find challenging to trace back to an execution when auditing the purpose and origin of requests later.

## [](#idempotency_guarantees "Copy link to heading")Idempotency guarantees

### [](#idempotency_guarantees_2 "Copy link to heading")Idempotency guarantees

All endpoints in the [Vault Core API](/vault-core/latest/EN/api/core_api/) that mutate resources provide idempotency guarantees - that is: those that support `POST`/`PUT`/`DELETE` methods. It is important to make appropriate use of repeating the same parameters and the same request IDs for a retried execution that calls these endpoints.

### [](#related_guides "Copy link to heading")Related guides

For more information about writing, executing, and troubleshooting Edge Functions, see:

-   [How to write an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function)
    
-   [How to execute an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_execute_an_edge_function)
    
-   [How to troubleshoot Edge Functions](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/troubleshooting)
    
-   [Edge Functions SDK reference](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/sdk_reference)
    
-   [Edge Functions API reference](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#edge_functions)