---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/receiptacknowledgement"
title: "Receipt acknowledgement"
scraped_at: "2026-06-17T05:10:24.452Z"
images: 0
---

# Receipt acknowledgement

`flows_api.payloads.receiptacknowledgement` module

Receipt acknowledgement

## [](#ReceiptAcknowledgement "Copy link to heading")ReceiptAcknowledgement

ReceiptAcknowledgement holds the supported versions of the admi.007.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v01`

 | 

`[ReceiptAcknowledgementV01](/vault-payments/latest/EN/api/flows/flows_api/payloads/receiptacknowledgement#ReceiptAcknowledgementV01)`

 | 

Version 01 of the ReceiptAcknowledgement message.

 |

## [](#ReceiptAcknowledgementV01 "Copy link to heading")ReceiptAcknowledgementV01

The ReceiptAcknowledgement message is sent by the transaction administrator to a member of the system and vice versa. It is sent to acknowledge the receipt of one or multiple messages sent previously. The Acknowledgement message is 1) an application receipt acknowledgement and 2) conveys information about the processing of the original message(s). In case of 2) the ReceiptAcknowledgement can be used as a Generic error message, which provides information about the status (e.g. rejection, acceptance) of an instruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_identification`

 | 

`[flows_api.payloads.common.MessageHeader10](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#MessageHeader10)`

 | 

Specifies the identification the message.

 |
| 

`report`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.ReceiptAcknowledgementReport2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ReceiptAcknowledgementReport2)]`

 | 

Provides report details on the request.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |