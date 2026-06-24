---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_6_advanced_smart_contract_tutorial/exercise_4"
title: "Exercise 4 - Calendar"
scraped_at: "2026-06-17T15:58:36.776Z"
images: 0
---

# Exercise 4 - Calendar

This exercise introduces the use of the Calendar resource to enforce business rules based on public holidays. The primary requirement is to skip the monthly interest application if the scheduled application day falls on a specified public holiday.

To fulfill this requirement, you will need to integrate and utilize the Calendar resource:

1.  A new Calendar resource must be created and configured to define the public holidays. This resource will serve as the central repository for all public holidays.
    
2.  Create Calendar Event resources within your Calendar, specifying the accurate `start_timestamp` and `end_timestamp` for each public holiday.
    
3.  The `APPLY_INTEREST` event must be updated to include a calendar check. The Smart Contract must verify whether the current `effective_datetime` falls within the range of any active Calendar Event (i.e. a public holiday) before executing the regular interest application logic. If a match is found, the application logic must be skipped for that day
    

Some extension of this exercise can be:

1.  **Event Rescheduling**
    
    Instead of just skipping the application, extend the logic to automatically reschedule the `APPLY_INTEREST` event to execute on the next business day after the public holiday.