---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/mandates"
title: "Mandates"
scraped_at: "2026-06-17T05:09:20.893Z"
images: 0
---

# Mandates

`flows_api.mandates` module

Mandates

## [](#Amounts "Copy link to heading")Amounts

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`first_collection_amount`

 | 

`Optional[[CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/mandates#CurrencyAndAmount)]`

 | 

The first collection amount on payment. Optional.

 |
| 

`recurring_collection_amount`

 | 

`Optional[[CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/mandates#CurrencyAndAmount)]`

 | 

The collection amount on payment. Optional.

 |
| 

`maximum_amount`

 | 

`Optional[[CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/mandates#CurrencyAndAmount)]`

 | 

The maximum amount allowed on payment. Optional.

 |

## [](#CurrencyAndAmount "Copy link to heading")CurrencyAndAmount

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`currency`

 | 

`Optional[str]`

 | 

The currency for the amount.

 |
| 

`amount`

 | 

`Optional[str]`

 | 

The amount.

 |

## [](#DatePeriod "Copy link to heading")DatePeriod

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`from_date`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

Start date of the range.

 |
| 

`to_date`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

End date of the range.

 |

## [](#Frequency "Copy link to heading")Frequency

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`Optional[[FrequencyType](/vault-payments/latest/EN/api/flows/flows_api/mandates#FrequencyType)]`

 | 

The type of frequency collections will follow.

 |
| 

`interval`

 | 

`Optional[str]`

 | 

The interval between collections, related to the type.

 |
| 

`pattern`

 | 

`Optional[str]`

 | 

The pattern referring to the point in time when collections will be made.

 |

## [](#FrequencyType "Copy link to heading")FrequencyType

FrequencyType specifies the frequency type of the schedule.

Enum values  
| Name | Description |
| --- | --- |
| 
`FREQUENCY_TYPE_UNKNOWN`

 | 

Unknown.

 |
| 

`FREQUENCY_TYPE_DAY`

 | 

Day frequency.

 |
| 

`FREQUENCY_TYPE_WEEK`

 | 

Week frequency.

 |
| 

`FREQUENCY_TYPE_MONTH`

 | 

Month frequency.

 |
| 

`FREQUENCY_TYPE_YEAR`

 | 

Year frequency.

 |

## [](#ManageMandatesResult "Copy link to heading")ManageMandatesResult

Result of ManageMandatesStep query

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`mandates`

 | 

`Optional[[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate)]]`

 | 

A list of Mandate objects matched by the query\_func. This list will be empty if there is no valid match. If an update\_func was provided in the ManageMandatesStep, the objects will reflect their state after the update has been applied.

 |

## [](#Mandate "Copy link to heading")Mandate

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`Optional[str]`

 | 

The identifier of the resource.

 |
| 

`scheme_mandate_id`

 | 

`Optional[str]`

 | 

The identifer of the mandate as used by both parties. Assigned by the initiating party.

 |
| 

`scheme_creditor_id`

 | 

`Optional[str]`

 | 

The identifier of the creditor used by the scheme.

 |
| 

`debtor_agent_id`

 | 

`Optional[str]`

 | 

The identifier of the debtor agent, e.g. BIC.

 |
| 

`create_timestamp`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The time that the resource was created. UTC, RFC3339 Format. Output only.

 |
| 

`update_timestamp`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The time that the resource was last updated. UTC, RFC3339 Format. Output only.

 |
| 

`status`

 | 

`Optional[[MandateStatus](/vault-payments/latest/EN/api/flows/flows_api/mandates#MandateStatus)]`

 | 

Mandate status.

 |
| 

`type`

 | 

`Optional[[MandateType](/vault-payments/latest/EN/api/flows/flows_api/mandates#MandateType)]`

 | 

Specifies the type of mandate, such as paper, electronic or scheme. Required.

 |
| 

`side`

 | 

`Optional[[MandateSide](/vault-payments/latest/EN/api/flows/flows_api/mandates#MandateSide)]`

 | 

Specifies if VP is holding the Mandate on behalf of the creditor or the debtor. Required.

 |
| 

`payment_instrument_id`

 | 

`Optional[str]`

 | 

The ID of the Payment Instrument belonging to the party which owns the Mandate. Required.

 |
| 

`sequence_type`

 | 

`Optional[[MandateSequenceType](/vault-payments/latest/EN/api/flows/flows_api/mandates#MandateSequenceType)]`

 | 

Identifies the underlying transaction sequence as either recurring or one-off. Required.

 |
| 

`service_level`

 | 

`Optional[str]`

 | 

Agreement under which or rules under which the mandate resides e.g. SEPA / NACHA. Optional.

 |
| 

`local_instrument_code`

 | 

`Optional[str]`

 | 

This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level. Optional.

 |
| 

`category_purpose`

 | 

`Optional[str]`

 | 

Specifies the high level purpose of the mandate based on a set of predefined categories.  
Optional.

 |
| 

`classification`

 | 

`Optional[str]`

 | 

Type of direct debit instruction.

 |
| 

`duration`

 | 

`Optional[[DatePeriod](/vault-payments/latest/EN/api/flows/flows_api/mandates#DatePeriod)]`

 | 

The duration of the mandate. When a mandate exceeds the end of its duration, its status will transition to EXPIRED. Optional.

 |
| 

`schedule`

 | 

`Optional[[Schedule](/vault-payments/latest/EN/api/flows/flows_api/mandates#Schedule)]`

 | 

The expected schedule of collections agreed under the mandate.

 |
| 

`amounts`

 | 

`Optional[[Amounts](/vault-payments/latest/EN/api/flows/flows_api/mandates#Amounts)]`

 | 

The mandate amounts. Optional.

 |
| 

`debtor_party_details`

 | 

`Optional[[PartyDetails](/vault-payments/latest/EN/api/flows/flows_api/mandates#PartyDetails)]`

 | 

The reference to debtor party details, including name, acc number, bank id etc. Required.

 |
| 

`creditor_party_details`

 | 

`Optional[[PartyDetails](/vault-payments/latest/EN/api/flows/flows_api/mandates#PartyDetails)]`

 | 

The reference to creditor party details, including name, acc number, bank id etc. Required.

 |
| 

`creditor_reference`

 | 

`Optional[str]`

 | 

The reference assigned by the creditor for internal usage.

 |
| 

`metadata`

 | 

`Optional[dict]`

 | 

Metadata related to the mandate.

 |

## [](#MandateSequenceType "Copy link to heading")MandateSequenceType

MandateSequenceType specifies the sequence type of the mandate.

Enum values  
| Name | Description |
| --- | --- |
| 
`MANDATE_SEQUENCE_TYPE_UNKNOWN`

 | 

Unknown.

 |
| 

`MANDATE_SEQUENCE_TYPE_ONEOFF`

 | 

One-off mandate.

 |
| 

`MANDATE_SEQUENCE_TYPE_RECURRING`

 | 

Recurring mandate.

 |

## [](#MandateSide "Copy link to heading")MandateSide

MandateSide specifies on whose behalf a Mandate is being held.

Enum values  
| Name | Description |
| --- | --- |
| 
`MANDATE_SIDE_UNKNOWN`

 | 

Unknown.

 |
| 

`MANDATE_SIDE_CREDIT`

 | 

The Mandate is held on behalf of the creditor.

 |
| 

`MANDATE_SIDE_DEBIT`

 | 

The Mandate is held on behalf of the debtor.

 |

## [](#MandateStatus "Copy link to heading")MandateStatus

MandateStatus is the status of the mandate.

Enum values  
| Name | Description |
| --- | --- |
| 
`MANDATE_STATUS_UNKNOWN`

 | 

Unknown.

 |
| 

`MANDATE_STATUS_PENDING`

 | 

Pending status.

 |
| 

`MANDATE_STATUS_ACTIVE`

 | 

Active status.

 |
| 

`MANDATE_STATUS_CANCELLED`

 | 

Cancelled status.

 |
| 

`MANDATE_STATUS_EXPIRED`

 | 

Expired status.

 |

## [](#MandateType "Copy link to heading")MandateType

MandateType specifies the type of the mandate.

Enum values  
| Name | Description |
| --- | --- |
| 
`MANDATE_TYPE_UNKNOWN`

 | 

Unknown.

 |
| 

`MANDATE_TYPE_PAPER`

 | 

Paper mandate.

 |
| 

`MANDATE_TYPE_ELECTRONIC`

 | 

Electronic mandate.

 |
| 

`MANDATE_TYPE_SCHEME`

 | 

Scheme mandate.

 |

## [](#MatchMandatesQuery "Copy link to heading")MatchMandatesQuery

Query returned by MatchMandates `query_func`

A MatchMandatesQuery must be returned from the `query_func` of a ManageMandatesStep. Any field in the instruction can be used to construct the query. The query will then match to the Mandates(s) with the provided `scheme_mandate_id` and `scheme_creditor_id`. Optionally the debtor’s `instrument_identifier` and `bank_identifier` routing information can be supplied if required by the scheme, this will change the behaviour of the `scheme_mandate_id` to match all Mandates which have a value which is a a prefix of the supplied value. Alternatively if the ID is already known the `mandate_id` can be provided to the query directly, which will guarantee at most 1 Mandate in the result. Mandates in all statuses will be matched.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`scheme_mandate_id`

 | 

`Optional[str]`

 | 

The ID of the mandate as used by the scheme.  
Must be set along with scheme\_creditor\_id, and optionally with debtor\_instrument\_identifier and debtor\_bank\_identifier.  
When debtor\_instrument\_identifier and debtor\_bank\_identifier are set, then Mandates whose scheme\_mandate\_id is a prefix of the input value will also be returned.

 |
| 

`scheme_creditor_id`

 | 

`Optional[str]`

 | 

The ID of the creditor as used by the scheme.  
Must be set along with scheme\_mandate\_id, and optionally with debtor\_instrument\_identifier and debtor\_bank\_identifier.

 |
| 

`debtor_instrument_identifier`

 | 

`Optional[str]`

 | 

The debtor’s instrument identifier to match against. e.g. CardID, Account Number, IBAN.  
Can optionally be set if scheme\_mandate\_id and scheme\_creditor\_id are set, and then must be set with debtor\_bank\_identifier.

 |
| 

`debtor_bank_identifier`

 | 

`Optional[str]`

 | 

The debtor’s bank identifier to match against. e.g. BIC.  
Can optionally be set if scheme\_mandate\_id and scheme\_creditor\_id are set, and then must be set with debtor\_instrument\_identifier.

 |
| 

`mandate_id`

 | 

`Optional[str]`

 | 

The Mandate ID to match against.  
Can only be set if scheme\_mandate\_id, scheme\_creditor\_id, debtor\_instrument\_identifier, and debtor\_bank\_identifier are empty.

 |

## [](#PartyDetails "Copy link to heading")PartyDetails

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`Optional[str]`

 | 

Name of the party.

 |
| 

`routing_information`

 | 

`Optional[RoutingInformation]`

 | 

The routing information of the party.  
If the party owns the Mandate, this will be populated from the Payment Instrument.

 |

## [](#Schedule "Copy link to heading")Schedule

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`calendar_id`

 | 

`Optional[str]`

 | 

The ID of the Calendar that this schedule follows.

 |
| 

`first_date`

 | 

`Optional[str]`

 | 

The date from which collections begin.

 |
| 

`final_date`

 | 

`Optional[str]`

 | 

The date on which the collections end.

 |
| 

`count`

 | 

`Optional[str]`

 | 

The number of collections to be made.

 |
| 

`frequency`

 | 

`Optional[[Frequency](/vault-payments/latest/EN/api/flows/flows_api/mandates#Frequency)]`

 | 

The frequency at which collections are made.

 |