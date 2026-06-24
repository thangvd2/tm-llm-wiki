---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/customer_credit_transfer_initiation"
title: "Customer Credit Transfer Initiation"
scraped_at: "2026-06-17T15:49:08.126Z"
images: 0
---

# Customer Credit Transfer Initiation

`flows_api.schemes.eu.tips.customer_credit_transfer_initiation` module

## [](#validate_customer_credit_transfer_initiation "Copy link to heading")validate\_customer\_credit\_transfer\_initiation

Validates a CustomerCreditTransfer (pain.001) message against the EPC specification (as per the SEPA Instant Credit Transfer Customer-to-PSP IGs 2023 Version 1.2 document).

Only pain.001.001.09 is currently supported. Additionally, this method expects `number_of_transactions` to be equal to 1.

Note TIPS specific validation is not performed on the contents of `payment_information[0].credit_transfer_transaction_information[0].related_remittance_information` and `payment_information[0].credit_transfer_transaction_information[0].remittance_information`.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`customer_credit_transfer_initiation`

 | 

`[CustomerCreditTransferInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation#CustomerCreditTransferInitiation)`

 | 

The CustomerCreditTransferInitiation (pain.001) message to be validated.  
:returns: The result of the validation, indicating success or failure.

 |

## [](#validate_transaction_limit_customer_credit_transfer_initiation "Copy link to heading")validate\_transaction\_limit\_customer\_credit\_transfer\_initiation

Validates whether the provided transaction amount is within the specified transaction limit.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`customer_credit_transfer_initiation`

 | 

`[CustomerCreditTransferInitiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation#CustomerCreditTransferInitiation)`

 | 

The CustomerCreditTransferInitiation message.

 |
| 

`transaction_limit`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The maximum allowable transaction limit for the scheme or PSP.  
:returns: The result of the validation, indicating success or failure.

 |