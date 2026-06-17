---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequest"
title: "Creditor Payment Activation Request"
scraped_at: "2026-06-17T05:09:38.515Z"
images: 0
---

# Creditor Payment Activation Request

`flows_api.payloads.creditorpaymentactivationrequest` module

Creditor Payment Activation Request

## [](#CreditorPaymentActivationRequest "Copy link to heading")CreditorPaymentActivationRequest

CreditorPaymentActivationRequest holds the supported versions of the pain.013.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v07`

 | 

`[CreditorPaymentActivationRequestV07](/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequest#CreditorPaymentActivationRequestV07)`

 | 

Version 07 of the CreditorPaymentActivationRequest message.

 |

## [](#CreditorPaymentActivationRequestV07 "Copy link to heading")CreditorPaymentActivationRequestV07

The CreditorPaymentActivationRequest message is sent by the Creditor sending party to the Debtor receiving party, directly or through agents. It is used by a Creditor to request movement of funds from the debtor account to a creditor.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader78](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader78)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`payment_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentInstruction31](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentInstruction31)]`

 | 

Set of characteristics that applies to the debit side of the payment transactions included in  
the creditor payment initiation.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |