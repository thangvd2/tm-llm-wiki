---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationresponse"
title: "Investigation response"
scraped_at: "2026-06-17T15:48:34.351Z"
images: 0
---

# Investigation response

`flows_api.payloads.investigationresponse` module

Investigation response

## [](#InvestigationResponse "Copy link to heading")InvestigationResponse

InvestigationResponse holds the supported versions of the camt.111.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v01`

 | 

`[InvestigationResponseV01](/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationresponse#InvestigationResponseV01)`

 | 

Version 01 of the InvestigationResponse message.

 |

## [](#InvestigationResponseV01 "Copy link to heading")InvestigationResponseV01

Scope The InvestigationResponse message is sent between agents to provide a response or status update on an investigation. Usage The InvestigationResponse message should be used to respond to an InvestigationRequest message. The responses cover these business scenarios - - unable to apply; - request for information; - request value date adjustment; - claim non-receipt; - request debit authorisation; - request use of funds; - payment initiation not confirmed; - miscellaenous business scenarios. The InvestigationResponse message covers one and only one transaction or entry at a time except when responding to some requests for information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`investigation_response`

 | 

`[flows_api.payloads.common.InvestigationResponse3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#InvestigationResponse3)`

 | 

Provides all details of the response to the investigation request.

 |
| 

`original_investigation_request`

 | 

`[flows_api.payloads.common.InvestigationRequest3](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#InvestigationRequest3)`

 | 

Unambiguous identification of the original investigation request.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |