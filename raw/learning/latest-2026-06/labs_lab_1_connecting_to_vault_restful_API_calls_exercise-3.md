---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_1_connecting_to_vault_restful_API_calls/exercise-3"
title: "Exercise 3 - Global Parameter Values, and Balances"
scraped_at: "2026-06-17T05:18:38.346Z"
images: 0
---

# Exercise 3 - Global Parameter Values, and Balances

## [](#overview "Copy link to heading")Overview

Welcome to this Lab session covering how:

-   To use Global Parameter Values for data that is used by many Products on the Core such as a base interest rate.
    
-   How we can use the Core API to retrieve balances on an account.
    

## [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Sandbox for training purposes, feel free to reach out to your Partner Manager, Client Success Manager or Account Director if you’d like access to this resource.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com).

error

Throughout this lab make sure to update \`$VAULT\_CORE\_ENVIRONMENT\_URL\`to the URL of your Vault instance.

## [](#globally_defined_parameter_values "Copy link to heading")Globally Defined Parameter Values

The `ParameterValue` resource is used to create or update the values of a Parameter in Vault Core. [Parameters](/vault-core/latest/EN/vault_v5/parameters) can apply values:

-   At a global level; or
    
-   Within a Parameter Value Hierarchy (which itself can contain multiple levels); or
    
-   At an Account level
    

In this exercise we will focus on applying Parameter Value’s at the global level.

You can update ParameterValue’s through the Core API, and when a global level value is updated, the change is reflected across all products that reference that parameter, unless overridden by another account level or hierarchy node level value.

A bank might use a Parameter to store the central bank’s interest rate. When the central bank updates its interest rate, the bank can update the global level Parameter Value. This update will automatically reflect across all accounts and products that use this interest rate for their financial calculations.

Use the /v1/parameters endpoint to create a Base rate Parameter like below:

-   `id`: We will refer to the parameter using this ID. Make sure it’s unique (e.g. 'base\_rate\_$username'), otherwise we may try and create a parameter that already exists. Save this id as we will use it in the next step
    

Next use the v1/parameter-values endpoint to create a global level value for the Parameter you created like below:

## [](#gathering_information_on_an_account "Copy link to heading")Gathering Information on an Account

There are many different cases where you may need to find out more information about an account using the Core API. You may wish to find out [what version of a smart contract](/learning/latest/EN/how_to_guides/how_to_find_a_product_version_from_account) an account is using, or perhaps what flags are currently active on it. By far the most common is querying the balance on an account.

### [](#account_balances "Copy link to heading")Account Balances

Balances derived from postings in Vault are calculated across 4 coordinates for every account:

-   **Asset**: Each account’s balance space is partitioned by assets such as cash or commercial money. Custom types like loyalty scheme points can also be defined.
    
-   **Denominations**: Each asset space is subdivided into denominations.
    
-   **Addresses**: Denominations are divided into addresses. Each denomination space always has a default address, and additional addresses can be dynamically created by a contract to represent any account structure.
    
-   **Phases**: Every address has three phases: Committed, Pending In, or Pending Out. These phases represent transition states for postings (e.g., Pending Out is used for card authorizations).
    

When we use the [Balances endpoint](/vault-core/latest/EN/api/core_api#Balances) to fetch the balances on an account a list of balances objects are returned, one for each combination of asset, denomination, address and phase. Each Balance object contains the sum of all debits and the sum of all credits made to the address. You can also find the difference between these two amounts in the 'amount' field. Which value is subtracted from the other is determined by the account’s Tside (Transaction side).

### [](#sub_exercise_two "Copy link to heading")Sub-exercise Two

Use the [BalancesLive list endpoint](/vault-core/latest/EN/api/core_api#balanceslive) to retrieve the balances on the account created in exercise 2 (Customising Accounts).