---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/aggregations"
title: "Aggregations"
scraped_at: "2026-06-17T05:11:09.437Z"
images: 0
---

# Aggregations

The [Aggregation API](/vault-payments/latest/EN/api/payments_api#aggregations) supports requesting metrics aggregated from Vault Payments resources. Currently aggregations are only supported on the Payments resource. Multiple aggregations may be requested as part of a single Aggregation API request.

## [](#base_aggregations "Copy link to heading")Base Aggregations

There are three types of simple field aggregations supported currently:

<table class="tableblock frame-all grid-all stretch center"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Field aggregation type</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Description</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>FIELD_AGGREGATION_TYPE_COUNT</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">returns the count of resorces in a query or bucket grouping. By default, it will count the top-level resources (Payments). To count a nested resource instead, a field value must also be provided which contains the path of the unique ID of the nested resource. For example, to count instructions the path supplied must be 'instruction_data.id'.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>FIELD_AGGREGATION_TYPE_SUM</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">returns the sum of the values of a field on the Payments returned by a query or bucket (or on all of the Instructions in the Payments and returned by a query or bucket).</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>FIELD_AGGREGATION_TYPE_AVERAGE</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">computes the average of all the numeric values of a field on the Payments and returned by a query or bucket (or on all of the Instructions in the Payments and returned by a query or bucket)</p></td></tr></tbody></table>

Each aggregation request must specify either one of these field aggregations or a rate aggregation.

For sums and averages, a field path must be provided in order to specify the field to be used for the calculation. For these calculations, only fields of type `Number` may be used.

For counts, you may specify a field path whose unique values will be counted. Only fields of type `Enumeration` or `Text` are supported. A value representing the number of unique resources will be returned as a default if no field is specified.

The list of fields supported for aggregations can be found on the [Search Query Language page](/vault-payments/latest/EN/api/search_query_language#list_of_available_fields).

For example, the total number of instructions processed across all payments can be calculated by requesting:

The response will look like this:

## [](#filtering_the_aggregated_resources "Copy link to heading")Filtering the Aggregated Resources

The Aggregation API takes in an optional [Search Query Language](/vault-payments/latest/EN/api/search_query_language#syntax) `filter_query` string, which can be used for narrowing down the collection of resources that the aggregations should be calculated for.

For example, the dataset for all the aggregations requested can be reduced by applying a filter on the request level:

The response will look like this:

Individual aggregation requests can also specify a `filter_query` to narrow down the resources used in each aggregation.

For example, we can request separate aggregations with different filters:

The response will look like this:

## [](#grouping_resources_into_buckets "Copy link to heading")Grouping Resources into Buckets

Resources may be grouped into buckets in order to apply field aggregations on each individual bucket, this is done by defining grouping levels in the aggregation request.

Multiple levels of grouping may be applied to the resources when requesting an aggregation. The requested `field_aggregation` or `rate_aggregation` will be applied to each level of grouping, including the total set of resources included in the aggregation.

There are 3 types of bucket groupings applicable to resources.

### [](#field_buckets "Copy link to heading")Field Buckets

Field groupings are used to dynamically build a bucket for each value that a field on the Payment or Instructions takes.

When requesting field buckets, a field path must be provided. Fields of type `Text` or `Enumeration` may be used. A list of available fields alongside their types can be found on the [Search Query Language page](/vault-payments/latest/EN/api/search_query_language#list_of_available_fields).

A maximum bucket count must also be specified. Buckets will be returned in descending order of the total occurrences, up to the provided maximum count.

For example, the total number of payments, grouped by their payment system may be requested using:

Because we set the `max_count` to 10, only the top 10 most used payment systems will be returned. The response will look like this:

chat\_bubble

If there are no values for the selected field in a given dataset (a bucket or the total dataset for the aggregation), no buckets will be returned

For example, Payments will never have both card data and credit transfer data so if we group by card settlement amount currency, and then by credit transfer settlement date, the second level of grouping will never have any buckets:

The response will look like this:

### [](#time_interval_buckets "Copy link to heading")Time Interval Buckets

Time interval groupings are used to create up to a maximum count of buckets of resources based on a given date field. A minimum interval resolution may also be specified. Time buckets will always be returned in chronological order. If no minimum interval resolution is provided, `INTERVAL_RESOLUTION_MINUTE` will be used.

The timeframe of each bucket returned is automatically chosen to create at most `max_count` equal intervals. If splitting the resolved dataset into `max_count` equal buckets does not have the requested minimum resolution, the amount of buckets returned will be reduced to the largets value that meets the requested resolution.

When requesting time interval buckets, a field path must be provided. Fields of type `Date` from the [list of available fields](/vault-payments/latest/EN/api/search_query_language#list_of_available_fields) may be used.

For example, we might wish to see a time-series of number of average credit transfer amount processed in GBP payments over time by requesting:

The response will look like this:

### [](#minimum_resolution "Copy link to heading")Minimum Resolution

The `min_resolution` parameter allows the caller to specify the minimum rounding interval that should be used.

The accepted units for `min_resolution` are:

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 100%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>INTERVAL_RESOLUTION_MONTH</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>INTERVAL_RESOLUTION_DAY</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>INTERVAL_RESOLUTION_HOUR</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>INTERVAL_RESOLUTION_MINUTE</code></p></td></tr></tbody></table>

For example, when requesting a minimum resolution of `MONTH`, all the buckets returned begin and end at the start and end of a month. When requesting `DAY`, each bucket will start and end at midnight.

### [](#filter_buckets "Copy link to heading")Filter Buckets

Filter groupings are used to define custom buckets in which Payments should be grouped.

These buckets are manually defined by providing a bucket ID and a [Search Query Language](/vault-payments/latest/EN/api/search_query_language#syntax) `query` string. Filter buckets will always be returned in the same order they were requested.

For example, to get the number of instructions across card payments that were not made in GBP vs those that were, we can request:

The response will only contain the two buckets that were explicitly requested:

## [](#applying_multiple_levels_of_grouping "Copy link to heading")Applying Multiple Levels of Grouping

To gain meaningful information from aggregated data, it is sometimes useful to further partition the results. For this reason, the Aggregation API supports multiple levels of grouping.

The Aggregation API will always include a result value for each level of grouping, as well as for the total dataset included in the aggregation.

For example, to get a breakdown of the number of Payments made in each direction, grouped by the payment system used, we can request:

The response will look like:

## [](#computing_rates "Copy link to heading")Computing Rates

The Aggregation API also supports rate calculations. In this context, rates are calculated by dividing the value of a `field_aggregation` applied to a subset of resources by the value of the same `field_aggregation` applied to the total set of resources being aggregated.

Rate aggregations requests specify the field aggregation that must be applied to the two sets of payments, as well as a [Search Query Language](/vault-payments/latest/EN/api/search_query_language#syntax) `query` string which may be used to filter the subset of Payments.

For example, for calculating the rate of the number errored payments over the total number of payments:

The response will contain a single rate calculation result:

## [](#applying_local_timezones "Copy link to heading")Applying Local Timezones

By default, the Aggregation API groups Payments into time interval buckets based on UTC timestamps. However, if grouping data from a different timezone is required, the Aggregation API request takes in an optional `time_zone` field.

Time zones may either be specified as an ISO 8601 UTC offset (e.g. `+01:00` or `-08:00`) or as a timezone TZ value such as `America/Los_Angeles`.

For example, for a request like:

The response will look like:

## [](#aggregating_nested_resources "Copy link to heading")Aggregating Nested Resources

Aggregations can be applied to nested resources as well. For example, in the case of Payments, we can group resources based on `instruction_data` fields, which allows us to aggregate the underlying Instruction resources.

For example, to get a count of instruction flow IDs used over time for processing instructions, we can request:

The response will look like:

It is possible to mix grouping by nested resource fields and by top level fields. Please note that if you do this, you may end up with the same resource being counted in multiple buckets.

For example, because Payments contain multiple Instructions, if we want to count the number of Payments which contain Instructions of different types, the same Payment may be counted as part of multiple buckets:

This will return:

chat\_bubble

Please note that for this example the number of Payments counted in each bucket (`807 + 119 + 63 + 9 + 3 = 1001`) does not actually add up to the total number of Payments returned in the top level value (`"value": "823"`).