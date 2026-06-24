---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/accounts/account_attributes"
title: "Account Attributes"
scraped_at: "2026-06-22T19:16:52.506Z"
images: 0
---

# Account Attributes

## [](#what_are_account_attributes "Copy link to heading")What are Account Attributes?

### [](#purpose_of_account_attributes "Copy link to heading")Purpose of Account Attributes

Account Attributes are a way to expose account-specific information by computing outputs derived from Smart Contracts at particular points in time. For example, you can use Account Attributes to calculate an Account’s current balance and its closing balance from yesterday.

Account Attributes work similarly to derived parameters, but have clearer delineation from Core API Parameters, and enhanced functionality and performance.

chat\_bubble

Supervisor Contracts do not support Account Attributes functionality.

### [](#the_account_attribute_values_resource "Copy link to heading")The Account Attribute values resource

The [ListAccountAttributeValues](/vault-core/5-9/EN/api/core_api#accountattributevalue) API is used to compute and return Account Attribute values, once the Account Attributes have been [defined in the Smart Contract(s)](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines#defining_account_attributes). For more information, see [Retrieving calculated Account Attribute values](/vault-core/5-9/EN/reference/accounts/account_attributes#retrieving_calculated_account_attribute_values).

## [](#key_differences_between_derived_parameters_and_account_attributes "Copy link to heading")Key differences between derived parameters and Account Attributes

 
| Derived parameters | Account attributes |
| --- | --- |
| 
Are part of the Smart Contracts' `parameters` syntax, and require a `derived=true` flag to operate

 | 

Have explicit, clearly separated [attributes](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#attributes) Smart Contracts syntax

 |
| 

Return all possible derived values, whether requested or not

 | 

Return only the values requested, for the time(s) and account(s) requested

 |
| 

Must fetch all Vault Core data for every request

 | 

Can target fetching for specifically requested attributes, improving performance

 |

## [](#switching_from_derived_parameters_to_account_attributes "Copy link to heading")Switching from derived parameters to Account Attributes

### [](#before_you_start "Copy link to heading")Before you start

Before beginning the switch to the use of Account Attributes, ensure that:

-   All Accounts are backed by Smart Contract Language version 4 (CLv4) or higher
    
-   You are using [Accounts version 2](/vault-core/5-9/EN/reference/accounts/accounts_version_2), having completed [Switching from v1 to v2 Accounts API](/vault-core/5-9/EN/reference/accounts/switching_from_v1_to_v2_accounts_api) if necessary.
    

### [](#step_1_understand_how_your_integrations_handle_existing_derived_parameter_values "Copy link to heading")Step 1 - Understand how your integrations handle existing derived parameter values

You may be using derived parameters in your Smart Contracts. This is indicated by the presence of `Parameter.derived=True` in your `parameters` syntax, and will be returned from calls to the `/v1/accounts/` resource as `derived_instance_param_vals`.

error

There are differences in the way that attribute values are returned when compared to derived parameters. For example, all attribute values are optional. As such, ensure that any downstream integrations are updated to handle these potential variations.

### [](#step_2_update_your_smart_contract "Copy link to heading")Step 2 - Update your Smart Contract

1.  Follow the Process for defining Account Attributes in the [Smart Contracts documentation](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#account_attributes) to add any relevant Attributes to the Smart Contract.
    
2.  Use the [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook) to recreate your [derived\_parameter\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#derived_parameter_hook) logic.
    
    chat\_bubble
    
    The return value of the `attribute_hook` differs from the `derived_parameter_hook`, so ensure that you map the new values appropriately. It is common practice to use branching if…else or match…case statements within the hook to control the logic flow for each of the declared attributes. For an example, see the Smart Contracts [Common examples documentation](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_examples#account_attributes).
    

### [](#step_3_convert_accounts_over_to_the_new_smart_contract_versions "Copy link to heading")Step 3 - Convert Accounts over to the new Smart Contract version(s)

Upload any new Smart Contract version(s) using the Account Attributes logic via `POST /v1/product-versions`, and then [Convert your Accounts](/vault-core/5-9/EN/reference/accounts/accounts_version_2#account_conversions) to the new Smart Contract version(s).

### [](#step_4_use_the_api_to_retrieve_calculated_account_attribute_values "Copy link to heading")Step 4 - Use the API to retrieve calculated Account Attribute values

Follow the process in [Retrieving calculated Account Attribute values](/vault-core/5-9/EN/reference/accounts/account_attributes#retrieving_calculated_account_attribute_values).

## [](#managing_account_attributes "Copy link to heading")Managing Account Attributes

This section contains tutorials on how to perform some of the common tasks with Account Attributes. It includes example API requests and responses.

### [](#defining_account_attributes_in_smart_contracts "Copy link to heading")Defining Account Attributes in Smart Contracts

For more information about defining Account Attributes in Smart Contracts, see the [Account Attributes](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#account_attributes) section in the Smart Contracts documentation.

### [](#retrieving_calculated_account_attribute_values "Copy link to heading")Retrieving calculated Account Attribute values

chat\_bubble

-   It is possible to receive an empty or null value from an Account Attribute retrieval request if the hook returns `None`
    
-   While Vault Core will validate the `data_type`, the values that may be returned are not restricted, so ensure that your integrations contain any necessary logic to control potential edge-case values
    

To retrieve calculated Account Attribute values, call `GET /v1/account-attribute-values`, providing the: - Number of Account Attribute values to be returned in `page_size` - `account_ids` of the Accounts you want to include - `attribute_names` that you want values calculated for - Any `effective_timestamps` required (to calculate values based on each effective time)

error

-   Each combination of `account_id` and `attribute_name` is resolved independently; where the request doesn’t resolve to *any* valid combinations, an empty response is returned (the request does not error).
    
-   Account Attribute values are calculated at the point in time at which the API call is made, therefore two calculations of the same value may not necessarily yield the same output; for example as a result of backdating between the first and second API call.
    

#### [](#example_account_attribute_value_retrieval_request "Copy link to heading")Example Account Attribute value retrieval request

#### [](#example_response_to_account_attribute_value_request "Copy link to heading")Example response to Account Attribute value request

## [](#supported_account_attribute_types "Copy link to heading")Supported Account Attribute types

For information about the supported Account Attribute types, see the [Account Attributes](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#account_attributes) Smart Contracts documentation.

## [](#troubleshooting_account_attributes "Copy link to heading")Troubleshooting Account Attributes

### [](#listaccountattributevalues_api_did_not_return_any_values_for_a_given_combination_of_account_id_and_attribute_name "Copy link to heading")ListAccountAttributeValues API did not return any values for a given combination of account\_id and attribute\_name

This is due to either an account\_id being provided for an Account that does not exist, or the attribute name referencing an attribute that does not exist in the Smart Contract backing the Account (for example, if the Attribute was removed from the Smart Contract):

In this scenario an error is not produced. To remedy this, check that the Account exists, and that the specified Attribute is available to the Account:

1.  Check that the Account exists by calling `GET /v2/accounts:batchGet?ids=<account-id>`
    
2.  If the Account exists, use the product version id from the previous account response to check that the specified Account attribute is defined within the Smart Contract - call `GET /v1/product-versions:batchGet?ids=<product-version-id>`. The available attributes for the given Account are accessible from the `attributes` field on the product version.
    

chat\_bubble

For this reason it is a good idea to annotate any attributes in each Smart Contract, to caution against removing or changing them before first checking that all integrations have been upgraded to a future-compatible configuration.

### [](#request_execution_failure_due_to_smart_contract_error "Copy link to heading")Request Execution Failure due to Smart Contract error

If the /v1/account-attribute-values request fails, and the provided error message mentions an issue with Smart Contract execution (FailedPrecondition) or InvalidArgument errors, then this is most likely an issue with the provided Smart Contract version that the Account Attribute is running against. To remedy this:

1.  Check the Smart Contract, it is likely to need modifying and re-testing according to the error returned.
    
2.  Convert the affected Account(s) to the modified Smart Contract version.