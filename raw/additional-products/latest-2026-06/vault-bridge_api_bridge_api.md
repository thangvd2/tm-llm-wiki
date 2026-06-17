---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api"
title: "Bridge API"
scraped_at: "2026-06-17T05:15:39.344Z"
images: 0
---

# Bridge API

Vault Bridge API is RESTful. It uses predictable and resource-oriented URLs with standard HTTP methods and status codes. Responses are in JSON format.

## [](#downloading_the_openapi_definition_file "Copy link to heading")Downloading the OpenAPI definition file

The Vault Bridge API in OpenAPI 3.0 can be downloaded from here:

Download download

The specification includes Thought Machine-specific extensions that are not standard to OpenAPI. The generation method of the specification and resulting naming, paths and schemas are subject to change. For more information about the OpenAPI specification see the [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3).

## [](#apps "Copy link to heading")Apps

### [](#app "Copy link to heading")App

#### [](#available_methods "Copy link to heading")Available methods

-   [List](#_bridge_v1_apps_ListAppsResponse_ListApps) Lists and filters Apps.
    
-   [Update](#_bridge_v1_apps_App_UpdateApp) Updates an App.
    
-   [Get](#_bridge_v1_apps_App_GetApp) Retrieves a single App by ID.
    
-   [BatchGet](#_bridge_v1_apps_BatchGetAppsResponse_BatchGetApps) Retrieves one or more Apps by ID.
    

#### [](#_bridge_v1_apps_ListAppsResponse_ListApps "Copy link to heading")List

Lists and filters Apps. Results are sorted by create\_timestamp in descending order.

**Permission Scopes:** bridge:read, bridge.apps:read

**Pagination consistency guarantees:** Snapshot

**Endpoint:** GET /api/v1/apps

##### [](#request "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 50.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from. If empty, the first page of results will be returned. Optional.

 |
| 

**has\_active\_version**  
  
enum

 | 

Whether to include active or inactive Apps only. - `BOTH` returns all Apps. - `ONLY_TRUE` returns only Apps with an active version. - `ONLY_FALSE` returns only Apps without an active version.  
  
**Enum values**  
**BOTH**  
**ONLY\_TRUE**  
**ONLY\_FALSE**  
  
**Default**  
**BOTH**

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Additional fields on the App to include in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_UNKNOWN**  
**INCLUDE\_FIELD\_ACTIVE\_VERSION:**  
Include the currently active version, if any, within each App in the list results.

 |

##### [](#responses "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**apps\[\]**  
  
array \[object\]

 | 

A list of matching Apps.

 |
| 

apps\[\].  
**id**  
  
string

 | 

Unique, human-readable ID of the App.

 |
| 

apps\[\].  
**active\_app\_version\_id**  
  
string

 | 

ID of the currently active version of the App. If empty, the App will be unavailable to all users.

 |
| 

apps\[\].  
**active\_app\_version**  
  
object

 | 

The currently active version of the App. Only provided when requested. Output-only.

 |
| 

apps\[\].  
active\_app\_version.  
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

apps\[\].  
active\_app\_version.  
**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

apps\[\].  
active\_app\_version.  
**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[\].  
active\_app\_version.  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

apps\[\].  
active\_app\_version.  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

apps\[\].  
active\_app\_version.  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

apps\[\].  
active\_app\_version.  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

apps\[\].  
active\_app\_version.  
**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[\].  
active\_app\_version.  
**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[\].  
active\_app\_version.  
**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[\].  
active\_app\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

apps\[\].  
active\_app\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

 |
| 

apps\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was created. Output only.

 |
| 

apps\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was updated. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

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

#### [](#_bridge_v1_apps_App_UpdateApp "Copy link to heading")Update

Updates an App.

**Permission Scopes:** bridge:write, bridge.apps:write

**Endpoint:** PUT /api/v1/apps/{app.id}

##### [](#request_2 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
app.  
**id**  
  
string

 | 

Unique, human-readable ID of the App.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique idempotency key for the request.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**app**  
  
object

 | 

The App to update.  
  
Required.

 |
| 

app.  
**active\_app\_version\_id**  
  
string

 | 

ID of the currently active version of the App. If empty, the App will be unavailable to all users.

 |
| 

**update\_mask**  
  
object

 | 

Which fields of the App are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

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

Unique, human-readable ID of the App.

 |
| 

**active\_app\_version\_id**  
  
string

 | 

ID of the currently active version of the App. If empty, the App will be unavailable to all users.

 |
| 

**active\_app\_version**  
  
object

 | 

The currently active version of the App. Only provided when requested. Output-only.

 |
| 

active\_app\_version.  
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

active\_app\_version.  
**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

active\_app\_version.  
**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

active\_app\_version.  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

active\_app\_version.  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

active\_app\_version.  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

active\_app\_version.  
**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

active\_app\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was updated. Output only.

 |

400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on an attempt to update an app if there is no existing active app version for the target app

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**missing\_active\_app\_version\_id:**  
ID of the missing active app version

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

#### [](#_bridge_v1_apps_App_GetApp "Copy link to heading")Get

Retrieves a single App by ID.

**Permission Scopes:** bridge:read, bridge.apps:read

**Endpoint:** GET /api/v1/apps/{id}

##### [](#request_3 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the App to be retrieved.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**fields\_to\_include**  
  
array \[enum\]

 | 

Additional fields on the App to include in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_UNKNOWN**  
**INCLUDE\_FIELD\_ACTIVE\_VERSION:**  
Include the currently active version, if any, within the returned App.

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

Unique, human-readable ID of the App.

 |
| 

**active\_app\_version\_id**  
  
string

 | 

ID of the currently active version of the App. If empty, the App will be unavailable to all users.

 |
| 

**active\_app\_version**  
  
object

 | 

The currently active version of the App. Only provided when requested. Output-only.

 |
| 

active\_app\_version.  
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

active\_app\_version.  
**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

active\_app\_version.  
**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

active\_app\_version.  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

active\_app\_version.  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

active\_app\_version.  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

active\_app\_version.  
**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

active\_app\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

active\_app\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was updated. Output only.

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

#### [](#_bridge_v1_apps_BatchGetAppsResponse_BatchGetApps "Copy link to heading")BatchGet

Retrieves one or more Apps by ID.

**Permission Scopes:** bridge:read, bridge.apps:read

**Endpoint:** GET /api/v1/apps:batchGet

##### [](#request_4 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the Apps to be retrieved.  
  
Required.  
Min length: 1 characters.  
Max length: 50 characters.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Additional fields on the App to include in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_UNKNOWN**  
**INCLUDE\_FIELD\_ACTIVE\_VERSION:**  
Include the currently active version, if any, within the returned Apps.

 |

##### [](#responses_4 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**apps**  
  
map \[string: object\]

 | 

A map of the App ID to the App.

 |
| 

apps\[KEY\].  
**id**  
  
string

 | 

Unique, human-readable ID of the App.

 |
| 

apps\[KEY\].  
**active\_app\_version\_id**  
  
string

 | 

ID of the currently active version of the App. If empty, the App will be unavailable to all users.

 |
| 

apps\[KEY\].  
**active\_app\_version**  
  
object

 | 

The currently active version of the App. Only provided when requested. Output-only.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[KEY\].  
active\_app\_version.  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

apps\[KEY\].  
active\_app\_version.  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

apps\[KEY\].  
active\_app\_version.  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

apps\[KEY\].  
active\_app\_version.  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

apps\[KEY\].  
active\_app\_version.  
**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

apps\[KEY\].  
active\_app\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

 |
| 

apps\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was created. Output only.

 |
| 

apps\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the App was updated. Output only.

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

### [](#appversion "Copy link to heading")AppVersion

#### [](#available_methods_2 "Copy link to heading")Available methods

-   [List](#_bridge_v1_apps_ListAppVersionsResponse_ListAppVersions) Lists and filters AppVersions.
    
-   [Get](#_bridge_v1_apps_AppVersion_GetAppVersion) Retrieves a single AppVersion by ID.
    
-   [BatchGet](#_bridge_v1_apps_BatchGetAppVersionsResponse_BatchGetAppVersions) Retrieves one or more AppVersions by ID.
    

#### [](#_bridge_v1_apps_ListAppVersionsResponse_ListAppVersions "Copy link to heading")List

Lists and filters AppVersions. Results are sorted by create\_timestamp in descending order.

**Permission Scopes:** bridge:read, bridge.app\_versions:read

**Pagination consistency guarantees:** Snapshot

**Endpoint:** GET /api/v1/app-versions

##### [](#request_5 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from. If empty, the first page of results will be returned. Optional.

 |
| 

**app\_ids**  
  
array \[string\]

 | 

The App IDs to filter for.

 |

##### [](#responses_5 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**app\_versions\[\]**  
  
array \[object\]

 | 

A list of matching AppVersions.

 |
| 

app\_versions\[\].  
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

app\_versions\[\].  
**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

app\_versions\[\].  
**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[\].  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

app\_versions\[\].  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

app\_versions\[\].  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

app\_versions\[\].  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

app\_versions\[\].  
**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[\].  
**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[\].  
**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

app\_versions\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

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

#### [](#_bridge_v1_apps_AppVersion_GetAppVersion "Copy link to heading")Get

Retrieves a single AppVersion by ID.

**Permission Scopes:** bridge:read, bridge.app\_versions:read

**Endpoint:** GET /api/v1/app-versions/{id}

##### [](#request_6 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the AppVersion to be retrieved.

 |

##### [](#responses_6 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

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

#### [](#_bridge_v1_apps_BatchGetAppVersionsResponse_BatchGetAppVersions "Copy link to heading")BatchGet

Retrieves one or more AppVersions by ID.

**Permission Scopes:** bridge:read, bridge.app\_versions:read

**Endpoint:** GET /api/v1/app-versions:batchGet

##### [](#request_7 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the AppVersions to be retrieved.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.  
Min length: 1 characters.  
Max length: 100 characters.

 |

##### [](#responses_7 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**app\_versions**  
  
map \[string: object\]

 | 

A map of the AppVersion ID to the AppVersion.

 |
| 

app\_versions\[KEY\].  
**id**  
  
string

 | 

Unique ID of the AppVersion. UUID.

 |
| 

app\_versions\[KEY\].  
**app\_id**  
  
string

 | 

The ID of the App associated with the AppVersion.

 |
| 

app\_versions\[KEY\].  
**version**  
  
object

 | 

The AppVersion’s semantic version. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[KEY\].  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

app\_versions\[KEY\].  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

app\_versions\[KEY\].  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

app\_versions\[KEY\].  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

app\_versions\[KEY\].  
**display\_name**  
  
string

 | 

A short human-readable name for the App, to be displayed to users. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[KEY\].  
**description**  
  
string

 | 

Full description of the App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[KEY\].  
**release\_notes**  
  
string

 | 

Description of what has changed in this AppVersion, compared to the previous AppVersion for the same App. Parsed from package.json on upload, and cannot be updated afterwards.

 |
| 

app\_versions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was created. Output only.

 |
| 

app\_versions\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the AppVersion was updated. Output only.

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

## [](#credentials "Copy link to heading")Credentials

### [](#credential "Copy link to heading")Credential

#### [](#available_methods_3 "Copy link to heading")Available methods

-   [List](#_bridge_v1_credentials_ListCredentialsResponse_ListCredentials) Lists and filters Credentials.
    
-   [Create](#_bridge_v1_credentials_Credential_CreateCredential) Creates a Credential.
    
-   [Update](#_bridge_v1_credentials_Credential_UpdateCredential) Updates a Credential.
    
-   [Get](#_bridge_v1_credentials_Credential_GetCredential) Retrieves a single Credential by ID.
    
-   [BatchGet](#_bridge_v1_credentials_BatchGetCredentialsResponse_BatchGetCredentials) Retrieves one or more Credentials by ID.
    

#### [](#_bridge_v1_credentials_ListCredentialsResponse_ListCredentials "Copy link to heading")List

Lists and filters Credentials.

**Permission Scopes:** bridge:read, bridge.credentials:read

**Pagination consistency guarantees:** Snapshot

**Endpoint:** GET /api/v1/credentials

##### [](#request_8 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The maximum number of results to be returned.  
  
Required.  
Min value: 1.  
Max value: 50.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are retrieved from. If empty, the first page of results will be returned. Optional.

 |

##### [](#responses_8 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**credentials\[\]**  
  
array \[object\]

 | 

A list of matching Credentials.

 |
| 

credentials\[\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |
| 

credentials\[\].  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

credentials\[\].  
**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

credentials\[\].  
**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

credentials\[\].  
oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

credentials\[\].  
oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

credentials\[\].  
oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[\].  
oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

credentials\[\].  
oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.

 |
| 

credentials\[\].  
oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

credentials\[\].  
**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

credentials\[\].  
static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[\].  
static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

credentials\[\].  
**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

credentials\[\].  
auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

credentials\[\].  
**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credentials\[\].  
mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[\].  
mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[\].  
**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credentials\[\].  
sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

credentials\[\].  
sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[\].  
sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.

 |
| 

credentials\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was created. Output only.

 |
| 

credentials\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was updated. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

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

#### [](#_bridge_v1_credentials_Credential_CreateCredential "Copy link to heading")Create

Creates a Credential.

**Permission Scopes:** bridge:write, bridge.credentials:write

**Endpoint:** POST /api/v1/credentials

##### [](#request_9 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**credential**  
  
object

 | 

The Credential to create.  
  
Required.

 |
| 

credential.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |
| 

credential.  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

credential.  
**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

credential.  
**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

credential.  
oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

credential.  
oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

credential.  
oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

credential.  
oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.  
  
**Default**  
**OAUTH\_STYLE\_AUTO\_DETECT**

 |
| 

credential.  
oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

credential.  
**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

credential.  
static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

credential.  
**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

credential.  
auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

credential.  
**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credential.  
mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credential.  
sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

credential.  
sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.  
  
**Default**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN**

 |

##### [](#responses_9 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |
| 

**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.

 |
| 

oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was updated. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

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

Returned on a non-idempotent attempt to recreate a resource

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1_credentials_Credential_UpdateCredential "Copy link to heading")Update

Updates a Credential.

**Permission Scopes:** bridge:write, bridge.credentials:write

**Endpoint:** PUT /api/v1/credentials/{credential.id}

##### [](#request_10 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
credential.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**credential**  
  
object

 | 

The Credential to update.  
  
Required.

 |
| 

credential.  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

credential.  
**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

credential.  
**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

credential.  
oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

credential.  
oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

credential.  
oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

credential.  
oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.  
  
**Default**  
**OAUTH\_STYLE\_AUTO\_DETECT**

 |
| 

credential.  
oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

credential.  
**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

credential.  
static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

credential.  
**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

credential.  
auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

credential.  
**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credential.  
mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credential.  
sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

credential.  
sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credential.  
sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.  
  
**Default**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN**

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields of the Credential are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#responses_10 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |
| 

**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.

 |
| 

oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was updated. Output only.

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

#### [](#_bridge_v1_credentials_Credential_GetCredential "Copy link to heading")Get

Retrieves a single Credential by ID.

**Permission Scopes:** bridge:read, bridge.credentials:read

**Endpoint:** GET /api/v1/credentials/{id}

##### [](#request_11 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Credential to be retrieved.

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

Unique identifier of the resource within Vault Bridge.

 |
| 

**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.

 |
| 

oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was updated. Output only.

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

#### [](#_bridge_v1_credentials_BatchGetCredentialsResponse_BatchGetCredentials "Copy link to heading")BatchGet

Retrieves one or more Credentials by ID. A `NOT_FOUND` API error will be returned if any of the requested resources can not be found.

**Permission Scopes:** bridge:read, bridge.credentials:read

**Endpoint:** GET /api/v1/credentials:batchGet

##### [](#request_12 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the Credentials to be retrieved.  
  
Required.  
Min length: 1 characters.  
Max length: 50 characters.

 |

##### [](#responses_12 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**credentials**  
  
map \[string: object\]

 | 

A map of the Credential ID to the Credential.

 |
| 

credentials\[KEY\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |
| 

credentials\[KEY\].  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes. Required for create requests.

 |
| 

credentials\[KEY\].  
**http\_proxy\_enabled**  
  
boolean

 | 

Indicates whether this credential can be used with the Integration’s HTTP Proxy functionality which allows front-end Apps to issue HTTP requests to External Systems.

 |
| 

credentials\[KEY\].  
**oauth\_client\_credentials**  
  
object

 | 

Configuration required to authenticate using the OAuth client credentials grant type.

 |
| 

credentials\[KEY\].  
oauth\_client\_credentials.  
**url**  
  
string

 | 

The URL of an OAuth 2.0 compliant token endpoint. Mandatory.

 |
| 

credentials\[KEY\].  
oauth\_client\_credentials.  
**client\_id**  
  
string

 | 

The client ID to be used when requesting tokens. Mandatory.

 |
| 

credentials\[KEY\].  
oauth\_client\_credentials.  
**client\_secret**  
  
string

 | 

The client secret to be used when requesting tokens. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[KEY\].  
oauth\_client\_credentials.  
**scopes\[\]**  
  
array \[string\]

 | 

The scopes to be requested. Each scope must follow RFC6749 ([https://datatracker.ietf.org/doc/html/rfc6749#section-3.3](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3)) and be ≤ 120 characthers. A maximum of 100 scopes can be specified and their total length must be ≤ 1024 characters. Optional.

 |
| 

credentials\[KEY\].  
oauth\_client\_credentials.  
**oauth\_style**  
  
enum

 | 

Represents how requests for tokens are authenticated to the server. Note that if using this credential for Kafka consumers it is recommended this is set explicitly to either `IN_PARAMS` or `IN_HEADER`. Setting it to `AUTO_DETECT` for Kafka consumers will result in the same behaviour as if set to `IN_HEADER`. Optional.  
  
**Enum values**  
**OAUTH\_STYLE\_AUTO\_DETECT:**  
Automatically detect which auth style to use.  
**OAUTH\_STYLE\_IN\_PARAMS:**  
Send the `client_id` and `client_secret` in the POST body when requesting a new token.  
**OAUTH\_STYLE\_IN\_HEADER:**  
Send the `client_id` and `client_secret` using HTTP Basic Authorization when requesting a new token.

 |
| 

credentials\[KEY\].  
oauth\_client\_credentials.  
**sasl\_extensions\_json**  
  
string

 | 

A key/value map (represented as a JSON string) of extensions sent to the service during the SASL/OAUTHBEARER authentication. This is only used for Credentials used for Bridge Kafka consumers and does nothing when used with the Integrations HTTP Proxy. Optional.

 |
| 

credentials\[KEY\].  
**static\_token**  
  
object

 | 

Configuration required to authenticate using a static access token.

 |
| 

credentials\[KEY\].  
static\_token.  
**token**  
  
string

 | 

Static token to be included in requests. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[KEY\].  
static\_token.  
**custom\_header**  
  
string

 | 

Custom header in which to send the token. This overrides the default behaviour of sending the token as part of the `X-Auth-Token` HTTP header. Optional.

 |
| 

credentials\[KEY\].  
**auth\_header\_pass\_through**  
  
object

 | 

Configuration required to authenticate using auth header pass-through mechanism. If this is set then `http_proxy_enabled` has to be set to `true`. Can be combined with: static\_token. The specified auth header on the incoming request to the Integrations HTTP Proxy will be used to make the request to the specified External Integration. If the Credential is using both static token and the Auth Header Pass Through and the specified header name is the same as in static token, the Auth Header Pass Through value will be used for the downstream request.

 |
| 

credentials\[KEY\].  
auth\_header\_pass\_through.  
**custom\_header**  
  
string

 | 

Custom header to proxy from the client. This overrides the default behaviour of using the "Authorization" header.

 |
| 

credentials\[KEY\].  
**mtls**  
  
object

 | 

Configuration required to establish a mTLS connection. Only used with Kafka and cannot be used through the Integrations proxy. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credentials\[KEY\].  
mtls.  
**client\_chain**  
  
string

 | 

The public certificates chain for client authentication. Should not contain private keys. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[KEY\].  
mtls.  
**client\_key**  
  
string

 | 

The private key for client authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[KEY\].  
**sasl\_scram**  
  
object

 | 

Configuration required to authenticate using the SASL/SCARM mechanism. Only used with Kafka and cannot be used through the Integrations proxy. Cannot be combined with any other authentication mechanism. Setting both this field and `http_proxy_enabled` is an error.

 |
| 

credentials\[KEY\].  
sasl\_scram.  
**username**  
  
string

 | 

The username or identity to authenticate as. Mandatory.

 |
| 

credentials\[KEY\].  
sasl\_scram.  
**password**  
  
string

 | 

The password to use for authentication. Mandatory. The field will be redacted when the resource is retrieved.

 |
| 

credentials\[KEY\].  
sasl\_scram.  
**hash\_function\_type**  
  
enum

 | 

The type of hashing function used for the password. Mandatory.  
  
**Enum values**  
**HASH\_FUNCTION\_TYPE\_UNKNOWN:**  
Unknown type.  
**HASH\_FUNCTION\_TYPE\_SHA\_256:**  
The SHA-256 hashing type.  
**HASH\_FUNCTION\_TYPE\_SHA\_512:**  
The SHA-512 hashing type.

 |
| 

credentials\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was created. Output only.

 |
| 

credentials\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the credential was updated. Output only.

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

## [](#customer_data_mastery "Copy link to heading")Customer Data Mastery

### [](#field "Copy link to heading")Field

#### [](#available_methods_4 "Copy link to heading")Available methods

-   [List](#_bridge_v1beta_customer_mastery_ListFieldsResponse_ListFields) ListFields returns a paginated list of fields filtered by the filters in the ListFieldsRequest.
    

#### [](#_bridge_v1beta_customer_mastery_ListFieldsResponse_ListFields "Copy link to heading")List

ListFields returns a paginated list of fields filtered by the filters in the ListFieldsRequest.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.fields:read

**Endpoint:** GET /api/v1beta/customer-mastery/fields

##### [](#request_13 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**template\_ids**  
  
array \[string\]

 | 

Filter by the identifiers of the templates.

 |
| 

**template\_versions**  
  
array \[string\]

 | 

Filter by the versions of the templates.

 |
| 

**display\_names**  
  
array \[string\]

 | 

Filter by the display names of the fields. This will search using a partial search, so will match field display\_names that have text before or after the searched for display\_name.

 |
| 

**searchable**  
  
boolean

 | 

Filter by searchable fields.

 |
| 

**page\_size**  
  
integer

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 | 

Pagination page token.

 |

##### [](#responses_13 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**fields\[\]**  
  
array \[object\]

 | 

List of fields

 |
| 

fields\[\].  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

fields\[\].  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

fields\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

fields\[\].  
**description**  
  
string

 | 

Description.

 |
| 

fields\[\].  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

fields\[\].  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

fields\[\].  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

fields\[\].  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

fields\[\].  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

fields\[\].  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

fields\[\].  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

fields\[\].  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

fields\[\].  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

fields\[\].  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

fields\[\].  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

fields\[\].  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

fields\[\].  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

fields\[\].  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

fields\[\].  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

fields\[\].  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

fields\[\].  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

fields\[\].  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

fields\[\].  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

fields\[\].  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

fields\[\].  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

fields\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

fields\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

fields\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

fields\[\].  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

fields\[\].  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

fields\[\].  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

fields\[\].  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

fields\[\].  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

fields\[\].  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

fields\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#party "Copy link to heading")Party

#### [](#available_methods_5 "Copy link to heading")Available methods

-   [List](#_bridge_v1beta_customer_mastery_ListPartiesResponse_ListParties) ListParties is used for retrieving a filtered, paginated, list of parties.
    
-   [Create](#_bridge_v1beta_customer_mastery_Party_CreateParty) CreateParty is used for creating a single party.
    
-   [Update](#_bridge_v1beta_customer_mastery_Party_UpdateParty) UpdateParty is used for updating a single party.
    
-   [BatchGet](#_bridge_v1beta_customer_mastery_BatchGetPartiesResponse_BatchGetParties) BatchGetParties is used for fetching multiple parties.
    
-   [Search](#_bridge_v1beta_customer_mastery_SearchPartiesResponse_SearchParties) SearchParties is used for retrieving a filtered, paginated, list of parties based on input search parameters.
    

#### [](#_bridge_v1beta_customer_mastery_ListPartiesResponse_ListParties "Copy link to heading")List

ListParties is used for retrieving a filtered, paginated, list of parties. The pagination consistency level is 'page-level'.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.parties:read

**Endpoint:** GET /api/v1beta/customer-mastery/parties

##### [](#request_14 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**template\_ids**  
  
array \[string\]

 | 

Filter by template ids.

 |
| 

**template\_version\_numbers**  
  
array \[string\]

 | 

Filter by template versions.

 |
| 

**full\_names**  
  
array \[string\]

 | 

Filter parties by full name values.

 |
| 

**party\_view**  
  
enum

 | 

An enum which describes which data should be returned on the resulting parties.  
  
**Enum values**  
**PARTY\_VIEW\_BASIC**  
**PARTY\_VIEW\_INCLUDE\_FIELD\_VALUES**  
**PARTY\_VIEW\_INCLUDE\_FIELD\_VALUES\_AND\_HIERARCHY**  
  
**Default**  
**PARTY\_VIEW\_BASIC**

 |
| 

**order\_by**  
  
array \[enum\]

 | 

The order that parties are returned in based on create\_timestamp.  
  
**Enum values**  
**ORDER\_BY\_CREATION\_TIME\_DESC**  
**ORDER\_BY\_CREATION\_TIME\_ASC**

 |
| 

**page\_size**  
  
integer

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 | 

Pagination page token.

 |

##### [](#responses_14 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**parties\[\]**  
  
array \[object\]

 | 

List of parties

 |
| 

parties\[\].  
**id**  
  
string

 | 

The unique ID of the party generated on creation.

 |
| 

parties\[\].  
**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

parties\[\].  
**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

parties\[\].  
**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

parties\[\].  
**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

parties\[\].  
**field\_groups\[\]**  
  
array \[object\]

 | 

Collections of field groups that are logically grouped into views of party information with the CurrentValue set to whatever the Field Value associated with this party at the time. This is an output only field.

 |
| 

parties\[\].  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

parties\[\].  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

parties\[\].  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

parties\[\].  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

parties\[\].  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

parties\[\].  
field\_values\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_Party_CreateParty "Copy link to heading")Create

CreateParty is used for creating a single party.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.parties:write

**Endpoint:** POST /api/v1beta/customer-mastery/parties

##### [](#request_15 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**party**  
  
object

 | 

The party to create.

 |
| 

party.  
**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

party.  
**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

party.  
**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

party.  
**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

party.  
**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

party.  
field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

party.  
field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

party.  
field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

party.  
field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

party.  
field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |

##### [](#responses_15 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of the party generated on creation.

 |
| 

**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

**field\_groups\[\]**  
  
array \[object\]

 | 

Collections of field groups that are logically grouped into views of party information with the CurrentValue set to whatever the Field Value associated with this party at the time. This is an output only field.

 |
| 

field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

field\_values\[KEY\].  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

field\_values\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on attempt to create a party for a party template that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template.id:**  
Id of the party template that doesn’t exist

 |

Returned on attempt to create a party for a party template version that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template\_version.template\_id:**  
Template id for a party template version that doesn’t exist  
**party\_template\_version.version:**  
Version string of a party template version that doesn’t exist

 |

Returned on attempt to create a party using a field value for a field that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**field.names:**  
Names of the fields that don’t exist in the template

 |

Returned on attempt to create a party where a required field does not have a value set

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**field.names:**  
Names of the fields that are required but not set

 |

Returned on attempt to create a party using a field value that doesn’t match the field constraint

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**field.name:**  
Name of the field that the value is being created for  
**field.constraint:**  
The constraint type for the field  
**field\_value.type:**  
The type for the field value

 |

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_Party_UpdateParty "Copy link to heading")Update

UpdateParty is used for updating a single party.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.parties:write

**Endpoint:** PUT /api/v1beta/customer-mastery/parties/{party.id}

##### [](#request_16 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
party.  
**id**  
  
string

 | 

The unique ID of the party generated on creation.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**party**  
  
object

 | 

The party to update.

 |
| 

party.  
**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

party.  
**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

party.  
**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

party.  
**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

party.  
**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

party.  
field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

party.  
field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

party.  
field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

party.  
field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

party.  
field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

party.  
field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

**update\_mask**  
  
object

 | 

The field mask of the update.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

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

The unique ID of the party generated on creation.

 |
| 

**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

**field\_groups\[\]**  
  
array \[object\]

 | 

Collections of field groups that are logically grouped into views of party information with the CurrentValue set to whatever the Field Value associated with this party at the time. This is an output only field.

 |
| 

field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

field\_values\[KEY\].  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

field\_values\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on attempt to update a party for a party that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party.id:**  
Id of the party that doesn’t exist

 |

Returned on attempt to update a party with a template that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template.id:**  
Id of the party template that doesn’t exist

 |

Returned on attempt to update a party with a template version that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template\_version.template\_id:**  
Template id for a party template version that doesn’t exist  
**party\_template\_version.version:**  
Version string of the template version that doesn’t exist

 |

Returned on attempt to update a party using a field value for a field that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**field.names:**  
Names of the fields that don’t exist in the template

 |

Returned on attempt to update a party where a required field does not have a value set

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**field.names:**  
Names of the fields that are required but not set

 |

Returned on attempt to update a party using a field value that doesn’t match the field constraint

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**field.name:**  
Name of the field that the value is being created for  
**field.constraint:**  
The constraint type for the field  
**field\_value.type:**  
The type for the field value

 |

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_BatchGetPartiesResponse_BatchGetParties "Copy link to heading")BatchGet

BatchGetParties is used for fetching multiple parties. If any of the parties can not be found then the request returns an error.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.parties:read

**Endpoint:** GET /api/v1beta/customer-mastery/parties:batchGet

##### [](#request_17 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of party IDs used to retrieve parties. The list may be empty and may include duplicated IDs. The list of IDs must not contain any empty strings.

 |

##### [](#responses_17 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**parties**  
  
map \[string: object\]

 | 

Map from party IDs to parties

 |
| 

parties\[KEY\].  
**id**  
  
string

 | 

The unique ID of the party generated on creation.

 |
| 

parties\[KEY\].  
**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

parties\[KEY\].  
**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

parties\[KEY\].  
**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

parties\[KEY\].  
**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

parties\[KEY\].  
**field\_groups\[\]**  
  
array \[object\]

 | 

Collections of field groups that are logically grouped into views of party information with the CurrentValue set to whatever the Field Value associated with this party at the time. This is an output only field.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[KEY\].  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[KEY\].  
**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

parties\[KEY\].  
field\_values\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_SearchPartiesResponse_SearchParties "Copy link to heading")Search

SearchParties is used for retrieving a filtered, paginated, list of parties based on input search parameters. The pagination consistency level is 'page-level'.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.parties:read

**Endpoint:** POST /api/v1beta/customer-mastery/parties:search

##### [](#request_18 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**field\_values**  
  
map \[string: string\]

 | 

Filter using a map of key value pairs where the key is the name of the field, and the value is the value of the field. Resulting parties will be ones that match all field id to value pairings.

 |
| 

**template\_ids\[\]**  
  
array \[string\]

 | 

Filter by template ids.

 |
| 

**template\_version\_numbers\[\]**  
  
array \[string\]

 | 

Filter by template versions.

 |
| 

**full\_names\[\]**  
  
array \[string\]

 | 

Filter parties by full name values.

 |
| 

**party\_view**  
  
enum

 | 

An enum which describes which data should be returned on the resulting parties.  
  
**Enum values**  
**PARTY\_VIEW\_BASIC**  
**PARTY\_VIEW\_INCLUDE\_FIELD\_VALUES**  
**PARTY\_VIEW\_INCLUDE\_FIELD\_VALUES\_AND\_HIERARCHY**  
  
**Default**  
**PARTY\_VIEW\_BASIC**

 |
| 

**order\_by\[\]**  
  
array \[enum\]

 | 

The order that parties are returned in based on create\_timestamp.  
  
**Enum values**  
**ORDER\_BY\_CREATION\_TIME\_DESC**  
**ORDER\_BY\_CREATION\_TIME\_ASC**

 |
| 

**page\_size**  
  
long

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 | 

Pagination page token

 |

##### [](#responses_18 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**parties\[\]**  
  
array \[object\]

 | 

List of parties

 |
| 

parties\[\].  
**id**  
  
string

 | 

The unique ID of the party generated on creation.

 |
| 

parties\[\].  
**template\_id**  
  
string

 | 

The ID of the party template that this party was created using.

 |
| 

parties\[\].  
**template\_version**  
  
string

 | 

The version of the party template that this party was created using.

 |
| 

parties\[\].  
**full\_name**  
  
string

 | 

Full Name of this party.

 |
| 

parties\[\].  
**description**  
  
string

 | 

Human readable description of the party being created.

 |
| 

parties\[\].  
**field\_groups\[\]**  
  
array \[object\]

 | 

Collections of field groups that are logically grouped into views of party information with the CurrentValue set to whatever the Field Value associated with this party at the time. This is an output only field.

 |
| 

parties\[\].  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

parties\[\].  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

parties\[\].  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

parties\[\].  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

parties\[\].  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
**field\_values**  
  
map \[string: object\]

 | 

A map of the currently set FieldValues mapping from field name to field value.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

parties\[\].  
field\_values\[KEY\].  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

parties\[\].  
field\_values\[KEY\].  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

parties\[\].  
field\_values\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

parties\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#partytemplate "Copy link to heading")PartyTemplate

#### [](#available_methods_6 "Copy link to heading")Available methods

-   [List](#_bridge_v1beta_customer_mastery_ListPartyTemplatesResponse_ListPartyTemplates) ListPartyTemplates is used for retrieving a paginated list of party templates
    
-   [Create](#_bridge_v1beta_customer_mastery_PartyTemplate_CreatePartyTemplate) CreateTemplate is used for creating a single party template.
    
-   [BatchGet](#_bridge_v1beta_customer_mastery_BatchGetPartyTemplatesResponse_BatchGetPartyTemplates) BatchGetTemplates is used for fetching multiple party templates.
    

#### [](#_bridge_v1beta_customer_mastery_ListPartyTemplatesResponse_ListPartyTemplates "Copy link to heading")List

ListPartyTemplates is used for retrieving a paginated list of party templates

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_templates:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-templates

##### [](#request_19 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include when retrieving the PartyTemplates. Only if present here will the field be included in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_ACTIVE\_VERSION:**  
Include the active Version for the resource.

 |
| 

**page\_size**  
  
integer

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 | 

Pagination page token.

 |

##### [](#responses_19 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**party\_templates\[\]**  
  
array \[object\]

 | 

List of party templates

 |
| 

party\_templates\[\].  
**id**  
  
string

 | 

Unique ID for this template. This should be human readable and conform to a uri safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_templates\[\].  
**display\_name**  
  
string

 | 

Display Name of this group.

 |
| 

party\_templates\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
**active\_version**  
  
object

 | 

The active version of the PartyTemplate. Only provided when requested.

 |
| 

party\_templates\[\].  
active\_version.  
**id**  
  
string

 | 

Unique ID for this template version. This is generated by the backend and will be a uuid.

 |
| 

party\_templates\[\].  
active\_version.  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_templates\[\].  
active\_version.  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_templates\[\].  
active\_version.  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[\].  
active\_version.  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_templates\[\].  
active\_version.  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
active\_version.  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
active\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[\].  
active\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_PartyTemplate_CreatePartyTemplate "Copy link to heading")Create

CreateTemplate is used for creating a single party template.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.party\_templates:write

**Endpoint:** POST /api/v1beta/customer-mastery/party-templates

##### [](#request_20 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**party\_template**  
  
object

 | 

The party template to create.

 |
| 

party\_template.  
**id**  
  
string

 | 

Unique ID for this template. This should be human readable and conform to a uri safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template.  
**display\_name**  
  
string

 | 

Display Name of this group.

 |
| 

party\_template.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template.  
**active\_version**  
  
object

 | 

The active version of the PartyTemplate. Only provided when requested.

 |
| 

party\_template.  
active\_version.  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_template.  
active\_version.  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_template.  
active\_version.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template.  
active\_version.  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_template.  
active\_version.  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.  
  
**Default**  
**SECOND**

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_template.  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

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

Unique ID for this template. This should be human readable and conform to a uri safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

**display\_name**  
  
string

 | 

Display Name of this group.

 |
| 

**description**  
  
string

 | 

Description.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

**active\_version**  
  
object

 | 

The active version of the PartyTemplate. Only provided when requested.

 |
| 

active\_version.  
**id**  
  
string

 | 

Unique ID for this template version. This is generated by the backend and will be a uuid.

 |
| 

active\_version.  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

active\_version.  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

active\_version.  
**description**  
  
string

 | 

Description.

 |
| 

active\_version.  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

active\_version.  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

active\_version.  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

active\_version.  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

active\_version.  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

active\_version.  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

active\_version.  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

active\_version.  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

active\_version.  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

active\_version.  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

active\_version.  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

active\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

active\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

Returned on a non-idempotent attempt to recreate a resource

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_BatchGetPartyTemplatesResponse_BatchGetPartyTemplates "Copy link to heading")BatchGet

BatchGetTemplates is used for fetching multiple party templates. If any of the party templates can not be found then the request returns an error.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_templates:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-templates:batchGet

##### [](#request_21 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of party template IDs used to retrieve party templates. The list may be empty and may include duplicated IDs. The list of IDs must not contain any empty strings.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include when retrieving the PartyTemplates. Only if present here will the field be included in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_ACTIVE\_VERSION:**  
Include the active Version for the resource.

 |

##### [](#responses_21 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**party\_templates**  
  
map \[string: object\]

 | 

Map from party template IDs to party templates.

 |
| 

party\_templates\[KEY\].  
**id**  
  
string

 | 

Unique ID for this template. This should be human readable and conform to a uri safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_templates\[KEY\].  
**display\_name**  
  
string

 | 

Display Name of this group.

 |
| 

party\_templates\[KEY\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
**active\_version**  
  
object

 | 

The active version of the PartyTemplate. Only provided when requested.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**id**  
  
string

 | 

Unique ID for this template version. This is generated by the backend and will be a uuid.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
active\_version.  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_templates\[KEY\].  
active\_version.  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#partytemplateusage "Copy link to heading")PartyTemplateUsage

#### [](#available_methods_7 "Copy link to heading")Available methods

-   [Get](#_bridge_v1beta_customer_mastery_GetPartyTemplateUsageResponse_GetPartyTemplateUsage) GetPartyTemplateUsage is used to fetch usage counts for a specific party template, counting associated parties and template versions.
    

#### [](#_bridge_v1beta_customer_mastery_GetPartyTemplateUsageResponse_GetPartyTemplateUsage "Copy link to heading")Get

GetPartyTemplateUsage is used to fetch usage counts for a specific party template, counting associated parties and template versions.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_templates:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-templates/{id}:usage

##### [](#request_22 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the party template.

 |

##### [](#responses_22 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**parties**  
  
object

 | 

The number of parties using this party template.

 |
| 

parties.  
**count**  
  
long

 | 

The number of times a resource is used.

 |
| 

**party\_template\_versions**  
  
object

 | 

The number of party template versions using this party template.

 |
| 

party\_template\_versions.  
**count**  
  
long

 | 

The number of times a resource is used.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#partytemplateversion "Copy link to heading")PartyTemplateVersion

#### [](#available_methods_8 "Copy link to heading")Available methods

-   [List](#_bridge_v1beta_customer_mastery_ListPartyTemplateVersionsResponse_ListPartyTemplateVersions) ListPartyTemplateVersions is used for retrieving a filtered, paginated, list of party template versions.
    
-   [Create](#_bridge_v1beta_customer_mastery_PartyTemplateVersion_CreatePartyTemplateVersion) CreatePartyTemplateVersion is used for creating a single party template version.
    
-   [BatchGet](#_bridge_v1beta_customer_mastery_BatchGetPartyTemplateVersionsResponse_BatchGetPartyTemplateVersions) BatchGetPartyTemplateVersions is used for fetching multiple party templates version.
    
-   [Validate](#_bridge_v1beta_customer_mastery_ValidatePartyTemplateVersionResponse_ValidatePartyTemplateVersion) ValidatePartyTemplateVersion is used to validate a new party template version.
    

#### [](#_bridge_v1beta_customer_mastery_ListPartyTemplateVersionsResponse_ListPartyTemplateVersions "Copy link to heading")List

ListPartyTemplateVersions is used for retrieving a filtered, paginated, list of party template versions. The pagination consistency level is 'page-level'.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_template\_versions:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-template-versions

##### [](#request_23 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**party\_template\_version\_view**  
  
enum

 | 

An enum which describes which data should be returned on the resulting party templates.  
  
**Enum values**  
**PARTY\_TEMPLATE\_VERSION\_VIEW\_BASIC**  
**PARTY\_TEMPLATE\_VERSION\_VIEW\_INCLUDE\_FIELD\_HIERARCHY**  
  
**Default**  
**PARTY\_TEMPLATE\_VERSION\_VIEW\_BASIC**

 |
| 

**party\_template\_id**  
  
string

 | 

Filter by party template id.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

The order that party template versions are returned in based on create\_timestamp. Defaults to ORDER\_BY\_CREATION\_TIME\_DESC.  
  
**Enum values**  
**ORDER\_BY\_CREATION\_TIME\_DESC**  
**ORDER\_BY\_CREATION\_TIME\_ASC**

 |
| 

**page\_size**  
  
integer

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 |  |

##### [](#responses_23 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**party\_template\_versions\[\]**  
  
array \[object\]

 | 

List of parties

 |
| 

party\_template\_versions\[\].  
**id**  
  
string

 | 

Unique ID for this template version. This is generated by the backend and will be a uuid.

 |
| 

party\_template\_versions\[\].  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_template\_versions\[\].  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_template\_versions\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_versions\[\].  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_template\_versions\[\].  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[\].  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_PartyTemplateVersion_CreatePartyTemplateVersion "Copy link to heading")Create

CreatePartyTemplateVersion is used for creating a single party template version.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.party\_template\_versions:write

**Endpoint:** POST /api/v1beta/customer-mastery/party-template-versions

##### [](#request_24 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**party\_template\_version**  
  
object

 | 

The party template to create.

 |
| 

party\_template\_version.  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_template\_version.  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_template\_version.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_version.  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_template\_version.  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.  
  
**Default**  
**SECOND**

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |

##### [](#responses_24 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique ID for this template version. This is generated by the backend and will be a uuid.

 |
| 

**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

**description**  
  
string

 | 

Description.

 |
| 

**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.  
  
*fields\[\] items can contain one of **field** or field\_group*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

field\_groups\[\].  
fields\[\].  
**field\_group**  
  
object

 | 

The field group that this holder holds.  
  
*fields\[\] items can contain one of field or **field\_group***

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**description**  
  
string

 | 

Description.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

field\_groups\[\].  
fields\[\].  
field\_group.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on attempt to create a party template version for a party template that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template.id:**  
Id of the party template that doesn’t exist

 |

Returned on attempt to create a party template version that is not higher than the currently active version

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template.active\_version.version:**  
Version string of the currently active template version  
**party\_template\_version.version:**  
Version string of the new template version

 |

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

Returned on a non-idempotent attempt to recreate a resource

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_BatchGetPartyTemplateVersionsResponse_BatchGetPartyTemplateVersions "Copy link to heading")BatchGet

BatchGetPartyTemplateVersions is used for fetching multiple party templates version. If any of the party template versions can not be found then the request returns an error.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_template\_versions:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-template-versions:batchGet

##### [](#request_25 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of party template IDs used to retrieve party templates. The list may be empty and may include duplicated IDs. The list of IDs must not contain any empty strings.

 |

##### [](#responses_25 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**party\_template\_versions**  
  
map \[string: object\]

 | 

Map from party template IDs to party template versions.

 |
| 

party\_template\_versions\[KEY\].  
**id**  
  
string

 | 

Unique ID for this template version. This is generated by the backend and will be a uuid.

 |
| 

party\_template\_versions\[KEY\].  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_template\_versions\[KEY\].  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_template\_versions\[KEY\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_versions\[KEY\].  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_template\_versions\[KEY\].  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**id**  
  
string

 | 

Unique ID for this field group. This is generated by the backend and will be a uuid.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**id**  
  
string

 | 

Unique ID for this field. This is generated by the backend and will be a uuid.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_type**  
  
enum

 | 

The type of ownership this field uses.  
  
**Enum values**  
**OWNER\_TYPE\_UNKNOWN:**  
Sentinel default value for detecting the absence of an owner.  
**OWNER\_TYPE\_PARTY\_TEMPLATE:**  
The field is owned by a party template.  
**OWNER\_TYPE\_GLOBAL:**  
The field is globally owned.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_id**  
  
string

 | 

The ID of the owner if not globally owned.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**owner\_version**  
  
string

 | 

The version of the owner if not globally owned.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**display\_path\[\]**  
  
array \[string\]

 | 

A string array representation hierarchical path that this field is under. This uses the display name of each of the parent groups.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**current\_value**  
  
object

 | 

The current Value of an field. This is for use in Parties and will always be nil when associated with a party template.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**id**  
  
string

 | 

Unique ID for this field value.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_id**  
  
string

 | 

Field that this value is associated with.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**field\_name**  
  
string

 | 

Name of the field that this value is associated with.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**party\_id**  
  
string

 | 

The party that this field value is owned by.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**value**  
  
object

 | 

The actual value of the field value.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**string\_value**  
  
string

 | 

The value of a string Field.  
  
*The value of the Field.  
  
value can contain one of **string\_value**, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**decimal\_value**  
  
string

 | 

The value of a decimal Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, **decimal\_value**, integer\_value, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**integer\_value**  
  
string (int64)

 | 

The value of a integer Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, **integer\_value**, enumeration\_value, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**enumeration\_value**  
  
string

 | 

The value of an enumeration Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, **enumeration\_value**, date\_time\_value, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**date\_time\_value**  
  
dateTime

 | 

The value of a date-time Field, in UTC. Formatted as an RFC3339 timestamp.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, **date\_time\_value**, bool\_value or uuid\_value*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**bool\_value**  
  
boolean

 | 

The value of a boolean Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, **bool\_value** or uuid\_value*

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
value.  
**uuid\_value**  
  
string

 | 

The value on a uuid Field.  
  
*The value of the Field.  
  
value can contain one of string\_value, decimal\_value, integer\_value, enumeration\_value, date\_time\_value, bool\_value or **uuid\_value***

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
current\_value.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
fields\[\].  
field.  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[KEY\].  
field\_groups\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_versions\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was updated. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_ValidatePartyTemplateVersionResponse_ValidatePartyTemplateVersion "Copy link to heading")Validate

ValidatePartyTemplateVersion is used to validate a new party template version. 1. It does validation on the backend (no repeated fields) and precondition validation (the template exists, the version is higher than the active one). 2. It checks compatibility with a specified or the currently active party template version.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_template\_versions:read

**Endpoint:** POST /api/v1beta/customer-mastery/party-template-versions:validate

##### [](#request_26 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**party\_template\_version**  
  
object

 | 

The party template version to validate.

 |
| 

party\_template\_version.  
**version**  
  
string

 | 

The version of the party template. Must be a valid semantic version string. This version string is required when creating a new party template version. And will default to "1.0.0" if not set when creating as part of PartyTemplate creation.

 |
| 

party\_template\_version.  
**display\_name**  
  
string

 | 

Display Name of this template version.

 |
| 

party\_template\_version.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_version.  
**template\_id**  
  
string

 | 

The id of the PartyTemplate that this version belongs to. This should be human readable and conform to a uri safe format.

 |
| 

party\_template\_version.  
**field\_groups\[\]**  
  
array \[object\]

 | 

The field\_groups available on this template version.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**name**  
  
string

 | 

Name of this field Group.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_version.  
field\_groups\[\].  
**fields\[\]**  
  
array \[object\]

 | 

The fields that are associated with this group in order.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
**field**  
  
object

 | 

The field that this holder holds.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**name**  
  
string

 | 

Name of this field. This must be set by the user and must start with an alphanumeric character and use either hyphens or underscores for spaces.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**display\_name**  
  
string

 | 

Display Name of this field.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**description**  
  
string

 | 

Description.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**constraint**  
  
object

 | 

Constraint that defines the value that this field can be.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**string\_constraint**  
  
object

 | 

Constraints on a string Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of **string\_constraint**, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**min\_length**  
  
integer

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**max\_length**  
  
integer

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
string\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**decimal\_constraint**  
  
object

 | 

Constraints on an arbitrary precision number Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, **decimal\_constraint**, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the number can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
decimal\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**integer\_constraint**  
  
object

 | 

Constraints on an integer Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, **integer\_constraint**, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**min\_value**  
  
string

 | 

The minimum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**max\_value**  
  
string

 | 

The maximum value (inclusive) that the integer can be. An empty string indicates the constraint is not set.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
integer\_constraint.  
**regex**  
  
string

 | 

regex that the Field must adhere to. Can be left blank.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**enumeration\_constraint**  
  
object

 | 

Constraints on an enumeration Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, **enumeration\_constraint**, date\_time\_constraint, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
enumeration\_constraint.  
**permitted\_values\[\]**  
  
array \[string\]

 | 

Values must specify one of the strings listed here, of which there must be at least two, and no value may be repeated.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**date\_time\_constraint**  
  
object

 | 

Constraints on a date-time Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, **date\_time\_constraint**, boolean\_constraint or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**precision**  
  
enum

 | 

Least significant component that can be set.  
  
**Enum values**  
**SECOND:**  
Up to YYYY-MM-DD HH:mm:ss can be specified. Default.  
**DAY:**  
Up to YYYY-MM-DD can be specified.  
  
**Default**  
**SECOND**

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**earliest**  
  
dateTime

 | 

The earliest permitted date-time, in UTC. Optional. Formatted as an RFC3339. timestamp.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
date\_time\_constraint.  
**latest**  
  
dateTime

 | 

The latest permitted date-time, in UTC. Optional. Formatted as an RFC3339 timestamp.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**boolean\_constraint**  
  
object

 | 

Constraints on a boolean Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, **boolean\_constraint** or uuid\_constraint*

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
constraint.  
**uuid\_constraint**  
  
object

 | 

Constraints on a uuid Field.  
  
*Constraints on the value of the Field, determining the type of the Field and defining type-specific constraints on what Field Values are valid.  
  
constraint can contain one of string\_constraint, decimal\_constraint, integer\_constraint, enumeration\_constraint, date\_time\_constraint, boolean\_constraint or **uuid\_constraint***

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**immutable**  
  
boolean

 | 

Whether or not this field can be changed.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**pii**  
  
boolean

 | 

Whether or not this field can be contains pii.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**required**  
  
boolean

 | 

Whether or not this field is required.

 |
| 

party\_template\_version.  
field\_groups\[\].  
fields\[\].  
field.  
**searchable**  
  
boolean

 | 

Whether or not the field can be used for searching.

 |
| 

**comparison\_version\_number**  
  
string

 | 

(Optional) The semantic version number of the party template version to compare against. If not set, the active version of the party template will be used.

 |

##### [](#responses_26 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**is\_valid**  
  
boolean

 | 

Whether the new version is valid.

 |
| 

**error**  
  
object

 | 

The errors found in validation.

 |
| 

error.  
**message**  
  
string

 | 

A human-readable description of the error. The exact message is subject to change and should not be used programmatically.

 |
| 

error.  
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

error.  
**details\[\]**  
  
array \[object\]

 | 

An optional list of messages that carry the error details.

 |
| 

error.  
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

error.  
details\[\].  
**value**  
  
byte

 | 

Must be a valid serialized protocol buffer of the above specified type.

 |
| 

**is\_compatible**  
  
boolean

 | 

Whether the new version is compatible with the previous version.

 |
| 

**incompatible\_changes\[\]**  
  
array \[object\]

 | 

List of incompatible changes.

 |
| 

incompatible\_changes\[\].  
**field\_type\_change**  
  
object

 | 

A change representing incompatible field types.

 |
| 

incompatible\_changes\[\].  
field\_type\_change.  
**field\_name**  
  
string

 | 

The name of the field that has a compatibility issue.

 |
| 

incompatible\_changes\[\].  
field\_type\_change.  
**current\_type**  
  
string

 | 

The data type of the field in the previous version.

 |
| 

incompatible\_changes\[\].  
field\_type\_change.  
**new\_type**  
  
string

 | 

The data type of the field in the new version.

 |
| 

**removed\_fields\[\]**  
  
array \[string\]

 | 

List of fields that have been removed between versions.

 |

400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on attempt to validate a party template version for a party template that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template.id:**  
Id of the party template that doesn’t exist

 |

Returned on attempt to validate against a comparison party template version that doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template\_version.template\_id:**  
Template id for a party template version that doesn’t exist  
**party\_template\_version.version:**  
Version string of the comparison template version that doesn’t exist

 |

Returned on attempt to validate a proposed party template version that is not higher than the active version

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party\_template.active\_version.version:**  
Version string of the active template version  
**party\_template\_version.version:**  
Version string of the proposed template version that was validated

 |

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#partytemplateversionusage "Copy link to heading")PartyTemplateVersionUsage

#### [](#available_methods_9 "Copy link to heading")Available methods

-   [Get](#_bridge_v1beta_customer_mastery_GetPartyTemplateVersionUsageResponse_GetPartyTemplateVersionUsage) GetPartyTemplateVersionUsage fetches usage counts for a specific party template version, counting associated parties.
    
-   [BatchGet](#_bridge_v1beta_customer_mastery_BatchGetPartyTemplateVersionUsageResponse_BatchGetPartyTemplateVersionUsage) BatchGetPartyTemplateVersionUsage fetches usage counts for specified party template versions, counting associated parties.
    

#### [](#_bridge_v1beta_customer_mastery_GetPartyTemplateVersionUsageResponse_GetPartyTemplateVersionUsage "Copy link to heading")Get

GetPartyTemplateVersionUsage fetches usage counts for a specific party template version, counting associated parties.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_template\_versions:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-template-versions/{id}:usage

##### [](#request_27 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The UUID of the party template version.

 |

##### [](#responses_27 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**parties**  
  
object

 | 

The number of parties using this party template version.

 |
| 

parties.  
**count**  
  
long

 | 

The number of times a resource is used.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_BatchGetPartyTemplateVersionUsageResponse_BatchGetPartyTemplateVersionUsage "Copy link to heading")BatchGet

BatchGetPartyTemplateVersionUsage fetches usage counts for specified party template versions, counting associated parties.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.party\_template\_versions:read

**Endpoint:** GET /api/v1beta/customer-mastery/party-template-versions:batchGetUsage

##### [](#request_28 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of party template version UUIDs used to retrieve usage counts. A maximum of 100 versions can be requested for in a batch. The list may include duplicated IDs. It must not contain any empty strings.

 |

##### [](#responses_28 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**parties**  
  
map \[string: object\]

 | 

Map from party template version IDs to number of parties.

 |
| 

parties\[KEY\].  
**count**  
  
long

 | 

The number of times a resource is used.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#relationship "Copy link to heading")Relationship

#### [](#available_methods_10 "Copy link to heading")Available methods

-   [List](#_bridge_v1beta_customer_mastery_ListRelationshipsResponse_ListRelationships) ListRelationships is used for retrieving a filtered, paginated, list of party relationships.
    
-   [Create](#_bridge_v1beta_customer_mastery_Relationship_CreateRelationship) CreateRelationship is used for creating a single party relationship.
    
-   [Update](#_bridge_v1beta_customer_mastery_Relationship_UpdateRelationship) UpdateRelationship is used for updating a single relationship.
    
-   [BatchGet](#_bridge_v1beta_customer_mastery_BatchGetRelationshipsResponse_BatchGetRelationships) BatchGetRelationship is used for fetching multiple relationships.
    

#### [](#_bridge_v1beta_customer_mastery_ListRelationshipsResponse_ListRelationships "Copy link to heading")List

ListRelationships is used for retrieving a filtered, paginated, list of party relationships. The pagination consistency level is 'page-level'.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.relationships:read

**Endpoint:** GET /api/v1beta/customer-mastery/relationships

##### [](#request_29 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**party\_a\_ids**  
  
array \[string\]

 |  |
| 

**party\_b\_ids**  
  
array \[string\]

 |  |
| 

**or\_fields**  
  
array \[enum\]

 | 

+  
**Enum values**  
**OR\_FIELD\_PARTY\_A\_IDS**  
**OR\_FIELD\_PARTY\_B\_IDS**

 |
| 

**relationship\_type\_ids**  
  
array \[string\]

 |  |
| 

**list\_inactive\_relationships**  
  
boolean

 |  |
| 

**page\_size**  
  
integer

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 |  |

##### [](#responses_29 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**relationships\[\]**  
  
array \[object\]

 | 

List of parties

 |
| 

relationships\[\].  
**id**  
  
string

 | 

Id of the resource.

 |
| 

relationships\[\].  
**party\_a\_id**  
  
string

 | 

ID of Party A of the two party relationship.

 |
| 

relationships\[\].  
**party\_b\_id**  
  
string

 | 

ID of Party B of the two party relationship.

 |
| 

relationships\[\].  
**relationship\_type\_id**  
  
string

 | 

The id of the relationship type to create the relationship using.

 |
| 

relationships\[\].  
**relationship\_type**  
  
object

 | 

The type of the relationship.

 |
| 

relationships\[\].  
relationship\_type.  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationships\[\].  
relationship\_type.  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationships\[\].  
relationship\_type.  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationships\[\].  
relationship\_type.  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationships\[\].  
relationship\_type.  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

relationships\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

relationships\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |
| 

relationships\[\].  
**status**  
  
enum

 | 

The current status of the relationship.  
  
**Enum values**  
**RELATIONSHIP\_STATUS\_UNKNOWN:**  
Sentinel default value for detecting the absence of an status.  
**RELATIONSHIP\_STATUS\_ACTIVE:**  
The current relationship is active.  
**RELATIONSHIP\_STATUS\_INACTIVE:**  
The current relationship has been disabled and is inactive.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_Relationship_CreateRelationship "Copy link to heading")Create

CreateRelationship is used for creating a single party relationship.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.relationships:write

**Endpoint:** POST /api/v1beta/customer-mastery/relationships

##### [](#request_30 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**relationship**  
  
object

 | 

The relationship to create.

 |
| 

relationship.  
**party\_a\_id**  
  
string

 | 

ID of Party A of the two party relationship.

 |
| 

relationship.  
**party\_b\_id**  
  
string

 | 

ID of Party B of the two party relationship.

 |
| 

relationship.  
**relationship\_type\_id**  
  
string

 | 

The id of the relationship type to create the relationship using.

 |
| 

relationship.  
**status**  
  
enum

 | 

The current status of the relationship.  
  
**Enum values**  
**RELATIONSHIP\_STATUS\_UNKNOWN:**  
Sentinel default value for detecting the absence of an status.  
**RELATIONSHIP\_STATUS\_ACTIVE:**  
The current relationship is active.  
**RELATIONSHIP\_STATUS\_INACTIVE:**  
The current relationship has been disabled and is inactive.  
  
**Default**  
**RELATIONSHIP\_STATUS\_UNKNOWN**

 |

##### [](#responses_30 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Id of the resource.

 |
| 

**party\_a\_id**  
  
string

 | 

ID of Party A of the two party relationship.

 |
| 

**party\_b\_id**  
  
string

 | 

ID of Party B of the two party relationship.

 |
| 

**relationship\_type\_id**  
  
string

 | 

The id of the relationship type to create the relationship using.

 |
| 

**relationship\_type**  
  
object

 | 

The type of the relationship.

 |
| 

relationship\_type.  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationship\_type.  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationship\_type.  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationship\_type.  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationship\_type.  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |
| 

**status**  
  
enum

 | 

The current status of the relationship.  
  
**Enum values**  
**RELATIONSHIP\_STATUS\_UNKNOWN:**  
Sentinel default value for detecting the absence of an status.  
**RELATIONSHIP\_STATUS\_ACTIVE:**  
The current relationship is active.  
**RELATIONSHIP\_STATUS\_INACTIVE:**  
The current relationship has been disabled and is inactive.

 |

400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on attempt to create a relationship between a party and itself

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**relationship.party\_a\_id:**  
Id of party A  
**relationship.party\_b\_id:**  
Id of party B

 |

Returned on attempt to create a relationship that already exists

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**relationship.party\_a\_id:**  
Id of party A  
**relationship.party\_b\_id:**  
Id of party B  
**relationship.relationship\_type\_id:**  
Id of the relationship type

 |

Returned on attempt to create a relationship between two parties where at least one doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**party.ids:**  
Ids of the parties that don’t exist

 |

Returned on attempt to create a relationship between two parties where the relationship type doesn’t exist

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**relationship.relationship\_type\_id:**  
Id of the relationship type that doesn’t exist

 |

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_Relationship_UpdateRelationship "Copy link to heading")Update

UpdateRelationship is used for updating a single relationship.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.relationships:write

**Endpoint:** PUT /api/v1beta/customer-mastery/relationships/{relationship.id}

##### [](#request_31 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
relationship.  
**id**  
  
string

 | 

Id of the resource.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**relationship**  
  
object

 | 

The relationship to update.

 |
| 

relationship.  
**party\_a\_id**  
  
string

 | 

ID of Party A of the two party relationship.

 |
| 

relationship.  
**party\_b\_id**  
  
string

 | 

ID of Party B of the two party relationship.

 |
| 

relationship.  
**relationship\_type\_id**  
  
string

 | 

The id of the relationship type to create the relationship using.

 |
| 

relationship.  
**status**  
  
enum

 | 

The current status of the relationship.  
  
**Enum values**  
**RELATIONSHIP\_STATUS\_UNKNOWN:**  
Sentinel default value for detecting the absence of an status.  
**RELATIONSHIP\_STATUS\_ACTIVE:**  
The current relationship is active.  
**RELATIONSHIP\_STATUS\_INACTIVE:**  
The current relationship has been disabled and is inactive.  
  
**Default**  
**RELATIONSHIP\_STATUS\_UNKNOWN**

 |
| 

**update\_mask**  
  
object

 | 

The field mask of the update.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#responses_31 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Id of the resource.

 |
| 

**party\_a\_id**  
  
string

 | 

ID of Party A of the two party relationship.

 |
| 

**party\_b\_id**  
  
string

 | 

ID of Party B of the two party relationship.

 |
| 

**relationship\_type\_id**  
  
string

 | 

The id of the relationship type to create the relationship using.

 |
| 

**relationship\_type**  
  
object

 | 

The type of the relationship.

 |
| 

relationship\_type.  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationship\_type.  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationship\_type.  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationship\_type.  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationship\_type.  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |
| 

**status**  
  
enum

 | 

The current status of the relationship.  
  
**Enum values**  
**RELATIONSHIP\_STATUS\_UNKNOWN:**  
Sentinel default value for detecting the absence of an status.  
**RELATIONSHIP\_STATUS\_ACTIVE:**  
The current relationship is active.  
**RELATIONSHIP\_STATUS\_INACTIVE:**  
The current relationship has been disabled and is inactive.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_BatchGetRelationshipsResponse_BatchGetRelationships "Copy link to heading")BatchGet

BatchGetRelationship is used for fetching multiple relationships. If any of the relationships can not be found then the request returns an error.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.relationships:read

**Endpoint:** GET /api/v1beta/customer-mastery/relationships:batchGet

##### [](#request_32 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of relationship IDs used to retrieve relationships. The list may be empty and may include duplicated IDs. The list of IDs must not contain any empty strings.

 |

##### [](#responses_32 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**relationships**  
  
map \[string: object\]

 | 

Map from relationship IDs to relationships

 |
| 

relationships\[KEY\].  
**id**  
  
string

 | 

Id of the resource.

 |
| 

relationships\[KEY\].  
**party\_a\_id**  
  
string

 | 

ID of Party A of the two party relationship.

 |
| 

relationships\[KEY\].  
**party\_b\_id**  
  
string

 | 

ID of Party B of the two party relationship.

 |
| 

relationships\[KEY\].  
**relationship\_type\_id**  
  
string

 | 

The id of the relationship type to create the relationship using.

 |
| 

relationships\[KEY\].  
**relationship\_type**  
  
object

 | 

The type of the relationship.

 |
| 

relationships\[KEY\].  
relationship\_type.  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationships\[KEY\].  
relationship\_type.  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationships\[KEY\].  
relationship\_type.  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationships\[KEY\].  
relationship\_type.  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationships\[KEY\].  
relationship\_type.  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

relationships\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this value was created. Formatted as an RFC3339 timestamp.

 |
| 

relationships\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |
| 

relationships\[KEY\].  
**status**  
  
enum

 | 

The current status of the relationship.  
  
**Enum values**  
**RELATIONSHIP\_STATUS\_UNKNOWN:**  
Sentinel default value for detecting the absence of an status.  
**RELATIONSHIP\_STATUS\_ACTIVE:**  
The current relationship is active.  
**RELATIONSHIP\_STATUS\_INACTIVE:**  
The current relationship has been disabled and is inactive.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

### [](#relationshiptype "Copy link to heading")RelationshipType

#### [](#available_methods_11 "Copy link to heading")Available methods

-   [List](#_bridge_v1beta_customer_mastery_ListRelationshipTypesResponse_ListRelationshipTypes) ListRelationshipTypes is used for retrieving a paginated list of party relationships.
    
-   [Create](#_bridge_v1beta_customer_mastery_RelationshipType_CreateRelationshipType) CreateRelationshipType is used for creating a single relationship type.
    
-   [BatchGet](#_bridge_v1beta_customer_mastery_BatchGetRelationshipTypesResponse_BatchGetRelationshipTypes) BatchGetRelationshipType is used for fetching multiple relationships.
    

#### [](#_bridge_v1beta_customer_mastery_ListRelationshipTypesResponse_ListRelationshipTypes "Copy link to heading")List

ListRelationshipTypes is used for retrieving a paginated list of party relationships. The pagination consistency level is 'page-level'.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.relationship\_types:read

**Endpoint:** GET /api/v1beta/customer-mastery/relationship-types

##### [](#request_33 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 |  |
| 

**page\_size**  
  
integer

 | 

Pagination page size. Required. Must be greater than 0 and no greater than 200.

 |
| 

**page\_token**  
  
string

 |  |

##### [](#responses_33 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**relationship\_types\[\]**  
  
array \[object\]

 | 

List of parties

 |
| 

relationship\_types\[\].  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationship\_types\[\].  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationship\_types\[\].  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationship\_types\[\].  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationship\_types\[\].  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

relationship\_types\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this relationship type was created. Formatted as an RFC3339 timestamp.

 |
| 

relationship\_types\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |
| 

**next\_page\_token**  
  
string

 | 

Pagination next page token

 |
| 

**previous\_page\_token**  
  
string

 | 

Pagination previous page token

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_RelationshipType_CreateRelationshipType "Copy link to heading")Create

CreateRelationshipType is used for creating a single relationship type.

**Permission Scopes:** bridge:write, bridge.customer\_mastery.relationship\_types:write

**Endpoint:** POST /api/v1beta/customer-mastery/relationship-types

##### [](#request_34 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A request identifier used to ensure idempotency.

 |
| 

**relationship\_type**  
  
object

 | 

The relationship to create.

 |
| 

relationship\_type.  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationship\_type.  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationship\_type.  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationship\_type.  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationship\_type.  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |

##### [](#responses_34 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp this relationship type was created. Formatted as an RFC3339 timestamp.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1beta_customer_mastery_BatchGetRelationshipTypesResponse_BatchGetRelationshipTypes "Copy link to heading")BatchGet

BatchGetRelationshipType is used for fetching multiple relationships. If any of the relationships can not be found then the request returns an error.

**Permission Scopes:** bridge:read, bridge.customer\_mastery.relationship\_types:read

**Endpoint:** GET /api/v1beta/customer-mastery/relationship-types:batchGet

##### [](#request_35 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of relationship type IDs used to retrieve relationship types. The list may be empty and may include duplicated IDs. The list of IDs must not contain any empty strings.

 |

##### [](#responses_35 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**relationship\_types**  
  
map \[string: object\]

 | 

Map from relationship type IDs to relationship types

 |
| 

relationship\_types\[KEY\].  
**id**  
  
string

 | 

Id of the resource. This is a required field, should be human readable and must be set to a URI safe format.  
This field must contain a URI-safe identifier of 128 characters or less.  
Required.

 |
| 

relationship\_types\[KEY\].  
**party\_a\_role**  
  
string

 | 

Role of Party A of the two party relationship.

 |
| 

relationship\_types\[KEY\].  
**party\_b\_role**  
  
string

 | 

Role of Party B of the two party relationship.

 |
| 

relationship\_types\[KEY\].  
**party\_a\_role\_description**  
  
string

 | 

Description of the role of Party A of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is parent of".

 |
| 

relationship\_types\[KEY\].  
**party\_b\_role\_description**  
  
string

 | 

Description of the role of Party B of the two party relationship. E.g. for a parent/child relationship where party\_a\_role is parent and party\_b\_role is child, this might be "is child of".

 |
| 

relationship\_types\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp this relationship type was created. Formatted as an RFC3339 timestamp.

 |
| 

relationship\_types\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp this value was last updated. Formatted as an RFC3339 timestamp.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

## [](#external_systems "Copy link to heading")External Systems

### [](#externalsystem "Copy link to heading")ExternalSystem

#### [](#available_methods_12 "Copy link to heading")Available methods

-   [List](#_bridge_v1_externalsystems_ListExternalSystemsResponse_ListExternalSystems) Lists and filters External Systems.
    
-   [Create](#_bridge_v1_externalsystems_ExternalSystem_CreateExternalSystem) Creates an ExternalSystem.
    
-   [Update](#_bridge_v1_externalsystems_ExternalSystem_UpdateExternalSystem) Updates an ExternalSystem.
    
-   [Get](#_bridge_v1_externalsystems_ExternalSystem_GetExternalSystem) Retrieves a single External System by ID.
    
-   [BatchGet](#_bridge_v1_externalsystems_BatchGetExternalSystemsResponse_BatchGetExternalSystems) Retrieves one or more External Systems by ID.
    

#### [](#_bridge_v1_externalsystems_ListExternalSystemsResponse_ListExternalSystems "Copy link to heading")List

Lists and filters External Systems. Results are returned ordered by descending `update_timestamp` (most recently updated first).

**Permission Scopes:** bridge:read, bridge.external\_systems:read

**Pagination consistency guarantees:** Snapshot

**Endpoint:** GET /api/v1/external-systems

##### [](#request_36 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The maximum number of results to be returned.  
  
Required.  
Min value: 1.  
Max value: 50.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are retrieved from. If empty, the first page of results will be returned. Optional.

 |

##### [](#responses_36 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**external\_systems\[\]**  
  
array \[object\]

 | 

A list of matching External Systems.

 |
| 

external\_systems\[\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.  
  
Required.

 |
| 

external\_systems\[\].  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

external\_systems\[\].  
**type**  
  
enum

 | 

The type of external system. This cannot be changed after creation.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_TYPE\_CORE:**  
A Vault Core System.  
**EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS:**  
A Vault Payments System.  
**EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY:**  
A Third-Party System.

 |
| 

external\_systems\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was created. Output only.

 |
| 

external\_systems\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was updated. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

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

#### [](#_bridge_v1_externalsystems_ExternalSystem_CreateExternalSystem "Copy link to heading")Create

Creates an ExternalSystem.

**Permission Scopes:** bridge:write, bridge.external\_systems:write

**Endpoint:** POST /api/v1/external-systems

##### [](#request_37 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**external\_system**  
  
object

 | 

The External System to create.  
  
Required.

 |
| 

external\_system.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.  
  
Required.

 |
| 

external\_system.  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

external\_system.  
**type**  
  
enum

 | 

The type of external system. This cannot be changed after creation.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_TYPE\_CORE:**  
A Vault Core System.  
**EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS:**  
A Vault Payments System.  
**EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY:**  
A Third-Party System.  
  
**Default**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**

 |

##### [](#responses_37 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.  
  
Required.

 |
| 

**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

**type**  
  
enum

 | 

The type of external system. This cannot be changed after creation.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_TYPE\_CORE:**  
A Vault Core System.  
**EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS:**  
A Vault Payments System.  
**EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY:**  
A Third-Party System.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was updated. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

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

Returned on a non-idempotent attempt to recreate a resource

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1_externalsystems_ExternalSystem_UpdateExternalSystem "Copy link to heading")Update

Updates an ExternalSystem. Fields allowed for update are: display\_name.

**Permission Scopes:** bridge:write, bridge.external\_systems:write

**Endpoint:** PUT /api/v1/external-systems/{external\_system.id}

##### [](#request_38 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
external\_system.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**external\_system**  
  
object

 | 

The External System to update.  
  
Required.

 |
| 

external\_system.  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields of the ExternalSystem are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#responses_38 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.  
  
Required.

 |
| 

**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

**type**  
  
enum

 | 

The type of external system. This cannot be changed after creation.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_TYPE\_CORE:**  
A Vault Core System.  
**EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS:**  
A Vault Payments System.  
**EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY:**  
A Third-Party System.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was updated. Output only.

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

#### [](#_bridge_v1_externalsystems_ExternalSystem_GetExternalSystem "Copy link to heading")Get

Retrieves a single External System by ID.

**Permission Scopes:** bridge:read, bridge.external\_systems:read

**Endpoint:** GET /api/v1/external-systems/{id}

##### [](#request_39 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the External System to be retrieved.

 |

##### [](#responses_39 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.  
  
Required.

 |
| 

**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

**type**  
  
enum

 | 

The type of external system. This cannot be changed after creation.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_TYPE\_CORE:**  
A Vault Core System.  
**EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS:**  
A Vault Payments System.  
**EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY:**  
A Third-Party System.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was updated. Output only.

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

#### [](#_bridge_v1_externalsystems_BatchGetExternalSystemsResponse_BatchGetExternalSystems "Copy link to heading")BatchGet

Retrieves one or more External Systems by ID. A `NOT_FOUND` API error will be returned if any of the requested resources can not be found.

**Permission Scopes:** bridge:read, bridge.external\_systems:read

**Endpoint:** GET /api/v1/external-systems:batchGet

##### [](#request_40 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the External Systems to be retrieved.  
  
Required.  
Min length: 1 characters.  
Max length: 50 characters.

 |

##### [](#responses_40 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**external\_systems**  
  
map \[string: object\]

 | 

A map of the External System ID to the External System.

 |
| 

external\_systems\[KEY\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. This ID is used by Apps and other Components wanting to use the integration, human-readable IDs are recommended.  
  
Required.

 |
| 

external\_systems\[KEY\].  
**display\_name**  
  
string

 | 

A descriptive name used for display purposes.  
  
Required.

 |
| 

external\_systems\[KEY\].  
**type**  
  
enum

 | 

The type of external system. This cannot be changed after creation.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_TYPE\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_TYPE\_CORE:**  
A Vault Core System.  
**EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS:**  
A Vault Payments System.  
**EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY:**  
A Third-Party System.

 |
| 

external\_systems\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was created. Output only.

 |
| 

external\_systems\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the external system was updated. Output only.

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

### [](#externalsystemversion "Copy link to heading")ExternalSystemVersion

#### [](#available_methods_13 "Copy link to heading")Available methods

-   [List](#_bridge_v1_externalsystems_ListExternalSystemVersionsResponse_ListExternalSystemVersions) Lists and filters External System Versions.
    
-   [Create](#_bridge_v1_externalsystems_ExternalSystemVersion_CreateExternalSystemVersion) Creates an ExternalSystemVersion.
    
-   [Get](#_bridge_v1_externalsystems_ExternalSystemVersion_GetExternalSystemVersion) Retrieves a single External System Version by ID.
    
-   [BatchGet](#_bridge_v1_externalsystems_BatchGetExternalSystemVersionsResponse_BatchGetExternalSystemVersions) Retrieves one or more External System Versions by ID.
    

#### [](#_bridge_v1_externalsystems_ListExternalSystemVersionsResponse_ListExternalSystemVersions "Copy link to heading")List

Lists and filters External System Versions. Results are returned ordered by descending `update_timestamp`.

**Permission Scopes:** bridge:read, bridge.external\_system\_versions:read

**Pagination consistency guarantees:** Snapshot

**Endpoint:** GET /api/v1/external-system-versions

##### [](#request_41 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The maximum number of results to be returned.  
  
Required.  
Min value: 1.  
Max value: 50.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are retrieved from. If empty, the first page of results will be returned. Optional.

 |
| 

**external\_system\_ids**  
  
array \[string\]

 | 

The External System IDs to filter for.

 |

##### [](#responses_41 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**external\_system\_versions\[\]**  
  
array \[object\]

 | 

A list of matching External System Versions.

 |
| 

external\_system\_versions\[\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. UUID.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

external\_system\_versions\[\].  
**external\_system\_id**  
  
string

 | 

The ID of the External Integration which this version relates to. Required.  
  
Required.

 |
| 

external\_system\_versions\[\].  
**status**  
  
enum

 | 

The status of the ExternalSystemVersion. Output only.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_READY:**  
The version is ready to be used.

 |
| 

external\_system\_versions\[\].  
**description**  
  
string

 | 

A description of this version, detailing the changes made compared to the previous version.

 |
| 

external\_system\_versions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was created. Output only.

 |
| 

external\_system\_versions\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was updated. Output only.

 |
| 

external\_system\_versions\[\].  
**vault\_core**  
  
object

 | 

This is a Vault Core external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_CORE. Describes a Vault Core instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_versions\[\] items can contain one of **vault\_core**, vault\_payments or third\_party*

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**core\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Core API gateway.  
  
Required.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**postings\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Postings API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**audit\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Audit API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**access\_control\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Access Control API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**data\_loader\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Data Loader API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**workflows\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Workflows API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**experience\_layer\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Experience Layer API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**payments\_hub\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Payments Hub API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**edge\_functions\_api\_base\_url**  
  
string

 | 

The base URL of Edge Functions API gateway.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Core system.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Core’s Streaming API.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

external\_system\_versions\[\].  
vault\_core.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[\].  
**vault\_payments**  
  
object

 | 

This is a Vault Payments external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS. Describes a Vault Payments instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_versions\[\] items can contain one of vault\_core, **vault\_payments** or third\_party*

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
**api\_base\_url**  
  
string

 | 

The base URL of Vault Payments' API.  
  
Required.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Payments system.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Payments’s Streaming API.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

external\_system\_versions\[\].  
vault\_payments.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[\].  
**third\_party**  
  
object

 | 

A Third-Party external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_versions\[\] items can contain one of vault\_core, vault\_payments or **third\_party***

 |
| 

external\_system\_versions\[\].  
third\_party.  
**base\_url**  
  
string

 | 

The base URL of the third-party system.  
  
Required.

 |
| 

external\_system\_versions\[\].  
third\_party.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Third Party system.

 |
| 

external\_system\_versions\[\].  
third\_party.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[\].  
third\_party.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

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

#### [](#_bridge_v1_externalsystems_ExternalSystemVersion_CreateExternalSystemVersion "Copy link to heading")Create

Creates an ExternalSystemVersion. The creation of this resource can be asynchronous in that the status will not always be imediately set to `EXTERNAL_SYSTEM_VERSION_STATUS_READY`, clients of this API have to take this into account.

**Permission Scopes:** bridge:write, bridge.external\_system\_versions:write

**Endpoint:** POST /api/v1/external-system-versions

##### [](#request_42 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**external\_system\_version**  
  
object

 | 

The External System Version to create.  
  
Required.

 |
| 

external\_system\_version.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. UUID.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

external\_system\_version.  
**external\_system\_id**  
  
string

 | 

The ID of the External Integration which this version relates to. Required.  
  
Required.

 |
| 

external\_system\_version.  
**description**  
  
string

 | 

A description of this version, detailing the changes made compared to the previous version.

 |
| 

external\_system\_version.  
**vault\_core**  
  
object

 | 

This is a Vault Core external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_CORE. Describes a Vault Core instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_version can contain one of **vault\_core**, vault\_payments or third\_party*

 |
| 

external\_system\_version.  
vault\_core.  
**core\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Core API gateway.  
  
Required.

 |
| 

external\_system\_version.  
vault\_core.  
**postings\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Postings API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**audit\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Audit API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**access\_control\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Access Control API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**data\_loader\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Data Loader API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**workflows\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Workflows API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**experience\_layer\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Experience Layer API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**payments\_hub\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Payments Hub API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**edge\_functions\_api\_base\_url**  
  
string

 | 

The base URL of Edge Functions API gateway.

 |
| 

external\_system\_version.  
vault\_core.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Core system.

 |
| 

external\_system\_version.  
vault\_core.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_version.  
vault\_core.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

external\_system\_version.  
vault\_core.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Core’s Streaming API.

 |
| 

external\_system\_version.  
vault\_core.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

external\_system\_version.  
vault\_core.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

external\_system\_version.  
vault\_core.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_version.  
**vault\_payments**  
  
object

 | 

This is a Vault Payments external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS. Describes a Vault Payments instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_version can contain one of vault\_core, **vault\_payments** or third\_party*

 |
| 

external\_system\_version.  
vault\_payments.  
**api\_base\_url**  
  
string

 | 

The base URL of Vault Payments' API.  
  
Required.

 |
| 

external\_system\_version.  
vault\_payments.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Payments system.

 |
| 

external\_system\_version.  
vault\_payments.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_version.  
vault\_payments.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

external\_system\_version.  
vault\_payments.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Payments’s Streaming API.

 |
| 

external\_system\_version.  
vault\_payments.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

external\_system\_version.  
vault\_payments.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

external\_system\_version.  
vault\_payments.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_version.  
**third\_party**  
  
object

 | 

A Third-Party external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_version can contain one of vault\_core, vault\_payments or **third\_party***

 |
| 

external\_system\_version.  
third\_party.  
**base\_url**  
  
string

 | 

The base URL of the third-party system.  
  
Required.

 |
| 

external\_system\_version.  
third\_party.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Third Party system.

 |
| 

external\_system\_version.  
third\_party.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_version.  
third\_party.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

**vault\_core\_create\_options**  
  
object

 | 

Options for creating an External System Version for a Vault Core instance.

 |
| 

vault\_core\_create\_options.  
**use\_latest\_streaming\_api\_ca\_chain**  
  
boolean

 | 

Indicates whether to reuse the streaming API KafkaCluster CA chain from the latest Vault Core External System Version. False by default.

 |
| 

vault\_core\_create\_options.  
**use\_latest\_http\_api\_ca\_chain**  
  
boolean

 | 

Indicates whether to reuse the Vault Core APIs CA chain from the latest Vault Core External System Version. False by default.

 |
| 

**vault\_payments\_create\_options**  
  
object

 | 

Options for creating an External System Version for a Vault Payments instance.

 |
| 

vault\_payments\_create\_options.  
**use\_latest\_http\_api\_ca\_chain**  
  
boolean

 | 

Indicates whether to reuse the Vault Payments API CA chain from the latest Vault Payments External System Version. False by default.

 |
| 

vault\_payments\_create\_options.  
**use\_latest\_streaming\_api\_ca\_chain**  
  
boolean

 | 

Indicates whether to reuse the streaming API KafkaCluster CA chain from the latest Vault Payments External System Version. False by default.

 |
| 

**third\_party\_create\_options**  
  
object

 | 

Options for creating an External System Version for a Third Party system.

 |
| 

third\_party\_create\_options.  
**use\_latest\_ca\_chain**  
  
boolean

 | 

Indicates whether to reuse the Third Party API(s) CA chain from the latest Third Party Version. False by default.

 |

##### [](#responses_42 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. UUID.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

**external\_system\_id**  
  
string

 | 

The ID of the External Integration which this version relates to. Required.  
  
Required.

 |
| 

**status**  
  
enum

 | 

The status of the ExternalSystemVersion. Output only.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_READY:**  
The version is ready to be used.

 |
| 

**description**  
  
string

 | 

A description of this version, detailing the changes made compared to the previous version.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was updated. Output only.

 |
| 

**vault\_core**  
  
object

 | 

This is a Vault Core external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_CORE. Describes a Vault Core instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*This can contain one of **vault\_core**, vault\_payments or third\_party*

 |
| 

vault\_core.  
**core\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Core API gateway.  
  
Required.

 |
| 

vault\_core.  
**postings\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Postings API gateway.

 |
| 

vault\_core.  
**audit\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Audit API gateway.

 |
| 

vault\_core.  
**access\_control\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Access Control API gateway.

 |
| 

vault\_core.  
**data\_loader\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Data Loader API gateway.

 |
| 

vault\_core.  
**workflows\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Workflows API gateway.

 |
| 

vault\_core.  
**experience\_layer\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Experience Layer API gateway.

 |
| 

vault\_core.  
**payments\_hub\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Payments Hub API gateway.

 |
| 

vault\_core.  
**edge\_functions\_api\_base\_url**  
  
string

 | 

The base URL of Edge Functions API gateway.

 |
| 

vault\_core.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Core system.

 |
| 

vault\_core.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

vault\_core.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

vault\_core.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Core’s Streaming API.

 |
| 

vault\_core.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

vault\_core.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

vault\_core.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

**vault\_payments**  
  
object

 | 

This is a Vault Payments external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS. Describes a Vault Payments instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*This can contain one of vault\_core, **vault\_payments** or third\_party*

 |
| 

vault\_payments.  
**api\_base\_url**  
  
string

 | 

The base URL of Vault Payments' API.  
  
Required.

 |
| 

vault\_payments.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Payments system.

 |
| 

vault\_payments.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

vault\_payments.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

vault\_payments.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Payments’s Streaming API.

 |
| 

vault\_payments.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

vault\_payments.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

vault\_payments.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

**third\_party**  
  
object

 | 

A Third-Party external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*This can contain one of vault\_core, vault\_payments or **third\_party***

 |
| 

third\_party.  
**base\_url**  
  
string

 | 

The base URL of the third-party system.  
  
Required.

 |
| 

third\_party.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Third Party system.

 |
| 

third\_party.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

third\_party.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |

400 Failed Precondition 400 Failed Precondition 400 Invalid Argument 401 Unauthenticated 403 Permission Denied 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

Returned on attempt to create an ExternalSystemVersion reusing a Streaming API CA chain when no previous ExternalSystemVersion exists

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**external\_system\_id:**  
ID of target external system

 |

Returned on attempt to create an ExternalSystemVersion reusing a Streaming API CA chain when the latest ExternalSystemVersion is missing Streaming API details

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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
**external\_system\_version\_id:**  
ID of latest external system version

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

#### [](#_bridge_v1_externalsystems_ExternalSystemVersion_GetExternalSystemVersion "Copy link to heading")Get

Retrieves a single External System Version by ID.

**Permission Scopes:** bridge:read, bridge.external\_system\_versions:read

**Endpoint:** GET /api/v1/external-system-versions/{id}

##### [](#request_43 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the External System Version to be retrieved.

 |

##### [](#responses_43 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. UUID.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

**external\_system\_id**  
  
string

 | 

The ID of the External Integration which this version relates to. Required.  
  
Required.

 |
| 

**status**  
  
enum

 | 

The status of the ExternalSystemVersion. Output only.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_READY:**  
The version is ready to be used.

 |
| 

**description**  
  
string

 | 

A description of this version, detailing the changes made compared to the previous version.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was updated. Output only.

 |
| 

**vault\_core**  
  
object

 | 

This is a Vault Core external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_CORE. Describes a Vault Core instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*This can contain one of **vault\_core**, vault\_payments or third\_party*

 |
| 

vault\_core.  
**core\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Core API gateway.  
  
Required.

 |
| 

vault\_core.  
**postings\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Postings API gateway.

 |
| 

vault\_core.  
**audit\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Audit API gateway.

 |
| 

vault\_core.  
**access\_control\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Access Control API gateway.

 |
| 

vault\_core.  
**data\_loader\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Data Loader API gateway.

 |
| 

vault\_core.  
**workflows\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Workflows API gateway.

 |
| 

vault\_core.  
**experience\_layer\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Experience Layer API gateway.

 |
| 

vault\_core.  
**payments\_hub\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Payments Hub API gateway.

 |
| 

vault\_core.  
**edge\_functions\_api\_base\_url**  
  
string

 | 

The base URL of Edge Functions API gateway.

 |
| 

vault\_core.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Core system.

 |
| 

vault\_core.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

vault\_core.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

vault\_core.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Core’s Streaming API.

 |
| 

vault\_core.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

vault\_core.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

vault\_core.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

**vault\_payments**  
  
object

 | 

This is a Vault Payments external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS. Describes a Vault Payments instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*This can contain one of vault\_core, **vault\_payments** or third\_party*

 |
| 

vault\_payments.  
**api\_base\_url**  
  
string

 | 

The base URL of Vault Payments' API.  
  
Required.

 |
| 

vault\_payments.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Payments system.

 |
| 

vault\_payments.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

vault\_payments.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

vault\_payments.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Payments’s Streaming API.

 |
| 

vault\_payments.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

vault\_payments.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

vault\_payments.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

**third\_party**  
  
object

 | 

A Third-Party external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*This can contain one of vault\_core, vault\_payments or **third\_party***

 |
| 

third\_party.  
**base\_url**  
  
string

 | 

The base URL of the third-party system.  
  
Required.

 |
| 

third\_party.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Third Party system.

 |
| 

third\_party.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

third\_party.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

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

#### [](#_bridge_v1_externalsystems_BatchGetExternalSystemVersionsResponse_BatchGetExternalSystemVersions "Copy link to heading")BatchGet

Retrieves one or more External System Versions by ID. A `NOT_FOUND` API error will be returned if any of the requested resources can not be found.

**Permission Scopes:** bridge:read, bridge.external\_system\_versions:read

**Endpoint:** GET /api/v1/external-system-versions:batchGet

##### [](#request_44 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the External System Versions to be retrieved.  
  
Required.  
Min length: 1 characters.  
Max length: 50 characters.

 |

##### [](#responses_44 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**external\_system\_versions**  
  
map \[string: object\]

 | 

A map of the External System ID to the External System.

 |
| 

external\_system\_versions\[KEY\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge. UUID.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

external\_system\_versions\[KEY\].  
**external\_system\_id**  
  
string

 | 

The ID of the External Integration which this version relates to. Required.  
  
Required.

 |
| 

external\_system\_versions\[KEY\].  
**status**  
  
enum

 | 

The status of the ExternalSystemVersion. Output only.  
  
**Enum values**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_UNKNOWN**  
**EXTERNAL\_SYSTEM\_VERSION\_STATUS\_READY:**  
The version is ready to be used.

 |
| 

external\_system\_versions\[KEY\].  
**description**  
  
string

 | 

A description of this version, detailing the changes made compared to the previous version.

 |
| 

external\_system\_versions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was created. Output only.

 |
| 

external\_system\_versions\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the ExternalSystemVersion was updated. Output only.

 |
| 

external\_system\_versions\[KEY\].  
**vault\_core**  
  
object

 | 

This is a Vault Core external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_CORE. Describes a Vault Core instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_versions\[KEY\] can contain one of **vault\_core**, vault\_payments or third\_party*

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**core\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Core API gateway.  
  
Required.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**postings\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Postings API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**audit\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Audit API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**access\_control\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Access Control API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**data\_loader\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Data Loader API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**workflows\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Workflows API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**experience\_layer\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Experience Layer API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**payments\_hub\_api\_base\_url**  
  
string

 | 

The base URL of Vault Core’s Payments Hub API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**edge\_functions\_api\_base\_url**  
  
string

 | 

The base URL of Edge Functions API gateway.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Core system.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Core’s Streaming API.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

external\_system\_versions\[KEY\].  
vault\_core.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[KEY\].  
**vault\_payments**  
  
object

 | 

This is a Vault Payments external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_PAYMENTS. Describes a Vault Payments instance. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_versions\[KEY\] can contain one of vault\_core, **vault\_payments** or third\_party*

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
**api\_base\_url**  
  
string

 | 

The base URL of Vault Payments' API.  
  
Required.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Vault Payments system.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
**streaming\_api**  
  
object

 | 

Configuration for Vault Payments’s Streaming API.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
streaming\_api.  
**brokers\[\]**  
  
array \[string\]

 | 

A list of Kafka brokers that will be used by the consumers. All broker URLs have to be valid URLs (host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
Required.  
Min count: 1.  
Max count: 50.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
streaming\_api.  
**disable\_ssl**  
  
boolean

 | 

Disable SSL for communication with the cluster. Can only be set to `true` if not using any authentication.

 |
| 

external\_system\_versions\[KEY\].  
vault\_payments.  
streaming\_api.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to connect to the Kafka cluster. If empty the system’s truststore will be used which contains many common public CAs. This is only used if SSL is enabled. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[KEY\].  
**third\_party**  
  
object

 | 

A Third-Party external system. Must be set if the parent External System resource is of type EXTERNAL\_SYSTEM\_TYPE\_THIRD\_PARTY. All "base URL" fields have to be valid URLs (http(s) is mandatory, host must be specified and have a TLD) and must be public to the cluster or namespace of Vault Bridge.  
  
*external\_system\_versions\[KEY\] can contain one of vault\_core, vault\_payments or **third\_party***

 |
| 

external\_system\_versions\[KEY\].  
third\_party.  
**base\_url**  
  
string

 | 

The base URL of the third-party system.  
  
Required.

 |
| 

external\_system\_versions\[KEY\].  
third\_party.  
**tls**  
  
object

 | 

Optional configuration for a custom root Certificate Authority Chain used to connect to the Third Party system.

 |
| 

external\_system\_versions\[KEY\].  
third\_party.  
tls.  
**ca\_chain**  
  
string

 | 

PEM encoded Certificate Authority chain in X.509 format. Used to verify the server. If empty the system’s truststore will be used which contains many common public CAs. The field will be redacted when the resource is retrieved.

 |
| 

external\_system\_versions\[KEY\].  
third\_party.  
tls.  
**ca\_chain\_encrypted**  
  
byte

 | 

Encrypted `ca_chain`. Only used internally. On internal APIs the `ca_chain` will be populated with the decrypted value.

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

## [](#integration_configs "Copy link to heading")Integration Configs

### [](#integrationconfig "Copy link to heading")IntegrationConfig

#### [](#available_methods_14 "Copy link to heading")Available methods

-   [List](#_bridge_v1_integrationconfigs_ListIntegrationConfigsResponse_ListIntegrationConfigs) Lists and filters IntegrationConfigs.
    
-   [Create](#_bridge_v1_integrationconfigs_IntegrationConfig_CreateIntegrationConfig) Creates a IntegrationConfig.
    
-   [Get](#_bridge_v1_integrationconfigs_IntegrationConfig_GetIntegrationConfig) Retrieves a single IntegrationConfig by ID.
    
-   [Update](#_bridge_v1_integrationconfigs_IntegrationConfig_UpdateIntegrationConfig) Updates an IntegrationConfig.
    
-   [BatchGet](#_bridge_v1_integrationconfigs_BatchGetIntegrationConfigsResponse_BatchGetIntegrationConfigs) Retrieves one or more IntegrationConfigs by ID.
    

#### [](#_bridge_v1_integrationconfigs_ListIntegrationConfigsResponse_ListIntegrationConfigs "Copy link to heading")List

Lists and filters IntegrationConfigs.

**Permission Scopes:** bridge:read, bridge.integration\_configs:read

**Pagination consistency guarantees:** Snapshot

**Endpoint:** GET /api/v1/integration-configs

##### [](#request_45 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The maximum number of results to be returned.  
  
Required.  
Min value: 1.  
Max value: 50.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are retrieved from. If empty, the first page of results will be returned. Optional.

 |

##### [](#responses_45 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**integration\_configs\[\]**  
  
array \[object\]

 | 

A list of matching IntegrationConfigs.

 |
| 

integration\_configs\[\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.  
  
Required.

 |
| 

integration\_configs\[\].  
**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

integration\_configs\[\].  
**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

integration\_configs\[\].  
**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |
| 

integration\_configs\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was created. Output only.

 |
| 

integration\_configs\[\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was updated. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The token used to retrieve the next page. If empty, this is the last page of results.

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

#### [](#_bridge_v1_integrationconfigs_IntegrationConfig_CreateIntegrationConfig "Copy link to heading")Create

Creates a IntegrationConfig.

**Permission Scopes:** bridge:write, bridge.integration\_configs:write

**Endpoint:** POST /api/v1/integration-configs

##### [](#request_46 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**integration\_config**  
  
object

 | 

The IntegrationConfig to create.  
  
Required.

 |
| 

integration\_config.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.  
  
Required.

 |
| 

integration\_config.  
**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

integration\_config.  
**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

integration\_config.  
**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |

##### [](#responses_46 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.  
  
Required.

 |
| 

**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was updated. Output only.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 409 Already Exists 429 Resource Exhausted 500 Internal 500 Unknown 503 Unavailable 504 Deadline Exceeded

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

Returned on a non-idempotent attempt to recreate a resource

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

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

#### [](#_bridge_v1_integrationconfigs_IntegrationConfig_GetIntegrationConfig "Copy link to heading")Get

Retrieves a single IntegrationConfig by ID.

**Permission Scopes:** bridge:read, bridge.integration\_configs:read

**Endpoint:** GET /api/v1/integration-configs/{id}

##### [](#request_47 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the IntegrationConfig to be retrieved.

 |

##### [](#responses_47 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.  
  
Required.

 |
| 

**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was updated. Output only.

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

#### [](#_bridge_v1_integrationconfigs_IntegrationConfig_UpdateIntegrationConfig "Copy link to heading")Update

Updates an IntegrationConfig.

**Permission Scopes:** bridge:write, bridge.integration\_configs:write

**Endpoint:** PUT /api/v1/integration-configs/{integration\_config.id}

##### [](#request_48 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
integration\_config.  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A UUID used to ensure the request is idempotent.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
Required.

 |
| 

**integration\_config**  
  
object

 | 

The IntegrationConfig to update.  
  
Required.

 |
| 

integration\_config.  
**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

integration\_config.  
**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

integration\_config.  
**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields of the IntegrationConfig are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#responses_48 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.  
  
Required.

 |
| 

**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was created. Output only.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was updated. Output only.

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

#### [](#_bridge_v1_integrationconfigs_BatchGetIntegrationConfigsResponse_BatchGetIntegrationConfigs "Copy link to heading")BatchGet

Retrieves one or more IntegrationConfigs by ID. A `NOT_FOUND` API error will be returned if any of the requested resources can not be found.

**Permission Scopes:** bridge:read, bridge.integration\_configs:read

**Endpoint:** GET /api/v1/integration-configs:batchGet

##### [](#request_49 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the IntegrationConfigs to be retrieved.  
  
Required.  
Min length: 1 characters.  
Max length: 50 characters.

 |

##### [](#responses_49 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**integration\_configs**  
  
map \[string: object\]

 | 

A map of the IntegrationConfig ID to the IntegrationConfig.

 |
| 

integration\_configs\[KEY\].  
**id**  
  
string

 | 

Unique identifier of the resource within Vault Bridge.  
  
Required.

 |
| 

integration\_configs\[KEY\].  
**external\_system\_id**  
  
string

 | 

The ID of the External System to use. Required.

 |
| 

integration\_configs\[KEY\].  
**credential\_id**  
  
string

 | 

The ID of the Credential to use. Note that the same Credential ID can be used with different `IntegrationConfig`s. This field can be left empty in which case no authentication will be used as part of any requests made through the Integrations HTTP Proxy or Bridge’s components.

 |
| 

integration\_configs\[KEY\].  
**display\_name**  
  
string

 | 

An optional descriptive name used for display purposes.

 |
| 

integration\_configs\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was created. Output only.

 |
| 

integration\_configs\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The timestamp indicating when the integration\_config was updated. Output only.

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

## [](#roles "Copy link to heading")Roles

### [](#allowedendpoint "Copy link to heading")AllowedEndpoint

#### [](#available_methods_15 "Copy link to heading")Available methods

-   [Get](#_services_authentication_roles_GetAllowedEndpointsResponse_GetAllowedEndpoints) GetAllowedEndpoints returns a list of endpoints that have been filtered based on whether the current user’s privileges allow access to them
    

#### [](#_services_authentication_roles_GetAllowedEndpointsResponse_GetAllowedEndpoints "Copy link to heading")Get

GetAllowedEndpoints returns a list of endpoints that have been filtered based on whether the current user’s privileges allow access to them

**Endpoint:** POST /api/v1/allowed-endpoints

##### [](#request_50 "Copy link to heading")Request

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
**API\_BRIDGE:**  
Vault Bridge API.  
  
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

##### [](#responses_50 "Copy link to heading")Responses

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
**API\_BRIDGE:**  
Vault Bridge API.

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

### [](#role "Copy link to heading")Role

#### [](#available_methods_16 "Copy link to heading")Available methods

-   [List](#_services_authentication_roles_ListRolesResponse_ListRoles) Lists all Roles subject to filters and pagination.
    
-   [Create](#_services_authentication_roles_Role_CreateRole) Creates a Role.
    
-   [Update](#_services_authentication_roles_Role_UpdateRole) Updates a Role.
    
-   [BatchGet](#_services_authentication_roles_BatchGetRolesResponse_BatchGetRoles) Retrieves one or more Roles based on their IDs.
    

#### [](#_services_authentication_roles_ListRolesResponse_ListRoles "Copy link to heading")List

Lists all Roles subject to filters and pagination.

**Permission Scopes:** bridge.roles:read

**Pagination consistency guarantees:** Page Level

**Endpoint:** GET /api/v1/roles

##### [](#request_51 "Copy link to heading")Request

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

Return only roles with at least one of the provided external references. Optional.

 |
| 

**display\_name**  
  
string

 | 

Return only roles whose display name contains this field as a sub string. Optional.

 |

##### [](#responses_51 "Copy link to heading")Responses

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

#### [](#_services_authentication_roles_Role_CreateRole "Copy link to heading")Create

Creates a Role.

**Permission Scopes:** bridge.roles:write

**Endpoint:** POST /api/v1/roles

##### [](#request_52 "Copy link to heading")Request

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

##### [](#responses_52 "Copy link to heading")Responses

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

#### [](#_services_authentication_roles_Role_UpdateRole "Copy link to heading")Update

Updates a Role.

**Permission Scopes:** bridge.roles:write

**Endpoint:** PUT /api/v1/roles/{role.id}

##### [](#request_53 "Copy link to heading")Request

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

##### [](#responses_53 "Copy link to heading")Responses

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

#### [](#_services_authentication_roles_BatchGetRolesResponse_BatchGetRoles "Copy link to heading")BatchGet

Retrieves one or more Roles based on their IDs.

**Permission Scopes:** bridge.roles:read

**Endpoint:** GET /api/v1/roles:batchGet

##### [](#request_54 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of the IDs of `Role`s that are to be retrieved. Required.

 |

##### [](#responses_54 "Copy link to heading")Responses

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