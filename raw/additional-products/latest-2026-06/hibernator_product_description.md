---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/product_description"
title: "Hibernator Product Description"
scraped_at: "2026-06-17T05:13:57.568Z"
images: 0
---

# Hibernator Product Description

## [](#overview "Copy link to heading")Overview

This product description describes the following for Hibernator:

-   The capabilities that are provided by the Hibernator product
    
-   An overview of the infrastructure required to run Hibernator
    

Details on the specific components of the Hibernator product and information about the APIs are available on the [Vault Portal](/additional-product-offerings/latest/EN/hibernator).

## [](#definitions "Copy link to heading")Definitions

 
| Term | Definition |
| --- | --- |
| 
Hibernator

 | 

The name of the Thought Machine’s Vault Core scaling product

 |
| 

Scaling

 | 

Reducing the resources used by specific workloads or services

 |
| 

Vault or Vault Core

 | 

An instance of the Vault Core product on a bank-hosted basis

 |
| 

Workloads

 | 

The resources required for running Vault Core

 |

## [](#scheduling_capabilities "Copy link to heading")Scheduling Capabilities

### [](#hibernator_schedules "Copy link to heading")Hibernator Schedules

Clients can manage their Hibernator schedules by setting the uptime via a Kubernetes Custom Resource. This informs Hibernator of the time schedule for which to scale up and down the associated Kubernetes workloads and managed database service.

#### [](#characteristics_of_hibernator_schedules "Copy link to heading")Characteristics of Hibernator Schedules

The Kubernetes Custom Resource for managing Hibernator schedules:

-   Allows for specifying of the Vault Core namespace to apply the schedule to
    
-   May be enabled or disabled, providing simple on/off capability
    
-   Supports ad-hoc overriding of the schedule, to extend the uptime window if necessary
    
-   Provides exclusion capabilities to not scale particular resources
    
-   Supports the specifying of a database instance(s) to scale
    

#### [](#hibernator_operator "Copy link to heading")Hibernator operator

Hibernator itself is a Kubernetes operator that watches for changes to Hibernator schedules and interacts with the Vault Core workloads to scale them down:

-   Deployments and StatefulSets in the Vault Core namespace are scaled down to 0 replicas using the Kubernetes API
    
-   The cloud databases are scaled down through supported methods using the cloud service provider API or client libraries (see section Database Scaling Capabilities below for specifics on the methods used)
    

### [](#kubernetes_scaling_capabilities "Copy link to heading")Kubernetes scaling capabilities

The primary workloads to be scaled by Hibernator are the Vault Core workloads managed by Kubernetes. Any Kubernetes Deployments and StatefulSets present in the Vault Core namespace are scaled to 0 replicas, unless they are specified in the Hibernator Schedule exclusion list.

Thought Machine recommends that clients use cluster autoscaling capabilities with their cloud service provider which can horizontally scale the underlying nodes based on the usage. This will ensure that clients can benefit from Hibernator scaling of Kubernetes workloads as their node count will automatically reduce when the environment is scaled down.

As StatefulSets are stateful resources, they are scaled up 30 minutes before and down 30 minutes after the Deployments, to ensure ample time for in-flight requests to complete.

### [](#database_scaling_capabilities "Copy link to heading")Database scaling capabilities

Hibernator uses the cloud service provider’s database API to interact with a managed Vault Core database. Due to the different functionality offered by managed database services, scaling the database is specific to each managed database.

As databases are stateful resources, they are scaled up 30 minutes before and down 30 minutes after the deployments, to ensure there are no in-flight transactions on the database.

#### [](#cloud_sql_scaling "Copy link to heading")Cloud SQL scaling

Cloud SQL is a fully managed database service from GCP. Hibernator scales a Cloud SQL instance by stopping the database, so that it is not running while the Vault Core environment is scaled down. This does not impact the underlying data, as the storage layer is untouched.

#### [](#alloydb_scaling "Copy link to heading")AlloyDB scaling

AlloyDB is a fully managed database service from GCP. Hibernator scales the database to the minimum number of vCPUs possible (2). This does not impact the underlying data, as the storage layer is untouched.

#### [](#rds_scaling "Copy link to heading")RDS scaling

RDS is a fully managed database service from AWS. Hibernator scales an RDS instance by stopping the database, so that it is not running while the Vault Core environment is scaled down. This does not impact the underlying data, as the storage layer is untouched.

#### [](#rds_aurora_scaling "Copy link to heading")RDS Aurora scaling

Aurora is a fully managed database service from AWS. Hibernator scales an Aurora instance by stopping the database, so that it is not running while the Vault Core environment is scaled down. This does not impact the underlying data, as the storage layer is untouched.

#### [](#azure_postgres_flexible_server_scaling "Copy link to heading")Azure Postgres Flexible Server scaling

Flexible Server is a fully managed database service from Azure. Hibernator scales an Flexible Server instance by stopping the database, so that it is not running while the Vault Core environment is scaled down. This does not impact the underlying data, as the storage layer is untouched.

## [](#installation_and_setup "Copy link to heading")Installation and setup

### [](#compatibility "Copy link to heading")Compatibility

Hibernator is compatible with and can be deployed on AWS, GCP, Azure and OpenShift in all regions where the required infrastructure services and components are available.

Hibernator operates on Kubernetes and requires a Kubernetes cluster to install on, with cluster autoscaling capabilities enabled. All other infrastructure prerequisites are the same as those listed in the [Vault Core Product Description](/policy/latest/EN/product_descriptions) document.

### [](#roles_and_permissions "Copy link to heading")Roles and Permissions

Hibernator requires a set of Cloud IAM permissions in order to be able to scale your database(s). This is achieved by using workload identities. For example, you can create a service account in your Cloud Service Provider project then assign the required IAM permissions to it and associate it with Hibernator’s Kubernetes service account.

Hibernator also requires a number of Kubernetes RBAC permissions for the deployment to interact with the Kubernetes API and scale resources directly.

For the installation guide and details of any prerequisites, refer to the [installation instructions](/additional-product-offerings/latest/EN/hibernator/overview/installation) on Vault Portal.