---
tags: [reference, hooks, vault, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Hook Signatures & Vault Object Reference

## Hook Signatures

All Smart Contract hooks in CLv4 accept two strictly typed arguments: `vault` and `hook_arguments`. They must return a typed `HookResult` object (or `None` if they choose not to take any action).

```python
def activation_hook(vault: Vault, hook_arguments: ActivationHookArguments) -> Optional[ActivationHookResult]:
def attribute_hook(vault: Vault, hook_arguments: AttributeHookArguments) -> Optional[AttributeHookResult]:
def conversion_hook(vault: Vault, hook_arguments: ConversionHookArguments) -> Optional[ConversionHookResult]:
def deactivation_hook(vault: Vault, hook_arguments: DeactivationHookArguments) -> Optional[DeactivationHookResult]:
def derived_parameter_hook(vault: Vault, hook_arguments: DerivedParameterHookArguments) -> Optional[DerivedParameterHookResult]:

# Operational Hooks
def pre_posting_hook(vault: Vault, hook_arguments: PrePostingHookArguments) -> Optional[PrePostingHookResult]:
def post_posting_hook(vault: Vault, hook_arguments: PostPostingHookArguments) -> Optional[PostPostingHookResult]:

# Parameter Adjustments
def pre_parameter_change_hook(vault: Vault, hook_arguments: PreParameterChangeHookArguments) -> Optional[PreParameterChangeHookResult]:
def post_parameter_change_hook(vault: Vault, hook_arguments: PostParameterChangeHookArguments) -> Optional[PostParameterChangeHookResult]:

# Schedules
def scheduled_event_hook(vault: Vault, hook_arguments: ScheduledEventHookArguments) -> Optional[ScheduledEventHookResult]:

# Adjustments Timeline Hooks (These accept `adjusted_vault` and `snapshot_vault`)
def post_parameter_change_adjustment_hook(adjusted_vault: Vault, snapshot_vault: Vault, hook_arguments: PostParameterChangeAdjustmentHookArguments) -> Optional[PostParameterChangeAdjustmentHookResult]:
def post_posting_adjustment_hook(adjusted_vault: Vault, snapshot_vault: Vault, hook_arguments: PostPostingAdjustmentHookArguments) -> Optional[PostPostingAdjustmentHookResult]:
def scheduled_event_adjustment_hook(adjusted_vault: Vault, snapshot_vault: Vault, hook_arguments: ScheduledEventAdjustmentHookArguments) -> Optional[ScheduledEventAdjustmentHookResult]:
```

## Vault Object API (CLv4)

The `vault` object provided to the hooks gives access to the Contract's execution context and securely fetches account data.

### Properties
- `vault.account_id` (str): The ID of the account being executed.
- `vault.tside` (Tside): The treasury side (ASSET/LIABILITY) determining balance net sign.
- `vault.events_timezone` (ZoneInfo): The timezone in which this account operates.

### Core Methods

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `get_account_activation_datetime()` | `datetime` | When the account was activated. Replaces `get_account_creation_datetime`. |
| `get_hook_execution_id()` | `str` | A unique-enough ID for this hook execution (useful for idempotency). |
| `get_hook_name()` | `HookName` | Enum indicating which hook is currently executing. |
| `get_permitted_denominations()` | `List[str]` | The denominations allowed on the account. |

### Data Fetching Methods (Optimised)
*These require `@fetch_account_data` decorators with corresponding `fetcher_ids`.*

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `get_balances_observation(fetcher_id)` | `BalancesObservation` | Retrieves point-in-time balances. |
| `get_balances_timeseries(fetcher_id)` | `Mapping[BalanceCoordinate, BalanceTimeseries]` | Retrieves balance intervals. |
| `get_posting_instructions(fetcher_id)` | `List[PostingInstruction]` | Retrieves committed postings inside a window. |
| `get_client_transactions(fetcher_id)` | `Dict[str, ClientTransaction]` | Retrieves fully assembled transactions. |
| `get_parameters_observation(fetcher_id)` | `ParametersObservation` | Point-in-time Expected Parameters. |
| `get_flags_observation(fetcher_id)` | `FlagsObservation` | Point-in-time Flags. |
| `get_calendars_observation(fetcher_id)` | `CalendarsObservation` | Point-in-time active calendar events. |

### Legacy Fetching Methods
*These rely on the older `@requires` decorator.*

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `get_parameter_timeseries(name)` | `ParameterTimeseries` | Retrieves legacy template/instance parameters. |
| `get_flag_timeseries(flag)` | `FlagTimeseries` | Retrieves flag periods. |
| `get_calendar_events(calendar_ids)` | `CalendarEvents` | Retrieves chronologically ordered calendar events. |
| `get_last_execution_datetime(event_type)` | `Optional[datetime]` | Last successful run time of a schedule. |

---

> **See also**:
> - [[concept-sc-data-fetching]] for how to configure the `fetcher_id`.
> - [[concept-sc-hooks]] for the lifecycle contexts in which these methods run.
