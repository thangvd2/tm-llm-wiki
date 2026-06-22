---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/relational_database"
title: "Relational database"
scraped_at: "2026-06-17T15:54:38.206Z"
images: 1
---

# Relational database

Vault Bridge requires a PostgreSQL relational database to function properly. Vault Bridge supports the following PostgreSQL versions: 14, 15, 16 & 17. The database must:

-   Be deployed to multiple Availability Zones or data centres for high availability.
    
-   Have support for logical replication switched on (disabled by default).
    
-   Be set up to serve over TLS (disabled by default).
    

The client is responsible for creating and managing the relational database.

lightbulb

This guide refers to `values.yaml`. While you will typically create this file as part of the [Vault Bridge Installation](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation#generate_the_values_file), you can create it now and only fill in the values required for this guide.

## [](#relational_database_configuration_changes "Copy link to heading")Relational database configuration changes

In order to use a relational database with Vault Bridge you must change the default configuration. Change the following configuration settings:

-   `pg_hba.conf`
    
-   `postgresql.conf`
    
-   Extensions
    

### [](#configuring_pg_hba_conf "Copy link to heading")Configuring `pg_hba.conf`

Changes:

-   add HBA for pods and nodes
    
-   allow replication
    

Example:

### [](#configuring_postgresql_conf "Copy link to heading")Configuring `postgresql.conf`

Changes:

-   enable TLS
    
-   increase the maximum number of connections
    
-   enable logical replication
    
-   set the default client timezone to UTC
    

Determining the maximum number of connections to a PostgreSQL database, whether bank-hosted or managed, is not as straightforward as it might seem and typically depends on a number of factors.

These factors include:

-   the number of CPU cores
    
-   available memory
    
-   specific workload characteristics
    

Thought Machine suggests that you set the maximum number of connections to 1000 and set the minimum memory to 32GB.

error

This number is an estimation only, and is based on the performance characteristics of AWS Aurora and GCP Alloy databases. You must consider corrections to this number depending on the factors affecting your installation, as outlined above.

error

The optimal value can change with newer versions of Vault Bridge and with the load it is handling as it runs.

Example:

error

The SSL-related file paths may be completely different for your PostgreSQL installation.

### [](#configuring_extensions "Copy link to heading")Configuring extensions

Changes:

The common extensions `uuid-ossp`, `pg_trgm` and `pg_stat_statements` should be installed (usually as part of the PostgreSQL distribution).

## [](#configuring_vault_with_postgresqlcloudsql "Copy link to heading")Configuring Vault with PostgreSQL/CloudSQL

You can configure Vault Bridge for use with either PostgreSQL or CloudSQL.

### [](#google_cloud_platform_configuration_options "Copy link to heading")Google Cloud Platform configuration options

Whether you host a PostgreSQL on a virtual machine (VM) or configure Vault Bridge with CloudSQL, you can create one of the following:

-   An entry in the DNS zone of the VPC that resolves to the private IP of the instance.
    
-   A ClusterIP service in one of the namespaces of your Kubernetes cluster and manually create an endpoint object which points to the private IP of the DB instance.
    

### [](#hosting_a_postgresql_on_a_vm_virtual_machine "Copy link to heading")Hosting a PostgreSQL on a VM (Virtual Machine)

To load server certificates and key on your instance, you should produce and store them in a GCS bucket. Next, run the following example commands to load them to the VM that hosts your PostgreSQL:

### [](#configuring_vault_bridge_with_cloudsql "Copy link to heading")Configuring Vault Bridge with CloudSQL

Vault Bridge supports only username/password authentication with CloudSQL.

Choose one of the following options:

-   Allow non-SSL/non-TLS connections and allow SSL/TLS connections - the client certificate is not verified for SSL/TLS connections (this is the default setting).
    
-   Only allow connections encrypted with SSL/TLS - the client certificate is not verified for SSL connections.
    
-   Only allow connections encrypted with SSL/TLS and with valid client certificates.
    

error

**If you check \*Allow only SSL connections**, this forces client TLS authentication for connections to the database. You can use this option but you must NOT enable **Require trusted client certificates**.

Set all of the following values in your `values.yaml`:

-   `common.db.ssl_mode: 'require'`
    

Inject the CA certificate of the CloudSQL instance to the Vault Bridge instance. You can do this using the `ca-injector` webhook as described in [Configuring a custom certificate authority](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/before_you_start#configuring_a_custom_certificate_authority).

### [](#amazon_web_services_rds_parameter_group_example_values "Copy link to heading")Amazon Web Services RDS parameter group example values

These are example values for RDS parameter groups:

## [](#installing_vault_bridge_with_a_database_admin_user "Copy link to heading")Installing Vault Bridge with a Database Admin User

Vault Bridge ships with a Kubernetes Job that runs as part of an installation or upgrade, which handles bootstrapping the database by creating the logical databases and users that Vault Bridge needs to function. It will also install certain extensions and grant the required permissions for reading and writing data to App database users.

In order to achieve this, the Kubernetes Job requires access to the database.

Here, we describe the additional steps that you can choose to follow, if you want to set up an admin user for the purposes of installing or upgrading Vault Bridge.

chat\_bubble

The examples in this section include `<placeholders>` and example values. You must replace these (including the symbols that indicate them) with the correct values for your setup.

### [](#step_1_creating_the_admin_user "Copy link to heading")Step 1. Creating the admin user

The admin user privileges must allow the user to create logical databases and create users. In PostgreSQL, it requires the privileges `CREATEDB` and `CREATEROLE`. Use the commands `CREATE` to create the user and `ALTER` to assign the roles.

You MUST make sure that the password for the admin user is both:

-   the same as the password located in the secret store as `"root-db-secrets"`
    
-   different to the root user password
    

You must also update the `values.yaml` file to reflect this and set the `bridge.db.admin_user`.

Examples:

In this example, to create an admin user that authenticates *using a password* (called `tm_admin` here) we will log in to the database as the superuser and execute the following command:

Or, for an admin user that authenticates *without a password* (such as [AWS IAM DB authentication](/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/relational_database#configuring_rbac_based_authentication_to_aws_rdsaurora)):

### [](#step_2_creating_the_pg_stat_statements_extension "Copy link to heading")Step 2. Creating the pg\_stat\_statements extension

From PostgreSQL 13, non-superusers can create extensions if they are marked as 'trusted'. This is true for all but one of the extensions that Vault Bridge needs, the odd one out being `pg_stat_statements` - meaning it must be created with a superuser. This extension is used by the `postgres-exporter` pods to fetch server-side metrics, including metrics about query latencies, cache hit ratios, the type and number of locks that have been acquired (this list is not exhaustive).

If the database initialisation job determines that it is not using a superuser role, it will not attempt to create this extension on every logical database. This means that it requires a small amount of manual overhead from you to ensure that all of the extensions that Vault Bridge requires are created.

There are two main ways that you can ensure that all of the required extensions are created if the database initialisation job uses a non-superuser role:

-   Option 1: Add the `pg_stat_statements` extension to the template1 database (recommended)
    
-   Option 2: Create the `pg_stat_statements` extension on every new database after installing or upgrading Vault Bridge.
    

#### [](#option_1_adding_the_pg_stat_statements_extension_to_the_template1_database "Copy link to heading")Option 1: Adding the pg\_stat\_statements extension to the template1 database

When PostgreSQL is issued with a `create database` command it makes a copy of the `template1` logical database, which is an internal database, and renames it to the new database’s name.

You can add the `pg_stat_statements` extension to the `template1` database so that it is created on a new Vault Core logical database by default when the Vault installer creates it. For more information, see: [PostgreSQL Template Databases documentation](https://www.postgresql.org/docs/current/manage-ag-templatedbs.html)

To add the extension to the template1 database, log into the database as a superuser and run the following command:

This means that only one manual step is required and all subsequent Vault Bridge version upgrades do not need any access to or any manual actions from the superuser. This is the recommended approach; if it is not suitable, see option 2 to create the extension on every new logical database.

#### [](#option_2_creating_the_extension_on_every_new_logical_database "Copy link to heading")Option 2: Creating the extension on every new logical database

If the template1 option is not suitable, the remaining solution is to create the extension on all of the logical databases that the admin user creates.

You can do this manually or automate it by using a script - both approaches will require the superuser.

chat\_bubble

You must repeat these steps (described in steps 1 and 2 or a script combining them) to run these commands every time that you subsequently upgrade or reinstall Vault Bridge. Do this after all subsequent Vault Bridge version upgrades to add the extension to any new logical databases. The postgres-exporter pods will be in a crashlooping state for new databases until you run this command for their database.

##### [](#manual_steps_to_create_the_extension "Copy link to heading")Manual steps to create the extension

1.  Log into the database as the superuser and run the following command. This will fetch all of the databases that were created by the "tm\_admin" user.
    
2.  Next, switch into each of those databases and run the following command:
    

##### [](#automating_the_steps_to_create_the_extension_with_a_script "Copy link to heading")Automating the steps to create the extension with a script

As an alternative to running the commands separately as per steps 1 and 2, you could combine the commands into a small bash script. The following snippet is an example script only and combines the `SELECT` and `CREATE` commands.

## [](#upgrading_the_major_version_of_the_postgresql_database "Copy link to heading")Upgrading the major version of the PostgreSQL database

You should follow the recommendations and guidance of your cloud provider when performing a major version upgrade of your PostgreSQL database.

error

Once your database has upgraded successfully, we strongly advise that you run the `ANALYZE` PostgreSQL command on each of the Vault Bridge databases to update the `pg_statistic` system catalogue. PostgreSQL uses these statistics for query planning, and failing to update them may result in serious performance degradation.

## [](#configuring_scram_sha_256_password_hash "Copy link to heading")Configuring SCRAM-SHA-256 password hash

Prior to PostgreSQL 10, only md5 password hashing was available. But since the md5 hashing method was known for being "cryptographically broken and unsuitable for further use", starting with PostgreSQL 10, the SCRAM-SHA-256 hashing method was introduced.

Vault Bridge is fully compatible with the SCRAM-SHA-256 password hashing method; it requires the configuration described in [Configure PostgreSQL with SCRAM-SHA-256 password hash](/vault-core/latest/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash).

## [](#configuring_rbac_based_authentication_to_aws_rdsaurora "Copy link to heading")Configuring RBAC based authentication to AWS RDS/Aurora

You can optionally configure Vault Bridge to authenticate against a database using Role-based Access Control (RBAC) with AWS IAM (Identity Access Management) credentials instead of traditional usernames and passwords.

You could find that this is a useful solution if any of the following are requirements:

-   to use RBAC as the primary method of authentication
    
-   to eliminate the use of database static credentials stored in the secrets manager
    

### [](#overview "Copy link to heading")Overview

There are two authentication methods that you can use for database connections:

-   Password-based authentication
    
-   RBAC authorisation (with AWS IAM)
    

In order to use RBAC as the primary method of authentication against a database, you require a specific IAM database user with the relevant permissions. The RBAC resources allow you to configure the IAM database user. See [prerequisites](#prerequisites) and [Creating RBAC resources](#creating_rbac_resources) for details.

An RBAC authentication configuration impacts Apps in the following ways:

-   Apps that connect directly to the database request and then use IAM-based credentials
    
-   Apps that connect to the database via the DBPool authenticate with the DBPool using Kubernetes Service Account Tokens instead of static credentials. The service account tokens are short-lived and rotated automatically.
    

### [](#prerequisites "Copy link to heading")Prerequisites

Users of this guide need to have operational awareness of using RBAC resources such as IAM policies and IAM roles for configuring AWS RDS/Aurora access.

Before you proceed to setup the infrastructure, you must read this section and the mandatory steps in **Prerequisite configurations**, and understand all considerations in **Important considerations**.

#### [](#important_considerations "Copy link to heading")Important considerations

1.  On PostgreSQL, users can either login using a password or IAM, but NOT both. For more information, see [Limitations for IAM database authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html#UsingWithRDS.IAMDBAuth.Limitations) in the AWS documentation. Vault Bridge does not support [EKS Pod Identity](https://aws.amazon.com/blogs/containers/amazon-eks-pod-identity-a-new-way-for-applications-on-eks-to-obtain-iam-credentials/) as an access control mechanism. It uses [IAM roles for Service Accounts (IRSA)](https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/) instead.
    

#### [](#prerequisite_configurations "Copy link to heading")Prerequisite configurations

You must enable certain settings, create certain users and grant the appropriate privileges for each AWS RDS/Aurora database, as follows:

1.  IAM Database Authentication - you must enable it for the target database by setting the `EnableIAMDatabaseAuthentication` flag to `true` when invoking the API calls `CreateDBInstance` or `ModifyDBInstance`. For more information on how to enable IAM Database Authentication, see the AWS documentation for [Enabling and disabling IAM database authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html). Grant appropriate database privileges to the `admin` user, creating the Database Admin user if necessary.
    
2.  Grant IAM permissions to the database `admin` user, created in the previous step, such that it can connect to the database using RBAC:
    

3.  Use the `values.yaml` file to enable RBAC authentication to AWS Aurora/RDS. Refer to the `common.db.auth_mechanism` section of the `values.yaml` file schema for more details.
    

Once you have completed the prerequisites, you must create the RBAC resources before installing or upgrading Vault Bridge. For information on how to create RBAC resources, see [RBAC resources creation](#rbac_resources_creation).

### [](#creating_rbac_resources "Copy link to heading")Creating RBAC resources

Once you have completed the [prerequisite steps for the RBAC configuration](#prerequisites), the next step is to provision the required RBAC resources.

All of the resources that you need to provision are included in the `release.json` file. There are a large number of RBAC resources that you need to create, so Thought Machine recommends that you automate the process in order to minimise the risk of human error. The location of the RBAC resources is in `metadata.database_iam_principals`.

#### [](#populate_the_placeholders_in_the_resources "Copy link to heading")Populate the placeholders in the resources

You will notice that the RBAC resource in the `release.json` file contains placeholders. You need to ensure that you populate these resources before you can create resources. These placeholders are inside curly brackets. For example: `{ACCOUNT_ID}`.

The common placeholders are:

-   `{NAMESPACE}`: The name of the Kubernetes namespace where you have installed Vault Core.
    
-   `{REGION}`: The AWS region where you installed Vault Core.
    
-   `{ACCOUNT_ID}`: AWS Account ID
    
-   `{OIDC_PROVIDER}`: IAM OIDC Identity provider. For more information, see the [OpenID Connect (OIDC) identity provider in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) information in the AWS documentation.
    
-   `{DB_ID}`: AWS Aurora/RDS database resource ID. This is NOT an [AWS Database Identifier](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.html)
    

There are also placeholders for database user names. You must replace these placeholders with the user names from the `values.yaml` file. For example, populate `{VALUES_BRIDGE_DB_USER}` with the value from the `values.yaml` file located in `bridge.db.user`. You must populate the placeholders that contain `ADMIN`, for example `{VALUES_BRIDGE_DB_ADMIN_USER}`, with the `admin` username that you created as part of the [prerequisite RBAC configuration](#prerequisites).

The username placeholders are:

-   `{VALUES_BRIDGE_DB_USER}`
    
-   `{VALUES_BRIDGE_DB_ADMIN_USER}`
    

#### [](#structure_of_the_resources "Copy link to heading")Structure of the resources

Every entry in `metadata.database_iam_principals` contains information about the role name, assume role policy document, and policy. Every one of these resources must be created for the authentication mechanism to work correctly. This is how every entry is structured:

-   `principal`: AWS IAM role name which contains a placeholder that you need to populate with the correct value
    
-   `assume_role_policy_document`: Assume role policy which you need to set against a role when creating resources
    
-   `policy`: AWS IAM policy which you need to attach to the role
    

You must create a role and a policy for every entry in `metadata.database_iam_principals` and attach the policy to the created role. Follow the next sections for creating a role and creating a policy to understand how to create the resources.

#### [](#creating_a_role "Copy link to heading")Creating a role

You need to create a role before you can attach a policy to it. The role name is under the `principal` key. You MUST make sure that the name is trimmed and does not exceed the maximum [limit set by AWS](https://docs.aws.amazon.com/IAM/latest/APIReference/API_Role.html), which is equal to 64. Remove characters from the end of the role name until it reaches a length of 64 characters before creating a role.

You must create a role with:

-   an assume role policy, which is under the `assume_role_policy_document` key. The assume role policy contains placeholders which you need to populate before creating the role
    
-   an IAM path that you specify via the `values.yaml` file under `common.db.aws_iam.tm_iam_prefix`
    

For guidance on how you could create a role with an assume role policy, see [create-role](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/create-role.html).

#### [](#creating_a_policy "Copy link to heading")Creating a policy

You must attach a policy to every role that you create. The policy specification is found under `policy`. The policy contains placeholders that you need to populate before creating the policy.

Thought Machine recommends that you create an identity-based managed policy. For See the AWS documentation for information about how to [create an identity-based managed policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_id-based) and [create a policy](https://docs.aws.amazon.com/cli/latest/reference/iam/create-policy.html).

Once you have created the policy, you must attach it to the role that you created.

For guidance on how you could attach a policy to a role, see [attach-role-policy](https://docs.aws.amazon.com/cli/latest/reference/iam/attach-role-policy.html) in the AWS documentation.

## [](#dbpool_database_connection_proxy "Copy link to heading")DBPool database connection proxy

The DBPool is a database connection proxy that sits between Vault Bridge services and the database. It optimises the number of database connections being used at any one time and improves the recovery speed in the event of a database failover. It provides a set sized pool of connections per logical database.

The DBPool is deployed with three replicas that will aim to be evenly distributed across three Availability Zones; this is done on a best effort basis. It does not need to scale and is pinned at three replicas. A dashboard for monitoring the service can be found in Grafana under **Database/Deadpool DB Pooler**.

### [](#changes_to_values_yaml_and_components_info_yaml "Copy link to heading")Changes to values.yaml and components\_info.yaml

From the point of view of Vault Bridge pods, the DBPool works as a drop-in replacement. To deploy the DBPool as part of Vault Bridge:

1.  Make sure the `bridge-dbpool-package` is included in `components_info.yaml`.
    
2.  In addition to the usual values.yaml settings for database hosts, set the value: `common.db.pool.enabled: 'true'`.
    

As part of Vault Bridge installation or upgrade, the DBPool will be deployed before any of the pods that need to connect to it are deployed.

chat\_bubble

You can deploy Vault Bridge without DBPool by setting `common.db.pool.enabled: 'false'`.

### [](#multi_host_connection_string_for_primary_instance_discovery "Copy link to heading")Multi-host connection string for primary instance discovery

In order to support scenarios where multiple instances of PostgreSQL are used, with one being the read-write/primary and the rest being standbys that are replicated to, you can use the DBPool to determine which instance is the primary instance and forward all traffic to it. However, if you have a DNS solution in place to point to the primary instance - such as using AWS Aurora’s cluster endpoint - then ignore this feature and use the cluster endpoint as the `bridge.db.host` values as usual.

The multi-host connection string allows Vault Bridge to failover to a newly-promoted primary instance if the original primary is taken offline, without needing to update the database hosts in the `values.yaml` file.

In order to enable primary instance discovery, deploy the DBPool as in the above step and set the hostnames using a comma-separated list. For example:

-   `bridge.db.host: 'primary-instance.com,first-standby.com,second-standby.com'`
    
-   `bridge.db.port: '5432'`
    

Each instance:

-   MUST expose the same port and has the same admin user and password. The admin user is the same user that the `<component>-db-migrator` job uses to bootstrap Vault Bridge on install or upgrade.
    
-   MUST have a separate key-value entry in the secrets manager at the correct secret path - the unique hostname of each instance and the corresponding password.
    

chat\_bubble

We recommend that you place the main primary instance first in the list, as instances are then connected to in the order provided for discovery.

![defaultrootdbsecrets.png](_assets/uuid-c8328a44-54e8-da61-32d6-185957f9a5a_addition.webp)

### [](#support_for_named_prepared_statements "Copy link to heading")Support for named prepared statements

DBPool has support for named prepared statements which improves overall performance.

You can disable it by setting `common.db.pool.named_prepared_statements: 'false'`