---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/visa_dps/payloads/reversal_initiation"
title: "Reversal initiation"
scraped_at: "2026-06-17T15:50:26.741Z"
images: 0
---

# Reversal initiation

Reversal initiation transactions cancel or undo a previously initiated or approved transaction, ensuring that the cardholder’s account balance or available credit is restored to its original state.

A reversal initiation is a notification to release a temporary hold or refund a previously debited or credited amount. These transactions are critical for maintaining ledger accuracy when an expected transaction fails to complete successfully at the point-of-sale (POS).

## [](#reversal_initiation_advice_0420 "Copy link to heading")Reversal initiation advice (0420)

An advice is an informational notification. The card network informs the receiver (the issuer) that a preceding transaction (such as an authorisation request or financial request) was not completed successfully and must be voided. The sender is not asking for permission to reverse the transaction; they are instructing the issuer to update their records.

-   **State:** The cancellation is already completed at the terminal or network level. The original transaction is considered void.
    
-   **Decision:** Because the action rectifies an incomplete or failed transaction, the issuer cannot decline a reversal advice. The response acts purely as an acknowledgement of receipt, confirming that the hold has been released or the funds have been restored.
    
-   **Common use cases:**
    
    -   Timeout / Late response: A point-of-sale (POS) terminal sends an authorisation request (0100) but loses connectivity or does not receive the issuer’s response within the allowed timeframe. The terminal automatically sends a reversal (0420) to cancel the transaction in case the issuer had approved it.
        
    -   ATM dispense error: An ATM successfully authorizes a cash withdrawal (0200), but a mechanical error causes the cash dispenser to jam. The ATM sends a reversal to ensure the cardholder’s account is not debited for cash they did not receive.
        
    -   Customer cancellation: A customer initiates a transaction but cancels it at the pinpad or pulls their card out prematurely after the request has already been transmitted to the issuer.
        
    -   Merchant void: A merchant realizes an error immediately after a transaction is approved (e.g., entered the wrong amount) and voids the transaction on the terminal, triggering a reversal to clear the hold before settlement.
        
    

### [](#full_reversal "Copy link to heading")Full reversal

A full reversal cancels the entire amount of a previous authorisation or financial initiation. It is typically triggered when a transaction is voided in its entirety, such as when a customer cancels an entire order at the point of sale or when a system error prevents the completion of the transaction. In a full reversal, the amount specified in the reversal message matches the original transaction amount, and the issuer releases the full amount of the authorisation hold or refunds the full amount to the cardholder’s account.

### [](#partial_reversal "Copy link to heading")Partial reversal

A partial reversal cancels only a specific portion of a previous authorisation or financial initiation, while leaving the remaining amount intact. This is commonly used in scenarios where only some items in a multi-item order are cancelled or unavailable, or if a merchant supports partial approvals. Unlike a full reversal, a partial reversal message includes the replacement amount (the new total amount of the transaction).

## [](#iso_8583_to_iso_20022_mapping "Copy link to heading")ISO 8583 to ISO 20022 mapping

   
| ISO 8583 data element | ISO 8583 field description | ISO 20022 field | Comments |
| --- | --- | --- | --- |
| 
DE0

 | 

Message type identifier (MTI)

 | 

Header.MessageFunction, Header.ReTransmissionCounter

 | 

0420 - ADVC  
0421 - ADVC  
ReTransmissionCounter is 1 for repeated MTIs, 0 otherwise.

 |
| 

DE1

 | 

Bitmap

 | 

Not applicable

 | 

Not applicable

 |
| 

DE2

 | 

Primary account number

 | 

Not applicable

 | 

Not applicable

 |
| 

DE3.1

 | 

Processing code - transaction type

 | 

TransactionCharacteristics.TransactionType

 | 

PURCHASE = "00"  
ATM\_CASH\_WITHDRAWAL = "01"  
DEBIT\_ADJUSTMENT = "02"  
TRAVELERS\_CHECK = "06"  
VISA\_ONLY\_ACCOUNT\_FUNDING = "10"  
QUASI\_CASH = "11"  
PURCHASE\_RETURN\_OR\_REFUND = "20"  
CHECK\_DEPOSIT = "24"  
CASH\_DEPOSIT = "25"  
PAYMENT\_TRANSACTION = "28"  
ACCOUNT\_VERIFICATION\_INQUIRY = "33"  
THIRD\_PARTY\_PAYMENT = "50"  
PIN\_CHANGE = "90"

 |
| 

DE3.2

 | 

Processing code - from account

 | 

AccountFrom.Type

 | 

SAVINGS = "10", CHECKING = "20". Swapped for reversals.

 |
| 

DE3.3

 | 

Processing code - to account

 | 

AccountTo.Type

 | 

SAVINGS = "10", CHECKING = "20". Swapped for reversals.

 |
| 

DE4

 | 

Transaction amount

 | 

TransactionAmounts.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE5

 | 

Settlement amount

 | 

TransactionAmounts.ReconciliationAmount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE6

 | 

Cardholder billing amount

 | 

TransactionAmounts.CardholderBillingAmount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE7.1

 | 

Transmission date and time - date

 | 

TransactionIdentification.TransmissionDateTime

 | 

Transmission date and time in UTC.

 |
| 

DE7.2

 | 

Transmission date and time - time

 | 

TransactionIdentification.TransmissionDateTime

 | 

Transmission date and time in UTC.

 |
| 

DE8

 | 

Cardholder billing fee amount

 | 

AdditionalFee.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE9.1

 | 

Settlement conversion rate - decimal indicator

 | 

TransactionAmounts.ReconciliationEffectiveExchangeRate

 | 

Effective exchange rate for reconciliation - decimal indicator.

 |
| 

DE9.2

 | 

Settlement conversion rate - conversion rate

 | 

TransactionAmounts.ReconciliationEffectiveExchangeRate

 | 

Effective exchange rate for reconciliation.

 |
| 

DE10.1

 | 

Cardholder billing conversion rate - decimal indicator

 | 

TransactionAmounts.CardholderBillingEffectiveExchangeRate

 | 

Effective exchange rate for billing - decimal indicator.

 |
| 

DE10.2

 | 

Cardholder billing conversion rate - conversion rate

 | 

TransactionAmounts.CardholderBillingEffectiveExchangeRate

 | 

Effective exchange rate for billing.

 |
| 

DE11

 | 

Systems trace audit number (STAN)

 | 

TransactionIdentification.SystemTraceAuditNumber

 | 

Standard STAN identifier.

 |
| 

DE12

 | 

Local transaction time

 | 

TransactionIdentification.LocalTime

 | 

Local time of the transaction.

 |
| 

DE13

 | 

Local transaction date

 | 

TransactionIdentification.LocalDate

 | 

Local date of the transaction.

 |
| 

DE14

 | 

Expiration date

 | 

Not applicable

 | 

Not applicable

 |
| 

DE15

 | 

Settlement date

 | 

SettlementService.Date

 | 

Settlement date in YYYYMMDD format.

 |
| 

DE16

 | 

Conversion date

 | 

ConversionDateTime.Date

 | 

Date of currency conversion.

 |
| 

DE17

 | 

Capture date

 | 

Context.CaptureDate

 | 

Date of card capture.

 |
| 

DE18

 | 

Merchant type

 | 

Context.MerchantCategoryCode

 | 

ISO 18245 merchant category code.

 |
| 

DE19

 | 

Acquiring institution country code

 | 

Acquirer.Country

 | 

ISO 3166-1 numeric country code.

 |
| 

DE21

 | 

Forwarding institution country code

 | 

Sender.Country

 | 

ISO 3166-1 numeric country code.

 |
| 

DE22.1

 | 

Point of service (POS) entry mode - POS terminal PAN entry mode

 | 

Context.ECommerce, Context.CardDataEntryMode, Context.OtherCardDataEntryMode

 | 

Entry mode mapping. Identifies e-commerce transactions based on PAN entry mode.

 |
| 

DE22.2

 | 

Point of service (POS) entry mode - POS terminal PIN entry mode

 | 

Terminal.OtherPinEntrySecurityCharacteristic, Context.PinPadInoperative

 | 

Security characteristic mapping. Identifies inoperative PIN pads.

 |
| 

DE23

 | 

Card sequence number (CSN)

 | 

Not applicable

 | 

Not applicable

 |
| 

DE25

 | 

Point of service condition code

 | 

Not applicable

 | 

Not applicable

 |
| 

DE26

 | 

Point of service PIN capture code

 | 

Terminal.PinLengthCapability

 | 

Terminal PIN length capture capability flag.

 |
| 

DE27

 | 

Authorising ID response length

 | 

ProcessingResult.AdditionalInformation

 | 

Authorisation ID response length details.

 |
| 

DE28.1

 | 

Transaction fee amount - debit/credit indicator

 | 

AdditionalFee.CreditDebit

 | 

Debit or credit indicator.

 |
| 

DE28.2

 | 

Transaction fee amount - amount

 | 

AdditionalFee.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE29.1

 | 

Settlement fee amount - debit/credit indicator

 | 

AdditionalFee.CreditDebit

 | 

Debit or credit indicator.

 |
| 

DE29.2

 | 

Settlement fee amount - amount

 | 

AdditionalFee.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE32

 | 

Acquirer institution ID code

 | 

Acquirer.Identification

 | 

Identification of the acquiring institution.

 |
| 

DE33

 | 

Forwarding institution ID code

 | 

Sender.Identification

 | 

Identification of the forwarding institution.

 |
| 

DE35

 | 

Track 2 data

 | 

Not applicable

 | 

Not applicable

 |
| 

DE37.1

 | 

Retrieval reference number - transaction date

 | 

TransactionIdentification.RetrievalReferenceNumber

 | 

Retrieval reference number component - date.

 |
| 

DE37.2

 | 

Retrieval reference number - terminal sequence number

 | 

TransactionIdentification.RetrievalReferenceNumber

 | 

Retrieval reference number component - terminal sequence number.

 |
| 

DE38

 | 

Authorisation ID response

 | 

Not applicable

 | 

Not applicable

 |
| 

DE39

 | 

Response code

 | 

ProcessingResult.ResponseCode

 | 

Response code from the scheme.

 |
| 

DE41

 | 

Acceptor terminal ID

 | 

Terminal.Identification

 | 

Identification of the acceptor terminal.

 |
| 

DE42

 | 

Acceptor ID

 | 

Acceptor.Identification

 | 

Identification of the acceptor.

 |
| 

DE43

 | 

Acceptor name and location

 | 

Acceptor.NameAndLocation

 | 

Name and location of the acceptor.

 |
| 

DE44

 | 

Additional response data

 | 

Not applicable

 | 

Not applicable

 |
| 

DE45

 | 

Track 1 data

 | 

Not applicable

 | 

Not applicable

 |
| 

DE47

 | 

Additional data (national)

 | 

AdditionalData

 | 

Pass-through for national additional data.

 |
| 

DE48

 | 

Institution, merchant name, or consumer name

 | 

Context.OtherMerchantCategory

 | 

Merchant bank name or institution identification.

 |
| 

DE49

 | 

Transaction currency code

 | 

TransactionAmounts.Currency

 | 

ISO 4217 Alpha.

 |
| 

DE50

 | 

Settlement currency code

 | 

TransactionAmounts.ReconciliationCurrency

 | 

ISO 4217 Alpha. Defaults to Transaction currency if unpopulated.

 |
| 

DE51

 | 

Cardholder billing currency code

 | 

TransactionAmounts.CardholderBillingCurrency

 | 

ISO 4217 Alpha. Defaults to Settlement currency if unpopulated.

 |
| 

DE52

 | 

PIN data

 | 

Not applicable

 | 

Not applicable

 |
| 

DE54.1

 | 

Additional amounts - account type

 | 

Not applicable

 | 

Not applicable

 |
| 

DE54.2

 | 

Additional amounts - amount type

 | 

AdditionalAmount.Type

 | 

Type of additional amount.

 |
| 

DE54.3

 | 

Additional amounts - currency code

 | 

AdditionalAmount.Currency

 | 

ISO 4217 Alpha.

 |
| 

DE54.4

 | 

Additional amounts - debit or credit indicator

 | 

AdditionalAmount.CreditDebit

 | 

Debit or credit indicator.

 |
| 

DE54.5

 | 

Additional amounts - amount

 | 

AdditionalAmount.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE55.1

 | 

Additional fees - fee type

 | 

AdditionalFee.OtherType

 | 

Additional fee type.

 |
| 

DE55.2

 | 

Additional fees - memo indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE55.3

 | 

Additional fees - decimalisation indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE55.4

 | 

Additional fees - debit or credit indicator

 | 

AdditionalFee.CreditDebit

 | 

Debit or credit indicator.

 |
| 

DE55.5

 | 

Additional fees - fee amount

 | 

AdditionalFee.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE55.6

 | 

Additional fees - debit or credit indicator

 | 

AdditionalFee.CreditDebit

 | 

Debit or credit indicator.

 |
| 

DE55.7

 | 

Additional fees - settle fee amount

 | 

AdditionalFee.Amount.Amount

 | 

Amount converted to decimal. For example, 10.50.

 |
| 

DE57

 | 

Authorisation life cycle (ANSI-defined)

 | 

TransactionCharacteristics.PreAuthorisationTimeLimit

 | 

Time limit for pre-authorisation life cycle.

 |
| 

DE58.1

 | 

National POS code - POS terminal attendance

 | 

Context.Attended

 | 

0 - true; 1, 2 - false.

 |
| 

DE58.2

 | 

National POS code - POS terminal operation

 | 

Context.CardholderActivated

 | 

Direct terminal operation mode.

 |
| 

DE58.3

 | 

National POS code - POS terminal location

 | 

Terminal.OffPremises

 | 

Identifies if the terminal is off-premises.

 |
| 

DE58.4

 | 

National POS code - POS cardholder presence

 | 

Context.CardholderPresent, TransactionCharacteristics.TransactionAttribute

 | 

Checks if the cardholder is present; sets PAUT attribute for pre-authorised purchases.

 |
| 

DE58.5

 | 

National POS code - POS card presence

 | 

Context.CardPresent, TransactionCharacteristics.TransactionAttribute

 | 

Checks if the card is present; sets PAUT attribute for pre-authorised purchases.

 |
| 

DE58.6

 | 

National POS code - POS card capture capabilities

 | 

Terminal.CardCaptureCapable

 | 

Indicates if the terminal is card capture capable.

 |
| 

DE58.7

 | 

National POS code - POS transaction status

 | 

Context.DelayedCharges, Context.NoShow, Context.ReSubmission, Context.Reauthorisation, TransactionCharacteristics.TransactionAttribute

 | 

Mapped to delayed charges, no-show, re-submission, and reauthorisation flags.

 |
| 

DE58.8

 | 

National POS code - POS transaction security

 | 

Risk

 | 

Included in security condition risk assessment.

 |
| 

DE58.9

 | 

National POS code - cardholder-activated terminal level

 | 

Terminal.OtherType

 | 

Terminal type level identification.

 |
| 

DE58.10

 | 

National POS code - POS card data terminal input capability indicator

 | 

Context.UnattendedLevelCategory, Context.CardDataEntryMode, Context.OtherCardDataEntryMode, Context.QrCodePresentmentMode

 | 

Point of service indicators.

 |
| 

DE59.1

 | 

National POS geographic data (ANSI-defined) - state code

 | 

Context.AdditionalData

 | 

State code.

 |
| 

DE59.2

 | 

National POS geographic data (ANSI-defined) - county code

 | 

Context.AdditionalData

 | 

Country code.

 |
| 

DE59.3

 | 

National POS geographic data (ANSI-defined) - postal service code

 | 

Context.AdditionalData

 | 

Postal service code.

 |
| 

DE59.4

 | 

National POS geographic data (ANSI-defined) - country code

 | 

Context.AdditionalData

 | 

Country code.

 |
| 

DE61

 | 

Acquirer transport data

 | 

Acquirer.LocalData

 | 

Acquirer-specific transport data.

 |
| 

DE62

 | 

Issuer transport data

 | 

Not applicable

 | 

Not applicable

 |
| 

DE63.1

 | 

Privately-defined data - pseudo-terminal

 | 

Terminal.AdditionalIdentification

 | 

Pseudo-terminal identification.

 |
| 

DE63.2

 | 

Privately-defined data - issuer network ID

 | 

Not applicable

 | 

Not applicable

 |
| 

DE63.3

 | 

Privately-defined data - acquirer network ID

 | 

Header.ExchangeIdentification

 | 

Network identification. Combines acquirer and original network IDs for external routing.

 |
| 

DE70

 | 

Network management information code

 | 

Not applicable

 | 

Not applicable

 |
| 

DE90.1

 | 

Original data elements - original message type identifier

 | 

OriginalDataElements.MessageFunction

 | 

Message function of the original authorisation or financial message that this reversal is reverting.

 |
| 

DE90.2

 | 

Original data elements - original DE 11 (system trace audit number)

 | 

OriginalDataElements.TransactionIdentification.SystemTraceAuditNumber

 | 

Systems trace audit number of the original authorisation or financial message that this reversal is reverting.

 |
| 

DE90.3

 | 

Original data elements - original DE 13 (transmission date)

 | 

OriginalDataElements.TransactionIdentification.TransmissionDateTime

 | 

Transmission date in UTC of the original authorisation or financial message that this reversal is reverting.

 |
| 

DE90.4

 | 

Original data elements - original DE 12 (transmission time)

 | 

OriginalDataElements.TransactionIdentification.TransmissionDateTime

 | 

Transmission time in UTC of the original authorisation or financial message that this reversal is reverting.

 |
| 

DE90.5

 | 

Original data elements - original DE 32 (acquiring institution ID code)

 | 

OriginalDataElements.AcquirerIdentification

 | 

Identification of the original acquiring institution.

 |
| 

DE90.6

 | 

Original data elements - original DE 33 (forwarding institution ID code)

 | 

OriginalDataElements.SenderIdentification

 | 

Identification of the original forwarding institution.

 |
| 

DE91

 | 

Issuer file update code

 | 

Not applicable

 | 

Not applicable

 |
| 

DE95.1

 | 

Replacement amounts - actual transaction amount

 | 

OriginalDataElements.TransactionAmounts.Amount.Amount

 | 

The replacement transaction amount. Present only for partial reversals.

 |
| 

DE95.2

 | 

Replacement amounts - actual settlement amount

 | 

OriginalDataElements.TransactionAmounts.ReconciliationAmount.Amount

 | 

The replacement settlement amount. Present only for partial reversals.

 |
| 

DE95.3.1

 | 

Replacement amounts - actual transaction fee amount - credit/debit indicator

 | 

OriginalDataElements.AdditionalFee.CreditDebit

 | 

The replacement transaction fee indicator. Present only if fee is present in the original message.

 |
| 

DE95.3.2

 | 

Replacement amounts - actual transaction fee amount - original DE 33 (forwarding institution ID code)

 | 

OriginalDataElements.AdditionalFee.Amount.Amount

 | 

The replacement transaction fee amount. Present only if fee is present in the original message.

 |
| 

DE95.4.1

 | 

Replacement amounts - actual settlement fee amount - credit/debit indicator

 | 

OriginalDataElements.AdditionalFee.CreditDebit

 | 

The replacement settlement fee indicator. Present only if fee is present in the original message.

 |
| 

DE95.4.2

 | 

Replacement amounts - actual settlement fee amount - original DE 33 (forwarding institution ID code)

 | 

OriginalDataElements.AdditionalFee.Amount.Amount

 | 

The replacement settlement fee amount. Present only if fee is present in the original message.

 |
| 

DE96

 | 

Message security code

 | 

Not applicable

 | 

Not applicable

 |
| 

DE100

 | 

Receiving institution ID code

 | 

Not applicable

 | 

Not applicable

 |
| 

DE101

 | 

File name

 | 

Not applicable

 | 

Not applicable

 |
| 

DE102

 | 

Account ID 1

 | 

AccountFrom.Identification

 | 

Account identification. Swapped for reversals.

 |
| 

DE103

 | 

Account ID 2

 | 

AccountTo.Identification

 | 

Account identification. Swapped for reversals.

 |
| 

DE104

 | 

Transaction description

 | 

TransactionCharacteristics.TransactionDescription

 | 

Transaction description.

 |
| 

DE105

 | 

Large private data 1

 | 

Risk

 | 

Risk data. See the example payload.

 |
| 

DE106

 | 

Large private data 2

 | 

Risk

 | 

Risk data. See the example payload.

 |
| 

DE107

 | 

Large private data 3

 | 

Risk

 | 

Risk data. See the example payload.

 |
| 

DE108

 | 

Large private data 4

 | 

Risk

 | 

Risk data. See the example payload.

 |
| 

DE109

 | 

Large private data 5

 | 

Risk

 | 

Risk data. See the example payload.

 |
| 

DE110

 | 

Large private data 6

 | 

Risk

 | 

Risk data. See the example payload.

 |
| 

DE111.1

 | 

Additional data, private acquirer - data identifier

 | 

Not applicable

 | 

Not applicable

 |
| 

DE111.2

 | 

Additional data, private acquirer - data

 | 

OriginalDataElements.TransactionIdentification.LifeCycleIdentification

 | 

Life cycle identification for external networks.

 |
| 

DE113

 | 

Authorising agent institution ID code (ANSI-defined)

 | 

Programme.AppliedIdentification

 | 

Applied identification for the authorisation programme.

 |
| 

DE114

 | 

Country code, authorising agent (ANSI-defined)

 | 

Not applicable

 | 

Not applicable

 |
| 

DE120.1

 | 

Account qualifiers - account qualifier 1 (from)

 | 

AdditionalData ADDITIONAL\_DATA\_TYPE\_FROM\_ACCOUNT\_QUALIFIER

 | 

Account qualifier additional data.

 |
| 

DE120.2

 | 

Account qualifiers - account qualifier 2 (to)

 | 

AdditionalData ADDITIONAL\_DATA\_TYPE\_TO\_ACCOUNT\_QUALIFIER

 | 

Account qualifier additional data.

 |
| 

DE121

 | 

Additional data, private issuer

 | 

Not applicable

 | 

Not applicable

 |
| 

DE122

 | 

Sponsor bank ID

 | 

Context.AdditionalData ADDITIONAL\_DATA\_TYPE\_SPONSOR\_BANK\_ID

 | 

Sponsor bank identification additional data.

 |
| 

DE123

 | 

AVS/CVV2/PIN/MICR data

 | 

Verification.Result

 | 

AVS result code mapped to CHSA authentication method results.

 |
| 

DE124

 | 

Info, text

 | 

Risk.Assessment

 | 

Aggregation of assessment data.

 |
| 

DE125

 | 

Network management information

 | 

Not applicable

 | 

Not applicable

 |
| 

DE126

 | 

Issuer trace data

 | 

AdditionalData ADDITIONAL\_DATA\_TYPE\_ISSUER\_TRACE

 | 

Issuer-specific trace data.

 |
| 

DE127

 | 

Acquirer trace data

 | 

TransactionIdentification.LifeCycleIdentification

 | 

Acquirer trace data for life cycle identification.

 |

## [](#fields_populated_by_vault_payments "Copy link to heading")Fields populated by Vault Payments

 
| ISO 20022 field | Comments |
| --- | --- |
| 
Card.AdditionalCardData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_CARD\_ID

 | 

Internal Card identifier.

 |
| 

Card.AdditionalCardData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_CARD\_STATUS

 | 

Internal Card status.

 |
| 

Card.AdditionalCardData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_PAN\_LAST\_DIGITS

 | 

Last 4 digits of the PAN.

 |
| 

Card.AdditionalCardData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_CARD\_EXPIRATION\_TIMESTAMP

 | 

Card expiration timestamp.

 |
| 

AdditionalData MESSAGE\_ADDITIONAL\_DATA\_TYPE\_CARDHOLDER\_IDENTIFIER

 | 

Internal cardholder identifier.

 |
| 

AdditionalData MESSAGE\_ADDITIONAL\_DATA\_TYPE\_CARDHOLDER\_NAME

 | 

Cardholder name.

 |
| 

AdditionalData MESSAGE\_ADDITIONAL\_DATA\_TYPE\_CARDHOLDER\_PHONE

 | 

Cardholder phone number.

 |
| 

AdditionalData MESSAGE\_ADDITIONAL\_DATA\_TYPE\_CARDHOLDER\_EMAIL

 | 

Cardholder email.

 |

## [](#example_reversal_initiation_advice_payload "Copy link to heading")Example reversal initiation advice payload