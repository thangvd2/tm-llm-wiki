---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_create_a_trigger"
title: "How to create an Edge Function Trigger"
scraped_at: "2026-06-17T05:35:38.081Z"
images: 0
---

# How to create an Edge Function Trigger

## [](#prerequisites "Copy link to heading")Prerequisites

Triggers are only available in Vault Core 5.7 and later.

Triggers need credentials for their Edge Function Executions to perform requests against Vault Core API. See [Enabling Triggers Service Account](/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/installation_guide#enabling_triggers_service_account) for how to do this.

## [](#example_auto_close "Copy link to heading")Example: Creating a Trigger to act upon Contract Notifications

In this example, we will create a Trigger and Edge Function that will close an account when the balance reaches zero.

### [](#notification_structure "Copy link to heading")1\. Notification structure

The Edge Function needs distinct criteria on which to decide if the event is relevant to its business purpose, and therefore whether to ignore the event or not.

In this example we will use the `notification_type` field, which is controlled by the Smart Contract that emits the event, as the criteria on which the Edge Function uses to make a decision.

The segment of Smart Contract code to create such a notification value will look similar to this:

We will embed this logic into the Smart Contract later on.

### [](#2_create_the_edge_function "Copy link to heading")2\. Create the Edge Function

Use the following code to create an Edge Function:

In particular, note the predicate `req.notification_type != "CLOSE_ACCOUNT" or req.resource_type != "RESOURCE_ACCOUNT"` that ignores the notification if it does not match the type of notification or resource that it should process. This reuses the `notification_type` value from our Smart Contract in [1\. Notification structure](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_create_a_trigger#notification_structure). This filtering is necessary because other notifications can be emitted by Smart Contracts, and are not indicative of a need to close the account.

The `matching_event` in the response is purely informational for later inspection of the Edge Function executions, and has no effect on the behaviour.

Create this Edge Function through the [CreateEdgeFunction](/vault-core/5-8/EN/api/edge_functions_api#_edge_functions_api_v1_EdgeFunction_CreateEdgeFunction) endpoint:

### [](#create-the-trigger "Copy link to heading")3\. Create the Trigger

Now that we have an Edge Function to close an account when it receives a notification, we need to configure it to receive those notifications when Smart Contracts emit them.

Smart Contract notifications (as created through directives like those in [1\. Notification structure](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_create_a_trigger#notification_structure)) are sent on the [Contract notification events streaming API](/vault-core/5-8/EN/api/core_api#contract_notification_events). The documentation for this streaming API states that the Kafka topic is `vault.core_api.v1.contracts.contract_notification.events`.

chat\_bubble

The current version of Edge Functions in Vault Core only supports reading from the Contracts notifications topic.

Create the Trigger through the [CreateEdgeFunctionTrigger](/vault-core/5-8/EN/api/edge_functions_api#_edge_functions_api_v1_EdgeFunctionTrigger_CreateEdgeFunctionTrigger) endpoint:

chat\_bubble

The `default-service-account` identity must have been enabled, as per the [Prerequisites](/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_create_a_trigger#prerequisites), otherwise this request will be rejected.

If successfully created, this Trigger will start relaying Contract notifications to the Edge Function within approximately 90 seconds.

### [](#4_create_the_smart_contract "Copy link to heading")4\. Create the Smart Contract

Now that the Trigger and Edge Function are in place, we can start producing events for them to react to. The following is a minimal Smart Contract that will serve for the purposes of this demonstration:

This Smart Contract will emit a notification with type `"CLOSE_ACCOUNT"` after a posting is processed that takes all the account’s balances to zero.

Create a Product and Product Version with this Smart Contract via the [CreateProductVersion](/vault-core/5-8/EN/api/core_api#_core_api_v1_products_ProductVersion_CreateProductVersion) endpoint:

Any accounts created with this Product Version will now be automatically closed within a short period of time after a posting results in all of the balance addresses reaching zero.

## [](#conclusion "Copy link to heading")Conclusion

This example walked through the process of:

1.  Defining an Edge Function.
    
2.  Hooking that Edge Function up to a stream of Vault Core events with a Trigger.
    
3.  Emitting matching events from a Smart Contract.
    

You now have the necessary information to write Edge Functions to automatically perform more complex operations not possible in a Smart Contract alone.