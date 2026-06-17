---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/common_business_features/fees"
title: "Fees"
scraped_at: "2026-06-17T05:37:28.524Z"
images: 0
---

# Fees

See also:

-   [Overdraft](/vault-core/5-8/EN/product_library/common_business_features/overdraft)
    
-   [Withdrawals](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#minimum_deposit_amount_per_transaction_cpp_1987)
    

## [](#monthly_maintenance_fee_cpp_1921 "Copy link to heading")Monthly Maintenance Fee (CPP-1921)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description "Copy link to heading")Description

The monthly maintenance fee - also known as the monthly service fee - is typically charged for holding an account and the provision of services that accompany the account, such as online banking, debit card usage, and ATM access. The specific amount of the fee and the services it covers can vary depending on the bank and the type of deposit account.

The monthly maintenance fee can also be optionally waived under certain criteria. These will be product specific and are defined against each of the products.

Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options "Copy link to heading")Configuration Options

-   Monthly Maintenance Fee: The fixed amount charged monthly. Note that this is configured by **Account Tier**.
    
-   Maintenance Fee Application Day: The day of the month on which the maintenance fee is applied. If the scheduled day falls on a date that doesn’t exist (e.g. 30th Feb), then it will be rescheduled to the previous day.
    
-   Maintenance Fee Application Time: The time at which the maintenance fee is applied on the maintenance fee application day.
    
-   Partial Fee Collection: If this option is enabled and the customer account has no funds available to cover the fee, a hold would be placed on the account to collect the fee once the account is funded.
    

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Maintenance Fee for a product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product **THEN** the bank is able to define the Maintenance Fee

 |
| 

02

 | 

Setting the Maintenance Fee on an account

 | 

**GIVEN** a bank offers a product **AND** the bank has configured a maintenance fee **WHEN** a customer opens an account **THEN** the Maintenance Fee is set on the account

 |
| 

03

 | 

Maintenance Fee Application Day

 | 

**GIVEN** the product has been configured to charge the Maintenance Fee **WHEN** an account is opened **THEN** the bank is able to define the day of the month on which the fee is applied for that account

 |
| 

04

 | 

Maintenance Fee Application Time

 | 

**GIVEN** the product has been configured to charge the Maintenance Fee at HH:MM:SS **WHEN** it is HH:MM:SS **THEN** the fee will be applied for all accounts on the fee application day

 |
| 

05

 | 

Scheduled application falls on day 29-31 of the month

 | 

**GIVEN** the fee is due to be applied on days 29, 30, or 31 of the month **WHEN** the day does not exist **THEN** the fee is applied on the previous day

 |
| 

06

 | 

Monthly Application of Maintenance Fee

 | 

**GIVEN** a customer has opened an account on the 1st of January **AND** the account incurs the Maintenance Fee with the Maintenance Fee Application Day defined as the first day of the month **WHEN** it is the first day of the following month (1st of February) **THEN** the Maintenance Fee will be charged to the customer account according to the Maintenance Fee Application Time

 |
| 

07

 | 

Configuring whether Maintenance Fee can be paid partially

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product’s Maintenance Fee **THEN** the bank is able to define whether Maintenance Fee can be collected partially from the accounts belonging to that product

 |
| 

08

 | 

Not applying the Maintenance Fee when there is less than a month between account opening and fee application day

 | 

**GIVEN** a customer has opened an account on the 15th of January **AND** the account incurs the Maintenance Fee with the Maintenance Fee Application Day defined as the first day of the month **WHEN** it is the 1st of February **THEN** the Maintenance Fee will not be charged as there is less than a month between the account opening day and the Maintenance Fee Application Day

 |
| 

09

 | 

Applying the Maintenance Fee when there is a month (or more) between account opening and fee application day

 | 

**GIVEN** a customer has opened an account on the 15th of January **AND** the account incurs the Maintenance Fee with the Maintenance Fee Day defined as the first day of the month **WHEN** it is the 1st of March **THEN** the Maintenance Fee will be charged to the customer account according to the Maintenance Fee Application Time

 |
| 

10

 | 

Applying the Maintenance Fee with insufficient funds

 | 

**GIVEN** the customer account qualifies for the Maintenance Fee of 5 **AND** the account balance is 3 which is insufficient to cover the fee **WHEN** the fee is applied **THEN** the bank collects the full fee amount **AND** the account balance becomes -2

 |
| 

11

 | 

Applying the Maintenance Fee with insufficient funds while partial fee payment allowed

 | 

**GIVEN** the Maintenance Fee of 5 is chargeable on an account **AND** the insufficient account balance of 3 to cover the fee in full **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its' balance to zero **AND** the remaining fee amount of 2 is held for the bank to collect when the account is funded

 |
| 

12

 | 

Removed

 |  |
| 

13

 | 

Collecting the remainder of the Maintenance Fee

 | 

**GIVEN** the customer account with a Maintenance Fee amount held for a future collection **WHEN** the funds are deposited in the customer account **THEN** the available funds are first allocated towards the fees awaiting collection

 |
| 

14

 | 

Restricting account closure with pending Maintenance Fee

 | 

**GIVEN** the account with a Maintenance Fee amount pending collection **WHEN** an attempt is made to close the account **THEN** the closure of the account shall not be allowed until the pending balance is cleared

 |
| 

15

 | 

Waiving the Maintenance Fee

 | 

**GIVEN** a product has defiend criteria for waiving the maintenance fee **WHEN** any one of the criteria are met **THEN** the fee should not be charged on the account

 |

## [](#inactivity_and_inactivity_fee_cpp_2031 "Copy link to heading")Inactivity and Inactivity Fee (CPP-2031)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description_2 "Copy link to heading")Description

The option to mark an account as inactive. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

Accounts could be marked as inactive in scenarios where an account has had no customer-initiated transactions or interactions within a certain period of time. This period can vary from one institution to another. Inactivity does not typically result in any adverse consequences for the account holder, but the institution can charge fees for maintaining an inactive account.

### [](#configuration_options_2 "Copy link to heading")Configuration Options

-   Account Flag: A Vault Flag is linked to the account in order to mark it as inactive. An inactivity flag enables the behaviour in this feature. The Flag should be named `ACCOUNT_INACTIVE` in order for this feature to be activated. The account is considered inactive only while the Flag is active.
    
-   Account Inactivity Fee: The fee charged while the account is marked as inactive. This is optional and can be set to zero if no fee is chargeable while the account is marked as inactive.
    
-   Inactivity Fee Application Day: The day of the month on which the fee will be applied. If the scheduled day falls on a date that does not exist (for example, 30 Feb) then it will be rescheduled to the previous day.
    
-   Inactivity Fee Application Time: The time at which the fee will be applied on the fee application day.
    
-   Partial Fee Collection (this applies to all fee types)
    

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Inactivity Fee Application Day for an account

 | 

**GIVEN** a bank offers a product **WHEN** an account is opened **THEN** the bank is able to define the day of the month on which the Inactivity Fee is applied for that account

 |
| 

02

 | 

Configuring Inactivity Fee Application Time of the product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the products Inactivity Fee Application Time **THEN** the bank is able to define the time at which the Inactivity Fee is applied for all accounts opened for the product

 |
| 

03

 | 

Configuring the Inactivity Fee amount of the product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product’s Inactivity Fee **THEN** the bank is able to define the Account Inactivity Fee amount for all accounts opened for the product

 |
| 

04

 | 

Configuring whether Inactivity Fee can be paid partially

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product’s Inactivity Fee **THEN** the bank is able to define whether Inactivity Fee can be collected partially from the accounts belonging to that product

 |
| 

05

 | 

Marking an account as inactive

 | 

**GIVEN** a customer account with an active status **WHEN** the bank marks account as inactive **THEN** the customer account is marked as inactive **AND** the Inactivity Fee is applied to the customer account as per the configured schedule

 |
| 

06

 | 

Reinstating an inactive account

 | 

**GIVEN** a customer account with an inactive status **WHEN** the bank marks account as active **THEN** the customer account is no longer marked as inactive **AND** the Inactivity Fee is no longer applied to the customer account as per the configured schedule

 |
| 

07

 | 

Setting the Inactivity Fee on the account

 | 

**GIVEN** a bank offers a product **AND** the bank has configured the product with Account Inactivity Fee **WHEN** a customer opens an account **THEN** the Account Inactivity Fee is set on account

 |
| 

08

 | 

Applying the Inactivity Fee with insufficient funds in the customer account

 | 

**GIVEN** the Inactivity Fee of 10 is chargeable on an account **AND** the insufficient account balance of 7 to cover the fee **WHEN** the fee is applied **THEN** the bank collects the full fee amount **AND** the account balance becomes -3

 |
| 

09

 | 

Applying the Inactivity Fee with insufficient funds while partial fee payment allowed

 | 

**GIVEN** the Inactivity Fee of 10 is chargeable on an account **AND** the insufficient account balance of 3 to cover the fee in full **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its' balance to zero **AND** the remaining fee amount of 7 is held for the bank to collect when the account is funded

 |
| 

10

 | 

Removed

 |  |
| 

11

 | 

Collecting the remainder of the pending Inactivity Fee

 | 

**GIVEN** an account with an Inactivity Fee amount held for a future collection **WHEN** the funds are deposited in the customer account **THEN** the available funds are first allocated towards the fees awaiting collection

 |
| 

12

 | 

Scheduled fee application falls on day 29-31 of the month

 | 

**GIVEN** the inactivity fee is due to be applied on day 29, 30, or 31 of the month **WHEN** the day does not exist **THEN** the fee is applied on the previous day

 |
| 

13

 | 

Restricting account closure with pending Inactivity Fee

 | 

**GIVEN** the account with an Inactivity Fee amount pending collection **WHEN** an attempt is made to close the account **THEN** the closure of the account shall not be allowed until the pending balance is cleared

 |

## [](#minimum_balance_threshold_and_fee_cpp_1922 "Copy link to heading")Minimum Balance Threshold and Fee (CPP-1922)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description_3 "Copy link to heading")Description

To support products that require accounts to hold a minimum deposit to avoid charging a minimum balance fee. The minimum balance fee is applied when the Monthly Average Balance (MAB) for an account is not above a configured threshold.

The MAB is calculated using the following formula:

Monthly Average Balance = Sum of Daily Balances over the month / Number of Days in the Month

Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_3 "Copy link to heading")Configuration Options

-   Minimum Balance Fee: The amount charged if the MAB falls below the configured Minimum Balance Threshold.
    
-   Minimum Balance Threshold: The minimum MAB that must be met in order to avoid the Minimum Balance Fee being charged. Note that this is configured by **Account Tier**.
    
-   MAB Sampling Time: The time of day at which the account balance is captured for the MAB calculation.
    
-   Minimum Balance Fee Application Day: The day of the month on which the fee will be applied for an account
    
-   Minimum Balance Fee Application Time: The time at which the fee will be applied on the fee application day.
    
-   Partial Fee Collection: If this option is enabled and the customer account has no funds available to cover the fee, a hold would be placed on the account to collect the fee once the account is funded.
    

### [](#business_feature_behaviour_3 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Minimum Balance Threshold for the product

 | 

**GIVEN** a bank offers a deposit product **WHEN** the bank configures the product **THEN** the bank is able to define the Minimum Balance Threshold for all accounts opened with this product

 |
| 

02

 | 

Configuring the Minimum Balance Fee for the product

 | 

**GIVEN** a bank offers a deposit product **WHEN** the bank configures the product **THEN** the bank is able to define the Minimum Balance Fee for all accounts opened with this product

 |
| 

03

 | 

Configuring the Products Minimum Balance Fee Application Day

 | 

**GIVEN** a bank offers a product **WHEN** an account is opened **THEN** the bank is able to define the day of the month on which the Minimum Balance Fee is applied for that account

 |
| 

04

 | 

Configuring the Minimum Balance Fee Application Time for the product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product’s Minimum Balance Fee Application Time **THEN** the bank is able to define the time at which the Minimum Balance Fee is applied for all accounts opened with this product

 |
| 

05

 | 

Configuring whether Minimum Balance Fee can be paid partially

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product’s Minimum Balance Fee **THEN** the bank is able to define whether the Minimum Balance Fee can be collected partially or fully from the accounts belonging to that product

 |
| 

06

 | 

Setting the Minimum Balance Threshold and Minimum Balance Fee for the account

 | 

**GIVEN** a bank offers a product that is configured **AND** the bank has defined the Minimum Balance Threshold **AND** the bank has defined the Minimum Balance Fee **WHEN** an account is opened **THEN** the Minimum Balance Threshold and Minimum Balance Fee are set on the account based on the product configuration

 |
| 

07

 | 

Monthly Average Balance (MAB) Calculation

 | 

**GIVEN** the Minimum Balance Threshold and the Minimum Balance Fee are set on an account **WHEN** the Minimum Balance Fee application schedule is due **THEN** the Monthly Average Balance is calculated based on the sum of sample daily balances from the last period

 |
| 

08

 | 

Monthly Average Balance below the Minimum Balance Threshold

 | 

**GIVEN** an account has been configured with a Minimum Balance Threshold and Minimum Balance Fee defined **AND** the Monthly Average Balance has been calculated for the last period **AND** the Monthly Average Balance on the account is less than the Minimum Balance Threshold set on the account **WHEN** the Minimum Balance Fee application schedule is due **THEN** the account is charged the Minimum Balance Fee

 |
| 

09

 | 

Minimum Balance Fee collection with insufficient funds

 | 

**GIVEN** the Minimum Balance Fee of 10 is chargeable on an account **AND** an insufficient account balance of 6 to cover the fee **WHEN** the fee is applied **THEN** the bank collects the full fee amount **AND** the account balance becomes -4

 |
| 

10

 | 

Minimum Balance Fee collection with insufficient funds while partial fee payment allowed

 | 

**GIVEN** the Minimum Balance Fee of 10 is chargeable on an account **AND** an insufficient account balance of 6 to cover the fee in full **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its balance to zero **AND** the remaining fee amount of 4 is held for the bank to collect when the account is funded

 |
| 

11

 | 

Removed

 |  |
| 

12

 | 

Collecting the remainder of the Minimum Balance Fee

 | 

**GIVEN** an account with a Minimum Balance Fee amount held for a future collection **WHEN** the funds are deposited in the customer account **THEN** the available funds are first allocated towards the fees awaiting collection

 |
| 

13

 | 

Monthly Average Balance greater or equal to the Minimum Balance Threshold

 | 

**GIVEN** an account has been configured with a Minimum Balance Threshold and Minimum Balance Fee defined **AND** the Monthly Average Balance has been calculated for the last period **WHEN** the Minimum Balance Fee application schedule is due **AND** the Monthly Average Balance on the account is equal to or greater than the Minimum Balance Threshold set on the customer account **THEN** the Minimum Balance Fee is not charged

 |
| 

14

 | 

Account balance is below the Minimum Balance Threshold the day after the calculation

 | 

**GIVEN** an account having the Minimum Balance Fee scheduled on the 15th day of the month **AND** the Monthly Average Balance up until 14 April has been above the Minimum Balance Threshold **WHEN** there is a purchase which would reduce the Monthly Average Balance of the account to below its Minimum Balance Threshold on 15 April (the final day of the Monthly Average Balance calculation) **THEN** the account does not receive a charge because 15 April is excluded from the calculation for that month

 |
| 

15

 | 

Applying the Minimum Balance Fee when there is less than a month between account opening and fee application day

 | 

**GIVEN** an account is opened on 15 January **AND** the Minimum Balance Fee Application Day defined as the first day of the month **WHEN** it is the 1st of February **AND** the Monthly Average Balance is less than the Minimum Balance Threshold **THEN** the Minimum Balance Fee will not be charged as there is less than a month between the account opening day and the Minimum Balance Fee Application Day

 |
| 

16

 | 

Applying the Minimum Balance Fee when there is a month (or more) between account opening and fee application day

 | 

**GIVEN** an account is opened on 15 January **AND** the Minimum Balance Fee Application Day defined as the first day of the month **WHEN** it is 1 March **AND** the Monthly Average Balance is less than the Minimum Balance Threshold **THEN** the Minimum Balance Fee will be charged as there is more than a month between the account opening day and the Minimum Balance Fee Application Day

 |
| 

17

 | 

Scheduled application falls on day 29-31 of the month

 | 

**GIVEN** the minimum balance fee is due to be applied on day 29, 30, or 31 of the month **WHEN** the day does not exist **THEN** the fee is applied on the previous day

 |
| 

18

 | 

Restricting account closure with pending Minimum Balance Fee

 | 

**GIVEN** the account with a Minimum Balance Fee amount pending collection **WHEN** an attempt is made to close the account **THEN** the closure of the account shall not be allowed until the pending balance is cleared

 |

## [](#number_of_withdrawals_permitted_and_excess_withdrawal_fee_cpp_1965 "Copy link to heading")Number of Withdrawals Permitted and Excess Withdrawal Fee (CPP-1965)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description_4 "Copy link to heading")Description

Setting a limit on the number of withdrawals that are permitted per calendar month. When the number of permitted withdrawals is exceeded, the subsequent withdrawals are rejected or an excess withdrawal fee is charged.

Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_4 "Copy link to heading")Configuration Options

-   Number of withdrawals permitted per month: Maximum number of withdrawals permitted per calendar month without a fee being charged.
    
-   Excess Withdrawal Fee: The fee charged on the account for each withdrawal that exceeds the limit.
    
-   Block Excess Withdrawals: When configured, if the number of permitted withdrawals is exceeded, any subsequent withdrawals are blocked. If this is not configured, the withdrawal is accepted and the Excess Withdrawal Fee will be applied.
    

### [](#business_feature_behaviour_4 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Number of Withdrawals Permitted per Month

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to set the maximum number of withdrawals permitted per month **AND** the bank is able to define the consequences of exceeding that limit as either blocking any further withdrawals or applying the Excess Withdrawal Fee for every additional withdrawal beyond the stipulated limit

 |
| 

02

 | 

Setting the Number of Withdrawals Permitted per Month on a deposit account

 | 

**GIVEN** a bank offers a deposit product **AND** has configured the maximum number of withdrawals permitted per month **WHEN** an account is opened **THEN** the maximum number of withdrawals permitted per month is set

 |
| 

03

 | 

Configuring the Excess Withdrawal Fee for a deposit product

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to define the amount of excess withdrawal fee charged

 |
| 

04

 | 

Setting the Excess Withdrawal Fee on an account

 | 

**GIVEN** a bank offers a deposit product **AND** the bank has configured the product **AND** the bank is able to specify the excess withdrawal fee **WHEN** a customer opens an account **THEN** the excess withdrawal fee is set

 |
| 

05

 | 

Withdrawal below the Number of Withdrawals Permitted per Month

 | 

**GIVEN** a bank offers a deposit product **AND** has configured the maximum number of withdrawals permitted per month, and the excess withdrawal fee **WHEN** a withdrawal is made that results in the total number of withdrawals on the account for the current month being less than or equal to the maximum number of withdrawals permitted in a month **THEN** the withdrawal is accepted

 |
| 

06

 | 

Withdrawal exceeding the Number of Withdrawals permitted per Month

 | 

**GIVEN** a bank offers a deposit product **AND** has configured the maximum the number of withdrawals permitted per month, and the excess withdrawal fee **WHEN** a withdrawal is made that results in the total number of withdrawals on the account for the current month being greater than the maximum number of withdrawals permitted in a month **THEN** the transaction is accepted **AND** an excess withdrawal fee is applied to the account

 |
| 

07

 | 

Resetting the Number of Permitted Withdrawals

 | 

**GIVEN** a bank offers a deposit product **AND** has configured the maximum number of withdrawals permitted per month **WHEN** the current calendar month has ended **THEN** the maximum number of withdrawals permitted for the month resets on the account

 |
| 

08

 | 

Rejecting withdrawals that exceed the Number of Withdrawals Permitted per Month

 | 

**GIVEN** a bank offers a deposit product **AND** has configured the maximum number of withdrawals permitted per month **AND**any withdrawals exceeding the maximum the number of withdrawals permitted per month are set to be rejected **WHEN** a withdrawal is made that results in the total number of withdrawals on the account for the current month being greater than the maximum number of withdrawals permitted in a month **THEN** the transaction is rejected

 |

## [](#paper_statement_fee_cpp_1991 "Copy link to heading")Paper Statement Fee (CPP-1991)

This is a business feature of the following products:

-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description_5 "Copy link to heading")Description

This feature concerns the application of a monthly fee for paper statements, which is charged to customers who choose to receive them.

### [](#configuration_options_5 "Copy link to heading")Configuration Options

-   Paper Statement Fee - the fixed amount charged if the customer opted for paper statements.
    
-   Paper Statement Fee Application Day
    
-   Paper Statement Fee Application Time
    
-   Partial Fee Collection
    

### [](#business_feature_behaviour_5 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Paper Statement Fee for the product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product **THEN** the bank is able to define the Paper Statement Fee

 |
| 

02

 | 

Setting the Paper Statement Fee for an account

 | 

**GIVEN** a bank offers a product **AND** the bank has configured the product **WHEN** a customer opens an account **AND** customer opts to receive paper statements **THEN** the Paper Statement Fee will be charged to the account as per the configured fee schedule

 |
| 

03

 | 

Configuring the Fee Application Day

 | 

**GIVEN** that paper statements are available for an account **WHEN** the customer opts to receive paper statements **THEN** the bank is able to define the day of the month on which the Paper Statement Fee is applied for that account

 |
| 

04

 | 

Scheduled Fee application falls on day 29-31 of the month

 | 

**GIVEN** that the fee is due to be applied on day 29, 30, or 31 of the month **AND** the day does not exist **WHEN** it is the first day of the following month **THEN** the fee is applied at the configured time

 |
| 

05

 | 

Configurable Fee application time

 | 

**GIVEN** the product has been configured to apply the Paper Statement Fee at a specific HH:MM:SS **WHEN** it is HH:MM:SS on the Fee Application Day **THEN** the Paper Statement Fee will be debited from all eligible deposit accounts

 |
| 

06

 | 

Configuring whether Paper Statement Fee can be paid partially

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product’s Paper Statement Fee **THEN** the bank is able to define whether Paper Statement Fee can be collected partially from the accounts belonging to that product

 |
| 

07

 | 

Applying the Paper Statement Fee with insufficient funds

 | 

**GIVEN** the customer account has been applied the Paper Statement Fee of 5 **AND** there are insufficient funds of 3 to cover the fee in full **WHEN** the fee is applied **THEN** the bank collects the full fee amount **AND** the account balance becomes -2

 |
| 

08

 | 

Applying the Paper Statement Fee with insufficient funds while partial fee payment allowed

 | 

**GIVEN** the customer account has been applied the Paper Statement Fee of 5 **AND** there are insufficient funds of 3 to cover the fee in full **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its' balance to zero **AND** the remaining fee amount of 2 is held for the bank to collect when the account is funded

 |
| 

09

 | 

Applying the Paper Statement Fee with insufficient funds and available overdraft limit while partial fee payment allowed

 | 

**GIVEN** the customer account has been applied the Paper Statement Fee of 5 **AND** there are insufficient funds of 3 to cover the fee in full **AND** there is an overdraft limit of 500 available **AND** the partial fee payment is allowed **WHEN** the fee is applied **THEN** the bank collects the funds available on the account reducing its' balance to zero **AND** the remaining fee amount of 2 is collected from the available overdraft limit

 |
| 

10

 | 

Collecting the remainder of the Paper Statement Fee

 | 

**GIVEN** the customer account with a Paper Statement Fee amount held for a future collection **WHEN** the funds are deposited into the customer account **THEN** the available funds are first allocated towards the fees awaiting collection

 |
| 

11

 | 

Disable the Paper Statement Fee for an account

 | 

**GIVEN** a customer has opted to receive paper statements **WHEN** the customer opts out of the paper statement **THEN** the Paper Statement Fee is no longer charged

 |
| 

12

 | 

Applying the Paper Statement Fee when there is less than a month between account opening and fee application day

 | 

**GIVEN** a customer has opened an account on the 15th of January **AND** the account incurs the Paper Statement Fee with the Paper Statement Fee Application Day defined as the first day of the month **WHEN** it is the 1st of February **THEN** the Paper Statement Fee will not be charged as there is less than a month between the account opening day and the Paper Statement Fee Application Day

 |
| 

13

 | 

Applying the Paper Statement Fee when there is more than a month between account opening and fee application day

 | 

**GIVEN** a customer has opened an account on the 15th of January **AND** the account incurs the Paper Statement Fee with the Paper Statement Fee Application Day defined as the first day of the month **WHEN** it is the 1st of March **THEN** the Paper Statement Fee will be charged to the customer account according to the Paper Statement Fee Application Time

 |
| 

14

 | 

Restricting account closure with pending Paper Statement Fee

 | 

**GIVEN** there is an account with a Paper Statement Fee amount pending collection **WHEN** an attempt is made to close the account **THEN** the closure of the account shall not be allowed until the pending balance is cleared

 |

## [](#unlimited_atm_fee_rebates_cpp_1996 "Copy link to heading")Unlimited ATM Fee Rebates (CPP-1996)

This is a business feature of the following products:

-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description_6 "Copy link to heading")Description

This feature concerns the unlimited ATM Fee Rebate configuration and application to cover the fees applied when customers transact in out-of-network ATMs.

An ATM Fee Rebate is a refund of fees charged by another bank or ATM network for using their ATMs. Some banks offer this feature as a way to encourage customers to use their own accounts and ATM networks.

### [](#configuration_options_6 "Copy link to heading")Configuration Options

Provision of unlimited ATM Fee Rebates

### [](#business_feature_behaviour_6 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Enabling ATM Fee Rebate on a customer account

 | 

**GIVEN** a bank offers a deposit product with the ATM Fee Rebate feature enabled **WHEN** an account is opened **THEN** the bank will enable the ATM Fee Rebate for that account

 |
| 

02

 | 

Refunding of ATM fees when the ATM Fee Rebate is enabled

 | 

**GIVEN** the customer account is eligible for the ATM Fee Rebate **WHEN** the ATM fee is posted to the customer account as the result of the transaction in an out-of-network ATM **THEN** the customer account is credited with the ATM fee amount from the bank

 |
| 

03

 | 

This feature has been removed

 |  |
| 

04

 | 

Refunding of ATM fees when the ATM Fee Rebate is enabled and the total available balance is withdrawn

 | 

**GIVEN** the customer account is eligible for the ATM Fee Rebate **AND** the customer withdraws the total available account balance in an out-of-network ATM **WHEN** the ATM fee is posted to the customer account **THEN** the customer account goes negative by the fee amount **AND** the customer account is promptly credited with the ATM fee amount from the bank to restore zero balance

 |