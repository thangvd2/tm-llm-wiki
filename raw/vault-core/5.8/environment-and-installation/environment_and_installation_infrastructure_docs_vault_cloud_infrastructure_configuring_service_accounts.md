---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_service_accounts"
title: "Configuring Service Accounts"
scraped_at: "2026-06-16T15:22:45.870Z"
images: 0
---

# Configuring Service Accounts

chat\_bubble

The information in this section applies only to clients who use the FPS payment scheme via the Payments Hub (sections for *Configuring the ph-uk-file-processor service*, *Cloud API authentication*, and *Using workload identities with GCP*). You do not need to follow this configuration guidance if you will not use it.

Some Vault Core components require resources and access to cloud provider APIs in order to be able to operate. Below are the services, their resource dependencies and the permissions that they require:

   
| Deployment name | Resources | AWS permissions | GCP permissions |
| --- | --- | --- | --- |
| 
`ph-uk-file-processor`

 | 

Storage Bucket

 | 

\-(not supported yet)

 | 

`roles/storage.objectViewer`

 |

chat\_bubble

You can find general information about components in the [Installing or Upgrading Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault) section of the TMComponent Operator Guide.

Depending on the service and the provider, you might need to deploy a service account token in a specific path in HashiCorp Vault. Alternatively, you might be able to create workload identities for them if you are deploying your Vault Core instance on GCP (Google Cloud Platform).

The following service can be configured to use a GCP workload identity:

 
| Deployment name | Service Account name |
| --- | --- |
| 
`ph-uk-file-processor`

 | 

`ph-uk-file-processor`

 |

chat\_bubble

If you want to use workload identities on GCP, see [Configuring the ph-uk-file-processor](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_service_accounts#configuring_the_phukfileprocessor_service). You should also check the [TMComponent Operator Guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide) for information about any other resources that might need to be deployed or modified inside the Kubernetes cluster.

## [](#configuring_the_ph_uk_file_processor_service "Copy link to heading")Configuring the ph-uk-file-processor service

You will need to configure the `ph-uk-file-processor` service so that it can use the resources and access the storage buckets that it requires in order to operate.

### [](#storage_bucket_requirements "Copy link to heading")Storage Bucket requirements

This deployment requires special files to be located in the storage buckets that it will access. These files need to be located in the root of the storage bucket.

The service requires only read access to the storage bucket.

#### [](#ph_uk_file_processor "Copy link to heading")ph-uk-file-processor

You need to download the following files:

-   Modulus Weight Table Data file (`valacdos.txt`) - a free download from [Vocalink Tools: MWTD](https://www.vocalink.com/tools/modulus-checking/)
    
-   EICSD file (`report.xml`) - you can download it for a fee from [Vocalink Tools: EISCD](https://www.vocalink.com/tools/extended-industry-sort-code-directory/).
    

### [](#configuring_cloud_api_authentication "Copy link to heading")Configuring Cloud API authentication

There are two ways to configure the service to access the storage bucket:

1.  Adding the service account credentials JSON document to the payment-hub-secrets file.
    
2.  Using Workload Identities (when using GCP as your service provider).
    

#### [](#adding_service_account_credentials_to_the_payment_hub_secrets_file "Copy link to heading")Adding service account credentials to the payment-hub-secrets file

1.  Add the service account credentials JSON document to: `secret/{instance}/payment-hub-secrets`
    
2.  Configure the bucket(s) that the service will use and ensure that it has access.
    
3.  Compile the JSON document with the service account credentials. Example only:
    

#### [](#using_workload_identities_with_gcp "Copy link to heading")Using Workload Identities with GCP

You can use Workload Identities if you are using GCP as your cloud provider.

1.  Create the GCP service accounts that you will manually add the annotation to.
    
2.  Once Vault Core has finished installing, add the following annotation to the Kubernetes service account of the deployment:
    
    `iam.gke.io/gcp-service-account: <service_account_email>`
    
3.  Consult the [table that maps the deployments to their service accounts](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_service_accounts) to find which ones you need to annotate.