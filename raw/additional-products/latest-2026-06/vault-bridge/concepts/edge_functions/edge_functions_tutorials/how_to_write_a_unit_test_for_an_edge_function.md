---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function"
title: "How to write a unit test for an Edge Function"
scraped_at: "2026-06-17T15:53:47.317Z"
images: 0
---

# How to write a unit test for an Edge Function

## [](#overview "Copy link to heading")Overview

The Edge Functions release package provides support for unit testing Edge Functions through two side-by-side mocking strategies:

-   **SDK mocking**: Use the `vc_api.test` module and the `MockCoreAPIClient` mock and the `patch_core_api_client()` decorator to mock high-level business logic and Vault Core API responses.
    
-   **HTTP mocking**: Use the `edge_api.test` module with the `MockHttpClient` mock with the `patch_http_clients()` decorator to mock HTTPClient calls for third-party integrations or other HTTP Requests.
    

Using these mocks helps ensure that developers who write tests do not mock responses with invalid shapes because the libraries enforce the correct API structures.

You can run these unit tests in a Python environment containing the Edge Functions SDK and Vault Core Library packages.

In this section, you can learn about:

-   Writing unit tests.
    
-   The `vc_api.test` module which provides `patch_core_api_client()` and `MockCoreAPIClient`.
    
-   The `edge_api.test` module which provides `patch_http_clients()` and `MockHTTPClient`.
    
-   Joint usage of multiple mocks in a single test.
    
-   Validating request parameters for API calls and raw HTTP requests.
    

You can use a standard testing framework, such as the Python `unittest` module or `pytest`, to run tests for Edge Functions. Refer to the documentation for your chosen testing framework for general testing advice. For the `unittest` documentation, see [Python unittest](https://docs.python.org/3/library/unittest.html#module-unittest).

For more information about the overall testing flow for Edge Functions, see [How to test an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_test_an_edge_function).

## [](#mockcoreapiclient_class "Copy link to heading")MockCoreAPIClient (class)

You can use the `MockCoreAPIClient` class as a replacement for the `vc_api.CoreAPIClient` in tests. It allows you to mock responses and errors from any of its methods.

In addition to implementing the same methods as the CoreAPIClient, it also implements:

-   `add_response` - sets up a response which returns from a method that you specify
    
-   `add_error` - like `add_response`, it sets up a response which returns from a method that you specify, and raises the provided exception when the method is called
    

Responses and Errors are returned according to first in, first out (FIFO) order. If a method is called that you have not setup, this raises an exception as a result.

### [](#acceptable_values "Copy link to heading")Acceptable values

-   `expected_params` parameter - both `add_response` and `add_error` accept `expected_params`, which you can use to assert on the arguments that you pass to the method call
    
-   `mock.ANY` - to allow for only asserting on specific fields of `expected_params`, you can use `mock.ANY` from the standard library in place of parameters or fields that you do not want to assert on
    

### [](#mitigating_exceptions "Copy link to heading")Mitigating exceptions

`add_response` and `add_error` raise an exception if they are called with any of the following:

-   a method that does not exist
    
-   a response that does not match the return type annotation of the mocked method (`add_response`)
    
-   an error that is not subclass of `VaultCoreError` (`add_error`)
    
-   `expected_params` containing a parameter that does not exist
    
-   `expected_params` containing a parameter that exists but does not match the type of the parameter of the mocked method
    
-   `expected_params` not containing all parameters of the mocked method
    

## [](#patch_core_api_client_function "Copy link to heading")patch\_core\_api\_client (function)

You can use the `patch_core_api_client` function to decorate a test method and monkey patch the CoreAPIClient with a `MockCoreAPIClient`.

To do this, pass in the mock instance to the test method as a parameter.

You can also use `patch_core_api_client` as a context manager.

## [](#mockhttpclient_class "Copy link to heading")MockHTTPClient (class)

You can use the `MockHTTPClient` class to mock low-level HTTP traffic within Edge Function unit tests. It implements the `HTTPClient` protocol and allows you to set up expected responses for specific HTTP requests.

The `MockHTTPClient` operates using a First-In-First-Out (FIFO) queue for expectations.

### [](#set_up_expectations "Copy link to heading")Set up expectations

Use the `add_response()` method to define expected HTTP traffic that returns a successful response.

Use the `add_error()` method to define expected HTTP traffic that raises an exception.

#### [](#parameter_matching_and_defaults "Copy link to heading")Parameter Matching and Defaults

Both `add_response()` and `add_error()` accept several optional keyword-only parameters to match against the incoming request. If any of these parameters are omitted, they default to `mock.ANY`, meaning they will match any value provided by the Edge Function.

 
| Parameter | Description |
| --- | --- |
| 
`method`

 | 

Expected HTTP method (e.g., `"GET"`, `"POST"`). Defaults to `mock.ANY`.

 |
| 

`path`

 | 

Expected URL path. Defaults to `mock.ANY`.

 |
| 

`query_params`

 | 

Expected dictionary of query parameters. Defaults to `mock.ANY`.

 |
| 

`json`

 | 

Expected JSON body in the request. Defaults to `mock.ANY`.

 |
| 

`body`

 | 

Expected raw request body (bytes). Mutually exclusive with `json`. Defaults to `mock.ANY`.

 |
| 

`headers`

 | 

Expected dictionary of request headers. Defaults to `mock.ANY`.

 |

If the Edge Function makes an HTTP request that does not match the expectations defined in these parameters, the client raises an `AssertionError`.

### [](#mockhttpresponse "Copy link to heading")MockHTTPResponse

The `MockHTTPResponse` class is a helper used to define the response returned by `add_response()`.

  
| Parameter | Type | Description |
| --- | --- | --- |
| 
`status_code`

 | 

`http.HTTPStatus`

 | 

The HTTP status code to return.

 |
| 

`json`

 | 

`dict`

 | 

A dictionary that is automatically encoded as a JSON string and used as the response body.

 |
| 

`body`

 | 

`bytes`

 | 

The raw response body. Mutually exclusive with `json`.

 |
| 

`headers`

 | 

`dict[str, str]`

 | 

Optional response headers.

 |

### [](#verification "Copy link to heading")Verification

The `assert_no_pending_calls()` function ensures that all expectations added to the client were exercised. If there are any unexercised expectations when this function is called, the test fails with an `AssertionError`.

## [](#patch_http_clients_function "Copy link to heading")patch\_http\_clients (function)

The `patch_http_clients()` function acts as a decorator for Edge Function unit tests. It intelligently injects `MockHTTPClient` instances into the decorated function based on type annotations.

### [](#usage "Copy link to heading")Usage

To use this decorator, annotate your test parameters with the `MockHTTPClient` type. The framework automatically instantiates and injects a mock for each annotated parameter.

### [](#stacking_decorators "Copy link to heading")Stacking decorators

You can use `patch_http_clients()` alongside other decorators such as `patch_core_api_client()` or `unittest.mock.patch()`.

If you stack multiple decorators, you must place `patch_http_clients()` as the **outermost** (top-most) decorator. This ensures that the signature-aware logic correctly identifies its parameters before other positional arguments are injected.

### [](#verification_2 "Copy link to heading")Verification

When the test function completes, the `patch_http_clients()` decorator automatically calls `assert_no_pending_calls()` on all injected `MockHTTPClient` instances. This ensures that every expected HTTP call was actually made by the Edge Function. If any expectations remain unexercised, the test fails.

## [](#quick_reference "Copy link to heading")Quick reference

The following examples provide a concise syntax reference for common mocking scenarios in Edge Function unit tests.

### [](#mocking_third_party_http_and_vault_core_api_side_by_side "Copy link to heading")Mocking third-party HTTP and Vault Core API side by side

Use this pattern when your Edge Function interacts with both an external service (via HTTP) and Vault Core.

### [](#mocking_vault_core_api_only_error_scenario "Copy link to heading")Mocking Vault Core API only (Error scenario)

Use the `@patch_core_api_client` decorator to inject a mock and test how your Edge Function handles Vault Core errors.

### [](#mocking_third_party_http_only_manual_initialization "Copy link to heading")Mocking third-party HTTP only (Manual Initialization)

You can also instantiate `MockHTTPClient` manually if you prefer not to use the decorator.

## [](#practical_example_testing_vault_core_api_calls "Copy link to heading")Practical example: Testing Vault Core API calls

This example demonstrates how to unit test an Edge Function that interacts with the Vault Core API.

### [](#the_edge_function "Copy link to heading")The Edge Function

In this example, the Edge Function attempts to create a Customer and then an Account for that Customer. it covers both success and error handling scenarios.

It covers the following scenarios:

-   **Error when preconditions for creating the Customer are not met:** If the preconditions for creating the Customer are not met, it raises an error with a user-defined error code and message.
    
-   **Success when the preconditions for creating the Customer are met:** If the code meets the preconditions, the Customer record is created. Then, the Edge Function proceeds to create an Account for the Customer, returning the Customer details by calling the `v2_create_account` method.
    
-   **Error when preconditions for creating the Account for a Customer are not met:** Similar to the error scenario for creating a Customer, if the preconditions for creating the Account are not met, it raises a user-defined error and message.
    
-   **Success when the preconditions for creating the Customer and an associated Account are met:** If both operations succeed, the Edge Function returns a Response object containing the Customer ID and Account ID for the newly-created Customer and Account.
    

### [](#practical_example_unit_test_for_an_edge_function_using_the_mocking_feature "Copy link to heading")Practical example unit test for an Edge Function using the mocking feature

The following example unit test code covers the happy path scenario (success) and two possible error scenarios.

## [](#practical_example_testing_third_party_integrations "Copy link to heading")Practical example: Testing third-party integrations

This example demonstrates how to unit test an Edge Function that interacts with both an external service via HTTP and the Vault Core API.

### [](#the_edge_function_2 "Copy link to heading")The Edge Function

In this example, the Edge Function performs the following actions:

-   Calls an external promotion service via HTTP to verify a promotion code.
    
-   If the promotion is valid, it attempts to create a Customer via the `v1_create_customer()` method.
    

### [](#the_unit_test "Copy link to heading")The Unit Test

The following unit test uses both `@patch_http_clients()` and `@vc_api.test.patch_core_api_client` to mock both dependencies side by side.