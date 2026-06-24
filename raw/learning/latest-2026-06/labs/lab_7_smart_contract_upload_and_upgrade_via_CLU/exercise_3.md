---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_7_smart_contract_upload_and_upgrade_via_CLU/exercise_3"
title: "Exercise 3 - Creating Internal Accounts"
scraped_at: "2026-06-17T15:58:45.950Z"
images: 0
---

# Exercise 3 - Creating Internal Accounts

The Basic Deposit Smart Contract requires an internal account to be set up. Internal accounts are used within Vault for business to keep track of the business operational balance in terms of income or expenditure. Internal accounts do not contain any logic as they are used to to support double-entry bookkeeping.

In the previous exercises, you would have observed that the following steps are performed:

1.  Define **Smart Contract** (`basic_deposit.py`)
    
2.  Generate **Resource file** referencing Smart Contract and other required fields (`basic_deposit_contract.resource.yaml`). This file is used to create a **product**.
    
3.  Generate **Resource files** for the parameter resources used by the Smart Contract.
    
4.  Add all the resource file IDs to the Manifest file (`basic_deposit_manifest.yaml`). During CLU import and validate, this file is used to look for the referenced resources within the subdirectory.
    

For this Smart Contract, we need to generate two internal accounts. In this exercise, we go through the steps to instruct the CLU to create these accounts .

## [](#create_the_first_internal_account "Copy link to heading")Create the first internal account

### [](#product_definition "Copy link to heading")Product Definition

We can directly create the Internal Account resources through a CLU resource type `ACCOUNT`, which itself corresponds to the `v2/accounts` Core API endpoints. \[[1](#_footnotedef_1 "View footnote.")\]

### [](#internal_account_resource_creation "Copy link to heading")Internal Account Resource Creation

Create a `deposit_bonus_payout_int_account.resource.yaml` resource file.

This resource file should be have the following fields:

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 25%;"> <col style="width: 25%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock">Field name</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Field Value</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Description</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>type</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>ACCOUNT</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Inform Vault to create account Account</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>id</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>deposit_bonus_payout_int_account</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Configuration ID</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>vault_id</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>deposit_bonus_payout_int_account</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">ID of the resource in Vault</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>on_conflict</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>SKIP</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">What action to take if a resource with the same ID already exists in Vault</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>payload</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Core API fields of <code>v2/accounts</code> required to create the Internal Account.</p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The <code>type</code> should be <code>ACCOUNT_TYPE_INTERNAL</code>. The <code>tside</code> should match the desired <a href="/vault-core/latest/EN/reference/balances#debits_credits_and_t_side" class="data-astro-reload" data-astro-reload="">T-Side</a> of the internal account.</p></td></tr></tbody></table>

Your file should look like this:

Put the newly created file into the `smart_contract_tutorials/library/internal_accounts` folder to organise all internal accounts neatly.

Next, update the `basic_deposit_manifest.yaml` file to reference the `deposit_bonus_payout_int_account` resource:

## [](#create_the_second_internal_account_resource "Copy link to heading")Create the second Internal Account resource

We now need to create an Internal Account resource for the other Internal Account required by the Basic Deposit Smart Contract, the `Interest Paid Internal Account`. This can be done following very similar steps to the creation of the `Deposit Bonus Payout Internal Account` above. A resource.yaml file for this second internal account needs to be created at `smart_contract_tutorials/library/internal_accounts/interest_paid_int_account.resource.yaml`. The `basic_deposit_manifest.yaml` file also needs to be updated with the resource ID of the new internal account.

### [](#run_clu_command_and_expected_result "Copy link to heading")Run CLU Command and expected result

Now that the two Internal Account resources have been added, run the CLU `import` command to upload your product, parameter and internal account resources to the Vault environment. It is also advisable to run the `validate` command before that and check that validation is successful.

Example:

Expected Result:

-   Your terminal should show the following words at the end: `"status":"SUCCESS"`
    
-   Any other error message would mean that resource or manifest files are not properly defined. You would need to investigate and fix this issue.
    

After successfully importing the internal accounts, you can verify within Operations Dashboard that the two new Internal Accounts have been created under **Internal accounts**.

#### [](#sub_exercise_create_a_new_account "Copy link to heading")Sub-exercise: Create a new account

As in Exercise 2, create a new account using the Core API. Verify within the Operations Dashboard that your account creation is successful. You should check the following:

1.  Account balance for `DEFAULT` balance should match the opening bonus
    
2.  There should be a single posting that has been accepted by Vault
    

Repeat this again to create another account.

Take note of the Account IDs created from this step as we will be using them in subsequent exercises.

* * *

[1](#_footnoteref_1). Since Vault 5.x, there is no need to create a separate product definition to use with an Internal Account.