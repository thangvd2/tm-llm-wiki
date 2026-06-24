---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-3"
title: "Exercise 3 - Tside and Importing"
scraped_at: "2026-06-17T15:57:50.589Z"
images: 0
---

# Exercise 3 - Tside and Importing

## [](#tside "Copy link to heading")Tside

As you can see in `exercise_3/deposit.py`, a new metadata field has been added; `tside = Tside.LIABILITY`. From the bank’s viewpoint, "Tside" denotes the categorization of accounts on the balance sheet as either Assets or Liabilities. Assets, like loans, generate income through interest and fees, whereas Liabilities, such as savings accounts, incur costs through interest expenses.

## [](#importing "Copy link to heading")Importing

However, if you run the code as it is now, you will receive an error; `IllegalPython: name 'Tside' is not defined`. This is because a smart contract does not have access to all custom objects in the `contracts_api` module. Therefore, we’ll need to import it in order to simulate this contract.

It is good practice that imports be written in a particular order, and alphabetised. Anything in all caps goes first (e.g. `DEFAULT_ADDRESS`), followed by anything in Pascal case (e.g. `AccountIdShape`). Finally, everything else that starts with a lowercase letter (e.g. `requires`).

For example, if we wanted to import the `Tside`, `requires`, `fetch_account_data`, `DEFAULT_ADDRESS` and `ActivationHookArguments` objects, the import would take the form:

## [](#exercise "Copy link to heading")Exercise

### [](#import_tside "Copy link to heading")Import Tside

In the contract, import the `Tside` object from `contracts_api` module. If you’re unfamiliar with importing in Python, see [this guide](https://www.geeksforgeeks.org/import-module-python/). When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_3/test.py`