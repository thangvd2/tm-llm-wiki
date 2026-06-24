---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/api_error_code"
title: "API Error Codes"
scraped_at: "2026-06-17T15:47:08.896Z"
images: 0
---

# API Error Codes

`flows_api.api_error_code` module

API Error Codes

## [](#Code "Copy link to heading")Code

Error Codes

Enum values  
| Name | Description |
| --- | --- |
| 
`OK`

 | 

Indicates there was no error. In practice, this does not occur as success is communicated by  
the absence of an error rather than an error with this code.

 |
| 

`CANCELLED`

 | 

The requested operation was cancelled part way through.

 |
| 

`UNKNOWN`

 | 

An unknown problem occurred on the server.

 |
| 

`INVALID_ARGUMENT`

 | 

There was a problem with the request. A provided field is invalid and/or a required field is  
missing. Unlike FAILED\_PRECONDITION, the only remedy is likely to be a change to the request.

 |
| 

`DEADLINE_EXCEEDED`

 | 

The response was not received within the allowed time. It can be safely retried.  
The operation could have completed successfully.

 |
| 

`NOT_FOUND`

 | 

The requested resource could not be found.

 |
| 

`ALREADY_EXISTS`

 | 

The resource could not be created because it already exists.

 |
| 

`PERMISSION_DENIED`

 | 

The client did not have permission to perform the request.

 |
| 

`UNAUTHENTICATED`

 | 

The request could not be authenticated.

 |
| 

`RESOURCE_EXHAUSTED`

 | 

A resource was exhausted, because either too many requests were sent within a time period  
or the response was too large.

 |
| 

`FAILED_PRECONDITION`

 | 

The operation was rejected because the system was not in a state required for the operation’s  
execution. It could be that a referenced resource did not exist, or was in the wrong state.

 |
| 

`ABORTED`

 | 

The operation was aborted, typically due to a concurrency issue.

 |
| 

`OUT_OF_RANGE`

 | 

The operation was attempted outside the valid range.

 |
| 

`UNIMPLEMENTED`

 | 

The operation is not implemented.

 |
| 

`INTERNAL`

 | 

A problem occurred on the server. This is almost certainly due to  
a fault in the platform.

 |
| 

`UNAVAILABLE`

 | 

The service was unavailable. It can be safely retried.

 |
| 

`DATA_LOSS`

 | 

The operation resulted in unrecoverable data loss or corruption.

 |