---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/scheduling"
title: "Scheduling"
scraped_at: "2026-06-17T05:07:51.138Z"
images: 0
---

# Scheduling

## [](#calendar "Copy link to heading")Calendar

This section describes the main concepts used to perform time period calculations using the Vault Payments Calendar.

### [](#calendar_2 "Copy link to heading")Calendar

`Calendar` in Vault Payments allows clients to define time period representations. `Vault Payments Calendar` supports two types of time representations: `Cutoff Period` and `Processing Period`.

`Cutoff period` describes a continuous time period with a single point in time which separates two adjacent time periods. The most common use cases for these periods are accounting and reporting, where transactions are always allocated to a "bucket" of time.

`Processing period` is a time period with defined start and end time boundaries. `Processing periods` allow gaps between the time periods, whereas `Cutoff periods` do not. The most common use cases for these periods are scheme specific processing window calculations, where payments can only be processed during specific time windows.

### [](#business_day_definition "Copy link to heading")Business day definition

`Business Day Definition` defines a business day representation, modelled as a separate resource which can interface with the main `Calendar` resource to represent business day-aware periods. It is independent of the `Calendar` to provide an additional optional layer of configuration to period representation; the same `Business Day Definition` can be reused across `Calendars`. If a `Cutoff Period` is configured with non-business days according to `Business Day Definition`, then the generated periods span non-business days according to the business day convention mode.