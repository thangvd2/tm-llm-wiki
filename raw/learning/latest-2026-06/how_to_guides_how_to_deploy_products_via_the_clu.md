---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/how_to_guides/how_to_deploy_products_via_the_clu"
title: "How can I use the CLU to deploy products?"
scraped_at: "2026-06-17T05:20:35.372Z"
images: 0
---

# How can I use the CLU to deploy products?

## [](#introduction "Copy link to heading")Introduction

The Configuration Layer Utility (CLU) is the utility for applying Configuration Layer resources into Vault. In this guide we will focus on using the CLU to upload a Product, and how this process can be automated as part of a CI/CD pipeline.

## [](#prerequisites "Copy link to heading")Prerequisites

In order to follow this guide you will need a product ready to upload and the CLU binaries, available on the Enablement Portal [here](https://portal.thoughtmachine.net/group/portal/clu-releases).

## [](#method_one_uploading_a_product_using_the_configuration_layer_utility "Copy link to heading")Method One: Uploading a product using the Configuration Layer Utility

### [](#step_1_defining_the_resource "Copy link to heading")Step 1: Defining the resource

To use the CLU to apply Configuration Layer content you will need to have a `resource.yaml` file written for each configuration resource you are looking to upload. These resource files can then be bundled as part of a manifest file so that we can upload everything required for a Product (or group of Products) with one command.

In the following example, we are defining a loan from the product library. The payload section specifies the content of the API request required to create this resource. In this case, as we are uploading a smart contract the content of the payload refers to the fields in a ProductVersion create request.

**Example Resource file content**

The `@{}` used in the code field is a special CLU notation that can be used to reference external files. In the above case, we use it to refer to the smart contract file.  
Similarly in the above example, we have cases where internal accounts have to be set up before the product can be uploaded. In order to enforce this dependency we wrap the value for the internal account name in `&{}` and include the internal account resource as part of the manifest file (see next section)

### [](#step_2_defining_a_manifest "Copy link to heading")Step 2: Defining a Manifest

A manifest file represents an entry point to a configuration pack. It lists all configuration resources associated with the configuration pack. All resource IDs within a configuration pack must be unique and all resources must be located in the same folder, or a subfolder. When using manifest files with the CLU we don’t need to worry about forgetting a resource or the dependencies between resources, which is handled automatically.

**Example Manifest file content**

In the above example notice how other resources such as flags or account schedule tags are being defined. Each of these resources will have it’s own resource file.

### [](#step_3_validating_using_the_configuration_layer_utility "Copy link to heading")Step 3: Validating using the Configuration Layer Utility

In addition to uploading configuration layer content, the Configuration Layer Utility (CLU) can also perform manifest file setup validation using the validate command. This command will:

-   Read all resource files
    
-   Verify that the IDs assigned to resources in the `manifest.yaml` file align with the corresponding IDs in the Vault API resources.
    
-   Confirm the presence of fields defined in the resource files within the corresponding Vault API resources.
    
-   Ensure that any dependencies in the resource files refer to existing configuration resources, and reference valid fields within those resources.
    

Running the command is just a case of executing the CLU binary specifying validate:

The output of this command on the product library loan is shown below. As you can see each of the resources has been successfully validated, and we can proceed with attempting to upload the contract.

**Example Validate output**

### [](#step_4_importing_via_the_configuration_layer_utility "Copy link to heading")Step 4: Importing via the Configuration Layer Utility

Importing resources defined in a manifest is a case of running the below command. Ensure that you are providing any API address needed and an auth token. The below example shows how the loan product can be uploaded to the Public Sandbox.

The CLU will now start to upload your configuration later content.

## [](#method_two_using_the_configuration_layer_utility_as_part_of_your_continuous_integration_continuous_delivery_pipeline "Copy link to heading")Method Two: Using the Configuration Layer Utility as part of your Continuous Integration, Continuous Delivery pipeline.

One of the benefits of using the CLU provides is that it can be easily integrated into a CI/CD pipeline.

### [](#step_one_configuration_layer_utility_and_continuous_integration "Copy link to heading")Step One: Configuration Layer Utility and Continuous Integration

A typical setup for developing on Vault might consist of a code repository containing configuration layer content, relevant tests, and all the required resource and manifest files for the configuration content. Alongside this repo we might have environments set up for developing and testing.

As developers make changes to the configuration layer content in a development environment. The CLU allows us to package up the codebase and quickly deploy it to a new environment, perhaps for end to end testing. This can be automated, and once we are happy with testing we know that the same package deployed to the testing environment can be deployed to a pre-production environment without the configuration changing.

In the simplest case, the command used earlier to import via the CLU can be used inside a Jenkins pipeline to import products.

### [](#step_two_deployment_tools_as_part_of_the_inception_sdk "Copy link to heading")Step Two: Deployment tools as part of the Inception SDK

As part of the Inception SDK, Thought Machine has included a Python wrapper tool to help with the deployment of the Product Library. You can find this script at \`inception\_sdk/tools/deployment\_utils/deployment\_utils.py. Additional features that can be accessed through this tool include auto-activation of workflow versions after deployment, managed environment config and more.

## [](#further_reading "Copy link to heading")Further Reading

To learn more about the CLU read through the [user guide.](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/infrastructure_and_installation_guides/configuration_layer_utility_user_guide/)

To download the Product Library, complete with resource files and manifests, you can do so [here](https://portal.thoughtmachine.net/group/portal/marketplace-product-library)

## [](#feedback "Copy link to heading")Feedback

We value your feedback. If you encounter any issues or have suggestions for improvement please [Contact us](mailto:enablement@thoughtmachine.net).