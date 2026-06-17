---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/concepts/console/roles"
title: "Roles"
scraped_at: "2026-06-17T05:14:32.907Z"
images: 0
---

# Roles

This page explains what roles are, the predefined roles available immediately, and how to create and manage custom roles using our [Bridge Roles Service API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#roles).

### [](#roles "Copy link to heading")Roles

A **Role** is a named collection of privileges that define what actions a user or service can perform. Each privilege consists of:

-   **Scopes** – the API actions the role can perform (e.g. `bridge.apps:read`)
    
-   **ABAC policies** – optional attribute-based access control (ABAC) rules that further restrict where those scopes apply, written in the [Rego](https://www.openpolicyagent.org/docs/policy-language) policy language. A Rego policy is the only way to add ABAC configuration to a privilege.
    

## [](#predefined_roles "Copy link to heading")Predefined Roles

Out of the box, the following roles will be created for every tenant in a Bridge instance.

error

To grant one of these roles to a user, you must configure your IdP so that the user’s JWT contains that role in the roles claim.

chat\_bubble

If the following roles are not fitted to your needs, you are able to de-activate the role by setting the status of the role to `ROLE_STATUS_INACTIVE` and create your own ones.

### [](#vb_product_manager "Copy link to heading")VB Product Manager

The Product Manager Role is the only predefined role created with some ABAC policies on it.

#### [](#privileges_for_this_role "Copy link to heading")Privileges for this role

-   **Apps (`bridge.apps:read`)**: Read requests for the App resource are allowed **only** when the app ID in the request is `productmanagement`. All other apps are denied.
    
-   **Integrations Proxy (`bridge.integrations_proxy:execute`)**: Requests through the integrations proxy are allowed **only** when the integration config ID in the request is `bridge-product-management-app`. All other integration config IDs are denied.
    
-   **Accounts and Conversions (`bridge.accounts:read`, `bridge.account_conversions:read`, etc.)**: These scopes grant access to private Bridge APIs that are required by the Product Management app, i.e. a user with this role can send any request to these private APIs, and the request’s body will not be inspected for any access control decisions.
    

This role demonstrates how you can limit a role’s access to a particular API resource with a given ID.

It is also possible to limit a role to a set of multiple resource IDs, E.g to apps with the IDs 'productmanagement' or 'otherallowedapp' only.

### [](#vb_role_manager_role "Copy link to heading")VB Role Manager Role

The `vb_role_manager` role is designed for administrators who manage access control within Vault Bridge. It provides full read and write permissions over roles, enabling the creation, modification, and de-activation of role definitions for the tenant. There are no ABAC policies on this role.

error

The `vb_role_manager` role includes all permissions required to create and manage roles. It effectively functions as a super-admin role within the system.

### [](#vb_admin "Copy link to heading")VB Admin

The `vb_admin` role grants full administrative access across Vault Bridge resources. It is designed for administrators who need unrestricted control over applications, integrations, and external systems. It does not include permissions needed only for the Product Management app; if you need to grant an administrator those permissions too, you can do that by giving that administrator the `vb_product_manager` role in your IdP too.

## [](#writing_your_own_abac_policies "Copy link to heading")Writing your own ABAC Policies

The `abac_policies` in a privilege will apply to all scopes contained in the privilege. This in turn means that every scope in a privilege with an ABAC policy must support ABAC.

The following resources and their respective endpoints can be protected with ABAC via a valid Rego policy.

chat\_bubble

ABAC is only enforced on the `id` attribute of each resource.

-   `Integration Configuration` (See [API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#integration_configs))
    
-   `App` (See [API](/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api#app))
    

Adding `abac_policies` for these resources to a privilege requires the privilege’s scopes to be one of the below. The only allowed input attribute paths are `input.vb_app.id` and `input.vb_integration_configuration.id`.

  
| Scope | Supported `abac_policies` key | Required input attribute path in Rego policy |
| --- | --- | --- |
| 
bridge.app\_bundles:read

 | 

vb\_app

 | 

input.vb\_app.id

 |
| 

bridge.apps:read

 | 

vb\_app

 | 

input.vb\_app.id

 |
| 

bridge.apps:write

 | 

vb\_app

 | 

input.vb\_app.id

 |
| 

bridge.app\_versions:read

 | 

vb\_app

 | 

input.vb\_app.id

 |
| 

bridge.integrations\_proxy:execute

 | 

vb\_integration\_config

 | 

input.vb\_integration\_config.id

 |

## [](#endpoints_that_enforce_abac "Copy link to heading")Endpoints that enforce ABAC

The following endpoints enforce ABAC policies.

  
| HTTP Method | Path | Supported Resource Attribute for ABAC |
| --- | --- | --- |
| 
ANY

 | 

/api/proxy/\*/\*/\*\*

 | 

Integration Configuration ID

 |
| 

ANY

 | 

/api/proxy/\*/\*

 | 

Integration Configuration ID

 |
| 

GET

 | 

/app-bundle/\*

 | 

App ID

 |
| 

GET

 | 

/api/v1/apps/\*

 | 

App ID

 |
| 

GET

 | 

/api/v1/apps:batchGet

 | 

App ID

 |
| 

GET

 | 

/api/v1/apps

 | 

App ID

 |
| 

PUT

 | 

/api/v1/apps/\*

 | 

App ID

 |
| 

GET

 | 

/api/v1/app-versions/\*

 | 

App ID

 |
| 

GET

 | 

/api/v1/app-versions:batchGet

 | 

App ID

 |
| 

GET

 | 

/api/v1/app-versions

 | 

App ID

 |

chat\_bubble

There is no ABAC for POST /v1/app-versions endpoint.