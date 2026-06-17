---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/quick_start_guide"
title: "Quick start guide"
scraped_at: "2026-06-17T05:34:03.035Z"
images: 0
---

# Quick start guide

The Edge Functions SDK (Software Development Kit) helps developers to author Edge Functions, orchestrating multiple Vault Core API calls into a single synchronous API call.

Here, you can learn:

-   what you need to use Edge Functions
    
-   how to install the Edge Functions SDK and enable it in an IDE
    
-   about the code that underpins Edge Functions
    
-   how to create an Edge Function
    
-   how to execute an Edge Function
    

## [](#overview "Copy link to heading")Overview

Each Edge Function contains Python code defined as a single Python module which can interact with the Vault Core REST API. To execute an existing Edge Function, your application must make an HTTP call to the Edge Functions `execute` endpoint that specifies the target Edge Function. This triggers the execution of the corresponding Python code that contains the orchestration of HTTP calls to Vault Core.

The SDK consists of the `edge_api` and `vc_api` libraries. These two libraries contain all the functionality necessary to structure Edge Functions to call Vault Core endpoints in an intuitive way.

The Edge Function can use the SDK to call the specified public Vault Core APIs. The HTTP call to execute the Edge Function returns a response that includes the response of the Python execution.

In order to define an Edge Function, you need to provide a Python module with a module-level function that has an `entry_point` decorator. This function acts as the entry point for the execution of an Edge Function. Upon invocation, the `entry_point` of an Edge Function is provided with an `ExecutionContext` and `Request` objects.

lightbulb

If you are visiting this tutorial for the first time, take a look at [this diagram for an overview of key Edge Function resources](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function#key_edge_function_resources), and how Edge Functions and Edge Function Versions relate to each other.

## [](#prerequisites "Copy link to heading")Prerequisites

In order to write and execute Edge Functions, you are required to have the following:

-   Python 3.10 (all other Python versions are not supported)
    
-   The Edge Functions SDK, consisting of the `edge_api` and `vc_api` Python libraries
    
-   An IDE (integrated development environment) that is suitable for use with Python 3.10 or later
    
-   A command line interface (CLI) or client, such as Postman, to call HTTP endpoints
    
-   A method or utility for generating new UUIDs, such as uuidgen
    
-   A valid JSON Web Token (JWT) - `$JSON_WEB_TOKEN` represents this in the code snippets in the guidance
    
-   Some familiarity with Python
    

## [](#pydantic_objects_in_edge_functions "Copy link to heading")Pydantic objects in Edge Functions

Pydantic is a data validation library for Python. Thought Machine has leveraged the Pydantic library in the Edge Functions SDK to provide out-of-the-box strict data validation.

This includes using Pydantic’s `BaseModel` class to perform validation and serialisation, and the ability to derive JSON schema from models as with the request and response types.

For more information about the use of [Pydantic](https://docs.pydantic.dev/) objects, the functionality and examples, see the [How to write an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function/) tutorial.

## [](#install_the_edge_functions_sdk "Copy link to heading")Install the Edge Functions SDK

Developers have access to two client libraries to help ease and speed up the development process:

-   The `vc_api` library is specific to Vault Core and provides a way to interface with Vault Core’s public APIs
    
-   The `edge_api` library is independent from Vault Core API versions and exposes functions and classes required to author or test Edge Functions
    

For detailed instructions about installing the SDK, see the [Edge Functions installation guide](/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/installation_guide).

## [](#authentication "Copy link to heading")Authentication

The Edge Functions API uses the same API access control mechanism as the rest of Vault Core. It supports using either one of the following authentication methods:

-   JSON Web Tokens (JWTs)
    
-   Service Accounts
    

During an execution of an Edge Function, the token provided for the execution request is used for any calls to Vault Core. This means that authentication needs permissions to execute an Edge Function and for the interactions that the Python code performs.

The default OPA policy for the Edge Functions API is the same as the default policies for other Vault Core APIs. For OPA policies, see [Static Policies](/vault-core/5-8/EN/reference/policies/opa-policies). The policy management service manages any custom policies.

To learn more about authentication, such as giving Service Account token permissions to Edge Functions and retrieving a JWT token, see the [Edge Functions installation guide](/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/installation_guide).

## [](#create_an_edge_function "Copy link to heading")Create an Edge Function

You can design an Edge Function to orchestrate multiple API calls into a single trigger on its execution.

You can find an example Edge Function for opening an Account, which you can edit. Thought Machine recommends reading [How to write an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function) for further information on the constituent parts of an Edge Function. However, the following example provides you with a good starting point.

### [](#example_edge_function_open_an_account "Copy link to heading")Example Edge Function - open an Account

This example snippet represents an Edge Function that, on execution, orchestrates the necessary API calls to cover the following steps if it is successful.

1.  Create a new Customer record, including the customer email address.
    
2.  Create an Account.
    
3.  Return complete with new Account ID if successful. If the customer email address already exists, it returns an error.
    

### [](#creating_the_edge_function_resource "Copy link to heading")Creating the Edge Function resource

A curl request to create the above Edge Function is provided for convenience:

lightbulb

Make sure that you take a note of the Edge Function ID, as you will use it later in this tutorial.

## [](#execute_an_edge_function "Copy link to heading")Execute an Edge Function

You must execute an Edge Function via a POST request to the HTTP endpoint. The URL of the endpoint must contain the ID of the Edge Function that you want to execute. The system always executes the current version of the Edge Function by default.

In the event that the Edge Function execution fails, it is possible for you to [manually retry a failed Edge Function execution request](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_retry_an_execution) if you have included an idempotency key in the first Edge Function execution request.

Here, you can get a quick overview of the call to execute an Edge Function. For a more complete guide to executing Edge Functions and retrying calls, see [How to execute an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function) and [How to retry an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_retry_an_execution).

### [](#get_a_list_of_edge_functions_listedgefunctions "Copy link to heading")Get a list of Edge Functions: ListEdgeFunctions

Permission scopes: `edge_functions:read`, `edge_functions.edge_functions:read`

If you need to check the ID of the Edge Function that you want to execute, make a GET request to the Edge Functions endpoint to return a list of the Edge Functions and their IDs.

#### [](#example "Copy link to heading")Example:

### [](#execute_an_edge_function_executeedgefunction "Copy link to heading")Execute an Edge Function: ExecuteEdgeFunction

Permission scopes: `edge_functions:execute`, `edge_functions.edge_functions:execute`

chat\_bubble

The system always executes the current version of the Edge Function by default. It is possible for you to specify a particular version of an Edge Function to execute. For example, to test a particular version and validate its behaviour before making it the current version. However, Thought Machine does not recommend using this pattern to retain a specific version outside of such a use case. This is to ensure good Edge Function and execution management hygiene.

#### [](#example_2 "Copy link to heading")Example

#### [](#path_url_request_parameters "Copy link to heading")Path (URL) request parameters

  
| Name | Description | Example |
| --- | --- | --- |
| 
Edge Function ID

 | 

*Required*. Unique ID of the Edge Function resource that you want to execute.

 | 

`${function.id}:execute`

 |

#### [](#body_parameters "Copy link to heading")Body parameters

  
| Name | Description | Example |
| --- | --- | --- |
| 
Request

 | 

*Required*. The request payload, which must contain any parameters that the Edge Function code requires. The required parameters are determined when writing the Edge Function source code. For example, a `product_version_id`. Likewise, for opening a customer account, this may be a customer name, ID, or customer email address, for example.

 | 

`request`

 |
| 

Idempotency key

 | 

*Required*. Idempotency key, passed through to calls to Vault Core to ensure idempotency. Use it to deterministically create request IDs for requests made to Vault Core. For more information, see: [Recommendations for using an idempotency key](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function) and [How to write an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function)

 | 

`"idempotency_key"`

 |
| 

Edge Function Version tag

 | 

*Optional*. The version tag of the Edge Function Version (EFV) that you wish to execute. The default behaviour if you do not pass this parameter is to execute the EFV that is set as the `current_version` of the Edge Function. For more information, see: [Executions default to the current Edge Function version](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function#executions_default_to_the_current_edge_function_version)

 | 

`edge_function_version_tag`

 |

### [](#example_execution_request_open_a_new_loan_account "Copy link to heading")Example execution request - open a new Loan account

This example demonstrates how to execute an Edge Function using the pre-built template to open a new loan account for a customer of the bank.

It assumes that you have already created:

-   a loan product and have a loan product version ID ("4" in this example)
    
-   an internal account and have a loan deposit account ID ("3" in this example)
    

chat\_bubble

You can create an Edge Function to cover these operations.

Run the following command to open a new Account.

#### [](#example_command_with_idempotency_test "Copy link to heading")Example command with idempotency test

If you want to test the idempotency guarantee, pass your unique `idempotency_key` with the command. You should see the same result every time you run this command.

#### [](#example_response "Copy link to heading")Example response

chat\_bubble

For more information about executing and retrying Edge Functions, see [How to execute an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function) and [How to retry an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_retry_an_execution).

### [](#execution_resource "Copy link to heading")Execution resource

When you execute an Edge Function an Execution resource is created in the database. This Execution resource is assigned and identified using an Execution ID. This is the Execution ID that is also passed down to the `ExecutionContext`.

The Execution resource can contain the following fields:

 
| Name | Description |
| --- | --- |
| 
`id`

 | 

The unique identifer for the `EdgeFunctionExecution`

 |
| 

`edge_function_id`

 | 

The `EdgeFunction` ID of the `EdgeFunctionVersion` that was executed by the `EdgeFunctionExecution` request

 |
| 

`edge_function_version_tag`

 | 

The version tag of the `EdgeFunctionVersion` that was executed by the `EdgeFunctionExecution` request

 |
| 

`idempotency_key`

 | 

The idempotency key that you provided in the `EdgeFunctionExecution` request

 |
| 

`request`

 | 

The body of the request that you made

 |
| 

`response`

 | 

The response from the Edge Function is only populated if the request is successful

 |
| 

`error_code`

 | 

An error code is only populated if the request fails

 |
| 

`create_timestamp`

 | 

The time at which the execution was created

 |
| 

`update_timestamp`

 | 

The time at which the execution was updated; it is set to `create_timestamp` on creation

 |

The execution resource has `GET`, `LIST`, and `BATCH GET` endpoints, and you can use it to retrieve executions. The returned execution resource only has the response object if there was an error with the execution.

### [](#manual_retries "Copy link to heading")Manual retries

In the event that the Edge Function execution fails, it is possible for you to [manually retry a failed Edge Function execution request](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_retry_an_execution) using the idempotency key from the first Edge Function execution request.

## [](#handling_errors_and_customising_error_messages "Copy link to heading")Handling errors and customising error messages

When using VC API to make calls to Vault Core, if a request receives a response other than HTTP `200`, the library automatically converts it to an error response.

The error response is of a type that subclasses `Exception`. All exceptions are a subclass of type `vc_api.errors.HTTPError`. See the API Reference for a list of error codes.

To capture errors, you can introduce logging into your Edge Function code. You can then use your chosen logging platform to check logs and identify logs with the custom error codes defined by the Edge Function itself.

For more information, see:

-   [How to write an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function/) - learn about implementing error handling, logging, and customising error messages to your Edge Functions code
    
-   [Observability and disaster recovery](/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/observability_and_disaster_recovery) - learn about monitoring Edge Functions and advice about errors
    
-   [Troubleshooting Edge Functions](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/troubleshooting) - get advice on how to diagnose any issues with Edge Functions
    
-   [Edge Functions API reference](/vault-core/5-8/EN/api/edge_functions_api)
    

## [](#test_an_edge_function "Copy link to heading")Test an Edge Function

You must first [compose an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function) before you can test it. You can then run unit tests against it using the unit testing utilities that are available in the Edge Functions SDK.

When you are ready to test it in your pre-production environment, you must [upload the Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function) to make it available as a resource in your pre-production and production environments.

This allows you to execute the Edge Function by making a call to the `ExecuteEdgeFunction` endpoint, with the option to specify a particular Edge Function Version.

You can use a standard testing framework, such as the Python unittest module, pytest, to run tests for Edge Functions.

The Edge Functions package includes the `@patch_core_api_client` decorator. This provides a mock Core API client object that allows you to add mock responses and mock errors to specific mock requests made on the Core API Client.

To learn more about how to test Edge Functions, see the following tutorials:

-   [How to write a unit test for an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function) - learn about writing the tests yourself
    
-   [How to test an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_test_an_edge_function) - get an overview of the testing flow and advise, from develop your Edge Function code and tests locally to testing and deploying it in your environments