---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentreversal"
title: "FI to FI payment reversal"
scraped_at: "2026-06-17T05:10:00.277Z"
images: 0
---

# FI to FI payment reversal

`flows_api.payloads.fitofipaymentreversal` module

FI to FI payment reversal

## [](#FIToFIPaymentReversal "Copy link to heading")FIToFIPaymentReversal

FIToFIPaymentReversal holds the supported versions of the pacs.007.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v13`

 | 

`[FIToFIPaymentReversalV13](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentreversal#FIToFIPaymentReversalV13)`

 | 

Version 13 of the FIToFIPaymentReversal message.

 |

## [](#FIToFIPaymentReversalV13 "Copy link to heading")FIToFIPaymentReversalV13

Scope The FinancialInstitutionToFinancialInstitutionPaymentReversal message is sent by an agent to the next party in the payment chain. It is used to reverse a payment previously executed. Usage The FIToFIPaymentReversal message is exchanged between agents to reverse a payment message that has been settled. The result will be a credit on the debtor account (when the reversed payment was a direct debit) or a debit on the creditor account (when the reversed payment was a credit transfer). The FIToFIPaymentReversal message may or may not be the follow-up of a payment message. The FIToFIPaymentReversal message refers to the original payment message by means of references only or by means of references and a set of elements from the original instruction. The FIToFIPaymentReversal message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader127](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader127)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`original_group_information`

 | 

`[flows_api.payloads.common.OriginalGroupHeader20](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalGroupHeader20)`

 | 

Information concerning the original group of transactions, to which the message refers.

 |
| 

`transaction_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentTransaction149](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentTransaction149)]`

 | 

Information concerning the original transactions, to which the reversal message refers.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |