---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/us_savings/features"
title: "Product features"
scraped_at: "2026-06-17T05:05:56.825Z"
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

Group 2: 1. Minimum balance fee application 2. Maintenance fee application (all fees are after minimum balance fee application to avoid them causing the minimum balance to be breached) 3. Paper statement fee application 4. Inactivity fee application

   
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

Number of monthly permitted withdrawals. Please note that only transactions with the specified transaction type are counted towards this excess fee.

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

Partial Paper Statement Fees Enabled

 | 

`partial_paper_statement_fee_enabled`

 | 

Enables / Disables partial payments for the Paper Statement Fee.

 | 

Yes

 |
| 

Paper Statements Rate

 | 

`paper_statement_fee_rate`

 | 

The monthly fee for paper statements on an account.

 | 

No

 |
| 

Paper Statement Fee Income Account

 | 

`paper_statement_fee_income_account`

 | 

Internal account for paper statement fee income balance.

 | 

No

 |
| 

Paper Statement Fee Application Hour

 | 

`paper_statement_fee_hour`

 | 

The hour of the day at which the paper statement fee is applied.

 | 

No

 |
| 

Paper Statement Fee Application Minute

 | 

`paper_statement_fee_minute`

 | 

The minute of the day at which the paper statement fee is applied.

 | 

No

 |
| 

Paper Statement Fee Application Second

 | 

`paper_statement_fee_second`

 | 

The second of the day at which the paper statement fee is applied.

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
| 

Monthly Maintenance Fee By Tier

 | 

`monthly_maintenance_fee_by_tier`

 | 

The monthly maintenance fee by account tier

 | 

No

 |
| 

Monthly Maintenance Fee Income Account

 | 

`monthly_maintenance_fee_income_account`

 | 

Internal account for monthly maintenance fee income balance.

 | 

No

 |
| 

Monthly Maintenance Partial Fees Enabled

 | 

`partial_maintenance_fee_enabled`

 | 

Toggles partial payments for monthly maintenance fee

 | 

Yes

 |
| 

Maintenance Fees Application Hour

 | 

`maintenance_fee_application_hour`

 | 

The hour of the day at which maintenance fees are applied.

 | 

No

 |
| 

Maintenance Fees Application Minute

 | 

`maintenance_fee_application_minute`

 | 

The minute of the hour at which fees are applied.

 | 

No

 |
| 

Maintenance Fees Application Second

 | 

`maintenance_fee_application_second`

 | 

The second of the minute at which fees are applied.

 | 

No

 |
| 

Eligible Fee Rebate Types

 | 

`fee_types_eligible_for_rebate`

 | 

The fee types eligible for rebate. Expects a string representation of a JSON list.

 | 

No

 |
| 

Fee Rebate Internal Acccount

 | 

`fee_rebate_internal_accounts`

 | 

Mapping of fee type to fee rebate internal account. Expects a string representation of a JSON dictionary.

 | 

No

 |

### [](#account_parameters "Copy link to heading")Account Parameters

These are set at the point of account creation.

   
| Name | Parameter Name | Description | Optional |
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

Maintenance Fees Application Day

 | 

`maintenance_fee_application_day`

 | 

The day of the month on which maintenance fee is applied. If day does not exist in application month, applies on last day of month.

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
| 

Paper Statement Fee Application Day

 | 

`paper_statement_fee_day`

 | 

The day of the month on which the paper statement fee is applied.If day does not exist in application month, applies on the first day of the next month.

 | 

No

 |
| 

Paper Statement Fee Enabled

 | 

`paper_statement_fee_enabled`

 | 

Enables / Disables the Monthly Paper Statement Fee.

 | 

No

 |

## [](#account_tiers_cpp_1918 "Copy link to heading")Account Tiers (CPP-1918)

Account tiers define the configurations of one or more features available on the product. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

For the complete description, configuration options and behaviour of this feature, see [Account Tiers](/vault-core/5-9/EN/product_library/common_business_features/account#account_tiers_cpp_1918).

## [](#monthly_maintenance_fee_cpp_1921 "Copy link to heading")Monthly Maintenance Fee (CPP-1921)

The monthly maintenance fee - also known as the monthly service fee - is typically charged for holding an account and the provision of services that accompany the account, such as online banking, debit card usage, and ATM access. The specific amount of the fee and the services it covers can vary depending on the bank and the type of deposit account. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Monthly Maintenance Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#monthly_maintenance_fee_cpp_1921).

## [](#permitted_primary_denomination_cpp_1908 "Copy link to heading")Permitted Primary Denomination (CPP-1908)

Configuring the primary denomination in which the product can transact. Transactions which are not denominated in the primary denomination are rejected if the product only supports a single currency.

For the complete description, configuration options and behaviour of this feature, see [Permitted Primary Denomination](/vault-core/5-9/EN/product_library/common_business_features/currency_and_denomination#permitted_primary_denomination_cpp_1908).

## [](#minimum_deposit_amount_per_transaction_cpp_1987 "Copy link to heading")Minimum Deposit Amount per Transaction (CPP-1987)

Setting the minimum amount customers can deposit into their accounts in a single deposit transaction, where deposits that are less than the minimum deposit amount will be rejected. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Minimum Deposit Amount per Transaction](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_deposit_amount_per_transaction_cpp_1987).

## [](#maximum_daily_deposit_limit_cpp_1988 "Copy link to heading")Maximum Daily Deposit Limit (CPP-1988)

The maximum daily deposit limit to set a limit to the sum of the deposits that can be made into an account in a single day. Deposit transactions that exceed this limit are rejected. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Deposit Limit](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_deposit_limit_cpp_1988).

## [](#maximum_daily_transaction_limit_per_transaction_type_cpp_2006 "Copy link to heading")Maximum Daily Transaction Limit per Transaction Type (CPP-2006)

A daily limit placed on the sum of each type of debit transaction. If there is a transaction that would result in one of the limits being breached, then that transaction is rejected. Note that if the product supports Account Tiers, the limits set on the account are validated against the limits defined on the tier assigned to the account to ensure the account limits do not exceed those defined by the tier. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Transaction Limit per Transaction Type](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976).

## [](#minimum_withdrawal_amount_per_transaction_cpp_1976 "Copy link to heading")Minimum Withdrawal Amount per Transaction (CPP-1976)

The minimum amount that can be withdrawn or transferred out of an account in a single transaction. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Minimum Withdrawal Amount per Transaction](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976).

## [](#maximum_daily_withdrawal_limit_cpp_2166 "Copy link to heading")Maximum Daily Withdrawal Limit (CPP-2166)

A daily limit placed on the sum of all withdrawals. If there is a withdrawal that would result in the limit being breached, then that withdrawal is rejected. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Withdrawal Limit](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_withdrawal_limit_cpp_2166).

## [](#number_of_withdrawals_permitted_and_excess_withdrawal_fee_cpp_1965 "Copy link to heading")Number of Withdrawals Permitted and Excess Withdrawal Fee (CPP-1965)

Setting a limit on the number of withdrawals that is permitted per calendar month where an excess withdrawal fee is charged when the number of withdrawals exceed those permitted. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Number of Withdrawals Permitted and Excess Withdrawal Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#number_of_withdrawals_permitted_and_excess_withdrawal_fee_cpp_1965).

## [](#minimum_balance_threshold_and_fee_cpp_1922 "Copy link to heading")Minimum Balance Threshold and Fee (CPP-1922)

To support products that require accounts to hold a minimum deposit to avoid charging a minimum balance fee. The minimum balance fee is applied when the Monthly Average Balance (MAB) for an account is not above a configured threshold.

For the complete description, configuration options and behaviour of this feature, see [Minimum Balance Threshold and Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922).

## [](#maximum_balance_limit_cpp_1986 "Copy link to heading")Maximum Balance Limit (CPP-1986)

Maximum balance limit on the account in the primary denomination, where credits that would breach this limit are rejected. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Balance Limit](/vault-core/5-9/EN/product_library/common_business_features/limits#maximum_balance_limit_cpp_1986).

## [](#unlimited_atm_fee_rebates_cpp_1996 "Copy link to heading")Unlimited ATM Fee Rebates (CPP-1996)

This feature concerns the unlimited ATM Fee Rebate configuration and application to cover the fees applied when customers transact in out-of-network ATMs.

An ATM Fee Rebate is a refund of fees charged by another bank or ATM network for using their ATMs. Some banks offer this feature as a way to encourage customers to use their own accounts and ATM networks.

For the complete description, configuration options and behaviour of this feature, see [Fees](/vault-core/5-9/EN/product_library/common_business_features/fees#unlimited_atm_fee_rebates_cpp_1996).

## [](#paper_statement_fee_cpp_1991 "Copy link to heading")Paper Statement Fee (CPP-1991)

This feature concerns the application of a monthly fee for paper statements, which is charged to customers who choose to receive them.

For the complete description, configuration options and behaviour of this feature, see [Paper Statement Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#paper_statement_fee_cpp_1991).

## [](#scheduled_deposit_interest_accrual_cpp_1912 "Copy link to heading")Scheduled Deposit Interest Accrual (CPP-1912)

Daily interest accrual model for deposit balances using the partial balance method, where portions of the balance accrue interest at different interest rates, based on the configured interest rate tier. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Scheduled Deposit Interest Accrual](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_accrual_cpp_1912).

## [](#scheduled_deposit_interest_application_cpp_1913 "Copy link to heading")Scheduled Deposit Interest Application (CPP-1913)

Any accrued interest balance on an account is re-booked to the deposit balance on a periodic basis. The frequency at which interest is applied is configurable. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Scheduled Deposit Interest Application](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_application_cpp_1913).

## [](#inactivity_and_inactivity_fee_cpp_2031 "Copy link to heading")Inactivity and Inactivity Fee (CPP-2031)

The option to mark an account as inactive. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Inactivity and Inactivity Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#inactivity_and_inactivity_fee_cpp_2031).

## [](#dormancy_cpp_1911 "Copy link to heading")Dormancy (CPP-1911)

While the definition of dormant varies, this typically occurs when there has been no activity on the account (e.g. transactions) for an extended period of time. When an account is marked as dormant, transactions on the account are restricted until it is reactivated, and the charging of fees is paused.

For the complete description, configuration options and behaviour of this feature, see [Dormancy](/vault-core/5-9/EN/product_library/common_business_features/account#dormancy_cpp_1911).

## [](#deposit_interest_application_upon_account_closure_cpp_1967 "Copy link to heading")Deposit Interest Application upon Account Closure (CPP-1967)

The account closure process is initiated and managed by the bank. This feature supports this process by applying any interest that has been accrued when the Vault account status is set to \`pending closure'.

For the complete description, configuration options and behaviour of this feature, see [Deposit Interest Application upon Account Closure](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#deposit_interest_application_upon_account_closure_cpp_1967).

## [](#us_savings_account_cbf_associations "Copy link to heading")US Savings Account CBF Associations

Here, you can see the associations across Common Business Features in the US Savings account.

### [](#1_unlimited_fee_rebate_and_maximum_daily_transaction_limit_per_transaction_type_cbf_associations "Copy link to heading")1 Unlimited Fee Rebate and Maximum Daily Transaction Limit per Transaction Type CBF associations

-   Unlimited ATM Fee Rebates (CPP-1996)
    
-   Maximum Daily Transaction Limit per Transaction Type (CPP-2006)
    

#### [](#description "Copy link to heading")Description

When an ATM fee is charged on a customer withdrawal the fee amount may need to be handled separately to the withdrawal amount for available balance check for overdraft coverage and transaction limit checks.

#### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Maximum daily transaction limits with ATM Fee Rebates

 | 

**GIVEN** the customer account is eligible for the ATM Fee Rebate\*WHEN\* the ATM fee is posted to the customer account as the result of the transaction in an out-of-network ATM **THEN** the out-of-network ATM fee transaction does not count towards daily transaction limit checks

 |

## [](#us_savings_account_specific_requirements_cpp_2390 "Copy link to heading")US Savings Account Specific Requirements (CPP-2390)

### [](#purpose "Copy link to heading")Purpose

Aim of this section is to specify the acceptance criteria for the US Savings product.

### [](#1_monthly_maintenance_fee_waivers "Copy link to heading")1 Monthly Maintenance Fee Waivers

#### [](#description_2 "Copy link to heading")Description

The Monthly Maintenance Fee can be waived (not charged) under certain defined criteria that are specific to the US Savings Account product. If any of the criteria are met at the time when the fee is applied, the fee will be waived.

#### [](#configuration_options "Copy link to heading")Configuration Options

-   Minimum Balance Threshold - the Monthly Average Balance threshold that must be met in order to waive the Maintenance Fee.
    

#### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring Maintenance Fee Waiver

 | 

**GIVEN** a bank offers a product **WHEN** configuring a Maintenance Fee Waiver\*THEN\* the bank can configure whether it is enabled or disabled for all accounts

 |
| 

02

 | 

Configuring the Minimum Balance Threshold

 | 

**GIVEN** a bank offers a product **WHEN** configuring the waiver based on the Monthly Average Balance\*THEN\* the bank can define the Minimum Balance Threshold that must be met in order to waive the Maintenance Fee for all accounts

 |
| 

03

 | 

Configuring the Minimum Balance Threshold via Account Tiers

 | 

**GIVEN** a bank offers a product **WHEN** configuring the Minimum Balance Threshold via Account Tiers\*THEN\* the threshold defined via Account Tiers will take precedence over other defined values

 |
| 

04

 | 

Waiving based on the Monthly Average Balance (MAB)

 | 

**GIVEN** a customer has an account where the waiver based on the Monthly Average Balance is enabled\*WHEN\* the Monthly Average Balance is equal to or greater than the Minimum Balance Threshold at the time of Maintenance Fee application\*THEN\* the Monthly Maintenance Fee is waived

 |

#### [](#supplemental_information "Copy link to heading")Supplemental Information

Steps to calculate the Monthly Average Balance (MAB) are covered in [Minimum Balance Threshold and Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922) The threshold for each waiver can be configured per Account Tier see [Account Tiers](/vault-core/5-9/EN/product_library/common_business_features/account#account_tiers_cpp_1918)