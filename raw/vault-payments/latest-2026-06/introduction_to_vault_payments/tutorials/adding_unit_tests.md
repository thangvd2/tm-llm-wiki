---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/adding_unit_tests"
title: "Adding unit tests to an Instruction Flow"
scraped_at: "2026-06-17T15:45:29.772Z"
images: 0
---

# Adding unit tests to an Instruction Flow

In this tutorial we are going to add unit test coverage for the Instruction Flow Version written in the previous tutorial [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow).

Unit testing is the best way to test the business logic of the Instruction Flow with a very short feedback cycle. As Instruction Flows are represented as code, it is highly recommended to follow the usual software engineering practices and aim for an extensive coverage of both the happy paths and the edge cases.

Instruction Flows SDK provides the [test](/vault-payments/latest/EN/api/flows/flows_api/test) module which exposes dedicated functions and classes to enhance the local unit testing. It is worth highlighting that the flows should always be tested in the actual Vault Payments environment. Local unit testing results should resemble the results during the actual processing, but the only way to have this guaranteed is to test in the environment. Also, some parts of the flow may not be easily addressable by a unit test, especially around the external integrations or the asynchronous steps.

## [](#currency_check_step_tests "Copy link to heading")Currency check step tests

We can use the usual Python `unittest` package to write our unit tests. Let’s start with the first step of the flow - `currency_check`. This is a `BasicStep` which checks if the currency on the credit transfer `pacs.008` payload is allowed, in which case it will route to the `match_payment_instrument` step, otherwise it will mark the Instruction as rejected and immediately end the flow.

Test for the happy path processing will look like below:

It is a simple test which calls the resolve function of the step `currency_check_resolve`, passes an example Instruction and assesses that the expected step was returned as the next step.

We use a helper function `new_fi_to_fi_customer_credit_transfer` to prepare the Instruction object with the `pacs.008` payload with a pre-populated currency value. The helper function looks like this (and is used in the other tests as well):

We can add another test to ensure that if we pass an Instruction with a currency not included in the `ALLOWED_CURRENCIES` list (please note that in a real flow a Parameter would be a better way of implementing this) the resolve function rejects the Instruction:

Here we assert that the function returned `EndFlow` sentinel as the next step and that the `outcome` and `outcome_reason` fields were set as expected.

## [](#match_payment_instrument_step_tests "Copy link to heading")Match Payment Instrument step tests

The `match_payment_instrument` step represents a `MatchPaymentInstrument` step type. This step takes two functions: `query_func` and the usual `resolve_func`. First we want to test that the query function `match_query` generates the expected `MatchPaymentInstrumentQuery` based on the routing information available on the payload.

Here, we supply Instructions with different routing information and compare the returned Query with the expected one.

We should also test the resolve function `match_resolve`.

The first one tests the happy path when a Payment Instrument has been resolved, in which case we want to continue to check any Rules on the Payment Instrument. The second one tests the unhappy path when no Payment Instrument was resolved, in which case we set an appropriate `outcome_reason` on the Instruction, mark it as rejected, and end the flow.

## [](#check_rules_step_tests "Copy link to heading")Check Rules step tests

The `check_rules` step represents a `Rules` step type, this takes the usual `resolve_func`.

Below is the example of unit tests for the `check_rules` function:

The first test supplies an empty restrictions list, and asserts that we route it to the `account_selection_step`. The second test supplies a restriction and asserts that we set an appropriate `outcome_reason` on the Instruction, mark it as rejected, and end the flow.

## [](#account_selection_step_tests "Copy link to heading")Account selection step tests

The `account_selection` step represents an `AccountLink` step type, this takes the usual `resolve_func`.

Below is the example of unit tests for the `account_selection` function:

The first test supplies a result with an account link, asserts that we set it as the target account, and routes to the `core_postings_step`. The second test supplies an empty result, asserts that we set an appropriate `outcome_reason` on the Instruction, mark it as rejected, and end the flow.

## [](#core_postings_step_tests "Copy link to heading")Core Postings step tests

The last step of the flow developed in the tutorial is the `core_postings` step which represents the `VaultCorePostings` step type. This step type takes two functions: `postings_func` and the usual `resolve_func`. First we want to test that the postings function `core_postings_function` generates the expected PostingInstructionBatch.

Here we supply an example Instruction with a specific amount and currency set and compare the returned Posting Instruction with the expected one.

We should also test the resolve function `core_postings_resolve`. It is relatively simple, and in this implementation just checks the status of the `PostingInstructionBatch` returned from Vault Core Postings API. The response from Postings API is expected as the fourth argument to the resolve function. The unit tests for this function will look like below:

The first one tests the happy path when Vault Core accepts provided Postings, in which case we want to mark the Instruction as accepted and end the flow. The second one tests the unhappy path when Postings are rejected, in which case we set an appropriate `outcome_reason` on the Instruction, mark it as rejected and end the flow.

## [](#flow_validation_and_simulation "Copy link to heading")Flow validation and simulation

All the above unit tests focus on specific step functions which assert that the Instruction passed in as an argument is updated as expected and that the expected step is returned as the next step. This is a good way of testing the step functions, each unit test can focus on one specific scenario in isolation.

The unit testing framework provides two testing functions which can be used for additional testing. The first one is the `validate_flow` function which, while currently limited, ensures that all the fields on the `FlowVersion` object are set as expected. A standard example of this test type is below:

There is also the `simulate_flow` function which is more advanced and allows simulating the processing of the whole flow in a similar way to how it would be executed in a real Vault Payments environment (please note: this function only approximates the actual execution, and flows should always be tested in a real Vault Payments environment). The function takes multiple arguments which represent the state of the environment when executing the flow. This includes:

-   Matched Instructions
    
-   Payment Instruments, Account Links and Rules - which will be used during the simulation of the corresponding steps
    
-   Parameter Values - both global values and values owned by `Payment Instrument` are supported
    
-   Responses from integrations - it is possible to provide "mock" responses from external systems, like VaultCore Postings API, the server behind the HTTP step, etc.
    

In our case we provide `simulate_flow` with a "mocked" Payment Instrument response with a corresponding Account Link and a "mocked" response from VaultCore Postings. The test looks like this:

This is a happy path test where we assert on the list of executed steps (returned by the `simulate_flow` function) and on the final value of `outcome` and `processing_status` of the Instruction after the full flow has been executed.

We can also test an unhappy path, for example when `Payment Instrument` is not matched by the platform - we will just mock an empty response.

As expected, the `Instruction` has been marked as rejected and the `outcome_reason` has been set to "Payment Instrument does not exist". We can also see that the list of the processed steps consists of only two steps - `currency_check` and `match_resolve`, the other steps are not reached in this test.

## [](#complete_unit_testing_code "Copy link to heading")Complete unit testing code

The complete source code for the unit tests can be found below. The only thing which has to be modified is the `path.to.flow.module` which has to be replaced with the actual path to the flow Python file.

Then it can be executed with the usual Python command:

Where "flow\_test.py" would be the name of the file containing the tests.