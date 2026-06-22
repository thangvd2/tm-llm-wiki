---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/testing/test_strategy"
title: "Test Strategy"
scraped_at: "2026-06-17T16:02:15.580Z"
images: 0
---

# Test Strategy

## [](#purpose "Copy link to heading")Purpose

The aim of this activity is to ensure a high level view of the test strategy is mapped out early in the modernisation journey.

The test strategy provides clarity on which test tasks need to be achieved, the order in which they need to be achieved and how they will be executed. It achieves this through outlining the approach and goals for the overall testing requirement of the programme.

Defining a test strategy is key to hitting the programme milestones by ensuring the right teams, systems and infrastructure are in place to perform the required tasks at the expected time.

It will also help to reduce dead time that can occur when infrastructure or teams are not prepared due to lack of sufficient notice being provided. Considering this activity at an early stage helps to ensure that prerequisites are performed in a timely manner preventing potential delays.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Governance: [Programme Definition](/delivery-framework/latest/EN/delivery_workstream/governance/programme_definition)
    

## [](#guidance "Copy link to heading")Guidance

To create a detailed Test Strategy, the below steps should be followed:

1.  **Assign a Test Owner -** The primary aspect of most successful test strategies is to assign a dedicated Test Owner. This person is responsible for the subsequent planning of test tasks and ensures that relevant environments and systems are set up and fit for purpose. They would be expected to liaise with the various teams to synchronise resources and systems in order to harmoniously blend together pertinent testing tasks. By having a dedicated Test Owner, the programme can be assured that the path to delivery is as smooth as possible from a production readiness perspective.
    
2.  **Identify the stakeholders -** The next important aspect is to identify those team members/departments who will be executing the tests and the appropriate subject matter members who will be signing off the results of the tests. Identifying these actors in the early stages allows the Test Owner to build a rapport as soon as possible, aiding the future test planning. This is especially important, as meeting testing timelines will be dependent on diverse departments working together, whilst ensuring BAU support is not affected by resourcing constraints. Where possible, assign names against roles and clarify the responsibilities of the roles.
    
3.  **Set a timeline -** This leads to the next major requirement of the strategy which is to set a high level test timeline estimate for the numerous tasks that will need to be performed for the various types of end-to-end testing. Collaborating on this with the relevant teams, in the initial stages, will aid in carving out testing time periods as it provides an early view of what is expected and for when. This will facilitate the likelihood of having teams available to perform the key testing tasks within the necessary timeframes.
    
4.  **Identify the full list of testing activities required for each type of testing** - this should include some form of the following:
    
    -   *Infrastructure testing*
        
        -   Environment Test
            
        -   Vault Instance Deployment Test
            
        
    -   *Product testing*
        
        -   Smart Contract Unit Build Test
            
        -   Smart Contract Full Functional Test
            
        -   Smart Contract Full Non Functional Test
            
        -   Smart Contract User Acceptance Test
            
        -   Smart Contract Simulation Test
            
        -   Product Integration/Microservices Test
            
        -   Existing Process Regression Test
            
        -   Operational Process Test (ie. usability testing)
            
        -   Customer Experience Test (ie. compatibility testing)
            
        
    -   *Regression testing*
        
        -   Full System Regression Test (if in hybrid model)
            
        
    -   *End-To-End pre go live testing*
        
        -   End-To-End System Functional Test
            
        -   End-To-End Non Functional Test (ie. performance and load testing)
            
        -   Operational Acceptance Test
            
        
    -   *Model Office testing* - (everything required to make a Go/No Go decision. More details on this can be found in the [Production Readiness Workstream](/delivery-framework/latest/EN/delivery_workstream/production_readiness)
        
        -   Customer Communications Test
            
        -   Channel Flows Test
            
        -   Data Outputs Test
            
        -   Security Test
            
        -   Chaos Test
            
        
    
5.  **Define a test approach -** The test approach is the glue that holds the Test Strategy together. It needs to clarify the testing types as per the previous step and shape how they are likely to be executed. In defining the approach, the following should be considered:
    
    -   Strategy sign-off - identifying the correct person to approve the whole Test Strategy activity ensures the responsibility of a single person/team to buy in to the overall approach. They should then communicate it to the wider teams in the early stages of the programme.
        
    -   *Automation* - automating tests where possible and relevant can save time and can scale across multiple systems. It allows for frequent tests to be carried out in parallel on an iterative basis. Test automation is an investment for post go live where tests can continue on an on-going basis, to test any future updates.
        
    -   *Environments* - estimating the size of the testing activity at hand will ensure that sufficient environments are procured early on in the programme and can be prepared well in advance of the testing tasks to come. This section should clarify which environments should be available for which type of testing, along with the team that is responsible for owning/maintaining the environments. It is important to note that performing different types of tests requires different environment specifications.
        
    -   *Tooling* - considering the existing tooling capabilities will help in understanding where there are tooling gaps in the types of tests that are required. This will allow for new tools to be acquired in a sufficient timescale and teams to be trained in preparation. This section should clarify which tools should be used for which tests and the associated reasons.
        
    -   *Software versions* - clarifying in advance which minimum software version the various systems should be on when testing is performed, will ensure that those software upgrades, where relevant, can be tested in advance. This will guarantee the stability of the specific test environment from a system perspective. Throughout the course of a large scale modernisation exercise this is likely to change, however identifying the minimum functional software versions at this stage will provide the foundation upon which changes can be tested and added accordingly. This can aid in preventing regression issues further down the line.
        
    -   *Testing standards* - setting standards for a consistent way of documenting test cases, defining success criteria, reporting and communicating results greatly facilitates the spread of test related information across the various areas of the bank. This can help to ensure the quality of the data is high, by setting minimum data requirements and by being prescriptive as to what kind of data is documented. There are external standards that can help with this, such as ISO 29119 or via ISTQB certification. Some banks prefer to create their own version of a standard, using their own familiar jargon and processes which are understood across the bank. This allows for easier dissemination of information. Either way, there are clear benefits in attempting to ensure the quality and consistency for the analysis and sharing of test data, whilst taking the differing test design techniques into consideration.
        
    
6.  **Define how the tests will be executed -** highlighting the goals and objectives of the testing effort along with defining the scope will provide the necessary data that can be analysed for a decision on how the tests should be executed. This decision should consider the following:
    
    -   The prerequisites for the type of test that needs to be executed - eg. a functional or user acceptance type test would expect to include, details of:
        
        -   The ordering of an account opening process (Channels → API access → Product creation → Account creation → …).
            
        -   The customer user journey (Types of customer persona → what device they would likely use to communicate with the bank → how the request will be supported → …).
            
        -   The systems that are impacted by a change to the process and therefore the order in which they will need to be tested, (Smart Contract test → Vault test → Integration test → Regression test → E2E test → …).
            
        
    -   The process for managing test data - this needs to consider:
        
        -   How data will be sourced for the test environments - if the systems supplying the data are a third party application, consider whether production-like test data can be obtained and by what means. Alternatively, test data can be created manually to ensure that no production data is inadvertently copied into a test environment.
            
        -   How data will be loaded into the test environments - this should consider the method required by the consuming system, whether the data will be a simulation of production data or whether it is sufficient to simply fill the attributes with non-specific data. It should take into consideration how long the data, once loaded, should remain in a system; whether the data can be updated for further tests and whether there should be an easy way to delete all the data and perform a bulk reload when required. Please see the [Migrations workstream](/delivery-framework/latest/EN/delivery_workstream/migration) for how data can be loaded into Vault Core today.
            
        
    -   The order of execution - depending on what types of testing are being considered and at what phase of the programme, this does not have to follow a prescriptive or Waterfall style path. Tests should follow a logical ordering such as performing a System Regression Test before an End-To-End Functional Test. However, testing components such as Smart Contract build can be performed at any relevant point of the programme, enabling the particular feature to be tested for early feedback and iterated upon without affecting any of the wider testing types. Smoke testing a Vault Core version before upgrading is another type of test that can occur at any point, increasing confidence in having a stable platform before wider testing takes place. Parallel execution of tests should also be encouraged to shorten testing windows.
        
    -   Define entry and exit criteria - defining these criteria clarifies when testing a particular type can begin and what signals that it is complete. They set conditions that need to be met during the testing life cycle.
        
        1.  Entry criteria - this should detail the requirements of what needs to have been achieved before the testing of a particular type can start, such as:
            
            -   A notification that a piece of code is ready for testing.
                
            -   A notification that test cases and acceptance criteria are fully defined.
                
            -   A notification that an environment is fully prepared.
                
            -   All the above notifications should be automated where possible to prevent delays and to ensure a timeline is clearly documented.
                
            
        2.  Exit criteria - this should detail the requirements of what needs to have been achieved to deem that a particular type of testing is fully completed/forced to completion/no longer required. For example:
            
            -   Full coverage of the test cases have been met.
                
            -   All relevant critical bugs have been fixed and regression testing has been performed.
                
            -   Specific risks have been accepted by the wider programme.
                
            -   New functional requirements have been raised, rendering the existing test cases no longer relevant.
                
            -   In a happy path scenario, the exit criteria should ensure that there are metrics in place to measure the success of the testing effort.
                
            
        
    
7.  **Create a test feedback loop -** shortening the feedback loop, where possible, is key to ensuring there are limited delays to both development and bug fixing. It can highlight if there is a misinterpretation of requirements earlier in the process, allowing for amendments to be made in a timely manner. Eg. if the user experience or certain functionality is not working as expected. This can be facilitated through automating tests, particularly automating tests to run after each code change. A further iteration of this is to apply a shift-left testing methodology, where possible, allowing testing to occur in parallel to development. This can help realise potential issues prior to being released to production. Prioritising a test feedback loop is important to ensure sufficient contingency time is allowed for changes and fixes to be adequately built and tested. In some cases, significant change requests may occur, the impact on time of these types of events will also need to be considered.
    
8.  **Expose any known potential risks -** known or potential risks to successfully perform testing should be raised so that a contingency plan can be put in place. An example here is the ability to test third party integrations.
    
    There may be known areas where tests should be excluded or scenarios where risks have been accepted by the wider group. These should either be detailed in the strategy or linked to eg. a RAID log where these are detailed. This will aid in validating that there are no gaps in regards to testing.
    
9.  **Plan for continuous testing post go live -** achieving the key elements of the Test Strategy sets a precedent for future testing requirements and planning. Using this activity as a foundation, a continuous testing framework for future purposes can be facilitated. Considering the bank post go live as part of this activity can help to mitigate any future risks that may arise and put into place good testing practices for both BAU and future change programmes.
    

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.