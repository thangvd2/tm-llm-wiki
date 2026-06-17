---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/product_specifications/shariah_savings_account/features"
title: "Product features"
scraped_at: "2026-06-17T05:05:42.574Z"
images: 0
---

# Product features

The following business features are available with this Product.

## [](#1_balance_tiers "Copy link to heading")1\. Balance tiers

The balance tiers allows the bank to define one or more tiers with minimum and maximum balance range to use to determine the profit rate together with the Account Tiers.

chat\_bubble

A tier’s upper bound is implicitly defined as the next tier’s lower bound. The last tier has an unbounded max limit.

### [](#example_shariah_savings_account_balance_tiers_and_ranges "Copy link to heading")Example Shariah Savings Account balance tiers and ranges

 
| Tier | Balance range |
| --- | --- |
| 
Tier 1

 | 

0 to < 10,000

 |
| 

Tier 2

 | 

10,000 to < 25,000

 |
| 

Tier 3

 | 

25,000 to < 50,000

 |
| 

Tier 4

 | 

50,000 to <100,000

 |
| 

Tier 5

 | 

100,000 and higher

 |

## [](#2_account_tiers_and_tiered_profit_rates "Copy link to heading")2\. Account tiers and tiered profit rates

An account tier is a configurable parameter that allows the bank to have predefined parameter values depending on the tier. Banks could also choose to implement different account types similar to tiers concept (such as a children’s account, youth account, pensioner’s account or silver, gold, platinum).

In the current Shariah Savings Account, only one account tier is defined: STANDARD. The parameters currently defined against this account tier are tiered profit rate and minimum balance threshold.

### [](#minimum_balance_threshold_and_tiered_profit_rate_per_account_tier_for_shariah_savings_account "Copy link to heading")Minimum balance threshold and tiered profit rate per account tier for Shariah Savings Account

      
| Tier | Minimum balance threshold | Tier 1 profit rate0 -10,000 | Tier 2 profit rate10,000 - 25,000 | Tier 3 profit rate25,000 - 50,000 | Tier 4 profit rate50,000 - 100,000 | Tier 5Above 100,000 |
| --- | --- | --- | --- | --- | --- | --- |
| 
STANDARD

 | 

100

 | 

0.25%

 | 

0.75%

 | 

1.5%

 | 

2%

 | 

2.5%

 |

## [](#3_profit "Copy link to heading")3\. Profit

### [](#3_1_deposit_profit "Copy link to heading")3.1 Deposit profit

The Shariah Savings Account product enables a customer to earn profit on their balance. The product performs a profit accrual daily at default time of 01:00:00 (you can configure this time) on the account balance (Main Deposit balance) as of 23:59:59.

The product has a number of configuration options which you can choose to adjust, including:

-   Profit rate - on a per [balance tier and account tier basis](/vault-core/5-9/EN/product_library/product_specifications/shariah_savings_account)
    
-   Deposit profit - accrue daily and apply monthly option.
    
-   Time and date to apply profit (from the current default of 01:05:00)
    

If customers choose to close their account before the profit application date, then they forfeit the daily profit that has been accrued but not yet applied.

`DAYS_IN_YEAR` is the parameter which determines the number of days in a year, for example 365 or "actual" (366 for 2020). The current Shariah Savings Account is configured with `DAYS_IN_YEAR` as "actual".

The accrued profit is rounded-up to two decimal places and added to the accrual pot of the main account during profit calculation.

chat\_bubble

Shariah Products explicitly forbid the Bank or the Customer, respectively, to pay or to receive interest (by whatever means or name called) on any amount due or payable to another party.

#### [](#use_cases "Copy link to heading")Use cases

-   *Given* a Shariah Savings Account has an annual profit rate of 3% (0.03) and an account balance of 1,000 MYR
    
-   *When* the daily profit rate accrues on the balance
    
-   *Then* the `accrued_profit_payable_account` increases by daily profit rate) \* \_(total\_balance for example: 0.03/365) \_ (1,000 = 0.082\*
    

#### [](#how_profit_is_calculated_on_tiered_deposit_accounts "Copy link to heading")How profit is calculated on tiered deposit accounts

There are two methods banks use to calculate profit on tiered accounts:

-   Whole balance method - the bank pays profit on the whole balance at the highest tier reached.
    
-   Partial balance method - the bank pays a different profit rate for each tier of the balance.
    

The Shariah Savings Account uses the partial balance method.

##### [](#example_daily_profit_calculation_on_tiered_deposit_accounts "Copy link to heading")Example daily profit calculation on tiered deposit accounts

In this example the daily profit calculations are on accounts with the following details:

-   *Given* an account balance of 200,000 GBP
    
    -   and days in a year is 365
        
    
-   *Then* the calculation for the daily profit amount is as per the tier settings.
    

Total daily profit for a 200,000 GBP balance = - Partial balance method = 11 GBP - Whole balance method = 13.70 GBP

      
| Tier | From | To | Range size | Profit rate x | Daily profit amountPartial balance method | Daily profit amountWhole balance method |
| --- | --- | --- | --- | --- | --- | --- |
| 
Tier 1

 | 

0

 | 

10,000

 | 

10,000

 | 

0.25%

 | 

0.07

 | 

200,000 x (2.5% / 3.65)

 |
| 

Tier 2

 | 

10,000

 | 

25,000

 | 

15,000

 | 

0.75%

 | 

0.31

 | 

As above

 |
| 

Tier 3

 | 

25,000

 | 

50,000

 | 

25,000

 | 

1.50%

 | 

1.03

 | 

As above

 |
| 

Tier 4

 | 

50,000

 | 

100,000

 | 

50,000

 | 

2.00%

 | 

2.74

 | 

As above

 |
| 

Tier 5

 | 

100,000

 | 

200,000

 | 

100,000

 | 

2.50%

 | 

6.85

 | 

As above

 |

### [](#3_2_profit_application "Copy link to heading")3.2 Profit application

The product applies accrued profit to the account balance on day 1 of every month at 01:05:00 and at a precision of two decimal places by default. It also offers the flexibility to change the day, frequency and precision of application in the product configuration. If the profit application day is a holiday, then the profit is credited to the account on the next business day.

Customers can choose to close their accounts before the profit application date but, if they do, they will forfeit the daily profit that has accrued but not yet been applied.

### [](#3_3_configurable_profit_application_frequency "Copy link to heading")3.3 Configurable profit application frequency

The default configuration of the product is to apply accrued profit to the account balance on a monthly basis. It offers the option to change this to every quarter (quarterly) or year (annually) in the product configuration.

## [](#4_account_limits "Copy link to heading")4\. Account limits

The Shariah Savings Account product has a number of configurable limits which enable a bank to govern deposits and withdrawals on the Main Deposit Account.

### [](#4_1_deposit_limit_configurations "Copy link to heading")4.1 Deposit limit configurations

  
| Account limit | Description | Frequency |
| --- | --- | --- |
| 
Minimum deposit amount

 | 

The minimum amount to deposit into the account (main) in a single transaction.

 | 

Per transaction

 |
| 

Maximum deposit amount

 | 

The maximum amount to deposit into the account (main) in a single transaction.

 | 

Per transaction

 |
| 

Maximum daily deposit

 | 

The maximum amount to deposit into the account (main) in a calendar day (midnight to midnight).

 | 

Daily (midnight to midnight)

 |
| 

Minimum initial deposit

 | 

The minimum amount for the first deposit to the Main Deposit Account.

 | 

First transaction

 |

The product supports the following configurations:

-   Minimum deposit amount limit - optionally specify the minimum amount that a customer can deposit into the Main Deposit Account in a single transaction. The contract checks and rejects any credit posting with an amount that is less than the minimum deposit amount.
    
-   Maximum deposit amount limit - optionally specify the maximum amount that a customer can deposit into the Main Deposit Account in a single transaction. The contract checks for any credit posting amount that is more than the maximum deposit amount.
    
-   Maximum daily deposit limit - optionally specify limits for the maximum amount that a customer can deposit into the Main Deposit Account in a calendar day (midnight to midnight). The contract checks for any credit posting that would exceed the maximum daily deposit limit and rejects such postings.
    

The profit application posting is not subject to these deposit limit validations.

### [](#4_2_withdrawal_limit_configuration "Copy link to heading")4.2 Withdrawal limit configuration

  
| Account limit | Description | Frequency |
| --- | --- | --- |
| 
Maximum withdrawal amount

 | 

The maximum amount that a customer can withdraw from the Main Deposit Account in a single transaction.

 | 

Per transaction

 |
| 

Maximum daily withdrawal

 | 

The maximum allowable amount that a customer can withdraw from the Main Deposit Account in a calendar day.

 | 

Daily (midnight to midnight)

 |
| 

Payment type limits

 | 

The maximum allowable amount for each payment type in a single transaction on the Main Deposit Account.

 | 

Per transaction

 |

The product supports the following configurations:

-   Maximum withdrawal amount limit - optionally specify the maximum amount that a customer can withdraw from the Main Deposit Account in a single transaction. The contract checks and rejects any debit posting amount that is more than the maximum withdrawal amount.
    
-   Maximum daily withdrawal limit - optionally specify limits for net movement of money out of the Main Deposit Account for a calendar day (midnight to midnight). The contract checks for any debit posting that would exceed the maximum daily withdrawal limit and rejects such postings.
    

### [](#4_3_balance_limit_configurations "Copy link to heading")4.3 Balance limit configurations

  
| Account limit | Description | Frequency |
| --- | --- | --- |
| 
Tiered minimum balance threshold

 | 

The minimum balance that a customer must maintain on the Main Deposit Account. The product will reject an outgoing transaction if it would result in the balance falling below this threshold.

 | 

Per transaction

 |
| 

Maximum balance amount

 | 

The maximum deposit balance amount for the Main Deposit Account. The product rejects any deposits that breach this amount.

 | 

Daily

 |

The product supports the configuration of the maximum balance limit to specify the maximum amount that the Main Deposit Account can hold. The contract checks for any posting that would exceed the maximum balance limit.

### [](#4_4_overrides "Copy link to heading")4.4 Overrides

The product supports a configuration to override the deposit, withdrawal and balance limits by setting the `force_override` option to `true` in the posting instruction batch details. This skips any checks, allowing the posting to go through.

## [](#5_fees "Copy link to heading")5\. Fees

Shariah Savings Account fee types

  
| Fee | Description | Frequency |
| --- | --- | --- |
| 
Early closure fee

 | 

The fee to charge if the Main Deposit Account is closed earlier than the defined period.

 | 

n/a

 |
| 

Payment type flat fee

 | 

The flat fees to apply for a given payment type transaction made on the Main Deposit Account.

 | 

Per transaction

 |
| 

Payment type threshold fee

 | 

Fees to apply when the payment amount from the Main Deposit Account exceeds the threshold for the payment type.

 | 

Per transaction

 |
| 

Monthly payment type withdrawal limit fees

 | 

The fee to charge monthly when the number of withdrawals from the Main Deposit Account exceeds the defined limit per payment type within the calendar month.

 | 

Monthly

 |

### [](#5_1_early_closure_fee "Copy link to heading")5.1 Early closure fee

The product supports configuring a flat fee if the customer closes the Main Deposit Account within the number of days defined in the parameter "Early closure days". This is the length of time (measured in the number of days) that a customer must keep their account open before closing it, in order to avoid an early closure fee.

### [](#5_2_payment_type_flat_fee "Copy link to heading")5.2 Payment type flat fee

The product supports configuring a fee to apply depending on the payment type tagged to the transactions made on the Main Deposit Account.

#### [](#example_payment_type_flat_fee_configuration "Copy link to heading")Example payment type flat fee configuration:

 
| Payment type | Fees |
| --- | --- |
| 
`ATM_MEPS`

 | 

1

 |
| 

`ATM_VISAPLUS`

 | 

12

 |

#### [](#use_cases_2 "Copy link to heading")Use cases

-   *Given* a Shariah Savings Account has a balance of 8,000 MYR
    
    -   and the bank charges a fee of 1 MYR for MEPS transactions at an ATM
        
    
-   *When* the customer makes an instant bank transfer at an ATM (ATM\_MEPS) for 1,500 MYR
    
-   *Then* the `payment_type_fee_income_account` account balance increases by 1.
    

### [](#5_3_payment_type_threshold_fee "Copy link to heading")5.3 Payment type threshold fee

The product supports configuring a fee to apply when the transaction amount on the Main Deposit Account exceeds the defined threshold for the payment type.

#### [](#example_payment_type_threshold_fee_and_limit_configuration "Copy link to heading")Example payment type threshold fee and limit configuration:

  
| Payment type | Threshold amount limit | Fees |
| --- | --- | --- |
| 
`DUITNOW_PROXY`

 | 

5,000

 | 

0.50

 |
| 

`ATM_IBFT_SANS`

 | 

5,000

 | 

0.15

 |

#### [](#use_cases_3 "Copy link to heading")Use cases

##### [](#applying_a_payment_type_threshold_fee "Copy link to heading")Applying a payment type threshold fee

-   *Given* a Shariah Savings Account has a balance of 8,000 MYR
    
    -   and the bank charges a fee of 11 MYR for every IBFT transaction that is made at an ATM
        
    -   and charge an additional 0.15 MYR if the transaction amount is more than 5,000 MYR
        
    
-   *When* the customer makes an instant bank transfer at an ATM (`ATM_IBFT_SANS`) for 6,000 MYR
    
-   *Then* the `payment_type_fee_income_account` account balance increases by 11.15.
    
    -   (`ATM_IBFT_SANS` flat fee of 11 MYR + `ATM_IBFT_SANS` threshold fee of 0.15 MYR)
        
    

### [](#5_4_monthly_payment_type_withdrawal_limit_fees "Copy link to heading")5.4 Monthly payment type withdrawal limit fees

The product supports the configuration to apply a fee when the number of withdrawals from the Main Deposit Account exceeds the defined limit for the associated payment type within a calendar month.

#### [](#example_monthly_payment_type_withdrawal_fee_and_limit_configuration "Copy link to heading")Example monthly payment type withdrawal fee and limit configuration:

  
| Payment type | Limit | Fee |
| --- | --- | --- |
| 
`ATM_ARBM`

 | 

8

 | 

0.50

 |

#### [](#use_cases_4 "Copy link to heading")Use cases

-   *Given* a Shariah Savings Account has a balance of 8,000 MYR
    
    -   and the bank will charge a fee of 0.50 MYR for every withdrawal the customer makes after making 8 withdrawals in a month
        
    
-   *When* the customer makes ATM withdrawals at an ARBM ATM for 3 consecutive days
    
-   *Then* the `payment_type_fee_income_account` account balance should remain unchanged.
    
-   *Given* a Shariah Savings Account has a balance of 8,000 MYR
    
    -   and the bank will charge a fee of 0.50 MYR for every withdrawal the customer makes after making 8 withdrawals in a month
        
    -   and the customer has already made 8 withdrawals in the last 15 days at ARBM ATMs
        
    
-   *When* the customer makes an ATM withdrawal at an ARBM ATM within the same month
    
-   *Then* the `payment_type_fee_income_account` account balance increases by 0.50 MYR.
    
-   *Given* a Shariah Savings Account has a balance of 8,000 MYR
    
    -   and the bank will charge a fee of 0.50 MYR for every withdrawal the customer makes after making 8 withdrawals in a month
        
    -   and the customer has already made 8 withdrawals in the in the previous month at ARBM ATMs
        
    
-   *When* the customer makes an ATM withdrawal on day 2 of the next month at an ARBM ATM
    
-   *Then* the `payment_type_fee_income_account` account balance remains.