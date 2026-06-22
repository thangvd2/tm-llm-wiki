---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/applications/product-management/installation"
title: "Installation"
scraped_at: "2026-06-17T15:55:02.082Z"
images: 0
---

# Installation

Vault Bridge does not come pre-installed with any Apps. You will need to have followed the steps under [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation) and already have a Vault Core External System running prior to this guide. See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-ext-sys) for how to add an External System.

Assuming you have Vault Core External System added, you will need to add some Credentials, as well as a few Integration Configurations with specific values for the Product Management App to work.

## [](#adding_a_credential "Copy link to heading")Adding a Credential

If you are unsure how to do this, see [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials) for how add Credentials.

### [](#for_bridge_product_management_app_integration_configuration "Copy link to heading")For `bridge-product-management-app` Integration Configuration

If your Vault Core instance is using JWTs you will need to use a credential of type `OAuth Client Credentials` with the following scopes.

 
| Permissions | Purpose |
| --- | --- |
| 
core.vault\_versions:read

 | 

To check if your Vault Core version is supported by the App

 |
| 

core.products:read

 | 

To display products from your Vault Core instance

 |
| 

core.product\_versions:read

 | 

To display product versions and their parameter values

 |
| 

core.product\_versions:write

 | 

To create new product versions, and update product parameters

 |

error

The `/v1/product-versions/{product_version_id}:paramTimeseries` endpoint previously required the `core:read` scope instead of the expected `core.product_version:read` scope. This issue has been fixed in the latest patch version of every supported Vault Core minor version. There is no longer a need to include `core:read` in credentials for this endpoint, and doing so is discouraged— especially in production—since it grants broad read access to all Vault Core API resources.

If you’re using an older version of Vault Core, you may still encounter this behavior. To ensure the endpoint works as expected without needing `core:read`, please verify that you’re running the latest patch version of your Vault Core minor version.

If your Vault Core instance is using Service Account Tokens, you will need to provision a Service Account Token with access to the following endpoints, then create a credential of type `Static Token Credentials` with that token.

 
| Method | Endpoint |
| --- | --- |
| 
GET

 | 

`/v1/products`

 |
| 

GET

 | 

`/v1/products:batchGet`

 |
| 

GET

 | 

`/v1/product-versions`

 |
| 

POST

 | 

`/v1/product-versions`

 |
| 

GET

 | 

`/v1/product-versions:batchGet`

 |
| 

GET

 | 

`/v1/product-versions/{product_version_id}:paramTimeseries`

 |
| 

PUT

 | 

`/v1/product-versions/{product_version_id}:updateParams`

 |
| 

GET

 | 

`/v1/vault-version`

 |

### [](#for_bridge_product_management_hydration_integration_configuration "Copy link to heading")For `bridge-product-management-hydration` Integration Configuration

If your Vault Core instance is using JWTs you will need to use a credential of type `OAuth Client Credentials` with the following scopes.

 
| Permissions | Purpose |
| --- | --- |
| 
core.accounts:read

 | 

To be able to replicate accounts from Core to Bridge

 |
| 

core.flags:read

 | 

To be able to replicate flags from Core to Bridge

 |

If your Vault Core instance is using Service Account Tokens, you will need to provision a Service Account Token with access to the following endpoints, then create a credential of type `Static Token Credentials` with that token.

 
| Method | Endpoint |
| --- | --- |
| 
GET

 | 

`/v2/accounts`

 |
| 

GET

 | 

`/v1/flags`

 |

### [](#for_bridge_product_management_conversion_job_manager_integration_configuration "Copy link to heading")For `bridge-product-management-conversion-job-manager` Integration Configuration

If your Vault Core instance is using JWTs you will need to use a credential of type `OAuth Client Credentials` with the following scopes.

 
| Permissions | Purpose |
| --- | --- |
| 
core.accounts:write

 | 

To be able to convert accounts between products.

 |

If your Vault Core instance is using Service Account Tokens, you will need to provision a Service Account Token with access to the following endpoints, then create a credential of type `Static Token Credentials` with that token.

 
| Method | Endpoint |
| --- | --- |
| 
PUT

 | 

`/v2/accounts/{account.id=**}`

 |

### [](#for_bridge_product_management_hydration_streaming_integration_configuration "Copy link to heading")For `bridge-product-management-hydration-streaming` Integration Configuration

This Integration Configuration is used by the Product Management App’s backend services to consume from your Vault Core instance’s Kafka topics. If you have enabled an auth mechanism for your Kafka cluster, you will need to create a credential with the corresponding secrets for that auth mechanism. See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials) for how to add a credential for each supported Kafka auth mechanism.

## [](#adding_integration_configurations "Copy link to heading")Adding Integration Configurations

The Product Management App requires a few Integration Configurations to function properly. Create a separate Integration Config for Integration Config ID in the below table.

For each Integration Config ID, use the Vault Core External System ID and the respective Credential ID you have just created in the above section. See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-int-config) for how add Integration Configurations.

chat\_bubble

It is imperative that all of these integration configuration IDs are used, otherwise you will be missing Product Management functionality. See why Integration Configurations are required [here](/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations#which_integration_configs_are_required).

chat\_bubble

Ensure that the credential ID you use when creating these Integration Configurations matches the corresponding credential that you created in the above section.

 
| Integration Configuration ID | Purpose |
| --- | --- |
| 
bridge-product-management-app

 | 

This is required to allow the front-end to communicate with Vault Core APIs.

 |
| 

bridge-product-management-hydration

 | 

This is required to replicate the accounts from Core onto Bridge.

 |
| 

bridge-product-management-conversion-job-manager

 | 

This is required to enable account conversions from one product to another.

 |
| 

bridge-product-management-hydration-streaming

 | 

This is required to replicate accounts coming from Kafka to Bridge.

 |