---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function"
title: "How to upload an Edge Function"
scraped_at: "2026-06-17T05:35:28.646Z"
images: 0
---

# How to upload an Edge Function

## [](#overview_of_uploading_edge_functions "Copy link to heading")Overview of uploading Edge Functions

In order to use a new Edge Function or update an existing Edge Function’s source code, you must upload it to make it available as a resource in the form of an Edge Function Version.

There are two ways that you can upload an Edge Function, depending on your use case:

-   By making a request to the Edge Functions API
    
-   By using the Configuration Layer Utility (CLU) tool
    

*Uploading* Edge Function source code always means that you create a new Edge Function Version that contains the source code.

However, there are three ways of *creating* an Edge Function Version.

  
| Use case | Description | Upload method |
| --- | --- | --- |
| 
1 - Create a new Edge Function

 | 

In this case, you also create its initial Edge Function Version because an Edge Function requires an Edge Function Version.

 | 

CLU and API

 |
| 

2 - Update an existing Edge Function with a new Edge Function Version as the current version

 | 

In this case, you want to supply new source code to the EF and therefore must create a new Edge Function Version.

 | 

API only

 |
| 

3 - Update an existing Edge Function with a new Edge Function Version but do not set it as the current version

 | 

In this case, you want to supply new source code to the EF and therefore must create a new Edge Function Version. However, you do not want to set the new Edge Function Version as the current version. This could be because you wish to test it and without setting it as the current version.

 | 

API only

 |

Here, you will learn how to upload an Edge Function and what you should consider about testing an Edge Function version before making it the current version.

lightbulb

For a detailed explanation about writing the source code, see [How to write an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function).

## [](#information_before_you_start "Copy link to heading")Information before you start

Before you start, familiarise yourself with the following topics to help your understanding around creating, updating, testing, and managing Edge Functions and their Edge Function Versions.

This includes:

-   Specifying the Edge Function status as activate or inactive
    
-   Specifying an Edge Function Version as the current version
    
-   Considerations for testing and using an Edge Function after uploading it
    

### [](#specifying_the_edge_function_status_as_activate_or_inactive "Copy link to heading")Specifying the Edge Function status as activate or inactive

The default status of an Edge Function is active on creation it unless you specify otherwise.

There are two main scenarios:

1.  Defining the Edge Function status on creation
    
    1.  Active status - this is the default if you do not provide the `status` field in the creation request, but you can also explicitly set it to `EDGE_FUNCTION_STATUS_ACTIVE`. However, if you want it to be active on creation then you do not have to set the `status` field.
        
    2.  Inactive status - if you do not want the Edge Function to be active on creation, then you must set its `status` field to `EDGE_FUNCTION_STATUS_INACTIVE`.
        
    
2.  Updating an existing Edge Function status - for example, if you want to change the status of an existing Edge Function from inactive to active. In order to change the status, specify the `status` field and `update_mask` in the update Edge Function request. For a guide on how to update an Edge Function including its status, see: [How to update an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_update_an_edge_function)
    

chat\_bubble

The status of the Edge Function applies to the execution of ALL of its Edge Function Versions, whether they are current or not.

#### [](#specifying_an_edge_function_version_as_the_current_version "Copy link to heading")Specifying an Edge Function Version as the current version

The scenarios are:

-   Automatically set a new Edge Function Version as the current version of the Edge Function resource on upload - this is the default behaviour. The current version of a parent Edge Function is determined by the version specified in the `edge_function.current_edge_function.tag` field.
    
-   Manually specify an Edge Function Version as the current version of an Edge Function resource - if you want to change the Edge Function Version that is set as the current version of an Edge Function, specify its tag in the `edge_function.current_edge_function.tag` field in a request to update its parent Edge Function.
    

### [](#considerations_for_testing_and_using_an_edge_function_after_uploading_it "Copy link to heading")Considerations for testing and using an Edge Function after uploading it

You may wish to test the new version of an Edge Function in a pre-production and production environment before activating it. For information about testing, see [How to test an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_test_an_edge_function).

**Executions and Edge Function Versions**

The platform executes the current version of an active Edge Function unless you specify the version tag of an Edge Function Version in the request.

It is possible for you to specify a particular version of an Edge Function to execute. For example, to test a specific version and validate its behaviour before making it the current version. However, Thought Machine does not recommend using this pattern to retain a specific version outside of this use case. This is to ensure good Edge Function and execution management hygiene. You should only use this functionality to test a version in your environment. For example, before you set it as the current version in a production environment.

## [](#uploading_an_edge_function_using_an_api_request "Copy link to heading")Uploading an Edge Function using an API request

You can create and update Edge Functions via an HTTP request to the Edge Functions API.

The relevant approaches for this guide are:

-   [Create an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function#create_edge_function)
    
-   [Update an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function#update_an_edge_function) (or its Edge Function Version)
    
-   [Get a list of Edge Functions](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function#list_edge_functions) - to check the Edge Functions that are available before or after creating or updating an Edge Function
    

The following request examples are to help introduce you to the available endpoints in the Edge Functions API. For more information about the Edge Functions API and a list of all available endpoints and parameters, see the [Edge Functions API reference](/vault-core/5-8/EN/api/edge_functions_api).

### [](#create_edge_function "Copy link to heading")Create Edge Function

Creates an `EdgeFunction` resource with initial `EdgeFunctionVersion`.

Permission scopes: `edge_functions:read`, `edge_functions.edge_functions:read`

  
| HTTP method | Name | Description |
| --- | --- | --- |
| 
`POST`

 | 

`CreateEdgeFunction`

 | 

Create an Edge function.

 |

**Body parameters:**

  
| Name | Description | Example |
| --- | --- | --- |
| 
Request ID

 | 

A unique ID used to ensure this request is idempotent. Required.

 | 

`request_id`

 |
| 

Edge Function

 | 

The Edge Function resource with the update, containing the Edge Function ID and Edge Function details. Required.

 | 

`edge_function`

 |
| 

`edge_function. **id**`

 | 

The unique ID of the Edge Function resource.

 | 

`"id": "$<edge_function_id>"`

 |
| 

`edge_function. **description**`

 | 

The description of the Edge Function.

 | 

`"description": "$<edge_function_description>"`

 |
| 

`edge_function. current_edge_function_version. **tag**`

 | 

The version tag for the Edge Function Version (subresource) that you are creating for this Edge Function resource. By default, the initial Edge Function Version is automatically set as the current version of the Edge Function.

When you make a request to execute an Edge Function, it triggers the execution of the specified current version. The current version is the Edge Function version that you specify here.

 | 

`"tag":"$<value1>"`

 |
| 

`edge_function. current_edge_function_version. **code**`

 | 

The source code for the Edge Function Version. For guidance on writing Edge Function code, see [How to write an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function)

 | 

`"code": "# Python Edge Function code"`

 |
| 

`edge_function. **status**`

 | 

The description of the Edge Function. Acceptable values: `EDGE_FUNCTION_STATUS_ACTIVE` and `EDGE_FUNCTION_STATUS_INACTIVE`

 | 

`status`

 |

**Example request:**

For more information about the Edge Functions API and a list of all available endpoints and parameters, see the [Edge Functions API reference](/vault-core/5-8/EN/api/edge_functions_api).

### [](#update_an_edge_function "Copy link to heading")Update an Edge Function

There are three main reasons for updating an Edge Function, and they are distinctly different:

1.  Updating the fields or status of an existing Edge Function resource
    
2.  Updating an Edge Function resource to use a different, but existing, Edge Function Version as its current version (not creating a new Edge Function Version with new source code)
    
3.  Updating the source code of an Edge Function resource by creating a new Edge Function Version subresource
    

In all cases, you can stop here and visit the [How to update an Edge Function](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_update_an_edge_function) tutorial.

chat\_bubble

You can update the fields of an Edge Function resource. However, in order to update the source code, you must create a new Edge Function Version.

### [](#list_edge_functions "Copy link to heading")List Edge Functions

Before or after creating or updating an Edge Function, you may want to check the Edge Functions that are available.

You can return a list of the Edge Functions and their IDs by making a GET request to the Edge Functions endpoint.

Permission scopes: `edge_functions:read`, `edge_functions.edge_functions:read`

  
| HTTP method | Name | Description |
| --- | --- | --- |
| 
`GET`

 | 

`ListEdgeFunctions`

 | 

Get a list of Edge Functions.

 |

**Query parameters:**

  
| Name | Description | Example |
| --- | --- | --- |
| 
`page_size`

 | 

The number of results to return in the response. Required. Acceptable values: Minimum value: `1`, Maximum value: `100`

 | 

`page_size={uint32}`

 |
| 

`page_token` *str*

 | 

The token of the page to return the results from. If you do not specify this parameter, the API returns the first page of results. Optional.

 | 

`page_token=10`

 |

**Example request:**

For more information about the Edge Functions API and a list of all available endpoints and parameters, see the [Edge Functions API reference](/vault-core/5-8/EN/api/edge_functions_api).

## [](#uploading_an_edge_function_using_the_configuration_layer_utility "Copy link to heading")Uploading an Edge Function using the Configuration Layer Utility

The Thought Machine Configuration Layer Utility (CLU) is a tool that you can use to upload and manage resources for use with Vault Core. Each Edge Function is in one `.py` file.

In order to create or update an Edge Function resource using the CLU, the key steps are:

1.  Specify an Edge Function resource, for example `"test_edge_function"`.
    
2.  Add the new Edge Function resource and the required code and references to a manifest file.
    
3.  Import the manifest file, using the appropriate import command.
    

You can use the CLU to import a file using the following command:

You must pass the arguments with your command (represented by `[option(s)]` in the example), such as your authorisation token or JWT, and to set the addresses of the Vault Core API and Edge Functions API.

You must also provide the hostname for the Edge Functions API: `edge-functions-api`

For example: `--edge-functions-api {edge-functions-api-url}`

**Example when using a Service Account token**

**Example when using a JWT (JSON Web Token)**

For a list of supported options for import, supported resources, and more information about using the CLU, see the [Configuration Layer Utility User Guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide).