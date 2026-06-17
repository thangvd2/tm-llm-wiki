---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/integration_guides/home_loan_redraw"
title: "Home Loan Redraw"
scraped_at: "2026-06-17T05:37:38.338Z"
images: 0
---

# Home Loan Redraw

A Home Loan is a loan which enables the borrower to raise funds while putting a lien on the property for which they are borrowing funds.

## [](#opening_a_home_loan_redraw_account "Copy link to heading")Opening a Home Loan Redraw Account

### [](#user_story_1_opening_a_home_loan_redraw_account "Copy link to heading")User story 1 - Opening a Home Loan Redraw Account

When a customer wishes to take out a Home Loan with Redraw facility, the Bank will need to open a Home Loan Redraw account for the customer.

Example request - Opening a home loan redraw account:

The principal is disbursed to the Vault account specified by the `deposit_account` parameter as part of account creation. The `account_activation_update` must complete successfully for this to happen. In the example above, the account will expect payments on the 11th of each month after the account creation. The payments are delayed by a month if the first payment date is less than one month from account creation. The loan is expected to be fully paid off after 120 repayments.

## [](#closing_a_home_loan_redraw_account "Copy link to heading")Closing a Home Loan Redraw Account

### [](#user_story_2_closing_a_home_loan_redraw_account "Copy link to heading")User story 2 - Closing a Home Loan Redraw Account

A Home Loan Redraw account can only be closed once the principal has been fully repaid. Attempts to close the account before this will result in a failed `closure_update`.

When the principal is fully repaid, a `HOME_LOAN_REDRAW_PAID_OFF` notification will be emitted detailing which account id has been paid off.

Example response - showing the `HOME_LOAN_REDRAW_PAID_OFF` notification that is streamed out:

The bank can then process this notification and trigger a loan closure process that will call the following Core APIs:

1.  If the `remaining_redraw_funds` in the notification are greater than zero, transfer these funds to the desired account. Debiting the DEFAULT address on the account by the amount will clear the remaining redraw funds, which can be credited to the customer’s account on Vault, or transferred to an external account via a payments engine.
    

Example request - showing a hard settlement posting from the redraw account to an internal account in Vault Core:

2.  Update the account status to pending closure.
    

Example request - changing the account status to pending closure:

3.  Once the closure update has been completed, update the same account’s status to closed.
    

Example request - changing the account status to pending closed: