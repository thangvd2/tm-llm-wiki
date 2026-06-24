---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_6_advanced_smart_contract_tutorial/exercise_3"
title: "Exercise 3 - Deterministic Balance Fetching"
scraped_at: "2026-06-17T15:58:34.718Z"
images: 0
---

# Exercise 3 - Deterministic Balance Fetching

This exercise focuses on ensuring the interest calculation is deterministic, consistent, and adheres to a specific local cutoff time, transitioning the system away from using the non-deterministic `LIVE` balance.

The system must be updated to meet the following objectives:

1.  Both the `ACCRUE_INTEREST` and `APPLY_INTEREST` events must be deterministic and consistent regardless of when they are run, preventing calculation discrepancies.
    
2.  Daily interest must be accrued based on the account balance at 23:59:59 in the local timezone. Transactions posted after this cutoff time should not impact the current day’s accrual amount.
    
3.  The accrued interest posting must be recorded 1 microsecond before the local cutoff time to ensure accurate ledger tracking.
    

To fulfill these requirements, changes must be made to both the balance fetching logic and the posting logic.

-   To be dertiministic and consistent, both event fetchers must rely on the `effective_datetime` instead of the `LIVE` balance.
    
-   `ACCRUE_INTEREST`: `BalancesObservationFetcher` does not natively support timezones for its `at` parameter (the example below only fetches balances at 23:59:59 UTC time). Therefore, we need to use `BalancesIntervalFetcher` to fetch previous 1 day’s balance timeseries with an interval fetcher, then retrieve the precise balance at the local cutoff time in the hook logic.
    

-   The `value_timestamp` of the interest accrual postings must be explicitly calculated and set to be 1 microsecond prior to the local cutoff time. This backdates the ledger entry to ensure the accrued interest is recorded before the end of the day.