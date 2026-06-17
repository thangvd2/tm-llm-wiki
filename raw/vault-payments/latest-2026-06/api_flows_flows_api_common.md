---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/common"
title: "Common"
scraped_at: "2026-06-17T05:09:07.126Z"
images: 0
---

# Common

`flows_api.common` module

Various common and shared types between different parts of the ISO20022 message.

## [](#Address "Copy link to heading")Address

47.1.16.9.8 Address2

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`address_line_1`

 | 

`str`

 | 

First line of Address.

 |
| 

`address_line_2`

 | 

`str`

 | 

Second line of Address.

 |
| 

`street_name`

 | 

`str`

 | 

Address street name.

 |
| 

`building_number`

 | 

`str`

 | 

Address building number.

 |
| 

`postal_code`

 | 

`str`

 | 

Address postal code.

 |
| 

`town_name`

 | 

`str`

 | 

Address town name.

 |
| 

`country_sub_division_major`

 | 

`str`

 | 

Address country major sub-division.

 |
| 

`country_sub_division_minor`

 | 

`str`

 | 

Address country minor sub-division.

 |
| 

`country`

 | 

`str`

 | 

Address country.

 |

## [](#PostalAddress "Copy link to heading")PostalAddress

Object to hold details of the postal address of a party.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`address_details`

 | 

`Dict[str, str]`

 | 

A freeform container for the details of the postal address.

 |

## [](#Contact "Copy link to heading")Contact

Contact1 Contact person details.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`contact_details`

 | 

`Dict[str, str]`

 | 

A freeform container for the contact details of a person.

 |
| 

`mobile_phone_number`

 | 

`str`

 | 

Mobile phone number of contact.

 |
| 

`personal_email_address`

 | 

`str`

 | 

Personal email address of contact.

 |

## [](#CurrencyAndAmount "Copy link to heading")CurrencyAndAmount

A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Number of monetary units of the specified currency.

 |
| 

`currency`

 | 

`str`

 | 

Unit of currency.

 |

## [](#BatchManagementInformation "Copy link to heading")BatchManagementInformation

44.1.6.1 BatchManagementInformation1 Elements of identification of a batch management transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`collection_identification`

 | 

`str`

 | 

Identification of the collection to which the batch belongs.  
ISO 8583:2003 bit 69-2.

 |
| 

`batch_identification`

 | 

`str`

 | 

Identification of the batch to which the message belongs.  
ISO 8583:2003 bit 69-2.

 |
| 

`message_sequence_number`

 | 

`str`

 | 

Sequence number of the message inside the batch.  
ISO 8583:87/93 bit 71.  
ISO 8583:2003 bit 68-2.

 |
| 

`clearing_date`

 | 

`str`

 | 

Clearing date of the message inside the batch.

 |
| 

`clearing_cycle`

 | 

`str`

 | 

Clearing cycle of the message inside the batch.

 |

## [](#DetailedAmount "Copy link to heading")DetailedAmount

DetailedAmount23 ..Body.Transaction.DetailedAmount The detailed amount is used to calculate the reconciliation amount for messages in which the transaction amount is absent.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[DetailAmountCode](/vault-payments/latest/EN/api/flows/flows_api/common#DetailAmountCode)`

 | 

Type of amount

 |
| 

`other_type`

 | 

`str`

 | 

Additional information to specify the type of amount.

 |
| 

`amount`

 | 

`[CreditDebitAndAmount](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebitAndAmount)`

 | 

Amount of one occurrence of the breakdown amount.

 |

## [](#CreditDebitAndAmount "Copy link to heading")CreditDebitAndAmount

Signed amount in a given numeric currency

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Amount value.

 |
| 

`credit_debit`

 | 

`[CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

Sign of the amount.

 |

## [](#CreditDebit "Copy link to heading")CreditDebit

Specifies if an operation is an increase or a decrease.

Enum values  
| Name | Description |
| --- | --- |
| 
`CREDIT_DEBIT_UNKNOWN`

 |  |
| 

`CREDIT_DEBIT_CREDIT`

 | 

Operation is an increase.

 |
| 

`CREDIT_DEBIT_DEBIT`

 | 

Operation is a decrease.

 |

## [](#DetailAmountCode "Copy link to heading")DetailAmountCode

DetailAmount2Code Type of detail amount

Enum values  
| Name | Description |
| --- | --- |
| 
`DETAIL_AMOUNT_CODE_UNKNOWN`

 | 

Unknown code of detail amount.

 |
| 

`DETAIL_AMOUNT_CODE_SURCHARGE`

 | 

Fee charged by the acceptor for the transaction, value SRCH

 |

## [](#MessageFunction "Copy link to heading")MessageFunction

Identifies the type of process related to the reconciliation of financial totals.

Enum values  
| Name | Description |
| --- | --- |
| 
`MESSAGE_FUNCTION_UNKNOWN`

 | 

The Message Function is unknown.

 |
| 

`MESSAGE_FUNCTION_ADVICE`

 | 

The Message Function is an advice.

 |
| 

`MESSAGE_FUNCTION_NOTIFICATION`

 | 

The Message Function is a notification.

 |
| 

`MESSAGE_FUNCTION_CAPTURE_ADVICE`

 | 

The Message Function is a capture advice.

 |
| 

`MESSAGE_FUNCTION_CAPTURE_NOTIFICATION`

 | 

The Message Function is a capture notification.

 |
| 

`MESSAGE_FUNCTION_REQUEST`

 | 

The Message Function is a request.

 |
| 

`MESSAGE_FUNCTION_ACQUIRER_REVERSAL_REQUEST`

 | 

Reversal request of an authorisation or a financial message.

 |
| 

`MESSAGE_FUNCTION_REVERSAL_NOTIFICATION`

 | 

The Message Function is a reversal notification.

 |

## [](#Priority "Copy link to heading")Priority

Specifies the priority level of an event.

Enum values  
| Name | Description |
| --- | --- |
| 
`PRIORITY_UNKNOWN`

 | 

The priority is unknown.

 |
| 

`PRIORITY_URGENT`

 | 

Priority level is urgent (highest priority possible).

 |
| 

`PRIORITY_HIGH`

 | 

Priority level is high.

 |
| 

`PRIORITY_NORMAL`

 | 

Priority level is normal.

 |