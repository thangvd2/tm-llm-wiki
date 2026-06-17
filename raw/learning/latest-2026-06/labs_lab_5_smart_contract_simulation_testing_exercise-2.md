---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_5_smart_contract_simulation_testing/exercise-2"
title: "Exercise 2 - Simulation Test for Maximum Deposit Limit"
scraped_at: "2026-06-17T05:19:30.539Z"
images: 0
---

# Exercise 2 - Simulation Test for Maximum Deposit Limit

In this exercise, we will continue simulation testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the deposit limit: you cannot make a deposit that makes the account balance exceed the limit.

For this exercise, write another test within `test_basic_deposit.py` called `test_reject_posting_that_exceeds_maximum_deposit_param`. It must attempt to make a deposit posting to the account that exceeds the deposit limit. You would then specify in the subtest what you expect the balances should be for the account before and after the attempted deposit.

## [](#further_guidance "Copy link to heading")Further Guidance

-   Create a posting that should be accepted, and assert the balances are updated accordingly
    
-   Create another posting that should be rejected. Ensure the balance is unchanged and that you add an `ExpectedRejection`.
    
-   If you want to change default parameter values within the test (e.g. to check multiple different values of the maximum balance limit), be sure to `.copy()` the variable as it is mutable and direct modification of it will affect other tests.