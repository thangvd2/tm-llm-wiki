---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/reversal"
title: "Card Reversals"
scraped_at: "2026-06-17T15:47:28.504Z"
images: 0
---

# Card Reversals

`flows_api.card.reversal` module

Card Reversals

## [](#ReversalInitiation "Copy link to heading")ReversalInitiation

ReversalInitiation holds a message regarding a request to reverse a card transaction, and a result data object that holds particular processing result data representing the outcome of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`[ReversalInitiationMessage](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ReversalInitiationMessage)`

 | 

Information representing the request message to be processed. Populated on creation  
of a new instruction. The contents of this object are based on the  
ISO20022 cain.005.001.03 message specification. Mandatory.

 |
| 

`result_data`

 | 

`[ReversalInitiationResultData](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ReversalInitiationResultData)`

 | 

Information regarding the result of processing of the reversal initiation message.  
Output only.

 |
| 

`processing_indicators`

 | 

`[ReversalInitiationProcessingIndicators](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ReversalInitiationProcessingIndicators)`

 | 

Results of processing steps that have already been performed on the Instruction,  
before the Instruction was sent to the Engine.  
Results of processing steps that have already been performed on the Instruction,  
before the Instruction was sent to the Engine.

 |
| 

`pre_computed_values`

 | 

`[ReversalInitiationPreComputedValues](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ReversalInitiationPreComputedValues)`

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

`completes_transaction`

 | 

`bool`

 | 

Indicates that this instruction completes the overall transaction and has settled or released  
any authorisation hold.

 |
| 

`message_v04`

 | 

`[flows_api.payloads.reversalinitiation.ReversalInitiationV04](/vault-payments/latest/EN/api/flows/flows_api/payloads/reversalinitiation#ReversalInitiationV04)`

 | 

Version 04 of the ReversalInitiation message.

 |

## [](#ReversalInitiationMessage "Copy link to heading")ReversalInitiationMessage

The ReversalInitiation message is sent by an acquirer, an originator or an agent to an issuer to request or advise of the reversal of an authorisation by the issuer. A reversal is a partial or complete nullification of the effects of a previous authorisation, financial presentment or financial accumulation presentment that cannot be processed as instructed (for example, is undeliverable and cancelled or the acquirer timed out waiting for a response). Represents a cain.005.001.03 message.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[Header](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Header)`

 | 

Information related to the management of the protocol. Mandatory.

 |
| 

`body`

 | 

`[Body](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Body)`

 | 

Information related to the reversal initiation. Mandatory.

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

Body - ReversalInitiation2 Information related to the authorisation initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`environment`

 | 

`[Environment](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Environment)`

 | 

Contains or describes the information pertaining to the actors interacting with the  
transaction. Mandatory.

 |
| 

`context`

 | 

`[Context](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Context)`

 | 

Contains or describes conditions and characteristics of the transaction. Mandatory.

 |
| 

`transaction`

 | 

`[Transaction](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Transaction)`

 | 

Card transaction for which an authorisation is requested. Mandatory.

 |
| 

`result_data`

 | 

`[ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ProcessingResult)`

 | 

Outcome of the processing of the authorisation.

 |

## [](#Environment "Copy link to heading")Environment

Environment19 Contains or describes the information pertaining to the actors interacting with the transaction.

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

`payer`

 | 

`[FinancialInstitutionAndCustomerIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#FinancialInstitutionAndCustomerIdentification)`

 | 

Person initiating a payment to the benefit of a payee.

 |
| 

`payee`

 | 

`[FinancialInstitutionAndCustomerIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#FinancialInstitutionAndCustomerIdentification)`

 | 

Person to the benefit of whom a payment is performed.  
ISO 8583 bit 98.

 |
| 

`terminal`

 | 

`[Terminal](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Terminal)`

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

`[Cardholder](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Cardholder)`

 | 

Cardholder performing the card payment transaction.

 |

## [](#FinancialInstitutionAndCustomerIdentification "Copy link to heading")FinancialInstitutionAndCustomerIdentification

Identification of a party consisting of a financial institution identification, and and a customer identification.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`financial_institution`

 | 

`[FinancialInstitution](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#FinancialInstitution)`

 | 

Financial institution-related data required by business and/or regulation.

 |
| 

`customer`

 | 

`[Customer](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Customer)`

 | 

Customer-related data required by business and/or regulation.

 |

## [](#FinancialInstitution "Copy link to heading")FinancialInstitution

Information related to a financial institution required by business or regulation (for example, in money or funds transfer).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Identification of the financial institution.

 |
| 

`name`

 | 

`str`

 | 

Name of the financial institution.

 |
| 

`address`

 | 

`[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)`

 | 

Address of the financial institution.

 |
| 

`email`

 | 

`str`

 | 

Electronic mail address of the financial institution.

 |
| 

`url_address`

 | 

`str`

 | 

Universal Resource Locator (URL) address of the financial institution.

 |
| 

`phone_number`

 | 

`str`

 | 

Phone number of the financial institution.

 |
| 

`customer_service`

 | 

`str`

 | 

Phone number of the customer services.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |

## [](#Customer "Copy link to heading")Customer

Identifies the customer in a transfer of money.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`customer_identification`

 | 

`str`

 | 

Identification of the customer assigned by a party.

 |
| 

`name`

 | 

`str`

 | 

Name of the financial customer.

 |
| 

`address`

 | 

`[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)`

 | 

Address of the financial customer.

 |
| 

`credentials`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Credentials](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Credentials)]`

 | 

Credentials of the financial customer.

 |
| 

`date_of_birth`

 | 

`str`

 | 

Date of birth of the party, in YYYY-MM-DD format.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data related to the customer.

 |

## [](#Credentials "Copy link to heading")Credentials

Credential information of a given party or person.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification_code`

 | 

`[CredentialIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#CredentialIdentification)`

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

## [](#Terminal "Copy link to heading")Terminal

Payment terminal or ATM performing the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`terminal_identification`

 | 

`[TerminalIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#TerminalIdentification)`

 | 

Identification of the terminal performing the transaction. Mandatory.

 |
| 

`capabilities`

 | 

`[Capabilities](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Capabilities)`

 | 

Capabilities of the terminal.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data regarding the terminal or ATM performing the transaction.

 |

## [](#TerminalIdentification "Copy link to heading")TerminalIdentification

Identification of the terminal performing the transaction.

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

## [](#Capabilities "Copy link to heading")Capabilities

Capabilities of the terminal.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`cardholder_verification_capabilities`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[CardholderVerificationCapability](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#CardholderVerificationCapability)]`

 | 

Cardholder verification capabilities performing the transaction at the point of  
service.

 |
| 

`card_capture_capable`

 | 

`bool`

 | 

Indicates whether the terminal can capture cards or not.

 |

## [](#CardholderVerificationCapability "Copy link to heading")CardholderVerificationCapability

Cardholder verification capabilities performing the transaction at the point of service. ISO 8583 bit 22-2.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`capability`

 | 

`[CardholderVerificationCapabilityCode](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#CardholderVerificationCapabilityCode)`

 | 

Cardholder verification capabilities performing the transaction at the point  
of service. Mandatory.

 |
| 

`other_capability`

 | 

`str`

 | 

Other types of cardholder verification capabilities.

 |

## [](#Cardholder "Copy link to heading")Cardholder

Unprotected sensitive detailed information about the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`cardholder_name`

 | 

`[CardholderName](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#CardholderName)`

 | 

Contains the registered cardholder name that the issuer knows to be  
correct.

 |
| 

`identification`

 | 

`[Credentials](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Credentials)`

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

Context14 Contains or describes conditions and characteristics of the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`point_of_service_context`

 | 

`[PointOfServiceContext](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#PointOfServiceContext)`

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

## [](#PointOfServiceContext "Copy link to heading")PointOfServiceContext

PointOfServiceContext5 Contains point of interaction information specific to a given transaction that may change from transaction to transaction.

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

`unattended_level_category`

 | 

`str`

 | 

Cardholder Activated Terminal unattended level category.

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

`[CardDataReadingCode](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#CardDataReadingCode)`

 | 

Entry mode of the card data for the transaction. Mandatory.  
ISO 8583:87 bit 22 (1-2).  
ISO 8583:93 bit 22 (7).

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

Transaction142 Card transaction for which an authorisation is requested.

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

`transaction_sub_type`

 | 

`str`

 | 

Provides the purpose of TransactionType in further detail.

 |
| 

`additional_services`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalService](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AdditionalService)]`

 | 

Additional functions or services to be performed in conjunction with the transaction.

 |
| 

`associated_data_reference`

 | 

`[AssociatedDataReference](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AssociatedDataReference)`

 | 

Reference to additional transaction details to be conveyed separately from this message.

 |
| 

`transaction_attribute`

 | 

`[TransactionAttribute](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#TransactionAttribute)`

 | 

Attribute of the transaction.  
ISO 8583:87 bit 25.

 |
| 

`message_reason`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

Reason to send the message.  
ISO 8583:93 bit 25.

 |
| 

`transaction_identification`

 | 

`[TransactionIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#TransactionIdentification)`

 | 

Identification of the transaction. Mandatory.

 |
| 

`dispute_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[DisputeData](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#DisputeData)]`

 | 

Information about the dispute.

 |
| 

`transaction_amounts`

 | 

`[TransactionAmounts](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#TransactionAmounts)`

 | 

Amounts of the card transaction. Mandatory.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AdditionalAmount)]`

 | 

Amounts that are not part of the transaction amount and not included in reconciliation.

 |
| 

`additional_fees`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalFee](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AdditionalFee)]`

 | 

Fees not included in the transaction amount.

 |
| 

`original_additional_fees`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalFee](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AdditionalFee)]`

 | 

Original fees not included in the original transaction amount.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional information that cannot be captured in the structured fields and/or  
other specific block.

 |

## [](#AdditionalService "Copy link to heading")AdditionalService

Additional functions or services to be performed in conjunction with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[AdditionalServiceType](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AdditionalServiceType)`

 | 

Type of additional service applied to the transaction.

 |
| 

`other_type`

 | 

`str`

 | 

Other additional service applied to the transaction.

 |

## [](#AssociatedDataReference "Copy link to heading")AssociatedDataReference

In ISO20022 this is a string, but this format better preserves the structure of DE108 in order to be able to reproduce it in a response. Processing on F4 is skipped due to potentially unrecognised character sets. See VP-18795.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`f1`

 | 

`Dict[str, str]`

 | 

F1

 |
| 

`f2`

 | 

`Dict[str, str]`

 | 

F2

 |
| 

`f3`

 | 

`Dict[str, str]`

 | 

F3

 |
| 

`f5`

 | 

`Dict[str, str]`

 | 

F5

 |

## [](#TransactionIdentification "Copy link to heading")TransactionIdentification

Identification of the transaction

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
| 

`original_data_elements`

 | 

`[flows_api.card.common.OriginalDataElements](/vault-payments/latest/EN/api/flows/flows_api/card/common#OriginalDataElements)`

 | 

Data elements contained in the original message, if applicable.

 |

## [](#DisputeData "Copy link to heading")DisputeData

Information about the dispute.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`PresentmentCycle`

 | 

`str`

 | 

Indicates the cycle of presentment or of the chargeback  
(1= first cycle for chargeback, 2= second cycle of presentment or chargeback, etc.).

 |

## [](#TransactionAmounts "Copy link to heading")TransactionAmounts

Amounts of the card transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
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
| 

`reconciliation_amount`

 | 

`[flows_api.card.common.AmountAndExchangeRate](/vault-payments/latest/EN/api/flows/flows_api/card/common#AmountAndExchangeRate)`

 | 

Amount used for reconciliation.

 |
| 

`original_transaction_amounts`

 | 

`[OriginalTransactionAmounts](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#OriginalTransactionAmounts)`

 | 

Amount related to the original transaction.  
ISO 8583:87 bit 95.  
ISO 8583:93/2003 bit 30.

 |

## [](#OriginalTransactionAmounts "Copy link to heading")OriginalTransactionAmounts

OriginalTransactionAmount2 Amount related to the original transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount_qualifier`

 | 

`[AmountQualifier](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AmountQualifier)`

 | 

Indicates type of amount

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
| 

`reconciliation_amount`

 | 

`[flows_api.card.common.AmountAndExchangeRate](/vault-payments/latest/EN/api/flows/flows_api/card/common#AmountAndExchangeRate)`

 | 

Amount used for reconciliation.

 |

## [](#AdditionalAmount "Copy link to heading")AdditionalAmount

Amounts that are not part of the transaction amount and not included in reconciliation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[TypeOfAmount](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#TypeOfAmount)`

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
| 

`amount`

 | 

`[flows_api.common.CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/common#CurrencyAndAmount)`

 | 

Amount of one occurrence of the breakdown amount.

 |

## [](#AdditionalFee "Copy link to heading")AdditionalFee

Card Transactions Fees not included in the main transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[TypeOfFee](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#TypeOfFee)`

 | 

Type or class of fee. Mandatory.

 |
| 

`other_type`

 | 

`str`

 | 

Additional information to specify the type of amount of fee.

 |
| 

`fee_program`

 | 

`str`

 | 

Identification of fee program.

 |
| 

`fee_descriptor`

 | 

`str`

 | 

Identification of specific fee.

 |
| 

`amount`

 | 

`[flows_api.card.common.FeeAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#FeeAmount)`

 | 

Amount of one occurrence of the fee amount. Mandatory.

 |
| 

`fee_reconciliation_amount`

 | 

`[flows_api.card.common.FeeAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#FeeAmount)`

 | 

Contains the fee amount in reconciliation currency.

 |
| 

`label`

 | 

`str`

 | 

Short description of the fee amount.

 |

## [](#ProcessingResult "Copy link to heading")ProcessingResult

Outcome of the processing of the authorisation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`response_source`

 | 

`[ResponseSource](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ResponseSource)`

 | 

Information about the entity that provides the response.

 |
| 

`result_data`

 | 

`[ResultData](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ResultData)`

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Action](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#Action)]`

 | 

Set of actions to be performed.

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
| 

`type`

 | 

`[flows_api.card.common.PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyType)`

 | 

Type of entity having declined or delivered the card payment authorisation.  
PartyType26Code.

 |
| 

`other_type`

 | 

`str`

 | 

Other type of party.

 |

## [](#ResultData "Copy link to heading")ResultData

Result of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`result`

 | 

`[ResultCode](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ResultCode)`

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

Set of actions to be performed.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`destination`

 | 

`[flows_api.card.common.PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyType)`

 | 

Destination of the action. PartyType20Code.

 |
| 

`action_type`

 | 

`[ActionType](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ActionType)`

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

## [](#ReversalInitiationResultData "Copy link to heading")ReversalInitiationResultData

ReversalResponseV03 ReversalInitiationResultData holds the results of the processing of a card financial initiation request. It is based on a subset of fields available in an ISO20022 cain.006.001 message. All fields and sub fields are based on the ISO20022 specification.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`processing_result`

 | 

`[ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ProcessingResult)`

 | 

Outcome of processing of the authorisation.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#AdditionalAmount)]`

 | 

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

## [](#ReversalInitiationProcessingIndicators "Copy link to heading")ReversalInitiationProcessingIndicators

Contains all potential indicators present on a reversal initiation.

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

Indicators related to the card data provided in the reversal initiation  
request itself.

 |
| 

`card`

 | 

`[flows_api.card.common.indicators.Card](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Card)`

 | 

Collection of indicators related to the Card resource that the reversal initiation  
is targeting.

 |
| 

`internal_error_encountered`

 | 

`bool`

 | 

Whether or not the authorisation initiation encountered an internal error prior to  
entering the Instruction Flow, e.g. in the scheme gateway.

 |

## [](#ReversalInitiationPreComputedValues "Copy link to heading")ReversalInitiationPreComputedValues

ReversalInitiationPreComputedValues are pre-computed for a Reversal Initiation Instruction before it’s received in the Engine. This may be done for values that are cumbersome to compute in an Instruction Flow, and/or values that are scheme-specific and typically not configurable by clients. Flows will sometimes need to copy these values onto the Instruction response that it returns upstream, conditional on some processing result within the Flow. For example, the Approval Code should be copied onto the Instruction only if the Instruction is approved. For this reason, until these values have been copied over to the Instruction by the Flow, they should not be depended upon for any other purpose.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`expiry_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Expiry Timestamp is the time at which the Authorisation on which the Reversal acts  
should expire, and its postings released in the core banking system.

 |

## [](#ActionType "Copy link to heading")ActionType

Action type to be performed.

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

## [](#AdditionalServiceType "Copy link to heading")AdditionalServiceType

Type of additional service applied to the transaction.

Enum values  
| Name | Description |
| --- | --- |
| 
`ADDITIONAL_SERVICE_TYPE_UNKNOWN`

 | 

Unknown additional service type.

 |
| 

`ADDITIONAL_SERVICE_TYPE_CARD_ACTIVATION`

 | 

Card activation.

 |
| 

`ADDITIONAL_SERVICE_TYPE_CASH_BACK`

 | 

Purchase of goods or services with cashback.

 |
| 

`ADDITIONAL_SERVICE_TYPE_DCC`

 | 

Dynamic Currency Conversion (DCC).

 |
| 

`ADDITIONAL_SERVICE_TYPE_INSTANT_PAYMENT`

 | 

Instant payment from a cardholder’s account to an acceptor’s account.

 |
| 

`ADDITIONAL_SERVICE_TYPE_INSTANT_TRANSFER`

 | 

Instant transfer of funds from a payer’s account to a payee’s account.

 |
| 

`ADDITIONAL_SERVICE_TYPE_LOYALTY`

 | 

Loyalty services.

 |
| 

`ADDITIONAL_SERVICE_TYPE_OTHER_NATIONAL`

 | 

Other type of additional service at national level.

 |
| 

`ADDITIONAL_SERVICE_TYPE_OTHER_PRIVATE`

 | 

Other type of additional service at private level.

 |
| 

`ADDITIONAL_SERVICE_TYPE_PRE_STAGED_TRANSACTION`

 | 

Withdrawal transaction was preauthorised by another channel (amount  
could be absent).

 |

## [](#AmountQualifier "Copy link to heading")AmountQualifier

TypeOfAmount22Code Amount qualifier

Enum values  
| Name | Description |
| --- | --- |
| 
`AMOUNT_QUALIFIER_UNKNOWN`

 | 

Unknown amount type.

 |
| 

`AMOUNT_QUALIFIER_ACTUAL`

 | 

Actual amount.

 |
| 

`AMOUNT_QUALIFIER_DEFAULT`

 | 

Default amount.

 |
| 

`AMOUNT_QUALIFIER_DEPOSIT`

 | 

Deposit amount.

 |
| 

`AMOUNT_QUALIFIER_ESTIMATED`

 | 

Estimated amount (the final amount could be above or below).

 |
| 

`AMOUNT_QUALIFIER_MAXIMUM`

 | 

Maximum amount (the final amount must be less or equal).

 |
| 

`AMOUNT_QUALIFIER_PROXY`

 | 

Substitute for an amount to be authorised.

 |
| 

`AMOUNT_QUALIFIER_RESERVED`

 | 

Reserved or updated reserved amount for reservation.

 |

## [](#CardDataReadingCode "Copy link to heading")CardDataReadingCode

Card reading capabilities of the terminal performing the transaction.

Enum values  
| Name | Description |
| --- | --- |
| 
`CARD_DATA_READING_CAPABILITIES_UNKNOWN`

 | 

The card data reading cababilities are unknown.

 |
| 

`CARD_DATA_READING_CAPABILITIES_CARD_ON_FILE`

 | 

Card information is stored on file.

 |
| 

`CARD_DATA_READING_CAPABILITIES_ICC_PROXIMITY`

 | 

ICC contactless proximity.

 |
| 

`CARD_DATA_READING_CAPABILITIES_MAGNETIC_STRIPE`

 | 

Magnetic stripe.

 |
| 

`CARD_DATA_READING_CAPABILITIES_ICC_CONTACT`

 | 

ICC contact capability.

 |
| 

`CARD_DATA_READING_CAPABILITIES_MAGNETIC_INK_CHARACTER_RECOGNITION`

 | 

Recognition of magnetic ink characters.

 |
| 

`CARD_DATA_READING_CAPABILITIES_MANUAL_ENTRY`

 | 

Manual, no terminal used.

 |
| 

`CARD_DATA_READING_CAPABILITIES_OPTICAL_CHARACTER_RECOGNITION`

 | 

OCR either at time of transaction or after the event.

 |
| 

`CARD_DATA_READING_CAPABILITIES_MSI_PROXIMITY`

 | 

Magstripe image contactless proximity.

 |
| 

`CARD_DATA_READING_CAPABILITIES_OPTICAL_CODE`

 | 

Optical coded reading capabilities (e.g. barcode, QR code, etc.).

 |
| 

`CARD_DATA_READING_CAPABILITIES_OTHER_NATIONAL`

 | 

Other national capability type assigned at national level.

 |
| 

`CARD_DATA_READING_CAPABILITIES_RFID_TAG`

 | 

Radio Frequency Identification tag capabilities.

 |
| 

`CARD_DATA_READING_CAPABILITIES_UNSPECIFIED`

 | 

Unspecified capability.

 |
| 

`CARD_DATA_READING_CAPABILITIES_OTHER_PRIVATE`

 | 

Other card reading capability assigned on a private basis.

 |
| 

`CARD_DATA_READING_CAPABILITIES_KEY_ENTERED`

 | 

Key entered.

 |

## [](#CardholderVerificationCapabilityCode "Copy link to heading")CardholderVerificationCapabilityCode

Capability of verifying the cardholder’s identity or authenticity.

Enum values  
| Name | Description |
| --- | --- |
| 
`CARDHOLDER_VERIFICATION_CAPABILITY_UNKNOWN`

 | 

Unknown verification capability.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_ACCOUNT_DIGITAL_SIGNATURE`

 | 

Account based digital signature.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_NO_CAPABILITIES`

 | 

No cardholder verification capability.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OFFLINE_BIOGRAPHICS`

 | 

Offline biographics.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OFFLINE_BIO`

 | 

Offline bio466.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OFFLINE_DIGITAL_SIGNATURE`

 | 

Offline digital signature analysis.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OFFLINE_PIN_CLEAR`

 | 

Offline PIN in clear (Personal Identification Number).

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OFFLINE_PIN_ENCRYPTION`

 | 

Offline PIN encrypted (Personal Identification Number).

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_ONLINE_BIOMETRICS`

 | 

Online biometrics.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_ONLINE_PIN`

 | 

Online PIN (Personal Identification Number).

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OTHER_NATIONAL`

 | 

Other type of cardholder verification defined at national level.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_OTHER_PRIVATE`

 | 

Other type of cardholder verification defined in a private manner.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_SIGNATURE`

 | 

Handwritten signature verification.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_UNSPECIFIED`

 | 

Cardholder verification capability unspecified.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_VOICE_RECOGNITION`

 | 

Recognition by voice.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_PKI_SIGNATURE`

 | 

PKI (Public Key Infrastructure) based digital signature.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_NO_PIN_ENTRY`

 | 

Device has no pin entry capability.

 |
| 

`CARDHOLDER_VERIFICATION_CAPABILITY_NO_ONLINE_PIN_ENTRY`

 | 

Device has no online pin entry capability.

 |

## [](#CredentialIdentification "Copy link to heading")CredentialIdentification

Identification of the type of credential.

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

## [](#ResultCode "Copy link to heading")ResultCode

Set of possible results for processing of a card authorisation instruction.

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

## [](#TransactionAttribute "Copy link to heading")TransactionAttribute

Attribute of the transaction.

Enum values  
| Name | Description |
| --- | --- |
| 
`TRANSACTION_ATTRIBUTE_UNKNOWN`

 | 

Unknown transaction attribute.

 |
| 

`TRANSACTION_ATTRIBUTE_AGGREGATION`

 | 

Payment is an aggregation one.

 |
| 

`TRANSACTION_ATTRIBUTE_CARDLESS_ATM_CASH_DISBURSEMENT`

 | 

Withdrawal is a cardless cash disbursement one.

 |
| 

`TRANSACTION_ATTRIBUTE_DEBT_REPAYMENT`

 | 

Payment is a debt repayment one.

 |
| 

`TRANSACTION_ATTRIBUTE_DEFERRED_PAYMENT`

 | 

Payment is a deferred one.

 |
| 

`TRANSACTION_ATTRIBUTE_INSTALMENT`

 | 

Payment is an instalment one.

 |
| 

`TRANSACTION_ATTRIBUTE_OTHER_NATIONAL`

 | 

Attribute defined at national level.

 |
| 

`TRANSACTION_ATTRIBUTE_OTHER_PRIVATE`

 | 

Attribute defined at private level.

 |
| 

`TRANSACTION_ATTRIBUTE_RECURRING_PAYMENT`

 | 

An occurrence of a recurring payment.

 |
| 

`TRANSACTION_ATTRIBUTE_TOP_UP`

 | 

Service to replenish value in an account (for example, mobile account, prepaid  
account, etc.).

 |
| 

`TRANSACTION_ATTRIBUTE_PRE_PAYMENT`

 | 

Payment in advance of receiving goods or services.

 |
| 

`TRANSACTION_ATTRIBUTE_INCREMENTAL`

 | 

To authorise additional amounts for a previously authorised transaction.

 |
| 

`TRANSACTION_ATTRIBUTE_PRE_AUTHORISATION`

 | 

Preauthorisation for an amount which is unknown at the time when the  
transaction is initiated and to be cleared within a specified timeframe.

 |
| 

`TRANSACTION_ATTRIBUTE_PRE_AUTHOIRSATION_COMPLETION`

 | 

Financial completion of a pre-authorised transaction within a specified timeframe.

 |
| 

`TRANSACTION_ATTRIBUTE_SUBSEQUENT_RECURRING`

 | 

Subsequent occurrence of a recurring payment.

 |
| 

`TRANSACTION_ATTRIBUTE_FIRST_RECURRING`

 | 

First occurence of a recurring payment.

 |
| 

`TRANSACTION_ATTRIBUTE_COMPLETION`

 | 

Transaction previously initiated is completed and contains the actual amount.

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

## [](#TypeOfFee "Copy link to heading")TypeOfFee

Type or class of fee.

Enum values  
| Name | Description |
| --- | --- |
| 
`TYPE_OF_FEE_UNKNOWN`

 | 

Unknown type of fee.

 |
| 

`TYPE_OF_FEE_INTERCHANGE_FEE`

 | 

Interchange fee.

 |
| 

`TYPE_OF_FEE_PROCESSING_FEES`

 | 

Processing fees.

 |
| 

`TYPE_OF_FEE_OTHER_NATIONAL`

 | 

Other type of amount defined at national level.

 |
| 

`TYPE_OF_FEE_OTHER_PRIVATE`

 | 

Other type of amount defined at private level.

 |
| 

`TYPE_OF_FEE_INTERNATIONAL_SERVICE_ASSESMENT_FEES`

 | 

International service assessment fees.

 |