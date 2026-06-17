---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/edge_functions/managing_triggers"
title: "Edge Function Trigger Management"
scraped_at: "2026-06-16T15:25:01.792Z"
images: 0
---

# Edge Function Trigger Management

It is important to understand which events will be processed by a Trigger as its status changes over time, and how they will be processed.

## [](#lag "Copy link to heading")Lag in response to requested changes

Under normal conditions there is a lag of up to approximately 60 seconds between a Trigger being created or updated and its new configuration being reflected in how the system is processing source events. This should be taken into account when causing source events to be published that could be missed during the intervening period.

## [](#retries_and_edge_function_versions "Copy link to heading")Retries and Edge Function Versions

A Trigger can specify a specific Edge Function Version that should be used to process the source event, or it can default to using the Edge Function’s `current_edge_function_version`. Note that whichever is specified will take effect at the time that the Trigger processes the source event, and will "pin" the effective Edge Function Version to process the Trigger Operation from that point forwards.

This ensures that retries of the Trigger Operation respect the idempotent behaviour of the Edge Function Version they were run with.

## [](#trigger_initial_activation "Copy link to heading")Trigger initial activation

When a Trigger is made `ACTIVE` for the first time, it will start listening for the most recent events on the source event Kafka topic (subject to [Lag in response to requested changes](/vault-core/5-8/EN/reference/edge_functions/managing_triggers#lag)). This means it will ignore all historical events within that topic.

See also [Trigger reactivation](/vault-core/5-8/EN/reference/edge_functions/managing_triggers#reactivation).

## [](#trigger_deactivation "Copy link to heading")Trigger deactivation

When a Trigger is made `INACTIVE`, it will stop listening to source events (subject to [Lag in response to requested changes](/vault-core/5-8/EN/reference/edge_functions/managing_triggers#lag)). However, any existing Trigger Operations will continue to be executed. If the Trigger was previously `ACTIVE`, then it will remember where it stopped listening to source events.

If it is necessary to prevent these being executed, the Edge Function can be deactivated. Note that this will result in the pending Trigger Operations ending in a `FAILED` status.

When a Trigger is made `INACTIVE`, it will stop listening to source events (subject to [Lag in response to requested changes](/vault-core/5-8/EN/reference/edge_functions/managing_triggers#lag)). If the Trigger was previously `ACTIVE`, then it will remember the point where it stopped listening to source events. Any Trigger Operations that exist up to this point will continue to be executed, even if the Trigger is deactivated before they can be executed.

If it is necessary to prevent the remaining Trigger Operations being executed, deactivate the Edge Function. Note that this will result in the all pending Trigger Operations using the Edge Function ending in a `FAILED` status.

## [](#trigger_reactivation "Copy link to heading")Trigger reactivation

If a Trigger was previously `ACTIVE`, and it was made `INACTIVE`, then it will have remembered the last source events that it processed. If it is then made `ACTIVE` again (subject to [Lag in response to requested changes](/vault-core/5-8/EN/reference/edge_functions/managing_triggers#lag)), it will continue processing source events from that point forwards, including any backlog of events that has accumulated in the intervening time.

chat\_bubble

If the Trigger has been `INACTIVE` for an extended period, then the backlogged source events will start being dropped from Kafka retention, and will not be processed by the Trigger upon being made `ACTIVE` again.

However, this behaviour may not be desirable. For example, it may be intentional that the Trigger never processes source messages published prior to it being made `ACTIVE` again. The solution for this is to leave the existing Trigger in its `INACTIVE` status, and create a new Trigger (with a distinct id) with `ACTIVE` status, but that is otherwise the same as the original Trigger.