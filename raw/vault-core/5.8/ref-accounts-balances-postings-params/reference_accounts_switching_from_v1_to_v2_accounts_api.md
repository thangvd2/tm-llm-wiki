---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/accounts/switching_from_v1_to_v2_accounts_api"
title: "Switching from the v1 to v2 Accounts API"
scraped_at: "2026-05-05T20:04:48.687Z"
images: 0
---

# Switching from the v1 to v2 Accounts API

This section explains how to perform the complete switch from the `/v1/accounts` and `/v1/internal-accounts` endpoints to the `/v2/accounts` endpoints and associated Streaming API topics. We deem this switch complete when your ecosystem around Vault Core no longer uses these endpoints and associated Account events topics, and instead uses the `/v2/accounts` endpoint and Account events v2 topic as shown in the below table:

   
| /v1/accounts endpoints | /v2/accounts endpoint | Account events v1 topics | Account events v2 topic |
| --- | --- | --- | --- |
| 
-   [/v1/accounts](/vault-core/5-8/EN/api/core_api#account)
    
-   [/v1/accounts/{account\_id}:updateDetails](/vault-core/5-8/EN/api/core_api#accountdetail)
    
-   [/v1/internal-accounts](/vault-core/5-8/EN/api/core_api#internalaccount)
    





 | 

[/v2/accounts](/vault-core/5-8/EN/api/core_api#account)





 | 

-   `vault.api.v1.accounts.account.created` (deprecated)
    
-   `vault.api.v1.accounts.account.status.updated` (deprecated)
    
-   `vault.core_api.v1.accounts.account.events`
    





 | 

`vault.core_api.v2.accounts.account.events`

 |

The process is summarised in the below diagram:

![Vault\_Core\_5\_0\_\_diagrams\_-\_v1\_\_\_v2\_Accounts\_switchover.svg](/vault-core/5-8/EN/_astro/uuid-09e4ec9f-5e17-7299-e250-7f5abd6d7855-en.C0jNn0xn_2bUCsn.svg)

## [](#usable_v1_accounts_endpoints_after_the_switch "Copy link to heading")Usable v1 Accounts endpoints after the switch

When the switch to the `/v2/accounts` endpoint and Account events v2 topic is complete, you can still use:

-   `/v1/account-updates`, and the `vault.core_api.v1.accounts.account_update.events` topic. However, the v2 Accounts API’s UpdateAccount endpoint has near-feature-parity with this v1 Accounts API endpoint, and `PUT /v2/accounts` can handle Activation, single-Account Conversion and Closure journeys
    
-   `/v1/account-update-batches`, and the `vault.core_api.v1.accounts.account_update_batch.events` topic. However, it will be simpler and more performant to call `PUT /v2/accounts` for any account which needs updating.
    
-   `/v1/account-migrations` (which also streams events to the `vault.core_api.v1.accounts.account_update.events`, and the `vault.core_api.v1.accounts.account_update_batch.events` topic)
    

chat\_bubble

If you are using derived parameters, you can use the [DerivedParameterValue](/vault-core/5-8/EN/api/core_api#derivedparametervalue) resource to continue retrieving the calculated values after switching to the v2 Accounts API. We have added an enhanced version of this feature - for more information see [Account Attributes](/vault-core/5-8/EN/reference/accounts/account_attributes/).

## [](#recommended_simplification_to_client_deployments "Copy link to heading")Recommended simplification to client deployments

Due to the previous behaviour of `/v1/accounts`, client deployments may have incorporated both the synchronous and asynchronous (streaming) API calls into a single function. However, because `v2/accounts` is now a fully synchronous endpoint, these functions will need to be reworked. This will affect integrations handling the following BAU journeys:

-   Account opening
    
-   Account conversion
    
-   Account closure
    
-   Instance Parameter value updates
    
    chat\_bubble
    
    While Instance Parameter Values exist in Vault Core 5, they are deprecated in favour of Account-owned [Parameter](/vault-core/5-8/EN/reference/parameters) values.
    

Therefore, integrating with the new API is simpler because it is not necessary to consult the streaming API to retrieve the updated state of an Account.

## [](#before_you_start "Copy link to heading")Before you start

Before beginning the switch to `/v2/accounts`, ensure that:

-   You are using Vault Core version 5.0 or later
    
-   All Accounts are backed by [Smart Contract Language version 4](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/) or higher
    
-   No Accounts are in the following states:
    
    -   `PENDING_CLOSURE` status; or
        
    -   `OPEN` status, but without having successfully executed the `activation_hook` or `conversion_hook`
        
    
-   You will not be migrating Data into Vault Core at the same time as performing the switch to `/v2/accounts`. See [Step 1 - Set up the v2 Streaming API consumer](/vault-core/5-8/EN/reference/accounts/accounts_version_2#step_1_set_up_the_v2_streaming_api_consumer) for more information.
    

chat\_bubble

We recommend that you also modify Vault’s clients' stores to ensure that `event_id`s are stored for consumed v2 Account Events. This is because in the [v2 Accounts Streaming API](/vault-core/5-8/EN/api/core_api#account_events_v2_topic), there is a 1:n mapping of requests (used by the REST API clients) to events (consumed by Stream API clients). Events reconciliation uses the `event_id` on the messages sent to the Streaming API.

### [](#why_we_recommend_switching_all_api_clients_simultaneously "Copy link to heading")Why we recommend switching all API clients simultaneously

We strongly recommend switching to the v2 topics and then to the sync API clients in quick succession (ideally simultaneously), and caution against leaving systems in a state whereby `/v1/accounts` is being called while consuming v2 Account events, especially in production environments. There are two main reasons for this:

-   There is considerable complexity when reasoning about and communicating the v1 and v2 Accounts lifecycles and how they interact. For example, many statuses have the same names but different behaviour.
    
-   If there are deployments which consume events from the v2 Accounts topics, and use that data directly to interrogate `/v1/accounts` endpoints, then the deployments will have to "translate" the data in the correct format before using it in the `/v1/accounts` endpoints.
    

The most crucial changes which could cause confusion between v1 and v2 Accounts lifecycles are:

-   The changes to the Account lifecycle and statuses; in particular the PENDING\_OPENING status, only applicable to v2 streaming events instigated on the `/v1/accounts` endpoint
    
-   The v2 Accounts topic streams events for Internal Accounts, while the v1 Accounts topic does not
    

#### [](#example_1_v1_request_for_account_opening_fails_before_creating_schedules "Copy link to heading")Example 1 - v1 request for Account opening fails before creating schedules

*Events received*:

-   Account Update Created (PENDING\_EXECUTION status)
    
-   Account Update Updated (REJECTED/ERRORED status)
    
-   V2 Account event (PENDING\_OPENING status)
    
-   V2 Account event (PENDING status)
    

*Conflict*: In the v1 Accounts lifecycle, this is an OPEN Account; in the V2 Accounts lifecycle, this is a PENDING\_OPENING Account.

#### [](#example_2_account_created_using_v1internal_accounts "Copy link to heading")Example 2 - Account created using /v1/internal-accounts

*Events received*:

-   v1 Account Created event (only identified by the Account ID)
    
-   v2 Account Created event with type set to ACCOUNT\_TYPE\_INTERNAL
    

## [](#step_1_set_up_the_v2_streaming_api_consumer "Copy link to heading")Step 1 - Set up the v2 Streaming API consumer

Since the v2 Accounts Streaming API topic emits events from both the `/v1/accounts` and the `/v2/accounts` API calls, step 1 involves setting up your deployment to consume events triggered due to calling `/v1/accounts` from the v2 Accounts Streaming API topic, and making it ready for consuming the `/v2/accounts` events (henceforth referred to as a "v2 deployment").

chat\_bubble

To make the v2 deployment ready for REST API calls to the `/v2/accounts` endpoint, see [Key differences between v1 and v2 Accounts API](/vault-core/5-8/EN/reference/accounts/accounts_version_2#key_differences_between_v1_and_v2_accounts).

The current deployment which consumes `/v1/accounts` events (henceforth referred to as a "v1 deployment"), can coexist with the v2 deployment until the switch is complete.

### [](#how_to_avoid_acting_upon_duplicate_messages_when_the_v2_deployment_is_initialised "Copy link to heading")How to avoid acting upon duplicate messages when the v2 deployment is initialised

After the Vault Core 5 upgrade is complete, Vault Core will represent mutations made via `/v1/accounts` by streaming events on the V2 topic. Upon initialisation, the v2 deployment will start consuming all events on the v2 topic from the beginning of the retention period. There may be messages consumed which are duplicate representations of events already consumed by the v1 deployment.

For example, after the upgrade to Vault Core 5, a successful Account Opening using the `/v1/accounts` endpoint will result in the following messages being streamed:

1.  `vault.core_api.v1.accounts.account.events` topic: AccountCreatedEvent
    
2.  `vault.core_api.v1.accounts.account_update.events` topic: AccountUpdateCreatedEvent
    
3.  `vault.core_api.v1.accounts.account_update.events` topic: AccountUpdateUpdatedEvent (to signify a completed activation)
    
4.  `vault.core_api.v2.accounts.account.events` topic: AccountCreatedEvent with `PENDING_OPENING` status
    
5.  `vault.core_api.v2.accounts.account.events` topic: AccountUpdatedEvent with `OPEN` status (to signify a successfully completed activation)
    

In the above example:

-   The v1 deployment can be aware of an Account activation from consuming events 1, 2 and 3.
    
-   The V2 deployment will *also* become aware of the same Account activation by consuming 4 and 5.
    

Both deployments, as a result of being aware of the successful activation, may be programmed to take downstream actions (such as sending a welcome email to a customer, creating a Vault Posting, and so on). It is undesirable that the same Account activation triggers duplicate actions.

For this reason, we have added a boolean `streamed_to_v1_topic` field to messages from the v2 Accounts Streaming API. The v2 deployment can use this field to implement branching logic to maintain downstream idempotency.

### [](#why_you_should_not_migrate_via_the_data_loader_during_the_switch "Copy link to heading")Why you should not migrate via the Data Loader during the switch

We strongly recommend NOT performing an Account Migration (via the Data Loader) at the same time as the `/v1/accounts` to `/v2/accounts` switch.

In Vault Core 5, the Data Loader will precipitate the same Stream API events as a call to `POST /v1/accounts`, streaming both v1 Account events and v2 Account events. These v2 Account events from a migration into Vault Core 5 will always have `streamed_to_v1_topic` set to true.

If a migration into Vault Core 5 is happening at the same time as a switch, it is possible that the downstream v2 deployments erroneously ignore, or do a no-op on the V2 Stream API events. If the v1 deployments are logically the same as the v2 deployments, but with semantic differences to allow for the v2 Accounts lifecycle, then this will not be an issue.

## [](#step_2_switch_sync_api_clients "Copy link to heading")Step 2 - Switch sync API clients

Delete the deployment which is a client to the `/v1/accounts` endpoints. Then, create a new deployment which uses the synchronous `/v2/accounts` endpoint as explained in [Managing Accounts](/vault-core/5-8/EN/reference/accounts/accounts_version_2#managing_accounts).

## [](#step_3_wait_until_consumer_lag_on_v2_streaming_api_is_zero_or_nearly_zero "Copy link to heading")Step 3 - Wait until consumer lag on v2 Streaming API is zero (or nearly zero)

To ensure that there is no unacceptable lag between requests made to the synchronous `/v2/accounts` endpoint and the corresponding message being streamed on the v2 Accounts Streaming API, we recommend waiting until the consumer lag has dropped to zero, or almost zero.

chat\_bubble

It is helpful to build at least some basic observability so that you know when this condition is met.

## [](#step_4_wait_until_messages_cease_on_v1_accounts_streaming_api "Copy link to heading")Step 4 - Wait until messages cease on v1 Accounts Streaming API

Continue to consume any messages which appear on the v1 Accounts Streaming API topics.

Any business-as-usual (BAU) operations which use the `/v2/accounts` endpoint will only be reflected in the v2 Accounts Streaming API; they will not be reflected in the v1 Accounts Streaming API. Therefore, as a result of Step 2, the messages on the v1 Accounts Streaming API will dry up.

## [](#step_5_cease_consuming_from_the_v1_accounts_streaming_api "Copy link to heading")Step 5 - Cease consuming from the v1 Accounts Streaming API

Providing that at least seven days have elapsed since Vault Core was upgraded to 5.x, the v1 deployment can be safely deleted.

The switch is now complete.