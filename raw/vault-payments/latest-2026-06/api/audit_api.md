---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/audit_api"
title: "Audit API"
scraped_at: "2026-06-17T15:49:32.970Z"
images: 0
---

# Audit API

Vault Payments records information on requests made to its APIs, and makes this available via the Streaming API.

## [](#overview "Copy link to heading")Overview

### [](#audit_logs "Copy link to heading")Audit Logs

Whenever a request is made to the Vault Payments API, the following information is recorded in an Audit Log:

-   The action taken (sometimes referred to as "activity").
    
-   The user/source that performed the action.
    
-   The resources affected by the action.
    
-   The request ID of a mutation request.
    
-   The time of the request.
    
-   Information pertaining to the request/response such as request body, status code, HTTP endpont, and error message.
    

chat\_bubble

Only the JSON bodies of GET requests are recorded. Response bodies are never recorded.

### [](#user_and_principle_attriubtion "Copy link to heading")User and Principle attriubtion

All audit logs will store the JWT subject claim (sub) from the access token to uniquely identify the principal for a request (under `src_endpoint.uid`).

Requests sent by a User (see [User Provisioning](/vault-payments/latest/EN/app/user_provisioning)) will have the User’s ID present in the audit log (under `actor.user.uid`). Requests without a User attributed to them are considered to be Machine to Machine (M2M) requests.

### [](#guarantees "Copy link to heading")Guarantees

The Audit API provides three options for auditing: `guaranteed`, `best-effort`, and `disabled` which are configurable on both an endpoint level, and a User vs M2M level. This level of guarantee refers to capturing request information, and response information (i.e. status code) is always best-effort.

 
| Guarantee | Description |
| --- | --- |
| 
`guaranteed`

 | 

The request will only continue processing once request information has been recorded; therefore if the request is unable to be audited, it will return an error. Recommended for User requests to satisfy regulatory compliance.

 |
| 

`best-effort`

 | 

The request is audited on a best-effort basis with no strong guarantee that an audit log will be created. Provides a lesser performance overhead than `guaranteed` so is recommeneded for M2M requests.

 |
| 

`disabled`

 | 

The request is not audited.

 |

The default configuration is `guaranteed` for all User requests and `best-effort` for all M2M requests, regardless of the endpoint. Please contact Thought Machine to configure Audit guarantees.

## [](#audit_log_events "Copy link to heading")Audit Log Events

Any request made to the Vault Payments API will create an Audit Log event that can be consumed via the Streaming API on the following topic: `vault.payments.${tenant_id}.stream_api.v1.audit.audit_log.ocsf.events`

### [](#retention "Copy link to heading")Retention

The Streaming API has a retention period of 7 days. Audit logs are produced at least once to the kafka topic, and must be stored if they need to be retained for a longer period of time.

### [](#message_format "Copy link to heading")Message format

Audit log messages are formatted in [Open Cybersecurity Schema Framework](https://ocsf.io) (OCSF) JSON format, following the schema for [API Activity](https://schema.ocsf.io/1.7.0/classes/api_activity).

### [](#audit_log "Copy link to heading")Audit Log

#### [](#example "Copy link to heading")Example

Fields  
| Name | Description |
| --- | --- |
| 
**activity\_id**  
  
long

 | 

The OCSF normalized identifier of the activity that triggered the event.

 |
| 

**activity\_name**  
  
string

 | 

The OCSF activity name, as defined by the activity\_id.

 |
| 

**actor**  
  
object

 | 

Details about the user that was the source of the activity.

 |
| 

actor.  
**user**  
  
object

 | 

The user that initiated the activity.

 |
| 

actor.  
user.  
**uid**  
  
string

 | 

The unique user identifier.

 |
| 

**api**  
  
object

 | 

Details about the API call.

 |
| 

api.  
**operation**  
  
string

 | 

The action associated with the request

 |
| 

api.  
**request**  
  
object

 | 

Details about the API request.

 |
| 

api.  
request.  
**uid**  
  
string

 | 

The unique request identifier.

 |
| 

api.  
request.  
**data**  
  
object

 | 

The request parameters for the api request.

 |
| 

api.  
**response**  
  
object

 | 

Details about the API response.

 |
| 

api.  
response.  
**code**  
  
long

 | 

The HTTP status code response sent to a request.

 |
| 

api.  
response.  
**error**  
  
long

 | 

The error code of the response, if applicable.

 |
| 

api.  
response.  
**error\_message**  
  
long

 | 

The error message of the repsonse, if applicable.

 |
| 

**category\_uid**  
  
long

 | 

The OCSF category unique identifier of the event.

 |
| 

**class\_uid**  
  
long

 | 

The OCSF class identifier.

 |
| 

**http\_request**  
  
object

 | 

The underlying http request.

 |
| 

http\_request.  
**http\_method**  
  
string

 | 

The HTTP method called for this event.

 |
| 

http\_request.  
**url**  
  
object

 | 

Details about the URL for the request.

 |
| 

http\_request.  
url.  
**hostname**  
  
string

 | 

The URL host.

 |
| 

http\_request.  
url.  
**path**  
  
string

 | 

The URL path.

 |
| 

**metadata**  
  
object

 | 

Metadata associated with the event.

 |
| 

metadata.  
**correlation\_uid**  
  
string

 | 

A unique identifier used to correlate this event with other related events.

 |
| 

metadata.  
**product**  
  
object

 | 

The product that reported the event.

 |
| 

metadata.  
product.  
**uid**  
  
string

 | 

The unique identifier of the product.

 |
| 

metadata.  
product.  
**name**  
  
string

 | 

The name of the product.

 |
| 

metadata.  
product.  
**vendor\_name**  
  
string

 | 

The name of the vendor of the product.

 |
| 

metadata.  
**uid**  
  
string

 | 

A unique identifier assigned to the event.

 |
| 

metadata.  
**version**  
  
string

 | 

The version of the OCSF schema.

 |
| 

**resources\[\]**  
  
array \[object\]

 | 

Details about resources that were affected by the activity.

 |
| 

resources\[\].  
**uid**  
  
string

 | 

The unique identifier of the resource.

 |
| 

**severity\_id**  
  
long

 | 

The OCSF normalized identifier of the event severity.

 |
| 

**src\_endpoint**  
  
object

 | 

Describes details about the source of the activity.

 |
| 

src\_endpoint.  
**uid**  
  
string

 | 

The unique identifer for the principal that was the source of the activity.

 |
| 

**time**  
  
long

 | 

The event occurrence time. The format is the number of milliseconds since the Unix Epoch.

 |
| 

**type\_uid**  
  
long

 | 

The OCSF event type ID.

 |