---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples/generic"
title: "Generic banking"
scraped_at: "2026-06-16T16:37:31.116Z"
images: 0
---

# Generic banking

This section provides and explains Smart Contract, Supervisor Contract and Contract Module examples, with tips and tricks when building Contracts for various financial activities and common scenarios.

error

All the code examples below are snippets of partially written Contracts, focusing on the Contract representation of the financial activity.

The snippets below exclude some [metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata) and [imports](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#all_types_of_imports) of Python native objects, Smart Contracts API objects, or Contracts Modules that are irrelevant to the specific example. For Smart Contract code used in production, the metadata and imports must be included.

## [](#all_types_of_imports "Copy link to heading")All Types of Imports

When using a Python native object, Smart Contracts API object, or Contracts Module, they must be imported in the Contract code using the standard Python `import` keyword.

Use the following links for a list of all [types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/) and values available during Smart Contract, Supervisor Contract and Contract Modules execution in Contracts Language API 4.0+.

Examples of how to import native objects, Contracts API types, and Contract Modules are shown below.

error

-   Wildcard imports are not supported, other than from the Contracts API (`from contracts_api import *`). However, we advise you to import individual custom types as needed, rather than all of them.
    
-   Aliases are not supported for any imports.
    

### [](#native_objects "Copy link to heading")Native objects

The example below imports the `datetime`, `Decimal`, and `ZoneInfo` objects. All the native objects available to be imported in Smart Contracts are listed [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/native_objects).

chat\_bubble

All `datetime` objects are timezone aware, the timezone can be set using the `ZoneInfo` object.

### [](#contracts_api "Copy link to heading")Contracts API

The example below imports the Contracts API objects that would be required to return a `Rejection` object in the [pre\_posting\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_posting_hook), when it receives posting instructions with the wrong denomination.

### [](#contract_modules "Copy link to heading")Contract modules

In the example below, it shows a simple Contract Module that provides some rounding operations. These are commonly used for interest calculations within Smart Contracts.

Using a Contract Module in a Smart Contract requires an import of the module alias from `contract_modules`. A detailed explanation of this process is provided [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview#using_contract_modules_in_smart_contracts).

This example shows how to import the above Contract Module into your Smart Contract code:

## [](#requirements_fetching "Copy link to heading")Requirements Fetching

The different types of requirements that are currently supported are the following:

-   Balances
    
-   Last execution datetime
    
-   Parameters
    
-   Flags
    
-   Postings
    
-   Calendar events
    

Before following the examples in this section, first read [optimised data fetchers](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#about_optimised_data_fetching) and [requirements](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#about_requirements). To check the allowed requirements per hook, see the [hooks section](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/).

### [](#balances "Copy link to heading")Balances

This is a list of the `fetcher_id`s defined in the Contract `data_fetchers` metadata. If set, the specific data window or a single data point of balances is fetched.

*Example:* We would like to reject a purchase if it would make the balance of the account go past the overdraft limit. To achieve this, we need to know the value of the live balance when we receive the posting instructions. So we set the `balances` fetcher requirement to a `fetcher_id` that maps to a `BalancesObservationFetcher` at the live datetime. The value of the balances are retrieved using the [get\_balances\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_observation) `vault` method.

chat\_bubble

The `LIVE` attribute in the `DefinedDateTime` lets you access Vault data that is dated after `effective_datetime`; this is considered best practice for `pre_posting_hook` as payment requests could be processed concurrently.

### [](#last_execution_datetime "Copy link to heading")Last execution datetime

This must be a list of strings representing required event types.

*Example:* We publish a monthly statement notification with information about last month’s balances in a customer account. There is an on-demand `APPLY_OVERDRAFT_FEE` event that will run only if the account goes into its overdraft. If that event had run in the last month, we would like to add the overdraft fee application date to the monthly statement. To achieve this, we require the last execution datetime of the `APPLY_OVERDRAFT_FEE` event in the `scheduled_event_hook`.

### [](#parameters "Copy link to heading")Parameters

The `parameters` is a boolean that defaults to `False`. If set to `True`, the timeseries of all contract parameters, including global parameters linked to the contracts, are fetched.

*Example:* We grant new customer accounts an initial joining bonus in the `activation_hook`. This bonus is paid from the Bank’s Internal Account, which is fetched as a `TEMPLATE` level parameter. The denomination of the bonus is defined by the global parameters. We would also like to apply accrued interest monthly on the day of the key date `INSTANCE` level parameter value. To achieve this, we set the `parameters` to `True` on the requirements of the `activation_hook` and get the value of the parameters using `get_parameter_timeseries`.

### [](#flags "Copy link to heading")Flags

This is a boolean that defaults to `False`. If set to `True`, the timeseries of the flags are fetched.

*Example:* We would like to apply interest at a higher rate if the `CUSTOMER_TIER_PREMIUM` flag is set. We can find out whether the flag is set by setting the flags requirement to `True` and calling `get_flag_timeseries`.

### [](#postings "Copy link to heading")Postings

This is a list of the `fetcher_id`s defined in the Contract `data_fetchers` metadata. If set, the specific data window of postings is fetched.

*Example:* We would like to reject posting instructions if the number of the account posting instructions has reached the postings monthly limit. To achieve this, we set the `postings` fetcher requirement to a `fetcher_id` that maps to a `PostingsIntervalFetcher` for the past 1 month. To get the posting instructions with timestamp within the last month use the `get_posting_instructions` method.

### [](#calendar_events "Copy link to heading")Calendar events

When using the `@requires` decorator, this must be a list of strings representing required calendar IDs.

*Example:* We would like to accrue daily interest unless the `ACCRUE_INTEREST` event occurs on a `BANK HOLIDAYS` calendar event in the `scheduled_event_hook`.

Calendar Events can also be retrieved using [Account Data Fetchers](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#account_data_fetchers), and a filter must be provided in the definitions of these fetchers. Calendar Events can be retrieved for either an interval or for an instance in time, via the `get_calendars_timeseries` and `get_calendars_observation` methods respectively.

The Smart Contract snippet below demonstrates the usage of the `get_calendars_timeseries` and `get_calendars_observation` methods to fetch calendar events.

## [](#internal_accounts "Copy link to heading")Internal Accounts

In Vault, an Internal Account is an account that is owned by a bank. An Internal Account is used to pay money to, or receive money from, the bank’s customer accounts. These payments could be, for example, interest accrued or fees incurred on a customer account.

This section contains some common examples of how you can use Smart Contract code for Internal Accounts to charge customers fees or to pay interest on their account balances.

### [](#defining_internal_account_parameters "Copy link to heading")Defining Internal Account parameters

You need to declare a separate contract parameter for each Internal Account you use in your Smart Contract code.

You should generally define these parameters as `TEMPLATE` level parameters. This is because they:

-   Can be set on product upload.
    
-   Will be the same for all instances of the same product.
    
-   Can also be updated later on via Core API calls for all account instances at once.
    

This section follows this approach.

If you want to use different parameter levels instead, see [Contract Parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#contract_parameters) for more information.

*Example:* A current account pays interest on the current balance but also charges a fee for any unarranged overdraft.

As shown in the code below, in your Smart Contract you need to define `TEMPLATE` level parameters for:

-   The Internal Account that receives the overdraft fee
    
-   The Internal Account that pays interest on the current account
    

error

We recommend that you do not hard code Internal Account IDs in your Smart Contract code. If you do and the Internal Account ID value changes, you will need to create a new version of the product.

### [](#accessing_internal_accounts_using_hooks "Copy link to heading")Accessing Internal Accounts using hooks

Once you have defined your parameters, you need to tell Vault that values have been assigned to them in the hooks. You do this using [Requirements](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#about_requirements).

The `@requires(parameters=True)` decorator makes the parameter values available to the hook so they can be accessed by the `vault` object function [get\_parameter\_timeseries()](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries).

### [](#using_internal_accounts_to_transfer_funds "Copy link to heading")Using Internal Accounts to transfer funds

You can now create a posting instruction from a customer account to an Internal Account, and from an Internal Account to a customer account.

Example: An overdraft fee of GBP 100.00 is charged to a customer account using a scheduled hook `APPLY_OVERDRAFT_FEES`.

The `PostingInstructionsDirective` of the `ScheduledEventHookResult` will submit the generated transaction to Vault.

Example: Interest of GBP 10.00 is paid to a customer using a scheduled hook `PAY_INTEREST`.

## [](#account_deactivation_hook "Copy link to heading")Account Deactivation Hook

The \`deactivation\_hook’s purpose is to prepare the account for closure by ensuring all balances are settled and in a position to be finalised. Actions that can be implemented in this hook include, but are not limited to:

-   Charging fees.
    
-   Paying reward points.
    
-   Clearing out Internal Accounts' balances (e.g. accrued interest).
    
-   Moving debts or extra funds.
    
-   Disabling schedules.
    

error

This hook may be retried if the closure of the account fails, so apply any fees, refunds or rewards with caution.

Steps for the account closure:

1.  The `deactivation_hook` is triggered when the state of the account is updated to `PENDING_CLOSURE`.
    
2.  The hook should commit posting instructions as part of its directives that zero out the account balances, and stop any scheduled jobs from running.
    
3.  If the `deactivation_hook` completes successfully and is not rejected, the bank can then trigger the account update to `ACCOUNT_STATUS_CLOSED`.
    
4.  If:
    
    -   Any non-zero balances still exist, the account service will reject the account update and the account will not be successfully `CLOSED`.
        
    -   No non-zero balances exist, the account update completes and the account will be successfully `CLOSED`.
        
    

chat\_bubble

Perform balance clearing either in the `deactivation_hook` hook or outside the contract, for example using the Core API.

### [](#example_accrued_interest_application "Copy link to heading")Example: Accrued interest application

A savings account contract accrues interest daily; this is applied once a month. Before closing the account, we would like to apply any remaining accrued interest, and stop the daily interest accrual schedule from running.

chat\_bubble

In this example, we assume that the accrued interest is stored in the `'ACCRUED_INCOMING'` balance. Also, the interest is accrued by a daily schedule, `ACCRUE_INTEREST`, in which funds are moved from the `'ACCRUED_OUTGOING'` balance of the internal account to the `'ACCRUED_INCOMING'` balance of the main account.

### [](#example_early_repayment_fee "Copy link to heading")Example: Early repayment fee

Account contracts can have a minimum lifetime duration. If this is the case and the customer decides to close the account earlier, an early closure fee could be applied.

chat\_bubble

In this example we assume that the early closure fee is transferred from the `DEFAULT_ADDRESS` balance of the internal account to the `'EARLY_CLOSURE_FEE'` balance of the account. The fee is only applied once, no matter how many times the closure is retried. The example does not demonstrate how this fee is later paid by the customer and how the account balances are zeroed out, however such logic could be implemented in `post_posting_hook`.

### [](#example_loan_closure_before_full_repayment "Copy link to heading")Example: Loan closure before full repayment

A loan account contract should not be closed before the full repayment of the principal and any remaining unpaid interest. We would like to reject any attempt to do so.

chat\_bubble

In this example, we assume that the loan principal and interest are saved in the custom balances `'PRINCIPAL'` and `'INTEREST'` accordingly and we don’t show how these addresses are populated. The closure of the account would be rejected by the account service with or without this check if the balances are not cleared. This example shows us how to do the check one step earlier and show a message that is personalised to the specific account, containing all the details related to the rejection.

## [](#interest_schedules "Copy link to heading")Interest Schedules

This section describes how you can use common Smart Contract patterns to implement and schedule:

-   The accrual of interest on money deposited in a savings account
    
-   The payment of interest in a savings account
    

*Example:* Interest accrued daily is paid into the customer account at the end of each month. The first interest payment is made one month after the account is opened.

*Step 1: Defining the schedule events*

Define two separate schedule events, with:

-   The first schedule event handling daily interest accruals
    
-   The second schedule event handling payment of the accrued interest
    

For daily interest accruals, you need to define a dedicated `account_addresses` in the Smart Contract. This will store the total accrued amount value and will be used to pay the interest into the customer account.

The interest is accrued or paid from the bank’s [Internal Account](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#internal_accounts) to the customer account. The ID of the bank’s Internal Account, from which interest is accrued, is provided to the Smart Contract code using contract parameters.

In the example below:

-   The `'ACCRUED_INCOMING'` address is used in the customer’s account to `store` the total accrued value
    
-   The `'ACCRUED_OUTGOING'` address is used in the bank’s Internal Account
    

chat\_bubble

-   Interest can be accrued on any customer’s or bank’s dedicated `account_addresses`.
    
-   Interest rounding is not performed here. For further information, see the [Rounding](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#rounding_and_zeroing_out_interest) examples section.
    

*Step 2: Instructing interest accrual*

Daily interest accrued on the total deposit balance is moved into the `'ACCRUED_INCOMING'` customer account address from the bank’s Internal Account `'ACCRUED_OUTGOING'` address.

*Step 3: Instructing interest payment*

To apply monthly interest to a customer account, you need to:

-   Get the total balance `'ACCRUED_INCOMING'` from the customer account address
    
-   Move it to the `DEFAULT_ADDRESS` of the customer account
    

To move the interest from the Internal Account, you need to:

-   Move the balance from the ``'ACCRUED_OUTGOING'`account address to the `DEFAULT_ADDRESS`` address
    

chat\_bubble

As the balance in the Internal Account is negative, this requires the internal transfer instruction to be reversed (see example below).

chat\_bubble

You can use similar code where a customer is charged interest, for example, on a loan. You will need to switch the direction of internal transfers and the account addresses for the customer account and the bank’s Internal Account.

## [](#creating_schedules_to_be_scheduled_on_demand "Copy link to heading")Creating Schedules to be Scheduled on Demand

chat\_bubble

On-demand/one-off schedules are not currently natively supported by Vault Core as a first class feature. This documentation outlines a way to provide this functionality using the skip feature of contract schedules.

This is an example of creating a schedule that can be enabled on demand. The schedule is created in a skipped state, meaning it will not publish any jobs until it is unskipped. In this example, a schedule is used to apply a \`one-off' overdraft fee to an account that remains past its overdraft limit for a number of days. It is initially created in a skipped state with no end date. If the account balance drops below its overdraft limit, the schedule is unskipped and set to be run after a fixed number of days. When the schedule is handled, a fee is applied to the account and the schedule is updated to be skipped again.

error

A schedule will be marked as COMPLETED once all jobs it expects to emit report a `SUCCESS`. Make sure that schedules do not become COMPLETED if you intend to update them later in order to trigger them. Once COMPLETED, you cannot re-enable a schedule through the update event type directive. Additional information regarding schedule management can be found in our [best practices for schedule management](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines#schedule_management).

## [](#re_balancing "Copy link to heading")Re-Balancing

The customer may want to move money from a `DEFAULT` address to a custom address or addresses after posting instructions are received. This lets the customer distribute the money in an account into different 'pots'. For example, the customer could allocate spending into pots called 'HOUSING', 'RESTAURANTS', and 'TRAVEL', and savings into pots called 'EMERGENCY\_FUND' and 'HOLIDAYS'. Using these allocations helps simplify accounting and financial calculations in the Smart Contract code. The following show some common examples of re-balancing.

### [](#re_balancing_purchases "Copy link to heading")Re-balancing purchases

A credit card contract could have different types of transactions which would attract different interest rates and fees on outstanding repayment amounts. These could have balance addresses, for example, of:

-   `ATM`
    
-   `VIP_MERCHANTS`
    
-   `ANY_MERCHANTS`
    
-   `FEES`
    
-   `INTEREST`
    

The bank could keep track of the different transactions the customer has performed by checking the type in the instruction details metadata and then re-balancing.

*Example*: The bank only re-balances posting instructions with balances in [phase](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#phase) `COMMITTED`, and leaves balances in phase `PENDING_IN` or `PENDING_OUT` in the 'DEFAULT' address, and doesn’t re-balance repayments.

chat\_bubble

For simplicity, we assume that all the posting instructions received by the hook have metadata attached to them that contain the spending type related to the purchase. We also don’t show how interest and fees are charged, and the account type is 'LIABILITY'.

### [](#re_balancing_repayments "Copy link to heading")Re-balancing repayments

*Example*: The loan contract has these customer addresses:

-   `PRINCIPAL` balance for the total outstanding loan amount; this address is populated on account activation using the `activation_hook` (not shown)
    
-   `INTEREST` balance for the interest charged on the remaining loan amount; this address is populated on a monthly schedule using the `scheduled_event_hook` (not shown)
    
-   `FEES` balance for the fees charged for late repayments; this address is populated by a monthly repayment check schedule (not shown)
    
-   `DEFAULT` balance for the incoming posting instructions; this address is populated when the customer performs transactions
    
-   The bank follows this repayment hierarchy using re-balancing:
    
    1.  `FEES`
        
    2.  `INTEREST`
        
    3.  `PRINCIPAL`
        
    

The account type is `ASSET` and all the customer account address balance net values are negative as they store the amount the customer owes the bank.

chat\_bubble

For simplicity, we assume that repayments will only be allocated to the outstanding balances with phase `COMMITTED`. Balance amounts with phase `PENDING_IN` or `PENDING_OUT` are left in the 'DEFAULT' address. These addresses are already populated and we don’t show how funds are charged for them in the first place.

## [](#rounding_and_zeroing_out_interest "Copy link to heading")Rounding and Zeroing Out Interest

When interest is accrued, we usually accrue this to a precision of 5 decimal places to ensure the accrual is more accurate. However, when we apply the accrual to the customers default address, we usually want to round to 2 places, as most currencies only hold meaningful value to this accuracy. This means that there is a remainder amount in our accrual address after interest are applied to the customer. There are two common patterns for dealing with this remaining balance:

-   zeroing out remainder balance, or
    
-   carrying it over to further periods.
    

### [](#zeroing_out "Copy link to heading")Zeroing out

When zeroing out, we want to ensure the final balance of the accrual address is 0 at the end of an interest application. Most commonly we would achieve this by checking if the remaining balance is negative (we rounded up) or positive (we rounded down), then transferring balance to or from an internal account:

The helper function `_zero_out_interest` can then be called in the `scheduled_event_hook` with the amount accrued and any `posting_instructions_directives` can be returned in the hook as follows:

### [](#leaving_interest "Copy link to heading")Leaving interest

Instead of zeroing out, we could take another approach, leaving the interest in the accrual address. This assumes that over time, the leftover balance will be transferred to the customer anyway as it will add up to a rounded total.

## [](#raising_a_notification "Copy link to heading")Raising a Notification

The most common way for Smart Contracts to interact with the outside world is to trigger a [Notification](/vault-core/5-8/EN/api/core_api#contract_notification_events). You use notifications to surface information and to instruct further actions from the Smart or Supervisor Contracts.

The notifications are used by the bank’s integration layer, which then triggers the required downstream actions either by calling the Vault Core API or another non-Vault service within the bank. A common example of when a Smart Contract might need to trigger a notification is as follows:

In a simple Current Account with no overdraft facility, if a posting generates a negative balance for a user, raise a notification using the [AccountNotificationDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective) that will contain details of the `notification_type` and the latest balance. You need to declare the `notification_type` in the metadata of the Smart Contract so that it can be used in the `AccountNotificationDirective`.

chat\_bubble

In this example, we raise a notification in the `post_posting_hook` but these are also supported in other hooks. You can identify the hooks that allow raising a notification by checking the allowed directives for each hook’s return type in the [API reference](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/).

chat\_bubble

Raising notifications is also supported in Supervisor Contracts, which can return the [PlanNotificationDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#plannotificationdirective) using hook result classes. You can see the hooks that support returning the `PlanNotificationDirective` in the [Supervisor Contract API reference](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hooks/).

### [](#raising_a_workflow "Copy link to heading")Raising a Workflow

The notification can be configured to automatically start a [Workflow](/vault-core/5-8/EN/reference/workflows-tickets/introduction-to-workflows#overview) when returned as a directive from a Smart Contract.

In order for the Workflow to be [auto-instantiated](/vault-core/5-8/EN/reference/workflows-tickets/workflow-auto-instantiations/), you must create a Workflow definition that can react to notifications. To enable a Workflow definition to react to notifications, the Workflow definition must contain `auto_instantiation_conditions` that include a unique identifier - `notification_type` - which must be consistent between the Smart Contract and the Workflow definition details.

To capture and surface this information using the Workflow instance, set the paths for the auto-instantiation condition `instantiation_context` to `notification_type` and `notification_details`. Below is an example `auto_instantiation_condition` that, when used in a Workflow definition, will create Workflow instances for the above Smart Contract.

## [](#expected_parameters "Copy link to heading")Expected Parameters

[Expected Parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#expected_parameters) can be retrieved for either an interval, or for an instance in time. The Smart Contract below uses both methods to charge a different fee depending on whether a Parameter was enabled or not in the past month.

chat\_bubble

You can define the interval or instance in time in the fetchers to be in the future, to fetch [future-dated parameter values](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#future_dated_parameters).

## [](#custom_validation_for_parameter_value_updates "Copy link to heading")Custom Validation for Parameter Value Updates

Smart Contracts enable custom validation of the updated parameter values through the `pre_parameter_change_hook`. Currently, only `INSTANCE` level parameters and account-owned values for expected parameters support custom validation. This is run in addition to the basic validation checks corresponding to the parameter’s shape/constraints. If the hook is not defined then only the basic validation is done.

Here is an example of custom parameter validation, where the bank wants to only allow the overdraft limit to be changed for customers who are considered VIPs. The bank does this via a VIP flag which must be enabled to allow changing the overdraft limit.

chat\_bubble

A Smart Contract can optionally reject a parameter value update. Alternatively, if `None` is returned from the `pre_parameter_change_hook`, the new parameter value is saved. The `pre_parameter_change_hook` is only triggered on updates to `INSTANCE` level parameter values, and account-owned expected parameter values.

## [](#flags_2 "Copy link to heading")Flags

As of Vault Core 5.2, you can use [Account Data Fetchers](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#account_data_fetchers) to retrieve [Flags](/vault-core/5-8/EN/reference/flags) from an interval or an instance in time.

Optionally, you can provide a filter in the definitions of these fetchers to fetch for a specific [FlagDefinition](/vault-core/5-8/EN/api/core_api#flagdefinition) by its ID.

When a filter is provided:

-   [get\_flags\_timeseries()](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries) returns a `dict`.
    
-   [get\_flags\_observation()](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation) returns a [FlagsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservation) containing a `dict`.
    

When a filter is not provided:

-   [get\_flags\_timeseries()](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flag_timeseries) returns a `defaultdict`.
    
-   [get\_flags\_observation()](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_flags_observation) returns a [FlagsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservation) containing a `defaultdict`.
    

The following Smart Contract examples demonstrate all of the above methods to access Flags.

Each example contains the following metadata:

### [](#flags_observation_without_filter "Copy link to heading")Flags Observation without filter

Example of a Smart Contract using `FlagsObservation` without a filter.

### [](#flags_observation_with_filter "Copy link to heading")Flags Observation with filter

Example of a Smart Contract using `FlagsObservation` with a filter.

### [](#flags_interval_without_filter "Copy link to heading")Flags Interval without filter

Example of a Smart Contract using `FlagsInterval` without a filter.

### [](#flags_interval_with_filter "Copy link to heading")Flags Interval with filter

Example of a Smart Contract using `FlagsInterval` with a filter.

## [](#denomination "Copy link to heading")Denomination

This section describes how the `permitted_denominations` of an account can be limited in the Smart Contract metadata and how denomination checks can be implemented for posting instructions in the `pre_posting_hook`.

The `permitted_denominations` of an account can be restricted using `supported_denominations`, which is a list of strings declared at the top of the Smart Contract and limits the permitted denominations for all the accounts created from this Smart Contract.

The `permitted_denominations` are stored with the account when created. They have to be a subset of the `supported_denominations`. If the `supported_denominations` list is not provided in the Smart Contract metadata, then the accounts of the Smart Contract will support all valid ISO 4217 denominations.

It is possible to restrict posting instructions based on their denomination. The following example shows how a denomination check can be implemented in the `pre_posting_hook` of a Smart Contract using the `permitted_denominations` value set on the account. If posting instructions are received that contain any posting with a non-permitted denomination value, then all posting instructions are rejected.

chat\_bubble

The denomination value can alternatively be stored within a Smart Contract-defined parameter (`INSTANCE` or `TEMPLATE` level) or a global parameter using the `DenominationShape`.

## [](#balance_check "Copy link to heading")Balance Check

A Smart Contract often deals with the behaviour of the product when it receives new posting instructions, which need to be either accepted or rejected based on certain conditions. It may, for example, check the denomination of each posting instruction or the effect it has on the balance.

This type of functionality uses the `pre_posting_hook`. This:

-   Receives `posting_instructions` and an `effective_datetime` as hook arguments via the `hook_arguments` object
    
-   Aggregates the balances of the posting instructions
    
-   Uses the aggregated balance of the posting instructions to check that the total effect they will have on the balance is allowed by the Smart Contract; if the operation is not allowed, the hook rejects the posting instructions
    

The following code:

-   Shows a denomination check
    
-   Shows a balance check
    
-   Rejects any posting instructions that would result in the balance going below the prearranged `overdraft_limit`
    

chat\_bubble

-   The `advice` flag on posting instructions lets you bypass balance checks.
    
-   The `DefinedDateTime.LIVE` in the balance observation data fetcher requirements lets you access Vault data that is dated after `effective_datetime`; this is considered best practice for `pre_posting_hook` as payment requests could be processed concurrently.
    

## [](#account_attributes "Copy link to heading")Account Attributes

Smart Contracts can define [Account Attributes](/vault-core/5-8/EN/reference/accounts/account_attributes/) to enable the calculation of Account-specific values via the Core API [AccountAttributeValue](/vault-core/5-8/EN/api/core_api#accountattributevalue) resource.

The following example shows two attributes which expose the current account balance and yesterday’s closing balance.

The `attributes` metadata is declared at the top, defining "current\_balance" and "closing\_balance" Decimal type attributes. These are then used in the `attribute_hook` to return the corresponding balance. It is common practice to have multiple if/else statements to branch logic for each attribute return value.

## [](#event_types_groups_and_tags "Copy link to heading")Event Types Groups and Tags

Smart Contracts can define event types groups and tags; these correspond to Schedule groups and tags respectively. Tags can be set to produce Scheduler operation notifications, allowing the implementation of "End of Day" reporting for banks. For further information about Scheduler operation notifications, see [Tags and operation event notifications](/vault-core/5-8/EN/reference/scheduler#tags_and_operation_event_notifications).

### [](#event_types_groups "Copy link to heading")Event types groups

A scheduler group ensures that events defined in a Smart Contract are executed in a strict order and that multiple schedules within the group are not running simultaneously. Note that the scheduler first resolves the next run time for a scheduled event and then execute the scheduled jobs in the order of these timestamps. If the next run times of some scheduled events within a group match, these events will be executed in the order defined within a scheduler group. If a `scheduled_event_hook` fails and it is a member of a scheduler group, the next event within that scheduler group will be blocked and will not be executed.

See:

-   [Scheduler groups](/vault-core/5-8/EN/reference/scheduler#schedule_groups) for general information
    
-   [Metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata/) for information about how to define a Scheduler group in a Smart Contract
    
-   [SmartContractEventType](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype), [SupervisorContractEventType](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype) and, [EventTypesGroup](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#eventtypesgroup) for more information about event types and event types groups
    

*Example:* The `ACCRUE_INTEREST` event defined in a Smart Contract must complete successfully before the event `APPLY_INTEREST` is executed. The `ACCRUE_INTEREST` event occurs daily and the `APPLY_INTEREST` monthly. Before the `APPLY_INTEREST` event `scheduled_event_hook` is executed:

-   The Scheduler ensures the `ACCRUE_INTEREST` event executed successfully with the same `effective_datetime` as the scheduled `APPLY_INTEREST` event; and
    
-   Previous execution of the `APPLY_INTEREST` event was successful.
    

If either of the above is not true, the `APPLY_INTEREST` event will be blocked and will not execute.

The Smart Contract example below shows how to specify an event type group `INTEREST` and its events:

-   `ACCRUE_INTEREST` should occur daily
    
-   `APPLY_INTEREST` should occur monthly and when all `ACCRUE_INTEREST` events for the month have completed
    

### [](#event_type_tags "Copy link to heading")Event type tags

The event types defined in a Smart Contract can be tagged with Scheduler Tags. These tags are used by the Scheduler to stream out events about the account Schedules labelled with the Scheduler tag. Each event type defined in a Smart Contract can be associated with multiple Scheduler tag IDs. These Scheduler tags must be created before they can be referenced in a Smart Contract; this can be done using the [Core API](/vault-core/5-8/EN/api/core_api#scheduletag). For further information, see the [Scheduler documentation](/vault-core/5-8/EN/reference/scheduler).

*Example:* This Smart Contract code example shows how to tag event types in an account with Scheduler tag IDs. The notification for the `INTEREST_PAID` Scheduler tag ID will be produced when all `APPLY_INTEREST` events for all accounts that use this tag have completed successfully within one Schedule cycle.

## [](#events_timezone "Copy link to heading")Events Timezone

Smart Contracts can define a timezone; the timezone defined is then used when scheduling events. Once the timezone is specified for the Smart Contract, all scheduled events created by that Smart Contract are published using that timezone.

This is particularly useful where timezones differ from `UTC` or where daylight saving time applies as Vault automatically adjusts when jobs are emitted according to the timezone specified. This means Smart Contract writers do not have to offset schedules manually. If no timezone is defined, Smart Contracts default to `UTC`.

error

When scheduling events for a timezone that observes daylight saving time, we recommend that you do not choose a time that falls within the one-hour window when the clock goes forwards or backwards on the day of the seasonal time change. If you choose a time within this window, the event will not trigger when the clock goes one hour forward, or may trigger twice when the clock goes one hour backwards.

To define a timezone in a Smart Contract, the `events_timezone` variable needs to match one of the IANA timezone IDs from the *tz database*.

chat\_bubble

For further information about the `events_timezone` metadata in Smart Contracts, see the [metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#events_timezone) section. For the timezones we support in Smart or Supervisor Contracts, see [Supported Timezones](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#supported_timezones).

In the example above, `expression`, `start_datetime` and `end_datetime` consider the same timezone defined in the `events_timezone` metadata, more details in the [ScheduledEvent](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent) documentation.

chat\_bubble

All datetimes returned by Vault are Python [datetime](https://docs.python.org/3.9/library/datetime.html#datetime-objects) objects and are timezone-aware using the UTC `ZoneInfo`, even if the Contract’s `events_timezone` metadata is non-UTC. This means if you use, for example, `hook_arguments.effective_datetime` for the `start_datetime` or `end_datetime` fields, you need to change the `tzinfo` to match the `events_timezone` of the Contract, as required by the [ScheduledEvent](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent) class.

## [](#example_usage_of_supervisor_contracts_for_interest_rate_offsetting "Copy link to heading")Example Usage of Supervisor Contracts for Interest-Rate Offsetting

### [](#overview "Copy link to heading")Overview

#### [](#goals "Copy link to heading")Goals

This section describes how to use Supervisor Contracts in a simple interest rate offsetting example. This example shows how a Supervisor Contract can:

-   Collect and inspect the hook directives of the Smart Contracts being supervised
    
-   Access contract parameters and balances of the Supervisee Contracts
    
-   Override Supervisee Contract behaviour by producing new hook directives based on custom logic
    

#### [](#interest_offsetting_plan_example "Copy link to heading")Interest-offsetting plan example

This example shows a simple interest-offsetting plan that modifies the behaviour of:

-   A savings account paying monthly interest
    
-   A mortgage account charging monthly interest
    

If the balance of the savings account is higher than the balance of the mortgage account by an amount `offset_balance`, the mortgage interest charged is stopped and interest is paid to the savings account based on its effective rate and the `offset_balance` amount.

Inversely, if the mortgage balance is higher than savings account balance by an amount `offset_balance`, interest is not paid to the savings account and mortgage interest is charged on the excess debt balance `offset_balance`.

### [](#defining_supervision_structure "Copy link to heading")Defining supervision structure

#### [](#contracts "Copy link to heading")Contracts

Following some preliminary contract definitions:

Start by defining the exact types of contracts this Supervisor can manage. This is achieved via the `supervised_smart_contracts = […​]` declaration:

Where `SmartContractDescriptor` corresponds to a single Smart Contract version. In the above example, we declare that the present Supervisor Contract is compatible with managing two contract types; one savings product and one mortgage.

One of the consequences of the above declaration is that if one were to onboard an account that is not backed by any of the two contract versions above, Vault would reject such an operation.

In the next section, we discuss how such declarations are used to manage the supervision of event types.

#### [](#event_types "Copy link to heading")Event types

The Supervisor overrides the event types of the two Supervisee Contracts via the `overrides_event_types` declaration.

Once an account backed by a contract declared in `supervised_smart_contracts` is onboarded to a Plan backed by the present Supervisor Contract, its scheduled event `PAY_MONTHLY_INTEREST` or `CHARGE_MONTHLY_INTEREST` (depending on product type) stops executing. Instead, we expect the monthly execution of the Supervisor `APPLY_MONTHLY_INTEREST_OFFSETTING` event type to satisfy the intended product logic. The schedule used to execute `APPLY_MONTHLY_INTEREST_OFFSETTING` is declared similarly to a non-supervisor event type:

More details of the actual Supervisor logic are provided in the next sections, where we define the structure of the `scheduled_event_hook`.

#### [](#data_requirements_of_scheduled_event_hook "Copy link to heading")Data requirements of scheduled\_event\_hook

To execute Supervisor hooks, we have expanded the `@requires` inputs to provide a set of expressive semantics that capture cross-contract execution logic. For our working example, recall the product definition, where we consider:

-   Savings and Mortgage account balances
    
-   Savings and Mortgage account interest rates
    

which we capture in the following declaration:

Once Vault Scheduler triggers a `APPLY_MONTHLY_INTEREST_OFFSETTING` job, the Contract Service is responsible for inspecting the `@requires` declarations and collects all specified data, which are then fed into the actual `scheduled_event_hook` function.

### [](#implementing_supervisor_logic "Copy link to heading")Implementing Supervisor logic

In this section, we describe how we implement the product offsetting logic in the Supervisor `scheduled_event_hook`. In particular, we focus our attention on the different ways we can use the `vault.supervisees` object to access both parameter and hook directive information for the Supervisees.

chat\_bubble

Our example code assumes a setting where there are only two supervisees, one savings and one mortgage account. This is for the sake of code-logic simplicity, as we aim to illustrate the different uses of the `vault.supervisees` object; the system itself can support an arbitrary number of Supervisees.

The high-level overview of the `scheduled_event_hook` logic is as follows:

1.  Iterate over supervisees and distinguish which is the savings account and which is the mortgage account
    
2.  For each account, access their effective balances and compare them
    
    1.  If the savings balance is greater than the mortgage balance
        
        1.  Retrieve the savings account’s `effective_rate` from the contract parameters
            
        2.  Multiply `effective_rate` and `(savings_balance - mortgage_balance)`
            
        3.  Credit the savings account with that amount
            
        
    2.  If the mortgage balance is greater than the savings balance
        
        1.  Retrieve the mortgage account’s `effective_rate` from the contract parameters
            
        2.  Multiply `effective_rate` and `(mortgage_balance - savings_balance)`
            
        3.  Debit the mortgage account with that amount
            
        
    

To better illustrate the hook code that implements the aforementioned logic, we provide the actual Python snippet with explanatory inline comments, when appropriate:

chat\_bubble

The code is handling the case where one or both supervisee accounts are not yet on-boarded on to the plan. It is always advised to implement such case handling in all supervisor hooks, which can require supervisees data.

## [](#statements "Copy link to heading")Statements

Financial products often produce statements which reflect the financial state of the account at the end of a specified period. An example is a credit card, which calculates an outstanding balance for the statement period by summing the principal plus any fees and charges.

A statement can be generated by a Smart Contract within a scheduled event. By specifying the `fetcher_id` of a [PostingsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher) object with a suitable time range, in the [@fetch\_account\_data](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators#fetch_account_data) decorator, the posting instructions made on the account within the statement period can be retrieved and made available to the hook.

Posting instructions are retrieved according to their `value_datetime`. The `value_datetime` indicates the time the committed postings should affect the balance. However, because Vault supports the backdating of posting instructions, postings could appear within the statement cycle even if they have been committed at a later date.

Statements typically must be immutable for regulatory reasons and, once generated, they cannot be changed. To guarantee this, you can filter posting instructions by their `insertion_datetime` when generating a statement, as this field indicates when the posting was committed to the posting ledger. Posting instructions can be filtered by this attribute and omitted if the `insertion_datetime` is outside the statement period.

## [](#balance_aggregations "Copy link to heading")Balance Aggregations

Aggregated balances can be calculated using the operators `+`, `+=` and the `sum()` built-in method. These are supported in both [Balance](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) and [BalanceDefaultDict](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancedefaultdict) objects.

error

The `+=` operator updates the existing balance object, while `+` and `sum()` create and return a new object.

If you want to calculate an aggregated balance that includes the effects of both the posting instructions just added to the Postings Ledger and a newly instructed posting instruction, use the `+=` operator:

## [](#overdraft_protection "Copy link to heading")Overdraft Protection

Many US banks offer the overdraft protection feature for their customers, which links customer checking (current) and savings accounts to extend a customer’s spending allowance beyond their checking account balance and overdraft.

Overdraft protection functionality can be implemented using [pre-posting hook supervision](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hooks#pre_posting_hook). To ensure that Supervisor data fetching would have a minimal performance impact on online postings, the `pre_posting_hook` does not support the postings data requirement and only supports parameter and the optimised balances data fetcher requirements (see [About optimised data fetching](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#about_optimised_data_fetching)). The example below demonstrates how to link customer savings and checking accounts in a plan, to increase the spending limit on a checking account.

Setting up a Supervisor Contract:

1.  Create the Supervisor Contract with the `pre_posting_hook`, then configure it to supervise the checking account `pre_posting_hook` with `INVOKED` mode and the savings account with no hook supervision (just linked to the Supervisor). (For `INVOKED` mode, see [SupervisionExecutionMode](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#supervisionexecutionmode).)
    
2.  In the Supervisor Contract `pre_posting_hook`, fetch all checking and savings accounts `LIVE` balances.
    
3.  Check the new posting instructions `balances` effect.
    
4.  Use the `get_hook_result` method to get the outcome of the checking account `pre_posting_hook` execution.
    

chat\_bubble

The Supervisor Contract `pre_posting_hook` will only be executed when the checking account is targeted with new posting instructions, but can still fetch data from the savings accounts, which are also supervised by this plan.

To supervise the Smart Contract `pre_posting_hook`, the Supervisor Contract code must specify a new attribute `supervised_hooks` in the [SmartContractDescriptor](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontractdescriptor). This attribute currently only supports the `pre_posting_hook`.

For posting instructions that target different accounts:

-   the account’s `pre_posting_hook` `posting_instructions` argument attribute will contain only those that target the specific account
    
-   The plan’s `pre_posting_hook` `supervisee_posting_instructions` argument attribute will contain all posting instructions that target accounts that have their `pre_posting_hook` supervised by the plan
    

You can access the posting instructions for a particular `account_id` from the `supervisee_posting_instructions` argument attribute by simply accessing list of posting instructions by the `account_id` key. Then the `balances()` can be accessed on each individual posting instruction for each different `account_id` without passing the `account_id` argument.

## [](#example_usage_of_supervisor_contracts_for_rebalancing "Copy link to heading")Example Usage of Supervisor Contracts for Rebalancing

Many Contracts are required to perform additional fund movements across account addresses when posting instructions have been accepted. These account housekeeping operations are known as rebalancing and may span across different accounts.

chat\_bubble

For an example of rebalancing across different addresses in a single account, see [example](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#rebalancing).

Rebalancing can be performed across multiple accounts by supervising the [post\_posting\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hooks#post_posting_hook)s under the same plan. The example below demonstrates how to rebalance funds from a customer credit account to its loan account, to avoid the interest rate applied to the credit card and to benefit from the lower interest rate of the loan account.

### [](#supervisor_contract_setup "Copy link to heading")Supervisor Contract setup

Create the Supervisor Contract with the `post_posting_hook` and configure it to supervise specific Smart Contract Versions.

chat\_bubble

To supervise the Smart Contract `post_posting_hook`, the Supervisor Contract code must specify an attribute `supervise_post_posting=True` in the [SmartContractDescriptor](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontractdescriptor).

chat\_bubble

Although the above Supervisor Contract supervises two Smart Contracts, the `post_posting_hook` is only supervised on the Smart Contract that backs the credit card, not the Smart Contract that backs the loan. That means that only posting instructions on the credit card account trigger post-posting supervision. However, all of the Supervisor Contract hooks can access both accounts' data in the `vault.supervisees` dictionary.

### [](#implementing_the_supervisor_post_posting_hook "Copy link to heading")Implementing the Supervisor `post_posting_hook`

When the credit card account `post_posting_hook` is supervised, all posting instructions on the account will instead be directed to the Supervisor Contract `post_posting_hook`. To rebalance specific types of posting instructions from the credit card to the loan account, the following steps must be implemented in the Supervisor hook:

1.  Determine if there are any outgoing posting instructions of a specific type that need to be rebalanced.
    
2.  Instruct a posting instruction to transfer the full balance of the specific type of posting instruction from the credit card account to the loan account.
    

For the purpose of this example it is assumed that:

-   A posting instruction type is set in the `instruction_details` attribute value with `spending_type` key.
    
-   The Supervisor Contract will only rebalance the specific posting instructions type "LOAN\_ON\_CARD".
    

chat\_bubble

As it already happens for Smart Contracts `pre_posting_hook` and `post_posting_hook`, the `post_posting_hook` of the Supervisor Contract will not be triggered for any posting instructions that are originated from the target or the initiator account’s Contract code.

chat\_bubble

The `supervisee_posting_instructions` hook argument that is received in the `post_posting_hook` of the Supervisor Contract contains all posting instructions for all the accounts where the `post_posting_hook` is supervised. In the example above, the hook argument `supervisee_posting_instructions` will only include the incoming/outgoing posting instructions that are targeting the credit card account.

## [](#updating_an_event_type "Copy link to heading")Updating an Event Type

The directives [UpdateAccountEventTypeDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective) and [UpdatePlanEventTypeDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective) can be used for updating event types in Smart Contracts and Supervisor Contracts respectively.

chat\_bubble

These directives are the only way to update a scheduled event in the Contracts Language API 4.x, as the [amend\_schedule](/vault-core/5-8/EN/reference/contracts/contracts_api_3xx/smart_contracts_api_reference3xx/vault#amend_schedule) and [remove\_schedule](/vault-core/5-8/EN/reference/contracts/contracts_api_3xx/smart_contracts_api_reference3xx/vault#remove_schedule) directives are no longer supported.

Using the directives, an existing event type can have its `expression`, `schedule_method`, `end_datetime`, or `skip` flag modified. There are number of reasons Contract needs to modify an event type, most common are reschedule event to not fall on a "red day" (non-banking day) or change event type schedule, if the parameter value defining the schedule has changed.

### [](#smart_contract_event_schedule_and_end_datetime_update_due_to_parameter_value_change "Copy link to heading")Smart Contract event schedule and end datetime update due to parameter value change

This example shows an update of the event type if certain parameters are updated.

If the parameter `key_date` has been changed, the `post_parameter_change_hook` updates the `expression` of the `MONTHLY_EVENT_FEE` event type to run on the new day specified in `key_date`.

If the parameter `monthly_fee_expiry_date` has been changed, the `post_parameter_change_hook` updates the `end_datetime` of the `MONTHLY_EVENT_FEE` event type to the date specified in `monthly_fee_expiry_date`.

chat\_bubble

The `end_datetime` has to be set for a future datetime (compared to now). Also once the `end_datetime` has been reached, the schedule cannot be re-enabled using the `update_event_type` directive, it can only be re-created via the `conversion_hook`.

chat\_bubble

In the example above, the Contract `events_timezone` is non-UTC, therefore, the `end_datetime` in the `UpdateAccountEventTypeDirective` has to be a `datetime` timezone-aware object with the `tzinfo` of the Contract’s timezone ("US/Pacific").

### [](#supervisor_contract_reinstructs_supervisees_update_event_type_directives "Copy link to heading")Supervisor Contract reinstructs supervisees' update event type directives

This example shows a Supervisor Contract which is reinstructing the schedule updates for its supervisees.

chat\_bubble

The `events_timezone` on supervisee accounts is accessible on the `supervisee.events_timezone` attribute and can be used when instructing update event type directives, as these directives need to have the supervisee accounts events timezone `tzinfo`.

## [](#using_contract_modules_in_a_smart_contract "Copy link to heading")Using Contract Modules in a Smart Contract

The example below demonstrates how to use [Contract Modules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview#what_is_a_contract_module) to create code that can be used by any number of Smart Contracts.

### [](#contract_module_code "Copy link to heading")Contract Module code

Contract Module code can be used to define a collection of helper functions with some limitations outlined [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview#contract_module_limitations).

This example shows a simple Contract Module that provides some rounding operations as functions. These rounding operations are commonly used for interest calculations within Smart Contracts.

### [](#smart_contract_declaration_with_required_contract_modules "Copy link to heading")Smart Contract declaration with required Contract Modules

To use a Contract Module in a Smart Contract, use standard Python syntax to import the module alias from the contract\_modules. See [Using Contract Modules in Smart Contracts](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview#using_contract_modules_in_smart_contracts).

This example shows a required Contract Module being declared and used in a Smart Contract.

## [](#delay_eod_scheduled_events_in_smart_contracts "Copy link to heading")Delay EOD Scheduled Events in Smart Contracts

Banks may want to delay some of their End of Day (EOD) accounts or plans scheduled events for multiple reasons, for example, to wait for a delayed bulk settlement from a payments integration upstream from Vault or for another infrastructural problem. The account or plan scheduled job delay is controlled by the Core API via the Create/Update [AccountScheduleTag](/vault-core/5-8/EN/api/core_api#accountscheduletag) endpoints using the `test_pause_at_timestamp` attribute. It is possible to access the `test_pause_at_timestamp` value via the `hook_arguments` object attribute `pause_at_datetime` on the `scheduled_event_hook`. The `pause_at_datetime` can be set on an `event_type` and refers to the time to which the `event_type` scheduled job was delayed to by a scheduled tag.

### [](#delay_eod_scheduled_events_in_smart_contracts_2 "Copy link to heading")Delay EOD scheduled events in Smart Contracts

The example below demonstrates a Smart Contract with an EOD `ACCRUE_INTEREST` event, in which current account balance is retrieved at `cut_off_datetime`.

If no scheduled tag is set or the `test_pause_at_timestamp` is `None`, `cut_off_datetime` is set to `effective_datetime`.

If a scheduled tag is set and the `test_pause_at_timestamp` is *before* the `next_run_timestamp`, the schedule is paused until the `test_pause_at_timestamp` is modified to be after the `next_run_timestamp`.

If a scheduled tag is set and the `test_pause_at_timestamp` is *after* the `next_run_timestamp`, the schedule is run and the `cut_off_datetime` is set to `pause_at_datetime`.

The possible values for `cut_off_datetime` are:

-   `effective_datetime` - the datetime when the `scheduled_event_hook` was originally scheduled to run - the `next_run_timestamp` of the scheduled job
    
-   `pause_at_datetime` - the datetime to which scheduled job was delayed to because `test_pause_at_timestamp` was applied to the `EOD` scheduler tag. This will be `None` if there is no scheduler tag set
    

chat\_bubble

The `effective_datetime` of the `scheduled_event_hook` is always the `next_run_timestamp` of the schedule; it does not change, even if scheduler tags with delays are applied. The [last\_execution\_datetime](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#last_execution_datetime) is the original `effective_datetime` (the `next_run_timestamp`) of the last `scheduled_event_hook` execution.

## [](#end_of_month_schedules "Copy link to heading")End of Month Schedules

chat\_bubble

The End of Month schedules feature is supported for both Smart and Supervisor Contracts. You can also use End of Month schedule within the [Simulator](/vault-core/5-8/EN/reference/contracts/contract_simulation) to give an indication of timings for the generated schedules.

You can use the `EndOfMonthSchedule` native type to define recurring monthly schedules, for example monthly interest accrual. The benefit of the `EndOfMonthSchedule` definition is the addition of a failover mechanism. The failover mechanism allows you to provide a strategy for overriding a schedule definition when it falls on an invalid date, such as a bank holiday. This is explained by the example below.

### [](#end_of_month_schedules_example "Copy link to heading")End of month schedules example

Before the `EndOfMonthSchedule` was introduced, if you wanted to define a recurring schedule every month, then you needed to trigger the schedule each month and verify that the next datetime is valid, amending the schedule if necessary.

For example, a schedule that runs on the 30th day of every month would need Contract logic that checks the next run time of the schedule and amends it when that date does not exist. This additional logic added boilerplate code across Contracts which decreased maintainability and added load on the system, decreasing performance.

Using the `EndOfMonthSchedule`, if you want the same recurring schedule with a failover that runs on the next valid day instead of the specified date, you can define it with the following:

This event will run at 12 PM on the 30th of every month, except for the 30th of February; the event will be run on the 1st of March instead. The failover strategy can be either `FIRST_VALID_DAY_AFTER` or `FIRST_VALID_DAY_BEFORE`, which allows the Contract Writer to specify which alternative date the schedule should run on.

The `EndOfMonthSchedule` is also a valid attribute within [UpdateAccountEventTypeDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective) and [UpdatePlanEventTypeDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective), which you can use to update the schedule details of an event type, for example:

chat\_bubble

You can only use `EndOfMonthSchedule` with the Contract Metadata attribute `events_timezone` set to its default of UTC.

## [](#account_conversion "Copy link to heading")Account Conversion

The [conversion\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#conversion_hook) can instruct directives to be committed after the contract is upgraded to a new version. Also, this hook has to specify how to handle existing account scheduled events conversion, by persisting or recreating them.

chat\_bubble

Existing schedules being returned from a conversion cannot have their `start_datetime` modified. New schedules returned from a conversion must specify a `start_datetime` that is greater than or equal to the `effective_datetime` of conversion.

### [](#example_persisting_or_recreating_schedules_during_account_conversion "Copy link to heading")Example persisting or recreating schedules during account conversion

The code below outlines two arbitrary scheduled events `MONTHLY_EVENT_FEE` and `MONTHLY_EVENT_INTEREST` that have been created in the Smart Contract version `1.0.0` via the `activation_hook`.

A new version `1.1.0` of the Smart Contract above is shown below. The scheduled events from the previous Smart Contract `1.0.0` are available via the `hook_arguments` attribute of the `conversion_hook`. By accessing the `hook_arguments.existing_schedules` in the `conversion_hook`, the `MONTHLY_EVENT_FEE` event can be persisted after the account conversion and the event `MONTHLY_EVENT_INTEREST` can be rescheduled by modifying the schedule `expression`. Note that all the scheduled events defined by a Contract need to be returned via the [ConversionHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#conversionhookresult) object.

## [](#future_dated_parameter_values "Copy link to heading")Future-dated Parameter Values

You can create a parameter value effective from a future timestamp or update a future-dated parameter value to cancel it using the [Core API endpoints](/vault-core/5-8/EN/api/core_api#ParameterValue). In these cases, the [`pre_parameter_change_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_parameter_change_hook) can validate the parameter values. The [`pre_parameter_change_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_parameter_change_hook) runs when the [Core API endpoint](/vault-core/5-8/EN/api/core_api#parametervalue) is called, and the [`post_parameter_change_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_parameter_change_hook) runs after the new parameter value becomes effective.

error

-   Data fetching is currently not supported in the [`pre_parameter_change_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_parameter_change_hook) for future-dated value updates and cancellations.
    
-   Fetching future-dated parameter values is not recommended, because the accuracy of the fetched values cannot be guaranteed; it’s not possible to control or foresee the parameter value changes that might happen in the future.
    

### [](#code_example "Copy link to heading")Code example

The Smart Contract below demonstrates the implementation of validation logic in the `pre_parameter_change_code` hook, including validation for future-dated parameter values and cancellations. More specifically, it rejects any:

-   value cancellations of the `monthly_limit` parameter.
    
-   future-dated parameter value updates that are negative.
    
-   non-future-dated `monthly_limit` parameter value updates that are not smaller than the account’s monthly purchases.
    

## [](#internal_account_processing_label "Copy link to heading")Internal Account Processing Label

chat\_bubble

Multiple Processing Groups are only available as an Extension. Contact your Thought Machine representative for more information.

Set the internal account processing label on a posting instruction to reference an internal account without needing to identify the [Processing Group](/vault-core/5-8/EN/reference/processing_groups/) that the account belongs to. Use `internal_account_processing_label` in place of the `account_id` when you make posting instructions for an internal account in a Processing Group - the label must match the processing label belonging to the same Processing Group as the target account.

For fetched posting instructions within a Smart Contract, if `internal_account_processing_label` is set, then `account_id` is already resolved by Vault Core and set on the instruction.

### [](#creating_a_posting_using_the_internal_account_processing_label "Copy link to heading")Creating a Posting using the Internal Account Processing Label

Example: A bank charges a monthly fee of GBP 10.00 to the customer account, and moves the GBP 10.00 to the Processing Group’s internal account associated to the `fee_account` internal account processing label.

## [](#non_schedule_blocking_posting_rejections "Copy link to heading")Non Schedule Blocking Posting Rejections

This section describes how you can configure your products to not block schedules when postings instructed as part of schedule events are rejected.

By default, schedule jobs in Vault will go into the failed status if the postings instructed as part of the corresponding schedule event are rejected. This results in the schedule being marked as failed, preventing Vault from producing subsequent jobs for that schedule event. However there may be valid business cases for allowing the schedule to continue operation after postings have been rejected. For example, if an interest accrual is rejected because an account currently has a [restriction](/vault-core/5-8/EN/api/core_api#restrictions) applied, then the contract can be configured so that those posting rejections do not block the schedules.

### [](#code_example_2 "Copy link to heading")Code example

#### [](#smart_contract "Copy link to heading")Smart Contract

The Smart Contract code below demonstrates how to instruct a `PostingInstructionsDirective` from a `schedule_event_hook` to prevent subsequent jobs for the scheduled event being blocked, and the schedule being marked as failed, in the event that the posting instruction batch being instructed is rejected by Vault due to:

-   a Restriction of type `RESTRICTION_TYPE_PREVENT_DEBITS` or `RESTRICTION_TYPE_PREVENT_CREDITS` being present or
    
-   the account is closed at the time of instruction
    

We specify the set of `PostingInstructionRejectionReasons` in the `non_blocking_rejection_reasons` field of `PostingInstructionsDirective`s that we return from the `scheduled_event_hook`.

#### [](#supervisor_contract "Copy link to heading")Supervisor Contract

The Supervisor Contract code below demonstrates how to override the `non_blocking_rejection_reasons` from the supervised `scheduled_event_hook` by adding and removing `PostingInstructionRejectionReason`s from the set that is returned from the supervisees' `scheduled_event_hook`.

error

Returning `PostingInstructionsDirective`s with the field `non_blocking_rejection_reasons` set to a non-empty value for hooks other than `scheduled_event_hook` will cause an error at runtime for that contract hook.