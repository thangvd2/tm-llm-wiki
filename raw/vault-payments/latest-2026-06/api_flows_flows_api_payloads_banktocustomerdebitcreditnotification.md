---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomerdebitcreditnotification"
title: "Bank To Customer Debit Credit Notification"
scraped_at: "2026-06-17T05:09:32.172Z"
images: 0
---

# Bank To Customer Debit Credit Notification

`flows_api.payloads.banktocustomerdebitcreditnotification` module

Bank To Customer Debit Credit Notification

## [](#BankToCustomerDebitCreditNotification "Copy link to heading")BankToCustomerDebitCreditNotification

BankToCustomerDebitCreditNotification holds the supported versions of the camt.054.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v06`

 | 

`[BankToCustomerDebitCreditNotificationV06](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomerdebitcreditnotification#BankToCustomerDebitCreditNotificationV06)`

 | 

Version 06 of the BankToCustomerDebitCreditNotification message.

 |
| 

`message_v12`

 | 

`[BankToCustomerDebitCreditNotificationV12](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomerdebitcreditnotification#BankToCustomerDebitCreditNotificationV12)`

 | 

Version 12 of the BankToCustomerDebitCreditNotification message.

 |

## [](#BankToCustomerDebitCreditNotificationV06 "Copy link to heading")BankToCustomerDebitCreditNotificationV06

Scope The BankToCustomerDebitCreditNotification message is sent by the account servicer to an account owner or to a party authorised by the account owner to receive the message. It can be used to inform the account owner, or authorised party, of single or multiple debit and/or credit entries reported to the account. Usage The BankToCustomerDebitCreditNotification message can contain reports for more than one account. It provides information for cash management and/or reconciliation. The BankToCustomerDebitCreditNotification message can be used to: - report pending and booked items; - notify one or more debit entries; - notify one or more credit entries; - notify a combination of debit and credit entries. It can include underlying details of transactions that have been included in the entry. It is possible that the receiver of the message is not the account owner, but a party entitled by the account owner to receive the account information (also known as recipient). It does not contain balance information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader58](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader58)`

 | 

Common information for the message.

 |
| 

`notification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AccountNotification12](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountNotification12)]`

 | 

Notifies debit and credit entries for the account.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |

## [](#BankToCustomerDebitCreditNotificationV12 "Copy link to heading")BankToCustomerDebitCreditNotificationV12

Scope The BankToCustomerDebitCreditNotification message is sent by the account servicer to an account owner or to a party authorised by the account owner to receive the message. It can be used to inform the account owner, or authorised party, of single or multiple debit and/or credit entries reported to the account. Usage The BankToCustomerDebitCreditNotification message can contain reports for more than one account. It provides information for cash management and/or reconciliation. The BankToCustomerDebitCreditNotification message can be used to: - report pending and booked items; - notify one or more debit entries; - notify one or more credit entries; - notify a combination of debit and credit entries. It can include underlying details of transactions that have been included in the entry. It is possible that the receiver of the message is not the account owner, but a party entitled by the account owner to receive the account information (also known as recipient). It does not contain balance information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader116](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader116)`

 | 

Common information for the message.

 |
| 

`notification`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AccountNotification22](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountNotification22)]`

 | 

Notifies debit and credit entries for the account.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |