---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/overview/installation"
title: "Installing Hibernator"
scraped_at: "2026-06-17T15:52:12.406Z"
images: 0
---

# Installing Hibernator

Follow the steps on this page to install Hibernator.

## [](#obtaining_a_licence_key "Copy link to heading")Obtaining a licence key

You should have been sent a licence product key by Thought Machine. This is a signed JWT that will be passed to Hibernator through your values file. If this key is invalid or has expired, Hibernator will not be able to scale your workloads.

## [](#obtaining_the_hibernator_release_file "Copy link to heading")Obtaining the Hibernator release file

Download the latest version of Hibernator from [Release Notes](/additional-product-offerings/latest/EN/hibernator/release_notes).

## [](#permissions "Copy link to heading")Permissions

For the required Kubernetes and cloud permissions, please see [Permissions](/additional-product-offerings/latest/EN/hibernator/permissions).

## [](#creating_your_values_file "Copy link to heading")Creating your values file

You will need to create a `hibernator_values.yaml` file for your installation. This is a simple YAML file where you can provide configuration for your Hibernator deployment. It is used for configuring e.g. the path to your Docker registry where images will be pulled from, your product licence key, the CSP service account annotation from the previous step, etc. This file follows a specific schema. In the table below we list each parameter that is configurable along with its type, default values and description.

    
| Parameter | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| 
`hibernator.service_account.annotations`

 | 

object

 | 

`{}`

 | 

`iam.gke.io/gcp-service-account: "[hibernator@project.iam.gserviceaccount.com](mailto:hibernator@project.iam.gserviceaccount.com)"`

 | 

The IAM role attached to the service account to enable a workload identity.

 |
| 

`hibernator.namespace`

 | 

string

 | 

`hibernator`

 | 

`other-hibernator-ns`

 | 

The Kubernetes namespace where Hibernator will be deployed. If this value is set, you must also supply this value to `vaultctl` using `-o hibernator:other-hibernator-ns`

 |
| 

`hibernator.product_key`

 | 

string

 | 

\-

 | 

`"nqVypzjRbtw.kcuhgxaLfvqhgxaLfvq"`

 | 

Your generated product key.

 |
| 

`hibernator.alertmanager_endpoint`

 | 

string

 | 

\-

 | 

`"<service>.<namespace>.svc.cluster.local:<port>"` e.g. `"alertmanager.monitoring.svc.cluster.local:9093"`

 | 

The Alertmanager’s endpoint in the cluster. If set it will silence alerts during scaledown, otherwise it will not take any action.

 |
| 

`hibernator.openshift_on_gcp`

 | 

bool

 | 

`false`

 | 

`false`

 | 

Deploy the CredentialsRequest and mount the required secrets for scaling CloudSQL and AlloyDB instances when running on OpenShift, deployed on GCP.

 |
| 

`k8s.docker_registry_path`

 | 

string

 | 

\-

 | 

`"0123456789.dkr.ecr.eu-west-1.amazonaws.com"`

 | 

Path to the docker registry used for all Docker images. No trailing '/' is allowed.

 |

For examples of these values files, please check [Permissions - Appendix D](/additional-product-offerings/latest/EN/hibernator/permissions#appendix_d).

## [](#running_vaultctl_install "Copy link to heading")Running vaultctl install

Now that we’ve created our values file, the following two steps will allow us to install Hibernator and get started.

### [](#1_create_the_hibernator_kubernetes_namespace "Copy link to heading")1\. Create the Hibernator Kubernetes namespace

Create your namespace, either via kubectl or by applying a YAML manifest containing the namespace.

By default this namespace is called **hibernator**. If you need to deploy this in another namespace, please set the `hibernator.namespace` value in your Hibernator values file and install hibernator with `-o hibernator:$HIBERNATOR_NAMESPACE`

### [](#2_install_the_hibernator_release "Copy link to heading")2\. Install the Hibernator release

Next you need to install the Hibernator release. This will create everything that is needed for Hibernator to function - the deployment, the service account, etc. In here you will need to use the values file that you created in the previous step (e.g. `hibernator_values.yaml`). The other required argument is the release file that you downloaded above.

And that’s it, Hibernator should now be up and running! You can see your new Hibernator operator with the command below.

Nothing will be scaling up and down yet. Continue with the following steps to set up a schedule.

## [](#configuring_your_cluster_autoscaler "Copy link to heading")Configuring your cluster autoscaler

Make sure your cluster autoscaler is configured correctly. This is very important because Hibernator will work hand in hand with your cluster autoscaler so if one or the other is not configured correctly, it might result in suboptimal cost savings or no savings at all. Please check the following guides.

[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler) - set up autoscaling on a GKE cluster

[AWS Elastic Kubernetes Service](https://docs.aws.amazon.com/eks/latest/userguide/autoscaling.html) - set up autoscaling on an EKS cluster

[Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/aks/cluster-autoscaler) - set up autoscaling on an AKS cluster

[OpenShift Container Platform](https://docs.openshift.com/container-platform/4.17/machine_management/applying-autoscaling.html) - set up autoscaling on an OpenShift cluster

## [](#adding_hibernatorschedules "Copy link to heading")Adding HibernatorSchedules

HibernatorSchedules are the Kubernetes custom resource objects that tell Hibernator when a namespace should be scaled up and down. Each schedule is a cluster-scoped object that directly relates to a single namespace. The name of the schedule **must** match the name of the namespace that you wish to scale. If the schedule name does not correspond to any namespace then Hibernator will not perform any scaling operations. The following details two ways to install a HibernatorSchedule, as well as the schema for the expected values and fields.

If you have two environments on your cluster that you wish to scale, you can follow this process twice and add two independent HibernatorSchedules.

### [](#using_vaultctl "Copy link to heading")Using vaultctl

First, you will need to create a `schedule_values.yaml` values file for your HibernatorSchedule. This file needs to follow a specific schema for it to be accepted from the vault installer. Lets take a look at all the available fields and their structure.

Each of these parameters is described in the table below.

    
| Parameter | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| 
`namespace`

 | 

string

 | 

`"tm-vault"`

 | 

`"other-vault-ns"`

 | 

The namespace that Hibernator will scale based on this schedule. If this value is set, you must also supply this value to vaultctl using `-o tm-vault:other-vault-ns`

 |
| 

`enabled`

 | 

bool

 | 

`true`

 | 

`true`

 | 

Activates or deactivates the HibernatorSchedule. If the schedule is deactivated then Hibernator will take no actions against the namespace.

 |
| 

`uptime`

 | 

string

 | 

\-

 | 

`Mon-Fri 06:00-18:30"`

 | 

Defines when the namespace should be scaled up.

 |
| 

`excluded_resources.deployments`

 | 

array

 | 

`[]`

 | 

`["deployment-a","deployment-b"]`

 | 

A list of k8s deployments that should be excluded from hibernation.

 |
| 

`excluded_resources.statefulsets`

 | 

array

 | 

`[]`

 | 

`["sts-a","sts-b"]`

 | 

A list of k8s statefulsets that should be excluded from hibernation.

 |
| 

`db_configs`

 | 

array

 | 

`[]`

 | 

```
\- account\_id: "my-account"
  db\_instance: "dev-db-d8f5"
  db\_type: "cloudsql"
  provider: "gcp"
  region: "europe-west2"
  cpu\_count: 2
```






 | 

The database parameters that will be used by Hibernator to scale the database that is used by Vault. Multiple databases are supported.

 |

The db\_configs parameter is an array of objects since Hibernator supports multi-db configurations. Each parameter and its expected values is described below.

-   `account_id`: this is the ID of your account/project where the database is located. For Azure, this is your subscription ID, for GCP it’s the project name, and for AWS it’s the account ID.
    
-   `db_instance`: the unique identifier (ID) of your database.
    
-   `db_type`: the type of database you are using. This can be "cloudsql", "alloydb", "rds" or "flexibleserver". If your database is an Amazon Aurora DB, you should specify "rds" here.
    
-   `provider`: the Cloud service provider that manages your database. This can be "gcp", "aws" or "azure".
    
-   `region`: the CSP region where your database is located.
    
-   `cpu_count`: (only for AlloyDB) the number of CPUs to scale to. This can be 2, 4, 8, 16, 32, 64, 96 or 128.
    
-   `resource_group`: (only for Azure) the Azure resource group name that the PostgreSQL flexible server is part of.
    

Once you’ve created your values file, you can install a HibernatorSchedule with *vaultctl* as follows:

Where:

-   `context` - Context to use when connecting to the Kubernetes cluster.
    
-   `values-file` - Path to values YAML file that contains your schedule configuration.
    
-   `override-namespace` - Option to override your Vault instance namespace if it’s not the default tm-vault one.
    
-   `release-file` - The Hibernator release file that you downloaded.
    

If your Vault instance is not deployed in the tm-vault namespace, you should substitute $VAULT\_NAMESPACE with the one where it is deployed. If the tm-vault namespace is used you can omit the --override-namespace argument completely.

### [](#using_manifest_files "Copy link to heading")Using manifest files

Alternatively, you can install schedules by creating the corresponding manifest files and applying them directly to your cluster. Your manifest file should look similar to this:

**IMPORTANT**: Notice how the fields here are using camelCase compared to underscores in the values file. Apart from that all the parameters are the same as those in the values file. After you create this file you can just apply it directly to your cluster.

## [](#conclusion "Copy link to heading")Conclusion

Your Hibernator instance should now be fully installed. Have a look at the logs for the `hibernator` pod to see what it’s doing, or run `kubectl get hibernatorschedules` to view the hibernation status of your Vault instance.