---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/working_with_tips_membership_directory"
title: "Working with the TIPS Membership Directory"
scraped_at: "2026-06-17T05:13:08.718Z"
images: 0
---

# Working with the TIPS Membership Directory

## [](#overview_of_tips_membership_directory_integration "Copy link to heading")Overview of TIPS Membership Directory Integration

Vault Payments provides a [Membership Directory](/vault-payments/latest/EN/using_vault_payments/membership_directories) capability that supports determining whether a counterparty financial institution is reachable for a specific payment scheme. In the context of SEPA Instant TIPS, this is used to verify whether a given BIC is reachable via TIPS for SEPA Instant Credit Transfer transactions.

This capability is used during payment processing in an Instruction Flow via the [MembershipDirectoryStep](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories), which queries the configured directory for the BIC provided in the Instruction.

### [](#directory_upload_and_maintenance "Copy link to heading")Directory Upload and Maintenance

Clients are responsible for obtaining and maintaining the TIPS-specific reachability directory file from the Eurosystem. The TIPS directory is typically distributed in XML format and must be uploaded to Vault Payments via the Membership Directory API using the structure defined in the official TIPS specification.

TIPS directory data includes the following elements:

-   BICFI of the reachable institution
    
-   Institution name
    
-   Status indicators (e.g. active/inactive)
    
-   Valid from and valid to timestamps
    
-   Participation type
    
-   Maximum instant payment amount
    

The data should be kept up to date in line with the publication schedule of the official TIPS directory. Vault Payments does not automatically fetch or ingest TIPS directory data - it must be maintained by the institution using the Membership Directory capability.

### [](#usage_in_sepa_instant_tips_configuration_library "Copy link to heading")Usage in SEPA Instant TIPS Configuration Library

The following flows make use of the Membership Directory during processing:

-   `sepa-instant-tips-outbound-initiation`
    
-   `sepa-instant-tips-outbound`
    
-   `sepa-instant-tips-outbound-payment-cancellation-request`
    

Within these flows, the `MembershipDirectoryStep` is used to:

-   Confirm the reachability of the creditor agent BIC when processing a CustomerCreditTransferInitiation (pain.001) and before submitting the corresponding FIToFICustomerCreditTransfer (pacs.008)
    
-   Re-check BIC reachability as part of recall and investigation flows, such as FIToFIPaymentCancellationRequest (camt.056)
    

If a BIC is not marked as reachable in the uploaded TIPS directory, the Payment is cancelled.

### [](#operational_considerations "Copy link to heading")Operational Considerations

Client owned applications, such as customer channels, may also use the `POST /v1/membership-directory-records:search` [endpoint](/vault-payments/latest/EN/api/payments_api#membership_directories) to check BIC reachability outside of flow execution.

Maintaining an accurate and timely TIPS Membership Directory is essential for ensuring outbound payments and recall requests are only attempted against reachable counterparties, as required by the SEPA Instant Credit Transfer rulebook.