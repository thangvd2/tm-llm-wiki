---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation"
title: "Vault Bridge Installation"
scraped_at: "2026-06-17T15:54:47.445Z"
images: 0
---

# Vault Bridge Installation

Vault Bridge is installed using `vaultctl`, you will need to have completed all the steps under [Surrounding Infrastructure](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure) and [Vault Bridge Infrastructure](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure) before continuing with this guide.

## [](#vaultctl_and_tmcomponent_operator "Copy link to heading")vaultctl and TMComponent Operator

You install Vault Bridge using the `vaultctl` binary, which is included in the Vault Bridge release artifact ZIP file obtained via your Thought Machine representative.

The installation requires the TMComponent Operator which you can learn more about in the [Deployment tools and resources page](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#tmcomponent_operator).

## [](#create_namespace_with_the_correct_annotations "Copy link to heading")Create namespace with the correct annotations

If you haven’t already, you now need to create the required Kubernetes namespace for Vault Bridge. Replace `<namespace>` with the name you will be using, and `<istio-revision>` with the Istio revision you [previously installed](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/istio).

If using a standalone Istio release provided by Thought Machine, you can find its corresponding Istio version on the [same page](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#download_istio_releases) as the release artifacts themselves.

For example, if the Istio version is 1.24.5, then you should use the label `istio.io/rev=canary-v1-24-5` here.

If you are installing Vault Bridge on a new cluster that has not been provisioned for Vault Core already, you also have to create the following namespaces - if you haven’t already created them as part of the infrastructure installation.

## [](#copy_images "Copy link to heading")Copy images

First, copy images to the relevant registry. You need to reference the images by either their *digest* (the unique SHA-256 hash) or *semantic tag* (for example, `my/image:vault-1.2.3`). The images are then used for installing specific services for your Vault Core deployment, such as `vault-core` itself.

Image digests identify an image by its content. Unlike tags, they are immutable. This makes digests preferable to tags for referencing images in Kubernetes manifests.

The field `k8s.pull_image_by_digest` is enabled by default in the `values.yaml` file. When enabled, it is assumed that digests are preserved when images are copied between registries, and you should therefore reference images by their digest.

Tools such as [crane copy](https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_copy.md) and [skopeo copy](https://github.com/containers/skopeo/blob/main/docs/skopeo-copy.1.md) will preserve digests, but the [Docker](https://www.docker.com/products/cli/) and [Podman](https://podman.io/) command-line interfaces (CLI) do not. If you are using a tool that does not preserve digests to copy images, you must disable the `k8s.pull_image_by_digest` field to make the Vault installer use semantic tags on images instead.

The *release.json* has a "source" (or "source-tag" if not using digests), and a "dest" field under each image to make copying (both Thought Machine and external) images more straightforward. It also has the components labelled on each image.

See [Copying images using release.json](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#copying_images_using_release_json) for more information, as well as an example script for copying images.

## [](#initialise_the_operators "Copy link to heading")Initialise the operators

error

Vaultctl and the associated operators are versioned independently of Vault Bridge. To view this versioning, use vaultctl version. The Operator image versions are hardcoded into vaultctl and will be updated with `vaultctl init-operators`. Vaultctl is backwards-compatible with Vault Bridge releases and should not be downgraded. The lowest vaultctl version to be used with a Vault Bridge version is the version shipped with that Vault Bridge release, but you can use any subsequent version of vaultctl. Major, Minor and Patch releases will all include the latest vaultctl.

Refer to `vaultctl init-operators --help` for details of each argument.

info

This step is not strictly necessary if you are installing Vault Bridge on a cluster that has already been setup for Vault Core. In that case the operators are already installed. But it does not hurt to do it anyway, as doing so will upgrade them to the latest version.

For previewing resources before applying them, you can use the `--export-dir` option to export resources to the filesystem instead of Kubernetes.

If you are using your own Istio, we recommend that you exclude Istio installer RBAC resources as these are not required. For example:

## [](#generate_the_values_file "Copy link to heading")Generate the values file

info

The previous command used to generate values, `vaultctl example-values`, has been deprecated in favour of `vaultctl values generate`. This function works identically for the most part, but generates a minimal set of values by default, rather than the full list.

The yaml that is output by `vaultctl values generate` includes the options required to configure a Vault Bridge instance - use this as a starting point for creating the values.yaml file for a new instance of Vault Bridge, or when new functionality is added to Vault Bridge. We expect you to have reviewed your values.yaml file to ensure it contains all the correct values for your infrastructure.

If upgrading an existing values file, provide it to this command (as shown in square brackets `[--existing-values]` above) and the existing overrides will be merged in. Then view a diff of the old and new values files in a text editor to see what has changed. Configure anything relevant in the new values file. Leave the docstrings in, because this will make it easier to check what has changed in the next release by viewing the diff of the files and ignoring anything that has not changed.

info

Vault Bridge at this time does not require any Kafka configuration to be provided through `values.yaml`. However, due to a known issue you have to provide dummy values under `kafka.*` in your values.yaml file.

## [](#validate_the_values_yaml "Copy link to heading")Validate the values.yaml

After customising the `values.yaml` file, run the following command to validate that the values match Vault Bridge’s requirements. If the command output shows errors, correct the errors and rerun the command. Repeat this process until no errors remain.

Format:

## [](#install_vault_bridge "Copy link to heading")Install Vault Bridge

Install Vault Bridge with the following command. Make sure you replace `<namespace>` with the correct value (or omit the flag if using the default `tm-vault-bridge` namespace).

For previewing resources before applying them, you can use the `--export-dir` option to export resources to the filesystem instead of Kubernetes. The `--dry-run` flag will run a practice install, creating the custom resources and verifying them without adding secrets to HashiCorp Vault or applying any workloads. The `--override-namespace` flag overrides the default namespaces displayed by vaultctl components.

## [](#installing_more_than_one_vault_bridge_instance_in_a_cluster "Copy link to heading")Installing more than one Vault Bridge instance in a cluster

Multiple Vault Bridge instances may be installed in the same cluster. Each environment will have its own values.yaml file and use a different namespace. The installation process will follow similar steps to the initial install, but the components designated as singletons do not need to be reinstalled (although there is no harm in doing so).

The exception to this rule is the observability component which *must* be installed for each namespace to ensure that the namespaced observability resources are fully configured. Make sure that the `vaultctl` command for installing the observability component has the same `-v` (values file) and `-o` (namespace translation) flags as given when installing the `vault-bridge` component.