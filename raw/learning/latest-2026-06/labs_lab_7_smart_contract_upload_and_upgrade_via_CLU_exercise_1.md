---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_7_smart_contract_upload_and_upgrade_via_CLU/exercise_1"
title: "Exercise 1 - Importing New Product"
scraped_at: "2026-06-17T05:19:51.947Z"
images: 0
---

# Exercise 1 - Importing New Product

Open the `smart_contract_tutorials/library/basic_deposit/basic_deposit.py` file in your IDE. This contains a working Smart Contract which you would have used as a base in your previous labs. Our aim in this exercise is to try to upload this Smart Contract to a real instance of Vault.

To include your name in the relevant resource IDs, you need to make minor modifications to the parameter IDs used in the Basic Deposit Smart Contract at `smart_contract_tutorials/library/basic_deposit/basic_deposit.py`. Near the top of the Smart Contract you need to change the strings used for the parameter IDs as follows:

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>Original ID</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>New ID</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>denomination</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_denomination</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>maximum_balance_limit</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_maximum_balance_limit</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>interest_rate</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_interest_rate</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>deposit_bonus_payout_internal_acc</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_deposit_bonus_payout_internal_acc</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>interest_paid_internal_acc</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_interest_paid_internal_acc</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>opening_bonus</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_opening_bonus</code></p></td></tr></tbody></table>

## [](#configuration_layer_utility_clu "Copy link to heading")Configuration Layer Utility (CLU)

Previously you have uploaded products via API in the *Basic Smart Contract Tutorial*. We highly recommend relying on the CLU to perform the upload as the steps and configuration have been codified which allows for consistent upload with a single command. For more complicated Smart Contracts, uploading products via API requires multiple calls with different parameters such as [product-versions](/vault-core/latest/EN/api/core_api#_core_api_v1_products_ProductVersion_CreateProductVersion), [flags](/vault-core/latest/EN/api/core_api#_core_api_v1_flags_Flag_CreateFlag), [accounts](/vault-core/latest/EN/api/core_api#_core_api_v2_accounts_Account_CreateAccount), etc.

## [](#define_clu_config_pack "Copy link to heading")Define CLU config pack

A configuration pack represents one self-contained logical unit of a configuration layer. It consists of a manifest file and a collection of resource files. You can refer to the [CLU Release User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide) document for the fields used in the config pack.

### [](#write_resources_yaml_files "Copy link to heading")Write .resource(s).yaml files

YAML resource files are read by the CLU, where each YAML file defines one or more Vault configuration resource definitions. These files may be placed within the same directory or subdirectory of the *manifest file* (which is explained below).

Resource files can be given any name but must have suffix `.resource.yaml` or `.resources.yaml` for single or multiple resource definitions respectively.

#### [](#define_basic_deposit_resource_file "Copy link to heading")Define Basic Deposit resource file

First, we will define the basic deposit product resource file under `smart_contract_tutorials/library/basic_deposit/basic_deposit_contract.resource.yaml`.

The resource **type** should be `SMART_CONTRACT_VERSION`. Remember to include your name in the **product\_id** string to allow us to identify you as the Vault user and ensure that no other Vault user has used the same ID. The product\_id string for this resource file should look like `YOUR_NAME_HERE_basic_deposit_contract`.

For the payload values in the resource file, you therefore need to define the following:

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 50%;"> <col style="width: 50%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>display_name</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>Basic Deposit Account</code> <sup class="footnote">[<a id="_footnoteref_1" class="footnote" href="#_footnotedef_1" title="View footnote.">1</a>]</sup></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>code</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Reference to the Basic Deposit Smart Contract external file which resides in the same directory <code>'@{basic_deposit.py}'</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>product_id</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>YOUR_NAME_HERE_basic_deposit_contract</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>params</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The parameters that are defined within the Basic Deposit Smart Contract i.e. <code>denomination</code>.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>migration_strategy</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><code>PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION_APPLY_NEW_USERS</code></p></td></tr></tbody></table>

#### [](#write_manifest_file "Copy link to heading")Write manifest file

A manifest file represents an entry point to a configuration pack. It lists all configuration resources associated with the configuration pack. All resource IDs within a configuration pack must be unique and all resources must be located in the same folder, or in a subfolder.

You should define the manifest in a `smart_contract_tutorials/library/basic_deposit_manifest.yaml` file with the following code.

The `basic_deposit_contract` resource\_id is what was defined in the `basic_deposit_contract.resource.yaml` file **id** earlier.

## [](#uploading_product_using_the_clu "Copy link to heading")Uploading Product using the CLU

### [](#setting_up_the_clu "Copy link to heading")Setting Up the CLU

For both Linux and Mac platforms you can download the latest CLU from the Vault Portal [here](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#download_the_configuration_layer_utility).

Create a new `CLU` folder in your working directory.

For Mac CLU binaries, you would be supplied with a `.dmg` file. Double click on file and drag the file starting with `clu-darwin-amd64` to the `CLU` folder.

Create a config file under `CLU/config.yaml` and make sure the below config is included:

For all CLU commands, you can point to this config with the following flag: `--config=<folder_path>/CLU/config.yaml` To authenticate the API requests we recommend using a JSON Web Token (JWT). There is a `jwt` flag that can be specified with CLU requests using `--jwt {jwt-token}`. Alternatively, the `CLU_JWT` environment variable can be used to store the JWT.

### [](#clu_validate_command "Copy link to heading")CLU Validate Command

We will be running the validate command to read all resources from the `basic_deposit_manifest.yaml` file you have defined earlier. This validates the resource file `basic_deposit_contract.resource.yaml`.

Format:

Example:

Expected result:

### [](#clu_import_command "Copy link to heading")CLU Import Command

We will be running the following command to upload the Basic Deposit product into Vault:

Format:

Example:

You should see the following response on the command line:

As stated in the failure message, the upload of the Smart Contract version to Vault has failed because the parameter resources do not exist in the Vault instance. In the next exercise this issue will be resolved by creating the parameter resources using the CLU.

#### [](#troubleshooting "Copy link to heading")Troubleshooting:

If you face an issue running the executable, it could be due to a lack of permissions. Add executable permissions to the CLU file by running this command:

* * *

[1](#_footnoteref_1). or a value that is easily identifiable within Operations Dashboard