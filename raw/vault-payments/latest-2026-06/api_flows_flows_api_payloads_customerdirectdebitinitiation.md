---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/customerdirectdebitinitiation"
title: "Customer direct debit initiation"
scraped_at: "2026-06-17T05:09:43.791Z"
images: 0
---

# Customer direct debit initiation

`flows_api.payloads.customerdirectdebitinitiation` module

Customer direct debit initiation

## [](#CustomerDirectDebitInitiation "Copy link to heading")CustomerDirectDebitInitiation

CustomerDirectDebitInitiation holds the supported versions of the pain.008.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v08`

 | 

`[CustomerDirectDebitInitiationV08](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerdirectdebitinitiation#CustomerDirectDebitInitiationV08)`

 | 

Version 08 of the CustomerDirectDebitInitiation message.

 |

## [](#CustomerDirectDebitInitiationV08 "Copy link to heading")CustomerDirectDebitInitiationV08

Scope The CustomerDirectDebitInitiation message is sent by the initiating party to the forwarding agent or creditor agent. It is used to request single or bulk collection(s) of funds from one or various debtor’s account(s) for a creditor. Usage The CustomerDirectDebitInitiation message can contain one or more direct debit instructions. The message can be used in a direct or a relay scenario: - In a direct scenario, the message is sent directly to the creditor agent. The creditor agent is the account servicer of the creditor. - In a relay scenario, the message is sent to a forwarding agent. The forwarding agent acts as a concentrating financial institution. It will forward the CustomerDirectDebitInitiation message to the creditor agent. The message can also be used by an initiating party that has authority to send the message on behalf of the creditor. This caters for example for the scenario of a payments factory initiating all payments on behalf of a large corporate. The CustomerDirectDebitInitiation message can be used in domestic and cross-border scenarios. The CustomerDirectDebitInitiation may or may not contain mandate related information, i.e. extracts from a mandate, such as MandateIdentification or DateOfSignature. The CustomerDirectDebitInitiation message must not be considered as a mandate. The CustomerDirectDebitInitiation message must not be used by the creditor agent to execute the direct debit instruction(s). The FIToFICustomerDirectDebit message must be used instead.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader83](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader83)`

 | 

Set of characteristics shared by all individual transactions included in the message.

 |
| 

`payment_information`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.PaymentInstruction29](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentInstruction29)]`

 | 

Set of characteristics that apply to the credit side of the payment transactions included in  
the direct debit transaction initiation.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |