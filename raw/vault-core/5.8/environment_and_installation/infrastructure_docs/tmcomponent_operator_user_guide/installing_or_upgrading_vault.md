---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/installing_or_upgrading_vault"
title: "Installing or upgrading Vault Core"
scraped_at: "2026-06-17T15:37:02.370Z"
images: 0
---

# Installing or upgrading Vault Core

## [](#example_usage "Copy link to heading")Example Usage

This section gives an example of the steps required to use vaultctl to install *Kafka* and *Vault-core* from the release *vault-5.0.0*. Make sure that you have first performed all [Prerequisites for Vault Core installation](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start#prerequisites_for_vault_installation) before you begin, including creating the namespace for, and installing, the webhook-operator.

Not all options are documented here: use `--help` on the vaultctl command or subcommands for other options and expected values for each option.

If you are using this process to install Thought Machine’s Istio or Kafka, you must also refer to [Component specifics](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#component_specifics) for detailed information.

### [](#view_available_components "Copy link to heading")View available components

A components\_guide.yaml is shipped with the release. This file is the same as the output of `vaultctl components`. This is to see what can be installed from the release file (the .release suffixed file). Components have a default namespace which can be overridden later. Components marked as **singleton** should not be duplicated on a single cluster. Components are listed in the order in which they should be installed.

### [](#copy_images "Copy link to heading")Copy images

First, copy images to the relevant registry. The *release.json* has a "source" (or "source-tag" if not using digests), and a "dest" field under each image to make copying (both TM and external) images more straightforward. It also has the components labelled on each image. There is an example script for parsing the release.json in [Example script for using the release.json (copying images)](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#example_script_for_using_the_release_json_copying_images).

### [](#create_namespaces_with_the_correct_annotations "Copy link to heading")Create namespaces with the correct annotations

Required kubernetes namespaces per component are described in the components\_guide.yaml but can be overridden. Typically *tm-system*, *tm-monitoring*, *tm-vault*, and *istio-system* are needed. You must create all namespaces and annotate the vault namespace with the correct annotations for istio:

chat\_bubble

A valid Vault namespace (shown above as *"namespace"*) is required at the end of the istio annotation webhook label name for it to work.

### [](#initialise_the_operators "Copy link to heading")Initialise the operators

error

Vaultctl and the associated operators are versioned independently of Vault Core. To view this versioning, use vaultctl version. The Operator image versions are hardcoded into vaultctl and will be updated with `vaultctl init-operators`. Vaultctl is backwards-compatible with Vault Core releases and should not be downgraded. The lowest vaultctl version to be used with a Vault Core version is the version shipped with that Vault Core release, but you can use any subsequent version of vaultctl. Major, Minor and Patch releases will all include the latest vaultctl.

For previewing resources before applying them, you can use the `--export-dir` option to export resources to the filesystem instead of Kubernetes.

If you are *using your own Istio*, we recommend that you exclude Istio installer RBAC resources as these are not required. For example:

### [](#generate_the_values_file "Copy link to heading")Generate the values file

info

The previous command used to generate values, `vaultctl example-values`, has been deprecated in favour of `vaultctl values generate`. This function works identically for the most part, but generates a minimal set of values by default, rather than the full list.

The yaml that is output by `vaultctl values generate` includes the options required to configure a Vault Core instance - use this as a starting point for creating the values.yaml file for a new instance of Vault Core, or when new functionality is added to Vault Core. We expect you to have reviewed your values.yaml file to ensure it contains all the correct values for your infrastructure.

By default this command only outputs values which **must** be set (those which have no default). This makes it easier for new users to set up a Vault Core instance with default configuration. If you would like to generate a list of *all* possible values, use `vaultctl values generate -f` or `--full` (as shown). If you are using the deprecated `vaultctl example-values` command, this behaviour is inverted, with the tool generating a full values file by default, or a minimal values file with the `-m` or `--minimal` flags.

You can include a list of one or more Vault Core components with this command (as shown); this results in output yaml data that is specific to those components. This allows the configuration data for different components to be managed separately and, more importantly, avoids the inclusion of sections which relate to optional components that are not relevant for the current environment. The recommendation is to use this command with a component list that matches the components that will be installed on your Vault Core instance.

If upgrading an existing values file, provide it to this command (as shown in square brackets `[-e ]` above) and the existing overrides will be merged in. Then view a diff of the old and new values files in a text editor to see what has changed. Configure anything relevant in the new values file. Leave the docstrings in, because this will make it easier to check what has changed in the next release by viewing the diff of the files and ignoring anything that has not changed.

### [](#validate_the_values_yaml "Copy link to heading")Validate the `values.yaml`

After customising the `values.yaml` file, run the following command to validate that the values match Vault Core’s requirements. If the command output shows errors, correct the errors and rerun the command. Repeat this process until no errors remain.

Format:

Example:

### [](#install "Copy link to heading")Install

Format:

The `-v` flag can be used repeatedly to specify multiple values files or directories containing values files. If the argument to `-v` is a directory, loading will only be one level deep and only values files with the extension `.yaml` or `.yml` will be loaded. If multiple values files define the same nested key path, e.g. `core.product_key`, but assign different values, it will result in a conflict and the installation will fail.

error

Hotfixes are only applied to specific patch versions of Vault Core. The installation will fail if the hotfix and current patch versions do not match.

chat\_bubble

Starting from the Vault Core 5.5 release, we offer the Istio component as a separate release file from the rest of Vault Core. This allows us to release security and feature updates more frequently, and gives you more flexibility during installation.

For more information, see [Configuring Istio service mesh with Vault](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault).

Examples:

chat\_bubble

The install command will automatically reorder components to the correct order (as printed by vaultctl components).

For previewing resources before applying them, you can use the --export-dir option to export resources to the filesystem instead of Kubernetes. The --dry-run flag will run a practice install, creating the custom resources and verifying them without adding secrets to HashiCorp Vault or applying any workloads. The override-namespace (-o) flag overrides the default namespaces displayed by vaultctl components.

### [](#garbage_collect_after_switching_from_vault_to_vault_core_component "Copy link to heading")Garbage collect (after switching from vault to vault-core component)

The *vault* component was replaced by the *vault-core* component in Vault Core v4.4. If the TMComponent Operator was used to install Vault Core prior to 4.4, uninstall the old Vault Core component to garbage collect any resources that have not been taken over by the new component(s). Only do this after *all* of the new components have been installed (not just Vault Core).

### [](#garbage_collect_first_time_migration_from_classic_installer_only "Copy link to heading")Garbage collect (first-time migration from classic installer only)

If upgrading from the old-style installer pod for the first time, manually garbage-collect old resources when the operator installation is complete. This is not required for new or subsequent installations. For example:

### [](#installing_more_than_one_vault_core_environment_in_a_cluster "Copy link to heading")Installing more than one Vault Core environment in a cluster

Multiple Vault Core environments may be installed in the same cluster. Each environment will have its own values.yaml file and use a different namespace. The installation process will follow similar steps to the initial install, but the components designated as singletons do not need to be reinstalled (although there is no harm in doing so).

The exception to this rule is the observability component which *must* be installed for each namespace to ensure that the namespaced observability resources are fully configured. Make sure that the `vaultctl` command for installing the observability component has the same `-v` (values file) and `-o` (namespace translation) flags as given when installing the `vault-core` component.

## [](#miscellaneous_vaultctl_examples "Copy link to heading")Miscellaneous vaultctl examples

### [](#view_the_status_of_components_and_operators_in_the_cluster "Copy link to heading")View the status of components and operators in the cluster

### [](#uninstall_a_component "Copy link to heading")Uninstall a component

Format:

Example:

### [](#view_the_vaultctl_version "Copy link to heading")View the vaultctl version

### [](#restart_pods_excluding_the_kafka_pods "Copy link to heading")Restart pods, excluding the kafka pods

### [](#rotate_kafka_certificates "Copy link to heading")Rotate Kafka certificates

## [](#troubleshooting "Copy link to heading")Troubleshooting

### [](#using_the_vaultctl_diagnostics_tool "Copy link to heading")Using the vaultctl diagnostics tool

Use the vaultctl diag command to determine the progress and health of the Vault Core cluster, as well as information about the TMComponent and Crown Operators.

For example:

This command checks the state of a Vault Core cluster and generates a zip bundle, which Thought Machine can use when investigating issues.

This is a tool for debugging purposes, primarily to aid Thought Machine engineers in fixing issues with Vault Core installations; it is a snapshot tool that might impact resource usage (based on the amount of Kubernetes resources and logs queried).

Running vaultctl diag generates a zip file containing information about the cluster’s state. It checks a list of resources in a specified namespace (you can specify this, or use the default namespace). This allows for an easy inspection of one or more namespaces, such as logging or monitoring.

The zip file contains:

-   A list of the namespaces in the cluster
    
-   Lists of the following resources: ConfigMaps, services, nodes, pods, statefulsets, daemonsets, deployments, secrets, jobs, events, crowns, tmcomponents
    
-   A dump of the data of the ConfigMaps present in the cluster
    
-   Logs of the unhealthy pods (those not Initializing, Running or Completed)
    
-   Versions of Vault Core instances running on the cluster
    
-   TMComponent and Crown Operator logs
    

At no point does the vaultctl diag command try to access the contents of the secrets of a cluster; it only records their names, namespaces, and time of creation.

For the TMComponent and Crown Operators, there are some additional flags for flexibility:

-   The `--op-namespace` flag provides the option to specify the namespace where the operators are deployed, if it is different from tm-system (which is the default)
    
-   The `--op-pod-log-limit` flag allows you to specify the required number of lines, if the default of 100 lines is too little, or too much
    

 
| Flag | Description |
| --- | --- |
| 
`--pod-log-limit (integer)`

 | 

The maximum number of the latest lines of logs to get from each of every pod.

 |
| 

`--op-pod-log-limit (integer)`

 | 

The maximum number of the latest lines of logs to get from each of the TMComponent and Crown Operator pods.

 |
| 

`--op-namespace`

 | 

Allows you to specify the namespace where the operators are deployed, if it is different from the default tm-system.

 |
| 

`--keep-temp-files`

 | 

vaultctl diag produces some temporary files to reduce the amount of data stored in memory. This flag forces the process to keep them.

 |
| 

`--exclude (string)`

 | 

Prevents vaultctl diag from fetching a resource. Especially useful in resource-constrained clusters, where fetching ConfigMap data forces the tool to use a lot of memory to process all the data. This flag can also be used to fetch only specific resources. It can be specified multiple times. Possible values: configmaps, services, namespaces, nodes, pods, statefulsets, daemonsets, deployments, configmapdata, secrets.

 |
| 

`--namespace (string)`

 | 

Specifies which namespace(s) the tool should scan for resources in. Each namespace will have its own directory in the zip output and all log files will be in that directory. You can specify this flag multiple times to scan more than one namespace.

 |
| 

`--all-namespaces`

 | 

Instructs vaultctl diag to scan all namespaces in the cluster and produce log files in directories organised by namespace. Depending on the number of namespaces in the cluster, this might take a little more time to process all log files.

 |
| 

`--zipfile (string)`

 | 

Allows you to change the name of the output zip file to something other than vault-diagnostics.zip.

 |

### [](#overall_status "Copy link to heading")Overall status

Use the vaultctl status command to determine the progress and health of TMComponents on the cluster. For example:

The output printed will include an indication of which Crown Packages are failing, alongside Pod logs from owned resources that are in an incomplete state.

### [](#custom_resources "Copy link to heading")Custom resources

You can use kubectl to view Custom Resources. TMComponents, which are not namespaced, will aggregate Crown status information. Crowns, which are namespaced, will show the status of the native Kubernetes resources that make up Vault Core, along with other errors, such as templating failures.

### [](#operator_pod_logs "Copy link to heading")Operator pod logs

In exceptional situations where the error on the custom resource is not detailed enough, you can inspect the operator logs. The Crown deployment binary is run as part of the crown-operator reconciliation loop. Where there are errors deploying Crowns (for example templating errors), there will be errors visible in the logs of the Crown operator pod.

You may also need to view the logs of the TMComponent Operator, although this is unlikely to be an issue for deployment problems.

A final option is to look at the deployed resources themselves, to see if they are CrashLooping or failing to initialise.

### [](#managing_continuous_reconciliation "Copy link to heading")Managing Continuous Reconciliation

The Vault Operators are able to reconcile the deployed components to ensure that the resources in the Kubernetes cluster always match the baseline configuration. This ensures the environment is in a known state but prevents manual changes that may be required in some circumstances.

The default state for the reconciliation is `continuous reconcile: one-shot`. This means that once a component has installed, reconciliation is paused. This can be changed by setting the annotation on the tmcomponent:

Additionally, the boolean `--continuous-reconcile` flag on vaultctl install can be used to set `continuous reconcile: true` from the very beginning of the installation. Otherwise the default, without the flag, will be as before.

 
| tmcomponent.tmachine.io/continuous-reconcile Value | Behaviour |
| --- | --- |
| 
one-shot

 | 

Reconciles crown until the TMComponent reaches ReadinessCheckComplete, then stops.

 |
| 

true

 | 

Continuously reconciles crown and owned workloads.

 |
| 

false

 | 

Reconciles crown in the same way as one-shot, but with more backwards compatibility.

 |
| 

paused

 | 

Stops any further reconciliation regardless of crown status.

 |