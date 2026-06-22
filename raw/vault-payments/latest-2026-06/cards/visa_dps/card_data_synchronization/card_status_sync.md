---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/visa_dps/card_data_synchronization/card_status_sync"
title: "Synchronization behaviour"
scraped_at: "2026-06-17T15:50:30.273Z"
images: 0
---

# Synchronization behaviour

Visa DPS synchronizes data with Vault Payments using specific network messages to ensure that card states remain consistent. When a card’s status changes on the network side, Visa DPS sends an Acquirer File Update Request Message (0300) to Vault Payments.

## [](#0300_card_status_update_mapping "Copy link to heading")0300 Card Status Update Mapping

The resulting status of the card within Vault Payments is dynamically mapped based on a specific combination of data received in the 0300 payload.

The primary fields evaluated during this sync are:

-   **Field 39 - Response Code:** In the case of PI-Negative File request, this field indicates the disposition of the card.
    
-   **Field 91 - File Update Code:** A code that specifies the type of file processing required.
    
-   **Field 101 - File Name:** An identifier indicating the type of maintenance or notification message.
    
-   **Field 124 - Info, Text:** Indicates the type of Host Notification message being sent.
    

Vault Payments evaluates these fields and applies the resulting card status according to the mapping table below. Fields marked with a dash are not evaluated for that specific logic branch.

    
| Field 101 | Field 39 | Field 91 | Field 124 | Resulting Card Status |
| --- | --- | --- | --- | --- |
| 
`PI-NEGATIVE`

 | 

`07`, `41`, `43`, `04`, `34`, `36`

 | 

\-

 | 

\-

 | 

`CARD_STATUS_DISABLED`

 |
| 

`PI-NEGATIVE`

 | 

`05`, `59`, `62`, `LK`

 | 

\-

 | 

\-

 | 

`CARD_STATUS_SUSPENDED`

 |
| 

`PI-NEGATIVE`

 | 

\-

 | 

`03`

 | 

\-

 | 

`CARD_STATUS_ACTIVE`

 |
| 

`HOST-NOTIFICATION`

 | 

\-

 | 

`02`

 | 

`01`, `02`

 | 

`CARD_STATUS_ACTIVE`

 |
| 

`PI-NEGATIVE`

 | 

`89`

 | 

`02`

 | 

\-

 | 

No change (Ignored)

 |

The definition of the card status can be found at this [link](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CardStatus).