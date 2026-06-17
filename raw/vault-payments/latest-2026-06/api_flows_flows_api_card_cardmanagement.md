---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement"
title: "Card Management"
scraped_at: "2026-06-17T05:08:55.315Z"
images: 0
---

# Card Management

`flows_api.card.cardmanagement` module

Card Management

## [](#CardManagementInitiation "Copy link to heading")CardManagementInitiation

CardManagementInitiation holds a message regarding a request to fulfil a request initiated by the cardholder at the point of service for an operation on the card account, and a result data object that holds particular processing result data representing the outcome of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`[CardManagementInitiationMessage](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#CardManagementInitiationMessage)`

 | 

Information representing the request message to be processed.

 |
| 

`result_data`

 | 

`[CardManagementInitiationResultData](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#CardManagementInitiationResultData)`

 | 

Information regarding the result of processing of the card management initiation  
message. Output only.

 |
| 

`processing_indicators`

 | 

`[CardManagementInitiationProcessingIndicators](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#CardManagementInitiationProcessingIndicators)`

 | 

Results of processing steps that have already been performed on the Instruction,  
before the Instruction was sent to the Engine.

 |
| 

`pre_computed_values`

 | 

`[CardManagementInitiationPreComputedValues](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#CardManagementInitiationPreComputedValues)`

 | 

Values that have been pre-computed by systems upstream to the Engine, and  
made available to the Instruction.

 |
| 

`decline_recommendations`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.DeclineRecommendation](/vault-payments/latest/EN/api/flows/flows_api/card/common#DeclineRecommendation)]`

 | 

Details of any pre-processing decline recommendations made.

 |
| 

`expiry_date`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

The date on which the authorisation hold for the overall transaction expires.  
This is valid at the time of processing this message but may be extended by  
further messages for the transaction.

 |

## [](#CardManagementInitiationMessage "Copy link to heading")CardManagementInitiationMessage

Request represents the CardManagementInitiation message sent by the acquirer to an issuer or agent to fulfil a request initiated by the cardholder at the point of service for an operation on the card account. Represents an ISO20022 cain.023.001.02 message, and all fields and sub fields are based on the ISO20022 specification.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[Header](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Header)`

 | 

Information related to the management of the protocol. Mandatory.

 |
| 

`body`

 | 

`[Body](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Body)`

 | 

Information related to the card management initiation. Mandatory.

 |

## [](#Header "Copy link to heading")Header

Header62 Set of characteristics related to the protocol. Information related to the management of the protocol.

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

`protocol_version`

 | 

`str`

 | 

Version of the acquirer to issuer protocol specifications.

 |
| 

`exchange_identification`

 | 

`str`

 | 

Unique identification of an exchange of messages between two parties.

 |
| 

`re_transmission_counter`

 | 

`str`

 | 

Number of retransmission of the message. Incremented by one for each retransmission.

 |
| 

`creation_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time at which the message was sent.

 |
| 

`batch_management_information`

 | 

`[flows_api.common.BatchManagementInformation](/vault-payments/latest/EN/api/flows/flows_api/common#BatchManagementInformation)`

 | 

Information related to the batch and the collection to which the message belongs if any.

 |
| 

`trace_data`

 | 

`Dict[str, str]`

 | 

Information sent in the request message to be returned in the response one, for instance to  
help in the retrieval of the context of the exchange.

 |

## [](#Body "Copy link to heading")Body

Body - CardManagementInitiation2 Information related to the card management initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`environment`

 | 

`[Environment](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Environment)`

 | 

Contains or describes the information pertaining to the actors interacting with the  
transaction. Mandatory.

 |
| 

`context`

 | 

`[Context](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Context)`

 | 

Contains or describes conditions and characteristics of the transaction. Mandatory.

 |
| 

`transaction`

 | 

`[Transaction](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Transaction)`

 | 

Card transaction for which an authorisation is requested. Mandatory.

 |
| 

`icc_related_data`

 | 

`[flows_api.card.common.ICCRelatedData](/vault-payments/latest/EN/api/flows/flows_api/card/common#ICCRelatedData)`

 | 

Data related to an integrated circuit card application embedded in the payment card of the  
cardholder.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional information that cannot be captured in the structured fields and/or  
other specific block.

 |

## [](#Environment "Copy link to heading")Environment

Environment18 Contains or describes the information pertaining to the actors interacting with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`acquirer`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identification of the acquirer. Mandatory.  
ISO 8583 bit 32.

 |
| 

`sender`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Party sending the message to another intermediary agent or to the final  
destination. ISO 8583 bit 33.

 |
| 

`receiver`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Party receiving the message from the origin or from an intermediary agent.  
ISO 8583 bit 100.

 |
| 

`acceptor`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Card acceptor performing the card transaction.  
ISO 8583 bit 42 (identification).  
ISO 8583:87 bit 43 (country).

 |
| 

`terminal`

 | 

`[Terminal](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Terminal)`

 | 

Payment terminal or ATM performing the transaction.

 |
| 

`card`

 | 

`[flows_api.card.common.CardData](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardData)`

 | 

Card or payment token performing the transaction. Mandatory.

 |
| 

`cardholder`

 | 

`[Cardholder](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#Cardholder)`

 | 

Cardholder performing the card payment transaction.

 |

## [](#Terminal "Copy link to heading")Terminal

Terminal4 Payment terminal or ATM performing the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`terminal_identification`

 | 

`[TerminalIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#TerminalIdentification)`

 | 

Identification of the terminal performing the transaction. Mandatory.

 |
| 

`type`

 | 

`[flows_api.card.common.TerminalType](/vault-payments/latest/EN/api/flows/flows_api/card/common#TerminalType)`

 | 

Type of terminal.

 |
| 

`capabilities`

 | 

`[flows_api.card.common.Capabilities](/vault-payments/latest/EN/api/flows/flows_api/card/common#Capabilities)`

 | 

Capabilities of the terminal.

 |
| 

`geographic_location`

 | 

`str`

 | 

Geographic location of the terminal.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data regarding the terminal or ATM performing the transaction.

 |

## [](#TerminalIdentification "Copy link to heading")TerminalIdentification

TerminalIdentification3 Identification of the terminal performing the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Identification of the terminal. Mandatory.  
ISO 8583 bit 41.

 |
| 

`assigner`

 | 

`str`

 | 

Assigner of the terminal identification.

 |
| 

`country`

 | 

`str`

 | 

Country of the terminal.

 |
| 

`short_name`

 | 

`str`

 | 

Short name of the terminal.

 |

## [](#Cardholder "Copy link to heading")Cardholder

Cardholder19 Unprotected sensitive detailed information about the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`cardholder_name`

 | 

`[CardholderName](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#CardholderName)`

 | 

Contains the registered cardholder name that the issuer knows to be  
correct.

 |
| 

`contact_information`

 | 

`[flows_api.common.Contact](/vault-payments/latest/EN/api/flows/flows_api/common#Contact)`

 | 

Contact information. ISO 8583 bit 56.

 |

## [](#CardholderName "Copy link to heading")CardholderName

Complete name of the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`str`

 | 

Exact replication of the name of the cardholder as it appears on the card.

 |
| 

`given_name`

 | 

`str`

 | 

First name of the cardholder.

 |
| 

`middle_initials`

 | 

`str`

 | 

Middle initials present in the name of the cardholder.

 |
| 

`last_name`

 | 

`str`

 | 

Family name of the cardholder.

 |

## [](#Context "Copy link to heading")Context

Context11 Contains or describes conditions and characteristics of the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`point_of_service_context`

 | 

`[PointOfServiceContext](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#PointOfServiceContext)`

 | 

Contains point of interaction information specific to a given transaction  
that may change from transaction to transaction. Mandatory.

 |
| 

`transaction_context`

 | 

`[flows_api.card.common.TransactionContext](/vault-payments/latest/EN/api/flows/flows_api/card/common#TransactionContext)`

 | 

Context of the card payment transaction. Mandatory.

 |
| 

`verification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.Verification](/vault-payments/latest/EN/api/flows/flows_api/card/common#Verification)]`

 | 

Validation result and/or data to be validated.

 |
| 

`risk_context`

 | 

`[flows_api.card.common.RiskContext](/vault-payments/latest/EN/api/flows/flows_api/card/common#RiskContext)`

 | 

Context of the risk associated with the transaction.

 |

## [](#PointOfServiceContext "Copy link to heading")PointOfServiceContext

PointOfServiceContext3 Contains point of interaction information specific to a given transaction that may change from transaction to transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`card_present`

 | 

`bool`

 | 

Indicates whether the transaction has been initiated by a card physically  
present or not.  
ISO 8583:87 bit 25.

 |
| 

`cardholder_present`

 | 

`bool`

 | 

Indicates whether the transaction has been initiated in presence of the  
cardholder or not.  
ISO 8583:87 bit 25.

 |
| 

`attended_indicator`

 | 

`bool`

 | 

Card acceptor representative in attendance at the point of service during  
the transaction.  
ISO 8583:87 bit 25.

 |
| 

`card_data_entry_mode`

 | 

`[flows_api.card.common.CardDataReadingCode](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardDataReadingCode)`

 | 

Entry mode of the card data for the transaction. Mandatory.  
ISO 8583:87 bit 22 (1-2).  
ISO 8583:93 bit 22 (7).

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data regarding the context of the point of sale.

 |
| 

`ecommerce_data`

 | 

`Dict[str, str]`

 | 

Contains electronic commerce data.

 |
| 

`unattended_level_category`

 | 

`str`

 | 

Transaction category level on an unattended terminal.  
ISO 8583 bit 61.

 |
| 

`other_card_data_entry_mode`

 | 

`str`

 | 

Other type of card data entry mode.

 |

## [](#Transaction "Copy link to heading")Transaction

Transaction152 Card transaction for which an authorisation is requested.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`transaction_type`

 | 

`str`

 | 

Type of transaction associated with the main service. Mandatory.  
ISO 8583:87 bit 3.

 |
| 

`transaction_identification`

 | 

`[TransactionIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#TransactionIdentification)`

 | 

Identification of the transaction. Mandatory.

 |
| 

`transaction_currency`

 | 

`str`

 | 

Transaction currency of the acceptor. ISO 4217.

 |
| 

`detailed_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.common.DetailedAmount](/vault-payments/latest/EN/api/flows/flows_api/common#DetailedAmount)]`

 | 

Further details of some or all amounts in the transaction amount.  
The detailed amount is used to calculate the reconciliation amount for messages  
in which the transaction amount is absent.

 |
| 

`reconciliation_amount`

 | 

`[flows_api.card.common.AmountAndExchangeRate](/vault-payments/latest/EN/api/flows/flows_api/card/common#AmountAndExchangeRate)`

 | 

Amount used for reconciliation.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#AdditionalAmount)]`

 | 

Amounts that are not part of the transaction amount and not included in reconciliation.

 |
| 

`additional_fees`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalFee](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#AdditionalFee)]`

 | 

Fees not included in the transaction amount.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |
| 

`account_from`

 | 

`[AccountDetails](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#AccountDetails)`

 | 

Identifies a customer account or a relationship to its account affected for debit,  
inquiries and the source of funding for transfers.

 |
| 

`account_to`

 | 

`[AccountDetails](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#AccountDetails)`

 | 

Identifies a customer account or a relationship to its account affected for credits,  
inquiries and the destination account for funds transfers.

 |
| 

`transaction_amount`

 | 

`[flows_api.common.CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/common#CurrencyAndAmount)`

 | 

Actual amount of the transaction.

 |
| 

`cardholder_billing_amount`

 | 

`[flows_api.card.common.AmountAndExchangeRate](/vault-payments/latest/EN/api/flows/flows_api/card/common#AmountAndExchangeRate)`

 | 

Present when the cardholder billing currency differs from the transaction currency  
expressed in the amount of the transaction.

 |

## [](#TransactionIdentification "Copy link to heading")TransactionIdentification

TransactionIdentification51 Identification of the transaction

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`local_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Local date and time the transaction takes place at the card acceptor location.  
Mandatory. ISO 8583:87 bit 12 and 13.

 |
| 

`transmission_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time expressed in UTC of the message as sent by the initiator.  
ISO 8583 bit 7.

 |
| 

`system_trace_audit_number`

 | 

`str`

 | 

Number assigned by a transaction originator to assist in identifying a transaction  
uniquely. The trace number remains unchanged for all messages within a two-message  
exchange (for example, request/repeat and response). Mandatory.  
ISO 8583 bit 11.

 |
| 

`retrieval_reference_number`

 | 

`str`

 | 

Reference supplied by the system retaining the original source information and  
used to assist in locating that information or a copy thereof. Mandatory.  
ISO 8583 bit 37.

 |
| 

`life_cycle_trace_identification_data`

 | 

`[flows_api.card.common.LifeCycleTraceIdentificationData](/vault-payments/latest/EN/api/flows/flows_api/card/common#LifeCycleTraceIdentificationData)`

 | 

Unique global identification structure used to match transactions throughout  
their lifecycle.

 |
| 

`original_data_elements`

 | 

`[flows_api.card.common.OriginalDataElements](/vault-payments/latest/EN/api/flows/flows_api/card/common#OriginalDataElements)`

 | 

Data elements contained in the original message, if applicable.

 |

## [](#AdditionalAmount "Copy link to heading")AdditionalAmount

AdditionalAmounts3 Amounts that are not part of the transaction amount and not included in reconciliation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[flows_api.common.CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/common#CurrencyAndAmount)`

 | 

Amount of one occurrence of the breakdown amount.

 |
| 

`type`

 | 

`[TypeOfAmount](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#TypeOfAmount)`

 | 

Type or class of amount.

 |
| 

`other_type`

 | 

`str`

 | 

Other type of amount.

 |

## [](#AdditionalFee "Copy link to heading")AdditionalFee

AdditionalFee2 Card Transactions Fees not included in the main transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[flows_api.card.common.TypeOfFee](/vault-payments/latest/EN/api/flows/flows_api/card/common#TypeOfFee)`

 | 

Type or class of fee

 |
| 

`amount`

 | 

`[flows_api.card.common.FeeAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#FeeAmount)`

 | 

Amount of one occurrence of the fee amount. Mandatory.

 |

## [](#AccountDetails "Copy link to heading")AccountDetails

Details of a bank account.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_name`

 | 

`str`

 | 

Name of the account as assigned by the account servicing institution.

 |
| 

`account_type`

 | 

`str`

 | 

Type of cardholder account used for the transaction.  
Conforms to ISO 8583, Account type codes

 |
| 

`account_identification`

 | 

`str`

 | 

Identification of an account.

 |

## [](#CardManagementInitiationResultData "Copy link to heading")CardManagementInitiationResultData

CardManagementResponseV02 CardManagementInitiationResultData holds the results of the processing of a card managament initiation request. It is based on a subset of fields available in ISO20022 cain.024.001 messages. All fields and sub fields are based on the ISO20022 specification.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`processing_result`

 | 

`[ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#ProcessingResult)`

 | 

Outcome of processing of the card management initiation.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional information regarding the result of processing that cannot be  
captured in the structured fields and/or other specific block.

 |
| 

`approval_code`

 | 

`str`

 | 

Value assigned by the entity when the transaction is approved.  
Maps to Authorisation ID Response.  
ISO 8583 bit 38.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#AdditionalAmount)]`

 | 

Additional amount information regarding the result of processing, including  
authorised amount and transactional fees.

 |

## [](#ProcessingResult "Copy link to heading")ProcessingResult

ProcessingResult16 Outcome of the processing of the instruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`response_source`

 | 

`[ResponseSource](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#ResponseSource)`

 | 

The information about entity that provides the response.

 |
| 

`result_data`

 | 

`[ResultData](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#ResultData)`

 | 

Result of the processing.

 |

## [](#ResponseSource "Copy link to heading")ResponseSource

ApprovalEntity2 Information about the entity that provides the response.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Identification of the entity.

 |

## [](#ResultData "Copy link to heading")ResultData

ResultData7 Result of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`result`

 | 

`[ResultCode](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#ResultCode)`

 | 

Generic result of the processing.

 |
| 

`other_result`

 | 

`str`

 | 

Other type of result of the processing.

 |
| 

`result_details`

 | 

`str`

 | 

Detailed results of the processing.

 |
| 

`other_result_details`

 | 

`str`

 | 

Other result details of the processing.

 |
| 

`additional_result_information`

 | 

`Dict[str, str]`

 | 

Additional result information to be conveyed.

 |

## [](#CardManagementInitiationProcessingIndicators "Copy link to heading")CardManagementInitiationProcessingIndicators

Contains all potential indicators present on a card management initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`decline_info`

 | 

`[flows_api.card.common.indicators.DeclineInfo](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#DeclineInfo)`

 | 

Details of any pre-processing decline decision made.  
Deprecated: use decline\_recommendations.

 |
| 

`card_input_data`

 | 

`[flows_api.card.common.indicators.CardInputData](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CardInputData)`

 | 

Indicators related to the card data provided in the card management initiation  
request itself.

 |
| 

`card`

 | 

`[flows_api.card.common.indicators.Card](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Card)`

 | 

Collection of indicators related to the Card resource that the card management initiation  
is targeting.

 |
| 

`internal_error_encountered`

 | 

`bool`

 | 

Whether or not the card management initiation encountered an internal error prior to  
entering the Instruction Flow, e.g. in the scheme gateway.

 |
| 

`product_value_constraints_violated`

 | 

`bool`

 | 

Whether or not the card management initiation violated the scheme’s Product Value  
Constraints.

 |
| 

`pin`

 | 

`[flows_api.card.common.indicators.PIN](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#PIN)`

 | 

Indicators related to the card’s current PIN.

 |
| 

`new_pin`

 | 

`[flows_api.card.common.indicators.NewPIN](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#NewPIN)`

 | 

Validity of the new PIN entered by the cardholder in a PIN Change message.

 |
| 

`act`

 | 

`[flows_api.card.common.indicators.ApplicationCryptogramType](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#ApplicationCryptogramType)`

 | 

ACT indicator

 |
| 

`arqc`

 | 

`[flows_api.card.common.indicators.AuthorisationRequestCryptogram](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#AuthorisationRequestCryptogram)`

 | 

ARQC indicator

 |
| 

`cvm`

 | 

`[flows_api.card.common.indicators.CardholderVerificationMethod](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CardholderVerificationMethod)`

 | 

CVM indicator

 |
| 

`expiration_date`

 | 

`[flows_api.card.common.indicators.ExpirationDate](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#ExpirationDate)`

 | 

Expiration date indicator

 |

## [](#CardManagementInitiationPreComputedValues "Copy link to heading")CardManagementInitiationPreComputedValues

CardManagementInitiationPreComputedValues are pre-computed for a Card Management Initiation Instruction before it’s received in the Engine. This may be done for values that are cumbersome to compute in an Instruction Flow, and/or values that are scheme-specific and typically not configurable by clients. Flows will sometimes need to copy these values onto the Instruction response that it returns upstream, conditional on some processing result within the Flow. For example, the Approval Code should be copied onto the Instruction only if the Instruction is approved. For this reason, until these values have been copied over to the Instruction by the Flow, they should not be depended upon for any other purpose.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`approval_code`

 | 

`str`

 | 

Approval Code should be generated and set by issuers on Authorisation responses  
for approved Authorisations.  
ISO 20022 cain.023.001.02 CardManagementInitiationV02  
Message.Body.ProcessingResult.ApprovalCode

 |
| 

`expiry_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Expiry Timestamp is the time at which the Authorisation should expire, and  
its postings released in the core banking system.

 |

## [](#ResultCode "Copy link to heading")ResultCode

Set of possible results for processing of the instruction.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESULT_CODE_UNKNOWN`

 | 

Result is unknown.

 |
| 

`RESULT_CODE_PROCESSED`

 | 

Advice message is processed.

 |
| 

`RESULT_CODE_NOT_PROCESSED`

 | 

Advice message could not be processed.

 |
| 

`RESULT_CODE_UNDER_REVIEW`

 | 

Service is under review.

 |
| 

`RESULT_CODE_REJECTED`

 | 

Service was rejected.

 |
| 

`RESULT_CODE_TECHNICAL_ERROR`

 | 

Service cannot be provided for technical reason (e.g. timeout contacting the  
Issuer, security problem).

 |
| 

`RESULT_CODE_OTHER_NATIONAL`

 | 

Other type of processing result defined at national level.

 |
| 

`RESULT_CODE_OTHER_PRIVATE`

 | 

Other type of processing result defined at private level.

 |

## [](#TypeOfAmount "Copy link to heading")TypeOfAmount

Type of amount

Enum values  
| Name | Description |
| --- | --- |
| 
`TYPE_OF_AMOUNT_UNKNOWN`

 | 

Unknown type of amount.

 |
| 

`TYPE_OF_AMOUNT_AUTHORISED_AMOUNT`

 | 

Transaction amount that has been authorised.

 |
| 

`TYPE_OF_AMOUNT_DISCOUNT`

 | 

Discount, rebate or voucher, related to loyalty programs. This amount is  
counted as a negative amount.

 |
| 

`TYPE_OF_AMOUNT_ISSUER_CARDHOLDER_FEE`

 | 

Fee applied by the card issuer to the cardholder.

 |
| 

`TYPE_OF_AMOUNT_CUMULATIVE`

 | 

Contains the total amount of all authorisations related to the same  
cardholder purchase activities. Example: total of all incremental or splitted  
shipment authorisations for the same purchase.

 |
| 

`TYPE_OF_AMOUNT_MAXIMUM`

 | 

Maximum amount (the final amount must be less or equal).

 |
| 

`TYPE_OF_AMOUNT_MAXIMUM_ALLOWED_AMOUNT`

 | 

Maximum amount allowed for the transaction in the transaction amount  
currency if the transaction amount of the request was declined.

 |
| 

`TYPE_OF_AMOUNT_MINIMUM_ALLOWED_AMOUNT`

 | 

Minimum amount allowed in the TransactionAmount currency if the  
transaction amount of the request was declined.

 |
| 

`TYPE_OF_AMOUNT_REQUESTED_AMOUNT`

 | 

Transaction amount that has been requested to be authorised.

 |
| 

`TYPE_OF_AMOUNT_OTHER_NATIONAL`

 | 

Other type of amount defined at national level.

 |
| 

`TYPE_OF_AMOUNT_OTHER_PRIVATE`

 | 

Other type of amount defined at private level.

 |
| 

`TYPE_OF_AMOUNT_REQUESTED_CASHBACK`

 | 

Requested cashback amount.

 |
| 

`TYPE_OF_AMOUNT_ANTICIPATED`

 | 

Amount anticipated for the transaction.

 |
| 

`TYPE_OF_AMOUNT_PRE_DCC`

 | 

Local amount before DCC (Dynamic Currency Conversion) was applied.

 |