---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/accounts/high_volume_accounts"
title: "High-volume Accounts"
scraped_at: "2026-06-17T05:32:34.128Z"
images: 0
---

# High-volume Accounts

## [](#what_are_high_volume_accounts "Copy link to heading")What are high-volume Accounts?

chat\_bubble

High-volume Accounts are only available as an Extension. Contact your Thought Machine representative for more information.

High-volume Accounts are Customer Accounts which can receive a much higher throughput of offline Postings traffic via the `vault.core.postings.requests.low_priority.v1` request topic in the [Asynchronous Postings API](/vault-core/5-8/EN/api/postings_api#asynchronous_postings_api).

High-volume Accounts are useful for managing corporate Customer Account activity, such as large-scale payroll disbursements (offline debit) or subscription payment collections (offline credit).

lightbulb

We show the results of High-volume Accounts testing on GCP in our [performance report](/vault-core/5-8/EN/vault_release_information#performance_report).

## [](#use_of_high_volume_accounts "Copy link to heading")Use of high-volume Accounts

As with any Customer Account, high-volume Accounts use a Smart Contract to specify the financial product logic. However, there is a necessary trade-off between functionality and throughput for Smart Contracts backing high-volume Accounts, as described in the following section.

info

High-throughput Postings can only be processed via the `vault.core.postings.requests.low_priority.v1` request topic. Thought Machine recommends that you:

-   Trigger high-volume Postings activity outside peak load periods (such as End of Day processing)
    
-   Use future-dated Postings judiciously, ensuring that no more than one percent of your total Postings are future-dated, and spreading any future-dated Postings as evenly as possible over a 90 day future period
    

## [](#smart_contracts_for_high_volume_accounts "Copy link to heading")Smart Contracts for high-volume Accounts

chat\_bubble

Contracts Language version 3 does not support high-volume Accounts.

High-volume Accounts must be associated with an *eligible* Smart Contract. To maintain high throughput, a Smart Contract is only eligible for use with high-volume Accounts when it *does not*:

-   Fetch postings (using the [PostingsIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#postingsintervalfetcher))
    
-   Fetch balance intervals (using the [BalancesIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesintervalfetcher))
    
-   Implement the [post-posting hook](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks#post_posting_hook)
    

Future Vault Core improvements aim to remove these preventions or provide suitable alternatives.

Once you have written your Smart Contract with the above considerations in place, call `POST /v1/product-versions`, and set `product_version.high_volume_eligibility.ledger` to `"true"`. This declaration, in combination with the above criteria, sets the Smart Contract as eligible for high-volume Account usage.

## [](#converting_accounts_onto_high_volume_smart_contracts "Copy link to heading")Converting Accounts onto high-volume Smart Contracts

warning

Customer Accounts can be converted *onto* high-volume Smart Contracts, but they can never be converted *from* a high-volume Smart Contract to a standard contract.

The process for converting an Account to a high-volume Smart Contract is the same as for standard account conversions, either via the [Accounts version 1](/vault-core/5-8/EN/reference/accounts/accounts_version_1#account_conversions) or [Accounts version 2](/vault-core/5-8/EN/reference/accounts/accounts_version_2#account_conversions). Once an Account has been converted onto a high-volume Smart Contract, that Account can only be converted onto other high-volume Smart Contract versions.

chat\_bubble

Supervisor Contracts are not supported with High-volume Accounts.

## [](#retrieving_product_balances_for_high_volume_accounts "Copy link to heading")Retrieving Product Balances for high-volume Accounts

The [BalancesTimeRange](/vault-core/5-8/EN/api/core_api#balancestimerange) and the [BalancesSeries](/vault-core/5-8/EN/api/core_api#balancesseries) list endpoints allow the returning of balances at specific time intervals. There is a necessary trade-off between the achievable throughput for high-volume Accounts and observing time range data due to the large data volumes involved.

The maximum number of committed postings forming balance values is 10,000. If this limit is breached when querying the endpoint, a FailedPrecondition error type is raised.

Smart Contract balance observations (using the [BalancesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#balancesobservationfetcher)) are also subject to limitations, and will return an error if too many records are queried.

chat\_bubble

Thought Machine has added an optional `snapshot_timestamp` field to the request. When this is set, Vault Core only includes committed postings with an `insertion_timestamp` up to and including this time (and excludes any postings inserted after this time).

Future Vault Core improvements aim to remove these preventions or provide suitable alternatives.