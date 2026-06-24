---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_4_smart_contract_unit_testing"
title: "Lab 4 - Smart Contract Unit Testing"
scraped_at: "2026-06-17T15:58:06.431Z"
images: 0
---

# Lab 4 - Smart Contract Unit Testing

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#knowledge "Copy link to heading")Knowledge

Participants are expected to complete the Vault Core Fundamental Certification and previous labs, to gain a good grounding on Smart Contracts.

The Product Library can also be referred to for more examples of working Smart Contracts used in different business use cases.

You can refer to the [Smart Contracts API reference](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/) for Contracts Language version 4.

You should also have completed the Smart Contract College, and feel comfortable with postings, balances, and the various components of Smart Contracts such as hooks, balance fetchers, the `vault` object.

## [](#setup "Copy link to heading")Setup

Please refer to the **Developer Starter Guide** page, as this will contain everything needed in order to get started developing Smart Contracts. Ensure everything is set up correctly and working as expected.

Also, ensure the **Lab Starter Pack** has been obtained, available [here](/learning/latest/EN/labs#setup), which contains all required python scripts, Postman collections and Smart Contracts in order to begin the exercises in this document. Do refer to the README for any setup instructions.

## [](#compatibility "Copy link to heading")Compatibility

This lab worksheet has undergone testing and is compatible with the following libraries and environment. However, users should anticipate variations, especially in different environments or with future library updates. It is recommended to reach out to your Thought Machine technical representative for any clarifications.

-   Vault environment: 5.7 \* Smart Contract Language: 4.0 \* Python: 3.10 \* Product Library: 2025\_24
    

## [](#goal "Copy link to heading")Goal

Given the `basic_deposit.py` Smart Contract provided in the Lab Starter Pack, the aim of this lab is to write several unit tests and become familiar with unit testing best practices.

This exercise builds on top of the **Basic Smart Contract Tutorial**. Now we have built a Smart Contract for a deposit account, we can look at how we can test the Smart Contract at unit test level.

For this exercise, instead of using Postman to test our contract, we will be writing a few unit tests in Python, using the **Inception SDK** as the base framework for our automated testing code.

Since all 3 tests are constructed in a different way and there is a lot to learn, it is recommended to focus on understanding the unit and simulation test code well first, and moving onto e2e tests if there is adequate time.

## [](#enquiries "Copy link to heading")Enquiries

For any other questions or feedback related to this lab, reach out to the Enablement Team as they will be able to help. Start the query with the title **Smart Contract Unit Test - <Your Question>** as it will help the team identify the type of query.

## [](#exercises "Copy link to heading")Exercises

Before starting this lab, you would need to install python libraries. To do that you can run `pip install -r requirements.txt` under the Lab Starter Pack root directory.

Contract Language v4 contracts are valid Python, and can be treated as such when performing unit testing. The Inception SDK provides some extensions and mock objects to make unit testing easier by replicating logic on the Vault object.

In this lab we will run tests by importing the contract into our test, creating objects for the test (including a mock vault object), replicating an actual hook being called in Vault, and asserting that it behaves as we expect it to.