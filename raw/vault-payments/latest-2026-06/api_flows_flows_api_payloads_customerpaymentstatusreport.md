---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport"
title: "Customer Payment Status Report"
scraped_at: "2026-06-17T05:09:45.633Z"
images: 0
---

# Customer Payment Status Report

`flows_api.payloads.customerpaymentstatusreport` module

Customer Payment Status Report

## [](#CustomerPaymentStatusReport "Copy link to heading")CustomerPaymentStatusReport

CustomerPaymentStatusReport holds the supported versions of the pain.002.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v10`

 | 

`[CustomerPaymentStatusReportV10](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport#CustomerPaymentStatusReportV10)`

 | 

Version 10 of the CustomerPaymentStatusReport message.

 |

## [](#CustomerPaymentStatusReportV10 "Copy link to heading")CustomerPaymentStatusReportV10

Scope The CustomerPaymentStatusReport message is sent by an instructed agent to the previous party in the payment chain. It is used to inform this party about the positive or negative status of an instruction (either single or file). It is also used to report on a pending instruction. Usage The CustomerPaymentStatusReport message is exchanged between an agent and a non-financial institution customer to provide status information on instructions previously sent. Its usage will always be governed by a bilateral agreement between the agent and the non-financial institution customer. The CustomerPaymentStatusReport message can be used to provide information about the status (for example a rejection, an acceptance) of the initiation of a credit transfer, a direct debit, as well as on the initiation of other customer instructions. The CustomerPaymentStatusReport message refers to the original instruction(s) by means of references only or by means of references and a set of elements from the original instruction. The CustomerPaymentStatusReport message can be used in domestic and cross-border scenarios. The CustomerPaymentStatusReport may also be sent to the receiver of the payment in a real time payment scenario, as both sides of the transactions must be informed of the status of the transaction (that is either the beneficiary is credited, or the transaction is rejected).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader86](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader86)`

 | 

Set of characteristics shared by all individual transactions included in the status report  
message.

 |
| 

`original_group_information_and_status`

 | 

`[flows_api.payloads.common.OriginalGroupHeader17](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalGroupHeader17)`

 | 

Original group information concerning the group of transactions, to which the status report  
message refers to.

 |
| 

`original_payment_information_and_status`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.OriginalPaymentInstruction32](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalPaymentInstruction32)]`

 | 

Information concerning the original payment information, to which the status report message  
refers.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |