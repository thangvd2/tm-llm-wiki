---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/common_business_features/currency_and_denomination"
title: "Currency and denomination"
scraped_at: "2026-06-17T15:44:26.764Z"
images: 0
---

# Currency and denomination

## [](#multi_currency_support_cpp_2121 "Copy link to heading")Multi-Currency Support (CPP-2121)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Wallet](/vault-core/5-8/EN/product_library/product_specifications/wallet/)
    

### [](#description "Copy link to heading")Description

Configuring the additional supported denominations in which the product can transact in addition to the primary denomination. Transactions which are not denominated in one of the configured supported denominations are rejected.

### [](#configuration_options "Copy link to heading")Configuration Options

Supported Denominations: A list of denominations that the product will support in addition to the primary denomination. If no denominations are set, then accounts will only be able to transact in the primary denomination.

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the supported denominations for the product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product **THEN** the bank is able to specify additional supported denominations in which the account will support

 |
| 

02

 | 

Configuring supported denominations on an account that has been opened

 | 

**GIVEN** a bank offers a product **AND** the bank has configured additional denomination of the product **WHEN** an account is opened **THEN** the account’s additional supported denomination is set based on the product configuration

 |
| 

03

 | 

An account receives funds in an additional supported denomination

 | 

**GIVEN** a customer has an account **AND** an additional supported denomination is set **WHEN** there is a credit in the additional supported denomination **THEN** the credit is accepted

 |
| 

04

 | 

An account sends money in an additional supported denomination

 | 

**GIVEN** a customer has an account **AND** an additional supported denomination is set **AND** the account has balance of 100 in the additional supported denomination **WHEN** there is a debit in the additional supported denomination **AND** there are sufficient funds **THEN** the debit is accepted

 |
| 

05

 | 

Rejecting a transaction in a denomination that is not an additional supported denomination

 | 

**GIVEN** a customer has an account **AND** the additional denomination of the account is set **WHEN** a transaction is attempted on the account in a denomination which is not a configured additional supported denomination **THEN** the transaction is rejected

 |

## [](#permitted_primary_denomination_cpp_1908 "Copy link to heading")Permitted Primary Denomination (CPP-1908)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-8/EN/product_library/product_specifications/current_account/)
    
-   [Line of Credit](/vault-core/5-8/EN/product_library/product_specifications/line_of_credit/)
    
-   [Savings Account](/vault-core/5-8/EN/product_library/product_specifications/savings_account/)
    
-   [US Checking Account](/vault-core/5-8/EN/product_library/product_specifications/us_checking/)
    
-   [US Savings Account](/vault-core/5-8/EN/product_library/product_specifications/us_savings/)
    
-   [Wallet](/vault-core/5-8/EN/product_library/product_specifications/wallet/)
    

### [](#description_2 "Copy link to heading")Description

Configuring the primary denomination in which the product can transact. Transactions which are not denominated in the primary denomination are rejected if the product only supports a single currency.

### [](#configuration_options_2 "Copy link to heading")Configuration Options

Primary Denomination: the primary denomination in which the product will transact.

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the primary denomination of the product

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product **THEN** the bank is able to specify the primary denomination in which the account will transact

 |
| 

02

 | 

Account opened with configured primary denomination

 | 

**GIVEN** a bank offers a product **AND** the primary denomination of the product is configured **WHEN** an account is opened **THEN** the account’s primary denomination is set for the account based on the product configuration

 |
| 

03

 | 

Accepting a credit or debit in a primary denomination

 | 

**GIVEN** there is an account where the primary denomination is set **WHEN** a credit or debit is attempted in the primary denomination **THEN** the credit or debit is accepted

 |
| 

04

 | 

Rejecting a credit or debit in a non-primary denomination

 | 

**GIVEN** there is an account where the primary denomination is set **WHEN** a credit or debit is attempted on the account in a denomination which is not the primary denomination **THEN** the credit or debit is rejected

 |