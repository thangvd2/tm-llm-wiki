---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/example/tm_direct_debit"
title: "TM Direct Debit"
scraped_at: "2026-06-17T05:12:33.646Z"
images: 0
---

# TM Direct Debit

TM Direct Debit is an example direct debit payment scheme implementation.

This configuration pack demonstrates how Vault Payments can be used and configured to process direct debit payments including the management of direct debit mandates.

<table class="tableblock frame-all grid-all center" style="width: 50%;"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">ID</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">tm_direct_debit</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Grade</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Example</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Last Update</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">2026-06-05</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Flow Language Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">1</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Required Flow SDK Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">V1.17</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Prerequisites</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">TIPS <a href="/vault-payments/latest/EN/api/payments_api#membershipdirectory">Membership Directory</a></p></td></tr></tbody></table>

## [](#latest_release "Copy link to heading")Latest Release

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 20%;"> <col style="width: 10%;"> <col style="width: 50%;"> <col style="width: 20%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Date</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Version</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Release Notes</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Download</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock">2026-06-05</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">v1.5.1</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Use the ManageMandatesStep for resolving Mandates.</p></td><td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph"><p><md-outlined-button href="/vault-payments/blob/tm_direct_debit_1.5.1.zip?key=0dad2c333728f74acad621f571ad4d43&amp;download=true" value="" has-icon="">Download <span slot="icon" class="material-symbols-outlined">download</span></md-outlined-button></p></div></div></td></tr></tbody></table>

For a full change history see the pack [Changelog](/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/changelog).

## [](#supported_journeys "Copy link to heading")Supported Journeys

Scheme information can be found [here](/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/scheme_overview).

The high level supported features of the TM Direct Debit configuration pack:

-   The ability to send an [outbound direct debit collection](/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/outbound_collection_journeys).
    
-   The ability to receive an [inbound direct debit collection](/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/inbound_collection_journeys).
    
-   The ability to send an [outbound mandate initiation request](/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/mandate_issuance_journeys).
    
-   The ability to receive an [inbound mandate initiation request](/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/mandate_issuance_journeys).