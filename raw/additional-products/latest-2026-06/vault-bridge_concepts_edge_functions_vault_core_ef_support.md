---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/edge_functions/vault_core_ef_support"
title: "Support of Vault Core Edge Functions"
scraped_at: "2026-06-17T05:14:49.718Z"
images: 0
---

# Support of Vault Core Edge Functions

info

This setup is **mandatory** for any Edge Functions utilising the Vault Core Edge Functions `Session` object. If these steps are not completed, the [creation](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#_bridge_v1_edge_functions_EdgeFunctionVersion_CreateEdgeFunctionVersion) of your Edge Function Version will be rejected with an `INTEGRATION_CONFIG_NOT_FOUND` error.

If you have existing Edge Functions that use the Vault Core Edge Functions `Session` object to interact with the Vault Core API (e.g., `Session(VaultAPI.CORE)`), Vault Bridge provides backwards compatibility to ensure these functions continue executing successfully.

To enable this support, you must configure a reserved Integration Configuration and, if using the new API libraries, declare the Vault Core API version in your script.

## [](#step_1_declare_the_vault_core_api_version "Copy link to heading")Step 1: Declare the Vault Core API Version

If your Vault Core Edge Function is utilising the `vc_api` library, you must explicitly declare the target Vault Core API version at the top of your script.

The `vc_api_version` should match the Vault Core version that you are using. If you later upgrade your Vault Core instance to a newer minor version but do not update this variable, your Edge Function will continue to work. However, the `vc_api` library will only be able to utilise the features and endpoints available in the specific Vault Core version declared in your script.

Add the `vc_api_version` global variable, for example, just below the `edge_api_version`:

## [](#step_2_adding_a_credential "Copy link to heading")Step 2: Adding a Credential

Before creating the Integration Configuration for the Vault Core Edge Functions session, you need a Credential that grants the necessary permissions to access the Vault Core endpoints your Vault Core Edge Functions interact with.

If you are unsure how to do this, see [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials) for how to add Credentials.

Depending on your Vault Core instance’s authentication mechanism:

-   **JWTs:** You will need to use a credential of type `OAuth Client Credentials`. Ensure the scopes provided cover all the endpoints your Vault Core Edge Functions will call.
    
-   **Service Account Tokens:** You will need to provision a Service Account Token with access to the required endpoints, then create a credential of type `Static Token Credentials` with that token.
    

## [](#step_3_adding_the_vault_core_edge_functions_session_integration_configuration "Copy link to heading")Step 3: Adding the Vault Core Edge Functions Session Integration Configuration

Vault Bridge automatically routes HTTP requests originating from Vault Core Edge Functions `Session` objects to a reserved Integration Configuration ID.

You must create a new Integration Configuration with the exact ID `edge-function-session-support`.

 
| Field | Value |
| --- | --- |
| 
**Integration Configuration ID**

 | 

`edge-function-session-support`

 |
| 

**External System ID**

 | 

Select your Vault Core External System ID.

 |
| 

**Credential ID**

 | 

Select the Credential ID you created in Step 2.

 |

chat\_bubble

It is imperative that the Integration Configuration ID is exactly `edge-function-session-support`. If this ID is incorrect or missing, any Edge Function using the Vault Core Edge Functions `Session` object will fail to execute successfully.

See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-int-config) for detailed instructions on how to add Integration Configurations.