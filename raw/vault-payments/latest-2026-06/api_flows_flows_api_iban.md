---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/iban"
title: "IBAN"
scraped_at: "2026-06-17T05:09:13.863Z"
images: 0
---

# IBAN

`flows_api.iban` module

The `iban` module provides validation, and utility functions for working with IBANs.

## [](#ValidationResult "Copy link to heading")ValidationResult

Result of validating a IBAN.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`violations`

 | 

`list[[ViolationType](/vault-payments/latest/EN/api/flows/flows_api/iban#ViolationType)]`

 | 

The violations resulting from validation.

 |

## [](#ViolationType "Copy link to heading")ViolationType

Defines IBAN validation violations.

Enum values  
| Name | Description |
| --- | --- |
| 
`VALUE_MISSING`

 | 

Missing IBAN.

 |
| 

`INVALID_COUNTRY_CODE`

 | 

Country code unrecognised or unsupported.

 |
| 

`INVALID_LENGTH`

 | 

Invalid IBAN length.

 |
| 

`INVALID_STRUCTURE`

 | 

Invalid IBAN structure.

 |
| 

`INVALID_CHECKSUM`

 | 

IBAN fails the modulo 97 validation.

 |

## [](#extract_country_code "Copy link to heading")extract\_country\_code

Extracts the country code from an IBAN.

**Returns**: `str` Country code of IBAN.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`iban`

 | 

`str`

 | 

IBAN string.

 |

## [](#validate "Copy link to heading")validate

Validates an IBAN according to the IBAN validation algorithm: - Length check - Structure check - Move the four initial characters to the end of the string - Replace each letter in the string with two digits, thereby expanding the string, where A = 10, B = 11, …​, Z = 35 - Interpret the string as a decimal integer and compute the remainder of that number on division by 97 If the remainder is 1, the check digit test is passed and the IBAN might be valid.

**Returns**: `[ValidationResult](/vault-payments/latest/EN/api/flows/flows_api/iban#ValidationResult)` ValidationResult for IBAN validation.

Arguments   
| Name | Type | Description |
| --- | --- | --- |
| 
`iban`

 | 

`str`

 | 

The IBAN to be validated.

 |