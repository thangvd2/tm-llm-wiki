---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/concepts/instruction_messages"
title: "Card Transactions"
scraped_at: "2026-06-17T15:49:56.039Z"
images: 0
---

# Card Transactions

This section gives an overview of the card transaction processing.

## [](#overview "Copy link to heading")Overview

Understanding the lifecycle of a card transaction requires distinguishing between the reservation of funds, the actual movement of those funds, and the cancellation of a process. These actions are handled through Authorisation, Financial Initiation, and Reversal Initiation.

## [](#authorisation "Copy link to heading")Authorisation

An authorisation is a process used to verify a cardholder’s account and reserve funds for a future transaction. An authorisation places a temporary hold on the funds, reducing the cardholder’s available balance to ensure the money cannot be spent elsewhere before the merchant is ready to clear the transaction.

-   **How it works:** The merchant sends a request through the payment network to the issuer. The issuer checks the card’s status, PIN/CVC validity, and available funds. If everything is valid, the issuer approves the request and locks the funds. Holds typically expire after a set period (e.g., 7 to 30 days) if not followed by a financial initiation.
    

### [](#authorisation_request_0100 "Copy link to heading")Authorisation request (0100)

An active inquiry seeking real-time permission to reserve funds.

-   **State:** The authorisation is pending. It cannot be completed until the issuer responds.
    
-   **Decision:** The response contains a code indicating whether the hold is approved or declined.
    
-   **Common use cases:** An online store places a hold on the customer’s card for the order total during checkout, but does not capture the funds until the item physically ships.
    

### [](#authorisation_advice_0120 "Copy link to heading")Authorisation advice (0120)

An informational notification informing the receiver that an authorisation hold has already been placed on the account. The sender does not ask for permission, but advises the receiver to update their ledgers to reflect the reserved funds.

-   **State:** The authorisation hold has already been applied.
    
-   **Decision:** Since the action has already occurred, the issuer cannot decline the advice. The response acts purely as an acknowledgement of receipt.
    
-   **Common use cases:** A merchant terminal temporarily loses internet connectivity but is configured to locally approve transactions under a certain floor limit. Once back online, the terminal sends an advice to inform the issuer of the hold.
    

### [](#incremental_authorisation "Copy link to heading")Incremental Authorisation

Requests an increase to the amount of an existing, approved hold instead of creating a new, standalone transaction. The new request is linked to the original identifier to seamlessly increase the total reserved funds. This is commonly used when the final cost exceeds the initial estimate, such as extending a hotel stay.

## [](#financial_initiation "Copy link to heading")Financial Initiation

Financial initiation transactions directly impact a cardholder’s account balance, signalling the definitive movement or commitment of funds. This is the step where the ledger is actually updated to reflect money leaving the account (a debit) or entering it (a credit).

-   **How it works:** Financial initiation can occur in two ways. In a **single-message system**, the financial initiation acts as both the authorisation and the clearing at the exact same time. In a **dual-message system**, the financial initiation is sent hours or days after the original authorisation to capture the previously reserved funds.
    

### [](#financial_initiation_request_0200 "Copy link to heading")Financial initiation request (0200)

An active inquiry seeking real-time permission to execute a financial transaction.

-   **State:** The transaction is pending. It cannot be completed until the receiver responds.
    
-   **Decision:** The response contains a code indicating whether the financial movement is approved or declined.
    
-   **Common use cases:** A customer requests $50 at an ATM. The system authorises and deducts the $50 from the ledger in one simultaneous step.
    

### [](#financial_initiation_advice_0220 "Copy link to heading")Financial initiation advice (0220)

An informational notification informing the receiver that a transaction has already taken place and the receiver must update their ledgers accordingly.

-   **State:** The transaction is already completed.
    
-   **Decision:** Because the action has already occurred, the issuer cannot decline an advice. The response acts purely as an acknowledgement of receipt.
    
-   **Common use cases:** A merchant ships a previously ordered item and sends a financial advice to capture the funds that were held during the authorisation stage.
    

### [](#multi_clearing "Copy link to heading")Multi-clearing

Settles a single authorised amount in multiple, separate chunks rather than a standard one-to-one capture. Each clearing message is linked back to the original authorisation hold until the order is fulfilled or the hold expires. This is commonly used when fulfilment is delayed or split, such as dispatching e-commerce items separately as they become available.

## [](#reversal_initiation "Copy link to heading")Reversal Initiation

A reversal initiation is used to completely undo a previously approved authorisation or financial initiation. Its primary purpose is to correct errors, handle cancellations, or free up a cardholder’s open-to-buy balance when a transaction cannot be completed as originally intended.

-   **How it works:** Reversals must contain matching data elements, such as the original transaction identifier and amounts to link back to the exact message they are attempting to undo. Once processed, the system state reverts to what it was before the original message occurred.
    

### [](#reversal_request_0400_reversal_advice_0420 "Copy link to heading")Reversal request (0400) / Reversal advice (0420)

Depending on the network configuration, a reversal can be sent as an active request (0400) or an informational advice (0420) to clear the previous action.

-   **State:** The reversal is undoing a prior transaction state.
    
-   **Decision:** Reversals are generally accepted by the issuer because they benefit the cardholder or correct a system mismatch.
    
-   **Common use cases:** A customer places an order online, triggering an authorisation. Ten minutes later, the customer clicks "Cancel Order". The merchant’s system sends a reversal to immediately drop the pending hold on the customer’s account.
    

### [](#full_reversal "Copy link to heading")Full reversal

Cancels the original transaction in its entirety. The reversal amount matches the initial request exactly, completely releasing the hold or returning the funds. This is typically used for fully voided point-of-sale transactions, completely cancelled orders, or system timeouts.

### [](#partial_reversal "Copy link to heading")Partial reversal

Cancels only a specific portion of the original transaction, leaving a reduced balance intact. Unlike a full reversal, this message includes a replacement amount to dictate the new transaction total. This is commonly used when individual items in a large order are unavailable, or when a merchant adjusts an estimated hold down to the final clearing amount.

## [](#authorisation_expiry "Copy link to heading")Authorisation Expiry

Card authorisations have an expiry period which is determined by scheme rules and indicates the duration it is valid for. This expiry period can be extended by further messages received from the scheme for the same transaction.

For Mastercard, the expiry period is:

-   7 days by default
    
    -   30 days if the authorisation is coded as a pre-authorisation
        
    -   14 days if the authorisation is part of a Mass Transit Aggregated transaction
        
    -   1 hour if the authorisation is the initiation authorisation for an Automated Fuel Dispenser transaction
        
    

chat\_bubble

The expiry period can be configured by the bank with the payment scheme.

Reversal or presentment messages are expected to be received from the scheme for all card transactions to either settle the funds authorised or release them. However, if this does not occur within the expiry period then the authorisation hold must be otherwise released to prevent cardholder funds remaining ring-fenced indefinitely.

### [](#automated_authorisation_expiry_in_vault_payments "Copy link to heading")Automated authorisation expiry in Vault Payments

In Vault Payments, expiry periods are calculated based on the `transmission_date_time` field on the Instruction payload and stored on Instructions in the `expiry_date` field. Aside from the Automated Fuel Dispenser special case, where the expiry period is less than one day, the end of the expiry period is calculated to be midnight UTC on the following day from when the transaction expires.

Authorisation expiry in Vault Payments works by detecting card transactions which have expired and initiating Instructions to release their authorisation holds. This process is triggered daily by a Calendar (see [Scheduling](/vault-payments/latest/EN/using_vault_payments/scheduling)). The instructions created are of type `AdministrativeInitiation` and can be identified by the `alternate_message_reason` field on the Instruction being set to `ALTERNATE_MESSAGE_REASON_AUTOMATED_AUTHORISATION_EXPIRY` and the `initiating_party.identification` and `recipient_party.identification` fields being set to `VP`. These instructions are routed to the dedicated authorisation expiry Instruction Flow, which carries out Release postings in Vault Core.

chat\_bubble

Although Automated Fuel Dispenser transactions have an expiry period of only one hour, authorisation expiry runs on a daily schedule, so these authorisation holds will not be released until the next daily run.

### [](#dependencies "Copy link to heading")Dependencies

This section describes the dependencies that are required for authorisation expiry to take place.

#### [](#instruction_flows "Copy link to heading")Instruction Flows

An Instruction Flow must be created to handle the `AdministrativeInitiation` Instructions used for releasing expired authorisation holds.

All Instruction Flows that process authorisation or reversal messages which can extend the expiry period of a transaction should set the `expiry_date` field on the relevant Instruction payload. This enables the expiry period of the transaction to be tracked for expiry. This should only be set if the message is approved. The value can be copied from the `expiry_timestamp` field in `PreComputedValues`.

All Instruction Flows that process instructions that either clear or reverse a transaction should set the `completes_transaction` field on the relevant Instruction payload if the transaction is fully reversed or cleared. This stops the transaction being tracked for expiry.

This functionality is implemented in the [Instruction Flows provided in the Sandbox](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources).

#### [](#calendar "Copy link to heading")Calendar

A calendar must be present with the ID `cards_auth_expiry_manager_calendar` which will produce Calendar Period events that trigger authorisation expiry to take place. This is provided by default in the Sandbox.

The upper bound of the `period_range` on the Calendar Period will be used as the cutoff for expired transactions, meaning that Instructions will be initiated for all transactions with an `expiry_date` before this time. Since most transactions expire at midnight UTC, it is recommended to use a `Cutoff period` Calendar with a cutoff value of shortly after midnight. Authorisation expiry will be triggered daily at this time.