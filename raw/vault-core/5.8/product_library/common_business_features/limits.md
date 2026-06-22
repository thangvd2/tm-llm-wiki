---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/common_business_features/limits"
title: "Limits"
scraped_at: "2026-06-17T15:44:33.950Z"
images: 0
---

# Limits

See also:

-   [Minimum Deposit Amount per Transaction (CPP-1987)](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#minimum_deposit_amount_per_transaction_cpp_1987)
    
-   [Maximum Daily Deposit Limit (CPP-1988)](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals#maximum_daily_deposit_limit_cpp_1988)
    
-   [Deposits and Withdrawals](/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals)
    
-   [Fees](/vault-core/5-8/EN/product_library/common_business_features/fees)
    
-   [Interest](/vault-core/5-8/EN/product_library/common_business_features/interest_and_amortisation)
    

## [](#maximum_daily_transaction_limit_per_transaction_type_cpp_2006 "Copy link to heading")Maximum Daily Transaction Limit per Transaction Type (CPP-2006)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description "Copy link to heading")Description

A daily limit placed on the sum of each type of debit transaction. If there is a transaction that would result in one of the limits being breached, then that transaction will be rejected. Note that if the product supports Account Tiers, the limits set on the account are validated against the limits defined on the tier assigned to the account to ensure the account limits do not exceed those defined by the tier.

Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

The following table provides an example of some transaction types and limits that can be configured for an account.

 
| Transaction Type | Daily Limit |
| --- | --- |
| 
POS Purchase

 | 

3,000

 |
| 

ATM Withdrawal

 | 

2,000

 |
| 

Bill Payment

 | 

5,000

 |
| 

Check Deposit

 | 

10,000

 |
| 

Wire Transfer

 | 

5,000

 |

### [](#configuration_options "Copy link to heading")Configuration Options

-   Transaction types: a list of transaction types on which a daily limit will be subjected. E.g. If `purchase` is set as a transaction type with a limit of 1,000, then it is expected that Postings that pertain to purchases will include `transaction_type : purchase` in the Posting Instruction Details so that the 1,000 limit can be enforced by the product. If no limits are defined on the account, then the limits set on the Account Tier assigned to the account will apply.
    
-   Transaction Limit: The maximum daily limit applied to each transaction type - this limit resets at midnight. Note that limits are validated against those set for the tier assigned to the account as per the **Account Tier** feature. Therefore, the limits set on the account should be less than or equal to the limit set on the tier assigned to the account.
    

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Setting the Maximum Daily Transaction Limit per transaction type for an account

 | 

**GIVEN** a bank offers a product **WHEN** an account is opened **THEN** the bank is able to set the maximum daily transaction limit for the account by transaction type

 |
| 

02

 | 

Daily Transaction Limit less than or equal to Account Tier Limit

 | 

**GIVEN** a bank offers a product **WHEN** an account is opened, or the Maximum Daily Transaction Limit is changed on the account **AND** the limit is less than or equal to the limit defined by an Account Tier **THEN** the Maximum Daily Transaction Limit for the account is updated

 |
| 

03

 | 

Daily Transaction Limit greater than Account Tier Limit

 | 

**GIVEN** a bank offers a product **WHEN** an account is opened, or the Maximum Daily Transaction Limit is changed on the account **AND** the limit is greater than the limit defined by an Account Tier **THEN** the Maximum Daily Transaction Limit for the account is rejected

 |
| 

04

 | 

Accept transactions below or equal to the Maximum Daily Transaction Limit set on the account

 | 

**GIVEN** the Maximum Daily Transaction Limit is set for a specific transaction type **WHEN** a transaction of that type is made **AND** the sum of the transactions of that type for the day is less than or equal to the Maximum Daily Transaction Limit set on the account **THEN** the transaction is accepted.

 |
| 

05

 | 

Reject transactions exceeding the Maximum Daily Transaction Limit set on the account

 | 

**GIVEN** the Maximum Daily Transaction Limit is set for a specific transaction type at the account level **WHEN** a transactions of that type is made **AND** the sum of the transactions of that type is greater than the Maximum Daily Transaction Limit that is set **THEN** the transaction is rejected

 |

## [](#maximum_balance_limit_cpp_1986 "Copy link to heading")Maximum Balance Limit (CPP-1986)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description_2 "Copy link to heading")Description

Maximum balance limit on the account in the primary denomination, where credits that would breach this limit are rejected. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_2 "Copy link to heading")Configuration Options

-   Maximum balance limit: The maximum deposit balance permitted.
    

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the maximum balance limit for the product

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to define the daily maximum balance limit for all accounts

 |
| 

02

 | 

Setting the maximum balance limit on a deposit account

 | 

**GIVEN** a bank offers a deposit product **AND** configures a maximum balance limit **WHEN** an account is opened **THEN** the maximum balance limit is set

 |
| 

03

 | 

Transaction falls within maximum balance limit

 | 

**GIVEN** there is a deposit account **AND** the maximum balance limit is set **WHEN** a deposit is made which is within the set maximum balance limit on the account **THEN** the deposit is accepted

 |
| 

04

 | 

Transaction exceeds maximum balance limit

 | 

**GIVEN** there is a deposit account **AND** the maximum balance limit is set **WHEN** a deposit is made which exceeds the set maximum balance limit on the account **THEN** the deposit is rejected

 |