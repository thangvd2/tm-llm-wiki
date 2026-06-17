---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing/exercise-4"
title: "Exercise 4 - Unit Test for Account Attributes"
scraped_at: "2026-06-17T05:19:23.371Z"
images: 0
---

# Exercise 4 - Unit Test for Account Attributes

In this exercise, we will continue unit testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the account attribute called `available_deposit_limit`. This attribute will allow external systems to know how much can be deposited without exceeding the maximum deposit limit.

## [](#unit_test_1 "Copy link to heading")Unit Test 1

Write a test that runs the attribute hook against multiple balance values:

-   0
    
-   100
    
-   Balance equal to the balance limit
    
-   Balance more than the balance limit
    

For each balance value there must be an assertion on the attribute hook response to include the `attribute_value`.

chat\_bubble

You can use a tool like [parameterized](https://pypi.org/project/parameterized/) to help you pass multiple values for a variable in your test.