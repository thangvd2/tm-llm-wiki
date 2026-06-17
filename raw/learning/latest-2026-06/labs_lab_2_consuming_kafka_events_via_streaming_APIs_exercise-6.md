---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-6"
title: "Exercise 6 - Audit Streaming API"
scraped_at: "2026-06-17T05:18:50.950Z"
images: 0
---

# Exercise 6 - Audit Streaming API

Vault currently provides an audit system where we log all the incoming API requests and their responses, acting as an interception layer. Vault’s audit service serves two types of resources, Audit Logs and Action Logs.

## [](#audit_logs "Copy link to heading")Audit Logs

An Audit Log is a record of a public API request that comes into our system. It consists of the API request as well as the response.

Audit logs include:

-   Any API requests and responses.
    
-   The service account that made the request
    
-   This would only be used for audit and compliance. Not for app integrations.
    

### [](#lifetime_in_vault "Copy link to heading")Lifetime in Vault

Audit logs are regularly purged, at a configurable time interval, due to the volume of data that needs to be stored. The period is defined during vault on-premise installation’s `values.yaml`.

## [](#action_logs "Copy link to heading")Action Logs

Action logs are derived from audit logs if the request is determined to be a resource mutation call.

Action logs include any action taken on an account or customer. Each action will generate an action log. This will also include the employee that made the action. It should only be used for security, compliance, auditing - not for integration purposes.

### [](#lifetime_in_vault_2 "Copy link to heading")Lifetime in Vault

Action Logs are long lived as they relate to state changes (resource mutations).

The events we are going to observe are:

-   AuditLogCreatedEvent
    
    -   `vault.api.v1.audit_logs.audit_log.created`
        
    -   Generated when an Audit Log is captured.
        
    
-   ActionLogCreatedEvent
    
    -   `vault.api.v1.action_logs.action_log.created`
        
    -   Generated when an Action Log is derived from an Audit Log.
        
    

## [](#exercise "Copy link to heading")Exercise

It’s highly recommended for this exercise to filter on the outputs from the Audit and Action logs using your own tooling or the script provided with this exercise sheet (see Consuming Events using Kafka Consumer in Python). There will be a substantial amount of output from these kafka topics.

1.  Create an account using your previously uploaded Smart Contract, create an Account using a POST request to the `/v1/accounts` endpoint. \[[1](#_footnotedef_1 "View footnote.")\]
    
2.  Make a posting to the account you have created from an internal account using the endpoint `POST /v1/posting-instruction-batches`. \[[2](#_footnotedef_2 "View footnote.")\] \[[3](#_footnotedef_3 "View footnote.")\]
    
3.  Open the Operations Dashboard and navigate to Products > Product Management. Select one of the products.
    
4.  Observe that all three events have been streamed out on the `vault.api.v1.audit_logs.audit_log.created` topic.
    
5.  Make a PUT request to the `/v1/accounts/{account_id}:updateDetails` endpoint, adding a new Key and Value to your account.
    
6.  Observe that an action log was created on the `vault.api.v1.action_logs.action_log.created` topic.
    

* * *

[1](#_footnoteref_1). TH: Take the audit log event from the Create account, what is the 10th char?

[2](#_footnoteref_2). TH: Take the audit log event from the posting, take the value of the `endpoint_name` key, what is the 4th char?

[3](#_footnoteref_3). TH: Take the action log event from the posting, take the value of the `standard_action` key, what is the last letter?