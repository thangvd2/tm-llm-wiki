---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_7_smart_contract_upload_and_upgrade_via_CLU/exercise_2"
title: "Exercise 2 - Creating Parameters"
scraped_at: "2026-06-17T05:19:53.794Z"
images: 0
---

# Exercise 2 - Creating Parameters

The Basic Deposit Smart Contract defined in the `smart_contract_tutorials/library/basic_deposit/basic_deposit.py` file requires six parameter resources:

-   "Denomination"
    
-   "Maximum Balance Limit"
    
-   "Interest Rate"
    
-   "Deposit Bonus Payout Internal Account"
    
-   "Interest Paid Internal Account"
    
-   "Opening Bonus"
    

As observed in the previous exercise, the resources for these three parameters need to be successfully created on the instance of Vault before the product resource can be created. In this exercise, we create the CLU files necessary to upload the parameter resources to Vault.

### [](#write_resources_yaml_files "Copy link to heading")Write .resource(s).yaml files

We will define three resource.yaml files, one for each expected parameter in the Basic Deposit Smart Contract. They will be located in the `smart_contract_tutorials/library/basic_deposit/parameters` directory.

#### [](#define_parameter_resource_for_deposit_bonus_payout_internal_account "Copy link to heading")Define parameter resource for Deposit Bonus Payout Internal Account

First, we will define the "Deposit Bonus Payout Internal Account" parameter. This parameter will be used to store the ID of the internal account used in the initial bonus payment triggered by the Smart Contract. We will name the resource file `bonus_int_acc_param.resource.yaml`.

The resource **type** should be `PARAMETER` and the **id** should be `bonus_int_acc_param`. The `payload.parameter.id` value in the resource payload needs to match the ID of the parameter referenced in the Smart Contract. As mentioned in Exercise 1, we ask you to include your name in this ID so it is unique in the Vault environment. We are also able to track your progress through the exercises if you use your name in the ID. The full YAML file should look as follows:

#### [](#define_other_parameter_resources "Copy link to heading")Define other parameter resources

Next, you need to define the resources for the other five parameters that are needed by the Smart Contract:

-   "Denomination"
    
-   "Maximum Balance Limit"
    
-   "Interest rate"
    
-   "Interest Paid Internal Account"
    
-   "Opening Bonus"
    

You should do so in a similar manner to the "Deposit Bonus Payout Internal Account" parameter, creating five new files (e.g. `interest_paid_int_acc_param.resource.yaml` and `opening_bonus_param.resource.yaml`) in the `parameters` directory. Remember, as mentioned above, to include your name in this ID so it is unique in the Vault environment.

### [](#update_manifest_file "Copy link to heading")Update manifest file

Next, update the `basic_deposit_manifest.yaml` file with the IDs of the three new parameter resources, so that the YAML file looks like the following:

### [](#clu_validate_command "Copy link to heading")CLU Validate Command

As in Exercise 1, we run the validate command to read all resources from the `basic_deposit_manifest.yaml` file which now includes the parameter resources. Again, we use the following command:

We expect to receive a response saying that all resources have been validated successfully.

### [](#clu_import_command "Copy link to heading")CLU Import Command

We now run the CLU import command to upload both the Basic Deposit Smart Contract and also the associated parameter resources which we have now defined.

You should see a response on the command line ending with the status marked as `SUCCESS`.

Note the smart\_contract\_version\_id in the response. We’ll use that later to open an account for this product version.

You can verify that the product has been successfully imported via OpsDash. Go to **Product > Product management** and you would see your product created.

## [](#create_account_via_core_api "Copy link to heading")Create Account via Core API

Use the [Accounts API](/vault-core/latest/EN/api/core_api#_core_api_v2_accounts_Account_CreateAccount) to create an account based on the deposit product you have imported earlier. A Postman API has been supplied under apis\_tutorials/postman. You would need to define the `smart_contract_version_id` value to be the same as what you haves seen in the CLU response earlier.

Upon account creation, you should notice that the account opening bonus functionality did not execute successfully as the `DEFAULT` balance is 0.

If you scroll further down the OpsDash, you will notice that the only posting instruction batch made has been Rejected.

Let’s dive into the reason for the rejected posting. Clicking through the rejected posting instruction batch, you will notice that it is due to `ACCOUNT_VIOLATION_ACCOUNT_NOT_PRESENT`. In the next exercise, we will create the internal accounts to fix this issue and re-attempt to import the product and create a new account.