---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums"
title: "Enumerations"
scraped_at: "2026-06-16T16:36:50.625Z"
images: 0
---

# Enumerations

## [](#adjustmentstrategy "Copy link to heading")AdjustmentStrategy

`AdjustmentStrategy`

Specifies the adjustment strategy to use. `SCHEDULE_TRIGGERED` indicates that the adjustment process will be tied to one or more schedules. The adjustment process will run before a scheduled event is executed. If the `SCHEDULE_TRIGGERED` strategy is specified, then there must be at least one [SmartContractEventType](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) defined in the [event\_types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) metadata with `adjustment_point = True`.

### [](#values "Copy link to heading")Values

| name |
| --- |
| 
SCHEDULE\_TRIGGERED

 |

## [](#datefailover "Copy link to heading")DateFailover

`DateFailover`

Specifies the failover strategy for monthly sampling [Period](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#period) in the discrete interval fetcher when the calendar day falls outside the particular month. FIRST\_VALID\_DAY\_BEFORE (default) and FIRST\_VALID\_DAY\_AFTER indicate that the observation point is the first valid day before and after the missing day in the month, respectively.

### [](#values_2 "Copy link to heading")Values

| name |
| --- |
| 
FIRST\_VALID\_DAY\_AFTER

 |
| 

FIRST\_VALID\_DAY\_BEFORE

 |

## [](#datetimeprecision "Copy link to heading")DateTimePrecision

`DateTimePrecision`

Determines the precision of a DateTime parameter value.

### [](#values_3 "Copy link to heading")Values

| name |
| --- |
| 
DAY

 |
| 

MINUTE

 |

## [](#datetimeview "Copy link to heading")DateTimeView

`DateTimeView`

Used in a [BalancesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) or a [BalancesIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher) or a [BalancesDiscreteIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesdiscreteintervalfetcher) to specify whether to fetch based on value datetime or booking datetime.

### [](#values_4 "Copy link to heading")Values

| name |
| --- |
| 
BOOKING\_DATETIME

 |
| 

VALUE\_DATETIME

 |

## [](#defineddatetime "Copy link to heading")DefinedDateTime

`DefinedDateTime`

A datetime that is defined within Vault. This datetime can be used in the Observation and Interval Fetchers, which are included in the [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) of the Contracts Metadata.

-   `EFFECTIVE_DATETIME` maps to the `effective_datetime` of the hook that is using a Data Fetcher.
    
-   `INTERVAL_START` can be used as an origin of the [RelativeDateTime](./classes#relativedatetime) to define the start of an Interval Fetcher, as evaluated at the runtime of the hook.
    
-   `LIVE` maps to the actual runtime of the hook(`UTC NOW()`) that is using a Data Fetcher, which can be after the hook `effective_datetime`.
    

### [](#values_5 "Copy link to heading")Values

| name |
| --- |
| 
EFFECTIVE\_DATETIME

 |
| 

INTERVAL\_START

 |
| 

LIVE

 |

## [](#hookname "Copy link to heading")HookName

`HookName`

Describes the type of a Smart Contract hook.

### [](#values_6 "Copy link to heading")Values

| name |
| --- |
| 
ACTIVATION\_HOOK

 |
| 

ATTRIBUTE\_HOOK

 |
| 

CONVERSION\_HOOK

 |
| 

DEACTIVATION\_HOOK

 |
| 

DERIVED\_PARAMETERS\_HOOK

 |
| 

POST\_PARAMETER\_CHANGE\_ADJUSTMENT\_HOOK

 |
| 

POST\_PARAMETER\_CHANGE\_HOOK

 |
| 

POST\_POSTING\_ADJUSTMENT\_HOOK

 |
| 

POST\_POSTING\_HOOK

 |
| 

PRE\_PARAMETER\_CHANGE\_HOOK

 |
| 

PRE\_POSTING\_HOOK

 |
| 

SCHEDULED\_EVENT\_ADJUSTMENT\_HOOK

 |
| 

SCHEDULED\_EVENT\_HOOK

 |

## [](#parameterlevel "Copy link to heading")ParameterLevel

`ParameterLevel`

Different levels of visibility for Parameter objects.

### [](#values_7 "Copy link to heading")Values

| name |
| --- |
| 
GLOBAL

 |
| 

INSTANCE

 |
| 

TEMPLATE

 |

## [](#parameterupdatepermission "Copy link to heading")ParameterUpdatePermission

`ParameterUpdatePermission`

Specifies who can edit a parameter.

### [](#values_8 "Copy link to heading")Values

| name |
| --- |
| 
FIXED

 |
| 

OPS\_EDITABLE

 |
| 

USER\_EDITABLE

 |
| 

USER\_EDITABLE\_WITH\_OPS\_PERMISSION

 |

## [](#phase "Copy link to heading")Phase

`Phase`

The availability of a given Balance.

### [](#values_9 "Copy link to heading")Values

| name |
| --- |
| 
COMMITTED

 |
| 

PENDING\_IN

 |
| 

PENDING\_OUT

 |

## [](#postinginstructionrejectionreason "Copy link to heading")PostingInstructionRejectionReason

`PostingInstructionRejectionReason`

Describes reasons that a PostingInstruction can be rejected by Vault. The Restriction enums map to the RestrictionTypes on the Core API [Restriction Resource](/vault-core/5-8/EN/api/core_api#Restrictions). INSUFFICIENT\_FUNDS, AGAINST\_TERMS\_AND\_CONDITIONS, WRONG\_DENOMINATION and CLIENT\_CUSTOM\_REASON map to the corresponding Contracts [RejectionReason](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#rejectionreason) enum.

### [](#values_10 "Copy link to heading")Values

| name |
| --- |
| 
ACCOUNT\_STATUS\_INVALID

 |
| 

AGAINST\_TERMS\_AND\_CONDITIONS

 |
| 

CLIENT\_CUSTOM\_REASON

 |
| 

INSUFFICIENT\_FUNDS

 |
| 

RESTRICTION\_LIMIT\_CREDITS

 |
| 

RESTRICTION\_LIMIT\_DEBITS

 |
| 

RESTRICTION\_PREVENT\_CREDITS

 |
| 

RESTRICTION\_PREVENT\_DEBITS

 |
| 

RESTRICTION\_REVIEW\_CREDITS

 |
| 

RESTRICTION\_REVIEW\_DEBITS

 |
| 

WRONG\_DENOMINATION

 |

## [](#postinginstructiontype "Copy link to heading")PostingInstructionType

`PostingInstructionType`

The type of the PostingInstruction.

### [](#values_11 "Copy link to heading")Values

| name |
| --- |
| 
AUTHORISATION

 |
| 

AUTHORISATION\_ADJUSTMENT

 |
| 

CUSTOM\_INSTRUCTION

 |
| 

HARD\_SETTLEMENT

 |
| 

INBOUND\_AUTHORISATION

 |
| 

INBOUND\_HARD\_SETTLEMENT

 |
| 

OUTBOUND\_AUTHORISATION

 |
| 

OUTBOUND\_HARD\_SETTLEMENT

 |
| 

RELEASE

 |
| 

SETTLEMENT

 |
| 

TRANSFER

 |

## [](#rejectionreason "Copy link to heading")RejectionReason

`RejectionReason`

May optionally be used as the `reason_code` parameter on the [Rejection](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection) class.

### [](#values_12 "Copy link to heading")Values

| name |
| --- |
| 
AGAINST\_TNC

 |
| 

CLIENT\_CUSTOM\_REASON

 |
| 

INSUFFICIENT\_FUNDS

 |
| 

WRONG\_DENOMINATION

 |

## [](#schedulefailover "Copy link to heading")ScheduleFailover

`ScheduleFailover`

Specifies the failover strategy for this schedule.

### [](#values_13 "Copy link to heading")Values

| name |
| --- |
| 
FIRST\_VALID\_DAY\_AFTER

 |
| 

FIRST\_VALID\_DAY\_BEFORE

 |

## [](#supervisionexecutionmode "Copy link to heading")SupervisionExecutionMode

`SupervisionExecutionMode`

Determines the execution of a supervisee’s hook when triggered by an incoming request. If INVOKED, this executes the supervised account first, triggered by the incoming request, and provides the results to the supervisor. If OVERRIDE, this executes the supervisor hook instead of the supervisee’s hook.

### [](#values_14 "Copy link to heading")Values

| name |
| --- |
| 
INVOKED

 |
| 

OVERRIDE

 |

## [](#timeline "Copy link to heading")Timeline

`Timeline`

A point in time, on which events are taking place.

### [](#values_15 "Copy link to heading")Values

| name |
| --- |
| 
FUTURE

 |
| 

PRESENT

 |

## [](#tside "Copy link to heading")Tside

`Tside`

Account treasury side - determine account [Balance](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) net sign.

### [](#values_16 "Copy link to heading")Values

| name |
| --- |
| 
ASSET

 |
| 

LIABILITY

 |