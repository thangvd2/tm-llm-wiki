---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/overview"
title: "Smart Contracts overview"
scraped_at: "2026-06-17T15:39:48.608Z"
images: 0
---

# Smart Contracts overview

## [](#what_is_a_smart_contract "Copy link to heading")What is a Smart Contract?

A Smart Contract is a piece of code that digitally enforces a particular financial agreement - Terms and Conditions (T&Cs) between various parties, one of them being the bank. Smart Contracts therefore define the financial behaviour of an account, the protocol by which the balance is mutated.

Smart Contract code is generally organised around three key areas:

-   A series of [hooks](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/), which are Python functions that implement different aspects of financial behaviour from the account lifecycle - for example, `pre_posting_hook` is invoked by Vault every time there is an incoming posting (credit or debit) to the account backed by that contract. The `pre_posting_hook` may instruct Vault to reject the posting if, for example, there are insufficient funds in the account.
    
-   A collection of [metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata/) attributes that statically define various configuration data for the contract, for example, scheduled `event_types` and the `event_types_groups` for which the `scheduled_event_hook` defined in the contract would be executed periodically.
    
-   One of the key metadata attributes is a set of [parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#parameters) that provide configuration values for the contract to utilise - for example, an "overdraft limit" parameter can be used by the `pre_posting_hook` of the contract to assess whether to accept a debit posting that takes the account balance below 0.
    

## [](#smart_contract_hooks "Copy link to heading")Smart Contract hooks

Smart Contracts encode the financial Terms and Conditions (T&Cs) of a Vault account in the form of Python code. One of the main building blocks of a Smart Contract is the contract [hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#hooks). Hooks are Python functions called by Vault throughout the Smart Contract lifecycle. This can involve:

-   Reacting to external account events, such as performing a balance check during an attempted withdrawal of funds.
    
-   Performing periodic actions such as calculating and paying monthly interest into an account.
    

Triggering hook execution typically produces a set of outputs, for example, the configuration of the account scheduled events run times, and/or *hook directives*. Hook directives typically involve:

-   Instruction of one or more postings (financial value mutation).
    
-   Modification of account state, such as updating an account schedule configuration (resource mutation).
    
-   Triggering an Account Notification (initiate some integrated client process).
    

Some hooks can also produce a [rejection](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection), which enables the contracts to reject an account lifecycle event for some business reason, for example a new posting from the account due to insufficient balance.

Every hook in the Contracts Language API 4.0+ returns a different *results* class instance, which, depending on the hook, allows you to return the directives, outputs or the rejection.

All hooks also take two arguments:

-   [*vault*](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#vault_object), which allows you to interrogate Vault’s state;
    
-   *hook\_arguments*, which, depending on the hook, can provide additional information to the contract execution about the particular account lifecycle event. See [hooks](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/) for a detailed list of all supported Vault API functions, also for the hook arguments and results classes documentation.
    

Different hooks have different performance implications based on when they are called in the account lifecycle. For example, the `pre_posting_hook` that implements the logic of whether to accept or reject an incoming posting is typically subject to strict SLAs by some payment schemes (such as card payments), therefore needs to be performant. This is in contrast to hooks like `scheduled_event_hook` or `conversion_hook` that should definitely be performant but not within really tight, externally-imposed SLAs. These different performance expectations are also referred to as the [Hot Path](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#the_hot_path) and *non-Hot Path* hooks.

As an example, a simple `pre_posting_hook` could look something like this:

## [](#smart_contract_metadata "Copy link to heading")Smart Contract metadata

The Smart Contract metadata is a collection of various attributes that are statically defined in the Smart Contract code. They are parsed on the Smart Contract Template [creation](/vault-core/5-8/EN/api/core_api#productversion) and stored against the Smart Contract Product resource. The full list of all supported Smart Contract *metadata* attributes can be found [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata/), although one of the most important attribute - *parameters* - is explained in more detail below.

### [](#smart_contract_parameters "Copy link to heading")Smart Contract Parameters

All bank accounts need some parameterisation, e.g. a current account has an overdraft limit, while an ISA has an interest rate and maturity period. The Smart Contracts that back each account are themselves *stateless*, therefore they rely on API calls to interrogate Vault as the ultimate source of truth for account state.

One of the key elements of state exposed to Smart Contracts are [Parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parameter). These correspond to the configuration of financial behaviour and consist of three levels:

1.  Instance-level parameters are unique to each account - Smart Contract instance. For example, "overdraft limit" is a parameter that changes from account to account depending on each customer’s credit score.
    
2.  Template-level parameters are shared by all instances of a Smart Contract. For example, all instances of a savings account share a common "interest rate" parameter, regardless of the individual account particulars.
    
3.  Global-level parameters are available to all Smart Contracts (and other Vault services). Examples are some central bank interest rates or the bank’s home currency.
    

Instance and Template-level parameters are defined in contract code as Python objects. Upon parsing the Smart Contract Template code, Vault sets up the parameters based on the instantiation arguments. These are fields that describe what the parameter is and how it can be used. We illustrate this in the following example: