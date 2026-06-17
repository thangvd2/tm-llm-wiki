---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow"
title: "Writing an Instruction Flow"
scraped_at: "2026-06-17T05:07:04.393Z"
images: 0
---

# Writing an Instruction Flow

This tutorial covers the basics of writing `Instruction Flows`. Prior reading of the [Concepts](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/) section is highly recommended. Similarly, Vault Payments provides a Python [SDK](/vault-payments/latest/EN/api/flows/) to help developing `Instruction Flows`. It is highly recommended to download and install the package before following this tutorial.

We are going to write an `Instruction Flow Version` for basic processing of an inbound FI to FI Customer Credit Transfer ISO20022 `pacs.008` message with the goal of making postings. This tutorial is meant to be accessible and generic hence we are not going to follow rules of any specific payment scheme, instead we want to demonstrate how `Instruction Flow Version`s are developed and represented in the code.

## [](#creating_a_flow_version "Copy link to heading")Creating a Flow Version

Each `Instruction Flow Version` needs to declare a global `flow` variable and assign an instance of [FlowVersion](/vault-payments/latest/EN/api/flows/flows_api#FlowVersion) class to it. This variable must be declared exactly once and is accessed by Vault Payments when processing `Instruction`s against this `Instruction Flow`. We also need to specify the major version of the `flows_api` package we intend to use by declaring the global variable `flows_api_version`. Below is the representation in the code:

In the above snippet `FlowVersion` is instantiated with three required parameters:

-   `flow_id` - which represents the ID of the parent [Instruction Flow](/vault-payments/latest/EN/api/payments_api#instructionflow) resource. Here we assume an `Instruction Flow` already exists in Vault Payments with the ID `example-flow`
    
-   `id` - which represents the unique ID of this `Instruction Flow Version`
    
-   `version` - which represents the [semantic version](https://semver.org) which should identify this flow version
    

## [](#adding_a_basic_step "Copy link to heading")Adding a basic step

Currently the flow is empty, we need to add steps to represent the processing logic. Let’s say we want to only allow `Instruction`s with an amount denominated in GBP and reject other currencies. Declaring the step will look like this:

We declared a `currency_check_step` variable of type [BasicStep](/vault-payments/latest/EN/api/flows/flows_api#BasicStep). The constructor of that class takes two arguments: `id` and `resolve_func`. `id` represents the unique identifier of the step, `resolve_func` is a function responsible for the processing logic of the step, in this case it is called `currency_check_resolve`. The resolve function for `BasicStep` takes two arguments: `instr` which represents the current `Instruction` being processed and `matched_instrs` which represents the list of matched Instructions (to learn more about matching please read [Instruction matching](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#instruction_matching) section).

The resolve function can read or modify any field on `instr`. It can also read fields from `matched_instrs`, but not modify them, as they have already completed the processing. As the `Instruction` includes a full ISO20022 payload (in our case `fi_to_fi_customer_credit_transfer`, representing a `pacs.008` message) we can easily access any information included in the message, like the currency in our example.

The resolve function should return the variable representing the next step of the flow or, if the processing should complete at the current step, the `EndFlow` sentinel. In our example, if the currency is set to "GBP", we want to progress to the `match_payment_instrument` step (to be implemented in the next section of this tutorial), otherwise we want to set the `outcome` on the `Instruction` to `OUTCOME_REJECTED` and end the processing.

We are using new types from the `flows_api` package hence we need to add them into our import statement (we will have to add more types in the later sections of this tutorial, this will be omitted going forward until the very last section).

The step needs to be included in the `FlowVersion` declaration. This is achieved by providing `steps` and `first_step` parameters and passing `currency_check_step` variable there:

At this point the flow consists of one step. We are going to extend the `steps` list with more steps.

## [](#adding_routing_steps "Copy link to heading")Adding routing steps

If the currency is set to "GBP", `match_payment_instrument_step` is returned as the next step from `currency_check_step`. We need to create a [MatchPaymentInstrumentStep](/vault-payments/latest/EN/api/flows/flows_api#MatchPaymentInstrumentStep) and assign to a step variable `match_payment_instrument_step`. This step will be used to match to a `Payment Instrument` based on the routing information retrieved from the \`Instruction’s ISO20022 payload. For this example inbound FIToFICustomerCreditTransfer we shall retrieve this information from [fi\_to\_fi\_customer\_credit\_transfer.message\_v08.credit\_transfer\_transaction\_information\[0\].creditor\_account.identification](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountIdentification4Choice) field on the Instruction. This will represent either an IBAN or a combination of the issuer identification and account identification (for example sort code and account number in the UK).

In the above code we ensure that the a Payment Instrument is matched. Vault Payments doesn’t automatically reject instructions with invalid routing information to allow handling that case inside of the flow (in some cases it may be required to make postings to a wash account instead of rejecting the `Instruction`).

If we successfully match a `Payment Instrument` we can now move on to checking any restrictions, `check_rules_step` is returned as the next step in this case. We need to create a [RulesStep](/vault-payments/latest/EN/api/flows/flows_api#RulesStep) and assign to a step variable `check_rules_step`. This step will evaluate any Rules or RuleSets present on the Payment Instrument, we can then check if there are any restrictions set.

If no restrictions are set we can move on and decide which account to direct the postings, `account_selection_step` is returned as the next step in this case. We need to create a [AccountLinkStep](/vault-payments/latest/EN/api/flows/flows_api#AccountLinkStep) and assign to a step variable `account_selection_step`. This step will be used to select to an `Account Link` from the Payment Instrument. Multiple account links maybe present on the Payment Instrument and they could be selected based on the Instruction such as the currency, here we select the first suitable Account Link.

Here if there is a suitable `Account Link` we populate the [TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/instruction#TargetAccount) field on the `Instruction`. This field is used later in a `VaultCorePostingStep` to issue postings (we will add this step in the next section of the tutorial).

We need to include the new steps in our `FlowVersion` object which should now be initiated as below:

## [](#adding_a_postings_step "Copy link to heading")Adding a Postings step

Finally, after passing the currency check and finding the routing information, we should be able to make postings. This can be achieved via [VaultCorePostingsStep](/vault-payments/latest/EN/api/flows/flows_api#VaultCorePostingsStep). This step has two functions associated with it:

-   `postings_func`: Create PostingInstructionBatch to be sent to Vault Core.
    
-   `resolve_func`: Standard resolve function with the result of the Postings as an additional argument.
    

The below snippet provides an example implementation of a Vault Core Postings Step:

`core_postings_function` returns a [PostingInstructionBatch](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatch) which Vault Payments will make against Vault Core. We make an `InboundHardSettlement` request to credit the customer account. The amount and currency are taken from the `fi_to_fi_customer_credit_transfer` ISO20022 payload, and the target account from `target_account.core_account_id` which was set on the `Instruction` via `set_active_account_link_as_default` in the `AccountLinkStep` which we added before. The internal account in this example is hard coded in the flow to "INTERNAL\_ACCOUNT".

Once the response is received from Vault Core, the `core_postings_resolve` function will be called. It will receive the response PostingInstructionBatch from the Postings API as the third parameter. Inside the function we examine the status from the response and, based on the value, set a different `outcome` on the `Instruction`. As this is the last step of our flow we return `EndFlow` from the resolve function.

We have now written a full Instruction Flow that is able to process a Credit Transfer Instruction, meaning we have reached the end of the tutorial. The full code which can be uploaded to Vault Payments via the `Create` endpoint for [Instruction Flow Version](/vault-payments/latest/EN/api/payments_api#instructionflowversion) resource is presented in the following section.

## [](#complete_flow_version_code "Copy link to heading")Complete Flow Version code

`Instruction Flow Version` source code developed in this tutorial: