---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/mortgage/product_life_cycle_mortgage"
title: "Product life cycle"
scraped_at: "2026-06-17T05:36:51.957Z"
images: 0
---

# Product life cycle

The life cycle of the product typically comprises opening an account and closing an account, with different states available for a specific account during this time. You can open, close and configure an account using instance parameters and either Workflows or the API.

chat\_bubble

Any Workflows that have been included are for illustrative purposes only.

For more information about these concepts, see:

-   Using instance parameters and [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/mortgage/product_configurability_mortgage)
    
-   Using Workflows and [Workflow instantiation configuration](/vault-core/5-8/EN/product_library/product_specifications/mortgage/workflow_instantiation_configuration_mortgage)
    
-   Using the API, [Accounts endpoint](/vault-core/5-8/EN/api/core_api#accounts)
    

## [](#opening_a_mortgage "Copy link to heading")Opening a Mortgage

### [](#prerequisites "Copy link to heading")Prerequisites

To open an account you must specify a value for each instance parameter. These values are set during the Account Opening Workflow or when opening an account through the API. In target state architecture, upstream systems determine the parameter values and then send these values downstream to either the Account Opening Workflow or the Accounts API.

### [](#using_the_workflow "Copy link to heading")Using the Workflow

Instantiating the `MORTGAGE_APPLICATION` workflow on an existing customer will open a mortgage. The customer is asked to specify the interest rate, term (in months), the amount (Principal), due amount calculation day, and nominated deposit account. Once the provided information is validated, the product is created and the opening process is complete.

### [](#using_the_api "Copy link to heading")Using the API

You can open an account through an API request. The product assumes the account is created via Core API in `ACCOUNT_STATUS_OPEN` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `ACCOUNT_STATUS_PENDING`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

## [](#closing_a_mortgage "Copy link to heading")Closing a Mortgage

### [](#prerequisites_2 "Copy link to heading")Prerequisites

Prerequisites for closing an account are:

-   Mortgage reaches maturity and the total outstanding debt is repaid
    
-   Early repayment; the customer must repay the entirety of the outstanding balance in full, including any associated early repayment fees and overpayment fee.
    

### [](#using_the_api_2 "Copy link to heading")Using the API

You can close an account through an API request.