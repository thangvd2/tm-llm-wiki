---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_2_consuming_kafka_events_via_streaming_APIs/exercise-2"
title: "Exercise 2 - Streaming API for Accounts and Balances"
scraped_at: "2026-06-17T15:57:34.407Z"
images: 0
---

# Exercise 2 - Streaming API for Accounts and Balances

There are two events that are generated when an account is created, or when an account’s instance parameters are updated in Vault Core. These events are:

-   `AccountEvent`
    
    -   `vault.core_api.v1.accounts.account.events`
        
    -   Generated when an account is created, an account status is changed, an account’s details are changed or when an account’s stakeholders field is updated
        
    
-   `AccountUpdateEvent`
    
    -   `vault.core_api.v1.accounts.account_update.events`
        
    -   Generated when an account update resource is created. This would be created in order to update an account’s instance level parameters.
        
    

## [](#sub_exercise_1_creating_and_managing_an_account "Copy link to heading")Sub-exercise 1 - Creating and managing an Account

1.  Create an Account using a `POST` request to the accounts `/v1/accounts` endpoint.
    
2.  Listen to the `vault.core_api.v1.accounts.account.events` endpoint and observe the event emitted. \[[1](#_footnotedef_1 "View footnote.")\]
    

chat\_bubble

There is no need to use any one particular Product for this sub-exercise, a minimal one will do. However, make sure it has at least one Instance-level Parameter.

### [](#update_the_instance_parameters_of_an_account_and_view_the_results "Copy link to heading")Update the Instance Parameters of an account and view the results

1.  Update an account’s instance level parameters by creating an AccountUpdate resource using a POST to the `/v1/account-updates` endpoint.
    
2.  Listen to the `vault.core_api.v1.accounts.account_update.events` endpoint and observe the event emitted. \[[2](#_footnotedef_2 "View footnote.")\]
    

### [](#update_the_status_of_an_account_to_closed "Copy link to heading")Update the status of an account to closed

1.  Take an existing open account on Vault, and update the account’s status to closed using a PUT call to the `/v1/accounts/{account.id}` endpoint.
    
2.  Listen to the `vault.core_api.v1.accounts.account.events` endpoint and observe the event emitted. \[[3](#_footnotedef_3 "View footnote.")\]
    

## [](#core_streaming_api_balances "Copy link to heading")Core Streaming API Balances

Balances change in accounts as a result of postings that have been made against a particular balance address. Within Vault, there is an event emitted each time a customer’s current balance changes. This event is

-   `AccountBalanceEvent`
    
    -   `vault.core_api.v1.balances.account_balance.events`
        
    -   Generated whenever a customer’s current balance changes and provides a view of the total state of the live balance.
        
    

## [](#sub_exercise_2_make_a_posting_and_observe_the_balance_changes "Copy link to heading")Sub-exercise 2 - Make a Posting and Observe the Balance Changes

1.  Using an existing account, make a posting from an Internal Account to the Customer’s Account. Use the endpoint `/v1/posting-instruction-batches` POST in order to create a posting into the account. Examples are included in the Postman Collections provided.
    
2.  Listen to the `vault.core_api.v1.balances.account_balance.events` endpoint and observe the changes in the accounts balances \[[4](#_footnotedef_4 "View footnote.")\]
    

## [](#sub_exercise_3_using_v2_accounts "Copy link to heading")Sub-exercise 3 - Using v2 Accounts

**Accounts version 2** presents the latest account features available in Vault 5. For more information, see [Accounts version 2](/vault-core/latest/EN/reference/accounts/accounts_version_2).

### [](#create_an_internal_account "Copy link to heading")Create an Internal Account

1.  Create an Internal Account using a `POST` request to the accounts `/v2/accounts` endpoint.
    
2.  Listen to the `vault.core_api.v2.accounts.account.events` endpoint and observe the event emitted. \[[5](#_footnotedef_5 "View footnote.")\]
    

### [](#create_a_customer_account "Copy link to heading")Create a Customer Account

1.  Create a Customer Account using a `POST` request to the accounts `/v2/accounts` endpoint. The `wallet` product from the Inception Product Library is a good example product to use.
    
    1.  An example request that could be adapted:
        
    

```
{
    "request\_id": "{{$guid}}",
    "account": {
        "id": "<A-NEW-ACCOUNT-ID>",
        "type": "ACCOUNT\_TYPE\_CUSTOMER",
        "smart\_contract\_version\_id": "<PRODUCT-VERSION-ID>",
        "stakeholder\_ids": \[
          "<CUSTOMER-ID>"
        \],
        "alias": "<AN-ACCOUNT-ALIAS>",
        "status": "ACCOUNT\_STATUS\_OPEN",
        "permitted\_denominations": \[
            "GBP"
        \]
    },
    "create\_options": {
        "parameter\_values": {
            "customer\_wallet\_limit": {
                "decimal\_value": "1000"
            },
            "denomination": {
                "string\_value": "GBP"
            },
            "nominated\_account": {
                "account\_id\_value": "1"
            },
            "daily\_spending\_limit": {
                "decimal\_value": "500"
            },
            "additional\_denominations": {
                "string\_value": "\[\\"USD\\"\]"
            }
        }
    }
}
```

1.  The PRODUCT-VERSION-ID can be obtained in the Operations Dashboard:
    

`[https://ops.<YOUR-ENVIRONMENT-URL>.tmachine.io/products/product-management/wallet/versions](https://ops.\<YOUR-ENVIRONMENT-URL\>.tmachine.io/products/product-management/wallet/versions)`

1.  Listen to the `vault.core_api.v2.accounts.account.events` endpoint and observe the event emitted. \[[6](#_footnotedef_6 "View footnote.")\]
    

### [](#close_a_customer_account "Copy link to heading")Close a customer account

1.  Take the existing open customer account, and update the account’s status to closed using a PUT call to the `/v2/accounts/{account.id}` endpoint.
    
2.  Listen to the `vault.core_api.v2.accounts.account.events` endpoint and observe the event emitted. \[[7](#_footnotedef_7 "View footnote.")\]
    

* * *

[1](#_footnoteref_1). TH: Take the second to last letter of the 3rd key of the json.

[2](#_footnoteref_2). TH: There will be 2 events on the topic from this 1 update. Take the 5th to last char of the status that is NOT equal to `STATUS_COMPLETED`.

[3](#_footnoteref_3). TH: Take the key below "accounting", what is the 4th letter?

[4](#_footnoteref_4). TH: The 5th letter of the 4th key.

[5](#_footnoteref_5). TH: Complete the key starting `parameter_value_` and take the 12th char.

[6](#_footnoteref_6). TH: 3rd to last letter of the 4th key.

[7](#_footnoteref_7). TH: 2nd to last letter of the last key.