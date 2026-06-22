---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/object_storage"
title: "Object Storage"
scraped_at: "2026-06-17T15:54:43.648Z"
images: 0
---

# Object Storage

Vault Bridge requires an Object Storage (i.e. S3 or GCS) bucket in order to function. The client is responsible for provisioning the bucket and granting the necessary access as part of the installation process.

High-level overview of the process:

-   Create the bucket
    
-   Create roles and permissions for the bucket
    
-   Configure values.yaml
    

These steps are required to be completed before you run the Vault Installer.

## [](#create_a_bucket "Copy link to heading")Create a bucket

Using your Cloud Service Provider’s web UI or command line tool create a bucket, giving it whatever name you wish.

info

Note that this step is not strictly required and you can use an existing Bucket. Vault Bridge will only read & write from the configured prefix (enforced by permissions defined below) and as such you can use the same bucket for multiple Apps.

## [](#create_role_and_grant_permission "Copy link to heading")Create role and grant permission

Vault Bridge currently has one deployment that requires permissions to read/write files in the configured bucket and under the configured prefix. The setup will differ depending on your chosen Cloud Service Provider.

In this guide, you can find examples with `{PLACEHOLDERS}`. You must replace the `{PLACEHOLDERS}`, including the braces/brackets that indicate them, with the correct values as indicated and/or for your setup.

Here is a quick key to the placeholder values and what they represent.

-   `{AWS_ACCOUNT_ID}`: The AWS Account ID.
    
-   `{ACCOUNT_NAME}`: The CSP Account name (Account Name on AWS or GCP Project ID on GCP).
    
-   `{GCP_PROJECT_NUMBER}`: Your numerical Google Cloud project number.
    
-   `{OIDC_PROVIDER}`: The OIDC (OpenID Connect) provider you are using on AWS.
    
-   `{CLUSTER_NAME}`: The Kubernetes cluster name of the Vault Bridge instance.
    
-   `{NAMESPACE}`: The Kubernetes namespace of the Vault Bridge instance where you will later install Vault Bridge.
    
-   `{BUCKET_NAME}`: The name of the bucket you are using.
    
-   `{BUCKET_KEYSPACE}`: The common prefix under which all data for this Bridge instance will be stored in this bucket. This must be the same value as the one you will later set in `values.yaml` under `common.object_storage.keyspace`. Information on `values.yaml` can be found [in this guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation#generate_the_values_file). Vault Bridge will automatically prefix this with `tm/`, so do not include `tm/` in your value here. You can read more about this in the [configure values.yaml section](#configure_values_yaml).
    

### [](#aws "Copy link to heading")AWS

Create the IAM role that will be used to grant Bridge the required permissions. The name of the role must be `configuration-{NAMESPACE}`, such that the resulting ARN will be `arn:aws:iam::{AWS_ACCOUNT_ID}:role/configuration-{NAMESPACE}`.

Create an IAM policy that will be later attached to the role. Keep note of the created ARN as you will require it later.

Then attach the policy to the role.

This will ensure Bridge can assume the AWS IAM role that has access to the correct part of the S3 bucket.

### [](#gcp "Copy link to heading")GCP

Create an [IAM policy](https://cloud.google.com/storage/docs/access-control/using-iam-permissions) binding for the bucket. Save the following policy condition file on your computer called `condition.json`, you will use it in the next step.

And then apply the policy to your bucket:

This will ensure Bridge has access to the correct part of the GCS bucket.

## [](#configure_values_yaml "Copy link to heading")Configure values.yaml

Once the bucket is created and the permissions are set, you have everything you will later need to specify the required settings in your `values.yaml` file. This is done later as part of the [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation). You can read more about values.yaml in [this guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation#generate_the_values_file).

In your values, ensure you have set the `common.object_store.url` and `common.object_store.keyspace` values. The URL must include the protocol schema so Bridge can identify the type of Bucket it is (i.e. `s3://` or `gs://`). The keyspace should be an identifier for your logical Bridge instance. This could be the namespace, however it is recommended this name is something more agnostic. This will allow, in the future, the data to be shared between active and passive instances of Bridge.