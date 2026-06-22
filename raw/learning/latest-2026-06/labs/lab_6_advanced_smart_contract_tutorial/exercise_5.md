---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_6_advanced_smart_contract_tutorial/exercise_5"
title: "Exercise 5 - Last Execution Time"
scraped_at: "2026-06-17T15:58:38.768Z"
images: 0
---

# Exercise 5 - Last Execution Time

This exercise requires an update to the monthly interest application logic to apply a flat compensation interest of 10 SGD to customers when the previous application was skipped (e.g. due to a public holiday). This compensation logic must be toggleable via configuration.

To meet this requirement, there are a few things to consider:

1.  A new expected parameter `allow_bonus_after_skip` should be created using `EnumerationConstraint` with "true" and "false" as its permitted values.
    
2.  If the `allow_bonus_after_skip` parameter value is set to be "true", `vault.get_last_execution_datetime()` needs to be used to get the last execution time of `APPLY_INTEREST` event to determine whether the last one was skipped or not. If the interest application in the last month was indeed skipped, an extra of 10 SGD will be added to the interest application amount.