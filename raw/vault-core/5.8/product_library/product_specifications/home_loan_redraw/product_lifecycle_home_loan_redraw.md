---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/home_loan_redraw/product_lifecycle_home_loan_redraw"
title: "Product life cycle"
scraped_at: "2026-06-17T15:43:26.723Z"
images: 0
---

# Product life cycle

The life cycle of the product typically comprises opening an account and closing an account, with different states available for a specific account during this time. You can open, close and configure an account using instance parameters and the API.

For more information about these concepts, see:

-   Using instance parameters and [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/home_loan_redraw/product_configurability_home_loan_redraw)
    
-   Using the API, [Accounts endpoint](/vault-core/5-8/EN/api/core_api#accounts)
    

## [](#opening_a_home_loan_redraw "Copy link to heading")Opening a Home Loan Redraw

### [](#prerequisites "Copy link to heading")Prerequisites

To open an account you must specify a value for each instance parameter when opening an account through the API. In target state architecture, upstream systems determine the parameter values and then send these values downstream to the Accounts API.

The customer needs to specify the interest rate, term (in months), the amount (Principal), repayment day, and nominated deposit account. Once the provided information is validated, the product is created and the opening process is complete.

Australian Dollar (AUD) would be the default currency for the Home Loan Redraw product. Any transactions not using the default currency will be rejected.

### [](#using_the_api "Copy link to heading")Using the API

You can open an account through an API request. The product assumes the account is created via Core API in `ACCOUNT_STATUS_OPEN` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `ACCOUNT_STATUS_PENDING`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

## [](#closing_a_home_loan_redraw "Copy link to heading")Closing a Home Loan Redraw

### [](#prerequisites_2 "Copy link to heading")Prerequisites

Prerequisites for closing an account are:

-   Account does not have any pending transactions
    
-   Total account balance is zero when loan has been fully paid off
    
-   Home loan reaches maturity and has been repaid
    

Once the home loan has been fully repaid, a notification indicating that loan has been paid off will be sent while providing information on the amount of redraw funds available. If there are any available funds after clearing the debts, the bank needs to transfer them to the nominated deposit account before the account can be closed.

### [](#using_the_api_2 "Copy link to heading")Using the API

You can close an account through an API request.