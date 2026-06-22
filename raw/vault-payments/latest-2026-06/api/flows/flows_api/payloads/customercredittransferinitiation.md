---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation"
title: "Customer credit transfer initiation"
scraped_at: "2026-06-17T15:48:07.638Z"
images: 0
---

# Customer credit transfer initiation

`flows_api.payloads.customercredittransferinitiation` module

Customer credit transfer initiation

## [](#CustomerCreditTransferInitiation "Copy link to heading")CustomerCreditTransferInitiation

CustomerCreditTransferInitiation holds the supported versions of the pain.001.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v09`

 | 

`[CustomerCreditTransferInitiationV09](/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation#CustomerCreditTransferInitiationV09)`

 | 

Version 09 of the CustomerCreditTransferInitiation message.

 |

## [](#CustomerCreditTransferInitiationV09 "Copy link to heading")CustomerCreditTransferInitiationV09

Scope The CustomerCreditTransferInitiation message is sent by the initiating party to the forwarding agent or debtor agent. It is used to request movement of funds from the debtor account to a creditor. Usage The CustomerCreditTransferInitiation message can contain one or more customer credit transfer instructions. The CustomerCreditTransferInitiation message is used to exchange: - One or more instances of a credit transfer initiation; - Payment transactions that result in book transfers at the debtor agent or payments to another financial institution; - Payment transactions that result in an electronic cash transfer to the creditor account or in the emission of a cheque. The message can be used in a direct or a relay scenario: - In a direct scenario, the message is sent directly to the debtor agent. The debtor agent is the account servicer of the debtor. - In a relay scenario, the message is sent to a forwarding agent. The forwarding agent acts as a concentrating financial institution. It will forward the CustomerCreditTransferInitiation message to the debtor agent. The message can also be used by an initiating party that has authority to send the message on behalf of the debtor. This caters for example for the scenario of a payments factory initiating all payments on behalf of a large corporate. The CustomerCreditTransferInitiation message can be used in domestic and cross-border scenarios. The CustomerCreditTransferInitiation message must not be used by the debtor agent to execute the credit transfer instruction(s). The FIToFICustomerCreditTransfer message must be used instead.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader85](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader85)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`payment_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentInstruction30](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentInstruction30)]`

 | 

Set of characteristics that applies to the debit side of the payment transactions included in  
the credit transfer initiation.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |