---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/buy_now_pay_later_loan_bnpl/product_lifecycle_bnpl"
title: "Product life cycle"
scraped_at: "2026-06-17T15:43:01.914Z"
images: 0
---

# Product life cycle

The lifecycle of the BNPL product typically comprises opening an account and closing an account, with different states available for a specific account during this time. You can open, close, and configure an account using instance parameters and through the API.

For more information about these concepts, see:

-   Using instance parameters and [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/buy_now_pay_later_loan_bnpl/product_configurability_bnpl)
    
-   Using the API, [Accounts endpoint](/vault-core/5-8/EN/api/core_api#accounts)
    

## [](#opening_a_bnpl_loan "Copy link to heading")Opening a BNPL Loan

## [](#prerequisites "Copy link to heading")Prerequisites

To open an account you must specify a value for each instance parameter. These values are set when opening an account through the Accounts API. In target state architecture, upstream systems determine the parameter values and then send these values downstream to the Accounts API.

## [](#using_the_api "Copy link to heading")Using the API

You can open an account through an API request. The product assumes the account is created via Core API in `ACCOUNT_STATUS_OPEN` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `ACCOUNT_STATUS_PENDING`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

## [](#closing_a_bnpl_loan "Copy link to heading")Closing a BNPL Loan

## [](#prerequisites_2 "Copy link to heading")Prerequisites

The entirety of the outstanding balance is paid off in full.

## [](#using_the_api_2 "Copy link to heading")Using the API

You can close an account through an API request sent to the Accounts API.