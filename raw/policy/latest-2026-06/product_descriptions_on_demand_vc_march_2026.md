---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/product_descriptions/on_demand_vc_march_2026"
title: "On Demand Vault Core Product Description - March 2026"
scraped_at: "2026-06-17T05:17:54.039Z"
images: 0
---

# On Demand Vault Core Product Description - March 2026

[Download PDF](/policy/latest/EN/resources/on_demand_vc_march_2026.pdf)

## [](#overview "Copy link to heading")1\. Overview

This product description describes the following for On Demand Vault Core:

-   The capabilities that are provided by the On Demand Environments created using the On Demand Vault Core product
    
-   An overview of the infrastructure required to run On Demand Environments
    

## [](#definitions "Copy link to heading")2\. Definitions

 
| Term | Definition |
| --- | --- |
| 
CSP

 | 

Cloud Service Provider

 |
| 

Deployment Hub

 | 

Thought Machine owned and operated tooling used for supplying infrastructure and On Demand Environments

 |
| 

MSA

 | 

An agreed master service agreement, or similar, relating to the supply of Vault Core and related services from Thought Machine to a client

 |
| 

On Demand Environment

 | 

A non-production on-demand environment created upon the client’s request in line with the varying specifications available, and which is then hosted by or on behalf of Thought Machine, with an instance of Vault Core that end-users do not interact with and which does not contain end-user data and is intended for testing and development purposes

 |
| 

On Demand Vault Core

 | 

The name of Thought Machine’s Vault Core product that enables its clients to create On Demand Environments

 |

## [](#on_demand_environment_capabilities "Copy link to heading")3\. On Demand Environment Capabilities

### [](#overview_2 "Copy link to heading")3.1. Overview

Thought Machine has invested extensive engineering efforts into our internal deployment system and provisioning capabilities. This has enabled us to automate the majority of our internal Vault Core environment usage, so that users can create their own environments through a web application called the Deployment Hub.

This is a mechanism to supply Vault Core non-production environments for clients to utilise for their own internal, non-production use cases in a manner consistent with the MSA e.g.,

-   Functional testing of a new Vault Core version the client plans to upgrade to
    
-   Non-functional (performance) testing to validate the product’s capability to handle specific account volumes or configurations
    
-   Testing latest released features from an alpha version of the next Vault Core release
    
-   Utilising the Vault Apps to test or showcase Vault Core capabilities internally
    

Upon the Client’s request, Thought Machine can create On Demand Environments based on the Client’s requirements (in line with this Product Description) and pricing and any other commercials agreed between the parties.

### [](#capabilities_and_attributes "Copy link to heading")3.2. Capabilities and attributes

#### [](#release_versions "Copy link to heading")3.2.1. Release versions

Clients can request any supported version of Vault Core for each On Demand Environment. Thought Machine reserves the right to deprecate or retire specific versions of Vault Core for use with an On Demand Environment. This typically occurs when a version reaches "End of Life" or is superseded by a more secure and stable patch version.

#### [](#environment_specifications "Copy link to heading")3.2.2. Environment specifications

Clients can request an environment infrastructure specification, suitable for their desired use case, from the following options in respect of each On Demand Environment:

**GCP**

   
| On Demand Environment tier | Indicative number of accounts | Example use case | Example infrastructure specification |
| --- | --- | --- | --- |
| 
1

 | 

up to 1,000

 | 

Basic functional testing. Product demos.

 | 

Database: Cloud SQL - 1 vCPU 2 GB RAM, 6 nodes - 8 vCPUs, 24 GB memory, 1 Kafka broker

 |
| 

2

 | 

up to 500,000

 | 

Basic performance testing. Extensive e2e functional testing.

 | 

Database: Cloud SQL - 16 vCPU 64 GB RAM, 14 nodes - 8 vCPUs, 24 GB memory, 3 Kafka brokers

 |
| 

3

 | 

up to 5,000,000

 | 

Performance testing.

 | 

Database: Cloud SQL - 64 vCPU 425 GB RAM, 21 nodes - 8 vCPUs, 24 GB memory, 3 Kafka brokers

 |
| 

4

 | 

up to 30,000,000

 | 

Performance testing at large volumes.

 | 

Database: Primary AlloyDB - 64 vCPU 512 GB RAM, Secondary - 64 vCPU 512 GB RAM, 33 nodes - 8 vCPUs, 24 GB memory, 6 Kafka brokers

 |

**AWS**

   
| On Demand Environment Tier | Indicative number of accounts | Example use case | Example infrastructure specification |
| --- | --- | --- | --- |
| 
1

 | 

up to 1,000

 | 

Basic functional testing. Product demos.

 | 

Database: RDS - db.r6g.xlarge (100Gi RDS), 3 Kafka brokers

 |
| 

2

 | 

up to 500,000

 | 

Basic performance testing. Extensive e2e functional testing.

 | 

Database: db.r6g.2xlarge (1000Gi RDS), 3 Kafka brokers

 |
| 

3

 | 

up to 5,000,000

 | 

Performance testing.

 | 

Database: db.r6g.4xlarge (Aurora, 16k IOPS), 6 Kafka brokers

 |
| 

4

 | 

up to 30,000,000

 | 

Performance testing at large volumes.

 | 

Database: Hot DB Aurora - db.r6i.24xlarge, Warm DB Aurora - db.r6i.24xlarge, 6 Kafka brokers

 |

*Note that the infrastructure specifications are driven by the applicable CSP, and are subject to change. Furthermore, to the extent the Client requires any On Demand Environments that are outside the scope of these defined parameters, these will be discussed on a case-by-case basis including any necessary adjustments to the commercial terms.*

#### [](#product_extensions "Copy link to heading")3.2.3. Product Extensions

Clients may have purchased licenses for existing Vault Core features e.g., High Volume Accounts and clients can request that those features be included on their On Demand Environment.

#### [](#vault_bridge "Copy link to heading")3.2.4. Vault Bridge

Vault Bridge and associated features are not included by default in the On Demand Vault Core license.

## [](#infrastructure_capabilities "Copy link to heading")4\. Infrastructure capabilities

### [](#capabilities_and_attributes_2 "Copy link to heading")4.1. Capabilities and Attributes

#### [](#hosting "Copy link to heading")4.1.1. Hosting

On Demand Environments are hosted on Google Cloud Platform (GCP) and Amazon Web Services (AWS) in a supported region. Currently supported regions are:

**GCP**

-   Europe-west1 (Belgium)
    
-   Europe-west2 (London)
    

**AWS**

-   Eu-west-1 (Ireland)
    

#### [](#tenancy_and_isolation "Copy link to heading")4.1.2. Tenancy and isolation

By default, each environment will be logically isolated from other environments with a dedicated Kubernetes cluster and physical database.

#### [](#authentication "Copy link to heading")4.1.3. Authentication

The Vault Core Applications, Vault Core APIs, and Kafka brokers are secured using Authentik-issued tokens via OpenID Connect (OIDC).

#### [](#observability "Copy link to heading")4.1.4. Observability

Clients can gain visibility into their On Demand Environment by:

-   Monitoring Vault Core API endpoints for health and availability using tooling of their choice
    
-   Capturing and analysing Vault Core business events, such as Balances, Accounts and Schedule execution, through the Vault Core Streaming API
    

#### [](#data_privacy_and_security "Copy link to heading")4.1.5. Data privacy and security

While it is possible to do so, clients must not store any personal data or personally identifiable information (PII) in any On Demand Environment. Clients must store such personal data/PII in their own long-term data stores and/or systems of record. Clients are solely responsible for maintaining their own long-term data stores and/or systems of record and all customer data stored therein, including personal data/PII.

### [](#prohibited_uses "Copy link to heading")4.2. Prohibited Uses

Clients shall not use, or facilitate or allow others to use, any On Demand Environment:

-   for any illegal or fraudulent activity;
    
-   for any unlawful, invasive, infringing, defamatory or fraudulent purpose including Nonconsensual Explicit Imagery (NCEI), violating rights of others (including intellectual property rights), phishing, or creating a pyramid scheme;
    
-   to threaten, incite, promote, or actively encourage violence, terrorism, or other serious harm;
    
-   for any content or activity that promotes sexual exploitation or abuse;
    
-   to violate the security, confidentiality, integrity, or availability of any user, network, computer or communications system, software application, or network or computing device;
    
-   to distribute, publish, send, or facilitate the sending of unsolicited mass email or other messages, promotions, advertising, or solicitations (or “spam”);
    
-   to disable, interfere with or circumvent any aspect of On Demand Environments or the equipment used to provide them;
    
-   to distribute viruses, worms, trojan horses, corrupted files, hoaxes, or other items of a destructive or deceptive nature;
    
-   to use On Demand Environments, or any interfaces provided with them, to access any the Supplier and/or CSP product or service in a manner that violates the terms of service of such other the Supplier and/or CSP product or service.