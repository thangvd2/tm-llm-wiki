---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/instruction"
title: "Instruction"
scraped_at: "2026-06-17T05:09:17.424Z"
images: 0
---

# Instruction

`flows_api.instruction` module

The Instruction resource and top-level metadata such as outcomes.

## [](#Instruction "Copy link to heading")Instruction

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

A UUID identifying the instruction.

 |
| 

`correlation_id`

 | 

`str`

 | 

A user provided identifier used to link related instructions.

 |
| 

`payment_id`

 | 

`str`

 | 

The ID of the Payment the Instruction belongs to.

 |
| 

`batch_processing_data`

 | 

`[BatchProcessingData](/vault-payments/latest/EN/api/flows/flows_api/instruction#BatchProcessingData)`

 | 

Data relating to the batch processing of the Instruction. Output only.

 |
| 

`instruction_flow_id`

 | 

`str`

 | 

The ID of the Instruction Flow to be used with the Instruction. Required.

 |
| 

`create_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

The time that the resource was created. UTC, RFC3339 Format. Output only.

 |
| 

`update_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

The time that the resource was last updated. UTC, RFC3339 Format. Output only.

 |
| 

`payment_system`

 | 

`str`

 | 

The payment system associated with the Instruction. Required.

 |
| 

`scheme`

 | 

`str`

 | 

The scheme that processes this Instruction. Optional.

 |
| 

`direction`

 | 

`[InstructionDirection](/vault-payments/latest/EN/api/flows/flows_api/instruction#InstructionDirection)`

 | 

The direction of the Instruction. Required.

 |
| 

`processing_status`

 | 

`[ProcessingStatus](/vault-payments/latest/EN/api/flows/flows_api/instruction#ProcessingStatus)`

 | 

The processing status of the Instruction.

 |
| 

`processing_error`

 | 

`[flows_api.errors.Error](/vault-payments/latest/EN/api/flows/flows_api/errors#Error)`

 | 

Details on an error that occurred during the processing of the Instruction. Set  
when `processing_status` has value `PROCESSING_STATUS_ERRORED`.

 |
| 

`issues`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Issue](/vault-payments/latest/EN/api/flows/flows_api/instruction#Issue)]`

 | 

Non-fatal issues which occurred during processing of the Instruction.

 |
| 

`outcome`

 | 

`[Outcome](/vault-payments/latest/EN/api/flows/flows_api/instruction#Outcome)`

 | 

The high level business outcome of the Instruction.

 |
| 

`outcome_reason`

 | 

`str`

 | 

Further information or justification of the value in the `outcome` field.

 |
| 

`type`

 | 

`[InstructionType](/vault-payments/latest/EN/api/flows/flows_api/instruction#InstructionType)`

 | 

The type of Instruction message. Required.

 |
| 

`matching_result`

 | 

`[MatchingResult](/vault-payments/latest/EN/api/flows/flows_api/instruction#MatchingResult)`

 | 

Information about Instructions matched at the creation of this Instruction.

 |
| 

`target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/instruction#TargetAccount)`

 | 

The core banking system account targeted by this Instruction, along with its associated  
resources in Vault Payments.

 |
| 

`mandate_id`

 | 

`str`

 | 

The ID of the mandate associated with this instruction.

 |
| 

`context`

 | 

`dict`

 | 

A freeform JSON object which may be used to store arbitrary additional data  
that cannot be stored anywhere else.

 |
| 

`initiating_user_id`

 | 

`str`

 | 

Indicates the user ID who initiated the payment, where relevant.  
This value is automatically set based on the token used when creating the instruction.  
Optional. Output only.

 |
| 

`customer_credit_transfer_initiation`

 | 

`[flows_api.payloads.customercredittransferinitiation.CustomerCreditTransferInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation#CustomerCreditTransferInitiation)`

 | 

CustomerCreditTransferInitiation payload.

 |
| 

`authorisation_initiation`

 | 

`[flows_api.card.authorisation.AuthorisationInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/authorisation#AuthorisationInitiation)`

 | 

Card Authorisation Initiation payload.

 |
| 

`card_management_initiation`

 | 

`[flows_api.card.cardmanagement.CardManagementInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement#CardManagementInitiation)`

 | 

Card Management Initiation payload.

 |
| 

`inquiry_initiation`

 | 

`[flows_api.card.inquiry.InquiryInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#InquiryInitiation)`

 | 

Inquiry Initiation payload.

 |
| 

`reversal_initiation`

 | 

`[flows_api.card.reversal.ReversalInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/reversal#ReversalInitiation)`

 | 

Card Reversal Initiation payload.

 |
| 

`financial_initiation`

 | 

`[flows_api.card.financial.FinancialInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/financial#FinancialInitiation)`

 | 

Card Financial Initiation payload.

 |
| 

`administrative_initiation`

 | 

`[flows_api.card.administrative.AdministrativeInitiation](/vault-payments/latest/EN/api/flows/flows_api/card/administrative#AdministrativeInitiation)`

 | 

Administrative Initiation payload.

 |
| 

`fi_to_fi_customer_credit_transfer`

 | 

`[flows_api.payloads.fitoficustomercredittransfer.FIToFICustomerCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransfer)`

 | 

FIToFICustomerCreditTransfer payload.

 |
| 

`fi_to_fi_payment_status_report`

 | 

`[flows_api.payloads.fitofipaymentstatusreport.FIToFIPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport#FIToFIPaymentStatusReport)`

 | 

FIToFIPaymentStatusReport payload.

 |
| 

`fi_to_fi_payment_cancellation_request`

 | 

`[flows_api.payloads.fitofipaymentcancellationrequest.FIToFIPaymentCancellationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentcancellationrequest#FIToFIPaymentCancellationRequest)`

 | 

FIToFIPaymentCancellationRequest payload.

 |
| 

`resolution_of_investigation`

 | 

`[flows_api.payloads.resolutionofinvestigation.ResolutionOfInvestigation](/vault-payments/latest/EN/api/flows/flows_api/payloads/resolutionofinvestigation#ResolutionOfInvestigation)`

 | 

ResolutionOfInvestigation payload.

 |
| 

`payment_return`

 | 

`[flows_api.payloads.paymentreturn.PaymentReturn](/vault-payments/latest/EN/api/flows/flows_api/payloads/paymentreturn#PaymentReturn)`

 | 

PaymentReturn payload.

 |
| 

`fi_to_fi_payment_status_request`

 | 

`[flows_api.payloads.fitofipaymentstatusrequest.FIToFIPaymentStatusRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusrequest#FIToFIPaymentStatusRequest)`

 | 

FIToFIPaymentStatusRequest payload.

 |
| 

`fi_to_fi_customer_direct_debit`

 | 

`[flows_api.payloads.fitoficustomerdirectdebit.FIToFICustomerDirectDebit](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomerdirectdebit#FIToFICustomerDirectDebit)`

 | 

FIToFICustomerDirectDebit payload.

 |
| 

`customer_direct_debit_initiation`

 | 

`[flows_api.payloads.customerdirectdebitinitiation.CustomerDirectDebitInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerdirectdebitinitiation#CustomerDirectDebitInitiation)`

 | 

CustomerDirectDebitInitiation payload.

 |
| 

`receipt_acknowledgement`

 | 

`[flows_api.payloads.receiptacknowledgement.ReceiptAcknowledgement](/vault-payments/latest/EN/api/flows/flows_api/payloads/receiptacknowledgement#ReceiptAcknowledgement)`

 | 

ReceiptAcknowledgement payload.

 |
| 

`financial_institution_credit_transfer`

 | 

`[flows_api.payloads.financialinstitutioncredittransfer.FinancialInstitutionCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinstitutioncredittransfer#FinancialInstitutionCreditTransfer)`

 | 

FinancialInstitutionCreditTransfer payload.

 |
| 

`mandate_initiation_request`

 | 

`[flows_api.payloads.mandateinitiationrequest.MandateInitiationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateinitiationrequest#MandateInitiationRequest)`

 | 

MandateInitiationRequest payload.

 |
| 

`mandate_amendment_request`

 | 

`[flows_api.payloads.mandateamendmentrequest.MandateAmendmentRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateamendmentrequest#MandateAmendmentRequest)`

 | 

MandateAmendmentRequest payload.

 |
| 

`mandate_cancellation_request`

 | 

`[flows_api.payloads.mandatecancellationrequest.MandateCancellationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandatecancellationrequest#MandateCancellationRequest)`

 | 

MandateCancellationRequest payload.

 |
| 

`mandate_acceptance_report`

 | 

`[flows_api.payloads.mandateacceptancereport.MandateAcceptanceReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateacceptancereport#MandateAcceptanceReport)`

 | 

MandateAcceptanceReport payload.

 |
| 

`bank_to_customer_debit_credit_notification`

 | 

`[flows_api.payloads.banktocustomerdebitcreditnotification.BankToCustomerDebitCreditNotification](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomerdebitcreditnotification#BankToCustomerDebitCreditNotification)`

 | 

BankToCustomerDebitCreditNotification payload.

 |
| 

`file_action_initiation`

 | 

`[flows_api.payloads.fileactioninitiation.FileActionInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/fileactioninitiation#FileActionInitiation)`

 | 

FileActionInitiation payload.

 |
| 

`fraud_disposition_initiation`

 | 

`[flows_api.payloads.frauddispositioninitiation.FraudDispositionInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/frauddispositioninitiation#FraudDispositionInitiation)`

 | 

FraudDispositionInitiation payload.

 |
| 

`creditor_payment_activation_request`

 | 

`[flows_api.payloads.creditorpaymentactivationrequest.CreditorPaymentActivationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequest#CreditorPaymentActivationRequest)`

 | 

CreditorPaymentActivationRequest payload.

 |
| 

`creditor_payment_activation_request_status_report`

 | 

`[flows_api.payloads.creditorpaymentactivationrequeststatusreport.CreditorPaymentActivationRequestStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequeststatusreport#CreditorPaymentActivationRequestStatusReport)`

 | 

CreditorPaymentActivationRequestStatusReport payload.

 |
| 

`customer_payment_status_report`

 | 

`[flows_api.payloads.customerpaymentstatusreport.CustomerPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport#CustomerPaymentStatusReport)`

 | 

CustomerPaymentStatusReport payload.

 |
| 

`message_reject`

 | 

`[flows_api.payloads.messagereject.MessageReject](/vault-payments/latest/EN/api/flows/flows_api/payloads/messagereject#MessageReject)`

 | 

MessageReject payload.

 |
| 

`investigation_request`

 | 

`[flows_api.payloads.investigationrequest.InvestigationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationrequest#InvestigationRequest)`

 | 

InvestigationRequest payload.

 |
| 

`investigation_response`

 | 

`[flows_api.payloads.investigationresponse.InvestigationResponse](/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationresponse#InvestigationResponse)`

 | 

InvestigationResponse payload.

 |
| 

`bank_to_customer_account_report`

 | 

`[flows_api.payloads.banktocustomeraccountreport.BankToCustomerAccountReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomeraccountreport#BankToCustomerAccountReport)`

 | 

BankToCustomerAccountReport payload.

 |
| 

`system_event_notification`

 | 

`[flows_api.payloads.systemeventnotification.SystemEventNotification](/vault-payments/latest/EN/api/flows/flows_api/payloads/systemeventnotification#SystemEventNotification)`

 | 

SystemEventNotification payload.

 |
| 

`claim_non_receipt`

 | 

`[flows_api.payloads.claimnonreceipt.ClaimNonReceipt](/vault-payments/latest/EN/api/flows/flows_api/payloads/claimnonreceipt#ClaimNonReceipt)`

 | 

ClaimNonReceipt payload.

 |
| 

`request_to_modify_payment`

 | 

`[flows_api.payloads.requesttomodifypayment.RequestToModifyPayment](/vault-payments/latest/EN/api/flows/flows_api/payloads/requesttomodifypayment#RequestToModifyPayment)`

 | 

RequestToModifyPayment payload.

 |
| 

`fi_to_fi_payment_reversal`

 | 

`[flows_api.payloads.fitofipaymentreversal.FIToFIPaymentReversal](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentreversal#FIToFIPaymentReversal)`

 | 

FIToFIPaymentReversal payload.

 |

## [](#BatchProcessingData "Copy link to heading")BatchProcessingData

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`received_file`

 | 

`[BatchProcessingFile](/vault-payments/latest/EN/api/flows/flows_api/instruction#BatchProcessingFile)`

 | 

The ID of the Instruction Batch and Instruction File of origin RECEIVED that the Instruction  
has come from.

 |
| 

`generated_files`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[BatchProcessingFile](/vault-payments/latest/EN/api/flows/flows_api/instruction#BatchProcessingFile)]`

 | 

The IDs of the Instruction Batches and Instruction Files of origin GENERATED that the  
Instruction has been added to.

 |

## [](#BatchProcessingFile "Copy link to heading")BatchProcessingFile

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instruction_batch_id`

 | 

`str`

 | 

The ID of the Instruction Batch that the Instruction belongs to.

 |
| 

`instruction_file_id`

 | 

`str`

 | 

The ID of the Instruction File that the Instruction and Instruction Batch belong to.

 |

## [](#Issue "Copy link to heading")Issue

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`issue`

 | 

`str`

 | 

Summary of the issue.

 |
| 

`detail`

 | 

`str`

 | 

Further details of the issue.

 |
| 

`code`

 | 

`str`

 | 

An optional, unique identifier for the type of issue.

 |

## [](#MatchingResult "Copy link to heading")MatchingResult

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`matched_instructions`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[MatchedInstruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#MatchedInstruction)]`

 | 

The correlated instructions that were matched.

 |
| 

`sequence_number`

 | 

`int`

 | 

The number in the sequence of correlated instructions that this instruction lies.  
Determined by the order in which instructions have been persisted in Vault Payments.  
This field is deprecated.

 |
| 

`processing_order`

 | 

`int`

 | 

Represents the order in which Instructions in the same correlation group started processing.  
Values start at 0 for the first Instruction, all queued Instructions  
have -1 assigned until they are unqueued for processing.

 |

## [](#MatchedInstruction "Copy link to heading")MatchedInstruction

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

UUID identifying the matched Instruction.

 |
| 

`change_id`

 | 

`int`

 | 

The change id of the matched Instruction as of time of matching.

 |

## [](#TargetAccount "Copy link to heading")TargetAccount

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_instrument_id`

 | 

`str`

 | 

The Payment Instrument that was resolved for the Instruction.

 |
| 

`restrictions`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

Restrictions that were violated by this Instruction.  
Set by Rules during processing.

 |
| 

`account_link_id`

 | 

`str`

 | 

The Account Link selected for the Instruction.

 |
| 

`core_id`

 | 

`str`

 | 

The Core ID associated with the Account Link.

 |
| 

`core_account_id`

 | 

`str`

 | 

The id of the core banking system account associated with the Account Link.

 |
| 

`account_links`

 | 

`Dict[str, TargetAccountLink]`

 | 

Extra Accounts Links selected for use with the Instructions.

 |

## [](#TargetAccountLink "Copy link to heading")TargetAccountLink

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_link_id`

 | 

`str`

 | 

The Account Link ID.

 |
| 

`core_id`

 | 

`str`

 | 

The Core ID on the Account Link.

 |
| 

`core_account_id`

 | 

`str`

 | 

The core banking system account that is associated with the Account Link.

 |

## [](#InitiateInstructionStepResult "Copy link to heading")InitiateInstructionStepResult

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The UUID identifying the initiated Instruction.

 |
| 

`instruction_flow_id`

 | 

`str`

 | 

The UUID identifying the InstructionFlow that was assigned to the initiated Instruction.

 |

## [](#InstructionFileStepResult "Copy link to heading")InstructionFileStepResult

chat\_bubble

This step is currently in BETA, and its interface is subject to change. Thought Machine may introduce breaking changes before it reaches a stable release.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instruction_file_id`

 | 

`str`

 | 

The id of the instruction file this instruction was part of.

 |
| 

`instruction_batch_id`

 | 

`str`

 | 

The id of the instruction batch this instruction was part of.

 |

## [](#InstructionDirection "Copy link to heading")InstructionDirection

Enum values  
| Name | Description |
| --- | --- |
| 
`INSTRUCTION_DIRECTION_UNKNOWN`

 | 

The Instruction direction is unknown.

 |
| 

`INSTRUCTION_DIRECTION_INBOUND`

 | 

The Instruction direction is inbound.

 |
| 

`INSTRUCTION_DIRECTION_OUTBOUND`

 | 

The Instruction direction is outbound.

 |

## [](#InstructionType "Copy link to heading")InstructionType

Enum values  
| Name | Description |
| --- | --- |
| 
`INSTRUCTION_TYPE_UNKNOWN`

 | 

The type is unknown.

 |
| 

`INSTRUCTION_TYPE_AUTHORISATION_INITIATION`

 | 

The type is a card authorisation initiation.

 |
| 

`INSTRUCTION_TYPE_INQUIRY_INITIATION`

 | 

The type is a card (balance)inquiry initiation.

 |
| 

`INSTRUCTION_TYPE_FI_TO_FI_CUSTOMER_CREDIT_TRANSFER`

 | 

The type is used to move funds from a debtor account to a creditor.

 |
| 

`INSTRUCTION_TYPE_FINANCIAL_INITIATION`

 | 

The type is a card financial initiation.

 |
| 

`INSTRUCTION_TYPE_REVERSAL_INITIATION`

 | 

The type is a reversal initiation.

 |
| 

`INSTRUCTION_TYPE_CARD_MANAGEMENT_INITIATION`

 | 

The type is a card management initiation.

 |
| 

`INSTRUCTION_TYPE_FI_TO_FI_PAYMENT_STATUS_REPORT`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI)  
payment status report.

 |
| 

`INSTRUCTION_TYPE_FI_TO_FI_PAYMENT_STATUS_REQUEST`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI)  
payment status request.

 |
| 

`INSTRUCTION_TYPE_FI_TO_FI_PAYMENT_CANCELLATION_REQUEST`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI)  
payment cancellation request.

 |
| 

`INSTRUCTION_TYPE_RESOLUTION_OF_INVESTIGATION`

 | 

The type represents a resolution of investigation response, indicating  
acceptance or rejection of a previous request.

 |
| 

`INSTRUCTION_TYPE_PAYMENT_RETURN`

 | 

The type represents a payment return, used for returning a previously  
received credit transfer.

 |
| 

`INSTRUCTION_TYPE_ADMINISTRATIVE_INITIATION`

 | 

The type is an administrative initiation.

 |
| 

`INSTRUCTION_TYPE_CREDIT_TRANSFER_INITIATION`

 | 

The type is a customer credit transfer initiation.

 |
| 

`INSTRUCTION_TYPE_FI_TO_FI_CUSTOMER_DIRECT_DEBIT`

 | 

The type is used to collect funds from a debtor account for a creditor.

 |
| 

`INSTRUCTION_TYPE_DIRECT_DEBIT_INITIATION`

 | 

The type is a customer direct debit initiation.

 |
| 

`INSTRUCTION_TYPE_RECEIPT_ACKNOWLEDGEMENT`

 | 

The type is a receipt acknowledgement.

 |
| 

`INSTRUCTION_TYPE_FINANCIAL_INSTITUTION_CREDIT_TRANSFER`

 | 

The type is a financial institution credit transfer.

 |
| 

`INSTRUCTION_TYPE_MANDATE_INITIATION_REQUEST`

 | 

The type is mandate initiation request.

 |
| 

`INSTRUCTION_TYPE_MANDATE_AMENDMENT_REQUEST`

 | 

The type is mandate amendment request.

 |
| 

`INSTRUCTION_TYPE_MANDATE_CANCELLATION_REQUEST`

 | 

The type is mandate cancellation request.

 |
| 

`INSTRUCTION_TYPE_MANDATE_ACCEPTANCE_REPORT`

 | 

The type is mandate acceptance report.

 |
| 

`INSTRUCTION_TYPE_BANK_TO_CUSTOMER_DEBIT_CREDIT_NOTIFICATION`

 | 

The type is a Bank-to-Customer Debit and Credit Notification.

 |
| 

`INSTRUCTION_TYPE_FILE_ACTION_INITIATION`

 | 

The type is file action initiation.

 |
| 

`INSTRUCTION_TYPE_FRAUD_DISPOSITION_INITIATION`

 | 

The type is fraud disposition initiation.

 |
| 

`INSTRUCTION_TYPE_CREDITOR_PAYMENT_ACTIVATION_REQUEST`

 | 

The type is a creditor payment activation request.

 |
| 

`INSTRUCTION_TYPE_CREDITOR_PAYMENT_ACTIVATION_REQUEST_STATUS_REPORT`

 | 

The type is a creditor payment activation request status report.

 |
| 

`INSTRUCTION_TYPE_CUSTOMER_PAYMENT_STATUS_REPORT`

 | 

The type is a customer payment status report.

 |
| 

`INSTRUCTION_TYPE_MESSAGE_REJECT`

 | 

The type is a message reject.

 |
| 

`INSTRUCTION_TYPE_INVESTIGATION_REQUEST`

 | 

The type is an investigation request.

 |
| 

`INSTRUCTION_TYPE_INVESTIGATION_RESPONSE`

 | 

The type is an investigation response.

 |
| 

`INSTRUCTION_TYPE_BANK_TO_CUSTOMER_ACCOUNT_REPORT`

 | 

The type is a Bank-to-Customer account report.

 |
| 

`INSTRUCTION_TYPE_SYSTEM_EVENT_NOTIFICATION`

 | 

The type is a system event notification.

 |
| 

`INSTRUCTION_TYPE_CLAIM_NON_RECEIPT`

 | 

The type is a claim non receipt.

 |
| 

`INSTRUCTION_TYPE_REQUEST_TO_MODIFY_PAYMENT`

 | 

The type is a request to modify payment.

 |
| 

`INSTRUCTION_TYPE_FI_TO_FI_PAYMENT_REVERSAL`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI)  
payment reversal.

 |

## [](#Outcome "Copy link to heading")Outcome

This indicates the high level outcome of the processing of an Instruction.

Enum values  
| Name | Description |
| --- | --- |
| 
`OUTCOME_UNKNOWN`

 | 

Outcome of the instruction is unknown.

 |
| 

`OUTCOME_PENDING`

 | 

Instruction is still processing and does not have an outcome yet.

 |
| 

`OUTCOME_ACCEPTED`

 | 

Instruction has been accepted.

 |
| 

`OUTCOME_REJECTED`

 | 

Instruction has been rejected.

 |

## [](#ProcessingStatus "Copy link to heading")ProcessingStatus

Enum values  
| Name | Description |
| --- | --- |
| 
`PROCESSING_STATUS_UNKNOWN`

 | 

The processing status is unknown.

 |
| 

`PROCESSING_STATUS_COMPLETED`

 | 

Instruction processing has completed.

 |
| 

`PROCESSING_STATUS_ERRORED`

 | 

An error has occurred during the processing of the Instruction.

 |
| 

`PROCESSING_STATUS_IN_PROGRESS`

 | 

Instruction processing is in progress.

 |
| 

`PROCESSING_STATUS_CANCELLED`

 | 

Instruction processing has been cancelled.

 |
| 

`PROCESSING_STATUS_WAITING`

 | 

Instruction processing is waiting for an event to continue.

 |
| 

`PROCESSING_STATUS_QUEUED`

 | 

Instruction processing is queued behind a currently processing matched instruction.

 |
| 

`PROCESSING_STATUS_INTERRUPTED`

 | 

Instruction has been interrupted by another instruction and its processing has been suspended  
until the interrupting instruction completes processing.

 |