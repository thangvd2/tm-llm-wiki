---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/payment_return"
title: "Payment Return"
scraped_at: "2026-06-17T05:10:56.920Z"
images: 0
---

# Payment Return

`flows_api.schemes.eu.tips.payment_return` module

## [](#validate_payment_return "Copy link to heading")validate\_payment\_return

Validates a `PaymentReturn` (pacs.004) message against the TIPS specification (as of the UDFS TIPS R2025.JUN release).

This method ensures that the `PaymentReturn` message complies with the expected format and business rules defined in the JUNE 2025 TIPS specification.

Note TIPS specific validation is not performed on the contents of `transaction_information[0].original_transaction_reference.remittance_information`.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_return`

 | 

`[PaymentReturn](/vault-payments/latest/EN/api/flows/flows_api/payloads/paymentreturn#PaymentReturn)`

 | 

The `PaymentReturn` (pacs.004) message that is to be validated.  
:returns: The result of the validation, indicating success or failure.

 |