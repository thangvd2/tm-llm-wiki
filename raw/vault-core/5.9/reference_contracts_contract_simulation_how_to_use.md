---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use"
title: "How to use Contract Simulation"
scraped_at: "2026-06-17T05:02:21.019Z"
images: 0
---

# How to use Contract Simulation

info

Before you begin, be aware of [unsupported features](/vault-core/5-9/EN/reference/contracts/contract_simulation#unsupported_features).

[Contract Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation) is a streaming endpoint in the Core API accessed by making a REST request to [/v1/contracts:simulate](/vault-core/5-9/EN/api/core_api#contract). It works with any version of the Contracts Language API ([CLv3](/vault-core/5-9/EN/reference/contracts/contracts_api_3xx) or [CLv4](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx)).

In this guide, learn how to [prepare your request](#prepare_your_request) and parse the [JSON response](#json_response). You can optionally use [Logger](#debugging_contracts_using_logger) for debugging, and refer to an example of a request and response in [Example Contract Simulation](#example_contract_simulation).

Once you understand how Simulation works, you can use the Vault Caller [helper script](#helper_script) to quickly get started with Contract Simulation.

## [](#prepare_your_request "Copy link to heading")Prepare your request

Follow the steps below to prepare your request to [/v1/contracts:simulate](/vault-core/5-9/EN/api/core_api#contract):

1.  Choose the [resources](#resources) you want to simulate.
    
2.  Set the [timestamps](#timestamps) for the simulation period.
    
3.  Define the [instructions](#instructions) for the simulation.
    

You can also specify [outputs](#outputs) to further analyse the scenario you are looking to simulate.

### [](#resources "Copy link to heading")Resources

You can pick and choose different resources to simulate depending on the scenario you want to run. For example, you can specify an existing Smart Contract and refer to its existing calendar events, or you can build a new Smart Contract and test existing Accounts on this new Contract logic.

Refer to the table below to define the corresponding resources and their required field(s).

 
| Resource | Description |
| --- | --- |
| 
`smart_contracts[]`

 | 

Build a new Smart Contract in the simulation.

1.  Define the `smart_contract_version_id` of the Contract for the simulation.
    
2.  Build the source code of the Contract directly in the `code` field.
    





 |
| 

`supervisor_contracts[]`

 | 

Build a new Supervisor Contract in the simulation.

**Note**: Although `supervisor_contracts[]` is a list, only one Supervisor Contract can be simulated at a time.

 |
| 

`contract_modules[]`

 | 

Build a new Contract Module in the simulation.

 |
| 

`existing_accounts[]`

 | 

1.  Specify the `existing_account_id` of the existing Vault Core Account(s) you want to reference in the simulation.
    
2.  If this is an internal account, set `is_internal` to `true`.
    

**Note**: When you specify `existing_accounts[]`, its Smart Contracts, Supervisor Contracts, and existing product data are automatically included in the simulation.

See additional required [request fields](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation#request_parameters) and [instructions](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation#instructions) for Existing Account Simulation.





 |
| 

`existing_smart_contracts[]`

 | 

Specify the product version ID of the existing Smart Contract(s) you want to reference in the simulation. This will return their product state at the simulation start time.

 |
| 

`existing_supervisor_contracts[]`

 | 

Specify the product version ID of the Supervisor Contract(s) you want to reference in the simulation. This will return their product state at the simulation start time.

 |
| 

`existing_contract_modules[]`

 | 

Specify the product version ID of the Contract Module(s) you want to reference in the simulation.

 |
| 

`existing_product_data_behaviour[]`

 | 

1.  Specify the product version ID(s) in `existing_smart_contracts[]`.
    
2.  Include all **or** one or more existing product data by setting either:
    
    -   `include_all` to `true`
        
    -   `include_data_types[]` to one or more of the following:
        
        -   `GLOBAL_PARAMETERS`
            
        -   `TEMPLATE_PARAMETERS`
            
        -   `CALENDARS` (calendar events)
            
        
    

For more information, see [Existing Product Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_product_simulation).





 |

### [](#timestamps "Copy link to heading")Timestamps

Define the `start_timestamp` and `end_timestamp` of the simulation period.

For Existing Account Simulation and Existing Product Simulation, the `start_timestamp` also determines which relevant data the Simulation fetches (balances, parameters, hooks, etc) as they existed at that point in time, allowing you to replay events as if they were happening at that moment.

Simulation runs from that start time until there are no more instructions, or until it reaches the `end_timestamp`.

warning

Setting a start timestamp too far in the past (for example, to a previous major Vault Core version) may lead to unexpected behaviour.

### [](#instructions "Copy link to heading")Instructions

Use `instructions[]` to define a series of events that simulate Vault Core API operations, such as Postings, creating and updating Accounts, and manipulating Parameters.

Define these instructions to build the scenario you wish to simulate, and observe the outputs at specific `timestamp` within the simulation period.

Instructions with timestamps beyond the simulation end time will be ignored.

#### [](#instruction_types "Copy link to heading")Instruction types

In addition to the requirements listed in the [Core API](/vault-core/5-9/EN/api/core_api) documentation, note the caveats and limitations in the following resources:

-   [Accounts](#accounts)
    
-   [Sub-Accounts](#sub-accounts)
    
-   [Parameters](#parameters)
    
-   [Calendars](#calendars)
    
-   [Flags](#flags)
    
-   [Plans](#plans)
    
-   [Postings](#postings)
    

##### [](#accounts "Copy link to heading")Accounts

chat\_bubble

Simulation requests cannot contain both [Accounts v1](/vault-core/5-9/EN/reference/accounts/accounts_version_1) and [Accounts v2](/vault-core/5-9/EN/reference/accounts/accounts_version_1) instructions.

Ledger balances are not supported in Simulation and cannot be queried for v1 or v2 Accounts (Customer or Internal), unlike in production instances of Vault Core which supports Ledger balances for all account types.

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_account](/vault-core/5-9/EN/api/core_api#_core_api_v1_accounts_Account_CreateAccount) (v1)

 | 

Instructs the simulation to create a [v1 Account](/vault-core/5-9/EN/api/core_api#accounts_version_1) (deprecated as of Vault Core v5.4).

This instruction can also convert any Account to another Smart Contract with v1 Accounts, or a Smart Contract that references Parameters via the [expected\_parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#expected_parameters) metadata field. You can use `instance_parameter_values` to specify Account-owned parameter values referenced in the metadata.

Note the following when creating v1 Accounts:

-   `product_version_id` must be defined in the request.
    
-   Simulation overrides all [v1 Account statuses](/vault-core/5-9/EN/reference/accounts/accounts_version_1#account_statuses) and treats them as `ACCOUNT_STATUS_OPEN`.
    
-   [v1 InternalAccounts](/vault-core/5-9/EN/api/core_api#internal_accounts) (deprecated as of Vault Core v5.0) cannot be created in Simulation. To mimic a v1 internal account in Simulation, you can create a [v1 (Customer) Account](/vault-core/5-9/EN/api/core_api#accounts) with a blank Smart Contract.
    
    However, this means the v1 Account has an *account* balance and can stream balance events (similar to [AccountBalanceEvent](/vault-core/5-9/EN/api/core_api#accountbalanceevent) or [BalanceEvent](/vault-core/5-9/EN/api/core_api#balanceevent) topics), unlike in production instances of Vault Core where internal accounts do not have account balances and therefore do not stream out account balance updates.
    





 |
| 

[v2\_create\_account](/vault-core/5-9/EN/api/core_api#_core_api_v2_accounts_Account_CreateAccount)

 | 

Instructs the simulation to create a [v2 Account](/vault-core/5-9/EN/api/core_api#accounts_version_2).

Note the following when creating v2 Accounts:

-   Simulation only supports the following [v2 Account statuses](/vault-core/5-9/EN/reference/accounts/accounts_version_2#account_statuses):
    
    -   Internal v2 Accounts: `ACCOUNT_STATUS_OPEN`.
        
    -   Customer v2 Accounts: `ACCOUNT_STATUS_OPEN` and `ACCOUNT_STATUS_PENDING`.
        
    
-   The following fields are not supported and are ignored if included in the instruction:
    
    -   `stakeholder_ids`
        
    -   `alias`
        
    -   `details`
        
    
-   In production, [v2 Internal Accounts](/vault-core/5-9/EN/reference/accounts/accounts_version_2#creating_an_internal_account) do not have an account balance - they only have a Ledger balance. As Ledger balances are not supported in Simulation, as a workaround, you can derive the balance of a v2 Internal Account from Posting Events returned in the Simulation response. A working example constructing a balance view from Posting Events is available in the [Inception SDK](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#inception_sdk).
    





 |
| 

[update\_account](/vault-core/5-9/EN/api/core_api#_core_api_v1_accounts_Account_UpdateAccount) (v1)

 | 

Instructs the simulation to update a v1 Account (deprecated as of Vault Core v5.4).

The only required and supported fields are:

-   `id`
    
-   `status`
    





 |
| 

[v2\_update\_account](/vault-core/5-9/EN/api/core_api#_core_api_v2_accounts_Account_UpdateAccount)

 | 

Instructs the simulation to update a v1 or v2 Account (including the conversion of a v2 Customer Account to a new Smart Contract version).

Only one field can be updated per instruction.

The following fields are supported:

-   `status`
    
-   `processing_label`
    
-   `parameter_value_hierarchy_node_id`
    
-   `smart_contract_version_id`
    

The following fields are not supported and are ignored if included in the instruction:

-   `stakeholder_ids`
    
-   `alias`
    
-   `details`
    

Simulation only supports the following status updates for v2 Accounts:

-   `ACCOUNT_STATUS_OPEN`
    
-   `ACCOUNT_STATUS_CLOSED`
    
-   `ACCOUNT_STATUS_CANCELLED`
    





 |
| 

[create\_account\_update](/vault-core/5-9/EN/api/core_api#_core_api_v1_accounts_AccountUpdate_CreateAccountUpdate) (v1)

 | 

Instructs the simulation to update a v1 Account to a new Smart Contract version, as well as Instance-level Parameters for the v1 Account (deprecated as of Vault Core v5.4). Unlike in production, this instruction allows v1 Accounts to reference [Expected Parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#expected_parameters) in Simulation.

 |

##### [](#parameters "Copy link to heading")Parameters

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_parameter](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_Parameter_CreateParameter)

 | 

Instructs the simulation to create a [Parameter](/vault-core/5-9/EN/api/core_api#parameter).

 |
| 

[create\_parameter\_value](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_ParameterValue_CreateParameterValue)

 | 

Instructs the simulation to create a [ParameterValue](/vault-core/5-9/EN/api/core_api#parametervalue).

 |
| 

[batch\_create\_parameter\_values](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_BatchCreateParameterValuesResponse_BatchCreateParameterValues)

 | 

Instructs the simulation to create Parameter Values in bulk.

You can manually specify the `parameter_id` (optional).

 |
| 

[create\_global\_parameter](/vault-core/5-9/EN/api/core_api#_core_api_v1_global_parameters_GlobalParameter_CreateGlobalParameter)

 | 

Instructs the simulation to create a [GlobalParameter](/vault-core/5-9/EN/api/core_api#globalparameter). This will also automatically create a [GlobalParameterValue](/vault-core/5-9/EN/api/core_api#_core_api_v1_global_parameters_GlobalParameterValue_CreateGlobalParameterValue).

 |
| 

[create\_global\_parameter\_value](/vault-core/5-9/EN/api/core_api#_core_api_v1_global_parameters_GlobalParameterValue_CreateGlobalParameterValue)

 | 

Instructs the simulation to create a [GlobalParameterValue](/vault-core/5-9/EN/api/core_api#_core_api_v1_global_parameters_GlobalParameterValue_CreateGlobalParameterValue) the value specified in the request.

 |
| 

[create\_parameter\_value\_hierarchy\_node](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_ParameterValueHierarchyNode_CreateParameterValueHierarchyNode)

 | 

Instructs the simulation to create a [ParameterValueHierarchyNode](/vault-core/5-9/EN/api/core_api#parametervaluehierarchynode).

Note the following when using Parameter Value Hierarchy Nodes:

-   `request_id` is not required.
    
-   [UpdateParameterValueHierarchyNode](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_ParameterValueHierarchyNode_UpdateParameterValueHierarchyNode) is not supported. Instead, you can create a new node and update the `instructions[].v2_update_account.account.parameter_value_hierarchy_node_id` to the new ID.
    





 |
| 

[create\_account\_update](/vault-core/5-9/EN/api/core_api#_core_api_v1_accounts_AccountUpdate_CreateAccountUpdate) (v1)

 | 

Instructs the simulation to update the Instance-level Parameters for the specified account (deprecated as of Vault Core v5.4).

This instruction can also convert any Account to another Smart Contract with v1 Accounts, or a Smart Contract that references Parameters via the [expected\_parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#expected_parameters) metadata field. You can use `instance_parameter_values` to specify Account-owned parameter values referenced in the metadata.

 |
| 

[update\_parameter\_value](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_ParameterValue_UpdateParameterValue)

 | 

Instructs the simulation to update a [ParameterValue](/vault-core/5-9/EN/api/core_api#parametervalue).

 |
| 

[update\_smart\_contract\_param](/vault-core/5-9/EN/api/core_api#_core_api_v1_products_ProductVersion_UpdateProductVersionParams)

 | 

Instructs the simulation to update a Template-level parameter (defined in the Smart Contract version).

 |

##### [](#calendars "Copy link to heading")Calendars

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_calendar](/vault-core/5-9/EN/api/core_api#_core_api_v1_calendar_Calendar_CreateCalendar)

 | 

Instructs the simulation to create a [Calendar](/vault-core/5-9/EN/api/core_api#calendar).

 |
| 

[create\_calendar\_event](/vault-core/5-9/EN/api/core_api#_core_api_v1_calendar_CalendarEvent_CreateCalendarEvent)

 | 

Instructs the simulation to create a [CalendarEvent](/vault-core/5-9/EN/api/core_api#calendarevent).

 |

##### [](#flags "Copy link to heading")Flags

chat\_bubble

Simulation only supports Account-level [Flags](/vault-core/5-9/EN/reference/flags) (with a Flag Definition of `FLAG_LEVEL_ACCOUNT`). As [Customers](/vault-core/5-9/EN/api/core_api#customers) are not supported in Simulation, Customer-owned Flags (`FLAG_LEVEL_CUSTOMER`) are also not supported.

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_flag\_definition](/vault-core/5-9/EN/api/core_api#_core_api_v1_flags_FlagDefinition_CreateFlagDefinition)

 | 

Instructs the simulation to create a [FlagDefinition](/vault-core/5-9/EN/api/core_api#flagdefinition).

 |
| 

[create\_flag](/vault-core/5-9/EN/api/core_api#_core_api_v1_flags_Flag_CreateFlag)

 | 

Instructs the simulation to create a [Flag](/vault-core/5-9/EN/api/core_api#flag).

 |

##### [](#plans "Copy link to heading")Plans

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_plan](/vault-core/5-9/EN/api/core_api#_core_api_v1_plans_Plan_CreatePlan)

 | 

Instructs the simulation to create a [Plan](/vault-core/5-9/EN/api/core_api#plan).

The only required and supported fields are:

-   `id`
    
-   `supervisor_contract_version_id`
    





 |
| 

[create\_account\_plan\_assoc](/vault-core/5-9/EN/api/core_api#_core_api_v1_plans_PlanUpdate_CreatePlanUpdate)

 | 

Instructs the simulation to add an account to a Plan for the specified duration. The only required and supported fields are:

-   `account_id`
    
-   `plan_id`
    
-   `start_timestamp`
    
-   `end_timestamp`
    
    -   In Simulation, the only valid status for associating Accounts with a Plan is `ACCOUNT_PLAN_ASSOC_STATUS_ACTIVE`.
        
    -   Once associated, Simulation cannot remove Accounts from a Plan.
        
    





 |

##### [](#postings "Copy link to heading")Postings

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_posting\_instruction\_batch](/vault-core/5-9/EN/api/core_api#_posting_api_v1_CreatePostingInstructionBatchResponse_CreatePostingInstructionBatch)

 | 

Instructs the simulation to create a [PostingInstructionBatch](/vault-core/5-9/EN/api/core_api#postinginstructionbatch). This will trigger the pre-posting check in the affected accounts.

`payment_device_token` is not supported. The `target_account` must be set to the `account_id`.

 |

##### [](#processing_groups "Copy link to heading")Processing Groups

chat\_bubble

Simulation does not support [multiple Processing Groups](/vault-core/5-9/EN/reference/processing_groups#using_multiple_processing_groups). Therefore, it is not possible to run simulations on two Accounts in different processing groups.

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[create\_processing\_group](/vault-core/5-9/EN/api/core_api#_core_api_v1_processing_groups_ProcessingGroup_CreateProcessingGroup)

 | 

Instructs the simulation to create a [ProcessingGroup](/vault-core/5-9/EN/api/core_api#processinggroup).

 |
| 

[update\_processing\_group](/vault-core/5-9/EN/api/core_api#_core_api_v1_processing_groups_ProcessingGroup_UpdateProcessingGroup)

 | 

Instructs the simulation to update the timezone, status, or description of a Processing Group.

 |

##### [](#other_instruction_types "Copy link to heading")Other instruction types

 
| Instruction type | Notes on Simulation |
| --- | --- |
| 
[list\_account\_attribute\_values](/vault-core/5-9/EN/api/core_api#_core_api_v1_account_attributes_ListAccountAttributeValuesResponse_ListAccountAttributeValues)

 | 

Instructs the simulation to calculate and list [AccountAttributeValues](/vault-core/5-9/EN/api/core_api#account_attributes) for the specified Account ID and Attribute name, at the `effective_timestamps` that these Account Attribute values were created in the [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook).

 |
| 

[create\_smart\_contract\_module\_versions\_link](/vault-core/5-9/EN/api/core_api#_core_api_v1_contract_modules_SmartContractModuleVersionsLink_CreateSmartContractModuleVersionsLink)

 | 

Instructs the simulation to create a [SmartContractModuleVersionsLink](/vault-core/5-9/EN/api/core_api#smartcontractmoduleversionslink).

`payment_device_token` is not supported. The `target_account` must be set to the `account_id`.

 |

### [](#outputs "Copy link to heading")Outputs

`outputs[]` is an optional field that allows you to specify any [derived parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#parameters) you want to see returned in the response from a specific timestamp and Account ID.

lightbulb

You can use derived parameters to see the total outstanding debt of a lending product from a specific point in time.

1.  Set the `timestamp` within the simulation period where you want to see the output.
    
2.  Define the `derived_params.account_id` of the Account the derived parameters relate to.
    

## [](#json_response "Copy link to heading")JSON response

As Simulation is a streaming endpoint, the response returns [new line delimited JSON strings](https://jsonlines.org/) containing any collected hook directives or output logs as defined by `outputs[]`.

You can use a JSON parsing library on each line as it is received on the response. Make sure your buffer is configured to minimise timeouts.

lightbulb

You can use these responses in automated tests to verify the behaviour of a Smart Contract. For example, you can check that the expected balances have been created.

You can also use these responses in end-user applications where the results can be rendered in a user-friendly way, such as a graph showing loan repayments.

### [](#unstructured_response_logs "Copy link to heading")Unstructured response logs

The `logs` field in the simulation response is intended for human-readable feedback and debugging.

warning

The content of simulation logs is unstructured and undocumented. These strings may change without notice between Vault Core releases (for example: phrasing changes, addition of metadata, or casing updates).

Do not rely on string-matching or regex patterns against the `logs` field for programmatic assertions in automated tests.

These enums are defined in the [Core API](/vault-core/5-9/EN/api/core_api#contracts) under the `posting_instructions[].contract_violations[].violation_type` field.

If you are transitioning from log-based testing to structured API testing, use the following mapping from the log string to the Protobuf-based Enum values:

 
| Simulation log String | Enum |
| --- | --- |
| 
AgainstTermsAndConditions

 | 

`CONTRACT_EXECUTION_VIOLATION_BREACH_TERMS_AND_CONDITIONS`

 |
| 

InsufficientFunds

 | 

`CONTRACT_EXECUTION_VIOLATION_INSUFFICIENT_FUNDS`

 |
| 

WrongDenomination

 | 

`CONTRACT_EXECUTION_VIOLATION_WRONG_DENOMINATION`

 |
| 

Custom

 | 

`CONTRACT_EXECUTION_VIOLATION_CLIENT_CUSTOM_REASON`

 |
| 

Unknown

 | 

`CONTRACT_EXECUTION_VIOLATION_UNKNOWN`

 |

### [](#debugging_contracts_using_logger "Copy link to heading")Debugging Contracts using Logger

You can use [Logger](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#logger) to add debugging logs to your Smart Contract. This adds messages that are propagated upstream to the [/v1/contracts:simulate](/vault-core/5-9/EN/api/core_api#contract) endpoint.

Below is a simple Python script that adds debug logs into Contract code and in the response from the Contract Simulation endpoint.

Example Python script using Logger

The streamed out response:

Example response with debug logs

## [](#example_contract_simulation "Copy link to heading")Example Contract Simulation

The following example demonstrates a Contract Simulation request that creates a Smart Contract with a scheduled event that runs every minute. The simulation runs over a one-minute period, creating an account using this Smart Contract, then prints each [JSON response](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#json_response) line.

info

To use this script, you must install the [requests library](https://pypi.org/project/requests/). You can install this using [pip](https://pypi.org/project/pip/) or other Python package manager.

### [](#example_python_request "Copy link to heading")Example Python request

Below is a simple Python script that creates a Smart Contract (in `smart_contracts.code`) with a schedule that runs every minute, instructing an account notification directive each time it runs:

Example Python request

### [](#example_json_response "Copy link to heading")Example JSON response

Running the example request above produces the following JSON response:

Example JSON response

In the first line, the response informs us that an account was created with scheduled jobs. Then, the scheduled event runs twice, and we can see the `account note` confirming the Smart Contract was successfully instructed. The events only ran twice because the simulation stopped when it reached the specified `end_timestamp`.

## [](#helper_script "Copy link to heading")Helper script

The *Vault Caller* helper script makes Smart Contract testing easier by providing a simple Python-native way of calling the [Contract Simulation](/vault-core/5-9/EN/api/core_api#contract) endpoint without writing any REST requests. This script is intended for use during contract development.

For more advanced use cases (such as automated testing), we recommend using a framework capable of making REST calls.

### [](#installation_and_usage "Copy link to heading")Installation and usage

info

To use this script, you must install the [dateutil (v2.4.0)](https://pypi.org/project/python-dateutil/) and [requests (v2.22.0)](https://pypi.org/project/requests/) packages. You can install this using [pip](https://pypi.org/project/pip/) or some other Python package manager.

Once you install the external libraries, you can download [vault\_caller.py](/vault-core/5-9/EN/resources/smart_contracts/vault_caller.py) and start testing your contracts through the [Contract Simulation](/vault-core/5-9/EN/api/core_api#contract) endpoint.

Download download

warning

The Vault Caller script was written using Python 3.6.8, and is not kept up to date.

We expect Smart Contract writers to maintain their own method for calling Vault Core’s REST API. This script is only intended as a template for how this might look.