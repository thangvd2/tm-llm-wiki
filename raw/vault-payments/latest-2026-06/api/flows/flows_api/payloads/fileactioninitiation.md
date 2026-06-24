---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/fileactioninitiation"
title: "File Action initiation"
scraped_at: "2026-06-17T15:48:13.005Z"
images: 0
---

# File Action initiation

`flows_api.payloads.fileactioninitiation` module

File Action initiation

## [](#FileActionInitiation "Copy link to heading")FileActionInitiation

FileActionInitiation holds the supported versions of the cafm.001.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v03`

 | 

`[FileActionInitiationV03](/vault-payments/latest/EN/api/flows/flows_api/payloads/fileactioninitiation#FileActionInitiationV03)`

 | 

Version 03 of the FileActionInitiation message.

 |

## [](#FileActionInitiationV03 "Copy link to heading")FileActionInitiationV03

The FileActionInitiation message can be initiated by any party and received by any party (acquirer, agent or issuer).

This message is used to inquire, add, change, delete or replace a file or a record.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[flows_api.payloads.common.Header71](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Header71)`

 | 

Information related to the protocol management.

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

`file_action_scope`

 | 

`[flows_api.payloads.common.FileActionScope1Code](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#FileActionScope1Code)`

 | 

Scope of file action.

 |
| 

`file_action_type`

 | 

`[flows_api.payloads.common.FileActionType2Code](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#FileActionType2Code)`

 | 

Type of file action.

 |
| 

`other_file_action_type`

 | 

`str`

 | 

Other file action type in free text.

 |
| 

`transaction_description`

 | 

`str`

 | 

Transaction data related to programmes and services, content and format based on bilateral  
agreements.

 |
| 

`continuation`

 | 

`str`

 | 

Indicates that batch or collection is not complete.

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

`system_trace_audit_number`

 | 

`str`

 | 

Number assigned by a transaction originator to assist in identifying a transaction uniquely.  
The trace number remains unchanged for all messages within a two-message exchange (for  
example, request/repeat and response)

 |
| 

`transmission_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time expressed in UTC of the message as sent by the initiator.

 |
| 

`retrieval_reference_number`

 | 

`str`

 | 

A reference supplied by the system retaining the original source information and used to  
assist in locating that information or a copy thereof.

 |
| 

`life_cycle_identification`

 | 

`str`

 | 

Transaction lifecycle identification

 |
| 

`file_name`

 | 

`str`

 | 

Identification of the file.

 |
| 

`format`

 | 

`[flows_api.payloads.common.OutputFormat5Code](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OutputFormat5Code)`

 | 

File format code.

 |
| 

`data_record`

 | 

`[flows_api.payloads.common.DataRecord1Choice](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#DataRecord1Choice)`

 | 

Content of record to be added, updated, deleted or replaced.

 |
| 

`action_date`

 | 

`str`

 | 

Date when the file action should be performed.

 |
| 

`file_security_code`

 | 

`str`

 | 

Indicates that the originator of the message is authorised to update the file.

 |
| 

`correction`

 | 

`[flows_api.payloads.common.CorrectionIdentification1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CorrectionIdentification1)`

 | 

Identifies that this batch or collection is a corrected version of a batch or collection that  
was previously sent.

 |
| 

`acceptor`

 | 

`[flows_api.payloads.common.PartyIdentification284](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PartyIdentification284)`

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

`response_code`

 | 

`str`

 | 

Response code defined in ISO 8583.

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