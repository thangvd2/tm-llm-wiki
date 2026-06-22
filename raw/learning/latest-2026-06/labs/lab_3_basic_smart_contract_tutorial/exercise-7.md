---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-7"
title: "Exercise 7 - Post-Posting Hook and Logging"
scraped_at: "2026-06-17T15:57:58.319Z"
images: 0
---

# Exercise 7 - Post-Posting Hook and Logging

## [](#post_posting_hook_and_debug_logs_introduction "Copy link to heading")Post-Posting Hook and Debug Logs Introduction

Now that we’ve got dynamic parameters, we can continue to add functionality to our contract.

In order to do this, we will need to use a new hook, the `post_posting_hook`, which executes after the account receives a posting.

However, we won’t be moving money around just yet in this exercise. For now, we want to just check that this hook is being executed. In order to do this, we will make use of the [Logger](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#logger) object, which allows us to write any debug logs we want and see them in the results while running tests.

As you may imagine, this is very useful to have while developing Smart Contracts, as debug logs can be placed anywhere in the code.

## [](#post_posting_hook "Copy link to heading")Post-Posting Hook

The [post\_posting\_hook](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_posting_hook) carries out actions that logically stem from a batch of Posting Instructions, as a business logic consequence. This hook is called after the accepted posting instructions are accepted by the Pre-Posting Hook and inserted into the Postings Ledger.

The `pre_posting_hook` is considered to be on the [hot path](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/concepts#the_hot_path), where quick decision-making is required. Putting a lot of logic in that hook would delay the decision to accept or reject a posting too much for real-world use. Therefore, any logic that needs to be carried out after a Posting is committed is usually made in the `post_posting_hook`, where time is less of a factor.

Any "re-balancing" Postings needed to amend balances after an incoming Posting (for example, moving funds between account addresses, charging fees, etc.), must be made in the `post_posting_hook`. This hook returns an object of type [PostPostingHookResult](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#postpostinghookresult).

## [](#debug_logs "Copy link to heading")Debug Logs

When using the [Logger](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#logger) object, we first need to define an instance. From there, we can use the instance to call the `debug()` function, where we can put in arbitrary statements, including formatted strings.

A simple example looks like the following:

If running Contract Simulations manually via an API call, you would see the results of the logs in a field labelled `hook_execution_logs`. You’ll see similar below once you run the tests.

## [](#exercise "Copy link to heading")Exercise

### [](#ensuring_that_the_post_posting_hook_is_running "Copy link to heading")Ensuring that the Post-Posting Hook is Running

In order to check that the hook runs as expected, define the `post_posting_hook` function, similar to the `pre_posting_hook` function above. Similarly, it also takes the `vault` and `hook_arguments` arguments.

For now, we don’t need the `@require(parameters=True)` line, as we’re not making use of parameters in this hook.

Inside the function, use the `logger` object that’s already been defined to log the following line:

`"Executing Post-Posting Hook"`

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_7/test.py`