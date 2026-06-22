---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/constraints"
title: "Constraints"
scraped_at: "2026-06-17T15:47:33.690Z"
images: 0
---

# Constraints

`flows_api.constraints` module

Constraints

## [](#Constraint "Copy link to heading")Constraint

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`boolean_constraint`

 | 

`[BooleanConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#BooleanConstraint)`

 | 

Value must be a boolean true/false.

 |
| 

`string_constraint`

 | 

`[StringConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#StringConstraint)`

 | 

Constraints on a string value.

 |
| 

`decimal_constraint`

 | 

`[DecimalConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#DecimalConstraint)`

 | 

Constraints on a number value.

 |
| 

`string_list_constraint`

 | 

`[StringListConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#StringListConstraint)`

 | 

Constraints on a string list value.

 |
| 

`date_time_constraint`

 | 

`[DateTimeConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#DateTimeConstraint)`

 | 

Constraints on a date-time value.

 |
| 

`json_constraint`

 | 

`[JSONConstraint](/vault-payments/latest/EN/api/flows/flows_api/constraints#JSONConstraint)`

 | 

Constraints on a JSON value.

 |

## [](#BooleanConstraint "Copy link to heading")BooleanConstraint

## [](#StringConstraint "Copy link to heading")StringConstraint

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_length`

 | 

`int`

 | 

The minimum length that the string can be. Must be non-negative.

 |
| 

`max_length`

 | 

`int`

 | 

The maximum length that the string can be. Must be non-negative. A zero value indicates  
that there is no maximum length for the string.

 |
| 

`pattern`

 | 

`str`

 | 

The regex pattern that the string must satisfy. An empty string indicates that there is no  
regex constraint for the value.

 |

## [](#DecimalConstraint "Copy link to heading")DecimalConstraint

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_value`

 | 

`str`

 | 

The minimum value (inclusive) that the number can be. An empty string indicates that  
there is no minimum value for the number.

 |
| 

`max_value`

 | 

`str`

 | 

The maximum value (inclusive) that the number can be. An empty string indicates that  
there is no maximum value for the number.

 |
| 

`precision`

 | 

`str`

 | 

The permitted number of decimal places that the number can have. Must be non-negative.  
An empty string indicates that there is no constraint on the number of decimal places.

 |

## [](#StringListConstraint "Copy link to heading")StringListConstraint

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`min_length`

 | 

`int`

 | 

The minimum length that the list can be. Must be non-negative.

 |
| 

`max_length`

 | 

`int`

 | 

The maximum length that the list can be. Must be non-negative. A zero value indicates  
that there is no maximum length for the list.

 |
| 

`pattern`

 | 

`str`

 | 

The regex pattern that the strings must satisfy. An empty string indicates that there is no  
regex constraint for the value.

 |

## [](#DateTimeConstraint "Copy link to heading")DateTimeConstraint

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`earliest`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

The earliest permitted date-time in UTC, up to YYYY-MM-DD HH:mm can be specified. Optional.  
Formatted as an RFC3339 timestamp.

 |
| 

`latest`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

The latest permitted date-time in UTC, up to YYYY-MM-DD HH:mm can be specified. Optional.  
Formatted as an RFC3339 timestamp.

 |

## [](#JSONConstraint "Copy link to heading")JSONConstraint

## [](#EnumerationConstraint "Copy link to heading")EnumerationConstraint

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`permitted_values`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

Values must specify one of the strings listed here, of which there must be at least  
one, and no value may be repeated.

 |
| 

`min_length`

 | 

`int`

 | 

The minimum number of values which can be chosen. Must be non-negative. Defaults to 1.

 |
| 

`max_length`

 | 

`int`

 | 

The maximum number of values which can be chosen. Must be non-negative. Defaults to 1.

 |

## [](#ReasonCodeConstraint "Copy link to heading")ReasonCodeConstraint

The constraint for a reason code. This is only used when defining constraints for a manual decision input.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`reason_code_set`

 | 

`[flows_api.reasoncodes.ReasonCodeSet](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)`

 | 

The reason code set to which the value belongs. Required.

 |
| 

`scheme_id`

 | 

`str`

 | 

The scheme to which the parent Flow belongs. An empty string indicates the value is  
constrained to the full reason code set.

 |