---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing/exercise-3"
title: "Exercise 3 - Unit Tests for Opening Bonus"
scraped_at: "2026-06-17T15:58:13.547Z"
images: 0
---

# Exercise 3 - Unit Tests for Opening Bonus

In this exercise, we will continue unit testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the opening bonus.

## [](#unit_test_1 "Copy link to heading")Unit Test 1

Write a test that checks the balance of the account upon account opening time when there are no postings made to the account. Ensure the opening bonus is being paid with an assertion on the activation hook response.

## [](#unit_test_2 "Copy link to heading")Unit Test 2

Now write a test to reduce the configured opening bonus to 0. This should also be allowed by the contract.

### [](#debugging_unit_test_2 "Copy link to heading")Debugging Unit Test 2

This unit test should expose a problem with the smart contract, something which is to be expected in the normal course of test driven development. Part of the challenge here is making a fix to the activation hook so that our test now passes.