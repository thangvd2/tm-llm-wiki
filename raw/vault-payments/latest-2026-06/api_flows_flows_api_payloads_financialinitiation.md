---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinitiation"
title: "Financial initiation"
scraped_at: "2026-06-17T05:09:49.203Z"
images: 0
---

# Financial initiation

`flows_api.payloads.financialinitiation` module

Financial initiation

## [](#FinancialInitiationV04 "Copy link to heading")FinancialInitiationV04

The FinancialInitiation message is sent by an acquirer or an agent to an issuer to request approval of a card transaction or to inform about the completion of an authorisation. It allows the approved transaction amount to be billed or posted on the cardholder’s account. It can also be sent by an issuer to an acquirer or agent to advise that an authorisation has been successfully completed for the final amount and requests the clearing of the transaction.

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

`[flows_api.payloads.common.TransactionIdentification55](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#TransactionIdentification55)`

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
ISO 8583:1987 bit 90 and ISO 8583:1993/2003 bit 56

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

`dispute_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.DisputeData4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#DisputeData4)]`

 | 

Information about the dispute.

 |
| 

`documentation`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.DisputeDocumentation1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#DisputeDocumentation1)]`

 | 

Supporting documentation information related to the dispute.

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

`[flows_api.payloads.common.OriginalTransaction3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalTransaction3)`

 | 

Contains details of the original transaction.

 |
| 

`addendum_data`

 | 

`[flows_api.payloads.common.AddendumData6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AddendumData6)`

 | 

Component contains data structures applicable to certain industries that require specific  
data within transaction messages.

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