---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateacceptancereport"
title: "Mandate Acceptance Report"
scraped_at: "2026-06-17T15:48:36.126Z"
images: 0
---

# Mandate Acceptance Report

`flows_api.payloads.mandateacceptancereport` module

Mandate Acceptance Report

## [](#MandateAcceptanceReport "Copy link to heading")MandateAcceptanceReport

MandateAcceptanceReport holds the supported versions of the pain.012.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v06`

 | 

`[MandateAcceptanceReportV06](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateacceptancereport#MandateAcceptanceReportV06)`

 | 

Version 06 of the MandateAcceptanceReport message.

 |

## [](#MandateAcceptanceReportV06 "Copy link to heading")MandateAcceptanceReportV06

Scope The MandateAcceptanceReport message is sent from the agent of the receiver (debtor or creditor) of the MandateRequest message (initiation, amendment or cancellation) to the agent of the initiator of the MandateRequest message (debtor or creditor). A MandateAcceptanceReport message is used to confirm the acceptance or rejection of a MandateRequest message. Where acceptance is part of the full process flow, a MandateRequest message only becomes valid after a confirmation of acceptance is received through a MandateAcceptanceReport message from the agent of the receiver. Usage The MandateAcceptanceReport message can contain one or more confirmation(s) of acceptance or rejection of a specific Mandate Request. The messages can be exchanged between debtor agent and creditor agent and between debtor agent and debtor and creditor agent and creditor. The MandateAcceptanceReport message can be used in domestic and cross-border scenarios.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader80](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader80)`

 | 

Set of characteristics to identify the message and parties playing a role in the mandate  
acceptance, but which are not part of the mandate.

 |
| 

`underlying_acceptance_details`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.MandateAcceptance6](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#MandateAcceptance6)]`

 | 

Provides information on the acceptance or rejection of the mandate request.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |