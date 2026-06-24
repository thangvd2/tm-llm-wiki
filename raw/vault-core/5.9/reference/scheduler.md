---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/scheduler"
title: "Scheduler"
scraped_at: "2026-06-22T19:19:13.048Z"
images: 0
---

# Scheduler

## [](#what_is_the_scheduler "Copy link to heading")What is the Scheduler?

The Scheduler is a time-based Kafka producer that publishes triggers as Kafka messages to designated topics. Other Vault Core components use these messages, known as Schedule jobs, to fulfill business logic at regular intervals or specific points in time.

From Vault Core 5.9, the database schema enables atomic operations, which significantly reduces race conditions. Optimised application logic also minimises network calls and database query volume, reducing database load during high-traffic events such as account conversion and scheduled event execution.

chat\_bubble

When you upgrade to Vault Core 5.9 or later versions from an earlier version, the `scheduler-db-batch-migrator-job-preinstall-cronjob` manages the one-time migration to the optimised schema. For more details, see [New Scheduler Migrator job](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core#new_scheduler_migrator_job) in the Vault Core 5.9 upgrade instructions.

## [](#schedules "Copy link to heading")Schedules

A schedule is an entity that describes how and when a time-based process needs to be executed. Scheduler clients can request a schedule to be created to either:

-   Trigger events that follow a time pattern, or
    
-   Trigger one-off events
    

Once created, the Scheduler guarantees to create a Schedule job for every scheduled event in a given schedule, although they might be published later than anticipated.

You create Schedules using Scheduler clients such as Smart Contracts or Workflows. See the respective [Smart Contracts](/vault-core/5-9/EN/reference/contracts/) and [Workflows](/vault-core/5-9/EN/reference/workflows-tickets/) documentation to learn how to schedule events in these services.

Schedules can have any of these statuses:

-   `ENABLED`: the Schedule has a non-nil `next_run_timestamp` and will continue to produce valid Schedule Jobs for execution. The `next_run_timestamp` of a Schedule is determined by its `expression` and the `end_timestamp` of the Schedule. The `skip` timestamps and the `disabled_timestamp` of the Schedule are nil.
    
-   `DISABLED`: the Schedule has been programatically disabled and will no longer produce Schedule jobs. Schedules can be disabled using the Smart Contract Update Event Type directive during Account Conversion or closure. The `disabled_timestamp` will be set to a non-empty value.
    
-   `COMPLETED`: the Schedule has no valid Schedule Jobs according to its `expression` and `end_timestamp`. It will not produce Schedule Jobs. For example, a Schedule may complete if its time expression evaluates to exactly one Schedule Job execution which has already been produced. Or, the `end_timestamp` of the Schedule is in the past.
    
-   `FAILED`: the latest Schedule Job associated with the Schedule failed.
    
-   `SKIPPED`: A Schedule has been updated to `SKIPPED` by its associated tags, or via the Smart Contract. The Schedule will have `skip_start_timestamp` and `skip_end_timestamp` set, and will produce `SKIPPED` jobs that will not execute.
    
-   `PENDING`: the Schedule is active but has not yet begun producing jobs. This could be because the account product version is being upgraded but has not successfully completed.
    

The following are valid status transitions for a Schedule:

-   A `PENDING` Schedule can be updated to `ENABLED` or `DISABLED`.
    
-   An `ENABLED` Schedule can be updated to any other status, depending on the status of its most recent job. It cannot be moved back to `PENDING`.
    
-   A `FAILED` Schedule can become `ENABLED`, `DISABLED`, or `COMPLETED` depending on the status of its most recent job.
    
-   A `SKIPPED` Schedule moves back to `ENABLED` if its `skip_end_timestamp` is in the past.
    
-   `COMPLETED` and `DISABLED` are terminal statuses in CLv3. Once a CLv3 Schedule has reached this status, it can no longer be modified further. In CLv4, a Schedule can be updated to `ENABLED` from a terminal state.
    

You can retrieve Schedules through the Core API. See the Core API’s [Schedule](/vault-core/5-9/EN/api/core_api#schedule) documentation for more information.

chat\_bubble

The minimum supported interval between scheduled events is 60 seconds.

## [](#schedule_jobs "Copy link to heading")Schedule Jobs

A Schedule job is an event triggered by the Scheduler for a given schedule, such as in a Smart Contract.

After you have created schedules, the Scheduler waits until the first Schedule job needs to be executed, then triggers the event. It then records that the scheduled job was published, then waits for the next Scheduled job.

Scheduled jobs are only triggers - there is no execution of any tasks in the Scheduler. Some services in Vault Core act as schedule executors: they consume job messages and run the associated process, for example, running the scheduled\_hook in Smart Contracts.

The Scheduler will:

-   guarantee at-least-once message delivery; all Schedule executors have mechanisms in place to ensure that duplicate messages are handled idempotently.
    
-   only publish a job once it has received a success outcome for all previous jobs in the same schedule, and, if it belongs to a group to which all previous jobs for Schedules belong, the group must also have succeeded.
    
-   not be able to guarantee perfect timeliness. It is guaranteed that Schedule jobs will be published, but this might happen later than anticipated, so every Schedule job will be published with `scheduled_timestamp` (the time at which the Schedule job is expected to be published) and `published_timestamp` (the time at which the Schedule job was actually published).
    

chat\_bubble

Kafka consumers that are sensitive to timeliness need to use the actual time to offset the lateness at which the Schedule job was published. Schedules cannot be missed, even if the Scheduler is down. When the Scheduler comes back up, all Schedule jobs in the past that have not been published will immediately be published. For the safest handling of these jobs, use `published_timestamp`.

Schedule Jobs can have any of these statuses:

-   `PUBLISHED`: the Schedule Job has been emitted, and is awaiting execution.
    
-   `SUCCEEDED`: the Schedule Job was executed successfully.
    
-   `FAILED`: the Schedule Job executed with errors. Errors can be transient, for example due to a temporary outage, or non-transient, for example due to a Smart Contract syntax error.
    
-   `SKIPPED`: the Schedule job has been `SKIPPED` via the Smart Contract, or by the a Schedule Tag. The job will not be executed.
    
-   `OVERRIDDEN`: the Scheduler has manually overriden the failed Schedule job.
    

Once a job is PUBLISHED, a Scheduler executor will execute the event triggered by the job. There is the option to communicate the outcome of the event, either `SUCCEEDED` or `FAILED`, to the Scheduler. If this happens, the Scheduler stores the outcome for the given Schedule job. [Operation events](/vault-core/5-9/EN/reference/scheduler#tags_and_operation_event_notifications), and some other features in the Scheduler, require the Schedule job outcome to be received in the Scheduler.

In case a Schedule job fails, you can republish it using the BatchRepublishJob request. This only republishes a Schedule job and does not make any changes to it. You can also override the Schedule job.

You can retrieve Schedule jobs through the Core API. See the Core API’s [Job](/vault-core/5-9/EN/api/core_api#job) documentation for more information.

You can also view the jobs created by the Scheduler from the *Vault Jobs* application. For more information, see [What is Vault Jobs?](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/vault_jobs#what_is_vault_jobs).

## [](#republishing_schedule_jobs "Copy link to heading")Republishing Schedule Jobs

You can republish Schedule Jobs using the [BatchRepublish](/vault-core/5-9/EN/api/core_api#job) endpoint.

You may need to republish a Job if it is stuck in a `FAILED` or `PUBLISHED` status, to unblock the associated Schedule, and produce the next Jobs. You can also update `FAILED` Schedule Jobs to `JOB_STATUS_OVERRIDDEN` status using this endpoint.

### [](#republishing_jobs "Copy link to heading")Republishing Jobs

The `BatchRepublishJobs` endpoint allows users to trigger the reprocessing of one or more Schedule Jobs. This is especially useful if the initial processing of the Schedule Jobs has already exceeded the maximum number of automatic retries.

The request to the `BatchRepublishJobs` endpoint has the following parameters:

-   `ids`: This is a list of the Schedule Job IDs to be republished.
    
-   `target_status`: This field *cannot* be populated to republish Jobs normally.
    

### [](#overriding_failed_schedule_jobs "Copy link to heading")Overriding Failed Schedule Jobs

If a Schedule Job is in `FAILED` status due to a non-retryable error, you can use the `BatchRepublishJobs` endpoint to update the status to `JOB_STATUS_OVERRIDDEN`. Schedule Jobs updated to `JOB_STATUS_OVERRIDDEN` status will **NOT** be reprocessed through the contract execution pipeline. Updating a Schedule Job’s status to `JOB_STATUS_OVERRIDDEN` unblocks its associated Schedule, allowing subsequent Jobs to be published as normal and processed through the contract execution pipeline.

chat\_bubble

An Overridden Schedule Job **has not** been re-executed, so use this with careful consideration of the side effects.

Because an Overridden Schedule Job **has not** been re-executed, a subset of side effects may have succeeded on the run where the Job failed, so it is very important to take into account any missing or any already committed side effects.

A Job that is republished for override will be in a new status `JOB_STATUS_OVERRIDDEN`.

The `target_status` field **MUST** be set to `JOB_STATUS_OVERRIDDEN` to republish Jobs for override. Any other Job status will not be valid.

### [](#effects_of_overriding_failed_schedule_jobs "Copy link to heading")Effects of Overriding Failed Schedule Jobs

You may still need to apply any directives associated with the failed Schedule that may have been missed. However, this is limited to the failed event itself, rather than every event between the failure and the present. You can do this using the [Simulate](/vault-core/5-9/EN/api/core_api#contracts) endpoint.

## [](#tags_and_operation_event_notifications "Copy link to heading")Tags and operation event notifications

Operation events provide updates to the outcomes of a set of Schedules identified by a tag; all downstream processing will have completed for these Schedules.

To start using operation events, you must create a tag. Tags are string labels that Scheduler clients can link to schedules. You can create tags using the [AccountScheduleTag](/vault-core/5-9/EN/api/core_api#account_schedule_tags) endpoint in the Core API.

Once created, within Smart Contracts, you can add tags to Schedules. The collection of all Schedules within the system with exactly the same tag is called a scheduled operation. See [SmartContractEventType tags](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype).

Tags allow the simple identification of Schedules executing similar events within Vault Core. If `sends_scheduled_operation_reports` is enabled, Vault Core also generates operation event notifications for that tag.

An operation event notification is a Kafka message published to the `vault.core_api.v1.scheduler.operation.events` topic. This notification reports the timestamp of when the next scheduled operation will be triggered by the Scheduler. The timestamp is a forecast of when the next Schedule in the collection will be triggered.

If you create new Schedules before the published date, the forecast will be updated. This timestamp may be in the past, meaning that the earliest Schedule with that tag has been triggered but has not yet been successfully executed or is in a failed state. You only receive a notification when this timestamp changes. This means that many Schedules with the same scheduled timestamp will generate only one notification when the last Schedule is successfully executed.

An operation event notification includes the following parameters:

-   *ID*: A string used to differentiate notifications in case they are sent twice
    
-   *Tag name*: The unique name (ID) assigned when the tag was created and added to the Schedules as string
    
-   *Next run timestamp*:
    
    -   If this is in the future, it indicates when the earliest Schedule with the given tag is scheduled to be triggered
        
    -   If this is in the past, it indicates the earliest Schedule that is yet to be successfully executed
        
    -   If this is nil or not present, it indicates that there are no enabled schedules with the given tag
        
    
-   *Completed run timestamp*:
    
    -   Indicates the time of the latest successful completion of a scheduled operation (a collection of Schedules with the given tag and the same execution time)
        
    

Tag statuses are a way of modifying the state of several schedules simultaneously. When a tag status is set, the corresponding `status start timestamp` and `status end timestamp` must also be set (subject to status type). If a schedule is associated with multiple tags, only one tag can have a status set at a point in time.

## [](#schedule_groups "Copy link to heading")Schedule Groups

chat\_bubble

In the Scheduler documentation, a Schedule Group is a resource that defines an ordered set of schedules. In Smart Contracts, a Scheduler group is a Group resource defined by the Scheduler. See [Event types groups and tags](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_examples/generic#event_types_groups_and_tags) for more information.

Each Schedule Group contains a set of Schedules. Vault Core uses these Schedules to publish Schedule jobs in a specified order. Schedules that are in a Schedule Group are called Grouped Schedules.

Grouped Schedules have the following additional properties:

-   `ID` : The ID of the Schedule Group.
    
-   `Name` : The name of the Schedule Group.
    
-   `Group_status`: The current status of the Schedule Group. Grouped Schedules cannot be updated individually.
    

Grouped Schedules run based on their time expression, but are blocked until all prior scheduled Jobs have been successfully executed. For more information, see [Schedule jobs](/vault-core/5-9/EN/reference/scheduler#jobs).

You can set Schedules belonging to the same Schedule Group to run at the same time. When you do this, the Schedules will run in the order that was defined when the Schedules were created. You can add or remove Schedules from a Schedule Group regardless of the state of the Group. For example, you can add a Schedule to a group that is in an Enabled state. However, the following rules apply when adding or removing schedules:

-   If the Group is Enabled, schedules cannot be added as Pending - they must be added into the Group as Enabled.
    
-   If the Group is in Pending state, only pending Schedules can be added into the Group.
    
-   When a Schedule is removed from a Group, the removal is effective immediately, but any past events still scheduled to run will not be affected by the removal of the Schedule.
    

chat\_bubble

For schedules that are part of a Schedule Group, the second and subsequent schedules in that group will always fetch postings and balances with an observation time after the previous schedule’s runtime. This is to ensure that these schedules will fetch postings and balances that are instructed by the previous schedules.

### [](#effect_of_job_failure_on_grouped_or_tagged_schedules "Copy link to heading")Effect of job failure on grouped or tagged schedules

Schedule jobs can fail, for example due to Smart Contract programming errors, or if a Posting is made that is rejected by the Posting Processor where the rejection reason is not marked as [non-blocking](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_examples#non_schedule_blocking_posting_rejections) by the Smart Contract. This has an effect on whether future jobs are published:

  
| Grouped Schedule? | Schedule has Tag and Operation Event? | Effect |
| --- | --- | --- |
| 
No

 | 

No

 | 

Future Jobs for this Schedule in this account are blocked until resolved.

 |
| 

No

 | 

Yes

 | 

Future Jobs for this Schedule in this account are blocked until resolved and Operation Event(s) for the Tag(s) are suppressed until resolved.

 |
| 

Yes

 | 

No

 | 

Future Jobs for all Schedules in the Group for this account are blocked until resolved.

 |
| 

Yes

 | 

Yes

 | 

Future Jobs for all Schedules in the Group for this account are blocked until resolved and all Operation Event(s) associated with the grouped Schedules are suppressed until resolved.

 |

### [](#example_projection_of_a_group_of_schedules "Copy link to heading")Example projection of a group of schedules

If a group is defined with these schedules:

    
| Order | Name | Interval | Start time | Next run |
| --- | --- | --- | --- | --- |
| 
0

 | 

sch1

 | 

Every hour

 | 

01:00

 | 

01:00

 |
| 

1

 | 

sch2

 | 

Every 2 hour

 | 

00:00

 | 

00:00

 |
| 

2

 | 

sch3

 | 

Every hour

 | 

00:00

 | 

00:00

 |

The jobs produced would look like:

-   `00:00 sch2 - Job01_S2A`
    
-   `00:00 sch3 - Job02_S3A`
    
-   `01:00 sch1 - Job03_S1A`
    
-   `01:00 sch3 - Job04_S3B`
    
-   `02:00 sch1 - Job05_S1B`
    
-   `02:00 sch2 - Job06_S2B`
    
-   `02:00 sch3 - Job07_S3C`
    
-   `03:00 sch1 - Job08_S1C`
    
-   `03:00 sch3 - Job09_S3D`
    
-   `04:00 sch1 - Job10_S1D` - fourth job for sch1
    
-   `04:00 sch2 - Job11_S2C` - third job for sch2
    
-   `04:00 sch3 - Job12_S3E` - fifth job for sch3
    
-   and so on …