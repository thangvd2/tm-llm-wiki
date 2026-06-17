---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_update_an_edge_function"
title: "How to update an Edge Function"
scraped_at: "2026-06-17T05:15:09.691Z"
images: 1
---

# How to update an Edge Function

lightbulb

If you are visiting this tutorial for the first time, take a look at the [Edge Functions Quick start guide](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/overview_and_getting_started/quick_start_guide) and [How to write an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function). These guides explain some of the key concepts about Edge Functions, Edge Function versions, and how they relate to each other. You can view a diagram that provides an [overview of Edge Functions resources and structure here](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function#overview_of_edge_function_resources_and_structure).

## [](#overview_of_updating_edge_functions "Copy link to heading")Overview of updating Edge Functions

There are three main reasons for updating an Edge Function, and they are distinctly different:

1.  Updating the fields or status of an existing Edge Function resource
    
2.  Updating an Edge Function resource to use a different, but existing, Edge Function Version as its active version (not creating a new Edge Function Version with new source code)
    
3.  Updating the source code of an Edge Function resource by creating a new Edge Function Version subresource
    

In addition, the Edge Functions platform provides two approaches for updating Edge Function resources and code for Edge Function Versions:

-   Using the Configuration Layer Utility (CLU) tool
    
-   Using the Edge Functions API
    

This tutorial covers all of these scenarios, focusing on using the API. You can get an overview of the CLU approach here and then follow the detailed guidance in the CLU’s dedicated documentation.

Follow the guidance for the scenario that matches what you want to achieve.

![Overview of how to upload and update an Edge Function or Version](_assets/edge_functions_and_versions_relationship_addition.svg)

## [](#updating_resources_using_the_clu "Copy link to heading")Updating resources using the CLU

The Thought Machine Configuration Layer Utility is a tool that you can use to upload and manage resources for use with Vault Core. Each Edge Function is in one `.py` file.

In order to create or update an Edge Function resource using the CLU, the key steps are:

1.  Specify an Edge Function resource, for example `"test_edge_function"`.
    
2.  Add the new Edge Function resource and the required code and references to a manifest file.
    
3.  Import the manifest file, using the appropriate import command.
    

You can use the CLU to import a file using the following command:

You must pass the arguments with your command (represented by `[option(s)]` in the example), such as your authorisation token or JSON Web Token (JWT), and to set the addresses of the Vault Core API and Edge Functions API.

You must also provide the hostname for the Edge Functions API: `edge-functions-api`

Example:

**Example when using a Service Account token**

**Example when using a JWT (JSON Web Token)**

For a list of supported options for import, supported resources, and more information about using the CLU, see the [Configuration Layer Utility User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide).

## [](#updating_the_fields_status_or_version_of_an_existing_edge_function "Copy link to heading")Updating the fields, status or version of an existing Edge Function

The key scenarios are as follows:

-   Updating information for an existing Edge Function resource - to do this, you must specify the fields to update to `update_mask`, and provide the updated information in the corresponding fields in the request body
    
-   Updating an existing Edge Function resource to associate a different, existing EdgeFunctionVersion (subresource) as the active version via the `active_edge_function_version_tag`
    

For example, you would update the `active_edge_function_version_tag` if you want to specify a different Edge Function Version as the active version. This means that subsequent requests to execute the Edge Function result in executing the newly-specified Edge Function Version.

In this scenario, the Edge Function Version source code does not change. Instead, the only change is the Edge Function Version that is specified as the `active_version` of the Edge Function resource. You use the API to manage this, instead of the CLU.

To update the Edge Function parent resource, make a PUT request to the Edge Functions API:

You must provide the Edge Function ID and specify the field that you wish to update to `update_mask`.

The fields that you can update, and their corresponding values, are as follows:

-   `active_edge_function_version_tag` - the tag of the Edge Function Version that you want set as the active version of the Edge Function
    
-   `description` - the description of the Edge Function
    
-   `status` - the status of the Edge Function
    

The Edge Functions service ignores any fields that you do not include in this mask and does not update them.

info

Field combinations to avoid in update\_mask requests

If you want to update/modify the source code that is associated with an Edge Function resource, you must create a new Edge Function Version instead.

For information, see [Updating the Edge Function source code by creating a new EdgeFunctionVersion](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_update_an_edge_function#updating_the_edge_function_source_code_by_creating_a_new_edgefunctionversion)

Example:

For more information, see [How to upload an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_upload_an_edge_function) and the [Edge Functions API reference](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#edge_functions).

## [](#updating_the_edge_function_source_code_by_creating_a_new_edgefunctionversion "Copy link to heading")Updating the Edge Function source code by creating a new EdgeFunctionVersion

To update the source code of an existing Edge Function (top-level) resource, you need to create a new EdgeFunctionVersion (subresource) for the Edge Function.

In the request, you must provide your updated source code and a new version tag (one that is not in use by another version), specifying the existing Edge Function resource.

This creates a new Edge Function Version (subresource). Note that this does not automatically set the new Edge Function Version as the active version for the Edge Function.

To create a new Edge Function Version, you must use the following endpoint:

-   [CreateEdgeFunctionVersion](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunction_CreateEdgeFunction)
    

To complete this using an API call for [CreateEdgeFunctionVersion](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunction_CreateEdgeFunction), make a POST request to the Edge Functions API, specifying the Edge Function ID in the endpoint URL, and include the source code in the request body.

Permission scopes: `edge_functions:write`, `edge_functions.edge_function_versions:write`

  
| HTTP method | Name | Description |
| --- | --- | --- |
| 
`POST`

 | 

`CreateEdgeFunctionVersion`

 | 

Create a new Edge Function Version for an existing Edge Function.

 |

**Path (URL) request parameters:**

  
| Name | Description | Example |
| --- | --- | --- |
| 
Edge Function ID

 | 

*Required*. Unique ID of the parent Edge Function resource that you are updating.

 | 

`$EDGE_FUNCTION_ID`

 |

**Body parameters:**

  
| Name | Description | Example |
| --- | --- | --- |
| 
Request ID

 | 

*Required*. A unique ID used to ensure this request is idempotent.

 | 

`request_id`

 |
| 

Edge Function Version

 | 

*Required*. The Edge Function Version subresource that you are creating.

 | 

`EDGE_FUNCTION_VERSION`

 |
| 

`edge_function_version.**tag**`

 | 

The version tag for the Edge Function Version (subresource) that you want to create. This must be unique within the parent Edge Function.

 | 

`"tag":"$EDGE_FUNCTION_VERSION_TAG"`

 |
| 

`edge_function_version.**code**`

 | 

The source code for the Edge Function Version. For guidance on writing Edge Function code, see [How to write an Edge Function](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_write_an_edge_function)

 | 

`"code": "# Python Edge Function code"`

 |

To create a new `EdgeFunctionVersion` for the top-level Edge Function resource, make a POST request to the [CreateEdgeFunctionVersion](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunctionVersion_CreateEdgeFunctionVersion) endpoint. The request creates a new `EdgeFunctionVersion` as a result; however, it does not set the new `EdgeFunctionVersion` as the `active_edge_function_version_tag` of its associated Edge Function.

chat\_bubble

If you want to use the code of a new `EdgeFunctionVersion` when you execute its parent Edge Function, you must do one of the following:

-   specify the version tag of this new `EdgeFunctionVersion` when making the execution request
    
-   update the `EdgeFunction` to set the `active_edge_function_version_tag` to this new `EdgeFunctionVersion` tag
    

After creating the new version, you must update the parent Edge Function resource to set this new version as the active version.

For more information on updating an Edge Function to use a new active version, see [Updating the fields](/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/edge_functions_tutorials/how_to_update_an_edge_function#updating_the_fields_status_or_version_of_an_existing_edge_function).

## [](#check_that_the_new_edge_function_version_is_available "Copy link to heading")Check that the new Edge Function Version is available

After creating the new Edge Function Version, make a [GET](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunction_GetEdgeFunction) request to return the details of the active Edge Function Version for the Edge Function. This allows you to check whether your new Edge Function Version is available as the active version of the Edge Function that you updated.

Permission scopes: `edge_functions:read`, `edge_functions.edge_functions:read`

**Path (URL) request parameters:**

  
| Name | Description | Example |
| --- | --- | --- |
| 
Edge Function ID

 | 

*Required*. Unique ID of the parent Edge Function resource that you are updating. Some documentation examples use a placeholder to represent this: `$EDGE_FUNCTION_ID`

 | 

`create_savings_account`

 |

Alternatively, you can make one of the following requests:

-   [`ListEdgeFunctions`](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_ListEdgeFunctionsResponse_ListEdgeFunctions)\` - to list all filtered EdgeFunction resources
    
-   [`BatchGetEdgeFunctions`](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_BatchGetEdgeFunctionsResponse_BatchGetEdgeFunctions) – to retrieve all Edge Function resources for the Edge Function IDs that you specify