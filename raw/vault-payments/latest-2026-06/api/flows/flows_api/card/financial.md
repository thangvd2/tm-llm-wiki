---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/financial"
title: "Financial initiation"
scraped_at: "2026-06-17T15:47:24.919Z"
images: 0
---

# Financial initiation

`flows_api.card.financial` module

Financial initiation

## [](#FinancialInitiation "Copy link to heading")FinancialInitiation

FinancialInitiation message is sent by an acquirer or an agent to an issuer to request the clearing of a pre-authorised transaction. Represents an ISO20022 cain.003.001.02 message.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`[FinancialInitiationMessage](/vault-payments/latest/EN/api/flows/flows_api/card/financial#FinancialInitiationMessage)`

 | 

Information representing the request message to be processed. Populated on creation  
of a new instruction. The contents of this object are based on the  
ISO20022 cain.003.001.02 message specification. Mandatory.

 |
| 

`result_data`

 | 

`[FinancialInitiationResultData](/vault-payments/latest/EN/api/flows/flows_api/card/financial#FinancialInitiationResultData)`

 | 

Information regarding the processing result of the financial initiation message.  
Contains data required for constructing scheme facing response messages. Output only.

 |
| 

`addenda`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.addendum.AddendumInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#AddendumInitiation)]`

 | 

Information representing the request message to be processed. Populated on creation  
of a new instruction. The contents of this object are based on the  
ISO20022 cain.025.001.02 message specification. Optional.

 |
| 

`processing_indicators`

 | 

`[FinancialInitiationProcessingIndicators](/vault-payments/latest/EN/api/flows/flows_api/card/financial#FinancialInitiationProcessingIndicators)`

 | 

Results of processing steps that have already been performed on the Instruction,  
before the Instruction was sent to the Engine.

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

`[flows_api.payloads.financialinitiation.FinancialInitiationV04](/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinitiation#FinancialInitiationV04)`

 | 

Version 04 of the FinancialInitiation message.

 |

## [](#FinancialInitiationMessage "Copy link to heading")FinancialInitiationMessage

FinancialInitiation message is sent by an acquirer or an agent to an issuer to request the clearing of a pre-authorised transaction. Represents an ISO20022 cain.003.001.02 message.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[Header](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Header)`

 | 

Information related to the management of the protocol. Mandatory.

 |
| 

`body`

 | 

`[Body](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Body)`

 | 

Information related to the authorisation initiation. Mandatory.

 |

## [](#Header "Copy link to heading")Header

Information related to the management of the protocol.

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

Information related to the authorisation initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`environment`

 | 

`[Environment](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Environment)`

 | 

Contains or describes the information pertaining to the actors interacting with the  
transaction. Mandatory.

 |
| 

`context`

 | 

`[Context](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Context)`

 | 

Contains or describes conditions and characteristics of the transaction. Mandatory.

 |
| 

`transaction`

 | 

`[Transaction](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Transaction)`

 | 

Card transaction for which an authorisation is requested. Mandatory.

 |
| 

`processing_result`

 | 

`[flows_api.card.common.ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/common#ProcessingResult)`

 | 

Outcome of processing of the authorisation.  
Relates to the Initiation message rather than the Response.

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

`original_transaction`

 | 

`[OriginalTransaction](/vault-payments/latest/EN/api/flows/flows_api/card/financial#OriginalTransaction)`

 | 

Contains details of the transaction to be retrieved. Only relevant to Financial Initiations.

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

Contains or describes the information pertaining to the actors interacting with the transaction.

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

`originator`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identifies the originator of the transaction.

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

`destination`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identifies the destination of the transaction.

 |
| 

`payer`

 | 

`[flows_api.card.common.FinancialInstitutionAndCustomerIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#FinancialInstitutionAndCustomerIdentification)`

 | 

Person initiating a payment to the benefit of a payee.

 |
| 

`payee`

 | 

`[flows_api.card.common.FinancialInstitutionAndCustomerIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#FinancialInstitutionAndCustomerIdentification)`

 | 

Person to the benefit of whom a payment is performed.  
ISO 8583 bit 98.

 |
| 

`terminal`

 | 

`[flows_api.card.common.Terminal](/vault-payments/latest/EN/api/flows/flows_api/card/common#Terminal)`

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

`[flows_api.card.common.Cardholder](/vault-payments/latest/EN/api/flows/flows_api/card/common#Cardholder)`

 | 

Cardholder performing the card payment transaction.

 |
| 

`token`

 | 

`[Token](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Token)`

 | 

Token contains details of payment token.

 |
| 

`wallet`

 | 

`[Wallet](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Wallet)`

 | 

Wallet is a container for tenders used by the customer to perform the payment transaction.

 |
| 

`issuer`

 | 

`[Issuer](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Issuer)`

 | 

Information related to the issuer.

 |
| 

`customer_device`

 | 

`[CustomerDevice](/vault-payments/latest/EN/api/flows/flows_api/card/financial#CustomerDevice)`

 | 

Identification of the customer device performing the transaction.

 |

## [](#Token "Copy link to heading")Token

Token2 Token contains details of payment token.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_token`

 | 

`str`

 | 

Actual payment token.

 |
| 

`token_expiry_date`

 | 

`str`

 | 

Expiry date of the token in the YYYY-MM format.

 |
| 

`token_requestor_identification`

 | 

`str`

 | 

Identification of the token requestor.

 |
| 

`token_assurance_data`

 | 

`str`

 | 

Supporting information for the Token Assurance Method.

 |
| 

`token_assurance_method`

 | 

`[TokenAssuranceMethod](/vault-payments/latest/EN/api/flows/flows_api/card/financial#TokenAssuranceMethod)`

 | 

The token assurance method.

 |
| 

`token_initiated_indicator`

 | 

`bool`

 | 

Token initiated indicator.

 |
| 

`other_storage_location`

 | 

`[OtherStorageLocation](/vault-payments/latest/EN/api/flows/flows_api/card/financial#OtherStorageLocation)`

 | 

Other storage location.

 |
| 

`other_protection_method`

 | 

`[OtherProtectionMethod](/vault-payments/latest/EN/api/flows/flows_api/card/financial#OtherProtectionMethod)`

 | 

Other protection method.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data.

 |

## [](#Wallet "Copy link to heading")Wallet

Wallet2 Wallet is a container for tenders used by the customer to perform the payment transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`provider`

 | 

`[Provider](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Provider)`

 | 

Provider is the identification of the provider of the wallet.

 |
| 

`other_card_data_entry_mode`

 | 

`str`

 | 

Other card data entry mode.

 |
| 

`wallet_provider_risk_assessment_model_version`

 | 

`str`

 | 

Wallet provider risk assessment model version.

 |
| 

`wallet_provider_device_score`

 | 

`int`

 | 

Wallet provider device score.

 |
| 

`wallet_provider_account_score`

 | 

`int`

 | 

Wallet provider account score.

 |
| 

`wallet_provider_risk_assessment`

 | 

`[WalletProviderRiskAssessment](/vault-payments/latest/EN/api/flows/flows_api/card/financial#WalletProviderRiskAssessment)`

 | 

Wallet provider risk assessment.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data.

 |

## [](#Provider "Copy link to heading")Provider

PartyIdentification258. Provider is the identification of the provider of the wallet.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`[WalletProviderIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/financial#WalletProviderIdentification)`

 | 

The identification of the provider.

 |

## [](#Issuer "Copy link to heading")Issuer

PartyIdentification263 contains the identification of a party.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`local_data`

 | 

`[LocalData](/vault-payments/latest/EN/api/flows/flows_api/card/financial#LocalData)`

 | 

Issuer local data.

 |

## [](#LocalData "Copy link to heading")LocalData

LocalData1.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |
| 

`language`

 | 

`str`

 | 

The language code conforming to ISO 639-1 that identifies the language in which the fields  
are expressed in this component.

 |

## [](#CustomerDevice "Copy link to heading")CustomerDevice

CustomerDevice4 contains the details of the customer device.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`device`

 | 

`[Device](/vault-payments/latest/EN/api/flows/flows_api/card/financial#Device)`

 | 

The customer device.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |

## [](#Device "Copy link to heading")Device

Device2

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`device_name`

 | 

`str`

 | 

The name of the device.

 |
| 

`ip_address`

 | 

`str`

 | 

The IP address of the device.

 |
| 

`geographic_location`

 | 

`str`

 | 

The geographic location of the device.

 |

## [](#Context "Copy link to heading")Context

Contains or describes conditions and characteristics of the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`point_of_service_context`

 | 

`[PointOfServiceContext](/vault-payments/latest/EN/api/flows/flows_api/card/financial#PointOfServiceContext)`

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

`risk_context`

 | 

`[RiskContext](/vault-payments/latest/EN/api/flows/flows_api/card/financial#RiskContext)`

 | 

Context of the risk associated with the transaction. Deprecated, use RiskContexts.

 |
| 

`verification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.Verification](/vault-payments/latest/EN/api/flows/flows_api/card/common#Verification)]`

 | 

Validation result and/or data to be validated.

 |
| 

`risk_contexts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.RiskContext](/vault-payments/latest/EN/api/flows/flows_api/card/common#RiskContext)]`

 | 

Context of the risk associated with the transaction.

 |

## [](#PointOfServiceContext "Copy link to heading")PointOfServiceContext

Contains point of interaction information specific to a given transaction that may change from transaction to transaction.

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

Transaction category level on an unattended terminal.  
ISO 8583:87 bit 61 (10).

 |
| 

`ecommerce_indicator`

 | 

`bool`

 | 

Indicates whether the point of service is an e-commerce one or not.

 |
| 

`ecommerce_data`

 | 

`Dict[str, str]`

 | 

Contains electronic commerce data.

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

## [](#RiskContext "Copy link to heading")RiskContext

RiskContext2 Context of the risk associated with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`risk_input_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RiskInputDatum](/vault-payments/latest/EN/api/flows/flows_api/card/financial#RiskInputDatum)]`

 | 

Input data to be considered in a risk assessment.

 |
| 

`risk_assessment`

 | 

`[RiskAssessment](/vault-payments/latest/EN/api/flows/flows_api/card/financial#RiskAssessment)`

 | 

Indicates to the card issuer the level of risk associated with the transaction. Deprecated,  
use RiskAssessments.

 |
| 

`risk_assessments`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RiskAssessment](/vault-payments/latest/EN/api/flows/flows_api/card/financial#RiskAssessment)]`

 | 

Indicates to the card issuer the level of risk associated with the transaction.

 |

## [](#RiskInputDatum "Copy link to heading")RiskInputDatum

RiskInputData1 Input data to be considered in a risk assessment.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`entity`

 | 

`[RiskEntity](/vault-payments/latest/EN/api/flows/flows_api/card/financial#RiskEntity)`

 | 

Entity providing the information required for a risk assessment.

 |
| 

`type`

 | 

`str`

 | 

Identifies the type of risk assessment associated with the input data in the message.

 |
| 

`value`

 | 

`str`

 | 

Value of input data for risk assessment.

 |

## [](#RiskEntity "Copy link to heading")RiskEntity

Entity providing the information required for a risk assessment.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/financial#PartyType)`

 | 

Type of entity providing data for risk assessment. PartyType28Code.

 |

## [](#RiskAssessment "Copy link to heading")RiskAssessment

RiskAssessment2 Indicates to the card issuer the level of risk associated with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`risk_assessment_entity`

 | 

`[flows_api.card.common.GenericIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#GenericIdentification)`

 | 

Entity providing an intermediate result of a risk assessment process.

 |
| 

`high_risk_transaction`

 | 

`bool`

 | 

Transaction is identified as high risk.

 |
| 

`reason`

 | 

`str`

 | 

Reason

 |

## [](#Transaction "Copy link to heading")Transaction

Card transaction for which an authorisation is requested.

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.AdditionalService](/vault-payments/latest/EN/api/flows/flows_api/card/common#AdditionalService)]`

 | 

Additional functions or services to be performed in conjunction with the transaction.

 |
| 

`transaction_attribute`

 | 

`[flows_api.card.common.TransactionAttribute](/vault-payments/latest/EN/api/flows/flows_api/card/common#TransactionAttribute)`

 | 

Attribute of the transaction.  
ISO 8583:87 bit 25.

 |
| 

`other_transaction_attribute`

 | 

`str`

 | 

Other transaction attribute defined at national or private level.

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

`[TransactionIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/financial#TransactionIdentification)`

 | 

Identification of the transaction. Mandatory.

 |
| 

`dispute_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[DisputeData](/vault-payments/latest/EN/api/flows/flows_api/card/financial#DisputeData)]`

 | 

Information about the dispute.

 |
| 

`transaction_amounts`

 | 

`[flows_api.card.common.TransactionAmounts](/vault-payments/latest/EN/api/flows/flows_api/card/common#TransactionAmounts)`

 | 

Amounts of the card transaction. Mandatory.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#AdditionalAmount)]`

 | 

Amounts that are not part of the transaction amount and not included in reconciliation.

 |
| 

`additional_fees`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.AdditionalFee](/vault-payments/latest/EN/api/flows/flows_api/card/common#AdditionalFee)]`

 | 

Fees not included in the transaction amount.

 |
| 

`account_from`

 | 

`[AccountDetails](/vault-payments/latest/EN/api/flows/flows_api/card/financial#AccountDetails)`

 | 

Identifies a customer account or a relationship to its account affected for debit,  
inquiries and the source of funding for transfers.

 |
| 

`account_to`

 | 

`[AccountDetails](/vault-payments/latest/EN/api/flows/flows_api/card/financial#AccountDetails)`

 | 

Identifies a customer account or a relationship to its account affected for credits,  
inquiries and the destination account for funds transfers.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional information regarding the transaction that cannot be captured in structured  
fields.

 |

## [](#TransactionIdentification "Copy link to heading")TransactionIdentification

TransactionIdentification16 Identification of the transaction

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

`acquirer_reference_data`

 | 

`str`

 | 

Data supplied by an acquirer in an authorisation or financial request, advice or  
notification that may be required to be provided in a subsequent transaction.  
ISO 8583:93 bit 31

 |
| 

`acquirer_reference_number`

 | 

`str`

 | 

Data supplied by an acquirer to assist in identifying a transaction (for example,  
for researching retrievals and chargebacks).  
ISO 8583:2003 bit 31

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

## [](#OriginalTransaction "Copy link to heading")OriginalTransaction

Contains details of the transaction to be retrieved.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`processing_result`

 | 

`[flows_api.card.common.ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/common#ProcessingResult)`

 | 

Outcome of the processing of the authorisation.

 |

## [](#FinancialInitiationResultData "Copy link to heading")FinancialInitiationResultData

FinancialResponseV02, FinancialResponseV03 FinancialInitiationResultData holds the results of the processing of a card financial initiation request. It is based on a subset of fields available in an ISO20022 cain.004.001 message. All fields and sub fields are based on the ISO20022 specification.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`processing_result`

 | 

`[flows_api.card.common.ProcessingResult](/vault-payments/latest/EN/api/flows/flows_api/card/common#ProcessingResult)`

 | 

Outcome of processing of the authorisation.

 |
| 

`account_balance`

 | 

`[AccountBalance](/vault-payments/latest/EN/api/flows/flows_api/card/financial#AccountBalance)`

 | 

Balance of the account involved in the card transaction, if requested.

 |
| 

`card_issuer_reference_data`

 | 

`str`

 | 

Data supplied by a card issuer in an authorisation response, financial response message or  
in a chargeback transaction that the acquirer may be required to provide in subsequent  
transactions. This field is deprecated and scheduled for removal.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.AdditionalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#AdditionalAmount)]`

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

## [](#AccountBalance "Copy link to heading")AccountBalance

Balance of the account involved in the card transaction

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_type`

 | 

`str`

 | 

Account type for which a balance is sought.

 |
| 

`balance`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.card.common.Balance](/vault-payments/latest/EN/api/flows/flows_api/card/common#Balance)]`

 | 

Balance of the account.

 |

## [](#FinancialInitiationProcessingIndicators "Copy link to heading")FinancialInitiationProcessingIndicators

Contains all potential indicators present on a financial initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`card_input_data`

 | 

`[flows_api.card.common.indicators.CardInputData](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CardInputData)`

 | 

Indicators related to the card data provided in the financial initiation  
request itself.

 |
| 

`card`

 | 

`[flows_api.card.common.indicators.Card](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Card)`

 | 

Collection of indicators related to the Card resource that the financial initiation  
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

## [](#OtherProtectionMethod "Copy link to heading")OtherProtectionMethod

OtherProtectionMethod is an ISO 20022 free text field for defining other protection method for Token2.

Enum values  
| Name | Description |
| --- | --- |
| 
`OTHER_PROTECTION_METHOD_UNKNOWN`

 | 

Unknown

 |
| 

`OTHER_PROTECTION_METHOD_SECURE_ELEMENT`

 | 

Secure Element

 |
| 

`OTHER_PROTECTION_METHOD_CLOUD_BASED`

 | 

Cloud Based

 |
| 

`OTHER_PROTECTION_METHOD_STATIC`

 | 

Static

 |

## [](#OtherStorageLocation "Copy link to heading")OtherStorageLocation

OtherStorageLocation is an ISO 20022 free text field for defining other storage location for Token2.

Enum values  
| Name | Description |
| --- | --- |
| 
`OTHER_STORAGE_LOCATION_UNKNOWN`

 | 

Unknown

 |
| 

`OTHER_STORAGE_LOCATION_DEVICE_MEMORY`

 | 

Device Memory

 |
| 

`OTHER_STORAGE_LOCATION_DEVICE_MEMORY_PROTECTED_BY_TRUSTED_PLATFORM_MODULE`

 | 

Device Memory Protected By Trusted Platform Module

 |
| 

`OTHER_STORAGE_LOCATION_SERVER`

 | 

Server

 |
| 

`OTHER_STORAGE_LOCATION_TRUSTED_EXECUTION_ENVIRONMENT`

 | 

Trusted Execution Environment

 |
| 

`OTHER_STORAGE_LOCATION_SECURE_ELEMENT`

 | 

Secure Element

 |
| 

`OTHER_STORAGE_LOCATION_VIRTUAL_EXECUTION_ENVIRONMENT`

 | 

Virtual Execution Environment

 |

## [](#PartyType "Copy link to heading")PartyType

PartyType20Code and PartyType28Code Card domain type of party.

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

Party that issues cards (PartyType20Code) or the entitled party (PartyType28Code).

 |
| 

`PARTY_TYPE_AGENT`

 | 

Entity providing card payment processing services acting as an intermediary  
between an acquirer and an issuer.

 |
| 

`PARTY_TYPE_OTHER_NATIONAL`

 | 

Other card payment entity type defined at national level. PartyType28Code only.

 |
| 

`PARTY_TYPE_OTHER_PRIVATE`

 | 

Other card payment entity type defined at private level. PartyType28Code only.

 |
| 

`PARTY_TYPE_WALLET_PROVIDER`

 | 

Provider of an electronic wallet. PartyType28Code only.

 |

## [](#TokenAssuranceMethod "Copy link to heading")TokenAssuranceMethod

TokenAssuranceMethod is an ISO 20022 free text field for defining token assurance method for Token2.

Enum values  
| Name | Description |
| --- | --- |
| 
`TOKEN_ASSURANCE_METHOD_UNKNOWN`

 | 

Unknown

 |
| 

`TOKEN_ASSURANCE_METHOD_CARD_ISSUER_ACCOUNT_VERIFICATION`

 | 

Card Issuer Account Verification

 |
| 

`TOKEN_ASSURANCE_METHOD_CARD_ISSUER_INTERACTIVE_CARDHOLDER_AUTHENTICATION1_FACTOR`

 | 

Card Issuer Interactive Cardholder Authentication1 Factor

 |
| 

`TOKEN_ASSURANCE_METHOD_CARD_ISSUER_ASSERTED_AUTHENTICATION`

 | 

Card Issuer Asserted Authentication

 |
| 

`TOKEN_ASSURANCE_METHOD_PUSH_PROVISIONED_TOKEN_WITH_ADDITIONAL_INTERACTIVE_AUTHENTICATION`

 | 

Push Provisioned Token With Additional Interactive Authentication

 |
| 

`TOKEN_ASSURANCE_METHOD_PUSH_PROVISIONED_TOKEN_WITH_ADDITIONAL_IDENTITY_CHECK_AUTHENTICATION`

 | 

Push Provisioned Token With Additional Identity Check Authentication

 |
| 

`TOKEN_ASSURANCE_METHOD_IDENTITY_CHECK_RISK_BASED_CARDHOLDER_AUTHENTICATION`

 | 

Identity Check Risk Based Cardholder Authentication

 |
| 

`TOKEN_ASSURANCE_METHOD_IDENTITY_CHECK_INTERACTIVE_CARDHOLDER_AUTHENTICATION`

 | 

Identity Check Interactive Cardholder Authentication

 |
| 

`TOKEN_ASSURANCE_METHOD_TOKEN_WITH_DEVICE_ASSERTED_AUTHENTICATION`

 | 

Token With Device Asserted Authentication

 |

## [](#WalletProviderIdentification "Copy link to heading")WalletProviderIdentification

WalletProviderIdentification is the identification for the provider of the Wallet2.

Enum values  
| Name | Description |
| --- | --- |
| 
`WALLET_PROVIDER_IDENTIFICATION_UNKNOWN`

 | 

Unknown

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_MASTERCARD_MASTERPASS`

 | 

Mastercard masterpass

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_APPLE_PAY`

 | 

Apple Pay

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_GOOGLE_PAY`

 | 

Google Pay

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_SAMSUNG_PAY`

 | 

Samsung Pay

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_MERCHANT_TOKENIZATION_PROGRAM`

 | 

Merchant tokenization program

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_REMOTE_NFC`

 | 

Wallet Remote NFC Payment

 |
| 

`WALLET_PROVIDER_IDENTIFICATION_REMOTE_COMMERCE`

 | 

Remote commerce programs

 |

## [](#WalletProviderRiskAssessment "Copy link to heading")WalletProviderRiskAssessment

RiskAssessment1Code is the risk assessment for the provider of the Wallet2.

Enum values  
| Name | Description |
| --- | --- |
| 
`WALLET_PROVIDER_RISK_ASSESSMENT_UNKNOWN`

 | 

Unknown.

 |
| 

`WALLET_PROVIDER_RISK_ASSESSMENT_APPROVE_CONDITIONALLY`

 | 

Approve conditionally.

 |
| 

`WALLET_PROVIDER_RISK_ASSESSMENT_APPROVE_CONDITIONALLY_WITH_HIGH_RISK`

 | 

Approve conditionally with high risk.

 |
| 

`WALLET_PROVIDER_RISK_ASSESSMENT_APPROVE_UNCONDITIONALLY`

 | 

Approve unconditionally.

 |
| 

`WALLET_PROVIDER_RISK_ASSESSMENT_DO_NOT_APPROVE`

 | 

Do not approve.

 |
| 

`WALLET_PROVIDER_RISK_ASSESSMENT_NOT_PRESENT`

 | 

Not present on the message.

 |