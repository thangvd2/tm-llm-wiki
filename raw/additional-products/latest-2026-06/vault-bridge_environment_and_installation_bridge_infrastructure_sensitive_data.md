---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/sensitive_data"
title: "Sensitive Data"
scraped_at: "2026-06-17T05:16:04.299Z"
images: 0
---

# Sensitive Data

Vault Bridge stores [credentials](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations) in a secure way. It leverages the Cloud Service Provider’s (CSP) Key Management Service (KMS) to encrypt & decrypt this data. The client is responsible for provisioning the KMS resources and granting the necessary access as part of the installation process.

High-level overview of the process:

-   Create the KMS key(s)
    
-   Create roles and permissions for the key(s)
    
-   Configure values.yaml
    

These steps are required to be completed before you run the Vault Installer.

## [](#create_kms_keys_and_grant_permissions "Copy link to heading")Create KMS key(s) and grant permissions

Using your Cloud Service Provider’s web UI or command line tool create the KMS resources (see the CSP specific instructions below) in accordance with the naming rules specified below.

info

You have to create one KMS key (and other related resources) for each tenant that is configured in Vault Bridge. Typically this will be just one; `default_tenant`.

Vault Bridge currently has one deployment that requires permissions to encrypt/decrypt sensitive data. The setup will differ depending on your chosen CSP.

In this guide, you can find examples with `{PLACEHOLDERS}`. You must replace the `{PLACEHOLDERS}`, including the braces/brackets that indicate them, with the correct values as indicated and/or for your setup.

Here is a quick key to the placeholder values and what they represent.

-   `{ACCOUNT_NAME}`: The CSP Account name (Account Name on AWS or GCP Project ID on GCP).
    
-   `{GCP_PROJECT_NUMBER}`: Your numerical Google Cloud project number.
    
-   `{NAMESPACE}`: The Kubernetes namespace of the Vault Bridge instance where you will later install Vault Bridge.
    
-   `{KEYSPACE}`: The common prefix under which the encryption key(s) will reside. This should at the very least contain the product instance identifier (for example, "vault-bridge-prod"). You can read more about this in the [configure values.yaml section](#configure_values_yaml).
    
-   `{TENANT_ID}`: The chosen ID of the tenant you will be using. We recommend using `default_tenant`. This must match the tenant ID(s) you will later set in `values.yaml` under `bridge.auth.issuers`. You can read more about values.yaml in [this guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation#generate_the_values_file).
    

### [](#aws "Copy link to heading")AWS

Create a [AWS KMS](https://docs.aws.amazon.com/kms/) key for each tenant. Keep note of the created ARN and ID as you will require them later. Create a KMS key alias for each KMS key. The KMS key alias must have the name in the format `alias/tm/{KEYSPACE}/{TENANT_ID}`.

The next step assumes that you have already created the IAM role `configuration-{NAMESPACE}` as part of the [Object Storage](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/object_storage) installation steps. With the role created, create an IAM policy that will be later attached to the role. Keep note of the created ARN as you will require it later.

Then attach the policy to the role.

This will ensure Bridge can assume the AWS IAM role that has access to encrypt/decrypt using the created key(s).

### [](#gcp "Copy link to heading")GCP

Create a [GCP KMS](https://cloud.google.com/security/products/security-key-management) keyring which has to have the name `tm_{KEYSPACE}`. Then, for each tenant, create a KMS key with the name set to the `{TENANT_ID}` and create it in the previously created KMS key ring. Keep note of the created `KMS_KEY_ID` which you will need to create the IAM policy binding.

Create an IAM policy binding for the KMS key.

This will ensure Bridge can encrypt/decrypt sensitive data using the created key(s).

## [](#configure_values_yaml "Copy link to heading")Configure values.yaml

Once the KMS resources are created and permissions set, you have everything you need to specify the required settings in your `values.yaml` before then running the installer (ensuring any other prerequisites are fulfilled).

In your values, ensure you have set all `common.sensitive_data.encryption.*` values. The provider must be one of `gcp` or `aws`. The keyspace should be an identifier for your logical Bridge instance. This could be the namespace, however it is recommended this name is something more agnostic. This will allow, in the future, the data to be shared between active and passive instances of Bridge. `account_id` is the name of your CSP account, and `region` is the region in which you have configured your KMS resources.