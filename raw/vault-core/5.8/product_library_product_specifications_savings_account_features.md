---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/savings_account/features"
title: "Product features"
scraped_at: "2026-06-17T05:37:00.268Z"
images: 0
---

# Product features

The following business features are available with this Product.

## [](#account_opening "Copy link to heading")Account Opening

The account application process is unique to each bank. Upon requesting an account to be created in Vault, a number of Parameters are set or inherited. The following lists those parameters and any orchestration that needs to be considered when creating an account in Vault with this product.

### [](#orchestration "Copy link to heading")Orchestration

This product supports **Account Tiers** - tiers are assigned to accounts using Vault Flags. Therefore, it is advised that the Account is created in an 'open' state and then a tier Flag is linked to the account.

The product assumes the account is created via Core API in `ACCOUNT_STATUS_OPEN` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `ACCOUNT_STATUS_PENDING`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

### [](#product_parameters "Copy link to heading")Product Parameters

These are set when the product is loaded onto Vault, and are inherited by all accounts upon creation.

chat\_bubble

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract:

Group 1: 1. Interest accrual 2. Interest application

Group 2: 1. Minimum balance fee application 2. Inactivity fee application (after minimum balance fee application to avoid it causing the minimum balance to be breached)

   
| Name | Parameter Name | Description | Optional |
| --- | --- | --- | --- |
| 
Tier Names

 | 

`account_tier_names`

 | 

JSON encoded list of account tiers used as keys in map-type parameters. Flag definitions must be configured for each used tier. If the account is missing a flag the final tier in this list is used.

 | 

No

 |
| 

Denomination

 | 

`denomination`

 | 

Currency in which the product operates.

 | 

No

 |
| 

Dormancy Flags

 | 

`dormancy_flags`

 | 

The list of flag definitions that indicate an account is dormant. Dormant accounts may incur fees and have their transactions blocked. Expects a string representation of a JSON list.

 | 

No

 |
| 

Excess Fee

 | 

`excess_fee`

 | 

Fee charged for every withdrawal that exceeds the monthly withdrawal limit.

 | 

Yes

 |
| 

Permitted Withdrawals

 | 

`permitted_withdrawals`

 | 

Number of monthly permitted withdrawals. NOTE: Only transactions with the specified transaction type are counted towards this excess fee.

 | 

Yes

 |
| 

Monitored Transaction Type

 | 

`excess_fee_monitored_transaction_type`

 | 

Transaction type being monitored to determine how many operations of this type occurred in the current calendar month period. This parameter will only be used for the assessment of the excessive withdrawal fee.

 | 

Yes

 |
| 

Withdrawal Excess Fee Account

 | 

`excess_fee_income_account`

 | 

Internal account for excess fee income balance.

 | 

No

 |
| 

Block Excess Withdrawals

 | 

`block_excess_withdrawals`

 | 

When configured, if the number of permitted withdrawals is exceeded, any subsequent withdrawals are blocked. If this is not configured, the withdrawal is accepted and the Excess Fee will be applied.

 | 

Yes

 |
| 

Monthly Inactivity Fee

 | 

`inactivity_fee`

 | 

The monthly fee charged for inactivity on an account.

 | 

No

 |
| 

Inactivity Fee Income Account

 | 

`inactivity_fee_income_account`

 | 

Internal account for inactivity fee income balance.

 | 

No

 |
| 

Inactivity Partial Fees Enabled

 | 

`partial_inactivity_fee_enabled`

 | 

Toggles partial payments for inactivity fee

 | 

Yes

 |
| 

Inactivity Fee Application Hour

 | 

`inactivity_fee_application_hour`

 | 

The hour of the day at which inactivity fee is applied.

 | 

No

 |
| 

Inactivity Fee Application Minute

 | 

`inactivity_fee_application_minute`

 | 

The minute of the hour at which inactivity fee is applied.

 | 

No

 |
| 

Inactivity Fee Application Second

 | 

`inactivity_fee_application_second`

 | 

The second of the minute at which inactivity fee is applied.

 | 

No

 |
| 

Inactivity Flags

 | 

`inactivity_flags`

 | 

The list of flag definitions that indicate an account is inactive. Inactive accounts may incur an inactivity fee. Expects a string representation of a JSON list.

 | 

No

 |
| 

Interest Application Precision

 | 

`application_precision`

 | 

Precision needed for interest applications.

 | 

No

 |
| 

Interest Paid Account

 | 

`interest_paid_account`

 | 

Internal account for interest paid.

 | 

No

 |
| 

Interest Received Account

 | 

`interest_received_account`

 | 

Internal account for interest received.

 | 

No

 |
| 

Interest Application Frequency

 | 

`interest_application_frequency`

 | 

The frequency at which interest is applied.

 | 

No

 |
| 

Interest Application Hour

 | 

`interest_application_hour`

 | 

The hour of the day at which interest is applied.

 | 

No

 |
| 

Interest Application Minute

 | 

`interest_application_minute`

 | 

The minute of the hour at which interest is applied.

 | 

No

 |
| 

Interest Application Second

 | 

`interest_application_second`

 | 

The second of the minute at which interest is applied.

 | 

No

 |
| 

Maximum Balance Amount

 | 

`maximum_balance`

 | 

The maximum deposited balance amount for the account. Deposits that breach this amount will be rejected.

 | 

No

 |
| 

Tiered Daily Withdrawal Limits

 | 

`tiered_daily_withdrawal_limits`

 | 

The daily withdrawal limits based on account tier. It defines the upper withdrawal limit that cannot be exceeded by Maximum Daily Withdrawal Amount. If above it, the contract will consider the tiered limit as valid

 | 

No

 |
| 

Maximum Daily Deposit Amount

 | 

`maximum_daily_deposit`

 | 

The maximum amount which can be deposited into the account from start of day to end of day.

 | 

No

 |
| 

Maximum Daily Withdrawal Amount

 | 

`maximum_daily_withdrawal`

 | 

The maximum amount that can be withdrawn from the account from start of day to end of day.

 | 

No

 |
| 

Minimum Balance Fee

 | 

`minimum_balance_fee`

 | 

The fee charged if the minimum balance falls below the threshold.

 | 

No

 |
| 

Minimum Balance Threshold By Tier

 | 

`minimum_balance_threshold_by_tier`

 | 

The monthly minimum mean balance threshold by account tier

 | 

No

 |
| 

Minimum Balance Fee Income Account

 | 

`minimum_balance_fee_income_account`

 | 

Internal account for minimum balance fee income balance.

 | 

No

 |
| 

Minimum Balance Fee Application Hour

 | 

`minimum_balance_fee_application_hour`

 | 

The hour of the day at which minimum balance fee is applied.

 | 

No

 |
| 

Minimum Balance Fee Application Minute

 | 

`minimum_balance_fee_application_minute`

 | 

The minute of the hour at which minimum balance fee is applied.

 | 

No

 |
| 

Minimum Balance Fee Application Second

 | 

`minimum_balance_fee_application_second`

 | 

The second of the minute at which minimum balance fee is applied.

 | 

No

 |
| 

Partial Minimum Balance Fees Enabled

 | 

`partial_minimum_balance_fee_application_enabled`

 | 

Enables / Disables partial payments for the Minimum Balance Fee.

 | 

Yes

 |
| 

Minimum Deposit Amount

 | 

`minimum_deposit`

 | 

The minimum amount that can be deposited into the account in a single transaction.

 | 

No

 |
| 

Minimum Withdrawal Amount

 | 

`minimum_withdrawal`

 | 

The minimum amount that can be withdrawn from the account in a single transaction.

 | 

No

 |
| 

Tiered Gross Interest Rate

 | 

`tiered_interest_rates`

 | 

Map Of Minimum Balance To Gross Interest Rate For Positive Balances.

 | 

No

 |
| 

Accrued Interest Payable Account

 | 

`accrued_interest_payable_account`

 | 

Internal account for accrued interest payable balance.

 | 

No

 |
| 

Accrued Interest Receivable Account

 | 

`accrued_interest_receivable_account`

 | 

Internal account for accrued interest receivable balance.

 | 

No

 |
| 

Interest Accrual Days In Year

 | 

`days_in_year`

 | 

The days in the year for interest accrual calculation. Valid values are “actual”, “366”, “365”, “360”

 | 

No

 |
| 

Interest Accrual Precision

 | 

`accrual_precision`

 | 

Precision needed for interest accruals.

 | 

No

 |
| 

Interest Accrual Hour

 | 

`interest_accrual_hour`

 | 

The hour of the day at which interest is accrued.

 | 

No

 |
| 

Interest Accrual Minute

 | 

`interest_accrual_minute`

 | 

The minute of the hour at which interest is accrued.

 | 

No

 |
| 

Interest Accrual Second

 | 

`interest_accrual_second`

 | 

The second of the minute at which interest is accrued.

 | 

No

 |

### [](#account_parameters "Copy link to heading")Account Parameters

These are set at the point of account creation.

   
| Name |  | Description | Optional |
| --- | --- | --- | --- |
| 
Inactivity Fee Application Day

 | 

`inactivity_fee_application_day`

 | 

The day of the month on which inactivity fee is applied. If day does not exist in application month, applies on last day of month.

 | 

No

 |
| 

Interest Application Day

 | 

`interest_application_day`

 | 

The day of the month on which interest is applied. If day does not exist in application month, applies on last day of month.

 | 

No

 |
| 

Maximum Daily Withdrawal Amount

 | 

`daily_withdrawal_limit_by_transaction_type`

 | 

The maximum amount that can be withdrawn from an account over the current day by transaction type.

 | 

No

 |
| 

Minimum Balance Fee Application Day

 | 

`minimum_balance_fee_application_day`

 | 

The day of the month on which minimum balance fee is applied. If day does not exist in application month, applies on last day of month.

 | 

No

 |

### [](#derived_parameters "Copy link to heading")Derived Parameters

None

## [](#account_tiers_cpp_1918 "Copy link to heading")Account Tiers (CPP-1918)

Account tiers define the configurations of one or more features available on the product. This feature is applicable to funds denominated in the **Primary Denomination** of the account.

For the complete description, configuration options and behaviour of this feature, see [Account Tiers](/vault-core/5-8/EN/product_library/common_business_features/account#account_tiers_cpp_1918).

## [](#permitted_primary_denomination_cpp_1908 "Copy link to heading")Permitted Primary Denomination (CPP-1908)

Configuring the primary denomination in which the product can transact. Transactions which are not denominated in the primary denomination are rejected if the product only supports a single currency.

For the complete description, configuration options and behaviour of this feature, see [Permitted Primary Denomination](/vault-core/5-8/EN/product_library/common_business_features/currency_and_denomination#permitted_primary_denomination_cpp_1908).

## [](#minimum_deposit_amount_per_transaction_cpp_1987 "Copy link to heading")Minimum Deposit Amount per Transaction (CPP-1987)

Setting the minimum amount customers can deposit into their accounts in a single deposit transaction, where deposits that are less than the minimum deposit amount is rejected. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Minimum Deposit Amount per Transaction](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#minimum_deposit_amount_per_transaction_cpp_1987).

## [](#maximum_daily_deposit_limit_cpp_1988 "Copy link to heading")Maximum Daily Deposit Limit (CPP-1988)

The maximum daily deposit limit to set a limit to the sum of the deposits that can be made into an account in a single day. Deposit transactions that exceed this limit are rejected. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Deposit Limit](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_deposit_limit_cpp_1988).

## [](#maximum_daily_transaction_limit_per_transaction_type_cpp_2006 "Copy link to heading")Maximum Daily Transaction Limit per Transaction Type (CPP-2006)

A daily limit placed on the sum of each type of debit transaction. If there is a transaction that would result in one of the limits being breached, then that transaction is rejected.

chat\_bubble

If the product supports Account Tiers, the limits set on the account are validated against the limits defined on the tier assigned to the account to ensure the account limits do not exceed those defined by the tier.

This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Transaction Limit per Transaction Type](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976).

## [](#minimum_withdrawal_amount_per_transaction_cpp_1976 "Copy link to heading")Minimum Withdrawal Amount per Transaction (CPP-1976)

The minimum amount that can be withdrawn or transferred out of an account in a single transaction. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Minimum Withdrawal Amount per Transaction](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976).

## [](#maximum_daily_withdrawal_limit_cpp_2166 "Copy link to heading")Maximum Daily Withdrawal Limit (CPP-2166)

A daily limit placed on the sum of all withdrawals. If there is a withdrawal that would result in the limit being breached, then that withdrawal is rejected. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Withdrawal Limit](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_withdrawal_limit_cpp_2166).

## [](#number_of_withdrawals_permitted_and_excess_withdrawal_fee_cpp_1965 "Copy link to heading")Number of Withdrawals Permitted and Excess Withdrawal Fee (CPP-1965)

This feature allows you to set a limit on the number of withdrawals that are permitted per calendar month. When the number of permitted withdrawals is exceeded, the subsequent withdrawals are rejected or an excess withdrawal fee is charged.

This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Number of Withdrawals Permitted and Excess Withdrawal Fee](/vault-core/5-8/EN/product_library/common_business_features/fees#number_of_withdrawals_permitted_and_excess_withdrawal_fee_cpp_1965).

## [](#minimum_balance_threshold_and_fee_cpp_1922 "Copy link to heading")Minimum Balance Threshold and Fee (CPP-1922)

To support products that require accounts to hold a minimum deposit to avoid charging a minimum balance fee. The minimum balance fee is applied when the Monthly Average Balance (MAB) for an account is not above a configured threshold.

For the complete description, configuration options and behaviour of this feature, see [Minimum Balance Threshold and Fee](/vault-core/5-8/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922).

## [](#maximum_balance_limit_cpp_1986 "Copy link to heading")Maximum Balance Limit (CPP-1986)

Maximum balance limit on the account in the primary denomination, where credits that would breach this limit are rejected. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Balance Limit](/vault-core/5-8/EN/product_library/common_business_features/limits#maximum_balance_limit_cpp_1986).

## [](#scheduled_deposit_interest_accrual_cpp_1912 "Copy link to heading")Scheduled Deposit Interest Accrual (CPP-1912)

Daily interest accrual model for deposit balances using the partial balance method, where portions of the balance accrue interest at different interest rates, based on the configured interest rate tier. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Scheduled Deposit Interest Accrual](/vault-core/5-8/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_accrual_cpp_1912).

## [](#scheduled_deposit_interest_application_cpp_1913 "Copy link to heading")Scheduled Deposit Interest Application (CPP-1913)

Any accrued interest balance on an account is re-booked to the deposit balance on a periodic basis. The frequency at which interest is applied is configurable. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Scheduled Deposit Interest Application](/vault-core/5-8/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_application_cpp_1913).

## [](#inactivity_and_inactivity_fee_cpp_2031 "Copy link to heading")Inactivity and Inactivity Fee (CPP-2031)

The option to mark an account as inactive. This feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Inactivity and Inactivity Fee](/vault-core/5-8/EN/product_library/common_business_features/fees#inactivity_and_inactivity_fee_cpp_2031).

## [](#dormancy_cpp_1911 "Copy link to heading")Dormancy (CPP-1911)

While the definition of dormant varies, this typically occurs when there has been no activity on the account (e.g. transactions) for an extended period of time. When an account is marked as dormant, transactions on the account are restricted until it is reactivated, and the charging of fees is paused.

For the complete description, configuration options and behaviour of this feature, see [Dormancy](/vault-core/5-8/EN/product_library/common_business_features/account#dormancy_cpp_1911).

## [](#deposit_interest_application_upon_account_closure_cpp_1967 "Copy link to heading")Deposit Interest Application upon Account Closure (CPP-1967)

The account closure process is initiated and managed by the bank. This feature supports this process by applying any interest that has been accrued when the Vault account status is set to \`pending closure'.

For the complete description, configuration options and behaviour of this feature, see [Deposit Interest Application upon Account Closure](/vault-core/5-8/EN/product_library/common_business_features/interest_and_amortisation#deposit_interest_application_upon_account_closure_cpp_1967).