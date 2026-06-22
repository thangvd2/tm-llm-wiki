---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/common_business_features/deposits_withdrawals"
title: "Deposits and withdrawals"
scraped_at: "2026-06-17T15:44:28.518Z"
images: 0
---

# Deposits and withdrawals

See also:

-   [Limits](/vault-core/5-8/EN/product_library/common_business_features/limits)
    

## [](#minimum_deposit_amount_per_transaction_cpp_1987 "Copy link to heading")Minimum Deposit Amount per Transaction (CPP-1987)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

Related features: [Limits](/vault-core/5-8/EN/product_library/common_business_features/limits)

### [](#description "Copy link to heading")Description

Setting the minimum amount customers can deposit into their accounts in a single deposit transaction, where deposits that are less than the minimum deposit amount will be rejected. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options "Copy link to heading")Configuration Options

Minimum deposit amount per transaction: The minimum amount that is required to be deposited per deposit transaction. Note that the minimum deposit amount per transaction is validated against the values set for the tier assigned to the account as per the **Account Tier** feature. Therefore, the minimum amount set on the account should be more than or equal to the amount set on the tier assigned to the account.

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the minimum deposit amount for a deposit product

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to define a minimum deposit amount for a single deposit transaction

 |
| 

02

 | 

Setting the minimum deposit amount on a deposit account

 | 

**GIVEN** a bank offers a deposit product **AND** has configured a minimum deposit amount per transaction **WHEN** an account is opened **THEN** the minimum deposit amount per transaction is set on the account as per the product configuration

 |
| 

03

 | 

Deposit amount below minimum deposit amount

 | 

**GIVEN** there is an account with a configured minimum deposit amount per transaction **WHEN** a deposit transaction is made that is less than the configured minimum deposit amount on the account **THEN** the deposit transaction is rejected

 |
| 

04

 | 

Deposit amount more than or equal to minimum deposit amount

 | 

**GIVEN** there is an account with a configured minimum deposit amount per transaction **WHEN** a deposit transaction is made that is more than or equal to the configured minimum deposit amount on the account **THEN** the deposit transaction is accepted

 |

## [](#maximum_daily_deposit_limit_cpp_1988 "Copy link to heading")Maximum Daily Deposit Limit (CPP-1988)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

Related features: [Limits](/vault-core/5-8/EN/product_library/common_business_features/limits)

### [](#description_2 "Copy link to heading")Description

The maximum daily deposit limit to set a limit to the sum of the deposits that can be made into an account in a single day. Deposit transactions that exceed this limit are rejected. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_2 "Copy link to heading")Configuration Options

Maximum daily deposit limit: The maximum limit of the sum of deposit transactions that are permitted for the day - the limit resets at midnight.

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Maximum Daily Deposit for a deposit product

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to define the maximum daily deposit limit

 |
| 

02

 | 

Setting the maximum daily deposit on a deposit account

 | 

**GIVEN** a bank offers a deposit product where the maximum daily deposit limit has been configured **WHEN** an account is opened **THEN** the maximum daily deposit limit will be set as per the product configuration

 |
| 

03

 | 

Daily deposit limit is more than or equal to the maximum daily deposit limit

 | 

**GIVEN** there is a deposit account with a configured maximum daily deposit limit **WHEN** a deposit transaction which is more than or equal to the configured maximum daily deposit limit for the account **THEN** the deposit transaction is rejected

 |
| 

04

 | 

Daily deposit limit is less than maximum daily deposit limit

 | 

**GIVEN** there is a deposit account with a configured maximum daily deposit limit **WHEN** a deposit transaction which is less than the configured maximum daily deposit limit **THEN** the deposit transaction is accepted

 |

## [](#minimum_withdrawal_amount_per_transaction_cpp_1976 "Copy link to heading")Minimum Withdrawal Amount per Transaction (CPP-1976)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

Related features: [Limits](/vault-core/5-8/EN/product_library/common_business_features/limits)

### [](#description_3 "Copy link to heading")Description

The minimum amount that can be withdrawn or transferred out of an account in a single transaction. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_3 "Copy link to heading")Configuration Options

Minimum withdrawal amount per transaction: The minimum amount that can be withdrawn from an account in a single transaction.

### [](#business_feature_behaviour_3 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Minimum Withdrawal Amount for a product

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to define the minimum withdrawal amount

 |
| 

02

 | 

Setting the Minimum Withdrawal Amount on an account

 | 

**GIVEN** a bank offers a deposit product **AND** the bank has configured minimum withdrawal amount per transaction **WHEN** an account is opened **THEN** the minimum withdrawal amount is set based on the product configuration

 |
| 

03

 | 

Withdrawal amount below Minimum Withdrawal Amount

 | 

**GIVEN** there is an account with a minimum withdrawal amount set **WHEN** a withdrawal or transfer out is made that is less than the minimum withdrawal amount on the account **THEN** the transaction is rejected

 |
| 

04

 | 

Withdrawal amount above Minimum Withdrawal Amount

 | 

**GIVEN** there is an account with a minimum withdrawal amount set **WHEN** a withdrawal or transfer out is made that is more than or equal to the minimum withdrawal amount on the account **THEN** the transaction is accepted

 |

## [](#maximum_daily_withdrawal_limit_cpp_2166 "Copy link to heading")Maximum Daily Withdrawal Limit (CPP-2166)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

Related features: [Limits](/vault-core/5-8/EN/product_library/common_business_features/limits)

### [](#description_4 "Copy link to heading")Description

A daily limit placed on the sum of all withdrawals. If there is a withdrawal that would result in the limit being breached, then that withdrawal is rejected. Note that this feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_4 "Copy link to heading")Configuration Options

Maximum daily withdrawal limit: A maximum limit for the sum of all withdrawals in a day - this is reset at midnight.

### [](#business_feature_behaviour_4 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the maximum daily withdrawal for a withdrawal product

 | 

**GIVEN** a bank offers a deposit product **WHEN** configuring the product **THEN** the bank is able to define the maximum daily withdrawal limit

 |
| 

02

 | 

Setting the maximum daily withdrawal on a withdrawal account

 | 

**GIVEN** a bank offers a deposit product where the maximum daily withdrawal limit has been configured **WHEN** an account is opened **THEN** the maximum daily withdrawal limit will be set as per the product configuration

 |
| 

03

 | 

Withdrawal amount breaches the maximum daily withdrawal limit

 | 

**GIVEN** a bank offers a deposit product where the maximum daily withdrawal limit has been configured **WHEN** there is a withdrawal that will exceed the configured maximum daily withdrawal limit for the account **THEN** the withdrawal transaction is rejected

 |
| 

04

 | 

Withdrawal amount within the maximum daily withdrawal limit

 | 

**GIVEN** there is a withdrawal account with a configured maximum daily withdrawal limit **WHEN** there is a withdrawal that is within the configured maximum daily withdrawal limit for the account **THEN** the withdrawal transaction is accepted

 |