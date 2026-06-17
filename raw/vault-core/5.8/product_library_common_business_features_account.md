---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/common_business_features/account"
title: "Account"
scraped_at: "2026-06-17T05:37:23.434Z"
images: 0
---

# Account

## [](#open_account_cpp_1811 "Copy link to heading")Open Account (CPP-1811)

The account application process is unique to each bank. Upon requesting an account to be created in Vault, a number of Parameters are set or inherited. The following lists those parameters and any orchestration that needs to be considered when creating an account in Vault with this product.

If a nominated account is defined then this needs to be stored externally to the contract.

Note that the product assumes the account is created via Core API (in `ACCOUNT_STATUS_OPEN` status). The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status (for example, `ACCOUNT_STATUS_PENDING`) or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

## [](#account_tiers_cpp_1918 "Copy link to heading")Account tiers (CPP-1918)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#description "Copy link to heading")Description

Account tiers define the configurations of one or more features available on the product. This feature is applicable to funds denominated in the **Primary Denomination** of the account.

Features supporting configurations by tier allow you define different configurations for the different account tiers. In the following example, three different product configurations define a set of values for each corresponding feature. Therefore, when a bank opens an account that it designates as a "Lower Tier" account, the account inherits the values that the bank has assigned to the tier for each feature.

#### [](#available_account_tier_configuration_options "Copy link to heading")Available Account Tier configuration options

   
| Feature | Lower Tier | Middle Tier | Upper Tier |
| --- | --- | --- | --- |
| 
Monthly Maintenance Fee

 | 

5

 | 

10

 | 

20

 |
| 

Annual Maintenance Fee

 | 

50

 | 

100

 | 

200

 |
| 

Minimum Balance Threshold

 | 

1,000

 | 

2,500

 | 

5,000

 |
| 

Minimum Deposit Amount per Transaction

 | 

500

 | 

1,500

 | 

3,000

 |
| 

Daily Transaction Limit - ATM

 | 

500

 | 

1,000

 | 

2,000

 |
| 

Daily Transaction Limit - POS

 | 

2,000

 | 

4,000

 | 

10,000

 |

### [](#configuration_options "Copy link to heading")Configuration Options

-   Tiers: The tier names, and number of tiers are configurable.The Account Tier names defined in the Account Tier Parameter must also be reflected in the Parameters for the features that are controlled by Account Tiers.
    
-   Assignment of a tier: A Vault Flag is linked to the account in order to assign a tier. The Flag name needs to correspond to the tier name in order for the account to be assigned a tier. `LOWER_TIER`, `MIDDLE_TIER`, `UPPER_TIER` are the default tiers. If no Flag is linked to the account, then the account will default to the last tier defined in the list.
    
-   Features: The features controlled by Account Tiers can be extended through Smart Contract code changes. While for Daily Transaction Limits, existing transaction types can be amended, and new ones added.
    
-   Values: The values assigned to each tier and feature combination are configurable
    

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the account tiers for a product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product **THEN** the bank is able to specify the account tiers available

 |
| 

02

 | 

Configuring features controlled by account tiers

 | 

**GIVEN** a bank offers a product with account tiers **WHEN** configuring the account tiers **THEN** the bank is able to configure the features controlled by account tiers

 |
| 

03

 | 

Configuring the values for the features controlled by account tiers

 | 

**GIVEN** a bank offers a product with account tiers **WHEN** configuring the features controlled by account tiers **THEN** the bank is able to set values relevant to each feature

 |
| 

04

 | 

Setting a tier for an individual account

 | 

**GIVEN** a bank offers a product with account tiers **WHEN** the bank wants to update the tier for an account **THEN** the tier should be updated for that account **AND** the features controlled by account tiers should be set to the configured values that correspond to the chosen tier

 |
| 

05

 | 

Interrogating the Account Tier of an account

 | 

**GIVEN** there is a deposit product configured with account tiers **WHEN** interrogating the account **THEN** the Account Tier assigned to the account can be viewed

 |

## [](#dormancy_cpp_1911 "Copy link to heading")Dormancy (CPP-1911)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    

### [](#event "Copy link to heading")Event

Marking an account as Dormant

### [](#description_2 "Copy link to heading")Description

While the definition of dormant varies, this typically occurs when there has been no activity on the account (e.g. transactions) for an extended period of time. When an account is marked as dormant, transactions on the account are restricted until it is reactivated, and the charging of fees is paused.

### [](#configuration_options_2 "Copy link to heading")Configuration Options

-   Account Flag: A Flag must be associated with the account to mark it as dormant. The Flag should be named `ACCOUNT_DORMANT` in order for this feature to be activated. The account is considered dormant only while the Flag is active.
    

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Setting an account to dormant state

 | 

**GIVEN** a customer has an account **AND** the account has been inactive for a period defined by the bank **WHEN** the bank marks the account as dormant **THEN** dormancy restrictions will be applied to the account

 |
| 

02

 | 

Rejecting transactions on dormant accounts

 | 

**GIVEN** the account has been marked as dormant **WHEN** a debit or credit transaction is attempted **THEN** the transactions is rejected

 |
| 

03

 | 

Not charging fees to dormant accounts

 | 

**GIVEN** the account has been marked as dormant **WHEN** fees are due to be applied **THEN** no fees are applied

 |
| 

04

 | 

Stopping interest accrual and application

 | 

**GIVEN** the account is an interest-bearing account **AND** the account is marked as dormant **WHEN** interest is due to be accrued **THEN** no interest is accrued **AND** any previously accrued interest is retained on the account **AND** any interest accrued is not applied

 |
| 

05

 | 

Reinstating a dormant account

 | 

**GIVEN** an account has been marked as dormant **WHEN** the dormancy marker has been removed **THEN** credits and debit transactions are accepted **AND** any applicable fees are applied when due **AND** interest is accrued and applied when due

 |