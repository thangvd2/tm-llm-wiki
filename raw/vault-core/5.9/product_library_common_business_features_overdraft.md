---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/product_library/common_business_features/overdraft"
title: "Overdraft"
scraped_at: "2026-06-17T05:06:14.047Z"
images: 0
---

# Overdraft

See also:

-   [Fees](/vault-core/5-9/EN/product_library/common_business_features/fees)
    
-   [Interest](/vault-core/5-9/EN/product_library/common_business_features/interest_and_amortisation)
    

## [](#arranged_overdraft_cpp_1916 "Copy link to heading")Arranged Overdraft (CPP-1916)

This is a business feature of the following products:

-   [Current Account](/vault-core/5-9/EN/product_library/product_specifications/current_account/)
    
-   [US Checking Account](/vault-core/5-9/EN/product_library/product_specifications/us_checking/)
    

### [](#description "Copy link to heading")Description

An overdraft can be arranged upfront with a customer prior to its utilisation. A limit is agreed upon, and any debit transactions in violation of this limit are rejected. If the limit is updated to a value that is less than the overdrawn amount, then all subsequent debit transactions are rejected until the overdrawn amount is brought to a level less than the limit.

chat\_bubble

If the product supports an **Unarranged Overdraft** in addition to an **Arranged Overdraft**, then the account can be overdrawn by the total of the arranged and unarranged overdraft amounts before debit transactions are rejected. This feature is applicable to funds denominated in the **Primary Denomination** of the account.

### [](#configuration_options "Copy link to heading")Configuration Options

Arranged Overdraft Amount: The maximum amount that an account can be overdrawn using the arranged overdraft.

### [](#business_feature_behaviour "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Arranged Overdraft Amount for an account

 | 

**GIVEN** a bank offers a product **WHEN** an account is opened **THEN** the bank is able to specify an Arranged Overdraft Amount

 |
| 

02

 | 

Utilising the Arranged Overdraft

 | 

**GIVEN** there is a deposit account **AND** the balance on the account is 0 **AND** the Arranged Overdraft Amount is 200 **WHEN** there is a withdrawal of 150 **THEN** the withdrawal is successful **AND** the account will have a balance of -150 **AND** the account will have 50 available in their arranged overdraft

 |
| 

03

 | 

No overdraft when Arranged Overdraft Amount not set

 | 

**GIVEN** there is a deposit account **AND** the balance on the account is 0 **AND** the Arranged Overdraft Amount has not been set **WHEN** the customer makes a withdrawal of 50 **THEN** the withdrawal is rejected

 |
| 

04

 | 

Rejecting a withdrawal that would take the balance beyond the Arranged Overdraft Amount

 | 

**GIVEN** there is a deposit account **AND** the balance on the account is 0 **AND** the Arranged Overdraft Amount is 50 **WHEN** there is a withdrawal request of 250 **THEN** the withdrawal is rejected

 |
| 

05

 | 

Updating the Arranged Overdraft Amount

 | 

**GIVEN** the Arranged Overdraft Amount on an account is decreased from 100 to 50 **AND** the current balance on the account is 0 **WHEN** there is a request to withdraw 100 **THEN** the withdrawal is rejected

 |
| 

06

 | 

Disabling the Arranged Overdraft Amount

 | 

**GIVEN** the Arranged Overdraft Amount on an account is removed **AND** the current balance on the account is 0 **WHEN** there is a request to withdraw 100 **THEN** the account can no longer be overdrawn **AND** the withdrawal is rejected

 |
| 

07

 | 

Reducing Arranged Overdraft Amount below the utilised amount

 | 

**GIVEN** the utilised overdraft on a deposit account is 100 **WHEN** the Arranged Overdraft Amount on an account is decreased from 100 to 50 **THEN** the update is accepted **AND** all the subsequent withdrawals are rejected until there are sufficient funds available on the account

 |
| 

08

 | 

Increasing Arranged Overdraft Amount above the utilised amount

 | 

**GIVEN** the utilised overdraft balance on the account is 100 **WHEN** the Arranged Overdraft Amount on an account is increased to 150 **THEN** the update is accepted **AND** all the subsequent withdrawals are accepted until the remaining 50 of the limit is utilised

 |

## [](#overdraft_coverage_cpp_1917 "Copy link to heading")Overdraft Coverage (CPP-1917)

This is a business feature of the following products:

-   [US Checking Account](/vault-core/5-9/EN/product_library/product_specifications/us_checking/)
    

### [](#description_2 "Copy link to heading")Description

This feature defines which transaction types are not covered by the Arranged Overdraft without customer opt-in for Overdraft Coverage. Customers who do not opt-in would not be able to utilise the assigned overdraft limit for the transaction types that the bank has specified.

chat\_bubble

This feature is contingent on the [Arranged Overdraft](/vault-core/5-9/EN/product_library/common_business_features/overdraft#arranged_overdraft)

### [](#configuration_options_2 "Copy link to heading")Configuration Options

-   Overdraft Coverage Opt-In flag
    
-   Excluded Transaction Types: transaction types which cannot utilise the overdraft limit without the Overdraft Coverage Opt-In
    

### [](#business_feature_behaviour_2 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the Excluded Transaction Types

 | 

**GIVEN** the bank offers the Arranged Overdraft to its customers **WHEN** the bank configures the Arranged Overdraft for the deposit product **THEN** the bank can specify the transaction types which are excluded from utilising the overdraft limit without the Overdraft Coverage Opt-In

 |
| 

02

 | 

Customer opted in for Overdraft Coverage, and the overdraft limit is sufficient to cover the transaction

 | 

**GIVEN** a customer has chosen to opt-in for Overdraft Coverage **WHEN** a debit transaction is posted to the customer account **AND** the type of that transaction is defined in the excluded transaction types **AND** the transaction amount exceeds the available account balance **AND** the transaction amount remains within the cumulative balance available on the customer account and overdraft limit **THEN** the transaction is successfully posted

 |
| 

03

 | 

Customer opted in for Overdraft Coverage, and the overdraft limit is not sufficient to cover the transaction

 | 

**GIVEN** a customer has chosen to opt-in for Overdraft Coverage **WHEN** any debit transaction is posted to the customer account **AND** the transaction amount exceeds the cumulative balance available on the customer account and the assigned overdraft limit **THEN** the transaction is rejected

 |
| 

04

 | 

Customer did not opt-in for Overdraft Coverage, and the debit transaction is on the Excluded Transaction Types list

 | 

**GIVEN** a customer has not chosen to opt-in for Overdraft Coverage (or opted-out of Overdraft Coverage) **WHEN** a debit transaction from the Excluded Transaction Types list is posted to the customer account **AND** the transaction amount exceeds the available account balance **AND** the transaction amount remains within the cumulative balance available on the customer account and overdraft limit **THEN** the transaction is rejected

 |

## [](#overdraft_protection_cpp_2213 "Copy link to heading")Overdraft Protection (CPP-2213)

This is a business feature of the following products:

-   [US Checking Account](/vault-core/5-9/EN/product_library/product_specifications/us_checking/)
    

### [](#description_3 "Copy link to heading")Description

The Overdraft Protection (ODP) feature allows a customer to link one savings account within the same bank to their Checking Account, where this linked account serves as a source of funds if the customer exceeds the available balance on their Checking Account - the utilisation of these funds are prioritised over the utilisation of the standard overdraft limit.

-   If the Checking Account is overdrawn at the end of the day, a transfer will be made from the linked Savings Account to the Checking Account for an amount that brings the balance to 0 or as close to 0 as possible if there are insufficient funds on the Savings Account.
    
-   The Overdraft Protection feature utilises funds in the following order:
    

1.  Checking Account - available positive balance
    
2.  Linked Savings Account - available positive balance
    
3.  Overdraft Limit - available standard overdraft limit (aka Arranged Overdraft) amount
    

An Overdraft Protection Sweep Fee is a charge that banks may apply when money is automatically moved from a linked savings account to a checking account to prevent that account from being overdrawn.

### [](#configuration_options_3 "Copy link to heading")Configuration Options

-   ODP Sweep Fee (defined per product)
    
-   ODP Source (defined per account)
    

Customers are able to opt in or out of the Overdraft Protection at any point while their Checking Account is active.

### [](#business_feature_behaviour_3 "Copy link to heading")Business Feature Behaviour

  
| ID | Title | Behaviour |
| --- | --- | --- |
| 
01

 | 

Configuring the ODP Sweep Fee on the Checking Account product

 | 

**GIVEN** that the bank offers ODP for their Checking Account product **WHEN** configuring the product **THEN** the bank can define the ODP Sweep Fee amount charged for each transfer from the linked savings account

 |
| 

02

 | 

Transaction processing when the Checking Account available balance is sufficient to cover the proposed transaction

 | 

**GIVEN** the Checking Account has a linked ODP Source account **WHEN** a withdrawal transaction occurs **AND** the withdrawal transaction amount is less than or equal to the available balance on the Checking Account **THEN** the transaction is accepted

 |
| 

03

 | 

Transaction processing when the combined Checking and Savings Account available balance is sufficient to cover the proposed transaction

 | 

**GIVEN** the Checking Account has a linked ODP Source account **WHEN** a withdrawal transaction occurs **AND** the withdrawal transaction amount exceeds the available balance on the Checking Account **AND** the combined Current and Savings Account available balance is sufficient to cover the proposed transaction **THEN** the transaction is accepted

 |
| 

04

 | 

Transaction processing when the combined Checking and Savings Account available balance is not sufficient to cover the proposed transaction

 | 

**GIVEN** the Checking Account has a linked ODP Source account **WHEN** a withdrawal transaction occurs **AND** the withdrawal transaction amount exceeds the available balance on the Checking Account **AND** the combined Current and Savings Account available balance is not sufficient to cover the proposed transaction **THEN** the transaction is rejected

 |
| 

05

 | 

ODP Sweep when the Checking Account has not utilised it’s available overdraft at EOD

 | 

**GIVEN** the Checking Account has a linked ODP Source account **WHEN** the day ends **AND** the Checking Account has not utilised its available Overdraft **THEN** the product does not sweep any funds from the linked ODP Source Account

 |
| 

06

 | 

ODP Sweep when the Checking Account has utilised it’s available overdraft at EOD and the linked Savings Account balance is sufficient to cover the shortfall and the fee

 | 

**GIVEN** the Checking Account has a Savings Account linked as the ODP Source **WHEN** the day ends **AND** the Checking Account is in it’s Overdraft **AND** the balance on the linked Savings Account is sufficient to cover the shortfall and the ODP Sweep Fee **THEN** the product sweeps the funds from the linked Savings Account to cover the shortfall the Checking Account, and the ODP Sweep Fee

 |
| 

07

 | 

ODP Sweep when the Checking Account is in it’s overdraft at EOD and the linked Savings Account balance is not sufficient to cover the shortfall

 | 

**GIVEN** the Checking Account has a Savings Account linked as the ODP Source **WHEN** the day ends **AND** the Checking Account is in it’s Overdraft **AND** the balance on the linked Savings Account is only partially sufficient to cover the shortfall and ODP Sweep Fee **THEN** the product sweeps all the funds from the linked Savings Account **AND** the remaining amount due for the shortfall and the ODP Sweep Fee is taken from the Checking Account overdraft

 |
| 

08

 | 

ODP Sweep when the Checking Account has utilised it’s available overdraft at EOD and the linked Savings Account balance is 0

 | 

**GIVEN** the Checking Account has a Savings Account linked as the ODP Source **WHEN** the day ends **AND** the linked Savings Account has zero available funds **THEN** no funds are swept to the Checking Account, and no ODP Sweep Fee is charged **AND** the Checking Account utilises the minimum amount of it’s Overdraft possible

 |
| 

09

 | 

Only one Checking Account can be linked

 | 

**GIVEN** a customer has a Checking Account **WHEN** the Checking Account has a Savings Account linked as the ODP Source **THEN** no further Checking Accounts can be linked to this relationship

 |
| 

10

 | 

Only one Savings Account can be linked for ODP use

 | 

**GIVEN** a customer has a Checking Account **WHEN** the Checking Account has a Savings Account linked as the ODP Source **THEN** no further Savings Accounts can be linked to this relationship

 |

#### [](#supplemental_information "Copy link to heading")Supplemental Information

Steps to calculate the Monthly Average Balance (MAB) are covered in [Minimum Balance Threshold and Fee](/vault-core/5-9/EN/product_library/common_business_features/fees#minimum_balance_threshold_and_fee_cpp_1922)

The threshold for each waiver can be configured per Account Tier see [Account Tiers](/vault-core/5-9/EN/product_library/common_business_features/account#account_tiers_cpp_1918)

The ODP feature is related to [Arranged Overdraft](/vault-core/5-9/EN/product_library/common_business_features/overdraft#arranged_overdraft)as it might be active alongside the Overdraft Protection.