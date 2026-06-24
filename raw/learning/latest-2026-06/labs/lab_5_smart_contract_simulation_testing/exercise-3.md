---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_5_smart_contract_simulation_testing/exercise-3"
title: "Exercise 3 - Simulation Test for Opening Bonus"
scraped_at: "2026-06-17T15:58:24.221Z"
images: 0
---

# Exercise 3 - Simulation Test for Opening Bonus

In this exercise, we will continue simulation testing against the Smart Contract `basic_deposit.py`. This is located within the Lab Starter Pack here: `src/smart_contract_tutorials/library/basic_deposit/basic_deposit.py`

The feature we will be testing is the opening bonus.

For this exercise, write another test within `test_basic_deposit.py` called `test_activation_releases_bonus`, using a new bonus amount of £100. This must check the balance of the account upon account activation time when there are no postings made to the account, and that should be equal to £100.

This test requires overriding the default opening bonus amount, which will be passed into the `expected_param_values` arg of the `get_simulation_test_scenario() function within the test`

For this test, the events variable should be empty, to simulate account opening without any additional movement of funds.