---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_11_account_conversions"
title: "Lab 11 - Smart Contract Account Conversions"
scraped_at: "2026-06-17T15:59:18.136Z"
images: 0
---

# Lab 11 - Smart Contract Account Conversions

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#knowledge "Copy link to heading")Knowledge

Participants are expected to have completed the Vault Core Fundamental Certification, the previous labs and be familiar with Vault Core REST APIs.

### [](#setup "Copy link to heading")Setup

Before starting this lab you will need a practice Vault environment set up. The Enablement team provide access to the Public Shared Sandbox for training purposes. Feel free to reach out to your Partner Manager, Client Success Manager, or Account Director if you’d like access to this resource. You will need to be able to authenticate to this Vault Environment, either by getting a JSON Web Token or a Service Account Token. If you are unfamiliar with how to do so, please refer to Lab 1.

You will also need to have access to either a terminal (to run cURL requests), or an API platform like [Postman](https://www.postman.com).

chat\_bubble

Requests in these labs will use a combination of '$' and '<>' notation to represent variables you need to provide for the request to work e.g. '$VAULT-CORE-ENVIRONMENT-URL' or '<UNIQUE-ID>'. The variables using '$' notation represent ones that you can store as environment variables as they will be used repeatedly in other requests. Those using '<>' notation represent variables that are likely unique to that specific request.

Also, ensure the **Lab Starter Pack** has been obtained, available [here](/learning/latest/EN/labs#setup), which contains all required python scripts, Postman collections and Smart Contracts in order to begin the exercises in this document. Do refer to the README for any setup instructions.

## [](#goal "Copy link to heading")Goal

The goal of this lab is to become competent with making smart contract changes to already deployed product versions, handling different kinds of changes via the `conversion_hook`, and being able to debug when something goes wrong along this journey.