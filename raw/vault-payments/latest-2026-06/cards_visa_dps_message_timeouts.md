---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/visa_dps/message_timeouts"
title: "Message timeouts"
scraped_at: "2026-06-17T05:12:10.304Z"
images: 0
---

# Message timeouts

If a posting request exceeds the processing deadline, Vault Payments must respond to the scheme before the timeout occurs to comply with scheme requirements. Because the status of the original posting request is unknown at the time of the timeout, Vault Payments must reconcile the transaction later.

## [](#timeout_handling_by_message_type "Copy link to heading")Timeout handling by message type

Vault Payments handles timeouts based on the message type:

-   **Requests**: Vault Payments responds to the scheme with `Do not honor`.
    
-   **Advices**: Vault Payments responds to the scheme with `Approved`, as under scheme rules, Advices cannot be declined.
    

## [](#reconciliation_and_idempotent_retries "Copy link to heading")Reconciliation and idempotent retries

Vault Payments automatically retries posting requests idempotently to ensure consistency. The reconciliation process depends on the message type:

### [](#request_messages "Copy link to heading")Request messages

Vault Payments verifies the result of the idempotent retry:

-   If the retry fails, the system state matches the `Do not honor` response sent to the scheme. No further action is required.
    
-   If the retry succeeds, Vault Payments must reverse the transaction to ensure no funds are moved, aligning the system state with the rejection sent to the scheme.
    
    -   For an authorisation request, it triggers an **authorisation release posting** to drop the reserved hold.
        
    -   For a financial initiation request, it triggers a **reversal posting** to return the moved funds.
        
    -   For account transfer, it triggers a **transfer posting** to return the funds to the original account.
        
    

### [](#advice_messages "Copy link to heading")Advice messages

Vault Payments verifies the result of the idempotent retry:

-   If the retry fails, the instruction is marked as errored, which requires manual investigation to resolve.
    
-   If the retry succeeds, the system state matches the `Approved` response sent to the scheme. No further action is required.
    

If the hard settlement fails with a non-retryable error, Vault Payments marks the instruction as errored. This requires manual investigation to resolve.