---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/retry"
title: "Retry"
scraped_at: "2026-06-17T15:49:01.008Z"
images: 0
---

# Retry

`flows_api.retry` module

The retry module contains types related to retries.

## [](#RetryPolicy "Copy link to heading")RetryPolicy

Defines configuration for retries.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`retry_timeout`

 | 

`Optional[timedelta]`

 | 

The maximum time for which this request should be retried.

 |
| 

`request_timeout`

 | 

`Optional[timedelta]`

 | 

The maximum time an individual request should take

 |