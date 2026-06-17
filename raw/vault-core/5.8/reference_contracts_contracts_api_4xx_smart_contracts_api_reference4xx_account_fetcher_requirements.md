---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements"
title: "Account Fetcher Requirements"
scraped_at: "2026-06-17T05:33:19.503Z"
images: 0
---

# Account Fetcher Requirements

## [](#balances "Copy link to heading")balances

**Type:** `List[str]`

Balances data, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs must be unique and a fetcher with each ID must be defined in the Contract metadata.

## [](#calendars "Copy link to heading")calendars

**Type:** `List[str]`

Calendar events data, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs must be unique and a fetcher with each ID must be defined in the Contract metadata.

## [](#flags "Copy link to heading")flags

**Type:** `List[str]`

Flags data, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs must be unique and a fetcher with each ID must be defined in the Contract metadata.

## [](#last_scheduled_event_datetimes "Copy link to heading")last\_scheduled\_event\_datetimes

**Type:** `List[str]`

Last scheduled event datetimes, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs must be unique and a fetcher with each ID must be defined in the Contract metadata.

info

Existing Customer Accounts cannot be converted to a Smart Contract with [LastScheduledEventDateTimesObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#lastscheduledeventdatetimesobservationfetcher), if their current Smart Contract is not already using it, due to data access limitations. Future Vault Core improvements aim to address these limitations.

## [](#parameters "Copy link to heading")parameters

**Type:** `List[str]`

Parameter values, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs must be unique and a fetcher with each ID must be defined in the Contract metadata.

## [](#postings "Copy link to heading")postings

**Type:** `List[str]`

Postings data, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs must be unique and a fetcher with each ID must be defined in the Contract metadata.