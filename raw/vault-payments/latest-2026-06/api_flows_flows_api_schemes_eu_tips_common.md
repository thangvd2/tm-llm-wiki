---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/common"
title: "Common"
scraped_at: "2026-06-17T05:10:44.394Z"
images: 0
---

# Common

`flows_api.schemes.eu.tips.common` module

## [](#ExternalCancellationReason1Code "Copy link to heading")ExternalCancellationReason1Code

Represents the possible reasons for requesting the recall of a SEPA Instant payment.

Enum values  
| Name | Description |
| --- | --- |
| 
`REASON_DUPLICATE`

 | 

Duplicate payment - The transaction was sent more than once.

 |
| 

`REASON_FRAUDULENT`

 | 

Fraudulent transaction - The payment is suspected or confirmed as fraudulent.

 |
| 

`REASON_TECH`

 | 

Technical issue - The transaction needs to be recalled due to a system or processing error.

 |
| 

`REASON_REQUESTED_BY_DEBTOR`

 | 

Customer request - The debtor has requested to recall the payment.

 |
| 

`REASON_AMOUNT_DISPUTE`

 | 

Amount dispute - The payment amount is being disputed.

 |
| 

`REASON_WRONG_ACCOUNT_NUMBER`

 | 

Incorrect account number - The payment was sent to the wrong account.

 |

## [](#ExternalInvestigationExecutionConfirmation1Code "Copy link to heading")ExternalInvestigationExecutionConfirmation1Code

Represents the possible status of an investigation of a SEPA Instant Payment.

Enum values  
| Name | Description |
| --- | --- |
| 
`RJCR`

 | 

Used when a requested cancellation has been rejected.

 |

## [](#ExternalLocalInstrument1Code "Copy link to heading")ExternalLocalInstrument1Code

Represents the possible transaction statuses for SEPA Instant TIPS instructions.

Enum values  
| Name | Description |
| --- | --- |
| 
`INST`

 | 

Local instrument code for SEPA Instant Credit Transfer transactions.

 |

## [](#ExternalPaymentCancellationRejection1Code "Copy link to heading")ExternalPaymentCancellationRejection1Code

Represents the possible reasons for rejecting the request to recall a SEPA Instant payment.

Enum values  
| Name | Description |
| --- | --- |
| 
`AC04`

 | 

Account number specified has been closed on the receiver’s books.

 |
| 

`AM04`

 | 

Amount of funds available to cover specified message amount is insufficient.

 |
| 

`ARDT`

 | 

Cancellation not accepted as the transaction has already been returned.

 |
| 

`CUST`

 | 

Reported when the cancellation cannot be accepted because of a customer decision (Creditor).

 |
| 

`LEGL`

 | 

Reported when the cancellation cannot be accepted because of regulatory rules.

 |
| 

`NOAS`

 | 

No response from beneficiary (to the cancellation request).

 |
| 

`NOOR`

 | 

Original transaction (subject to cancellation) never received.

 |

## [](#ExternalPaymentGroupStatus1Code "Copy link to heading")ExternalPaymentGroupStatus1Code

Represents the possible transaction statuses for SEPA Instant TIPS instructions.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCP`

 | 

Accepted - The payment transaction has been accepted for processing.

 |
| 

`RJCT`

 | 

Rejected - The payment transaction has been rejected.

 |

## [](#ExternalPaymentTransactionStatus1Code "Copy link to heading")ExternalPaymentTransactionStatus1Code

Represents the possible transaction statuses for SEPA Instant TIPS instructions.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCP`

 | 

Accepted - The payment transaction has been accepted for processing.

 |
| 

`RJCT`

 | 

Rejected - The payment transaction has been rejected.

 |

## [](#ExternalReturnReason1Code "Copy link to heading")ExternalReturnReason1Code

Represents the possible reason for initiating a return of a SEPA Instant payment.

Enum values  
| Name | Description |
| --- | --- |
| 
`FOCR`

 | 

Return following a cancellation request.

 |

## [](#ExternalServiceLevel1Code "Copy link to heading")ExternalServiceLevel1Code

Represents the possible transaction statuses for SEPA Instant TIPS instructions.

Enum values  
| Name | Description |
| --- | --- |
| 
`SEPA`

 |  |

## [](#SEPA_ExternalPaymentCancellationRejection1Code "Copy link to heading")SEPA\_ExternalPaymentCancellationRejection1Code

The following Rejection codes can be used as a reason for the cancellation status of a SEPA Instant payment.

Enum values  
| Name | Description |
| --- | --- |
| 
`REASON_CLOSED_ACCOUNT_NUMBER`

 | 

The account number provided is closed and no longer active.

 |
| 

`REASON_INSUFFICIENT_FUNDS`

 | 

The account has insufficient funds.

 |
| 

`REASON_TRANSACTION_ALREADY_RETURNED`

 | 

The transaction has already been returned.

 |
| 

`REASON_REQUESTED_BY_CUSTOMER`

 | 

By request of the originator without any reason specified or refusal by the beneficiary

 |
| 

`REASON_LEGAL_DECISION`

 | 

The request was rejected for legal reasons

 |
| 

`REASON_NO_ANSWER_FROM_CUSTOMER`

 | 

No response from beneficiary

 |
| 

`REASON_NO_ORIGINAL_TRANSCATION_RECEIVED`

 | 

Original credit transfer not received

 |

## [](#TIPSExternalStatusReason1Code "Copy link to heading")TIPSExternalStatusReason1Code

The following reason codes can be used as a reason for negative confirmation of a SEPA Instant payment.

Enum values  
| Name | Description |
| --- | --- |
| 
`REASON_INVALID_FILE_FORMAT`

 | 

File format is invalid or does not conform to the required standard.

 |
| 

`REASON_TIMEOUT_CREDITOR_AGENT`

 | 

The payment was not received within the expected timeframe due to a timeout at the instructed agent.

 |
| 

`REASON_TIMEOUT_INSTRUCTED_AGENT`

 | 

The payment was not received within the expected timeframe due to a timeout at the instructed agent.

 |
| 

`REASON_OFFLINE_AGENT`

 | 

The payment could not be processed because the agent is offline.

 |
| 

`REASON_OFFLINE_CREDITOR_AGENT`

 | 

The payment could not be processed because the creditor agent is offline.

 |
| 

`REASON_ERROR_CREDITOR_AGENT`

 | 

The creditor agent encountered an error while processing the transaction.

 |
| 

`REASON_ERROR_INSTRUCTED_AGENT`

 | 

The instructed agent encountered an error while processing the transaction.

 |
| 

`REASON_INCORRECT_ACCOUNT_NUMBER`

 | 

The account number provided is incorrect.

 |
| 

`REASON_CLOSED_ACCOUNT_NUMBER`

 | 

The account number provided is closed and no longer active.

 |
| 

`REASON_BLOCKED_ACCOUNT`

 | 

The account is blocked and cannot receive the payment.

 |
| 

`REASON_TRANSACTION_FORBIDDEN`

 | 

The transaction is not allowed due to regulatory or internal restrictions.

 |
| 

`REASON_INVALID_BANK_OPERATION_CODE`

 | 

The bank operation code used in the transaction is invalid.

 |
| 

`REASON_PAYMENT_NOT_RECEIVED`

 | 

The payment was not received at the expected time.

 |
| 

`REASON_AGENT_SUSPENDED`

 | 

The agent handling the transaction is currently suspended.

 |
| 

`REASON_CREDITOR_AGENT_SUSPENDED`

 | 

The creditor agent handling the transaction is currently suspended.

 |
| 

`REASON_NOT_ALLOWED_AMOUNT`

 | 

The payment amount is not allowed due to scheme restrictions.

 |
| 

`REASON_DUPLICATION`

 | 

The payment amount is not allowed due to scheme restrictions.

 |
| 

`REASON_AMOUNT_EXCEEDS_SETTLEMENT_LIMIT`

 | 

The transaction amount exceeds the allowable settlement limit.

 |
| 

`REASON_MISSING_CREDITORS_ADDRESS`

 | 

The creditor’s address is missing from the transaction.

 |
| 

`REASON_END_CUSTOMER_DECEASED`

 | 

The payment cannot be processed because the end customer (recipient) is deceased.

 |
| 

`REASON_NOT_SPECIFIED_REASON_CUSTOMER_GENERATED`

 | 

A general, unspecified reason provided by the customer for rejecting the transaction.

 |
| 

`REASON_NOT_SPECIFIED_REASON_AGENT_GENERATED`

 | 

A general, unspecified reason provided by the agent for rejecting the transaction.

 |
| 

`REASON_BANK_IDENTIFIER_INCORRECT`

 | 

The bank identifier (e.g., BIC) provided is incorrect.

 |
| 

`REASON_MISSING_DEBTOR_ACCOUNT_OR_IDENTIFICATION`

 | 

The debtor’s account details or identification are missing.

 |
| 

`REASON_MISSING_DEBTORS_NAME_OR_ADDRESS`

 | 

The debtor’s name or address is missing from the transaction.

 |
| 

`REASON_MISSING_CREDITORS_NAME_OR_ADDRESS`

 | 

The creditor’s name or address is missing from the transaction.

 |
| 

`REASON_REGULATORY_REASON`

 | 

The transaction was rejected due to a regulatory requirement.

 |
| 

`REASON_DEBTOR_BANK_NOT_REGISTERED`

 | 

The debtor bank is not registered in the system and cannot process the payment.

 |
| 

`REASON_CREDITOR_BANK_NOT_REGISTERED`

 | 

The creditor bank is not registered in the system and cannot process the payment.

 |
| 

`REASON_INVALID_CUT_OFF_TIME`

 | 

The payment request was received outside the valid cut-off time.

 |