---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/trigger_setup"
title: "Edge Functions Trigger Setup"
scraped_at: "2026-06-17T05:14:48.166Z"
images: 0
---

# Edge Functions Trigger Setup

info

**This is the single most important step required to enable Edge Functions Trigger.** A specific Integration Configuration is **mandatory** for creating or updating an Edge Functions Trigger. If this configuration is missing, incorrectly typed, or lacks streaming details, requests to create or update an Edge Functions Trigger will be rejected.

To enable Edge Functions Trigger, Vault Bridge requires a dedicated Integration Configuration that provides the necessary Kafka connection details to your Vault Core instance.

You must create a new Integration Configuration with the exact ID `bridge-edge-function-trigger-execution`.

## [](#step_1_ensure_external_system_requirements "Copy link to heading")Step 1: Ensure External System Requirements

The External System referenced by the Integration Configuration must meet the following criteria:

-   **Type:** It must be a `Vault Core` External System. Third-Party or Vault Payments systems are not supported for this configuration.
    
-   **Streaming API Details:** The `Vault Core` External System Version must have its `streaming_api` (Kafka Cluster) details populated, including at least one broker address.
    

See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-ext-sys) for detailed instructions on how to add an External System.

## [](#step_2_create_the_integration_configuration "Copy link to heading")Step 2: Create the Integration Configuration

Before creating the Integration Configuration, you will need a Credential that provides access to your Vault Core Kafka cluster. If you are unsure how to do this, see [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials) for how to add Credentials.

Once you have the required External System and Credential, create the Integration Configuration with the following details:

 
| Field | Value |
| --- | --- |
| 
**Integration Configuration ID**

 | 

`bridge-edge-function-trigger-execution`

 |
| 

**External System ID**

 | 

Select the ID of your Vault Core External System that contains the Streaming API details.

 |
| 

**Credential ID**

 | 

Select the Credential ID that provides access to your Vault Core Kafka cluster.

 |

chat\_bubble

It is imperative that the Integration Configuration ID is exactly `bridge-edge-function-trigger-execution`.

See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-int-config) for detailed instructions on how to add Integration Configurations.