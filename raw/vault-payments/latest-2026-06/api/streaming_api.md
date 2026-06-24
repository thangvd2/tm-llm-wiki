---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/streaming_api"
title: "Streaming API"
scraped_at: "2026-06-17T15:47:03.568Z"
images: 0
---

# Streaming API

## [](#overview "Copy link to heading")Overview

Vault Payments natively supports real-time event streaming from its services. Vault Payments Streaming API broadcasts events relating to mutations of each resource throughout its lifecycle. These events are either resource creation or resource mutation.

### [](#message_payload "Copy link to heading")Message payload

The supported message format is JSON.

Each message type has a dedicated Kafka topic in the Vault Payments Streaming API. The message payload contains:

-   The ID of the resource involved
    
-   The whole resource object
    
-   The resource fields that has been altered if the resource was mutated
    

#### [](#update_masks "Copy link to heading")Update masks

Update masks are defined as follows:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`paths`

 | 

array of strings

 | 

An array of paths (relative to the resource that has changed) which have changed since the last event.

 |

## [](#account_link_events "Copy link to heading")Account Link Events

### [](#accountlinkevent "Copy link to heading")AccountLinkEvent

A `AccountLinkEvent` is generated when a new Account Link is created or updated:

-   Account Link creation (AccountLinkCreatedEvent)
    
-   Account Link updates (AccountLinkUpdatedEvent)
    

*Topic*: `{vault.payments.${tenant_id}.stream_api.v1.routing.account_link.events}`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Account Link ID.

 |
| 

`account_link_created`

 | 

AccountLinkCreatedEvent

 | 

The Account Link Created event.

 |
| 

`account_link_updated`

 | 

AccountLinkUpdatedEvent

 | 

The Account Link Updated event.

 |

`AccountLinkCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`account_link`

 | 

[Account Link](/vault-payments/latest/EN/api/payments_api#accountlink)

 | 

The Account Link at creation.

 |

`AccountLinkUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`account_link`

 | 

[Account Link](/vault-payments/latest/EN/api/payments_api#accountlink)

 | 

The Account Link after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#account_range_events "Copy link to heading")Account Range Events

### [](#accountrangeevent "Copy link to heading")AccountRangeEvent

A `AccountRangeEvent` is generated when a new Account Range is created or updated:

-   Account Range creation (AccountRangeCreatedEvent)
    
-   Account Range updates (AccountRangeUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.account_ranges.account_range.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Account Range ID.

 |
| 

`account_range_created`

 | 

AccountRangeCreatedEvent

 | 

The Account Range Created event.

 |
| 

`account_range_updated`

 | 

AccountRangeUpdatedEvent

 | 

The Account Range Updated event.

 |

`AccountRangeCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`account_range`

 | 

[Account Range](/vault-payments/latest/EN/api/payments_api#account_ranges)

 | 

The Account Range at creation.

 |

`ThreeDSRecordUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`account_range`

 | 

[AccountRanges](/vault-payments/latest/EN/api/payments_api#account_ranges)

 | 

The Account Range after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#card_events "Copy link to heading")Card events

### [](#cardevent "Copy link to heading")CardEvent

A `CardEvent` is generated when a new Card is created or updated:

-   Card creation (CardCreatedEvent)
    
-   Card updates (CardUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.cards.card.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Card ID.

 |
| 

`card_created`

 | 

CardCreatedEvent

 | 

The Card Created event.

 |
| 

`card_updated`

 | 

CardUpdatedEvent

 | 

The Card Updated event.

 |

`CardCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`card`

 | 

[Card](/vault-payments/latest/EN/api/payments_api#card)

 | 

The Card at creation.

 |

`CardUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`card`

 | 

[Card](/vault-payments/latest/EN/api/payments_api#card)

 | 

The Card after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#cardholder_events "Copy link to heading")Cardholder Events

### [](#cardholderevent "Copy link to heading")CardholderEvent

A `CardholderEvent` is generated when a new Cardholder is created or updated:

-   Cardholder creation (CardholderCreatedEvent)
    
-   Cardholder updates (CardholderUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.cards.cardholder.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Cardholder ID.

 |
| 

`cardholder_created`

 | 

CardholderCreatedEvent

 | 

The Cardholder Created event.

 |
| 

`cardholder_updated`

 | 

CardholderUpdatedEvent

 | 

The Cardholder Updated event.

 |

`CardholderCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`cardholder`

 | 

[Cardholder](/vault-payments/latest/EN/api/payments_api#cardholders)

 | 

The Cardholder at creation.

 |

`ThreeDSRecordUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`cardholder`

 | 

[Cardholder](/vault-payments/latest/EN/api/payments_api#cardholders)

 | 

The Cardholder after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#card_order_events "Copy link to heading")Card Order Events

### [](#cardorderevent "Copy link to heading")CardOrderEvent

A `CardOrderEvent` is generated when a new CardOrder is created or updated:

-   CardOrder creation (CardOrderCreatedEvent)
    
-   CardOrder updates (CardOrderUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.cards.card_order.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Card Order ID.

 |
| 

`card_order_created`

 | 

CardOrderCreatedEvent

 | 

The Card Order Created event.

 |
| 

`card_order_updated`

 | 

CardOrderUpdatedEvent

 | 

The Card Order Updated event.

 |

`CardOrderCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`card_order`

 | 

[CardOrder](/vault-payments/latest/EN/api/payments_api#cardorder)

 | 

The Card Order at creation.

 |

`CardOrderUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`card_order`

 | 

[CardOrder](/vault-payments/latest/EN/api/payments_api#cardorder)

 | 

The Card Order after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#core_events "Copy link to heading")Core Events

### [](#coreevent "Copy link to heading")CoreEvent

A `CoreEvent` is generated when a new Core is created or updated:

-   Core creation (CoreCreatedEvent)
    
-   Core updates (CoreUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.cores.core.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Core ID.

 |
| 

`core_created`

 | 

CoreCreatedEvent

 | 

The Core Created event.

 |
| 

`core_updated`

 | 

CoreUpdatedEvent

 | 

The Core Updated event.

 |

`CoreCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`core`

 | 

[Core](/vault-payments/latest/EN/api/payments_api#core)

 | 

The Core at creation.

 |

`CoreUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`core`

 | 

[Core](/vault-payments/latest/EN/api/payments_api#core)

 | 

The Core after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#core_version_events "Copy link to heading")Core Version Events

### [](#coreversionevent "Copy link to heading")CoreVersionEvent

A `CoreVersionEvent` is generated when a new Core Version is created:

-   Core Version creation (CoreVersionCreatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.cores.core_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Core Version ID.

 |
| 

`core_version_created`

 | 

CoreVersionCreatedEvent

 | 

The Core Version Created event.

 |

`CoreVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`core_version`

 | 

[Core Version](/vault-payments/latest/EN/api/payments_api#coreversion)

 | 

The Core Version at creation.

 |

## [](#dashboard_events "Copy link to heading")Dashboard Events

### [](#dashboardevent "Copy link to heading")DashboardEvent

A `DashboardEvent` is generated when a new Dashboard is created or updated:

-   Dashboard creation (DashboardCreatedEvent)
    
-   Dashboard updates (DashboardUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.dashboards.dashboard.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Dashboard ID.

 |
| 

`dashboard_created`

 | 

DashboardCreatedEvent

 | 

The Dashboard Created event.

 |
| 

`dashboard_updated`

 | 

DashboardUpdatedEvent

 | 

The Dashboard Updated event.

 |

`DashboardCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`dashboard`

 | 

[Dashboard](/vault-payments/latest/EN/api/payments_api#dashboard)

 | 

The Dashboard at creation.

 |

`DashboardUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`dashboard`

 | 

[Dashboard](/vault-payments/latest/EN/api/payments_api#dashboard)

 | 

The Dashboard after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#dashboard_version_events "Copy link to heading")Dashboard Version Events

### [](#dashboardversionevent "Copy link to heading")DashboardVersionEvent

A `DashboardVersionEvent` is generated when a new Dashboard Version is created or updated:

-   Dashboard Version creation (DashboardVersionCreatedEvent)
    
-   Dashboard Version updates (DashboardVersionUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.dashboards.dashboard_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Dashboard Version ID.

 |
| 

`dashboard_version_created`

 | 

DashboardVersionCreatedEvent

 | 

The Dashboard Version Created event.

 |
| 

`dashboad_version_updated`

 | 

DashboardVersionUpdatedEvent

 | 

The Dashboard Version Updated event.

 |

`DashboardVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`dashboard_version`

 | 

[DashboardVersion](/vault-payments/latest/EN/api/payments_api#dashboardversion)

 | 

The Dashboard Version at creation.

 |

`DashboardVersionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`dashboard_version`

 | 

[DashboardVersion](/vault-payments/latest/EN/api/payments_api#dashboardversion)

 | 

The Dashboard Version after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#file_events "Copy link to heading")File Events

### [](#fileevent "Copy link to heading")FileEvent

A `FileEvent` is generated when a new file is created:

-   File creation (FileCreatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.files.file.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The File ID.

 |
| 

`file_created`

 | 

FileCreatedEvent

 | 

File creation event.

 |

`FileCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`file`

 | 

[File](/vault-payments/latest/EN/api/payments_api#file)

 | 

The file object at creation.

 |

## [](#integration_events "Copy link to heading")Integration Events

### [](#integrationevent "Copy link to heading")IntegrationEvent

A `IntegrationEvent` is generated when a new Integration is created or updated:

-   Integration creation (IntegrationCreatedEvent)
    
-   Integration updates (IntegrationUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.integrations.integration.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Integration ID.

 |
| 

`integration_created`

 | 

IntegrationCreatedEvent

 | 

The Integration Created event.

 |
| 

`integration_updated`

 | 

IntegrationUpdatedEvent

 | 

The Integration Updated event.

 |

`IntegrationCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`integration`

 | 

[Integration](/vault-payments/latest/EN/api/payments_api#integration)

 | 

The Integration at creation.

 |

`IntegrationUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`integration`

 | 

[Integration](/vault-payments/latest/EN/api/payments_api#integration)

 | 

The Integration after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#integration_version_events "Copy link to heading")Integration Version Events

### [](#integrationversionevent "Copy link to heading")IntegrationVersionEvent

A `IntegrationVersionEvent` is generated when a new Integration Version is created or updated:

-   Integration Version creation (IntegrationVersionCreatedEvent)
    
-   Integration Version updates (IntegrationVersionUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.integrations.integration_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Integration Version ID.

 |
| 

`integration_version_created`

 | 

IntegrationVersionCreatedEvent

 | 

The Integration Version Created event.

 |
| 

`integration_version_updated`

 | 

IntegrationVersionUpdatedEvent

 | 

The Integration Version Updated event.

 |

`IntegrationVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`integration_version`

 | 

[IntegrationVersion](/vault-payments/latest/EN/api/payments_api#integrationversion)

 | 

The Integration Version at creation.

 |

`IntegrationVersionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`integration_version`

 | 

[IntegrationVersion](/vault-payments/latest/EN/api/payments_api#integrationversion)

 | 

The Integration Version after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#instruction_batch_events "Copy link to heading")Instruction Batch Events

### [](#instructionbatchevent "Copy link to heading")InstructionBatchEvent

A `InstructionBatchEvent` is generated when a new Instruction Batch is created or updated:

-   Instruction Batch creation (InstructionBatchCreatedEvent)
    
-   Instruction Batch updates (InstructionBatchUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.instructions.instruction_batch.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event for each `resource_id`. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The InstructionBatch ID.

 |
| 

`instruction_batch_created`

 | 

InstructionBatchCreatedEvent

 | 

The Instruction Batch Created event.

 |
| 

`instruction_batch_updated`

 | 

InstructionBatchUpdatedEvent

 | 

The Instruction Batch Updated event.

 |

`InstructionBatchCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_batch`

 | 

[Instruction Batch](/vault-payments/latest/EN/api/payments_api#instructionbatch)

 | 

The Instruction Batch at creation.

 |

`InstructionBatchUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_batch`

 | 

[Instruction Batch](/vault-payments/latest/EN/api/payments_api#instructionbatch)

 | 

The Instruction Batch after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#instruction_events "Copy link to heading")Instruction Events

### [](#instructionevent "Copy link to heading")InstructionEvent

An `InstructionEvent` is guaranteed to be emitted when the Instruction reaches a final state, such as `PROCESSING_STATUS_COMPLETED`, `PROCESSING_STATUS_ERRORED`, or `PROCESSING_STATUS_CANCELLED`. There may also be events emitted prior to this at various points during the Instruction lifetime.

If events are republished (e.g. as recovery in a disaster scenario) then only a single event representing the latest state of the Instruction will be emitted, even if multiple events were originally emitted. In this scenario the event will have the same `change_id` as the original final event for that Instruction.

[Instructions](/vault-payments/latest/EN/api/payments_api#instructions) with the same `payment_id` value are guaranteed to be emitted in order of their creation.

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.instructions.instruction.events`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

string

 | 

A unique string identifying the event.

 |
| 

`timestamp`

 | 

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`instruction`

 | 

[Instruction](/vault-payments/latest/EN/api/payments_api#instructions)

 | 

The Instruction object as of this event.

 |

## [](#instruction_file_events "Copy link to heading")Instruction File Events

### [](#instructionfileevent "Copy link to heading")InstructionFileEvent

A `InstructionFileEvent` is generated when a new Instruction File is created or updated:

-   Instruction File creation (InstructionFileCreatedEvent)
    
-   Instruction File updates (InstructionFileUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.instructions.instruction_file.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event for each `resource_id`. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The InstructionFile ID.

 |
| 

`instruction_file_created`

 | 

InstructionFileCreatedEvent

 | 

The Instruction File Created event.

 |
| 

`instruction_file_updated`

 | 

InstructionFileUpdatedEvent

 | 

The Instruction File Updated event.

 |

`InstructionFileCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_file`

 | 

[Instruction File](/vault-payments/latest/EN/api/payments_api#instructionfile)

 | 

The Instruction File at creation.

 |

`InstructionFileUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_file`

 | 

[Instruction File](/vault-payments/latest/EN/api/payments_api#instructionfile)

 | 

The Instruction File after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#instruction_flow_events "Copy link to heading")Instruction Flow Events

### [](#instructionflowevent "Copy link to heading")InstructionFlowEvent

A `InstructionFlowEvent` is generated when a new Instruction Flow is created or updated:

-   Instruction Flow creation (InstructionFlowCreatedEvent)
    
-   Instruction Flow updates (InstructionFlowUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.instruction_flows.instruction_flow.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The InstructionFlow ID.

 |
| 

`instruction_flow_created`

 | 

InstructionFlowCreatedEvent

 | 

The Instruction Flow Created event.

 |
| 

`instruction_flow_updated`

 | 

InstructionFlowUpdatedEvent

 | 

The Instruction Flow Updated event.

 |

`InstructionFlowCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_flow`

 | 

[Instruction Flow](/vault-payments/latest/EN/api/payments_api#instructionflow)

 | 

The Instruction Flow at creation.

 |

`InstructionFlowUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_flow`

 | 

[Instruction Flow](/vault-payments/latest/EN/api/payments_api#instructionflow)

 | 

The Instruction Flow after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#instruction_flow_version_events "Copy link to heading")Instruction Flow Version Events

### [](#instructionflowversionevent "Copy link to heading")InstructionFlowVersionEvent

A `InstructionFlowVersionEvent` is generated when a new Instruction Flow Version is created:

-   Instruction Flow Version creation (InstructionFlowVersionCreatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.instruction_flows.instruction_flow_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Instruction Flow Version ID.

 |
| 

`instruction_flow_version_created`

 | 

InstructionFlowVersionCreatedEvent

 | 

The Instruction Flow Version Created event.

 |

`InstructionFlowVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`instruction_flow_version`

 | 

[Instruction Flow Version](/vault-payments/latest/EN/api/payments_api#instructionflowversion)

 | 

The Instruction Flow Version at creation.

 |

## [](#manual_decision_events "Copy link to heading")Manual Decision Events

### [](#manualdecisionevent "Copy link to heading")ManualDecisionEvent

A `ManualDecisionEvent` is generated when a new Manual Decision is created or updated:

-   Manual Decision creation (ManualDecisionCreatedEvent)
    
-   Manual Decision updates (ManualDecisionUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.manual_decisions.manual_decision.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Manual Decision ID.

 |
| 

`manual_decision_created`

 | 

ManualDecisionCreatedEvent

 | 

The Manual Decision Created event.

 |
| 

`manual_decision_updated`

 | 

ManualDecisionUpdatedEvent

 | 

The Manual Decision Updated event.

 |

`ManualDecisionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`manual_decision`

 | 

[ManualDecision](/vault-payments/latest/EN/api/payments_api#manual_decisions)

 | 

The Manual Decision at creation.

 |

`ManualDecisionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`manual_decision`

 | 

[ManualDecision](/vault-payments/latest/EN/api/payments_api#manual_decisions)

 | 

The Manual Decision after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#membership_directory_version_events "Copy link to heading")Membership Directory Version Events

### [](#membershipdirectoryversionevent "Copy link to heading")MembershipDirectoryVersionEvent

A `MembershipDirectoryVersionEvent` is generated when a new Membership Directory Version is created or updated:

-   Membership Directory Version creation (MembershipDirectoryVersionCreatedEvent)
    
-   Membership Directory Version updates (MembershipDirectoryVersionUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.membership_directories.membership_directory_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Membership Directory Version ID.

 |
| 

`membership_directory_version_created`

 | 

MembershipDirectoryVersionCreatedEvent

 | 

The Membership Directory Version Created event.

 |
| 

`membership_directory_version_updated`

 | 

MembershipDirectoryVersionUpdatedEvent

 | 

The Membership Directory Version Updated event.

 |

`MembershipDirectoryVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`membership_directory_version`

 | 

[MembershipDirectoryVersion](/vault-payments/latest/EN/api/payments_api#membershipdirectoryversion)

 | 

The Membership Directory Version at creation.

 |

`MembershipDirectoryVersionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`membership_directory_version`

 | 

[MembershipDirectoryVersion](/vault-payments/latest/EN/api/payments_api#membershipdirectoryversion)

 | 

The Membership Directory Version after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#parameter_events "Copy link to heading")Parameter Events

### [](#parameterevent "Copy link to heading")ParameterEvent

A `ParameterEvent` is generated when a new Parameter is created or updated:

-   Parameter creation (ParameterCreatedEvent)
    
-   Parameter updates (ParameterUpdatedEvent)
    

*Topic*: `{vault.payments.${tenant_id}.stream_api.v1.parameters.parameter.events}`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Parameter ID.

 |
| 

`parameter_created`

 | 

ParameterCreatedEvent

 | 

The Parameter Created event.

 |
| 

`parameter_updated`

 | 

ParameterUpdatedEvent

 | 

The Parameter Updated event.

 |

`ParameterCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`parameter`

 | 

[Parameter](/vault-payments/latest/EN/api/payments_api#parameter)

 | 

The Parameter at creation.

 |

`ParameterUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`parameter`

 | 

[Parameter](/vault-payments/latest/EN/api/payments_api#parameter)

 | 

The Parameter after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#parameter_value_events "Copy link to heading")Parameter Value Events

### [](#parametervalueevent "Copy link to heading")ParameterValueEvent

A `ParameterValueEvent` is generated when a new Parameter Value is created or updated:

-   Parameter Value creation (ParameterValueCreatedEvent)
    
-   Parameter Value updates (ParameterValueUpdatedEvent)
    

*Topic*: `{vault.payments.${tenant_id}.stream_api.v1.parameters.parameter_value.events}`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Parameter Value ID.

 |
| 

`parameter_value_created`

 | 

ParameterValueCreatedEvent

 | 

The Parameter Value Created event.

 |
| 

`parameter_value_updated`

 | 

ParameterValueUpdatedEvent

 | 

The Parameter Value Updated event.

 |

`ParameterValueCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`parameter_value`

 | 

[Parameter Value](/vault-payments/latest/EN/api/payments_api#parametervalue)

 | 

The Parameter Value at creation.

 |

`ParameterValueUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`parameter_value`

 | 

[Parameter Value](/vault-payments/latest/EN/api/payments_api#parametervalue)

 | 

The Parameter Value after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#payment_events "Copy link to heading")Payment Events

### [](#paymentevent "Copy link to heading")PaymentEvent

A `PaymentEvent` is guaranteed to be emitted when the Payment reaches its final state. There may also be events emitted prior to this at various points during the Payment lifetime.

If events are republished (e.g. as recovery in a disaster scenario) then only a single event representing the latest state of the Payment will be emitted, even if multiple events were originally emitted. In this scenario the event will have the same `change_id` as the original final event for that Payment.

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.payments.payment.events`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

string

 | 

A unique string identifying the event.

 |
| 

`timestamp`

 | 

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`payment`

 | 

[Payment](/vault-payments/latest/EN/api/payments_api#Payment)

 | 

The Payment object as of this event.

 |

## [](#payment_instrument_events "Copy link to heading")Payment Instrument Events

### [](#paymentinstrumentevent "Copy link to heading")PaymentInstrumentEvent

A `PaymentInstrumentEvent` is generated when a new Payment Instrument is created or updated:

-   Payment Instrument creation (PaymentInstrumentCreatedEvent)
    
-   Payment Instrument updates (PaymentInstrumentUpdatedEvent)
    

*Topic*: `{vault.payments.${tenant_id}.stream_api.v1.routing.payment_instrument.events}`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Payment Instrument ID.

 |
| 

`payment_instrument_created`

 | 

PaymentInstrumentCreatedEvent

 | 

The Payment Instrument Created event.

 |
| 

`payment_instrument_updated`

 | 

PaymentInstrumentUpdatedEvent

 | 

The Payment Instrument Updated event.

 |

`PaymentInstrumentCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`payment_instrument`

 | 

[Payment Instrument](/vault-payments/latest/EN/api/payments_api#paymentinstrument)

 | 

The Payment Instrument at creation.

 |

`PaymentInstrumentUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`payment_instrument`

 | 

[Payment Instrument](/vault-payments/latest/EN/api/payments_api#paymentinstrument)

 | 

The Payment Instrument after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#rule_events "Copy link to heading")Rule Events

### [](#ruleevent "Copy link to heading")RuleEvent

A `RuleEvent` is generated when a new Rule is created or updated:

-   Rule creation (RuleCreatedEvent)
    
-   Rule updates (RuleUpdatedEvent)
    

*Topic*: `{vault.payments.${tenant_id}.stream_api.v1.rules.rule.events}`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Rule ID.

 |
| 

`rule_created`

 | 

RuleCreatedEvent

 | 

The Rule Created event.

 |
| 

`rule_updated`

 | 

RuleUpdatedEvent

 | 

The Rule Updated event.

 |

`RuleCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`rule`

 | 

[Rule](/vault-payments/latest/EN/api/payments_api#rule)

 | 

The Rule at creation.

 |

`RuleUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`rule`

 | 

[Rule](/vault-payments/latest/EN/api/payments_api#rule)

 | 

The Rule after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#rule_set_events "Copy link to heading")Rule Set Events

### [](#rulesetevent "Copy link to heading")RuleSetEvent

A `RuleSetEvent` is generated when a new Rule Set is created or updated:

-   Rule Set creation (RuleSetCreatedEvent)
    
-   Rule Set updates (RuleSetUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.rules.rule_set.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Rule Set ID.

 |
| 

`rule_set_created`

 | 

RuleSetCreatedEvent

 | 

The Rule Set Created event.

 |
| 

`rule_set_updated`

 | 

RuleSetUpdatedEvent

 | 

The Rule Set Updated event.

 |

`RuleSetCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`rule_set`

 | 

[Rule Set](/vault-payments/latest/EN/api/payments_api#ruleset)

 | 

The Rule Set at creation.

 |

`RuleSetUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`rule_set`

 | 

[Rule Set](/vault-payments/latest/EN/api/payments_api#ruleset)

 | 

The Rule Set after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#rule_set_version_events "Copy link to heading")Rule Set Version Events

### [](#rulesetversionevent "Copy link to heading")RuleSetVersionEvent

A `RuleSetVersionEvent` is generated when a new Rule Set Version is created:

-   Rule Set Version creation (RuleSetVersionCreatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.rules.rule_set_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Rule Set Version ID.

 |
| 

`rule_set_version_created`

 | 

RuleSetVersionCreatedEvent

 | 

The Rule Set Version Created event.

 |

`RuleSetVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`rule_set_version`

 | 

[Rule Set Version](/vault-payments/latest/EN/api/payments_api#rulesetversion)

 | 

The Rule Set Version at creation.

 |

## [](#rule_version_events "Copy link to heading")Rule Version Events

### [](#ruleversionevent "Copy link to heading")RuleVersionEvent

A `RuleVersionEvent` is generated when a new Rule Version is created:

-   Rule Version creation (RuleVersionCreatedEvent)
    

*Topic*: `{vault.payments.${tenant_id}.stream_api.v1.rules.rule_version.events}`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Rule Version ID.

 |
| 

`rule_version_created`

 | 

RuleVersionCreatedEvent

 | 

The Rule Version Created event.

 |

`RuleVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`rule_version`

 | 

[Rule Version](/vault-payments/latest/EN/api/payments_api#ruleversion)

 | 

The Rule Version at creation.

 |

## [](#task_events "Copy link to heading")Task Events

### [](#taskevent "Copy link to heading")TaskEvent

A `TaskEvent` is generated when a new Task is created or updated:

-   Task creation (TaskCreatedEvent)
    
-   Task updates (TaskUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.tasks.task.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Task ID.

 |
| 

`task_created`

 | 

TaskCreatedEvent

 | 

The Task Created event.

 |
| 

`task_updated`

 | 

TaskUpdatedEvent

 | 

The Task Updated event.

 |

`TaskCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`task`

 | 

[Task](/vault-payments/latest/EN/api/payments_api#task)

 | 

The Task at creation.

 |

`TaskUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`task`

 | 

[Task](/vault-payments/latest/EN/api/payments_api#task)

 | 

The Task after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#template_events "Copy link to heading")Template Events

### [](#templateevent "Copy link to heading")TemplateEvent

A `TemplateEvent` is generated when a new Template is created or updated:

-   Template creation (TemplateCreatedEvent)
    
-   Template updates (TemplateUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.templates.template.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Template ID.

 |
| 

`template_created`

 | 

TemplateCreatedEvent

 | 

The Template Created event.

 |
| 

`template_updated`

 | 

TemplateUpdatedEvent

 | 

The Template Updated event.

 |

`TemplateCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`template`

 | 

[Template](/vault-payments/latest/EN/api/payments_api#template)

 | 

The Template at creation.

 |

`TemplateUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`template`

 | 

[Template](/vault-payments/latest/EN/api/payments_api#template)

 | 

The Template after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#template_version_events "Copy link to heading")Template Version Events

### [](#templateversionevent "Copy link to heading")TemplateVersionEvent

A `TemplateVersionEvent` is generated when a new Template Version is created or updated:

-   Template Version creation (TemplateVersionCreatedEvent)
    
-   Template Version updates (TemplateVersionUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.templates.template_version.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The Template Version ID.

 |
| 

`template_version_created`

 | 

TemplateVersionCreatedEvent

 | 

The Template Version Created event.

 |
| 

`template_version_updated`

 | 

TemplateVersionUpdatedEvent

 | 

The Template Version Updated event.

 |

`TemplateVersionCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`template_version`

 | 

[TemplateVersion](/vault-payments/latest/EN/api/payments_api#templateversion)

 | 

The Template Version at creation.

 |

`TemplateVersionUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`template_version`

 | 

[TemplateVersion](/vault-payments/latest/EN/api/payments_api#templateversion)

 | 

The Template Version after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |

## [](#threeds_record_events "Copy link to heading")ThreeDS Record Events

### [](#threedsrecordevent "Copy link to heading")ThreeDSRecordEvent

A `ThreeDSRecordEvent` is generated when a new ThreeDSRecord is created or updated:

-   ThreeDSRecord creation (ThreeDSRecordCreatedEvent)
    
-   ThreeDSRecord updates (ThreeDSRecordUpdatedEvent)
    

*Topic*: `vault.payments.${tenant_id}.stream_api.v1.cards.three_ds.events`

  
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

string (RFC3339 timestamp)

 | 

The time the state changed due to this event occurring. e.g. `2024-05-15T13:36:02.240259Z`

 |
| 

`change_id`

 | 

string

 | 

A monotonically increasing number starting with 0 that is incremented by one for each subsequent event. The higher the number, the more recent the change.

 |
| 

`resource_id`

 | 

string

 | 

The ThreeDSRecord ID.

 |
| 

`three_ds_record_created`

 | 

ThreeDSRecordCreatedEvent

 | 

The 3DS Record Created event.

 |
| 

`three_ds_record_updated`

 | 

ThreeDSRecordUpdatedEvent

 | 

The 3DS Record Updated event.

 |

`ThreeDSRecordCreatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`three_ds_record`

 | 

[ThreeDSRecord](/vault-payments/latest/EN/api/payments_api#ThreeDSRecord)

 | 

The 3DS Record at creation.

 |

`ThreeDSRecordUpdatedEvent` is represented as:

  
| Field | Type | Description |
| --- | --- | --- |
| 
`three_ds_record`

 | 

[ThreeDSRecord](/vault-payments/latest/EN/api/payments_api#ThreeDSRecord)

 | 

The 3DS Record after the update.

 |
| 

`update_mask`

 | 

Update mask

 | 

The update mask specifying which fields have been updated.

 |