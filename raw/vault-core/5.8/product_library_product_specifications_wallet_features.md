---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications/wallet/features"
title: "Product features"
scraped_at: "2026-06-17T05:37:20.121Z"
images: 0
---

# Product features

The following business features are available with this Product.

## [](#account_opening "Copy link to heading")Account Opening

Parameters are set or inherited upon account creation. The product assumes the account is created via Core API (in `ACCOUNT_STATUS_OPEN` status). The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `ACCOUNT_STATUS_PENDING`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

### [](#orchestration "Copy link to heading")Orchestration

This product supports **Account Tiers** - tiers are assigned to accounts using Vault Flags. Therefore, it is advised that the Account is created in an 'open' state and then a tier Flag is linked to the account.

The product assumes the account is created via Core API in `"ACCOUNT_STATUS_OPEN"` status. The resulting schedules and key dates are subsequently anchored to this creation date. If you wish to create accounts in a different status, for example `"ACCOUNT_STATUS_PENDING"`, or wish to use the Data Loader API, you may need to customise contracts to achieve the desired behaviours.

### [](#product_parameters "Copy link to heading")Product Parameters

These are set when the product is loaded onto Vault, and are inherited by all accounts upon creation.

  
| Name (ID) | Description | Optional |
| --- | --- | --- |
| 
Spending reset hour

 | 

The hour of the day at which the spending is reset.

 | 

No

 |
| 

Spending reset minute

 | 

The minute of the hour at which the spending is reset.

 | 

No

 |
| 

Spending reset second

 | 

The second of the minute at which the spending is reset.

 | 

No

 |

### [](#account_parameters "Copy link to heading")Account Parameters

These are set at the point of account creation.

  
| Name (ID) | Description | Optional |
| --- | --- | --- |
| 
Denomination

 | 

Base currency of the wallet which is used by default for all types of transactions. This is the same as the denomination of the nominated account.

 | 

No

 |
| 

Additional Denominations

 | 

Currencies that are accepted for this account, formatted as a JSON list of currency codes.

 | 

No

 |
| 

Nominated account

 | 

This account is used to hold the funds in excess of the "Wallet Balance Limit" and to fund the wallet account when the outgoing transaction amount from the wallet exceeds the wallet balance. Defined as the AccountID of the nominated account.

 | 

No

 |
| 

Daily spend limit

 | 

The gross amount of money a customer can spend on a daily basis.

 | 

No

 |
| 

Wallet balance limit

 | 

The maximum amount of funds the wallet can hold in its current balance.

 | 

No

 |

## [](#permitted_primary_denomination_cpp_1908 "Copy link to heading")Permitted Primary Denomination (CPP-1908)

Configuring the primary denomination in which the product can transact. Transactions which are not denominated in the primary denomination are rejected if the product only supports a single currency.

For the complete description, configuration options and behaviour of this feature, see [Permitted Primary Denomination](/vault-core/5-8/EN/product_library/common_business_features/currency_and_denomination#permitted_primary_denomination_cpp_1908).

## [](#multi_currency_support_cpp_2121 "Copy link to heading")Multi-Currency Support (CPP-2121)

Configuring the additional supported denominations in which the product can transact in addition to the primary denomination. Transactions which are not denominated in one of the configured supported denominations are rejected.

For the complete description, configuration options and behaviour of this feature, see [Multi-Currency Support](/vault-core/5-8/EN/product_library/common_business_features/currency_and_denomination#multi_currency_support_cpp_2121).

## [](#multi_currency_pots_cpp_2048 "Copy link to heading")Multi-Currency Pots (CPP-2048)

### [](#description "Copy link to heading")Description

Configuring the specific denominations in which an account will transact. Denominations should be a subset of those configured as part of the **Permitted Primary Denomination** and **Multi-currency Support** features.

### [](#configuration_options "Copy link to heading")Configuration Options

-   Account denominations: A list of one or more denominations in which the account will transact. The account denominations should first be configured as part of the **Permitted Primary Denomination** and **Multi-currency Support** features.
    

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring currency pots

 | 

**GIVEN** a bank offers a product **WHEN** configuring the product **THEN** the bank is able to specify the additional denominations allowed for the product

 |
| 

02

 | 

Account opened with pots for each currency

 | 

**GIVEN** a bank offers a product **WHEN** and an account is opened **AND** two currencies are defined as account denominations **THEN** a pot is created each for each of the currencies defined

 |
| 

03

 | 

Allow transfer of funds to another account

 | 

**GIVEN** a customer has a multi-currency account where two currencies are configured **WHEN** there is a transfer to move funds in currency 1 to another account **AND** there are sufficient funds in currency 1 **THEN** the product must transfer the funds from the currency 1 pot to the specified account

 |
| 

04

 | 

Transfers between accounts of different currencies rejected

 | 

**GIVEN** a customer has a multi-currency account where two currencies are configured **WHEN** there is a transfer to move funds in currency 1 to another account **AND** there are sufficient funds in currency 1 **AND** the target account does not support currency 1 **THEN** the transaction is rejected

 |
| 

05

 | 

Prevent transfer when not sufficient funds

 | 

**GIVEN** a customer has a multi-currency account where two currencies are configured **WHEN** the customer requests to transfer funds in currency 1 to another account **AND** there are insufficient funds in the currency 1 pot **THEN** the transfer is rejected

 |

## [](#excess_balance_sweep_cpp_2049 "Copy link to heading")Excess Balance Sweep (CPP-2049)

### [](#description_2 "Copy link to heading")Description

Funds deposited that are in excess of a configurable balance limit are automatically transferred to a specified nominated account.

chat\_bubble

-   The product will not consider transfers from the account to the nominated account as part of the daily spending limit.
    
-   This feature is applicable to funds denominated in the Primary Denomination of the account.
    

### [](#configuration_options_2 "Copy link to heading")Configuration options

-   Balance limit: The balance limit on the account, where funds in excess of the limit are transferred to a specified nominated account
    
-   Nominated account: The account into which the excess funds are transferred
    

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Link a nominated account to receive excess funds

 | 

**GIVEN** there is a deposit product **WHEN** account is opened **THEN** the nominated account receives any excess funds (the amount in excess of the Balance Limit) from the account

 |
| 

02

 | 

Configure Balance Limit

 | 

**GIVEN** there is a deposit product with a balance limit **WHEN** an account is opened **AND** the balance limit is set to 1000 **THEN** the balance limit on the account is 1000

 |
| 

03

 | 

Allow a request to increase the Balance Limit

 | 

**GIVEN** there is a deposit account **AND** the balance limit is 1,500 **WHEN** there is a request to change the balance limit to 2,000 **AND** the account receives a credit of 1,600 **THEN** the balance limit is updated to 2,000 **AND** the transaction is successful

 |
| 

04

 | 

Allow a customer’s request to decrease the Balance Limit

 | 

**GIVEN** there is a deposit account **AND** the balance limit is 1,000\*WHEN\* there is a request to update the balance limit 500 **THEN** then the request to change the limit is accepted

 |
| 

05

 | 

Decrease the Balance Limit to below the account balance, when a nominated account is in place

 | 

**GIVEN** there is a deposit account with a nominated account\*AND\* the balance limit is 1,500 **AND** the account balance is 1,200 **WHEN** there is a request to change the balance limit to 1,000 **THEN** the balance limit is updated to 1,000 **AND** transfers the excess funds of 200 to the nominated account

 |
| 

06

 | 

Decrease the Balance Limit to below the account balance, when a nominated account is not in place

 | 

**GIVEN** there is a deposit account with no nominated account\*AND\* the balance limit is 1,500 **AND** the account balance is 1,200 **WHEN** there is a request to change the balance limit to 1,000 **THEN** the balance limit is updated to 1,000 **AND** no further top-up is allowed until the customer spends more than 200

 |
| 

07

 | 

Move partial excess funds into nominated account when an account exceeds its Balance Limit

 | 

**GIVEN** there is a deposit account **AND** it has a linked nominated account **AND** the current balance is 500 **AND** the balance limit is 999 **WHEN** there is a credit of 500 **THEN** 1 is transferred to the nominated account

 |
| 

08

 | 

Move all excess funds into a specified nominated account when an account exceeds its Balance Limit

 | 

**GIVEN** there is a deposit account **AND** it has a linked nominated account **AND** the current balance is 500 **AND** the balance limit is 500 **WHEN** there is a credit of 300 **THEN** 300 is transferred to the nominated account

 |

## [](#daily_spending_limit_cpp_2050 "Copy link to heading")Daily Spending Limit (CPP-2050)

### [](#description_3 "Copy link to heading")Description

This is the maximum gross amount that can be spent in a single day.

When the gross amount of outgoing transactions exceeds this limit, the account will not allow the customer to make any additional outgoing transactions from the account on that day. The limit is reset every day at a configurable time.

chat\_bubble

This feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options_3 "Copy link to heading")Configuration Options

-   Daily spending limit: The daily amount that can be spent on the account in a given day.
    
-   Daily spending limit reset time: The time at which the Daily Spending Limit on the account is reset.
    

### [](#business_feature_behaviour_3 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Daily Spending Limit Reset Time on the Product

 | 

**GIVEN** there is a deposit product with a daily spending limit **WHEN** the bank is configuring the product **THEN** the bank is able to set a daily spending limit reset time

 |
| 

02

 | 

Setting the Daily Spending Limit

 | 

**GIVEN** there is a deposit product with a daily spending limit **WHEN** and account is opened **AND** the daily spending limit is set to 1,000 **THEN** the daily spending limit is set to 1,000 on the account

 |
| 

03

 | 

Allow a customer’s request to increase the Daily Spending Limit

 | 

**GIVEN** there is a deposit account with a daily spending limit of 1,400 **AND** a number of purchases have been made **AND** the remaining daily spending limit is 600 **WHEN** there is a request to change the daily spending limit to 1,500 **AND** there is an outgoing transaction of 700 on the same day **THEN** the outgoing transaction is successful

 |
| 

04

 | 

Reject a customer’s request to increase the Daily Spending Limit

 | 

**GIVEN** there is a deposit account with a daily spending limit of 1,400 **AND** a number of purchases have been made **AND** the remaining daily spending limit is 600 **WHEN** there is a request to change the daily spending limit to 1,500 **AND** there is an outgoing transaction of 1,100 on the same day **THEN** the outgoing transaction is rejected

 |
| 

05

 | 

Reject outgoing transactions when the account exceeds the Daily Spending Limit on the same day

 | 

**GIVEN** there is a deposit account with a daily spending limit **AND** a number of purchases have been made **AND** the remaining daily spending limit is 0 **WHEN** there is an outgoing transaction of 1 on the same day **THEN** the outgoing transaction is rejected

 |
| 

06

 | 

Daily Spending Limit resets on the next day

 | 

**GIVEN** there is a deposit account with a daily spending limit **AND** the daily spending limit is 1,000 **AND** the sum of the outgoings today is 1,000 **AND** the remaining daily spending limit is 0 **WHEN** there is an outgoing transaction of 1 on the next day **THEN** the outgoing transaction is successful

 |
| 

07

 | 

Customer exceeds Daily Spending Limit and makes a transfer to the nominated account

 | 

**GIVEN** there is a deposit account with a daily spending limit **AND** the sum of the outgoings today is 500 **AND** the remaining daily spending limit is 0 **AND** the balance is 200 **WHEN** there is an outgoing transfer of 100 to the specified nominated account **THEN** the outgoing transfer is successful

 |
| 

08

 | 

Resetting the Daily Spending Limit at the Daily Spending Limit Reset Time

 | 

**GIVEN** the product has been configured to reset the daily spending limit at HH:MM:SS **AND** the daily spending limit is set to 2,000 **AND** a number of purchases have been made **AND** the remaining daily spending limit is 100 **WHEN** it is HH:MM:SSv\*THEN\* the daily spending limit is reset to 2,000

 |

## [](#auto_top_up_cpp_2051 "Copy link to heading")Auto Top-Up (CPP-2051)

### [](#description_4 "Copy link to heading")Description

The primary account is linked to a specified nominated account which is the source of funds to the primary account when the balance is insufficient to satisfy an outgoing transaction. In such cases, the primary account will automatically draw the required funds from the nominated account in order to complete the transaction. This is known as "Auto Top-Up".

chat\_bubble

This feature is applicable to funds denominated in the Primary Denomination of the account.

### [](#configuration_options_4 "Copy link to heading")Configuration Options

-   Account Flag: A Vault Flag is linked to the account in order to enable top-ups. The Flag should be named `AUTO_TOP_UP_WALLET` in order for this feature to be activated. Top-ups will only be made while the Flag is active.
    
-   Nominated account: The account from which funds are drawn in order to ensure there are sufficient funds to fulfil outgoing transactions.
    

### [](#business_feature_behaviour_4 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Auto Top-Up feature is set to disabled for new accounts

 | 

**GIVEN** the bank offers a deposit product with an auto top-up feature **WHEN** an account is opened **THEN** the auto top-up feature is disabled by default

 |
| 

02

 | 

Auto Top-Up feature is enabled by customer before use

 | 

**GIVEN** there is a deposit account with an auto top-up feature that is disabled **WHEN** there is a request to enable the auto top-up feature **THEN** the auto top-up feature is enabled

 |
| 

03

 | 

Auto Top-Up is enabled and successful when making a purchase

 | 

**GIVEN** there is a deposit account with an auto top-up feature that is enabled **AND** the account balance is 500 **WHEN** there is a purchase of 550 **THEN** 50 is deducted from the linked nominated account **AND** credits 50 into the deposit account **AND** updates the account balance from 500 to 550 **AND** deducts 550 from the account to complete the purchase **AND** the account balance is 0 once the purchase is successful

 |
| 

04

 | 

Auto Top-Up is rejected as not enough funds in the nominated account

 | 

**GIVEN** there is a deposit account with an auto top-up feature that is enabled **AND** the account balance is 500 **AND** the linked nominated account has a balance of 10 **WHEN** a purchase of 550 is made from the account **AND** there is an attempt to deduct 50 from the linked nominated account **THEN** the top-up fails and the purchase is rejected

 |