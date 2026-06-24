---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/vault_accounts"
title: "Vault Accounts"
scraped_at: "2026-06-17T15:42:09.470Z"
images: 0
---

# Vault Accounts

You can use the Vault Accounts app to search for a Customer Account and retrieve related resources, edit certain account values, and create new accounts.

## [](#logging_in_and_permissions "Copy link to heading")Logging in and permissions

You need to configure your Identity Provider (IdP) with your Vault Core details to support access to both Core Apps and Operations Dashboard.

chat\_bubble

Vault Accounts allows for clients to set up auth via OIDC in place of SAML. For more information, see [Setting up and configuring OIDC authentication](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication).

### [](#role_permissions "Copy link to heading")Role permissions

 
| Permission resource | Required operations |
| --- | --- |
| 
Account

 | 

View, Create, Edit

 |
| 

Account Attribute

 | 

View

 |
| 

Adjustment

 | 

View

 |
| 

Balance

 | 

View

 |
| 

Balances Live

 | 

View

 |
| 

Customers

 | 

View, Create

 |
| 

Derived Parameter Value

 | 

View

 |
| 

Flags

 | 

View, Create, Edit

 |
| 

Flag Definition

 | 

View

 |
| 

Parameter

 | 

View

 |
| 

Parameter Value

 | 

View, Create

 |
| 

Parameter Value Hierarchy Node

 | 

View

 |
| 

Payment Device

 | 

View, Create, Edit

 |
| 

Payment Device Link

 | 

View, Create

 |
| 

Posting Instruction Batch

 | 

View, Create

 |
| 

Processing Group

 | 

View

 |
| 

Product

 | 

View

 |
| 

Product Version

 | 

View

 |
| 

Restriction Set

 | 

View, Create, Edit

 |
| 

Restriction Set Definition Version

 | 

View

 |
| 

Schedule

 | 

View

 |

### [](#extensions "Copy link to heading")Extensions

#### [](#product_based_access_control "Copy link to heading")Product-based access control

Vault Core allows for managing users access based on Products for the Vault Accounts App. Product-based access control is only available as an Extension - contact your Thought Machine representative.

chat\_bubble

Product-based access control is only available when using [OIDC authentication](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_oidc_authentication).

#### [](#multiple_processing_groups "Copy link to heading")Multiple Processing Groups

In order to utilise some functionality in Vault Accounts, Multiple Processing Groups must be enabled for your environment. Multiple Processing Groups is only available as an Extension - contact your Thought Machine representative.

## [](#accessing_vault_accounts "Copy link to heading")Accessing Vault Accounts

You access Vault Accounts using your unique client URL. Alternatively, you can select **Accounts** from the App Switcher in the navigation menu for each Vault Core app.

The following URLs contain a `$<placeholder>` in place of your unique client details for the purposes of these examples.

### [](#example_url_for_bank_hosted_environments "Copy link to heading")Example URL for bank-hosted environments:

### [](#example_url_for_saas_environments "Copy link to heading")Example URL for SaaS environments:

## [](#what_is_the_vault_accounts_app "Copy link to heading")What is the Vault Accounts App?

chat\_bubble

Vault Accounts assumes familiarity with Vault Core concepts, such as [Accounts](/vault-core/5-8/EN/reference/accounts/), [Postings](/vault-core/5-8/EN/reference/postings), and how Vault Core resources (such as Flags, Restriction Sets, and so on) can be linked to, and utilised by, an account.

### [](#view_accounts "Copy link to heading")View Accounts

#### [](#account_search "Copy link to heading")Account Search

The Accounts App is not designed for account discoverability; we do not provide a mechanism to browse arbitrary accounts. Instead, accounts can be located from the app home page, `/accounts/` by searching for one of the account ID, stakeholder ID, or external customer ID.

### [](#details "Copy link to heading")Details

The account details page will show data associated with an account such as balances and parameters. You can also view any associated resources such as payment devices, flags and so on.

chat\_bubble

It is possible that some resources are used in a Smart Contract but not associated with an account (such as global parameters). These will not be displayed.

### [](#edit_accounts "Copy link to heading")Edit Accounts

The following edit actions are supported:

-   add/remove stakeholders
    
-   update account status
    
-   create posting of the type:
    
    -   hard settlement
        
    -   transfer
        
    -   authorisation
        
    -   settlement
        
    -   release
        
    -   adjustment
        
    
-   update account parameter values
    
-   manage flags
    
-   manage payment devices
    
-   manage restriction sets
    

error

Updates applied to an account will apply immediately, without approval required.

info

The Accounts App is designed to work on single accounts, and as such, actions that may have a side effect on another account are not permitted. Examples include modifying parameters that would affect multiple accounts.

### [](#create_accounts "Copy link to heading")Create Accounts

You can access the create account form via the **Create Account** button on the accounts homepage, or directly via `/accounts/create`

This flow allows you to configure the required information to create an account, and then optionally apply additional resources to that account (flags, payment devices, and restriction sets)

#### [](#stakeholders "Copy link to heading")Stakeholders

At least one stakeholder must be added to the account. Stakeholders can be found by Vault Core stakeholder ID, or by external ID.

chat\_bubble

If you provide an external ID that does not exist in Vault Core, a Customer will be created automatically with this external ID applied when the account is created.

## [](#integration "Copy link to heading")Integration

### [](#urls_and_query_parameters "Copy link to heading")URLs and Query Parameters

#### [](#account_search_2 "Copy link to heading")Account Search

`[base url]/accounts/`

The search page supports a URL query parameter for search.

   
| Parameter | url key | description | example |
| --- | --- | --- | --- |
| 
Search Term

 | 

`search_term`

 | 

The string to search for, can be either stakeholder ID, external customer ID or account ID

 | 

search\_term=abcd1234

 |

#### [](#create_account "Copy link to heading")Create Account

`[base url]/accounts/create`

The create account journey supports URL parameters in order to streamline the create journey and pre-populate fields in the form. The supported options are as follows.

chat\_bubble

Values provided through URL parameters cannot be edited in the UI.

warning

The UI restrictions enforced by providing URL parameters is not intended to be a secure mechanism. The restrictions are not enforced in the back end. Additionally, URL parameters can be modified by users.

   
| Parameter | url key | description | example |
| --- | --- | --- | --- |
| 
Stakeholder ID

 | 

stakeholder\_id

 | 

Provide multiple stakeholder IDs to pre-select stakeholders for the new account

 | 

?stakeholder\_id=abcd1234&stakeholder\_id=efgh5678

 |
| 

External Customer ID

 | 

external\_id

 | 

Provide multiple external customer IDs to pre-select stakeholders for the new account.

*Note: if the external\_id does not exist, a new customer will be created with that external ID*





 | 

?external\_id=hgfe8765&external\_id=ijkl9876

 |
| 

Product ID

 | 

product\_id

 | 

The ID of the product.

*Note: The current version of the provided product will be used*





 | 

?product\_id=my\_product\_id

 |
| 

Status

 | 

account\_status

 | 

The status the account will be opened with. The value must be either ACCOUNT\_STATUS\_PENDING, or ACCOUNT\_STATUS\_OPEN

 | 

?account\_status=ACCOUNT\_STATUS\_OPEN

 |
| 

Parameter Value

 | 

pv\_\[name\]

 | 

Values can be provided for parameters specified in the product

 | 

?pv\_my\_parameter\_name=42

 |

#### [](#account_details "Copy link to heading")Account Details

`[base url]/accounts/account/[vault_account_id]`

#### [](#posting_creation "Copy link to heading")Posting creation

`[base url]/accounts/account/[vault_account_id]/create/posting`

#### [](#resource_management "Copy link to heading")Resource management

`[base url]/accounts/account/[vault_account_id]/manage/**[resource]**`

**\[resource\]** can be any of the following values:

-   `stakeholders`
    
-   `status`
    
-   `parameters`
    
-   `flags`
    
-   `restriction-sets`
    
-   `payment-devices`