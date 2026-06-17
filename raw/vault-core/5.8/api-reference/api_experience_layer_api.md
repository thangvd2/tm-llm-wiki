---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/api/experience_layer_api"
title: "Experience Layer API"
scraped_at: "2026-06-16T16:38:01.441Z"
images: 0
---

# Experience Layer API

chat\_bubble

The Experience Layer API is deprecated as of Vault Core release 4.7, and will be removed no earlier than release 6.0.

The Vault Experience Layer API is RESTful. It uses predictable and resource-oriented URLs with standard HTTP methods and status codes. Responses are in JSON format.

For an overview of the general features of the API, see [API intro](/vault-core/5-8/EN/api/overview/).

## [](#downloading_the_openapi_definition_file "Copy link to heading")Downloading the OpenAPI definition file

The OpenAPI definition is an Interface Description Language for describing RESTful APIs expressed in JSON format.

info

The Vault Experience Layer API is available in this format and can be downloaded here:

Download download

The specification includes Thought Machine-specific extensions that are not standard to OpenAPI. The generation method of the specification and resulting naming, paths and schemas are subject to change. For more information about the OpenAPI specification see the [OpenAPI specification](https://spec.openapis.org/oas/v3.0.3).

## [](#payees "Copy link to heading")Payees

chat\_bubble

The Payee Service is deprecated as of Vault Core release 4.6, and will be removed no earlier than release 6.0.

The Payee Service offers endpoints for adding, listing and deleting payees.

All fields for a payee are immutable, except for `payee_label` and `default_payment_reference` which can be updated. Each payee is linked to a customer account in Vault.

Payee deletions are *soft deletions*. They only mark the payee as deleted. You can retrieve deleted payees by setting the `include_deleted` field on a `GET /v1/payees` request.

Payees are always returned when requested by ID using the `BatchGet API`, whether they have been deleted or not.

### [](#payee "Copy link to heading")Payee

#### [](#available_methods "Copy link to heading")Available methods

-   [List](#_xpl_api_v1_payees_ListPayeesResponse_ListPayees) Returns a paginated list of payees based on the provided filter criteria. **(Deprecated)**
    
-   [Create](#_xpl_api_v1_payees_Payee_CreatePayee) Creates a new payee for the specified customer. **(Deprecated)**
    
-   [Delete](#_google_protobuf_Empty_DeletePayee) Deletes a payee by setting the value of the `deleted` field on the specified payee to `true`. **(Deprecated)**
    
-   [Update](#_xpl_api_v1_payees_Payee_UpdatePayee) Updates any or all of the mutable payee fields. **(Deprecated)**
    
-   [BatchGet](#_xpl_api_v1_payees_BatchGetPayeesResponse_BatchGetPayees) Returns the specified payees. **(Deprecated)**
    

#### [](#_xpl_api_v1_payees_ListPayeesResponse_ListPayees "Copy link to heading")List

**Deprecated** as of release **4.6**, and will be removed no earlier than release **6.0** *Experience Layer Payees is deprecated.*

Returns a paginated list of payees based on the provided filter criteria.

Returns a paginated list of payees based on the provided filter criteria. All requests to this endpoint must include the `created_by_customer_id` field (or the deprecated alternative `customer_id`), the `account_ids` field, or both.

**Permission Scopes:** xpl:read, xpl.payees:read

**Endpoint:** GET /v1/payees

##### [](#request "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**customer\_id**  
  
string

 | 

Each payee includes a `created_by_customer_id` field. This filter parameter specifies which customer to return payees for.  
  
**Deprecated** as of release **2.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by created\_by\_customer\_id*

 |
| 

**page\_size**  
  
integer

 | 

The number of payees to be returned.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

A page token that specifies which page of payees to return. This value must correspond to a `next_page_token` or `previous_page_token` returned by the API from a previous request.

 |
| 

**account\_ids**  
  
array \[string\]

 | 

Each payee is linked to one account. This filter parameter specifies which account(s) to return payees for.

 |
| 

**include\_deleted**  
  
boolean

 | 

This can be set to true to include deleted payees in addition to active payees. Defaults to false.

 |
| 

**created\_by\_customer\_id**  
  
string

 | 

Each payee includes a `created_by_customer_id` field. This filter parameter specifies which customer to return payees for.

 |

##### [](#response "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**payees\[\]**  
  
array \[object\]

 | 

The result set for the request.

 |
| 

payees\[\].  
**id**  
  
string

 | 

The unique ID of the payee.

 |
| 

payees\[\].  
**created\_by\_customer\_id**  
  
string

 | 

The ID of the customer who created or is creating this payee.

 |
| 

payees\[\].  
**account\_id**  
  
string

 | 

The ID of the account associated with this payee. Note that the account may have multiple stakeholders, in which case the `created_by_customer_id` field will tell you which of the stakeholders created the payee. This field is required on CreatePayee.

 |
| 

payees\[\].  
**payee\_label**  
  
string

 | 

The display label for this payee. This field is required on CreatePayee.

 |
| 

payees\[\].  
**deleted**  
  
boolean

 | 

Set to `true` if the payee has been marked as deleted, otherwise `false`. Deleted payees will only appear in a `ListPayeesResponse` if the `include_deleted` parameter was set to true on the `ListPayeesRequest`. Deleted payees are always included in a `BatchGetPayeesResponse`.

 |
| 

payees\[\].  
**create\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was created.

 |
| 

payees\[\].  
**default\_payment\_reference**  
  
string

 | 

The reference for this payment. Allowed characters are: \* alphanumeric (A-Z, a-z, 0-9) \* / - ? : ( ) . , ' + # = ! " % & \* < > ; { @ \* space If a default payment reference is not provided then a payment reference is always required when submitting a payment to this payee.  
  
Max length: 18 characters.

 |
| 

payees\[\].  
**last\_update\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was last updated. If the payee has never been updated, this field will contain the same value as `create_timestamp`.

 |
| 

payees\[\].  
**migration\_info**  
  
object

 | 

Stores migration-specific information.

 |
| 

payees\[\].  
migration\_info.  
**is\_migrated**  
  
boolean

 | 

This field indicates whether the payee has been migrated from another platform into Vault.

 |
| 

payees\[\].  
migration\_info.  
**tranche\_id**  
  
string

 | 

The ID of the tranche that the payee was migrated within.

 |
| 

payees\[\].  
migration\_info.  
**migration\_timestamp**  
  
dateTime

 | 

The time at which the payee was migrated.

 |
| 

payees\[\].  
migration\_info.  
**source\_resource\_id**  
  
string

 | 

The ID from the source platform of the migrated payee.

 |
| 

payees\[\].  
**uk\_bank\_identifier**  
  
object

 | 

A UK sort code and account number.

 |
| 

payees\[\].  
uk\_bank\_identifier.  
**beneficiary\_name**  
  
string

 | 

The full name of the beneficiary account holder.  
  
Required.  
Max length: 64 characters.

 |
| 

payees\[\].  
uk\_bank\_identifier.  
**account\_number**  
  
string

 | 

The account number of the beneficiary account.  
This field must contain a UK bank account number of between 6 and 10 digits, e.g. 12345678.  
Required.

 |
| 

payees\[\].  
uk\_bank\_identifier.  
**sort\_code**  
  
string

 | 

The sort code of the bank that holds the beneficiary account.  
This field must contain a UK sort code in a strictly numeric string of 6 digits, e.g. 123456.  
Required.

 |
| 

**next\_page\_token**  
  
string

 | 

If the result set contains more results than the requested `page_size`, this token identifies the next page of results. This value can be provided in the `page_token` parameter of a subsequent request to return the next page of results.

 |
| 

**previous\_page\_token**  
  
string

 | 

If a `page_token` was provided on the request and the requested page is not the first page, this token identifies the preceding page. This value can be provided in the `page_token` parameter of a subsequent request to return the previous page of results.

 |

#### [](#_xpl_api_v1_payees_Payee_CreatePayee "Copy link to heading")Create

**Deprecated** as of release **4.6**, and will be removed no earlier than release **6.0** *Experience Layer Payees is deprecated.*

Creates a new payee for the specified customer.

**Permission Scopes:** xpl:write, xpl.payees:write

**Endpoint:** POST /v1/payees

##### [](#request_2 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique string ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**payee**  
  
object

 | 

The payee to be created. Required.

 |
| 

payee.  
**created\_by\_customer\_id**  
  
string

 | 

The ID of the customer who created or is creating this payee.

 |
| 

payee.  
**account\_id**  
  
string

 | 

The ID of the account associated with this payee. Note that the account may have multiple stakeholders, in which case the `created_by_customer_id` field will tell you which of the stakeholders created the payee. This field is required on CreatePayee.

 |
| 

payee.  
**payee\_label**  
  
string

 | 

The display label for this payee. This field is required on CreatePayee.

 |
| 

payee.  
**default\_payment\_reference**  
  
string

 | 

The reference for this payment. Allowed characters are: \* alphanumeric (A-Z, a-z, 0-9) \* / - ? : ( ) . , ' + # = ! " % & \* < > ; { @ \* space If a default payment reference is not provided then a payment reference is always required when submitting a payment to this payee.  
  
Max length: 18 characters.

 |
| 

payee.  
**uk\_bank\_identifier**  
  
object

 | 

A UK sort code and account number.

 |
| 

payee.  
uk\_bank\_identifier.  
**beneficiary\_name**  
  
string

 | 

The full name of the beneficiary account holder.  
  
Required.  
Max length: 64 characters.

 |
| 

payee.  
uk\_bank\_identifier.  
**account\_number**  
  
string

 | 

The account number of the beneficiary account.  
This field must contain a UK bank account number of between 6 and 10 digits, e.g. 12345678.  
Required.

 |
| 

payee.  
uk\_bank\_identifier.  
**sort\_code**  
  
string

 | 

The sort code of the bank that holds the beneficiary account.  
This field must contain a UK sort code in a strictly numeric string of 6 digits, e.g. 123456.  
Required.

 |

##### [](#response_2 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The unique ID of the payee.

 |
| 

**created\_by\_customer\_id**  
  
string

 | 

The ID of the customer who created or is creating this payee.

 |
| 

**account\_id**  
  
string

 | 

The ID of the account associated with this payee. Note that the account may have multiple stakeholders, in which case the `created_by_customer_id` field will tell you which of the stakeholders created the payee. This field is required on CreatePayee.

 |
| 

**payee\_label**  
  
string

 | 

The display label for this payee. This field is required on CreatePayee.

 |
| 

**deleted**  
  
boolean

 | 

Set to `true` if the payee has been marked as deleted, otherwise `false`. Deleted payees will only appear in a `ListPayeesResponse` if the `include_deleted` parameter was set to true on the `ListPayeesRequest`. Deleted payees are always included in a `BatchGetPayeesResponse`.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was created.

 |
| 

**default\_payment\_reference**  
  
string

 | 

The reference for this payment. Allowed characters are: \* alphanumeric (A-Z, a-z, 0-9) \* / - ? : ( ) . , ' + # = ! " % & \* < > ; { @ \* space If a default payment reference is not provided then a payment reference is always required when submitting a payment to this payee.  
  
Max length: 18 characters.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was last updated. If the payee has never been updated, this field will contain the same value as `create_timestamp`.

 |
| 

**migration\_info**  
  
object

 | 

Stores migration-specific information.

 |
| 

migration\_info.  
**is\_migrated**  
  
boolean

 | 

This field indicates whether the payee has been migrated from another platform into Vault.

 |
| 

migration\_info.  
**tranche\_id**  
  
string

 | 

The ID of the tranche that the payee was migrated within.

 |
| 

migration\_info.  
**migration\_timestamp**  
  
dateTime

 | 

The time at which the payee was migrated.

 |
| 

migration\_info.  
**source\_resource\_id**  
  
string

 | 

The ID from the source platform of the migrated payee.

 |
| 

**uk\_bank\_identifier**  
  
object

 | 

A UK sort code and account number.

 |
| 

uk\_bank\_identifier.  
**beneficiary\_name**  
  
string

 | 

The full name of the beneficiary account holder.  
  
Required.  
Max length: 64 characters.

 |
| 

uk\_bank\_identifier.  
**account\_number**  
  
string

 | 

The account number of the beneficiary account.  
This field must contain a UK bank account number of between 6 and 10 digits, e.g. 12345678.  
Required.

 |
| 

uk\_bank\_identifier.  
**sort\_code**  
  
string

 | 

The sort code of the bank that holds the beneficiary account.  
This field must contain a UK sort code in a strictly numeric string of 6 digits, e.g. 123456.  
Required.

 |

#### [](#_google_protobuf_Empty_DeletePayee "Copy link to heading")Delete

**Deprecated** as of release **4.6**, and will be removed no earlier than release **6.0** *Experience Layer Payees is deprecated.*

Deletes a payee by setting the value of the `deleted` field on the specified payee to `true`. This method returns a success response even if the payee is already deleted. This is for idempotence; it is safe to re-send the same request multiple times because you will always receive a success response, rather than a success response on the first call and failure responses on subsequent calls. Calling this method is functionally equivalent to calling `UpdatePayee` and setting the `deleted` field to true.

**Permission Scopes:** xpl:write, xpl.payees:write

**Endpoint:** DELETE /v1/payees/{id}

##### [](#request_3 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

The ID of the payee to delete.

 |

##### [](#response_3 "Copy link to heading")Response

#### [](#_xpl_api_v1_payees_Payee_UpdatePayee "Copy link to heading")Update

**Deprecated** as of release **4.6**, and will be removed no earlier than release **6.0** *Experience Layer Payees is deprecated.*

Updates any or all of the mutable payee fields.

**Permission Scopes:** xpl:write, xpl.payees:write

**Endpoint:** PUT /v1/payees/{payee.id}

##### [](#request_4 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
payee.  
**id**  
  
string

 | 

The unique ID of the payee.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

A unique string ID used to ensure this request is idempotent.  
  
Required.

 |
| 

**payee**  
  
object

 | 

The payee resource that is to be mutated. Can be partial. Must include the payee ID. Any field referenced in the update mask must be present. Required.

 |
| 

payee.  
**payee\_label**  
  
string

 | 

The display label for this payee. This field is required on CreatePayee.

 |
| 

payee.  
**default\_payment\_reference**  
  
string

 | 

The reference for this payment. Allowed characters are: \* alphanumeric (A-Z, a-z, 0-9) \* / - ? : ( ) . , ' + # = ! " % & \* < > ; { @ \* space If a default payment reference is not provided then a payment reference is always required when submitting a payment to this payee.  
  
Max length: 18 characters.

 |
| 

**update\_mask**  
  
object

 | 

Field mask for this update. Fields not included in this mask will be ignored. The accepted values are:  
  
\- **payee\_label**  
\- **default\_payment\_reference**  
\- **deleted**  
  
Using this method to set the `deleted` field to true is functionally equivalent to calling `DeletePayee`.  
  
Required.

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

The unique ID of the payee.

 |
| 

**created\_by\_customer\_id**  
  
string

 | 

The ID of the customer who created or is creating this payee.

 |
| 

**account\_id**  
  
string

 | 

The ID of the account associated with this payee. Note that the account may have multiple stakeholders, in which case the `created_by_customer_id` field will tell you which of the stakeholders created the payee. This field is required on CreatePayee.

 |
| 

**payee\_label**  
  
string

 | 

The display label for this payee. This field is required on CreatePayee.

 |
| 

**deleted**  
  
boolean

 | 

Set to `true` if the payee has been marked as deleted, otherwise `false`. Deleted payees will only appear in a `ListPayeesResponse` if the `include_deleted` parameter was set to true on the `ListPayeesRequest`. Deleted payees are always included in a `BatchGetPayeesResponse`.

 |
| 

**create\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was created.

 |
| 

**default\_payment\_reference**  
  
string

 | 

The reference for this payment. Allowed characters are: \* alphanumeric (A-Z, a-z, 0-9) \* / - ? : ( ) . , ' + # = ! " % & \* < > ; { @ \* space If a default payment reference is not provided then a payment reference is always required when submitting a payment to this payee.  
  
Max length: 18 characters.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was last updated. If the payee has never been updated, this field will contain the same value as `create_timestamp`.

 |
| 

**migration\_info**  
  
object

 | 

Stores migration-specific information.

 |
| 

migration\_info.  
**is\_migrated**  
  
boolean

 | 

This field indicates whether the payee has been migrated from another platform into Vault.

 |
| 

migration\_info.  
**tranche\_id**  
  
string

 | 

The ID of the tranche that the payee was migrated within.

 |
| 

migration\_info.  
**migration\_timestamp**  
  
dateTime

 | 

The time at which the payee was migrated.

 |
| 

migration\_info.  
**source\_resource\_id**  
  
string

 | 

The ID from the source platform of the migrated payee.

 |
| 

**uk\_bank\_identifier**  
  
object

 | 

A UK sort code and account number.

 |
| 

uk\_bank\_identifier.  
**beneficiary\_name**  
  
string

 | 

The full name of the beneficiary account holder.  
  
Required.  
Max length: 64 characters.

 |
| 

uk\_bank\_identifier.  
**account\_number**  
  
string

 | 

The account number of the beneficiary account.  
This field must contain a UK bank account number of between 6 and 10 digits, e.g. 12345678.  
Required.

 |
| 

uk\_bank\_identifier.  
**sort\_code**  
  
string

 | 

The sort code of the bank that holds the beneficiary account.  
This field must contain a UK sort code in a strictly numeric string of 6 digits, e.g. 123456.  
Required.

 |

#### [](#_xpl_api_v1_payees_BatchGetPayeesResponse_BatchGetPayees "Copy link to heading")BatchGet

**Deprecated** as of release **4.6**, and will be removed no earlier than release **6.0** *Experience Layer Payees is deprecated.*

Returns the specified payees. Every ID in the request must refer to a payee that exists, or an error will be returned.

**Permission Scopes:** xpl:read, xpl.payees:read

**Endpoint:** GET /v1/payees:batchGet

##### [](#request_5 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the payees to return. Min: 1. Max: 100.

 |

##### [](#response_5 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**payees**  
  
map \[string: object\]

 | 

A map of ID to payee. There will be one entry in this map for every requested payee ID.

 |
| 

payees\[KEY\].  
**id**  
  
string

 | 

The unique ID of the payee.

 |
| 

payees\[KEY\].  
**created\_by\_customer\_id**  
  
string

 | 

The ID of the customer who created or is creating this payee.

 |
| 

payees\[KEY\].  
**account\_id**  
  
string

 | 

The ID of the account associated with this payee. Note that the account may have multiple stakeholders, in which case the `created_by_customer_id` field will tell you which of the stakeholders created the payee. This field is required on CreatePayee.

 |
| 

payees\[KEY\].  
**payee\_label**  
  
string

 | 

The display label for this payee. This field is required on CreatePayee.

 |
| 

payees\[KEY\].  
**deleted**  
  
boolean

 | 

Set to `true` if the payee has been marked as deleted, otherwise `false`. Deleted payees will only appear in a `ListPayeesResponse` if the `include_deleted` parameter was set to true on the `ListPayeesRequest`. Deleted payees are always included in a `BatchGetPayeesResponse`.

 |
| 

payees\[KEY\].  
**create\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was created.

 |
| 

payees\[KEY\].  
**default\_payment\_reference**  
  
string

 | 

The reference for this payment. Allowed characters are: \* alphanumeric (A-Z, a-z, 0-9) \* / - ? : ( ) . , ' + # = ! " % & \* < > ; { @ \* space If a default payment reference is not provided then a payment reference is always required when submitting a payment to this payee.  
  
Max length: 18 characters.

 |
| 

payees\[KEY\].  
**last\_update\_timestamp**  
  
dateTime

 | 

A UTC timestamp recording when the payee was last updated. If the payee has never been updated, this field will contain the same value as `create_timestamp`.

 |
| 

payees\[KEY\].  
**migration\_info**  
  
object

 | 

Stores migration-specific information.

 |
| 

payees\[KEY\].  
migration\_info.  
**is\_migrated**  
  
boolean

 | 

This field indicates whether the payee has been migrated from another platform into Vault.

 |
| 

payees\[KEY\].  
migration\_info.  
**tranche\_id**  
  
string

 | 

The ID of the tranche that the payee was migrated within.

 |
| 

payees\[KEY\].  
migration\_info.  
**migration\_timestamp**  
  
dateTime

 | 

The time at which the payee was migrated.

 |
| 

payees\[KEY\].  
migration\_info.  
**source\_resource\_id**  
  
string

 | 

The ID from the source platform of the migrated payee.

 |
| 

payees\[KEY\].  
**uk\_bank\_identifier**  
  
object

 | 

A UK sort code and account number.

 |
| 

payees\[KEY\].  
uk\_bank\_identifier.  
**beneficiary\_name**  
  
string

 | 

The full name of the beneficiary account holder.  
  
Required.  
Max length: 64 characters.

 |
| 

payees\[KEY\].  
uk\_bank\_identifier.  
**account\_number**  
  
string

 | 

The account number of the beneficiary account.  
This field must contain a UK bank account number of between 6 and 10 digits, e.g. 12345678.  
Required.

 |
| 

payees\[KEY\].  
uk\_bank\_identifier.  
**sort\_code**  
  
string

 | 

The sort code of the bank that holds the beneficiary account.  
This field must contain a UK sort code in a strictly numeric string of 6 digits, e.g. 123456.  
Required.

 |

## [](#transactions "Copy link to heading")Transactions

chat\_bubble

The Transaction Service is deprecated as of Vault Core release 4.7, and will be removed no earlier than release 6.0.

The Transaction service provides an API for the transaction resource.

The creation of transactions is the responsibility of payment integrations. A payment integration applies the financial effects of a payment through the Vault Core Posting API.

Payment integrations use the endpoints in this service to create and update related transactions as they move through the payment lifecycle.

The list endpoint is used to retrieve a paged list of transactions for a given set of accounts. These may be displayed in a customer or colleague channel.

Transactions can also be linked to:

-   [Posting instruction batches](/vault-core/5-8/EN/api/core_api#Posting_instruction_batches) in the Core API
    
-   A [payee](/vault-core/5-8/EN/api/experience_layer_api#Payees) in the Experience Layer API
    

### [](#transaction "Copy link to heading")Transaction

#### [](#available_methods_2 "Copy link to heading")Available methods

-   [List](#_xpl_api_v1_transactions_ListTransactionsResponse_ListTransactions) Returns a paged list of transaction resources. **(Deprecated)**
    
-   [Create](#_xpl_api_v1_transactions_Transaction_CreateTransaction) Creates a new transaction. **(Deprecated)**
    
-   [Update](#_xpl_api_v1_transactions_Transaction_UpdateTransaction) Updates an existing transaction. **(Deprecated)**
    
-   [BatchGet](#_xpl_api_v1_transactions_BatchGetTransactionsResponse_BatchGetTransactions) Given a list of transaction IDs, returns a map of transaction ID to transaction resource. **(Deprecated)**
    

#### [](#_xpl_api_v1_transactions_ListTransactionsResponse_ListTransactions "Copy link to heading")List

**Deprecated** as of release **4.7**, and will be removed no earlier than release **6.0** *Experience Layer Transactions is deprecated.*

Returns a paged list of transaction resources. You must provide at least one of the available filter criteria to filter transactions. Filters are additive, for example if you provide both `account_ids` and `payment_ids` then transactions will be returned that match both criteria. Transactions will be ordered by `last_update_timestamp`, descending.

**Permission Scopes:** xpl:read, xpl.transactions:read

**Endpoint:** GET /v1/transactions

##### [](#request_6 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**account\_ids**  
  
array \[string\]

 | 

The Vault account IDs that are used to filter the transaction list. Max: 100.

 |
| 

**payment\_order\_ids**  
  
array \[string\]

 | 

The payment IDs that are used to filter the transaction list. Max: 100.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_ids*

 |
| 

**payment\_ids**  
  
array \[string\]

 | 

The payment IDs that are used to filter the transaction list. Max: 100.

 |
| 

**standing\_order\_ids**  
  
array \[string\]

 | 

The standing order IDs that are used to filter the transaction list. Max: 50.

 |
| 

**direct\_debit\_ids**  
  
array \[string\]

 | 

The Direct Debit IDs that are used to filter the transaction list. Max: 50.

 |
| 

**page\_size**  
  
integer

 | 

The number of transactions that are to be included in the response.  
  
Required.  
Min value: 1.  
Max value: 100.

 |
| 

**page\_token**  
  
string

 | 

A page token that specifies which page of payees to return. This value must correspond to a `next_page_token` or `previous_page_token` returned by the API from a previous request.

 |

##### [](#response_6 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**transactions\[\]**  
  
array \[object\]

 | 

The result set for the request.

 |
| 

transactions\[\].  
**id**  
  
string

 | 

Unique identifier for this transaction. If not provided on transaction creation, a UUID will be generated. Optional on create, required on update.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transactions\[\].  
**account\_id**  
  
string

 | 

The Vault account ID this transaction applies to. Required on create, ignored on update.

 |
| 

transactions\[\].  
**amount**  
  
object

 | 

The amount of the transaction. Required on create, optional on update.

 |
| 

transactions\[\].  
amount.  
**asset**  
  
enum

 | 

The asset type of the denomination. Mandatory.  
  
**Enum values**  
**UNKNOWN**  
**CASH**

 |
| 

transactions\[\].  
amount.  
**value**  
  
string

 | 

The value of the amount, unsigned number with optional floating point and arbitrary precision. Valid examples: <100>, <0.1>, <5.99>, <0.23422>. Mandatory.

 |
| 

transactions\[\].  
amount.  
**denomination**  
  
string

 | 

The denomination of the amount, e.g. GBP, EUR. Mandatory.

 |
| 

transactions\[\].  
**is\_credit**  
  
boolean

 | 

Whether the transaction is a credit or debit from the point of view of the account referenced by `account_id`. Defaults to false on create, ignored on update.

 |
| 

transactions\[\].  
**reference**  
  
string

 | 

The reference for this transaction. Optional.  
  
Max length: 255 characters.

 |
| 

transactions\[\].  
**status**  
  
enum

 | 

The transaction status. Required on create, optional on update.  
  
**Enum values**  
**TRANSACTION\_STATUS\_UNKNOWN:**  
Unknown transaction status.  
**TRANSACTION\_STATUS\_PENDING:**  
Pending transaction.  
**TRANSACTION\_STATUS\_BOOKED:**  
Final success status.  
**TRANSACTION\_STATUS\_REJECTED:**  
Error status for a transaction.

 |
| 

transactions\[\].  
**value\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when the assets become available to the account owner for a credit or cease to be available to the account owner for a debit. If this field is populated and the transaction is in a pending state, it refers to an expected/requested value date. Optional.

 |
| 

transactions\[\].  
**booking\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when a transaction becomes final. If this field is populated and the transaction is in a pending state, it refers to an expected booking date. Optional.

 |
| 

transactions\[\].  
**payee\_id**  
  
string

 | 

If applicable, ID of a payee associated with this transaction in the Experience Layer. Optional.

 |
| 

transactions\[\].  
**payment\_order\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
  
*Note: this field is deprecated in favour of `payment_id` and will be removed in version 4.0. If both `payment_id` and `payment_order_id` are provided on a `CreateTransaction` or `UpdateTransaction` call, the value of `payment_id` takes precedence.*  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_id*

 |
| 

transactions\[\].  
**payment\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transactions\[\].  
**posting\_instruction\_batch\_ids\[\]**  
  
array \[string\]

 | 

Ordered list of posting instruction batch IDs. Ordered by posting batch value\_timestamp, ascending. Can be supplied in any order, will be returned ordered. Once a batch ID has been linked to a transaction, it cannot be unlinked. Updates may only add new IDs to this collection. Can be empty (e.g. cancelled transaction, pre-auth creation). Optional.

 |
| 

transactions\[\].  
**last\_update\_timestamp**  
  
dateTime

 | 

UTC timestamp recording when the transaction was last updated. If the transaction has never been updated, this field will represent the time the transaction resource was created.

 |
| 

transactions\[\].  
**rejection\_code**  
  
enum

 | 

If a transaction has status rejected, this code represents the reason for being rejected.  
  
**Enum values**  
**REJECTION\_CODE\_UNKNOWN:**  
Unknown rejection reason. This should also be used if the transaction was rejected for a reason not included in this enum.  
**REJECTION\_CODE\_INSUFFICIENT\_FUNDS:**  
The contract rejected this transaction because the debitor account had insufficient funds.  
**REJECTION\_CODE\_CREDITOR:**  
The transaction was rejected on the creditor side.  
**REJECTION\_CODE\_DEBITOR:**  
The transaction was rejected on the debitor side.  
**REJECTION\_CODE\_INVALID\_DENOMINATION:**  
The posting instruction target account does not support the posted denomination.  
**REJECTION\_CODE\_INVALID\_AMOUNT:**  
The payment has an invalid amount for the given currency/payment scheme.  
**REJECTION\_CODE\_EXTERNAL:**  
The transaction was rejected because of an issue external to Vault.

 |
| 

transactions\[\].  
**transaction\_code**  
  
object

 | 

The ISO20022 Bank Transaction Code object. This contains the set of elements fully identifying the type of underlying transaction that results in an entry.

 |
| 

transactions\[\].  
transaction\_code.  
**domain**  
  
string

 | 

Specifies the business area of the underlying transaction.

 |
| 

transactions\[\].  
transaction\_code.  
**family**  
  
string

 | 

Specifies the family within a domain.

 |
| 

transactions\[\].  
transaction\_code.  
**subfamily**  
  
string

 | 

Specifies the subproduct family within a specific family.

 |
| 

transactions\[\].  
**transaction\_source**  
  
enum

 | 

The source of the transaction.  
  
**Enum values**  
**TRANSACTION\_SOURCE\_UNKNOWN:**  
The source of the transaction has not been set.  
**TRANSACTION\_SOURCE\_STANDING\_ORDER:**  
The source of the transaction is a standing order execution.  
**TRANSACTION\_SOURCE\_CONTRACT:**  
The source of the transaction is a Smart Contract-initiated posting instruction.  
**TRANSACTION\_SOURCE\_DIRECT\_DEBIT:**  
The source of the transaction is a Direct Debit.

 |
| 

transactions\[\].  
**metadata**  
  
object

 | 

Represents Transaction specific metadata in the form of a JSON object. No validations are performed on this field. Optional.

 |
| 

transactions\[\].  
**standing\_order**  
  
object

 | 

Provides details about the standing order execution that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_STANDING_ORDER`.  
  
*Provides more details about the source of the transaction.  
  
transactions\[\] items can contain one of **standing\_order** or direct\_debit*

 |
| 

transactions\[\].  
standing\_order.  
**standing\_order\_id**  
  
string

 | 

The ID of the standing order instruction that generated the transaction. Max length: 100 characters.

 |
| 

transactions\[\].  
standing\_order.  
**payment\_id**  
  
string

 | 

The ID of the payment that generated the transaction. Max length: 36 characters.  
  
**Deprecated** as of release **3.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by the payment\_id field on the parent transaction*

 |
| 

transactions\[\].  
**direct\_debit**  
  
object

 | 

Provides details about the Direct Debit that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_DIRECT_DEBIT`.  
  
*Provides more details about the source of the transaction.  
  
transactions\[\] items can contain one of standing\_order or **direct\_debit***

 |
| 

transactions\[\].  
direct\_debit.  
**direct\_debit\_id**  
  
string

 | 

The ID of the Direct Debit resource that generated the transaction. Max length: 1024 characters.

 |
| 

transactions\[\].  
direct\_debit.  
**mandate\_id**  
  
string

 | 

The ID of the Mandate this Direct Debit belongs to. Optional. Max length: 1024 characters.

 |
| 

transactions\[\].  
direct\_debit.  
**mandate\_reference**  
  
string

 | 

The reference of the Mandate. This field is used during scheme validation to match an `INBOUND` Direct Debit with the existing active Mandate. Optional. Max length: 1024 characters.

 |
| 

**previous\_page\_token**  
  
string

 | 

If a `page_token` was provided on the request and the requested page is not the first page, this token identifies the preceding page. This value can be provided in the `page_token` parameter of a subsequent request to return the previous page of results.

 |
| 

**next\_page\_token**  
  
string

 | 

If the result set contains more results than the requested `page_size`, this token identifies the next page of results. This value can be provided in the `page_token` parameter of a subsequent request to return the next page of results.

 |

#### [](#_xpl_api_v1_transactions_Transaction_CreateTransaction "Copy link to heading")Create

**Deprecated** as of release **4.7**, and will be removed no earlier than release **6.0** *Experience Layer Transactions is deprecated.*

Creates a new transaction.

**Permission Scopes:** xpl:write, xpl.transactions:write

**Endpoint:** POST /v1/transactions

##### [](#request_7 "Copy link to heading")Request

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

Uniquely identifies this request. Used to enforce idempotent mutations.  
  
Required.

 |
| 

**transaction**  
  
object

 | 

The transaction resource that is to be created.

 |
| 

transaction.  
**id**  
  
string

 | 

Unique identifier for this transaction. If not provided on transaction creation, a UUID will be generated. Optional on create, required on update.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transaction.  
**account\_id**  
  
string

 | 

The Vault account ID this transaction applies to. Required on create, ignored on update.

 |
| 

transaction.  
**amount**  
  
object

 | 

The amount of the transaction. Required on create, optional on update.

 |
| 

transaction.  
amount.  
**asset**  
  
enum

 | 

The asset type of the denomination. Mandatory.  
  
**Enum values**  
**UNKNOWN**  
**CASH**  
  
**Default**  
**UNKNOWN**

 |
| 

transaction.  
amount.  
**value**  
  
string

 | 

The value of the amount, unsigned number with optional floating point and arbitrary precision. Valid examples: <100>, <0.1>, <5.99>, <0.23422>. Mandatory.

 |
| 

transaction.  
amount.  
**denomination**  
  
string

 | 

The denomination of the amount, e.g. GBP, EUR. Mandatory.

 |
| 

transaction.  
**is\_credit**  
  
boolean

 | 

Whether the transaction is a credit or debit from the point of view of the account referenced by `account_id`. Defaults to false on create, ignored on update.

 |
| 

transaction.  
**reference**  
  
string

 | 

The reference for this transaction. Optional.  
  
Max length: 255 characters.

 |
| 

transaction.  
**status**  
  
enum

 | 

The transaction status. Required on create, optional on update.  
  
**Enum values**  
**TRANSACTION\_STATUS\_UNKNOWN:**  
Unknown transaction status.  
**TRANSACTION\_STATUS\_PENDING:**  
Pending transaction.  
**TRANSACTION\_STATUS\_BOOKED:**  
Final success status.  
**TRANSACTION\_STATUS\_REJECTED:**  
Error status for a transaction.  
  
**Default**  
**TRANSACTION\_STATUS\_UNKNOWN**

 |
| 

transaction.  
**value\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when the assets become available to the account owner for a credit or cease to be available to the account owner for a debit. If this field is populated and the transaction is in a pending state, it refers to an expected/requested value date. Optional.

 |
| 

transaction.  
**booking\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when a transaction becomes final. If this field is populated and the transaction is in a pending state, it refers to an expected booking date. Optional.

 |
| 

transaction.  
**payee\_id**  
  
string

 | 

If applicable, ID of a payee associated with this transaction in the Experience Layer. Optional.

 |
| 

transaction.  
**payment\_order\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
  
*Note: this field is deprecated in favour of `payment_id` and will be removed in version 4.0. If both `payment_id` and `payment_order_id` are provided on a `CreateTransaction` or `UpdateTransaction` call, the value of `payment_id` takes precedence.*  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_id*

 |
| 

transaction.  
**payment\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transaction.  
**posting\_instruction\_batch\_ids\[\]**  
  
array \[string\]

 | 

Ordered list of posting instruction batch IDs. Ordered by posting batch value\_timestamp, ascending. Can be supplied in any order, will be returned ordered. Once a batch ID has been linked to a transaction, it cannot be unlinked. Updates may only add new IDs to this collection. Can be empty (e.g. cancelled transaction, pre-auth creation). Optional.

 |
| 

transaction.  
**rejection\_code**  
  
enum

 | 

If a transaction has status rejected, this code represents the reason for being rejected.  
  
**Enum values**  
**REJECTION\_CODE\_UNKNOWN:**  
Unknown rejection reason. This should also be used if the transaction was rejected for a reason not included in this enum.  
**REJECTION\_CODE\_INSUFFICIENT\_FUNDS:**  
The contract rejected this transaction because the debitor account had insufficient funds.  
**REJECTION\_CODE\_CREDITOR:**  
The transaction was rejected on the creditor side.  
**REJECTION\_CODE\_DEBITOR:**  
The transaction was rejected on the debitor side.  
**REJECTION\_CODE\_INVALID\_DENOMINATION:**  
The posting instruction target account does not support the posted denomination.  
**REJECTION\_CODE\_INVALID\_AMOUNT:**  
The payment has an invalid amount for the given currency/payment scheme.  
**REJECTION\_CODE\_EXTERNAL:**  
The transaction was rejected because of an issue external to Vault.  
  
**Default**  
**REJECTION\_CODE\_UNKNOWN**

 |
| 

transaction.  
**transaction\_code**  
  
object

 | 

The ISO20022 Bank Transaction Code object. This contains the set of elements fully identifying the type of underlying transaction that results in an entry.

 |
| 

transaction.  
transaction\_code.  
**domain**  
  
string

 | 

Specifies the business area of the underlying transaction.

 |
| 

transaction.  
transaction\_code.  
**family**  
  
string

 | 

Specifies the family within a domain.

 |
| 

transaction.  
transaction\_code.  
**subfamily**  
  
string

 | 

Specifies the subproduct family within a specific family.

 |
| 

transaction.  
**transaction\_source**  
  
enum

 | 

The source of the transaction.  
  
**Enum values**  
**TRANSACTION\_SOURCE\_UNKNOWN:**  
The source of the transaction has not been set.  
**TRANSACTION\_SOURCE\_STANDING\_ORDER:**  
The source of the transaction is a standing order execution.  
**TRANSACTION\_SOURCE\_CONTRACT:**  
The source of the transaction is a Smart Contract-initiated posting instruction.  
**TRANSACTION\_SOURCE\_DIRECT\_DEBIT:**  
The source of the transaction is a Direct Debit.  
  
**Default**  
**TRANSACTION\_SOURCE\_UNKNOWN**

 |
| 

transaction.  
**metadata**  
  
object

 | 

Represents Transaction specific metadata in the form of a JSON object. No validations are performed on this field. Optional.

 |
| 

transaction.  
**standing\_order**  
  
object

 | 

Provides details about the standing order execution that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_STANDING_ORDER`.  
  
*Provides more details about the source of the transaction.  
  
transaction can contain one of **standing\_order** or direct\_debit*

 |
| 

transaction.  
standing\_order.  
**standing\_order\_id**  
  
string

 | 

The ID of the standing order instruction that generated the transaction. Max length: 100 characters.

 |
| 

transaction.  
standing\_order.  
**payment\_id**  
  
string

 | 

The ID of the payment that generated the transaction. Max length: 36 characters.  
  
**Deprecated** as of release **3.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by the payment\_id field on the parent transaction*

 |
| 

transaction.  
**direct\_debit**  
  
object

 | 

Provides details about the Direct Debit that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_DIRECT_DEBIT`.  
  
*Provides more details about the source of the transaction.  
  
transaction can contain one of standing\_order or **direct\_debit***

 |
| 

transaction.  
direct\_debit.  
**direct\_debit\_id**  
  
string

 | 

The ID of the Direct Debit resource that generated the transaction. Max length: 1024 characters.

 |
| 

transaction.  
direct\_debit.  
**mandate\_id**  
  
string

 | 

The ID of the Mandate this Direct Debit belongs to. Optional. Max length: 1024 characters.

 |
| 

transaction.  
direct\_debit.  
**mandate\_reference**  
  
string

 | 

The reference of the Mandate. This field is used during scheme validation to match an `INBOUND` Direct Debit with the existing active Mandate. Optional. Max length: 1024 characters.

 |

##### [](#response_7 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier for this transaction. If not provided on transaction creation, a UUID will be generated. Optional on create, required on update.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

**account\_id**  
  
string

 | 

The Vault account ID this transaction applies to. Required on create, ignored on update.

 |
| 

**amount**  
  
object

 | 

The amount of the transaction. Required on create, optional on update.

 |
| 

amount.  
**asset**  
  
enum

 | 

The asset type of the denomination. Mandatory.  
  
**Enum values**  
**UNKNOWN**  
**CASH**

 |
| 

amount.  
**value**  
  
string

 | 

The value of the amount, unsigned number with optional floating point and arbitrary precision. Valid examples: <100>, <0.1>, <5.99>, <0.23422>. Mandatory.

 |
| 

amount.  
**denomination**  
  
string

 | 

The denomination of the amount, e.g. GBP, EUR. Mandatory.

 |
| 

**is\_credit**  
  
boolean

 | 

Whether the transaction is a credit or debit from the point of view of the account referenced by `account_id`. Defaults to false on create, ignored on update.

 |
| 

**reference**  
  
string

 | 

The reference for this transaction. Optional.  
  
Max length: 255 characters.

 |
| 

**status**  
  
enum

 | 

The transaction status. Required on create, optional on update.  
  
**Enum values**  
**TRANSACTION\_STATUS\_UNKNOWN:**  
Unknown transaction status.  
**TRANSACTION\_STATUS\_PENDING:**  
Pending transaction.  
**TRANSACTION\_STATUS\_BOOKED:**  
Final success status.  
**TRANSACTION\_STATUS\_REJECTED:**  
Error status for a transaction.

 |
| 

**value\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when the assets become available to the account owner for a credit or cease to be available to the account owner for a debit. If this field is populated and the transaction is in a pending state, it refers to an expected/requested value date. Optional.

 |
| 

**booking\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when a transaction becomes final. If this field is populated and the transaction is in a pending state, it refers to an expected booking date. Optional.

 |
| 

**payee\_id**  
  
string

 | 

If applicable, ID of a payee associated with this transaction in the Experience Layer. Optional.

 |
| 

**payment\_order\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
  
*Note: this field is deprecated in favour of `payment_id` and will be removed in version 4.0. If both `payment_id` and `payment_order_id` are provided on a `CreateTransaction` or `UpdateTransaction` call, the value of `payment_id` takes precedence.*  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_id*

 |
| 

**payment\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

**posting\_instruction\_batch\_ids\[\]**  
  
array \[string\]

 | 

Ordered list of posting instruction batch IDs. Ordered by posting batch value\_timestamp, ascending. Can be supplied in any order, will be returned ordered. Once a batch ID has been linked to a transaction, it cannot be unlinked. Updates may only add new IDs to this collection. Can be empty (e.g. cancelled transaction, pre-auth creation). Optional.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

UTC timestamp recording when the transaction was last updated. If the transaction has never been updated, this field will represent the time the transaction resource was created.

 |
| 

**rejection\_code**  
  
enum

 | 

If a transaction has status rejected, this code represents the reason for being rejected.  
  
**Enum values**  
**REJECTION\_CODE\_UNKNOWN:**  
Unknown rejection reason. This should also be used if the transaction was rejected for a reason not included in this enum.  
**REJECTION\_CODE\_INSUFFICIENT\_FUNDS:**  
The contract rejected this transaction because the debitor account had insufficient funds.  
**REJECTION\_CODE\_CREDITOR:**  
The transaction was rejected on the creditor side.  
**REJECTION\_CODE\_DEBITOR:**  
The transaction was rejected on the debitor side.  
**REJECTION\_CODE\_INVALID\_DENOMINATION:**  
The posting instruction target account does not support the posted denomination.  
**REJECTION\_CODE\_INVALID\_AMOUNT:**  
The payment has an invalid amount for the given currency/payment scheme.  
**REJECTION\_CODE\_EXTERNAL:**  
The transaction was rejected because of an issue external to Vault.

 |
| 

**transaction\_code**  
  
object

 | 

The ISO20022 Bank Transaction Code object. This contains the set of elements fully identifying the type of underlying transaction that results in an entry.

 |
| 

transaction\_code.  
**domain**  
  
string

 | 

Specifies the business area of the underlying transaction.

 |
| 

transaction\_code.  
**family**  
  
string

 | 

Specifies the family within a domain.

 |
| 

transaction\_code.  
**subfamily**  
  
string

 | 

Specifies the subproduct family within a specific family.

 |
| 

**transaction\_source**  
  
enum

 | 

The source of the transaction.  
  
**Enum values**  
**TRANSACTION\_SOURCE\_UNKNOWN:**  
The source of the transaction has not been set.  
**TRANSACTION\_SOURCE\_STANDING\_ORDER:**  
The source of the transaction is a standing order execution.  
**TRANSACTION\_SOURCE\_CONTRACT:**  
The source of the transaction is a Smart Contract-initiated posting instruction.  
**TRANSACTION\_SOURCE\_DIRECT\_DEBIT:**  
The source of the transaction is a Direct Debit.

 |
| 

**metadata**  
  
object

 | 

Represents Transaction specific metadata in the form of a JSON object. No validations are performed on this field. Optional.

 |
| 

**standing\_order**  
  
object

 | 

Provides details about the standing order execution that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_STANDING_ORDER`.  
  
*Provides more details about the source of the transaction.  
  
This can contain one of **standing\_order** or direct\_debit*

 |
| 

standing\_order.  
**standing\_order\_id**  
  
string

 | 

The ID of the standing order instruction that generated the transaction. Max length: 100 characters.

 |
| 

standing\_order.  
**payment\_id**  
  
string

 | 

The ID of the payment that generated the transaction. Max length: 36 characters.  
  
**Deprecated** as of release **3.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by the payment\_id field on the parent transaction*

 |
| 

**direct\_debit**  
  
object

 | 

Provides details about the Direct Debit that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_DIRECT_DEBIT`.  
  
*Provides more details about the source of the transaction.  
  
This can contain one of standing\_order or **direct\_debit***

 |
| 

direct\_debit.  
**direct\_debit\_id**  
  
string

 | 

The ID of the Direct Debit resource that generated the transaction. Max length: 1024 characters.

 |
| 

direct\_debit.  
**mandate\_id**  
  
string

 | 

The ID of the Mandate this Direct Debit belongs to. Optional. Max length: 1024 characters.

 |
| 

direct\_debit.  
**mandate\_reference**  
  
string

 | 

The reference of the Mandate. This field is used during scheme validation to match an `INBOUND` Direct Debit with the existing active Mandate. Optional. Max length: 1024 characters.

 |

#### [](#_xpl_api_v1_transactions_Transaction_UpdateTransaction "Copy link to heading")Update

**Deprecated** as of release **4.7**, and will be removed no earlier than release **6.0** *Experience Layer Transactions is deprecated.*

Updates an existing transaction.

**Permission Scopes:** xpl:write, xpl.transactions:write

**Endpoint:** PUT /v1/transactions/{transaction.id}

##### [](#request_8 "Copy link to heading")Request

Path parameters  
| Name | Description |
| --- | --- |
| 
transaction.  
**id**  
  
string

 | 

Unique identifier for this transaction. If not provided on transaction creation, a UUID will be generated. Optional on create, required on update.

 |

Body parameters  
| Name | Description |
| --- | --- |
| 
**request\_id**  
  
string

 | 

Uniquely identifies this request. Used to enforce idempotent mutations.  
  
Required.

 |
| 

**transaction**  
  
object

 | 

The transaction resource that is to be mutated. Can be partial. Must include the transaction ID. Any field referenced in the update mask must be present.

 |
| 

transaction.  
**account\_id**  
  
string

 | 

The Vault account ID this transaction applies to. Required on create, ignored on update.

 |
| 

transaction.  
**amount**  
  
object

 | 

The amount of the transaction. Required on create, optional on update.

 |
| 

transaction.  
amount.  
**asset**  
  
enum

 | 

The asset type of the denomination. Mandatory.  
  
**Enum values**  
**UNKNOWN**  
**CASH**  
  
**Default**  
**UNKNOWN**

 |
| 

transaction.  
amount.  
**value**  
  
string

 | 

The value of the amount, unsigned number with optional floating point and arbitrary precision. Valid examples: <100>, <0.1>, <5.99>, <0.23422>. Mandatory.

 |
| 

transaction.  
amount.  
**denomination**  
  
string

 | 

The denomination of the amount, e.g. GBP, EUR. Mandatory.

 |
| 

transaction.  
**is\_credit**  
  
boolean

 | 

Whether the transaction is a credit or debit from the point of view of the account referenced by `account_id`. Defaults to false on create, ignored on update.

 |
| 

transaction.  
**reference**  
  
string

 | 

The reference for this transaction. Optional.  
  
Max length: 255 characters.

 |
| 

transaction.  
**status**  
  
enum

 | 

The transaction status. Required on create, optional on update.  
  
**Enum values**  
**TRANSACTION\_STATUS\_UNKNOWN:**  
Unknown transaction status.  
**TRANSACTION\_STATUS\_PENDING:**  
Pending transaction.  
**TRANSACTION\_STATUS\_BOOKED:**  
Final success status.  
**TRANSACTION\_STATUS\_REJECTED:**  
Error status for a transaction.  
  
**Default**  
**TRANSACTION\_STATUS\_UNKNOWN**

 |
| 

transaction.  
**value\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when the assets become available to the account owner for a credit or cease to be available to the account owner for a debit. If this field is populated and the transaction is in a pending state, it refers to an expected/requested value date. Optional.

 |
| 

transaction.  
**booking\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when a transaction becomes final. If this field is populated and the transaction is in a pending state, it refers to an expected booking date. Optional.

 |
| 

transaction.  
**payee\_id**  
  
string

 | 

If applicable, ID of a payee associated with this transaction in the Experience Layer. Optional.

 |
| 

transaction.  
**payment\_order\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
  
*Note: this field is deprecated in favour of `payment_id` and will be removed in version 4.0. If both `payment_id` and `payment_order_id` are provided on a `CreateTransaction` or `UpdateTransaction` call, the value of `payment_id` takes precedence.*  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_id*

 |
| 

transaction.  
**payment\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transaction.  
**posting\_instruction\_batch\_ids\[\]**  
  
array \[string\]

 | 

Ordered list of posting instruction batch IDs. Ordered by posting batch value\_timestamp, ascending. Can be supplied in any order, will be returned ordered. Once a batch ID has been linked to a transaction, it cannot be unlinked. Updates may only add new IDs to this collection. Can be empty (e.g. cancelled transaction, pre-auth creation). Optional.

 |
| 

transaction.  
**rejection\_code**  
  
enum

 | 

If a transaction has status rejected, this code represents the reason for being rejected.  
  
**Enum values**  
**REJECTION\_CODE\_UNKNOWN:**  
Unknown rejection reason. This should also be used if the transaction was rejected for a reason not included in this enum.  
**REJECTION\_CODE\_INSUFFICIENT\_FUNDS:**  
The contract rejected this transaction because the debitor account had insufficient funds.  
**REJECTION\_CODE\_CREDITOR:**  
The transaction was rejected on the creditor side.  
**REJECTION\_CODE\_DEBITOR:**  
The transaction was rejected on the debitor side.  
**REJECTION\_CODE\_INVALID\_DENOMINATION:**  
The posting instruction target account does not support the posted denomination.  
**REJECTION\_CODE\_INVALID\_AMOUNT:**  
The payment has an invalid amount for the given currency/payment scheme.  
**REJECTION\_CODE\_EXTERNAL:**  
The transaction was rejected because of an issue external to Vault.  
  
**Default**  
**REJECTION\_CODE\_UNKNOWN**

 |
| 

transaction.  
**transaction\_code**  
  
object

 | 

The ISO20022 Bank Transaction Code object. This contains the set of elements fully identifying the type of underlying transaction that results in an entry.

 |
| 

transaction.  
transaction\_code.  
**domain**  
  
string

 | 

Specifies the business area of the underlying transaction.

 |
| 

transaction.  
transaction\_code.  
**family**  
  
string

 | 

Specifies the family within a domain.

 |
| 

transaction.  
transaction\_code.  
**subfamily**  
  
string

 | 

Specifies the subproduct family within a specific family.

 |
| 

transaction.  
**transaction\_source**  
  
enum

 | 

The source of the transaction.  
  
**Enum values**  
**TRANSACTION\_SOURCE\_UNKNOWN:**  
The source of the transaction has not been set.  
**TRANSACTION\_SOURCE\_STANDING\_ORDER:**  
The source of the transaction is a standing order execution.  
**TRANSACTION\_SOURCE\_CONTRACT:**  
The source of the transaction is a Smart Contract-initiated posting instruction.  
**TRANSACTION\_SOURCE\_DIRECT\_DEBIT:**  
The source of the transaction is a Direct Debit.  
  
**Default**  
**TRANSACTION\_SOURCE\_UNKNOWN**

 |
| 

transaction.  
**metadata**  
  
object

 | 

Represents Transaction specific metadata in the form of a JSON object. No validations are performed on this field. Optional.

 |
| 

transaction.  
**standing\_order**  
  
object

 | 

Provides details about the standing order execution that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_STANDING_ORDER`.  
  
*Provides more details about the source of the transaction.  
  
transaction can contain one of **standing\_order** or direct\_debit*

 |
| 

transaction.  
standing\_order.  
**standing\_order\_id**  
  
string

 | 

The ID of the standing order instruction that generated the transaction. Max length: 100 characters.

 |
| 

transaction.  
standing\_order.  
**payment\_id**  
  
string

 | 

The ID of the payment that generated the transaction. Max length: 36 characters.  
  
**Deprecated** as of release **3.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by the payment\_id field on the parent transaction*

 |
| 

transaction.  
**direct\_debit**  
  
object

 | 

Provides details about the Direct Debit that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_DIRECT_DEBIT`.  
  
*Provides more details about the source of the transaction.  
  
transaction can contain one of standing\_order or **direct\_debit***

 |
| 

transaction.  
direct\_debit.  
**direct\_debit\_id**  
  
string

 | 

The ID of the Direct Debit resource that generated the transaction. Max length: 1024 characters.

 |
| 

transaction.  
direct\_debit.  
**mandate\_id**  
  
string

 | 

The ID of the Mandate this Direct Debit belongs to. Optional. Max length: 1024 characters.

 |
| 

transaction.  
direct\_debit.  
**mandate\_reference**  
  
string

 | 

The reference of the Mandate. This field is used during scheme validation to match an `INBOUND` Direct Debit with the existing active Mandate. Optional. Max length: 1024 characters.

 |
| 

**update\_mask**  
  
object

 | 

Field mask for this update. Fields not included in this mask will be ignored. The accepted values are:  
  
\- **amount.value**  
\- **reference**  
\- **status**  
\- **value\_timestamp**  
\- **booking\_timestamp**  
\- **payee\_id**  
\- **payment\_id**  
\- **payment\_order\_id**  
\- **posting\_instruction\_batch\_ids**  
\- **rejection\_code**  
\- **transaction\_code.domain**  
\- **transaction\_code.family**  
\- **transaction\_code.subfamily**  
  
Required.

 |
| 

update\_mask.  
**paths\[\]**  
  
array \[string\]

 | 

The set of field mask paths.

 |

##### [](#response_8 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**id**  
  
string

 | 

Unique identifier for this transaction. If not provided on transaction creation, a UUID will be generated. Optional on create, required on update.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

**account\_id**  
  
string

 | 

The Vault account ID this transaction applies to. Required on create, ignored on update.

 |
| 

**amount**  
  
object

 | 

The amount of the transaction. Required on create, optional on update.

 |
| 

amount.  
**asset**  
  
enum

 | 

The asset type of the denomination. Mandatory.  
  
**Enum values**  
**UNKNOWN**  
**CASH**

 |
| 

amount.  
**value**  
  
string

 | 

The value of the amount, unsigned number with optional floating point and arbitrary precision. Valid examples: <100>, <0.1>, <5.99>, <0.23422>. Mandatory.

 |
| 

amount.  
**denomination**  
  
string

 | 

The denomination of the amount, e.g. GBP, EUR. Mandatory.

 |
| 

**is\_credit**  
  
boolean

 | 

Whether the transaction is a credit or debit from the point of view of the account referenced by `account_id`. Defaults to false on create, ignored on update.

 |
| 

**reference**  
  
string

 | 

The reference for this transaction. Optional.  
  
Max length: 255 characters.

 |
| 

**status**  
  
enum

 | 

The transaction status. Required on create, optional on update.  
  
**Enum values**  
**TRANSACTION\_STATUS\_UNKNOWN:**  
Unknown transaction status.  
**TRANSACTION\_STATUS\_PENDING:**  
Pending transaction.  
**TRANSACTION\_STATUS\_BOOKED:**  
Final success status.  
**TRANSACTION\_STATUS\_REJECTED:**  
Error status for a transaction.

 |
| 

**value\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when the assets become available to the account owner for a credit or cease to be available to the account owner for a debit. If this field is populated and the transaction is in a pending state, it refers to an expected/requested value date. Optional.

 |
| 

**booking\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when a transaction becomes final. If this field is populated and the transaction is in a pending state, it refers to an expected booking date. Optional.

 |
| 

**payee\_id**  
  
string

 | 

If applicable, ID of a payee associated with this transaction in the Experience Layer. Optional.

 |
| 

**payment\_order\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
  
*Note: this field is deprecated in favour of `payment_id` and will be removed in version 4.0. If both `payment_id` and `payment_order_id` are provided on a `CreateTransaction` or `UpdateTransaction` call, the value of `payment_id` takes precedence.*  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_id*

 |
| 

**payment\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

**posting\_instruction\_batch\_ids\[\]**  
  
array \[string\]

 | 

Ordered list of posting instruction batch IDs. Ordered by posting batch value\_timestamp, ascending. Can be supplied in any order, will be returned ordered. Once a batch ID has been linked to a transaction, it cannot be unlinked. Updates may only add new IDs to this collection. Can be empty (e.g. cancelled transaction, pre-auth creation). Optional.

 |
| 

**last\_update\_timestamp**  
  
dateTime

 | 

UTC timestamp recording when the transaction was last updated. If the transaction has never been updated, this field will represent the time the transaction resource was created.

 |
| 

**rejection\_code**  
  
enum

 | 

If a transaction has status rejected, this code represents the reason for being rejected.  
  
**Enum values**  
**REJECTION\_CODE\_UNKNOWN:**  
Unknown rejection reason. This should also be used if the transaction was rejected for a reason not included in this enum.  
**REJECTION\_CODE\_INSUFFICIENT\_FUNDS:**  
The contract rejected this transaction because the debitor account had insufficient funds.  
**REJECTION\_CODE\_CREDITOR:**  
The transaction was rejected on the creditor side.  
**REJECTION\_CODE\_DEBITOR:**  
The transaction was rejected on the debitor side.  
**REJECTION\_CODE\_INVALID\_DENOMINATION:**  
The posting instruction target account does not support the posted denomination.  
**REJECTION\_CODE\_INVALID\_AMOUNT:**  
The payment has an invalid amount for the given currency/payment scheme.  
**REJECTION\_CODE\_EXTERNAL:**  
The transaction was rejected because of an issue external to Vault.

 |
| 

**transaction\_code**  
  
object

 | 

The ISO20022 Bank Transaction Code object. This contains the set of elements fully identifying the type of underlying transaction that results in an entry.

 |
| 

transaction\_code.  
**domain**  
  
string

 | 

Specifies the business area of the underlying transaction.

 |
| 

transaction\_code.  
**family**  
  
string

 | 

Specifies the family within a domain.

 |
| 

transaction\_code.  
**subfamily**  
  
string

 | 

Specifies the subproduct family within a specific family.

 |
| 

**transaction\_source**  
  
enum

 | 

The source of the transaction.  
  
**Enum values**  
**TRANSACTION\_SOURCE\_UNKNOWN:**  
The source of the transaction has not been set.  
**TRANSACTION\_SOURCE\_STANDING\_ORDER:**  
The source of the transaction is a standing order execution.  
**TRANSACTION\_SOURCE\_CONTRACT:**  
The source of the transaction is a Smart Contract-initiated posting instruction.  
**TRANSACTION\_SOURCE\_DIRECT\_DEBIT:**  
The source of the transaction is a Direct Debit.

 |
| 

**metadata**  
  
object

 | 

Represents Transaction specific metadata in the form of a JSON object. No validations are performed on this field. Optional.

 |
| 

**standing\_order**  
  
object

 | 

Provides details about the standing order execution that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_STANDING_ORDER`.  
  
*Provides more details about the source of the transaction.  
  
This can contain one of **standing\_order** or direct\_debit*

 |
| 

standing\_order.  
**standing\_order\_id**  
  
string

 | 

The ID of the standing order instruction that generated the transaction. Max length: 100 characters.

 |
| 

standing\_order.  
**payment\_id**  
  
string

 | 

The ID of the payment that generated the transaction. Max length: 36 characters.  
  
**Deprecated** as of release **3.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by the payment\_id field on the parent transaction*

 |
| 

**direct\_debit**  
  
object

 | 

Provides details about the Direct Debit that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_DIRECT_DEBIT`.  
  
*Provides more details about the source of the transaction.  
  
This can contain one of standing\_order or **direct\_debit***

 |
| 

direct\_debit.  
**direct\_debit\_id**  
  
string

 | 

The ID of the Direct Debit resource that generated the transaction. Max length: 1024 characters.

 |
| 

direct\_debit.  
**mandate\_id**  
  
string

 | 

The ID of the Mandate this Direct Debit belongs to. Optional. Max length: 1024 characters.

 |
| 

direct\_debit.  
**mandate\_reference**  
  
string

 | 

The reference of the Mandate. This field is used during scheme validation to match an `INBOUND` Direct Debit with the existing active Mandate. Optional. Max length: 1024 characters.

 |

#### [](#_xpl_api_v1_transactions_BatchGetTransactionsResponse_BatchGetTransactions "Copy link to heading")BatchGet

**Deprecated** as of release **4.7**, and will be removed no earlier than release **6.0** *Experience Layer Transactions is deprecated.*

Given a list of transaction IDs, returns a map of transaction ID to transaction resource. Returns an error if any of the IDs in the requests don’t exist.

**Permission Scopes:** xpl:read, xpl.transactions:read

**Endpoint:** GET /v1/transactions:batchGet

##### [](#request_9 "Copy link to heading")Request

Query parameters  
| Name | Description |
| --- | --- |
| 
**ids**  
  
array \[string\]

 | 

The IDs of the transactions that are to be retrieved. Min: 1. Max: 100.

 |

##### [](#response_9 "Copy link to heading")Response

Response fields  
| Name | Description |
| --- | --- |
| 
**transactions**  
  
map \[string: object\]

 | 

Map of Transaction ID to transaction resource. All requested IDs will be populated on a successful request.

 |
| 

transactions\[KEY\].  
**id**  
  
string

 | 

Unique identifier for this transaction. If not provided on transaction creation, a UUID will be generated. Optional on create, required on update.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transactions\[KEY\].  
**account\_id**  
  
string

 | 

The Vault account ID this transaction applies to. Required on create, ignored on update.

 |
| 

transactions\[KEY\].  
**amount**  
  
object

 | 

The amount of the transaction. Required on create, optional on update.

 |
| 

transactions\[KEY\].  
amount.  
**asset**  
  
enum

 | 

The asset type of the denomination. Mandatory.  
  
**Enum values**  
**UNKNOWN**  
**CASH**

 |
| 

transactions\[KEY\].  
amount.  
**value**  
  
string

 | 

The value of the amount, unsigned number with optional floating point and arbitrary precision. Valid examples: <100>, <0.1>, <5.99>, <0.23422>. Mandatory.

 |
| 

transactions\[KEY\].  
amount.  
**denomination**  
  
string

 | 

The denomination of the amount, e.g. GBP, EUR. Mandatory.

 |
| 

transactions\[KEY\].  
**is\_credit**  
  
boolean

 | 

Whether the transaction is a credit or debit from the point of view of the account referenced by `account_id`. Defaults to false on create, ignored on update.

 |
| 

transactions\[KEY\].  
**reference**  
  
string

 | 

The reference for this transaction. Optional.  
  
Max length: 255 characters.

 |
| 

transactions\[KEY\].  
**status**  
  
enum

 | 

The transaction status. Required on create, optional on update.  
  
**Enum values**  
**TRANSACTION\_STATUS\_UNKNOWN:**  
Unknown transaction status.  
**TRANSACTION\_STATUS\_PENDING:**  
Pending transaction.  
**TRANSACTION\_STATUS\_BOOKED:**  
Final success status.  
**TRANSACTION\_STATUS\_REJECTED:**  
Error status for a transaction.

 |
| 

transactions\[KEY\].  
**value\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when the assets become available to the account owner for a credit or cease to be available to the account owner for a debit. If this field is populated and the transaction is in a pending state, it refers to an expected/requested value date. Optional.

 |
| 

transactions\[KEY\].  
**booking\_timestamp**  
  
dateTime

 | 

A UTC timestamp that records when a transaction becomes final. If this field is populated and the transaction is in a pending state, it refers to an expected booking date. Optional.

 |
| 

transactions\[KEY\].  
**payee\_id**  
  
string

 | 

If applicable, ID of a payee associated with this transaction in the Experience Layer. Optional.

 |
| 

transactions\[KEY\].  
**payment\_order\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
  
*Note: this field is deprecated in favour of `payment_id` and will be removed in version 4.0. If both `payment_id` and `payment_order_id` are provided on a `CreateTransaction` or `UpdateTransaction` call, the value of `payment_id` takes precedence.*  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.  
  
**Deprecated** as of release **2.7**, and will be removed no earlier than release **4.0**  
*This field is replaced by payment\_id*

 |
| 

transactions\[KEY\].  
**payment\_id**  
  
string

 | 

If applicable, ID of the payment that generated this transaction. Optional.  
This field must contain a valid UUID in the canonical 8-4-4-4-12 form.

 |
| 

transactions\[KEY\].  
**posting\_instruction\_batch\_ids\[\]**  
  
array \[string\]

 | 

Ordered list of posting instruction batch IDs. Ordered by posting batch value\_timestamp, ascending. Can be supplied in any order, will be returned ordered. Once a batch ID has been linked to a transaction, it cannot be unlinked. Updates may only add new IDs to this collection. Can be empty (e.g. cancelled transaction, pre-auth creation). Optional.

 |
| 

transactions\[KEY\].  
**last\_update\_timestamp**  
  
dateTime

 | 

UTC timestamp recording when the transaction was last updated. If the transaction has never been updated, this field will represent the time the transaction resource was created.

 |
| 

transactions\[KEY\].  
**rejection\_code**  
  
enum

 | 

If a transaction has status rejected, this code represents the reason for being rejected.  
  
**Enum values**  
**REJECTION\_CODE\_UNKNOWN:**  
Unknown rejection reason. This should also be used if the transaction was rejected for a reason not included in this enum.  
**REJECTION\_CODE\_INSUFFICIENT\_FUNDS:**  
The contract rejected this transaction because the debitor account had insufficient funds.  
**REJECTION\_CODE\_CREDITOR:**  
The transaction was rejected on the creditor side.  
**REJECTION\_CODE\_DEBITOR:**  
The transaction was rejected on the debitor side.  
**REJECTION\_CODE\_INVALID\_DENOMINATION:**  
The posting instruction target account does not support the posted denomination.  
**REJECTION\_CODE\_INVALID\_AMOUNT:**  
The payment has an invalid amount for the given currency/payment scheme.  
**REJECTION\_CODE\_EXTERNAL:**  
The transaction was rejected because of an issue external to Vault.

 |
| 

transactions\[KEY\].  
**transaction\_code**  
  
object

 | 

The ISO20022 Bank Transaction Code object. This contains the set of elements fully identifying the type of underlying transaction that results in an entry.

 |
| 

transactions\[KEY\].  
transaction\_code.  
**domain**  
  
string

 | 

Specifies the business area of the underlying transaction.

 |
| 

transactions\[KEY\].  
transaction\_code.  
**family**  
  
string

 | 

Specifies the family within a domain.

 |
| 

transactions\[KEY\].  
transaction\_code.  
**subfamily**  
  
string

 | 

Specifies the subproduct family within a specific family.

 |
| 

transactions\[KEY\].  
**transaction\_source**  
  
enum

 | 

The source of the transaction.  
  
**Enum values**  
**TRANSACTION\_SOURCE\_UNKNOWN:**  
The source of the transaction has not been set.  
**TRANSACTION\_SOURCE\_STANDING\_ORDER:**  
The source of the transaction is a standing order execution.  
**TRANSACTION\_SOURCE\_CONTRACT:**  
The source of the transaction is a Smart Contract-initiated posting instruction.  
**TRANSACTION\_SOURCE\_DIRECT\_DEBIT:**  
The source of the transaction is a Direct Debit.

 |
| 

transactions\[KEY\].  
**metadata**  
  
object

 | 

Represents Transaction specific metadata in the form of a JSON object. No validations are performed on this field. Optional.

 |
| 

transactions\[KEY\].  
**standing\_order**  
  
object

 | 

Provides details about the standing order execution that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_STANDING_ORDER`.  
  
*Provides more details about the source of the transaction.  
  
transactions\[KEY\] can contain one of **standing\_order** or direct\_debit*

 |
| 

transactions\[KEY\].  
standing\_order.  
**standing\_order\_id**  
  
string

 | 

The ID of the standing order instruction that generated the transaction. Max length: 100 characters.

 |
| 

transactions\[KEY\].  
standing\_order.  
**payment\_id**  
  
string

 | 

The ID of the payment that generated the transaction. Max length: 36 characters.  
  
**Deprecated** as of release **3.0**, and will be removed no earlier than release **5.0**  
*This field is replaced by the payment\_id field on the parent transaction*

 |
| 

transactions\[KEY\].  
**direct\_debit**  
  
object

 | 

Provides details about the Direct Debit that generated the transaction. This field will be populated if the value of `transaction_source` is `TRANSACTION_SOURCE_DIRECT_DEBIT`.  
  
*Provides more details about the source of the transaction.  
  
transactions\[KEY\] can contain one of standing\_order or **direct\_debit***

 |
| 

transactions\[KEY\].  
direct\_debit.  
**direct\_debit\_id**  
  
string

 | 

The ID of the Direct Debit resource that generated the transaction. Max length: 1024 characters.

 |
| 

transactions\[KEY\].  
direct\_debit.  
**mandate\_id**  
  
string

 | 

The ID of the Mandate this Direct Debit belongs to. Optional. Max length: 1024 characters.

 |
| 

transactions\[KEY\].  
direct\_debit.  
**mandate\_reference**  
  
string

 | 

The reference of the Mandate. This field is used during scheme validation to match an `INBOUND` Direct Debit with the existing active Mandate. Optional. Max length: 1024 characters.

 |

## [](#experience_layer_streaming_api "Copy link to heading")Experience Layer Streaming API

chat\_bubble

The Experience Layer API is deprecated as of Vault Core release 4.7, and will be removed no earlier than release 6.0.

### [](#overview "Copy link to heading")Overview

The Experience Layer Streaming API has several event streams to notify API clients of creation and update in the relevant Experience Layer resources.

#### [](#message_formats "Copy link to heading")Message formats

The supported message formats are JSON or Google Protobuf. The required format is set when your Vault instance is configured.

#### [](#downloading_the_proto_files "Copy link to heading")Downloading the proto files

info

If you are using the Protobuf message format, download the schemas you need to integrate with our Experience Layer Streaming API.

Download download

chat\_bubble

We guarantee API backwards compatibility at the proto level but not for code generated from those protos. Due to the varying output of available proto compilers, any code that is autogenerated from our proto files is not guaranteed to be backwards compatible with code that was autogenerated from proto files delivered with a previous version of Vault (including minor versions).

### [](#payee_events "Copy link to heading")Payee events

The Payee Streaming API is an event stream of creations and updates of [Payee](/vault-core/5-8/EN/api/experience_layer_api#payee) resources. API calls to create or update a payee will generate an event on this topic.

#### [](#vault_xpl_api_v1_payees_payee_events "Copy link to heading")vault.xpl\_api.v1.payees.payee.events

  
| Field | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

string

 | 

A unique string ID that can be used for idempotence.

 |
| 

`timestamp`

 | 

RFC3339 UTC timestamp string

 | 

The time the mutation was committed to the primary storage.

 |
| 

`vault_version`

 | 

[SemVer](/vault-core/5-8/EN/api/experience_layer_api#common)

 | 

Denotes SemVer at the time the event was published. See the common types for a specification.

 |
| 

`change_id`

 | 

integer

 | 

A per-resource sequential change identifier. Resource creations always have `change_id` equal to `0`.

 |
| 

`payee_created`

 | 

`PayeeCreatedEvent`

 | 

Resource creation event. This field is mutually exclusive to `payee_updated`.

 |
| 

`payee_updated`

 | 

`PayeeUpdatedEvent`

 | 

Resource update event. This field is mutually exclusive to `payee_created`.

 |

#### [](#payeecreatedevent "Copy link to heading")PayeeCreatedEvent

  
| Field | Type | Description |
| --- | --- | --- |
| 
`payee`

 | 

[xpl\_api.v1.Payee](/vault-core/5-8/EN/api/experience_layer_api#payee)

 | 

The payee at the time of creation. See the Payee API documentation for the object specification.

 |

#### [](#payeeupdatedevent "Copy link to heading")PayeeUpdatedEvent

  
| Field | Type | Description |
| --- | --- | --- |
| 
`payee`

 | 

[xpl\_api.v1.Payee](/vault-core/5-8/EN/api/experience_layer_api#payee)

 | 

The full payee resource after the update. See the Payee API documentation for the object specification.

 |
| 

`update_mask`

 | 

FieldMask

 | 

Lists the resource paths that were updated in this mutation. Corresponds to the `update_mask` in the original update request.

 |

### [](#transaction_events "Copy link to heading")Transaction events

The Transaction Streaming API is an event stream of creations and updates of [Transaction](/vault-core/5-8/EN/api/experience_layer_api#transaction) resources. API calls to create or update a transaction will generate an event on this topic.

*Topic*: `vault.xpl_api.v1.transactions.transaction.events`

  
| Field | Type | Description |
| --- | --- | --- |
| 
`event_id`

 | 

string

 | 

A unique string ID that can be used for idempotence.

 |
| 

`timestamp`

 | 

RFC3339 UTC timestamp string

 | 

The time the mutation was committed to the primary storage.

 |
| 

`vault_version`

 | 

[SemVer](/vault-core/5-8/EN/api/experience_layer_api#common)

 | 

Denotes SemVer at the time the event was published. See the common types for a specification.

 |
| 

`change_id`

 | 

integer

 | 

A per-resource sequential change identifier. Resource creations always have `change_id` equal to `0`.

 |
| 

`transaction_created`

 | 

`TransactionCreatedEvent`

 | 

Resource creation event. This field is mutually exclusive to `transaction_updated`.

 |
| 

`transaction_updated`

 | 

`TransactionUpdatedEvent`

 | 

Resource update event. This field is mutually exclusive to `transaction_created`.

 |

#### [](#transactioncreatedevent "Copy link to heading")TransactionCreatedEvent

  
| Field | Type | Description |
| --- | --- | --- |
| 
`transaction`

 | 

[xpl\_api.v1.Transaction](/vault-core/5-8/EN/api/experience_layer_api#transaction)

 | 

The transaction at the time of creation. See the Transaction API documentation for the object specification.

 |

#### [](#transactionupdatedevent "Copy link to heading")TransactionUpdatedEvent

  
| Field | Type | Description |
| --- | --- | --- |
| 
`transaction`

 | 

[xpl\_api.v1.Transaction](/vault-core/5-8/EN/api/experience_layer_api#transaction)

 | 

The full transaction resource after the update. See the Transaction API documentation for the object specification.

 |
| 

`update_mask`

 | 

FieldMask

 | 

Lists the resource paths that were updated in this mutation. Corresponds to the `update_mask` in the original update request.

 |

### [](#common "Copy link to heading")Common

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

## [](#experience_layer_dlqs "Copy link to heading")Experience Layer DLQs

chat\_bubble

The Experience Layer API is deprecated as of Vault Core release 4.7, and will be removed no earlier than release 6.0.

### [](#experience_layer_dlqs_2 "Copy link to heading")Experience Layer DLQs

#### [](#dlq_name_vault_payment_hub_payment_events_v1_payment_hub_bridge_dlq "Copy link to heading")DLQ name: vault.payment\_hub.payment\_events.v1.payment\_hub\_bridge.dlq

##### [](#what_message_has_been_sent_to_the_dlq "Copy link to heading")What message has been sent to the DLQ?

[PaymentUpdatedEvent](/vault-core/5-8/EN/api/payments_hub_api#payment_events)

##### [](#what_topic_was_the_message_originally_consumed_from "Copy link to heading")What topic was the message originally consumed from?

`vault.payment_hub.payment_events.v1`

##### [](#what_failed "Copy link to heading")What failed?

A message is published to the DLQ if the Payment Hub Bridge was unable to create an Experience Layer Transaction from a `PaymentUpdatedEvent`.

##### [](#what_is_the_impact "Copy link to heading")What is the impact?

The associated postings will be processed and the account balance changed, however there will be no corresponding Experience Layer Transaction created.

##### [](#possible_failure_reasons_and_recoveries "Copy link to heading")Possible failure reasons and recoveries

For any error message seen on this DLQ, please contact Thought Machine.

#### [](#dlq_name_vault_api_v1_postings_posting_instruction_batch_created_migrated_postings_bridge_dlq "Copy link to heading")DLQ name: vault.api.v1.postings.posting\_instruction\_batch.created.migrated\_postings\_bridge.dlq

##### [](#what_message_has_been_sent_to_the_dlq_2 "Copy link to heading")What message has been sent to the DLQ?

[PostingInstructionBatchCreatedEvent](/vault-core/5-8/EN/api/core_api#posting_events)

##### [](#what_topic_was_the_message_originally_consumed_from_2 "Copy link to heading")What topic was the message originally consumed from?

`vault.api.v1.postings.posting_instruction_batch.created`

##### [](#what_failed_2 "Copy link to heading")What failed?

A message is published to the DLQ if the Migrated Postings Bridge is unable to create an Experience Layer Transaction from a `PostingInstructionBatchCreatedEvent`.

##### [](#what_is_the_impact_2 "Copy link to heading")What is the impact?

The associated postings will be processed and the account balance changed, however there will be no corresponding Experience Layer Transaction created.

##### [](#possible_failure_reasons_and_recoveries_2 "Copy link to heading")Possible failure reasons and recoveries

For any error message seen on this DLQ, please contact Thought Machine.