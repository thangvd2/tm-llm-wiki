---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/company_policies_and_procedures/vault_core_compatibility_policy"
title: "Vault Core compatibility policy"
scraped_at: "2026-06-17T05:17:33.157Z"
images: 0
---

# Vault Core compatibility policy

[Download PDF](/policy/latest/EN/resources/vault_core_compatibility_policy.pdf)

The following policy describes how Thought Machine maintains compatibility with the open source third-party dependencies that Vault Core relies upon. Thought Machine evolves on an ongoing basis to ensure that Vault Core remains operational with the versions of these third-party dependencies that it supports.

chat\_bubble

A version of a dependency is considered supported where the third party responsible for its development continues to provide security patches or bug fixes as a part of its open-source support. As a result, there will be a backwards-compatible patch or minor release. This applies to both third-party organisations and projects, open source or not.

## [](#definition_of_terms "Copy link to heading")1\. Definition of Terms

 
| Term | Description |
| --- | --- |
| 
Compatibility

 | 

Vault Core is said to be compatible with an infrastructure component when it has been successfully installed and its APIs are fully operational within that specified environment.

 |
| 

Vault Core infrastructure components

 | 

The infrastructure components currently in scope of compatibility testing are Kubernetes, Kafka, HashiCorp Vault, Istio, PostgreSQL and OpenShift.

 |
| 

Major release

 | 

Refers to the broad industry practice of releasing new features, new architecture or large changes to a component. Major release X is normally denoted as `X.Y`.

 |
| 

Minor or patch release

 | 

Refers to the broad industry practice of releasing small functional changes or vulnerability fixes to a component which are backwards-compatible. These releases are normally denoted as `X.Y.Z`.

 |
| 

Certified Environment (CE)

 | 

A window of release versions for each infrastructure component that is compatible with Vault Core. For example, Kubernetes 1.31, 1.32 and 1.33 is the Certified Environment for Vault Core 5.7.

 |

## [](#compatibility_policy_description_for_vault_core_infrastructure "Copy link to heading")2\. Compatibility policy description for Vault Core infrastructure

Thought Machine performs compatibility tests using the latest Vault Core release and provides a [Certified Environment](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/infrastructure_and_installation_guides/vault_cloud_infrastructure/vault_compatibility_policy#about_the_certified_environment_ce_for_vault) for infrastructure components.

-   Thought Machine provides a set of guarantees for the CE of each infrastructure component: Thought Machine tests a new Vault Core release against the latest major version of each infrastructure component within 6 months of that major version being Generally Available (GA). This means that a major version of an infrastructure component will enter the CE within 6 months of its release.
    
-   With each release of Vault Core, the CE will overlap with the previous two CEs. This means that there will be at least one compatible infrastructure version across three CEs.
    
-   Thought Machine supports up to three major release versions of an infrastructure component at any given time.
    

Minor releases between certified major releases are included by default in the infrastructure component’s CE as they are treated as backwards-compatible, in line with industry standards.

## [](#compatibility_policy_exception_for_vault_core_infrastructure "Copy link to heading")3\. Compatibility policy exception for Vault Core infrastructure

Thought Machine does not guarantee or support Vault Core compatibility for infrastructure components that are no longer supported by the vendor, such as end-of-life versions.

New versions of Vault Core will not be compatible with older, unsupported versions of infrastructure components. A vendor may drop support for a component version between Vault Core minor releases. In such cases, Thought Machine will attempt to provide clients with as much notice as possible. Clients are discouraged from using unsupported infrastructure versions as they may contain unpatched security vulnerabilities or significant bugs.

If there are compatibility issues between two versions of a component, Thought Machine will support the CE with the widest support coverage provided by the vendor.

A new minor release of Vault Core might not be compatible with in-support infrastructure components. This could happen to take advantage of new features in newer versions of the infrastructure, while still ensuring overlapping CEs.

## [](#client_advisory_for_vault_core_infrastructure "Copy link to heading")4\. Client advisory for Vault Core infrastructure

Clients are encouraged to upgrade to the latest Vault Core version and maintain their infrastructure versions in line with the Certified Environment (CE) to be assured of ongoing compatibility.

Before deploying any change to Production, clients must perform testing in Non-Production environments to validate Vault Core compatibility against their own infrastructure stacks and control implementations.

Clients must not use infrastructure components that have reached end-of-life or are otherwise unsupported by the vendor. Thought Machine is not in control of the vendor release or deprecation lifecycle.

### [](#out_of_scope_of_the_compatibility_policy "Copy link to heading")4.1. Out of scope of the compatibility policy

-   Performance testing of infrastructure components against Vault Core
    
-   The testing of Vault Core against specific architectural deployments of infrastructure, such as stretched clusters. Thought Machine publishes separate performance reports which contain information about the infrastructure versions used to perform the tests.
    

### [](#output "Copy link to heading")4.2. Output

Clients receive information about updates to the Vault Core CE with every Vault Core release in the form of the Certified Environment matrix.

## [](#about_the_certified_environment_ce_for_vault_core "Copy link to heading")5\. About the Certified Environment (CE) for Vault Core

Each version of Vault Core is compatible with a set of versioned dependencies. This set of versioned dependencies is called the Certified Environment (CE). Each CE will contain a window of versions for each dependency; we aim to maximise the overlap between successive CEs. We will provide a Certified Environment (CE) with each Vault Core release.

### [](#vault_core_compatibility_guarantees "Copy link to heading")5.1. Vault Core compatibility guarantees

Thought Machine makes the following compatibility guarantees for each version of Vault and its Certified Environment (CE):

-   Each version of Vault Core is compatible with a window of contiguous software versions (the CE applicable to that Vault Core version)
    
-   With each minor release of Vault Core, the current CE will overlap with the previous two CEs, and the overlap must:
    
    -   Include at least one common version across all CEs
        
    -   Apply to all third-party dependencies
        
    
-   New versioned dependencies may be added with each new minor Vault Core release (the CE may be expanded)
    
-   Older versions may be removed with each new major Vault Core release (the CE may be reduced)