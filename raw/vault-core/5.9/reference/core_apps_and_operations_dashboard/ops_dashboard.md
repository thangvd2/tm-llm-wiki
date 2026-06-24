---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard"
title: "Operations Dashboard"
scraped_at: "2026-06-22T19:19:19.564Z"
images: 1
---

# Operations Dashboard

Operations Dashboard is available to clients with a bank-hosted instance of Vault Core and clients with a Vault Core SaaS environment.

## [](#overview "Copy link to heading")Overview

All staff in the bank use the Vault Core banking website to perform tasks. You can assign each employee a role which determines the permissions they have for viewing information and completing actions. You can [customise these roles](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#permissions_2) to reflect any organisational structure.

error

The bank name and page title match the values that you specified and agreed with Thought Machine when setting up the details for your environment and onboarding. You must not change `ops.bank_name` in `values.yaml` after installing Vault Core.

## [](#logging_in_and_permissions "Copy link to heading")Logging in and permissions

chat\_bubble

You need to configure your Identity Provider (IDP) with your Vault Core details to support access to both Core Apps and Operations Dashboard.

When you log in, you see a website customised to your job role. This means a single website can serve all the employees in the bank. The banking website handles all bank activity including servicing customers, product management, financial management, compliance, and Workflow management.

Learn more about permissions in [Organisation admin → Permissions](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#permissions_2).

### [](#accessing_operations_dashboard "Copy link to heading")Accessing Operations Dashboard

You can access Operations Dashboard by using your unique client URL. Alternatively, you can select it from the App Switcher in the navigation menu for each Vault Core app.

The following URLs contain a `$<placeholder>` in place of your unique client details for the purposes of these examples.

#### [](#example_url_for_bank_hosted_environments "Copy link to heading")Example URL for bank-hosted environments:

#### [](#example_url_for_saas_environments "Copy link to heading")Example URL for SaaS environments:

#### [](#app_switcher "Copy link to heading")App Switcher:

![app\_switcher\_icons\_operations\_dashboard\_core\_apps.png](_assets/app_switcher_icons_operations_dashboard__vaultcor.webp)

#### [](#more_information "Copy link to heading")More information:

If you require information about configuring access to Core Apps and Operations Dashboard, see the following setup guides. These guides link to the [Setting up and Configuring Vault with a SAML IDP](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/) guide and provide an overview of the overall steps to set up Vault Core.

-   Clients with a bank-hosted Vault Core environment: [Getting Started with Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core)
    
-   Clients with a Vault Core SaaS environment: [Environment details guide → Core Apps and Operations Dashboard](/vault-core/5-9/EN/environment_and_installation/saas/introduction_to_vault_saas/environment_details_guide#core_apps_and_operations_dashboard)
    

## [](#internationalisation "Copy link to heading")Internationalisation

The Operations Dashboard UI is displayed in `en-GB` (English) by default; however, it is translation ready. You can configure the default display locale and enable additional locales for users to select from a locale selection menu within the user interface (UI). You can change these configuration settings, and find further guidance about doing so, within the `values.yaml` file.

Vault Core includes additional language packs from Vault Core 4.5 onwards - the locale availability timeline per release is as follows:

Baseline:

-   `en-GB` (English) - the default language pack
    

Vault Core 4.5:

-   `en-GB` (English) - the default language pack
    
-   `id-ID` (Bahasa Indonesia)
    

Vault Core 4.6:

-   `en-GB` (English) - the default language pack
    
-   `de-DE` (German)
    
-   `es-ES` (Spanish)
    
-   `es-XL` (LatAm Spanish)
    
-   `fr-FR` (French)
    
-   `id-ID` (Bahasa Indonesia)
    
-   `ko-KR` (Korean)
    
-   `vi-VN` (Vietnamese)
    

Future releases of Vault Core may introduce additional locale options. For more information, contact Thought Machine.

chat\_bubble

Vault Core SaaS customers: If you have any specific translation requirements, contact your Thought Machine representative.

## [](#customers "Copy link to heading")Customers

The **Customers** screen lets you [search](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#searching_for_customers) for and view customer records. Operations Dashboard displays each record in the following tabs.

### [](#summary "Copy link to heading")Summary

The **Summary** tab displays:

-   All of the accounts for a customer
    
-   Recent tasks, processes and activities
    

You can also [start a customer Workflow](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#starting_processes_in_vault) from here.

### [](#about "Copy link to heading")About

The **About** tab displays:

-   Personal details
    
-   Identifiers, for example an email address
    
-   Address
    
-   Documents that were uploaded for Know Your Customer (KYC)
    
-   Additional data, for example KYC data and customer status
    

### [](#accounts "Copy link to heading")Accounts

The **Accounts** tab displays all accounts associated with the customer. Click an account to view:

-   Account details
    
-   Account balances
    
-   Additional details for the account
    
-   Account restrictions
    
-   Schedule event history
    
-   Posting instruction batches
    
-   Smart Contract parameters
    

### [](#tasks "Copy link to heading")Tasks

The **Tasks** tab displays all tasks related to the customer. You can filter the tasks by:

-   Tags (can be added to a task so tasks can be grouped together logically)
    
-   Status ('Open', \`In progress', 'Approved', 'Rejected')
    

Click:

-   Tasks to view the task details
    
-   Actions menu to manage the tasks
    

### [](#history "Copy link to heading")History

The **History** tab displays a list of historical changes that have been made to a customer record, such as a change of customer details.

### [](#audit_logs "Copy link to heading")Audit logs

The **Audit logs** tab display all requests made to Vault APIs for that customer. Go to the Ledgers menu and click [*Audit logs*](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#audit_logs) to view audit logs for all customers.

### [](#transactions "Copy link to heading")Transactions

The **Transactions** tab displays transactions associated with the customer’s account(s). Click on a transaction ID to see a transaction’s details and status.

chat\_bubble

The **Transactions** tab is not displayed if the Experience Layer component is not active in your instance of Vault.

### [](#notes "Copy link to heading")Notes

The **Notes** tab displays notes associated with the customer and the customer’s account(s).

### [](#searching_for_customers "Copy link to heading")Searching for customers

You can search for a customer from the **Customers** screen using:

-   Customer ID
    
-   Identifiers
    
-   Customer details
    
-   Account
    

Select the corresponding tab and enter your search term.

The search results are displayed as you type. The search terms and search results are distinct between tabs. For example, a search performed on the **Customer details** tab has no impact on a search performed on the **Account** tab.

chat\_bubble

Only use one search term at a time. For example, only search with an *Account ID* or an *Account number* on the **Account** tab. However, this excludes the **Customer details** tab where any combination of search terms can be used.

*Filters*

-   Customer ID or External ID
    
-   Email identifier or Phone number identifier
    
-   Customer details: First name, Last name, Date of birth, and/or Contact email
    
-   Account ID (internal bank ID) or Account number
    

### [](#starting_processes_in_vault "Copy link to heading")Starting processes in Vault

1.  Go to **Customers** > {Customer name} > **Summary**.
    
2.  From **Start process**, select a process.
    
3.  Click **Start**.
    

A ticket with the name of the process is created. You or an employee with the permissions to manage the process can then find the created ticket on the **Processes** screen.

### [](#changing_customer_details_on_behalf_of_a_customer "Copy link to heading")Changing customer details on behalf of a customer

1.  Go to **Customers** > {Customer name} > **Summary**.
    
2.  From **Start process**, select **Change customer details on behalf of customer**.
    
3.  Click **Start**.
    

The ticket **Change details for (customer name)** is created. You or an employee with the permissions to manage the process can then find the created ticket on the **Processes** screen.

## [](#processes "Copy link to heading")Processes

The **Processes** screen displays a list of the processes which are currently underway in the bank. Clicking a **Process ID** reveals more information about its state and associated tasks.

### [](#filtering_the_processes_list "Copy link to heading")Filtering the Processes list

#### [](#customer_id "Copy link to heading")Customer ID

1.  To check what processes are currently active for a certain customer, click **Customer ID**.
    
2.  In the field **Customer ID**, enter the Customer ID.
    
3.  Click **Apply**.
    

#### [](#status "Copy link to heading")Status

To select a status, click **Status** and select **Running** or **Closed**.

#### [](#process_type "Copy link to heading")Process type

To select a specific process type, click **Process type** and select it from the dropdown menu.

### [](#process_details "Copy link to heading")Process details

To see the customer and process information, click the **Process ID** from the **Processes** page.

#### [](#process_details_page_overview "Copy link to heading")Process details page overview

This page displays the following information:

 
| Name | Description |
| --- | --- |
| 
Process description

 | 

The *Description* of the process and any *affected customers*.

 |
| 

Associated tasks

 | 

Lists any tasks associated with this process; click the link to view the task.

 |
| 

Process history

 | 

A historical record of the process' states and transitions.

 |
| 

Process actions

 | 

Any available actions that can be carried out on the process.

 |
| 

Process diagram

 | 

A diagram of the whole process showing the states and transitions.

 |
| 

Advanced details

 | 

Additional information about the process such as the *Workflow definition ID* and the applicable definition *Version*, any *Guarding policies* and any assigned *Group ID*.

 |

#### [](#process_history "Copy link to heading")Process history

The **Process history** panel shows the linear path that a process has followed to get to its current state.

##### [](#state_retryability "Copy link to heading")State retryability

While any process is running, the last state in the Process history list presents a button that allows that state’s transition to be [retried](/vault-core/5-9/EN/api/workflows_api#previousworkflowinstanceevent).

##### [](#technical_error_retryability "Copy link to heading")Technical Error retryability

For any running process in Technical Error, the last state in the Process history list will present a button that allows retrying the state transition for the state prior to entering the Technical Error state.

### [](#cancelling_a_process "Copy link to heading")Cancelling a process

If you want to cancel a running process:

1.  Locate the process in the **Processes** page, and click the **Process ID** to open the **Process details** page.
    
2.  Scroll to the **Process action** panel, select the **Cancel process** action and submit the form.
    

## [](#products "Copy link to heading")Products

On the **Product management** screen, you can inspect the code which defines a product by clicking the product name in the list of product versions within a product.

All products are defined as Smart Contracts. A Smart Contract is just code (in this case, Python) which gets called and run when the system requires. This means that Vault Core can incorporate any product that can be written as code.

### [](#product_management "Copy link to heading")Product management

 
| Term | Description |
| --- | --- |
| 
Name

 | 

The name of the internal product ID.

 |
| 

Creation time

 | 

The date and time when the product was created.

 |
| 

Tags

 | 

Customised tags.

 |
| 

Version

 | 

The product version number.

 |
| 

Current

 | 

Indicates whether this is the current version of the product with a tick or a cross.

 |

### [](#what_you_can_do "Copy link to heading")What you can do

-   View product information, parameters and versions.
    
-   Create new product versions.
    
-   Update the product parameters of a product version.
    
-   Add a (new) product.
    
-   Edit the global financial constants.
    

### [](#adding_products "Copy link to heading")Adding products

1.  Go to **Products > Product management**.
    
2.  Click **Add a product**.
    
3.  From the **Action** menu, select **Enter Product ID**.
    
4.  In the field **New product name (ID)**, enter the name of the product.
    
5.  Click **Enter Product ID**.
    

### [](#creating_a_new_product_version "Copy link to heading")Creating a new product version

1.  On the **Product management** screen, click a product.
    
2.  Click **Create new version**.
    
3.  From the **Action** menu, select **Update product**.
    
4.  From the **Update strategy** menu, select an update strategy:
    
    -   update product - applies to new customers only
        
    -   update product - asks existing customers to accept terms
        
    -   update product - auto migrates existing customers
        
    
5.  Click **Update product**.
    

### [](#updating_product_parameters "Copy link to heading")Updating product parameters

1.  On the **Product management** screen, click a product.
    
2.  Click the **Product versions** tab.
    
3.  Click a version.
    
4.  Click **edit parameters**.
    
5.  From the **Action** menu, select **Enter values for template parameters**.
    
6.  Enter the values for the template parameters, which can include:
    
    -   Gross Interest Rate
        
    -   Minimum Deposit Amount
        
    -   Maximum Daily Deposit Amount
        
    -   Minimum Withdrawal Amount
        
    -   Maximum Daily Withdrawal Amount
        
    -   Maximum Balance Amount
        
    
7.  Click **Enter values for template parameters**.
    

### [](#financial_constants "Copy link to heading")Financial constants

In the **Financial constants** screen, you can view and change the bank’s financial constants:

-   Denomination
    
-   Central Bank Yearly Interest Rate
    
-   ISA Allowance
    
-   ISA financial year start
    

#### [](#changing_the_financial_constants "Copy link to heading")Changing the financial constants

1.  Click **edit** in a financial constant.
    
2.  In the field **Value to change**, enter the value.
    
3.  In the field **Effective from**, enter the date. Set a specific time on that date, if necessary.
    
4.  Click **Save changes**.
    

## [](#ledgers "Copy link to heading")Ledgers

Vault uses two centralised and permissioned ledgers to record all activity which takes place. Ledgers are immutable, which means entries can’t be changed after they’ve been made. This is an important security feature which protects the integrity of the bank.

*Payments*: This displays all payments that have been processed by the system.

*Posting instruction batches*: This displays all postings that have been processed by the system.

*Audit logs*: This displays all incoming requests to any public Vault API.

### [](#payments "Copy link to heading")Payments

The **Payments** page displays all payments that have been processed by the system. It is constantly updated.

-   To see the details of a payment, click a scheme transaction ID.
    
-   To see older payments, use the page navigation at the foot of the screen.
    
-   Use filtering to find specific payments.
    

See also [Payments](/vault-core/5-9/EN/api/payments_hub_api#payment).

#### [](#filtering "Copy link to heading")Filtering

 
| Filter name | Description |
| --- | --- |
| 
Scheme Transaction ID

 | 

The scheme transaction ID of the payment.

 |
| 

Scheme

 | 

The payment scheme of the payment.

 |
| 

Direction

 | 

The direction of the payment, can be **Inbound** or **Outbound**.

 |

For example, to filter the payments to show only Inbound payments you would:

1.  click **Direction**.
    
2.  click **Inbound**.
    

#### [](#payment "Copy link to heading")Payment

 
| Field name | Description |
| --- | --- |
| 
Scheme transaction ID

 | 

An identifier for the payment within the payment scheme the payment belongs to.

 |
| 

Scheme

 | 

The intended payment scheme that the payment belongs to.

 |
| 

Valued at (UTC)

 | 

The timestamp indicating when the payment was created.

 |
| 

Direction

 | 

The direction of the payment, can be **Inbound**, **Outbound** or **Unknown**.

 |
| 

Amount

 | 

The payment amount.

 |
| 

Status

 | 

The current status of the payment, can be **Authorised**, **Awaiting authorisation**, **Awaiting hard settlement**, **Awaiting qualified acceptance**, **Awaiting release**, **Awaiting reversal**, **Awaiting settlement**, **Awaiting unapplied account settlement**, **Awaiting validation**, **Cancelled**, **Qualified acceptance**, **Received**, **Receiving member rejected**, **Rejected**, **Returned**, **Reversal requires review**, **Reversed**, **Settled**, **Submitted**, **Unapplied account settled** or **Unknown**.

 |

#### [](#payment_details "Copy link to heading")Payment: Details

 
| Field name | Description |
| --- | --- |
| 
Payment ID

 | 

The UUID of the payment inside Payments Hub (located at the very top of the page, under \`Payment details for').

 |
| 

Scheme

 | 

The intended payment scheme that the payment belongs to.

 |
| 

Amount

 | 

The payment amount.

 |
| 

Direction

 | 

The payment direction, can be **Inbound**, **Outbound** or **Unknown**.

 |
| 

Reference

 | 

Reference information associated with the payment that will be passed to the beneficiary.

 |
| 

Payment type

 | 

The payment type, can be **Immediate payment**, **Return**, **Scheme return payment**, **Standing order payment** or **Unknown**.

 |
| 

Payment channel

 | 

The payment channel, can be **Branch**, **Internet**, **Phone** or **Unknown**.

 |

#### [](#payment_parties_debitorcreditor "Copy link to heading")Payment: Parties - Debitor/Creditor

 
| Field name | Description |
| --- | --- |
| 
Debitor name

 | 

The customer name associated with the party.

 |
| 

Account number

 | 

The account number.

 |
| 

Bank ID code

 | 

The Bank ID code.

 |
| 

Bank ID

 | 

The ID of the bank branch the account is held in.

 |
| 

Account ID

 | 

The debitor/creditor’s Vault Core account ID. Click the debitor account ID to go to the customer’s details (you can select a customer if it is a joint account).

 |

#### [](#payment_status "Copy link to heading")Payment: Status

 
| Field name | Description |
| --- | --- |
| 
Current status

 | 

The current status of the payment, can be **Authorised**, **Awaiting authorisation**, **Awaiting hard settlement**, **Awaiting qualified acceptance**, **Awaiting release**, **Awaiting reversal**, **Awaiting settlement**, **Awaiting unapplied account settlement**, **Awaiting validation**, **Cancelled**, **Qualified acceptance**, **Received**, **Receiving member rejected**, **Rejected**, **Returned**, **Reversal requires review**, **Reversed**, **Settled**, **Submitted**, **Unapplied account settled** or **Unknown**.

 |
| 

Valued at (UTC)

 | 

The timestamp indicating when the payment was created.

 |
| 

Status reason

 | 

The current status reason of the payment, can be **Accepted**, **Accept with qualification**, **Account closed**, **Account not present**, **Insufficient funds**, **Invalid amount**, **Invalid creditor party**, **Invalid currency**, **Invalid debitor party**, **Next calendar day**, **Next day PSD**, **Next working day**, **Outbound transaction limit breach**, **Payment originated overseas**, **Rejected by receiver**, **Request timed out**, **Restrictions prevent**, **Same day**, **Scheme transaction limit breach**, **Scheme validation failed**, **Terms and conditions**, **Unknown** or **Unsupported currency**.

 |
| 

External code

 | 

The code generated by an external source that explains why the payment has entered the status it is in.

 |
| 

Settlement at (UTC)

 | 

The date that the payment was or will be settled.

 |
| 

Settlement cycle ID

 | 

Indicates the settlement cycle the payment was or will be settled in.

 |

#### [](#posting_instruction_batches "Copy link to heading")Posting instruction batches

 
| Field name | Description |
| --- | --- |
| 
Posting instruction batch ID

 | 

The Vault-generated ID of the posting instruction batch.

 |
| 

Instructions

 | 

The posting instruction, which combines a **Type** and **Amount**.

 |
| 

Client batch ID

 | 

The client-generated ID of the posting instruction batch.

 |
| 

Value Timestamp

 | 

Effective timestamp of the posting instruction batch.

 |
| 

Insertion Timestamp

 | 

Timestamp specifying when this posting instruction batch was inserted into Vault.

 |
| 

Status

 | 

The status a posting instruction batch can be in. These are:\*Accepted\*, **Rejected**, **Unknown**

 |

#### [](#payment_exception "Copy link to heading")Payment: Exception

This is displayed if:

-   The payment was subsequently returned by another payment
    
-   The payment is a return of a previously processed payment
    
-   Funds were redirected to an account that is different from the specified creditor’s account
    
-   Funds were debited from an account that is different from the specified debitor’s account
    

 
| Field name | Description |
| --- | --- |
| 
Exception type

 | 

This is either the **Returned by payment ID** if set, or payment type if its value is **Return payment**.

 |
| 

Returned by payment ID

 | 

The ID of the original payment that created the returned payment. Not shown if not set. Click the ID to go to the returned by payment’s details.

 |
| 

Return reason

 | 

This text describes why a payment has been returned. Only shown if **returned by payment ID** is **not** set.

 |
| 

Return payment ID

 | 

The ID of the payment that is to be returned. Only shown if **returned by payment ID** is **not** set. Click the ID to go to the return payment’s details.

 |
| 

Redirected credit to internal account

 | 

**Redirected credit internal account ID**. With **Internal account view** permission, this is a link you can click to view Internal account details.

 |
| 

Internal account debited

 | 

**Debit internal account ID**.With **Internal account view** permission, this is a link you can click to view Internal account details.

 |

#### [](#payment_advanced "Copy link to heading")Payment: Advanced

 
| Field name | Description |
| --- | --- |
| 
Payment ID

 | 

The UUID of the payment inside Payments Hub.

 |
| 

Create request ID

 | 

The ID of the request that originally generated the payment.

 |
| 

Update timestamp

 | 

The timestamp indicating when the last change to the payment’s current status occurred.

 |
| 

Processing priority

 | 

The processing priority of the payment, can be **High**, **Normal** or **Unknown**.

 |
| 

Execution plan

 | 

The intended execution plan determined by the payment’s scheme, can be **FPS\_STANDARD\_V1**, **FPS\_CLEARED\_V1** or **ONUS\_DEFAULT\_V1**.

 |
| 

Target status

 | 

The target status, can be **Authorised**, **Awaiting authorisation**, **Awaiting hard settlement**, **Awaiting qualified acceptance**, **Awaiting release**, **Awaiting reversal**, **Awaiting settlement**, **Awaiting unapplied account settlement**, **Awaiting validation**, **Cancelled**, **Qualified acceptance**, **Received**, **Receiving member rejected**, **Rejected**, **Returned**, **Reversal requires review**, **Reversed**, **Settled**, **Submitted**, **Unapplied account settled** or **Unknown**.The target status' details (**Reason** and **External code**) are also provided, if set. The target status reason of the payment can be **Accepted**, **Accept with qualification**, **Account closed**, **Account not present**, **Insufficient funds**, **Invalid amount**, **Invalid creditor party**, **Invalid currency**, **Invalid debitor party**, **Next calendar day**, **Next day PSD**, **Next working day**, **Outbound transaction limit breach**, **Payment originated overseas**, **Rejected by receiver**, **Request timed out**, **Restrictions prevent**, **Same day**, **Scheme transaction limit breach**, **Scheme validation failed**, **Terms and conditions**, **Unknown** or **Unsupported currency**.

 |
| 

Returned by payment ID

 | 

The ID of the original payment that created the returned payment. Click the ID to go to the original payment’s details.

 |
| 

Payment metadata

 | 

Metadata related to the payment. Not all payments contain metadata so this field may not be present.

 |

### [](#posting_instruction_batches_2 "Copy link to heading")Posting instruction batches

The **Posting instruction batches** page displays all postings that the system has processed. It is constantly updated.

-   To see the details of a posting, click a posting entry.
    
-   To see older postings, use the page navigation at the foot of the screen.
    
-   Use filtering to find specific postings.
    

See also [Posting instruction batches](/vault-core/5-9/EN/api/core_api#posting_instruction_batches).

#### [](#filtering_2 "Copy link to heading")Filtering

 
| Filter name | Description |
| --- | --- |
| 
Account ID

 | 

The Vault account ID. You can provide multiple IDs, separated by a comma (no spaces).

 |
| 

Client Batch ID

 | 

The client-generated ID of the posting instruction batch. You can provide multiple IDs, separated by a comma (no spaces).

 |

For example, to filter the postings for a given account ID, you would:

1.  click **Account ID**.
    
2.  enter an **Account ID** in the **search** field.
    
3.  click **Apply**.
    

#### [](#posting_instruction_batch "Copy link to heading")Posting instruction batch

 
| Field name | Description |
| --- | --- |
| 
Posting instruction batch ID

 | 

The Vault-generated ID of the posting instruction batch.

 |
| 

Instructions

 | 

The posting instruction, which combines a **Type** and **Amount**.

 |
| 

Client batch ID

 | 

The client-generated ID of the posting instruction batch.

 |
| 

Value Timestamp

 | 

Effective timestamp of the posting instruction batch.

 |
| 

Insertion Timestamp

 | 

Timestamp specifying when this posting instruction batch was inserted into Vault.

 |
| 

Status

 | 

The status a posting instruction batch can be in. These are:\*Accepted\*, **Rejected**, **Unknown**

 |

#### [](#posting_instruction_batch_details "Copy link to heading")Posting instruction batch: Details

 
| Field name | Description |
| --- | --- |
| 
ID

 | 

The Vault-generated ID of the posting instruction batch.

 |
| 

Create request ID

 | 

An ID assigned by the request of the posting instruction batch.

 |
| 

Client ID

 | 

The ID of the client.

 |
| 

Client batch ID

 | 

The ID of the client batch.

 |
| 

Status

 | 

The status a posting can be in. These are:\*Accepted\*, **Rejected**, **Unknown**

 |
| 

Value Timestamp

 | 

Effective timestamp of the posting instruction batch.

 |
| 

Insertion Timestamp

 | 

Timestamp specifying when this posting instruction batch was inserted into Vault.

 |

#### [](#posting_instruction_batch_instructions "Copy link to heading")Posting instruction batch: Instructions

 
| Field name | Description |
| --- | --- |
| 
ID

 | 

The Vault-generated ID of the posting instruction batch.

 |
| 

Create transaction ID

 | 

An ID to represent the full transaction assigned by the client.

 |
| 

Type

 | 

The posting instruction type.

 |
| 

Amount

 | 

The posting instruction amount.

 |

#### [](#posting_instruction_batch_posting_instruction "Copy link to heading")Posting instruction batch: Posting instruction

 
| Field name | Description |
| --- | --- |
| 
Batch ID

 | 

The Vault-generated ID of the posting instruction batch.

 |
| 

Type

 | 

The posting instruction type, such as **Transfer**.

 |
| 

Committed postings

 | 

Any postings that may have been committed to the ledger as part of an accepted posting instruction batch.

 |
| 

Additional details

 | 

This displays any non-first-class properties (non-structured data added to the posting). These could be different for each posting.

 |
| 

Violations

 | 

Any violations associated with the posting.

 |

### [](#ledger_balances "Copy link to heading")Ledger balances

The Ledger Balances page is used for viewing the historical balances of accounts within Vault Core.

#### [](#understanding_ledger_balances "Copy link to heading")Understanding Ledger Balances

Ledger Balances differ to the balances displayed elsewhere in the Operations Dashboard because they are retrieved based on the time the associated posting instruction batch was added to Vault Core, rather than the time the posting instruction batch was supposed to take effect. You can use the Ledger Balance page to retrieve the balance of an account at any point in the lifetime of that account with the exception that the latest balance that can be retrieved is often dated several minutes before the current time.

These properties make them more appropriate for use in end of cycle accounting, reconciliation, and financial reporting.

For more information on how Ledger Balances work, see the [Balances](/vault-core/5-9/EN/reference/balances/) documentation.

#### [](#permissions "Copy link to heading")Permissions

You require the **Ledger Balance View** permission to use this page.

#### [](#how_to_search_for_ledger_balances "Copy link to heading")How to search for Ledger Balances

To retrieve Ledger Balances you need to provide:

-   An identifier of the account
    
-   The time and date you want to retrieve the account’s balance for; this must be in the past
    

##### [](#account_identifiers "Copy link to heading")Account identifiers

You can search for an account’s Ledger Balance using the:

-   Vault account ID; or
    
-   Account number and sort code; or
    
-   IBAN
    

 
| Identifier type | Description |
| --- | --- |
| 
Vault account ID

 | 

The account identifier as used by Vault

 |
| 

Account number and sort code

 | 

UK specific and requires the [Payments Hub](/vault-core/5-9/EN/reference/payments_hub/)

 |
| 

IBAN

 | 

Requires the [Payments Hub](/vault-core/5-9/EN/reference/payments_hub/)

 |

##### [](#vault_core_account_id "Copy link to heading")Vault Core account ID

This is always available and is simply the ID Vault uses to identify the account.

##### [](#account_number_and_sort_code "Copy link to heading")Account number and sort code

These require the Payment Hub pluggable component and are specific to UK bank accounts.

##### [](#iban "Copy link to heading")IBAN

This requires the Payment Hub pluggable component.

##### [](#time_and_date "Copy link to heading")Time and date

You can choose a time and date as part of your search by choosing **Specify date**. If you do not specify a date, it defaults to 10 minutes before the current time, to account for the delay in calculation.

error

If the Ledger Balance has not been calculated for the time selected, you need to wait before searching again. The latest balance that can be retrieved is usually only a few minutes behind the current time.

#### [](#understanding_the_search_results "Copy link to heading")Understanding the search results

Once successfully retrieved, the Ledger Balances are organised by their addresses. If using the default address, this is listed with no name. Any custom addresses are labelled by the name of the address.

Each address is further divided into amounts for all combinations of *phase*, *asset* and *denomination* valid for that account.

For more information on what these parameters mean, see the [balance coordinates](/vault-core/5-9/EN/reference/balances#balances_and_the_accounting_model) documentation.

## [](#organisation_history "Copy link to heading")Organisation history

On the **Organisation history** page, you can check Audit Logs and Action Logs.

chat\_bubble

You can only access Audit and Action Log data if your permissions allow you to do so. For more information, see [Operations Dashboard permissions](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#permissions_2).

### [](#about_audit_and_action_logs "Copy link to heading")About Audit and Action Logs

#### [](#overview_2 "Copy link to heading")Overview

In Vault:

-   Audit Logs record all requests or responses made to [Vault Core’s APIs](/vault-core/5-9/EN/api/)
    
-   Action Logs record any changes made as a result of those requests or responses
    

chat\_bubble

Audit Logs are retained for a specified amount of time, while Action Logs are kept indefinitely.

#### [](#what_are_audit_and_action_logs_used_for "Copy link to heading")What are Audit and Action Logs used for?

 
| You use… | To view… |
| --- | --- |
| 
Audit Logs

 | 

Any API requests and responses. Data returned as a result of these requests and responses.

 |
| 

Action Logs

 | 

The actions performed on entities within Vault such as accounts or payments. The individual information changed by an action.

 |

chat\_bubble

As Audit Logs are processed in the background, if there is a fault with the network or respective service, the automated recovery process may not persist in flight audit data.

#### [](#accessing_audit_and_action_log_data "Copy link to heading")Accessing Audit and Action Log data

You can search for and view data contained in Audit and Action Logs using the:

-   Operations Dashboard
    
-   [Audit API](/vault-core/5-9/EN/api/audit_api)
    

chat\_bubble

You can only access Audit and Action Log data if your permissions allow you to do so. For more information, see [Operations Dashboard permissions](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#permissions_2).

### [](#action_logs "Copy link to heading")Action Logs

#### [](#filtering_overview "Copy link to heading")Filtering overview

A large amount of data is recorded in each Action Log. You can filter on different fields to view specific data.

chat\_bubble

See [Using Action and Audit Logs](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#using_action_and_audit_logs) for a step-by-step guide to performing common tasks using Action Logs.

#### [](#filtering_an_action_log "Copy link to heading")Filtering an Action Log

1.  In the Operations Dashboard, select **Organisation history** > **Action logs**.
    
2.  Use the Filters to reduce the visible results as required.
    
3.  Click **Apply**.
    
    chat\_bubble
    
    You can enter information in more than one field; results for all fields filtered on will display.
    

#### [](#filter_field_descriptions "Copy link to heading")Filter field descriptions

  
| Field | Description | More information |
| --- | --- | --- |
| 
Date range

 | 

The range of dates you want to filter on.

 | 

You can filter for all data within a specific range of dates. Leaving:

-   The From field empty returns all data up to the date in the To field
    
-   The To field empty returns all data before the date in the To field
    
-   Both the From and To fields empty returns all data
    





 |
| 

Category

 | 

The Category options you can filter on.

 |  |
| 

Action group ID

 | 

The ID of a group of actions.

 | 

An optional field used to group Action Logs related to a specific Workflow or Smart Contract, for example.

 |
| 

Employee IDs

 | 

A unique identifier for a bank employee.

 | 

-   This is an optional field set by providing the On-Behalf-Of-Employee-ID header/meta data in the API call that creates the Action Log. For more information, see the [Audit API](/vault-core/5-9/EN/api/audit_api).
    
-   The Operations Dashboard provides this value to requests made from the application. Note that this does not include Workflows instantiated from the Operations Dashboard; Workflow Definitions can however be passed the On-Behalf-Of-Employee-ID header.
    





 |
| 

Customer IDs

 | 

A unique identifier for a customer who performed an action.

 | 

-   This is an optional field set by providing the On-Behalf-Of-Customer-ID header/meta data in the API call that creates the Action Log. For more information see the [Audit API](/vault-core/5-9/EN/api/audit_api).
    
-   Find a Customer ID by searching in the [Customers screen](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#customers).
    





 |

#### [](#describing_the_category_options "Copy link to heading")Describing the Category options

 
| Category | Select this to filter on: |
| --- | --- |
| 
Account

 | 

The ID of a [customer account](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#customers).

 |
| 

Account migration

 | 

For more information, see [Account migration](/vault-core/5-9/EN/api/core_api#accountmigration).

 |
| 

Account update

 | 

For more information, see [Account update](/vault-core/5-9/EN/api/core_api#accountupdate).

 |
| 

Customer

 | 

The ID of a customer.

 |
| 

Customer address

 | 

The ID of a customer address.

 |
| 

EISCD report descriptor

 | 

For more information, see [EISCD report descriptor](/vault-core/5-9/EN/reference/payments_hub/working-with-the-payments-hub/region-uk#getting_started_with_the_uk_endpoints).

 |
| 

Flag

 | 

The ID of a flag. A flag is a marker that can be placed on a customer, account, or payment device.

 |
| 

Flag definition

 | 

The ID of a flag definition. A flag is based on a flag definition; the flag definition defines the characteristics of the flag.

 |
| 

Global parameter

 | 

The ID of a global parameter. This is a parameter that is used in many different places; a global parameter could be, for example, an interest rate which is used throughout the bank but whose value can be changed when necessary.

 |
| 

Global parameter value

 | 

The value of a global parameter.

 |
| 

Internal account

 | 

For more information, see [Internal accounts](/vault-core/5-9/EN/api/core_api#internal_accounts).

 |
| 

Modulus check weight table descriptor

 | 

For more information, see [Modulus check weight table descriptor](/vault-core/5-9/EN/reference/payments_hub/working-with-the-payments-hub/region-uk#prerequisites).

 |
| 

Payee

 | 

The ID of a person making a payment.

 |
| 

Payment

 | 

The ID of a payment. For more information, see [Payments](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#payments).

 |
| 

Payment device link

 | 

The ID that associates a customer account with a payment device.

 |
| 

Payment submission

 | 

For more information, see [Payments](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#payments).

 |
| 

Policy

 | 

The ID of a policy. A policy specifies the actions users can perform on a ticket or Workflow.

 |
| 

Posting

 | 

The ID of a credit or debit on a customer account in Vault.

 |
| 

Posting instruction batch async

 | 

The ID of a posting instruction batch that is automatically generated in Vault. For more information, see [Posting instruction batches](/vault-core/5-9/EN/reference/postings#posting_instruction_batch).

 |
| 

Product

 | 

The ID of a product. A product specifies how a customer account behaves and any rules associated with it and is created from a product version. For more information, see [Products](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#products).

 |
| 

Product version

 | 

The ID of a product version.

 |
| 

Restriction definition

 | 

The ID of a restriction definition. A restriction definition defines the restrictions used, for example, for AML or payment scheme compliance or security alerts.

 |
| 

Restriction set

 | 

The ID of a restriction set. A restriction set is created based on a restriction set definition.

 |
| 

Restriction set definition

 | 

The ID of a restriction set definition. A restriction set is created from a restriction set definition.

 |
| 

Service account

 | 

For more information, see: Editing access rights for service accounts ([Service accounts](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#service_accounts_2))

 |
| 

Ticket

 | 

For more information, see [Tickets](/vault-core/5-9/EN/api/workflows_api#tickets).

 |
| 

Transaction

 | 

The ID that associates a customer account with a payment device.

 |
| 

UK Bank account number

 | 

For more information, see [UK bank account number](/vault-core/5-9/EN/reference/payments_hub/working-with-the-payments-hub/region-uk/).

 |
| 

Unknown

 | 

\-

 |
| 

Unsolicited message

 | 

\-

 |
| 

Workflow definition

 | 

For more information, see [Workflows](/vault-core/5-9/EN/reference/workflows-tickets/introduction-to-workflows#overview).

 |

#### [](#understanding_the_results_returned "Copy link to heading")Understanding the results returned

  
| Field | Description | More information |
| --- | --- | --- |
| 
Action log ID

 | 

A unique identifier associated with an Action Log.

 | 

An automatically-generated, alphanumeric value. Click this to see all information relating to a specific Action Log.

 |
| 

Created at (UTC)

 | 

The date and time the action was first captured.

 | 

Automatically generated, with a format of yyyy-mm-dd hh:mm:ss

 |
| 

Type

 | 

The type of action performed.

 | 

Possible values are:CreateUpdateDelete

 |
| 

Action by

 | 

If:

-   The On-Behalf-Of-Employee-ID or the On-Behalf-Of-Customer-ID headers were set, this displays one or both of the Employee ID or Customer ID values. For more information, see the [Audit API](/vault-core/5-9/EN/api/audit_api).
    
-   Neither value is found, this displays "Not set".
    





 | 

**Customer ID:** A unique identifier for a customer who performed an action. View information about the Customer by searching on the Customer ID in the [Customers screen](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#Customers). Returns no value if the customer ID was not provided

**Employee ID:** A unique identifier for a bank employee. Returns no value if the employee ID was not provided.

 |
| 

Category

 | 

Displays the category the Action Log is related to.

 | 

Includes the category or categories selected in the Filters search box and the unique identifier for that entry in the Action Log.

 |
| 

Action group ID

 | 

The ID of a group of actions.

 | 

This is an optional field and is used so all actions related to a specific Workflow or Smart Contract, for example, can be grouped together.

 |
| 

Data changed

 | 

Summarises the changes for a specific Action Log.

 | 

If there are:

-   Two or fewer changes, these are written in full
    
-   More than two changes, click the link given to view this information.
    

Clicking the link automatically navigates you to the same page as clicking the **Action Log ID** link.





 |

### [](#audit_logs_2 "Copy link to heading")Audit Logs

#### [](#filtering_overview_2 "Copy link to heading")Filtering overview

A large amount of data is recorded in each Audit Log. You can filter on different fields to view specific data.

chat\_bubble

See [Using Action and Audit Logs](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#using_action_and_audit_logs) for a step-by-step guide to performing common tasks using Audit Logs.

#### [](#filtering_an_audit_log "Copy link to heading")Filtering an Audit Log

1.  In the Operations Dashboard, select **Organisation history** > **Audit logs**.
    
2.  Use the Filters to reduce the visible results as required.
    
3.  Click **Apply**.
    
    chat\_bubble
    
    You can enter information in more than one field; results for all fields filtered on will display.
    

#### [](#filter_field_descriptions_2 "Copy link to heading")Filter field descriptions

  
| Field | Description | More information |
| --- | --- | --- |
| 
Endpoint names

 | 

The name of the REST endpoint.

 | 

Filter with the method (GET, POST, DELETE) preceding the endpoint, for example GET:/v1/customer-addresses.

 |
| 

Employee IDs

 | 

A unique identifier for a bank employee

 | 

-   This is an optional field set by providing the On-Behalf-Of-Employee-ID header/meta data in the API call that creates the Action Log. For more information, see the [Audit API](/vault-core/5-9/EN/api/audit_api).
    
-   The Operations Dashboard provides this value to requests made from the application. Note that this does not include workflows instantiated from the Operations Dashboard; Workflow Definitions can however be passed the On-Behalf-Of-Employee-ID header.
    





 |
| 

Customer IDs

 | 

A unique identifier for a customer who performed an action.

 | 

-   This is an optional field set by providing the On-Behalf-Of-Customer-ID header/meta data in the API call that creates the Action Log. For more information see the [Audit API](/vault-core/5-9/EN/api/audit_api).
    
-   Find a Customer ID by searching in the [Customers screen](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#customers).
    





 |
| 

API types

 | 

The API the request was made to. You can filter on multiple APIs by selecting multiple options from the dropdown.

 | 

See the [API documentation](/vault-core/5-9/EN/api/).

 |

#### [](#understanding_the_results_returned_2 "Copy link to heading")Understanding the results returned

  
| Field | Description | More information |
| --- | --- | --- |
| 
Timestamp

 | 

The date and time the request was made.

 | 

Click the **Timestamp** link to view the request and response information. This is given in RFC 3339 format and includes the year, month, day and time.

 |
| 

Action by

 | 

If:

-   The On-Behalf-Of-Employee-ID or the On-Behalf-Of-Customer-ID headers were set, this displays one or both of the Employee ID or Customer ID values. For more information, see the [Audit API](/vault-core/5-9/EN/api/audit_api).
    
-   Neither value is found, this displays **Not set**.
    





 | 

**Customer ID:** A unique identifier for a customer who performed an action. View information about the Customer by searching on the Customer ID in the [Customers screen](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#customers). Returns no value if the customer ID was not provided

**Employee ID:** A unique identifier for a bank employee. Returns no value if the employee ID was not provided.

 |
| 

API

 | 

The API the request was made to.

 | 

See the [API documentation](/vault-core/5-9/EN/api/).

 |
| 

Endpoint

 | 

The endpoint the request was sent to.

 | 

See the [API documentation](/vault-core/5-9/EN/api/).

 |
| 

Response

 | 

Displays the response status of the request as:

Success; or

Failure; or

Unknown or

Undetermined

 |  |

#### [](#viewing_the_request_and_response_information "Copy link to heading")Viewing the request and response information

In the returned results, click the **Timestamp** link to view the request and response information.

#### [](#understanding_the_request_and_response_information "Copy link to heading")Understanding the request and response information

  
| Field | Description | Values |
| --- | --- | --- |
| 
Request endpoint

 | 

The endpoint the request was sent to.

 | 

See the [API documentation](/vault-core/5-9/EN/api/).

 |
| 

Request variables

 | 

Any variables that were sent with the request.

 | 

Dependent on the request.

 |
| 

Response status

 | 

Indicates whether the response succeeded or failed.

 | 

Success

Failure

Unknown

Undetermined

 |
| 

Response

 | 

The response returned from the request made in JSON format.

 | 

Dependent on the request.

 |
| 

Employee ID

 | 

The ID of the employee.

 | 

A unique identifier for a bank employee.This is an optional field set by providing the On-Behalf-Of-Customer-ID header/meta data in the API call that creates the Action Log. For more information see the [Audit API](/vault-core/5-9/EN/api/audit_api).

 |

### [](#using_action_and_audit_logs "Copy link to heading")Using Action and Audit Logs

#### [](#viewing_all_requests_performed_by_a_specific_employee "Copy link to heading")Viewing all requests performed by a specific employee

1.  In the Operations Dashboard, select **Organisation history** > **Audit logs**.
    
2.  In the Employee IDs field, enter the:
    
    -   Employee ID of the employee whose requests you want to view; and
        
    -   Service account ID if the employee may have accessed Vault Core via a third-party tool such as Postman - see Editing access rights for service accounts in [Service accounts](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#service_accounts_2)
        
    
3.  All requests for that employee are returned. You can add additional filters at this point using the appropriate [filter fields](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#audit_logs).
    
4.  Click the **Timestamp** link to view the request and response information for each [individual request](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#audit_logs) made by the employee.
    

#### [](#viewing_changes_made_to_a_customers_information "Copy link to heading")Viewing changes made to a customer’s information

1.  If you:
    
    -   Do not know the Customer ID, go to *step 2*
        
    -   Know the Customer ID, go to *step 6*
        
    
2.  In the Operations Dashboard, select **Customers**.
    
3.  Search for the customer using the identifier information you have. All customers matching you identifier information display. For example, select the:
    
    -   **Identifiers** tab and enter an email address or phone number; or
        
    -   **Customer details** tab and enter a name, date or birth or email address; or
        
    -   **Account** tab and enter an Account ID or Account number
        
    
4.  Click the **customer name** link to go to the customer record.
    
5.  Select the **About** tab in the customer record and copy the Customer ID.
    
6.  Select **Organisation History** > **Action logs**.
    
7.  In the Category dropdown list, select **Customer** and click **Apply**.
    
8.  In the Customer ID field, paste the Customer ID and click **Apply**.You can also use the Date range and/or Action group ID fields to refine your results.
    
9.  Click the **Action Log ID** or the **changes** link in the Data change column to view the changes made for the customer.
    

#### [](#viewing_all_payments_in_a_specific_time_period "Copy link to heading")Viewing all payments in a specific time period

1.  In the Operations Dashboard, select **Organisation History** > **Action logs**.
    
2.  In the Date range field, select the time period you want to view payment information for and click **Apply**.
    
    Leave: \* The From field empty to return all data up to the date in the To field \* The To field empty to return all data after the date in the From field \* Both the From and To fields empty to return all data
    
3.  In the Category dropdown list, select **Payment** and click **Apply**. All payments made in that date range display.
    
    chat\_bubble
    
    You can also use the Date range and/or Action group ID fields to refine your results.
    
4.  Click the:
    
    -   **Action log ID** link for an overview of each payment
        
    -   **Payment ID** link to view specific information about each payment, including the payment parties, status and payment scheme
        
    -   **Action group ID** (optional) to view information about all payments related to a specific Workflow or Smart Contract, for example
        
    

#### [](#viewing_all_actions_performed_on_a_specific_bank_account "Copy link to heading")Viewing all actions performed on a specific bank account

1.  If you:
    
    -   Do not know the Account ID, go to *step 2*
        
    -   Know the Account ID, go to *step 7*
        
    
2.  In the Operations Dashboard, select **Customers**.
    
3.  Search for the customer using the identifier information you have. All customers matching you identifier information display. For example, select the:
    
    -   **Identifiers** tab and enter an email address or phone number; or
        
    -   **Customer details** tab and enter a name, date or birth or email address; or
        
    -   Click the **customer name** link to go to the customer record
        
    
4.  Select the **Accounts** tab in the customer record and click the **Account name** link.
    
5.  Copy the Account ID.
    
6.  Select **Organisation history** > **Action logs**.
    
7.  In the **Category** dropdown list, select Account and click **Apply**.
    
8.  In the Account ID field, paste the Account ID and click **Apply**.
    
    chat\_bubble
    
    You can also use the Date range and/or Action group ID fields to refine your results.
    
9.  Click the **Action Log ID** or the **changes** link in the Data change column to view the changes made to that bank account.
    

## [](#organisation_admin "Copy link to heading")Organisation admin

On the **Organisation admin** pages you can:

-   Create flag definitions
    
-   Add roles
    
-   Manage permissions, including for the tiers of permissions, common actions, customers, tasks, processes, internal accounts, products, product app, ledgers, organisation history, organisation admin, Workflows, and UI inputs
    
-   Create restrictions sets
    
-   Create and manage service accounts, including refreshing tokens for a service account or a default service account
    

### [](#flag_definitions "Copy link to heading")Flag definitions

Flag definitions are used to create and apply Flags at customer, account or payment device level. Flags store additional information which can be applied to multiple customers, accounts or payment devices.

#### [](#viewing_flag_definitions "Copy link to heading")Viewing Flag definitions

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Flag definitions**.
    
2.  To view only **Customer**, **Account** or **Payment device** level Flag definitions, select the applicable level from the **Flag categories** filter.
    
3.  To include inactive Flags, select **Include inactive** from the **Status** filter.
    

#### [](#creating_flag_definitions "Copy link to heading")Creating Flag definitions

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Flag definitions**.
    
2.  Click the **Actions** dropdown at the top-right of the page.
    
3.  Select **Create a flag** to display the **Create a new flag definition** screen.
    
4.  Enter a unique **Name**.
    
5.  Enter a **Description**. This is displayed on the **Flag definitions** screen.
    
6.  Select the **Level** that the Flag definition applies to.
    
7.  Select the **Visibility** level:
    
    -   **Operator** level Flag definitions are only visible to users with relevant access rights; for more information, see [The Core API Flags section](/vault-core/5-9/EN/api/core_api#flags)
        
    -   **Contract** level Flag definitions will be visible to all users
        
    
8.  Click **Create flag definition** to create the new definition.
    

#### [](#setting_flag_definitions_to_inactive "Copy link to heading")Setting Flag definitions to inactive

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Flag definitions**.
    
2.  Click the button in the **Actions** column for the required Flag and select **Set to inactive**.
    

#### [](#starting_a_process "Copy link to heading")Starting a process

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Flag definitions**.
    
2.  Click the **Actions** dropdown at the top-right of the page.
    
3.  Select **Start a process** to display the **Select a process to start** window, listing the available processes.
    
4.  Click the required **Process** to start it.
    

### [](#roles "Copy link to heading")Roles

Roles are groups of one or more permissions. They are used to control access to areas of the Operations Dashboard, or to Vault resources.

#### [](#creating_a_role "Copy link to heading")Creating a role

chat\_bubble

To create roles, you need the following permissions:

-   `ACTION_VAULT_OBJECT_TYPE_ROLE_VIEW` (**View** Role)
    
-   `ACTION_VAULT_OBJECT_TYPE_ROLE_CREATE` (**Create** Role)
    

1.  In the Operations Dashboard, navigate to the **Organisation admin** > **Roles** page.
    
2.  Click the **Actions** button and select **Create role**.
    
3.  Enter a **Name**, **Description** and, optionally, a unique **Role ID**.
    
4.  Enter an **External reference ID** with no spaces. This is used to map a role to an external system.
    
5.  Select the checkboxes of any **base permissions** and **custom permissions** you want to assign to the role.
    
6.  When you have completed your selection, click **Add** to create the role.
    

#### [](#updating_a_roles_permissions "Copy link to heading")Updating a role’s permissions

chat\_bubble

To update roles, you need the following permissions:

-   `ACTION_VAULT_OBJECT_TYPE_ROLE_VIEW` (**View** Role)
    
-   `ACTION_VAULT_OBJECT_TYPE_ROLE_EDIT` (**Edit** Role)
    

1.  In the Operations Dashboard, navigate to the **Organisation admin** > **Roles** page.
    
2.  Click the role you want to edit.
    
3.  Click the **Edit role** button.
    
4.  If required, update the **Name** and **Description** of the role.
    
5.  Enter or edit the **External reference ID** with no spaces. This is used to map a role to an external system.
    
6.  Select the checkboxes of any **base permissions** and **custom permissions** you want to assign to the role.
    
7.  When you have completed your selection, click **Save** to update the permissions assigned to the role.
    

### [](#permissions_2 "Copy link to heading")Permissions

Here, you can learn about the use of permissions in the Operations Dashboard, including:

-   [Tiers of permissions](#tiers_of_permissions)
    
-   [Common actions](#common_actions)
    
-   [Customers](#customers)
    
-   [Tasks](#tasks)
    
-   [Processes](#processes)
    
-   [Internal accounts](#internal_accounts)
    
-   [Products](#products)
    
-   [Product app](#product_app)
    
-   [Ledgers](#ledgers)
    
-   [Organisation history](#organisation_history)
    
-   [Organisation admin](#organisation_admin)
    
-   [Workflows](#workflows)
    
-   [UI inputs](#ui_inputs)
    

#### [](#tiers_of_permissions "Copy link to heading")Tiers of permissions

  
| Permission type | Description | Managed in |
| --- | --- | --- |
| 
Service accounts

 | 

Used to generate API access tokens to enable services to directly access our APIs. For more information, see [Service accounts](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#accounts)

 | 

**Organisation admin** > **Service accounts**

 |
| 

Base permissions (called "Vault permissions" in the [Access Control API](/vault-core/5-9/EN/api/access_control_api/))

 | 

Controls a user’s access to various areas within the Operations Dashboard, or within the Product App.Permissions are assigned to roles and a role is allocated to one or more users.Base permissions are covered in the sections below, grouped by each menu item in the Operations Dashboard.

 | 

**Organisation admin** > **Roles**

 |
| 

Custom permissions (called "Data permissions" in the [Access Control API](/vault-core/5-9/EN/api/access_control_api/))

 | 

Can be referenced in policies to enable fine-grained access control to individual tasks and processes.For more information, see [Policies](/vault-core/5-9/EN/reference/policies/legacy-policies/).

 | 

**Organisation admin** > **Permissions**

 |

##### [](#creating_custom_permissions "Copy link to heading")Creating custom permissions

You can create custom permissions in the **Permissions** section of the Operations Dashboard:

1.  Enter a unique **Permission ID**. This is used by policies to control access to Workflows, Tickets or Audit Logs.
    
2.  Enter a **Display name** and **Description**. These are then displayed in the Operations Dashboard.
    
3.  Click **Create** to create the custom permission.
    

##### [](#base_permissions_for_starting_processes "Copy link to heading")Base permissions for starting processes

You can start a process in several areas of the Operations Dashboard. You must have the following base permissions to do so:

-   `ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (**View** Workflow Definition)
    
-   `ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_CREATE` (**Create** Workflow Instance)
    

#### [](#common_actions "Copy link to heading")Common actions

  
| Action | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
Starting a process

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (**View** Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_CREATE` (**Create** Workflow Instance)

 | 

Start a process across several areas of the Operations Dashboard.

 |
| 

Viewing employee details

 | 

`ACTION_VAULT_OBJECT_TYPE_EMPLOYEE_VIEW` (**View** Employee)

 | 

View an employee’s details from an employee ID via an information ("i") button.

 |

#### [](#customers_2 "Copy link to heading")Customers

error

In addition to any permissions listed below, you must also have the `ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer) permission to view any customer records.

##### [](#customer_search "Copy link to heading")Customer search

chat\_bubble

You can input data into multiple search tabs to narrow a search. For example, you can type information into the **Customer details** tab and the **Account** tab.

   
| Area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
Any **Customer** search

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)

 | 

When used in isolation, lets you:

-   Search for customers and view basic details in the results.
    
-   Access customer fields in other pages.
    





 | 

`/customers-new/details`

 |

##### [](#customer_details_summary_tab "Copy link to heading")Customer details: Summary tab

*Page URL*: `/customers/[customerID]/summary`

  
| Panel | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
Basic details in the **Summary** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)

 | 

When used in isolation, lets you select a searched customer and view basic details in the customer record **Summary**.

 |
| 

**Accounts**

 | 

`ACTION_VAULT_OBJECT_TYPE_ACCOUNT_VIEW` (**View** Account)

 | 

View the customer’s account(s).

 |
| 

**Tasks**

 | 

`ACTION_VAULT_OBJECT_TYPE_TICKET_VIEW` (**View** Ticket)

 | 

View tasks performed on the customer’s record.

 |
| 

**Processes**

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)

 | 

View processes associated with the customer.

 |
| 

**Recent notes**

 | 

1.  `ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_VIEW` (**View** Note)
    
2.  `ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_CREATE` (**Create** Note)
    
3.  `ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_DELETE_OR_DISABLE` (**Delete** Note)
    





 | 

1.  View all notes associated with the customer.  
    *AND*  
    
2.  Click **Add note** and create a new note for the customer.  
    *AND*  
    
3.  Delete a customer’s note.
    





 |
| 

**Active customer flags**

 | 

1.  `ACTION_VAULT_OBJECT_TYPE_FLAG_VIEW` (**View** Flag)
    
2.  `ACTION_VAULT_OBJECT_TYPE_FLAG_EDIT` (**Edit** Flag)
    





 | 

1.  View flags associated with the customer and view the customer’s account(s).  
    *AND*
    
2.  Edit flags.
    





 |
| 

**Active restriction sets**

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)

 | 

View any active restriction sets.

 |

##### [](#customer_details_about_tab "Copy link to heading")Customer details: About tab

*Page URL*: `/customers/[customerID]/about`

  
| Panel | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**Personal details**  
*AND*  
**Identifiers**  
*AND*  
**Customer Addresses**  
*AND*  
**Documents**  
*AND*  
**Additional Data**

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)

 | 

View all panels in the customer’s About tab.

 |

##### [](#customer_details_accounts_tab "Copy link to heading")Customer details: Accounts tab

*Page URL*: `/customers/[customerID]/accounts`

  
| Tab | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**Accounts**

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_ACCOUNT_VIEW` (**View** Account)

 | 

View the customer’s account(s).

 |

##### [](#customer_details_tasks_tab "Copy link to heading")Customer details: Tasks tab

*Page URL*: `/customers/[customerID]/tasks`

  
| Tab | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**Tasks**

 | 

`ACTION_VAULT_OBJECT_TYPE_TICKET_VIEW` (**View** Ticket)

 | 

Search for and view the customer’s Tasks.

 |

##### [](#customer_details_history_tab "Copy link to heading")Customer details: History tab

*Page URL*: `/customers/[customerID]/history`

  
| Tab | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**History**

 | 

`ACTION_VAULT_OBJECT_TYPE_AUDIT_LOG_VIEW` (**View** Audit Log)

 | 

View and filter activity on the customer’s record.

 |

##### [](#customer_details_audit_logs_tab "Copy link to heading")Customer details: Audit logs tab

*Page URL*: `/customers/[customerID]/audit-logs`

  
| Tab | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**Audit logs**

 | 

`ACTION_VAULT_OBJECT_TYPE_AUDIT_LOG_VIEW` (**View** Audit Log)

 | 

View Audit Logs related to the customer’s record.

 |

##### [](#customer_details_transactions_tab "Copy link to heading")Customer details: Transactions tab

*Page URL*: `/customers/[customerID]/transactions`

  
| Tab | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**Transactions**

 | 

`ACTION_VAULT_OBJECT_TYPE_XPL_TRANSACTION_VIEW` (**View** Experience Layer transaction)

 | 

View transactions on the customer’s record.

 |

##### [](#customer_details_notes_tab "Copy link to heading")Customer details: Notes tab

*Page URL*: `/customers/[customerID]/notes`

  
| Tab/link | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
**Notes** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_VIEW` (**View** Note)

 | 

View and filter notes on the customer’s record.

 |
| 

**Add note** link

 | 

`ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_VIEW` (**View** Note)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_CREATE` (**Create** Note)

 | 

Add a note to the customer’s record

 |
| 

**Delete note** link

 | 

`ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_VIEW` (**View** Note)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_NOTE_DELETE_OR_DISABLE` (**Delete** Note)

 | 

Delete a customer’s note, restore a deleted note and view deleted notes.

 |

#### [](#tasks_2 "Copy link to heading")Tasks

error

In addition to the permissions listed below, you must also have the `ACTION_VAULT_OBJECT_TYPE_TICKET_VIEW` (**View** Ticket) permission to view the **Tasks** section and all subpages within it.

   
| Filter/Area/Panel | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Status**, **Account type** and **Tags** filters

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_VIEW` (**View** Product)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_PRODUCT_VERSION_VIEW` (**View** Product version)

 | 

Use the **Status** and **Account type** filters.

 | 

`/tasks`

 |
| 

**Customer** filter

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)

 | 

Use the **Customer** filter.

 | 

`/tasks`

 |
| 

**Account** panel  
*AND*  
**Customer accounts** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_ACCOUNT_VIEW` (**View** Account)

 | 

View the **Account** and **Customer accounts** panels.

 | 

`/tasks[task_id]`

 |
| 

**Documents** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_DOCUMENT_VIEW` (**View** Document)

 | 

View the **Documents** panel.

 | 

`/tasks[task_id]`

 |
| 

**Assigned roles**

 | 

`ACTION_VAULT_OBJECT_TYPE_ROLE_VIEW` (**View** Role)

 | 

View the name of the roles associated with this task.

 | 

`/tasks/[task_id]`

 |
| 

**Transactions** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_VIEW` (**View** Posting)

 | 

View the **Transactions** panel.

 | 

`/tasks/[task_id]`

 |
| 

**Flag application** parameter

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_CREATE` (**Create** Flag)

 | 

Apply flags.

 | 

`/tasks/[task_id]`

 |
| 

**Flag definition selector**

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_VIEW` (**View** Flag definition)

 | 

Use the **Flag definition selector**.

 | 

`/tasks/[task_id]`

 |
| 

**Restriction set parameters** input

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_CREATE` (**Create** Restriction set)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VERSION_VIEW` (**View** Restriction set definition version)

 | 

Input restriction set parameters.

 | 

`/tasks/[task_id]`

 |
| 

**Restriction set definition** selector

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)

 | 

Select a restriction set definition to apply.

 | 

`/tasks/[task_id]`

 |

#### [](#processes_2 "Copy link to heading")Processes

error

In addition to the permissions listed below, you must also have the following permissions to view the **Processes** section and all subpages within it:

-   `ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)
    
-   `ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_EVENT_VIEW` (**View** Workflow Instance Event)
    
-   `ACTION_VAULT_OBJECT_TYPE_TICKET_VIEW` (**View** Ticket)
    

   
| Filter/Area/Panel | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Actions** > **Start a process**

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_CREATE` (**Create** Workflow Instance)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (**View** Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_CREATE` (**Create** Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_CREATE` (**Create** Workflow Definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_TICKET_VIEW` (**View** Ticket)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_TICKET_CREATE` (**Create** Ticket)

 | 

Start a process.

 | 

`/processes`

 |
| 

**Customer ID** filter

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)

 | 

Use the **Customer ID** filter.

 | 

`/processes`

 |
| 

**Process type** filter

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (**View** Workflow Definition)

 | 

Use the **Process type** filter.

 | 

`/processes`

 |
| 

**Customer accounts** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_ACCOUNT_VIEW` (**View** Account)

 | 

Use the **Customer accounts** panel.

 | 

`/processes[process_id]`

 |
| 

**Documents** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_DOCUMENT_VIEW` (**View** Document)

 | 

View the **Documents** panel.

 | 

`/processes/[process_id]`

 |
| 

**Transactions** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_VIEW` (**View** Posting)

 | 

View the **Transactions** panel.

 | 

`/processes/[process_id]`

 |
| 

**Flag application** parameter

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_CREATE` (**Create** Flag)

 | 

Apply flags.

 | 

`/processes[process_id]`

 |
| 

**Flag definition selector**

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_VIEW` (**View** Flag definition)

 | 

Use the **Flag definition selector**.

 | 

`/processes[process_id]`

 |
| 

**Restriction set parameters** input

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_CREATE` (**Create** Restriction set)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (**View** Customer)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VERSION_VIEW` (**View** Restriction set definition version)

 | 

Input restriction set parameters.

 | 

`/processes/[process_id]`

 |
| 

**Restriction set definition** selector

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (**View** Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_CREATE` (**Create** Workflow Instance)

 | 

Select a restriction set definition to apply.

 | 

`/processes/[process_id]`

 |

#### [](#internal_accounts "Copy link to heading")Internal accounts

error

In addition to the following permissions, you must also have the `ACTION_VAULT_OBJECT_TYPE_INTERNAL_ACCOUNT_VIEW` (**View** Internal account) permission to view the **Internal accounts** section and all subpages within it.

   
| Panel/button/area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Details** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_INTERNAL_ACCOUNT_VIEW` (**View** Internal account)

 | 

When used in isolation, lets you view the account **Details** panel

 | 

`/internal-accounts/all-internal-accounts/[internal_account_id]`

 |
| 

**Ledger balances** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_LEDGER_BALANCE_VIEW` (**View** ledger balances)

 | 

View the **Ledger balances** panel

 | 

`/internal-accounts/all-internal-accounts/[internal_account_id]`

 |
| 

**Posting instruction batches** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_INSTRUCTION_BATCH_ASYNC_VIEW` (**View** Posting instruction batch)

 | 

View the **Posting instruction batches** panel.

 | 

`/internal-accounts/all-internal-accounts/[internal_account_id]`

 |
| 

**Posting instruction batch** are  
*AND*  
**Posting instruction** area

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_VIEW` (**View** Posting)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_POSTING_INSTRUCTION_BATCH_ASYNC_VIEW` (**View** Posting instruction batch)

 | 

View a posting instruction batch within the account and view a particular posting instruction within the batch.

 | 

\*/internal-accounts/all-internal-accounts/\[internal\_account\_id\]/posting-instruction-batch/\[posting\_instruction\_batch\_id\] \*/internal-accounts/all-internal-accounts/\[internal\_account\_id\]/posting-instruction-batch/\[posting\_instruction\_id\]





 |
| 

**Processes** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)

 | 

View the **Processes** panel.

 | 

`/internal-accounts/all-internal-accounts/[internal_account_id]`

 |

#### [](#products_2 "Copy link to heading")Products

chat\_bubble

These are legacy permissions for Product Hub. A component of Vault that is now deprecated. However, these permissions are still visible from this section of the Dashboard.

error

In addition to the following permissions, you must also have the following permissions to view the **Products** section and all subpages within it:

-   `ACTION_VAULT_OBJECT_TYPE_PRODUCT_VIEW` (**View** Product)
    
-   `ACTION_VAULT_OBJECT_TYPE_PRODUCT_VERSION_VIEW` (**View** Product version)
    

##### [](#product_management_2 "Copy link to heading")Product management

   
| Panel/button/area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Product management** area

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_VIEW` (**View** Product)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_PRODUCT_VERSION_VIEW` (**View** Product version)

 | 

When used in isolation, let you view a list of all products and see the detail for a specific product.

 | 

`/products/product-management`

 |
| 

**Add a product** button `ACTION_VAULT_OBJECT_TYPE_PRODUCT_CREATE` (**Create** Product)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_CREATE` (**Create** Workflow Instance)

 | 

Click **Add a product** at the top-right of the page and add a new product.

**Note**: By default, adding a product initiates processes that create tickets (tasks), which require separate permissions to view. For more information, see Tasks in [Permissions](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#permissions_2)

 | 

`/products/product-management`

 | 

**Activate/Deactivate** product button

 |
| 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_DELETE_OR_DISABLE` (**Disable** Product)

 | 

Use the **Activate/Deactivate product** button from within a product’s page.

 | 

`/products/product-management/[product_id]`

 | 

**Create new version** button

 |
| 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_VERSION_CREATE` (**Create** Product version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_CREATE` (**Create** Workflow Instance)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_VIEW` (**View** Workflow Definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_CREATE` (**Create** Workflow Definition version)

 | 

Use the **Create new version** button from within a product’s page.

 | 

`/products/product-management/[product_id]`

 | 

**Edit parameters** link

 |

##### [](#financial_constants_2 "Copy link to heading")Financial constants

   
| Area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Financial constants** area

 | 

`ACTION_VAULT_OBJECT_TYPE_GLOBAL_PARAMETER_VIEW` (**View** Global parameter)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_GLOBAL_PARAMETER_EDIT` (**Edit** Global parameter)

 | 

View and edit financial constants.

 | 

`/products/financial-constants`

 |

#### [](#product_app "Copy link to heading")Product app

chat\_bubble

These are legacy permissions for Product Hub. A component of Vault that is now deprecated. However, these permissions are still visible from this section of the Dashboard.

   
| Tab location | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
Product Catalogue > **Products** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_PRODUCT_VIEW` (**View** Product Catalogue Product)

 | 

View Products in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/list/products`

 |
| 

Product Catalogue > **Products** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_PRODUCT_VERSION_VIEW` (**View** Product Catalogue Product version)

 | 

View Product versions in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/node/product/`

 |
| 

Product Catalogue > **Contracts** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_CONTRACT_VIEW` (**View** Product Catalogue Contract)

 | 

View Contracts in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/list/contracts`

 |
| 

Product Catalogue > **Contracts** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_CONTRACT_CREATE` (**Create** Product Catalogue Contract)

 | 

Create Contracts in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/list/contracts`

 |
| 

Product Catalogue > **Contracts** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_CONTRACT_VERSION_VIEW` (**View** Product Catalogue Contract version)

 | 

View Contract versions in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/node/contract/`

 |
| 

Product Catalogue > **Contracts** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_CONTRACT_VERSION_CREATE` (**Create** Product Catalogue Contract version)

 | 

Create Contract versions in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/list/contracts`

 |
| 

Product Catalogue > **Groups** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_GROUP_VIEW` (**View** Product Catalogue Group)

 | 

View Groups in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/list/groups`

 |
| 

Product Catalogue > **Groups** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_PRODUCT_HUB_GROUP_VERSION_VIEW` (**View** Product Catalogue Group version)

 | 

View Group versions in the Product App’s Product Catalogue

 | 

`/apps/product/catalogue/node/group/`

 |

#### [](#ledgers_2 "Copy link to heading")Ledgers

##### [](#payments_2 "Copy link to heading")Payments

   
| Area/panel | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Payments** area

 | 

`ACTION_VAULT_OBJECT_TYPE_PAYMENT_VIEW` (**View** Payment)

 | 

View and filter the list of payments.

 | 

`/ledgers/payment-ledger/`

 |
| 

**Payment details** area

 | 

`ACTION_VAULT_OBJECT_TYPE_PAYMENT_VIEW` (**View** Payment)

 | 

View the details of a payment.

 | 

`/ledgers/payment-ledger/[payment_id]`

 |
| 

**Posting instruction batches** pane  
*AND*  
**Posting instruction batch** area  
*AND*  
**Posting instruction** area

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_VIEW` (**View** Posting)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_POSTING_INSTRUCTION_BATCH_ASYNC_VIEW` (**View** Posting instruction batch)

 | 

-   View a list of posting instruction batches in the panel.
    
-   View a particular batch.
    
-   View a particular posting instruction within a batch.
    





 | 

-   `/ledgers/posting-instruction-batches/`
    
-   `/ledgers/posting-instruction-batches/[posting_instruction_batch_id]`
    
-   `/ledgers/posting-instruction-batches/[posting_instruction_batch_id]/[posting_instruction_id]`
    





 |
| 

**Payment processes** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (**View** Workflow Instance)

 | 

View the **Payment processes** panel of a Payment.

 | 

`/ledgers/payment-ledger/[payment_id]`

 |

##### [](#payment_scheme_messages "Copy link to heading")Payment scheme messages

   
| Area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Payment scheme messages** area

 | 

`ACTION_VAULT_OBJECT_TYPE_PAYMENTS_HUB_SCHEME_MESSAGE_VIEW` (**View** Scheme message)

 | 

View payment scheme messages (if the Payments Hub is activated).

 | 

`/ledgers/payment-scheme-messages`

 |

##### [](#posting_instruction_batches_3 "Copy link to heading")Posting instruction batches

   
| Area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Posting instruction batches** area  
*AND*  
**Posting instruction batch** area

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_INSTRUCTION_BATCH_ASYNC_VIEW` (**View** Posting instruction batch)

 | 

View a list of posting instruction batches and a particular batch.

 | 

\* `/ledgers/posting-instruction-batches/` \* `/ledgers/posting-instruction-batches/[posting_instruction_batch_id]`

 |
| 

**Posting instruction** area

 | 

`ACTION_VAULT_OBJECT_TYPE_POSTING_VIEW` (**View** Posting)

 | 

View a particular posting instruction within a batch.

 | 

`/ledgers/posting-instruction-batches/[posting_instruction_batch_id]/[posting_instruction_id]`

 |
| 

**Violations** panel

 | 

`ACTION_VAULT_OBJECT_TYPE_PAYMENT_VIEW` (**View** Payment)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_VIEW` (**View** Restriction set)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)

 | 

View the restriction violations and click a violation link to see its definition.

 | 

`/ledgers/posting-instruction-batches/[posting_instruction_batch_id]/[posting_instruction_id]`

 |

##### [](#ledger_balances_2 "Copy link to heading")Ledger balances

   
| Area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Ledger balances** area

 | 

`VAULT_OBJECT_TYPE_LEDGER_BALANCE_VIEW` (**View** Ledger Balance)

 | 

View Ledger Balances

 | 

//using\_vault/core\_apps\_and\_operations\_dashboard/ops\_dashboard/Ledgers/#ledger\_balances

 |

#### [](#organisation_history_2 "Copy link to heading")Organisation history

   
| Area | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Action logs** area

 | 

`ACTION_VAULT_OBJECT_TYPE_AUDIT_LOG_VIEW` (**View** Audit Log)

 | 

View Action Logs.

 | 

`/organisation-history/action-logs`

 |
| 

**Audit logs** area

 | 

`ACTION_VAULT_OBJECT_TYPE_AUDIT_LOG_VIEW` (**View** Audit Log)

 | 

View Audit Logs.

 | 

`/organisation-history/audit-logs`

 |
| 

**Schedules** area

 | 

`ACTION_VAULT_OBJECT_TYPE_SCHEDULE_VIEW` (**View** schedules)

 | 

View schedules.

 | 

`/organisation-history/schedules`

 |

chat\_bubble

You can also use custom permissions to restrict visibility of Audit Logs to specific `vault` objects. For more information, see [Audit Log Policies](/vault-core/5-9/EN/reference/policies/legacy-policies#policies).

#### [](#organisation_admin_2 "Copy link to heading")Organisation admin

##### [](#flag_definitions_2 "Copy link to heading")Flag definitions

   
| Area/column/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Flag definitions** area

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_VIEW` (**View** Flag definition)

 | 

View a list of flag definitions.

 | 

`/organisation-management/flags/definitions`

 |
| 

**Actions** > **Create flag** button

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_VIEW` (**View** Flag definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_CREATE` (**Create** Flag definition)

 | 

Use the **Create flag** button to create a flag definition.

 | 

`/organisation-management/flags/definitions`

 |
| 

Flag definitions **Actions** column

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_VIEW` (**View** Flag definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_EDIT` (**Edit** Flag definition)

 | 

Click in a row beneath the **Actions** column to deactivate a flag definition.

 | 

`/organisation-management/flags/definitions`

 |

##### [](#roles_2 "Copy link to heading")Roles

   
| Area/page/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Roles** area

 | 

`ACTION_VAULT_OBJECT_TYPE_ROLE_VIEW` (**View** Role)

 | 

View the **Roles** area.

 | 

`/organisation-management/roles`

 |
| 

**Actions** > **Create role** button

 | 

`ACTION_VAULT_OBJECT_TYPE_ROLE_CREATE` (**Create** Role)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_VAULT_PERMISSION_VIEW` (**View** Vault permission)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_DATA_PERMISSION_VIEW` (**View** Data permission)

 | 

Create a role via the **Actions** > **Create role** button.

 | 

`/organisation-management/roles`

 |
| 

**Role details** page

 | 

`ACTION_VAULT_OBJECT_TYPE_ROLE_VIEW` (**View** Role)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_VAULT_PERMISSION_VIEW` (**View** Vault permission)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_DATA_PERMISSION_VIEW` (**View** Data permission)

 | 

View the **Role details** page

 | 

`/organisation-management/roles/role/[role_id]`

 |
| 

**Role editor** page  
*AND*  
**Edit role** button

 | 

`ACTION_VAULT_OBJECT_TYPE_ROLE_VIEW` (**View** Role)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_ROLE_EDIT` (**Edit** Role)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_VAULT_PERMISSION_VIEW` (**View** Vault permission)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_DATA_PERMISSION_VIEW` (**View** Data permission)

 | 

Edit roles.

 | 

`/organisation-management/roles/role/[role_id]/edit`

 |

##### [](#permissions_3 "Copy link to heading")Permissions

   
| Tab/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Base permissions** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_VAULT_PERMISSION_VIEW` (**View** Base permission)

 | 

View the **Base permissions** tab.

 | 

`/organisation-management/permissions/base`

 |
| 

**Custom permissions** tab

 | 

`ACTION_VAULT_OBJECT_TYPE_DATA_PERMISSION_VIEW` (**View** Custom permission)

 | 

View the **Custom permissions** tab.

 | 

`/organisation-management/permissions/custom`

 |
| 

**Create Custom Permission** button

 | 

`ACTION_VAULT_OBJECT_TYPE_VAULT_PERMISSION_VIEW` (**View** Base permission)

 | 

Use the **Create Custom Permission** button to create a permission.

 | 

`/organisation-management/permissions/custom`

 |

##### [](#policies "Copy link to heading")Policies

   
| Area/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Policies** area

 | 

`ACTION_VAULT_OBJECT_TYPE_POLICY_VIEW` (**View** Policy)

 | 

View policies.

 | 

organisation-management/policies

 |
| 

**Create policy** button

 | 

`ACTION_VAULT_OBJECT_TYPE_POLICY_VIEW` (**View** Policy)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_POLICY_CREATE` (**Create** Policy)

 | 

Create a new policy.

 | 

organisation-management/policies

 |
| 

**Actions** button

 | 

`ACTION_VAULT_OBJECT_TYPE_POLICY_VIEW` (**View** Policy)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_POLICY_EDIT` (**Edit** Policy)

 | 

Edit a policy via **Actions** > **Edit policy details** or make a policy inactive via **Actions** > **Set to inactive**.

 | 

organisation-management/policies/\[policy\_id\]/details

 |

##### [](#restriction_sets "Copy link to heading")Restriction sets

   
| Area/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Restriction set definitions** area

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)

 | 

View restriction sets.

 | 

`/organisation-management/restrictions/definitions`

 |
| 

**Create a definition** button

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_CREATE` (**Create** Restriction set definition)

 | 

Create a new restriction set definition via the **Create a definition** button.

 | 

`/organisation-management/restrictions/definitions`

 |
| 

**Update definition** button

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (**View** Restriction set definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VERSION_VIEW` (**View** Restriction set definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VERSION_CREATE` (**Create** Restriction set definition version)

 | 

Edit a restriction set definition via the **Update definition** button.

 | 

`/organisation-management/restrictions/definitions/[definition_id]/versions`

 |

##### [](#calendars "Copy link to heading")Calendars

   
| Area/column/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Calendars** page

 | 

`ACTION_VAULT_OBJECT_TYPE_CALENDAR_VIEW` (**View** calendar)

 | 

View calendars.

 | 

`/organisation-management/calendars`

 |
| 

**Calendar create** button and page

 | 

`ACTION_VAULT_OBJECT_TYPE_CALENDAR_VIEW` (**View** calendar)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CALENDAR_CREATE` (**Create** calendar)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CALENDAR_EVENT_CREATE` (**Create** calendar event)

 | 

Create and add events to a calendar.

 | 

`/organisation-management/calendars/create`

 |
| 

**Calendar detail** page and **Calendar events** table

 | 

`ACTION_VAULT_OBJECT_TYPE_CALENDAR_VIEW` (**View** calendar)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CALENDAR_EVENT_VIEW` (**View** calendar event)

 | 

View a calendar and its events.

 | 

`/organisation-management/calendars/calendar/[calendar_id]/schedule`

 |
| 

**Calendar create events** button and page

 | 

`ACTION_VAULT_OBJECT_TYPE_CALENDAR_VIEW` (**View** calendar)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CALENDAR_EVENT_CREATE` (**Create** calendar event)

 | 

Add events to a calendar.

 | 

`/organisation-management/calendars/create-events/[calendar_id]`

 |
| 

**Calendar events** > **Actions** > **Delete event** button

 | 

`ACTION_VAULT_OBJECT_TYPE_CALENDAR_VIEW` (**View** calendar)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CALENDAR_EVENT_VIEW` (**View** calendar event)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CALENDAR_EVENT_DELETE_OR_DISABLE` (**Delete** calendar event)

 | 

Remove events from a calendar.

 | 

`/organisation-management/calendars/calendar/[calendar_id]/schedule`

 |

##### [](#service_accounts "Copy link to heading")Service accounts

   
| Area/column/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
**Service accounts** area

 | 

`ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_VIEW` (**View** Service account)

 | 

View service accounts.

 | 

`/organisation-management/service-accounts`

 |
| 

**Create a service account** button

 | 

`ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_VIEW` (**View** Service account)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_CREATE` (**Create** Service account)

 | 

Create a service account via the **Create a service** account button.

 | 

`/organisation-management/service-accounts`

 |
| 

**Actions** button (within a service account)

 | 

`ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_VIEW` (**View** Service account)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_DELETE_OR_DISABLE` (**Disable** Service account)

 | 

Edit the service account via the **Actions** button to:

-   Edit permissions.
    
-   Refresh token.
    
-   Change status.
    





 | 

`/organisation-management/service-accounts/[service_account_id]/details`

 |

#### [](#workflows "Copy link to heading")Workflows

   
| Area/column/button | Permission(s) required | What it lets you do | Page URL |
| --- | --- | --- | --- |
| 
*Workflow definitions* area

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definition)

 | 

View Workflow Definitions.

 | 

`/workflow-management/workflow-definitions`

 |
| 

*Actions* button

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_CREATE` (*Create* Workflow Definition)

 | 

Create a Workflow Definition via *Actions* > *Create workflow definition*.

 | 

`/workflow-management/workflow-definitions`

 |
| 

*Actions* column or button within a Workflow

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_VIEW` (*View* Workflow Definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_CREATE` (*Create* Workflow Definition version)

 | 

From the *Actions* column or the *Actions* button within a Workflow, select *Instantiate default version*.

 | 

-   `/workflow-management/workflow-definitions`
    
-   /workflow-management/workflow-definitions\[workflow\_id\]/\[version\]
    





 |
| 

*Actions* column or button within a Workflow

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_VIEW` (*View* Workflow Definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_DELETE_OR_DISABLE` (*Disable* Workflow Definition)

 | 

From the *Actions* column or the *Actions* button within a Workflow, select *Disable workflow definition*.

 | 

-   `/workflow-management/workflow-definitions`
    
-   `/workflow-management/workflow-definitions[workflow_id]/[version]`
    





 |
| 

*Definition details: Specification* tab  
*AND*  
*Definition details: Graph* tab

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_VIEW` (*View* Workflow Definition version)

 | 

View the Workflow *Version details* and *Version specification*.

 | 

-   `/workflow-management/workflow-definitions/[workflow_id]/[version]/specification`
    
-   `/workflow-management/workflow-definitions/[workflow_id]/[version]/graph`
    





 |
| 

*Definition details: Instances* tab.

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_INSTANCE_VIEW` (*View* Workflow Instance)

 | 

View the Workflow version instances.

 | 

`/workflow-management/workflow-definitions/[workflow_id]/[version]/instances`

 |
| 

*Workflow definitions* area  
*AND*  
*Core workflows* area  
*AND*  
*Workflow simulator* area

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_CREATE` (*Create* Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_EDIT` (*Edit* Workflow Definition)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_VIEW` (*View* Workflow Definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_CREATE` (*Create* Workflow Definition version)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VERSION_EDIT` (*Edit* Workflow Definition version)

 | 

-   View a list of core Workflows and view each Workflow.
    
-   Edit and validate a Workflow.
    
-   Create, edit and simulate a Workflow.
    





 | 

-   `/workflow-management/core-workflows`
    
-   `/workflow-management/workflow-builder`
    
-   `/workflow-management/workflow-simulator`
    





 |
| 

*Instantiation config* area  
*AND*  
*Definition details: Instantiation config* tab

 | 

`ACTION_VAULT_OBJECT_TYPE_VAULT_APPS_WORKFLOW_INSTANTIATION_LINK_VIEW` (*View* Workflow Instantiation link)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definition)

 | 

Edit the locations that this Workflow can be instantiated from.

 | 

-   `/workflow-management/workflow-definitions/[workflow_id]/[version]/instances`
    
-   `/workflow-management/workflow-definitions/[workflow_id]/[version]/instantiation_config`
    





 |

#### [](#ui_inputs "Copy link to heading")UI inputs

  
| UI Input | Permission(s) required | What it lets you do |
| --- | --- | --- |
| 
*Flag Application Parameter* Input

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_CREATE` (*Create* Flags)

 | 

Apply a flag at either customer or account level.

 |
| 

*Flag Definition Selector* Input

 | 

`ACTION_VAULT_OBJECT_TYPE_FLAG_DEFINITION_VIEW` (*View* Flag Definitions)

 | 

View a selector for flag definitions of one or more specified flags.

 |
| 

*Restriction Set Definition Selector* Input

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (*View* Restriction Set Definitions)

 | 

View a selector for restriction set definitions.

 |
| 

*Restriction Set Parameters* Input

 | 

`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_CREATE` (*Create* Restriction Set)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_CUSTOMER_VIEW` (*View* Customers)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VIEW` (*View* Restriction Set Definitions)  
*AND*  
`ACTION_VAULT_OBJECT_TYPE_RESTRICTION_SET_DEFINITION_VERSION_VIEW` (*View* Restriction Set Definition Versions)

 | 

Request relevant information from the user to apply a restriction set where the restriction levels include customer or account levels.

 |
| 

*Workflow Definition* Input

 | 

`ACTION_VAULT_OBJECT_TYPE_WORKFLOW_DEFINITION_VIEW` (*View* Workflow Definitions)

 | 

View a workflow definition selector input.

 |

### [](#policies_2 "Copy link to heading")Policies

Policies define a set of access controls to restrict a user’s interactions with Workflows, Tickets, and Audit Logs.

#### [](#viewing_policy_details "Copy link to heading")Viewing Policy details

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Policies**.
    
2.  To view inactive Policies, click the **Status** filter and select **Include Inactive**.
    
3.  To view a Policy’s details, click its **ID**.
    

#### [](#editing_policy_details "Copy link to heading")Editing Policy details

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Policies**.
    
2.  To view inactive Policies, click the **Status** filter and select **Include Inactive**.
    
3.  To view a Policy’s details, click its **ID**.
    
4.  Select the **Actions** dropdown at the top-right of the page.
    
5.  Select **Edit policy details** to display the **Editing policy details for** screen.
    
6.  To amend the Policy description, select **Change the policy description**.
    
7.  Select any additional actions permitted by the Policy.
    
    chat\_bubble
    
    To remove selected actions, first remove all the permissions assigned to them.
    
8.  Beneath **Assign permissions**, click the dropdown for each action to assign or edit the permissions required by this Policy.
    
9.  Click the **Update policy** button to save your changes.
    

#### [](#setting_a_policy_to_inactive "Copy link to heading")Setting a Policy to inactive

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Policies**.
    
2.  To view inactive Policies, click the **Status** filter and select **Include Inactive**.
    
3.  Click a Policy’s **ID** to view its details.
    
4.  Select the **Actions** dropdown at the top-right of the page.
    
5.  Select **Set to inactive** to display the **Confirm setting a policy to inactive** dialogue.
    
6.  Click the **Confirm** button to make this Policy inactive.
    

### [](#restriction_sets_2 "Copy link to heading")Restriction sets

Restriction sets enforce business rules by preventing, for example, one or more customers from opening an account.

#### [](#viewing_restriction_set_definition_details "Copy link to heading")Viewing Restriction set definition details

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Restriction sets**.
    
2.  Click the **Definition ID** of the required restriction set to display the **Restriction set definition versions for:\[Restriction set definition ID\]** screen.
    

#### [](#creating_a_restriction_set_definition "Copy link to heading")Creating a Restriction set definition

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Restriction sets**.
    
2.  Click the **Actions** dropdown at the top-right of the page.
    
3.  Select **Create a definition** to display the **Create a new restriction set definition** screen.
    
4.  Enter a unique **Restriction Set Name**.
    
5.  Enter a **Description**.
    
6.  For each restriction type, select whether the restriction applies at **Customer**, **Account** or **Payment Device** level.
    
7.  Click the **Create restriction set** button to create the Restriction set definition.
    

#### [](#creating_a_restriction_set_definition_version "Copy link to heading")Creating a Restriction set definition version

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Restriction sets**.
    
2.  Click the **Definition ID** of the required restriction set to display the **Restriction set definition versions for:** screen.
    
3.  Click the **Update definition** button at the top-right of the page to display the **Create a new restriction set definition version** screen.
    
    chat\_bubble
    
    Alternatively, click the **Version** link to display the **Create a new restriction set definition version** screen.
    
4.  If required, edit the **Description**.
    
5.  For each restriction type, edit whether the restriction applies at **Customer**, **Account** or **Payment Device** level.
    
6.  Click the **Create new definition version** button to create the new version.
    

#### [](#starting_a_process_2 "Copy link to heading")Starting a process

1.  In the Operations Dashboard, navigate to **Organisation admin** > **Restriction sets**.
    
2.  Click the **Actions** dropdown at the top-right of the page.
    
3.  Select **Start a process** to display the **Select a process to start** window, listing the available processes.
    
4.  Click the required **Process** to start it.
    

### [](#calendars_2 "Copy link to heading")Calendars

The calendar pages are used to create and view calendars and their associated events within Vault.

Calendar events allow Vault users to define an arbitrary list of events, such as a list of bank holiday dates, that can be referenced by components in Vault.

Each calendar event comprises:

-   A pair of explicit timestamps defining the start and end of the event.
    
-   A name
    
-   An optional ID
    

There are no restrictions on event length or number of events that a user can define.

For more information, see the [Calendars](/vault-core/5-9/EN/reference/calendar) documentation.

chat\_bubble

For information about the permissions required for the calendar pages, see [Organisation admin permissions](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#permissions_2)

#### [](#creating_a_calendar "Copy link to heading")Creating a calendar

1.  Go to **Calendars**.
    
2.  Click **Create calendar**.
    
3.  Optionally enter a calendar ID, display name and description. If the calendar ID field is left blank, an ID will be generated.
    
4.  Optionally add events to the calendar. Events require a:
    
    -   Name
        
    -   Start datetime (inclusive)
        
    -   End datetime (exclusive)
        
        chat\_bubble
        
        The Event ID field is optional; if left blank, an ID is generated.
        
    
5.  Click **Create calendar** to create the calendar and go to the **Calendar details** page.
    

#### [](#viewing_a_calendar_and_calendar_events "Copy link to heading")Viewing a calendar and calendar events

On the calendar details page, you can check the status of the calendar (active or inactive) and its creation date. You can also filter the events associated with the calendar.

By default, the events are filtered to show all future-dated events from the current day. You can update the filter to search for events in any given date range.

You can view the following details for each calendar event in the table:

 
| Field | Description |
| --- | --- |
| 
Name

 | 

The event name.

 |
| 

Event ID

 | 

The event ID.

 |
| 

Event starts

 | 

The UTC datetime that the calendar event is effective from (inclusive).

 |
| 

Starts in

 | 

If the event start time is in the future, this displays a countdown of days and minutes until the start time. If the event end time is in the past or equal to current time, this displays **Completed**.If the event is in progress, this displays **In progress**.

 |
| 

Duration

 | 

The duration of the event.

 |

chat\_bubble

To see the UTC datetime for when the event ends (exclusive), click the calendar name within the table.

#### [](#creating_calendar_events "Copy link to heading")Creating calendar events

To create calendar events:

1.  On the **Calendar details** page click the **Create events** button to be redirected to a create events form.
    
2.  Add event data. Events require a:
    
    -   Name
        
    -   Start datetime (inclusive)
        
    -   End datetime (exclusive)
        
        chat\_bubble
        
        The Event ID field is optional; if left blank, an ID is generated.
        
    
3.  Click **Create events** to create events and be redirected to the **Calendar details** page.
    

#### [](#deleting_calendar_events "Copy link to heading")Deleting calendar events

chat\_bubble

In the Operations Dashboard when you **delete** a calendar event you are setting the **is\_active** field of the calendar event to **false**. For more information see the Update section of the [Calendar event API](/vault-core/5-9/EN/api/core_api#calendarevent).

To delete a calendar event:

1.  On the **Calendar details** page find the event you want to delete in the events table.
    
2.  Click the icon in the **Actions** column of the table and select "Delete event" from the options.
    
3.  To confirm deletion click **Confirm**. Alternatively, to cancel click **Cancel**.
    

### [](#service_accounts_2 "Copy link to heading")Service accounts

A service account is an account that is created explicitly to provide access to Vault’s APIs.

To send requests to these APIs, you must generate a permanent access token for the API endpoints enabled in the account and include this token in the `X-Auth-Token` header every time you send a request to the API endpoints.

In this section, you can learn about:

-   [Naming the service account](#naming_the_service_account)
    
-   [Creating service accounts](#creating_service_accounts)
    
-   [Editing access rights for service accounts](#editing_access_rights_for_service_accounts)
    
-   [Changing the status of service accounts](#changing_the_status_of_service_accounts)
    
-   [Refreshing a service account token](#refreshing_a_service_account_token)
    
-   [Refreshing a default service account token](#refreshing_a_default_service_account_token)
    

#### [](#naming_the_service_account "Copy link to heading")Naming the service account

The service account name must be unique.

error

You cannot change the name of the service account.

#### [](#creating_service_accounts "Copy link to heading")Creating service accounts

chat\_bubble

The `ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_CREATE` (**Create** service accounts) permission must be enabled to create service accounts.

1.  Click **Create a service account**.
    
2.  Enter the name of the service account.
    
3.  Under **Select permissions**, expand the API(s) you want to enable endpoints and HTTP methods for.
    
4.  Select all endpoints and methods you want to enable.
    
5.  Click **Get token**.
    
6.  Click the **Copy to clipboard** icon.
    
7.  Paste and save the token in a location where you can retrieve it. Use this token for all API requests on this service account.
    
    error
    
    You must not share your API tokens in publicly-accessible areas such as GitHub and client-side code.
    
8.  Select **Close**.
    

#### [](#editing_access_rights_for_service_accounts "Copy link to heading")Editing access rights for service accounts

chat\_bubble

The `ACTION_VAULT_OBJECT_TYPE_SERVICE_ACCOUNT_EDIT` (**Edit** service accounts) permission must be enabled to edit service accounts.

1.  Select the service account to edit.
    
2.  Select the **Actions** dropdown at the top-right of the page.
    
3.  Select **Edit permissions**.
    
4.  Expand and edit the API permissions as required.
    
5.  Select **Submit** to save your changes.
    

#### [](#changing_the_status_of_service_accounts "Copy link to heading")Changing the status of service accounts

1.  Select the service account to change.
    
2.  Click the **Actions** dropdown at the top-right of the page.
    
3.  Select **Change status**.
    
4.  Select the new status from **Status change**.
    
5.  Click **Make change** to save your changes.
    

##### [](#possible_statuses "Copy link to heading")Possible statuses

 
| Status | Description |
| --- | --- |
| 
Active

 | 

The service account is active. All tokens can be used.

 |
| 

Frozen

 | 

Freezing a service account disables the token. You can unfreeze the account later and it functions as it did before it was frozen.

 |
| 

Inactive

 | 

Deactivating a service account invalidates the token. You can reactivate the account later but you then need a new token.

 |

#### [](#refreshing_a_service_account_token "Copy link to heading")Refreshing a service account token

chat\_bubble

Do not refresh a service account token through the "Refresh token" option in the Operations Dashboard, as it instantly invalidates the current token. Services relying on these tokens might experience downtime due to the token refresh.

You can regenerate service account tokens using the following steps with zero downtime:

1.  For the service account you want to regenerate a token for, use the [Create endpoint (POST core-api/v1/service-accounts)](/vault-core/5-9/EN/api/core_api#serviceaccount) to create a replacement token. Ensure that the permissions granted are the same as the service account it is replacing.
    
2.  Update the Vault Core REST API client that is using the old token，so it is using the new token.
    
3.  Once confirmed that the old token is no longer in use, deactivate the old service account with a call to the [Update endpoint (PUT core-api/v1/service-accounts/{service\_account.id})](/vault-core/5-9/EN/api/core_api#serviceaccount), setting the status to `SERVICE_ACCOUNT_STATUS_INACTIVE`.
    
4.  Update the service account token in your connected services using the new token.
    

Alternatively, regenerate a service account token with zero downtime as follows:

1.  Go to the service account page in the Operations Dashboard.
    
2.  Choose the service account for which you need to regenerate a token.
    
3.  Note down the permissions required by this service account.
    
4.  Go back to the previous service account screen and select \`Create a service account'.
    
5.  Create a new service account with the same permissions as the one you are replacing, resulting in two service accounts with identical permissions.
    
6.  Update the Vault Core REST API client that uses the old token to use the new one instead.
    
7.  Once you have confirmed the old token is no longer in use, select the old service account from the service account page.
    
8.  Choose "Change status" from the "Actions" dropdown menu for the old service account.
    
9.  Set the old service account’s status to inactive.
    

#### [](#refreshing_a_default_service_account_token "Copy link to heading")Refreshing a default service account token

This process may lead to a minor service disruption for users of the Operations Dashboard, Audit, Workflows, Smart Contracts that use Workflows, Payments Hub and Experience Layer while the pods are restarting.

To mitigate the risk of disruption, scale down the following workflows deployments before regenerating the default service token:

-   `workflow-callback-router`
    
-   `workflow-schedule-processor`
    

These deployments operate asynchronously, and therefore the consequent service disruption increases the latency of the requests processed by the workflows services, but does not affect the correctness of their operations. In order to scale down these deployments, use:

1.  Check the number of replicas and record the desired number of deployments:
    

2.  Scale down the deployments to zero replicas:
    

```
kubectl -context -n scale deployment workflow-callback-router -replicas=0
kubectl -context -n scale deployment workflow-schedule-processor -replicas=0
```

You can regenerate the default service account token by using the following steps:

##### [](#method_one "Copy link to heading")Method one

You can use the provided bash script [reset\_default\_service\_account\_token.sh](/vault-core/5-9/EN/resources/reset_default_service_account_token.zip) to update the default service account token in your environments. This works with HashiCorp Vault with [KV/1 and KV/2](https://developer.hashicorp.com/vault/docs/secrets/kv). To use this script you must have the `KUBECONFIG` environment variable set and you must have the `HAULT_ADDR` environment variable set to your HashiCorp Vault instance. You must have your `.vault-tokens` file populated with a valid token for your HashiCorp Vault instance. This also requires network connectivity to the relevant HashiCorp Vault, and Kubernetes control plane.

Ensure you have:

-   bash
    
-   jq
    
-   kubectl
    

Once everything is set up, you can run:

Where:

-   `-c` is the Kubernetes context to use.
    
-   `-n` is the namespace in Kubernetes where Vault Core is installed.
    
-   `-s` is the secret mount point.
    
-   `-p` is the secret prefix.
    

##### [](#method_two "Copy link to heading")Method two

1.  Generate a new default service account token using a secure random string generator and insert it into the secret store under `SECRET_MOUNT_POINT/SECRET_PREFIX/vault-auth-default-service-account/DEFAULT_SERVICE_ACCOUNT_TOKEN`
    
    -   This is an example command that requires dd, base64, tr, head and echo, and has only been tested on Linux with bash 4+
        
        -   `dd if=/dev/urandom | base64 | tr -cd [:alnum:] | head -c 32 && echo`
            
        
    
2.  Duplicate and insert the new token under the following keys if they already exist:
    
    -   `SECRET_MOUNT_POINT/SECRET_PREFIX/admin-role-creator/DEFAULT_SERVICE_ACCOUNT_TOKEN`
        
    -   `SECRET_MOUNT_POINT/SECRET_PREFIX/audit-logs-secrets/SERVICE_TOKEN`
        
    -   `SECRET_MOUNT_POINT/SECRET_PREFIX/integration-vault-postings-secrets/CORE_API_TOKEN`
        
    -   `SECRET_MOUNT_POINT/SECRET_PREFIX/payment-hub-secrets/PH_CORE_API_TOKEN`
        
    -   `SECRET_MOUNT_POINT/SECRET_PREFIX/payment-hub-secrets/WORKFLOWS_API_TOKEN`
        
    
3.  Restart all the deployments that use these secrets in Vault Core.
    

The steps to restart are set out as follows and require the following tools to be installed, and have only been tested on Linux:

-   bash
    
-   kubectl
    
-   jq
    
-   xargs
    

To find a list of deployments using this secret and which require restarting, use the following command, using your chosen Kubernetes namespace instead of `$VAULT_NAMESPACE`:

You can restart these using: [kubectl rollout restart](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#-em-restart-em-).

This is an example script that finds all deployments affected and restarts them:

The `SECRET_MOUNT_POINT` and `SECRET_PREFIX` can be found in the values.yaml file in `secrets_management.hashicorp_vault.secret_mount_point` and `secrets_management.hashicorp_vault.secret_prefix` respectively.

4.  Finally, in order to scale the workflow deployments back up, scale the workflow deployments back to their original state, use the following commands, replacing with the number of replicas each deployment had before they were scaled down.
    

## [](#workflows_2 "Copy link to heading")Workflows

Use the **Workflows** area to build, test and manage Workflow Definitions and their versions.

### [](#workflow_definitions "Copy link to heading")Workflow definitions

The **Workflow definitions** screen lets you:

-   View, create and edit Workflow Definitions and versions
    
-   Instantiate default Workflow Definition versions
    
-   Set or edit the resources (areas of Operations Dashboard) that a Workflow is instantiated from
    
-   Disable Workflow Definitions
    

#### [](#creating_a_workflow_definition_or_version "Copy link to heading")Creating a Workflow Definition or version

1.  In the Operations Dashboard, navigate to **Workflows** > **Workflow definitions**.
    
2.  Click the **Actions** button and select **Create workflow definition** to display the **Create new workflow definition or version** screen.
    
3.  To:
    
    -   Create a new Workflow Definition, enter a unique ID in the **Definition ID** field
        
    -   Use an existing Workflow Definition to create a new version, enter its **Definition ID**
        
    
4.  Add the **YAML specification**. If you are updating an existing workflow definition, ensure that the version in the specification is higher than any existing version of that workflow definition.
    
5.  In the **Instantiate from resource** section, use the checkboxes to select/edit any resources (areas of Operations Dashboard) that you want this Workflow Definition to be instantiated from. For more information about these locations, see [Instantiation config](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#instantiation_config).
    
6.  Click **Create definition**/Create version.
    

#### [](#viewing_workflow_definition_details "Copy link to heading")Viewing Workflow Definition details

1.  In the Operations Dashboard, navigate to **Workflows** > **Workflow definitions**.
    
2.  Click the Workflow Definition’s link in the **Definition ID** column to display the **Definition details** screen.
    
3.  The default version of the Definition is displayed. Optionally, select an alternative Definition version to view by clicking the **Viewing version** dropdown.
    
    The **Specification** tab of the selected Definition version displays a summary of the version and its YAML specification.
    
4.  Click the **Graph** tab to display a visualisation of the states and transitions in the Workflow Definition version.
    
5.  Click the **Instances** tab to display a list of the instances that were instantiated from the Workflow Definition version. From here you can click the **Process ID** to see more details.
    
6.  Click the **Instantiation config** tab to view any current resources (areas of Operations Dashboard) that the Workflow Definition version can be instantiated from.
    
7.  If any resources are enabled you can click the link to view the resource in **Instantiation config**, where you can see all Workflow Definitions available from this resource. For more information about resource locations, see [Instantiation config](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#instantiation_config).
    

#### [](#editing_instantiation_locations "Copy link to heading")Editing instantiation locations

1.  In the Operations Dashboard, navigate to **Workflows** > **Workflow definitions**.
    
2.  Click the Workflow Definition’s link in the **Definition ID** column to display the **Definition details** screen.
    
3.  Optionally, select an alternative Definition version to edit by clicking the **Viewing version** dropdown.
    
4.  Click the **Instantiation config** tab.
    
5.  Click the **Edit config** link to display the **Edit instantiation config** dialogue.
    
6.  Edit the locations (resources) that this Workflow Definition version can be instantiated from using the checkboxes. For more information about these locations, see [Instantiation config](/vault-core/5-9/EN/reference/core_apps_and_operations_dashboard/ops_dashboard#instantiation_config).
    
7.  Click **Update config** to save your changes.
    

#### [](#instantiating_a_workflow_definition "Copy link to heading")Instantiating a Workflow Definition

1.  In the Operations Dashboard, navigate to **Workflows** > **Workflow definitions**.
    
2.  Click in the **Actions** column for the Workflow Definition you want to instantiate.
    
3.  Select **Instantiate default version** from the dropdown.
    

chat\_bubble

Alternatively, while viewing a Workflow Definition you can select **Instantiate default version** from the Actions dropdown.

##### [](#disabling_a_workflow_definition "Copy link to heading")Disabling a Workflow Definition

1.  In the Operations Dashboard, navigate to **Workflows** > **Workflow definitions**.
    
2.  Click in the **Actions** column for the Workflow Definition you want to instantiate.
    
3.  Select **Disable workflow definition** from the dropdown.
    

chat\_bubble

Alternatively, while viewing a Workflow Definition you can select **Disable workflow definition** from the Actions dropdown menu.

### [](#core_workflows "Copy link to heading")Core Workflows

Core Workflows are a subset of Workflows which are used for various processes in the Operations Dashboard. They are provided as CLU packs which should be applied following Vault installation. If the Core Workflows do no exist on your environment please contact the team who installed Vault.

#### [](#list_of_core_workflows "Copy link to heading")List of core Workflows

error

Several Core Workflows are *deprecated* as of Vault Core *2.8.0* and will be removed no earlier than *Vault Core version 4.0.0*. These deprecated Workflows are indicated in the following table.

  
| Workflow ID | Display name | Deprecated? |
| --- | --- | --- |
| 
CORE\_ADD\_CONTRACT\_TEMPLATE

 | 

Add a product

 | 

No

 |
| 

CORE\_UPGRADE\_CONTRACT\_TEMPLATE

 | 

Upgrade product

 | 

No

 |
| 

CORE\_UPDATE\_PRODUCT\_PARAMETER\_VALUES

 | 

Update Product Parameters

 | 

No

 |
| 

CORE\_TECHNICAL\_SUPPORT

 | 

Technical Support

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_WORKFLOW\_CALLBACK\_SUPPORT

 | 

Workflow Callback Technical Support

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_STUB\_KNOW\_YOUR\_CUSTOMER

 | 

Know Your Customer

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_ONFIDO\_KNOW\_YOUR\_CUSTOMER

 | 

Onfido KYC

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_CUSTOMER\_DETAILS\_CHANGED

 | 

Customer details changed

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_ONFIDO\_WATCHLIST\_CHECK

 | 

Onfido Watchlist Check

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_CHANGE\_DETAILS\_ON\_BEHALF\_OF\_CUSTOMER

 | 

Change customer details on behalf of customer

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |
| 

CORE\_CONTRACT\_SCHEDULE\_EXECUTION\_FAILURES

 | 

Handle contract schedule execution failures

 | 

Yes, to be removed no earlier than Vault version 4.0.0

 |

#### [](#viewing_a_core_workflow "Copy link to heading")Viewing a Core Workflow

1.  In the Operations Dashboard, navigate to **Workflows** > **Core workflows**.
    
2.  Click the **Workflow ID** of the Workflow you want to view.
    

#### [](#changing_the_default_version_of_a_core_workflow "Copy link to heading")Changing the default version of a Core Workflow

1.  In the Operations Dashboard, navigate to **Workflows** > **Core workflows.**
    
2.  Click the **Workflow ID** of the Workflow you want to change the version of. The default version is displayed above the specification.
    
3.  Click the version button to display the **Select workflow version** window.
    
4.  Click the link for the version number you want to change.
    
5.  Click the **Set as default** button above the specification.
    

### [](#instantiation_config "Copy link to heading")Instantiation config

The **Instantiation configuration** screen lets you manage the Workflows that can be instantiated from each resource. Resources relate to areas of the Operations Dashboard, where Workflow instantiation is referred to as **Starting a process**.

chat\_bubble

You should use **Instantiation config** to assign your tag-based Workflows to resources.

#### [](#editing_instantiation_resources "Copy link to heading")Editing instantiation resources

1.  In the Operations Dashboard, navigate to **Workflows** > **Instantiation config**.
    
2.  Click the dropdown of a required resource to display the assigned Workflow Definitions.
    
3.  Click **Edit config** to display the **Edit instantiation config** dialogue.
    
4.  Edit the Workflow Definitions assigned to this resource using the **Filter** or checkboxes.
    
    chat\_bubble
    
    You can also remove assigned Workflow Definitions at the top by clicking the \`**x**' (cross icon).
    
5.  Click **Update config** to save your changes.
    

#### [](#how_resources_relate_to_the_operations_dashboard "Copy link to heading")How resources relate to the Operations Dashboard

 
| Resource | Operations Dashboard page location |
| --- | --- |
| 
Customers list

 | 

Any customer search page, for example `/customers/details`

 |
| 

Customer

 | 

`/customers/[customer_id]/summary`

 |
| 

Customer accounts list

 | 

The **Customer accounts** panel at `/customers/[customer_id]/summary`

 |
| 

Customer account

 | 

`/customers/[customer_id]/[account_id]`

 |
| 

Transactions list

 | 

The **Transactions** section of a customer’s **History** tab at `/customers/[customer_id]/history/transactions`

 |
| 

Transaction

 | 

`/customers/[customer_id]/history/transactions/[transaction_id]`

 |
| 

Restriction sets list

 | 

The **Restriction set definitions** list at `/organisation-management/restrictions/definitions`

 |
| 

Restriction set

 | 

The **Active restriction sets** panel at `/customers/[customer_id]/summary`

 |
| 

Flags list

 | 

The list of Flag definitions at `/organisation-management/flags/definitions`

 |
| 

Flag

 | 

The **Customer flags** panel at `/customers/[customer_id]/summary`

 |
| 

Products list

 | 

`/products/product-management`

 |
| 

Product

 | 

`/products/product-management/[product_id]/detail`

 |
| 

Product version

 | 

`/products/product-management/[product_id]/versions/[version_id]/detail`

 |
| 

Processes

 | 

`/processes`

 |
| 

Payments list

 | 

`/ledgers/payment-ledger`

 |
| 

Payment

 | 

`/ledgers/payment-ledger/[payment_id]`

 |
| 

Internal accounts list

 | 

`/internal-accounts/all-internal-accounts`

 |
| 

Internal account

 | 

`/internal-accounts/all-internal-accounts/[account_id]`

 |
| 

Roles list

 | 

The list of roles at `/organisation-management/roles`

 |