---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/api"
title: "Vault API Monitoring Guide"
scraped_at: "2026-06-17T05:00:12.484Z"
images: 0
---

# Vault API Monitoring Guide

SaaS

Learn how to monitor Vault Core API endpoints for health and availability using your tooling of choice.

## [](#about_this_guide "Copy link to heading")About this guide

This guide provides information about monitoring Vault Core APIs and is intended for engineers that deploy Vault Core. It is a starting point for clients to configure basic monitoring on the Vault Core APIs that are exposed as part of Vault Core SaaS. Basic monitoring includes API service availability and request latency.

### [](#scope "Copy link to heading")Scope

It covers the following:

-   Recommendations for monitoring service availability and remediation actions if a service is unavailable
    
-   Information about service latency, default tolerance levels, and configuring notifications based on latency times and tolerance levels
    
-   Example API requests, responses and descriptions of the information in a typical response
    

## [](#overview "Copy link to heading")Overview

Thought Machine proactively monitors and alerts on client SaaS environments to identify issues and resolve them transparently to the client whenever possible.

The Vault Core SaaS Site Reliability Engineering (SRE) team uses holistic, metrics-based monitoring across the infrastructure to observe service health and performance, with a comprehensive set of internal alerts to raise potential issues preemptively. These metrics also provide a way for Thought Machine to identify potential opportunities to improve service quality.

Optionally, clients can perform their own monitoring of Vault Core APIs by following this guide.

### [](#prerequisites "Copy link to heading")Prerequisites

Clients need to have a monitoring and alerting system implemented as part of their own technology stack in order to monitor Vault Core APIs.

## [](#monitoring_service_availability_and_latency "Copy link to heading")Monitoring service availability and latency

### [](#monitoring_frequency "Copy link to heading")Monitoring frequency

To monitor service availability and latency, Thought Machine recommends calling the Vault Core APIs every five seconds.

### [](#service_unavailability "Copy link to heading")Service unavailability

Clients are able to identify service unavailability in two ways:

-   No response (timeout)
    
-   A HTTP code that is in the `5XX` range
    

In the event of timeout, Thought Machine recommends five retries before clients trigger a notification through their chosen monitoring and alerting system.

### [](#recommended_actions "Copy link to heading")Recommended actions

Thought Machine recommends the following actions, depending on the HTTP code that a client receives:

  
| HTTP code | Type | Action |
| --- | --- | --- |
| 
`1XX`

 | 

Informational

 | 

No action is required.

 |
| 

`3XX`

 | 

Redirection

 | 

No action is required.

 |
| 

`4XX`

 | 

Client error

 | 

Client investigates the issue in the first instance and raises an issue with Thought Machine by exception.

 |
| 

`5XX`

 | 

Server error

 | 

Client raises an issue with Thought Machine in the first instance.

 |

To raise an issue with Thought Machine in the Production environment, clients need to run through the following steps:

1.  Validate that there are no ongoing changes or test activities impacting this environment by reviewing their change calendar. Contact Service Management for more information.
    
2.  Raise a support ticket as detailed in the *Service Procedure Manual*. The support ticket should include:
    
    -   The whole API request
        
    -   The received error response
        
    -   The date/time of the request that failed
        
    

chat\_bubble

The support ticket must not include any personally identifiable information (PII).

## [](#monitoring_service_latency "Copy link to heading")Monitoring service latency

### [](#factors_that_influence_latency "Copy link to heading")Factors that influence latency

Clients can check latency by monitoring the milliseconds between sending a request and receiving a response to a valid call. There are two factors that influence latency:

-   Client load (latency spikes, or latency over time during a busy customer period)
    
-   Degraded performance of the infrastructure (latency over time)
    

To capture latency spikes, Thought Machine recommends that clients configure notifications when latency times exceed tolerance levels, which are based on latency measures that clients have captured while using Vault Core SaaS under normal operating conditions. These latency measures should act as a baseline from which to define tolerance levels based on the client’s load.

chat\_bubble

Thought Machine already monitors and optimises infrastructure performance across the environments, so clients do not need to proactively monitor this.

## [](#example_requests "Copy link to heading")Example requests

Here are some example requests to demonstrate a typical request that you might make and the data that you could expect to receive in the response.

For more information about using Vault Core APIs, refer to the [Core API](/vault-core/5-9/EN/api/core_api) section.

### [](#example_internal_accounts "Copy link to heading")Example: Internal Accounts

This query checks the status of the Internal Accounts API and whether it is available and responding to requests.

#### [](#request_url "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response "Copy link to heading")What information is in the response?

A single internal account. These are often used for the bank’s internal money movements; for example, a profit and loss account. Store the account ID for subsequent queries.

### [](#example_customers "Copy link to heading")Example: Customers

This query checks the status of the Customers API and whether it is available and responding to requests.

#### [](#request_url_2 "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200_2 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response_2 "Copy link to heading")What information is in the response?

A single customer record - we recommend that this is synthetic.

### [](#example_products "Copy link to heading")Example: Products

This query checks the status of the Products API and whether it is available and responding to requests.

#### [](#request_url_3 "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200_3 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response_3 "Copy link to heading")What information is in the response?

A single product.

### [](#example_schedules "Copy link to heading")Example: Schedules

This query checks the status of the Scheduler API and whether it is available and responding to requests.

#### [](#request_url_4 "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200_4 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response_4 "Copy link to heading")What information is in the response?

A single schedule regardless of state (e.g. already executed, queued).

### [](#example_accounts "Copy link to heading")Example: Accounts

This query checks the status of the Accounts API and whether it is available and responding to requests. In this example, a successful request returns a single account. Store the resultant “id” value for subsequent queries.

#### [](#request_url_5 "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200_5 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response_5 "Copy link to heading")What information is in the response?

A single account.

### [](#example_balances "Copy link to heading")Example: Balances

This query returns a balance dimension from the account ID specified in the request URL.

As an example exercise, insert the “id” from the previous `/accounts` query into the request URL where highlighted. This account must not be an internal account.

#### [](#request_url_6 "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200_6 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response_6 "Copy link to heading")What information is in the response?

The balances for a specific account (from the `/accounts` query).

### [](#example_posting_instruction_batches "Copy link to heading")Example: Posting Instruction Batches

This query returns a single posting instruction batch from the account ID specified in the request URL.

As an example exercise, insert the “id” from the previous /accounts query into the request URL where highlighted. This account must not be an internal account.

The response for this example is truncated in order to save space and is an example only.

#### [](#request_url_7 "Copy link to heading")Request URL

#### [](#example_response_expected_response_code_200_7 "Copy link to heading")Example response (expected response code: 200)

#### [](#what_information_is_in_the_response_7 "Copy link to heading")What information is in the response?

A single posting instruction batch record.