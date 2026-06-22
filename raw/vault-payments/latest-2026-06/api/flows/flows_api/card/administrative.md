---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/administrative"
title: "Card Administrative Initiation"
scraped_at: "2026-06-17T15:47:16.023Z"
images: 0
---

# Card Administrative Initiation

`flows_api.card.administrative` module

Card Administrative Initiation

## [](#AdministrativeInitiation "Copy link to heading")AdministrativeInitiation

AdministrativeInitiation holds a message regarding an administrative request to perform an action on a card transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`[Message](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#Message)`

 | 

Information representing the request message to be processed. Populated on creation  
of a new instruction. The contents of this object are based on the  
ISO20022 caad.008.001.01 message specification. Mandatory.

 |
| 

`completes_transaction`

 | 

`bool`

 | 

Indicates that this instruction completes the overall transaction and has settled or released  
any authorisation hold.

 |
| 

`message_v02`

 | 

`[flows_api.payloads.administrativeinitiation.AdministrativeInitiationV02](/vault-payments/latest/EN/api/flows/flows_api/payloads/administrativeinitiation#AdministrativeInitiationV02)`

 | 

Version 02 of the AdministrativeInitiation message.

 |

## [](#Message "Copy link to heading")Message

The AdministrativeInitiation message usually sent by any party (processor, clearing or settlement agent) to any party to inform anything that supports the business and technical infrastructure between parties.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[Header](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#Header)`

 | 

Information related to the management of the protocol. Mandatory.

 |
| 

`body`

 | 

`[Body](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#Body)`

 | 

Information related to the administrative initiation. Mandatory.

 |

## [](#Header "Copy link to heading")Header

Header66 Information related to the management of the protocol.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_function`

 | 

`[flows_api.common.MessageFunction](/vault-payments/latest/EN/api/flows/flows_api/common#MessageFunction)`

 | 

Identifies the type of process related to the message. Mandatory.

 |
| 

`initiating_party`

 | 

`[flows_api.card.common.GenericIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#GenericIdentification)`

 | 

Unique identification of the partner that has initiated the exchange. Mandatory.

 |
| 

`recipient_party`

 | 

`[flows_api.card.common.GenericIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#GenericIdentification)`

 | 

Unique identification of the partner that is the recipient of the message exchange.

 |

## [](#Body "Copy link to heading")Body

AdministrativeInitiation1 Information related to the administrative initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`environment`

 | 

`[Environment](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#Environment)`

 | 

Environment of the transaction.

 |
| 

`transaction`

 | 

`[Transaction144](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#Transaction144)`

 | 

Card transaction for which a financial process is requested.

 |
| 

`original_transaction`

 | 

`[OriginalTransaction](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#OriginalTransaction)`

 | 

Contains details of the transaction to be retrieved.

 |

## [](#Environment "Copy link to heading")Environment

Environment34 Environment of the transaction.

## [](#Transaction144 "Copy link to heading")Transaction144

Transaction144 Card transaction for which a financial process is requested.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_reason`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

Reason or purpose to send the message.  
ISO 8583:93 bit 25.

 |
| 

`alternate_message_reason`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AlternateMessageReason](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#AlternateMessageReason)]`

 | 

Supports message reason codes that are not defined in the external code list. Required.

 |

## [](#OriginalTransaction "Copy link to heading")OriginalTransaction

OriginalTransaction2 Contains details of the transaction to be retrieved.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`transaction`

 | 

`[Transaction147](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#Transaction147)`

 | 

Contains the original transaction details.

 |

## [](#Transaction147 "Copy link to heading")Transaction147

Transaction147 Contains transaction details.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`transaction_type`

 | 

`str`

 | 

Type of transaction associated with the main service.  
ISO 8583:87 bit 3.

 |
| 

`transaction_identification`

 | 

`[TransactionIdentification18](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#TransactionIdentification18)`

 | 

Identification of the transaction.

 |
| 

`additional_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalData1](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#AdditionalData1)]`

 | 

Contains additional data.

 |

## [](#TransactionIdentification18 "Copy link to heading")TransactionIdentification18

TransactionIdentification18 Identification of the transaction for network management.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`life_cycle_trace_identification_data`

 | 

`[TransactionLifeCycleIdentification1](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#TransactionLifeCycleIdentification1)`

 | 

Unique global identification structure used to match transactions throughout their lifecycle.  
ISO 8583:2003 bit 21

 |

## [](#TransactionLifeCycleIdentification1 "Copy link to heading")TransactionLifeCycleIdentification1

TransactionLifeCycleIdentification1 Unique global identification structure used to match transactions throughout their lifecycle (for example, authorisation to financial, financial to chargebacks, etc.). It shall contain the same value in all messages throughout a transaction’s lifecycle. ISO 8583:2003 bit 21

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Unique transaction identifier. ISO 8583:2003 bit 21-2

 |

## [](#AdditionalData1 "Copy link to heading")AdditionalData1

AdditionalData1 Contains additional data.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`str`

 | 

Type of information.

 |
| 

`value`

 | 

`str`

 | 

Value of a specific type of data.

 |

## [](#AlternateMessageReason "Copy link to heading")AlternateMessageReason

A custom-defined enum defining message reasons used internally in Vault Payments.

Enum values  
| Name | Description |
| --- | --- |
| 
`ALTERNATE_MESSAGE_REASON_UNKNOWN`

 | 

Unknown alternate message reason.

 |
| 

`ALTERNATE_MESSAGE_REASON_AUTOMATED_AUTHORISATION_EXPIRY`

 | 

Internal message from an automated system indicating that a card authorisation has expired  
and should be released.

 |
| 

`ALTERNATE_MESSAGE_REASON_TIMEOUT_RELATED_REJECTION`

 | 

Internal message from the payments gateway indicating a card authorisation timed out and  
was automatically rejected to the scheme prior to processing completion and should be  
released.

 |
| 

`ALTERNATE_MESSAGE_REASON_AUTOMATED_RETRY`

 | 

Message was retried automatically.

 |
| 

`ALTERNATE_MESSAGE_REASON_WAREHOUSING`

 | 

Message was warehoused for a later processing period.

 |
| 

`ALTERNATE_MESSAGE_REASON_CORE_TIMEOUT_RELATED_REJECTION`

 | 

Message was rejected due to a core timeout.

 |
| 

`ALTERNATE_MESSAGE_REASON_GATEWAY_TIMEOUT_RELATED_REJECTION`

 | 

Message was rejected due to a gateway timeout.

 |
| 

`ALTERNATE_MESSAGE_REASON_HOLD`

 | 

Message is a hold.

 |
| 

`ALTERNATE_MESSAGE_REASON_FEES`

 | 

Message is an additional fee.

 |
| 

`ALTERNATE_MESSAGE_REASON_SURCHARGE_FEES`

 | 

Message is a surcharge fee.

 |