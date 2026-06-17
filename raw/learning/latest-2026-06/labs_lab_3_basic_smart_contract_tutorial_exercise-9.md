---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-9"
title: "Exercise 9 - Creating Scheduled Events"
scraped_at: "2026-06-17T05:19:10.833Z"
images: 0
---

# Exercise 9 - Creating Scheduled Events

## [](#defining_scheduled_events "Copy link to heading")Defining Scheduled Events

We can define scheduled events for any repeating tasks that need to be performed throughout the lifecycle of an account. These can be used for anything, but typical examples would be daily interest accrual, monthly interest payment, or an annual account fee.

For this exercise, we’ll implement a scheduled event called `ACCRUE_INTEREST` that runs every day, calling a helper function `_get_interest_accrual_postings`, that we will extend further in the next exercise.

### [](#event_types_metadata "Copy link to heading")Event Types Metadata

We need to use a new metadata field here, [event\_types](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types). This field is an optional list of [Smart Contract Event Types](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype). This metadata is required when defining scheduled events. It can optionally include a list of `scheduler_tag_ids`, to allow for schedule tagging, but that won’t be needed for this exercise.

## [](#the_activation_hook "Copy link to heading")The Activation Hook

The [activation\_hook](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#activation_hook) carries out actions required when the account opens. It’s used to define any initial scheduled events, as well as any other logic on account opening, such as welcoming bonuses, loan principal disbursal, etc.

It optionally returns an [ActivationHookResult](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#activationhookresult) object. This object might contain a list of `AccountNotificationDirective` objects, a list of `PostingInstructionsDirective` objects, a dictionary of `ScheduledEvent` objects (with the event name as the key), or even a `Rejection` which, if returned, cancels opening the account.

## [](#scheduled_events_and_schedule_expressions "Copy link to heading")Scheduled Events and Schedule Expressions

As we’re trying to set up a scheduled event in this exercise, we’ll return a list containing one `ScheduledEvent` object in the `ActivationHookResult`.

This event will run daily at midnight, starting from when the account is opened, so we’ll need to define two of the fields in the `ScheduledEvent` - namely `start_datetime` and `expression`.

`start_datetime` is merely a regular `datetime` object, but `expression` is a [cron expression](https://www.baeldung.com/cron-expressions), represented as a [ScheduleExpression](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#scheduleexpression) object.

Once the `ScheduleEvent` is set up in the `activation_hook`, Vault Core’s internal scheduler service will regularly call the [scheduled\_event\_hook](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#scheduled_event_hook) (according to the schedule event’s expression), executing whatever logic is contained within that function.

Note that all scheduled events trigger the same hook, and it’s recommended to use some `if` statements based on the `event_type` to call other methods that deal with that specific event.

## [](#exercise "Copy link to heading")Exercise

### [](#accruing_daily_interest "Copy link to heading")Accruing Daily Interest

In the code given, we have already filled out the `scheduled_event_hook`, which sends £1 to the account on the event `ACCRUE_INTEREST`.

Fill out the `activation_hook` by constructing and returning a `ScheduleExpression` named `ACCRUE_INTEREST`. This expression should run daily at midnight, with a starting datetime of whenever the account was opened.

In addition, remember to fill in the `event_types` metadata field to include the `ACCRUE_INTEREST` event.

The account creation datetime can be fetched by using the `effective_datetime` in the [ActivationHookArguments](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#activationhookarguments) object.

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_9/test.py`