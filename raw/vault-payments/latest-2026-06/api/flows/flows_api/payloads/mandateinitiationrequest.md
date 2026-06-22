---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateinitiationrequest"
title: "Mandate Initiation Request"
scraped_at: "2026-06-17T15:48:41.389Z"
images: 0
---

# Mandate Initiation Request

`flows_api.payloads.mandateinitiationrequest` module

Mandate Initiation Request

## [](#MandateInitiationRequest "Copy link to heading")MandateInitiationRequest

MandateInitiationRequest holds the supported versions of the pain.009.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v06`

 | 

`[MandateInitiationRequestV06](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateinitiationrequest#MandateInitiationRequestV06)`

 | 

Version 06 of the MandateInitiationRequest message.

 |

## [](#MandateInitiationRequestV06 "Copy link to heading")MandateInitiationRequestV06

Scope The MandateInitiationRequest message is sent by the initiator of the request to his agent. The initiator can either be the debtor or the creditor. The MandateInitiationRequest message is forwarded by the agent of the initiator to the agent of the counterparty. The MandateInitiationRequest message is used to setup the instruction that allows the debtor agent to accept instructions from the creditor, through the creditor agent, to debit the account of the debtor. Usage The MandateInitiationRequest message can contain one or more request(s) to setup a specific mandate. The messages can be exchanged between creditor and creditor agent or debtor and debtor agent and between creditor agent and debtor agent. The message can also be used by an initiating party that has authority to send the message on behalf of the creditor or debtor. The MandateInitiationRequest message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader80](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader80)`

 | 

Set of characteristics to identify the message and parties playing a role in the mandate  
initiation, but which are not part of the mandate.

 |
| 

`mandate`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.Mandate13](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Mandate13)]`

 | 

Set of elements used to provide the details of the mandate signed between the (ultimate)  
creditor and the (ultimate) debtor.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |