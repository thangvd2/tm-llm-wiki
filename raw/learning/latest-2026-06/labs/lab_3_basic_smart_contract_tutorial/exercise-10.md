---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-10"
title: "Exercise 10 - Using Account Addresses"
scraped_at: "2026-06-17T15:58:04.618Z"
images: 0
---

# Exercise 10 - Using Account Addresses

## [](#interest_accrual_to_a_specific_address "Copy link to heading")Interest Accrual to a Specific Address

Although we’re now accruing daily interest, we don’t want to deposit the interest directly into the customer’s account at the end of each day.

Instead, we want to set aside this money somewhere the customer does not see (and in turn, not being taken into account with the interest calculation), until it’s deposited all at once at the end of the month.

In this exercise, we’ll take advantage of [account addresses](/vault-core/latest/EN/reference/balances#balances_and_the_accounting_model) to keep the accrued interest away from the `DEFAULT` address. At the end of the month, a new schedule event will deposit whatever’s been gathered there to the `DEFAULT` address.

## [](#balance_addresses "Copy link to heading")Balance Addresses

An `address` is a Balance Coordinate. It can be understood as a contract-specific means for storing specific balances or partitioning the total funds associated with an account. We can use Custom Instructions in the contract to send money to an address by specifying it in the `address` field.

## [](#end_of_month_scheduled_events "Copy link to heading")End of Month Scheduled Events

For Scheduled Events that occur at the end of the month, such as we’re doing with interest application, we don’t need to use a `ScheduleExpression` necessarily. Instead, we can use an [EndOfMonthSchedule](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#endofmonthschedule) object in the `schedule_method` field.

This object defines a recurring monthly schedule that automatically handles the varying lengths of different months. You can define the day, and optionally the time, that this schedule runs on each month.

## [](#exercise "Copy link to heading")Exercise

### [](#accrue_daily_interest_and_apply_monthly "Copy link to heading")Accrue Daily Interest and Apply Monthly

You will now need to accrue interest in a new address, and apply it in a separate schedule at the end of the month.

From the last exercise, we’ve replaced the `_get_interest_accrual_postings` function. It now calculates the accrual amount based on the current balance of the account.

In this exercise, complete the function `_get_interest_accrual_postings`. This function should instruct the transfer of the accrual amount from the internal account with `account_id` of `Internal Account` and address `ACCRUED_OUTGOING`. It should go to the `ACCRUED_INCOMING` address of our customer account.

In addition, create a new Schedule Event, named `APPLY_INTEREST`. This should run on the 28th day of each month at 01:00:00, and move the entire amount of the `ACCRUED_INCOMING` address to the `DEFAULT` address.

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_10/test.py`