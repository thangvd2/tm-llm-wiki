---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_payment_status_report"
title: "Fi To Fi Payment Status Reportn"
scraped_at: "2026-06-17T05:10:53.335Z"
images: 0
---

# Fi To Fi Payment Status Reportn

`flows_api.schemes.eu.tips.fi_to_fi_payment_status_report` module

## [](#get_fi_to_fi_payment_status_report_transaction_status "Copy link to heading")get\_fi\_to\_fi\_payment\_status\_report\_transaction\_status

Retrieve the transaction status from a TIPS `FIToFIPaymentStatusReport` object.

This method safely extracts the transaction status as a string value. It is useful for writing Instruction Flows that branch based on the status value.

Transaction status should not be set in both locations—if this occurs, an empty string is returned.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`status_report`

 | 

`[FIToFIPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport#FIToFIPaymentStatusReport)`

 | 

The `FIToFIPaymentStatusReport` (`pacs.002`) message that is to be accessed.  
:returns: The assigned transaction status value, or an empty string if a transaction status could not be determined.

 |

## [](#validate_fi_to_fi_payment_status_report "Copy link to heading")validate\_fi\_to\_fi\_payment\_status\_report

Validates a FIToFIPaymentStatusReport (pacs.002) message against the TIPS specification (as of the UDFS TIPS R2025.JUN release). Only pacs.002.01.10 is currently supported.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`status_report`

 | 

`[FIToFIPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport#FIToFIPaymentStatusReport)`

 | 

The FIToFIPaymentStatusReport (pacs.002) message that is to be validated.  
:returns: The result of the validation, indicating success or failure.

 |