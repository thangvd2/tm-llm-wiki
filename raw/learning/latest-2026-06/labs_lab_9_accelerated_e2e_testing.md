---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_9_accelerated_e2e_testing"
title: "Lab 9 - End to End Testing"
scraped_at: "2026-06-17T05:20:09.106Z"
images: 0
---

# Lab 9 - End to End Testing

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#knowledge "Copy link to heading")Knowledge

Participants are expected to complete the Vault Core Fundamental Certification and be familiar with Vault Core REST APIs. They are also expected to have followed the Accelerated End to End instructor session prior to starting this lab.

### [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Shared Sandbox for training purposes. Feel free to reach out to your Partner Manager, Client Success Manager, or Account Director if you’d like access to this resource. You will need to be able to authenticate to this Vault Environment, either by getting a JSON Web Token or a Service Account Token. If you are unfamiliar with how to do so, please refer to Lab 1.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com).

chat\_bubble

Requests in these labs will use a combination of '$' and '<>' notation to represent variables you need to provide for the request to work e.g. '$VAULT-CORE-ENVIRONMENT-URL' or '<UNIQUE-ID>'. The variables using '$' notation represent ones that you can store as environment variables as they will be used repeatedly in other requests. Those using '<>' notation represent variables that are likely unique to that specific request.

Also, ensure the **Lab Starter Pack** has been obtained, available [here](/learning/latest/EN/labs#setup), which contains all required python scripts, Postman collections and Smart Contracts in order to begin the exercises in this document. Do refer to the README for any setup instructions.

In this Lab there will be reference to $PROCESSING\_GROUP. Check with your instructor which Processing Group should be used for the lab, and store its ID as $PROCESSING\_GROUP.

## [](#goal "Copy link to heading")Goal

The goal of this lab is to introduce the available mechanics you can use to carry out E2E testing of the Smart Contracts you build. We will introduce how you can:

-   Perform manual e2e tests using the Core API and streaming topics
    
-   Perform accelerated e2e tests using time cursors
    
-   Utilise the inception SDK for both standard and accelerated e2e tests