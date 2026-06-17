---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/routing"
title: "Routing"
scraped_at: "2026-06-17T05:10:40.617Z"
images: 0
---

# Routing

`flows_api.routing` module

Accounts

## [](#AccountLink "Copy link to heading")AccountLink

Vault Payments representation of an account on a Core banking system.

An Account Link contains the information required for Vault Payments to direct an Instruction to a core banking system account. An Account Link can be referenced by one or more Payment Instruments. AccountLinks connected to the matched payment instrument, will be returned in the `AccountLinkResult` as part of the `AccountLinkStep`.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`Optional[str]`

 | 

The ID of the Account Link.

 |
| 

`core_id`

 | 

`Optional[str]`

 | 

The ID of the Core Banking system which stores the associated account.

 |
| 

`core_account_id`

 | 

`Optional[str]`

 | 

The ID that the Core Banking system uses for the associated account.

 |
| 

`status`

 | 

`Optional[[AccountLinkStatus](/vault-payments/latest/EN/api/flows/flows_api/routing#AccountLinkStatus)]`

 | 

The status of the Account Link.

 |
| 

`account_link_selection_rejection`

 | 

`Optional[bool]`

 | 

Whether the Account Link Selection Rule (if applicable) evaluated to rejection.

 |
| 

`alias`

 | 

`Optional[str]`

 | 

The alias to identify the Account Link.

 |

## [](#AccountLinkResult "Copy link to heading")AccountLinkResult

Result of `AccountLinkStep` query

The AccountLinkResult passed to the `resolve_func` of an `AccountLinkStep` contains all the AccountLinks associated with the PaymentInstrument Matched by the previous MatchPaymentInstrumentStep

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_links`

 | 

`Optional[[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AccountLink](/vault-payments/latest/EN/api/flows/flows_api/routing#AccountLink)]]`

 | 

The resolved Account Links from the query.

 |

## [](#AccountLinkStatus "Copy link to heading")AccountLinkStatus

Defines possible Account Link statuses.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_LINK_STATUS_UNKNOWN`

 | 

Unknown status.

 |
| 

`ACCOUNT_LINK_STATUS_ACTIVE`

 | 

Account Link is active.

 |
| 

`ACCOUNT_LINK_STATUS_INACTIVE`

 | 

Account Link is inactive.

 |

## [](#MatchPaymentInstrumentQuery "Copy link to heading")MatchPaymentInstrumentQuery

Query returned by MatchPaymentInstrument `query_func`

A MatchPaymentInstrumentQuery must be returned from the `query_func` of a MatchPaymentInstrumentStep. Any field in the instruction can be used to construct the query. The query will then match to a Payment Instrument with the provided `instrument_identifier` and `bank_identifier` routing information. Alternatively if the ID is already known the `payment_instrument_id` can be provided to the query directly. Only Active Payment Instruments will be matched.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instrument_identifier`

 | 

`Optional[str]`

 | 

The instrument identifier to match against. e.g. CardID, Account Number, IBAN

 |
| 

`bank_identifier`

 | 

`Optional[str]`

 | 

The instrument identifier to match against. e.g. BIC

 |
| 

`payment_instrument_id`

 | 

`Optional[str]`

 | 

The Payment Instrument to match against. Can only be set if instrument\_identifier and bank\_identifier are empty.

 |

## [](#PaymentInstrument "Copy link to heading")PaymentInstrument

Vault Payments representation of external routing information.

A Payment Instrument represents any instrument that can receive and initiate instructions. If a MatchPaymentInstrumentQuery successfully matches a Payment Instrument, it will be passed to the `resolve_func` of the MatchPaymentInstrumentStep.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`Optional[str]`

 | 

The ID of the Payment Instrument.

 |

## [](#RoutingInformation "Copy link to heading")RoutingInformation

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instrument_identifier_type`

 | 

`Optional[str]`

 | 

The type of account identifier being used. Common values: IBAN, BBAN, CARD\_ID.  
Not used for matching Optional.

 |
| 

`instrument_identifier`

 | 

`Optional[str]`

 | 

The identifier of the individual instrument within the institution, such as IBAN, Account Number, Card ID. Required on creation.

 |
| 

`bank_identifier_type`

 | 

`Optional[str]`

 | 

The format or category of the bank identifier being used. Common values: BIC, UK\_SORT\_CODE.  
Not used for matching Optional.

 |
| 

`bank_identifier`

 | 

`Optional[str]`

 | 

The identifier of the institution to which the instrument belongs, such as BIC, UK Sort Code.

 |

## [](#set_account_link "Copy link to heading")set\_account\_link

Sets the given Account Link as the Target Account on the Instruction, or adds it to the extra Account Links stored on the Target Account if a name is supplied.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`instr`

 | 

`[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)`

 | 

The Instruction to set the Account Link as the Target Account on.

 |
| 

`account_link`

 | 

`[AccountLink](/vault-payments/latest/EN/api/flows/flows_api/routing#AccountLink)`

 | 

The Account Link to be set.

 |
| 

`name`

 | 

`str`

 | 

The name to store the Account Link on the Target Account with, if supplied.

 |

## [](#set_active_account_link_as_default "Copy link to heading")set\_active\_account\_link\_as\_default

Finds the first active Account Link which was not rejected by its Account Link Selection rule, if applicable, in the Account Link Result, and then sets this as the Target Account in the Instruction.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`instr`

 | 

`[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)`

 | 

The Instruction to set the Account Link as the Target Account on.

 |
| 

`account_link_result`

 | 

`[AccountLinkResult](/vault-payments/latest/EN/api/flows/flows_api/routing#AccountLinkResult)`

 | 

The Account Links to filter through.  
:returns: Whether an active Account Link was found, and set on the Target Account.

 |