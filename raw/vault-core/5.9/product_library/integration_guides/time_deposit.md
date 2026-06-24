---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/integration_guides/time_deposit"
title: "Time Deposit"
scraped_at: "2026-06-22T19:21:54.981Z"
images: 0
---

# Time Deposit

Time Deposit is a type of savings account where the customer cannot access their deposit until the product reaches maturity. Customers receive a higher interest rate on their deposit in exchange for not being able to withdraw their money from the account for the agreed period of time. A customer can only make deposits into the account within a set period of time, known as the deposit period, after which they can no longer make a deposit.

## [](#prerequisites "Copy link to heading")Prerequisites

There are certain customer preferences that are not required in contract logic and therefore not defined within the contract. These therefore need to be stored externally to the contract. Namely, the customer’s maturity rollover and interest application preferences.

One such place that these preferences could be stored is in the `account_details` metadata on the Account resource, but this is not mandated by the product. An example of this is shown in `library/time_deposit/test/e2e/test_time_deposit_product_schedules.py`.

## [](#opening_a_time_deposit "Copy link to heading")Opening a Time Deposit

### [](#user_story_1_creating_the_time_deposit_account "Copy link to heading")User story 1 - Creating the Time Deposit account

When a customer opens a time deposit account for the first time, the bank is required to create an account using the new\_time\_deposit product. The `new_time_deposit_product` must define the `grace_period` parameter value to be 0 and the `deposit_period` and `cooling_off_period` parameter values to be greater than 0.

If the customer has an existing `new_time_deposit` account that has now reached maturity, and the customer has decided to roll over their funds into another Time Deposit account, the bank is required to create an account using the `renewed_time_deposit` product. The `renewed_time_deposit` must define the `grace_period` parameter value greater than 0 and the `deposit_period` and `cooling_off_period` parameter values to be 0.

The following example request is valid for both `new_time_deposit` and `renewed_time_deposit` requests, with the `product_id` updated for the relevant use case.

Example request - creating a time deposit acccount

## [](#closing_a_time_deposit "Copy link to heading")Closing a Time Deposit

### [](#user_story_2_closing_the_time_deposit_account "Copy link to heading")User story 2 - Closing the Time Deposit account

There are four scenarios in which an account should be closed. The contract will notify the bank in all such cases.

1.  A `new_time_deposit` account is unfunded at the end of the `deposit_period`, the contract will emit a `TIME_DEPOSIT_DEPOSIT_PERIOD_END` notification in the following format.
    

Example response - showing the `TIME_DEPOSIT_PERIOD_END` notification that is streamed out:

2.  A `renewed_time_deposit` account is unfunded at the end of the `grace_period`, the contract will emit a `TIME_DEPOSIT_GRACE_PERIOD_END` notification in the following format.
    

Example response - showing the `TIME_DEPOSIT_GRACE_PERIOD_END` notification that is streamed out:

3.  The customer makes a withdrawal such that the account balance becomes zero. This is applicable outside of the `grace_period` and `deposit_period` only. The contract will emit a `TIME_DEPOSIT_FULL_WITHDRAWAL` notification in the following format.
    

Example response - showing the `TIME_DEPOSIT_FULL_WITHDRAWAL` notification that is streamed out:

4.  The account has reached maturity, the bank should conduct post maturity processing and subsequently close the matured account, see [Account Maturity](/vault-core/5-9/EN/product_library/integration_guides/time_deposit#account_maturity). The contract will notify the bank that the account has now matured by emitting a `TIME_DEPOSIT_ACCOUNT_MATURITY` notification in the following format.
    

Example request - changing the account status to pending closure:

Once the closure update has been completed, update the same time deposit account status to closed.

Example request - changing the account status to closed:

## [](#transferring_applied_interest "Copy link to heading")Transferring Applied Interest

### [](#user_story_3_transferring_applied_interest_to_a_nominated_account "Copy link to heading")User story 3 - Transferring Applied Interest to a nominated account

If the customer’s preference is for their interest application to be applied to a nominated account, the bank is required to transfer the funds out of the time deposit account themselves. The `APPLIED_INTEREST_TRACKER` address will require manual adjusting in this scenario. Note: `force_override` must be defined in the `instruction_details`.

Example request - showing the product transferring the applied interest to a nominated account:

## [](#charging_withdrawal_fees "Copy link to heading")Charging Withdrawal Fees

### [](#user_story_4_charging_the_customer_fees_on_their_withdrawals "Copy link to heading")User story 4 - Charging the customer fees on their withdrawals

When a customer makes a withdrawal from their time deposit account, the contract will determine the fee that should be deducted from the withdrawal before it is returned to the customer.

The bank is required to deduct the fee amount from the withdrawn funds before they’re returned to the customer.

The contract will emit a `TIME_DEPOSIT_WITHDRAWAL_FEE` notification in the following format:

Example respomse - showing the `TIME_DEPOSIT_WITHDRAWAL_FEE` notification that is streamed out:

## [](#account_maturity "Copy link to heading")Account Maturity

### [](#user_story_5_account_reaching_maturity "Copy link to heading")User story 5 - Account reaching maturity

Once the account reaches maturity the contract will emit a `TIME_DEPOSIT_ACCOUNT_MATURITY` notification, see [Closing a Time Deposit](/vault-core/5-9/EN/product_library/integration_guides/time_deposit#closing_a_time_deposit) for the format of this notification. Once the bank consumes the maturity notification they must orchestrate the post maturity processing which is dependent on the customer’s chosen rollover preference. The customer’s rollover preference is stored externally from the contract.

If the customer has chosen to rollover their funds (fully or partially) into a new time deposit, the bank should first follow the steps in [Opening a Time Deposit](/vault-core/5-9/EN/product_library/integration_guides/time_deposit#opening_a_time_deposit) to open a `renewed_time_deposit` account for the customer.

The bank is then required to transfer the rollover amount to the created `renewed_time_deposit` account, if the customer has chosen to rollover their Time Deposit into a new account.

chat\_bubble

`force_override` must be defined in the `instruction_details`

Example request - Transfer posting instruction to transfer the rollover amount:

Once the funds have been rolled over into the new time deposit (if applicable), the bank should then return any remaining funds back to the customer’s nominated account (this may be zero if all the funds have been transferred to the `renewed_time_deposit_account`, and therefore, this step should be skipped). Note: `force_override` must be defined in the `instruction_details`.

Example request - Outbound Hard settlement posting to transfer remaining funds to the customer’s nominated account:

Once this step is completed the bank should follow the steps defined in [Closing a Time Deposit](/vault-core/5-9/EN/product_library/integration_guides/time_deposit#closing_a_time_deposit) to update the account status to closed.

The test `test_time_deposit_lifecycle_with_rollover` defined in `library/time_deposit/test/e2e/test_time_deposit_product_schedules.py` provides an illustration of how this process can be carried out.