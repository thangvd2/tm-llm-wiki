---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/resolutionofinvestigation"
title: "Resolution of investigation"
scraped_at: "2026-06-17T05:10:28.043Z"
images: 0
---

# Resolution of investigation

`flows_api.payloads.resolutionofinvestigation` module

Resolution of investigation

## [](#ResolutionOfInvestigation "Copy link to heading")ResolutionOfInvestigation

ResolutionOfInvestigation holds the supported versions of the camt.029.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v09`

 | 

`[ResolutionOfInvestigationV09](/vault-payments/latest/EN/api/flows/flows_api/payloads/resolutionofinvestigation#ResolutionOfInvestigationV09)`

 | 

Version 09 of the ResolutionOfInvestigation message.

 |

## [](#ResolutionOfInvestigationV09 "Copy link to heading")ResolutionOfInvestigationV09

Scope The ResolutionOfInvestigation message is sent by a case assignee to a case creator/case assigner. This message is used to inform of the resolution of a case, and optionally provides details about. - the corrective action undertaken by the case assignee; - information on the return where applicable. Usage The ResolutionOfInvestigation message is used by the case assignee to inform a case creator or case assigner about the resolution of a: - request to cancel payment case; - request to modify payment case; - unable to apply case; - claim non receipt case. The ResolutionOfInvestigation message covers one and only one case at a time. If the case assignee needs to communicate about several cases, then several Resolution Of Investigation messages must be sent. The ResolutionOfInvestigation message provides: - the final outcome of the case, whether positive or negative; - optionally, the details of the corrective action undertaken by the case assignee and the information of the return. Whenever a payment instruction has been generated to solve the case under investigation following a claim non receipt or an unable to apply, the optional CorrectionTransaction component present in the message must be completed. Whenever the action of modifying or cancelling a payment results in funds being returned or reversed, an investigating agent may provide the details in the resolution related investigation component, to identify the return or reversal transaction. These details will facilitate the account reconciliations at the initiating bank and the intermediaries. It must be stressed that the return or reversal of funds is outside the scope of this Exceptions and Investigation service. The features given here is only meant to transmit the information of return or reversal when it is available through the resolution of the case. The ResolutionOfInvestigation message must: - be forwarded by all subsequent case assignee(s) until it reaches the case creator; - not be used in place of a RejectCaseAssignment or CaseStatusReport or NotificationOfCaseAssignment message. Take note of an exceptional rule that allows the use of ResolutionOfInvestigation in lieu of a CaseStatusReport. CaseStatusReport is a response-message to a CaseStatusReportRequest. The latter which is sent when the assigner has reached its own time-out threshold to receive a response. However it may happen that when the request arrives, the investigating agent has just obtained a resolution. In such a situation, it would be redundant to send a CaseStatusReport when then followed immediately by a ResolutionOfInvestigation. It is therefore quite acceptable for the investigating agent, the assignee, to skip the Case Status Report and send the ResolutionOfInvestigation message directly. The ResolutionOfInvestigation message should be the sole message to respond to a cancellation request. Details of the underlying transactions and the related statuses for which the cancellation request has been issued may be provided in the CancellationDetails component.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`assignment`

 | 

`[flows_api.payloads.common.CaseAssignment5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CaseAssignment5)`

 | 

Identifies the assignment of an investigation case from an assigner to an assignee.  
Usage: The assigner must be the sender of this confirmation and the assignee must be the  
receiver.

 |
| 

`resolved_case`

 | 

`[flows_api.payloads.common.Case5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Case5)`

 | 

Identifies a resolved case.

 |
| 

`status`

 | 

`[flows_api.payloads.common.InvestigationStatus5Choice](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#InvestigationStatus5Choice)`

 | 

Indicates the status of the investigation.

 |
| 

`cancellation_details`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.UnderlyingTransaction22](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#UnderlyingTransaction22)]`

 | 

Specifies the details of the underlying transactions being cancelled.

 |
| 

`modification_details`

 | 

`[flows_api.payloads.common.PaymentTransaction107](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#PaymentTransaction107)`

 | 

Specifies the details of the underlying transaction being modified.

 |
| 

`claim_non_receipt_details`

 | 

`[flows_api.payloads.common.ClaimNonReceipt2Choice](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ClaimNonReceipt2Choice)`

 | 

Specifies the details of the underlying transaction for which a claim non receipt has been  
initiated.

 |
| 

`statement_details`

 | 

`[flows_api.payloads.common.StatementResolutionEntry4](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#StatementResolutionEntry4)`

 | 

Details on the underlying statement entry.

 |
| 

`correction_transaction`

 | 

`[flows_api.payloads.common.CorrectiveTransaction4Choice](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#CorrectiveTransaction4Choice)`

 | 

References a transaction initiated to fix the case under investigation.

 |
| 

`resolution_related_information`

 | 

`[flows_api.payloads.common.ResolutionData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#ResolutionData1)`

 | 

Reference to fix the case under investigation as part of the resolution.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |