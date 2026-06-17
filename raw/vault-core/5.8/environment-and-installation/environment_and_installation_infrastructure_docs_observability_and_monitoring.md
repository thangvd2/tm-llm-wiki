---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring"
title: "Observability and monitoring"
scraped_at: "2026-06-16T15:22:49.497Z"
images: 0
---

# Observability and monitoring

Observability and monitoring are important aspects of Vault Core, allowing you to monitor your Vault Core instance and troubleshoot any problems that may occur.

Vault Core ships with an *Observability Stack*, which provides both observability and monitoring tools for gathering metrics and displaying data.

These guides cover:

-   How to configure and set up the Observability Stack
    
-   How to access and use the Observability Stack functionality
    
-   How to install and use dashboards to monitor your Vault Core instance
    

chat\_bubble

The Observability Stack is a [required component](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements#required_components). Before installing Vault Core, you must first install the Observability Stack along with other required components. Use the `vaultctl install` command to ensure the Observability Stack is installed first.

[

menu\_book Introduction to observability

An overview of the Observability Stack and how it works with Vault Core



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/introduction_to_observability)

[

settings Setting up the Observability Stack

How to successfully configure and install the Observability Stack



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack)

[

developer\_guide Using the Observability Stack

Including how to use Alertmanager, Grafana dashboards, and Tracing



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/using_the_observability_stack)

[

dashboard Introduction to Grafana and key dashboards

An overview of available dashboards and the insights they provide



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/introduction_to_grafana_and_key_dashboards)

[

monitoring Multi-instance monitoring

How to monitor multiple Vault Core deployments



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/multi_instance_monitoring)

[

list Alerts

List of alerts shipped with each Vault Core release



](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/alerts)