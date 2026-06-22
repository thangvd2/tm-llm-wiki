---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/time_deposit"
title: "Time Deposit"
scraped_at: "2026-06-22T19:21:20.631Z"
images: 0
---

# Time Deposit

Time Deposit is a type of savings account where the customer cannot access their deposit until the product reaches maturity. Customers receive a higher interest rate on their deposit in exchange for not being able to withdraw their money from the account for the agreed period of time. A customer can only make deposits into the account within a set period of time, known as the deposit period, after which they can no longer make a deposit. Banks provide higher interest rates on these accounts because they offer less financial risk than standard savings accounts, such as an easy access saver account. It is also worth noting that the Time Deposit product only supports positive interest rates (not negative interest rates).

The product is suitable for both new and renewed Time Deposit accounts, but some features are only applicable to one or the other.

The deposit period and cooling-off period do not apply to renewed Time Deposit accounts. The grace period is only applicable for renewed Time Deposit accounts. The grace period is not applicable for new Time Deposit accounts and should be configured to 0 days on account opening.

## [](#feature_overview "Copy link to heading")Feature overview

Here, you can see the relationship between some of these features and the events that can occur during the life of the account.

 
| Event | Feature |
| --- | --- |
| 
Account Opening

 | 

[Account API (Vault Core feature)](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#account_opening)

 |
| 

Validating Credit Transactions against Denomination

 | 

[Permitted Primary Denomination](/vault-core/5-9/EN/product_library/common_business_features/currency_and_denomination#permitted_primary_denomination_cpp_1908)

 |
| 

Validating Credit Transactions against Balance Limits

 | 

[Maximum Balance Limit](/vault-core/5-9/EN/product_library/common_business_features/limits#maximum_balance_limit_cpp_1986)

 |
| 

Halting activity on the account when Deposit Maturity is reached

 | 

[Deposit Maturity](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#deposit_maturity_cpp_2077)

 |
| 

Validating Credits against Deposit Amount Limits

 | 

[Minimum Initial Deposit Amount](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#minimum_initial_deposit_amount_cpp_2086)

[Deposit Period and Number of Permitted Deposits](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#deposit_period_and_number_of_permitted_deposits_cpp_2082)

 |
| 

Validating Withdrawals against Cooling-Off Period without charging fees

 | 

[Cooling-Off Period](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#cooling_off_period_cpp_2084)

 |
| 

Validating amendments against the Grace Period without charging fees

 | 

[Deposit Grace Period](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#deposit_grace_period_cpp_2083)

 |
| 

Validating Transactions against Withdrawal Limits and charging Withdrawal Fees

 | 

[Withdrawals and Withdrawal Fees](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#withdrawals_and_withdrawal_fees_cpp_2092)

 |
| 

Interest Accrual

 | 

[Fixed Deposit Interest Accrual](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#fixed_deposit_interest_accrual_cpp_2347)

 |
| 

Interest Application

 | 

[Scheduled Deposit Interest Application](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_application_cpp_1913)

 |
| 

Associations between Features

 | 

[Time Deposit CBF Associations](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#time_deposit_cbf_associations)

 |
| 

Time Deposit specific Requirements

 | 

[Time Deposit specific Requirements](/vault-core/5-9/EN/product_library/product_specifications/time_deposit/features#time_deposit_specific_requirements_cpp_2366)

 |