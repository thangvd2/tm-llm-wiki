---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories"
title: "Membership Directories"
scraped_at: "2026-06-17T15:47:49.697Z"
images: 0
---

# Membership Directories

`flows_api.membershipdirectories` module

Membership Directories

## [](#MembershipDirectoryQuery "Copy link to heading")MembershipDirectoryQuery

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`member_ids`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

The IDs of the directory members to lookup in the MembershipDirectoryVersion.  
Varies by the membership directory type:  
\- TIPS: User BIC  
\- Fedwire: Routing Number  
\- FedACH: Routing Number  
\- BACS: Sort Code  
\- FPS: Sort Code

 |
| 

`membership_directory_ids`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

The IDs of the MembershipDirectory resources to lookup.

 |

## [](#MembershipDirectoryRecord "Copy link to heading")MembershipDirectoryRecord

The MembershipDirectoryRecord represents a record in a membership directory.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`member_id`

 | 

`str`

 | 

Identifies the record within the MembershipDirectoryVersion. Varies by the membership  
directory type:  
\- TIPS: User BIC  
\- Fedwire: Routing Number  
\- FedACH: Routing Number  
\- BACS: Sort Code  
\- FPS: Sort Code

 |
| 

`tips_additional_data`

 | 

`[TIPSAdditionalData](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#TIPSAdditionalData)`

 | 

TIPS specific additional data.

 |
| 

`fedwire_additional_data`

 | 

`[FedwireAdditionalData](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#FedwireAdditionalData)`

 | 

Fedwire specific additional data.

 |
| 

`fedach_additional_data`

 | 

`[FedACHAdditionalData](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#FedACHAdditionalData)`

 | 

FedACH specific additional data.

 |
| 

`bacs_additional_data`

 | 

`[BACSAdditionalData](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#BACSAdditionalData)`

 | 

BACS specific additional data.

 |
| 

`fps_additional_data`

 | 

`[FPSAdditionalData](/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories#FPSAdditionalData)`

 | 

FPS specific additional data.

 |

## [](#TIPSAdditionalData "Copy link to heading")TIPSAdditionalData

Additional Membership Directory Data provided for type MEMBERSHIP\_DIRECTORY\_TYPE\_TIPS. For more details see "Common Reference Data Management for TIPS".

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`party_bic`

 | 

`str`

 | 

BIC that identifies a TIPS Participant or a Reachable Party in TIPS. This BIC is for  
information purpose only and it allows grouping all User BICs configured by a given  
TIPS Participant or Reachable Party. It cannot be used to address Instant Payments in TIPS.

 |
| 

`account_owner_bic`

 | 

`str`

 | 

BIC of the TIPS Participant (or TIPS Ancillary System) owning the TIPS Account (or TIPS AS  
Technical Account) for which the User BIC has been authorised, also through a CMB.

 |
| 

`institution_name`

 | 

`str`

 | 

It is the name stored in the CRDM BIC Directory together with the User BIC.

 |
| 

`valid_from`

 | 

`str`

 | 

Date from which the entry is valid.

 |
| 

`valid_to`

 | 

`str`

 | 

Date up to which the entry is valid.  
Value “99991231” is used whenever the ending of validity has not been specified.

 |
| 

`participation_type`

 | 

`str`

 | 

Exhaustive list of possible values for Party BIC:  
01 – TIPS Participant  
02 – Reachable Party

 |
| 

`max_ip_amount`

 | 

`str`

 | 

Maximum Amount accepted by the corresponding TIPS Participant or Reachable Party into an  
incoming Instant Payment transaction. The default value is the maximum amount defined by the  
SCT Inst scheme rulebook.

 |

## [](#FedwireAdditionalData "Copy link to heading")FedwireAdditionalData

Additional Membership Directory Data provided for type MEMBERSHIP\_DIRECTORY\_TYPE\_FEDWIRE. For more details see [https://www.frbservices.org/EPaymentsDirectory/fedwireFormat.html](https://www.frbservices.org/EPaymentsDirectory/fedwireFormat.html).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`telegraphic_name`

 | 

`str`

 | 

Short name of financial institution

 |
| 

`customer_name`

 | 

`str`

 | 

Commonly used abbreviated name

 |
| 

`funds_eligibility`

 | 

`str`

 | 

Funds transfer status:  
Y - Eligible  
N - Ineligible

 |
| 

`funds_settlement_only_status`

 | 

`str`

 | 

Funds settlement only status:  
S - Settlement-Only

 |
| 

`securities_eligibility`

 | 

`str`

 | 

Book Entry Securities Transfer Status:  
Y - Eligible  
N - Ineligible

 |
| 

`change_date`

 | 

`str`

 | 

Date of last revision, YYYYMMDD, or blank

 |

## [](#FedACHAdditionalData "Copy link to heading")FedACHAdditionalData

Additional Membership Directory Data provided for type MEMBERSHIP\_DIRECTORY\_TYPE\_FEDACH. For more details see [https://www.frbservices.org/EPaymentsDirectory/achFormat.html](https://www.frbservices.org/EPaymentsDirectory/achFormat.html).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`office_code`

 | 

`str`

 | 

Main office or branch:  
O - main  
B - branch

 |
| 

`servicing_frb_number`

 | 

`str`

 | 

Servicing Fed’s main office routing number

 |
| 

`record_type_code`

 | 

`str`

 | 

The code indicating the RTN number to be used to route or send ACH items to the RFI:  
0 - Institution is a Federal Reserve Bank  
1 - Send items to customer routing number  
2 - Send items to customer using new routing number field

 |
| 

`change_date`

 | 

`str`

 | 

Date of last change to CRF information: MMDDYY

 |
| 

`new_routing_number`

 | 

`str`

 | 

Institution’s new routing number resulting from a merger or renumber

 |
| 

`customer_name`

 | 

`str`

 | 

Commonly used abbreviated name

 |

## [](#BACSAdditionalData "Copy link to heading")BACSAdditionalData

Additional Membership Directory Data provided for type MEMBERSHIP\_DIRECTORY\_TYPE\_BACS. For more details see [https://www.vocalink.com/tools/extended-industry-sort-code-directory/eiscd-technical-specifications/](https://www.vocalink.com/tools/extended-industry-sort-code-directory/eiscd-technical-specifications/).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`bank_name`

 | 

`str`

 | 

The full name of the owning bank.

 |
| 

`bic_bank`

 | 

`str`

 | 

With bic\_branch, makes up the BIC for the bank office

 |
| 

`bic_branch`

 | 

`str`

 | 

With bic\_bank, makes up the BIC for the bank office

 |
| 

`date_last_changed`

 | 

`str`

 | 

The date that the details of the bank office’s participation in the Bacs clearing  
was amended.

 |
| 

`date_closed`

 | 

`str`

 | 

The date from which the bank office will no longer participate in the Bacs service.

 |
| 

`handling_bank`

 | 

`str`

 | 

The bank code of the Bacs scheme member that handles the output from the  
Bacs clearing for this bank office.

 |
| 

`handling_bank_stream`

 | 

`str`

 | 

The data used for Bacs output

 |
| 

`status`

 | 

`str`

 | 

Bacs service status:  
M - The bank office of a Bacs scheme member; accepts Bacs payments  
A - The bank office of a sponsored institution in Bacs; accepts Bacs payments  
N - The bank office either does not participate in Bacs or has a future dated closure.

 |
| 

`disallowed_transactions`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[str]`

 | 

DisallowedTransactions specifies that the bank office cannot accept a particular transaction  
type: DR - Direct Debits (transaction codes 01, 17, 18, 19) CR - Credits (99)  
CU - Claims for unpaid cheques (13)  
BS - Interest payments (Z4)  
DV - Dividend payments (Z5)  
AU - Direct Debit Instructions (0N, 0C, 0S).

 |
| 

`redirection_to_sort_code`

 | 

`str`

 | 

If the output from the Bacs service for this bank office is to be redirected, this field  
contains the sorting code to which payments are redirected.

 |
| 

`settlement_bank`

 | 

`str`

 | 

The bank code of the Bacs scheme member that settles the output from the Bacs clearing for  
this bank office.

 |
| 

`settlement_section`

 | 

`str`

 | 

The data used for Bacs output and settlement.

 |
| 

`settlement_sub_section`

 | 

`str`

 | 

The data used for Bacs output and settlement.

 |

## [](#FPSAdditionalData "Copy link to heading")FPSAdditionalData

Additional Membership Directory Data provided for type MEMBERSHIP\_DIRECTORY\_TYPE\_FPS. For more details see [https://www.vocalink.com/tools/extended-industry-sort-code-directory/eiscd-technical-specifications/](https://www.vocalink.com/tools/extended-industry-sort-code-directory/eiscd-technical-specifications/).

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`bank_name`

 | 

`str`

 | 

The full name of the owning bank.

 |
| 

`bic_bank`

 | 

`str`

 | 

With bic\_branch, makes up the BIC for the bank office

 |
| 

`bic_branch`

 | 

`str`

 | 

With bic\_bank, makes up the BIC for the bank office

 |
| 

`date_last_changed`

 | 

`str`

 | 

The date that the details of the bank office’s participation in the FPS clearing  
was amended.

 |
| 

`date_closed`

 | 

`str`

 | 

The date the bank office has been to set to close in the FPS service

 |
| 

`status`

 | 

`str`

 | 

The FPS service status:  
M - The bank office of FPS scheme member; accepts FPS payments  
A - The bank office of FPS agency bank; accepts FPS payments  
N - The bank office does not accept FPS payments.

 |
| 

`redirection_to_sort_code`

 | 

`str`

 | 

If the output from the FPS service for this bank office is to be redirected, this field  
contains the sorting code to which payments are redirected.

 |
| 

`settlement_bank_code`

 | 

`str`

 | 

The four-digit bank code of the FPS scheme member that settles the output from the FPS  
clearing for this bank office.

 |
| 

`settlement_bank_connection`

 | 

`str`

 | 

The two-digit connectivity code (01) of the FPS scheme member that settles the output from  
the FPS clearing for this bank office.

 |
| 

`handling_bank_code`

 | 

`str`

 | 

The bank code of the FPS member, agency or third party beneficiary that the Faster Payments  
routed payment will be sent to.

 |
| 

`handling_bank_connection`

 | 

`str`

 | 

The two-digit connectivity code of the FPS scheme member that handles the output from the  
FPS clearing for this bank office. Either:  
01 - FPS member  
02 - Direct agency  
04 - Responding third party beneficiary  
05 - Non-responding third party beneficiary.

 |