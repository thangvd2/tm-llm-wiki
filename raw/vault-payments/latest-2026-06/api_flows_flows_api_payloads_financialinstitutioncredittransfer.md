---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinstitutioncredittransfer"
title: "Financial Institution Credit Transfer"
scraped_at: "2026-06-17T05:09:50.945Z"
images: 0
---

# Financial Institution Credit Transfer

`flows_api.payloads.financialinstitutioncredittransfer` module

Financial Institution Credit Transfer

## [](#FinancialInstitutionCreditTransfer "Copy link to heading")FinancialInstitutionCreditTransfer

FinancialInstitutionCreditTransfer holds the supported versions of the pacs.009.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v08`

 | 

`[FinancialInstitutionCreditTransferV08](/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinstitutioncredittransfer#FinancialInstitutionCreditTransferV08)`

 | 

Version 08 of the FinancialInstitutionCreditTransfer message.

 |

## [](#FinancialInstitutionCreditTransferV08 "Copy link to heading")FinancialInstitutionCreditTransferV08

Scope The FinancialInstitutionCreditTransfer message is sent by a debtor financial institution to a creditor financial institution, directly or through other agents and/or a payment clearing and settlement system. It is used to move funds from a debtor account to a creditor, where both debtor and creditor are financial institutions. Usage The FinancialInstitutionCreditTransfer message is exchanged between agents and can contain one or more credit transfer instructions where debtor and creditor are both financial institutions. The FinancialInstitutionCreditTransfer message does not allow for grouping: a CreditTransferTransactionInformation block must be present for each credit transfer transaction. The FinancialInstitutionCreditTransfer message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader93](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader93)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`credit_transfer_transaction_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.CreditTransferTransaction36](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CreditTransferTransaction36)]`

 | 

Set of elements providing information specific to the individual credit transfer(s).

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |