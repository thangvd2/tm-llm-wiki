---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/clu"
title: "Configuration Layer Utility (CLU)"
scraped_at: "2026-06-17T15:46:34.346Z"
images: 0
---

# Configuration Layer Utility (CLU)

Vault Payments allows defining the processing logic of payment Instructions using configuration resources. These resources are managed using standardised APIs. To ease the process of creating and maintaining configuration resources within Vault Payments the Configuration Layer Utility (CLU) tool can be used. CLU provides a convenient interface which sits between the user and the Vault Payments API. Instead of constructing and executing HTTP(S) requests to the API directly, you instead specify a collection of resources which you can then apply using CLU.

The same tool which is used for provisioning Vault Core resources can be used for provisioning Vault Payments resources. The tool is extensively documented in the [Configuration Layer Utility User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide/). This page mostly summarises the above guide and highlights the differences between provisioning Vault Payments resources and Vault Core resources.

The provisioning of Vault Payments resources is supported from the CLU version 5.5.0 onwards. CLU tool can be [downloaded](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#download_the_configuration_layer_utility) from here. It is highly recommended to read the [CLU quick reference](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#clu_quick_reference) page to understand the capabilities of the tool.

## [](#supported_resources "Copy link to heading")Supported resources

List of the supported Vault Payments resources which can be provisioned using CLU:

-   Business Day Definitions
    
-   Calendars
    
-   Card Products
    
-   Cores
    
-   Core Versions
    
-   Dashboards
    
-   Dashboard Versions
    
-   Instruction Batch
    
-   Instruction File
    
-   Instruction Flows
    
-   Instruction Flow Versions
    
-   Instruction File Specification
    
-   Instruction File Specification Versions
    
-   Integrations
    
-   Integration Versions
    
-   Parameters
    
-   Parameter Values
    
-   Rules
    
-   Rule Versions
    
-   Rule Sets
    
-   Rule Set Versions
    
-   Templates
    
-   Template Versions
    

CLU bundles are not supported for Vault Payments.

## [](#configuration_packs "Copy link to heading")Configuration packs

CLU requires a configuration pack as its input. A configuration pack represents one self-contained logical unit of a configuration and specifies all configuration resources which should be validated / imported. Configuration packs need to be homogenic in regards to provisioning resources - Vault Core and Vault Payments resources cannot be added together within a single configuration pack - separate configuration packs must be used for each.

Configuration pack consists of a `manifest file`, a collection of `resource files` and optional `external files`.

 
| File | Description |
| --- | --- |
| 
manifest.yaml

 | 

\- Input file used as an argument to CLU.  
\- Contains an allowlist of configuration pack resource IDs that are to be imported.  
\- The location of manifest.yaml defines the root directory of the configuration pack; CLU scans this directory and any of its subdirectories for resource files.

 |
| 

.resource.yaml  
.resources.yaml

 | 

\- One or more YAML files read by CLU, where each YAML file defines one or more Vault Payments configuration resource definitions.  
\- Resources may be placed in the same directory as the manifest.yaml or in any subdirectory of the manifest file.  
\- Resource files can be given any name but must have the suffix .resource.yaml (for a single resource definition) or .resources.yaml (for multiple resource definitions).

 |
| 

External

 | 

\- Any external code or markup files, such as Instruction Flow Version Python files, that can be referenced in resource definitions. Useful when a resource’s field accepts a multiline input, such as an Instruction Flow Version code field.  
\- External files must be placed in the same directory or subdirectory as the .resource.yaml or .resources.yaml file that references it.

 |

### [](#manifests "Copy link to heading")Manifests

A manifest file is a YAML file which represents an entry point to a configuration pack. It lists all configuration resources associated with the configuration pack. All configuration resource IDs within a configuration pack must be unique and all resources must be located in the same folder, or in a subfolder. Resources not defined in this list will not be provisioned, regardless of whether they are present in the directory.

The structure of a manifest file is the same for Vault Payments and Vault Core. Below table specifies the fields expected in the manifest.

 
| Field | Description |
| --- | --- |
| 
`pack_version`

 | 

The semantic version of the configuration pack. Required.

 |
| 

`pack_name`

 | 

The name of the configuration pack. The same value should be used consistently for every version of the same configuration pack. Must follow the pattern: `^[A-Za-z0-9][A-Za-z0-9 _-]*$`. Required.

 |
| 

`resource_ids`

 | 

A list of configuration resource IDs to import. Required.

 |

Example manifest.yaml file looks like below.

### [](#resource_files "Copy link to heading")Resource files

Resource files outline the specific details of resources. All resources follow the specification outlined in the [Vault Payments API documentation](/vault-payments/latest/EN/api/payments_api/).

Below table specifies the fields expected per Vault Payments resource defined in a configuration pack.

 
| Field | Description |
| --- | --- |
| 
`type`

 | 

The type of the Vault Payments configuration resource. The mapping between resource and expected type value can be found in the table below. Required.

 |
| 

`id`

 | 

The configuration pack ID of the resource. This is the ID which is referenced in the manifest.yaml file (not the resource ID in Vault Payments). Required.

 |
| 

`payload`

 | 

The Vault Payments API payload for this resource. This should be a string formatted as YAML, which is converted to JSON and sent to the relevant API endpoint. Please refer to the relevant method in the [API Documentation](/vault-payments/latest/EN/api/payments_api/) for more information. Required.

 |
| 

`on_conflict`

 | 

The action to take if the resource already exists. Possible values are:  
\- IGNORE: ignore this setting and generate an error.  
\- SKIP: retrieves the duplicate resource from Vault and continues the command without erroring.  
\- UPDATE: updates the duplicate resource with the updatable fields from the specified resource.  
Optional.

 |

The mapping between the resource name and the expected configuration type is presented in the table below (and generally follows the upper snake case format):

  
| Resource in Vault Payments API | Configuration Type | Supported actions |
| --- | --- | --- |
| 
Business Day Definition

 | 

BUSINESS\_DAY\_DEFINITION

 | 

Create

 |
| 

Calendar

 | 

CALENDAR

 | 

Create

 |
| 

Card Product

 | 

CARD\_PRODUCT

 | 

Create, Update

 |
| 

Core

 | 

CORE

 | 

Create, Update

 |
| 

Core Version

 | 

CORE\_VERSION

 | 

Create

 |
| 

Instruction Batch

 | 

INSTRUCTION\_BATCH

 | 

Create

 |
| 

Instruction File

 | 

INSTRUCTION\_FILE

 | 

Create

 |
| 

Instruction Flow

 | 

INSTRUCTION\_FLOW

 | 

Create, Update

 |
| 

Instruction Flow Version

 | 

INSTRUCTION\_FLOW\_VERSION

 | 

Create

 |
| 

Instruction File Specification

 | 

INSTRUCTION\_FILE\_SPECIFICATION

 | 

Create, Update

 |
| 

Instruction File Specification Version

 | 

INSTRUCTION\_FILE\_SPECIFICATION\_VERSION

 | 

Create

 |
| 

Integration

 | 

INTEGRATION

 | 

Create, Update

 |
| 

Integration Version

 | 

INTEGRATION\_VERSION

 | 

Create

 |
| 

Parameter

 | 

PARAMETER

 | 

Create, Update

 |
| 

Parameter Value

 | 

PARAMETER\_VALUE

 | 

Create

 |
| 

Rule

 | 

RULE

 | 

Create, Update

 |
| 

Rule Version

 | 

RULE\_VERSION

 | 

Create

 |
| 

Rule Set

 | 

RULE\_SET

 | 

Create, Update

 |
| 

Rule Set Version

 | 

RULE\_SET\_VERSION

 | 

Create

 |
| 

Template

 | 

TEMPLATE

 | 

Create, Update

 |
| 

Template Version

 | 

TEMPLATE\_VERSION

 | 

Create

 |

An example .resource.yaml file:

It is also possible to define multiple resources in one file. An example .resources.yaml file:

### [](#external_files "Copy link to heading")External files

The notation used by the CLU to find external file references is a `@{}` wrapper around the external file path (used in the `code` field of Instruction Flow Version above), relative to the location of the resource definition that references it.

Because “@” is a reserved symbol in YAML, if an external file reference is included in any of your resources, third party YAML tools may not recognise the file as valid YAML. We recommend wrapping external references in quotes as shown in the example. This will ensure that any third party YAML tools will still recognise the file as valid YAML.

### [](#integration_and_integration_version_resources "Copy link to heading")Integration and integration version resources

Integration and Integration Version resources are treated differently in CLU as they contain credentials to authenticate with external systems. For this reason Integration and Integration Version resources cannot be combined with any other resource types in the same `.resources` file (though they can be combined with each other). They also cannot reference any external files via the `@{}` notation.

## [](#commands "Copy link to heading")Commands

### [](#validate_command "Copy link to heading")Validate command

The CLU validate command can be used to validate a configuration pack and all the resource definitions it contains. During the validation process the CLU:

-   Reads all resource files from the manifest.yaml file’s directory and subdirectories.
    
-   Validates only resource files with IDs set in manifest.yaml against their corresponding Vault Payments API definitions.
    
-   Validates that the fields in the resource definition exist in the API resource definition; does not validate whether all required API fields have been specified.
    
-   Validates that the referenced external files exist.
    
-   For Instruction Flow Version resources, validates the syntax of the provided Python code.
    

### [](#import_command "Copy link to heading")Import command

The CLU import command can be used to provision all resources specified in a configuration pack and referenced by its manifest.yaml file into a Vault Payments environment. The import command will run the validate command before attempting to provision resources.

### [](#supported_command_options "Copy link to heading")Supported command options

Both import and validate commands take the same flags when working with Vault Payments resources:

  
| Command flag | Environment variable | Description |
| --- | --- | --- |
| 
`--jwt {jwt-token}`

 | 

CLU\_JWT

 | 

The JWT authentication token to access the Vault Payments API. Required.

 |
| 

`--payments-api {URL}`

 | 

CLU\_PAYMENTS\_API

 | 

The address of the Vault Payments API. Required.

 |
| 

`--nocolor`

 | 

CLU\_NOCOLOR

 | 

Removes all color from the output.

 |
| 

`--output {text or json}`

 | 

CLU\_OUTPUT

 | 

The output format for the command results.

 |
| 

`--config {filepath}`

 | 

N/A

 | 

Set the path to the file containing the CLU config. Optional.

 |

CLU supports generating output in text or JSON format which can be set using the `output` flag. For Vault Payments only the IDs of the provisioned resources will be included in the output.

For an example of creating a configuration pack and using CLU to provision it, please read the [tutorial](/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/provisioning_using_clu).

### [](#request_idempotency "Copy link to heading")Request idempotency

CLU is **idempotent**; if you import exactly the same resource twice, the second operation will have no effect, and the output will be the same as for the first request. Internally, CLU deterministically generates a request ID from the payloads of your resources and uses these in the Vault API requests. The Vault API endpoint should then return the exact same response each time the same request ID is provided. This allows you to add new resources to your existing CLU configuration packs and run them without having to delete the old resources.

However, there is a caveat to idempotency in CLU. Other tools are likely to use different request IDs, so if you import a resource with another tool (for example, hitting the APIs directly) and then add the same resource to your CLU configuration pack, you may see conflict errors. In this case, Vault returns a 409 error code on conflict. You can define the behaviour of CLU when encountering resource conflicts by setting the desired `on_conflict` parameter.