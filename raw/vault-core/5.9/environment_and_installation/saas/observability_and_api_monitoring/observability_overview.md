---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/observability_overview"
title: "Observability overview"
scraped_at: "2026-06-22T19:15:56.848Z"
images: 0
---

# Observability overview

SaaS

Here, we introduce you to the observability offering of the SaaS hosting model of Vault Core, including:

-   What Thought Machine manages: The observability that Thought Machine implements and operates on Vault Core SaaS.
    
-   Client offering: The observability that Thought Machine enables Vault Core SaaS clients to conduct themselves.
    

## [](#overview "Copy link to heading")Overview

### [](#roles_and_responsibilities "Copy link to heading")Roles and responsibilities

-   Thought Machine: Responsible for observing Vault Core SaaS environments.
    
-   Client: Responsible for observing all external systems to Vault Core.
    

Infrastructure metrics, traces, logs, and alerts are not visible to clients.

### [](#visibility_into_saas "Copy link to heading")Visibility into SaaS

Thought Machine offers clients visibility into Vault Core as part of Vault Core SaaS through four use cases:

1.  Clients can monitor Vault Core API endpoints for health and availability using tooling of their choice. Refer to the [Vault API Monitoring Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/api) for more information.
    
2.  Clients can ingest Vault Core metrics into their own monitoring stack through the Observability Metrics Endpoint to provide a centralised view of their ecosystem and use the metrics to build custom dashboards and alerts. Refer to the [Vault SaaS Metrics and Tracing Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide) for more information. Thought Machine does not ship infrastructure metrics through this endpoint or as part of Vault Core SaaS.
    
3.  Clients can capture and analyse Vault Core business events, such as Balances, Accounts and Schedule execution, through the [Core Streaming API](/vault-core/5-9/EN/environment_and_installation/saas/streaming/streaming_api_documentation#streaming_api_documentation_for_vault_core).
    
4.  Clients can use the [Vault Jobs](/vault-core/latest/EN/apps/vault_jobs) web application to monitor the health and progress of all Account processes, such as Schedule Jobs, and identify any errored Vault Job operations.
    

### [](#key_contacts "Copy link to heading")Key contacts

For more information and access to documentation, contact your dedicated Thought Machine representative.

## [](#service_monitoring_and_alerting "Copy link to heading")Service Monitoring and Alerting

### [](#what_does_thought_machine_manage "Copy link to heading")What does Thought Machine manage?

Thought Machine performs metrics-based monitoring across the SaaS infrastructure stack and Vault Core microservices to observe service health and performance. The SaaS alerting framework is based on metrics with rules that generate alerts to the 24/7 Cloud Analyst support team and dedicated SRE team.

Clients do not interact with SaaS alerts directly. The Thought Machine support team triage alerts, investigate and resolve issues transparently to clients whenever possible. If required, the support team will initiate contact with clients through the process documented in the *Service Procedure Manual*.

### [](#client_offering "Copy link to heading")Client offering

Thought Machine provides SaaS clients with a service availability SLA in addition to incident response and resolution SLAs. The Service Management team issues monthly reporting to provide assurance against these guarantees. For more information, see the *Service Procedure Manual*.

SaaS clients access Vault Core API endpoints in the Production environment which can be monitored for service availability and request latency using the client’s choice of tooling. To learn more, see [Vault API Monitoring Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/api).

## [](#metrics_and_dashboards "Copy link to heading")Metrics and Dashboards

### [](#what_does_thought_machine_manage_2 "Copy link to heading")What does Thought Machine manage?

Thought Machine makes extensive use of metrics across Vault Core infrastructure and Vault Core itself to optimise performance and monitor service behaviour. SaaS metrics are collected and visualised using a central instance for teams to conduct holistic monitoring across the environment.

### [](#client_offering_2 "Copy link to heading")Client offering

Thought Machine provides clients with visibility into Vault Core through the Observability Metrics Endpoint. This is a `REMOTE_READ` endpoint that enables clients to ingest Vault Core metrics into centralised tooling of their choice, build custom dashboards and perform ad-hoc queries. Infrastructure metrics are not available through the Metrics endpoint. To learn more, see [Metrics and Tracing Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide).

## [](#logging "Copy link to heading")Logging

### [](#what_does_thought_machine_manage_3 "Copy link to heading")What does Thought Machine manage?

Thought Machine uses logs to further investigate issues that are identified through metrics. Each Vault Core SaaS client has an isolated logging account where logs are retained for security audit purposes and threat analysis.

Logs are collected across the infrastructure stack and Vault services. Logs are stored and visualised for further analysis if required. This includes security audit logs.

### [](#client_offering_3 "Copy link to heading")Client offering

Clients do not have access to Vault Core SaaS logs. To gain insight into Vault Core business events such as Balances, Accounts and Schedule execution, clients use the Vault Core Streaming API.

The API broadcasts events relating to resource creation and change throughout the resource lifecycle. Events are emitted as Kafka messages to a series of client-facing Kafka topics. Clients can subscribe to these topics to perform further operations and analysis. To learn more, see the [Streaming API information](/vault-core/5-9/EN/environment_and_installation/saas/streaming/streaming_api_documentation#streaming_api_documentation_for_vault_core) here and in the [Using the Streaming APIs](/vault-core/5-9/EN/api/overview#using_the_streaming_apis) section.

## [](#tracing "Copy link to heading")Tracing

### [](#what_does_thought_machine_manage_4 "Copy link to heading")What does Thought Machine manage?

Thought Machine uses tracing internally to further investigate issues that are identified through metrics and to conduct root cause analysis of events. Vault Core traces are instrumented with the OpenTelemetry framework.

### [](#client_offering_4 "Copy link to heading")Client offering

Thought Machine enables clients to propagate traces through Vault Core for synchronous API calls. The trace identifier is passed through Vault Core, enabling clients to produce an end-to-end trace of their ecosystem and observe Vault Core response times. Vault Core itself functions as a single component in the client’s ecosystem. Thought Machine does not offer visibility of individual spans within Vault Core SaaS. To learn more, see: [Metrics and Tracing Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide).

## [](#getting_more_information "Copy link to heading")Getting more information

For more information, refer to the following observability documentation and your *Service Procedure Manual*.

-   [Vault SaaS Metrics and Tracing Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/metrics_and_tracing_guide)
    
-   [Vault API Monitoring Guide](/vault-core/5-9/EN/environment_and_installation/saas/observability_and_api_monitoring/api)
    
-   [Streaming API information](/vault-core/5-9/EN/environment_and_installation/saas/streaming/streaming_api_documentation#streaming_api_documentation_for_vault_core) and documentation in the [Using the Streaming APIs](/vault-core/5-9/EN/api/overview#using_the_streaming_apis) section