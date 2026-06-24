---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/integrating_a_payment_scheme"
title: "Integrating with a payment scheme"
scraped_at: "2026-06-17T15:45:42.110Z"
images: 0
---

# Integrating with a payment scheme

This tutorial is an extension of the [Integrating with an external system](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/integrating_an_external_system) tutorial.

We are going to connect a payment scheme, which accepts ISO 20022 messages, to Vault Payments. We will then alter an existing Instruction Flow to make use of this Integration.

## [](#setting_up_the_integration "Copy link to heading")Setting up the integration

### [](#the_payment_scheme "Copy link to heading")The payment scheme

For this tutorial we will be using an imaginary payment scheme which has two HTTP endpoints which accept [ISO 20022](https://www.iso20022.org/) messages:

-   `/credit-transfer` for pacs.008.001 messages (corresponding to `INSTRUCTION_TYPE_FI_TO_FI_CUSTOMER_CREDIT_TRANSFER`) - `/status-report` for pacs.002.001 messages (corresponding to `INSTRUCTION_TYPE_FI_TO_FI_PAYMENT_STATUS_REPORT`)
    
    These endpoints accept an HTTP POST request with an XML payload
    

```
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.08">
    <FIToFICstmrCdtTrf>
        <GrpHdr>
            <!--...-->
        </GrpHdr>
        <CdtTrfTxInf>
            <!--...-->
        </CdtTrfTxInf>
    </FIToFICstmrCdtTrf>
</Document>
```

We will assume the endpoint is reachable over the public internet at `[https://mock-scheme.example.com](https://mock-scheme.example.com)`.

#### [](#creating_the_integration "Copy link to heading")Creating the integration

First we must create an `Integration` resource which will represent our payment scheme:

Then we’re ready to add the first version of this Integration’s configuration:

The Integration Version may be created in status `STATUS_PENDING` and take a moment to automatically progress to `STATUS_READY`, at which point it should be ready for use.

As before, in the [Integrating with an external system](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/integrating_an_external_system) tutorial, authentication and AWS PrivateLink can also be configured.

#### [](#using_the_integration_in_an_instruction_flow "Copy link to heading")Using the Integration in an Instruction Flow

We will modify the Instruction Flow created as part of the [Writing an Instruction Flow](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow) tutorial to add a new step which will make an HTTP request to our new mock payment scheme.

We can add this [SchemeSubmissionStep](/vault-payments/latest/EN/api/flows/flows_api#SchemeSubmissionStep) after the existing `core_postings` step as follows:

Once this new version of the Instruction Flow has been [uploaded via our API](/vault-payments/latest/EN/api/payments_api#instructionflowversion), all new Instructions using this flow will automatically submit the ISO 20022 message to the payment scheme.