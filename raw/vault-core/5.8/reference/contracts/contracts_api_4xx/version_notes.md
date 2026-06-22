---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes"
title: "Major version notes"
scraped_at: "2026-06-17T15:39:56.031Z"
images: 0
---

# Major version notes

This section introduces the Contracts Language API major version 4 release and covers the:

-   [Key benefits](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#key_benefits) of the new version
    
-   [Key changes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#key_changes) in the API
    
-   [Conversion guide](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#conversion_guide) from the major API version 3 to 4
    
-   The [release notes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#release_notes) of any new features in the API version 4
    

## [](#contracts_language_api_4_benefits "Copy link to heading")Contracts Language API 4 benefits

The Contracts Language API 4 is a new major version of the API, which introduces some major backwards incompatible changes. This new major version brings significant performance improvements and user benefits, such as giving easier and faster Contracts development, with a better developer experience.

The key benefits are:

-   Significant improvement in Python contract code execution performance.
    
-   Contracts are now valid Python modules:
    
    -   all Contracts Language API objects are available in the `contracts_api` Python package;
        
    -   all Contracts Language API objects referenced in the code must be imported;
        
    -   autocomplete features of IDEs will work on the Contract code;
        
    -   type annotations and type hints can be used in the Contract code;
        
    -   standard Python linters will help identify stylistic and logical errors;
        
    -   no code changes to locally unit-tested Contract is needed before upload to Vault.
        
    
-   The Contracts Language API Python implementation (including balances calculation, classes init and majority of validations) is available to the Contract writer via an SDK (Software Development Kit) and a `contracts_api` Python package.
    
-   The Contracts Language API has moved away from the more restrictive validations of Contracts Language API 3 to early indications of errors through standard developer tooling. It has also moved away from helper functions to give the Contract writer the flexibility to make explicit definitions.
    
-   The Contracts Language API has been designed so that its functionality can be extended in future Vault releases.
    

### [](#performance_improvements "Copy link to heading")Performance improvements

Version 4 of the Contracts Language API brings multiple performance improvements:

-   The blanket run-time type checking has been replaced with targeted custom validation only where necessary.
    
-   Multiple essential `vault` methods have been optimised and the performance improvements confirmed with contract execution benchmarking:
    
    -   `get_balances_timeseries` is almost twice as fast as the Contracts Language version 3 equivalent when accessing the latest balance value of a specific coordinate.
        
    -   The `get_posting_instruction` and `get_client_transactions` showed almost three times better performance compared to version 3, when accessing balances for each of the posting instructions or client transactions within the data interval.
        
    
-   The posting related custom types have been refactored and changed, so that they are independent of historical data when evaluating their attributes and balances. These changes enable a significant performance boost for hooks that access posting data or that relate to a postings journey. For example, the performance of the `pre_posting_hook` execution with no data fetching was almost four times faster compared to version 3.
    

## [](#contracts_language_api_4_changes "Copy link to heading")Contracts Language API 4 changes

The key Contracts Language API 4 major version changes are summarised in this section.

The Contracts Language API 4 comes with a useful [Contracts SDK](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#contracts_sdk) which allows you to install the `contracts_api` Python package locally to support Contract development.

Contracts Language API 4 supports standard Python imports syntax of:

-   [Allowed native modules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/native_objects/)
    
-   [Contract modules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview/) uploaded onto Vault (or available locally in unit tests)
    
-   [Contracts Language API objects](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/) from the `contracts_api`
    

### [](#hook_names_and_changes "Copy link to heading")Hook names and changes

-   [All hooks have been renamed](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks) to make their names consistent and more aligned with Vault terminology
    
-   The [`execution_schedules` hook has been replaced with extended activation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/) and conversion hooks that can now return the accounts (or plans) `event_types` schedules.
    

### [](#missing_and_empty_hooks "Copy link to heading")Missing and empty hooks

Missing hooks in a Contracts Language API 4 Smart Contract or a Supervisor Contract can cause certain journeys in Vault Core to fail. The following applies to both Smart Contracts and Supervisor Contracts:

-   You cannot create a Contract Version that defines `event_types` but does not contain the `scheduled_event_hook`
    
-   You cannot activate an Account or Plan on a Contract Version that defines `event_types` but does not contain the `activation_hook`
    
-   You cannot convert an Account or Plan onto a Contract Version that defines `event_types` but does not contain the `conversion_hook`
    

Unless a missing hook precludes successful Vault Core operations, do not include empty hooks because even an empty hook will result in hook executions, incurring unnecessary overheads.

### [](#hook_arguments "Copy link to heading")Hook arguments

-   All hooks now take two arguments:
    
    -   `vault`: The relevant [Vault object](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault/)
        
    -   `hook_arguments`: The Arguments class instance for [Hooks](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/).
        
        Note that `hook_arguments` has a single `effective_datetime` attribute for any given hook execution.
        
    
-   [The `scheduled_event_hook` argument now has the `pause_at_datetime` attribute](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#ScheduledEventHookArguments) , and the `vault` method `get_scheduled_job_details` has been removed.
    
-   [The `pre_posting_hook` and `post_posting_hook` arguments](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#PrePostingHookArguments) have the `posting_instructions` and new affected `client_transactions` attributes.
    
-   The `pre_posting_hook` and `post_posting_hook` in Supervisors can access new posting instructions and their affected client transactions for each supervisee and get their balances via attributes:[`supervisee_posting_instructions` and `supervisee_client_transactions`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#SupervisorPrePostingHookArguments).
    
-   [The `pre_parameter_change_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#PreParameterChangeHookArguments) has been updated to only receive parameter values rather than `Parameter` class instances via `hook_argument`.
    
-   [The `conversion_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#ConversionHookArguments) now takes the previous Contract version account’s or plan’s schedules data as a `hook_argument` attribute.
    

### [](#hook_return_values_directives_as_classes "Copy link to heading")Hook return values, directives as classes

-   All hooks now return an instance of [a hook specific Results class](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks/), which can return data, directives or rejection from a hook, depending on the hook type.
    
-   All supported Smart and Supervisor Contracts directives are now instructed by returning [an instance of a specific Directive class via the hook Result class attribute.](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#AccountNotificationDirective) The `vault` methods used to instruct directives have been removed.
    
-   Raising exceptions is not supported in any Contract hooks, however you can return [Rejection](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection) to reject the Vault data change proposed, by using the following hooks:
    
    -   `deactivation_hook`
        
    -   `activation_hook` (including supervisors)
        
    -   `pre_parameter_change_hook`
        
    -   `pre_posting_hook` (including supervisors)
        
    -   `conversion_hook` (including supervisors)
        
    
-   [The `pre_parameter_change_hook` can now only return `Rejection` or None result](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#pre_parameter_change_hook), the ability to return modified `Parameter` class instances has been removed.
    
-   Both the [`activation_hook` and `conversion_hook` now return account or plan schedules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks); this replaces the `execution_schedules` hook.
    
-   [The `deactivation_hook` can return the optional `Rejection`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#deactivation_hook), which would reject the account closure.
    

### [](#vault_class_methods_changes "Copy link to heading")Vault class methods changes

-   [The `vault` methods that were instructing directives have been replaced with specific Directive classes.](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#ScheduledEvent) The exceptions are `amend_schedules`, `remove_schedules`, `add_account_note` and `start_workflow`, which have been removed, making sure there are different ways to solve the same client use cases. For example, the `amend_schedules` and `remove_schedules` directives have been replaced by the `UpdateAccountEventTypeDirective`, `UpdatePlanEventTypeDirective` and `ScheduledEvent` types; or the `add_account_note` and `start_workflow` directives have been replaced with `AccountNotificationDirective` and `PlanNotificationDirective` that enables the same client use cases to be implemented.
    
-   [Some `vault` methods have been renamed to better reflect what kind of data or data type is being returned](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault#get_hook_execution_id), for example, `get_plan_opening_datetime` or `get_last_execution_datetime`.
    
-   Some `vault` attributes, methods or method attributes have been removed as their return data can be retrieved in a different way, as follows:
    
    -   The `get_scheduled_job_details` has been replaced with the [`hook_arguments` attribute](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#ScheduledEventHookArguments).
        
    -   The `include_proposed` argument has been removed from postings data methods to make the data provided via `requires` and `fetch_account_data` consistent; it has been replaced with [the `client_transaction` attribute on the `hook_arguments`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#SupervisorPrePostingHookArguments).
        
    -   The `get_posting_batches` method has been removed as there is no `batch` concept in the 4.0 Contracts Language API.
        
    -   The `localize_datetime` has been removed as the timezones handling in the Contracts has now changed (see Timezone handling changes section below).
        
    -   The supervisee methods `get_hook_return_values` and `get_hook_directives` have been replaced with [`get_hook_result`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_hook_result) .
        
    -   The Smart Contracts Account `vault` object now has `account_id`, `tside`, and `events_timezone` [attributes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#attributes).
        
    -   [The `get_balances_timeseries` method](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries) has been modified to now return a defaultdict of the `BalanceCoordinate` to the `BalanceTimeseries` instance for the coordinate.
        
    -   [The `get_client_transactions` method](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_client_transactions) now returns a dict of the `unique_client_transaction_id` to the instance of the `ClientTransaction`.
        
    

### [](#timezone_handling_changes "Copy link to heading")Timezone handling changes

-   The `pytz` library has been replaced with `zoneinfo` for timezone handling in Contracts.
    
-   [`zoneinfo.ZoneInfo`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/native_objects) is an allowed native module of the Contracts Language API 4.
    
-   All input and output `datetime` objects within the Contracts (except schedules-related classes, see next bullet point) are now timezone-aware and in `UTC`.
    
-   The schedules-related classes [`ScheduledEvent`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent), [`UpdateAccountEventTypeDirective`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateaccounteventtypedirective) and [`UpdatePlanEventTypeDirective`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#updateplaneventtypedirective) have attributes of type `datetime` which are timezone-aware. The [events\_timezone](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) is inherited from the [Processing Group](/vault-core/5-8/EN/reference/processing_groups), if set. Otherwise, the [events\_timezone](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) can be set as a field defined in the [Smart](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#events_timezone) or [Supervisor](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/metadata#events_timezone) Contract metadata. If neither of these is set, [vault.events\_timezone](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#events_timezone) defaults to UTC.
    
-   As in 3.x versions, for Contracts with non-UTC [`events_timezone` metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#events_timezone), schedules' CRON expression attributes are expected to be in the Contract timezone.
    

### [](#metadata_attribute_changes "Copy link to heading")Metadata attribute changes

-   [The `event_type` metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) information has to be statically defined for any schedules returned from `activation_hook` or `conversion_hook` for Contract scheduled events.
    
-   [The `version` metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#version) attribute is mandatory in Contracts code and also has to be unique per each Smart Contract Product ID or Supervisor Contract ID.
    
-   [The `display_name`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata/) can only be set via Core API and does not get overridden with metadata set in the Contract code. Also, a "doc-string" of a Contract does not override any Core API fields but rather is just stored within the Contract code.
    

### [](#optimised_data_fetching "Copy link to heading")Optimised data fetching

Optimised data fetching (using `fetch_account_data` decorator) is the only supported way to get `postings` and `balances` data for Smart Contracts.

### [](#postings_data_classes_changes "Copy link to heading")Postings data classes changes

The postings data classes (posting instruction classes, `ClientTransaction`, `ClientTransactionEffects` and `PostingInstructionsDirective`) have changed:

-   The `batch` concept has been removed in the Contracts Language API making it abstracted for the Contract writers.
    
-   All different types of posting instructions are represented via [different classes that have the attributes relevant to that instruction type and methods](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#CustomInstruction), exposing indirect or output values of that instruction type. The posting instruction class names match the Core API instruction type names.
    
-   [The `ClientTransaction` and `ClientTransactionEffects` classes' methods and attributes have been modified](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#ClientTransaction) to make the client transaction data more user-friendly. The `ClientTransactionEffectsDefaultDict` has been removed and the effect method modified to return the `ClientTransactionEffects` directly.
    
-   The `PostingInstructionBatchDirective` has been replaced with the [`PostingInstructionsDirective` class](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#PostingInstructionsDirective) which allows instructing up to 64 `CustomInstructions` with up to 64 [`Posting` objects](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#posting) each.
    

### [](#contracts_language_api_4_supports_processing_groups_in_vault_core_5 "Copy link to heading")Contracts Language API 4 supports Processing Groups in Vault Core 5

As of Vault Core 5, there is a single default [Processing Group](/vault-core/5-8/EN/reference/processing_groups/) (PG) to which all the accounts in the deployment are associated.

PGs provide banks with a simple means to instruct global operational actions that impact all accounts domiciled within a group (for example, pausing all End of Day (EOD) operations).

error

Setting the Processing Group timezone is optional, and requires careful consideration. If you decide to set the Processing Group timezone; it is critical to set the timezone correctly. When a Processing Group timezone is set, it becomes non-mutable. This means that the timezone used by underlying Accounts and corresponding Schedules in the Processing Group cannot be changed.

### [](#contracts_language_api_4_supports_high_volume_accounts_in_vault_core_5 "Copy link to heading")Contracts Language API 4 supports High-volume Accounts in Vault Core 5

chat\_bubble

High-volume Accounts are only available as an Extension. Contact your Thought Machine representative for more information.

High-volume Accounts are corporate Customer Accounts which can be used for high-throughput offline Postings activity.

As of Vault Core 5.6, Contracts Language API 4 (CLv4) supports the use of Smart Contracts dedicated to high-volume Accounts. For more information, see [Smart Contracts for high-volume Accounts](/vault-core/5-8/EN/reference/accounts/high_volume_accounts#smart_contracts_for_high_volume_accounts).

## [](#conversion_guide "Copy link to heading")Conversion Guide

If you are a first time user of the Contracts Language API and planning to write new products with it, you can skip this section - however, before writing new products, read [Smart Contracts overview](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/overview/), [Supervisor Contracts Overview](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_overview/), [Contracts Modules overview](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview/), [General concepts](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts/) sections, and the [Development and testing](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing/) section. If you already have products written in Contracts Language API version 3, as well as accounts and plans based on such products, this section explains how to translate and convert these on to the new major API version. Converting the existing products, accounts and plans consists of these high level steps:

-   Translating the Contract
    
-   Testing and deployment
    
-   Converting accounts and plans
    

### [](#translating_the_contract "Copy link to heading")Translating the Contract

error

Before starting, ensure you have plenty of [simulation](/vault-core/5-8/EN/reference/contracts/contract_simulation/) and E2E tests written for the product you are planning to translate. These tests will allow you to ensure that the behaviour of the translated Smart Contracts, Supervisor Contracts and the Contract Modules is unchanged.

When translating your products from Contracts Language API major version 3 to 4:

-   Refer to these documentation sections: [key version 4 changes](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#key_changes), [Smart Contracts API](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/), [Supervisor Contracts API](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/), [Contracts Modules API](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_api_reference4xx/), [Common types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/), and [Common Examples](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples/).
    
-   Use the [Contracts SDK](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#contracts_sdk) for unit testing and development of the version 4 products, read [Best Practices](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines/) and [Performance considerations](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/performance_considerations/) to get the best out of the improvements in the API version 4.
    
-   *Do not* introduce any new features when translating products from version 3 to version 4; this will minimise the risk of introducing bugs in the Contract code.
    
-   Simulation and E2E tests should be used as integration tests to ensure the translation of the products did not introduce any behaviour changes to the accounts or plans. This fully guarantees that the product behaves as expected when it’s backing a customer account. Minimal or no changes should be required for these tests when translating your products.
    

### [](#testing_and_deployment "Copy link to heading")Testing and Deployment

Rely on three levels testing of Contracts when translating your products:

-   *Unit tests* will need to be fully rewritten as they depend on the Contracts Language API version custom types and API. Use the `contracts_api` Python package available in the [Contracts SDK](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#contracts_sdk) for unit tests.
    
-   *Contracts Simulation tests* are Contracts Language API version agnostic tests that test the product’s behaviour, features and business logic. Minimal or no changes should be required for these tests when translating your products.
    
-   *E2E tests* are Contract tests that are triggered using the [Core API](/vault-core/5-8/EN/api/core_api/) endpoints. To test your translated products end-to-end, you should open new accounts and plans and then test their behaviour by triggering various accounts journeys over time.
    

chat\_bubble

Do not upload the new translated Smart Contracts, Supervisor Contracts and Contract Modules [onto Vault](/vault-core/5-8/EN/reference/contracts/introduction#deployment_in_vault) for the E2E testing until the unit and simulation tests for the translated products are passing.

### [](#converting_accounts_and_plans "Copy link to heading")Converting accounts and plans

After the translated Smart, Supervisor Contracts and Contract Modules have been well tested and uploaded to Vault, you will want to convert accounts and plans to use these.

#### [](#convert_accounts "Copy link to heading")Convert accounts

chat\_bubble

If any translated Smart Contracts use Contract Modules, you also will need to translate the [Contract Modules](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview#contract_module_limitations) to version 4 as the Smart Contracts on `api` version 4 are incompatible to the Contract Modules on version 3. Remember to also create a [SmartContractModuleVersionLink](/vault-core/5-8/EN/api/core_api#smartcontractmoduleversionslink) for the translated products before creating or converting accounts to use these products.

When converting accounts and plans:

1.  Use standard account or plan conversion endpoints to convert [an account](/vault-core/5-8/EN/api/core_api#accountupdate), [multiple accounts](/vault-core/5-8/EN/api/core_api#accountmigration) [a plan](/vault-core/5-8/EN/api/core_api#planupdate) or [multiple plans](/vault-core/5-8/EN/api/core_api#PlanMigration). to the translated products.
    
2.  Start by converting testing accounts: convert few testing accounts, verify successful conversion (for example, the status of the conversion, account and plan schedules updated correctly, account parameters have desired values and so on) and then convert all testing and internal accounts to the translated products.
    
3.  When conversion has been tested on multiple test and internal accounts, convert some customer accounts and then verify that the conversion was successful following similar steps as in previous stage.
    
4.  Only when the conversion is confirmed to be successful on some customer accounts, convert all of your customer accounts to the translated products.
    

#### [](#convert_supervised_accounts_and_plans "Copy link to heading")Convert supervised accounts and plans

chat\_bubble

If you base a plan on a [Supervisor Contract](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_overview#what_is_a_supervisor_contract) in `api` version 4, that plan cannot supervise an account based on a Smart Contract in `api` version 3; and vice versa. This is due to significant changes between versions.

When converting accounts supervised by plans:

1.  Translate the Smart and Supervisor Contracts and fully test them.
    
2.  Upload translated Smart Contract to Vault and capture the ID of the Smart Contract template.
    
3.  Update the translated Supervisor Contract code so that it can supervise the previously uploaded Smart Contract.
    
4.  Upload the translated Supervisor Contract to Vault.
    
5.  Disassociate supervised accounts from plans that you want to convert to the translated products.
    
6.  Convert accounts to the new Smart Contracts.
    
7.  Convert the plan to the new Supervisor Contract.
    
8.  Associate the accounts back to the plan.
    

## [](#release_notes "Copy link to heading")Release notes

The Contracts Language API major version 4 has a new versioning strategy by which new features are introduced. Contracts Language API version 4 will be extended so that:

-   There are no minor or patch versions introduced to the Contracts API version 4
    
-   New backwards compatible features are introduced to the same API version `4.0.0` and are versioned using the Vault releases
    
-   All accounts and plans are using the same Contracts Language API version 4 for the contract execution, however, new add-on Contracts Language API features do not change the behaviour of any existing accounts or plans
    
-   Essential bug fixes that may be backwards incompatible are immediately applied to all accounts and plans contracts execution following a Vault upgrade
    

chat\_bubble

When upgrading to a new Vault release, always upgrade the `contracts_api` package from the [Contracts SDK](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing#contracts_sdk). and run unit tests on all your Smart Contracts, Supervisor Contracts and Contract Modules. This helps to ensure none of your products were relying on a bug that is fixed in a particular Vault release.

error

Make sure that you run [Contract Simulation](/vault-core/5-8/EN/reference/contracts/contract_simulation/) and end-to-end tests using the [Core API](/vault-core/5-8/EN/api/core_api) to ensure no add-on features introduced to the Contracts Language API changed the behaviour of any of your products due to name clashes. This could happen in rare edge cases, when for example a helper method defined in Smart Contract code is named exactly as a new Contracts Language API `hook` that is introduced with a new Vault release. Note that in cases like these, the issue can be caught in Contract Simulation tests or when uploading new products onto Vault via Core API.

See the release notes for new Contracts Language API version 4 features below and the Vault version in which they were introduced.

   
| Vault release version | API status | Language | Release notes |
| --- | --- | --- | --- |
| 
4.5.0

 | 

ACTIVE

 | 

CPython 3.9

 | 

Initial new [major version release](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes).

 |
| 

4.6.0

 | 

ACTIVE

 | 

CPython 3.9

 | 

The [PostingInstructionsDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective) and all posting instructions classes extended with `batch_details` field.

 |
| 

5.0.0

 | 

ACTIVE

 | 

CPython 3.9

 | 

The `activation_hook` and `conversion_hook` [Smart Contract hooks](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks) and [Supervisor Contract hooks](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hooks) can return a [Rejection](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#rejection) object to reject the activation or conversion.  

Posting instruction objects now expose the `booking_datetime` and `localised_booking_datetime`, and the [PostingInstructionsDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective) has a settable `booking_datetime` attribute.  

[Expected Parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#contract_parameters-expected_parameters) are available for use.  

When an account is closed, the [`deactivation_hook`](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#deactivation_hook) is executed first. The `deactivation_hook` could now reject the closure, or it could return directives to commit. If the closure is rejected or the directives are not committed **or the balances are not all zero**, then the account status will revert to OPEN. **This means that the `deactivation_hook` could be executed multiple times. If postings are then instructed, for example to move a fee to a balance address, those postings will be instructed again when the account closure is retried.**   

The [ClientTransaction](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) class and all posting instruction classes have been extended with `client_id` attribute.  


 |
| 

5.2.0

 | 

ACTIVE

 | 

CPython 3.9

 | 

Support for [Account Data Fetching](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#data_fetchers-account_data_fetchers) of Flags is now available, adding the following classes; [FlagsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservationfetcher), [FlagsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsintervalfetcher), [FlagValueTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagvaluetimeseries), [FlagsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservation), and [FlagsFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsfilter).  

Fetching of Flags is now supported by the following Vault methods; [get\_flags\_timeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#methods-get_flags_timeseries) and [get\_flags\_observation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#methods-get_flags_observation). See [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#generic-flags) for example usage.

 |
| 

5.3.0

 | 

ACTIVE

 | 

CPython 3.10

 | 

Support for `internal_account_processing_label` is now available on the following posting instruction classes; [Posting](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#posting), [AuthorisationAdjustment](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#authorisationadjustment), [InboundAuthorisation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#inboundauthorisation), [InboundHardSettlement](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#inboundhardsettlement), [OutboundAuthorisation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#outboundauthorisation), [OutboundHardSettlement](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#outboundhardsettlement), [Release](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#release), [Settlement](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#settlement), [Transfer](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#transfer).  

*Multiple Processing Groups are only available as an Extension.*

 |
| 

5.4.0

 | 

ACTIVE

 | 

CPython 3.10

 | 

All Posting Instruction types except for `Transfer` and `CustomInstruction` now expose `target_account_address` and `asset`.  

[PostingInstructionsDirectives](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective) returned within `scheduled_event_hook` can now specify `non_blocking_rejection_reasons` which will prevent the failure of scheduled jobs if the posting instructions are rejected by the Ledger for any of the specified reasons.

 |
| 

5.5.0

 | 

ACTIVE

 | 

CPython 3.10

 | 

It is now possible to enrich proposed Posting Instructions with additional metadata through the [PrePostingHookResult](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#prepostinghookresult) object returned in the pre-posting hook.  

`value_datetime` and `booking_datetime` can now be set on [CustomInstructions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#custominstruction) in [PostingInstructionsDirectives](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective). This allows for different values to be set on each `CustomInstruction` within the same `PostingInstructionsDirective`.

 |
| 

5.7.0

 | 

ACTIVE

 | 

CPython 3.10

 | 

Support for [Account Data Fetching](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#data_fetchers-account_data_fetchers) of Calendars is now available, adding the following classes; [CalendarsFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsfilter), [CalendarsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsintervalfetcher), [CalendarsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsobservation), [CalendarsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsobservationfetcher), and [CalendarTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendartimeseries).  

Support for [Account Data Fetching](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#data_fetchers-account_data_fetchers) of LastScheduledEventDateTimes is now available, adding the following classes; [EventTypesFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#eventtypesfilter), [LastScheduledEventDateTimesObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservation), and [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher).  


 |