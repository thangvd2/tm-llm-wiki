---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/flags"
title: "Flags"
scraped_at: "2026-05-05T20:05:29.532Z"
images: 0
---

# Flags

## [](#what_are_flags "Copy link to heading")What are Flags?

### [](#purpose_of_flags "Copy link to heading")Purpose of Flags

Flags are binary markers, used to store information about one or more accounts or customers. Smart Contracts can optionally use Flags to change the logic that is applied to accounts or customers.

Only Smart Contracts can use Flags, and apart from their use in Smart Contracts, Vault Core is completely agnostic to Flags and its behaviour is not affected by their presence.

chat\_bubble

For more information about the use of Flags in Smart Contracts, see the [Release notes for Vault Core](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#release_notes) and the [example usage](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples#flags) documentation.

### [](#flags_and_flag_definition_resources "Copy link to heading")Flags and Flag Definition resources

The [Flag Definition](/vault-core/5-8/EN/api/core_api#flagdefinition) resource is used to create the types of Flag you want to use, set the level to which the Flags within it apply (account or customer), and control the visibility of the Flags; for example to hide them from users without required access rights.

The [Flag](/vault-core/5-8/EN/api/core_api#flag) resource is used to create and update the Flags themselves, and apply them to customers or accounts. Flags can be created for any interval; effective in the future, effective immediately, or backdated.

### [](#how_flags_apply_to_accounts_and_customers "Copy link to heading")How Flags apply to accounts and customers

Each Flag references a Flag Definition by its ID.

The collection of all Flags for a given Flag Definition and owner (an account or a customer) form a boolean time series, which tracks whether or not the Flag Definition should be considered active for that owner at any given time.

A Flag can be either on or off; if multiple overlapping Flags apply to the same owner at the same time, the Flag which was created later takes effect. If no Flag is effective at a given time, then the value of the time series at that point will be "False".

![A diagram showing the behaviour that newer flag values overwrite older values](/vault-core/5-8/EN/_astro/flag_timeseries_resolution_by_time.BDkIw0w4_Z1wu1Vd.svg)

Flags applied to customers will affect *any* accounts which list that customer as a stakeholder. For any account, Flag Definition, and given time, the time series will be considered True if *any* of the account’s stakeholder’s time series are True at that time, and False otherwise.

![A diagram showing the behaviour that a value of True for a flag value for a stakeholder overwrites a False value](/vault-core/5-8/EN/_astro/flag_timeseries_resolution_by_owner.sqzYaN7N_ZURIw1.svg)

## [](#managing_flags "Copy link to heading")Managing Flags

### [](#creating_a_flag_definition "Copy link to heading")Creating a Flag Definition

You must create a [Flag Definition](/vault-core/5-8/EN/api/core_api#flagdefinition) before you can create Flags.

Call `POST /v1/flag-definitions`, providing the:

-   `id`
    
-   `required_flag_level` of `FLAG_LEVEL_CUSTOMER` or `FLAG_LEVEL_ACCOUNT`
    
-   `flag_visibility`
    

#### [](#example_create_flag_definition_request "Copy link to heading")Example create Flag Definition request

The following example is a request to create a Flag Definition to apply at CUSTOMER level:

#### [](#example_create_flag_definition_response "Copy link to heading")Example create Flag Definition response

#### [](#event_streams "Copy link to heading")Event streams

There are no event streams for Flag Definition events.

### [](#updating_a_flag_definition "Copy link to heading")Updating a Flag Definition

chat\_bubble

You can only update a Flag Definition to set it to inactive; however, this will have no effect on any Flags (and therefore no effect on Smart Contract behaviour). It only has use if, for example, your downstream systems use this information.

You set a Flag Definition to inactive by sending an update request. Once set, a Flag Definition cannot be set to active again.

Call: `PUT /v1/flag-definitions/{flag_definition.id}`, providing the:

-   `is_active` value of "false"
    
-   `is_active` as a value of `update_mask.paths[]`
    

#### [](#example_request_to_set_flag_definition_to_inactive "Copy link to heading")Example request to set Flag Definition to inactive

#### [](#example_response_to_inactive_request "Copy link to heading")Example response to inactive request

#### [](#event_streams_2 "Copy link to heading")Event streams

There are no event streams for Flag Definition events.

### [](#creating_a_flag "Copy link to heading")Creating a Flag

A Flag requires a [Flag Definition](/vault-core/5-8/EN/reference/flags#creating_a_flag_definition) to reference. To create a Flag, call `POST /v1/flags`, providing the:

-   `flag_definition_id`
    
-   `effective_timestamp`, if setting the timestamp in the future or the past (otherwise leave blank for immediate effect)
    
-   `expiry_timestamp` (optional)
    
-   `customer_id` or `account_id` to which the Flag relates
    

chat\_bubble

-   The `is_backdated` field is only required if setting `effective_timestamp` in the past
    
-   The `value` of `FLAG_VALUE_ON` is the default if not provided
    

#### [](#example_create_flag_request "Copy link to heading")Example create Flag request

The following example is a request on the 9th February 2040 to create a Flag that will become active two weeks later, on the 23rd of February, and will expire two years following that, on the 22nd of February 2042:

#### [](#example_create_flag_response "Copy link to heading")Example create Flag response

#### [](#event_streams_3 "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Flag has been created.

 | 

[FlagEvent](/vault-core/5-8/EN/api/core_api#flag_events)(FlagCreatedEvent)

 | 

`vault.core_api.v1.flags.flag.events`

 |

### [](#updating_a_flag "Copy link to heading")Updating a Flag

You can update a Flag to change the description.

To update a Flag, call `PUT /v1/flags/{flag.id}`, providing the:

-   New `description`
    
-   `description` as a value of `update_mask.paths[]`
    

#### [](#example_update_flag_request "Copy link to heading")Example update Flag request

The following example request is to change a Flag description:

#### [](#example_update_flag_response "Copy link to heading")Example update Flag response

#### [](#event_streams_4 "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Flag description has been updated.

 | 

[FlagEvent](/vault-core/5-8/EN/api/core_api#flag_events)(FlagUpdatedEvent)

 | 

`vault.core_api.v1.flags.flag.events`

 |