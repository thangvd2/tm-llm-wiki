---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/applications/processing-groups/installation"
title: "Installation"
scraped_at: "2026-06-17T15:55:29.842Z"
images: 0
---

# Installation

Vault Bridge does not come pre-installed with any Apps. You will need to have followed the steps under [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation) to first upload this App, and already have a Vault Core External System running prior to this guide. See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-ext-sys) for how to add an External System.

Assuming you have Vault Core External System added, you will need to add some Credentials, and an Integration Configuration named `bridge-vault-processing-groups-app` with specific values for Vault Processing Groups to work.

## [](#requirements "Copy link to heading")Requirements

Vault Processing Groups is only available on Vault Bridge against Vault Core with version 5.8 or above.

### [](#configuring_vault_core_oidc_authentication "Copy link to heading")Configuring Vault Core OIDC Authentication

Please follow the instructions [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication).

info

Make sure to use the same Identity Provider across both Vault Core and Vault Bridge.

### [](#setting_up_vault_core_roles "Copy link to heading")Setting up Vault Core Roles

Your Vault Core Roles should have the following scopes:

  
| Scope | Resource | Operations |
| --- | --- | --- |
| 
core.accounts:read

 | 

Account

 | 

View

 |
| 

core.accounts:create

 | 

Account

 | 

Create

 |
| 

core.processing\_groups:read

 | 

Processing Group

 | 

View

 |
| 

core.processing\_groups:create

 | 

Processing Group

 | 

Create

 |
| 

core.processing\_groups:update

 | 

Processing Group

 | 

Edit

 |

lightbulb

Using the `:create` and `:update` suffixed scopes provides more granular permissions for `Create`, and `Edit` operations. The `:write` suffixed scope grants permission to perform both `Create`, and `Edit` actions against a resource.

Please follow the instructions [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication#setting_up_product_based_access_control_for_the_vault_accounts_app) if you wish to set up Product-based access control.

## [](#adding_a_credential "Copy link to heading")Adding a Credential

An Integration Config named `bridge-vault-processing-groups-app` must be created.

You need to set up this Integration Configuration to use a:

-   Vault Core External System and,
    
-   Auth Header Pass through Credential.
    

If you are unsure what this means or how to do this, please refer to this [link](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials).