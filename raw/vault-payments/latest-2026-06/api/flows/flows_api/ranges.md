---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/ranges"
title: "Ranges"
scraped_at: "2026-06-17T15:48:57.504Z"
images: 0
---

# Ranges

`flows_api.ranges` module

Types used to describe ranges of numeric or ordinal values.

## [](#TimestampRange "Copy link to heading")TimestampRange

Describes a half-open range of timestamps.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`from`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Lower end of the range. The range is inclusive of its lower end.

 |
| 

`to`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Upper end of the range. The range is exclusive of its upper end.

 |