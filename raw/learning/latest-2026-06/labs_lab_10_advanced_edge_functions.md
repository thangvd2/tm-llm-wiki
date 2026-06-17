---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_10_advanced_edge_functions"
title: "Lab 10 - Advanced Edge Functions"
scraped_at: "2026-06-17T05:20:21.374Z"
images: 0
---

# Lab 10 - Advanced Edge Functions

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#knowledge "Copy link to heading")Knowledge

Participants are expected to complete the Vault Core Fundamental Certification and be familiar with Vault Core REST APIs. They are also expected to have followed the Edge Functions architecture session prior to starting this lab.

### [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Shared Sandbox for training purposes. Feel free to reach out to your Partner Manager, Client Success Manager, or Account Director if you’d like access to this resource. You will need to be able to authenticate to this Vault Environment, either by getting a JSON Web Token or a Service Account Token. If you are unfamiliar with how to do so, please refer to Lab 1.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com).

To get a good development experience from your IDE, and to able to write unit tests for the Edge Functions, it is necessary to install the Vault Core API and the Edge Functions API Python wheels. These are provided in the `wheels` folder of the Edge Functions tutorials folder in the Lab Starter Pack, but they can also be [downloaded](/vault-core/latest/EN/reference/edge_functions/sdk_download) from the Vault Core API documentation. Install these into a Python virtual environment using `pip`, and set your IDE to use that virtual environment.

chat\_bubble

Requests in these labs will use a combination of '$' and '<>' notation to represent variables you need to provide for the request to work e.g. '$VAULT-CORE-ENVIRONMENT-URL' or '<UNIQUE-ID>'. The variables using '$' notation represent ones that you can store as environment variables as they will be used repeatedly in other requests. Those using '<>' notation represent variables that are likely unique to that specific request.

Also, ensure the **Lab Starter Pack** has been obtained, available [here](/learning/latest/EN/labs#setup), which contains all required python scripts, Postman collections and Smart Contracts in order to begin the exercises in this document. Do refer to the README for any setup instructions.

## [](#goal "Copy link to heading")Goal

The goal of this lab is to use advanced Edge Function features to enhance the Smart Contracts you build. You will write three Edge Functions and create an Edge Function Trigger to respond to notifications from a Smart Contract. The Edge Functions will:

-   Open two accounts, a savings account and a loan account.
    
-   Perform a direct debit repayment from a savings account into a loan account when triggered by a notification.
    
-   Close two accounts.