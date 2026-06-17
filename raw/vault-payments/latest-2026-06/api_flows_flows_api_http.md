---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/http"
title: "HTTP"
scraped_at: "2026-06-17T05:09:12.138Z"
images: 0
---

# HTTP

`flows_api.http` module

The http module contains types related to HTTP.

## [](#HTTPMethod "Copy link to heading")HTTPMethod

Defines available HTTP methods.

Enum values  
| Name | Description |
| --- | --- |
| 
`GET`

 | 

HTTP GET method.

 |
| 

`POST`

 | 

HTTP POST method.

 |
| 

`PUT`

 | 

HTTP PUT method.

 |
| 

`PATCH`

 | 

HTTP PATCH method.

 |
| 

`DELETE`

 | 

HTTP DELETE method.

 |

## [](#HTTPRequest "Copy link to heading")HTTPRequest

Defines configuration for an HTTP Request.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`method`

 | 

`Optional[[HTTPMethod](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPMethod)]`

 | 

HTTP method to be used in the HTTP request. Defaults to POST if not provided.

 |
| 

`headers`

 | 

`Optional[dict[str, Union[str, list[str]]]]`

 | 

HTTP headers to be attached to the HTTP request.

 |
| 

`query_parameters`

 | 

`Optional[dict[str, Union[str, list[str]]]]`

 | 

URL query parameters to be attached to the HTTP request URL. If a list of values are provided for one key, they will be encoded as multiple values associated with a single field. For example, `param: ["a", "b"]` will be encoded as `?param=a&param=b`.

 |
| 

`path`

 | 

`Optional[str]`

 | 

Additional path to be appended to the HTTP request URL. Will be appended before any URL query parameters.

 |
| 

`json`

 | 

`Optional[dict, list, str, int, float, bool]`

 | 

JSON to be attached to the HTTP request body. The provided value will be automatically marshalled into JSON. This value can be a dictionary, list, string, integer, float, bool, datetime or None.  
If the provided value is a dictionary, all keys in key/value pairs must be strings.  
The Instruction class and any referenced classes within are supported and can be supplied as values.  
Note that datetime objects are converted to the ISO 8601 format. If UTC timezone is set, "Z" will be appended at the end of the timestamp, for other timezones the time difference with UTC will be appended.  
If no timezone is set, there will be no appendix added to the timestamp.  
Please convert datetime objects into a string representation explicitly if other format is expected.  
  
Additionally, the header `Content-type: application/json` will be added to the HTTP request.

 |

## [](#HTTPResponse "Copy link to heading")HTTPResponse

Defines an HTTP Response.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status_code`

 | 

`Optional[int]`

 | 

The status code of the HTTP response.

 |
| 

`json`

 | 

`Optional[dict, list, str, int, float, bool]`

 | 

JSON response body of the HTTP response. Only populated if the response body is JSON.

 |

## [](#HTTPStatusCodePolicy "Copy link to heading")HTTPStatusCodePolicy

Defines configuration for which HTTP status codes should be treated as successful or transient. Ranges of codes can be captured via '2xx' notation, with specific codes taking precedence over ranges. Any code not specified or captured within a range will be treated as an error.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`success_codes`

 | 

`Optional[str, list[str]]`

 | 

The code ranges which should be treated as successful.

 |
| 

`transient_codes`

 | 

`Optional[str, list[str]]`

 | 

The code ranges which should be treated as transient.

 |