---
tags: [reference, classes, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# CLv4 Classes Reference

This page provides a categorized reference for the primary classes available in Contracts Language API 4.0.

## Posting Instructions

These classes represent the types of money movements and their constituent parts.

- `Posting`: The lowest-level representation of a single credit or debit.
- `ClientTransaction`: The aggregate state of an ongoing transaction.
- `PostingInstructionBatch`: A read-only representation of incoming instructions.
- `PostingInstructionsDirective`: A hook return object used to instruct new postings.
- `CustomInstruction`: Explicitly specifies account addresses and phases.
- `Transfer`: Moves money between accounts on their default addresses.
- `InboundAuthorisation` / `OutboundAuthorisation`: Requests to ring-fence funds (Pending phase).
- `AuthorisationAdjustment`: Adjusts an existing authorisation amount.
- `Settlement`: Finalises an authorisation (moves funds to Committed phase).
- `Release`: Cancels an authorisation (removes from Pending phase).
- `InboundHardSettlement` / `OutboundHardSettlement`: Immediate, atomic movements.

## Parameter Shapes & Constraints

Used in `parameters` metadata to define the expected structure of template and instance parameters.

- `NumberShape`, `StringShape`, `DateShape`, `DenominationShape`, `AccountIdShape`
- `OptionalShape`, `OptionalValue`
- `UnionShape`, `UnionItem`, `UnionItemValue`
- `AccountConstraint`, `StringConstraint`

## Data Fetchers

Used in `@fetch_account_data` to declare upfront data retrieval requirements.

- `BalancesObservationFetcher`: Retrieves balances at a specific point in time.
- `BalancesIntervalFetcher`: Retrieves balance changes over a continuous period.
- `BalancesDiscreteIntervalFetcher`: Retrieves balance observations at discrete intervals (e.g., end of every month).
- `PostingsIntervalFetcher`: Retrieves discrete posting instructions over a period.

## Hook Arguments & Results

Every hook accepts a specific `*HookArguments` class and returns a specific `*HookResult` class.

- `ActivationHookArguments` / `ActivationHookResult`
- `PrePostingHookArguments` / `PrePostingHookResult`
- `PostPostingHookArguments` / `PostPostingHookResult`
- `ScheduledEventHookArguments` / `ScheduledEventHookResult`
- *(and similarly for all 13 Smart Contract hooks and 5 Supervisor hooks)*

## Directives

Directives are returned inside Hook Results to command Vault to perform an action.

- `PostingInstructionsDirective`: Instructs new money movements.
- `AccountNotificationDirective`: Instructs the publication of a notification.
- `UpdateAccountEventTypeDirective`: Instructs an update to a specific account schedule.
- `UpdatePlanEventTypeDirective`: Instructs an update to a specific plan schedule.
- `AmendScheduleDirective`: Modifies schedule behavior.

## Balances & Financial Primitives

- `Balance`: A structure representing `(credit, debit, net)`.
- `BalanceDefaultDict`: A dictionary mapping `(Address, Asset, Denomination, Phase)` tuples to `Balance` objects.
- `BalanceTimeseries`: A timeseries of balances over time.

## Scheduling

- `ScheduledEvent`: Returned in `activation_hook` to define the start time and expression of a schedule.
- `ScheduleExpression`: Defines the cron-like frequency of a schedule.
- `ScheduleSkip`: Returned in a schedule hook to skip the current execution or skip until a specific time.

---

> **See also**:
> - [[concept-clv4-posting-instructions]] for the practical application of posting classes.
> - [[concept-sc-hooks]] for how `*HookArguments` and `*HookResult` are used.
