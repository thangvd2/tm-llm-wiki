---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/identifiers"
title: "Identifiers"
scraped_at: "2026-06-17T05:09:15.598Z"
images: 0
---

# Identifiers

`flows_api.identifiers` module

The identifiers module contains functions to manage identifiers.

During actual flow execution on the platform the returned values are deterministic and are identical between executions of the same function given the same instruction. Note that in the SDK the values are not guaranteed to be deterministic.

## [](#alphanumeric_lower "Copy link to heading")alphanumeric\_lower

Generates a lower case alphanumeric ID of a given length. The probability of collision decreases with the greater length of the alphanumeric ID.

**Returns**: `str` Lower case alphanumeric ID.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`length`

 | 

`int`

 | 

The desired length of the returned ID.

 |
| 

`seed`

 | 

`Optional[str]`

 | 

Optional seed. Calls with the same seed will always yield the same output. Defaults to deterministic randomness.

 |

## [](#alphanumeric_upper "Copy link to heading")alphanumeric\_upper

Generates an upper case alphanumeric ID of a given length. The probability of collision decreases with the greater length of the alphanumeric ID.

**Returns**: `str` Upper case alphanumeric ID.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`length`

 | 

`int`

 | 

The desired length of the returned ID.

 |
| 

`seed`

 | 

`Optional[str]`

 | 

Optional seed. Calls with the same seed will always yield the same output. Defaults to deterministic randomness.

 |

## [](#string "Copy link to heading")string

Generates an arbitrary string of the given length consisting of characters from the chosen alphabet.

**Returns**: `str` Generated string.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`length`

 | 

`int`

 | 

The desired length of the returned string.

 |
| 

`charset`

 | 

`str`

 | 

Optional set of characters to choose from. Defaults to all lower- and upper-case alphanumeric characters.

 |
| 

`seed`

 | 

`Optional[str]`

 | 

Optional seed. Calls with the same seed will always yield the same output. Defaults to deterministic randomness.

 |

## [](#uuid4 "Copy link to heading")uuid4

Generates a Universally Unique IDentifier (UUID) version 4, as described in IETC RFC 4122 "Universally Unique IDentifier (UUID) URN Namespace".

**Returns**: `str` UUID version 4, as described in IETC RFC 4122.

Arguments   
| Name | Type | Description |
| --- | --- | --- |

## [](#uuid5 "Copy link to heading")uuid5

Generates a Universally Unique IDentifier (UUID) version 5, as described in IETC RFC 4122 "Universally Unique IDentifier (UUID) URN Namespace".

**Returns**: `str` UUID version 5, as described in IETC RFC 4122.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`namespace`

 | 

`str`

 | 

UUID-formatted string used as the basis for the UUID.

 |
| 

`name`

 | 

`str`

 | 

Arbitrary name used to generate the UUID.

 |