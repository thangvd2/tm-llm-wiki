---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/frauddispositioninitiation"
title: "Fraud Disposition Initiation"
scraped_at: "2026-06-17T05:10:05.605Z"
images: 0
---

# Fraud Disposition Initiation

`flows_api.payloads.frauddispositioninitiation` module

Fraud Disposition Initiation

## [](#FraudDispositionInitiation "Copy link to heading")FraudDispositionInitiation

FraudDispositionInitiation holds the supported versions of the cafr.003.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v03`

 | 

`[FraudDispositionInitiationV03](/vault-payments/latest/EN/api/flows/flows_api/payloads/frauddispositioninitiation#FraudDispositionInitiationV03)`

 | 

Version 03 of the FraudDispositionInitiation message.

 |

## [](#FraudDispositionInitiationV03 "Copy link to heading")FraudDispositionInitiationV03

A FraudDispositionInitiation message is usually sent by an agent to a financial institution acting as an acquirer or as an issuer to report about the disposition of a confirmed fraudulent transaction.

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

`reported_fraud`

 | 

`[flows_api.payloads.common.ReportedFraud5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ReportedFraud5)`

 | 

Fraud reporting type information.

 |
| 

`fraud_disposition_status`

 | 

`[flows_api.payloads.common.FraudDispositionStatus2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#FraudDispositionStatus2)`

 | 

Contains the disposition of the previously submitted fraud reporting message.

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

`[flows_api.payloads.common.CardData15](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CardData15)`

 | 

Card or payment token performing the transaction.

 |
| 

`fraud_transaction_identification`

 | 

`str`

 | 

Identification of the transaction reporting the fraud.

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

`[flows_api.payloads.common.ProgrammeMode5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ProgrammeMode5)`

 | 

Programme, network, or brand processes the transaction.

 |
| 

`additional_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalInformation30](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalInformation30)]`

 | 

Additional information relevant for the settlement report.

 |
| 

`token`

 | 

`[flows_api.payloads.common.Token2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Token2)`

 | 

Details of payment token.

 |
| 

`cardholder`

 | 

`[flows_api.payloads.common.Cardholder22](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Cardholder22)`

 | 

Cardholder performing the card payment transaction.

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

`[flows_api.payloads.common.SettlementService6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SettlementService6)`

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

Trailer of the message containing a MAC

 |