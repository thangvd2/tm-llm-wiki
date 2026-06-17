---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/balances"
title: "Balances"
scraped_at: "2026-05-05T20:04:57.932Z"
images: 0
---

# Balances

Welcome to the *Balances* documentation.

## [](#what_are_balances "Copy link to heading")What are balances?

### [](#purpose_of_balances "Copy link to heading")Purpose of balances

Balances are aggregated views of an account’s financial state, derived from the Vault Core Postings Ledger, the source of truth represented by the cumulative effect of Posting Instruction Batches (PIBs).

Vault Core supports two types of balances:

-   The [Balances resources](#balances_resources) are the standard way to view the financial state of a customer account in Vault Core. These are used by Smart Contracts to process payments or calculate interest.
    
-   The [LedgerBalances resource](#ledgerbalances_resource) is the standard way to view the financial state of customer and internal accounts as of a snapshot of the Postings Ledger. This is used for end of cycle accounting, reconciliation and financial reporting.
    

### [](#balances_resources "Copy link to heading")Balances resources

The balances resources are the standard representations of a Customer Account’s financial state, used for Smart Contract logic and payment processing. Balances are aggregated values derived from the posting ledger, based on value timestamps (the time when funds should affect the account balance) or booking timestamps (the time when funds should be reported). As new entries are committed to the Postings Ledger, balances are updated asynchronously.

You can view balances using the List endpoints in:

-   [Balances](/vault-core/5-8/EN/api/core_api#balances_version_1): Specify a time to see either the most recent state of an account balance, or the balance changes over a specified time period, based on value timestamps.
    
-   [Balances-v2](/vault-core/5-8/EN/api/core_api#balances_version_2): Specify a time to see either the most recent state of an account balance, the end state (including all future-dated Postings), or the balance changes over a specified time period, based on value or booking timestamps.
    

chat\_bubble

A `value_timestamp` or `booking_timestamp` may be manually set in the past - a process called backdating. To ensure the balance timeseries shows correct values when filtering by `value_timestamp` or `booking_timestamp`, some Balance resources may be revised to reflect the new order. Vault Core will by default show the correct timeseries with respect to its current state. The `snapshot_timestamp` field can be used to generate a historic view of a balance timeseries.

### [](#ledgerbalances_resource "Copy link to heading")LedgerBalances resource

The LedgerBalances resource can provide a historical view of the financial state of any account with respect to the time Posting Instruction Batches were inserted into the Postings Ledger - the `ledger_timestamp`. By using the same ledger timestamp to query account ledger balances, Vault Core can provide a snapshot of the financial state of the entire bank. This is useful for end of cycle accounting, reconciliation and financial reporting.

chat\_bubble

Ledger Balances ignore the `value_timestamp` and `booking_timestamp` on Posting Instructions so that backdating as described in the [Balances](#balances_resource) resource section does not affect them.

#### [](#why_ledgerbalances_should_not_be_used_for_realtime_balance_checks "Copy link to heading")Why LedgerBalances should not be used for realtime balance checks

As the Postings API is highly concurrent, it is infeasible to order Posting Instruction Batches by their `insertion_timestamp` in real time for all accounts. Instead we maintain an ordered view up to a monotonically increasing timestamp known as the *watermark*. As this watermark usually lags behind the current time by several minutes, Ledger Balances should not be used for realtime balance checks.

#### [](#about_the_bucket_timestamp "Copy link to heading")About the bucket\_timestamp

Ledger Balances are calculated at a granularity of one second, such that List requests with a timestamp resolution smaller than a second are rejected. Each time window of one second is called a *bucket*. Infrastructure issues or system downtime may cause some Posting Instruction Batches (PIBs) to be assigned a later bucket timestamp than their Posting Ledger insertion timestamps would usually imply. This should be a very rare occurrence and is unlikely to happen for most types of downtime. PIBs affected by this can be identified by a corresponding [LedgerBalanceBucketReassignmentEvent](/vault-core/5-8/EN/api/core_api#ledgerbalance_events) which will detail the Postings Ledger insertion timestamp and the assigned bucket timestamp.

For example, if a PIB is inserted at 12:00am and is reassigned a bucket at 12:10am, a `LedgerBalanceBucketReassignmentEvent` is generated and will include:

-   A `ledger_insertion_timestamp` of 12:00am; and
    
-   A `bucket_timestamp` of 12:10am.
    

This means that querying for the affected account’s Ledger Balances at time 12:00pm will not include this PIB. However, it will be included in the Ledger Balances dated for 12:10pm. `LedgerBalanceBucketReassignmentEvents` are therefore only a concern if a request is made for a timestamp between a `ledger_insertion_timestamp` and `bucket_timestamp`.

## [](#balances_and_the_accounting_model "Copy link to heading")Balances and the accounting model

### [](#balance_coordinates "Copy link to heading")Balance Coordinates

Balances derived from Postings in Vault Core are calculated across four coordinates for every account, each of which is a subset of its parent:

  
| Coordinate | Description | Example use |
| --- | --- | --- |
| 
A) asset

 | 

Asset is the first partition, and it defines the classification or type of asset being recorded, such as money, points, cryptocurrency, and so on.

 | 

Commercial money, cryptocurrency, or custom types such as loyalty scheme points, because Vault Core does not require the asset to be monetary.

 |
| 

B) denomination

 | 

The unit in which each asset is measured. For each asset type, multiple denominations can be specified, which can be ISO recognised denominations, or other representations such as non-fiat currencies or points.

 | 

USD, GBP, REWARD\_POINTS, BTC.

 |
| 

C) address

 | 

The store of an account balance in each denomination. Addresses allow the partitioning of denominations into different 'pots' for simpler account management.

 | 

Default, representing a balance available for deposit accounts (or a repayment address for lending accounts), accrued interest (interest not yet paid or owed), fees.

 |
| 

D) phase

 | 

Each address always has three phases, which represent the transition states for any postings affecting the account.

 | 

Card authorisations, uncleared funds or committed (paid) funds.

 |

#### [](#diagram_balance_coordinates_in_use "Copy link to heading")Diagram: Balance coordinates in use

![A diagram showing the example use of balance coordinates in Vault Core](/vault-core/5-8/EN/_astro/balance_coordinates.1pIu15lB_ryXbg.webp)

### [](#debits_credits_and_t_side "Copy link to heading")Debits, credits and T-side

To follow Vault Core’s double-entry accounting model, every posting to an account is either counted as a credit or a debit, and every Smart Contract (product) backing a Customer Account can specify the `tside` (the side of the balance sheet) that its Accounts are on. T-side is either a LIABILITY or an ASSET, as viewed from the banks' perspective:

-   `LIABILITY`: This is the default value. For Accounts whereby the customer has given funds to the bank (a deposit or savings account). From the customers' perspective, this is an asset.
    
-   `ASSET`: For accounts whereby the customer has been given funds by the bank (a lending account). From the customers' perspective, this is a liability.
    

Since every posting is either counted as a credit or a debit:

-   If the `tside` of a product is `LIABILITY`, every Customer Account instance will calculate the net balance as `net = total credit - total debit`
    
-   If the `tside` of a product is `ASSET`, every Customer Account instance will calculate the net balance as `net = total debit - total credit`
    

![A diagram showing an overview of the balance sheet from a bank’s perspective](/vault-core/5-8/EN/_astro/t_side_overview.CV7jQh-k_eIB6O.webp)

### [](#balance_initialisation "Copy link to heading")Balance initialisation

Vault Core accounts can be created via the Core API [v1/accounts](/vault-core/5-8/EN/api/core_api#accounts_version_1) endpoint or [v2/accounts](/vault-core/5-8/EN/api/core_api#accounts_version_2) endpoint (if you have completed the switch to v2/accounts) with an OPEN or PENDING status. For more information about account statuses:

-   For v1/accounts, see [Account statuses](/vault-core/5-8/EN/reference/accounts/accounts_version_1#account_statuses)
    
-   For v2/accounts, see [Account statuses](/vault-core/5-8/EN/reference/accounts/accounts_version_2#account_statuses)
    

When the balance of an OPEN account is affected for the first time (either by a query or by a posting made to it), balances are initialised synchronously using the [address details](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#AddressDetails) of the account’s associated product.

Balances are initialised for each phase, address and denomination. The DEFAULT address will be initialised for every combination of these values with the specified asset being COMMERCIAL\_BANK\_MONEY. Non-default addresses are initialised for combinations where the phase is COMMITTED.

It is possible that a posting can be made to an address that is not declared in the product’s address details. In this situation the Live Balance Processor will initialise the balance prior to processing the posting’s balance effects.

## [](#retrieving_balances "Copy link to heading")Retrieving balances

### [](#retrieving_customer_account_balances "Copy link to heading")Retrieving Customer Account balances

The Balances version 2 resource enables retrieval of a:

-   Customer Account’s [Current balances](/vault-core/5-8/EN/api/core_api#balanceslive_2): A balance as of now
    
-   Customer Account’s [End balances](/vault-core/5-8/EN/api/core_api#balancesend): A balance as of a point in time, which includes future-dated postings inserted before this time
    
-   [Time range](/vault-core/5-8/EN/api/core_api#balancesseries) of a Customer Account’s balances: Any changes to the balance over a specified time period
    

To retrieve Customer Account balances, call [GET /v2/balances/live](/vault-core/5-8/EN/api/core_api#_core_api_v2_balances_ListBalancesLiveResponse_ListBalancesLive), [GET /v2/balances/end](/vault-core/5-8/EN/api/core_api#_core_api_v2_balances_ListBalancesEndResponse_ListBalancesEnd) or [GET /v2/balances/series](/vault-core/5-8/EN/api/core_api#_core_api_v2_balances_ListBalancesSeriesResponse_ListBalancesSeries), providing the:

-   `account_id` of the Customer Account required
    
-   Type of timestamp (value or booking) you want to retrieve results by as `balance_time_view`
    

You can also provide (where applicable):

-   `addresses` to filter by balance address
    
-   `snapshot_timestamp` to take into account only those postings with an `insertion_timestamp` earlier than (or equal to) this time
    

#### [](#example_balances_request "Copy link to heading")Example balances request

The following is an example request for a balance series for a previous month on a Customer Account, up to and including 23:55 on the 07th of August 2025. To ignore the effect of subsequent backdated Postings, `snapshot_timestamp` has also been set:

#### [](#example_response_to_balances_request "Copy link to heading")Example response to balances request

The response confirms the Customer Account’s balance position up to and including the requested time (ignoring any Postings inserted after this time):

### [](#retrieving_ledger_balances "Copy link to heading")Retrieving ledger balances

To retrieve ledger balances, call [GET /v1/ledger-balances](/vault-core/5-8/EN/api/core_api#_core_api_v1_ledger_balances_ListLedgerBalancesResponse_ListLedgerBalances), providing the:

-   `account_ids` of the Accounts required (Thought Machine recommends only one request per Account for Internal Accounts)
    
-   `ledger_timestamp` at which to retrieve ledger balances - this is the Postings Ledger insertion timestamp, and thus the sum of all Postings up to, and including, this timestamp
    

#### [](#example_ledger_balances_request "Copy link to heading")Example ledger balances request

The following is an example request for ledger balances on an account, as at 23:55 on the 07th of July 2025:

#### [](#example_response_to_ledger_balances_request "Copy link to heading")Example response to ledger balances request

The response confirms the Postings Ledger balance position at the requested time:

## [](#switching_from_the_accountbalanceevent_to_the_balanceevent "Copy link to heading")Switching from the AccountBalanceEvent to the BalanceEvent

To switch from the [AccountBalanceEvent](/vault-core/5-8/EN/api/core_api#accountbalanceevent) to the [BalanceEvent](/vault-core/5-8/EN/api/core_api#balanceevent) stream, you can use the `BalanceEvent.account_balance_sequence_number` to correlate with the `AccountBalanceEvent.related_resource.sequence_number`.

Use [event reconciliation](/vault-core/5-8/EN/api/core_api#event_reconciliation) to make sure you consumed all the messages from the `AccountBalanceEvent` when switching over.