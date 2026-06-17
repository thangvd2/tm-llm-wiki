---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/metadata"
title: "Metadata"
scraped_at: "2026-06-16T16:37:10.299Z"
images: 0
---

# Metadata

The metadata provides a description of the Supervisor Contract. Some of the metadata fields are required in order for a Supervisor Contract to be valid.

## [](#api "Copy link to heading")api

A [Semantic Version](https://semver.org/) string defining the particular Vault Contracts API version that the product is coded against. Consult the [list of all supported API versions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#release_notes) for the list of currently-supported versions.

**Required**: True

**Example**

## [](#version "Copy link to heading")version

The logical Semantic Version of the product. Follows the `Backus–Naur Form Grammar` as defined on [https://semver.org](https://semver.org/). Different contract versions under the same product must have different `version` metadata values.

**Required**: True

**Example**

## [](#events_timezone "Copy link to heading")events\_timezone

The timezone used when triggering jobs for Schedules defined in this Contract. If not specified, the Contract uses UTC by default. If the account is part of a [Processing Group](/vault-core/5-8/EN/reference/processing_groups) that specifies a timezone, the Processing Group timezone overrides this metadata. We recommend using `vault.events_timezone` throughout a Contract when referencing a specified timezone. Before adding accounts to a Processing Group, ensure all Contracts have the same timezone (or none at all) declared in metadata and then set the Processing Group timezone to match that. This must match a timezone ID in the IANA timezone database (for example, 'America/New\_York', 'Europe/Paris' or 'Asia/Tokyo'). More details can be found [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#supported_timezones).

**Required**: False

**Default**: `UTC`

**Example**

## [](#supervised_smart_contracts "Copy link to heading")supervised\_smart\_contracts

The set of Smart Contract Version IDs that can be onboarded to the Plan of the Supervisor Contract. This attribute is optional. If omitted, any Smart Contract can be onboarded and the `overrides_event_types` attribute in [Event Types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype) cannot be set.

**Required**: False

**Example**

## [](#event_types "Copy link to heading")event\_types

A list of the Supervisor Contract [Event Types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#supervisorcontracteventtype). Required if `activation_hook` or `conversion_hook` return any events. Conversely, if `event_types` are defined on a Supervisor Contract, then `activation_hook` must be defined in order to activate a Plan on that Supervisor Contract. Similarly, if `event_types` are defined, then `conversion_hook` must be defined in order to convert a Plan to that Supervisor Contract. More details can be found [here](/vault-core/5-8/EN/reference/scheduler).

**Required**: False

**Example**

## [](#event_types_groups "Copy link to heading")event\_types\_groups

An optional list of the Supervisor Contract [Event Types Groups](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#eventtypesgroup). More details about Scheduler Groups can be found [here](/vault-core/5-8/EN/reference/scheduler#schedule_groups).

**Required**: False

**Example**

## [](#data_fetchers "Copy link to heading")data\_fetchers

An optional list of the Supervisor Contract data fetchers. The fetcher IDs of the same fetcher type must be unique. The classes of the fetchers allowed in this list, named with the pattern \[FetcherType\]Fetcher, can be found [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes). You can define the IDs of the fetchers in the arguments of the `@fetch_account_data` [decorator](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/account_fetcher_requirements), to request hook data based on these fetchers. For more details about optimised data fetching, see the [performance considerations](/vault-core/5-8/EN/reference/contracts/contracts_api_3xx/performance_considerations#optimised_smart_contract_data_fetching) section.

**Required**: False

**Example**

## [](#notification_types "Copy link to heading")notification\_types

An optional list of the Supervisor Contract, used to validate the notification type parameter in the [AccountNotificationDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective).

**Required**: False

**Example**