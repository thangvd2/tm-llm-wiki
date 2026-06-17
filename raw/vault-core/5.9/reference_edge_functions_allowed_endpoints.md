---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/edge_functions/allowed_endpoints"
title: "Allowed Vault Core endpoints in Edge Functions"
scraped_at: "2026-06-17T05:02:47.895Z"
images: 0
---

# Allowed Vault Core endpoints in Edge Functions

Edge Functions allow a subset of Vault Core endpoints. This is due to technical limitations, such as endpoints being part of an asynchronous streaming API or requiring long-running operations, as well as internal security policies. The following table lists the allowed endpoints and their HTTP methods.

 
| Endpoint | Method |
| --- | --- |
| 
`/v1/account-attribute-values`

 | 

`GET`

 |
| 

`/v1/account-migrations`

 | 

`GET`

 |
| 

`/v1/account-migrations:batchGet`

 | 

`GET`

 |
| 

`/v1/account-plan-assocs`

 | 

`GET`

 |
| 

`/v1/account-plan-assocs:batchGet`

 | 

`GET`

 |
| 

`/v1/account-schedule-assocs`

 | 

`GET`

 |
| 

`/v1/account-schedule-assocs/{id}`

 | 

`GET`

 |
| 

`/v1/account-schedule-tags`

 | 

`GET`

 |
| 

`/v1/account-schedule-tags`

 | 

`POST`

 |
| 

`/v1/account-schedule-tags/{id}`

 | 

`PUT`

 |
| 

`/v1/account-schedule-tags:batchGet`

 | 

`GET`

 |
| 

`/v1/adjustments`

 | 

`GET`

 |
| 

`/v1/adjustments:batchGet`

 | 

`GET`

 |
| 

`/v1/balances/live`

 | 

`GET`

 |
| 

`/v1/balances/timerange`

 | 

`GET`

 |
| 

`/v1/calendar`

 | 

`POST`

 |
| 

`/v1/calendar-event`

 | 

`GET`

 |
| 

`/v1/calendar-event`

 | 

`POST`

 |
| 

`/v1/calendar-event/{calendar_event_id}:updateDetails`

 | 

`PUT`

 |
| 

`/v1/calendar-event/{id}`

 | 

`GET`

 |
| 

`/v1/calendar-event:batchGet`

 | 

`GET`

 |
| 

`/v1/calendar-period-descriptor`

 | 

`POST`

 |
| 

`/v1/calendar/bookkeeping-date/{id}`

 | 

`GET`

 |
| 

`/v1/calendar/bookkeeping-date/{id}`

 | 

`PUT`

 |
| 

`/v1/calendar/{calendar_id}/period/current:change`

 | 

`PUT`

 |
| 

`/v1/calendar/{calendar_id}:calculatePeriod`

 | 

`GET`

 |
| 

`/v1/calendar/{calendar_id}:updateDetails`

 | 

`PUT`

 |
| 

`/v1/calendar/{id}`

 | 

`GET`

 |
| 

`/v1/calendars`

 | 

`GET`

 |
| 

`/v1/contract-module-versions`

 | 

`GET`

 |
| 

`/v1/contract-module-versions`

 | 

`POST`

 |
| 

`/v1/contract-module-versions:batchGet`

 | 

`GET`

 |
| 

`/v1/contract-modules`

 | 

`GET`

 |
| 

`/v1/contract-modules`

 | 

`POST`

 |
| 

`/v1/contract-modules:batchGet`

 | 

`GET`

 |
| 

`/v1/create-posting-instruction-batch:validate`

 | 

`POST`

 |
| 

`/v1/customer-addresses`

 | 

`GET`

 |
| 

`/v1/customer-addresses`

 | 

`POST`

 |
| 

`/v1/customer-addresses/{id}`

 | 

`PUT`

 |
| 

`/v1/customers`

 | 

`POST`

 |
| 

`/v1/customers/{customer_id}:updateAdditionalDetails`

 | 

`PUT`

 |
| 

`/v1/customers/{id}`

 | 

`GET`

 |
| 

`/v1/customers/{id}`

 | 

`PUT`

 |
| 

`/v1/customers:batchGet`

 | 

`GET`

 |
| 

`/v1/customers:search`

 | 

`POST`

 |
| 

`/v1/derived-parameter-values`

 | 

`GET`

 |
| 

`/v1/dlq-messages`

 | 

`GET`

 |
| 

`/v1/dlq-messages:batchGet`

 | 

`GET`

 |
| 

`/v1/flag-definitions`

 | 

`GET`

 |
| 

`/v1/flag-definitions`

 | 

`POST`

 |
| 

`/v1/flag-definitions/{id}`

 | 

`PUT`

 |
| 

`/v1/flag-definitions:batchGet`

 | 

`GET`

 |
| 

`/v1/flags`

 | 

`GET`

 |
| 

`/v1/flags`

 | 

`POST`

 |
| 

`/v1/flags/{id}`

 | 

`PUT`

 |
| 

`/v1/flags:batchGet`

 | 

`GET`

 |
| 

`/v1/global-parameter-values`

 | 

`GET`

 |
| 

`/v1/global-parameter-values`

 | 

`POST`

 |
| 

`/v1/global-parameters`

 | 

`GET`

 |
| 

`/v1/global-parameters`

 | 

`POST`

 |
| 

`/v1/global-parameters/{id}`

 | 

`GET`

 |
| 

`/v1/global-parameters:batchGet`

 | 

`GET`

 |
| 

`/v1/jobs`

 | 

`GET`

 |
| 

`/v1/jobs:batchGet`

 | 

`GET`

 |
| 

`/v1/journal-events`

 | 

`GET`

 |
| 

`/v1/journal-events:checksum`

 | 

`GET`

 |
| 

`/v1/journal-events:replay`

 | 

`POST`

 |
| 

`/v1/ledger-balances`

 | 

`GET`

 |
| 

`/v1/ledger-balances/{id}`

 | 

`GET`

 |
| 

`/v1/parameter-value-hierarchy-nodes`

 | 

`GET`

 |
| 

`/v1/parameter-value-hierarchy-nodes`

 | 

`POST`

 |
| 

`/v1/parameter-value-hierarchy-nodes/{id}`

 | 

`PUT`

 |
| 

`/v1/parameter-value-hierarchy-nodes:batchGet`

 | 

`GET`

 |
| 

`/v1/parameter-values`

 | 

`GET`

 |
| 

`/v1/parameter-values`

 | 

`POST`

 |
| 

`/v1/parameter-values/{id}`

 | 

`PUT`

 |
| 

`/v1/parameter-values:batchCreate`

 | 

`POST`

 |
| 

`/v1/parameter-values:batchGet`

 | 

`GET`

 |
| 

`/v1/parameter-values:viewEffective`

 | 

`GET`

 |
| 

`/v1/parameters`

 | 

`GET`

 |
| 

`/v1/parameters`

 | 

`POST`

 |
| 

`/v1/parameters:batchGet`

 | 

`GET`

 |
| 

`/v1/payment-device-links`

 | 

`GET`

 |
| 

`/v1/payment-device-links`

 | 

`POST`

 |
| 

`/v1/payment-device-links/{id}`

 | 

`PUT`

 |
| 

`/v1/payment-device-links:batchGet`

 | 

`GET`

 |
| 

`/v1/payment-device-links:search`

 | 

`POST`

 |
| 

`/v1/payment-devices`

 | 

`POST`

 |
| 

`/v1/payment-devices/{id}`

 | 

`PUT`

 |
| 

`/v1/payment-devices:batchGet`

 | 

`GET`

 |
| 

`/v1/plan-schedules`

 | 

`GET`

 |
| 

`/v1/plan-updates`

 | 

`GET`

 |
| 

`/v1/plan-updates:batchGet`

 | 

`GET`

 |
| 

`/v1/plans:batchGet`

 | 

`GET`

 |
| 

`/v1/policies`

 | 

`GET`

 |
| 

`/v1/policies/{id}`

 | 

`GET`

 |
| 

`/v1/policies:batchGet`

 | 

`GET`

 |
| 

`/v1/post-posting-failures`

 | 

`GET`

 |
| 

`/v1/post-posting-failures/{id}`

 | 

`DELETE`

 |
| 

`/v1/post-posting-failures:batchGet`

 | 

`GET`

 |
| 

`/v1/post-posting-failures:republish`

 | 

`POST`

 |
| 

`/v1/posting-instruction-batches`

 | 

`GET`

 |
| 

`/v1/posting-instruction-batches`

 | 

`POST`

 |
| 

`/v1/posting-instruction-batches/{id}`

 | 

`GET`

 |
| 

`/v1/posting-instruction-batches:batchGet`

 | 

`GET`

 |
| 

`/v1/processing-groups`

 | 

`GET`

 |
| 

`/v1/processing-groups`

 | 

`POST`

 |
| 

`/v1/processing-groups/{id}`

 | 

`GET`

 |
| 

`/v1/processing-groups/{id}`

 | 

`PUT`

 |
| 

`/v1/product-versions`

 | 

`GET`

 |
| 

`/v1/product-versions`

 | 

`POST`

 |
| 

`/v1/product-versions/{product_version_id}:paramTimeseries`

 | 

`GET`

 |
| 

`/v1/product-versions/{product_version_id}:updateParams`

 | 

`PUT`

 |
| 

`/v1/product-versions:batchGet`

 | 

`GET`

 |
| 

`/v1/product-versions:batchUpdate`

 | 

`POST`

 |
| 

`/v1/products`

 | 

`GET`

 |
| 

`/v1/products:batchGet`

 | 

`GET`

 |
| 

`/v1/restriction-set-definition-versions`

 | 

`GET`

 |
| 

`/v1/restriction-set-definition-versions`

 | 

`POST`

 |
| 

`/v1/restriction-set-definition-versions:batchGet`

 | 

`GET`

 |
| 

`/v1/restriction-set-definitions`

 | 

`GET`

 |
| 

`/v1/restriction-sets`

 | 

`GET`

 |
| 

`/v1/restriction-sets`

 | 

`POST`

 |
| 

`/v1/restriction-sets/{id}`

 | 

`PUT`

 |
| 

`/v1/restriction-sets:batchGet`

 | 

`GET`

 |
| 

`/v1/restrictions`

 | 

`GET`

 |
| 

`/v1/schedules`

 | 

`GET`

 |
| 

`/v1/schedules:batchGet`

 | 

`GET`

 |
| 

`/v1/smart-contract-module-versions-links`

 | 

`GET`

 |
| 

`/v1/smart-contract-module-versions-links`

 | 

`POST`

 |
| 

`/v1/smart-contract-module-versions-links:batchGet`

 | 

`GET`

 |
| 

`/v1/supervisor-contract-versions`

 | 

`GET`

 |
| 

`/v1/supervisor-contract-versions`

 | 

`POST`

 |
| 

`/v1/supervisor-contract-versions:batchGet`

 | 

`GET`

 |
| 

`/v1/supervisor-contracts`

 | 

`GET`

 |
| 

`/v1/supervisor-contracts`

 | 

`POST`

 |
| 

`/v1/supervisor-contracts:batchGet`

 | 

`GET`

 |
| 

`/v1/token:validate`

 | 

`GET`

 |
| 

`/v1/usage-measurements`

 | 

`GET`

 |
| 

`/v1/vault-jobs`

 | 

`GET`

 |
| 

`/v1/vault-jobs-operations`

 | 

`GET`

 |
| 

`/v1/vault-jobs/{id}`

 | 

`GET`

 |
| 

`/v1/vault-jobs:batchGet`

 | 

`GET`

 |
| 

`/v1/vault-version`

 | 

`GET`

 |
| 

`/v2/account-migrations`

 | 

`GET`

 |
| 

`/v2/account-migrations:batchGet`

 | 

`GET`

 |
| 

`/v2/accounts`

 | 

`GET`

 |
| 

`/v2/accounts`

 | 

`POST`

 |
| 

`/v2/accounts/{id}`

 | 

`PUT`

 |
| 

`/v2/accounts:batchGet`

 | 

`GET`

 |
| 

`/v2/balances/end`

 | 

`GET`

 |
| 

`/v2/balances/live`

 | 

`GET`

 |
| 

`/v2/balances/series`

 | 

`GET`

 |