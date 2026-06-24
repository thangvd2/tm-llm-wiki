---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/payees"
title: "Payees"
scraped_at: "2026-06-17T15:46:39.496Z"
images: 0
---

# Payees

A Payee is an individual or business that a customer sends money to. Vault Payments allows financial institutions to securely store and manage these beneficiary details, allowing customers to reuse them across different payments without having to re-enter their information.

## [](#overview "Copy link to heading")Overview

You can create, update and view Payees through the Payees API. Payees can also be managed within an Instruction Flow using [Steps](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#payees_steps).

Below are examples of a Payee resource for a business and a person:

## [](#payee_ownership "Copy link to heading")Payee ownership

An owner of a Payee is the source entity which initiates payments to the Payee. The `owner_id` and `owner_type` fields on the Payee resource link the record to an existing payer.

The `owner_type` links to the Routing API. The supported owner types are:

-   [Payment Instrument](/vault-payments/latest/EN/using_vault_payments/routing#payment_instruments)
    
-   [Account Link](/vault-payments/latest/EN/using_vault_payments/routing#account_links)
    
-   **Other:** A generic owner type for customised configurations (e.g., non-Vault Payments resources from an external system).
    

chat\_bubble

During the creation of a Payee, if the owner type is Payment Instrument or Account Link, Vault Payments verifies that the specified owner with resource ID owner\_id actually exists.

## [](#account_identifiers "Copy link to heading")Account identifiers

The `routing_information` field stores the payee’s external account identifiers. It represents where the funds will be sent, following the same data conventions used for Payment Instruments:

-   **Bank Identifier** (Optional): Identifies the financial institution (e.g., a BIC or UK Sort Code), categorised by the `bank_identifier_type` (e.g., GBDSC, USABA).
    
-   **Bank Identifier Type** (Optional): The scheme used to identify the financial institution (e.g. BIC, SORT\_CODE, ROUTING\_NUMBER).
    
-   **Instrument Identifier**:The actual account number (e.g., an IBAN or domestic account number), categorised by the `instrument_identifier_type`.
    
-   **Instrument Identifier Type** (Optional): The category of the account identifier (e.g. IBAN, CARD\_ID, ACCOUNT\_NUMBER).
    

## [](#managing_payees_in_instruction_flows "Copy link to heading")Managing Payees in Instruction Flows

Payees are integrated into [Instruction Flows](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows#instruction_flows), allowing you to create and manage payees directly during payment processing.

The Instruction resource includes a `payee_id` field that can be used in the `ManagePayeesStep` to update the resource.

### [](#payee_steps "Copy link to heading")Payee steps

The Flows API provides specific steps to interact with Payees:

-   **CreatePayeeStep**: Allows the creation of a `Payee` resource using the provided instruction.
    
-   **ManagePayeesStep**: Allows existing Payees to be retrieved and updated during instruction processing.
    

For more information, see [Steps](/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps#payees_steps).