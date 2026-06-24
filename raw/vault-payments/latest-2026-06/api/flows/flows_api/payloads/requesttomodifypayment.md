---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/requesttomodifypayment"
title: "Request to modify payment"
scraped_at: "2026-06-17T15:48:48.553Z"
images: 0
---

# Request to modify payment

`flows_api.payloads.requesttomodifypayment` module

Request to modify payment

## [](#RequestToModifyPayment "Copy link to heading")RequestToModifyPayment

RequestToModifyPayment holds the supported versions of the camt.087.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v06`

 | 

`[RequestToModifyPaymentV06](/vault-payments/latest/EN/api/flows/flows_api/payloads/requesttomodifypayment#RequestToModifyPaymentV06)`

 | 

Version 06 of the RequestToModifyPayment message.

 |

## [](#RequestToModifyPaymentV06 "Copy link to heading")RequestToModifyPaymentV06

Scope The RequestToModifyPayment message is sent by a case creator/case assigner to a case assignee. This message is used to request the modification of characteristics of an original payment instruction. Usage The RequestToModifyPayment message must be answered with a: - ResolutionOfInvestigation message with a positive final outcome when the case assignee can perform the requested modification; - ResolutionOfInvestigation message with a negative final outcome when the case assignee may perform the requested modification but fails to do so (too late, irrevocable instruction, one requested element cannot be modified); - RejectCaseAssignment message when the case assignee is unable or not authorised to perform the requested modification; - NotificationOfCaseAssignment message to indicate whether the case assignee will take on the case himself or reassign the case to a subsequent party in the payment processing chain. The RequestToModifyPayment message covers one and only one original instruction at a time. If several original payment instructions need to be modified, then multiple RequestToModifyPayment messages must be sent. The RequestToModifyPayment message can be sent to request the modification of one or several elements of the original payment instruction. If many elements need to be modified, it is recommended to cancel the original payment instruction and initiate a new one. The RequestToModifyPayment must be processed on an all or nothing basis. If one of the elements to be modified cannot be altered, the assignment must be rejected in full by means of a negative ResolutionOfInvestigation message. (See section on ResolutionOfInvestigation for more details). The RequestToModifyPayment message must never be sent to request the modification of the currency of the original payment instruction. If the currency is wrong, use a CustomerPaymentCancellationRequest or a FIToFIPaymentCancellationRequest message to cancel it and issue and a new payment instruction. The RequestToModifyPayment message may be forwarded to subsequent case assignee(s). When a RequestToModifyPayment message is used to decrease the amount of the original payment instruction, the modification will trigger a return of funds from the case assignee to the case creator. The assignee may indicate, within the ResolutionOfInvestigation message, the amount to be returned, the date it is or will be returned and the channel through which the return will be done. The RequestToModifyPayment message must never be sent to request the increase of the amount of the original payment instruction. To increase the amount in a payment, the debtor can do one of the following: - Cancel the first payment using a CustomerPaymentCancellationRequest or a FIToFIPaymentCancellationRequest message and make a new payment with a higher and correct amount; - Simply send a second payment with the supplementary amount. Depending on the requested modification(s) and the processing stage of the original payment instruction, the processing of a request to modify payment case may end with one of the following: - an AdditionalPaymentInformation message sent to the creditor of the original payment instruction; - a DebitAuthorisationRequest message sent to the creditor of the original payment instruction; - a CustomerPaymentCancellationRequest or a FIToFIPaymentCancellationRequest message sent to a subsequent case assignee. The RequestToModifyPayment message can be sent to correct characteristics of an original payment instruction following receipt of an UnableToApply message. In this scenario, the case identification will remain the same. The RequestToModifyPayment message has the following main characteristics: The case creator assigns a unique case identification. This information will be passed unchanged to all subsequent case assignee(s). Lowering the amount of an original payment instruction for which cover is provided by a separate instruction will systematically mean the modification of the whole transaction, including the cover. The case assignee performing the amount modification must initiate the return of funds in excess to the case creator. The modification of the agent’s or agents' information on an original payment instruction for which cover is provided by a separate instruction will systematically mean the whole transaction is modified, that is the cover is executed through the agent(s) mentioned in the RequestToModifyPayment message. The cover payment must not be modified separately. The modification of a payment instruction can be initiated by either the debtor or any subsequent agent in the payment processing chain. The case creator provides the information to be modified in line with agreements made with the case assignee. If the case assignee needs in turn to assign the case to a subsequent case assignee, the requested modification(s) must be in line with the agreement made with the next case assignee and a NotificationOfCaseAssignment message must be sent to the case assigner. Otherwise, the request to modify payment case must be rejected (by means of a negative ResolutionOfInvestigation message).

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

`case`

 | 

`[flows_api.payloads.common.Case5](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#Case5)`

 | 

Identifies the investigation case.

 |
| 

`underlying`

 | 

`[flows_api.payloads.common.UnderlyingTransaction5Choice](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#UnderlyingTransaction5Choice)`

 | 

Identifies the payment transaction to be modified.

 |
| 

`modification`

 | 

`[flows_api.payloads.common.RequestedModification8](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#RequestedModification8)`

 | 

Identifies the list of modifications requested.

 |
| 

`instruction_for_assignee`

 | 

`[flows_api.payloads.common.InstructionForAssignee1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#InstructionForAssignee1)`

 | 

Further information related to the processing of the investigation that may need to be acted  
upon by the assignee.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |