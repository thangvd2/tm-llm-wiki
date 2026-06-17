---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_build"
title: "Smart Contract Build/Assembly"
scraped_at: "2026-06-17T05:25:00.484Z"
images: 0
---

# Smart Contract Build/Assembly

## [](#purpose "Copy link to heading")Purpose

Implementation is typically the next step after defining the smart contract technical design and feature block build (where applicable). Each requirement is implemented as a new feature or taken from the reusable features available as part of the Product Library. Implementation is typically an iterative process together with the design organised in sprints. Backlog grooming, refinement and design take place during the previous sprint in preparation for the implementation in the current sprint. During the current sprint, the same preparatory process takes place for items in the next sprint and features get agreed by the stakeholders.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Smart Contract and Feature Block Technical Design](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/sc_feature_block_technical_design)
    
2.  [Feature Block Build](/delivery-framework/latest/EN/delivery_workstream/vault_core_config/feature_block_build)
    

## [](#guidance "Copy link to heading")Guidance

### [](#development_lifecycle "Copy link to heading")Development lifecycle

After individual re-usable feature blocks are identified and new feature block builds are complete, the smart contract assembly should be planned for the sprint. If there are multiple developers on the project, ensure that the features and tickets are split appropriately to avoid complex merge conflicts. For example, if one feature contains the calculations for another feature, a single developer should work on both.

The standard development lifecycle:

-   Add required changes to smart contract according to the user stories.
    
-   Use features from the library and the ones built as part of this process.
    
-   Create/update smart contract unit tests accordingly.
    
-   Create smart contract simulation tests.
    
-   Create smart contract E2E tests.
    

chat\_bubble

The standard development lifecycle results in a confidently tested smart contract and can be used in demos via Demo Suite, Postman, and time cursor testing.

### [](#usage_of_flc "Copy link to heading")Usage of FLC

Repeatedly using the feature level composition(FLC) approach with the contract renderer enables teams to use the more standardised software development approach. In this way, separate functionality is kept in separate files, the template contract is used for adding the main structure and the behaviour of the product is defined by using smart contract hooks. For testing, only the rendered smart contract is deployed and it is excluded from version control. This is the Thought Machine recommendation for project set-up and coding best practices in a project.

It is the recommended best practice to contain all the logic within the feature files and have the smart contract file call feature functions where required. This allows for the client to easily understand what the smart contract is doing at different stages of the product’s lifecycle, while also allowing them to click into any function to understand exactly what is happening behind the scenes. It also leads to a much leaner smart contract template that is easier to manage.

### [](#division_of_labour_existing_products_adaptation "Copy link to heading")Division of labour - Existing products adaptation

Based on the decision made during design phase, i.e. to adapt a product from the Product Library, the engineers can divide new work by feature with a lower risk of merge conflicts.

**Division of labour - New smart contract**

Based on the decision made during design phase, i.e. to start with a blank template contract, it is essential to design and set out placeholders for hooks and their high level helper functions at the initial setup. Having different developers work on different hooks and different types of tests seems to be a natural way to divide labour, as follows:

1.  Re-use feature files from Product Library or the client’s own feature library if available.
    
    1.  Update any feature files as part of every user story and CBF usage.
        
    2.  Highlight as part of the user story if there are any new features introduced and link them to the appropriate CBF so that it can be referenced for future use.
        
    
2.  Define the Smart Contract metadata in the template contract, leaving placeholders for empty lists of parameters, events, notifications, supervisees, etc. The engineer can copy paste any code required from similar products from the Product Library as and when required. The Thought Machine recommendation is to not add code or leave code that is not used. If the client expects this code to be required in the future, it can be commented out and the backlog Jira ticket should be mentioned in the comment.
    
3.  Write account activation and scheduled events together. These two hooks are highly coupled, because the activation hook defines the schedules which get handled by the scheduled events hook. Nevertheless, further division of labour (and neater code) can be achieved by:
    
    1.  Keeping the top level of the activation hook concerned mainly with delegating schedule definitions to separate helper functions, which can be implemented independently.
        
    2.  Keeping the top level of the scheduled event hook concerned mainly with delegating event handling to helper functions, which can be implemented independently.
        
    
4.  Write pre/post-posting handling, pre/post-parameter change handling, derived parameters, and account closure together. Further division of labour can be achieved by:
    
    1.  Authoring posting handling, instance parameter handling, derived parameters handling and account closing separately is a good approach as they are independent of each other.
        
    

The conversion hook is mandatory, even if you don’t expect any action to happen during conversion. Existing schedules can be returned as for conversion, if no action is required.

### [](#tests "Copy link to heading")Tests

In teams with widely varying levels of skills and experience, it can be helpful to write simulation and end to end tests independently. End to end tests, being run against a proper Vault Core environment, can be tackled at the last sprint of the product build.

**Implementation Approach**

A smart contract is supported by configuration data and tests, which are organised in a standardised directory structure for a client engagement, as shown below. Here is an example from the Product Library loan product, with some lines omitted for brevity:

chat\_bubble

Note that:

Empty `*init*.py` files might need to be added to some folders for Python to work properly.

If constants shared between multiple types of tests are required, e.g. the smart contract, or FLC features used by the smart contract, these should be defined at the lowest level directory that is common to the files that use it.

If a Product Library product is used as a starting point for your project, the library/features folder from the Product Library need to be copied into the project project folder, typically at the root of the project folder, and updated the import statements in the smart contract and tests to point to the local copy.

### [](#common_pitfall "Copy link to heading")Common pitfall

A common pitfall is providing incorrect estimates for smart contract acceptance criteria testing. As experience is gained from each sprint and other projects, estimates become more accurate. Ideally, when first starting a smart contract build, it is suggested to pad the estimates as to not fall behind on the schedule of the project.

## [](#templates "Copy link to heading")Templates

Thought Machine has a range of templates designed to support clients in delivery of Smart Contract Build/Assembly. Please contact your assigned Thought Machine representative for further information.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.