---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/parameters/using_core_api_parameters"
title: "Using Core API Parameters"
scraped_at: "2026-05-05T20:05:48.700Z"
images: 0
---

# Using Core API Parameters

This section explains how to manage Core API Parameters and their values.

lightbulb

If you have an existing Parameters integration or have recently upgraded to Vault Core 5, see the overview of [Parameters changes](/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview#parameters_changes) for more information about how the Core API Parameters system is different from the legacy Smart Contract INSTANCE, TEMPLATE and GLOBAL parameters.

## [](#managing_parameters "Copy link to heading")Managing Parameters

This section contains tutorials on how to perform some of the common tasks with Parameters. It includes example API requests and responses, and the streaming events you can expect as a result of mutations.

### [](#creating_a_parameter "Copy link to heading")Creating a Parameter

To create a [Parameter](/vault-core/5-8/EN/api/core_api#parameter), call `POST /v1/parameters`, providing the:

-   Unique `request_id`
    
-   `parameter.id` of the parameter you want to create
    
-   Parameter type and any declared constraints as part of `parameter.constraint`
    
    chat\_bubble
    
    For more information about Parameter types and examples of their use, see [Supported Parameter types](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#supported_parameter_types).
    

#### [](#example_create_parameter_request "Copy link to heading")Example create Parameter request

The following example is a request to create a decimal-type Parameter:

#### [](#example_create_parameter_response "Copy link to heading")Example create Parameter response

#### [](#event_streams "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Parameter has been created.

 | 

[ParameterEvent](/vault-core/5-8/EN/api/core_api#parameter_events)(ParameterCreatedEvent)

 | 

`vault.core_api.v1.parameters.parameter.events`

 |

### [](#creating_parameter_values "Copy link to heading")Creating Parameter Values

You can either create a single [Parameter Value](/vault-core/5-8/EN/api/core_api#parametervalue) for a single owner, or create an atomic batch of values for a single owner.

To create a single Parameter value, call `POST /v1/parameter-values`. To create a batch of values, call `POST /v1/parameter-values:batchCreate`. In either case, you must provide the following:

-   The unique `request_id`
    
-   ID(s) of the Parameter(s) you want to add the value(s) to in `parameter_value.parameter_id`
    
-   Value(s) of the Parameter(s) (satisfying any constraints set when [creating a Parameter](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_a_parameter)) in `parameter_value.value`
    
-   ID of the owner of the value(s); either:
    
    -   `parameter_value.global: true`; or
        
    -   The `parameter_value.parameter_value_hierarchy_node_id` (if this feature is enabled); or
        
    -   The `parameter_value.account_id`
        
    

You can also:

-   Backdate a Parameter value by setting `parameter_value.is_backdated` to "true", and setting `parameter_value.effective_from_timestamp` in the past; or
    
-   Future-date a Parameter value by setting `parameter_value.effective_from_timestamp` in the future. This cannot be used if the account’s Smart Contract references the parameter using the instance parameter syntax.
    

Assuming that the associated Smart Contract’s [pre\_parameter\_change\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_parameter_change_hook) accepted the change (or the hook was skipped), the response confirms the change to the value.

lightbulb

To learn about the behaviour of Smart Contract Parameter hooks, see [Smart Contract Parameter hook behaviour](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#smart_contract_parameter_hook_behaviour).

#### [](#example_create_parameter_value_request "Copy link to heading")Example create Parameter value request

The following example is a request to create an "example\_decimal\_parameter" value of "5" to apply the account "43f6f976-c55e-4f95-87e5-f2593b30af7a":

chat\_bubble

-   You can also create an account-owned Parameter value when [creating an Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#creating_an_account).
    
-   To learn about the fields you can set for Parameter types, see the [Parameter Value](/vault-core/5-8/EN/api/core_api#parametervalue) API documentation.
    

#### [](#example_create_parameter_value_response "Copy link to heading")Example create Parameter value response

#### [](#event_streams_2 "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The new Parameter value has been created.

 | 

[ParameterValueEvent](/vault-core/5-8/EN/api/core_api#parametervalueevent)(ParameterValueCreatedEvent)

 | 

`vault.core_api.v1.parameters.parameter_value.events`

 |
| 

If the value has been created to supersede a previous value, the previous Parameter value’s `effective_to_timestamp` has been added (to unset it)

 | 

[ParameterValueEvent](/vault-core/5-8/EN/api/core_api#parametervalueevent)(ParameterValueUpdatedEvent)

 | 

`vault.core_api.v1.parameters.parameter_value.events`

 |

### [](#retrieving_parameters_and_their_values "Copy link to heading")Retrieving Parameters and their values

You can retrieve a list of Parameters or a list of their values.

lightbulb

You can also retrieve details of *effective* parameter values, either for a [Parameter Value Hierarchy Node](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#retrieving_effective_parameter_values_for_a_node), or for a [Customer Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#retrieving_effective_parameter_values_for_a_customer_account).

#### [](#retrieving_parameter_ids "Copy link to heading")Retrieving Parameter IDs

1.  Call the [GET /v1/product-versions:batchGet](/vault-core/5-8/EN/api/core_api#productversion), specifying the Product version(s) you want to retrieve Parameter IDs for.
    
2.  The response contains:
    
    -   The Vault Core 5 Parameter IDs (`expected_parameters[].parameter_id`)
        
    -   The mapped IDs of instance parameters (`parameter_id_by_instance_parameter_name`), if you previously used the legacy Smart Contract Instance Parameters
        
    
3.  To retrieve the IDs of Global Parameters, call [GET /v1/global-parameters:batchGet](/vault-core/5-8/EN/api/core_api#globalparameter).
    
4.  You can use the IDs to retrieve Parameter details as explained below.
    

#### [](#retrieving_parameters "Copy link to heading")Retrieving Parameters

-   To retrieve a filtered and paginated list of Parameters, call `GET /v1/parameters`, providing the number of Parameters to be returned in `page_size`.
    
-   To retrieve one or more Parameters by their IDs, call `GET /v1/parameters:batchGet`, providing the `ids` of the Parameters you want to retrieve.
    

##### [](#example_request_for_parameters "Copy link to heading")Example request for Parameters

##### [](#example_response_to_parameters_request "Copy link to heading")Example response to Parameters request

#### [](#retrieving_parameter_values "Copy link to heading")Retrieving Parameter Values

To retrieve a filtered and paginated list of [ParameterValues](/vault-core/5-8/EN/api/core_api#parametervalue), call `GET /v1/parameter-values`, providing the:

-   Number of Parameter Values to be returned in `page_size`
    
-   Parameter IDs to filter values on in `parameter_ids`
    

You can also:

-   Specify an `effective_timestamp_range`
    
-   Filter by whether or not a value `is_cancelled`
    
-   Filter by value owner for either `global`, `account_ids`, or `parameter_value_hierarchy_node_ids` (if enabled)
    

To retrieve one or more Parameter Values by their IDs, call `GET /v1/parameter-values:batchGet` providing the `ids` of the Parameter Values you want to retrieve.

##### [](#example_request_for_parameter_values "Copy link to heading")Example request for Parameter Values

The following example is a request for two Parameter Values:

##### [](#example_response_to_parameter_value_request "Copy link to heading")Example response to Parameter Value request

### [](#changing_a_parameters_value "Copy link to heading")Changing a Parameter’s value

You change a Parameter’s value by creating a new [Parameter Value](/vault-core/5-8/EN/api/core_api#parametervalue) for the same owner as the previous value.

When the `effective_from_timestamp` is reached, the new value will automatically replace the previous value. If you are making a backdated change, set `parameter_value.is_backdated: true`, and set `parameter_value.effective_from_timestamp` in the past.

For more information, see [Creating Parameter Values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values).

### [](#unsetting_a_parameter_value "Copy link to heading")Unsetting a Parameter Value

To unset a Parameter Value (thereby expiring the value), call `PUT /v1/parameter-values/{parameter_value.id}`, providing the:

-   Unique `request_id`
    
-   `parameter_value.effective_to_timestamp`
    
-   `effective_to_timestamp` as a value of `update_mask.paths[]`. You can also unset a Parameter Value immediately by setting `effective_to_timestamp_update_options.set_to_now: true`.
    

When the `effective_to_timestamp` is reached, the value will become inactive. If a Smart Contract hook requests a value for this Parameter via a non-optional Instance or Global Parameter, an error will occur. Smart Contracts using this Parameter via `expected_parameters` will either receive a Python None, or an inherited value if one exists.

chat\_bubble

For Smart Contracts opted in to hook execution, there will be a short lag between the value becoming inactive, and the Smart Contract’s [post\_parameter\_change\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_parameter_change_hook) running. This is typically around 5 seconds, but could be longer during times of heavy processing load.

#### [](#example_request_to_unset_a_parameter_value "Copy link to heading")Example request to unset a Parameter Value

The following example is a request to unset the Parameter Value "97ffce84-288f-4f65-b370-040e893080bb":

#### [](#example_response_to_the_unset_parameter_value_request "Copy link to heading")Example response to the unset Parameter Value request

#### [](#event_streams_3 "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Parameter Value `effective_to_timestamp` has been updated.

 | 

[ParameterValueEvent](/vault-core/5-8/EN/api/core_api#parametervalueevent)(ParameterValueUpdatedEvent)

 | 

`vault.core_api.v1.parameters.parameter_value.events`

 |

## [](#smart_contract_parameter_hook_behaviour "Copy link to heading")Smart Contract Parameter hook behaviour

The Smart Contract Parameter hooks serve the following purposes:

-   `pre_parameter_change_hook`: Validates a requested Parameter value change against the Smart Contract code, rejecting the change as required.
    
-   `post_parameter_change_hook`: Carries out any required actions after a Parameter value change has occurred which affects an Account, such as instructing a notification.
    

This section explains the behaviour of the Smart Contract `pre_parameter_change_hook` and `post_parameter_change_hook` in more detail.

### [](#behaviour_of_the_pre_parameter_change_hook "Copy link to heading")Behaviour of the pre\_parameter\_change\_hook

The `pre_parameter_change_hook` is designed to validate any Account-based API calls which will affect an Account’s resolved `ExpectedParameter` value.

#### [](#default_behaviour_when_the_triggers_are_not_specified "Copy link to heading")Default behaviour when the triggers are not specified

When `triggers_pre_parameter_change_hook` is not specified, the behaviour is equivalent to when it is set to `True`.

#### [](#actions_that_trigger_the_hook "Copy link to heading")Actions that trigger the hook

The `pre_parameter_change_hook` runs when making an API call to:

-   Create an Account-owned Parameter value (effective either currently, or in the future)
    
-   Cancel a [future-dated](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples/generic#future_dated_parameter_values) Account-owned Parameter value
    
-   Make any change to an Account’s association with a Parameter Value Hierarchy node (such as disassociating an Account from a node)
    

chat\_bubble

In all scenarios, the `pre_parameter_change_hook` also runs if the new Parameter value is equal to the previous value.

#### [](#actions_that_do_not_trigger_the_hook "Copy link to heading")Actions that do not trigger the hook

The `pre_parameter_change_hook` is not triggered when:

-   Backdating any Parameter value
    
-   The Smart Contract specifies `triggers_pre_parameter_change_hook=False`
    
-   Changing an Account’s status
    
-   Creating an Account and Parameter values in the same request
    
-   Converting an Account to a new Smart Contract version
    
-   Changing a Global Parameter value (even if this change affects an Account’s resolved value)
    
-   Changing a Parameter Value Hierarchy node’s value (even if this change affects an Account’s resolved value)
    

### [](#behaviour_of_the_post_parameter_change_hook "Copy link to heading")Behaviour of the post\_parameter\_change\_hook

The `post_parameter_change_hook` is designed to run when a change to any Account’s effective (resolved) Parameter value comes into effect.

#### [](#default_behaviour_when_the_triggers_are_not_specified_2 "Copy link to heading")Default behaviour when the triggers are not specified

lightbulb

The default behaviour of the `post_parameter_change_hook` (when no trigger is specified) is implemented to maintain backwards compatibility, and does not match either the `True` or `False` states when the trigger is specified. Thought Machine therefore recommends setting this trigger to either `True` or `False`.

If `triggers_post_parameter_change_hook` is not specified in the Smart Contract, then the `post_parameter_change_hook` will only run when the `effective_from_timestamp` of a new Account-owned Parameter value (including a future-dated parameter value) is reached.

#### [](#actions_that_trigger_the_hook_when_explicitly_opting_in_to_hook_execution "Copy link to heading")Actions that trigger the hook when explicitly opting in to hook execution

If the Smart Contract specifies `triggers_post_parameter_change_hook=True`, then the `post_parameter_change_hook` runs when any Account’s effective (resolved) Parameter value is changed by:

-   A Parameter value (with any owner) becoming effective at its specified `effective_from_timestamp`.
    
-   A Parameter value (with any owner) ceasing to be effective at its specified `effective_to_timestamp`.
    
-   A change to an Account’s association with a Parameter Value Hierarchy node.
    

If you include `triggers_post_parameter_change_hook` for any `expected_parameter` in a CLv4 Smart Contract, you must also define both `triggers_pre_parameter_change_hook` and `triggers_post_parameter_change_hook` (as either `True` or `False`) for ALL of the `expected_parameters` in that CLv4 Smart Contract.

chat\_bubble

-   To allow time for hierarchical checks on Parameter values affecting Accounts, there is a short lag between a Parameter value creation (or update), and the triggering of the `post_parameter_change_hook`. This is typically around 5 seconds, but could be longer during times of heavy processing load.
    
-   In all scenarios, the `post_parameter_change_hook` runs even if the new Parameter value is equal to the previous value.
    

#### [](#actions_that_do_not_trigger_the_hook_2 "Copy link to heading")Actions that do not trigger the hook

The `post_parameter_change_hook` is not triggered when:

-   Backdating any Parameter value
    
-   The Smart Contract specifies `triggers_post_parameter_change_hook=False`
    
-   Changing an Account’s status
    
-   Creating an Account and Parameter Values in the same request
    
-   Converting an Account to a new Smart Contract version
    
-   Changing a TEMPLATE Parameter value or a Parameter value listed in `global_parameters`
    

## [](#supported_parameter_types "Copy link to heading")Supported Parameter types

This section describes the types supported in the Vault Core 5 Core API Parameter system, covering their intended use cases, and with examples where applicable.

### [](#string "Copy link to heading")String

String-type Parameters are general-purpose Parameters to catch any scenarios where a more specific type cannot be used. The following example is a request to create a string-type Parameter:

In the CLv4 Smart Contract, this parameter would be referenced by:

You can then create values for this Parameter, either by [creating Parameter Values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values) or [creating an Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#creating_an_account) via the v2 Accounts resource.

### [](#decimal "Copy link to heading")Decimal

Decimal-type Parameters provide arbitrary-precision representation of numbers that can safely be used to store currency values and rates; they are not stored as floating-point numbers. Lower and upper bounds can be provided if required, but they cannot be modified once the Parameter has been created. The following example is a request to create a decimal-type Parameter:

In the CLv4 Smart Contract, this parameter would be referenced by:

You can then create values for this Parameter, either by [creating Parameter Values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values) or [creating an Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#creating_an_account) via the v2 Accounts resource.

### [](#enumeration "Copy link to heading")Enumeration

Enumeration-type Parameters are for when a value must be one of a set of predefined values. The following example is a request to create an enumeration-type Parameter:

In the CLv4 Smart Contract, this parameter would be referenced by:

You can then create values for this Parameter, either [via the Parameter Values resource](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values), or when [creating an Account via the v2 Accounts resource](/vault-core/5-8/EN/reference/accounts/accounts_version_2#creating_an_account).

### [](#datetime "Copy link to heading")DateTime

Date-time-type Parameters are intended for specifying a specific or absolute point in time, either a day (date) or a minute (date-time). The default `precision` value is "MINUTE".

These Parameters are intended to be used for configuring the times of meaningful events in the life of the Account, such as maturity, when a first loan payment was made, or when a final payment is expected. The following example is a request to create a date-time-type Parameter:

In the CLv4 Smart Contract, this parameter would be referenced by:

You can then create values for this Parameter, either by [creating Parameter Values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values) or [creating an Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#creating_an_account) via the v2 Accounts resource.

### [](#account "Copy link to heading")Account

Account Parameters are for configuring the target Accounts that should be used for Posting Instructions created by Hooks.

When a value is set against such a Parameter, the existence of the Account will be validated. There is no constraint on the type of Account.

The following example is a request to create an Account-type Parameter:

In the CLv4 Smart Contract, this parameter would be referenced by:

You can then create values for this Parameter, either by [creating Parameter Values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values) or [creating an Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#creating_an_account) via the v2 Accounts resource.