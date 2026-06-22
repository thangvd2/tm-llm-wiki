---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer"
title: "SEPA Credit Transfer"
scraped_at: "2026-06-17T15:51:32.458Z"
images: 0
---

# SEPA Credit Transfer

The SEPA Credit Transfer pack is an ACH Credit Transfer configuration pack based on the EBA Clearing implementation of SEPA CTs.

This configuration pack enables clients to process SEPA Credit Transfer payments through Vault Payments including batch processing and files.

chat\_bubble

This configuration pack uses functionality that is currently in BETA and unavailable in Production Environments. Thought Machine may introduce breaking changes before it reaches a stable release and its interface is subject to change.

<table class="tableblock frame-all grid-all center" style="width: 50%;"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">ID</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">sepa_credit_transfer</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Grade</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Production</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Last Update</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">2026-05-28</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Flow Language Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">1</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Required Flow SDK Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">V1.17</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Prerequisites</p></td><td class="tableblock halign-left valign-top"></td></tr></tbody></table>

## [](#latest_release "Copy link to heading")Latest Release

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 20%;"> <col style="width: 10%;"> <col style="width: 50%;"> <col style="width: 20%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Date</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Release Notes</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Download</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">2026-05-28</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">v1.1.0</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Updated with production release of InstructionFileSpecification</p></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><md-outlined-button href="/vault-payments/blob/sepa_credit_transfer_1.1.0.zip?key=60499dc81d0fa547db0b0e2a78e5927c&amp;download=true" value="" has-icon="">download button text <span slot="icon" class="material-symbols-outlined">download</span></md-outlined-button></p></div></div></td></tr></tbody></table>

For a full change history see the pack [Changelog](/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/changelog).

## [](#supported_journeys "Copy link to heading")Supported Journeys

Scheme information can be found [here](/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/scheme_overview).

The high level supported features of the SEPA Credit Transfer configuration pack:

-   The ability to send an [outbound credit transfer](/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/outbound_journeys#sending_an_outbound_payment) via a CustomerCreditTransferInitiation.
    
-   The ability to receive an [inbound credit transfer](/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/inbound_journeys).
    
-   The ability to send an [outbound recall](/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/outbound_recall_journeys#sending_an_outbound_recall).
    
-   The ability to receive an [inbound recall](/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/inbound_recall_journeys).
    

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

step2-business-days

 | 

business\_day\_calendar

 |
| 

**Business Day Definition**

 | 

target-business-days

 | 

business\_day\_calendar\_days

 |
| 

**Instruction File Specification**

 | 

sepa-credit-transfer-customer-status-report

 | 

customer\_status\_report\_spec

 |
| 

sepa-credit-transfer-input-credit-file

 | 

icf\_spec

 |
| 

sepa-received-ct-files

 | 

received\_ct\_file\_spec

 |
| 

sepa-received-scheme-files

 | 

received\_scheme\_file\_spec

 |
| 

**Instruction Flow**

 | 

sepa-credit-transfer-customer-initiation

 | 

customer\_initiation\_flow

 |
| 

sepa-credit-transfer-customer-status-report

 | 

customer\_status\_report\_flow

 |
| 

sepa-credit-transfer-inbound

 | 

inbound\_credit\_transfer\_flow

 |
| 

sepa-credit-transfer-inbound-recall-negative-response

 | 

inbound\_recall\_negative\_response\_flow

 |
| 

sepa-credit-transfer-inbound-recall-positive-response

 | 

inbound\_recall\_positive\_response\_flow

 |
| 

sepa-credit-transfer-inbound-recall-request

 | 

inbound\_recall\_request\_flow

 |
| 

sepa-credit-transfer-inbound-recall-status-request

 | 

inbound\_recall\_status\_request\_flow

 |
| 

sepa-credit-transfer-inbound-return

 | 

inbound\_return\_flow

 |
| 

sepa-credit-transfer-outbound

 | 

outbound\_credit\_transfer\_flow

 |
| 

sepa-credit-transfer-outbound-recall-negative-response

 | 

outbound\_recall\_negative\_response\_flow

 |
| 

sepa-credit-transfer-outbound-recall-positive-response

 | 

outbound\_recall\_positive\_response\_flow

 |
| 

sepa-credit-transfer-outbound-recall-request

 | 

outbound\_recall\_request\_flow

 |
| 

sepa-credit-transfer-outbound-recall-status-request

 | 

outbound\_recall\_status\_request\_flow

 |
| 

sepa-credit-transfer-outbound-return

 | 

outbound\_process\_return\_flow

 |
| 

sepa-credit-transfer-status-report

 | 

outbound\_status\_report\_flow

 |
| 

**Parameter**

 | 

sepa-credit-transfer-instructing-agent-bic

 | 

instructing\_agent\_bic\_parameter

 |
| 

sepa-credit-transfer-internal-account-core-id

 | 

internal\_account\_core\_id\_parameter

 |
| 

sepa-credit-transfer-suspense-account

 | 

suspense\_account\_parameter

 |
| 

sepa-credit-transfer-wash-account

 | 

wash\_account\_parameter

 |
| 

**Parameter Value**

 | 

AUTO GENERATED

 | 

wash\_account\_parameter\_value

 |
| 

AUTO GENERATED

 | 

suspense\_account\_parameter\_value

 |
| 

AUTO GENERATED

 | 

internal\_account\_core\_id\_parameter\_value

 |
| 

AUTO GENERATED

 | 

instructing\_agent\_bic\_parameter\_value

 |

## [](#import_via_clu "Copy link to heading")Import via CLU

**Set the environment variables**

**Populate the variables in the pack**

**Run Configuration Layer Utility**

## [](#parameters "Copy link to heading")Parameters

   
| ID | Display Name | Description | Provided Value |
| --- | --- | --- | --- |
| 
sepa-credit-transfer-instructing-agent-bic

 | 

SEPA Credit Transfer instructing agent BIC

 | 

A parameter that is used to determine the value of the instructing agent on relevant generated ISO20022 messages.

 | 

**Environment Variable Value**: SEPA\_CREDIT\_TRANSFER\_INSTRUCTING\_AGENT

 |
| 

sepa-credit-transfer-internal-account-core-id

 | 

SEPA Credit Transfer Internal Account Core ID

 | 

The Core ID to use when making postings to Internal Accounts.

 | 

**Environment Variable Value**: CORE\_ID

 |
| 

sepa-credit-transfer-suspense-account

 | 

SEPA Credit Transfer Suspense Internal Account

 | 

The Vault Core Internal Account used as the suspense account.

 | 

SEPA\_CREDIT\_TRANSFER\_SUSPENSE

 |
| 

sepa-credit-transfer-wash-account

 | 

SEPA Credit Transfer Wash Internal Account

 | 

The Vault Core Internal Account used as the wash account.

 | 

SEPA\_CREDIT\_TRANSFER\_WASH

 |