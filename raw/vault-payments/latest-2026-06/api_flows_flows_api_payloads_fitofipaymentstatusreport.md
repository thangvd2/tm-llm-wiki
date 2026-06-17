---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport"
title: "FI to FI payment status report"
scraped_at: "2026-06-17T05:10:02.062Z"
images: 0
---

# FI to FI payment status report

`flows_api.payloads.fitofipaymentstatusreport` module

FI to FI payment status report

## [](#FIToFIPaymentStatusReport "Copy link to heading")FIToFIPaymentStatusReport

FIToFIPaymentStatusReport holds the supported versions of the pacs.002.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v10`

 | 

`[FIToFIPaymentStatusReportV10](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport#FIToFIPaymentStatusReportV10)`

 | 

Version 10 of the FIToFIPaymentStatusReport message.

 |

## [](#FIToFIPaymentStatusReportV10 "Copy link to heading")FIToFIPaymentStatusReportV10

Scope The FIToFIPaymentStatusReport message is sent by an instructed agent to the previous party in the payment chain. It is used to inform this party about the positive or negative status of an instruction (either single or file). It is also used to report on a pending instruction. Usage The FIToFIPaymentStatusReport message is exchanged between agents to provide status information about instructions previously sent. Its usage will always be governed by a bilateral agreement between the agents. The FIToFIPaymentStatusReport message can be used to provide information about the status (e.g. rejection, acceptance) of a credit transfer instruction, a direct debit instruction, as well as other intra-agent instructions (for example FIToFIPaymentCancellationRequest). The FIToFIPaymentStatusReport message refers to the original instruction(s) by means of references only or by means of references and a set of elements from the original instruction. The FIToFIPaymentStatusReport message can be used in domestic and cross-border scenarios. The FIToFIPaymentStatusReport may also be sent to the receiver of the payment in a real time payment scenario, as both sides of the transactions must be informed of the status of the transaction (for example either the beneficiary is credited, or the transaction is rejected).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader91](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader91)`

 | 

Set of characteristics shared by all individual transactions included in the status report  
message.

 |
| 

`original_group_information_and_status`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.OriginalGroupHeader17](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalGroupHeader17)]`

 | 

Original group information concerning the group of transactions, to which the status report  
message refers to.

 |
| 

`transaction_information_and_status`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentTransaction110](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentTransaction110)]`

 | 

Information concerning the original transactions, to which the status report message refers.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |