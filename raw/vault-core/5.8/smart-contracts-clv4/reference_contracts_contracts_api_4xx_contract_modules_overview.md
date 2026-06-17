---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview"
title: "Contract modules overview"
scraped_at: "2026-06-16T16:36:38.827Z"
images: 0
---

# Contract modules overview

## [](#what_is_a_contract_module "Copy link to heading")What is a Contract Module?

A Contract Module is a collection of helper functions that allow you to write commonly-used code once and share the code across a number of Smart Contracts.

chat\_bubble

In version 4.0+, any imported Contract Module will be available throughout the contract. You cannot access Contract Modules via the [Supervisor Contracts Vault object](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault) or the `vault.supervisees` dictionary.

## [](#using_contract_modules_in_smart_contracts "Copy link to heading")Using Contract Modules in Smart Contracts

To use Contract Modules in Contracts Language API 4.0+, import the alias from `contract_modules` using standard Python syntax.

chat\_bubble

When importing Contract Modules, the import statement should start exactly with the `from contract_modules import`. The `contract_modules` is a dedicated namespace where the Contract Modules linked to the Smart Contract are added during the contract execution in real Vault.

This alias can then be linked to the Smart Contract Version using the [linking endpoint](/vault-core/5-8/EN/api/core_api#smartcontractmoduleversionslink), and then used to call the Contract Module code throughout the Contract during hook execution (note, Contract Modules cannot be called from the metadata). For local development and unit testing of Contracts using Modules, follow the setup instructions in the [Contracts SDK documentation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#unit_testing_contracts).

chat\_bubble

The Contract Modules import *does not* support further aliasing of the module imports. For example `from contract_modules import module_alias as new_module_alias` is *not allowed*. See [All Types of Imports](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#all_types_of_imports).

## [](#contract_module_limitations "Copy link to heading")Contract Module limitations

Contract Modules only require a declaration of the Contract Language API version in the metadata (which must be the same major version as the Contract that imports it), but can optionally import Python modules or custom types from `contracts_api` with the same restrictions that apply to other Contract code.

All custom types are now common to Smart and Supervisor Contracts, as well as Contract Modules - see [Common Contract types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx) section.

If the [Account Vault object](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault/) is required by a Contract Module function, it must be passed in as an argument just as it would be for a helper function in the Smart Contract itself.