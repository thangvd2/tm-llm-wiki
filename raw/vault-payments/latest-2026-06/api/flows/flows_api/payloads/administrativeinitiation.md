---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/administrativeinitiation"
title: "Administrative initiation"
scraped_at: "2026-06-17T15:47:52.285Z"
images: 0
---

# Administrative initiation

`flows_api.payloads.administrativeinitiation` module

Administrative initiation

## [](#AdministrativeInitiationV02 "Copy link to heading")AdministrativeInitiationV02

The AdministrativeInitiation message usually sent by any party (processor, clearing or settlement agent) to any party to inform anything that supports the business and technical infrastructure between parties.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[flows_api.payloads.common.Header71](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Header71)`

 | 

Information related to the management of the protocol.

 |
| 

`administrative_type`

 | 

`[flows_api.payloads.common.AdministrativeType1Code](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdministrativeType1Code)`

 | 

Code that identifies an administrative type.

 |
| 

`other_administrative_type`

 | 

`str`

 | 

Other administrative type defined at private or national level.

 |
| 

`message_reason`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

Reason or purpose to send the message.  
  
The ISO 8583 maintenance agency (MA) manages this code list.

 |
| 

`alternate_message_reason`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

Supports message reason codes that are not defined in external code list.

 |
| 

`text_message`

 | 

`str`

 | 

Contains generic text message.

 |
| 

`local_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.LocalData17](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#LocalData17)]`

 | 

Additional Information in local language.

 |
| 

`transaction_description`

 | 

`str`

 | 

Transaction data related to programmes and services, content and format based on bilateral  
agreements.  
  
ISO 8583:87/93 bit 104  
ISO 8583:2003 bit 104-71

 |
| 

`originator`

 | 

`[flows_api.payloads.common.PartyIdentification286](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification286)`

 | 

Identifies the originator of the transaction.

 |
| 

`acquirer`

 | 

`[flows_api.payloads.common.PartyIdentification286](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification286)`

 | 

Identification of the acquirer.

 |
| 

`sender`

 | 

`[flows_api.payloads.common.PartyIdentification286](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification286)`

 | 

Party sending the message to another intermediary agent or to the final destination.

 |
| 

`card`

 | 

`[flows_api.payloads.common.CardData11](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CardData11)`

 | 

Card or payment token performing the transaction.

 |
| 

`receiver`

 | 

`[flows_api.payloads.common.PartyIdentification286](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification286)`

 | 

Party receiving the message from the origin or from an intermediary agent.

 |
| 

`issuer`

 | 

`[flows_api.payloads.common.PartyIdentification286](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification286)`

 | 

Information related to the issuer.

 |
| 

`destination`

 | 

`[flows_api.payloads.common.PartyIdentification286](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification286)`

 | 

Identifies the destination of the transaction.

 |
| 

`programme`

 | 

`[flows_api.payloads.common.ProgrammeMode4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ProgrammeMode4)`

 | 

Programme, network, or brand processes the transaction.

 |
| 

`transaction_identification`

 | 

`[flows_api.payloads.common.TransactionIdentification56](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionIdentification56)`

 | 

Identification of the transaction.

 |
| 

`conversion_date_time`

 | 

`[flows_api.payloads.common.DateTime2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#DateTime2)`

 | 

Date and Time of currency conversion.

 |
| 

`exchange_rate`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.ExchangeRateInformation5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ExchangeRateInformation5)]`

 | 

Further detailed information on the exchange rates that have been used in or are related to  
the transaction.

 |
| 

`acceptor`

 | 

`[flows_api.payloads.common.PartyIdentification288](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification288)`

 | 

Card acceptor performing the card transaction.

 |
| 

`terminal`

 | 

`[flows_api.payloads.common.Terminal7](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Terminal7)`

 | 

Payment terminal or ATM performing the transaction.

 |
| 

`poi_component`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PointOfInteractionComponent16](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PointOfInteractionComponent16)]`

 | 

Data related to the components of the POI (Point Of Interaction) performing the transactions.

 |
| 

`context`

 | 

`[flows_api.payloads.common.Context19](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Context19)`

 | 

Contains or describes conditions and characteristics of the transaction.

 |
| 

`icc_related_data`

 | 

`str`

 | 

Data related to an integrated circuit card application embedded in the payment card of the  
cardholder.  
  
ISO 8583 bit 55

 |
| 

`payer`

 | 

`[flows_api.payloads.common.PartyIdentification287](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification287)`

 | 

The party providing source of funds.

 |
| 

`payee`

 | 

`[flows_api.payloads.common.PartyIdentification287](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification287)`

 | 

The party receiving funds.

 |
| 

`token`

 | 

`[flows_api.payloads.common.Token2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Token2)`

 | 

Details of payment token.

 |
| 

`customer_device`

 | 

`[flows_api.payloads.common.CustomerDevice5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CustomerDevice5)`

 | 

Identification of the customer device performing the transaction.

 |
| 

`wallet`

 | 

`[flows_api.payloads.common.Wallet3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Wallet3)`

 | 

Container for tenders used by the customer to perform the payment transaction.

 |
| 

`cardholder`

 | 

`[flows_api.payloads.common.Cardholder22](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Cardholder22)`

 | 

Cardholder performing the card payment transaction.

 |
| 

`customer`

 | 

`[flows_api.payloads.common.Customer4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Customer4)`

 | 

Information about the customer.

 |
| 

`verification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.Verification6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Verification6)]`

 | 

Contain validation result and/or data to be validated.

 |
| 

`risk`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.RiskContext3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#RiskContext3)]`

 | 

Context of risk associated with the transaction.

 |
| 

`special_programme_qualification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SpecialProgrammeQualification2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SpecialProgrammeQualification2)]`

 | 

Data to qualify for incentive or other related programmes.

 |
| 

`instalment`

 | 

`[flows_api.payloads.common.Instalment6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Instalment6)`

 | 

Data exclusively related to a card issuer financial loan of the payment transaction, or  
instalment.

 |
| 

`additional_service`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalService2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalService2)]`

 | 

Additional functions or services to be performed in conjunction with the transaction.

 |
| 

`jurisdiction`

 | 

`[flows_api.payloads.common.Jurisdiction2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Jurisdiction2)`

 | 

Contains information that identifies or is specific to a transaction jurisdiction.

 |
| 

`settlement_service`

 | 

`[flows_api.payloads.common.SettlementService5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SettlementService5)`

 | 

Type of settlement service for specific services requiring settlement.

 |
| 

`additional_fee`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalFee3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalFee3)]`

 | 

Fees not included in the transaction amount.

 |
| 

`reconciliation`

 | 

`[flows_api.payloads.common.Reconciliation4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Reconciliation4)`

 | 

Identification of the reconciliation period between the acquirer and the issuer or their  
respective agents.

 |
| 

`processing_result`

 | 

`[flows_api.payloads.common.ProcessingResult27](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ProcessingResult27)`

 | 

Outcome of the processing of the authorisation.

 |
| 

`original_transaction`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.OriginalTransaction3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalTransaction3)]`

 | 

Contains details of the original transaction.

 |
| 

`additional_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalData2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalData2)]`

 | 

Contains additional data.

 |
| 

`protected_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.ProtectedData2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ProtectedData2)]`

 | 

Contains protected data and the attributes used to protect the data.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that can not be captured in the structured fields and/or other  
specific block.

 |
| 

`security_trailer`

 | 

`[flows_api.payloads.common.ContentInformationType41](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ContentInformationType41)`

 | 

Trailer of the message containing a MAC.

 |