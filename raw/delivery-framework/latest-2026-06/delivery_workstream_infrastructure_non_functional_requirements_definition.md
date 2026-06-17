---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/infrastructure/non_functional_requirements_definition"
title: "Non Functional Requirements Definition"
scraped_at: "2026-06-17T05:24:03.368Z"
images: 0
---

# Non Functional Requirements Definition

## [](#purpose "Copy link to heading")Purpose

Defining non-functional requirements (NFRs) helps to align the proposed core banking solution with organisational policies and business objectives. Unlike functional requirements which are concerned with what the solution does, NFR’s describe how (and how well) the solution works. In other words, they define \`quality attributes'.

The policies identified during policy discovery will inform subsequent regulatory compliance, data protection, and risk mitigation strategies. NFRs ensure that the infrastructure design follows these policies, safeguarding the business against potential breaches and legal implications.

NFRs play a crucial role in ensuring a seamless transition between the existing and target core banking platforms. They provide benchmarks for evaluating the performance and functionality of the new platform, they also help mitigate risks associated with downtime, data loss, or compatibility issues.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Volumetric Analysis](/delivery-framework/latest/EN/delivery_workstream/infrastructure/volumetric_analysis)
    
2.  [Policy Discovery](/delivery-framework/latest/EN/delivery_workstream/infrastructure/policy_discovery)
    

## [](#guidance "Copy link to heading")Guidance

In general NFRs should be measurable and testable so it is possible to demonstrate that the proposed solution can meet them. An organisation will probably have existing NFRs that the team can work towards, especially if the scope of the project is to replace an existing core banking system.Some NFRs will be influenced by business objectives and others by regulation, or payment scheme related rules.

It is important to identify the key stakeholders for each category of requirement.

Here are some of the most common type of NFR that Thought Machine has seen applied to core banking solutions:

-   *Availability -* These NFRs set expectations about system uptime, Recovery Point Objectives (RPO), and Recovery Time Objectives (RTO). Uptime may be expressed as a percentage of requests that are responded to successfully, or the percentage of time that a system is available for over a given period. RTO and RPO are measured in seconds, minutes, hours, or even days depending upon the criticality of the workload.
    
-   *Performance -* Performance measures are concerned not only with the time it takes a system to respond to external actions (for example, an API call or user interaction), but also how long processes take to run. It is important to be clear about what journey is under consideration, and what volume of requests or system workload are being assessed. Performance NFRs should only be concerned with measuring the system at hand. Timings that rely on calls to third parties should be excluded because they are outside the scope of the delivery. Take into account prevailing industry standards and rules, for example instant payment scheme timings. Remember that there is a relationship between performance and availability, for example: A system may still be responding to requests, but if the responses are not being made within a predetermined time then the system is deemed to be unavailable.
    
-   *Security -* Consider areas like authentication, authorisation, and encryption.Ensure an understanding of the relevant legal and scheme obligations, for example compliance with PCI DSS if you are processing credit card transactions, or that the chosen cloud provider is ISO 27001 certified.
    
-   *Scalability -* Ensure performance and availability targets can continue to be met under variable workloads and increasing volumes of data. Address business objectives by looking at things like current and projected workloads, account growth plans, customer expectations, etc in order to ensure they are both realistic and future proof.
    
-   *Interoperability -* Try to avoid placing restrictions that could limit future options when migrating between technologies or even platforms.For instance, a useful requirement may be to only consider using services that are well supported across all three major cloud providers.This will minimise friction if it became necessary to leave one cloud service provider for another.
    

Here at Thought Machine, the components that make up our platform are selected on the basis that they are well supported on AWS, GCP, Azure, and OpenShift platforms.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.