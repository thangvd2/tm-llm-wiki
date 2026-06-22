---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/mortgage/product_configurability_mortgage"
title: "Product configurability"
scraped_at: "2026-06-22T19:21:07.530Z"
images: 0
---

# Product configurability

A bank can configure the product to meet its particular needs by changing the parameters that are used during the execution of the Smart Contract. The Smart Contract includes these parameters but a bank can change them at any point while the account is open. Each parameter can have a default value and some parameters can have a minimum or maximum value which a bank can tailor to the requirements of a specific product.

-   Instance configuration level parameters have a value that is unique to a customer’s individual account.For example, in the mortgage, each customer may have a different principal set for their account so there is a corresponding instance parameter: `principal`
    
-   Template configuration level parameters are for use across a particular product. For example, a mortgage product will share the same denomination between customers so there is a corresponding template parameter: `denomination`
    
-   Derived configuration level parameters have a value that is specific to a customer’s individual account and are programmatically generated from other parameters or data within the account. For example, a mortgage receiving an overpayment will trigger an automatic calculation for the corresponding derived configuration parameter: `overpayment_allowance_remaining`
    

## [](#account_definition_parameters "Copy link to heading")Account definition parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Mortgage Principal

 | 

`principal`

 | 

The agreed amount that the customer will borrow from the bank.

 | 

Instance

 |
| 

Deposit Account

 | 

`deposit_account`

 | 

The account that will receive the principal borrowed amount upon transfer.

 | 

Instance

 |
| 

Mortgage Term (months)

 | 

`total_repayment_count`

 | 

The agreed length of the mortgage in months.

 | 

Instance

 |
| 

Remaining Term In Months

 | 

`remaining_term`

 | 

Remaining total term of the mortgage in months.

 | 

Derived

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

## [](#balance_status_parameters "Copy link to heading")Balance status parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Total Outstanding Debt

 | 

`total_outstanding_debt`

 | 

Remaining total balance on this account including fees.

 | 

Derived

 |
| 

Remaining Principal

 | 

`total_remaining_principal`

 | 

Total remaining principal on this account.

 | 

Derived

 |
| 

Outstanding Payments

 | 

`outstanding_payments`

 | 

Unpaid dues, overdues and penalties on this account.

 | 

Derived

 |

## [](#interest_parameters "Copy link to heading")Interest parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Fixed Interest Rate (per year)

 | 

`fixed_interest_rate`

 | 

The fixed annual rate of the mortgage.

 | 

Instance

 |
| 

Variable Rate Adjustment

 | 

`variable_rate_adjustment`

 | 

Account level adjustment to add to the variable interest rate; positive, negative or zero values are valid.

 | 

Instance

 |
| 

Fixed-Rate Mortgage Term (months)

 | 

`fixed_interest_term`

 | 

The agreed length of the fixed-rate portion of the mortgage in months.

 | 

Instance

 |
| 

In Fixed Interest Period

 | 

`is_fixed_interest`

 | 

Whether this account is within the fixed interest period.

 | 

Derived

 |
| 

Variable Interest Rate (per year)

 | 

`variable_interest_rate`

 | 

The annual rate of the mortgage to apply after the fixed-rate term.

 | 

Template

 |
| 

Interest Accrual Precision

 | 

`accrual_precision`

 | 

Precision for interest accruals.

 | 

Template

 |
| 

Interest Application Precision

 | 

`application_precision`

 | 

Precision for interest fulfilment.

 | 

Template

 |
| 

Days in Year

 | 

`days_in_year`

 | 

Number of days in year

 | 

Template

 |
| 

Annual Interest Rate Floor

 | 

`annual_interest_rate_floor`

 | 

The minimum annual interest rate for a variable interest loan.

 | 

Template

 |
| 

Annual Interest Rate Cap

 | 

`annual_interest_rate_cap`

 | 

The maximum annual interest rate for a variable interest loan.

 | 

Template

 |

## [](#repayment_parameters "Copy link to heading")Repayment parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Due Amount Calculation Day

 | 

`due_amount_calculation_day`

 | 

The day of month on which repayment is due and that the customer should make monthly repayments. Valid values are between 1 and 28 (day 1 and day 28 of the month).

 | 

Instance

 |
| 

Interest-Only Mortgage Term (months)

 | 

`interest_only_term`

 | 

The agreed length of the interest-only portion of the mortgage (in months).

 | 

Instance

 |
| 

Next Repayment Date

 | 

`next_repayment_date`

 | 

The next scheduled repayment date.

 | 

Derived

 |
| 

Grace Period (days)

 | 

`grace_period`

 | 

The number of days after which the account becomes delinquent if the overdue amount and their penalties are not paid in full.

 | 

Template

 |
| 

Account Delinquency Flags

 | 

`delinquency_flag`

 | 

List of flag definition IDs to use for account delinquency.

 | 

Template

 |

## [](#fee_and_penalty_parameters "Copy link to heading")Fee and penalty parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Overpayment Fee Percentage

 | 

`overpayment_allowance_fee_percentage`

 | 

Percentage of overpaid principal to charge when exceeding the overpayment allowance for the mortgage.

 | 

Template

 |
| 

Late Repayment Fee

 | 

`late_repayment_fee`

 | 

Fee to apply due to late repayment.

 | 

Template

 |
| 

Penalty Interest Rate (per year)

 | 

`penalty_interest_rate`

 | 

The annual interest rate to apply to overdue payments.

 | 

Template

 |
| 

Penalty Includes Base Rate

 | 

`penalty_includes_base_rate`

 | 

Whether to add the base interest rate on top of the penalty interest rate.

 | 

Template

 |
| 

Penalty Compounds Overdue Interest

 | 

`penalty_compounds_overdue_interest`

 | 

If True, include both overdue interest and overdue principal in the penalty interest calculation. If False, only include overdue principal.

 | 

Template

 |
| 

Capitalise Penalty Interest

 | 

`capitalise_penalty_interest`

 | 

Determines if penalty interest is immediately added to Penalties (False) or accrued and capitalised at next due amount calculation.

 | 

Template

 |
| 

Early Repayment Fee

 | 

`early_repayment_fee`

 | 

Fee applied if the mortgage is completely repaid early. If this value is negative, the fee is calculated as the overpayment allowance fee percentage \* the total remaining principal. If this value is non-negative, it represents a flat fee to be applied.

 | 

Template

 |
| 

Overpayment Allowance Fee

 | 

`overpayment_allowance_fee`

 | 

Overpayment allowance fee charged on the current overpayment balance

 | 

Derived

 |
| 

Early Repayment Fee

 | 

`derived_early_repayment_fee`

 | 

Fee applied if the mortgage is completely repaid early. Calculated from the early\_repayment\_fee parameter.

 | 

Derived

 |
| 

Total Early Repayment Fee

 | 

`total_early_repayment_fee`

 | 

Combination of the overpayment allowance fee and the early repayment fee.

 | 

Derived

 |

## [](#overpayment_parameters "Copy link to heading")Overpayment parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Overpayment Allowance Percentage

 | 

`overpayment_allowance_percentage`

 | 

Percent of outstanding principal that a customer can repay in a year without incurring a charge.

 | 

Template

 |
| 

Overpayment Allowance Remaining

 | 

`overpayment_allowance_remaining`

 | 

Allowance remaining that a customer can overpay during this period without incurring a fee.

 | 

Derived

 |
| 

Overpayment Allowance Used This Period

 | 

`overpayment_allowance_used`

 | 

The overpayment allowance used in the current allowance period.

 | 

Derived

 |

## [](#internal_account_parameters "Copy link to heading")Internal account parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Accrued Interest Receivable Account

 | 

`accrued_interest_receivable_account`

 | 

The bank’s internal account for the accrued interest receivable balance.

 | 

Template

 |
| 

Interest Received Account

 | 

`interest_received_account`

 | 

The bank’s internal account for the interest received balance.

 | 

Template

 |
| 

Penalty Interest Receivable Account

 | 

`penalty_interest_received_account`

 | 

The bank’s internal account for the penalty interest received balance.

 | 

Template

 |
| 

Late Repayment Fee Income Account

 | 

`late_repayment_fee_income_account`

 | 

The bank’s internal account for the late Repayment Fee Income Balance.

 | 

Template

 |
| 

Overpayment Allowance Fee Income Account

 | 

`overpayment_allowance_fee_income_account`

 | 

The bank’s internal account for the overpayment allowance fee income balance.

 | 

Template

 |
| 

Capitalised Interest Received Account

 | 

`capitalised_interest_received_account`

 | 

The bank’s internal account for the capitalised interest received balance.

 | 

Template

 |
| 

Capitalised Interest Receivable Account

 | 

`capitalised_interest_receivable_account`

 | 

The bank’s internal account for the capitalised interest receivable balance.

 | 

Template

 |
| 

Early Repayment Fee Income Account

 | 

`early_repayment_fee_income_account`

 | 

Internal account for early repayment fee income balance

 | 

Template

 |

## [](#event_blocking_flag_parameters "Copy link to heading")Event-blocking flag parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Delinquency Blocking Flag

 | 

`delinquency_blocking_flags`

 | 

The list of flag definitions which block an account from becoming delinquent.

 | 

Template

 |
| 

Due Amount Blocking Flag

 | 

`due_amount_calculation_blocking_flags`

 | 

The list of flag definitions which block due amount transfers.

 | 

Template

 |
| 

Overdue Amount Calculation Blocking Flag

 | 

`overdue_amount_calculation_blocking_flags`

 | 

The list of flag definitions which block overdue amount transfers.

 | 

Template

 |
| 

Penalty Blocking Flag

 | 

`penalty_blocking_flags`

 | 

The list of flag definitions which block interest penalties.

 | 

Template

 |
| 

Repayment Blocking Flag

 | 

`repayment_blocking_flags`

 | 

The list of flag definitions which block repayments.

 | 

Template

 |

## [](#schedule_timing_parameters "Copy link to heading")Schedule timing parameters

chat\_bubble

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract: 1. Interest accrual 2. Due amount calculation

Check overpayment allowance and Check delinquency are not grouped as there is no reason to do so.

If the mortgage offset feature is enabled, then the following schedule order will be used. The offset mortgage overrides the interest schedules for all other supervised products in the following way: 1. Offset accrual - across all products, hardcoded to midnight 2. Interest application and Due amount calculation are merged and aligned to the mortgage parameters.

Other schedules and groups are not affected and will work as per the individual products.

Overriden supervisee schedules are still maintained so that they can resume gracefully if the accounts are disassociated from the plan.

For example: Consider an account with a quarterly interest application schedule and a desired application day of the 5th. The account is associated to a plan that overrides its supervisees' interest application schedule with a monthly schedule: We assume the account was created on 2023/01/02 and the account’s interest application schedule therefore next runs on 2023/04/05.

Suppose the plan’s monthly interest application schedule runs on the third of the month. On 2023/01/03, the plan schedule runs, during which the account checks 2023/04/05 is still 3 months away. As this is the case, no updates are made. On 2023/02/03, 2023/04/05 is no longer 3 months away, so the account’s schedule is updated to next run on 2023/05/05 (if no longer associated).

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Interest Accrual Hour

 | 

`interest_accrual_hour`

 | 

Hour at which the product starts the interest accrual schedule.

 | 

Template

 |
| 

Interest Accrual Minute

 | 

`interest_accrual_minute`

 | 

Minute at which the product starts the interest accrual schedule.

 | 

Template

 |
| 

Interest Accrual Second

 | 

`interest_accrual_second`

 | 

Second at which the product starts the interest accrual schedule.

 | 

Template

 |
| 

Check Delinquency Hour

 | 

`check_delinquency_hour`

 | 

Hour at which delinquency is checked.

 | 

Template

 |
| 

Check Delinquency Minute

 | 

`check_delinquency_minute`

 | 

Minute at which delinquency is checked.

 | 

Template

 |
| 

Check Delinquency Second

 | 

`check_delinquency_second`

 | 

Second at which delinquency is checked.

 | 

Template

 |
| 

Due Amount Calculation Hour

 | 

`due_amount_calculation_hour`

 | 

Hour at which the due amount is calculated.

 | 

Template

 |
| 

Due Amount Calculation Minute

 | 

`due_amount_calculation_minute`

 | 

Minute at which the due amount is calculated.

 | 

Template

 |
| 

Due Amount Calculation Second

 | 

`due_amount_calculation_second`

 | 

Second at which the due amount is calculated.

 | 

Template

 |
| 

Check Overpayment Allowance Hour

 | 

`check_overpayment_allowance_hour`

 | 

Hour at which the overpayment allowance is checked and if it has been exceeded, apply a fee.

 | 

Template

 |
| 

Check Overpayment Allowance Minute

 | 

`check_overpayment_allowance_minute`

 | 

Minute at which the overpayment allowance is checked and if it has been exceeded, apply a fee.

 | 

Template

 |
| 

Check Overpayment Allowance Second

 | 

`check_overpayment_allowance_second`

 | 

Second at which the overpayment allowance is checked and if it has been exceeded, apply a fee.

 | 

Template

 |