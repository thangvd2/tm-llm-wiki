---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/introduction"
title: "Introduction"
scraped_at: "2026-06-16T16:36:30.692Z"
images: 0
---

# Introduction

Vault is a core banking system; it provides a System of Record (SoR) for value held across transacting bank accounts. This is achieved via operations like:

-   Account creation and lifecycle management
    
-   Posting credits/debits to the ledger
    
-   Deriving account balances from postings and updating them accordingly
    
-   Externally-facing APIs interfacing with Vault entities
    

This functionality is encapsulated in the Vault *Platform Layer* and is common across all Vault configurations and deployments per bank. However, banks differ in many ways and will want to offer different *products* to their customers.

As well as providing an SoR, Vault is also a platform for developing financial products. This overview introduces the tool provided with Vault that empowers developers to create innovative financial products - *Smart Contracts*.

A Smart Contract is a piece of code that digitally enforces a particular financial agreement / Terms and Conditions (T&Cs) between various parties, one of them being the bank. Smart Contracts therefore define the financial behaviour of an account, the protocol by which the balance is mutated.

Smart Contracts implement such T&Cs in a subset of Python developed specifically for Vault, which interacts with the core banking system by:

-   Initiating postings into the account (e.g. interest payment, fees)
    
-   Making accept/reject decisions on incoming postings (incoming card authorisations, credit card repayments)
    
-   And much more, covered in this documentation
    

Every account in Vault is backed by a [Smart Contract](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/overview/); from a simple savings account to a complex business loan, we encode the financial behaviour of any bank product in the [Contracts language API](/vault-core/5-8/EN/reference/contracts/introduction#contracts_language_api) framework. Smart Contracts backing individual accounts are *instances* of a particular Smart Contract *template*. For example, we can write a "Savings account" template from which new accounts can be created by referencing that template. Templates are uploaded and versioned by Vault, and for a given customer account (e.g. savings) there could have been many versions of the same contract - corresponding to code amendments for logic tweaks, bug fixes, etc. However, only one version is active at any given point in time for a given account. Read more about deploying Smart Contracts in Vault [here](/vault-core/5-8/EN/reference/contracts/introduction#deployment_in_vault).

Vault also offers [Supervisor Contracts](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_overview/); these are a special type of Smart Contract, which can be used to connect other Smart Contracts together to create more sophisticated banking products.

Finally, Contracts Language API also supports the [Contract Modules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview/) functionality, which enables code reusability across different banking products.

## [](#contracts_language_api "Copy link to heading")Contracts Language API

Contracts Language API is a Python-based language which Smart Contracts, Supervisor Contracts and Contract Modules are written in. Currently, Contracts Language API has two major versions: version 4 and 3, with version 4 being recommended and superseding version 3 by providing many improvements and benefits. Read more about the Contracts Language API 4 release [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes/).

The main Contracts reference documentation is split into two main sections:

-   [Contracts reference for the major version 4](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/) of the Contracts Language API;
    
-   [Contracts reference for the major version 3](/vault-core/5-8/EN/reference/contracts/contracts_api_3xx/) of the Contracts Language API.
    

Some other sections are agnostic of the Contracts Language API version and therefore are available at the top level of the Contracts reference documentation:

-   [Introduction](/vault-core/5-8/EN/reference/contracts/introduction/)
    
-   [Contract simulation](/vault-core/5-8/EN/reference/contracts/contract_simulation/)
    
-   [Contracts Transaction Bridge](/vault-core/5-8/EN/reference/contracts/contracts_transaction_bridge/)
    

## [](#deployment_in_vault "Copy link to heading")Deployment in Vault

As previously discussed, every account in Vault is backed by a Smart Contract instance.

When a Smart Contract is uploaded to Vault (see [Product Versions](/vault-core/5-8/EN/api/core_api#productversion) in the Core API), the Vault set of Smart Contract Templates gets updated. Such an upload can either create a new Contract Template or update an existing one. As mentioned in an earlier section, we update an existing Template for a variety of reasons; for example when there is a change of Terms & Conditions or to fix a bug.

After you have uploaded the Smart Contract Template, you can instantiate it to any number of accounts; for example, millions of savings accounts can be instantiated by a given Savings Account contract template.

There are three ways by which we load Smart Contracts into Vault:

-   Core API, via a POST request
    
-   Vault Operations Dashboard, via the "Product Management/add product" page
    
-   The Configuration Layer Utility (CLU), the Vault configuration tool used to group configuration layer resources and upload them to Vault
    

Note that [Supervisor Contracts](/vault-core/5-8/EN/api/core_api#supervisorcontractversion) and [Contract Modules](/vault-core/5-8/EN/api/core_api#contractmoduleversion) can be uploaded to Vault using analogue Core API endpoints, so they can further enhance banking Products.