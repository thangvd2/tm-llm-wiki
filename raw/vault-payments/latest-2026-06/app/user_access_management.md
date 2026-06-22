---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/app/user_access_management"
title: "User access management"
scraped_at: "2026-06-17T15:46:44.478Z"
images: 1
---

# User access management

This section explains the Vault Payments access control model for the Vault Payments App.

Different permissions guard pages and sections with the Vault Payments App so that users with different roles can only access the capabilities needed for their role.

## [](#permissions "Copy link to heading")Permissions

The following table lists permissions used within the Vault Payments (VP) App’s defined roles. If the currently logged in user doesn’t have a role with a particular permission then they’re not able to view pages or UI elements associated with that permission.

chat\_bubble

A role can use permissions outside of the set of permissions outlined below but they will not have any effect on the role’s access to App pages. The role will still provide the user with access to the backend endpoints those permissions relate to.

`payments:read` is a catch all permission that allows a user to see everything in the app, regardless of the requirements in the tables below. `payments:write` is a catch all permission that allows a user to perform any action in the app, regardless of the requirements in the tables below.

Write actions require the read permissions as well as the write permissions of the associated resource.

### [](#dashboards "Copy link to heading")Dashboards

 
| Page or feature | Required permissions |
| --- | --- |
| 
List dashboards

 | 

`"payments.aggregations.payments:read",`  
`"payments.app.dashboards:read",`  
`"payments.app.dashboard_versions:read"`

 |
| 

View dashboard

 | 

`"payments.aggregations.payments:read",`  
`"payments.app.dashboards:read",`  
`"payments.app.dashboard_versions:read"`

 |
| 

Dashboard developer

 | 

`"payments.aggregations.payments:read",`  
`"payments.app.dashboards:read",`  
`"payments.app.dashboard_versions:read"`

 |

### [](#payments "Copy link to heading")Payments

 
| Page or feature | Required permissions |
| --- | --- |
| 
Search payments

 | 

`"payments.payments:read",`  
`"payments.instructions:read"`

 |
| 

View payment

 | 

`"payments.payments:read",`  
`"payments.instructions:read"`

 |
| 

Payment initiation

 | 

`"payments.app.templates:read",`  
`"payments.app.template_versions:read",`  
`"payments.instructions:read",`  
`"payments.instructions:write"`  
or  
`"payments.app.templates:read",`  
`"payments.app.template_versions:read",`  
`"payments.instructions:read",`  
`"payments.instructions:initiate"`

 |
| 

Payment initiation using template presets

 | 

one of the permission sets required for 'Payment initiation' along with `"payments.app.template_presets:read"`

 |
| 

Payment initiation template preset creation

 | 

one of the permission sets required for 'Payment initiation' along with `"payments.app.template_presets:read",`  
`"payments.app.template_presets:write"`  
or  
`"payments.app.template_presets:read",`  
`"payments.app.template_presets:create"`  


 |
| 

Payment initiation template preset update

 | 

one of the permission sets required for 'Payment initiation' along with `"payments.app.template_presets:read",`  
`"payments.app.template_presets:write"`  
or  
`"payments.app.template_presets:read",`  
`"payments.app.template_presets:update"`  


 |
| 

Payment initiation template preset deletion

 | 

one of the permission sets required for 'Payment initiation' along with `"payments.app.template_presets:read",`  
`"payments.app.template_presets:write"`  
or  
`"payments.app.template_presets:read",`  
`"payments.app.template_presets:update"`  


 |
| 

Retry instruction

 | 

`"payments.payments:read",`  
`"payments.instructions:read",`  
`"payments.instructions:write"`  
or  
`"payments.payments:read",`  
`"payments.instructions:read",`  
`"payments.instructions:retry"`

 |
| 

Cancel instruction

 | 

`"payments.payments:read",`  
`"payments.instructions:read",`  
`"payments.instructions:write"`  
or  
`"payments.payments:read",`  
`"payments.instructions:read",`  
`"payments.instructions:update"`

 |

### [](#configuration "Copy link to heading")Configuration

 
| Page or feature | Required permissions |
| --- | --- |
| 
List instruction flows

 | 

`"payments.instruction_flows:read",`  
`"payments.instruction_flow_versions:read"`

 |
| 

View instruction flow

 | 

`"payments.instruction_flows:read",`  
`"payments.instruction_flow_versions:read"`

 |
| 

View instruction flow version

 | 

`"payments.instruction_flows:read",`  
`"payments.instruction_flow_versions:read"`

 |
| 

Develop instruction flow

 | 

`"payments.instruction_flows:read",`  
`"payments.instruction_flow_versions:read"`

 |
| 

List parameters

 | 

`"payments.parameters:read",`  
`"payments.parameter_values:read"`

 |
| 

View parameter

 | 

`"payments.parameters:read",`  
`"payments.parameter_values:read"`

 |
| 

Create or update parameter

 | 

`"payments.parameters:read",`  
`"payments.parameter_values:read"`  
`"payments.parameters:write",`  
`"payments.parameter_values:write"`

 |
| 

List integrations

 | 

`"payments.integrations:read",`  
`"payments.integration_versions:read"`

 |
| 

View integration

 | 

`"payments.integrations:read",`  
`"payments.integration_versions:read"`

 |

### [](#routing "Copy link to heading")Routing

 
| Page or feature | Required permissions |
| --- | --- |
| 
Payment instrument search

 | 

`"payments.account_links:read",`  
`"payments.payment_instruments:read"`

 |
| 

Payment instrument parameter values tab

 | 

`"payments.account_links:read",`  
`"payments.payment_instruments:read",`  
`"payments.parameters:read",`  
`"payments.parameter_values:read",`

 |
| 

Create or update parameter from parameters tab

 | 

`"payments.account_links:read",`  
`"payments.payment_instruments:read"`  
`"payments.parameters:read",`  
`"payments.parameter_values:read",`  
`"payments.parameters:write",`  
`"payments.parameter_values:write"`

 |
| 

Payment instrument relationships tab

 | 

`"payments.account_links:read",`  
`"payments.payment_instruments:read"`  
`"payments.issuance:read"`

 |
| 

Payment instrument payments tab

 | 

`"payments.account_links:read",`  
`"payments.payment_instruments:read"`  
`"payments.payments:read",`  
`"payments.instructions:read"`

 |

### [](#tasks_and_manual_decisions "Copy link to heading")Tasks and manual decisions

 
| Page or feature | Required permissions |
| --- | --- |
| 
View task queues

 | 

`"payments.tasks:read",`  
`"payments.users:read"`

 |
| 

Modify tasks from queues

 | 

`"payments.tasks:read",`  
`"payments.users:read",`  
`"payments.tasks:write"`

 |
| 

View manual decision on payments page

 | 

`"payments.instructions:read",`  
`"payments.payments:read",`  
`"payments.manual_decisions:read"`

 |
| 

View task on payments page

 | 

`"payments.instructions:read",`  
`"payments.payments:read",`  
`"payments.manual_decisions:read",`  
`"payments.users:read",`  
`"payments.tasks:read"`

 |
| 

Submit manual decision when tasks not enabled

 | 

`"payments.instructions:read",`  
`"payments.payments:read",`  
`"payments.manual_decisions:read"`  
`"payments.manual_decisions:write"`

 |
| 

Submit manual decision when tasks are enabled

 | 

`"payments.instructions:read",`  
`"payments.payments:read",`  
`"payments.manual_decisions:read",`  
`"payments.users:read",`  
`"payments.tasks:read",`  
`"payments.tasks:write"`

 |
| 

Task advanced controls

 | 

`"payments.tasks:manage",`  
`"payments.tasks:read",`  
`"payments.users:read",`  
`"payments.tasks:write"`  


 |

### [](#auth_credentials_management "Copy link to heading")Auth credentials management

Note that `payments:read` and `payments:write` do not provide access to this section.

 
| Page or feature | Required permissions |
| --- | --- |
| 
List credentials

 | 

`"auth:read",`  
`"auth.client_credentials:read"`

 |
| 

Create credentials

 | 

`"auth:read",`  
`"auth.client_credentials:read",`  
`"auth:write",`  
`"auth.client_credentials:write"`

 |
| 

Modify credentials

 | 

`"auth:read",`  
`"auth.client_credentials:read",`  
`"auth:write",`  
`"auth.client_credentials:write"`

 |

## [](#roles "Copy link to heading")Roles

Users can have roles which group together permissions. There is no limit to the number of roles a user may have.

Thought Machine provides a default admin role called `vp_super_admin` that can be used by clients to bootstrap their environment. The role has all the available permissions.

Client can use the Roles API to create custom Roles that contain the desired permissions and Attribute Based Access Control(ABAC) restrictions.

## [](#setting_up_abac "Copy link to heading")Setting up ABAC

error

ABAC adds extra latency to your requests. Avoid having machine to machine tokens with role claims on them for optimal performance.

chat\_bubble

Top level permissions such as `payments:read` and `payments:write` are not allowed in Roles. This prevents adding undesired new permissions to a role as the scope of the top level permissions increases.

To set up ABAC, create Role resources with privileges that contain `abac_policies`. A privilege contains a list of [Permission Scopes](/vault-payments/latest/EN/using_vault_payments/vault_payments_api/permission_scopes) and provides the role with access to the related endpoints. It can also contain an `abac_policies` map written in [Rego v1.8.0](https://www.openpolicyagent.org/docs/policy-language) which describes the attribute-based access control (ABAC) logic for this set of permissions.

The `abac_policies` map in a privilege will apply to all permissions contained in it. This in turn means that every permission in the privilege with an ABAC policy must support ABAC. Below are the permissions that support ABAC:

 
| Permission | Accessible pages or features |
| --- | --- |
| 
`payments.payments:read`

 | 

Payments search and details pages.

 |
| 

`payments.instructions:read`

 | 

Instruction list/details components. Always required alongside payments.instructions:write.

 |
| 

`payments.instructions:initiate`

 | 

Creation of Instructions on the Payment Initiation page.

 |
| 

`payments.instructions:retry`

 | 

Retrying errored Instructions on the Payment Details page.

 |
| 

`payments.instructions:update`

 | 

Cancelling errored Instructions on the Payment Details page.

 |
| 

`payments.instructions:write`

 | 

It groups together :initiate, :retry and :update permissions.

 |
| 

`payments.manual_decisions:read`

 | 

Viewing manual decisions on the Payment Details page.

 |
| 

`payments.manual_decisions:write`

 | 

Submitting manual decisions on the Payment Details page.

 |
| 

`payments.tasks:read`

 | 

Viewing tasks on the Payment Details page.

 |
| 

`payments.tasks:write`

 | 

Submitting tasks on the Payment Details page.

 |
| 

`payments.tasks:manage`

 | 

Admin level access to manage tasks.

 |

### [](#managing_abac_access "Copy link to heading")Managing ABAC Access

Access is determined based on the Payment the resources belong to. Below is diagram representing the relationship between the different VP resources in relationship to the Payment resource.

![Resource Relationship Overview](_assets/ABAC.BU1y1HA6_Z9HIyO_vaultpay.svg)

Currently the following Payment fields are supported when writing ABAC Rego policies:

  
| Field | Type | Enumeration values |
| --- | --- | --- |
| 
`type`

 | 

Enumeration

 | 

PAYMENT\_TYPE\_UNKNOWN PAYMENT\_TYPE\_UNSUPPORTED PAYMENT\_TYPE\_CARD PAYMENT\_TYPE\_CREDIT\_TRANSFER PAYMENT\_TYPE\_FEE\_COLLECTION PAYMENT\_TYPE\_DIRECT\_DEBIT

 |
| 

`status`

 | 

Enumeration

 | 

PAYMENT\_STATUS\_UNKNOWN PAYMENT\_STATUS\_PROCESSING PAYMENT\_STATUS\_ERRORED PAYMENT\_STATUS\_AUTHORISED PAYMENT\_STATUS\_AUTHORISATION\_REJECTED PAYMENT\_STATUS\_PARTIALLY\_CLEARED PAYMENT\_STATUS\_CLEARED PAYMENT\_STATUS\_REVERSED PAYMENT\_STATUS\_EXPIRED PAYMENT\_STATUS\_REJECTED PAYMENT\_STATUS\_RECEIVED PAYMENT\_STATUS\_INITIATED PAYMENT\_STATUS\_CANCELLED PAYMENT\_STATUS\_SETTLED PAYMENT\_STATUS\_PIN\_CHANGED PAYMENT\_STATUS\_PIN\_CHANGE\_REJECTED PAYMENT\_STATUS\_PIN\_CHANGE\_REVERSED PAYMENT\_STATUS\_PIN\_UNBLOCKED PAYMENT\_STATUS\_PIN\_UNBLOCK\_REJECTED PAYMENT\_STATUS\_PIN\_UNBLOCK\_REVERSED PAYMENT\_STATUS\_RETURNED PAYMENT\_STATUS\_SCHEDULED PAYMENT\_STATUS\_ACCEPTED PAYMENT\_STATUS\_RECALL\_REQUESTED

 |
| 

`payment_system`

 | 

Text

 |  |

### [](#example "Copy link to heading")Example

Below is an example role with a rego policy which grants the following permissions:

-   The role is restricted to create/update Tasks and Manual Decisions that relate to Payments with type `PAYMENT_TYPE_CARD` and payment system must be `FEDWIRE` or `VISA DPS`.
    
-   The role has read access to Instructions, Payments, Instruction Flows, Instruction Flow Versions and Account Links
    

For clarity this is what the unescaped Rego policy from the role above looks like:

chat\_bubble

Rego policies for attribute-based access control can only contain logical operators to equate or inequate. Clients should only use `in`, `==` or `!=`