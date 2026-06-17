---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy"
title: "Building and managing the Parameter Value Hierarchy"
scraped_at: "2026-05-05T20:05:46.346Z"
images: 0
---

# Building and managing the Parameter Value Hierarchy

The *Parameter Value Hierarchy* is a way to manage parameter values for any required groups of accounts; for example, accounts grouped by geographical region, corporate entity or business structure, or accounts grouped by product line.

## [](#characteristics_of_the_parameter_value_hierarchy "Copy link to heading")Characteristics of the Parameter Value Hierarchy

The Parameter Value Hierarchy:

-   Is made up of nodes in a hierarchical tree structure, to which Parameter Values and Customer Accounts can be associated
    
-   May contain more than one tree, but a given Customer Account may only connect to a single node in the overall hierarchy
    
-   May be up to seven layers deep, with each layer potentially overriding Parameter Values from layers above
    
-   Has no limit to the number of sibling nodes that it can contain
    
-   Once a node has been created, it cannot be moved to different points in a tree, or to different trees. It can, however, be renamed, and its metadata can be amended.
    
    chat\_bubble
    
    For this reason it is worth taking time to design a Parameter Value Hierarchy tree before creating the first node; see [Designing the Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#designing_the_parameter_value_hierarchy) for an example design.
    

### [](#value_inheritance_and_overrides "Copy link to heading")Value inheritance and overrides

The following example of geographical nodes in the Parameter Value Hierarchy uses values from a single Parameter to illustrate how these values can be inherited or overridden:

-   A globally-owned value of 5 is set (A in the below diagram), which is inherited by the **North America** and **Canada** nodes of the Parameter Value Hierarchy, since these nodes own no value. **Account 1**, associated with the **Canada** node, therefore uses the value of 5
    
-   The **United States** node is set as the owner of a value of 7 (B), which overrides the global value of 5
    
-   **Washington** owns no value, and so it inherits the value of 7 from **United States**. **Account 2** is associated with the **Washington** node, so it uses this value (C)
    
-   **California** is set as the owner of a value of 6, overriding the **United States** value. **Account 3** is associated with this node, and so it uses this value (D)
    
-   **Account 4** has an account-owned value of 8, so it overrides all other values above (E); even if **Account 4** was associated with a node in the Parameter Value Hierarchy, the value of 8 would still override any node’s value
    

![Value inheritance and override diagram](/vault-core/5-8/EN/_astro/pvh_value_inheritance_and_overrides.D74cumSz_Z1FKrl1.webp)

### [](#value_time_series "Copy link to heading")Value time series

For a given Parameter and Account, the effective (or resolved) value at any point in time is determined using the inheritance rules defined earlier, as shown in the following timeline:

![Value time series diagram](/vault-core/5-8/EN/_astro/param_time_series.DGQhNAd-_1c7WSA.webp)

chat\_bubble

For Accounts assigned to a Parameter Value Hierarchy Node, if a Smart Contract hook uses a [ParametersIntervalFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersintervalfetcher) or [ParametersObservationFetcher](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes#parametersobservationfetcher) that includes (or uses) a time before the Account was created, the Parameter value returned will be the value as if the account had been associated with the node specified when it was created.

For example:

-   15th April: An Account is created, and assigned to a Parameter Value Hierarchy Node, where it inherits a Parameter value of 5.
    
-   1st May: A Smart Contract hook fetches values for the Parameter for the past 30 days. The value returned will be 5 from 1st April to 1st May (even though the Account was not created until 15th April)
    

## [](#end_to_end_implementation_of_the_parameter_value_hierarchy "Copy link to heading")End-to-End implementation of the Parameter Value Hierarchy

The overall tasks required to fully integrate Accounts with the Parameter Value Hierarchy, and use the Parameters associated with its nodes include:

1.  [Designing the Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#designing_the_parameter_value_hierarchy).
    
2.  [Creating nodes in the Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#creating_nodes_in_the_parameter_value_hierarchy).
    
3.  [Creating Parameter Values](/vault-core/5-8/EN/reference/parameters/using_core_api_parameters#creating_parameter_values) to associate with nodes in the Parameter Value Hierarchy.
    
4.  Update any relevant [CLv4 Smart Contracts](/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/) to:
    
    -   Use any new `expected_parameters` you have added (including those with either globally-owned or account-owned values, as applicable).
        
    -   Set the triggers for the pre and post Parameter change hooks as applicable (as explained in [Behavioural changes when using the Parameters resource](/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview#behavioural_changes_when_using_the_parameters_resource)).
        
    
5.  [Convert Accounts](/vault-core/5-8/EN/reference/accounts/accounts_version_2#account_conversions) to any new Smart Contract version(s) that you have updated.
    
6.  Follow [Changing Account associations with Parameter Value Hierarchy Nodes](/vault-core/5-8/EN/reference/accounts/accounts_version_2#changing_account_associations_with_parameter_value_hierarchy_nodes) in the Parameter Value Hierarchy.
    

## [](#designing_the_parameter_value_hierarchy "Copy link to heading")Designing the Parameter Value Hierarchy

This section uses examples to illustrate how each part of the overall Parameter Value Hierarchy can be designed. The final design can incorporate any combination of the following in either a single, or multiple, trees.

error

Nodes in the Parameter Value Hierarchy cannot be moved or deleted, and parent nodes cannot be added above existing nodes. For these reasons we recommend planning and designing any tree in the hierarchy before creating the top-level parent node and adding child nodes.

### [](#nodes_for_product_management "Copy link to heading")Nodes for product management

You can use nodes (or an entire tree) to manage product behaviour; for example you could build an entire tree based on a single Smart Contract.

In this example, the bank has both 1 year and 2 year fixed term savings products, sharing a 14 day funding window but with different interest rates. This can be designed to leverage the Parameter Value Hierarchy as follows:

-   The fixed term savings products are backed by a **Fixed term Smart Contract** (which contains all referenced `expected_parameters`)
    
-   The **Funding window** Parameter Value of **14 days** is associated with the **Fixed term savings** node (A in the below diagram)
    
-   The **Term** and **Rate** Parameter Values for each product can be separately managed by their association with **1 year** and **2 year** child nodes (B)
    

In this way, new fixed term savings products can easily be launched using the same Smart Contract by creating additional descendant nodes of **Fixed term savings**, while managing the funding window with a single Parameter Value:

![Products example use of Parameter Value Hierarchy](/vault-core/5-8/EN/_astro/pvh_products.eay4w9LV_ZPWzb6.webp)

### [](#pros_and_cons_of_the_product_based_approach "Copy link to heading")Pros and cons of the product-based approach

 
| Pros | Cons |
| --- | --- |
| 
Enables more reuse of Smart Contracts

 | 

If product divisions are placed as the topmost nodes in a tree, adding business line or geographical divisions lower down could add complexity later, either requiring:

-   Duplication and careful management of Parameters specific to region or line of business (if adding nodes beneath product); or
    
-   The building of a new tree in the Parameter Value Hierarchy, reassigning all affected Accounts over to it, and expiring the old tree
    





 |
| 

Easy to add new products or variants (where parameterisation is all that is required to vary them)

 |  |

### [](#nodes_for_lines_of_business "Copy link to heading")Nodes for lines of business

You can use nodes (or an entire tree) to manage lines of business.

In this example, the bank has an operational division which manages all savings products. This could be designed to leverage the Parameter Value Hierarchy as shown in the following example:

-   A **Savings** node (A in the below diagram) serves as the division, and can also manage any required Parameter Values for the entire business line. It is subdivided into product families; such as **Fixed term savings** and **Variable rate savings** (B)
    
-   The **Variable rate savings** products have different logic, and so they are backed by a separate **Variable rate Smart Contract**. They do not require **Funding window** or **Term** Parameters, but they do require independent management of savings interest rates (therefore the Smart Contract only includes the **Rate** Parameter in its `expected_parameters`)
    
-   The variable rate savings products include a **Standard** and **Premier** variance, whereby the latter receives a higher interest rate (C). The **Rate** Parameter Value in this case can override the value set at the parent node, whereas the Standard variance will inherit the 2.5% default rate as set by the parent
    

![Lines of business example use of Parameter Value Hierarchy](/vault-core/5-8/EN/_astro/pvh_lob1.Cz_Q5FLe_1JJKFM.webp)

### [](#pros_and_cons_of_the_line_of_business_based_approach "Copy link to heading")Pros and cons of the line of business based approach

 
| Pros | Cons |
| --- | --- |
| 
Allows central Parameter management over all product families in each business line

 | 

Less ideal as the topmost level of a tree for banks which are primarily geography-based in operational structure

 |
| 

Also allows operational segregation of product management for each business line

 | 

Even if geography is a secondary consideration, this would require replication of geographical nodes beneath business lines; for example multiple "UK" nodes - one of each for Savings, Loans, Mortgages, and so on

 |

### [](#nodes_for_geographies "Copy link to heading")Nodes for geographies

You can use nodes (or an entire tree) to manage geographical divisions.

In this example, the bank has operational divisions which are geography-based. This could be designed to leverage the Parameter Value Hierarchy as shown in the following example:

-   At the highest level, nodes to represent overall geographical regions can centralise Parameter value control (A in the below diagram)
    
-   The next level includes logical subdivisions of these regions, by country or continent as required (B)
    
-   The **United States** is further divided by state, to allow state-based parameterisation (C). The **United Kingdom** is divided by country
    
-   Any business or product lines can then be managed for each state/country (D)
    

![Geographical example use of Parameter Value Hierarchy](/vault-core/5-8/EN/_astro/pvh_geography.C8nZOAck_yuWq4.webp)

### [](#pros_and_cons_of_the_geography_based_approach "Copy link to heading")Pros and cons of the geography based approach

 
| Pros | Cons |
| --- | --- |
| 
Allows central Parameter management over all aspects of products by geography

 | 

Less ideal as the topmost level of a tree for banks which are primarily business line based in operational structure

 |
| 

Also allows operational segregation of product management for each geography

 | 

Equivalent product family and/or product nodes need to be replicated per state/country

 |

### [](#an_example_design_of_the_parameter_value_hierarchy "Copy link to heading")An example design of the Parameter Value Hierarchy

The following example shows two completed vertical segments of a Parameter Value Hierarchy design; in this case the example bank’s operational structure is primarily based on brand divisions (with a tree per division), but also requires geographical subdivisions per brand:

-   The top-level nodes of the hierarchy represent the brand divisions; the primary way that the example bank requires segregated Parameter value management (A in the below diagram)
    
-   The brand divisions each operate in multiple territories, and therefore require nodes for geographies. Some geographies are equivalent, some are unique to the brand; in either case a separate set of nodes is required (B)
    
-   Within each territory, product families (C), products (D) and variants (E) are represented by child nodes
    

In this example, the bank uses Smart Contracts to vary key aspects of product behaviour (such as Terms and Conditions) at the same level as the nodes at C below:

![Completed example design of Parameter Value Hierarchy](/vault-core/5-8/EN/_astro/pvh_example_complete.3NHkc7vS_1uYlEJ.webp)

### [](#clu_example "Copy link to heading")CLU example

The following example shows how the leftmost tree of the above hierarchy can be created using the CLU. The ids have been used to indicate nodes' positions in the hierarchy:

To learn how to add nodes to the Parameter Value Hierarchy, see [Creating nodes in the Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#creating_nodes_in_the_parameter_value_hierarchy).

## [](#managing_the_parameter_value_hierarchy "Copy link to heading")Managing the Parameter Value Hierarchy

### [](#creating_nodes_in_the_parameter_value_hierarchy "Copy link to heading")Creating nodes in the Parameter Value Hierarchy

#### [](#before_you_start "Copy link to heading")Before you start

Before creating nodes in the Parameter Value Hierarchy, we strongly recommend that you plan the initial tree(s), because you cannot:

-   Create new parents of existing nodes (the parent must be created first)
    
-   Move or delete nodes once created
    

For more information, see [Designing the Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#designing_the_parameter_value_hierarchy).

#### [](#how_to_create_nodes "Copy link to heading")How to create nodes

To assign Parameter Values (and then Customer Accounts) to the Parameter Value Hierarchy, you must first create nodes. You can create nodes in the Parameter Value Hierarchy either via:

-   The CLU
    
-   API calls to the [ParameterValueHierarchyNode](/vault-core/5-8/EN/api/core_api#parametervaluehierarchynode) resource
    

To learn about the concepts of the Parameter Value Hierarchy, see [The Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy).

#### [](#creating_nodes_via_the_clu "Copy link to heading")Creating nodes via the CLU

You can create nodes via the CLU; see the *CLU example* section in [Designing the Parameter Value Hierarchy](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#designing_the_parameter_value_hierarchy).

#### [](#creating_nodes_via_the_api "Copy link to heading")Creating nodes via the API

Call `POST /v1/parameter-value-hierarchy-nodes`, providing the:

-   Unique identifier as `parameter_value_hierarchy_node.id`, which Thought Machine recommends does not relate to the node’s `name` because once set, the `id` cannot be changed (whereas the name can)
    
    lightbulb
    
    Since both the `parameter_value_hierarchy_node.id` and the node’s position are fixed, it can be a good idea to populate this ID with an indicator of the node’s position, so that it provides more meaningful results when [retrieving Parameter Value Hierarchy Node details](/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy#retrieving_parameter_value_hierarchy_node_details), for example.
    
-   Name as `parameter_value_hierarchy_node.name`, which must be unique among nodes with a common (or no) `parent_id`. The name can be updated, which makes it useful as a business (or purpose) identifier for the node
    
-   `parameter_value_hierarchy_node.parent_id`, which must be the id of the parent node, or can be left empty to create a new top-level node
    

##### [](#example_request_to_create_a_node "Copy link to heading")Example request to create a node

The following example request is to create a node for "Fixed term savings" with an id of A1.B1.C1 beneath a parent "Savings" node with an id of A1.B1 (the top-level node in this example tree is A1):

##### [](#example_response_to_node_creation_request "Copy link to heading")Example response to node creation request

#### [](#event_streams "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Parameter Value Hierarchy Node has been created.

 | 

[ParameterValueHierarchyNodeEvent](/vault-core/5-8/EN/api/core_api#parametervaluehierarchynodeevent)(ParameterValueHierarchyNodeCreatedEvent)

 | 

`vault.core_api.v1.parameters.parameter_value_hierarchy_node.events`

 |

### [](#retrieving_parameter_value_hierarchy_node_details "Copy link to heading")Retrieving Parameter Value Hierarchy Node details

-   To retrieve a filtered and paginated list of Parameter Value Hierarchy Nodes, call `GET /v1/parameter-value-hierarchy-nodes`, providing the number of Parameter Value Hierarchy Nodes to be returned in `page_size` (and optionally `parent_ids` to return their child nodes, or the `names` of nodes you want to return).
    
-   To retrieve one or more Parameter Value Hierarchy Nodes by their IDs, call `GET /v1/parameter-value-hierarchy-nodes:batchGet`, providing the ids of the Parameter Value Hierarchy nodes you want to retrieve.
    

chat\_bubble

You can also retrieve details of Accounts assigned to Parameter Value Hierarchy Nodes through the v2/accounts API. For more information see [Retrieving details of Account associations with Parameter Value Hierarchy Nodes](/vault-core/5-8/EN/reference/accounts/accounts_version_2#retrieving_details_of_account_associations_with_parameter_value_hierarchy_nodes).

#### [](#example_request_for_node_details "Copy link to heading")Example request for node details

#### [](#example_response_to_node_details_request "Copy link to heading")Example response to node details request

### [](#retrieving_effective_parameter_values_for_a_node "Copy link to heading")Retrieving effective Parameter Values for a node

lightbulb

You can retrieve effective Parameter Values for a Parameter Value Hierarchy Node, or [retrieve effective Parameter Values for a Customer Account](/vault-core/5-8/EN/reference/accounts/accounts_version_2#retrieving_effective_parameter_values_for_a_customer_account). This section explains the node-based viewpoint.

You can query a point in time or a time range to view the Parameter Values in effect on a Parameter Value Hierarchy Node if:

-   Smart Contracts including these Parameters are used; and/or
    
-   Selected Parameters were associated with the node
    

To retrieve effective Parameter Value(s) for a Parameter Value Hierarchy Node, call `GET /v1/parameter-values:viewEffective`, providing the:

-   Number of Parameter Values to be returned in `page_size`
    
-   `parameter_value_hierarchy_node_id`
    
-   At least one of:
    
    -   `smart_contract_version_ids` to view the Parameter Values for Parameters expected by the given Smart Contract(s); and/or
        
    -   `parameter_ids`, to resolve Parameter Values for the requested Parameter(s)
        
    

warning

You can optionally provide a `snapshot_timestamp` to resolve all the Parameter Values as they were at that point in time. However:

-   This will only provide accurate data for backdated Parameter Value creations. It will **not** provide accurate data when the `snapshot_timestamp` is before:
    
    -   A future-dated Parameter Value creation or cancellation
        
    -   The `create_timestamp` of a new Parameter Value
        
    -   A Parameter Value’s `effective_to_timestamp` is explicitly updated
        
    
-   Thought Machine recommends using a time at least a few seconds in the past. This ensures that all Parameter Values are given enough time to process.
    

#### [](#examples_of_retrieval_options "Copy link to heading")Examples of retrieval options

Point in time Time range

The following example cURL request is for effective Parameter Values at a point in time for the Parameter Value Hierarchy Node "ExamplePVHNode2". In this case, a Smart Contract Version and two Parameter IDs are provided, to preview both:

-   The effects on any Customer Accounts (without account-owned values or lower-level nodes) created under this node and backed by this contract version; and
    
-   The effects on any Customer Accounts (without account-owned values or lower-level nodes) if the added parameters were also expected by this contract version
    

Example response

The response confirms the `effective_parameter_values` that would be inherited by all Customer Accounts (with no account-owned values or lower-level nodes), as a result of being created under this node and backed by the Smart Contract Version:

The following example cURL request is for effective Parameter Values within a time range. In this case, Parameter IDs are provided, to view the effect these would have on any Customer Account (with no account-owned values or lower-level nodes):

Example response

The response confirms the `effective_parameter_values` that would affect all Customer Accounts (with no account-owned values or lower-level nodes), as a result of inheriting Parameter Values from the given node:

### [](#updating_nodes_in_the_parameter_value_hierarchy "Copy link to heading")Updating nodes in the Parameter Value Hierarchy

You can update the name and/or metadata for each node, but you cannot move or delete a node in the Parameter Value Hierarchy.

chat\_bubble

If you want to add or remove *parent* nodes in a tree, or change the position of existing nodes, you must instead create a new tree, assign Parameter Values to the new nodes, and reassign all Accounts over to the new nodes. You can use metadata to signify the retirement of the old tree.

To update a node in the Parameter Value Hierarchy, call `PUT /v1/parameter-value-hierarchy-nodes/{parameter_value_hierarchy_node.id}`, providing the:

-   `parameter_value_hierarchy_node.name` and/or `parameter_value_hierarchy_node.metadata`
    
-   The above fields(s) as value(s) of `update_mask`
    

#### [](#example_request_to_update_a_node "Copy link to heading")Example request to update a node

The following example is a request to update both the name and metadata of a node A1.B1.C3:

#### [](#example_response_to_node_update_request "Copy link to heading")Example response to node update request

#### [](#event_streams_2 "Copy link to heading")Event streams

  
| Description | Event triggered | Streaming topic |
| --- | --- | --- |
| 
The Parameter Value Hierarchy Node has been updated.

 | 

[ParameterValueHierarchyNodeEvent](/vault-core/5-8/EN/api/core_api#parametervaluehierarchynodeevent)(ParameterValueHierarchyNodeUpdatedEvent)

 | 

`vault.core_api.v1.parameters.parameter_value_hierarchy_node.events`

 |