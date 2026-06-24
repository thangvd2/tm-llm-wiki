---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/customer_payment_status_report"
title: "Customer Payment Status Report"
scraped_at: "2026-06-17T15:49:09.860Z"
images: 0
---

# Customer Payment Status Report

`flows_api.schemes.eu.tips.customer_payment_status_report` module

## [](#validate_customer_payment_status_report "Copy link to heading")validate\_customer\_payment\_status\_report

Validates a CustomerPaymentStatusReport (pain.002) message against the EPC specification (as per the SEPA Instant Credit Transfer Customer-to-PSP IGs 2023 Version 1.2 document).

Note TIPS specific validation is not performed on the contents of `payment_information[0].credit_transfer_transaction_information[0].related_remittance_information` and `payment_information[0].credit_transfer_transaction_information[0].remittance_information`.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`customer_payment_status_report`

 | 

`[CustomerPaymentStatusReport](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport#CustomerPaymentStatusReport)`

 | 

The CustomerPaymentStatusReport (pain.002) message to be validated.  
:returns: The result of the validation, indicating success or failure.

 |