---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators"
title: "Decorators"
scraped_at: "2026-06-22T19:17:22.319Z"
images: 0
---

# Decorators

Used to decorate a hook and inform Vault about the data requirements when executing the hook. For more information about requirements fetching, see [requirements](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#requirements) and [optimised smart contract data fetching](/vault-core/5-9/EN/reference/contracts/contracts_api_3xx/performance_considerations#optimised_smart_contract_data_fetching)

## [](#fetch_account_data "Copy link to heading")fetch\_account\_data

`@fetch_account_data(*, attribute_name, balances, calendars, event_type, flags, last_scheduled_event_datetimes, parameters, postings)`

See full account fetcher requirements for [Smart Contracts](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements) and [Supervisors](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/account_fetcher_requirements).

### [](#smart_contract "Copy link to heading")Smart Contract:

  
| name | type | description |
| --- | --- | --- |
| 
attribute\_name

 | 

`str`

 | 

The defined Attribute that the data will be fetched for, for example: `@fetch_account_data(attribute_name="current_balance", ...)` (only applies to [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook)). The `attribute_hook` can be decorated with multiple `@fetch_account_data` decorators to define requirements per attribute\_name.

 |
| 

balances

 | 

`List`\[`str`\]

 | 

A list of [BalancesIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher) or [BalancesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) Fetcher IDs

 |
| 

calendars

 | 

`List`\[`str`\]

 | 

A fetcher for retrieving calendar events over an interval, inclusive of end time.The `filter` attribute must be populated with a `CalendarsFilter` containing the calendar IDs to fetch for.

 |
| 

event\_type

 | 

`str`

 | 

The defined [metadata event\_type](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) that the data will be fetched for, for example: `@fetch_account_data(event_type="ACCRUE_INTEREST", ...)` (only applies to `scheduled_event_hook`). The `scheduled_event_hook` can be decorated with multiple `@fetch_account_data` decorators to define requirements per event\_type.

 |
| 

flags

 | 

`List`\[`str`\]

 | 

A list of [FlagsIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsintervalfetcher) and [FlagsObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservationfetcher) Fetcher IDs

 |
| 

last\_scheduled\_event\_datetimes

 | 

`List`\[`str`\]

 | 

A list of [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher)Fetcher IDs

 |
| 

parameters

 | 

`List`\[`str`\]

 | 

A list of [ParametersIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersintervalfetcher) or [ParametersObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersobservationfetcher) Fetcher IDs

 |
| 

postings

 | 

`List`\[`str`\]

 | 

A list of [PostingsIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher) Fetcher IDs

 |

### [](#supervisor "Copy link to heading")Supervisor:

  
| name | type | description |
| --- | --- | --- |
| 
balances

 | 

`Dict`\[`str`, `List`\[`str`\]\]

 | 

A dictionary where the key is Supervisee [SmartContractDescriptor](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontractdescriptor) alias and value is a list of [BalancesIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher) or [BalancesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) Fetcher IDs.  

**Note: Currently only available in `pre_posting_hook`**

 |

## [](#requires "Copy link to heading")requires

`@requires(*, attribute_name, balances, calendar, data_scope, event_type, flags, last_execution_datetime, parameters, postings, supervisee_hook_directives)`

See full requirements reference for [Smart Contracts](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements) and [Supervisors](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements).

  
| name | type | description |
| --- | --- | --- |
| 
attribute\_name

 | 

`str`

 | 

The defined Attribute that the data will be fetched for, for example: `@requires(attribute_name="current_balance", ...)` (only applies to [attribute\_hook](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#attribute_hook)). The `attribute_hook` can be decorated with multiple `@requires` decorators to define requirements per attribute\_name.

 |
| 

balances

 | 

`str`

 | 

A [Range Specifier](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#range_specifiers) for example "1 day live"

 |
| 

calendar

 | 

`List`\[`str`\]

 | 

A list of Calendar IDs of the required Calendar Events

 |
| 

data\_scope

 | 

`str`

 | 

See [supervisor data scope](./../supervisor_contracts_api_reference4xx/hook_requirements#data_scope)  

(**Supervisor Only**)

 |
| 

event\_type

 | 

`str`

 | 

The defined [metadata event\_type](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) that the requirements will fetch, for example: `@requires(event_type="ACCRUE_INTEREST", ...)` (only applies to `scheduled_event_hook`). The `scheduled_event_hook` can be decorated with multiple `@requires` decorators to define requirements per event\_type.

 |
| 

flags

 | 

`bool`

 | 

Defaults to False

 |
| 

last\_execution\_datetime

 | 

`List`\[`str`\]

 | 

A list of [`event_types`](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#event_types) to retrieve last execution datetimes for

 |
| 

parameters

 | 

`bool`

 | 

Defaults to False

 |
| 

postings

 | 

`str`

 | 

A [Range Specifier](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#range_specifiers) for example "1 day live"

 |
| 

supervisee\_hook\_directives

 | 

`str`

 | 

One of `none`, `all` or `invoked` that defaults to `none`  

(**Supervisor Only**)

 |