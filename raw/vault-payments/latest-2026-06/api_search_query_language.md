---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/search_query_language"
title: "Search Query Language"
scraped_at: "2026-06-17T05:11:13.066Z"
images: 0
---

# Search Query Language

The Search API provides a powerful and flexible way of finding resources, using a query string.

For example, this query can be used in the [SearchPayments API](/vault-payments/latest/EN/api/payments_api#payments) to match Payments by Instruction direction and Payment create\_timestamp: `instruction_data.direction='INSTRUCTION_DIRECTION_INBOUND' AND create_timestamp<'2024-12-05'`

## [](#syntax "Copy link to heading")Syntax

A query string is composed of zero or more comparisons which are combined with boolean operators and parentheses. These are the available operators used to build a query:

### [](#comparison_operators "Copy link to heading")Comparison operators

   
| Operator | Name | Description | Example |
| --- | --- | --- | --- |
| 
`=`

 | 

Exact match

 | 

In order to match, the value on the right hand side must match the field on the left hand side exactly. This is case sensitive.

 | 

`status='PAYMENT_STATUS_AUTHORISED'`

 |
| 

`!=`

 | 

Not match

 | 

In order to match, the value on the right hand side must not exactly match the field on the left hand side exactly. This is case sensitive.

 | 

`status!='PAYMENT_STATUS_AUTHORISED'`

 |
| 

`~=`

 | 

Prefix match

 | 

In order to match, the value on the left hand side must contain the word or phrase on the right hand side in the same order. The final word is treated as a prefix match. This is case insensitive. For instance, `'quick brown f'` will match `'quick brown fox'`, but not `'quickly brown fox'`.

 | 

`payment_system~='quick brown f'`

 |
| 

`<`

 | 

Less than

 | 

In order to match, the field on the left hand side must be less than the value on the right hand side.

 | 

`create_timestamp<'2024-07-17'`

 |
| 

`>`

 | 

Greater than

 | 

In order to match, the field on the left hand side must be greater than the value on the right hand side.

 | 

`create_timestamp>'2024-07-17'`

 |
| 

`<=`

 | 

Less than or equal to

 | 

In order to match, the field on the left hand side must be less than or equal to the value on the right hand side.

 | 

`create_timestamp⇐'2024-07-17'`

 |
| 

`>=`

 | 

Greater than or equal to

 | 

In order to match, the field on the left hand side must be greater than or equal to the value on the right hand side.

 | 

`create_timestamp>='2024-07-17'`

 |

### [](#boolean_operators "Copy link to heading")Boolean operators

   
| Operator | Name | Description | Example |
| --- | --- | --- | --- |
| 
`AND`

 | 

And

 | 

In order to match, the expression on the left hand side and on the right hand side must both match. It takes precedence over OR.

 | 

`create_timestamp>='2024-07-17' AND payment_system~='Masterca'`

 |
| 

`OR`

 | 

Or

 | 

In order to match, either the expression on the left hand side, or the expression right hand side, or both must match

 | 

`create_timestamp>='2024-07-17' OR status='PAYMENT_STATUS_AUTHORISED'`

 |
| 

`NOT`

 | 

Not

 | 

In order to match, the expression following the NOT must not match. It takes precedence over AND.

 | 

`NOT payment_system~='Masterca'`

 |

### [](#other_symbols "Copy link to heading")Other symbols

   
| Symbol | Name | Description | Example |
| --- | --- | --- | --- |
| 
`()`

 | 

Parentheses

 | 

Parentheses group expressions in order to control order of precedence.

 | 

`create_timestamp>='2024-07-17' AND NOT(payment_system~='Masterca' OR status='PAYMENT_STATUS_AUTHORISED')`

 |

### [](#fields_and_values "Copy link to heading")Fields and values

On the left hand side of a comparison operator should be a field name. These are fields on the Payment resource and a list of all fields available can be found at the bottom of this page.

On the right hand side of a comparison operator should be a value. This can be a string or number. Strings must be wrapped in either double quotes or single quotes. Dates should be represented as a string (i.e. quoted) in a valid date format. Enumerations should also be represented as strings but have a fixed set of values. Value types and valid date formats are listed in the table below.

 
| Value type | Example |
| --- | --- |
| 
string (single quoted)

 | 

`'this is a string value'`

 |
| 

string (double quoted)

 | 

`"this is a string value"`

 |
| 

number

 | 

1.2345

 |
| 

date (`yyyy-MM-dd`)

 | 

`'2024-07-01'`

 |
| 

date (`yyyy-MM-ddTHH:mm:ssZ`)

 | 

`'2024-07-01T12:06:01Z'`

 |
| 

date (`yyyy-MM-ddTHH:mm:ss.SSSSSSZ`)

 | 

`'2024-07-01T12:06:01.445917Z'`

 |
| 

enumeration (for the field `status`)

 | 

`'PAYMENT_STATUS_AUTHORISED'`

 |

#### [](#searching_across_all_fields "Copy link to heading")Searching across all fields

In order to search for a value across every field on the Payment you can use the special token `ANY_FIELD` instead of a field name. This can only be used in combination with the prefix match operator (`~=`). Here is an example:

#### [](#searching_for_empty_fields "Copy link to heading")Searching for empty fields

In order to find Payments where a field has no value you can use the special `NULL` value in your query. This is only valid for exact match (`=`) and not match (`!=`). Here is an example:

### [](#comparison_validity "Copy link to heading")Comparison validity

Not all operators can be used with all fields types. The list of fields at the end of this page indicates the type of each field. Here are the valid comparison operators for each field type:

 
| Field type | Valid comparison operators |
| --- | --- |
| 
Text

 | 

Exact match (`=`), Not match (`!=`), prefix match (`~=`)

 |
| 

Enumeration

 | 

Exact match (`=`), Not match (`!=`)

 |
| 

Date

 | 

Exact match (`=`), Not match (`!=`), less than (`<`), greater than (`>`), less than or equal to (`⇐`), greater than or equal to (`>=`)

 |
| 

Number

 | 

Exact match (`=`), Not match (`!=`), less than (`<`), greater than (`>`), less than or equal to (`⇐`), greater than or equal to (`>=`)

 |

### [](#more_examples "Copy link to heading")More examples

Exact match with a number

`card_payment_data.card_amount.authorised_amount.amount=100`

Exact match with a date

`create_timestamp='2024-07-17T15:21:11.393938Z'`

Less than with a number

`create_timestamp<1000`

Multiple boolean operators.

`create_timestamp>='2024-07-17' AND NOT payment_system~='Masterca' OR status='PAYMENT_STATUS_AUTHORISED'`

### [](#sorting "Copy link to heading")Sorting

By default results are sorted by `create_timestamp` descending and then `id` descending. To sort by different criteria add an `ORDER_BY` clause to the end of your query. This should be followed by one or more fields, each with a direction. The direction can either be `ASC` (ascending) or `DESC` (descending). Here are some examples:

Sorting by `update_timestamp` ascending:

`status='PAYMENT_STATUS_AUTHORISED' ORDER_BY update_timestamp ASC`

Sorting by `instruction_data.authorisation_initiation.settlement_date` descending:

`status='PAYMENT_STATUS_AUTHORISED' ORDER_BY instruction_data.authorisation_initiation.settlement_date DESC`

Sorting by multiple fields:

`status='PAYMENT_STATUS_AUTHORISED' ORDER_BY update_timestamp ASC instruction_data.authorisation_initiation.settlement_date DESC`

### [](#nested_queries "Copy link to heading")Nested queries

It is possible to perform queries against arrays of objects. For instance:

However, each term can match individually against different items in the array. In this example, the query will match Payments which have:

-   an instruction\_data item of type `INSTRUCTION_TYPE_AUTHORISATION_INITIATION` and status `PROCESSING_STATUS_COMPLETED`
    
-   a separate instruction\_data item of type `INSTRUCTION_TYPE_FINANCIAL_INITIATION` and status `PROCESSING_STATUS_ERRORED`.
    

If you want to ensure all conditions are true for a single object in an array then you need to use the nested query syntax:

Where the leading field (`instruction_data`) is a field of type "Nested object" and the fields within the curly braces are children of that nested object (`type` and `processing_status`).

Fields of type "Nested object" are shown in the list of fields below.

## [](#list_of_available_fields "Copy link to heading")List of available fields

These are all the payment fields available for querying.

  
| Field | Type | Enumeration values |
| --- | --- | --- |
| 
`id`

 | 

Text

 |  |
| 

`create_timestamp`

 | 

Date

 |  |
| 

`update_timestamp`

 | 

Date

 |  |
| 

`type`

 | 

Enumeration

 | 

PAYMENT\_TYPE\_UNKNOWN  
PAYMENT\_TYPE\_UNSUPPORTED  
PAYMENT\_TYPE\_CREDIT\_TRANSFER  
PAYMENT\_TYPE\_FEE\_COLLECTION  
PAYMENT\_TYPE\_DIRECT\_DEBIT  
PAYMENT\_TYPE\_CARD  
PAYMENT\_TYPE\_WALLET  
PAYMENT\_TYPE\_ACCOUNT\_TRANSFER  
PAYMENT\_TYPE\_ADMIN

 |
| 

`channel`

 | 

Enumeration

 | 

CHANNEL\_UNKNOWN  
CHANNEL\_POS  
CHANNEL\_ATM  
CHANNEL\_IN\_APP  
CHANNEL\_MERCHANT  
CHANNEL\_P2P

 |
| 

`action`

 | 

Enumeration

 | 

ACTION\_UNKNOWN  
ACTION\_FINANCIAL  
ACTION\_INQUIRY  
ACTION\_NOTIFICATION  
ACTION\_MANAGEMENT

 |
| 

`reason`

 | 

Enumeration

 | 

REASON\_UNKNOWN  
REASON\_PURCHASE  
REASON\_REFUND  
REASON\_CHARGEBACK  
REASON\_REPRESENTMENT  
REASON\_FEE

 |
| 

`card_payment_data.card_amount.authorised_amount.amount`

 | 

Number

 |  |
| 

`card_payment_data.card_amount.authorised_amount.currency`

 | 

Text

 |  |
| 

`card_payment_data.card_amount.cleared_amount.amount`

 | 

Number

 |  |
| 

`card_payment_data.card_amount.cleared_amount.currency`

 | 

Text

 |  |
| 

`card_payment_data.card_amount.settled_amount.amount`

 | 

Number

 |  |
| 

`card_payment_data.card_amount.settled_amount.currency`

 | 

Text

 |  |
| 

`card_payment_data.settlement_date`

 | 

Date

 |  |
| 

`card_payment_data.expiry_date`

 | 

Date

 |  |
| 

`card_payment_data.completed`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`card_payment_data.entry`

 | 

Enumeration

 | 

ENTRY\_UNKNOWN  
ENTRY\_CREDIT  
ENTRY\_DEBIT

 |
| 

`card_payment_data.pan_last_digits`

 | 

Text

 |  |
| 

`card_payment_data.card_id`

 | 

Text

 |  |
| 

`credit_transfer_payment_data.credit_transfer_amount.instructed_amount.amount`

 | 

Number

 |  |
| 

`credit_transfer_payment_data.credit_transfer_amount.instructed_amount.currency`

 | 

Text

 |  |
| 

`credit_transfer_payment_data.credit_transfer_amount.returned_amount.amount`

 | 

Number

 |  |
| 

`credit_transfer_payment_data.credit_transfer_amount.returned_amount.currency`

 | 

Text

 |  |
| 

`credit_transfer_payment_data.credit_transfer_amount.interbank_settlement_amount.amount`

 | 

Number

 |  |
| 

`credit_transfer_payment_data.credit_transfer_amount.interbank_settlement_amount.currency`

 | 

Text

 |  |
| 

`credit_transfer_payment_data.settlement_date`

 | 

Date

 |  |
| 

`credit_transfer_payment_data.return_settlement_date`

 | 

Date

 |  |
| 

`fee_collection_payment_data.fee_collection_amount.fee_amount.amount`

 | 

Number

 |  |
| 

`fee_collection_payment_data.fee_collection_amount.fee_amount.currency`

 | 

Text

 |  |
| 

`fee_collection_payment_data.fee_collection_amount.reconciliation_amount.amount`

 | 

Number

 |  |
| 

`fee_collection_payment_data.fee_collection_amount.reconciliation_amount.currency`

 | 

Text

 |  |
| 

`fee_collection_payment_data.fee_collection_amount.reconciliation_amount.effective_exchange_rate`

 | 

Text

 |  |
| 

`fee_collection_payment_data.fee_collection_amount.reconciliation_amount.conversion_date`

 | 

Date

 |  |
| 

`fee_collection_payment_data.clearing_date`

 | 

Date

 |  |
| 

`fee_collection_payment_data.settlement_date`

 | 

Date

 |  |
| 

`direct_debit_payment_data.direct_debit_amount.instructed_amount.amount`

 | 

Number

 |  |
| 

`direct_debit_payment_data.direct_debit_amount.instructed_amount.currency`

 | 

Text

 |  |
| 

`direct_debit_payment_data.direct_debit_amount.returned_amount.amount`

 | 

Number

 |  |
| 

`direct_debit_payment_data.direct_debit_amount.returned_amount.currency`

 | 

Text

 |  |
| 

`direct_debit_payment_data.direct_debit_amount.interbank_settlement_amount.amount`

 | 

Number

 |  |
| 

`direct_debit_payment_data.direct_debit_amount.interbank_settlement_amount.currency`

 | 

Text

 |  |
| 

`direct_debit_payment_data.settlement_date`

 | 

Date

 |  |
| 

`direct_debit_payment_data.return_settlement_date`

 | 

Date

 |  |
| 

`status`

 | 

Enumeration

 | 

PAYMENT\_STATUS\_UNKNOWN  
PAYMENT\_STATUS\_PROCESSING  
PAYMENT\_STATUS\_ERRORED  
PAYMENT\_STATUS\_AUTHORISED  
PAYMENT\_STATUS\_AUTHORISATION\_REJECTED  
PAYMENT\_STATUS\_PARTIALLY\_CLEARED  
PAYMENT\_STATUS\_CLEARED  
PAYMENT\_STATUS\_REVERSED  
PAYMENT\_STATUS\_EXPIRED  
PAYMENT\_STATUS\_REJECTED  
PAYMENT\_STATUS\_RECEIVED  
PAYMENT\_STATUS\_INITIATED  
PAYMENT\_STATUS\_CANCELLED  
PAYMENT\_STATUS\_SETTLED  
PAYMENT\_STATUS\_PIN\_CHANGED  
PAYMENT\_STATUS\_PIN\_CHANGE\_REJECTED  
PAYMENT\_STATUS\_PIN\_CHANGE\_REVERSED  
PAYMENT\_STATUS\_PIN\_UNBLOCKED  
PAYMENT\_STATUS\_PIN\_UNBLOCK\_REJECTED  
PAYMENT\_STATUS\_PIN\_UNBLOCK\_REVERSED  
PAYMENT\_STATUS\_RETURNED  
PAYMENT\_STATUS\_SCHEDULED  
PAYMENT\_STATUS\_ACCEPTED  
PAYMENT\_STATUS\_RECALL\_REQUESTED

 |
| 

`payment_processing_error_reasons`

 | 

Text

 |  |
| 

`payment_system`

 | 

Text

 |  |
| 

`scheme`

 | 

Text

 |  |
| 

`instruction_data`

 | 

Nested object

 |  |
| 

`instruction_data.id`

 | 

Text

 |  |
| 

`instruction_data.payment_system`

 | 

Text

 |  |
| 

`instruction_data.scheme`

 | 

Text

 |  |
| 

`instruction_data.direction`

 | 

Enumeration

 | 

INSTRUCTION\_DIRECTION\_UNKNOWN  
INSTRUCTION\_DIRECTION\_INBOUND  
INSTRUCTION\_DIRECTION\_OUTBOUND

 |
| 

`instruction_data.processing_status`

 | 

Enumeration

 | 

PROCESSING\_STATUS\_UNKNOWN  
PROCESSING\_STATUS\_COMPLETED  
PROCESSING\_STATUS\_ERRORED  
PROCESSING\_STATUS\_IN\_PROGRESS  
PROCESSING\_STATUS\_CANCELLED  
PROCESSING\_STATUS\_WAITING  
PROCESSING\_STATUS\_QUEUED  
PROCESSING\_STATUS\_INTERRUPTED

 |
| 

`instruction_data.processing_error_code`

 | 

Enumeration

 | 

OK  
CANCELLED  
UNKNOWN  
INVALID\_ARGUMENT  
DEADLINE\_EXCEEDED  
NOT\_FOUND  
ALREADY\_EXISTS  
PERMISSION\_DENIED  
UNAUTHENTICATED  
RESOURCE\_EXHAUSTED  
FAILED\_PRECONDITION  
ABORTED  
OUT\_OF\_RANGE  
UNIMPLEMENTED  
INTERNAL  
UNAVAILABLE  
DATA\_LOSS

 |
| 

`instruction_data.outcome`

 | 

Enumeration

 | 

OUTCOME\_UNKNOWN  
OUTCOME\_PENDING  
OUTCOME\_ACCEPTED  
OUTCOME\_REJECTED

 |
| 

`instruction_data.instruction_flow_id`

 | 

Text

 |  |
| 

`instruction_data.instruction_flow_version_id`

 | 

Text

 |  |
| 

`instruction_data.type`

 | 

Enumeration

 | 

INSTRUCTION\_TYPE\_UNKNOWN  
INSTRUCTION\_TYPE\_AUTHORISATION\_INITIATION  
INSTRUCTION\_TYPE\_INQUIRY\_INITIATION  
INSTRUCTION\_TYPE\_FI\_TO\_FI\_CUSTOMER\_CREDIT\_TRANSFER  
INSTRUCTION\_TYPE\_FINANCIAL\_INITIATION  
INSTRUCTION\_TYPE\_FEE\_COLLECTION\_INITIATION  
INSTRUCTION\_TYPE\_REVERSAL\_INITIATION  
INSTRUCTION\_TYPE\_CARD\_MANAGEMENT\_INITIATION  
INSTRUCTION\_TYPE\_FI\_TO\_FI\_PAYMENT\_STATUS\_REPORT  
INSTRUCTION\_TYPE\_FI\_TO\_FI\_PAYMENT\_STATUS\_REQUEST  
INSTRUCTION\_TYPE\_FI\_TO\_FI\_PAYMENT\_CANCELLATION\_REQUEST  
INSTRUCTION\_TYPE\_RESOLUTION\_OF\_INVESTIGATION  
INSTRUCTION\_TYPE\_PAYMENT\_RETURN  
INSTRUCTION\_TYPE\_CHARGEBACK\_INITIATION  
INSTRUCTION\_TYPE\_ADMINISTRATIVE\_INITIATION  
INSTRUCTION\_TYPE\_CREDIT\_TRANSFER\_INITIATION  
INSTRUCTION\_TYPE\_FI\_TO\_FI\_CUSTOMER\_DIRECT\_DEBIT  
INSTRUCTION\_TYPE\_DIRECT\_DEBIT\_INITIATION  
INSTRUCTION\_TYPE\_RECEIPT\_ACKNOWLEDGEMENT  
INSTRUCTION\_TYPE\_FINANCIAL\_INSTITUTION\_CREDIT\_TRANSFER  
INSTRUCTION\_TYPE\_FOREIGN\_EXCHANGE\_TRADE\_INSTRUCTION  
INSTRUCTION\_TYPE\_MANDATE\_INITIATION\_REQUEST  
INSTRUCTION\_TYPE\_MANDATE\_AMENDMENT\_REQUEST  
INSTRUCTION\_TYPE\_MANDATE\_CANCELLATION\_REQUEST  
INSTRUCTION\_TYPE\_MANDATE\_ACCEPTANCE\_REPORT  
INSTRUCTION\_TYPE\_BANK\_TO\_CUSTOMER\_DEBIT\_CREDIT\_NOTIFICATION  
INSTRUCTION\_TYPE\_NETWORK\_MANAGEMENT\_INITIATION  
INSTRUCTION\_TYPE\_FILE\_ACTION\_INITIATION  
INSTRUCTION\_TYPE\_FRAUD\_DISPOSITION\_INITIATION  
INSTRUCTION\_TYPE\_CREDITOR\_PAYMENT\_ACTIVATION\_REQUEST  
INSTRUCTION\_TYPE\_CREDITOR\_PAYMENT\_ACTIVATION\_REQUEST\_STATUS\_REPORT  
INSTRUCTION\_TYPE\_CUSTOMER\_PAYMENT\_STATUS\_REPORT  
INSTRUCTION\_TYPE\_MESSAGE\_REJECT  
INSTRUCTION\_TYPE\_INVESTIGATION\_REQUEST  
INSTRUCTION\_TYPE\_INVESTIGATION\_RESPONSE  
INSTRUCTION\_TYPE\_BANK\_TO\_CUSTOMER\_ACCOUNT\_REPORT  
INSTRUCTION\_TYPE\_SYSTEM\_EVENT\_NOTIFICATION  
INSTRUCTION\_TYPE\_CLAIM\_NON\_RECEIPT  
INSTRUCTION\_TYPE\_REQUEST\_TO\_MODIFY\_PAYMENT  
INSTRUCTION\_TYPE\_ACCOUNT\_REPORTING\_REQUEST  
INSTRUCTION\_TYPE\_FI\_TO\_FI\_PAYMENT\_REVERSAL  
INSTRUCTION\_TYPE\_IDENTIFICATION\_MODIFICATION\_ADVICE  
INSTRUCTION\_TYPE\_IDENTIFICATION\_VERIFICATION\_REQUEST  
INSTRUCTION\_TYPE\_IDENTIFICATION\_VERIFICATION\_REPORT

 |
| 

`instruction_data.tags`

 | 

Enumeration

 | 

INSTRUCTION\_TAG\_UNKNOWN  
INSTRUCTION\_TAG\_CARD\_ACQUIRER\_REVERSAL  
INSTRUCTION\_TAG\_ADMIN\_EXPIRY\_REVERSAL  
INSTRUCTION\_TAG\_STATUS\_REPORT\_CREDIT\_TRANSFER  
INSTRUCTION\_TAG\_STATUS\_REPORT\_RETURN  
INSTRUCTION\_TAG\_RECALL\_RESPONSE

 |
| 

`instruction_data.manual_intervention`

 | 

Enumeration

 | 

MANUAL\_INTERVENTION\_UNKNOWN  
MANUAL\_INTERVENTION\_NONE  
MANUAL\_INTERVENTION\_TECHNICAL\_ERROR  
MANUAL\_INTERVENTION\_DECISION\_REQUIRED  
MANUAL\_INTERVENTION\_ISSUE

 |
| 

`instruction_data.customer_credit_transfer_initiation.requested_execution_date`

 | 

Date

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.debtor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.debtor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.creditor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.creditor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.debtor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.debtor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.debtor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.debtor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.creditor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.creditor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.creditor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.creditor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.amount.instructed_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.amount.instructed_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.amount.equivalent_amount.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.amount.equivalent_amount.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.amount.equivalent_amount.currency_of_transfer`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.message_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_credit_transfer_initiation.end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_payment_status_report.message_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_payment_status_report.transaction_status`

 | 

Text

 |  |
| 

`instruction_data.customer_payment_status_report.reason_code`

 | 

Text

 |  |
| 

`instruction_data.customer_payment_status_report.original_instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_payment_status_report.original_end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_payment_status_report.original_uetr`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.requested_execution_date`

 | 

Date

 |  |
| 

`instruction_data.customer_direct_debit_initiation.requested_collection_date`

 | 

Date

 |  |
| 

`instruction_data.customer_direct_debit_initiation.instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.debtor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.debtor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.creditor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.creditor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.debtor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.debtor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.debtor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.debtor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.creditor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.creditor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.creditor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.creditor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.amount.instructed_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.customer_direct_debit_initiation.amount.instructed_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.amount.equivalent_amount.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.customer_direct_debit_initiation.amount.equivalent_amount.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.amount.equivalent_amount.currency_of_transfer`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.instructed_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.customer_direct_debit_initiation.instructed_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.message_identification`

 | 

Text

 |  |
| 

`instruction_data.customer_direct_debit_initiation.end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.message_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.uetr`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.requested_execution_date`

 | 

Date

 |  |
| 

`instruction_data.creditor_payment_activation_request.amount.instructed_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.creditor_payment_activation_request.amount.instructed_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.amount.equivalent_amount.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.creditor_payment_activation_request.amount.equivalent_amount.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.amount.equivalent_amount.currency_of_transfer`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.debtor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.debtor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.debtor_account_type_code`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.creditor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.creditor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.creditor_account_type_code`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.debtor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.debtor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.debtor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.creditor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.creditor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request.creditor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request_status_report.message_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request_status_report.transaction_status`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request_status_report.reason_code`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request_status_report.original_instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request_status_report.original_end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.creditor_payment_activation_request_status_report.original_uetr`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_status_report.status_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_status_report.transaction_status`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_status_report.message_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_status_report.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.transaction_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.uetr`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.clearing_system_reference`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.debtor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.debtor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.creditor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.creditor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.debtor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.debtor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.debtor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.debtor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.creditor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.creditor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.creditor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.creditor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.interbank_settlement_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.interbank_settlement_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_direct_debit.message_identification`

 | 

Text

 |  |
| 

`instruction_data.payment_return.return_identification`

 | 

Text

 |  |
| 

`instruction_data.payment_return.returned_interbank_settlement_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.payment_return.returned_interbank_settlement_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.payment_return.message_identification`

 | 

Text

 |  |
| 

`instruction_data.payment_return.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.transaction_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.uetr`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.clearing_system_reference`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.debtor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.debtor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.creditor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.creditor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.debtor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.debtor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.debtor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.debtor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.creditor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.creditor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.creditor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.creditor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.interbank_settlement_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.interbank_settlement_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.acceptance_date_time`

 | 

Date

 |  |
| 

`instruction_data.fi_to_fi_customer_credit_transfer.message_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.message_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.instruction_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.transaction_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.uetr`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.interbank_settlement_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.financial_institution_credit_transfer.interbank_settlement_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.clearing_system_reference`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.debtor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.debtor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.creditor_account_iban`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.creditor_account_other_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.debtor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.debtor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.debtor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.debtor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.creditor_agent_bicfi`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.creditor_agent_clearing_system_member_id`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.creditor_agent_lei`

 | 

Text

 |  |
| 

`instruction_data.financial_institution_credit_transfer.creditor_agent_name`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_status_request.message_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_status_request.status_request_identification`

 | 

Text

 |  |
| 

`instruction_data.resolution_of_investigation.confirmation`

 | 

Text

 |  |
| 

`instruction_data.resolution_of_investigation.assignment_cancellation_confirmation`

 | 

Text

 |  |
| 

`instruction_data.resolution_of_investigation.reason_code`

 | 

Text

 |  |
| 

`instruction_data.resolution_of_investigation.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.bank_to_customer_account_report.message_identification`

 | 

Text

 |  |
| 

`instruction_data.bank_to_customer_account_report.report_identification`

 | 

Text

 |  |
| 

`instruction_data.bank_to_customer_debit_credit_notification.message_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.cancellation_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.reason_code`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.additional_information`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.assignment_identification`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.assigner`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.assignee`

 | 

Text

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.fi_to_fi_payment_cancellation_request.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.investigation_request.message_identification`

 | 

Text

 |  |
| 

`instruction_data.investigation_request.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.investigation_request.investigation_type`

 | 

Text

 |  |
| 

`instruction_data.investigation_response.message_identification`

 | 

Text

 |  |
| 

`instruction_data.investigation_response.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.investigation_response.investigation_type`

 | 

Text

 |  |
| 

`instruction_data.investigation_response.investigation_status`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.assigner_anybic`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.assigner_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.assignee_anybic`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.assignee_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.claim_non_receipt.case_identification`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.original_end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.claim_non_receipt.original_interbank_settlement_date`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.assigner_anybic`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.assigner_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.assignee_anybic`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.assignee_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.request_to_modify_payment.case_identification`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.original_end_to_end_identification`

 | 

Text

 |  |
| 

`instruction_data.request_to_modify_payment.original_interbank_settlement_date`

 | 

Text

 |  |
| 

`instruction_data.file_action_initiation.status`

 | 

Enumeration

 | 

CARD\_STATUS\_UNKNOWN  
CARD\_STATUS\_PENDING\_CREATION  
CARD\_STATUS\_INACTIVE  
CARD\_STATUS\_ACTIVE  
CARD\_STATUS\_DIGITALLY\_ACTIVE  
CARD\_STATUS\_SUSPENDED  
CARD\_STATUS\_DIGITALLY\_SUSPENDED  
CARD\_STATUS\_DISABLED

 |
| 

`instruction_data.identification_modification_advice.assignment_identification`

 | 

Text

 |  |
| 

`instruction_data.identification_modification_advice.assigner_anybic`

 | 

Text

 |  |
| 

`instruction_data.identification_modification_advice.assigner_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.identification_modification_advice.assignee_anybic`

 | 

Text

 |  |
| 

`instruction_data.identification_modification_advice.assignee_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.identification_modification_advice.assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.identification_modification_advice.original_message_identification`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_request.assignment_identification`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_request.assigner_anybic`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_request.assigner_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_request.assignee_anybic`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_request.assignee_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_request.assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.identification_verification_report.assignment_identification`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_report.assigner_anybic`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_report.assigner_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_report.assignee_anybic`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_report.assignee_other_identifications`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_report.assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.identification_verification_report.original_assignment_identification`

 | 

Text

 |  |
| 

`instruction_data.identification_verification_report.original_assignment_creation_date_time`

 | 

Date

 |  |
| 

`instruction_data.system_event_notification.event_code`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.acquirer_identification`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.acceptor_identification`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.acceptor_short_name`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.acceptor_country`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.acceptor_name_and_location`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.card_present`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.authorisation_initiation.ecommerce_indicator`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.authorisation_initiation.partial_approval_supported`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.authorisation_initiation.card_data_entry_mode`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.pos_country`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.transaction_type`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.merchant_category_code`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.settlement_date`

 | 

Date

 |  |
| 

`instruction_data.authorisation_initiation.card_id`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.original_lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.authorisation_initiation.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.authorisation_initiation.message_reason`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.acquirer_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.acceptor_identification`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.acceptor_short_name`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.acceptor_country`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.acceptor_name_and_location`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.card_present`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.financial_initiation.ecommerce_indicator`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.financial_initiation.partial_approval_supported`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.financial_initiation.card_data_entry_mode`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.pos_country`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.transaction_type`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.message_reason`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.merchant_category_code`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.settlement_date`

 | 

Date

 |  |
| 

`instruction_data.financial_initiation.interchange_rate_designator`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.message_function`

 | 

Enumeration

 | 

MESSAGE\_FUNCTION\_UNKNOWN  
MESSAGE\_FUNCTION\_ADVICE  
MESSAGE\_FUNCTION\_NOTIFICATION  
MESSAGE\_FUNCTION\_CAPTURE\_ADVICE  
MESSAGE\_FUNCTION\_CAPTURE\_NOTIFICATION  
MESSAGE\_FUNCTION\_REQUEST  
MESSAGE\_FUNCTION\_ACQUIRER\_REVERSAL\_REQUEST  
MESSAGE\_FUNCTION\_REVERSAL\_NOTIFICATION

 |
| 

`instruction_data.financial_initiation.lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.financial_initiation.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.financial_initiation.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.response_code`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.acquirer_identification`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.acceptor_identification`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.acceptor_short_name`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.acceptor_country`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.acceptor_name_and_location`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.card_present`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.reversal_initiation.partial_approval_supported`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.reversal_initiation.pos_country`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.transaction_type`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.merchant_category_code`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.settlement_date`

 | 

Date

 |  |
| 

`instruction_data.reversal_initiation.card_id`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.original_lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.reversal_initiation.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.billing_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.reversal_initiation.billing_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.billing_amount.effective_exchange_rate`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.billing_amount.conversion_date`

 | 

Date

 |  |
| 

`instruction_data.reversal_initiation.original_transaction_amount.amount`

 | 

Number

 |  |
| 

`instruction_data.reversal_initiation.original_transaction_amount.currency`

 | 

Text

 |  |
| 

`instruction_data.reversal_initiation.message_reason`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.card_present`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.inquiry_initiation.ecommerce_indicator`

 | 

Enumeration

 | 

BOOLEAN\_UNKNOWN  
BOOLEAN\_TRUE  
BOOLEAN\_FALSE

 |
| 

`instruction_data.inquiry_initiation.acquirer_identification`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.acceptor_identification`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.acceptor_short_name`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.acceptor_country`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.acceptor_name_and_location`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.card_data_entry_mode`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.pos_country`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.transaction_type`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.transaction_currency`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.merchant_category_code`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.settlement_date`

 | 

Date

 |  |
| 

`instruction_data.inquiry_initiation.card_id`

 | 

Text

 |  |
| 

`instruction_data.inquiry_initiation.lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.acquirer_identification`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.acceptor_identification`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.acceptor_short_name`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.acceptor_country`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.acceptor_name_and_location`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.card_data_entry_mode`

 | 

Enumeration

 | 

CARD\_DATA\_READING\_CAPABILITIES\_UNKNOWN  
CARD\_DATA\_READING\_CAPABILITIES\_ICC\_PROXIMITY  
CARD\_DATA\_READING\_CAPABILITIES\_MAGNETIC\_STRIPE  
CARD\_DATA\_READING\_CAPABILITIES\_ICC\_CONTACT  
CARD\_DATA\_READING\_CAPABILITIES\_MAGNETIC\_INK\_CHARACTER\_RECOGNITION  
CARD\_DATA\_READING\_CAPABILITIES\_MANUAL\_ENTRY  
CARD\_DATA\_READING\_CAPABILITIES\_OPTICAL\_CHARACTER\_RECOGNITION  
CARD\_DATA\_READING\_CAPABILITIES\_MSI\_PROXIMITY  
CARD\_DATA\_READING\_CAPABILITIES\_OPTICAL\_CODE  
CARD\_DATA\_READING\_CAPABILITIES\_OTHER\_NATIONAL  
CARD\_DATA\_READING\_CAPABILITIES\_RFID\_TAG  
CARD\_DATA\_READING\_CAPABILITIES\_UNSPECIFIED  
CARD\_DATA\_READING\_CAPABILITIES\_OTHER\_PRIVATE  
CARD\_DATA\_READING\_CAPABILITIES\_KEY\_ENTERED  
CARD\_DATA\_READING\_CAPABILITIES\_CARD\_ON\_FILE

 |
| 

`instruction_data.card_management_initiation.pos_country`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.transaction_type`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.merchant_category_code`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.settlement_date`

 | 

Date

 |  |
| 

`instruction_data.card_management_initiation.card_id`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.original_lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.card_management_initiation.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.additional_fees.type`

 | 

Enumeration

 | 

TYPE\_OF\_FEE\_UNKNOWN  
TYPE\_OF\_FEE\_INTERCHANGE\_FEE  
TYPE\_OF\_FEE\_PROCESSING\_FEES  
TYPE\_OF\_FEE\_OTHER\_NATIONAL  
TYPE\_OF\_FEE\_OTHER\_PRIVATE  
TYPE\_OF\_FEE\_INTERNATIONAL\_SERVICE\_ASSESMENT\_FEES  
TYPE\_OF\_FEE\_CASH\_BACK\_INTERCHANGE\_FEE  
TYPE\_OF\_FEE\_MAXIMUM\_INTERCHANGE\_FEE  
TYPE\_OF\_FEE\_MINIMUM\_INTERCHANGE\_FEE

 |
| 

`instruction_data.card_management_initiation.additional_fees.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.card_management_initiation.additional_fees.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.additional_fees.amount.effective_exchange_rate`

 | 

Text

 |  |
| 

`instruction_data.card_management_initiation.additional_fees.amount.conversion_date`

 | 

Date

 |  |
| 

`instruction_data.card_management_initiation.additional_fees.amount.credit_debit`

 | 

Enumeration

 | 

CREDIT\_DEBIT\_UNKNOWN  
CREDIT\_DEBIT\_CREDIT  
CREDIT\_DEBIT\_DEBIT

 |
| 

`instruction_data.administrative_initiation.alternate_message_reason`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.message_function`

 | 

Enumeration

 | 

MESSAGE\_FUNCTION\_UNKNOWN  
MESSAGE\_FUNCTION\_ADVICE  
MESSAGE\_FUNCTION\_NOTIFICATION  
MESSAGE\_FUNCTION\_CAPTURE\_ADVICE  
MESSAGE\_FUNCTION\_CAPTURE\_NOTIFICATION  
MESSAGE\_FUNCTION\_REQUEST  
MESSAGE\_FUNCTION\_ACQUIRER\_REVERSAL\_REQUEST  
MESSAGE\_FUNCTION\_REVERSAL\_NOTIFICATION

 |
| 

`instruction_data.fee_collection_initiation.sender_identification`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.receiver_identification`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.settlement_date`

 | 

Date

 |  |
| 

`instruction_data.fee_collection_initiation.transaction_type`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.message_reason`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.lifecycle_trace_id`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.fee_collection_control_number`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.amount.amount`

 | 

Number

 |  |
| 

`instruction_data.fee_collection_initiation.amount.currency`

 | 

Text

 |  |
| 

`instruction_data.fee_collection_initiation.merchant_category_code`

 | 

Text

 |  |
| 

`instruction_data.payment_instrument_id`

 | 

Text

 |  |
| 

`instruction_data.correlation_id`

 | 

Text

 |  |
| 

`instruction_data.outcome_reason`

 | 

Text

 |  |
| 

`instruction_data.manual_decision_display_name`

 | 

Text

 |  |
| 

`instruction_data.create_timestamp`

 | 

Date

 |  |
| 

`instruction_data.update_timestamp`

 | 

Date

 |  |
| 

`instruction_data.issues`

 | 

Nested object

 |  |
| 

`instruction_data.issues.issue`

 | 

Text

 |  |
| 

`instruction_data.issues.code`

 | 

Text

 |  |
| 

`instruction_data.initiating_user_id`

 | 

Text

 |  |
| 

`instruction_data.core_account_id`

 | 

Text

 |  |
| 

`instruction_data.batch_processing_data.received_file.instruction_batch_id`

 | 

Text

 |  |
| 

`instruction_data.batch_processing_data.received_file.instruction_file_id`

 | 

Text

 |  |
| 

`instruction_data.batch_processing_data.generated_files`

 | 

Nested object

 |  |
| 

`instruction_data.batch_processing_data.generated_files.instruction_batch_id`

 | 

Text

 |  |
| 

`instruction_data.batch_processing_data.generated_files.instruction_file_id`

 | 

Text

 |  |
| 

`direction`

 | 

Enumeration

 | 

PAYMENT\_DIRECTION\_UNKNOWN  
PAYMENT\_DIRECTION\_INBOUND  
PAYMENT\_DIRECTION\_OUTBOUND  
PAYMENT\_DIRECTION\_ONUS

 |
| 

`payment_parties.payer`

 | 

Text

 |  |
| 

`payment_parties.payee`

 | 

Text

 |  |
| 

`payment_parties.payee_id`

 | 

Text

 |  |