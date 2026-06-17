---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start"
title: "Sandbox quick start"
scraped_at: "2026-06-17T05:06:59.175Z"
images: 0
---

# Sandbox quick start

The Vault Payments Sandbox is a testing and evaluation environment provided by Thought Machine to help users explore and understand the functionality of Vault Payments. It is designed to simulate production-like payment processing capabilities without handling real money or sensitive data. The Sandbox allows users to interact with Vault Payments APIs, execute payment flows, and test various features of the platform.

## [](#getting_support_and_providing_feedback "Copy link to heading")Getting support and providing feedback

We welcome your feedback and will provide support as and when required. If you encounter an issue when using the Vault Payments Sandbox, contact Thought Machine to raise a service request. If you do not have access to the Thought Machine Support Portal, please raise issues and feedback with your Thought Machine contact.

If you have access to the Thought Machine Support Portal, you can raise a service request directly by clicking the Support Portal URL in your *Vault Payments Sandbox Onboarding Handbook*. When raising a request, ensure that you use the correct request type so that we can resolve the issue effectively. The two service request types are shown below:

 
| Support request type | Description |
| --- | --- |
| 
Advice Ticket - Vault Payments

 | 

For all queries and feedback on the product, such as:

-   "The API documentation is unclear"
    
-   "How do I instruct a cards final auth using the Payments API?".
    





 |
| 

Vault Payments Sandbox Issue

 | 

For all errors and defects, such as `The API is returning an HTTP 500`

 |

## [](#accessing_the_vault_payments_sandbox "Copy link to heading")Accessing the Vault Payments Sandbox

This section explains how to:

-   Set up the Sandbox so that you can make requests to its Vault Core and Vault Payments APIs to receive your first payment
    
-   Connect to the Vault Core Operations Dashboard and the Vault Payments App
    

### [](#authentication "Copy link to heading")Authentication

To access the Vault Payments Sandbox you need to authenticate with Vault Tokens, see [Vault Tokens](/vault-payments/latest/EN/using_vault_payments/vault_tokens#index) for more information.

When connecting to the Sandbox APIs, you need to provide a valid JWT (JSON Web Token) in the API request.

The following sections describe how to obtain a valid JWT.

#### [](#retrieving_a_vault_payments_jwt_json_web_token "Copy link to heading")Retrieving a Vault Payments JWT (JSON Web Token)

A valid JWT is required in order to access the Vault Payments API. A JWT can be retrieved via Vault Tokens.

chat\_bubble

JWTs are defined by [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519). Vault has specific requirements for JWTs, see [JSON Web Tokens](/vault-payments/latest/EN/using_vault_payments/vault_payments_api#json_web_tokens) for more information.

To retrieve a JWT, you need to make a request to the Vault Tokens authorisation server using either cURL or Postman. The following information needs to be included in a request. (This information is provided in your *Vault Payments Sandbox Onboarding Handbook*):

-   The URL of the Vault Tokens authorisation server:
    
    `[https://sandbox.payments.tmachine.io/api/v1/auth/token](https://sandbox.payments.tmachine.io/api/v1/auth/token)`
    
-   Your Client ID and Client Secret, obtained after creating your Client Credentials in the Vault Payments App.
    

In the request, you will also need to specify the scopes to include within the JWT. For more information, see [Permission Scopes](/vault-payments/latest/EN/using_vault_payments/vault_payments_api/permission_scopes).

##### [](#using_curl "Copy link to heading")Using cURL

You can use the command below to obtain an access token, replacing the templated fields with your Client ID and Client Secret.

##### [](#using_postman "Copy link to heading")Using Postman

To make a request for a JWT using Postman, first create a new **HTTP Request**, setting the method and URL. Click on **Authorization** and **Basic Auth**, then populate the two fields displayed with the following information:

 
| Key | Value |
| --- | --- |
| 
username

 | 

Client ID

 |
| 

password

 | 

Client Secret

 |

Click on **Body** and select **x-www-form-urlencoded**, then add the following two fields:

 
| Key | Value |
| --- | --- |
| 
grant\_type

 | 

client\_credentials

 |
| 

scope

 | 

{required scopes}

 |

See [Permission Scopes](/vault-payments/latest/EN/using_vault_payments/vault_payments_api/permission_scopes) to know more about supported scopes.

### [](#accessing_the_apis "Copy link to heading")Accessing the APIs

#### [](#accessing_the_vault_payments_api "Copy link to heading")Accessing the Vault Payments API

To access the Vault Payments API, you need to provide a valid Vault Payments JWT (JSON Web Token) JWT in each request to the Vault Payments API. You can make requests to the Vault Payments APIs using a range of different tools.

Use the following URL for all requests:

`[https://sandbox.payments.tmachine.io/api/<API](https://sandbox.payments.tmachine.io/api/\<API) endpoint>`

You can find the list of API endpoints [here](/vault-payments/latest/EN/api/payments_api/).

The examples below use `/api/sandbox/simulate/credit-transfers/inbound POST` where you will process your first payment in Vault Payments. This tutorial makes use of the Credit Transfers Simulator which is available on non-production instances of Vault Payments to simulate the processing of an inbound instant payment in Vault Payments using the "TMInstant" payment system. You can find out more information on Vault Payment’s account to account payment capabilities [here](/vault-payments/latest/EN/account_to_account/).

##### [](#making_your_first_payment_with_the_command_line_curl "Copy link to heading")Making your first payment with the command line (cURL)

In this tutorial you will construct a request that will instruct the Credit Transfer simulator to issue an Instruction to the Vault Payments API. The Instruction will credit an account, that has [automatically](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources) been provisioned for your tenant, with the amount specified in the request. To make a request using cURL, provide a valid Vault Payments JWT using the `header` option:

This is a request to the Credit Transfers simulator to credit 25 euros to the specified IBAN - which is automatically provisioned for tenants of the sandbox. On success, you will receive a response similar to:

Congratulations! You have just received your first payments as of Vault Payments. Make a note of the value of the `credit_transfer_instruction_id` as you will use this value later on in the quick start guide.

##### [](#postman "Copy link to heading")Postman

To make a request using Postman, first create a new **HTTP Request**, setting the method and URL. Click on **Headers** and add the following header for the Vault Payments JWT:

 
| Key | Value |
| --- | --- |
| 
Authorization

 | 

Bearer {Vault Payments JWT}

 |

##### [](#programmatic_access_using_python "Copy link to heading")Programmatic access using Python

You can access the Vault Payments API programmatically. The example below shows how to do this using Python.

To run the script, replace the templated fields with your Client ID and Client Secret, obtained after creating your Client Credentials in the Vault Payments App:

### [](#accessing_the_vault_payments_app "Copy link to heading")Accessing the Vault Payments App

Access the Vault Payments App using a browser by clicking the following URL: [https://sandbox.payments.tmachine.io](https://sandbox.payments.tmachine.io).

1.  Enter your **Organisation name**, provided in your *Vault Payments Onboarding handbook*.
    
2.  Enter your Okta **Username** and **Password**.
    
    chat\_bubble
    
    Ensure that the **Username** contains an email address that has been enabled.
    
3.  Once logged in, click on the Search tile.
    
4.  Paste the ID of the `credit_transfer_instruction_id` that you made a note of in the Accessing the API section into the text box below the \`Search for anything' label. Click on the magnifying glass or press enter to be taken to the payment details page.
    
5.  Congratulations! You have successfully located the inbound payment that you created previously in the Vault Payments App.
    

For an overview of the App, see [Using the Vault Payments App](/vault-payments/latest/EN/app/using_the_app/)

#### [](#roles_and_permissions_in_the_sandbox "Copy link to heading")Roles and permissions in the Sandbox

By default, users in the Sandbox have the `vp_payments_admin` role with full access. Please contact Thought Machine if you would like a different configuration of roles. See [User access management](/vault-payments/latest/EN/app/user_access_management) for a list of available roles and permissions. In production we recommend the security principle of least privilege.

## [](#differences_between_sandbox_and_production "Copy link to heading")Differences between Sandbox and Production

Thought Machine currently offers access to Vault Payments for testing and evaluation via our Sandbox, and it should not be used for any real money payments. Production instances offer a similar set of endpoints, there are some general differences:

-   **Data** : The Sandbox and Production instances do not share the same infrastructure - resources present in the Sandbox are not replicated to Production
    
-   **Usage** : The Sandbox instance is intended to be used for product evaluation purposes only; you must not use the Sandbox for performance testing nor for live production traffic.
    
-   **Storage of sensitive information**: You should not store PII/sensitive information in the Sandbox instance.
    
-   **Test/Live Payments**: The Sandbox cannot be used to run real money Production workloads.
    

The following table explains the more specific differences between the Sandbox and Production instances:

  
| Sandbox feature | Sandbox feature description | Production variance |
| --- | --- | --- |
| 
The [Card Simulator](/vault-payments/latest/EN/api/payments_api#simulator_cards) and [Credit Transfer Simulator](/vault-payments/latest/EN/api/payments_api#simulator_credit_transfers) endpoints are available

 | 

Our Simulator API simulates the sending of payment messages through the scheme to Vault Payments.

 | 

The Simulator endpoints will not be available when in Production.

 |
| 

Cleartext APIs are available

 | 

We are providing Cleartext endpoints for Cards and Account Ranges to retrieve unencrypted details.

 | 

These unencrypted details fall within PCI scope and for security purposes they will not be stored in cleartext anywhere in the system.

 |
| 

Comes with pre-loaded resources

 | 

We have supplied a [set of resources](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#provided_resources) to get you up and running quickly, such as Accounts and a Card Product.

 | 

You will create your own resources.

 |
| 

Contains a mock fraud server

 | 

We have created a mock fraud server to simulate fraud check responses.

 | 

The mock fraud server will be unavailable in Production.

 |

## [](#provided_resources "Copy link to heading")Provided resources

After [accessing the Vault Payments Sandbox](/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start#accessing_the_vault_payments_sandbox), you should now have an account for the Vault Payments Sandbox APIs and web application.

To help you get started quickly, the following resources have already been created for you in the Sandbox. You can inspect these by making a request to the Vault Payments or Vault Core API List endpoints, or by making a GET request to an endpoint with one of the IDs below:

### [](#vault_payments "Copy link to heading")Vault Payments

**Payment Instruments and Cards**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Cardholder

 | 

1fea811f-c9f0-479c-9e6b-8a0761d291b1

 |  |
| 

Card

 | 

7566e10d-ea3f-4862-91bf-b587242b7167

 |  |
| 

Payment Instrument

 | 

917e6093-9bd4-5aab-8820-2e3fde0a5575

 | 

Payment Instrument representing multi-currency Card

 |
| 

Payment Instrument

 | 

3efb081e-44d3-41b8-9453-eaaa722252a4

 | 

Payment Instrument representing UK domestic bank account (bank identifier: 222222, instrument identifier: 57891236)

 |
| 

Payment Instrument

 | 

45adfb7a-3781-45dd-a051-6fa7bc386a33

 | 

Payment Instrument representing UK international IBAN (GB35VAUL22222257891236)

 |
| 

Payment Instrument

 | 

90e7fe62-d128-4104-9fbb-3f8b30b0ba21

 | 

Payment Instrument representing French domestic bank account (bank identifier: 2005101005, instrument identifier: 0500013M02505)

 |
| 

Payment Instrument

 | 

ddbc18fe-f620-4ebd-be17-e221efaa4bfb

 | 

Payment Instrument representing French international IBAN (FR9120051010050500013M02505)

 |
| 

Payment Instrument

 | 

68f9b7a9-7f18-4d91-b9bc-b2e9e2a9030a

 | 

Payment Instrument representing Italian international IBAN (IT46X0361523456000012345678)

 |
| 

Payment Instrument

 | 

518be936-5ccc-412e-a698-014f809f6e9d

 | 

Payment Instrument representing US domestic bank account (bank identifier: 036157781, instrument identifier: 4380138176)

 |
| 

Payment Instrument

 | 

607bd938-77d5-4b05-8647-aff4e12d5096

 | 

Payment Instrument representing US international bank account (bank identifier: VAULUS22, instrument: 4380138176)

 |

**Instruction Flows**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Instruction Flow

 | 

tm-instant-inbound

 | 

TMInstant Inbound Payment Flow

 |
| 

Instruction Flow

 | 

tm-instant-inbound-status-report

 | 

TMInstant Inbound Status Report Flow

 |
| 

Instruction Flow

 | 

tm-instant-outbound

 | 

TMInstant Outbound Payment Initiation Flow

 |
| 

Instruction Flow

 | 

tm-instant-outbound-status-report

 | 

TMInstant Outbound Status Report Flow

 |
| 

Instruction Flow

 | 

tm-instant-outbound-return

 | 

TMInstant Outbound Payment Return Flow

 |
| 

Instruction Flow

 | 

tm-instant-inbound-return

 | 

TMInstant Inbound Payment Return Flow

 |
| 

Instruction Flow

 | 

05faf15d-6bad-4e0d-b425-85dfb3ac83a1

 | 

Authorisation Instruction Flow

 |
| 

Instruction Flow

 | 

c75079c2-222c-4147-a5a5-89076d082199

 | 

First Presentment Instruction Flow

 |

**Rules**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Rule

 | 

tm-ct-currency-restriction

 | 

Credit transfer currency restriction

 |
| 

Rule

 | 

tm-eur-selection

 | 

EUR Currency Account Link Selector

 |
| 

Rule

 | 

tm-atm-withdrawal

 | 

ATM Withdrawal

 |
| 

Rule

 | 

tm-contactless-controls

 | 

Contactless Controls

 |
| 

Rule

 | 

tm-max-authorisation-amount

 | 

Maximum Card Payment Amount

 |
| 

Rule

 | 

tm-merchant-country-restriction

 | 

Merchant Country Restrictions

 |
| 

Rule

 | 

tm-merchant-restriction

 | 

Merchant Category Restrictions

 |
| 

Rule Set

 | 

tm-card-controls

 | 

Card Controls

 |

**Parameters**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Parameter

 | 

tminstant-max-amount

 | 

An amount limit used in TM Instant Flows

 |
| 

Parameter

 | 

tm-currency-code-allow-list

 | 

A list of Currency Codes (alphabetic ISO) to be used to allow and restrict currencies.

 |
| 

Parameter

 | 

tm-atm-withdrawal-enabled

 | 

A Toggle to be used with ATM withdrawal checks

 |
| 

Parameter

 | 

tm-atm-withdrawal-limit

 | 

A limit to be used with ATM withdrawals

 |
| 

Parameter

 | 

tm-contactless-enabled

 | 

A Toggle to be used with contactless card transactions

 |
| 

Parameter

 | 

tm-contactless-limit

 | 

A limit to be used with contactless card transactions

 |
| 

Parameter

 | 

tm-authorisation-limit

 | 

A limit to be used with card authorisations

 |
| 

Parameter

 | 

tm-country-deny-list

 | 

A list of Country Codes (ISO-3166 Alpha-3) to be used to restrict transactions.

 |
| 

Parameter

 | 

tm-merchant-category-code-deny-list

 | 

A list of Merchant Category Codes to be used to restrict transactions.

 |

**Configuration**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Core

 | 

vault-core

 | 

Core resource for Vault Core Accounts

 |
| 

Integration

 | 

vault\_core\_accounts

 | 

Integrations to Vault Core Accounts, used for Balance Inquiries

 |
| 

Calendar

 | 

cards\_auth\_expiry\_manager\_calendar

 | 

Calendar which triggers authorisation expiry

 |
| 

Account Range

 | 

7f42a285-2769-49cb-9c7f-aa21ee358eaa

 | 

\- Range from: BIN+200- Range to: BIN+299.You can find your assigned BIN in the Vault Payments Sandbox Onboarding Handbook

 |
| 

Card Product

 | 

4cb1cad5-5feb-4cad-b597-2a8e6e954144

 | 

Card Product against the Mastercard scheme

 |
| 

Membership Directory

 | 

sample-sandbox-tips-directory

 | 

Sample Membership Directory with data fitting the TIPS directory format

 |

**Account Links**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Account Link

 | 

802d4b6c-3dcf-4d10-8c33-dd7613ddf305

 | 

GBP current account

 |
| 

Account Link

 | 

83899e27-635e-4321-b1ae-2a3d9eab1a6b

 | 

EUR current account

 |
| 

Account Link

 | 

47dd1208-239e-4dec-97b6-8769c937c806

 | 

Second EUR current account

 |
| 

Account Link

 | 

ea6e061d-c2aa-4e9d-a400-07ded6c26c45

 | 

USD current account

 |
| 

Account Link

 | 

9eeb7340-3f92-4e68-949d-367506ce10d2

 | 

GBP business current account

 |

### [](#vault_core "Copy link to heading")Vault Core

chat\_bubble

Provided Core resources may be different depending on the Sandbox configuration, please refer to the *Vault Payments Sandbox Onboarding Handbook* for more details.

**Account and Customer Resources**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Customer

 | 

30e642a3-edc5-4472-a932-b24d4d3e90a3

 |  |
| 

Account

 | 

a93aeeae-9177-42ee-9fd2-c0e89c51177f

 | 

GBP current account

 |
| 

Account

 | 

e3d66fee-a79a-44d5-afc6-0451ee66f8f4

 | 

EUR current account

 |
| 

Account

 | 

5abbd91e-50fd-48c2-9eb5-d126f3c138d0

 | 

Second EUR current account

 |
| 

Account

 | 

77b42708-83fc-4b95-b7f3-c6a656fe2596

 | 

USD current account

 |
| 

Account

 | 

42d31049-fb33-466f-bc1a-95ff0f35e388

 | 

GBP business current account

 |
| 

Internal Account

 | 

LIQUIDITY\_ACCOUNT

 |  |
| 

Internal Account

 | 

SUSPENSE\_ACCOUNT

 |  |
| 

Internal Account

 | 

SUSPENSE\_MASTERCARD\_SETTLEMENT

 |  |
| 

Internal Account

 | 

MASTERCARD\_PROFIT\_AND\_LOSS

 |  |
| 

Internal Account

 | 

MASTERCARD\_RECONCILIATION

 |  |
| 

Internal Account

 | 

MASTERCARD\_UNAPPLIED

 |  |

**Configuration**

  
| Resource type | ID | Notes |
| --- | --- | --- |
| 
Product

 | 

vault\_payments\_gbp\_current\_account

 | 

GBP Current account

 |
| 

Product

 | 

vault\_payments\_eur\_current\_account

 | 

EUR current account

 |
| 

Product

 | 

vault\_payments\_usd\_current\_account

 | 

USD current account

 |
| 

Product

 | 

vault\_payments\_gbp\_business\_current\_account

 | 

GBP business current account

 |
| 

Product

 | 

generic\_liquidity\_account\_contract

 | 

Internal account

 |
| 

Product

 | 

generic\_suspense\_account\_contract

 | 

Internal account

 |
| 

Product

 | 

suspense\_mastercard\_settlement\_contract

 | 

Internal account

 |
| 

Product

 | 

mastercard\_profit\_and\_loss\_contract

 | 

Internal account

 |
| 

Product

 | 

mastercard\_reconciliation\_contract

 | 

Internal account

 |
| 

Product

 | 

mastercard\_unapplied\_contract

 | 

Internal account

 |

## [](#accessing_vault_core "Copy link to heading")Accessing Vault Core

This section explains how to:

-   Make requests to the Vault Core APIs
    
-   Connect to the Vault Core Operations Dashboard
    

chat\_bubble

Access to Vault Core may be different depending on the Sandbox configuration, please refer to the *Vault Payments Sandbox Onboarding Handbook* for more details.

### [](#accessing_the_apis_2 "Copy link to heading")Accessing the APIs

#### [](#accessing_the_vault_core_api "Copy link to heading")Accessing the Vault Core API

To make a request to the Vault Core API, you need your Vault Core API service account token and the Vault Core API URL which you can find in the *Vault Payments Sandbox Onboarding Handbook*.

You can find the list of Core API endpoints [here](/vault-core/latest/EN/api/core_api/). In the examples below, use the `GET /v1/accounts` endpoint.

##### [](#command_line_curl "Copy link to heading")Command line (cURL)

To make a request using cURL, provide your Core API service account token:

##### [](#postman_2 "Copy link to heading")Postman

To make a request using Postman, first create a new **HTTP Request**, setting the method and URL. Click on **Headers** and add the following headers for the Core API service account token:

 
| Key | Value |
| --- | --- |
| 
X-Auth-Token

 | 

{Core API service account token}

 |

##### [](#programmatic_access_using_python_2 "Copy link to heading")Programmatic access using Python

You can access the Vault Core API programmatically. The example below shows how to do this using Python.

To run the script, replace the templated fields with the credentials contained in your *Vault Payments Sandbox Onboarding Handbook*:

### [](#accessing_the_vault_core_operations_dashboard "Copy link to heading")Accessing the Vault Core Operations Dashboard

You can access the Operations Dashboard by opening your Vault Core Operations Dashboard URL in a browser. Click **Login with SSO** and then, when prompted, enter your Okta username and password. For more information about the Operations Dashboard, see the [Operations Dashboard section](/vault-core/latest/EN/reference/core_apps_and_operations_dashboard/ops_dashboard/) in the Vault Core documentation.