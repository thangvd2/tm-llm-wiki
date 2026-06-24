---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/scheme_overview"
title: "Scheme Overview"
scraped_at: "2026-06-17T15:50:56.352Z"
images: 0
---

# Scheme Overview

TM Direct Debit is an example direct debit payments scheme. It is modelled on modern ISO 20022 compliant direct debit payment schemes such as SEPA Direct Debit.

## [](#mandate_resolution "Copy link to heading")Mandate Resolution

TM Direct Debit uses the Mandate Identification provided in the Mandate Related Information field of the message.

## [](#account_resolution "Copy link to heading")Account Resolution

TM Direct Debit supports both IBAN and other types of identification for resolving the creditor or debtor account. In order to work correctly, a Payment Instrument must match the identifier exactly. For example, if an IBAN is used, only the `instrument_identifier` field on the Payment Instrument should be set. If a different type of identification is used, the Payment Instrument `instrument_identifier` and `bank_identifier` fields should match both the identification and issuer information.

## [](#currency "Copy link to heading")Currency

TM Direct Debit is not currency specific and supports all currencies with an ISO currency code.

## [](#file_processing "Copy link to heading")File Processing

TM Direct Debit supports processing of the following files:

-   FI To FI Customer Direct Debit V08 (pacs.003.001.08) (inbound collections)
    
-   Customer Direct Debit Initiation V08 (pain.008.001.08) (outbound collections)
    
-   Mandate Initiation Request V06 (pain.009.001.06) (inbound and outbound mandates)
    
-   Mandate Acceptance Report V06 (pain.012.001.06) (outbound mandates)
    

TM Direct Debit supports generation of the following files:

-   FI To FI Customer Direct Debit V08 (pacs.003.001.08) (outbound collections)
    
-   Mandate Acceptance Report V06 (pain.012.001.06) (inbound mandates)
    

## [](#processing_schedule "Copy link to heading")Processing Schedule

TM Direct Debit has a number of simple scheme rules that govern the behaviour of the scheme.

Collections submitted to the scheme are cleared and settled on a next business day basis. Interbank settlement and funds transfer between the creditor and debtor are assumed to occur on the same day (Collection Date and Settlement Date are equivalent).

Collections for Collection Date (D) must be submitted to the scheme exactly one business day beforehand (D-1). If the Requested Collection Date falls outside of a scheme processing day, the next available processing day is chosen. Scheme processing days are defined as weekdays Monday to Friday and configured using the TM Direct Debit scheme Calendar resource.