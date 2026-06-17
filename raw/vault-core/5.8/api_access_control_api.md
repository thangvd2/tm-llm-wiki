---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/api/access_control_api"
title: "Access Control API"
scraped_at: "2026-06-17T05:32:07.382Z"
images: 0
---

# Access Control API

The Vault Access Control API is RESTful. It uses predictable and resource-oriented URLs with standard HTTP methods and status codes. Responses are in JSON format.

For an overview of the general features of the API, see [API intro](/vault-core/5-8/EN/api/overview/).

## [](#downloading_the_openapi_definition_file "Copy link to heading")Downloading the OpenAPI definition file

The OpenAPI definition is an Interface Description Language for describing RESTful APIs expressed in JSON format.

info

The Access Control API is available in this format and can be downloaded here:

Download download

The specification includes Thought Machine-specific extensions that are not standard to OpenAPI. The generation method of the specification and resulting naming, paths and schemas are subject to change. For more information about the OpenAPI specification see the [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3).

## [](#permissions "Copy link to heading")Permissions

**Permissions** are access control tags that can be assigned to [Roles](/vault-core/5-8/EN#Roles). Permissions can be used to allow users to view pages or interact with resources. For further information, see [policies](/vault-core/5-8/EN/api/workflows_api#Policies).

The types of permission in Vault are:

-   **Vault permissions**: Predefined permissions within Vault controlling access to different areas of the Operations Dashboard. In the Operations Dashboard these are called Base Permissions.
    
-   **Data permissions**: custom permissions that can be created by users and used with [policies](/vault-core/5-8/EN/api/workflows_api#Policies) to control access to resources. In the Operations Dashboard these are called Custom Permissions.
    

### [](#datapermission "Copy link to heading")DataPermission

#### [](#available_methods "Copy link to heading")Available methods

-   [List](#_access_control_api_v1_permissions_ListDataPermissionsResponse_ListDataPermissions) Lists all data permissions.
    
-   [Create](#_access_control_api_v1_permissions_DataPermission_CreateDataPermission) Creates a data permission.
    
-   [Update](#_access_control_api_v1_permissions_DataPermission_UpdateDataPermission) Updates a data permission.
    
-   [Get](#_access_control_api_v1_permissions_DataPermission_GetDataPermission) Retrieves a data permission using its ID.
    
-   [Delete](#_google_protobuf_Empty_DeleteDataPermission) Deletes a data permission.
    
-   [BatchGet](#_access_control_api_v1_permissions_BatchGetDataPermissionsResponse_BatchGetDataPermissions) Retrieves one or more data permissions using their IDs.
    

#### [](#_access_control_api_v1_permissions_ListDataPermissionsResponse_ListDataPermissions "Copy link to heading")List

Lists all data permissions.

**Permission Scopes:** access\_control:read, access\_control.data\_permissions:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/data-permissions

##### [](#request "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**order\_by**  
  
array \[enum\]

 | 

Options for ordering the list of data permissions returned.  
  
**Enum values**  
**ORDER\_BY\_NAME\_ASC**

 |
| 

**page\_size**  
  
integer

 | 

The number of data permissions that are to be retrieved.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#responses "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**permissions\[\]**  
  
array \[object\]

 | 

The list of the data permissions that are to be retrieved.

 |
| 

permissions\[\].  
**id**  
  
string

 | 

The ID of the data permission.  
  
Required.

 |
| 

permissions\[\].  
**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

permissions\[\].  
**description**  
  
string

 | 

The description of the data permission.

 |
| 

permissions\[\].  
**employee\_id**  
  
string

 | 

The ID of the employee who created the permission.

 |
| 

permissions\[\].  
**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

permissions\[\].  
**create\_timestamp**  
  
dateTime

 | 

When the data permission was created.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_access_control_api_v1_permissions_DataPermission_CreateDataPermission "Copy link to heading")Create

Creates a data permission.

**Permission Scopes:** access\_control:write, access\_control.data\_permissions:write

**Endpoint:** POST /v1/data-permissions

##### [](#request_2 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**data\_permission**  
  
object

 | 

The data permission that is to be created. Required.

 |
| 

data\_permission.  
**id**  
  
string

 | 

The ID of the data permission.  
  
Required.

 |
| 

data\_permission.  
**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

data\_permission.  
**description**  
  
string

 | 

The description of the data permission.

 |

##### [](#responses_2 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the data permission.  
  
Required.

 |
| 

**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

**description**  
  
string

 | 

The description of the data permission.

 |
| 

**employee\_id**  
  
string

 | 

The ID of the employee who created the permission.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the data permission was created.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_access_control_api_v1_permissions_DataPermission_UpdateDataPermission "Copy link to heading")Update

Updates a data permission.

**Permission Scopes:** access\_control:write, access\_control.data\_permissions:write

**Endpoint:** PUT /v1/data-permissions/{data\_permission.id}

##### [](#request_3 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
data\_permission.  
**id**  
  
string

 | 

The ID of the data permission.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**data\_permission**  
  
object

 | 

The data permission that is to be updated. Required.

 |
| 

data\_permission.  
**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

data\_permission.  
**description**  
  
string

 | 

The description of the data permission.

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields in the resource are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#responses_3 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the data permission.  
  
Required.

 |
| 

**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

**description**  
  
string

 | 

The description of the data permission.

 |
| 

**employee\_id**  
  
string

 | 

The ID of the employee who created the permission.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the data permission was created.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_access_control_api_v1_permissions_DataPermission_GetDataPermission "Copy link to heading")Get

Retrieves a data permission using its ID.

**Permission Scopes:** access\_control:read, access\_control.data\_permissions:read

**Endpoint:** GET /v1/data-permissions/{id}

##### [](#request_4 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the data permission that is to be retrieved.

 |

##### [](#responses_4 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the data permission.  
  
Required.

 |
| 

**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

**description**  
  
string

 | 

The description of the data permission.

 |
| 

**employee\_id**  
  
string

 | 

The ID of the employee who created the permission.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the data permission was created.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_google_protobuf_Empty_DeleteDataPermission "Copy link to heading")Delete

Deletes a data permission.

**Permission Scopes:** access\_control:write, access\_control.data\_permissions:write

**Endpoint:** DELETE /v1/data-permissions/{id}

##### [](#request_5 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the data permission that is to be deleted.

 |

##### [](#responses_5 "Copy link to heading")Responses

Success Errors

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_access_control_api_v1_permissions_BatchGetDataPermissionsResponse_BatchGetDataPermissions "Copy link to heading")BatchGet

Retrieves one or more data permissions using their IDs.

**Permission Scopes:** access\_control:read, access\_control.data\_permissions:read

**Endpoint:** GET /v1/data-permissions:batchGet

##### [](#request_6 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of the IDs of data permissions that are to be retrieved.  
  
Required.  
Min length: 1 characters.

 |

##### [](#responses_6 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**data\_permissions**  
  
map \[string: object\]

 | 

A map of the data permission ID to the data permission.

 |
| 

data\_permissions\[KEY\].  
**id**  
  
string

 | 

The ID of the data permission.  
  
Required.

 |
| 

data\_permissions\[KEY\].  
**display\_name**  
  
string

 | 

The name of the data permission.  
  
Required.  
Min length: 1 characters.

 |
| 

data\_permissions\[KEY\].  
**description**  
  
string

 | 

The description of the data permission.

 |
| 

data\_permissions\[KEY\].  
**employee\_id**  
  
string

 | 

The ID of the employee who created the permission.

 |
| 

data\_permissions\[KEY\].  
**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

data\_permissions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

When the data permission was created.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

### [](#vaultpermission "Copy link to heading")VaultPermission

#### [](#available_methods_2 "Copy link to heading")Available methods

-   [List](#_access_control_api_v1_permissions_ListVaultPermissionsResponse_ListVaultPermissions) Lists all Vault permissions.
    
-   [Get](#_access_control_api_v1_permissions_VaultPermission_GetVaultPermission) Retrieves a Vault permission using its ID.
    
-   [BatchGet](#_access_control_api_v1_permissions_BatchGetVaultPermissionsResponse_BatchGetVaultPermissions) Retrieves one or more Vault permissions using their IDs.
    

#### [](#_access_control_api_v1_permissions_ListVaultPermissionsResponse_ListVaultPermissions "Copy link to heading")List

Lists all Vault permissions.

**Permission Scopes:** access\_control:read, access\_control.vault\_permissions:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/vault-permissions

##### [](#request_7 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**associated\_role\_ids**  
  
array \[string\]

 | 

A list of role IDs that are associated with the Vault permissions to be retrieved.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

Options for ordering the list of Vault permissions returned.  
  
**Enum values**  
**ORDER\_BY\_ID\_ASC**

 |
| 

**page\_size**  
  
integer

 | 

The number of Vault permissions that are to be retrieved.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#responses_7 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**vault\_permissions\[\]**  
  
array \[object\]

 | 

A list of the Vault permissions that are retrieved.

 |
| 

vault\_permissions\[\].  
**id**  
  
string

 | 

The ID of the Vault permission.

 |
| 

vault\_permissions\[\].  
**display\_name**  
  
string

 | 

The name of the Vault permission.

 |
| 

vault\_permissions\[\].  
**description**  
  
string

 | 

The description of the Vault permission.

 |
| 

vault\_permissions\[\].  
**action\_type**  
  
enum

 | 

The type of Vault permission.  
  
**Enum values**  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
Unknown type  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_VIEW:**  
View an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_CREATE:**  
Create an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_EDIT:**  
Edit an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_VIEW:**  
View an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_CREATE:**  
Create an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_EDIT:**  
Edit an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_VIEW:**  
View an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_CREATE:**  
Create an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_EDIT:**  
Edit an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_DELETE\_OR\_DISABLE:**  
Delete or disable an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_VIEW:**  
View a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_CREATE:**  
Create a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_EDIT:**  
Edit a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_VIEW:**  
View a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_CREATE:**  
Create a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_EDIT:**  
Edit a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_DELETE\_OR\_DISABLE:**  
Delete or disable a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_VIEW:**  
View a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_CREATE:**  
Create a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_EDIT:**  
Edit a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DELETE\_OR\_DISABLE:**  
Delete or disable a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_VIEW:**  
View a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_CREATE:**  
Create a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_EDIT:**  
Edit a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_VIEW:**  
View an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_CREATE:**  
Create an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_EDIT:**  
Edit an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_VIEW:**  
View a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_CREATE:**  
Create a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_EDIT:**  
Edit a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_VIEW:**  
View a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_CREATE:**  
Create a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_EDIT:**  
Edit a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_VIEW:**  
View a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_CREATE:**  
Create a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_EDIT:**  
Edit a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VIEW:**  
View a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_CREATE:**  
Create a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_EDIT:**  
Edit a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_VIEW:**  
View a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_CREATE:**  
Create a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_EDIT:**  
Edit a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_VIEW:**  
View a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_CREATE:**  
Create a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_EDIT:**  
Edit a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_VIEW:**  
View a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_CREATE:**  
Create a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_EDIT:**  
Edit a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_DELETE\_OR\_DISABLE:**  
Delete or disable a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VIEW:**  
View a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_CREATE:**  
Create a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_EDIT:**  
Edit a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_VIEW:**  
View a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_CREATE:**  
Create a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_EDIT:**  
Edit a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_VIEW:**  
View a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_CREATE:**  
Create a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_EDIT:**  
Edit a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_VIEW:**  
View a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_CREATE:**  
Create a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_EDIT:**  
Edit a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VIEW:**  
View a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_CREATE:**  
Create a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_EDIT:**  
Edit a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_VIEW:**  
View a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_CREATE:**  
Create a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_EDIT:**  
Edit a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_VIEW:**  
View a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_CREATE:**  
Create a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_EDIT:**  
Edit a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_VIEW:**  
View a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_CREATE:**  
Create a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_EDIT:**  
Edit a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_DELETE\_OR\_DISABLE:**  
Delete or disable a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VIEW:**  
View a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_CREATE:**  
Create a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_EDIT:**  
Edit a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_VIEW:**  
View a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_CREATE:**  
Create a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_EDIT:**  
Edit a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_VIEW:**  
View a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_CREATE:**  
Create a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EDIT:**  
Edit a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_VIEW:**  
View a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_CREATE:**  
Create a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_EDIT:**  
Edit a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_VIEW:**  
View an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_CREATE:**  
Create an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_EDIT:**  
Edit an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_VIEW:**  
View an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_CREATE:**  
Create an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_EDIT:**  
Edit an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_DELETE\_OR\_DISABLE:**  
Delete or disable an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_VIEW:**  
View a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_CREATE:**  
Create a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_EDIT:**  
Edit a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_DELETE\_OR\_DISABLE:**  
Delete or disable a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_VIEW:**  
View a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_CREATE:**  
Create a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_EDIT:**  
Edit a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_DELETE\_OR\_DISABLE:**  
Delete or disable a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_VIEW:**  
View a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_CREATE:**  
Create a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_EDIT:**  
Edit a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_VIEW:**  
View an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_CREATE:**  
Create an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_EDIT:**  
Edit an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_VIEW:**  
View a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_CREATE:**  
Create a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_EDIT:**  
Edit a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_VIEW:**  
View a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_CREATE:**  
Create a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_EDIT:**  
Edit a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_VIEW:**  
View a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_CREATE:**  
Create a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_EDIT:**  
Edit a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW:**  
View a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_CREATE:**  
Create a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_EDIT:**  
Edit a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_VIEW:**  
View a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_CREATE:**  
Create a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_EDIT:**  
Edit a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_DELETE\_OR\_DISABLE:**  
Delete or disable a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_VIEW:**  
View a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_CREATE:**  
Create a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_EDIT:**  
Edit a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VIEW:**  
View a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_CREATE:**  
Create a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_EDIT:**  
Edit a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_VIEW:**  
View a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_CREATE:**  
Create a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_EDIT:**  
Edit a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_VIEW:**  
View a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_CREATE:**  
Create a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_EDIT:**  
Edit a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_DELETE\_OR\_DISABLE:**  
Delete or disable a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_VIEW:**  
View a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_CREATE:**  
Create a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_EDIT:**  
Edit a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_VIEW:**  
View an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_CREATE:**  
Create an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_EDIT:**  
Edit an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_VIEW:**  
View a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_CREATE:**  
Create a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_EDIT:**  
Edit a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_VIEW:**  
View a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_CREATE:**  
Create a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_EDIT:**  
Edit a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_VIEW:**  
View an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_CREATE:**  
Create an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_EDIT:**  
Edit an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_VIEW:**  
View an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_CREATE:**  
Create an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_EDIT:**  
Edit an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_VIEW:**  
View an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_CREATE:**  
Create an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_EDIT:**  
Edit an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VIEW:**  
View a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_CREATE:**  
Create a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_EDIT:**  
Edit a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_VIEW:**  
View a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_CREATE:**  
Create a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_EDIT:**  
Edit a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_VIEW:**  
View a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_CREATE:**  
Create a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_EDIT:**  
Edit a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_VIEW:**  
View a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_CREATE:**  
Create a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_EDIT:**  
Edit a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_VIEW:**  
View a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_CREATE:**  
Create a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_EDIT:**  
Edit a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_VIEW:**  
View a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_CREATE:**  
Create a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_EDIT:**  
Edit a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_VIEW:**  
View a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_CREATE:**  
Create a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_EDIT:**  
Edit a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_VIEW:**  
View a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_CREATE:**  
Create a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_EDIT:**  
Edit a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_VIEW:**  
View a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_CREATE:**  
Create a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_EDIT:**  
Edit a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_VIEW:**  
View a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_CREATE:**  
Create a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_EDIT:**  
Edit a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_VIEW:**  
View a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_CREATE:**  
Create a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_EDIT:**  
Edit a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_VIEW:**  
View a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_CREATE:**  
Create a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_EDIT:**  
Edit a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_VIEW:**  
View a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_CREATE:**  
Create a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_EDIT:**  
Edit a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VIEW:**  
View a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_CREATE:**  
Create a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_EDIT:**  
Edit a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_VIEW:**  
View a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_CREATE:**  
Create a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_EDIT:**  
Edit a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VIEW:**  
View a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CREATE:**  
Create a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_EDIT:**  
Edit a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_VIEW:**  
View a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_CREATE:**  
Create a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_EDIT:**  
Edit a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_VIEW:**  
View a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_CREATE:**  
Create a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_EDIT:**  
Edit a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_VIEW:**  
View a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_CREATE:**  
Create a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_EDIT:**  
Edit a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_VIEW:**  
View a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_CREATE:**  
Create a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_EDIT:**  
Edit a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VIEW:**  
View a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_CREATE:**  
Create a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_EDIT:**  
Edit a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_VIEW:**  
View a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_CREATE:**  
Create a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_EDIT:**  
Edit a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_VIEW:**  
View a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CREATE:**  
Create a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_EDIT:**  
Edit a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_VIEW:**  
View a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_CREATE:**  
Create a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_EDIT:**  
Edit a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_VIEW:**  
View a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_CREATE:**  
Create a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_EDIT:**  
Edit a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_VIEW:**  
View a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_CREATE:**  
Create a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EDIT:**  
Edit a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_DELETE\_OR\_DISABLE:**  
Delete or disable a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_VIEW:**  
View a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_CREATE:**  
Create a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_EDIT:**  
Edit a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_VIEW:**  
View a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_CREATE:**  
Create a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_EDIT:**  
Edit a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_VIEW:**  
View a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_CREATE:**  
Create a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_EDIT:**  
Edit a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_VIEW:**  
View a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_CREATE:**  
Create a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_EDIT:**  
Edit a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_VIEW:**  
View a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_CREATE:**  
Create a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_EDIT:**  
Edit a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_VIEW:**  
View a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_CREATE:**  
Create a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_EDIT:**  
Edit a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_VIEW:**  
View a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_CREATE:**  
Create a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_EDIT:**  
Edit a Vault Job Operation as well as retry the errored Operations  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_TOPIC\_VIEW:**  
View a DLQ topic  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_MESSAGE\_CONTENT\_VIEW:**  
View DLQ topic message payload  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_TOPIC\_EDIT:**  
Edit a DLQ topic as well as edit/republish DLQ messages  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC\_VIEW:**  
View an Account schedule association  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG\_VIEW:**  
View an Account schedule tag  
**ACTION\_VAULT\_OBJECT\_TYPE\_ASYNC\_OPERATION\_VIEW:**  
View an Async operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCES\_LIVE\_VIEW:**  
View a Balances live  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCES\_TIME\_RANGE\_VIEW:**  
View a Balances time range  
**ACTION\_VAULT\_OBJECT\_TYPE\_BOOKKEEPING\_DATE\_VIEW:**  
View a Bookkeeping date  
**ACTION\_VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION\_VIEW:**  
View a Contract module version  
**ACTION\_VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VIEW:**  
View a Contract module  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_VALUE\_VIEW:**  
View a Global parameter value. This field is deprecated, use ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW instead  
**Deprecated** as of release **5.3**, and will be removed no earlier than release **6.0**  
*Deprecated in favour of ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW.*  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOURNAL\_EVENT\_VIEW:**  
View a Journal event  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOURNAL\_EVENTS\_CHECKSUM\_VIEW:**  
View a Journal event checksum  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_VIEW:**  
View a Parameter value. This field is deprecated, use ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW instead  
**Deprecated** as of release **5.3**, and will be removed no earlier than release **6.0**  
*Deprecated in favour of ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW.*  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VIEW:**  
View a Parameter  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION\_VIEW:**  
View a Plan migration  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE\_VIEW:**  
View a Plan schedule  
**ACTION\_VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE\_VIEW:**  
View a Post posting failure  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_VIEW:**  
View a Posting instruction batch  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT\_VIEW:**  
View a Postings API client  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_VIEW:**  
View a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_VIEW:**  
View a Restriction  
**ACTION\_VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK\_VIEW:**  
View a Contract module versions link  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES\_VIEW:**  
View a Product version parameters timeseries  
**ACTION\_VAULT\_OBJECT\_TYPE\_USAGE\_COMMIT\_VIEW:**  
View usage history  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_ATTRIBUTE\_VIEW:**  
View an Account attribute  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOB\_VIEW:**  
View a Scheduler Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE\_VIEW:**  
View a Parameter Value Hierarchy Node  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW:**  
View a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_CREATE:**  
Create a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_EDIT:**  
Update a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_CREATE:**  
Create a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_EDIT:**  
Edit a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_DERIVED\_PARAMETER\_VALUE\_VIEW:**  
Edit a Derived Parameter Value  
**ACTION\_VAULT\_OBJECT\_TYPE\_ADJUSTMENT\_VIEW:**  
View an Adjustment  
**ACTION\_VAULT\_OBJECT\_TYPE\_ADJUSTMENT\_EDIT:**  
Edit an Adjustment  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_CREATE:**  
Create a Posting instruction batch  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_VERSION\_VIEW:**  
View a Vault version

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_access_control_api_v1_permissions_VaultPermission_GetVaultPermission "Copy link to heading")Get

Retrieves a Vault permission using its ID.

**Permission Scopes:** access\_control:read, access\_control.vault\_permissions:read

**Endpoint:** GET /v1/vault-permissions/{id}

##### [](#request_8 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Vault permission that is to be retrieved.

 |

##### [](#responses_8 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Vault permission.

 |
| 

**display\_name**  
  
string

 | 

The name of the Vault permission.

 |
| 

**description**  
  
string

 | 

The description of the Vault permission.

 |
| 

**action\_type**  
  
enum

 | 

The type of Vault permission.  
  
**Enum values**  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
Unknown type  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_VIEW:**  
View an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_CREATE:**  
Create an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_EDIT:**  
Edit an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_VIEW:**  
View an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_CREATE:**  
Create an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_EDIT:**  
Edit an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_VIEW:**  
View an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_CREATE:**  
Create an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_EDIT:**  
Edit an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_DELETE\_OR\_DISABLE:**  
Delete or disable an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_VIEW:**  
View a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_CREATE:**  
Create a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_EDIT:**  
Edit a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_VIEW:**  
View a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_CREATE:**  
Create a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_EDIT:**  
Edit a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_DELETE\_OR\_DISABLE:**  
Delete or disable a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_VIEW:**  
View a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_CREATE:**  
Create a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_EDIT:**  
Edit a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DELETE\_OR\_DISABLE:**  
Delete or disable a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_VIEW:**  
View a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_CREATE:**  
Create a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_EDIT:**  
Edit a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_VIEW:**  
View an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_CREATE:**  
Create an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_EDIT:**  
Edit an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_VIEW:**  
View a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_CREATE:**  
Create a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_EDIT:**  
Edit a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_VIEW:**  
View a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_CREATE:**  
Create a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_EDIT:**  
Edit a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_VIEW:**  
View a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_CREATE:**  
Create a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_EDIT:**  
Edit a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VIEW:**  
View a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_CREATE:**  
Create a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_EDIT:**  
Edit a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_VIEW:**  
View a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_CREATE:**  
Create a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_EDIT:**  
Edit a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_VIEW:**  
View a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_CREATE:**  
Create a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_EDIT:**  
Edit a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_VIEW:**  
View a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_CREATE:**  
Create a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_EDIT:**  
Edit a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_DELETE\_OR\_DISABLE:**  
Delete or disable a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VIEW:**  
View a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_CREATE:**  
Create a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_EDIT:**  
Edit a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_VIEW:**  
View a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_CREATE:**  
Create a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_EDIT:**  
Edit a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_VIEW:**  
View a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_CREATE:**  
Create a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_EDIT:**  
Edit a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_VIEW:**  
View a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_CREATE:**  
Create a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_EDIT:**  
Edit a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VIEW:**  
View a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_CREATE:**  
Create a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_EDIT:**  
Edit a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_VIEW:**  
View a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_CREATE:**  
Create a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_EDIT:**  
Edit a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_VIEW:**  
View a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_CREATE:**  
Create a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_EDIT:**  
Edit a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_VIEW:**  
View a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_CREATE:**  
Create a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_EDIT:**  
Edit a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_DELETE\_OR\_DISABLE:**  
Delete or disable a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VIEW:**  
View a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_CREATE:**  
Create a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_EDIT:**  
Edit a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_VIEW:**  
View a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_CREATE:**  
Create a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_EDIT:**  
Edit a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_VIEW:**  
View a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_CREATE:**  
Create a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EDIT:**  
Edit a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_VIEW:**  
View a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_CREATE:**  
Create a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_EDIT:**  
Edit a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_VIEW:**  
View an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_CREATE:**  
Create an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_EDIT:**  
Edit an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_VIEW:**  
View an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_CREATE:**  
Create an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_EDIT:**  
Edit an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_DELETE\_OR\_DISABLE:**  
Delete or disable an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_VIEW:**  
View a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_CREATE:**  
Create a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_EDIT:**  
Edit a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_DELETE\_OR\_DISABLE:**  
Delete or disable a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_VIEW:**  
View a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_CREATE:**  
Create a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_EDIT:**  
Edit a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_DELETE\_OR\_DISABLE:**  
Delete or disable a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_VIEW:**  
View a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_CREATE:**  
Create a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_EDIT:**  
Edit a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_VIEW:**  
View an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_CREATE:**  
Create an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_EDIT:**  
Edit an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_VIEW:**  
View a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_CREATE:**  
Create a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_EDIT:**  
Edit a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_VIEW:**  
View a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_CREATE:**  
Create a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_EDIT:**  
Edit a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_VIEW:**  
View a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_CREATE:**  
Create a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_EDIT:**  
Edit a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW:**  
View a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_CREATE:**  
Create a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_EDIT:**  
Edit a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_VIEW:**  
View a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_CREATE:**  
Create a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_EDIT:**  
Edit a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_DELETE\_OR\_DISABLE:**  
Delete or disable a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_VIEW:**  
View a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_CREATE:**  
Create a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_EDIT:**  
Edit a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VIEW:**  
View a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_CREATE:**  
Create a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_EDIT:**  
Edit a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_VIEW:**  
View a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_CREATE:**  
Create a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_EDIT:**  
Edit a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_VIEW:**  
View a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_CREATE:**  
Create a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_EDIT:**  
Edit a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_DELETE\_OR\_DISABLE:**  
Delete or disable a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_VIEW:**  
View a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_CREATE:**  
Create a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_EDIT:**  
Edit a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_VIEW:**  
View an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_CREATE:**  
Create an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_EDIT:**  
Edit an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_VIEW:**  
View a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_CREATE:**  
Create a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_EDIT:**  
Edit a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_VIEW:**  
View a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_CREATE:**  
Create a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_EDIT:**  
Edit a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_VIEW:**  
View an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_CREATE:**  
Create an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_EDIT:**  
Edit an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_VIEW:**  
View an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_CREATE:**  
Create an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_EDIT:**  
Edit an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_VIEW:**  
View an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_CREATE:**  
Create an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_EDIT:**  
Edit an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VIEW:**  
View a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_CREATE:**  
Create a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_EDIT:**  
Edit a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_VIEW:**  
View a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_CREATE:**  
Create a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_EDIT:**  
Edit a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_VIEW:**  
View a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_CREATE:**  
Create a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_EDIT:**  
Edit a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_VIEW:**  
View a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_CREATE:**  
Create a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_EDIT:**  
Edit a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_VIEW:**  
View a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_CREATE:**  
Create a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_EDIT:**  
Edit a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_VIEW:**  
View a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_CREATE:**  
Create a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_EDIT:**  
Edit a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_VIEW:**  
View a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_CREATE:**  
Create a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_EDIT:**  
Edit a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_VIEW:**  
View a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_CREATE:**  
Create a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_EDIT:**  
Edit a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_VIEW:**  
View a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_CREATE:**  
Create a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_EDIT:**  
Edit a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_VIEW:**  
View a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_CREATE:**  
Create a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_EDIT:**  
Edit a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_VIEW:**  
View a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_CREATE:**  
Create a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_EDIT:**  
Edit a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_VIEW:**  
View a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_CREATE:**  
Create a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_EDIT:**  
Edit a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_VIEW:**  
View a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_CREATE:**  
Create a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_EDIT:**  
Edit a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VIEW:**  
View a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_CREATE:**  
Create a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_EDIT:**  
Edit a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_VIEW:**  
View a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_CREATE:**  
Create a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_EDIT:**  
Edit a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VIEW:**  
View a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CREATE:**  
Create a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_EDIT:**  
Edit a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_VIEW:**  
View a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_CREATE:**  
Create a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_EDIT:**  
Edit a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_VIEW:**  
View a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_CREATE:**  
Create a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_EDIT:**  
Edit a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_VIEW:**  
View a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_CREATE:**  
Create a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_EDIT:**  
Edit a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_VIEW:**  
View a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_CREATE:**  
Create a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_EDIT:**  
Edit a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VIEW:**  
View a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_CREATE:**  
Create a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_EDIT:**  
Edit a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_VIEW:**  
View a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_CREATE:**  
Create a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_EDIT:**  
Edit a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_VIEW:**  
View a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CREATE:**  
Create a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_EDIT:**  
Edit a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_VIEW:**  
View a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_CREATE:**  
Create a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_EDIT:**  
Edit a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_VIEW:**  
View a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_CREATE:**  
Create a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_EDIT:**  
Edit a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_VIEW:**  
View a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_CREATE:**  
Create a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EDIT:**  
Edit a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_DELETE\_OR\_DISABLE:**  
Delete or disable a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_VIEW:**  
View a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_CREATE:**  
Create a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_EDIT:**  
Edit a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_VIEW:**  
View a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_CREATE:**  
Create a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_EDIT:**  
Edit a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_VIEW:**  
View a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_CREATE:**  
Create a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_EDIT:**  
Edit a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_VIEW:**  
View a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_CREATE:**  
Create a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_EDIT:**  
Edit a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_VIEW:**  
View a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_CREATE:**  
Create a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_EDIT:**  
Edit a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_VIEW:**  
View a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_CREATE:**  
Create a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_EDIT:**  
Edit a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_VIEW:**  
View a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_CREATE:**  
Create a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_EDIT:**  
Edit a Vault Job Operation as well as retry the errored Operations  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_TOPIC\_VIEW:**  
View a DLQ topic  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_MESSAGE\_CONTENT\_VIEW:**  
View DLQ topic message payload  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_TOPIC\_EDIT:**  
Edit a DLQ topic as well as edit/republish DLQ messages  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC\_VIEW:**  
View an Account schedule association  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG\_VIEW:**  
View an Account schedule tag  
**ACTION\_VAULT\_OBJECT\_TYPE\_ASYNC\_OPERATION\_VIEW:**  
View an Async operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCES\_LIVE\_VIEW:**  
View a Balances live  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCES\_TIME\_RANGE\_VIEW:**  
View a Balances time range  
**ACTION\_VAULT\_OBJECT\_TYPE\_BOOKKEEPING\_DATE\_VIEW:**  
View a Bookkeeping date  
**ACTION\_VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION\_VIEW:**  
View a Contract module version  
**ACTION\_VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VIEW:**  
View a Contract module  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_VALUE\_VIEW:**  
View a Global parameter value. This field is deprecated, use ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW instead  
**Deprecated** as of release **5.3**, and will be removed no earlier than release **6.0**  
*Deprecated in favour of ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW.*  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOURNAL\_EVENT\_VIEW:**  
View a Journal event  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOURNAL\_EVENTS\_CHECKSUM\_VIEW:**  
View a Journal event checksum  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_VIEW:**  
View a Parameter value. This field is deprecated, use ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW instead  
**Deprecated** as of release **5.3**, and will be removed no earlier than release **6.0**  
*Deprecated in favour of ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW.*  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VIEW:**  
View a Parameter  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION\_VIEW:**  
View a Plan migration  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE\_VIEW:**  
View a Plan schedule  
**ACTION\_VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE\_VIEW:**  
View a Post posting failure  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_VIEW:**  
View a Posting instruction batch  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT\_VIEW:**  
View a Postings API client  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_VIEW:**  
View a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_VIEW:**  
View a Restriction  
**ACTION\_VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK\_VIEW:**  
View a Contract module versions link  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES\_VIEW:**  
View a Product version parameters timeseries  
**ACTION\_VAULT\_OBJECT\_TYPE\_USAGE\_COMMIT\_VIEW:**  
View usage history  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_ATTRIBUTE\_VIEW:**  
View an Account attribute  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOB\_VIEW:**  
View a Scheduler Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE\_VIEW:**  
View a Parameter Value Hierarchy Node  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW:**  
View a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_CREATE:**  
Create a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_EDIT:**  
Update a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_CREATE:**  
Create a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_EDIT:**  
Edit a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_DERIVED\_PARAMETER\_VALUE\_VIEW:**  
Edit a Derived Parameter Value  
**ACTION\_VAULT\_OBJECT\_TYPE\_ADJUSTMENT\_VIEW:**  
View an Adjustment  
**ACTION\_VAULT\_OBJECT\_TYPE\_ADJUSTMENT\_EDIT:**  
Edit an Adjustment  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_CREATE:**  
Create a Posting instruction batch  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_VERSION\_VIEW:**  
View a Vault version

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_access_control_api_v1_permissions_BatchGetVaultPermissionsResponse_BatchGetVaultPermissions "Copy link to heading")BatchGet

Retrieves one or more Vault permissions using their IDs.

**Permission Scopes:** access\_control:read, access\_control.vault\_permissions:read

**Endpoint:** GET /v1/vault-permissions:batchGet

##### [](#request_9 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of the IDs of Vault permissions that are to be retrieved.  
  
Required.  
Min length: 1 characters.

 |

##### [](#responses_9 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**vault\_permissions**  
  
map \[string: object\]

 | 

A map of the Vault permission IDs to the Vault permission to be retrieved.

 |
| 

vault\_permissions\[KEY\].  
**id**  
  
string

 | 

The ID of the Vault permission.

 |
| 

vault\_permissions\[KEY\].  
**display\_name**  
  
string

 | 

The name of the Vault permission.

 |
| 

vault\_permissions\[KEY\].  
**description**  
  
string

 | 

The description of the Vault permission.

 |
| 

vault\_permissions\[KEY\].  
**action\_type**  
  
enum

 | 

The type of Vault permission.  
  
**Enum values**  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
Unknown type  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_VIEW:**  
View an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_CREATE:**  
Create an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_EDIT:**  
Edit an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_VIEW:**  
View an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_CREATE:**  
Create an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_EDIT:**  
Edit an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_VIEW:**  
View an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_CREATE:**  
Create an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_EDIT:**  
Edit an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_AUDIT\_LOG\_DELETE\_OR\_DISABLE:**  
Delete or disable an Audit Log.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_VIEW:**  
View a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_CREATE:**  
Create a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_EDIT:**  
Edit a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Customer.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_VIEW:**  
View a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_CREATE:**  
Create a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_EDIT:**  
Edit a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS\_DELETE\_OR\_DISABLE:**  
Delete or disable a Customer Address.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_VIEW:**  
View a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_CREATE:**  
Create a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_EDIT:**  
Edit a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DELETE\_OR\_DISABLE:**  
Delete or disable a Flag.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_VIEW:**  
View a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_CREATE:**  
Create a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_EDIT:**  
Edit a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Flag Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_VIEW:**  
View an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_CREATE:**  
Create an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_EDIT:**  
Edit an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable an Internal Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_VIEW:**  
View a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_CREATE:**  
Create a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_EDIT:**  
Edit a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYEE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_VIEW:**  
View a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_CREATE:**  
Create a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_EDIT:**  
Edit a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Device.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_VIEW:**  
View a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_CREATE:**  
Create a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_EDIT:**  
Edit a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Device Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VIEW:**  
View a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_CREATE:**  
Create a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_EDIT:**  
Edit a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_VIEW:**  
View a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_CREATE:**  
Create a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_EDIT:**  
Edit a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline Job.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_VIEW:**  
View a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_CREATE:**  
Create a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_EDIT:**  
Edit a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Pipeline Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_VIEW:**  
View a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_CREATE:**  
Create a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_EDIT:**  
Edit a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_DELETE\_OR\_DISABLE:**  
Delete or disable a Posting.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VIEW:**  
View a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_CREATE:**  
Create a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_EDIT:**  
Edit a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_VIEW:**  
View a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_CREATE:**  
Create a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_EDIT:**  
Edit a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_VIEW:**  
View a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_CREATE:**  
Create a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_EDIT:**  
Edit a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_VIEW:**  
View a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_CREATE:**  
Create a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_EDIT:**  
Edit a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VIEW:**  
View a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_CREATE:**  
Create a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_EDIT:**  
Edit a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_VIEW:**  
View a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_CREATE:**  
Create a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_EDIT:**  
Edit a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Restriction Set Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_VIEW:**  
View a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_CREATE:**  
Create a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_EDIT:**  
Edit a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Service Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_VIEW:**  
View a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_CREATE:**  
Create a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_EDIT:**  
Edit a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TICKET\_DELETE\_OR\_DISABLE:**  
Delete or disable a Ticket.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VIEW:**  
View a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_CREATE:**  
Create a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_EDIT:**  
Edit a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Definition.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_VIEW:**  
View a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_CREATE:**  
Create a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_EDIT:**  
Edit a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Definition Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_VIEW:**  
View a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_CREATE:**  
Create a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EDIT:**  
Edit a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Instance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_VIEW:**  
View a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_CREATE:**  
Create a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_EDIT:**  
Edit a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_VIEW:**  
View an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_CREATE:**  
Create an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_EDIT:**  
Edit an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Unsolicited Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_VIEW:**  
View an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_CREATE:**  
Create an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_EDIT:**  
Edit an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR\_DELETE\_OR\_DISABLE:**  
Delete or disable an EISCD Report Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_VIEW:**  
View a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_CREATE:**  
Create a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_EDIT:**  
Edit a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR\_DELETE\_OR\_DISABLE:**  
Delete or disable a Modulus Check Weight Table Descriptor.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_VIEW:**  
View a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_CREATE:**  
Create a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_EDIT:**  
Edit a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER\_DELETE\_OR\_DISABLE:**  
Delete or disable a UK Bank Account Number.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_VIEW:**  
View a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_CREATE:**  
Create a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_EDIT:**  
Edit a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Account Migration.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_VIEW:**  
View an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_CREATE:**  
Create an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_EDIT:**  
Edit an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account Update Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_VIEW:**  
View a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_CREATE:**  
Create a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_EDIT:**  
Edit a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payment Submission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_VIEW:**  
View a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_CREATE:**  
Create a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_EDIT:**  
Edit a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Posting Instruction Batch.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_VIEW:**  
View a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_CREATE:**  
Create a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_EDIT:**  
Edit a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW:**  
View a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_CREATE:**  
Create a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_EDIT:**  
Edit a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Parameter Value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_VIEW:**  
View a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_CREATE:**  
Create a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_EDIT:**  
Edit a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_POLICY\_DELETE\_OR\_DISABLE:**  
Delete or disable a Policy.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_VIEW:**  
View a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_CREATE:**  
Create a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_EDIT:**  
Edit a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TRANSACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VIEW:**  
View a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_CREATE:**  
Create a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_EDIT:**  
Edit a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Supervisor Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_VIEW:**  
View a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_CREATE:**  
Create a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_EDIT:**  
Edit a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Supervisor Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_VIEW:**  
View a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_CREATE:**  
Create a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_EDIT:**  
Edit a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_DELETE\_OR\_DISABLE:**  
Delete or disable a Plan.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_VIEW:**  
View a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_CREATE:**  
Create a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_EDIT:**  
Edit a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Plan Update.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_VIEW:**  
View an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_CREATE:**  
Create an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_EDIT:**  
Edit an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable an Account-Plan Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_VIEW:**  
View a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_CREATE:**  
Create a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_EDIT:**  
Edit a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_NOTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Apps Note.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_VIEW:**  
View a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_CREATE:**  
Create a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_EDIT:**  
Edit a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_APPS\_WORKFLOW\_INSTANTIATION\_LINK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Apps Workflow Instantiation Link.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_VIEW:**  
View an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_CREATE:**  
Create an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_EDIT:**  
Edit an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_XPL\_TRANSACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable an Experience Layer Transaction.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_VIEW:**  
View an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_CREATE:**  
Create an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_EDIT:**  
Edit an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_DELETE\_OR\_DISABLE:**  
Delete or disable an Employee.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_VIEW:**  
View an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_CREATE:**  
Create an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_EDIT:**  
Edit an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_EMPLOYEE\_ACTION\_DELETE\_OR\_DISABLE:**  
Delete or disable an Employee Action.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VIEW:**  
View a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_CREATE:**  
Create a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_EDIT:**  
Edit a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_VIEW:**  
View a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_CREATE:**  
Create a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_EDIT:**  
Edit a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_CONTRACT\_PARAMETER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Contract Parameter.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_VIEW:**  
View a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_CREATE:**  
Create a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_EDIT:**  
Edit a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_TRANSACTION\_LEDGER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Global Transaction Ledger.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_VIEW:**  
View a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_CREATE:**  
Create a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_EDIT:**  
Edit a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_SCHEDULE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Schedule.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_VIEW:**  
View a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_CREATE:**  
Create a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_EDIT:**  
Edit a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_VIEW:**  
View a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_CREATE:**  
Create a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_EDIT:**  
Edit a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task Thread.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_VIEW:**  
View a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_CREATE:**  
Create a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_EDIT:**  
Edit a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Data Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_VIEW:**  
View a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_CREATE:**  
Create a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_EDIT:**  
Edit a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Permission.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_VIEW:**  
View a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_CREATE:**  
Create a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_EDIT:**  
Edit a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role-Vault Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_VIEW:**  
View a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_CREATE:**  
Create a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_EDIT:**  
Edit a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Role-Data Permission Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_VIEW:**  
View a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_CREATE:**  
Create a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_EDIT:**  
Edit a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY\_DELETE\_OR\_DISABLE:**  
Delete or disable a Task Thread History Entry.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_VIEW:**  
View a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_CREATE:**  
Create a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_EDIT:**  
Edit a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_WORKFLOW\_DEFINITION\_SPECIFIER\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Workflow Definition Specifier.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_VIEW:**  
View a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_CREATE:**  
Create a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_EDIT:**  
Edit a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CUSTOM\_ATTRIBUTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Custom Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VIEW:**  
View a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_CREATE:**  
Create a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_EDIT:**  
Edit a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Contract.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_VIEW:**  
View a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_CREATE:**  
Create a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_EDIT:**  
Edit a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_CONTRACT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Contract Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VIEW:**  
View a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CREATE:**  
Create a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_EDIT:**  
Edit a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_VIEW:**  
View a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_CREATE:**  
Create a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_EDIT:**  
Edit a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_VIEW:**  
View a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_CREATE:**  
Create a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_EDIT:**  
Edit a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_GROUP\_CONTRACT\_VERSION\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Group Contract Version Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_VIEW:**  
View a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_CREATE:**  
Create a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_EDIT:**  
Edit a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_ACCOUNT\_ASSOC\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product Account Association.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_VIEW:**  
View a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_CREATE:**  
Create a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_EDIT:**  
Edit a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_COMBINED\_ATTRIBUTE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Combined Attribute.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VIEW:**  
View a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_CREATE:**  
Create a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_EDIT:**  
Edit a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_VIEW:**  
View a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_CREATE:**  
Create a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_EDIT:**  
Edit a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_PRODUCT\_VERSION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Product Version.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_VIEW:**  
View a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CREATE:**  
Create a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_EDIT:**  
Edit a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub Account.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_VIEW:**  
View a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_CREATE:**  
Create a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_EDIT:**  
Edit a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_DOCUMENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Document.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_VIEW:**  
View a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_CREATE:**  
Create a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_EDIT:**  
Edit a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PAYMENTS\_HUB\_SCHEME\_MESSAGE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Payments Hub Scheme Message.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_VIEW:**  
View a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_CREATE:**  
Create a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EDIT:**  
Edit a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_DELETE\_OR\_DISABLE:**  
Delete or disable a Calendar.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_VIEW:**  
View a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_CREATE:**  
Create a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_EDIT:**  
Edit a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Calendar Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_VIEW:**  
View a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_CREATE:**  
Create a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_EDIT:**  
Edit a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_HUB\_ACCOUNT\_CONVERSION\_RULE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Product Hub conversion rule  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_VIEW:**  
View a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_CREATE:**  
Create a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_EDIT:**  
Edit a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Balance.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_VIEW:**  
View a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_CREATE:**  
Create a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_EDIT:**  
Edit a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT\_DELETE\_OR\_DISABLE:**  
Delete or disable a Workflow Instance Event.  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_VIEW:**  
View a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_CREATE:**  
Create a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_EDIT:**  
Edit a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE\_DELETE\_OR\_DISABLE:**  
Delete or disable a Ledger Balance  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_VIEW:**  
View a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_CREATE:**  
Create a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_EDIT:**  
Edit a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_VIEW:**  
View a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_CREATE:**  
Create a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_EDIT:**  
Edit a Vault Job Operation as well as retry the errored Operations  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_JOB\_OPERATION\_DELETE\_OR\_DISABLE:**  
Delete or disable a Vault Job Operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_TOPIC\_VIEW:**  
View a DLQ topic  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_MESSAGE\_CONTENT\_VIEW:**  
View DLQ topic message payload  
**ACTION\_VAULT\_OBJECT\_TYPE\_DLQ\_TOPIC\_EDIT:**  
Edit a DLQ topic as well as edit/republish DLQ messages  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC\_VIEW:**  
View an Account schedule association  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG\_VIEW:**  
View an Account schedule tag  
**ACTION\_VAULT\_OBJECT\_TYPE\_ASYNC\_OPERATION\_VIEW:**  
View an Async operation  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCES\_LIVE\_VIEW:**  
View a Balances live  
**ACTION\_VAULT\_OBJECT\_TYPE\_BALANCES\_TIME\_RANGE\_VIEW:**  
View a Balances time range  
**ACTION\_VAULT\_OBJECT\_TYPE\_BOOKKEEPING\_DATE\_VIEW:**  
View a Bookkeeping date  
**ACTION\_VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION\_VIEW:**  
View a Contract module version  
**ACTION\_VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VIEW:**  
View a Contract module  
**ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER\_VALUE\_VIEW:**  
View a Global parameter value. This field is deprecated, use ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW instead  
**Deprecated** as of release **5.3**, and will be removed no earlier than release **6.0**  
*Deprecated in favour of ACTION\_VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE\_VIEW.*  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOURNAL\_EVENT\_VIEW:**  
View a Journal event  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOURNAL\_EVENTS\_CHECKSUM\_VIEW:**  
View a Journal event checksum  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_VIEW:**  
View a Parameter value. This field is deprecated, use ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW instead  
**Deprecated** as of release **5.3**, and will be removed no earlier than release **6.0**  
*Deprecated in favour of ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW.*  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VIEW:**  
View a Parameter  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION\_VIEW:**  
View a Plan migration  
**ACTION\_VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE\_VIEW:**  
View a Plan schedule  
**ACTION\_VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE\_VIEW:**  
View a Post posting failure  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_VIEW:**  
View a Posting instruction batch  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT\_VIEW:**  
View a Postings API client  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_VIEW:**  
View a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_RESTRICTION\_VIEW:**  
View a Restriction  
**ACTION\_VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK\_VIEW:**  
View a Contract module versions link  
**ACTION\_VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES\_VIEW:**  
View a Product version parameters timeseries  
**ACTION\_VAULT\_OBJECT\_TYPE\_USAGE\_COMMIT\_VIEW:**  
View usage history  
**ACTION\_VAULT\_OBJECT\_TYPE\_ACCOUNT\_ATTRIBUTE\_VIEW:**  
View an Account attribute  
**ACTION\_VAULT\_OBJECT\_TYPE\_JOB\_VIEW:**  
View a Scheduler Job  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE\_VIEW:**  
View a Parameter Value Hierarchy Node  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_VIEW:**  
View a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_CREATE:**  
Create a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PARAMETERVALUE\_EDIT:**  
Update a Parameter value.  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_CREATE:**  
Create a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_PROCESSING\_GROUP\_EDIT:**  
Edit a Processing group  
**ACTION\_VAULT\_OBJECT\_TYPE\_DERIVED\_PARAMETER\_VALUE\_VIEW:**  
Edit a Derived Parameter Value  
**ACTION\_VAULT\_OBJECT\_TYPE\_ADJUSTMENT\_VIEW:**  
View an Adjustment  
**ACTION\_VAULT\_OBJECT\_TYPE\_ADJUSTMENT\_EDIT:**  
Edit an Adjustment  
**ACTION\_VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_CREATE:**  
Create a Posting instruction batch  
**ACTION\_VAULT\_OBJECT\_TYPE\_VAULT\_VERSION\_VIEW:**  
View a Vault version

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

## [](#roles_version_1 "Copy link to heading")Roles version 1

**Roles** are groups of one or more permissions. They are used to assign access rights to employees. [Permissions](/vault-core/5-8/EN#Permissions) are assigned to a Role to define the access granted to any employee with that Role.

chat\_bubble

The Roles version 1 system only works with employees who login with SAML.

### [](#role "Copy link to heading")Role

#### [](#available_methods_3 "Copy link to heading")Available methods

-   [List](#_access_control_api_v1_roles_ListRolesResponse_ListRoles) Lists all Roles subject to filters and pagination.
    
-   [Create](#_access_control_api_v1_roles_Role_CreateRole) Creates a Role.
    
-   [Get](#_access_control_api_v1_roles_Role_GetRole) Retrieves a Role based on the Role’s ID.
    
-   [Delete](#_google_protobuf_Empty_DeleteRole) Deactivates a Role.
    
-   [Update](#_access_control_api_v1_roles_Role_UpdateRole) Updates a Role.
    
-   [BatchGet](#_access_control_api_v1_roles_BatchGetRolesResponse_BatchGetRoles) Retrieves one or more Roles based on their IDs.
    

#### [](#_access_control_api_v1_roles_ListRolesResponse_ListRoles "Copy link to heading")List

Lists all Roles subject to filters and pagination.

**Permission Scopes:** access\_control:read, access\_control.roles:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/roles

##### [](#request_10 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**order\_by**  
  
array \[enum\]

 | 

+  
**Enum values**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_ASC**

 |
| 

**display\_names\_pattern\_match**  
  
object

 | 

Filter by using pattern matching on display names.

 |
| 

display\_names\_pattern\_match.  
**patterns\[\]**  
  
array \[string\]

 | 

A list of patterns.

 |
| 

display\_names\_pattern\_match.  
**match\_type**  
  
enum

 | 

+  
**Enum values**  
**MATCH\_TYPE\_UNKNOWN**  
**MATCH\_TYPE\_TEXT\_EXACT\_CASE\_SENSITIVE**  
  
**Default**  
**MATCH\_TYPE\_UNKNOWN**

 |
| 

**external\_references\_pattern\_match**  
  
object

 | 

Filter by using pattern matching on external references.

 |
| 

external\_references\_pattern\_match.  
**patterns\[\]**  
  
array \[string\]

 | 

A list of patterns.

 |
| 

external\_references\_pattern\_match.  
**match\_type**  
  
enum

 | 

+  
**Enum values**  
**MATCH\_TYPE\_UNKNOWN**  
**MATCH\_TYPE\_TEXT\_EXACT\_CASE\_SENSITIVE**  
  
**Default**  
**MATCH\_TYPE\_UNKNOWN**

 |
| 

**page\_size**  
  
integer

 | 

The number of roles that are to be retrieved per page.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#response "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**roles\[\]**  
  
array \[object\]

 | 

The list of returned roles.

 |
| 

roles\[\].  
**id**  
  
string

 | 

The ID of the Role.

 |
| 

roles\[\].  
**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

roles\[\].  
**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

roles\[\].  
**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |
| 

roles\[\].  
**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

roles\[\].  
**create\_timestamp**  
  
dateTime

 | 

When the Role was created.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

#### [](#_access_control_api_v1_roles_Role_CreateRole "Copy link to heading")Create

Creates a Role.

**Permission Scopes:** access\_control:write, access\_control.roles:write

**Endpoint:** POST /v1/roles

##### [](#request_11 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**role**  
  
object

 | 

The Role that is to be created. Required.

 |
| 

role.  
**id**  
  
string

 | 

The ID of the Role.

 |
| 

role.  
**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

role.  
**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

role.  
**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |

##### [](#response_2 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Role.

 |
| 

**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Role was created.

 |

#### [](#_access_control_api_v1_roles_Role_GetRole "Copy link to heading")Get

Retrieves a Role based on the Role’s ID.

**Permission Scopes:** access\_control:read, access\_control.roles:read

**Endpoint:** GET /v1/roles/{id}

##### [](#request_12 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Role that is to be retrieved.

 |

##### [](#response_3 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Role.

 |
| 

**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Role was created.

 |

#### [](#_google_protobuf_Empty_DeleteRole "Copy link to heading")Delete

Deactivates a Role.

**Permission Scopes:** access\_control:write, access\_control.roles:write

**Endpoint:** DELETE /v1/roles/{id}

##### [](#request_13 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Role that is to be deleted.

 |

##### [](#response_4 "Copy link to heading")Response

#### [](#_access_control_api_v1_roles_Role_UpdateRole "Copy link to heading")Update

Updates a Role.

**Permission Scopes:** access\_control:write, access\_control.roles:write

**Endpoint:** PUT /v1/roles/{role.id}

##### [](#request_14 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
role.  
**id**  
  
string

 | 

The ID of the Role.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**role**  
  
object

 | 

The Role that is to be updated. Required.

 |
| 

role.  
**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

role.  
**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

role.  
**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields in the resource are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#response_5 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Role.

 |
| 

**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Role was created.

 |

#### [](#_access_control_api_v1_roles_BatchGetRolesResponse_BatchGetRoles "Copy link to heading")BatchGet

Retrieves one or more Roles based on their IDs.

**Permission Scopes:** access\_control:read, access\_control.roles:read

**Endpoint:** GET /v1/roles:batchGet

##### [](#request_15 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of the IDs of roles that are to be retrieved.  
  
Required.  
Min length: 1 characters.

 |

##### [](#response_6 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**roles**  
  
map \[string: object\]

 | 

A map of Role IDs to the retrieved roles.

 |
| 

roles\[KEY\].  
**id**  
  
string

 | 

The ID of the Role.

 |
| 

roles\[KEY\].  
**display\_name**  
  
string

 | 

The display name of the Role.  
  
Required.

 |
| 

roles\[KEY\].  
**description**  
  
string

 | 

A human-readable description of the Role.

 |
| 

roles\[KEY\].  
**external\_reference**  
  
string

 | 

An external reference for the Role which can be used to link to groups in a bank’s SAML integration.

 |
| 

roles\[KEY\].  
**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

roles\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

When the Role was created.

 |

### [](#roledatapermissionassoc "Copy link to heading")RoleDataPermissionAssoc

#### [](#available_methods_4 "Copy link to heading")Available methods

-   [List](#_access_control_api_v1_roles_ListRoleDataPermissionAssocsResponse_ListRoleDataPermissionAssocs) Lists all associations between Roles and data permissions, subject to filters and pagination.
    
-   [Create](#_access_control_api_v1_roles_RoleDataPermissionAssoc_CreateRoleDataPermissionAssoc) Creates an association between a Role and a data permission.
    
-   [Get](#_access_control_api_v1_roles_RoleDataPermissionAssoc_GetRoleDataPermissionAssoc) Retrieves an association between a Role and a data permission based on the association’s ID.
    
-   [Delete](#_google_protobuf_Empty_DeleteRoleDataPermissionAssoc) Deletes an association between a Role and a data permission.
    

#### [](#_access_control_api_v1_roles_ListRoleDataPermissionAssocsResponse_ListRoleDataPermissionAssocs "Copy link to heading")List

Lists all associations between Roles and data permissions, subject to filters and pagination.

**Permission Scopes:** access\_control:read, access\_control.role\_data\_permission\_assocs:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/role-data-permission-assocs

##### [](#request_16 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**order\_by**  
  
array \[enum\]

 | 

+  
**Enum values**  
**ORDER\_BY\_ROLE\_ID\_ASC**

 |
| 

**role\_id**  
  
string

 |  |
| 

**data\_permission\_id**  
  
string

 | 

**Deprecated** as of release **2.3**, and will be removed no earlier than release **4.0**  
*Deprecated in favour of data\_permission\_ids*

 |
| 

**data\_permission\_ids**  
  
array \[string\]

 |  |
| 

**page\_size**  
  
integer

 | 

The number of associations that are to be retrieved per page.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#response_7 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**role\_data\_permission\_assocs\[\]**  
  
array \[object\]

 | 

The list of returned associations between Roles and data permissions.

 |
| 

role\_data\_permission\_assocs\[\].  
**id**  
  
string

 | 

The ID of the association between the Role and the data permission.

 |
| 

role\_data\_permission\_assocs\[\].  
**role\_id**  
  
string

 | 

The ID of the Role associated with the data permission.

 |
| 

role\_data\_permission\_assocs\[\].  
**data\_permission\_id**  
  
string

 | 

The ID of the data permission associated with the Role.

 |
| 

role\_data\_permission\_assocs\[\].  
**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

role\_data\_permission\_assocs\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when this association between the Role and the data permission was created.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

#### [](#_access_control_api_v1_roles_RoleDataPermissionAssoc_CreateRoleDataPermissionAssoc "Copy link to heading")Create

Creates an association between a Role and a data permission.

**Permission Scopes:** access\_control:write, access\_control.role\_data\_permission\_assocs:write

**Endpoint:** POST /v1/role-data-permission-assocs

##### [](#request_17 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**role\_data\_permission\_assoc**  
  
object

 | 

The association that is to be created between a Role and a data permission. Required.

 |
| 

role\_data\_permission\_assoc.  
**role\_id**  
  
string

 | 

The ID of the Role associated with the data permission.

 |
| 

role\_data\_permission\_assoc.  
**data\_permission\_id**  
  
string

 | 

The ID of the data permission associated with the Role.

 |

##### [](#response_8 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association between the Role and the data permission.

 |
| 

**role\_id**  
  
string

 | 

The ID of the Role associated with the data permission.

 |
| 

**data\_permission\_id**  
  
string

 | 

The ID of the data permission associated with the Role.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when this association between the Role and the data permission was created.

 |

#### [](#_access_control_api_v1_roles_RoleDataPermissionAssoc_GetRoleDataPermissionAssoc "Copy link to heading")Get

Retrieves an association between a Role and a data permission based on the association’s ID.

**Permission Scopes:** access\_control:read, access\_control.role\_data\_permission\_assocs:read

**Endpoint:** GET /v1/role-data-permission-assocs/{id}

##### [](#request_18 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association between a Role and a data permission that is to be retrieved.

 |

##### [](#response_9 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association between the Role and the data permission.

 |
| 

**role\_id**  
  
string

 | 

The ID of the Role associated with the data permission.

 |
| 

**data\_permission\_id**  
  
string

 | 

The ID of the data permission associated with the Role.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when this association between the Role and the data permission was created.

 |

#### [](#_google_protobuf_Empty_DeleteRoleDataPermissionAssoc "Copy link to heading")Delete

Deletes an association between a Role and a data permission.

**Permission Scopes:** access\_control:write, access\_control.role\_data\_permission\_assocs:write

**Endpoint:** DELETE /v1/role-data-permission-assocs/{id}

##### [](#request_19 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association that is to be deleted between a Role and a data permission.

 |

##### [](#response_10 "Copy link to heading")Response

### [](#rolevaultpermissionassoc "Copy link to heading")RoleVaultPermissionAssoc

#### [](#available_methods_5 "Copy link to heading")Available methods

-   [List](#_access_control_api_v1_roles_ListRoleVaultPermissionAssocsResponse_ListRoleVaultPermissionAssocs) Lists all associations between Roles and Vault permissions, subject to filters and pagination.
    
-   [Create](#_access_control_api_v1_roles_RoleVaultPermissionAssoc_CreateRoleVaultPermissionAssoc) Creates an association between a Role and a Vault permission.
    
-   [Get](#_access_control_api_v1_roles_RoleVaultPermissionAssoc_GetRoleVaultPermissionAssoc) Retrieves an association between a Role and a Vault permission based on the association’s ID.
    
-   [Delete](#_google_protobuf_Empty_DeleteRoleVaultPermissionAssoc) Deletes an association between a Role and a Vault permission.
    

#### [](#_access_control_api_v1_roles_ListRoleVaultPermissionAssocsResponse_ListRoleVaultPermissionAssocs "Copy link to heading")List

Lists all associations between Roles and Vault permissions, subject to filters and pagination.

**Permission Scopes:** access\_control:read, access\_control.role\_vault\_permission\_assocs:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/role-vault-permission-assocs

##### [](#request_20 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**order\_by**  
  
array \[enum\]

 | 

+  
**Enum values**  
**ORDER\_BY\_ROLE\_ID\_ASC**

 |
| 

**role\_id**  
  
string

 | 

Filter by Role ID.

 |
| 

**vault\_permission\_id**  
  
string

 | 

Filter by Vault permission ID.

 |
| 

**page\_size**  
  
integer

 | 

The number of associations that are to be retrieved per page.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#response_11 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**role\_vault\_permission\_assocs\[\]**  
  
array \[object\]

 | 

The list of returned Role Vault permission associations.

 |
| 

role\_vault\_permission\_assocs\[\].  
**id**  
  
string

 | 

The ID of the association between the Role and the Vault permission.

 |
| 

role\_vault\_permission\_assocs\[\].  
**role\_id**  
  
string

 | 

The ID of the Role associated with the Vault permission.

 |
| 

role\_vault\_permission\_assocs\[\].  
**vault\_permission\_id**  
  
string

 | 

The ID of the Vault permission associated with the Role.

 |
| 

role\_vault\_permission\_assocs\[\].  
**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

role\_vault\_permission\_assocs\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when this association between the Role and Vault permission was created.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

#### [](#_access_control_api_v1_roles_RoleVaultPermissionAssoc_CreateRoleVaultPermissionAssoc "Copy link to heading")Create

Creates an association between a Role and a Vault permission.

**Permission Scopes:** access\_control:write, access\_control.role\_vault\_permission\_assocs:write

**Endpoint:** POST /v1/role-vault-permission-assocs

##### [](#request_21 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**role\_vault\_permission\_assoc**  
  
object

 | 

The association that is to be created between a Role and a Vault permission. Required.

 |
| 

role\_vault\_permission\_assoc.  
**role\_id**  
  
string

 | 

The ID of the Role associated with the Vault permission.

 |
| 

role\_vault\_permission\_assoc.  
**vault\_permission\_id**  
  
string

 | 

The ID of the Vault permission associated with the Role.

 |

##### [](#response_12 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association between the Role and the Vault permission.

 |
| 

**role\_id**  
  
string

 | 

The ID of the Role associated with the Vault permission.

 |
| 

**vault\_permission\_id**  
  
string

 | 

The ID of the Vault permission associated with the Role.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when this association between the Role and Vault permission was created.

 |

#### [](#_access_control_api_v1_roles_RoleVaultPermissionAssoc_GetRoleVaultPermissionAssoc "Copy link to heading")Get

Retrieves an association between a Role and a Vault permission based on the association’s ID.

**Permission Scopes:** access\_control:read, access\_control.role\_vault\_permission\_assocs:read

**Endpoint:** GET /v1/role-vault-permission-assocs/{id}

##### [](#request_22 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association between a Role and a Vault permission that is to be retrieved.

 |

##### [](#response_13 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association between the Role and the Vault permission.

 |
| 

**role\_id**  
  
string

 | 

The ID of the Role associated with the Vault permission.

 |
| 

**vault\_permission\_id**  
  
string

 | 

The ID of the Vault permission associated with the Role.

 |
| 

**create\_time**  
  
dateTime

 | 

DEPRECATED - use `create_timestamp` instead.  
  
**Deprecated** as of release **3.3**, and will be removed no earlier than release **6.0**  
*Replaced by `create_timestamp`*

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when this association between the Role and Vault permission was created.

 |

#### [](#_google_protobuf_Empty_DeleteRoleVaultPermissionAssoc "Copy link to heading")Delete

Deletes an association between a Role and a Vault permission.

**Permission Scopes:** access\_control:write, access\_control.role\_vault\_permission\_assocs:write

**Endpoint:** DELETE /v1/role-vault-permission-assocs/{id}

##### [](#request_23 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the association that is to be deleted between a Role and a Vault permission.

 |

##### [](#response_14 "Copy link to heading")Response

## [](#roles_version_2 "Copy link to heading")Roles version 2

**Roles** are groups of one or more permissions. They are used to assign access rights to employees.

Introduced in Vault Core 5.8, Roles version 2:

-   Enables role-based access control (RBAC) with OIDC for logging users into the Vault Accounts App.
    
-   Uses scopes assigned to a Role to define the access granted to any employee with that Role.
    
-   Supports attribute-based access control (ABAC) to grant fine-grained access to an employee based on the associated financial product of a resource (such as Accounts).
    
-   Requires a product key to enable which is available upon request at no extra cost — contact your Thought Machine representative. From Vault Core 5.9, this is a standard feature and does not require enabling.
    

### [](#allowedendpoint "Copy link to heading")AllowedEndpoint

#### [](#available_methods_6 "Copy link to heading")Available methods

-   [Get](#_services_authentication_roles_GetAllowedEndpointsResponse_GetAllowedEndpoints) GetAllowedEndpoints returns a subset of the endpoints given in the request for which the current user’s privileges allow access.
    

#### [](#_services_authentication_roles_GetAllowedEndpointsResponse_GetAllowedEndpoints "Copy link to heading")Get

GetAllowedEndpoints returns a subset of the endpoints given in the request for which the current user’s privileges allow access.

chat\_bubble

Get AllowedEndpoints only checks endpoint-level scope access, and does not take into consideration resource-level ABAC privileges.

**Endpoint:** POST /v2/allowed-endpoints

##### [](#request_24 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**endpoints\[\]**  
  
array \[object\]

 | 

The list of endpoints to check if the requester is allowed to access.

 |
| 

endpoints\[\].  
**api**  
  
enum

 | 

API Service the endpoint belongs to.  
  
**Enum values**  
**API\_UNKNOWN:**  
Unknown API  
**API\_ACCESS\_CONTROL:**  
Vault Core Access Control API.  
**API\_AUDIT:**  
Vault Core Audit API.  
**API\_CORE:**  
Vault Core API.  
**API\_DATA\_LOADER:**  
Vault Core Data Loader API.  
**API\_EDGE\_FUNCTIONS:**  
Vault Core Edge Functions API.  
  
**Default**  
**API\_UNKNOWN**

 |
| 

endpoints\[\].  
**http\_method**  
  
enum

 | 

HTTP method for the endpoint.  
  
**Enum values**  
**HTTP\_METHOD\_UNKNOWN**  
**HTTP\_METHOD\_GET**  
**HTTP\_METHOD\_PUT**  
**HTTP\_METHOD\_POST**  
**HTTP\_METHOD\_DELETE**  
**HTTP\_METHOD\_PATCH**  
  
**Default**  
**HTTP\_METHOD\_UNKNOWN**

 |
| 

endpoints\[\].  
**http\_path**  
  
string

 | 

HTTP path for the endpoint. Any path parameters should be replaced by `*`.

 |

##### [](#responses_10 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**endpoints\[\]**  
  
array \[object\]

 | 

The list of endpoints from the request that the user is authorised to call.

 |
| 

endpoints\[\].  
**api**  
  
enum

 | 

API Service the endpoint belongs to.  
  
**Enum values**  
**API\_UNKNOWN:**  
Unknown API  
**API\_ACCESS\_CONTROL:**  
Vault Core Access Control API.  
**API\_AUDIT:**  
Vault Core Audit API.  
**API\_CORE:**  
Vault Core API.  
**API\_DATA\_LOADER:**  
Vault Core Data Loader API.  
**API\_EDGE\_FUNCTIONS:**  
Vault Core Edge Functions API.

 |
| 

endpoints\[\].  
**http\_method**  
  
enum

 | 

HTTP method for the endpoint.  
  
**Enum values**  
**HTTP\_METHOD\_UNKNOWN**  
**HTTP\_METHOD\_GET**  
**HTTP\_METHOD\_PUT**  
**HTTP\_METHOD\_POST**  
**HTTP\_METHOD\_DELETE**  
**HTTP\_METHOD\_PATCH**

 |
| 

endpoints\[\].  
**http\_path**  
  
string

 | 

HTTP path for the endpoint. Any path parameters should be replaced by `*`.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `BadRequest` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### BadRequest

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**field\_violations\[\]**  
  
array \[object\]

 | 

Describes all violations in a request.

 |
| 

field\_violations\[\].  
**field**  
  
string

 | 

A path leading to a field in the request body. Formatted in JSONPath, so that a 'resource' with field 'x' would return 'resource.x'.

 |
| 

field\_violations\[\].  
**violation\_type**  
  
enum

 | 

Type of violation.  
  
**Enum values**  
**UNKNOWN:**  
Default value.  
**INVALID\_FORMAT:**  
Field is not a valid format e.g. email address, UUID, IP Address, URI etc.  
**INVALID\_VALUE:**  
Indicates that a provided field is not equal to one of the specified values.  
**ABOVE\_MAX\_VALUE:**  
Field exceeds a maximum specified value.  
**BELOW\_MIN\_VALUE:**  
Field is smaller than a minimum specified value.  
**ABOVE\_MAX\_LENGTH:**  
Length is larger than a maximum specified size.  
**BELOW\_MIN\_LENGTH:**  
Length is smaller than a minimum specified size.  
**PATTERN\_MISMATCH:**  
Field value does not match the specified regex pattern.  
**PREFIX\_MISMATCH:**  
Field value does not match the specified prefix.  
**SUFFIX\_MISMATCH:**  
Field value does not match the specified suffix.  
**REQUIRED\_FIELD:**  
Field value was not populated but is required to be.  
**DUPLICATE\_VALUE:**  
All elements in this field must be unique but a duplicate value has been provided. Applies to repeated scalar fields.

 |
| 

field\_violations\[\].  
**description**  
  
string

 | 

A description of why the request field is invalid.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

### [](#role_2 "Copy link to heading")Role

#### [](#available_methods_7 "Copy link to heading")Available methods

-   [List](#_services_authentication_roles_ListRolesResponse_ListRoles) Lists all Roles subject to filters and pagination.
    
-   [Create](#_services_authentication_roles_Role_CreateRole) Creates a Role.
    
-   [Update](#_services_authentication_roles_Role_UpdateRole) Updates a Role.
    
-   [BatchGet](#_services_authentication_roles_BatchGetRolesResponse_BatchGetRoles) Retrieves one or more Roles based on their IDs.
    

#### [](#_services_authentication_roles_ListRolesResponse_ListRoles "Copy link to heading")List

Lists all Roles subject to filters and pagination.

**Permission Scopes:** access\_control:read, access\_control.roles:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /v2/roles

##### [](#request_25 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The number of roles that are to be retrieved per page. Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from. Optional.

 |
| 

**statuses**  
  
array \[enum\]

 | 

List of inclusive `Role` status filters. Optional.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.

 |
| 

**external\_references**  
  
array \[string\]

 | 

Filter only roles with at least one of the provided external references. Optional.

 |

##### [](#responses_11 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**roles\[\]**  
  
array \[object\]

 | 

The list of returned roles matching specified filters.

 |
| 

roles\[\].  
**id**  
  
string

 | 

Unique identifier of the resource. Human-readable identifier recommended. Required.

 |
| 

roles\[\].  
**display\_name**  
  
string

 | 

A user-friendly string that will be visible when viewing the resource. Required.

 |
| 

roles\[\].  
**description**  
  
string

 | 

A user-friendly description to explain what the resource is used for. Optional.

 |
| 

roles\[\].  
**status**  
  
enum

 | 

Status of the `Role`. It is only possible to authenticate against the role if this status has a value of `ROLE_STATUS_ACTIVE`.  
Defaults to `ROLE_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.

 |
| 

roles\[\].  
**external\_references\[\]**  
  
array \[string\]

 | 

External references for the `Role`. These identify the `Role` from the configured JWT claim. Optional.

 |
| 

roles\[\].  
**privileges\[\]**  
  
array \[object\]

 | 

API privileges i.e scopes associated with the `Role` and attributes the scope permissions are limited by. Required.

 |
| 

roles\[\].  
privileges\[\].  
**abac\_policies**  
  
map \[string: string\]

 | 

Rego policies for each attribute restriction on the scope. Optional.  
  
If not populated, the relevant scopes are not guarded by ABAC (Attribute Based Access Control), and the accessible resources are guarded only by the `scopes` for the accessible endpoints.

 |
| 

roles\[\].  
privileges\[\].  
**scopes\[\]**  
  
array \[string\]

 | 

Scopes identifying which API endpoints the privilege grants access to. Required.

 |
| 

roles\[\].  
**create\_timestamp**  
  
dateTime

 | 

Time that the `Role` was created. Read-only.

 |
| 

roles\[\].  
**update\_timestamp**  
  
dateTime

 | 

Time that the `Role` was last updated. Read-only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `BadRequest` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### BadRequest

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**field\_violations\[\]**  
  
array \[object\]

 | 

Describes all violations in a request.

 |
| 

field\_violations\[\].  
**field**  
  
string

 | 

A path leading to a field in the request body. Formatted in JSONPath, so that a 'resource' with field 'x' would return 'resource.x'.

 |
| 

field\_violations\[\].  
**violation\_type**  
  
enum

 | 

Type of violation.  
  
**Enum values**  
**UNKNOWN:**  
Default value.  
**INVALID\_FORMAT:**  
Field is not a valid format e.g. email address, UUID, IP Address, URI etc.  
**INVALID\_VALUE:**  
Indicates that a provided field is not equal to one of the specified values.  
**ABOVE\_MAX\_VALUE:**  
Field exceeds a maximum specified value.  
**BELOW\_MIN\_VALUE:**  
Field is smaller than a minimum specified value.  
**ABOVE\_MAX\_LENGTH:**  
Length is larger than a maximum specified size.  
**BELOW\_MIN\_LENGTH:**  
Length is smaller than a minimum specified size.  
**PATTERN\_MISMATCH:**  
Field value does not match the specified regex pattern.  
**PREFIX\_MISMATCH:**  
Field value does not match the specified prefix.  
**SUFFIX\_MISMATCH:**  
Field value does not match the specified suffix.  
**REQUIRED\_FIELD:**  
Field value was not populated but is required to be.  
**DUPLICATE\_VALUE:**  
All elements in this field must be unique but a duplicate value has been provided. Applies to repeated scalar fields.

 |
| 

field\_violations\[\].  
**description**  
  
string

 | 

A description of why the request field is invalid.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_services_authentication_roles_Role_CreateRole "Copy link to heading")Create

Creates a Role.

chat\_bubble

ABAC is not enabled by default in Vault Core. If ABAC is not enabled on the Vault Core instance, then requests that populate the `role.privileges[*].abac_policies` field will be rejected.

Requires a product key to enable which is available upon request at no extra cost — contact your Thought Machine representative. From Vault Core 5.9, this is a standard feature and does not require enabling.

**Permission Scopes:** access\_control:write, access\_control.roles:write

**Endpoint:** POST /v2/roles

##### [](#request_26 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent. Required.

 |
| 

**role**  
  
object

 | 

The `Role` that is to be created. Required.

 |
| 

role.  
**id**  
  
string

 | 

Unique identifier of the resource. Human-readable identifier recommended. Required.

 |
| 

role.  
**display\_name**  
  
string

 | 

A user-friendly string that will be visible when viewing the resource. Required.

 |
| 

role.  
**description**  
  
string

 | 

A user-friendly description to explain what the resource is used for. Optional.

 |
| 

role.  
**status**  
  
enum

 | 

Status of the `Role`. It is only possible to authenticate against the role if this status has a value of `ROLE_STATUS_ACTIVE`.  
Defaults to `ROLE_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.  
  
**Default**  
**ROLE\_STATUS\_UNKNOWN**

 |
| 

role.  
**external\_references\[\]**  
  
array \[string\]

 | 

External references for the `Role`. These identify the `Role` from the configured JWT claim. Optional.

 |
| 

role.  
**privileges\[\]**  
  
array \[object\]

 | 

API privileges i.e scopes associated with the `Role` and attributes the scope permissions are limited by. Required.

 |
| 

role.  
privileges\[\].  
**abac\_policies**  
  
map \[string: string\]

 | 

Rego policies for each attribute restriction on the scope. Optional.  
  
If not populated, the relevant scopes are not guarded by ABAC (Attribute Based Access Control), and the accessible resources are guarded only by the `scopes` for the accessible endpoints.

 |
| 

role.  
privileges\[\].  
**scopes\[\]**  
  
array \[string\]

 | 

Scopes identifying which API endpoints the privilege grants access to. Required.

 |

##### [](#responses_12 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource. Human-readable identifier recommended. Required.

 |
| 

**display\_name**  
  
string

 | 

A user-friendly string that will be visible when viewing the resource. Required.

 |
| 

**description**  
  
string

 | 

A user-friendly description to explain what the resource is used for. Optional.

 |
| 

**status**  
  
enum

 | 

Status of the `Role`. It is only possible to authenticate against the role if this status has a value of `ROLE_STATUS_ACTIVE`.  
Defaults to `ROLE_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.

 |
| 

**external\_references\[\]**  
  
array \[string\]

 | 

External references for the `Role`. These identify the `Role` from the configured JWT claim. Optional.

 |
| 

**privileges\[\]**  
  
array \[object\]

 | 

API privileges i.e scopes associated with the `Role` and attributes the scope permissions are limited by. Required.

 |
| 

privileges\[\].  
**abac\_policies**  
  
map \[string: string\]

 | 

Rego policies for each attribute restriction on the scope. Optional.  
  
If not populated, the relevant scopes are not guarded by ABAC (Attribute Based Access Control), and the accessible resources are guarded only by the `scopes` for the accessible endpoints.

 |
| 

privileges\[\].  
**scopes\[\]**  
  
array \[string\]

 | 

Scopes identifying which API endpoints the privilege grants access to. Required.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

Time that the `Role` was created. Read-only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

Time that the `Role` was last updated. Read-only.

 |

400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned when another Role with the same external\_reference exists.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `PreconditionFailure` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### PreconditionFailure

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**violations\[\]**  
  
array \[object\]

 | 

Describes all precondition violations.

 |
| 

violations\[\].  
**violation\_type**  
  
string

 | 

Type of violation, specific to the resource or API and can be used to programmatically handle the error. Formatted in upper case, e.g. "RESOURCE\_INACTIVE".

 |
| 

violations\[\].  
**metadata**  
  
map \[string: string\]

 | 

Additional structured details about this error.  
  
**Metadata values**  
**existing\_role.id:**  
ID of the existing Role.  
**field\_path:**  
Field path of the conflicting value in the requested Role.  
**external\_reference:**  
Value of the conflicting external reference.

 |

Returned on receipt of invalid input regardless of the system state.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `BadRequest` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### BadRequest

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**field\_violations\[\]**  
  
array \[object\]

 | 

Describes all violations in a request.

 |
| 

field\_violations\[\].  
**field**  
  
string

 | 

A path leading to a field in the request body. Formatted in JSONPath, so that a 'resource' with field 'x' would return 'resource.x'.

 |
| 

field\_violations\[\].  
**violation\_type**  
  
enum

 | 

Type of violation.  
  
**Enum values**  
**UNKNOWN:**  
Default value.  
**INVALID\_FORMAT:**  
Field is not a valid format e.g. email address, UUID, IP Address, URI etc.  
**INVALID\_VALUE:**  
Indicates that a provided field is not equal to one of the specified values.  
**ABOVE\_MAX\_VALUE:**  
Field exceeds a maximum specified value.  
**BELOW\_MIN\_VALUE:**  
Field is smaller than a minimum specified value.  
**ABOVE\_MAX\_LENGTH:**  
Length is larger than a maximum specified size.  
**BELOW\_MIN\_LENGTH:**  
Length is smaller than a minimum specified size.  
**PATTERN\_MISMATCH:**  
Field value does not match the specified regex pattern.  
**PREFIX\_MISMATCH:**  
Field value does not match the specified prefix.  
**SUFFIX\_MISMATCH:**  
Field value does not match the specified suffix.  
**REQUIRED\_FIELD:**  
Field value was not populated but is required to be.  
**DUPLICATE\_VALUE:**  
All elements in this field must be unique but a duplicate value has been provided. Applies to repeated scalar fields.

 |
| 

field\_violations\[\].  
**description**  
  
string

 | 

A description of why the request field is invalid.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a Role with same id already exists.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `ResourceInfo` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### ResourceInfo

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**resource\_ids\[\]**  
  
array \[string\]

 | 

The identifier of the resources being accessed.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_services_authentication_roles_Role_UpdateRole "Copy link to heading")Update

Updates a Role.

chat\_bubble

ABAC is not enabled by default in Vault Core. If ABAC is not enabled on the Vault Core instance, then requests that populate the `role.privileges[*].abac_policies` field will be rejected.

**Permission Scopes:** access\_control:write, access\_control.roles:write

**Endpoint:** PUT /v2/roles/{role.id}

##### [](#request_27 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
role.  
**id**  
  
string

 | 

Unique identifier of the resource. Human-readable identifier recommended. Required.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The ID used to ensure this request is idempotent. Required.

 |
| 

**role**  
  
object

 | 

The `Role` that is to be updated. Required.

 |
| 

role.  
**display\_name**  
  
string

 | 

A user-friendly string that will be visible when viewing the resource. Required.

 |
| 

role.  
**description**  
  
string

 | 

A user-friendly description to explain what the resource is used for. Optional.

 |
| 

role.  
**status**  
  
enum

 | 

Status of the `Role`. It is only possible to authenticate against the role if this status has a value of `ROLE_STATUS_ACTIVE`.  
Defaults to `ROLE_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.  
  
**Default**  
**ROLE\_STATUS\_UNKNOWN**

 |
| 

role.  
**external\_references\[\]**  
  
array \[string\]

 | 

External references for the `Role`. These identify the `Role` from the configured JWT claim. Optional.

 |
| 

role.  
**privileges\[\]**  
  
array \[object\]

 | 

API privileges i.e scopes associated with the `Role` and attributes the scope permissions are limited by. Required.

 |
| 

role.  
privileges\[\].  
**abac\_policies**  
  
map \[string: string\]

 | 

Rego policies for each attribute restriction on the scope. Optional.  
  
If not populated, the relevant scopes are not guarded by ABAC (Attribute Based Access Control), and the accessible resources are guarded only by the `scopes` for the accessible endpoints.

 |
| 

role.  
privileges\[\].  
**scopes\[\]**  
  
array \[string\]

 | 

Scopes identifying which API endpoints the privilege grants access to. Required.

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields in the resource are to be updated. Required.  
  
The allowed field paths are: `display_name`, `description`, `external_references`, `privileges`, `status`.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#responses_13 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource. Human-readable identifier recommended. Required.

 |
| 

**display\_name**  
  
string

 | 

A user-friendly string that will be visible when viewing the resource. Required.

 |
| 

**description**  
  
string

 | 

A user-friendly description to explain what the resource is used for. Optional.

 |
| 

**status**  
  
enum

 | 

Status of the `Role`. It is only possible to authenticate against the role if this status has a value of `ROLE_STATUS_ACTIVE`.  
Defaults to `ROLE_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.

 |
| 

**external\_references\[\]**  
  
array \[string\]

 | 

External references for the `Role`. These identify the `Role` from the configured JWT claim. Optional.

 |
| 

**privileges\[\]**  
  
array \[object\]

 | 

API privileges i.e scopes associated with the `Role` and attributes the scope permissions are limited by. Required.

 |
| 

privileges\[\].  
**abac\_policies**  
  
map \[string: string\]

 | 

Rego policies for each attribute restriction on the scope. Optional.  
  
If not populated, the relevant scopes are not guarded by ABAC (Attribute Based Access Control), and the accessible resources are guarded only by the `scopes` for the accessible endpoints.

 |
| 

privileges\[\].  
**scopes\[\]**  
  
array \[string\]

 | 

Scopes identifying which API endpoints the privilege grants access to. Required.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

Time that the `Role` was created. Read-only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

Time that the `Role` was last updated. Read-only.

 |

400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned when another Role with the same external\_reference exists.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `PreconditionFailure` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### PreconditionFailure

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**violations\[\]**  
  
array \[object\]

 | 

Describes all precondition violations.

 |
| 

violations\[\].  
**violation\_type**  
  
string

 | 

Type of violation, specific to the resource or API and can be used to programmatically handle the error. Formatted in upper case, e.g. "RESOURCE\_INACTIVE".

 |
| 

violations\[\].  
**metadata**  
  
map \[string: string\]

 | 

Additional structured details about this error.  
  
**Metadata values**  
**existing\_role.id:**  
ID of the existing Role.  
**field\_path:**  
Field path of the conflicting value in the requested Role.  
**external\_reference:**  
Value of the conflicting external reference.

 |

Returned on receipt of invalid input regardless of the system state.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `BadRequest` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### BadRequest

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**field\_violations\[\]**  
  
array \[object\]

 | 

Describes all violations in a request.

 |
| 

field\_violations\[\].  
**field**  
  
string

 | 

A path leading to a field in the request body. Formatted in JSONPath, so that a 'resource' with field 'x' would return 'resource.x'.

 |
| 

field\_violations\[\].  
**violation\_type**  
  
enum

 | 

Type of violation.  
  
**Enum values**  
**UNKNOWN:**  
Default value.  
**INVALID\_FORMAT:**  
Field is not a valid format e.g. email address, UUID, IP Address, URI etc.  
**INVALID\_VALUE:**  
Indicates that a provided field is not equal to one of the specified values.  
**ABOVE\_MAX\_VALUE:**  
Field exceeds a maximum specified value.  
**BELOW\_MIN\_VALUE:**  
Field is smaller than a minimum specified value.  
**ABOVE\_MAX\_LENGTH:**  
Length is larger than a maximum specified size.  
**BELOW\_MIN\_LENGTH:**  
Length is smaller than a minimum specified size.  
**PATTERN\_MISMATCH:**  
Field value does not match the specified regex pattern.  
**PREFIX\_MISMATCH:**  
Field value does not match the specified prefix.  
**SUFFIX\_MISMATCH:**  
Field value does not match the specified suffix.  
**REQUIRED\_FIELD:**  
Field value was not populated but is required to be.  
**DUPLICATE\_VALUE:**  
All elements in this field must be unique but a duplicate value has been provided. Applies to repeated scalar fields.

 |
| 

field\_violations\[\].  
**description**  
  
string

 | 

A description of why the request field is invalid.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on the resource being retrieved or mutated not being found.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `ResourceInfo` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### ResourceInfo

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**resource\_ids\[\]**  
  
array \[string\]

 | 

The identifier of the resources being accessed.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_services_authentication_roles_BatchGetRolesResponse_BatchGetRoles "Copy link to heading")BatchGet

Retrieves one or more Roles based on their IDs.

**Permission Scopes:** access\_control:read, access\_control.roles:read

**Endpoint:** GET /v2/roles:batchGet

##### [](#request_28 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of the IDs of `Role`s that are to be retrieved. Required.

 |

##### [](#responses_14 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**roles**  
  
map \[string: object\]

 | 

A map of `Role` IDs to the retrieved roles.

 |
| 

roles\[KEY\].  
**id**  
  
string

 | 

Unique identifier of the resource. Human-readable identifier recommended. Required.

 |
| 

roles\[KEY\].  
**display\_name**  
  
string

 | 

A user-friendly string that will be visible when viewing the resource. Required.

 |
| 

roles\[KEY\].  
**description**  
  
string

 | 

A user-friendly description to explain what the resource is used for. Optional.

 |
| 

roles\[KEY\].  
**status**  
  
enum

 | 

Status of the `Role`. It is only possible to authenticate against the role if this status has a value of `ROLE_STATUS_ACTIVE`.  
Defaults to `ROLE_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**ROLE\_STATUS\_UNKNOWN:**  
The `Role` zero value - should not explicitly be used or seen in any valid responses.  
**ROLE\_STATUS\_ACTIVE:**  
The `Role` is active and available for authentication.  
**ROLE\_STATUS\_INACTIVE:**  
The `Role` is inactive and not available for authentication.

 |
| 

roles\[KEY\].  
**external\_references\[\]**  
  
array \[string\]

 | 

External references for the `Role`. These identify the `Role` from the configured JWT claim. Optional.

 |
| 

roles\[KEY\].  
**privileges\[\]**  
  
array \[object\]

 | 

API privileges i.e scopes associated with the `Role` and attributes the scope permissions are limited by. Required.

 |
| 

roles\[KEY\].  
privileges\[\].  
**abac\_policies**  
  
map \[string: string\]

 | 

Rego policies for each attribute restriction on the scope. Optional.  
  
If not populated, the relevant scopes are not guarded by ABAC (Attribute Based Access Control), and the accessible resources are guarded only by the `scopes` for the accessible endpoints.

 |
| 

roles\[KEY\].  
privileges\[\].  
**scopes\[\]**  
  
array \[string\]

 | 

Scopes identifying which API endpoints the privilege grants access to. Required.

 |
| 

roles\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

Time that the `Role` was created. Read-only.

 |
| 

roles\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

Time that the `Role` was last updated. Read-only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `BadRequest` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### BadRequest

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**field\_violations\[\]**  
  
array \[object\]

 | 

Describes all violations in a request.

 |
| 

field\_violations\[\].  
**field**  
  
string

 | 

A path leading to a field in the request body. Formatted in JSONPath, so that a 'resource' with field 'x' would return 'resource.x'.

 |
| 

field\_violations\[\].  
**violation\_type**  
  
enum

 | 

Type of violation.  
  
**Enum values**  
**UNKNOWN:**  
Default value.  
**INVALID\_FORMAT:**  
Field is not a valid format e.g. email address, UUID, IP Address, URI etc.  
**INVALID\_VALUE:**  
Indicates that a provided field is not equal to one of the specified values.  
**ABOVE\_MAX\_VALUE:**  
Field exceeds a maximum specified value.  
**BELOW\_MIN\_VALUE:**  
Field is smaller than a minimum specified value.  
**ABOVE\_MAX\_LENGTH:**  
Length is larger than a maximum specified size.  
**BELOW\_MIN\_LENGTH:**  
Length is smaller than a minimum specified size.  
**PATTERN\_MISMATCH:**  
Field value does not match the specified regex pattern.  
**PREFIX\_MISMATCH:**  
Field value does not match the specified prefix.  
**SUFFIX\_MISMATCH:**  
Field value does not match the specified suffix.  
**REQUIRED\_FIELD:**  
Field value was not populated but is required to be.  
**DUPLICATE\_VALUE:**  
All elements in this field must be unique but a duplicate value has been provided. Applies to repeated scalar fields.

 |
| 

field\_violations\[\].  
**description**  
  
string

 | 

A description of why the request field is invalid.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on the resource being retrieved or mutated not being found.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |
| 

**details\[\]**  
  
array \[object\]

 | 

Details of the error. It can contain `ResourceInfo` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### ResourceInfo

 
| Name | Description |
| --- | --- |
| 
**@type**  
  
string

 | 

A type name to identify this detail.

 |
| 

**resource\_ids\[\]**  
  
array \[string\]

 | 

The identifier of the resources being accessed.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |