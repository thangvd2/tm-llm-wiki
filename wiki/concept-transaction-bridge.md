---
tags: [concept, postings, integrations, experience-layer]
products: [vault-core, experience-layer]
sources: [raw/smart-contracts-clv4/]
last_updated: 2026-05-06
---

# Contracts Transaction Bridge

The **Contracts Transaction Bridge** is a component that listens to the Postings API and automatically generates `Transaction` objects in the Vault Experience Layer whenever a Smart Contract instructs a qualifying posting.

This automation ensures that internal contract logic (e.g., charging a monthly fee, applying interest) seamlessly appears as a unified `Transaction` in the customer-facing Experience Layer, without requiring downstream systems to manually aggregate raw `PostingInstructionBatchCreatedEvent`s.

## How it Works

1. Vault Core emits a `PostingInstructionBatchCreatedEvent` to the Kafka topic: `vault.api.v1.postings.posting_instruction_batch.created`.
2. The Contracts Transaction Bridge consumes these messages.
3. It filters for batches where the `client_id` is strictly `"CoreContracts"` (meaning the posting was generated *by* a Smart Contract, not via an external API call).
4. If the postings within the batch meet the required criteria, the Bridge calls the Experience Layer's `POST /v1/transactions` endpoint to create the corresponding `Transaction`s.

## Criteria for Transaction Creation

For the Bridge to automatically create an Experience Layer `Transaction`, the batch and its underlying postings must satisfy **all** of the following conditions:

| Object | Condition |
| :--- | :--- |
| **Batch** | `client_id` MUST be `CoreContracts` |
| **Batch** | `status` MUST be `POSTING_INSTRUCTION_BATCH_STATUS_ACCEPTED` |
| **Posting** | `account_id` MUST belong to a **customer account** (Internal accounts are ignored) |
| **Posting** | `address` MUST be `DEFAULT` |
| **Posting** | `phase` MUST be `POSTING_PHASE_COMMITTED` (Pending phases are ignored) |
| **Posting** | Transaction aggregator entry MUST be either absent or set to `DEFAULT` |

## Dead Letter Queue (DLQ)

If the Bridge encounters a non-retryable error (or a rare validation error) while trying to create the Transaction in the Experience Layer, it will publish the event to the DLQ topic:
`vault.api.v1.postings.posting_instruction_batch.created.contracts_bridge.dlq`.

**Operational Requirement**: Systems should monitor this DLQ. Any messages ending up here indicate that a Smart Contract successfully moved money in Vault Core, but the customer cannot see the resulting Transaction in their app. These must be inspected and manually created via the Experience Layer API.

---

> **See also**:
> - [[concept-clv4-posting-instructions]] for how Smart Contracts generate these postings.
