---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/how_to_guides/how_to_upload_smart_contracts"
title: "How do I upload Smart Contracts?"
scraped_at: "2026-06-17T05:20:40.419Z"
images: 0
---

# How do I upload Smart Contracts?

## [](#introduction "Copy link to heading")Introduction

An inevitable step when it comes to the development of financial products is uploading them to an instance of Vault.

In the first initial, exploratory, stages of development, you may want to keep uploading as simple as possible, but in a more mature development setup, you may also want to run your Smart Contract code through a full CI/CD suite, including automated testing, automatic revision numbering and PR reviews.

In this guide we’ll go over three general approaches, in order to help you determine what is best for your use case. The three approaches are via as follows:

-   The Core API
    
-   The Configuration Layer Utility.
    
-   The Operations Dashboard
    

## [](#prerequisites "Copy link to heading")Prerequisites

You are familiar with the basics of Smart Contract development, and know how Products are linked to Product Versions.

You should have access to one of the following:  

-   The Core API of a Vault instance, with an authentication token to API make calls with.
    
-   The Configuration Layer Utility (known as the CLU), and access to the APIs that it’s calling.
    
-   The Operations Dashboard of a Vault instance, hereby referred to as the Ops Dash.
    

chat\_bubble

If you want to download the CLU, the tool can be downloaded from the Vault Portal: [Download the Configuration Layer Utility](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#download_the_configuration_layer_utility)

## [](#managing_smart_contracts_in_a_project "Copy link to heading")Managing Smart Contracts in a Project

When it comes to organising Smart Contract development, keeping them organised in a Git-enabled project is encouraged. With them being Python-based, Git allows for version control across teams, as well as any testing suites being placed alongside. Further along in this guide, we can also give recommendations on how to organise the project with the CLU in mind.

In addition, it’s important to note the difference between Product and Product versions. One product, for example a Savings Account, may have many Product Versions associated with it. In order to keep both the Operations Dashboard, as well as the database in Vault organised, you should only upload a new Product Version for each revision to the Product, rather than a whole new Product with an identical name. This will keep navigation for both developers and bank employees easier in the future.

Finally, as a general approach, you should only upload a new Product Version once you’re happy with the initial testing, including both Unit and Simulation tests. Minimising the amount of versions uploaded to Vault will again keep it more navigable in future. Granular changes as development happens will instead by captured by Git.

## [](#method_one_via_core_api "Copy link to heading")Method One: via Core API

This method works by sending a request to the [ProductVersion Create](/vault-core/latest/EN/api/core_api#Products-ProductVersion) endpoint of the Core API. The code is packaged as a string in the request, along with other information such as display name, product ID, supported denominations and so forth.

Many tools can be used to make API calls, including CI/CD systems, so this method can be integrated into automatic deployment of new product versions using build systems such as Jenkins. We can also use bare-bones tools for making API calls such as a curl request in a terminal, or more fleshed out tools such as Postman.

### [](#step_1_formatting_your_code "Copy link to heading")Step 1: Formatting your code

In order to send your code in the request, it requires being sent as a single string in the `code` field of the request. Therefore, characters such as quotation marks (i.e `"`) and line returns (i.e. new lines in the code) need to be 'escaped'. In practice, this means running a find and replace on your code, replacing all cases of `"` with `\"`, and all line returns with `\n`. For example, take this ultra basic smart contract:

Formatting this, this becomes:

`from contracts_api import Tside\n\napi = \"4.0.0\"\nversion = \"1.0.0\"\ntside = Tside.ASSET`

This is the string you’ll use in the `code` field of the request.

chat\_bubble

If using a CI/CD system, this kind of formatting can be easily automated via some custom scripting.

### [](#step_2_creating_the_request "Copy link to heading")Step 2: Creating the request

Now you’re ready to send the request. We’ll be using the endpoint of `/v1/product-versions POST` for this. There are quite a number of fields for this request. With our ultra-basic contract example, we’ll be creating a new product version (which as it’s a first version, will create a new product). The required fields are the following:

<table class="tableblock frame-all grid-all fit-content"><colgroup><col> <col></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>request_id</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">A unique string ID that is used to ensure the request is idempotent. Recommended to set this to a randomly generated ID, which can be done in Postman using <code>{{$guid}}.</code></p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>product_version</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The product version to be created. This is a JSON object that will have a number of child fields, such as the following.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>product_version.code</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The Smart Contract code required for the product version. We will populate this field with the formatted code as above.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>product_version.product_id</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Used as the product_id when the migration strategy is set to NEW_PRODUCT; otherwise this will add product_version to a specified product.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><code>product_version.supported_denominations[]</code></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The denominations supported by this product version.</p></td></tr></tbody></table>

For our example ultra basic contract, the body of this request will look like the following (assuming we’re using Postman for the `{{$guid}}` function):

Keep in mind that this is the minimum request that can be sent - there are many optional fields for more complicated contracts and other features. This includes fields for product version ID, display name, description, tags, setting parameters, and importantly the migration strategy.

chat\_bubble

If you’re looking to upgrade the contract with a new product version, rather than creating a whole new product, you’ll need to set the `migration_strategy` field to `PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION` or `PRODUCT_VERSION_MIGRATION_STRATEGY_ADD_VERSION_APPLY_NEW_USERS`. Otherwise the request will fail.

For full documentation on this endpoint, please consult the [Documentation Hub](/vault-core/latest/EN/api/core_api#_core_api_v1_products_ProductVersion_CreateProductVersion).

### [](#step_3_sending_the_request "Copy link to heading")Step 3: Sending the request

You’re now ready to send the request. This endpoint requires no further query parameters outside of the JSON body sent with the request.

The response will contain all of the created fields based on your request. In our example, we got the response of:

If you get an error message, it should contain enough information to fix the request.

## [](#method_two_via_the_configuration_layer_utility "Copy link to heading")Method Two: via the Configuration Layer Utility

For larger and production projects, we encourage setting up your development space to be compatible with the Configuration Layer Utility, or CLU. The CLU is a piece of software that Thought Machine has developed in order to better automate the uploading of many Smart Contracts, alongside additional resources such as parameter values, schedules and flags.

Knowledge on the CLU is quite involved by itself, so we have developed a separate How To Guide on the subject.

This How To Guide on the CLU can be found [here](/learning/latest/EN/how_to_guides/how_to_deploy_products_via_the_clu).

## [](#further_reading "Copy link to heading")Further Reading

-   [Vault Core CLU Releases](https://portal.thoughtmachine.net/group/portal/clu-releases)
    
-   [Enablement Labs, covering API usage](https://portal.thoughtmachine.net/group/portal/enablement_labs)
    

## [](#feedback "Copy link to heading")Feedback

We value your feedback. If you encounter any issues or have suggestions for improvement please [contact us.](mailto:enablement@thoughtmachine.net)

Vault 5.1