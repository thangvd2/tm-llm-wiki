---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata"
title: "Metadata"
scraped_at: "2026-04-20T18:20:25.268Z"
images: 0
---

# Metadata

The metadata provides a description of the Smart Contract. Some of the metadata fields are required in order for a Smart Contract to be valid.

The metadata consists of a docstring describing the Smart Contract, and a number of fields which define important elements of it.

## [](#api "Copy link to heading")api

A [Semantic Version](https://semver.org/) string defining the particular Vault Contracts API version that the product is coded against. Consult the [list of all supported API versions](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes#release_notes) for the list of currently-supported versions.

**Required**: True

**Example**

## [](#version "Copy link to heading")version

The logical Semantic Version of the product. Follows the `Backus–Naur Form Grammar` as defined on [https://semver.org](https://semver.org/). Different contract versions under the same product must have different `version` metadata values.

**Required**: True

**Example**

## [](#expected_parameters "Copy link to heading")expected\_parameters

A list of parameters that can be used by this Smart Contract. These parameters must be created using the [Core API Parameters](/vault-core/5-8/EN/api/core_api#Parameters) service before uploading the Smart Contract. Once the parameters are defined here, the parameter values can be fetched by defining `ParameterIntervalFetcher` or `ParametersObservationFetcher` instances, which in turn can be specified as part of the required data for a hook using the `fetch_account_data` hook. The parameter values can then be retrieved using the `get_parameter_timeseries` or `get_parameters_observation` functions, specifying the fetcher ID and parameter ID.

**Required**: False

**Example**

## [](#global_parameters "Copy link to heading")global\_parameters

A list of global parameters that are required by this Smart Contract. The global parameter values can be accessed using the `get_parameter_timeseries` library function by specifying the name of the global parameter that the Smart Contract requires. These parameters must have been created using the Core API before the Smart Contract is uploaded. Date parameters with a date type of `RELATIVE` are not supported; only use dates with a date type of `ABSOLUTE`.

**Required**: False

**Example**

## [](#parameters "Copy link to heading")parameters

The list of Parameter definitions that are associated with this particular Smart Contract. You can access Parameter values by using the `get_parameter_timeseries` library function, and specifying the name of the Parameter required by the Smart Contract. You can only define `INSTANCE` and `TEMPLATE` [level](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#parameterlevel) Parameters in this list. You must include `GLOBAL` level Parameters in the [global\_parameters](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#global_parameters) metadata field, using their id as a reference. See additional examples [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines#defining_parameters_and_shapes).

**Required**: False

**Example**

## [](#tside "Copy link to heading")tside

Tside for any accounts created with this product version. Tside is used by the bank to indicate the side of the balance sheet the accounts are on.

**Required**: False

**Default**: `Tside.LIABILITY`

**Example**

## [](#events_timezone "Copy link to heading")events\_timezone

The timezone used when triggering jobs for Schedules defined in this Contract. If not specified, the Contract uses UTC by default. If the account is part of a [Processing Group](/vault-core/5-8/EN/reference/processing_groups) that specifies a timezone, the Processing Group timezone overrides this metadata. We recommend using `vault.events_timezone` throughout a Contract when referencing a specified timezone. Before adding accounts to a Processing Group, ensure all Contracts have the same timezone (or none at all) declared in metadata and then set the Processing Group timezone to match that. This must match a timezone ID in the IANA timezone database (for example, 'America/New\_York', 'Europe/Paris' or 'Asia/Tokyo'). More details can be found [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#supported_timezones).

**Required**: False

**Default**: `UTC`

**Example**

## [](#supported_denominations "Copy link to heading")supported\_denominations

The denominations that are permitted for all accounts created from this Smart Contract.

**Required**: False

**Example**

## [](#event_types "Copy link to heading")event\_types

An optional list of the [Smart Contract Event Types](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontracteventtype). If defined, each scheduled event returned by `activation_hook` or `conversion_hook` must be included in this list. Conversely, if `event_types` are defined on a Smart Contract, then `activation_hook` must be defined in order to activate an Account on that Smart Contract. Similarly, if `event_types` are defined, then `conversion_hook` must be defined in order to convert an Account to that Smart Contract. More details can be found [here](/vault-core/5-8/EN/reference/scheduler).

**Required**: False

**Example**

## [](#event_types_groups "Copy link to heading")event\_types\_groups

An optional list of the Smart Contract [Event Types Groups](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#eventtypesgroup). If defined, the `event_types` list is no longer optional. More details about Scheduler groups can be found [here](/vault-core/5-8/EN/reference/scheduler#schedule_groups).

**Required**: False

**Example**

## [](#data_fetchers "Copy link to heading")data\_fetchers

An optional list of the Smart Contract data fetchers. The fetcher IDs of the same fetcher type (postings, balances, etc.) must be unique. The classes of the fetchers allowed in this list, named with the pattern \[FetcherType\]Fetcher, can be found [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes). You can define the IDs of the fetchers in the arguments of the `@fetch_account_data` [decorator](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements), to request hook data based on these fetchers. For more details about optimised data fetching, see the [Optimised Data Fetching](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts#data_fetchers) and [Smart Contract Data Requirements](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/performance_considerations#smart_contract_data_requirements) sections.

**Required**: False

**Example**

## [](#notification_types "Copy link to heading")notification\_types

An optional list of the Smart Contract, used to validate the notification type parameter in the [AccountNotificationDirective](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#accountnotificationdirective).

**Required**: False

**Example**

## [](#address_details "Copy link to heading")address\_details

An optional list of the Smart Contract [Address Details](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#addressdetails). If defined, this provides Smart Contracts with a rich description of the balance addresses that are associated with it. These addresses are for storing separate balances or partitioning the total funds associated with an account.

**Required**: False

**Example**

## [](#attributes "Copy link to heading")attributes

A list of attributes that are exposed by this Smart Contract. You can get the values of attributes for particular effective times by using the `account-attribute-values` endpoint on the Core API.

**Required**: False

**Example**

## [](#adjustment_strategy "Copy link to heading")adjustment\_strategy

The adjustment strategy to use. The supported options are listed in [AdjustmentStrategy](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#adjustmentstrategy).

**Required**: False

**Example**