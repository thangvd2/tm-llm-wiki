---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/flows_api/card/addendum"
title: "Card Addendum"
scraped_at: "2026-06-17T05:08:50.065Z"
images: 0
---

# Card Addendum

`flows_api.card.addendum` module

Card Addendum

## [](#AddendumInitiation "Copy link to heading")AddendumInitiation

This proto is based on the cain.025.001.02 AddendumInitiationV02 message type as per "Acquirer to Issuer Card Messages - Version 3, Message Definition Report - Part 2".

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`message`

 | 

`[AddendumInitiationMessage](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#AddendumInitiationMessage)`

 | 

Addendum initiation message

 |

## [](#AddendumInitiationMessage "Copy link to heading")AddendumInitiationMessage

cain.025.001.02 AddendumInitiationV02 Provides supplemental data in addition to that which is required to complete an authorization initiation or financial initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`header`

 | 

`[Header](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Header)`

 | 

Information related to the management of the protocol. Mandatory.

 |
| 

`body`

 | 

`[Body](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Body)`

 | 

Information related to the authorisation initiation. Mandatory.

 |

## [](#Header "Copy link to heading")Header

47.1.14.7 Header66 Set of characteristics related to the protocol.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`protocol_version`

 | 

`str`

 | 

Version of the acquirer to issuer protocol specifications.

 |
| 

`exchange_identification`

 | 

`str`

 | 

Unique identification of an exchange of messages between two parties.

 |
| 

`re_transmission_counter`

 | 

`str`

 | 

Number of retransmission of the message. Incremented by one for each retransmission.

 |
| 

`creation_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time at which the message was sent.

 |
| 

`batch_management_information`

 | 

`[flows_api.common.BatchManagementInformation](/vault-payments/latest/EN/api/flows/flows_api/common#BatchManagementInformation)`

 | 

Information related to the batch and the collection to which the message belongs if any.

 |

## [](#Body "Copy link to heading")Body

37.4.2 Body - AddendumInitiation2 Information related to the authorisation initiation.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`environment`

 | 

`[Environment](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Environment)`

 | 

Contains or describes the information pertaining to the actors interacting with the  
transaction. Mandatory.

 |
| 

`transaction`

 | 

`[Transaction](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Transaction)`

 | 

Card transaction for which an authorisation is requested. Mandatory.

 |
| 

`addendum_data`

 | 

`[AddendumData](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#AddendumData)`

 | 

Contains data structures applicable to certain industries that require specific data  
within transaction messages. Mandatory.

 |

## [](#Environment "Copy link to heading")Environment

37.4.2.1 Environment30 Contains or describes the information pertaining to the actors interacting with the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`acquirer`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identification of the acquirer. Mandatory.  
ISO 8583 bit 32.

 |
| 

`originator`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identifies the originator of the transaction.

 |
| 

`sender`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Party sending the message to another intermediary agent or to the final destination.  
ISO 8583 bit 33

 |
| 

`receiver`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Party receiving the message from the origin or from an intermediary agent.  
ISO 8583 bit 100.

 |
| 

`acceptor`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Card acceptor performing the card transaction.

 |
| 

`destination`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identifies the destination of the transaction.

 |
| 

`issuer`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Information related to the issuer.

 |

## [](#Transaction "Copy link to heading")Transaction

37.4.2.3 Transaction148 Card transaction for which an authorisation is requested.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`associated_data_reference`

 | 

`str`

 | 

Transaction data related to programmes and services, content and format based on  
bilateral agreements.

 |
| 

`transaction_identification`

 | 

`[TransactionIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TransactionIdentification)`

 | 

Identification of the transaction.

 |
| 

`data_source`

 | 

`str`

 | 

Indicates the source of enhanced data.

 |
| 

`transaction_description`

 | 

`str`

 | 

Transaction data related to programmes and services, content and format based on  
bilateral agreements.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |

## [](#TransactionIdentification "Copy link to heading")TransactionIdentification

47.1.22.2 TransactionIdentification20 Identification of the transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`transaction_reference`

 | 

`str`

 | 

Identification of the transaction by the card acceptor. It may appear on the receipt of  
the cardholder. It remains unchanged throughout the lifetime of the transaction.

 |
| 

`transmission_date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Local date and time the transaction takes place at the card acceptor location.  
ISO 8583:87 bit 12 and 13, ISO 8583:93/2003 bit 12

 |
| 

`system_trace_audit_number`

 | 

`str`

 | 

Number assigned by a transaction originator to assist in identifying a transaction  
uniquely. The trace number remains unchanged for all messages within a two-message  
exchange (for example, request/repeat and response). ISO 8583 bit 11.

 |
| 

`retrieval_reference_number`

 | 

`str`

 | 

Reference supplied by the system retaining the original source information and used to  
assist in locating that information or a copy thereof.  
ISO 8583 bit 37.

 |
| 

`life_cycle_trace_identification_data`

 | 

`[flows_api.card.common.LifeCycleTraceIdentificationData](/vault-payments/latest/EN/api/flows/flows_api/card/common#LifeCycleTraceIdentificationData)`

 | 

Unique global identification structure used to match transactions throughout their  
lifecycle. ISO 8583:2003 bit 21.

 |
| 

`acquirer_reference_data`

 | 

`str`

 | 

Data supplied by an acquirer in an authorisation or financial request, advice or  
notification that may be required to be provided in a subsequent transaction.  
ISO 8583:93 bit 31.

 |
| 

`acquirer_reference_number`

 | 

`str`

 | 

Data supplied by an acquirer to assist in identifying a transaction (for example, for  
researching retrievals and chargebacks).  
ISO 8583:2003 bit 31.

 |
| 

`card_issuer_reference_data`

 | 

`str`

 | 

Data supplied by a card issuer in an authorisation response, financial response message  
or in a chargeback transaction that the acquirer may be required to provide in subsequent  
transactions.  
ISO 8583:1993 and ISO 8583:2003 bit 95.

 |
| 

`original_data_elements`

 | 

`[flows_api.card.common.OriginalDataElements](/vault-payments/latest/EN/api/flows/flows_api/card/common#OriginalDataElements)`

 | 

Data elements contained in the original message.  
ISO 8583:1987 bit 90 and ISO 8583:1993/2003 bit 56.

 |

## [](#AddendumData "Copy link to heading")AddendumData

47.1.8.45 AddendumData3 Component contains data structures applicable to certain merchant verticals that require industry-specific data within transaction messages.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`purchase_identifier_type`

 | 

`[PurchaseIdentifierType](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#PurchaseIdentifierType)`

 | 

Specifies the type of identifier present in the message.

 |
| 

`other_purchase_identifier_type`

 | 

`str`

 | 

Used when Purchase Identifier Type is Other National or Other Private.

 |
| 

`purchase_identifier`

 | 

`str`

 | 

Contains a value identifying Invoice Data or Purchase Request Data.

 |
| 

`travel_agency`

 | 

`[TravelAgency](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TravelAgency)`

 | 

Component provides details of travel agency, airline, or railway transactions.

 |
| 

`passenger_transport`

 | 

`[PassengerTransport](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#PassengerTransport)`

 | 

Component supports ticketing transactions for airline, railway, and travel agency  
transactions to provide passenger ticket information for the cardholder.

 |
| 

`vehicle_rentals`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[VehicleRentalService](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#VehicleRentalService)]`

 | 

Component provides detailed vehicle rental information. One occurrence of this component  
provides rental agreement data reporting for a single vehicle rental transaction.

 |
| 

`lodgings`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Lodging](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Lodging)]`

 | 

Component provides detailed information about lodging accommodations and related expenses  
for the cardholder. Acquirers can submit multiple occurrences of this component for each  
lodging transaction, to provide details of one or more folios.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data for the addendum.

 |

## [](#TravelAgency "Copy link to heading")TravelAgency

47.1.8.45.9 TravelAgency3 Component provides details of travel agency, airline, or railway transactions.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`company`

 | 

`[Company](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Company)`

 | 

Information describing the travel agency or party providing travel-related services.

 |

## [](#Company "Copy link to heading")Company

47.1.8.23.1 Company Information describing the travel agency or party providing travel-related services.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`code`

 | 

`str`

 | 

Agency code or name.

 |
| 

`name`

 | 

`str`

 | 

Name of the company.

 |

## [](#PassengerTransport "Copy link to heading")PassengerTransport

47.1.8.45.10 PassengerTransport Component supports ticketing transactions for airline, railway, and travel agency transactions to provide passenger ticket information for the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`summary`

 | 

`[PassengerTransportSummary](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#PassengerTransportSummary)`

 | 

General ticket information for airline, railway and travel agency transactions.

 |
| 

`trip_legs`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[TripLeg](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TripLeg)]`

 | 

Passenger ticket information for leg(s) of the journey.

 |
| 

`ancillary_purchases`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[AncillaryPurchase](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#AncillaryPurchase)]`

 | 

Additional charges related to or during transit, separate from the original  
ticket purchase.

 |

## [](#PassengerTransportSummary "Copy link to heading")PassengerTransportSummary

47.1.8.42 PassengerTransportSummary2 Passenger ticket summary information for the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`travel_authorisation_code`

 | 

`str`

 | 

Contains a code provided to a travel agent by a company to authorise ticket issuance.

 |
| 

`ticket_issuer`

 | 

`str`

 | 

Name of the issuing ticket agent.

 |
| 

`customer_reference`

 | 

`[CustomerReference](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#CustomerReference)`

 | 

Customer Reference Values provided for this transaction.

 |
| 

`passenger`

 | 

`[Customer](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Customer)`

 | 

Details of the customer.

 |
| 

`total_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[TransportAmount](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TransportAmount)]`

 | 

Total amount.

 |
| 

`summary_commodity_identification`

 | 

`str`

 | 

Provides the identifier assigned by the card acceptor that best categorizes the items  
being purchased in a standardized commodity group.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |

## [](#CustomerReference "Copy link to heading")CustomerReference

47.1.8.42.6 CustomerReference1 Contains Customer Reference Values provided for this transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`identification`

 | 

`str`

 | 

Defines the content of the value provided in the Customer Reference detail.

 |
| 

`detail`

 | 

`str`

 | 

Contains customer reference value details about the transaction.

 |

## [](#Customer "Copy link to heading")Customer

47.1.18.3 Customer8 Details of the customer.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`str`

 | 

Name of the customer.

 |
| 

`identification`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Details of the party identification.

 |
| 

`customer_file_reference_number`

 | 

`str`

 | 

Number or code assigned by an airline, company or other party to track or  
uniquely identify a person, department or project.

 |
| 

`age`

 | 

`str`

 | 

Age of the customer.

 |

## [](#TransportAmount "Copy link to heading")TransportAmount

47.1.8.41.18 AmountDetails2 Contains trip leg amount information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[TypeOfAmount](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TypeOfAmount)`

 | 

Code that describes the type of amount or fee.

 |
| 

`other_type`

 | 

`str`

 | 

Description of other type of amount or fee.

 |
| 

`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Contains the amount.

 |
| 

`credit_debit`

 | 

`[flows_api.common.CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

Sign of the amount.

 |
| 

`taxes`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Tax](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Tax)]`

 | 

Taxes related to the products or services.

 |

## [](#Tax "Copy link to heading")Tax

47.1.29.1 Tax39 Description of tax.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[AddendumTaxType](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#AddendumTaxType)`

 | 

Type of tax. Required.

 |
| 

`other_type`

 | 

`str`

 | 

Other type of tax. Describes the type of tax when Other, Other National, Other Private  
or Other Taxes Type is selected.

 |
| 

`description`

 | 

`str`

 | 

Description of the tax.

 |
| 

`tax_exemption`

 | 

`bool`

 | 

Exemption for this type of tax. True indicates exemption of tax.

 |
| 

`tax_exempt_reason`

 | 

`str`

 | 

Reason for tax exemption.

 |
| 

`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Tax amount. Required.

 |
| 

`rate`

 | 

`str`

 | 

Tax rate applied on original amount.  
Rate expressed as a percentage, that is, in hundredths,  
for example, 0.7 is 7/10 of a percent, and 7.0 is 7%.

 |
| 

`included_in_total_indicator`

 | 

`bool`

 | 

Indicate whether the Tax amount is included in total transaction amount.

 |
| 

`credit_debit`

 | 

`[flows_api.common.CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

A code to indicate the tax amount is credit or debit.

 |

## [](#TripLeg "Copy link to heading")TripLeg

47.1.8.41 TripLeg2 Supplies additional transaction information for travel transactions.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`sequence_number`

 | 

`str`

 | 

Identifies the specific occurrence of trip leg data.

 |
| 

`ticket`

 | 

`[Ticket](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Ticket)`

 | 

Details of the ticket.

 |
| 

`transport_type`

 | 

`[TransportTypeCode](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TransportTypeCode)`

 | 

Type of transportation.

 |
| 

`carrier`

 | 

`[Carrier](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Carrier)`

 | 

Identification of transportation carrier.

 |
| 

`route_number`

 | 

`str`

 | 

Route number specified by the transportation carrier.

 |
| 

`service_class`

 | 

`str`

 | 

Indicates the service class (for example, coach or first class).

 |
| 

`departure`

 | 

`[Departure](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Departure)`

 | 

Contains departure location, date and time.

 |
| 

`arrival`

 | 

`[Departure](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Departure)`

 | 

Contains arrival location, date and time.

 |
| 

`stopover_indicator`

 | 

`bool`

 | 

Indicator that specifies whether the mode of transportation was a  
direct or non-direct route on the same ticket number.

 |
| 

`non_direct_route_code`

 | 

`str`

 | 

Indicates a non-direct route between the origin and the destination.

 |
| 

`fare_basis_code`

 | 

`str`

 | 

Code that transportation companies assign to a particular ticket type,  
such as business class or discounted or non-refundable tickets.

 |
| 

`trip_leg_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[TransportAmount](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#TransportAmount)]`

 | 

Contains trip leg amount information.

 |
| 

`procedure_id`

 | 

`str`

 | 

Contains identification of the rail server procedure or the order in which  
the service was booked or a cancellation was completed.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional data.

 |

## [](#Ticket "Copy link to heading")Ticket

47.1.8.41.2 Ticket Supplies additional transaction information for travel transactions.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`ticket_number`

 | 

`str`

 | 

Contains the ticket number.

 |
| 

`ticket_issue_date`

 | 

`str`

 | 

Date the ticket was issued.

 |
| 

`conjunction_ticket_number`

 | 

`str`

 | 

Number of a ticket that contains additional coupons for an itinerary  
that contains more than four segments.

 |
| 

`restricted_ticket_indicator`

 | 

`bool`

 | 

Indicates whether restrictions apply to the ticket.

 |
| 

`restrictions`

 | 

`str`

 | 

Contains the specific restriction applicable to the ticket.

 |
| 

`exchanged_ticket_indicator`

 | 

`bool`

 | 

Indicates whether the ticket was reissued.

 |
| 

`exchanged_ticket_number`

 | 

`str`

 | 

Original ticket number that was replaced by the new ticket number.

 |

## [](#Carrier "Copy link to heading")Carrier

47.1.8.41.8 Carrier Identification of transportation carrier.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`name`

 | 

`str`

 | 

Name of the transportation carrier.

 |
| 

`code`

 | 

`str`

 | 

Identifies the operator (company providing service).

 |
| 

`iata_code`

 | 

`str`

 | 

Contains the International Air Transport Association (IATA) code identifying  
the company that purchased the ticket.

 |

## [](#Departure "Copy link to heading")Departure

47.1.8.1 DepartureOrArrival1 Contains departure or arrival information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`location`

 | 

`str`

 | 

Departure or arrival location (for example, city, airport code, station id, etc).

 |
| 

`description`

 | 

`str`

 | 

Specific explanation of the location or directions.

 |
| 

`date`

 | 

`str`

 | 

Departure or arrival date, in YYYY-MM-DD format.

 |
| 

`time`

 | 

`str`

 | 

Departure or arrival time, in hh:mm:ss.sss format.

 |

## [](#AncillaryPurchase "Copy link to heading")AncillaryPurchase

47.1.8.41 AncillaryPurchase2 Contains additional charges related to or during transit (e.g., baggage fee, in-flight purchase). These are separate from the original ticket purchase.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`service_category_code`

 | 

`[ServiceCategoryCode](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#ServiceCategoryCode)`

 | 

Ancillary category code for the primary type of service provided.

 |
| 

`amount`

 | 

`[Amount](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Amount)`

 | 

Ancillary purchase amount.

 |

## [](#Amount "Copy link to heading")Amount

47.1.4.8.4 Amount16

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Detailed amount expressed in the transaction currency.

 |
| 

`credit_debit`

 | 

`[flows_api.common.CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

Sign of the amount.

 |

## [](#VehicleRentalService "Copy link to heading")VehicleRentalService

47.1.8.34 VehicleRentalService2 Vehicle rental service provides detailed vehicle rental information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`customer`

 | 

`[VehicleRentalCustomer](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#VehicleRentalCustomer)`

 | 

Customer renting a vehicle.

 |
| 

`summary_commodity_identification`

 | 

`str`

 | 

Provides the identifier assigned by the card acceptor that best categorizes the items  
being purchased in a standardized commodity group.

 |
| 

`rental_agreement`

 | 

`[VehicleRentalAgreement](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#VehicleRentalAgreement)`

 | 

Agreement (contract) related to a vehicle rental service.

 |
| 

`rental_invoice`

 | 

`[VehicleRentalInvoice](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#VehicleRentalInvoice)`

 | 

Invoice related to a vehicle rental service.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional user-defined data pertaining to the vehicle rental.

 |

## [](#VehicleRentalCustomer "Copy link to heading")VehicleRentalCustomer

47.1.8.21 VehicleRentalCustomer2 Customer renting a vehicle.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`renter_name`

 | 

`str`

 | 

Name of the vehicle rental customer. Mandatory.

 |
| 

`corporate_name`

 | 

`str`

 | 

Corporate name of the vehicle rental customer.

 |
| 

`corporate_identifier`

 | 

`str`

 | 

Corporate identifier of the vehicle rental customer. Mandatory.

 |

## [](#VehicleRentalAgreement "Copy link to heading")VehicleRentalAgreement

47.1.8.35 VehicleRentalAgreement2 Agreement (contract) related to a vehicle rental service.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`agreement_number`

 | 

`str`

 | 

Contains the original vehicle rental agreement, invoice or contract number.

 |
| 

`adjusted_indicator`

 | 

`bool`

 | 

Indicates that an adjustment was made to a vehicle rental charge  
(for example, additional charges added).

 |
| 

`rental_location`

 | 

`[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)`

 | 

Contains the vehicle rental location.

 |
| 

`pickup_locations`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)]`

 | 

Used when different than rental location.

 |
| 

`check_out_date`

 | 

`str`

 | 

Date the vehicle was picked-up by the customer. In the case of a no-show transaction or a  
prepaid transaction, this contains the scheduled pickup date. In YYYY-MM-DD format.

 |
| 

`check_out_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Time the vehicle was picked-up by the customer. In the case of a no-show transaction or a  
prepaid transaction, this contains the scheduled pickup time.

 |
| 

`return_location`

 | 

`[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)`

 | 

Location to which vehicle was returned.

 |
| 

`check_in_date`

 | 

`str`

 | 

Date when the vehicle was returned to the rental agency. In YYYY-MM-DD format.

 |
| 

`check_in_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Time when the vehicle was returned to the rental agency.

 |
| 

`duration`

 | 

`str`

 | 

Duration of rental in days.

 |
| 

`rental_rates`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RentalRate](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#RentalRate)]`

 | 

Vehicle rental rates.

 |
| 

`vehicle_registration_number`

 | 

`str`

 | 

Registration number of vehicle.

 |
| 

`insurance_indicator`

 | 

`bool`

 | 

Indicates whether or not insurance was purchased.

 |

## [](#RentalRate "Copy link to heading")RentalRate

47.1.20.1 RentalRate1 Vehicle rental rate.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`period`

 | 

`[PeriodUnit](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#PeriodUnit)`

 | 

Unit of measure used to compute the rental rate.

 |
| 

`other_period`

 | 

`str`

 | 

Other unit of measure used to compute the rental rate.

 |
| 

`rate`

 | 

`str`

 | 

Rate applied to the vehicle rental for the specified period.

 |
| 

`period_count`

 | 

`str`

 | 

Duration of the period for which the rental rate is calculated.

 |

## [](#VehicleRentalInvoice "Copy link to heading")VehicleRentalInvoice

47.1.8.33 VehicleRentalInvoice2 Invoice related to a vehicle rental service.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`no_show_indicator`

 | 

`bool`

 | 

Indicates that the cardholder failed to pick up the vehicle and was therefore charged  
a no-show fee; vehicle was not actually rented.

 |
| 

`adjusted_indicator`

 | 

`bool`

 | 

Indicates that an adjustment was made to a vehicle rental charge  
(for example, additional charges added).

 |
| 

`return_location`

 | 

`[flows_api.common.PostalAddress](/vault-payments/latest/EN/api/flows/flows_api/common#PostalAddress)`

 | 

Location to which vehicle was returned.

 |
| 

`check_out_date`

 | 

`str`

 | 

Date the vehicle was picked-up by the customer. In the case of a no-show transaction or a  
prepaid transaction, this contains the scheduled pickup date. In YYYY-MM-DD format.

 |
| 

`check_out_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Time the vehicle was picked-up by the customer. In the case of a no-show transaction or a  
prepaid transaction, this contains the scheduled pickup time.

 |
| 

`check_in_date`

 | 

`str`

 | 

Date when the vehicle was returned to the rental agency. In YYYY-MM-DD format.

 |
| 

`check_in_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Time when the vehicle was returned to the rental agency.

 |
| 

`duration`

 | 

`str`

 | 

Duration of rental in days.

 |
| 

`vehicle_class_invoiced`

 | 

`[Vehicle](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Vehicle)`

 | 

Contains the details of the vehicle class invoiced to the renter regardless of the class of  
vehicle actually provided.

 |
| 

`vehicle_class_provided`

 | 

`[Vehicle](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Vehicle)`

 | 

Contains the details of the vehicle class of the vehicle actually provided to the renter  
at the time of vehicle pick-up. This may be an upgrade class of vehicle, above that  
invoiced to the renter.

 |
| 

`travel_distance`

 | 

`[Distance](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Distance)`

 | 

Distance travelled during vehicle rental.

 |
| 

`rental_charges`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[RentalRate](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#RentalRate)]`

 | 

Vehicle rental charges.

 |
| 

`summary_commodity_identification`

 | 

`str`

 | 

Provides the identifier assigned by the card acceptor that best categorizes the items being  
purchased in a standardized commodity group.

 |
| 

`insurance_indicator`

 | 

`bool`

 | 

Indicates whether or not insurance was purchased.

 |
| 

`additional_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[VehicleRentalAmount](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#VehicleRentalAmount)]`

 | 

Contains the details of additional amount for a specific vehicle rental service type.

 |
| 

`taxes`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Tax](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Tax)]`

 | 

Taxes related to the products or services.

 |

## [](#Vehicle "Copy link to heading")Vehicle

47.1.8.52 Vehicle4 Attributes of vehicle.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`class`

 | 

`str`

 | 

Contains the classification of the vehicle  
(for example, economy, intermediate, luxury, etc.)

 |
| 

`make`

 | 

`str`

 | 

Brand or manufacturer of the vehicle.

 |
| 

`model`

 | 

`str`

 | 

Product line of vehicle within the make.

 |
| 

`registration_number`

 | 

`str`

 | 

Registration number of vehicle.

 |

## [](#Distance "Copy link to heading")Distance

47.1.8.59 Distance1 Distance between a start and a return car rental period.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`unit_of_measure`

 | 

`[DistanceUnitOfMeasure](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#DistanceUnitOfMeasure)`

 | 

Unit of measure used to compute the distance.

 |
| 

`odometer_start`

 | 

`str`

 | 

Odometer reading at start of rental (at the time of vehicle check-out).

 |
| 

`odometer_return`

 | 

`str`

 | 

Odometer reading at return of rental (at the time of vehicle check-in).

 |
| 

`total_distance`

 | 

`str`

 | 

Total distance expressed in unit of measure.

 |
| 

`free_distance`

 | 

`str`

 | 

Maximum free miles or kilometres for the car rental period.

 |
| 

`rate`

 | 

`str`

 | 

Defines the rate in relation to a specific distance.

 |

## [](#VehicleRentalAmount "Copy link to heading")VehicleRentalAmount

47.1.4.4 Amount18 Describes each adjustment made to the original price.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[CarRentalServiceType](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#CarRentalServiceType)`

 | 

Code that describes the type of amount or fee.

 |
| 

`other_type`

 | 

`str`

 | 

Description of other type of amount or fee.

 |
| 

`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Contains the amount.

 |
| 

`credit_debit`

 | 

`[flows_api.common.CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

Indicates whether or not the amount is a credit or debit.

 |
| 

`customer_notified_indicator`

 | 

`bool`

 | 

Indicates whether or not the customer was notified about additional amounts.

 |

## [](#Lodging "Copy link to heading")Lodging

47.1.8.26 Lodging3 Lodging provides summary information about lodging accommodations and related expenses for the cardholder.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`summary`

 | 

`[LodgingSummary](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingSummary)`

 | 

Component provides summary information about lodging accommodations and related expenses  
for the cardholder. One occurrence of this component provides lodging accommodation  
reporting for a single lodging folio, such as a single stay at a lodging facility with  
one check-in and one check-out.

 |
| 

`line_items`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[LodgingLineItem](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingLineItem)]`

 | 

Component provides detailed information about lodging accommodations and related expenses  
for the cardholder. Acquirers can submit multiple occurrences of this component for each  
lodging transaction, to provide details of one or more folios.

 |

## [](#LodgingSummary "Copy link to heading")LodgingSummary

47.1.8.27 LodgingSummary2 Data pertaining to a lodging transaction.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`folio_number`

 | 

`str`

 | 

Contains the lodging company’s invoice or billing ID reference number,  
referred to as a folio number.

 |
| 

`property`

 | 

`[LodgingProperty](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingProperty)`

 | 

Details of the lodging property.

 |
| 

`customer`

 | 

`[Customer](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Customer)`

 | 

Contains customer details.

 |
| 

`number_of_rooms`

 | 

`str`

 | 

Number of rooms within the reservation.

 |
| 

`rooms`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[LodgingRoom](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingRoom)]`

 | 

Contains the room details.

 |
| 

`duration`

 | 

`str`

 | 

Duration of stay in days.

 |
| 

`arrival`

 | 

`[Arrival](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Arrival)`

 | 

Lodging transaction details.

 |
| 

`departure`

 | 

`[Departure](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Departure)`

 | 

Contains departure details.

 |
| 

`no_show_indicator`

 | 

`bool`

 | 

Indicates that the cardholder failed to arrive at the property and was therefore charged  
a no-show fee; property was not actually rented.

 |
| 

`insurance_indicator`

 | 

`bool`

 | 

Indicates whether or not insurance was purchased.

 |
| 

`insurance_amount`

 | 

`str`

 | 

Amount of insurance.

 |
| 

`total_taxes`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Tax](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Tax)]`

 | 

Taxes related to the products or services.

 |
| 

`total_amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Contains the total amount of lodging expenses.

 |
| 

`authorised_amounts`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[LodgingAuthorisedAmount](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingAuthorisedAmount)]`

 | 

Contains Authorised amount details.

 |
| 

`summary_commodity_identification`

 | 

`str`

 | 

Provides the identifier assigned by the card acceptor that best categorizes the items  
being purchased in a standardized commodity group.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional user-defined data pertaining to the lodging.

 |

## [](#LodgingProperty "Copy link to heading")LodgingProperty

47.1.8.28 LodgingProperty2 Company in charge of a lodging establishment

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`type`

 | 

`[LodgingActivityCode](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingActivityCode)`

 | 

Type of accommodations.

 |
| 

`other_type`

 | 

`str`

 | 

Other type of lodging establishment when Other National or Other Private is selected  
as a type code.

 |
| 

`prestigious_property`

 | 

`str`

 | 

Identifier that describes the lodging establishment as a prestigious property.

 |
| 

`name`

 | 

`str`

 | 

Name of the property.

 |
| 

`identification`

 | 

`[flows_api.card.common.PartyIdentification](/vault-payments/latest/EN/api/flows/flows_api/card/common#PartyIdentification)`

 | 

Identification of the lodging company.

 |
| 

`contact`

 | 

`[Contact](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Contact)`

 | 

Contact details at property.

 |
| 

`country`

 | 

`str`

 | 

Country of the property.  
Must be a valid ISO 3166 country code.

 |
| 

`fire_safety_act_indicator`

 | 

`bool`

 | 

Indicates whether or not the lodging facility complies with the  
US Hotel and Motel Fire Safety Act of 1990 (PL101-391) or similar legislation.

 |

## [](#Contact "Copy link to heading")Contact

47.1.8.28.8 Contact3 Contact details at property.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`central_phone_number`

 | 

`str`

 | 

Central phone number for the contact.

 |
| 

`property_phone_number`

 | 

`str`

 | 

Property phone number for the contact.

 |
| 

`toll_free_phone_number`

 | 

`str`

 | 

Toll-free phone number for the contact.

 |
| 

`email`

 | 

`str`

 | 

Email address of contact.

 |
| 

`fax_number`

 | 

`str`

 | 

Fax phone number.

 |
| 

`url_address`

 | 

`str`

 | 

Universal Resource Locator (URL) address.

 |

## [](#LodgingRoom "Copy link to heading")LodgingRoom

47.1.8.58 LodgingRoom1 Room details.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`room_type`

 | 

`str`

 | 

Type of room (for example, club/lounge level room).

 |
| 

`room_location`

 | 

`str`

 | 

Contains the room location information (for example,ocean view, lake view, level, etc.)

 |
| 

`bed_type`

 | 

`str`

 | 

Contain the type of bed in room (for example, single, double, king, etc.)

 |
| 

`guests_per_room`

 | 

`str`

 | 

Contains the number of guests in the room.

 |
| 

`adults_in_room`

 | 

`str`

 | 

Contains the number of adult guests in the room.

 |
| 

`children_in_room`

 | 

`str`

 | 

Contains the number of child guests in the room.

 |
| 

`daily_room_rate`

 | 

`str`

 | 

Daily rate being charged for the room.

 |

## [](#Arrival "Copy link to heading")Arrival

47.1.8.60 DepartureOrArrival2 Contains departure or arrival information.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`carrier_code`

 | 

`str`

 | 

Code indicating the name of the passenger transport carrier  
(for example, United Airlines, Lufthansa, JetBlue, etc.)

 |
| 

`route_number`

 | 

`str`

 | 

Route number (for example, flight number, bus number, train route or number, etc.)

 |
| 

`date`

 | 

`str`

 | 

Departure or arrival date, in YYYY-MM-DD format.

 |
| 

`time`

 | 

`str`

 | 

Departure or arrival time in hh:mm:ss.sss format.

 |

## [](#LodgingAuthorisedAmount "Copy link to heading")LodgingAuthorisedAmount

47.1.4.17 AuthorisedAmount1 Provides the amount reserved to cover the anticipated charges associated with the lodging stay.

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`date_time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Date and time of the amount authorised.

 |
| 

`amount`

 | 

`[Decimal](https://docs.python.org/3/library/decimal.html#decimal-objects)`

 | 

Contains the amount. Mandatory.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Contains additional information about the authorised amount.

 |

## [](#LodgingLineItem "Copy link to heading")LodgingLineItem

47.1.8.6 LodgingLineItem2 Lodging line item details

Class attributes   
| Name | Type | Description |
| --- | --- | --- |
| 
`date`

 | 

`str`

 | 

Date of the charge for the product or service associated with the line item,  
in YYYY-MM-DD format.

 |
| 

`time`

 | 

`[datetime](https://docs.python.org/3/library/datetime.html#datetime-objects)`

 | 

Time of the charge for the product or service associated with the line item.

 |
| 

`type`

 | 

`[LodgingServiceCode](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#LodgingServiceCode)`

 | 

Type of product or service associated with the line item.

 |
| 

`other_type`

 | 

`str`

 | 

Other type of product or service associated with the line item.

 |
| 

`post_check_out_indicator`

 | 

`bool`

 | 

Indicates whether or not the charge originated following the checkout.

 |
| 

`credit_debit`

 | 

`[flows_api.common.CreditDebit](/vault-payments/latest/EN/api/flows/flows_api/common#CreditDebit)`

 | 

A code to indicate the tax amount is credit or debit.

 |
| 

`unit_amount`

 | 

`str`

 | 

Contains the cost for one unit of the product or service.

 |
| 

`duration`

 | 

`str`

 | 

Duration of the trip.

 |
| 

`sub_total_amount`

 | 

`str`

 | 

Subtotal amount of line item. (e.g. total nightly rate, etc.)

 |
| 

`taxes`

 | 

`[ImmutableList](/vault-payments/latest/EN/api/flows/flows_api/collections#ImmutableList)[[Tax](/vault-payments/latest/EN/api/flows/flows_api/card/addendum#Tax)]`

 | 

Taxes related to the products or services.

 |
| 

`additional_data`

 | 

`Dict[str, str]`

 | 

Additional data.

 |

## [](#AddendumTaxType "Copy link to heading")AddendumTaxType

47.2.3.6 AddendumTaxType2Code Specifies the specific type of tax applicable to a transaction.

Enum values  
| Name | Description |
| --- | --- |
| 
`ADDENDUM_TAX_TYPE_UNKNOWN`

 |  |
| 

`ADDENDUM_TAX_TYPE_TOTAL_TAXES`

 | 

Total of all applicable taxes.

 |
| 

`ADDENDUM_TAX_TYPE_ALTERNATIVE_MINIMUM_TAX`

 | 

Tax is an alternative minimum tax.

 |
| 

`ADDENDUM_TAX_TYPE_ASSESSMENT`

 | 

Assessment.

 |
| 

`ADDENDUM_TAX_TYPE_BUSINESS_PRIVILEGE_TAX`

 | 

Tax imposed on non-American Indian businesses for the privilege of conducting  
business on an American Indian Reservation.

 |
| 

`ADDENDUM_TAX_TYPE_CAPITAL_GAINS_TAX`

 | 

Tax is on a capital gain (realised and unrealised), that is, the profit that is  
gained from the sale of a financial instrument.

 |
| 

`ADDENDUM_TAX_TYPE_CAPITAL_LOSS_CREDIT`

 | 

Tax recovery is due to capital loss.

 |
| 

`ADDENDUM_TAX_TYPE_CITY_RENTAL_TAX`

 | 

Levied by a city government against the periodic fee paid by a customer in return  
for the right to use the property of another party.

 |
| 

`ADDENDUM_TAX_TYPE_CITY_SALES_TAX`

 | 

Sales tax imposed by a city.

 |
| 

`ADDENDUM_TAX_TYPE_CITY_TAX`

 | 

Service tax imposed by a city.

 |
| 

`ADDENDUM_TAX_TYPE_CONSUMPTION_TAX`

 | 

Tax that is levied on goods and services purchased by customers, and is added  
to the retail price.

 |
| 

`ADDENDUM_TAX_TYPE_COUNTY_PARISH_SALES_TAX`

 | 

Service tax imposed by a County or Parish.

 |
| 

`ADDENDUM_TAX_TYPE_COUNTY_RENTAL_TAX`

 | 

Levied by a county government against the periodic fee paid by a customer in  
return for the right to use the property of another party.

 |
| 

`ADDENDUM_TAX_TYPE_COUNTY_TAX`

 | 

Service tax levied by a county.

 |
| 

`ADDENDUM_TAX_TYPE_CUSTOMS_TAX`

 | 

Tax levied on imports or exports by a country’s customs authority.

 |
| 

`ADDENDUM_TAX_TYPE_DEFAULT_LABOUR_TAX`

 | 

Default Labour Tax

 |
| 

`ADDENDUM_TAX_TYPE_DUTY`

 | 

A tax levied on goods that typically though not exclusively transit across  
a geographic border.

 |
| 

`ADDENDUM_TAX_TYPE_EMERGENCY_ASSISTANCE_CITY_TAX`

 | 

Tax levied by a city to recover the cost of providing telephone emergency  
assistance service (for example, 112, 911, 999).

 |
| 

`ADDENDUM_TAX_TYPE_EMERGENCY_ASSISTANCE_COUNTY_TAX`

 | 

Tax levied by a county to recover the cost of providing telephone emergency  
assistance service (for example, 112, 911, 999).

 |
| 

`ADDENDUM_TAX_TYPE_EMERGENCY_ASSISTANCE_EXCISE_TAX`

 | 

Usage tax levied to recover the cost of telephone emergency assistance service  
(for example, 112, 911, 999).

 |
| 

`ADDENDUM_TAX_TYPE_EMERGENCY_ASSISTANCE_STATE_TAX`

 | 

Tax levied by a state to recover the cost of providing telephone emergency  
assistance service (for example, 112, 911, 999).

 |
| 

`ADDENDUM_TAX_TYPE_EMERGENCY_ASSISTANCE_TAX`

 | 

Tax levied to recover the cost of providing telephone emergency assistance  
service (for example, 112, 911, 999).

 |
| 

`ADDENDUM_TAX_TYPE_ENERGY_TAX`

 | 

Tax applied to the utility and petroleum industries.

 |
| 

`ADDENDUM_TAX_TYPE_ENHANCED_EMERGENCY_ASSISTANCE_STATE_EXCISE_TAX`

 | 

Tax levied by a state to recover the cost of providing enhanced telephone emergency  
assistance services (for example, 112, 911, 999) such as automatic call identification.

 |
| 

`ADDENDUM_TAX_TYPE_ENVIRONMENTAL_TAX`

 | 

Tax levied on activities which are considered to have negative impacts on an environment.

 |
| 

`ADDENDUM_TAX_TYPE_EQUALISATION`

 | 

Part of an investor’s subscription amount that is held by the fund in order to pay  
incentive / performance fees at the end of the fiscal year.

 |
| 

`ADDENDUM_TAX_TYPE_EQUIPMENT_TAX`

 | 

Equipment Tax

 |
| 

`ADDENDUM_TAX_TYPE_EU_TAX_RETENTION`

 | 

Tax withheld at source in the framework of the European Directive on taxation of  
savings in the form of interest payments.

 |
| 

`ADDENDUM_TAX_TYPE_EXECUTING_BROKER_COMMISSION`

 | 

Executing broker’s commission amount.

 |
| 

`ADDENDUM_TAX_TYPE_FEDERAL_EXCISE_TAX`

 | 

Excise tax levied by a federal government.

 |
| 

`ADDENDUM_TAX_TYPE_FEDERAL_NATIONAL_SALES_TAX`

 | 

Federal or National Sales Tax.

 |
| 

`ADDENDUM_TAX_TYPE_FEDERAL_TAX`

 | 

Usage tax levied by federal (US and Canadian) government.

 |
| 

`ADDENDUM_TAX_TYPE_FEDERAL_VALUE_ADDED_TAX`

 | 

Federal Value-Added Tax (GST).

 |
| 

`ADDENDUM_TAX_TYPE_FEDERAL_VALUE_ADDED_TAX_ON_SERVICES`

 | 

Federal Value-Added Tax (GST) on Services.

 |
| 

`ADDENDUM_TAX_TYPE_FICA_MEDICARE_TAX`

 | 

USA Federal Insurance Contributions Act tax levied to assist in the funding of Medicare.

 |
| 

`ADDENDUM_TAX_TYPE_FICA_SOCIAL_SECURITY_TAX`

 | 

USA Federal Insurance Contributions Act tax levied to assist in the funding of  
social security.

 |
| 

`ADDENDUM_TAX_TYPE_FICA_TAX`

 | 

USA Federal Insurance Contributions Act tax.

 |
| 

`ADDENDUM_TAX_TYPE_FRANCHISE_TAX`

 | 

Tax levied by a municipality, on certain types of businesses for the right to  
exist as a legal entity and conduct business in a particular jurisdiction.

 |
| 

`ADDENDUM_TAX_TYPE_FUEL_SPILL_TAX`

 | 

Fuel Spill Tax.

 |
| 

`ADDENDUM_TAX_TYPE_FUEL_SUPER_FUND_TAX`

 | 

USA federal tax levied on certain types of businesses to provide funding  
for cleanup of hazardous waste sites.

 |
| 

`ADDENDUM_TAX_TYPE_FULL_VAT`

 | 

Value Added Tax calculated at the full tax rate.

 |
| 

`ADDENDUM_TAX_TYPE_GIFT_TAX`

 | 

Tax that is levied on assets given to individuals prior to the death of the donor.  
Gift tax is designed to ensure the integrity of the inheritance tax, preventing  
the pre-death transfer of wealth.

 |
| 

`ADDENDUM_TAX_TYPE_GOODS_AND_SERVICES_TAX`

 | 

Goods and Services Tax - Canadian value-added tax.

 |
| 

`ADDENDUM_TAX_TYPE_GROSS_RECEIPTS_TAX`

 | 

Gross Receipts Tax.

 |
| 

`ADDENDUM_TAX_TYPE_HALF_VAT`

 | 

Value Added Tax calculated at the half tax rate.

 |
| 

`ADDENDUM_TAX_TYPE_HANDICAP_TAX`

 | 

Tax assessed to assist the handicapped.

 |
| 

`ADDENDUM_TAX_TYPE_HARMONIZED_SALES_TAX`

 | 

Harmonized Sales Tax (HST).

 |
| 

`ADDENDUM_TAX_TYPE_HAZARDOUS_WASTE_TAX`

 | 

Tax levied on entities that produce, store, treat, transport or otherwise manage  
hazardous wastes and materials.

 |
| 

`ADDENDUM_TAX_TYPE_INHERITANCE_TAX`

 | 

Tax that is payable at the time of death on any items (money or otherwise), where  
ownership changes either upon death or within a legally specified number of years before  
death.

 |
| 

`ADDENDUM_TAX_TYPE_INTERIM_PROFIT_TAX`

 | 

Tax levied on the sum of all earnings/ revenues accrued  
since the last dividend distribution.

 |
| 

`ADDENDUM_TAX_TYPE_LABOUR_BY_TRADE_TAX`

 | 

Labour by Trade Tax.

 |
| 

`ADDENDUM_TAX_TYPE_LEAKY_UNDERGROUND_STORAGE_TANK_TAX`

 | 

Federal tax levied in the USA to fund the clean-up activities associated with  
leaking underground storage tanks.

 |
| 

`ADDENDUM_TAX_TYPE_LICENSE_TAX`

 | 

Tax levied by a government agency for the granting of a license to conduct an activity,  
such as driving a car, operating a business, selling liquor, hunting,  
or practicing certain vocations.

 |
| 

`ADDENDUM_TAX_TYPE_LOCAL_BROKER_COMMISSION`

 | 

Local broker’s commission amount.

 |
| 

`ADDENDUM_TAX_TYPE_LOCAL_SALES_TAX`

 | 

All applicable sales taxes levied by taxing authorities below the state level.  
Used only for sales tax.

 |
| 

`ADDENDUM_TAX_TYPE_LOCAL_TAX`

 | 

Service tax levied by a local government or taxation agency. Not a sales tax.

 |
| 

`ADDENDUM_TAX_TYPE_LUXURY_TAX`

 | 

Ad valorem tax levied on products or services that are deemed to be  
non-essential or unneeded.

 |
| 

`ADDENDUM_TAX_TYPE_MATERIAL_TAX`

 | 

Material Tax.

 |
| 

`ADDENDUM_TAX_TYPE_METROPOLITAN_TRANSIT_TAX`

 | 

Metropolitan Transit Tax.

 |
| 

`ADDENDUM_TAX_TYPE_MINIMUM_TAX`

 | 

Minimum Tax.

 |
| 

`ADDENDUM_TAX_TYPE_MUNICIPAL_TAX`

 | 

Service tax imposed by a municipality.

 |
| 

`ADDENDUM_TAX_TYPE_MUTUALLY_DEFINIED_TAX`

 | 

Mutually Defined.

 |
| 

`ADDENDUM_TAX_TYPE_NATIONAL_FEDERAL_TAX`

 | 

Tax is a country, national, or federal tax usually levied by the custodian.

 |
| 

`ADDENDUM_TAX_TYPE_NATIONAL_TAX`

 | 

Tax is a national tax.

 |
| 

`ADDENDUM_TAX_TYPE_OCCUPANCY_TAX`

 | 

Tax levied for the privelage of occupying space for home or rental for a  
fixed period of time, as determined by a taxing authority.

 |
| 

`ADDENDUM_TAX_TYPE_OCCUPATIONAL_TAX`

 | 

Type of gross receipts tax imposed for the privilege of carrying on a  
business, trade or profession.

 |
| 

`ADDENDUM_TAX_TYPE_OTHER`

 | 

Other type of tax not elsewhere classified.

 |
| 

`ADDENDUM_TAX_TYPE_OTHER_NATIONAL`

 | 

Other national use defined value.

 |
| 

`ADDENDUM_TAX_TYPE_OTHER_PRIVATE`

 | 

Other private use defined value.

 |
| 

`ADDENDUM_TAX_TYPE_OTHER_TAXES`

 | 

Other taxes.

 |
| 

`ADDENDUM_TAX_TYPE_PAYMENT_LEVY_TAX`

 | 

Tax levied on a payment.

 |
| 

`ADDENDUM_TAX_TYPE_POST_THRESHOLD_TAX`

 | 

Post-threshold tax.

 |
| 

`ADDENDUM_TAX_TYPE_PRE_THRESHOLD_TAX`

 | 

Pre-threshold tax.

 |
| 

`ADDENDUM_TAX_TYPE_PRODUCT_AND_SERVICES_TAX`

 | 

Tax levied on products and services.

 |
| 

`ADDENDUM_TAX_TYPE_PROPERTY_TAX`

 | 

Ad valorem property tax levied on real or personal property by local government units  
such as counties, municipalities, school districts, and special taxing districts.

 |
| 

`ADDENDUM_TAX_TYPE_PROVINCIAL_TAX`

 | 

Provincial tax.

 |
| 

`ADDENDUM_TAX_TYPE_PUBLIC_HEALTH_AND_EDUCATION_TAX`

 | 

Canadian tax levied to fund public care and education.

 |
| 

`ADDENDUM_TAX_TYPE_QUEBEC_SALES_TAX`

 | 

Quebec Sales Tax (QST).

 |
| 

`ADDENDUM_TAX_TYPE_ROOM_CITY`

 | 

Room City.

 |
| 

`ADDENDUM_TAX_TYPE_ROOM_COUNTRY_SUBDIVISION_1`

 | 

Room Country Subdivision1.

 |
| 

`ADDENDUM_TAX_TYPE_ROOM_COUNTRY_SUBDIVISION_2`

 | 

Room Country Subdivision2.

 |
| 

`ADDENDUM_TAX_TYPE_ROOM_TAX`

 | 

Room Tax.

 |
| 

`ADDENDUM_TAX_TYPE_ROOM_VAT`

 | 

Room VAT.

 |
| 

`ADDENDUM_TAX_TYPE_ROOM_VISITOR`

 | 

Room Visitor.

 |
| 

`ADDENDUM_TAX_TYPE_SALES_AND_USE_TAX`

 | 

Tax levied for the use of equipment and service provided.

 |
| 

`ADDENDUM_TAX_TYPE_SCHOOL_TAX`

 | 

Tax levied by taxing authority for schools.

 |
| 

`ADDENDUM_TAX_TYPE_SECONDARY_PERCENTAGE_TAX`

 | 

Secondary Percentage Tax.

 |
| 

`ADDENDUM_TAX_TYPE_STADIUM_TAX`

 | 

Stadium Tax.

 |
| 

`ADDENDUM_TAX_TYPE_STAMP_DUTY`

 | 

Tax levied on certain types of documents and transactions.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_AND_LOCAL_SALES_TAX`

 | 

State and Local Sales Tax.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_AND_LOCAL_TAX`

 | 

State and local tax levies, exclusive of state and local sales tax.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_EXCISE_TAX`

 | 

Usage tax imposed by state or provincial government authorities.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_OR_PROVINCIAL_TAX`

 | 

Sales tax levied by a State or Province that excludes sales or excise taxes.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_OR_PROVINCIAL_TAX_ON_SERVICES`

 | 

State or Provincial tax on services

 |
| 

`ADDENDUM_TAX_TYPE_STATE_PROVINCIAL_FUEL_TAX`

 | 

State or Provincial Fuel Tax.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_PROVINCIAL_TAX_ON_GOODS`

 | 

State or Provincial Tax on Goods.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_RENTAL_TAX`

 | 

Tax levied by a state government against a periodic fee paid by a customer  
in return for the right to use the property of another party.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_SALES_TAX`

 | 

State Sales Tax.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_TAX`

 | 

State tax.

 |
| 

`ADDENDUM_TAX_TYPE_STATE_TAX_ON_SPECIFIC_LABOUR`

 | 

State Tax on Specific Labour.

 |
| 

`ADDENDUM_TAX_TYPE_STOCK_EXCHANGE_TAX`

 | 

Tax levied by a stock exchange.

 |
| 

`ADDENDUM_TAX_TYPE_SURTAX`

 | 

Surtax.

 |
| 

`ADDENDUM_TAX_TYPE_TAX_CREDIT`

 | 

Direct reduction of an individual’s tax liability.

 |
| 

`ADDENDUM_TAX_TYPE_TDD_SERVICE_EXCISE_TAX`

 | 

Excise tax levied to recover the cost of providing Telecommunications Device  
for the Deaf (TDD) Equipment.

 |
| 

`ADDENDUM_TAX_TYPE_TELECOMMUNICATIONS_TAX`

 | 

Tax levied on telecommunications companies for the right to provide services.  
May be a usage or excise tax.

 |
| 

`ADDENDUM_TAX_TYPE_THRESHOLD_TAX`

 | 

Threshold Tax.

 |
| 

`ADDENDUM_TAX_TYPE_TRANSACTION_TAX`

 | 

Tax levied on a transaction.

 |
| 

`ADDENDUM_TAX_TYPE_TRANSFER_TAX`

 | 

Tax levied on a transfer.

 |
| 

`ADDENDUM_TAX_TYPE_UNSPECIFIED`

 | 

Unspecified tax type.

 |
| 

`ADDENDUM_TAX_TYPE_UTILITY_USERS_TAX`

 | 

Tax levied on consumers by a city or county for the use of natural gas.

 |
| 

`ADDENDUM_TAX_TYPE_VALUE_ADDED_TAX`

 | 

Value added tax.

 |
| 

`ADDENDUM_TAX_TYPE_VALUE_ADDED_TAX_OF_ZERO_RATE`

 | 

Tax for which a zero rate applies.

 |
| 

`ADDENDUM_TAX_TYPE_WEALTH_TAX`

 | 

Tax levied only when the value of assets or categories of assets owned by an entity are  
above a given limit as defined by the tax authority. Wealth tax is not linked to income.

 |
| 

`ADDENDUM_TAX_TYPE_WELL_SERVICE`

 | 

Well Service.

 |
| 

`ADDENDUM_TAX_TYPE_WITHHOLDING_OF_FOREIGN_TAX`

 | 

Rate at which the income will be withheld by the jurisdiction in which the income was  
originally paid, for which relief at source and/or reclaim may be possible.

 |
| 

`ADDENDUM_TAX_TYPE_WITHHOLDING_OF_LOCAL_TAX`

 | 

Rate at which the income will be withheld by the jurisdiction in which the account owner  
is located, for which relief at source and/or reclaim may be possible.

 |
| 

`ADDENDUM_TAX_TYPE_WITHHOLDING_TAX`

 | 

Income tax withheld or deducted from the amount due to the recipient, and paid to the  
government by the payer rather than the recipient. May apply to salaries, interest,  
and other types of proceeds.

 |
| 

`ADDENDUM_TAX_TYPE_TOTAL_NON_ROOM_TAX`

 | 

Tax levied on non-room expenditures.

 |

## [](#CarRentalServiceType "Copy link to heading")CarRentalServiceType

47.2.3.37 CarRentalServiceType2Code Car rental service in addition to main car rental.

Enum values  
| Name | Description |
| --- | --- |
| 
`CAR_RENTAL_SERVICE_TYPE_UNKNOWN`

 |  |
| 

`CAR_RENTAL_SERVICE_TYPE_ADJUSTMENT`

 | 

Rental amount adjustment.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_AUTHORISED`

 | 

Authorised amount.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_BABY_SEAT`

 | 

Baby seat.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_CLEANING`

 | 

Extra charges due to the need to clean the car.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_DAMAGE`

 | 

Charge for damages.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_DELIVERY`

 | 

Charge for delivery of rental vehicle.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_DROP_OFF`

 | 

Drop off charges.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_ENTERTAINMENT`

 | 

Entertainment.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_EXTRA_CHARGES`

 | 

Extra charges.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_EXTRA_DAYS`

 | 

Charges for extra days.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_EXTRA_DISTANCE`

 | 

Charges for additional distance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_EXTRA_HOURS`

 | 

Charges for extra hours.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_FINES`

 | 

Police and related fines or violation fees reinvoiced by vehicle rental company.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_FUEL`

 | 

Fuel.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_GARAGE`

 | 

Garage.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_GLOBAL_POSITIONING_SYSTEM`

 | 

Global Positioning System (GPS).

 |
| 

`CAR_RENTAL_SERVICE_TYPE_INSURANCE`

 | 

Insurance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_LATE_RETURN`

 | 

Car returned late.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_LIABILITY_INSURANCE`

 | 

Charges for liability insurance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_LOSS_DAMAGE_INSURANCE`

 | 

Charges for Loss Damage Insurance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_MISCELLANEOUS`

 | 

Miscellaneous charges.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_NAVIGATION`

 | 

Charges for navigation system.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_NO_SHOW`

 | 

Customer no-show charges.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_ONE_WAY`

 | 

Drop-off charges.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_OTHER_NATIONAL`

 | 

Other National.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_OTHER_PRIVATE`

 | 

Other Private.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_PARKING`

 | 

Parking charges.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_PERSONAL_ACCIDENT_INSURANCE`

 | 

Personal Accident Insurance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_PERSONAL_EFFECTS_INSURANCE`

 | 

Personal Effects Insurance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_PHONE`

 | 

On-board telephone service.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_REGULAR_DISTANCE`

 | 

Charges for regular distance.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_SMOKING`

 | 

Extra charges due to smoking in the car.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_TOLLS`

 | 

Charges for tolls.

 |
| 

`CAR_RENTAL_SERVICE_TYPE_TOWING`

 | 

Extra charges due to car towing.

 |

## [](#DistanceUnitOfMeasure "Copy link to heading")DistanceUnitOfMeasure

47.2.3.175 UnitOfMeasure10Code Unit of measure expressed in miles and kilometres.

Enum values  
| Name | Description |
| --- | --- |
| 
`DISTANCE_UNIT_OF_MEASURE_UNKNOWN`

 |  |
| 

`DISTANCE_UNIT_OF_MEASURE_KILOMETRE`

 | 

Unit of measure that is equal to 1, 000 meters.

 |
| 

`DISTANCE_UNIT_OF_MEASURE_MILE`

 | 

Unit of length equal to 1, 760 yards.

 |

## [](#LodgingActivityCode "Copy link to heading")LodgingActivityCode

47.2.3.100 LodgingActivity1Code Lodging type of activity.

Enum values  
| Name | Description |
| --- | --- |
| 
`LODGING_ACTIVITY_CODE_UNKNOWN`

 |  |
| 

`LODGING_ACTIVITY_CODE_APARTMENT`

 | 

Apartment residence.

 |
| 

`LODGING_ACTIVITY_CODE_BED_AND_BREAKFAST`

 | 

Bed and breakfast or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_COTTAGE`

 | 

Cottage and related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_CRUISE`

 | 

Cruise line lodging.

 |
| 

`LODGING_ACTIVITY_CODE_HOME`

 | 

An individual offering lodging facilities.

 |
| 

`LODGING_ACTIVITY_CODE_HOSTEL`

 | 

Hostel or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_HOTEL`

 | 

Hotel or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_LODGE`

 | 

Lodge or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_MOTEL`

 | 

Motel or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_OTHER_NATIONAL`

 | 

Other type of lodging defined at national level.

 |
| 

`LODGING_ACTIVITY_CODE_OTHER_PRIVATE`

 | 

Other type of lodging defined at private level.

 |
| 

`LODGING_ACTIVITY_CODE_RESORT`

 | 

Resort or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_ROOM_AND_BOARD`

 | 

Room and board or related lodging.

 |
| 

`LODGING_ACTIVITY_CODE_TOURIST_SHELTER`

 | 

Tourist shelter and related lodging.

 |

## [](#LodgingServiceCode "Copy link to heading")LodgingServiceCode

47.2.3.101 LodgingService1Code. Type of lodging service.

Enum values  
| Name | Description |
| --- | --- |
| 
`LODGING_SERVICE_CODE_UNKNOWN`

 |  |
| 

`LODGING_SERVICE_CODE_ACCOMODATION`

 | 

Room accommodation.

 |
| 

`LODGING_SERVICE_CODE_AUDIO_VISUAL`

 | 

Audio visual lodging service.

 |
| 

`LODGING_SERVICE_CODE_BANQUET`

 | 

Banquet lodging service.

 |
| 

`LODGING_SERVICE_CODE_BREAKFAST`

 | 

Breakfast lodging service.

 |
| 

`LODGING_SERVICE_CODE_BUSINESS_CENTRE`

 | 

Business centre lodging service.

 |
| 

`LODGING_SERVICE_CODE_CONCIERGE`

 | 

Concierge lodging service.

 |
| 

`LODGING_SERVICE_CODE_EARLY_ARRIVAL`

 | 

Early arrival lodging service.

 |
| 

`LODGING_SERVICE_CODE_EARLY_DEPARTURE`

 | 

Early departure lodging service.

 |
| 

`LODGING_SERVICE_CODE_ENTERTAINMENT`

 | 

Entertainment lodging service.

 |
| 

`LODGING_SERVICE_CODE_FOLIO_CASH_ADVANCE`

 | 

Folio cash advance lodging service.

 |
| 

`LODGING_SERVICE_CODE_GAMES`

 | 

Games lodging service.

 |
| 

`LODGING_SERVICE_CODE_GARAGE`

 | 

Garage lodging service.

 |
| 

`LODGING_SERVICE_CODE_GIFT_SHOP`

 | 

Gift shop lodging service.

 |
| 

`LODGING_SERVICE_CODE_HEALTH`

 | 

Health lodging service.

 |
| 

`LODGING_SERVICE_CODE_INTERNET`

 | 

Internet lodging service.

 |
| 

`LODGING_SERVICE_CODE_LAUNDRY`

 | 

Laundry lodging service.

 |
| 

`LODGING_SERVICE_CODE_LOUNGE_BAR`

 | 

Lounge bar lodging service.

 |
| 

`LODGING_SERVICE_CODE_MINI_BAR`

 | 

Mini bar lodging service.

 |
| 

`LODGING_SERVICE_CODE_NO_SHOW`

 | 

No show lodging service.

 |
| 

`LODGING_SERVICE_CODE_OTHER`

 | 

Other type of service.

 |
| 

`LODGING_SERVICE_CODE_PARKING`

 | 

Parking lodging service.

 |
| 

`LODGING_SERVICE_CODE_PHONE`

 | 

Phone lodging service.

 |
| 

`LODGING_SERVICE_CODE_RESTAURANT`

 | 

Restaurant lodging service.

 |
| 

`LODGING_SERVICE_CODE_ROOM_SERVICE`

 | 

Room service.

 |
| 

`LODGING_SERVICE_CODE_SPA`

 | 

Spa lodging service.

 |
| 

`LODGING_SERVICE_CODE_THIRD_PARTY`

 | 

Third-party lodging service.

 |
| 

`LODGING_SERVICE_CODE_TRANSPORTATION`

 | 

Transportation lodging service.

 |
| 

`LODGING_SERVICE_CODE_VIDEO_ON_DEMAND`

 | 

Video on demand lodging service.

 |

## [](#PeriodUnit "Copy link to heading")PeriodUnit

47.2.3.137 PeriodUnit3Code Type of period unit to be used.

Enum values  
| Name | Description |
| --- | --- |
| 
`PERIOD_UNIT_UNKNOWN`

 |  |
| 

`PERIOD_UNIT_OTHER_PRIVATE`

 | 

Other Private.

 |
| 

`PERIOD_UNIT_OTHER_NATIONAL`

 | 

Other National.

 |
| 

`PERIOD_UNIT_MONTHS`

 | 

Counted in months.

 |
| 

`PERIOD_UNIT_WEEKS`

 | 

Counted in weeks.

 |
| 

`PERIOD_UNIT_YEARS`

 | 

Counted in years.

 |
| 

`PERIOD_UNIT_DAYS`

 | 

Counted in days.

 |
| 

`PERIOD_UNIT_EXTRA_DAYS`

 | 

Extra Days.

 |

## [](#PurchaseIdentifierType "Copy link to heading")PurchaseIdentifierType

47.2.3.147 PurchaseIdentifierType1Code Identifies the type of identifier used in the Purchase Identifier field.

Enum values  
| Name | Description |
| --- | --- |
| 
`PURCHASE_IDENTIFIER_TYPE_UNKNOWN`

 |  |
| 

`PURCHASE_IDENTIFIER_TYPE_CONTRACT_NUMBER`

 | 

Contract Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_CUSTOMER_ORDER`

 | 

Customer Order.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_CUSTOMER_PURCHASE_ORDER`

 | 

Customer Purchase Order.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_FOLIO_NUMBER`

 | 

Folio Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_INVOICE_NUMBER`

 | 

Invoice Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_ORDER_NUMBER`

 | 

Order Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_OTHER_NATIONAL`

 | 

Other Purchase Identifier defined at a national level.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_OTHER_PRIVATE`

 | 

Other Purchase Identifier defined at a private level.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_PAYMENT_REFERENCE_NUMBER`

 | 

Payment Reference Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_PURCHASE_IDENTIFICATION`

 | 

Purchase Identification.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_RECORD_LOCATOR`

 | 

Record Locator.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_RENTAL_AGREEMENT`

 | 

Rental Agreement.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_RENTAL_NUMBER`

 | 

Rental Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_RESERVATION_NUMBER`

 | 

Reservation Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_SUPPLIER_ORDER`

 | 

Supplier Order.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_TICKET_NUMBER`

 | 

Ticket Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_TRACKING_NUMBER`

 | 

Tracking Number.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_SUPPLIER_INVOICE`

 | 

Supplier Invoice.

 |
| 

`PURCHASE_IDENTIFIER_TYPE_TRANSACTION_IDENTIFICATION`

 | 

Transaction Identification is a proprietary value provided by the card acceptor or  
acquirer to uniquely identify a given transaction.

 |

## [](#ServiceCategoryCode "Copy link to heading")ServiceCategoryCode

47.1.8.37.3 ServiceCategoryCode Ancillary category code for the primary type of service that has been provided.

Enum values  
| Name | Description |
| --- | --- |
| 
`SERVICE_CATEGORY_CODE_UNKNOWN`

 |  |
| 

`SERVICE_CATEGORY_CODE_BUNDLED_SERVICE`

 | 

Bundled Service.

 |
| 

`SERVICE_CATEGORY_CODE_BAGGAGE_FEE`

 | 

Baggage Fee.

 |
| 

`SERVICE_CATEGORY_CODE_CHANGE_FEE`

 | 

Change Fee.

 |
| 

`SERVICE_CATEGORY_CODE_CARGO`

 | 

Cargo.

 |
| 

`SERVICE_CATEGORY_CODE_CARBON_OFFSET`

 | 

Carbon offset.

 |
| 

`SERVICE_CATEGORY_CODE_FREQUENT_FLYER`

 | 

Frequent flyer.

 |
| 

`SERVICE_CATEGORY_CODE_GIFT_CARD`

 | 

Gift card.

 |
| 

`SERVICE_CATEGORY_CODE_GROUND_TRANSPORT`

 | 

Ground transport.

 |
| 

`SERVICE_CATEGORY_CODE_INFLIGHT_ENTERTAINMENT`

 | 

In-flight entertainment.

 |
| 

`SERVICE_CATEGORY_CODE_LOUNGE`

 | 

Lounge.

 |
| 

`SERVICE_CATEGORY_CODE_MEDICAL`

 | 

Medical.

 |
| 

`SERVICE_CATEGORY_CODE_MEAL_BEVERAGE`

 | 

Meal/beverage.

 |
| 

`SERVICE_CATEGORY_CODE_OTHER`

 | 

Other.

 |
| 

`SERVICE_CATEGORY_CODE_PASSENGER_ASSIST_FEE`

 | 

Passenger assist fee.

 |
| 

`SERVICE_CATEGORY_CODE_PETS`

 | 

Pets.

 |
| 

`SERVICE_CATEGORY_CODE_SEAT_FEES`

 | 

Seat fees.

 |
| 

`SERVICE_CATEGORY_CODE_STANDBY`

 | 

Standby.

 |
| 

`SERVICE_CATEGORY_CODE_SERVICE_FEE`

 | 

Service fee.

 |
| 

`SERVICE_CATEGORY_CODE_STORE`

 | 

Store.

 |
| 

`SERVICE_CATEGORY_CODE_TRAVEL_SERVICE`

 | 

Travel service.

 |
| 

`SERVICE_CATEGORY_CODE_UNACCOMPANIED_TRAVEL`

 | 

Unaccompanied travel.

 |
| 

`SERVICE_CATEGORY_CODE_UPGRADES`

 | 

Upgrades.

 |
| 

`SERVICE_CATEGORY_CODE_WIFI`

 | 

WiFi.

 |

## [](#TransportTypeCode "Copy link to heading")TransportTypeCode

47.1.8.41.5 TransportType1Code Type of transportation.

Enum values  
| Name | Description |
| --- | --- |
| 
`TRANSPORT_TYPE_UNKNOWN`

 | 

Unknown.

 |
| 

`TRANSPORT_TYPE_AIR`

 | 

Air.

 |
| 

`TRANSPORT_TYPE_BUS`

 | 

Bus.

 |
| 

`TRANSPORT_TYPE_OTHER_NATIONAL`

 | 

Other national.

 |
| 

`TRANSPORT_TYPE_OTHER_PRIVATE`

 | 

Other private.

 |
| 

`TRANSPORT_TYPE_RAIL`

 | 

Rail.

 |
| 

`TRANSPORT_TYPE_SHIP`

 | 

Ship.

 |

## [](#TypeOfAmount "Copy link to heading")TypeOfAmount

47.2.3.172 TypeOfAmount20Code Identification or qualification of the type of amount.

Enum values  
| Name | Description |
| --- | --- |
| 
`TYPE_OF_AMOUNT_UNKNOWN`

 | 

Unknown.

 |
| 

`TYPE_OF_AMOUNT_AUTHORISED_AMOUNT`

 | 

Authorised amount.

 |
| 

`TYPE_OF_AMOUNT_BAGGAGE`

 | 

Baggage.

 |
| 

`TYPE_OF_AMOUNT_CARGO`

 | 

Cargo.

 |
| 

`TYPE_OF_AMOUNT_CHARGED_TO_CARD`

 | 

Charged to card.

 |
| 

`TYPE_OF_AMOUNT_CLUB_FEE`

 | 

Club fee.

 |
| 

`TYPE_OF_AMOUNT_DUTY_FREE`

 | 

Duty free.

 |
| 

`TYPE_OF_AMOUNT_EXCHANGE_TICKET`

 | 

Exchange ticket.

 |
| 

`TYPE_OF_AMOUNT_EXCHANGE_TICKET_FEE`

 | 

Exchange ticket fee.

 |
| 

`TYPE_OF_AMOUNT_EXTRA`

 | 

Extra.

 |
| 

`TYPE_OF_AMOUNT_FARE`

 | 

Fare.

 |
| 

`TYPE_OF_AMOUNT_FOOD_BEVERAGE`

 | 

Food / beverage.

 |
| 

`TYPE_OF_AMOUNT_INSURANCE`

 | 

Insurance.

 |
| 

`TYPE_OF_AMOUNT_MISCELLANEOUS`

 | 

Miscellaneous.

 |
| 

`TYPE_OF_AMOUNT_OTHER_NATIONAL`

 | 

Other national.

 |
| 

`TYPE_OF_AMOUNT_OTHER_PRIVATE`

 | 

Other private.

 |
| 

`TYPE_OF_AMOUNT_PET_CARRIER`

 | 

Pet carrier.

 |
| 

`TYPE_OF_AMOUNT_PHONE`

 | 

Phone.

 |
| 

`TYPE_OF_AMOUNT_PREPAYMENT`

 | 

Prepayment.

 |
| 

`TYPE_OF_AMOUNT_TOTAL`

 | 

Total.

 |
| 

`TYPE_OF_AMOUNT_TOUR_ORDER`

 | 

Tour order.

 |
| 

`TYPE_OF_AMOUNT_UPGRADE`

 | 

Upgrade.

 |
| 

`TYPE_OF_AMOUNT_TICKET_DELIVERY`

 | 

Ticket delivery.

 |