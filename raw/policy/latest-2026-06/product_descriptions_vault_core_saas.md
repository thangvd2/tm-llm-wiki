---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/product_descriptions/vault_core_saas"
title: "Vault SaaS Product Specification"
scraped_at: "2026-06-17T05:17:52.298Z"
images: 0
---

# Vault SaaS Product Specification

[Download PDF](/policy/latest/EN/resources/vault_core_saas.pdf)

## [](#about_this_specification "Copy link to heading")1\. About this specification

This specification is intended for clients wishing to understand the features, services and operations in the SaaS hosting model of Vault.

### [](#scope "Copy link to heading")1.1. Scope

This specification is intended for clients wishing to understand the features, services and operations in the SaaS hosting model of Vault.

### [](#definition_of_terms "Copy link to heading")1.2. Definition of terms

The following terms are used throughout this document:

-   Infrastructure: cloud infrastructure and cloud-native services deployed onto cloud infrastructure that Vault requires to operate
    
-   Vault APIs: Vault endpoints that Thought Machine exposes to SaaS clients which include the Core APIs, Streaming APIs and Postings API
    
-   Operations Dashboard: a web application that allows staff permission-based access to any banking operations that interact with Vault
    
-   Application: client use and configuration of Vault to build financial products
    
-   Vault Core: single core banking platform, distinct to Vault Payments
    
-   Client-hosted: deployment model for Vault, distinct to Vault SaaS, where clients own the underlying infrastructure and operations for Vault
    
-   Smart Contract: a piece of code that denotes the financial protocol governing a Vault account, defines how the interest is being calculated, and digitally enforces a particular financial agreement or Terms and Conditions between various parties
    
-   Vault instance: a discrete deployment of Vault
    
-   Route-to-live: the promotion path of SaaS environments that enable a client’s development lifecycle with Vault, from development and testing through to Production
    
-   External system: technology that is owned and solely controlled by organisations other than Thought Machine
    
-   Inception Product Library: a set of products to aid and accelerate creation of financial products and processes in Vault, including a set of Smart Contracts to capture the financial logic of a bank product, and Workflows to capture the business processes
    
-   Pre-production environment: A development environment for testing using obfuscated test data; provided at client request, based on client development plan
    
-   Production environment: An environment that is capable of serving live customer traffic following a launch event, using live customer data; provided at client request, based on client development plan
    

## [](#overview "Copy link to heading")2\. Overview

The features and functionality described in these sections are available to Vault Start, Standard and Enterprise clients unless otherwise stated.

### [](#what_is_vault_saas "Copy link to heading")2.1. What is Vault SaaS?

Thought Machine offers clients the option to use Vault in a Software as a Service (SaaS) model, where Vault’s underlying infrastructure is built, operated and secured by Thought Machine on behalf of the client.

Vault SaaS clients are able to make full use of Vault without the overheads of managing cloud infrastructure and key processes in production. Core operations for Vault itself, such as version upgrades and patches, are also managed by Thought Machine. Vault SaaS scales for banks of any size and use case, including migrations and greenfield builds.

Thought Machine offers Vault Core in the SaaS hosting model. SaaS is available for all Vault service levels.

For more information on Vault, refer to *Vault Product Specification*.

### [](#how_do_clients_interact_with_vault "Copy link to heading")2.2. How do clients interact with Vault?

Thought Machine exposes Vault APIs for clients to interact with Vault and provides configurable Smart Contracts to enable creation of custom financial products. Smart Contracts can be configured by Thought Machine, clients or their delivery partners. The Inception Product Library provides a framework of financial products for clients to configure if they choose.

In addition to monitoring SaaS environments and Vault Instances, Thought Machine exposes key metrics relating to Vault through the Observability Metrics Endpoint. This enables clients to gain visibility into the system and integrate Vault SaaS into their observability tooling to perform ad-hoc queries and build dashboards.

For more information, see [Vault SaaS Observability Offering](/policy/latest/EN/product_descriptions/vault_core_saas#observability).

### [](#how_do_clients_connect_to_vault_saas "Copy link to heading")2.3. How do clients connect to Vault SaaS?

Thought Machine provides connectivity to Vault SaaS in line with industry security standards. Clients connect to their SaaS environments through a private endpoint that uses the cloud provider’s backbone network. Thought Machine does not issue connectivity to Vault SaaS over the public internet.

For more information, see [Client prerequisites for Vault SaaS onboarding](/policy/latest/EN/product_descriptions/vault_core_saas#client_prerequisites_for_vault_saas_onboarding).

## [](#vault_saas_offering_summary "Copy link to heading")3\. Vault SaaS offering summary

The features described in these sections are available to Vault Start, Standard and Enterprise clients unless otherwise stated.

### [](#hosting "Copy link to heading")3.1. Hosting

Vault SaaS is hosted on both Amazon Web Services (AWS) and Google Cloud Platform (GCP). Vault Start clients are hosted on GCP, while Vault Standard and Enterprise clients can choose to be hosted on AWS or GCP.

### [](#tenancy "Copy link to heading")3.2. Tenancy

Vault Start clients are provisioned Vault Instances that may reside in a multi-tenanted platform architecture. Thought Machine does not guarantee single tenancy for Vault Start clients.

Vault Standard and Enterprise clients are guaranteed to reside in a single-tenanted model to benefit from data and resource segregation at the cloud provider account level.

### [](#architecture "Copy link to heading")3.3. Architecture

Vault SaaS is architected using cloud-native services and hardened open-source tooling to provide clients with a Highly Available and fault-tolerant service (see [SaaS in depth](/policy/latest/EN/product_descriptions/vault_core_saas#saas_in_depth)). Vault SaaS is deployed across multiple data centres which ensures that it is resilient to failures within a single region. In the event of data centre failure, Vault’s minimum Disaster Recovery offering gives a Recovery Point Objective (RPO) of 0, with the Recovery Time Objective (RTO) of between 60 and 120 seconds.

### [](#saas_environments "Copy link to heading")3.4. SaaS environments

Clients receive Pre-production and Production SaaS environments to enable rapid development of financial products (see [Environments](/policy/latest/EN/product_descriptions/vault_core_saas#environments)). A client’s Production environment is segregated from Pre-production at a cloud vendor account level to maintain the highest standards of data confidentiality, integrity and availability.

SaaS environment provisioning starts with delivery of the Pre-production environment, once a client signs their SaaS agreement. The Production environment will be provisioned as per the needs of the SaaS client’s delivery plan and agreement with Thought Machine.

Clients should allow at least two weeks for delivery of their SaaS Environment from acceptance of their completed *Vault SaaS Client Environment Request Form*. Environments that are not utilised may be scaled down through mutual agreement between the client and Thought Machine, and scaled back up upon request.

### [](#saas_availability_and_support "Copy link to heading")3.5. SaaS availability and support

Thought Machine provides 24/7 global support to clients in Production and operates a Service Uptime SLA of 99.99%. Clients receive a dedicated Service Management point of contact responsible for coordinating key processes and ensuring seamless Vault operations (see [Service Management](/policy/latest/EN/product_descriptions/vault_core_saas#service_management)).

### [](#onboarding "Copy link to heading")3.6. Onboarding

Onboarding starts when clients have signed their SaaS Agreement and concludes when a client is ready to launch in Production (see [Client prerequisites for Production launch readiness](/policy/latest/EN/product_descriptions/vault_core_saas#client_prerequisites_for_production_launch_readiness)). Clients receive dedicated Client Success Managers (CSMs) during all stages of their implementation, from contract signing to first Production launch.

For more information on onboarding, refer to the [Vault SaaS Onboarding Guide](/vault-core/latest/EN/environment_and_installation/saas/introduction_to_vault_saas/vault_saas_onboarding_guide).

### [](#enablement_services "Copy link to heading")3.7. Enablement services

Thought Machine provides clients and/or their delivery partners with training to maximise the value of Vault services. This includes eLearning pathways delivered by the Thought Machine Enablement team, self-service documentation such as the onboarding documentation and access to the Vault Portal.

Vault Start and Standard clients receive fixed Enablement packages whereas Enterprise clients may choose to customise their Vault training and learning engagement.

### [](#observability "Copy link to heading")3.8. Observability

Thought Machine provides clients with visibility into Vault through the Vault SaaS [Vault Metrics endpoint](/vault-core/latest/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide#observability_metrics_endpoint). This enables clients to ingest Vault metrics into a monitoring solution of their choice and build custom dashboards.

### [](#compliance_and_audit "Copy link to heading")3.9. Compliance and Audit

Vault SaaS is globally compliant and adheres to regulations in every hosting region. By using Vault SaaS, clients benefit from a set of industry standards and compliance frameworks by default. This includes SOC 2 compliance, ISO 27001, CIS benchmarks and alignment to the Cloud Security Alliance (CSA) Cloud Controls Matrix. Clients can request Thought Machine’s SOC 2 compliance report.

Vault clients can choose to request audit information, subject to the terms of the commercial agreement.

### [](#exit "Copy link to heading")3.10. Exit

Thought Machine provides exit assistance to clients through an agreed Exit Plan in the event of a termination of the SaaS Services as set out in the SaaS Agreement.

## [](#saas_in_depth "Copy link to heading")4\. SaaS in depth

### [](#environments "Copy link to heading")4.1. Environments

Unless otherwise agreed in a client’s SaaS Agreement, Thought Machine provides two environments to all Vault SaaS clients by default: Pre-production and Production. SaaS environments are intended to support clients through their route-to-live development. This could include both Smart Contract and migration testing, as well as supporting the environment upgrade process.

We can provide additional non-production environments for functional and non-functional testing subject to commercial agreement.

  
| Environment Type | Non-Production environment (Pre-Production Cluster) | Production Environment (Production Cluster) |
| --- | --- | --- |
| 
*Environment*

 | 

Pre-Production

 | 

Production

 |
| 

*Availability*

 | 

Provided during client onboarding via Client Success Manager (CSM)

 | 

Provided at client request via Client Success Manager (CSM), based on client development plan

 |
| 

*Purpose*

 | 

Development and Testing: Testing using obfuscated test dataVault releases: Supports verification of changes and user acceptance testing before deployment to Production

 | 

Production environment that serves live customer traffic following a launch event

 |
| 

*Environment provisioning time*

 | 

Provisioned to client within two weeks once SaaS Agreement is signed and client connectivity details have been received

 | 

Provisioned to client within two weeks upon client request to Client Success Manager (CSM)

 |
| 

*Data types supported by the environment*

 | 

Obfuscated test data

 | 

Live customer data

 |
| 

*Availability*

 | 

Not Highly Available (HA)

 | 

High Availability (HA) architecture and Disaster Recovery enabled

 |

#### [](#releases_and_upgrades "Copy link to heading")4.1.1. Releases and upgrades

 
| Pre-production | Upgrades are managed by Thought Machine automatically |
| --- | --- |
| 
Production

 | 

Upgrades are coordinated between the Client Success Manager and the client where upgrade windows for Vault versions are agreed

 |

### [](#service_management "Copy link to heading")4.2. Service Management

Clients receive a Service Manager who is responsible for a high quality operational experience of SaaS in line with client objectives and internal processes. Thought Machine Service Managers act as the client’s trusted advisor and ensure continuous operational excellence for clients in Production. All aspects of Service Management are aligned to ITIL best practice and Agile methodologies to integrate seamlessly with a client’s internal governance processes.

Service Managers enact the Vault SaaS Service Management Framework, which includes key activities such as coordinating Vault releases, SLA reporting, Problem Management and onboarding clients into their dedicated Service Desk portal.

For more information, refer to the *Service Procedures Manual*.

### [](#support "Copy link to heading")4.3. Support

This section provides a general description of Support for informational purposes only. Support services are set out in the SaaS Agreement, which describes the Services and their Service Levels. The features described in these sections are available to Vault Start, Standard and Enterprise clients unless otherwise stated.

An issue identified in Production is classified as an incident. An issue in Non-production environments is classified as a defect. Both incidents and defects are subject to SLAs depending on their Severity classification.

#### [](#support_teams "Copy link to heading")4.3.1. Support teams

The Thought Machine Cloud Analyst team are technical support engineers responsible for providing support to clients. When an issue is raised internally or by a client, a ticket is automatically created and the Cloud Analysts are notified. Cloud Analysts are the immediate contact point for issue triage, fixing issues and communicating with clients.

The Thought Machine Site Reliability Engineering (SRE) team is a dedicated team of on-call engineers who are notified if an issue is related to a specific aspect of Vault or if deep insight is required to diagnose and resolve the issue. Cloud Analysts coordinate this activity and continue to communicate with the client.

#### [](#production_support "Copy link to heading")4.3.2. Production support

Thought Machine continuously monitors Production SaaS environments. Issues are proactively identified and resolved by Thought Machine’s SRE team transparently to clients. In the event of an incident identified by Thought Machine or a client, an incident ticket is created to manage SLA impact and track the steps to resolution. SLAs are paused when Thought Machine requires information from the client or when incident resolution activity has stopped.

An incident may require Thought Machine to have direct access to the client’s Production environment to investigate and resolve it. Under these circumstances, the Break Glass procedure is triggered. In accordance with Thought Machine’s role-based access control framework (RBAC), an operator within an authorised group can request temporary access to the Production environment with Administrator permissions. This requires approval from senior colleagues. All activity is retained in audit logs for the purpose of review and evidencing if required.

#### [](#incident_response_framework "Copy link to heading")4.3.3. Incident response framework

Below is the incident response framework for Vault SaaS; it is applicable to Vault Start, Standard and Enterprise clients. An issue identified in Production is classified as an incident.

The responsibility for incident response on the application layer lies with clients. If either Thought Machine or a client suspects that an incident has crossed boundaries from the application layer to the underlying infrastructure (or vice versa), then Thought Machine will work in conjunction with the client’s security team to mitigate the incident.

For more information, see [Shared Security Model](/policy/latest/EN/product_descriptions/vault_core_saas#shared_security_model_case_studies).

    
| Severity | Description | Maximum time for support response | Target time to resolve | Hours of coverage at regional hub (London/Singapore/East Coast U.S.) |
| --- | --- | --- | --- | --- |
| 
1 - Critical(S1)

 | 

An error that disables major software functions, causes substantial performance degradation, or results in loss, damage or corruption of data.Difficult workarounds are required to process work and the ability to process work is seriously impaired.

 | 

15 minutes

 | 

4 hours

 | 

24x7

 |
| 

2 - Major(S2)

 | 

An error that results in a measurable loss of functionality and/or performance. The ability to process work is impaired.

 | 

30 minutes

 | 

8 hours

 | 

24x7

 |
| 

3 - Minor(S3)

 | 

An error that has no significant impact and where an acceptable workaround is readily available.

 | 

1 hour

 | 

1 business day

 | 

09.00 - 18.00(Monday - Friday, excluding public holidays)

 |
| 

4 - Low(S4)

 | 

An incident that has no production impact and resolution can be provided within an upcoming release or through updated documentation.

 | 

2 hours

 | 

3 business days/upcoming release

 | 

09.00 - 18.00(Monday - Friday, excluding public holidays)

 |

#### [](#incident_resolution "Copy link to heading")4.3.4. Incident resolution

An incident is resolved when mitigating steps, or a fix that restores services, has been provided to a client. Once an incident has been resolved, the Service Desk ticket is closed and a corresponding Problem ticket is opened to track the permanent fix and associated release timelines.

For Critical and Major incidents, the client’s Service Manager provides a Root Cause Analysis report (RCA) three business days after the Incident is closed. The RCA identifies the root cause, business impact, incident timelines and details on the permanent fix.

#### [](#non_production_support "Copy link to heading")4.3.5. Non-production support

In the event a client identifies an issue in their SaaS environment, they may escalate it as a defect to Thought Machine. The client’s internal support team is responsible for initial triage of the issue to confirm that it does not reside in the application layer or external systems. To escalate an issue, clients create a support ticket through their dedicated Service Desk portal.

Clients include the following information in their support ticket:

-   Description of impact to Thought Machine services and client functions
    
-   Description of expected behaviour compared to issue behaviour
    
-   Technical information including screenshots, timestamps, error messages
    
-   Description of steps for Thought Machine to recreate the issue
    
-   Technical point(s) of contact for Thought Machine to contact the client about the issue
    

Clients also confirm the issue’s Severity based on business impact and urgency as per the *Vault SaaS Support and Maintenance addendum*. For information about issue categorisation, see [Non-production support](/policy/latest/EN/product_descriptions/vault_core_saas#non_production_support) and [Production support](/policy/latest/EN/product_descriptions/vault_core_saas#production_support).

Once a client submits their support ticket, Thought Machine enacts Level 1-2 support and offers response and resolution SLAs based on Severity. The support model covers three global SaaS hosting regions: Asia Pacific, Europe and America, with Thought Machine offices in Singapore, London and New York City, respectively.

  
| Support Level | Role | Description |
| --- | --- | --- |
| 
1

 | 

Thought Machine

 | 

24x7 follow-the-sun Cloud Analyst support provided across the global SaaS hosting regions and all offices

 |
| 

2

 | 

Thought Machine

 | 

On-call SRE team support provided across the global SaaS hosting regions but based in the London office

 |

For non-production issues raised by clients, Thought Machine will accept or reject the issue as a defect. If accepted, Thought Machine will respond to clients with an indication of root cause, a plan to resolve and a timeframe for implementing the proposed fix. Below are the Time to Respond SLAs and the number of tickets clients are able to raise per month as part of their SaaS agreement. The business day is defined as 0900 to 1800 Monday to Friday, excluding public holidays, in the United Kingdom time zone.

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Time to Respond</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">3 business days</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Number of Tickets</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Unlimited</p></td></tr></tbody></table>

When raising a support ticket, clients can declare a Severity to the ticket which captures the impact to non-production testing and development.

 
| Severity | Definition |
| --- | --- |
| 
1 - Critical

 | 

This defect severely impacts the test schedule. Testing has stopped and cannot continue until the defect is fixed. This includes problems which will render the production system completely inoperative. A resolution is urgently required to avoid further delays.

 |
| 

2 - Major

 | 

The defect stops multiple test scripts and impacts a major functionality. Testing of the functionality can not continue until the defect is resolved and there is no workaround or it is cumbersome and time-consuming. Testing can continue but only on part of the system. A resolution is required to ensure testing is kept on track and progressing well.

 |
| 

3 - Minor

 | 

This defect is having a moderate impact on the test schedules and testing on a small number of test scripts cannot continue. Testing can continue and a resolution is needed so that tests can be completed.

 |
| 

4 - Support request

 | 

Vault software support query and advice

 |

##### [](#maintenance_windows "Copy link to heading")4.3.5.1. Maintenance windows

Thought Machine issues three types of Vault release: Minor, Major and Patch. Thought Machine provides release notes with each release.

For Vault Start clients, Thought Machine provides a schedule of maintenance windows where Vault releases will be deployed to the client’s Pre-production and subsequent environments. Vault Standard and Enterprise clients can choose to create a custom release schedule with their Client Success Manager.

  
| Release type | Description | Release cadence |
| --- | --- | --- |
| 
Minor

 | 

A standard Vault release. These are backwards compatible.

 | 

Monthly schedule

 |
| 

Major

 | 

Major releases may occur up to twice within a 12 month period and may result in backwards incompatible changes (for example, by removing deprecated APIs). Major releases are announced three months in advance.

 | 

1-2 times a year

 |
| 

Patch

 | 

Patch releases are occasionally necessary when a change is required to an older version of Vault and normally include a bug fix or security update.

 | 

As needed

 |

#### [](#vault_saas_observability_offering "Copy link to heading")4.3.6. Vault SaaS Observability Offering

Thought Machine offers clients visibility into Vault as part of Vault SaaS through three use cases:

1.  Clients can monitor Vault API endpoints for health and availability using tooling of their choice. Refer to the [Vault API Monitoring Guide](/vault-core/latest/EN/environment_and_installation/saas/observability_and_api_monitoring/api) for more information.
    
2.  Clients can ingest Vault metrics into their own monitoring stack through the Observability Metrics Endpoint to provide a centralised view of their ecosystem and use the metrics to build custom dashboards and alerts. Refer to the [Vault SaaS Metrics and Tracing Guide](/vault-core/latest/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide) for more information. Thought Machine does not ship infrastructure metrics through this endpoint or as part of Vault SaaS.
    
3.  Clients can capture and analyse Vault business events, such as Balances, Accounts and Schedule execution, through the [Core Streaming API](/vault-core/latest/EN/environment_and_installation/saas/streaming/streaming_api_documentation#streaming_api_documentation_for_vault_core). Refer to the [Using the Streaming APIs](/vault-core/latest/EN/api/overview#using_the_streaming_apis) for more information.
    

## [](#assurance_of_key_controls "Copy link to heading")5\. Assurance of key controls

Vault SaaS is architected, built and operated in line with industry best practice in the cloud to give clients assurance that the underlying infrastructure aligns to industry standards such as SOC 2 and CIS Benchmarks. Below is a description of how Thought Machine has implemented key controls through cloud-native tooling, services and ways of working. Controls are automated, configured and executed consistently across all SaaS environments to enforce security at scale.

The features described in this section are available to Vault Start, Standard and Enterprise clients, unless otherwise stated.

### [](#change_management "Copy link to heading")5.1. Change Management

Changes made by Thought Machine to the underlying SaaS infrastructure are automated and pass through standardised checks which align to CIS benchmarks and other rulesets as part of development. The SaaS SRE team adopts a \`four-eyes' approach and manually reviews proposed code changes before they are pushed to a SaaS environment. This ensures that underlying SaaS changes are consistent, tested, de-risked and transparent to the client.

### [](#access_control_and_identity_management "Copy link to heading")5.2. Access Control and Identity Management

Thought Machine maintains a role-based access control (RBAC) framework to define granular permissions for access to infrastructure resources in line with the principle of Least Privilege. Permissions and user groups are defined for key processes such as invoking automated processes, infrastructure operations and access to environments.

Thought Machine has applied a consistent IAM framework to Vault SaaS on AWS and GCP and makes use of cloud-native access control services such as Service Control Policies to maintain fine-grained permissions across cloud accounts.

### [](#observability_2 "Copy link to heading")5.3. Observability

Thought Machine proactively observes SaaS environments through monitoring metrics, alerts, traces and logs which are transparent to the client.

The SaaS SRE team performs holistic metrics-based monitoring across the infrastructure to observe service health and performance, with a comprehensive set of internal alerts to raise potential issues preemptively. Metrics are also used to identify areas where the quality of service can be improved.

Thought Machine uses logs to further investigate issues that are identified through metrics. SaaS clients have an isolated logging account where logs are retained for security audit purposes and threat analysis. Logs are captured at a network level up to the Vault application itself to provide end-to-end visibility of the system.

### [](#vulnerability_management "Copy link to heading")5.4. Vulnerability management

Thought Machine enforces a strict vulnerability bar across SaaS environments with internal remediation SLAs against a Production environment or Vault version. If a vulnerability is classified as High or Critical, the Vault release is blocked until further review by the Security team. Medium vulnerabilities are also blocked and require an exception to be released.

### [](#threat_detection_and_response "Copy link to heading")5.5. Threat detection and response

In alignment to SOC 2 and ISO 27001 standards, the Thought Machine SOC team operates a close to real-time automated threat detection framework which feeds into the 24/7/365 incident response model for Vault SaaS.

The SOC team monitors SaaS environments through audit logs which are continuously scanned for threat signatures. The baseline behaviour of Vault is identified from log data and used to develop threat detection rules that are continuously improved. Audit logs are stored and backed up with appropriate retention periods to support any requirement for compliance and forensics.

24/7 alerting rules are in place against audit logs to identify suspicious activity. If an alert is triggered, on-call engineers are notified and follow Thought Machine’s internal security incident response process. Thought Machine notifies clients of any confirmed security breaches within 4 hours of the Threat Response team confirming the breach.

### [](#data_encryption "Copy link to heading")5.6. Data encryption

All Production data is encrypted in transit and at rest. In-transit communication between infrastructure services is encrypted using mutual Transport Layer Security (mTLS). The volumes that store application data at rest are encrypted by default using the cloud provider’s native Key Management Service.

### [](#data_segregation "Copy link to heading")5.7. Data segregation

Customer data resides solely in the SaaS Production environment, which is a dedicated Vault Instance with dedicated infrastructure. The SaaS Production environment is isolated at a cloud provider account level from the Pre-production environment.

Thought Machine guarantees single-tenancy for Vault Standard and Enterprise clients. Vault Start clients may reside in a multi-tenanted architecture where multiple client environments are contained within a single cloud vendor account and may share infrastructure resources.

Thought Machine strongly recommends that clients do not store any personal data or personally identifiable information (PII) in any instance of Vault. It is expected that clients will store such personal data/PII in their own long term data stores and/or System of Records. Note that clients are solely responsible for maintaining their own long term data stores and/or System of Records along with all customer data stored therein, including personal data/PII.

### [](#high_availability_and_disaster_recovery "Copy link to heading")5.8. High Availability and Disaster Recovery

Vault Core SaaS is designed for high availability and fault tolerance. All components are deployed and replicated across multiple CSP availability zones within a single CSP region.

Vault Core SaaS is deployed in a three availability zone architecture model within the CSP region. All availability zones receive production traffic under normal operating conditions. In the event of an availability zone failure, production traffic is automatically re-routed to the other healthy zones in the same region. This architecture model is designed to achieve the following in the event of an infrastructure component or availability zone failure:

-   Recovery Point Objective (RPO) of 0 seconds
    
-   Recovery Time Objective (RTO) of 60-120 seconds
    

By default, high availability and fault tolerance is only configured in Production Environments. It can be configured in Non-production Environments under separate terms.

Vault Core SaaS takes daily backups of production databases; these backups are retained for 14 days. Transaction logs are backed up to highly-durable storage to allow point-in-time recovery for customer data.

Vault Core SaaS does not provide multi-region disaster recovery capabilities by default. If more than one availability zone fails within the same region, this is considered a regional failure. In the event of a regional failure, Thought Machine will take the decision (in conjunction with the client) to wait for the region to be restored by the cloud provider or to manually re-provision Vault Core into a secondary region. There is no SLA for this activity.

## [](#roles_and_responsibilities "Copy link to heading")6\. Roles and responsibilities

Vault SaaS is usually one service within a client’s wider ecosystem that includes multiple technologies and processes.

Thought Machine aims for Vault SaaS to integrate seamlessly into the client’s organisation. Technically, this is achieved by exposing Vault APIs for clients to use flexibly. From an operational perspective, there are areas where roles and responsibilities may overlap between Thought Machine and clients to deliver a seamless experience.

We provide a summary in our client [onboarding prerequisites](/policy/latest/EN/product_descriptions/vault_core_saas#client_prerequisites_for_vault_saas_onboarding), [production launch prerequisites](/policy/latest/EN/product_descriptions/vault_core_saas#client_prerequisites_for_production_launch_readiness) and [shared security model](/policy/latest/EN/product_descriptions/vault_core_saas#roles_and_responsibilities).

### [](#client_prerequisites_for_vault_saas_onboarding "Copy link to heading")6.1. Client prerequisites for Vault SaaS onboarding

There are three prerequisites that clients must have in place in order to be onboarded into their Pre-production environment and start using Vault SaaS:

1.  A cloud environment (AWS Account or GCP Project) to privately connect to Vault SaaS through the cloud provider’s backbone network. Thought Machine recommends a vanilla cloud environment with no other resources deployed into it
    
2.  A client-side engineer who can configure AWS PrivateLink or GCP Private Service Connect, supply configuration details for Thought Machine to issue connectivity between the client’s cloud environment and Vault SaaS, and configure SAML IdP
    
3.  A client-side engineering or IT function that can complete technical sections of the *Vault SaaS Client Environment Request Form* which includes information requests to set up SAML IdP and key cloud environment details such as the account ID, host region and currency denomination
    

For more information, refer to the *Vault SaaS Onboarding Handbook*.

### [](#client_prerequisites_for_production_launch_readiness "Copy link to heading")6.2. Client prerequisites for Production launch readiness

Before moving to Production, clients are responsible for ensuring they are technically and operationally ready to use Vault under live conditions with real customer traffic and data. Thought Machine provides clients with the *Production Readiness checklist* to support clients with their internal preparations.

For more information, refer to the *Service Procedures Manual*.

### [](#shared_security_model "Copy link to heading")6.3. Shared security model

The objective of the shared security model is to ensure that clients and Thought Machine understand their areas of responsibility for incident response at each layer of the Vault SaaS technology stack. Responsibility is assigned to the organisation that configured the layer.

  
| *SaaS technology stack layer* | *Description* | *Incident detection and response responsibility* |
| --- | --- | --- |
| 
Application Logic\*

 | 

Secure configuration of Vault APIs and management of financial products built using Vault

 | 

Client

 |
| 

Container orchestration of Vault microservices

 | 

Deployment, orchestration and secure configuration of pods, containers and control plane

 | 

Thought Machine

 |
| 

Cloud infrastructure and infrastructure services

 | 

Secure configuration, deployment and redundancy of cloud provider physical infrastructure and managed services

 | 

Thought Machine

 |
| 

Cloud provider physical infrastructure and managed services

 | 

Hardware for virtual machines. Networking and redundancy within the data centre. Provision of service, security and guarantees for managed services

 | 

Cloud Provider

 |

\*The security of application logic within Vault as a product is managed by Thought Machine.

There may be cases where the client and Thought Machine’s Threat Response team jointly investigate an incident that crosses responsibility boundaries. This communication occurs through the Service Desk. In the event that an incident is confirmed to be in the client’s area of responsibility, Thought Machine will inform the client before concluding the investigation.

If there is an incident at the cloud provider layer, Thought Machine will coordinate with the cloud provider and update the client through the Service Desk and Service Management.

Thought Machine continuously improves threat detection and response through threat modelling and tabletop exercises.

For more information, see [Appendix: Shared security model case studies](/policy/latest/EN/product_descriptions/vault_core_saas#shared_security_model_case_studies).

## [](#shared_security_model_case_studies "Copy link to heading")7\. Shared security model case studies

In order to illustrate the effect of this division of responsibilities, see the sample case studies:

-   [Case study: Kubernetes cluster misconfiguration](/policy/latest/EN/product_descriptions/vault_core_saas#case_study_kubernetes_cluster_misconfiguration)
    
-   [Case study: Fraud by customer support agent](/policy/latest/EN/product_descriptions/vault_core_saas#case_study_fraud_by_customer_support_agent)
    
-   [Case study: Application security breach](/policy/latest/EN/product_descriptions/vault_core_saas#case_study_application_security_breach)
    

### [](#case_study_kubernetes_cluster_misconfiguration "Copy link to heading")7.1. Case study: Kubernetes cluster misconfiguration

#### [](#description "Copy link to heading")7.1.1. Description

There is a misconfiguration of the Kubernetes cluster on which the Thought Machine SaaS instance is running. This misconfiguration is detected by an attacker, who exploits the vulnerability to gain access to the network running the SaaS instance. This attack is detected by Thought Machine’s Threat Response tooling, and a security event is logged for investigation.

#### [](#responsibilities_and_communication "Copy link to heading")7.1.2. Responsibilities and communication

-   Responsibility for the detection and investigation of the incident will initially belong entirely to the Threat Response team within Thought Machine
    
-   If a breach is confirmed, the Threat Response team will notify the Incident Management Service Desk once the scope of the breach is understood
    
-   The Incident Management Service Desk will notify the affected client(s) as required and as the incident progresses
    
-   Thought Machine will mitigate and remediate the breach, and present the client with a full incident report on conclusion
    

### [](#case_study_fraud_by_customer_support_agent "Copy link to heading")7.2. Case study: Fraud by customer support agent

#### [](#description_2 "Copy link to heading")7.2.1. Description

A customer support agent with access to the Operations Dashboard uses a misconfiguration in permissions to conduct fraud against one of the client’s customers.

#### [](#responsibilities_and_communication_2 "Copy link to heading")7.2.2. Responsibilities and communication

Responsibility for the entire detection and response process lies with the client.

Thought Machine may assist with the process of investigation, but it is not the Threat Response team’s responsibility to participate in this.

### [](#case_study_application_security_breach "Copy link to heading")7.3. Case study: Application security breach

#### [](#description_3 "Copy link to heading")7.3.1. Description

An application security issue in Thought Machine Vault’s Operations Dashboard is discovered by a malicious internal user. The attacker uses this application vulnerability to gain access to a container within the Vault SaaS cluster, and carry out further operations from within the container. The suspected security incident is initially detected by the client’s Incident Response team.

This incident will require extensive cross-team communication. Thought Machine’s Incident Management Service Desk will liaise between client and internal teams as the attack is investigated.

#### [](#responsibilities_and_communication_3 "Copy link to heading")7.3.2. Responsibilities and communication

  
| *Client responsibility* | *Thought Machine Threat Response Team responsibility* | *Thought Machine Engineering Team responsibility* |
| --- | --- | --- |
| 
Detection of the initial Operations Dashboard breach, using action and audit logs available to the client.

 | 

Detection of the container compromise.

 | 

Identification, implementation and validation of long-term fixes to ensure that the application security issue does not reoccur.

 |
| 

Removal of the internal attacker’s access to the Operations Dashboard, and investigation of any actions that the attacker has taken in the application layer.

 | 

Containment of the attacker and their removal from the SaaS container environment.

 | 

Release of a software fix for the issue according to the defined remediation SLA.

 |
| 

Application of any security-related Operations Dashboard configuration changes.

 | 

-   Identification of any actions that the attacker took in the layers for which Thought Machine is responsible
    
-   Identification of any data loss in the layers for which Thought Machine is responsible
    
-   Assisting the client’s incident response team in carrying out any incident investigation and response, provided that this does not involve investigation and response in the application layer itself
    





 | 

Release of a software fix for the issue according to the defined remediation SLA.

 |