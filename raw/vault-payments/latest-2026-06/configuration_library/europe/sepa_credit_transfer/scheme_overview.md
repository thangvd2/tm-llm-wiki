---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/scheme_overview"
title: "Scheme Information"
scraped_at: "2026-06-17T15:51:34.067Z"
images: 0
---

# Scheme Information

SEPA Credit Transfer is modelled on the EBA Clearing variant of SEPA Credit Transfer.

## [](#message_version "Copy link to heading")Message Version

The table below contains the ISO 20022 message versions.

 
| Message | Version |
| --- | --- |
| 
CustomerCreditTransferInitiation

 | 

pain.001.001.09

 |
| 

CustomerPaymentStatusReport

 | 

pain.002.001.10

 |
| 

FIToFIPaymentStatusReport

 | 

pacs.002.001.10

 |
| 

PaymentReturn

 | 

pacs.004.001.09

 |
| 

FIToFICustomerCreditTransfer

 | 

pacs.008.001.08

 |
| 

FItoFIPaymentCancellationRequest

 | 

camt.056.001.08

 |
| 

ResolutionOfInvestigation

 | 

camt.029.001.09

 |
| 

FIToFIPaymentStatusRequest

 | 

pacs.028.001.03

 |

## [](#validation_and_scheme_field_requirements "Copy link to heading")Validation and Scheme Field Requirements

SEPA Credit Transfer has additional field requirements in addition to standard ISO 20022 validation. Additional validation is based on the SEPA Credit Transfer Scheme Implementation Guidelines, as well as the EBA STEP2 Interface Specifications. See journeys for message specific details.

## [](#correlation_id "Copy link to heading")Correlation ID

SEPA Credit Transfer messages uses the `transaction_identification` as the `correlation_id` for Instructions ensuring they are matched and associated with the same payments. This is a unique identifier that is shared across all Instructions, including reversals, corresponding to the same payment. This field is mandatory and required to the EBA specification the configuration pack is based on.

chat\_bubble

The CustomerCreditTransferIntiation (DS-01) (pain.001) uses the `instruction_identification` as the `correlation_id` and populates the `transaction_identification` for the rest of the Credit Transfer Journey.

## [](#account_resolution "Copy link to heading")Account Resolution

SEPA Credit Transfer supports IBAN for resolving the creditor or debtor account. In order to work correctly, a Payment Instrument must match the identifier exactly, for example, the IBAN must match the `instrument_identifier` field on the Payment Instrument only.

## [](#file_processing "Copy link to heading")File Processing

**SEPA Credit Transfer supports processing of the following files:**

-   CustomerCreditTransferInitiation (pain.001) - Outbound Payments
    
-   FIToFIPaymentStatusReport (pacs.002) - Outbound Payments
    
-   FIToFIPaymentStatusRequest (pacs.028) - Outbound Payments
    
-   FIToFICustomerCreditTransfer (pacs.008) - Inbound Payments
    
-   PaymentReturn (pacs.004) - Inbound Payments
    
-   ResolutionOfInvestigation (camt.029) - Inbound Payments
    

**SEPA Credit Transfer supports generation of the following files:**

-   EBA ICF File:
    
    -   FIToFICustomerCreditTransfer (pacs.008)
        
    -   FItoFIPaymentCancellationRequest (camt.056)
        
    -   PaymentReturn (pacs.004)
        
    
-   Customer Payment Status Report File:
    
    -   CustomerPaymentStatusReport (pain.002)
        
    

## [](#processing_schedule "Copy link to heading")Processing Schedule

SEPA Credit Transfer has a number of scheme rules for cut offs, time limits and schedules.

All Instructions that are submitted via a file must be submitted within 24 hours of file generation. Instruction Files are generated daily on business days using the provided calendar at 23:00 CET.

All time limits requiring action within specific business days use the same calendar.

chat\_bubble

A single calendar has been used however more complex bank specific requirements can be modelled with by using more complex Calendars and Business Day Definition resources.

## [](#payment_attributes "Copy link to heading")Payment Attributes

The table below provides a mapping between a Payment and the Instruction fields.

 
| Payment Attribute | Value / Field |
| --- | --- |
| 
`scheme`

 | 

SEPA

 |
| 

`payment_system`

 | 

EBA

 |
| 

`type`

 | 

`PAYMENT_TYPE_CREDIT_TRANSFER`

 |
| 

`direction`

 | 

Journey Dependant

 |
| 

`payment_parties.payer`

 | 

`fi_to_fi_customer_credit_transfer.message_v08.credit_transfer_transaction_information[0].debtor.name`

 |
| 

`payment_parties.payee`

 | 

`fi_to_fi_customer_credit_transfer.message_v08.credit_transfer_transaction_information[0].creditor.name`

 |
| 

`credit_transfer_payment_data.credit_transfer_amount.instructed_amount.amount`

 | 

`customer_credit_transfer_initiation.message_v09.payment_information[0].credit_transfer_transaction_information[0].amount.instructed_amount.amount`

 |
| 

`credit_transfer_payment_data.credit_transfer_amount.instructed_amount.currency`

 | 

`customer_credit_transfer_initiation.message_v09.payment_information[0].credit_transfer_transaction_information[0].amount.instructed_amount.currency`

 |
| 

`credit_transfer_payment_data.credit_transfer_amount.interbank_settlement_amount.amount`

 | 

`fi_to_fi_customer_credit_transfer.message_v08.credit_transfer_transaction_information[0].interbank_settlement_amount.amount`

 |
| 

`credit_transfer_payment_data.credit_transfer_amount.interbank_settlement_amount.currency`

 | 

`fi_to_fi_customer_credit_transfer.message_v08.credit_transfer_transaction_information[0].interbank_settlement_amount.currency`

 |
| 

`credit_transfer_payment_data.credit_transfer_amount.returned_amount.amount`

 | 

`payment_return.message_v09.transaction_information[0].returned_interbank_settlement_amount.amount`

 |
| 

`credit_transfer_payment_data.credit_transfer_amount.returned_amount.currency`

 | 

`payment_return.message_v09.transaction_information[0].returned_interbank_settlement_amount.currency`

 |