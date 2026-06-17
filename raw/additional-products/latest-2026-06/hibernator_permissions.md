---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/permissions"
title: "Permissions"
scraped_at: "2026-06-17T05:13:55.978Z"
images: 0
---

# Permissions

This details the permissions that Hibernator has in order to scale cloud databases and Kubernetes workloads.

## [](#kubernetes_rbac_permissions "Copy link to heading")Kubernetes RBAC permissions

We use RBAC Authorization to allow Hibernator to control specific Kubernetes resources in order to scale them. These are a set of rules defined in the Hibernator cluster role object that is linked to the Hibernator service account. This is the set of permissions:

## [](#managing_cloud_permissions_for_database_support "Copy link to heading")Managing cloud permissions for database support

Hibernator requires a set of Cloud IAM permissions in order to be able to scale your database(s). This is achieved by using workload identities. For example, you can create a service account in your Cloud Service Provider project then assign the required IAM permissions to it and associate it with Hibernator’s Kubernetes service account. You can find more details about the permissions required for each Cloud Service Provider below.

### [](#aws "Copy link to heading")AWS

Hibernator supports scaling both RDS PostgreSQL instances and Aurora clusters. The minimal set of IAM permissions required for each of them is listed below.

 
| RDS | Aurora |
| --- | --- |
| 
```
rds:StartDBInstance
rds:StopDBInstance
rds:DescribeDBInstances
```






 | 

```
rds:StartDBCluster
rds:StopDBCluster
rds:DescribeDBClusters
```






 |

You can use the [AWS CLI](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html) or Terraform (See [Appendix A](#appendix_a)). Workload access can be achieved in other ways too, e.g. through EKS Pod Identity, and we do not enforce any specific implementation. The only thing that Hibernator expects is a service account ARN that contains the correct IAM permissions, which will be passed through in the values file. This will then be added as an annotation on the Hibernator Kubernetes service account.

### [](#gcp "Copy link to heading")GCP

Hibernator supports scaling both GCP CloudSQL instances and AlloyDB clusters. The minimal set of IAM permissions required for each of them is listed below.

 
| CloudSQL | AlloyDB |
| --- | --- |
| 
```
cloudsql.instances.get
cloudsql.instances.list
cloudsql.instances.update
```






 | 

```
alloydb.instances.get
alloydb.instances.list
alloydb.instances.update
alloydb.operations.get
alloydb.operations.list
```






 |

For an example on how to obtain workload access, you can use either [gcloud](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#kubernetes-sa-to-iam) or Terraform (See [Appendix B](#appendix_b)). Workload access can be achieved in a different way too e.g. through [IAM Principal identifiers](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) and we do not enforce any specific implementation. The only thing that Hibernator expects is a service account identifier that contains the correct IAM permissions and is passed through the values file.

### [](#azure "Copy link to heading")Azure

Hibernator supports scaling Azure Database for PostgreSQL - Flexible Server. The minimal set of IAM permissions required for this is listed below.

| Azure Database for PostgreSQL - Flexible Server |
| --- |
| 
```
Microsoft.DBforPostgreSQL/flexibleServers/read
Microsoft.DBforPostgreSQL/flexibleServers/start/action
Microsoft.DBforPostgreSQL/flexibleServers/stop/action
```






 |

For an example on how to obtain workload access, you can use either [az](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster) or Terraform (See [Appendix C](#appendix_c)).

### [](#openshift "Copy link to heading")OpenShift

There is nothing specific required for running Hibernator on OpenShift. The only thing to note is that if OpenShift is deployed in a CSP such as GCP or AWS, Hibernator will need to be able to scale the database instances up or down. For this, Hibernator will need access to the CSP API, which is granted using the [Cloud Credential Operator](https://docs.openshift.com/container-platform/4.17/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator.html) (CCO). For GCP, the required CredentialsRequest object, with all required permissions, is deployed when the `openshift_on_gcp` option is set to `true`.

## [](#appendix_a "Copy link to heading")Appendix A

The below is appropriate for either Amazon RDS or Aurora databases.

## [](#appendix_b "Copy link to heading")Appendix B

## [](#appendix_c "Copy link to heading")Appendix C

## [](#appendix_d "Copy link to heading")Appendix D

### [](#gcp_2 "Copy link to heading")GCP

### [](#aws_2 "Copy link to heading")AWS

### [](#azure_2 "Copy link to heading")Azure

### [](#openshift_on_gcp_with_cloud_credential_operator_in_default_mode_mint_or_passthrough "Copy link to heading")OpenShift on GCP with Cloud Credential Operator in Default Mode (Mint or Passthrough)

Default mode is described [here](https://docs.openshift.com/container-platform/4.18/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator.html#about-cloud-credential-operator-modes_about-cloud-credential-operator).

### [](#openshift_on_gcp_with_the_cloud_credential_operator_in_manual_mode_using_workload_identities "Copy link to heading")OpenShift on GCP with the Cloud Credential Operator in Manual Mode using Workload Identities

Manual mode is also described [here](https://docs.openshift.com/container-platform/4.18/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator.html#about-cloud-credential-operator-modes_about-cloud-credential-operator). This values file is the same as for 'regular' GCP.