---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators"
title: "Card Indicators"
scraped_at: "2026-06-17T05:08:57.080Z"
images: 0
---

# Card Indicators

`flows_api.card.common.indicators` module

Card Indicators

## [](#DeclineInfo "Copy link to heading")DeclineInfo

Contains information indicating the details of a recommendation to the instruction flow to decline an instruction based on processing done before it was sent to the engine. Deprecated: use card.common.DeclineRecommendation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`response_code`

 | 

`str`

 | 

String containing the scheme facing response code that should be  
used to decline the instruction.

 |
| 

`reason`

 | 

`str`

 | 

Human readable description for the reason for declining the  
instruction.

 |

## [](#CardInputData "Copy link to heading")CardInputData

CardInputData contains indicators related to card data inputted with the instruction itself, such as the PAN and card expiry date.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`pan_invalid`

 | 

`bool`

 | 

indicates whether the provided PAN was invalid and could not be  
associated with a stored card.

 |

## [](#Card "Copy link to heading")Card

Contains information related to the result of checks made against the stored card targeted by an Instruction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`expired`

 | 

`bool`

 | 

Indicates if the card’s expiry date was in the past, and the card is considered expired.

 |
| 

`status`

 | 

`[CardStatus](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CardStatus)`

 | 

Indicates the current status of the card.

 |

## [](#ApplicationAuthenticationCryptogram "Copy link to heading")ApplicationAuthenticationCryptogram

Contains the AAC validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Whether the AAC is valid.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#ApplicationCryptogramType "Copy link to heading")ApplicationCryptogramType

Contains the AC Type validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Whether the AC Type is valid.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#AutomatedFuelDispenser "Copy link to heading")AutomatedFuelDispenser

Contains the AFD validity check results.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`track_one_verified`

 | 

`bool`

 | 

Whether Track 1 has been verified.

 |
| 

`track_two_verified`

 | 

`bool`

 | 

Whether Track 2 has been verified.

 |

## [](#AuthorisationRequestCryptogram "Copy link to heading")AuthorisationRequestCryptogram

Contains the ARQC validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Whether the ARQC is valid.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#ApplicationTransactionCounter "Copy link to heading")ApplicationTransactionCounter

Contains the ATC validity check result. Deprecated, use VerificationCode.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`out_of_range`

 | 

`bool`

 | 

Whether the ATC is out of range.

 |
| 

`duplicate`

 | 

`bool`

 | 

Whether the ATC is a duplicate.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#ConsumerDeviceCardholderVerificationMethod "Copy link to heading")ConsumerDeviceCardholderVerificationMethod

Contains the CDCVM validity check results.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status`

 | 

`[CDCVMStatus](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CDCVMStatus)`

 | 

Status of the CDCVM check.

 |
| 

`reason`

 | 

`str`

 | 

Status reason.

 |

## [](#CVC1 "Copy link to heading")CVC1

CVC1 contains the CVC1 validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the CVC1 check.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#CVC2 "Copy link to heading")CVC2

CVC2 contains the CVC2 validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the CVC2 check.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |
| 

`velocity_exceeded`

 | 

`bool`

 | 

Whether the velocity limit for CVC2-verification failures is currently exceeded.

 |

## [](#CardholderVerificationMethod "Copy link to heading")CardholderVerificationMethod

Contains the CVM validity check results.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`status`

 | 

`[CVMStatus](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#CVMStatus)`

 | 

Status of the CVM check.

 |

## [](#ChipCVC "Copy link to heading")ChipCVC

ChipCVC contains the Chip CVC validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Whether the Chip CVC is valid.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#ExpirationDate "Copy link to heading")ExpirationDate

ExpirationDate contains the Expiration Date validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the expiration date check.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#LowValueTransaction "Copy link to heading")LowValueTransaction

LowValueTransaction contains the LVT indicator.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`checks_required`

 | 

`bool`

 | 

Whether LVT checks are required.

 |
| 

`count_limit_exceeded`

 | 

`bool`

 | 

Whether the LVT count limit has been exceeded.

 |
| 

`amount_limit_exceeded`

 | 

`bool`

 | 

Whether the LVT amount limit has been exceeded.

 |
| 

`contactless_amount_limit_exceeded`

 | 

`bool`

 | 

Whether the contactless amount limit has been exceeded.

 |

## [](#PIN "Copy link to heading")PIN

PIN contains the PIN validity check results and other PIN info from auth gateway.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the PIN check.

 |
| 

`attempts_exceeded`

 | 

`bool`

 | 

Whether the limit on the number of incorrect PIN entry attempts has been  
exceeded.

 |
| 

`change_in_progress`

 | 

`bool`

 | 

Whether offline and online PINs are currently out of sync.

 |

## [](#IssuerAuthenticationValue "Copy link to heading")IssuerAuthenticationValue

IssuerAuthenticationValue contains the IAV validity check result.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the Issuer Authentication Value.

 |

## [](#NewPIN "Copy link to heading")NewPIN

NewPIN contains the new PIN validity check results from auth gateway.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the new PIN check.

 |

## [](#MerchantType "Copy link to heading")MerchantType

MerchantType contains the Merchant Type Validity.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`validity`

 | 

`[Validity](/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators#Validity)`

 | 

Validity of the Merchant type.

 |
| 

`reason`

 | 

`str`

 | 

Validity reason.

 |

## [](#CDCVMStatus "Copy link to heading")CDCVMStatus

Result of the CDCVM verification check.

Enum values  
| Name | Description |
| --- | --- |
| 
`CDCVM_STATUS_UNKNOWN`

 | 

Unknown.

 |
| 

`CDCVM_STATUS_PERFORMED_SUCCESSFUL`

 | 

Performed and was successful.

 |
| 

`CDCVM_STATUS_PERFORMED_FAILED`

 | 

Performed and failed.

 |
| 

`CDCVM_STATUS_NOT_PERFORMED`

 | 

Not performed.

 |
| 

`CDCVM_STATUS_FRAUD_WARNING`

 | 

Fraud warning.

 |

## [](#CVMStatus "Copy link to heading")CVMStatus

Result of the CVM check.

Enum values  
| Name | Description |
| --- | --- |
| 
`CVM_STATUS_UNKNOWN`

 | 

Unknown.

 |
| 

`CVM_STATUS_RULE_RECOGNISED_SUCCESSFUL`

 | 

Rule was recognised and successful.

 |
| 

`CVM_STATUS_RULE_RECOGNISED_FAILED`

 | 

Rule was recognised but failed.

 |
| 

`CVM_STATUS_RULE_UNRECOGNISED`

 | 

Rule unrecognised.

 |

## [](#CardStatus "Copy link to heading")CardStatus

Enum values  
| Name | Description |
| --- | --- |
| 
`CARD_STATUS_UNKNOWN`

 | 

Default value.

 |
| 

`CARD_STATUS_PENDING_CREATION`

 | 

An intermediate Card status during creation.

 |
| 

`CARD_STATUS_INACTIVE`

 | 

The status of a Card that has been created but not yet activated.

 |
| 

`CARD_STATUS_ACTIVE`

 | 

The status of a Card that has been fully activated and is available  
for transacting.

 |
| 

`CARD_STATUS_DIGITALLY_ACTIVE`

 | 

The status of a Card that has been activated only for online and  
tokenised payments.

 |
| 

`CARD_STATUS_SUSPENDED`

 | 

A non-terminal status of a Card that has been suspended for transacting.

 |
| 

`CARD_STATUS_DIGITALLY_SUSPENDED`

 | 

A non-terminal status of a Card that has been digitally suspended for  
transacting. This state indicates the card was previously in  
`CARD_STATUS_DIGITALLY_ACTIVE`.

 |
| 

`CARD_STATUS_DISABLED`

 | 

A terminal status of a Card that has been disabled.

 |

## [](#Validity "Copy link to heading")Validity

Result of the check.

Enum values  
| Name | Description |
| --- | --- |
| 
`VALIDITY_UNKNOWN`

 | 

Unknown.

 |
| 

`VALIDITY_PRESENT_INVALID`

 | 

Present but invalid.

 |
| 

`VALIDITY_PRESENT_VALID`

 | 

Present and valid.

 |
| 

`VALIDITY_ABSENT`

 | 

Absent.

 |