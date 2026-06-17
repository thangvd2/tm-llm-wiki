---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-7"
title: "Exercise 7 - Postings API Request and Response Queues"
scraped_at: "2026-06-17T05:18:52.773Z"
images: 0
---

# Exercise 7 - Postings API Request and Response Queues

## [](#setting_up_the_postings_api_client "Copy link to heading")Setting up the Postings API Client

We set up specific response queues for integrations to connect to. This allows the client to filter specific postings for specific integrations, which reduces the amount of work required by clients on the integration side to filter out unnecessary data. We call each of these response queues a “Postings API Client”.

To set up the Postings API client you will need to make an API call to `POST /v1/postings-api-clients` endpoint. Create a response topic starting with `integration` and a custom name which you can make postings to later.

## [](#making_a_posting_to_the_asynchronous_postings_api "Copy link to heading")Making a Posting to the asynchronous Postings API

Using Kcat is advised for this section, unless another tool is preferred. A script creating a valid posting body has been created (`createPosting.py`) in the Lab Start Pack. You would need to run the script with the following argument:

`python3 createPosting.py [account id] [internal account id] [client id] [currency]`

This will create a valid posting body and dump it to a json file (`postingBody.json`) in your current folder, with the following provided parameters:

Example Arguments:

-   Account ID `f5f26a66-af49-dae848cc-1cd7a4d99d70`
    
-   Internal Account ID `1`
    
-   Client ID `PostingsApiTestQueue3`
    
-   Currency: `EUR`
    

If you are using kcat, the following command format can then be used to send this body to the postings API:

`kcat -b [kafka broker] -t vault.core.postings.requests.v1 -P postingBody.json -X security.protocol=ssl`

## [](#sub_exercise_1_making_a_valid_posting "Copy link to heading")Sub-exercise 1 - Making a Valid Posting

1.  Following the steps above, generate and send a posting to the Postings API using kcat or your own preferred tooling.
    
2.  Listen to the following Kafka topics to validate that your posting has been successfully generated and accepted into the Vault Ledger.
    
    1.  The response topic that you created in “Setting up the Postings API Client” \[[1](#_footnotedef_1 "View footnote.")\]
        
    2.  The Core Streaming API Topic: `vault.api.v1.postings.posting_instruction_batch.created` to show the PIB has been created, which will also include live balance info.
        
    3.  The Core Streaming API Topic: `vault.core_api.v1.balances.account_balance.events` to separately show the updated balances in your account.
        
    

## [](#sub_exercise_2_making_an_invalid_posting_and_consuming_the_dlq "Copy link to heading")Sub-exercise 2 - Making an Invalid Posting and Consuming the DLQ

1.  Now make a change to your valid posting body to make it outright invalid.
    
    1.  Specifically, we recommend changing the 'Client\_ID' field to something invalid e.g. `VeryBadClientID123`
        
    2.  Produce the new invalid posting to the request topic.
        
    
2.  Use the following Kcat command which consumes the Posting DLQ topic: `kcat -b <kafka_broker> -X security.protocol=ssl -t vault.core.postings.requests.dlq.v1 -C -f 'Headers: %h\n'`
    
3.  Alternatively the Kafka Consumer python script has the ability to consume headers.
    
4.  Pay attention to the error message provided, if you have provided an invalid Client\_ID then you can expect to see an error message similar to `"stack_trace":"validation error: PostingInstructionBatch specifies a non-registered ClientID=` \[[2](#_footnotedef_2 "View footnote.")\]
    
5.  Bear in mind that in production you will be able to identify errors in postings and other resources using the DLQs, and the DLQ Inspector app.
    

## [](#lab_clean_up "Copy link to heading")Lab Clean Up

At the end of each lab, it is advisable to perform resource clean up to keep the environment tidy. Do refer to Lab 1 for detailed steps on closing the account you have created in this lab.

## [](#solutions "Copy link to heading")Solutions

You can find the solutions within the Lab Starter Pack under `apis_tutorials/postman` folder.

## [](#core_streaming_api_final_comments "Copy link to heading")Core Streaming API - Final Comments

We have covered a range of kafka topics in the Core Streaming API. This lab is not intended to be exhaustive but rather to highlight a range of different types of the events available. If you have any questions about further topics please feel free to ask Thought Machine.

* * *

[1](#_footnoteref_1). TH: Take the value of the status, what is the first letter of the 3rd word in this value?

[2](#_footnoteref_2). TH: Take the entire stack\_trace error starting in `PostingInstructionBatch specifies …​`. Take these chars to complete the word: 20, 6, ?, 29, 39, 130