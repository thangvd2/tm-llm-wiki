---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/company_policies_and_procedures/hibernator_release_policy"
title: "Hibernator Release Policy"
scraped_at: "2026-06-17T15:56:08.454Z"
images: 0
---

# Hibernator Release Policy

[Download PDF](/policy/latest/EN/resources/hibernator_release_policy.pdf)

## [](#purpose "Copy link to heading")1\. Purpose

The purpose of this policy is to establish a standardised and structured approach to Thought Machine’s Hibernator releases. It is designed to ensure that every release, whether it be a minor update or a major version release, is executed in a controlled, predictable, and transparent manner. We aim to achieve the following objectives by adhering to this policy in respect of Hibernator:

-   Deliver a solution that meets or exceeds quality and performance expectations.
    
-   Minimise the risk of introducing defects or issues.
    
-   Maintain compliance with contractual requirements.
    

## [](#scope_and_application "Copy link to heading")2\. Scope and Application

This policy is relevant to Thought Machine staff and consumers of Thought Machine’s Hibernator releases worldwide such as Thought Machine clients and partners.

## [](#owner "Copy link to heading")3\. Owner

This policy is owned and maintained by Thought Machine’s Managing Director of Product and Programme Management.

## [](#definitions "Copy link to heading")4\. Definitions

The following definitions, which are extracted from Thought Machine’s template client contract, apply in the context of this document:

-   **Major Release**:  
    A "Major Release" is an upgrade from the existing version of the Software. Major Releases typically contain substantial product changes and improvements in functionality. Each Major Release includes any Minor Releases and Patch Releases relating to the Major Release in question. The naming convention is indicated by the first number in the release version (x.y.z) incrementing by one (x+1.y.z) for example, Hibernator Version 2 would replace Hibernator Version 1. For clarity, X denotes a Major Release, Y denotes a Minor Release and Z denotes a Patch Release.
    
-   **Minor Release**:  
    A "Minor Release" is an update to the existing version of the Software. Minor Releases typically enhance and improve existing functions and are run regularly. Minor Releases include all previous Patch Releases for the then current version. The naming convention is indicated by the second number in the release version (x.y.z) incrementing by one (x.y+1.z) for example, Hibernator Version 1.2 would replace Hibernator Version 1.1.
    
-   **Patch Release**:  
    A "Patch Release" typically fixes critical bugs or vulnerabilities that prevent the Software from working properly. They typically contain minor modifications to address specific problems to ensure the Software continues to run effectively and securely. The naming convention is indicated by the third number in the release version (x.y.z) incrementing by one (x.y.z+1) for example, Hibernator Version 1.1.2 would replace Hibernator Version 1.1.1.
    

All references to “releases” in this policy are to all of the above, unless otherwise specified or the context otherwise requires it.

## [](#the_policy "Copy link to heading")5\. The Policy

### [](#planning_and_cadence "Copy link to heading")5.1. Planning and Cadence

Thought Machine is continuously reviewing its strategic priorities based on market research, client feedback and the company vision. The Product Team regularly reviews the backlog of product improvements and provides clear deliverables for each release.

Thought Machine makes patch releases for critical vulnerabilities and bug fixes on a single Minor Release at any given time. For example, after 1.2.0 is released, patches will no longer be applied to the 1.1.z releases. Similarly, after 2.0.0 is released, no more updates will be made to the 1.y.z releases. Clients are expected to upgrade to the supported minor version as soon as practical to keep up with any vulnerability fixes. Vulnerabilities will be remediated according to the existing [Vulnerability service levels](/policy/latest/EN/company_policies_and_procedures/vulnerability_management_standard#vulnerability_service_levels).

### [](#testing "Copy link to heading")5.2. Testing

Thought Machine follows industry standard practices and coding standards when it comes to release testing, and every improvement and defect fix undergoes thorough testing before release.

Release testing can include testing such as end to end tests, upgrade path tests, and soak tests. Thought Machine ensures that all relevant tests must pass successfully before the release can be shipped to clients.

Each software update must pass a quality test commensurate with the type of release (Major, Minor, or Patch) to ensure a high level of quality, reliability and performance of the software update. While Patch releases typically deliver smaller changes than Major Releases or Minor Releases (for example to fix critical bugs) they still require end to end testing by Thought Machine. This is essential for Thought Machine to manage risk, maintain consistency, and deliver a high-quality product.

Thought Machine encourages clients to update to the latest Hibernator release versions and expects clients to stay on a supported version.

Hibernator will be compatible with all supported versions of Vault Core.

### [](#communication "Copy link to heading")5.3. Communication

Vault Core’s public roadmap will indicate the Hibernator improvements that will be released over the next 18 months and beyond. The Roadmap is updated with each Vault Core release and can be found on the [Vault Portal](/policy/latest/EN/). Further detail about the roadmap planning can be found in the Thought Machine Roadmap Planning Policy.

Thought Machine will communicate software update release dates closer to the time of release. Thought Machine will always try to give as much notice as it can so clients can plan their upgrade but release timelines can change in exceptional circumstances. Our priority is to deliver safe, secure, high quality software updates to our clients.

Thought Machine will notify clients once the new software update is available, which clients can then download to their instance.

Thought Machine will make Release Notes available with each software update. Release Notes will list the contents of the software update.

Critical bugs that impact a given release will be communicated by Thought Machine as a Client Advisory Notice which can include any actions required and any mitigation steps when issues are confirmed. Vulnerabilities are reported through the documentation as defined in our vulnerability management standards.

Clients can reach out to their Thought Machine contact if they require further information regarding the release.

### [](#release_artefacts "Copy link to heading")5.4. Release Artefacts

A Hibernator release contains the necessary binaries for installing or upgrading to the new version. Supporting documentation for the release, including installation guidance, is published on the [Vault Portal](/policy/latest/EN/). Other release documents, such as the [Product Description](/policy/latest/EN/product_descriptions/hibernator) which outlines the scope of the Hibernator product, are published on the [Vault Portal](/policy/latest/EN/) with every release.

### [](#rollbacks "Copy link to heading")5.5. Rollbacks

Thought Machine supports the downgrade of an upgraded version of Hibernator to the previously installed version (also referred to as "Rollback") subject to the following conditions:

-   the Rollback is between a Minor Release or a Patch Release in the same Major Release line; and
    
-   the upgrade and Rollback operations are carried out using vaultctl and the TMC Operator.
    

Rollbacks shall be considered an integral part of the upgrade process. Therefore, Rollbacks must be executed within seven (7) days of completing the initial upgrade. Beyond this 7-day period, a fix-forward strategy should be employed to address and rectify any issues.

Note that a Rollback is not possible if any of the following changes have been implemented as there is a risk the product could enter an unstable state.

-   upstream or downstream modifications that leverage new features introduced in the upgraded version; and/or
    
-   any manual post-installation steps that have been carried out as part of the upgrade process.
    

Further information can be found on the [Vault Portal](/policy/latest/EN/).

## [](#changes_to_the_policy "Copy link to heading")6\. Changes to the policy

Thought Machine as a technology company is always seeking to develop and improve its processes to ensure the best outcomes. Thought Machine therefore reserves the right to change this policy at its discretion and communicate these changes to clients in line with the "communication" section above.

## [](#governance "Copy link to heading")7\. Governance

At a minimum, all company policies are to be reviewed annually or when off cycle material changes occur.