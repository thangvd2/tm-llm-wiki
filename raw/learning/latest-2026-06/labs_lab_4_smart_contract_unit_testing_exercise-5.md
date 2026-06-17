---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing/exercise-5"
title: "Exercise 5 - Unit Tests for Interest Application"
scraped_at: "2026-06-17T05:19:25.137Z"
images: 0
---

# Exercise 5 - Unit Tests for Interest Application

In this exercise, we will continue unit testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the interest application scheduled event that runs every month.

## [](#unit_test_1 "Copy link to heading")Unit Test 1

Write a test that checks on the interest application event. Start the test in a state where there is money in the account for interest to be accrued on, and execute the hook: `scheduled_event_hook()`. There must be an assertion to check that the interest application amount is calculated correctly and returned in the hook response.

## [](#unit_test_2 "Copy link to heading")Unit Test 2

Make a copy of Unit Test 1 and adapt it to check a few new combinations of different interest rates and balances are still calculated correctly.

## [](#solutions "Copy link to heading")Solutions

You can find the solutions within the Lab Starter Pack here:

`lab-starter-pack/src/smart_contract_tutorials/library/basic_deposit/test/unit/solutions/test_basic_deposit_solution.py`