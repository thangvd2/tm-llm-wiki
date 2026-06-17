---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/business/product_rationalisation"
title: "Product Rationalisation"
scraped_at: "2026-06-17T05:23:48.691Z"
images: 0
---

# Product Rationalisation

## [](#purpose "Copy link to heading")Purpose

The object of this activity is to streamline the product portfolio to primarily simplify the product estate, the outcome of which would provide benefits in a number of ways, for example:

-   Minimise the number of products required to be maintained.
    
-   Remove the overhead of storing redundant products.
    
-   Ensure products are fit for purpose and do not contain more functionality than required, as this can affect performance which has the potential to create a negative customer experience.
    
-   Minimise the number of product variants required through parameterising configuration.
    
-   Synchronisation with product innovation, allowing existing products to be rolled up into fewer innovative products with newer functionality.
    

The output of the activity should be a list of products and their functionality, highlighting areas that are:

-   Redundant
    
-   Can be consolidated into another product
    
-   Must be kept
    
-   Candidates for improvement
    

The aim is to focus on areas where complexity can be reduced, where operational efficiency can increase and where there is in an increase of value to customers.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  Business: [As-Is Product Discovery](/delivery-framework/latest/EN/delivery_workstream/business/as_is_product_discovery)
    

## [](#guidance "Copy link to heading")Guidance

The As-Is Product Discovery activity is a key prerequisite to this Product Rationalisation activity. It provides the sufficient details to perform analysis on how to make an informed decision about how to rationalise the products. From the analysis it should be possible to clarify the following:

1.  The products that are inactive and can therefore be removed.
    
2.  The products that are similar in behaviour with small variances and can therefore be simplified into a single product, with few parameters to allow for the differentiation.
    
3.  The product features that customer insight has proven are deemed important and should remain, at least, in a similar form post rationalisation.
    
4.  The products that customer insight has shown to be difficult to use, resulting in a negative user experience and are therefore a candidate for removal or innovation.
    
5.  The products/features that both customer insight and market research have shown to have a competitive market edge or have a USP and therefore need to remain in a similar form post rationalisation.
    
6.  The products that customer insight and market research have shown to be slow to take up and therefore are a candidate for removal or innovation.
    

**The optimal way to handle the result of these clarifications individually is via the following guidance:**

1.  Removing inactive products should be a simple process, however the chances are that they are entrenched across multiple systems and applications within the bank.
    
    -   Regulatory bodies may still have requirements around data provision and storage regarding these products and this will need to be considered.
        
    -   The customer app/channel will need to be revamped to ensure customers can no longer choose these products.
        
    -   The customer will need to be notified of the planned change and of any downtime required to make the changes to the app.
        
    -   All downstream systems affected by this change will need to be notified so that they can make any necessary changes on their end.
        
    -   Any documentation, including training and marketing material, that references the product and its terms and conditions should be amended.
        
    -   Any teams that maintain the product will be directly affected and will need to be notified accordingly. This could even mean teams being disbanded which should be handled with the necessary sensitivity. This could also lead to a potential loss of SME knowledge and therefore it would be wise to put contingency plans in place so that knowledge around the existing products doesn’t get lost.
        
    -   Information on decommissioning apps can be found in the [Integrations Workstream](/delivery-framework/latest/EN/delivery_workstream/integrations).
        
    
2.  Smart Contracts allow for more flexibility and more configurability when designing a product. Therefore multiple variants of the same type of product can easily be created via the build of a single Smart Contract with the necessary number of parameters required to allow for the variants. Thus significantly removing the overhead of having to manage multiple products and yet being able to provide as bespoke a product as required for the customer. I.e. Two customers can take out the same loan product but have individual interest rates, individual fee rates and different term lengths.
    
    -   If a like-for-like product is intended to be created then it is extremely important that the requirements of the product, both from a functional and non-functional perspective, are fully understood to ensure nothing key is missing from the Smart Contract, in terms of upstream and downstream dependencies.
        
    -   This is a good opportunity to highlight functionality that is similar across products, as this can make designing the Smart Contract and future Smart Contracts more efficient.
        
    -   This is covered further in the [Architecture](/delivery-framework/latest/EN/delivery_workstream/architecture) and [Vault Core Config Workstream](/delivery-framework/latest/EN/delivery_workstream/vault_core_config).
        
    
3.  Regardless of the mission and objectives of a modernisation programme, the priority of the customer has to remain. Acquiring customer feedback is key to ensuring that the customer is at the focus of the programme. Their insight into which features of products they are currently using allows for an empathic response to modernisation, ensuring features that the customer deems important for them are not simply ignored in the drive for simplification. This output can be achieved through unelaborate surveys focussing on the products and their specific features, that are currently assumed to meet the needs of the customers. This output can then be fed into the [Product Requirements Gathering activity](/delivery-framework/latest/EN/delivery_workstream/business/product_requirements).
    
4.  As per the above, customer feedback is highly beneficial and this is still the case even if the feedback is negative. Understanding the poorer aspects of a product can ensure that these potential mistakes don’t get carried forward in a rationalisation exercise.
    
    -   The output received can be analysed to verify whether the particular function of the product is working as it is supposed to; whether it is redundant and should be removed or whether it is a candidate for innovation.
        
    -   Permitting and encouraging the customer to focus on the less useful aspects of the product and share this feedback has the added benefit of allowing the customer to feel empowered and, more importantly, left feeling that their bank cares about the services it provides.
        
    -   This can in turn be used as a tool to aid, indirectly, in preparing the customer for changes to come.
        
    
5.  Customer feedback along with market research is a powerful combination. Understanding the existing products and features that are competitive in the landscape ensures that these don’t get inadvertently removed during a rationalisation exercise. This is a good opportunity to research the products of competitors, both local and global, understanding the details of their features, their pricing and how their products are viewed in the market and what the customer perception is.
    
    -   It can renew focus on the innovative aspect of modernisation, by ensuring or enhancing the functionality of the product from a customer and market perspective through both identifying and foreseeing market trends.
        
    
6.  The analysis of the volumes of customers differentiated by customer/market segment can expose where take up levels are low. This can be caused by a number of factors, such as:
    
    -   The economic climate at the time the product was launched to market
        
    -   The lack of functionality of the product
        
    -   The lack of market need of the product
        
    -   The lack of a marketing campaign
        
    -   A marketing campaign not targeting the correct segments, etc.
        
        Customer feedback and market research in conjunction with detailed analysis of the output of the As-Is Product Discovery activity will provide valuable insights here that should be put forward for consideration as part of a rationalisation or innovation exercise. The factors such as those shown above should be investigated in detail to ensure the same potential mistakes do not propagate.
        
    

Once the above exercises have been achieved there needs to be a plan in place for how existing customers are going to migrate over to the rationalised products. Considerations need to be made about how much historical data is required to be migrated, whether the customers will be offboarded from the current products before being onboarded to the new ones or whether the new products will simply be treated as new products, with no need for posting history to be migrated over to Vault Core. Further information can be found in the [Migration Workstream](/delivery-framework/latest/EN/delivery_workstream/migration).

### [](#things_to_consider "Copy link to heading")Things to consider

Setting a cadence for a regular review of the product portfolio with a product rationalisation lens, will make it easier to both maintain the portfolio and to visualise rationalisation opportunities in advance. The As-Is Product Discovery output should be a living document and updated as and when changes are made, post modernisation. It should also be updated regularly with the volumes and customer segmentation details. This document can then be used in tandem with the regular review, to ensure the latest product estate is fully documented and can be analysed as and when required.

Consider the geographical angle when attempting to rationalise. It could be the case that whilst a number of similar products make sense to be rationalised in one geographical area, the same products in a different area may need to remain as they are ie. on cultural or legal grounds. In this scenario the bank will need to consider whether it makes sense to rationalise at all or to perform a hybrid version of rationalisation. This would need to take careful consideration as the latter could be more burdensome to maintain.

Where possible it is wise to take a long term view with regards to rationalisation. Quick wins may seem cost effective and obvious at the time but without considering the original Product Strategy and hence the bigger picture and future plans, some better opportunities could be missed. It should be considered whether the needs of the customer today are likely to be the same in the near/long-term future before finalising the rationalisation plans. New products will be created as a result of rationalisation. Therefore the teams that will be managing the products will need to receive the relevant communication and training, well in advance of that product being launched and customers being migrated over.

Instead of some rationalisation, it may be worth considering creating a greenfield business, especially if an element of the Product Strategy is to target a different customer segment or to test new waters. This will have less impact on the overall programme of rationalisation and modernisation, as it would be considered a separate stand-alone piece of work without high dependencies. There are clear benefits in having a greenfield opportunity with laser focus applied, however the costs with creating a greenfield in tandem with a large-scale modernisation programme would need to be seriously considered. The long-term strategy should also be taken into consideration, as this could eventually mean either: continuing the greenfield opportunity as a separate business; incorporating the business back into the overall modernisation programme or winding up the greenfield business altogether.

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.