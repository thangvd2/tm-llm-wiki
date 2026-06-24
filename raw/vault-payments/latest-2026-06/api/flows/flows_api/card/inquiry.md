---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/inquiry"
title: "Card Inquiries"
scraped_at: "2026-06-17T15:47:26.714Z"
images: 0
---

# Card Inquiries

`flows_api.card.inquiry` module

Based on the cain.016.001.02 InquiryInitiationV02 and cain.017.001.02 InquiryResponseV02 message types as per "Acquirer to Issuer Card Messages - Version 3, Message Definition Report - Part 2".

## [](#InquiryInitiation "Copy link to heading")InquiryInitiation

InquiryInitiation holds a message that is sent by an acquirer or agent to an issuer to request information related to the card (e.g. about a cardholder, the availability of funds, etc.), and a result data object that holds particular processing result data representing the outcome of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`[InquiryInitiationMessage](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#InquiryInitiationMessage)`

 | 

Information representing the request message to be processed. Populated on creation  
of a new instruction. The contents of this object are based on the  
ISO20022 cain.016.001.02 message specification. Mandatory.

 |
| 

`result_data`

 | 

`[InquiryInitiationResultData](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#InquiryInitiationResultData)`

 | 

Information regarding the result of processing of the inquiry initiation  
message. The contents of this object are based on the  
ISO20022 cain.017.001.02 message specification. Output only.

 |
| 

`processing_indicators`

 | 

`[InquiryInitiationProcessingIndicators](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#InquiryInitiationProcessingIndicators)`

 | 

Results of processing steps that have already been performed on the Instruction,  
before the Instruction was sent to the Engine.

 |
| 

`pre_computed_values`

 | 

`[InquiryInitiationPreComputedValues](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#InquiryInitiationPreComputedValues)`

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
| 

`card_data`

 | 

`[flows_api.card.common.VPCardData](/vault-payments/latest/EN/api/flows/flows_api/card/common#VPCardData)`

 | 

Details of a card that was used to make the transaction

 |
| 

`message_v03`

 | 

`[flows_api.payloads.inquiryinitiation.InquiryInitiationV03](/vault-payments/latest/EN/api/flows/flows_api/payloads/inquiryinitiation#InquiryInitiationV03)`

 | 

Version 03 of the InquiryInitiation message.

 |

## [](#InquiryInitiationMessage "Copy link to heading")InquiryInitiationMessage

cain.016.001.02 InquiryInitiationV02 Request represents the InquiryInitiation message sent by an acquirer or an agent to an issuer to request information related to the card (e.g. about a cardholder, the availability of funds, etc.)

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[Header](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Header)`

 | 

Information related to the management of the protocol. Mandatory.

 |
| 

`body`

 | 

`[Body](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Body)`

 | 

Information related to the inquiry initiation. Mandatory.

 |

## [](#Header "Copy link to heading")Header

Header60 InquiryInitiationV02.Header Information related to the management of the protocol.

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

`trace_data`

 | 

`Dict[str, str]`

 | 

Information sent in the request message to be returned in the response one, for instance to  
help in the retrieval of the context of the exchange.

 |

## [](#Body "Copy link to heading")Body

InquiryInitiation2 InquiryInitiationV02.Body InquiryResponse2 InquiryResponseV02.Body Information related to the inquiry initiation & response.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`environment`

 | 

`[Environment](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Environment)`

 | 

Contains or describes the information pertaining to the actors interacting with the  
transaction. Mandatory.

 |
| 

`context`

 | 

`[Context](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Context)`

 | 

Contains or describes conditions and characteristics of the transaction. Mandatory.

 |
| 

`transaction`

 | 

`[Transaction](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Transaction)`

 | 

Card transaction for which an inquiry is requested. Mandatory.

 |
| 

`processing_result`

 | 

`[ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#ProcessingResult)`

 | 

Outcome of processing of the inquiry.

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

Environment18 InquiryInitiationV02.Body.Environment Contains or describes the information pertaining to the actors interacting with the transaction.

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

`[Terminal](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Terminal)`

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

`[Cardholder](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Cardholder)`

 | 

Cardholder performing the card payment transaction.

 |

## [](#Terminal "Copy link to heading")Terminal

Terminal4 ..Body.Environment.Terminal Payment terminal or ATM performing the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`terminal_identification`

 | 

`[TerminalIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#TerminalIdentification)`

 | 

Identification of the terminal performing the transaction. Mandatory.

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

## [](#TerminalIdentification "Copy link to heading")TerminalIdentification

TerminalIdentification3 ..Environment.Terminal.TerminalIdentification Identification of the terminal performing the transaction.

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

Cardholder19 ..Body.Environment.Cardholder Unprotected sensitive detailed information about the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`cardholder_name`

 | 

`[CardholderName](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#CardholderName)`

 | 

Contains the registered cardholder name that the issuer knows to be correct.

 |
| 

`identification`

 | 

`[Credentials](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Credentials)`

 | 

Identification of the cardholder. ISO 8583 bit 56.

 |
| 

`address`

 | 

`[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)`

 | 

Complete address of the cardholder.

 |
| 

`contact_information`

 | 

`[flows_api.common.Contact](/vault-payments/latest/EN/api/flows/flows_api/common#Contact)`

 | 

Contact information. ISO 8583 bit 56.

 |
| 

`date_of_birth`

 | 

`str`

 | 

Date of birth of the party, in YYYY-MM-DD format.

 |

## [](#CardholderName "Copy link to heading")CardholderName

CardholderName3 ..Cardholder.CardholderName Complete name of the cardholder.

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

## [](#Credentials "Copy link to heading")Credentials

Credentials2 ..Cardholder.Credentials Credential information of a given party or person.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification_code`

 | 

`[CredentialIdentificationCode](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#CredentialIdentificationCode)`

 | 

Identification of the type of credential.

 |
| 

`other_identification_code`

 | 

`str`

 | 

Used when OtherNational or OtherPrivate value is selected in identification  
code list.

 |
| 

`identification_value`

 | 

`str`

 | 

Value of identification.

 |

## [](#Context "Copy link to heading")Context

Context11 InquiryInitiationV02.Body.Context Contains or describes conditions and characteristics of the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`point_of_service_context`

 | 

`[PointOfServiceContext](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#PointOfServiceContext)`

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

PointOfServiceContext3 ..Body.Context.PointOfServiceContext Contains point of interaction information specific to a given transaction that may change from transaction to transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`card_present`

 | 

`bool`

 | 

Indicates whether the transaction has been initiated by a card physically present or not.  
ISO 8583:87 bit 61, subfield 5.

 |
| 

`cardholder_present`

 | 

`bool`

 | 

Indicates whether the transaction has been initiated in presence of the cardholder or not.  
ISO 8583:87 bit 61, subfield 4.

 |
| 

`cardholder_activated`

 | 

`bool`

 | 

Indicates whether the automated device was operated solely by the cardholder or not.  
ISO 8583:87 bit 61, subfield 10.

 |
| 

`attended_indicator`

 | 

`bool`

 | 

Card acceptor representative in attendance at the point of service during the transaction.  
When an acceptor’s terminal is semi-attended (for example,  
multiple terminals supervised by a single clerk), it will be identified as ‘attended’.  
ISO 8583:87 bit 61, subfield 1.

 |
| 

`unattended_level_category`

 | 

`str`

 | 

Transaction category level on an unattended terminal.  
\*Set to the value in ISO8583:87 field below only if cardholder\_activated is set to True.  
ISO 8583:87 bit 61, subfield 10.

 |
| 

`ecommerce_indicator`

 | 

`bool`

 | 

Indicates whether the point of service is an e-commerce one or not.  
Derived from ISO 8583:87 bit 22, subfield 1 and bit 61, subfield 10.

 |
| 

`partial_approval_supported`

 | 

`bool`

 | 

Indicates whether the point of service supports partial approval or not.

 |
| 

`card_data_entry_mode`

 | 

`[flows_api.card.common.CardDataReadingCode](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardDataReadingCode)`

 | 

Entry mode of the card data for the transaction. Mandatory.  
ISO 8583:87 bit 22 (1-2).

 |
| 

`other_card_data_entry_mode`

 | 

`str`

 | 

Other type of card data entry mode.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data regarding the context of the point of sale.

 |

## [](#Transaction "Copy link to heading")Transaction

Transaction131 InquiryInitiationV02.Body.Transaction Card transaction for which an inquiry is requested.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`transaction_type`

 | 

`str`

 | 

ISO8583TransactionTypeCode  
Type of transaction associated with the main service. Mandatory.  
ISO 8583:87 bit 3.

 |
| 

`transaction_identification`

 | 

`[TransactionIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#TransactionIdentification)`

 | 

Identification of the transaction. Mandatory.

 |
| 

`transaction_currency`

 | 

`str`

 | 

Transaction currency of the acceptor.ISO 4217

 |
| 

`detailed_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.common.DetailedAmount](/vault-payments/latest/EN/api/flows/flows_api/common#DetailedAmount)]`

 | 

The detailed amount is used to calculate the reconciliation amount for messages in which the  
transaction amount is absent. ISO8583:87 bit 4

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#AdditionalAmount)]`

 | 

Amounts that are not part of the transaction amount and not included in reconciliation.

 |
| 

`additional_fees`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalFee](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#AdditionalFee)]`

 | 

Fees not included in the transaction amount but included in the settlement.

 |

## [](#TransactionIdentification "Copy link to heading")TransactionIdentification

TransactionIdentification18 ..Body.Transaction.TransactionIdentification Identification of the transaction

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`local_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

TransmissionDateTime  
Local date and time the transaction takes place at the card acceptor location.  
Mandatory. ISO 8583:87 bit 12 and 13.

 |
| 

`local_timezone`

 | 

`str`

 | 

TimeZone  
Time zone name for local date time (for example,  
as defined by IANA - Internet Assigned Numbers Authority - in the time zone database)

 |
| 

`transaction_reference`

 | 

`str`

 | 

Identification of the transaction by the card acceptor. It may appear on the  
receipt of the cardholder. It remains unchanged throughout the lifetime of the  
transaction.

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

## [](#AdditionalAmount "Copy link to heading")AdditionalAmount

AdditionalAmounts3 ..Body.Transaction.AdditionalAmount Amounts that are not part of the transaction amount and not included in reconciliation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[AmountTypeCode](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#AmountTypeCode)`

 | 

Type of amount. ISO 8583 bit 54, subfield 2

 |
| 

`other_type`

 | 

`str`

 | 

Other type of amount.  
Account type in ISO 8583 bit 54, subfield 1

 |
| 

`amount`

 | 

`[flows_api.common.CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/common#CurrencyAndAmount)`

 | 

Amount of one occurrence of the breakdown amount.

 |

## [](#AdditionalFee "Copy link to heading")AdditionalFee

AdditionalFee2 ..Body.Transaction.AdditionalFee Fees not included in the transaction amount but included in the settlement.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[TypeOfAmountCode](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#TypeOfAmountCode)`

 | 

Type or class of fee.

 |
| 

`other_type`

 | 

`str`

 | 

Additional information to specify the type of amount of fee.

 |
| 

`fee_amount`

 | 

`[flows_api.card.common.FeeAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#FeeAmount)`

 | 

Amount of one occurrence of the fee amount.

 |

## [](#ProcessingResult "Copy link to heading")ProcessingResult

ProcessingResult17 InquiryResponseV02.ProcessingResult Outcome of the processing of the inquiry.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`result_data`

 | 

`[ResultData](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#ResultData)`

 | 

Result of the processing.

 |
| 

`action_required`

 | 

`bool`

 | 

Action required flag.

 |
| 

`action`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Action](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#Action)]`

 | 

Set of actions to be performed.

 |

## [](#ResultData "Copy link to heading")ResultData

ResultData7 InquiryResponseV02.ProcessingResult.ResultData Result of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`result`

 | 

`[ResultCode](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#ResultCode)`

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

## [](#Action "Copy link to heading")Action

Action13 InquiryResponseV02.ProcessingResult.Action Set of actions to be performed.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`destination`

 | 

`[PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#PartyType)`

 | 

Destination of the action.

 |
| 

`action_type`

 | 

`[ActionType](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#ActionType)`

 | 

Action type to be performed.

 |
| 

`other_action_type`

 | 

`str`

 | 

Other action type to be performed.

 |

## [](#InquiryInitiationResultData "Copy link to heading")InquiryInitiationResultData

cain.017.001.02 InquiryResponseV02 InquiryInitiationResultData holds the results of the processing of a card inquiry initiation request.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`processing_result`

 | 

`[ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#ProcessingResult)`

 | 

Outcome of processing of the inquiry.

 |
| 

`card_issuer_reference_data`

 | 

`str`

 | 

Transaction132.TransactionIdentification18.CardIssuerReferenceData  
Data supplied by a card issuer in an authorisation response, financial response message or  
in a chargeback transaction that the acquirer may be required to provide in subsequent  
transactions. ISO 8583:1993 and ISO 8583:2003 bit 95.  
This field is deprecated and scheduled for removal.

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#AdditionalAmount)]`

 | 

Transaction132.AdditionalAmount  
Additional amount information regarding the result of processing, including  
authorised amount and transactional fees.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional information regarding the result of processing that cannot be  
captured in the structured fields and/or other specific block.

 |

## [](#InquiryInitiationProcessingIndicators "Copy link to heading")InquiryInitiationProcessingIndicators

Contains all potential indicators present on an inquiry initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`card_input_data`

 | 

`[flows_api.card.common.indicators.CardInputData](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CardInputData)`

 | 

Indicators related to the card data provided in the inquiry initiation  
request itself.

 |
| 

`card`

 | 

`[flows_api.card.common.indicators.Card](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Card)`

 | 

Collection of indicators related to the Card resource that the inquiry initiation  
is targeting.

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

`cvc1`

 | 

`[flows_api.card.common.indicators.CVC1](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CVC1)`

 | 

CVC1 indicator

 |
| 

`cvc2`

 | 

`[flows_api.card.common.indicators.CVC2](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CVC2)`

 | 

CVC2 indicator

 |
| 

`pin`

 | 

`[flows_api.card.common.indicators.PIN](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#PIN)`

 | 

PIN indicator

 |
| 

`merchant_type`

 | 

`[flows_api.card.common.indicators.MerchantType](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#MerchantType)`

 | 

Merchant type indicator

 |
| 

`internal_error_encountered`

 | 

`bool`

 | 

Whether or not the inquiry initiation encountered an internal error prior to  
entering the Instruction Flow, e.g. in the scheme gateway.

 |
| 

`product_value_constraints_violated`

 | 

`bool`

 | 

Whether or not the inquiry initiation violated the scheme’s Product Value Constraints.

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
| 

`chip_cvc`

 | 

`[flows_api.card.common.indicators.ChipCVC](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#ChipCVC)`

 | 

Chip CVC indicator

 |

## [](#InquiryInitiationPreComputedValues "Copy link to heading")InquiryInitiationPreComputedValues

InquiryInitiationPreComputedValues are pre-computed for a Inquiry Initiation Instruction before it’s received in the Engine. This may be done for values that are cumbersome to compute in an Instruction Flow, and/or values that are scheme-specific and typically not configurable by clients. Flows will sometimes need to copy these values onto the Instruction response that it returns upstream, conditional on some processing result within the Flow. For example, the Approval Code should be copied onto the Instruction only if the Instruction is approved. For this reason, until these values have been copied over to the Instruction by the Flow, they should not be depended upon for any other purpose.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`approval_code`

 | 

`str`

 | 

Approval Code should be generated and set by issuers on Inquiry responses  
for approved Inquiry Initiations.

 |
| 

`expiry_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Expiry Timestamp is the time at which the Inquiry should expire, and  
its postings released in the core banking system.

 |

## [](#ActionType "Copy link to heading")ActionType

ActionType11Code Action type to be performed.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACTION_TYPE_UNKNOWN`

 | 

Action type is unknown.

 |
| 

`ACTION_TYPE_CONTACT_ISSUER`

 | 

Contact card issuer.

 |
| 

`ACTION_TYPE_CONTACT_ISSUER_SPECIAL_CONDITIONS`

 | 

Refer to card issuer’s special conditions.

 |
| 

`ACTION_TYPE_CONTACT_ACQUIRER`

 | 

Contact acquirer.

 |
| 

`ACTION_TYPE_CONTACT_ACQUIRER_SECURITY`

 | 

Card acceptor to call acquirer’s security department.

 |
| 

`ACTION_TYPE_CAPTURE_CARD`

 | 

Capture the card.

 |
| 

`ACTION_TYPE_CARDHOLDER_VERIFICATION`

 | 

Additional verification of cardholder required.

 |
| 

`ACTION_TYPE_VIP_ACCOUNT_MANAGEMENT`

 | 

Manage account as a VIP one.

 |
| 

`ACTION_TYPE_UPDATE_TRACK`

 | 

Track provided in the response must be updated on the card.

 |
| 

`ACTION_TYPE_RE_ENTER_TRANSACTION`

 | 

Transaction to be re-entered.

 |
| 

`ACTION_TYPE_OTHER_NATIONAL`

 | 

Other action defined at national level.

 |
| 

`ACTION_TYPE_OTHER_PRIVATE`

 | 

Other action defined at private level.

 |
| 

`ACTION_TYPE_SIGNATURE`

 | 

Signature required.

 |

## [](#AmountTypeCode "Copy link to heading")AmountTypeCode

ISO8583AmountTypeCode Type of amount

Enum values  
| Name | Description |
| --- | --- |
| 
`AMOUNT_TYPE_UNKNOWN`

 | 

Unknown amount type.

 |
| 

`AMOUNT_TYPE_AVAILABLE_BALANCE`

 | 

Available balance amount, value 02

 |
| 

`AMOUNT_TYPE_LEDGER_BALANCE`

 | 

Ledger balance amount, value 01

 |
| 

`AMOUNT_TYPE_AUTHORISED_AMOUNT`

 | 

Transaction amount that has been authorised.

 |
| 

`AMOUNT_TYPE_CARDHOLDER_BILLING_AMOUNT`

 | 

Cardholder billing amount

 |

## [](#CredentialIdentificationCode "Copy link to heading")CredentialIdentificationCode

Identification3Code Identification of the type of credential.

Enum values  
| Name | Description |
| --- | --- |
| 
`CREDENTIAL_IDENTIFICATION_UNKNOWN`

 | 

Unknown credential identification.

 |
| 

`CREDENTIAL_IDENTIFICATION_DRIVER_LICENCE_IDENTIFICATION`

 | 

Driver licence identification.

 |
| 

`CREDENTIAL_IDENTIFICATION_NATIONAL_IDENTIFIER`

 | 

National identification.

 |
| 

`CREDENTIAL_IDENTIFICATION_PASSPORT_NUMBER`

 | 

Passport number.

 |
| 

`CREDENTIAL_IDENTIFICATION_SOCIAL_SECURITY_NUMBER`

 | 

Social security number

 |
| 

`CREDENTIAL_IDENTIFICATION_ALIEN_REGISTRATION_NUMBER`

 | 

Alien registration number.

 |
| 

`CREDENTIAL_IDENTIFICATION_OTHER_PRIVATE`

 | 

Other identification provided at private level.

 |
| 

`CREDENTIAL_IDENTIFICATION_OTHER_NATIONAL`

 | 

Other identification assigned at national level.

 |
| 

`CREDENTIAL_IDENTIFICATION_EMAIL`

 | 

E-mail.

 |
| 

`CREDENTIAL_IDENTIFICATION_PHONE_NUMBER`

 | 

Phone number.

 |
| 

`CREDENTIAL_IDENTIFICATION_CUSTOMER_IDENTIFICATION`

 | 

Identification of customer.

 |
| 

`CREDENTIAL_IDENTIFICATION_TAX_IDENTIFIER`

 | 

Tax identifier.

 |
| 

`CREDENTIAL_IDENTIFICATION_PROXY`

 | 

Proxy.

 |

## [](#PartyType "Copy link to heading")PartyType

PartyType20Code Card domain type of party.

Enum values  
| Name | Description |
| --- | --- |
| 
`PARTY_TYPE_UNKNOWN`

 | 

Party type is unknown.

 |
| 

`PARTY_TYPE_ACCEPTOR`

 | 

Card acceptor, party accepting the card and presenting transaction data  
to the acquirer.

 |
| 

`PARTY_TYPE_ACQUIRER`

 | 

Entity acquiring card transactions.

 |
| 

`PARTY_TYPE_CARDHOLDER`

 | 

Holder of a payment card.

 |
| 

`PARTY_TYPE_CARD_ISSUER`

 | 

Party that issues cards.

 |
| 

`PARTY_TYPE_AGENT`

 | 

Entity providing card payment processing services acting as an intermediary  
between an acquirer and an issuer.

 |

## [](#ResultCode "Copy link to heading")ResultCode

Response8Code Set of possible results for processing of a card inquiry instruction.

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
| 

`RESULT_CODE_NO_REASON_TO_DECLINE`

 | 

Validate the data that could be verified.

 |

## [](#TypeOfAmountCode "Copy link to heading")TypeOfAmountCode

TypeofAmount21Code Type or class of amount.

Enum values  
| Name | Description |
| --- | --- |
| 
`TYPE_OF_AMOUNT_UNKNOWN`

 | 

Unknown type of amount.

 |
| 

`TYPE_OF_AMOUNT_INTERCHANGE_FEE`

 | 

Interchange fee.

 |
| 

`TYPE_OF_AMOUNT_PROCESSING_FEES`

 | 

Processing fees.

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

`TYPE_OF_AMOUNT_INTERNATIONAL_SERVICE_ASSESSMENT_FEES`

 | 

International service assessment fees.

 |
| 

`TYPE_OF_AMOUNT_CASH_BACK_INTERCHANGE_FEE`

 | 

Interchange fee applicable to cash back amount.

 |
| 

`TYPE_OF_AMOUNT_MAXIMUM_INTERCHANGE_FEE`

 | 

Maximum applicable interchange fee.

 |
| 

`TYPE_OF_AMOUNT_MINIMUM_INTERCHANGE_FEE`

 | 

Minimum interchange fee applicable.

 |