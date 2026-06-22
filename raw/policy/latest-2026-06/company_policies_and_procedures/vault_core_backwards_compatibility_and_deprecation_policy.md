---
source_url: "https://vault-portal.thoughtmachine.net/policy/latest/EN/company_policies_and_procedures/vault_core_backwards_compatibility_and_deprecation_policy"
title: "Vault Core Backwards Compatibility and Deprecation Notice"
scraped_at: "2026-06-17T15:56:22.435Z"
images: 0
---

# Vault Core Backwards Compatibility and Deprecation Notice

[Download PDF](/policy/latest/EN/resources/vault_core_backwards_compatibility_and_deprecation_policy.pdf)

## [](#purpose "Copy link to heading")1\. Purpose

The purpose of Thought Machine’s Vault Core Backwards Compatibility and Deprecation Policy is to describe how Thought Machine will announce and manage Vault Core software changes which will require clients to change their existing integrations.

## [](#audience "Copy link to heading")2\. Audience

This policy is relevant to Thought Machine staff and consumers of Thought Machine’s Vault Core worldwide such as Thought Machine clients and partners.

## [](#owner "Copy link to heading")3\. Owner

This policy is owned and maintained by Thought Machine’s Managing Director of Product and Programme Management.

## [](#definitions "Copy link to heading")4\. Definitions

The following definitions, which are extracted from Thought Machine’s template client contract, apply in the context of this document:

**Major Release:**  
A "Major Release" is an upgrade from the existing version of the Software. Major Releases typically contain substantial product changes and improvements in functionality. Each Major Release includes any Minor Releases, Patch Releases and Emergency Fixes relating to the Major Release in question. The naming convention is indicated by the first number in the release version (x.y.z) incrementing by one (x+1.y.z) for example, Vault Core Version 2 would replace Vault Core Version 1. For clarity, X denotes a Major Release, Y denotes a Minor Release and Z denotes a Patch Release.

**Minor Release:**  
A "Minor Release" is an update to the existing version of the Software. Minor Releases typically enhance and improve existing functions and are run regularly. Minor Releases include all previous Patch Releases and Emergency Fixes for the then current version. The naming convention is indicated by the second number in the release version (x.y.z) incrementing by one (x.y+1.z) for example, Vault Core Version 1.2 would replace Vault Core Version 1.1.

**Patch Release:**  
A "Patch Release" typically fixes critical bugs or vulnerabilities that prevent the Software from working properly. They typically contain minor modifications to address specific problems to ensure the Software continues to run effectively and securely. Patch Releases can contain Emergency Fixes. The naming convention is indicated by the third number in the release version (x.y.z) incrementing by one (x.y.z+1) for example, Vault Core Version 1.1.2 would replace Vault Core Version 1.1.1.

**Deprecation:**  
A "Deprecation" of functionality means that it is not recommended for use and will be removed in a future Vault Core Major release.

**Backwards compatibility:**  
A property of the product that ensures that newer versions of Vault Core can work with other applications built using older versions of the software without making changes to the integrations. For example, the introduction of a new API field or a new API are backwards compatible changes.

**Backwards incompatible change (aka breaking change):**  
A change that is introduced in a new version of Vault Core that may require a change to the integration with another application. For example, the renaming or removal of an API field is a backwards incompatible change, as it requires the original integration/code to change.

## [](#policy "Copy link to heading")5\. Policy

Thought Machine guarantees backwards compatibility of functionality in a Minor Release line of Vault Core. Clients can take new Vault Core Minor Releases with no impact on their existing Vault Core integrations. Thought Machine may introduce backwards incompatible changes within Vault Core Major Releases.

Thought Machine issues no more than one Major Release in a calendar year, with at least 12 months between Major Releases. This is designed to enable a reasonable timeframe for clients to upgrade and caters for the fact Major Releases typically contain substantial product changes and improvements.

If a backwards incompatible change is to be introduced in Major Release 'n' then a deprecation notice will be issued to the client by the last Minor Release in Major Release 'n-2'.

For example, the functionality associated with any deprecation notices issued by the last 10.x Minor Release will remain available (but marked as deprecated) throughout 11.x, and only be removed (and made backwards incompatible) in the 12.0 release at the earliest. There are two steps to introducing a backwards incompatible change.

1.  Issue the deprecation notice
    
2.  Release the backwards incompatible change
    

### [](#issue_the_deprecation_notice "Copy link to heading")5.1. Issue the deprecation notice

A deprecation notice is provided when a part of Vault Core is set for deprecation. This information is updated in the Documentation Hub available on the Thought Machine portal.

For example, If a new field is added to an API with the intention to replace a deprecated field, then the client can keep using the deprecated field and migrate onto the new one at any point before the deprecated field is removed.

### [](#release_the_backwards_incompatible_change "Copy link to heading")5.2. Release the backwards incompatible change

The second Major Release after a deprecation notice is issued can introduce the backwards incompatible change.

Thought Machine will issue a removal notification for backwards incompatible changes no later than 180 days before the Major Release in which the change is introduced.

### [](#policy_exception "Copy link to heading")5.3. Policy Exception

Thought Machine may issue a backwards incompatible change without having issued a previous deprecation notice (as described above) in circumstances where Thought Machine has performed an assessment and determined that:

1.  doing so would be in the interest of all of its clients and there would be no adverse client impact. In such circumstances, no later than 90 days before the Major Release in which the change is introduced, Thought Machine will issue a removal notification which identifies the relevant backwards incompatible changes and provides an explanation as to why the deprecation notice was not applied; or
    
2.  it is required to do so in order to address a critical vulnerability in accordance with good industry practices and Thought Machine’s Vulnerability Management Standard.
    

## [](#example_full_api_backwards_compatibility "Copy link to heading")6\. Example: Full API backwards compatibility

This is an example detailing the full lifespan of a given backwards incompatible change.

This is the general process of adding a new field and removing the original field.

Note that these versions are defined in terms of the released code (i.e. if anything is listed under a given version, it means it has been delivered to clients in this release).

V4.1  
In V4.1 we add a feature flag F which is used to hide some upcoming functionality in Vault Core. This upcoming functionality will require us to replace an original API field with a new API field. The new API field can be added at any time (including after F), and it will contain an annotation in the proto field which declares the associated feature flag (here F). This ensures that we can hide the new field from the API documentation while F is toggled off. The original field is left untouched.

V4.2  
This is a regular minor release and there are no changes in this example. The original field continues to work as normal, and the new field is not visible to clients yet as the feature is still hidden behind the feature flag F.

V4.3  
The feature that is to be exposed via the new field is ready. The feature flag F is turned on in the Vault Core release. This means clients can now see and use the new field. Note that when a feature flag that affects any API fields/methods is turned on for clients, this feature flag will not be turned off again. If there is an issue with the new functionality, we will deliver a fix in a forward release. The original field can now be declared for removal. The original field is still populated/used exactly as before.

Vault Core will now read either of the original or new fields if the change is on an API request, and will populate both original and new fields if the change is on an API response i.e. both fields are supported and fully functional.

V4.X  
No further changes are permitted to the original field while we are still in V4.X. Things remain in the same state (both fields in use) for any further V4.X releases.

V5.0  
Because the deprecation to the original field was announced in V.4.X, the removal can’t take place until V.6.0 at the earliest. Things remain in the same state (both fields in use) for the duration of the V5.X releases.

V5.X  
No further changes are permitted to the original field while we are still in V5.X. Things remain in the same state (both fields in use) for the duration of the V5.X releases.

V6.0  
When this version is released, there will have been two Major releases (V5.X and V6.X) since the original field was declared for removal (in V4.X), which means we can remove the field in this version. The original field is completely removed from the API and its proto field number is set to reserved. Clients have had advance notice and a period where both fields were populated to aid migration to the new field.

The new field is unchanged, and is now the only one of the 2 fields that is supported.

We have now finished delivering this backwards incompatible change

V6.X  
The new field continues to be used in future releases (though may get deprecated at a later time) of Vault Core.

## [](#governance "Copy link to heading")7\. Governance

At a minimum, all company policies are to be reviewed annually or when off-cycle material changes occur.