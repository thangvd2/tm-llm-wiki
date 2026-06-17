---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/product_documents/performance_reports"
title: "Performance Reports"
scraped_at: "2026-06-17T05:13:30.258Z"
images: 0
---

# Performance Reports

## [](#environment_configuration "Copy link to heading")Environment Configuration

<table class="tableblock frame-all grid-all stretch"><colgroup><col style="width: 25%;"> <col style="width: 75%;"></colgroup><tbody><tr><th class="tableblock halign-left valign-top"><p class="tableblock">Cloud Provider</p></th><td class="tableblock halign-left valign-top"><p class="tableblock">AWS</p></td></tr><tr><th class="tableblock halign-left valign-top"><p class="tableblock">Database</p></th><td class="tableblock halign-left valign-top"><p class="tableblock">Aurora PostgreSQL 15.10<br>db.r6g.2xlarge (1 primary, 1 read replica)</p></td></tr><tr><th class="tableblock halign-left valign-top"><p class="tableblock">Kubernetes</p></th><td class="tableblock halign-left valign-top"><p class="tableblock">EKS v1.32.13<br>Mix of instance types, auto-scaling</p></td></tr></tbody></table>

## [](#performance_journeys "Copy link to heading")Performance Journeys

    
| Journey Name | Description | Notes | TPS | Latency (P95) |
| --- | --- | --- | --- | --- |
| 
Online Instruction Processing, 1.5k TPS

 | 

Processing of Instructions via a simulated scheme gateway, using a representative Instruction Flow which includes resolution of payment instruments, accounts and associated configuration, but excludes calls to external integrations. Latency is defined as the time between the scheme gateway sending the request to the Engine and receiving the response.

 | 

3 replicas of Engine service

 | 

1,500 TPS

 | 

211ms

 |
| 

Online Instruction Processing, 10k TPS

 | 

Processing of Instructions via a simulated scheme gateway, using a representative Instruction Flow which includes resolution of payment instruments, accounts and associated configuration, but excludes calls to external integrations. Latency is defined as the time between the scheme gateway sending the request to the Engine and receiving the response.

 | 

10 replicas of Engine service

 | 

10,000 TPS

 | 

800ms

 |