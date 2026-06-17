---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/postinginstruction"
title: "Posting Instructions"
scraped_at: "2026-06-17T05:10:33.506Z"
images: 0
---

# Posting Instructions

`flows_api.postinginstruction` module

Types relating to creating posting instructions to core banking engines, especially Vault Core.

## [](#PostingInstructionBatch "Copy link to heading")PostingInstructionBatch

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`id`

 | 

`str`

 | 

Uniquely identifies a posting instruction batch in Vault.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`core_id`

 | 

`str`

 | 

The ID of the Core resource to be used for the posting integration in the  
VaultCorePostingStep. This can be used to set or override which Core should be used for  
postings. Optional, if not set the value in target\_account.core\_id will be used.

 |
| 

`client_batch_id`

 | 

`str`

 | 

Used as a correlation ID across different posting instruction batches.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`posting_instructions`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[PostingInstruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstruction)]`

 | 

A non-empty list of posting instruction objects to be processed atomically.  
Required.

 |
| 

`batch_details`

 | 

`Dict[str, str]`

 | 

Stores metadata related to the posting instruction batch resource. These details can  
also be retrieved in the posting instruction resource.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`status`

 | 

`[PostingInstructionBatchStatus](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingInstructionBatchStatus)`

 | 

The status of the processing of the posting instruction batch.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`dry_run`

 | 

`bool`

 | 

If true, the request will be executed with no side effects.

 |
| 

`insertion_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time this posting instruction batch was inserted in Vault.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`value_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time at which all committed postings of this batch’s posting instructions  
will affect balances. For most cases, including real time payments or fund movements, this  
does not require setting and will default to the generated `insertion_timestamp`. Only  
backdating of posting instruction batches is supported; this means that you cannot set them  
to be in the future, as determined by the clock of the ledger service. The earliest allowed  
value is 1970-01-01T00:00:00Z. Optional; defaults to the insertion timestamp in UTC.  
Can not be set if the value\_timestamp in the PostingInstruction is set. If set at the  
PostingInstructionBatch level, the response will have value\_timestamp populated on both the  
PostingInstructionBatch and in the PostingInstructions. This is also the case when defaulting  
to the insertion timestamp.

 |
| 

`booking_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Optional. Specifies the booking time of all committed postings of this batch’s Posting  
Instructions. Defaults to `value_timestamp` (which, in turn, defaults to  
`insertion_timestamp`), and by extension is populated on the response in the same manner.  
Can only be used for back-booked Posting Instruction Batches  
(PIBs), and can only be set if `value_timestamp` is also passed in the request; in which  
case `booking_timestamp` must be later than `value_timestamp`, and be set at the same  
level as the `value_timestamp`.

 |
| 

`source_insertion_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time this posting instruction batch was inserted in the source core banking  
engine. Will always have the same value as `insertion_timestamp` unless the posting  
instruction batch was migrated into Vault via the Posting Migration API.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |

## [](#PostingInstruction "Copy link to heading")PostingInstruction

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`outbound_authorisation`

 | 

`[OutboundAuthorisation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#OutboundAuthorisation)`

 | 

Used to authorise outgoing funds.

 |
| 

`inbound_authorisation`

 | 

`[InboundAuthorisation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#InboundAuthorisation)`

 | 

Used to authorise incoming funds.

 |
| 

`authorisation_adjustment`

 | 

`[AuthorisationAdjustment](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#AuthorisationAdjustment)`

 | 

Used to adjust an authorisation amount that was previously ring-fenced  
by an OutboundAuthorisation or InboundAuthorisation.

 |
| 

`settlement`

 | 

`[Settlement](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Settlement)`

 | 

Used to clear funds pre-authorised by either an OutboundAuthorisation or an  
InboundAuthorisation.

 |
| 

`release`

 | 

`[Release](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Release)`

 | 

Used to release previously authorised funds.

 |
| 

`inbound_hard_settlement`

 | 

`[InboundHardSettlement](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#InboundHardSettlement)`

 | 

Used to apply funds to an account that have not been previously authorised.

 |
| 

`outbound_hard_settlement`

 | 

`[OutboundHardSettlement](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#OutboundHardSettlement)`

 | 

Used to withdraw funds from an account without previously authorising them.

 |
| 

`transfer`

 | 

`[Transfer](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Transfer)`

 | 

Used to transfer funds between two accounts in Vault.

 |
| 

`custom_instruction`

 | 

`[CustomInstruction](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#CustomInstruction)`

 | 

Used to apply a set of credits and debits.

 |
| 

`instruction_details`

 | 

`Dict[str, str]`

 | 

Stores metadata related to the posting instruction. Contract execution will have access to  
these. If a restriction has exemption conditions and all the exemption conditions are present  
as key-value pairs, the restriction will not be applied to this posting instruction.

 |
| 

`override`

 | 

`[Override](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Override)`

 | 

Allows the caller to override certain checks for this PostingInstruction.

 |
| 

`transaction_code`

 | 

`[TransactionCode](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TransactionCode)`

 | 

ISO20022 Bank Transaction Code field, a set of properties to identify underlying transaction.

 |
| 

`posting_instruction_chain`

 | 

`str`

 | 

An identifier to chain posting instructions together. This value will be used with the  
instruction’s correlation ID to create an ID that will be the same throughout a  
financial process’s lifecycle.  
  
Optional, will be set to a default value automatically and will not need to be set unless a  
payment lifecycle contains multiple chains of posting instructions.  
  
Only applies to chainable posting instructions:  
OutboundAuthorisation, InboundAuthorisation, AuthorisationAdjustment, Settlement, Release  
  
e.g. 3 Posting Instructions are made for the same correlation ID:  
  
An OutboundAuthorisation posting is made with chain "primary"  
another OutboundAuthorisation posting is made with chain "additional\_fees"  
then a Settlement posting with chain "additional\_fees" will settle the second posting

 |
| 

`client_transaction_id`

 | 

`str`

 | 

The ID of the client transaction this posting instruction is creating or mutating.  
This field is calculated automatically based on the posting\_instruction\_chain and output  
only.

 |
| 

`posting_violations`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[PostingViolation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingViolation)]`

 | 

Captures rejection reasons caused by posting logic validity checks. For example:  
Cannot adjust an authorisation that has already been settled.

 |
| 

`account_violations`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AccountViolation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#AccountViolation)]`

 | 

Captures rejection reasons and details caused by account checks. For example:  
Account closed.

 |
| 

`restriction_violations`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RestrictionViolation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#RestrictionViolation)]`

 | 

Captures rejection reasons and rejection details caused by restrictions. For example:  
Restriction with ID 'xyz123' prevented this instruction.

 |
| 

`contract_violations`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[ContractViolation](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#ContractViolation)]`

 | 

Captures rejection reasons and rejection details caused by contract execution. For example:  
Insufficient funds.

 |
| 

`booking_localised_date_time`

 | 

`str`

 | 

An RFC 3339 compliant date/time string representing the `booking_timestamp` of the  
PostingInstructionBatch, localised into the time zone of the processing group associated with  
accounts referenced in this PostingInstruction. As the processing group may change over time,  
this field will not be populated for future-booked postings.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`value_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time at which all committed postings of this PostingInstruction will affect  
balances. For most cases, including real time payments or fund movements, this does not  
require setting and will default to the generated `insertion_timestamp`. Should only be set  
for backdated and future-dated instructions and must be between 1970-01-01T00:00:00Z and the  
current time + 90 calendar days, inclusive. Defaults to the `insertion_timestamp` in UTC.

 |
| 

`booking_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time at which all committed postings of this PostingInstruction will be booked.  
For most cases, including real time payments or fund movements, this does not require  
setting and will default to the `insertion_timestamp`. Should only be set for back-booked and  
future-booked instructions and must be between 1970-01-01T00:00:00Z and the current time  
\+ 90 calendar days, inclusive. Defaults to the `insertion_timestamp` in UTC.

 |
| 

`insertion_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time the posting instruction was inserted in Vault.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`source_insertion_timestamp`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Specifies the time the posting instruction was inserted in the source  
core banking engine. Will always have the same value as  
`insertion_timestamp` unless posting instruction was migrated into Vault  
via the Posting Migration API.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`enrichments`

 | 

`Dict[str, Enrichment]`

 | 

Shows enrichment data for this Posting Instruction made by a Contract Pre-Posting Hook.  
Keyed by account ID. Output-only, except for Migration Postings API requests.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |

## [](#OutboundAuthorisation "Copy link to heading")OutboundAuthorisation

OutboundAuthorisation creates a funds hold (ring-fence the funds) on the the target account.

For this instruction Vault Core will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution

Resulting postings committed (if accepted): - Dr | amount | target\_account\_id | PHASE\_PENDING\_OUTGOING - Cr | amount | internal\_account\_id | PHASE\_PENDING\_OUTGOING

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The authorisation amount.

 |
| 

`currency`

 | 

`str`

 | 

The instruction currency in the form of an ISO4217 alpha code.

 |
| 

`target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TargetAccount)`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The `internal_account_id` must be the ID of an internal account in Vault.

 |
| 

`advice`

 | 

`bool`

 | 

This can be set to true to ensure that funds are ringfenced regardless of the outcome of  
balance checks.  
To ensure that posting instructions with `advice` set to true are excluded  
from the contract balance check, the flag `exclude_advice` must also be set to true.

 |
| 

`target_account_id`

 | 

`str`

 | 

The `account_id` of the instruction’s `target_account`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction.  
This field requires the `target_account` field to be set with an `account_id`.  
Optional: if supplied, the instruction targets the provided Sub-Account ID associated to the  
provided account. Otherwise, it targets the provided account.

 |

## [](#TargetAccount "Copy link to heading")TargetAccount

TargetAccount describes an account being targeted by a Posting instruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`payment_device_token`

 | 

`str`

 | 

A payment device token that uniquely identifies a payment device link based on the  
value\_timestamp of the posting instruction. When the target\_account is specified via the  
token, Vault will resolve the token to a Vault account and the account\_id will be  
returned in the posting instruction target\_account\_id field.

 |
| 

`account_id`

 | 

`str`

 | 

The ID of an account in Vault.

 |

## [](#InboundAuthorisation "Copy link to heading")InboundAuthorisation

InboundAuthorisation authorises incoming funds into the target\_account.

For this instruction Vault Core will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution

Resulting postings committed (if accepted): - Dr | amount | internal\_account\_id | PHASE\_PENDING\_INCOMING - Cr | amount | target\_account\_id | PHASE\_PENDING\_INCOMING

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The authorisation amount.

 |
| 

`currency`

 | 

`str`

 | 

The instruction currency in the form of an ISO4217 alpha code.

 |
| 

`target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TargetAccount)`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The `internal_account_id` must be the ID of an internal account in Vault.

 |
| 

`advice`

 | 

`bool`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance  
checks.  
To ensure that posting instructions with `advice` set to true are excluded  
from the contract balance check, the flag `exclude_advice` must also be set to true.

 |
| 

`target_account_id`

 | 

`str`

 | 

The `account_id` of the instruction’s `target_account`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction.  
This field requires the `target_account` field to be set with an `account_id`.  
Optional: if supplied, the instruction targets the provided Sub-Account ID associated to the  
provided account. Otherwise, it targets the provided account.

 |

## [](#AuthorisationAdjustment "Copy link to heading")AuthorisationAdjustment

AuthorisationAdjustment can be used to change the amount that was ring-fenced by either: - A previously accepted OutboundAuthorisation or InboundAuthorisation; or - A previous AuthorisationAdjustment. The authorisation is identified by the PostingInstruction client\_transaction\_id.

For this instruction Vault Core will perform: - idempotency check - Posting logic checks (which verify that a previously accepted OutboundAuthorisation or InboundAuthorisation exists and the client\_transaction has not entered the clearing/release state yet) - contract execution (only for positive ring-fenced amounts)

Resulting postings committed (if accepted):

Postings for AuthorisationAdjustment of OutboundAuthorisation: <> adjustment\_amount = amount; amount > 0: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = amount; amount < 0: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = replacement\_amount; replacement\_amount > current amount - Dr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING <> adjustment\_amount = replacement\_amount; replacement\_amount < current amount - Cr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING

Postings for AuthorisationAdjustment of InboundAuthorisation: <> adjustment\_amount = amount; amount > 0: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = amount; amount < 0: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = replacement\_amount; replacement\_amount > current amount - Cr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Dr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING <> adjustment\_amount = replacement\_amount; replacement\_amount < current amount - Dr | delta\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | delta\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

A delta amount. The sign of the delta can be given explicitly (`"+3.40"`, `"-20"`)  
or implicitly if it is positive (e.g "3.40" is the same as "+3.40").

 |
| 

`replacement_amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

A new amount, to replace the existing authorised amount.

 |
| 

`authorised_amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The total amount authorised for this client transaction after the accepted instruction  
was accepted. This field is not returned if the instruction is rejected.

 |
| 

`delta_amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The change the accepted instruction has made to the amount authorised for this client  
transaction. This field is not returned if the instruction is rejected.

 |
| 

`advice`

 | 

`bool`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance  
checks.  
To ensure that posting instructions with `advice` set to true are excluded  
from the contract balance check, the flag `exclude_advice` must also be set to true.

 |
| 

`denomination`

 | 

`str`

 | 

The instruction denomination.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_account_id`

 | 

`str`

 | 

The `account_id` of the `target_account` for this `client_transaction`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The `account_id` of the `internal_account` for this `client_transaction`. This is an  
alternative to `internal_account_processing_label` and cannot be used in conjunction with it  
but one of these two fields must be specified.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction. Output only.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |

## [](#Settlement "Copy link to heading")Settlement

Settlement clears funds that have previously been authorised.

Settlements can only act on client transactions that have not been release or settled with the final flag set.

For this instruction Vault Core will perform: - idempotency check - Posting logic checks (whether or not there was an accepted InboundAuthorisation or OutboundAuthorisation for the same client transaction) - check that underlying authorisation we are settling is still in a clearing state. (No Release or final Settlement received). - if the amount is specified and it’s different than the authorisation hold, then Vault will create additional postings to reflect the change. Please note that this may bring the account balance negative, as contract execution won’t be performed. - if final is set to true, Vault will release any outstanding balance ring-fenced by the original authorisation. - if require\_pre\_posting\_hook\_execution is set to true, then the pre-posting hook will be triggered for this instruction.

Note: in the below examples for a given client\_transaction\_id: - ringfenced\_amount = initial OutboundAuth/InboundAuth amount + AuthAdjustment amounts (these can be +ve or -ve) - Settlement amounts

Resulting postings committed (if accepted):

Postings for Settlement of OutboundAuthorisation: <> Settlement of OutboundAuthorisation and amount = ringfenced\_amount and final = true/false: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

<> Settlement of OutboundAuthorisation and amount > ringfenced\_amount and final = true/false: - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

<> Settlement of OutboundAuthorisation and amount < ringfenced\_amount and final = false: - Cr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

<> Settlement of OutboundAuthorisation and amount < ringfenced\_amount and final = true: - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Dr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Cr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

Postings for Settlement of InboundAuthorisation: <> Settlement of InboundAuthorisation and amount = ringfenced\_amount and final = true/false: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

<> Settlement of InboundAuthorisation and amount > ringfenced\_amount and final = true/false: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

<> Settlement of InboundAuthorisation and amount < ringfenced\_amount and final = false: - Dr | amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

<> Settlement of InboundAuthorisation and amount < ringfenced\_amount and final = true: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | amount | auth\[target\_account\_id\] | PHASE\_COMMITTED - Dr | amount | auth\[internal\_account\_id\] | PHASE\_COMMITTED

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The amount to be cleared. Optional: if not supplied it will be calculated as  
amount = total amount authorised for this client transaction - total amount cleared.

 |
| 

`final`

 | 

`bool`

 | 

If set to true, any remaining amount authorised for this client transaction will be released.  
No instruction may mutate a client transaction once a final settlement has mutated it.

 |
| 

`require_pre_posting_hook_execution`

 | 

`bool`

 | 

If set to true, the pre-posting hook will be triggered for this instruction. Optional; if  
not supplied, the pre-posting hook may be triggered by other instructions within this batch,  
but this instruction will not be visible to the hook.

 |
| 

`denomination`

 | 

`str`

 | 

The instruction denomination.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_account_id`

 | 

`str`

 | 

The instruction `target_account_id`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The instruction `internal_account_id`. This is an alternative to  
`internal_account_processing_label` and cannot be used conjunction, but one of these two  
fields must be specified.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction. Output only.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |

## [](#Release "Copy link to heading")Release

Release removes an authorisation hold. The client transaction being released is identified by the client\_transaction\_id in the parent PostingInstruction.

Note: No other Posting Instructions will be accepted after the transaction has been released.

For this instruction Vault Core will perform: - idempotency check - Posting logic checks (was there an Inbound or Outbound authorisation for it? was accepted?) - check that underlying authorisation we are settling is still in a clearing state. (No Release or final Settlement received). - if require\_pre\_posting\_hook\_execution is set to true, then the pre-posting hook will be triggered for this instruction.

Note - ringfenced\_amount = initial OutboundAuth/InboundAuth amount + AuthAdjustment amounts (these can be +ve or -ve) - Settlement amounts

Resulting postings committed (if accepted):

<> Release of OutboundAuthorisation: - Dr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_OUTGOING - Cr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_OUTGOING <> Release of InboundAuthorisation: - Dr | ringfenced\_amount | auth\[target\_account\_id\] | PHASE\_PENDING\_INCOMING - Cr | ringfenced\_amount | auth\[internal\_account\_id\] | PHASE\_PENDING\_INCOMING

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`require_pre_posting_hook_execution`

 | 

`bool`

 | 

If set to true, the pre-posting hook will be triggered for this instruction. Optional; if  
not supplied, the pre-posting hook may be triggered by other instructions within this batch,  
but this instruction will not be visible to the hook.

 |
| 

`amount`

 | 

`str`

 | 

The amount released.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`denomination`

 | 

`str`

 | 

The instruction release denomination.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_account_id`

 | 

`str`

 | 

The instruction `target_account_id`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The instruction `internal_account_id`. This is an alternative to  
`internal_account_processing_label` and cannot be used in conjunction with it but one of  
these two fields must be specified.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction. Output only.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |

## [](#InboundHardSettlement "Copy link to heading")InboundHardSettlement

InboundHardSettlement is an instruction that authorises and settles incoming funds into the target account.

For this instruction Vault Core will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution

Resulting postings committed (if accepted): - Dr | amount | internal\_account\_id | PHASE\_COMMITTED - Cr | amount | target\_account\_id | PHASE\_COMMITTED

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The instruction amount.

 |
| 

`currency`

 | 

`str`

 | 

The instruction currency in the form of an ISO4217 alpha code.

 |
| 

`target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TargetAccount)`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The `internal_account_id` must be the ID of an internal account in Vault.

 |
| 

`advice`

 | 

`bool`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance  
checks.  
To ensure that posting instructions with `advice` set to true are excluded  
from the contract balance check, the flag `exclude_advice` must also be set to true.

 |
| 

`target_account_id`

 | 

`str`

 | 

The `account_id` of the instruction’s `target_account`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction.  
This field requires the `target_account` field to be set with an `account_id`.  
Optional: if supplied, the instruction targets the provided Sub-Account ID associated to the  
provided account. Otherwise, it targets the provided account.

 |

## [](#OutboundHardSettlement "Copy link to heading")OutboundHardSettlement

OutboundHardSettlement is an instruction that authorises and settles outgoing funds from the target account.

For this instruction Vault Core will perform: - idempotency check - account resolution - account checks - account/customer/payment\_device restrictions - contract execution

Resulting postings committed (if accepted): - Dr | amount | target\_account\_id | PHASE\_COMMITTED - Cr | amount | internal\_account\_id | PHASE\_COMMITTED

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The instruction amount.

 |
| 

`currency`

 | 

`str`

 | 

The instruction currency in the form of an ISO4217 alpha code.

 |
| 

`target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TargetAccount)`

 | 

The instruction `target_account`.

 |
| 

`internal_account_id`

 | 

`str`

 | 

The `internal_account_id` must be the ID of an internal account in Vault.

 |
| 

`advice`

 | 

`bool`

 | 

Can be set to true to ensure that funds are ringfenced regardless of the outcome of balance  
checks.  
To ensure that posting instructions with `advice` set to true are excluded  
from the contract balance check, the flag `exclude_advice` must also be set to true.

 |
| 

`target_account_id`

 | 

`str`

 | 

The `account_id` of the instruction’s `target_account`.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

A processing label for specifying an Internal Account, which can be used instead of directly  
specifying an Internal Account ID. The Processing Group of the target Account determines  
which Internal Account this label will resolve to. This is an alternative to  
`internal_account_id` and cannot be used in conjunction with it but one of these two fields  
must be specified.  
**Multiple Processing Groups are only available as an Extension.**

 |
| 

`target_account_address`

 | 

`str`

 | 

The target account address of the instruction.  
Optional: if not supplied, it defaults to the DEFAULT address

 |
| 

`asset`

 | 

`str`

 | 

The asset of the instruction.  
Optional: if not supplied, it defaults to the COMMERCIAL\_BANK\_MONEY asset

 |
| 

`target_sub_account_id`

 | 

`str`

 | 

The target Sub-Account ID of the instruction.  
This field requires the `target_account` field to be set with an `account_id`.  
Optional: if supplied, the instruction targets the provided Sub-Account ID associated to the  
provided account. Otherwise, it targets the provided account.

 |

## [](#Transfer "Copy link to heading")Transfer

Transfer is an instruction that moves funds from the debtor to the creditor target account

Transfer PostingInstruction models an atomic transaction, no Adjustments, Settlements or other instructions can be passed with the same client\_transaction\_id.

For this instruction Vault Core will perform: - idempotency check - account resolution - account checks on both debitor and creditor’s accounts - account/customer/payment\_device restrictions on both debitor and creditor’s accounts - contract execution on both debitor and creditor’s accounts

Resulting postings committed (if accepted): - Dr | amount | debtor\_account\_id | PHASE\_COMMITTED - Cr | amount | creditor\_account\_id | PHASE\_COMMITTED

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

The amount to transfer.

 |
| 

`currency`

 | 

`str`

 | 

The instruction currency in the form of an ISO4217 alpha code.

 |
| 

`debtor_target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TargetAccount)`

 | 

The account being debited.

 |
| 

`creditor_target_account`

 | 

`[TargetAccount](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#TargetAccount)`

 | 

The account being credited.

 |
| 

`debtor_target_account_id`

 | 

`str`

 | 

The `account_id` of the debtor.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`creditor_target_account_id`

 | 

`str`

 | 

The `account_id` of the creditor.  
Cannot be set in a VaultCorePostingsStep Posting Function.

 |
| 

`debtor_target_sub_account_id`

 | 

`str`

 | 

The Sub-Account being debited.  
This field requires the `debtor_target_account` field to be set with an `account_id`.  
Optional: if supplied, the provided Sub-Account ID is debited. If not, the provided account  
is debited.

 |
| 

`creditor_target_sub_account_id`

 | 

`str`

 | 

The Sub-Account being credited.  
This field requires the `creditor_target_account` field to be set with an `account_id`.  
Optional: if supplied, the provided Sub-Account ID is credited. If not, the provided account  
is credited.

 |
| 

`creditor_target_account_address`

 | 

`str`

 | 

The address being credited.  
If `creditor_target_sub_account_id` is provided, this field must be set.  
If `creditor_target_sub_account_id` is not provided, this field must not be set by the user.  
The value will always be 'DEFAULT' and cannot be changed.

 |
| 

`debtor_target_account_address`

 | 

`str`

 | 

The address being debited.  
If `debtor_target_sub_account_id` is provided, this field must be set.  
If `debtor_target_sub_account_id` is not provided, this field must not be set by the user.  
The value will always be 'DEFAULT' and cannot be changed.

 |

## [](#CustomInstruction "Copy link to heading")CustomInstruction

CustomInstruction specifies a list of credits and debits to be written to the ledger.

For this instruction Vault Core will perform the following checks: - There are 128 or fewer postings in the instruction - Net amounts credited and debited are equal - Idempotency - Account status - Account/customer/payment\_device restrictions

If they are accepted the resulting postings committed are specified by the postings field.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`postings`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Posting](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#Posting)]`

 | 

A list of postings (credits and debits). The net sum of credit postings must equal the net  
sum of debit postings per asset/denomination/phase.

 |

## [](#Posting "Copy link to heading")Posting

Posting represents a Credit/Debit of funds to an account\_id/account\_address.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`credit`

 | 

`bool`

 | 

Indicates whether the posting is a credit or debit.

 |
| 

`amount`

 | 

`str`

 | 

The posting amount.

 |
| 

`denomination`

 | 

`str`

 | 

The posting denomination.

 |
| 

`account_id`

 | 

`str`

 | 

The ID of the Vault account being posted to. This is an alternative to  
`internal_account_processing_label` and cannot be used in conjunction with  
it but one of these two fields must be specified.

 |
| 

`account_address`

 | 

`str`

 | 

The address of the Vault account being posted to.

 |
| 

`asset`

 | 

`str`

 | 

The asset value of the posting.

 |
| 

`phase`

 | 

`[PostingPhase](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingPhase)`

 | 

The posting phase.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

You can use a processing label to specify an Internal Account as part of a Custom Instruction  
instead of directly referencing an account ID.  
If you use a processing label in a CustomInstruction, there must be at least one posting in  
the same instruction that does not use a label, using the account\_id instead. The internal  
account then resolves using the processing group of the account identified by this  
account\_id. If a posting of a CustomInstruction using a processing label does not contain an  
account\_id, this request will fail. You also cannot instruct a CustomInstruction in which  
labels are used in all its postings.  
**Multiple Processing Groups are only available as an Extension.**

 |
| 

`sub_account_id`

 | 

`str`

 | 

The ID of the Sub-Account being posted to.  
If `sub_account_id` is empty, the posting targets the provided `account_id`.  
If `sub_account_id` is non-empty, the posting targets the provided `sub_account_id`  
associated to the `account_id`.

 |

## [](#Override "Copy link to heading")Override

Override is used to override certain checks for a posting instruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restrictions`

 | 

`[OverrideRestrictions](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#OverrideRestrictions)`

 | 

The Override Restrictions.

 |

## [](#OverrideRestrictions "Copy link to heading")OverrideRestrictions

OverrideRestrictions allows a caller to skip all or some restrictions from impacting a PostingInstruction. Caller may not set more than one field. As such, either the `all`, or the `restriction_set_ids` field may be set.

Note that the restrictions specified here will be overridden for each account targeted by this PostingInstruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`all`

 | 

`bool`

 | 

The caller may choose to override all account restriction checks for a posting instruction by  
setting this field to true.

 |
| 

`restriction_set_ids`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

The caller may choose to override certain account restrictions by passing its restriction set  
ID here.

 |

## [](#TransactionCode "Copy link to heading")TransactionCode

ISO20022 Bank Transaction Code.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`domain`

 | 

`str`

 | 

Business area of the transaction.

 |
| 

`family`

 | 

`str`

 | 

A family within the domain.

 |
| 

`subfamily`

 | 

`str`

 | 

Sub-product family within a specific family.

 |

## [](#PostingViolation "Copy link to heading")PostingViolation

PostingViolation describes a Posting API violation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[PostingViolationType](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#PostingViolationType)`

 | 

The type of violation.

 |

## [](#AccountViolation "Copy link to heading")AccountViolation

AccountViolation describes a violation related to an account targeted by a PostingInstruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`str`

 | 

The ID of the account affected by the violation.

 |
| 

`payment_device_token`

 | 

`str`

 | 

The payment device token affected by the violation.

 |
| 

`type`

 | 

`[AccountViolationType](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#AccountViolationType)`

 | 

The type of violation.

 |
| 

`internal_account_processing_label`

 | 

`str`

 | 

The internal account processing label affected by the violation.

 |
| 

`sub_account_id`

 | 

`str`

 | 

The ID of the Sub-Account associated to the account that is affected by the violation.

 |

## [](#RestrictionViolation "Copy link to heading")RestrictionViolation

RestrictionViolation characterises a violation regarding restriction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`restriction_set_id`

 | 

`str`

 | 

Uniquely identifies this restriction in Vault.

 |
| 

`account_id`

 | 

`str`

 | 

This is set if this restriction violation is applied at an account level.

 |
| 

`payment_device_id`

 | 

`str`

 | 

This is set if this restriction violation is applied at a payment device level.

 |
| 

`customer_id`

 | 

`str`

 | 

This is set if this restriction violation is applied at a customer level.

 |
| 

`requires_review`

 | 

`bool`

 | 

If true, this restriction requires review. Otherwise it simply prevents it.

 |
| 

`type`

 | 

`[RestrictionViolationType](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#RestrictionViolationType)`

 | 

The type of restriction violation. For instructions instructed prior to Vault version 5.4,  
this will be returned as `RESTRICTION_VIOLATION_TYPE_UNKNOWN`.

 |

## [](#ContractViolation "Copy link to heading")ContractViolation

ContractViolation characterises a violation regarding contracts.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`account_id`

 | 

`str`

 | 

The ID of the account affected by the violation.

 |
| 

`type`

 | 

`[ContractViolationType](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#ContractViolationType)`

 | 

The type of contract violation.

 |
| 

`reason`

 | 

`str`

 | 

The reason for a contract violation.

 |
| 

`violation_type`

 | 

`[ContractExecutionViolationType](/vault-payments/latest/EN/api/flows/flows_api/postinginstruction#ContractExecutionViolationType)`

 | 

The type of contract violation.

 |
| 

`plan_id`

 | 

`str`

 | 

The ID of the plan affected by the violation.

 |

## [](#Enrichment "Copy link to heading")Enrichment

\* Instruction enrichment added by the Smart Contract through pre-posting.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`details`

 | 

`Dict[str, str]`

 | 

Metadata from pre-posting hook

 |

## [](#AccountViolationType "Copy link to heading")AccountViolationType

AccountViolation type characterises an account violations.

Enum values  
| Name | Description |
| --- | --- |
| 
`ACCOUNT_VIOLATION_ACCOUNT_NOT_PRESENT`

 | 

The instruction’s target account is not present.

 |
| 

`ACCOUNT_VIOLATION_ACCOUNT_STATUS_INVALID`

 | 

The instruction’s target account is in a status that doesn’t allow postings  
(for example, CLOSED or PENDING\_OPENING).

 |
| 

`ACCOUNT_VIOLATION_UNSUPPORTED_DENOMINATION`

 | 

The instruction’s target account does not support the posted denomination.

 |
| 

`ACCOUNT_VIOLATION_PAYMENT_DEVICE_INVALID`

 | 

The instruction’s payment device token resolved to a payment device that has an invalid  
status as of this batch’s value\_timestamp.

 |
| 

`ACCOUNT_VIOLATION_MULTIPLE_PROCESSING_GROUPS`

 | 

The instruction affects multiple accounts that do not all share the same processing group.

 |
| 

`ACCOUNT_VIOLATION_INTERNAL_ACCOUNT_PROCESSING_LABEL_NOT_PRESENT`

 | 

The instruction’s internal account processing label is not present.

 |
| 

`ACCOUNT_VIOLATION_SUB_ACCOUNT_NOT_PRESENT`

 | 

The instruction’s target Sub-Account associated to the Account is not present.

 |
| 

`ACCOUNT_VIOLATION_SUB_ACCOUNT_STATUS_INVALID`

 | 

The instruction’s target Sub-Account is in a status that doesn’t allow postings  
(for example, CLOSED, or PENDING).

 |
| 

`ACCOUNT_VIOLATION_ADDRESS_NOT_PERMITTED`

 | 

The instruction’s target address is not a permitted address for the Sub-Account type.

 |

## [](#ContractExecutionViolationType "Copy link to heading")ContractExecutionViolationType

\* ContractExecutionViolationType characterises a violation originating from contract code.

Enum values  
| Name | Description |
| --- | --- |
| 
`CONTRACT_EXECUTION_VIOLATION_UNKNOWN`

 | 

The contract execution violation type is unknown.

 |
| 

`CONTRACT_EXECUTION_VIOLATION_BREACH_TERMS_AND_CONDITIONS`

 | 

The instruction breaches the terms and conditions of the target account’s contract.

 |
| 

`CONTRACT_EXECUTION_VIOLATION_INSUFFICIENT_FUNDS`

 | 

The instruction cannot be applied due to insufficient funds.

 |
| 

`CONTRACT_EXECUTION_VIOLATION_WRONG_DENOMINATION`

 | 

The instruction uses a denomination the contract code does not support.

 |
| 

`CONTRACT_EXECUTION_VIOLATION_CLIENT_CUSTOM_REASON`

 | 

The contract returned a custom reason for rejecting the instruction.

 |

## [](#ContractViolationType "Copy link to heading")ContractViolationType

ContractViolationType characterises a contract violation.

Enum values  
| Name | Description |
| --- | --- |
| 
`CONTRACT_VIOLATION_BREACH_TERMS_AND_CONDITIONS`

 | 

The instruction breaches the terms and conditions of the target account’s contract.

 |
| 

`CONTRACT_VIOLATION_INSUFFICIENT_FUNDS`

 | 

The Posting instruction cannot be applied due to insufficient funds.

 |

## [](#PostingInstructionBatchStatus "Copy link to heading")PostingInstructionBatchStatus

The status of the posting instruction batch.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_INSTRUCTION_BATCH_STATUS_UNKNOWN`

 | 

Default value.

 |
| 

`POSTING_INSTRUCTION_BATCH_STATUS_ACCEPTED`

 | 

The PostingInstructionBatch has been accepted and Postings have been committed to the ledger.

 |
| 

`POSTING_INSTRUCTION_BATCH_STATUS_REJECTED`

 | 

The PostingInstructionBatch has been rejected and no Postings have been committed to the  
ledger.

 |

## [](#PostingPhase "Copy link to heading")PostingPhase

PostingPhase characterises the phase of a Posting.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_PHASE_UNKNOWN`

 | 

The posting phase is not set which will result in a validation error.

 |
| 

`POSTING_PHASE_PENDING_INCOMING`

 | 

The posting is pending incoming (soft posting).

 |
| 

`POSTING_PHASE_PENDING_OUTGOING`

 | 

The posting is pending outgoing (soft posting).

 |
| 

`POSTING_PHASE_COMMITTED`

 | 

The posting is committed (hard posting).

 |

## [](#PostingViolationType "Copy link to heading")PostingViolationType

PostingViolationType characterises a Posting API violation.

Enum values  
| Name | Description |
| --- | --- |
| 
`POSTING_VIOLATION_CLIENT_TRANSACTION_ALREADY_EXISTS`

 | 

An OutboundAuthorisation, InboundAuthorisation, Transfer, OutboundHardSettlement or  
InboundHardSettlement specifies a `client_transaction_id` which already exists in  
the namespace of the `client_id`.

 |
| 

`POSTING_VIOLATION_CLIENT_TRANSACTION_DOES_NOT_EXIST`

 | 

An AuthorisationAdjustment, Settlement, Release is referring to a non existent client  
transaction.

 |
| 

`POSTING_VIOLATION_ADJUSTMENT_YIELDS_AUTHORISATION_WITH_NEGATIVE_AMOUNT`

 | 

An AuthorisationAdjustment yields an authorisation with a negative amount.

 |
| 

`POSTING_VIOLATION_CLIENT_TRANSACTION_CLOSED`

 | 

An instruction is attempting to mutate a client transaction that has been closed.

 |
| 

`POSTING_VIOLATION_CLIENT_TRANSACTION_INVALID_OPERATION`

 | 

An instruction is being added to a client transaction where the `value_timestamp` is not  
strictly later than the current latest instruction, or the instruction being processed  
would create a client transaction which has a combination of CustomInstructions and  
other instruction types.

 |

## [](#RestrictionViolationType "Copy link to heading")RestrictionViolationType

The restriction violation type.

Enum values  
| Name | Description |
| --- | --- |
| 
`RESTRICTION_VIOLATION_TYPE_UNKNOWN`

 | 

An unknown restriction type.

 |
| 

`RESTRICTION_VIOLATION_TYPE_PREVENT_CREDITS`

 | 

A restriction violation type that was caused by a restriction which prevents credits.

 |
| 

`RESTRICTION_VIOLATION_TYPE_PREVENT_DEBITS`

 | 

A restriction violation type that was caused by a restriction which prevents debits.

 |
| 

`RESTRICTION_VIOLATION_TYPE_REVIEW_CREDITS`

 | 

A restriction violation type that was caused by a restriction which requires  
reviewing credits.

 |
| 

`RESTRICTION_VIOLATION_TYPE_REVIEW_DEBITS`

 | 

A restriction violation type that was caused by a restriction which requires  
reviewing debits.

 |
| 

`RESTRICTION_VIOLATION_TYPE_LIMIT_CREDITS`

 | 

A restriction violation type that was caused by a restriction which limits  
credits.

 |
| 

`RESTRICTION_VIOLATION_TYPE_LIMIT_DEBITS`

 | 

A restriction violation type that was caused by a restriction which limits  
debits.

 |