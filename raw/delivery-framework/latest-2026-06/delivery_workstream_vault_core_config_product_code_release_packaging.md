---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/vault_core_config/product_code_release_packaging"
title: "Product Code Release Packaging"
scraped_at: "2026-06-17T05:25:08.936Z"
images: 0
---

# Product Code Release Packaging

## [](#purpose "Copy link to heading")Purpose

Product code release packaging is done once a phase or project is completed and is ready for delivery to the client. Packaging the code properly results in a smooth handover to the client as the bundle contains everything needed to run the product in the client’s Vault Core environment.

Poor code release packaging typically results in the client’s poor understanding of what to do with the bundle and can lead to more time spent with the client as opposed to a single meeting that highlights the documentation and project structure of the code bundle.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Smart Contract Build/Assembly](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_build)
    
2.  [Vault Core End to End Testing](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/vc_end_to_testing)
    
3.  [Smart Contract Perfomance Testing](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_performance_testing)
    
4.  Smart Contract Optimisation
    

## [](#guidance "Copy link to heading")Guidance

When delivering a project from its repository that is built based on the best practices specified in Activity: Smart Contract Build/Assembly, the following instructions can be used as guidelines:

### [](#delivery_bundle_steps "Copy link to heading")Delivery bundle steps

The following artefacts should be included in the release bundle:

-   Smart contract.
    
-   Account
    
-   schedule tags (if relevant).
    
-   Internal accounts.
    
-   Flag definitions (if relevant).
    
-   Calendars (if relevant).
    
-   Product manifest.
    
-   Inception SDK.
    
-   Contracts SDK.
    
-   Release documentation.
    

### [](#delivery_release_tagging "Copy link to heading")Delivery release tagging

Another crucial step is to tag the release, here’s instructions on how to do so in GitHub:

chat\_bubble

On the code tab of the repository, on the right hand side of the page, click \`\`Create a new release''.

Provide a release title, for example, \`\`\[Client Name\] - Phase #''.

Additionally, provide a description that contains which features have been implemented and tested.

Tagging the release is an important step as once the client has used the bundle, there is potential for bugs to be found. Being able to jump back to the code as it was released in the bundle, will allow to focus on addressing the bug.

chat\_bubble

Tagging also makes the release branch immutable, meaning that it will remain in the state as it was released.

### [](#delivery_bundle_documentation "Copy link to heading")Delivery bundle documentation

Supplementing the code bundle with proper documentation is crucial.

The following documents are typically included:

-   **Getting started:** Provides an overview and high level details on each of the documents included in the bundle.
    
-   **Integration guide:** Provides guidance on how to deploy the product to a Vault Core environment. This document also provides some example Core API requests to get started with Vault such as how to create a customer and account. It concludes with some next steps/considerations for building integrations around the product.
    
-   **Testing guide:** Provides guidance on how to get started with Thought Machine’s Testing Frameworks including how to setup a testing environment and how to run the tests that are shipped with the code bundle.
    
-   **Test report:** A report of all tests relevant to the product shipped.
    
-   **Technical documentation:** Each feature is developed based on of a technical design document. This document provides an overview of the feature, which hooks are affected by this feature’s implementation and detailed acceptance criteria. Each AC has a corresponding simulation test which can be found in the bundle by searching for the acceptance criteria ID.
    

### [](#delivery_bundle_handover "Copy link to heading")Delivery Bundle Handover

Once the code bundle is completed, a handover call with the client is scheduled to:

-   Demonstrate what functionality has been added to the product.
    
    -   Typically performed by the business analyst who provides provide a demo suite demo.
        
    
-   Go over documentation/project structure.
    

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Feature Block Build. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.