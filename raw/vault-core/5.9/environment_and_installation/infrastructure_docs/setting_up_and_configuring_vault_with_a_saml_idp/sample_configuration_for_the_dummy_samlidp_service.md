---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/setting_up_and_configuring_vault_with_a_saml_idp/sample_configuration_for_the_dummy_samlidp_service"
title: "Sample configuration for the dummy saml-idp service"
scraped_at: "2026-06-22T19:15:20.443Z"
images: 0
---

# Sample configuration for the dummy saml-idp service

error

The certificate for the dummy saml-idp is hard-coded and *must* be configured exactly as shown below. The certificate *must* be a literal, single-line string and you must not add formatting to it (for example, the new line escape character `\\n` or whitespaces). You *must* also supply your own URL. Note that the dummy saml-idp does not support the additional features normally configured in the saml\_sp section - leave these values with their defaults.