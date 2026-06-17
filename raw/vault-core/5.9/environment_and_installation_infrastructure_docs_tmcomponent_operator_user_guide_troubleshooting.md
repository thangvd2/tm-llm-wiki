---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/troubleshooting"
title: "Troubleshooting"
scraped_at: "2026-06-17T04:58:45.489Z"
images: 0
---

# Troubleshooting

Bank-hosted

This guide goes through how to monitor the progress of your Vault Core installation, as well as common problems and how to troubleshoot them.

## [](#using_the_vaultctl_diagnostics_tool "Copy link to heading")Using the vaultctl diagnostics tool

The vaultctl diagnostics tool is for debugging purposes, primarily to aid Thought Machine engineers in fixing issues with Vault Core installations. It is a snapshot tool that might affect resource usage (based on the amount of Kubernetes resources and logs queried).

Use the `vaultctl diag` command to determine the progress and health of the Vault Core cluster, as well as information about the [TMComponent](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#tmcomponent_operator) and [Crown Operators](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/deployment_tools#crown_operator):

This command checks the state of a Vault Core cluster and checks a list of resources in a specified namespace (you can either specify this or use the default namespace). This allows for an easy inspection of one or more namespaces, such as logging or monitoring.

Running `vaultctl diag` also generates a zip file containing information about the cluster’s state, which Thought Machine can use when investigating issues.

The zip file contains:

-   A list of the namespaces in the cluster
    
-   Lists of the following resources: ConfigMaps, services, nodes, pods, statefulsets, daemonsets, deployments, secrets, jobs, events, crowns, tmcomponents
    
-   A dump of the data of the ConfigMaps present in the cluster
    
-   Logs of the unhealthy pods (those not Initializing, Running or Completed)
    
-   Versions of Vault Core instances running on the cluster
    
-   TMComponent and Crown Operator logs
    

At no point does the `vaultctl diag` command try to access the contents of the secrets of a cluster; it only records their names, namespaces, and time of creation.

For the TMComponent and Crown Operators, there are some additional flags for flexibility:

-   The `--op-namespace` flag provides the option to specify the namespace where the operators are deployed, if it is different from tm-system (which is the default).
    
-   The `--op-pod-log-limit` flag allows you to specify the required number of lines, if the default of 100 lines is too little, or too much.
    

 
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

Allows you to specify the namespace where the operators are deployed, if it is different from the default *tm-system*.

 |
| 

`--keep-temp-files`

 | 

`vaultctl diag` produces some temporary files to reduce the amount of data stored in memory. This flag forces the process to keep them.

 |
| 

`--exclude (string)`

 | 

Prevents `vaultctl diag` from fetching a resource. Especially useful in resource-constrained clusters, where fetching ConfigMap data forces the tool to use a lot of memory to process all the data. This flag can also be used to fetch only specific resources. You can specify this flag multiple times. Possible values: configmaps, services, namespaces, nodes, pods, statefulsets, daemonsets, deployments, configmapdata, secrets.

 |
| 

`--namespace (string)`

 | 

Specifies which namespace(s) the tool should scan for resources in. Each namespace will have its own directory in the zip output and all log files will be in that directory. You can specify this flag multiple times to scan more than one namespace.

 |
| 

`--all-namespaces`

 | 

Instructs `vaultctl diag` to scan all namespaces in the cluster and produce log files in directories organised by namespace. Depending on the number of namespaces in the cluster, this might take a little more time to process all log files.

 |
| 

`--zipfile (string)`

 | 

Allows you to change the name of the output zip file to something other than `vault-diagnostics.zip`.

 |

## [](#checking_overall_status "Copy link to heading")Checking overall status

Use the `vaultctl status` command to determine the progress and health of TMComponents on the cluster. For example:

The output printed will include an indication of which Crown Packages are failing, alongside Pod logs from owned resources that are in an incomplete state.

## [](#viewing_custom_resources "Copy link to heading")Viewing custom resources

You can use kubectl to view custom resources. TMComponents, which are not namespaced, will aggregate Crown status information. Crowns, which are namespaced, will show the status of the native Kubernetes resources that make up Vault Core, along with other errors, such as templating failures.

## [](#operator_pod_logs "Copy link to heading")Operator pod logs

In exceptional situations where the error on the custom resource is not detailed enough, you can inspect the operator logs. The Crown deployment binary is run as part of the crown-operator reconciliation loop. Where there are errors deploying Crowns (for example, templating errors), there will be errors visible in the logs of the Crown operator pod.

You may also need to view the logs of the TMComponent Operator, although this is unlikely to be an issue for deployment problems.

A final option is to look at the deployed resources to see if they are *CrashLooping* or failing to initialise.

## [](#common_problems "Copy link to heading")Common problems

Below are some common issues that can occur during installation, and how to troubleshoot them:

 
| Problem | How to investigate |
| --- | --- |
| 
Pods are crashlooping or logging errors continuously on start-up

 | 

-   Check the logs to see if the container is running - use `kubectl logs <pod-name> -c <container-name>` to print the logs for a particular container in a pod.
    
-   Check the status of a particular pod by running `kubectl describe pod <pod-name>`.
    
-   Run `kubectl get events --sort-by=".lastTimestamp" --namespace <namespace>` to retrieve a log of events occurring within a specific namespace, ordered chronologically.
    
-   Check the `values.yaml` configuration for hosts.
    
-   Try and reach the host from the debug pod.
    
-   If you are using HashiCorp Vault, and pods are failing to reach it, use the `istio.proxy.exclude_cidr` setting in the values files to exclude the HashiCorp Vault IP addresses from the service mesh. See [Modifications required for using the Istio CNI](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_istio_service_mesh_with_vault#modifications_required_for_using_the_istio_cni) for more information.
    
-   Refer to [Configuring cloud infrastructure](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure) for specific guidance on a component or cloud provider.
    





 |
| 

Crown resource error or pods missing from namespace

 | 

-   Use `kubectl describe crown` for information about all the Crowns in the namespace. For a specific Crown, use `kubectl describe crown <crown name>`.
    
-   Check the Crown status using `vaultctl status` or `kubectl get crowns`.
    
-   Check for errors in the crown-operator log - see [Operator pod logs](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/troubleshooting#operator_pod_logs).
    





 |
| 

TMComponent error

 | 

-   Check the Crown status and TMComponent status using `vaultctl status`, or `kubectl get crowns`/`kubectl get tmc`.
    
-   Check for errors in the tmcomponent-operator log, especially if the TMComponent is stuck in `Initialised` state - see [Operator pod logs](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/troubleshooting#operator_pod_logs).
    





 |