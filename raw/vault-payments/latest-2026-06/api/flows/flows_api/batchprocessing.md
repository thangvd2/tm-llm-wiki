---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/batchprocessing"
title: "Batchprocessing"
scraped_at: "2026-06-17T15:47:10.669Z"
images: 0
---

# Batchprocessing

`flows_api.batchprocessing` module

## [](#BulkOptions "Copy link to heading")BulkOptions

Contains options relating to file bulking.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`file_instruction_limit`

 | 

`Optional[int]`

 | 

The maximum number of instructions that can be contained in a single instruction file.  
This value must be in the range \[1,100000\]. If not set then the maximum possible value is assigned.

 |
| 

`file_batch_limit`

 | 

`Optional[int]`

 | 

The maximum number of batches that can be contained in a single instruction file.  
This value must be in the range \[1,10000\]. If not set then the maximum possible value is assigned.

 |
| 

`batch_instruction_limit`

 | 

`Optional[int]`

 | 

The maximum number of instruction that can be contained in a single instruction batch.  
This value must be in the range \[1,100000\]. If not set then the maximum possible value is assigned.

 |
| 

`calendar_id`

 | 

`Optional[str]`

 | 

The ID of the Calendar that the Instruction File processing schedule is linked to.  
CalendarPeriod events for that Calendar will trigger Instruction File processing.

 |

## [](#BulkResult "Copy link to heading")BulkResult

Contains the result of a file bulking operation. Currently in BETA, and its interface is subject to change.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_system`

 | 

`Optional[str]`

 | 

The payment system for which the file has been generated.

 |
| 

`scheme`

 | 

`Optional[str]`

 | 

The scheme for which the file has been generated.

 |
| 

`file_name`

 | 

`Optional[str]`

 | 

The name of the file.

 |
| 

`file_type`

 | 

`Optional[str]`

 | 

The type of the file.

 |
| 

`file_description`

 | 

`Optional[str]`

 | 

A description of the file.

 |
| 

`header`

 | 

`Optional[[InstructionFileHeader](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFileHeader)]`

 | 

The instruction file header.

 |
| 

`messages`

 | 

`Optional[[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Message](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#Message)]]`

 | 

The bulked ISO 20022 Messages to be added to the file.

 |

## [](#DebulkResult "Copy link to heading")DebulkResult

Contains the result of a file debulking operation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instruction_batches`

 | 

`Optional[[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[InstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionBatch)]]`

 | 

The Instruction Batches that have been debulked from the file.

 |

## [](#FileSpecVersion "Copy link to heading")FileSpecVersion

Defines a new instruction file specification version.

This should be declared exactly once in your file spec, and its result assigned to a variable named 'file\_spec' for Vault Payments to run it.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The ID of the file spec version

 |
| 

`file_spec_id`

 | 

`str`

 | 

The ID of the file spec

 |
| 

`version`

 | 

`str`

 | 

A [semantic version](https://semver.org/) for this file spec.

 |
| 

`expected_parameters`

 | 

`Optional[list[[ExpectedParameter](/vault-payments/latest/EN/api/flows/flows_api#ExpectedParameter)]]`

 | 

The parameters that will be used by the file spec version.

 |
| 

`bulk_func`

 | 

`Optional[Callable[[[InstructionFile](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFile), list[[InstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionBatch)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [BulkResult](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#BulkResult)]]`

 | 

An optional function to be used for file bulking. Currently in BETA, and its interface is subject to change.

 |
| 

`debulk_func`

 | 

`Optional[Callable[[[InstructionFile](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFile), list[[Message](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#Message)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [DebulkResult](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#DebulkResult)]]`

 | 

An optional function to be used for file debulking.

 |
| 

`marshal_func`

 | 

`Optional[Callable[[[InstructionFile](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFile), list[[Message](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#Message)], dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [MarshalResult](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#MarshalResult)]]`

 | 

An optional function to be used for file marshaling. Currently in BETA, and its interface is subject to change.

 |
| 

`unmarshal_func`

 | 

`Optional[Callable[[[InstructionFile](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFile), bytes, dict[str, Union[bool, str, [Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects), list[str], [datetime](https://docs.python.org/3/library/datetime.html#datetime-objects), dict, list]]], [UnmarshalResult](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#UnmarshalResult)]]`

 | 

An optional function to be used for file unmarshaling.

 |
| 

`bulk_options`

 | 

`Optional[[BulkOptions](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#BulkOptions)]`

 | 

Options for file bulking.

 |

## [](#InstructionBatch "Copy link to heading")InstructionBatch

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`Optional[str]`

 | 

Unique identifier of the resource within Vault Payments. UUID. Output only.

 |
| 

`instruction_file_id`

 | 

`Optional[str]`

 | 

The ID of the InstructionFile this batch relates to. Output only.

 |
| 

`origin`

 | 

`Optional[[InstructionBatchOrigin](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionBatchOrigin)]`

 | 

The origin of the batch. Output only.

 |
| 

`type`

 | 

`Optional[InstructionType]`

 | 

The type of instruction batch.  
Derived from the type of the instructions within the batch. Output only.

 |
| 

`processing_status`

 | 

`Optional[[ProcessingStatus](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#ProcessingStatus)]`

 | 

The processing status of the batch. Output only.

 |
| 

`processing_error`

 | 

`Optional[[Error](/vault-payments/latest/EN/api/flows/flows_api/errors#Error)]`

 | 

Details on an error that occurred during the processing of the batch. Set when `status` has value `PROCESSING_STATUS_ERRORED`.

 |
| 

`instruction_count`

 | 

`Optional[int]`

 | 

The number of instructions contained in the batch. Output only.

 |
| 

`group_id`

 | 

`Optional[str]`

 | 

The ID used to group of the InstructionBatch.  
Only set on GENERATED InstructionBatches. Output only.

 |
| 

`create_timestamp`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The time that the resource was created. UTC, RFC3339 Format. Output only.

 |
| 

`update_timestamp`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The time that the resource was last updated. UTC, RFC3339 Format. Output only.

 |
| 

`message_data`

 | 

`Optional[[MessageData](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#MessageData)]`

 | 

Data contained in the ISO 20022 message associated with the Instruction Batch. Output Only.

 |
| 

`instructions`

 | 

`Optional[[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)]]`

 | 

The instructions contained in the batch. For Internal Python only.

 |

## [](#InstructionBatchOrigin "Copy link to heading")InstructionBatchOrigin

This indicates the origin of an instruction batch.

Enum values  
| Name | Description |
| --- | --- |
| 
`INSTRUCTION_BATCH_ORIGIN_UNKNOWN`

 | 

Origin is unknown.

 |
| 

`INSTRUCTION_BATCH_ORIGIN_RECEIVED`

 | 

This indicates the instruction batch has been created via an external system and received by Vault Payments.

 |
| 

`INSTRUCTION_BATCH_ORIGIN_GENERATED`

 | 

This indicates the instruction batch has been generated by Vault Payments.

 |

## [](#InstructionFile "Copy link to heading")InstructionFile

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`Optional[str]`

 | 

Unique identifier of the resource within Vault Payments. UUID. Output only.

 |
| 

`file_id`

 | 

`Optional[str]`

 | 

The ID of the File this batch relates to. Output only.

 |
| 

`origin`

 | 

`Optional[[InstructionFileOrigin](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFileOrigin)]`

 | 

The origin of the instruction file. Output only.

 |
| 

`instruction_file_specification_id`

 | 

`Optional[str]`

 | 

The ID of Instruction File Specification associated with the InstructionFile. Required.  
The Instruction File Specification type must match the origin of the InstrucionFile.

 |
| 

`instruction_file_specification_version_id`

 | 

`Optional[str]`

 | 

The ID of Instruction File Specification Version associated with the InstructionFile. Output only.

 |
| 

`processing_status`

 | 

`Optional[[ProcessingStatus](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#ProcessingStatus)]`

 | 

The processing status of the InstructionFile.

 |
| 

`processing_error`

 | 

`Optional[[Error](/vault-payments/latest/EN/api/flows/flows_api/errors#Error)]`

 | 

Details on an error that occurred during the processing of the file. Set when `status` has value `PROCESSING_STATUS_ERRORED`. Output only.

 |
| 

`batch_count`

 | 

`Optional[int]`

 | 

The number of batches contained in this file. Output only.

 |
| 

`instruction_count`

 | 

`Optional[int]`

 | 

The number of instructions contained in this file. Output only.

 |
| 

`group_id`

 | 

`Optional[str]`

 | 

The ID used to group of the InstructionFile.  
Only set on GENERATED InstructionFiles. Output only.

 |
| 

`create_timestamp`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The time that the resource was created. UTC, RFC3339 Format. Output only.

 |
| 

`update_timestamp`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The time that the resource was last updated. UTC, RFC3339 Format. Output only.

 |
| 

`payment_system`

 | 

`Optional[str]`

 | 

The payment system associated with the InstructionFile. Output only.  
Set for RECEIVED based on Instructions from `debulk_func`.  
Settable for GENERATED files within InstructionFileSpecification `bulk_func`, otherwise defaults to value on Instructions.

 |
| 

`scheme`

 | 

`Optional[str]`

 | 

The scheme associated with the InstructionFile. Output only.  
Set for RECEIVED based on Instructions from `debulk_func`.  
Settable for GENERATED files within InstructionFileSpecification `bulk_func`, otherwise defaults to value on Instructions.

 |
| 

`file_name`

 | 

`Optional[str]`

 | 

The `name` field of the `file` being processing. Output only.  
For RECEIVED InstructionFiles populated from the file provided.  
Settable for GENERATED InstructionFiles within InstructionFileSpecification `bulk_func`.

 |
| 

`file_type`

 | 

`Optional[str]`

 | 

The `type` field of the `file` being processing. Output only.  
For RECEIVED InstructionFiles populated from the file provided.  
Settable for GENERATED InstructionFiles within InstructionFileSpecification `bulk_func`.

 |
| 

`file_description`

 | 

`Optional[str]`

 | 

The `description` field of the `file` being processing. Output only.  
For RECEIVED InstructionFiles populated from the file provided.  
Settable for GENERATED InstructionFiles within InstructionFileSpecification `bulk_func`.

 |
| 

`header`

 | 

`Optional[[InstructionFileHeader](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFileHeader)]`

 | 

Header of the Instruction File. It can be set via the InstructionFileSpecification code.

 |

## [](#InstructionFileHeader "Copy link to heading")InstructionFileHeader

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`metadata`

 | 

`Optional[dict[str, str]]`

 | 

File header metadata stored as key-value map.

 |

## [](#InstructionFileOrigin "Copy link to heading")InstructionFileOrigin

This indicates the origin of an instruction file.

Enum values  
| Name | Description |
| --- | --- |
| 
`INSTRUCTION_FILE_ORIGIN_UNKNOWN`

 | 

Origin is unknown.

 |
| 

`INSTRUCTION_FILE_ORIGIN_RECEIVED`

 | 

This indicates the instruction file has been created via an external system and received by Vault Payments.

 |
| 

`INSTRUCTION_FILE_ORIGIN_GENERATED`

 | 

This indicates the instruction file has been generated by Vault Payments.

 |

## [](#MarshalResult "Copy link to heading")MarshalResult

Contains the result of a file marshaling operation. Currently in BETA, and its interface is subject to change.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`file_data`

 | 

`bytes`

 | 

Bytes representing the content of the marshalled file.

 |

## [](#Message "Copy link to heading")Message

Message is a representation of an ISO 20022 message.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`Optional[[MessageType](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#MessageType)]`

 | 

The type of Message.

 |
| 

`customer_credit_transfer_initiation`

 | 

`Optional[[CustomerCreditTransferInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation#CustomerCreditTransferInitiation)]`

 | 

CustomerCreditTransferInitiation payload.

 |
| 

`authorisation_initiation`

 | 

`Optional[AuthorisationInitiation]`

 | 

Card Authorisation Initiation payload.

 |
| 

`card_management_initiation`

 | 

`Optional[CardManagementInitiation]`

 | 

Card Management Initiation payload.

 |
| 

`inquiry_initiation`

 | 

`Optional[InquiryInitiation]`

 | 

Inquiry Initiation payload.

 |
| 

`reversal_initiation`

 | 

`Optional[ReversalInitiation]`

 | 

Card Reversal Initiation payload.

 |
| 

`financial_initiation`

 | 

`Optional[FinancialInitiation]`

 | 

Card Financial Initiation payload.

 |
| 

`administrative_initiation`

 | 

`Optional[AdministrativeInitiation]`

 | 

Administrative Initiation payload.

 |
| 

`fi_to_fi_customer_credit_transfer`

 | 

`Optional[[FIToFICustomerCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransfer)]`

 | 

FIToFICustomerCreditTransfer payload.

 |
| 

`fi_to_fi_payment_status_report`

 | 

`Optional[[FIToFIPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport#FIToFIPaymentStatusReport)]`

 | 

FIToFIPaymentStatusReport payload.

 |
| 

`fi_to_fi_payment_cancellation_request`

 | 

`Optional[[FIToFIPaymentCancellationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentcancellationrequest#FIToFIPaymentCancellationRequest)]`

 | 

FIToFIPaymentCancellationRequest payload.

 |
| 

`resolution_of_investigation`

 | 

`Optional[[ResolutionOfInvestigation](/vault-payments/latest/EN/api/flows/flows_api/payloads/resolutionofinvestigation#ResolutionOfInvestigation)]`

 | 

ResolutionOfInvestigation payload.

 |
| 

`payment_return`

 | 

`Optional[[PaymentReturn](/vault-payments/latest/EN/api/flows/flows_api/payloads/paymentreturn#PaymentReturn)]`

 | 

PaymentReturn payload.

 |
| 

`fi_to_fi_payment_status_request`

 | 

`Optional[[FIToFIPaymentStatusRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusrequest#FIToFIPaymentStatusRequest)]`

 | 

FIToFIPaymentStatusRequest payload.

 |
| 

`fi_to_fi_customer_direct_debit`

 | 

`Optional[FIToFICustomerDirectDebit]`

 | 

FIToFICustomerDirectDebit payload.

 |
| 

`customer_direct_debit_initiation`

 | 

`Optional[CustomerDirectDebitInitiation]`

 | 

CustomerDirectDebitInitiation payload.

 |
| 

`receipt_acknowledgement`

 | 

`Optional[ReceiptAcknowledgement]`

 | 

ReceiptAcknowledgement payload.

 |
| 

`financial_institution_credit_transfer`

 | 

`Optional[FinancialInstitutionCreditTransfer]`

 | 

FinancialInstitutionCreditTransfer payload.

 |
| 

`mandate_initiation_request`

 | 

`Optional[MandateInitiationRequest]`

 | 

MandateInitiationRequest payload.

 |
| 

`mandate_acceptance_report`

 | 

`Optional[MandateAcceptanceReport]`

 | 

MandateAcceptanceReport payload.

 |
| 

`bank_to_customer_debit_credit_notification`

 | 

`Optional[BankToCustomerDebitCreditNotification]`

 | 

BankToCustomerDebitCreditNotification payload.

 |
| 

`file_action_initiation`

 | 

`Optional[FileActionInitiation]`

 | 

FileActionInitiation payload.

 |
| 

`fraud_disposition_initiation`

 | 

`Optional[FraudDispositionInitiation]`

 | 

FraudDispositionInitiation payload.

 |
| 

`creditor_payment_activation_request`

 | 

`Optional[CreditorPaymentActivationRequest]`

 | 

CreditorPaymentActivationRequest payload.

 |
| 

`creditor_payment_activation_request_status_report`

 | 

`Optional[CreditorPaymentActivationRequestStatusReport]`

 | 

CreditorPaymentActivationRequestStatusReport payload.

 |
| 

`customer_payment_status_report`

 | 

`Optional[[CustomerPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport#CustomerPaymentStatusReport)]`

 | 

CustomerPaymentStatusReport payload.

 |
| 

`message_reject`

 | 

`Optional[MessageReject]`

 | 

MessageReject payload.

 |
| 

`investigation_request`

 | 

`Optional[InvestigationRequest]`

 | 

InvestigationRequest payload.

 |
| 

`investigation_response`

 | 

`Optional[InvestigationResponse]`

 | 

InvestigationResponse payload.

 |
| 

`bank_to_customer_account_report`

 | 

`Optional[BankToCustomerAccountReport]`

 | 

BankToCustomerAccountReport payload.

 |
| 

`system_event_notification`

 | 

`Optional[SystemEventNotification]`

 | 

SystemEventNotification payload.

 |
| 

`claim_non_receipt`

 | 

`Optional[ClaimNonReceipt]`

 | 

ClaimNonReceipt payload.

 |
| 

`request_to_modify_payment`

 | 

`Optional[RequestToModifyPayment]`

 | 

RequestToModifyPayment payload.

 |

## [](#MessageData "Copy link to heading")MessageData

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_identification`

 | 

`Optional[str]`

 | 

The message identification. From the Group Header of the ISO 20022 message.

 |
| 

`creation_date_time`

 | 

`Optional[[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)]`

 | 

The date and time at which the message was created. From the Group Header of the ISO 20022 message.

 |

## [](#MessageType "Copy link to heading")MessageType

Enum values  
| Name | Description |
| --- | --- |
| 
`MESSAGE_TYPE_UNKNOWN`

 | 

The type is unknown.

 |
| 

`MESSAGE_TYPE_AUTHORISATION_INITIATION`

 | 

The type is a card authorisation initiation.

 |
| 

`MESSAGE_TYPE_INQUIRY_INITIATION`

 | 

The type is a card (balance)inquiry initiation.

 |
| 

`MESSAGE_TYPE_FI_TO_FI_CUSTOMER_CREDIT_TRANSFER`

 | 

The type is used to move funds from a debtor account to a creditor.

 |
| 

`MESSAGE_TYPE_FINANCIAL_INITIATION`

 | 

The type is a card financial initiation.

 |
| 

`MESSAGE_TYPE_REVERSAL_INITIATION`

 | 

The type is a reversal initiation.

 |
| 

`MESSAGE_TYPE_CARD_MANAGEMENT_INITIATION`

 | 

The type is a card management initiation.

 |
| 

`MESSAGE_TYPE_FI_TO_FI_PAYMENT_STATUS_REPORT`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI) payment status report.

 |
| 

`MESSAGE_TYPE_FI_TO_FI_PAYMENT_STATUS_REQUEST`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI) payment status request.

 |
| 

`MESSAGE_TYPE_FI_TO_FI_PAYMENT_CANCELLATION_REQUEST`

 | 

The type represents a Financial Institution-to-Financial Institution (FI to FI) payment cancellation request.

 |
| 

`MESSAGE_TYPE_RESOLUTION_OF_INVESTIGATION`

 | 

The type represents a resolution of investigation response, indicating acceptance or rejection of a previous request.

 |
| 

`MESSAGE_TYPE_PAYMENT_RETURN`

 | 

The type represents a payment return, used for returning a previously received credit transfer.

 |
| 

`MESSAGE_TYPE_ADMINISTRATIVE_INITIATION`

 | 

The type is an administrative initiation.

 |
| 

`MESSAGE_TYPE_CREDIT_TRANSFER_INITIATION`

 | 

The type is a customer credit transfer initiation.

 |
| 

`MESSAGE_TYPE_FI_TO_FI_CUSTOMER_DIRECT_DEBIT`

 | 

The type is used to collect funds from a debtor account for a creditor.

 |
| 

`MESSAGE_TYPE_DIRECT_DEBIT_INITIATION`

 | 

The type is a customer direct debit initiation.

 |
| 

`MESSAGE_TYPE_RECEIPT_ACKNOWLEDGEMENT`

 | 

The type is a receipt acknowledgement.

 |
| 

`MESSAGE_TYPE_FINANCIAL_INSTITUTION_CREDIT_TRANSFER`

 | 

The type is a financial institution credit transfer.

 |
| 

`MESSAGE_TYPE_MANDATE_INITIATION_REQUEST`

 | 

The type is mandate initiation request.

 |
| 

`MESSAGE_TYPE_MANDATE_ACCEPTANCE_REPORT`

 | 

The type is mandate acceptance report.

 |
| 

`MESSAGE_TYPE_BANK_TO_CUSTOMER_DEBIT_CREDIT_NOTIFICATION`

 | 

The type is a Bank-to-Customer Debit and Credit Notification.

 |
| 

`MESSAGE_TYPE_FILE_ACTION_INITIATION`

 | 

The type is file action initiation.

 |
| 

`MESSAGE_TYPE_FRAUD_DISPOSITION_INITIATION`

 | 

The type is fraud disposition initiation.

 |
| 

`MESSAGE_TYPE_CREDITOR_PAYMENT_ACTIVATION_REQUEST`

 | 

The type is a creditor payment activation request.

 |
| 

`MESSAGE_TYPE_CREDITOR_PAYMENT_ACTIVATION_REQUEST_STATUS_REPORT`

 | 

The type is a creditor payment activation request status report.

 |
| 

`MESSAGE_TYPE_CUSTOMER_PAYMENT_STATUS_REPORT`

 | 

The type is a customer payment status report.

 |
| 

`MESSAGE_TYPE_MESSAGE_REJECT`

 | 

The type is a message reject.

 |
| 

`MESSAGE_TYPE_INVESTIGATION_REQUEST`

 | 

The type is an investigation request.

 |
| 

`MESSAGE_TYPE_INVESTIGATION_RESPONSE`

 | 

The type is an investigation response.

 |
| 

`MESSAGE_TYPE_BANK_TO_CUSTOMER_ACCOUNT_REPORT`

 | 

The type is a Bank-to-Customer account report.

 |
| 

`MESSAGE_TYPE_SYSTEM_EVENT_NOTIFICATION`

 | 

The type is a system event notification.

 |
| 

`MESSAGE_TYPE_CLAIM_NON_RECEIPT`

 | 

The type is a claim non receipt.

 |
| 

`MESSAGE_TYPE_REQUEST_TO_MODIFY_PAYMENT`

 | 

The type is a request to modify payment.

 |

## [](#ProcessingStatus "Copy link to heading")ProcessingStatus

This indicates the processing status of an instruction batch or instruction file.

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

Processing has been completed.

 |
| 

`PROCESSING_STATUS_ERRORED`

 | 

Processing has errored.

 |
| 

`PROCESSING_STATUS_IN_PROGRESS`

 | 

Processing is in progress.

 |
| 

`PROCESSING_STATUS_COLLECTING`

 | 

Resource is collecting before generation.

 |
| 

`PROCESSING_STATUS_AWAITING_SUBMISSION`

 | 

Resource has been generated and is waiting to be submitted.

 |

## [](#UnmarshalResult "Copy link to heading")UnmarshalResult

Contains the result of a file unmarshaling operation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`instruction_file_header`

 | 

`Optional[[InstructionFileHeader](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#InstructionFileHeader)]`

 | 

The Instruction File Header that has been unmarshaled.

 |
| 

`messages`

 | 

`Optional[[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Message](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing#Message)]]`

 | 

ISO 20022 Messages representing the transactions contained in the file.

 |