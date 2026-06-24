---
source_url: "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN/delivery_workstream/infrastructure/security_design"
title: "Security Design"
scraped_at: "2026-06-17T16:02:46.968Z"
images: 0
---

# Security Design

## [](#purpose "Copy link to heading")Purpose

This activity is concerned with the design of robust access controls, encryption protocols, and monitoring systems to safeguard data and applications from cyber threats.

The goal is to protect sensitive assets including customer transactions, account details, and payment data. This protection is often framed by using the abbreviation CIA (which stands for Confidentiality, Integrity, Availability). The security design will identify and mitigate potential security risks, vulnerabilities, and cyber threats that could compromise privacy.

This activity is closely associated with operational controls and measures to prevent financial loss, fraudulent activities, and unauthorised access to banking systems.

It is important to adapt to emerging threats, evolving attack vectors, changes in the cybersecurity landscape by maintaining a flexible security architecture and treating this as an iterative process.

## [](#predecessor_activities "Copy link to heading")Predecessor Activities

1.  [Policy Discovery](/delivery-framework/latest/EN/delivery_workstream/infrastructure/security_design)
    

## [](#guidance "Copy link to heading")Guidance

Thought Machine publishes guidance around securing Vault Core in the Documentation Hub: [Vault Security](/vault-core/latest/EN/reference/vault_security)

Consider the following when undertaking this exercise.

-   *Threat Modelling -* Identify potential security threats, vulnerabilities, and attack vectors specific to the organisation’s architecture to help prioritise security risks and enable mitigations to be incorporated into the design.
    
-   *Security Architecture Patterns -* Apply established security architecture patterns and best practices (e.g. zero trust architecture and defence in depth) to the infrastructure design. Seek to take advantage of proven security principles.
    
-   *Regulatory Compliance Framework Integration -* Align security considerations with banking industry regulatory requirements (for example, GDPR, PCI DSS, SOX).
    
-   *Execution Strategies and Best Practices -* Adopt a risk-based approach by prioritising security considerations based on the level of risk posed to critical assets and functions of the banking solution. Establish documentation standards. Define standards for security requirements, controls, and design decisions, ensuring consistency and clarity across the infrastructure design. Engage with security professionals and architects to validate design decisions and incorporate industry best practices. Conduct peer reviews and assessments of the infrastructure design to identify potential gaps or weaknesses in security controls.
    
-   *Avoid -* Do not overlook insider threats by focusing on external threats. For example, disgruntled employees with privileged access can lead to security breaches. Do not assume that cloud service providers automatically provide all necessary security measures without verifying and configuring them appropriately for the banking solution. Failing to implement robust mechanisms for continuous monitoring and incident response can result in undetected security breaches or compliance violations. Inadequate training and awareness among development teams about security best practices and common vulnerabilities as this can lead to unintentional security lapses in the infrastructure design.
    

**Examples**

-   *Security Architecture Document -* Detailed documentation outlining the overall security architecture of the target infrastructure, including design principles, components, controls, and their interactions.
    
-   *Threat Model -* Identification and documentation of potential threats, vulnerabilities, and attack vectors specific to the business, along with risk assessments and prioritisation of security concerns.
    
-   *Security Requirements Specification -* Security related requirements for the solution, including authentication mechanisms, access controls, encryption standards, data protection measures, and regulatory compliance requirements.
    
-   *Network Security Design -* Design documentation detailing the network architecture, segmentation strategies, firewall configurations, intrusion detection/prevention systems, and network monitoring mechanisms to safeguard against unauthorised access and network-based attacks.
    
-   *Data Protection Plan -* Strategies and mechanisms for protecting sensitive data, including data encryption, tokenisation masking, data loss prevention (DLP), and data backup/restore procedures.
    
-   *Identity and Access Management (IAM) Design -* Design of IAM processes, policies, and technologies for managing user identities, authentication, authorisation, and privileged access management (PAM) within the cloud environment, ensuring least privilege access and strong authentication controls.
    
-   *Incident Response Plan -* Document incident response procedures, including incident detection, escalation, investigation, containment, eradication, and recovery processes.
    
-   *Compliance Documentation -* Documentation demonstrating compliance with relevant regulatory requirements, industry standards (for example, PCI DSS, GDPR), and internal security policies, along with evidence of security controls implementation and adherence.
    
-   *Security Testing Plan -* Plan for security testing activities, including vulnerability assessments, penetration testing, security code reviews, and security scanning, to identify and remediate security weaknesses before deployment and during operation.
    
-   *Security Awareness and Training Materials -* Training materials and awareness campaigns to educate employees and stakeholders about security best practices, policies, and procedures, fostering a security-conscious culture within the organisation.
    

## [](#templates "Copy link to heading")Templates

Thought Machine does not have any templates to support the delivery of this activity.

* * *

### [](#disclaimer "Copy link to heading")Disclaimer

See the Disclaimer relating to this and all other Vault Core Delivery Framework pages [here](/delivery-framework/latest/EN/getting_started/disclaimer/).

Thought Machine Confidential Information.

© 2025 Thought Machine Group Limited. All rights reserved.