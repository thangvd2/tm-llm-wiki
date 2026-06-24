---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/mandatecancellationrequest"
title: "Mandate Cancellation Request"
scraped_at: "2026-06-17T15:48:39.641Z"
images: 0
---

# Mandate Cancellation Request

`flows_api.payloads.mandatecancellationrequest` module

Mandate Cancellation Request

## [](#MandateCancellationRequest "Copy link to heading")MandateCancellationRequest

MandateCancellationRequest holds the supported versions of the pain.011.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v06`

 | 

`[MandateCancellationRequestV06](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandatecancellationrequest#MandateCancellationRequestV06)`

 | 

Version 06 of the MandateCancellationRequest message.

 |

## [](#MandateCancellationRequestV06 "Copy link to heading")MandateCancellationRequestV06

Scope The MandateCancellationRequest message is sent by the initiator of the request to his agent. The initiator can either be the debtor or the creditor. The MandateCancellationRequest message is forwarded by the agent of the initiator to the agent of the counterparty. A MandateCancellationRequest message is used to request the cancellation of an existing mandate. If accepted, this MandateCancellationRequest message together with the MandateAcceptanceReport message confirming the acceptance will be considered a valid cancellation of an existing mandate, agreed upon by all parties. Usage The MandateCancellationRequest message can contain one or more request(s) to cancel a specific mandate. The messages can be exchanged between creditor and creditor agent or debtor and debtor agent and between creditor agent and debtor agent. The message can also be used by an initiating party that has authority to send the message on behalf of the creditor or debtor. The MandateCancellationRequest message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader80](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader80)`

 | 

Set of characteristics to identify the message and parties playing a role in the cancellation  
of the mandate, but which are not part of the mandate.

 |
| 

`underlying_cancellation_details`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.MandateCancellation6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#MandateCancellation6)]`

 | 

Set of elements used to provide details on the cancellation request.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |