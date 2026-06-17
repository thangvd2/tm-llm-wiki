---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateamendmentrequest"
title: "Mandate Amendment Request"
scraped_at: "2026-06-17T05:10:14.505Z"
images: 0
---

# Mandate Amendment Request

`flows_api.payloads.mandateamendmentrequest` module

Mandate Amendment Request

## [](#MandateAmendmentRequest "Copy link to heading")MandateAmendmentRequest

MandateAmendmentRequest holds the supported versions of the pain.010.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v06`

 | 

`[MandateAmendmentRequestV06](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateamendmentrequest#MandateAmendmentRequestV06)`

 | 

Version 06 of the MandateAmendmentRequest message.

 |

## [](#MandateAmendmentRequestV06 "Copy link to heading")MandateAmendmentRequestV06

Scope The MandateAmendmentRequest message is sent by the initiator of the request to his agent and/or counterparty. The initiator can both be the debtor or the creditor (or where appropriate the debtor agent). The MandateAmendmentRequest message is forwarded by the agent of the initiator to the agent of the counterparty. A MandateAmendmentRequest message is used to request the amendment of specific information in an existing mandate. The MandateAmendmentRequest message must reflect the new data of the element(s) to be amended and at a minimum a unique reference to the existing mandate. If accepted, this MandateAmendmentRequest message together with the MandateAcceptanceReport message confirming the acceptance will be considered as a valid amendment on an existing mandate, agreed upon by all parties. The amended mandate will from then on be considered the valid mandate. Usage The MandateAmendmentRequest message can contain one or more request(s) to amend a specific mandate. The messages can be exchanged between creditor and creditor agent or debtor and debtor agent and between creditor agent and debtor agent. The message can also be used by an initiating party that has authority to send the message on behalf of the creditor or debtor. The MandateAmendmentRequest message can be used in domestic and cross-border scenarios. If all elements in the existing Mandate need to be amended or the underlying contract is different, then the MandateAmendmentRequest message should not be used. The existing Mandate has to be cancelled and a new Mandate has to be initiated.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader80](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader80)`

 | 

Set of characteristics to identify the message and parties playing a role in the amendment of  
the mandate, but which are not part of the mandate.

 |
| 

`underlying_amendment_details`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.MandateAmendment6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#MandateAmendment6)]`

 | 

Set of elements used to provide details on the amendment request.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |