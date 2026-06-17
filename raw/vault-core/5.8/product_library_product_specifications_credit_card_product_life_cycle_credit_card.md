---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/credit_card/product_life_cycle_credit_card"
title: "Product life cycle"
scraped_at: "2026-06-17T05:36:12.650Z"
images: 0
---

# Product life cycle

The life cycle of the product typically comprises opening an account and closing an account, with different states available for a specific account during this time. You can open, close and configure an account using instance parameters and the API.

For more information about these concepts, see:

-   Using instance parameters and [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/credit_card/product_configurability_credit_card)
    
-   Using the API, [Accounts endpoint](/vault-core/5-8/EN/api/core_api#accounts)
    

## [](#opening_a_credit_card "Copy link to heading")Opening a Credit Card

### [](#prerequisites "Copy link to heading")Prerequisites

To open a Credit Card account you must specify a value for each instance parameter. These values are set when opening an account through the API. In target state architecture, upstream systems determine the parameter values and then send these values downstream to the Accounts API. You can find a full list of these parameters in [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/credit_card/product_configurability_credit_card).

### [](#using_the_api "Copy link to heading")Using the API

You can open an account through an API request.

chat\_bubble

The product assumes the account is created via Core API in `"ACCOUNT_STATUS_OPEN"` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `"ACCOUNT_STATUS_PENDING"`, or wish to use the Data Loader API, you may need to customise Contracts to achieve the desired behaviours.

## [](#closing_a_credit_card "Copy link to heading")Closing a Credit Card

### [](#prerequisites_2 "Copy link to heading")Prerequisites

Prerequisites for closing an account are:

-   The account does not have any pending transactions
    
-   The account has a total account balance of 0
    

Upon determining that it is possible to initiate the account closure, it is possible to implement the logic to mark accounts as under request for closure by applying the relevant flag to a given Credit Card account.

Parameter to populate a flag:

-   `account_closure_flags` - populate the flag definition ID in this parameter
    

Flag (example name):

-   `ACCOUNT_CLOSURE_REQUESTED` - the flag to apply to the account (suggested name)
    

chat\_bubble

The name `ACCOUNT_CLOSURE_REQUESTED` is only a suggested name; you can configure the product to use a different flag definition ID.

### [](#account_write_off "Copy link to heading")Account write-off

The product caters for scenarios that require a bank to close an account that has an outstanding balance if the bank applies a write-off flag to the account. For more information, see [Write-off requests](/vault-core/5-8/EN/product_library/product_specifications/credit_card/features#1_2_writeoff_requests).

### [](#using_the_api_2 "Copy link to heading")Using the API

You can close an account through an API request to the Accounts endpoint.

### [](#post_closure_process "Copy link to heading")Post-closure process

Subject to the closure prerequisites being met, the product starts the closure process where as a safety net, the prerequisites are rechecked within the contract, which forces the account update to fail if the conditions are not met.

Next, the regular statement generation is processed by the contract producing the final statement, which shows the resulting minimum amount due and `_BILLED` balances as zero, because the prerequisite criteria to close an account will only progress requests where the `_CHARGED` and `_UNPAID` balances are zero.