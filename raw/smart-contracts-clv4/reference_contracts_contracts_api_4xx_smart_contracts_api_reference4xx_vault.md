---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault"
title: "Vault Object"
scraped_at: "2026-04-20T18:20:33.531Z"
images: 0
---

# Vault Object

## [](#attributes "Copy link to heading")Attributes

### [](#account_id "Copy link to heading")account\_id

`str` The id of the Account currently being executed.

### [](#events_timezone "Copy link to heading")events\_timezone

`ZoneInfo` The timezone in which this Account operates. If the account **belongs to a [Processing Group](/vault-core/5-8/EN/reference/processing_groups)** which has a timezone declared, this will be the timezone used. If there is **no Processing Group timezone set**, the `events_timezone` [metadata](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata#events_timezone) in the Contract will be used. If **neither of these is set**, the timezone defaults to UTC.

### [](#tside "Copy link to heading")tside

`Tside` The treasury side of the Account. It determines the Account [Balance](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balance) net sign.

## [](#methods "Copy link to heading")Methods

### [](#get_account_activation_datetime "Copy link to heading")get\_account\_activation\_datetime

`get_account_activation_datetime()`

Returns the Account’s activation date, stored in the `activation_timestamp` field.

**Return Value:** `datetime`

The Account’s `activation_timestamp` is a timezone-aware UTC datetime, and it’s equivalent to the `effective_datetime` of the Smart Contract’s `activation_hook`'s `ActivationHookArguments`. The `activation_timestamp` can be set to a time in the past when creating an account. The `start_datetime` of any schedules for this Account must be greater than or equal to the `activation_timestamp`.

Best practice is to use `get_account_activation_datetime` instead of `get_account_creation_datetime` in contracts. This ensures you get the Account’s actual activation time, regardless of how it was created.

### [](#get_account_creation_datetime "Copy link to heading")get\_account\_creation\_datetime

`get_account_creation_datetime()`

Returns the date that the Account was created.

If the Account has not yet been created, this will return `None` in the `activation_hook` but will return a timestamp in all other hooks.

If the Account has been created, this returns the `source_create_timestamp` field of the v2 account resource. In the v1 account resource, the timestamp does not correspond to any specific field.

**Note**: If the Account was migrated using the [Data Loader](/vault-core/5-8/EN/environment_and_installation/migrating_to_vault/migrating_using_the_data_loader_api), this is the date the account was created in the legacy core, not when it was migrated and inserted into Vault Core.

**Return Value:** `Optional`\[`datetime`\]

The Account creation date as a timezone-aware UTC datetime. The return value from this method will never be later than the `effective_datetime` of a Smart Contract hook, including the `activation_hook`. Do not use this method as the `start_datetime` for any schedules returned by any hooks; instead use a future datetime for schedule `start_datetime`s.

If the account is created in PENDING first and then updated into the OPEN state, then OPEN will cause this method to return a datetime in the `activation_hook`. If the account is created via the v2 endpoints, and in the OPEN state directly, then this method will return `None` in the `activation_hook`, but will return a datetime in all other hooks.

It is encouraged to replace all usage of `get_account_creation_datetime` with `get_account_activation_datetime` instead, as the latter returns when the Account first became active, irrespective of how it was created.

### [](#get_alias "Copy link to heading")get\_alias

`get_alias()`

Returns the alias value set for the Smart Contract Version in the Supervisor [SmartContractDescriptor](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#smartcontractdescriptor) object. Available in Supervisor Contract code for use on the Supervisee’s [Vault](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault) object only. If no aliases are defined in the Supervisor Contract metadata, then 'None' is returned. It cannot be used on a non-supervised Vault object.

**Return Value:** `str` The Supervisee Smart Contract Version alias.

### [](#get_balances_discrete_timeseries "Copy link to heading")get\_balances\_discrete\_timeseries

`get_balances_discrete_timeseries(*, fetcher_id)`

Returns a Python mapping object, mapping [BalanceCoordinate](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) to [BalanceDiscreteTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancediscretetimeseries) covering the balances at the periodical datetimes laying over the interval defined by the [BalancesDiscreteIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesdiscreteintervalfetcher). **Note**: For performance reasons, each timeseries is lazy evaluated. Whilst it is possible, iterating over all keys/items is not recommended. If a given BalanceCoordinate object does not exist in the mapping, an empty BalanceDiscreteTimeseries will be returned.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [BalancesDiscreteIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesdiscreteintervalfetcher). 1. The fetcher must be defined in the [Contract Metadata](./metadata) [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list. 2. The fetcher id must be defined in the balances argument in the `@fetch_account_data` decorator.

 |

**Return Value:** `Mapping`\[`BalanceCoordinate`, `BalanceDiscreteTimeseries`\] A dictionary of balance coordinates to discrete timeseries of balances. **Examples**

An example with no decorator

An example with @requires decorator

An example with `@fetch_account_data` decorator

### [](#get_balances_observation "Copy link to heading")get\_balances\_observation

`get_balances_observation(*, fetcher_id)`

Returns the [BalancesObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservation) at the datetime defined by the [BalancesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) whose id is provided in the [balances](./account_fetcher_requirements#balances) argument of the `@fetch_account_data` decorator.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [BalancesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher). 1. Define the fetcher in the [Contract Metadata](./metadata) [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list. 2. Define the fetcher id in the balances argument in the `@fetch_account_data` decorator.

 |

**Return Value:** `BalancesObservation`

The observation which includes the Balances and the datetime at which the values apply.

**Examples**

An example with no decorator

An example with @requires decorator

An example with `@fetch_account_data` decorator

### [](#get_balances_timeseries "Copy link to heading")get\_balances\_timeseries

`get_balances_timeseries(*, fetcher_id)`

Returns a Python mapping object, mapping [BalanceCoordinate](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) to [BalanceTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancetimeseries) covering all balances over the time period specified by the hook decorator.

There are three main scenarios where `get_balances_timeseries` can be called and slightly different behaviors are expected for each:

**When called in a Smart Contract hook using `@fetch_account_data` decorator**, a `fetcher_id` must be specified in the [balances](./account_fetcher_requirements#balances) argument of the `@fetch_account_data` decorator and passed as an argument in the function call and the time window is specified in the definition of the [BalancesIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher) with the specified `fetcher_id` in the [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list of the Contract metadata.

**When called in a Supervisor Contract hook using `@fetch_account_data` decorator, on a supervisee vault object**, a `fetcher_id` must be passed as an argument.

**When called in a Supervisor Contract hook using `@requires` decorator, on a supervisee vault object**, `fetcher_id` must not be passed as an argument. When a duration is specified in the `@requires` decorator, the time window size is in the range `[hook_effective_date - requirement_duration, hook_effective_date]`.

Note that, for performance reasons, each timeseries is lazy evaluated. Whilst it is possible, iterating over all keys/items is not recommended. If a given BalanceCoordinate object does not exist in the mapping, an empty BalanceTimeseries will be returned.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`Optional`\[`Union`\[`str`, `Dict`\[`str`,`list`\[`str`\]\]\]

 | 

The id of the [BalancesIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher). 1. Define the fetcher in the [Contract Metadata](./metadata) [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list. 2. Define the fetcher id in the balances argument in the `@fetch_account_data` decorator. Required when the `@fetch_account_data` decorator is used, must be None otherwise.

 |

**Return Value:** `Mapping`\[`BalanceCoordinate`, `BalanceTimeseries`\] A dictionary of balance coordinates to timeseries of balances. **Examples**

An example with `@fetch_account_data` decorator in Smart Contracts

An example with no decorator in Smart Contracts

```
An example with pass:q\[\`@fetch\_account\_data\`\] decorator in Supervisor Contracts
 pre\_posting\_hook
```

An example with `@requires` decorator in Supervisor Contracts

An example with no decorator in Supervisor Contracts

### [](#get_calendar_events "Copy link to heading")get\_calendar\_events

`get_calendar_events(*, calendar_ids)`

Returns a [CalendarEvents](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarevents) object with the chronologically ordered list of [CalendarEvent](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarevent) that exist in the Vault calendars with the given `calendar_ids`. These `calendar_ids` have to be requested using the hook '@requires' decorator. For information about the time range of events returned, see [calendar](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements#calendar)

  
| name | type | description |
| --- | --- | --- |
| 
calendar\_ids

 | 

`List`\[`str`\]

 | 

List of Calendar Ids

 |

**Return Value:** `CalendarEvents`

The chronologically ordered list of [CalendarEvent](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarevent) objects.

**Examples**

The Vault calendar usage example

### [](#get_calendars_observation "Copy link to heading")get\_calendars\_observation

`get_calendars_observation(*, fetcher_id)`

Returns the [CalendarsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsobservation) at the datetime defined by the [CalendarsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsobservationfetcher) whose id is provided in the [calendars](./account_fetcher_requirements#calendars) argument of the `@fetch_account_data` decorator.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [CalendarsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsobservationfetcher).

 |

**Return Value:** `CalendarsObservation`

The observation which includes the active calendar events and the datetime at which the values apply.

**Examples**

An example with @fetch\_account\_data decorator

### [](#get_calendars_timeseries "Copy link to heading")get\_calendars\_timeseries

`get_calendars_timeseries(*, fetcher_id)`

Returns the [CalendarTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendartimeseries) for the interval defined by the [CalendarsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsintervalfetcher) whose id is provided in the [calendars](./account_fetcher_requirements#calendars) argument of the `@fetch_account_data` decorator.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [CalendarsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#calendarsintervalfetcher).

 |

**Return Value:** `Dict`\[`str`, `CalendarTimeseries`\] A dictionary mapping the calendar IDs to the CalendarTimeseries. **Examples**

An example with `@fetch_account_data` decorator

### [](#get_client_transactions "Copy link to heading")get\_client\_transactions

`get_client_transactions(*, fetcher_id)`

Gets a map of the `unique_client_transaction_id` to [ClientTransaction](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) objects, with the `value_datetime` of at least one of its posting instructions falling in the requested time window. Note that each posting instruction class instance has the read-only `unique_client_transaction_id` attribute, representing the ClientTransaction that a posting instruction is impacting, which can be used as key in this map. However, the `unique_client_transaction_id` value is not deterministic and therefore is not guaranteed to be consistent between different contract executions for the same ClientTransaction. If a duration is specified in the `@requires` decorator, the time window size is in the range `[hook_effective_date - requirement_duration, hook_effective_date]`. If a `fetcher_id` is specified in the [postings](./account_fetcher_requirements#postings) argument of the `@fetch_account_data` decorator and passed as an argument in the `get_client_transactions` function call, then the time window is specified in the definition of the [PostingsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher) with the specified `fetcher_id` in the [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list of the Contract metadata. If `fetcher_id` is not provided in the Smart Contract, an `InvalidSmartContractError` is raised. The default ordering of the list of posting instructions in each [ClientTransaction](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction), is by `value_datetime`; you can order/filter further using the sorted builtin and other builtin mechanisms. A [PostingIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher) only fetches postings that have been committed. Before postings are committed, the `pre_posting_hook` is run. At this point, in `pre_posting_hook`, `PostingsIntervalFetcher` does not return the proposed postings as they are not committed yet - you access them through the hook arguments. After postings are committed, in `post_posting_hook`, committed postings are returned if they fall inside the fetcher window; you can also access them through hook arguments.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`Optional`\[`str`\]

 | 

The id of the [PostingsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher). 1. Define the fetcher in the [Contract Metadata](./metadata) [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list. 2. Define the fetcher id in the postings argument in the `@fetch_account_data` decorator. If this function is called using a supervisee Vault object, the population of this argument will raise an `InvalidSmartContractError`.

 |

**Return Value:** `Dict`\[`str`, `ClientTransaction`\]

The [ClientTransaction](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#clienttransaction) dictionary, keyed by the `unique_client_transaction_id`.

### [](#get_flag_timeseries "Copy link to heading")get\_flag\_timeseries

`get_flag_timeseries(*, flag)`

Get the FlagTimeseries for a given flag definition.

If `flags=True` is not specified in the `@requires` decorator, any call to this function will return an empty FlagTimeseries.

  
| name | type | description |
| --- | --- | --- |
| 
flag

 | 

`str`

 | 

The `flag_definition_id` to get the timeseries for.

 |

**Return Value:** `FlagTimeseries` The timeseries of flags.

### [](#get_flags_observation "Copy link to heading")get\_flags\_observation

`get_flags_observation(*, fetcher_id)`

Returns the [FlagsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservation) at the datetime defined by the [FlagsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservationfetcher) whose id is provided in the [flags](./account_fetcher_requirements#flags) argument of the `@fetch_account_data` decorator.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [FlagsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservationfetcher).

 |

**Return Value:** `FlagsObservation`

The observation which includes the flag values and the datetime at which the values apply. The flags attribute of the [FlagsObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservation) has type defaultdict if the [FlagsObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsobservationfetcher) did not specify a [FlagsFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsfilter). Otherwise, the flags attribute has type dict, containing an entry for each of the flag definition ids specified in the [FlagsFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsfilter).

**Examples**

An example with @fetch\_account\_data decorator

### [](#get_flags_timeseries "Copy link to heading")get\_flags\_timeseries

`get_flags_timeseries(*, fetcher_id)`

Returns the [FlagValueTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagvaluetimeseries) at the datetime defined by the [FlagsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsintervalfetcher) whose id is provided in the [flags](./account_fetcher_requirements#flags) argument of the `@fetch_account_data` decorator.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [FlagsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsintervalfetcher). If the provided fetcher\_id is not defined in the @fetch\_account\_data decorator, an `InvalidSmartContractError` will be raised.

 |

**Return Value:** `Union`\[`dict`\[`str`, `FlagValueTimeseries`\], `defaultdict`\[`str`, `FlagValueTimeseries`\]\]

A dictionary mapping the flag definition ids to the FlagValueTimeseries. The dictionary has type defaultdict if the [FlagsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsintervalfetcher) did not specify a [FlagsFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsfilter). Otherwise, the dictionary has type dict, containing an entry for each of the flag definition ids specified in the [FlagsFilter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagsfilter). In either case, the default value stored in the dictionary is a [FlagValueTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#flagvaluetimeseries) containing a [TimeseriesItem](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#timeseriesitem) with value False effective from the start time defined in the fetcher.

**Examples**

An example with `@fetch_account_data` decorator

### [](#get_hook_execution_id "Copy link to heading")get\_hook\_execution\_id

`get_hook_execution_id()`

Returns a string used in generating unique-enough ids for attaching to side-effect objects. The string returned is a combination of account\_id, hook, and effective\_datetime.

**Return Value:** `str` The unique-enough id.

### [](#get_hook_name "Copy link to heading")get\_hook\_name

`get_hook_name()`

Returns an enum that indicates which hook is currently being executed. See the list of possible values [here](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums#hookname).

**Return Value:** `enum` The HookType enum. **Examples**

Using get\_hook\_name in a contract level utility.

### [](#get_hook_result "Copy link to heading")get\_hook\_result

`get_hook_result()`

Returns the Supervisee Hook Result. Available for use only on the Supervisees [Vault](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault) object. This function allows the Supervisor Hook to access any Supervisee Hook uncommitted `HookDirectives`, `Rejections` or Return Data.

**Return Value:** `Union`\[`PostPostingHookResult`, `PrePostingHookResult`, `ScheduledEventHookResult`\] The Supervisee Hook Result **Examples**

An example with Rejection.

An example with Directives.

### [](#get_last_execution_datetime "Copy link to heading")get\_last\_execution\_datetime

`get_last_execution_datetime(*, event_type)`

Returns the effective/logical timestamp of the last successful scheduled event hook execution for the given `event_type`.

  
| name | type | description |
| --- | --- | --- |
| 
event\_type

 | 

`str`

 | 

The event type for which to fetch the last effective datetime.

 |

**Return Value:** `Optional`\[`datetime`\]

The last `effective_datetime` of the last successful execution of [scheduled\_event\_hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#scheduled_event_hook) as a timezone-aware UTC datetime.

If the `event_type` has never executed successfully, returns `None`.

**Examples**

A simple example

### [](#get_last_scheduled_event_datetimes_observation "Copy link to heading")get\_last\_scheduled\_event\_datetimes\_observation

`get_last_scheduled_event_datetimes_observation(*, fetcher_id)`

Returns the [LastScheduledEventDateTimesObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservation) at the datetime defined by the [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservation) whose id is provided in the [last\_scheduled\_event\_datetimes](./account_fetcher_requirements#last_scheduled_event_datetimes) argument of the `@fetch_account_data` decorator.

info

Existing Customer Accounts cannot be converted to a Smart Contract with [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher) if their current Smart Contract is not already using it, due to data access limitations. Future Vault Core improvements aim to address these limitations.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher). 1. Define the fetcher in the [Contract Metadata](./metadata) [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list. 2. Define the fetcher id in the last\_scheduled\_event\_datetimes argument in the `@fetch_account_data` decorator.

 |

**Return Value:** `LastScheduledEventDateTimesObservation`

The observation which includes the last scheduled event datetimes and the datetime at which the values apply.

**Examples**

An example with @fetch\_account\_data decorator

### [](#get_parameter_timeseries "Copy link to heading")get\_parameter\_timeseries

`get_parameter_timeseries(*, name, fetcher_id)`

Get a timeseries of parameter values for parameters defined and/or used by this Smart Contract.

If `name` is provided as an argument, the timeseries returned will be of type [ParameterTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametertimeseries). In this case, `parameters=True` must also be specified in the `@requires` decorator, otherwise any call to this function will fail.

If `fetcher_id` is provided as an argument, this returns a map of parameter id to [ParameterValueTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametervaluetimeseries) within the time interval defined by the [ParametersIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersintervalfetcher) whose id is provided in the [parameters](./account_fetcher_requirements#parameters) argument of the `@fetch_account_data` decorator. If the matching `ParametersIntervalFetcher` does not have a defined `ParametersFilter`, all of the `expected_parameters` defined in the contract will be retrieved.

Values for derived parameters are not returned from this function.

  
| name | type | description |
| --- | --- | --- |
| 
name

 | 

`Optional`\[`str`\]

 | 

The name of the [Parameter](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parameter). One of `name` or `fetcher_id` must be provided.

 |
| 

fetcher\_id

 | 

`Optional`\[`str`\]

 | 

The id of the [ParametersIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersintervalfetcher). One of `name` or `fetcher_id` must be provided.

 |

**Return Value:** `Union`\[`ParameterTimeseries`, `Dict`\[`str`, `ParameterValueTimeseries`\]\]

The timeseries of parameters. If `name` is provided, the timeseries will be of type [ParameterTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametertimeseries). If `fetcher_id` is provided, the timeseries will be a map of parameter IDs to [ParameterValueTimeseries](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametervaluetimeseries).

### [](#get_parameters_observation "Copy link to heading")get\_parameters\_observation

`get_parameters_observation(*, fetcher_id)`

Returns the [ParametersObservation](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersobservation) at the datetime defined by the [ParametersObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersobservationfetcher) whose id is provided in the [parameters](./account_fetcher_requirements#parameters) argument of the `@fetch_account_data` decorator.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`str`

 | 

The id of the [ParametersObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersobservationfetcher).

 |

**Return Value:** `ParametersObservation`

The observation which includes the parameter values and the datetime at which the values apply.

### [](#get_permitted_denominations "Copy link to heading")get\_permitted\_denominations

`get_permitted_denominations()`

Returns the permitted denominations of the account.

**Return Value:** `List`\[`str`\] A list of denominations.

### [](#get_posting_instructions "Copy link to heading")get\_posting\_instructions

`get_posting_instructions(*, fetcher_id)`

Gets a list of posting instruction objects, whose `value_datetime` fall within the requested time window, and their covering posting instructions. The default ordering of the list is by `value_datetime`; you can order/filter further using the sorted builtin and other builtin mechanisms.

There are two main scenarios where `get_posting_instructions` can be called and slightly different behaviors are expected for each:

**When called in a Smart Contract hook using `@fetch_account_data` decorator**, only the posting instructions that fall into the requested time range and their covering posting instructions are returned. A `fetcher_id` must be specified in the [postings](./account_fetcher_requirements#postings) argument of the `@fetch_account_data` decorator and passed as an argument in the `get_posting_instructions` function call. The time window must be specified in the definition of the [PostingsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher) with the specified `fetcher_id` in the [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list of the Contract metadata.

**When called in a Supervisor Contract hook using `@requires` decorator, on a supervisee vault object**, it returns the posting instructions that falls into the requested time range and their covering posting instructions. If called in the pre/post posting hooks it also returns the covering posting instructions for the proposed posting instructions. A `fetcher_id` must not be passed.

If a duration is specified in the `@requires` decorator, the time window size is in the range `[hook_effective_date - requirement_duration, hook_effective_date]`.

  
| name | type | description |
| --- | --- | --- |
| 
fetcher\_id

 | 

`Optional`\[`str`\]

 | 

The id of the [PostingsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher). 1. Define the fetcher in the [Contract Metadata](./metadata) [data\_fetchers](./../smart_contracts_api_reference4xx/metadata#data_fetchers) list. 2. Define the fetcher id in the postings argument in the `@fetch_account_data` decorator. Required when the `@fetch_account_data` decorator is used, must be None otherwise.

 |

**Return Value:** `List`\[`Union`\[`AuthorisationAdjustment`, `CustomInstruction`, `InboundAuthorisation`, `InboundHardSettlement`, `OutboundAuthorisation`, `OutboundHardSettlement`, `Release`, `Settlement`, `Transfer`\]\]

The sorted list of posting instructions.

**Examples**

An example with `@fetch_account_data` decorator in Smart Contracts

An example with no decorator in Smart Contracts

An example with `@requires` decorator in Supervisor Contracts

An example with no decorator in Supervisor Contracts