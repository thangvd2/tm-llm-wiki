---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/policies/opa-policies"
title: "OPA policies"
scraped_at: "2026-06-22T19:19:03.591Z"
images: 0
---

# OPA policies

## [](#overview_of_opa_policies "Copy link to heading")Overview of OPA policies

lightbulb

Vault Core also provides built-in access control policies. For more information, see the [Authentication](/vault-core/5-9/EN/api/overview#authentication) section.

Open Policy Agent (OPA) policies are authored in [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/), an expressive, declarative language. Policy decisions are determined using evaluation input and a set of structured data.

Within Vault Core, the structured data consists entirely of a set of Rego policies. These policies are queried using a specified evaluation input. The supported version of OPA is included in the [Release JSON artifact](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#release_json_artifact) for each release of Vault Core.

### [](#authoring_policies "Copy link to heading")Authoring policies

Vault Core expects certain conventions to be adhered to within the Rego that defines a policy:

-   All Rego policies define a package, and Vault Core expects that package to be equal to the ID of the policy; and
    
-   The policy must implement an allow rule, and it is important that the rule defaults to "false" so that the policy denies access in case of a failure during evaluation
    

Putting these conventions together, the minimal form of a Rego policy is given by:

where `<policy id>` would be replaced by the actual policy ID used when creating or updating the policy. Additional requirements around the implementation are communicated via policy schemas and schema versions.

### [](#example_use_case_of_custom_policies "Copy link to heading")Example use case of custom policies

A use case to author your own custom policies could be when the auth tokens are generated with scopes prefixed with a namespace. You could use the following policy in such a situation:

### [](#general_guidance "Copy link to heading")General Guidance

Policies should be authored with performance in mind. The exact performance requirements of a policy will naturally vary from one policy to the next. In general, you should implement an efficient policy to avoid its evaluation contributing significantly to overall request latency. For more information about writing efficient policies, see the [Open Policy Agent documentation](https://www.openpolicyagent.org/docs/latest/policy-performance/).

To mitigate potential security issues, Vault Core does not allow the use of the following Rego packages to be imported in Rego code:

-   http
    
-   net
    
-   cryptography
    
-   rego
    
-   debugging
    
-   opa
    
-   tracing
    
-   io
    

### [](#policy_schema "Copy link to heading")Policy Schema

Vault Core defines the structure and contents of the evaluation input. In contrast, the policies themselves are unknown to Vault Core.

To bridge this gap, each policy is backed by a schema. This defines Vault Core’s expectations around the content of the policy evaluation input, in particular the properties available on the evaluation input. For a list of the supported policy schemas, see [Policy Schemas](/vault-core/5-9/EN/reference/policies/opa-policies#policy_schemas).

chat\_bubble

You can set policies in `values.yaml`; however, if you create or change a policy using the Core API Policy Management Service endpoints, then the corresponding `values.yaml` settings are no longer effective.

Therefore, Thought Machine recommends that you do not change the values for certain policies via `values.yaml` once you have installed and configured Vault Core, as denoted in the `values.yaml` file. If you want to change or create a policy, Thought Machine recommends that you use the [Policy Management](/vault-core/5-9/EN/api/core_api#policy_management) endpoints of the Core API instead.

#### [](#example_schema "Copy link to heading")Example schema

As an example, consider the case where a REST API request should be authorised before the request can be fulfilled. Such authorisation can be performed by evaluating an OPA Rego policy.

In this example the API accepts a JSON Web Token (JWT), which contains various claims describing the actor that issued the request. The API handler implementation must be able to construct an evaluation input that OPA can use to determine whether the request is authorised. For this example the implementers of the API handler require that each endpoint is annotated with one or more API scopes, and that the JWT contains a list of API scopes for which it is valid. These two pieces of information are then provided to OPA to evaluate a policy.

The implementers of the API then define the expectations around the evaluation input via a schema. The schema details the currently-supported evaluation input properties. Both the individual input properties listed in the schema and the schema itself can be annotated with deprecation notices should the implementers of a service decide to make changes to it across different versions of Vault Core.

With this in mind, in this example the implementers of the API handler have created a schema with ID `api_permissions_schema`. The properties supported by this schema are given in the table below:

  
| Property | Type | Description |
| --- | --- | --- |
| 
`jwt_claims`

 | 

Object

 | 

Claims present on a verified JWT used to authorise the request.

 |
| 

`valid_scopes`

 | 

Array

 | 

An array of scopes that are associated with the endpoint being called.

 |

This information allows policy authors to make use of the `input.jwt_claims` and `input.valid_scopes` variables within the Rego source code for a policy associated with this schema. Based on this, the following policy can be written:

When creating this policy using the API, the policy schema `api_permissions_schema` would need to be included in the request.

It is worth noting that the `jwt_claims` property itself has the `scp` property, yet no reference is made to this property in the schema. Because Rego is a declarative language, referencing the `scp` property in this case is equivalent to checking that the property exists. If the `scp` property is missing, then the rule in which it is referenced evaluates to `false`.

#### [](#deprecations "Copy link to heading")Deprecations

Policy schemas allow the expectations around policy input properties to change over time. It is feasible that some input properties may need to be removed or replaced by others. Where this is the case, the property to be removed will be marked with a deprecation notice specifying the release for which the removal is planned.

### [](#static_policies "Copy link to heading")Static Policies

Some services require the existence of one or more policies in order to function correctly. Where this is the case, a statically-defined default policy is provided as part of Vault Core. These policies can be overridden by creating a policy with an ID in accordance with the expectations of the service that uses it. For a list of the statically-defined policies in use by Vault Core, see [Static policies](/vault-core/5-9/EN/reference/policies/opa-policies#static_policies_2).

## [](#policy_schemas "Copy link to heading")Policy Schemas

Each OPA Rego Policy created using the Core API is backed by a policy schema. Each schema defines the available properties on the evaluation input as passed to OPA when a policy is evaluated. A list of the schemas currently available within Vault Core is provided below.  

Each input property has a name and a type. The type corresponds to a JSON data type.  

Details of the supported input properties are also accompanied by details of any static policies associated with the  
various schemas. These static policies are required by Vault Core in order for the product to function correctly. If these policies are not defined by clients using the Core API, then a permissive, default policy is used instead.

### [](#api_permissions "Copy link to heading")API Permissions

Policy Schema ID: `api_permissions`

#### [](#input_properties "Copy link to heading")Input Properties

  
| Name | Type | Description |
| --- | --- | --- |
| 
`endpoint`

 | 

string

 | 

The gRPC endpoint associated with the API request.

 |
| 

`http_method`

 | 

string

 | 

The HTTP method associated with the API request.

 |
| 

`http_path`

 | 

string

 | 

The request path associated with the API request.

 |
| 

`jwt_claims`

 | 

object

 | 

The claims for the JWT used to authenticate the API request.

 |
| 

`jwt_header`

 | 

object

 | 

The header for the JWT used to authenticate the API request.

 |
| 

`role_privileges`

 | 

array

 | 

The privileges associated with a given role.

 |
| 

`valid_scopes`

 | 

array

 | 

The acceptable scopes associated with the API endpoint.

 |

#### [](#static_policies_2 "Copy link to heading")Static Policies

 
| ID | Description |
| --- | --- |
| 
`audit_api_permissions`

 | 

Used to authorise Audit API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `audit_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |
| 

`core_api_permissions`

 | 

Used to authorise Core API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `core_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |
| 

`data_loader_api_permissions`

 | 

Used to authorise Data Loader API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `data_loader_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |
| 

`edge_functions_api_permissions`

 | 

Used to authorise Edge Functions API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `edge_functions_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |
| 

`payment_hub_api_permissions`

 | 

Used to authorise Payment Hub API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `payment_hub_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |
| 

`experience_layer_api_permissions`

 | 

Used to authorise Experience Layer API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `experience_layer_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |
| 

`access_control_api_permissions`

 | 

Used to authorise Access Control API requests using JWT claims. By default this compares the contents of the scope claim (either the array-valued `scp` or the space-separated, string-valued `scope`) in the `jwt_claims` property to the supported permission scopes on the API endpoint. Can be specified using the `access_control_api.default_permissions_policy` in Vault Core’s values.yaml file.

 |