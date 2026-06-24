---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_product_simulation"
title: "Existing Product Simulation"
scraped_at: "2026-06-22T19:18:08.476Z"
images: 0
---

# Existing Product Simulation

*Existing Product Simulation* retrieves existing Vault Core products and product versions, as well as their associated resources (referenced within a Smart Contract or Supervisor Contract hook execution) in the state they were at the defined simulation start time.

For existing products, the associated resources that can be simulated are:

-   Global parameters
    
-   Template parameters
    
-   Calendar events
    

You can enable Existing Product Simulation from an existing Smart Contract, and apply it to a `create_account` or `v2_create_account` instruction in your simulation request.

chat\_bubble

[Existing Account Simulation](/vault-core/5-9/EN/reference/contracts/contract_simulation/existing_account_simulation) automatically retrieves some product-level data (postings, balances, expected parameters, and flags) from existing accounts, making it unnecessary to define Existing Product Simulation for these data types.

For calendars, global parameters, and template parameters, you must define Existing Product Simulation in your request.

## [](#how_to_use_existing_product_simulation "Copy link to heading")How to use Existing Product Simulation

To run Existing Product Simulation, first define the `existing_smart_contracts[]` that contains the product-level data you want to retrieve in [your Simulation request](/vault-core/5-9/EN/reference/contracts/contract_simulation/how_to_use#prepare_your_request).

Then, define `existing_product_data_behaviour[]` to specify which existing product data to include in the simulation.

You can either include all **or** one or more existing product data by setting either:

-   `include_all` to `true`
    
-   `include_data_types[]` to one or more of the following:
    
    -   `GLOBAL_PARAMETERS`
        
    -   `TEMPLATE_PARAMETERS`
        
    -   `CALENDARS` (calendar events)
        
    

Additionally, you can reference an existing Supervisor Contracts or Contract Modules by defining the corresponding request field and set the `id` in the array:

-   `existing_contract_modules[]`
    
-   `existing_supervisor_contracts[]`
    

## [](#example_of_existing_product_simulation "Copy link to heading")Example of Existing Product Simulation

Below is a simple example of an Existing Product Simulation that creates a new account (`example-account-1`) using an existing Smart Contract (`smart-contract-1234`) while including all associated product-level data (`include_all`). Then, it calls a derived parameter hook on the newly created account, leveraging the existing product state as of the simulation start time:

### [](#request_body "Copy link to heading")Request body

Example JSON request

### [](#json_response "Copy link to heading")JSON response

Running the above request produces the following response:

Example JSON response