---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/product_descriptions/vault_payments_saas"
title: "Vault Payments SaaS Product Specification"
scraped_at: "2026-06-17T15:56:46.871Z"
images: 0
---

# Vault Payments SaaS Product Specification

[Download PDF](/policy/latest/EN/resources/vault_payments_saas.pdf)

## [](#about_this_specification "Copy link to heading")1\. About this specification

This specification is intended for clients wishing to understand the features, services and operations in the SaaS hosting model of Vault Payments.

### [](#scope "Copy link to heading")1.1. Scope

This specification is intended for clients wishing to understand the features, services and operations in the SaaS hosting model of Vault Payments.

For more information on the Vault Payments Product, refer to the Vault Payments Product Description.

### [](#definition_of_terms "Copy link to heading")1.2. Definition of terms

The following terms are used throughout this document:

-   Instruction Flow: A piece of code that defines the sequence of operations that Vault Payments will perform to process a payment
    
-   Production environment: An environment that is capable of serving live customer traffic following a launch event, using live customer data; provided at client request, based on client development plan
    
-   Production data: Data residing in a Production environment (otherwise known as live customer data)
    
-   Pre-production environment: A development environment for testing using obfuscated test data; provided at client request, based on client development plan
    
-   Vault Payments API: Vault Payments endpoints that Thought Machine exposes to Vault Payments clients which include the Payments API & Streaming API
    
-   Availability Zone: A deployment area for resources within a region for a given cloud provider. Each zone is considered a single failure domain within a region
    
-   External System: Technology that is owned and solely controlled by organisations other than Thought Machine
    
-   Infrastructure: Cloud infrastructure and cloud-native services deployed onto cloud infrastructure that Vault Payments requires to operate
    
-   Master Service Agreement / MSA: A contract between Thought Machine and the client that outlines terms and conditions that govern the use of Vault Payments
    

## [](#overview "Copy link to heading")2\. Overview

### [](#what_is_vault_payments_saas "Copy link to heading")2.1. What is Vault Payments SaaS?

Thought Machine offers clients Vault Payments in a Software as a Service (SaaS) model, where Vault Payments’ underlying infrastructure is built, operated and secured by Thought Machine on behalf of the client.

Vault Payments clients utilising the SaaS hosting model are able to make full use of Vault Payments without the overheads of managing cloud infrastructure and key processes in production. Core operations for Vault Payments itself, such as software upgrades and patches, are also managed by Thought Machine. Vault Payments SaaS scales for banks of any size and use case.

### [](#how_do_clients_interact_with_vault_payments "Copy link to heading")2.2. How do clients interact with Vault Payments?

Thought Machine exposes Vault Payments APIs for clients to interact with Vault Payments and provides configurable Instruction Flows to enable creation of custom instruction processing. Instruction Flows can be configured by Thought Machine, clients or their delivery partners.

### [](#how_do_clients_connect_to_vault_payments_saas "Copy link to heading")2.3. How do clients connect to Vault Payments SaaS?

Thought Machine provides connectivity to Vault Payments SaaS in line with industry security standards. Clients connect to their SaaS environments through a private endpoint that uses the cloud provider’s network, or via the public internet depending on client preferences.

## [](#vault_payments_saas_offering_summary "Copy link to heading")3\. Vault Payments SaaS offering summary

### [](#hosting "Copy link to heading")3.1. Hosting

Vault Payments SaaS is offered on Amazon Web Services (AWS).

### [](#tenancy "Copy link to heading")3.2. Tenancy

Vault Payments offers two tenancy models, shared and dedicated, subject to the terms of the MSA.

Shared deployments are instances of Vault Payments containing tenants for multiple clients. Infrastructure is shared between tenants, and data is logically isolated.

Dedicated deployments are instances of Vault Payments provided to a single client, with isolation for Production at the cloud provider account level.

Dedicated instances benefit from the ability to choose an approved hosting region, with production data physically segregated from other clients. Additionally, the client benefits from the ability to influence the dates of software upgrades.

### [](#architecture "Copy link to heading")3.3. Architecture

Vault Payments SaaS is architected using cloud-native services and hardened open-source tooling to provide clients with a Highly Available (HA) and fault-tolerant service (see [SaaS in depth](/policy/latest/EN/product_descriptions/vault_payments_saas#saas_in_depth))). Vault Payments SaaS is deployed across multiple Availability Zones (AZs) which ensures that it is resilient to failures within a single region.

### [](#saas_environments "Copy link to heading")3.4. SaaS environments

Clients receive Pre-production and Production environments to enable rapid development of payment processing capabilities (see [Environments](/policy/latest/EN/product_descriptions/vault_payments_saas#environments))). Production environments are segregated from Pre-production environments at a cloud provider account level to maintain the highest standards of data confidentiality, integrity and availability.

SaaS environment provisioning starts with delivery of the Pre-production environment, once a client signs the Master Service Agreement (MSA). The Production environment will be provisioned as per the needs of the SaaS client’s delivery plan and agreement with Thought Machine. Clients can submit an Environment Request Form and should allow at least 2 weeks for delivery of their SaaS environment from acceptance of their request.

Shared deployments will be scaled based on requirements, and Dedicated deployments that are not utilised may be scaled down through agreement between a client and Thought Machine, and scaled back up upon client’s request.

### [](#saas_availability "Copy link to heading")3.5. SaaS availability

Thought Machine provides 24/7 global support to clients in production. Service Uptime SLAs are defined in the MSA.

### [](#onboarding "Copy link to heading")3.6. Onboarding

Onboarding starts when clients have signed their MSA and concludes when a client is able to access their production environment. Clients receive dedicated Client Success Managers (CSMs) during all stages of their implementation, from contract signing to first Production launch.

### [](#compliance_and_audit "Copy link to heading")3.7. Compliance and audit

Vault Payments SaaS is globally compliant and adheres to regulations in every hosting region. By using Vault Payments SaaS, clients benefit from a set of industry standards and compliance frameworks by default. This includes SOC 2 compliance, ISO 27001, CIS benchmarks and alignment to the Cloud Security Alliance (CSA) Cloud Controls Matrix. Thought Machine’s SOC 2 compliance report, PCI DSS Attestation of Compliance, and PIC PIN Attestation of Compliance are available to view on the client portal.

Vault Payments clients can choose to request audit information, subject to the terms of their MSA.

### [](#exit "Copy link to heading")3.8. Exit

Thought Machine provides exit assistance to clients through an agreed Exit Plan in the event of a termination of the SaaS services as set out in the MSA.

## [](#saas_in_depth "Copy link to heading")4\. SaaS in depth

### [](#environments "Copy link to heading")4.1. Environments

Thought Machine provides two environments to Vault Payments SaaS clients: one Pre-production environment and one Production environment.

Additional Pre-production environments can be provided for functional and non-functional testing subject to commercial agreement.

  
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

*Provisioning*

 | 

Provided at client request, based on client development plan

 | 

Provided at client request, based on client development plan

 |
| 

*Purpose*

 | 

Development and Testing: Testing using obfuscated test data

 | 

Production environment that serves live customer traffic following a launch event

 |
| 

*Environment provisioning time*

 | 

Provisioned to client upon approval of client request

 | 

Provisioned to client upon approval of client request

 |
| 

*Data types supported by the environment*

 | 

Obfuscated test data

 | 

Live customer data (also referred to as Production data)

 |
| 

*Availability*

 | 

Not Highly Available (HA)

 | 

High Availability (HA) architecture and Disaster Recovery enabled

 |

### [](#client_success_managers "Copy link to heading")4.2. Client Success Managers

A Client Success Manager (CSM) is aligned to each client. Their primary responsibility is to develop, maintain and deliver ongoing production support processes and procedures for their client(s), and to achieve ongoing performance against the agreed service levels. Long-term fixes and change requests to the platform that arise from incidents are also managed by CSMs following ITIL Problem Management best practices. During critical P1 and P2 incidents the CSMs act as the in-region point-of-contact for clients.

### [](#support "Copy link to heading")4.3. Support

This section provides a general description of support for informational purposes only. Support services are set out in the MSA, which describes the services and their service levels.

An issue identified in production is classified as an incident. An issue in Pre-production environments is classified as a defect. Incidents are subject to SLAs depending on their severity.

#### [](#support_teams "Copy link to heading")4.3.1. Support teams

The Thought Machine Production Support team is responsible for providing support to clients. When an issue is raised via a support ticket internally or by a client, the Cloud Support Engineers (CSEs) are notified. CSEs are the immediate contact point for issue triage, fixing issues and communicating with clients.

The Thought Machine Site Reliability Engineers (SREs) and on-call engineers are notified if an issue is related to a specific aspect of Vault Payments SaaS Infrastructure or if deep insight is required to diagnose and resolve the issue. CSEs coordinate this activity and continue to communicate with the client.

#### [](#production_support "Copy link to heading")4.3.2. Production support

Thought Machine continuously monitors SaaS Production environments. Issues are proactively identified and resolved by Thought Machine’s SRE team transparently to clients. In the event of an incident identified by Thought Machine or a client, an incident support ticket is created to manage SLA impact and track the steps to resolution. SLAs are paused when Thought Machine requires information from the client or when incident resolution activity has stopped.

An incident may require Thought Machine to have direct access to the client’s Production environment to investigate and resolve it. Under these circumstances, the break glass procedure is triggered. In accordance with Thought Machine’s role-based access control framework (RBAC), an operator within an authorised group can request temporary access to the Production environment with Administrator permissions. This requires approval from senior colleagues. All activity is retained in audit logs for the purpose of review and evidencing if required.

#### [](#non_production_support "Copy link to heading")4.3.3. Non-production support

In the event a client identifies an issue in their Pre-production environments, they may escalate it as a defect to Thought Machine. The client’s internal support team is responsible for initial triage of the issue to confirm that it does not reside in the application layer or external systems. To escalate an issue, clients create a support ticket through the Service Desk portal.

### [](#software_updates "Copy link to heading")4.4. Software updates

Thought Machine issues five types of software updates:

-   Product API Version
    
-   Backward Incompatible Update
    
-   Backward Compatible Update
    
-   Patch Update
    
-   Emergency Fix
    

   
| Update type | Description | Update cadence | Notice period |
| --- | --- | --- | --- |
| 
*New Product API Version*

 | 

A new product API version which may include feature and functionality changes and enhancements

 | 

No more than two per year

 | 

3 months

 |
| 

*Backwards Compatible Update*

 | 

An update to Vault Payments that includes features or functionality changes and enhancements which are backwards compatible

 | 

Continuous

 | 

None

 |
| 

*Backwards Incompatible Update*

 | 

An update to Vault Payments that removes or modifies features or functionality in a way that introduces backwards incompatible changes, including removal of a Product API or a Product API Version

 | 

No more than two per year

 | 

12 months

 |
| 

*Patch Update*

 | 

An update which typically fixes bugs or security vulnerabilities, which ensure Vault Payments continues to run effectively and securely

 | 

Continuous

 | 

None

 |
| 

*Emergency Fix*

 | 

An update that is focused on resolving high priority vulnerabilities urgently

 | 

As needed

 | 

None

 |

Thought Machine provides a schedule of maintenance windows where Backward Incompatible Updates will be deployed to the client’s Pre-production environment and subsequent environments.

## [](#assurance_of_key_controls "Copy link to heading")5\. Assurance of key controls

Vault Payments SaaS is architected, built and operated in line with industry best practice in the cloud to give clients assurance that the underlying infrastructure aligns to industry standards such as SOC 2 and CIS Benchmarks. Below is a description of how Thought Machine has implemented key controls through cloud-native tooling, services and ways of working. Controls are automated, configured and executed consistently across all SaaS environments to enforce security at scale.

### [](#change_management "Copy link to heading")5.1. Change Management

Changes made by Thought Machine to the underlying SaaS infrastructure are automated and pass through standardised checks which align to CIS benchmarks and other rulesets as part of development. The SaaS SRE team adopts a ‘four-eyes’ approach and manually reviews proposed code changes before they are pushed to a SaaS environment. This ensures that underlying SaaS changes are consistent, tested, de-risked and transparent to the client.

### [](#access_control_and_identity_management "Copy link to heading")5.2. Access Control and Identity Management

Thought Machine maintains a role-based access control (RBAC) framework to define granular permissions for access to infrastructure resources in line with the principle of Least Privilege. Permissions and user groups are defined for key processes such as invoking automated processes, infrastructure operations and access to environments.

Thought Machine has applied a consistent IAM framework to Vault Payments SaaS on AWS and makes use of cloud-native access control services such as Service Control Policies to maintain fine-grained permissions across cloud accounts.

### [](#observability "Copy link to heading")5.3. Observability

Thought Machine proactively observes SaaS environments through monitoring metrics, alerts, traces, and logs.

The SaaS SRE team performs holistic metrics-based monitoring across the infrastructure to observe service health and performance, with a comprehensive set of internal alerts to raise potential issues preemptively. Metrics are also used to identify areas where the quality of service can be improved.

Thought Machine uses logs to further investigate issues that are identified through metrics. Logs are captured at a network level up to the Vault Payments application itself to provide end-to-end visibility of the system.

### [](#vulnerability_management "Copy link to heading")5.4. Vulnerability management

Thought Machine enforces a strict vulnerability bar across SaaS environments with internal remediation SLAs against a Production environment or API version. If a vulnerability is classified as ‘Critical’ or ‘High’, the upgrade is blocked until further review by the Security team. Medium vulnerabilities are also blocked and require an exception to be released.

### [](#threat_detection_and_response "Copy link to heading")5.5. Threat detection and response

In alignment to SOC 2 and ISO 27001 standards, the Thought Machine SOC team operates a close to real-time automated threat detection framework which feeds into the 24/7/365 incident response model for Vault Payments.

The SOC team monitors SaaS environments through audit logs which are continuously scanned for threat signatures. The baseline behaviour of Vault Payments is identified from log data and used to develop threat detection rules that are continuously improved. Audit logs are stored and backed up with appropriate retention periods to support any requirement for compliance and forensics.

24/7 alerting rules are in place against audit logs to identify suspicious activity. If an alert is triggered, on-call engineers are notified and follow Thought Machine’s internal security incident response process. Thought Machine notifies clients of any confirmed security breaches within 4 hours of the Threat Response team confirming the breach.

### [](#data_encryption "Copy link to heading")5.6. Data encryption

All Production data is encrypted in-transit and at rest. In-transit communication between infrastructure services is encrypted using mutual Transport Layer Security (mTLS). The volumes that store application data at rest are encrypted by default using the cloud provider’s native ‘Key Management Service’.

### [](#data_segregation "Copy link to heading")5.7. Data segregation

Production data (or live customer data) resides solely in the SaaS Production environment.

For shared deployments, multiple clients share a Vault Payments instance and infrastructure resources, and data is logically isolated.

For dedicated deployments, this is a single Vault Payments instance with dedicated infrastructure. The SaaS Production environment is isolated from other clients at a cloud provider account level.

In all cases, Production instances are isolated from Pre-production instances at the cloud provider account level.

### [](#high_availability_and_disaster_recovery "Copy link to heading")5.8. High Availability and Disaster Recovery

Vault Payments SaaS is designed for high availability and fault tolerance. All components are deployed and replicated across multiple Availability Zones (AZs) within a single region.

Vault Payments SaaS is deployed in a three Availability Zone architecture model within the region. All AZs receive production traffic under normal operating conditions. In the event of an AZ failure, production traffic is automatically re-routed to the other healthy zones in the same region. This architecture model is designed to achieve the following in the event of an infrastructure component or AZ failure:

-   Recovery Point Objective (RPO) of 0 seconds
    
-   Recovery Time Objective (RTO) of 60-120 seconds
    

By default, high availability and fault tolerance is only configured in Production Environments. It can be configured in Non-production environments under separate terms.

Vault Payments SaaS takes daily backups of production databases; these backups are retained for 14 days. Transaction logs are backed up to highly-durable storage to allow point-in-time recovery for customer data.

Vault Payments SaaS does not provide multi-region disaster recovery capabilities by default. If more than one AZ fails within the same region, this is considered a regional failure. In the event of a regional failure, Thought Machine will take the decision (in conjunction with the client for dedicated instances) to wait for the region to be restored by the cloud provider or to manually re-provision Vault Payments into a secondary region. There is no SLA for this activity.