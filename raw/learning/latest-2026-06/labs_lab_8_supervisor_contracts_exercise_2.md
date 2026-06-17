---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_8_supervisor_contracts/exercise_2"
title: "Exercise 2 - Define the Supervisor Contract"
scraped_at: "2026-06-17T05:20:01.139Z"
images: 0
---

# Exercise 2 - Define the Supervisor Contract

You will need to make changes to the supervisor smart contract here: `smart_contract_tutorials/library/supervisor_deposit/supervisor_contracts/deposit_supervisor.py`. Several additions will need to be made here to fulfil the requirements for our Supervisor product.

## [](#update_the_metadata "Copy link to heading")Update the Metadata

You will first need to define the supervisee (i.e. non-supervisor) smart contracts that will be supervised. To do this, start by defining the metadata for `supervised_smart_contracts`, which will need to reference both supervisee smart contracts.

The pre posting hooks will need to be overridden for both supervisees, and the main deposit will also need to override post posting.

## [](#override_the_interest_schedule "Copy link to heading")Override the Interest Schedule

Update the `event_types` metadata with the apply interest schedule.

Complete the activation\_hook to create the APPLY\_INTEREST\_EVENT.

This new schedule should be delayed by 1 hour to clearly demonstrate that the override has taken effect.