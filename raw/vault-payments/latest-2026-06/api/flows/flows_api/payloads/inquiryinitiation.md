---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/inquiryinitiation"
title: "Inquiry initiation"
scraped_at: "2026-06-17T15:48:30.830Z"
images: 0
---

# Inquiry initiation

`flows_api.payloads.inquiryinitiation` module

Inquiry initiation

## [](#InquiryInitiationV03 "Copy link to heading")InquiryInitiationV03

The InquiryInitiation message is sent by an acquirer or agent to an issuer to request information related to the card (e.g. about a cardholder, the availability of funds, etc.).

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

`transaction_characteristics`

 | 

`[flows_api.payloads.common.TransactionCharacteristics2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionCharacteristics2)`

 | 

Contains the key data elements of the transaction.

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

`account_from`

 | 

`[flows_api.payloads.common.AccountDetails4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountDetails4)`

 | 

Identifies a customer account or a relationship to its account affected for debit, inquiries  
and the source of funding for transfers.

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

`[flows_api.payloads.common.TransactionIdentification54](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionIdentification54)`

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

`transaction_amounts`

 | 

`[flows_api.payloads.common.TransactionAmounts4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionAmounts4)`

 | 

Amounts of the card transaction.

 |
| 

`additional_amount`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalAmounts4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalAmounts4)]`

 | 

Amounts that are not part of the transaction amount and not included in reconciliation.

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

`[flows_api.payloads.common.Context23](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Context23)`

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

`original_response_code`

 | 

`str`

 | 

Original response code.

 |
| 

`processing_result`

 | 

`[flows_api.payloads.common.ProcessingResult27](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ProcessingResult27)`

 | 

Outcome of the processing of the authorisation.

 |
| 

`additional_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalData2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalData2)]`

 | 

Contains additional data.

 |
| 

`strong_customer_authentication`

 | 

`[flows_api.payloads.common.StrongCustomerAuthentication2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#StrongCustomerAuthentication2)`

 | 

EU PSD2 Strong Consumer Authentication data.

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