---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips"
title: "SEPA Instant TIPS"
scraped_at: "2026-06-17T05:12:53.800Z"
images: 0
---

# SEPA Instant TIPS

SEPA Instant TIPS is an instant payment settlement service launched by the Eurosystem in November 2018. It complies with the SEPA Instant Credit Transfer (SCT Inst) scheme, enabling pan-European instant payments.

This configuration pack enables clients to process SEPA Instant TIPS payments through Vault Payments.

In production environments, this configuration pack requires a client-managed Swift AGI deployment, exposed to Vault Payments via an Integration resource. This allows payment flows executed in Vault Payments to submit instructions directly to TIPS.

In non-production environments, this pack can be used alongside the Thought Machine Swift AGI simulator endpoints for testing and validation purposes.

<table class="tableblock frame-all grid-all center" style="width: 50%;"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">ID</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">sepa_instant_tips</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Grade</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Production</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Last Update</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">2026-06-05</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Flow Language Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">1</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Required Flow SDK Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">V1.11</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Prerequisites</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Swift AGI <a href="/vault-payments/latest/EN/api/payments_api#integration">Integration</a>, TIPS <a href="/vault-payments/latest/EN/api/payments_api#membershipdirectory">Membership Directory</a></p></td></tr></tbody></table>

## [](#latest_release "Copy link to heading")Latest Release

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 20%;"> <col style="width: 10%;"> <col style="width: 50%;"> <col style="width: 20%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Date</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Release Notes</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Download</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">2026-06-05</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">v1.1.6</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Replace use of legacy posting request type.</p></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><md-outlined-button href="/vault-payments/blob/sepa_instant_tips_1.1.6.zip?key=a3457df0ac7c2276290905e06536be8d&amp;download=true" value="" has-icon="">Download <span slot="icon" class="material-symbols-outlined">download</span></md-outlined-button></p></div></div></td></tr></tbody></table>

For a full change history see the pack [Changelog](/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/change_log).

## [](#supported_journeys "Copy link to heading")Supported Journeys

The high level supported features of the TIPS configuration pack.

-   The ability to receive and respond to [inbound payments](/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/inbound_payment_journeys).
    
-   The ability to prepare and initiate [outbound payments](/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/outbound_payment_journeys).
    
-   The ability to receive and manage [inbound payment recalls](/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/inbound_payment_recall_journeys).
    
-   The ability to initiate and manage [outbound payment recalls](/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/outbound_payment_recall_journeys).
    
-   The ability to initiate [outbound payment status requests](/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/outbound_payment_status_request_journeys).
    

## [](#contents "Copy link to heading")Contents

**See More**

Configuration Pack ID

The ID used on the resources in the Payments API, and viewable in the Vault Payments App.

Pack ID

The ID used as part of a configuration pack and the Configuration Layer Utility.

  
| Type | Platform ID | Configuration Pack ID |
| --- | --- | --- |
| 
**Calendar**

 | 

sepa-instant-target-calendar

 | 

sepa\_instant\_target\_calendar

 |
| 

**Business Day Definition**

 | 

sepa-instant-target-business-day-definition

 | 

sepa\_instant\_target\_business\_day\_definition

 |
| 

**Integration**

 | 

swift-agi-tips

 | 

swift\_agi\_tips\_integration

 |
| 

**Instruction Flow**

 | 

sepa-instant-tips-inbound

 | 

inbound\_flow

 |
| 

sepa-instant-tips-inbound-bank-customer-debit-credit-notification

 | 

inbound\_bank\_customer\_debit\_credit\_notification\_flow

 |
| 

sepa-instant-tips-inbound-payment-cancellation-request

 | 

inbound\_payment\_cancellation\_request\_flow

 |
| 

sepa-instant-tips-inbound-payment-return

 | 

inbound\_payment\_return\_flow

 |
| 

sepa-instant-tips-inbound-payment-return-status-report-confirmation

 | 

inbound\_payment\_return\_status\_report\_confirmation\_flow

 |
| 

sepa-instant-tips-inbound-receipt-acknowledgement

 | 

inbound\_receipt\_acknowledgement\_flow

 |
| 

sepa-instant-tips-inbound-resolution-of-investigation

 | 

inbound\_resolution\_of\_investigation\_flow

 |
| 

sepa-instant-tips-inbound-resolution-of-investigation-status-report-confirmation

 | 

inbound\_resolution\_of\_investigation\_status\_report\_confirmation\_flow

 |
| 

sepa-instant-tips-inbound-status-report-confirmation

 | 

inbound\_status\_report\_confirmation\_flow

 |
| 

sepa-instant-tips-inbound-status-report-response

 | 

inbound\_status\_report\_response\_flow

 |
| 

sepa-instant-tips-outbound

 | 

outbound\_flow

 |
| 

sepa-instant-tips-outbound-initiation

 | 

outbound\_initiation\_flow

 |
| 

sepa-instant-tips-outbound-payment-cancellation-request

 | 

outbound\_payment\_cancellation\_request\_flow

 |
| 

sepa-instant-tips-outbound-payment-return

 | 

outbound\_payment\_return\_flow

 |
| 

sepa-instant-tips-outbound-payment-status-request

 | 

outbound\_payment\_status\_request\_flow

 |
| 

sepa-instant-tips-outbound-receipt-acknowledgement

 | 

outbound\_receipt\_acknowledgement\_flow

 |
| 

sepa-instant-tips-outbound-resolution-of-investigation

 | 

outbound\_resolution\_of\_investigation\_flow

 |
| 

sepa-instant-tips-outbound-status-report

 | 

outbound\_status\_report\_flow

 |
| 

**Parameter**

 | 

sepa-instant-business-banking-calendar-id

 | 

sepa\_instant\_business\_banking\_calendar\_parameter

 |
| 

sepa-instant-tips-clearing-internal-account

 | 

tips\_clearing\_internal\_account\_parameter

 |
| 

sepa-instant-tips-inbound-payment-return-flow-id

 | 

sepa\_instant\_inbound\_payment\_return\_flow\_id\_parameter

 |
| 

sepa-instant-tips-inbound-resolution-of-investigation-flow-id

 | 

sepa\_instant\_inbound\_resolution\_of\_investigation\_flow\_id\_parameter

 |
| 

sepa-instant-tips-inbound-status-report-response-flow-id

 | 

sepa\_instant\_inbound\_status\_report\_response\_flow\_id\_parameter

 |
| 

sepa-instant-tips-instructing-agent-bic

 | 

instructing\_agent\_bic\_parameter

 |
| 

sepa-instant-tips-membership-directory

 | 

tips\_membership\_directory\_parameter

 |
| 

sepa-instant-tips-outbound-flow-id

 | 

sepa\_instant\_outbound\_flow\_id\_parameter

 |
| 

sepa-instant-tips-psp-local-timezone

 | 

sepa\_instant\_tips\_local\_timezone\_parameter

 |
| 

sepa-instant-tips-scheme-transaction-limit

 | 

scheme\_transaction\_limit\_parameter

 |
| 

sepa-instant-tips-settlement-method

 | 

tips\_settlement\_method\_parameter

 |
| 

**Parameter Value**

 | 

AUTO GENERATED

 | 

sepa\_instant\_outbound\_flow\_id\_parameter\_value

 |
| 

AUTO GENERATED

 | 

sepa\_instant\_inbound\_status\_report\_response\_flow\_id\_parameter\_value

 |
| 

AUTO GENERATED

 | 

sepa\_instant\_inbound\_payment\_return\_flow\_id\_parameter\_value

 |
| 

AUTO GENERATED

 | 

sepa\_instant\_inbound\_resolution\_of\_investigation\_flow\_id\_parameter\_value

 |
| 

AUTO GENERATED

 | 

sepa\_instant\_tips\_local\_timezone\_parameter\_value

 |
| 

AUTO GENERATED

 | 

tips\_settlement\_method\_parameter\_value

 |
| 

AUTO GENERATED

 | 

scheme\_transaction\_limit\_parameter\_value

 |
| 

AUTO GENERATED

 | 

instructing\_agent\_bic\_parameter\_value

 |
| 

AUTO GENERATED

 | 

tips\_membership\_directory\_parameter\_value

 |
| 

AUTO GENERATED

 | 

sepa\_instant\_business\_banking\_calendar\_parameter\_value

 |
| 

AUTO GENERATED

 | 

tips\_clearing\_internal\_account\_parameter\_value

 |

## [](#import_via_clu "Copy link to heading")Import via CLU

**Set the environment variables**

**Populate the variables in the pack**

**Run Configuration Layer Utility**

## [](#parameters "Copy link to heading")Parameters

   
| ID | Display Name | Description | Provided Value |
| --- | --- | --- | --- |
| 
sepa-instant-tips-instructing-agent-bic

 | 

SEPA Instant TIPS instructing agent BIC

 | 

A parameter that is used to determine the value of the instructing agent on relevant generated ISO20022 messages.

 | 

**Environment Variable Value**: SEPA\_INSTANT\_TIPS\_INSTRUCTING\_AGENT

 |
| 

sepa-instant-tips-psp-local-timezone

 | 

SEPA Instant PSP local timezone

 | 

The timezone of the PSP that is using Vault Payments to receive and send SEPA Instant TIPS payments.

 | 

Europe/Brussels

 |
| 

sepa-instant-tips-scheme-transaction-limit

 | 

SEPA Instant scheme transaction limit

 | 

A transaction limit that is used in SEPA Instant TIPS inbound and outbound flows.

 | 

100000.00

 |
| 

sepa-instant-tips-settlement-method

 | 

SEPA Instant TIPS Settlement Method

 | 

Specifies the settlement method for TIPS FIToFICustomerCreditTransfer Instructions, determining whether settlement occurs directly (INGA), via an intermediary (INDA), or through a clearing system (CLRG).

 | 

CLRG

 |
| 

sepa-instant-business-banking-calendar-id

 | 

SEPA Instant Business Banking Calendar

 | 

This parameter represents the ID of the Calendar that defines business banking days in the context of SEPA Instant TIPS processing.

 | 

sepa-instant-target-calendar

 |
| 

sepa-instant-tips-clearing-internal-account

 | 

SEPA Instant TIPS Clearing Internal Account

 | 

This parameter represents a Vault Core Internal Account ID that is used as the internal account for TIPS double-entry bookkeeping postings.

 | 

LIQUIDITY\_ACCOUNT

 |
| 

sepa-instant-tips-membership-directory

 | 

SEPA Instant TIPS Membership Directory

 | 

This parameter represents the ID of the TIPS Membership Directory in Vault Payments.

 | 

sample-sandbox-tips-directory

 |
| 

sepa-instant-tips-inbound-payment-return-flow-id

 | 

SEPA Instant TIPS Inbound Payment Return Instruction Flow ID

 | 

The Instruction Flow ID of the flow used to handle the submission of PaymentReturn Instructions to TIPS.

 | 

sepa-instant-tips-inbound-payment-return

 |
| 

sepa-instant-tips-inbound-resolution-of-investigation-flow-id

 | 

SEPA Instant TIPS Inbound ResolutionOfInvestigation response Instruction Flow ID

 | 

The Instruction Flow ID of the flow used to handle the submission of ResolutionOfInvestigation Instructions to TIPS.

 | 

sepa-instant-tips-inbound-resolution-of-investigation

 |
| 

sepa-instant-tips-inbound-status-report-response-flow-id

 | 

SEPA Instant TIPS Inbound FIToFIPaymentStatusReport response Instruction Flow ID

 | 

The Instruction Flow ID of the flow used to handle the submission of FIToFIPaymentStatusReport Instructions to TIPS.

 | 

sepa-instant-tips-inbound-status-report-response

 |
| 

sepa-instant-tips-outbound-flow-id

 | 

SEPA Instant TIPS Outbound FIToFICustomerCreditTransfer Instruction Flow ID

 | 

The Instruction Flow ID of the flow used to handle the submission of FIToFICustomerCreditTransfer Instructions to TIPS.

 | 

sepa-instant-tips-outbound

 |