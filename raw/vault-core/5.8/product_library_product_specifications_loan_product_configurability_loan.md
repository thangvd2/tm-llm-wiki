---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/loan/product_configurability_loan"
title: "Product configurability"
scraped_at: "2026-06-17T05:36:45.620Z"
images: 0
---

# Product configurability

A bank can configure the product to meet its particular needs by changing the parameters that are used during the execution of the Smart Contract. The Smart Contract includes these parameters but a bank can change them at any point while the account is open.

-   Instance configuration level parameters have a value that is unique to a customer’s individual account.
    
    For example, in the Loan product, each customer can have a different principal set for their account so there is a corresponding instance parameter: `principal`
    
-   Template configuration level parameters are for use across a particular product.
    
    For example, a Loan product will share the same denomination between customers so there is a corresponding template parameter: `denomination`
    
-   Derived configuration level parameters have a value that is specific to a customer’s individual account and are programmatically generated, when requested, from other parameters or data within the account.
    

## [](#account_definition_parameters "Copy link to heading")Account definition parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Loan Principal

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

Loan Term (months)

 | 

`total_repayment_count`

 | 

The agreed length of the loan in months.

 | 

Instance

 |
| 

Amortise Upfront Fee

 | 

`amortise_upfront_fee`

 | 

Defines whether the product will amortise the upfront fee. If True, it adds the upfront fee to the principal. If False, it deducts the upfront fee from the principal.

 | 

Instance

 |
| 

Remaining Term In Months

 | 

`remaining_term`

 | 

Remaining total term of the loan in months.

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

Expected EMI

 | 

`equated_instalment_amount`

 | 

Expected EMI (Equated Monthly Instalment).

 | 

Derived

 |
| 

Top Up

 | 

`top_up`

 | 

When set to True, account product version upgrades are treated as a loan top up

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

Remaining Principal

 | 

`total_remaining_principal`

 | 

The total outstanding principal that the customer has not yet repaid.

 | 

Derived

 |
| 

Outstanding Payments

 | 

`total_outstanding_payments`

 | 

The unpaid dues, overdues and penalties on this account.

 | 

Derived

 |

## [](#interest_parameters "Copy link to heading")Interest parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Fixed Interest Rate (per annum)

 | 

`fixed_interest_rate`

 | 

The fixed annual rate of the loan.

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

Fixed-Rate Loan

 | 

`fixed_interest_loan`

 | 

Whether it is a fixed-rate loan; if set to False, the product uses a variable rate.

 | 

Instance

 |
| 

Interest Rest Type (daily or monthly)

 | 

`interest_accrual_rest_type`

 | 

The type of interest rest to apply to the loan (daily or monthly). Monthly rest accrues interest based on the principal balances at the start of the repayment period. NOTE: Capitalisation can increase the balance monthly rest loans accrue on. Daily rest accrues interest on the current outstanding principal balance as of that day.

 | 

Instance

 |
| 

Variable Interest Rate (per annum)

 | 

`variable_interest_rate`

 | 

The annual rate for a variable interest loan.

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

Interest Fulfilment Precision

 | 

`application_precision`

 | 

Precision for interest fulfilment.

 | 

Template

 |
| 

Penalty Compounds Overdue Interest

 | 

`penalty_compounds_overdue_interest`

 | 

Whether the penalty interest should compound overdue interest. Valid values are True or False; if True, include both overdue interest and overdue principal in the penalty interest calculation, or if False, only include overdue principal.

 | 

Template

 |
| 

Accrue Interest On Due Principal

 | 

`accrue_interest_on_due_principal`

 | 

Allows interest accrual on due principal. If true, interest is accrued on remaining principal and any due principal, else interest is only accrued on remaining principal. NOTE: Any overdue principal is handled separately.

 | 

Template

 |
| 

Variable Annual Interest Rate Cap (per annum)

 | 

`annual_interest_rate_cap`

 | 

The maximum annual interest rate for a variable interest loan.

 | 

Template

 |
| 

Variable Annual Interest Rate Floor (per annum)

 | 

`annual_interest_rate_floor`

 | 

The minimum annual interest rate for a variable interest loan.

 | 

Template

 |
| 

Interest Accrual Days In Year

 | 

`days_in_year`

 | 

The days in the year for interest accrual calculation. Valid values are "actual", "366", "365", "360"

 | 

Template

 |

## [](#repayment_parameters "Copy link to heading")Repayment parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Repayment Day

 | 

`due_amount_calculation_day`

 | 

The day of month on which repayment is due and that the customer should make monthly repayments. Valid values are between 1 and 31 (day 1 and day 31 of the month).

 | 

Instance

 |
| 

Repayment Holiday Impact Preference

 | 

`repayment_holiday_impact_preference`

 | 

Defines how to handle a repayment holiday on a loan as either:- Increase EMI but keep the term of the loan the same.- Increase term but keep the monthly repayments the same.

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

Overdue Date

 | 

`next_overdue_date`

 | 

The date on which the current due principal and interest will change to overdue if the customer does not repay them in full within the repayment period.

 | 

Derived

 |
| 

Total Early Repayment Amount

 | 

`total_early_repayment_amount`

 | 

The amount due for the customer to fully repay the loan, taking into account any repayment fees.

 | 

Derived

 |
| 

Grace Period (days)

 | 

`grace_period`

 | 

The number of days after which the account becomes delinquent if the customer does not repay the overdue amount and their penalties in full.

 | 

Template

 |
| 

Account Delinquency Flags

 | 

`delinquency_flag`

 | 

Flag definition ID to use for account delinquency.

 | 

Template

 |
| 

Amortisation Method

 | 

`amortisation_method`

 | 

The amortisation method. See **Repayments**. Options are:- Declining Principal- Flat Interest- Rule of 78- Interest Only- No Repayment- Minimum Repayment with Balloon Payment (at the end of the loan). Either: a fixed EMI each month + balloon payment of remaining principal and accrued interest, or a reduced EMI each month + fixed balloon payment

 | 

Template

 |
| 

Repayment Period (days)

 | 

`repayment_period`

 | 

The number of days to repay the due amount before the customer would incur penalties.

 | 

Template

 |

## [](#fee_and_penalty_parameters "Copy link to heading")Fee and penalty parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Upfront Fee

 | 

`upfront_fee`

 | 

A flat fee to charge a customer for opening an account.

 | 

Instance

 |
| 

Late Repayment Fee

 | 

`late_repayment_fee`

 | 

The penalty fee to apply when the account is in arrears due to late repayment.

 | 

Template

 |
| 

Penalty Interest Rate (per annum)

 | 

`penalty_interest_rate`

 | 

The annual penalty interest to apply to overdue payments/balances on top of regular interest when the account is in arrears due to late repayment.

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

Capitalise Late Repayment Fee

 | 

`capitalise_late_repayment_fee`

 | 

If True, late repayment fee added to principal. If False, repayable as separate fee.

 | 

Instance

 |
| 

Capitalise Penalty Interest

 | 

`capitalise_penalty_interest`

 | 

If True, penalty interest added to principal at the next repayment date. If False, repayable as separate fee.

 | 

Template

 |
| 

Overpayment Fee Rate

 | 

`overpayment_fee_rate`

 | 

Percentage fee charged on overpaid amount for overpayments.

 | 

Template

 |
| 

Early Repayment Flat Fee

 | 

`early_repayment_flat_fee`

 | 

Flat fee to charge for an early repayment. Typically this would be used instead of Early Repayment Fee Rate, otherwise they will both be added together.

 | 

Template

 |
| 

Early Repayment Fee Rate

 | 

`early_repayment_fee_rate`

 | 

This rate will be used to calculate a fee to be charged for an early repayment, calculated as a percentage of the remaining principal. Typically this would be used instead of Early Repayment Flat Fee, otherwise they will both be added together.

 | 

Template

 |

## [](#overpayment_parameters "Copy link to heading")Overpayment parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Overpayment Impact Preference

 | 

`overpayment_impact_preference`

 | 

Defines how to handle an overpayment on a loan, as either: - Reduce EMI but keep the term of the loan the same. - Reduce term but keep the monthly repayments the same.

 | 

Template

 |

## [](#balloon_payment_loan_parameters "Copy link to heading")Balloon payment loan parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Balloon Payment Days Delta

 | 

`balloon_payment_days_delta`

 | 

The number of days between the final repayment event and the balloon payment event.

 | 

Instance

 |
| 

Balloon Payment Amount

 | 

`balloon_payment_amount`

 | 

The balloon payment amount that the customer has chosen to pay on the balloon payment day. Setting this determines that the customer has chosen a fixed balloon payment.

 | 

Instance

 |
| 

Balloon Payment EMI

 | 

`balloon_emi_amount`

 | 

The fixed balloon EMI amount that the customer has chosen to pay each month. Setting this determines that the customer has chosen a fixed EMI payment.

 | 

Instance

 |
| 

Capitalise No Repayment Interest

 | 

`capitalise_no_repayment_accrued_interest`

 | 

Determines whether a no repayment balloon loan capitalises accrued interest. The valid values are daily, monthly or no\_capitalisation

 | 

Template

 |
| 

Expected Balloon Payment Amount

 | 

`expected_balloon_payment_amount`

 | 

The expected balloon payment amount that the customer is due to pay on the balloon payment date. This is only relevant for the following types of loans: `no_repayment`, `interest_only` and `minimum_repayment_with_balloon_payment`

 | 

Instance

 |

## [](#internal_account_parameters "Copy link to heading")Internal account parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Accrued Interest Receivable Account

 | 

`accrued_interest_receivable_account`

 | 

Internal account for accrued interest receivable balance.

 | 

Template

 |
| 

Interest Receivable Account

 | 

`interest_received_account`

 | 

Internal account for interest received balance.

 | 

Template

 |
| 

Penalty Interest Receivable Account

 | 

`penalty_interest_received_account`

 | 

Internal account for penalty interest received balance.

 | 

Template

 |
| 

Late Repayment Fee Income Account

 | 

`late_repayment_fee_income_account`

 | 

Internal account for late repayment fee income balance.

 | 

Template

 |
| 

Capitalised Interest Received Account

 | 

`capitalised_interest_received_account`

 | 

Internal account for capitalised interest received balance.

 | 

Template

 |
| 

Capitalised Interest Receivable Account

 | 

`capitalised_interest_receivable_account`

 | 

Internal account for capitalised interest receivable balance.

 | 

Template

 |
| 

Upfront Fee Income Account

 | 

`upfront_fee_income_account`

 | 

Internal account for upfront fee income balance.

 | 

Template

 |
| 

Capitalised Penalties Receivable Account

 | 

`capitalised_penalties_received_account`

 | 

Internal account for capitalised penalties received balance.

 | 

Template

 |
| 

Overpayment Fee Income Account

 | 

`overpayment_fee_income_account`

 | 

Internal account for overpayment fee income balance.

 | 

Template

 |
| 

Early Repayment Fee Income Account

 | 

`early_repayment_fee_income_account`

 | 

Internal account for early repayment fee income balance.

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

The list of flag definitions which block an account becoming delinquent.

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

Overdue Amount Blocking Flag

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

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract: 1. Interest accrual 2. Due amount calculation 3. Check overdue 4. Check delinquency 5. Balloon payment

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Accrue Interest Hour

 | 

`interest_accrual_hour`

 | 

The hour of the day at which the product starts the interest accrual schedule.

 | 

Template

 |
| 

Accrue Interest Minute

 | 

`interest_accrual_minute`

 | 

The minute of the day at which the product starts the interest accrual schedule.

 | 

Template

 |
| 

Accrue Interest Second

 | 

`interest_accrual_second`

 | 

The second of the day at which the product starts the interest accrual schedule.

 | 

Template

 |
| 

Check Overdue Hour

 | 

`check_overdue_hour`

 | 

The hour of the day at which the product checks for an overdue balance.

 | 

Template

 |
| 

Check Overdue Minute

 | 

`check_overdue_minute`

 | 

The minute of the day at which the product checks for an overdue balance.

 | 

Template

 |
| 

Check Overdue Second

 | 

`check_overdue_second`

 | 

The second of the day at which the product checks for an overdue balance.

 | 

Template

 |
| 

Check Delinquency Hour

 | 

`check_delinquency_hour`

 | 

The hour of the day at which the product checks for account delinquency.

 | 

Template

 |
| 

Check Delinquency Minute

 | 

`check_delinquency_minute`

 | 

The minute of the day at which the product checks for account delinquency.

 | 

Template

 |
| 

Check Delinquency Second

 | 

`check_delinquency_second`

 | 

The second of the day at which the product checks for account delinquency.

 | 

Template

 |
| 

Repayment Hour

 | 

`due_amount_calculation_hour`

 | 

The hour of the day at which the product calculates the due amount for repayment.

 | 

Template

 |
| 

Repayment Minute

 | 

`due_amount_calculation_minute`

 | 

The minute of the day at which the product calculates the due amount for repayment.

 | 

Template

 |
| 

Repayment Second

 | 

`due_amount_calculation_second`

 | 

The second of the day at which the product calculates the due amount for repayment.

 | 

Template

 |