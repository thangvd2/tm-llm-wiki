---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/visa_dps/card_data_synchronization/card_limit_metadata"
title: "Card limit metadata"
scraped_at: "2026-06-17T05:12:06.776Z"
images: 0
---

# Card limit metadata

Visa DPS utilises limit metadata, managed through the Card & Account Maintenance Services (C&AM), to enforce transaction controls and manage risk at the card or account level. While standard transaction limits are typically defined globally on the Visa DPS side as part of the Client Configuration Form (CCF) process, Visa DPS supports dynamic limit overrides. These metadata fields allow issuers to dictate the maximum transaction amounts, allowable frequencies, and specific transaction types a cardholder can perform with a given timeframe. By passing specific metadata instructions, the bank can temporarily or permanently adjust these boundaries for individual users without altering the baseline product configuration.

## [](#c204_override_limit "Copy link to heading")C204 Override Limit

The **C204 Override Limit** configuration allows a client to override the maximum daily amount or usage count allowed for all transactions associated with a specific limit type.

### [](#field_mapping "Copy link to heading")Field mapping

When configuring a C204 Override Limit, the following fields determines the parameters of the override:

  
| Internal Field | Visa DPS Target Field | Description |
| --- | --- | --- |
| 
`daily_limit_amount`

 | 

Limit Amount

 | 

Overrides the maximum daily financial amount allowed for the specific transaction type.

 |
| 

`daily_limit_transaction_number`

 | 

Limit Uses

 | 

Restricts the maximum number of times the card can be used for the specified transaction type per day.

 |
| 

`daily_limit_expiry_date`

 | 

Expiration Date

 | 

The specific date the override limit expires.

 |

### [](#expiry_behaviour "Copy link to heading")Expiry Behaviour

C&AM dynamically evaluates the `daily_limit_expiry_date` during the transaction processing. If this field is populated, C&AM checks the value to determine if it is current. If the date is in the past, the override is ignored and treated as expired, and reverts the card to using their standard limits.

### [](#zero_value_overrides_and_transaction_access "Copy link to heading")Zero Value Overrides and Transaction Access

Transaction access configurations are managed within the metadata payload under `C201CardInfoType.TransactionAccess`.

Vault Payments applies the following boolean logic based on the override values: if the `daily_limit_amount` or `daily_limit_transaction_number` is set to exactly zero (`0`), the system sets the corresponding transaction access types to `false`, acting as a hard block. If the limit override value is greater than zero, the corresponding access types are set to `true`.

error

Supported override limit field values must be between 1 and 99,999, unless set to 0.

Setting the `daily_limit_amount` or `daily_limit_transaction_number` to exactly zero (`0`) acts as a hard block. When configured to zero, Vault Payments updates the corresponding limit ID flags by sending a request to C&AM to fully restrict access to the specified transaction behaviour.

Depending on the targeted limit type, a zero-value override updates the following specific boolean flags within `TransactionAccess` to `false`:

  
| Transaction Access Field | Targeted Limit Type | Override Action |
| --- | --- | --- |
| 
Deposits

 | 

\-

 | 

Not updated by this limit logic.

 |
| 

Inquiries

 | 

\-

 | 

Not updated by this limit logic.

 |
| 

PaymentsTo

 | 

\-

 | 

Not updated by this limit logic.

 |
| 

PaymentsFrom

 | 

\-

 | 

Not updated by this limit logic.

 |
| 

Purchases

 | 

PURCHS

 | 

Updated to `false` if limit is 0.

 |
| 

ThirdPartyPayment

 | 

\-

 | 

Not updated by this limit logic.

 |
| 

TransfersTo

 | 

AFT

 | 

Updated to `false` if limit is 0.

 |
| 

TransfersFrom

 | 

AFT

 | 

Updated to `false` if limit is 0.

 |
| 

Withdrawals

 | 

WITHDR

 | 

Updated to `false` if limit is 0.

 |

### [](#example_card_limit_override_request "Copy link to heading")Example card limit override request

chat\_bubble

**All Withdrawals and Purchases (AWP) Limit** The AWP limit type represents the summation of AFT, PURCHS, and WITHDR. It acts as a global cap for all outgoing funds.

#### [](#all_limits_override "Copy link to heading")All limits override

#### [](#single_limit_override "Copy link to heading")Single limit override