---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/overview"
title: "Overview"
scraped_at: "2026-06-17T15:54:25.954Z"
images: 0
---

# Overview

info

Bank-hosted Vault Bridge release artifacts are available on request, please contact your Thought Machine representative before continuing with this guide.

This guide describes the necessary steps to install Vault Bridge on your own cluster. These steps are similar or, in some cases, the same as the steps for Vault Core. The installation is split into three high-level steps: Surrounding Infrastructure, Vault Bridge Infrastructure and Vault Bridge Installation.

## [](#surrounding_infrastructure "Copy link to heading")Surrounding Infrastructure

Vault Bridge relies on surrounding infrastructure including Kubernetes, Postgres, Istio and a secrets manager: HashiCorp Vault or AWS Secrets Manager.

The [Vault Bridge Surrounding Infrastructure guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure) describes this in more detail, including the choices clients can make about where these components are run.

Vault Bridge can be installed either on a dedicated Kubernetes cluster or a Kubernetes cluster that already hosts Vault Core. In the latter case, most of the installation for Surrounding Infrastructure can be skipped.

## [](#vault_bridge_infrastructure "Copy link to heading")Vault Bridge Infrastructure

Vault Bridge requires clients to provision some additional infrastructure, namely Object Storage and Key Management Service (KMS) resources. The [Vault Bridge Infrastructure guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure) describes this in more detail.

## [](#vault_bridge_installation "Copy link to heading")Vault Bridge Installation

Once all infrastructure prerequisites are created and configured Vault Bridge can be installed using standard Thought Machine tooling, similar to Vault Core. The [Vault Bridge Installation guide](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation) describes this in more detail.