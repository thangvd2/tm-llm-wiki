---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_transaction_bridge"
title: "Contracts Transaction Bridge"
scraped_at: "2026-04-20T18:21:04.263Z"
images: 0
---

# Contracts Transaction Bridge

## [](#overview_of_the_contracts_transactions_bridge "Copy link to heading")Overview of the Contracts Transactions Bridge

Some contracts in Vault will generate postings. These postings are emitted by the Postings API as `PostingInstructionBatchCreatedEvent`s. Provided your Vault instance uses the Experience Layer, then the Contracts Transaction Bridge will automatically create related `Transaction`s, if the contained `PostingInstructionBatch`es meet a set of defined criteria for the corresponding credit and/or debit.

These postings are emitted by the Postings API as `PostingInstructionBatchCreatedEvent`s.

The Contracts Bridge will automatically create `Transaction`s provided `PostingInstructionBatch`es meet a set of defined criteria for the corresponding credit and/or debit.

## [](#how_transactions_are_automatically_created "Copy link to heading")How Transactions are automatically created

`PostingInstructionBatchCreatedEvent`s are published by the `vault.api.v1.postings.posting_instruction_batch.created` Kafka response topic.

The Contracts Transaction Bridge consumes messages from `vault.api.v1.postings.posting_instruction_batch.created` and only processes `PostingInstructionBatch`es where the `client_id` is `“CoreContracts”`.

In the case of `PostingInstructionBatch`es that meet the defined [criteria](/vault-core/5-8/EN/reference/contracts/contracts_transaction_bridge#criteria_for_creation_of_transactions) the Contracts Transaction Bridge will call the Experience Layer’s Transaction service to create corresponding `Transaction`s for customer accounts.

`Transaction`s are then stored and are available for retrieval or update via the Experience Layer’s API.

## [](#criteria_for_creation_of_transactions "Copy link to heading")Criteria for creation of Transactions

 
| *Object* | *Must…* |
| --- | --- |
| 
`posting_instruction_batch`

 | 

Have a `client_id` of `CoreContracts`

 |
| 

`posting_instruction_batch`

 | 

Have a `status` of `POSTING_INSTRUCTION_BATCH_STATUS_ACCEPTED`

 |
| 

`posting`

 | 

Have an `account_id` that belongs to a customer account (not an internal account)

 |
| 

`posting`

 | 

Have an `address` of `DEFAULT`

 |
| 

`posting`

 | 

Have a `phase` of `POSTING_PHASE_COMMITTED`

 |
| 

`posting`

 | 

Have a transaction aggregator entry that is either not present or is `DEFAULT`

 |

### [](#examples "Copy link to heading")Examples

`*PostingInstructionBatch*`

`Transaction`

## [](#dlq_messages "Copy link to heading")DLQ messages

The Contracts Transaction Bridge will publish a `PostingInstructionBatchCreatedEvent` to the DLQ topic `vault.api.v1.postings.posting_instruction_batch.created.contracts_bridge.dlq` in the event of a:

-   Non-retryable error
    
-   Validation error (very unlikely due to validation prior to publishing to `vault.api.v1.postings.posting_instruction_batch.created`)
    

You should closely monitor the `vault.api.v1.postings.posting_instruction_batch.created.contracts_bridge.dlq`.

Any published message should be inspected and the corresponding `Transaction` should be manually created by calling the Experience Layer API’s `POST /v1/transactions` endpoint.