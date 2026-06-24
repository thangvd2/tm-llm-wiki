---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/overview_key_features_and_benefits"
title: "Key features and benefits"
scraped_at: "2026-06-22T19:18:13.120Z"
images: 0
---

# Key features and benefits

## [](#what_are_edge_functions "Copy link to heading")What are Edge Functions?

Edge Functions are a configuration component within Vault Core, designed to provide users with the flexibility to orchestrate both complex and custom operational logic. They enable the implementation of product-specific journeys and scenarios, extending beyond Vault Core’s default capabilities.

Examples of their application include:

-   operations, such as account opening and closure
    
-   updating parameters
    
-   setting flags
    
-   managing scenarios, such as interest accrual failures
    

By consolidating multiple tasks and Vault Core API calls into a single, imperative Python file, Edge Functions streamline integrations between the bank’s internal systems and Vault Core APIs. This approach helps to simplify the integration and accelerates embedding Vault Core into your infrastructure.

## [](#what_can_i_use_edge_functions_for "Copy link to heading")What can I use Edge Functions for?

Edge Functions allow you to simplify common banking journeys, such as account openings, closures, simulations, and renewals, by consolidating complex sequences of API calls into streamlined, singular requests.

For banks that structure their products around product teams, this functionality enables you to align your teams, integrations, and business operations with product-specific Edge Functions.

A bank’s developers can author, update, and execute their own code using the SDK, and manage Edge Function Versions using the `vc_api` library or the Configuration Layer Utility (CLU).

Developers can start with pre-built templates and iterate these to write an Edge Function, defining a custom endpoint that can be called with an execution request for the Edge Function. This could help banks to significantly reduce the cost and time associated with developing, testing, and deploying new banking products and services.

They provide a low barrier to entry and opportunity for direct input to product development and operational efficiency to developers, business analysts, and product managers alike, without requiring deep technical knowledge. This enables banks to scale their operations efficiently, handling increased transaction volumes or expanding their product portfolio without a proportional increase in complexity or resource allocation.

The future target state of Edge Functions is that they can also help facilitate seamless integration with third-party systems. They enable direct interactions between Vault Core and external systems, and incorporate third-party data and services to extend Vault Core’s functionality.

## [](#how_do_edge_functions_work "Copy link to heading")How do Edge Functions work?

Edge Functions orchestrate sequences of HTTP REST API requests, allowing you to chain multiple calls into a single configuration layer component. You can execute this component with a single synchronous API call, effectively linking a bank’s internal API gateway with the Vault Core API.

Each Edge Function is defined by a Python function that interacts with Vault Core’s HTTP REST APIs. To execute an existing Edge Function, your calling system makes an HTTP call to the Edge Functions Execute endpoint, specifying which Edge Function to run and any required inputs. This triggers the execution of the corresponding Python code, orchestrating HTTP calls to Vault Core. The Edge Function can use the Edge Function SDK and Vault Core API library within its Python code to simplify the interactions with the specified public Vault Core APIs.

Every Edge Function is version-controlled. Once uploaded and active, any further code changes necessitate creating a new version, which you can upload using the API or the Configuration Layer Utility (CLU). By default, the newly-uploaded Edge Function Version (EFV) becomes the active version. Executions automatically use the current active version to ensure only up-to-date, approved, designated code runs in production. However, testers have the option to execute an Edge Function for a specified Edge Function Version, allowing for flexibility in testing and development.

## [](#how_do_i_write_an_edge_function "Copy link to heading")How do I write an Edge Function?

A bank’s developers can author, update, and execute their own code using the SDK, and manage Edge Function Versions using the `vc_api` library or Configuration Layer Utility (CLU).

Developers can start with pre-built templates and iterate on them to write an Edge Function, defining a custom endpoint to which execution requests can be made. This can help banks significantly reduce the cost and time associated with developing, testing, and deploying new banking products and services.

For an enhanced development experience, developers have access to two client libraries to help ease and speed up the development process:

-   The `vc_api` library is specific to Vault Core and provides a way to interface with Vault Core’s public APIs
    
-   The `edge_api` library is independent from `vc_api` versions and provides a way to write and test Edge Functions, and includes pre-built templates
    

The SDK contains all the functionality necessary to structure Edge Functions so that the systems that developers design to execute and manage them can understand them.

It contains resources to help you get started and offers a number of customisable options, including:

-   pre-built templates
    
-   Request and Response schemas
    
-   the ability to define a unique structure per Edge Function
    
-   error responses - to allow clear differentiation between retryable errors (transient) and non-retryable (non-transient) errors
    

To learn more, visit the [Edge Functions examples library](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/edge_functions_code_samples) and check the [Edge Functions samples](/vault-core/5-9/EN/reference/edge_functions/sample_edge_functions_download).

### [](#defining_an_edge_function "Copy link to heading")Defining an Edge Function

In order to define an Edge Function, you must provide a Python module with a module-level function that has an `entry_point` decorator.

This function acts as the entry point for the execution of an Edge Function. Upon invocation, the `entry_point` of an Edge Function is provided with an `ExecutionContext` and a request.

### [](#defining_the_request_and_response_schemas "Copy link to heading")Defining the Request and Response schemas

You can define the schemas of an Edge Function’s Request and Response inside the module as BaseModel classes, and then reference them in the signature of the `entry_point` function.

The ability to customise the structure and content of the JSON response payload means that, on completing the execution of an Edge Function, your application receives data in a familiar structure that it can use. This flexibility also includes accommodating data structures of varying complexity to suit your requirements, which further aids your integration with Edge Functions.

### [](#customising_error_responses "Copy link to heading")Customising error responses

The `vc_api` and `edge_api` libraries return error codes and messages when an error occurs.

In addition to pre-configured error responses, the `edge_api` library provides an `Error` type which you can raise to signal that an error has occurred. You can construct an enum class that bases (inherits from) `edge_api.ErrorCodeEnum` to define a set of custom error codes that could occur while using Edge Functions.

The effect of raising `Error` is that the request payload, raised Error, and the code passed to Error are persisted on the Execution resource in the request, response, and `error_code` fields.

### [](#updating_edge_function_code_and_version_control "Copy link to heading")Updating Edge Function code and version control

Developers can update an Edge Function by creating a new Edge Function Version. Management of Edge Functions and Edge Function Versions is available through making requests to the VC API or via the command line using the Configuration Layer Utility (CLU).

Before you dive into writing your first Edge Function, check out the [Quick start guide](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/quick_start_guide) to learn:

-   what you need to use Edge Functions
    
-   how to install the Edge Functions SDK and enable it in an IDE
    
-   about the code that underpins Edge Functions
    
-   how to execute an Edge Function
    

When you are ready, refer to [How to write an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function) for a step-by-step tutorial.

## [](#how_do_i_test_an_edge_function "Copy link to heading")How do I test an Edge Function?

You can use a standard testing framework, such as the Python unittest module, pytest, to run tests for Edge Functions.

The Edge Functions package includes the `@patch_core_api_client` decorator. This provides a mock Core API client object that allows you to add mock responses and mock errors to specific mock requests made on the Core API Client.

It is possible to execute an Edge Function with the current version or to specify a different Edge Function Version in the execution request. For example, if you have updated the source code and created a new Edge Function Version.

The ability to test the latest version means that you can test your new code in your environments before you set it as the current version.

The platform always executes the current version of the Edge Function by default. It is possible for you to specify a particular version of an Edge Function to execute. For example, to test a particular version and validate its behaviour before making it the current version. However, Thought Machine does not recommend using this pattern to retain a specific version outside of this use case. This is to ensure good Edge Function and execution management hygiene. You should only use this functionality to test a version in your environment. For example, before you set it as the current version in a production environment.

To learn more about testing Edge Functions, see the following tutorials:

-   [How to write a test for an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function)
    
-   [How to test an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_test_an_edge_function)
    

## [](#what_are_the_key_features_and_benefits "Copy link to heading")What are the key features and benefits?

Edge Functions offer a number of key benefits, including:

-   Efficient orchestration: Edge Functions facilitate the combination of multiple Vault Core API calls into a single operation. This reduces the complexity of managing individual API interactions and minimises or eliminates entirely the need for external orchestration services
    
-   Simplified deployment: With a "one-click install" approach, deploying Edge Functions becomes straightforward, minimising deployment friction and expediting integration
    
-   Developer-centric experience: The Edge Functions SDK (consisting of the `vc_api` and `edge_api` libraries) aid the development process by offering utilities for writing concise, readable, and maintainable code. They include built-in validation and serialisation through Pydantic, ensuring robust request and response models, and seamless integration with development environments using type hints and autocompletion.
    
-   Error handling and safeguards: Benefit from comprehensive error management features, including custom error codes and messages, the ability to manage unhappy paths gracefully with bespoke compensatory logic, and built-in retry logic with idempotency keys to prevent duplicate operations.
    
-   Built-in observability and monitoring: Utilise pre-integrated observability tools to track system health and performance. This includes structured logging for execution insights, near real-time dashboards showcasing performance, error rates, and API call timings, along with execution metadata for troubleshooting.
    
-   Version control: Each Edge Function is versioned, allowing for safe updates and rollbacks. This ensures production environments remain stable even as new functionalities are introduced or existing ones are updated.
    

Edge Functions therefore provide a comprehensive toolkit for integrating and extending Vault Core capabilities within your organisation’s infrastructure, ensuring flexibility, reliability, and efficiency in operational processes.

### [](#easy_and_quick_development_and_integration "Copy link to heading")Easy and quick development and integration

For an enhanced development experience, Edge Functions offer tools that streamline the development process and facilitate seamless integration with Vault Core:

-   Comprehensive development tools: Developers have access to two key client utilities designed to ease and accelerate development:
    
    -   The `vc_api` library is tailored for interacting with Vault Core, providing a direct interface with wrapper functions for Vault Core’s public APIs. The library also streamlines the management of mechanisms such as authentication.
        
    -   The `edge_api` library is version-independent from the Vault Core API, offering a robust framework for writing and testing Edge Functions.
        
    
-   Pre-built templates: The Edge Functions SDK includes pre-built templates, enabling developers to accelerate the build of an Edge Function without having to start from scratch. This setup simplifies the development lifecycle, allowing for quick adaptation to specific needs.
    
-   Integrated development tools: With tools for building, testing, uploading, and executing Edge Functions, developers can streamline the creation and integration of custom solutions with Thought Machine products without excessive overhead.
    
-   Cost and effort efficiency: By providing these resources and tools, Edge Functions help save time and money, reducing the need for building multiple integration micro services or hiring third-party integration experts. This accelerates the development process, allowing teams to focus on innovation.
    

By integrating these features, Edge Functions simplify extending the operational capabilities of Vault Core, while providing a structured and efficient pathway for development and deployment, ensuring seamless integration.

To learn more, visit the [Edge Functions examples library](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/edge_functions_code_samples) and check the [Edge Functions samples](/vault-core/5-9/EN/reference/edge_functions/sample_edge_functions_download).