---
tags: [concept, postings, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Posting Instructions (CLv4)

A **Posting Instruction** represents a change in state to a Client Transaction, or an instantaneous change in the distribution of amount and Phase on an Account.

In CLv4, the concept of a "Posting Batch" has been abstracted away from the Contract writer. Instead, Smart Contracts interact directly with specific Posting Instruction classes, making the API more type-safe and intuitive.

## Instruction Types

CLv4 strictly categorizes money movements into 9 distinct Python classes:

1. **`InboundAuthorisation` / `OutboundAuthorisation`**: Requests to authorize a money movement (placing funds into a pending phase).
2. **`AuthorisationAdjustment`**: Requests to modify a previously authorized amount.
3. **`Settlement`**: A non-refusable instruction to finalize an authorization (moving funds from pending to committed).
4. **`Release`**: A non-refusable instruction to cancel an outstanding authorization (releasing pending funds).
5. **`InboundHardSettlement` / `OutboundHardSettlement`**: Immediate money movements (equivalent to an Authorization + immediate Settlement).
6. **`Transfer`**: Moving money between two Vault accounts (addresses cannot be explicitly specified).
7. **`CustomInstruction`**: A highly flexible instruction to immediately move money on one or more Accounts with explicitly specified Account Addresses and Phases.

## The PostingInstructionsDirective

To instruct new postings from within a Smart Contract (e.g., in a `scheduled_event_hook` to charge a fee), the contract returns a **`PostingInstructionsDirective`**.
- This directive can contain up to **64 `CustomInstructions`**.
- Each `CustomInstruction` can contain up to **64 `Posting`** objects.
- It supports setting `booking_datetime` and `value_datetime`, as well as `non_blocking_rejection_reasons` to prevent a schedule failure if the ledger rejects the posting.

## Client Transactions

A **`ClientTransaction`** is the logical grouping of related posting instructions over time (e.g., Auth -> Auth Adjustment -> Settlement).
- It is an ordered list of posting instructions sorted by time.
- Vault enforces valid state transitions (e.g., you cannot Release an Authorization that hasn't happened yet).
- In CLv4, the `hook_arguments` expose the affected `client_transactions` directly, allowing easy calculation of the transaction's net effect without needing to manually aggregate the historical posting batch.

## Key Financial Concepts

### Phase
The **Phase** refers to the availability of a balance. It is an orthogonal dimension to the Account Address.
- Common phases include `PENDING_INCOMING`, `PENDING_OUTGOING`, and `COMMITTED`.
- Example: An outbound authorization places funds in `PENDING_OUTGOING` on the `DEFAULT` address.

### Credit vs Debit
Vault splits balances into debits and credits internally to support standard accounting principles. Inside a Smart Contract, a `Balance` object provides a `(credit, debit, net)` structure. The Contract is free to use the `net` value or strictly enforce credit/debit logic depending on the product design.

### Posting Instruction vs Posting
- A **Posting Instruction** is the *request* (e.g., `Settlement`).
- A **Posting** is the denormalized materialization of that request on the Vault ledger. A single Posting Instruction often translates into multiple Postings (e.g., debiting the customer, crediting the bank's internal suspense account).

---

> **See also**:
> - [[concept-sc-hooks]] for `pre_posting_hook` (accepting/rejecting) and `post_posting_hook` (reacting).
> - [[concept-clv3-to-clv4-migration]] for how posting classes replaced batches in CLv4.
