---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_payment_status_request"
title: "Fi To Fi Payment Status Request"
scraped_at: "2026-06-17T05:10:55.111Z"
images: 0
---

# Fi To Fi Payment Status Request

`flows_api.schemes.eu.tips.fi_to_fi_payment_status_request` module

## [](#validate_fi_to_fi_payment_status_request "Copy link to heading")validate\_fi\_to\_fi\_payment\_status\_request

Validates a `FIToFIPaymentStatusRequest` (pacs.028) message against the TIPS specification (as of the UDFS TIPS R2025.JUN release).

This method ensures that the `FIToFIPaymentStatusRequest` message complies with the expected format and business rules defined in the JUNE 2025 TIPS specification.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`fi_to_fi_payment_status_request`

 | 

`[FIToFIPaymentStatusRequest](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusrequest#FIToFIPaymentStatusRequest)`

 | 

The `FIToFIPaymentStatusRequest` (pacs.028) message that is to be validated.  
:returns: The result of the validation, indicating success or failure.

 |