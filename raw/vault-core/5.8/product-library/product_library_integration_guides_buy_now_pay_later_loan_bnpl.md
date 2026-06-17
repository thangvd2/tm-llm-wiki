---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/integration_guides/buy_now_pay_later_loan_bnpl"
title: "Buy Now Pay Later Loan"
scraped_at: "2026-06-16T15:27:04.773Z"
images: 0
---

# Buy Now Pay Later Loan

A BNPL loan is a short-term interest free financing option where customers are able to spread the cost of a single transaction over a number of weeks or months.

## [](#opening_a_buy_now_pay_later_account "Copy link to heading")Opening a Buy Now Pay Later Account

### [](#user_story_1_opening_a_buy_now_pay_later_account "Copy link to heading")User story 1 - Opening a Buy Now Pay Later Account

When a merchant allows a customer to pay for a product/service in instalments, the Bank will need to open a Buy Now Pay Later account for the customer.

Example request - Open a BNPL Account:

The principal is disbursed to the Vault account specified by the `deposit_account` parameter as part of account creation. The `account_activation_update` must complete successfully for this to happen. In the example above, the BNPL account will expect 4 payments on a fortnightly basis. The first payment will be due immediately, which is reflected in the `PRINCIPAL_DUE` address.

## [](#closing_a_buy_now_pay_later_account "Copy link to heading")Closing a Buy Now Pay Later Account

### [](#user_story_2_closing_a_buy_now_pay_later_account "Copy link to heading")User story 2 - Closing a Buy Now Pay Later Account

A Buy Now Pay Later account can only be closed once the principal has been fully repaid. Attempts to close the account before this will result in a failed `closure_update`.

When the principal is fully repaid, a `BUY_NOW_PAY_LATER_LOAN_PAID_OFF` notification will be emitted detailing which account id has been paid off.

Example response - The `BUY_NOW_PAY_LATER_LOAN_PAID_OFF` contract notification that is streamed out:

The bank can then process this notification and trigger a loan closure process that will call the following Core APIs:

1.  Update the account status to pending closure.
    

Example request - Changing the account status to pending closure:

2.  Once the closure update has been completed, update the same account’s status to closed.
    

Example request - Changing the account status to closed:

## [](#managing_delinquency_for_a_buy_now_pay_later_account "Copy link to heading")Managing Delinquency for a Buy Now Pay Later Account

### [](#user_story_3_managing_delinquency_for_a_buy_now_pay_later_account "Copy link to heading")User story 3 - Managing Delinquency for a Buy Now Pay Later Account

Delinquency for a Buy Now Pay Later account occurs when there are overdue balances at the end of the final repayment period + grace period. When this occurs, a `BUY_NOW_PAY_LATER_MARK_DELINQUENT` notification will be emitted detailing which account id is considered delinquent. This can be used to trigger an appropriate process.

Example response - The `BUY_NOW_PAY_LATER_LOAN_MARK_DELINQUENT` contract notification that is streamed out:

As per [Story 2 - Closing a Buy Now Pay Later Account](/vault-core/5-8/EN/product_library/integration_guides/buy_now_pay_later_loan_bnpl#closing_a_buy_now_pay_later_account), the account still needs paying off to be able to be closed. We recommend using a dedicated internal account for this purpose, which will then be able to track the amounts that are potentially written off.