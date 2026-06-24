---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/company_policies_and_procedures/access_to_saas_environments"
title: "Thought Machine Access to SaaS Environments"
scraped_at: "2026-06-17T15:55:54.135Z"
images: 0
---

# Thought Machine Access to SaaS Environments

[Download PDF](/policy/latest/EN/resources/access_to_saas_environments.pdf)

## [](#introduction "Copy link to heading")1\. Introduction

This document describes the security controls in place for access by Thought Machine personnel to SaaS environments it manages on behalf of its clients.

## [](#thought_machine_personnel_access "Copy link to heading")2\. Thought Machine personnel access

Thought Machine personnel do not have permanent access to SaaS production environments. Whenever possible, actions taken on production environments shall be performed through “zero-touch”, automated, and programmatic CI/CD tooling or through the automatic collection and delivery of logs, alerts, and metrics.

Direct access by Thought Machine personnel to SaaS environments is only used when there is an essential and urgent requirement to perform manual actions in the environment.

If a production incident is raised, it is essential and urgent to perform manual actions, and the only way to address the incident is through direct access by personnel into the production environment, then, the Break Glass procedure can be triggered.

## [](#break_glass_controls "Copy link to heading")3\. Break-Glass Controls

### [](#access_control "Copy link to heading")3.1. Access Control

1.  Only pre-defined and approved personnel are granted permission to take part in the Break Glass procedure
    
    1.  Personnel may only invoke the Break-Glass procedure to access SaaS production environments if their role explicitly includes responsibility for supporting those environments.
        
    2.  Personnel permitted to approve Break-Glass requests must be senior and trusted members of engineering as determined by Thought Machine management.
        
    3.  The list of break glass approvers will be kept to a minimal set of senior and trusted members of engineering and is maintained through IAM policies and procedures.
        
    4.  Personnel with no business need to participate in the Break-Glass procedures shall not be granted access to roles associated with the Break-Glass procedures.
        
    
2.  Personnel who are designated as able to invoke or approve Break-Glass actions are assigned to defined IAM roles with defined policies that permit access to their respective Break-Glass responsibilities.
    
    1.  Personnel authorised to request break glass are granted the minimum permissions necessary to perform the required actions on the target resources.
        
    2.  The role definition for requesters shall be separate from the role definition for approvers to establish a segregation of duties between the function of Break-Glass requesters and approvers.
        
    

### [](#operational_controls "Copy link to heading")3.2. Operational Controls

1.  Access to SaaS production environments requires a formal documented request by the personnel requesting access
    
    1.  All requests must identify an individual real person and authenticate them as the the requestor prior to request being submitted
        
    2.  Break Glass requests must contain the account to which access is being requested, the level of access being requested, and a concise justification for the request
        
    3.  All requests must be logged.
        
    
2.  All requests require formal and recorded approval before access is granted
    
    1.  All approvals must identify the individual real person performing the approval, and authenticate them as the approver prior to the approval being performed
        
    2.  A segregation of duties must exist between requestors of break-glass access, and the approvers of the access request. A requester shall not have the capability to approve their own request.
        
    3.  All approval of requests must be logged.
        
    
3.  Approved access to production environments is limited to a fixed period of time and expires at the end of this period of time.
    
4.  Access to Production Environment through break glass requires authentication of the requestor prior to granting access to the requested production environment.
    
5.  All actions performed by the person granted access are logged and must be stored in centralised audit logs per Data Retention Standards.
    
6.  Each use of Break Glass to access Vault SaaS production environments is reviewed for appropriateness.
    

## [](#standards_and_definitions "Copy link to heading")4\. Standards and definitions

**Break Glass** - a defined and secure means of gaining emergency access privileges in certain environments where such privileges do not usually exist.

**Production Environments** - systems and networks that are used by Clients for delivering services to their customers.

**SaaS Environments** - Thought Machine’s Software as a Service offerings (Vault Core and Vault Payments) as provided to clients.