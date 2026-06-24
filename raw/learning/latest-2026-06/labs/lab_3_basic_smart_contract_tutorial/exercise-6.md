---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-6"
title: "Exercise 6 - Using Expected Parameters"
scraped_at: "2026-06-17T15:57:55.676Z"
images: 0
---

# Exercise 6 - Using Expected Parameters

## [](#using_parameters_in_vault_core_5 "Copy link to heading")Using Parameters in Vault Core 5

From Vault Core 5.0 onwards, [Parameters have been redesigned](/vault-core/latest/EN/vault_v5/parameters) so that they can be applied using any required hierarchies, and associated to any tranches of Accounts. Within a Smart Contract, these are referenced via the `expected_parameters` syntax, to leverage the functionality offered by the Parameters resource.

**Where possible, Expected Parameters should now be used in place of `GLOBAL` and `INSTANCE` parameters.**

In this exercise, you will be adding a new expected parameter: `opening_bonus`. The value of the opening bonus will be used to credit the customer’s account upon activation. What a lucky customer!

## [](#parameter_and_parametervalue_resources "Copy link to heading")Parameter and ParameterValue Resources

The [Parameter](/vault-core/latest/EN/api/core_api#parameter) resource is used to create the types of Parameter you want to use, and enforce any constraints on its values.

The [ParameterValue](/vault-core/latest/EN/api/core_api#parametervalue) resource is used to create or update the values of the Parameter.

Once a Parameter resource is created, it is ready to be referenced from with a Smart Contract. Here is an example using a monthly fixed fee.

**The expected parameters do *not* need to be defined within the `parameters` metadata object (as we saw for Template parameters), since they are defined as a resource that is separate from the Smart Contract. This gives them the power to be shared across products.**

## [](#reading_expected_parameters "Copy link to heading")Reading Expected Parameters

The most performant method of fetching parameter values from a Smart Contract hook is with data fetchers.

For a fetcher to be used within a hook, it must be referenced within the hook’s `@fetch_account_data` decorator. This decorator will pre-fetch data needed in the hook and is essential when attempting to reference the value of this parameter from that hook’s logic.

chat\_bubble

`"live_parameters"` appears within `data_fetchers` and then when needed for each hook decorator.

For the Smart Contract hook to then get the actual parameter value, it can do so via [vault.get\_parameters\_observation()](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameters_observation):

chat\_bubble

`"monthly_fixed_fee"` appears within `expected_parameters` and then when needed in the hook.

### [](#advanced_knowledge_on_fetchers "Copy link to heading")Advanced Knowledge on Fetchers

Using `@fetch_account_data(parameters=` + `vault.get_parameters_observation()` is an alternate and more performant approach than using `@requires(parameters=True)`  
`vault.get_parameter_timeseries()`, which was shown in the previous exercise. However, they are only available when used for Expected Parameters, and not for Template.

## [](#exercise "Copy link to heading")Exercise

### [](#declaring_and_fetching_an_opening_bonus_parameter "Copy link to heading")Declaring and Fetching an Opening Bonus Parameter

Let’s assume the Parameter has already been created with these API calls.

-   Parameter creation sent to: `POST /v1/parameters`:
    

-   Parameter Value creation sent to: `POST /v1/parameter-values`:
    

This sets us up with our `opening_bonus` expected parameter that equals 10 by default.

chat\_bubble

We could have instead set this parameter value as unique to an account by doing `"account_id": "account-id-123"` instead of `"global": true`.

Your task is now to obtain the parameter value from within the activation hook, so that the opening bonus amount gets deposited to the customer’s account as soon as the account is opened. Here are the steps:

-   Define your `expected_parameters` metadata
    
-   Create your `data_fetchers` with a `ParametersObservationFetcher`
    
-   Add your fetcher to the `@fetch_account_data` decorator
    
-   Get the value of the `opening_bonus` and use it to include the bonus payment in the `posting_instructions_directives`
    

Don’t forget to import new object types as you need them.

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_6/test.py`