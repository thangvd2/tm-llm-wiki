---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/plans"
title: "Plans"
scraped_at: "2026-05-05T20:06:03.317Z"
images: 0
---

# Plans

Welcome to the *Plans* documentation.

For information on the Plans model in Vault Core, please see [Plans](/vault-core/5-8/EN/api/core_api#plans).

## [](#plan_status "Copy link to heading")Plan status

Plan status transitions are performed asynchronously via a call to the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint. This queues the relevant [plan update](/vault-core/5-8/EN/reference/plans#plan_updates) to be executed asynchronously.

The diagram below illustrates the Plan status lifecycle, where arrows indicate the permitted direction of transitions. The prefix `PLAN_STATUS_`… has been omitted for brevity:

![Plans\_\_Plan\_status\_lifecycle.png](/vault-core/5-8/EN/_astro/uuid-5657d51b-d17b-a8dd-5fec-206dd6f30700-en.C-0XVSky_1vE6SU.svg)

### [](#plan_status_pending "Copy link to heading")PLAN\_STATUS\_PENDING

Plans created via the Core API POST [v1/plans](/vault-core/5-8/EN/api/core_api#plan) endpoint can be created with the status `PLAN_STATUS_PENDING` if the status field is provided. From this status, Plan statuses can either be updated to `PLAN_STATUS_OPEN` or `PLAN_STATUS_CLOSED`.

When a Plan is created with status `PLAN_STATUS_PENDING`, no plan updates are automatically queued.

In `PLAN_STATUS_PENDING`:

-   Accounts can be associated with a Plan by creating an [associate account plan update](/vault-core/5-8/EN/reference/plans#associate_account_plan_updates)
    
-   Accounts can be disassociated from a Plan by creating a [disassociate account plan update](/vault-core/5-8/EN/reference/plans#disassociate_account_plan_updates)
    
-   The Supervisor Contract version of the Plan can be changed by creating a Supervisor Contract version plan update
    
-   [Activation plan updates](/vault-core/5-8/EN/reference/plans#activation_plan_updates) can be queued to move the Plan into the `PLAN_STATUS_OPEN` status
    
-   [Closure plan updates](/vault-core/5-8/EN/reference/plans#closure_plan_updates) can be queued to move the Plan into the `PLAN_STATUS_CLOSED` status
    

### [](#plan_status_open "Copy link to heading")PLAN\_STATUS\_OPEN

Plans created via the Core API POST [v1/plans](/vault-core/5-8/EN/api/core_api#plan) endpoint default to the `PLAN_STATUS_OPEN` status. To transition to `PLAN_STATUS_OPEN`, the Plan must have a status of `PLAN_STATUS_PENDING`.

When a Plan is created with the status `PLAN_STATUS_OPEN`, a [plan activation update](/vault-core/5-8/EN/reference/plans#activation_plan_updates) is automatically queued for the Plan and the Plan `opening_timestamp` is set to the current time.

To transition a Plan from the `PLAN_STATUS_PENDING` to `PLAN_STATUS_OPEN`, a [plan activation update](/vault-core/5-8/EN/reference/plans#activation_plan_updates) must be queued via the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint. The `activation_completed_timestamp` of the Plan is populated when the activation plan update for the Plan is executed successfully.

When a Plan is in status `PLAN_STATUS_OPEN`:

-   Accounts can be associated with a Plan by creating an [associate account plan update](/vault-core/5-8/EN/reference/plans#associate_account_plan_updates)
    
-   Accounts can be disassociated from a Plan by creating a [disassociate account plan update](/vault-core/5-8/EN/reference/plans#disassociate_account_plan_updates)
    
-   The Supervisor Contract version of the Plan can be changed by creating a Supervisor Contract version plan update
    
-   [Activation plan updates](/vault-core/5-8/EN/reference/plans#activation_plan_updates) can be queued in order to retry a failed activation plan update
    

A Plan is considered successfully opened when it is linked to one successful activation plan update with the status `PLAN_UPDATE_STATUS_COMPLETED`. Once a Plan has been successfully opened, no further activation plan updates can be created for it. If a Plan has not been successfully opened after executing an activation plan update, the activation plan update can be retried.

-   [Closure plan updates](/vault-core/5-8/EN/reference/plans#closure_plan_updates) can be queued to move the Plan into the `PLAN_STATUS_CLOSED` status.
    

### [](#plan_status_closed "Copy link to heading")PLAN\_STATUS\_CLOSED

The status of a Plan can be updated to `PLAN_STATUS_CLOSED` from either `PLAN_STATUS_PENDING` or `PLAN_STATUS_OPEN`. To transition a Plan to this status, the caller must create a [Closure plan update](/vault-core/5-8/EN/reference/plans#closure_plan_updates) via the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint.

A Plan is considered successfully closed if it is linked to one successful closure plan update that has the status `PLAN_UPDATE_STATUS_COMPLETED`. When a Plan has been successfully closed, no further closure account updates can be queued for the Plan. If the closure plan update fails, the Plan status will remain in the previous state (either `PLAN_STATUS_OPEN` or `PLAN_STATUS_PENDING`). It will be possible to retry the closure plan update using the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint.

When a Plan has the status `PLAN_STATUS_CLOSED`:

-   Accounts cannot be associated with a Plan by creating an [associate account plan update](/vault-core/5-8/EN/reference/plans#associate_account_plan_updates)
    
-   Accounts can be disassociated from a Plan by creating a [disassociate account plan update](/vault-core/5-8/EN/reference/plans#disassociate_account_plan_updates)
    
-   The Supervisor Contract version of the Plan cannot be changed by creating a Supervisor Contract version plan update.
    
-   [Activation plan updates](/vault-core/5-8/EN/reference/plans#activation_plan_updates) cannot be queued to move the Plan into the `PLAN_STATUS_OPEN` status
    
-   [Closure plan updates](/vault-core/5-8/EN/reference/plans#closure_plan_updates) cannot be queued to move the Plan into the `PLAN_STATUS_CLOSED` status
    

A Plan can be considered successfully closed when it is linked to one successful closed plan update with the status `PLAN_UPDATE_STATUS_COMPLETED`. Once a Plan has been successfully closed, no further closure plan updates can be created for it. If a plan has not been successfully closed after executing a closure plan update, the closure plan update can be retried.

-   Active `AccountPlanAssoc`s associated with the Plan will remain active until manually disabled
    
-   The Plan status cannot be further updated
    

### [](#permitted_plan_updates "Copy link to heading")Permitted plan updates

The following table provides a summary of the Plan update types that can be created for Plans of each status.

chat\_bubble

The PLAN\_STATUS\_ prefix has been removed for brevity.

   
| *Plan update type* | PENDING | OPEN | CLOSED |
| --- | --- | --- | --- |
| 
Associate account

 | 

Yes

 | 

Yes

 | 

No

 |
| 

Disassociate account

 | 

Yes

 | 

Yes

 | 

Yes

 |
| 

Supervisor Contract version update

 | 

Yes

 | 

Yes

 | 

No

 |
| 

Activation

 | 

Yes

 | 

Yes

 | 

No

 |
| 

Closure

 | 

Yes

 | 

Yes

 | 

Yes

 |

## [](#plan_updates "Copy link to heading")Plan updates

Plan updates facilitate asynchronous Plan mutations.

There are five types of plan updates:

-   Associate account plan updates
    
-   Disassociate account plan updates
    
-   Activation plan updates
    
-   Closure plan updates
    
-   Supervisor contract version plan updates
    

Associate and disassociate account plan updates can only be queued via the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint.

Activation plan updates are automatically queued when a plan is created with a status of `PLAN_STATUS_OPEN`. Closure plan updates can be created to transition a Plan into status `PLAN_STATUS_CLOSED`.

Supervisor contract version plan updates can only be queued via the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint.

### [](#activation_plan_updates "Copy link to heading")Activation plan updates

The activation plan update is automatically queued when a plan is created with a status of `PLAN_STATUS_OPEN`. The activation plan update can be created via a call to the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint to transition the Plan status from `PLAN_STATUS_PENDING` to `PLAN_STATUS_OPEN` or to retry a failed activation update. This plan update sets up schedules.

To check the status of a plan update, make a request to the Core API GET [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint.

### [](#closure_plan_updates "Copy link to heading")Closure plan updates

The closure plan update can be created via a call to the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint to transition the Plan status from `PLAN_STATUS_PENDING` or `PLAN_STATUS_OPEN` to `PLAN_STATUS_CLOSED`. Closure plan updates can also be created to retry a failed closure plan update. This plan update removes the Plan’s schedules.

To check the status of a plan update, make a request to the Core API GET [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint.

### [](#associate_account_plan_updates "Copy link to heading")Associate account plan updates

The associate account plan update can be created via a call to the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint. This type of plan update is used to associate an account with a plan. It is not possible to create an associate account plan update for a plan that has the status `PLAN_STATUS_CLOSED`.

Callers can listen to the Streaming API for [account plan association create events](/vault-core/5-8/EN/api/core_api#plan_events) or make a request to the Core API GET [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint to check the status of plan updates.

An account can only be associated with one plan. However, a plan can be associated with multiple accounts.

### [](#disassociate_account_plan_updates "Copy link to heading")Disassociate account plan updates

The disassociate account plan update can be created via a call to the Core API POST [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint. This type of plan update is used to disassociate an account from a plan.

Callers can listen to the Streaming API for [account plan association update events](/vault-core/5-8/EN/api/core_api#plan_events) or make a request to the Core API GET [v1/plan-updates](/vault-core/5-8/EN/api/core_api#planupdate) endpoint to check the status of plan updates.

Once an account has been disassociated from a plan, the account can be associated with another plan.

## [](#account_plan_associations "Copy link to heading")Account plan associations

Account plan associations are used to indicate if an account is associated with a plan. Account plan associations can be created by creating an [associate account plan update](/vault-core/5-8/EN/reference/plans#associate_account_plan_updates).

Associations can be removed by creating a [disassociate account plan update](/vault-core/5-8/EN/reference/plans#disassociate_account_plan_updates).

### [](#account_plan_association_statuses "Copy link to heading")Account plan association statuses

When an associate account plan update is created and completes successfully, an [account plan association](/vault-core/5-8/EN/api/core_api#accountplanassoc) is created. The status of an account plan association at creation is set to `ACCOUNT_PLAN_ASSOC_STATUS_ACTIVE`.

The status of an account plan associations can be updated to `ACCOUNT_PLAN_ASSOC_STATUS_INACTIVE` via a [disassociate account plan update](/vault-core/5-8/EN/reference/plans#disassociate_account_plan_updates).

Create and update events for account plan associations are available on the [Streaming API](/vault-core/5-8/EN/api/core_api#plan_events). These events include changes to the status of an account plan association.

Account plan associations persist, irrespective of changes to the status of the plan or account. Where a plan is supervising an account that is not open e.g. closed or pending, the outcome is determined by the plan action and the status of the account, in line with normal restrictions (such as preventing postings from being made to a closed account).

## [](#converting_plans "Copy link to heading")Converting plans

Plans in Vault Core can be converted from one Supervisor Contract version to another.

The Core API [v1/plan-migrations](/vault-core/5-8/EN/api/core_api#planmigration) endpoints can be used to perform [standard plan conversions](/vault-core/5-8/EN/reference/plans#standard_plan_conversions). This is when all plans running on one or more specified Supervisor Contract versions are converted to a single destination Supervisor Contract version.

chat\_bubble

This process only works if the Contracts Language Version remains the same during the conversion, because Supervisor Contracts can only supervise accounts using the same Contracts Language version.

If you need to convert supervised accounts and plans from Contract Language version 3 to Contract Language version 4, you must first disassociate the accounts from the plans. Then, convert the accounts and plans to their corresponding Contract Language version 4 versions separately. Finally, re-associate the accounts with the plans.

A Smart Contract is supervised by a Supervisor Contract if the Smart Contract is defined as a supervised contract in the Supervisor Contract’s code.

An account is supervised by a Supervisor Contract if the Smart Contract associated with the account is supervised by the Supervisor Contract.

-   Account `A` is on Smart Contract `C`.
    
-   Supervisor Contract `S` defines `C` as a supervised contract in its code.
    

In this case, `A` and `C` are supervised by `S`.

### [](#standard_plan_conversions "Copy link to heading")Standard plan conversions

A standard plan conversion (referenced in the API as a 'migration') is an operation in Vault Core where all plans running on one or more specified Supervisor Contract versions are moved to a single destination Supervisor Contract version. This is analogous to performing an [account conversion](/vault-core/5-8/EN/reference/accounts/accounts_version_2#account_conversions) to move an account to another Smart Contract version.

A plan conversion can be queued using the Core API POST [v1/plan-migrations](/vault-core/5-8/EN/api/core_api#planmigration) endpoint. To create a plan conversion, the:

-   Request must contain at least one Supervisor Contract version ID in the `from_supervisor_contract_version_ids` field
    
-   `to_supervisor_contract_version` field must be populated with one destination Supervisor Contract version ID
    
-   Destination Supervisor Contract version ID in the `to_supervisor_contract_version_id` field must not exist in the `from_supervisor_contract_version_ids` field
    
-   Supervisor Contract version IDs in both `from_supervisor_contract_version_ids` and `to_supervisor_contract_version_id` must exist
    

Callers can make a request to the Core API GET [v1/plan-migrations](/vault-core/5-8/EN/api/core_api#planmigration) endpoint to check the status of plan conversion. The plan conversion will be completed once it has the status `PLAN_MIGRATION_STATUS_COMPLETED`.

When performing a plan conversion, if a plan has accounts which are not supervised by the new Supervisor Contract, the conversion will be allowed but the plan will remain on the old Supervisor Contract version with a rejected [plan update](/vault-core/5-8/EN/reference/plans#plan_updates). Any other plans with supervised accounts will be converted.

#### [](#schedule_management "Copy link to heading")Schedule Management

For plan conversions to Supervisor Contract versions that are based on Smart Contract API Version 4.X.X, schedule management is defined in the Supervisor Contract’s `conversion_hook`. The `schedule_migration_type` field has no effect when a plan conversion is created.

### [](#converting_accounts_associated_with_plans "Copy link to heading")Converting accounts associated with plans

If you want to [convert an account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#account_conversions) that is associated with a plan, you may also need to convert the plan.

chat\_bubble

You do not need to convert the plan if the target Smart Contract is already supervised by the plan’s Supervisor Contract.

-   Plan `P` is on Supervisor Contract version `S1`.
    
-   Account `A` is on Smart Contract version `C1`.
    
-   `C1` is supervised by `S1`.
    

![Plans\_\_Migrating\_accounts\_associated\_with\_plans\_1.png](/vault-core/5-8/EN/_astro/uuid-af3baf1e-aa9a-24df-32e7-25b02d90a5f5-en.CCNUxs9V_Z2crD4V.svg)

To convert `A` from `C1` to `C2`:

1.  Add a new Supervisor Contract version S2 which supervises C1 and C2.
    
    ![Plans\_\_Migrating\_accounts\_associated\_with\_plans\_2.png](/vault-core/5-8/EN/_astro/uuid-165db750-cb0e-5b8d-f168-ca499605171a-en.91xd7LaO_1Hm14b.svg)
    
2.  Convert the plan from S1 to S2.
    
    ![Plans\_Migrating\_accounts\_associated\_with\_plans\_3.png](/vault-core/5-8/EN/_astro/uuid-3075ad43-bb01-e52e-3606-a3bab946d535-en.DsNCg7PS_Z2k1hRx.svg)
    
3.  Convert the account to C2.
    
    ![Plans\_Migrating\_accounts\_associated\_with\_plans\_4.png](/vault-core/5-8/EN/_astro/uuid-433656b7-65b9-bb26-7f50-d6a1f9dc71d5-en.aJQeuJki_fuCmx.svg)
    

chat\_bubble

There is still a relationship between `S1`, `S2` and `C1`.