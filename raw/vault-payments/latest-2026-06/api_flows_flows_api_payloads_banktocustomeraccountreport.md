---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomeraccountreport"
title: "Bank To Customer Account Report"
scraped_at: "2026-06-17T05:09:30.413Z"
images: 0
---

# Bank To Customer Account Report

`flows_api.payloads.banktocustomeraccountreport` module

Bank To Customer Account Report

## [](#BankToCustomerAccountReport "Copy link to heading")BankToCustomerAccountReport

BankToCustomerAccountReport holds the supported versions of the camt.052.001 payload

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message_v08`

 | 

`[BankToCustomerAccountReportV08](/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomeraccountreport#BankToCustomerAccountReportV08)`

 | 

Version 08 of the BankToCustomerAccountReport message.

 |

## [](#BankToCustomerAccountReportV08 "Copy link to heading")BankToCustomerAccountReportV08

Scope The BankToCustomerAccountReport message is sent by the account servicer to an account owner or to a party authorised by the account owner to receive the message. It can be used to inform the account owner, or authorised party, of the entries reported to the account, and/or to provide the owner with balance information on the account at a given point in time. Usage The BankToCustomerAccountReport message can contain reports for more than one account. It provides information for cash management and/or reconciliation. It can be used to: - report pending and booked items; - provide balance information. It can include underlying details of transactions that have been included in the entry. It is possible that the receiver of the message is not the account owner, but a party entitled by the account owner to receive the account information (also known as recipient). For a statement, the Bank-to-Customer Account Statement message should be used.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`group_header`

 | 

`[flows_api.payloads.common.GroupHeader81](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#GroupHeader81)`

 | 

Common information for the message.

 |
| 

`report`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.AccountReport25](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#AccountReport25)]`

 | 

Reports on a cash account.

 |
| 

`supplementary_data`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.payloads.common.SupplementaryData1](/vault-payments/latest/EN/api/flows/flows_api/payloads/common#SupplementaryData1)]`

 | 

Additional information that cannot be captured in the structured elements and/or any other  
specific block.

 |