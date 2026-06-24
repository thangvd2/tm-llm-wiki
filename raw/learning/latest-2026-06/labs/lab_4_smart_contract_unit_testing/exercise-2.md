---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing/exercise-2"
title: "Exercise 2 - Unit Tests for Maximum Deposit Limit"
scraped_at: "2026-06-17T15:58:11.787Z"
images: 0
---

# Exercise 2 - Unit Tests for Maximum Deposit Limit

In this exercise, we will continue unit testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the deposit limit: you cannot make a deposit that makes the account balance exceed the limit.

## [](#unit_test_1 "Copy link to heading")Unit Test 1

Write a test that attempts to make a posting to the account that exceeds the account limit. For complete test coverage, include an assertion on the exact response of the hook rejection.

## [](#unit_test_2 "Copy link to heading")Unit Test 2

Write a test where:

The balance at the DEFAULT address is not 0 GBP, and the posting amount + the balance at the DEFAULT address exceeds the limit by 1 GBP.

Again, include an assertion on the exact response of the hook rejection.

## [](#unit_test_3 "Copy link to heading")Unit Test 3

Write a modified copy of Unit Test 2, subtracting 1 from the posting amount. Should this posting should be accepted?