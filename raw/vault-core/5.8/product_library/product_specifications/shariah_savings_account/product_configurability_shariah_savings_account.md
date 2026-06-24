---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/shariah_savings_account/product_configurability_shariah_savings_account"
title: "Product configurability"
scraped_at: "2026-06-17T15:44:07.409Z"
images: 0
---

# Product configurability

A bank can configure the product to meet its particular needs by changing the parameters that are used during the execution of the Smart Contract. The Smart Contract includes these parameters but a bank can change them at any point while the account is open. Each parameter can have a default value and some parameters can have a minimum or maximum value which a bank can tailor to the requirements of a specific product.

-   Instance configuration level parameters have a value that is unique to a customer’s individual account.
    
    For example, in the Shariah Savings Account product, each customer has a different early closure fee set for their account so there is a corresponding instance parameter: `early_closure_fee`
    
-   Template configuration level parameters are for use across a particular product.
    
    For example, the Shariah Savings Account product shares the same denomination between customers so there is a corresponding template parameter: `denomination`
    

## [](#account_definition_parameters "Copy link to heading")Account definition parameters

    
| Parameter | Contract parameter | Description | Configuration level | Configured value |
| --- | --- | --- | --- | --- |
| 
Account Tier Names

 | 

`account_tier_names`

 | 

List of account tiers that map to a certain profit rate and minimum balance limit.

 | 

Instance

 | 

Example: `STANDARD`

 |
| 

Denomination

 | 

`denomination`

 | 

Currency in which the product operates.

 | 

Template

 | 

`MYR`

 |

## [](#profit_parameters "Copy link to heading")Profit parameters

chat\_bubble

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract: 1. Profit accrual 2. Profit application

    
| Parameter | Contract parameter | Description | Configuration level | Configured value |
| --- | --- | --- | --- | --- |
| 
Profit Application Day

 | 

`profit_application_day`

 | 

The day of the month on which to apply profit. If a day does not exist in the application month, this is on the last day of the month.

 | 

Instance

 | 

1

 |
| 

Profit Rate (per year)

 | 

`tiered_profit_rates`

 | 

The annual profit rate set on the account before tax and fees. This is based on balance ranges and the account tiers. It supports a positive or negative profit rate. We recommend only using a negative rate for the highest balance range, which is tier 3 in our default values.

 | 

Instance

 | 

Example:\`"STANDARD": {`"tier1": "0.0025",`"tier2": "0.0075",`"tier3": "0.015",`"tier4": "0.02",<br>"tier5": "0.025",`` `} ``

 |
| 

Deposit Profit Application Frequency

 | 

`profit_application_frequency`

 | 

The frequency at which to apply deposit profit. Valid values are: `monthly`, `quarterly` and `annually`

 | 

Template

 | 

monthly

 |
| 

Accrual Precision

 | 

`accrual_precision`

 | 

Precision needed for profit accruals.

 | 

Template

 |  |
| 

Application Precision

 | 

`application_precision`

 | 

Precision needed for profit application.

 | 

Template

 |  |
| 

Profit Accrual Days In A Year

 | 

`days_in_year`

 | 

The number of days in a year for profit accrual calculation. Valid values are `365`, `366`, `360` or “actual”. Otherwise, profit accrual will default to "actual".

 | 

Template

 | 

actual

 |
| 

Profit Accrual Hour

 | 

`profit_accrual_hour`

 | 

The hour of the day at which to accrue profit.

 | 

Template

 | 

`1`

 |
| 

Profit Accrual Minute

 | 

`profit_accrual_minute`

 | 

The minute of the hour to accrue profit.

 | 

Template

 | 

`0`

 |
| 

Profit Accrual Second

 | 

`profit_accrual_second`

 | 

The second of the minute at which to accrue profit.

 | 

Template

 | 

`0`

 |
| 

Profit Application Hour

 | 

`profit_application_hour`

 | 

The hour of the day at which to apply profit to an account (UTC).

 | 

Template

 | 

`1`

 |
| 

Profit Application Minute

 | 

`profit_application_minute`

 | 

The minute of the hour at which to apply profit to an account (UTC).

 | 

Template

 | 

`5`

 |
| 

Profit Application Second

 | 

`profit_application_second`

 | 

The second of the minute at which to apply profit to an account (UTC).

 | 

Template

 | 

`0`

 |

## [](#account_limit_parameters "Copy link to heading")Account limit parameters

    
| Parameter | Contract parameter | Description | Configuration level | Configured values |
| --- | --- | --- | --- | --- |
| 
Minimum Deposit Amount

 | 

`minimum_deposit`

 | 

The minimum amount that a customer can deposit into the main deposit account in a single transaction.

 | 

Instance

 | 

Example: 0.01

 |
| 

Maximum Deposit Amount

 | 

`maximum_deposit`

 | 

The maximum amount that a customer can deposit into the main deposit account in a single transaction.

 | 

Instance

 | 

Example: 1,000

 |
| 

Maximum Daily Deposit Amount

 | 

`maximum_daily_deposit`

 | 

The maximum amount that a customer can deposit into the main deposit account in a single calendar day (midnight to midnight).

 | 

Instance

 | 

Example: 1,000

 |
| 

Minimum Initial Deposit

 | 

`minimum_initial_deposit`

 | 

The minimum amount that a customer can deposit for the first deposit to the main deposit account.

 | 

Instance

 | 

Example: 20

 |
| 

Maximum Withdrawal Amount

 | 

`maximum_withdrawal`

 | 

The maximum amount that a customer can withdraw from the main deposit account in a single transaction.

 | 

Instance

 | 

Example: 1,000

 |
| 

Maximum Daily Withdrawal Amount

 | 

`maximum_daily_withdrawal`

 | 

The maximum amount that a customer can withdraw from the main deposit account in a single calendar day.

 | 

Instance

 | 

Example: 1,000

 |
| 

Payment Type Limits

 | 

`maximum_payment_type_withdrawal`

 | 

The maximum amount that a customer can withdraw for each payment type in a single transaction on the main deposit account.

 | 

Instance

 | 

Example: "DUITNOW\_QR": "50000","THIRD\_PARTY\_ON\_US": "50000","ATM\_IBFT\_SANS": "30000",

 |
| 

Daily Withdrawal Limit Per Tier

 | 

`tiered_daily_withdrawal_limits`

 | 

The daily withdrawal limits based on account tier. It defines the upper withdrawal limit that cannot be exceeded by Maximum Daily Withdrawal Amount. If above it, the contract will consider the tiered limit as valid.

 | 

Template

 | 

Example: \\{"UPPER\_TIER": \\{"ATM": "5000"}, "MIDDLE\_TIER": \\{"ATM": "2000"},"LOWER\_TIER": \\{"ATM": "1500"},}

 |
| 

Daily Withdrawal Limit Per Transaction Type

 | 

`daily_withdrawal_limit_by_transaction_type`

 | 

The maximum amount that can be withdrawn from an account over the current day by transaction type.

 | 

Instance

 | 

Example: \\{"ATM":"1000}

 |
| 

Maximum Balance Amount

 | 

`maximum_balance`

 | 

The maximum allowable deposit balance amount for the main deposit account. The product will reject deposits that breach this amount.

 | 

Instance

 | 

Example: 10,000

 |
| 

Minimum Balance threshold

 | 

`tiered_minimum_balance_threshold`

 | 

The minimum balance that a customer must maintain on the main deposit account.Reject if the net value of the posting instruction batch results in the account balance falling below the minimum threshold for the account tier.

 | 

Instance

 | 

Example: `"STANDARD": "10"`

 |

## [](#fee_parameters "Copy link to heading")Fee parameters

    
| Parameter | Contract parameter | Description | Configuration level | Configured values |
| --- | --- | --- | --- | --- |
| 
Early Closure Days

 | 

`early_closure_days`

 | 

The number of days that need to have completed in order to avoid an early closure fee, should the account close.

 | 

Instance

 | 

Example: `0`

 |
| 

Early Closure Fee

 | 

`early_closure_fee`

 | 

The fee to apply if the customer closes the main deposit account earlier than the defined period.

 | 

Instance

 | 

Example: `0.00`

 |
| 

Monthly Payment Type Withdrawal Limit Fee

 | 

`maximum_monthly_payment_type_withdrawal_limit`

 | 

The monthly fee to apply when the number of withdrawals from the main deposit account exceeds the defined limit per payment type within a calendar month.

 | 

Instance

 | 

Example: `"ATM_ARBM": {"fee": "0.50", "limit": "8"}`

 |
| 

Payment Type Flat Fee

 | 

`payment_type_flat_fee`

 | 

The flat fees to apply for a given payment type transaction made on the main deposit account.

 | 

Instance

 | 

Example: `"ATM_MEPS": "1", "ATM_VISAPLUS": "12"`

 |
| 

Payment Type Threshold Fee

 | 

`payment_type_threshold_fee`

 | 

The fee to apply when the payment amount from the main deposit account exceeds the threshold for the payment type.

 | 

Instance

 | 

Example: ```"DUITNOW_ACC": {"fee": "0.50", "threshold": "5000"},`"DUITNOW_PROXY": {"fee": "0.50", "threshold": "5000"},`"DUITNOW_QR": {"fee": "0.50", "threshold": "5000"},``"ATM_IBFT_SANS": {"fee": "0.15", "threshold": "5000"}```

 |

## [](#internal_account_parameters "Copy link to heading")Internal account parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Accrued Profit Payable Account

 | 

`accrued_profit_payable_account`

 | 

Internal account for accrued profit payable balance.

 | 

Template

 |
| 

Profit Paid Account

 | 

`profit_paid_account`

 | 

Internal account for profit paid balance.

 | 

Template

 |
| 

Early Closure Fee Income Account

 | 

`early_closure_fee_income_account`

 | 

Internal account for early closure fee income balance.

 | 

Template

 |
| 

Payment Type Fee Income Account

 | 

`payment_type_fee_income_account`

 | 

Internal account for payment type fee income balance.

 | 

Template

 |