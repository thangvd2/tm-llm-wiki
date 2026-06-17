---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/applications/accounts/installation"
title: "Installation"
scraped_at: "2026-06-17T05:16:24.431Z"
images: 0
---

# Installation

Vault Bridge does not come pre-installed with any Apps. You will need to have followed the steps under [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation) to first upload this App, and already have a Vault Core External System running prior to this guide. See [here](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-ext-sys) for how to add an External System.

Assuming you have Vault Core External System added, you will need to add some Credentials, and an Integration Configuration named `bridge-vault-accounts-app` with specific values for Vault Accounts to work.

## [](#requirements "Copy link to heading")Requirements

Vault Accounts is only available on Vault Bridge against Vault Core with version 5.8 or above.

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

core.accounts:update

 | 

Account

 | 

Edit

 |
| 

core.account\_attribute\_values:read

 | 

Account Attributes

 | 

View

 |
| 

core.adjustments:read

 | 

Adjustments

 | 

View

 |
| 

core.balances:read

 | 

Balances

 | 

View

 |
| 

core.customers:read

 | 

Customers

 | 

View

 |
| 

core.customers:create

 | 

Customers

 | 

Create

 |
| 

core.derived\_parameter\_values:read

 | 

Derived Parameter Value

 | 

View

 |
| 

core.flags:read

 | 

Flags

 | 

View

 |
| 

core.flags:create

 | 

Flags

 | 

Create

 |
| 

core.flags:update

 | 

Flags

 | 

Edit

 |
| 

core.flag\_definitions:read

 | 

Flag Definition

 | 

View

 |
| 

core.payment\_devices:read

 | 

Payment Device

 | 

View

 |
| 

core.payment\_device\_links:read

 | 

Payment Device Link

 | 

View

 |
| 

core.payment\_device\_links:create

 | 

Payment Device Link

 | 

Create

 |
| 

core.parameter\_values:read

 | 

Parameter Value

 | 

View

 |
| 

core.parameter\_values:create

 | 

Parameter Value

 | 

Create

 |
| 

core.parameter\_value\_hierarchy\_nodes:read

 | 

Parameter Value Hierarchy Node

 | 

View

 |
| 

core.posting\_instruction\_batches:read

 | 

Posting Instruction Batch

 | 

View

 |
| 

core.posting\_instruction\_batches:create

 | 

Posting Instruction Batch

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

core.products:read

 | 

Products

 | 

View

 |
| 

core.product\_versions:read

 | 

Product Version

 | 

View

 |
| 

core.restriction\_sets:read

 | 

Restriction Set

 | 

View

 |
| 

core.restriction\_sets:create

 | 

Restriction Set

 | 

Create

 |
| 

core.restriction\_sets:update

 | 

Restriction Set

 | 

Edit

 |
| 

core.restriction\_set\_definition\_versions:read

 | 

Restriction Set Definition Version

 | 

View

 |
| 

core.schedules:read

 | 

Schedule

 | 

View

 |
| 

core.vault\_versions:read

 | 

Vault Version

 | 

View

 |

lightbulb

Using the `:create` and `:update` suffixed scopes provides more granular permissions for `Create`, and `Edit` operations. The `:write` suffixed scope grants permission to perform both `Create`, and `Edit` actions against a resource.====

Please follow the instructions [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication#setting_up_product_based_access_control_for_the_vault_accounts_app) if you wish to set up Product-based access control.

\== Adding a Credential

An Integration Config named `bridge-vault-accounts-app` must be created.

You need to set up this Integration Configuration to use a:

-   Vault Core External System and,
    
-   Auth Header Pass through Credential.
    

If you are unsure what this means or how to do this, please refer to this [link](/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation#add-credentials).