---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/concepts/decline_recommendations"
title: "Decline Recommendations"
scraped_at: "2026-06-17T15:49:54.263Z"
images: 0
---

# Decline Recommendations

Due to scheme requirements, pre-processing is performed on all card instructions before they enter the flow. For an authorisation, this may include verifying the validity of a PIN or CVC2 entered by a cardholder.

The results of pre-processing will be set in the processing indicators and the decline recommendations. The decline recommendations are stored in the `instruction.decline_recommendations` field. If not empty, it will contain entries for each of the reasons why the pre-processing recommends that the instruction be declined, and the scheme-specified decline response codes that could be used to decline it. For example, if the cardholder provided an invalid PIN on an Authorisation Initiation, then the `decline_recommendations` may contain an entry with reason `DECLINE_RECOMMENDATION_REASON_PIN_INVALID`, and the response code `55`.

While pre-processing cannot be skipped, the flow has the final decision on how to act on their results. By following all the decline recommendations, a flow can ensure closer scheme compliance, and a lower risk of accepting fraudulent payments. On the other hand, a flow can be configured to ignore certain decline recommendations to increase merchant acceptance if the correct risk assessment has been performed, though care should be taken to ensure it is still scheme compliant. For example, if a client notices that many of their customers have difficulties entering their address correctly, a flow could be configured to ignore `DECLINE_RECOMMENDATION_REASON_ADDRESS_INVALID` on an e-commerce payment if pre-processing has determined that the security codes are correct.

See \[Reasons\] for the list of valid reasons per instruction type, and their corresponding suggested response codes for declining.