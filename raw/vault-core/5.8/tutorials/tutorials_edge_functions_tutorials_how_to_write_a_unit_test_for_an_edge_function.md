---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function"
title: "How to write a unit test for an Edge Function"
scraped_at: "2026-06-16T15:27:40.679Z"
images: 0
---

# How to write a unit test for an Edge Function

## [](#overview "Copy link to heading")Overview

The Edge Functions release package comes with support for unit testing of Edge Functions. The Vault Core library (VC API) provides functionality through the `vc_api.test` module that allows you to mock API responses within your unit tests. Using the VC API library is a good way to help prevent developers who write tests from mocking responses with invalid shapes from Vault Core APIs.

You can run these unit tests in a Python environment containing the Edge Functions SDK and Vault Core Library packages.

Here, you can learn about:

-   writing unit tests
    
-   the `vc_api.test` module, `patch_core_api_client` function
    
-   the `MockCoreAPIClient` that the decorator provides, and how to add responses or errors to requests to the client
    
-   validating request parameters for API calls and API function tests for Edge Functions
    

You can use a standard testing framework, such as the Python unittest module, pytest, or a different suitable BUILD system to run tests for Edge Functions. Refer to the documentation for the testing framework that you have used for general advice around testing. For the unittest documentation, see [Python unittest](https://docs.python.org/3/library/unittest.html#module-unittest).

For more information about the overall testing flow for Edge Functions, see [How to test an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_test_an_edge_function).

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

## [](#example_test_file "Copy link to heading")Example test file

The following example is a unit test file for an Edge Function that, when executed, creates a Customer.

As you can see, it implements `mock.ANY` on the Error exception object `”message”` field.

## [](#practical_examples "Copy link to heading")Practical examples

### [](#practical_example_of_an_edge_function_as_the_subject_of_a_test_using_the_mocking_feature "Copy link to heading")Practical example of an Edge Function as the subject of a test using the mocking feature

In this example, the Edge Function first attempts to create a Customer via the `v1_create_customer` method.

It covers the following scenarios:

-   **Error when preconditions for creating the Customer are not met:** If the preconditions for creating the Customer are not met, it raises an error with a user-defined error code and message.
    
-   **Success when the preconditions for creating the Customer are met:** If the code meets the preconditions, the Customer record is created. Then, the Edge Function proceeds to create an Account for the Customer, returning the Customer details by calling the `v2_create_account` method.
    
-   **Error when preconditions for creating the Account for a Customer are not met:** Similar to the error scenario for creating a Customer, if the preconditions for creating the Account are not met, it raises a user-defined error and message.
    
-   **Success when the preconditions for creating the Customer and an associated Account are met:** If both operations succeed, the Edge Function returns a Response object containing the Customer ID and Account ID for the newly-created Customer and Account.
    

### [](#practical_example_unit_test_for_an_edge_function_using_the_mocking_feature "Copy link to heading")Practical example unit test for an Edge Function using the mocking feature

The following example unit test code covers the happy path scenario (success) and two possible error scenarios.