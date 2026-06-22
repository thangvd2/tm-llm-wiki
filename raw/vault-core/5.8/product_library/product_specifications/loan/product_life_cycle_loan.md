---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/loan/product_life_cycle_loan"
title: "Product life cycle"
scraped_at: "2026-06-17T15:43:40.265Z"
images: 0
---

# Product life cycle

The life cycle of the product typically comprises opening an account and closing an account, with different states available for a specific account during this time. You can open, close and configure an account using instance parameters and either Workflows or the API.

chat\_bubble

Any Workflows for illustrative purposes only.

For more information about these concepts, see:

-   Using instance parameters and [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/loan/product_configurability_loan)
    
-   Using Workflows and [Workflow instantiation configuration](/vault-core/5-8/EN/product_library/product_specifications/loan/workflow_instantiation_configuration_loan)
    
-   Using the API, [Accounts endpoint](/vault-core/5-8/EN/api/core_api#accounts)
    

## [](#opening_a_loan "Copy link to heading")Opening a Loan

### [](#prerequisites "Copy link to heading")Prerequisites

To open an account you must specify a value for each instance parameter. These values are set during the Loan Application Workflow or when opening an account through the API. In target state architecture, upstream systems determine the parameter values and then send these values downstream to either the Loan Application Workflow or the Accounts API. You can find a full list of these parameters in [Product configurability](/vault-core/5-8/EN/product_library/product_specifications/loan/product_configurability_loan).

chat\_bubble

The application workflow acts as an illustrative tool only, providing an example on how to open a declining principal amortised loan.

### [](#using_the_workflow "Copy link to heading")Using the Workflow

Instantiating the `LOAN_APPLICATION` workflow on a customer starts the application to open a Loan. The workflow prompts the customer to specify the features of the loan, including:

-   Interest rate
    
-   Fixed or variable rate loan
    
-   Term (in months)
    
-   Amount (Principal)
    
-   Due amount calculation day
    
-   Rest as monthly or daily
    
-   Nominated deposit account (another Vault customer account)
    

Alternatively, the application comprises a subset of these parameterised features and additional parameters that are specific to a balloon payment loan.

As part of this process, the workflow:

-   Validates the customer’s information
    
-   Approves or rejects the application following validation
    
-   Creates the loan account on approving an application
    
-   Completes the loan opening process
    

### [](#using_the_api "Copy link to heading")Using the API

You can open a new account through an API request. The product assumes the account is created via Core API in `ACCOUNT_STATUS_OPEN` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `ACCOUNT_STATUS_PENDING`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

## [](#closing_a_loan "Copy link to heading")Closing a Loan

### [](#prerequisites_2 "Copy link to heading")Prerequisites

Prerequisites for closing an account are: - The loan reaches maturity and the remaining debt is repaid. - Early repayment; the customer must repay the entirety of the outstanding balance in full including any associated early repayment fees and overpayment fee.

### [](#using_the_api_2 "Copy link to heading")Using the API

You can close an account through an API request.