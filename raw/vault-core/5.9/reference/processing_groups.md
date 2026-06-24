---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/processing_groups"
title: "Processing Groups"
scraped_at: "2026-06-22T19:19:09.462Z"
images: 0
---

# Processing Groups

A *Processing Group* (PG) is a high-level resource in Vault Core that is a means to logically group Accounts and Plans. It is a collection of accounts that share a timezone.

This allows a common cycle of business processes to be executed across groups of accounts, while keeping all accounts hosted within a single Vault Core instance. A typical example would be End of Day (EOD) processing, which needs to be run at midnight every day, across three timezones.

For more information about the API endpoints provided by a Processing Group, see: [Core API Processing Groups](/vault-core/5-9/EN/api/core_api#processinggroups).

## [](#key_features "Copy link to heading")Key features

-   [Financial isolation](/vault-core/5-9/EN/reference/processing_groups#financial_isolation)
    
-   [Schedule offsetting](/vault-core/5-9/EN/reference/processing_groups#schedule_offsetting)
    
-   [Schedule pausing and resuming](/vault-core/5-9/EN/reference/processing_groups#schedule_pausing_and_resuming)
    

chat\_bubble

[Multiple Processing Groups](/vault-core/5-9/EN/reference/processing_groups#using_multiple_processing_groups) are available as an Extension. Contact your Thought Machine representative for more information. If you are not using multiple Processing Groups, everything is contained within a single default Processing Group.

## [](#use_cases "Copy link to heading")Use cases

There are several main use cases for Processing Groups:

-   Pausing End of Day (EOD) processing if any prerequisite information is not available, such as financial reports.
    
-   Simplifying product management by abstracting the timezone information into the Processing Group, making management of Smart Contracts simpler.
    
-   If available in your configuration, enabling the use of multiple Processing Groups to define processing groups across timezones, allowing for separate processing across different national subsidiaries or business units.
    
-   In the case of multiple Processing Groups, pausing EOD processing in processing groups independently. For example, on a single instance with two Processing Groups (UK and US), if there is a delay in UK upstream systems, the US Processing Group completes EOD as normal.
    

## [](#before_you_start "Copy link to heading")Before you start

Before you consider any configuration with a Processing Group, there are a number of critical steps that you must follow before you implement one. See [Using processing groups](/vault-core/5-9/EN/reference/processing_groups#using_processing_groups).

This is because you are required to set a timezone for the default PG, which you can only set once and cannot change later. Setting the PG timezone field has a direct impact on Accounts, Schedules, Smart Contracts, Postings and End of Day processing.

error

**It is critical to set the Processing Group timezone correctly.** Once a PG timezone is set, you cannot change it. The underlying Accounts and corresponding Schedules in the PG use its timezone.

## [](#financial_isolation "Copy link to heading")Financial isolation

Accounts belonging to different Processing Groups cannot directly transact with each other. This means that transactions are isolated, guaranteeing that the total of all debits and credits in a Processing Group is balanced, at any time. Different processing groups therefore essentially operate in isolated ledgers, meaning that it is possible to run an End of Day process for each processing group, therefore multiple End of Day processes per Vault Core instance.

The main benefit of financial isolation is that each entity’s End of Day cannot block each other, allowing them to be run independently. The bank can close the book on each Processing Group once its End of Day has completed, without waiting for accounts in a different Processing Group that may impact it.

## [](#schedule_offsetting "Copy link to heading")Schedule offsetting

The Processing Group has a timezone field. During the creation of Accounts, Schedules are created according to the following validation logic:

-   If the timezone is set on the PG, use the PG’s timezone when creating all Schedules for the Account.
    
    *Otherwise:*
    
-   If the `events_timezone` is set in the Smart Contract, use the `events_timezone` when creating all Schedules for the Account.
    
    *Else:*
    
-   Use the timezone `UTC` to create the Schedules for the Account.
    

The timezone field uses IANA timezones. You can set the DEFAULT Processing Group timezone exactly once to any valid IANA timezone ID from the *tz database* (for example, 'America/New\_York', 'Europe/Paris' or 'Asia/Tokyo'). Providing the timezone at the PG level makes it possible for Smart Contracts to be *timezone-agnostic*.

You can use existing Accounts, Plans and Contracts with a PG if you convert the Accounts and Plans to the PG and then remove the previously-defined timezone from the Contracts.

chat\_bubble

Before setting the timezone of the Default Processing Group to a non-empty value, all accounts in Vault Core should be converted to a single timezone, set by the `events_timezone` parameter in a Contract. For more information, see [Using Processing Groups](/vault-core/5-9/EN/reference/processing_groups#using_processing_groups).

## [](#schedule_pausing_and_resuming "Copy link to heading")Schedule pausing and resuming

A Processing Group has a `status` field, which a bank can use to pause and unpause the Scheduled events for all Accounts that belong to the PG.

A common use case for this feature is to help to manage End-of-Day processing. For example, a bank can use this feature to pause EoD processing for Accounts.

The status can switch between one of two statuses:

 
| Status | Description |
| --- | --- |
| 
`PROCESSING_GROUP_STATUS_ACTIVE`

 | 

When set, Schedules are executed as normal for Accounts that belong to the Processing Group

 |
| 

`PROCESSING_GROUP_STATUS_PAUSED`

 | 

When set, Schedules are paused; no Schedules are executed for Accounts that belong to the Processing Group and are scheduled after the time of pause

 |

The default status is ACTIVE. You can use the PAUSED status to temporarily stop triggering jobs that are scheduled after the pause operation is received. This means that pausing prevents jobs from being published for schedules with a `next_run_timestamp` in the future, from the time of the pause operation. Pausing can be useful to correct any prerequisites that are needed for schedule execution. A subsequent update request with the ACTIVE status resumes the schedule execution.

When the status field is set to `PROCESSING_GROUP_STATUS_ACTIVE`, you can set an option to enforce a minimum observation time for the requirements fetched during the schedule execution. To enable this, set the `schedules_observe_balances_at_unpause_time` value to TRUE in the request. When set, the Observation timestamp will be MAX(ScheduleTime, UnpauseTime). To clear the minimum observation time field (set it to `NULL`), you can set `schedules_observe_balances_at_unpause_time` value to FALSE in the request.

chat\_bubble

When you update the status of a Processing Group, it could cause a delay to the publishing of jobs of up to 20 seconds.

## [](#using_processing_groups "Copy link to heading")Using Processing Groups

In Vault Core 5, the default Processing Group is automatically set. However, it is not active until you have populated its timezone.

There are two ways that you can use a Processing Group as a means of controlling Accounts and Plans:

-   Using a Processing Group for Schedule offsetting
    
-   Using a Processing Group for pausing/unpausing Schedules
    

You can retrieve and update a Processing Group through the Core API.

error

**It is critical that you set the Processing Group timezone correctly**. There are a number of critical steps that you must follow before you implement Processing Groups. This is because it requires you to set a timezone for the Processing Group that you can only set once and cannot change. Setting the Processing Group timezone field has a direct impact on Accounts, Schedules, Smart Contracts, Postings and End-of-Day processing; therefore, it is crucial that you set it correctly. Once you have first completed the necessary preparatory steps and are ready to implement Processing Groups, you can proceed to do so. See [Activating the default Processing Group](/vault-core/5-9/EN/reference/processing_groups#activating_the_default_processing_group) and [Warnings for timezone setting](/vault-core/5-9/EN/reference/processing_groups#warnings_for_timezone_setting).

These are examples of how we recommend a bank to use Processing Groups:

-   A multi-country bank can put each country in a Processing Group, so that End of Days and scheduled operations can be run independently. The bank can set End of Days to run at different times if the countries are in different time zones
    
-   A bank in a single country with multiple time zones can choose to:
    
    -   Put all accounts across all time zones in one Processing Group. This means that all accounts across the time zones share a single End of Day. As all the accounts are in one Processing Group, they can transact directly with each other.
        
    -   Put each time zone in a single Processing Group. This means that each time zone has its separate End of Day. The bank would then need to use multiple posting instructions to achieve a transfer between accounts belonging to different Processing Groups.
        
    

### [](#processing_group_fields "Copy link to heading")Processing Group fields

Each instance of Vault Core 5 includes a single default Processing Group that is automatically created in the background with the following fields.

 
| Field | Use and description |
| --- | --- |
| 
`ID`

 | 

Define logical groupings of Accounts in a single Vault Core instance.

 |
| 

`timezone`

 | 

This timezone is unset until you choose to set and activate it. In order to use PGs, you must associate the PG with a timezone - this facilitates creating Schedules for accounting processes and removes the need to define it in a Smart Contract as a parameter. The value of this field can be any valid IANA timezone ID from the tz database; see [Supported Timezones](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#supported_timezones) for a full list.

 |
| 

`status`

 | 

Optionally pause any accounting processes running over the Accounts in a Processing Group. Value: `ACTIVE` (default) or `PAUSED`

 |

chat\_bubble

-   Multiple Processing Groups is an Extension. If you do not have this Extension, everything is contained within a single Processing Group.
    
-   If you are planning to move existing accounts on to a new Processing Group, contact Thought Machine for guidance.
    

### [](#using_a_processing_group_for_schedule_offsetting "Copy link to heading")Using a Processing Group for schedule offsetting

Activating the default Processing Group by setting its timezone field is appropriate if you:

-   Have all Accounts and Plans backed by a CLv4 Smart Contract or Supervisor Contract
    
-   Want all Accounts and Plans to operate in a single timezone
    
-   Intend to use the field `PostingInstructionBatch.PostingInstructions[].BookingLocalisedDateTime` (contained in the response of create Posting Instruction Batch)
    
-   Intend to consume enriched posting events (containing `EnrichedPostingInstructionBatchEvent`) for any of the following two fields, because a PG timezone update will influence these (some clients use these fields for accounting purposes):
    
    -   `EnrichedPostingInstructionBatchEvent.EodMetadata.LocalisedCalendarPeriodId`
        
    -   `EnrichedPostingInstructionBatchEvent.EodMetadata.LocalisedBookkeepingLabel`
        
    

However, using a Processing Group for Schedule offsetting may not be suitable for you or may only be suitable as a short-term solution.

error

You cannot revert using the Processing Group timezone once you have implemented it.

### [](#using_a_processing_group_for_pausingunpausing "Copy link to heading")Using a Processing Group for pausing/unpausing

Schedules are closely linked with Processing Groups. When an Account creates a Schedule, it is aligned with the Processing Group that is associated with the Account.

Once you activate the timezone on the Processing Group, the control of Schedule executions is also tied to the Processing Group status (`PROCESSING_GROUP_STATUS_ACTIVE` or `PROCESSING_GROUP_STATUS_PAUSED`).

When a Processing Group has its status changed to `PROCESSING_GROUP_STATUS_PAUSED`:

-   The Scheduler does not trigger any jobs that are scheduled after the time of pause
    
-   Any Schedule jobs with a schedule timestamp lesser than the pause time are still triggered
    
-   New scheduled jobs continue to be created and executed until schedules have caught up to the pause time
    

When the status of a Processing Group is unpaused, that is, changed back to `PROCESSING_GROUP_STATUS_ACTIVE`, then:

-   Schedules in the Processing Group resume normal operation and all Schedule jobs that have an effective timestamp before the current clock time are triggered for execution.
    
-   If the Processing Group is unpaused with the `schedules_observe_balances_at_unpause_time` option, then the jobs that are published after the time of unpause will have a minimum observation timestamp. This means that the postings and balances observed by the schedule hook will be the maximum timestamp between the effective time of schedule and the time of unpause. See [Financial Consistency in Vault](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#financial_consistency_in_vault) for more details.
    

For more information, see [Schedule pausing and resuming](/vault-core/5-9/EN/reference/processing_groups#schedule_pausing_and_resuming)

### [](#using_processing_groups_with_a_calendar "Copy link to heading")Using Processing Groups with a Calendar

chat\_bubble

There are no integrations between Processing Groups and Calendars. Instead, we have introduced Processing Groups with the ability to pause/restart job execution at scale.

## [](#using_multiple_processing_groups "Copy link to heading")Using Multiple Processing Groups

chat\_bubble

Multiple Processing Groups is only available as an Extension. Contact your Thought Machine representative for more information.

A bank can deploy multiple Processing Groups across a single Vault Core instance to enable it to financially isolate and control the operational behaviour of the accounts associated with each group. For example, this enables a bank running a single Vault Core instance with accounts and operations domiciled across multiple timezones or grouped within distinct subsidiaries to define a Processing Group for each timezone or each subsidiary respectively.

This means that the bank can then independently trigger and control any operation applicable to the collection of accounts inside a Processing Group, such as End of Day, with full confidence that any operation against an account that is domiciled in one time zone uses a consistent view of balances that an operation triggered from another time zone cannot modify.

### [](#capabilities_of_multiple_processing_groups "Copy link to heading")Capabilities of multiple Processing Groups

With multiple processing groups, a bank can:

-   Create Processing Groups
    
-   Give each Processing Group an autonomous set of configuration rules. For example, a group could have its own timezone, calendar and reporting pattern - Assign accounts to different Processing Groups when accounts are opened
    
-   Derive and view a static position for any given Processing Group, independently from any ongoing work on the platform
    

When using multiple Processing Groups, every account is associated with exactly one Processing Group. Because each Processing Group is timezone aware, it is easier to manage configuration, including Smart Contracts. For example, all schedules within a Processing Group can be paused, restarted, skipped or otherwise adjusted without any code changes in the Smart Contract.

Supervision of accounts is limited to the same Processing Group. For example, you can only have a Plan supervise Accounts in the same Processing Group.

### [](#running_multiple_processing_groups "Copy link to heading")Running multiple Processing Groups

Running multiple entities on a single instance requires the ability to financially isolate logical groups of accounts and to selectively share configuration across entities.

Enforcing the isolation of accounts that are domiciled in different entities is complex. Vault Core’s solution is the introduction of Processing Groups. These groups allow accounts to:

-   Share any required configuration (Smart Contracts, calendars, and so on)
    
-   Isolate scheduled processes such as End of Day
    
-   Be managed separately from an operational perspective
    

A bank can run complex operations across multiple geographies, business lines or brands, all on a single instance of Vault Core, simplifying operations, increasing control, and reducing cost and overhead.

The separation dimension can be:

-   Timezones
    
-   Geography
    
-   Legal entities
    
-   Brands
    

Running a single instance of Vault Core with multiple processing groups is both simpler and cheaper than a typical multiple instance of Vault Core with single processing groups.

error

There is a limit of 100 Processing Groups within a single Vault Core instance.

### [](#internal_account_processing_labels "Copy link to heading")Internal Account Processing Labels

Every Processing Group has its own set of internal accounts for double-entry bookkeeping purposes. You can use [internal account processing labels](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_examples/generic#internal_account_processing_label) in Smart Contracts, Supervisor Contracts and in Postings API to reference an internal account without needing to be aware of the PG that the transaction is operating in.

To use processing labels, use `v2/accounts` to set the `processing_label` value of the internal accounts in each chosen Processing Group.

In posting instructions, you can reference `internal_account_processing_label` in place of the `account_id` when you make posting instructions for an internal account in a Processing Group. This label is resolved to the internal account with the matching `processing_label` attribute in a PG. The PG is derived from other accounts involved in the transaction. This means you can send instructions via a Postings API client that will automatically route to the relevant internal account based on the PG.

Labels also aid reuse of Smart Contracts across different PGs by removing the need for explicit internal account IDs in PostingInstructionDirectives.

#### [](#creating_internal_account_processing_labels "Copy link to heading")Creating Internal Account Processing Labels

Example: Setting up a `fee_account` internal account processing label for charging fees, on a Vault Core instance with Processing Groups `BRANCH_1` and `BRANCH_2`.

1.  Using `v2/accounts`, create an Internal Account `example_internal_account_1` with processing label `fee_account` on Processing Group `BRANCH_1`.
    

##### [](#example_request_to_create_internal_account_example_internal_account_1 "Copy link to heading")Example request to create Internal Account `example_internal_account_1`

##### [](#example_response_to_account_creation_request "Copy link to heading")Example response to account creation request

2.  Using `v2/accounts`, create an Internal Account `example_internal_account_2` with processing label `fee_account` on Processing Group `BRANCH_2`.
    

##### [](#example_request_to_create_internal_account_example_internal_account_2 "Copy link to heading")Example request to create Internal Account `example_internal_account_2`

##### [](#example_response_to_account_creation_request_2 "Copy link to heading")Example response to account creation request

3.  Then, for example, use the internal account processing label `fee_account` to credit GBP 10.00 from a customer account (belonging to Processing Group `BRANCH_2`). Notice in the response that `example_internal_account_2`, the Internal Account belonging to the same PG, is selected for the transaction.
    

##### [](#example_inboundhardsettlement_request_targeting_customer_account_on_pg_branch_2_and_internal_account_processing_label_fee_account "Copy link to heading")Example InboundHardSettlement request targeting customer account on PG `BRANCH_2` and internal account processing label `fee_account`

##### [](#example_response_to_instruction_using_internal_account_processing_label "Copy link to heading")Example response to instruction using internal\_account\_processing\_label

## [](#vault_jobs_integration "Copy link to heading")Vault Jobs integration

By subscribing to Vault Jobs Group notifications, you can receive a notification when certain Processing Groups have completed. See [Vault Job Group Events](/vault-core/5-9/EN/api/core_api#vault_jobs_events) for more information about which Processing Groups types you can receive notifications for.

## [](#activating_the_default_processing_group "Copy link to heading")Activating the Default Processing Group

Here, we provide a step-by-step guide on how to implement and activate the Default Processing Group and timezone. If you want to do so, we strongly recommend that you contact Thought Machine for guidance to ensure that you complete the steps correctly.

chat\_bubble

**For existing Accounts and Plans**, the PG timezone is not used unless you convert them to use it. Converting the existing Accounts/Plans effectively activates the timezone on them. **This is another reason for you to make sure that the event timezone is the same as the Processing Group timezone.**

### [](#supported_approaches_for_setting_the_processing_group_timezone "Copy link to heading")Supported approaches for setting the Processing Group timezone

The supported approach for configuring the Processing Group timezone differs depending on whether you have an existing or your first instance of Vault Core.

Supported approach for a first instance of Vault Core:

1.  First, configure the Default Processing Group (DPG).
    
2.  Create Accounts and Postings.
    
3.  Check the `booking_localised_date_time` label.
    

Supported approach for an existing instance of Vault Core:

1.  Make sure that all Accounts and Plans are converted to CLv4 Contracts which explicitly set the `events_timezone` to the intended DPG timezone value. Refer to the steps in this guide.
    
2.  Configure the Default Processing Group (DPG) during the downtime.
    
3.  Ignore the localised stream during the first 24 hours after configuring the DPG.
    
4.  Restart the pods to invalidate the cache.
    
5.  Check the `booking_localised_date_time` label.
    

chat\_bubble

Due to caching, it could take 24 hours for the configuration to take effect. You can only have one PG and only configure the timezone once. This means that we would NOT support the following use case, for example: 1. Configure the DPG in UTC. 2. Create Account and Postings. 3. Change the DPG to another timezone. 4. Create more Postings and expect them to use the new timezone.

error

**It is critical that you set the Processing Group timezone correctly.** When a Processing Group timezone is set, it becomes immutable. This means that you cannot change the timezone that is used by underlying Accounts and corresponding Schedules in the Processing Group.

### [](#steps_to_activate_the_processing_group "Copy link to heading")Steps to activate the Processing Group

error

At any given step, you MUST NOT move on to the next step before you have completed the current step exactly. This is in order to ensure that all Accounts and Plans operate correctly. If you do not follow this procedure exactly, then you will experience issues affecting the operation of Accounts and Plans. See: **Warnings about incorrect Processing Group timezone activation for schedule offsetting**

To activate the Processing Group:

1.  Convert all Accounts and Plans to Smart Contracts/Supervisor Contracts that have ALL of the following properties:
    
    -   Use CLv4 (Contracts Language version 4)
        
    -   Have a non-empty `events_timezone` value. Set `events_timezone` in the Smart Contract to match the desired timezone the default PG timezone will be updated to, even if this is to “UTC”. For supervised Accounts, all of the linked Accounts and Plans MUST have the same `events_timezone` value.
        
    -   Have correct `datetime` values. All `datetime` values that you use in the Contract are: 1) localised, and 2) localised against `vault.events_timezone`, and NOT `events_timezone`. If `events_timezone` is not set, this localisation instruction still applies.
        
        Example:
        
        chat\_bubble
        
        This is only possible using CLv4 (because CLv3 only localises against `events_timezone`)
        
        error
        
        It is crucial to perform and complete this step exactly and to not proceed further if not. Other than this guidance, there are no safeguarding measures to prevent you from making an error. For example, if you update the DEFAULT Processing Group (PG) timezone then the update will succeed even if you have not set `events_timezone` in the recommended way.
        
    
2.  The entire suite of Smart and Supervisor Contracts should now have a single, populated `events_timezone`. Next, you are ready to set the DEFAULT Processing Group timezone. Set the DEFAULT Processing Group by calling the [ProcessingGroup](/vault-core/5-9/EN/api/core_api#processinggroup) to set the `processing_group.timezone` field to match the desired value as you set for `events_timezone` for all the product versions and Supervisor Contract versions.
    
    Example:
    
    error
    
    Remember: You MUST set the timezone correctly because once you have set it, it is NOT possible for you to change it. Once you set the Processing Group timezone, this is immutable. Refer to the steps, notes and warnings in our guidance and do not proceed until you are certain that this is the right feature for you.
    
3.  Note and verify that from this point onwards:
    
    -   All subsequent Account and Plan activation and conversions will use the default PG timezone. As a result, this new timezone is then available on the Vault Core object as: `vault.events_timezone`, and NOT `events_timezone`.
        
    -   All subsequent Smart Contract and Supervisor Contract versions should no longer have the `events_timezone` field. Remove the `events_timezone` field from your CLv4 Smart Contracts because the field is now redundant - the Processing Group timezone overrides it.
        
    

## [](#warnings_for_timezone_setting "Copy link to heading")Warnings for timezone setting

It is critical that you follow the Processing Group timezone activation procedure correctly, as described in [Activating the default Processing Group](/vault-core/5-9/EN/reference/processing_groups#activating_the_default_processing_group).

If you do not, you will experience issues affecting the operation of Accounts and Plans - these include, but are not limited to, the following issues:

-   When a call is made to create a posting instruction batch, the response contains `PostingInstructionBatch.PostingInstructions[].BookingLocalisedDateTime` which localises against the PG timezone, which may no longer be useful
    
-   The `EnrichedPostingInstructionBatchEvent.EodMetadata.LocalisedCalendarPeriodId` and `EnrichedPostingInstructionBatchEvent.EodMetadata.LocalisedBookkeepingLabel` may no longer be suitable for accounting purposes
    
-   If the contract-defined `events_timezone` and default PG timezone are different, the existing Accounts and Plans could have Schedules that operate using the contract-defined `events_timezone`.
    
-   If a CLv4 (Contracts Language version 4) Contract localises against `events_timezone` instead of `vault.events_timezone`, then the following issues could occur:
    
    -   Schedules might operate in the incorrect timezone
        
    -   Schedules might not operate at all
        
    -   Subsequent attempts to execute activations or conversions of Accounts and Plans could be rejected
        
        error
        
        This is the reason that it is important for you to ensure that all `datetime` values for Schedules are localised against `vault.events_timezone`, regardless of whether you have set `events_timezone` in the Contract.
        
    
-   If a CLv3 Contract is used by Accounts or Plans, because the `localize_datetime` method in the Contract code can ONLY localise against the contract-defined `events_timezone`, then Schedules might operate in that timezone as a result
    
    error
    
    This is the reason that it is important for you to ensure that you convert all Accounts and Plans to Smart/Supervisor Contracts that use CLv4. CLv4 is the only Contract language that supports localisations against `vault.events_timezone`.
    
-   If a CLv4 Contract does NOT localise `datetime` values at all, then when the DPG timezone is set, attempts to activate or convert Accounts or Plans are rejected. This is the case even if the Contract’s `events_timezone` is not defined. You will not be able to activate new Accounts and Plans or convert any Account or Plan to that Smart or Supervisor Contract
    
-   If a CLv3 Contract does NOT localise `datetime` values, the outcome is unknown; therefore, it might be an adverse outcome