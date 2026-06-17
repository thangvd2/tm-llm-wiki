---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/shariah_savings_account/product_life_cycle_shariah_savings_account__no_workflows"
title: "Product life cycle"
scraped_at: "2026-06-17T05:05:38.374Z"
images: 0
---

# Product life cycle

The life cycle of the product typically comprises opening an account and closing an account, with different states available for a specific account during this time. You can open, close, and configure an account using instance parameters and either Workflows or the API.

For more information about these concepts, see:

-   Using instance parameters and [Product configurability](/vault-core/5-9/EN/product_library/product_specifications/shariah_savings_account/product_configurability_shariah_savings_account)
    
-   Using Workflows and Workflow instantiation configuration (not applicable)
    
-   Using the API, [Accounts endpoint](/vault-core/5-9/EN/api/core_api#accounts)
    

## [](#opening_a_shariah_savings_account "Copy link to heading")Opening a Shariah Savings Account

### [](#prerequisites "Copy link to heading")Prerequisites

To open a Shariah Savings Account you must specify a value for each [instance parameter](/vault-core/5-9/EN/product_library/product_specifications/shariah_savings_account/product_configurability_shariah_savings_account). These values are set when opening a wallet through the API. In target state architecture, upstream systems determine the parameter values and then send these values downstream to the Accounts API.

### [](#using_the_api "Copy link to heading")Using the API

You can open a new account and set the customer tier through an API request. In order to set the customer tier, you must apply a customer tier flag to the newly-created account.

The product assumes the account is created via Core API in `"ACCOUNT_STATUS_OPEN"` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `"ACCOUNT_STATUS_PENDING"`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

## [](#closing_a_shariah_savings_account "Copy link to heading")Closing a Shariah Savings Account

### [](#prerequisites_2 "Copy link to heading")Prerequisites

The main deposit account must have no pending transactions and a total account balance of 0.

### [](#using_the_api_2 "Copy link to heading")Using the API

Upon receiving account closure requests, the accrued profit is forfeited on the main Shariah Savings Account. There is an assumption here that the parameters for the internal accounts that are being used (Accrued Profit Payable Account and Profit Paid Account) are set to the same value for both types of account. This would mean that the funds will move in the same direction as the daily profit accrual.