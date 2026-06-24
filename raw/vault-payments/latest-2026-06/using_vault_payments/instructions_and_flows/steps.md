---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps"
title: "Steps"
scraped_at: "2026-06-17T15:46:00.069Z"
images: 0
---

# Steps

Steps dictate the operations performed within `Instruction Flows`. Steps are represented by a set of types defined in the flows\_api module from the [Vault Payments SDK](/vault-payments/latest/EN/api/flows/flows_api).

Each step can update `Instruction` and must return the next step to be executed or indicate end of the flow, this is achieved by defining `resolve` function for the step. Based on the type, some steps will perform additional operations before the resolve function is called. The below section describes available step types.

## [](#basic_step "Copy link to heading")Basic step

A Basic Step can be used when you do not require any of the operations performed by the other Step types, but you want to update the `Instruction` or conditionally branch to different steps depending on certain attributes of the `Instruction`.

Below is an example of an `Instruction Flow Version` with three `BasicStep`s where the first step branches execution based on the amount on the `Instruction` and the remaining two steps set the `outcome` value.

The functionality of `BasicStep` to update the `Instruction` and route to the next step is available to all other step types via their resolve function.

## [](#match_payment_instrument_step "Copy link to heading")Match Payment Instrument step

A Match Payment Instrument step can be used to match a [Payment Instrument](/vault-payments/latest/EN/using_vault_payments/routing#payment_instruments) to an Instruction. This will associate the Instruction with the matched Payment Instrument and retrieve relevent Parameter Values. The Payment Instrument can then be used in later steps including:

-   Account Link Step
    
-   Rules Step
    

The step takes a `query_func` which must return a `MatchPaymentInstrumentQuery`. Any field in the instruction can be used to construct the query. This will then match to a Payment Instrument with the provided `instrument_identifier` and `bank_identifier` routing information. Alternatively if the ID is already known the `payment_instrument_id` can be provided to the query directly.

chat\_bubble

When matching on routing information, `instrument_identifier` and `bank_identifier` are exactly matched. Partial matching is not supported. Only Active Payment Instruments will be matched.

After matching, Payment Instrument level Parameter Values for any `ExpectedParameters` will be retrieved, these values will override any Global values. These values will then be accessible during Flow processing, this includes this step’s `resolve_func` as well as any subsequent steps. In addition the `target_account.payment_instrument_id` field will be populated.

When two (or more) `MatchPaymentInstrument` steps are used in a Flow, after executing the second step, the values for Parameters defined by the Payment Instrument matched in the first step and not by the Payment Instrument matched in the second step will be reverted to the Global values.

Below is an example of a Match Payment Instrument Step:

## [](#account_link_step "Copy link to heading")Account Link step

chat\_bubble

A `MatchPaymentInstrumentStep` is required in a Flow before this step. Without this no Payment Instrument is associated with the Instruction and so no Account Links can be retrieved during Flow processing.

An Account Link Step can be used to select any [Account Links](/vault-payments/latest/EN/using_vault_payments/routing#account_links) that are associated with the matched [Payment Instrument](/vault-payments/latest/EN/using_vault_payments/routing#payment_instruments).

The Account Links can be then used in subsequent steps to make Postings to the relevant accounts. Account Links information should be stored on the Target Account of the instruction.

The following information from an Account Link is available for use within the Step:

-   Account Link ID
    
-   Core ID
    
-   Core Account ID
    
-   Account Link Status
    
-   Alias
    
-   The outcome of any Account Link Selection Rules
    

chat\_bubble

The `default_account_link` is present under the alias `"default"` and is always last in the provided result.

Below are examples of Account Link Steps:

Simple Example

Advanced Example

The following helper functions are provided:

-   `set_active_account_link_as_default` - Finds the first active Account Link which was not rejected by its Account Link Selection rule, if applicable, in the Account Link Result, and then sets this on the Target Account in the Instruction. It returns False if there is no such Account Link.
    
-   `set_account_link` - Sets the given Account Link on the Target Account on the Instruction, or adds it to the extra Account Links stored on the Target Account if a name/key is supplied.
    
-   `AccountLinkResult.filter` - The returned `AccountLinkResult` object has a filter method which can be used to filter Account Links that match the provided values. This could be used to find only Active Account Links or search for a specific alias such as "EUR".
    

## [](#rules_step "Copy link to heading")Rules step

chat\_bubble

A `MatchPaymentInstrumentStep` is required in a Flow before this step. Without this no Payment Instrument is associated with the Instruction and so no Rules can be evaluated during Flow processing.

A Rules Step can be used to evaluate any Rules or RuleSets that are applied to the matched [Payment Instrument](/vault-payments/latest/EN/using_vault_payments/routing#payment_instruments).

This step evaluates all Basic Rules, and Rules that are part of a RuleSet. The `Instruction` will be updated with any changes specified in the rules. In addition the `target_account.restrictions` field will be populated.

Below is an example of a Rules Step:

## [](#http_step "Copy link to heading")HTTP step

An HTTP Step can be used when you require an `Instruction Flow` to make an HTTP call to a server outside of Vault Payments; for example, to call your existing fraud check provider, or a server that will provide data enrichment to your `Instruction`. JSON is currently the only supported content type.

[HTTPStep](/vault-payments/latest/EN/api/flows/flows_api#HTTPStep) takes below arguments:

-   `integration_id` which should be the ID of an already created HTTP [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations).
    
-   `request_func` which should return an [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest) object which configures the HTTP request made to the referenced integration.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the response body of the HTTP call via an [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse) object as the fourth argument.
    
-   `on_error_func` optional function which will be run if the [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations) returns a non-transient error or if Vault Payments exhausts retrying transient errors. The function has access to the response body of the HTTP call via an [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse) object as the fourth argument. Refer to [`Integrations`](/vault-payments/latest/EN/using_vault_payments/integrations) for definitions of transient and non-transient errors. If not provided, the step and associated `Instruction` will be marked as `ERRORED` instead.
    

The response data from an HTTP Step will only be available to the resolve function of the Step. For subsequent Steps (or `Rules`) to access the response data, this Step must persist the data on the Instruction.

Below is an example of adding an `HTTPStep` to the flow:

In this flow we have "mock\_fraud\_step" of type `HTTPStep`. The step uses the Integration with `id` "mock-framl-integration". The HTTPRequest is generated in "mock\_fraud\_request" function. The response from the Integration will be passed into "mock\_fraud\_resolve" function as a fourth argument. The step also handles any errors from the server graciously by adding an `Issue` to the `Instruction` in the "mock\_fraud\_on\_error" function.

## [](#http_async_step "Copy link to heading")HTTP async step

An HTTP Async Step is very similar to HTTP Step. The main difference is that the response is delivered asynchronously. For HTTP Step, Vault Payments calls an Integration of type "HTTP" and receives a response synchronously. For HTTP Async Step, Vault Payments calls an Integration of type "HTTP Async", passes a callback token in the request, and is expected to receive a "200 OK" HTTP response code. Later on, the Integration is expected to call Vault Payments back via `/api/v1/integrations:callback/{token}` [endpoint](/vault-payments/latest/EN/api/payments_api#callback), providing the response payload along with the token included in the initial request. This call can happen a few seconds, minutes or days after the initial request was made to the Integration.

[HTTPAsyncStep](/vault-payments/latest/EN/api/flows/flows_api#HTTPAsyncStep) takes below arguments:

-   `integration_id` which should be the ID of an already created [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations) of type HTTPAsync.
    
-   `request_func` which should return an [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest) object which configures the HTTP request made to the referenced integration. Importantly, this function will be provided with the callback `token` as the fourth argument and is expected to place it somewhere in the request, so that it can be used later by the Integration to call Vault Payments back.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the response body of the HTTP call via an [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse) object as the fourth argument.
    
-   `on_error_func` optional function which will be run if the [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations) returns a non-transient error for the initial request or if Vault Payments exhausts retrying transient errors for the initial request. The function has access to the response body of the initial HTTP call via an [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse) object as the fourth argument. Refer to [`Integrations`](/vault-payments/latest/EN/using_vault_payments/integrations) for definitions of transient and non-transient errors. If not provided, the step and associated `Instruction` will be marked as `ERRORED` instead.
    
-   `calculate_deadline_func` which should return a `datetime` object representing the step’s deadline.
    
-   `deadline_exceeded_func` which should return the next step or indicate end of the flow. Through this function you can define the behaviour of the `Instruction Flow` if the callback is not made within the deadline. It is executed when the step’s deadline is exceeded.
    

The response data from an HTTP Async Step will only be available to the resolve function of the Step. For subsequent Steps (or `Rules`) to access the response data, this Step must persist the data on the Instruction.

Below is an example of adding an `HTTPAsyncStep` to the flow. The step has the same semantics as the previous example for `HTTPStep`, but now the response is expected to be delivered asynchronously:

The main difference between this step and the step defined in the section above is that the "mock\_fraud\_request" function takes an extra argument representing the callback `token`. This token is included in the returned HTTPRequest object in the "json" field. The Integration is supposed to read this token, store it, and then use when calling Vault Payments back. There are also two extra functions added to support the asynchronous capability of this step: "mock\_fraud\_calc\_deadline" is used to calculate the deadline for the callback - if the response from the Integration is not delivered within the deadline, Vault Payments will execute "mock\_fraud\_deadline\_exceeded" function.

## [](#vault_core_postings_step "Copy link to heading")Vault Core Postings step

A Vault Core Postings step can be used when you require an `Instruction Flow` to send a Posting Instruction to a Vault Core instance.

[VaultCorePostingsStep](/vault-payments/latest/EN/api/flows/flows_api#VaultCorePostingsStep) takes three functions as arguments:

-   `postings_func` which should return a [PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch) to send to the core banking system
    
-   `resolve_func` which should return the next step or indicate end of the flow. As an additional argument, the function receives the result of the Postings processing of type [PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch)
    
-   `on_error_func` optional function which will be run if the [`Vault Core Integration`](/vault-payments/latest/EN/using_vault_payments/integrations) returns a non-transient error or if Vault Payments exhausts retrying transient errors. If not provided, the step and associated `Instruction` will be marked as `ERRORED` instead.
    

Below is an example of adding a `VaultCorePostingsStep` to the flow:

The `PostingInstructionBatch` returned from `postings_func` map to Postings in [Vault Core Postings API](/vault-core/latest/EN/api/postings_api/). Below is the list of available posting instruction types:

-   [Transfer](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Transfer): Used to transfer funds between two accounts in Vault Core.
    
-   [Inbound hard settlement](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#InboundHardSettlement): Used to apply funds to an account that have not been previously authorised.
    
-   [Outbound hard settlement](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#OutboundHardSettlement): Used to withdraw funds from an account without previously authorising them.
    
-   [Inbound authorisation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#InboundAuthorisation): Used to authorise incoming funds.
    
-   [Outbound authorisation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#OutboundAuthorisation): Used to authorise outgoing funds.
    
-   [Authorisation adjustment](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#AuthorisationAdjustment): Used to adjust an authorisation amount that was previously ringfenced by an Outbound Authorisation or Inbound Authorisation.
    
-   [Release](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Release): Used to release previously authorised funds.
    
-   [Settlement](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Settlement): Used to clear funds pre-authorised by either an Outbound Authorisation or an Inbound Authorisation.
    

## [](#initiate_instruction_step "Copy link to heading")Initiate Instruction step

The completion of a payment journey in Vault Payments typically involves orchestrating multiple `Instructions`. In some payment journeys, processing an `Instruction` may require initiating and processing a new `Instruction` to complete the overall payment. The **Initiate Instruction Step** enables flow writers to implement this, allowing Vault Payments to generate a new financial instruction when required. Example use cases include:

-   Initiating a FIToFIPaymentStatusReport (pacs.002) while processing a FIToFICustomerCreditTransfer (pacs.008) to respond to an incoming instant payment.
    
-   Initiating a FItoFICustomerCreditTransfer (pacs.008) for submission to a payment gateway when handling a CustomerCreditTransferInitiation (pain.001) request from a customer.
    
-   Initiating a PaymentReturn (pacs.004) as a positive response to a FIToFIPaymentCancellationRequest (camt.056) investigation.
    

Conceptually, the **Initiate Instruction Step** functions as an internal equivalent of calling the [`api/v1/instructions:initiate POST`](/vault-payments/latest/EN/api/payments_api#Instructions-Instruction) endpoint within an Instruction Flow. Rather than using JSON or XML, flow writers define the Instruction to initiate using the Flows SDK Python object. Vault Payments then queues the Instruction for processing. Upon successful initiation, an `InitiateInstructionStepResult` object is returned, confirming the assigned ID. Please note that receiving an `InitiateInstructionStepResult` guarantees only that the new Instruction has been queued; it does not imply that the Instruction has begun or completed processing.

A common pattern when using the **Initiate Instruction Step** is to initiate an Instruction with the same `correlation_id` as the currently processed Instruction. In such cases, Vault Payments ensures that only one Instruction with a given `correlation_id` is processed at a time. These Instructions are processed sequentially - each Instruction within the correlation group is processed in order of its `create_timestamp`, with each reaching a final processing status before the next begins.

chat\_bubble

The behaviour of the **Initiate Instruction Step** closely resembles the `api/v1/instructions:initiate POST` endpoint, with a few small differences. Users of this step do not need to specify a `create_request_id`, as Vault Payments automatically generates this value. Additionally, Vault Payments permits a maximum depth of 5 for scenarios where an initiated Instruction triggers further Instructions.

If an unexpected error occurs during the initiation process, the initiating Instruction will transition to an `ERRORED` processing status. It is recommended to [repair](/vault-payments/latest/EN/api/payments_api#_payments_v1_instructions_RepairInstructionResponse_RepairInstruction) any Instructions in this state. Note that queued Instructions within the same correlation group will not begin processing while an Instruction remains in an `ERRORED` status.

[InitiateInstructionStep](/vault-payments/latest/EN/api/flows/flows_api#InitiateInstructionStep) takes two functions as arguments:

-   `initiate_instruction_func` A function that should return an [`Instruction`](/vault-payments/latest/EN/api/flows/flows_api/instruction/) object, representing the new Instruction to be initiated in Vault Payments.
    
-   `resolve_func` A function called upon successful initiation of the new Instruction. This function should return the next step in the flow or indicate the end of the flow.
    

Below is an example of adding a `InitiateInstructionStep` into a flow:

## [](#manual_decision_step "Copy link to heading")Manual decision step

A Manual Decision Step can be used when you require a [`Manual Decision`](/vault-payments/latest/EN/using_vault_payments/manual_decisions/) within an `Instruction Flow`. It allows you to pause an `Instruction Flow` until a decision is made and subsequently act upon that decision. This step is asynchronous, so the `processing_status` of the `Instruction` will be set to `PROCESSING_STATUS_WAITING` until a decision is made or the step’s deadline is reached.

[`ManualDecisionStep`](/vault-payments/latest/EN/api/flows/flows_api#ManualDecisionStep) takes four functions as arguments:

-   `manual_decision_func` which should return a [`ManualDecision`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#ManualDecision), containing a list of [`Decisions`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#Decision), which act as the possible manual decisions that can be made.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the chosen decision via a [`DecisionResult`](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#DecisionResult) object as the fourth parameter.
    
-   `calculate_deadline_func` which should return a `datetime` object representing the step’s deadline.
    
-   `deadline_exceeded_func` which should return the next step or indicate end of the flow. Through this function you can define the behaviour of the `Instruction Flow` if the `ManualDecision` is not made within the deadline. It is executed when the step’s deadline is exceeded.
    

Below is an example of adding a `ManualDecisionStep` into a flow:

## [](#period_calculation_step "Copy link to heading")Period calculation step

A Period Calculation step can be used when you require an `Instruction Flow` to calculate a [Calendar](/vault-payments/latest/EN/using_vault_payments/scheduling#calendar) period, for example to know when the next scheme submission window is.

[PeriodCalculationStep](/vault-payments/latest/EN/api/flows/flows_api#PeriodCalculationStep) takes two functions as arguments:

-   `request_func` which should return a [CalculateCalendarPeriodRequest](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalculateCalendarPeriodRequest) object which configures the period calculation request with the ID of an already created [Calendar](/vault-payments/latest/EN/api/payments_api#calendar), a reference date or time and an offset.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the result of the period calculation operation via a [CalendarPeriod](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalendarPeriod) object as the fourth argument.
    

The result of the Period Calculation Step will only be available to the resolve function of the Step. For subsequent Steps to access the response data, for example to pause the `Instruction` until the period is reached or to reschedule the `Instruction` if the period is in the past, this Step must persist the data on the Instruction. Below is an example of adding `PeriodCalculationStep` into a flow:

## [](#schedule_instruction_step "Copy link to heading")Schedule Instruction step

A Schedule Instruction step can be used when you require an `Instruction Flow` to pause an `Instruction` until a [Calendar](/vault-payments/latest/EN/using_vault_payments/scheduling#calendar) period begins. This step is asynchronous so the `processing_status` of the `Instruction` will be set to `PROCESSING_STATUS_WAITING` until the period begins or the step’s deadline is reached.

[ScheduleInstructionStep](/vault-payments/latest/EN/api/flows/flows_api#ScheduleInstructionStep) takes four functions as arguments:

-   `schedule_instruction_func` which should return a [CalendarPeriod](/vault-payments/latest/EN/api/flows/flows_api/calendars#CalendarPeriod) which must have been calculated through a previous [PeriodCalculationStep](/vault-payments/latest/EN/api/flows/flows_api#PeriodCalculationStep). The step will pause the `Instruction`, and automatically resume it at the period’s `period_range.from`.
    
-   `resolve_func` which should return the next step or indicate end of the flow.
    
-   `calculate_deadline_func` which should return a `datetime` object representing the step’s deadline. The value should be the period’s `period_range.to`.
    
-   `deadline_exceeded_func` which should return the next step or indicate end of the flow. Through this function you can define the behaviour of the `Instruction Flow` if the `Instruction` does not automatically resume processing within the deadline. It is executed when the step’s deadline is exceeded or if the calculated period’s `period_range.from` is in the past.
    

Below is an example of adding `ScheduleInstructionStep` into a flow:

## [](#scheme_submission_step "Copy link to heading")Scheme submission step

A Scheme Submission Step can be used when you require an `Instruction Flow` to submit the ISO 20022 message contained in the `Instruction` to a server outside of Vault Payments. For example, to submit an ISO 20022 message to a payment scheme, or an intermediary server which will enrich the message before forwarding it to a payment scheme.

[SchemeSubmissionStep](/vault-payments/latest/EN/api/flows/flows_api#SchemeSubmissionStep) takes below arguments:

-   `integration_id` which should be the ID of an already created Scheme Submission [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations).
    
-   `resolve_func` which is called on a successful scheme submission, and should return the next step or indicate end of the flow.
    
-   `on_error_func` optional function which will be run if the [`Integration`](/vault-payments/latest/EN/using_vault_payments/integrations) returns a non-transient error or if Vault Payments exhausts retrying transient errors. Refer to [`Integrations`](/vault-payments/latest/EN/using_vault_payments/integrations) for definitions of transient and non-transient errors. If not provided, the step and associated `Instruction` will be marked as `ERRORED` instead.
    

Below is an example of adding `SchemeSubmissionStep` into a flow:

## [](#membership_directory_step "Copy link to heading")Membership Directory step

A Membership Directory step can be used when you need to make a [`Membership Directory Query`](/vault-payments/latest/EN/using_vault_payments/membership_directories/) within an `Instruction Flow`. It allows you to check whether a payment’s target destination is an appropriate participant under the given directory file, or make further decisions based on additional information exposed by the specific directory format. You may even make a query against multiple directories at the same time, and make a scheme routing decision based on the response.

[MembershipDirectoryStep](/vault-payments/latest/EN/api/flows/flows_api#MembershipDirectoryStep) takes two functions as arguments:

-   `query_func` which should return a [MembershipDirectoryQuery](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#MembershipDirectoryQuery) object which configures the directory query request by providing the IDs of desired [Membership Directories](/vault-payments/latest/EN/api/payments_api#membershipdirectory) along with the target `member_ids` to check, these may be "BICs" for example. The Vault `Membership Directory Service` would then check each provided `member_ids` against every provided `membership_directory_ids`.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the result of the `Membership Directory Query` operation via a map keyed by the Membership Directory ID.
    

Below is an example of adding a `MembershipDirectoryStep` into a flow:

## [](#instruction_file_step "Copy link to heading")Instruction File step

chat\_bubble

This functionality is currently in BETA and unavailable in Production Environments. Thought Machine may introduce breaking changes before it reaches a stable release and its interface is subject to change.

The Instruction File Step can be used to create files and batches of instructions. `Instructions` are assigned to `Instruction Batches` and `Instruction Files` based on specified rules. This step is asynchronous so the processing status of the `Instruction` will be set to `PROCESSING_STATUS_WAITING` until the `Instruction Batch` is assigned to reach status `COMPLETED` or `ERRORED`.

[InstructionFileStep](/vault-payments/latest/EN/api/flows/flows_api#InstructionFileStep) takes five functions as arguments:

-   `instruction_batch_group_func` is used to group instructions into batches. The returned string is used to identifying `Instruction Batch` the `Instruction` belongs to.
    
-   `instruction_file_group_func` is used to group instructions into files. The returned string is used to identifying `Instruction File` the `Instruction` belongs to.
    
-   `calculate_deadline_func` is used to calculate the deadline of the step. The returned object represents the step’s deadline.
    
-   `deadline_exceeded_func` which should end the flow if the deadline is passed.
    
-   `on_error_func` optional function which will be run if the `Instruction` returns a non-transient or if Vault Payments exhausts retrying transient errors. If not provided, the step and associated `Instruction` will be marked as `ERRORED` instead.
    

Below is an example of adding an `InstructionFileStep` into a flow:

## [](#mandate_steps "Copy link to heading")Mandate steps

The Flows API offers two Mandate Steps to manage the lifecycle of a Mandate:

-   CreateMandateStep
    
-   ManageMandatesStep
    

The Create Mandate Step can be used when you need to [create a Mandate](/vault-payments/latest/EN/using_vault_payments/mandates/) within an `Instruction Flow`.

CreateMandateStep takes two arguments:

-   `request_func` which should return a [Mandate](/vault-payments/latest/EN/api/payments_api#mandates) object which defines the Mandate that you want to create.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the created Mandate.
    

Below is an example of adding a `CreateMandateStep` to a flow. As it is creating a Mandate on the creditor’s side, `MANDATE_SIDE_CREDIT`, then the `routing_information` of the `creditor_party_details` will be populated from the supplied `payment_instrument_id`. For simplicity, it is assumed that the Instruction has already been populated with the relevant Payment Instrument ID. Generally, a [MatchPaymentInstrumentStep](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#match_payment_instrument_step) should be used to verify and match the creditor’s details against a Payment Instrument.

The Manage Mandates Step in an `Instruction Flow` allows you to resolve stored Mandates from the information contained in an ISO20022 payload, and then optionally update them.

ManageMandatesStep takes three arguments:

-   `query_func` which should return a MatchMandatesQuery object that takes arguments required to lookup the existing Mandate in the system.
    
-   `update_func` can be optionally provided, which takes the matched Mandates, and can update them by mutating their fields.
    
-   `resolve_func` which should return the next step or indicate end of the flow. The function has access to the matched Mandates, after the updates (if any).
    

MatchMandatesQuery takes `scheme_mandate_id` which is the identifier of the mandate under the scheme, and `scheme_creditor_id` which is the identifier of the creditor under the scheme. For some schemes, this forms a globally unique identifier of a Mandate. However, for others (e.g. BACS Direct Debit), the debtor’s routing information is also required to form the globally unique identifier; this can be supplied in `debtor_instrument_identifier` and `debtor_bank_identifier`. When the routing information is also supplied, then the supplied `scheme_mandate_id` can be a superstring of the `scheme_mandate_id` of the stored Mandates, i.e. all stored Mandates whose `scheme_mandate_id` is a prefix of the supplied value will be matched. Alternatively, if the ID of the Mandate is known, then it can be supplied directly in `mandate_id`.

Below is an example of adding a `ManageMandatesStep` into a flow:

## [](#sequence_step "Copy link to heading")Sequence step

A Sequence step can be used to generate a monotonically increasing number for a given sequence key. Such a number may be needed when generating message identifiers for Instructions going out to external Payment Systems. As an example, Fedwire requires IMAD (Input Message Accountability Data) identifier to contain a 6-digit sequence number that must increment with each message submitted on a given day. For that purpose, a sequence key formatted as `YYYYMMDD` which identifies a specific day could be used to generate the sequence number.

Below is an example of adding a `SequenceStep` into a flow:

## [](#payee_steps "Copy link to heading")Payee steps

The Flows API offers Payee Steps to manage the lifecycle of a Payee during an `Instruction Flow`:

-   `ManagePayeesStep`
    
-   `CreatePayeeStep`
    

**ManagePayeesStep**

The `ManagePayeesStep` in an `Instruction Flow` allows you to resolve stored Payees based on routing information, and optionally update them, such as when processing notification messages about changes to a beneficiary’s routing details.

`ManagePayeesStep` takes three arguments:

-   `query_func` which should return a `MatchPayeesQuery` object that takes the arguments required to look up existing Payees.
    
-   `update_func` (optional) which mutates an `ImmutableList[Payee]` in-place to apply modifications to the matched Payees. It does not return anything.
    
-   `resolve_func` which should return the next step or indicate the end of the flow. The function receives a `ManagePayeesResult` containing the matched Payees, reflecting any updates applied.
    

**MatchPayeesQuery**

When matching on attributes within a `MatchPayeesQuery`, the following four fields are exactly matched:

-   `owner_id`
    
-   `owner_type`
    
-   `routing_information.bank_identifier`
    
-   `routing_information.instrument_identifier`
    

chat\_bubble

Partial matching is not supported. Only Active Payees will be matched.

Below is an example of adding a `ManagePayeesStep` to a flow for handling an NOC update:

**CreatePayeeStep**

The `CreatePayeeStep` can be used when you need to [create a Payee](/vault-payments/latest/EN/using_vault_payments/payees) within an `Instruction Flow`.

`CreatePayeeStep` takes two arguments:

-   `request_func` which should return a [Payee](/vault-payments/latest/EN/api/payments_api#payees) object which defines the Payee that you want to create.
    
-   `resolve_func` which should return the next step or indicate the end of the flow. The function has access to the created Payee.
    

Below is an example of adding a `CreatePayeeStep` to a flow: