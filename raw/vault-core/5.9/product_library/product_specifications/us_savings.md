---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/us_savings"
title: "US Savings Account"
scraped_at: "2026-06-22T19:21:27.535Z"
images: 0
---

# US Savings Account

The US Savings Account is a type of account that a customer could use in order to hold everyday savings. It includes a facility to accept funds as deposits into the account and in return the bank pays a variable interest rate on the balance. The account provides flexibility in allowing for withdrawals without the need for giving notice.

## [](#supervised_versus_unsupervised_behaviour "Copy link to heading")Supervised versus unsupervised behaviour

The US Savings Account has two main states - where it is supervised by a Plan and where it is not. When the US Savings Account is not on a Supervisor Plan, the US Savings Account Smart Contract controls all behaviour. When the US Savings Account is on a Supervisor Plan, the Supervisor Smart Contract controls select behaviour. The Supervisor Contract is able to override some `scheduled_code` behaviour for the account.

### [](#supervisor_plans "Copy link to heading")Supervisor Plans

The product build uses Supervisor functionality. Supervisor Plans are Vault’s mechanism for grouping accounts together under one Supervisor Contract. This allows a bank to share logic between accounts, handle operations for a group of accounts and aggregate the balances of those linked accounts. Supervisor Contracts are a type of contract that orchestrates the financial behaviour of one or more accounts. When creating a Plan, a bank must associate it with a Supervisor Contract version. The Supervisor Contract version ID is immutable. The schedules specified in the Supervisor Contract version are active on creating a Plan and completing an activation Plan update for it.

#### [](#supervisor_contract_versions "Copy link to heading")Supervisor Contract versions

The underlying Supervisor Contract version always powers a Plan and dictates the Plan’s behaviour.

#### [](#associating_and_dissociating_accounts_with_plans "Copy link to heading")Associating and dissociating accounts with Plans

A bank can use plan updates to associate and disassociate accounts with Plans. It is only possible to associate an account with one Plan at a time and only when both the account and Plan are open. However, it is possible to associate an open Plan with multiple accounts. A call to the `/account-plan-assocs` endpoint in the Core API returns the status of a Plan association in the response. Create and update events for account plan associations are available on the Streaming API, including changes to the status of an account plan association.

## [](#feature_overview "Copy link to heading")Feature overview

Here, you can see the relationship between some of these features and the events that can occur during the life of the account.

 
| Event | Feature |
| --- | --- |
| 
Account Opening

 | 

[Account API (Vault Core feature)](/vault-core/5-9/EN/product_library/product_specifications/current_account/features#account_opening)

 |
| 

Product Configuration of Account Tiers

 | 

[Account Tiers](/vault-core/5-9/EN/product_library/common_business_features/account#account_tiers_cpp_1918)

 |
| 

Charging a Maintenance Fee

 | 

[Monthly Maintenance Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#monthly_maintenance_fee_cpp_1921)

 |
| 

Validating Debit or Credit Transactions against Denomination

 | 

[Permitted Primary Denomination](/vault-core/5-9/EN/product_library/common_business_features/currency_and_denomination#permitted_primary_denomination_cpp_1908)

 |
| 

Validating Debit or Credit Transactions against Balance Limits

 | 

[Minimum Balance Threshold and Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922)

[Maximum Balance Limit](/vault-core/5-9/EN/product_library/common_business_features/limits#maximum_balance_limit_cpp_1986)

 |
| 

Validating Transactions against Transaction and Withdrawal Limits

 | 

[Maximum Daily Transaction Limit per Transaction Type](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976)

[Minimum Withdrawal Amount per Transaction](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976)

[Maximum Daily Withdrawal Limit](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_withdrawal_limit_cpp_2166)

[Number of Withdrawals Permitted and Excess Withdrawal Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#number_of_withdrawals_permitted_and_excess_withdrawal_fee_cpp_1965)

 |
| 

Validating Credits against Deposit Amount Limits

 | 

[Minimum Deposit Amount per Transaction](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_deposit_amount_per_transaction_cpp_1987)

[Maximum Daily Deposit Limit](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_deposit_limit_cpp_1988)

 |
| 

Rebating ATM Fee for Out-of-Network ATM Withdrawals

 | 

[Unlimited ATM Fee Rebates](/vault-core/5-9/EN/product_library/common_business_features/fees#unlimited_atm_fee_rebates_cpp_1996)

 |
| 

Charging a Paper Statement Fee

 | 

[Paper Statement Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#paper_statement_fee_cpp_1991)

 |
| 

Interest Accrual and Application

 | 

[Scheduled Deposit Interest Accrual](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_accrual_cpp_1912)

[Scheduled Deposit Interest Application](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_application_cpp_1913)

 |
| 

Marking an account as Inactive

 | 

[Inactivity and Inactivity Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#inactivity_and_inactivity_fee_cpp_2031)

 |
| 

Marking an account as Dormant

 | 

[Dormancy](/vault-core/5-9/EN/product_library/common_business_features/account#dormancy_cpp_1911)

 |
| 

Interest Application when updating the status of an Account to \`Pending Closure'

 | 

[Deposit Interest Application upon Account Closure](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#deposit_interest_application_upon_account_closure_cpp_1967)

 |
| 

Associations between Features

 | 

[US Savings Account CBF Associations](/vault-core/5-9/EN/product_library/product_specifications/us_savings/features#us_savings_account_cbf_associations)

 |
| 

US Savings Account Specific Requirements

 | 

[US Savings Account Specific Requirements](/vault-core/5-9/EN/product_library/product_specifications/us_savings/features#us_savings_account_specific_requirements_cpp_2390)

 |