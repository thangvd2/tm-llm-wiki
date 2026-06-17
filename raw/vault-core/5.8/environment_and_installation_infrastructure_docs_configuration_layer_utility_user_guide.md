---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide"
title: "Configuration Layer Utility User Guide"
scraped_at: "2026-06-17T05:30:51.255Z"
images: 0
---

# Configuration Layer Utility User Guide

## [](#about_this_guide "Copy link to heading")About this guide

### [](#background "Copy link to heading")Background

The Configuration Layer Utility (CLU) is the utility for applying configuration layer resources into Vault Core and:

-   Automates the extraction and creation of resources, with robust, public Vault Core APIs offering consistent behaviour and greater control over created resources
    
-   Provides greater visibility of import outcomes, with these displayed for each supported resource
    
-   Uses a consistent and generic resource file format with a payload field that maps one-to-one to existing examples in the API documentation
    
-   Allows dependencies between resource fields in different resources to be referenced after import
    

### [](#about_the_configuration_layer_utility "Copy link to heading")About the Configuration Layer Utility

The Configuration Layer Utility is a Command Line Interface for configuring resources in Vault Core. CLU provides a convenient interface which sits between the user and the Vault Core APIs. Instead of constructing and executing HTTP(S) requests to the Vault Core APIs directly, you instead specify a collection of resources which you can then apply using CLU. This manages many common pain points such as external file references, resource dependencies and request validation.

### [](#vault_core_version_compatibility "Copy link to heading")Vault Core version compatibility

Before running any command, CLU checks whether it is compatible with the version of Vault Core that you are running it against. To ensure compatibility, your Vault Core version must share the same major version as CLU.

In order to allow the CLU to run it compatibility check, you must specify the Core API URL. If there is a problem with compatibility, it displays a warning message to alert you to this.

For each CLU version, use the latest patch version available.

The following table indicates which CLU versions are compatible with a given version of Vault Core.

#### [](#compatibility_between_vault_core_and_clu_versions "Copy link to heading")Compatibility between Vault Core and CLU versions

 
| Vault Core version | CLU version (use latest minor and patch version) |
| --- | --- |
| 
5.x.y

 | 

Latest CLU 5.x.y

 |
| 

4.x.y

 | 

Latest CLU 4.x.y

 |

### [](#purpose "Copy link to heading")Purpose

This document describes:

-   How to use CLU
    
-   The resources supported in CLU
    
-   How to define Vault Core resources for CLU to read
    

### [](#scope "Copy link to heading")Scope

This document applies to CLU version 5 and above.

## [](#clu_quick_reference "Copy link to heading")CLU quick reference

### [](#technical_details_and_prerequisites "Copy link to heading")Technical details and prerequisites

#### [](#clu_binary "Copy link to heading")CLU binary

-   Linux binary: clu-linux-amd64
    
-   macOS binary: clu-darwin-amd64
    

#### [](#binary_prerequisites "Copy link to heading")Binary prerequisites

CLU binary:

-   Was tested on Ubuntu 22.04-amd64 and macOS Ventura
    
-   Must be run on a machine which can access Vault Core’s APIs
    

chat\_bubble

The macOS binary is currently in a beta stage and therefore not signed. If you want to run the binary, you need to mark it as executable. MacOS Gatekeeper will also show warnings that it is not able to verify the authenticity of the binary.

### [](#command_overview "Copy link to heading")Command overview

 
| Command | Description |
| --- | --- |
| 
[import](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#import_command)

 | 

-   Validates the configuration pack
    
-   Orders the resources by type and by dependencies
    
-   Synchronously creates resources in Vault Core
    





 |
| 

[validate](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#validate_command)

 | 

-   Reads all resources files from manifest.yaml file directory
    
-   Validates that fields in resource definition exist in the API resource
    
-   Validates that dependency references are defined against configuration
    





 |

### [](#supported_global_options "Copy link to heading")Supported global options

   
| Command flag | Environment variable | Config file parameter | Description |
| --- | --- | --- | --- |
| 
`--config {filepath}`

 | 

N/A

 | 

N/A

 | 

The path to the file containing the CLU config.

 |
| 

`---nocolor`

 | 

`CLU_NOCOLOR`

 | 

`nocolor`

 | 

Removes all colour from the output.

 |
| 

`--output {text | json}`

 | 

`CLU_OUTPUT`

 | 

`output`

 | 

The output format for the command results.

 |

### [](#clu_workflow "Copy link to heading")CLU workflow

1.  Check the resources you want to use are [supported](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#resources_supported_for_import) in the CLU.
    
2.  Add new resources and/or copy each resource from the current configuration tool and [format](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#resources_yaml_fields) for the CLU.
    
3.  Add the resource IDs to [manifest.yaml](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#manifest_yaml_fields).
    
4.  Run the [validate](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#validate_command) command to check all resources are valid.
    
5.  Run the [import](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide##import_command) command to synchronously create the resources in Vault Core.
    
    This displays the status of each resource, including whether it is valid, imported or if an error is generated.
    
    When the CLU binary finishes the import, the status (SUCCESS, FAILURE or PARTIAL SUCCESS) is displayed on the screen; the binary returns an [exit code](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#exit_codes).
    

### [](#clu_configuration "Copy link to heading")CLU configuration

#### [](#configuration_methods "Copy link to heading")Configuration methods

You can configure the CLU using any combination of command line arguments, environment variables and the configuration file. The order is also important due to the precedence used. The configuration options available for each CLU command can be found in the [Commands](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#command_overview) section.

#### [](#precedence_of_configuration_methods "Copy link to heading")Precedence of configuration methods

From highest to lowest precedence:

1.  Command flag
    
2.  Environment variables
    
3.  Configuration file
    

#### [](#configuration_file_types "Copy link to heading")Configuration file types

The CLU supports configuration files written in JSON or YAML.

error

Due to security concerns, we strongly advise that you do not store the auth token in the configuration file. If you do so, please ensure that the machine the configuration file is stored on is secure and the file has the correct permissions set.

#### [](#configuration_file_example_json "Copy link to heading")Configuration file example: JSON

#### [](#configuration_file_example_yaml "Copy link to heading")Configuration file example: YAML

### [](#exit_codes "Copy link to heading")Exit codes

  
| Exit status (screen display) | Exit code | Description |
| --- | --- | --- |
| 
`SUCCESS`

 | 

0

 | 

The executed action finished successfully. All resources were imported into Vault Core.

 |
| 

`FAILURE`

 | 

1

 | 

The executed action failed. No resources were imported into Vault Core.

 |
| 

`PARTIAL SUCCESS`

 | 

2

 | 

The executed action partially succeeded. Some of the resources were not imported successfully.

 |

### [](#self_signed_certificates "Copy link to heading")Self-signed certificates

CLU can work with self-signed certificates. If you would like to use the self-signed certificates, you need to install your Certificate Authority (CA) certificates in the correct place. CLU will be able to pick these self-signed certificates automatically.

#### [](#installing_certificates_on_linux "Copy link to heading")Installing certificates on Linux

The way you install self-signed certificates depends on the platform you are using. For example, all Debian-based distributions have all system-wide certificates located in the `/etc/ssl/certificates` directory. The installation may require administrator rights - please consult your IT department.

#### [](#installing_certificates_on_macos "Copy link to heading")Installing certificates on MacOS

Installing self-signed certificates requires access to the Keychain Access app on your Macbook, and the administrator rights to modify the keychain certificates. It should be sufficient to just drag and drop them into the Keychain Access app. Consult your IT department for more details.

## [](#clu_features "Copy link to heading")CLU features

### [](#import_command "Copy link to heading")Import command

#### [](#command "Copy link to heading")Command

#### [](#supported_options_for_clu_import "Copy link to heading")Supported options for CLU import

   
| Command flag | Environment variable | Config file parameter | Description |
| --- | --- | --- | --- |
| 
`--config {filepath}`

 | 

N/A

 | 

N/A

 | 

Set the path to the file containing the CLU config.

 |
| 

`--auth-token {token}`

 | 

`CLU_AUTH_TOKEN`

 | 

`auth_token`

 | 

The auth token. Required.

**Note**: Authentication Tokens were deprecated in favour of JWT tokens as of release of 4.3, and will be removed no earlier than release 7.0.





 |
| 

`--jwt {jwt-token}`

 | 

`CLU_JWT`

 | 

`jwt`

 | 

The JWT authentication token. An alternative to the auth token.

**Note**: You must use the service account auth token if you want to interact with Workflows API resources. You can still use JWT for all other APIs. You can provide both auth tokens at the same time.





 |
| 

`--activate-on-import`

 | 

`CLU_ACTIVATE_ON_IMPORT`

 | 

`activate_on_import`

 | 

Activate resources marked with 'activate' after the import step completes successfully.

 |
| 

`--core-api {API}`

 | 

`CLU_CORE_API`

 | 

`core_api`

 | 

Set the address of the Core API. Required to determine the CLU’s compatibility with Vault Core. Required.

 |
| 

`--access-control-api {URL}`

 | 

`CLU_ACCESS_CONTROL_API`

 | 

`access_control_api`

 | 

Set the address of the Access Control API.

 |
| 

`--workflows-api {URL}`

 | 

`CLU_WORKFLOWS_API`

 | 

`workflows_api`

 | 

Set the address of the Workflows API.

 |

### [](#resources_supported_for_import "Copy link to heading")Resources supported for import

#### [](#access_control_api "Copy link to heading")Access Control API

   
| Resource Name | Configuration Type | Supported actions | Supported from CLU version |
| --- | --- | --- | --- |
| 
Data Permission

 | 

DATA\_PERMISSION

 | 

Create

 | 

1.0

 |
| 

Role Data Permission Assoc

 | 

ROLE\_DATA\_PERMISSION\_ASSOC

 | 

Create

 | 

1.0

 |
| 

Role Vault Permission Assoc

 | 

ROLE\_VAULT\_PERMISSION\_ASSOC

 | 

Create

 | 

1.0

 |
| 

Role

 | 

ROLE

 | 

Create

 | 

1.0

 |
| 

Role version 2

 | 

ROLE\_v2

 | 

Create, Update

 | 

5.5

 |

#### [](#core_api "Copy link to heading")Core API

   
| Resource Name | Configuration Type | Supported actions | Supported from CLU version |
| --- | --- | --- | --- |
| 
Account v2\[[1](#_footnotedef_1 "View footnote.")\]

 | 

ACCOUNT

 | 

Create

 | 

5.0

 |
| 

Account Schedule Tag

 | 

ACCOUNT\_SCHEDULE\_TAG

 | 

Create

 | 

1.3

 |
| 

Calendar

 | 

CALENDAR

 | 

Create

 | 

1.1

 |
| 

Calendar Event\[[2](#_footnotedef_2 "View footnote.")\]

 | 

CALENDAR\_EVENT

 | 

Create

 | 

1.1

 |
| 

Flag Definition

 | 

FLAG\_DEFINITION

 | 

Create

 | 

1.1

 |
| 

Global Parameter

 | 

GLOBAL\_PARAMETER

 | 

Create

 | 

1.3

 |
| 

Global Parameter Value

 | 

GLOBAL\_PARAMETER\_VALUE

 | 

Create

 | 

1.3

 |
| 

Internal Account

 | 

INTERNAL\_ACCOUNT

 | 

Create

 | 

1.3

 |
| 

Policy

 | 

OPA\_POLICY

 | 

Create

 | 

5.1

 |
| 

Parameter

 | 

PARAMETER

 | 

Create

 | 

5.0

 |
| 

Parameter Value

 | 

PARAMETER\_VALUE

 | 

Create

 | 

5.0

 |
| 

Parameter Value Hierarchy Node

 | 

PARAMETER\_VALUE\_HIERARCHY\_NODE

 | 

Create, Update

 | 

5.2

 |
| 

Payment Device

 | 

PAYMENT\_DEVICE

 | 

Create

 | 

1.3

 |
| 

Payment Device Link

 | 

PAYMENT\_DEVICE\_LINK

 | 

Create

 | 

1.3

 |
| 

Plan Migration\[[3](#_footnotedef_3 "View footnote.")\]

 | 

PLAN\_MIGRATION

 | 

Create

 | 

1.2

 |
| 

Postings API Client

 | 

POSTINGS\_API\_CLIENT

 | 

Create

 | 

1.3

 |
| 

Processing Group

 | 

PROCESSING\_GROUP

 | 

Create

 | 

5.2

 |
| 

Product Version\[[4](#_footnotedef_4 "View footnote.")\]\[[5](#_footnotedef_5 "View footnote.")\]

 | 

SMART\_CONTRACT\_VERSION

 | 

Create

 | 

1.0

 |
| 

Restriction Set Definition Version\[[6](#_footnotedef_6 "View footnote.")\]

 | 

RESTRICTION\_SET\_DEFINITION\_VERSION

 | 

Create

 | 

1.3

 |
| 

Schedule Tag

 | 

SCHEDULE\_TAG

 | 

Create

 | 

1.0

 |
| 

Smart Contract Module Versions Link

 | 

SMART\_CONTRACT\_MODULE\_VERSIONS\_LINK

 | 

Create

 | 

1.6

 |
| 

Supervisor Contract

 | 

SUPERVISOR\_CONTRACT

 | 

Create

 | 

1.0

 |
| 

Supervisor Contract Version

 | 

SUPERVISOR\_CONTRACT\_VERSION

 | 

Create

 | 

1.0

 |

#### [](#workflows_api "Copy link to heading")Workflows API

   
| Resource Name | Configuration Type | Supported actions | Supported from CLU version |
| --- | --- | --- | --- |
| 
Policy

 | 

POLICY

 | 

Create, Update

 | 

1.0

 |
| 

Workflow Definition Version

 | 

WORKFLOW\_DEFINITION\_VERSION

 | 

Create

 | 

1.3

 |

#### [](#edge_functions_api "Copy link to heading")Edge Functions API

   
| Resource Name | Configuration Type | Supported actions | Supported from CLU version |
| --- | --- | --- | --- |
| 
Edge Function

 | 

EDGE\_FUNCTION

 | 

Create, Update

 | 

5.3

 |
| 

Edge Function Trigger

 | 

EDGE\_FUNCTION\_TRIGGER

 | 

Create, Update

 | 

5.4

 |

### [](#activation_of_resources_on_import "Copy link to heading")Activation of resources on import

CLU supports the activation of versioned resources in Vault Core. When running the CLU import command with the `activate_on_import` flag set, CLU will execute the activation step after successfully importing the manifest into Vault Core. To set a resource version as active, set the `activate` flag of the resource definition in the manifest to `true`. You can only set one corresponding version per resource as active.

### [](#supported_resources_for_activation "Copy link to heading")Supported resources for activation

  
| Resource | Configuration Type | Supported from CLU version |
| --- | --- | --- |
| 
Workflow Definition Version

 | 

WORKFLOW\_DEFINITION\_VERSION

 | 

1.4

 |

chat\_bubble

-   When creating a Workflow Definition Version (WDV), if the Workflow Definition (WD) already exists, the created WDV will be set as the default version of that WD. If the WD does not exist, a new WD will be created, with the newly-imported WDV set as the default version.
    
-   The CLU does not currently validate whether multiple WDVs have been marked as activatable for a single WD. If multiple WDVs are marked as activatable for a single WD, the WDV that is actually activated is non-deterministic.
    

### [](#example_of_a_resource_marked_for_activation "Copy link to heading")Example of a resource marked for activation

### [](#validate_command "Copy link to heading")Validate command

#### [](#description "Copy link to heading")Description

-   Reads all resource files from the *manifest.yaml* file’s directory and subdirectories.
    
-   Validates only resource files with IDs set in *manifest.yaml* against their corresponding Vault Core API resources.
    
-   Validates that the fields in the resource definition exist in the API resource; does not validate whether all required API fields have been specified.
    
-   Validates that dependency references are defined against existing configuration resources and existing fields in those resources.
    

#### [](#command_2 "Copy link to heading")Command

#### [](#supported_options_for_clu_validate "Copy link to heading")Supported options for CLU validate

The validate command only supports global command flags. For more information see [Supported global options](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#supported_global_options).

### [](#request_idempotency "Copy link to heading")Request idempotency

CLU is *idempotent*; if you import exactly the same resource twice, the second operation will have no effect, and the output will be the same as for the first request. Internally, CLU deterministically generates a request ID from the payloads of your resources and uses these in the Vault Core API requests. The Vault Core API endpoint should then return the exact same response each time the same request ID is provided. This allows you to add new resources to your existing CLU configuration packs and run them without having to delete the old resources.

However, there is a caveat to idempotency in CLU. Other tools are likely to use different request IDs, so if you import a resource with another tool (for example, hitting the APIs directly) and then add the same resource to your CLU configuration pack, you may see conflict errors. In this case, Vault Core returns a 409 error code on conflict. You can define the behaviour of CLU when encountering resource conflicts by setting the desired `on_conflict` parameter.

### [](#request_retry_mechanism "Copy link to heading")Request retry mechanism

CLU has a built-in retry mechanism which tries to prevent any network or load related timeouts. This mechanism works by waiting for a second and applying an exponential waiting period between every failed try. It waits at most 30 seconds for a retry to succeed. Currently, this mechanism is hardwired and can not be configured.

## [](#output_formats "Copy link to heading")Output formats

### [](#ordering_of_the_output "Copy link to heading")Ordering of the output

The ordering of the output represents the order in which the resources are imported into Vault Core. However, the order in which the resources are imported into Vault Core is non-deterministic and thus it can change in between the runs. This behaviour does not affect the correctness of the import of resources into Vault Core.

### [](#supported_formats "Copy link to heading")Supported formats

You can configure the output format of the CLU using the output configuration variable. Supported formats are:

-   *Text*: This is the default and provides an easy-to-read but unstructured output
    
-   *JSON*: Must be explicitly specified, formats the output using a structured, machine-readable, JSON format and is the preferred choice for integration with CI/CD pipelines
    

#### [](#json_output_format "Copy link to heading")JSON output format

When using JSON output format, errors that have caused CLU to retry an action (for example, intermittent network errors while using the Vault Core APIs, or waiting for plan migrations to complete) will be logged to the standard error stream. The standard output stream will contain a single JSON object with fields as defined in [JSON output format fields.](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#json_output_fields)

### [](#json_output_fields "Copy link to heading")JSON output fields

 
| Field | Description |
| --- | --- |
| 
`notes`  
`array [string]`  


 | 

An array of notes included for debugging purposes. Omitted if no notes are produced.

 |
| 

`validate`  
`map[string: object]`

 | 

A map of resource IDs to the validation result objects. Omitted if no validation results are produced.

 |
| 

`validate[KEY].`  
`resource_type`  
`string`  


 | 

The type of the validated resource.

 |
| 

`validate[KEY].`  
`valid`  
`boolean`  


 | 

The result of the validation attempt.

 |
| 

`validate[KEY].`  
`error`  
`string`  


 | 

The failure reason for the validation attempt. Omitted for successful validation attempts.

 |
| 

`import`  
`Map [string: object]`

 | 

A map of resource ID to the import result objects. Omitted if validation fails or when running the validate command.

 |
| 

`import[KEY].`  
`resource_type`  
`string`  


 | 

The type of the imported resource.

 |
| 

`import[KEY].`  
`imported`  
`boolean`  


 | 

The result of the import attempt.

 |
| 

`import[KEY].`  
`response`  
`object`  


 | 

An object which contains the API response for the import attempt of the imported resource.

 |
| 

`import[KEY].`  
`response.`  
`body`  
`object`  


 | 

The body of the API response for the import attempt. The format of the body is resource-dependent and is documented in the API documentation associated with each resource. Omitted for unsuccessful import attempts.

 |
| 

`import[KEY].`  
`response.`  
`action`  
`string`  


 | 

The action of the import attempt, the action used is determined by the configuration specified in the resource(s).yaml file. Possible values are:- "create": Indicates that the CLU attempted to create the resource- "update": Indicates that the CLU attempted to update the resource

 |
| 

`import[KEY].`  
`response.`  
`error`  
`string`  


 | 

The failure reason of the import attempt. Omitted for successful import attempts.

 |
| 

`status`  
`string`

 | 

The aggregate status of the command. Possible values:

-   "SUCCESS": The import and validate commands can both have this value. Indicates that all attempts were successful.
    
-   "FAILURE": The import and validate commands can both have this value. Indicates that at least one validation attempt was unsuccessful or that all import attempts were unsuccessful.
    
-   "PARTIAL SUCCESS": Only the import command can have this value. Indicates that at least one import attempt was unsuccessful and at least one import attempt was successful.
    





 |
| 

`error`  
`string`  


 | 

An error message. Omitted if no error occurs.NOTE: If an error is present, the status field is always "FAILURE".

 |

### [](#output_format_examples_json "Copy link to heading")Output format examples: JSON

#### [](#validate_command_2 "Copy link to heading")Validate command

#### [](#import_command_2 "Copy link to heading")Import command

## [](#creating_a_config_pack "Copy link to heading")Creating a config pack

A configuration pack represents one self-contained logical unit of a configuration layer. It consists of a [manifest file](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#manifest_file) and a collection of [resource files](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#resource_files).

### [](#input_files "Copy link to heading")Input files

  
| File | Fields | Description |
| --- | --- | --- |
| 
`manifest.yaml`

 | 

[Manifest.yaml fields](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#manifest_yaml_fields)

 | 

-   Input file used as an argument to CLU.
    
-   Contains an allowlist of configuration pack resource IDs that are to be imported.
    
-   The location of `manifest.yaml` defines the root directory of the configuration pack; CLU scans this directory and any of its subdirectories for resource files.
    





 |
| 

`.resource.yaml` or `.resources.yaml`

 | 

[Resource(s).yaml fields](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#resources_yaml_fields)

 | 

-   One or more YAML files read by CLU, where each YAML file defines one or more Vault Core configuration resource definitions.
    
-   Resources may be placed in the same directory as the `manifest.yaml` or in any subdirectory of the manifest file.
    
-   Resource files can be given any name but must have the suffix `.resource.yaml` (for a single resource definition) or `.resources.yaml` (for multiple resource definitions).
    





 |
| 

External

 | 

[External files](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#external_files)

 | 

-   Any external code or markup files, such as Smart Contract Version Python files, that can be referenced in resource definitions.
    
-   Useful when a resource’s field accepts a multiline input, such as a Smart Contract Version code field.
    
-   External files must be placed in the same directory or subdirectory as the `.resource.yaml` or `.resources.yaml` file that references it.
    





 |

### [](#manifest_file "Copy link to heading")Manifest file

A manifest file represents an entry point to a configuration pack. It lists all configuration resources associated with the configuration pack. All resource IDs within a configuration pack must be unique and all resources must be located in the same folder, or in a subfolder.

#### [](#manifest_yaml_fields "Copy link to heading")Manifest.yaml fields

 
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

The name of the configuration pack. Required.

 |
| 

`resource_ids`

 | 

A list of configuration resource IDs to import. Required.

 |

#### [](#example_manifest_yaml_file "Copy link to heading")Example manifest.yaml file

### [](#resource_files "Copy link to heading")Resource files

Resource files outline the specific details of resources. The fields of the Resource files are described in [Resource(s).yaml fields](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#resources_yaml_fields).

### [](#resources_yaml_fields "Copy link to heading")Resource(s).yaml fields

 
| Field | Description |
| --- | --- |
| 
`type`

 | 

The type of the configuration resource. Required.

 |
| 

`id`

 | 

The configuration ID of the resource. Required if `vault_id` is not set.

 |
| 

`vault_id`

 | 

The ID of the resource in Vault Core. Will also be set as the configuration ID if `id` is not set. Required if `on_conflict` is set to UPDATE.

 |
| 

`vault_version`

 | 

Unused.

 |
| 

`on_conflict`

 | 

The action to take if the resource already exists. Possible values are:

-   `IGNORE`: Ignore this setting and generate an error.
    
-   `UPDATE`: Update the resource (if the resource type supports this action).
    
-   `SKIP`: Retrieves the duplicate resource from Vault Core and continues the command without erroring. Optional.
    





 |
| 

`payload`

 | 

The Vault Core API payload for this resource. This should be a string formatted as YAML, which is converted to JSON and sent to the relevant API endpoint. For more information, refer to the relevant method in the [API Documentation](/vault-core/5-8/EN/api) for more information. Required.

 |
| 

`resources`

 | 

A list of configuration resource definitions. Used in `resources.yaml` files only. Required.

 |

### [](#example_resource_yaml_file "Copy link to heading")Example .resource.yaml file

### [](#example_resources_yaml_file "Copy link to heading")Example .resources.yaml file

### [](#clu_specific_syntax "Copy link to heading")CLU Specific Syntax

CLU specific notations can be used for the following purposes:

  
| Syntax | Use | Example |
| --- | --- | --- |
| 
`@{externalfile.py}`

 | 

Reference [external files](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#external_files).

 | 

`code: '@{code_files/supervisor.py}'`

 |
| 

`&{resource_id}`

 | 

Fetches the CLU resource based on the provided ID. `resource_id` is the ID of a resource in the CLU pack.

 | 

`supervisor_contract_id: '&{account_supervisor_id}'` where `account_supervisor_id` is the ID of another resource.

 |
| 

`&{resource_id:resource_attribute}`

 | 

Fetches the access attributes of a CLU resource based on the provided ID. `resource_id` is the ID of a resource in the CLU pack, `resource_attribute` is the name of an attribute of this resource.

 | 

`product_id: '&{supervisor_version_id:product_name}'` where `supervisor_version_id` is the resource ID, and `product_name` is the resource’s attribute.

 |

### [](#external_files "Copy link to heading")External files

The notation used by the CLU to find external file references is a `@{}` wrapper around the external file path, relative to the location of the resource definition that references it.

Because "@" is a reserved symbol in YAML, if an external file reference is included in any of your resources, third party YAML tools may not recognise the file as valid YAML. From CLU version 1.5 onwards, we recommend wrapping external references in quotes as shown in the example. This will ensure that any third party YAML tools will still recognise the file as valid YAML.

### [](#external_file_example "Copy link to heading")External file example

In the [example .resources.yaml file](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#example_resources_yaml_file), if the Smart Contract Version is located under `/configuration/smart_contracts/`, then the external file it references should be in `/configuration/smart_contracts/code_files/account.py`.

### [](#adding_json_payloads "Copy link to heading")Adding JSON payloads

If you need to add a JSON payload to any resource file, it must be escaped by single quotes. For example:

## [](#clu_bundles "Copy link to heading")CLU bundles

A CLU bundle is a collection of CLU packs that have been grouped together so they can be acted upon (for example, imported into Vault Core) simultaneously. They allow for more structured organisation of large numbers of Vault Core resources.

### [](#bundle_format "Copy link to heading")Bundle format

A bundle is a directory or an archive of a directory (in `.zip`, `.tar` or `.tar.gz` archive format). The structure of the bundle is determined by files within its directory tree; any such file which is either named `manifest.yaml` or has the extension `.manifest.yaml` defines a pack within that bundle.

The contents of these packs is determined as usual (its resources must be defined in files with the extension `.resource.yaml` or `.resources.yaml`, and must be located within the directory tree of the directory containing the manifest). All resource IDs must be unique across the entire bundle.

### [](#references_within_bundles "Copy link to heading")References within bundles

Resources within a bundle can only reference resources from within their own pack. There are no restrictions on the external files that they can reference (for the archive format, any such files must be present within the archive).

### [](#using_bundles "Copy link to heading")Using bundles

Directory bundles can be created simply by grouping together several packs in the same directory. They can then be acted upon by any of the CLU commands (validate, import, or convert) by providing the path to the directory to CLU:

For convenience (for example, of distribution), an archive bundle can then be created from this directory:

And once more imported using CLU:

Instead of tar files, it is also possible to create and use zip files:

You can import it as follows:

These commands perform their actions upon all resources specified in all packs within the bundle.

## [](#additional_resource_examples "Copy link to heading")Additional resource examples

## [](#creating_and_importing_resources_tutorial "Copy link to heading")Creating and importing resources tutorial

### [](#about_this_tutorial "Copy link to heading")About this tutorial

This tutorial will walk you through the process of creating CLU resources and using CLU to import and activate these resources in Vault Core. By the end of this tutorial you will have:

-   Defined and imported a Core API Product Version resource
    
-   Defined and imported a Contract Resource that has a dependency on the Core API Product Version
    
-   Defined, imported and activated a Contract Version Resource
    

### [](#an_example_of_how_to_import_resources_using_clu "Copy link to heading")An example of how to import resources using CLU

1.  [Write a manifest file](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#writing_a_manifest_file).
    
2.  [Write a Core API Product Version resource](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#writing_a_core_api_product_version_resource).
    
3.  [Apply resources using CLU](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#applying_resources_using_clu).
    

### [](#writing_a_manifest_file "Copy link to heading")Writing a manifest file

#### [](#about_the_manifest_file "Copy link to heading")About the manifest file

The manifest file allows you to specify the resources you want to control with CLU; it is essentially a named and versioned list of CLU resource IDs. The location of the manifest defines the root of the CLU configuration pack.

For further information about manifest files, see [Manifest.yaml fields](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#manifest_yaml_fields).

#### [](#about_the_configuration_pack "Copy link to heading")About the configuration pack

The layout of the CLU configuration pack is very flexible. In our examples we keep all resources in the same resources directory but this is not a requirement. Resource files can be written in the same directory as the manifest or in subdirectories (of any depth) beneath the manifest.

External files (e.g. Smart Contract code files and Workflow definitions) should also be contained somewhere in the same directory tree (at the same level or below the manifest file) to ensure that the configuration pack is self-contained and portable.

#### [](#how_to_write_the_manifest_file "Copy link to heading")How to write the manifest file

1.  In the root of your project, specify a manifest YAML file.
    
    There are no restrictions on the name of the manifest file; for example purposes we have named it manifest.yaml.
    
2.  Within the manifest YAML file, specify a:
    
    -   pack\_version
        
    -   pack\_name
        
    -   resource\_ids placeholder for the resource IDs to be added to
        
        For example:
        
        chat\_bubble
        
        The pack\_version and pack\_name fields are not used internally by CLU; they exist only to facilitate user management of resource packs.
        
    

### [](#writing_a_core_api_product_version_resource "Copy link to heading")Writing a Core API Product Version resource

chat\_bubble

For more information about resources and file references, see [Resource and file reference](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#resource_files).

1.  Create a resources directory and, within it, a code\_files sub-directory.
    
    There are no restrictions on the name of the resources directory; for example purposes we have named it "resources".
    
2.  To create the Product Version, write the Contract code. For example, write a simple Contract in resources/code\_files named overdraft.py:
    
3.  Create the Smart Contract resource YAML file in the resources directory. In the file, specify:
    
    -   type: The type of resource to import: SMART\_CONTRACT\_VERSION
        
    -   id: This field is used by CLU to reference resources. Each resource you import should have a unique id.
        
        chat\_bubble
        
        This field is distinct from the ID that is applied to the resource in Vault Core. If the resource you are creating allows specifying a Vault ID, this can be done using the payload.id field.
        
    -   payload: This field contains a YAML block. The fields of this YAML block should correspond to the payload of the resource’s create request. The fields and values for each create request are documented comprehensively in the API documentation. For example:
        
        chat\_bubble
        
        For more information about external references in the code field, see [External files](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#external_files).
        
    
4.  Save the file at resources/overdraft\_version.resource.yaml.
    
    chat\_bubble
    
    All resource files must end in .resource.yaml or .resources.yaml.
    
    The external file reference’s path must be written relative to the resource file, not relative to the project root.
    
5.  Update the manifest file to include the CLU resource ID for the overdraft Smart Contract version:
    
6.  Validate that all of the resources in the manifest have been defined correctly using the clu validate command:
    
    chat\_bubble
    
    For this example (and all of the following examples), we assume that both the CLU binary and the manifest.yaml file are in the current directory (the project root). However, you can provide any path to the CLU binary and to the manifest file.
    
    The validation should pass successfully and the output should look like the following:
    
    chat\_bubble
    
    If any errors occur, the output should provide descriptive error messages to help you resolve the issues. To explore the various commands, options, and arguments for the commands you can use:
    
7.  Continue defining the rest of your resource pack. You can import all of the resources into a Vault Core instance together once all of them have been defined.
    

### [](#applying_resources_using_clu "Copy link to heading")Applying resources using CLU

For further information about commands and CLU configuration, see:

-   [Commands](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#command_overview)
    
-   [CLU configuration](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#clu_configuration)
    

 
| Option | Action |
| --- | --- |
| 
1.

 | 

[Import resources](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#importing_resources).

 |
| 

2.

 | 

[Import and activate resources using the config file.](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#importing_and_activating_resources_using_the_config_file)

 |

#### [](#importing_resources "Copy link to heading")Importing resources

1.  Import the resources using the following command:
    
2.  Substitute your own values for:
    
3.  The import attempt should be successful and the output should look like the following (although your Vault IDs will vary as they are generated by Vault Core):
    
    chat\_bubble
    
    All of the resources are validated again because this is a prerequisite of the import command.
    

The resource has now been imported into Vault Core.

#### [](#importing_and_activating_resources_using_the_config_file "Copy link to heading")Importing and activating resources using the config file

chat\_bubble

The flags provided to the import command in [Importing resources](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#importing_resources) were quite long and not particularly easy to manage. CLU provides other more convenient ways to load in the configuration. The following example shows how to write a YAML config file to store the URLs and the activate-on-import configuration variable.

1.  Create a YAML config file at the root of the project with the two API URLs and the activate\_on\_import field; for example:
    
    chat\_bubble
    
    When specified in config files, the fields use underscores (\_) rather than hyphens (-). For further information about the names for the configuration variables and their relationships see [Supported options for CLU Import](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#supported_options_for_clu_import).
    
    error
    
    Due to security concerns, we strongly advise that you do not store the auth token in the configuration file. If you do so, please ensure the machine the configuration file is stored on is secure and the file has the correct permissions set.
    
2.  Import and activate your resources using the following command:
    
3.  The import and activation attempt should be successful and the output should look similar to the following; indicating that resources have been validated and imported and now also indicating that the contract has been activated successfully:
    

chat\_bubble

The Vault IDs of the resources are identical for both import commands and no duplicate resources are created. This is due to idempotency in CLU as explained in [Request idempotency](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide#request_idempotency).

## [](#how_to_apply_the_configuration_layer_release_bundle "Copy link to heading")How to apply the Configuration Layer Release bundle

Every Vault Core release includes a tar file containing CLU packs required for Vault Core to function as intended. To extract the tar file, run the command `tar -xzf [tarname].tar.gz` which outputs two folders (`admin_app_core_workflows_outs`, `audit_policies_out`). Each of these folders contains a manifest.yaml and some resource files. Next, run CLU on each of these manifest.yaml files separately.

## [](#download_the_configuration_layer_utility "Copy link to heading")Download the Configuration Layer Utility

To ensure compatibility with Thought Machine products, you must use the latest available version of the Configuration Layer Utility (CLU).

### [](#latest_clu_5_binaries "Copy link to heading")Latest CLU 5 Binaries

The latest releases for CLU 5.x are available as follows. Choose the latest version.

No release available.

* * *

[1](#_footnoteref_1). The Internal Accounts v2 can be created using this resource.

[2](#_footnoteref_2). To create the Calendar Event resource successfully, specify all required attributes in the resource payload. If the CLU returns a client error "Unable to connect to the API", then one or more required attributes is missing from the payload.

[3](#_footnoteref_3). Plan Migration Resource support is deprecated as of CLU version 1.2.0.

[4](#_footnoteref_4). The Core API Product Version resource is referred to as a Smart Contract Version resource in this document.

[5](#_footnoteref_5). The migration strategy specified within the Smart Contract Version resource is context sensitive. If the resource cannot be created with the specified migration strategy, the value will be reset to PRODUCT\_VERSION\_MIGRATION\_STRATEGY\_NEW\_PRODUCT and the creation will be retried.

[6](#_footnoteref_6). To create and update Restriction Set Definitions, you must use this resource.