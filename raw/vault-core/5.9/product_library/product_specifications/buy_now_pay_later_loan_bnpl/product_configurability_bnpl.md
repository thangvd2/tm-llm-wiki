---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/buy_now_pay_later_loan_bnpl/product_configurability_bnpl"
title: "Product configurability"
scraped_at: "2026-06-22T19:20:20.154Z"
images: 0
---

# Product configurability

A bank can configure the product to meet its particular needs by changing the parameters that are used during the execution of the Smart Contract. The Smart Contract includes these parameters but a bank can change them at any point while the account is open. Each parameter can have a default value and some parameters can have a minimum or maximum value which a bank can tailor to the requirements of a specific product.

-   Instance configuration level parameters have a value that is unique to a customer’s individual account. For example, in the mortgage, each customer may have a different principal set for their account so there is a corresponding instance parameter: `principal`
    
-   Template configuration level parameters are for use across a particular product. For example, a mortgage product shares the same denomination between customers, so there is a corresponding template parameter: `denomination`
    
-   Derived configuration level parameters have a value that is specific to a customer’s individual account and are programmatically generated from other parameters or data within the account. For example, a mortgage receiving an overpayment will trigger an automatic calculation for the corresponding derived configuration parameter: `overpayment_allowance_remaining`
    

## [](#account_definition_parameters "Copy link to heading")Account definition parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Loan Principal

 | 

`principal`

 | 

The agreed amount that the customer will borrow from the lender.

 | 

Instance

 |
| 

Deposit Account

 | 

`deposit_account`

 | 

The account to which the principal borrowed amount will be transferred.

 | 

Instance

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

Equated Instalment Amount

 | 

`equated_instalment_amount`

 | 

Expected Equated Instalment Amount.

 | 

Derived

 |
| 

Loan End Date

 | 

`loan_end_date`

 | 

Contractual end date of the loan.

 | 

Derived

 |
| 

Total Repayment Count

 | 

`total_repayment_count`

 | 

The total number of repayments to be made, at a monthly frequency unless a repayment\_frequency parameter is present.

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

Principal Paid To Date

 | 

`principal_paid_to_date`

 | 

Amount of the principal that has been repaid until now.

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

## [](#repayment_parameters "Copy link to heading")Repayment parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Repayment Frequency

 | 

`repayment_frequency`

 | 

The frequency at which repayments are made; can be weekly, fortnightly or monthly.

 | 

Instance

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

Repayment Period (days)

 | 

`repayment_period`

 | 

The number of days after the due amount calculation that the customer must repay the due amount by, before incurring penalties.

 | 

Template

 |
| 

Notification Period (days)

 | 

`notification_period`

 | 

The number of days prior to a repayment becoming due.

 | 

Template

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

Remaining Term

 | 

`remaining_term`

 | 

Remaining total term of the loan; in months or days.

 | 

Derived

 |

## [](#fee_and_penalty_parameters "Copy link to heading")Fee and penalty parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Late Repayment Fee

 | 

`late_repayment_fee`

 | 

Fee to apply due to late repayment.

 | 

Template

 |

## [](#internal_account_parameters "Copy link to heading")Internal account parameters

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Late Repayment Fee Income Account

 | 

`late_repayment_fee_income_account`

 | 

Internal account for late repayment fee income balance.

 | 

Template

 |

## [](#schedule_timing_parameters "Copy link to heading")Schedule timing parameters

chat\_bubble

The schedules for the product have been grouped and configured to run in the following order. This is just an example and can be amended, however please remember any changes could impact the logic of the contract:

1.  Due amount notification
    
2.  Due amount calculation
    
3.  Check overdue
    
4.  Check late repayment fee
    
5.  Check delinquency
    

   
| Parameter | Contract parameter | Description | Configuration level |
| --- | --- | --- | --- |
| 
Check Overdue Hour

 | 

`check_overdue_hour`

 | 

The hour of the day at which overdue is checked.

 | 

Template

 |
| 

Check Overdue Minute

 | 

`check_overdue_minute`

 | 

The minute of the hour at which overdue is checked.

 | 

Template

 |
| 

Check Overdue Second

 | 

`check_overdue_second`

 | 

The seconds of the minute at which overdue is checked.

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

Due Amount Notification Hour

 | 

`due_amount_notification_hour`

 | 

Hour of the day at which due notifications are sent.

 | 

Template

 |
| 

Due Amount Notification Minute

 | 

`due_amount_notification_minute`

 | 

Minute of the hour at which due notifications are sent.

 | 

Template

 |
| 

Due Amount Notification Second

 | 

`due_amount_notification_second`

 | 

Seconds of the minute at which due notifications are sent.

 | 

Template

 |
| 

Check Late Repayment Fee Hour

 | 

`check_late_repayment_fee_hour`

 | 

The hour of the day at which late repayment is checked.

 | 

Template

 |
| 

Check Late Repayment Fee Minute

 | 

`check_late_repayment_fee_minute`

 | 

The minute of the hour at which late repayment is checked.

 | 

Template

 |
| 

Check Late Repayment Fee Second

 | 

`check_late_repayment_fee_second`

 | 

The seconds of the minute at which late repayment is checked.

 | 

Template

 |