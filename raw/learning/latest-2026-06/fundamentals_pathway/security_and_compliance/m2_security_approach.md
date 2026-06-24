---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/fundamentals_pathway/security_and_compliance/m2_security_approach"
title: "Module 2: Security approach"
scraped_at: "2026-06-17T16:00:29.809Z"
images: 7
---

# Module 2: Security approach

assignment\_turned\_in

Learning objective

Explore our approach to encryption at rest and in transit, as well as tooling uses for secrets management.

## [](#encryption "Copy link to heading")Encryption

Data protection relates to the ability to keep sensitive data confidential.

The primary control (outside of IAM) is through encryption.

Vault Core is designed with data protection in mind, hence data is encrypted throughout the product, covering both data in transit and data at rest.

Take a minute to study this diagram where we can see a graphic representation of communication between different components within Vault Core, and their encryption approach.

![“Vault apps and 3rd Party Clients connect to the system via HTTPS (TLS). Internal Communication: Within the Vault Core boundary](_assets/encryption.w_lk2xeQ_ZGJ27z_learning.svg)

When it comes to data in transit, all connections are encrypted. This includes:

-   API requests
    
-   Web UI requests
    
-   Kafka requests
    
-   Postgres requests
    
-   Microservice communication
    

The same applies to data at rest. All data is encrypted:

-   SaaS data is encrypted at rest using AES-256 with cloud managed keys.
    
-   Bank hosted implementations may use CSP customer managed keys (CMK).
    

## [](#secrets_manager "Copy link to heading")Secrets Manager

Vault Core requires the use of a secrets manager to securely store and manage sensitive information such as keys and tokens.

**Vault Core supports a number of secrets manager platforms**, such as:

<table class="tableblock frame-none grid-none stripes-none stretch"><colgroup><col style="width: 33.3333%;"> <col style="width: 33.3333%;"> <col style="width: 33.3334%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><span class="image"><img src="_assets/logo_hashicorp.sDloiW74_2pmdtn_learning.svg" alt="" title="“Hashicorp logo”"></span></p></div></div></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><span class="image"><img src="_assets/logo_aws_secrets_manager.z72izgXz_Z6t1os_learning.svg" alt="" title="“AWS Secrets Manager logo”"></span></p></div></div></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><span class="image"><img src="_assets/logo_azure.C7UCnrKx_Z14TadJ_learning.svg" alt="" title="“Microsoft Azure logo”"></span></p></div></div></td></tr><tr><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><strong>HashiCorp Vault:</strong> supported in all active Vault Core versions; available in bank-hosted and SaaS-hosted deployments</p></div></div></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><strong>AWS Secrets Manager:</strong> supported from Vault Core version 4.6 onwards; available in bank-hosted deployments</p></div></div></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><strong>Microsoft Azure:</strong> supported from Vault Core version 5.2 onwards; available in bank-hosted deployments</p></div></div></td></tr></tbody></table>

Only one secrets manager can be configured per Vault Core instance.

Microservices within Vault Core are scoped down to only access the secrets which they require, in line with the principle of least privilege.

## [](#foundational_security_concepts "Copy link to heading")Foundational security concepts

Vault Core adheres to **3 foundational security concepts**.

<table class="tableblock frame-none grid-none stripes-none stretch"><colgroup><col style="width: 33.3333%;"> <col style="width: 33.3333%;"> <col style="width: 33.3334%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><span class="image"><img src="_assets/t_secure_sldc.BmzDQQTU_1eQccG_learning.svg" alt="" title="Secure SLDC"></span></p></div></div></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><span class="image"><img src="_assets/t_access_and_audit.DtGW3rLq_Z1Fdmd7_learning.svg" alt="" title="Access and Audit"></span></p></div></div></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><span class="image"><img src="_assets/t_data_protection._1DN7LD2_Z2bdCp9_learning.svg" alt="" title="Data Protection"></span></p></div></div></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Thought Machine integrates security throughout the software development life cycle. Vault Core undergoes automated code scanning, component based threat modelling and independent penetration testing.</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Clients manage and audit all access to their own Vault Core instance, for example access to Vault Core APIs and the Vault apps.</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Vault Core is designed to ensure consistent encryption in transit and at rest across the product.</p></td></tr></tbody></table>

*That completes this module.*

Next module

Previous module