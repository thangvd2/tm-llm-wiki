---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/support_tools/diagnostics_toolbox"
title: "Diagnostics Toolbox"
scraped_at: "2026-06-17T05:38:03.441Z"
images: 0
---

# Diagnostics Toolbox

## [](#overview "Copy link to heading")Overview

Diagnostics Toolbox allows running diagnostics tests to identify any issues with Vault Core infrastructure or Vault Core infrastructure integration points.

During runtime, Diagnostics Toolbox provisions a Kubernetes Lease object to manage the Kubernetes Pod, Kubernetes ServiceAccount and an Istio Sidecar. The Toolbox provisions these resources for the duration of the tests in the given Kubernetes namespace. When the tests are complete, the Kubernetes Lease object automatically garbage collects the resources.

Diagnostics Toolbox also creates the cluster-wide Kubernetes resources required to run the tests. These resources comprise the Kubernetes cluster role and the k8s cluster role binding, which attaches the role to the relevant Kubernetes ServiceAccount. The Kubernetes cluster role that the Diagnostics Toolbox uses has the same definition as the existing Kubernetes cluster role that the clusterstat tool uses.

chat\_bubble

Diagnostics Toolbox currently only supports running tests on the Observability Stack.

## [](#testing_the_observability_stack_installation "Copy link to heading")Testing the Observability Stack installation

In order to confirm that the [Observability Stack](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack) is correctly installed, Thought Machine recommends that you run the tests:

-   On demand - for example, during initial installation or before go-live testing
    
-   After every upgrade of Vault Core
    

chat\_bubble

Thought Machine recommends that you use the Diagnostics Toolbox to verify the Observability Stack installation instead of the automated (clusterstat) tests provided in the Vault Core installation package. However, you can still use the automated (clusterstat) tests if you want to.

Before using the Diagnostics Toolbox tests, make sure that you have followed all of the prerequisite information in the [Observability Stack Installation and User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack). You should use this guide in conjunction with the [TMComponent Operator User Guide](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide), which covers the Vault Core installation, and the general guidance in [Getting started with Vault Core](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core).

### [](#command_to_run_the_diagnostics_toolbox_test "Copy link to heading")Command to run the Diagnostics Toolbox test

To run the test using Diagnostics Toolbox, run the following command:

These values represent the following:

-   `PATH_TO_KUBECONFIG_FILE` is the path to the Kubernetes configuration file
    
-   `IMAGE:TAG` are the image and the tag of the Diagnostics Toolbox Docker image
    
-   `NAMESPACE` is the Kubernetes namespace where the Vault Core is installed and where the Diagnostics Toolbox pod runs
    
-   `IMAGE_REGISTRY` is the registry where the Diagnostics Toolbox Docker image is uploaded
    
-   `LABELS` identifies what tests to run - currently, you must ensure that it is set to `<namespaced_monitoring,monitoring>` for testing the Observability Stack
    
-   `MONITORING-NAMESPACE` is the Kubernetes namespace where the monitoring stack is installed, and defaults to `<monitoring>` for testing the Observability Stack
    
-   `TIMEOUT` is the timeout for the pod container, and defaults to `<600>` seconds
    

## [](#changelog_diagnostics_toolbox_binary "Copy link to heading")Changelog: Diagnostics Toolbox binary

**1.0.0-917f0970cb**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2024-45337: Misuse of ServerConfig.PublicKeyCallback may cause authorization bypass in golang.org/x/crypto
    
-   CVE-2024-45338: Non-linear parsing of case-insensitive content in golang.org/x/net/html
    
-   CVE-2024-45336: sensitive headers incorrectly sent after cross-domain redirect
    
-   CVE-2024-45341: usage of IPv6 zone IDs can bypass URI name
    

**1.0.0-7c74d55e35**

Features and enhancements:

-   Initial release, which provides the ability to run tests on the Observability Stack only
    

Bug fixes:

-   None
    

## [](#changelog_diagnostics_toolbox_image "Copy link to heading")Changelog: Diagnostics Toolbox image

**diagnostics-toolbox-1.0.7**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-CVE-2025-47907:database/sql: Postgres Scan Race Condition
    
-   CVE-CVE-2025-0913: Inconsistent handling of O\_CREATE|O\_EXCL on Unix and Windows in os in syscall
    
-   CVE-2025-4673: net/http: Sensitive headers not cleared on cross-origin redirect in net/http
    
-   CVE-2025-47906: os/exec: Unexpected paths returned from LookPath in os/exec
    

**diagnostics-toolbox-1.0.6**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2025-22871: net/http: Request smuggling due to acceptance of invalid chunked data in net/http
    
-   CVE-2025-22872: golang.org/x/net/html: Incorrect Neutralization of Input During Web Page Generation in x/net
    

**diagnostics-toolbox-1.0.5**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2025-22870: HTTP Proxy bypass using IPv6 Zone IDs in golang.org/x/net
    

**diagnostics-toolbox-1.0.4**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2025-26519: musl libc 0.9.13 through 1.2.5 before 1.2.6 has an out-of-bounds write
    

**diagnostics-toolbox-1.0.3**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2025-22866: crypto/internal/nistec: golang: Timing sidechannel for P-256 on ppc64le in crypto/internal/nistec
    

**diagnostics-toolbox-1.0.2**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2024-45336: golang: net/http: net/http: sensitive headers incorrectly sent after cross-domain redirect
    
-   CVE-2024-45341: golang: crypto/x509: crypto/x509: usage of IPv6 zone IDs can bypass URI name bypass URI name
    

**diagnostics-toolbox-1.0.1**

Features and enhancements:

-   None
    

Bug fixes:

-   None
    

Security vulnerability fixes:

-   CVE-2024-45338: Non-linear parsing of case-insensitive content in golang.org/x/net/html
    

**diagnostics-toolbox-1.0.0**

Features and enhancements:

-   Initial release, which provides the ability to run tests on the Observability Stack only
    

Bug fixes:

-   None
    

## [](#compatibility_matrix "Copy link to heading")Compatibility matrix

In order for you to be able to run the tool, you must download the following artefacts:

-   The Diagnostics Toolbox binary
    
-   The Diagnostics Toolbox Docker image
    

You can download the binary from this page by using the following links; however, you must download the Docker image from the Thought Machine Docker registry.

Refer to the following compatibility matrix, which defines the compatibility between the Diagnostics Toolbox binary, the Docker image for the Diagnostics Toolbox, and Vault Core.

  
| Diagnostics Toolbox binary version | Diagnostics Toolbox Docker image tag | Vault Core version |
| --- | --- | --- |
| 
1.0.0-917f0970cb

 | 

diagnostics-toolbox-1.0.2, diagnostics-toolbox-1.0.3, diagnostics-toolbox-1.0.4, diagnostics-toolbox-1.0.5, diagnostics-toolbox-1.0.6, diagnostics-toolbox-1.0.7

 | 

vault-5.5, vault-5.6

 |

## [](#download_diagnostics_toolbox_binary "Copy link to heading")Download Diagnostics Toolbox binary

Click here to download the Diagnostics Toolbox: 1.0.0-917f0970cb download