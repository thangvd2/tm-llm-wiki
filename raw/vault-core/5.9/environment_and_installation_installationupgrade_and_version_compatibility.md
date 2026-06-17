---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility"
title: "Installation/upgrade and version compatibility"
scraped_at: "2026-06-17T04:57:31.694Z"
images: 0
---

# Installation/upgrade and version compatibility

Bank-hosted

## [](#vault_release_artifacts "Copy link to heading")Vault Release Artifacts

No releases available. You may not have permissions to download release artifacts.

## [](#installing_this_release_as_your_first_version "Copy link to heading")Installing this release as your first version

If this is your first version of Vault, see the [Getting Started with Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core) section for more information.

## [](#upgrading_from_a_previous_release "Copy link to heading")Upgrading from a previous release

See [Upgrading Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core) for details on upgrading to a new Vault Core release.

## [](#certified_environment_matrix_for_vault "Copy link to heading")Certified Environment matrix for Vault

Use the Certified Environment (CE) matrix to check the compatibility of your infrastructure against the environments that we have certified. It lists the different versions of the components we support for use with the different release versions of Vault.

The Vault versions are stated in the column headings.

### [](#hashicorp_vault "Copy link to heading")HashiCorp Vault

warning

Whilst compatible with some Vault Core versions (see table below), HashiCorp Vault Version 1.20 [contains a bug](https://github.com/hashicorp/vault/issues/31125) in some patch versions.

The issue manifests when using a GCS bucket storage backend with High Availability (HA) mode enabled. If you use this configuration, **do not** use HashiCorp Vault 1.20.X unless it contains a fix to this bug.

warning

HashiCorp Vault version 1.21 and any version above 1.21 require an audience field to be added to the vault-installer role.

If you are planning on using any HashiCorp Vault versions above 1.21, you will have to ensure that this field has been added, specifically with the value of "hashicorp-vault".

You will also need to be on one of the following Vault Core patch versions or above: 5.8.7, 5.7.15, 5.6.21, 5.5.30, 5.4.39, 5.3.37, 4.7.51 or 4.6.67.

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
1.16

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.17

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.18

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.19

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.20

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.21

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#istio "Copy link to heading")Istio

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
1.21

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.22

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.23

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

1.24

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.25

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.26

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.27

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.28

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.29

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#kafka "Copy link to heading")Kafka

          
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7.0-2 | 5.7.3+ | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
3.3

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.4

 | 

✓

 | 

✓

 | 

✓

 | 

?

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.5

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.6

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

3.7

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

3.8

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

3.9

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.0

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.1

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✓

 |

### [](#kubernetes "Copy link to heading")Kubernetes

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
1.27

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.28

 | 

✓

 | 

✓

 | 

✓

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.29

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.30

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 | 

✗

 |
| 

1.31

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

1.32

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

1.33

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.34

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

1.35

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#openshift "Copy link to heading")Openshift

warning

OpenShift 4.19, when deployed with Istio’s install-cni plugin, has a [known bug](https://access.redhat.com/solutions/7129484) which prevents the successful installation of Vault Core.

To address this bug, a mitigation has been included in the following Vault Core patch releases - as a result, OpenShift 4.19 must **only** be used with these Vault Core versions or above:

-   4.6.58
    
-   4.7.42
    
-   5.3.28
    
-   5.4.30
    
-   5.5.21
    
-   5.6.13
    
-   5.7.6
    
-   5.8.0
    

         
| Versions | 4.6 | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
4.16

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 | 

✗

 |
| 

4.17

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

4.18

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

4.19

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.20

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

4.21

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |

### [](#postgres "Copy link to heading")Postgres

         
| Versions | 4.6.14+ | 4.7 | 5.3 | 5.4 | 5.5 | 5.6 | 5.7 | 5.8 | 5.9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 
12

 | 

✓

 | 

✓

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

13

 | 

✓

 | 

✓

 | 

✓

 | 

?

 | 

?

 | 

✗

 | 

✗

 | 

✗

 | 

✗

 |
| 

14

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✗

 |
| 

15

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

16

 | 

?

 | 

?

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

17

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

✓

 | 

✓

 | 

✓

 | 

✓

 |
| 

18

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

?

 | 

✓

 |

### [](#legend "Copy link to heading")Legend

  
| Icon | Status | Description |
| --- | --- | --- |
| 
✓

 | 

Supported

 | 

Vault has been actively tested and certified against this version

 |
| 

?

 | 

Unknown

 | 

Vault should work but we did not actively test or certify it against this version

 |
| 

✗

 | 

Unsupported

 | 

Vault is not compatible with this version

 |

### [](#minimum_required_container_runtime "Copy link to heading")Minimum required container runtime

From Vault 3.0, all Vault containers use a base image that is upgraded to use Alpine 3.14. Alpine Linux 3.14 has a minimum requirement of one of the following container runtimes:

-   Docker 20.10.0 and libseccomp 2.4.4
    
-   containerd.io 1.4.3-2