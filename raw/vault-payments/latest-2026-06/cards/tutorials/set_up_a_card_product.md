---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/set_up_a_card_product"
title: "Set up a card product"
scraped_at: "2026-06-17T15:50:11.845Z"
images: 0
---

# Set up a card product

Setting up a [Card Product](/vault-payments/latest/EN/cards/concepts#card_products) is necessary before any `Cards` can be created. All possible `Card Product` configuration fields are described in the [API section](/vault-payments/latest/EN/api/payments_api#Card%20Products-CardProduct). This tutorial explains the optional configurations that depend on the client integration.

## [](#tokenised_transactions_configuration "Copy link to heading")Tokenised transactions configuration

In the Mastercard integration, you can choose whether the `Card Product` supports tokenised transactions (MDES) or not by setting the *allow\_digital\_wallets* flag to *true* or *false*.

Before the customer can use their tokenised card on their mobile phone or other device, they need to go through the tokenisation flow. If all the customer details (like names, address, phone, or email if present) are matching, their card is tokenised immediately. Otherwise an additional authentication is required. Currently Mastercard supports the following activation methods:

-   Masked mobile phone number
    
-   Masked email address
    
-   Automated call center phone number
    
-   Call center phone number
    
-   Website
    
-   Mobile application
    
-   Masked voice call phone number
    

The customer receives an *activation code* via *Masked mobile phone number* or *Masked email address* methods. They need to enter that code to finish the tokenisation flow.

chat\_bubble

Currently only the *masked mobile phone number* activation method is supported by Vault Payments. More configuration options will be available in the future.

## [](#3d_secure_onfiguration "Copy link to heading")3D Secure onfiguration

3D Secure (3DS) is a protocol that adds an extra security layer for ecommerce card transactions. A customer can be challenged via the following methods:

-   SMS
    
-   Email
    
-   Approval request within a client’s application
    

chat\_bubble

Currently only the *SMS* challenge type is supported by Vault Payments. More configuration options will be available in the future.

## [](#physical_cards "Copy link to heading")Physical cards

In order to issue physical cards and ship them to customers, you need to have:

-   A [Card Profile](/vault-payments/latest/EN/cards/concepts#card_profile).
    
-   An integration with a personalisation bureau and configuration details agreed with them.
    

A `Card Product` that supports issuing physical cards has the following fields set:

-   *card\_profile\_id*
    
-   *personalisation\_bureau\_id*
    
-   *personalisation\_bureau\_config\_id*
    

Both `Card Profile` and personalisation bureau details need to be agreed as part of the offline process between the client, scheme and the personalisation bureau. A `Card Profile` must be approved by Mastercard via their `CPV` (Card Personalization Validation) or `CNS` (Change Notification Status) process. You also need to agree details like the card design, fulfilment options, envelope, insert, and return address with your personalisation bureau.