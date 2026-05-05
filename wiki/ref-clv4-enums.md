---
tags: [reference, enums, clv4]
products: [vault-core, smart-contracts]
sources: [raw/smart-contracts-clv4/]
last_updated: 2026-05-06
---

# CLv4 Enums Reference

This page provides a quick reference for the Enumerations available in Contracts Language API 4.0. 

| Enum Name | Values | Description |
| :--- | :--- | :--- |
| **`AdjustmentStrategy`** | `SCHEDULE_TRIGGERED` | Strategy for Adjustments process. Requires `adjustment_point = True` in metadata. |
| **`DateFailover`** | `FIRST_VALID_DAY_AFTER`<br>`FIRST_VALID_DAY_BEFORE` | Failover strategy for missing days in a discrete interval fetcher. |
| **`DateTimePrecision`** | `DAY`, `MINUTE` | Precision of a DateTime parameter value. |
| **`DateTimeView`** | `BOOKING_DATETIME`<br>`VALUE_DATETIME` | Determines which timestamp to use in Balance Fetchers. |
| **`DefinedDateTime`** | `EFFECTIVE_DATETIME`<br>`INTERVAL_START`<br>`LIVE` | Datetime resolutions for Observation and Interval Fetchers. `LIVE` maps to `UTC NOW()`. |
| **`HookName`** | `ACTIVATION_HOOK`<br>`ATTRIBUTE_HOOK`<br>`CONVERSION_HOOK`<br>`DEACTIVATION_HOOK`<br>`DERIVED_PARAMETERS_HOOK`<br>`POST_PARAMETER_CHANGE_ADJUSTMENT_HOOK`<br>`POST_PARAMETER_CHANGE_HOOK`<br>`POST_POSTING_ADJUSTMENT_HOOK`<br>`POST_POSTING_HOOK`<br>`PRE_PARAMETER_CHANGE_HOOK`<br>`PRE_POSTING_HOOK`<br>`SCHEDULED_EVENT_ADJUSTMENT_HOOK`<br>`SCHEDULED_EVENT_HOOK` | Describes the type of Smart Contract hook executing. |
| **`ParameterLevel`** | `GLOBAL`, `INSTANCE`, `TEMPLATE` | Parameter visibility levels. |
| **`ParameterUpdatePermission`** | `FIXED`<br>`OPS_EDITABLE`<br>`USER_EDITABLE`<br>`USER_EDITABLE_WITH_OPS_PERMISSION` | Specifies who can edit a parameter value. |
| **`Phase`** | `COMMITTED`, `PENDING_IN`, `PENDING_OUT` | Availability phase of a given Balance. |
| **`PostingInstructionRejectionReason`** | `ACCOUNT_STATUS_INVALID`<br>`AGAINST_TERMS_AND_CONDITIONS`<br>`CLIENT_CUSTOM_REASON`<br>`INSUFFICIENT_FUNDS`<br>`RESTRICTION_LIMIT_CREDITS`<br>`RESTRICTION_LIMIT_DEBITS`<br>`RESTRICTION_PREVENT_CREDITS`<br>`RESTRICTION_PREVENT_DEBITS`<br>`RESTRICTION_REVIEW_CREDITS`<br>`RESTRICTION_REVIEW_DEBITS`<br>`WRONG_DENOMINATION` | Rejection codes returned by Vault or the Contract during pre-posting. |
| **`PostingInstructionType`** | `AUTHORISATION`<br>`AUTHORISATION_ADJUSTMENT`<br>`CUSTOM_INSTRUCTION`<br>`HARD_SETTLEMENT`<br>`INBOUND_AUTHORISATION`<br>`INBOUND_HARD_SETTLEMENT`<br>`OUTBOUND_AUTHORISATION`<br>`OUTBOUND_HARD_SETTLEMENT`<br>`RELEASE`<br>`SETTLEMENT`<br>`TRANSFER` | The type of Posting Instruction being evaluated. |
| **`RejectionReason`** | `AGAINST_TNC`<br>`CLIENT_CUSTOM_REASON`<br>`INSUFFICIENT_FUNDS`<br>`WRONG_DENOMINATION` | Used as the `reason_code` in a hook's `Rejection` object. |
| **`ScheduleFailover`** | `FIRST_VALID_DAY_AFTER`<br>`FIRST_VALID_DAY_BEFORE` | Failover strategy for schedules landing on invalid days. |
| **`SupervisionExecutionMode`** | `INVOKED`, `OVERRIDE` | Mode of hook execution in a Supervisor Contract (`OVERRIDE` skips supervisee execution). |
| **`Timeline`** | `FUTURE`, `PRESENT` | Logical timeframe context. |
| **`Tside`** | `ASSET`, `LIABILITY` | The Treasury Side of an Account. Determines net balance sign. |

---

> **See also**:
> - [[concept-clv4-posting-instructions]] for details on `PostingInstructionType` and `Phase`.
> - [[entity-supervisor-contract]] for details on `SupervisionExecutionMode`.
