---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/sdk_download"
title: "SDK Download"
scraped_at: "2026-06-17T05:11:05.840Z"
images: 0
---

# SDK Download

## [](#installing_the_sdk "Copy link to heading")Installing the SDK

You can install a copy of the Instruction Flows SDK which provides all the type definitions for Instructions and Instruction Flows, as well as testing utilities for it. It is distributed as a standard pip wheel file.

To install, download and run `python3 -m pip install <wheel-file>`. It will then be importable as \`flows\_api\`in your Python distribution. Minimum required Python version is 3.10.

## [](#downloads "Copy link to heading")Downloads

   
| Version | Release Date | Download | Notes |
| --- | --- | --- | --- |
| 
1.17.2

 | 

2026-06-02

 | 

Download download

SHA-256: `834f922e8cb3316aadd9e07fc244070c2be5d76ea68c21f87448adb7f0f9fbd0`

 | 

-   Payload support for:
    
    -   [Mandate Amendment Request](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateamendmentrequest) representing ISO 20022 `pain.010.001`.
        
    -   [Mandate Cancellation Request](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandatecancellationrequest) representing ISO 20022 `pain.011.001`.
        
    -   [FI to FI Payment Reversal](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentreversal) representing ISO 20022 `pacs.007.001`.
        
    





 |
| 

1.17.1

 | 

2026-05-29

 | 

Download download

SHA-256: `511d998a9c1e237e48c389d2d97107d0fcf32b141446c0c1535e7cba62e149f1`

 | 

-   The [Membership Directory](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories) module has now been extended to support BACS and FPS membership directories.
    





 |
| 

1.17.0

 | 

2026-05-28

 | 

Download download

SHA-256: `843b441da7dd0989d63729039e025e471ae71f56bb5f30e6762a3c1f02809ced`

 | 

-   New [Batch Processing](/vault-payments/latest/EN/api/flows/flows_api/batchprocessing) module which supports [Instruction File and Instruction Batch processing](/vault-payments/latest/EN/using_vault_payments/instruction_batch_processing). Note: The `bulk` and `marshal` functions are currently in beta and their interfaces are subject to change.
    
-   Mandates are no longer in Beta. New [Manage Mandates Step](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#manage_mandates_step) to match and update Mandates. Removal of MatchMandateStep and deprecated fields on the Mandate object: `correlation_id`, `status_reason`, `direction`, and `requires_scheduling`.
    





 |
| 

1.16.1

 | 

2026-05-07

 | 

Download download

SHA-256: `9125e554d25fcea32cd4f00c22b2ce2f0dd4ca01b8163346326b3df4eb8daddd`

 | 

-   [Mandate](/vault-payments/latest/EN/api/flows/flows_api/mandates#Mandate) has been extended with new fields: `side`, `classification`, and `creditor_reference`, while the following fields are now deprecated: `correlation_id`, `status_reason`, `direction`, and `requires_scheduling`. Note: This feature is currently in beta. Its interface is subject to change.
    
-   [RoutingInformation](/vault-payments/latest/EN/api/flows/flows_api/routing#RoutingInformation) has been extended with new fields: `instrument_identifier_type`, and `bank_identifier_type`.
    





 |
| 

1.16.0

 | 

2026-04-14

 | 

Download download

SHA-256: `6f21674185b50577b222f522c49fd4d1a87cedfeab2f1e9b55ddc0908c9f608a`

 | 

-   [flows\_api.postinginstruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction) has been extended to support the full API of Vault Core Postings.
    
-   [HTTPStatusCodePolicy](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPStatusCodePolicy) can now be set on HTTP step.
    
-   Support for returning [Manual Decisions](/vault-payments/latest/EN/api/flows/flows_api/manualdecisions#ManualDecision) from the `manual_decision_func` in Manual Decision steps.
    
-   Payload support for:
    
    -   [File Action Initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/fileactioninitiation) representing ISO 20022 `cafm.001.001`.
        
    -   [Fraud Disposition Initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/frauddispositioninitiation) representing ISO 20022 `cafr.003.001`.
        
    -   [Request to modify payment](/vault-payments/latest/EN/api/flows/flows_api/payloads/requesttomodifypayment) representing ISO 20022 `camt.087.001`.
        
    -   [Claim Non Receipt](/vault-payments/latest/EN/api/flows/flows_api/payloads/claimnonreceipt) representing ISO 20022 `camt.027.001`.
        
    -   And fully complaint ISO20022 versions of [Administrative initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/administrativeinitiation), [Authorisation initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/authorisationinitiation), [Financial initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinitiation), [Inquiry initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/inquiryinitiation) and [Reversal initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/reversalinitiation) Card payloads.
        
    
-   Removal of unused Instruction fields `source_system` and rename of `initiating_user` to `initiating_user_id`.
    





 |
| 

1.15.0

 | 

2025-12-04

 | 

Download download

SHA-256: `e5f8d7dfb844fe1f1f3357e02a3bed1d445bb3c22ebec6865ccef2cee89a25cf`

 | 

-   New [Sequence Step](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#sequence_step) to generate monotonically increasing numbers.
    
-   Support for [seeded identifiers](/vault-payments/latest/EN/api/flows/flows_api/identifiers).
    
-   Support for validating `payment_status_report` payload in [tips](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/customer_payment_status_report) package.
    
-   Fixes bug in validation for `ChoiceComponents` (oneof) where one of is Multiplicity (repeated).
    
-   Payload support for:
    
    -   [Bank To Customer Account Report](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomeraccountreport) representing ISO 20022 `camt.052`.
        
    -   [Creditor Payment Activation Request](/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequest) representing ISO 20022 `pain.013`.
        
    -   [Creditor Payment Activation Request Status Report](/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequeststatusreport) representing ISO 20022 `pain.014`.
        
    -   [Financial Institution Credit Transfer](/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinstitutioncredittransfer) representing ISO 20022 `pacs.009`.
        
    -   [Investigation Request](/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationrequest) representing ISO 20022 `camt.110`.
        
    -   [Investigation Response](/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationresponse) representing ISO 20022 `camt.111`.
        
    -   [Message Reject](/vault-payments/latest/EN/api/flows/flows_api/payloads/messagereject) representing ISO 20022 `admi.002`.
        
    -   [System Event Notification](/vault-payments/latest/EN/api/flows/flows_api/payloads/systemeventnotification) representing ISO 20022 `admi.004`.
        
    





 |
| 

1.14.0

 | 

2025-11-04

 | 

Download download

SHA-256: `bd664a656e136e5e4ad6f787f2fdeefdb077f3438b1195338d000de789a8d32b`

 | 

-   Support for [logging in Flows](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/additional_modules#logging).
    
-   Support for [Instruction interruption](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#interruption).
    
-   Fixes a bug in the [simulate\_flow](/vault-payments/latest/EN/api/flows/flows_api/test#simulate_flow) testing function where the HTTP response was not passed to the `on_error_func` when using HTTP and HTTPAsync steps.
    





 |
| 

1.13.0

 | 

2025-10-09

 | 

Download download

SHA-256: `bcc7ff106d4382da1de5211614d649478778c68d8fd51b0e3a91184f91d0d4cd`

 | 

-   New [IBAN](/vault-payments/latest/EN/api/flows/flows_api/iban) module which supports IBAN validation.
    
-   The [TIPS](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips) module now includes IBAN validation.
    





 |
| 

1.12.0

 | 

2025-08-04

 | 

Download download

SHA-256: `a631e71895eb4123c6703eb19cbd89a526d20208449882552f977b141504d005`

 | 

-   Support for Mandate steps in the flows. Note: This feature is currently in beta. Its interface is subject to change.
    
-   Payload support for:
    
    -   [Customer Payment Status Report](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport) representing ISO 20022 `pain.002`.
        
    -   [Customer Direct Debit Initiation](/vault-payments/latest/EN/api/flows/flows_api/payloads/customerdirectdebitinitiation) representing ISO 20022 `pain.008`.
        
    -   [FI To FI Customer Direct Debit](/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomerdirectdebit) representing ISO 20022 `pacs.003`.
        
    -   [Mandate Initiation Request](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateinitiationrequest) representing ISO 20022 `pain.009`.
        
    -   [Mandate Acceptance Report](/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateacceptancereport) representing ISO 20022 `pain.012`.
        
    





 |
| 

1.11.1

 | 

2025-07-29

 | 

Download download

SHA-256: `f27ac7d4851da0c072bb4031cb40790bb7cfd8dda37f7c9dd0e71750a25e7812`

 | 

-   Fixed validation issues for `FIToFICustomerCreditTransfer` payloads in the [TIPS](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips) module.
    
-   Aligned TIPS module validation with the UDFS TIPS R2025.JUN release.
    





 |
| 

1.11.0

 | 

2025-06-10

 | 

Download download

SHA-256: `f1486ce6312983b6b74a9be24c7d448716263aaea25e00bccf2aca50804bcbe9`

 | 

-   [TIPS](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips) module now supports validation of the `PaymentStatusRequest` payload.
    
-   The identifiers package now supports the generation of [uuid5](/vault-payments/latest/EN/api/flows/flows_api/identifiers#uuid5) values.
    
-   Fixed validation behaviour for empty lists to correctly align with the ISO 20022 specification.
    





 |
| 

1.10.0

 | 

2025-04-22

 | 

Download download

SHA-256: `ad65a512c278d933070937f9bac98d82e900a0c2a86a2e0c08d22b4e2eff210f`

 | 

-   [TIPS](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips) module now supports validation of the following payloads: `CustomerCreditTransferInitiation`, `FIToFIPaymentCancellationRequest`, `PaymentReturn` and `ResolutionOfInvestigation`.
    
-   Support for new [InstructionFile](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#instruction_file_step) step in the flows. Note: This feature is currently in beta. Its interface is subject to change.
    
-   Support for [JSON](/vault-payments/latest/EN/using_vault_payments/parameters#parameter_types) Parameter Constraint.
    





 |
| 

1.9.0

 | 

2025-03-28

 | 

Download download

SHA-256: `c7176101d6831985512be6968e2df3fddae7bf8842521c17d90b7cf575ecf361`

 | 

-   `status_code` available on [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse)
    
-   Added HTTPResponse to `on_error_func` for [HTTP](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#http_step) and [HTTPAsync](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#http_async_step) Steps
    





 |
| 

1.8.0

 | 

2025-02-24

 | 

Download download

SHA-256: `3dd10fd9f12a92ecc03af96ba3e022c3b3e7bfcad848890733fe6fba37f3fd02`

 | 

-   New [TIPS](/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips) module has been added which improves the experience of supporting TIPS in Vault Payments.
    
-   Support for [HTTPAsync](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#http_async_step) step which allows integrations with asynchronous systems.
    
-   Fix in the `validate` methods on ISO20022 objects which allows ignoring fields of type list in the validation (bug introduced in 1.6).
    





 |
| 

1.7.0

 | 

2025-01-14

 | 

Download download

SHA-256: `2f0bbfc412361574093bcc0eb755d22aa421ce87e0b12c33a526b31c15dc82e4`

 | 

-   Support for improved routing capabilities including 3 new steps:
    
    -   [MatchPaymentInstrumentStep](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#match_payment_instrument_step)
        
    -   [AccountLinkStep](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#account_link_step)
        
    -   [RulesStep](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#rules_step)
        
    
-   Added more checks to `validate_flow` test function in the SDK to more closely replicate checks done at the API level.
    





 |
| 

1.6.0

 | 

2024-12-05

 | 

Download download

SHA-256: `7b5b9b68c2c22950a3c5141fbb8c57ba2cc772191d33b94cb13f6dff7f4b9e6c`

 | 

-   Support for [payload validation](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#payload_validation) according to ISO20022 rules.
    
-   Support for generating pseudo-random [identifiers](/vault-payments/latest/EN/api/flows/flows_api/identifiers) in the flows (for example UUID).
    
-   New payload [Bank to Bank Customer Debit Credit Notification](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomerdebitcreditnotification) representing ISO20022 `camt.054.001` message.
    
-   Full support for JSON in the HTTPStep (updated type annotations on the `json` field for [HTTPRequest](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPRequest) and [HTTPResponse](/vault-payments/latest/EN/api/flows/flows_api/http#HTTPResponse) objects).
    
-   Disallow updating immutable Instruction fields in the [simulate\_flow](/vault-payments/latest/EN/api/flows/flows_api/test#simulate_flow) testing function.
    





 |
| 

1.5.0

 | 

2024-09-16

 | 

Download download

SHA-256: `6b014e4a68b1a2780ce0b055f5d0bfe78e70e8b94c42a457c7134cfb5c9c407a`

 | 

-   Support for [Membership Directories API](/vault-payments/latest/EN/using_vault_payments/membership_directories/).
    
-   [Receipt Acknowledgement](/vault-payments/latest/EN/api/flows/flows_api/payloads/receiptacknowledgement#ReceiptAcknowledgement) payload representing ISO20022 `admi.007.001` message is added.
    





 |
| 

1.4.0

 | 

2024-07-26

 | 

Download download

SHA-256: `938fe800a577a06d56b557f6a8869c45e54ba712a0f2fe7ef488c8e4aecb7f13`

 | 

-   Support for Credit Transfer payloads: FI To FI Payments Status Request `pacs.028.001`, FI to FI Payment Cancellation Request `camt.056.001` and Resolution of Investigation `camt.029.001`.
    
-   Support for [RetryPolicy](/vault-payments/latest/EN/using_vault_payments/integrations#retries) allowing to configure requests to external integrations.
    
-   `VaultCorePostings` step will throw an Exception in `simulate_flow` testing function if `target_account.core_id` was not populated on Instruction; this aligns with the actual behaviour during the processing in Vault Payments (bug fix; introduced in 1.0).
    





 |
| 

1.3.0

 | 

2024-06-12

 | 

Download download

SHA-256: `1054b7cbf7cd50f783bee8b506d8c8ebd605f1f07878e7100c8f45c3b5ff51f3`

 | 

-   Support for [Scheme Submission](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#scheme_submission_step) step.
    
-   Support for unit testing `deadline_exceeded` function for `Manual Decision` step in the [simulate\_flow](/vault-payments/latest/EN/api/flows/flows_api/test#simulate_flow) testing function.
    
-   Ability to serialise `Instruction` into JSON format via [InstructionEncoder](/vault-payments/latest/EN/api/flows/flows_api/test#InstructionEncoder) in the `test` module.
    





 |
| 

1.2.1

 | 

2024-05-21

 | 

Download download

SHA-256: `666366f458e5789b28d8ef0d88a30ab697f2781be26a11e4acb2e7c6a4375cfb`

 | 

-   Make `datetime` fields in the SDK default to `None`, instead of `datetime.min`, which aligns the SDK with the actual behaviour in Vault Payments (bug fix; introduced in SDK 1.0.0).
    





 |
| 

1.2.0

 | 

2024-05-20

 | 

Download download

SHA-256: `cb643d59e178e194509753942ba4da7b6c95d7abf995f3612c22542c7841d458`

 | 

-   Support for [Manual Decisions](/vault-payments/latest/EN/using_vault_payments/manual_decisions/) via API and Vault Payments App.
    
-   Support for Instruction Warehausing via new [PeriodCalculation](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#speriod_calculation_step) and [ScheduleInstruction](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#schedule_instruction_step) steps.
    
-   Support for new [correlation\_id](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#instruction_matching) function on `FlowVersion` object.
    
-   Support for new `on_error` function on [HTTP](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#http_step) and [VaultCorePostings](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#vault_core_postings_step) steps.
    





 |
| 

1.1.0

 | 

2024-04-26

 | 

Download download

SHA-256: `5e7c0eb725dd7ad92681c16d26b4c81468eea7c68fd4bbe8bff2d11c9003251d`

 | 

-   Support for [Parameters](/vault-payments/latest/EN/using_vault_payments/parameters/) for Flows and Rules. - [Inquiry Initiation](/vault-payments/latest/EN/api/flows/flows_api/card/inquiry#InquiryInitiation) payload representing ISO20022 cain.016.001.02 message is added.
    
-   Support for Vault Core Postings [Custom Instruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#CustomInstruction) is added. - Unknown/default enum values evaluate to False (bug fix; introduced in SDK 1.0.0).
    





 |
| 

1.0.0

 | 

2024-02-27

 | 

Download download

SHA-256: `59198187363c96a616a1fb38fbf21cdcd6573641bd72171c375b3d185e52bc2a`

 | 

Initial release.





 |