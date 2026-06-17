---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_customer_credit_transfer"
title: "Fi To Fi Customer Credit Transfer"
scraped_at: "2026-06-17T05:10:49.752Z"
images: 0
---

# Fi To Fi Customer Credit Transfer

`flows_api.schemes.eu.tips.fi_to_fi_customer_credit_transfer` module

## [](#recommends_debtor_address "Copy link to heading")recommends\_debtor\_address

Determines whether the debtor address is recommended by TIPS, based on the contents of the provided FIToFICustomerCreditTransfer.

This method assumes that a valid BIC is present in the `debtor_agent.financial_institution_identification.bicfi` field.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit_transfer`

 | 

`[FIToFICustomerCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransfer)`

 | 

The FIToFICustomerCreditTransfer message to be checked.  
:returns: Whether the debtor address is recommended.

 |

## [](#validate_fi_to_fi_customer_credit_transfer "Copy link to heading")validate\_fi\_to\_fi\_customer\_credit\_transfer

Validates a FIToFICustomerCreditTransfer (pacs.008) message against the TIPS specification (as of the UDFS TIPS R2025.JUN release).

Only pacs.008.01.08 is supported by this method.

Note TIPS specific validation is not performed on the contents of `credit_transfer_transaction_information[0].remittance_information`.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit_transfer`

 | 

`[FIToFICustomerCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransfer)`

 | 

The FIToFICustomerCreditTransfer (pacs.008) message to be validated.  
:returns: The result of the validation, indicating success or failure.

 |

## [](#validate_transaction_limit "Copy link to heading")validate\_transaction\_limit

Validates whether the provided transaction amount is within the specified transaction limit. `validate_transaction_limit` is deprecated and will be removed in a future release. Use `validate_transaction_limit_fi_to_fi_customer_credit_transfer` instead.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit_transfer`

 | 

`[FIToFICustomerCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransfer)`

 | 

The FIToFICustomerCreditTransfer message.

 |
| 

`transaction_limit`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The maximum allowable transaction limit for the scheme.  
:returns: The result of the validation, indicating success or failure.

 |

## [](#validate_transaction_limit_fi_to_fi_customer_credit_transfer "Copy link to heading")validate\_transaction\_limit\_fi\_to\_fi\_customer\_credit\_transfer

Validates whether the provided transaction amount is within the specified transaction limit.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit_transfer`

 | 

`[FIToFICustomerCreditTransfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer#FIToFICustomerCreditTransfer)`

 | 

The FIToFICustomerCreditTransfer message.

 |
| 

`transaction_limit`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The maximum allowable transaction limit for the scheme or PSP.  
:returns: The result of the validation, indicating success or failure.

 |

## [](#within_target_maximum_execution_time "Copy link to heading")within\_target\_maximum\_execution\_time

Determines if the supplied Instruction was received within the target SEPA Instant maximum execution time.

This check is based on the `creation_timestamp` of the Instruction and the `acceptance_date_time` of the FIToFICustomerCreditTransfer. This method assumes that a valid FIToFICustomerCreditTransfer Instruction is supplied.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`instr`

 | 

`[Instruction](/vault-payments/latest/EN/api/flows/flows_api/instruction#Instruction)`

 | 

The Instruction that is to be checked.

 |
| 

`target_max_execution_time`

 | 

`timedelta`

 | 

The SEPA Instant maximum execution time offset to check that the Instruction `create_timestamp` is within. Defaults to 10 seconds.  
:returns: Whether the Instruction was received within the target maximum execution time.

 |