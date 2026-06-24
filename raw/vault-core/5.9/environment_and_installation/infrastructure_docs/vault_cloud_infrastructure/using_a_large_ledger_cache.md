---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_large_ledger_cache"
title: "Configuring a large cache for the Ledger"
scraped_at: "2026-06-22T19:14:00.380Z"
images: 0
---

# Configuring a large cache for the Ledger

Bank-hosted

In Vault Core versions 5.7 and later, we no longer use caching to improve performance of the `GET /v1/posting-instruction-batches` (ListPostingInstructionBatches) endpoint. If you require lower latency on this endpoint, the recommendation is to configure a [read replica](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_relational_database#configuring_read_replicas_for_performance) for the Warm Storage database.