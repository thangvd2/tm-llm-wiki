---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusrequest"
title: "Payment status request"
scraped_at: "2026-06-17T05:10:03.864Z"
images: 0
---

# Payment status request

`flows_api.payloads.fitofipaymentstatusrequest` module

Payment status request

## [](#FIToFIPaymentStatusRequest "Copy link to heading")FIToFIPaymentStatusRequest

FIToFIPaymentStatusRequest holds the supported versions of the pacs.028.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v03`

 | 

`[FIToFIPaymentStatusRequestV03](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusrequest#FIToFIPaymentStatusRequestV03)`

 | 

Version 03 of the FIToFIPaymentStatusRequest message.

 |

## [](#FIToFIPaymentStatusRequestV03 "Copy link to heading")FIToFIPaymentStatusRequestV03

Scope The FinancialInstitutionToFinancialInstitutionPaymentStatusRequest message is sent by the debtor agent to the creditor agent, directly or through other agents and/or a payment clearing and settlement system. It is used to request a FIToFIPaymentStatusReport message containing information on the status of a previously sent instruction. Usage The FIToFIPaymentStatusRequest message is exchanged between agents to request status information about instructions previously sent. Its usage will always be governed by a bilateral agreement between the agents. The FIToFIPaymentStatusRequest message can be used to request information about the status (e.g. rejection, acceptance) of a credit transfer instruction, a direct debit instruction, as well as other intra-agent instructions (for example FIToFIPaymentCancellationRequest). The FIToFIPaymentStatusRequest message refers to the original instruction(s) by means of references only or by means of references and a set of elements from the original instruction. The FIToFIPaymentStatusRequest message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader91](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader91)`

 | 

Set of characteristics shared by all individual transactions included in the status request  
message.

 |
| 

`original_group_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.OriginalGroupInformation27](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalGroupInformation27)]`

 | 

Original group information concerning the group of transactions, to which the status request  
message refers to.

 |
| 

`transaction_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentTransaction113](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentTransaction113)]`

 | 

Information concerning the original transaction, to which the status request message refers.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |