---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_payment_cancellation_request"
title: "Fi To Fi Payment Cancellation Request"
scraped_at: "2026-06-17T05:10:51.536Z"
images: 0
---

# Fi To Fi Payment Cancellation Request

`flows_api.schemes.eu.tips.fi_to_fi_payment_cancellation_request` module

## [](#validate_fi_to_fi_payment_cancellation_request "Copy link to heading")validate\_fi\_to\_fi\_payment\_cancellation\_request

Validates a `FIToFIPaymentCancellationRequest` (`camt.056`) message against the TIPS specification (as of the UDFS TIPS R2025.JUN release).

Only `camt.056.01.08` is currently supported by this method.

Note TIPS specific validation is not performed on the contents of `underlying[0].transaction_information[0].original_transaction_reference.remittance_information`.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`cancellation_request`

 | 

`[FIToFIPaymentCancellationRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentcancellationrequest#FIToFIPaymentCancellationRequest)`

 | 

The `FIToFIPaymentCancellationRequest` (`camt.056`) message that is to be validated.  
:returns: The result of the validation, indicating success or failure.

 |