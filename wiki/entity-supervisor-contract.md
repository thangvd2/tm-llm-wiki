---
tags: [entity, supervisor, smart-contracts, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/reference/contracts/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Supervisor Contract

A **Supervisor Contract** is a special type of Smart Contract used to connect other Smart Contracts together. It allows for complex, cross-account financial logic, such as interest rate offsetting between a mortgage account and a savings account, or automated fund rebalancing. 

Just as a Smart Contract instantiates an *Account*, a Supervisor Contract instantiates a *Plan*. To be supervised, an Account must be associated (onboarded) to a Plan.

## Supervision Execution

Supervision intercepts the hook execution of the supervised Smart Contracts and routes it to the Supervisor Contract.

### Entry Points
A Supervisor Contract can be triggered in two ways depending on the hook:
1. **Via Plan**: The Supervisor is invoked directly on the Plan schedule/action (e.g., `activation_hook`, `conversion_hook`, `scheduled_event_hook`).
2. **Via Account**: An event targeting an individual supervised Account triggers the Supervisor (e.g., `pre_posting_hook`, `post_posting_hook`).

### Execution Modes
For hooks invoked via the Account, the metadata `SupervisionExecutionMode` dictates the order of execution:
- **UNSUPERVISED**: Only the Account's hook executes. The Supervisor is ignored.
- **INVOKED**: The Account's hook executes first, and its results are passed into the Supervisor's hook.
- **OVERRIDE**: Only the Supervisor's hook executes. The Account's hook is ignored.

### Supervisor Data Scope
To optimize performance, Supervisor Contracts must declare what historical data they need from their supervised Accounts using the `data_scope` requirement:
- **OWN**: Only Plan data is available. No supervisee data is fetched.
- **INVOKED**: Plan data + data from the specific Account(s) that triggered the hook.
- **ALL**: Plan data + data from *all* supervisee Accounts associated with the Plan.

## Supervisor Structure

Supervisor Contracts use the same Contracts Language API (CLv4) structure as standard Smart Contracts but with specific Supervisor Vault Objects and metadata requirements.

### Metadata
The Supervisor metadata differs slightly to define the supervision scope:
- `supervised_smart_contracts`: Defines the specific Smart Contract Version IDs that can be onboarded to this Plan.
- `event_types`: Defines the Supervisor's own scheduled events.

### Vault Object
The Supervisor's `vault` object provides access to the Plan's state:
- `vault.plan_id`: The ID of the currently executing Plan.
- `vault.supervisees`: A dictionary mapping Account IDs to their respective supervisee `Vault` objects, allowing the Supervisor to read balances or instruct postings on behalf of the underlying accounts.

## Flexible Supervision

Standard supervision strictly links a Supervisor to specific Smart Contract Version IDs. **Flexible Supervision** is an alternative mode that allows a Supervisor to supervise *any* Smart Contract without hardcoding Product Version IDs. 

- This is achieved by leaving `supervised_smart_contracts` empty.
- **Limitation**: Flexible supervision *only* supports the `scheduled_event_hook`. The `pre_posting_hook` and `post_posting_hook` cannot be supervised flexibly.

---

> **See also**:
> - [[entity-smart-contract]] for the standard Smart Contract component.
> - [[concept-sc-hooks]] for the hook lifecycles.
> - [[ref-clv4-hook-signatures]] for the full API reference of the Vault object and metadata fields.
