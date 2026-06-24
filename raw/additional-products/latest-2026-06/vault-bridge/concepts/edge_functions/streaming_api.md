---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/streaming_api"
title: "Edge Functions Streaming API"
scraped_at: "2026-06-17T15:54:05.926Z"
images: 0
---

# Edge Functions Streaming API

## [](#overview "Copy link to heading")Overview

The state of an Edge Function Trigger Operation resource is determined by a series of mutations. The Edge Functions Streaming API broadcasts events relating to these mutations throughout its lifecycle, allowing you to optionally build your own custom view of the state of Edge Function Trigger Operation resources.

These events are emitted as Kafka messages to a series of public Kafka topics. Downstream services subscribing to such topics could include:

-   Data pipelines that perform Extract-Transform-Load (ETL) operations for financial reporting
    
-   Machine Learning services that perform fraud checks
    
-   Services that push customer notifications
    
-   Data warehousing modules
    

The Edge Functions API lets you track the lifecycle of its resources by listening to a series of Kafka events that reflect all mutations of the state of Edge Function Trigger Operation resources. These events comprise:

-   Resource creation - for example `create Edge Function Trigger Operation`
    
-   Resource mutation - for example `update Edge Function Trigger Operation`
    

### [](#message_payload "Copy link to heading")Message payload

All mutations of an Edge Function Trigger Operation resource are published to a separate Kafka topic for the resource type when using the Edge Functions API. The message payload contains:

-   A unique string ID that can be used for idempotence
    
-   The time at which the state changed due to this event occurring
    
-   A unique identifier for the version of the resource
    
-   The state of the resource as of the mutation
    
-   The fields that were updated if the resource was updated
    

### [](#message_format "Copy link to heading")Message format

The only supported message format is JSON.

## [](#edgefunctiontriggeroperationevent "Copy link to heading")EdgeFunctionTriggerOperationEvent

An `EdgeFunctionTriggerOperationEvent` is published when an [EdgeFunctionTriggerOperation](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#edgefunctiontriggeroperation) resource is created or updated.

*Topic*: `vault.bridge.${tenant_id}.stream_api.v1.edge_functions.trigger_operation.events`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

string

 | 

A unique string ID that can be used for idempotence.

 |
| 

`timestamp`

 | 

google.protobuf.Timestamp

 | 

The time at which the state changed due to this event occurring.

 |
| 

`change_id`

 | 

uint64

 | 

A unique identifier for the version of the resource.

 |
| 

`resource_id`

 | 

string

 | 

The ID of the Edge Function Trigger Operation resource.

 |
| 

`trigger_operation_created`

 | 

`EdgeFunctionTriggerOperationCreatedEvent`

 | 

`EdgeFunctionTriggerOperation` creation event.

 |
| 

`trigger_operation_updated`

 | 

`EdgeFunctionTriggerOperationUpdatedEvent`

 | 

`EdgeFunctionTriggerOperation` update event.

 |

* * *

`EdgeFunctionTriggerOperationCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`trigger_operation`

 | 

`bridge.v1.edge_functions.EdgeFunctionTriggerOperation`

 | 

The Edge Function Trigger Operation object at creation with all fields populated.

 |

* * *

`EdgeFunctionTriggerOperationUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`trigger_operation`

 | 

`bridge.v1.edge_functions.EdgeFunctionTriggerOperation`

 | 

The Edge Function Trigger Operation object with all fields populated.

 |
| 

`update_mask`

 | 

`FieldMask`

 | 

The update mask specifying which fields have been updated as a result of a request to update an Edge Function Trigger Operation.

 |