---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequeststatusreport"
title: "Creditor Payment Activation Request Status Report"
scraped_at: "2026-06-17T15:48:05.853Z"
images: 0
---

# Creditor Payment Activation Request Status Report

`flows_api.payloads.creditorpaymentactivationrequeststatusreport` module

Creditor Payment Activation Request Status Report

## [](#CreditorPaymentActivationRequestStatusReport "Copy link to heading")CreditorPaymentActivationRequestStatusReport

CreditorPaymentActivationRequestStatusReport holds the supported versions of the pain.014.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v07`

 | 

`[CreditorPaymentActivationRequestStatusReportV07](/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequeststatusreport#CreditorPaymentActivationRequestStatusReportV07)`

 | 

Version 07 of the CreditorPaymentActivationRequestStatusReport message.

 |

## [](#CreditorPaymentActivationRequestStatusReportV07 "Copy link to heading")CreditorPaymentActivationRequestStatusReportV07

The CreditorPaymentActivationRequestStatusReport message is sent by a party to the next party in the creditor payment activation request chain. It is used to inform the latter about the positive or negative status of a creditor payment activation request (either single or file).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader87](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader87)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`original_group_information_and_status`

 | 

`[flows_api.payloads.common.OriginalGroupInformation30](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalGroupInformation30)`

 | 

Original group information concerning the group of transactions, to which the status report  
message refers to.

 |
| 

`original_payment_information_and_status`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.OriginalPaymentInstruction31](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#OriginalPaymentInstruction31)]`

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