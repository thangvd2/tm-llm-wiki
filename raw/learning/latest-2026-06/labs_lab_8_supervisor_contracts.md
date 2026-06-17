---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_8_supervisor_contracts"
title: "Lab 8 - Supervisor Contracts"
scraped_at: "2026-06-17T05:19:57.527Z"
images: 0
---

# Lab 8 - Supervisor Contracts

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#knowledge "Copy link to heading")Knowledge

Participants are expected to complete the Vault Core Fundamental Certification and previous labs, to gain a good grounding on Smart Contracts.

The Product Library can also be referred to for more examples of working Smart Contracts used in different business use cases.

You can refer to the [Smart Contracts API reference](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/) for Contracts Language version 4.

### [](#setup "Copy link to heading")Setup

Please refer to the **Developer Starter Guide** page, as this will contain everything needed in order to get started developing Smart Contracts. Ensure everything is set up correctly and working as expected.

Also, ensure the **Lab Starter Pack** has been obtained, available [here](/learning/latest/EN/labs#setup), which contains all required python scripts, Postman collections and Smart Contracts in order to begin the exercises in this document. Do refer to the README for any setup instructions.

## [](#goal "Copy link to heading")Goal

To build a deposit product that allows customers to open a main account which monitors the total balance across linked sub-accounts, and automatically applies a higher interest rate when the combined balance exceeds a specified threshold.

Here are the Smart Contracts that will be developed.

### [](#main_deposit "Copy link to heading")Main Deposit

This deposit type has a predefined minimum balance. Once this balance is reached, a premium interest will be added to the basic interest defined in the basic deposit, through the supervisor. All postings to the Main Deposit will be rejected unless they are linked to a supervisor.

### [](#basic_deposit "Copy link to heading")Basic Deposit

The features included in the Basic Deposit product are:

-   Accrues interest at the standard (base) rate.
    
-   Bonus amount will also be paid on activation.
    
-   A maximum balance limit is enforced.
    

### [](#supervisor_contract "Copy link to heading")Supervisor Contract

The supervisor has the ability to override the default posting behavior for both the Basic Deposit schedule and pre-posting validations. This includes:

-   Adding on top of the original basic deposit daily interest accrual to add the premium interest if the minimum balance is reached.
    
-   Overriding pre-posting checks for Main Deposit, indicating that supervisor intervention can bypass standard pre-posting restrictions.
    
-   Overriding post-posting adjustments that reduce the Main Deposit limit with each new deposit.
    

## [](#enquiries "Copy link to heading")Enquiries

For any other questions or feedback related to this lab, reach out to the Enablement Team as they will be able to help. Start the query with the title **Supervisors Contracts - <Your Question>** as it will help the community identify the type of query.