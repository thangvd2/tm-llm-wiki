---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/edge_functions/sdk_reference/edge_api_library_reference"
title: "Library reference: edge_api"
scraped_at: "2026-06-17T05:02:42.580Z"
images: 0
---

# Library reference: edge_api

## [](#baseerror "Copy link to heading")BaseError

*type: Class*

Base class for any error that the edge\_api SDK or an Edge Function can raise, or an error that an Edge Function can catch. Thought Machine does not expect (you/something) to instantiate it on its own.

Signature of the constructor for this class:

## [](#error "Copy link to heading")Error

*type: Class*

Error that can be raised by an Edge Function.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`code`

 | 

`enum 'ErrorCodeEnum'`

 | 

Programmatic error code that a caller can use to determine the category of error that occurred.

 |
| 

`message`

 | 

`class 'str'`

 | 

Human-readable text describing the error.

 |
| 

`details`

 | 

\`dict\[str, JsonValue\]

 | 

None\`

 |

## [](#errorcodeenum "Copy link to heading")ErrorCodeEnum

*type: Enum*

Base enumeration of possible error codes. This class is used as a base when definiing custom error codes.

```
Define a subclass of this to define custom error codes.
```

```
Use \`\`edge\_api.error\_code\`\` to mark error codes that are transient (temporary and retriable).
```

```
For example:
```

```
class MyErrorCodes(ErrorCodeEnum):
    # A permanent error.
    NO\_SUCH\_ACCOUNT = "NO\_SUCH\_ACCOUNT"
    # A temporary error.
    TEMPORARY\_FAILURE = error\_code("TEMPORARY\_FAILURE", transient=True)
```

## [](#executioncontext "Copy link to heading")ExecutionContext

*type: Class*

Carries information about an execution which is independent of the request and response.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`execution_id`

 | 

`class 'str'`

 | 

The ID of the Edge Function execution.

 |
| 

`idempotency_key`

 | 

`class 'str'`

 | 

The `idempotency_key` provided to the execution.

 |
| 

`function_id`

 | 

`class 'str'`

 | 

The ID of the Edge Function record.

 |
| 

`function_version_tag`

 | 

`class 'str'`

 | 

The tag of the Edge Function Version resource.

 |

## [](#fieldviolation "Copy link to heading")FieldViolation

*type: Class*

Violation of a Model’s field constraints.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`field`

 | 

`class 'str'`

 | 

Path leading to the field, starting from the Model which was initially validated.

 |
| 

`violation_type`

 | 

`enum 'FieldViolationType'`

 | 

Type of violation.

 |
| 

`description`

 | 

`class 'str'`

 | 

Description of the reason that the field is not valid.

 |
| 

`input`

 | 

`class 'object'`

 |  |

## [](#fieldviolationtype "Copy link to heading")FieldViolationType

*type: Enum*

Type of violation that occurred for a Model field.

Enum values  
| Name | Description |
| --- | --- |
| 
`UNKNOWN`

 | 

Default value.

 |
| 

`INVALID_FORMAT`

 | 

Field is not a valid format e.g. email address, UUID, IP Address, URI etc.

 |
| 

`INVALID_VALUE`

 | 

Indicates that a provided field is not equal to one of the specified values.

 |
| 

`ABOVE_MAX_VALUE`

 | 

Field exceeds a maximum specified value.

 |
| 

`BELOW_MIN_VALUE`

 | 

Field is smaller than a minimum specified value.

 |
| 

`ABOVE_MAX_LENGTH`

 | 

Length is larger than a maximum specified size.

 |
| 

`BELOW_MIN_LENGTH`

 | 

Length is smaller than a minimum specified size.

 |
| 

`PATTERN_MISMATCH`

 | 

Field value does not match the specified regex pattern.

 |
| 

`PREFIX_MISMATCH`

 | 

Field value does not match the specified prefix.

 |
| 

`SUFFIX_MISMATCH`

 | 

Field value does not match the specified suffix.

 |
| 

`REQUIRED_FIELD`

 | 

Field value was not populated but is required to be.

 |
| 

`DUPLICATE_VALUE`

 | 

All elements in this field must be unique but a duplicate value has been provided. Applies to repeated scalar fields.

 |

## [](#httpresponse "Copy link to heading")HTTPResponse

*type: Class*

Protocol representing an HTTP response.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status_code`

 | 

`enum 'HTTPStatus'`

 | 

HTTP Status code of the response.

 |
| 

`body`

 | 

`class 'bytes'`

 | 

response body in bytes.

 |

## [](#jsonarray "Copy link to heading")JSONArray

*type: Type Alias*

Type of origin: class 'list'

## [](#jsonobject "Copy link to heading")JSONObject

*type: Type Alias*

Type of origin: class 'dict'

## [](#jsonschematype "Copy link to heading")JSONSchemaType

*type: Enum*

Type of JSON schema that can be generated.

Enum values  
| Name | Description |
| --- | --- |
| 
`INPUT`

 | 

Used for input validation.

 |
| 

`OUTPUT`

 | 

Describes the output of serialization.

 |

## [](#logger "Copy link to heading")Logger

*type: Class*

Logger class provides logging functionality with additional context information.

```
Example:
```

```
import edge\_api
```

```
logger = edge\_api.Logger()
logger.error("This is a error log message")
```

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |

## [](#model "Copy link to heading")Model

*type: Class*

Used as the base class for the request and response types of the entry point.

Signature of the constructor for this class:

## [](#modelvalidationerror "Copy link to heading")ModelValidationError

*type: Class*

Describes validation errors.

Signature of the constructor for this class:

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`field_violations`

 | 

`list[edge_api._model.FieldViolation]`

 | 

The violations to initialize the ModelValidationError with.

 |

## [](#session "Copy link to heading")Session

*type: Class*

Represents a session to send requests to a Vault API.

Signature of the constructor for this class:

## [](#vaultapi "Copy link to heading")VaultAPI

*type: Enum*

Enumeration representing Vault APIs. Currently only Core API is supported.

Enum values  
| Name | Description |
| --- | --- |
| 
`CORE`

 | 

Vault Core’s Core API.

 |