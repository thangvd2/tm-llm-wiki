---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/vault_release_information/"
title: "Release information"
scraped_at: "2026-06-17T15:45:13.731Z"
images: 0
---

# Release information

## [](#whats_new_in_this_release "Copy link to heading")What’s new in this release

Vault Core 5.8 introduces a number of enhancements, some highlights include:

### [](#product_based_access_control_for_the_vault_accounts_app "Copy link to heading")Product-based access control for the Vault Accounts App

You can now manage user access to the Vault Accounts App based on Products. This feature leverages OIDC authentication. For more information, see [Setting up and configuring OIDC authentication](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication).

chat\_bubble

Product-based access control is only available as an Extension. Contact your Thought Machine representative for more information.

### [](#improved_values_yaml_configuration "Copy link to heading")Improved values.yaml configuration

To make it much simpler to set up Vault Core, you can now generate a values.yaml file containing only the values that require user input for configuration (without defaults), rather than the full list of all possible values.

To generate the values.yaml file, run the command `vaultctl values generate`. If you still want to generate the full file, run `vaultctl values generate --full`. For more information, see [Generate the values file](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#generate_the_values_file).

### [](#performance_enhancements_for_adjustments "Copy link to heading")Performance enhancements for Adjustments

Thought Machine has increased the performance of the Vault Core Adjustments feature. For more information, see the [Performance report](/vault-core/5-8/EN/vault_release_information/performance_and_testing#the_performance_report).

### [](#parameter_value_hierarchy_in_contract_simulation "Copy link to heading")Parameter Value Hierarchy in Contract Simulation

You can now simulate the [Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy) by defining `instructions[].create_parameter_value_hierarchy_node`.

You can also create and update Parameter Value Hierarchy nodes when creating or updating accounts (in `instructions[].v2_create_account` and `instructions[].v2_update_account`).

For more information, see [Contract Simulation API](/vault-core/5-8/EN/api/core_api#contracts).

### [](#batch_creation_of_parameter_values_in_contract_simulation "Copy link to heading")Batch creation of Parameter Values in Contract Simulation

You can now simulate batch creating [Parameter Values](/vault-core/5-8/EN/api/core_api#parametervalue) by using `instructions[].batch_create_parameter_values`.

For more information, see [Contract Simulation API](/vault-core/5-8/EN/api/core_api#contracts).

### [](#documentation_improvements "Copy link to heading")Documentation improvements

We’ve made several updates to various sections of the documentation to improve navigation and usability. Here are the highlights:

-   Repurposed the Vault Core 5 overview as a more general [Vault Core overview](/vault-core/5-8/EN/vault_core_overview) and collected key changes in a new, [dedicated section](/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5).
    
-   Redesigned the [Accounts](/vault-core/5-8/EN/reference/accounts) and [Parameters](/vault-core/5-8/EN/reference/parameters) documentation into single, unified sections.
    
-   Revamped both the [Getting Started with Vault Core](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core) and [Configuring cloud infrastructure](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure) guides to better onboard users when setting up Vault Core.
    
-   Consolidated all information for the Observability Stack, Grafana dashboards, and Alerts into a new, single section on [Observability and monitoring](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring).