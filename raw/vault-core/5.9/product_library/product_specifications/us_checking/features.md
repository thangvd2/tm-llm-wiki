---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/us_checking/features"
title: "Product features"
scraped_at: "2026-06-22T19:21:25.829Z"
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

If the overdraft protection feature is enabled for the US Checking account, then the following schedule order will be used. The overdraft protection overrides the interest schedules for all other supervised products in the following way:

1.  Sweep event across all products, hardcoded to midnight
    
2.  Interest accrual across all products, aligned to the US Checking account parameters
    
3.  Interest application across all products, aligned to the US Checking account parameters
    

Other schedules and groups are not affected and will work as per the individual products.

Overriden supervisee schedules are still maintained so that they can resume gracefully if the accounts are disassociated from the plan.

For example: Consider an account with a quarterly interest application schedule and a desired application day of the 5th. The account is associated to a plan that overrides its supervisees' interest application schedule with a monthly schedule: We assume the account was created on 2023/01/02 and the account’s interest application schedule therefore next runs on 2023/04/05.

Suppose the plan’s monthly interest application schedule runs on the third of the month. On 2023/01/03, the plan schedule runs, during which the account checks 2023/04/05 is still 3 months away. As this is the case, no updates are made. On 2023/02/03, 2023/04/05 is no longer 3 months away, so the account’s schedule is updated to next run on 2023/05/05 (if no longer associated).

   
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

Toggles partial payments for inactivity fee.

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

Tiered Daily Withdrawal Limits

 | 

`tiered_daily_withdrawal_limits`

 | 

The daily withdrawal limits based on account tier. It defines the upper withdrawal limit that cannot be exceeded by Maximum Daily Withdrawal Amount. If above it, the contract will consider the tiered limit as valid

 | 

No

 |
| 

Overdraft Coverage List

 | 

`excluded_overdraft_coverage_transaction_types`

 | 

Transaction types specifically excluded from utilising the overdraft limit. Unless specifically opted-in to do so. Expects a string representation of a JSON list.

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

Deposit Threshold By Tier

 | 

`deposit_threshold_by_tier`

 | 

The deposit threshold by account tier.This is used as the minimum deposit amount for the WAIVE\_FEE\_CONDITION.

 | 

No

 |
| 

Capitalise Accrued Interest On Account Closure

 | 

`capitalise_accrued_interest_on_account_closure`

 | 

If true, on account closure accrued interest that has not yet been applied will be applied to a customer account. If false, the accrued interest will be forfeited.

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
| 

Overdraft Protection Sweep Fee

 | 

`odp_sweep_fee`

 | 

The fee to be charged to process the sweeping of funds.

 | 

Yes

 |
| 

Overdraft Protection Sweep Fee Income Account

 | 

`odp_sweep_fee_income_account`

 | 

The internal account for overdraft protection sweep fee income balance.

 | 

Yes

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

Overdraft Coverage Enabled

 | 

`overdraft_coverage_opted_in`

 | 

Defines whether the customer has opted-in to allow the excluded transactions to utilise the overdraft limit.

 | 

Yes

 |
| 

Arranged Overdraft Amount

 | 

`arranged_overdraft_amount`

 | 

An agreed amount which the customer may use to borrow funds.

 | 

Yes

 |
| 

Unarranged Overdraft Amount

 | 

`unarranged_overdraft_amount`

 | 

An additional borrowing amount which may be used to validate balance checks when going beyond the agreed borrowing limit.

 | 

Yes

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

### [](#derived_parameters "Copy link to heading")Derived Parameters

These are set by the product - specifically logic within the Smart Contract

-   and cannot be directly updated.
    

   
| Name | Parameter Name | Description | Optional |
| --- | --- | --- | --- |
| 
Active Account Tier Name

 | 

`active_account_tier_name`

 | 

Currently active account tier name of the account.

 | 

No

 |

## [](#permitted_primary_denomination_cpp_1908 "Copy link to heading")Permitted Primary Denomination (CPP-1908)

Configuring the primary denomination in which the product can transact. Transactions which are not denominated in the primary denomination are rejected if the product only supports a single currency.

For the complete description, configuration options and behaviour of this feature, see [Permitted Primary Denomination](/vault-core/5-9/EN/product_library/common_business_features/currency_and_denomination#permitted_primary_denomination_cpp_1908).

## [](#account_tiers_cpp_1918 "Copy link to heading")Account Tiers (CPP-1918)

Account tiers define the configurations of one or more features available on the product. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

For the complete description, configuration options and behaviour of this feature, see [Account Tiers](/vault-core/5-9/EN/product_library/common_business_features/account#account_tiers_cpp_1918).

## [](#inactivity_and_inactivity_fee_cpp_2031 "Copy link to heading")Inactivity and Inactivity Fee (CPP-2031)

The option to mark an account as inactive. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Inactivity and Inactivity Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#inactivity_and_inactivity_fee_cpp_2031).

## [](#dormancy_cpp_1911 "Copy link to heading")Dormancy (CPP-1911)

While the definition of dormant varies, this typically occurs when there has been no activity on the account (e.g. transactions) for an extended period of time. When an account is marked as dormant, transactions on the account are restricted until it is reactivated, and the charging of fees is paused.

For the complete description, configuration options and behaviour of this feature, see [Dormancy](/vault-core/5-9/EN/product_library/common_business_features/account#dormancy_cpp_1911).

## [](#minimum_balance_threshold_and_fee_cpp_1922 "Copy link to heading")Minimum Balance Threshold and Fee (CPP-1922)

To support products that require accounts to hold a minimum deposit to avoid charging a minimum balance fee. The minimum balance fee is applied when the Monthly Average Balance (MAB) for an account is not above a configured threshold.

For the complete description, configuration options and behaviour of this feature, see [Minimum Balance Threshold and Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922).

## [](#maximum_daily_transaction_limit_per_transaction_type_cpp_2006 "Copy link to heading")Maximum Daily Transaction Limit per Transaction Type (CPP-2006)

A daily limit placed on the sum of each type of debit transaction. If there is a transaction that would result in one of the limits being breached, then that transaction is rejected. Note that if the product supports Account Tiers, the limits set on the account are validated against the limits defined on the tier assigned to the account to ensure the account limits do not exceed those defined by the tier. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Maximum Daily Transaction Limit per Transaction Type](/vault-core/5-9/EN/product_library/common_business_features/deposits_withdrawals#minimum_withdrawal_amount_per_transaction_cpp_1976).

## [](#scheduled_deposit_interest_accrual_cpp_1912 "Copy link to heading")Scheduled Deposit Interest Accrual (CPP-1912)

Daily interest accrual model for deposit balances using the partial balance method, where portions of the balance accrue interest at different interest rates, based on the configured interest rate tier. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Scheduled Deposit Interest Accrual](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_accrual_cpp_1912).

## [](#scheduled_deposit_interest_application_cpp_1913 "Copy link to heading")Scheduled Deposit Interest Application (CPP-1913)

Any accrued interest balance on an account is re-booked to the deposit balance on a periodic basis. The frequency at which interest is applied is configurable. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Scheduled Deposit Interest Application](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#scheduled_deposit_interest_application_cpp_1913).

## [](#arranged_overdraft_cpp_1916 "Copy link to heading")Arranged Overdraft (CPP-1916)

An overdraft can be arranged upfront with a customer prior to its utilisation. A limit is agreed upon, and any debit transactions in violation of this limit will be rejected. If the limit is updated to a value that is less than the overdrawn amount, then all subsequent debit transactions are rejected until the overdrawn amount is brought to a level less than the limit.

For the complete description, configuration options and behaviour of this feature, see [Arranged Overdraft](/vault-core/5-9/EN/product_library/common_business_features/overdraft#arranged_overdraft_cpp_1916).

## [](#overdraft_coverage_cpp_1917 "Copy link to heading")Overdraft Coverage (CPP-1917)

This feature defines which transaction types are not covered by the Arranged Overdraft without customer opt-in for Overdraft Coverage. Customers who do not opt-in would not be able to utilise the assigned overdraft limit for the transaction types that the bank has specified.

For the complete description, configuration options and behaviour of this feature, see [Overdraft Coverage](/vault-core/5-9/EN/product_library/common_business_features/overdraft#overdraft_coverage_cpp_1917).

## [](#overdraft_protection_cpp_2213 "Copy link to heading")Overdraft Protection (CPP-2213)

The Overdraft Protection (ODP) feature allows a customer to link one savings account within the same bank to their Checking Account, where this linked account serves as a source of funds if the customer exceeds the available balance on their Checking Account - the utilisation of these funds are prioritised over the utilisation of the standard overdraft limit.

For the complete description, configuration options and behaviour of this feature, see [Overdraft Protection](/vault-core/5-9/EN/product_library/common_business_features/overdraft#overdraft_protection_cpp_2213).

## [](#unlimited_atm_fee_rebates_cpp_1996 "Copy link to heading")Unlimited ATM Fee Rebates (CPP-1996)

This feature concerns the unlimited ATM Fee Rebate configuration and application to cover the fees applied when customers transact in out-of-network ATMs.

An ATM Fee Rebate is a refund of fees charged by another bank or ATM network for using their ATMs. Some banks offer this feature as a way to encourage customers to use their own accounts and ATM networks.

For the complete description, configuration options and behaviour of this feature, see [Fees](/vault-core/5-9/EN/product_library/common_business_features/fees#unlimited_atm_fee_rebates_cpp_1996).

## [](#monthly_maintenance_fee_cpp_1921 "Copy link to heading")Monthly Maintenance Fee (CPP-1921)

The monthly maintenance fee - also known as the monthly service fee - is typically charged for holding an account and the provision of services that accompany the account, such as online banking, debit card usage, and ATM access. The specific amount of the fee and the services it covers can vary depending on the bank and the type of deposit account. Note that this feature is applicable to funds denominated in the Primary Denomination of the account.

For the complete description, configuration options and behaviour of this feature, see [Monthly Maintenance Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#monthly_maintenance_fee_cpp_1921).

## [](#paper_statement_fee_cpp_1991 "Copy link to heading")Paper Statement Fee (CPP-1991)

This feature concerns the application of a monthly fee for paper statements, which is charged to customers who choose to receive them.

For the complete description, configuration options and behaviour of this feature, see [Paper Statement Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#paper_statement_fee_cpp_1991).

## [](#deposit_interest_application_upon_account_closure_cpp_1967 "Copy link to heading")Deposit Interest Application upon Account Closure (CPP-1967)

The account closure process is initiated and managed by the bank. This feature supports this process by applying any interest that has been accrued when the Vault account status is set to \`pending closure'.

For the complete description, configuration options and behaviour of this feature, see [Deposit Interest Application upon Account Closure](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation#deposit_interest_application_upon_account_closure_cpp_1967).

## [](#us_checking_account_cbf_associations "Copy link to heading")US Checking Account CBF Associations

Here, you can see the associations across Common Business Features (CBF) in the US Checking Account.

### [](#1_scheduled_fees_collection_hierarchy_cbf_associations "Copy link to heading")1 Scheduled Fees Collection Hierarchy CBF associations

-   Monthly Maintenance Fee (CPP-1921)
    
-   Minimum Balance Threshold and Fee (CPP-1922)
    
-   Inactivity and Inactivity Fee (CPP-2031)
    
-   Paper Statement Fee (CPP-1991)
    

#### [](#description "Copy link to heading")Description

When multiple fees apply on an account, there is a defined order that they are applied.

The Scheduled Fees Collection Hierarchy follows the below order:

1.  Maintenance Service Fee: This is a recurring fee that banks charge for the basic upkeep of the account. It’s often the first fee to be collected because it’s a standard charge that applies to all account holders who don’t meet certain criteria (like maintaining a minimum balance or having a certain number of transactions).
    
2.  Minimum Balance Fee: This fee is charged when account holders don’t maintain the required minimum balance. Since this fee can be directly related to the maintenance service fee (in that avoiding one can sometimes help you avoid the other), it’s often collected next.
    
3.  Inactivity Fee: This fee is charged when there’s no activity in the account for a specified period. It’s a penalty for not using the account, and since it’s conditional (i.e., it doesn’t apply to all account holders), it might be collected after the more standard fees.
    
4.  Paper Statement Fee: This fee is typically charged when customers opt to receive paper statements instead of electronic ones. Since it’s a service-based fee and not directly related to the core functioning of the account, it might be collected last.
    

#### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Order fees are applied

 | 

**GIVEN** an account is open **AND** multiple types of fees are set on the account **WHEN** fees are applied\*THEN\* fee application follows the scheduled fees collection hierarchy below: 1. Maintenance Service Fee 2. Minimum Balance Fee Inactivity Fee Paper Statement Fee

 |

### [](#2_unlimited_fee_rebate_and_maximum_daily_transaction_limit_per_transaction_type_and_overdraft "Copy link to heading")2 Unlimited Fee Rebate and Maximum Daily Transaction Limit per Transaction Type and Overdraft

Protection CBF associations

-   Unlimited ATM Fee Rebates (CPP-1996)
    
-   Maximum Daily Transaction Limit per Transaction Type (CPP-2006)
    
-   Overdrfat Protection (CPP-2213)
    

#### [](#description_2 "Copy link to heading")Description

When an ATM fee is charged on a customer withdrawal the fee amount may need to be handled separately to the withdrawal amount for available balance and transaction limit checks.

#### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Available balance checks when the ATM Fee Rebate is enabled

 | 

**GIVEN** the customer account is eligible for the ATM Fee Rebate\*WHEN\* the ATM fee is posted to the customer account as the result of the transaction in an out-of-network ATM **AND** the customer has ATM Fee Rebates enabled on their account **THEN** the rebatable fee amount is not considered in the available balance checks

 |
| 

02

 | 

Available balance checks when the ATM Fee Rebate is disabled

 | 

**GIVEN** the customer account is eligible for the ATM Fee Rebate\*WHEN\* the ATM fee is posted to the customer account as the result of the transaction in an out-of-network ATM **AND** the customer has ATM Fee Rebates disabled on their account **THEN** the rebatable fee amount is considered in the available balance checks

 |
| 

03

 | 

Maximum daily transaction limits with ATM Fee Rebates

 | 

**GIVEN** the customer account is eligible for the ATM Fee Rebate\*WHEN\* the ATM fee is posted to the customer account as the result of the transaction in an out-of-network ATM **THEN** the out-of-network ATM fee transaction does not count towards daily transaction limit checks

 |

## [](#us_checking_account_specific_requirements_cpp_2391 "Copy link to heading")US Checking Account Specific Requirements (CPP-2391)

### [](#purpose "Copy link to heading")Purpose

Aim of this section is to specify the acceptance criteria for the US Checking Account product.

### [](#1_monthly_maintenance_fee_waivers "Copy link to heading")1 Monthly Maintenance Fee Waivers

#### [](#description_3 "Copy link to heading")Description

The Monthly Maintenance Fee can be waived (not charged) under certain defined criteria that are specific to the US Checking Account product. If any of the criteria are met at the time when the fee is applied, the fee will be waived.

#### [](#configuration_options "Copy link to heading")Configuration Options

-   Minimum Balance Threshold - the Monthly Average Balance threshold that must be met in order to waive the Maintenance Fee.
    
-   Minimum Deposit Amount Threshold - the monthly direct deposit amount threshold that must be met in order to waive the Maintenance Fee. Direct deposits in this scenario are automatic
    

#### [](#business_feature_behaviour_3 "Copy link to heading")Business Feature Behaviour

  
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

Configuring the Minimum Deposit Amount Threshold

 | 

**GIVEN** a bank offers a product **WHEN** configuring the waiver based on the Minimum Deposit Balance\*THEN\* the bank can define the Minimum Deposit Amount Threshold that must be met in order to waive the Maintenance Fee for all accounts

 |
| 

04

 | 

Configuring the Minimum Deposit Amount Threshold via Account Tiers

 | 

**GIVEN** a bank offers a product **WHEN** configuring the Minimum Deposit Amount Threshold via Account Tiers\*THEN\* the threshold defined via Account Tiers will take precedence over other defined values

 |
| 

05

 | 

Configuring the Minimum Balance Threshold via Account Tiers

 | 

**GIVEN** a bank offers a product **WHEN** configuring the Minimum Balance Threshold via Account Tiers\*THEN\* the threshold defined via Account Tiers will take precedence over other defined values

 |
| 

06

 | 

Waiving based on the Monthly Average Balance (MAB)

 | 

**GIVEN** a customer has an account where the waiver based on the Monthly Average Balance is enabled\*WHEN\* the Monthly Average Balance is equal to or greater than the Minimum Balance Threshold at the time of Maintenance Fee application\*THEN\* the Monthly Maintenance Fee is waived

 |
| 

07

 | 

Waiving based on the Monthly Deposit Amount

 | 

**GIVEN** a customer has an account where the waiver based on the Monthly Deposit Amount enabled\*WHEN\* the sum of direct deposits posted to the account throughout the month is equal to or greater than the Minimum Deposit Amount Threshold\*AND\* the month evaluated to aggregate deposits is calculated as a month-long period backward on the Maintenance Fee Application Day with the exception of that day itself **THEN** the Monthly Maintenance Fee is waived

 |
| 

08

 | 

Only direct deposits are eligible for waiving based on the Monthly Deposit Amount

 | 

**GIVEN** a customer has an account with Maintenance Fee waiver based on the Monthly Deposit Amount\*WHEN\* the eligibility for Maintenance Fee waiving is assessed **THEN** the product only aggregates deposits which are tagged as "direct deposit"

 |

#### [](#supplemental_information "Copy link to heading")Supplemental Information

Steps to calculate the Monthly Average Balance (MAB) are covered in [Minimum Balance Threshold and Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922) The threshold for each waiver can be configured per Account Tier see [Account Tiers](/vault-core/5-9/EN/product_library/common_business_features/account#account_tiers_cpp_1918)

### [](#2_monthly_maintenance_fee "Copy link to heading")2 Monthly Maintenance Fee

#### [](#description_4 "Copy link to heading")Description

For deposit products with an overdraft, the following additional acceptance criteria should apply.

#### [](#business_feature_behaviour_4 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Applying the Maintenance Fee with insufficient funds and available overdraft limit while partial fee payment allowed

 | 

**GIVEN** the Maintenance Fee of 5 is chargeable on an account\*AND\* the insufficient account balance of 3 to cover the fee in full\*AND\* there is an overdraft limit of 500 available\*AND\* the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its' balance to zero **AND** the remaining fee amount of 2 is collected from the available overdraft limit

 |

### [](#3_minimum_balance_fee_with_overdraft "Copy link to heading")3 Minimum Balance Fee with Overdraft

#### [](#description_5 "Copy link to heading")Description

For deposit products with an overdraft, the following additional acceptance criteria should apply.

#### [](#business_feature_behaviour_5 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Minimum Balance Fee collection with insufficient funds and available overdraft limit while partial fee payment allowed

 | 

**GIVEN** the Minimum Balance Fee of 10 is chargeable on an account **AND** an insufficient account balance of 6 to cover the fee in full **AND** there is an overdraft limit of 500 available **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its balance to zero **AND** the remaining fee amount of 4 is collected from the available overdraft limit

 |

### [](#4_inactivity_fee_with_overdraft "Copy link to heading")4 Inactivity Fee with Overdraft

#### [](#description_6 "Copy link to heading")Description

For deposit products with an overdraft, the following additional acceptance criteria should apply.

#### [](#business_feature_behaviour_6 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Applying the Inactivity Fee with insufficient funds and available overdraft limit while partial fee payment allowed

 | 

**GIVEN** the Inactivity Fee of 10 is chargeable on an account **AND** the insufficient account balance of 3 to cover the fee in full **AND** there is an overdraft limit of 500 available **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its' balance to zero **AND** the remaining fee amount of 7 is collected from the available overdraft limit

 |