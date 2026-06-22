---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-5"
title: "Exercise 5 - Streaming API for Contract Initiated Events"
scraped_at: "2026-06-17T15:57:39.715Z"
images: 0
---

# Exercise 5 - Streaming API for Contract Initiated Events

## [](#sub_exercise_1_uploading_your_smart_contract "Copy link to heading")Sub-exercise 1 - Uploading your Smart Contract

First we will upload a Smart Contract which has the required code for us to instruct an event to be emitted on the Kafka topic `vault.core_api.v1.contracts.contract_notification.events`. A copy of the required Smart Contract is provided as `sample_contract.py`, under the same working folder in the Lab Starter Pack. Please update the display name so it can be identified by you.

You then need to Stringify your Smart Contract Code. There are a range of ways to do this, but using Python3 you can do the following commands from a terminal located in the same folder as your Smart Contract:

Then copy the printed output and paste it into the `code` field in a `POST /v1/product-versions` request that is in the provided collection.

The Smart Contract you have uploaded will accept any postings you make to it, because it does not contain any pre\_posting\_code hook. Smart contracts that do not have a hook defined will simply not execute any logic for that particular hook.

### [](#initiating_an_event_as_a_result_of_smart_contract_code "Copy link to heading")Initiating an event as a result of Smart Contract Code

Initiating an event from the Smart Contract will be done by returning hook results as follows.

Notifications can be returned from most Smart Contract Hooks. Refer to the Return Type definition for each hook, checking for `account_notification_directives`:

[Smart Contract Hooks](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks)

The event we are going to be observing is:

-   ContractNotificationEvent
    
    -   `vault.core_api.v1.contracts.contract_notification.events`
        
    -   Generated when a hook containing the instruct\_notification directive is executed in a Smart or Supervisor contract.
        
    

## [](#sub_exercise_2_viewing_the_contract_generated_notification_event "Copy link to heading")Sub-exercise 2 - Viewing the Contract generated notification event

1.  Create an account using your previously uploaded Smart Contract, create an Account using a POST request to the `/v1/accounts` endpoint.
    
2.  Make a posting to the account you have created from an internal account using the endpoint `POST /v1/posting-instruction-batches`.
    
3.  Observe the Kafka event emitted from `vault.core_api.v1.contracts.contract_notification.events`. \[[1](#_footnotedef_1 "View footnote.")\]
    

* * *

[1](#_footnoteref_1). TH: Take the 7th letter of the key ending with `ails`.