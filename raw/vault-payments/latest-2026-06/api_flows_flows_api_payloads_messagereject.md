---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/messagereject"
title: "Message reject"
scraped_at: "2026-06-17T05:10:20.921Z"
images: 0
---

# Message reject

`flows_api.payloads.messagereject` module

Message reject

## [](#MessageReject "Copy link to heading")MessageReject

MessageReject holds the supported versions of the admi.002.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v01`

 | 

`[MessageRejectV01](/vault-payments/latest/EN/api/flows/flows_api/payloads/messagereject#MessageRejectV01)`

 | 

Version 01 of the MessageReject message.

 |

## [](#MessageRejectV01 "Copy link to heading")MessageRejectV01

Scope The MessageReject message is sent by a central system to notify the rejection of a previously received message. Usage The message provides specific information about the rejection reason.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`related_reference`

 | 

`[flows_api.payloads.common.MessageReference](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#MessageReference)`

 | 

Refers to the identification of the message previously received and for which the rejection  
is notified.

 |
| 

`reason`

 | 

`[flows_api.payloads.common.RejectionReason2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#RejectionReason2)`

 | 

General information about the reason of the message rejection.

 |