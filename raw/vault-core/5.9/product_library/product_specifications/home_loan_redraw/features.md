---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/home_loan_redraw/features"
title: "Product features"
scraped_at: "2026-06-22T19:20:42.255Z"
images: 1
---

# Product features

The following business features are available with this Product.

## [](#1_home_loan_disbursal "Copy link to heading")1\. Home Loan disbursal

After specifying the required principal amount and the nominated account into which to transfer the funds, the account is opened with the principal amount being transferred to the nominated account. The product supports principal disbursement only to another Vault account, not to an external account.

### [](#1_1_disbursal_at_account_opening "Copy link to heading")1.1 Disbursal at account opening

The Bank can open a loan account through a request to the Accounts API. The product automatically transfers the principal amount, specified by the customer when opening their account, to the nominated Vault account once it opens the account.

#### [](#use_cases "Copy link to heading")Use cases

##### [](#home_loan_disbursal_into_the_deposit_account "Copy link to heading")Home Loan disbursal into the deposit account

**Given** a customer has chosen to open a Variable Rate Home Loan Redraw - with a principal of 400,000 AUD

**When** the loan account opens

**Then** the customer account is opened with a balance of 400,000 AUD

-   and the loan start date is today
    
-   and the loan principal of 400,000 AUD are disbursed to a nominated Vault account.
    

## [](#2_redraw "Copy link to heading")2\. Redraw

The redraw facility allows customers to withdraw money from the additional payments (more than the required due amounts) that they have made, when they need it, from the Home Loan Redraw. The extra repayments enter the available Redraw funds and customers can withdraw up to their available redraw funds.

The available Redraw funds are used for interest calculations that help customers reduce their interest payments. Customers can perform deposits or withdrawals from their loan account through this Redraw facility.

chat\_bubble

Any additional payments throughout the home loan lifecycle or repayment that are more than the due amounts go into the available Redraw funds regardless of the amount.

The following scenarios are not covered in the current scope: \* Switching from a Redraw enabled home loan to a Redraw disabled home loan \* Early repayment using available redraw funds

### [](#use_cases_2 "Copy link to heading")Use cases

#### [](#customer_are_able_to_deposit_funds_into_the_home_loan_redraw_account "Copy link to heading")Customer are able to deposit funds into the Home Loan Redraw account

**Given** the customer has the Home Loan Redraw account

-   and the outstanding Principal is 100,000 AUD
    
-   and principal due is 0 AUD
    
-   and interest due is 0 AUD
    

**When** the customer deposits 1,000 AUD into the account

**Then** the available redraw funds are 1,000 AUD.

#### [](#any_repayment_more_than_due_amounts_will_go_into_available_redraw_funds_on_repayment_day "Copy link to heading")Any repayment more than due amounts will go into available redraw funds on Repayment Day

**Given** a customer has a Home Loan Redraw account

-   and the outstanding Principal is 100,000 AUD - and principal due is 1,000 AUD
    
-   and interest due is 30 AUD
    

**When** the customer repays 2,000 AUD on the Repayment Due Date

**Then** the remaining amount (2,000-1,000-30 = 970 AUD) goes into the available redraw funds.

#### [](#accept_withdrawal_transactions_if_within_available_redraw_funds "Copy link to heading")Accept withdrawal transactions if within available Redraw funds

**Given** a customer has an active Home Loan Redraw account

-   and the available Redraw funds are 2,000 AUD
    

**When** the customer withdraws 1000 AUD from the Home Loan account

**Then** the transaction is accepted and the available redraw funds are 1,000 AUD.

#### [](#reject_withdrawal_transactions_if_more_than_available_redraw_funds "Copy link to heading")Reject withdrawal transactions if more than available Redraw funds

**Given** a customer has an active Home Loan Redraw account

-   and the available Redraw funds are 2,000 AUD
    

**When** the customer withdraws 3,000 AUD from the loan account

**Then** the transaction is rejected.

#### [](#reject_withdrawal_transactions_in_non_configured_currencies "Copy link to heading")Reject withdrawal transactions in non-configured currencies

**Given** a customer has an active Home Loan Redraw account with primary currency of AUD and the available Redraw funds are 1,000 AUD

**When** the customer withdraws 100 SGD from the available redraw funds

**Then** the transaction is rejected.

#### [](#reject_deposit_transactions_in_non_configured_currencies "Copy link to heading")Reject deposit transactions in non-configured currencies

**Given** a customer has an active Home Loan Redraw account with primary currency of AUD

**When** the customer deposits 100 SGD into the home loan account

**Then** the transaction is rejected.

#### [](#accept_deposit_transactions_where_amount_is_more_than_outstanding_principal_on_repayment_day "Copy link to heading")Accept deposit transactions where amount is more than Outstanding Principal on Repayment Day

**Given** a customer has an active Home Loan Redraw account

-   and the outstanding principal is 100,000 AUD
    
-   and principal due is 1000 AUD and interest due is 30 AUD.
    

**When** customer repays 101,030 AUD into the home loan account on the repayment day

**Then** the transaction is accepted where due amounts (1,030 AUD) are paid off

-   and remaining 100,000 AUD goes into available Redraw funds
    
-   and the outstanding principal remains as 100,000 AUD.
    

#### [](#accept_transactions_where_customer_deposits_more_than_outstanding_principal_on_non_repayment_day "Copy link to heading")Accept transactions where customer deposits more than Outstanding Principal on Non-Repayment Day

**Given** a customer has an active Home Loan Redraw account

-   and the outstanding principal is 100,000 AUD
    
-   and principal due is 0 AUD
    
-   and interest due is 0 AUD
    
-   and available Redraw funds are 0 AUD.
    

**When** customer deposits 110,000 AUD into the home loan account a day after repayment due date

**Then** the transaction is accepted

-   and the available Redraw funds are 110,000 AUD
    
-   and the outstanding principal remains as 100,000 AUD.
    

## [](#3_repayments "Copy link to heading")3\. Repayments

A customer needs to repay the principal, and the associated interest in fixed monthly repayments, over an agreed period of time. The product uses the amortisation process to calculate a schedule of equal monthly repayments, designed to reduce the principal and associated interest to zero over the home loan term.

### [](#3_1_amortisation "Copy link to heading")3.1 Amortisation

During amortisation, the EMI (Equated Monthly Instalment) stays constant from account opening. The monthly repayments calculation includes the home loan amount and home loan term (in years), which is set during the account opening process, and the gross interest rate, which is specified in the product.

chat\_bubble

The recalculation of EMI during rate adjustment is not covered.

#### [](#financial_calculations "Copy link to heading")Financial calculations

The product calculates the monthly repayment amount using the following formula:

![Mortgage Amortisation Formula](_assets/inc_mortgage_amortisation_formula.BIfSj3_vaultcor.webp)

The product calculates the *monthly rate* and *no of periods* (number of periods) as follows:

-   *monthly rate* = monthly rate = round(gross interest rate / 12, 10)
    
-   *n periods* = loan term (in years) ×12
    

##### [](#example_monthly_repayment_calculation_using_the_amortisation_formula "Copy link to heading")Example monthly repayment calculation using the amortisation formula:

   
| Reference | Description | Calculation/Formula | Example |
| --- | --- | --- | --- |
| 
P

 | 

Principal mortgage amount

 | 

Property price - deposit amount

 | 

400,000

 |
| 

T

 | 

Home Loan term

 | 

The length of the home loan

 | 

30 years

 |
| 

F

 | 

Annual Interest rate

 | 

Interest rate when opening the loan product as agreed with the customer

 | 

1.75%

 |
| 

r

 | 

Monthly interest rate

 | 

F / 12:Divide the fixed annual rate (F) by 12 (the number of months in a year)

 | 

(1.75/100) / 12 = 0.001458

 |
| 

dr

 | 

Daily rate

 | 

F/365

 | 

round((1.75/100) / 365,10) = 0.000479452

 |
| 

n

 | 

Number of payments over the mortgage term

 | 

Multiply the number of years in your mortgage term by 12 (the number of months in a year)

 | 

30\*12 = 360

 |
| 

MR

 | 

Monthly repayment amount during the fixed period

 | 

P \* \[ r(1+r)^n / (((1+r)^n)-1) \]

 | 

400,000 \* \[0.001458 (1+0.001458)^360 / (((1+0.001458)^360)-1) \] = 1,428.97 GBP

 |

#### [](#use_cases_3 "Copy link to heading")Use cases

##### [](#calculating_the_first_repayment_amount_to_include_additional_accrued_interest "Copy link to heading")Calculating the first repayment amount to include additional accrued interest

**Given** a customer has an active Home Loan Redraw account - with Principal + Interest repayment option started on 5 January

-   and repayment set as day 25 of every month
    
-   and daily interest accrual happens for the same interest rate
    

**When** the bank calculates the first repayment amount

**Then** the product charges the first repayment on 25 February, which is inclusive of EMI (25 January to 24 February) and interest accrued from 5 January to 24 January.

###### [](#example "Copy link to heading")Example:

For a customer with a Home Loan start date of 5 January and the repayment date set as day 25 of every month, their EMI starts from 25 February. Their first repayment is inclusive of EMI (25 January to 24 February) + extra interest accrued from 5 January to 24 January. \* Home Loan start date = 5 January \* Monthly repayment date = day 25 of each month \* First EMI (25 February) = EMI (25 January to 24 February) + interest (5 to 24 January) \* Next EMI (25 March) = EMI (25 February to 24 March)

##### [](#calculating_subsequent_emis_when_annual_interest_rate_remains_unchanged "Copy link to heading")Calculating subsequent EMIs when annual interest rate remains unchanged

**Given** a customer has an active Home Loan Redraw account - with Principal and Interest repayment option started on 5 January

-   and repayment set as day 25 of every month
    
-   and Principal is 800,000 AUD
    
-   and variable interest rate is 2%
    
-   and term is 10 years (120 months)
    

**When** the bank calculates the subsequent EMIs for the customer

**Then** the product calculates the EMI as the same amount until the loan term: \* EMI = \[800,000 \* (0.02/12) \* (1+0.02/12)^120\] / \[(1+0.02/12)^120-1\] - = 7,361.08 AUD

### [](#3_2_repayment_hierarchy "Copy link to heading")3.2 Repayment hierarchy

The product has a defined repayment hierarchy which dictates the order that it receives and applies repayments to clear the customer’s debt across its different balances on the account.

When a customer repayment arrives, the product distributes it across these balances as per the repayment hierarchy. The order in which balances are paid down is as follows: 1. Due Principal 2. Due Interest

chat\_bubble

There is no overdue payment, penalty fee, and penalty interest. Any repayment more than the due amounts goes into the available redraw funds.

#### [](#use_cases_4 "Copy link to heading")Use cases

##### [](#active_loan_account_follows_the_specified_repayment_order "Copy link to heading")Active loan account follows the specified repayment order

**Given** a customer has an active Home Loan Redraw account

-   and has no available redraw funds
    

**When** the customer makes a payment on repayment due date

**Then** the account must accept the payment and apply it in the following order: 1. Deduct DUE PRINCIPAL first 2. Deduct DUE INTEREST only when (1) has balance of 0

-   and the remaining amount goes to available redraw funds.
    

### [](#3_3_monthly_repayments "Copy link to heading")3.3 Monthly repayments

During the account opening process, the customer nominates the day of the month on which they will make their monthly repayments. If the nominated day of the month is greater than or equal to the day of the month that the account is created then the first repayment date occurs on the following month. If the repayment date is set to less than the account creation date then the first repayment is not due until 1 month has passed. This is to ensure that at least one month has passed before the first repayment is due.

When a repayment is received, the contract checks whether the deposit is in the correct currency.

#### [](#use_cases_5 "Copy link to heading")Use cases

##### [](#repayment_date_greater_than_or_equal_to_the_account_creation_date "Copy link to heading")Repayment date greater than or equal to the account creation date

**Given** a customer has opened a loan account on 15 January

**When** the repayment day is set as day 15 of every month

**Then** the first repayment date is 15 February.

##### [](#first_repayment_date_is_not_due_until_1_month_or_more_has_passed "Copy link to heading")First repayment date is not due until 1 month or more has passed

**Given** a customer has opened a Home Loan Redraw account on 15 January

**When** the repayment day is day 10 of every month

**Then** the first repayment date is 10 March.

##### [](#bank_runs_repayment_day_schedule "Copy link to heading")Bank runs repayment day schedule

**Given** customer has an active Home Loan Redraw account

**When** the repayment day schedule runs

**Then** the accrued interest and principal become due.

##### [](#bank_runs_repayment_day_schedule_and_customer_has_redraw_funds_more_than_due_amounts "Copy link to heading")Bank runs repayment day schedule and customer has Redraw funds more than due amounts

**Given** customer has an active Home Loan Redraw account

-   and has available redraw funds
    

**When** the bank calculates the principal due and interest due

**Then** the Available Redraw funds are used to offset the due amounts

-   and the new Available Redraw funds = Available Redraw funds - Principal Due - Interest Due
    

##### [](#customer_has_available_redraw_funds_but_insufficient_to_cover_full_due_payments "Copy link to heading")Customer has available Redraw funds but insufficient to cover full due payments

**Given** customer has an active Home Loan Redraw account

-   and principal due is 500 AUD
    
-   and interest due is 50 AUD
    

**When** the available Redraw funds are 300 AUD

-   and the repayment schedule is triggered
    

**Then** principal due followed by interest due are deducted from the available Redraw funds

-   and the customer needs to make the outstanding payment of 250 AUD (principal due of 200 AUD and interest due of 50 AUD) on the repayment due date.
    

##### [](#customer_pay_the_due_amounts_on_repayment_day_and_there_is_no_redraw_balance "Copy link to heading")Customer pay the due amounts on repayment day and there is no redraw balance

**Given** customer has an active Home Loan Redraw account

-   and no available Redraw funds
    
-   and bank charged the principal due and interest due
    

**When** customer makes the exact repayment amount on the repayment day

-   and the repayment schedule is triggered
    

**Then** the repayments pay off the principal due followed by the interest due.

##### [](#customer_pays_more_than_the_due_amounts_on_repayment_day "Copy link to heading")Customer pays more than the due amounts on repayment day

**Given** customer has an active Home Loan Redraw account

-   and available redraw funds are 0 AUD
    
-   and bank charged the principal due of 500 AUD
    
-   and interest due of 50 AUD
    

**When** customer repays 2000 AUD on repayment day

-   and the repayment schedule is triggered
    

**Then** the amount pays off the principal due and interest due first

-   and the remaining amount (800 AUD) is credited into the available redraw funds, so available redraw funds = 800 AUD
    

##### [](#emi_remains_unchanged_even_when_customer_has_available_redraw_funds "Copy link to heading")EMI remains unchanged even when customer has available redraw funds

**Given** a customer has an active Home Loan Redraw account - with Principal and Interest repayment option started on 5 January

-   and repayment set as day 25 of every month
    
-   and Principal is 800,000 AUD
    
-   and variable interest rate is 2%
    
-   and term is 10 years (120 months)
    

**When** customer made payment more than due amounts last month

-   and has available redraw funds in this month
    

**Then** the EMI remains unchanged and as a result the customer pays more towards the principal and less towards the interest.

## [](#4_interest "Copy link to heading")4\. Interest

The interest rate of the Home Loan Redraw contract is defined by an interest rate at the account and product level. The stated interest rate comprises:

-   a variable interest rate parameter at the product level
    
-   a variable rate adjustment parameter, which is an account level adjustment added to the variable interest rate, can be positive, negative or zero
    

The Home Loan Redraw product performs a daily interest accrual and applies interest on a monthly basis on the repayment date.

chat\_bubble

With no late payment scenarios being considered, it also does not charge penalty interest on any late payment fees.

### [](#4_1_interest_accrual_and_application "Copy link to heading")4.1 Interest accrual and application

The Home Loan Redraw product performs an interest accrual daily at the configured time using balances as of 00:00:00. It rounds-up the accrued interest to five decimal places, and later applies the interest rounded half up to two decimal places on the repayment date.

#### [](#financial_calculations_2 "Copy link to heading")Financial calculations

The product calculates the daily accrual amount using the following formula:

daily accrued interest = annual gross interest rate / 365 days in a year \* principal

The annual gross interest (ROI) is the effective interest rate as of that day. This allows for any changes in variable rate scenarios.

#### [](#related_vault_objects "Copy link to heading")Related Vault objects

The contract uses the following addresses to accrue interest and apply interest respectively:

-   `ACCRUED_INTEREST_RECEIVABLE`, for the accrual of interest during normal repayment cycle, which is part of the EMI
    
-   `NON_EMI_ACCRUED_INTEREST_RECEIVABLE`, for the accrual of interest not within regular home loan repayment cycle (when cycle is more than one month)
    
-   `INTEREST_DUE`, for the application of interest rounded to two decimal places
    

#### [](#use_cases_6 "Copy link to heading")Use cases

##### [](#accrue_daily_interest_at_configured_time_when_customer_has_available_redraw_funds "Copy link to heading")Accrue daily interest at configured time when customer has available redraw funds

**Given** a customer has an active Home Loan Redraw account

-   and an Annual Rate of Interest (ROI) of 2.2%
    
-   and remaining capital being 4000 AUD
    

**When** the customer has a available redraw funds of 1000 AUD

-   and the daily interest accrual event is being triggered
    

**Then** the interest is accrued on a daily basis at the configured time

-   and the calculation based on the daily ROI and the remaining principal as of the current month: Interest accrued daily = Annual gross interest rate / 365 days in a year \* (principal - available redraw funds) = (0.022/365)\*(4000-1000)= 0.18082 AUD - The annual gross interest (ROI) is the effective interest rate as of that day. Daily interest rate = (Variable interest rate + Variable rate adjustment) / 365
    

##### [](#accrue_daily_interest_at_the_configured_time "Copy link to heading")Accrue daily interest at the configured time

**Given** a customer has an active Home Loan Redraw account

-   and an Annual Rate of Interest (ROI) of 2.2%
    
-   and remaining capital being 4000 AUD
    

**When** the product triggers the daily interest accrual event

**Then** the daily interest accrues on the remaining principal amount.

##### [](#configuring_the_interest_accrual_time "Copy link to heading")Configuring the interest accrual time

**Given** the bank has configured the Home Loan Redraw product to accrue interest at 22:30:00 (HH:MM:SS)

**When** the product triggers the daily interest accrual event at 22:30:00

**Then** interest is accrued using balances as of 00:00:00.

##### [](#applying_interest_on_the_repayment_day_at_the_configured_repayment_time "Copy link to heading")Applying interest on the repayment day at the configured repayment time

**Given** the bank has configured the Home Loan Redraw product to calculate repayment at 00:00:10 (HH:MM:SS) on the repayment day

-   and a customer with a home loan account has been accruing interest on a daily basis
    

**When** the repayment schedule is triggered at 00:00:10 on the repayment day

**Then** the product applies the interest accrued which is charged to customer as the interest due amount

-   and the principal due is calculated based on EMI less interest accrued during normal loan repayment cycle.
    

##### [](#no_interest_is_accrued_on_all_unpaid_balances "Copy link to heading")No interest is accrued on all unpaid balances

**Given** a customer has an active Home Loan Redraw account

-   and has been accruing interest on a daily basis
    

**When** the interest accrual schedule is triggered

**Then** no interest is accrued on all unpaid balances.