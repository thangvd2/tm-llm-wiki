---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/manualdecisions"
title: "Manual Decisions"
scraped_at: "2026-06-17T15:47:47.923Z"
images: 0
---

# Manual Decisions

`flows_api.manualdecisions` module

Manual Decisions

## [](#ManualDecision "Copy link to heading")ManualDecision

ManualDecision holds the request and response for a ManualDecision.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`display_name`

 | 

`str`

 | 

The top-level display name for the manual decision. Optional.

 |
| 

`description`

 | 

`str`

 | 

The top-level description for the manual decision. Optional.

 |
| 

`decisions`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Decision](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision)]`

 | 

The exhaustive list of decisions resolved within the Flow for the Instruction under  
processing.

 |

## [](#Decision "Copy link to heading")Decision

Decision is a decision to be made within a Flow.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The ID of the decision. Required. Must be unique within the context of the parent Flow.

 |
| 

`display_name`

 | 

`str`

 | 

The human-readable name for the decision. Required.

 |
| 

`description`

 | 

`str`

 | 

The description for the decision. Optional.

 |
| 

`inputs`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[DecisionInput](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInput)]`

 | 

A list of inputs to be provided when submitting the decision. Whilst optional, each provided  
input is required.

 |

## [](#DecisionInput "Copy link to heading")DecisionInput

DecisionInput is an input required when submitting a decision.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The ID for the DecisionInput. Required. Must be unique within the context of the decision.

 |
| 

`display_name`

 | 

`str`

 | 

The human-readable name for the DecisionInput. Required.

 |
| 

`description`

 | 

`str`

 | 

The description for the DecisionInput. Optional.

 |
| 

`initial_value`

 | 

`str`

 | 

The initial value to display for the DecisionInput. Optional.

 |
| 

`type`

 | 

`[DecisionInputType](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInputType)`

 | 

The type of the DecisionInput. Required.

 |
| 

`options`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[DecisionInputOption](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInputOption)]`

 | 

A list of options for the DecisionInput value, for suggestions and/or validation. Optional.

 |
| 

`constraints`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[DecisionInputConstraint](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInputConstraint)]`

 | 

The constraints on the input type and value validity. An empty list indicates the absence of  
input validation.

 |

## [](#DecisionInputOption "Copy link to heading")DecisionInputOption

DecisionInputOption is an option for a DecisionInput value if one is required.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`str`

 | 

The value for the DecisionInput option. Required. Must be unique within the context of  
the DecisionInput.

 |
| 

`display_name`

 | 

`str`

 | 

The human-readable name for the DecisionInput. Required.

 |
| 

`description`

 | 

`str`

 | 

The description for the DecisionInput. Optional.

 |

## [](#DecisionInputConstraint "Copy link to heading")DecisionInputConstraint

DecisionInputConstraint is a constraint on the input type and value validity.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`string_constraint`

 | 

`[flows_api.constraints.StringConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#StringConstraint)`

 | 

Constraints on a string value.

 |
| 

`decimal_constraint`

 | 

`[flows_api.constraints.DecimalConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#DecimalConstraint)`

 | 

Constraints on an arbitrary precision number value.

 |
| 

`string_list_constraint`

 | 

`[flows_api.constraints.StringListConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#StringListConstraint)`

 | 

Constraints on a string list value.

 |
| 

`date_time_constraint`

 | 

`[flows_api.constraints.DateTimeConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#DateTimeConstraint)`

 | 

Constraints on a date-time value.

 |
| 

`enumeration_constraint`

 | 

`[flows_api.constraints.EnumerationConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#EnumerationConstraint)`

 | 

Constraints on an enumeration value.

 |
| 

`reason_code_constraint`

 | 

`[flows_api.constraints.ReasonCodeConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#ReasonCodeConstraint)`

 | 

Constraint on a reason code value.

 |

## [](#DecisionResult "Copy link to heading")DecisionResult

DecisionResult is the result of the manual decision.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`decision_id`

 | 

`str`

 | 

The ID of the chosen decision.

 |
| 

`inputs`

 | 

`dict`

 | 

The inputs provided when the decision was made, if any were required.

 |
| 

`user_id`

 | 

`str`

 | 

The ID of the user who made the decision.

 |
| 

`decision_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

The time at which the decision was made. Output only.

 |

## [](#DecisionInputType "Copy link to heading")DecisionInputType

DecisionInputType is the type of a DecisionInput.

Enum values  
| Name | Description |
| --- | --- |
| 
`DECISION_INPUT_TYPE_UNKNOWN`

 | 

Unknown

 |
| 

`DECISION_INPUT_TYPE_STRING`

 | 

The DecisionInput is a string input.

 |
| 

`DECISION_INPUT_TYPE_STRING_LIST`

 | 

The DecisionInput is a string list input.

 |
| 

`DECISION_INPUT_TYPE_DECIMAL`

 | 

The DecisionInput is a Decimal input.

 |
| 

`DECISION_INPUT_TYPE_BOOLEAN`

 | 

The DecisionInput is a boolean input.

 |
| 

`DECISION_INPUT_TYPE_DATE_TIME`

 | 

The DecisionInput is a datetime input.

 |
| 

`DECISION_INPUT_TYPE_REASON_CODE`

 | 

The DecisionInput is a reason code input.

 |