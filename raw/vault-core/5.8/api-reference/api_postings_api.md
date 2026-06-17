---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/api/postings_api"
title: "Postings APIs"
scraped_at: "2026-06-16T16:37:53.320Z"
images: 0
---

# Postings APIs

chat\_bubble

This page explains the available resources for interfacing with Postings in Vault Core. To learn about Vault Core’s Postings model, the component parts, and how Postings fit together, see [Postings](/vault-core/5-8/EN/reference/postings/).

## [](#overview_of_the_postings_apis "Copy link to heading")Overview of the Postings APIs

The Postings APIs are central to Vault Core and generate the financial changes that persist in the Postings Ledger, Vault Core’s single source of financial truth.

### [](#synchronous_and_asynchronous_apis "Copy link to heading")Synchronous and asynchronous APIs

The Vault Core Postings APIs are made up of:

-   *A synchronous REST API*: The [POST /v1/posting-instruction-batches](/vault-core/5-8/EN/api/core_api#_posting_api_v1_CreatePostingInstructionBatchResponse_CreatePostingInstructionBatch) endpoint used for high priority Postings where an immediate response is required, such as for card authorisations. Also returns the live balance of any accounts affected by the accepted Postings.
    
-   *An asynchronous Kafka API*: A Kafka-based API that implements a request-response model, used for low priority Postings. Can also be used for high priority Postings if Kafka is the preferred option for integrations.
    

chat\_bubble

There is also a Postings Migration API, used for migrating postings from a legacy core into Vault Core. This is described in [Introduction to the Migration APIs](/vault-core/5-8/EN/environment_and_installation//migrating_to_vault/intro).

### [](#the_postings_api_interfaces "Copy link to heading")The Postings API interfaces

The Postings resources that you can interface with in our various APIs are:

-   The Core API [Postings API clients](/vault-core/5-8/EN/api/core_api#postings_api_clients) resource: Use to create the payment integrations and routes through which low priority (and optionally high priority) Kafka postings requests and responses travel
    
    chat\_bubble
    
    -   From Vault Core 5.4 onwards, you can use the synchronous API for direct and immediate responses to high priority Postings requests, as described below.
        
    -   While the system requires that you set up a high priority Kafka route, you do not need to use this if you instead use the synchronous API for high priority Postings.
        
    
-   The Core API [Posting instruction batches](/vault-core/5-8/EN/api/core_api#posting_instruction_batches) resource, made up of:
    
    -   The [CreatePostingInstructionBatchRequest](/vault-core/5-8/EN/api/core_api#createpostinginstructionbatchrequest) endpoint: Use to validate that `CreatePostingInstructionBatchRequest` messages sent via the Postings API are well-formed (useful for testing)
        
    -   The [PostingInstructionBatch](/vault-core/5-8/EN/api/core_api#postinginstructionbatch) endpoint: Use to create synchronous high priority Posting Instruction Batches in production (via `POST /v1/posting-instruction-batches`), to query Posting Instruction Batches, or to create asynchronous Posting Instruction Batches in a test environment (via `POST /v1/posting-instruction-batches:asyncCreate`). The asynchronous method is deprecated as of release 5.4, and will be removed no earlier than release 7.0.
        
    -   The [AsyncOperation](/vault-core/5-8/EN/api/core_api#asyncoperation) endpoint: Use to query posting instruction batches created via the PostingInstructionBatch create(async) method (useful for testing). Deprecated as of release 5.4, and will be removed no earlier than release 7.0.
        
    
-   The Kafka [asynchronous Postings API](/vault-core/5-8/EN/api/postings_api#asynchronous_postings_api): Use for Postings traffic in production via asynchronous requests/responses over Kafka. Has high and low priority routes.
    
-   The Core API [Post\_Posting Republisher](/vault-core/5-8/EN/api/core_api#post_posting_republisher) resource: Use to retrieve, republish, or delete post-posting failures
    

### [](#emulating_postings_operations "Copy link to heading")Emulating Postings operations

You can use the `dry_run` field in the Postings APIs to emulate Postings operations and understand their *potential* effects, without actually affecting Vault Core states or data.

When `dry_run` is set to true, Vault Core runs all validation (including static validation), restriction fetching, account resolution and contract `pre_posting_hook` execution, but Vault Core stops short of making any actual mutations.

This means that Vault Core *does not*:

-   Send any [Posting events](/vault-core/5-8/EN/api/core_api#posting_events) to the `vault.api.v1.postings.posting_instruction_batch.created` topic
    
-   Commit anything to the database
    
-   Update any balances
    
-   Provide any way to read the outcome via the Core API (all Get REST APIs ignore the `dry_run` field)
    
-   Run the `post_posting_hook`
    

Vault Core *does*:

-   Send a dry run response on the response topic determined by the Postings API client; or
    
-   Return a dry run response via the synchronous Postings API response message
    

This feature is particularly useful in the context of the `CreatePostingInstructionBatchRequest`. When using `dry_run` set to true, you can validate the process of creating a PostingInstructionBatch without actually creating the batch or triggering any non-posting events. Vault Core simulates the entire process, identifies any potential errors or issues, and provides a response that shows what would happen in a live execution.

Both `pre_posting_hook` and `post_posting_hook` executions can be simulated without committing anything to the database by using [Contract simulation](/vault-core/5-8/EN/reference/contracts/contract_simulation).

## [](#synchronous_postings_api "Copy link to heading")Synchronous Postings API

### [](#switching_integrations_from_asynchronous_to_synchronous_apis "Copy link to heading")Switching integrations from asynchronous to synchronous APIs

If you have an existing integration to a high priority Kafka request and response topic, this section describes the considerations when switching your integration to the synchronous Postings API.

#### [](#select_suitable_transactions "Copy link to heading")Select suitable transactions

High priority transactions that require near real time responses (such as card authorisations) are best suited for the synchronous Postings API. The synchronous Postings API is also best when the caller requires immediate information about the outcome of a request.

#### [](#ensure_that_all_responses_from_the_asynchronous_postings_api_have_been_processed "Copy link to heading")Ensure that all responses from the asynchronous Postings API have been processed

Before moving an integration from the asynchronous Postings API to the synchronous Postings API, ensure that you have received all relevant responses from Posting Instruction Batches previously submitted through the asynchronous API. One way to do this is to continue monitoring the relevant event streams to catch any delayed messages.

chat\_bubble

Also see the [setup considerations](/vault-core/5-8/EN/api/postings_api#setup_considerations).

### [](#using_the_synchronous_api "Copy link to heading")Using the synchronous API

#### [](#setup_considerations "Copy link to heading")Setup considerations

##### [](#configure_your_http_timeout "Copy link to heading")Configure your HTTP timeout

Set up a HTTP client with your preferred timeout when calling the synchronous Postings API - this is likely to be shorter than any defaults.

chat\_bubble

The `time_to_live` field can be used for this purpose on the asynchronous Postings API; however this cannot be used via the synchronous Postings API.

##### [](#implement_a_retry_mechanism "Copy link to heading")Implement a retry mechanism

It is important to implement a retry mechanism when using the synchronous Postings API so that you can gracefully handle transient issues and prevent the disruption of transaction journeys.

##### [](#decide_the_level_at_which_to_integrate_value_and_booking_timestamps "Copy link to heading")Decide the level at which to integrate value and booking timestamps

From Vault Core 5.5 onwards, `value_timestamp` and `booking_timestamp` are available to Posting Instructions, which enables the future-dating of Postings.

chat\_bubble

The use of value and booking timestamps at the *Posting Instruction Batch* level is deprecated as of Vault Core 5.5, and will be removed no earlier than Vault Core 7.0.

Future-dated Postings are not currently compatible with the Adjustments Extension - therefore:

-   For integrations wanting to use Adjustments, continue using Posting Instruction Batch level timestamps
    
-   For integrations wanting to enable the future-dating of Postings, implement `value_timestamp` and `booking_timestamp` at the lower Posting Instruction level
    

info

-   For optimal system performance, Thought Machine recommends future-dating no more than one percent of your total Postings, and spreading them relatively evenly over a 90 day future period. If the expected throughput or concentration of future-dated Postings is higher than this, contact your Thought Machine representative.
    
-   Future-dated Postings are not compatible with CLv3 Smart Contracts.
    

##### [](#implement_chaining_between_the_synchronous_and_asynchronous_apis "Copy link to heading")Implement chaining between the synchronous and asynchronous APIs

To chain Posting Instruction Batch requests as part of a [client transaction](/vault-core/5-8/EN/reference/postings#client_transaction), the low priority (asynchronous) requests need to connect back to the high priority (synchronous) requests. To enable this, ensure that you have [created the required Postings API client](/vault-core/5-8/EN/api/postings_api#creating_postings_api_clients) before using the synchronous API. This is because chainable [Posting Instruction types](/vault-core/5-8/EN/reference/postings#posting_instruction_types) require a valid, matching Postings API `client_id`, which must also match the one specified in the synchronous API call.

Therefore, ensure that:

-   The `client_id` submitted in the synchronous API call matches the required Postings API Client (so that later asynchronous requests can refer back to it)
    
-   Both the `client_id` and the `client_transaction_id` fields are identical across the related Posting Instruction Batches
    

#### [](#submitting_postings_requests "Copy link to heading")Submitting Postings requests

To submit Postings requests via the [synchronous API](/vault-core/5-8/EN/api/core_api#postinginstructionbatch), call: `POST /v1/posting-instruction-batches`.

#### [](#request_and_response_examples "Copy link to heading")Request and response examples

Typical example Timestamp override example

The following example Posting Instruction Batch request includes a single outbound authorisation Posting Instruction, sent on the 14th November 2024:

Example response

To demonstrate the use of timestamps, the following is an example Posting Instruction Batch request sent on the 10th December 2024, which includes two Posting Instructions:

1.  A backdated Inbound Authorisation Posting Instruction, backdated by one day to be valued on the 07th November 2024, but still booked on the day of the request (by omitting `booking_timestamp` from the request)
    
2.  A future-dated Settlement Posting Instruction, future-dated to be valued (and booked) in two days' time, crediting the customer’s account on the 12th of December 2024
    

info

-   For optimal system performance, Thought Machine recommends future-dating no more than one percent of your total Postings, and spreading them relatively evenly over a 90 day future period. If the expected throughput or concentration of future-dated Postings is higher than this, contact your Thought Machine representative.
    
-   Future-dated Postings are not compatible with CLv3 Smart Contracts.
    

Example response

chat\_bubble

See the Core API’s [CreatePostingInstructionBatchRequest](/vault-core/5-8/EN/api/core_api#createpostinginstructionbatchrequest) for full details about the Posting Instruction Batch object’s parameters.

#### [](#event_streams "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Posting Instruction Batch has been created.\*

 | 

[PostingEvent](/vault-core/5-8/EN/api/core_api#posting_events)(PostingInstructionBatchCreatedEvent)

 | 

`vault.api.v1.postings.posting_instruction_batch.created`

 |
| 

The Posting Instruction Batch has been wrapped with additional End of Day metadata. Applies if you created a Calendar resource and specified it as the input calendar for the `EnrichedPostingInstructionBatchEvent` Kafka stream.

 | 

[PostingEvent](/vault-core/5-8/EN/api/core_api#posting_events)(EnrichedPostingInstructionBatchEvent)

 | 

`vault.core_api.v1.postings.enriched_posting_instruction_batch.events`

 |
| 

The Account balance has been updated (unless *all* Posting Instructions in this request are future-dated).\*\*

Note: Depending on the Account’s permitted denominations, the Smart Contract’s declared AddressDetails, and the BalanceDimensions affected by any Postings in your activation hook you may get multiple AccountBalanceEvent events.





 | 

[BalanceEvent](/vault-core/5-8/EN/api/core_api#balance_events)(AccountBalanceEvent)

 | 

`vault.core_api.v1.balances.account_balance.events`

 |

\*Vault Core 5.3 introduced the `balances` field to the `vault.api.v1.postings.posting_instruction_batch.created topic`, meaning that integrations can use this to retrieve balances (instead of using `vault.core_api.v1.balances.account_balance.events`)

\*\*For transfer Posting Instruction types:

-   Two `AccountBalanceEvent`s are triggered if two different Customer Accounts are affected (regardless of whether the funds were moved between accounts belonging to the same or different customers)
    
-   No `AccountBalanceEvent`s are triggered if two Internal Accounts are affected
    

info

-   For accepted future-dated Posting Instructions, an `AccountBalanceEvent` is triggered only when the `value_timestamp` is reached.
    
-   There is no Posting Instruction Batch response emitted on the client\_id integration Kafka topic for a Posting Instruction Batch created through the Synchronous REST API.
    

## [](#asynchronous_postings_api "Copy link to heading")Asynchronous Postings API

### [](#message_formats_and_delivery_guarantees "Copy link to heading")Message formats and delivery guarantees

-   The supported message formats are JSON or Google Protobuf. The required format is set when your Vault Core instance is configured.
    
-   Response delivery is guaranteed at least once per request submitted.
    

error

There are no ordering guarantees on the Kafka Posting request topics. This applies even when you use a partition key.

### [](#creating_postings_api_clients "Copy link to heading")Creating Postings API clients

Use the Postings API clients resource to set up routes through which low priority (and high priority, if required) Kafka postings requests and responses travel. Payment integrations then send `CreatePostingInstructionBatchRequest`s specifying a client ID to the Postings API request topic. Payment integrations are responsible for listening to the response topic mapped to their client ID.

chat\_bubble

-   From Vault Core 5.4 onwards, you can use the [synchronous Postings API](/vault-core/5-8/EN/api/postings_api#synchronous_postings_api) for high priority Postings requests which require an immediate response.
    
-   While the system requires that you set up a high priority Kafka route, you do not need to use this if you instead use the synchronous API for high priority Postings.
    

To create isolation between different payment integrations using the Kafka Postings API, each client has:

-   A unique `client_id`
    
-   A mapping to one or more non-unique `response_topic`s where response messages are published
    

Each PostingsAPIClient can publish Kafka requests to a *high priority* or *low priority* topic:

-   High priority: `vault.core.postings.requests.v1` for latency sensitive requests, such as card authorisations
    
-   Low priority: `vault.core.postings.requests.low_priority.v1` for latency insensitive requests, such as settlement batches
    

chat\_bubble

To use the `vault.core.postings.requests.low_priority.v1` topic, a `PostingsAPIClient` must have a `response_topic_low_priority` set. Any requests placed on `vault.core.postings.requests.low_priority.v1` by a payment integration specifying a `PostingsAPIClient` ID with no `response_topic_low_priority` set will be DLQ’d.

#### [](#why_high_and_low_priority_kafka_topics_are_used "Copy link to heading")Why high and low priority Kafka topics are used

Scheme integrations can send a large number of settlements at once into the Postings API request queue. This volume would interfere with the processing of any high priority requests (such as card outbound authorisations) that could come in around the same time. To avoid this from happening, we have separated routing to provide dedicated priority request and response topics.

chat\_bubble

Routing is not dynamic - it just ensures that requests are processed by different processors to avoid high priority messages being stuck behind low priority ones.

#### [](#isolation_of_client_resources "Copy link to heading")Isolation of client resources

The Postings API gives a namespace to all resources created by a `PostingsAPIClient`, using that client’s `id` field. This allows payment integrations to ignore the fact that other payment integrations are also using the Postings API.

#### [](#example_use_of_high_and_low_priority_kafka_topics "Copy link to heading")Example use of high and low priority Kafka topics

An example bank is developing a domestic payment integration for a card scheme called ImaginaryScheme. The scheme will make use of a simple request/response pattern - whenever a cardholder makes a payment, the scheme publishes an outbound authorisation to the integration which must respond within one second. Once a day, the scheme submits a batch of settlements or releases for these authorisations which carry no strict timelines. To integrate with the Postings API, the bank creates a PostingsAPIClient resource:

-   *High priority routing*: When the integration receives an authorisation request from the scheme, it publishes a `CreatePostingInstructionBatchRequest` to the `vault.core.postings.requests.v1` high priority request topic, setting the `client_id` field to "imaginary\_scheme". The request is then picked up by the Postings API, which retrieves the relevant PostingsAPIClient resource using the request’s `client_id` field. It then publishes the response to the retrieved PostingsAPIClient’s `response_topic`.
    
-   *Low priority routing*: When the integration receives the daily batch of settlements or releases, it sends all of the resultant `CreatePostingInstructionBatchRequest`s to the `vault.core.postings.requests.low_priority.v1` low priority request topic, again setting the `client_id` field to "imaginary\_scheme". The requests are then picked up by the Postings API, which retrieves the relevant PostingsAPIClient resource using the requests' `client_id` field. It then publishes the responses to the retrieved PostingsAPIClient’s `response_topic_low_priority`.
    

### [](#using_the_asynchronous_api "Copy link to heading")Using the asynchronous API

chat\_bubble

-   Clients of the asynchronous API must have access to Vault Core’s Kafka brokers in order to access the request topics.
    
-   From Vault Core 5.4 onwards, you can use the `POST /v1/posting-instruction-batches` for direct and immediate responses to high priority Posting requests. For more information see [Posting instruction batches](/vault-core/5-8/EN/api/core_api#posting_instruction_batches).
    

All requests must be submitted to the request topic. Vault Core publishes at least one response per request.

If Vault Core is unable to provide a response because the message is malformed or the client ID is missing or not registered, the request is forwarded to the Dead Letter Queue (DLQ).

Requests may be rejected if the relevant accounts or customers do not exist, have had restrictions placed on them (see the [Restriction](/vault-core/5-8/EN/api/core_api#restrictions) resource description for more information), or if the relevant Smart Contract rejects it. After a request is accepted the Smart Contract executes a follow-up action. See the [Pre-Posting](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_posting_hook) and [Post-Posting](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_posting_hook) hook sections of the Smart Contract reference for details.

chat\_bubble

For valid (well-formed) requests that are rejected, responses are streamed out on the relevant response topics rather than the DLQ.

*Request topic:* `vault.core.postings.requests.v1`

*Request message:* `CreatePostingInstructionBatchRequest` (see the [Request](/vault-core/5-8/EN/api/postings_api#request_and_response_examples_2) example)

*Shard Key:* Set this key in the `CreatePostingInstructionBatchRequest` message. It is used as a best-effort lock to prevent `CreatePostingInstructionBatchRequest` messages with the same `shard_key` from racing each other, reducing the number of retries and overall request latency. If this is not set, Vault Core will generally select the first target Account ID from the first instruction within the `PostingInstructionBatch` to use as the `shard_key`, which may be suboptimal for your use case if you frequently have `PostingInstructionBatch` objects that target multiple customer accounts.

*Message Key (Partition Key):* Set this key on each individual message when producing to Kafka. It guarantees that `CreatePostingInstructionBatchRequest` messages sharing the same Message Key are routed to the exact same partition and processed sequentially. This prevents requests from racing each other, significantly reducing retries and overall request latency. We recommend setting the Message Key to the target Account ID or Plan ID. This allows the Ledger to apply localised flow control, ensuring it can process high volumes of requests for a specific account as fast as possible without compromising the performance of other accounts.

**Expand to see examples of setting the Message Key**

Example in kcat - use the `-K` flag to specify a delimiter (like a colon `:`) that separates the Message Key from the payload:

Example in Python:

We advise using the following keys to minimise the chance of race conditions in Vault Core:

 
| Key | Advised use |
| --- | --- |
| 
`account_id` or `payment_device_token`

 | 

When the posting instruction batch affects an unsupervised customer account.

 |
| 

`plan_id`

 | 

When the posting instruction batch affects a supervised account.

 |

chat\_bubble

Where possible, set the Shard Key (in the `CreatePostingInstructionBatchRequest` message) and Kafka Message Key (Partition Key) to the target Account ID.

*Response message*: `PostingInstructionBatch`. This is published to the topic that has been mapped to the `client_id` as specified in the request.

*DLQ:* `vault.core.postings.requests.dlq.v1`. Messages in this queue are of type `CreatePostingInstructionBatchRequest`.

*Time To Live:* You can add an optional `time_to_live` timestamp on a `CreatePostingInstructionBatchRequest` object. We recommend setting this on all requests. For more information, see [Setting Time To Live](/vault-core/5-8/EN/api/postings_api#setting_time_to_live).

#### [](#request_and_response_examples_2 "Copy link to heading")Request and response examples

Typical example Timestamp override example

The following example Posting Instruction Batch request includes a single outbound hard settlement Posting Instruction, sent on the 10th December 2024:

Example response

The following example Posting Instruction Batch request includes a single future-dated inbound hard settlement Posting Instruction, sent on the 10th December 2024, but set to be valued (and booked) in two days' time, crediting the customer’s account on the 12th of December 2024.

info

-   For optimal system performance, Thought Machine recommends future-dating no more than one percent of your total Postings, and spreading them relatively evenly over a 90 day future period. If the expected throughput or concentration of future-dated Postings is higher than this, contact your Thought Machine representative.
    
-   Future-dated Postings are not compatible with CLv3 Smart Contracts.
    

Example response

chat\_bubble

See the Core API’s [CreatePostingInstructionBatchRequest](/vault-core/5-8/EN/api/core_api#createpostinginstructionbatchrequest) for details about the posting instruction batch object’s parameters.

#### [](#event_streams_2 "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Posting Instruction Batch has been created.\*

 | 

[PostingEvent](/vault-core/5-8/EN/api/core_api#posting_events)(PostingInstructionBatchCreatedEvent)

 | 

`vault.api.v1.postings.posting_instruction_batch.created`

 |
| 

The Posting Instruction Batch has been wrapped with additional End of Day metadata. Applies if you created a Calendar resource and specified it as the input calendar for the `EnrichedPostingInstructionBatchEvent` Kafka stream.

 | 

[PostingEvent](/vault-core/5-8/EN/api/core_api#posting_events)(EnrichedPostingInstructionBatchEvent)

 | 

`vault.core_api.v1.postings.enriched_posting_instruction_batch.events`

 |
| 

The Account balance has been updated (unless *all* Posting Instructions in this request are future-dated).\*\*

Note: Depending on the Account’s permitted denominations, the Smart Contract’s declared AddressDetails, and the BalanceDimensions affected by any Postings in your activation hook you may get multiple AccountBalanceEvent events.





 | 

[BalanceEvent](/vault-core/5-8/EN/api/core_api#balance_events)(AccountBalanceEvent)

 | 

`vault.core_api.v1.balances.account_balance.events`

 |

\*Vault Core 5.3 introduced the `balances` field to the `vault.api.v1.postings.posting_instruction_batch.created topic`, meaning that integrations can use this to retrieve balances (instead of using `vault.core_api.v1.balances.account_balance.events`)

\*\*For transfer Posting Instruction types:

-   Two \`AccountBalanceEvent\`s are triggered if two different Customer Accounts are affected (regardless of whether the funds were moved between accounts belonging to the same or different customers)
    
-   No \`AccountBalanceEvent\`s are triggered if two Internal Accounts are affected
    

info

For accepted future-dated Posting Instructions, an `AccountBalanceEvent` is triggered only when the `value_timestamp` is reached.

### [](#setting_time_to_live "Copy link to heading")Setting Time To Live

It is recommended that you use the `time_to_live` field to set a Time To Live (TTL) value in all `CreatePostingInstructionBatchRequest` messages. If your overall asynchronous journey has a time bound SLA, then set this to a value within your SLA limits.

If the Ledger attempts to process a request with a TTL in the past, it will not process the `PostingInstructionBatch` and will instead send a `POSTING_INSTRUCTION_BATCH_ERROR_TYPE_TTL_EXPIRED` error response on the relevant response topic.

If you receive a TLL expired error, you can then decide whether to idempotently retry the request (using the same `request_id`) or abandon the request. It is not guaranteed that the TTL expired errors are always returned in line with the TTL itself.

If the TTL has passed and you have not received a response on the relevant response topic, you may want to retry depending on your upstream assumptions.

info

-   You should set a TTL on all `CreatePostingInstructionBatchRequest` messages for which you have an SLA.
    
-   It is recommended that you also set a TTL for messages without a strict SLA in order to avoid potential head-of-line blocking.
    
-   Specifying a TTL value does not guarantee that the PostingInstructionBatch is published to the response topic before the timestamp has expired, or that a PostingInstructionBatch is committed to the Postings Ledger before the specified timestamp. It is possible for a PostingInstructionBatch that has been Accepted or Rejected to be published to the response topic after the TTL has expired.
    

## [](#posting_migration_api "Copy link to heading")Posting Migration API

### [](#overview "Copy link to heading")Overview

error

The guidance within this section of the Vault Portal contains API specifications for the Posting Migration API, including example messages covering both requests / streamed events.

Other content is available in the wider Vault Portal covering other migration-related topics, which you should read in conjunction with the content here.

Other API specifications (inc. example messages / requests):

-   [Data Loader API specifications](/vault-core/5-8/EN/api/data_loader_api)
    

Migration API functional behaviour (inc. message lifecycle, error handling, etc.):

-   [Using Vault Core’s migration APIs](/vault-core/5-8/EN/environment_and_installation/migrating_to_vault)
    

How to deliver a successful migration programme (part of the Vault Core Delivery Framework), including migration strategies.

-   [Vault Core Delivery Framework - Migration Workstream](/delivery-framework/latest/EN/delivery_workstream/migration)
    

The Posting Migration API is a dedicated request topic that on the Posting API is designed for migrating Postings from another banking platform into Vault Core (we refer to it as its own 'API' for simplicity in the documentation).

It is complemented by the [Data Loader API](/vault-core/5-8/EN/api/data_loader_api#streaming_api), which is Vault Core’s strategic solution for migrating existing back-book data to Vault Core.

*Request topic:* `vault.migrations.postings.requests`

*Request message:* Similar format as the BAU CreatePostingInstructionBatchRequest; however the field-level validation differs and there are an additional set of migration fields that need to be included. For more information, see the [Vault Core Migrations - Data Dictionary](/vault-core/5-8/EN/resources/migrations-data-dictionary.zip). In addition to field-level validation changes there are also differences in how Postings migrated via this topic are validated and handled compared to the normal Postings API, and which PostingInstruction types are supported. For more information, see the read the [Migrating using the Posting Migration API](/vault-core/5-8/EN/environment_and_installation/migrating_to_vault/migrating_using_the_postings_migration_api) page.

#### [](#downloads "Copy link to heading")Downloads

##### [](#proto_files "Copy link to heading")Proto Files

info

The proto file for the Posting Migration API, which contains the unique Posting Migration API request and response message structures that differ to BAU, is located within the Core API (Streaming) proto zip.

If you are using the Protobuf message format, download the schemas you need to integrate with our Core Streaming API (including the Posting Migration API).

Download download

We guarantee API backwards compatibility at the proto level but not for code generated from those protos. Due to the varying output of available proto compilers, any code that is autogenerated from our proto files is not guaranteed to be backwards compatible with code that was autogenerated from proto files delivered with a previous version of Vault Core (including minor versions).

* * *

### [](#posting_migration_requests "Copy link to heading")Posting Migration Requests

Posting Migration API requests follow a similar message structure to BAU Postings, though with some additional fields that are necessary to support the migration use-case.

See the [Vault Core Migrations - Data Dictionary](/vault-core/5-8/EN/resources/migrations-data-dictionary.zip) for a detailed field by field overview of the Posting Migration API for each [Supported Posting Instruction Type](/vault-core/5-8/EN/environment_and_installation/migrating_to_vault/migrating_using_the_postings_migration_api#posting_migration_api_supported_posting_instruction_types), including variances to the BAU message structure where relevant.

*Topic*: `vault.migrations.postings.requests`

#### [](#json_examples "Copy link to heading")Json Example(s)

lightbulb

**Example CreatePostingInstructionBatchRequest message below**

CreatePostingInstructionBatchRequest

This request example is an Inbound Hard Settlement that is crediting an account £10.50. It is the first migrated posting for this account, hence `account_sequence_number` `1`.

This request is used as the source for other all 'Success' example events below.

* * *

### [](#posting_migration_responses "Copy link to heading")Posting Migration Responses

PIB Responses in the format `CreatePostingInstructionBatchResponse` are received for every Posting that is processed to a terminal status (this excludes Postings that are in the migration 'buffer' and awaiting earlier Postings in the sequence to be migrated before being processed).

Terminal statuses for migrated Postings are limited to either:

-   `ACCEPTED` - Success outcome indicating that the PIB was loaded to Vault Core.
    
-   `UNKNOWN` - Error outcome indicating that the PIB was not loaded to Vault Core.
    

The response topic is pinned for migration and will always be the below. This is unlike in BAU where the response topic is determined by the `client_id` chosen. Postings will not be streamed to the `client_id` topics when originating from the [Posting Migration API](/vault-core/5-8/EN/api/postings_api#posting_migration_api).

*Topic*: `vault.migrations.postings.responses`

chat\_bubble

The content and naming of the Response messages vary depending on request topic and method used:

-   Posting Migration API (Kafka) - message is called `CreatePostingInstructionBatchResponse` and contains just the `posting_instruction_batch` object.
    
-   BAU Posting API (Kafka) - message is called `PostingInstructionBatch` and contains just the `posting_instruction_batch` object.
    
-   BAU Posting API (REST) - message is called `CreatePostingInstructionBatchResponse` and contains both the `posting_instruction_batch` and `balances` objects.
    

#### [](#json_examples_2 "Copy link to heading")Json Example(s)

lightbulb

**Example Posting Migration Response events below**

ACCEPTED UNKNOWN (error)

The message below errored because the `request_id` had been reused for a previously ACCEPTED PIB.

The details of why a PIB errored will be captured either in the `violations` objects (if the error reason is one of a select number would otherwise REJECT the PIB in BAU), or in the `error` object.

* * *

### [](#posting_migration_postinginstructionbatchcreated_events "Copy link to heading")Posting Migration PostingInstructionBatchCreated Events

A PostingInstructionBatchCreated event is produced for every successfully migrated Posting.

This is a unified stream that includes all Postings regardless of request topic (migration, BAU high priority, BAU low priority, internal) or `client_id`.

*Topic*: `vault.api.v1.postings.posting_instruction_batch.created`

#### [](#json_examples_3 "Copy link to heading")Json Example(s)

lightbulb

**Example PostingInstructionBatchCreatedEvent events below**

ACCEPTED

* * *

### [](#posting_migration_dlq "Copy link to heading")Posting Migration DLQ

Where a message cannot be understood by Vault Core it will be placed onto the dedicated posting migration DLQ topic.

This DLQ topic is unique for migrated Postings and differs to the BAU DLQ topic.

For common DLQ reasons and error handling please see the more detailed [Postings Migration API](/vault-core/5-8/EN/environment_and_installation/migrating_to_vault/migrating_using_the_postings_migration_api) guidance.

*Topic*: `vault.migrations.postings.requests.dlq`

#### [](#json_examples_4 "Copy link to heading")Json Example(s)

lightbulb

**Example DLQ event below**

DLQ (excluding header) DLQ (including header)

Consuming from this topic without headers will simply present back the request message as-is and without any failure reason.

Consuming from this topic with headers included will, in certain instances, provide additional information as to the reason the message was placed on the DLQ.

In the example below the `value_timestamp` has been set to ‘`not_a_date`’ which is not a valid protobuf timestamp and resulted in the message being DLQ’ed.

* * *

### [](#account_balance_events "Copy link to heading")Account Balance Events

An `AccountBalanceEvent` is generated whenever a customer’s current balance changes and provides a view of the total state of the live balance. It shows the impact on all account balance addresses as a result of the `posting_instruction_batch`.

This is a unified stream that includes all account balances regardless of request topic (migration, BAU high priority, BAU low priority, internal) or `client_id`.

chat\_bubble

**There is no `BalanceEvent` streamed when using the Postings Migration API.**

*Topic*: `vault.core_api.v1.balances.account_balance.events`

#### [](#json_examples_5 "Copy link to heading")Json Example(s)

lightbulb

**Example AccountBalanceEvent message below**

AccountBalanceEvent

* * *

### [](#additional_example_requests "Copy link to heading")Additional example requests

Below are example CreatePostingInstructionBatchRequest messages that contain other PostingInstruction types.

lightbulb

**Example additional CreateResourceBatchRequest messages below**

Custom Instruction Inbound Hard Settlement Outbound Hard Settlement Inbound Authorisation Outbound Authorisation Authorisation Adjustment Release Settlement

## [](#error_handling "Copy link to heading")Error handling

### [](#postings_api_error_types "Copy link to heading")Postings API error types

*Postings API error types returned via the posting instruction batch’s `error.type` field*

 
| Error type | Description |
| --- | --- |
| 
POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_INVALID\_ARGUMENT

 | 

The request is malformed. The `error.message` field will list all of the invalid fields. You cannot retry on this error and it indicates that an integration contains a bug.

 |
| 

POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_INTERNAL\_ERROR

 | 

Something unexpected went wrong whilst processing the request. Clients can retry on this error.

 |
| 

POSTING\_INSTRUCTION\_BATCH\_ERROR\_TYPE\_TTL\_EXPIRED

 | 

A time to live expiry error occured because the requested `time_to_live` timestamp has expired. You cannot retry on this error without updating the TTL.

 |

### [](#checking_errors "Copy link to heading")Checking errors

If the processor receives an invalid posting instruction batch request (e.g. a request that it cannot parse or that does not specify a valid client ID), the request will be published to the Postings Processor’s Dead Letter Queue (DLQ) topic. If a posting instruction batch errors during processing, the batch will still be streamed on the response topic appropriate to the client ID. When the Postings Processor logs an error processing a posting instruction batch, the relevant client ID will also be logged. The response topic can then be checked for information about the error.

## [](#postings_api_dlqs "Copy link to heading")Postings API DLQs

### [](#postings_processor_dlqs "Copy link to heading")Postings Processor DLQs

#### [](#dlq_name_vault_core_postings_requests_dlq_v1 "Copy link to heading")DLQ name: vault.core.postings.requests.dlq.v1

##### [](#what_message_has_been_sent_to_the_dlq "Copy link to heading")What message has been sent to the DLQ?

[CreatePostingInstructionBatchRequest](/vault-core/5-8/EN/api/core_api#createpostinginstructionbatchrequest).

chat\_bubble

Unlike other error messages, where the DLQ message contains the error in its message body, this error message appears in the Kafka headers of the DLQ message.

##### [](#what_topic_was_the_message_originally_consumed_from "Copy link to heading")What topic was the message originally consumed from?

One of:

-   `vault.core.postings.requests.v1`
    
-   `vault.core.postings.requests.low_priority.v1`
    

##### [](#what_failed "Copy link to heading")What failed?

Vault Core publishes a message to the DLQ if there was a problem determining which response topic to stream the response to.

##### [](#what_is_the_impact "Copy link to heading")What is the impact?

Vault Core does not process the `PostingInstructionBatch` resource and does not apply the requested instructions to the Postings Ledger.

##### [](#possible_failure_reasons_and_recoveries "Copy link to heading")Possible failure reasons and recoveries

###### [](#scenario_one "Copy link to heading")Scenario one:

*Failure:* The request does not contain the `PostingInstructionBatch`.

*Error message:* `PostingInstructionBatch is empty`

*Recovery Path:* Create a new request and ensure that you add the Posting Instruction Batch that needs processing to the `CreatePostingInstructionBatchRequest` object.

###### [](#scenario_two "Copy link to heading")Scenario two:

*Failure:* The `client_id` field in the `PostingInstructionBatch` is invalid. This could be because it is either empty or you have not registered the specified `client_id` with the Postings API.

*Error message:* `PostingInstructionBatch specifies a non-registered ClientID=[<client_id>]`

*Recovery Path:* Create a new request, ensuring that you have registered the specified `client_id` with the Postings API using the [/v1/postings-api-clients](/vault-core/5-8/EN/api/core_api#postingsapiclient) endpoint.