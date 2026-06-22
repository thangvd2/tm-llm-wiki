---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/accounts"
title: "Accounts"
scraped_at: "2026-06-22T19:16:44.014Z"
images: 0
---

# Accounts

## [](#what_are_vault_core_accounts "Copy link to heading")What are Vault Core Accounts?

### [](#purpose_of_accounts "Copy link to heading")Purpose of Accounts

An Account in Vault Core is one of two types:

-   *Customer Account*: Associated with one or more customers, has a lifecycle and is governed by Smart Contract logic.
    
-   *Internal Account*: Used to allocate and track funds owned by the financial institution, does not have a lifecycle (is always 'open' and cannot be closed) and is not governed by Smart Contract logic
    

A Customer Account in Vault Core is an instance of a financial Product. The configuration and state of an Account determines how that Account reacts to certain input; for example whether a payment is accepted, or how and when interest is calculated.

### [](#how_to_define_customer_account_behaviour "Copy link to heading")How to define Customer Account behaviour

The primary means of defining the financial behaviour is via:

-   *The Smart Contract that the Account uses*: A [Smart Contract](/vault-core/5-9/EN/reference/contracts/) defines Python code that is run in reaction to incoming [Postings](/vault-core/5-9/EN/reference/postings), recurring events, and so on.
    
-   *The Parameters that are associated with the Account*: [Contract Parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#contract_parameters) are used by an Account’s underlying Smart Contract as inputs to decisions and calculations; for example the overdraft limit on a current account.
    
    chat\_bubble
    
    The Accounts version 1 API is only compatible with Smart Contract [parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#parameters) syntax - it is not compatible with the [Expected Parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#expected_parameters) syntax introduced in Vault Core 5.
    

Outside the Account, there are various other means of influencing its behaviour:

-   [Restrictions](/vault-core/5-9/EN/api/core_api#restrictions) can be applied to the Account or to an Account’s stakeholder to prevent certain operations, such as accepting debits
    
-   [Flags](/vault-core/5-9/EN/api/core_api#flags) can be toggled for the Account to influence the behaviour of its Smart Contract, such as preventing a particular fee being applied
    
-   The Account can be added to a [Plan](/vault-core/5-9/EN/api/core_api#plans), which allows decisions to be based on all the Accounts in that Plan.
    

### [](#a_typical_customer_account_lifecycle "Copy link to heading")A typical Customer Account lifecycle

This is an example of a typical lifecycle of a Customer Account:

1.  Open the Account, with initial data.
    
2.  Run scheduled operations, such as interest accruals.
    
3.  Change [parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#contract_parameters), such as interest rates and fees.
    
4.  Convert the Account to a new Smart Contract version.
    
5.  Close the Account.
    

### [](#role_of_the_account_resource "Copy link to heading")Role of the Account resource

The Account resource plays a major role in determining the outcome of Customer Account journeys:

-   It specifies which [Smart Contract](/vault-core/5-9/EN/reference/contracts/) to use
    
-   Its status (OPEN, CLOSED, and so on) is usually the first port-of-call in determining whether something can proceed
    
    chat\_bubble
    
    Account statuses vary between version 1 and version 2 Accounts. For more information, see the overview of [Accounts changes](/vault-core/5-9/EN/vault_core_overview/whats_new_in_vc5/overview#accounts_changes) in Vault Core 5.
    
-   In the case of the Accounts version 2 API, the [Processing Group](/vault-core/5-9/EN/reference/processing_groups) of the Account determines the time zone its schedules operate in.
    

[

account\_balance Accounts version 1

The legacy Accounts system



](/vault-core/5-9/EN/reference/accounts/accounts_version_1)

[

account\_balance Accounts version 2

Managing version 2 Accounts



](/vault-core/5-9/EN/reference/accounts/accounts_version_2)

[

arrow\_forward Switching from the v1 to v2 API

How to switch Accounts to the version 2 service



](/vault-core/5-9/EN/reference/accounts/switching_from_v1_to_v2_accounts_api)

[

user\_attributes Account Attributes

Point-in-time Account computations



](/vault-core/5-9/EN/reference/accounts/account_attributes)

[

speed High-volume Accounts

High-throughput Customer Accounts



](/vault-core/5-9/EN/reference/accounts/high_volume_accounts)