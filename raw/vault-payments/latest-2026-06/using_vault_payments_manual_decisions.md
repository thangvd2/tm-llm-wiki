---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/manual_decisions"
title: "Manual Decisions"
scraped_at: "2026-06-17T05:07:52.778Z"
images: 0
---

# Manual Decisions

Vault Payments provides first class support for Manual Intervention and Decisioning during `Instruction` processing. This is provided via the [`ManualDecision`](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#manual_decision_step) InstructionFlow step and `Vault Payments App`. You can dynamically configure the decisions which are available within an `InstructionFlow`, select the appropriate option in the `Vault Payments App` and react to the result back in your `InstructionFlow`. For example, you may encounter a risky `Instruction` which you want to be manually reviewed instead of immediately rejected. Within an `InstructionFlow`, we can define this behaviour and the exact options we want to make available alongside any additional inputs. The `Instruction` will then be paused until either a decision is made or a configured deadline is exceeded.

Vault Payments also provides the [`Manual Decisions API`](/vault-payments/latest/EN/api/payments_api#manual_decisions) which allows users to interact with Manual Decisions via an API rather than through the `Vault Payments App`.

## [](#overview "Copy link to heading")Overview

Manual decisions are represented by the `ManualDecision` resource. This is a resource which can only be created through the [`ManualDecisionStep`](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#manual_decision_step) within an `Instruction Flow`. When a `ManualDecisionStep` is processed, the associated `Instruction` will be suspended and have it’s `processing_status` set to `PROCESSING_STATUS_WAITING`. An accompanying `ManualDecision` object will be created in status `QUEUED`. The `Instruction` will carry on processing when either a decision is submitted or the deadline for the `ManualDecisionStep` is reached. The `ManualDecision` object will reflect this in its `status`.

-   `QUEUED` means the `ManualDecision` and associated `Instruction` is waiting for a decision
    
-   `SUBMITTING` means a decision has been made and the `ManualDecision` will be submitted shortly.
    
-   `SUBMITTED` means the decision has been submitted and the `Instruction` has carried on processing.
    
-   `DEADLINE_EXCEEDED` means the deadline has been exceeded and the `Instruction` has been deadlined.
    
-   `ERRORED` represents a technical error indicating that Vault Payments cannot accept the Manual Decision.
    

You can view any manual decisions through the `Vault Payments App` or via the `Manual Decisions API`:

The response will look like this:

Similarly, you can progress a `ManualDecision` from `QUEUED` to `SUBMITTED` through either the `Vault Payments App` or via the `Manual Decisions API`:

The response will look like this:

## [](#decisions "Copy link to heading")Decisions

When using a `ManualDecisionStep` in an `InstructionFlow`, you must define a `manual_decision_func` which returns a [`ManualDecision`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#ManualDecision), containing a list of [`Decisions`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision). These are the decisions a user can select via the `Vault Payments App` or the `Manual Decisions API`. At its simplest, a `Decision` can just consist of a unique ID and display name.

The created `ManualDecision` resource will contain these decisions. When submitting, the `decision_id` must be one of the provided decision id’s within the `manual_decision_func` (in this case `accept` or `reject`). You can access the chosen decision via the [`DecisionResult`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionResult) argument of the `ManualDecisionStep` `resolve_func`. Below is an example based on the above decisions:

## [](#decision_inputs "Copy link to heading")Decision inputs

A `Decision` can also contain a list of [`DecisionInputs`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInput). These represent additional inputs which the user can supply when submitting a decision. Each `DecisionInput` must have a unique `id`, `display_name` and `type`. Vault Payments currently supports the following types of `DecisionInput`:

 
| DecisionInput Type | Example Usage |
| --- | --- |
| 
DECISION\_INPUT\_TYPE\_STRING

 | 

"Currency not supported"

 |
| 

DECISION\_INPUT\_TYPE\_STRING\_LIST

 | 

"Account restricted, Not enough funds"

 |
| 

DECISION\_INPUT\_TYPE\_DECIMAL

 | 

"100.00"

 |
| 

DECISION\_INPUT\_TYPE\_BOOLEAN

 | 

true/false

 |
| 

DECISION\_INPUT\_TYPE\_DATE\_TIME

 | 

"2024-03-26T00:00:00Z"

 |
| 

DECISION\_INPUT\_TYPE\_REASON\_CODE

 | 

AC03

 |

Below is an example of adding a string input to the `reject` decision:

When submitting, you can provide an `inputs` field which must be valid against that particular decision’s list of `DecisionInputs`. That is, you must provide a key matching the `id` of one of the `DecisionInputs` and the value must match the `type`. For example, a submission for the above `reject` decision may look as follows:

You can access the submitted [`DecisionInput`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInput) via the `inputs` field of the `DecisionResult` parameter in the `ManualDecisionStep`s\` `resolve_func`. Below is an example based on the above decisions:

## [](#decision_input_constraints "Copy link to heading")Decision input constraints

A `DecisionInput` can also contain a list of [`DecisionInputConstraints`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInputConstraint). `DecisionInput` constraints ensure the validity of the data provided by users when making decisions. The constraints can be divided into two categories: primary and secondary. Primary constraints are specific to the primitive data type (string, boolean, decimal, etc.), while secondary constraints allow you to validate input values at the collection level.

Any `constraints` provided will be validated when a manual decision is created and enforced when a submission is made either through the `Vault Payments App` or the `Manual Decisions API`.

All fields are optional unless otherwise specified.

### [](#stringconstraint "Copy link to heading")StringConstraint

 
| Field | Effect |
| --- | --- |
| 
`min_length`

 | 

Specifies the minimum length for the string. Must be zero or higher.

 |
| 

`max_length`

 | 

Specifies the maximum length for the string. Must be greater than or equal to `min_length`.

 |
| 

`pattern`

 | 

A regex pattern that the string must match. Must be a valid regex.

 |

### [](#stringlistconstraint "Copy link to heading")StringListConstraint

 
| Field | Effect |
| --- | --- |
| 
`min_length`

 | 

Specifies the minimum number of items in the string list. Must be zero or higher.

 |
| 

`max_length`

 | 

Specifies the maximum number of items in the string list. Must be greater than or equal to `min_length`.

 |
| 

`pattern`

 | 

A regex pattern that each string in the list must match. Must be a valid regex.

 |

### [](#decimalconstraint "Copy link to heading")DecimalConstraint

 
| Field | Effect |
| --- | --- |
| 
`min_value`

 | 

Specifies the minimum value for the decimal. Must be a valid decimal number.

 |
| 

`max_value`

 | 

Specifies the maximum value for the decimal. Must be a valid decimal number.

 |
| 

`precision`

 | 

Specifies the precision of the decimal value. Must be a valid integer.

 |

### [](#datetimeconstraint "Copy link to heading")DateTimeConstraint

 
| Field | Effect |
| --- | --- |
| 
`earliest`

 | 

Specifies the earliest allowable date-time. Must be a valid python `datetime`.

 |
| 

`latest`

 | 

Specifies the latest allowable date-time. Must be a valid python `datetime` and later than `earliest`.

 |

### [](#reasoncodeconstraint "Copy link to heading")ReasonCodeConstraint

 
| Field | Effect |
| --- | --- |
| 
`reason_code_set`

 | 

Specifies the set of reason codes to use. Must be a valid `ReasonCodeSet` enum value.

 |
| 

`scheme_id`

 | 

Specifies the scheme ID associated with the reason codes. Must resolve to a valid list of reason codes when combined with the given `reason_code_set`.

 |

chat\_bubble

See the section [Supported Reason Codes](/vault-payments/latest/EN/using_vault_payments/manual_decisions#supported_reason_codes) for more information on this constraint.

### [](#enumerationconstraint "Copy link to heading")EnumerationConstraint

 
| Field | Effect |
| --- | --- |
| 
`permitted_values`

 | 

Specifies the list of permitted values. Must not be empty or contain duplicate values. Required.

 |
| 

`min_length`

 | 

Specifies the minimum length of the permitted values. Must be one or higher if specified.

 |
| 

`max_length`

 | 

Specifies the maximum length of the permitted values. Must be greater than or equal to `min_length` if specified.

 |

### [](#rules_for_usage "Copy link to heading")Rules for usage

Certain constraints are only applicable to specific `DecisionInput` types. Each `DecisionInput` may only contain at most **one** primary and at most **one** secondary constraint, if options are available for either. The following sections detail which constraints can be applied in conjunction with each `DecisionInputType`.

#### [](#string "Copy link to heading")STRING

 
| Constraint Type | Rules |
| --- | --- |
| 
`StringConstraint` (Primary)

 | 

No additional rules specified.

 |
| 

`EnumerationConstraint` (Secondary)

 | 

\- `max_length` must be 1.

 |
|  | 

\- `permitted_values` must match `StringConstraint` pattern (if specified).

 |

**Examples**

#### [](#string_list "Copy link to heading")STRING\_LIST

 
| Constraint Type | Rules |
| --- | --- |
| 
`StringConstraint` (Primary)

 | 

No additional rules specified.

 |
| 

`StringListConstraint` (Secondary)

 | 

\- `max_length` must be zero or higher.

 |
|  | 

\- `min_length` must be zero or higher.

 |
|  | 

\- `max_length` must be greater than or equal to `min_length`.

 |
|  | 

\- `pattern` (if specified) must be valid regex.

 |
| 

`EnumerationConstraint` (Secondary)

 | 

No additional rules specified.

 |

**Examples**

#### [](#decimal "Copy link to heading")DECIMAL

 
| Constraint Type | Rules |
| --- | --- |
| 
`DecimalConstraint` (Primary)

 | 

\- `min_value` (if specified) must be a valid number.

 |
|  | 

\- `max_value` (if specified) must be a valid number.

 |
|  | 

\- `precision` (if specified) must be a valid integer.

 |
|  | 

\- `max_value` must be greater than or equal to `min_value`.

 |
|  | 

\- `min_value` and `max_value` must not have more decimal places than `precision`.

 |
| 

`EnumerationConstraint` (Secondary)

 | 

\- `permitted_values` must be valid decimals.

 |
|  | 

\- `permitted_values` must match `DecimalConstraint` precision (if specified).

 |
| 

`StringListConstraint` (Secondary)

 | 

\- `pattern` must not be specified.

 |

**Examples**

#### [](#date_time "Copy link to heading")DATE\_TIME

 
| Constraint Type | Rules |
| --- | --- |
| 
`DateTimeConstraint` (Primary)

 | 

\- `earliest` (if specified) must be a valid python `datetime`.

 |
|  | 

\- `latest` (if specified) must be a valid python `datetime`.

 |
|  | 

\- `latest` must be after `earliest`.

 |
| 

`EnumerationConstraint` (Secondary)

 | 

\- `permitted_values` must be valid date-times, e.g. `1970-01-01T12:34:00.000000Z`.

 |
|  | 

\- `permitted_values` must be precise to the minute.

 |
| 

`StringListConstraint` (Secondary)

 | 

\- `pattern` must not be specified.

 |

**Examples**

#### [](#reason_code "Copy link to heading")REASON\_CODE

 
| Constraint Type | Rules |
| --- | --- |
| 
`ReasonCodeConstraint` (Primary)

 | 

\- `reason_code_set` and `scheme_id` must resolve to a list of at least one valid reason code.

 |
|  | 

\- Reason codes must be configured for the given `reason_code_set` and `scheme_id`.

 |

**Examples**

#### [](#boolean "Copy link to heading")BOOLEAN

 
| Constraint Type | Rules |
| --- | --- |
| 
N/A

 | 

Constraints are not permitted for boolean input type.

 |

**Examples**

#### [](#other_rules_for_usage "Copy link to heading")Other rules for usage

-   A `DecisionInput` cannot have duplicate constraints of the same type.
    
-   `StringListConstraint` cannot coexist with `EnumerationConstraint`.
    
-   `StringListConstraint` and `EnumerationConstraint` cannot coexist within the same `DecisionInput`.
    
-   `StringConstraint` pattern must match `StringListConstraint` pattern, or `StringListConstraint` must not have a pattern.
    

## [](#decision_input_options "Copy link to heading")Decision input options

A `DecisionInput` can also contain a list of [`DecisionInputOptions`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInputOption). These are concrete options which can be selected for the `ManualDecision`.

These options must satisfy any constraints which have been defined for the `DecisionInput`. By default these are only suggestions, you can alternatively enforce that an option must be picked by providing an `EnumerationConstraint`. When an `EnumerationConstraint` is applied to a `DecisionInput`, the `value` of each `DecisionInputOption` must be one of the `permitted_values` specified in the `EnumerationConstraint`; an `EnumerationConstraint`'s `permitted_values` are allowed be a superset of the provided options, however.

**Examples**

## [](#supported_reason_codes "Copy link to heading")Supported reason codes

Flow writers may want to request a valid ISO20022 external reason code when submitting a [`Decision`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision). To achieve this, they are able to constrain a [`DecisionInput`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionInput) with a [`ReasonCodeConstraint`](/vault-payments/latest/EN/api/flows/flows_api/constraints#ReasonCodeConstraint).

When a Manual Decision is retrieved via the [API](/vault-payments/latest/EN/api/payments_api#manual_decisions) instances of the `ReasonCodeConstraint` will each be hydrated with an explicit list of external reason code definitions, scoped to their `scheme_id` and `reason_code_set`.

Each reason code definition will contain the following fields:

-   `value`: The official ISO20022 reason code value, e.g. `ACCP`
    
-   `name`: The official ISO20022 reason code value, e.g. `AcceptedCustomerProfile`
    
-   `description`: The official ISO20022 reason code description.
    
-   `usage`: Usage notes, if any are available.
    

### [](#flows_usage "Copy link to heading")Flows usage

As an example, to define a [`DecisionInputConstraint`](/vault-payments/latest/EN/using_vault_payments/manual_decisions#decision_input_constraints) that requires a valid ISO20022 external reason code for a SEPA Instant payment, scoped to the `ExternalCancellationReason1` reason code set, you would use the following code:

### [](#payment_systems "Copy link to heading")Payment systems

A payment system can be referenced within a [`ReasonCodeConstraint`](/vault-payments/latest/EN/api/flows/flows_api/constraints#ReasonCodeConstraint) by using its `scheme_id` field.

Below is a list of payment system currently accessible to `ReasonCodeConstraint`, alongside the IDs with which you can reference them:

 
| Payment System | ID |
| --- | --- |
| 
SEPA Instant

 | 

sepa\_instant

 |
| 

SEPA Instant TIPS

 | 

sepa\_instant\_tips

 |
| 

SEPA Credit Transfers

 | 

sepa\_credit\_transfers

 |
| 

SEPA Direct Debits

 | 

sepa\_direct\_debits

 |
| 

FedNow

 | 

fednow

 |
| 

FedNow ACH Credits

 | 

fednow\_ach\_credits

 |
| 

FedNow ACH Debits

 | 

fednow\_ach\_debits

 |
| 

Fedwire

 | 

fedwire

 |

### [](#reason_code_sets "Copy link to heading")Reason code sets

A reason code set can be referenced within a [`ReasonCodeConstraint`](/vault-payments/latest/EN/api/flows/flows_api/constraints#ReasonCodeConstraint) by using its `reason_code_set` field. Valid reason code sets can be referenced in Flows by using [`ReasonCodeSet`](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet) from the Flows SDK.

Below is a list of reason code sets currently accessible to `ReasonCodeConstraint`, alongside the IDs with which you can reference them:

#### [](#externalcancellationreason1 "Copy link to heading")ExternalCancellationReason1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_CANCELLATION\_REASON\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
AC03

 | 

InvalidCreditorAccountNumber

 | 

Wrong account number in Credit Transfer.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AGNT

 | 

IncorrectAgent

 | 

Agent in the payment workflow is incorrect.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM09

 | 

WrongAmount

 | 

Amount is not the amount agreed or expected.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE16

 | 

InvalidDebtorIdentificationCode

 | 

Debtor or Ultimate Debtor identification code missing or invalid.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

COVR

 | 

CoverCancelledOrReturned

 | 

Cover payments has either been returned or cancelled.

 |  |
| 

CURR

 | 

IncorrectCurrency

 | 

Currency of the payment is incorrect.

 |  |
| 

CUTA

 | 

CancelUponUnableToApply

 | 

Cancellation requested because an investigation request has been received and no remediation is possible.

 | 

Fedwire

 |
| 

DS24

 | 

TimeOut

 | 

Cancellation requested because the original payment order expired due to time-out.

 |  |
| 

DT01

 | 

InvalidDate

 | 

Invalid date (for example, wrong or missing settlement date).

 |  |
| 

DUPL

 | 

DuplicatePayment

 | 

Payment is a duplicate of another payment.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

FRAD

 | 

FraudulentOrigin

 | 

Cancellation requested following a transaction that was originated fraudulently. The use of the FraudulentOrigin code should be governed by jurisdictions.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

FRNA

 | 

ForwardToNextAgent

 | 

To complement a rejection response, suggesting the request for cancelation should be forwarded to the next agent in the payment transaction chain.

 |  |
| 

FRTR

 | 

FinalResponse

 | 

Direct Debit Tracking recalled as Mandate Cancelled.

 |  |
| 

INDM

 | 

IndemnityRequired

 | 

To express the wish to establish a bilateral indemnity agreement.

 |  |
| 

MODT

 | 

ModifiedTransaction

 | 

The underlying transaction in relation to an RTP was modified.

 |  |
| 

PAID

 | 

TransactionAlreadyPaid

 | 

The underlying transaction in relation to an RTP was already paid (via other means).

 |  |
| 

SVNR

 | 

ServiceNotRendered

 | 

The payment is cancelled since a cash amount rendered was not correct or goods or a service was not rendered to the customer, e.g. in an e-commerce situation.

 |  |
| 

SYAD

 | 

RequestToSettlementSystemAdministrator

 | 

Cancellation requested by System Member to Settlement System Administrator to indicate that the cancellation request must not be forwarded further in the chain.

 |  |
| 

TECH

 | 

TechnicalProblem

 | 

Cancellation requested following technical problems resulting in an erroneous transaction.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

UPAY

 | 

UnduePayment

 | 

Payment is not justified.

 | 

Fedwire

 |
| 

ENUE

 | 

EndUserError

 | 

Cancellation or request for return requested by the Debtor specifically due to one or more errors by debtor in the original Credit Transfer.  
  
Usage: This code can be used for any error in the original Credit Transfer made by the Debtor. Can also be used if multiple errors were made in the original Credit Transfer.

 |  |
| 

UAPA

 | 

UnauthorizedPayment

 | 

The Debtor is requesting a return of the payment because the payment was not properly authorized.  
  
Usage: This code can be used in the case where a Credit Transfer was made without proper authorization from the Debtor. This could be due to compromised end user credentials.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

NARR

 | 

Narrative

 | 

Reason is provided as narrative information in the additional reason information.

 | 

Fedwire

 |
| 

AC02

 | 

InvalidDebtorAccountNumber

 | 

Debtor account number invalid or missing.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BIAS

 | 

BatchInstructionAlreadySettled

 | 

Process a cancellation request but batch already settled.

 |  |
| 

INCR

 | 

InvalidCancellationRequest

 | 

Process a cancellation request with incorrect reference to original batch.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

DRTP

 | 

DuplicationRequestToPay

 | 

Duplication of a request-to-pay message.

 |  |
| 

WNTB

 | 

WarrantyBreach

 | 

Breach of warranty provided in connection with a request for payment.

 |  |
| 

MD06

 | 

RefundRequestByEndCustomer

 | 

Return of funds requested by end customer.

 |  |

#### [](#externalinvestigationexecutionconfirmation1 "Copy link to heading")ExternalInvestigationExecutionConfirmation1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_INVESTIGATION\_EXECUTION\_CONFIRMATION\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
ACDA

 | 

AcceptedDebitAuthorisation

 | 

Used when a creditor accepts the debit authorisation.

 |  |
| 

ACNR

 | 

AcceptedClaimNonReceipt

 | 

The claim for non-receipt of a payment instruction is accepted.

 |  |
| 

ACVA

 | 

AcceptedValueDateAdjustment

 | 

The claim for value date correction is accepted.

 |  |
| 

CHRG

 | 

ChargesDetailsProvided

 | 

Further charges details are provided to resolve the case.

 |  |
| 

CNCL

 | 

CancelledAsPerRequest

 | 

Used when a requested cancellation is successful.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CONF

 | 

ConfirmationOfPayment

 | 

Used when a payment has been checked and was correctly executed without any intervention.

 |  |
| 

CVAA

 | 

CorrectValueDateAlreadyApplied

 | 

The original value date was correct.

 |  |
| 

CWFW

 | 

CancellationWillFollow

 | 

Used when a payment will be cancelled to solve an investigation case.

 |  |
| 

FTNA

 | 

CancellationRequestForwardedToTheNextAgent

 | 

The cancellation request has been forwarded to the next agent for execution  
  
Usage: This code should only be utilised where a Case ID is not present.

 |  |
| 

ICOV

 | 

CoverInitiated

 | 

Used when a transfer of funds has been initiated (a cover payment) to resolve a case.

 |  |
| 

IDUP

 | 

InstructionIsDuplicate

 | 

Used when the requested check for a possible duplicate instruction is confirmed.

 |  |
| 

IPAY

 | 

PaymentInitiated

 | 

Used when the result of an investigation is, or will be, the initiation of a payment instruction.

 |  |
| 

IPYI

 | 

PaymentInstructionInitiated

 | 

Used when a payment instruction (eg. MT103) has been initiated to resolve a case.

 |  |
| 

MCOV

 | 

CoverModified

 | 

Used when a transfer of funds has been modified (a cover payment) to resolve a case.

 |  |
| 

MODI

 | 

ModifiedAsPerRequest

 | 

Used when a requested modification is successful.

 |  |
| 

MWFW

 | 

ModificationWillFollow

 | 

Used when the payment will be modified to solve an investigation case.

 |  |
| 

PDCR

 | 

PendingCancellationRequest

 | 

Used when a requested cancellation is pending.

 | 

Fedwire

 |
| 

PECR

 | 

PartiallyExecutedCancellationRequest

 | 

Used when a requested cancellation has been partially executed.

 | 

Fedwire

 |
| 

PURP

 | 

PurposeDetailsProvided

 | 

Further purpose details are provided to resolve the case.

 |  |
| 

RJCR

 | 

RejectedCancellationRequest

 | 

Used when a requested cancellation has been rejected.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RJNR

 | 

RejectedClaimNonReceipt

 | 

The claim for non-receipt of a payment instruction is rejected.

 |  |
| 

RJVA

 | 

RejectedValueDateAdjustment

 | 

The claim for value date correction is rejected.

 |  |
| 

SMTC

 | 

StatementEntryCorrect

 | 

Used when the entry in the statement is correct.

 |  |
| 

SMTI

 | 

StatementEntryIncorrect

 | 

Used when the entry in the statement is incorrect and further information is provided with the resolution.

 |  |
| 

UWFW

 | 

UnableToApplyWillFollow

 | 

Used when sender wants to respond to an assignment with an Unable To Apply workflow.

 |  |
| 

BIAS

 | 

BatchInstructionAlreadySettled

 | 

Process a cancellation request but batch already settled.

 |  |
| 

IDNE

 | 

InstructionDoesNotExist

 | 

Process a Batch Cancellation "using an incorrect batch sequence number".

 |  |
| 

IVCR

 | 

InvalidCancellationRequest

 | 

Process a cancellation request with incorrect reference to original batch.

 |  |
| 

INFO

 | 

AdditionalInformationSent

 | 

Used when additional information has been sent to the beneficiary of a payment.

 |  |
| 

NINF

 | 

NoInformationAvailable

 | 

Used when no additional information is available.

 |  |
| 

PDNG

 | 

Pending

 | 

Used to inform that a response to an investigation is pending.

 |  |

#### [](#externalinvestigationreason1 "Copy link to heading")ExternalInvestigationReason1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_INVESTIGATION\_REASON\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
RERE

 | 

RelatedTransactionReferenceIncorrect

 | 

Related transaction reference is incorrect, incomplete or missing.

 | 

Fedwire

 |
| 

SVLV

 | 

ServiceLevelIncorrect

 | 

Payment type service level is incorrect, incomplete or missing.

 | 

Fedwire

 |
| 

CAPU

 | 

CategoryPurposeIncorrect

 | 

Payment type category purpose is incorrect, incomplete or missing.

 | 

Fedwire

 |
| 

REDT

 | 

RequestedExecutionDateIncorrect

 | 

Requested execution date is incorrect or missing.

 | 

Fedwire

 |
| 

ISDT

 | 

InterbankSettlementDateIncorrect

 | 

Interbank settlement date is incorrect.

 | 

Fedwire

 |
| 

ISAM

 | 

InterbankSettlementAmountIncorrect

 | 

Interbank settlement amount is incorrect.

 | 

Fedwire

 |
| 

AMNT

 | 

AmountInvestigation

 | 

An amount element has triggered the investigation.

 | 

Fedwire

 |
| 

DTOR

 | 

DebtorInformationRequested

 | 

Further information pertaining to the debtor is requested.

 | 

Fedwire

 |
| 

DTAG

 | 

DebtorAgentInformationRequested

 | 

Further information pertaining to the debtor agent is requested.

 | 

Fedwire

 |
| 

IGRA

 | 

InstructingReimbursementAgentInformationRequested

 | 

Further information pertaining to the instructing reimbursement agent is requested.

 |  |
| 

IDRA

 | 

InstructedReimbursementAgentInformationRequested

 | 

Further information pertaining to the instructed reimbursement agent is requested.

 |  |
| 

TDRA

 | 

ThirdReimbursementAgentInformationRequested

 | 

Further information pertaining to the third reimbursement agent is requested.

 |  |
| 

INAG

 | 

IntermediaryAgentInformationRequested

 | 

Further information pertaining to an intermediary agent is requested.

 | 

Fedwire

 |
| 

PYCC

 | 

ClearingChannelIncorrect

 | 

Payment type clearing channel is incorrect, incomplete or missing.

 |  |
| 

CTAG

 | 

CreditorAgentInformationRequested

 | 

Further information pertaining to the creditor agent is requested.

 | 

Fedwire

 |
| 

CTOR

 | 

CreditorInformationRequested

 | 

Further information pertaining to the creditor is requested.

 | 

Fedwire

 |
| 

REIN

 | 

RemittanceInformationIncorrect

 | 

Remittance information is incorrect, incomplete or missing.

 | 

Fedwire

 |
| 

PYPU

 | 

PaymentPurposeIncorrect

 | 

Transaction payment purpose is incorrect, incomplete or missing.

 | 

Fedwire

 |
| 

CHBE

 | 

ChargeBearerInformationRequested

 | 

Further information pertaining to the charge bearer is requested.

 |  |
| 

INNA

 | 

NextAgentInstructionInformationRequested

 | 

Further information pertaining to the instruction for next agent is requested.

 |  |
| 

INCA

 | 

CreditorAgentInstructionInformationRequested

 | 

Further information pertaining to the instruction for creditor agent is requested.

 | 

Fedwire

 |
| 

STET

 | 

StatementEntryInformationRequested

 | 

Further information pertaining to a statement entry is requested.

 |  |
| 

SEAC

 | 

SettlementAccountInformationRequested

 | 

Further information pertaining to the settlement account is requested.

 |  |
| 

CHIN

 | 

ChargesInformationRequested

 | 

Further information pertaining to the charges information is requested.

 | 

Fedwire

 |
| 

ULTD

 | 

UltimateDebtorInformationRequested

 | 

Further information pertaining to the ultimate debtor is requested.

 | 

Fedwire

 |
| 

ULTC

 | 

UltimateCreditorInformationRequested

 | 

Further information pertaining to the ultimate creditor is requested.

 | 

Fedwire

 |
| 

PURP

 | 

PurposeInformationRequested

 | 

Further information pertaining to the purpose is requested.

 | 

Fedwire

 |
| 

INPA

 | 

InitiatingPartyInformationRequested

 | 

Further information pertaining to the initiating party is requested.

 | 

Fedwire

 |
| 

REGR

 | 

RegulatoryReportingIncomplete

 | 

Regulatory reporting is incomplete or missing.

 | 

Fedwire

 |
| 

TAXD

 | 

TaxDataIncomplete

 | 

Tax data is incomplete or missing.

 | 

Fedwire

 |
| 

FRAD

 | 

FraudulentInstrument

 | 

Instrument is confirmed as fraudulent.

 | 

Fedwire

 |
| 

FCCI

 | 

FinancialCrimesCompliance

 | 

Investigation relates to financial crimes compliance.

 | 

Fedwire

 |
| 

FWTR

 | 

FundsTransferRegulation

 | 

Investigation relates to funds transfer regulation or wire transfer regulation.

 |  |
| 

CHCO

 | 

ChequeCopyRequested

 | 

Copy of cheque is requested.

 |  |
| 

DRCO

 | 

DraftCopyRequested

 | 

Copy of draft is requested.

 |  |
| 

AMLI

 | 

AntiMoneyLaundering

 | 

Request message relates to anti-money laundering.

 | 

Fedwire

 |
| 

RQPR

 | 

PartyRelationshipClarificationRequested

 | 

Clarification over a party relationship is requested.

 | 

Fedwire

 |
| 

RQVD

 | 

VesselAircraftClarificationRequested

 | 

Clarification over a vessel or aircraft is requested.

 | 

Fedwire

 |
| 

RQLD

 | 

LocationDetailsClarificationRequested

 | 

Clarification over location details is requested.

 | 

Fedwire

 |
| 

RQSG

 | 

GoodsServicesClarificationRequested

 | 

Clarification over goods or services involved is requested.

 | 

Fedwire

 |
| 

RQED

 | 

ExchangeDateClarificationRequested

 | 

Clarification over when goods or services were exchanged is requested.

 |  |
| 

RQDO

 | 

DocumentationRequested

 | 

Documentation relating to the transaction is requested.

 | 

Fedwire

 |
| 

CHNP

 | 

ChequeNotPaid

 | 

Cheque not yet paid despite being sent to agent.

 |  |
| 

NARR

 | 

Narrative

 | 

See AdditionalRequestData element for additional information.

 | 

Fedwire

 |
| 

RQCD

 | 

AccountClosureDateRequested

 | 

Account closure date is requested.

 |  |
| 

UTAP

 | 

UnableToApply

 | 

A booked entry cannot be applied by the creditor.

 | 

Fedwire

 |
| 

CCNR

 | 

CreditorClaimsNonReceipt

 | 

Creditor claims non-receipt of payment.

 | 

Fedwire

 |
| 

CONR

 | 

CreditorAgentClaimsNonReceipt

 | 

Creditor agent claims non-receipt of cover or settlement.

 | 

Fedwire

 |
| 

PINC

 | 

PaymentInitiationNotConfirmed

 | 

Payment initiation has not been settled or confirmed.

 |  |
| 

RQVA

 | 

RequestValueDateAdjustment

 | 

Revaluation of an entry or value date adjustment is requested.

 | 

Fedwire

 |
| 

RQUF

 | 

UseOfFundsRequested

 | 

Use of funds on an entry is requested.

 |  |
| 

RQDA

 | 

DebitAuthorisationRequested

 | 

Debit authorisation on an entry is requested.

 | 

Fedwire

 |
| 

ACCT

 | 

AccountInvestigation

 | 

Investigation relating to an account.

 |  |
| 

RQCH

 | 

ChargesInvestigation

 | 

Investigation relating to charges that have been taken or are unpaid.

 | 

Fedwire

 |
| 

RIMF

 | 

IMFRequest

 | 

Request from International Monetary Fund.

 |  |
| 

MCAT

 | 

MissingCreditAmountOnStatement

 | 

Missing credit amount on statement.

 |  |
| 

MDAT

 | 

MissingDebitAmountOnStatement

 | 

Missing debit amount on statement.

 |  |
| 

IIRT

 | 

InvalidInterestRate

 | 

Invalid interest rate.

 |  |
| 

INCB

 | 

IncorrectClosingBalance

 | 

Incorrect closing balance.

 |  |
| 

IAIB

 | 

IncorrectAccruedInterestBalance

 | 

Incorrect accrued interest balance.

 |  |
| 

IDAI

 | 

IncorrectDailyAccruedInterestAmount

 | 

Incorrect daily accrued interest amount.

 |  |
| 

INTA

 | 

IncorrectTransactionAmount

 | 

Incorrect transaction amount.

 |  |

#### [](#externalinvestigationreasonsubtype1 "Copy link to heading")ExternalInvestigationReasonSubType1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_INVESTIGATION\_REASON\_SUB\_TYPE\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
MMNA

 | 

MismatchNameAccount

 | 

Name and account are not matching.

 | 

Fedwire

 |
| 

RQAC

 | 

RequestAccount

 | 

Account is requested.

 | 

Fedwire

 |
| 

RQPP

 | 

RequestPassportCopy

 | 

Copy of passport is requested.

 |  |
| 

RQIN

 | 

RequestInvoice

 | 

Copy of invoice is requested.

 |  |
| 

RQOW

 | 

RequestOwnershipConfirmation

 | 

Confirmation of ownership is requested.

 |  |
| 

RQDB

 | 

RequestDateOfBirth

 | 

Date of birth is requested.

 |  |
| 

RQCB

 | 

RequestCityOfBirth

 | 

City of birth is requested.

 |  |
| 

RQPO

 | 

RequestProvinceOfBirth

 | 

Province of birth is requested.

 |  |
| 

RQCO

 | 

RequestCountryOfBirth

 | 

Country of birth is requested.

 |  |
| 

RQAT

 | 

RequestAddressType

 | 

Postal address type is requested.

 |  |
| 

RQDE

 | 

RequestAddressDepartment

 | 

Postal address department is requested.

 | 

Fedwire

 |
| 

RQAS

 | 

RequestAddressSubDepartment

 | 

Postal address sub department is requested.

 | 

Fedwire

 |
| 

RQSN

 | 

RequestStreetName

 | 

Postal address street name is requested.

 | 

Fedwire

 |
| 

RQB1

 | 

RequestBuildingNumber

 | 

Postal address building number is requested.

 | 

Fedwire

 |
| 

RQBN

 | 

RequestBuildingName

 | 

Postal address building name is requested.

 | 

Fedwire

 |
| 

RQFL

 | 

RequestFloor

 | 

Postal address floor is requested.

 | 

Fedwire

 |
| 

RQPB

 | 

RequestPostBox

 | 

Postal address post box is requested.

 | 

Fedwire

 |
| 

RQRO

 | 

RequestRoom

 | 

Postal address room is requested.

 | 

Fedwire

 |
| 

RQPC

 | 

RequestPostCode

 | 

Postal address post code is requested.

 | 

Fedwire

 |
| 

RQTN

 | 

RequestTownName

 | 

Postal address town name is requested.

 | 

Fedwire

 |
| 

RQTL

 | 

RequestTownLocation

 | 

Postal address town location name is requested.

 | 

Fedwire

 |
| 

RQDN

 | 

RequestDistrictName

 | 

Postal address district name is requested.

 | 

Fedwire

 |
| 

RQCS

 | 

RequestCountrySubDivision

 | 

Postal address country sub division is requested.

 | 

Fedwire

 |
| 

RQCC

 | 

RequestCountry

 | 

Postal address country is requested.

 | 

Fedwire

 |
| 

RQAL

 | 

RequestAddressLine

 | 

Postal address line is requested.

 | 

Fedwire

 |
| 

RQPA

 | 

RequestFullPostalAddress

 | 

Full postal address is requested.

 | 

Fedwire

 |
| 

RQNM

 | 

RequestFullName

 | 

Full name is requested.

 | 

Fedwire

 |
| 

ARNU

 | 

RequestAlienRegistrationNumber

 | 

Alien Registration Number is requested.

 |  |
| 

CCPT

 | 

RequestPassportNumber

 | 

Passport Number is requested.

 |  |
| 

DRLC

 | 

RequestDriversLicenseNumber

 | 

Drivers License Number is requested.

 |  |
| 

EMPL

 | 

RequestEmployeeId

 | 

Employee Identification Number is requested.

 |  |
| 

NIDN

 | 

RequestNationalIdentityNumber

 | 

National Identity Number is requested.

 |  |
| 

SOSE

 | 

RequestSocialSecurityNumber

 | 

Social Security Number is requested.

 |  |
| 

TELE

 | 

RequestTelephoneNumber

 | 

Telephone Number is requested.

 |  |
| 

TXID

 | 

RequestTaxId

 | 

Tax Identification Number is requested.

 |  |
| 

POID

 | 

RequestPersonCommercialId

 | 

Person Commercial Identification is requested.

 |  |
| 

BANK

 | 

RequestBankPartyId

 | 

Bank party identification is requested.

 | 

Fedwire

 |
| 

CBID

 | 

RequestCentralBankId

 | 

Central bank identification number is requested.

 | 

Fedwire

 |
| 

CHID

 | 

RequestClearingHouseId

 | 

Clearing identification number is requested.

 |  |
| 

CINC

 | 

RequestCertificateIncorporationId

 | 

Certificate of incorporation number is requested.

 |  |
| 

COID

 | 

RequestCountryOrgId

 | 

Country identification code is requested.

 | 

Fedwire

 |
| 

CUST

 | 

RequestCustomerNumber

 | 

Customer number is requested.

 |  |
| 

DUNS

 | 

RequestDunsNumber

 | 

Data universal number is requested.

 |  |
| 

GS1G

 | 

RequestGs1Gln

 | 

GS1GLN (Global location number) identifier is requested.

 |  |
| 

SREN

 | 

RequestSirenNumber

 | 

SIREN number is requested.

 |  |
| 

SRET

 | 

RequestSiretNumber

 | 

SIRET number is requested.

 |  |
| 

BDID

 | 

RequestBusinessDomainId

 | 

Identifier of the business domain is requested.

 |  |
| 

BOID

 | 

RequestOtherOrgId

 | 

Other identification of the organisation is requested.

 |  |
| 

RQLE

 | 

RequestLegalEntityIdentifier

 | 

Legal entity identifier is requested.

 |  |
| 

RQNA

 | 

RequestNationality

 | 

Nationality is requested.

 |  |
| 

RQCZ

 | 

RequestCitizenship

 | 

Citizenship is requested.

 |  |
| 

RQRE

 | 

RequestRelationship

 | 

Relationship between Debtor and Creditor is requested.

 |  |
| 

RQOC

 | 

RequestOccupation

 | 

Occupation is requested.

 |  |
| 

RQID

 | 

RequestIndustry

 | 

Industry is requested.

 |  |
| 

RICD

 | 

RequestIncorporationDate

 | 

Incorporation date is requested.

 |  |
| 

RICC

 | 

RequestIncorporationCountry

 | 

Incorporation country/country of registration is requested.

 |  |
| 

RCBL

 | 

RequestBusinessLocations

 | 

Countries of all business/operations locations are requested.

 |  |
| 

RQLB

 | 

RequestLineOfBusiness

 | 

Line of business is requested.

 |  |
| 

RQON

 | 

RequestOnwardTradeLocation

 | 

Location of any onward trade of goods or services is requested.

 |  |
| 

RQCI

 | 

RequestCountriesInvolved

 | 

Details of all countries involved in the transaction are requested.

 |  |
| 

RQDS

 | 

RequestServiceDetails

 | 

Details of services are requested.

 |  |
| 

RQDG

 | 

RequestGoodsDetails

 | 

Details of goods are requested.

 |  |
| 

RQLS

 | 

RequestServiceLocation

 | 

Location of where services are carried out is requested.

 |  |
| 

RQGF

 | 

RequestGoodsFinalDestination

 | 

Final destination of goods is requested.

 |  |
| 

RQSD

 | 

RequestServiceDate

 | 

Date upon which services are carried out is requested.

 |  |
| 

RQGD

 | 

RequestGoodsOwnershipChangeDate

 | 

Date upon which goods officially change ownership is requested.

 |  |
| 

RQUS

 | 

RequestUsNexusConfirmation

 | 

Confirmation of whether US is nexus to transaction is requested.

 |  |
| 

RQBL

 | 

RequestBillOfLading

 | 

Bill of lading is requested.

 |  |
| 

RQCD

 | 

RequestCustomsDeclaration

 | 

Customs declaration is requested.

 |  |
| 

RQTD

 | 

RequestTransportDocumentation

 | 

Transport documentation is requested.

 |  |
| 

RQHS

 | 

RequestHsCode

 | 

HS code of goods is requested.

 |  |
| 

RQAB

 | 

RequestAirwayBill

 | 

Airway bill is requested.

 |  |
| 

RQIM

 | 

RequestVesselImo

 | 

Vessel IMO is requested.

 |  |
| 

RQTA

 | 

RequestAircraftTailNumber

 | 

Aircraft tail number is requested.

 |  |
| 

RCOO

 | 

RequestCountryOfOrigination

 | 

Country of origination is requested.

 | 

Fedwire

 |
| 

RQUO

 | 

RequestUnderlyingOwner

 | 

Underlying owner is requested.

 | 

Fedwire

 |
| 

RQCT

 | 

RequestTransitCountries

 | 

Countries of transit between the debtor and creditor are requested.

 |  |
| 

RQDV

 | 

RequestVoyageDates

 | 

Dates of voyage for goods or services are requested.

 |  |
| 

RPOC

 | 

RequestPortsOfCall

 | 

Ports of call are requested.

 |  |
| 

RQCM

 | 

RequestCivilMilitaryConfirmation

 | 

Confirmation of whether transaction is civil or military in nature is requested.

 |  |
| 

RQUP

 | 

RequestUltimatePartiesSourceOfFunds

 | 

Ultimate parties and source of funds are requested.

 | 

Fedwire

 |
| 

RQLP

 | 

RequestPaymentLicense

 | 

Licence applicable or required for payment is requested.

 |  |
| 

RQIC

 | 

RequestCharitableInvolvementConfirmation

 | 

Confirmation of whether charitable sector is involved is requested.

 |  |
| 

RQKC

 | 

RequestKimberleyCertification

 | 

Kimberley certification is requested.

 |  |
| 

RQGL

 | 

RequestGeneralLicenseCopy

 | 

General license copy is requested.

 |  |
| 

RQSL

 | 

RequestSpecificLicenseCopy

 | 

Specific license copy is requested.

 |  |
| 

RQDP

 | 

RequestDetailedPaymentPurpose

 | 

Detailed purpose of payment requested.

 |  |
| 

RQBW

 | 

RequestBusinessWebsite

 | 

Business website requested.

 |  |
| 

RQOG

 | 

RequestOriginOfGoods

 | 

Origin of goods requested.

 |  |
| 

RQUU

 | 

RequestFinalUserUsage

 | 

Final user and usage of goods or services requested.

 |  |
| 

MISS

 | 

InformationMissing

 | 

Information is missing.

 | 

Fedwire

 |
| 

INVA

 | 

InformationInvalid

 | 

Information is invalid.

 | 

Fedwire

 |
| 

ICOM

 | 

InformationIncomplete

 | 

Information is incomplete.

 | 

Fedwire

 |

#### [](#externalinvestigationstatusreason1 "Copy link to heading")ExternalInvestigationStatusReason1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_INVESTIGATION\_STATUS\_REASON\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
AGNT

 | 

IncorrectAgentOrParty

 | 

Request message has been directed at an incorrect agent or party.

 | 

Fedwire

 |
| 

DU01

 | 

DuplicateRequest

 | 

Request message is duplicate, duplicate request message is rejected.

 | 

Fedwire

 |
| 

NARR

 | 

Narrative

 | 

See ResponseData element for additional information.

 | 

Fedwire

 |
| 

FTNA

 | 

ForwardedToNextAgent

 | 

Request message forwarded to another agent or party.

 | 

Fedwire

 |
| 

CAPR

 | 

ClosedAsPerRequest

 | 

Investigation closed as per the request message.

 | 

Fedwire

 |
| 

CACR

 | 

ClosedAsCancellationRequestSent

 | 

Investigation closed as cancellation request for underlying transaction has been sent.

 | 

Fedwire

 |
| 

ADAC

 | 

AwaitingDebitAuthorisation

 | 

Awaiting debit authorisation from customer.

 | 

Fedwire

 |
| 

ARPL

 | 

AwaitingReply

 | 

Awaiting reply from customer.

 | 

Fedwire

 |
| 

NOAS

 | 

NoAnswerFromCustomer

 | 

No reply from customer.

 | 

Fedwire

 |
| 

INPO

 | 

InProgress

 | 

Collation of response data is still ongoing.

 | 

Fedwire

 |
| 

NOOR

 | 

NoOriginalTransactionReceived

 | 

Underlying transaction never received.

 | 

Fedwire

 |
| 

ARJT

 | 

AlreadyRejectedTransaction

 | 

Underlying transaction already rejected.

 | 

Fedwire

 |
| 

ARDT

 | 

AlreadyReturned

 | 

Investigation request not accepted as the transaction has already been returned.

 | 

Fedwire

 |
| 

RR04

 | 

RegulatoryReason

 | 

Regulatory Reason.

 | 

Fedwire

 |
| 

LEGL

 | 

LegalDecision

 | 

Reported when the request cannot be accepted because of regulatory rules.

 | 

Fedwire

 |
| 

ESCA

 | 

Escalation

 | 

Special follow-up is taking place.

 | 

Fedwire

 |
| 

INIT

 | 

IncorrectInvestigationType

 | 

Incorrect investigation type used in request message.

 | 

Fedwire

 |
| 

PARE

 | 

PartialResponse

 | 

Response message partially addresses the request, a further response message will follow.

 | 

Fedwire

 |
| 

NOAD

 | 

NoAdditionalInformation

 | 

No additional information in relation to the request can be provided.

 | 

Fedwire

 |
| 

G004

 | 

PendingCoverFunds

 | 

Indicates that the credit claim non receipt investigation is pending as the cover creditor is waiting for the credit of the cover.

 |  |
| 

CMPI

 | 

CorrectionAsPerInquiry

 | 

Related to a Correction Made as Per Inquiry procedure for investigation status Closed (CLSD).

 |  |

#### [](#externalinvestigationsubtype1 "Copy link to heading")ExternalInvestigationSubType1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_INVESTIGATION\_SUB\_TYPE\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
AMLI

 | 

AntiMoneyLaunderingInvestigation

 | 

Investigation relates to anti-money laundering.

 | 

Fedwire

 |
| 

SANC

 | 

SanctionsInvestigation

 | 

Investigation relates to sanctions.

 | 

Fedwire

 |
| 

FRAD

 | 

FraudInvestigation

 | 

Investigation relates to fraud.

 | 

Fedwire

 |
| 

UTEX

 | 

UnableToExecute

 | 

Investigation relates to a transaction that cannot be executed.

 | 

Fedwire

 |
| 

FCCI

 | 

FinancialCrimesComplianceInvestigation

 | 

Investigation relates to financial crimes compliance.

 | 

Fedwire

 |
| 

FWTR

 | 

FundsWireTransferRegulation

 | 

Investigation relates to funds/wire transfer regulation.

 | 

Fedwire

 |
| 

RQUF

 | 

RequestUseOfFunds

 | 

Use of funds on an entry is requested.

 |  |
| 

RQDA

 | 

RequestDebitAuthorisation

 | 

Debit authorisation on an entry is requested.

 | 

Fedwire

 |
| 

RQVA

 | 

RequestValueDateAdjustment

 | 

Revaluation of an entry is requested.

 | 

Fedwire

 |
| 

RQCH

 | 

RequestChargesInvestigation

 | 

Investigation relating to charges that have been taken or are requested.

 | 

Fedwire

 |
| 

OTHR

 | 

Other

 | 

Other.

 | 

Fedwire

 |

#### [](#externalinvestigationtype1 "Copy link to heading")ExternalInvestigationType1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_INVESTIGATION\_TYPE\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
UTAP

 | 

UnableToApply

 | 

A booked entry cannot be applied by the creditor.

 | 

Fedwire

 |
| 

CCNR

 | 

CreditorClaimNonReceipt

 | 

Creditor claims non-receipt of payment.

 | 

Fedwire

 |
| 

CONR

 | 

CreditorAgentClaimCoverNonReceipt

 | 

Creditor agent claims non-receipt of cover or settlement.

 | 

Fedwire

 |
| 

RQFI

 | 

RequestForInformation

 | 

Further information is required on a payment, entry, message or instruction.

 | 

Fedwire

 |
| 

PINC

 | 

PaymentInitiationNotConfirmed

 | 

Payment initiation has not been settled or confirmed.

 |  |
| 

RQVA

 | 

RequestValueDateAdjustment

 | 

Revaluation of an entry or value date adjustment is requested.

 | 

Fedwire

 |
| 

RQUF

 | 

UseOfFundsRequest

 | 

Use of funds on an entry is requested.

 |  |
| 

RQDA

 | 

DebitAuthorisationRequested

 | 

Debit authorisation on an entry is requested.

 | 

Fedwire

 |
| 

ACCT

 | 

AccountInvestigation

 | 

Investigation relating to an account.

 |  |
| 

RQCH

 | 

ChargesInvestigation

 | 

Investigation relating to charges that have been taken or are requested.

 | 

Fedwire

 |
| 

RIMF

 | 

IMFRequest

 | 

Request from International Monetary Fund.

 |  |
| 

OTHR

 | 

OtherRequestType

 | 

Other request type.

 | 

Fedwire

 |

#### [](#externalpaymentcancellationrejection1 "Copy link to heading")ExternalPaymentCancellationRejection1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_PAYMENT\_CANCELLATION\_REJECTION\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
AC04

 | 

ClosedAccountNumber

 | 

Account number specified has been closed on the receiver’s books.

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

ADAC

 | 

AwaitingDebitAuthorityFromCustomer

 | 

Reported when the cancellation request cannot be processed because customer has not yet provided the debit authority on its account.

 | 

Fedwire

 |
| 

AGNT

 | 

AgentDecision

 | 

Reported when the cancellation cannot be accepted because of an agent refuses to cancel.

 | 

Fedwire

 |
| 

AM04

 | 

InsufficientFunds

 | 

Amount of funds available to cover specified message amount is insufficient.

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

ARDT

 | 

AlreadyReturned

 | 

Cancellation not accepted as the transaction has already been returned.

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

ARPL

 | 

AwaitingReply

 | 

Reported when the cancellation request cannot be processed because no reply has been received yet from the receiver of the request message.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CUST

 | 

CustomerDecision

 | 

Reported when the cancellation cannot be accepted because of a customer decision (Creditor).

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

LEGL

 | 

LegalDecision

 | 

Reported when the cancellation cannot be accepted because of regulatory rules.

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

NARR

 | 

Narrative

 | 

Reason is provided as narrative information in the additional reason information.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

NOAS

 | 

NoAnswerFromCustomer

 | 

No response from beneficiary (to the cancellation request).

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

NOOR

 | 

NoOriginalTransactionReceived

 | 

Original transaction (subject to cancellation) never received.

 | 

SEPA Instant, SEPA Instant TIPS, FedNow, Fedwire

 |
| 

PTNA

 | 

PassedToTheNextAgent

 | 

Reported when the cancellation request cannot be accepted because the payment instruction has been passed to the next agent.

 | 

Fedwire

 |
| 

RQDA

 | 

RequestingDebitAuthority

 | 

Reported when authority is required by the Creditor to return the payment.

 | 

Fedwire

 |
| 

WSEQ

 | 

WrongSequence

 | 

Reported when the cancellation request cannot be processed because the sequence referred to in the request is not valid.

 |  |
| 

IDMN

 | 

CancellationIndemnityRequired

 | 

Complementing a Pending or Reject Status. Payment cancellation request cannot be accepted until an indemnity agreement is established.

 |  |
| 

ACLR

 | 

AlreadyCancelledRTP

 | 

Request-to-pay has already been cancelled.

 |  |
| 

AEXR

 | 

AlreadyExpiredRTP

 | 

Request-to-pay Expiry Date and Time has already passed.

 |  |
| 

ARFR

 | 

AlreadyRefusedRTP

 | 

Request-to-pay has already been refused by the Debtor.

 |  |
| 

ARJR

 | 

AlreadyRejectedRTP

 | 

Request-to-pay has already been rejected.

 |  |
| 

PATE

 | 

PaymentAlreadyTransmittedExecution

 | 

Payment related to the request-to-pay has already been transmitted for execution.

 |  |
| 

RR04

 | 

RegulatoryReason

 | 

Regulatory Reason.

 | 

SEPA Instant, FedNow

 |
| 

RCAR

 | 

RfCAlreadyRejected

 | 

Request for cancellation of the request-to-pay has already been rejected.

 |  |
| 

RCNR

 | 

RfCNeverReceived

 | 

Request for cancellation of the request-to-pay has never been received.

 |  |
| 

RCPR

 | 

RfCReceivedAndProcessed

 | 

Request for cancellation of the request-to-pay has already been received and processed.

 |  |
| 

URTP

 | 

UnknownRTP

 | 

Request-to-pay is unknown.

 |  |

#### [](#externalpaymentgroupstatus1 "Copy link to heading")ExternalPaymentGroupStatus1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_PAYMENT\_GROUP\_STATUS\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
ACCP

 | 

AcceptedCustomerProfile

 | 

Preceding check of technical validation was successful. Customer profile check was also successful.

 | 

SEPA Instant

 |
| 

ACCC

 | 

AcceptedSettlementCompletedCreditorAccount

 | 

Settlement on the creditor’s account has been completed.

 | 

FedNow

 |
| 

ACSC

 | 

AcceptedSettlementCompletedDebitorAccount

 | 

Settlement on the debtor’s account has been completed.  
  
Usage: This can be used by the first agent to report to the debtor that the transaction has been completed. Warning: this status is provided for transaction status reasons, not for financial information. It can only be used after bilateral agreement.

 | 

FedNow

 |
| 

ACSP

 | 

AcceptedSettlementInProcess

 | 

All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.

 |  |
| 

ACTC

 | 

AcceptedTechnicalValidation

 | 

Authentication and syntactical and semantical validation are successful

 |  |
| 

ACWC

 | 

AcceptedWithChange

 | 

Instruction is accepted but a change will be made, such as date or remittance not sent.

 | 

FedNow

 |
| 

PART

 | 

PartiallyAccepted

 | 

A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status.

 |  |
| 

PDNG

 | 

Pending

 | 

Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed.

 | 

FedNow

 |
| 

RCVD

 | 

Received

 | 

Payment initiation has been received by the receiving agent

 |  |
| 

RJCT

 | 

Rejected

 | 

Payment initiation or individual transaction included in the payment initiation has been rejected.

 | 

SEPA Instant, FedNow

 |

#### [](#externalpaymenttransactionstatus1 "Copy link to heading")ExternalPaymentTransactionStatus1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_PAYMENT\_TRANSACTION\_STATUS\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
ACCC

 | 

AcceptedSettlementCompletedCreditorAccount

 | 

Settlement on the creditor’s account has been completed.

 | 

FedNow

 |
| 

ACCP

 | 

AcceptedCustomerProfile

 | 

Preceding check of technical validation was successful. Customer profile check was also successful.

 | 

SEPA Instant

 |
| 

ACFC

 | 

AcceptedFundsChecked

 | 

Preceding check of technical validation and customer profile was successful and an automatic funds check was positive.

 |  |
| 

ACIS

 | 

AcceptedandChequeIssued

 | 

Payment instruction to issue a cheque has been accepted, and the cheque has been issued but not yet been deposited or cleared.

 |  |
| 

ACSC

 | 

AcceptedSettlementCompletedDebitorAccount

 | 

Settlement completed.  
  
Usage: This can be used by a Market Infrastructure reporting to Infrastructure Participant or an Account Servicer to Account Owner to report that the transaction account entry has been completed. Warning: this status is provided for transaction status reasons, not for financial information. It can only be used after bilateral agreement.

 | 

FedNow

 |
| 

ACSP

 | 

AcceptedSettlementInProcess

 | 

All preceding checks such as technical validation and customer profile were successful and therefore the payment instruction has been accepted for execution.

 |  |
| 

ACTC

 | 

AcceptedTechnicalValidation

 | 

Authentication and syntactical and semantical validation are successful

 |  |
| 

ACWC

 | 

AcceptedWithChange

 | 

Instruction is accepted but a change will be made, such as date or remittance not sent.

 |  |
| 

ACWP

 | 

AcceptedWithoutPosting

 | 

Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account.

 | 

FedNow

 |
| 

BLCK

 | 

Blocked

 | 

Payment transaction previously reported with status 'ACWP' is blocked, for example, funds will neither be posted to the Creditor’s account, nor be returned to the Debtor.

 | 

FedNow

 |
| 

CANC

 | 

Cancelled

 | 

Payment initiation has been successfully cancelled after having received a request for cancellation.  
  
Usage: Code to be used in the context of APIs only.

 |  |
| 

CPUC

 | 

CashPickedUpByCreditor

 | 

Cash has been picked up by the Creditor.

 |  |
| 

PATC

 | 

PartiallyAcceptedTechnicalCorrect

 | 

Payment initiation needs multiple authentications, where some but not yet all have been performed. Syntactical and semantical validations are successful.

 |  |
| 

PDNG

 | 

Pending

 | 

Payment instruction is pending. Further checks and status update will be performed.

 | 

FedNow

 |
| 

PRES

 | 

Presented

 | 

Request for Payment has been presented to the Debtor.

 |  |
| 

RCVD

 | 

Received

 | 

Payment instruction has been received.

 |  |
| 

RJCT

 | 

Rejected

 | 

Payment instruction has been rejected.

 | 

SEPA Instant, FedNow

 |
| 

ACPD

 | 

AcceptedClearingProcessed

 | 

Status of transaction released from the Debtor Agent and accepted by the clearing.

 |  |

#### [](#externalreturnreason1 "Copy link to heading")ExternalReturnReason1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_RETURN\_REASON\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
AC01

 | 

IncorrectAccountNumber

 | 

Format of the account number specified is not correct

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC03

 | 

InvalidCreditorAccountNumber

 | 

Wrong IBAN in SCT

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC04

 | 

ClosedAccountNumber

 | 

Account number specified has been closed on the bank of account’s books.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC06

 | 

BlockedAccount

 | 

Account specified is blocked, prohibiting posting of transactions against it.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC13

 | 

InvalidDebtorAccountType

 | 

Debtor account type is missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC14

 | 

InvalidAgent

 | 

An agent in the payment chain is invalid.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC15

 | 

AccountDetailsChanged

 | 

Account details have changed.

 |  |
| 

AC16

 | 

AccountInSequestration

 | 

Account is in sequestration.

 |  |
| 

AC17

 | 

AccountInLiquidation

 | 

Account is in liquidation.

 |  |
| 

AG01

 | 

TransactionForbidden

 | 

Transaction forbidden on this type of account (formerly NoAgreement)

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG02

 | 

InvalidBankOperationCode

 | 

Bank Operation code specified in the message is not valid for receiver

 |  |
| 

AM01

 | 

ZeroAmount

 | 

Specified message amount is equal to zero

 |  |
| 

AM02

 | 

NotAllowedAmount

 | 

Specific transaction/message amount is greater than allowed maximum

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM03

 | 

NotAllowedCurrency

 | 

Specified message amount is an non processable currency outside of existing agreement

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM04

 | 

InsufficientFunds

 | 

Amount of funds available to cover specified message amount is insufficient.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM05

 | 

Duplication

 | 

Duplication

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM06

 | 

TooLowAmount

 | 

Specified transaction amount is less than agreed minimum.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM07

 | 

BlockedAmount

 | 

Amount specified in message has been blocked by regulatory authorities.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM09

 | 

WrongAmount

 | 

Amount received is not the amount agreed or expected

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM10

 | 

InvalidControlSum

 | 

Sum of instructed amounts does not equal the control sum.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

ARDT

 | 

AlreadyReturnedTransaction

 | 

Already returned original SCT

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE01

 | 

InconsistenWithEndCustomer

 | 

Identification of end customer is not consistent with associated account number, organisation ID or private ID.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE04

 | 

MissingCreditorAddress

 | 

Specification of creditor’s address, which is required for payment, is missing/not correct (formerly IncorrectCreditorAddress).

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE05

 | 

UnrecognisedInitiatingParty

 | 

Party who initiated the message is not recognised by the end customer

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE06

 | 

UnknownEndCustomer

 | 

End customer specified is not known at associated Sort/National Bank Code or does no longer exist in the books

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE07

 | 

MissingDebtorAddress

 | 

Specification of debtor’s address, which is required for payment, is missing/not correct.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE08

 | 

BankError

 | 

Returned as a result of a bank error.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CN01

 | 

AuthorisationCancelled

 | 

Authorisation is cancelled.

 |  |
| 

CNOR

 | 

CreditorBankIsNotRegistered

 | 

Creditor bank is not registered under this BIC in the CSM

 | 

FedNow

 |
| 

CNPC

 | 

CashNotPickedUp

 | 

Cash not picked up by Creditor or cash could not be delivered to Creditor

 |  |
| 

CURR

 | 

IncorrectCurrency

 | 

Currency of the payment is incorrect

 |  |
| 

CUST

 | 

RequestedByCustomer

 | 

Cancellation requested by the Debtor

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

DNOR

 | 

DebtorBankIsNotRegistered

 | 

Debtor bank is not registered under this BIC in the CSM

 |  |
| 

DS28

 | 

ReturnForTechnicalReason

 | 

Return following technical problems resulting in erroneous transaction.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

DT01

 | 

InvalidDate

 | 

Invalid date (eg, wrong settlement date)

 |  |
| 

DT02

 | 

ChequeExpired

 | 

Cheque has been issued but not deposited and is considered expired.

 |  |
| 

ED01

 | 

CorrespondentBankNotPossible

 | 

Correspondent bank not possible.

 |  |
| 

ED03

 | 

BalanceInfoRequest

 | 

Balance of payments complementary info is requested

 |  |
| 

ED05

 | 

SettlementFailed

 | 

Settlement of the transaction has failed.

 |  |
| 

EMVL

 | 

EMVLiabilityShift

 | 

The card payment is fraudulent and was not processed with EMV technology for an EMV card.

 |  |
| 

ERIN

 | 

ERIOptionNotSupported

 | 

The Extended Remittance Information (ERI) option is not supported.

 |  |
| 

FF05

 | 

InvalidLocalInstrumentCode

 | 

Local Instrument code is missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

FOCR

 | 

FollowingCancellationRequest

 | 

Return following a cancellation request

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

FR01

 | 

Fraud

 | 

Returned as a result of fraud.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

FRTR

 | 

FinalResponseMandateCancelled

 | 

Final response/tracking is recalled as mandate is cancelled.

 |  |
| 

MD01

 | 

NoMandate

 | 

No Mandate

 |  |
| 

MD02

 | 

MissingMandatoryInformationInMandate

 | 

Mandate related information data required by the scheme is missing.

 |  |
| 

MD06

 | 

RefundRequestByEndCustomer

 | 

Return of funds requested by end customer

 |  |
| 

MD07

 | 

EndCustomerDeceased

 | 

End customer is deceased.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

MS02

 | 

NotSpecifiedReasonCustomerGenerated

 | 

Reason has not been specified by end customer

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

MS03

 | 

NotSpecifiedReasonAgentGenerated

 | 

Reason has not been specified by agent.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

NARR

 | 

Narrative

 | 

Reason is provided as narrative information in the additional reason information.

 | 

Fedwire

 |
| 

NOAS

 | 

NoAnswerFromCustomer

 | 

No response from Beneficiary

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

NOCM

 | 

NotCompliant

 | 

Customer account is not compliant with regulatory requirements, for example FICA (in South Africa) or any other regulatory requirements which render an account inactive for certain processing.

 |  |
| 

NOOR

 | 

NoOriginalTransactionReceived

 | 

Original SCT never received

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

PINL

 | 

PINLiabilityShift

 | 

The card payment is fraudulent (lost and stolen fraud) and was processed as EMV transaction without PIN verification.

 |  |
| 

RC01

 | 

BankIdentifierIncorrect

 | 

Bank Identifier code specified in the message has an incorrect format (formerly IncorrectFormatForRoutingCode).

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RC07

 | 

InvalidCreditorBICIdentifier

 | 

Incorrrect BIC of the beneficiary Bank in the SCTR

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RF01

 | 

NotUniqueTransactionReference

 | 

Transaction reference is not unique within the message.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RR01

 | 

MissingDebtorAccountOrIdentification

 | 

Specification of the debtor’s account or unique identification needed for reasons of regulatory requirements is insufficient or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RR02

 | 

MissingDebtorNameOrAddress

 | 

Specification of the debtor’s name and/or address needed for regulatory requirements is insufficient or missing.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RR03

 | 

MissingCreditorNameOrAddress

 | 

Specification of the creditor’s name and/or address needed for regulatory requirements is insufficient or missing.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RR04

 | 

RegulatoryReason

 | 

Regulatory Reason

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

RUTA

 | 

ReturnUponUnableToApply

 | 

Return following investigation request and no remediation possible.

 | 

Fedwire

 |
| 

SL01

 | 

SpecificServiceOfferedByDebtorAgent

 | 

Due to specific service offered by the Debtor Agent

 |  |
| 

SL02

 | 

SpecificServiceOfferedByCreditorAgent

 | 

Due to specific service offered by the Creditor Agent

 |  |
| 

SL11

 | 

CreditorNotOnWhitelistOfDebtor

 | 

Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its "Whitelist" (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account.

 |  |
| 

SL12

 | 

CreditorOnBlacklistOfDebtor

 | 

Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on his "Blacklist". In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account.

 |  |
| 

SL13

 | 

MaximumNumberOfDirectDebitTransactionsExceeded

 | 

Due to Maximum allowed Direct Debit Transactions per period service offered by the Debtor Agent.

 |  |
| 

SL14

 | 

MaximumDirectDebitTransactionAmountExceeded

 | 

Due to Maximum allowed Direct Debit Transaction amount service offered by the Debtor Agent.

 |  |
| 

SP01

 | 

PaymentStopped

 | 

Payment is stopped by account holder.

 |  |
| 

SP02

 | 

PreviouslyStopped

 | 

Previously stopped by means of a stop payment advise.

 |  |
| 

SVNR

 | 

ServiceNotRendered

 | 

The card payment is returned since a cash amount rendered was not correct or goods or a service was not rendered to the customer, e.g. in an e-commerce situation.

 |  |
| 

TM01

 | 

CutOffTime

 | 

Associated message was received after agreed processing cut-off time.

 |  |
| 

TRAC

 | 

RemovedFromTracking

 | 

Return following direct debit being removed from tracking process.

 |  |
| 

UPAY

 | 

UnduePayment

 | 

Payment is not justified.

 | 

Fedwire

 |
| 

AGNT

 | 

IncorrectAgent

 | 

Agent in the payment workflow is incorrect.

 |  |
| 

FF06

 | 

InvalidCategoryPurposeCode

 | 

Category Purpose code is missing or invalid.

 |  |
| 

RC08

 | 

InvalidClearingSystemMemberIdentifier

 | 

ClearingSystemMemberidentifier is invalid or missing. Generic usage if cannot specify between debit or credit account.

 |  |
| 

BE11

 | 

InvalidCreditorCountry

 | 

Creditor country code is missing or invalid.

 |  |
| 

BE17

 | 

InvalidCreditorIdentificationCode

 | 

Creditor or Ultimate Creditor identification code missing or invalid.

 |  |
| 

AC02

 | 

InvalidDebtorAccountNumber

 | 

Debtor account number invalid or missing.

 |  |
| 

RR11

 | 

InvalidDebtorAgentServiceIdentification

 | 

Invalid or missing identification of a bank proprietary service.

 |  |
| 

BE10

 | 

InvalidDebtorCountry

 | 

Debtor country code is missing or invalid.

 |  |
| 

BE16

 | 

InvalidDebtorIdentificationCode

 | 

Debtor or Ultimate Debtor identification code missing or invalid.

 |  |
| 

RC11

 | 

InvalidIntermediaryAgent

 | 

Intermediary Agent is invalid or missing.

 |  |
| 

RR12

 | 

InvalidPartyIdentification

 | 

Invalid or missing identification required within a particular country or payment type.

 |  |
| 

FF03

 | 

InvalidPaymentTypeInformation

 | 

Payment Type Information is missing or invalid. Generic usage if cannot specify Service Level or Local Instrument code.

 |  |
| 

FF07

 | 

InvalidPurpose

 | 

Purpose is missing or invalid.

 |  |
| 

FF04

 | 

InvalidServiceLevelCode

 | 

Service Level code is missing or invalid.

 |  |
| 

RR09

 | 

InvalidStructuredCreditorReference

 | 

Structured creditor reference invalid or missing.

 |  |
| 

RR05

 | 

RegulatoryInformationInvalid

 | 

Regulatory or Central Bank Reporting information missing, incomplete or invalid.

 |  |
| 

RR07

 | 

RemittanceInformationInvalid

 | 

Remittance information structure does not comply with rules for payment type.

 |  |
| 

RR08

 | 

RemittanceInformationTruncated

 | 

Remittance information truncated to comply with rules for payment type.

 |  |
| 

RR06

 | 

TaxInformationInvalid

 | 

Tax information missing, incomplete or invalid.

 |  |
| 

AG07

 | 

UnsuccesfulDirectDebit

 | 

Debtor account cannot be debited for a generic reason.  
  
Usage: Code value may be used in general purposes and as a replacement for AM04 if debtor bank does not reveal its customer’s insufficient funds for privacy reasons.

 |  |
| 

G004

 | 

CreditPendingFunds

 | 

In an FIToFI Customer Credit Transfer: Credit to the creditor’s account is pending, status Originator is waiting for funds provided via a cover. Update will follow from the Status Originator.

 |  |
| 

MD05

 | 

CollectionNotDue

 | 

Creditor or creditor’s agent should not have collected the direct debit.

 |  |
| 

AC07

 | 

ClosedCreditorAccountNumber

 | 

Creditor account number closed.

 |  |
| 

DC04

 | 

NoCustomerCreditTransferReceived

 | 

Return of Covering Settlement due to the underlying Credit Transfer details not being received.

 |  |
| 

RC04

 | 

InvalidCreditorBankIdentifier

 | 

Creditor bank identifier is invalid or missing.

 |  |
| 

DT04

 | 

FutureDateNotSupported

 | 

Future date not supported.

 |  |
| 

DUPL

 | 

DuplicatePayment

 | 

Payment is a duplicate of another payment.

 |  |
| 

RC03

 | 

InvalidDebtorBankIdentifier

 | 

Debtor bank identifier is invalid or missing.

 |  |

#### [](#externalstatusreason1 "Copy link to heading")ExternalStatusReason1

Represented within the Flows SDK as [ReasonCodeSet.REASON\_CODE\_SET\_EXTERNAL\_STATUS\_REASON\_1](/vault-payments/latest/EN/api/flows/flows_api/reasoncodes#ReasonCodeSet)

   
| Value | Name | Description and Usage | Supporting Payment Systems |
| --- | --- | --- | --- |
| 
AB01

 | 

AbortedClearingTimeout

 | 

Clearing process aborted due to timeout.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB02

 | 

AbortedClearingFatalError

 | 

Clearing process aborted due to a fatal error.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB03

 | 

AbortedSettlementTimeout

 | 

Settlement aborted due to timeout.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB04

 | 

AbortedSettlementFatalError

 | 

Settlement process aborted due to a fatal error.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB05

 | 

TimeoutCreditorAgent

 | 

Transaction stopped due to timeout at the Creditor Agent.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB06

 | 

TimeoutInstructedAgent

 | 

Transaction stopped due to timeout at the Instructed Agent.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB07

 | 

OfflineAgent

 | 

Agent of message is not online. Generic usage if it cannot be determined who exactly is not online.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB08

 | 

OfflineCreditorAgent

 | 

Creditor Agent is not online.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB09

 | 

ErrorCreditorAgent

 | 

Transaction stopped due to error at the Creditor Agent.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB10

 | 

ErrorInstructedAgent

 | 

Transaction stopped due to error at the Instructed Agent.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AB11

 | 

TimeoutDebtorAgent

 | 

Transaction stopped due to timeout at the Debtor Agent.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC01

 | 

IncorrectAccountNumber

 | 

Account number is invalid or missing.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC02

 | 

InvalidDebtorAccountNumber

 | 

Debtor account number invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC03

 | 

InvalidCreditorAccountNumber

 | 

Creditor account number invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC04

 | 

ClosedAccountNumber

 | 

Account number specified has been closed on the bank of account’s books.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC05

 | 

ClosedDebtorAccountNumber

 | 

Debtor account number closed

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC06

 | 

BlockedAccount

 | 

Account specified is blocked, prohibiting posting of transactions against it.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC07

 | 

ClosedCreditorAccountNumber

 | 

Creditor account number closed

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC08

 | 

InvalidBranchCode

 | 

Branch code is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC09

 | 

InvalidAccountCurrency

 | 

Account currency is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC10

 | 

InvalidDebtorAccountCurrency

 | 

Debtor account currency is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC11

 | 

InvalidCreditorAccountCurrency

 | 

Creditor account currency is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC12

 | 

InvalidAccountType

 | 

Account type missing or invalid. Generic usage if cannot specify between group and payment information levels.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC13

 | 

InvalidDebtorAccountType

 | 

Debtor account type missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC14

 | 

InvalidCreditorAccountType

 | 

Creditor account type missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AC15

 | 

AccountDetailsChanged

 | 

The account details for the counterparty have changed.

 |  |
| 

AC16

 | 

CardNumberInvalid

 | 

Credit or debit card number is invalid.

 |  |
| 

AG01

 | 

TransactionForbidden

 | 

Transaction forbidden on this type of account (formerly NoAgreement)

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG02

 | 

InvalidBankOperationCode

 | 

Bank Operation code specified in the message is not valid for receiver

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG03

 | 

TransactionNotSupported

 | 

Transaction type not supported/authorized on this account

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG04

 | 

InvalidAgentCountry

 | 

Agent country code is missing or invalid. Generic usage if cannot specify between group and payment information levels.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG05

 | 

InvalidDebtorAgentCountry

 | 

Debtor agent country code is missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG06

 | 

InvalidCreditorAgentCountry

 | 

Creditor agent country code is missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG07

 | 

UnsuccesfulDirectDebit

 | 

Debtor account cannot be debited for a generic reason. Code value may be used in general purposes and as a replacement for AM04 if debtor bank does not reveal its customer’s insufficient funds for privacy reasons.

 |  |
| 

AG08

 | 

InvalidAccessRights

 | 

Transaction failed due to invalid or missing user or access right

 |  |
| 

AG09

 | 

PaymentNotReceived

 | 

Original payment never received.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG10

 | 

AgentSuspended

 | 

Agent of message is suspended from the Real Time Payment system. Generic usage if it cannot be determined who exactly is suspended.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG11

 | 

CreditorAgentSuspended

 | 

Creditor Agent of message is suspended from the Real Time Payment system.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG12

 | 

NotAllowedBookTransfer

 | 

Payment orders made by transferring funds from one account to another at the same financial institution (bank or payment institution) are not allowed.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AG13

 | 

ForbiddenReturnPayment

 | 

Returned payments derived from previously returned transactions are not allowed.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AGNT

 | 

IncorrectAgent

 | 

Agent in the payment workflow is incorrect

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM01

 | 

ZeroAmount

 | 

Specified message amount is equal to zero

 |  |
| 

AM02

 | 

NotAllowedAmount

 | 

Specific transaction/message amount is greater than allowed maximum

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM03

 | 

NotAllowedCurrency

 | 

Specified message amount is an non processable currency outside of existing agreement

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM04

 | 

InsufficientFunds

 | 

Amount of funds available to cover specified message amount is insufficient.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM05

 | 

Duplication

 | 

Duplication

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM06

 | 

TooLowAmount

 | 

Specified transaction amount is less than agreed minimum.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM07

 | 

BlockedAmount

 | 

Amount specified in message has been blocked by regulatory authorities.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM09

 | 

WrongAmount

 | 

Amount received is not the amount agreed or expected

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM10

 | 

InvalidControlSum

 | 

Sum of instructed amounts does not equal the control sum.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM11

 | 

InvalidTransactionCurrency

 | 

Transaction currency is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM12

 | 

InvalidAmount

 | 

Amount is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM13

 | 

AmountExceedsClearingSystemLimit

 | 

Transaction amount exceeds limits set by clearing system

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM14

 | 

AmountExceedsAgreedLimit

 | 

Transaction amount exceeds limits agreed between bank and client

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM15

 | 

AmountBelowClearingSystemMinimum

 | 

Transaction amount below minimum set by clearing system

 | 

SEPA Instant, FedNow

 |
| 

AM16

 | 

InvalidGroupControlSum

 | 

Control Sum at the Group level is invalid

 | 

SEPA Instant, FedNow

 |
| 

AM17

 | 

InvalidPaymentInfoControlSum

 | 

Control Sum at the Payment Information level is invalid

 | 

SEPA Instant, FedNow

 |
| 

AM18

 | 

InvalidNumberOfTransactions

 | 

Number of transactions is invalid or missing. Generic usage if cannot specify between group and payment information levels.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM19

 | 

InvalidGroupNumberOfTransactions

 | 

Number of transactions at the Group level is invalid or missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM20

 | 

InvalidPaymentInfoNumberOfTransactions

 | 

Number of transactions at the Payment Information level is invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM21

 | 

LimitExceeded

 | 

Transaction amount exceeds limits agreed between bank and client.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

AM22

 | 

ZeroAmountNotApplied

 | 

Unable to apply zero amount to designated account. For example, where the rules of a service allow the use of zero amount payments, however the back-office system is unable to apply the funds to the account. If the rules of a service prohibit the use of zero amount payments, then code AM01 is used to report the error condition.

 |  |
| 

AM23

 | 

AmountExceedsSettlementLimit

 | 

Transaction amount exceeds settlement limit.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE01

 | 

InconsistenWithEndCustomer

 | 

Identification of end customer is not consistent with associated account number. (formerly CreditorConsistency).

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE04

 | 

MissingCreditorAddress

 | 

Specification of creditor’s address, which is required for payment, is missing/not correct (formerly IncorrectCreditorAddress).

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE05

 | 

UnrecognisedInitiatingParty

 | 

Party who initiated the message is not recognised by the end customer

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE06

 | 

UnknownEndCustomer

 | 

End customer specified is not known at associated Sort/National Bank Code or does no longer exist in the books.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE07

 | 

MissingDebtorAddress

 | 

Specification of debtor’s address, which is required for payment, is missing/not correct.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE08

 | 

MissingDebtorName

 | 

Debtor name is missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE09

 | 

InvalidCountry

 | 

Country code is missing or Invalid. Generic usage if cannot specifically identify debtor or creditor

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE10

 | 

InvalidDebtorCountry

 | 

Debtor country code is missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE11

 | 

InvalidCreditorCountry

 | 

Creditor country code is missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE12

 | 

InvalidCountryOfResidence

 | 

Country code of residence is missing or Invalid. Generic usage if cannot specifically identify debtor or creditor.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE13

 | 

InvalidDebtorCountryOfResidence

 | 

Country code of debtor’s residence is missing or Invalid.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE14

 | 

InvalidCreditorCountryOfResidence

 | 

Country code of creditor’s residence is missing or Invalid.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE15

 | 

InvalidIdentificationCode

 | 

Identification code missing or invalid. Generic usage if cannot specifically identify debtor or creditor.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE16

 | 

InvalidDebtorIdentificationCode

 | 

Debtor or Ultimate Debtor identification code missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE17

 | 

InvalidCreditorIdentificationCode

 | 

Creditor or Ultimate Creditor identification code missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE18

 | 

InvalidContactDetails

 | 

Contact details missing or invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE19

 | 

InvalidChargeBearerCode

 | 

Charge bearer code for transaction type is invalid

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE20

 | 

InvalidNameLength

 | 

Name length exceeds local rules for payment type.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE21

 | 

MissingName

 | 

Name missing or invalid. Generic usage if cannot specifically identify debtor or creditor.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE22

 | 

MissingCreditorName

 | 

Creditor name is missing

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

BE23

 | 

AccountProxyInvalid

 | 

Phone number or email address, or any other proxy, used as the account proxy is unknown or invalid.

 | 

SEPA Instant, FedNow

 |
| 

CERI

 | 

CheckERI

 | 

Credit transfer is not tagged as an Extended Remittance Information (ERI) transaction but contains ERI.

 |  |
| 

CH03

 | 

RequestedExecutionDateOrRequestedCollectionDateTooFarInFuture

 | 

Value in Requested Execution Date or Requested Collection Date is too far in the future

 |  |
| 

CH04

 | 

RequestedExecutionDateOrRequestedCollectionDateTooFarInPast

 | 

Value in Requested Execution Date or Requested Collection Date is too far in the past

 |  |
| 

CH07

 | 

ElementIsNotToBeUsedAtB-andC-Level

 | 

Element is not to be used at B- and C-Level

 |  |
| 

CH09

 | 

MandateChangesNotAllowed

 | 

Mandate changes are not allowed

 |  |
| 

CH10

 | 

InformationOnMandateChangesMissing

 | 

Information on mandate changes are missing

 |  |
| 

CH11

 | 

CreditorIdentifierIncorrect

 | 

Value in Creditor Identifier is incorrect

 |  |
| 

CH12

 | 

CreditorIdentifierNotUnambiguouslyAtTransaction-Level

 | 

Creditor Identifier is ambiguous at Transaction Level

 |  |
| 

CH13

 | 

OriginalDebtorAccountIsNotToBeUsed

 | 

Original Debtor Account is not to be used

 |  |
| 

CH14

 | 

OriginalDebtorAgentIsNotToBeUsed

 | 

Original Debtor Agent is not to be used

 |  |
| 

CH15

 | 

ElementContentIncludesMoreThan140Characters

 | 

Content Remittance Information/Structured includes more than 140 characters

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CH16

 | 

ElementContentFormallyIncorrect

 | 

Content is incorrect

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CH17

 | 

ElementNotAdmitted

 | 

Element is not allowed

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CH19

 | 

ValuesWillBeSetToNextTARGETday

 | 

Values in Interbank Settlement Date or Requested Collection Date will be set to the next TARGET day

 |  |
| 

CH20

 | 

DecimalPointsNotCompatibleWithCurrency

 | 

Number of decimal points not compatible with the currency

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CH21

 | 

RequiredCompulsoryElementMissing

 | 

Mandatory element is missing.

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CH22

 | 

COREandB2BwithinOnemessage

 | 

SDD CORE and B2B not permitted within one message.

 |  |
| 

CHQC

 | 

ChequeSettledOnCreditorAccount

 | 

Cheque has been presented in cheque clearing and settled on the creditor’s account.

 |  |
| 

CNOR

 | 

CreditorBankIsNotRegistered

 | 

Creditor bank is not registered under this BIC in the CSM

 |  |
| 

CURR

 | 

IncorrectCurrency

 | 

Currency of the payment is incorrect

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

CUST

 | 

RequestedByCustomer

 | 

Cancellation requested by the Debtor

 | 

SEPA Instant, FedNow, Fedwire

 |
| 

DNOR

 | 

DebtorBankIsNotRegistered

 | 

Debtor bank is not registered under this BIC in the CSM

 |  |
| 

DS01

 | 

ElectronicSignaturesCorrect

 | 

The electronic signature(s) is/are correct

 |  |
| 

DS02

 | 

OrderCancelled

 | 

An authorized user has cancelled the order

 |  |
| 

DS03

 | 

OrderNotCancelled

 | 

The user’s attempt to cancel the order was not successful.

 |  |
| 

DS04

 | 

OrderRejected

 | 

The order was rejected by the bank side (for reasons concerning content)

 |  |
| 

DS05

 | 

OrderForwardedForPostprocessing

 | 

The order was correct and could be forwarded for postprocessing

 |  |
| 

DS06

 | 

TransferOrder

 | 

The order was transferred to VEU

 |  |
| 

DS07

 | 

ProcessingOK

 | 

All actions concerning the order could be done by the EBICS bank server

 |  |
| 

DS08

 | 

DecompressionError

 | 

The decompression of the file was not successful

 |  |
| 

DS09

 | 

DecryptionError

 | 

The decryption of the file was not successful

 |  |
| 

DS0A

 | 

DataSignRequested

 | 

Data signature is required.

 |  |
| 

DS0B

 | 

UnknownDataSignFormat

 | 

Data signature for the format is not available or invalid.

 |  |
| 

DS0C

 | 

SignerCertificateRevoked

 | 

The signer certificate is revoked.

 |  |
| 

DS0D

 | 

SignerCertificateNotValid

 | 

The signer certificate is not valid (revoked or not active).

 |  |
| 

DS0E

 | 

IncorrectSignerCertificate

 | 

The signer certificate is not present.

 |  |
| 

DS0F

 | 

SignerCertificationAuthoritySignerNotValid

 | 

The authority of the signer certification sending the certificate is unknown.

 |  |
| 

DS0G

 | 

NotAllowedPayment

 | 

Signer is not allowed to sign this operation type.

 |  |
| 

DS0H

 | 

NotAllowedAccount

 | 

Signer is not allowed to sign for this account.

 |  |
| 

DS0K

 | 

NotAllowedNumberOfTransaction

 | 

The number of transaction is over the number allowed for this signer.

 |  |
| 

DS10

 | 

Signer1CertificateRevoked

 | 

The certificate is revoked for the first signer.

 |  |
| 

DS11

 | 

Signer1CertificateNotValid

 | 

The certificate is not valid (revoked or not active) for the first signer.

 |  |
| 

DS12

 | 

IncorrectSigner1Certificate

 | 

The certificate is not present for the first signer.

 |  |
| 

DS13

 | 

SignerCertificationAuthoritySigner1NotValid

 | 

The authority of signer certification sending the certificate is unknown for the first signer.

 |  |
| 

DS14

 | 

UserDoesNotExist

 | 

The user is unknown on the server

 |  |
| 

DS15

 | 

IdenticalSignatureFound

 | 

The same signature has already been sent to the bank

 |  |
| 

DS16

 | 

PublicKeyVersionIncorrect

 | 

The public key version is not correct. This code is returned when a customer sends signature files to the financial institution after conversion from an older program version (old ES format) to a new program version (new ES format) without having carried out re-initialisation with regard to a public key change.

 |  |
| 

DS17

 | 

DifferentOrderDataInSignatures

 | 

Order data and signatures don’t match.

 |  |
| 

DS18

 | 

RepeatOrder

 | 

File cannot be tested, the complete order has to be repeated. This code is returned in the event of a malfunction during the signature check, e.g. not enough storage space.

 |  |
| 

DS19

 | 

ElectronicSignatureRightsInsufficient

 | 

The user’s rights (concerning his signature) are insufficient to execute the order.

 |  |
| 

DS20

 | 

Signer2CertificateRevoked

 | 

The certificate is revoked for the second signer.

 |  |
| 

DS21

 | 

Signer2CertificateNotValid

 | 

The certificate is not valid (revoked or not active) for the second signer.

 |  |
| 

DS22

 | 

IncorrectSigner2Certificate

 | 

The certificate is not present for the second signer.

 |  |
| 

DS23

 | 

SignerCertificationAuthoritySigner2NotValid

 | 

The authority of signer certification sending the certificate is unknown for the second signer.

 |  |
| 

DS24

 | 

WaitingTimeExpired

 | 

Waiting time expired due to incomplete order

 |  |
| 

DS25

 | 

OrderFileDeleted

 | 

The order file was deleted by the bank server (for multiple reasons)

 |  |
| 

DS26

 | 

UserSignedMultipleTimes

 | 

The same user has signed multiple times

 |  |
| 

DS27

 | 

UserNotYetActivated

 | 

The user is not yet activated (technically)

 |  |
| 

DT01

 | 

InvalidDate

 | 

Invalid date (eg, wrong or missing settlement date)

 |  |
| 

DT02

 | 

InvalidCreationDate

 | 

Invalid creation date and time in Group Header (eg, historic date)

 |  |
| 

DT03

 | 

InvalidNonProcessingDate

 | 

Invalid non bank processing date (eg, weekend or local public holiday)

 |  |
| 

DT04

 | 

FutureDateNotSupported

 | 

Future date not supported

 |  |
| 

DT05

 | 

InvalidCutOffDate

 | 

Associated message, payment information block or transaction was received after agreed processing cut-off date, i.e., date in the past.

 |  |
| 

DT06

 | 

ExecutionDateChanged

 | 

Execution Date has been modified in order for transaction to be processed

 |  |
| 

DU01

 | 

DuplicateMessageID

 | 

Message Identification is not unique.

 |  |
| 

DU02

 | 

DuplicatePaymentInformationID

 | 

Payment Information Block is not unique.

 |  |
| 

DU03

 | 

DuplicateTransaction

 | 

Transaction is not unique.

 |  |
| 

DU04

 | 

DuplicateEndToEndID

 | 

End To End ID is not unique.

 |  |
| 

DU05

 | 

DuplicateInstructionID

 | 

Instruction ID is not unique.

 |  |
| 

DUPL

 | 

DuplicatePayment

 | 

Payment is a duplicate of another payment

 | 

Fedwire

 |
| 

ED01

 | 

CorrespondentBankNotPossible

 | 

Correspondent bank not possible.

 |  |
| 

ED03

 | 

BalanceInfoRequest

 | 

Balance of payments complementary info is requested

 |  |
| 

ED05

 | 

SettlementFailed

 | 

Settlement of the transaction has failed.

 |  |
| 

ED06

 | 

SettlementSystemNotAvailable

 | 

Interbank settlement system not available.

 |  |
| 

ERIN

 | 

ERIOptionNotSupported

 | 

Extended Remittance Information (ERI) option is not supported.

 |  |
| 

FF01

 | 

InvalidFileFormat

 | 

File Format incomplete or invalid

 |  |
| 

FF02

 | 

SyntaxError

 | 

Syntax error reason is provided as narrative information in the additional reason information.

 |  |
| 

FF03

 | 

InvalidPaymentTypeInformation

 | 

Payment Type Information is missing or invalid. Generic usage if cannot specify Service Level or Local Instrument code.

 |  |
| 

FF04

 | 

InvalidServiceLevelCode

 | 

Service Level code is missing or invalid

 |  |
| 

FF05

 | 

InvalidLocalInstrumentCode

 | 

Local Instrument code is missing or invalid

 |  |
| 

FF06

 | 

InvalidCategoryPurposeCode

 | 

Category Purpose code is missing or invalid

 |  |
| 

FF07

 | 

InvalidPurpose

 | 

Purpose is missing or invalid

 |  |
| 

FF08

 | 

InvalidEndToEndId

 | 

End to End Id missing or invalid

 |  |
| 

FF09

 | 

InvalidChequeNumber

 | 

Cheque number missing or invalid

 |  |
| 

FF10

 | 

BankSystemProcessingError

 | 

File or transaction cannot be processed due to technical issues at the bank side.

 |  |
| 

FF11

 | 

ClearingRequestAborted

 | 

Clearing request rejected due it being subject to an abort operation.

 |  |
| 

G000

 | 

PaymentTransferredAndTracked

 | 

In an FI To FI Customer Credit Transfer: The Status Originator transferred the payment to the next Agent or to a Market Infrastructure. The payment transfer is tracked. No further updates will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: The Status Originator performed the account booking and transferred the cover transaction to the next Reimbursement Agent or to a Market Infrastructure. The payment transfer is tracked. No further updates will follow from the Status Originator.

 |  |
| 

G001

 | 

PaymentTransferredAndNotTracked

 | 

In an FI To FI Customer Credit Transfer: The Status Originator transferred the payment to the next Agent or to a Market Infrastructure. The payment transfer is not tracked. No further updates will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: The Status Originator performed the account booking and transferred the cover transaction to the next Reimbursement Agent or to a Market Infrastructure. The payment transfer is not tracked. No further updates will follow from the Status Originator.

 |  |
| 

G002

 | 

CreditDebitNotConfirmed

 | 

In a FIToFI Customer Credit Transfer: Credit to the creditor’s account may not be confirmed same day. Update will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: Debit/credit to nostro account may not be confirmed same day or Financial Institution Credit Transfer may not be transferred same day. Update will follow from the Status Originator.

 |  |
| 

G003

 | 

CreditPendingDocuments

 | 

In a FIToFI Customer Credit Transfer: Credit to creditor’s account is pending receipt of required documents. The Status Originator has requested creditor to provide additional documentation. Update will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: Status Originator has requested a previous Agent to provide additional information/correct information. Update will follow from the Status Originator.

 |  |
| 

G004

 | 

CreditPendingFunds

 | 

In a FIToFI Customer Credit Transfer: Credit to the creditor’s account is pending, status Originator is waiting for funds provided via a cover. Update will follow from the Status Originator.

 |  |
| 

G005

 | 

DeliveredWithServiceLevel

 | 

Payment has been delivered to creditor agent with service level.

 |  |
| 

G006

 | 

DeliveredWIthoutServiceLevel

 | 

Payment has been delivered to creditor agent without service level.

 |  |
| 

ID01

 | 

CorrespondingOriginalFileStillNotSent

 | 

Signature file was sent to the bank but the corresponding original file has not been sent yet.

 |  |
| 

MD01

 | 

NoMandate

 | 

No Mandate

 |  |
| 

MD02

 | 

MissingMandatoryInformationInMandate

 | 

Mandate related information data required by the scheme is missing.

 |  |
| 

MD05

 | 

CollectionNotDue

 | 

Creditor or creditor’s agent should not have collected the direct debit.

 |  |
| 

MD06

 | 

RefundRequestByEndCustomer

 | 

Return of funds requested by end customer

 |  |
| 

MD07

 | 

EndCustomerDeceased

 | 

End customer is deceased.

 |  |
| 

MS02

 | 

NotSpecifiedReasonCustomerGenerated

 | 

Reason has not been specified by end customer

 |  |
| 

MS03

 | 

NotSpecifiedReasonAgentGenerated

 | 

Reason has not been specified by agent.

 |  |
| 

NARR

 | 

Narrative

 | 

Reason is provided as narrative information in the additional reason information.

 | 

Fedwire

 |
| 

NERI

 | 

NoERI

 | 

Credit transfer is tagged as an Extended Remittance Information (ERI) transaction but does not contain ERI.

 |  |
| 

RC01

 | 

BankIdentifierIncorrect

 | 

Bank identifier code specified in the message has an incorrect format (formerly IncorrectFormatForRoutingCode).

 |  |
| 

RC02

 | 

InvalidBankIdentifier

 | 

Bank identifier is invalid or missing. Generic usage if cannot specify between debit or credit account.

 |  |
| 

RC03

 | 

InvalidDebtorBankIdentifier

 | 

Debtor bank identifier is invalid or missing

 |  |
| 

RC04

 | 

InvalidCreditorBankIdentifier

 | 

Creditor bank identifier is invalid or missing

 |  |
| 

RC05

 | 

InvalidBICIdentifier

 | 

BIC identifier is invalid or missing. Generic usage if cannot specify between debit or credit account.

 |  |
| 

RC06

 | 

InvalidDebtorBICIdentifier

 | 

Debtor BIC identifier is invalid or missing

 |  |
| 

RC07

 | 

InvalidCreditorBICIdentifier

 | 

Creditor BIC identifier is invalid or missing

 |  |
| 

RC08

 | 

InvalidClearingSystemMemberIdentifier

 | 

ClearingSystemMemberidentifier is invalid or missing. Generic usage if cannot specify between debit or credit account

 |  |
| 

RC09

 | 

InvalidDebtorClearingSystemMemberIdentifier

 | 

Debtor ClearingSystemMember identifier is invalid or missing

 |  |
| 

RC10

 | 

InvalidCreditorClearingSystemMemberIdentifier

 | 

Creditor ClearingSystemMember identifier is invalid or missing

 |  |
| 

RC11

 | 

InvalidIntermediaryAgent

 | 

Intermediary Agent is invalid or missing

 |  |
| 

RC12

 | 

MissingCreditorSchemeId

 | 

Creditor Scheme Id is invalid or missing

 |  |
| 

RCON

 | 

RMessageConflict

 | 

Conflict with R-Message

 |  |
| 

RECI

 | 

ReceiverCustomerInformation

 | 

Further information regarding the intended recipient.

 |  |
| 

RF01

 | 

NotUniqueTransactionReference

 | 

Transaction reference is not unique within the message.

 |  |
| 

RR01

 | 

MissingDebtorAccountOrIdentification

 | 

Specification of the debtor’s account or unique identification needed for reasons of regulatory requirements is insufficient or missing

 |  |
| 

RR02

 | 

MissingDebtorNameOrAddress

 | 

Specification of the debtor’s name and/or address needed for regulatory requirements is insufficient or missing.

 |  |
| 

RR03

 | 

MissingCreditorNameOrAddress

 | 

Specification of the creditor’s name and/or address needed for regulatory requirements is insufficient or missing.

 |  |
| 

RR04

 | 

RegulatoryReason

 | 

Regulatory Reason

 |  |
| 

RR05

 | 

RegulatoryInformationInvalid

 | 

Regulatory or Central Bank Reporting information missing, incomplete or invalid.

 |  |
| 

RR06

 | 

TaxInformationInvalid

 | 

Tax information missing, incomplete or invalid.

 |  |
| 

RR07

 | 

RemittanceInformationInvalid

 | 

Remittance information structure does not comply with rules for payment type.

 |  |
| 

RR08

 | 

RemittanceInformationTruncated

 | 

Remittance information truncated to comply with rules for payment type.

 |  |
| 

RR09

 | 

InvalidStructuredCreditorReference

 | 

Structured creditor reference invalid or missing.

 |  |
| 

RR10

 | 

InvalidCharacterSet

 | 

Character set supplied not valid for the country and payment type.

 |  |
| 

RR11

 | 

InvalidDebtorAgentServiceID

 | 

Invalid or missing identification of a bank proprietary service.

 |  |
| 

RR12

 | 

InvalidPartyID

 | 

Invalid or missing identification required within a particular country or payment type.

 |  |
| 

S000

 | 

ValidRequestForCancellationAcknowledged

 | 

Request for Cancellation is acknowledged following validation.

 |  |
| 

S001

 | 

UETRFlaggedForCancellation

 | 

Unique End-to-end Transaction Reference (UETR) relating to a payment has been identified as being associated with a Request for Cancellation.

 |  |
| 

S002

 | 

NetworkStopOfUETR

 | 

Unique End-to-end Transaction Reference (UETR) relating to a payment has been prevent from traveling across a messaging network.

 |  |
| 

S003

 | 

RequestForCancellationForwarded

 | 

Request for Cancellation has been forwarded to the payment processing/last payment processing agent.

 |  |
| 

S004

 | 

RequestForCancellationDeliveryAcknowledgement

 | 

Request for Cancellation has been acknowledged as delivered to payment processing/last payment processing agent.

 |  |
| 

SL01

 | 

SpecificServiceOfferedByDebtorAgent

 | 

Due to specific service offered by the Debtor Agent.

 |  |
| 

SL02

 | 

SpecificServiceOfferedByCreditorAgent

 | 

Due to specific service offered by the Creditor Agent.

 |  |
| 

SL03

 | 

ServiceofClearingSystem

 | 

Due to a specific service offered by the clearing system.

 |  |
| 

SL11

 | 

CreditorNotOnWhitelistOfDebtor

 | 

Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its "Whitelist" (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account.

 |  |
| 

SL12

 | 

CreditorOnBlacklistOfDebtor

 | 

Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on his "Blacklist". In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account.

 |  |
| 

SL13

 | 

MaximumNumberOfDirectDebitTransactionsExceeded

 | 

Due to Maximum allowed Direct Debit Transactions per period service offered by the Debtor Agent.

 |  |
| 

SL14

 | 

MaximumDirectDebitTransactionAmountExceeded

 | 

Due to Maximum allowed Direct Debit Transaction amount service offered by the Debtor Agent.

 |  |
| 

TA01

 | 

TransmissonAborted

 | 

The transmission of the file was not successful – it had to be aborted (for technical reasons).

 |  |
| 

TD01

 | 

NoDataAvailable

 | 

There is no data available (for download)

 |  |
| 

TD02

 | 

FileNonReadable

 | 

The file cannot be read (e.g. unknown format)

 |  |
| 

TD03

 | 

IncorrectFileStructure

 | 

The file format is incomplete or invalid

 |  |
| 

TK01

 | 

TokenInvalid

 | 

Token is invalid.

 |  |
| 

TK02

 | 

SenderTokenNotFound

 | 

Token used for the sender does not exist.

 |  |
| 

TK03

 | 

ReceiverTokenNotFound

 | 

Token used for the receiver does not exist.

 |  |
| 

TK09

 | 

TokenMissing

 | 

Token required for request is missing.

 |  |
| 

TKCM

 | 

TokenCounterpartyMismatch

 | 

Token found with counterparty mismatch.

 |  |
| 

TKSG

 | 

TokenSingleUse

 | 

Single Use Token already used.

 |  |
| 

TKSP

 | 

TokenSuspended

 | 

Token found with suspended status.

 |  |
| 

TKVE

 | 

TokenValueLimitExceeded

 | 

Token found with value limit rule violation.

 |  |
| 

TKXP

 | 

TokenExpired

 | 

Token expired.

 |  |
| 

TM01

 | 

InvalidCutOffTime

 | 

Associated message, payment information block, or transaction was received after agreed processing cut-off time.

 |  |
| 

TS01

 | 

TransmissionSuccessful

 | 

The (technical) transmission of the file was successful.

 |  |
| 

TS04

 | 

TransferToSignByHand

 | 

The order was transferred to pass by accompanying note signed by hand.

 |  |
| 

CN01

 | 

AuthorisationCancelled

 | 

Authorisation is cancelled.

 |  |
| 

FOCR

 | 

FollowingCancellationRequest

 | 

Return following a cancellation request.

 |  |
| 

FR01

 | 

Fraud

 | 

Returned as a result of fraud.

 |  |
| 

NOCM

 | 

NotCompliantGeneric

 | 

Customer account is not compliant with regulatory requirements, for example FICA (in South Africa) or any other regulatory requirements which render an account inactive for certain processing.

 |  |
| 

NOAS

 | 

NoAnswerFromCustomer

 | 

No response from Beneficiary.

 |  |
| 

RUTA

 | 

ReturnUponUnableToApply

 | 

Return following investigation request and no remediation possible.

 |  |
| 

UPAY

 | 

UnduePayment

 | 

Payment is not justified.

 |  |
| 

ALAC

 | 

AlreadyAcceptedRTP

 | 

Request-to-pay has already been accepted by the Debtor.

 |  |
| 

AEXR

 | 

AlreadyExpiredRTP

 | 

Request-to-pay Expiry Date and Time has already passed.

 |  |
| 

ARFR

 | 

AlreadyRefusedRTP

 | 

Request-to-pay has already been refused by the Debtor.

 |  |
| 

ARJR

 | 

AlreadyRejectedRTP

 | 

Request-to-pay has already been rejected.

 |  |
| 

ATNS

 | 

AttachementsNotSupported

 | 

Attachments to the request-to-pay are not supported.

 |  |
| 

EDTR

 | 

ExpiryDateTimeReached

 | 

Expiry date time of the request-to-pay is already reached.

 |  |
| 

EDTL

 | 

ExpiryDateTooLong

 | 

Expiry date time of the request-to-pay is too far in the future.

 |  |
| 

FRAD

 | 

FraudulentOrigin

 | 

Cancellation requested following a transaction that was originated fraudulently. The use of the FraudulentOrigin code should be governed by jurisdictions.

 |  |
| 

IEDT

 | 

IncorrectExpiryDateTime

 | 

Expiry date time of the request-to-pay is incorrect.

 |  |
| 

IRNR

 | 

InitialRTPNeverReceived

 | 

No initial request-to-pay has been received.

 |  |
| 

NOAR

 | 

NonAgreedRTP

 | 

No existing agreement for receiving request-to-pay messages.

 |  |
| 

NOPG

 | 

NoPaymentGuarantee

 | 

Requested payment guarantee (by Creditor) related to a request-to-pay cannot be provided.

 |  |
| 

NRCH

 | 

PayerOrPayerRTPSPNotReachable

 | 

Recipient side of the request-to-pay (payer or its request-to-pay service provider) is not reachable.

 |  |
| 

RTNS

 | 

RTPNotSupportedForDebtor

 | 

Debtor does not support request-to-pay transactions.

 |  |
| 

REPR

 | 

RTPReceivedCanBeProcessed

 | 

Request-to-pay has been received and can be processed further.

 |  |
| 

SPII

 | 

RTPServiceProviderIdentifierIncorrect

 | 

Identifier of the request-to-pay service provider is incorrect.

 |  |
| 

PINS

 | 

TypeOfPaymentInstrumentNotSupported

 | 

Type of payment requested in the request-to-pay is not supported by the payer.

 |  |
| 

UCRD

 | 

UnknownCreditor

 | 

Unknown Creditor.

 |  |
| 

FF12

 | 

OriginalTransactionNotEligibleForRequestedReturn

 | 

Original payment is not eligible to be returned given its current status.

 |  |
| 

FF13

 | 

RequestForCancellationNotFound

 | 

No record of request for cancellation found.

 |  |
| 

DC02

 | 

SettlementNotReceived

 | 

Rejection of a payment due to covering FI settlement not being received.

 |  |
| 

APAR

 | 

AlreadyPaidRTP

 | 

Request To Pay has already been paid by the Debtor.

 |  |