---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/calendars"
title: "Calendars"
scraped_at: "2026-06-17T05:08:48.280Z"
images: 0
---

# Calendars

`flows_api.calendars` module

The Calendar resource.

## [](#CalculateCalendarPeriodRequest "Copy link to heading")CalculateCalendarPeriodRequest

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`calendar_id`

 | 

`str`

 | 

The ID of the Calendar the Calendar Period needs to be calculated on.

 |
| 

`reference_date`

 | 

`str`

 | 

Calculation will be performed using a whole calendar day as reference. Formatted as  
"YYYY-MM-DD"

 |
| 

`reference_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Calculation will be performed using a point in time as reference.

 |
| 

`offset`

 | 

`int`

 | 

The offset in Calendar Periods to take into account when calculating the Calendar Period. If  
not specified, defaults to 0 (current Calendar Period).

 |

## [](#CalendarPeriod "Copy link to heading")CalendarPeriod

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

The unique identifier of the period within Vault Payments.

 |
| 

`calendar_id`

 | 

`str`

 | 

The ID of the Calendar this Calendar Period originated from.

 |
| 

`period_date`

 | 

`str`

 | 

The date (business date if the Calendar is business day-aware) this period corresponds to.  
Formatted as "YYYY-MM-DD".

 |
| 

`period_range`

 | 

`[flows_api.ranges.TimestampRange](/vault-payments/latest/EN/api/flows/flows_api/ranges#TimestampRange)`

 | 

The timestamp range spanned by this period.

 |
| 

`time_zone`

 | 

`str`

 | 

The time zone of the Calendar.

 |