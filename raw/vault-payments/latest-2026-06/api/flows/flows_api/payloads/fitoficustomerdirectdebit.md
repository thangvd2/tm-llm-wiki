---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomerdirectdebit"
title: "FI to FI customer direct debit"
scraped_at: "2026-06-17T15:48:20.111Z"
images: 0
---

# FI to FI customer direct debit

`flows_api.payloads.fitoficustomerdirectdebit` module

FI to FI customer direct debit

## [](#FIToFICustomerDirectDebit "Copy link to heading")FIToFICustomerDirectDebit

FIToFICustomerDirectDebit holds the supported versions of the pacs.003.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v08`

 | 

`[FIToFICustomerDirectDebitV08](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomerdirectdebit#FIToFICustomerDirectDebitV08)`

 | 

Version 08 of the FIToFICustomerDirectDebit message.

 |

## [](#FIToFICustomerDirectDebitV08 "Copy link to heading")FIToFICustomerDirectDebitV08

Scope The FinancialInstitutionToFinancialInstitutionCustomerDirectDebit message is sent by the creditor agent to the debtor agent, directly or through other agents and/or a payment clearing and settlement system. It is used to collect funds from a debtor account for a creditor. Usage The FItoFICustomerDirectDebit message can contain one or more customer direct debit instructions. The FIToFICustomerDirectDebit message does not allow for grouping. The FItoFICustomerDirectDebit message may or may not contain mandate related information, that is extracts from a mandate, such as the MandateIdentification or DateOfSignature. The FIToFICustomerDirectDebit message must not be considered as a mandate. The FItoFICustomerDirectDebit message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader94](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader94)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`direct_debit_transaction_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.DirectDebitTransactionInformation24](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#DirectDebitTransactionInformation24)]`

 | 

Set of elements providing information specific to the individual direct debit(s).

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |