---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/sequences"
title: "Sequences"
scraped_at: "2026-06-17T05:11:00.462Z"
images: 0
---

# Sequences

`flows_api.sequences` module

The sequences module contains types related to working with sequences in Vault Payments.

## [](#IncrementSequence "Copy link to heading")IncrementSequence

Increment Sequence request returned by SequenceStep `request_func`.

The `key` must be a non-empty string that deterministically identifies the sequence scope, for example `FEDWIRE_20250805_TEST1234`. If `limit` is provided, it must be greater than or equal to 1. Once the current value reaches this limit, the next increment will not be allocated and the Instruction will transition to an ERRORED status.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`key`

 | 

`str`

 | 

The sequence key to increment against. To enforce scheme-and day-scoped sequencing, callers should build a stable key (e.g. `scheme_YYYYMMDD`)

 |
| 

`limit`

 | 

`Optional[int]`

 | 

Optional upper bound. If set and reached, no value will be allocated and Instruction will transition to ERRORED status instead

 |

## [](#SequenceResult "Copy link to heading")SequenceResult

Outcome of a successful sequence request.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`value`

 | 

`Optional[int]`

 | 

The sequence value allocated.

 |