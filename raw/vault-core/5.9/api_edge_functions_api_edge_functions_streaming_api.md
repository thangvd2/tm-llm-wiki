---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/api/edge_functions_api/edge_functions_streaming_api"
title: "Edge Functions Streaming API"
scraped_at: "2026-06-17T05:00:39.268Z"
images: 0
---

# Edge Functions Streaming API

## [](#overview "Copy link to heading")Overview

Like the core services of Vault, the Edge Functions platform natively supports event sourcing. The state of an Edge Functions resource is determined by a series of mutations. The Edge Functions Streaming API broadcasts events relating to these mutations throughout its lifecycle, allowing you to optionally build your own custom view of the state of Edge Function resources.

This mirrors the functionality in [Core Streaming API](/vault-core/5-9/EN/api/core_api#core_streaming_api). Most of what applies to the Core Streaming API also applies to Edge Functions resources with a few specific differences.

These events are emitted as Kafka messages to a series of public Kafka topics. Downstream services subscribing to such topics could include:

-   Data pipelines that perform Extract-Transform-Load (ETL) operations for financial reporting
    
-   Machine Learning services that perform fraud checks
    
-   Services that push customer notifications
    
-   Data warehousing modules
    

The Edge Functions API lets you track the lifecycle of its resources by listening to a series of Kafka events that reflect all mutations of the state of Edge Function resources. These events are a series of Kafka events that reflect all mutations of Vault’s state, and comprise:

-   Resource creation - for example `create Edge Function`
    
-   Resource mutation - for example `update Edge Function`
    

### [](#message_payload "Copy link to heading")Message payload

All mutations of an Edge Function resource are published to a separate Kafka topic for the resource type when using the Edge Functions API. The message payload contains:

-   A unique string ID that can be used for idempotence
    
-   The time at which the state changed due to this event occurring
    
-   A unique identifier for the version of the resource
    
-   The state of the resource as of the mutation
    
-   The fields that were updated if the resource was updated
    

chat\_bubble

If you want to query the full resource, you can use the `Journal Events` API to replay the series of resource update events.

The following limitations apply:

-   There is a Kafka retention period that is set on all Kafka topics created by Vault. The default retention period is seven days, with some topics set to a shorter period. Any Kafka messages older than this time period are not available.
    
-   You can only use the Edge Functions Journal Events API to replay events that have occurred within a window of the last seven days.
    
-   If events occurred more than seven days ago, then you need to apply the more recent events to a persisted state of the resource. This is because the events occurred before the window of seven days.
    

For more information, see [Event reconciliation](#event_reconciliation).

### [](#message_format "Copy link to heading")Message format

The only supported message format is JSON.

## [](#event_reconciliation "Copy link to heading")Event reconciliation

Event reconciliation provides a mechanism for consumers of the Edge Functions Streaming APIs to verify that all events published to certain topics have been received. This is as opposed to reconciling any side effects resulting from the processing of such events.

This reconciliation is particularly useful following a timeout or processing failures where there is no way of easily identifying which events may have been missed. For example, during a data migration into the Edge Functions platform.

This section covers the following aspects of event reconciliation:

-   The [mechanisms](#mechanisms_for_event_reconciliation) that are available for event reconciliation
    
-   The [topics](#topics_that_can_be_reconciled) that can be reconciled using event reconciliation
    
-   The [checksum algorithm](#checksum_algorithm) used for event reconciliation
    
-   The [errors](#event_reconciliation_errors) that can occur during event reconciliation
    

### [](#mechanisms_for_event_reconciliation "Copy link to heading")Mechanisms for event reconciliation

There are three mechanisms available for reconciling events:

-   Detection of missed events using the `change_id`
    
-   Detection of missed events using Windowing
    
-   Event replay
    

#### [](#detection_of_missed_events_using_change_id "Copy link to heading")Detection of missed events (using change ID)

The publication to the Edge Functions Streaming API of a monotonically and continuously increasing sequence number, denoted by the `change_id`, allows the detection of missed events in the stream as these are processed. Any gap in the sequence of change IDs indicates that one or more events have been missed.

chat\_bubble

Detection over the whole stream is not possible using the `change_id` only. In particular:

-   If the creation event for a resource has been missed, there is no immediate way of detecting this from the `change_id`. It would only become apparent when there is a subsequent update event for the resource and no creation event has yet been processed.
    
-   There is no immediate way to detect that the most recent update event for a resource has been missed. It would only become apparent when there is a subsequent update for the resource, at which point you are able to detect the gap in sequence numbers.
    

You can overcome these limitations by using Windowing.

#### [](#detection_of_missed_events_using_windowing "Copy link to heading")Detection of missed events using Windowing

To fully reconcile an external system against Edge Functions resources state, use Windowing.

Calling the Edge Functions `Get Journal Events Checksum` endpoint ([GET {edge-functions-api-url}/v1/journal-events:checksum](/vault-core/5-9/EN/api/edge_functions_api#_journal_events_GetJournalEventsChecksumResponse_GetJournalEventsChecksum)) enables you to request a summary of the state changes of all Edge Function resources of a type within a specific historic time period. A call to this endpoint will return both the number of Edge Function resource state changes committed within the specified time period (window) and a checksum that uniquely identifies the set of events generated as a consequence to those changes. See [Checksum Algorithm](#checksum_algorithm) for more details of the algorithm used in the checksum.

The time reference used in this context is always the time when the state change is committed into the Edge Functions platform. This is exposed in the Edge Functions Streaming API events (`timestamp`).

#### [](#event_replay "Copy link to heading")Event replay

If you have detected missed events by using the `change_id`, you can replay these events by calling the Edge Functions `Replay Journal Events` endpoint ([POST {edge-functions-api-url}/v1/journal-events:replay](/vault-core/5-9/EN/api/edge_functions_api#_journal_events_ReplayJournalEventsResponse_ReplayJournalEvents)). Calling this endpoint causes the system to replay an exact copy of the original events for downstream consumption, with an added batch ID header with key `X-JournalEventsBatch-ID`.

chat\_bubble

You can replay events for the `resource_type`s listed within `List Journal Events` ([GET {edge-functions-api-url}/v1/journal-events](/vault-core/5-9/EN/api/edge_functions_api#_journal_events_ListJournalEventsResponse_ListJournalEvents)) results.

To replay any `resource_type`s, use one of the following identifiers:

-   `event_id`
    
-   `resource_id` AND `change_id`
    

If you detected missed events using Windowing, call the Edge Function `List Journal Events` endpoint to retrieve a paginated list of all journal events contained within the time window. By comparing the result of this call with your record, you can identify which events you have missed.

When detecting missed events using the `change_id`, you can replay these events by calling the `Replay Journal Events` endpoint as described above. Duplicate identifiers in the `journal_events_to_replay` collection in the endpoint request are ignored and the corresponding events are only replayed once.

### [](#topics_that_can_be_reconciled "Copy link to heading")Topics that can be reconciled

You can reconcile the following Edge Functions Streaming API topics:

-   `vault.edge_functions_api.v1.edge_functions.edge_function.events`
    
-   `vault.edge_functions_api.v1.edge_functions.edge_function_version.events`
    
-   `vault.edge_functions_api.v1.edge_functions.edge_function_execution.events`
    

The reconciliation mechanism that you can use depends on how events are published to the topics. There are three categories:

-   [Mutable resource topics](#mutable_resource_topics); published when the state of an Edge Function resource mutates
    
-   [Immutable resource topics](#immutable_resource_topics); published when corresponding Edge Function resources are created
    

#### [](#mutable_resource_topics "Copy link to heading")Mutable resource topics

Every Edge Function resource is identified by a unique `resource_id`. An event is published to a topic when the state of a Edge Function resource mutates. For example, Edge Function events are published to the `vault.edge_functions_api.v1.edge_functions.edge_function.events` topic when an Edge Function resource is created or updated. Each creation or mutation event is associated in the Edge Functions Streaming API to a monotonically and continuously increasing integer called the `change_id`, which is specific to the mutated resource. The creation event for any Edge Function resource therefore has a `change_id` of `0`. The first time that resource is mutated, the corresponding event will have a change ID of `1`. If the same resource is mutated again, the change ID of the corresponding event is `2`. Any subsequent mutations result in corresponding events that have a change ID that increments according to this logic.

The following topics have events for mutable resources, which you can reconcile using the `change_id` and the `resource_id`, or the `event_id`:

-   `vault.edge_functions_api.v1.edge_functions.edge_function.events`
    
-   `vault.edge_functions_api.v1.edge_functions.edge_function_execution.events`
    

#### [](#immutable_resource_topics "Copy link to heading")Immutable resource topics

Events are published to these topics when the corresponding Edge Function resources are created. For example, create Edge Function Version events are published to the `vault.edge_functions_api.v1.edge_functions.edge_function_version.events` topic when an `EdgeFunctionVersion` (that cannot be mutated) is created. Detection of missed events for events on this topic is not available as the change ID always remains at `0`.

The following topics have events for immutable resources, which you can reconcile using the `event_id`:

-   `vault.edge_functions_api.v1.edge_functions.edge_function_version.events`
    

### [](#event_reconciliation_errors "Copy link to heading")Event reconciliation errors

There are three errors that can occur when reconciling events:

-   InvalidArgument
    
-   NotFound
    
-   Unavailable (or timeouts)
    

chat\_bubble

The errors described below describe `now()` as the time at which the Edge Functions Journal Events API starts processing a request made to either the `Get Journal Events Checksum` endpoint ([GET {edge-functions-api-url}/v1/journal-events:checksum](/vault-core/5-9/EN/api/edge_functions_api#_journal_events_GetJournalEventsChecksumResponse_GetJournalEventsChecksum)) or to the `List Journal Events` endpoint ([GET {edge-functions-api-url}/v1/journal-events](/vault-core/5-9/EN/api/edge_functions_api#_journal_events_ListJournalEventsResponse_ListJournalEvents)).

#### [](#invalidargument "Copy link to heading")InvalidArgument

This error can be generated when any of the following conditions occur in the specified scenario:

-   The lower bound timestamp in the time window is earlier than seven days in the past (that is, `now()` - seven days) (`Get Journal Events Checksum` and `List Journal Events`)
    
-   The upper bound timestamp in the time window is in the future (that is, greater or equal to `now()`) (`Get Journal Events Checksum` and `List Journal Events`)
    
-   The `page_size` is not within 1 and 100, boundaries included (`List Journal Events`)
    
-   The `journal_events_to_replay` contains no identifiers (`Replay Journal Events`)
    
-   The `journal_events_to_replay` contains more than 100 identifiers (`Replay Journal Events`)
    
-   The `journal_events_to_replay` contains one or more journal events that cannot be used to reconcile the relevant topic - such as invalid `UUID` for the `event_identifier`, missing `change_id` or `resource_id` for `resource_identifier`, for example (`Replay Journal Events`)
    
-   The time window contains more than 500k events when calculating the checksum (`Get Journal Events Checksum`)
    

chat\_bubble

If you are encountering the `INVALID_ARGUMENT` error when calculating a checksum, consider reducing the time window to decrease the number of events to process.

#### [](#notfound "Copy link to heading")NotFound

This error can be generated when the `journal_events_to_replay` contains one or more ids that are not in the Edge Functions journal (`Replay Journal Events`)

#### [](#unavailabletimeouts "Copy link to heading")Unavailable/timeouts

An `UNAVAILABLE` error (or timeout) can occur during peak loads when using the `GetJournalEventsChecksum` endpoint to calculate checksums. If you are encountering timeouts when dealing with a large volume of events, consider using read replicas to optimise the performance of events reconciliation. For more information, see [Configuring read replicas for performance](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#configuring_read_replicas_for_performance).

### [](#checksum_algorithm "Copy link to heading")Checksum algorithm

The events reconciliation checksum algorithm enables external verification that events consumed by downstream consumers of Edge Functions (during a particular time window) match the internal state of the Edge Functions platform. This section describes the algorithm that is used to calculate the checksum in the Edge Functions `Get Journal Events Checksum` endpoint as described above. It is the same algorithm used for equivalent APIs in the Vault Core Streaming API.

The algorithm uses a hashing function and an XOR operation which makes its application commutative. Combining hashes using an XOR requires all `event_id`s to be the same length. Therefore, a preparatory processing step is required to ensure that all inputs to the XOR function for each `event_id` are the same length. Edge Functions uses the sha256 algorithm for this purpose.

The checksum is calculated using the following steps:

1.  Each `event_id` is hashed using SHA256.
    
2.  An XOR function is then applied to each hash from the previous result.
    
3.  Then a hash of the final result as a hexadecimal string is returned.
    

For example, for `event_id`s A, B, C, the result is sha(XOR(XOR(sha(A), sha(B)), sha(C))).

lightbulb

The checksum algorithm within the Edge Functions platform will not operate with duplicated `event_id` values. For the algorithm to work correctly, remove any duplicate `event_id` values.

chat\_bubble

When calculating the Journal Events checksum for a specified period of time, Vault Core returns a checksum based on all events during that period regardless of the `journal_events[].published` status. This is because the checksum calculation considers all unpublished Journal Events retrieved during that window of time to be eventually published.

If you are using [Journal Events](/vault-core/5-9/EN/api/core_api#journal_events) to detect and replay missed events over that period, you should therefore only replay ones that have `journal_events[].published` set to `true`.

The following pseudo-code describes the algorithm:

The following example provides a sample implementation of the algorithm in Python:

A sample implementation of the algorithm in Go is shown below:

## [](#edge_function_events "Copy link to heading")Edge Function Events

### [](#edgefunctionevent "Copy link to heading")EdgeFunctionEvent

An `EdgeFunctionEvent` is published when an [EdgeFunction](/vault-core/5-9/EN/api/edge_functions_api#edgefunction) resource is created or updated.

*Topic*: `vault.edge_functions_api.v1.edge_functions.edge_function.events`

  
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

int64

 | 

A unique identifier for the Edge Function state change.

 |
| 

`edge_function_created`

 | 

`EdgeFunctionCreatedEvent`

 | 

`EdgeFunction` creation event.

 |
| 

`edge_function_updated`

 | 

`EdgeFunctionUpdatedEvent`

 | 

`EdgeFunction` update event.

 |

* * *

`EdgeFunctionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`edge_function`

 | 

`edge_functions_api.v1.EdgeFunction`

 | 

The Edge Function object at creation with all fields populated.

 |

* * *

`EdgeFunctionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`edge_function`

 | 

`edge_functions_api.v1.EdgeFunction`

 | 

The Edge Function object with all fields populated.

 |
| 

`update_mask`

 | 

`FieldMask`

 | 

The update mask specifying which fields have been updated as a result of a request to update an Edge Function.

 |

### [](#edgefunctionexecutionevent "Copy link to heading")EdgeFunctionExecutionEvent

An `EdgeFunctionExecutionEvent` is published when an Edge Function is executed. This will create and possibly update an [EdgeFunctionExecution](/vault-core/5-9/EN/api/edge_functions_api#edgefunctionexecution) resource that is sent out with events.

chat\_bubble

A request to execute an Edge Function triggers creation of the following - and does so before any Edge Function code is executed:

-   `EdgeFunctionExecution` resource
    
-   `EdgeFunctionExecutionEvent` event including `EdgeFunctionExecutionCreatedEvent` message
    

At this point, the `response` and `error` fields of the `EdgeFunctionExecution` resource are unpopulated in the `EdgeFunctionExecutionCreatedEvent` message of the published `EdgeFunctionExecutionEvent`.

When the Edge Function code itself is executed, one of the following scenarios occurs:

-   Success - the successful response of a synchronous Edge Function Version execution is never populated in the `EdgeFunctionExecution` resource and no further events are published for it.
    
-   Failure - the Edge Function code execution fails. This results in updating the `EdgeFunctionExecution` resource to populate the `error` field and triggers the publication of an `EdgeFunctionExecutionEvent` including the `EdgeFunctionExecutionUpdatedEvent` message containing the resource.
    

*Topic*: `vault.edge_functions_api.v1.edge_functions.edge_function_execution.events`

  
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

int64

 | 

A unique identifier for the Edge Function Execution state change.

 |
| 

`edge_function_execution_created`

 | 

`EdgeFunctionExecutionCreatedEvent`

 | 

`EdgeFunctionExecution` creation event.

 |
| 

`edge_function_execution_updated`

 | 

`EdgeFunctionExecutionUpdatedEvent`

 | 

`EdgeFunctionExecution` update event.

 |

* * *

`EdgeFunctionExecutionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`edge_function_execution`

 | 

`edge_functions_api.v1.EdgeFunctionExecution`

 | 

The Edge Function Execution object at creation with all required fields populated.

 |

* * *

`EdgeFunctionExecutionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`edge_function_execution`

 | 

`edge_functions_api.v1.EdgeFunctionExecution`

 | 

The Edge Function execution object with all required fields populated. This Edge Function execution object is subsequently updated after an execution has been triggered, under certain circumstances. For example:

-   An error occurred during execution
    
-   The `store_response` parameter was set to `true` in the original execution request
    
-   The execution triggered asynchronously, regardless of whether it succeeded or resulted in an error
    





 |
| 

`update_mask`

 | 

`FieldMask`

 | 

The update mask specifying which fields have been updated.

 |

### [](#edgefunctionversionevent "Copy link to heading")EdgeFunctionVersionEvent

An `EdgeFunctionVersionEvent` is published when an [EdgeFunctionVersion](/vault-core/5-9/EN/api/edge_functions_api#edgefunctionversion) resource is created.

*Topic*: `vault.edge_functions_api.v1.edge_functions.edge_function_version.events`

  
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

int64

 | 

A unique identifier for the Edge Function Version state change. It will always be 0.

 |
| 

`edge_function_created`

 | 

`EdgeFunctionCreatedEvent`

 | 

`EdgeFunctionVersion` creation event.

 |

* * *

`EdgeFunctionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`edge_function`

 | 

`edge_functions_api.v1.EdgeFunctionVersion`

 | 

The Edge Function Version object at creation with all fields populated.

 |

## [](#common_types "Copy link to heading")Common Types

### [](#fieldmask "Copy link to heading")FieldMask

`FieldMask` represents a set of symbolic field paths in string array. For example:

 
| Field | Description |
| --- | --- |
| 
`f`

 | 

Represents a field in a root message.

 |
| 

`a` and `b`

 | 

Represent fields in the message found in `f`.

 |
| 

`d`

 | 

Represents a field found in the message in `f.b`.

 |

The purpose of field masks is to specify a subset of fields that should be, or have been, modified by an update operation. Field masks have the following JSON encoding:

  
| Field | Type | Description |
| --- | --- | --- |
| 
paths

 | 

string array

 | 

The set of field mask paths.

 |