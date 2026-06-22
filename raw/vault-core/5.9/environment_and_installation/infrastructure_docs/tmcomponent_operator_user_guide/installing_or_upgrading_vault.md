---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault"
title: "Installation guide"
scraped_at: "2026-06-22T19:14:31.432Z"
images: 0
---

# Installation guide

Bank-hosted

This quickstart guide will take you through the steps to install a new instance of Vault Core. Follow the instructions to perform both first-time installations and upgrades - for further upgrade-specific information, see [Upgrading Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core).

Before undertaking an installation, make sure you have:

-   Set up all the [required infrastructure components](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/getting_started_with_vault_core/requirements)
    
-   Completed any pre-installation steps in [Before you start](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start) that apply to your setup
    
-   Downloaded the release package from [Installation/upgrade and version compatibility](/vault-core/5-9/EN/environment_and_installation/installationupgrade_and_version_compatibility)
    

## [](#example_usage "Copy link to heading")Example Usage

This section gives an overview of the steps required to use vaultctl to install the *vault-core* component from the example Vault Core 5.0.0 release (using the `vault-5.0.0.release` file). Replace this with the `vault-n.n.n.release` file for the release you are installing.

If you are using this process to install Thought Machine’s Istio, you must also refer to [Installing Istio](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#installing_istio) for detailed information.

### [](#copy_images "Copy link to heading")Copy images

First, copy images to the relevant container registry. You need to reference the images by either their *digest* (the unique SHA-256 hash) or *semantic tag* (for example, `my/image:vault-1.2.3`). The images are then used for installing specific services for your Vault Core deployment, such as `vault-core` itself.

Image digests identify an image by its content. Unlike tags, they are immutable. This makes digests preferable to tags for referencing images in Kubernetes manifests.

The field `k8s.pull_image_by_digest` is enabled by default in the `values.yaml` file. When enabled, it is assumed that digests are preserved when images are copied between registries, and you should therefore reference images by their digest.

Tools such as [crane copy](https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_copy.md) and [skopeo copy](https://github.com/containers/skopeo/blob/main/docs/skopeo-copy.1.md) will preserve digests, but the [Docker](https://www.docker.com/products/cli/) and [Podman](https://podman.io/) command-line interfaces (CLI) do not. If you are using a tool that does not preserve digests to copy images, you must disable the `k8s.pull_image_by_digest` field to make the Vault installer use semantic tags on images instead.

The *release.json* has a `source` (or `source-tag` if not using digests), and a `dest` field under each image to make copying (both Thought Machine and external) images more straightforward. It also has the components labelled on each image.

See [Copying images using release.json](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#copying_images_using_release_json) for more information, as well as an example script for copying images.

#### [](#authenticate_your_registry "Copy link to heading")Authenticate your registry

If your private registry requires authentication, your cloud provider may offer native access via *workload identity*. If you instead choose to use [imagePullSecrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to authenticate to your private registry, follow these steps to enable access:

1.  Ensure the secret containing the authentication details is present in all the namespaces used by Vault Core workloads. The following example creates a docker-registry type secret for accessing your private Docker registry:
    
    See [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#registry-secret-existing-credentials) on creating a secret based on existing credentials.
    
2.  In the `values.yaml` file, set the `k8s.image_pull_secrets_name` field to the name of the secret.
    
3.  Use the `--image-pull-secrets-name` argument to pass the secret name when [initialising the TM operators](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#initialise_the_operators):
    

### [](#view_available_components "Copy link to heading")View available components

A `components_guide.yaml` file is shipped with the release. This file is the same as the output when you run `vaultctl components vault-n.n.n.release`, and shows you what components can be installed from the `vault-n.n.n.release` file.

-   Components have a default namespace - you can override this later and specify the namespace in which they should be installed. See [Create namespaces with the correct annotations](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#create_namespaces_with_the_correct_annotations).
    
-   Components marked as **singleton** should only be installed once per cluster.
    
-   Components are listed in the order in which they should be installed. If you are installing multiple components using a single vaultctl command, the TMComponent Operator will automatically install them in the correct order - see the [Install](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#install) step.
    

### [](#create_namespaces_with_the_correct_annotations "Copy link to heading")Create namespaces with the correct annotations

The `components_guide.yaml` file describes the Kubernetes namespace required for each component. You must create all namespaces and annotate the Vault Core namespace with the correct annotations for Istio:

chat\_bubble

A valid Vault Core namespace (shown in the preceding example as *<namespace>*) is required at the end of the Istio annotation webhook label name for it to work.

Typically, you will need the following namespaces for the following deployments:

 
| Namespace | TMComponent |
| --- | --- |
| 
*tm-system*

 | 

TMComponent Operator

 |
| 

*tm-monitoring*

 | 

Observability

 |
| 

*tm-vault*

 | 

Vault Core

 |
| 

*istio-system*

 | 

Istio

 |
| 

*webhook-operator*

 | 

Webhook-Operator

 |

When installing a component, you have the option to override the default namespace and specify a different one. See the [Install](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#install) step for guidance.

### [](#initialise_the_operators "Copy link to heading")Initialise the operators

Use the `vaultctl init-operators` command to apply the resources required for installing Vault Core, such as operator deployments ([TMComponent Operator](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#tmcomponent_operator) and [Crown Operator](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#crown_operator)), roles, and service accounts, to the cluster.

info

You must run `vaultctl init-operators` before every installation or upgrade to ensure all the necessary resources are correctly installed.

Example command - you can add the `--help` flag to view the full set of options:

To preview the resources that would be installed rather than applying them directly to Kubernetes, use the `--export-dir=<dir>` option. This writes the Kubernetes manifests to the specified directory.

If you are using your own [client-provided Istio](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#client_provided_istio), we recommend that you use the `--exclude-rbac=istio` option to exclude provisioning Thought Machine’s Istio installer RBAC resources, because these will not be required.

error

[vaultctl](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#vaultctl), along with the operators and other installation resources, are versioned independently of Vault Core. vaultctl is backward-compatible with all Vault Core releases and should not be downgraded.

The lowest vaultctl version you can use with a Vault Core version is the version shipped with that Vault Core release, but you can use any subsequent version of vaultctl. Major, minor, and patch releases all include an appropriate version of vaultctl with the latest bug and security fixes applied. Use `vaultctl version` to check the vaultctl version.

### [](#generate_the_values_yaml_file "Copy link to heading")Generate the values.yaml file

The `values.yaml` file is a configuration file containing key-value pairs that define settings for each Vault Core component you want to install, including Istio, Observability, and secrets management. The TMComponent Operator then processes this file into configuration maps for each Vault Core service.

info

The previous command used to generate values, `vaultctl example-values`, has been deprecated in favour of `vaultctl values generate`. The latter command works identically for the most part, but generates a minimal set of values by default, rather than the full list.

First, run `vaultctl values generate` to generate the values file.

Format:

Example:

This command outputs a `values.yaml` file containing the values required to configure a Vault Core instance. Use this file as a starting point for configuring a new instance of Vault Core, or when new functionality is added to Vault Core.

You can optionally generate a values file for a subset of components. To do this, include one or more Vault Core components with this command to output `.yaml` data that is specific to those particular components. This allows you to manage the configuration data for different components separately in multiple values files, and excludes sections about optional components that are not relevant for the current environment. We recommend using this command with a component list that matches the components required for your Vault Core instance.

chat\_bubble

By default, the `vaultctl values generate` command only outputs values that you must set yourself (that is, values that have no default setting). This makes it easier for new users to set up a Vault Core instance with default configuration. To generate a list of **all** possible values, use the `-f` or `--full` flag (as shown in the example above).

If you are using the deprecated `vaultctl example-values` command, this behaviour is inverted. It generates a full values file by default - to generate a minimal values file containing only values you need to configure, use the `-m` or `--minimal` flag.

Once you have generated a new values file, use it to configure settings for each Vault Core component. For guidance on configuring specific components, refer to the relevant pages in [Configuring cloud infrastructure](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure). To configure the observability component, see [Setting up the Observability Stack](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/observability_and_monitoring/setting_up_the_observability_stack).

You must review your `values.yaml` file to ensure it contains all the correct values for your infrastructure.

#### [](#upgrading_an_existing_values_file "Copy link to heading")Upgrading an existing values file

If upgrading an existing values file, provide it to the same command using the `-e` flag. Replace *<existing\_values\_file>* with the name of your old file in the argument `[-e <existing_values_file>]`.

The following example provides an existing `4.5.0-values.yaml` file in the command to generate a new `5.0.0-values.yaml` file:

You can then use a text editor to compare the contents of the old and new `values.yaml` files to see what has changed. Configure anything relevant in the new values file. See [Generate and compare the values file](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core#generate_and_compare_the_values_file) for upgrade-specific guidance.

#### [](#setting_the_deployment_size "Copy link to heading")Setting the deployment size

A key configuration parameter available in `values.yaml` is `common.deployment_size`, which is available in Vault Core version 5 onwards. This configuration is responsible for sizing Vault Core workloads according to the performance framework - see the [Vault Core Release Certification Performance Report](/vault-core/5-9/EN/vault_release_information/performance_and_testing#performance_report) for your cloud provider.

The recommended maximum number of customer accounts at each deployment size is as follows:

 
| `common.deployment_size` value | Maximum number of customer accounts |
| --- | --- |
| 
`extra-small`

 | 

100,000 (available from Vault Core 5.3)

 |
| 

`small`

 | 

1,000,000

 |
| 

`small-medium`

 | 

5,000,000

 |
| 

`medium`

 | 

10,000,000

 |
| 

`medium-large`

 | 

30,000,000

 |

For more information about the available values and how they relate to sizing, refer to your example `values.yaml` file.

### [](#validate_the_values_yaml_file "Copy link to heading")Validate the values.yaml file

After customising the values file with your configurations for each component, run the following `vaultctl values validate` command to verify that the values match Vault Core’s requirements.

Format:

The following example validates that the `5.0-values.yaml` file matches the Vault Core 5.0.0 release:

If the command output shows errors, correct the errors and re-run the command. Repeat this process until no errors remain.

### [](#install "Copy link to heading")Install

info

From Vault Core 5.9 onwards, installation is a two-step process: after installing Vault Core, you must also perform a finalisation step to complete the installation. See [Finalisation](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault#finalisation) for more information.

Once you have configured all the necessary components and successfully validated the `values.yaml` file, you can proceed with installation.

Use the same `vaultctl install` format to install all TMComponents, including the Vault Core component itself:

For upgrades, you must still install all the components you want to use - while they are typically the same as in your previous Vault Core version, there may be new or removed components in the newer version.

The `-v` flag can be used repeatedly to specify multiple values files or directories containing values files. If the argument to `-v` is a directory, loading will only be one level deep and only values files with the extension `.yaml` or `.yml` will be loaded. If multiple values files define the same nested key path (for example `core.product_key`) but assign different values, it will result in a conflict and the installation will fail.

error

Hotfixes are only applied to specific patch versions of Vault Core. The installation will fail if the hotfix and current patch versions do not match.

chat\_bubble

Starting from the Vault Core 5.5 release, we offer the Istio component as a separate release file from the rest of Vault Core. This allows us to release security and feature updates more frequently, and gives you more flexibility during installation.

For more information, see [Configuring Istio service mesh with Vault](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault).

Examples of installing particular components:

lightbulb

Running `vaultctl components` lists the components in the order in which they should be installed. Thought Machine recommends installing components in separate commands rather than in one go.

However, if you choose to install multiple components in a single command, `vaultctl install` will automatically order them correctly. For example, the Observability Stack must be installed first, so using `vaultctl install` will automatically do this.

To preview resources before applying them, use the `--export-dir` option to export resources to the filesystem instead of Kubernetes. The `--dry-run` option will run a practice install, creating the custom resources and verifying them without adding secrets to HashiCorp Vault or applying any workloads.

The `--override-namespace` (`-o`) flag overrides the default namespaces displayed in the `components_guide.yaml`. To change the Kubernetes namespace where a component will be installed, run `vaultctl install -o <default-namespace>:<new-namespace>`.

### [](#post_installation_checks "Copy link to heading")Post-installation checks

#### [](#istio "Copy link to heading")Istio

After installing Vault Core, you should check that the Istio sidecar injection is working. You should inspect both the Vault Core namespace and its pods.

The checks to perform differ depending on whether you have installed [Thought Machine’s Istio release](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#thought_machine_istio_release) or your own upstream [client-provided Istio](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#client_provided_istio).

Thought Machine Istio Client-provided Istio

1.  Check the Vault Core namespace has the `istio.io/rev=<revision>` label, where `<revision>` is the Istio canary revision that is shipped with Thought Machine’s Istio and has the form `canary-v<major>-<minor>`. For example, Istio 1.28 has `canary-v1-28` as its revision. You can infer the revision from the name of the istiod deployment or sidecar injector mutating webhook.
    
    Run this command to check the namespace:
    
2.  Use this command to check the pods:
    
3.  Perform the following checks for Thought Machine Istio:
    

 
| What to check | How to check |
| --- | --- |
| 
Pods have the correct injection annotation.

 | 

Pods that are part of the Istio mesh should have the same revision of Istio in the `istio.io/rev=<revision>` annotation as in the namespace label.

 |
| 

Istio containers are not injected into pods if Istio is disabled at pod level.

 | 

Pod has the `sidecar.istio.io/inject=false` annotation and has no Istio containers.

 |
| 

`istio-proxy` container is injected correctly.

 | 

`istio-proxy` is an init container if all the following are true:

-   Istio version >= 1.27
    
-   Kubernetes version >= 1.33
    
-   Kubernetes `SidecarContainers` feature gate is not disabled
    

Otherwise, it is a normal container.





 |
| 

`istio-validation` container is injected correctly.

 | 

`istio-validation` is an init container (is listed in the `INIT_CONTAINERS` column of the \`kubectl’s command output).

 |

1.  Check the Vault Core namespace is labelled for Istio sidecar injection with either `istio-injection=enabled` or `istio.io/rev`, depending on how your Istio is installed.
    
    Run this command to check the namespace:
    
2.  Use this command to check the pods:
    
3.  Perform the following checks for client-provided Istio:
    

 
| What to check | How to check |
| --- | --- |
| 
Pods have the correct injection annotation.

 | 

Pods part of the Istio mesh should have the `istio.io/rev` annotation.

 |
| 

Istio containers are not injected in pods if Istio is disabled at pod level.

 | 

Pod has the `sidecar.istio.io/inject=false` annotation and has no Istio containers.

 |
| 

`istio-proxy` container is injected correctly.

 | 

`istio-proxy` can be either a normal container or init container depending on your Istio and Kubernetes configuration.

 |
| 

Correct Istio init container is injected.

 | 

`istio-validation` is an init container if Istio CNI is enabled. Otherwise, `istio-init` is the init container.

 |

### [](#finalisation "Copy link to heading")Finalisation

From Vault Core 5.9 onwards, after you have successfully deployed and verified an upgrade, you **must** carry out finalisation to complete the installation. This applies when either [upgrading](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core) or [rolling back](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core) to any target version of Vault Core that is 5.9 or above.

Finalisation is the explicit, final step of the upgrade process. You are required to carry it out within seven (7) days of performing the installation.

info

An installation of Vault Core is not considered complete until it has been successfully finalised. Although your system is fully functional without finalising, you cannot perform subsequent minor or major upgrades until you have completed finalisation for your current version.

Additionally, certain new features and improvements will only come into effect after finalising your installation.

#### [](#about_finalisation "Copy link to heading")About finalisation

Finalisation ensures a stable and controlled upgrade path between Vault Core versions, acting as the final step to officially move the system to the newer version and complete the upgrade process. It provides a standardised way to upgrade to a new release by:

-   Handling required post-installation steps: Finalisation runs optimisation steps that previously would have been performed manually after the rollback window has passed, thus reducing the risk and effort associated with manual execution.
    
-   Carrying out cleanup activities: By removing legacy data and configurations no longer required in the newer Vault Core version, finalisation aligns the system with the new version and prevents it from accumulating a debt of historical data storage and performance degradations, therefore optimising performance.
    
-   Enabling release-specific improvements: In some instances, certain new features included with a minor or major release will only come into effect once you have finalised the installation. Refer to the version-specific upgrade guidance for details on any improvements that are enabled upon finalisation.
    

For more details about finalising a specific Vault Core version, check the relevant information in [Upgrading Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core), as well as the [Release information](/vault-core/5-9/EN/vault_release_information).

error

As soon as you have triggered the finalisation step, you will not be able to [roll back](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/rolling_back_vault_core) to the earlier minor or major Vault Core version.

This is because finalisation can perform cleanup steps to remove legacy data that is no longer used by the newer version, or expose new API endpoints for features that are not available in the older version. To prevent the system from entering an inconsistent state, Vault Core does not allow rollbacks after these changes have been enabled. You must therefore check your installation is working and in a stable state before finalising.

#### [](#finalising_your_installation "Copy link to heading")Finalising your installation

Before finalising your Vault Core installation, make sure that:

-   The status of the vault-core TMComponent is `FinalisationPending`.
    
-   The deployment has passed readiness checks, and you have verified that it is in a stable and healthy state and is working as expected.
    
-   You have no intention to roll back.
    
-   You have checked the version-specific upgrade guidance in [Upgrading Vault Core](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core). If you are upgrading from a version before 5.9, see [5.9 upgrade instructions](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/upgrading_vault_core#5_9_upgrade_instructions).
    

To carry out the finalisation step, run:

This command triggers finalisation for all TMComponent resources in the namespace.

##### [](#use_of_the_finalise_flag "Copy link to heading")Use of the --finalise flag

For development environments, the `vaultctl install` command supports an optional `--finalise` flag that triggers finalisation immediately after installation:

error

**The `--finalise` flag is not intended for use in production environments.**

For production upgrades, you must always first verify the system’s health and stability before running finalisation. Finalisation is an irreversible step that removes the ability to roll back to a previous version, so should be run separately from the `vaultctl install` command.

The `--finalise` flag should **only** be used in automated test and CI/CD pipelines where environment verification is handled programmatically and manual rollback is not required.

lightbulb

If you normally export TMC resources with `--export-dir`, this can be combined with `--finalise` to generate resources with the finalisation trigger set.

#### [](#monitoring_finalisation_status "Copy link to heading")Monitoring finalisation status

You can check the finalisation progress by using `vaultctl status` to inspect the status of the deployed TMComponents. Upon deployment, a TMComponent will transition through the following states:

 
| Status | Description |
| --- | --- |
| 
`FinalisationPending`

 | 

The component has been successfully deployed, but finalisation has not been triggered. You should check that your installation is working as expected during this time.

 |
| 

`FinalisationInProgress`

 | 

Finalisation jobs are currently running.

 |
| 

`ReadinessCheckComplete`

 | 

The installation has been successfully finalised and is fully complete. The system is now ready for future upgrades.

 |

The time it takes for finalisation to complete depends on the deployment size of your bank and whether there are any background processes that are still completing. Refer to the [Release notes](/vault-core/5-9/EN/vault_release_information/technical_details_of_this_release) to see if any apply to your upgrade.

For a shorter finalisation time, we recommend waiting until the necessary background processes have completed before finalising. It is still safe to finalise before they have completed, but it may take longer than expected as a result. You should not experience any downtime while finalisation jobs are running.

#### [](#finalisation_for_blue_green_or_active_passive_modes "Copy link to heading")Finalisation for Blue-Green or Active-Passive modes

The behaviour of finalisation changes depending on your deployment mode. Refer to the relevant documentation for more guidance on how to complete the upgrade:

-   [Upgrading in Blue-Green mode](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/blue_green#upgrading_in_blue_green_mode)
    
-   [Upgrading in Active-Passive mode](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/active_passive#upgrading_in_active_passive_mode)
    

### [](#garbage_collect_first_time_migration_from_classic_installer_only "Copy link to heading")Garbage collect (first-time migration from classic installer only)

If upgrading from the old-style installer pod for the first time, manually garbage-collect old resources when the operator installation is complete. This is not required for new or subsequent installations. Manual garbage collection example:

### [](#installing_more_than_one_vault_core_environment_in_a_cluster "Copy link to heading")Installing more than one Vault Core environment in a cluster

Multiple Vault Core environments may be installed in the same cluster. Each environment will have its own `values.yaml` file and use a different namespace. The installation process will follow similar steps to the initial install, but the components designated as singletons do not need to be reinstalled (although there is no harm in doing so).

The exception to this rule is the observability component which **must** be installed for each namespace to ensure that the namespaced observability resources are fully configured. Make sure that the `vaultctl` command for installing the observability component has the same `-v` (values file) and `-o` (namespace translation) flags as given when installing the `vault-core` component.

## [](#managing_continuous_reconciliation "Copy link to heading")Managing continuous reconciliation

The TMComponent and Crown Operators can reconcile the deployed components to ensure that the resources in the Kubernetes cluster always match the baseline configuration. This ensures the environment is in a known state, but prevents manual changes that may be required in some circumstances.

The default state for the continuous reconciliation is `one-shot`. This means that once a component is installed, reconciliation is paused. You can change this by setting the annotation on the TMComponent - for example:

See the table below for available values for `tmcomponent.tmachine.io/continuous-reconcile`:

 
| Value | Behaviour |
| --- | --- |
| 
`one-shot`

 | 

Reconciles Crown until the TMComponent reaches `ReadinessCheckComplete`, then stops.

 |
| 

`true`

 | 

Continuously reconciles Crown and owned workloads.

 |
| 

`false`

 | 

Reconciles Crown in the same way as `one-shot`, but with more backwards compatibility.

 |
| 

`paused`

 | 

Stops any further reconciliation regardless of Crown status.

 |

Additionally, you can use the boolean `--continuous-reconcile` flag on `vaultctl install` to set `continuous reconcile: true` from the very beginning of the installation. Otherwise, without the flag, the default is `one-shot`.

## [](#using_vaultctl_commands "Copy link to heading")Using vaultctl commands

*vaultctl* is a command-line tool you use to interact with the TMComponent Operator and custom resources when installing Vault Core components. See [Deployment tools and resources](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools) for more information.

lightbulb

Not all options are documented here. Use `--help` on the vaultctl command or subcommands for all the available options, as well as the expected values for each option.

The following commands are examples only - replace any `<placeholder_values>` with your actual values.

### [](#view_the_status_of_components_and_operators_in_the_cluster "Copy link to heading")View the status of components and operators in the cluster

This reports the status of TMComponent custom resources in the cluster:

### [](#uninstall_a_component "Copy link to heading")Uninstall a component

Use this format to uninstall specific components, including the vault-core instance:

### [](#view_the_vaultctl_version "Copy link to heading")View the vaultctl version

The operators, vaultctl, and other installation resources are versioned independently of Vault Core. To view the versions of vaultctl and the operators, run:

### [](#restart_pods_excluding_the_kafka_pods "Copy link to heading")Restart pods, excluding the Kafka pods

### [](#rotate_kafka_certificates "Copy link to heading")Rotate Kafka certificates

This runs certificate rotation and replaces expired certificates: