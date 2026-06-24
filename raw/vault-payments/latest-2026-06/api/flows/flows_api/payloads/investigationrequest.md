---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationrequest"
title: "Investigation request"
scraped_at: "2026-06-17T15:48:32.592Z"
images: 0
---

# Investigation request

`flows_api.payloads.investigationrequest` module

Investigation request

## [](#InvestigationRequest "Copy link to heading")InvestigationRequest

InvestigationRequest holds the supported versions of the camt.110.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v01`

 | 

`[InvestigationRequestV01](/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationrequest#InvestigationRequestV01)`

 | 

Version 01 of the InvestigationRequest message.

 |

## [](#InvestigationRequestV01 "Copy link to heading")InvestigationRequestV01

Scope The InvestigationRequest message is sent between agents or parties to create a payment or account related investigation or request a status update on an open payment or account related investigation.

Usage The InvestigationRequest message can be used to create an investigation for these business scenarios - - unable to apply; - request for information; - request value date adjustment; - claim non-receipt; - request debit authorisation; - request use of funds; - payment initiation not confirmed; - miscellaenous business scenarios. The InvestigationRequest message covers one and only one transaction or entry at a time in most business scenarios. In a request for information an agent or party may refer to more than one transaction within the Narrative element. For all other scenarios if an agent or party needs to create investigations that relate to several transactions or entries then several InvestigationRequest messages should be sent.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`investigation_request`

 | 

`[flows_api.payloads.common.InvestigationRequest2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#InvestigationRequest2)`

 | 

Details related to the investigation request.

 |
| 

`investigation_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.InvestigationReason2](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#InvestigationReason2)]`

 | 

Provides all details of the reason for the investigation request.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |