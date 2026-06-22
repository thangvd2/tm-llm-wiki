---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/product_descriptions/vault_core_5_7"
title: "Vault Core Version 5.7 Product Description"
scraped_at: "2026-06-17T15:56:36.936Z"
images: 0
---

# Vault Core Version 5.7 Product Description

[Download PDF](/policy/latest/EN/resources/vault_core_5_7.pdf)

## [](#overview "Copy link to heading")1\. Overview

This product description describes the following for Vault Core Version 5.7

-   The capabilities that are provided by the Vault Core product
    
-   An overview of the infrastructure required to run Vault Core Self Hosted (Bank Hosted) and key information for Vault Core SaaS
    
-   An overview of the performance testing (and its results) carried out by Thought Machine
    

Details on the specific components of the Vault Core product and information about the APIs are available on the Thought Machine Vault Portal website. This product description sets out the Vault Core "Standard" offering. However, this product description may also include Extension features and functionality (which will be expressly called out using the signpost: "Extension") which do not form part of the "Standard" offering and are only included where that Extension has been contractually agreed to be included in the MSA.

## [](#definitions "Copy link to heading")2\. Definitions

 
| Term | Definition |
| --- | --- |
| 
Account

 | 

A single Vault Core resource that holds one or more Balances and represents either a Customer Account or an Internal Account.

 |
| 

Account Schedule Tags

 | 

Resources that you can use to modify how Schedules are executed for Accounts or Plans.

 |
| 

Action Log

 | 

An object that represents information about requests. It is generated from a successful CREATE, UPDATE or DELETE request. You can see who made changes in the resources and how they mutated over time.

 |
| 

Adjustment

 | 

A Vault Core resource that captures information relating to correcting a Customer Account’s Balances in response to backdated events inserted in a specific Insert Time range. See [Configure financial products using Adjustments](<#Configure financial products using Adjustments>) for more information.

 |
| 

Audit Log

 | 

An object that represents information about requests that shows mutations made to any Vault Core resources through one of the available APIs.

 |
| 

Balances

 | 

The financial state of an Account after all the debits and credits have been calculated across the four Parameters defined in [Track Account Balances](#track_account_balances).

 |
| 

Booking Timestamp

 | 

The “booking timestamp” on a Posting represents the time when the funds movement was booked (accounted for) according to Vault Core’s configured booking periods.

 |
| 

Break Glass

 | 

In accordance with Thought Machine’s role-based access control framework (RBAC), an operator within an authorised group can request temporary access to the Production Environment with administrator permissions. This requires approval from senior colleagues and the Client. All activity is retained in Audit Logs for the purpose of review and evidencing if required.

 |
| 

Calendar

 | 

A component that a Client can optionally configure in Vault Core that enhances Vault with a native Calendar capability.

 |
| 

Calendar Event

 | 

A resource containing a pair of explicitly-defined UTC timestamps that define the start and end of an event.

 |
| 

Calendar Period

 | 

An implicitly-defined interval in a Calendar. This interval marks when a cycle starts and ends according to a given unit of time, such as a day or year.

 |
| 

Calendar Period Descriptor

 | 

The frequency of a Calendar Period, being the unit of time that the Calendar uses and the value of the unit.

 |
| 

Chart of Accounts

 | 

An index of all the financial Accounts available for use in a company’s general ledger.

 |
| 

Client

 | 

An organisation or individual using Vault Core.

 |
| 

Client Configuration

 | 

A Configuration that is developed independently by a Client or on behalf of a Client by an entity other than Thought Machine or its related parties.

 |
| 

Client’s customer

 | 

The end users of our Clients.

 |
| 

Configuration

 | 

A configuration, expressed within the Configuration Layer, of how the Vault Core software behaves to meet specific requirements of a Client and any agreed additional entities in relation to their products, operating models and integrations with third-party services and platforms.

 |
| 

Configuration Layer

 | 

The collection of code and values which enable Vault Core to be configured to an individual Client by or on behalf of Thought Machine and/or by or on behalf of a Client (via Configurations) for example, by using Smart Contracts, instruction flows, deployment configuration (such as certificates and URLs), and integrations (such as SAML providers).

 |
| 

Configuration Layer Utility (CLU)

 | 

The utility for applying Configuration Layer resources into Vault Core.

 |
| 

Contract Module

 | 

A collection of “helper functions” that allows a user to write commonly-used code once, and share the code across a number of Smart Contracts, and as further defined in the “Reuse logic between financial products” section. NOTE: This is not to be confused with the legal “Modules” that form part of MSAs.

 |
| 

Core API

 | 

A synchronous RESTful API that provides access to Vault Core services and resources.

 |
| 

Customer Account

 | 

An Account associated with one or more of a Client’s Customers and governed by Smart Contract logic.

 |
| 

Data Loader

 | 

A component of Vault Core that is used to migrate data from a system external to Vault Core into Vault Core itself.

 |
| 

Data Loader API

 | 

A synchronous RESTful API that provides access to the Data Loader’s services and resources.

 |
| 

Data Permissions

 | 

Defined in “Manage access to system resources’

 |
| 

Dead Letter Queue (DLQ)

 | 

A Kafka topic containing messages that could not be processed by the service that consumed them.

 |
| 

DLQ Inspector

 | 

A web application that allows Clients to see messages on Vault Core DLQ topics and republish them to the original topic for reprocessing.

 |
| 

End of Day

 | 

The position of Accounts at the end of a banking day. It is also used to refer to the process by which that position is reached; for example, by taking each customer’s balance at exactly midnight and applying the agreed interest or fees.

 |
| 

Flags

 | 

Binary markers that are used in Vault Core to store information about a customer or an Account.

 |
| 

Flag Definitions

 | 

A resource in the core API. The unique identifier for a Flag.

 |
| 

HVA

 | 

High-volume Account. An Account that is created on a high-volume eligible Smart Contract. These Accounts can capture high volumes of financial movements.

 |
| 

Hooks

 | 

Hooks are functions defined in a Smart Contract that Vault Core can call throughout various points in the lifecycle of an Account.

 |
| 

Insert Timestamp

 | 

The “insert timestamp” feature on a Posting represents the time at which Vault Core processed the Posting by inserting it into the database.

 |
| 

Internal Account

 | 

An Account used to allocate and track funds owned by the Client; not governed by Smart Contract logic.

 |
| 

Ledger Balance

 | 

The Ledger Balance resource retrieves balances from a specified point in time when required. It is the standard way to report on the financial state of Customer and Internal Accounts as of a snapshot of the Postings Ledger.

 |
| 

Operations Dashboard

 | 

A web application that aids in investigating the state of Vault Core in real time. It supplies visibility of a subset of the Vault Core set of resources.

 |
| 

Parameters

 | 

A way to configure Account behaviour without making changes to the underlying Smart Contract code.

 |
| 

Parameter Value Hierarchy Node

 | 

The Parameter Value Hierarchy is a way to manage parameter values for any required groups of Accounts. It is made up of nodes in a hierarchical tree structure, to which Parameter Values and Customer Accounts can be associated.

 |
| 

Payment Device

 | 

A resource which represents instruments that can receive and initiate Postings.

 |
| 

Payment Device Link

 | 

A resource used to associate Accounts with Payment Devices.

 |
| 

Permissions

 | 

Permissions are access control tags that can be assigned to Roles. Permissions can be used to allow users to view pages or interact with resources.

 |
| 

Plan

 | 

An instance of a Supervisor Contract. They are Vault Core’s mechanism for grouping Accounts together. They allow clients to share logic between Accounts and handle operations for a group of Accounts.

 |
| 

Platform Layer

 | 

The components of Vault Core which provide the underlying product capabilities, including the ability to interact with and/or execute Configurations within the software. For example, the Platform Layer includes the installer, the tools, and the software binaries.

 |
| 

Policies

 | 

A Policy specifies one or more actions such as CREATE, READ and UPDATE. Vault Core uses Policies to check whether users can perform actions in relation to an Audit Log.

 |
| 

Posting Instruction Batch

 | 

A wrapper that guarantees atomic execution of all Posting instructions within a batch.

 |
| 

Posting

 | 

An object used to record a credit or debit to an Account in Vault Core.

 |
| 

Postings API

 | 

A Kafka-based API that generates the financial changes (recorded as Postings) that persist in the Postings Ledger. Payment integrations can use the Postings API to create, submit and process the instructions that run simple as well as complex payment lifecycles.

 |
| 

Postings Ledger

 | 

The source of truth of Vault Core’s financial state which stores all Postings that have been processed by Vault Core (credits and debits) and is continuously updated.

 |
| 

Processing Group (PG)

 | 

A high-level resource in Vault Core used to define logical groupings of Accounts in a single Vault Core instance.

 |
| 

Product Library

 | 

The Product Library is a suite of market-ready financial products built to accelerate Clients and partners

 |
| 

Product Versions

 | 

A resource used to specify behaviours and rules for Customer Accounts based on a configured Smart Contract.

 |
| 

Production Environment

 | 

An instance of Vault Core that is ready to be accessed by an end user or interact with end-user data. This is also sometimes referred to as a Production Instance. Thought Machine-managed for Vault Core SaaS. Client-managed for (non-SaaS) bank-hosted Vault Core environments.

 |
| 

Restrictions

 | 

A resource that can be used to enforce certain custom business rules by using a blocking mechanism.

 |
| 

Roles

 | 

Groups of one or more Permissions that are used to assign access rights to a client’s authorised users.

 |
| 

Schedules

 | 

An entity that describes how and when a time-based process needs to be executed within Vault Core.

 |
| 

Smart Contract

 | 

The representation of the financial logic of a given bank Product. Written in Python, it allows a Client to deterministically describe the behaviour of a Product for all events of its life cycle.

 |
| 

Smart Contract Module Versions Link

 | 

A resource used to represent a link between a Smart Contract and a Contract Module.

 |
| 

Source Insert Timestamp

 | 

The “source insert timestamp” feature on a Posting captures the time at which the Posting occurred in a different core banking system. Clients can set this field to maintain a record of when any Postings that have been migrated to Vault Core were inserted into their original ledger.

 |
| 

Supervisor Contract

 | 

A type of Smart Contract that can be used to connect other Smart Contracts together. Provides a mechanism to override or extend the financial decisioning of multiple Accounts.

 |
| 

Thought Machine Configuration

 | 

A Configuration that is developed by or on behalf of Thought Machine for a Client or its related parties.

 |
| 

Transfer

 | 

A financial movement between Accounts.

 |
| 

Value Timestamp

 | 

The “value timestamp” feature on a Posting represents the source of truth for when the assets moved from or to the customer; note this can often be in the past to reflect fund movements about which Vault is merely a system of record.

 |
| 

Vault Job

 | 

A collection of multiple related Vault Job Operations, for example End of Day across all Accounts within a Vault Core instance.

 |
| 

Vault Job Operations

 | 

A single process within a collection of related processes (a Vault Job), for example interest accrual on an individual current Account within End of Day operations.

 |
| 

Vault Jobs

 | 

Vault Jobs is a web application that displays the progress and health of asynchronous processes within Vault Core, and enables manual retries of failed scheduled operations.

 |
| 

Vault Permissions

 | 

Defined in “Manage access to system resources”.

 |

## [](#financial_product_capabilities "Copy link to heading")3\. Financial product capabilities

### [](#define_financial_products "Copy link to heading")3.1. Define financial products

The Configuration Layer lets users build a range of configurable products using Smart Contracts. Smart Contracts allow you to customise these products without changing the underlying Platform Layer. Vault Core’s APIs then let you integrate your own services and applications with the defined products to achieve a range of customer journeys, analytics and reporting. Smart Contracts define and execute behaviours of a financial product through defined Parameters. These behaviours include scheduled financial servicing events (such as interest accruals and Postings), fees, and events in the product life cycle (such as at opening and closing). Vault Core comes with a Software Developer Kit (SDK) which explains how Clients can build and customise Smart Contracts.

#### [](#build_financial_products_with_bespoke_financial_logic "Copy link to heading")3.1.1. Build financial products with bespoke financial logic

Clients can define the logic of a financial product within a Smart Contract. Smart Contracts, written in Python, are configuration files that express a financial product and define the behaviour that governs an Account. This behaviour includes the business logic and financial operation of the Client’s products. Smart Contract logic is executed based on events in the system that may be initiated externally to the execution of the Smart Contract or initiated by the Smart Contract itself. An example of an externally-initiated event is the application of a Posting Instruction (see [Instruct financial movements](#instruct_financial_movements)), whereas an event initiated from within the Smart Contract would include a scheduled event that is defined in the Smart Contract. Any execution of the Smart Contract may request Vault Core to implement changes, such as new Posting instructions, and to request data about the Account, such as Balances, or Parameters. This behaviour is defined in the Smart Contract code.

##### [](#fetch_data_to_implement_bespoke_financial_logic "Copy link to heading")3.1.1.1. Fetch data to implement bespoke financial logic

Smart Contracts can retrieve a range of data stored within Vault Core that clients can use to inform the Configuration’s behaviour through bespoke financial logic. This data includes:

-   For Postings, a time series of historic and future Postings
    
-   For Balances, live Account Balances as well as their historic and future data
    
-   For Flags, the past, current, or future Flags for Flag Definitions associated with the Account or its stakeholders
    
-   For Parameters, current Parameter values and their value history for Account, product and global Parameter types
    
-   For Calendars, Calendar Events from 3 months prior and up to 3 months ahead of the current day
    
-   For Accounts, ID, creation time, timezone and whether it is an asset or liability Account
    
-   For Hook execution details, execution time, ID, and result
    
-   For Denominations, the permitted denominations of an Account
    
-   For Supervisee details, the alias of an Account within a Supervisor Contract
    

NOTE - Fetching large volumes of data may result in unknown product performance issues.

#### [](#leverage_chart_of_accounts_within_a_financial_product_when_instructing_financial_movements "Copy link to heading")3.1.2. Leverage Chart of Accounts within a financial product when instructing financial movements

Clients can define Internal Accounts (see [Represent an Account for your financial institution](#represent_an_account_for_your_financial_institution)) to represent part of their Chart of Accounts within Vault Core. For example, when writing a Smart Contract, Clients can use these Internal Accounts to capture operations, such as charging a fee (income received in a certain Internal Account) or paying interest (expenditure captured in another Internal Account).

#### [](#reuse_logic_between_financial_products "Copy link to heading")3.1.3. Reuse logic between financial products

Vault Core offers ways for Clients to share partial financial logic across Configurations in Vault Core to help speed up development time and lower the effort required for Smart Contract creation.

A Contract Module enables functions and constants to be shared between any Smart Contract that imports the module. For example, Clients are able to write a Contract Module that contains helper functions for the calculation of accrued interest that can be shared across their deposit and lending products within Vault Core.

Clients can update the implementation of a Contract Module independently of the Smart Contract code; this allows Clients to make a single change that is cascaded to multiple products that use the module, thereby enabling Clients to lower their development time.

#### [](#link_financial_products_or_create_propositions_of_multiple_financial_products "Copy link to heading")3.1.4. Link financial products or create propositions of multiple financial products

Vault Core offers a mechanism to support scenarios where you need to offer a proposition that involves the linking of multiple Configurations through Supervisor Contracts.

A Smart Contract contains the "complete" definition of a given product with regards to its financial behaviour within Vault Core. However, a Supervisor Contract can alter this behaviour to represent complex relationships between standalone Accounts. Clients can configure Supervisor Contracts with logic that responds to financial and Account lifecycle events in addition to, or instead of, the logic maintained in the Smart Contracts that they supervise.

Supervisor Contracts can define the specific Product Versions that they supervise. These Product Versions are then validated against the Supervisor Contract specification. This validation enables Clients to ensure the supervised Product Versions contain the correct events and metadata.

It is also possible to write flexible Supervisor Contracts that do not predefine product versions they supervise. Flexible Supervisor Contracts do not then provide the same validation when you associate Accounts to a Plan (see [Link Accounts to propositions](#link_accounts_to_propositions_containing_multiple_financial_products)). The Restrictions of predefined supervised Product Versions no longer apply when clients associate an Account to a Plan.

NOTE - Supervisor Contracts introduce increased complexity to Smart Contract execution. If you write complex logic for a Smart Contract or Supervisor Contract, then you should take additional care to ensure that there is no degradation in functionality or performance.

#### [](#build_financial_products_that_can_capture_high_volumes_of_financial_movements_extension "Copy link to heading")3.1.5. Build financial products that can capture high volumes of financial movements (Extension)

Clients can create Smart Contracts that are high-volume eligible, meaning that the Accounts created on these Smart Contracts can capture high volumes of financial movements on a single Account. High-volume Accounts are currently optimised for taking higher throughput of offline Postings traffic via the low priority topic in the Asynchronous Posting API. High-volume eligible Smart Contracts currently have the following limitations, including that they do not:

-   Fetch Postings
    
-   Fetch balance intervals
    
-   Implement the post-posting hooks
    

chat\_bubble

An Account on a high-volume eligible Smart Contract, can only be updated to Smart Contracts that are high-volume eligible. An Account on a high-volume eligible Smart Contract cannot be updated or converted back onto a non high-volume eligible Smart Contract.

### [](#define_the_financial_logic_that_will_be_implemented_in_response_to_a_financial_movement "Copy link to heading")3.2. Define the financial logic that will be implemented in response to a financial movement

Clients can configure a set of actions to be performed when these Hooks are called within a Smart Contract. These actions can determine how the Configuration responds to financial movements executed on its underlying Accounts.

#### [](#assess_and_either_accept_or_reject_instructed_financial_movements "Copy link to heading")3.2.1. Assess and either accept or reject instructed financial movements

Clients can accept or reject a financial movement ([Posting](#instruct_financial_movements)) instructed against a Customer Account by leveraging the pre-posting Hook within the underlying Smart Contracts for their financial products.

The pre-posting Hook runs before any instructed financial movements from outside the Smart Contract are committed, and so Clients can specify the conditions that need to be met before the financial movement can be accepted within the Hook. For example, verifying that the Account balance is sufficient before making a purchase.

#### [](#enrich_accepted_financial_movements "Copy link to heading")3.2.2. Enrich accepted financial movements

Clients can enrich accepted financial movements with metadata associated with the decision. For example, whether a movement required the Account’s overdraft facility and how much of it was used.

The Smart Contract can specify the metadata on a per posting instruction basis, and the metadata is automatically namespaced to the affected customer Account(s). Enriched posting instructions and their metadata can subsequently be accessed via the Contracts Language API 4.0 and Core API.

#### [](#generate_side_effects_of_financial_movements "Copy link to heading")3.2.3. Generate side effects of financial movements

After a financial movement is accepted, Clients can trigger a desired set of actions on the Customer Account by leveraging the post-posting Hook within the underlying Smart Contracts of their Configuration.

Post-posting events are processed in a certain order for both supervised and unsupervised Accounts. This ensures that the post-posting operations of a Posting are completed before the post-posting operations of a subsequent Posting are started. However, this ordering does not ensure that the post-posting operations of a Posting are completed before the pre-posting operations of subsequent Postings can be started.

NOTE - The operations that Clients define within this Hook are not on the critical path when it comes to the processing of a financial movement.

The actions that can be triggered are to:

##### [](#generate_notifications "Copy link to heading")3.2.3.1. Generate notifications

Clients can configure the hook to generate a notification event which enables them to input such notification into the downstream system. For example, to make a different system or their customer aware that an Account is no longer delinquent due to receiving a payment.

##### [](#instruct_subsequent_financial_movements "Copy link to heading")3.2.3.2. Instruct subsequent financial movements

Clients can instruct a set of further financial movements on the Account, for example instructing a rebalance within the Account from a non-interest bearing balance to an interest bearing balance.

##### [](#make_a_change_to_a_predefined_scheduled_event "Copy link to heading")3.2.3.3. Make a change to a predefined scheduled event

Clients can define logic to alter a scheduled event that is defined in the Smart Contract. For example, you can cancel penalty interest accrual due to clearing of an overdue balance.

### [](#define_parameters_that_will_affect_the_behaviour_of_a_specific_account_a_product_or_set_of_products "Copy link to heading")3.3. Define Parameters that will affect the behaviour of a specific Account, a product or set of products

Vault Core enables you to manage a portfolio of products and Accounts by providing mechanisms that are designed to help Clients respond to changes in the market and business environment, or to individual customer preferences.

For example, Clients can use Vault Core to respond to a change in the central bank base rate that impacts the majority of their product portfolio, or alternatively receive a request to update the monthly repayment date on a loan for an individual customer.

These types of both simple and complicated variations can be captured using a set of Parameters and Flags, which enable the Client to configure Smart Contracts and Accounts using calls to the Core API or directly on a user application.

There are four different types of Parameters:

-   Account Parameters - specific to an individual Account
    
-   Product Parameters - specific to a financial product
    
-   Parameter Value Hierarchy Parameters - enabling custom grouping of Accounts or products
    
-   Global Parameters - available to all products and Accounts
    

NOTE - Vault Core also includes derived parameters (outputs), which have been succeeded by Account Attributes. For more information see [Configure a financial product to calculate and surface data based on the state of an Account](#configure_a_financial_product_to_calculate_and_surface_data_based_on_the_state_of_an_account).

Flags are described further in [Manage Flags](#manage_flags) and [Manage payment instruments that instruct financial movements](#manage_payment_instruments_that_instruct_financial_movements).

#### [](#configure_parameters_specific_to_an_individual_account "Copy link to heading")3.3.1. Configure Parameters specific to an individual Account

Clients have the ability to set a variable value that applies to an individual Account by configuring an Account Parameter within the Smart Contract of the applicable financial product.

Clients can configure each Account Parameter to be either mandatory or optional. If mandatory, then the value of the Parameter will need to be set when opening the Account.

Clients can update the value of Account Parameters throughout the lifecycle of the Customer’s Account using the Core API. For example, Clients can change the repayment date of a mortgage from one recurring date to another.

Alternatively, Clients can configure the behaviour of a single Account by setting a flag that the Smart Contract can reference during execution.

NOTE - When using Contracts Language version 3, these Parameters are referred to as instance level Parameters.

##### [](#assess_and_either_accept_or_reject_a_configurational_change_to_an_account "Copy link to heading")3.3.1.1. Assess and either accept or reject a configurational change to an Account

Clients can configure a financial product to either accept or reject an Account Parameter value change for an Account using the pre-parameter change Hook.

The pre-parameter change Hook runs when an Account level change is instructed but before it is applied, and so you can specify the conditions that need to be met before the Account’s Parameter value is changed. For example, Clients can verify that the Account has been open for at least a month before a Client can change their repayment date.

##### [](#generate_side_effects_of_a_configurational_change "Copy link to heading")3.3.1.2. Generate side effects of a configurational change

After an Account Parameter change is accepted, Clients can trigger a chosen set of actions on the Customer Account by making use of the post-parameter change Hook within the underlying Smart Contracts of the financial product.

NOTE - The operations Clients define within this Hook are not on the critical path when it comes to the processing of a Parameter change.

The actions that can be triggered are to:

###### [](#generate_notifications_2 "Copy link to heading")3.3.1.2.1. Generate notifications

Clients can configure the hook to generate a notification event; this can be consumed by the downstream system to either make a different system or the Client aware that the Parameter’s value has been changed.

###### [](#instruct_subsequent_financial_movements_2 "Copy link to heading")3.3.1.2.2. Instruct subsequent financial movements

Clients can instruct a set of financial movements on the Account.

###### [](#make_a_change_to_a_predefined_scheduled_event_2 "Copy link to heading")3.3.1.2.3. Make a change to a predefined scheduled event

Clients can define logic to alter a scheduled event that is defined in the Smart Contract, for example, to change the date of interest application.

#### [](#configure_parameters_specific_to_a_product "Copy link to heading")3.3.2. Configure Parameters specific to a product

Clients can set a Parameter with a variable value that applies to all Vault Core Accounts, backed by a specific Smart Contract that captures the terms and conditions for a distinct financial product. Parameters at this level are referred to as Product Parameters.

For example, the Client may offer a savings account where a certain interest rate is applied to a balance up until a maximum level. In this example, both the interest rate and the maximum level are specific to only this product and can be implemented using a Template Parameter.

Product Parameters must have their structures defined in full inside a Smart Contract as they are unique to the product. Clients can set the initial value of product level Parameters using the Core API or the [Configuration Layer Utility (CLU)](#manage_the_configuration_of_vault_core_resources_in_bulk). If a mandatory Product Parameter has not been assigned a value, then Vault Core will report an error during the product creation process. (In Contracts Language v3 this Parameter is referred to as a Template Parameter.)

#### [](#configure_parameters_specific_to_a_set_of_products "Copy link to heading")3.3.3. Configure Parameters specific to a set of products

Clients can set a Parameter with a variable value that applies to multiple financial products and, as a result, multiple types of Customer Accounts. These are referred to as “Global Parameters”.

Global Parameters are defined outside of the Smart Contract, however their values can be fetched and used within the Smart Contracts. Clients can set them using the Core API or the Configuration Layer Utility (CLU), and can update them further using the Core API. Their definitions do not need to be repeated by each Smart Contract that uses them.

For example, Clients can capture the country’s central bank base interest rate as a Global Parameter. When this rate is changed the Client only needs to fix this one Global Parameter. The new value will then propagate down to all the financial products that reference this base rate.

#### [](#configure_parameters_for_a_group_of_accounts_using_the_parameter_value_hierarchy "Copy link to heading")3.3.4. Configure Parameters for a group of Accounts using the Parameter Value Hierarchy

Clients can manage Parameter values for any required groups of Accounts using the Parameter Value Hierarchy. This is a feature which enables banks to manage Parameter values for any required groups of Accounts; for example, Accounts grouped by geographical region, corporate entity or business structure, or Accounts grouped by product line.

#### [](#configure_parameters_in_advance_of_the_effective_time "Copy link to heading")3.3.5. Configure Parameters in advance of the effective time

Clients can set a Parameter value change ahead of the change effective time. This is referred to as future dating of a Parameter value change.

For example, a Client can set a product’s interest rate to increase next month following notice from the Client to its affected customers today in respect of that future intended interest rate increase. The Client can use this feature to plan ahead and schedule its change ahead of time.

#### [](#retrieve_parameters_that_affect_an_account "Copy link to heading")3.3.6. Retrieve Parameters that affect an Account

Clients can view the Parameter Values that affect an Account using the Core API. These are the same Parameter Values that the Account’s Smart Contract could fetch. Only Parameter Values for the Account, for a Parameter Value Hierarchy Node (or its Parameter Value Hierarchy Node ancestors) associated with the Account, or that are Global, can be inherited by the Account. For example, Clients can define the country’s central bank base interest rate as a Global Parameter. All financial products that reference this base rate could fetch this in a Smart Contract hook. Clients can view this rate being inherited by an individual Account using the Core API.

#### [](#retrieve_parameters_that_affect_a_parameter_value_hierarchy_node "Copy link to heading")3.3.7. Retrieve Parameters that affect a Parameter Value Hierarchy Node

Clients can view which Parameter Values affect a Parameter Value Hierarchy Node using the Core API. These are the same Parameter Values that could be fetched if an Account is associated with the Parameter Value Hierarchy Node (or its Parameter Value Hierarchy Node ancestors). Only Parameter values for the Parameter Value Hierarchy Node (or its Parameter Value Hierarchy Node ancestors), or that are Global, can be inherited by the Parameter Value Hierarchy Node. For example, Clients can structure their Parameter Value Hierarchy such that a Parameter Value Hierarchy Node exists for the UK, with child Nodes for different product lines. Clients can capture the UK’s central bank base interest rate as a Parameter owned by the UK Node. All financial products associated with the UK Node (or its Parameter Value Hierarchy Node descendants) and that reference this base rate could fetch this in a Smart Contract hook. Clients can view this rate being inherited by those Parameter Value Hierarchy Node descendants using the Core API.

### [](#define_product_logic_that_will_execute_in_response_to_certain_account_lifecycle_events "Copy link to heading")3.4. Define product logic that will execute in response to certain Account lifecycle events

#### [](#configure_actions_to_be_completed_after_an_account_is_opened "Copy link to heading")3.4.1. Configure actions to be completed after an Account is opened

When configuring a financial product, Clients can specify a set of actions/behaviours that need to be carried out when Accounts of the product are opened, for example applying an activation fee, or alternatively amortising a loan.

Clients can configure this action/behaviour by defining logic within the activation Hook of the Smart Contract, where Clients can specify the desired actions to be carried out after an Account is opened. The actions that can be triggered are to:

##### [](#generate_notifications_3 "Copy link to heading")3.4.1.1. Generate notifications

Clients can configure the Hook to generate a notification event which can be consumed by the downstream system either to make a different system or the Client aware that the Account has been opened.

##### [](#instruct_subsequent_financial_movements_3 "Copy link to heading")3.4.1.2. Instruct subsequent financial movements

Clients can instruct a set of financial movements on the Account. For example, they could create Postings that disburse funds from a loan Account.

##### [](#make_a_change_to_a_predefined_scheduled_event_3 "Copy link to heading")3.4.1.3. Make a change to a predefined scheduled event

Clients can define logic to alter a scheduled event that is defined in the Smart Contract. For example, where a customer has specified a specific repayment date, the repayment Schedule could be updated to reflect that date.

#### [](#configure_actions_to_be_completed_before_an_account_is_closed "Copy link to heading")3.4.2. Configure actions to be completed before an Account is closed

When configuring a financial product, Clients can specify a set of actions/behaviour that needs to be carried out before Accounts of the product can be closed, for example ensuring all Balances on the Account are equal to 0 before the Account is closed.

Clients can configure this by defining logic within the deactivation Hook of the Smart Contract, where Clients can specify the desired actions to be carried out before the Account is closed. The actions that can be triggered are to:

##### [](#generate_notifications_4 "Copy link to heading")3.4.2.1. Generate notifications

Clients can configure the Hook to generate a notification event which can be consumed by the downstream system to either make a different system or the Client aware that the Account is being closed.

##### [](#instruct_a_set_of_financial_movements "Copy link to heading")3.4.2.2. Instruct a set of financial movements

Clients can instruct a set of financial movements on the Account.

##### [](#make_a_change_to_a_predefined_scheduled_event_4 "Copy link to heading")3.4.2.3. Make a change to a predefined scheduled event

Clients can define logic to alter a scheduled event that is defined in the Smart Contract.

##### [](#reject_closure "Copy link to heading")3.4.2.4. Reject closure

Clients can reject the closure of the Account based on a specified set of conditions.

#### [](#configure_actions_to_be_completed_after_an_account_is_moved_to_a_new_product "Copy link to heading")3.4.3. Configure actions to be completed after an Account is moved to a new product

Clients can configure a set of actions/behaviours that needs to be carried out after an Account is moved from one product version to another for example, reallocating funds within balances to enable new functionality.

Clients can configure this by defining logic within the conversion Hook of the Smart Contract the Account is being moved to, where you can specify the desired actions to be carried out after the Account has been converted to a new product version. (In Contracts Language version 3, this is referred to as the “Upgrade Code”.)

The actions that can be triggered are to:

##### [](#generate_notifications_5 "Copy link to heading")3.4.3.1. Generate notifications

Clients can configure the Hook to generate a notification event which can be consumed by the downstream system either to make a different system or the Client aware that the Account has been moved to another product.

##### [](#instruct_subsequent_financial_movements_4 "Copy link to heading")3.4.3.2. Instruct subsequent financial movements

Clients can instruct a set of financial movements on the Account.

##### [](#make_a_change_to_a_predefined_scheduled_event_5 "Copy link to heading")3.4.3.3. Make a change to a predefined scheduled event

Clients can define logic to alter a scheduled event that is defined in the Smart Contract.

### [](#configure_scheduled_operations_in_a_financial_product "Copy link to heading")3.5. Configure scheduled operations in a financial product

Vault Core allows Configurations to define how and when a time-based process needs to be executed. Clients can create Schedules to define:

-   Events that follow a time pattern for example, daily interest accrual, or
    
-   One-off events, for example, a one-off fee.
    

Once a Schedule is defined in a Smart Contract, Accounts will receive events according to the pattern defined in the Configuration. The Configuration can then define the behaviour to be executed once an event is received. Schedules provide a guarantee that operations configured in a Schedule will be executed in a specific order for both repeated executions of the same Schedule and for Schedules that are grouped. Clients are able to group Schedules and define an order in which they should run, and a Schedule in the group will only initiate once the previous Schedule in the group has completed.

Schedules will execute shortly after the specified time, but are able to see a logical and repeatable view of the core from their scheduled time, and so the data fetched to be used in the operations performed by the Schedule will be based on a snapshot of the available data at the original scheduled time.

#### [](#configure_product_logic_to_define_scheduled_events "Copy link to heading")3.5.1. Configure product logic to define scheduled events

Clients can configure a set of actions/behaviour that needs to be carried out on a scheduled basis in an Account for example, accruing or applying interest on a daily or monthly basis.

Clients can configure this by defining logic within the scheduled event Hook of the Smart Contract, where Clients can specify the operations to be carried out on either a one-off or recurring basis. These actions can perform calculations on data they fetch and create directives that are defined below for example, calculating the interest accrual on a daily basis from the current balance and an interest configured in a parameter.

The actions that can be triggered are to:

##### [](#generate_notifications_6 "Copy link to heading")3.5.1.1. Generate notifications

Clients can configure the Hook to generate a notification event which can be consumed by the downstream system to either make a different system or the Client aware that the scheduled event has run.

##### [](#instruct_subsequent_financial_movements_5 "Copy link to heading")3.5.1.2. Instruct subsequent financial movements

Clients can instruct a set of financial movements on the Account, for example, accruing interest on a regular basis.

##### [](#make_a_change_to_a_predefined_scheduled_event_6 "Copy link to heading")3.5.1.3. Make a change to a predefined scheduled event

Clients can define logic to alter a scheduled event that is defined in the Smart Contract.

Clients can configure specific conditions that allow a scheduled event generated Posting Instruction Directive (PID) to fail in a non-blocking manner. As described in 3.5.1.2, a successfully executed scheduled event could instruct subsequent financial movements. These financial movements are the result of a successful Posting Instruction Directive (PID) created by the scheduled event execution. If a client does not configure any non-blocking logic, all scheduled event generated PID failures block downstream dependent actions by default.

#### [](#instantiate_scheduled_events "Copy link to heading")3.5.2. Instantiate scheduled events

Schedules are automatically created when an Account is opened.

#### [](#retrieve_scheduled_events "Copy link to heading")3.5.3. Retrieve scheduled events

Schedules can be monitored in the Vault Jobs app, or by querying the REST endpoints. The completion of any set of scheduled executions is streamed out when all scheduled operations have been completed successfully.

Smart Contracts can also retrieve the last run time of a scheduled execution. Clients can use this to define product behaviour for example, to check for an overdue amount, before deciding whether an Account should be flagged as delinquent.

#### [](#retry_failed_scheduled_events "Copy link to heading")3.5.4. Retry failed scheduled events

Scheduled operations that have “Errored” during execution can be manually retried in a batch via an action button in Vault Jobs, or by using the Scheduler REST endpoints.

“Errored” scheduled operations can also be manually overridden via the Scheduler REST endpoints. Overridden scheduled operations will behave as successful and unblock the schedule, but will not be retried. Once an operation has been marked as overridden, it cannot be modified.

### [](#configure_financial_products_using_adjustments_extension "Copy link to heading")3.6. Configure financial products using Adjustments (Extension)

Vault Core can correct the financial state of an Customer Account in response to backdated events, such as Postings, that may retroactively affect the way Vault Core processed historic events. This process is known as an Adjustment.

When an Adjustment is triggered for a Customer Account, Vault Core will:

-   Detect newly backdated Flags, Core API Parameter Values and Posting Instruction Batches affecting the Account since the previous Adjustment
    
-   Calculate the impact of the backdates, if any, on historic events
    
-   Correct the Account’s Balances at configurable times to reflect the calculated impact, if any
    

#### [](#pre_requisites_and_compatibility "Copy link to heading")3.6.1. Pre-requisites and Compatibility

Adjustments must be used in conjunction with key Vault Core 5 improvements, such as /v2/accounts and /v1/parameter endpoints. Additionally, Adjustments are not currently available to High-volume Accounts, or Accounts linked to a Plan. Please refer to Vault Core documentation for further information on pre-requisites and compatibility.

#### [](#opt_in_to_adjustments "Copy link to heading")3.6.2. Opt in to Adjustments

A financial product can opt in to Adjustments via its Smart Contract.

#### [](#configure_adjustments_triggers "Copy link to heading")3.6.3. Configure Adjustments triggers

A financial product that has opted in to Adjustments can specify which of its Schedules should trigger Adjustments. These Schedules also determine the times at which an Adjustment’s corrections are valued to.

#### [](#configure_adjustments_handling "Copy link to heading")3.6.4. Configure Adjustments handling

An Adjustment determines the impact of backdates by re-evaluating an Account’s historic events. By default, this is achieved by combining the current financial product logic with the updated data it requires, including backdates. Vault Core also allows clients to configure Adjustment-specific logic for determining:

-   Side-effects of Postings, via the post\_posting\_adjustment\_hook
    
-   Side-effects of Parameter changes, via the post\_parameter\_change\_adjustment\_hook
    
-   Side-effects of Schedules, via the scheduled\_event\_adjustment\_hook
    

### [](#manage_the_lifecycle_of_products "Copy link to heading")3.7. Manage the lifecycle of products

Product versions are used to represent financial products based on Configurations in Vault Core. These products, when configured with Parameters, can support vast numbers of end products. Products are versioned using version IDs. Version IDs manage the current version of the product, using semantic versioning conventions.

When Product Versions are created, they define the product Parameters for that product variation. To change these Parameters, Clients must create a new version.

#### [](#launch_a_financial_product "Copy link to heading")3.7.1. Launch a financial product

In order to launch a financial product and make it available for Accounts to be opened, Clients need to create a product version using a configured Smart Contract.

Clients can create a product version based on a Smart Contract using the Core API or Configuration Layer Utility (CLU). Product variations can be created by specifying values for product Parameters. For example, Clients can create a product version of a fixed interest loan and another product version of a variable-rate loan both backed by the same Smart Contract.

#### [](#update_financial_products "Copy link to heading")3.7.2. Update financial products

Clients can update an existing financial product using the Core API; this will create a new product version. The new version can set an Account conversion strategy that will define whether existing Accounts should be converted instantaneously, or be requested to convert.

### [](#simulate_the_behaviour_of_financial_products "Copy link to heading")3.8. Simulate the behaviour of financial products

Clients can run different types of simulations to enable them to verify that a Smart Contract is functioning correctly. Clients can use the simulator to ensure any changes made to Smart Contracts behave correctly. Clients can also use the simulator on an existing Customer’s Account to simulate changes made in the past, or how changes will take effect in the future.

#### [](#simulate_the_behaviour_of_an_account_before_it_is_opened "Copy link to heading")3.8.1. Simulate the behaviour of an Account before it is opened

Clients can run one or more Smart Contracts or Supervisor Contracts in a virtual simulation environment and observe their outputs using the Contract Simulation endpoint in the Core API.

When simulating a contract, Clients need to specify:

-   Start and end timestamps
    
-   The Smart Contract(s) they want to simulate
    
-   Any instructions detailed in the API documentation
    

The simulation will run through all the instructions one by one. It returns response lines if Hook directives or output logs are generated as part of this instruction processing.

Clients can use these responses in automated tests to help verify the behaviour of a Smart Contract. Clients could, for example, check that the expected Balances have been created.

Such responses also enable use in end-user applications that are able to convert the results data to graphical or similar user-friendly output, such as a graph showing loan repayments.

#### [](#simulate_the_behaviour_of_an_existing_customer_account "Copy link to heading")3.8.2. Simulate the behaviour of an existing Customer Account

To carry out a simulation where they need to match the exact state of an already-opened Account, Clients can specify existing Vault Core Accounts and products to be included in a simulation. This is known as “Existing Account Simulation”.

Existing Account Simulation can simulate existing Vault Core Accounts by retrieving the Account state at the simulation start time. (Any modifications made to existing Accounts within a simulation environment do not persist after the request has completed). Clients cannot make changes to the events that occurred before their chosen simulation start time.

Existing Account Simulation can also retrieve an existing Vault Core product and its associated product level state at the simulation start time. This provides a more accurate simulation of the actual product execution.

NOTE - It is permitted to reference any existing data from within the Vault Core instance and modify within a simulation request, as any modifications made within a simulation environment do not persist after the request has completed.

### [](#test_the_correctness_of_the_financial_products "Copy link to heading")3.9. Test the correctness of the financial products

#### [](#carry_out_unit_tests_for_financial_products "Copy link to heading")3.9.1. Carry out unit tests for financial products

Vault Core offers the Contracts SDK, which is a Python package that can be used to develop and unit test Smart Contracts, Supervisor Contracts and Contract Modules. It offers unit testing capabilities with accurate custom contracts types representation, unit test utilities and some example unit tests. Most importantly, it provides an installable Python package that can be used for local development and unit tests.

#### [](#carry_out_simulation_tests_on_financial_products "Copy link to heading")3.9.2. Carry out simulation tests on financial products

Clients can test financial product behaviour in a simulated manner without making changes to a Vault Core instance by using Contract Simulation via our Core API.

Clients can provide start and end times, and running the simulation will internally replay all events that would have happened in a Vault Core instance. All Smart Contract Hooks (including scheduled code) will run as they would in a Vault Core instance.

#### [](#carry_out_end_to_end_tests_on_financial_products "Copy link to heading")3.9.3. Carry out end to end tests on financial products

In order to carry out end to end (E2E) tests on financial product behaviour, clients can use our Core API on a test environment. Tests cases that include scheduled behaviours can rely on our Accelerated Testing approach.

### [](#configure_a_financial_product_to_calculate_and_surface_data_based_on_the_state_of_an_account "Copy link to heading")3.10. Configure a financial product to calculate and surface data based on the state of an Account

Clients can define specific calculations, based on the current state of an Account at an effective time in Vault Core, within the Attribute Hook in the Smart Contract, and query the result of these calculations on-demand via the Core API.

Account Attributes can be used to track and retrieve useful information about an Account. For example, the number of months left in a loan term based on the monthly instalment amount and the outstanding principal, or the total early repayment amount inclusive of fees if a customer was to repay their loan early.

Account Attributes serve as the successor of derived parameters, used to calculate and surface only the current state of an Account.

## [](#financial_model_capabilities "Copy link to heading")4\. Financial model capabilities

### [](#how_financial_movements_are_represented "Copy link to heading")4.1. How financial movements are represented

Vault Core acts as a ledger that records the allocation and ownership of financial assets by maintaining an ordered list of movements of financial assets for every bank Account. From this ledger, it is possible to derive an Account balance for a point in time or retrieve an ordered balance time series.

Vault Core provides flexibility to represent a change to the underlying financial assets that Clients wish to model, as well as a granular view that allows Clients to reconcile and report positions at any point of the day.

The ledger system of Vault Core provides a unified mechanism for instructing the movement of funds in Vault Core using a double-entry model of debits and credits called Postings.

Under certain conditions, Vault Core is the source of truth for Posting, i.e., the decider of the state of the funds. It will capture when a financial movement was processed in Vault Core, when it should be booked/reported to downstream systems, and when the assets moved to or from the customer.

Vault Core can also be used as a system of record for Postings, that is, Vault Core records the movement of funds outside Vault Core’s control. For example, it can capture a settlement instructed by a payment scheme when the payment of previously-authorised funds has succeeded.

#### [](#maintain_an_immutable_record_capturing_when_financial_movements_are_inserted_into_the_ledger "Copy link to heading")4.1.1. Maintain an immutable record capturing when financial movements are inserted into the ledger

Postings are stored in the Postings Ledger, which represents the source of financial truth of Vault Core. The Postings Ledger is an append-only store of credits and debits, each of which are linked to exactly one Posting Instruction Batch that was processed in the system.

Vault Core always sets the Insert Timestamp on a Posting and it cannot be altered. Vault Core can construct a time series using this timestamp, indicating the order in which they were applied to the Account(s). The entries in this time series are immutable, due to the forward motion of time.

#### [](#capture_when_a_financial_movement_was_due_to_a_customer "Copy link to heading")4.1.2. Capture when a financial movement was due to a customer

The Value Timestamp on a Posting represents the time when the funds should have moved between the source and destination Accounts. This is set by either Vault Core or your financial institution, depending on where the Posting originates.

Vault Core can construct a time series with the value time order which shows the order that Postings should have been applied to the Account(s) but not necessarily when they were; for example, Vault Core can receive a backdated (back-valued) Posting after processing a later Posting. This time series is mutable; the value balance at a historic point in time can change if Vault Core receives new backdated (back-valued) Postings, and the value balance at a future point in time can change if Vault Core receives new future-dated (future-valued) Postings.

#### [](#capture_when_a_financial_movement_should_be_accounted_for "Copy link to heading")4.1.3. Capture when a financial movement should be accounted for

The Booking Timestamp on a Posting represents the time when the funds movement was booked (accounted for). In most cases Vault Core sets this value based on when it accepted the Posting. It is, however, possible for Clients to override Vault Core’s Booking Timestamps by explicitly setting these values on any Posting. This enables a Client to decide which accounting period it uses to report the Posting to. Vault Core can also construct a time series with the booking time order which shows the order that Postings should have been accounted for, but not necessarily when they were; for example, Vault Core can receive a backdated (back-booked) Posting. This time series is mutable; the booking balance at a historic point in time can change if Vault Core receives new backdated (back-booked) Postings, and the booking balance at a future point in time can change if Vault Core receives new future-dated (future-booked) Postings.

#### [](#specify_the_time_that_a_financial_movement_was_captured_in_a_previous_core_banking_system_when_migrating_to_vault_core "Copy link to heading")4.1.4. Specify the time that a financial movement was captured in a previous core banking system when migrating to Vault Core

Clients can use the Source Insert Timestamp when migrating financial movements from a different core banking ledger to Vault Core. It captures when a financial movement has occurred in a different core banking system, and so Clients can set this field to maintain a record of when Postings that are migrated to Vault Core were inserted into their original ledger.

This allows Clients to preserve the original value and not take the Vault Core insertion time if another migration is required in the future.

NOTE - It is not possible to put a future date on the Value Timestamp or Booking Timestamp for migrated Postings.

#### [](#represent_a_financial_movement_of_any_asset_type_and_to_any_precision "Copy link to heading")4.1.5. Represent a financial movement of any asset type and to any precision

Vault Core allows for flexibility when capturing financial movements of different types of assets and their denominations, which enables Clients to capture any applicable financial assets.

When instructing a Posting you can specify the asset class the Posting falls under (for example, fiat currency, commodities or equity), as well as the denomination within the asset class (for example, USD, miles, gold and stock ticker symbols).

### [](#instruct_financial_movements "Copy link to heading")4.2. Instruct financial movements

#### [](#capture_different_types_of_financial_movements "Copy link to heading")4.2.1. Capture different types of financial movements

The Postings system provides the ability to apply any custom credit and debits to Accounts and their balances. Additionally, Clients can specify instruction types, which provide pre-constructed combinations of Postings to replicate common funds movements. This includes instructions to ring-fence funds to support authorisations, the release of authorisations, and the completion of Postings movements to reflect settlements.

Clients can use these Posting instructions to represent a multi-state financial transaction in Vault Core by grouping them as logical Client transactions for example, a card payment requiring an authorisation and settlement would require separate Posting instructions: one for the authorisation and another for the settlement. A Client can specify a common identifier on both instructions to make Vault Core aware the Postings are related.

##### [](#capture_authorisations "Copy link to heading")4.2.1.1. Capture Authorisations

Clients can ring-fence funds to be moved in or out of an Account by instructing the following Authorisation requests via the Core API:

-   Inbound Authorisation - use to authorise incoming funds to an Account
    
-   Outbound Authorisation - use to authorise outgoing funds from an Account
    
-   Authorisation Adjustment - use to adjust an authorisation amount that was previously ring-fenced by an Outbound Authorisation or Inbound Authorisation
    

##### [](#capture_settlements "Copy link to heading")4.2.1.2. Capture Settlements

Clients can instruct settlements on funds to be moved in or out of an Account by instructing the following settlement requests via the Core API:

-   Settlement - use to clear funds pre-authorised by either an Outbound Authorisation or an Inbound Authorisation
    
-   Inbound Hard Settlement - use to apply funds to an Account that have not been previously authorised
    
-   Outbound Hard Settlement - use to withdraw funds from an Account without previously authorising them
    

##### [](#capture_releases "Copy link to heading")4.2.1.3. Capture Releases

Clients can instruct a release of previously authorised incoming or outgoing funds.

##### [](#capture_transfers "Copy link to heading")4.2.1.4. Capture Transfers

Clients can instruct a Transfer from a Vault Core Account to another Vault Core Account. An example of this transaction is a customer moving money from their current Account to their savings account.

##### [](#capture_custom_financial_movements "Copy link to heading")4.2.1.5. Capture custom financial movements

Clients can capture custom financial movements between Accounts, and use these to target specific balance addresses within an Account (see [Track Account Balances](#track_account_balances)).

##### [](#capture_high_volumes_of_financial_movements_on_a_single_account_extension "Copy link to heading")4.2.1.6. Capture high volumes of financial movements on a single Account (Extension)

Clients can capture high volumes of financial movements on a single Account, such as processing payroll, batch payment files and direct debits. Note that this functionality is only available for Accounts that are on Smart Contracts that are high-volume eligible.

#### [](#trigger_financial_movements_from_within_a_financial_product "Copy link to heading")4.2.2. Trigger financial movements from within a financial product

Clients can configure Smart Contracts to instruct Postings that enable the financial behaviour of Accounts. For example, accruing and applying interest, applying fees, or moving funds between the Balances of the Account.

#### [](#instruct_financial_movements_2 "Copy link to heading")4.2.3. Instruct financial movements

##### [](#capture_multiple_financial_movements_in_a_single_request_to_commit_atomically "Copy link to heading")4.2.3.1. Capture multiple financial movements in a single request to commit atomically

Clients can capture multiple Posting instructions, grouping them into a single batch via the Postings API by creating a Posting Instruction Batch.

By being batched together into a single object, the Posting instructions are essentially contained within an atomic wrapper. All instructions thereupon share the same fate: Vault Core will either accept them together, reject them together or they will error out together. Each Posting instruction in a Posting Instruction Batch can specify its Value Timestamp, allowing a single Posting Instruction Batch to alter balances at different times.

##### [](#instruct_financial_movements_to_specific_target_assets_and_addresses "Copy link to heading")4.2.3.2. Instruct financial movements to specific target assets and addresses

Clients can instruct Postings directed to specific assets and addresses using Vault Core’s built-in (and chainable) instruction types, enabling more complex transaction types to be initiated by external systems, such as paying off a specific address, or tracking spending against a specific pot. This removes the need to use custom instructions which do not have an obvious financial meaning (or strong lifecycle support) in Vault Core.

##### [](#instruct_low_priority_and_high_priority_financial_movements "Copy link to heading")4.2.3.3. Instruct low priority and high priority financial movements

When instructing Postings, Clients can specify which instructions are high priority and which are low priority. Vault Core will process high priority Postings at a higher rate than low priority Postings.

Using both high priority and low priority queues enables Clients to manage the volume versus prioritisation of Postings for example, where a high volume of Postings could interfere with the processing of any high priority requests (such as card outbound authorisations) that could come in around the same time.

Clients have the option of using a synchronous Postings API for immediate responses to high priority Postings, and to see the resulting live balances of the Accounts that any accepted Postings impacted.

##### [](#capture_metadata_in_a_financial_movement_to_trigger_bespoke_operations_on_an_account "Copy link to heading")4.2.3.4. Capture metadata in a financial movement to trigger bespoke operations on an Account

Clients can capture metadata on a Posting. Clients can use this metadata to support their reporting (when a Posting is streamed out to a downstream system) or to influence bespoke logic configured in a financial product.

Clients can configure the pre-posting and post-posting Hooks in a Smart Contract to trigger bespoke operations based on the metadata within a Posting, enabling Clients to define pricing logic on certain transactions. For example, applying a fee for an overseas ATM withdrawal rather than allowing free withdrawals when using a domestic ATM.

##### [](#set_a_timeout_on_a_financial_movement "Copy link to heading")4.2.3.5. Set a timeout on a financial movement

Clients are able to optionally specify the timeframe by which a Posting will time out and send an error if it is not committed to the ledger within that time frame. This enables payment schemes with defined timing limits to timeout without needing to send a reversal had the Posting been committed after the time frame.

NOTE - Specifying this field does not guarantee that Vault Core will commit the Posting to the ledger or send a response to the response topic before the timestamp has expired. It is possible that Vault Core will publish a Posting that is accepted or rejected to the response topic after the timestamp has expired.

##### [](#adjustcorrect_a_financial_movement "Copy link to heading")4.2.3.6. Adjust/correct a financial movement

In scenarios where the Balance on an Account is incorrect due to misrepresented financial movements, Clients can fix this Balance by instructing subsequent Postings to bring the Balance to its correct state. These Postings can fall under one of the following categories:

-   Reversal - a Posting that Clients can instruct in order to reverse a financial movement by instructing a subsequent (reversal) Posting that cancels it
    
-   Correction - a Posting that is intended to replace a reversed Posting
    
-   Adjustment - a single Posting applied to an Account that both: rolls up the cumulative effects of all scheduled Postings that were calculated incorrectly since the Posting that was made in error brings the balance into the correct state
    

NOTE - Clients can use simulation to determine the correct state of a Balance to inform any adjustments/corrections required.

### [](#retrieve_existing_financial_movements "Copy link to heading")4.3. Retrieve existing financial movements

Clients can retrieve data on financial movements that have occurred in Vault Core when using the Core API. To identify a Posting, Clients will need to retrieve its related Posting Instruction Batch in one of the following ways:

1.  Retrieve one or multiple Posting Instruction Batches using their associated ID.
    
2.  List and filter multiple Posting Instruction Batches using any combination of the following filter options:
    
    1.  Accounts involved
        
    2.  identifiers used on the Postings
        
    3.  Payment Devices used
        
    4.  required timeframe
        
    

NOTE - It is not possible to retrieve an individual Posting without retrieving its Posting Instruction Batch.

### [](#track_account_balances "Copy link to heading")4.4. Track Account Balances

Balances in Vault Core are derived from the Postings Ledger. Vault Core supports two types of Balances designed for different purposes:

-   A live Balance - the Balance resource is the standard way to view the financial state of a Customer Account in Vault Core. Smart Contracts use these to process payments or calculate interest.
    
-   An historic Balance - the Ledger Balance resource is the standard way to report on the financial state of Customer and Internal Accounts as of a snapshot of the Postings Ledger. This retrieves Balances from a specified point in time when required.
    

Balances derived from Postings in Vault Core are calculated across four Parameters for every Account:

-   Asset
    
    -   Used to classify the types of funds for which Balances are held. For example, the Postings processor and Smart Contracts can set this to COMMERCIAL\_BANK\_MONEY.
        
    -   Allows Clients to specify other values when using custom Posting instructions or your configured payment integrations.
        
    
-   Denomination
    
    -   The unit in which an asset is measured. Typically, this is represented by a currency code. This field is required on Posting instructions and has no default behaviour.
        
    -   Every Account in Vault Core has a list of permitted denominations that restricts the Postings that may be accepted and accordingly the Balances on the Account.
        
    
-   Address
    
    -   A means for storing separate Balances or partitioning the total funds associated with an Account.
        
    
-   Phase
    
    -   Allows Account Balances to be split into funds available to the Account and ring-fenced funds. This allows funds to be ring-fenced as part of a payment authorisation, meaning that a Smart Contract can either include these funds in financial logic or exclude them.
        
    

#### [](#track_multiple_balances_on_an_account "Copy link to heading")4.4.1. Track multiple Balances on an Account

An Account can have many Balances. Balances are initialised when a Posting or query targeting the Balance is instructed. This allows Clients to track different pots of assets within an Account that need to be treated differently for example, tracking outstanding principal, interest accrued, or overdue interest on a loan.

Only the custom instruction on the Posting type allows Clients to specify the address field to target when making a Posting. This is typically used by Postings issued from Smart Contracts for example, you can configure an interest accrual Schedule that instructs a Posting of the accrued amount to an ACCRUED\_INTEREST balance address. In such a scenario, when a customer opens an Account, the ACCRUED\_INTEREST balance address is initialised when the first interest accrual event runs.

All other Posting types will be made to/from the DEFAULT balance of an Account.

#### [](#configure_both_asset_and_liability_accounts_on_a_single_ledger "Copy link to heading")4.4.2. Configure both Asset and Liability Accounts on a single ledger

A Smart Contract may optionally specify a variable named ‘tside’. This becomes a product-level attribute with one of the values "ASSET" or "LIABILITY". The default value is "LIABILITY".

Every Posting is either counted as a credit or a debit. If tside of a product is "LIABILITY", every Account instance will calculate net balance as net = total credit - total debit. For an "ASSET" type Account, net Balances are defined as net = total debit - total credit.

It is important to take this into account when writing business logic using net Balances.

#### [](#retrieve_the_live_balance_of_an_account "Copy link to heading")4.4.3. Retrieve the live balance of an Account

Clients can retrieve the live Balances of an Account via the Core API by specifying the Account ID.

#### [](#retrieve_a_timeseries_of_balances_of_an_account "Copy link to heading")4.4.4. Retrieve a timeseries of Balances of an Account

Clients can retrieve a time series of Balances of an Account via the Core API by specifying the Account ID along with the desired time range for the Balances. This enables them to retrieve a historical (or future) balance.

## [](#operational_capabilities "Copy link to heading")5\. Operational capabilities

### [](#manage_a_customer "Copy link to heading")5.1. Manage a customer

Customer records represent a Client’s customers and confer association of a customer with Accounts within Vault Core.

#### [](#create_a_customer "Copy link to heading")5.1.1. Create a customer

Clients can create a customer record within Vault Core that provides a range of fields to capture customer details, including names, addresses, and contact information.

NOTE - Storing customer details data against these records is optional and the recommended use case is to create customer records for reference purposes only. For example, where only a Client provided ID is stored in Vault Core, and the associated customer data is stored external to Vault Core. There is no hard dependency from other Vault Core functionality on the existence of this data, as it does not drive the behaviour of Accounts or other entities within the Platform Layer. The customer ID should be associated with the customer details in your customer master system.

#### [](#capture_additional_detail_against_a_customer "Copy link to heading")5.1.2. Capture additional detail against a customer

Clients can capture custom fields on the customer record in Vault Core to represent additional details that may not be represented in the available fields. These fields are captured as key-value pairs, which Clients can add and remove using the Core API.

#### [](#update_a_customer "Copy link to heading")5.1.3. Update a customer

Clients can update the customer details provided using the Core API.

#### [](#retrieve_a_customer_and_view_associated_data "Copy link to heading")5.1.4. Retrieve a customer and view associated data

Clients can retrieve a list of customers in Vault Core by:

-   specifying a particular customer/customers
    
-   specifying a range of attributes associated with the customer. For example, by external customer ID, customer status, email, phone number, and other attributes that you have recorded with the customer details
    

### [](#manage_accounts "Copy link to heading")5.2. Manage Accounts

Accounts form an essential part of Vault Core, representing both Accounts for a Client’s Customers and the Internal Accounts of the Client’s financial institution(s).

#### [](#represent_an_account_for_your_financial_institution "Copy link to heading")5.2.1. Represent an Account for your financial institution

Within Vault Core, Clients can define Internal Accounts to represent their Chart of Accounts. The behaviour of the Internal Account is not tied to a financial product; therefore, it is not governed by Smart Contract logic.

#### [](#represent_an_account_for_a_customer "Copy link to heading")5.2.2. Represent an Account for a customer

An Account in Vault Core can also be a Customer Account. The primary means of controlling the behaviour on a Customer Account is via two mechanisms:

-   the Smart Contract that the Account uses (see section [Define financial products](#define_financial_products))
    
-   the Parameters that are associated with the Account (see section [Define financial products](#define_financial_products))
    

#### [](#create_an_account "Copy link to heading")5.2.3. Create an Account

Create either an Account for a customer or an Internal Account for your institution using the Core API. When creating the Account, Clients specify values for the Account Parameters defined in the underlying Smart Contract of the product the Account belongs to.

#### [](#associate_one_or_multiple_customers_to_an_account "Copy link to heading")5.2.4. Associate one or multiple customers to an Account

Associating multiple customers with a Customer Account using the Core API enables you to represent situations where multiple parties on an Account are required. For example, joint Accounts or power of attorney.

Clients can add or remove customers from an Account at any point through its lifecycle.

Clients cannot associate a customer to an Internal Account.

#### [](#limit_the_permitted_denominations_on_an_account "Copy link to heading")5.2.5. Limit the permitted denominations on an Account

Specifying the permitted denominations on an Account will limit the Postings that can be accepted on the Account. For example, an Account with GBP and USD as its permitted denominations will reject any Postings in EUR.

NOTE - The Smart Contract of the financial product that the Account belongs to can also specify a set of permitted denominations. The permitted denominations of the Account must be a subset of these. If the Smart Contract version does not specify denominations, then Clients must specify at least one denomination when creating the Account.

#### [](#update_configuration_of_a_customer_account "Copy link to heading")5.2.6. Update Configuration of a Customer Account

Clients can change the behaviour of a Customer Account in one of the following ways:

-   changing the value of an attribute that is unique to the Account - change the value of an Account Parameter associated to the Account (see [Configure Parameters specific to an individual Account](#configure_parameters_specific_to_an_individual_account))
    
-   moving the Account to a different financial product - perform a conversion from one product version to another
    

#### [](#manage_the_lifecycle_of_an_account "Copy link to heading")5.2.7. Manage the lifecycle of an Account

Clients can capture the status of an Account in its life cycle, such as “Pending”, “Open” or “Closed”. Clients can also change an Account’s status if and when required. Accounts created in "Open" status can have a historic opening time in order to reflect delays in the onboarding process.

#### [](#retrieve_an_account "Copy link to heading")5.2.8. Retrieve an Account

Clients can retrieve a list of Customer Accounts or Internal Accounts in Vault Core by either:

-   specifying particular Accounts
    
-   specifying a range of attributes associated with the Account(s); for example, Account status, type of Account, and other attributes associated with the Account details
    

#### [](#retrieve_an_accounts_adjustments_extension "Copy link to heading")5.2.9. Retrieve an Account’s Adjustments (Extension)

Clients can retrieve a list of Adjustments by either:

-   specifying the affected Customer Account
    
-   specifying the job ID for an Adjustment-triggering Schedule.
    

### [](#link_accounts_to_propositions_containing_multiple_financial_products "Copy link to heading")5.3. Link Accounts to propositions containing multiple financial products

Vault Core Plans and Supervisor Contracts allow the implementation of any banking products that consider the state and behaviour of multiple Accounts, such as family bundles and interest-rate offsetting.

#### [](#manage_the_lifecycle_of_linked_accounts "Copy link to heading")5.3.1. Manage the lifecycle of linked Accounts

Clients can create a plan using the Core API, by specifying the associated Supervisor Contract version.

The Schedules that Clients specify in the Supervisor Contract version are active when they create a Plan.

Clients can update a plan by updating its Supervisor Contract version, and close a plan when they no longer require it.

#### [](#associate_or_dissociate_linked_accounts "Copy link to heading")5.3.2. Associate or dissociate linked Accounts

Clients can associate and disassociate Accounts from Plans. An Account can only be associated with at most one Plan at any given moment. Association is only allowed for both OPEN Plans and Accounts.

The status of Account Plan associations can be checked via Account plan associations.

### [](#manage_payment_instruments_that_instruct_financial_movements "Copy link to heading")5.4. Manage payment instruments that instruct financial movements

Payment Devices are Vault Core’s generic mechanism to represent instruments that can receive and initiate Postings. Payment Devices in Vault Core are generic to enable Clients to represent a wide array of instruments when using different payment schemes. Card PAN (Primary Account Number), IBAN, UK Account number and sort code, phone number and email are all examples of possible payment reference types for a Payment Device in a Vault Core instance, depending on what is available for payment routing.

Using the Core API you can:

-   Create a Payment Device
    
-   Update a Payment Device
    
-   Retrieve a Payment Device
    

#### [](#link_a_payment_device_to_an_account "Copy link to heading")5.4.1. Link a Payment Device to an Account

Payment Devices are independent of Accounts or Customers; however, Clients can associate them with Accounts in order to receive or initiate Postings. Clients can link a Payment Device to multiple Accounts and link an Account to multiple Payment Devices. Clients can also use multiple PaymentDeviceLinks - which provide a reference to send/receive payments - to link the same Account and Payment Device.

This is useful when, for example, the same card uses multiple Accounts and has some business logic based on denomination plus other factors applied. It is also useful when an Account receives payments via a card, email and phone number at the same time. It is for the payment integration to decide which Payment Device Link to use for both inbound and outbound Postings. It is usually a combination of custom business logic and customer input.

Using the Core API you can:

-   Create a Payment Device Link
    
-   Update a Payment Device Link
    
-   Retrieve a Payment Device Link
    

### [](#manage_flags "Copy link to heading")5.5. Manage Flags

Flags are binary markers that are used in Vault Core to store information about a customer or an Account. This information could be applied to multiple customers or Accounts and may be used by Smart Contracts to change the logic that is applied to them.

With the exception of their use in Smart Contracts, Vault Core is completely agnostic to Flags and its behaviour is not affected by their presence.

#### [](#flag_definitions "Copy link to heading")5.5.1. Flag Definitions

Clients can use Flag Definitions to create references to Flags that Smart Contracts can use, via an identifier, to access a given Flag. A Flag Definition contains an identifier and a level. An identifier serves as a reference that a Smart Contract can use to request a specific Flag. A level indicates if the Flags under this definition are for an Account or a Customer.

Clients can load Flag Definitions into Vault Core via the CLU, or manage Flag Definitions using the Core API.

Using the Core API you can:

-   Create a Flag Definition
    
-   Update a Flag Definition - Clients can only update fields that external systems use to check whether a Flag Definition is active or not; Flag Definition updates bear no side effects within Vault Core
    
-   Retrieve Flag Definitions
    

#### [](#flags "Copy link to heading")5.5.2. Flags

Flags are binary markers that allow Smart Contracts to react to specific conditions of Accounts or customers and enhance the functionality of financial products. Flags compose a time series of events and inform periods where the specific condition it relates to is true (ON) or false (OFF).

Clients can load Flag Definitions into Vault Core via the CLU, or manage Flag Definitions using the Core API. Smart Contracts can also access their values when they need to.

Using the Core API you can:

-   Create a Flag
    
-   Update a Flag - the only field that Clients can update is the description
    
-   Retrieve Flags
    

Within Smart Contracts you can:

-   Require past, current and future values of Flags that the Smart Contract references by their Flag Definition
    

### [](#manage_restrictions "Copy link to heading")5.6. Manage Restrictions

Within Vault Core, Clients can define and apply Restrictions. Vault Core Restrictions provide a framework to enforce certain custom business rules by using a blocking mechanism. A Client can use this mechanism to deal with, for example, judicial court orders, anti-money laundering regulations, payment scheme compliance, security alerts or other similar access control limitation scenarios.

Vault Core exposes a predefined set of restriction primitives, which are enforced in several places.

Clients can use Restrictions to:

-   prevent, put for review or limit debits and credits
    
-   prevent customers from mutating or opening an Account
    
-   block Posting initiation for a certain Payment Device
    

#### [](#restrict_an_activity_financial_transactions_and_account_lifecycle_events "Copy link to heading")5.6.1. Restrict an activity (financial transactions and Account lifecycle events)

Using the Core API, Clients can restrict debits, credits, Account lifecycle updates and other events. These are known as restriction types. Clients can also create a collection of restriction types which is called a restriction set in order to apply multiple Restrictions at once.

#### [](#applyremove_restrictions_at_different_levels_customeraccountpayment_device "Copy link to heading")5.6.2. Apply/remove Restrictions at different levels (customer/Account/Payment Device)

There are three different levels at which Clients can apply a restriction:

1.  Customer (highest level)
    
2.  Account
    
3.  Payment Device
    

Clients can set a restriction based on the ID of the customer, Account or Payment Device.

Applying a restriction at the customer level:

-   restricts all Accounts for the customer (as associated with the specified customer ID)
    
-   restricts all Accounts and Payment Devices that are associated with the specified customer
    

Applying a restriction at the Payment Device level:

-   restricts the specific Payment Device (from performing actions on its associated Accounts)
    
-   does not affect other Payment Devices or Postings for the associated Account
    

#### [](#retrieve_a_restriction "Copy link to heading")5.6.3. Retrieve a Restriction

Clients can retrieve a list of all Restrictions that are currently applied to a customer, Account or Payment Device by calling the Core API and specifying the ID of a given resource.

### [](#manage_calendars "Copy link to heading")5.7. Manage Calendars

Clients can use the Vault Core Calendar service to define an arbitrary list of days, such as public holidays, to be referenced by components in Vault Core for use with calendar-based logic via the Core API.

The Calendar presents a public API with the following capabilities:

-   create Calendars to represent different entities, time zones and more
    
-   optionally define a repeating Calendar Period for each Calendar - Clients can set the length of each cycle to minute, hour, day, week, year or a custom time period
    

The Calendar has a number of potential use cases, including using it:

-   in Smart Contracts to avoid accruing or capitalising interest at weekends
    
-   to set the booking date in the reporting Balances pipeline
    
-   with a payments hub to implement payment scheme rules - an example is no processing of standing orders on a Saturday, Sunday or public holiday in the UK
    

#### [](#create_and_manage_a_calendar "Copy link to heading")5.7.1. Create and manage a Calendar

Clients can create a Calendar and define both Calendar Period and Calendar Period Descriptors through the Core API.

**Calendar Periods**

A Calendar Period is an implicitly-defined interval in a Calendar. This interval marks when a cycle starts and ends according to a given unit of time, such as a day or year.

Clients can:

-   Change the end timestamp of the current Calendar Period by applying a hold or roll action with a timestamp that is set in the future
    
-   Extend the end timestamp of a Period with a hold action or shorten the end timestamp of a Period with a roll action
    
-   Reference a bookkeeping date for the Calendar Period by using the “Expected Start” or “Expected End” timestamp, according to the Client’s requirements
    

**Calendar Period Descriptors**

A Calendar Period Descriptor describes the frequency of a Calendar Period, the unit of time that it uses and the value of the unit.

Key features:

-   Set the unit of a Calendar Period as hours, days, weeks, months or years - this provides you with the ability to set the smallest allowable period of time as one hour
    
-   Define when the first period starts with the ability to set it to a time in the future, current or in the past - when you create a Calendar with a Period Descriptor that starts in the past, the service will emit all Calendar Periods up to the present time
    
-   Share Calendar Period Descriptors between multiple Calendars
    

#### [](#create_and_manage_events_in_a_calendar "Copy link to heading")5.7.2. Create and manage events in a Calendar

A Calendar Event is a resource containing a pair of explicitly-defined UTC timestamps that define the start and end of an event. You can define and name these Calendar Events as required, for example:

-   'fps downtime'
    
-   'public holiday'
    
-   'weekend'
    
-   'working day'
    

As the Calendar Event definition is open by design, any component integrating with Vault Core can treat the Calendar Events as required. These events can be as long as the Calendar user requires it to be, provided the start timestamp comes before the end timestamp.

Clients can specify the timestamp value of a Calendar Event to a precision level of a second, so that a Calendar Event can span less than one day. These timestamps are half-open ranges; a Calendar Event that spans a whole day would have:

-   A start\_timestamp of 1 March 2020 00:00:00
    
-   An end\_timestamp of 2 March 2020 00:00:00
    

#### [](#retrieve_data_from_calendars "Copy link to heading")5.7.3. Retrieve data from Calendars

Clients can retrieve Calendars and Calendar Events using the Core API.

### [](#isolate_groups_of_accounts "Copy link to heading")5.8. Isolate groups of Accounts

A Processing Group (PG) is a high-level resource in Vault Core. Its purpose is to define logical groupings of Accounts in a single Vault Core instance. Each Processing Group is associated with a timezone that can facilitate the creation of Schedules for accounting processes. Clients can pause all Schedules running over the Accounts in a Processing Group.

In Vault Core, only one Processing Group is defined by default and it is automatically set. All Accounts that a Client creates are assigned to this default Processing Group unless the Client associates it with a different Processing Group when creating the Account. In order to achieve this, Clients must first create a different Processing Group within the Vault Core instance before creating the Account.

#### [](#control_accounts_in_a_processing_group "Copy link to heading")5.8.1. Control Accounts in a Processing Group

##### [](#configure_a_timezone_applicable_to_a_group_of_accounts "Copy link to heading")5.8.1.1. Configure a timezone applicable to a group of Accounts

Processing Groups have a timezone field. During the creation of Accounts, Schedules are created according to the following validation logic:

-   If the timezone is set on the Processing Group (PG), the PG’s timezone is used when creating all Schedules for the Account
    
-   Otherwise: If the events\_timezone is set in the Smart Contract, the events\_timezone is used when creating all Schedules for the Account
    
-   Else: The timezone UTC is used to create the Schedules for the Account
    

NOTE - Before setting the timezone of the default Processing Group to a non-empty value, Clients must convert all Accounts in Vault Core to a single timezone, set by the events\_timezone in Smart Contracts. **It is critical that Clients set the Processing Group timezone correctly. When a Processing Group timezone is set, it becomes immutable.** This means that you cannot change the timezone that is used by underlying Accounts and corresponding Schedules in the Processing Group. For more detailed steps about how to activate a Processing Group and convert Accounts, please refer to the Vault Core 5 documentation about Accounts, the concept of a Processing Group and the associated use cases and features.

##### [](#pause_and_resume_scheduled_operations_on_a_group_of_accounts "Copy link to heading")5.8.1.2. Pause and resume scheduled operations on a group of Accounts

Processing Groups have a status field that Clients can use to set the pause status of Schedules for Accounts belonging to the Processing Group. The status can switch between one of two statuses:

-   Active: Schedules are executed as normal
    
-   Paused: No Schedules for Accounts belonging to the Processing Group are executed
    

When a Processing Group’s status changes from Paused to Active, any Schedules that were supposed to execute during the paused period will begin execution. These Schedules will execute using the Balance as it is at the moment the Processing Group’s status becomes Active.

#### [](#create_and_configure_multiple_processing_groups_extension "Copy link to heading")5.8.2. Create and configure multiple Processing Groups (Extension)

##### [](#create_a_new_processing_group "Copy link to heading")5.8.2.1. Create a new Processing Group

Clients can set up multiple Processing Groups in a single Vault Core instance and configure each Processing Group with a timezone when creating it.

##### [](#associate_an_account_to_one_processing_group "Copy link to heading")5.8.2.2. Associate an Account to one Processing Group

Clients can associate an Account with a Processing Group at the time of creating the Account. If they do not specify a Processing Group when creating an Account, then Vault Core assigns the Account to the default Processing Group. Once a Client creates an Account, they cannot move it between Processing Groups. It is not possible to instruct a posting directly between two Accounts in different Processing Groups. It is only possible to achieve transfers between Accounts in different Processing Groups using Internal Accounts in the corresponding Processing Groups.

### [](#provide_a_user_interface_for_operational_users "Copy link to heading")5.9. Provide a user interface for operational users

#### [](#manage_bau_operational_activity_via_operations_dashboard "Copy link to heading")5.9.1. Manage BAU operational activity via Operations Dashboard

Operations Dashboard is a web application that aids in investigating the state of Vault Core in real time. It supplies visibility of a subset of the Vault Core set of resources.

Operations Dashboard is available in 8 different languages:

-   "British English (en-GB)”
    
-   "German (de-DE)"
    
-   "Spanish (Spain) (es-ES)"
    
-   "Spanish (Latam) (es-XL)"
    
-   "French (France) (fr-FR)"
    
-   "Indonesian (Indonesia) (id-ID)"
    
-   "Korean (Korea) (ko-KR)"
    
-   "Vietnamese (Viet Nam) (vi-VN)"
    

The resources Clients can see in Operations Dashboard are:

-   **Customer**: Search for and view customer details and all linked Accounts, change history, audit, tasks (decommissioned) and notes
    
-   **Accounts**: Search for and view Accounts and their details, stakeholders, Payment Devices, notes, additional details, Posting Instruction Batches, Schedules, payees, transactions, Flags and restriction sets, notes and product level Parameters, change history, audit, tasks (decommissioned) and notes
    
-   **Internal Accounts**: View all Internal Accounts and their details: Ledger Balances, Posting Instruction Batches, and processes (decommissioned)
    
-   **Posting Instruction Batches**: Filter and view the details and Postings of Posting Instruction Batches. Clients can filter by Account ID or Client Batch ID. Detailed information is available for a Posting instruction Batch, with further view for Details, Instructions, and Posting instruction. The details for a Posting instruction include the batch ID, type, committed Postings, additional details and violations
    
-   **Schedules**: View a list of all the Schedules system with their status, with the ability to drill down and see scheduled job details
    
-   **Products**: (instances of Smart Contracts with defined Parameter values): From a list of all products, view an individual product’s version and its Parameters and code
    
-   **Financial constants**: View global Parameters and their current values
    
-   **Flag Definitions**: View a list of all Flags and their details and statuses
    
-   **Restriction sets**: View a list of all Restriction sets - a Restriction set is a collection of Restrictions that you can attach to a Customer or Account or Payment Device
    
-   **Calendars**: View a list of all defined Calendars and their details
    
-   **Action Logs**: View a record of all changes to the resources in Vault Core; Action Logs are retained indefinitely
    
-   **Audit Logs**: View a list of all requests (including GET requests) made and the actor responsible for the request. They are retained for a configurable time for self-hosted Clients, and up to seven days for SaaS
    
-   **Service accounts**: View a list of Accounts and their permitted actions
    
-   **Roles**: View list of all Roles with their permitted actions as defined by Permissions
    
-   **Permissions**: View a list of all permitted actions in Vault Core, both core and custom
    
-   **Payment Scheme Messages**: View a list of all the scheme messages in Vault Core
    
-   **Payments**: View a list of all the payments in Vault Core, with the ability to drill down to payment details including status, processing information, payment parties, Posting Instruction Batches, processes, advanced details and raw JSON
    

Clients can also access the timeseries of the historic balance of any Account (searching on Vault ID, Account number or IBAN) and specifying a datetime or latest.

Clients can also retrieve Vault Core resources using the ‘Vault Lookup’ web application. Vault Lookup is a dedicated tool designed for querying Vault via Core API List, Get, and BatchGet endpoints, enhancing the views available in the Operations Dashboard.

The interface is programmatically generated and lists all publicly available endpoints, allowing users to input arguments directly on screen. Upon submission, Vault Lookup returns the corresponding response.

#### [](#manage_bau_account_operational_activity_via_accounts_app "Copy link to heading")5.9.2. Manage BAU Account operational activity via Accounts App

Accounts App serves as an alternative operations portal for operational users which includes the following capabilities:

-   Search for Customer Accounts
    
-   Create new Customer Accounts
    
-   View a Customer’s Account and its associated resources
    
-   Amend Account attributes and its associated resources such as Account level smart contract parameters.
    
-   Provide Parameter change, Posting history and Adjustment timelines
    

#### [](#view_a_dashboard_to_track_the_progress_of_scheduled_operations "Copy link to heading")5.9.3. View a dashboard to track the progress of scheduled operations

Vault Jobs is a web application that displays the progress and health of asynchronous processes within Vault Core, such as End of Day.

Vault Jobs displays two resources: Vault Jobs and its related Vault Job Operations.

Each Vault Job will provide insight into how quickly its Operations are being processed, along with a count of Complete and Errored Operations. Each Vault Job will also display integration-specific metadata about the Vault Job or Operations to aid user investigation. A Vault Job can have the following states, but will also aim to resolve itself to completeness:

-   Completed: the Vault Job Operations that were expected succeeded successfully
    
-   Completed with Errors: All the operations that were expected ran, but some errored
    
-   Expired: The Vault Job was expecting more operations, but it has been 24h (or more) and it is now in an expired state. If the Vault Job Operations complete after the time the Vault Job will change state to completed or completed with errors
    

A Vault Job Operation represents an individual process within a Vault Job. A Vault Job Operation, once processed, will have one of the following states:

-   Succeeded: The Vault Job Operation has been processed without error and the completed total of the parent Vault Job is incremented by one
    
-   Errored: The Vault Job Operation has errored and the errored total of the parent Vault Job is incremented by one
    
-   Expired: The Vault Job Operation has been processed but not all Vault Jobs that were expected to be completed were completed
    

An “Errored” Vault Job Operation will contain metadata such as IDs and links to the affected resource in the Operations Dashboard along with any errors that occurred during processing.

Only “Errored” operations are displayed by Vault Jobs. If an operation is retried and succeeds then it will be removed from Vault Jobs and the Vault Job “Completed” total will be updated.

Currently, Vault Jobs has a single integration with the Schedule Manager. This integration supports the following use cases:

-   Using Vault Jobs to monitor the progress of all Account Schedule Jobs
    
-   Using Vault Jobs to spot any Schedule Jobs that have errored and investigate the likely cause of the failure
    
-   A user logged into Vault Jobs can see the progress of Schedule Jobs grouped by various attributes of the specific Vault Job
    

#### [](#retry_errored_vault_jobs_operations "Copy link to heading")5.9.4. Retry Errored Vault Jobs Operations

Clients can select a single or a group of “Errored” Vault Job operations and attempt a retry by pressing an on screen button

#### [](#view_a_dashboard_to_see_vault_operations_that_have_not_succeeded "Copy link to heading")5.9.5. View a dashboard to see Vault operations that have not succeeded

DLQ Inspector is a web application that displays information about Kafka messages that Vault Core could not process and has placed on a DLQ topic.

DLQ Inspector is a low level application intended for expert users of Vault Core. It reveals implementation details and exposes information about operations which may be considered sensitive.

Clients can control access to:

-   disallow a user access to the application entirely
    
-   allow read-only access with payloads redacted
    
-   allow full read access
    
-   allow full read access with the ability to republish messages
    

Republishing messages can change the state of Vault Core and Clients should take care when performing this operation.

When accessing the application, users with the appropriate Permissions can view the error messages generated by Vault Core, and the details of those messages. These details include the name of the topic that is storing the DLQ message, the timestamp of the error, and the current status of the operation. The status can be one of:

-   Unresolved - the default for messages that Vault Core has added to a DLQ topic for which no action has been taken.
    
-   Republished - a message enters a Republished state when Vault Core moves it back to the original topic for reprocessing. DLQ Inspector keeps track of messages and sets the status back to “Unresolved” if Vault Core is unable to process it again. DLQ Inspector cannot know if Vault Core successfully reprocessed it or not. Therefore, messages that are Republished but are not stored in a DLQ topic will stay in this state until purged as part of the Client’s data retention policy (set in values.yaml).
    

For further information on an error, users can drill into each error message and see additional details such as:

-   The body of the Kafka message
    
-   The headers of the Kafka message
    
-   The original Kafka topic the messages was published to
    
-   The republish history of the message if an attempt to republish it through DLQ Inspector had been previously attempted
    

Thought Machine provides the DLQ Inspector as a means for Clients to remediate processes that may have failed for a temporary outage or other issue that is now resolved. There is little to no operational value in storing information about previous errors beyond a reasonable operational window in which retry is considered a valid remediation strategy. Clients can configure the retention period and the Schedule for the purging operation in the values.yaml file.

#### [](#manage_processing_group_operations_using_the_processing_groups_app "Copy link to heading")5.9.6. Manage Processing Group operations using the Processing Groups App

Clients can use the Processing Groups App to perform the following actions:

-   View a list of all Processing Groups in a Vault Core instance
    
-   Create a new Processing Group and assign a timezone (Extension)
    
-   Pause and resume a Processing Group
    
-   Add or edit a Processing Group description
    
-   Add an Internal Account to a Processing Group and assign a processing label (used for targeting Postings)
    
-   Link out to Vault Jobs to view Jobs associated to the Processing Group
    

### [](#manage_smart_contract_executions "Copy link to heading")5.10. Manage Smart Contract Executions

Vault Core persists data associated with each Smart Contract hook execution for operational and observability purposes. This data is known as a Contract Execution. Contract Executions provide clients with details about the hook execution’s inputs and outputs, which can aid with troubleshooting and investigations.

The following Contracts Language API 4.0 hooks’ executions result in Contract Executions:

-   post\_posting\_hook
    
-   scheduled\_code\_hook
    
-   post\_parameter\_change\_hook (when used with Account Services v2)
    

#### [](#retrieve_contract_executions "Copy link to heading")5.10.1. Retrieve Contract Executions

Clients can retrieve a list of Contract Executions that are related to specified Accounts and/or plans, within an optional time range.

### [](#notify_downstream_systems_about_events_that_have_occurred_in_vault_core "Copy link to heading")5.11. Notify downstream systems about events that have occurred in Vault Core

Vault Core supports real-time event sourcing from its core services - the Vault Core Streaming API broadcasts events relating to mutations of each resource throughout its lifecycle. This enables Clients to track and receive notifications of events that have occurred in Vault Core and result in changes to:

-   Accounts
    
-   Adjustments (Extension)
    
-   Balances
    
-   Calendars
    
-   Smart Contracts
    
-   Contract Executions (Failures only)
    
-   Customers
    
-   Flags
    
-   Parameters
    
-   Payment Devices
    
-   Plans
    
-   Postings
    
-   Products
    
-   Restrictions
    
-   Schedules
    
-   Vault Jobs
    

#### [](#select_the_format_for_event_notifications "Copy link to heading")5.11.1. Select the format for event notifications

Vault Core supports generation of event notifications, in JSON or Google Protobuf formats. Clients can configure this when setting up their Vault Core instance.

Vault Core emits the events as Kafka messages to a series of Client-facing Kafka topics.

#### [](#aggregate_vault_jobs_notifications_into_meaningful_events_of_interest "Copy link to heading")5.11.2. Aggregate Vault Jobs notifications into meaningful events of interest

Vault Jobs tracks granular jobs across the following dimensions:

-   Processing Group ID
    
-   Smart Contract Version ID
    
-   Event type
    
-   Scheduled time
    

Vault Core will perform the following aggregations:

-   Across all event types and Smart Contract Version IDs, per scheduled time, per Processing Group
    
-   Across all Smart Contract Version IDs, per scheduled time, per event type level, per Processing Group
    

### [](#reconcile_that_event_notifications_from_vault_core_have_been_received "Copy link to heading")5.12. Reconcile that event notifications from Vault Core have been received

Vault Core provides a mechanism for consumers of the Vault Core Streaming APIs to verify that all events published to certain topics have been received. This reconciliation is particularly useful following a timeout or processing failures where there is no way of easily identifying which events may have been missed. For example, during a data migration into Vault Core.

NOTE - As an observability-related resource, Contract Execution Events do not support reconciliation.

#### [](#detect_missed_events "Copy link to heading")5.12.1. Detect missed events

Clients can detect missed event notifications by:

-   Keeping track of the sequence number published by Vault Core’s Streaming API that is published every time an event is streamed out. Any gap in this sequence will indicate that an event has been missed
    
-   Making a call to an endpoint within the Core API that will return both the number of state changes committed to Vault Core within the specified time period (window), and a checksum that uniquely identifies the set of events generated as a consequence to those changes
    

#### [](#replay_missed_events "Copy link to heading")5.12.2. Replay missed events

Clients can replay any missed events by calling an endpoint within the Core API.

### [](#load_historical_data_from_a_previous_core_banking_system "Copy link to heading")5.13. Load historical data from a previous core banking system

Vault Core’s Data Loader API and Postings Migration API enables Clients to migrate existing data from a different core banking system into Vault Core.

The APIs support all Vault Core resources that could require migrating historic data including:

-   Customers
    
-   Account
    
-   Payment Devices
    
-   Flags
    
-   Restriction sets
    
-   Plans
    
-   Parameter value history
    
-   Postings
    

To update data that was previously inserted via the Data Loader, use the BAU Vault APIs.

Note - The Postings Migration API does not support historical Postings directed to custom assets and addresses, or future dated Postings.

### [](#manage_audit_logs "Copy link to heading")5.14. Manage Audit Logs

Vault Core records information about all requests made to its public APIs and makes this information available via the RESTful Audit API and the Kafka Audit Streaming API.

Vault Core uses Audit Logs objects to represent information about requests. Audit Logs record all the information corresponding to a request.

Each Audit Log contains basic information that corresponds to a specific request, including:

-   Identifier of the API that the request was made to
    
-   Endpoint that the request was made to
    
-   Corresponding REST endpoint name
    
-   Identifier of the requestor
    
-   Employee and/or customer that the mutation was made on behalf of (if provided in the headers X-On-Behalf-Of-Customer-ID and X-On-Behalf-Of-Employee-ID)
    

Clients can retrieve Audit Logs through the Audit API.

**Lifespan of Audit Logs**

Audit Logs have a limited lifespan in Vault Core; Clients cannot access them through the Audit API beyond the configured time period. For self-hosted instances of Vault Core, the lifespan of Audit Logs has a default setting of one day and is Client-configurable via values.yaml, for example by changing the default values of DAYS and 1. For Vault Core SaaS, this is set to seven days and Clients cannot configure this otherwise.

### [](#manage_action_logs "Copy link to heading")5.15. Manage Action Logs

The Action Logs service records and retrieves information about mutations made to any Vault Core resources through one of the available APIs. Clients can get further information from the api\_types field of an Audit Log. The Audit Streaming API broadcasts events relating to the creation of all Action Logs.

Vault Core uses Action Logs objects to represent information about requests. Action Logs record the effects of a request on a resource (if there are any).

Action Logs are generated from successful CREATE, UPDATE and DELETE requests so you can see who made changes in the resources and how they mutated over time. You can query this information through the Action Log endpoints in the Audit API.

**Action Log contents**

Each Action Log contains mutation information such as the:

-   Identifier for the requester of the call
    
-   Type of Vault Core object that was mutated
    
-   Identifier of the mutated object
    
-   Action that was performed: CREATE, UPDATE or DELETE
    
-   Action data: a JSON object detailing only the properties that were changed
    
-   Identifiers that link these mutations to Audit Logs, when available
    
-   Employee and/or customer the mutation was made on behalf of (if provided in the headers X-On-Behalf-Of-Customer-ID and X-On-Behalf-Of-Employee-ID)
    

Clients can retrieve Action Logs through the Audit API.

**Lifespan of Action Logs**

Action Logs are persistent and are stored indefinitely in a Client’s Vault Core instance.

### [](#manage_the_configuration_of_vault_core_resources_in_bulk "Copy link to heading")5.16. Manage the Configuration of Vault Core resources in bulk

The Configuration Layer Utility (CLU) is the utility for applying Configuration Layer resources into Vault Core. The CLU:

-   Automates the creation of resources, with robust public Vault APIs offering consistent behaviour and greater control over created resources
    
-   Provides greater visibility of import outcomes, and displays these for each supported resource
    
-   Uses a consistent and generic resource file format with a payload field that maps one-to-one to existing examples in the API documentation
    
-   Allows dependencies between resource fields in different resources to be referenced after import
    

The CLU provides a convenient interface which sits between the user and the Vault APIs. Instead of constructing and executing HTTP(S) requests to the Vault APIs directly, Clients instead specify a collection of resources which you can then apply using the CLU. This manages many common pain points, such as external file references, resource dependencies and request validation.

#### [](#upload_system_configuration_using_a_command_line_utility "Copy link to heading")5.16.1. Upload system configuration using a command line utility

Clients can create the following resources using the CLU:

-   Core resources:
    
    -   Account Schedule Tags
        
    -   Calendars and Calendar Events
        
    -   Flag Definitions
        
    -   Internal Accounts
        
    -   Parameters and Root level (global) Parameter Values
        
    -   Payment Devices and Payment Device Links
        
    -   Postings API Client
        
    -   Product Versions
        
    -   Restriction sets
        
    -   Schedule Tags
        
    -   Contract Modules
        
    -   Smart Contract Module Versions Link
        
    -   Supervisor Contracts and Supervisor Contract versions
        
    
-   Access Control resources
    
    -   Roles
        
    -   Data Permissions
        
    -   Role Data Permission associations
        
    -   Role Vault Permission associations
        
    

### [](#manage_access_to_system_resources "Copy link to heading")5.17. Manage access to system resources

#### [](#define_and_apply_permissions "Copy link to heading")5.17.1. Define and apply Permissions

Permissions are access control tags in Vault Core that can be used to allow users to view pages or interact with resources. The types of Permission in Vault Core are:

-   **Vault Permissions**: Predefined Permissions within Vault Core controlling access to different areas of the Operations Dashboard. In the Operations Dashboard these are called Base Permissions.
    
-   **Data Permissions**: custom Permissions that can be created by users and used with Policies to control access to resources. In the Operations Dashboard these are called Custom Permissions.
    

#### [](#define_and_apply_operational_roles "Copy link to heading")5.17.2. Define and apply operational Roles

Roles in Vault Core are groups of one or more Permissions. Clients can use them to assign access rights to their employees. Permissions are assigned to a Role to define the access granted to any employee with that Role.

#### [](#define_and_apply_policies "Copy link to heading")5.17.3. Define and apply Policies

Vault Core uses Policies to check whether users can perform actions in relation to an Audit Log.

NOTE - Policies do not apply to Action Logs.

A policy specifies one or more actions such as CREATE, READ and UPDATE. For each action, a list of Permissions can be provided. All associated Permissions and rules must be satisfied for the user to perform the action.

Clients can assign multiple Policies to an Audit Log. Where there are multiple Policies assigned, the user must have all Permissions and satisfy all rules for at least one of these associated Policies.

#### [](#update_permissions_operational_roles_and_policies "Copy link to heading")5.17.4. Update Permissions, operational Roles and Policies

Clients can update the following access control resources:

-   Data Permissions
    
-   Roles
    
-   Policies
    

#### [](#retrieve_permissions_operational_roles_and_policies "Copy link to heading")5.17.5. Retrieve Permissions, operational Roles and Policies:

Clients can retrieve one or more of the access control resources below by specifying the desired IDs or retrieving all of the existing resources:

-   Vault Permissions
    
-   Data Permissions
    
-   Roles
    
-   Policies
    

#### [](#authenticate_api_requests "Copy link to heading")5.17.6. Authenticate API requests

Our recommended method for achieving Vault Core API access control is to use JSON Web Tokens (JWTs) as bearer tokens.

NOTE - SaaS environments do not support JWTs.

You can achieve authentication with the Vault Core REST API by using JSON Web Tokens (JWTs) as bearer tokens. JWTs are defined by RFC 7519. Each JWT must be signed with the private key of a public key pair. Vault Core is then provided with the public key of this key pair, which it uses to verify the signature on the JWT, confirming its authenticity.

Once the signature on the JWT has been verified, Vault Core then authorises the request by validating the claims within the JWT.

Vault Core validates the claims using Policies written in [Rego](https://www.openpolicyagent.org/docs/v0.12.2/how-do-i-write-policies/#what-is-rego) and evaluated using the [Open Policy Agent (OPA)](https://www.openpolicyagent.org/) framework. The rules contained within these Policies are configurable.

### [](#view_usage_metrics_across_a_vault_core_instance "Copy link to heading")5.18. View usage metrics across a Vault Core instance

#### [](#view_the_number_of_live_customer_accounts "Copy link to heading")5.18.1. View the number of live customer Accounts

Clients can view the number of live customer Accounts, or choose to download the information as a CSV.

A live customer Account is any customer Account that, in the three months preceding the measurement date, has had at least one posting, or has a non-zero balance (which can be positive or negative).

#### [](#view_the_number_of_live_customers "Copy link to heading")5.18.2. View the number of live customers

Clients can view the number of live customers, or choose to download the information as a CSV.

A live customer is any customer that, in the three months preceding the measurement date, has been associated with at least one live Account.

### [](#deletion_of_redundant_operational_data "Copy link to heading")5.19. Deletion of redundant operational data

#### [](#deletion_of_redundant_operational_data_2 "Copy link to heading")5.19.1. Deletion of redundant operational data

The Data Deleter component will automatically delete redundant Contract Execution Event data 62 days after creation. It can also be configured to delete other operational data, including Vault Jobs resources, 90 days after creation. Any configured, unused operational Vault Core data is removed on a daily basis, once the relevant age is met or exceeded.

### [](#manage_integrations_with_vault_core_with_edge_functions "Copy link to heading")5.20. Manage integrations with Vault Core with Edge Functions

Edge Functions are configuration components within Vault Core, designed to simplify integrations with Vault Core, by streamlining operational tasks between the bank and Vault Core. These functions are imperative Python files that capture operational logic; they orchestrate Vault API calls and are able to transform data. An Edge Function can be executed synchronously through a single API call, or asynchronously triggered through Smart Contract notification events.

The Edge Function component includes tools and utilities which are provided in order to assist Edge Function writers in developing and testing their Edge Functions, such as an Edge Function SDK and a Vault Core API Library which provides functions that simplify interactions with Vault’s public API endpoints.The SDK is decoupled from the Vault Core API, ensuring that it is not tied to any specific version of Vault Core. It must be used solely for its intended purposes, in connection with Vault Core, and as stated in the Vault Core documentation.

#### [](#model_upload_and_execute_core_operations_with_an_edge_function "Copy link to heading")5.20.1. Model, upload, and execute core operations with an Edge Function

An Edge Function is an imperative Python function designed to transform data and chain Vault Core API requests. It can be uploaded to Vault Core either via the Command Line Utility (CLU) or directly through a RESTful API call.

Upon upload, the Edge Function automatically becomes the designated active version unless specified otherwise. It can be triggered by synchronous RESTful API calls to the dedicated Edge Function endpoint using the unique Edge Function ID, or can be configured to be triggered by a Smart Contract notification event. Only the active version is permitted to execute, except when an alternative version is designated for testing or other operational purposes.

From an access control and security perspective, the caller must be authenticated to initiate the function and possess sufficient privileges to execute the actions defined within the Edge Function, including any calls to Vault Core’s API endpoints.

#### [](#ability_to_view_and_filter_edge_functions_loaded_in_the_system "Copy link to heading")5.20.2. Ability to view and filter Edge Functions loaded in the system

Clients can list all uploaded Edge Functions via a RESTful API call and filter them by status.

#### [](#ability_to_activate_or_deactivate_edge_functions "Copy link to heading")5.20.3. Ability to activate or deactivate Edge Functions.

Clients can toggle an Edge Function’s status between active and inactive.

#### [](#ability_to_monitor_the_execution_of_edge_functions "Copy link to heading")5.20.4. Ability to monitor the execution of Edge Functions

Clients can view system health and performance, and track individual Edge Function executions using the Edge Function Overview and Edge Function Execution Grafana dashboards. They can utilise all elements of Vault’s standard observability stack to monitor Edge Functions.

#### [](#ability_to_unit_test_an_edge_function "Copy link to heading")5.20.5. Ability to unit test an Edge Function

The SDK provides unit testing capabilities for Edge Functions. It supports unit testing by allowing developers to mock API responses using the Vault Core library. This functionality enables testing of Edge Functions without making real API calls, allowing simulation of system behaviour to verify expected results in a controlled environment.

For instance, developers can use mock objects to simulate customer creation, checking if the function correctly creates a customer and returns the expected customer ID without invoking the actual API.

## [](#infrastructure_vault_core_saas "Copy link to heading")6\. Infrastructure: Vault Core - SaaS

### [](#definitions_2 "Copy link to heading")6.1. Definitions

 
| Term | Definition |
| --- | --- |
| 
Vault Core SaaS

 | 

Vault Core running on a SaaS platform

 |
| 

MSA

 | 

An agreed Master Service Agreement, or similar, relating to the supply of Vault Core and related services from Thought Machine to a Client

 |
| 

CSP

 | 

Cloud Service Provider

 |
| 

External System

 | 

Technology that is owned and solely controlled by an organisation other than Thought Machine

 |
| 

Production Environment

 | 

A Thought Machine-managed environment with an instance of Vault Core that is ready to be accessed by an end-user or interact with end-user data designated environment that is capable of serving live customer traffic following a launch event using live customer data

 |
| 

Non-production Environment

 | 

A Thought Machine-managed environment with an instance of Vault Core that end-users do not interact with. It does not contain end-user data and is intended for testing and development purposes.

 |
| 

VPC

 | 

Virtual private cloud

 |

### [](#capabilities_and_attributes "Copy link to heading")6.2. Capabilities and Attributes

#### [](#hosting "Copy link to heading")6.2.1. Hosting

Vault Core SaaS is hosted on Google Cloud Platform (GCP) and in a specific region as defined in the relevant Client MSA. Vault Core SaaS is also capable of being hosted on Amazon Web Services (AWS) at additional cost (to Client).

#### [](#network_connectivity "Copy link to heading")6.2.2. Network Connectivity

Connectivity between Vault Core SaaS and Client infrastructure is achieved through the CSP’s private connectivity service, for example AWS PrivateLink or GCP Private Service Connect. Clients and Thought Machine configure this service to establish the connection. The connection between the Vault Core SaaS VPC and Client VPC is designed to be private and secure. Data does not travel over the public internet unless integrated with additional third-party systems that require it.

#### [](#environments "Copy link to heading")6.2.3. Environments

Thought Machine initially provides all Clients with one Production Environment. In addition, Clients also receive one Non-production Environment to be used for functional testing with obfuscated test data. Additional Non-production Environments are available at an additional cost under separate written agreement.

We will provide environments according to the timeline required by Clients, providing the first Non-production Environment once a Client signs an MSA. We will provide any agreed additional environments after this to meet a Client’s delivery plan when it has been notified to us in advance.

We configure Production Environments with the appropriate resources for the Client’s intended workloads and Account volumes, as each Client must define in their environment request form. Non-production Environments are configured with standard resources for functional testing with low Account volumes.

#### [](#tenancy_and_isolation "Copy link to heading")6.2.4. Tenancy and isolation

We deploy and operate all Vault Core SaaS instances with Client-level isolation. There is a distinction in the tenancy model and level of isolation depending on the type of environment.

-   Production Environments: We deploy Production Environments in a single tenant model with isolation at the CSP account level. Under the single tenant model, no data or workload resources in Vault Core SaaS are shared between Clients.
    
-   Non-production Environments: We may deploy a Non-production Environment in a multi-tenant model unless otherwise specified in the MSA. Under the multi-tenant model, Client data and workloads are logically isolated but run within shared CSP accounts.
    

Production environments are segregated from Non-production Environments at the CSP account level to maintain data confidentiality, integrity and availability.

#### [](#availability "Copy link to heading")6.2.5. Availability

Vault Core SaaS operates with a 99.99% monthly uptime service level agreement for Vault Core APIs as specified and defined in the MSA.

#### [](#resilience "Copy link to heading")6.2.6. Resilience

Vault Core SaaS is designed for high availability and fault tolerance. All components are deployed and replicated across multiple CSP availability zones within a single CSP region.

Vault Core SaaS is deployed in a three availability zone architecture model within the CSP region. All availability zones receive production traffic under normal operating conditions. In the event of an availability zone failure, production traffic is automatically re-routed to the other healthy zones in the same region. This architecture model is designed to achieve the following in the event of an infrastructure component or availability zone failure:

-   Recovery Point Objective (RPO) of 0 seconds
    
-   Recovery Time Objective (RTO) of 60-120 seconds
    

By default, high availability and fault tolerance is only configured in Production Environments. It can be configured in Non-production Environments under separate terms.

Vault Core SaaS takes daily backups of production databases; these backups are retained for 14 days. Transaction logs are backed up to highly-durable storage to allow point-in-time recovery for customer data.

Vault Core SaaS does not provide multi-region disaster recovery capabilities by default. If more than one availability zone fails within the same region, this is considered a regional failure. In the event of a regional failure, Thought Machine will take the decision (in conjunction with the client) to wait for the region to be restored by the cloud provider or to manually re-provision Vault Core into a secondary region. There is no SLA for this activity.

#### [](#authentication "Copy link to heading")6.2.7. Authentication

The Vault Core Operations Dashboard is secured using SAML Single Sign-On (SSO). Clients are responsible for providing details of their SAML IdP during environment setup. Vault Core SaaS is capable of supporting the use of any SAML 2.0-based IdP, including Azure Active Directory, Google Cloud Identity, Okta, AWS SSO and OneLogin.

Access to Vault Core APIs on Vault Core SaaS is secured via authentication tokens using service account tokens. Clients can create and manage their own service accounts and service account tokens using the Vault Core Operations Dashboard or the Vault Core API.

#### [](#streaming "Copy link to heading")6.2.8. Streaming

Clients can connect their own Kafka Connect cluster to Thought Machine public topics in order to consume data directly from Vault Core SaaS to use in their other systems. When used, Kafka Connect allows for scalable and reliable movement of data between Kafka and other data systems, for example moving data from Kafka to analytics databases. Vault Core SaaS Kafka Connect functionality supports data export only. This functionality makes use of existing infrastructure and networking.

#### [](#observability "Copy link to heading")6.2.9. Observability

Clients can gain visibility into Vault Core SaaS by:

-   Monitoring Vault Core API endpoints for health and availability using tooling of their choice
    
-   Ingesting Vault Core metrics into their own observability solution through the Observability Metrics Endpoint, which enables Clients to build monitoring and alerting to meet their organisational needs. Vault Core SaaS does not provide infrastructure metrics through this endpoint or any other method
    
-   Capturing and analysing Vault Core business events, such as Balances, Accounts and Schedule execution, through the Vault Core Streaming API
    

#### [](#data_privacy_and_security "Copy link to heading")6.2.10. Data privacy and security

All production data is encrypted in transit and at rest. In-transit communication between Vault application services is encrypted using mutual Transport Layer Security (mTLS). The volumes that store application data at rest are encrypted by default using the CSP-managed Key Management Service.

While it is possible to do so, Clients should not store any personal data or personally identifiable information (PII) in any instance of Vault Core SaaS. Clients should store such personal data/PII in their own long-term data stores and/or systems of record.

NOTE - Clients are solely responsible for maintaining their own long-term data stores and/or systems of record and all customer data stored therein, including personal data/PII.

An incident may require Thought Machine to have direct access to the Client’s Production Environment to investigate and resolve it. Under these circumstances, the Break Glass procedure is triggered. In accordance with Thought Machine’s role-based access control framework (RBAC), an operator within an authorised group can request temporary access to the Production Environment with administrator Permissions. This requires approval from senior colleagues and the Client. All activity is retained in Audit Logs for the purpose of review and evidencing if required.

## [](#infrastructure_vault_core_client_hosted "Copy link to heading")7\. Infrastructure: Vault Core - Client Hosted

### [](#definitions_3 "Copy link to heading")7.1. Definitions

 
| Term | Definition |
| --- | --- |
| 
Vault or Vault Core

 | 

Vault or Vault Core in this section means Vault Core on a bank-hosted basis

 |
| 

CSP

 | 

Cloud Services Provider

 |
| 

CRDs

 | 

Custom Resource Definitions

 |
| 

CNI

 | 

Container Network Interface

 |
| 

DCL

 | 

Data Control Language

 |
| 

DDL

 | 

Data Definition Language

 |

### [](#overview_2 "Copy link to heading")7.2. Overview

Vault Core is a cloud-native core banking engine with a microservices architecture. It runs on top of the Kubernetes container orchestration system. By utilising Kubernetes, Vault Infrastructure inherits its benefits, such as high availability, scalability and simplified upgrades and day-to-day operations. In order to deploy Vault Core:

-   Vault Core must be in an isolated private network, accessible via load balancers
    
-   Infrastructure components must be spread across multiple Availability Zones (AZs)
    
-   Thought Machine recommends managed services like AWS Elastic Kubernetes Service (EKS) or Google Kubernetes Engine (GKE) for reduced operational complexity
    

### [](#installation_and_setup "Copy link to heading")7.3. Installation and setup

Vault Core requires the Client to set up the following infrastructure components:

-   Kubernetes cluster
    
-   Istio service mesh
    
-   Ingress Load Balancer exposing the Vault Core API
    
-   PostgreSQL feature-compatible and wire-compatible database
    
-   Kafka cluster
    
-   Secrets management solution
    
-   Identity Provider (SAML)
    
-   Thought Machine’s Observability component
    
-   TMComponent Operator
    

#### [](#compatibility "Copy link to heading")7.3.1. Compatibility

Vault Core is compatible with and can be deployed on AWS, GCP, Azure and OpenShift in all regions where the required infrastructure services and components are available.

### [](#kubernetes "Copy link to heading")7.4. Kubernetes

Vault Core operates on Kubernetes and requires a Kubernetes cluster for the Vault Core microservices. Vault Core uses the Kubernetes Horizontal Pod Autoscaling (HPA) API to scale pods during increased load, with the aim of automatically scaling a workload to meet demand, to optimise for reliability and cost.

The CSP will optionally also provide capabilities for Cluster Autoscaling (CA) which can horizontally scale the underlying nodes based on the Vault Core usage. Thought Machine recommends that self-managed Kubernetes services have their own automated way of scaling the cluster.

Installation introduces Kubernetes Custom Resources (CRDs) for the TMComponent Operator. Additionally, Vault Core employs admission webhooks, which are served by Kubernetes services, which requires traffic to be allowed between the Kubernetes Control Plane and the webhook serving services.

#### [](#kubernetes_services "Copy link to heading")7.4.1. Kubernetes services

Vault Core requires the following Kubernetes services. Based on the implementation these might come out of the box with the Kubernetes solution or may need additional provisioning:

-   DNS (Domain Name System): Manages service address translation - kube-dns or coredns are commonly used
    
-   Metrics-server: Underpins some of the metrics for Vault Core microservices autoscaling
    
-   CNI plugin: Enables dynamic network configuration and IP address provisioning in Kubernetes
    
-   Kubernetes Secrets Store CSI driver and the AWS or Azure Key Vault (Microsoft Entra) specific driver provider, if utilising AWS Secrets Manager or Azure Key Vault for secrets management
    

##### [](#compatibility_2 "Copy link to heading")7.4.1.1. Compatibility

-   AWS Elastic Kubernetes Service
    
-   Google Kubernetes Engine
    
-   Azure Kubernetes Service
    
-   OpenShift
    
-   Self-Managed Kubernetes
    

##### [](#authentication_2 "Copy link to heading")7.4.1.2. Authentication

Vault Core supports the standard Kubernetes authentication mechanisms.

### [](#container_management "Copy link to heading")7.5. Container management

Vault Core microservices are packaged and distributed as containers. Clients must establish their own container management and replicate the images provided by Thought Machine.

### [](#ingress "Copy link to heading")7.6. Ingress

Clients can access Vault Core externally through various Ingress resources provided with it.

Clients must:

-   set up an Ingress Controller
    
-   provide Transport Layer Security (TLS) certificates using cert-manager or another certificate management solution
    
-   establish DNS records directing to the Ingress IPs using their domains
    

Compatibility

-   AWS LoadBalancer Controller
    
-   GKE Ingress Controller
    
-   Nginx Ingress Controller
    
-   Istio Ingress Gateway
    

### [](#istio "Copy link to heading")7.7. Istio

Vault Core utilises the Istio service mesh in its distributed system for managing inter-service communication and cluster traffic. Istio enhances the synchronous communication between Vault microservices. Installation options for Istio include:

-   Using TMComponent Operator for an on-cluster Istio with Istio CNI (recommended) NOTE - This is intended for use solely for Vault Core; usage for other workloads on the cluster may work but no support is provided and compatibility for other workloads is not guaranteed
    
-   Using a Client-supplied standard Istio setup, favouring Istio CNI for traffic interception
    

#### [](#istio_features "Copy link to heading")7.7.1. Istio features

Vault Core uses gRPC for intra-service communications, and this traffic is managed by Istio’s Envoy through a precise naming convention within Kubernetes workload services. Istio is also used for mutual authentication between services and network access control.

##### [](#compatibility_3 "Copy link to heading")7.7.1.1. Compatibility

Clients can use either the Istio package that comes with the TMComponent Operator, or, they can run their own Istio Service Mesh provided that it does not restrict or alter the standard Istio APIs.

### [](#relational_database "Copy link to heading")7.8. Relational database

Vault Core requires a PostgreSQL database set up with replication across multiple data centres for high availability. NOTE: The provided PostgreSQL setup must be both wire- and feature-compatible with the open-source PostgreSQL database.

Required features include:

-   TLS connections
    
-   Ability to setup databases, users, and schema migrations (DCL and DDL)
    
-   Ability to adjust configuration for specific logical databases (for example, parameters relevant for performance)
    

Clients must set up appropriate replication and backup strategies that satisfy their Disaster Recovery objectives. Clients are responsible for the operational health of their database such as monitoring its behaviour and resource constraints.

#### [](#management "Copy link to heading")7.8.1. Management

Vault Core includes a Kubernetes Job for installation or upgrade, setting up the necessary logical databases, users, and extensions for its operation. This job also ensures application database users have the right permissions for required roles/privileges. The access level needed by the Kubernetes job depends on the PostgreSQL versions. There is a separate Kubernetes job which performs DDLs as part of the Vault installation and upgrade process.

##### [](#compatibility_4 "Copy link to heading")7.8.1.1. Compatibility

Supported database services:

-   AWS Aurora
    
-   AWS RDS
    
-   Google CloudSQL
    
-   Google AlloyDB
    
-   Azure Postgres Flexible Server
    
-   Bank-hosted open source PostgreSQL
    

##### [](#authentication_3 "Copy link to heading")7.8.1.2. Authentication

There are two supported methods for database authentication

1.  IAM roles (AWS only)
    
2.  Username and Password (All cloud providers)
    

By default, Vault Core will be configured such that connections between Vault Core services and the database are authenticated with a username and password.

Clients running Vault Core in AWS have the option to configure Vault Core to authenticate against a database using Role-based Access Control (RBAC) by way of using AWS IAM credentials in place of traditional usernames and passwords. Both RDS and Aurora versions of Postgres are supported by the APIs provided by AWS.

### [](#kafka "Copy link to heading")7.9. Kafka

The Vault Core microservices on Kubernetes require access to an Apache Kafka cluster for asynchronous message processing and event streaming. Kafka’s configuration should include security provisions for the Certificate Authority (CA), Transport Layer Security (TLS) Encryption, and Client authentication mechanisms.

There is differentiation between internal and public topics, the latter being part of the Vault Core API. Vault Core’s users only access public topics, while microservices interact with both. To regulate this, ACLs (Access Control Lists) are used for authorisation.

#### [](#security_provisions "Copy link to heading")7.9.1. Security provisions

##### [](#certificate_authority "Copy link to heading")7.9.1.1. Certificate Authority

For a Kafka cluster configuration, the Certificate Authority (CA) must be suitable for Transport Layer Security (TLS). Thought Machine recommends Clients have ownership over the CA that signed the broker certificates for the Kafka cluster. If Clients use a public CA, where control over the private key is absent, it is difficult to apply mutual TLS authentication (mTLS) as it is not possible to generate and sign Client certificates and Intermediate CAs.

The following table describes TLS Encryption support (minimum recommended level of security).

 
| Client Authority | Description of the supported approach |
| --- | --- |
| 
Owned CA

 | 

Using the CA Injector webhook to inject a provided CA into the system truststore of all containers in Vault. This ensures that Vault services interfacing with Kafka will trust the provided CA and thus all certificates signed by it.

 |
| 

Public CA

 | 

Vault services communicating with Kafka are set to utilise their system truststores, which are populated with recognised public CAs.

 |

##### [](#client_authentication "Copy link to heading")7.9.1.2. Client authentication

Vault Core currently supports Client authentication using mutual TLS, SASL-SCRAM and SASL-OAUTHBEARER. Authentication without TLS Encryption is not supported.

For each Vault Core service that communicates with Kafka, this requires one of the following:

-   mTLS: Client certificates to be signed by a CA with a chain of trust to a CA whose certificate is stored in Kafka’s truststore. Clients may provide Intermediate CA certificates in their certificate list to establish this chain of trust
    
-   SASL-SCRAM: Client credentials matching those registered in Kafka, consisting of a username and password
    
-   SASL-OAUTHBEARER:
    
    -   OAuth2.0 Identity Provider (IdP) token endpoint to fetch access tokens from
        
    -   Scopes to send to the IdP when fetching tokens
        
    -   Client credentials for retrieving OAuth2.0 access tokens from the IdP, consisting of a client ID and secret
        
    -   SASL Extensions to be sent to Kafka as part of the SASL handshake
        
    

Client certificates or credentials must be placed in a secret management solution allowing Vault Core services to access them. The TMComponent Operator supports the automatic generation of Client certificates from a CA certificate and private key placed in HashiCorp Vault, or generation of credentials for use with SASL-SCRAM or SASL-OAUTHBEARER.

##### [](#client_authorisation "Copy link to heading")7.9.1.3. Client authorisation

The TMComponent Operator supports the automatic creation of Kafka ACLs (Access Control Lists) and deletion of ACLs that are no longer required at installation/upgrade time. These comprise coarse-grained ALLOW and DENY ACLs applicable to Vault principals, topics and consumer groups, created during a Vault Core installation. This ensures that Vault microservices are only able to access Vault topics and consumer groups and only specific Vault microservices are able to access the Policy topics.

If the Client does not use automatic ACL management, or it is not compatible with your chosen Kafka provider, the Client can support manual ACL management by not installing the ACL management and using a reference artefact shipped with Vault Core.

#### [](#kafka_topic_management "Copy link to heading")7.9.2. Kafka topic management

The TMComponent Operator supports the automatic creation, update and deletion of Kafka topics used by Vault Core at installation/upgrade time. It also supports continuous reconciliation of the configuration of these Kafka topics, with a hard requirement on automatic ACL management being enabled.

If the Client does not use automatic topic management, the Client can support manual topic management by disabling topic management and using a reference artefact shipped with Vault Core.

If the Client does not use topic reconciliation or automatic ACL management, the Client can disable topic reconciliation and apply topic configuration changes manually.

##### [](#consumer_lag_metrics "Copy link to heading")7.9.2.1. Consumer lag metrics

Consumer lag metrics are scraped by Vault Core and provided to Grafana dashboards and Kubernetes custom metrics for use in horizontal autoscaling of Kafka consumers in Vault Core. This requires access to the \_\_consumer\_offsets Kafka internal topics.

##### [](#compatibility_5 "Copy link to heading")7.9.2.2. Compatibility

Vault Core is fully tested with and supports Apache Kafka.

### [](#secrets_management "Copy link to heading")7.10. Secrets management

During the deployment phase of Vault Core, the TMComponent Operator generates and stores all secrets in the secrets management solution, with the exception of specific Client-provided secrets.

The TMComponent Operator creates the Roles and policies in either HashiCorp Vault on all CSP or IAM (only available on AWS) that Vault services need to retrieve. The TMComponent Operator leverages the admin role that a Client creates in HashiCorp Vault, AWS IAM, or Microsoft Entra ID (for Azure Key Vault), and also uses it with release artefacts. If using HashiCorp Vault, Clients are responsible for deploying and managing it.

#### [](#secrets "Copy link to heading")7.10.1. Secrets

Clients provide the following secrets:

-   Database Admin user password - used for Vault database administrator applications, enabling the creation of logical databases. It derives other users and Permissions that Vault services use to connect their appropriate database.
    
-   Kafka Certificate Authority (CA) and key - required to implement Kafka mTLS without the standard Public Key Infrastructure (PKI). These facilitate the signing of Client certificates for Thought Machine’s services integrated with Kafka.
    

The TMComponent Operator generates the following secrets:

-   Thought Machine Vault services database password - the installation process will generate a password for each database user that Vault requires and creates. The secrets manager will store the passwords in an appropriate location, from which Vault services will retrieve the passwords during bootstrapping
    
-   Kafka Client certificates - Vault services will only use these secrets when the Client chooses to configure Kafka connections to use mTLS (encryption plus authentication)
    

Vault Services, hosted on Kubernetes, employ init containers to securely source their secrets from HashiCorp Vault during the initial phase. Once these secrets are retrieved, they are available to the primary application container.

Consequently, when all Vault services are operational, direct connections to HashiCorp Vault are minimal and short lived, reinforcing security. Different microservices have their dedicated service accounts scoping access to secrets to the minimum required set.

In instances of service disruptions, the recovery process sees a re-fetching of secrets, maintaining the integrity of operations. When integrated with AWS Secret Manager or Azure Key Vault, Vault uses the Kubernetes Secrets Store CSI Driver, centralising secret retrieval and placement without direct connection to the AWS Secret Manager or Azure Key Vault.

##### [](#compatibility_6 "Copy link to heading")7.10.1.1. Compatibility

Supported secrets management solutions:

-   AWS Secrets Manager
    
-   Azure Key Vault
    
-   HashiCorp Vault
    

##### [](#authentication_4 "Copy link to heading")7.10.1.2. Authentication

AWS Secrets Manager supports AWS IAM authentication only. HashiCorp Vault supports only Kubernetes authentication. Azure Key Vault supports Microsoft Entra Workload ID authentication only.

### [](#identity_provider "Copy link to heading")7.11. Identity Provider

Security Assertion Markup Language (SAML) is an authentication protocol that can be used by an application to authenticate users against a central Identity Provider (IdP), allowing federated applications and organisations to communicate and trust each other’s users. It is composed of two entities:

-   A Service Provider (SP) entity, the application provider; the Vault Operations Dashboard acts as a Service Provider
    
-   An Identity Provider (IdP) entity, allowing authentication and authorisation of the user trying to access the application via the service provider
    

The Vault Operations Dashboard acts as a SAML SP to the IdP. Users who are granted access to the Operations Dashboard use Single Sign On (SSO) to access the application. Once access has been granted by the IdP, the user’s Roles as assigned in the IdP are provided to the Operations Dashboard, which maps them to a set of Vault Permissions. Roles can be added and assigned to permissions through the Access Control API or through the Operations Dashboard page.

SSO uses SAML as the underlying protocol, allowing the user access to multiple third-party systems using a single user Account. This facilitates centralised access management and avoids the issues associated with multiple user Accounts, each with a different password.

The user groups/Roles defined in the IdP are matched to the Roles set up in the Vault Operations Dashboard. The Client can add Roles through the Vault Operations Dashboard page or by using the Configuration Layer Utility (CLU) tool.

#### [](#saml_protocol_2_0_overview "Copy link to heading")7.11.1. SAML protocol 2.0 overview

-   The user starts the process to log in to Vault’s Operations Dashboard by clicking the Login with SSO link
    
-   Vault Core redirects the user to the SAML IdP, providing a SAML request object with attributes about the Vault, the SP
    
-   The user logs in to the SAML IdP using their credentials
    
-   The SAML IdP verifies the user’s identity and the SAML request
    
-   If the request is acceptable to the IdP and the user has logged in successfully, the IdP generates a SAML response object. This response is cryptographically signed by the IdP to ensure its authenticity.
    
-   The SAML IdP redirects the user back to Vault with the SAML response containing the user’s details, such as an email address and any Roles the user holds
    
-   Vault’s Operations Dashboard, the SAML SP, verifies this response and, if found valid, generates an access token granting the user Permissions to access the resource, Vault Core
    
-   The SAML SP makes a request with the access token to Vault Core
    

#### [](#compatibility_7 "Copy link to heading")7.11.2. Compatibility

Supported third-party SAML IdPs:

-   Okta
    
-   Google Cloud Identity
    
-   AWS SSO
    
-   Azure AD
    

### [](#observability_2 "Copy link to heading")7.12. Observability

The Observability Stack is Vault-specific functionality that:

-   Collects metrics and stores metrics for a limited time (Client configurable), with the option for Clients to configure the Prometheus RemoteWrite feature to write metrics to a compatible system that they manage. Clients may also configure Vault Core to export metrics in the OpenTelemetry format.
    
-   Provides Grafana dashboards that lets the Client observe the status of Vault Core
    
-   Provides alerts for predefined issues affecting Vault Core components
    
-   Provides the ability to apply custom labels to alerts, so that clients are able to route the platform’s alerts to the relevant downstream systems to be processed
    

NOTE - The Observability Stack is a required component of Vault Core. The Client must install the observability component when installing Vault Core and install it before any other component. It is mandatory for auto-scaling Vault Core and any support queries. It allows the Client to view and observe the status of Vault Core using metrics, dashboards and alerts.

#### [](#architecture "Copy link to heading")7.12.1. Architecture

The Observability Stack architecture consistent of the following components:

-   Alertmanager
    
-   Grafana
    
-   Prometheus Operator
    
-   Prometheus instances (overview)
    
-   Prometheus instances (cluster-scoped)
    
-   Prometheus instances (namespace)
    
-   Prometheus exporters
    
-   Prometheus service and pod monitors
    
-   Prometheus adapter
    
-   Thanos Query
    

**Contents**

 
| Components | Description |
| --- | --- |
| 
Alertmanager

 | 

A highly-available platform that handles the aggregation and routing of alerts from Prometheus to external receivers such as Slack or PagerDuty.

 |
| 

Grafana

 | 

A dashboarding platform for time-series metrics.

 |
| 

Prometheus Operator

 | 

Orchestrates changes to Observability Stack Prometheus instances.

 |
| 

Prometheus instances (overview)

 | 

Collect and store metrics from Vault microservices and Prometheus exporters. The Prometheus instances are scoped either to the cluster or to the Vault namespace. This is to allow the Observability Stack to scale when multiple Vault instances are deployed on a single cluster.

 |
| 

Prometheus instances (cluster-scoped)

 | 

-   Cloud: Non-Vault cluster services, such as the webhook-operator
    
-   Cardinality: Provides information about Prometheus metric and label cardinality for debugging issues with Prometheus itself
    
-   Istio: Istio control plane metrics
    
-   Kubernetes: Kubernetes and other platform metrics for non-Vault workloads
    





 |
| 

Prometheus instances (namespace)

 | 

-   Envoy: Istio sidecar metrics
    
-   Kafka: Kafka metrics
    
-   Kubernetes: Kubernetes and other platform metrics for Vault microservices
    
-   Postgres: Database metrics collected by the postgres\_exporter
    
-   Vault: Metrics collected from instrumented Vault microservices
    





 |
| 

Prometheus exporters

 | 

Used to collect cluster metrics:

-   Node exporter
    
-   Kube state metrics
    
-   Prometheus cardinality exporter
    





 |
| 

Prometheus service and pod monitors

 | 

PodMonitors and ServiceMonitors are Kubernetes resources that define the metrics collected by Prometheus. These monitors are associated with a Kubernetes Service or Pod and a Prometheus instance.

 |
| 

Prometheus adapter

 | 

Implements endpoints for the custom metrics APIs. This allows Vault microservice HPAs to scale on Prometheus metrics.

 |
| 

Thanos Query

 | 

Thanos Querier pulls the data from Prometheus' horizontally available replicas, and deduplicates those signals providing a metrics entrypoint covering all prometheus instances in the cluster.

 |

#### [](#grafana "Copy link to heading")7.12.2. Grafana

Thought Machine provides a suite of dashboards with Vault Core that allows Clients to monitor, observe and gain insights into Vault by using the Grafana observability platform.

Clients can opt to use a free-to-use version of Grafana or use a Grafana Licence key if they have already purchased a licence.

#### [](#tracing "Copy link to heading")7.12.3. Tracing

It is possible to configure Vault Core to send traces to a HTTP or gRPC endpoint residing within the cluster. The exposed tracing endpoint supports the OpenTelemetry format. The configured endpoint does not have to be an OpenTelemetry Collector, but any service that can accept traces in the OpenTelemetry format.

Vault Core services recognise a number of open-source propagation headers, such as W3C TraceContext, passed in as gRPC Metadata or HTTP Headers. These are propagated across Vault services and their values are reflected in the traces sent to the configured endpoint.

A new trace is created for each incoming request, and spans are created as per the OpenTelemetry specification. However, tracing for asynchronous batch processing, such as for Kafka consumers, is split across multiple traces with links attached to them.

If a trace is sampled, according to the sampling strategy selected by the Client, it is searchable in the tracing store (such as Jaeger) that is set up by the Client.

#### [](#diagnostics_toolbox "Copy link to heading")7.12.4. Diagnostics Toolbox

Diagnostics Toolbox allows running diagnostics tests to identify issues with Vault Core infrastructure or Vault Core infrastructure integration points.

During runtime, Diagnostics Toolbox provisions a Kubernetes Lease object to manage the Kubernetes Pod, Kubernetes ServiceAccount, and an Istio Sidecar. The Toolbox provisions these resources for the duration of the tests in the given Kubernetes namespace. When the tests are complete, the Kubernetes Lease object automatically garbage-collects the resources. Diagnostics Toolbox also creates the cluster-wide Kubernetes resources required to run the tests - the Kubernetes cluster role and the Kubernetes cluster role binding, which attaches the role to the relevant Kubernetes ServiceAccount. The Kubernetes cluster role used by the Diagnostics Toolbox has the same definition as the existing Kubernetes cluster role used by the clusterstat tool.

Diagnostics Toolbox release comprises of releasing 2 artefacts:

-   Diagnostics Toolbox binary
    
-   Diagnostics Toolbox docker image
    

These artefacts are verified and must be used against a given Vault Core instance. See the documentation for the Certified Environment matrix. Even though Diagnostics Toolbox is released as a separate docker image, its artefacts must only be used against the verified Vault Core versions that it is released with, and hence the Diagnostics Toolbox artefacts are part of the Vault Core product.

### [](#tmcomponent_operator "Copy link to heading")7.13. TMComponent Operator

The Client must use TMComponent Operator to install and configure Vault Core components, following the pattern of Kubernetes Operators installing its native resources. TMComponent Operator extends Kubernetes resource kinds with custom resource kinds.

The TMComponent Operator includes:

-   A controller, which subscribes to events relating to required cluster resources and reconciles the state of resources according to the Custom Resource instance in the cluster
    
-   Custom resource definitions (CRDs), which defines the field structures and types, acceptable values and special values that define behaviour with the Kubernetes API
    
-   Custom resources (CRs), which is an instance of an object defined by the CRDs
    

The Client must install the TMComponent Operator prior to installing or upgrading Vault Core.

### [](#reliability "Copy link to heading")7.14. Reliability

Reliability is a critical consideration for deploying Vault Core either on a cloud infrastructure or bank-hosted solution. A critical part of this is understanding the impact of the interactions between the workload (Vault Core) and the infrastructure. Since bank-hosted Clients are responsible for running this underlying infrastructure, Thought Machine cannot reliably provide Service Level Agreements (SLA) for bank-hosted Clients. Thought Machine can provide recommendations and best practice guidelines to help bank-hosted Clients meet their reliability targets.

Vault Core is designed to scale based on increased load, and therefore maximise availability and reduce increased latency during spikes in demand. The factors listed below, such as the infrastructure resources defined during installation, will have a big part in the achievable service level indicators (SLIs) of the system.

In the context of reliability, the availability of services or an application is usually referred to in terms of nines (9s); for higher availability, we want more 9s.

Unlike the Thought Machine SaaS product, our Bank-hosted product operates under a shared responsibility model for the reliability of the services and infrastructure.

  
| Components | SaaS Responsibility | Bank-Hosted Responsibility |
| --- | --- | --- |
| 
Vault Core

 | 

Thought Machine

 | 

Thought Machine

 |
| 

Observability/Monitoring

 | 

Thought Machine

 | 

The Client

 |
| 

Kafka

 | 

Thought Machine

 | 

The Client

 |
| 

Database

 | 

Thought Machine

 | 

The Client

 |
| 

Kubernetes

 | 

Thought Machine

 | 

The Client

 |
| 

Networking

 | 

Thought Machine

 | 

The Client

 |

Thought Machine performs testing to ensure that Vault Core meets certain reliability targets, which comprise:

-   A Service Level Objective (SLO) for every service
    
-   A Recovery Time Objective (RTO) and Recovery Point Objective (RPO) from regional and zonal outages, validated through disaster recovery testing
    

The Client can use various deployment models to recover from regional or zonal outages.

The disaster recovery steps for Vault Core should take into consideration the following:

-   Following an outage, a consistent copy of the Postgres instance is required so that no data is lost in the Vault Core domain tables
    
-   Tooling is provided for restoring internal and outbound public Kafka topics from the database
    
-   Inflight messages on inbound public Kafka topics may be dropped before they are able to be consumed or processed by Vault Core. These topics must be restored manually by the Client (Please refer to Vault Disaster Recovery documentation in Vault Portal)
    

Managed databases also provide certain guarantees for RTO/RPO, so the Client is trying to aim for a specific level for a specific RTO/RPO, it is important to ensure the Clients select the correct managed service.

Managed container solutions such as EKS, GKE, AKS, and OpenShift can also provide varying levels of SLOs depending on the specific deployment method: zonal or regional control plane. Thought Machine recommends choosing to run a control plane in multiple availability zones in order to increase the SLO of the Client’s Kubernetes cluster.

#### [](#factors_that_affect_the_reliability_of_vault_core "Copy link to heading")7.14.1. Factors that affect the reliability of Vault Core

-   Secondary applications or components that the application depends on
    
-   Infrastructure resources such as compute, networking, storage, databases, and security that the application runs on, and how the application uses the infrastructure
    
-   Infrastructure capacity that the Client provisions, and how the capacity scales
    
-   Processes and tools that you the Client uses to build, deploy, and maintain the application and its dependencies
    
-   Monitoring and Observability to ensure that the Client can detect any issues with the services running and remediate these as quickly as possible
    

### [](#advanced_deployment_modes "Copy link to heading")7.15. Advanced Deployment Modes

For clarity, this section describes technical capabilities, however, the creation and/or deployment of additional instances is subject to the commercial terms of the client’s contract.

#### [](#blue_green "Copy link to heading")7.15.1. Blue-Green

This deployment mode allows Clients to create a second Vault Core instance, in the same region, connected to the same data infrastructure (Kafka and database). In passive mode the synchronous APIs are fully functional to allow Clients to validate the installation, while async processing is paused to avoid interfering with the main active instance. The passive instance can be on the same or a different Kubernetes cluster.

This mode allows testing changes to the Vault Core deployment and switching over to the new instance in a controlled fashion without service disruption. Furthermore, it provides a fast rollback mechanism to the old instance without service disruption or data loss. This mode facilitates various operational use cases such as:

1.  Moving Vault Core to a new underlying infrastructure, such as a new Kubernetes cluster
    
2.  Upgrading Vault Core Minor or Patch versions in a variant of the blue green pattern as an alternative to in place upgrades
    

This mode does not support:

1.  Different Major Vault Core versions between the two instances
    
2.  Vault Core versions prior to 5.3 for either the passive or the active instance
    
3.  Moving Vault Core to a different database instance or Kafka cluster
    

#### [](#active_passive "Copy link to heading")7.15.2. Active-Passive

This deployment mode allows Clients to create a second Vault Core instance, connected to its own data infrastructure (database and Kafka) in a separate region. The active instance will be a fully functional live environment while the passive instance has its database on standby (read-only and replicated from the Active database) and asynchronous processing turned off.

This configuration allows clients to build resiliency during regional outages with minimal disruption to business operations.

This mode has a few limitations:

-   Only a single environment can be active at a time
    
-   The Vault Core version in the Passive environment cannot be higher than the one in the Active one.
    
-   The Vault Core version in the Passive environment cannot be of a different major version.
    
-   All APIs performing writes will fail in the Passive environment.
    
-   The idempotence guarantees may not hold for the outcomes lost during failover due to asynchronous data replication.
    

When Active-Passive mode is used in combination with two physical databases (see 7.15.3 Operate Vault Core on Two Physical Databases) there is the option to configure delayed replication of the Warm Storage database via a Kafka replication service (e.g. MirrorMaker). This removes the requirement to perform snapshot restoration of the Warm Storage database during failover, which can significantly reduce the recovery time for larger Vault Core deployments.

#### [](#operate_vault_core_on_two_physical_databases "Copy link to heading")7.15.3. Operate Vault Core on Two Physical Databases

This deployment mode enables Clients to host a single Vault Core instance across two physical databases. Specifically, it places the read-optimised logical database in a secondary PostgreSQL physical database, while all other logical databases remain in the primary PostgreSQL physical database.

This configuration is intended for Clients with exceptionally high data volumes, allowing them to bypass the storage limitations of a single physical database.

Please contact Thought Machine before enabling this deployment mode to receive the necessary setup guidance from our team.

## [](#performance "Copy link to heading")8\. Performance

### [](#introduction "Copy link to heading")8.1. Introduction

At Thought Machine, we take a business-driven approach to performance testing that is based on the number of Accounts that we support of varying Account types. We use industry data about the use of core banking systems to create tests which map to the specific user journeys that our Clients will perform on Vault Core. We define these individual tests as our “performance journeys”.

To ensure that the data we gather is comparable to the interactions of customers at a real bank, we use realistic Smart Contracts for every Account in our performance test environments. These Smart Contracts are taken from our Product Library, where Clients can see and consume the Contracts for themselves and replicate their implementations to achieve a comparable performance on Vault Core.

We recognise that the users of Vault Core will have different Account types and unique products. Our performance testing approach splits the results of our testing between three different ‘Bank Profiles’: two basic profiles and one blended profile. Vault Core Clients can map their bank to the profile that is most representative of their Accounts and see the relevant performance of Vault Core with respect to their customers.

#### [](#daily_use "Copy link to heading")8.1.1. Daily Use

This profile captures Customer Accounts that have multiple transactions each day and a daily Schedule of interest accrual. This profile is a combination of Current Accounts and Credit Card Accounts, taken from our Product Library.

#### [](#monthly_use "Copy link to heading")8.1.2. Monthly Use

This profile represents Customer Accounts that do not see daily use, but operate on monthly cycles. It is a combination of Accounts across our Savings products, personal Loan, and Mortgage products, taken from our Product Library.

#### [](#standard_retail_blend "Copy link to heading")8.1.3. Standard Retail blend

This profile is a blend of both daily and monthly use products, with a 50% split between the two.

### [](#data_ingestion "Copy link to heading")8.2. Data Ingestion

The core principle of our performance testing framework is that our results provide a bank with a realistic indication of the number of Accounts that Vault Core can support and that these results are relevant to a bank that is running in production with historic data.

In order to do this, we populate our test environments with one year of historic transactions for each Account on the bank, prior to running any performance tests.

The number of transactions per Account is dependent on the Account type:

-   Daily Use Accounts have a median of five transactions per day, which equates to an effective total of 1,825 transactions across the year
    
-   Monthly Use Accounts have a median of one transaction per day, which equates to an effective total of 365 transactions across the year
    

For example:

A Standard Retail bank profile for 10 million Accounts will have:

-   Five million Daily Use Accounts, with 1,825 transactions per Account, which equates to an effective total of 9.125 billion historic transactions
    
-   Five million Monthly Use Accounts, with 365 transactions per Account, which equates to an effective total of 1.825 billion historic transactions
    

Therefore, in this example, the total size of the bank is 10 million Accounts, with 10.95 billion historic transactions.

### [](#journey_types "Copy link to heading")8.3. Journey Types

There are four types of performance journeys that we include in the framework.

-   Fixed Duration - measures the total time taken by a process, with a consistent target across all bank sizes and profiles
    
-   Throughput - queues up a large backlog of messages for Vault Core to process as quickly as possible, measuring the median processing rate (Transactions Per Second - TPS)
    
-   Max throughput within SLO - begins at a lower TPS and increases the input rate until the measured round trip time fails to meet the SLO. We measure the maximum TPS achieved before the SLO breach
    
-   Round trip time - runs a process at a fixed TPS for a fixed period of time, measuring the round trip request time (RTT) for each message and reporting on the aggregated percentiles We can define each test case in the performance framework as a combination of the deployment size (the size of the bank), the bank profile, and the specific journey that we tested.
    

### [](#targets "Copy link to heading")8.4. Targets

We have two types of target we apply to each test case:

-   Acceptable: We consider the minimum adequate performance for the journey
    
-   Ideal\*: The best-in-class performance we would like to exhibit
    

\*We do not have ideal targets for ‘Max throughput within SLO’ and ‘Throughput’ journey types.

The actual calculations involved in each target (or input rate in some tests) are dependent on the journey itself, the bank profile and the deployment size.

At a high-level, our process for performance testing comprises:

1.  Data ingestion - populating the test environment with the required data for that deployment size and bank profile
    
2.  Test execution - running the individual performance journeys on the test environment and collecting the required metrics
    
3.  Reporting - comparing the collected results to our target metrics
    

If all performance journeys have met the acceptable target for a particular deployment size and bank profile, then this yields the result that Vault Core supports the given number of Accounts for the stated bank profile.

Thought Machine will only provide performance results that have passed through this framework. Any changes to the tests that we have published reports on will then undergo a rigorous internal review process. We have designed these tests to provide assurance of Vault Core’s ability to support the expected load of production banks at the volumes specified against the test profile. This is our certification criteria.

### [](#infrastructure "Copy link to heading")8.5. Infrastructure

We provide a breakdown of the infrastructure configuration that was required to produce the given results. Any deviations from these configurations in a test environment could impact the performance of Vault Core and lead to alternative test results.

In addition, all of our tests are run from within the test environment itself. This ensures that we minimise latencies between our test harness (the load generator) and the system-under-test (Vault Core). Any attempt to replicate the results in this test should also look to minimise network latencies or remove them from the measurement in order to produce similar results.

**Infrastructure configuration label**

 
| Component | Description |
| --- | --- |
| 
Cloud provider

 | 

AWS/GCP

 |
| 

Kubernetes nodes

 | 

-   Node type
    
-   vCPUs + Memory per node
    





 |
| 

Kafka

 | 

-   Number of brokers
    
-   Broker storage
    
-   Retention period
    
-   Replication factor
    





 |
| 

Database

 | 

-   PostgreSQL version
    
-   Database Instance type
    
-   vCPUs and memory
    
-   IOPS
    
-   Storage
    





 |
| 

Database flags

 | 

List of flags and values set on the database

 |
| 

Dependency versions

 | 

-   Kafka
    
-   Istio
    
-   Kubernetes
    
-   HashiCorp Vault
    





 |
| 

Vault configuration

 | 

Any specific Vault Core configuration values

 |

**gcp-cloudsql-small**

 
| Component | Description |
| --- | --- |
| 
Cloud provider

 | 

GCP

 |
| 

Kubernetes nodes

 | 

-   e2-custom-8-24576
    
-   8 vCPUs + 24 GB RAM
    





 |
| 

Kafka

 | 

-   3 brokers
    
-   500 Gi storage per broker
    
-   1 day retention period
    
-   Replication factor: 3
    





 |
| 

Database

 | 

-   PostgreSQL-16
    
-   Cloud SQL custom specification
    
-   Single database cluster + instance
    
-   32 vCPUs and 208 GB RAM
    
-   60k reads + 60k writes
    
-   Scaling storage
    





 |
| 

Database flags

 | 

-   max\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_page to 64
    
-   max\_wal\_size to 8192
    





 |
| 

Dependency versions

 | 

-   Kafka: 3.9.0
    
-   Istio: 1.25
    
-   Kubernetes: 1.32
    
-   HashiCorp Vault: 1.16
    





 |
| 

Vault configuration

 | 

common.deployment\_size: small

 |

**gcp-alloy-medium**

 
| Component | Description |
| --- | --- |
| 
Cloud provider

 | 

GCP

 |
| 

Kubernetes nodes

 | 

-   e2-custom-8-24576
    
-   8 vCPUs + 24 GB RAM
    





 |
| 

Kafka

 | 

-   6 brokers
    
-   2 Ti storage per broker
    
-   1 day retention period
    
-   Replication factor: 3
    





 |
| 

Database

 | 

-   PostgreSQL-16 compatible
    
-   AlloyDB Primary cluster
    
-   1 primary instance, no read pool
    
-   32 vCPUs and 512 GB RAM
    
-   Scaling storage
    





 |
| 

Database flags

 | 

-   max\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_page to 64
    
-   max\_wal\_size to 8192
    





 |
| 

Dependency versions

 | 

-   Kafka: 3.9.0
    
-   Istio: 1.25
    
-   Kubernetes: 1.32
    
-   HashiCorp Vault: 1.16
    





 |
| 

Vault configuration

 | 

common.deployment\_size: medium

 |

**gcp-alloy-medium-large**

 
| Component | Description |
| --- | --- |
| 
Cloud provider

 | 

GCP

 |
| 

Kubernetes nodes

 | 

-   e2-custom-8-24576
    
-   8 vCPUs + 24 GB RAM
    
-   1 x N2 series Standard Node (16 vCPUs + 128 GB RAM)
    





 |
| 

Kafka

 | 

-   6 brokers
    
-   2 Ti storage per broker
    
-   1 day retention period
    
-   Replication factor: 3
    





 |
| 

Database

 | 

-   PostgreSQL-16 compatible
    
-   AlloyDB Primary cluster
    
-   1 primary instance, no read pool
    
-   Contains all logical databases except Warm Storage
    
-   64 vCPUs and 512 GB RAM
    
-   Scaling storage
    





 |
| 

Warm Storage Database

 | 

-   PostgreSQL-14 compatible
    
-   AlloyDB Primary cluster
    
-   1 primary instance, no read pool
    
-   Contains the Warm Storage logical database only
    
-   64 vCPUs and 512 GB RAM
    
-   Scaling storage
    





 |
| 

Database flags

 | 

-   max\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_page to 64
    
-   max\_wal\_size to 8192
    





 |
| 

Dependency versions

 | 

-   Kafka: 3.9.0
    
-   Istio: 1.25
    
-   Kubernetes: 1.32
    
-   HashiCorp Vault: 1.16
    





 |
| 

Vault configuration

 | 

-   common.deployment\_size: medium-large
    
-   Redis: 75Gi + 1500M CPU
    





 |

**aws-aurora-large**

 
| Component | Description |
| --- | --- |
| 
Cloud provider

 | 

AWS

 |
| 

Kubernetes nodes

 | 

-   General purpose - "m" and "r" instance type
    
-   8 vCPUs + 32 GiB RAM
    
-   1 x N2 series Standard Node (16 vCPUs + 128 GB RAM)
    





 |
| 

Kafka

 | 

-   6 brokers
    
-   2 Ti storage per broker
    
-   1 day retention period
    
-   Replication factor: 3
    





 |
| 

Database

 | 

-   PostgreSQL 16.9
    
-   1 primary cluster + instance, no read pool
    
-   Contains all logical databases except Warm Storage
    
-   AWS Aurora db.r6id.24xlarge
    
-   96 vCPUs and 768 GB RAM
    
-   Unlimited IOPS
    
-   Scaling storage
    





 |
| 

Warm Storage Database

 | 

-   PostgreSQL 16.9
    
-   1 primary cluster + instance, no read pool
    
-   Contains the Warm Storage logical database only
    
-   AWS Aurora db.r6i.24xlarge
    
-   96 vCPUs and 768 GB RAM
    
-   Unlimited IOPS
    
-   Scaling storage
    





 |
| 

Database flags

 | 

-   max\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_page to 64
    





 |
| 

Dependency versions

 | 

-   Kafka: 3.9.0
    
-   Istio: 1.23
    
-   Kubernetes: 1.32
    
-   HashiCorp Vault: 1.16
    





 |
| 

Vault configuration

 | 

-   common.deployment\_size: medium-large
    
-   Redis: 75Gi + 1500M CPU
    





 |

**azure-flexi-medium**

 
| Component | Description |
| --- | --- |
| 
Cloud provider

 | 

Azure

 |
| 

Kubernetes nodes

 | 

-   Standard\_DS4\_v2
    
-   8 vCPUs + 28 GiB Memory per node
    
-   18 nodes in 3 availability zones
    





 |
| 

Kafka

 | 

-   3 brokers
    
-   2 Ti storage per broker
    
-   1 day retention period
    
-   Replication factor: 3
    





 |
| 

Database

 | 

-   PostgreSQL 15.12
    
-   Single cluster
    
-   Azure Database for PostgreSQL flexible server
    
-   64 vCPUs and 512 GiB Memory
    
-   20k max IOPS (read/write combined limit)
    
-   Storage 32767 GiB
    





 |
| 

Database flags

 | 

-   log\_autovacuum\_min\_duration to 600000
    
-   log\_min\_duration\_statement to 4000
    
-   log\_statement to DDL
    
-   max\_locks\_per\_transaction to 2048
    
-   max\_pred\_locks\_per\_page to 64
    
-   password\_encryption to SCRAM-SHA-256
    





 |
| 

Dependency versions

 | 

-   Kafka: 3.9.0
    
-   Istio: 1.23
    
-   Kubernetes: 1.28
    
-   HashiCorp Vault: 1.16
    





 |
| 

Vault configuration

 | 

common.deployment\_size: medium

 |

### [](#results "Copy link to heading")8.6. Results

Here, we discuss the performance results that we obtained by testing the latest production release of Vault Core. We will provide the results for all relevant infrastructure configurations and links to the specific configuration using the given label.

There are also results for each deployment size that we have tested against (the number of Accounts on the bank). We include the largest deployment size that has met our acceptable targets. This is the largest number of Accounts that we have certified that Vault Core can support. However, this does not mean that Vault Core could not support higher volumes of Accounts in a bank - for three key reasons:

1.  Awaiting results for all deployment sizes - once all deployment sizes are tested, we can confirm a conclusive ceiling on the largest number of Accounts that Vault Core can support, based on our certification criteria.
    
2.  Product complexity - depending on the use case of each individual bank, the complexity of the products on the bank will have a large impact on meeting specific targets. For example, if a bank’s product has a less-complex pre-posting process than the more complex products that we use within our certification criteria. In this case, the bank’s results could have reduced round trip times for online transactions, relative to the results of the more complex products. Therefore, a bank with these products could support a higher number of Accounts than specified in the results of our certification.
    
3.  Our certification criteria versus a bank’s criteria - we have consistent, specific targets and SLOs that we measure against for our certification criteria. However, the non-functional requirements of each bank are unique, and a bank may have more lenient expectations of the latencies on their core banking solution. Therefore, a bank could support a higher number of Accounts than the number that we specify in these results.
    

#### [](#postings "Copy link to heading")8.6.1. Postings

**Journey name**: Peak Online Postings

**Journey type**: Max Throughput within SLO

**Units**: Transactions Per Second

**SLO**: 500 ms

**Test detail**:

-   Online Postings submitted PIB requests under public high priority topics
    
-   Number of instructions per PIB: 1
    

    
| Deployment size | Bank profile | Infrastructure label | Target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

69 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

35 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

35 TPS

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

347 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

1042 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

1042 TPS

 | 

Pass

 |

**Journey name**: Median Online Postings

**Journey type**: Round Trip Time

**Units**: Milliseconds

**Test detail**:

-   Online Postings submitted PIB requests under public high priority topics
    
-   Number of instructions per PIB: 1
    

**Acceptable targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Acceptable target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

46 TPS

 | 

500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

23 TPS

 | 

500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

23 TPS

 | 

500 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

231 TPS

 | 

500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

694 TPS

 | 

500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

694 TPS

 | 

500 ms

 | 

Pass

 |

**Ideal targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Ideal target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

46 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

23 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

23 TPS

 | 

200 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

231 TPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

694 TPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

694 TPS

 | 

200 ms

 | 

Pass

 |

**Journey name**: Median Online Postings Sync (Synchronous Postings API)

**Journey type**: Round Trip Time

**Units**: Milliseconds

**Test detail**:

-   Online Postings submitted PIB requests on the Core API HTTP endpoint
    
-   Number of instructions per PIB: 1
    

**Acceptable targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Acceptable target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

46 TPS

 | 

500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

23 TPS

 | 

500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

23 TPS

 | 

500 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

231 TPS

 | 

500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

694 TPS

 | 

500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

694 TPS

 | 

500 ms

 | 

Pass

 |

**Ideal targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Ideal target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

46 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

23 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

23 TPS

 | 

200 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

231 TPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

694 TPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

694 TPS

 | 

200 ms

 | 

Pass

 |

**Journey name**: Offline Postings

**Journey type**: Throughput

**Units**: Transactions Per Second

**Test detail**:

-   This test queues up a large backlog of offline Postings, allows Vault Core to process them, and records the median processing rate (TPS)
    
-   Number of instructions per PIB: 1 Hard Settlement
    

    
| Deployment size | Bank profile | Infrastructure label | Target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

35 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

23 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

29 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

29 TPS

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

290 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

868 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

868 TPS

 | 

Pass

 |

**Journey name**: Combination of HVA Postings, VHVA Postings and Median Online Postings

**Journey type**: Blended

**Test detail**:

-   This test executes the following journeys in parallel and expects Vault to pass all of them:
    
       
    | Journey | Description | Type | Units |
    | --- | --- | --- | --- |
    | 
    HVA Postings
    
     | 
    
    Queues up a large backlog of Postings on a given number of high-volume Accounts (HVAs)
    
     | 
    
    Throughput
    
     | 
    
    Average Transactions Per Second
    
     |
    | 
    
    VHVA Postings
    
     | 
    
    Queues up a very large backlog of Postings on a given number of high-volume Accounts (HVAs)
    
     | 
    
    Throughput
    
     | 
    
    Average Transactions Per Second
    
     |
    | 
    
    Median Online Postings
    
     | 
    
    Online Postings submitted PIB requests under public high priority topics
    
     | 
    
    Round Trip Time
    
     | 
    
    Milliseconds
    
     |
    
-   Number of instructions per PIB: 1 Inbound Hard Settlement
    

      
| Deployment size | Bank profile | Journey | Number of high-volume accounts | Infrastructure label | Target | Result |
| --- | --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Standard Retail

 | 

HVA Postings

 | 

10

 | 

gcp-cloudsql-small

 | 

28 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

VHVA Postings

 | 

1

 | 

gcp-cloudsql-small

 | 

14 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

Median Online Postings

 | 

n/a

 | 

gcp-cloudsql-small

 | 

500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

HVA Postings

 | 

10

 | 

azure-flexi-medium

 | 

28 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

VHVA Postings

 | 

1

 | 

azure-flexi-medium

 | 

14 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

Median Online Postings

 | 

n/a

 | 

azure-flexi-medium

 | 

500 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

HVA Postings

 | 

20

 | 

gcp-alloy-medium

 | 

348 TPS

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

VHVA Postings

 | 

1

 | 

gcp-alloy-medium

 | 

28 TPS

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

Median Online Postings

 | 

n/a

 | 

gcp-alloy-medium

 | 

500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

HVA Postings

 | 

75

 | 

gcp-alloy-medium-large

 | 

1042 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

VHVA Postings

 | 

3

 | 

gcp-alloy-medium-large

 | 

125 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

Median Online Postings

 | 

n/a

 | 

gcp-alloy-medium-large

 | 

500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

HVA Postings

 | 

75

 | 

aws-aurora-large

 | 

1042 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

VHVA Postings

 | 

3

 | 

aws-aurora-large

 | 

125 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

Median Online Postings

 | 

n/a

 | 

aws-aurora-large

 | 

500 ms

 | 

Pass

 |

#### [](#live_balance_enquiries "Copy link to heading")8.6.2. Live Balance Enquiries

**Journey name**: Peak Live Balance Enquiries

**Journey type**: Max Throughput within SLO

**Units**: Queries Per Second

**SLO**: 200 ms

**Test detail**:

-   Number of Account IDs per batch: 1 (i.e. effective QPS = Max RPS)
    
-   Page size: 500
    

    
| Deployment size | Bank profile | Infrastructure label | Target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

556 QPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

278 QPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

278 QPS

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

2,778 QPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

8,334 QPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

8,334 QPS

 | 

Pass

 |

**Journey name**: Median Live Balance Enquiries

**Journey type**: Round Trip Time

**Units**: Milliseconds

**Test detail**:

-   Number of Account IDs per batch: 1 (i.e. effective QPS = Max RPS)
    
-   Page size: 500
    

**Acceptable targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Acceptable target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

139 QPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

69 QPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

69 QPS

 | 

200 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

695 QPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

2,083 QPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

2,083 QPS

 | 

200 ms

 | 

Pass

 |

**Ideal targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Ideal target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

139 QPS

 | 

75 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

69 QPS

 | 

75 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

69 QPS

 | 

75 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

695 QPS

 | 

75 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

2,083 QPS

 | 

75 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

2,083 QPS

 | 

75 ms

 | 

Pass

 |

#### [](#account_opening "Copy link to heading")8.6.3. Account Opening

**Journey name**: Peak Account Opening

**Journey type**: Max Throughput within SLO

**Units**: Transactions Per Second

**SLO**: 1,500 ms

**Test detail**:

-   Create Accounts via the Core API by using the /v2/accounts endpoint
    

    
| Deployment size | Bank profile | Infrastructure label | Target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

28 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

50 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

39 TPS

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

39 TPS

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

390 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

1,170 TPS

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

1,170 TPS

 | 

Pass

 |

**Journey name**: Median Account Opening

**Journey type**: Round Trip Time

**Units**: Milliseconds

**Test detail**:

-   Create Accounts via the Core API by using the /v2/accounts endpoint
    

**Acceptable targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Acceptable target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

28 TPS

 | 

1,500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

50 TPS

 | 

1,500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

39 TPS

 | 

1,500 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

39 TPS

 | 

1,500 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

390 TPS

 | 

1,500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

1,170 TPS

 | 

1,500 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

1,170 TPS

 | 

1,500 ms

 | 

Pass

 |

**Ideal targets**:

     
| Deployment size | Bank profile | Infrastructure label | Input rate | Ideal target | Result |
| --- | --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

28 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

50 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

39 TPS

 | 

200 ms

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

39 TPS

 | 

200 ms

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

390 TPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

1,170 TPS

 | 

200 ms

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

1,170 TPS

 | 

200 ms

 | 

Pass

 |

#### [](#end_of_day "Copy link to heading")8.6.4. End of Day

**Journey name**: End of Day

**Journey type**: Fixed Duration

**Units**: Seconds

**Test detail**:

-   Number of Schedules to process: 1 per account
    

**Acceptable targets**:

    
| Deployment size | Bank profile | Infrastructure label | Acceptable target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

7,200 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

7,200 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

7,200 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

7,200 seconds

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

7,200 seconds

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

7,200 seconds

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

7,200 seconds

 | 

Pass

 |

**Ideal targets**:

    
| Deployment size | Bank profile | Infrastructure label | Ideal target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

7,200 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

7,200 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

7,200 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

7,200 seconds

 | 

Pass

 |

**Journey name**: End of Day Balance Reconciliation

**Journey type**: Fixed Duration

**Units**: Seconds

**Test details**:

-   Number of Account IDs per batch: 50
    
-   Page size: 5,000
    

**Acceptable targets**:

    
| Deployment size | Bank profile | Infrastructure label | Acceptable target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

2,700 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

2,700 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

2,700 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

2,700 seconds

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

2,700 seconds

 | 

Pass

 |
| 

20 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

2,700 seconds

 | 

Pass

 |
| 

20 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

2,700 seconds

 | 

Pass

 |

**Ideal targets**:

    
| Deployment size | Bank profile | Infrastructure label | Ideal target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

900 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

900 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

900 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

900 seconds

 | 

Pass

 |

#### [](#smart_contract_upgrade "Copy link to heading")8.6.5. Smart Contract Upgrade

**Journey name**: Smart Contract Upgrade

**Journey type**: Fixed Duration

**Units**: Seconds

**Test details**:

-   The test will upgrade all products in the bank and record the total duration
    
-   It triggers upgrades via the Core API by using the /v2/accounts endpoint
    

**Acceptable targets**:

    
| Deployment size | Bank profile | Infrastructure label | Acceptable target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

14,400 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

14,400 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

14,400 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

14,400 seconds

 | 

Pass

 |
| 

10 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium

 | 

14,400 seconds

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

gcp-alloy-medium-large

 | 

14,400 seconds

 | 

Pass

 |
| 

30 million Accounts

 | 

Standard Retail

 | 

aws-aurora-large

 | 

14,400 seconds

 | 

Pass

 |

**Ideal targets**:

    
| Deployment size | Bank profile | Infrastructure label | Ideal target | Result |
| --- | --- | --- | --- | --- |
| 
1 million Accounts

 | 

Daily Use

 | 

gcp-cloudsql-small

 | 

3,600 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Monthly Use

 | 

gcp-cloudsql-small

 | 

3,600 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

gcp-cloudsql-small

 | 

3,600 seconds

 | 

Pass

 |
| 

1 million Accounts

 | 

Standard Retail

 | 

azure-flexi-medium

 | 

3,600 seconds

 | 

Pass

 |

### [](#limitations "Copy link to heading")8.7. Limitations

Here, we outline any specific details about the performance claims that you may need to be aware of in order to produce similar results.

-   We generate the test load from within the test environment cluster, which minimises network latencies
    
-   We distribute the load across at least half of the Accounts on the bank; we cannot guarantee similar performance results at an individual Account level if the load was to be targeted to a significantly lower number of Accounts
    
-   Unless described as a “Blended Journey”, we run the tests in isolation, without any other load on the test environment at the time
    
-   Any claims regarding SLOs and round trip times are based on the 95th percentile
    
-   The higher volume results do not yet have a full year of transaction history, instead we have a total of 3.6bn Postings on the gcp-alloy-medium-large results, and 1.4bn Postings on the aws-aurora-large results for 10, 20 and 30 million Accounts.
    

## [](#appendix "Copy link to heading")9\. Appendix

### [](#deprecated_items "Copy link to heading")9.1. Deprecated items

To view the list of deprecated features, review the deprecation notices in the [technical details of this release on the Documentation Hub](/vault-core/5-7/EN/environment_and_installation/vault_release_information#deprecated_features).