---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/schedule_types"
title: "Uptime schedule types and examples"
scraped_at: "2026-06-17T05:14:00.729Z"
images: 0
---

# Uptime schedule types and examples

The `uptime` field of a HibernatorSchedule defines the times at which your environment should be scaled up. It is a comma separated list, with each entry being one of the following types:

-   **On or off**: a value of `always` means the environment will always be scaled up, and a value of `never` means the environment will never be scaled up.
    
-   **Weekly time range**: this defines time ranges on specific days of the week. For example:
    
    -   `Mon-Fri 08:00-18:30` means the environment will be scaled up between 8am and 6:30pm UTC on weekdays.
        
    -   `Sun-Sat 02:00-04:00 Australia/Adelaide` means the namespace will be active between 2am and 4pm in Adelaide local time.
        
    -   `Mon-Fri 00:00-23:59` means the namespace will be active from midnight UTC at the start of Monday until midnight UTC at the end of Friday. Timezones must be expressed as valid TZ identifiers as described [here](https://www.iana.org/time-zones).
        
    
-   **Absolute time range**: this defines an interval using absolute timestamps in RFC3339 format. For example, `2024-01-02T08:00:00Z-2024-01-04T18:30:00Z` means the namespace will be active from 8am UTC on January 2nd 2024 until 6:30pm UTC+8 on January 4th 2024.
    

Multiple comma-separated entries are combined as follows:

1.  If any entries are `always`, the namespace will always be scaled up (all other entries are ignored). Otherwise…​
    
2.  If any entries are `never`, the namespace will never be scaled up (all other entries are ignored). Otherwise…​
    
3.  Weekly Time Ranges and Absolute Time Ranges are combined using logical OR, and then…​
    
4.  The combined time ranges are further combined using logical AND.
    

Schedules can be ANDed together by wrapping them in parentheses, i.e. `(Mon-Fri 08:00-20:00)(Mon-Tue 08:00-20:00)` would only result in the instance being up from Mon-Tue 08:00-20:00.

## [](#examples "Copy link to heading")Examples

**Always active**

The below environment will always be scaled up.

**Never active**

The below environment will never be scaled up.

**Daily schedules**

The below environment will be scaled up between 8am and 6:30pm UTC on weekdays.

The below environment will be scaled up between 8am and 6:30pm New York time on weekdays.

**Schedules with a logical OR**

The below environment will be scaled up between 8am and 6:30pm UTC on weekdays, and between 2am and 4am UTC on weekends.

The below environment will be scaled up between 8am and 6:30pm New York time on weekdays, and also every day between midnight at 1:59am New York time.

**Schedule with a logical AND**

The below environment will be scaled up between 8am and 6:30pm UTC on weekdays, but not until 11am on Mondays.