---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/paymentreturn"
title: "Payment return"
scraped_at: "2026-06-17T15:48:45.002Z"
images: 0
---

# Payment return

`flows_api.payloads.paymentreturn` module

Payment return

## [](#PaymentReturn "Copy link to heading")PaymentReturn

PaymentReturn holds the supported versions of the pacs.004.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v09`

 | 

`[PaymentReturnV09](/vault-payments/latest/EN/api/flows/flows_api/payloads/paymentreturn#PaymentReturnV09)`

 | 

Version 09 of the PaymentReturn message.

 |

## [](#PaymentReturnV09 "Copy link to heading")PaymentReturnV09

Scope The PaymentReturn message is sent by an agent to the previous agent in the payment chain to undo a payment previously settled. Usage The PaymentReturn message is exchanged between agents to return funds after settlement of credit transfer instructions (that is FIToFICustomerCreditTransfer message and FinancialInstitutionCreditTransfer message) or direct debit instructions (FIToFICustomerDirectDebit message). The PaymentReturn message should not be used between agents and non-financial institution customers. Non-financial institution customers will be informed about a debit or a credit on their account(s) through a BankToCustomerDebitCreditNotification message ('notification') and/or BankToCustomerAccountReport/BankToCustomerStatement message ('statement'). The PaymentReturn message can be used to return single instructions or multiple instructions from one or different files. The PaymentReturn message can be used in domestic and cross-border scenarios. The PaymentReturn message refers to the original instruction(s) by means of references only or by means of references and a set of elements from the original instruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader90](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader90)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`original_group_information`

 | 

`[flows_api.payloads.common.OriginalGroupHeader18](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalGroupHeader18)`

 | 

Information concerning the original group of transactions, to which the message refers.

 |
| 

`transaction_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentTransaction112](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentTransaction112)]`

 | 

Information concerning the original transactions, to which the return message refers.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |