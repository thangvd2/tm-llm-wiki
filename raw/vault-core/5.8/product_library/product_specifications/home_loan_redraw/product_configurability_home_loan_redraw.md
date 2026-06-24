---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/home_loan_redraw/product_configurability_home_loan_redraw"
title: "Product configurability"
scraped_at: "2026-06-17T15:43:30.323Z"
images: 0
---

# Product configurability

A bank can configure the product to meet its particular needs by changing the parameters that are used during the execution of the Smart Contract. The Smart Contract includes these parameters but a bank can change them at any point while the account is open. Each parameter can have a default value and some parameters can have a minimum or maximum value which a bank can tailor to the requirements of a specific product.

-   Instance configuration level parameters have a value that is unique to a customer’s individual account. For example, in the mortgage, each customer may have a different principal set for their account so there is a corresponding instance parameter: `principal`
    
-   Template configuration level parameters are for use across a particular product. For example, a mortgage product will share the same denomination between customers so there is a corresponding template parameter: `denomination`
    
-   Derived configuration level parameters have a value that is specific to a customer’s individual account, at a given point in time, and are programmatically generated from other parameters or data within the account when requested. For example, when there is change in account state such as during a loan repayment, the corresponding derived configuration parameter is changed if subsequently requested: `total_outstanding_payments`
    

## [](#account_definition_parameters "Copy link to heading")Account definition parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Home Loan Principal

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

Remaining Term In Months

 | 

remaining\_term

 | 

Remaining total term of the loan in months

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
| 

Due Amount Calculation Day

 | 

`due_amount_calculation_day`

 | 

The day of the month that the monthly due amount calculations takes place on. This day must be between day 1 and day 28 of the month.

 | 

Instance

 |
| 

Total Repayment Count

 | 

`total_repayment_count`

 | 

The total number of repayments to be made, at a monthly frequency unless a repayment\_frequency parameter is present

 | 

Instance

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

Total Remaining Principal

 | 

`total_remaining_principal`

 | 

Total remaining principal on this account.

 | 

Derived

 |
| 

Total Outstanding Payments

 | 

`total_outstanding_payments`

 | 

Unpaid dues, overdues and penalties on this account.

 | 

Derived

 |
| 

Available Redraw Funds

 | 

`available_redraw_funds`

 | 

Total available redraw funds

 | 

Derived

 |

## [](#interest_parameters "Copy link to heading")Interest parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
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

Variable Interest Rate (per year)

 | 

`variable_interest_rate`

 | 

The annual rate of the mortgage to apply after the fixed-rate term.

 | 

Template

 |
| 

Accrual Precision

 | 

`accrual_precision`

 | 

Precision for interest accruals.

 | 

Template

 |
| 

Application Precision

 | 

`application_precision`

 | 

Precision for interest fulfilment.

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
| 

Days In Year

 | 

`days_in_year`

 | 

The days in the year for profit accrual calculation. Valid values are "actual", "365", "366", "360". Any invalid values will default to "actual".

 | 

Template

 |

## [](#repayment_parameters "Copy link to heading")Repayment parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Next Repayment Date

 | 

`next_repayment_date`

 | 

The next scheduled repayment date.

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

## [](#schedule_timing_parameters "Copy link to heading")Schedule timing parameters

chat\_bubble

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract: 1. Interest accrual 2. Due amount calculation

   
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