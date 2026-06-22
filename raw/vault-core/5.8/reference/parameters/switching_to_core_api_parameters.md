---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/parameters/switching_to_core_api_parameters"
title: "Switching to Core API Parameters"
scraped_at: "2026-06-17T15:41:31.074Z"
images: 0
---

# Switching to Core API Parameters

This section explains how to complete the switch to the Core API Parameters resource, if you are currently using the legacy Smart Contract INSTANCE, TEMPLATE and GLOBAL parameters.

Thought Machine deems the switch complete when:

-   You are calling the [Parameters](/vault-core/5-8/EN/api/core_api#parameters) resource to manage Account and global-owned Parameters, and are no longer calling the [Global parameters](/vault-core/5-8/EN/api/core_api#Global_parameters) resource (for *Global* Parameters) or managing `instance_param_vals` (for *Instance* Parameters) via the `/v1/accounts` endpoints.
    
-   Your Smart Contracts are using the `expected_parameters` syntax to reference the account-owned and global Parameters, and no longer using any equivalent *Instance* or *Global* Smart Contract Parameters via the Smart Contract `parameters` and `global_parameters` syntaxes respectively.
    

warning

We recommend that you complete the switch over to the Core API Parameters resource, and do not subsequently use the previous methods for acting upon the (former) Instance and Global Parameters, because while many things will work as expected, some use cases will result in errors.

## [](#before_you_start "Copy link to heading")Before you start

Before beginning the switch to the use of Parameters via the Parameters resource, ensure that:

-   You are using Vault Core version 5.0 or later
    
-   All Accounts are backed by Smart Contract Language version 4 (CLv4) or higher
    
-   You have completed [switching from v1 to v2 Accounts API](/vault-core/5-8/EN/reference/accounts/switching_from_v1_to_v2_accounts_api)
    
-   You understand the [changes in Vault 5](/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview#parameters_changes) when you complete the Parameters switch
    
-   You are aware that Supervisor Contracts do not currently support `expected_parameters` syntax, and will not have visibility of parameters defined in supervised accounts that use `expected_parameters` syntax
    

## [](#step_1_retrieve_details_of_the_mapped_parameters "Copy link to heading")Step 1 - Retrieve details of the mapped Parameters

Whether you created Global and Instance Smart Contract Parameters on Vault Core 5, or upgraded to Vault Core 5, these Parameters will automatically be mapped to their new equivalents. The mapping is explained in [Data changes when using the Parameters resource](/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview#data_changes_when_using_the_parameters_resource).

Follow the steps in [Retrieving Parameters and their values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#retrieving_parameters_and_their_values) to obtain the mapped Parameter details.

## [](#step_2_use_the_new_parameters_endpoints_to_act_upon_your_parameters "Copy link to heading")Step 2 - Use the new Parameters endpoints to act upon your Parameters

Cease using both the [Global parameters](/vault-core/5-8/EN/api/core_api#global_parameters) resource and the `/v1/accounts` endpoints to act upon Account-owned and global-owned Parameters, and instead use only the [Parameters](/vault-core/5-8/EN/api/core_api#parameters) resource for these purposes. This allows you to adjust your integrations to use the new APIs without needing to convert Accounts onto the new Smart Contracts.

## [](#step_3_adapt_your_clv4_smart_contracts_to_use_the_expected_parameters_syntax "Copy link to heading")Step 3 - Adapt your CLv4 Smart Contracts to use the expected\_parameters syntax

To reference your Parameters:

1.  Add the necessary `expected_parameters` syntax to your CLv4 Smart Contract. For examples of the syntax for each Parameter type, see [Supported Parameter types](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#supported_parameter_types).
    
    info
    
    Thought Machine recommends adding `triggers_post_parameter_change_hook` and setting it to either `True` or `False`. For more information, see [Behaviour of the post\_parameter\_change\_hook](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#behaviour_of_the_post_parameter_change_hook). If you include `triggers_post_parameter_change_hook` for any `expected_parameter` in a CLv4 Smart Contract, you must also define both `triggers_pre_parameter_change_hook` and `triggers_post_parameter_change_hook` (as either `True` or `False`) for ALL of the `expected_parameters` in that CLv4 Smart Contract.
    
2.  If you no longer intend to use Template Parameters, remove the `@requires(parameters=True)` definition.
    
3.  Add the `data_fetchers` definition. For more information, see the [Expected Parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#expected_parameters) documentation.
    
4.  Use the [parameter mapping](/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview#parameter_mapping) section to ensure that you are accessing the Parameter values in the correct way.
    
5.  Remove any equivalent references to Instance Parameters from your `parameters` syntax.
    
6.  Remove the `global_parameters` syntax.
    

chat\_bubble

-   The `parameters` syntax can still be used to reference Template or Derived Parameters in your CLv4 Smart Contracts; however, if you plan to use the Adjustments Extension, be aware that Adjustments will not work with Template Parameters.
    
-   If you need to create new Parameters for use in your new Smart Contract versions (that are not available via the mapping), follow the steps in [Creating a Parameter](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_a_parameter).
    

## [](#step_4_convert_your_accounts_onto_the_new_smart_contract_versions "Copy link to heading")Step 4 - Convert your Accounts onto the new Smart Contract versions

Follow the guidance in [Account conversions](/vault-core/5-8/EN/reference/accounts/accounts_version_2#account_conversions) to convert your Accounts onto the Smart Contract versions which contain the `expected_parameters` syntax.