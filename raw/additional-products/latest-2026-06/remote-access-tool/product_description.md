---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/remote-access-tool/product_description"
title: "Remote Access Tool product description"
scraped_at: "2026-06-17T15:52:48.582Z"
images: 0
---

# Remote Access Tool product description

## [](#overview "Copy link to heading")Overview

This product description describes the following for Remote Access Tool Version 0.1.0.

-   The capabilities that are provided by Remote Access Tool
    
-   An overview of the Infrastructure required to run Remote Access Tool
    

Refer to [Vault Portal](/additional-product-offerings/latest/EN/remote-access-tool) for further details on installation, usage patterns, and architecture.

## [](#definitions "Copy link to heading")Definitions

 
| Term | Definition |
| --- | --- |
| 
Remote Access Tool

 | 

The name of the Thought Machine’s remote access tool product

 |
| 

Istio

 | 

The service mesh used by Thought Machine

 |
| 

Egress Traffic

 | 

Traffic leaving a network domain

 |
| 

S3

 | 

Object storage facilitated by AWS

 |
| 

SSM

 | 

AWS' Systems Manager service

 |
| 

ECR

 | 

AWS' Elastic Container Registry

 |

## [](#remote_access_tool_capabilities "Copy link to heading")Remote Access Tool capabilities

The following describes the capabilities available to a Thought Machine engineer accessing a bank-hosted environment using Remote Access Tool.

### [](#network_access "Copy link to heading")Network access

Remote Access Tool runs on-cluster and only has access to the on-cluster network. This access is heavily restricted with access granted to only two endpoints:

-   The Kubernetes API Server, to query information about Kubernetes resources running on the cluster. This is accessed using the Kubernetes Service resource addressable as below.
    

-   The Thanos Query frontend, to examine Prometheus metrics scraped from a running Vault Core instance. This is accessed using the Kubernetes Service resources addressable as below.
    

### [](#resource_access "Copy link to heading")Resource access

Thought Machine engineers using Remote Access Tool will have read-only access to the following resources.

-   Kubernetes API resources authorised by the view ClusterRole at the cluster scope. This is to gain insight into the status of Kubernetes resources on the cluster.
    
    -   Bank hosted users may supply a custom ClusterRole that is a superset of the view role. Audit of available API resources is then a bank responsibility.
        
    
-   Application and Infrastructure Metrics exposed by Thought Machine applications and scraped from Prometheus instances shipped as part of Thought Machine products.
    
    -   Grafana is run on the Thought Machine side of the solution; this allows Thought Machine engineers to easily aggregate data across associated queries.
        
    -   Remote Access Tool does not access Grafana instances running on the bank hosted cluster.
        
    
-   Application logs exposed by Thought Machine products to ascertain runtime information about the health of the product.
    
    -   In the case application logs should not be viewed by Thought Machine Engineers, please refer to the guidance on supplying [Custom RBAC bindings](/additional-product-offerings/latest/EN/remote-access-tool/installation_guide#customisations_optional) on the Thought Machine Vault Portal.
        
    

### [](#session_audit "Copy link to heading")Session audit

Thought Machine audits its engineer’s Remote Access Tool usage by collecting a screen capture of the session.

Thought Machine’s solution pushes recordings automatically to an S3 bucket hosted in Thought Machine’s AWS estate where it is persisted for 30 days, unless otherwise required.

Thought Machine can share the recording with the client at the client’s request.

## [](#infrastructure_remote_access_tool "Copy link to heading")Infrastructure: Remote Access Tool

The following section details the infrastructure requirements of the Remote Access Tool solution.

### [](#installation_and_setup "Copy link to heading")Installation and setup

You use Remote Access Tool to debug running instances of Thought Machine products; its infrastructure prerequisites are the same as those listed in the [Vault Core Product Description](/policy/latest/EN/product_descriptions) document.

For the installation guide and details of any prerequisites, refer to the [Thought Machine Vault Portal](/additional-product-offerings/latest/EN/remote-access-tool/installation_guide).