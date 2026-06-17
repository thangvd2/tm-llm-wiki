---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/using_a_large_ledger_cache"
title: "Configuring a large cache for the Ledger"
scraped_at: "2026-06-17T05:29:36.175Z"
images: 0
---

# Configuring a large cache for the Ledger

In Vault Core versions 5.7 and later, we no longer use caching to improve performance of the `GET /v1/posting-instruction-batches` (ListPostingInstructionBatches) endpoint. If you require lower latency on this endpoint, the recommendation is to configure a [read replica](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_multiple_databases) for the Warm Storage database.