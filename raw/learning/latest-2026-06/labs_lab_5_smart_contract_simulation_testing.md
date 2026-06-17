---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_5_smart_contract_simulation_testing"
title: "Lab 5 - Smart Contract Simulation Testing"
scraped_at: "2026-06-17T05:19:26.923Z"
images: 0
---

# Lab 5 - Smart Contract Simulation Testing

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#knowledge "Copy link to heading")Knowledge

Participants are expected to complete the Vault Core Fundamental Certification and previous labs, to gain a good grounding on Smart Contracts.

The Product Library can also be referred to for more examples of working Smart Contracts used in different business use cases.

You can refer to the [Smart Contracts API reference](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/) for Contracts Language version 4.

### [](#setup "Copy link to heading")Setup

Please refer to the **Developer Starter Guide** page, as this will contain everything needed in order to get started developing Smart Contracts. Ensure everything is set up correctly and working as expected.

Also, ensure the **Lab Starter Pack** has been obtained, available [here](/learning/latest/EN/labs#setup), which contains all required python scripts, Postman collections and Smart Contracts in order to begin the exercises in this document. Do refer to the README for any setup instructions.

### [](#compatibility "Copy link to heading")Compatibility

This lab worksheet has undergone testing and is compatible with the following libraries and environment. However, users should anticipate variations, especially in different environments or with future library updates. It is recommended to reach out to your Thought Machine technical representative for any clarifications.

-   Vault environment: 5.7 \* Smart Contract Language: 4.0 \* Python: 3.10 \* Product Library: 2025\_24
    

### [](#goal "Copy link to heading")Goal

Given the `basic_deposit.py` Smart Contract provided in the Lab Starter Pack, the aim of this lab is to write several simulation tests and become familiar with simulation testing best practices.

Simulation tests are used to test contracts in their entirety in response to realistic inputs, such as receiving postings or the execution of schedules. You can read more on the different types of tests you can perform on Vault in [Testing](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/development_and_testing#testing).

An account simulation is essentially a call to Vault’s Core API’s Simulation endpoint. Vault provides this API to allow for testing of accounts on longer timescales than can be reasonably tested manually (e.g. a 60-year-long mortgage). The API call to this endpoint contains every event that should occur during the simulation, such as parameter updates, postings, etc. Because these calls can get quite lengthy, it is useful to make them using a framework rather than directly.

For this exercise, we will be writing simulation tests to test the contract, using the **Inception SDK** as the base framework for our automated testing code. If your environment has no `inception_sdk` in the root folder, follow the instructions in the `README.md` document of the Lab Starter Pack. This framework will make it easier to construct the API calls for the simulation tests we will perform.

### [](#enquiries "Copy link to heading")Enquiries

For any other questions or feedback related to this lab, reach out to the Enablement Community as they will be able to help. Also, do start the thread with the title Smart Contract Simulation Testing - <Your Question> as it will help the community identify the type of query.

## [](#exercises "Copy link to heading")Exercises

If not already done, follow the README.md in the Lab Starter Pack, found here: `src/smart_contract_tutorials/README.md`.

Ensure you are able to run a simulation test with success, per the final step of the README.