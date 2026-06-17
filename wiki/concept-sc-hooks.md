---
tags: [concept, hooks, clv4, architecture]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Smart Contract Hooks

"Hooks" are the standardized, stateless functions through which Vault communicates with a Smart Contract. They are invoked by Vault at fixed points in an Account's lifecycle.

In CLv4, the hook architecture was heavily modernized:
- **Return Values**: Hooks no longer instruct actions by calling `vault` methods. Instead, they return a specific `Result` class (e.g., `ActivationHookResult`) containing explicit directive classes (e.g., `PostingInstructionsDirective`).
- **Rejections**: Raising Python exceptions is forbidden. To reject an action, hooks return a `Rejection` object.
- **Empty Hooks**: Do not leave empty hooks in your contract. An empty hook still incurs execution overhead.

## The Hot Path

The "Hot Path" refers to the time-sensitive chain of events required to move money (e.g., a card swipe at a merchant). This is why posting logic is split into two hooks:
- `pre_posting_hook`: On the hot path. Must execute as fast as possible to accept or reject the posting.
- `post_posting_hook`: Off the hot path. Used to react to the accepted posting (e.g., charging a fee, rebalancing).

## Hook Lifecycle Categories

The 13 Smart Contract hooks can be categorized by their lifecycle phase:

### 1. Activation & Conversion
- **`activation_hook`**: Runs once before Account activation. Returns the schedule definitions.
- **`conversion_hook`**: Runs when an account is converted to a new Smart Contract version.
- **`deactivation_hook`**: Runs when the account is closed. Can reject closure if balances are not zero.

### 2. Operational (Money Movement)
- **`pre_posting_hook`**: Determines if proposed posting instructions should be accepted or rejected. (Hot Path)
- **`post_posting_hook`**: Reacts to committed postings.
- **`post_posting_adjustment_hook`**: Overrides BAU logic during the Vault Adjustments process.

### 3. Maintenance (Schedules)
- **`scheduled_event_hook`**: Triggered periodically by the Vault Scheduler (e.g., applying monthly interest).
- **`scheduled_event_adjustment_hook`**: Overrides BAU schedule logic during Adjustments.

### 4. Parameters & Attributes
- **`pre_parameter_change_hook`**: Validates and accepts/rejects changes to Account parameters.
- **`post_parameter_change_hook`**: Reacts to a committed parameter change.
- **`post_parameter_change_adjustment_hook`**: Overrides BAU logic during Adjustments.
- **`attribute_hook`**: Returns a calculated value for an Account Attribute (e.g., APR).
- **`derived_parameter_hook`**: *(Deprecated in favor of `attribute_hook`)* Calculates derived parameters.

## Supervisor Hooks

A Supervisor Contract only supports a subset of 5 hooks, enabling it to orchestrate complex cross-account logic:
1. `activation_hook` (Plan invoked)
2. `conversion_hook` (Plan invoked)
3. `pre_posting_hook` (Account invoked)
4. `post_posting_hook` (Account invoked)
5. `scheduled_event_hook` (Plan invoked)

---

> **See also**:
> - [[concept-sc-data-fetching]] for retrieving data securely within these hooks.
> - [[concept-clv3-to-clv4-migration]] for details on CLv3 hook renames and the removal of `execution_schedules`.
