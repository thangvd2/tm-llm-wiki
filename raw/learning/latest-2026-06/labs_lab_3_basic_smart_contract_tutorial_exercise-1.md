---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-1"
title: "Exercise 1 - Introduction to Smart Contracts"
scraped_at: "2026-06-17T05:18:56.336Z"
images: 0
---

# Exercise 1 - Introduction to Smart Contracts

## [](#setup "Copy link to heading")Setup

Within the Lab Starter Pack, under `smart_contract_tutorials/library/basic_smart_contract_tutorial`, you’ll find a series of folders labelled `exercise_*`, that contain 2 python files - `deposit.py` and `test.py`. Ensure you’ve read the README at the top level, and have run `developer_setup.sh`. As you go through the exercises, you’ll be editing the `deposit.py` files, and running the test file to ensure you’ve correctly completed each exercise.

The [Product Library](/vault-core/latest/EN/product_library) can be referred to for more examples of working Smart Contracts used in different business use cases.

## [](#introduction "Copy link to heading")Introduction

Vault is a core banking system; it provides a System of Record (SoR) for value held across transacting bank accounts. This is achieved via operations like:

-   Account creation and lifecycle management
    
-   Posting credits/debits to the ledger
    
-   Deriving account balances from postings and updating them accordingly
    
-   Externally-facing APIs interfacing with Vault entities
    

This functionality is encapsulated in the Vault Platform Layer and is common across all Vault configurations and deployments per bank. However, banks differ in many ways and will want to offer different products to their customers.

As well as providing an SoR, Vault is also a platform for developing financial products.This overview introduces the tool provided with Vault that empowers developers to create innovative financial products - Smart Contracts.

A Smart Contract is computer code that digitally enforces a particular financial agreement / Terms and Conditions (T&Cs) between various parties, one of them being the bank. Smart Contracts therefore define the financial behaviour of an account, performing actions throughout the account life-cycle.

Smart Contracts implement such T&Cs in a subset of Python developed specifically for Vault, which interacts with the core banking system by:

-   Initiating certain postings to and from the account (e.g. interest payment, fees)
    
-   Making accept/reject decisions on incoming postings (incoming card authorisations, credit card repayments)
    
-   And much more!
    

Every account in Vault is backed by a [Smart Contract](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/overview/); from a simple savings account to a complex business loan, anyone can encode the financial behaviour of any financial product in the Contracts Language API framework.

Smart Contracts backing individual accounts are instances of a particular Smart Contract template. For example, we can write a "Savings account" template from which new accounts can be created by referencing that template. Templates are uploaded and versioned by Vault, and for a given customer account (e.g. Savings Account) there could have been many versions of the same contract - corresponding to code amendments for logic tweaks, bug fixes, etc. However, only one version is active at any given point in time for a given account. Read more about the Smart Contracts deployment in Vault [here](/vault-core/latest/EN/smart_contracts/introduction#deployment_in_vault).

## [](#contracts_language_api "Copy link to heading")Contracts Language API

Contracts Language API is a Python-based language which Smart Contracts, Supervisor Contracts and Contract Modules are written in. Currently, Contracts Language API has two major versions: version 3 and 4, with version 4 being recommended and superseding version 3 by providing many improvements and benefits. Read more about the Contracts Language API 4 release in [Major version notes](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/version_notes).

In this course, we’ll be learning version 4 of the language, one area at a time. If you’d like to view the full reference for the language, this can be found in [Smart Contract API reference](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx).

## [](#deployment_in_vault "Copy link to heading")Deployment in Vault

As previously discussed, every account in Vault is backed by a Smart Contract instance. When a Smart Contract is uploaded to Vault (see [Product Versions](/vault-core/latest/EN/api/core_api#productversion) in the Core API), the Vault set of Smart Contract Templates gets updated. Such an upload can either create a new Contract Template or update an existing one. As mentioned in an earlier section, we update an existing Template for a variety of reasons; for example when there is a change of Terms & Conditions or to fix a bug. After you have uploaded the Smart Contract Template, you can instantiate it to any number of accounts; for example, millions of savings accounts can be instantiated by a given Savings Account Contract Template.

There are two recommended ways by which we load Smart Contracts into Vault:

-   Core API, via a `POST` request
    
-   The Configuration Layer Utility (CLU), the Vault configuration tool used to group configuration layer resources and upload them to Vault
    

However, we won’t actually be uploading any templates while going through these exercises. Instead, we will be making calls to the [Simulation API](/vault-core/latest/EN/api/core_api#productversion), which will simulate the logic of our templates with pre-defined test cases that we’ve put in the Labs Starter Pack folder.

When creating new Smart Contracts to deploy for production, simulation testing is encouraged to iron out any bugs before uploading to your instance of Vault.

## [](#exercise "Copy link to heading")Exercise

There is no code to write or be tested on in this exercise, this was informational only. There will be tasks to complete in following exercises.