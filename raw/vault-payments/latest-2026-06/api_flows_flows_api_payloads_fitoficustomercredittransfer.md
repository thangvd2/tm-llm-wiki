---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer"
title: "FI to FI customer credit transfer"
scraped_at: "2026-06-17T05:09:52.711Z"
images: 0
---

# FI to FI customer credit transfer

`flows_api.payloads.fitoficustomercredittransfer` module

FI to FI customer credit transfer

## [](#FIToFICustomerCreditTransfer "Copy link to heading")FIToFICustomerCreditTransfer

FIToFICustomerCreditTransfer holds the supported versions of the pacs.008.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v08`

 | 

`[FIToFICustomerCreditTransferV08](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransferV08)`

 | 

Version 08 of the FIToFICustomerCreditTransfer message.

 |

## [](#FIToFICustomerCreditTransferV08 "Copy link to heading")FIToFICustomerCreditTransferV08

Scope The FinancialInstitutionToFinancialInstitutionCustomerCreditTransfer message is sent by the debtor agent to the creditor agent, directly or through other agents and/or a payment clearing and settlement system. It is used to move funds from a debtor account to a creditor. Usage The FIToFICustomerCreditTransfer message is exchanged between agents and can contain one or more customer credit transfer instructions. The FIToFICustomerCreditTransfer message does not allow for grouping: a CreditTransferTransactionInformation block must be present for each credit transfer transaction. The FIToFICustomerCreditTransfer message can be used in different ways: - If the instructing agent and the instructed agent wish to use their direct account relationship in the currency of the transfer then the message contains both the funds for the customer transfer(s) as well as the payment details; - If the instructing agent and the instructed agent have no direct account relationship in the currency of the transfer, or do not wish to use their account relationship, then other (reimbursement) agents will be involved to cover for the customer transfer(s). The FIToFICustomerCreditTransfer contains only the payment details and the instructing agent must cover the customer transfer by sending a FinancialInstitutionCreditTransfer to a reimbursement agent. This payment method is called the Cover method; - If more than two financial institutions are involved in the payment chain and if the FIToFICustomerCreditTransfer is sent from one financial institution to the next financial institution in the payment chain, then the payment method is called the Serial method. The FIToFICustomerCreditTransfer message can be used in domestic and cross-border scenarios.

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

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.CreditTransferTransaction39](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CreditTransferTransaction39)]`

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