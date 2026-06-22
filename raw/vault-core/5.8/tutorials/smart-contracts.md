---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/tutorials/smart-contracts"
title: "Smart Contracts"
scraped_at: "2026-06-17T15:42:14.513Z"
images: 0
---

# Smart Contracts

This section will introduce you to the concept of Smart Contracts in Vault Core and teach you the basics of writing a Smart Contract.

This is designed for Vault Core version 4.6 and later, using Contracts Language API versions 4.0.0 and above.

## [](#introduction "Copy link to heading")Introduction

A Smart Contract is the representation of the financial logic of a given bank Product. Written in a safe subset of Python, it allows you to deterministically describe the behaviour of a Product for all events of its lifecycle.

For this tutorial, we are going to implement a simplified Current Account product (contract) with an overdraft facility. This product will have the following properties:

-   Allow the customer to spend money
    
-   Allow the customer to enter into an overdraft
    
-   Charge the customer a fee when they withdraw past their overdraft limit
    
-   Pay a small amount of interest on positive balances
    

## [](#before_you_start "Copy link to heading")Before you start

chat\_bubble

Check the [Contracts Language version 4 Release Notes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#release_notes) to confirm and install the version of Python compatible with your version of Vault Core.

This tutorial assumes you have a working knowledge of Python. You should be familiar with writing functions, how [unit tests](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#unit_testing_contracts) work, and our [Best practice guidelines](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines).

### [](#create_a_python_virtual_environment_recommended "Copy link to heading")Create a Python virtual environment (recommended)

We recommend that you run this tutorial inside a [Python virtual environment](https://docs.python.org/3/library/venv.html) or a Docker container.

To create a virtual environment in a UNIX/Linux system:

These commands create a Python virtual environment in a folder called `contracts-basic-tutorial` under your home directory and activate it, with a folder called `contracts-basic-tutorial` as your root folder for this exercise.

### [](#install_the_contracts_sdk "Copy link to heading")Install the Contracts SDK

To develop Contracts using Contracts Language API 4.0, you need to [install](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#installation) the `contracts_api` Python package. Download the zipped [Contracts SDK package](/vault-core/5-8/EN/resources/smart_contracts/contracts_sdk.zip), unzip the file, then install the `contracts_api` package:

As of Smart Contracts Language API 4.0.0, Smart Contracts are valid Python code. This means that any classes, methods, or decorators used in the Contract must be imported into the file. See [contracts-api package](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#installation) for more information.

### [](#install_dateutil_and_requests_python_packages "Copy link to heading")Install dateutil and requests Python packages

See [dateutil package](https://pypi.org/project/python-dateutil/) and [requests package](https://pypi.org/project/requests/).

### [](#copy_the_helper_scripts_to_your_exercise_folder "Copy link to heading")Copy the helper scripts to your exercise folder

Download the following files to your exercise folder `contracts-basic-tutorial`:

-   [simple\_tutorial\_tests.py](/vault-core/5-8/EN/resources/smart_contracts/simple_tutorial_tests.py) - Use this to test the functionality of the Smart Contract that we are writing.
    
    -   To allow your tests to access the Simulation API of Vault Core, modify `simple_tutorial_tests.py` and ensure that you have set `core_api_url` and `auth_token` to the [correct values](/vault-core/5-8/EN/api/overview#authentication). To create a personalised auth\_token, see the [Core API](/vault-core/5-8/EN/api/core_api#ServiceAccount) or [Operations Dashboard](/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#organisation_admin) documentation on creating a Service Account.
        
    
-   [vault\_caller.py](/vault-core/5-8/EN/resources/smart_contracts/vault_caller.py) - Allows our tests to talk to a real instance of Vault Core. For full documentation for this script, see [Helper Script](/vault-core/5-8/EN/reference/contracts/contract_simulation#helper_script).
    

chat\_bubble

`simple_tutorial_tests.py` contains different unit tests for each exercise in this tutorial. Each unit test is designed to run with the exercise they are included with. As you progress through this tutorial, you add more features to the contract, each requiring more setup for unit tests. As a result, when you start an exercise, unit tests from earlier exercises no longer work.

## [](#exercise_one_building_a_minimal_smart_contract "Copy link to heading")Exercise One - Building a minimal Smart Contract

In this exercise, we build the smallest possible Smart Contract and run a test against it.

### [](#background "Copy link to heading")Background

For a file to be a valid Smart Contract, it must contain the appropriate metadata:

-   API Version
    
-   Contract Version
    

### [](#exercise "Copy link to heading")Exercise

#### [](#test "Copy link to heading")Test

Use the following command to run your first test:

The test will fail initially, but after you implement the solution it will pass.

#### [](#implement "Copy link to heading")Implement

1.  Create a new file called `tutorial_contract.py`. We use this file in all of our exercises to define different hooks and functions for our Smart Contract.
    
2.  Enter the following in the new file:
    

chat\_bubble

Although as a [Best Practice](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines#imports), wild card imports (such as `from contracts_api import *`) are strongly discouraged, it is used in this tutorial for simplicity.

3.  Run the test again to check your Contract works as expected. When you have successfully completed the exercise, the test generates an output similar to this:
    

#### [](#what_happened "Copy link to heading")What happened?

We created an empty Contract that contains only version information. When an account is created against this Contract in Vault Core, it works by default and will accept postings.

Our test, `test_e01_unchallenged_deposit`, uses the Simulation API to test the contract. The test:

-   Sends an "inbound hard settlement posting instruction" against a simulated account for this Contract in the request
    
-   Expects to see the posting instruction in the response, as it contains a single entry under the `posting_instruction_batches` key
    

## [](#exercise_two_understanding_hooks "Copy link to heading")Exercise Two - Understanding hooks

In this exercise, we restrict our product to accept only GBP postings.

### [](#background_2 "Copy link to heading")Background

Smart Contracts are based around the concept of [hooks](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/overview#smart_contract_hooks). Hooks are [Python functions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#hooks) that are called by Vault Core during specific events in the product lifecycle. This exercise demonstrates how you can use a [pre-posting hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_posting_hook) to validate a transaction before it is accepted into Vault Core’s ledger.

To check that a [posting](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#posting) is valid before altering the balance of an account, we have to add checks into the `pre_posting_hook`. This allows us to reject the posting if it does not meet the necessary criteria defined for this account in the Smart Contract’s business logic.

### [](#exercise_2 "Copy link to heading")Exercise

#### [](#test_2 "Copy link to heading")Test

Use the following command to test your solution. This unit test attempts a deposit in a currency that is not supported by this Contract, and asserts that the posting was rejected.

#### [](#implement_2 "Copy link to heading")Implement

1.  Use the `pre_posting_hook` to check whether the denomination of all [postings submitted](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#PrePostingHookArguments) is in `'GBP'`. If it is not in `'GBP'`, [reject](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookresult) the posting with the reason code WRONG\_DENOMINATION.
    
2.  Use the following code snippet as a starting point:
    

When you have completed the exercise, the test should pass.

### [](#solution "Copy link to heading")Solution

In our solution, we iterate over the list of postings passed into our hook, and return a rejection if any are not in GBP.

## [](#exercise_three_understanding_parameters_and_hook_requirements "Copy link to heading")Exercise Three - Understanding Parameters and hook requirements

In this exercise, we change the denomination restriction to be configurable instead of being hardcoded.

### [](#background_3 "Copy link to heading")Background

In the above example we hardcoded the denomination to be 'GBP', however we always recommend making this value configurable. We can do this by passing the denomination value into the Contract as a [Parameter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#parameters).

Any hook can access the current value of a parameter by defining parameters as one of its [requirements](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#requirements). Once defined as a requirement, the [timeseries of parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#ParameterTimeseries) used by this Smart Contract will be accessible using the Vault Core object’s [`get_parameter_timeseries`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries) function.

### [](#exercise_3 "Copy link to heading")Exercise

#### [](#test_3 "Copy link to heading")Test

Use the following command to test your solution. This test simulates the Contract with a template parameter called `denomination` with the value 'GBP' and tries to deposit a EUR-denominated amount into the account:

#### [](#implement_3 "Copy link to heading")Implement

1.  Define a product-level [parameter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parameter) to hold the denomination for our Smart Contract to accept.
    
2.  Fetch the defined parameter’s latest available value in the Smart Contract code to dynamically test that the parameter is correct.
    

Use the following code snippet as a starting point to complete the exercise:

When you have completed the exercise, the test should pass.

#### [](#solution_2 "Copy link to heading")Solution

## [](#exercise_four_understanding_hook_directives_and_data_fetchers "Copy link to heading")Exercise Four - Understanding hook directives and data fetchers

In this exercise, we charge a fee if the account balance exceeds an overdraft limit.

### [](#background_4 "Copy link to heading")Background

Every [hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/) has its own return type, which allows it to communicate the results of the business logic to the rest of Vault Core. Most of these return types can contain directives, allowing the hooks to affect the state of Vault Core by [creating postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#PostingInstructionsDirective), [sending notifications](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#AccountNotificationDirective), or [modifying schedules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#UpdateAccountEventTypeDirective). The pre-posting hook, however, is considered to be on the [hot path](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#the_hot_path), meaning its execution must be as fast as possible. For this reason, its return values are limited to [rejections](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection) and do not contain directives.

Apart from parameters, Smart Contracts typically need to access other data, such as [balances and postings](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#financial_concepts). [Optimised data fetching](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#about_optimised_data_fetching) allows us to precisely define what data is needed, helping keep the business logic compact and improving performance by ensuring that the contract only fetches the data that is required for contract execution.

The [post-posting hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_posting_hook) allows us to perform actions based on business logic after a posting’s execution. Data fetchers allow us to define which [time intervals](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#BalancesIntervalFetcher) or [single points in time](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#BalancesObservationFetcher) are of interest to the business logic. In this exercise, we add a check to the post-posting hook to charge a customer a fee if they go over their overdraft limit. We need to fetch the committed balance at the [time of the posting](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#PostPostingHookArguments) in order to correctly evaluate whether the account is overdrawn after the posting.

### [](#exercise_4 "Copy link to heading")Exercise

#### [](#test_4 "Copy link to heading")Test

Test your solution using the following command. This test creates a withdrawal event and then confirms that the appropriate fee has been applied.

#### [](#implement_4 "Copy link to heading")Implement

1.  Use the parameters `overdraft_limit` and `overdraft_fee`, defined below, to make our product logic configurable.
    
2.  Implement the `post_posting_hook` to do the following:
    
    -   [Fetch the balances](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation) of the account at the [effective time](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#defineddatetime) of hook execution by defining a data\_fetcher
        
    -   Check if the net [COMMITTED](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#phase) balance, (at account address [DEFAULT\_ADDRESS](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/fixed_values#default_address) and of asset type [DEFAULT\_ASSET](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/fixed_values#default_asset) is greater than the allowed overdraft.
        
    
3.  Charge a fee if the balance exceeds the allowed overdraft, using the provided helper functions.
    

Add the following to your Contract:

Make sure that you import any classes or constants you use in your code.

Use the following code snippet as a starting point to complete the exercise:

When you have completed the exercise, the test should pass.

### [](#solution_3 "Copy link to heading")Solution

## [](#exercise_five_understanding_scheduled_events_and_balance_addresses "Copy link to heading")Exercise Five - Understanding scheduled events and balance addresses

In this example, we accrue a daily interest to the account.

### [](#background_5 "Copy link to heading")Background

Smart Contracts use a concept called [balance coordinates](/vault-core/5-8/EN/reference/balances#balances_and_the_accounting_model). This allows the Smart Contract writer to separate the money in a customer’s account into distinct "pots". You can use these in many ways, for example in Smart Contracts that accrue interest. Since interest accrual often happens on a different schedule from interest application, Smart Contract writers often put accrued interest into its own separate address. That way, when interest is applied, the amount of accrued interest is known and saved outside the main pot, known as the [DEFAULT\_ADDRESS](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/fixed_values#default_address), of the account.

In Smart Contracts, time-based tasks, either repeated or one-off, that need to be performed throughout the lifecycle of an account are referred to as [scheduled events](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent). Typical examples of scheduled events are daily interest accrual, monthly interest payment, or an annual account fee.

To implement a scheduled event:

1.  Define the [event type](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) in the contract metadata.
    
2.  Define its [execution schedule](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent) in the [activation\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#activation_hook)
    
3.  Define the actions to be carried out in the [scheduled\_event\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#scheduled_event_hook). You also need to specify the `event_type` as an argument in the [@requires](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#requires) or [@fetch\_account\_data](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) decorator in the `scheduled_event_hook`.
    

### [](#exercise_5 "Copy link to heading")Exercise

#### [](#test_5 "Copy link to heading")Test

Test your solution with the following command. This will check that interest is being accrued according to the execution schedule we have defined.

#### [](#implement_5 "Copy link to heading")Implement

1.  Complete the function `_get_interest_accrual_postings` below. This function instructs the transfer of the accrual amount from the `"ACCRUED_OUTGOING"` address of `"internal_account"`, to the `"ACCRUED_INCOMING"` address of the customer’s account, which you can reference using `vault.account_id`.
    
2.  Define a scheduled event `"ACCRUE_INTEREST"` that runs every day, calling `_get_interest_accrual_postings`.
    

Add the following to your Contract:

When you have completed the exercise, the test should pass.

### [](#solution_4 "Copy link to heading")Solution

## [](#exercise_six_understanding_instance_level_parameters "Copy link to heading")Exercise Six - Understanding instance-level parameters

In this exercise, we implement the application of interest once a month, with a payment day that the customer can define.

### [](#background_6 "Copy link to heading")Background

So far, we have only made use of `TEMPLATE`\-level [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#parameters) in this Contract. These parameters hold the same value across all accounts for a given product. `GLOBAL` parameters, whose value is fixed for all products and accounts in the bank, are defined outside of Contracts so we will not be dealing with them here. Next, we look at `INSTANCE` parameters, as they allow us to tailor their value for each account individually.

### [](#exercise_6 "Copy link to heading")Exercise

#### [](#test_6 "Copy link to heading")Test

Use the following command to test your solution. This will check that the correct amount of interest is paid to the customer’s account on their preferred interest payment day.

#### [](#implement_6 "Copy link to heading")Implement

1.  Define an [optional parameter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#OptionalShape), `"interest_payment_day"`, to hold the [customer](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#parameterupdatepermission)'s chosen [day of the month](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#NumberShape) on which to receive interest.
    
2.  Define an event type, `"APPLY_INTEREST"` that runs every month on "interest\_payment\_day" if it is set. This event\_type should instruct two postings:
    
    -   One posting to apply the interest to the customer account by instructing the movement of funds from the ACCRUED\_INCOMING address to the DEFAULT address of the customer’s account
        
    -   One posting to apply the corresponding accounting movement from the DEFAULT address to the ACCRUED\_OUTGOING address of the internal account
        
        chat\_bubble
        
        Make sure that you set the `"APPLY_INTEREST"` event to run after the `"ACCRUE_INTEREST"` event that you defined in the previous exercise, and that you set the time to run the `"APPLY_INTEREST"` event so that it occurs within the time window of the test (in the case of this exercise, so that it occurs before 01:00:00).
        
    

Add the following to your Contract:

### [](#solution_5 "Copy link to heading")Solution

## [](#full_contract "Copy link to heading")Full Contract

Following all the steps, this is the full Contract we have created. Please note, this Contract won’t pass all of the unit tests as they are designed to work with the step they are called in.