---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/company_policies_and_procedures/open_source_policy"
title: "Thought Machine Open Source Policy"
scraped_at: "2026-06-17T05:17:20.983Z"
images: 0
---

# Thought Machine Open Source Policy

[Download PDF](/policy/latest/EN/resources/open_source_policy.pdf)

## [](#purpose "Copy link to heading")1\. Purpose

The purpose of the Thought Machine’s Open Source Policy is to ensure the proper evaluation and controlled use of Open Source Software in Thought Machine’s software products, namely Vault Core and Vault Payments.

## [](#scope_and_application "Copy link to heading")2\. Scope and application

This policy is relevant to Thought Machine staff and users of Thought Machine’s Vault Core and Vault Payments products worldwide, namely Thought Machine clients and partners.

## [](#owner "Copy link to heading")3\. Owner

This policy is owned and maintained by Thought Machine’s Chief Technology Officer (CTO).

## [](#definitions "Copy link to heading")4\. Definitions

-   **Apache-2.0**: A permissive free software licence written by the Apache Software Foundation (ASF)
    
-   **BSD**: Berkeley Source Distribution, being a family of permissive free software licences, imposing minimal restrictions on the use and distribution of covered software (referenced example **BSD-3-Clause** )
    
-   **Distinguished Engineer**: A Senior engineer within Thought Machine responsible for setting and executing direction for a product or technical area or key initiatives
    
-   **Free Software Foundation (FSF)**: A nonprofit with a worldwide mission to promote computer user freedom
    
-   **GNU GPL**: The GNU General Public License, being the most widely used free software licence which has a strong copyleft requirement (referenced example **GPL-2.0-with-classpath-exception** which contains exceptions that if correctly adhered to, allow its use without being subject to the strong copyleft restrictions)
    
-   **GNU LGPL**: GNU Lesser General Public License, being a free-software licence published by the Free Software Foundation (FSF) (referenced examples **LGPL-2.1-or-later**, **LGPL-3.0-or-later**)
    
-   **MIT** : A permissive software licence originating from the Massachusetts Institute of Technology (MIT) (referenced examples **MIT** and **MIT-0** \- a modification to the usual MIT licence that removes the requirement for attribution)
    
-   **MPL**: The Mozilla Public License, being a free and open source weak copyleft licence for most Mozilla Foundation software such as Firefox and Thunderbird
    
-   **Open Source Initiative (OSI)**: The authority that defines Open Source, recognised globally by individuals, companies, and public institutions
    
-   **Open Source Library**: Any third-party software library with an Open Source Licence
    
-   **Open Source Licence** : Software licences that allow content to be used, modified, and shared under specified conditions
    
-   **Open Source Software (OSS)**: As defined by the Open Source Initiative, the most up to date version of which can be found here: [https://opensource.org/osd](https://opensource.org/osd)
    
-   **Permitted Approvers**: Thought Machine roles responsible for evaluating new Open Source Licences and accepting them on to the Software Licence Whitelist, specifically the Chief Technology Office and Distinguished Engineers
    
-   **Software Bill of Materials (SBOM )**: A list of all the open source and third-party components present in a codebase. An SBOM also lists the licences that govern those components, the versions of the components used in the codebase, and their patch status, which allows security teams to quickly identify any associated security or licence risks
    
-   **Software Licence Whitelist**: A Thought Machine approved list of software licences accepted for use in any Thought Machine Product in accordance with this Policy, the most up to date version of which is available on Thought Machine’s Vault Portal
    
-   **Software Package Data Exchange (SPDX)**: An open standard (or format) for communicating software Bill of Materials (SBOM) information including components, licences, copyrights, and security references
    
-   **Third Party Approvers**: A restricted set of Thought Machine engineers responsible for reviewing and approving updates to Open Source Libraries
    
-   **Thought Machine Products** : Thought Machine’s software products, namely Vault Core and Vault Payments, which for the purposes of this policy means the Platform Layer and Thought Machine Configurations (but not Client Configurations or third party products) as each of those terms is defined in the respective Product Specifications
    
-   **Ubuntu LTS (Long Term Support)**: An Ubuntu release with a longer support period. It will receive updates longer than non-LTS versions (5 years vs 2 years)
    

## [](#the_policy "Copy link to heading")5\. The Policy

Thought Machine uses and ships Open Source Libraries in its Thought Machine Product in the manner set out in this Policy.

There are numerous, industry recognised, benefits to using OSS. When used properly, OSS can be an effective software solution while also significantly reducing development time, costs, and resource expenditure. Furthermore, using OSS components allows Thought Machine to compile the Thought Machine Products to their specifications and for their environments, while still retaining the ability to identify and fix defects in the OSS without relying on third-party vendors.

However, Thought Machine also acknowledges that there are also potential risks associated with using OSS. Accordingly, this Policy has been created to ensure the proper evaluation of Open Source Licences and controlled use of Open Source Libraries in the Thought Machine Products to help mitigate potential risks and drive compliance with standards and requirements applicable to Thought Machine.

### [](#software_licence_whitelist "Copy link to heading")5.1. Software Licence Whitelist

Thought Machine has and maintains a Software Licence Whitelist, being a tightly controlled, approved list of Open Source Licences under which Open Source Libraries can be accepted for use in any Thought Machine Product.

Thought Machine will only use and ship Open Source Libraries in Thought Machine Products where the Thought Machine engineering team has confirmed that the Open Source Library is approved for use under an Open Source Licence either already on the Software License Whitelist or an Open Source Licence that has been evaluated and approved to be added to Software Licence Whitelist in accordance with this Policy.

Occasionally, as technical requirements evolve, it may become necessary to include a new Open Source Library in the Thought Machine Products that uses an Open Source Licence not available on the Software Licence Whitelist. In these scenarios, Thought Machine will evaluate that Open Source Library and its Open Source Licence in accordance with this Policy and, only if approved, add it to the Software Licence Whitelist.

#### [](#third_party_dependency_software "Copy link to heading")5.1.1. Third Party Dependency Software

Non-source code software licences on binaries required by but not shipped with the Thought Machine Product (eg. Grafana, Hashicorp Vault) are not required to adhere to this policy.

### [](#evaluation_principles "Copy link to heading")5.2. Evaluation Principles

When evaluating the items on the Software Licence Whitelist, Thought Machine may engage with broad licence categorisations or third-party software to help evaluate the suitability of Open Source Licences, however, it does not rely solely on this.

Instead, Thought Machine carefully reviews and evaluates each Open Source Licence on a case-by-case basis to provide a more robust and precise assessment to ensure the terms are acceptable based on Thought Machine’s intended use of that Open Source Licence, with a particular focus on any implications for Thought Machine’s intellectual property position and impact to Thought Machine’s clients and partners. For example, when evaluating a licence, Thought Machine will, at a minimum consider the following:

-   Ensuring that the licence, under its intended usage, will not trigger any copyleft restrictions
    
-   Ensuring that the licence does not, and will not, adversely affect the ownership of, or lead to unauthorised access to, Thought Machine’s or its clients / partners intellectual property
    
-   Ensuring that the use of the licence does not materially restrict our clients’ ability to use Thought Machine Products for their intended purposes (for example, any restrictions against use in specified areas of endeavour)
    
-   Ensuring that the use of the licence does not require clients to provide attribution for using any Open Source Library
    

Under no circumstances would Thought Machine approve for use an Open Source Licence that put additional requirements on clients to comply with its terms, or which impacts the licensing of Thought Machine Products.

### [](#permitted_approvers "Copy link to heading")5.3. Permitted Approvers

Each new Open Source Library being considered for addition to the Software Licence Whitelist must first pass an initial technical evaluation (performed by a member of the Thought Machine engineering team) to validate that it meets a quality bar consistent with Thought Machine standards and requirements, including this Policy.

If and when this initial technical evaluation is successful, the Thought Machine engineer will raise a pull request (PR) to add the new third-party software licence to the Software Licence Whitelist. That PR will then be evaluated by a Permitted Approver in accordance with the following.

The Software Licence Whitelist is stored, as code, in Thought Machine’s build system configuration file at the root of the source-code repository which guarantees that a full change history is maintained and access control is enforced. Changes to this Software Licence Whitelist must be evaluated and accepted by a restricted set of Permitted Approvers, consisting of the Chief Technology Office and Distinguished engineers.

The proposed new Open Source Licence will only be accepted and added to the Software Licence Whitelist, becoming approved for use, if and when at least one of the Permitted Approvers has performed the evaluation procedure detailed below and is satisfied that the new Open Source Licence meets the required thresholds for use in Thought Machine Products and is suitable for inclusion on the Software Licence Whitelist.

### [](#evaluation_procedure "Copy link to heading")5.4. Evaluation Procedure

When evaluating a new Open Source Licence, the Permitted Approvers must consider and complete the following criteria:

-   Is the software licence considered standard, appearing in the [SPDX list](https://spdx.org/licenses/) ? If not, an exception will need to be raised and evaluated on a case-by-case basis.
    
-   Is the licence free software as defined by the FSF or is it OSI approved? (SPDX [tracks both of these data points](https://github.com/spdx/license-list-XML/blob/main/DOCS/license-fields.md#e-osi-approved)). If not, a determination must be made about what its use will mean for Thought Machine and its clients and partners. Thought Machine’s Legal team also may be consulted at this point. Note: the FSF and OSI lists are not exhaustive so the Open Source Licence may still be deemed acceptable for whitelisting even if it is not explicitly referenced by those parties.
    
-   Does the licence represent a material change to the nature of licences already accepted by Thought Machine? If so it will need detailed investigation and Thought Machine’s Legal team also may be consulted at this point. As examples:
    
    -   Thought Machine has whitelisted MIT, so adding MIT-0 does not make a material change (since it is a strictly more permissive variant of an already whitelisted licence).
        
    -   Thought Machine has whitelisted Apache-2.0 and MIT separately, so adding a combined Apache-2.0 AND MIT for a library licensed under both does not make a material change (we are not accepting any licence not previously accepted).
        
    -   Thought Machine has whitelisted LGPL-2.1-or-later. However, whitelisting LGPL-3.0-or-later is a potentially material change as the newer version has different requirements that require further consideration before whitelisting.
        
    
-   The specific use case and classifying the licence into one of four categories as appropriate:
    
    -   **Permissive**: Licences that allow use of the code with minimal restrictions. For example, these may require attribution of the library licensed thus. Common examples include Apache-2.0 and the various flavours of MIT and BSD licence. Permissive licences are generally usable by Thought Machine.
        
    -   **Weak copyleft**: Licences that require changes to that library to be released along with the software. They do not add further conditions on redistribution. Common examples are GNU LGPL and MPL. Weak copyleft licences are generally usable by Thought Machine, but some care may need to be taken with their specific use (for example, the interaction between LGPL and Go code is undesirable) and require a careful assessment of any restrictions.
        
    -   **Strong copyleft**: Licences that require derived works to be similarly licensed. The most common example is the GNU GPL. Strong copyleft licences are generally not acceptable at Thought Machine, however, it is important to note that some licences with strong copyleft provisions allow exceptions when the licence is used in a restricted manner meaning there may be limited scenarios where use is permissible upon careful assessment and application. For example, Thought Machine’s specific use cases for the GPL-2.0-with-classpath-exception licence mean it can be used with weak copyleft provisions. However, Thought Machine would never use strong copyleft licences that would limit or restrict the contractual rights and licences granted to clients or partners or impose any obligation to disclose, licence or otherwise make available any part of the Thought Machine Products on an open source basis.
        
    -   **Other**: Anything else, including commercial, bespoke or licences that do not otherwise fall into the above categories. These are evaluated on a case-by-case basis, but are not generally acceptable at Thought Machine.
        
    
-   Is the software is available under a dual-licence structure? If yes, which licence does Thought Machine intend to accept it under? Some software packages are available under a dual-licence structure, allowing the consumer to choose which licence it is accepting it under, and therefore which terms it is being bound to. For example: the package node-forge is dual-licenced under both BSD-3-Clause and GPL-2.0 and Thought Machine accepts it under the BSD-3-Clause licence.
    
-   Does Thought Machine require any new specific controls around the use of the packages under this new licence to ensure compliance? Some software packages are available under licences which while strong copyleft in nature, contain exceptions that if correctly adhered to, allow its use without being subject to the strong-copyleft provision (for example the GPL-2.0-with-classpath-exception). In some cases it may be necessary for Thought Machine to add internal controls to ensure these exceptions are being correctly compiled with.
    

If the Open Source Licence is evaluated and found to meet the required thresholds for use in Thought Machine Products, the Open Source Licence will be accepted on to the Software Licence Whitelist, becoming approved for use within Thought Machine Products. Any Open Source Library available under an accepted licence on the Software Licence Whitelist can be considered for use subject to a successful technical evaluation by the Thought Machine engineering team in Thought Machine Products.

If the Open Source Licence is evaluated and found to be something Thought Machine cannot accept (for example, a non-standard licence which contains strong copyleft restrictions), it is added to Thought Machine’s explicit list of rejected licences to prevent any Open Source Library licensed under it from being considered in the future.

When adding a new Open Source Library to the Software Licence Whitelist, the licence conditions of all transitive dependencies (for example, other Open Source Libraries which are required to use it) are checked. This ensures that Thought Machine has evaluated the licence conditions (and explicitly reviewed and accepted all licences) in the full Software Bill of Material for our products.

### [](#maintaining_approved_open_source_libraries_and_licences "Copy link to heading")5.5. Maintaining Approved Open Source Libraries and Licences

Thought Machine is committed to ensuring ongoing compliance with the requirements of Open Source Licences. Therefore, after an Open Source Licence has been accepted and added to the Software Licence Whitelist both the Open Source Library which introduced it, and Thought Machine’s use of that Open Source Library require ongoing maintenance and monitoring.

#### [](#maintaining_updates_to_open_source_libraries "Copy link to heading")5.5.1. Maintaining Updates to Open Source Libraries

In order to manage updates to Open Source Libraries on the Software Licence Whitelist, Thought Machine explicitly pins all such libraries to an explicit revision (either a commit hash or released version) which can only be altered by a Thought Machine engineer making a conscious choice to raise a Pull Request (PR) to update the library to a later revision. Any such PR will then be evaluated by a Third Party Approver.

Moving to updated versions of Open Source Libraries already on the Software Licence Whitelist can present some challenges and requires careful consideration before taking action. It is not always possible to use the latest version of each Open Source Library since some depend on particular versions of features of other libraries. Additionally not all Open Source Libraries adhere to the same versioning scheme making it difficult to define a single maintenance policy across all Open Source Libraries.

In general, Thought Machine’s policy to maintaining Open Source Libraries on the Software Licence Whitelist is that if a formal support policy is in place from the upstream project, this may override further considerations (e.g. we use Ubuntu LTS releases rather than following the latest six-monthly ones) otherwise:

-   Thought Machine aims to stay no more than one major release behind the latest available major version of each such Open Source Library. For example, once v4.0.0 is available, Thought Machine should be using v3.x.x or v4.x.x
    
-   Thought Machine aims to stay no more than two minor releases behind the latest available minor version of each such Open Source Library. For example, once v4.3.0 is available, Thought Machine should be using v4.1.x, v4.2.x or v4.3.x
    
-   Thought Machine aims to stay as up-to-date with patch releases as possible for each such Open Source Library
    
-   In the case of security bugs, Thought Machine upgrades to a version of each such Open Source Library with a fix as soon as possible, attempting to stay as close as possible to the same major/minor release The above assumes projects following semantic versioning or similar principles. For projects that have a different scheme, Thought Machine will apply equivalent rules to their scheme (e.g. treating minor versions as major when those versions may contain breaking changes).
    

#### [](#compliance_with_software_licence_whitelist "Copy link to heading")5.5.2. Compliance with Software Licence Whitelist

To ensure internal compliance with the authorised Software Licence Whitelist, before using any Open Source Libraries in Thought Machine Products, the following process will be followed:

-   Where possible, Open Source Licences are automatically fetched and validated from the data available in the upstream repository (for example, the licence field in npm’s package.json format, the License field in PyPI’s metadata, or a Licence file in a Github repository)
    
-   Each time Thought Machine fetches one of these Open Source Libraries, the licence is compared against the Software Licence Whitelist, preventing a successful build if the licence has been changed to one that is not on the Software Licence Whitelist
    
-   If the licence cannot be automatically fetched and validated using data from the upstream repository, it must be explicitly annotated in the build system before the dependency can be included, and manually verified by the reviewer
    
-   If restrictions on the use of an Open Source Library are important to the continued compliance with the terms of its software licence then Thought Machine makes use of its build system to ensure that each new use of the Open Source Library is explicitly approved. This is done using the “visibility” concept native to Thought Machines build system, which allows a restriction to be placed on what source code is allowed to depend on any library (so trying to include it into a new and unapproved package will result in a build failure)
    

### [](#security "Copy link to heading")5.6. Security

Thought Machine is committed to maintaining the security of the Thought Machine Products by staying abreast of urgent security issues related to third-party dependencies, including OSS. Please refer to the Vulnerability Management Standards for Thought Machine for further information.

### [](#third_party_support "Copy link to heading")5.7. Third Party Support

Thought Machine will support the OSS that is shipped in the Thought Machine Products in line with its contractual commitments to clients and partners. Clients, however, may prefer to arrange additional support arrangements, in which case there may be other companies available who will provide commercial constructs for individual components (e.g. Kubernetes, PostgreSQL, Kafka, etc). It is the client or partners responsibility to ensure that any such additional support in no way impacts the contractually agreed support position (in terms of Thought Machine’s support of the Thought Machine Products). Thought Machine does not provide any such assistance as a matter of course, but can be involved with discussions on such matters and provide recommendations where possible upon request.

## [](#roles_and_responsibilities "Copy link to heading")6\. Roles and responsibilities

Company policies are governed by the Policy of Policies which also documents the roles and responsibilities for policies.

## [](#governance "Copy link to heading")7\. Governance

Review: At a minimum, all company policies are to be reviewed annually or when off cycle material changes occur.

Non-compliance: individuals who are found to be in breach of company policies may be subject to disciplinary action. Policy breaches will be escalated accordingly.