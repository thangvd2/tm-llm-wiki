---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/reversalinitiation"
title: "Reversal initiation"
scraped_at: "2026-06-17T05:10:29.852Z"
images: 0
---

# Reversal initiation

`flows_api.payloads.reversalinitiation` module

Reversal initiation

## [](#ReversalInitiationV04 "Copy link to heading")ReversalInitiationV04

The ReversalInitiation message is sent by an acquirer, an originator or an agent to an issuer to request or advise of the reversal of an authorisation by the issuer. A reversal is a partial or complete nullification of the effects of a previous authorisation, financial presentment or financial accumulation presentment that cannot be processed as instructed (for example, is undeliverable and cancelled or the acquirer timed out waiting for a response).

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

`[flows_api.payloads.common.TransactionCharacteristics1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionCharacteristics1)`

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

`[flows_api.payloads.common.CardData13](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CardData13)`

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

`account_to`

 | 

`[flows_api.payloads.common.AccountDetails4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountDetails4)`

 | 

Identifies a customer account or a relationship to its account affected for credits,  
inquiries and the destination account for funds transfers.

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

`[flows_api.payloads.common.TransactionIdentification57](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionIdentification57)`

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

`transaction_amounts`

 | 

`[flows_api.payloads.common.TransactionAmounts3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionAmounts3)`

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

`original_data_elements`

 | 

`[flows_api.payloads.common.OriginalDataElements3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalDataElements3)`

 | 

Data elements contained in the original message.

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

`[flows_api.payloads.common.Terminal8](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Terminal8)`

 | 

Payment terminal or ATM performing the transaction.

 |
| 

`context`

 | 

`[flows_api.payloads.common.Context21](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Context21)`

 | 

Context of the reversal transaction.

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

`wallet`

 | 

`[flows_api.payloads.common.Wallet3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Wallet3)`

 | 

Container for tenders used by the customer to perform the payment transaction.

 |
| 

`special_programme_qualification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SpecialProgrammeQualification2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SpecialProgrammeQualification2)]`

 | 

Data to qualify for incentive or other related programmes.

 |
| 

`account_balance`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AccountBalance3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountBalance3)]`

 | 

Balance of the account involved in the card transaction.

 |
| 

`additional_service`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AdditionalService2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AdditionalService2)]`

 | 

Additional functions or services to be performed in conjunction with the transaction.

 |
| 

`funds_services`

 | 

`[flows_api.payloads.common.FundingService3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#FundingService3)`

 | 

Financial services related to the account.

 |
| 

`deposit_details`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.DepositDetails3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#DepositDetails3)]`

 | 

Contains ATM deposit details.

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