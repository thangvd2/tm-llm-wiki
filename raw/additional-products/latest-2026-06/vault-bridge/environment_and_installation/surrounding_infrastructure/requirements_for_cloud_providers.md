---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/requirements_for_cloud_providers"
title: "Requirements for cloud providers"
scraped_at: "2026-06-17T15:54:29.716Z"
images: 0
---

# Requirements for cloud providers

Vault Bridge currently supports the following cloud providers. There are a number of requirements for these cloud providers, and some will require you to check and change particular configuration settings.

-   [Google Cloud Platform (GCP)](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/requirements_for_cloud_providers#google_cloud_platform)
    
-   [Amazon Web Services (AWS)](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/requirements_for_cloud_providers#amazon_web_services)
    

## [](#google_cloud_platform "Copy link to heading")Google Cloud Platform

The GCP Project is where Thought Machine Vault Bridge and all associated resources will be deployed.

error

We strongly recommend deploying Vault Bridge into a GCP project not shared with non Thought Machine deployments. There may be problems such as resource collisions if other resources already exist in the project.

 
| Area | Key information |
| --- | --- |
| 
Project user

 | 

Deployment engineers should log in, deploy and enable resources with this user. This will only be used for installation purposes and will not be used during normal operation of Vault Bridge. Required roles are: `roles/storage.admin`, `roles/compute.instanceAdmin`, `roles/compute.networkAdmin`, `roles/container.admin` and `roles/iam.serviceAccountAdmin`.

 |
| 

Docker repositories (GCR)

 | 

You must enable the Container Registry API so that Vault Bridge images can be pulled from the staging repository. These images include Thought Machine Vault Bridge microservices and infrastructure deployment images.

 |
| 

Enabled APIs

 | 

You must enable certain GCP APIs for the installation process to be successful. The full list is: `Compute.googleapis.com`, `Cloudresourcemanager.googleapis.com`, `Iamcredentials.googleapis.com`, `Iam.googleapis.com`, `Container.googleapis.com`, `Runtimeconfig.googleapis.com` and `Deploymentmanager.googleapis.com`. Refer to the [Google documentation about enabling GCP APIs](https://cloud.google.com/apis/docs/getting-started).

 |
| 

Quotas

 | 

IMPORTANT: You must enable APIs before increasing the quotas.The project quota for the number of CPUs must be high enough for the desired region. As a guideline, we recommend a minimum buffer of 100 for a small test environment (e.g. six nodes).The size of production environments depends on a number of factors, including the amount of traffic and number of users. The persistent disk SSD (GB) quota must be increased to 800 GB. Memory quota must be at least 400 GB.

 |

## [](#amazon_web_services "Copy link to heading")Amazon Web Services

The AWS Subaccount is where Thought Machine Vault Bridge and all associated resources will be deployed.

error

We strongly recommend deploying Vault Bridge into an AWS Subaccount not shared with non Thought Machine deployments. There may be problems such as resource collisions if other resources already exist in the project.

 
| Area | Key information |
| --- | --- |
| 
IAM User

 | 

Deployment engineers should log in, deploy and enable resources with this user. This will only be used for installation purposes and will not be used during normal operation of Vault Bridge. Required roles are: `kms:*`, `s3:*`, `dynamodb:*`, `autoscaling:*`, `ec2:*`, `eks:*`, `iam:*` and `ecr:*`.

 |