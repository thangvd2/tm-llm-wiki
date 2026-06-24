---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_0_pre-requisites"
title: "Lab 0 - Pre-requisites"
scraped_at: "2026-06-17T15:57:21.910Z"
images: 0
---

# Lab 0 - Pre-requisites

## [](#exercise_1_connecting_to_a_vault_instance "Copy link to heading")Exercise 1 - Connecting to a Vault Instance

Welcome to this Lab session covering connecting to a Vault instance. There are three main ways to interact with Vault.

1.  Using RESTful APIs
    
2.  Using Kafka
    
3.  Using the Core Apps (e.g. the Accounts App)
    

This Lab session will introduce use of the RESTful APIs.

## [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Sandbox for training purposes. Feel free to reach out to your Partner Manager, Client Success Manager, or Account Director if you’d like access to this resource.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com).

chat\_bubble

Requests in these labs will use a combination of '$' and '<>' notation to represent variables you need to provide for the request to work e.g. '$VAULT\_CORE\_ENVIRONMENT\_URL' or '<UNIQUE-ID>'. The variables using '$' notation represent ones that you can store as environment variables as they will be used repeatedly in other requests. Those using '<>' notation represent variables that are likely unique to that specific request.

### [](#generating_an_access_token "Copy link to heading")Generating an access token

Interacting with Vault through APIs requires you to generate either a JSON Web Token (JWT) or a Service Account (SA) to authenticate yourself.

We recommend you use JWTs as SA’s are deprecated as of Vault 4.3.0.

Create a JWT token. If using the public sandbox you can generate a JWT using the following request:

Save this token as you will use it for all Core API requests. Keep in mind that the JWT tokens can expire after some time so you may need to generate a new one if this happens.

chat\_bubble

If using the Postman collection available within the [Lab Starter Pack](/learning/latest/EN/labs#setup), you can also make use of the request named "Get a JWT", within the folder "Developer Starter Pack".

chat\_bubble

If using a different environment, follow your instance’s configured steps to generate a JWT or create a [service account](/learning/latest/EN/how_to_guides/how_to_generate_a_service_token) on your instance’s Operations Dashboard (commonly referred to as "Ops Dash")

### [](#using_the_core_api "Copy link to heading")Using the Core API

To test our connection to the instance, let’s try creating a Customer using the Core API. Try running the below cURL request in your terminal after updating the noted values.

chat\_bubble

Feel free to use tools other than the console for this - for example, Postman is a useful tool made to test RESTful API calls.

-   `$VAULT_CORE_ENVIRONMENT_URL`: the URL of your Vault instance
    
-   `$JSON_WEB_TOKEN`: should be updated to the token generated in the previous step.
    
-   `request_id`: A unique string ID used to ensure the request is idempotent.
    
-   `first_name`: The first name of your Customer (optional)
    
-   `last_name`: The last name of your Customer (optional)
    

In the response you will receive an **ID**, this can be used to search for your Customer using the Ops Dash. Save this ID to use later.

Congratulations, you’ve successfully made an API call to Vault! If you’d like to learn more about the different APIs that you can use to interact with Vault, take a look at the [Core API](/vault-core/latest/EN/api/core_api/) page in the Vault Portal.

## [](#sub_exercise_2 "Copy link to heading")Sub-exercise 2

Use the information on the [Core API](/vault-core/latest/EN/api/core_api/) page on the Vault Portal to:

-   Find the Endpoint needed to update the Customers status.
    
-   Construct an update request that sets the Customer previously created to `"status": "CUSTOMER_STATUS_FROZEN"`.
    
-   Navigate to your Customer’s page in the Ops Dash by going to the Customers tab and inserting the Customer ID into the relevant search box.
    
-   Check that the Customer has a status of `Frozen`.