---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer"
title: "TM Credit Transfer"
scraped_at: "2026-06-17T15:50:37.296Z"
images: 0
---

# TM Credit Transfer

TM Credit Transfer is an example credit transfer payment scheme implementation.

This configuration pack demonstrates how Vault Payments can be used and configured to process ACH-style credit transfer payments including batch processing and files.

chat\_bubble

This configuration pack uses functionality that is currently in BETA and unavailable in Production Environments. Thought Machine may introduce breaking changes before it reaches a stable release and its interface is subject to change.

<table class="tableblock frame-all grid-all center" style="width: 50%;"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">ID</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">tm_credit_transfer</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Grade</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Example</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Last Update</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">2026-05-28</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Flow Language Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">1</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Required Flow SDK Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">V1.17</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Prerequisites</p></td><td class="tableblock halign-left valign-top"></td></tr></tbody></table>

## [](#latest_release "Copy link to heading")Latest Release

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 20%;"> <col style="width: 10%;"> <col style="width: 50%;"> <col style="width: 20%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Date</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Release Notes</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Download</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">2026-05-28</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">v1.2.0</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Updated with production release of InstructionFileSpecification</p></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><md-outlined-button href="/vault-payments/blob/tm_credit_transfer_1.2.0.zip?key=e19ad6d14f7e6f77c2b4daf884bd2fd5&amp;download=true" value="" has-icon="">download button text <span slot="icon" class="material-symbols-outlined">download</span></md-outlined-button></p></div></div></td></tr></tbody></table>

For a full change history see the pack [Changelog](/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/changelog).

## [](#supported_journeys "Copy link to heading")Supported Journeys

Scheme information can be found [here](/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/scheme_overview).

The high level supported features of the TM Credit Transfer configuration pack:

-   The ability to send an [outbound credit transfer](/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/outbound_journeys) via a CustomerCreditTransferInitiation.
    
-   The ability to receive an [inbound credit transfer](/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/inbound_journeys).
    
-   The ability to send an [return for an inbound credit transfer](/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/inbound_journeys#manual_returns).
    

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

tm-credit-transfer

 | 

calendar

 |
| 

**Template**

 | 

tm-credit-transfer-inbound-payment-return

 | 

inbound\_payment\_return\_template

 |
| 

tm-credit-transfer-outbound-initiation

 | 

outbound\_initiation\_template

 |
| 

**Instruction File Specification**

 | 

tm-credit-transfer-customer-status-report

 | 

customer\_status\_report\_spec

 |
| 

tm-credit-transfer-inbound-payment-return

 | 

inbound\_payment\_return\_spec

 |
| 

tm-credit-transfer-outbound-ct

 | 

outbound\_credit\_transfer\_spec

 |
| 

tm-credit-transfer-received-files

 | 

received\_file\_spec

 |
| 

**Instruction Flow**

 | 

tm-credit-transfer-customer-status-report

 | 

customer\_status\_report\_flow

 |
| 

tm-credit-transfer-inbound

 | 

inbound\_credit\_transfer\_flow

 |
| 

tm-credit-transfer-inbound-payment-return

 | 

inbound\_payment\_return\_flow

 |
| 

tm-credit-transfer-initiation

 | 

customer\_initiation\_flow

 |
| 

tm-credit-transfer-outbound

 | 

outbound\_credit\_transfer\_flow

 |
| 

tm-credit-transfer-status-report

 | 

outbound\_status\_report\_flow

 |
| 

**Parameter**

 | 

tm-credit-transfer-internal-account-core-id

 | 

internal\_account\_core\_id\_parameter

 |
| 

tm-credit-transfer-liquidity-account

 | 

internal\_account\_parameter

 |
| 

tm-credit-transfer-scheme-transaction-limit

 | 

scheme\_transaction\_limit

 |
| 

tm-credit-transfer-suspense-account

 | 

suspense\_account\_parameter

 |
| 

**Parameter Value**

 | 

AUTO GENERATED

 | 

internal\_account\_parameter\_value

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

scheme\_transaction\_limit\_value

 |

## [](#import_via_clu "Copy link to heading")Import via CLU

**Set the environment variables**

**Populate the variables in the pack**

**Run Configuration Layer Utility**

## [](#parameters "Copy link to heading")Parameters

   
| ID | Display Name | Description | Provided Value |
| --- | --- | --- | --- |
| 
tm-credit-transfer-scheme-transaction-limit

 | 

TMCreditTransfer scheme transaction limit

 | 

A transaction limit that is used in TM Credit Transfer outbound flows

 | 

999999999.99

 |
| 

tm-credit-transfer-internal-account-core-id

 | 

TMCreditTransfer Internal Account Core ID

 | 

The Core ID to use when making postings to Internal Accounts.

 | 

**Environment Variable Value**: CORE\_ID

 |
| 

tm-credit-transfer-liquidity-account

 | 

TMCreditTransfer Liquidity Internal Account

 | 

The Vault Core Internal Account used as the internal account for double-entry bookkeeping postings.

 | 

TM\_CREDIT\_TRANSFER\_LIQUIDITY

 |
| 

tm-credit-transfer-suspense-account

 | 

TMCreditTransfer Suspense Internal Account

 | 

The Vault Core Internal Account used as the suspense account.

 | 

TM\_CREDIT\_TRANSFER\_SUSPENSE

 |