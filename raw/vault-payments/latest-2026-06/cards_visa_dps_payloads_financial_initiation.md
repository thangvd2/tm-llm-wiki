---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/visa_dps/payloads/financial_initiation"
title: "Financial initiation"
scraped_at: "2026-06-17T05:12:03.389Z"
images: 0
---

# Financial initiation

Financial initiation transactions directly impact a cardholder’s account balance, signalling the movement or definitive commitment of funds.

A financial initiation is a request or notification to debit or credit an account. It initiates the financial impact on the ledger. These transactions are commonly used in single-message systems such as ATM cash withdrawals or PIN debit purchases.

## [](#financial_initiation_request_0200 "Copy link to heading")Financial initiation request (0200)

A request is an active inquiry seeking real-time authorisation. The card network asks the receiver for permission to execute the financial transaction.

-   **State:** The transaction is pending. It cannot be completed until the receiver responds.
    
-   **Decision:** The response contains a code indicating whether the transaction is approved or declined (for example, due to insufficient funds).
    
-   **Common use case:** A customer at an ATM requesting a cash withdrawal.
    

## [](#financial_initiation_advice_0220 "Copy link to heading")Financial initiation advice (0220)

An advice is an informational notification. The card network informs the receiver that a transaction has already taken place and that the receiver must update their records accordingly. The sender does not ask for permission.

-   **State:** The transaction is already completed.
    
-   **Decision:** Because the action has already occurred, the issuer cannot decline an advice. The response acts purely as an acknowledgement of receipt.
    
-   **Common use cases:**
    
    -   Clearing the approved preauthorisation: The approved preauthorisation (0100) message is followed by financial initiation advice.
        
    -   Offline authorisation: A terminal loses connectivity and is configured to approve transactions under a certain limit locally. Once back online, it sends an advice to inform the bank of the completed sale.
        
    -   Stand-in processing (STIP): A payment network approves a transaction on behalf of an unresponsive issuer and sends an advice later to update the issuer’s ledger.
        
    

## [](#multi_clearing "Copy link to heading")Multi-clearing

Multi-clearing refers to the process of submitting multiple clearing messages for a single authorisation. Instead of the standard one-to-one ratio where one authorisation initiation is followed by one financial initiation for the exact amount, the merchant settles the authorised amount in chunks.

Multi-clearing is a common approach in specific industries where the fulfillment of goods or services is delayed or split, such as E-commerce and hotel booking service.

### [](#multi_clearing_financial_initiation_request_0200 "Copy link to heading")Multi-clearing financial initiation request (0200)

An active inquiry seeking real-time processing to clear a specific portion of an existing preauthorisation. The card network asks the receiver for permission to execute the partial financial transaction.

-   **State:** The partial clearing transaction is pending. It cannot be completed until the receiver responds.
    
-   **Decision:** The response contains a code indicating whether the specific partial clearing amount is approved or declined.
    
-   **Common use case:** An e-commerce merchant processing a split shipment in a system architecture that requires real-time clearing approval for each dispatched item.
    

### [](#multi_clearing_financial_advice_0220 "Copy link to heading")Multi-clearing financial advice (0220)

A notification informing the receiver that a portion of the approved preauthorisation has already been cleared. The sender does not ask for permission, but advises the receiver to update their ledgers for this specific amount.

-   **State:** The partial clearing transaction is already completed.
    
-   **Decision:** Because the action has already occurred, the issuer cannot decline the advice. The response acts purely as an acknowledment of receipt.
    
-   **Common use cases:** A hotel clears the base room rate separately from room service charges under the same initial authorisation.
    

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

0200 - REQU  
0201 - REQU  
0220 - ADVC  
0221 - ADVC  
ReTransmissionCounter is 1 or higher for repeated MTIs, 0 otherwise.

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
CASHBACK\_FROM\_DEPOSIT = "12"  
CONSUMER\_FEE\_COLLECTION = "19"  
PURCHASE\_RETURN\_OR\_REFUND = "20"  
DEPOSIT = "21"  
CREDIT\_ADJUSTMENT = "22"  
CHECK\_DEPOSIT = "24"  
CASH\_DEPOSIT = "25"  
MONEY\_TRANSFER\_TO = "26"  
PAYMENT\_TRANSACTION = "28"  
CONSUMER\_FUNDS\_DISBURSEMENT = "29"  
AVAILABLE\_FUNDS\_INQUIRY = "30"  
BALANCE\_INQUIRY = "31"  
ACCOUNT\_VERIFICATION\_INQUIRY = "33"  
GENERIC\_BALANCE\_INQUIRY = "39"  
ACCOUNT\_TRANSFER = "40"  
THIRD\_PARTY\_PAYMENT = "50"  
THIRD\_PARTY\_PAYMENT\_CREDIT = "55"  
PIN\_CHANGE = "90"

 |
| 

DE3.2

 | 

Processing code - from account

 | 

AccountFrom.Type

 | 

SAVINGS = "10", CHEQUING = "20"

 |
| 

DE3.3

 | 

Processing code - to account

 | 

AccountTo.Type

 | 

SAVINGS = "10", CHEQUING = "20"

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

DE56.1

 | 

Replacement additional amounts - fee type

 | 

Not applicable

 | 

Not applicable

 |
| 

DE56.2

 | 

Replacement additional amounts - memo indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE56.3

 | 

Replacement additional amounts - decimalisation indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE56.4

 | 

Replacement additional amounts - debit or credit indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE56.5

 | 

Replacement additional amounts - fee amount

 | 

Not applicable

 | 

Not applicable

 |
| 

DE56.6

 | 

Replacement additional amounts - debit or credit indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE56.7

 | 

Replacement additional amounts - settle fee amount

 | 

Not applicable

 | 

Not applicable

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

Original message function.

 |
| 

DE90.2

 | 

Original data elements - original DE 11 (system trace audit number)

 | 

OriginalDataElements.TransactionIdentification.SystemTraceAuditNumber

 | 

Original systems trace audit number.

 |
| 

DE90.3

 | 

Original data elements - original DE 13 (transmission date)

 | 

OriginalDataElements.TransactionIdentification.TransmissionDateTime

 | 

Original transmission date in UTC.

 |
| 

DE90.4

 | 

Original data elements - original DE 12 (transmission time)

 | 

OriginalDataElements.TransactionIdentification.TransmissionDateTime

 | 

Original transmission time in UTC.

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

Not applicable

 | 

Not applicable

 |
| 

DE95.2

 | 

Replacement amounts - actual settlement amount

 | 

Not applicable

 | 

Not applicable

 |
| 

DE95.3.1

 | 

Replacement amounts - actual transaction fee amount - credit/debit indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE95.3.2

 | 

Replacement amounts - actual transaction fee amount - original DE 33 (forwarding institution ID code)

 | 

Not applicable

 | 

Not applicable

 |
| 

DE95.4.1

 | 

Replacement amounts - actual settlement fee amount - credit/debit indicator

 | 

Not applicable

 | 

Not applicable

 |
| 

DE95.4.2

 | 

Replacement amounts - actual settlement fee amount - original DE 33 (forwarding institution ID code)

 | 

Not applicable

 | 

Not applicable

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

Account identification. For debit transactions, this is the target posting account.

 |
| 

DE103

 | 

Account ID 2

 | 

AccountTo.Identification

 | 

Account identification. For credit transasctions, this is the target posting account.

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

Aggregation of:  
\- Falcon  
\- Visa Risk Score (VAA)  
\- Real-Time Fraud (RTD)  
\- Mobile Location Confirmation (MLC) assessments.

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
| 

DE127.6

 | 

Acquirer trace data - multiple clearing sequence number SE 6

 | 

TransactionCharacteristics.AdditionalData

 | 

The number of the the clearing transaction (only applicable for multi-clearing).

 |
| 

DE127.7

 | 

Acquirer trace data - multiple clearing sequence count SE 7

 | 

TransactionCharacteristics.AdditionalData

 | 

The total expected number of clearing transactions (only applicable for multi-clearing).

 |

### [](#fields_populated_by_vault_payments "Copy link to heading")Fields populated by Vault Payments

 
| ISO 20022 field | Comments |
| --- | --- |
| 
Card.AdditionalData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_CARD\_ID

 | 

Internal Card identifier.

 |
| 

Card.AdditionalData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_CARD\_STATUS

 | 

Internal Card status.

 |
| 

Card.AdditionalData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_PAN\_LAST\_DIGITS

 | 

Last 4 digits of the PAN.

 |
| 

Card.AdditionalData CARD\_DATA\_ADDITIONAL\_DATA\_TYPE\_CARD\_EXPIRATION\_TIMESTAMP

 | 

Card expiration timestamp.

 |
| 

Cardholder.AdditionalData MESSAGE\_ADDITIONAL\_DATA\_TYPE\_CARDHOLDER\_IDENTIFIER

 | 

Internal cardholder identifier.

 |
| 

Cardholder.ContactInformation.OtherPhone

 | 

Cardholder phone number.

 |
| 

Cardholder.Name.Name

 | 

Cardholder name.

 |

### [](#example_financial_initiation_request_payload "Copy link to heading")Example financial initiation request payload