---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/api/edge_functions_api"
title: "Edge Functions API"
scraped_at: "2026-06-22T19:16:25.716Z"
images: 0
---

# Edge Functions API

The Vault Edge Functions API is RESTful. It uses predictable and resource-oriented URLs with standard HTTP methods and status codes. Responses are in JSON format.

For an overview of the general features of all APIs, see [Vault Core API Overview](/vault-core/5-9/EN/api/overview/).

## [](#downloading_the_openapi_definition_file "Copy link to heading")Downloading the OpenAPI definition file

The OpenAPI definition is an Interface Description Language for describing RESTful APIs expressed in JSON format.

info

The Edge Functions API is available in this format. You can download it here:

Download download

The specification includes Thought Machine-specific extensions that are not standard to OpenAPI. The generation method of the specification and resulting naming, paths and schemas are subject to change. For more information about the OpenAPI specification see the [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3).

## [](#edge_functions "Copy link to heading")Edge Functions

Edge Functions are configuration layer components that enhance your integration and implementation capabilities, linking a bank’s internal API gateway and Vault Core API to Vault Core. Consolidate multiple direct API calls into product-specific, task-based functions that you can execute with a single synchronous API call. Or configure Edge Functions to execute upon an event in Vault Core by creating an [Edge Function Trigger](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/triggers_overview/).

To learn more about getting started and how to write, test, manage, and observe Edge Functions, see the [Edge Functions documentation](/vault-core/5-9/EN/reference/edge_functions/).

### [](#edgefunction "Copy link to heading")EdgeFunction

#### [](#available_methods "Copy link to heading")Available methods

-   [List](#_edge_functions_api_v1_ListEdgeFunctionsResponse_ListEdgeFunctions) Lists filtered `EdgeFunction` resources.
    
-   [Create](#_edge_functions_api_v1_EdgeFunction_CreateEdgeFunction) Creates an `EdgeFunction` resource with its initial `EdgeFunctionVersion`.
    
-   [Update](#_edge_functions_api_v1_EdgeFunction_UpdateEdgeFunction) Updates an existing `EdgeFunction` resource.
    
-   [Execute](#_edge_functions_api_v1_EdgeFunctionExecution_ExecuteEdgeFunction) Executes the `EdgeFunction` resource for the provided Edge Function ID and Edge Function version tag.
    
-   [Get](#_edge_functions_api_v1_EdgeFunction_GetEdgeFunction) Retrieves a single `EdgeFunction` resource for the provided ID with all fields populated.
    
-   [BatchGet](#_edge_functions_api_v1_BatchGetEdgeFunctionsResponse_BatchGetEdgeFunctions) Retrieves `EdgeFunction` resources for the provided IDs.
    

#### [](#_edge_functions_api_v1_ListEdgeFunctionsResponse_ListEdgeFunctions "Copy link to heading")List

Lists filtered `EdgeFunction` resources.  
The `current_edge_function_version.code` field of each `EdgeFunction` resource is excluded by default since this may be large. You can include this field by using the `fields_to_include` field of the request with `INCLUDE_FIELD_CURRENT_VERSION_CODE` value.  
The response contains results sorted by `EdgeFunction.create_timestamp` in reverse time order (newest first).

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_functions:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /v1/edge-functions

##### [](#request "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**statuses**  
  
array \[enum\]

 | 

List of inclusive OR `EdgeFunction` status filters. These must be URL-encoded. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Fields to include in the response that are omitted by default. Optional.  
  
**Enum values**  
**INCLUDE\_FIELD\_CURRENT\_VERSION\_CODE:**  
Include the `code` field of `EdgeFunction.current_edge_function_version` messages.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to list. Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If it is empty, the first page of results is returned. Optional.

 |

##### [](#responses "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_functions\[\]**  
  
array \[object\]

 | 

The `EdgeFunctions` matching the specified filters.

 |
| 

edge\_functions\[\].  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunction`. Required.

 |
| 

edge\_functions\[\].  
**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

edge\_functions\[\].  
**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

edge\_functions\[\].  
current\_edge\_function\_version.  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |
| 

edge\_functions\[\].  
**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.

 |
| 

edge\_functions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_functions\[\].  
**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token to retrieve results from the previous page. If it is empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token to retrieve the next page. If empty, this is the last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

#### [](#_edge_functions_api_v1_EdgeFunction_CreateEdgeFunction "Copy link to heading")Create

Creates an `EdgeFunction` resource with its initial `EdgeFunctionVersion`. You can create Edge Functions with an `EDGE_FUNCTION_STATUS_ACTIVE` or `EDGE_FUNCTION_STATUS_INACTIVE` status, but they must always have at least one `EdgeFunctionVersion` that contains valid Edge Function source code.

**Permission Scopes:** edge\_functions:write, edge\_functions.edge\_functions:write, edge\_functions.edge\_functions:create

**Endpoint:** POST /v1/edge-functions

##### [](#request_2 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique ID to ensure that the request is idempotent. Required.

 |
| 

**edge\_function**  
  
object

 | 

The `EdgeFunction` to create. Required.

 |
| 

edge\_function.  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunction`. Required.

 |
| 

edge\_function.  
**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

edge\_function.  
**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

edge\_function.  
current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

edge\_function.  
current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

edge\_function.  
**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.  
  
**Default**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN**

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

Unique human-readable identifier for the `EdgeFunction`. Required.

 |
| 

**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

current\_edge\_function\_version.  
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

current\_edge\_function\_version.  
**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

current\_edge\_function\_version.  
**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

current\_edge\_function\_version.  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |
| 

**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned if `edge_function.current_edge_function_version.code` field contains invalid Edge Function source code. The error `details` list will also include an entry with `"@type": "type.googleapis.com/errors.BadRequest"` for the request field.

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

Details of the error. It can contain `InvalidCode` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### InvalidCode

 
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

Individual causes for invalidity of the source code.

 |
| 

violations\[\].  
**violation\_type**  
  
string

 | 

Broad category of CodeViolation. For example, DisallowedError, DefinitionError, SyntaxError (this list is not exhaustive).

 |
| 

violations\[\].  
**code**  
  
string

 | 

The offending portion of source code. Empty if unknown or not applicable.

 |
| 

violations\[\].  
**description**  
  
string

 | 

A human-readable description of the CodeViolation.

 |
| 

violations\[\].  
**lineno**  
  
integer

 | 

Starting line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**offset**  
  
integer

 | 

Starting character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**end\_lineno**  
  
integer

 | 

Ending line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**end\_offset**  
  
integer

 | 

Ending character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |

Returned on receipt of invalid input regardless of the system state

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

Returned when an Edge Function with same ID already exists

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

#### [](#_edge_functions_api_v1_EdgeFunction_UpdateEdgeFunction "Copy link to heading")Update

Updates an existing `EdgeFunction` resource.  
You can use this to update the `status`, `description` or `current_edge_function_version` of the `EdgeFunction`.  
  
You can update the current version of the `EdgeFunction` to an **existing** `EdgeFunctionVersion` by only populating `edge_function.current_edge_function_version.tag` in the request to the `tag` of an existing child `EdgeFunctionVersion`.  
  
Alternatively, you can update the current version of the `EdgeFunction` to **a new** `EdgeFunctionVersion` by populating the `code` and `tag` properties of `edge_function.current_edge_function_version` in the request. The `tag` value should be a unique value that is not already in use by an existing child `EdgeFunctionVersion` of the specified `EdgeFunction`. It is an error to specify `code` without also specifying a new value for `tag`.  
Using this single `EdgeFunction` **Update** call is equivalent to making these two calls consecutively:  
1) Using `EdgeFunctionVersion` **Create**, which creates a child `EdgeFunctionVersion` that is not the current version of the parent `EdgeFunction`.  
2) Using `EdgeFunction` **Update** to update the parent `EdgeFunction` to use the newly-created `EdgeFunctionVersion` as its `current_edge_function_version`.  
  
In all cases, you should only use the updated fields in the request if they are listed in the `update_mask.paths` of the request.

**Permission Scopes:** edge\_functions:write, edge\_functions.edge\_functions:write, edge\_functions.edge\_functions:update

**Endpoint:** PUT /v1/edge-functions/{edge\_function.id}

##### [](#request_3 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
edge\_function.  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunction`. Required.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique ID to ensure that the request is idempotent. Required.

 |
| 

**edge\_function**  
  
object

 | 

`EdgeFunction` to update. `id` must be a valid value for an existing `EdgeFunction`. Required.

 |
| 

edge\_function.  
**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

edge\_function.  
**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

edge\_function.  
current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

edge\_function.  
current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

edge\_function.  
**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.  
  
**Default**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN**

 |
| 

**update\_mask**  
  
object

 | 

The field masks of the fields in the resource to update. Required. The allowed field paths are: `description`, `current_edge_function_version.tag`, `current_edge_function_version.code`, `status`

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

Unique human-readable identifier for the `EdgeFunction`. Required.

 |
| 

**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

current\_edge\_function\_version.  
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

current\_edge\_function\_version.  
**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

current\_edge\_function\_version.  
**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

current\_edge\_function\_version.  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |
| 

**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned if `edge_function.current_edge_function_version.code` field contains invalid Edge Function source code. The error `details` list will also include an entry with `"@type": "type.googleapis.com/errors.BadRequest"` for the request field.

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

Details of the error. It can contain `InvalidCode` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### InvalidCode

 
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

Individual causes for invalidity of the source code.

 |
| 

violations\[\].  
**violation\_type**  
  
string

 | 

Broad category of CodeViolation. For example, DisallowedError, DefinitionError, SyntaxError (this list is not exhaustive).

 |
| 

violations\[\].  
**code**  
  
string

 | 

The offending portion of source code. Empty if unknown or not applicable.

 |
| 

violations\[\].  
**description**  
  
string

 | 

A human-readable description of the CodeViolation.

 |
| 

violations\[\].  
**lineno**  
  
integer

 | 

Starting line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**offset**  
  
integer

 | 

Starting character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**end\_lineno**  
  
integer

 | 

Ending line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**end\_offset**  
  
integer

 | 

Ending character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunctionExecution_ExecuteEdgeFunction "Copy link to heading")Execute

Executes the `EdgeFunction` resource for the provided Edge Function ID and Edge Function version tag. The response contains either a `response` field with the successful response from executing the Edge Function or `error` for the error response from executing the Edge Function.

**Permission Scopes:** edge\_functions:execute, edge\_functions.edge\_functions:execute

**Endpoint:** POST /v1/edge-functions/{edge\_function\_id}:execute

##### [](#request_4 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. Required.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_version\_tag**  
  
string

 | 

Specify the `EdgeFunctionVersion` to execute. If you omit a version, then it defaults to the `EdgeFunctionVersion` that is set as the current version of the specified Edge Function. Optional.

 |
| 

**idempotency\_key**  
  
string

 | 

Idempotency key to provide to the `EdgeFunctionExecution`. You should use this to ensure idempotency on any requests made within the Edge Function source code. Required.

 |
| 

**request**  
  
object

 | 

JSON structured data that is provided to the Edge Function source code on execution. This is validated against JSON Schema indicated by `request_schema` field of the `EdgeFunctionVersion` generated from the Edge Function source code. This is only optional if the `request_schema` is empty.

 |
| 

**store\_successful\_response**  
  
boolean

 | 

Determines whether to persist the response payload of successful executions. False by default. Optional.

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

Unique identifer for the `EdgeFunctionExecution`. Output only.

 |
| 

**edge\_function\_id**  
  
string

 | 

`EdgeFunction` ID of the executed `EdgeFunctionVersion`. Output only.

 |
| 

**edge\_function\_version\_tag**  
  
string

 | 

Version tag of the executed `EdgeFunctionVersion`. Output only.

 |
| 

**idempotency\_key**  
  
string

 | 

Idempotency key provided for the `EdgeFunctionExecution`. Output only.

 |
| 

**request**  
  
object

 | 

Request payload (manual or kafka message in case of a trigger) passed to the Edge Function for this execution. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The time at which this execution record was created and the execution was initiated. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

Time at which this execution record was last updated (e.g., when status changed). Initially set to `create_timestamp`. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**status**  
  
enum

 | 

Current status of this Edge Function execution. Starts as `INCOMPLETE` and transitions to a terminal state (e.g., `SUCCEEDED`, `FAILED`). It may remain `INCOMPLETE` if the execution request failed before a final state could be recorded.  
  
**Enum values**  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNKNOWN:**  
The EdgeFunctionExecutionStatus zero value - should not explicitly be used or seen in any valid responses. Indicates an unknown or unspecified status. Error.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_INCOMPLETE:**  
Execution is incomplete or its final state is not yet recorded. This is the default initial state.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED\_TRANSIENT:**  
Execution failed due to a temporary condition; retrying the operation that led to this execution might succeed.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED:**  
Execution has failed due to a non-transient issue.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_SUCCEEDED:**  
Execution has completed successfully.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNDETERMINED:**  
Execution status is undetermined, possibly due to an issue in the execution environment preventing a definitive success or failure state from being recorded.

 |
| 

**edge\_function\_trigger\_operation\_id**  
  
string

 | 

ID of the `EdgeFunctionTriggerOperation` that initiated this execution, if applicable. This field links the execution to the specific trigger operation that caused it. Will be empty if the execution was triggered directly via the `ExecuteEdgeFunction` RPC.

 |
| 

**response**  
  
object

 | 

Response returned from the Edge Function. For List/Get requests, this is never populated. For Execution requests, this will be populated if the execution was successful. Output only.  
  
*The result of the execution that will have `response` for success or `error` for failure  
  
This can contain one of **response** or error*

 |
| 

**error**  
  
object

 | 

Error from a failed Edge Function Execution. This is populated if the execution failed. Output only.  
  
*The result of the execution that will have `response` for success or `error` for failure  
  
This can contain one of response or **error***

 |
| 

error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |

400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned when the Edge Function Version for Edge Function ID and/or tag is not found

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

 |

Returned when the status of the Edge Function for the specified Edge Function ID is not active

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

 |

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunction_GetEdgeFunction "Copy link to heading")Get

Retrieves a single `EdgeFunction` resource for the provided ID with all fields populated.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_functions:read

**Endpoint:** GET /v1/edge-functions/{id}

##### [](#request_5 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

ID of the `EdgeFunction` to retrieve. Required.

 |

##### [](#responses_5 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunction`. Required.

 |
| 

**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

current\_edge\_function\_version.  
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

current\_edge\_function\_version.  
**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

current\_edge\_function\_version.  
**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

current\_edge\_function\_version.  
**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

current\_edge\_function\_version.  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |
| 

**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_BatchGetEdgeFunctionsResponse_BatchGetEdgeFunctions "Copy link to heading")BatchGet

Retrieves `EdgeFunction` resources for the provided IDs.  
The `current_edge_function_version.code` field of each `EdgeFunction` resource is excluded by default since this may be large. You can include this field by using the `fields_to_include` field of the request with `INCLUDE_FIELD_CURRENT_VERSION_CODE` value.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_functions:read

**Endpoint:** GET /v1/edge-functions:batchGet

##### [](#request_6 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

IDs of `EdgeFunctions` to retrieve. Allows a maximum number of 100 values. Required.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Fields to include in the response that are omitted by default. Optional.  
  
**Enum values**  
**INCLUDE\_FIELD\_CURRENT\_VERSION\_CODE:**  
Include the `code` field of `EdgeFunction.current_edge_function_version` messages.

 |

##### [](#responses_6 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_functions**  
  
map \[string: object\]

 | 

`EdgeFunctions` keyed by ID.

 |
| 

edge\_functions\[KEY\].  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunction`. Required.

 |
| 

edge\_functions\[KEY\].  
**description**  
  
string

 | 

Description of the `EdgeFunction`. Optional.

 |
| 

edge\_functions\[KEY\].  
**current\_edge\_function\_version**  
  
object

 | 

Current version of the `EdgeFunction`. This contains the Edge Function source code to execute by default. `EdgeFunctionVersion` is immutable; therefore, you must always create a new version to update the Edge Function with new executable source code. Required.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

edge\_functions\[KEY\].  
current\_edge\_function\_version.  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |
| 

edge\_functions\[KEY\].  
**status**  
  
enum

 | 

Status of the `EdgeFunction`. It is only possible to execute child Edge Function Versions if this status has a value of `EDGE_FUNCTION_STATUS_ACTIVE`.  
Defaults to `EDGE_FUNCTION_STATUS_ACTIVE` on creation.  
  
**Enum values**  
**EDGE\_FUNCTION\_STATUS\_UNKNOWN:**  
The Edge Function zero value - should not explicitly be used or seen in any valid responses.  
**EDGE\_FUNCTION\_STATUS\_ACTIVE:**  
The Edge Function is active and available to execute. Default.  
**EDGE\_FUNCTION\_STATUS\_INACTIVE:**  
The Edge Function is inactive and not available to execute.

 |
| 

edge\_functions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_functions\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunction` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

### [](#edgefunctionexecution "Copy link to heading")EdgeFunctionExecution

#### [](#available_methods_2 "Copy link to heading")Available methods

-   [List](#_edge_functions_api_v1_ListEdgeFunctionExecutionsResponse_ListEdgeFunctionExecutions) Lists filtered `EdgeFunctionExecution` resources for specific Edge Functions.
    
-   [Get](#_edge_functions_api_v1_EdgeFunctionExecution_GetEdgeFunctionExecution) Retrieves an `EdgeFunctionExecution` resource.
    
-   [BatchGet](#_edge_functions_api_v1_BatchGetEdgeFunctionExecutionsResponse_BatchGetEdgeFunctionExecutions) Retrieves `EdgeFunctionExecution` resources for the provided IDs.
    

#### [](#_edge_functions_api_v1_ListEdgeFunctionExecutionsResponse_ListEdgeFunctionExecutions "Copy link to heading")List

Lists filtered `EdgeFunctionExecution` resources for specific Edge Functions.  
The `error.details` field of each `EdgeFunctionExecution` resource is excluded by default since this may be large. You can include this field by using the `fields_to_include` field of the request with `INCLUDE_FIELD_ERROR_DETAILS` value.  
The response contains results sorted by `EdgeFunctionExecution.create_timestamp` in reverse time order (newest first).

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_executions:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /v1/edge-function-executions

##### [](#request_7 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_ids**  
  
array \[string\]

 | 

`EdgeFunction` IDs of the executed `EdgeFunctionVersion`. You can supply at most one ID to filter by. Optional.

 |
| 

**edge\_function\_version\_tags**  
  
array \[string\]

 | 

Version tags of the executed `EdgeFunctionVersion`. Optional.

 |
| 

**error\_codes**  
  
array \[string\]

 | 

Error codes to filter `EdgeFunctionExecution` resources. Optional.

 |
| 

**create\_timestamp\_range**  
  
object

 | 

Only return executions with a create\_timestamp that overlaps with the `create_timestamp_range`. The `from` timestamp is inclusive and the `to` timestamp is exclusive. Optional.

 |
| 

create\_timestamp\_range.  
**from**  
  
dateTime

 | 

Lower end of the range. The range is inclusive of its lower end.

 |
| 

create\_timestamp\_range.  
**to**  
  
dateTime

 | 

Upper end of the range. The range is exclusive of its upper end.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Fields to include in the response that are omitted by default. Optional.  
  
**Enum values**  
**INCLUDE\_FIELD\_ERROR\_DETAILS:**  
Include the `error.details` field of `EdgeFunctionExecution` messages.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to list. Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page that the results are retrieved from. If it is empty, the first page of results is returned. Optional.

 |
| 

**statuses**  
  
array \[enum\]

 | 

List of `EdgeFunctionExecution` statuses to filter by. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNKNOWN:**  
The EdgeFunctionExecutionStatus zero value - should not explicitly be used or seen in any valid responses. Indicates an unknown or unspecified status. Error.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_INCOMPLETE:**  
Execution is incomplete or its final state is not yet recorded. This is the default initial state.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED\_TRANSIENT:**  
Execution failed due to a temporary condition; retrying the operation that led to this execution might succeed.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED:**  
Execution has failed due to a non-transient issue.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_SUCCEEDED:**  
Execution has completed successfully.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNDETERMINED:**  
Execution status is undetermined, possibly due to an issue in the execution environment preventing a definitive success or failure state from being recorded.

 |
| 

**edge\_function\_trigger\_operation\_ids**  
  
array \[string\]

 | 

List of `EdgeFunctionTriggerOperation` IDs to filter `EdgeFunctionExecution` records by. This allows finding all executions that were initiated by specific trigger operations. Optional.

 |

##### [](#responses_7 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_function\_executions\[\]**  
  
array \[object\]

 | 

The `EdgeFunctionExecution` resources matching the specified filters.

 |
| 

edge\_function\_executions\[\].  
**id**  
  
string

 | 

Unique identifer for the `EdgeFunctionExecution`. Output only.

 |
| 

edge\_function\_executions\[\].  
**edge\_function\_id**  
  
string

 | 

`EdgeFunction` ID of the executed `EdgeFunctionVersion`. Output only.

 |
| 

edge\_function\_executions\[\].  
**edge\_function\_version\_tag**  
  
string

 | 

Version tag of the executed `EdgeFunctionVersion`. Output only.

 |
| 

edge\_function\_executions\[\].  
**idempotency\_key**  
  
string

 | 

Idempotency key provided for the `EdgeFunctionExecution`. Output only.

 |
| 

edge\_function\_executions\[\].  
**request**  
  
object

 | 

Request payload (manual or kafka message in case of a trigger) passed to the Edge Function for this execution. Output only.

 |
| 

edge\_function\_executions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The time at which this execution record was created and the execution was initiated. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_executions\[\].  
**update\_timestamp**  
  
dateTime

 | 

Time at which this execution record was last updated (e.g., when status changed). Initially set to `create_timestamp`. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_executions\[\].  
**status**  
  
enum

 | 

Current status of this Edge Function execution. Starts as `INCOMPLETE` and transitions to a terminal state (e.g., `SUCCEEDED`, `FAILED`). It may remain `INCOMPLETE` if the execution request failed before a final state could be recorded.  
  
**Enum values**  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNKNOWN:**  
The EdgeFunctionExecutionStatus zero value - should not explicitly be used or seen in any valid responses. Indicates an unknown or unspecified status. Error.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_INCOMPLETE:**  
Execution is incomplete or its final state is not yet recorded. This is the default initial state.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED\_TRANSIENT:**  
Execution failed due to a temporary condition; retrying the operation that led to this execution might succeed.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED:**  
Execution has failed due to a non-transient issue.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_SUCCEEDED:**  
Execution has completed successfully.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNDETERMINED:**  
Execution status is undetermined, possibly due to an issue in the execution environment preventing a definitive success or failure state from being recorded.

 |
| 

edge\_function\_executions\[\].  
**edge\_function\_trigger\_operation\_id**  
  
string

 | 

ID of the `EdgeFunctionTriggerOperation` that initiated this execution, if applicable. This field links the execution to the specific trigger operation that caused it. Will be empty if the execution was triggered directly via the `ExecuteEdgeFunction` RPC.

 |
| 

edge\_function\_executions\[\].  
**error**  
  
object

 | 

Error from a failed Edge Function Execution. This is populated if the execution failed. Output only.

 |
| 

edge\_function\_executions\[\].  
error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

edge\_function\_executions\[\].  
error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

edge\_function\_executions\[\].  
error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

edge\_function\_executions\[\].  
error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token to retrieve the previous page. If it is empty, it retrieves the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token to retrieve the next page. If it is empty, it retrieves the last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

#### [](#_edge_functions_api_v1_EdgeFunctionExecution_GetEdgeFunctionExecution "Copy link to heading")Get

Retrieves an `EdgeFunctionExecution` resource.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_executions:read

**Endpoint:** GET /v1/edge-function-executions/{id}

##### [](#request_8 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

ID of the `EdgeFunctionExecution` to retrieve. Required.

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

Unique identifer for the `EdgeFunctionExecution`. Output only.

 |
| 

**edge\_function\_id**  
  
string

 | 

`EdgeFunction` ID of the executed `EdgeFunctionVersion`. Output only.

 |
| 

**edge\_function\_version\_tag**  
  
string

 | 

Version tag of the executed `EdgeFunctionVersion`. Output only.

 |
| 

**idempotency\_key**  
  
string

 | 

Idempotency key provided for the `EdgeFunctionExecution`. Output only.

 |
| 

**request**  
  
object

 | 

Request payload (manual or kafka message in case of a trigger) passed to the Edge Function for this execution. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The time at which this execution record was created and the execution was initiated. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

Time at which this execution record was last updated (e.g., when status changed). Initially set to `create_timestamp`. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**status**  
  
enum

 | 

Current status of this Edge Function execution. Starts as `INCOMPLETE` and transitions to a terminal state (e.g., `SUCCEEDED`, `FAILED`). It may remain `INCOMPLETE` if the execution request failed before a final state could be recorded.  
  
**Enum values**  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNKNOWN:**  
The EdgeFunctionExecutionStatus zero value - should not explicitly be used or seen in any valid responses. Indicates an unknown or unspecified status. Error.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_INCOMPLETE:**  
Execution is incomplete or its final state is not yet recorded. This is the default initial state.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED\_TRANSIENT:**  
Execution failed due to a temporary condition; retrying the operation that led to this execution might succeed.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED:**  
Execution has failed due to a non-transient issue.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_SUCCEEDED:**  
Execution has completed successfully.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNDETERMINED:**  
Execution status is undetermined, possibly due to an issue in the execution environment preventing a definitive success or failure state from being recorded.

 |
| 

**edge\_function\_trigger\_operation\_id**  
  
string

 | 

ID of the `EdgeFunctionTriggerOperation` that initiated this execution, if applicable. This field links the execution to the specific trigger operation that caused it. Will be empty if the execution was triggered directly via the `ExecuteEdgeFunction` RPC.

 |
| 

**error**  
  
object

 | 

Error from a failed Edge Function Execution. This is populated if the execution failed. Output only.

 |
| 

error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_BatchGetEdgeFunctionExecutionsResponse_BatchGetEdgeFunctionExecutions "Copy link to heading")BatchGet

Retrieves `EdgeFunctionExecution` resources for the provided IDs.  
The `error.details` field of each `EdgeFunctionExecution` resource is excluded by default since this may be large. You can include this field by using the `fields_to_include` field of the request with `INCLUDE_FIELD_ERROR_DETAILS` value.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_executions:read

**Endpoint:** GET /v1/edge-function-executions:batchGet

##### [](#request_9 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

IDs of `EdgeFunctionExecution` resources to retrieve. Allows a maximum number of 100 values. Required.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Fields to include in the response that are omitted by default. Optional.  
  
**Enum values**  
**INCLUDE\_FIELD\_ERROR\_DETAILS:**  
Include the `error.details` field of `EdgeFunctionExecution` messages.

 |

##### [](#responses_9 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**executions**  
  
map \[string: object\]

 | 

`EdgeFunctionExecution` resources keyed by ID.

 |
| 

executions\[KEY\].  
**id**  
  
string

 | 

Unique identifer for the `EdgeFunctionExecution`. Output only.

 |
| 

executions\[KEY\].  
**edge\_function\_id**  
  
string

 | 

`EdgeFunction` ID of the executed `EdgeFunctionVersion`. Output only.

 |
| 

executions\[KEY\].  
**edge\_function\_version\_tag**  
  
string

 | 

Version tag of the executed `EdgeFunctionVersion`. Output only.

 |
| 

executions\[KEY\].  
**idempotency\_key**  
  
string

 | 

Idempotency key provided for the `EdgeFunctionExecution`. Output only.

 |
| 

executions\[KEY\].  
**request**  
  
object

 | 

Request payload (manual or kafka message in case of a trigger) passed to the Edge Function for this execution. Output only.

 |
| 

executions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The time at which this execution record was created and the execution was initiated. Formatted as an RFC3339 timestamp. Output only.

 |
| 

executions\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

Time at which this execution record was last updated (e.g., when status changed). Initially set to `create_timestamp`. Formatted as an RFC3339 timestamp. Output only.

 |
| 

executions\[KEY\].  
**status**  
  
enum

 | 

Current status of this Edge Function execution. Starts as `INCOMPLETE` and transitions to a terminal state (e.g., `SUCCEEDED`, `FAILED`). It may remain `INCOMPLETE` if the execution request failed before a final state could be recorded.  
  
**Enum values**  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNKNOWN:**  
The EdgeFunctionExecutionStatus zero value - should not explicitly be used or seen in any valid responses. Indicates an unknown or unspecified status. Error.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_INCOMPLETE:**  
Execution is incomplete or its final state is not yet recorded. This is the default initial state.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED\_TRANSIENT:**  
Execution failed due to a temporary condition; retrying the operation that led to this execution might succeed.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_FAILED:**  
Execution has failed due to a non-transient issue.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_SUCCEEDED:**  
Execution has completed successfully.  
**EDGE\_FUNCTION\_EXECUTION\_STATUS\_UNDETERMINED:**  
Execution status is undetermined, possibly due to an issue in the execution environment preventing a definitive success or failure state from being recorded.

 |
| 

executions\[KEY\].  
**edge\_function\_trigger\_operation\_id**  
  
string

 | 

ID of the `EdgeFunctionTriggerOperation` that initiated this execution, if applicable. This field links the execution to the specific trigger operation that caused it. Will be empty if the execution was triggered directly via the `ExecuteEdgeFunction` RPC.

 |
| 

executions\[KEY\].  
**error**  
  
object

 | 

Error from a failed Edge Function Execution. This is populated if the execution failed. Output only.

 |
| 

executions\[KEY\].  
error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

executions\[KEY\].  
error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

executions\[KEY\].  
error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

executions\[KEY\].  
error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

### [](#edgefunctiontrigger "Copy link to heading")EdgeFunctionTrigger

#### [](#available_methods_3 "Copy link to heading")Available methods

-   [List](#_edge_functions_api_v1_ListEdgeFunctionTriggersResponse_ListEdgeFunctionTriggers) Lists filtered `EdgeFunctionTrigger` resources.
    
-   [Create](#_edge_functions_api_v1_EdgeFunctionTrigger_CreateEdgeFunctionTrigger) Creates a new `EdgeFunctionTrigger` resource.
    
-   [Update](#_edge_functions_api_v1_EdgeFunctionTrigger_UpdateEdgeFunctionTrigger) Updates an existing `EdgeFunctionTrigger` resource.
    
-   [Get](#_edge_functions_api_v1_EdgeFunctionTrigger_GetEdgeFunctionTrigger) Retrieves a single `EdgeFunctionTrigger` resource for the provided ID with all fields populated.
    
-   [BatchGet](#_edge_functions_api_v1_BatchGetEdgeFunctionTriggersResponse_BatchGetEdgeFunctionTriggers) Retrieves `EdgeFunctionTrigger` resources for the provided IDs.
    

#### [](#_edge_functions_api_v1_ListEdgeFunctionTriggersResponse_ListEdgeFunctionTriggers "Copy link to heading")List

Lists filtered `EdgeFunctionTrigger` resources.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_triggers:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /v1/edge-function-triggers

##### [](#request_10 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_ids**  
  
array \[string\]

 | 

`EdgeFunction` IDs of the `EdgeFunctionTrigger`. You can supply at most one ID to filter by. Optional.

 |
| 

**edge\_function\_version\_tags**  
  
array \[string\]

 | 

Version tags of the `EdgeFunctionTrigger`. Optional.

 |
| 

**edge\_function\_trigger\_statuses**  
  
array \[enum\]

 | 

List of EdgeFunctionTrigger statuses to filter by. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to list. Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If it is empty, the first page of results is returned. Optional.

 |

##### [](#responses_10 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_function\_triggers\[\]**  
  
array \[object\]

 | 

List of EdgeFunctionTrigger resources matching the request.

 |
| 

edge\_function\_triggers\[\].  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |
| 

edge\_function\_triggers\[\].  
**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

edge\_function\_triggers\[\].  
**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.

 |
| 

edge\_function\_triggers\[\].  
**kafka\_topic**  
  
string

 | 

Name of the Kafka topic to process events from. At present only `vault.core_api.v1.contracts.contract_notification.events` is supported. Required.

 |
| 

edge\_function\_triggers\[\].  
**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. The Edge Function will be called for each event, for which the execution request will be the event payload. Required.

 |
| 

edge\_function\_triggers\[\].  
**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

edge\_function\_triggers\[\].  
**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of. Required.

 |
| 

edge\_function\_triggers\[\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_triggers\[\].  
**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

Token to retrieve the previous page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

Token to retrieve the next page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunctionTrigger_CreateEdgeFunctionTrigger "Copy link to heading")Create

Creates a new `EdgeFunctionTrigger` resource.

**Permission Scopes:** edge\_functions:write, edge\_functions.edge\_function\_triggers:write, edge\_functions.edge\_function\_triggers:create

**Endpoint:** POST /v1/edge-function-triggers

##### [](#request_11 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique ID to ensure that the request is idempotent. Required.

 |
| 

**edge\_function\_trigger**  
  
object

 | 

The `EdgeFunctionTrigger` to create. Required.

 |
| 

edge\_function\_trigger.  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |
| 

edge\_function\_trigger.  
**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

edge\_function\_trigger.  
**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.  
  
**Default**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN**

 |
| 

edge\_function\_trigger.  
**kafka\_topic**  
  
string

 | 

Name of the Kafka topic to process events from. At present only `vault.core_api.v1.contracts.contract_notification.events` is supported. Required.

 |
| 

edge\_function\_trigger.  
**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. The Edge Function will be called for each event, for which the execution request will be the event payload. Required.

 |
| 

edge\_function\_trigger.  
**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

edge\_function\_trigger.  
**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of. Required.

 |

##### [](#responses_11 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |
| 

**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.

 |
| 

**kafka\_topic**  
  
string

 | 

Name of the Kafka topic to process events from. At present only `vault.core_api.v1.contracts.contract_notification.events` is supported. Required.

 |
| 

**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. The Edge Function will be called for each event, for which the execution request will be the event payload. Required.

 |
| 

**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of. Required.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned when the Edge Function for the `edge_function_trigger.edge_function_id` or the `edge_function_trigger.edge_function_version_tag` in the request is not found

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

 |

Returned on receipt of invalid input regardless of the system state

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

Returned when an Edge Function Trigger with the ID in the request already exists

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

#### [](#_edge_functions_api_v1_EdgeFunctionTrigger_UpdateEdgeFunctionTrigger "Copy link to heading")Update

Updates an existing `EdgeFunctionTrigger` resource.

**Permission Scopes:** edge\_functions:write, edge\_functions.edge\_function\_triggers:write, edge\_functions.edge\_function\_triggers:update

**Endpoint:** PUT /v1/edge-function-triggers/{edge\_function\_trigger.id}

##### [](#request_12 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
edge\_function\_trigger.  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique ID to ensure that the request is idempotent. Required.

 |
| 

**edge\_function\_trigger**  
  
object

 | 

`EdgeFunctionTrigger` to update. `id` must be a valid value for an existing `EdgeFunctionTrigger`. Required.

 |
| 

edge\_function\_trigger.  
**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

edge\_function\_trigger.  
**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.  
  
**Default**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN**

 |
| 

edge\_function\_trigger.  
**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

**update\_mask**  
  
object

 | 

The field masks of the fields in the resource to update. Required. The allowed field paths are: `description`, `edge_function_version_tag`, `status`

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

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

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |
| 

**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.

 |
| 

**kafka\_topic**  
  
string

 | 

Name of the Kafka topic to process events from. At present only `vault.core_api.v1.contracts.contract_notification.events` is supported. Required.

 |
| 

**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. The Edge Function will be called for each event, for which the execution request will be the event payload. Required.

 |
| 

**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of. Required.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunctionTrigger_GetEdgeFunctionTrigger "Copy link to heading")Get

Retrieves a single `EdgeFunctionTrigger` resource for the provided ID with all fields populated.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_triggers:read

**Endpoint:** GET /v1/edge-function-triggers/{id}

##### [](#request_13 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

ID of the `EdgeFunctionTrigger` to retrieve. Required.

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

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |
| 

**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.

 |
| 

**kafka\_topic**  
  
string

 | 

Name of the Kafka topic to process events from. At present only `vault.core_api.v1.contracts.contract_notification.events` is supported. Required.

 |
| 

**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. The Edge Function will be called for each event, for which the execution request will be the event payload. Required.

 |
| 

**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of. Required.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_BatchGetEdgeFunctionTriggersResponse_BatchGetEdgeFunctionTriggers "Copy link to heading")BatchGet

Retrieves `EdgeFunctionTrigger` resources for the provided IDs.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_triggers:read

**Endpoint:** GET /v1/edge-function-triggers:batchGet

##### [](#request_14 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

IDs of EdgeFunctionTriggers to retrieve. Allows a maximum of 100 values. Required.

 |

##### [](#responses_14 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_function\_triggers**  
  
map \[string: object\]

 | 

Map of trigger id to EdgeFunctionTrigger resource.

 |
| 

edge\_function\_triggers\[KEY\].  
**id**  
  
string

 | 

Unique human-readable identifier for the `EdgeFunctionTrigger`. Required.

 |
| 

edge\_function\_triggers\[KEY\].  
**description**  
  
string

 | 

Description of the `EdgeFunctionTrigger`. Optional.

 |
| 

edge\_function\_triggers\[KEY\].  
**status**  
  
enum

 | 

Status of the `EdgeFunctionTrigger`. This controls whether the trigger is actively processing events. `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE` enables processing of new events, `EDGE_FUNCTION_TRIGGER_STATUS_INACTIVE` disables processing of new events. Defaults to `EDGE_FUNCTION_TRIGGER_STATUS_ACTIVE`. Optional.  
  
**Enum values**  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_UNKNOWN:**  
Unknown or unspecified status.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_ACTIVE:**  
The Edge Function Trigger is processing events.  
**EDGE\_FUNCTION\_TRIGGER\_STATUS\_INACTIVE:**  
The Edge Function Trigger is not processing events.

 |
| 

edge\_function\_triggers\[KEY\].  
**kafka\_topic**  
  
string

 | 

Name of the Kafka topic to process events from. At present only `vault.core_api.v1.contracts.contract_notification.events` is supported. Required.

 |
| 

edge\_function\_triggers\[KEY\].  
**edge\_function\_id**  
  
string

 | 

ID of the Edge Function to execute. The Edge Function will be called for each event, for which the execution request will be the event payload. Required.

 |
| 

edge\_function\_triggers\[KEY\].  
**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version to execute. If this is not set or empty, then the current version of the Edge Function will be executed. Optional.

 |
| 

edge\_function\_triggers\[KEY\].  
**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of. Required.

 |
| 

edge\_function\_triggers\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_triggers\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTrigger` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

### [](#edgefunctiontriggeroperation "Copy link to heading")EdgeFunctionTriggerOperation

#### [](#available_methods_4 "Copy link to heading")Available methods

-   [List](#_edge_functions_api_v1_ListEdgeFunctionTriggerOperationsResponse_ListEdgeFunctionTriggerOperations) Lists filtered `EdgeFunctionTriggerOperations` resources.
    
-   [Get](#_edge_functions_api_v1_EdgeFunctionTriggerOperation_GetEdgeFunctionTriggerOperation) Retrieves an `EdgeFunctionTriggerOperation` resource by its ID.
    
-   [BatchGet](#_edge_functions_api_v1_BatchGetEdgeFunctionTriggerOperationsResponse_BatchGetEdgeFunctionTriggerOperations) Retrieves `EdgeFunctionTriggerOperation` resources for the provided IDs.
    
-   [BulkRetry](#_edge_functions_api_v1_BulkRetryEdgeFunctionTriggerOperationsResponse_BulkRetryEdgeFunctionTriggerOperations) BulkRetryEdgeFunctionTriggerOperations will retry `EdgeFunctionTriggerOperation` resources for the provided IDs, using the given request\_ids as idempotency keys for each retry attempt.
    

#### [](#_edge_functions_api_v1_ListEdgeFunctionTriggerOperationsResponse_ListEdgeFunctionTriggerOperations "Copy link to heading")List

Lists filtered `EdgeFunctionTriggerOperations` resources. These operations represent the processing of individual events by Edge Function Triggers.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_trigger\_operations:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /v1/edge-function-trigger-operations

##### [](#request_15 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_trigger\_ids**  
  
array \[string\]

 | 

Filter operations by the ID of their parent `EdgeFunctionTrigger`. You can supply at most one ID to filter by. Optional.

 |
| 

**edge\_function\_ids**  
  
array \[string\]

 | 

Filter operations by the ID of the `EdgeFunction` they target. You can supply at most one ID to filter by. Optional.

 |
| 

**edge\_function\_version\_tags**  
  
array \[string\]

 | 

Filter operations by the version tag(s) of the `EdgeFunctionVersion` they target. Optional.

 |
| 

**event\_ids**  
  
array \[string\]

 | 

Filter operations by the ID(s) of the event being processed. Optional.

 |
| 

**statuses**  
  
array \[enum\]

 | 

Filter operations by their status. Optional.  
  
**Enum values**  
**TRIGGER\_OPERATION\_STATUS\_UNKNOWN:**  
Default, unspecified status. Should not be used. Error.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_NOT\_STARTED:**  
Operation has been created but processing has not yet started.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_IN\_PROGRESS:**  
Operation is currently in progress. This may include event deserialization, Edge Function execution, and result processing.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED\_TRANSIENT:**  
Operation failed with a transient error (e.g., temporary network issue, a retryable error from the function execution).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED:**  
Operation failed with a non-transient error (e.g., permanent error from function execution, invalid event format).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_SUCCEEDED:**  
Operation completed successfully, including the successful execution of the associated Edge Function (if any).

 |
| 

**page\_size**  
  
integer

 | 

Maximum number of operations to return in a single page. Required.

 |
| 

**page\_token**  
  
string

 | 

Pagination token from a previous list response; if empty, the first page is returned. Optional.

 |
| 

**create\_timestamp\_range**  
  
object

 | 

Filter operations to those created within the specified time range. The `from` timestamp is inclusive and the `to` timestamp is exclusive. Optional.

 |
| 

create\_timestamp\_range.  
**from**  
  
dateTime

 | 

Lower end of the range. The range is inclusive of its lower end.

 |
| 

create\_timestamp\_range.  
**to**  
  
dateTime

 | 

Upper end of the range. The range is exclusive of its upper end.

 |

##### [](#responses_15 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_function\_trigger\_operations\[\]**  
  
array \[object\]

 | 

List of `EdgeFunctionTriggerOperation` resources matching the request filters. Required.

 |
| 

edge\_function\_trigger\_operations\[\].  
**id**  
  
string

 | 

Unique output only identifier for this trigger operation.

 |
| 

edge\_function\_trigger\_operations\[\].  
**edge\_function\_trigger\_id**  
  
string

 | 

ID of the Edge Function Trigger that initiated this operation.

 |
| 

edge\_function\_trigger\_operations\[\].  
**edge\_function\_id**  
  
string

 | 

ID of the Edge Function that will process the event.

 |
| 

edge\_function\_trigger\_operations\[\].  
**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version that was targeted by this operation. May be empty if the trigger was configured to use the current version of the Edge Function.

 |
| 

edge\_function\_trigger\_operations\[\].  
**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of.

 |
| 

edge\_function\_trigger\_operations\[\].  
**status**  
  
enum

 | 

Current status of this `EdgeFunctionTriggerOperation`.  
  
**Enum values**  
**TRIGGER\_OPERATION\_STATUS\_UNKNOWN:**  
Default, unspecified status. Should not be used. Error.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_NOT\_STARTED:**  
Operation has been created but processing has not yet started.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_IN\_PROGRESS:**  
Operation is currently in progress. This may include event deserialization, Edge Function execution, and result processing.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED\_TRANSIENT:**  
Operation failed with a transient error (e.g., temporary network issue, a retryable error from the function execution).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED:**  
Operation failed with a non-transient error (e.g., permanent error from function execution, invalid event format).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_SUCCEEDED:**  
Operation completed successfully, including the successful execution of the associated Edge Function (if any).

 |
| 

edge\_function\_trigger\_operations\[\].  
**event\_id**  
  
string

 | 

ID of the event that this operation is processing.

 |
| 

edge\_function\_trigger\_operations\[\].  
**event**  
  
object

 | 

The event payload that is being processed or was processed by this operation. This payload is passed as the `request` to the resulting `EdgeFunctionExecution`. This field is not populated if the operation is successful to conserve space,he request can be found in the associated `EdgeFunctionExecution` record.

 |
| 

edge\_function\_trigger\_operations\[\].  
**retry\_count**  
  
long

 | 

Number of retries that the operation has undergone. Starts at 0 and increases by 1 each time the operation is retried.

 |
| 

edge\_function\_trigger\_operations\[\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTriggerOperation` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_trigger\_operations\[\].  
**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTriggerOperation` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_trigger\_operations\[\].  
**execution\_error**  
  
object

 | 

This is only populated if the operation has a `FAILED` or `FAILED_TRANSIENT` status due to an execution error. The error indicates the error from the most recent failure.  
  
*Details of any error that occurred during this operation. Only one of these fields will be populated if the status is `FAILED` or `FAILED_TRANSIENT`.  
  
edge\_function\_trigger\_operations\[\] items can contain one of **execution\_error** or processing\_error*

 |
| 

edge\_function\_trigger\_operations\[\].  
execution\_error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

edge\_function\_trigger\_operations\[\].  
execution\_error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

edge\_function\_trigger\_operations\[\].  
execution\_error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

edge\_function\_trigger\_operations\[\].  
execution\_error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |
| 

edge\_function\_trigger\_operations\[\].  
**processing\_error**  
  
object

 | 

This is only populated if the operation has a `FAILED` or `FAILED_TRANSIENT` status due to a processing error. The error indicates the error from the most recent failure.  
  
*Details of any error that occurred during this operation. Only one of these fields will be populated if the status is `FAILED` or `FAILED_TRANSIENT`.  
  
edge\_function\_trigger\_operations\[\] items can contain one of execution\_error or **processing\_error***

 |
| 

edge\_function\_trigger\_operations\[\].  
processing\_error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

edge\_function\_trigger\_operations\[\].  
processing\_error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

edge\_function\_trigger\_operations\[\].  
processing\_error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

edge\_function\_trigger\_operations\[\].  
processing\_error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |
| 

**previous\_page\_token**  
  
string

 | 

Token to retrieve the previous page of results. Optional.

 |
| 

**next\_page\_token**  
  
string

 | 

Token to retrieve the next page of results. Optional.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunctionTriggerOperation_GetEdgeFunctionTriggerOperation "Copy link to heading")Get

Retrieves an `EdgeFunctionTriggerOperation` resource by its ID. This provides detailed information about a specific event processing attempt.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_trigger\_operations:read

**Endpoint:** GET /v1/edge-function-trigger-operations/{id}

##### [](#request_16 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

ID of the `EdgeFunctionTriggerOperation` to retrieve. Required.

 |

##### [](#responses_16 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique output only identifier for this trigger operation.

 |
| 

**edge\_function\_trigger\_id**  
  
string

 | 

ID of the Edge Function Trigger that initiated this operation.

 |
| 

**edge\_function\_id**  
  
string

 | 

ID of the Edge Function that will process the event.

 |
| 

**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version that was targeted by this operation. May be empty if the trigger was configured to use the current version of the Edge Function.

 |
| 

**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of.

 |
| 

**status**  
  
enum

 | 

Current status of this `EdgeFunctionTriggerOperation`.  
  
**Enum values**  
**TRIGGER\_OPERATION\_STATUS\_UNKNOWN:**  
Default, unspecified status. Should not be used. Error.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_NOT\_STARTED:**  
Operation has been created but processing has not yet started.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_IN\_PROGRESS:**  
Operation is currently in progress. This may include event deserialization, Edge Function execution, and result processing.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED\_TRANSIENT:**  
Operation failed with a transient error (e.g., temporary network issue, a retryable error from the function execution).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED:**  
Operation failed with a non-transient error (e.g., permanent error from function execution, invalid event format).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_SUCCEEDED:**  
Operation completed successfully, including the successful execution of the associated Edge Function (if any).

 |
| 

**event\_id**  
  
string

 | 

ID of the event that this operation is processing.

 |
| 

**event**  
  
object

 | 

The event payload that is being processed or was processed by this operation. This payload is passed as the `request` to the resulting `EdgeFunctionExecution`. This field is not populated if the operation is successful to conserve space,he request can be found in the associated `EdgeFunctionExecution` record.

 |
| 

**retry\_count**  
  
long

 | 

Number of retries that the operation has undergone. Starts at 0 and increases by 1 each time the operation is retried.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTriggerOperation` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTriggerOperation` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

**execution\_error**  
  
object

 | 

This is only populated if the operation has a `FAILED` or `FAILED_TRANSIENT` status due to an execution error. The error indicates the error from the most recent failure.  
  
*Details of any error that occurred during this operation. Only one of these fields will be populated if the status is `FAILED` or `FAILED_TRANSIENT`.  
  
This can contain one of **execution\_error** or processing\_error*

 |
| 

execution\_error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

execution\_error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

execution\_error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

execution\_error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |
| 

**processing\_error**  
  
object

 | 

This is only populated if the operation has a `FAILED` or `FAILED_TRANSIENT` status due to a processing error. The error indicates the error from the most recent failure.  
  
*Details of any error that occurred during this operation. Only one of these fields will be populated if the status is `FAILED` or `FAILED_TRANSIENT`.  
  
This can contain one of execution\_error or **processing\_error***

 |
| 

processing\_error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

processing\_error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

processing\_error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

processing\_error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_BatchGetEdgeFunctionTriggerOperationsResponse_BatchGetEdgeFunctionTriggerOperations "Copy link to heading")BatchGet

Retrieves `EdgeFunctionTriggerOperation` resources for the provided IDs.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_trigger\_operations:read

**Endpoint:** GET /v1/edge-function-trigger-operations:batchGet

##### [](#request_17 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

IDs of `EdgeFunctionTriggerOperations` to retrieve. Allows a maximum of 100 values. Required.

 |

##### [](#responses_17 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_function\_trigger\_operations**  
  
map \[string: object\]

 | 

A map of `EdgeFunctionTriggerOperation` ID to the `EdgeFunctionTriggerOperation` resource. If an ID from the request was not found, it will be absent from the map.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**id**  
  
string

 | 

Unique output only identifier for this trigger operation.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**edge\_function\_trigger\_id**  
  
string

 | 

ID of the Edge Function Trigger that initiated this operation.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**edge\_function\_id**  
  
string

 | 

ID of the Edge Function that will process the event.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**edge\_function\_version\_tag**  
  
string

 | 

Tag of the Edge Function Version that was targeted by this operation. May be empty if the trigger was configured to use the current version of the Edge Function.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**vault\_core\_identity\_id**  
  
string

 | 

ID of the Edge Function Identity that requests to Vault Core made by the Edge Function will be performed on behalf of.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**status**  
  
enum

 | 

Current status of this `EdgeFunctionTriggerOperation`.  
  
**Enum values**  
**TRIGGER\_OPERATION\_STATUS\_UNKNOWN:**  
Default, unspecified status. Should not be used. Error.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_NOT\_STARTED:**  
Operation has been created but processing has not yet started.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_IN\_PROGRESS:**  
Operation is currently in progress. This may include event deserialization, Edge Function execution, and result processing.  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED\_TRANSIENT:**  
Operation failed with a transient error (e.g., temporary network issue, a retryable error from the function execution).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_FAILED:**  
Operation failed with a non-transient error (e.g., permanent error from function execution, invalid event format).  
**EDGE\_FUNCTION\_TRIGGER\_OPERATION\_STATUS\_SUCCEEDED:**  
Operation completed successfully, including the successful execution of the associated Edge Function (if any).

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**event\_id**  
  
string

 | 

ID of the event that this operation is processing.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**event**  
  
object

 | 

The event payload that is being processed or was processed by this operation. This payload is passed as the `request` to the resulting `EdgeFunctionExecution`. This field is not populated if the operation is successful to conserve space,he request can be found in the associated `EdgeFunctionExecution` record.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**retry\_count**  
  
long

 | 

Number of retries that the operation has undergone. Starts at 0 and increases by 1 each time the operation is retried.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTriggerOperation` was created at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionTriggerOperation` was last updated at this time. Formatted as an RFC3339 timestamp. Output only.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**execution\_error**  
  
object

 | 

This is only populated if the operation has a `FAILED` or `FAILED_TRANSIENT` status due to an execution error. The error indicates the error from the most recent failure.  
  
*Details of any error that occurred during this operation. Only one of these fields will be populated if the status is `FAILED` or `FAILED_TRANSIENT`.  
  
edge\_function\_trigger\_operations\[KEY\] can contain one of **execution\_error** or processing\_error*

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
execution\_error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
execution\_error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
execution\_error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
execution\_error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
**processing\_error**  
  
object

 | 

This is only populated if the operation has a `FAILED` or `FAILED_TRANSIENT` status due to a processing error. The error indicates the error from the most recent failure.  
  
*Details of any error that occurred during this operation. Only one of these fields will be populated if the status is `FAILED` or `FAILED_TRANSIENT`.  
  
edge\_function\_trigger\_operations\[KEY\] can contain one of execution\_error or **processing\_error***

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
processing\_error.  
**code**  
  
string

 | 

The error code raised.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
processing\_error.  
**message**  
  
string

 | 

A description of the error raised.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
processing\_error.  
**transient**  
  
boolean

 | 

True if the error was caused by a temporary condition, such that it would be reasonable to retry the execution attempt.

 |
| 

edge\_function\_trigger\_operations\[KEY\].  
processing\_error.  
**details**  
  
object

 | 

Details related to the error raised. Omitted by default in Batch and List requests.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_BulkRetryEdgeFunctionTriggerOperationsResponse_BulkRetryEdgeFunctionTriggerOperations "Copy link to heading")BulkRetry

BulkRetryEdgeFunctionTriggerOperations will retry `EdgeFunctionTriggerOperation` resources for the provided IDs, using the given request\_ids as idempotency keys for each retry attempt. Note: The requested operations can only be retried if they are in a `FAILED` or `FAILED_TRANSIENT` state. This operation initiates new attempts to process the original events tied to these operations.

**Permission Scopes:** edge\_functions:write, edge\_functions.edge\_function\_trigger\_operations:write

**Endpoint:** POST /v1/edge-function-trigger-operations:bulkRetry

##### [](#request_18 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**requests\[\]**  
  
array \[object\]

 | 

A list of operations to retry. Each item specifies an operation ID and a unique request ID for the retry attempt. Operations must be in a `FAILED` or `FAILED_TRANSIENT` status. Required.

 |
| 

requests\[\].  
**request\_id**  
  
string

 | 

A unique ID to ensure that this specific retry attempt is idempotent. Required.

 |
| 

requests\[\].  
**id**  
  
string

 | 

ID of the `EdgeFunctionTriggerOperation` to be retried. Required.

 |

##### [](#responses_18 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**errors**  
  
map \[string: object\]

 | 

A map of request IDs (from `RetryEdgeFunctionTriggerOperationRequest.request_id`) to an error object for any retry attempts that could not be successfully initiated or completed. If a retry request for a specific operation succeeded (i.e., the operation moved to a non-failed state or is in progress), its `request_id` will not be present in this map.

 |
| 

errors\[KEY\].  
**message**  
  
string

 | 

A human-readable description of the error. The exact message is subject to change and should not be used programmatically.

 |
| 

errors\[KEY\].  
**code**  
  
enum

 | 

The code of the error.  
  
**Enum values**  
**OK:**  
Indicates there was no error. In practice, this does not occur as success is communicated by the absence of an error rather than an error with this code.  
**CANCELLED:**  
The requested operation was cancelled part way through.  
**UNKNOWN:**  
An unknown problem occurred on the server.  
**INVALID\_ARGUMENT:**  
There was a problem with the request. A provided field is invalid and/or a required field is missing. Unlike FAILED\_PRECONDITION, the only remedy is likely to be a change to the request.  
**DEADLINE\_EXCEEDED:**  
The response was not received within the allowed time. It can be safely retried. The operation could have completed successfully.  
**NOT\_FOUND:**  
The requested resource could not be found.  
**ALREADY\_EXISTS:**  
The resource could not be created because it already exists.  
**PERMISSION\_DENIED:**  
The client did not have permission to perform the request.  
**UNAUTHENTICATED:**  
The request could not be authenticated.  
**RESOURCE\_EXHAUSTED:**  
A resource was exhausted, because either too many requests were sent within a time period or the response was too large.  
**FAILED\_PRECONDITION:**  
The operation was rejected because the system was not in a state required for the operation’s execution. It could be that a referenced resource did not exist, or was in the wrong state.  
**ABORTED:**  
The operation was aborted, typically due to a concurrency issue.  
**OUT\_OF\_RANGE:**  
The operation was attempted outside the valid range.  
**UNIMPLEMENTED:**  
The operation is not implemented.  
**INTERNAL:**  
A problem occurred on the server. This is almost certainly due to a fault in the platform.  
**UNAVAILABLE:**  
The service was unavailable. It can be safely retried.  
**DATA\_LOSS:**  
The operation resulted in unrecoverable data loss or corruption.

 |
| 

errors\[KEY\].  
**details\[\]**  
  
array \[object\]

 | 

An optional list of messages that carry the error details.

 |
| 

errors\[KEY\].  
details\[\].  
**type\_url**  
  
string

 | 

A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL’s path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).  
  
In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:  
  
\* If no scheme is provided, `https` is assumed. \* An HTTP GET on the URL must yield a \[google.protobuf.Type\]\[\] value in binary format, or produce an error. \* Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)  
  
Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.  
  
Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.

 |
| 

errors\[KEY\].  
details\[\].  
**value**  
  
byte

 | 

Must be a valid serialized protocol buffer of the above specified type.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

### [](#edgefunctionversion "Copy link to heading")EdgeFunctionVersion

#### [](#available_methods_5 "Copy link to heading")Available methods

-   [List](#_edge_functions_api_v1_ListEdgeFunctionVersionsResponse_ListEdgeFunctionVersions) Lists filtered `EdgeFunctionVersion` resources.
    
-   [Get](#_edge_functions_api_v1_EdgeFunctionVersion_GetEdgeFunctionVersion) Retrieves an `EdgeFunctionVersion` resource.
    
-   [Create](#_edge_functions_api_v1_EdgeFunctionVersion_CreateEdgeFunctionVersion) Creates an `EdgeFunctionVersion` resource as a child of an existing `EdgeFunction`.
    

#### [](#_edge_functions_api_v1_ListEdgeFunctionVersionsResponse_ListEdgeFunctionVersions "Copy link to heading")List

Lists filtered `EdgeFunctionVersion` resources.  
The `code` field of `EdgeFunctionVersion` is excluded by default on each resource since this may be large. You can include this field by using the `fields_to_include` field of the request with `INCLUDE_FIELD_CODE` value.  
The response contains results sorted by `EdgeFunctionVersion.create_timestamp` in reverse time order (newest first).

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_versions:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /v1/edge-functions/{edge\_function\_id}/versions

##### [](#request_19 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_id**  
  
string

 | 

The ID of the parent `EdgeFunction`. Required.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**fields\_to\_include**  
  
array \[enum\]

 | 

Fields to include in the response that are omitted by default. Optional.  
  
**Enum values**  
**INCLUDE\_FIELD\_CODE:**  
Include the `code` field of `EdgeFunctionVersion` messages.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to list. Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If it is empty, the first page of results is returned. Optional.

 |

##### [](#responses_19 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**edge\_function\_versions\[\]**  
  
array \[object\]

 | 

The `EdgeFunctionVersion` resources matching the specified filters.

 |
| 

edge\_function\_versions\[\].  
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_function\_versions\[\].  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

edge\_function\_versions\[\].  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

edge\_function\_versions\[\].  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

edge\_function\_versions\[\].  
**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

edge\_function\_versions\[\].  
**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_function\_versions\[\].  
**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

edge\_function\_versions\[\].  
**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

edge\_function\_versions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token to use to retrieve the previous page. If it is empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token to retrieve the next page. If it is empty, it retrieves the last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunctionVersion_GetEdgeFunctionVersion "Copy link to heading")Get

Retrieves an `EdgeFunctionVersion` resource.

**Permission Scopes:** edge\_functions:read, edge\_functions.edge\_function\_versions:read

**Endpoint:** GET /v1/edge-functions/{edge\_function\_id}/versions/{tag}

##### [](#request_20 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**edge\_function\_id**  
  
string

 | 

ID of the `EdgeFunction` to retrieve. Required.

 |
| 

**tag**  
  
string

 | 

Version tag of the `EdgeFunctionVersion` to retrieve. Required.

 |

##### [](#responses_20 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

#### [](#_edge_functions_api_v1_EdgeFunctionVersion_CreateEdgeFunctionVersion "Copy link to heading")Create

Creates an `EdgeFunctionVersion` resource as a child of an existing `EdgeFunction`.

**Permission Scopes:** edge\_functions:write, edge\_functions.edge\_function\_versions:write, edge\_functions.edge\_function\_versions:create

**Endpoint:** POST /v1/edge-functions/{edge\_function\_version.edge\_function\_id}/versions

##### [](#request_21 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
edge\_function\_version.  
**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique ID to ensure that this request is idempotent. Required.

 |
| 

**edge\_function\_version**  
  
object

 | 

The `EdgeFunctionVersion` to create. Required.

 |
| 

edge\_function\_version.  
**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

edge\_function\_version.  
**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |

##### [](#responses_21 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

A globally-unique identifier for the `EdgeFunctionVersion`. Output only.

 |
| 

**edge\_function\_id**  
  
string

 | 

ID of the parent `EdgeFunction`. Required.

 |
| 

**tag**  
  
string

 | 

Tag identifier for the `EdgeFunctionVersion`. It is unique within the parent `EdgeFunction`. Required.

 |
| 

**code**  
  
string

 | 

Source code of the `EdgeFunctionVersion`. Omitted by default in Batch and List requests. Required.

 |
| 

**edge\_api\_version**  
  
string

 | 

The source code was written using this version of the Edge API. Output only.

 |
| 

**request\_schema**  
  
object

 | 

JSON schema describing the request payload of the `EdgeFunctionVersion`. Output only.

 |
| 

**response\_schema**  
  
object

 | 

JSON schema describing the response payload of the `EdgeFunctionVersion`. Output only.

 |
| 

**error\_codes\[\]**  
  
array \[string\]

 | 

Error codes that the `EdgeFunctionVersion` can return on unsuccessful execution. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The `EdgeFunctionVersion` was created at this time. Formatted as an RFC3339 timestamp.

 |

400 Failed Precondition 400 Invalid Argument 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned when the Edge Function for the ID in the request is not found

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

 |

Returned if `edge_function_version.code` field contains invalid Edge Function source code. The error `details` list will also include an entry with `"@type": "type.googleapis.com/errors.BadRequest"` for the request field.

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

Details of the error. It can contain `InvalidCode` in any order.

 |

##### Error details

Possible details that can appear in the error response in the `details[]` field.

###### InvalidCode

 
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

Individual causes for invalidity of the source code.

 |
| 

violations\[\].  
**violation\_type**  
  
string

 | 

Broad category of CodeViolation. For example, DisallowedError, DefinitionError, SyntaxError (this list is not exhaustive).

 |
| 

violations\[\].  
**code**  
  
string

 | 

The offending portion of source code. Empty if unknown or not applicable.

 |
| 

violations\[\].  
**description**  
  
string

 | 

A human-readable description of the CodeViolation.

 |
| 

violations\[\].  
**lineno**  
  
integer

 | 

Starting line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**offset**  
  
integer

 | 

Starting character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**end\_lineno**  
  
integer

 | 

Ending line number of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |
| 

violations\[\].  
**end\_offset**  
  
integer

 | 

Ending character column of the violating code, as a 1-based index. Absence or a value of `0` means that the value is unknown or not applicable.

 |

Returned on receipt of invalid input regardless of the system state

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

Returned when an Edge Function Version with the Edge Function ID and tag in the request already exists

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

### [](#journalevent "Copy link to heading")JournalEvent

#### [](#available_methods_6 "Copy link to heading")Available methods

-   [List](#_journal_events_ListJournalEventsResponse_ListJournalEvents) Retrieves a page of Journal Events.
    
-   [Replay](#_journal_events_ReplayJournalEventsResponse_ReplayJournalEvents) Replays a specific set of events of a particular resource type (max batch size = 100).
    

#### [](#_journal_events_ListJournalEventsResponse_ListJournalEvents "Copy link to heading")List

Retrieves a page of Journal Events.

**Permission Scopes:** edge\_functions:read, edge\_functions.journal\_events:read

**Endpoint:** GET /v1/journal-events

##### [](#request_22 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**time\_window**  
  
object

 | 

Interval of time to query for. Must be within the last 7 days. Required.

 |
| 

time\_window.  
**lower\_bound\_timestamp**  
  
dateTime

 | 

Lower bound timestamp (inclusive). Must be formatted as an RFC3339 timestamp.

 |
| 

time\_window.  
**upper\_bound\_timestamp**  
  
dateTime

 | 

Upper bound timestamp (exclusive). Must be later than the lower\_bound\_timestamp and formatted as an RFC3339 timestamp.

 |
| 

**resource\_type**  
  
enum

 | 

The type of the Vault resource. Required.  
  
**Enum values**  
**RESOURCE\_TYPE\_UNKNOWN**  
**RESOURCE\_TYPE\_EDGE\_FUNCTION:**  
The Edge Function resource.  
**RESOURCE\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
The Edge Function Version resource.  
**RESOURCE\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
The Edge Function Execution resource.  
  
**Default**  
**RESOURCE\_TYPE\_UNKNOWN**

 |
| 

**page\_size**  
  
integer

 | 

Number of results to be retrieved. Required.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

Token of the page to retrieve the results from. If empty, returns the first page of results. Optional.

 |

##### [](#responses_22 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**journal\_events\[\]**  
  
array \[object\]

 | 

A list of Journal Events whose timestamps fall within the time window.

 |
| 

journal\_events\[\].  
**event\_id**  
  
string

 | 

Uniquely identifies the event in Vault.

 |
| 

journal\_events\[\].  
**resource\_id**  
  
string

 | 

The ID of the resource that is the subject of this event.

 |
| 

journal\_events\[\].  
**timestamp**  
  
dateTime

 | 

The time at which the event occurred, in UTC. Formatted as an RFC3339 timestamp.

 |
| 

journal\_events\[\].  
**change\_id**  
  
string (int64)

 | 

This ID of the change within the context of the subject resource.

 |
| 

journal\_events\[\].  
**published**  
  
boolean

 | 

Indicates if Vault has published this event to the Streaming API. This is unlikely to be false, and will generally only be false for very recent events or during disaster recovery.

 |
| 

**previous\_page\_token**  
  
string

 | 

Token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

Token used to retrieve the next page. If empty, this is the last page of results.

 |

400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned when the provided page token refers to an empty page

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

 |

Returned on receipt of invalid input regardless of the system state

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

#### [](#_journal_events_ReplayJournalEventsResponse_ReplayJournalEvents "Copy link to heading")Replay

Replays a specific set of events of a particular resource type (max batch size = 100). The events are streamed with a `X-JournalEventsBatch-ID` header value set to the `journal_events_batch_id` value returned.  
Due to the possibility of automatic retries internally, in exceptional circumstances events may also be streamed out with batch IDs other than the one returned; these should be ignored.

**Permission Scopes:** edge\_functions:execute, edge\_functions.journal\_events:execute

**Endpoint:** POST /v1/journal-events:replay

##### [](#request_23 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**resource\_type**  
  
enum

 | 

The type of the Vault resource. Required.  
  
**Enum values**  
**RESOURCE\_TYPE\_UNKNOWN**  
**RESOURCE\_TYPE\_EDGE\_FUNCTION:**  
The Edge Function resource.  
**RESOURCE\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
The Edge Function Version resource.  
**RESOURCE\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
The Edge Function Execution resource.  
  
**Default**  
**RESOURCE\_TYPE\_UNKNOWN**

 |
| 

**journal\_events\_to\_replay\[\]**  
  
array \[object\]

 | 

The list of events to replay. Required. Duplicate identifiers are ignored and the corresponding events are only replayed once.

 |
| 

journal\_events\_to\_replay\[\].  
**event\_identifier**  
  
string

 | 

The ID of the Event  
  
*journal\_events\_to\_replay\[\] items can contain one of **event\_identifier** or resource\_identifier*

 |
| 

journal\_events\_to\_replay\[\].  
**resource\_identifier**  
  
object

 | 

A composite identifier for a specific change to a specific resource.  
  
*journal\_events\_to\_replay\[\] items can contain one of event\_identifier or **resource\_identifier***

 |
| 

journal\_events\_to\_replay\[\].  
resource\_identifier.  
**resource\_id**  
  
string

 | 

The ID of the resource.

 |
| 

journal\_events\_to\_replay\[\].  
resource\_identifier.  
**change\_id**  
  
string (int64)

 | 

This ID of the change within the context of the subject resource.

 |

##### [](#responses_23 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**journal\_events\_batch\_id**  
  
string

 | 

Vault will include this unique ID in the `X-JournalEventsBatch-ID` Kafka header of all messages produced as part of the replay. This ID is ephemeral - if you need to use the ID to correlate which events have been streamed out as a result of this request, you will need to persist it.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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

Returned on the resource being retrieved or mutated not being found

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

### [](#journaleventschecksum "Copy link to heading")JournalEventsChecksum

#### [](#available_methods_7 "Copy link to heading")Available methods

-   [Get](#_journal_events_GetJournalEventsChecksumResponse_GetJournalEventsChecksum) Retrieves the Journal Events count and checksum for the specified window.
    

#### [](#_journal_events_GetJournalEventsChecksumResponse_GetJournalEventsChecksum "Copy link to heading")Get

Retrieves the Journal Events count and checksum for the specified window.

**Permission Scopes:** edge\_functions:read, edge\_functions.journal\_events:read

**Endpoint:** GET /v1/journal-events:checksum

##### [](#request_24 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**time\_window**  
  
object

 | 

Interval of time to query for. Must be within the last 7 days. Required.

 |
| 

time\_window.  
**lower\_bound\_timestamp**  
  
dateTime

 | 

Lower bound timestamp (inclusive). Must be formatted as an RFC3339 timestamp.

 |
| 

time\_window.  
**upper\_bound\_timestamp**  
  
dateTime

 | 

Upper bound timestamp (exclusive). Must be later than the lower\_bound\_timestamp and formatted as an RFC3339 timestamp.

 |
| 

**resource\_type**  
  
enum

 | 

The type of the Vault resource. Required.  
  
**Enum values**  
**RESOURCE\_TYPE\_UNKNOWN**  
**RESOURCE\_TYPE\_EDGE\_FUNCTION:**  
The Edge Function resource.  
**RESOURCE\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
The Edge Function Version resource.  
**RESOURCE\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
The Edge Function Execution resource.  
  
**Default**  
**RESOURCE\_TYPE\_UNKNOWN**

 |

##### [](#responses_24 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**window\_journal\_events\_count**  
  
integer

 | 

The number of events that occurred within the time window.

 |
| 

**window\_journal\_events\_checksum**  
  
string

 | 

The checksum of the Journal Events' IDs. Vault hashes each ID using SHA256, then sequentially XORs each with the previous result, and returns a hash of the final result as a hexadecimal string. So for IDs A, B, C, the result will be sha(XOR(XOR(sha(A), sha(B)), sha©)).

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the system state

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