---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-3"
title: "Exercise 3 - Streaming API for Postings Events"
scraped_at: "2026-06-17T05:18:45.642Z"
images: 0
---

# Exercise 3 - Streaming API for Postings Events

Postings are the lowest level movement of funds that can occur within a transaction. They indicate the movement of value from one balance within one account to another balance, typically in another account. Typically you will use the Postings API in order to make postings within Vault and consume the events for payments processing purposes, however you may also listen to the core streaming api for reporting purposes.

In this exercise we are going to make a posting and observe the event streamed out, as a result of a Rejected posting and an Accepted Posting. The event we will be observing is

-   `PostingInstructionBatchCreatedEvent`
    
    -   `vault.api.v1.postings.posting_instruction_batch.created`
        
    
-   Generated every time a PostingInstructionBatch resource is created.
    

## [](#sub_exercise_1_make_a_rejected_posting_and_observe_the_output "Copy link to heading")Sub-exercise 1 - Make a Rejected Posting and Observe the Output

1.  Using an existing account, make a posting from an Internal Account with an invalid ID (Ie. the internal account does not exist) to a valid Customer’s Account. Use the endpoint `POST /v1/posting-instruction-batches` in order to create a posting into the account. Examples are included in the Postman Collections provided.
    
    1.  Observe the violations that have been recorded: `"committed_postings": [], "posting_violations": [], "account_violations": [], "restriction_violations": [], "contract_violations": []` \[[1](#_footnotedef_1 "View footnote.")\]
        
    2.  We expect that the “account\_violations” will hold a value of `“ACCOUNT_VIOLATION_ACCOUNT_NOT_PRESENT”`
        
    

## [](#sub_exercise_2_make_an_accepted_posting_and_observe_the_output "Copy link to heading")Sub-exercise 2 - Make an Accepted Posting and Observe the Output

1.  As per the sub-exercise *“Make a Rejected Posting and Observe the Output”* - make another posting which has a valid Internal Account ID
    
2.  Observe the successful posting, with the status field as `POSTING_INSTRUCTION_BATCH_STATUS_ACCEPTED` \[[2](#_footnotedef_2 "View footnote.")\]
    

chat\_bubble

It’s also useful to know how postings are produced directly to the Kafka request topics. This will be covered in Exercise 7.

* * *

[1](#_footnoteref_1). TH: The final key starts with `li`, what is the 3rd letter?

[2](#_footnoteref_2). TH: What is the 4th letter of the key starting with `cl`?