---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/resolution_of_investigation"
title: "Resolution Of Investigation"
scraped_at: "2026-06-17T15:49:20.389Z"
images: 0
---

# Resolution Of Investigation

`flows_api.schemes.eu.tips.resolution_of_investigation` module

## [](#validate_resolution_of_investigation "Copy link to heading")validate\_resolution\_of\_investigation

Validates a `ResolutionOfInvestigation` (camt.029) message against the TIPS specification (as of the UDFS TIPS R2025.JUN release).

This method ensures that the `ResolutionOfInvestigation` message complies with the expected format and business rules defined in the JUNE 2025 TIPS specification.

Note TIPS specific validation is not performed on the contents of `cancellation_details[0].transaction_information_and_status[0].original_transaction_reference.remittance_information`.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`resolution_of_investigation`

 | 

`[ResolutionOfInvestigation](/vault-payments/latest/EN/api/flows/flows_api/payloads/resolutionofinvestigation#ResolutionOfInvestigation)`

 | 

The `ResolutionOfInvestigation` (camt.029) message that is to be validated.  
:returns: The result of the validation, indicating success or failure.

 |