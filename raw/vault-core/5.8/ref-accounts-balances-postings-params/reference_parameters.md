---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/parameters"
title: "Parameters"
scraped_at: "2026-05-05T20:05:36.495Z"
images: 0
---

# Parameters

## [](#what_are_parameters "Copy link to heading")What are Parameters?

### [](#purpose_of_parameters "Copy link to heading")Purpose of Parameters

Parameters are a way to configure Account behaviour without making changes to the underlying Smart Contract code; for example, instead of changing the interest on a set of Accounts via the Smart Contract, you can use a Parameter to control this setting.

From Vault Core 5 onwards, we have redesigned Parameters so that they can be applied using any required hierarchies, and associated to any tranches of Accounts; for example to manage aspects of Accounts related to geographical regions separately from other Product features. Parameters have therefore become a separate resource, abstracted away from Smart Contracts. With Smart Contracts Language v4 (CLv4) we have added the `expected_parameters` syntax to leverage the functionality offered by the Parameters resource.

chat\_bubble

-   For backwards compatibility, you can continue to use global and instance Parameters (with the `global_parameters` and `parameters` syntax respectively) until you are ready to [switch to the Core API Parameters resource](/vault-core/5-8/EN/reference/parameters/switching_to_core_api_parameters)
    
-   Supervisor Contracts do not currently support `expected_parameters` syntax, and will not have visibility of parameters defined in supervised accounts using `expected_parameters` syntax
    

### [](#parameter_and_parametervalue_resources "Copy link to heading")Parameter and ParameterValue resources

The [Parameter](/vault-core/5-8/EN/api/core_api#parameter) resource (A in the below diagram) is used to create the *types* of Parameter you want to use, and enforce any constraints on the values of each Parameter type.

The [ParameterValue](/vault-core/5-8/EN/api/core_api#parametervalue) resource is used to create or update the *values* of the Parameter, and set the hierarchical level to which these values apply. When a Parameter Value comes into effect (B), it can be changed by creating a new value with an `effective_from_timestamp` to succeed it (C). This timestamp will automatically trigger the termination of the previous value (by setting its `effective_to_timestamp`).

![Parameters and values](/vault-core/5-8/EN/_astro/uuid-102ff3d3-e407-95ab-4706-5ee9748b4b98-en.3GJIZIDB_1EPdpB.svg)

### [](#parameter_value_inheritance "Copy link to heading")Parameter value inheritance

Parameters can apply values:

-   At a global level; or
    
-   Within a Parameter Value Hierarchy (which itself can contain multiple levels); or
    
-   At an Account level (where the Account overrides all other levels)
    

![param\_overview.svg](/vault-core/5-8/EN/_astro/param_overview.DIX0OwLY_tjnpV.webp)

 
| Parameter (value) level | Description |
| --- | --- |
| 
1\. Global level

 | 

Represented by `parameter_value.global` having the value set to `true`, this is the 'global' level Parameter value (A in the above diagram). \*

 |
| 

2\. Parameter Hierarchy level

 | 

Represented by the `parameter_value` being owned by a node of the Parameter Value Hierarchy (`parameter_value_hierarchy_node_id`), this level contains a hierarchy of Parameter Values that can apply to the account independently of product lines. Examples here are lines of business, geographical regions or brands (B).

 |
| 

3\. Account level

 | 

Represented by `parameter_value` having an `account_id` set, this is the Account level Parameter value (C), overriding any value at the above levels.

 |

\*In the initial release of Vault Core 5 we introduced the `parameter_value.account_config_group_id` value of "root" as the global parameter. This will continue to work as a global level parameter, but because it is deprecated, all integrations must eventually use `parameter_value.global: true`.

[

arrow\_forward Switching to Core API Parameters

How to switch to the Vault Core 5 Parameter system



](/vault-core/5-8/EN/reference/parameters/switching_to_core_api_parameters)

[

lan Building and managing the Parameter Value Hierarchy

How to design, build, and adapt the Parameter Value Hierarchy



](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy)

[

settings\_account\_box Using Core API Parameters

Building a Parameter Value Hierarchy and managing Parameters



](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters)