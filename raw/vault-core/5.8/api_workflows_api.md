---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/api/workflows_api"
title: "Workflows API"
scraped_at: "2026-06-17T05:32:14.193Z"
images: 0
---

# Workflows API

chat\_bubble

The Workflows API is deprecated as of Vault Core release 4.6, and will be removed no earlier than release 7.0.

The Vault Workflow API is RESTful. It uses predictable and resource-oriented URLs with standard HTTP methods and status codes. Responses are in JSON format.

For an overview of the general features of the API, see [API intro](/vault-core/5-8/EN/api/overview/).

info

Workflow Escalation of Privileges

Workflow users with access to Workflow APIs have the ability to escalate privileges to other Vault Core APIs.

To minimise any associated privilege escalation risk, Thought Machine advises clients to segregate roles to ensure that employees with Workflow definition permissions are separate from those with Workflow execution permissions.

## [](#downloading_the_openapi_definition_file "Copy link to heading")Downloading the OpenAPI definition file

The OpenAPI definition is an Interface Description Language for describing RESTful APIs expressed in JSON format.

info

The Workflows API is available in this format and can be downloaded here:

Download download

The specification includes Thought Machine-specific extensions that are not standard to OpenAPI. The generation method of the specification and resulting naming, paths and schemas are subject to change. For more information about the OpenAPI specification see the [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3).

## [](#policies "Copy link to heading")Policies

**Policies** are used to check whether users can perform actions in relation to a Ticket, Workflow or Audit Log.

chat\_bubble

Policies do not apply to Action Logs.

A policy specifies one or more actions such as CREATE, READ and UPDATE. For each action, a list of **permissions** and (in the case of Tickets and Workflows) a set of **rules** can be provided. All associated permissions and rules must be satisfied for the user to perform the action.

Multiple policies can be assigned to a Ticket, Workflow or Audit Log. Where multiple policies are assigned, the user must have **all** permissions and satisfy **all** rules for at least **one** of these associated policies.

The policies endpoints of the Workflows API allow policy management (creation, update and retrieval).

### [](#policy "Copy link to heading")Policy

#### [](#available_methods "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_policies_ListPoliciesResponse_ListPolicies) Lists all of the available policies.
    
-   [Create](#_workflows_api_v1_policies_Policy_CreatePolicy) Creates a new policy.
    
-   [Get](#_workflows_api_v1_policies_Policy_GetPolicy) Retrieves a single policy based on its ID.
    
-   [Update](#_workflows_api_v1_policies_Policy_UpdatePolicy) Updates an existing policy.
    
-   [BatchGet](#_workflows_api_v1_policies_BatchGetPoliciesResponse_BatchGetPolicies) Retrieves one or more policies based on their ID.
    
-   [BulkEvaluate](#_workflows_api_v1_policies_BulkEvaluatePoliciesResponse_BulkEvaluatePolicies) Evaluates a batch of policy lists paired with access control data, deciding whether a specified action is allowed for each pairing.
    
-   [Evaluate](#_workflows_api_v1_policies_EvaluatePoliciesResponse_EvaluatePolicies) Evaluates policies with given access control data and determines whether a specified action is allowed.
    

#### [](#_workflows_api_v1_policies_ListPoliciesResponse_ListPolicies "Copy link to heading")List

Lists all of the available policies.

**Endpoint:** GET /v1/policies

##### [](#request "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**include\_inactive**  
  
boolean

 | 

Whether or not to include inactive policies. Required.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

Order by fields. Optional.  
  
**Enum values**  
**ORDER\_BY\_CREATION\_TIME\_DESC:**  
Default sort field.  
**ORDER\_BY\_CREATION\_TIME\_ASC**  
**ORDER\_BY\_ID\_DESC**  
**ORDER\_BY\_ID\_ASC**

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be retrieved. Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from. If empty, the first page of results will be returned. Optional.

 |
| 

**view**  
  
enum

 | 

The level of detail to be returned in the policies. Required.  
  
**Enum values**  
**POLICY\_VIEW\_BASIC:**  
Returned policies include only ID, description, is\_active flag and creation timestamp.  
**POLICY\_VIEW\_INCLUDE\_ACTIONS:**  
Returned policies include everything from the basic view plus actions.  
  
**Default**  
**POLICY\_VIEW\_BASIC**

 |

##### [](#response "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**policies\[\]**  
  
array \[object\]

 | 

A list of policies for the current page

 |
| 

policies\[\].  
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |
| 

policies\[\].  
**description**  
  
string

 | 

A brief description of the policy.

 |
| 

policies\[\].  
**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

policies\[\].  
actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**

 |
| 

policies\[\].  
actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

policies\[\].  
actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

policies\[\].  
actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policies\[\].  
actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**

 |
| 

policies\[\].  
actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policies\[\].  
actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

policies\[\].  
**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |
| 

policies\[\].  
**create\_timestamp**  
  
dateTime

 | 

When this policy was last created/updated. Output only.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

#### [](#_workflows_api_v1_policies_Policy_CreatePolicy "Copy link to heading")Create

Creates a new policy.

**Endpoint:** POST /v1/policies

##### [](#request_2 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 512 characters.

 |
| 

**policy**  
  
object

 | 

The policy to create. Required.

 |
| 

policy.  
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |
| 

policy.  
**description**  
  
string

 | 

A brief description of the policy.

 |
| 

policy.  
**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

policy.  
actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**  
  
**Default**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**

 |
| 

policy.  
actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

policy.  
actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

policy.  
actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policy.  
actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**  
  
**Default**  
**RULE\_OPERATOR\_UNKNOWN**

 |
| 

policy.  
actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policy.  
actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

policy.  
**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |

##### [](#response_2 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |
| 

**description**  
  
string

 | 

A brief description of the policy.

 |
| 

**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**

 |
| 

actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**

 |
| 

actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When this policy was last created/updated. Output only.

 |

#### [](#_workflows_api_v1_policies_Policy_GetPolicy "Copy link to heading")Get

Retrieves a single policy based on its ID.

**Endpoint:** GET /v1/policies/{id}

##### [](#request_3 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Policy that is to be retrieved. Required.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**view**  
  
enum

 | 

The level of detail to include in the returned Policy. Required.  
  
**Enum values**  
**POLICY\_VIEW\_BASIC:**  
Returned policies include only ID, description, is\_active flag and creation timestamp.  
**POLICY\_VIEW\_INCLUDE\_ACTIONS:**  
Returned policies include everything from the basic view plus actions.  
  
**Default**  
**POLICY\_VIEW\_BASIC**

 |

##### [](#response_3 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |
| 

**description**  
  
string

 | 

A brief description of the policy.

 |
| 

**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**

 |
| 

actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**

 |
| 

actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When this policy was last created/updated. Output only.

 |

#### [](#_workflows_api_v1_policies_Policy_UpdatePolicy "Copy link to heading")Update

Updates an existing policy.

**Endpoint:** PUT /v1/policies/{policy.id}

##### [](#request_4 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
policy.  
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 512 characters.

 |
| 

**policy**  
  
object

 | 

The policy to update. Required.

 |
| 

policy.  
**description**  
  
string

 | 

A brief description of the policy.

 |
| 

policy.  
**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

policy.  
actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**  
  
**Default**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**

 |
| 

policy.  
actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

policy.  
actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

policy.  
actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policy.  
actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**  
  
**Default**  
**RULE\_OPERATOR\_UNKNOWN**

 |
| 

policy.  
actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policy.  
actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

policy.  
**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |
| 

**update\_mask**  
  
object

 | 

The fields of the policy to update. Supported: description, actions, is\_active. Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#response_4 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |
| 

**description**  
  
string

 | 

A brief description of the policy.

 |
| 

**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**

 |
| 

actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**

 |
| 

actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When this policy was last created/updated. Output only.

 |

#### [](#_workflows_api_v1_policies_BatchGetPoliciesResponse_BatchGetPolicies "Copy link to heading")BatchGet

Retrieves one or more policies based on their ID.

**Endpoint:** GET /v1/policies:batchGet

##### [](#request_5 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

List of Policy IDs to get. Required.

 |
| 

**view**  
  
enum

 | 

The level of detail to include in the returned policy. Required.  
  
**Enum values**  
**POLICY\_VIEW\_BASIC:**  
Returned policies include only ID, description, is\_active flag and creation timestamp.  
**POLICY\_VIEW\_INCLUDE\_ACTIONS:**  
Returned policies include everything from the basic view plus actions.  
  
**Default**  
**POLICY\_VIEW\_BASIC**

 |

##### [](#response_5 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**policies**  
  
map \[string: object\]

 | 

map<policy id → Policy>

 |
| 

policies\[KEY\].  
**id**  
  
string

 | 

The unique ID of this Policy (scoped to an organisation ID).

 |
| 

policies\[KEY\].  
**description**  
  
string

 | 

A brief description of the policy.

 |
| 

policies\[KEY\].  
**actions\[\]**  
  
array \[object\]

 | 

A list of actions this policy controls.

 |
| 

policies\[KEY\].  
actions\[\].  
**type**  
  
enum

 | 

The type of action to be authorised.  
  
**Deprecated** as of release **1.6**, and will be removed no earlier than release **5.0**  
*Deprecated in favour of action\_type.*  
  
**Enum values**  
**POLICY\_ACTION\_TYPE\_UNKNOWN**  
**POLICY\_ACTION\_TYPE\_READ**  
**POLICY\_ACTION\_TYPE\_UPDATE**  
**POLICY\_ACTION\_TYPE\_CREATE**  
**POLICY\_ACTION\_TYPE\_DELETE**

 |
| 

policies\[KEY\].  
actions\[\].  
**permissions\[\]**  
  
array \[string\]

 | 

The set of permissions required to execute the action. Required.

 |
| 

policies\[KEY\].  
actions\[\].  
**rules\[\]**  
  
array \[object\]

 | 

Rules define additional constraints for the action. Optional.

 |
| 

policies\[KEY\].  
actions\[\].  
rules\[\].  
**left\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the left hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policies\[KEY\].  
actions\[\].  
rules\[\].  
**operator**  
  
enum

 | 

Operator defining how the attribute values are compared.  
  
**Enum values**  
**RULE\_OPERATOR\_UNKNOWN**  
**RULE\_OPERATOR\_NOT\_EQUAL**  
**RULE\_OPERATOR\_NOT\_IN**

 |
| 

policies\[KEY\].  
actions\[\].  
rules\[\].  
**right\_operand\_attribute\_key**  
  
string

 | 

The attribute key on the right hand side of the comparison. The corresponding value will be taken from the access control context of the call.  
  
Required.  
Min length: 1 characters.  
Max length: 512 characters.

 |
| 

policies\[KEY\].  
actions\[\].  
**action\_type**  
  
string

 | 

The type of action to be authorised. Optional.

 |
| 

policies\[KEY\].  
**is\_active**  
  
boolean

 | 

Whether this Policy is active or inactive.

 |
| 

policies\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

When this policy was last created/updated. Output only.

 |

#### [](#_workflows_api_v1_policies_BulkEvaluatePoliciesResponse_BulkEvaluatePolicies "Copy link to heading")BulkEvaluate

Evaluates a batch of policy lists paired with access control data, deciding whether a specified action is allowed for each pairing.

**Endpoint:** POST /v1/policies:bulkEvaluate

##### [](#request_6 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**evaluation\_entities\[\]**  
  
array \[object\]

 | 

Container messages specifying which lists of policies to evaluate for which actions and with which access control data.

 |
| 

evaluation\_entities\[\].  
**entity\_id**  
  
string

 | 

The ID of the entity that will be used in the map in the response. Required.

 |
| 

evaluation\_entities\[\].  
**policy\_ids\[\]**  
  
array \[string\]

 | 

A list of policy IDs used to evaluate and authorise the action. Required.

 |
| 

evaluation\_entities\[\].  
**attributes**  
  
map \[string: object\]

 | 

The attributes which define details about the accessed resource as well as the caller. Required.

 |
| 

evaluation\_entities\[\].  
attributes\[KEY\].  
**string\_list**  
  
object

 |  |
| 

evaluation\_entities\[\].  
attributes\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

evaluation\_entities\[\].  
**action\_type**  
  
string

 | 

The type of the action

 |

##### [](#response_6 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**result**  
  
map \[string: enum\]

 | 

A map of `entity_id` to the evaluation result.  
  
**Enum values**  
**DENY**  
**ALLOW**

 |

#### [](#_workflows_api_v1_policies_EvaluatePoliciesResponse_EvaluatePolicies "Copy link to heading")Evaluate

Evaluates policies with given access control data and determines whether a specified action is allowed.

**Endpoint:** POST /v1/policies:evaluate

##### [](#request_7 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**action\_type**  
  
string

 | 

The type of action to be authorised. Required.  
  
Required.

 |
| 

**policy\_ids\[\]**  
  
array \[string\]

 | 

A list of policy IDs used to evaluate and authorise the action. Required.

 |
| 

**attributes**  
  
map \[string: object\]

 | 

The attributes which define details about both the accessed resource and the caller. Required.

 |
| 

attributes\[KEY\].  
**string\_list**  
  
object

 |  |
| 

attributes\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |

##### [](#response_7 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**result**  
  
enum

 | 

The result of the evaluation.  
  
**Enum values**  
**DENY**  
**ALLOW**

 |

## [](#tasks "Copy link to heading")Tasks

Tasks and Task Threads unify the functionality of Tickets and Interactive Workflows. A Task Thread represents a logical unit of work (which would most often be assigned to a role and follow the flow of a single Workflow), while Tasks attached to the parent Task Thread represent individual decisions and items of input which are required during the execution of the Task Thread.

### [](#immutable_ticket_fields_migrated_to_task_threads "Copy link to heading")Immutable Ticket fields migrated to Task Threads

When migrating from Tickets to Tasks and Task Threads, there is a disparity between the mutability of a migrated Task and Task Thread’s fields and the fields that map to them from a Ticket. The following Task and Task Thread fields can be changed, but they map from Ticket fields that cannot be changed.

#### [](#task_thread "Copy link to heading")Task Thread

-   *tags*
    
-   *header panels*
    
-   *additional references*
    

The API will not allow any of these fields to be changed when updating a Task Thread migrated from a Ticket. If any of these fields is included in the field mask for an *UpdateTaskThread* request and the Task Thread is migrated from a Ticket, an illegal argument error is thrown. This error explains that the Task Thread was migrated from a Ticket, so the field cannot be updated.

#### [](#task "Copy link to heading")Task

-   *UI Actions*
    

The API will not allow this field to be included when creating a Task whose parent Task Thread was migrated from a Ticket. When this field is populated in a *CreateTask* request and the parent Task Thread was migrated from a Ticket, an illegal argument error is thrown. This error explains that the parent Task Thread was migrated from a Ticket, so the field cannot be provided.

### [](#task_2 "Copy link to heading")Task

#### [](#available_methods_2 "Copy link to heading")Available methods

-   [Get](#_workflows_api_v1_tasks_Task_GetTask) Retrieves a Task based on its ID. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_tasks_BatchGetTasksResponse_BatchGetTasks) Retrieves one or more Tasks based on their IDs. **(Deprecated)**
    
-   [List](#_workflows_api_v1_tasks_ListTasksResponse_ListTasks) Lists all the Tasks for a specified Task Thread. **(Deprecated)**
    
-   [Create](#_workflows_api_v1_tasks_Task_CreateTask) Creates a Task. **(Deprecated)**
    
-   [Update](#_workflows_api_v1_tasks_Task_UpdateTask) Updates a Task. **(Deprecated)**
    

#### [](#_workflows_api_v1_tasks_Task_GetTask "Copy link to heading")Get

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The GetTask endpoint is deprecated.*

Retrieves a Task based on its ID.

**Endpoint:** GET /v1/task/{id}

##### [](#request_8 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Task that is to be retrieved.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include in the returned Task.  
  
**Enum values**  
**INCLUDE\_FIELD\_UI\_PANELS**  
**INCLUDE\_FIELD\_UI\_ACTIONS**  
**INCLUDE\_FIELD\_PROVIDED\_UI\_INPUT**

 |

##### [](#response_8 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier of the specified Task.

 |
| 

**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Task was created.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

When the Task was updated.

 |
| 

**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

ui\_actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

ui\_actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

ui\_actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

ui\_actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui\_actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of **event** or target\_status*

 |
| 

ui\_actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of event or **target\_status***

 |
| 

**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**

 |
| 

updated\_by.  
**actor\_id**  
  
string

 |  |

#### [](#_workflows_api_v1_tasks_BatchGetTasksResponse_BatchGetTasks "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetTasks endpoint is deprecated.*

Retrieves one or more Tasks based on their IDs.

**Endpoint:** GET /v1/task:batchGet

##### [](#request_9 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**ids**  
  
array \[string\]

 | 

A list of the IDs of the Tasks that are to be retrieved.  
  
Required.  
Min length: 1 characters.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include in the returned Task.  
  
**Enum values**  
**INCLUDE\_FIELD\_UI\_PANELS**  
**INCLUDE\_FIELD\_UI\_ACTIONS**  
**INCLUDE\_FIELD\_PROVIDED\_UI\_INPUT**

 |

##### [](#response_9 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**tasks**  
  
map \[string: object\]

 | 

A map of the Task IDs to the Tasks to be retrieved

 |
| 

tasks\[KEY\].  
**id**  
  
string

 | 

The unique identifier of the specified Task.

 |
| 

tasks\[KEY\].  
**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

tasks\[KEY\].  
**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

tasks\[KEY\].  
**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**

 |
| 

tasks\[KEY\].  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

tasks\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

When the Task was created.

 |
| 

tasks\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

When the Task was updated.

 |
| 

tasks\[KEY\].  
**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

tasks\[KEY\].  
ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

tasks\[KEY\].  
ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

tasks\[KEY\].  
ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tasks\[KEY\].  
**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of **event** or target\_status*

 |
| 

tasks\[KEY\].  
ui\_actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of event or **target\_status***

 |
| 

tasks\[KEY\].  
**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

tasks\[KEY\].  
**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

tasks\[KEY\].  
**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

tasks\[KEY\].  
updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**

 |
| 

tasks\[KEY\].  
updated\_by.  
**actor\_id**  
  
string

 |  |

#### [](#_workflows_api_v1_tasks_ListTasksResponse_ListTasks "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListTasks endpoint is deprecated.*

Lists all the Tasks for a specified Task Thread.  
  
n.b. Field `fields_to_include` will be available from Vault 2.8, but only take effect from Vault 4.0. This will be required to retrieve `ui_panels`, `ui_actions` and `provided_ui_input`. Up until Vault 4.0, these fields will always be returned.  
It is advised that API calls are updated to correctly set `fields_to_include` with the relevant sub-fields before the release of Vault 4.0.

**Endpoint:** GET /v1/tasks

##### [](#request_10 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

Options for ordering the list of results returned.  
  
**Enum values**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_DESC**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_ASC**

 |
| 

**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread that Tasks are to be retrieved from.

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the requested Tasks.

 |
| 

**page\_size**  
  
integer

 | 

The number of Task Threads that are to be retrieved.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include in the returned Tasks. Takes effect from version 4.0.  
  
**Enum values**  
**INCLUDE\_FIELD\_UI\_PANELS**  
**INCLUDE\_FIELD\_UI\_ACTIONS**  
**INCLUDE\_FIELD\_PROVIDED\_UI\_INPUT**

 |

##### [](#response_10 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**tasks\[\]**  
  
array \[object\]

 | 

The list of the Tasks to be retrieved.

 |
| 

tasks\[\].  
**id**  
  
string

 | 

The unique identifier of the specified Task.

 |
| 

tasks\[\].  
**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

tasks\[\].  
**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

tasks\[\].  
**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**

 |
| 

tasks\[\].  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

tasks\[\].  
**create\_timestamp**  
  
dateTime

 | 

When the Task was created.

 |
| 

tasks\[\].  
**update\_timestamp**  
  
dateTime

 | 

When the Task was updated.

 |
| 

tasks\[\].  
**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

tasks\[\].  
ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

tasks\[\].  
ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

tasks\[\].  
ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tasks\[\].  
**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

tasks\[\].  
ui\_actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

tasks\[\].  
ui\_actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

tasks\[\].  
ui\_actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

tasks\[\].  
ui\_actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

tasks\[\].  
ui\_actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tasks\[\].  
ui\_actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of **event** or target\_status*

 |
| 

tasks\[\].  
ui\_actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of event or **target\_status***

 |
| 

tasks\[\].  
**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

tasks\[\].  
**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

tasks\[\].  
**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

tasks\[\].  
updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**

 |
| 

tasks\[\].  
updated\_by.  
**actor\_id**  
  
string

 |  |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, returns this is last page of results.

 |

#### [](#_workflows_api_v1_tasks_Task_CreateTask "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateTask endpoint is deprecated.*

Creates a Task.

**Endpoint:** POST /v1/tasks

##### [](#request_11 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**task**  
  
object

 | 

The Task to be created.  
  
Required.

 |
| 

task.  
**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

task.  
**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

task.  
**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**  
  
**Default**  
**TASK\_STATUS\_OPEN**

 |
| 

task.  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

task.  
**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

task.  
**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

task.  
**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

task.  
**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

task.  
**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

task.  
updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**  
  
**Default**  
**ACTOR\_TYPE\_UNKNOWN**

 |
| 

task.  
updated\_by.  
**actor\_id**  
  
string

 |  |
| 

**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. This is used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |

##### [](#response_11 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier of the specified Task.

 |
| 

**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Task was created.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

When the Task was updated.

 |
| 

**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

ui\_actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

ui\_actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

ui\_actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

ui\_actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui\_actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of **event** or target\_status*

 |
| 

ui\_actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of event or **target\_status***

 |
| 

**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**

 |
| 

updated\_by.  
**actor\_id**  
  
string

 |  |

#### [](#_workflows_api_v1_tasks_Task_UpdateTask "Copy link to heading")Update

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The UpdateTask endpoint is deprecated.*

Updates a Task.

**Endpoint:** PUT /v1/tasks/{task.id}

##### [](#request_12 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
task.  
**id**  
  
string

 | 

The unique identifier of the specified Task.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. This is used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**task**  
  
object

 | 

The Task to be updated.  
  
Required.

 |
| 

task.  
**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

task.  
**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

task.  
**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**  
  
**Default**  
**TASK\_STATUS\_OPEN**

 |
| 

task.  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

task.  
**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

task.  
**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

task.  
**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

task.  
**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

task.  
**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

task.  
updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**  
  
**Default**  
**ACTOR\_TYPE\_UNKNOWN**

 |
| 

task.  
updated\_by.  
**actor\_id**  
  
string

 |  |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields in the resource are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#response_12 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier of the specified Task.

 |
| 

**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the Task belongs to.

 |
| 

**title**  
  
string

 | 

The title of the Task. Valid titles have a maximum length of 256 characters, must not include newlines, must not consist only of whitespace and must not begin with whitespace.  
  
Min length: 1 characters.  
Max length: 256 characters.

 |
| 

**status**  
  
enum

 | 

The current status of the Task.  
  
**Enum values**  
**TASK\_STATUS\_OPEN**  
**TASK\_STATUS\_CLOSED**

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Task was created.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

When the Task was updated.

 |
| 

**ui\_panels\[\]**  
  
array \[object\]

 | 

Additional information that is to be displayed.

 |
| 

ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

**ui\_actions\[\]**  
  
array \[object\]

 | 

The actions that are to be taken for this Task.

 |
| 

ui\_actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

ui\_actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

ui\_actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui\_actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

ui\_actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui\_actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of **event** or target\_status*

 |
| 

ui\_actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of event or **target\_status***

 |
| 

**provided\_ui\_input**  
  
map \[string: string\]

 | 

Data input provided by the user via the UI.

 |
| 

**selected\_ui\_action\_id**  
  
string

 | 

The action that was selected by the user on the UI.

 |
| 

**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task.

 |
| 

updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**

 |
| 

updated\_by.  
**actor\_id**  
  
string

 |  |

### [](#taskthread "Copy link to heading")TaskThread

#### [](#available_methods_3 "Copy link to heading")Available methods

-   [Get](#_workflows_api_v1_tasks_TaskThread_GetTaskThread) Retrieves a Task Thread based on its ID. **(Deprecated)**
    
-   [List](#_workflows_api_v1_tasks_ListTaskThreadsResponse_ListTaskThreads) Lists all the Task Threads in the system subject to filters and pagination. **(Deprecated)**
    
-   [Create](#_workflows_api_v1_tasks_TaskThread_CreateTaskThread) Creates a Task Thread. **(Deprecated)**
    
-   [Update](#_workflows_api_v1_tasks_TaskThread_UpdateTaskThread) Updates a Task Thread. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_tasks_BatchGetTaskThreadsResponse_BatchGetTaskThreads) Retrieves one or more Task Threads based on their IDs. **(Deprecated)**
    

#### [](#_workflows_api_v1_tasks_TaskThread_GetTaskThread "Copy link to heading")Get

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The GetTaskThread endpoint is deprecated.*

Retrieves a Task Thread based on its ID.

**Endpoint:** GET /v1/taskThread/{id}

##### [](#request_13 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of Task Thread that is to be retrieved.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include when retrieving the Task Threads.  
  
**Enum values**  
**INCLUDE\_FIELD\_UI\_PANELS**

 |

##### [](#response_13 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |
| 

**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

**status**  
  
enum

 | 

The current status of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Task Thread was created.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

When the Thread was last updated.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

header\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

header\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

header\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |

#### [](#_workflows_api_v1_tasks_ListTaskThreadsResponse_ListTaskThreads "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListTaskThreads endpoint is deprecated.*

Lists all the Task Threads in the system subject to filters and pagination.

**Endpoint:** GET /v1/taskThreads

##### [](#request_14 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

Options for ordering the list of Task Threads returned.  
  
**Enum values**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_DESC**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_ASC**  
**ORDER\_BY\_PRIORITY\_ASC**  
**ORDER\_BY\_PRIORITY\_DESC**  
**ORDER\_BY\_LAST\_UPDATE\_TIMESTAMP\_ASC**  
**ORDER\_BY\_LAST\_UPDATE\_TIMESTAMP\_DESC**

 |
| 

**statuses**  
  
array \[enum\]

 | 

A list of the statuses of the Task Threads that are to be retrieved.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

**intended\_for\_role\_ids**  
  
array \[string\]

 | 

A list of the role IDs that are intended to work on the Task Threads that are to be retrieved.

 |
| 

**assigned\_employee\_ids**  
  
array \[string\]

 | 

A list of the assigned employee IDs of the Task Threads that are to be retrieved.

 |
| 

**tags**  
  
array \[string\]

 | 

A list of the tags associated with the Task Threads that are to be retrieved.

 |
| 

**page\_size**  
  
integer

 | 

The number of Task Threads that are to be retrieved.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#response_14 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**task\_threads\[\]**  
  
array \[object\]

 | 

A list of the Task Threads that are to be returned.

 |
| 

task\_threads\[\].  
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |
| 

task\_threads\[\].  
**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

task\_threads\[\].  
**status**  
  
enum

 | 

The current status of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

task\_threads\[\].  
**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**

 |
| 

task\_threads\[\].  
**create\_timestamp**  
  
dateTime

 | 

When the Task Thread was created.

 |
| 

task\_threads\[\].  
**last\_update\_timestamp**  
  
dateTime

 | 

When the Thread was last updated.

 |
| 

task\_threads\[\].  
**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

task\_threads\[\].  
**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

task\_threads\[\].  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

task\_threads\[\].  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

task\_threads\[\].  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

task\_threads\[\].  
**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

task\_threads\[\].  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

task\_threads\[\].  
**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

task\_threads\[\].  
header\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

task\_threads\[\].  
header\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

task\_threads\[\].  
header\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

task\_threads\[\].  
**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

task\_threads\[\].  
**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

task\_threads\[\].  
**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

task\_threads\[\].  
additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

#### [](#_workflows_api_v1_tasks_TaskThread_CreateTaskThread "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateTaskThread endpoint is deprecated.*

Creates a Task Thread.

**Endpoint:** POST /v1/taskThreads

##### [](#request_15 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**task\_thread**  
  
object

 | 

The Task Thread to be created.  
  
Required.

 |
| 

task\_thread.  
**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

task\_thread.  
**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**  
  
**Default**  
**TASK\_THREAD\_PRIORITY\_LOW**

 |
| 

task\_thread.  
**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

task\_thread.  
**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

task\_thread.  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

task\_thread.  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

task\_thread.  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

task\_thread.  
**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

task\_thread.  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

task\_thread.  
**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

task\_thread.  
**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

task\_thread.  
**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

task\_thread.  
**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

task\_thread.  
additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |

##### [](#response_15 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |
| 

**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

**status**  
  
enum

 | 

The current status of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Task Thread was created.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

When the Thread was last updated.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

header\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

header\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

header\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |

#### [](#_workflows_api_v1_tasks_TaskThread_UpdateTaskThread "Copy link to heading")Update

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The UpdateTaskThread endpoint is deprecated.*

Updates a Task Thread.

**Endpoint:** PUT /v1/taskThreads/{task\_thread.id}

##### [](#request_16 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
task\_thread.  
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. This is used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**actor**  
  
object

 | 

The reference of the entity intending to update the Task Thread.  
  
Required.

 |
| 

actor.  
**type**  
  
enum

 | 

Required.  
  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**  
  
**Default**  
**ACTOR\_TYPE\_UNKNOWN**

 |
| 

actor.  
**actor\_id**  
  
string

 | 

Required.

 |
| 

**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**task\_thread**  
  
object

 | 

The Task Thread to be updated.  
  
Required.

 |
| 

task\_thread.  
**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

task\_thread.  
**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**  
  
**Default**  
**TASK\_THREAD\_PRIORITY\_LOW**

 |
| 

task\_thread.  
**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

task\_thread.  
**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

task\_thread.  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

task\_thread.  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

task\_thread.  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

task\_thread.  
**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

task\_thread.  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

task\_thread.  
**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

task\_thread.  
**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

task\_thread.  
**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

task\_thread.  
**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

task\_thread.  
additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields in the resource are to be updated.  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#response_16 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |
| 

**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

**status**  
  
enum

 | 

The current status of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the Task Thread was created.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

When the Thread was last updated.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

header\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

header\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

header\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |

#### [](#_workflows_api_v1_tasks_BatchGetTaskThreadsResponse_BatchGetTaskThreads "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetTaskThreads endpoint is deprecated.*

Retrieves one or more Task Threads based on their IDs.

**Endpoint:** GET /v1/taskThreads:batchGet

##### [](#request_17 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**ids**  
  
array \[string\]

 | 

A list of the IDs of the Task Threads that are to be retrieved.  
  
Required.  
Min length: 1 characters.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

The fields to include when retrieving Task Threads.  
  
**Enum values**  
**INCLUDE\_FIELD\_UI\_PANELS**

 |

##### [](#response_17 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**task\_threads**  
  
map \[string: object\]

 | 

A map of the Task Thread ID to the Task Thread.

 |
| 

task\_threads\[KEY\].  
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |
| 

task\_threads\[KEY\].  
**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

task\_threads\[KEY\].  
**status**  
  
enum

 | 

The current status of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

task\_threads\[KEY\].  
**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**

 |
| 

task\_threads\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

When the Task Thread was created.

 |
| 

task\_threads\[KEY\].  
**last\_update\_timestamp**  
  
dateTime

 | 

When the Thread was last updated.

 |
| 

task\_threads\[KEY\].  
**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

task\_threads\[KEY\].  
**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

task\_threads\[KEY\].  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

task\_threads\[KEY\].  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

task\_threads\[KEY\].  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

task\_threads\[KEY\].  
**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

task\_threads\[KEY\].  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

task\_threads\[KEY\].  
**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

task\_threads\[KEY\].  
header\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

task\_threads\[KEY\].  
header\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

task\_threads\[KEY\].  
header\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

task\_threads\[KEY\].  
**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

task\_threads\[KEY\].  
**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

task\_threads\[KEY\].  
**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

task\_threads\[KEY\].  
additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |

### [](#taskthreadhistory "Copy link to heading")TaskThreadHistory

#### [](#available_methods_4 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_tasks_ListTaskThreadHistoryResponse_ListTaskThreadHistory) Lists all the history entries for a specified Task Thread. **(Deprecated)**
    

#### [](#_workflows_api_v1_tasks_ListTaskThreadHistoryResponse_ListTaskThreadHistory "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListTaskThreadHistory endpoint is deprecated.*

Lists all the history entries for a specified Task Thread.

**Endpoint:** GET /v1/taskThread/{task\_thread\_id}/history

##### [](#request_18 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the history entries are to be retrieved from.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

Options for ordering the list of results returned.  
  
**Enum values**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_DESC**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_ASC**

 |
| 

**page\_size**  
  
integer

 | 

The number of Task Thread history entries that are to be retrieved.  
  
Required.

 |
| 

**page\_token**  
  
string

 | 

The token of the page the results are to be retrieved from.

 |

##### [](#response_18 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**task\_thread\_history\[\]**  
  
array \[object\]

 | 

The Task Thread history entries that are retrieved.

 |
| 

task\_thread\_history\[\].  
**id**  
  
string

 | 

The unique identifier of the Thread history entry.

 |
| 

task\_thread\_history\[\].  
**task\_thread\_id**  
  
string

 | 

The ID of the Task Thread the entry belongs to.

 |
| 

task\_thread\_history\[\].  
**update\_timestamp**  
  
dateTime

 | 

When the entry was updated.

 |
| 

task\_thread\_history\[\].  
**updated\_by**  
  
object

 | 

The reference of the entity which updated this Task Thread history entry.

 |
| 

task\_thread\_history\[\].  
updated\_by.  
**type**  
  
enum

 | 

+  
**Enum values**  
**ACTOR\_TYPE\_UNKNOWN**  
**ACTOR\_TYPE\_EMPLOYEE**  
**ACTOR\_TYPE\_WORKFLOW\_INSTANCE**  
**ACTOR\_TYPE\_SERVICE**  
**ACTOR\_TYPE\_TASK**

 |
| 

task\_thread\_history\[\].  
updated\_by.  
**actor\_id**  
  
string

 |  |
| 

task\_thread\_history\[\].  
**task\_thread**  
  
object

 | 

The snapshot of the Thread at the given time.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**id**  
  
string

 | 

The unique identifier for the Task Thread.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**title**  
  
string

 | 

The title of the Task Thread.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**status**  
  
enum

 | 

The current status of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_STATUS\_NO\_INPUT\_REQUIRED**  
**TASK\_THREAD\_STATUS\_INPUT\_REQUIRED**

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**priority**  
  
enum

 | 

The priority of the Task Thread.  
  
**Enum values**  
**TASK\_THREAD\_PRIORITY\_LOW**  
**TASK\_THREAD\_PRIORITY\_MEDIUM**  
**TASK\_THREAD\_PRIORITY\_HIGH**  
**TASK\_THREAD\_PRIORITY\_CRITICAL**

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**create\_timestamp**  
  
dateTime

 | 

When the Task Thread was created.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**last\_update\_timestamp**  
  
dateTime

 | 

When the Thread was last updated.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**tags\[\]**  
  
array \[string\]

 | 

The tags applied to the Task Thread; these are used for sorting.  
  
Min length: 1 characters.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**access\_control\_policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Task Thread.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

task\_thread\_history\[\].  
task\_thread.  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

task\_thread\_history\[\].  
task\_thread.  
**created\_by\_employee\_id**  
  
string

 | 

The ID of the employee who created the Task Thread.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**created\_by\_workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance that created the Task Thread.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**header\_panels\[\]**  
  
array \[object\]

 | 

The header elements to be displayed in the UI.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
header\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
header\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
header\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**intended\_for\_role\_ids\[\]**  
  
array \[string\]

 | 

The employee roles that can be assigned to work on Tasks in the Thread.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**assigned\_employee\_id**  
  
string

 | 

The ID of employee the Thread is assigned to.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
**additional\_references**  
  
map \[string: object\]

 | 

A field used to stored references to other resources such as customers and accounts. The key of the map defines the resource type.

 |
| 

task\_thread\_history\[\].  
task\_thread.  
additional\_references\[KEY\].  
**references\[\]**  
  
array \[string\]

 |  |
| 

task\_thread\_history\[\].  
**update\_mask**  
  
object

 | 

The field mask indicating which fields got updated at this point in time.

 |
| 

task\_thread\_history\[\].  
update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page of results. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page of results. If empty, this is the last page of results.

 |

## [](#tickets "Copy link to heading")Tickets

Tickets represent tasks which require actioning by bank employees. A ticket can notify a bank employee of an event or require the bank employee to provide or review information.

Tickets can be created by Workflows. For further information, please refer to [Workflows](/vault-core/5-8/EN#Workflows).

**Example**: During the mortgage application process, the workflow creates a ticket asking a bank employee to review the application and to approve or reject it.

Tickets can be **assigned** to roles, or particular employees, **updated**, **tagged** and they can have a **status**.

The status defines the lifecycle of a ticket. Possible values are:

-   OPEN
    
-   CLOSED
    
-   IN PROGRESS
    
-   CANCELLED
    

On status update, interested parties get notified about the update and can act on it. In the case a ticket was created by a workflow, a change in the ticket status can trigger the workflow to move to the next state.

Any status update is sent to the workflow engine. Currently, only CLOSED and CANCELLED move Workflows forward.

Similar to Workflows, on ticket creation one can specify a custom user interface which defines the data to be displayed on the ticket as well as the possible interactions a user can have with the ticket. Possible interactions are request for data input or change of ticket status.

chat\_bubble

These elements are (currently) defined in the Workflow definition.

Tags can be used to categorise and filter tickets.

The following methods and endpoints are available:

-   `GET /v1/ticket-tags` - Lists all of the tags available to be assigned to tickets.
    
-   `GET /v1/tickets` - List all the tickets in the system, subject to filters.
    
-   `PUT /v1/tickets/{ticket.id}` - Updates a ticket.
    
-   `GET /v1/tickets:batchGet` - Retrieves one or more tickets based on their ID.
    
-   `GET /v1/ticket-updates` - Lists ticket updates.
    

### [](#ticket "Copy link to heading")Ticket

#### [](#available_methods_5 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_tickets_ListTicketsResponse_ListTickets) Lists all of the tickets in the system subject to filters and pagination. **(Deprecated)**
    
-   [Create](#_workflows_api_v1_tickets_Ticket_CreateTicket) Creates a ticket. **(Deprecated)**
    
-   [Update](#_workflows_api_v1_tickets_Ticket_UpdateTicket) Updates a ticket. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_tickets_BatchGetTicketsResponse_BatchGetTickets) Retrieves one or more tickets based on their ID. **(Deprecated)**
    

#### [](#_workflows_api_v1_tickets_ListTicketsResponse_ListTickets "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListTickets endpoint is deprecated.*

Lists all of the tickets in the system subject to filters and pagination. By default, this only returns tickets assigned to roles which the caller is also assigned to.

**Endpoint:** GET /v1/tickets

##### [](#request_19 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**order\_by\_direction**  
  
enum

 | 

Ordering direction of results by `create_timestamp`. Optional; default descending.  
  
**Enum values**  
**ORDER\_BY\_DESC**  
**ORDER\_BY\_ASC**  
  
**Default**  
**ORDER\_BY\_DESC**

 |
| 

**author\_ids**  
  
array \[string\]

 | 

Allows filter based on author ID. Optional.  
  
Min length: 1 characters.  
Max length: 50 characters.

 |
| 

**assignee\_ids**  
  
array \[string\]

 | 

The IDs of employees to return assigned tickets. Optional.  
  
Min length: 1 characters.  
Max length: 50 characters.

 |
| 

**tags**  
  
array \[string\]

 | 

The tags to filter tickets by. Optional.  
  
Min length: 1 characters.

 |
| 

**workflow\_instance\_ids**  
  
array \[string\]

 | 

The IDs of the Workflow instances the tickets were created on. Optional.  
  
Min length: 10 characters.  
Max length: 300 characters.

 |
| 

**include\_statuses**  
  
array \[enum\]

 | 

Statuses that returned tickets may be in. Optional.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

**customer\_ids**  
  
array \[string\]

 | 

Allows filter based on customer ID. Optional.  
  
Min length: 1 characters.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be retrieved. Required; non-zero.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |
| 

**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**role\_ids**  
  
array \[string\]

 | 

The IDs of the Roles the returned tickets are assigned to. Optional.

 |

##### [](#response_19 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**tickets\[\]**  
  
array \[object\]

 | 

A list of matching tickets.

 |
| 

tickets\[\].  
**id**  
  
string

 | 

The unique identifier for this ticket.

 |
| 

tickets\[\].  
**title**  
  
string

 | 

The title of the ticket.

 |
| 

tickets\[\].  
**description**  
  
string

 | 

A verbose description and details needed to resolve the ticket.

 |
| 

tickets\[\].  
**create\_timestamp**  
  
dateTime

 | 

When the ticket was created.

 |
| 

tickets\[\].  
**due\_timestamp**  
  
dateTime

 | 

When the ticket should be resolved by.

 |
| 

tickets\[\].  
**snoozed\_timestamp**  
  
dateTime

 | 

Work and notifications on a ticket can be delayed till a later time. When the ticket will be reactivated.

 |
| 

tickets\[\].  
**author\_id**  
  
string

 | 

The ID of the author. Links to an Employee or System.

 |
| 

tickets\[\].  
**assignee\_id**  
  
string

 | 

The ID of the Employee the ticket is assigned to.

 |
| 

tickets\[\].  
**customer\_ids\[\]**  
  
array \[string\]

 | 

The ID of the Customer(s) the ticket is associated with.

 |
| 

tickets\[\].  
**status**  
  
enum

 | 

The current status of the ticket. Can be updated.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

tickets\[\].  
**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

tickets\[\].  
**attachment\_ids\[\]**  
  
array \[string\]

 | 

The IDs of all Documents attached to the ticket.

 |
| 

tickets\[\].  
**metadata**  
  
map \[string: string\]

 | 

Metadata of the ticket. Can be updated. Note that the `UpdateTicket` call will completely override the metadata with the one provided in the Update call.

 |
| 

tickets\[\].  
**tags\[\]**  
  
array \[string\]

 | 

The tags that the ticket has applied. Used for sorting.

 |
| 

tickets\[\].  
**ui**  
  
object

 | 

A description of the Ticket’s UI elements.

 |
| 

tickets\[\].  
ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

tickets\[\].  
ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

tickets\[\].  
ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

tickets\[\].  
ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tickets\[\].  
ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

tickets\[\].  
ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

tickets\[\].  
ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tickets\[\].  
ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

tickets\[\].  
ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

tickets\[\].  
ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

tickets\[\].  
ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

tickets\[\].  
**role\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the roles this ticket is assigned to.

 |
| 

tickets\[\].  
**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this ticket.

 |
| 

tickets\[\].  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

tickets\[\].  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

tickets\[\].  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

#### [](#_workflows_api_v1_tickets_Ticket_CreateTicket "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateTicket endpoint is deprecated.*

Creates a ticket.

**Endpoint:** POST /v1/tickets

##### [](#request_20 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 256 characters.

 |
| 

**ticket**  
  
object

 | 

The ticket to create. Required.

 |
| 

ticket.  
**id**  
  
string

 | 

The unique identifier for this ticket.

 |
| 

ticket.  
**title**  
  
string

 | 

The title of the ticket.

 |
| 

ticket.  
**description**  
  
string

 | 

A verbose description and details needed to resolve the ticket.

 |
| 

ticket.  
**due\_timestamp**  
  
dateTime

 | 

When the ticket should be resolved by.

 |
| 

ticket.  
**snoozed\_timestamp**  
  
dateTime

 | 

Work and notifications on a ticket can be delayed till a later time. When the ticket will be reactivated.

 |
| 

ticket.  
**author\_id**  
  
string

 | 

The ID of the author. Links to an Employee or System.

 |
| 

ticket.  
**assignee\_id**  
  
string

 | 

The ID of the Employee the ticket is assigned to.

 |
| 

ticket.  
**customer\_ids\[\]**  
  
array \[string\]

 | 

The ID of the Customer(s) the ticket is associated with.

 |
| 

ticket.  
**status**  
  
enum

 | 

The current status of the ticket. Can be updated.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**  
  
**Default**  
**TICKET\_STATUS\_UNKNOWN**

 |
| 

ticket.  
**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**  
  
**Default**  
**TICKET\_PRIORITY\_UNKNOWN**

 |
| 

ticket.  
**attachment\_ids\[\]**  
  
array \[string\]

 | 

The IDs of all Documents attached to the ticket.

 |
| 

ticket.  
**metadata**  
  
map \[string: string\]

 | 

Metadata of the ticket. Can be updated. Note that the `UpdateTicket` call will completely override the metadata with the one provided in the Update call.

 |
| 

ticket.  
**tags\[\]**  
  
array \[string\]

 | 

The tags that the ticket has applied. Used for sorting.

 |
| 

ticket.  
**ui**  
  
object

 | 

A description of the Ticket’s UI elements.

 |
| 

ticket.  
**role\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the roles this ticket is assigned to.

 |
| 

ticket.  
**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this ticket.

 |

##### [](#response_20 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for this ticket.

 |
| 

**title**  
  
string

 | 

The title of the ticket.

 |
| 

**description**  
  
string

 | 

A verbose description and details needed to resolve the ticket.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the ticket was created.

 |
| 

**due\_timestamp**  
  
dateTime

 | 

When the ticket should be resolved by.

 |
| 

**snoozed\_timestamp**  
  
dateTime

 | 

Work and notifications on a ticket can be delayed till a later time. When the ticket will be reactivated.

 |
| 

**author\_id**  
  
string

 | 

The ID of the author. Links to an Employee or System.

 |
| 

**assignee\_id**  
  
string

 | 

The ID of the Employee the ticket is assigned to.

 |
| 

**customer\_ids\[\]**  
  
array \[string\]

 | 

The ID of the Customer(s) the ticket is associated with.

 |
| 

**status**  
  
enum

 | 

The current status of the ticket. Can be updated.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

**attachment\_ids\[\]**  
  
array \[string\]

 | 

The IDs of all Documents attached to the ticket.

 |
| 

**metadata**  
  
map \[string: string\]

 | 

Metadata of the ticket. Can be updated. Note that the `UpdateTicket` call will completely override the metadata with the one provided in the Update call.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

The tags that the ticket has applied. Used for sorting.

 |
| 

**ui**  
  
object

 | 

A description of the Ticket’s UI elements.

 |
| 

ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

**role\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the roles this ticket is assigned to.

 |
| 

**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this ticket.

 |
| 

**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |

#### [](#_workflows_api_v1_tickets_Ticket_UpdateTicket "Copy link to heading")Update

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The UpdateTicket endpoint is deprecated.*

Updates a ticket.

**Endpoint:** PUT /v1/tickets/{ticket.id}

##### [](#request_21 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
ticket.  
**id**  
  
string

 | 

The unique identifier for this ticket.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 256 characters.

 |
| 

**ticket**  
  
object

 | 

The ticket to update. Only the fields shown can be updated. Required.

 |
| 

ticket.  
**snoozed\_timestamp**  
  
dateTime

 | 

Work and notifications on a ticket can be delayed till a later time. When the ticket will be reactivated.

 |
| 

ticket.  
**assignee\_id**  
  
string

 | 

The ID of the Employee the ticket is assigned to.

 |
| 

ticket.  
**status**  
  
enum

 | 

The current status of the ticket. Can be updated.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**  
  
**Default**  
**TICKET\_STATUS\_UNKNOWN**

 |
| 

ticket.  
**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**  
  
**Default**  
**TICKET\_PRIORITY\_UNKNOWN**

 |
| 

ticket.  
**metadata**  
  
map \[string: string\]

 | 

Metadata of the ticket. Can be updated. Note that the `UpdateTicket` call will completely override the metadata with the one provided in the Update call.

 |
| 

**update\_mask**  
  
object

 | 

The field mask used to indicate which fields in the resource are to be updated. Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |
| 

**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**ticket\_update\_comment**  
  
string

 | 

A comment to include on the associated Ticket Update.

 |

##### [](#response_21 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for this ticket.

 |
| 

**title**  
  
string

 | 

The title of the ticket.

 |
| 

**description**  
  
string

 | 

A verbose description and details needed to resolve the ticket.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When the ticket was created.

 |
| 

**due\_timestamp**  
  
dateTime

 | 

When the ticket should be resolved by.

 |
| 

**snoozed\_timestamp**  
  
dateTime

 | 

Work and notifications on a ticket can be delayed till a later time. When the ticket will be reactivated.

 |
| 

**author\_id**  
  
string

 | 

The ID of the author. Links to an Employee or System.

 |
| 

**assignee\_id**  
  
string

 | 

The ID of the Employee the ticket is assigned to.

 |
| 

**customer\_ids\[\]**  
  
array \[string\]

 | 

The ID of the Customer(s) the ticket is associated with.

 |
| 

**status**  
  
enum

 | 

The current status of the ticket. Can be updated.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

**attachment\_ids\[\]**  
  
array \[string\]

 | 

The IDs of all Documents attached to the ticket.

 |
| 

**metadata**  
  
map \[string: string\]

 | 

Metadata of the ticket. Can be updated. Note that the `UpdateTicket` call will completely override the metadata with the one provided in the Update call.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

The tags that the ticket has applied. Used for sorting.

 |
| 

**ui**  
  
object

 | 

A description of the Ticket’s UI elements.

 |
| 

ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

**role\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the roles this ticket is assigned to.

 |
| 

**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this ticket.

 |
| 

**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |

#### [](#_workflows_api_v1_tickets_BatchGetTicketsResponse_BatchGetTickets "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetTickets endpoint is deprecated.*

Retrieves one or more tickets based on their ID.

**Endpoint:** GET /v1/tickets:batchGet

##### [](#request_22 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of IDs of tickets to be retrieved. Required.  
  
Required.  
Min length: 1 characters.

 |
| 

**access\_control\_context**  
  
object

 | 

Specifies the details of the user performing this call. Used to enforce access control on the resource.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |

##### [](#response_22 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**tickets**  
  
map \[string: object\]

 | 

Map of ticket ID to ticket.

 |
| 

tickets\[KEY\].  
**id**  
  
string

 | 

The unique identifier for this ticket.

 |
| 

tickets\[KEY\].  
**title**  
  
string

 | 

The title of the ticket.

 |
| 

tickets\[KEY\].  
**description**  
  
string

 | 

A verbose description and details needed to resolve the ticket.

 |
| 

tickets\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

When the ticket was created.

 |
| 

tickets\[KEY\].  
**due\_timestamp**  
  
dateTime

 | 

When the ticket should be resolved by.

 |
| 

tickets\[KEY\].  
**snoozed\_timestamp**  
  
dateTime

 | 

Work and notifications on a ticket can be delayed till a later time. When the ticket will be reactivated.

 |
| 

tickets\[KEY\].  
**author\_id**  
  
string

 | 

The ID of the author. Links to an Employee or System.

 |
| 

tickets\[KEY\].  
**assignee\_id**  
  
string

 | 

The ID of the Employee the ticket is assigned to.

 |
| 

tickets\[KEY\].  
**customer\_ids\[\]**  
  
array \[string\]

 | 

The ID of the Customer(s) the ticket is associated with.

 |
| 

tickets\[KEY\].  
**status**  
  
enum

 | 

The current status of the ticket. Can be updated.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

tickets\[KEY\].  
**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

tickets\[KEY\].  
**attachment\_ids\[\]**  
  
array \[string\]

 | 

The IDs of all Documents attached to the ticket.

 |
| 

tickets\[KEY\].  
**metadata**  
  
map \[string: string\]

 | 

Metadata of the ticket. Can be updated. Note that the `UpdateTicket` call will completely override the metadata with the one provided in the Update call.

 |
| 

tickets\[KEY\].  
**tags\[\]**  
  
array \[string\]

 | 

The tags that the ticket has applied. Used for sorting.

 |
| 

tickets\[KEY\].  
**ui**  
  
object

 | 

A description of the Ticket’s UI elements.

 |
| 

tickets\[KEY\].  
ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

tickets\[KEY\].  
ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

tickets\[KEY\].  
ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

tickets\[KEY\].  
ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tickets\[KEY\].  
ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

tickets\[KEY\].  
ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

tickets\[KEY\].  
ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

tickets\[KEY\].  
ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

tickets\[KEY\].  
**role\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the roles this ticket is assigned to.

 |
| 

tickets\[KEY\].  
**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this ticket.

 |
| 

tickets\[KEY\].  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Data used during policy evaluation.

 |
| 

tickets\[KEY\].  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

tickets\[KEY\].  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |

### [](#tickettag "Copy link to heading")TicketTag

#### [](#available_methods_6 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_tickets_ListTicketTagsResponse_ListTicketTags) Lists all of the available tags that can be assigned to tickets. **(Deprecated)**
    

#### [](#_workflows_api_v1_tickets_ListTicketTagsResponse_ListTicketTags "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListTicketTags endpoint is deprecated.*

Lists all of the available tags that can be assigned to tickets.

**Endpoint:** GET /v1/ticket-tags

##### [](#request_23 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**page\_size**  
  
integer

 | 

The number of ticket tags to be retrieved. Required.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |

##### [](#response_23 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**ticket\_tags\[\]**  
  
array \[string\]

 | 

A list of matching ticket tags.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

### [](#ticketupdate "Copy link to heading")TicketUpdate

#### [](#available_methods_7 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_tickets_ListTicketUpdatesResponse_ListTicketUpdates) Lists ticket updates. **(Deprecated)**
    

#### [](#_workflows_api_v1_tickets_ListTicketUpdatesResponse_ListTicketUpdates "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListTicketUpdates endpoint is deprecated.*

Lists ticket updates.

**Endpoint:** GET /v1/ticket-updates

##### [](#request_24 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ticket\_id**  
  
string

 | 

The unique identifier for the ticket. Required.  
  
Required.

 |
| 

**page\_size**  
  
integer

 | 

The number of ticket updates to be retrieved. Required.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |
| 

**order\_by\_direction**  
  
enum

 | 

Field to specify sorting.  
  
**Enum values**  
**ORDER\_BY\_DESC**  
**ORDER\_BY\_ASC**  
  
**Default**  
**ORDER\_BY\_DESC**

 |

##### [](#response_24 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**ticket\_updates\[\]**  
  
array \[object\]

 |  |
| 

ticket\_updates\[\].  
**id**  
  
string

 | 

The unique identifier of the update.

 |
| 

ticket\_updates\[\].  
**create\_timestamp**  
  
dateTime

 | 

The creation time of the update.

 |
| 

ticket\_updates\[\].  
**author\_id**  
  
string

 | 

The author ID of the update.

 |
| 

ticket\_updates\[\].  
**comment**  
  
string

 | 

Generic update comments.

 |
| 

ticket\_updates\[\].  
**ticket\_id**  
  
string

 | 

The ID of the updated ticket.

 |
| 

ticket\_updates\[\].  
**ticket**  
  
object

 | 

The updated ticket.

 |
| 

ticket\_updates\[\].  
ticket.  
**title**  
  
string

 | 

The title of the ticket.

 |
| 

ticket\_updates\[\].  
ticket.  
**description**  
  
string

 | 

A description of the ticket.

 |
| 

ticket\_updates\[\].  
ticket.  
**metadata**  
  
map \[string: string\]

 | 

Ticket metadata.

 |
| 

ticket\_updates\[\].  
ticket.  
**snoozed\_timestamp**  
  
dateTime

 | 

If set ticket is snoozed until the defined point in time.

 |
| 

ticket\_updates\[\].  
ticket.  
**status**  
  
enum

 | 

The ticket status.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

ticket\_updates\[\].  
ticket.  
**assignee\_id**  
  
string

 | 

Assignee ID. If not set ticket is not assigned.

 |
| 

ticket\_updates\[\].  
ticket.  
**priority**  
  
enum

 | 

The ticket priority.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

ticket\_updates\[\].  
**update\_mask**  
  
object

 | 

Indicates which fields on the resource were updated.

 |
| 

ticket\_updates\[\].  
update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

## [](#workflows "Copy link to heading")Workflows

Workflows exist to allow automation of bank operations processes. They allow integration with Vault APIs, third-party services, and operations users (via a Ticket system). They comprise a number of states, where one is a start state, and one or more are end states, and transitions between those states. The transitions are triggered by receiving events, such as receiving a result from a third-party service, or a ticket being resolved by a user.

A **Workflow Definition Version** corresponds to a particular YAML specification that defines those states and transitions. Multiple versions of a particular YAML specification are tied together by a common **Workflow Definition**. A **Workflow instance** is when one of those **Workflow** **Definition Versions** is instantiated for a particular set of input data (a specific customer, account, etc.).

The purpose of the Workflows API is to allow management of **Workflow Definitions**, **Workflow** **Definition Versions**, and **Workflow instances** by creating, retrieving, updating, and deleting them.

chat\_bubble

\*Workflow instances\* create tickets and populate them with their initial information, but do not update them. Updating Tickets is performed via the link:{baseURL}#Tickets\[Tickets\] endpoints, resulting in an event that a \*Workflow instance\* will react to, potentially transitioning to a new state.

### [](#previousworkflowinstanceevent "Copy link to heading")PreviousWorkflowInstanceEvent

#### [](#available_methods_8 "Copy link to heading")Available methods

-   [Retry](#_workflows_api_v1_workflows_WorkflowInstanceEventResponse_RetryPreviousWorkflowInstanceEvent) Retries the previously-fired event for a given Workflow instance. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_WorkflowInstanceEventResponse_RetryPreviousWorkflowInstanceEvent "Copy link to heading")Retry

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The RetryPreviousWorkflowInstanceEvent endpoint is deprecated.*

Retries the previously-fired event for a given Workflow instance.

**Endpoint:** POST /v1/workflow-instance-events:retryPrevious

##### [](#request_25 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**instance\_id**  
  
string

 | 

The Workflow Instance ID for which the previous associated Workflow Event will be retried.

 |

##### [](#response_25 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**event\_id**  
  
string

 | 

The Workflow Instance Event ID.

 |
| 

**processed**  
  
boolean

 | 

Indicates whether the Workflow Instance Event was successfully processed.

 |

### [](#workflowdefinition "Copy link to heading")WorkflowDefinition

#### [](#available_methods_9 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_workflows_ListWorkflowDefinitionsResponse_ListWorkflowDefinitions) Retrieves a set of Workflow Definitions matching the criteria in the request. **(Deprecated)**
    
-   [Update](#_workflows_api_v1_workflows_WorkflowDefinition_UpdateWorkflowDefinition) Updates an existing Workflow Definition. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_workflows_BatchGetWorkflowDefinitionsResponse_BatchGetWorkflowDefinitions) Retrieves a specific set of Workflow Definitions. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_ListWorkflowDefinitionsResponse_ListWorkflowDefinitions "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListWorkflowDefinitionsResponse endpoint is deprecated.*

Retrieves a set of Workflow Definitions matching the criteria in the request. Each Workflow Definition will reference its default Workflow Definition Version, which is what can be instantiated via `CreateWorkflowInstance`.

**Endpoint:** GET /v1/workflow-definitions

##### [](#request_26 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**order\_by\_direction**  
  
enum

 | 

The direction to order the results in. Default sort is by creation date of the default version.  
  
**Deprecated** as of release **1.8**, and will be removed no earlier than release **4.0**  
*The order\_by\_direction field is deprecated and will be replaced by a new order\_by pattern where you can order\_by on multiple fields*  
  
**Enum values**  
**ORDER\_BY\_DESC**  
**ORDER\_BY\_ASC**  
  
**Default**  
**ORDER\_BY\_DESC**

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |
| 

**exclude\_disabled**  
  
boolean

 | 

Indicates whether to exclude disabled Workflow Definitions.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

+  
**Enum values**  
**ORDER\_BY\_UPDATE\_TIMESTAMP\_ASC**  
**ORDER\_BY\_UPDATE\_TIMESTAMP\_DESC**  
**ORDER\_BY\_NAME\_ASC**  
**ORDER\_BY\_NAME\_DESC**

 |
| 

**name\_pattern\_match**  
  
object

 | 

Pattern matching on the Workflow Definition name.

 |
| 

name\_pattern\_match.  
**pattern**  
  
string

 |  |
| 

name\_pattern\_match.  
**match\_type**  
  
enum

 | 

+  
**Enum values**  
**MATCH\_TYPE\_UNKNOWN**  
**MATCH\_TYPE\_TEXT\_REGEX**  
**MATCH\_TYPE\_TEXT\_EXACT\_CASE\_SENSITIVE**  
**MATCH\_TYPE\_TEXT\_EXACT\_CASE\_INSENSITIVE**  
**MATCH\_TYPE\_TEXT\_SUBSTRING\_CASE\_SENSITIVE**  
**MATCH\_TYPE\_TEXT\_SUBSTRING\_CASE\_INSENSITIVE**  
**MATCH\_TYPE\_TEXT\_PREFIX\_CASE\_SENSITIVE**  
**MATCH\_TYPE\_TEXT\_PREFIX\_CASE\_INSENSITIVE**  
  
**Default**  
**MATCH\_TYPE\_UNKNOWN**

 |
| 

**tags**  
  
array \[string\]

 | 

Only Workflow Definitions that have at least one of the given tags will be returned. Optional.

 |
| 

**access\_control\_context**  
  
object

 | 

The access control context for the employee on whose behalf the call is to be made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |

##### [](#response_26 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_definitions\[\]**  
  
array \[object\]

 | 

A list of matching Workflow Definitions.

 |
| 

workflow\_definitions\[\].  
**id**  
  
string

 | 

The unique ID of this Workflow Definition.

 |
| 

workflow\_definitions\[\].  
**name**  
  
string

 | 

The name of this Workflow Definition, sourced from the specification of the default version.

 |
| 

workflow\_definitions\[\].  
**default\_workflow\_definition\_version\_id**  
  
string

 | 

The ID of the default Workflow Definition Version.

 |
| 

workflow\_definitions\[\].  
**tags\[\]**  
  
array \[string\]

 | 

A set of free-form strings associated with this Workflow Definition, sourced from the specification of the default version.

 |
| 

workflow\_definitions\[\].  
**update\_timestamp**  
  
dateTime

 | 

The time the default version was updated at, i.e., when this Workflow Definition’s default version was changed to a different Workflow Definition Version.

 |
| 

workflow\_definitions\[\].  
**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Workflow Definition.

 |
| 

workflow\_definitions\[\].  
**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition is disabled.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

#### [](#_workflows_api_v1_workflows_WorkflowDefinition_UpdateWorkflowDefinition "Copy link to heading")Update

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The UpdateWorkflowDefinition endpoint is deprecated.*

Updates an existing Workflow Definition. Currently only the default\_workflow\_definition\_version\_id can be updated.

**Endpoint:** PUT /v1/workflow-definitions/{workflow\_definition.id}

##### [](#request_27 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
workflow\_definition.  
**id**  
  
string

 | 

The unique ID of this Workflow Definition.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 256 characters.

 |
| 

**workflow\_definition**  
  
object

 | 

The Workflow Definition to update. Required.

 |
| 

workflow\_definition.  
**default\_workflow\_definition\_version\_id**  
  
string

 | 

The ID of the default Workflow Definition Version.

 |
| 

workflow\_definition.  
**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Workflow Definition.

 |
| 

workflow\_definition.  
**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition is disabled.

 |
| 

**update\_mask**  
  
object

 | 

The fields of the definition to update. Supported: `default_workflow_definition_version_id`. Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#response_27 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of this Workflow Definition.

 |
| 

**name**  
  
string

 | 

The name of this Workflow Definition, sourced from the specification of the default version.

 |
| 

**default\_workflow\_definition\_version\_id**  
  
string

 | 

The ID of the default Workflow Definition Version.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

A set of free-form strings associated with this Workflow Definition, sourced from the specification of the default version.

 |
| 

**update\_timestamp**  
  
dateTime

 | 

The time the default version was updated at, i.e., when this Workflow Definition’s default version was changed to a different Workflow Definition Version.

 |
| 

**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Workflow Definition.

 |
| 

**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition is disabled.

 |

#### [](#_workflows_api_v1_workflows_BatchGetWorkflowDefinitionsResponse_BatchGetWorkflowDefinitions "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetWorkflowDefinitions endpoint is deprecated.*

Retrieves a specific set of Workflow Definitions.

**Endpoint:** GET /v1/workflow-definitions:batchGet

##### [](#request_28 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of IDs of Workflow Definitions to be retrieved. Required; maximum of 100 IDs per request.

 |
| 

**access\_control\_context**  
  
object

 | 

The access control context for the employee on whose behalf the call is to be made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |

##### [](#response_28 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_definitions**  
  
map \[string: object\]

 | 

A map of Workflow Definition ID to Workflow Definition.

 |
| 

workflow\_definitions\[KEY\].  
**id**  
  
string

 | 

The unique ID of this Workflow Definition.

 |
| 

workflow\_definitions\[KEY\].  
**name**  
  
string

 | 

The name of this Workflow Definition, sourced from the specification of the default version.

 |
| 

workflow\_definitions\[KEY\].  
**default\_workflow\_definition\_version\_id**  
  
string

 | 

The ID of the default Workflow Definition Version.

 |
| 

workflow\_definitions\[KEY\].  
**tags\[\]**  
  
array \[string\]

 | 

A set of free-form strings associated with this Workflow Definition, sourced from the specification of the default version.

 |
| 

workflow\_definitions\[KEY\].  
**update\_timestamp**  
  
dateTime

 | 

The time the default version was updated at, i.e., when this Workflow Definition’s default version was changed to a different Workflow Definition Version.

 |
| 

workflow\_definitions\[KEY\].  
**policy\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the policies assigned to this Workflow Definition.

 |
| 

workflow\_definitions\[KEY\].  
**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition is disabled.

 |

### [](#workflowdefinitionversion "Copy link to heading")WorkflowDefinitionVersion

#### [](#available_methods_10 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_workflows_ListWorkflowDefinitionVersionsResponse_ListWorkflowDefinitionVersions) Retrieves a Workflow Definition Version. **(Deprecated)**
    
-   [Create](#_workflows_api_v1_workflows_WorkflowDefinitionVersion_CreateWorkflowDefinitionVersion) Creates a new Workflow Definition Version. **(Deprecated)**
    
-   [Delete](#_google_protobuf_Empty_DeleteWorkflowDefinitionVersion) Soft deletes a Workflow Definition Version. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_workflows_BatchGetWorkflowDefinitionVersionsResponse_BatchGetWorkflowDefinitionVersions) Retrieves multiple Workflow Definition Versions. **(Deprecated)**
    
-   [Validate](#_workflows_api_v1_workflows_ValidateWorkflowDefinitionVersionResponse_ValidateWorkflowDefinitionVersion) Validates the specification of a Workflow Definition Version. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_ListWorkflowDefinitionVersionsResponse_ListWorkflowDefinitionVersions "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListWorkflowDefinitionVersions endpoint is deprecated.*

Retrieves a Workflow Definition Version.

**Endpoint:** GET /v1/workflow-definition-versions

##### [](#request_29 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**workflow\_definition\_id**  
  
string

 | 

If not empty then only the Workflow Definition Versions with the given Workflow Definition ID will be returned. Optional.

 |
| 

**include\_deleted**  
  
boolean

 | 

Indicates whether to include deleted Workflow Definition Versions.

 |
| 

**tags**  
  
array \[string\]

 | 

Only Workflow Definition Versions that feature at least one of the given tags will be returned. Optional.

 |
| 

**default\_only**  
  
boolean

 | 

Indicates whether to only return Workflow Definition Versions that are the default (typically most-recent) version.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |
| 

**exclude\_disabled**  
  
boolean

 | 

Indicates whether to exclude disabled Workflow Definition Versions.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_SPECIFICATION**  
**INCLUDE\_FIELD\_STATES**  
**INCLUDE\_FIELD\_TRANSITIONS**  
**INCLUDE\_FIELD\_END\_STATES**

 |
| 

**order\_by**  
  
array \[enum\]

 | 

+  
**Enum values**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_ASC**  
**ORDER\_BY\_CREATE\_TIMESTAMP\_DESC**  
**ORDER\_BY\_NAME\_ASC**  
**ORDER\_BY\_NAME\_DESC**

 |
| 

**name\_pattern\_match**  
  
object

 | 

Pattern matching on the Workflow Definition name.

 |
| 

name\_pattern\_match.  
**pattern**  
  
string

 |  |
| 

name\_pattern\_match.  
**match\_type**  
  
enum

 | 

+  
**Enum values**  
**MATCH\_TYPE\_UNKNOWN**  
**MATCH\_TYPE\_TEXT\_REGEX**  
**MATCH\_TYPE\_TEXT\_EXACT\_CASE\_SENSITIVE**  
**MATCH\_TYPE\_TEXT\_EXACT\_CASE\_INSENSITIVE**  
**MATCH\_TYPE\_TEXT\_SUBSTRING\_CASE\_SENSITIVE**  
**MATCH\_TYPE\_TEXT\_SUBSTRING\_CASE\_INSENSITIVE**  
**MATCH\_TYPE\_TEXT\_PREFIX\_CASE\_SENSITIVE**  
**MATCH\_TYPE\_TEXT\_PREFIX\_CASE\_INSENSITIVE**  
  
**Default**  
**MATCH\_TYPE\_UNKNOWN**

 |
| 

**access\_control\_context**  
  
object

 | 

The access control context for the employee on whose behalf the call is to be made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |

##### [](#response_29 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_definition\_versions\[\]**  
  
array \[object\]

 | 

A list of matching Workflow Definition Versions.

 |
| 

workflow\_definition\_versions\[\].  
**id**  
  
string

 | 

The unique ID of the Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[\].  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition. See `CreateWorkflowDefinitionVersion` for details of how this field is used.  
  
Max length: 512 characters.

 |
| 

workflow\_definition\_versions\[\].  
**specification**  
  
string

 | 

YAML spec of this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[\].  
**name**  
  
string

 | 

The name of this Workflow Definition Version, sourced from the spec.

 |
| 

workflow\_definition\_versions\[\].  
**version**  
  
object

 | 

The semantic version of the Workflow Definition Version, sourced from the specification.

 |
| 

workflow\_definition\_versions\[\].  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

workflow\_definition\_versions\[\].  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

workflow\_definition\_versions\[\].  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

workflow\_definition\_versions\[\].  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

workflow\_definition\_versions\[\].  
**create\_timestamp**  
  
dateTime

 | 

The time this Workflow Definition Version was created.

 |
| 

workflow\_definition\_versions\[\].  
**starting\_state\_name**  
  
string

 | 

The name of this Workflow Definition Version’s starting state, sourced from the specification.

 |
| 

workflow\_definition\_versions\[\].  
**is\_deleted**  
  
boolean

 | 

Indicates whether this Workflow Definition Version has been deleted.

 |
| 

workflow\_definition\_versions\[\].  
**tags\[\]**  
  
array \[string\]

 | 

A set of free-form strings associated with this Workflow Definition Version, sourced from the specification.

 |
| 

workflow\_definition\_versions\[\].  
**states\[\]**  
  
array \[object\]

 | 

All states contained in this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**name**  
  
string

 | 

The name of the state. Unique only within its Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**display\_name**  
  
string

 | 

A human-readable description of the state.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**spawns\_children**  
  
boolean

 | 

Indicates whether this state spawns child Workflow instances.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**child\_workflow\_definition\_version\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the Workflow Definition Versions this state may instantiate.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**ui**  
  
object

 |  |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**required\_context\_keys\[\]**  
  
array \[string\]

 | 

The parameters that are required to successfully transition into this state.

 |
| 

workflow\_definition\_versions\[\].  
states\[\].  
**expiry\_event\_name**  
  
string

 | 

The name of the Workflow event that will trigger if the state expires.

 |
| 

workflow\_definition\_versions\[\].  
**transitions\[\]**  
  
array \[object\]

 | 

All transitions contained in this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[\].  
transitions\[\].  
**name**  
  
string

 | 

The name of the transition. Unique only within its "from" state.

 |
| 

workflow\_definition\_versions\[\].  
transitions\[\].  
**display\_name**  
  
string

 | 

A human-readable description of the transition.

 |
| 

workflow\_definition\_versions\[\].  
transitions\[\].  
**from\_state\_name**  
  
string

 | 

The name of the state this transition is from.

 |
| 

workflow\_definition\_versions\[\].  
transitions\[\].  
**to\_state\_name**  
  
string

 | 

The name of the state this transition is to.

 |
| 

workflow\_definition\_versions\[\].  
transitions\[\].  
**trigger\_event\_name**  
  
string

 | 

The name of the event that triggers this transition.

 |
| 

workflow\_definition\_versions\[\].  
**end\_states\[\]**  
  
array \[object\]

 | 

All end-states contained in this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[\].  
end\_states\[\].  
**state\_name**  
  
string

 | 

The name of the state that is an end-state.

 |
| 

workflow\_definition\_versions\[\].  
end\_states\[\].  
**result**  
  
enum

 | 

The type of business result achieved by reaching this end-state.  
  
**Enum values**  
**BUSINESS\_RESULT\_NO\_RESULT:**  
There was no result.  
**BUSINESS\_RESULT\_SUCCESSFUL:**  
The Workflow was successful in terms of its business objective.  
**BUSINESS\_RESULT\_FAILED:**  
The Workflow failed in terms of its business objective.  
**BUSINESS\_RESULT\_CANCELLED:**  
The Workflow was cancelled.

 |
| 

workflow\_definition\_versions\[\].  
**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition Version is disabled.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

#### [](#_workflows_api_v1_workflows_WorkflowDefinitionVersion_CreateWorkflowDefinitionVersion "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateWorkflowDefinitionVersion endpoint is deprecated.*

Creates a new Workflow Definition Version. If the `workflow_definition_id` is for a Workflow Definition that already exists, then the created Workflow Definition Version will be a new version of that Workflow Definition, otherwise a new Workflow Definition will be created. If a new Workflow Definition is created then its default version will be set as the created Workflow Definition Version.

**Endpoint:** POST /v1/workflow-definition-versions

##### [](#request_30 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 256 characters.

 |
| 

**workflow\_definition\_version**  
  
object

 | 

The Workflow Definition Version to create. Required.

 |
| 

workflow\_definition\_version.  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition. See `CreateWorkflowDefinitionVersion` for details of how this field is used.  
  
Max length: 512 characters.

 |
| 

workflow\_definition\_version.  
**specification**  
  
string

 | 

YAML spec of this Workflow Definition Version.

 |
| 

workflow\_definition\_version.  
**is\_deleted**  
  
boolean

 | 

Indicates whether this Workflow Definition Version has been deleted.

 |

##### [](#response_30 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of the Workflow Definition Version.

 |
| 

**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition. See `CreateWorkflowDefinitionVersion` for details of how this field is used.  
  
Max length: 512 characters.

 |
| 

**specification**  
  
string

 | 

YAML spec of this Workflow Definition Version.

 |
| 

**name**  
  
string

 | 

The name of this Workflow Definition Version, sourced from the spec.

 |
| 

**version**  
  
object

 | 

The semantic version of the Workflow Definition Version, sourced from the specification.

 |
| 

version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The time this Workflow Definition Version was created.

 |
| 

**starting\_state\_name**  
  
string

 | 

The name of this Workflow Definition Version’s starting state, sourced from the specification.

 |
| 

**is\_deleted**  
  
boolean

 | 

Indicates whether this Workflow Definition Version has been deleted.

 |
| 

**tags\[\]**  
  
array \[string\]

 | 

A set of free-form strings associated with this Workflow Definition Version, sourced from the specification.

 |
| 

**states\[\]**  
  
array \[object\]

 | 

All states contained in this Workflow Definition Version.

 |
| 

states\[\].  
**name**  
  
string

 | 

The name of the state. Unique only within its Workflow Definition Version.

 |
| 

states\[\].  
**display\_name**  
  
string

 | 

A human-readable description of the state.

 |
| 

states\[\].  
**spawns\_children**  
  
boolean

 | 

Indicates whether this state spawns child Workflow instances.

 |
| 

states\[\].  
**child\_workflow\_definition\_version\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the Workflow Definition Versions this state may instantiate.

 |
| 

states\[\].  
**ui**  
  
object

 |  |
| 

states\[\].  
ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

states\[\].  
ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

states\[\].  
ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

states\[\].  
ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

states\[\].  
ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

states\[\].  
ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

states\[\].  
ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

states\[\].  
ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

states\[\].  
ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

states\[\].  
ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

states\[\].  
ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

states\[\].  
ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

states\[\].  
ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

states\[\].  
ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

states\[\].  
ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

states\[\].  
ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

states\[\].  
**required\_context\_keys\[\]**  
  
array \[string\]

 | 

The parameters that are required to successfully transition into this state.

 |
| 

states\[\].  
**expiry\_event\_name**  
  
string

 | 

The name of the Workflow event that will trigger if the state expires.

 |
| 

**transitions\[\]**  
  
array \[object\]

 | 

All transitions contained in this Workflow Definition Version.

 |
| 

transitions\[\].  
**name**  
  
string

 | 

The name of the transition. Unique only within its "from" state.

 |
| 

transitions\[\].  
**display\_name**  
  
string

 | 

A human-readable description of the transition.

 |
| 

transitions\[\].  
**from\_state\_name**  
  
string

 | 

The name of the state this transition is from.

 |
| 

transitions\[\].  
**to\_state\_name**  
  
string

 | 

The name of the state this transition is to.

 |
| 

transitions\[\].  
**trigger\_event\_name**  
  
string

 | 

The name of the event that triggers this transition.

 |
| 

**end\_states\[\]**  
  
array \[object\]

 | 

All end-states contained in this Workflow Definition Version.

 |
| 

end\_states\[\].  
**state\_name**  
  
string

 | 

The name of the state that is an end-state.

 |
| 

end\_states\[\].  
**result**  
  
enum

 | 

The type of business result achieved by reaching this end-state.  
  
**Enum values**  
**BUSINESS\_RESULT\_NO\_RESULT:**  
There was no result.  
**BUSINESS\_RESULT\_SUCCESSFUL:**  
The Workflow was successful in terms of its business objective.  
**BUSINESS\_RESULT\_FAILED:**  
The Workflow failed in terms of its business objective.  
**BUSINESS\_RESULT\_CANCELLED:**  
The Workflow was cancelled.

 |
| 

**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition Version is disabled.

 |

#### [](#_google_protobuf_Empty_DeleteWorkflowDefinitionVersion "Copy link to heading")Delete

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The DeleteWorkflowDefinitionVersion endpoint is deprecated.*

Soft deletes a Workflow Definition Version. The Workflow Definition Version will remain in the database and can be retrieved; however, Workflows can no longer be instantiated against this version because it is marked as deleted

**Endpoint:** DELETE /v1/workflow-definition-versions/{id}

##### [](#request_31 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Workflow Definition Version to delete.

 |

##### [](#response_31 "Copy link to heading")Response

#### [](#_workflows_api_v1_workflows_BatchGetWorkflowDefinitionVersionsResponse_BatchGetWorkflowDefinitionVersions "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetWorkflowDefinitionVersions endpoint is deprecated.*

Retrieves multiple Workflow Definition Versions.

**Endpoint:** GET /v1/workflow-definition-versions:batchGet

##### [](#request_32 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of IDs of Workflow Definition Versions to be retrieved. Required; maximum of 100 IDs per request.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_SPECIFICATION**  
**INCLUDE\_FIELD\_STATES**  
**INCLUDE\_FIELD\_TRANSITIONS**  
**INCLUDE\_FIELD\_END\_STATES**

 |
| 

**access\_control\_context**  
  
object

 | 

The access control context for the employee on whose behalf the call is to be made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |

##### [](#response_32 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_definition\_versions**  
  
map \[string: object\]

 | 

A map of Workflow Definition Version ID to Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
**id**  
  
string

 | 

The unique ID of the Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition. See `CreateWorkflowDefinitionVersion` for details of how this field is used.  
  
Max length: 512 characters.

 |
| 

workflow\_definition\_versions\[KEY\].  
**specification**  
  
string

 | 

YAML spec of this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
**name**  
  
string

 | 

The name of this Workflow Definition Version, sourced from the spec.

 |
| 

workflow\_definition\_versions\[KEY\].  
**version**  
  
object

 | 

The semantic version of the Workflow Definition Version, sourced from the specification.

 |
| 

workflow\_definition\_versions\[KEY\].  
version.  
**major**  
  
integer

 | 

The major version number.

 |
| 

workflow\_definition\_versions\[KEY\].  
version.  
**minor**  
  
integer

 | 

The minor version number.

 |
| 

workflow\_definition\_versions\[KEY\].  
version.  
**patch**  
  
integer

 | 

The patch version number.

 |
| 

workflow\_definition\_versions\[KEY\].  
version.  
**label**  
  
string

 | 

The version label. Example: "-beta".

 |
| 

workflow\_definition\_versions\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The time this Workflow Definition Version was created.

 |
| 

workflow\_definition\_versions\[KEY\].  
**starting\_state\_name**  
  
string

 | 

The name of this Workflow Definition Version’s starting state, sourced from the specification.

 |
| 

workflow\_definition\_versions\[KEY\].  
**is\_deleted**  
  
boolean

 | 

Indicates whether this Workflow Definition Version has been deleted.

 |
| 

workflow\_definition\_versions\[KEY\].  
**tags\[\]**  
  
array \[string\]

 | 

A set of free-form strings associated with this Workflow Definition Version, sourced from the specification.

 |
| 

workflow\_definition\_versions\[KEY\].  
**states\[\]**  
  
array \[object\]

 | 

All states contained in this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**name**  
  
string

 | 

The name of the state. Unique only within its Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**display\_name**  
  
string

 | 

A human-readable description of the state.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**spawns\_children**  
  
boolean

 | 

Indicates whether this state spawns child Workflow instances.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**child\_workflow\_definition\_version\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the Workflow Definition Versions this state may instantiate.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**ui**  
  
object

 |  |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**required\_context\_keys\[\]**  
  
array \[string\]

 | 

The parameters that are required to successfully transition into this state.

 |
| 

workflow\_definition\_versions\[KEY\].  
states\[\].  
**expiry\_event\_name**  
  
string

 | 

The name of the Workflow event that will trigger if the state expires.

 |
| 

workflow\_definition\_versions\[KEY\].  
**transitions\[\]**  
  
array \[object\]

 | 

All transitions contained in this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
transitions\[\].  
**name**  
  
string

 | 

The name of the transition. Unique only within its "from" state.

 |
| 

workflow\_definition\_versions\[KEY\].  
transitions\[\].  
**display\_name**  
  
string

 | 

A human-readable description of the transition.

 |
| 

workflow\_definition\_versions\[KEY\].  
transitions\[\].  
**from\_state\_name**  
  
string

 | 

The name of the state this transition is from.

 |
| 

workflow\_definition\_versions\[KEY\].  
transitions\[\].  
**to\_state\_name**  
  
string

 | 

The name of the state this transition is to.

 |
| 

workflow\_definition\_versions\[KEY\].  
transitions\[\].  
**trigger\_event\_name**  
  
string

 | 

The name of the event that triggers this transition.

 |
| 

workflow\_definition\_versions\[KEY\].  
**end\_states\[\]**  
  
array \[object\]

 | 

All end-states contained in this Workflow Definition Version.

 |
| 

workflow\_definition\_versions\[KEY\].  
end\_states\[\].  
**state\_name**  
  
string

 | 

The name of the state that is an end-state.

 |
| 

workflow\_definition\_versions\[KEY\].  
end\_states\[\].  
**result**  
  
enum

 | 

The type of business result achieved by reaching this end-state.  
  
**Enum values**  
**BUSINESS\_RESULT\_NO\_RESULT:**  
There was no result.  
**BUSINESS\_RESULT\_SUCCESSFUL:**  
The Workflow was successful in terms of its business objective.  
**BUSINESS\_RESULT\_FAILED:**  
The Workflow failed in terms of its business objective.  
**BUSINESS\_RESULT\_CANCELLED:**  
The Workflow was cancelled.

 |
| 

workflow\_definition\_versions\[KEY\].  
**is\_disabled**  
  
boolean

 | 

Indicates whether this Workflow Definition Version is disabled.

 |

#### [](#_workflows_api_v1_workflows_ValidateWorkflowDefinitionVersionResponse_ValidateWorkflowDefinitionVersion "Copy link to heading")Validate

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ValidateWorkflowDefinitionVersion endpoint is deprecated.*

Validates the specification of a Workflow Definition Version.

**Endpoint:** POST /v1/workflow-definition-versions:validate

##### [](#request_33 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**workflow\_definition\_version**  
  
object

 | 

The Workflow Definition Version that is to be validated. Required.

 |
| 

workflow\_definition\_version.  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition. See `CreateWorkflowDefinitionVersion` for details of how this field is used.  
  
Max length: 512 characters.

 |
| 

workflow\_definition\_version.  
**specification**  
  
string

 | 

YAML spec of this Workflow Definition Version.

 |
| 

workflow\_definition\_version.  
**is\_deleted**  
  
boolean

 | 

Indicates whether this Workflow Definition Version has been deleted.

 |

##### [](#response_33 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**is\_valid**  
  
boolean

 | 

Indicates whether the syntax of the Workflow Definition Version is valid.

 |
| 

**validation\_errors\[\]**  
  
array \[string\]

 | 

Communicates the reason the Workflow Definition Version failed validation.

 |

### [](#workflowinstance "Copy link to heading")WorkflowInstance

#### [](#available_methods_11 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_workflows_ListWorkflowInstancesResponse_ListWorkflowInstances) Lists Workflow Instances in Vault. **(Deprecated)**
    
-   [Create](#_workflows_api_v1_workflows_WorkflowInstance_CreateWorkflowInstance) Creates an instance of a Workflow Definition Version. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_workflows_BatchGetWorkflowInstancesResponse_BatchGetWorkflowInstances) Retrieves multiple Workflow Instances using their IDs. **(Deprecated)**
    
-   [Simulate](#_workflows_api_v1_workflows_SimulateWorkflowInstanceResponse_SimulateWorkflowInstance) Simulates sending events to a Workflow Instance and receives a list of side effects. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_ListWorkflowInstancesResponse_ListWorkflowInstances "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListWorkflowInstances endpoint is deprecated.*

Lists Workflow Instances in Vault.

**Endpoint:** GET /v1/workflow-instances

##### [](#request_34 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

The employee on whose behalf the call is to be made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**workflow\_definition\_id**  
  
string

 | 

The Workflow Definition ID that associated Workflow instances will be included for. Optional.

 |
| 

**workflow\_definition\_version\_id**  
  
string

 | 

The Workflow Definition Version ID that associated Workflow instances will be included for. Should not be used if the `workflow_definition_id` has been set. Optional.

 |
| 

**customer\_ids**  
  
array \[string\]

 | 

The customer IDs that associated Workflow instances will be included for. Optional.

 |
| 

**include\_statuses**  
  
array \[enum\]

 | 

The statuses that included Workflow instances may have. Optional.  
  
**Enum values**  
**WORKFLOW\_INSTANCE\_STATUS\_UNKNOWN:**  
Unknown Workflow instance status.  
**WORKFLOW\_INSTANCE\_STATUS\_INSTANTIATED:**  
The Workflow instance is instantiated and running.  
**WORKFLOW\_INSTANCE\_STATUS\_CLOSED:**  
The Workflow instance is closed and is no longer running.  
**WORKFLOW\_INSTANCE\_STATUS\_SUSPENDED:**  
The Workflow instance is suspended and will not run until the corresponding Workflow Definition is enabled.

 |
| 

**parent\_ids**  
  
array \[string\]

 | 

The parent Workflow instance IDs that associated Workflow instances will be included for. Optional.

 |
| 

**order\_by\_direction**  
  
enum

 | 

The ordering direction of results by create\_timestamp. Optional; default descending.  
  
**Enum values**  
**ORDER\_BY\_DESC**  
**ORDER\_BY\_ASC**  
  
**Default**  
**ORDER\_BY\_DESC**

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_ADDITIONAL\_DETAILS**  
**INCLUDE\_FIELD\_GLOBAL\_UI\_DESCRIPTORS**  
**INCLUDE\_FIELD\_CURRENT\_STATE\_UI\_DESCRIPTORS**

 |

##### [](#response_34 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_instances\[\]**  
  
array \[object\]

 | 

A list of matching Workflow instances.

 |
| 

workflow\_instances\[\].  
**id**  
  
string

 | 

The unique identifier for this Workflow instance.

 |
| 

workflow\_instances\[\].  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition this is an instance of. Optional field for `CreateWorkflowInstance`.  
  
Max length: 512 characters.

 |
| 

workflow\_instances\[\].  
**workflow\_definition\_version\_id**  
  
string

 | 

The ID of the Workflow Definition Version this is an instance of. Optional field for `CreateWorkflowInstance`. If omitted, the default version of the Workflow will be used.  
  
Max length: 512 characters.

 |
| 

workflow\_instances\[\].  
**status**  
  
enum

 | 

The current status of the Workflow instance.  
  
**Enum values**  
**WORKFLOW\_INSTANCE\_STATUS\_UNKNOWN:**  
Unknown Workflow instance status.  
**WORKFLOW\_INSTANCE\_STATUS\_INSTANTIATED:**  
The Workflow instance is instantiated and running.  
**WORKFLOW\_INSTANCE\_STATUS\_CLOSED:**  
The Workflow instance is closed and is no longer running.  
**WORKFLOW\_INSTANCE\_STATUS\_SUSPENDED:**  
The Workflow instance is suspended and will not run until the corresponding Workflow Definition is enabled.

 |
| 

workflow\_instances\[\].  
**display\_name**  
  
string

 | 

The display name of this instance.

 |
| 

workflow\_instances\[\].  
**current\_state\_name**  
  
string

 | 

The name of the state this Workflow instance is currently in.

 |
| 

workflow\_instances\[\].  
**current\_state\_expiry\_timestamp**  
  
dateTime

 | 

The expiry timestamp of the current state the Workflow instance is in.

 |
| 

workflow\_instances\[\].  
**global\_state**  
  
map \[string: string\]

 | 

A map of global state key to value for the Workflow instance.

 |
| 

workflow\_instances\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp of when the Workflow instance was instantiated.

 |
| 

workflow\_instances\[\].  
**customer\_ids\[\]**  
  
array \[string\]

 | 

A list of customer IDs this Workflow instance relates to.

 |
| 

workflow\_instances\[\].  
**additional\_details**  
  
map \[string: object\]

 | 

Arbitrary key-value data associated with the Workflow instance. Multiple string values are allowed per key. Optional.

 |
| 

workflow\_instances\[\].  
additional\_details\[KEY\].  
**values\[\]**  
  
array \[string\]

 |  |
| 

workflow\_instances\[\].  
**parent\_id**  
  
string

 | 

The ID of the parent Workflow instance.

 |
| 

workflow\_instances\[\].  
**creator\_id**  
  
string

 | 

The ID of the employee who created the Workflow instance. This only gets populated if an employee directly interacts with the Workflow instance.

 |
| 

workflow\_instances\[\].  
**last\_updated\_by\_user\_id**  
  
string

 | 

The ID of the employee who last updated the Workflow instance. This only gets populated if an employee directly interacts with the Workflow instance.

 |
| 

workflow\_instances\[\].  
**end\_result**  
  
enum

 | 

Information about the business result (successful or failed) of a Workflow after it has closed.  
  
**Enum values**  
**BUSINESS\_RESULT\_NO\_RESULT:**  
There was no result.  
**BUSINESS\_RESULT\_SUCCESSFUL:**  
The Workflow was successful in terms of its business objective.  
**BUSINESS\_RESULT\_FAILED:**  
The Workflow failed in terms of its business objective.  
**BUSINESS\_RESULT\_CANCELLED:**  
The Workflow was cancelled.

 |
| 

workflow\_instances\[\].  
**global\_ui\_descriptors**  
  
object

 | 

The global UI descriptors for a Workflow instance.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[\].  
global\_ui\_descriptors.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_instances\[\].  
**current\_state\_ui\_descriptors**  
  
object

 | 

The current state’s UI descriptors for a Workflow instance.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this is the last page of results.

 |

#### [](#_workflows_api_v1_workflows_WorkflowInstance_CreateWorkflowInstance "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateWorkflowInstance endpoint is deprecated.*

Creates an instance of a Workflow Definition Version.

**Endpoint:** POST /v1/workflow-instances

##### [](#request_35 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required, and must be 10-256 alphanumeric characters including "+-=

 |
| 

\_".  
  
Required.  
Min length: 10 characters.  
Max length: 256 characters.

 | 

**access\_control\_context**  
  
object

 |
| 

The employee on whose behalf the call is to be made.

 | 

access\_control\_context.  
**employee\_id**  
  
string

 |
| 

The ID of the employee performing this call.

 | 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 |
| 

The permissions granted to the given `employee_id`.

 | 

**workflow\_instance**  
  
object

 |
| 

The Workflow instance to create. Required.

 | 

workflow\_instance.  
**id**  
  
string

 |
| 

The unique identifier for this Workflow instance.

 | 

workflow\_instance.  
**workflow\_definition\_id**  
  
string

 |
| 

The ID of the Workflow Definition this is an instance of. Optional field for `CreateWorkflowInstance`.  
  
Max length: 512 characters.

 | 

workflow\_instance.  
**workflow\_definition\_version\_id**  
  
string

 |
| 

The ID of the Workflow Definition Version this is an instance of. Optional field for `CreateWorkflowInstance`. If omitted, the default version of the Workflow will be used.  
  
Max length: 512 characters.

 | 

workflow\_instance.  
**customer\_ids\[\]**  
  
array \[string\]

 |
| 

A list of customer IDs this Workflow instance relates to.

 | 

workflow\_instance.  
**additional\_details**  
  
map \[string: object\]

 |
| 

Arbitrary key-value data associated with the Workflow instance. Multiple string values are allowed per key. Optional.

 | 

workflow\_instance.  
additional\_details\[KEY\].  
**values\[\]**  
  
array \[string\]

 |
|  | 

**instantiation\_context**  
  
map \[string: string\]

 |

##### [](#response_35 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for this Workflow instance.

 |
| 

**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition this is an instance of. Optional field for `CreateWorkflowInstance`.  
  
Max length: 512 characters.

 |
| 

**workflow\_definition\_version\_id**  
  
string

 | 

The ID of the Workflow Definition Version this is an instance of. Optional field for `CreateWorkflowInstance`. If omitted, the default version of the Workflow will be used.  
  
Max length: 512 characters.

 |
| 

**status**  
  
enum

 | 

The current status of the Workflow instance.  
  
**Enum values**  
**WORKFLOW\_INSTANCE\_STATUS\_UNKNOWN:**  
Unknown Workflow instance status.  
**WORKFLOW\_INSTANCE\_STATUS\_INSTANTIATED:**  
The Workflow instance is instantiated and running.  
**WORKFLOW\_INSTANCE\_STATUS\_CLOSED:**  
The Workflow instance is closed and is no longer running.  
**WORKFLOW\_INSTANCE\_STATUS\_SUSPENDED:**  
The Workflow instance is suspended and will not run until the corresponding Workflow Definition is enabled.

 |
| 

**display\_name**  
  
string

 | 

The display name of this instance.

 |
| 

**current\_state\_name**  
  
string

 | 

The name of the state this Workflow instance is currently in.

 |
| 

**current\_state\_expiry\_timestamp**  
  
dateTime

 | 

The expiry timestamp of the current state the Workflow instance is in.

 |
| 

**global\_state**  
  
map \[string: string\]

 | 

A map of global state key to value for the Workflow instance.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp of when the Workflow instance was instantiated.

 |
| 

**customer\_ids\[\]**  
  
array \[string\]

 | 

A list of customer IDs this Workflow instance relates to.

 |
| 

**additional\_details**  
  
map \[string: object\]

 | 

Arbitrary key-value data associated with the Workflow instance. Multiple string values are allowed per key. Optional.

 |
| 

additional\_details\[KEY\].  
**values\[\]**  
  
array \[string\]

 |  |
| 

**parent\_id**  
  
string

 | 

The ID of the parent Workflow instance.

 |
| 

**creator\_id**  
  
string

 | 

The ID of the employee who created the Workflow instance. This only gets populated if an employee directly interacts with the Workflow instance.

 |
| 

**last\_updated\_by\_user\_id**  
  
string

 | 

The ID of the employee who last updated the Workflow instance. This only gets populated if an employee directly interacts with the Workflow instance.

 |
| 

**end\_result**  
  
enum

 | 

Information about the business result (successful or failed) of a Workflow after it has closed.  
  
**Enum values**  
**BUSINESS\_RESULT\_NO\_RESULT:**  
There was no result.  
**BUSINESS\_RESULT\_SUCCESSFUL:**  
The Workflow was successful in terms of its business objective.  
**BUSINESS\_RESULT\_FAILED:**  
The Workflow failed in terms of its business objective.  
**BUSINESS\_RESULT\_CANCELLED:**  
The Workflow was cancelled.

 |
| 

**global\_ui\_descriptors**  
  
object

 | 

The global UI descriptors for a Workflow instance.

 |
| 

global\_ui\_descriptors.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

global\_ui\_descriptors.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

global\_ui\_descriptors.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

global\_ui\_descriptors.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

global\_ui\_descriptors.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

global\_ui\_descriptors.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

global\_ui\_descriptors.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

global\_ui\_descriptors.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

global\_ui\_descriptors.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

global\_ui\_descriptors.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

global\_ui\_descriptors.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

**current\_state\_ui\_descriptors**  
  
object

 | 

The current state’s UI descriptors for a Workflow instance.

 |
| 

current\_state\_ui\_descriptors.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

current\_state\_ui\_descriptors.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

current\_state\_ui\_descriptors.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

current\_state\_ui\_descriptors.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

current\_state\_ui\_descriptors.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

current\_state\_ui\_descriptors.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

current\_state\_ui\_descriptors.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

current\_state\_ui\_descriptors.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |

#### [](#_workflows_api_v1_workflows_BatchGetWorkflowInstancesResponse_BatchGetWorkflowInstances "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetWorkflowInstances endpoint is deprecated.*

Retrieves multiple Workflow Instances using their IDs.

**Endpoint:** GET /v1/workflow-instances:batchGet

##### [](#request_36 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**access\_control\_context**  
  
object

 | 

Specifies the employee the call is made on behalf of.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**ids**  
  
array \[string\]

 | 

A list of IDs of Workflow instances to be retrieved. Required; maximum number of IDs per request 100.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_ADDITIONAL\_DETAILS**  
**INCLUDE\_FIELD\_GLOBAL\_UI\_DESCRIPTORS**  
**INCLUDE\_FIELD\_CURRENT\_STATE\_UI\_DESCRIPTORS**

 |

##### [](#response_36 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_instances**  
  
map \[string: object\]

 | 

A map of Workflow instance ID to Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
**id**  
  
string

 | 

The unique identifier for this Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition this is an instance of. Optional field for `CreateWorkflowInstance`.  
  
Max length: 512 characters.

 |
| 

workflow\_instances\[KEY\].  
**workflow\_definition\_version\_id**  
  
string

 | 

The ID of the Workflow Definition Version this is an instance of. Optional field for `CreateWorkflowInstance`. If omitted, the default version of the Workflow will be used.  
  
Max length: 512 characters.

 |
| 

workflow\_instances\[KEY\].  
**status**  
  
enum

 | 

The current status of the Workflow instance.  
  
**Enum values**  
**WORKFLOW\_INSTANCE\_STATUS\_UNKNOWN:**  
Unknown Workflow instance status.  
**WORKFLOW\_INSTANCE\_STATUS\_INSTANTIATED:**  
The Workflow instance is instantiated and running.  
**WORKFLOW\_INSTANCE\_STATUS\_CLOSED:**  
The Workflow instance is closed and is no longer running.  
**WORKFLOW\_INSTANCE\_STATUS\_SUSPENDED:**  
The Workflow instance is suspended and will not run until the corresponding Workflow Definition is enabled.

 |
| 

workflow\_instances\[KEY\].  
**display\_name**  
  
string

 | 

The display name of this instance.

 |
| 

workflow\_instances\[KEY\].  
**current\_state\_name**  
  
string

 | 

The name of the state this Workflow instance is currently in.

 |
| 

workflow\_instances\[KEY\].  
**current\_state\_expiry\_timestamp**  
  
dateTime

 | 

The expiry timestamp of the current state the Workflow instance is in.

 |
| 

workflow\_instances\[KEY\].  
**global\_state**  
  
map \[string: string\]

 | 

A map of global state key to value for the Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp of when the Workflow instance was instantiated.

 |
| 

workflow\_instances\[KEY\].  
**customer\_ids\[\]**  
  
array \[string\]

 | 

A list of customer IDs this Workflow instance relates to.

 |
| 

workflow\_instances\[KEY\].  
**additional\_details**  
  
map \[string: object\]

 | 

Arbitrary key-value data associated with the Workflow instance. Multiple string values are allowed per key. Optional.

 |
| 

workflow\_instances\[KEY\].  
additional\_details\[KEY\].  
**values\[\]**  
  
array \[string\]

 |  |
| 

workflow\_instances\[KEY\].  
**parent\_id**  
  
string

 | 

The ID of the parent Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
**creator\_id**  
  
string

 | 

The ID of the employee who created the Workflow instance. This only gets populated if an employee directly interacts with the Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
**last\_updated\_by\_user\_id**  
  
string

 | 

The ID of the employee who last updated the Workflow instance. This only gets populated if an employee directly interacts with the Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
**end\_result**  
  
enum

 | 

Information about the business result (successful or failed) of a Workflow after it has closed.  
  
**Enum values**  
**BUSINESS\_RESULT\_NO\_RESULT:**  
There was no result.  
**BUSINESS\_RESULT\_SUCCESSFUL:**  
The Workflow was successful in terms of its business objective.  
**BUSINESS\_RESULT\_FAILED:**  
The Workflow failed in terms of its business objective.  
**BUSINESS\_RESULT\_CANCELLED:**  
The Workflow was cancelled.

 |
| 

workflow\_instances\[KEY\].  
**global\_ui\_descriptors**  
  
object

 | 

The global UI descriptors for a Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[KEY\].  
global\_ui\_descriptors.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_instances\[KEY\].  
**current\_state\_ui\_descriptors**  
  
object

 | 

The current state’s UI descriptors for a Workflow instance.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

workflow\_instances\[KEY\].  
current\_state\_ui\_descriptors.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |

#### [](#_workflows_api_v1_workflows_SimulateWorkflowInstanceResponse_SimulateWorkflowInstance "Copy link to heading")Simulate

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The SimulateWorkflowInstance endpoint is deprecated.*

Simulates sending events to a Workflow Instance and receives a list of side effects.

**Endpoint:** POST /v1/workflow-instances:simulate

##### [](#request_37 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**specification**  
  
string

 | 

The YAML Workflow Definition specification, from which the instance will be created. Required.  
  
Required.  
Min length: 1 characters.

 |
| 

**events\[\]**  
  
array \[object\]

 | 

The events to simulate being sent to the instance. Optional.

 |
| 

events\[\].  
**name**  
  
string

 | 

The name of the transition to follow. Required.  
  
Required.  
Min length: 1 characters.

 |
| 

events\[\].  
**context**  
  
map \[string: string\]

 | 

The context provided to the actions executed by the transition. Optional.

 |
| 

**environment\_variables**  
  
map \[string: string\]

 | 

Values the instance can read using $$ syntax. Optional.

 |
| 

**instantiation\_context**  
  
map \[string: string\]

 | 

The context to instantiate the Workflow instance with. If both `instantiation_context` and `starting_state` are present, a user error will be returned. Optional.

 |
| 

**starting\_state**  
  
object

 | 

The state to begin the instance simulation from. If both `instantiation_context` and `starting_state` are present, a user error will be returned. Optional.

 |
| 

starting\_state.  
**name**  
  
string

 | 

The name of the state the instance is in. Required.  
  
Required.  
Min length: 1 characters.

 |
| 

starting\_state.  
**global\_state**  
  
map \[string: string\]

 | 

The contents of the global state before/after simulating a transition. Optional.

 |
| 

**auto\_fire\_events\[\]**  
  
array \[enum\]

 | 

This automatically fires Workflow simulation events. Each simulation step can produce events as side effects; if the event type is included in this field, these simulation events will be included. The simulation will then continue using events in the simulation input list. Optional.  
  
**Enum values**  
**AUTO\_FIRE\_EVENT\_UNKNOWN**  
**AUTO\_FIRE\_EVENT\_TECHNICAL\_ERRORS**  
**AUTO\_FIRE\_EVENT\_TRANSFORMS**  
**AUTO\_FIRE\_EVENT\_SCHEDULED**  
**AUTO\_FIRE\_EVENT\_CALLBACKS**

 |
| 

**callbacks\[\]**  
  
array \[object\]

 | 

Callbacks that are expected to be fired by the instance in the correct order. Any callbacks specified will be validated against callbacks in the Workflow when they are fired. A callback in the list that does not match a callback triggered in the Workflow will return an error. Optional.

 |
| 

callbacks\[\].  
**response\_payload**  
  
string

 | 

The expected API response payload. The fields contained in the response are automatically included according to the fields in the request; the response will contain at least one field. Required.

 |

##### [](#response_37 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**steps\[\]**  
  
array \[object\]

 | 

The steps taken by a Workflow instance during its simulation.

 |
| 

steps\[\].  
**state**  
  
object

 | 

The overall state of the simulated Workflow instance, immediately after simulating the transition. This can be fed back into the SimulateWorkflowInstanceRequest to resume from this point in a new simulation.

 |
| 

steps\[\].  
state.  
**name**  
  
string

 | 

The name of the state the instance is in. Required.  
  
Required.  
Min length: 1 characters.

 |
| 

steps\[\].  
state.  
**global\_state**  
  
map \[string: string\]

 | 

The contents of the global state before/after simulating a transition. Optional.

 |
| 

steps\[\].  
**triggering\_event**  
  
object

 | 

The event which triggered the Workflow instance to enter this state.

 |
| 

steps\[\].  
triggering\_event.  
**name**  
  
string

 | 

The name of the transition to follow. Required.  
  
Required.  
Min length: 1 characters.

 |
| 

steps\[\].  
triggering\_event.  
**context**  
  
map \[string: string\]

 | 

The context provided to the actions executed by the transition. Optional.

 |
| 

steps\[\].  
**side\_effect\_events\[\]**  
  
array \[object\]

 | 

Any events produced from the simulated transition, such as transform events or technical error events.

 |
| 

steps\[\].  
side\_effect\_events\[\].  
**name**  
  
string

 | 

The name of the transition to execute.

 |
| 

steps\[\].  
side\_effect\_events\[\].  
**context**  
  
map \[string: string\]

 | 

The context attached to the event.

 |
| 

steps\[\].  
side\_effect\_events\[\].  
**target\_is\_self**  
  
boolean

 | 

True if the target of the event is the Workflow instance that produced it.

 |
| 

steps\[\].  
side\_effect\_events\[\].  
**cron\_expression**  
  
string

 | 

The `cron expression` if the Workflow Event is scheduled for execution at a specific date and time in the future.

 |
| 

steps\[\].  
**side\_effect\_ticket\_creations\[\]**  
  
array \[object\]

 | 

Tickets that were created as part of the transition.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**title**  
  
string

 | 

The title of the created ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**description**  
  
string

 | 

The description of the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**due\_time**  
  
dateTime

 | 

The time the ticket needs to be actioned by.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**status**  
  
enum

 | 

The status of the ticket.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**priority**  
  
enum

 | 

The priority of the ticket.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**tags\[\]**  
  
array \[string\]

 | 

Tags associated with the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**role\_ids\[\]**  
  
array \[string\]

 | 

Roles associated with the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**attachment\_ids\[\]**  
  
array \[string\]

 | 

Attachment IDs associated with the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**metadata**  
  
map \[string: string\]

 | 

Metadata associated with the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**ui**  
  
object

 | 

UI descriptors associated with the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
**panels\[\]**  
  
array \[object\]

 | 

Panels that are in this UI.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
**actions\[\]**  
  
array \[object\]

 | 

Actions that are in this UI.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of **event** or target\_status*

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
actions\[\] items can contain one of event or **target\_status***

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
**inputs\[\]**  
  
array \[object\]

 | 

Inputs that are in this UI.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
ui.  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**customer\_ids\[\]**  
  
array \[string\]

 | 

Customer IDs set for the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**policy\_ids\[\]**  
  
array \[string\]

 | 

Policy IDs set for the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
**access\_control\_metadata**  
  
map \[string: object\]

 | 

Access control metadata set for the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
access\_control\_metadata\[KEY\].  
**string\_list**  
  
object

 |  |
| 

steps\[\].  
side\_effect\_ticket\_creations\[\].  
access\_control\_metadata\[KEY\].  
string\_list.  
**values\[\]**  
  
array \[string\]

 |  |
| 

steps\[\].  
**side\_effect\_ticket\_updates\[\]**  
  
array \[object\]

 | 

Tickets that were updated as part of the transition.

 |
| 

steps\[\].  
side\_effect\_ticket\_updates\[\].  
**metadata**  
  
map \[string: string\]

 | 

The updated metadata associated with the ticket.

 |
| 

steps\[\].  
side\_effect\_ticket\_updates\[\].  
**priority**  
  
enum

 | 

The updated ticket priority.  
  
**Enum values**  
**TICKET\_PRIORITY\_UNKNOWN**  
**TICKET\_PRIORITY\_NORMAL**  
**TICKET\_PRIORITY\_LOW**  
**TICKET\_PRIORITY\_HIGH**  
**TICKET\_PRIORITY\_CRITICAL**

 |
| 

steps\[\].  
side\_effect\_ticket\_updates\[\].  
**status**  
  
enum

 | 

The updated ticket status.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

steps\[\].  
side\_effect\_ticket\_updates\[\].  
**assignee\_id**  
  
string

 | 

The updated ticket assignee ID.

 |
| 

steps\[\].  
**side\_effect\_ticket\_closures\[\]**  
  
array \[object\]

 | 

Tickets that were closed as part of the transition.

 |
| 

steps\[\].  
side\_effect\_ticket\_closures\[\].  
**target\_status**  
  
enum

 | 

The ticket status that the ticket will be closed with.  
  
**Enum values**  
**TICKET\_STATUS\_UNKNOWN**  
**TICKET\_STATUS\_OPEN**  
**TICKET\_STATUS\_CLOSED**  
**TICKET\_STATUS\_IN\_PROGRESS**  
**TICKET\_STATUS\_CANCELLED**

 |
| 

steps\[\].  
**side\_effect\_callbacks\[\]**  
  
array \[object\]

 | 

Callback requests made as part of the transition.

 |
| 

steps\[\].  
side\_effect\_callbacks\[\].  
**executor**  
  
enum

 | 

The name of the API.  
  
**Enum values**  
**CALLBACK\_API**  
**CORE\_API**  
**WORKFLOWS\_API**  
**AUDIT\_API**  
**XPL\_API**  
**PAYMENT\_HUB\_API**  
**EXTERNAL\_OPERATION\_CONSUMER**

 |
| 

steps\[\].  
side\_effect\_callbacks\[\].  
**target**  
  
string

 | 

The name of the API endpoint.

 |
| 

steps\[\].  
side\_effect\_callbacks\[\].  
**payload**  
  
map \[string: string\]

 | 

The API call payload.

 |
| 

steps\[\].  
**side\_effect\_global\_uis\[\]**  
  
array \[object\]

 | 

The global UI panels that were added or replaced as part of the Workflow transition.

 |
| 

steps\[\].  
side\_effect\_global\_uis\[\].  
**ui\_panels\[\]**  
  
array \[object\]

 | 

The new or replacement global UI panels.

 |
| 

steps\[\].  
side\_effect\_global\_uis\[\].  
ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

steps\[\].  
side\_effect\_global\_uis\[\].  
ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

steps\[\].  
side\_effect\_global\_uis\[\].  
ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

steps\[\].  
**side\_effect\_instantiations\[\]**  
  
array \[object\]

 | 

Workflow instantiation requests produced from the simulated transition.

 |
| 

steps\[\].  
side\_effect\_instantiations\[\].  
**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition.

 |
| 

steps\[\].  
side\_effect\_instantiations\[\].  
**workflow\_definition\_version**  
  
string

 | 

The Workflow Definition Version that is used when the Workflow is instantiated. If empty indicates that the default version was instantiated.

 |
| 

steps\[\].  
side\_effect\_instantiations\[\].  
**instantiation\_context**  
  
map \[string: string\]

 | 

The context that is passed to the Workflow during the instantiation event.

 |
| 

steps\[\].  
side\_effect\_instantiations\[\].  
**customer\_ids\[\]**  
  
array \[string\]

 | 

The customer IDs associated with the Workflow.

 |
| 

steps\[\].  
side\_effect\_instantiations\[\].  
**cron\_expression**  
  
string

 | 

The cron expression if the Workflow is to be instantiated at a specific date and time in the future.

 |
| 

steps\[\].  
**side\_effect\_state\_ui**  
  
object

 | 

The state UI that were added as part of the Workflow transition.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
**ui\_panels\[\]**  
  
array \[object\]

 | 

The state UI panels.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_panels\[\].  
**id**  
  
string

 | 

The id key for the Panel.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_panels\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Panel title.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_panels\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this panel for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
**ui\_actions\[\]**  
  
array \[object\]

 | 

The state UI actions.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
**id**  
  
string

 | 

The id key for the Action

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
**label**  
  
string

 | 

The name that will be used when rendering the Action title.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
**inputs\[\]**  
  
array \[object\]

 | 

The action specific inputs that must be rendered.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
**metadata**  
  
string

 | 

Metadata is a JSON string that contains arbitrary information about this action for the purposes of the view. The content it will have will be defined by each application using these APIs.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
**event**  
  
string

 | 

Used for workflows.  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of **event** or target\_status*

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_actions\[\].  
**target\_status**  
  
string

 | 

Used for tickets  
  
*Defines the target action of the Action  
  
ui\_actions\[\] items can contain one of event or **target\_status***

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
**ui\_inputs\[\]**  
  
array \[object\]

 | 

The state UI inputs.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**name**  
  
string

 | 

Name or key of the input.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**label**  
  
string

 | 

Input label.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**description**  
  
string

 | 

Label description.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**optional**  
  
boolean

 | 

Whether the field is optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**metadata**  
  
string

 | 

JSON string containing information about the input for the view. Its content will be defined by each application. Some standard information is defined by Vault, including account and schedule.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**string\_input**  
  
object

 | 

An input of type string.  
  
*The primitive type of the input.  
  
ui\_inputs\[\] items can contain one of **string\_input**, number\_input or file\_input*

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
string\_input.  
**value**  
  
string

 | 

Value of the input. Populated if input was previously filled out. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
string\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
string\_input.  
**min\_length**  
  
string

 | 

Minimum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
string\_input.  
**max\_length**  
  
string

 | 

Maximum length of the string. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
string\_input.  
**multiline**  
  
boolean

 | 

Indicates if multiline strings are allowed as value. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
string\_input.  
**regex**  
  
string

 | 

A regex that the value is required to match. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**number\_input**  
  
object

 | 

An input of type number.  
  
*The primitive type of the input.  
  
ui\_inputs\[\] items can contain one of string\_input, **number\_input** or file\_input*

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
number\_input.  
**value**  
  
string

 | 

Value of the input. Optional. We use the type "string" even though this is a number. This is because JS doesn’t handle big numbers (or floats) very well and can lose precision. Therefore it is safer to transmit any numbers as strings and have the front end code deal with it with specialised libraries.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
number\_input.  
**default\_value**  
  
string

 | 

Default value of the input. Suggested value that may be used if value is blank. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
number\_input.  
**min\_value**  
  
string

 | 

The minimum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
number\_input.  
**max\_value**  
  
string

 | 

The maximum value for this number. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
number\_input.  
**precision**  
  
string

 | 

Number of decimal places. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
number\_input.  
**step**  
  
string

 | 

Step by which the value can be incremented. Optional.

 |
| 

steps\[\].  
side\_effect\_state\_ui.  
ui\_inputs\[\].  
**file\_input**  
  
object

 | 

An input that is a file.  
  
*The primitive type of the input.  
  
ui\_inputs\[\] items can contain one of string\_input, number\_input or **file\_input***

 |
| 

steps\[\].  
**side\_effect\_vault\_callbacks\[\]**  
  
array \[object\]

 | 

Vault callback requests made as part of the transition.

 |
| 

steps\[\].  
side\_effect\_vault\_callbacks\[\].  
**vault\_endpoint**  
  
object

 | 

A callback endpoint in Vault specified in terms of an HTTP request.

 |
| 

steps\[\].  
side\_effect\_vault\_callbacks\[\].  
vault\_endpoint.  
**path**  
  
string

 |  |
| 

steps\[\].  
side\_effect\_vault\_callbacks\[\].  
vault\_endpoint.  
**method**  
  
enum

 | 

+  
**Enum values**  
**METHOD\_GET**  
**METHOD\_PUT**  
**METHOD\_POST**  
**METHOD\_DELETE**

 |
| 

steps\[\].  
side\_effect\_vault\_callbacks\[\].  
**payload**  
  
map \[string: string\]

 | 

The API call payload.

 |
| 

steps\[\].  
**side\_effect\_external\_callbacks\[\]**  
  
array \[object\]

 | 

External callback requests made as part of the transition.

 |
| 

steps\[\].  
side\_effect\_external\_callbacks\[\].  
**external\_endpoint**  
  
object

 | 

A callback endpoint external to Vault.

 |
| 

steps\[\].  
side\_effect\_external\_callbacks\[\].  
external\_endpoint.  
**target**  
  
string

 |  |
| 

steps\[\].  
side\_effect\_external\_callbacks\[\].  
**payload**  
  
map \[string: string\]

 | 

The API call payload.

 |

### [](#workflowinstanceevent "Copy link to heading")WorkflowInstanceEvent

#### [](#available_methods_12 "Copy link to heading")Available methods

-   [Get](#_workflows_api_v1_workflows_WorkflowInstanceEvent_GetWorkflowInstanceEvent) Retrieves a single Workflow instance event. **(Deprecated)**
    
-   [List](#_workflows_api_v1_workflows_ListWorkflowInstanceEventsResponse_ListWorkflowInstanceEvents) Lists Workflow instance events. **(Deprecated)**
    
-   [Create (async)](#_common_async_operations_AsyncOperation_CreateWorkflowInstanceEventAsync) Posts an event to a particular Workflow Instance. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_workflows_BatchGetWorkflowInstanceEventsResponse_BatchGetWorkflowInstanceEvents) Retrieves multiple Workflow instance events. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_WorkflowInstanceEvent_GetWorkflowInstanceEvent "Copy link to heading")Get

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The GetWorkflowInstanceEvent endpoint is deprecated.*

Retrieves a single Workflow instance event.

**Endpoint:** GET /v1/workflow-instance-event/{id}

##### [](#request_38 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Workflow instance Event.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_CONTEXT**

 |

##### [](#response_38 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for this event.

 |
| 

**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance this is being / was sent to.

 |
| 

**name**  
  
string

 | 

The name of the event, which must match the `trigger_event_name` for one of the Workflow Instance’s current state’s transitions in order for this event to be valid. The name values `technical_error` and `cancel_workflow` have predefined meanings. A `technical_error` event will move a Workflow instance into a technical error state. A `cancel_workflow` event will cancel the Workflow instance.

 |
| 

**context**  
  
map \[string: string\]

 | 

Key-value pairs, containing parameters, that are passed to the Workflow Instance.

 |
| 

**process\_timestamp**  
  
dateTime

 | 

The time this event was processed at.

 |
| 

**from\_state\_name**  
  
string

 | 

The name of the Workflow State the Workflow instance transitioned from as a result of this event.

 |
| 

**to\_state\_name**  
  
string

 | 

The name of the Workflow State the Workflow instance transitioned to as a result of this event.

 |
| 

**transition\_name**  
  
string

 | 

The name of the Workflow transition this event triggered.

 |
| 

**from\_state\_id**  
  
string

 | 

The ID of the Workflow state that the Workflow instance transitioned from as a result of this event.

 |
| 

**to\_state\_id**  
  
string

 | 

The ID of the Workflow state that the Workflow instance transitioned to as a result of this event.

 |

#### [](#_workflows_api_v1_workflows_ListWorkflowInstanceEventsResponse_ListWorkflowInstanceEvents "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateWorkflowInstantiationSchedule endpoint is deprecated.*

Lists Workflow instance events.

**Endpoint:** GET /v1/workflow-instance-events

##### [](#request_39 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**workflow\_instance\_id**  
  
string

 | 

The Workflow instance ID that associated Workflow instance events will be included for.  
  
Required.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_CONTEXT**

 |
| 

**order\_by**  
  
array \[enum\]

 | 

The ordering direction of the results.  
  
**Enum values**  
**ORDER\_BY\_PROCESS\_TIMESTAMP\_ASC**  
**ORDER\_BY\_PROCESS\_TIMESTAMP\_DESC**  
**ORDER\_BY\_NAME\_ASC**  
**ORDER\_BY\_NAME\_DESC**

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |

##### [](#response_39 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_instance\_events\[\]**  
  
array \[object\]

 | 

A list of matching Workflow instance events.

 |
| 

workflow\_instance\_events\[\].  
**id**  
  
string

 | 

The unique identifier for this event.

 |
| 

workflow\_instance\_events\[\].  
**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance this is being / was sent to.

 |
| 

workflow\_instance\_events\[\].  
**name**  
  
string

 | 

The name of the event, which must match the `trigger_event_name` for one of the Workflow Instance’s current state’s transitions in order for this event to be valid. The name values `technical_error` and `cancel_workflow` have predefined meanings. A `technical_error` event will move a Workflow instance into a technical error state. A `cancel_workflow` event will cancel the Workflow instance.

 |
| 

workflow\_instance\_events\[\].  
**context**  
  
map \[string: string\]

 | 

Key-value pairs, containing parameters, that are passed to the Workflow Instance.

 |
| 

workflow\_instance\_events\[\].  
**process\_timestamp**  
  
dateTime

 | 

The time this event was processed at.

 |
| 

workflow\_instance\_events\[\].  
**from\_state\_name**  
  
string

 | 

The name of the Workflow State the Workflow instance transitioned from as a result of this event.

 |
| 

workflow\_instance\_events\[\].  
**to\_state\_name**  
  
string

 | 

The name of the Workflow State the Workflow instance transitioned to as a result of this event.

 |
| 

workflow\_instance\_events\[\].  
**transition\_name**  
  
string

 | 

The name of the Workflow transition this event triggered.

 |
| 

workflow\_instance\_events\[\].  
**from\_state\_id**  
  
string

 | 

The ID of the Workflow state that the Workflow instance transitioned from as a result of this event.

 |
| 

workflow\_instance\_events\[\].  
**to\_state\_id**  
  
string

 | 

The ID of the Workflow state that the Workflow instance transitioned to as a result of this event.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, returns the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, returns the last page of results.

 |

#### [](#_common_async_operations_AsyncOperation_CreateWorkflowInstanceEventAsync "Copy link to heading")Create (async)

**Deprecated** as of release **2.8**, and will be removed no earlier than release **7.0** *The CreateWorkflowInstanceEventAsync endpoint is deprecated.*

Posts an event to a particular Workflow Instance. The operation will complete when the message has been processed and added to the history of the Workflow Instance.

**Endpoint:** POST /v1/workflow-instance-events:asyncCreate

##### [](#request_40 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 256 characters.

 |
| 

**access\_control\_context**  
  
object

 | 

The employee on whose behalf the call is made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**workflow\_instance\_event**  
  
object

 | 

The Workflow instance Event to create. Required.

 |
| 

workflow\_instance\_event.  
**id**  
  
string

 | 

The unique identifier for this event.

 |
| 

workflow\_instance\_event.  
**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance this is being / was sent to.

 |
| 

workflow\_instance\_event.  
**name**  
  
string

 | 

The name of the event, which must match the `trigger_event_name` for one of the Workflow Instance’s current state’s transitions in order for this event to be valid. The name values `technical_error` and `cancel_workflow` have predefined meanings. A `technical_error` event will move a Workflow instance into a technical error state. A `cancel_workflow` event will cancel the Workflow instance.

 |
| 

workflow\_instance\_event.  
**context**  
  
map \[string: string\]

 | 

Key-value pairs, containing parameters, that are passed to the Workflow Instance.

 |

##### [](#response_40 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID that can be used to retrieve this operation.

 |
| 

**metadata**  
  
object

 | 

Metadata of the operation.  
  
This is a piece of third party functionality. You can find more information at: [https://protobuf.dev/reference/protobuf/google.protobuf/#any](https://protobuf.dev/reference/protobuf/google.protobuf/#any)

 |
| 

**create\_timestamp**  
  
dateTime

 | 

When this operation was created.

 |
| 

**done\_timestamp**  
  
dateTime

 | 

When this operation was completed.

 |
| 

**done**  
  
boolean

 | 

Whether the operation is completed or not.

 |
| 

**response**  
  
object

 | 

If the operation completed successfully then this contains the serialised proto object that would have been returned by the original API method if it was synchronous.  
  
This is a piece of third party functionality. You can find more information at: [https://protobuf.dev/reference/protobuf/google.protobuf/#any](https://protobuf.dev/reference/protobuf/google.protobuf/#any)  
  
*This can contain one of **response** or error*

 |
| 

**error**  
  
object

 | 

If the operation completed unsuccessfully then this contains the information about the error.  
  
This is a piece of third party functionality. You can find more information at: [https://googleapis.github.io/HowToRPC.html](https://googleapis.github.io/HowToRPC.html)  
  
*This can contain one of response or **error***

 |

#### [](#_workflows_api_v1_workflows_BatchGetWorkflowInstanceEventsResponse_BatchGetWorkflowInstanceEvents "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetWorkflowInstanceEvents endpoint is deprecated.*

Retrieves multiple Workflow instance events.

**Endpoint:** GET /v1/workflow-instance-events:batchGet

##### [](#request_41 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the Workflow instance events.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

A list of the 'omitted by default' fields that will be returned in the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_CONTEXT**

 |

##### [](#response_41 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_instance\_events**  
  
map \[string: object\]

 | 

A map of Workflow Instance Event IDs to Workflow instance events.

 |
| 

workflow\_instance\_events\[KEY\].  
**id**  
  
string

 | 

The unique identifier for this event.

 |
| 

workflow\_instance\_events\[KEY\].  
**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance this is being / was sent to.

 |
| 

workflow\_instance\_events\[KEY\].  
**name**  
  
string

 | 

The name of the event, which must match the `trigger_event_name` for one of the Workflow Instance’s current state’s transitions in order for this event to be valid. The name values `technical_error` and `cancel_workflow` have predefined meanings. A `technical_error` event will move a Workflow instance into a technical error state. A `cancel_workflow` event will cancel the Workflow instance.

 |
| 

workflow\_instance\_events\[KEY\].  
**context**  
  
map \[string: string\]

 | 

Key-value pairs, containing parameters, that are passed to the Workflow Instance.

 |
| 

workflow\_instance\_events\[KEY\].  
**process\_timestamp**  
  
dateTime

 | 

The time this event was processed at.

 |
| 

workflow\_instance\_events\[KEY\].  
**from\_state\_name**  
  
string

 | 

The name of the Workflow State the Workflow instance transitioned from as a result of this event.

 |
| 

workflow\_instance\_events\[KEY\].  
**to\_state\_name**  
  
string

 | 

The name of the Workflow State the Workflow instance transitioned to as a result of this event.

 |
| 

workflow\_instance\_events\[KEY\].  
**transition\_name**  
  
string

 | 

The name of the Workflow transition this event triggered.

 |
| 

workflow\_instance\_events\[KEY\].  
**from\_state\_id**  
  
string

 | 

The ID of the Workflow state that the Workflow instance transitioned from as a result of this event.

 |
| 

workflow\_instance\_events\[KEY\].  
**to\_state\_id**  
  
string

 | 

The ID of the Workflow state that the Workflow instance transitioned to as a result of this event.

 |

### [](#workflowinstancestate "Copy link to heading")WorkflowInstanceState

#### [](#available_methods_13 "Copy link to heading")Available methods

-   [List](#_workflows_api_v1_workflows_ListWorkflowInstanceStatesResponse_ListWorkflowInstanceStates) Lists Workflow instance states. **(Deprecated)**
    
-   [Get](#_workflows_api_v1_workflows_WorkflowInstanceState_GetWorkflowInstanceState) Retrieves a Workflow instance state. **(Deprecated)**
    
-   [BatchGet](#_workflows_api_v1_workflows_BatchGetWorkflowInstanceStatesResponse_BatchGetWorkflowInstanceStates) Retrieves multiple Workflow instance states. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_ListWorkflowInstanceStatesResponse_ListWorkflowInstanceStates "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The ListWorkflowInstanceStates endpoint is deprecated.*

Lists Workflow instance states.

**Endpoint:** GET /v1/workflow-instance-states

##### [](#request_42 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**workflow\_instance\_id**  
  
string

 | 

The Workflow instance ID that the listed Workflow instance states belong to.

 |
| 

**access\_control\_context**  
  
object

 | 

The employee on whose behalf the call is made.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**order\_by**  
  
array \[enum\]

 | 

The ordering direction of the results.  
  
**Enum values**  
**ORDER\_BY\_TIMESTAMP\_ASC**  
**ORDER\_BY\_TIMESTAMP\_DESC**

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be listed.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

The token of the page to retrieve the results from. If empty, the first page of results will be returned. Optional.

 |

##### [](#response_42 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_instance\_states\[\]**  
  
array \[object\]

 | 

A list of matching Workflow instance states.

 |
| 

workflow\_instance\_states\[\].  
**id**  
  
string

 | 

The unique identifier for this state.

 |
| 

workflow\_instance\_states\[\].  
**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance.

 |
| 

workflow\_instance\_states\[\].  
**state\_name**  
  
string

 | 

The name of the state to which this global state refers.

 |
| 

workflow\_instance\_states\[\].  
**timestamp**  
  
dateTime

 | 

The time at which this state was entered.

 |
| 

workflow\_instance\_states\[\].  
**global\_state**  
  
map \[string: string\]

 | 

A map of global state key to value for the Workflow instance at the time when the Workflow instance state was entered.

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token used to retrieve the previous page. If empty, this returns the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token used to retrieve the next page. If empty, this returns the last page of results.

 |

#### [](#_workflows_api_v1_workflows_WorkflowInstanceState_GetWorkflowInstanceState "Copy link to heading")Get

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The GetWorkflowInstanceState endpoint is deprecated.*

Retrieves a Workflow instance state.

**Endpoint:** GET /v1/workflow-instance-states/{id}

##### [](#request_43 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Workflow instance state.

 |

##### [](#response_43 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for this state.

 |
| 

**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance.

 |
| 

**state\_name**  
  
string

 | 

The name of the state to which this global state refers.

 |
| 

**timestamp**  
  
dateTime

 | 

The time at which this state was entered.

 |
| 

**global\_state**  
  
map \[string: string\]

 | 

A map of global state key to value for the Workflow instance at the time when the Workflow instance state was entered.

 |

#### [](#_workflows_api_v1_workflows_BatchGetWorkflowInstanceStatesResponse_BatchGetWorkflowInstanceStates "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The BatchGetWorkflowInstanceStates endpoint is deprecated.*

Retrieves multiple Workflow instance states.

**Endpoint:** GET /v1/workflow-instance-states:batchGet

##### [](#request_44 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the Workflow instance states.

 |

##### [](#response_44 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**workflow\_instance\_states**  
  
map \[string: object\]

 | 

A map of Workflow instance state IDs to Workflow instance states.

 |
| 

workflow\_instance\_states\[KEY\].  
**id**  
  
string

 | 

The unique identifier for this state.

 |
| 

workflow\_instance\_states\[KEY\].  
**workflow\_instance\_id**  
  
string

 | 

The ID of the Workflow instance.

 |
| 

workflow\_instance\_states\[KEY\].  
**state\_name**  
  
string

 | 

The name of the state to which this global state refers.

 |
| 

workflow\_instance\_states\[KEY\].  
**timestamp**  
  
dateTime

 | 

The time at which this state was entered.

 |
| 

workflow\_instance\_states\[KEY\].  
**global\_state**  
  
map \[string: string\]

 | 

A map of global state key to value for the Workflow instance at the time when the Workflow instance state was entered.

 |

### [](#workflowinstantiationschedule "Copy link to heading")WorkflowInstantiationSchedule

#### [](#available_methods_14 "Copy link to heading")Available methods

-   [Create](#_workflows_api_v1_workflows_WorkflowInstantiationSchedule_CreateWorkflowInstantiationSchedule) Creates a Workflow Instantiation Schedule. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_WorkflowInstantiationSchedule_CreateWorkflowInstantiationSchedule "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The CreateWorkflowInstantiationSchedule endpoint is deprecated.*

Creates a Workflow Instantiation Schedule.

**Endpoint:** POST /v1/workflow-instantiation-schedules

##### [](#request_45 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

The unique string ID used to ensure this request is idempotent. Required.  
  
Required.  
Max length: 256 characters.

 |
| 

**access\_control\_context**  
  
object

 | 

Specifies the employee the call is made on behalf of.

 |
| 

access\_control\_context.  
**employee\_id**  
  
string

 | 

The ID of the employee performing this call.

 |
| 

access\_control\_context.  
**permissions\[\]**  
  
array \[string\]

 | 

The permissions granted to the given `employee_id`.

 |
| 

**workflow\_instantiation\_schedule**  
  
object

 | 

The Workflow Instantiation Schedule to create. Required.

 |
| 

workflow\_instantiation\_schedule.  
**workflow\_definition\_version\_id**  
  
string

 | 

The ID of the Workflow Definition Version that will be instantiated. Used for instantiating a Workflow with a specific version of the Workflow Definition. Required field for `CreateWorkflowInstantiationSchedule`.  
  
Required.  
Max length: 512 characters.

 |
| 

workflow\_instantiation\_schedule.  
**cron\_expression**  
  
string

 | 

Cron expression for this Workflow Instantiation Schedule. Required for `CreateWorkflowInstantiationSchedule`.  
  
Required.  
Max length: 512 characters.

 |
| 

**instantiation\_context**  
  
map \[string: string\]

 | 

The initial context to use to instantiate the Workflow. Optional.

 |

##### [](#response_45 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique identifier for this Workflow Instantiation Schedule. Automatically generated.

 |
| 

**workflow\_definition\_id**  
  
string

 | 

The ID of the Workflow Definition that will be instantiated.

 |
| 

**workflow\_definition\_version\_id**  
  
string

 | 

The ID of the Workflow Definition Version that will be instantiated. Used for instantiating a Workflow with a specific version of the Workflow Definition. Required field for `CreateWorkflowInstantiationSchedule`.  
  
Required.  
Max length: 512 characters.

 |
| 

**cron\_expression**  
  
string

 | 

Cron expression for this Workflow Instantiation Schedule. Required for `CreateWorkflowInstantiationSchedule`.  
  
Required.  
Max length: 512 characters.

 |
| 

**next\_run\_timestamp**  
  
dateTime

 | 

The time that a Workflow instance will next be created.

 |

### [](#workflowintechnicalerror "Copy link to heading")WorkflowInTechnicalError

#### [](#available_methods_15 "Copy link to heading")Available methods

-   [Retry](#_workflows_api_v1_workflows_WorkflowInstanceEventResponse_RetryWorkflowInTechnicalError) Retries the most recently submitted event which is not an error/retry event, for a given Workflow instance in technical error. **(Deprecated)**
    

#### [](#_workflows_api_v1_workflows_WorkflowInstanceEventResponse_RetryWorkflowInTechnicalError "Copy link to heading")Retry

**Deprecated** as of release **4.7**, and will be removed no earlier than release **7.0** *The RetryWorkflowInTechnicalError endpoint is deprecated.*

Retries the most recently submitted event which is not an error/retry event, for a given Workflow instance in technical error.

**Endpoint:** POST /v1/workflow-instance-events:retryWorkflowInTechnicalError

##### [](#request_46 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**instance\_id**  
  
string

 | 

The Workflow Instance ID of a Workflow in technical error, for which the the most recently submitted event which is not an error/retry event will be retried.

 |

##### [](#response_46 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**event\_id**  
  
string

 | 

The Workflow Instance Event ID.

 |
| 

**processed**  
  
boolean

 | 

Indicates whether the Workflow Instance Event was successfully processed.

 |

## [](#workflows_streaming_api "Copy link to heading")Workflows Streaming API

### [](#overview "Copy link to heading")Overview

Vault Workflows are triggered by client integrations or Vault itself (e.g. via Smart Contracts). The Workflows Streaming API emits requests and accepts responses for two purposes:

-   Orchestrating processes that involve external operations conducted by integrated client services
    
-   Tracking or consuming Workflow instantiation requests if the native Workflow engine is being bypassed
    

#### [](#message_formats "Copy link to heading")Message formats

The supported message formats are JSON or Google Protobuf. The required format is set when your Vault instance is configured.

#### [](#downloading_the_proto_files "Copy link to heading")Downloading the proto files

info

If you are using the Protobuf message format, download the schemas you need to integrate with our Workflows Streaming API.

Download download

chat\_bubble

We guarantee API backwards compatibility at the proto level but not for code generated from those protos. Due to the varying output of available proto compilers, any code that is autogenerated from our proto files is not guaranteed to be backwards compatible with code that was autogenerated from proto files delivered with a previous version of Vault (including minor versions).

### [](#requests "Copy link to heading")Requests

#### [](#externalworkflowoperationrequest "Copy link to heading")ExternalWorkflowOperationRequest

`ExternalWorkflowOperationRequest`s allow Workflows Definitions that have external callbacks specified as part of their entry actions to instruct an external service to execute an operation (callback) by publishing messages via this topic.

*Topic*: `vault.api.v1.workflows.workflow_instance.external_operation.requests`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

string

 | 

A unique request identifier.

 |
| 

`workflow_instance_id`

 | 

string

 | 

A globally-unique identifier of the Workflow instance.

 |
| 

`target`

 | 

string

 | 

The name of the target in the external service that will process the request.

 |
| 

`response_event`

 | 

string

 | 

The name of the event that will be sent back and used to progress a Workflow forward.

 |
| 

`arguments`

 | 

map<string, string>

 | 

Key-value pairs passed with an external operation request.

 |

#### [](#createworkflowinstancerequest "Copy link to heading")CreateWorkflowInstanceRequest

`CreateWorkflowInstanceRequest`s are requests to create an instance of a specified Workflows Definition. This topic streams out asynchronous CreateWorkflowInstanceRequests that occur within Vault.

*Topic*: `vault.api.v1.workflows.workflow_instance.create.requests`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

string

 | 

A unique string ID used to ensure this request is idempotent. Required. Max Length: 256 characters.

 |
| 

`workflow_instance`

 | 

WorkflowInstance

 | 

The Workflow instance to create. Required.

 |
| 

`instantiation_context`

 | 

map<string, string>

 | 

The initial context to use to instantiate the Workflow. Optional; required fields dependent on Workflow.

 |

### [](#responses "Copy link to heading")Responses

#### [](#externalworkflowoperationresponse "Copy link to heading")ExternalWorkflowOperationResponse

`ExternalWorkflowOperationResponse`s allow external services to respond to ExternalWorkflowOperationRequests on completion of the request.

*Topic*: `vault.api.v1.workflows.workflow_instance.external_operation.responses`

*DLQ*: `vault.api.v1.workflows.workflow_instance.external_operation.responses.failures`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`request_id`

 | 

string

 | 

A unique string ID used to ensure this request is idempotent. Required. Max Length: 256 characters.

 |
| 

`workflow_instance_id`

 | 

string

 | 

A globally-unique identifier for the Workflow instance.

 |
| 

`event`

 | 

string

 | 

The name of the event that will be used to progress a Workflow.

 |
| 

`event_context`

 | 

map<string, string>

 | 

Context passed to the event.

 |
| 

`external_operation_request_id`

 | 

string

 | 

Obtained through the request topic as the `request_id`

 |