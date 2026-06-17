---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-4"
title: "Exercise 4 - Hooks, Arguments and Rejections"
scraped_at: "2026-06-17T05:19:01.800Z"
images: 0
---

# Exercise 4 - Hooks, Arguments and Rejections

## [](#rejecting_postings_based_on_denomination "Copy link to heading")Rejecting Postings Based on Denomination

Now we have a minimal contract that we can upload to Vault, it’s time to add some actual logic and functionality to it.

In this exercise, we will use the `pre_posting_hook` to reject postings made to the account if they’re made in any other denomination than `GBP`.

## [](#smart_contract_hooks "Copy link to heading")Smart Contract Hooks

Smart Contracts are based around the concept of [Hooks](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/concepts#hooks). Hooks are Python functions that are called by Vault, and are the standardised interface by which Vault communicates with a given Smart Contract. They are called at fixed points in the lifecycle of an Account.

The possible hooks - and when they’re called - are the following:

-   `activation_hook`: Once before Account activation.
    
-   `pre_posting_hook`: Before committing each new desired batch of posting instructions on the Account.
    
-   `post_posting_hook`: After committing an accepted batch of posting instructions.
    
-   `scheduled_event_hook`: Whenever a defined schedule has told Vault to call it back.
    
-   `pre_parameter_change_hook`: Every time a user wants to update account-owned `INSTANCE` or `ExpectedParameter` parameters, before the parameter change.
    
-   `post_parameter_change_hook`: After an account-owned `INSTANCE` or `ExpectedParameter` parameter value has changed.
    
-   `attribute_hook` : When `GET /v1/account-attribute-values` is called.
    
-   `derived_parameter_hook`: Each time calculated, or 'derived', parameters are needed in the code.
    
-   `conversion_hook`: Before an Account is converted to a new Smart Contract version.
    
-   `deactivation_hook`: Once just before the Account is closed.
    
-   `post_parameter_change_adjustment_hook` : Overrides `post_parameter_change_hook` during the Adjustments process.
    
-   `post_posting_adjustment_hook` : Overrides `post_posting_hook` during the Adjustments process.
    
-   `scheduled_event_adjustment_hook` : Overrides `scheduled_event_hook` during the Adjustments process.
    

### [](#hook_arguments_and_results "Copy link to heading")Hook Arguments and Results

All hooks take two arguments - `vault`, which is a reference to the Vault instance [that calls can be made to](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/concepts#vault_object), and a hook-specific argument class, which contains useful data to be used within the function itself. They return a result class (most do so optionally), which holds directives for actions resulting from the hook.

For example, the [pre\_posting\_hook](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_posting_hook) has a `vault` argument and an argument of type [PrePostingHookArguments](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookarguments), which, in turn, contains information such as the `effective_datetime`, `posting_instructions` and `client_transactions`.

The `pre_posting_hook` (optionally) returns an object of type [PrePostingHookResult](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookresult), which (optionally) includes a `Rejection` object - a class that can be returned through some hook result classes to reject a hook run. This can be returned to prevent a posting from being committed. Or, for the `pre_parameter_change_hook`, to reject a parameter update. When a hook rejection is returned, no other directives or data can be returned from the hook.

## [](#exercise "Copy link to heading")Exercise

### [](#reject_non_gbp_postings "Copy link to heading")Reject Non-GBP Postings

With all this in mind, use the arguments in the `pre_posting_hook` to reject any postings that don’t have a denomination of `GBP`.

In the test cases, we will send an [InboundHardSettlement](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#inboundhardsettlement) posting instruction batch denominated in GBP. We will also send another posting instruction batch with a different denomination. In this case, we want to return a `PrePostingHookResult` object that contains a `Rejection` with the `RejectionReason` of `WRONG_DENOMINATION`.

To this end, we can check the `denomination` field of the *posting instruction*, in this case the `InboundHardSettlement` available from `hook_arguments.posting_instructions`.

Remember that new objects we use, such as `PrePostingHookResult`, `Rejection` and `RejectionReason` will need to be imported.

In addition, `PrePostingHookResult` and `Rejection` are classes with named arguments (marked as having `*` as the first argument in the documentation), so all arguments need to be marked with the argument name.

For example, instead of something like:

`Rejection('error message', RejectionReason.CLIENT_CUSTOM_REASON)`

You should write:

`Rejection(message = 'error message', rejection_reason = RejectionReason.CLIENT_CUSTOM_REASON)`

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_4/test.py`