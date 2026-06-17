---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/systemeventnotification"
title: "System Event Notification"
scraped_at: "2026-06-17T05:10:31.633Z"
images: 0
---

# System Event Notification

`flows_api.payloads.systemeventnotification` module

System Event Notification

## [](#SystemEventNotification "Copy link to heading")SystemEventNotification

SystemEventNotification holds the supported versions of the admi.004.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v02`

 | 

`[SystemEventNotificationV02](/vault-payments/latest/EN/api/flows/flows_api/payloads/systemeventnotification#SystemEventNotificationV02)`

 | 

Version 02 of the SystemEventNotification message.

 |

## [](#SystemEventNotificationV02 "Copy link to heading")SystemEventNotificationV02

Scope The SystemEventNotification message is sent by a central system to notify the occurrence of an event in a central system. Usage The message can be used by a central settlement system to inform its participants of an event that is going to occur in the system, for instance that the system will be down at a certain time, etc.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`event_information`

 | 

`[flows_api.payloads.common.Event2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Event2)`

 | 

Detailed information about a system event.

 |