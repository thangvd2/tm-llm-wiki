---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_5_smart_contract_simulation_testing/exercise-4"
title: "Exercise 4 - Simulation Test for Account Attributes"
scraped_at: "2026-06-17T05:19:34.079Z"
images: 0
---

# Exercise 4 - Simulation Test for Account Attributes

In this exercise, we will continue simulation testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the account attribute: `available_deposit_limit`. This attribute will allow external systems to know how much can be deposited without reaching the maximum deposit deposit at a particular point in time.

For this exercise, write a test called `test_account_attributes` that checks the value of the `available_deposit_limit` account attribute just after the account activation.

## [](#further_guidance "Copy link to heading")Further Guidance

At the time of writing there is not yet native support for account attributes within the Inception SDK for simulation tests, akin to `expected_derived_parameters` within a `SubTest`. However, we can still write a simulation test with a custom event of type `list_account_attribute_values`.

See this snippet for how to create a `list_account_attribute_values` custom event:

A normal simulation test includes the expected assertions within the subtest, e.g.:

However, there is not yet a `list_account_attribute_values` helper available within the inception\_sdk `SubTest`. Instead, the following pattern can be used: