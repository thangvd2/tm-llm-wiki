---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_6_advanced_smart_contract_tutorial/exercise_2"
title: "Exercise 2 - Use Non-UTC Timezone"
scraped_at: "2026-06-17T15:58:32.925Z"
images: 0
---

# Exercise 2 - Use Non-UTC Timezone

This exercise focuses on configuring the Smart Contract to operate using a non-UTC timezone: Asia/Singapore.

The `events_timezone` metadata is not declared in the `basic_deposit.py` Smart Contract, so by default it uses UTC timezone. To shift this behavior to a specific local time—such as Singapore Time (SGT, UTC+8) — there are a few things to consider:

1.  There are 2 ways to specify non-UTC timezones: in the Processing Group and in the Smart Contract. This exercise focuses on the Smart Contract approach - the Smart Contract metadata must be explicitly updated to declare the desired local timezone (e.g. `events_timezone = ZoneInfo("Asia/Singapore")`). This overrides the default UTC setting.
    
2.  Once the `events_timezone` is set, all schedule expressions will automatically be interpreted in that local timezone. For instance, hour=0, minute=1, second=0 will execute at 00:01:00 local time, not UTC.
    
3.  Still, there are some manual modifications that need to be done. When schedules are created in the `activation_hook`, the `start_time` parameter for the `ScheduledEvent` object must be localized to the declared timezone. Furthermore, any business logic based on a calendar date must be calculated using a localized datetime object to guarantee the date and time are correct from the local perspective. In this exercise, the logic for deriving the interest application day from the account opening date needs to be based on the localized account opening date.
    

Once implemented, create both Unit and Simulation tests to verify that Smart Contract correctly initializes schedules with the declared `events_timezone` metadata.

Some extension of this exercise can be:

1.  **Timezone with Day Light Saving**
    
    Choose a non-UTC timezone that undergoes DST changes (e.g., Europe/London or America/New\_York). Create a simulation that deliberately runs before, during, and after a known DST transition date for your chosen timezone (e.g., the last Sunday in March and the last Sunday in October for Europe/London).