---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/troubleshooting"
title: "Troubleshooting"
scraped_at: "2026-06-17T05:14:02.500Z"
images: 0
---

# Troubleshooting

## [](#error_cases "Copy link to heading")Error cases

### [](#the_initialisation_is_stuck "Copy link to heading")The initialisation is stuck

Check if the `hibernator` namespace exists:

Check the TMComponent for any issues:

Check the crown package for any issues:

Check the deployment and pod for any issues:

### [](#there_are_rbac_errors "Copy link to heading")There are RBAC errors

Check if the RBAC rules below exist on the `crown-operator` ClusterRole (e.g. with `kubectl`). These rules should exist if you are using an up-to-date vaultctl binary:

If these do not exist, you can manually add them by editing the ClusterRole:

If the steps above fail to provide any useful information, try doing another installation.

### [](#an_environments_deploymentsstatefulsets_are_not_scaling_up_or_down "Copy link to heading")An Environment’s deployments/statefulsets are not scaling up or down

#### [](#a_check_if_the_hibernatorschedule_has_been_created "Copy link to heading")a. Check if the HibernatorSchedule has been created

Make sure that the name of the schedule matches the name of the namespace that we want to scale. Make sure the status of the schedule is not "Errored", "Disabled" or "Unknown". If it is in one of these states, `describe` the HibernatorSchedule for more information.

#### [](#b_check_if_the_hibernatorschedule_is_enabled "Copy link to heading")b. Check if the HibernatorSchedule is enabled

If the schedule is not enabled then Hibernator will not perform any scaling in the namespace.

#### [](#c_check_if_the_uptime_is_correct "Copy link to heading")c. Check if the uptime is correct

I.e. check that the uptime reflects when you want the environment to be scaled up:

See [uptime schedule types and examples](schedule_types) for more information about what uptimes should look like.

#### [](#d_check_that_hibernator_is_deployed_and_running "Copy link to heading")d. Check that Hibernator is deployed and running

#### [](#e_check_the_hibernator_pods_logs "Copy link to heading")e. Check the hibernator pod’s logs

If there are no useful logs, you can edit the log verbosity in the deployment:

Change the LOG\_LEVEL and VERBOSITY values from INFO to DEBUG, then check the logs again.

#### [](#f_check_for_the_hibernator_tmachine_ioprevious_replicas_annotation "Copy link to heading")f. Check for the hibernator.tmachine.io/previous-replicas annotation

If certain deployments and statefulsets are scaled down and refusing to scale up, check if the annotation `hibernator.tmachine.io/previous-replicas` is present on them. If this is not set, Hibernator will not know how many replicas to scale to, so everything will remain scaled down. If this is the case, you can try manually adding this annotation.

#### [](#g_manually_trigger_a_reconcile "Copy link to heading")g. Manually trigger a reconcile

If it looks like changes to the HibernatorSchedule are not being picked up by the hibernator pod, you can trigger a reconcile by editing the HibernatorSchedule object with `kubectl edit`, setting `enabled` to `False`, save, and then set it back to `True`. Check the hibernator pod logs again to see whether the change was detected.

If none of the above show any useful information, and you need your environment to scale up, you should go to [force-scaling an environment](#force_scaling_an_environment) and follow the steps there. You should then contact support, who will be able to investigate what may have gone wrong.

### [](#there_are_webhook_errors_when_scaling_down_deployments "Copy link to heading")There are webhook errors when scaling down deployments

If you are seeing `Internal error occurred: failed calling webhook` errors on Hibernator when attempting to scale down Vault Core resources, you should check your HibernatorSchedule and ensure that the `excluded_resources.deployments` list contains required deployments.

### [](#the_30_minute_buffer_window_isnt_working "Copy link to heading")The 30 minute 'buffer window' isn’t working

There is a 30 minute 'buffer window' between when stateful and stateless resources scale up and down. This rule does not take effect if the uptime is set to "always", "never" or when applying a schedule with an uptime where the next scaling event should begin in less than 30 minutes.

### [](#theres_a_bug_in_the_dashboard "Copy link to heading")There’s a bug in the dashboard

The Grafana dashboard will soon be released with Vault. Please report any issues you see. We will backport any bugfixes and improvements so that they’re included with patch releases and you’ll be able to view these regardless of your Vault version. If urgent, we can send the fixed JSON directly.

## [](#force_scaling_an_environment "Copy link to heading")Force-scaling an environment

If you need your environment to scale up urgently, and none of the troubleshooting steps provided any useful information, then you should try the following steps.

### [](#manually_scaling_the_database "Copy link to heading")Manually scaling the database

If the database is down and needs scaling up, you should do so before scaling the Kubernetes workloads. The following commands will allow you to scale different database types. You’ll need to first ensure you have appropriate permissions to run these.

#### [](#cloudsql "Copy link to heading")CloudSQL

Where `project` is the GCP project in which the database was created, and `instance-name` is the name of the CloudSQL database instance. To instead stop the database, set `activation-policy` above to `NEVER`.

#### [](#alloydb "Copy link to heading")AlloyDB

For AlloyDB, we don’t "start" or "stop" the database, but rather we scale the primary instance by adjusting its CPU count.

Where:

-   `instance-id` is the ID of the primary AlloyDB instance that you are updating.
    
-   `region-id` is the region of the primary AlloyDB instance.
    
-   `cluster-id` is the ID of the AlloyDB cluster.
    
-   `project` is the ID of the project that includes your AlloyDB cluster.
    

To scale up, set `cpu-count` to a value that meets the workload’s demands. See the [GCP documentation](https://cloud.google.com/alloydb/docs/instance-read-pool-scale#gcloud) for valid values, and to see what this will scale the memory to. To instead scale the database down, set the CPU count to 2.

#### [](#rds "Copy link to heading")RDS

Starting and stopping your RDS instance is very similar to CloudSQL.

Where `profile` is the AWS profile containing your instance, and `db-instance-name` is the name of your database instance. You can stop the RDS instance with `stop-db-instance`.

#### [](#aurora "Copy link to heading")Aurora

Starting and stopping your Aurora database is also similar to the above.

Where `profile` is the AWS profile containing your Aurora cluster, and `db-cluster-name` is the name of your Aurora cluster. You can stop the database with `stop-db-cluster`.

#### [](#azure_database_for_postgresql_flexible_server "Copy link to heading")Azure Database for PostgreSQL flexible server

Starting and stopping an Azure DB is similar to RDS and CloudSQL.

### [](#manually_scaling_the_kubernetes_workloads "Copy link to heading")Manually scaling the Kubernetes workloads

If the StatefulSets and Deployments are on 0 replicas and not scaling up, you should try the following:

1.  First, you can try deleting the HibernatorSchedule object with `kubectl`. The finalizer should kick in which should scale things up. You will then need to repeat the [adding HibernatorSchedules](overview/installation#adding_hibernatorschedules) steps to re-install it.
    
2.  If the above doesn’t work, you can try scaling the Deployments and StatefulSets manually. This command will read the `previous-replicas` annotation for StatefulSets (if it exists) and scale them up:
    

Then repeat the above, replacing `statefulset` with `deployment`.

3.  If the above doesn’t work, you can scale everything to 1 replica. If you have HPAs deployed to your environment, these should kick in and will adjust the replica count based on the load for each StatefulSet/Deployment.
    

```
\# Scale up StatefulSets to 1 replica
kubectl --context <context> -n <hibernator-namespace> get statefulsets -o custom-columns=:metadata.name --no-headers | xargs -I {} kubectl --context <context> -n <namespace> scale statefulset {} --replicas 1
```

Then repeat the above, replacing `statefulset` with `deployment`.

**IMPORTANT**: Make sure not to scale any StatefulSets/Deployments that should not be scaled up. You can provide a list of StatefulSets/Deployments to exclude by adjusting the above commands with the --field-selector argument: