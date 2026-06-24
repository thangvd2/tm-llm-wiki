---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/fundamentals_pathway/foundations_of_vault_core/m3_architecture"
title: "Module 3: Architecture"
scraped_at: "2026-06-17T15:59:45.499Z"
images: 13
---

# Module 3: Architecture

assignment\_turned\_in

Learning objective

Explore the architectural model provided by Vault Core and delve into the component parts which make up the platform.

## [](#three_layers_of_vault_cores_architecture "Copy link to heading")Three layers of Vault Core’s architecture

The Vault Platform is designed with a clear, three-layered architecture that’s foundational to our products and can also be applied to a bank’s wider technology landscape.

![Banking product](_assets/threelayers.CzLUyxVt_ZSlJWe_learning.svg)

*Click on the tabs below to learn more about each of the layers.*

Banking product layer Capability layer Cloud layer

**Banking product layer**

The banking product layer is where you can find the Smart Contract system. This is what truly sets Vault Core apart. Smart Contracts are essentially the product logic defined in Python code that define how a product behaves, for example, how interest is calculated on a loan, or what fees apply to an account.

The benefit of this system is its flexibility. Banks can choose from three options:

-   Build these Smart Contracts themselves,
    
-   Use one of the pre-built contracts from the product library, or
    
-   Commission Thought Machine or a business partner to build a custom contract for them. This gives banks complete control and freedom to innovate.
    

**Capability layer**

Vault Core’s capabilities are designed for real-time operations. Thanks to the underlying cloud platform, the system can operate 24/7.

This is a crucial point as it means banks can process transactions and provide services even while a system upgrade is taking place, with zero downtime.

Another key feature is that Vault Core is a single platform for every bank and every country.

Vault Core does not have country-specific customisations in its core source code, which ensures consistency and simplifies maintenance.

**Cloud layer**

Vault Core is a true cloud-native system, built with microservices and APIs for the highest levels of performance and resilience.

Vault Core is also completely cloud-agnostic, meaning the software runs identically on major cloud platforms like GCP, AWS, Azure, and even Openshift.

The fact that the functionality is exactly the same on each platform is a strong proof point that Vault Core has achieved complete independence between the cloud and the functional layers.

## [](#the_change_that_thought_machine_brings "Copy link to heading")The change that Thought Machine brings

Ultimately we can highlight the change that Thought Machine’s Vault Core Product brings by looking at it as the new vs old world.

*Click on the headers below to learn more.*

Old vs new world

![old new world](_assets/old_new_world.Co9AjqKE_Z1flh5o_learning.svg)

Functional design

![old vs new 1](_assets/old_vs_new_1.BEImObeX_1v2ULP_learning.svg)

Configurable products

![old vs new 2](_assets/old_vs_new_2.6NGHRCNE_zFLIk_learning.svg)

Microservice attitude

![old vs new 3](_assets/old_vs_new_3.DDDyYUOW_1yjjCD_learning.svg)

Cloud native

![old vs new 4](_assets/old_vs_new_4.D3brrXdR_1SEOPj_learning.svg)

Continuous development

![old vs new 6](_assets/old_vs_new_6.Bw7ess67_J3bpO_learning.svg)

Best of breed tech

![old vs new 6](_assets/old_vs_new_6.Bw7ess67_J3bpO_learning.svg)

Real-time accessible data

![old vs new 7](_assets/old_vs_new_7.BMG0t_QL_Z181Lqy_learning.svg)

## [](#vault_core_key_resources "Copy link to heading")Vault Core key resources

There are four main entities that Vault Core is responsible for within a bank.

Here we will briefly describe them. All of these are fully described within other courses on the Fundamentals Learning pathway.

![Products, Accounts, Postings, Customers](flip_cards_m3.svg)

<table class="tableblock frame-none grid-none stripes-none stretch"><colgroup><col style="width: 20%;"> <col style="width: 80%;"></colgroup><tbody><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><span class="image"><img src="_assets/flip_01_products.CwSfH99n_PAuh8_learning.svg" alt="" title="Products"></span></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">Vault Core is responsible for the manufacturing and operation of banking <strong>products</strong>, and these are expressed as Smart Contracts.</p><p class="tableblock">These define the behavior of financial products (i.e. loans, savings, current accounts, credit cards and so on).</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><span class="image"><img src="_assets/flip_01_accounts.BsuG1ZMC_2vTvlP_learning.svg" alt="" title="Accounts"></span></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Accounts</strong> represent customer holdings, the primary entities for recording financial activity.</p><p class="tableblock">Each account is associated with a product (defined by a Smart Contract); maintains its own balances, and can be controlled by flags, parameters and restrictions.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><span class="image"><img src="_assets/flip_01_postings.C6fakXQ2_Z2ov9dh_learning.svg" alt="" title="Postings"></span></p></td><td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Postings</strong> represent the financial movements between accounts, using a double-entry bookkeeping model.</p><p class="tableblock">Each posting includes a debit and a credit, ensuring financial integrity.</p><p class="tableblock">They are immutable and timestamped, and form the basis of Vault Core’s ledger.</p></td></tr><tr><td class="tableblock halign-left valign-top"><p class="tableblock"><span class="image"><img src="_assets/flip_01_customers.Bg71sRpk_Z1yDohQ_learning.svg" alt="" title="Customers"></span></p></td><td class="tableblock halign-left valign-top"><p class="tableblock">The <strong>customer</strong> entity in Vault Core is used to indicate that a customer has a holding in an account, and this can be linked to the actual customer entity outside of Vault Core using a unique ID.</p></td></tr></tbody></table>

It should be noted that these are not the only resources in Vault Core.

*That completes this module.*

Previous module

Back to Fundamentals