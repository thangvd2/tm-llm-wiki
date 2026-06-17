---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/api/audit_api"
title: "Audit API"
scraped_at: "2026-06-16T16:37:55.263Z"
images: 0
---

# Audit API

## [](#about_the_vault_core_audit_api "Copy link to heading")About the Vault Core Audit API

Vault Core records information on authenticated requests made to its supported APIs, and makes this available via the REST Audit API and the Kafka Audit Streaming API.

Vault Core uses two objects to represent information about requests:

-   *Audit Logs*: Record all the information corresponding to a request.
    
-   *Action Logs*: Record the specific state changes or data mutations (writes or updates) applied to a Vault Core object.
    

A request therefore frequently has both an Audit Log and Action Log associated with it. Both types of log are immutable, and are created when an event occurs in the Vault Core API; they are then published to Kafka through the [Audit Streaming API](/vault-core/5-8/EN/api/audit_api#audit_streaming_api). Audit and Action logs can be retrieved through the REST [Audit API](/vault-core/5-8/EN/api/audit_api).

### [](#how_it_works "Copy link to heading")How it works

When an incoming request is authenticated and authorised by the Core API, an interceptor within the API gateway captures the request and response data and publishes an Audit Log. These logs are simultaneously published to Kafka for real-time streaming through the Audit Streaming API and securely persisted in the database, which serves the reads through the REST Audit API.

### [](#system_design "Copy link to heading")System design

Vault Core’s architecture prioritises high availability and performance of the platform’s core operations. To protect the wider platform from latency or degradation, and to avoid a single point of contention around the Audit component, Vault Core’s APIs are designed to be resilient against audit logging interruptions.

chat\_bubble

Due to this protective decoupling, in very rare cases an API request may succeed without an associated log being recorded (for example, if Kafka is unavailable). In the highly unlikely event that the interceptor fails to publish a message, API traffic is not disrupted and the service generates a metric for alerting and monitoring purposes.

## [](#key_information_about_audit_and_action_logs "Copy link to heading")Key information about Audit and Action logs

### [](#access_token_attribution "Copy link to heading")Access token attribution

To authenticate to the Vault Core APIs you require an access token, which is provided by either:

-   A [JSON Web Token](/vault-core/5-8/EN/api/overview#json_web_tokens) (JWT); or
    
-   A service account managed via the [Auth](/vault-core/5-8/EN/api/core_api#auth) endpoints (deprecated).
    

The Action and Audit logs will include either the JWT subject claim (sub) or the service account ID in the field `request_initiator_id`.

You can create multiple service accounts for different use cases to differentiate requests for your Action and Audit logs. For more information on creating service accounts, see the [Auth](/vault-core/5-8/EN/api/core_api#auth) section.

### [](#employee_and_customer_id "Copy link to heading")Employee and Customer ID

You can optionally include information about who instructed a request (such as the bank employee) and/or for whom (such as a customer) the request was made. You can then use this information to aggregate, sort, and filter Action and Audit logs.

Include the ID information in the API request header’s `X-On-Behalf-Of-Customer-ID` or `X-On-Behalf-Of-Employee-ID`. These headers do not change any of the functionality of the underlying API call.

If included, this information is provided in both the logs via Audit Streaming API, and Audit and Actions Logs via the Audit API, as `on_behalf_of_customer_id` or `on_behalf_of_employee_id`.

## [](#lifespan_of_audit_and_action_logs "Copy link to heading")Lifespan of Audit and Action Logs

*Audit Logs* have a limited lifespan in Vault Core; after the configured time period you can no longer access them through the Audit API:

-   For bank-hosted instances of Vault Core, this has a default setting of one day and is configurable via the `audit.cleanup.ttl` setting in `values.yaml` (with a value other than the default of `1 DAYS`).
    
-   For Vault Core SaaS, this is set to seven days and you cannot configure this otherwise.
    

*Action Logs* are persistent and are stored indefinitely in Vault Core.

## [](#downloading_the_openapi_definition_file "Copy link to heading")Downloading the OpenAPI definition file

The OpenAPI definition is an Interface Description Language for describing RESTful APIs expressed in JSON format.

info

The Audit API is available in this format and can be downloaded here:

Download download

The specification includes Thought Machine-specific extensions that are not standard to OpenAPI. The generation method of the specification and resulting naming, paths and schemas are subject to change. For more information about the OpenAPI specification see the [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3).

## [](#action_logs "Copy link to heading")Action logs

Action Logs record information about mutations made to any Vault Core resources through one of the available APIs (as per the `vault_object_types`).

They are generated from successful `CREATE`, `UPDATE` and `DELETE` requests so you can see who made changes in the resources and how they mutated over time.

You can query this information through the [Action Log](/vault-core/5-8/EN/api/audit_api#actionlog) endpoints in the Audit API.

### [](#actionlog "Copy link to heading")ActionLog

#### [](#available_methods "Copy link to heading")Available methods

-   [List](#_audit_api_v1_action_logs_ListActionLogsResponse_ListActionLogs) A list of all available Action Logs that have been recorded.
    
-   [Get](#_audit_api_v1_action_logs_ActionLog_GetActionLog) Retrieves a specific Action Log using its ID.
    
-   [BatchGet](#_audit_api_v1_action_logs_BatchGetActionLogsResponse_BatchGetActionLogs) Retrieves specific Action Logs using their IDs.
    

#### [](#_audit_api_v1_action_logs_ListActionLogsResponse_ListActionLogs "Copy link to heading")List

A list of all available Action Logs that have been recorded. Results are ordered by descending `create_timestamp`.

**Permission Scopes:** audit:read, audit.action\_logs:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/action-logs

##### [](#request "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**on\_behalf\_of\_customer\_ids**  
  
array \[string\]

 | 

The IDs of customers on whose behalf the action occurred. Optional.

 |
| 

**on\_behalf\_of\_employee\_ids**  
  
array \[string\]

 | 

The IDs of employees on whose behalf the action occurred. Optional.

 |
| 

**on\_behalf\_of\_employee\_emails**  
  
array \[string\]

 | 

The email addresses of employees the desired requests were made on behalf of. Optional.

 |
| 

**vault\_object\_types**  
  
array \[enum\]

 | 

The types of Vault objects that actions were performed on. Optional.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

**vault\_object\_ids**  
  
array \[string\]

 | 

A list of IDs associated with the Vault resources that actions were performed on. The number of Vault object IDs that may be provided is determined by the number of Vault object types that are provided. The constraints are as follows:  
  
\- If 0 Vault object types are provided, 0 Vault object IDs may be provided.  
\- If 1 Vault object type is provided, any number of Vault object IDs may be provided.  
\- If more than 1 Vault object types are provided, 0 Vault object IDs may be provided.

 |
| 

**audit\_log\_ids**  
  
array \[string\]

 | 

The IDs of Audit Logs whose associated Action Logs are to be included.

 |
| 

**group\_ids**  
  
array \[string\]

 | 

The Group IDs the Action Logs are to be associated with.

 |
| 

**page\_size**  
  
integer

 | 

The number of Action Logs to be retrieved. Must be in the range 1-100 (inclusive). Required.

 |
| 

**page\_token**  
  
string

 | 

Token of the page the results are to be retrieved from. Optional.

 |
| 

**create\_timestamp\_range**  
  
object

 | 

The range to include `create_timestamp`. Optional.

 |
| 

create\_timestamp\_range.  
**from**  
  
dateTime

 | 

Lower end of the range. The range is inclusive of its lower end.

 |
| 

create\_timestamp\_range.  
**to**  
  
dateTime

 | 

Upper end of the range. The range is exclusive of its upper end.

 |

##### [](#responses "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**action\_logs\[\]**  
  
array \[object\]

 | 

A list of matching Action Logs.

 |
| 

action\_logs\[\].  
**id**  
  
string

 | 

The unique ID for this log. Output only.

 |
| 

action\_logs\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp of when the action was first captured.

 |
| 

action\_logs\[\].  
**request\_initiator\_id**  
  
string

 | 

The ID of the Service Account that originally initiated this action.

 |
| 

action\_logs\[\].  
**on\_behalf\_of\_customer\_id**  
  
string

 | 

The ID of the customer on whose behalf this action was performed.

 |
| 

action\_logs\[\].  
**on\_behalf\_of\_employee\_id**  
  
string

 | 

The ID of the employee on whose behalf this action was performed.

 |
| 

action\_logs\[\].  
**on\_behalf\_of\_employee\_email**  
  
string

 | 

The email address of the employee on whose behalf this request was performed.

 |
| 

action\_logs\[\].  
**vault\_object\_type**  
  
enum

 | 

The type of Vault Object this action was performed on.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

action\_logs\[\].  
**vault\_object\_id**  
  
string

 | 

The Vault Object IDs of the object affected by this action.

 |
| 

action\_logs\[\].  
**action\_data**  
  
string

 | 

A JSON string containing the updated values of the updated fields. The JSON object consists of a map of the field names to the new values as set in the mutation request. Empty for deletes.

 |
| 

action\_logs\[\].  
**audit\_log\_id**  
  
string

 | 

The ID for the full Audit Log this log is derived from.

 |
| 

action\_logs\[\].  
**create\_request\_id**  
  
string

 | 

The request ID that was used to create this log. Output only.

 |
| 

action\_logs\[\].  
**group\_id**  
  
string

 | 

An ID for correlating / grouping Audit and Action Logs generated by the same request to a Public API. This ID will be propagated on sub-requests triggered by that request.

 |
| 

action\_logs\[\].  
**standard\_action**  
  
enum

 | 

If the action taken was a standard action, which of those actions was taken.  
  
**Enum values**  
**ACTION\_LOG\_STANDARD\_ACTION\_UNKNOWN**  
**ACTION\_LOG\_STANDARD\_ACTION\_CREATE**  
**ACTION\_LOG\_STANDARD\_ACTION\_UPDATE**  
**ACTION\_LOG\_STANDARD\_ACTION\_DELETE**

 |
| 

**previous\_page\_token**  
  
string

 | 

The pagination token to retrieve the previous page. If empty, this is the first page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

The pagination token to retrieve the next page. If empty, this is the last page of results.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_audit_api_v1_action_logs_ActionLog_GetActionLog "Copy link to heading")Get

Retrieves a specific Action Log using its ID.

**Permission Scopes:** audit:read, audit.action\_logs:read

**Endpoint:** GET /v1/action-logs/{id}

##### [](#request_2 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Action Log to be retrieved.

 |

##### [](#responses_2 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID for this log. Output only.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp of when the action was first captured.

 |
| 

**request\_initiator\_id**  
  
string

 | 

The ID of the Service Account that originally initiated this action.

 |
| 

**on\_behalf\_of\_customer\_id**  
  
string

 | 

The ID of the customer on whose behalf this action was performed.

 |
| 

**on\_behalf\_of\_employee\_id**  
  
string

 | 

The ID of the employee on whose behalf this action was performed.

 |
| 

**on\_behalf\_of\_employee\_email**  
  
string

 | 

The email address of the employee on whose behalf this request was performed.

 |
| 

**vault\_object\_type**  
  
enum

 | 

The type of Vault Object this action was performed on.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

**vault\_object\_id**  
  
string

 | 

The Vault Object IDs of the object affected by this action.

 |
| 

**action\_data**  
  
string

 | 

A JSON string containing the updated values of the updated fields. The JSON object consists of a map of the field names to the new values as set in the mutation request. Empty for deletes.

 |
| 

**audit\_log\_id**  
  
string

 | 

The ID for the full Audit Log this log is derived from.

 |
| 

**create\_request\_id**  
  
string

 | 

The request ID that was used to create this log. Output only.

 |
| 

**group\_id**  
  
string

 | 

An ID for correlating / grouping Audit and Action Logs generated by the same request to a Public API. This ID will be propagated on sub-requests triggered by that request.

 |
| 

**standard\_action**  
  
enum

 | 

If the action taken was a standard action, which of those actions was taken.  
  
**Enum values**  
**ACTION\_LOG\_STANDARD\_ACTION\_UNKNOWN**  
**ACTION\_LOG\_STANDARD\_ACTION\_CREATE**  
**ACTION\_LOG\_STANDARD\_ACTION\_UPDATE**  
**ACTION\_LOG\_STANDARD\_ACTION\_DELETE**

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_audit_api_v1_action_logs_BatchGetActionLogsResponse_BatchGetActionLogs "Copy link to heading")BatchGet

Retrieves specific Action Logs using their IDs.

**Permission Scopes:** audit:read, audit.action\_logs:read

**Endpoint:** GET /v1/action-logs:batchGet

##### [](#request_3 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of IDs of Action Logs to be retrieved. If any of the IDs is invalid, it will cause the whole request to fail with a "not found" error. Required; must be non-empty.

 |

##### [](#responses_3 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**action\_logs**  
  
map \[string: object\]

 | 

A mapping of Action Log ID to Action Log.

 |
| 

action\_logs\[KEY\].  
**id**  
  
string

 | 

The unique ID for this log. Output only.

 |
| 

action\_logs\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp of when the action was first captured.

 |
| 

action\_logs\[KEY\].  
**request\_initiator\_id**  
  
string

 | 

The ID of the Service Account that originally initiated this action.

 |
| 

action\_logs\[KEY\].  
**on\_behalf\_of\_customer\_id**  
  
string

 | 

The ID of the customer on whose behalf this action was performed.

 |
| 

action\_logs\[KEY\].  
**on\_behalf\_of\_employee\_id**  
  
string

 | 

The ID of the employee on whose behalf this action was performed.

 |
| 

action\_logs\[KEY\].  
**on\_behalf\_of\_employee\_email**  
  
string

 | 

The email address of the employee on whose behalf this request was performed.

 |
| 

action\_logs\[KEY\].  
**vault\_object\_type**  
  
enum

 | 

The type of Vault Object this action was performed on.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

action\_logs\[KEY\].  
**vault\_object\_id**  
  
string

 | 

The Vault Object IDs of the object affected by this action.

 |
| 

action\_logs\[KEY\].  
**action\_data**  
  
string

 | 

A JSON string containing the updated values of the updated fields. The JSON object consists of a map of the field names to the new values as set in the mutation request. Empty for deletes.

 |
| 

action\_logs\[KEY\].  
**audit\_log\_id**  
  
string

 | 

The ID for the full Audit Log this log is derived from.

 |
| 

action\_logs\[KEY\].  
**create\_request\_id**  
  
string

 | 

The request ID that was used to create this log. Output only.

 |
| 

action\_logs\[KEY\].  
**group\_id**  
  
string

 | 

An ID for correlating / grouping Audit and Action Logs generated by the same request to a Public API. This ID will be propagated on sub-requests triggered by that request.

 |
| 

action\_logs\[KEY\].  
**standard\_action**  
  
enum

 | 

If the action taken was a standard action, which of those actions was taken.  
  
**Enum values**  
**ACTION\_LOG\_STANDARD\_ACTION\_UNKNOWN**  
**ACTION\_LOG\_STANDARD\_ACTION\_CREATE**  
**ACTION\_LOG\_STANDARD\_ACTION\_UPDATE**  
**ACTION\_LOG\_STANDARD\_ACTION\_DELETE**

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

## [](#audit_logs "Copy link to heading")Audit logs

The Audit Logs record information about requests made to Vault Core through one of the available APIs (as per the `api_types`).

You can consume this information via the [Audit API](/vault-core/5-8/EN/api/audit_api) endpoints. For example, you can check all activities from Vault Core API users to find out precisely what they did, when, and what information they accessed.

chat\_bubble

The Audit Log endpoints return **basic** Audit Log information by default, because the captured requests and responses can be large. Request and response payloads are available (if captured); for more information, see [Omitted by default](/vault-core/5-8/EN/api/overview#omitted_by_default).

### [](#controlling_access_to_audit_logs "Copy link to heading")Controlling access to Audit Logs

You can use policies to restrict access to Audit Logs for each Vault object (or resource) represented by the `vault_object_type` value. For further information, see [policies](/vault-core/5-8/EN/reference/policies/).

### [](#auditlog "Copy link to heading")AuditLog

#### [](#available_methods_2 "Copy link to heading")Available methods

-   [List](#_audit_api_v1_audit_logs_ListAuditLogsResponse_ListAuditLogs) A list of all available Audit Logs that have been recorded.
    
-   [Get](#_audit_api_v1_audit_logs_AuditLog_GetAuditLog) Retrieves a specific Audit Log using its ID.
    
-   [BatchGet](#_audit_api_v1_audit_logs_BatchGetAuditLogsResponse_BatchGetAuditLogs) Retrieves specific Audit Logs by their ID.
    

#### [](#_audit_api_v1_audit_logs_ListAuditLogsResponse_ListAuditLogs "Copy link to heading")List

A list of all available Audit Logs that have been recorded. Results are ordered by descending `create_timestamp`.

**Permission Scopes:** audit:read, audit.audit\_logs:read

**Pagination consistency guarantees:** Best Effort

**Endpoint:** GET /v1/audit-logs

##### [](#request_4 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**fields\_to\_include**  
  
array \[enum\]

 | 

Additional fields to return; optional. Some Audit Log fields are omitted by default as they are bulky or costly; if those fields are specified here, they will be populated in the Audit Logs of the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_REQUEST\_PARAMETERS:**  
Includes the request parameters field.

 |
| 

**api\_types**  
  
array \[enum\]

 | 

The API types recorded Audit Logs are to be included for. Optional.  
  
**Enum values**  
**AUDIT\_LOG\_API\_TYPE\_UNKNOWN:**  
The default enum value. A unknown public Vault API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API\_STREAM:**  
The Core Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENTS\_INTEGRATION\_API:**  
The Payments Integration (or Postings) API.  
**AUDIT\_LOG\_API\_TYPE\_LEGACY\_ADMIN\_API:**  
The legacy internal admin platform that is being phased out and replaced by Core API. This API is not publicly exposed. However, the Operations Dashboard uses it for some of its functionality; this means some Audit Logs will be associated with this API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API:**  
The Core API.  
**AUDIT\_LOG\_API\_TYPE\_AUDIT\_API:**  
The Audit API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API:**  
The Workflows API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API\_STREAM:**  
The Workflows Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API:**  
The Experience Layer API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENT\_HUB\_API:**  
The Payments Hub API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_API:**  
The Data Loader API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_STREAM\_API:**  
The Data Loader Stream API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API\_STREAM:**  
The Experience Layer Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API:**  
The Products API.  
**AUDIT\_LOG\_API\_TYPE\_ACCESS\_CONTROL\_API:**  
The Access Control API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API\_STREAM:**  
The Products Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_EDGE\_FUNCTIONS\_API:**  
The Edge Functions API.

 |
| 

**endpoint\_names**  
  
array \[string\]

 | 

The fully-quantifiable gRPC endpoint or Streaming API topic name this request was made to. Optional.

 |
| 

**rest\_endpoint\_names**  
  
array \[string\]

 | 

The full names of the REST endpoints that this request was made to. Optional.

 |
| 

**request\_initiator\_ids**  
  
array \[string\]

 | 

The IDs of customers or employees who initiated this request. Optional.

 |
| 

**on\_behalf\_of\_customer\_ids**  
  
array \[string\]

 | 

The IDs of customers the desired requests were made on behalf of. Optional.

 |
| 

**on\_behalf\_of\_employee\_ids**  
  
array \[string\]

 | 

The IDs of employees the desired requests were made on behalf of. Optional.

 |
| 

**on\_behalf\_of\_employee\_emails**  
  
array \[string\]

 | 

The email addresses of employees the desired requests were made on behalf of. Optional.

 |
| 

**group\_ids**  
  
array \[string\]

 | 

The Group IDs the Audit Logs are to be associated with. Optional.

 |
| 

**page\_size**  
  
integer

 | 

The number of results to be retrieved. Required; non-zero.

 |
| 

**page\_token**  
  
string

 | 

The token of the page results are to be retrieved from. If empty, the first page of results will be returned. Optional.

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

##### [](#responses_4 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**audit\_logs\[\]**  
  
array \[object\]

 | 

A list of matching Audit Logs.

 |
| 

audit\_logs\[\].  
**id**  
  
string

 | 

The unique ID for this Audit Log.

 |
| 

audit\_logs\[\].  
**api\_type**  
  
enum

 | 

The API that recorded this request.  
  
**Enum values**  
**AUDIT\_LOG\_API\_TYPE\_UNKNOWN:**  
The default enum value. A unknown public Vault API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API\_STREAM:**  
The Core Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENTS\_INTEGRATION\_API:**  
The Payments Integration (or Postings) API.  
**AUDIT\_LOG\_API\_TYPE\_LEGACY\_ADMIN\_API:**  
The legacy internal admin platform that is being phased out and replaced by Core API. This API is not publicly exposed. However, the Operations Dashboard uses it for some of its functionality; this means some Audit Logs will be associated with this API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API:**  
The Core API.  
**AUDIT\_LOG\_API\_TYPE\_AUDIT\_API:**  
The Audit API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API:**  
The Workflows API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API\_STREAM:**  
The Workflows Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API:**  
The Experience Layer API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENT\_HUB\_API:**  
The Payments Hub API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_API:**  
The Data Loader API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_STREAM\_API:**  
The Data Loader Stream API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API\_STREAM:**  
The Experience Layer Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API:**  
The Products API.  
**AUDIT\_LOG\_API\_TYPE\_ACCESS\_CONTROL\_API:**  
The Access Control API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API\_STREAM:**  
The Products Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_EDGE\_FUNCTIONS\_API:**  
The Edge Functions API.

 |
| 

audit\_logs\[\].  
**endpoint\_name**  
  
string

 | 

The fully-quantifiable gRPC endpoint or Streaming API topic name this request was made to.

 |
| 

audit\_logs\[\].  
**rest\_endpoint\_name**  
  
string

 | 

The correspondent REST endpoint that this request was made to, when applicable.

 |
| 

audit\_logs\[\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp of when this request was first captured.

 |
| 

audit\_logs\[\].  
**request\_initiator\_id**  
  
string

 | 

The ID of the Service Account that initiated this request.

 |
| 

audit\_logs\[\].  
**on\_behalf\_of\_customer\_id**  
  
string

 | 

The ID of the customer on whose behalf this request was performed.

 |
| 

audit\_logs\[\].  
**on\_behalf\_of\_employee\_id**  
  
string

 | 

The ID of the employee on whose behalf this request was performed.

 |
| 

audit\_logs\[\].  
**on\_behalf\_of\_employee\_email**  
  
string

 | 

The email address of the employee on whose behalf this request was performed.

 |
| 

audit\_logs\[\].  
**request\_parameters**  
  
string

 | 

A JSON string containing the request parameters. This field may be very big so it is not returned by default when requesting Audit Log(s).

 |
| 

audit\_logs\[\].  
**response\_status**  
  
enum

 | 

The status of the request. Indicates if the captured request was successful for example.  
  
**Enum values**  
**AUDIT\_LOG\_RESPONSE\_STATUS\_UNKNOWN:**  
The default enum value. The response is unknown.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_UNDETERMINED:**  
The status of this captured request cannot be determined. This will typically be the case for asynchronous APIs like the Core Streaming API.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_SUCCESS:**  
The captured request succeeded.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_ERROR:**  
The captured request errored.

 |
| 

audit\_logs\[\].  
**response\_payload**  
  
string

 | 

A JSON string containing the response payload. This will only be populated for REST endpoints and when the `response_status` is not `UNDETERMINED_RESPONSE_STATUS`. This will not be populated for REST endpoints which stream their responses, like the Core API `POST /v1/contracts:simulate` endpoint. This field may be very large so it is not returned by default when requesting Audit Log(s). Where this field is required in a response, use the `fields_to_include` request parameter `INCLUDE_FIELD_RESPONSE_PAYLOAD` to include it in the response. Note that `INCLUDE_FIELD_RESPONSE_PAYLOAD` is only available for `GET /v1/audit-logs/{id}`.

 |
| 

audit\_logs\[\].  
**create\_request\_id**  
  
string

 | 

The request ID that was used to create this log.

 |
| 

audit\_logs\[\].  
**vault\_object\_type**  
  
enum

 | 

Some Audit Logs are associated with Vault objects (Account, Customer, …​). Only mutation requests will capture this information. If the type can be determined, this field contains the type of that Vault object. Otherwise the value will be VAULT\_OBJECT\_TYPE\_UNKNOWN and the `vault_object_ids` list will be empty. If the field is populated, then the `vault_object_ids` will contain at least one item.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

audit\_logs\[\].  
**vault\_object\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the Vault Objects (if known) associated with this Audit Log. Empty if there is no association, or if one could not be determined.

 |
| 

audit\_logs\[\].  
**group\_id**  
  
string

 | 

An ID for correlating / grouping Audit and Action Logs generated by the same request to an API. This ID will be propagated on sub-requests triggered by that request.

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

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_audit_api_v1_audit_logs_AuditLog_GetAuditLog "Copy link to heading")Get

Retrieves a specific Audit Log using its ID.

**Permission Scopes:** audit:read, audit.audit\_logs:read

**Endpoint:** GET /v1/audit-logs/{id}

##### [](#request_5 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the Audit Log that is to be retrieved.

 |

Query parameters  
| Name | Description |
| --- | --- |
| 
**fields\_to\_include**  
  
array \[enum\]

 | 

Additional fields to return; optional. Some audit log fields are omitted by default as they are bulky or costly; if those fields are specified here, they will be populated in the audit logs of the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_REQUEST\_PARAMETERS:**  
Includes the request parameters field.  
**INCLUDE\_FIELD\_RESPONSE\_PAYLOAD:**  
Includes the response payload field.

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

##### [](#responses_5 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID for this Audit Log.

 |
| 

**api\_type**  
  
enum

 | 

The API that recorded this request.  
  
**Enum values**  
**AUDIT\_LOG\_API\_TYPE\_UNKNOWN:**  
The default enum value. A unknown public Vault API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API\_STREAM:**  
The Core Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENTS\_INTEGRATION\_API:**  
The Payments Integration (or Postings) API.  
**AUDIT\_LOG\_API\_TYPE\_LEGACY\_ADMIN\_API:**  
The legacy internal admin platform that is being phased out and replaced by Core API. This API is not publicly exposed. However, the Operations Dashboard uses it for some of its functionality; this means some Audit Logs will be associated with this API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API:**  
The Core API.  
**AUDIT\_LOG\_API\_TYPE\_AUDIT\_API:**  
The Audit API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API:**  
The Workflows API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API\_STREAM:**  
The Workflows Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API:**  
The Experience Layer API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENT\_HUB\_API:**  
The Payments Hub API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_API:**  
The Data Loader API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_STREAM\_API:**  
The Data Loader Stream API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API\_STREAM:**  
The Experience Layer Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API:**  
The Products API.  
**AUDIT\_LOG\_API\_TYPE\_ACCESS\_CONTROL\_API:**  
The Access Control API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API\_STREAM:**  
The Products Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_EDGE\_FUNCTIONS\_API:**  
The Edge Functions API.

 |
| 

**endpoint\_name**  
  
string

 | 

The fully-quantifiable gRPC endpoint or Streaming API topic name this request was made to.

 |
| 

**rest\_endpoint\_name**  
  
string

 | 

The correspondent REST endpoint that this request was made to, when applicable.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

The timestamp of when this request was first captured.

 |
| 

**request\_initiator\_id**  
  
string

 | 

The ID of the Service Account that initiated this request.

 |
| 

**on\_behalf\_of\_customer\_id**  
  
string

 | 

The ID of the customer on whose behalf this request was performed.

 |
| 

**on\_behalf\_of\_employee\_id**  
  
string

 | 

The ID of the employee on whose behalf this request was performed.

 |
| 

**on\_behalf\_of\_employee\_email**  
  
string

 | 

The email address of the employee on whose behalf this request was performed.

 |
| 

**request\_parameters**  
  
string

 | 

A JSON string containing the request parameters. This field may be very big so it is not returned by default when requesting Audit Log(s).

 |
| 

**response\_status**  
  
enum

 | 

The status of the request. Indicates if the captured request was successful for example.  
  
**Enum values**  
**AUDIT\_LOG\_RESPONSE\_STATUS\_UNKNOWN:**  
The default enum value. The response is unknown.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_UNDETERMINED:**  
The status of this captured request cannot be determined. This will typically be the case for asynchronous APIs like the Core Streaming API.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_SUCCESS:**  
The captured request succeeded.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_ERROR:**  
The captured request errored.

 |
| 

**response\_payload**  
  
string

 | 

A JSON string containing the response payload. This will only be populated for REST endpoints and when the `response_status` is not `UNDETERMINED_RESPONSE_STATUS`. This will not be populated for REST endpoints which stream their responses, like the Core API `POST /v1/contracts:simulate` endpoint. This field may be very large so it is not returned by default when requesting Audit Log(s). Where this field is required in a response, use the `fields_to_include` request parameter `INCLUDE_FIELD_RESPONSE_PAYLOAD` to include it in the response. Note that `INCLUDE_FIELD_RESPONSE_PAYLOAD` is only available for `GET /v1/audit-logs/{id}`.

 |
| 

**create\_request\_id**  
  
string

 | 

The request ID that was used to create this log.

 |
| 

**vault\_object\_type**  
  
enum

 | 

Some Audit Logs are associated with Vault objects (Account, Customer, …​). Only mutation requests will capture this information. If the type can be determined, this field contains the type of that Vault object. Otherwise the value will be VAULT\_OBJECT\_TYPE\_UNKNOWN and the `vault_object_ids` list will be empty. If the field is populated, then the `vault_object_ids` will contain at least one item.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

**vault\_object\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the Vault Objects (if known) associated with this Audit Log. Empty if there is no association, or if one could not be determined.

 |
| 

**group\_id**  
  
string

 | 

An ID for correlating / grouping Audit and Action Logs generated by the same request to an API. This ID will be propagated on sub-requests triggered by that request.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

#### [](#_audit_api_v1_audit_logs_BatchGetAuditLogsResponse_BatchGetAuditLogs "Copy link to heading")BatchGet

Retrieves specific Audit Logs by their ID.

**Permission Scopes:** audit:read, audit.audit\_logs:read

**Endpoint:** GET /v1/audit-logs:batchGet

##### [](#request_6 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

A list of IDs of Audit Logs to be retrieved. If any ID is invalid, the whole request will fail with a "not found" error. Required; must be non-empty.

 |
| 

**fields\_to\_include**  
  
array \[enum\]

 | 

Additional fields to return; optional. Some Audit Log fields are omitted by default as they are bulky or costly; if those fields are specified here, they will be populated in the Audit Logs of the response.  
  
**Enum values**  
**INCLUDE\_FIELD\_REQUEST\_PARAMETERS:**  
Includes the request parameters field.

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

##### [](#responses_6 "Copy link to heading")Responses

Success Errors

Response fields  
| Name | Description |
| --- | --- |
| 
**audit\_logs**  
  
map \[string: object\]

 | 

A mapping of Audit Log ID to Audit Log.

 |
| 

audit\_logs\[KEY\].  
**id**  
  
string

 | 

The unique ID for this Audit Log.

 |
| 

audit\_logs\[KEY\].  
**api\_type**  
  
enum

 | 

The API that recorded this request.  
  
**Enum values**  
**AUDIT\_LOG\_API\_TYPE\_UNKNOWN:**  
The default enum value. A unknown public Vault API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API\_STREAM:**  
The Core Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENTS\_INTEGRATION\_API:**  
The Payments Integration (or Postings) API.  
**AUDIT\_LOG\_API\_TYPE\_LEGACY\_ADMIN\_API:**  
The legacy internal admin platform that is being phased out and replaced by Core API. This API is not publicly exposed. However, the Operations Dashboard uses it for some of its functionality; this means some Audit Logs will be associated with this API.  
**AUDIT\_LOG\_API\_TYPE\_CORE\_API:**  
The Core API.  
**AUDIT\_LOG\_API\_TYPE\_AUDIT\_API:**  
The Audit API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API:**  
The Workflows API.  
**AUDIT\_LOG\_API\_TYPE\_WORKFLOWS\_API\_STREAM:**  
The Workflows Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API:**  
The Experience Layer API.  
**AUDIT\_LOG\_API\_TYPE\_PAYMENT\_HUB\_API:**  
The Payments Hub API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_API:**  
The Data Loader API.  
**AUDIT\_LOG\_API\_TYPE\_DATA\_LOADER\_STREAM\_API:**  
The Data Loader Stream API.  
**AUDIT\_LOG\_API\_TYPE\_XPL\_API\_STREAM:**  
The Experience Layer Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API:**  
The Products API.  
**AUDIT\_LOG\_API\_TYPE\_ACCESS\_CONTROL\_API:**  
The Access Control API.  
**AUDIT\_LOG\_API\_TYPE\_PRODUCTS\_API\_STREAM:**  
The Products Streaming API.  
**AUDIT\_LOG\_API\_TYPE\_EDGE\_FUNCTIONS\_API:**  
The Edge Functions API.

 |
| 

audit\_logs\[KEY\].  
**endpoint\_name**  
  
string

 | 

The fully-quantifiable gRPC endpoint or Streaming API topic name this request was made to.

 |
| 

audit\_logs\[KEY\].  
**rest\_endpoint\_name**  
  
string

 | 

The correspondent REST endpoint that this request was made to, when applicable.

 |
| 

audit\_logs\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

The timestamp of when this request was first captured.

 |
| 

audit\_logs\[KEY\].  
**request\_initiator\_id**  
  
string

 | 

The ID of the Service Account that initiated this request.

 |
| 

audit\_logs\[KEY\].  
**on\_behalf\_of\_customer\_id**  
  
string

 | 

The ID of the customer on whose behalf this request was performed.

 |
| 

audit\_logs\[KEY\].  
**on\_behalf\_of\_employee\_id**  
  
string

 | 

The ID of the employee on whose behalf this request was performed.

 |
| 

audit\_logs\[KEY\].  
**on\_behalf\_of\_employee\_email**  
  
string

 | 

The email address of the employee on whose behalf this request was performed.

 |
| 

audit\_logs\[KEY\].  
**request\_parameters**  
  
string

 | 

A JSON string containing the request parameters. This field may be very big so it is not returned by default when requesting Audit Log(s).

 |
| 

audit\_logs\[KEY\].  
**response\_status**  
  
enum

 | 

The status of the request. Indicates if the captured request was successful for example.  
  
**Enum values**  
**AUDIT\_LOG\_RESPONSE\_STATUS\_UNKNOWN:**  
The default enum value. The response is unknown.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_UNDETERMINED:**  
The status of this captured request cannot be determined. This will typically be the case for asynchronous APIs like the Core Streaming API.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_SUCCESS:**  
The captured request succeeded.  
**AUDIT\_LOG\_RESPONSE\_STATUS\_ERROR:**  
The captured request errored.

 |
| 

audit\_logs\[KEY\].  
**response\_payload**  
  
string

 | 

A JSON string containing the response payload. This will only be populated for REST endpoints and when the `response_status` is not `UNDETERMINED_RESPONSE_STATUS`. This will not be populated for REST endpoints which stream their responses, like the Core API `POST /v1/contracts:simulate` endpoint. This field may be very large so it is not returned by default when requesting Audit Log(s). Where this field is required in a response, use the `fields_to_include` request parameter `INCLUDE_FIELD_RESPONSE_PAYLOAD` to include it in the response. Note that `INCLUDE_FIELD_RESPONSE_PAYLOAD` is only available for `GET /v1/audit-logs/{id}`.

 |
| 

audit\_logs\[KEY\].  
**create\_request\_id**  
  
string

 | 

The request ID that was used to create this log.

 |
| 

audit\_logs\[KEY\].  
**vault\_object\_type**  
  
enum

 | 

Some Audit Logs are associated with Vault objects (Account, Customer, …​). Only mutation requests will capture this information. If the type can be determined, this field contains the type of that Vault object. Otherwise the value will be VAULT\_OBJECT\_TYPE\_UNKNOWN and the `vault_object_ids` list will be empty. If the field is populated, then the `vault_object_ids` will contain at least one item.  
  
**Enum values**  
**VAULT\_OBJECT\_TYPE\_UNKNOWN:**  
An unknown object  
**VAULT\_OBJECT\_TYPE\_ACCOUNT:**  
An Account  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE:**  
An AccountUpdate  
**VAULT\_OBJECT\_TYPE\_AUDIT\_LOG:**  
An AuditLog  
**VAULT\_OBJECT\_TYPE\_CUSTOMER:**  
A Customer  
**VAULT\_OBJECT\_TYPE\_CUSTOMER\_ADDRESS:**  
A CustomerAddress  
**VAULT\_OBJECT\_TYPE\_FLAG:**  
A Flag  
**VAULT\_OBJECT\_TYPE\_FLAG\_DEFINITION:**  
A FlagDefinition  
**VAULT\_OBJECT\_TYPE\_INTERNAL\_ACCOUNT:**  
An InternalAccount  
**VAULT\_OBJECT\_TYPE\_PAYEE:**  
A Payee  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE:**  
A PaymentDevice  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_DEVICE\_LINK:**  
A PaymentDeviceLink  
**VAULT\_OBJECT\_TYPE\_PIPELINE:**  
A Pipeline  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_JOB:**  
A PipelineJob  
**VAULT\_OBJECT\_TYPE\_PIPELINE\_VERSION:**  
A PipelineVersion  
**VAULT\_OBJECT\_TYPE\_POSTING:**  
A Posting  
**VAULT\_OBJECT\_TYPE\_PRODUCT:**  
A Product  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION:**  
A ProductVersion  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_DEFINITION:**  
A RestrictionDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET:**  
A RestrictionSet  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION:**  
A RestrictionSetDefinition  
**VAULT\_OBJECT\_TYPE\_RESTRICTION\_SET\_DEFINITION\_VERSION:**  
A RestrictionSetDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_SERVICE\_ACCOUNT:**  
A ServiceAccount  
**VAULT\_OBJECT\_TYPE\_TICKET:**  
A Ticket  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION:**  
A WorkflowDefinition  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_DEFINITION\_VERSION:**  
A WorkflowDefinitionVersion  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE:**  
A WorkflowInstance  
**VAULT\_OBJECT\_TYPE\_PAYMENT:**  
A Payment  
**VAULT\_OBJECT\_TYPE\_UNSOLICITED\_MESSAGE:**  
An UnsolicitedMessage  
**VAULT\_OBJECT\_TYPE\_EISCD\_REPORT\_DESCRIPTOR:**  
An EISCDReportDescriptor  
**VAULT\_OBJECT\_TYPE\_MODULUS\_CHECK\_WEIGHT\_TABLE\_DESCRIPTOR:**  
A ModulusCheckWeightTableDescriptor  
**VAULT\_OBJECT\_TYPE\_UK\_BANK\_ACCOUNT\_NUMBER:**  
A UkBankAccountNumber  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_MIGRATION:**  
An AccountMigration  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_UPDATE\_BATCH:**  
An AccountUpdateBatch  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_SUBMISSION:**  
A PaymentSubmission  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH\_ASYNC:**  
A PostingInstructionBatch created asynchronously  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETER:**  
A GlobalParameter  
**VAULT\_OBJECT\_TYPE\_GLOBAL\_PARAMETERVALUE:**  
A GlobalParameterValue  
**VAULT\_OBJECT\_TYPE\_POLICY:**  
A Policy  
**VAULT\_OBJECT\_TYPE\_TRANSACTION:**  
A Transaction  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT:**  
A SupervisorContract  
**VAULT\_OBJECT\_TYPE\_SUPERVISOR\_CONTRACT\_VERSION:**  
A SupervisorContractVersion  
**VAULT\_OBJECT\_TYPE\_PLAN:**  
A Plan  
**VAULT\_OBJECT\_TYPE\_PLAN\_UPDATE:**  
A PlanUpdate  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PLAN\_ASSOC:**  
An AccountPlanAssoc  
**VAULT\_OBJECT\_TYPE\_DATA\_PERMISSION:**  
A DataPermission  
**VAULT\_OBJECT\_TYPE\_VAULT\_PERMISSION:**  
A VaultPermission  
**VAULT\_OBJECT\_TYPE\_ROLE:**  
A Role  
**VAULT\_OBJECT\_TYPE\_ROLE\_VAULT\_PERMISSION\_ASSOC:**  
A RoleVaultPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_ROLE\_DATA\_PERMISSION\_ASSOC:**  
A RoleDataPermissionAssoc  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD:**  
A TaskThread  
**VAULT\_OBJECT\_TYPE\_TASK\_THREAD\_HISTORY\_ENTRY:**  
A TaskThreadHistoryEntry  
**VAULT\_OBJECT\_TYPE\_TASK:**  
A Task  
**VAULT\_OBJECT\_TYPE\_CALENDAR:**  
A Calendar  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_EVENT:**  
A CalendarEvent  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_PERIOD\_DESCRIPTOR:**  
A CalendarPeriodDescriptor  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_TAG:**  
An AccountScheduleTag  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ORDER:**  
A PaymentOrder  
**VAULT\_OBJECT\_TYPE\_STANDING\_ORDER\_INSTRUCTION:**  
A StandingOrderInstruction  
**VAULT\_OBJECT\_TYPE\_FUTURE\_PAYMENT\_INSTRUCTION:**  
A FuturePaymentInstruction  
**VAULT\_OBJECT\_TYPE\_SCHEME\_MESSAGE:**  
A SchemeMessage  
**VAULT\_OBJECT\_TYPE\_SCHEME:**  
A Scheme  
**VAULT\_OBJECT\_TYPE\_SCHEME\_CONFIG:**  
A SchemeConfig  
**VAULT\_OBJECT\_TYPE\_BANK\_ACCOUNT:**  
A BankAccount  
**VAULT\_OBJECT\_TYPE\_FILE:**  
A File  
**VAULT\_OBJECT\_TYPE\_FILE\_VERSION:**  
A FileVersion  
**VAULT\_OBJECT\_TYPE\_BBAN:**  
A BBAN  
**VAULT\_OBJECT\_TYPE\_IBAN:**  
An IBAN  
**VAULT\_OBJECT\_TYPE\_CONTRACT:**  
A Contract  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_VERSION:**  
A ContractVersion  
**VAULT\_OBJECT\_TYPE\_GROUP:**  
A Group  
**VAULT\_OBJECT\_TYPE\_GROUP\_VERSION:**  
A GroupVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_CONVERSION\_RULE:**  
An AccountConversionRule  
**VAULT\_OBJECT\_TYPE\_GROUP\_CONTRACT\_VERSION\_ASSOCIATION:**  
A GroupContractVersionAssociation  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_ACCOUNT\_ASSOCIATION:**  
A ProductAccountAssociation  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE:**  
A ContractModule  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_MODULE\_VERSION:**  
A ContractModuleVersion  
**VAULT\_OBJECT\_TYPE\_RESOURCE:**  
A Resource  
**VAULT\_OBJECT\_TYPE\_RESOURCE\_BATCH:**  
A ResourceBatch  
**VAULT\_OBJECT\_TYPE\_DEPENDENCY\_GROUP:**  
A DependencyGroup  
**VAULT\_OBJECT\_TYPE\_BULK\_ACCOUNT\_UPDATE:**  
A BulkAccountUpdate  
**VAULT\_OBJECT\_TYPE\_CLAIM:**  
A Claim  
**VAULT\_OBJECT\_TYPE\_CLAIM\_ACTION:**  
A ClaimAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL:**  
A ClaimReversal  
**VAULT\_OBJECT\_TYPE\_CLAIM\_REVERSAL\_ACTION:**  
A ClaimReversalAction  
**VAULT\_OBJECT\_TYPE\_CLAIM\_DIRECT\_DEBIT\_ASSOCIATION:**  
A ClaimDirectDebitAssociation  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT:**  
A DirectDebit  
**VAULT\_OBJECT\_TYPE\_DIRECT\_DEBIT\_ACTION:**  
A DirectDebitAction  
**VAULT\_OBJECT\_TYPE\_MANDATE:**  
A Mandate  
**VAULT\_OBJECT\_TYPE\_MANDATE\_ACTION:**  
A MandateAction  
**VAULT\_OBJECT\_TYPE\_CALENDAR\_OPERATION\_CONFIG:**  
A CalendarOperationConfig  
**VAULT\_OBJECT\_TYPE\_SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK:**  
A SmartContractModuleVersionsLink  
**VAULT\_OBJECT\_TYPE\_VAULT\_VERSION:**  
A VaultVersion  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_NOTE:**  
An AccountNote  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_PARAM\_TIMESERIES:**  
An AccountParamTimeseries  
**VAULT\_OBJECT\_TYPE\_ACCOUNT\_SCHEDULE\_ASSOC:**  
An AccountScheduleAssoc  
**VAULT\_OBJECT\_TYPE\_ACTION\_LOG:**  
An ActionLog  
**VAULT\_OBJECT\_TYPE\_BALANCE:**  
A Balance  
**VAULT\_OBJECT\_TYPE\_CONTRACT\_TEMPLATE:**  
A ContractTemplate  
**VAULT\_OBJECT\_TYPE\_DOCUMENT:**  
A Document  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_UPLOAD\_URL:**  
A DocumentUploadUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_URL:**  
A DocumentUrl  
**VAULT\_OBJECT\_TYPE\_DOCUMENT\_VERSION:**  
A DocumentVersion  
**VAULT\_OBJECT\_TYPE\_JOB:**  
A Job  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_ACTION:**  
A PaymentAction  
**VAULT\_OBJECT\_TYPE\_PAYMENT\_REVERSAL:**  
A PaymentReversal  
**VAULT\_OBJECT\_TYPE\_PLAN\_MIGRATION:**  
A PlanMigration  
**VAULT\_OBJECT\_TYPE\_PLAN\_SCHEDULE:**  
A PlanSchedule  
**VAULT\_OBJECT\_TYPE\_POSTINGS\_API\_CLIENT:**  
A PostingsApiClient  
**VAULT\_OBJECT\_TYPE\_POSTING\_INSTRUCTION\_BATCH:**  
A PostingInstructionBatch  
**VAULT\_OBJECT\_TYPE\_PRODUCT\_VERSION\_PARAMETERS\_TIMESERIES:**  
A ProductVersionParametersTimeseries  
**VAULT\_OBJECT\_TYPE\_RESTRICTION:**  
A Restriction  
**VAULT\_OBJECT\_TYPE\_SCHEDULE:**  
A Schedule  
**VAULT\_OBJECT\_TYPE\_SCHEDULE\_TAG:**  
A ScheduleTag  
**VAULT\_OBJECT\_TYPE\_TICKET\_TAG:**  
A TicketTag  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_EVENT:**  
A WorkflowInstanceEvent  
**VAULT\_OBJECT\_TYPE\_WORKFLOW\_INSTANCE\_STATE:**  
A WorkflowInstanceState  
**VAULT\_OBJECT\_TYPE\_LEDGER\_BALANCE:**  
A LedgerBalance  
**VAULT\_OBJECT\_TYPE\_TICKET\_UPDATE:**  
A TicketUpdate  
**VAULT\_OBJECT\_TYPE\_POST\_POSTING\_FAILURE:**  
A PostPostingFailure  
**VAULT\_OBJECT\_TYPE\_PARAMETER:**  
A Parameter  
**VAULT\_OBJECT\_TYPE\_PARAMETERVALUE:**  
A Parameter Value  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION:**  
An Edge Function  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_VERSION:**  
An Edge Function Version  
**VAULT\_OBJECT\_TYPE\_EDGE\_FUNCTION\_EXECUTION:**  
An Edge Function Execution  
**VAULT\_OBJECT\_TYPE\_PARAMETER\_VALUE\_HIERARCHY\_NODE:**  
A Parameter Value Hierarchy Node  
**VAULT\_OBJECT\_TYPE\_EFFECTIVE\_PARAMETER\_VALUE:**  
An Effective Parameter Value  
**VAULT\_OBJECT\_TYPE\_ADJUSTMENT**

 |
| 

audit\_logs\[KEY\].  
**vault\_object\_ids\[\]**  
  
array \[string\]

 | 

The IDs of the Vault Objects (if known) associated with this Audit Log. Empty if there is no association, or if one could not be determined.

 |
| 

audit\_logs\[KEY\].  
**group\_id**  
  
string

 | 

An ID for correlating / grouping Audit and Action Logs generated by the same request to an API. This ID will be propagated on sub-requests triggered by that request.

 |

400 Invalid Argument 401 Unauthenticated 403 Permission Denied 404 Not Found 429 Resource Exhausted 500 Internal 500 Unknown 500 Internal 503 Unavailable 504 Deadline Exceeded

Returned on receipt of invalid input regardless of the state of the system.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the request could not be authenticated.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the client does not have permission to perform the request.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned on request of resources that do not exist.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when too many requests are sent within a time period or the response was too large.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.This is almost certainly due to a fault in the platform.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when an unknown problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a problem has occurred on the server.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when the service is currently unavailable. It can be safely retried.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

Returned when a response was not received within the allowed time. It can be safely retried.It may be returned even if the operation has completed successfully.

Response fields  
| Name | Description |
| --- | --- |
| 
**message**  
  
string

 | 

An error message provided by the endpoint.

 |
| 

**code**  
  
string

 | 

The Vault code of the error.

 |
| 

**tracing\_id**  
  
string

 | 

Tracing ID used to identify a response’s origin.

 |
| 

**vault\_error\_code**  
  
string

 | 

This field is deprecated. Use the `code` and `details` fields instead.

 |

## [](#audit_streaming_api "Copy link to heading")Audit Streaming API

### [](#overview "Copy link to heading")Overview

The Audit Streaming API broadcasts events relating to the creation of all Audit and Action Logs.

#### [](#message_formats_and_delivery "Copy link to heading")Message formats and delivery

-   The supported message formats are JSON or Google Protobuf. The required format is set when your Vault Core instance is configured.
    
-   We attempt to deliver every Audit Streaming API event but cannot guarantee this.
    

#### [](#downloading_the_proto_files "Copy link to heading")Downloading the proto files

info

If you are using the Protobuf message format, download the schemas you need to integrate with our Audit Streaming API.

Download download

chat\_bubble

We guarantee API backwards compatibility at the proto level but not for code generated from those protos. Due to the varying output of available proto compilers, any code that is autogenerated from our proto files is not guaranteed to be backwards compatible with code that was autogenerated from proto files delivered with a previous version of Vault Core (including minor versions).

### [](#audit_log_events "Copy link to heading")Audit Log Events

#### [](#auditlogcreatedevent "Copy link to heading")AuditLogCreatedEvent

`AuditLogCreatedEvent`s are generated when an Audit Log is captured.

*Topic*: `vault.api.v1.audit_logs.audit_log.created`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`audit_log`

 | 

`audit_api.v1.audit_logs.AuditLog`

 | 

Audit API Audit Log resource.

 |
| 

`technical_metadata`

 | 

TechnicalMetadata

 | 

Technical event metadata.

 |
| 

`update_mask`

 | 

FieldMask

 | 

Fields to be populated within message.

 |

### [](#action_log_events "Copy link to heading")Action Log Events

#### [](#actionlogcreatedevent "Copy link to heading")ActionLogCreatedEvent

`ActionLogCreatedEvent`s are generated when an Action Log is derived from an Audit Log.

*Topic*: `vault.api.v1.action_logs.action_log.created`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`action_log`

 | 

`audit_api.v1.action_logs.Action`

 | 

Audit API Action Log resource.

 |
| 

`technical_metadata`

 | 

TechnicalMetadata

 | 

Technical event metadata.

 |
| 

`update_mask`

 | 

FieldMask

 | 

Fields to be populated within message.

 |

### [](#common "Copy link to heading")Common

#### [](#technicalmetadata "Copy link to heading")TechnicalMetadata

A common wrapper around technical metadata fields that MUST be populated.

The use case for metadata is to track the provenance of data flowing out of Vault Core to its sources.

  
| Name | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

string

 | 

A per-event unique ID for idempotence.

 |
| 

`capture_timestamp`

 | 

RFC 3339 timestamp string

 | 

This is a common wrapper around technical metadata fields. (For more information, see [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).)

 |
| 

`vault_version`

 | 

SemVer

 | 

Version of Vault Core which produced this message.

 |
| 

`context`

 | 

map<string, string>

 | 

Additional context specific `key-value map`.

 |

#### [](#semver "Copy link to heading")SemVer

Minimal representation of a Semantic Versioning Specification (SemVer) version. For more information, see [http://semver.org](http://semver.org).

 
| Field | Type |
| --- | --- |
| 
major

 | 

int32

 |
| 

minor

 | 

int32

 |
| 

patch

 | 

int32

 |
| 

label

 | 

string

 |

#### [](#fieldmask "Copy link to heading")FieldMask

`FieldMask` represents a set of symbolic field paths in string array. For example:

 
| Field | Description |
| --- | --- |
| 
`f`

 | 

Represents a field in a root message.

 |
| 

`a` and `b`

 | 

Represent fields in the message found in `f`.

 |
| 

`d`

 | 

Represents a field found in the message in `f.b`.

 |

Field masks are used to specify a subset of fields that should be, or have been, modified by an update operation. Field masks have the following JSON encoding:

  
| Field | Type | Description |
| --- | --- | --- |
| 
paths

 | 

string array

 | 

The set of field mask paths.

 |