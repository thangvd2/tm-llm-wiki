---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-1"
title: "Exercise 1 - Connecting to the Streaming API"
scraped_at: "2026-06-17T05:18:41.893Z"
images: 0
---

# Exercise 1 - Connecting to the Streaming API

## [](#connecting_to_restful_apis "Copy link to heading")Connecting to RESTful APIs

Please refer to Lab 0 and Lab 1 for guidance on making RESTful API calls into Vault Core.

## [](#streaming_api_exercises "Copy link to heading")Streaming API Exercises

### [](#sub_exercise_1_consuming_events "Copy link to heading")Sub-exercise 1 - Consuming Events

For this exercise we will be supplying two different methods you can consume events from Kafka:

1.  kcat
    
    Use Kcat to connect to our Streaming APIs, for the purpose of these exercises. Kcat (formerly kafkacat) is a command-line utility that you can use to test and debug Apache Kafka deployments. You can use kcat to produce, consume, and list topic and partition information for Kafka.
    
    Follow the [kcat](https://github.com/edenhill/kcat) installation here. To start consuming events, you would run kcat commands in the following format:
    
    `kcat -b <kafka_broker> -X security.protocol=ssl -t <kafka topic> -C -o end`
    
    Which would look similar to this:
    
    `kcat -b <kafka_broker> -X security.protocol=ssl -t vault.api.v1.customers.customer.created -C -o end`
    
    The `kafka_broker` can be found in the Developer Starter Guide. You can refer to the official kcat documentation for more information.
    

chat\_bubble

Another option with kcat is to consume all events on the topic and then filter with grep. Here is an example that also formats the output to make it more readable:

`kafkacat -b <kafka_broker> -X security.protocol=ssl -t vault.api.v1.customers.customer.created -e | grep 'your_customer_id' | jq`

1.  KafkaConsumer in Python (Filtering allowed)
    
    A Python file (`lab-starter-pack/src/api_tutorials/kafka-consume-filter.py`) is provided that allows you to consume from a specified kafka topic and server. Enter the Kafka topic in the KafkaTopic variable and the Kafka Server in the KafkaServer Variable.
    
    The following prerequisite installations are required:
    
    -   Python 3.10 or later
        
    -   Python-snappy module (pip3 install python-snappy)
        
    -   Kafka-Python (pip3 install kafka-python)
        
        To set up, navigate to lab-starter-pack/src/api\_tutorials directory and run the following command:
        
        `pip3 install -r requirements.txt`
        
        This simple Python script accepts five arguments:
        
    -   \[topic\] e.g. vault.core\_api.v1.accounts.account.events
        
    -   \[server\] e.g. bootstrap.kafka.partner-shared-sandbox.tmachine.io:443\*
        
    -   \[security\_protocol\] SSL or Plaintext
        
    -   \[headers\] True or leave empty/false
        
    -   \[filter\] An optional flag e.g. 123
        
        Example: `python kafka-consume-filter.py vault.core_api.v1.accounts.account.events bootstrap.kafka.partner-shared-sandbox.tmachine.io:443 SSL`
        
    

chat\_bubble

If you are running this exercise as a group, you may want to adjust the group\_id variable on line 69 so as to run the exercise seamlessly. You can add in keywords to the filter flag to view the relevant events

### [](#format_of_exercise "Copy link to heading")Format of Exercise

In these exercises we will use the RESTful APIs in order to create and update a resource and consume the resulting event from the relevant Kafka topic.

[Core Streaming API Customers](/vault-core/latest/EN/api/core_api#customer_events)

There are three different events that are generated when a customer entity is created or updated in the Vault Core system. These are:

-   `CustomerCreatedEvent`
    
    -   `vault.api.v1.customers.customer.created`
        
    -   Generated when a customer is created
        
    
-   `CustomerDetailsUpdated`
    
    -   `vault.api.v1.customers.customer.customer_details.updated`
        
    -   Generated when a customer’s details are updated
        
    
-   CustomerAddressEvent
    
    -   `vault.core_api.v1.customers.customer_address.events`
        
    -   Generated when a customer address event is published
        
    

### [](#sub_exercise_2_create_a_customer_and_view_the_result "Copy link to heading")Sub-exercise 2 - Create a Customer and view the result

1.  Start listening to the `vault.api.v1.customers.customer.created` streaming topic
    
2.  Create a Customer using a POST request to the Customers `/v1/customers` endpoint.
    
3.  Observe the event emitted on the topic. \[[1](#_footnotedef_1 "View footnote.")\]
    

### [](#sub_exercise_3_update_a_customers_details_and_view_the_result "Copy link to heading")Sub-exercise 3 - Update a Customer’s details and view the result

1.  Start listening to the `vault.api.v1.customers.customer.customer_details.updated` streaming topic
    
2.  Make an update to the Customer Details, for example to change the last name, using a `PUT` to the `/v1/customers/{customer_id}` endpoint
    
3.  Observe the event emitted on the topic, checking the detail is updated correctly. \[[2](#_footnotedef_2 "View footnote.")\]
    

error

Thought Machine advises **against** storing any Personally Identifiable Information (PII) data in Vault

* * *

[1](#_footnoteref_1). TH: Take the 3rd character from the message on the topic.

[2](#_footnoteref_2). TH: Take the 2nd to last letter of the 2nd key of the json.