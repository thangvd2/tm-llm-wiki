---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/reference/decline_recommendations"
title: "Decline Recommendations"
scraped_at: "2026-06-17T05:11:58.413Z"
images: 0
---

# Decline Recommendations

The recommended response code to decline an Instruction depends on the payload of the Instruction, and the reason code.

## [](#decline_recommendation_reason_product_value_constraints_violated "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_PRODUCT\_VALUE\_CONSTRAINTS\_VIOLATED

The Instruction should be declined as it does not have an allowed combination of fields for its transaction type, as defined by the card scheme’s product value constraints.

Some legitimate merchants have been known to send invalid fields that result in constraint violations. Clients can choose to ignore this recommendation to increase merchant acceptance at their own risk.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

12

 |
| 

Inquiry Initiation

 | 

12

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_ac_type_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_AC\_TYPE\_ABSENT

The Instruction should be declined as an AC (Application Cryptogram) type is expected for the card data entry mode, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_ac_type_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_AC\_TYPE\_INVALID

The Instruction should be declined as the AC (Application Cryptogram) type is incompatible with the transaction type.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_atc_outside_allowed_range_low "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_ATC\_OUTSIDE\_ALLOWED\_RANGE\_LOW

The Instruction should be declined as the ATC (Application Transaction Counter) value is lower than the allowed range.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_atc_outside_allowed_range_high "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_ATC\_OUTSIDE\_ALLOWED\_RANGE\_HIGH

The Instruction should be declined as the ATC (Application Transaction Counter) value is higher than the allowed range.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_atc_duplicate_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_ATC\_DUPLICATE\_INVALID

The Instruction should be declined as the ATC (Application Transaction Counter) value is a duplicate of a previously seen ATC value, and the Instruction did not indicate that a duplicate is expected.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_arqc_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_ARQC\_ABSENT

The Instruction should be declined as an ARQC (Application ReQuest Cryptogram) is expected for the card data entry mode, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_arqc_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_ARQC\_INVALID

The Instruction should be declined as the ARQC (Application ReQuest Cryptogram) is invalid.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_chip_cvc_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CHIP\_CVC\_ABSENT

The Instruction should be declined as a Chip CVC (Card Validation Code) is expected for the card data entry mode, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |

## [](#decline_recommendation_reason_chip_cvc_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CHIP\_CVC\_INVALID

The Instruction should be declined as the Chip CVC (Card Validation Code) is invalid.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |

## [](#decline_recommendation_reason_cvc1_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CVC1\_ABSENT

The Instruction should be declined as a CVC1 (Card Validation Code 1) is expected for the card data entry mode, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |

## [](#decline_recommendation_reason_cvc1_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CVC1\_INVALID

The Instruction should be declined as the CVC1 (Card Validation Code 1) is invalid.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |
| 

Inquiry Initiation

 | 

88

 |

## [](#decline_recommendation_reason_cvc2_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CVC2\_ABSENT

The Instruction should be declined as the CVC2 (Card Validation Code 2) is expected for the card data entry mode, but is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Inquiry Initiation

 | 

63

 |

## [](#decline_recommendation_reason_cvc2_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CVC2\_INVALID

The Instruction should be declined as the CVC2 (Card Validation Code 2) is invalid.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

63

 |
| 

Inquiry Initiation

 | 

63

 |

## [](#decline_recommendation_reason_too_many_cvc2_failures "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_TOO\_MANY\_CVC2\_FAILURES

The Instruction should be declined as it is part of a burst of CVC2 verifications, of which too many are failing.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |

## [](#decline_recommendation_reason_card_suspended "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CARD\_SUSPENDED

The Instruction should be declined as it refers to a Card which is suspended.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |
| 

Authorisation Initiation (Advice)

 | 

14

 |
| 

Reversal Initiation

 | 

12

 |
| 

Reversal Initiation (Advice)

 | 

00

 |

## [](#decline_recommendation_reason_card_not_active "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CARD\_NOT\_ACTIVE

The Instruction should be declined as it refers to a Card which is not active.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |
| 

Authorisation Initiation (Advice)

 | 

14

 |
| 

Reversal Initiation

 | 

12

 |
| 

Reversal Initiation (Advice)

 | 

00

 |

## [](#decline_recommendation_reason_iav_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_IAV\_INVALID

The Instruction should be declined as the IAV (Issuer Authentication Value) is invalid.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

88

 |

## [](#decline_recommendation_reason_iav_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_IAV\_ABSENT

The Instruction should be declined as the IAV (Issuer Authentication Value) is missing on an Instruction where it is legally required.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

65

 |

## [](#decline_recommendation_reason_lvt_count_limit_exceeded "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_LVT\_COUNT\_LIMIT\_EXCEEDED

The Instruction should be soft declined to prompt for SCA (Strong Customer Authentication) as the LVT (Low Value Transactions) count for the Card has exceeded the limit.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

65

 |

## [](#decline_recommendation_reason_lvt_accumulator_limit_exceeded "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_LVT\_ACCUMULATOR\_LIMIT\_EXCEEDED

The Instruction should be soft declined to prompt for SCA (Strong Customer Authentication) as the LVT (Low Value Transactions) accumulator for the Card has exceeded the limit.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

65

 |

## [](#decline_recommendation_reason_contactless_amount_limit_exceeded "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CONTACTLESS\_AMOUNT\_LIMIT\_EXCEEDED

The Instruction should be soft declined to prompt for SCA (Strong Customer Authentication) as it exceeds the contactless amount limit for the Card.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

65

 |

## [](#decline_recommendation_reason_merchant_type_not_allowed "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_MERCHANT\_TYPE\_NOT\_ALLOWED

The Instruction should be declined as the merchant type is not allowed for this transaction type.

 
| Payload | Response Code |
| --- | --- |
| 
Inquiry Initiation

 | 

12

 |

## [](#decline_recommendation_reason_expiration_date_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_EXPIRATION\_DATE\_INVALID

The Instruction should be declined as the expiration date does not match the Card’s expiration date.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_expiration_date_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_EXPIRATION\_DATE\_ABSENT

The Instruction should be declined as the expiration date is expected for the card data entry mode, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_address_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_ADDRESS\_INVALID

The Instruction should be declined as the address does not match the Cardholder’s address.

Some legitimate merchants have been known to send incorrectly formatted addresses resulting in false negative matches. Clients can choose to ignore this recommendation to increase merchant acceptance at their own risk.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |

## [](#decline_recommendation_reason_internal_error "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_INTERNAL\_ERROR

The Instruction should be declined as an error occurred during pre-processing.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |
| 

Authorisation Initiation (Advice)

 | 

00

 |
| 

Reversal Initiation

 | 

12

 |
| 

Reversal Initiation (Advice)

 | 

00

 |

## [](#decline_recommendation_reason_card_number_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CARD\_NUMBER\_INVALID

The Instruction should be declined as it refers to a Card number which is not recognised.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

14

 |
| 

Inquiry Initiation

 | 

14

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |
| 

Authorisation Initiation (Advice)

 | 

14

 |
| 

Reversal Initiation

 | 

12

 |
| 

Reversal Initiation (Advice)

 | 

00

 |

## [](#decline_recommendation_reason_card_expired "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CARD\_EXPIRED

The Instruction should be declined as it refers to a Card which has expired.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

54

 |
| 

Inquiry Initiation

 | 

54

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |
| 

Authorisation Initiation (Advice)

 | 

14

 |
| 

Reversal Initiation

 | 

12

 |
| 

Reversal Initiation (Advice)

 | 

00

 |

## [](#decline_recommendation_reason_pin_tries_limit_exceeded "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_PIN\_TRIES\_LIMIT\_EXCEEDED

The Instruction should be declined as the PIN tries for the Card has exceeded the limit.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

75

 |
| 

Inquiry Initiation

 | 

75

 |
| 

Card Management Initiation (PIN Unblock)

 | 

89

 |
| 

Card Management Initiation (PIN Change)

 | 

89

 |

## [](#decline_recommendation_reason_pin_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_PIN\_INVALID

The Instruction should be declined as the PIN is invalid.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

55

 |
| 

Inquiry Initiation

 | 

55

 |
| 

Card Management Initiation (PIN Unblock)

 | 

89

 |
| 

Card Management Initiation (PIN Change)

 | 

89

 |

## [](#decline_recommendation_reason_pin_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_PIN\_ABSENT

The Instruction should be declined as a PIN is expected for the card data entry mode, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

55

 |
| 

Inquiry Initiation

 | 

55

 |
| 

Card Management Initiation (PIN Unblock)

 | 

89

 |
| 

Card Management Initiation (PIN Change)

 | 

89

 |

## [](#decline_recommendation_reason_new_pin_invalid "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_NEW\_PIN\_INVALID

The Instruction should be declined as the new PIN is invalid (e.g. it is too weak).

 
| Payload | Response Code |
| --- | --- |
| 
Card Management Initiation (PIN Change)

 | 

89

 |

## [](#decline_recommendation_reason_new_pin_absent "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_NEW\_PIN\_ABSENT

The Instruction should be declined as a new PIN is expected for the transaction type, but it is absent.

 
| Payload | Response Code |
| --- | --- |
| 
Card Management Initiation (PIN Change)

 | 

89

 |

## [](#decline_recommendation_reason_obs_mdes_pan_mapping_failure "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_OBS\_MDES\_PAN\_MAPPING\_FAILURE

The Instruction should be declined as the OBS (On-Behalf Service) reported a failure during MDES (Mastercard Digital Enablement Service) PAN (Primary Account Number) mapping.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |

## [](#decline_recommendation_reason_obs_mdes_ac_se_pre_validation_failure "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_OBS\_MDES\_AC\_SE\_PRE\_VALIDATION\_FAILURE

The Instruction should be declined as the OBS (On-Behalf Service) reported a failure during MDES (Mastercard Digital Enablement Service) AC (Application Cryptogram) SE (Secure Element) pre-validation.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |

## [](#decline_recommendation_reason_obs_mdes_ac_mcbp_pre_validation_failure "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_OBS\_MDES\_AC\_MCBP\_PRE\_VALIDATION\_FAILURE

The Instruction should be declined as the OBS (On-Behalf Service) reported a failure during MDES (Mastercard Digital Enablement Service) AC (Application Cryptogram) MCBP (Mastercard Cloud-Based Payments) pre-validation.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |

## [](#decline_recommendation_reason_cardholder_verification_failure "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CARDHOLDER\_VERIFICATION\_FAILURE

The Instruction should be declined as Cardholder verification failed.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_cvm_result_rule_unrecognised "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_CVM\_RESULT\_RULE\_UNRECOGNISED

The Instruction should be declined as the CVM (Cardholder Verification Method) result rule is unrecognised.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |
| 

Inquiry Initiation

 | 

05

 |
| 

Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_pin_change_already_in_progress "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_PIN\_CHANGE\_ALREADY\_IN\_PROGRESS

The Instruction should be declined as it is trying to change PIN while online and offline PINs may still be out of sync.

 
| Payload | Response Code |
| --- | --- |
| 
Card Management Initiation (PIN Unblock)

 | 

70

 |
| 

Card Management Initiation (PIN Change)

 | 

71

 |

## [](#decline_recommendation_reason_recurring_payment_initial_auth_not_found "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_RECURRING\_PAYMENT\_INITIAL\_AUTH\_NOT\_FOUND

The Instruction should be declined as it is a recurring payment with no initial authorisation.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

65

 |

## [](#decline_recommendation_reason_recurring_payment_initial_auth_rejected "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_RECURRING\_PAYMENT\_INITIAL\_AUTH\_REJECTED

The Instruction should be declined as it is a recurring payment whose initial authorisation was rejected.

 
| Payload | Response Code |
| --- | --- |
| 
Authorisation Initiation

 | 

05

 |

## [](#decline_recommendation_reason_partial_grade_acquirer_not_supported "Copy link to heading")DECLINE\_RECOMMENDATION\_REASON\_PARTIAL\_GRADE\_ACQUIRER\_NOT\_SUPPORTED

The Instruction should be declined as it originates from a Partial Grade Acquirer, which is not expected for this message type.

 
| Payload | Response Code |
| --- | --- |
| 
Inquiry Initiation

 | 

05

 |