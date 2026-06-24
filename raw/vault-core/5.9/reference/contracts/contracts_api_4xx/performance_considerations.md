---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/performance_considerations"
title: "Performance considerations"
scraped_at: "2026-06-22T19:17:56.271Z"
images: 0
---

# Performance considerations

When writing a Smart Contract, consider the performance of the code and its implications within Vault. Smart Contract code is executed as part of multiple customer account journeys (for example End of Day events processing, payments validation, Account opening). Therefore, the Contract code has a direct impact on the performance of many events in Vault. There are many aspects of performance in Smart Contract code to consider:

-   [general Python code principles](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/performance_considerations#writing_optimal_python_smart_contract_code)
    
-   [Smart Contract data requirements](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/performance_considerations#smart_contract_data_requirements)
    
-   [hook directives](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/performance_considerations#smart_contract_hook_directives)
    

## [](#poor_performance_implications "Copy link to heading")Poor performance implications

Smart Contract code execution (including execution of any helper functions in Contract Modules or Supervisor Contract if the account hook is supervised) is dependent on time and resources available. If code execution takes too long then it will be terminated with a TIMEOUT error and will not trigger any retry. If the code execution uses significant CPU resources, then it may be throttled; this could result in slower code execution, which may lead to termination with the TIMEOUT error.

chat\_bubble

[Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation) is a good indicator of how performant a particular Smart Contract is. Although a Simulation test usually involves multiple hook executions, you can still use it to evaluate Smart Contract code improvements by capturing and comparing an overall Simulation test duration before and after making some code optimisations. Additionally, you can use the [Contract SDK](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/development_and_testing#contracts_sdk) to test individual functions within a Smart Contract.

## [](#writing_optimal_python_smart_contract_code "Copy link to heading")Writing optimal Python Smart Contract code

In order to create performant and optimal Smart Contracts code, make sure you use general software development principles and best practices.

chat\_bubble

When considering the overall performance of a Smart Contract, you must take into account the performance of Contract Modules, as well as the Supervisor Contract if the Smart Contract is going to be supervised.

### [](#do_not_create_empty_hooks "Copy link to heading")Do not create empty hooks

Vault will check if your Smart Contract contains a hook before executing it. If a hook is not needed to perform any logic in the Smart Contract, do not define it. The existence of the hook incurs a performance penalty as the relevant contract resources will still be fetched and the contract code would still be executed (even when empty).

### [](#consider_algorithm_complexity "Copy link to heading")Consider algorithm complexity

As in any Python code, consider algorithm complexity, for example avoiding recursions when possible, always breaking a loop early, using the appropriate data structures to allow fast access to objects.

### [](#cache_results_of_calls_on_the_vault_object "Copy link to heading")Cache results of calls on the Vault object

It is useful to split code into smaller helper functions for the sake of readability, but avoid getting the same data from the 'vault' object twice. Instead, save the result into a variable and refer to the data through the variable. We also recommend, where possible, that you pass variables to any helper functions and avoid passing the 'vault' object.

### [](#minimise_number_of_loops "Copy link to heading")Minimise number of loops

Another pattern to avoid is repeated loops where multiple variables are evaluated from the same list of objects.

### [](#balances_timeseries "Copy link to heading")Balances Timeseries

The balances timeseries object returned from [vault.get\_balances\_timeseries()](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_balances_timeseries) is a lazy evaluated mapping of [BalanceCoordinate](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancecoordinate) to [BalanceTimeseries](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancetimeseries). Avoid iterating over all items in the mapping as that will evaluate all timeseries up front. It is better to access a specific timeseries with its balance coordinate.

## [](#smart_contract_data_requirements "Copy link to heading")Smart Contract data requirements

The data [requirements](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#about_requirements) and data [fetcher requirements](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/concepts#data_fetchers) used by the account’s Smart Contract code have a large impact on the overall performance of a customer account in Vault. A Smart Contract hook can request multiple datasets from Vault that are required to make business decisions during Smart Contract code execution. Vault analyses the Smart Contract hook’s requirements to decide which data is required and which part of it is to be retrieved. Vault does this before the hook is executed to ensure consistent hook execution performance and internally optimise data retrieval.

### [](#consider_accountplan_profile "Copy link to heading")Consider account/plan profile

Because some datasets that a Contract requests may be very large, they can take a long time to retrieve via internal Vault endpoints and take a long time to process during the Contract code execution itself. Such dataset examples are:

-   One year of postings or balances data of a mortgage or ISA account
    
-   One month of postings or balances data of a current account
    
-   One day of postings or balances data of a trading account
    

When writing a Contract, consider the profile of the customer accounts or plans that will be backed by the Contract Product and pay particular attention to how many data points are expected over a given period of time. If an account is likely to have very large datasets over a short period of time, make sure that you minimise the amount of data requested for its Smart Contract hook executions.

### [](#minimise_amount_of_data_requested "Copy link to heading")Minimise amount of data requested

To ensure optimal performance, only request the data you need for the time period. For example, if you only use the `latest` balances, or if you want the balances at a specific point in time, then use a [BalancesObservationFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher) rather than asking for an interval with [BalancesIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher).

If you know the specific balance addresses needed for a hook execution in advance, you can use a [BalancesFilter](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesfilter) to further optimise the Smart Contract. Using balances filters for balances means that less data needs to be retrieved and made available for hook execution, which improves performance. Filters are available for both `BalancesObservationFetcher` and `BalancesIntervalFetcher`.

chat\_bubble

If you need the most recent balance values, ask for the `LIVE` balance observation.

If you need more than a month of data, you can ask for a specific number of days of data (for example 33 days as opposed to 2 months).

### [](#minimise_data_requirements_window "Copy link to heading")Minimise data requirements window

Make use of the 'start' and 'end' keyword arguments of the interval fetcher classes to only fetch the data you need. For example, you can fetch a single day from a month ago *or* an hour of data at the beginning of a given month.

#### [](#a_days_worth_of_postings_data_from_a_month_ago "Copy link to heading")A day’s worth of postings data from a month ago

A Smart Contract might need a day’s worth of postings data at the beginning of a new credit month so that some particular business logic can be implemented. To fetch a day of postings data, use the [Shift](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#shift) for the `start` and the `end` of the [PostingsIntervalFetcher](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher) to move the "data window" as needed.

##### [](#an_hours_worth_of_balances_data "Copy link to heading")An hour’s worth of balances data

To access the "start of the month" balances of an account that includes all "End of Month" postings of an account instructed at the start of a month (on the 1st day of the month), you could request an hour of balances data from the very beginning of the current month in the account’s Smart Contract.

### [](#only_request_data_you_need "Copy link to heading")Only request data you need

Only request data that is going to be used in the Contract hook code logic. For example, if you only use balances in the Smart Contract hook, then do not request that postings data is also retrieved. Request:

-   *parameters*: if the Vault methods `get_parameter_timeseries` or `get_parameters_observation` are called.
    
-   *postings*: if the Vault methods `get_posting_instructions` or `get_client_transactions` are called.
    
-   *balances*: if the Vault methods `get_balances_timeseries` or `get_balances_observation` are called.
    
-   *last\_execution\_time*: if the Vault method `get_last_execution_datetime` is called.
    
-   *flags*: if the Vault methods `get_flag_timeseries`, `get_flags_timeseries` or `get_flags_observation` are called.
    
-   *calendar*: if the Vault methods `get_calendar_events`, `get_calendars_observation` or `get_calendars_timeseries` are called.
    

See all the Vault methods [here](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#methods).

chat\_bubble

When requesting `postings`, the posting instructions available to the hook always include "covering posting instructions", even if they are outside of the data requirements window. The covering posting instructions are the posting instructions targetting the same client transaction as the posting instructions within the data requirements window.

### [](#split_and_optimise_business_essential_schedules "Copy link to heading")Split and optimise business-essential schedules

Some schedule operations require large amounts of timeseries data, but others require very little. Where possible, make sure that you split these operations appropriately when you create Contracts so they retrieve the minimum amount of data required for each schedule.

chat\_bubble

In the `scheduled_event_hook` hook, each `event_type` is treated as a separate hook with regards to requirement fetching, so you should only require data for a particular `event_type` execution if it is needed for the business logic of that `event_type`. If you need order guarantees for these events, group them using the `event_types_groups`. For more information on using [EventTypesGroup](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#eventtypesgroup), see [Event Types Groups and Tags](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_examples#event_types_groups_and_tags) in the Common examples section.

## [](#smart_contract_hook_directives "Copy link to heading")Smart Contract hook directives

How you use hook directives can affect performance, so consider this, and use the directives appropriately.

chat\_bubble

Try to avoid instructing too many directives from a single hook execution as this can affect overall performance.

### [](#avoid_instructing_multiple_pibs "Copy link to heading")Avoid instructing multiple PIBs

When executing a hook, be sure to avoid instructing multiple batches of posting instructions. Each instance of a [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective) is treated as an atomic batch of postings; Vault is optimised for single batch processing. By instructing multiple batches of postings from a single hook execution, a Smart Contract will lose both atomicity and performance.

chat\_bubble

You can add a maximum of 64 [Postings](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#posting) to a [CustomInstruction](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#custominstruction), and you can add a maximum of 64 instructions to a [PostingInstructionsDirective](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postinginstructionsdirective).

## [](#end_of_month_schedules "Copy link to heading")End of Month Schedules

When defining recurring monthly schedules, for example monthly interest accrual, we recommend that you use the `EndOfMonthSchedule` native type. The\`EndOfMonthSchedule\` type includes a failover mechanism which allows you to provide a strategy for overriding a schedule definition when it falls on an invalid date. This removes the need to run checks and update schedules on an ad-hoc basis to cover scenarios such as running a schedule on the 30th of every month. Instead of having to update the schedule each February, you can now simply set a failover strategy to run the schedule on either the previous or next valid day when the expected date does not exist. Removing the need to run checks and update schedules boosts performance significantly.

To define a schedule using the [EndOfMonthSchedule](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#endofmonthschedule) type, use the `schedule_method` keyword argument of the [ScheduledEvent](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#scheduledevent) native type:

Further information is available in the [End of month schedules](/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/common_examples#end_of_month_schedules) section of the common examples.