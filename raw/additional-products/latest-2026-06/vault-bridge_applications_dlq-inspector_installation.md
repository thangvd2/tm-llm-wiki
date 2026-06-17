---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/applications/dlq-inspector/installation"
title: "Installation"
scraped_at: "2026-06-17T05:16:29.429Z"
images: 0
---

# Installation

Vault Bridge does not come pre-installed with any Apps. You will need to have followed the steps under [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation) to first upload this App, and already have a Vault Core External System running prior to this guide. See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-ext-sys) for how to add an External System.

Assuming you have Vault Core External System added, you will need to add some Credentials, and an Integration Configuration named `bridge-vault-dlq-inspector-app` with specific values for DLQ Inspector to work.

## [](#requirements "Copy link to heading")Requirements

DLQ Inspector is only available on Vault Bridge against Vault Core with version 5.9 or above.

### [](#configuring_vault_core_oidc_authentication "Copy link to heading")Configuring Vault Core OIDC Authentication

Please follow the instructions [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication).

info

Make sure to use the same Identity Provider across both Vault Core and Vault Bridge.

### [](#setting_up_vault_core_roles "Copy link to heading")Setting up Vault Core Roles

Your Vault Core Roles should have the following scopes:

chat\_bubble

`Vault Version: View` is a required permission for all roles for access to the DLQ Inspector App.

  
| Resource | Operation | Scope |
| --- | --- | --- |
| 
DLQ Topic

 | 

View

 | 

core.dlq\_messages:read

 |
| 

DLQ Topic

 | 

Edit

 | 

core.dlq\_messages:execute

 |
| 

Vault Version

 | 

View

 | 

core.vault\_versions:read

 |

## [](#dlq_topic "Copy link to heading")DLQ Topic

`View` (`core.dlq_messages:read`) - Grants users access to DLQ Inspector, DLQ Topic message, and all message content. The users are exposed to sensitive data, which may include personally identifiable information (PII). As such, this permission is only suitable for users authorised to access **any** Vault Core data. The user cannot republish messages.

`Edit` (`core.dlq_messages:execute`) - Grants users the power to remediate issues by republishing DLQ messages. A user with this permission can take this action across all DLQ topics affecting any resource in Vault Core. This permissions should only be granted to users who are authorised to make changes to Vault Core.

Please follow the instructions [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication#setting_up_product_based_access_control_for_the_vault_accounts_app) if you wish to set up Product-based access control.

## [](#adding_a_credential "Copy link to heading")Adding a Credential

An Integration Config named `bridge-vault-dlq-inspector-app` must be created.

You need to set up this Integration Configuration to use a:

-   Vault Core External System and,
    
-   Auth Header Pass through Credential.
    

If you are unsure what this means or how to do this, please refer to this [link](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials).