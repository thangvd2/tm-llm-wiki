---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/integration_guides/loan"
title: "Loan"
scraped_at: "2026-06-17T05:37:41.864Z"
images: 0
---

# Loan

A loan is an amount of money (loan amount or principal) that a customer borrows from a lender in order to pay upfront for large expenses, and then repays. A customer typically repays the loan amount and the associated interest over the period of time that they agree with their lender, usually in fixed monthly repayments.

## [](#tracking_top_ups "Copy link to heading")Tracking Top-Ups

### [](#user_story_1_retrieve_historical_top_up_amounts "Copy link to heading")User story 1 - Retrieve historical top-up amount(s)

A bank may need to query Vault to retrieve historical top-up amount(s) on a customer’s Loan account. The Loan product is set up to store any key changes to the account within the accounts parameters. By querying the account parameter time series, we can retrieve the top-up value(s).

Example request - that will retrieve all parameter updates for a Loan account:

The request can first be filtered by `loan_start_date` to determine the top-up date and time and then by observing the updates to the `principal` parameter associated with that datetime. In the example below, we can observe that there was a top-up made on 16th August 2021 for 1000.

Example response - showing the results of the parameter updates made to the Principal parameter on the Loan account:

### [](#user_story_2_retrieve_historical_top_up_details "Copy link to heading")User story 2 - Retrieve historical top-up details

Using the query from Story 1 to determine top-up datetime by observing the `loan_start_date` we can reliably evaluate the changes to Loan account parameters that are associated with that top-up request. This allows us to retrieve historical top-up details.

Example request - retrieving all parameter updates for a Loan account:

Below is an example response to demonstrate the updated values that were created as part of the top-up from 16-08-2021.

Here we can see associated changes to the principal and fixed interest rate as part of the top-up with timestamp 2021-08-16T10:49:41.660133Z. We can use the previous parameter record to also determine specifics around what has changed as part of a top-up. For example, the original principal was 10,000 and the updated principal is 11,000, meaning that the top-up value was 1000. Likewise, we can see that the fixed interest rate has increased from 3.4544% to 3.6%.

Example response - showing the results of the parameter updates made to the Loan start date, Fixed interest rate and Principal parameters on the Loan account: