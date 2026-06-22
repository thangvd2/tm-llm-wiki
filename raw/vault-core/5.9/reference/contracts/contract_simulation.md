---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contract_simulation"
title: "Contract Simulation"
scraped_at: "2026-06-22T19:18:03.366Z"
images: 0
---

# Contract Simulation

*Contract Simulation* enables you to test existing or new Contracts (Smart Contracts, Supervisor Contracts, and Contract Modules) by simulating their execution under different scenarios and time frames without affecting your live Vault Core instance.

In this guide, you can familiarise yourself with the [types of Contract Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation#types_of_contract_simulation) and its [unsupported features](/vault-core/5-9/EN/reference/contracts/contract_simulation#unsupported_features). Refer to the following pages to implement the different Simulation types and see examples.

[

simulation How to use Contract Simulation

Prepare your Simulation request and interpret the response



](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use)

[

modeling Existing Account Simulation

Simulate Contracts on existing Accounts and learn how timestamps work



](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation)

[

filter\_frames Existing Product Simulation

Simulate Contracts on existing product-level data



](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_product_simulation)

## [](#what_is_contract_simulation "Copy link to heading")What is Contract Simulation?

Contract Simulation is a testing environment that allows you to test and debug Contracts within a specified time frame (in the past or from now; the simulation start time cannot be set in the future). It aims to recreate what the production instance of Vault Core was at the simulation start timestamp, or what it would be from now onwards.

It works by registering a Smart Contract in an in-memory approximation of Vault Core, making it safe to reference any existing data and modify it in a simulation request. Any modifications made within a simulation do not persist after the request has completed.

You can use Simulation to:

-   Test new Smart Contracts, Supervisor Contracts, or Contract Modules before deploying them to your live Vault Core instance.
    
-   Replay historical events to see how Contracts and existing product data would have behaved at a specific point in time.
    
-   Experiment with different parameter values or Contract logic.
    

The Core API endpoint for Contract Simulation is [/v1/contracts:simulate](/vault-core/5-9/EN/api/core_api#contract). As this is a streaming endpoint, the output is returned as a [JSON response](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#json_response).

## [](#types_of_contract_simulation "Copy link to heading")Types of Contract Simulation

There are three types of Contract Simulation, each available to support different use cases for development and debugging:

-   [Contract Simulation](#contract_simulation)
    
-   [Existing Account Simulation](#existing_account_simulation)
    
-   [Existing Product Simulation](#existing_product_simulation)
    

### [](#contract_simulation "Copy link to heading")Contract Simulation

*Contract Simulation* lets you create Contracts within the simulation request directly, in a virtual simulation environment where you can observe their outputs. You can create a Contract from scratch and test it against new or existing data.

With Contract Simulation, you can:

-   Draft and validate new Contract logic for a new financial product or product version before deploying it to your Vault Core instance.
    
-   Use it as a testing tool for your CI/CD pipeline. You can debug and test new Contracts before deploying them to your Vault Core instance.
    
-   Use Simulation for financial projection, to give your customers a preview of their repayment plan for a loan before deciding to open an account.
    

To get started, see [How to Use Contract Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use).

### [](#existing_account_simulation "Copy link to heading")Existing Account Simulation

*Existing Account Simulation* allows you to simulate existing Accounts in Vault Core by retrieving their state at the simulation start time. Any modifications made to existing Accounts within a simulation do not persist after the simulation request is completed.

info

Existing Account Simulation aims to recreate what the real Vault Core instance was at the simulation start timestamp. Therefore, it only retrieves existing data, resources, or Smart Contract hooks (including scheduled events) that were inserted **before** the simulation start time.

For more information, see [Timestamps in Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation#timestamps_in_simulation).

With Existing Account Simulation, you can test how existing Accounts would behave over different time periods. You can observe the state of their scheduled jobs, calendar events, postings, balances, parameter values, and other associated resources in the past or as of now onwards.

The following examples demonstrate use cases when simulation start time is set to now:

-   Retrieve the loan repayment schedule of an existing loan after changing an associated parameter (such as interest rate).
    
-   Calculate the value of an existing savings account in one year’s time, given future-dated interest rate adjustments, product version changes, or postings made into or out of the account.
    
-   Validate whether a given set of postings would be accepted or rejected for an existing account, and retrieve the resulting balance given scheduled events (excluding account restrictions).
    

Other example use cases when simulation start time is set in the past:

-   Retrieve its account state at a point before a particular event happened (such as a posting or product migration), and run a simulation with different events.
    
-   Calculate the difference in balances by backdating a posting and run schedules up to the simulation start time.
    
-   Waive a transaction fee and determine the amount by running a simulation from before the fee was charged with different parameters applied.
    
-   Simulate existing Schedules that were active at the simulation start time, including those that are subsequently closed or completed during the simulation period or as of now.
    

For more information, see [Existing Account Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation).

### [](#existing_product_simulation "Copy link to heading")Existing Product Simulation

*Existing Product Simulation* allows you to simulate existing Vault Core products and the state of their associated level at the simulation start time.

Example use cases for Existing Product Simulation include:

-   Observe actual values of global parameters at different points in time.
    
-   Predict repayments on loans given a specific principal, rate, and term.
    

For more information, see [Existing Product Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_product_simulation).

## [](#unsupported_features "Copy link to heading")Unsupported features

The following Core API resources and fields that are not supported in Contract Simulation and by extension, Existing Account Simulation and Existing Product Simulation.

 
| Resource | Notes |
| --- | --- |
| 
Adjustments

 | 

Simulation does not support [Adjustments](/vault-core/5-9/EN/reference/adjustments). Therefore, any schedules within a Smart Contract with Adjustment points defined on the [SmartContractEventType](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype) or adjustment Smart Contract hooks ([scheduled\_event\_adjustment\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#scheduled_event_adjustment_hook), [post\_posting\_adjustment\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_posting_adjustment_hook), [post\_parameter\_change\_adjustment\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_parameter_change_adjustment_hook), [conversion\_adjustment\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#conversion_adjustment_hook)) will be ignored during the simulation process.

 |
| 

Customers

 | 

Simulation does not support [Customers](/vault-core/5-9/EN/api/core_api#customers).

 |
| 

Customer-owned Flags

 | 

As Customers are not supported in Simulation, Customer-owned [Flags](/vault-core/5-9/EN/reference/flags) (with a Flag Definition of `FLAG_LEVEL_CUSTOMER`) are also not supported.

When using Existing Account Simulation for an account with stakeholders which have Customer-owned Flags applied, these are treated as Account-owned Flags instead (Flag Definitions are implicitly created as `FLAG_LEVEL_ACCOUNT`).

 |
| 

Events timezone

 | 

Simulation does not support the Metadata field [events\_timezone](/vault-core/5-9/EN/reference/contracts/contracts_api_3xx/smart_contracts_api_reference3xx/metadata#events_timezone) in Contracts Language API 3 (CLv3) nor in Vault Core 4.x. The simulation will default to the `UTC` timezone.

 |
| 

Ledger balances

 | 

Ledger balances are not supported in Simulation and cannot be queried for v1 or v2 Accounts (Customer or Internal), unlike in production instances of Vault Core which supports Ledger balances for all account types.

In production, [v2 Internal Accounts](/vault-core/5-9/EN/reference/accounts/accounts_version_2#creating_an_internal_account) do not have an account balance - they only have a Ledger balance. As Ledger balances are not supported in Simulation, as a workaround, you can derive the balance of a v2 Internal Account from Posting Events returned in the Simulation response. A working example constructing a balance view from Posting Events is available in the [Inception SDK](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#inception_sdk).





 |
| 

Multiple Processing Groups

 | 

Simulation does not support [multiple Processing Groups](/vault-core/5-9/EN/reference/processing_groups#using_multiple_processing_groups). Therefore, it is not possible to run simulations on two Accounts in different Processing Groups.

 |
| 

Payment Device Tokens

 | 

Simulation does not support [Payment Device Tokens](/vault-core/5-9/EN/api/core_api#paymentdevicetokens) in `instructions[].create_posting_instruction_batch`.

You must set the `target_account` to the `account_id`.

 |
| 

(Existing) Plans

 | 

Simulation supports existing Supervisor Contracts, however it does not support existing [Plans](/vault-core/5-9/EN/reference/plans). + Therefore, when you simulate an existing account, it will not resolve its existing supervision associations and Plans. Because of this, any existing Plan schedules overriding account schedules will not be respected by the Simulation.

 |
| 

Restrictions

 | 

Simulation does not support [Restrictions](/vault-core/5-9/EN/api/core_api#restrictions).

 |
| 

Test Pause timestamps

 | 

Simulation does not support `test_pause_*` timestamps set by [Account Schedule Tags](/vault-core/5-9/EN/api/core_api#account_schedule_tags).

 |

## [](#important_caveats "Copy link to heading")Important caveats

Additionally, the following features have limited support in Simulation.

Important caveats in Simulation

In regards to [Simulation timestamps](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#timestamps):

-   Setting a start timestamp too far in the past (for example, to a previous major Vault Core version) may lead to unexpected behaviour.
    

[Accounts](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#accounts)

-   Simulation requests cannot contain both [Accounts v1](/vault-core/5-9/EN/reference/accounts/accounts_version_1) and [Accounts v2](/vault-core/5-9/EN/reference/accounts/accounts_version_1) instructions.
    
-   Ledger balances are not supported in Simulation and cannot be queried for v1 or v2 Accounts (Customer or Internal), unlike in production instances of Vault Core which supports Ledger balances for all account types.
    
-   `instructions[].create_account` (v1)
    
    -   This instruction can also convert any Account to another Smart Contract with v1 Accounts, or a Smart Contract that references Parameters via the [expected\_parameters](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#expected_parameters) metadata field. You can use `instance_parameter_values` to specify Account-owned parameter values referenced in the metadata.
        
    -   [v1 InternalAccounts](/vault-core/5-9/EN/api/core_api#internal_accounts) (deprecated as of Vault Core v5.0) cannot be created in Simulation. To mimic a v1 internal account in Simulation, you can create a [v1 (Customer) Account](/vault-core/5-9/EN/api/core_api#accounts) with a blank Smart Contract.
        
        However, this means the v1 Account has an *account* balance and can stream balance events (similar to [AccountBalanceEvent](/vault-core/5-9/EN/api/core_api#accountbalanceevent) or [BalanceEvent](/vault-core/5-9/EN/api/core_api#balanceevent) topics), unlike in production instances of Vault Core where internal accounts do not have account balances and therefore do not stream out account balance updates.
        
    
-   `instructions[].v2_create_account`
    
    -   The following fields are not supported and are ignored if included in the instruction:
        
        -   `stakeholder_ids`
            
        -   `alias`
            
        -   `details`
            
        
    -   In production, [v2 Internal Accounts](/vault-core/5-9/EN/reference/accounts/accounts_version_2#creating_an_internal_account) do not have an account balance - they only have a Ledger balance. As Ledger balances are not supported in Simulation, as a workaround, you can derive the balance of a v2 Internal Account from Posting Events returned in the Simulation response. A working example constructing a balance view from Posting Events is available in the [Inception SDK](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#inception_sdk).
        
    
-   `instructions[].v2_update_account`
    
    -   Only one field can be updated per instruction.
        
    -   The following fields are supported:
        
        -   `status`
            
        -   `processing_label`
            
        -   `parameter_value_hierarchy_node_id`
            
        -   `smart_contract_version_id`
            
        
    -   The following fields are not supported and are ignored if included in the instruction:
        
        -   `stakeholder_ids`
            
        -   `alias`
            
        -   `details`
            
        
    
-   Simulation overrides all [v1 Account statuses](/vault-core/5-9/EN/reference/accounts/accounts_version_1#account_statuses) and treats them as `ACCOUNT_STATUS_OPEN`.
    

[Parameters](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#parameters)

-   `instructions[]create_parameter_value_hierarchy_node`: [UpdateParameterValueHierarchyNode](/vault-core/5-9/EN/api/core_api#_core_api_v1_parameters_ParameterValueHierarchyNode_UpdateParameterValueHierarchyNode) is not supported. Instead, you can create a new node and update the `instructions[].v2_update_account.account.parameter_value_hierarchy_node_id` to the new ID.
    

[Plans](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#plans)

-   `instructions[].create_account_plan_assoc`:
    
-   In Simulation, the only valid status for associating Accounts with a Plan is `ACCOUNT_PLAN_ASSOC_STATUS_ACTIVE`.
    
-   Once associated, Simulation cannot remove Accounts from a Plan.
    

[Postings](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#postings)

-   `instructions[].create_posting_instruction_batch`: `payment_device_token` is not supported. The `target_account` must be set to the `account_id`.
    

[Existing Account Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation)

-   Simulation may run slowly for existing accounts with a large amount of historical data. For example, if a Smart Contract hook has a requirement period of one year, Simulation will take time fetching thousands of postings for the account.
    
-   Simulation only supports the following existing Account statuses at the simulation start time:
    
    -   [v1 Accounts](/vault-core/5-9/EN/api/core_api#accounts_version_1): Any status, except for `ACCOUNT_STATUS_PENDING`.
        
        Running Simulation on an existing v1 Account in `PENDING` status may not trigger any Smart Contract hooks.
        
    -   [v2 Accounts](/vault-core/5-9/EN/api/core_api#accounts_version_2): `ACCOUNT_STATUS_OPEN` or `ACCOUNT_STATUS_PENDING_CLOSURE`.
        
        Running Simulation on an existing v2 Account with any other status may result in an HTTP 400 response.
        
    
-   Simulation start timestamps set before the migration event of accounts created by the [Data Loader API](/vault-core/5-9/EN/environment_and_installation/migrating_to_vault/migrating_using_the_data_loader_api) (including migrated accounts with a `source_create_timestamp` before the simulation start timestamp) may result in a HTTP 400 response.
    
-   In Simulation, when multiple Schedules are set to run at the same timestamp for an existing account, all schedules will execute *before* their outcomes are processed. This means schedules will not see the outcomes of any jobs that share the same `instructions[].timestamp`.
    
    If your schedules depend on the outcomes of another schedule, we suggest you define them to run sequentially so that event outcomes are always processed before the next event.
    
-   In Simulation, if a Contract instructs Postings as part of a Schedule Job and any of these Postings are rejected, the Job and the Schedule are not marked as failed and subsequent Jobs continue to be created.
    
-   Simulation can only retrieve the `effective_to_timestamp` that is currently active for existing Parameter Values; it cannot retrieve past timestamps.
    

Simulation supports existing Supervisor Contracts, however it does not support existing [Plans](/vault-core/5-9/EN/reference/plans).

\+ Therefore, when you simulate an existing account, it will not resolve its existing supervision associations and Plans. Because of this, any existing Plan schedules overriding account schedules will not be respected by the Simulation.