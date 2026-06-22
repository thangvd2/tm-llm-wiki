---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/best_practices"
title: "Best practices"
scraped_at: "2026-06-17T15:52:16.140Z"
images: 0
---

# Best practices

## [](#choosing_a_schedule "Copy link to heading")Choosing a schedule

We suggest choosing a schedule that gives you the shortest necessary uptime, as this will result in the largest cost savings.

## [](#schedule_windows "Copy link to heading")Schedule windows

The database, and any stateful workloads, will be scaled up 30 minutes before the scheduled 'uptime'. If you edit a HibernatorSchedule so that it spins up straight away, it will no longer make use of the 30 minute buffer window, and everything will scale up together. To avoid this, we recommend choosing a schedule you’re happy with and sticking with it; if you find you often need to scale things up during the hibernated window, consider updating the schedule.

## [](#schedule_uptimes "Copy link to heading")Schedule uptimes

Our schedule uptimes support multiple hibernation windows which can be combined with a logical AND/OR. We would recommend not stacking many of these, as it increases the complexity and likelihood of making a mistake in the uptime. See the examples under [Uptime schedules and examples](schedule_types).

## [](#annotations "Copy link to heading")Annotations

We would strongly recommend not removing any of the `hibernator.tmachine.io/previous-replicas` annotations. This will result in some deployments or statefulsets not scaling up since this is Hibernator’s source of truth for the previous state of each Deployment/StatefulSet.

## [](#cluster_autoscaler "Copy link to heading")Cluster autoscaler

Hibernator requires the cluster autoscaler to be configured to save money when Kubernetes workloads are scaled down. We recommend optimising your cluster autoscaler configuration and periodically monitoring it to ensure the best cost saving.

## [](#excluded_resources "Copy link to heading")Excluded resources

There are some deployments that we should avoid scaling for the time being as they’re known to cause issues when the Vault environment scales back up. These are excluded by default when installing via *vaultctl*. Currently, these are the `istio-annotation-tm-webhook` and `ca-injector-webhook` deployments.