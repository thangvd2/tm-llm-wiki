---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/common"
title: "Cards Common"
scraped_at: "2026-06-17T15:47:23.111Z"
images: 0
---

# Cards Common

`flows_api.card.common` module

Cards Common

## [](#PartyIdentification "Copy link to heading")PartyIdentification

Identification of a party.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Identification of the party.

 |
| 

`assigner`

 | 

`str`

 | 

Entity in charge of assigning an identification to a party.

 |
| 

`country`

 | 

`str`

 | 

Country of the party.

 |
| 

`short_name`

 | 

`str`

 | 

Short name of the party.

 |
| 

`additional_identification`

 | 

`str`

 | 

Additional identification of the party.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |
| 

`name_and_location`

 | 

`str`

 | 

Name and location of acceptor.  
May only contain name when the location is specified elsewhere.  
ISO8583:87 bit 43

 |
| 

`address`

 | 

`[flows_api.common.Address](/vault-payments/latest/EN/api/flows/flows_api/common#Address)`

 | 

Address of entity.  
ISO 8583:93 bit 43 & 8583:2003 bit 43-71 (when used for acceptor address).

 |
| 

`geographic_location`

 | 

`str`

 | 

Location of the acceptor in latitude/longitude decimal degrees.

 |
| 

`url_address`

 | 

`str`

 | 

Universal Resource Locator (URL) address.  
ISO 8583:2003 bit 43-71 (when used for Acceptor URL)

 |
| 

`phone_number`

 | 

`str`

 | 

Collection of information that identifies a phone number as defined by telecom services.  
ISO 8583:2003 bit 43-71 (when used for Acceptor phone number)

 |
| 

`customer_service`

 | 

`str`

 | 

Phone number of the customer service.  
ISO 8583:2003 bit 43-71 (when used for Acceptor customer service phone number)

 |
| 

`additional_contact_information`

 | 

`str`

 | 

Additional information used to facilitate contact with the card acceptor, for instance sales  
agent name, dispute manager name.  
ISO 8583:2003 bit 43-71 (when used for Acceptor additional contact information)

 |
| 

`tax_registration_identification`

 | 

`str`

 | 

Identification of a party by its tax registration number.

 |

## [](#FinancialInstitutionAndCustomerIdentification "Copy link to heading")FinancialInstitutionAndCustomerIdentification

Identification of a party consisting of a financial institution identification, and and a customer identification.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`financial_institution`

 | 

`[FinancialInstitution](/vault-payments/latest/EN/api/flows/flows_api/card/common#FinancialInstitution)`

 | 

Financial institution-related data required by business and/or regulation.

 |
| 

`customer`

 | 

`[Customer](/vault-payments/latest/EN/api/flows/flows_api/card/common#Customer)`

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Credentials](/vault-payments/latest/EN/api/flows/flows_api/card/common#Credentials)]`

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

`contact_information`

 | 

`[Contact](/vault-payments/latest/EN/api/flows/flows_api/card/common#Contact)`

 | 

Detail contact information of the customer.

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

`[CredentialIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#CredentialIdentification)`

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

## [](#Contact "Copy link to heading")Contact

Contact6 Details of a contact person.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`home_phone_number`

 | 

`str`

 | 

Home phone number of contact.

 |

## [](#Terminal "Copy link to heading")Terminal

Payment terminal or ATM performing the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`terminal_identification`

 | 

`[TerminalIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#TerminalIdentification)`

 | 

Identification of the terminal performing the transaction. Mandatory.

 |
| 

`type`

 | 

`[TerminalType](/vault-payments/latest/EN/api/flows/flows_api/card/common#TerminalType)`

 | 

Type of terminal.

 |
| 

`capabilities`

 | 

`[Capabilities](/vault-payments/latest/EN/api/flows/flows_api/card/common#Capabilities)`

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[CardholderVerificationCapability](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardholderVerificationCapability)]`

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

`[CardholderVerificationCapabilityCode](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardholderVerificationCapabilityCode)`

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

## [](#CardData "Copy link to heading")CardData

PCI-safe card data associated with the card or payment token performing the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`card_id`

 | 

`str`

 | 

The Card ID that was assigned to a PAN upon its card’s creation. This is safe  
for use outside of the PCI environment.  
Note that PCI-scoped ISO 20022 fields (PAN, ExpiryDate) have been omitted to  
avoid the leaking of PCI-scoped data.  
This field can be used as a tokenised PAN when integrating with any  
external systems that ask for it.

 |
| 

`card_country_code`

 | 

`str`

 | 

The country code associated with the PAN.

 |

## [](#Cardholder "Copy link to heading")Cardholder

Unprotected sensitive detailed information about the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`cardholder_name`

 | 

`[CardholderName](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardholderName)`

 | 

Contains the registered cardholder name that the issuer knows to be  
correct.

 |
| 

`identification`

 | 

`[Credentials](/vault-payments/latest/EN/api/flows/flows_api/card/common#Credentials)`

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

## [](#TransactionContext "Copy link to heading")TransactionContext

Context of the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`merchant_category_code`

 | 

`str`

 | 

Category code related to the type of services or goods the merchant  
provides for the transaction. Mandatory.  
ISO 8583:87 bit 18.

 |
| 

`pin_pad_inoperative`

 | 

`bool`

 | 

PIN pad is inoperative.

 |
| 

`final_authorisation_indicator`

 | 

`bool`

 | 

Identifies final authorisation messages for the purpose of managing  
open-to buy or available balance.

 |
| 

`partial_shipment_indicator`

 | 

`bool`

 | 

Indicates the partial shipment.

 |
| 

`delayed_charges_indicator`

 | 

`bool`

 | 

Indicates a delayed charge.

 |
| 

`no_show_indicator`

 | 

`bool`

 | 

Indicates that the cardholder failed to arrive at the property and was therefore charged a  
noshow fee; property was not actually rented.

 |
| 

`resubmission_indicator`

 | 

`bool`

 | 

Indicates a resubmission.

 |
| 

`transaction_initiator`

 | 

`[TransactionInitiator](/vault-payments/latest/EN/api/flows/flows_api/card/common#TransactionInitiator)`

 | 

Identifies the transaction initiator (Merchant or Customer).

 |
| 

`authentication_outage_indicator`

 | 

`bool`

 | 

Indicates that the consumer authentication process is temporarily unavailable in the  
acceptance, acquirer or agent environment for this request. It does not indicate an outage  
in the issuer processing domain (including agents acting on behalf of the issuer).

 |
| 

`settlement_service`

 | 

`[SettlementService](/vault-payments/latest/EN/api/flows/flows_api/card/common#SettlementService)`

 | 

Type of settlement service for specific services requiring settlement.

 |
| 

`capture_date`

 | 

`str`

 | 

Date the transaction was completed and captured, in YYYY-MM-DD format.  
ISO 8583 bit 17.

 |
| 

`card_program_applied`

 | 

`[CardProgramApplied](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardProgramApplied)`

 | 

Card programme or brand related to the transaction. CardProgramApplied has been deprecated.  
Please use CardProgramme instead.

 |
| 

`card_programme`

 | 

`[CardProgramme](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardProgramme)`

 | 

Card programme or brand related to the transaction.

 |
| 

`reconciliation`

 | 

`[Reconciliation](/vault-payments/latest/EN/api/flows/flows_api/card/common#Reconciliation)`

 | 

Identification of the reconciliation period between the acquirer and the  
issuer or their respective agents.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |
| 

`exchange_rate_information`

 | 

`[ExchangeRateInformation](/vault-payments/latest/EN/api/flows/flows_api/card/common#ExchangeRateInformation)`

 | 

Exchange rate detail.

 |

## [](#SettlementService "Copy link to heading")SettlementService

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`settlement_service_proposed`

 | 

`[SettlementServiceMode](/vault-payments/latest/EN/api/flows/flows_api/card/common#SettlementServiceMode)`

 | 

Type of settlement service proposed.

 |
| 

`settlement_service_applied`

 | 

`[SettlementServiceMode](/vault-payments/latest/EN/api/flows/flows_api/card/common#SettlementServiceMode)`

 | 

Settlement service actually applied to the transaction.

 |
| 

`settlement_service_dates`

 | 

`[SettlementServiceDates](/vault-payments/latest/EN/api/flows/flows_api/card/common#SettlementServiceDates)`

 | 

Dates related to the settlement service related to the transaction.

 |
| 

`additional_settlement_information`

 | 

`Dict[str, str]`

 | 

Additional Settlement Information.

 |

## [](#SettlementServiceMode "Copy link to heading")SettlementServiceMode

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`str`

 | 

Type of settlement service.

 |
| 

`identification`

 | 

`str`

 | 

Identification of settlement service.

 |
| 

`short_name`

 | 

`str`

 | 

Short name of settlement service.

 |
| 

`settlement_priority`

 | 

`[flows_api.common.Priority](/vault-payments/latest/EN/api/flows/flows_api/common#Priority)`

 | 

Priority to process a settlement.

 |

## [](#SettlementServiceDates "Copy link to heading")SettlementServiceDates

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`requested_settlement_date`

 | 

`str`

 | 

Date requested for settlement, in YYYY-MM-DD format.

 |
| 

`settlement_date`

 | 

`str`

 | 

Actual date of settlement, in YYYY-MM-DD format.

 |
| 

`settlement_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Actual time of settlement.

 |
| 

`settlement_period`

 | 

`str`

 | 

Identifies the settlement period, cycle or group. May contain settlement  
frequency or the identification of specific settlement period. For  
example, daily or monthly.

 |
| 

`settlement_cut_off_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Identifies the effective end time of the settlement date and/or period.

 |

## [](#CardProgramApplied "Copy link to heading")CardProgramApplied

Deprecated, use CardProgrammeApplied instead.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`str`

 | 

Type of card programme or brand.

 |
| 

`identification`

 | 

`str`

 | 

Card programme or brand actually applied to the transaction.

 |

## [](#CardProgramme "Copy link to heading")CardProgramme

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`card_program_applied`

 | 

`[CardProgrammeApplied](/vault-payments/latest/EN/api/flows/flows_api/card/common#CardProgrammeApplied)`

 | 

Card programme or brand actually applied to the transaction.

 |

## [](#CardProgrammeApplied "Copy link to heading")CardProgrammeApplied

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`str`

 | 

Type of card programme or brand.

 |
| 

`identification`

 | 

`str`

 | 

Card programme or brand actually applied to the transaction.

 |

## [](#Reconciliation "Copy link to heading")Reconciliation

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Identification of the reconciliation.

 |
| 

`date`

 | 

`str`

 | 

Date of the reconciliation, in YYYY-MM-DD format.

 |
| 

`checkpoint_reference`

 | 

`str`

 | 

A value used to allow a period within a reconciliation date.

 |

## [](#ExchangeRateInformation "Copy link to heading")ExchangeRateInformation

Details of the exchange rate.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`date`

 | 

`str`

 | 

The date the exchange rate data is effective, in the YYYY-MM-DD format.  
ISO 8583 bit 16.

 |
| 

`exchange_rate_detail`

 | 

`[ExchangeRateDetail](/vault-payments/latest/EN/api/flows/flows_api/card/common#ExchangeRateDetail)`

 | 

Details of the exchange rate.

 |

## [](#ExchangeRateDetail "Copy link to heading")ExchangeRateDetail

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`counter_currency_code`

 | 

`str`

 | 

Identifies the counter currency used for currency conversion for the transaction party.  
ISO 8583 bit 49.

 |
| 

`base_currency_code`

 | 

`str`

 | 

Identifies the base currency used for currency conversion for the transaction party.  
ISO 8583 bit 51.

 |
| 

`rate`

 | 

`str`

 | 

Contains the exchange rate.

 |

## [](#GenericIdentification "Copy link to heading")GenericIdentification

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

`[PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyType)`

 | 

Type of identified entity.

 |
| 

`other_type`

 | 

`str`

 | 

Other type of identification.

 |
| 

`assigner`

 | 

`str`

 | 

Entity in charge of assigning an identification.

 |
| 

`country`

 | 

`str`

 | 

Country of the entity.

 |
| 

`short_name`

 | 

`str`

 | 

Short name of the entity.

 |

## [](#Verification "Copy link to heading")Verification

Verification5 Validation result and/or data to be validated.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[VerificationType](/vault-payments/latest/EN/api/flows/flows_api/card/common#VerificationType)`

 | 

Type of authentication or verification.

 |
| 

`verification_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[VerificationInformation](/vault-payments/latest/EN/api/flows/flows_api/card/common#VerificationInformation)]`

 | 

Contains verification or authentication data.

 |
| 

`verification_result`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[VerificationResult](/vault-payments/latest/EN/api/flows/flows_api/card/common#VerificationResult)]`

 | 

Result of verifications performed prior or after the transaction.

 |

## [](#VerificationInformation "Copy link to heading")VerificationInformation

VerificationInformation1 Contains verification or authentication data.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`str`

 | 

Type of the verification or authentication.

 |
| 

`text_value`

 | 

`str`

 | 

Text value of the data to be verified or authenticated.

 |

## [](#VerificationResult "Copy link to heading")VerificationResult

VerificationResult2 Result of verifications performed prior or after the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`str`

 | 

Type of the verification or authentication.

 |
| 

`entity`

 | 

`[VerificationEntityCode](/vault-payments/latest/EN/api/flows/flows_api/card/common#VerificationEntityCode)`

 | 

Entity who actually performed the verification.

 |
| 

`result`

 | 

`[VerificationCode](/vault-payments/latest/EN/api/flows/flows_api/card/common#VerificationCode)`

 | 

Result of the verification.

 |
| 

`other_result`

 | 

`str`

 | 

Additional result of the verification, for instance for electronic commerce.

 |

## [](#RiskContext "Copy link to heading")RiskContext

RiskContext2 Context of the risk associated with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`risk_input_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RiskInputDatum](/vault-payments/latest/EN/api/flows/flows_api/card/common#RiskInputDatum)]`

 | 

Input data to be considered in a risk assessment.

 |
| 

`risk_assessments`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RiskAssessment](/vault-payments/latest/EN/api/flows/flows_api/card/common#RiskAssessment)]`

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

`[RiskEntity](/vault-payments/latest/EN/api/flows/flows_api/card/common#RiskEntity)`

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

`[PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyType)`

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

`[GenericIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#GenericIdentification)`

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

Reason for indicating a certain level of risk for the transaction.

 |

## [](#AdditionalService "Copy link to heading")AdditionalService

AdditionalService2 Additional functions or services to be performed in conjunction with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[AdditionalServiceType](/vault-payments/latest/EN/api/flows/flows_api/card/common#AdditionalServiceType)`

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

## [](#LifeCycleTraceIdentificationData "Copy link to heading")LifeCycleTraceIdentificationData

Unique global identification structure used to match transactions throughout their lifecycle.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Unique transaction identifier.

 |
| 

`authentication_token`

 | 

`str`

 | 

Authentication token.

 |

## [](#OriginalDataElements "Copy link to heading")OriginalDataElements

Data elements contained in the original message.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`acquirer_identification`

 | 

`str`

 | 

Code identifying the acquirer of the original message.

 |
| 

`sender_identification`

 | 

`str`

 | 

Code identifying the sender of the original message.

 |
| 

`transmission_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time expressed in UTC of the message as sent by the initiator.

 |
| 

`system_trace_audit_number`

 | 

`str`

 | 

Transaction reference of the original message.

 |
| 

`retrieval_reference_number`

 | 

`str`

 | 

Reference supplied by the system retaining the original source information and  
used to assist in locating that information or a copy thereof.

 |
| 

`life_cycle_trace_identification_data`

 | 

`[LifeCycleTraceIdentificationData](/vault-payments/latest/EN/api/flows/flows_api/card/common#LifeCycleTraceIdentificationData)`

 | 

Unique global identification structure used to match transactions throughout  
their lifecycle.

 |
| 

`card_issuer_reference_data`

 | 

`str`

 | 

Data supplied by a card issuer in an authorisation response, financial response  
message or in a chargeback transaction that the acquirer may be required to  
provide in subsequent transactions.

 |
| 

`local_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Local date and time the transaction takes place at the acceptor location.

 |
| 

`message_class`

 | 

`str`

 | 

Message class of the original message.

 |
| 

`message_function`

 | 

`str`

 | 

Identifies the type of process related to the message.

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

`[AmountAndExchangeRate](/vault-payments/latest/EN/api/flows/flows_api/card/common#AmountAndExchangeRate)`

 | 

Present when the cardholder billing currency differs from the transaction currency  
expressed in the amount of the transaction.

 |
| 

`reconciliation_amount`

 | 

`[AmountAndExchangeRate](/vault-payments/latest/EN/api/flows/flows_api/card/common#AmountAndExchangeRate)`

 | 

Amount used for reconciliation.

 |

## [](#AmountAndExchangeRate "Copy link to heading")AmountAndExchangeRate

Amount, currency, exchange rate and quotation date.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Amount exclusive of currency.

 |
| 

`currency`

 | 

`str`

 | 

Currency code associated with the applicable type of amount. ISO 4217 "Codes for the  
representation of currencies and funds".

 |
| 

`effective_exchange_rate`

 | 

`str`

 | 

The factor used in the conversion from one amount to another amount.

 |
| 

`conversion_date`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time at which the exchange rate was effective.

 |

## [](#AdditionalAmount "Copy link to heading")AdditionalAmount

Amounts that are not part of the transaction amount and not included in reconciliation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[TypeOfAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#TypeOfAmount)`

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

`[TypeOfFee](/vault-payments/latest/EN/api/flows/flows_api/card/common#TypeOfFee)`

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

`[FeeAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#FeeAmount)`

 | 

Amount of one occurrence of the fee amount. Mandatory.

 |
| 

`fee_reconciliation_amount`

 | 

`[FeeAmount](/vault-payments/latest/EN/api/flows/flows_api/card/common#FeeAmount)`

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

## [](#FeeAmount "Copy link to heading")FeeAmount

Amount, currency, exchange rate and quotation date, sign and label.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Amount exclusive of currency.

 |
| 

`currency`

 | 

`str`

 | 

Currency for the type of amount.

 |
| 

`effective_exchange_rate`

 | 

`str`

 | 

Exchange rate of the currency code associated with the amount.

 |
| 

`conversion_date`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time at which the exchange rate is effective.

 |
| 

`credit_debit`

 | 

`[flows_api.common.CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

Indicates whether an amount represents a credit or a debit. Optional.

 |

## [](#ProcessingResult "Copy link to heading")ProcessingResult

ProcessingResult16 Outcome of the processing of the initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`result_data`

 | 

`[ResultData](/vault-payments/latest/EN/api/flows/flows_api/card/common#ResultData)`

 | 

Result of the processing.

 |
| 

`approval_code`

 | 

`str`

 | 

Value assigned by the entity when the transaction is approved. Financial Initiations only.

 |
| 

`original_result_data`

 | 

`[ResultData](/vault-payments/latest/EN/api/flows/flows_api/card/common#ResultData)`

 | 

Outcome of a previous processing, for example, in response to a duplicate request.

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Action](/vault-payments/latest/EN/api/flows/flows_api/card/common#Action)]`

 | 

Set of actions to be performed.

 |

## [](#ResultData "Copy link to heading")ResultData

Result of the processing.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`result`

 | 

`[ResultCode](/vault-payments/latest/EN/api/flows/flows_api/card/common#ResultCode)`

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

`[PartyType](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyType)`

 | 

Destination of the action. PartyType20Code.

 |
| 

`action_type`

 | 

`[ActionType](/vault-payments/latest/EN/api/flows/flows_api/card/common#ActionType)`

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

## [](#ICCRelatedData "Copy link to heading")ICCRelatedData

Data related to an integrated circuit card application embedded in the payment card of the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`cryptogram_information_data`

 | 

`bytes`

 | 

Cryptogram Information Data from DE55 9F27, raw bytes.

 |
| 

`card_verification_results`

 | 

`bytes`

 | 

Card Verification Results, a data element of the Issuer Application Data (IApD), from DE55  
9F10, raw bytes.  
This will be omitted if the IApD has an unrecognised length.

 |
| 

`last_online_atc`

 | 

`str`

 | 

Last Online ATC (Application Transaction Counter), a data element of the Issuer Application  
Data (IApD), from DE55 9F10, decoded to decimal.  
This will be omitted if the IApD has an unrecognised length.

 |
| 

`application_transaction_counter`

 | 

`str`

 | 

Application Transaction Counter (ATC) from DE55 9F10, decoded to decimal.

 |
| 

`terminal_verification_result`

 | 

`bytes`

 | 

Terminal Verification Result (TVR) from DE55 95, raw bytes.

 |
| 

`transaction_date`

 | 

`str`

 | 

Transaction Date from DE55 9A, in YYYY-MM-DD format.

 |
| 

`amount_authorised`

 | 

`str`

 | 

Amount Authorised from DE55 9F02, in decimal format.

 |
| 

`transaction_type`

 | 

`str`

 | 

Transaction Type from DE55 9C, in decimal.

 |
| 

`transaction_currency_code`

 | 

`str`

 | 

Transaction Currency Code from DE55 5F2A, as alpha ISO 4217 code.

 |
| 

`terminal_country_code`

 | 

`str`

 | 

Terminal Country Code from DE55 9F1A, as alpha ISO 3166 code.

 |
| 

`cardholder_verification_method_results`

 | 

`bytes`

 | 

Cardholder Verification Method (CVM) Results, from DE55 9F34, raw bytes.

 |
| 

`terminal_capabilities`

 | 

`bytes`

 | 

Terminal Capabilities, from DE55 9F33, raw bytes.

 |
| 

`terminal_type`

 | 

`str`

 | 

Terminal Type, from DE55 9F35, in decimal

 |
| 

`dedicated_file_name`

 | 

`bytes`

 | 

Dedicated File Name, from DE55 84, raw bytes.

 |

## [](#Balance "Copy link to heading")Balance

Balance of the account.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[BalanceType](/vault-payments/latest/EN/api/flows/flows_api/card/common#BalanceType)`

 | 

Type of card account balance.

 |
| 

`other_type`

 | 

`str`

 | 

Other card account balance type.

 |
| 

`amount`

 | 

`[flows_api.common.CurrencyAndAmount](/vault-payments/latest/EN/api/flows/flows_api/common#CurrencyAndAmount)`

 | 

Amount and currency of the balance

 |
| 

`cardholder_currency_indicator`

 | 

`bool`

 | 

Indicates whether the value of balance is expressed in the currency of  
the cardholder or not.

 |
| 

`balance_date`

 | 

`str`

 | 

Date of the balance, in YYYY-MM-DD format.

 |

## [](#DeclineRecommendation "Copy link to heading")DeclineRecommendation

Contains information indicating the details of a recommendation to the instruction flow to decline an instruction based on processing done before it was sent to the engine.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`reason`

 | 

`[DeclineRecommendationReason](/vault-payments/latest/EN/api/flows/flows_api/card/common#DeclineRecommendationReason)`

 | 

The reason for a decline being recommended.

 |
| 

`response_code`

 | 

`str`

 | 

String containing the scheme facing response code that it is recommended  
to use to decline the instruction.

 |
| 

`description`

 | 

`str`

 | 

Human readable description for the reason for recommending to decline the  
instruction.

 |

## [](#VPCardData "Copy link to heading")VPCardData

Vault Payments specific card data that is not present on the ISO 20022 spec

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`lvt_counter`

 | 

`int`

 | 

The latest LVT Counter

 |
| 

`lvt_counter_limit`

 | 

`int`

 | 

The LVT Counter Limit.

 |
| 

`lvt_accumulated_amount`

 | 

`int`

 | 

The LVT Accumulated Amount.

 |
| 

`lvt_accumulated_amount_limit`

 | 

`int`

 | 

The LVT Accumulated Amount Limit.

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

## [](#BalanceType "Copy link to heading")BalanceType

Type of card account balance.

Enum values  
| Name | Description |
| --- | --- |
| 
`BALANCE_TYPE_UNKNOWN`

 | 

Balance type is unknown.

 |
| 

`BALANCE_TYPE_AMOUNT_ON_HOLD`

 | 

Amount put on hold.

 |
| 

`BALANCE_TYPE_AMOUNT_OWING`

 | 

Amount of money owed.

 |
| 

`BALANCE_TYPE_AMOUNT_DUE`

 | 

Amount of money due.

 |
| 

`BALANCE_TYPE_CREDIT_LINE`

 | 

Credit line available.

 |
| 

`BALANCE_TYPE_OTHER_NATIONAL`

 | 

Other type of balance defined at national level.

 |
| 

`BALANCE_TYPE_OTHER_PRIVATE`

 | 

Other type of balance defined at private level.

 |
| 

`BALANCE_TYPE_AVAILABLE`

 | 

Balance of money or securities that is at the disposal of the account owner  
on the date specified.

 |
| 

`BALANCE_TYPE_CLEARED_ITEM`

 | 

Cleared items balance.

 |
| 

`BALANCE_TYPE_LEDGER`

 | 

Ledger balance refers to posted transactions (e.g. limit authorisation  
amount - posted transactions).

 |

## [](#CardDataReadingCode "Copy link to heading")CardDataReadingCode

Card reading capabilities of the terminal performing the transaction.

Enum values  
| Name | Description |
| --- | --- |
| 
`CARD_DATA_READING_CAPABILITIES_UNKNOWN`

 | 

The card data reading capabilities are unknown.

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
| 

`CARD_DATA_READING_CAPABILITIES_CARD_ON_FILE`

 | 

Card information is stored on file.

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

## [](#DeclineRecommendationReason "Copy link to heading")DeclineRecommendationReason

DeclineRecommendationReason contains reasons for decline recommendations.

Enum values  
| Name | Description |
| --- | --- |
| 
`DECLINE_RECOMMENDATION_REASON_UNKNOWN`

 | 

Unknown.

 |
| 

`DECLINE_RECOMMENDATION_REASON_PRODUCT_VALUE_CONSTRAINTS_VIOLATED`

 | 

Product value constraints violated.  
  
To investigate why a certain Instruction violated the Constraints, first look at  
the following fields (especially transaction\_type) to determine which table to  
look at in the Product Value Constraints in the Customer Interface Specification  
(8 November 2022), p.1092.  
\- transaction.transaction\_type (DE 3 SF 1)  
\- transaction.account\_from.account\_type (DE 3 SF 2)  
\- transaction.account\_to.account\_type (DE 3 SF 3)  
  
Within each table, constraints are ordered by DE 61 SF 10, so find the handful of  
applicable constraints using the following field on the Instruction.  
\- context.point\_of\_service\_context.unattended\_level\_category (DE 61 SF 10)  
  
Narrow down the applicable constraints further by the CVM.  
\- context.verification (DE 52) - if this field contains a Verification with  
type ONLINE\_PIN, then the CVM for the Instruction was P, otherwise it was S.  
  
It should then be practical to compare the allowable DE 22 combinations in the  
final shortlist of applicable constraints with the following fields on the  
Instruction, to understand why they were disallowed by the constraints.  
\- context.point\_of\_service\_context.card\_data\_entry\_mode (DE 22 SF 1)  
\- environment.terminal.type (DE 22 SF 2)  
\- environment.terminal.capabilities (DE 22 SF 2)  
\- context.transaction\_context.pin\_pad\_inoperative (DE 22 SF 2)

 |
| 

`DECLINE_RECOMMENDATION_REASON_AC_TYPE_ABSENT`

 | 

Application Cryptogram (AC) is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_AC_TYPE_INVALID`

 | 

Application Cryptogram (AC) is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_ATC_OUTSIDE_ALLOWED_RANGE_LOW`

 | 

Application Transction Counter (ATC) value is below the allowed range.

 |
| 

`DECLINE_RECOMMENDATION_REASON_ATC_OUTSIDE_ALLOWED_RANGE_HIGH`

 | 

Application Transction Counter (ATC) value is above the allowed range.

 |
| 

`DECLINE_RECOMMENDATION_REASON_ATC_DUPLICATE_INVALID`

 | 

Application Transction Counter (ATC) value is an invalid duplicate.

 |
| 

`DECLINE_RECOMMENDATION_REASON_ARQC_ABSENT`

 | 

ARQC is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_ARQC_INVALID`

 | 

ARQC is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CHIP_CVC_ABSENT`

 | 

Chip CVC is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CHIP_CVC_INVALID`

 | 

Chip CVC is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CVC1_ABSENT`

 | 

CVC1 is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CVC1_INVALID`

 | 

CVC1 is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CVC2_ABSENT`

 | 

CVC2 is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CVC2_INVALID`

 | 

CVC2 is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_TOO_MANY_CVC2_FAILURES`

 | 

CVC2 verification has failed too many times in a limited time interval.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CARD_SUSPENDED`

 | 

Card is suspended.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CARD_NOT_ACTIVE`

 | 

Card is not active.

 |
| 

`DECLINE_RECOMMENDATION_REASON_IAV_INVALID`

 | 

IAV is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_IAV_ABSENT`

 | 

IAV is required and absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_LVT_COUNT_LIMIT_EXCEEDED`

 | 

Low Value Transactions (LVT) count has exceeded the limit.

 |
| 

`DECLINE_RECOMMENDATION_REASON_LVT_ACCUMULATOR_LIMIT_EXCEEDED`

 | 

Low Value Transactions (LVT) accumulator has exceeded the limit.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CONTACTLESS_AMOUNT_LIMIT_EXCEEDED`

 | 

Contactless amount has exceeded the limit.

 |
| 

`DECLINE_RECOMMENDATION_REASON_MERCHANT_TYPE_NOT_ALLOWED`

 | 

Merchant type is not allowed for the instruction type.

 |
| 

`DECLINE_RECOMMENDATION_REASON_EXPIRATION_DATE_INVALID`

 | 

Expiration date did not match the Card’s expiration date.

 |
| 

`DECLINE_RECOMMENDATION_REASON_EXPIRATION_DATE_ABSENT`

 | 

Expiration date is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_ADDRESS_INVALID`

 | 

Address is invalid as it does not match the recorded cardholder’s address.

 |
| 

`DECLINE_RECOMMENDATION_REASON_INTERNAL_ERROR`

 | 

Internal error.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CARD_NUMBER_INVALID`

 | 

Card number is invalid.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CARD_EXPIRED`

 | 

Card has expired.

 |
| 

`DECLINE_RECOMMENDATION_REASON_PIN_TRIES_LIMIT_EXCEEDED`

 | 

PIN tries has exceeded the limit.

 |
| 

`DECLINE_RECOMMENDATION_REASON_PIN_INVALID`

 | 

PIN is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_PIN_ABSENT`

 | 

PIN is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_NEW_PIN_INVALID`

 | 

New PIN is invalid (e.g. too weak).

 |
| 

`DECLINE_RECOMMENDATION_REASON_NEW_PIN_ABSENT`

 | 

New PIN is absent.

 |
| 

`DECLINE_RECOMMENDATION_REASON_OBS_MDES_PAN_MAPPING_FAILURE`

 | 

On-behalf Service (OBS) reported a failure during MDES PAN mapping.

 |
| 

`DECLINE_RECOMMENDATION_REASON_OBS_MDES_AC_SE_PRE_VALIDATION_FAILURE`

 | 

On-behalf Service (OBS) reported a failure during MDES Application Cryptogram (AC) Secure  
Element (SE) pre-validation.

 |
| 

`DECLINE_RECOMMENDATION_REASON_OBS_MDES_AC_MCBP_PRE_VALIDATION_FAILURE`

 | 

On-behalf Service (OBS) reported a failure during MDES Application Cryptogram (AC) Mastercard  
Cloud-Based Payments (MCBP) pre-validation.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CARDHOLDER_VERIFICATION_FAILURE`

 | 

Cardholder verification failed.

 |
| 

`DECLINE_RECOMMENDATION_REASON_CVM_RESULT_RULE_UNRECOGNISED`

 | 

CVM (Cardholder Verification Method) result rule is unrecognised.

 |
| 

`DECLINE_RECOMMENDATION_REASON_PIN_CHANGE_ALREADY_IN_PROGRESS`

 | 

A new PIN change is being attempted while online and offline PINs are out of sync.

 |
| 

`DECLINE_RECOMMENDATION_REASON_RECURRING_PAYMENT_INITIAL_AUTH_NOT_FOUND`

 | 

A subsequent recurring authorisation has not matched to any initial authorisation.

 |
| 

`DECLINE_RECOMMENDATION_REASON_RECURRING_PAYMENT_INITIAL_AUTH_REJECTED`

 | 

A subsequent recurring authorisation matched to a rejected initial authorisation.

 |
| 

`DECLINE_RECOMMENDATION_REASON_PARTIAL_GRADE_ACQUIRER_NOT_SUPPORTED`

 | 

The message is from a partial-grade acquirer, which is not supported for the message type.

 |

## [](#PartyType "Copy link to heading")PartyType

PartyType17Code, PartyType20Code, PartyType26Code, and PartyType28Code Card domain type of party or type of entity acting as a Payment Initiation Service Provider.

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

`PARTY_TYPE_ACQUIRER_PROCESSOR`

 | 

Entity providing acquiring card payment processing services on behalf on an acquirer.  
PartyType17Code only.

 |
| 

`PARTY_TYPE_CARDHOLDER`

 | 

Holder of a payment card. PartyType20Code or PartyType28Code only.

 |
| 

`PARTY_TYPE_CARD_ISSUER`

 | 

Party that issues cards (PartyType20Code and PartyType26Code) or  
the entitled party (PartyType28Code).

 |
| 

`PARTY_TYPE_CARD_ISSUER_PROCESSOR`

 | 

Entity providing issuing card payment processing services on behalf on an issuer.  
PartyType17Code only.

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
| 

`PARTY_TYPE_CARD_APPLICATION`

 | 

Application in the smart card. PartyType26Code only.

 |
| 

`PARTY_TYPE_DELEGATE_ISSUER`

 | 

Party to whom the card issuer delegates to authorise card payment transactions.  
PartyType26Code only.

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

## [](#TerminalType "Copy link to heading")TerminalType

Type of terminal to perform the transaction. TerminalType1Code.

Enum values  
| Name | Description |
| --- | --- |
| 
`TERMINAL_TYPE_UNKNOWN`

 | 

Unknown Terminal Type.

 |
| 

`TERMINAL_TYPE_ATM`

 | 

Automated Teller Machine.

 |
| 

`TERMINAL_TYPE_MPOS`

 | 

Mobile or tablet used as a Point of Sale terminal.

 |
| 

`TERMINAL_TYPE_POS`

 | 

Point of Sale terminal.

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

`TRANSACTION_ATTRIBUTE_DEBT_RECOVERY`

 | 

Debt recovery.

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

## [](#TransactionInitiator "Copy link to heading")TransactionInitiator

Identifies the transaction initiator.

Enum values  
| Name | Description |
| --- | --- |
| 
`TRANSACTION_INITIATOR_UNKNOWN`

 | 

The transaction initiator is unknown.

 |
| 

`TRANSACTION_INITIATOR_MERCHANT`

 | 

Merchant initiated transaction.

 |
| 

`TRANSACTION_INITIATOR_CUSTOMER`

 | 

Customer initiated transaction.

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

TypeOfAmount21Code Type or class of fee.

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
| 

`TYPE_OF_FEE_CASH_BACK_INTERCHANGE_FEE`

 | 

Interchange fee applicable to cash back amount.

 |
| 

`TYPE_OF_FEE_MAXIMUM_INTERCHANGE_FEE`

 | 

Maximum applicable interchange fee.

 |
| 

`TYPE_OF_FEE_MINIMUM_INTERCHANGE_FEE`

 | 

Minimum interchange fee applicable.

 |

## [](#VerificationCode "Copy link to heading")VerificationCode

Verification3Code Code for result of the verification.

Enum values  
| Name | Description |
| --- | --- |
| 
`VERIFICATION_CODE_UNKNOWN`

 | 

Result type unknown.

 |
| 

`VERIFICATION_CODE_FAILED`

 | 

Verification failed.

 |
| 

`VERIFICATION_CODE_FURTHER_ACTION`

 | 

Further action required.

 |
| 

`VERIFICATION_CODE_MISSING`

 | 

Information required to perform the verification was missing.

 |
| 

`VERIFICATION_CODE_NOT_SUPPORTED`

 | 

Verification type not supported.

 |
| 

`VERIFICATION_CODE_NOT_PERFORMED`

 | 

Verification has not been performed.

 |
| 

`VERIFICATION_CODE_OTHER_NATIONAL`

 | 

Other result of verification defined at national level.

 |
| 

`VERIFICATION_CODE_OTHER_PRIVATE`

 | 

Other result of verification defined at private level.

 |
| 

`VERIFICATION_CODE_PARTIAL_MATCH`

 | 

Verification was partially successful.

 |
| 

`VERIFICATION_CODE_SUCCESSFUL`

 | 

Verification was successful.

 |
| 

`VERIFICATION_CODE_TECHNICAL_ERROR`

 | 

Device or entity to perform the verification was unavailable.

 |
| 

`VERIFICATION_CODE_FORMAT_ERROR`

 | 

Format error.

 |
| 

`VERIFICATION_CODE_INVALID_TOKEN`

 | 

Invalid token.

 |
| 

`VERIFICATION_CODE_UNABLE_TO_PROCESS`

 | 

Unable to process.

 |
| 

`VERIFICATION_CODE_SECURITY_PLATFORM_TIME_OUT`

 | 

Security platform time out.

 |
| 

`VERIFICATION_CODE_SECURITY_PLATFORM_PROCESSING_ERROR`

 | 

Security platform processing error.

 |
| 

`VERIFICATION_CODE_NO_KEY`

 | 

No key.

 |
| 

`VERIFICATION_CODE_INVALID_TVR_CVR`

 | 

Verification code invalid TVR CVR.

 |
| 

`VERIFICATION_CODE_ATC_OUTSIDE_RANGE`

 | 

ATC outside range. For use in MDES.

 |
| 

`VERIFICATION_CODE_ATC_REPLAY`

 | 

ATC replay. For use in MDES.

 |
| 

`VERIFICATION_CODE_ATC_INVALID`

 | 

ATC invalid. For use in MDES.

 |
| 

`VERIFICATION_CODE_ATC_OUTSIDE_ALLOWED_RANGE_LOW`

 | 

ATC outside allowed range low.

 |
| 

`VERIFICATION_CODE_ATC_OUTSIDE_ALLOWED_RANGE_HIGH`

 | 

ATC outside allowed range high.

 |
| 

`VERIFICATION_CODE_ATC_DUPLICATE_INVALID`

 | 

ATC duplicate invalid.

 |
| 

`VERIFICATION_CODE_ATC_DUPLICATE_VALID`

 | 

ATC duplicate valid.

 |
| 

`VERIFICATION_CODE_ATC_WITHIN_ALLOWED_RANGE`

 | 

ATC within allowed range.

 |
| 

`VERIFICATION_CODE_ATC_UPDATE`

 | 

ATC update.

 |
| 

`VERIFICATION_CODE_VALID_AC`

 | 

Valid AC.

 |
| 

`VERIFICATION_CODE_VALID_AC_INVALID_TYPE`

 | 

AC invalid type.

 |
| 

`VERIFICATION_CODE_INVALID_AC`

 | 

Invalid AC.

 |
| 

`VERIFICATION_CODE_VALID_AC_VALID_ATC_INVALID_TVR_CVR`

 | 

Valid AC, valid ATC, invalid TVR CVR.

 |
| 

`VERIFICATION_CODE_VALID_AC_ATC_TVR_CVR`

 | 

Valid AC, ATC, TVR, CVR.

 |
| 

`VERIFICATION_CODE_VALID_AC_ATC_OUTSIDE_RANGE`

 | 

Valid AC, ATC outside range.

 |
| 

`VERIFICATION_CODE_VALID_AC_ATC_REPLAY`

 | 

Valid AC, ATC replay.

 |
| 

`VERIFICATION_CODE_INVALID_MD_AC_INVALID_UMD_AC`

 | 

Invalid MD AC invalid UMD AC.

 |
| 

`VERIFICATION_CODE_INVALID_MD_AC_VALID_UMD_AC`

 | 

Invalid MD AC valid UMD AC.

 |
| 

`VERIFICATION_CODE_VALID_MD_AC_INVALID_UMD_AC_MOBILE_PIN_TRY_COUNTER_LIMIT_REACHED`

 | 

Valid MD AC invalid UMD AC mobile pin try counter limit reached.

 |
| 

`VERIFICATION_CODE_VALID_MD_AC_INVALID_UMD_AC_INVALID_MOBILE_PIN`

 | 

Valid MD AC invalid UMD AC invalid mobile pin.

 |
| 

`VERIFICATION_CODE_TRANSACTION_AMOUNT_LESS_OR_EQUAL_MDES_PAYMENT_AMOUNT`

 | 

Transaction amount less or equal to approximate MDES payment amount.

 |
| 

`VERIFICATION_CODE_TRANSACTION_AMOUNT_UP_TO_20_MDES_PAYMENT_AMOUNT`

 | 

Transaction amount up to 20 percent more than approximate MDES payment amount.

 |
| 

`VERIFICATION_CODE_TRANSACTION_AMOUNT_GREATER_THAN_20_MDES_PAYMENT_AMOUNT`

 | 

Transaction amount greater than approximate MDES payment amount by 20 percent or more.

 |
| 

`VERIFICATION_CODE_CVM_RESULT_RECOGNISED_SUCCESSFUL`

 | 

CVM Result has supported CV Rule and indicates successful.

 |
| 

`VERIFICATION_CODE_CVM_RESULT_RECOGNISED_FAILED`

 | 

CVM Result has supported CV Rule but indicates failed.

 |
| 

`VERIFICATION_CODE_CVM_RESULT_RULE_UNRECOGNISED`

 | 

Listed CV Rule in CVM Result is not within declared supported rules on  
the Card Profile.

 |
| 

`VERIFICATION_CODE_CVM_RESULT_UNKNOWN`

 | 

CVM Result is Unknown.

 |
| 

`VERIFICATION_CODE_PHONE_LAST_DIGITS_VALID`

 | 

Phone last digits valid.

 |
| 

`VERIFICATION_CODE_PHONE_LAST_DIGITS_INVALID`

 | 

Phone last digits invalid.

 |
| 

`VERIFICATION_CODE_PHONE_LAST_DIGITS_NOT_PRESENT`

 | 

Phone last digits not present.

 |
| 

`VERIFICATION_CODE_CARDHOLDER_NAME_VALID`

 | 

Cardholder name valid.

 |
| 

`VERIFICATION_CODE_CARDHOLDER_NAME_INVALID`

 | 

Cardholder name invalid.

 |
| 

`VERIFICATION_CODE_CARDHOLDER_NAME_NOT_PRESENT`

 | 

Cardholder name not present.

 |
| 

`VERIFICATION_CODE_EMAIL_HASH_VALID`

 | 

Email hash valid.

 |
| 

`VERIFICATION_CODE_EMAIL_HASH_INVALID`

 | 

Email hash invalid.

 |
| 

`VERIFICATION_CODE_EMAIL_HASH_NOT_PRESENT`

 | 

Email hash not present.

 |
| 

`VERIFICATION_CODE_TOKENISATION_IS_ALLOWED`

 | 

Tokenisation is allowed.

 |
| 

`VERIFICATION_CODE_TOKENISATION_NOT_ALLOWED`

 | 

Tokenisation not allowed.

 |

## [](#VerificationEntityCode "Copy link to heading")VerificationEntityCode

VerificationEntity2Code Entity who actually performed the verification.

Enum values  
| Name | Description |
| --- | --- |
| 
`VERIFICATION_ENTITY_CODE_UNKNOWN`

 | 

Entity type unknown.

 |
| 

`VERIFICATION_ENTITY_CODE_ACCEPTOR`

 | 

Acceptor (for example signature verification by the attendant).

 |
| 

`VERIFICATION_ENTITY_CODE_ACQUIRER`

 | 

Acquirer of the transaction.

 |
| 

`VERIFICATION_ENTITY_CODE_AGENT`

 | 

Entity providing card payment processing services acting as an intermediary between (or on  
behalf of) an acquirer and an issuer.

 |
| 

`VERIFICATION_ENTITY_CODE_ISSUER`

 | 

Card issuer.

 |
| 

`VERIFICATION_ENTITY_CODE_OTHER_NATIONAL`

 | 

Other type of authentication entity defined at national level.

 |
| 

`VERIFICATION_ENTITY_CODE_OTHER_PRIVATE`

 | 

Other type of authentication entity defined at private level.

 |
| 

`VERIFICATION_ENTITY_CODE_ACCEPTANCE_DEVICE`

 | 

Type of Device to accept payment.

 |
| 

`VERIFICATION_ENTITY_CODE_CARD_APPLICATION`

 | 

Application in the smart card.

 |
| 

`VERIFICATION_ENTITY_CODE_CARD_SCHEME`

 | 

Card scheme.

 |

## [](#VerificationType "Copy link to heading")VerificationType

Custom values for Verification (Verification5) Type

Enum values  
| Name | Description |
| --- | --- |
| 
`VERIFICATION_TYPE_UNKNOWN`

 | 

Unknown verification type.

 |
| 

`VERIFICATION_TYPE_NO_CVM`

 | 

No verification performed.

 |
| 

`VERIFICATION_TYPE_CVM`

 | 

CVM verification.

 |
| 

`VERIFICATION_TYPE_ONLINE_PIN`

 | 

Online PIN verification.

 |
| 

`VERIFICATION_TYPE_OFFLINE_PIN`

 | 

Offline PIN verification.

 |
| 

`VERIFICATION_TYPE_OFFLINE_SIGNATURE`

 | 

Offline signature verification.

 |
| 

`VERIFICATION_TYPE_CVC2`

 | 

CVC2 verification.

 |
| 

`VERIFICATION_TYPE_ADDRESS`

 | 

Address verification.

 |
| 

`VERIFICATION_TYPE_PAN_MAPPING`

 | 

PAN mapping verification.

 |
| 

`VERIFICATION_TYPE_APPLICATION_CRYPTOGRAM`

 | 

Application Cryptogram verification.

 |
| 

`VERIFICATION_TYPE_PAYMENT_DATA`

 | 

Payment data.

 |
| 

`VERIFICATION_TYPE_EMAIL_HASH`

 | 

Email hash.

 |
| 

`VERIFICATION_TYPE_PHONE_LAST_DIGITS`

 | 

Phone last digits.

 |
| 

`VERIFICATION_TYPE_CARDHOLDER_NAME`

 | 

Cardholder name.

 |
| 

`VERIFICATION_TYPE_TOKENISATION_ALLOWED`

 | 

Tokenisation allowed.

 |