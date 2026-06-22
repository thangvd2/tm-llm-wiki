---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/company_policies_and_procedures/secure_software_development"
title: "Secure Software Development at Thought Machine"
scraped_at: "2026-06-17T15:56:14.928Z"
images: 0
---

# Secure Software Development at Thought Machine

[Download PDF](/policy/latest/EN/resources/secure_software_development.pdf)

## [](#introduction "Copy link to heading")1\. Introduction

Thought Machine creates software products for the financial services market with a commitment to quality. An important element of quality is the security built into those products, and Thought Machine believes that security is paramount in its design, development, and testing of its products.

## [](#the_scope "Copy link to heading")2\. The scope

This document describes how Thought Machine delivers on its goal of developing highly secure, quality software for its clients.

## [](#our_approach_to_secure_software_development "Copy link to heading")3\. Our approach to secure software development

Thought Machine has placed the secure software development lifecycle at the heart of its development process. This approach creates more secure software and does so with the greatest amount of collaboration across engineering teams.

Our approach has three key elements:

-   A process of secure software development
    
-   A culture of ownership and collaboration
    
-   Transparency, communication and collaboration with our clients
    

Each element fosters the necessary practices and culture internally and communicates our commitments to our clients.

## [](#secure_software_development_process "Copy link to heading")4\. Secure software development process

Our secure software development process consists of multiple steps as our engineers work through the design, development, testing, and release of our software products.

### [](#threat_modelling "Copy link to heading")4.1. Threat modelling

We create threat models for our software products. Every team is responsible for building and maintaining these models. The threat models are based on the industry standard STRIDE methodology that focuses on identifying and enumerating:

-   Threats to the software when in use, and descriptions of those threats
    
-   Severity of the threats based on the impact they can have on the software, its data, and its operations
    
-   Controls and methods that can be used to mitigate the identified threats
    

The documentation from our threat models is available to all engineering and security teams.

### [](#secure_design_and_development "Copy link to heading")4.2. Secure design and development

As we design our software, we consider the security requirements identified in the threat model. These security requirements include:

-   Protection against unauthorised access, disclosure, or modification of data
    
-   Protecting the integrity and validity of data input, storage, processing, and output
    
-   Protection against the loss and unavailability of information, systems, and services
    
-   Data privacy for sensitive data - particularly that of individuals
    
-   Application of security standards and good industry practice
    
-   Minimisation of available services and capabilities to reduce exposure to threats
    

### [](#securing_source_code "Copy link to heading")4.3. Securing source code

Thought Machine protects the integrity of code submitted for review through to its release. All source code used in our software products is stored and maintained in centralised code repositories. Access to those repositories is authenticated and recorded, and changes are tracked. Code owners are defined for all files in all repositories, and changes to a file must be approved by that file’s owner before the changes can be committed to the repository. Any changes to the submitted code must undergo another round of all applicable review, testing, and approval processes. Code must pass through change control and approvals before it can be promoted to production.

### [](#security_testing "Copy link to heading")4.4. Security testing

Testing is performed on all code intended for use in production environments. This includes code used in our software products, SaaS environments, and in internal Thought Machine operations.

Our testing objectives are to validate that the code meets the intended objectives of:

-   Secure configurations and standards based on industry good practices
    
-   Identification of security vulnerabilities, including those from third-party suppliers
    
-   Functional and non-functional testing to validate meeting the requirements for data integrity and availability
    

We utilise testing techniques based upon their suitability for the type of code and testing objectives. We utilise, as appropriate:

-   Peer review
    
-   Static application security testing (SAST)
    
-   Dynamic application security testing (DAST)
    
-   Known CVE scanning
    
-   Third-party library testing
    
-   Penetration testing
    

Third-party software and libraries used in Thought Machine software products are evaluated for any vulnerabilities, and any licensing restrictions.

Test findings are documented, reported, and assigned to the team responsible for the affected component. The findings and their remediation efforts are tracked until they are resolved.

Whenever possible, we automate security testing to provide testing consistency and accelerate reporting testing results to the relevant developers as quickly as possible.

### [](#change_and_release_management "Copy link to heading")4.5. Change and release management

All software must have had its code appropriately security tested before being released. Any outstanding critical or high findings identified within Thought Machine code security testing are reported to our clients through our release notes.

Thought Machine also performs automated scanning to identify known CVEs and remediate vulnerabilities present in container images. CVE vulnerabilities are published under the vulnerability report within the release notes of each Vault Core release. Thought Machine has a service level agreement for remediation of container CVEs, as defined in the Vulnerability Management Standard for Thought Machine Products.

Great care is taken to ensure that the promotion of code to production environments is controlled and that there is segregation between production and non-production environments. Production and non-production environments are maintained in separate accounts, and changes to production environments must pass through testing, approval, and change control processes before they are eligible to be promoted into production.

## [](#culture_of_ownership_and_collaboration "Copy link to heading")5\. Culture of ownership and collaboration

Our culture of ownership and collaboration leads to better quality and security in our products. This culture is based on the active participation of security personnel throughout the development process and clear ownership of code by development teams.

### [](#ownership "Copy link to heading")5.1. Ownership

All components of our software products are assigned owners who are responsible for maintaining that component of the code, including updates, patches, and fixes. The owners are responsible for keeping their code up to date, maintaining any third-party code included in their area, and providing fixes for any security issues or vulnerabilities.

The ownership of code is embedded in our engineering culture and is not unique to our security efforts. This approach drives ownership of all issues with code and provides clear direction to engineers.

### [](#collaboration "Copy link to heading")5.2. Collaboration

We have created two categories of “champions” responsible for security within each of our engineering teams. Each engineering team has their own security champion who is responsible for coordinating security activities such as threat modelling, embedding security requirements in the design, and vulnerability triaging. In addition, our Security Team has champions who embed themselves into each engineering team and further facilitate threat modelling, assisting in the design of a solution that includes security requirements and vulnerability triaging. This model creates collaboration and a shared purpose within each engineering team that makes security an integral part of the design and development of any solution.

### [](#training "Copy link to heading")5.3. Training

Thought Machine conducts regular sessions on secure coding, hunt-the-bug, and threat modelling to provide engineers with an ongoing awareness of good security practices. This, coupled with our active “champions” embedded within engineer teams, creates a strong culture of awareness.

## [](#client_communication "Copy link to heading")6\. Client communication

### [](#security_reporting_to_clients "Copy link to heading")6.1. Security reporting to clients

Thought Machine provides the details of any CVSS-rated Critical and High vulnerabilities identified within Thought Machine code to its clients in the release notes for each published version of our products. Thought Machine also provides the details of any known CVEs identified in container images used within our products for each published version.

These release notes contain a list of vulnerabilities that have been fixed in that version, as well as a list of vulnerabilities that are present and not remediated at the time of the release. The list of vulnerabilities that are still present at the time of release will include:

-   The associated CVE
    
-   The original CVSS score associated with the CVE
    
-   The affected components in the Thought Machine software
    
-   Any information that helps inform clients of any conditions around the vulnerability, its applicability, and any controls that mitigate the vulnerability
    

As new releases are published, we create and publish associated lists of fixed vulnerabilities and any newly occurring or existing vulnerabilities at the time of that release.

Vulnerabilities that cannot be remediated without the client’s input are communicated to the client through the relevant client service representative (for example, where a vulnerability fix would require client modifications). This is performed by producing a client advisory document which will identify the vulnerability through the CVE identifier, where the vulnerability exists, and any actions the client can take to mitigate the vulnerability.

## [](#definitions "Copy link to heading")7\. Definitions

**Code** - digital text, language, and constructs used to build software. Code, in this case, refers to both the raw text and assembly of characters, the compiled programs and software, and the constructs that Thought Machine uses to group these pieces together.

**Component** - a grouping of code representing a programmatic or operational function as defined by Thought Machine. Components are defined and maintained by Thought Machine in Jira.

**Security Team** - The personnel within Thought Machine who are formally assigned the responsibility for security.

**Threat model** - a representation of all relevant threats to an asset, and relevant mitigation strategies. Typically used to identify threats to software, but it can also be used for systems, networks, and other assets.

**Vulnerability** - A flaw in a software, firmware, hardware, or service component resulting from a weakness that can be exploited, causing a negative impact on the confidentiality, integrity, or availability of an impacted component or components.

**CVE** - Common Vulnerabilities and Exposures. CVE is a glossary that classifies vulnerabilities. The glossary analyses vulnerabilities and then uses the Common Vulnerability Scoring System (CVSS) to evaluate the threat level of a vulnerability.

**CVSS** - The Common Vulnerability Scoring System. CVSS is a free and open industry standard for assessing the severity of computer system security vulnerabilities.