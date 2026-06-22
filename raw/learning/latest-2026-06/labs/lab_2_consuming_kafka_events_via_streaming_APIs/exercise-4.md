---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-4"
title: "Exercise 4 - Streaming API for Restriction Events"
scraped_at: "2026-06-17T15:57:37.932Z"
images: 0
---

# Exercise 4 - Streaming API for Restriction Events

Restrictions are used in order to control what can and cannot be done on an account in Vault, for example limiting postings in and out of the account, or blocking status changes to the account. Restrictions can also be applied to the Customer level or the Payment Device level. In this exercise you will create a restriction, and then apply this restriction to an account and observe the event emitted. The event we are observing is:

-   RestrictionSetEvent
    
    -   `vault.core_api.v1.restrictions.restriction_set.events`
        
    -   Generated whenever a Restriction Set Definition is successfully applied to an entity in Vault.
        
    

## [](#create_a_restriction_set_definition_and_then_apply_a_restriction_set_to_an_account "Copy link to heading")Create a Restriction Set Definition, and then apply a Restriction Set to an account

1.  Using our supplied template postman collection, use the `/v1/restriction-set-definition-versions` POST endpoint to create a restriction definition with the following properties:
    
2.  Once you have created the Restriction Set Definition. Note down the returned `restriction_set_definition_id`.
    
3.  Now use the `/v1/restriction-sets` endpoint to apply the
    

`restriction_set_definition_id` that you obtained earlier to an account that has been created. This will stop the account from being able to be closed.

1.  You will be able to observe the creation of the restriction set being streamed out as a RestrictionSetEvent.