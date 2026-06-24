---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager"
title: "Configuring Vault Core with AWS Secrets Manager"
scraped_at: "2026-06-17T15:36:08.807Z"
images: 0
---

# Configuring Vault Core with AWS Secrets Manager

It is possible to optionally configure Vault Core to use AWS Secrets Manager (ASM) as the secret store to hold all application secrets that it requires, instead of HashiCorp Vault. This option is available from Vault Core 4.6 onwards.

This requires you to use the [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/), which is the component that interacts with ASM. Vault Core creates secrets in ASM during installation, as well as IAM resources which allows the pods to retrieve the secrets that they need to function.

Prerequisites that you must ensure you meet in order for Vault Core to use ASM, include:

-   Deploying an ASM instance and the Kubernetes CSI daemonsets onto the same cluster that you are deploying Vault Core on.
    
-   Creating an IAM role and policy for the Vault Installer to allow it to create IAM roles and policies for Vault Core services and to push secrets to ASM.
    
-   Making changes to `values.yaml` to ensure that Vault Core can use ASM in the correct way.
    

You will find detailed steps on how to cover these prerequisites in this guide.

chat\_bubble

Vault Core 5.2 introduces the ability for you to optionally configure the use of an HTTP Proxy for communication with the global AWS Identity and Access Management (IAM) endpoint (which you cannot expose to a VPC by way of AWS PrivateLink) through `iam_http_proxy:` and `iam_proxy_ca_bundle:` in `values.yaml`.

## [](#prerequisites "Copy link to heading")Prerequisites

### [](#infrastructure_setup "Copy link to heading")Infrastructure setup

We expect users of this guide to have operational awareness of using ASM and monitoring the CSI driver daemonsets.

You MUST do the following:

-   Set up ASM in the same AWS account as your Vault Core deployment.
    
-   Allow Identity and Access Management (IAM) permissions for Pods so that the Vault Core Pods can assume their roles and access ASM during Pod creation. There are two ways that you can grant IAM permissions to Pods in AWS; an EKS cluster with an OIDC provider (EKS Pod Identities) or IAM roles for service accounts. For more information, see the [Amazon EKS User Guide for Service Accounts](https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html).
    
-   Make sure that there is network access to both the Secrets Manager endpoint and the AWS IAM endpoint from within the cluster that you are planning to run the Vault Installer/Operator in.
    

To set up the CSI drivers (the default driver and the ASM-specific provider), see the following guides:

-   [AWS tutorial: Create and mount an AWS Secrets Manager secret in an Amazon EKS pod](https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_csi_driver_tutorial.html)
    
-   [AWS Secrets Manager and Config Provider for Secret Store CSI Driver readme](https://github.com/aws/secrets-store-csi-driver-provider-aws#readme) (aws/secrets-store-csi driver-provider-aws GitHub) - for details and the commands to run
    

### [](#vault_installer_role_and_policy "Copy link to heading")Vault Installer role and policy

The Vault Installer (Operator) needs a role and a policy that gives it the ability to create IAM roles and policies for Vault Core deployments. These policies give Pods access to specific secret paths within ASM that are required for the Pod to function.

An optional step, but one that Thought Machine strongly recommends, is to use a [Permission Boundary](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) for the Vault Installer role. This would restrict it to only create roles that have permissions within its boundaries. For example, it cannot create a role that can access all data in S3, and limit what the roles can do within a specified `tm_iam_prefix` path. Optionally, you can also create a second Permission Boundary to limit the permissions for Vault Core applications.

chat\_bubble

Thought Machine strongly recommends following this approach; otherwise, the Vault Installer could create a role with arbitrary permissions.

To do this:

1.  Create the application Permission Boundary.
    
2.  Create the Installer Permission Boundary, referencing the application Boundary and enforcing that for any IAM role that the Installer creates it MUST assign the application permission boundary.
    

See the following examples of the application and Installer Permission Boundaries.

chat\_bubble

You must replace the `{placeholders}` with your correct values for the region, AWS account ID and specific `tm_iam_prefix` for the setup.

For more information about the purpose of the `tm_iam_prefix`, see the sections about [values.yaml](#valuesyaml) and [Vault Installer Operations](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager#vault_installer_operations).

#### [](#application_permission_boundary "Copy link to heading")Application Permission Boundary

Vault Core applications only need the `GetSecretValue` permissions; therefore, the permission boundary for these applications is as follows:

Do the following:

1.  Create this as a policy and save it with an appropriate name that it is easy to identify; for example, “vault-role-permission-boundary”. It defines the maximum permissions that any of the Vault Core applications can have.
    
2.  Make a note of the policy ARN as you must also specify it in the values.yaml.
    
3.  Save this policy to a JSON file - Thought Machine recommends calling it `vault-role-permission-boundary.json`, which matches-up with some commands that are further on in this guide.
    

Continue to follow this guide for information about `values.yaml`.

#### [](#vault_installer_permissions_boundary "Copy link to heading")Vault Installer Permissions Boundary

The Vault Installer Permissions Boundary must reference the ARN of the Application Permission Boundary, forcing the Vault Installer to attach that policy as a permission boundary to any IAM roles that it attempts to create.

The following example policy references the ARN of the example Application Permission Boundary:

This defines the maximum permissions that the Vault Installer can have, but it does not grant any permissions. The Vault Installer requires all of these permissions (as in the example policy) on the boundary so that its inline policy is actually the same as the permissions boundary.

You can save this policy to a JSON file and reuse it, with the following name: `vault-installer-policy.json`

chat\_bubble

You only need `secretsmanager:PutSecretValue` in the installer policy JSON file when re-running the installer after the first time.

### [](#creating_the_permissions_policies_and_vault_installer_role_using_the_command_line "Copy link to heading")Creating the permissions policies and Vault installer role using the command line

You can manually create these policies and the Vault Installer role using either the AWS Console or the command line.

Refer to the [AWS documentation for the commands](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html) that you need to use to create the Vault Installer role.

### [](#example_using_the_command_line "Copy link to heading")Example using the command line

You must replace the `{placeholders}` (including the curly braces that indicate them) with the correct values for the region, AWS `account_id`, specific `tm_iam_prefix`, `ARN` and `namespace` for your setup. You can optionally create the policy and role in a set path, rather than the root path.

### [](#values_yaml "Copy link to heading")values.yaml

You need to configure values.yaml with the new settings in order to use ASM with Vault Core. These new values are under “secrets\_management.aws\_secrets\_manager”, as follows:

-   `tm_iam_prefix`: Required. Prefix paths for roles, policies and secrets.
    
-   `secret_prefix`: Required. Prefix for secrets from a specific Vault Core instance.
    
-   `csp_account_id`: Required. AWS account ID, which the TMComponent Operator uses to create IAM resources and template Kubernetes `ServiceAccounts`.
    
-   `oidc_provider`: Required for creating the trust relationships for the IAM roles.
    
-   `region`: Required for connecting to the ASM instance.
    
-   `role_permissions_boundary`: Optional. The policy ARN (Amazon Resource Name) for the policy that the Thought Machine Vault Installer uses as a permission boundary when it creates IAM roles for Vault Core applications. Make sure that it matches the ARN of the `vault-role-permissions-boundary` policy.
    
-   `iam_http_proxy`: Optional. The URL of the HTTP proxy server that forwards requests to [https://iam.amazonaws.com/](https://iam.amazonaws.com/)
    
-   `iam_proxy_ca_bundle`: Optional. If your HTTP proxy server decrypts and re-encrypts traffic sent through it, you must populate this field with the public CA trust chain that it uses to encrypt data. You must also configure the [ca-injector webhook](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/advanced_installation_options#custom_certificate_authority_for_databasekafka_access) if your CA is used by other relevant parts of your infrastructure, for example databases. You must omit the “secrets\_management.hashicorp\_vault” values entirely.
    

The `secrets_management` section should look similar to the following example:

Before you can install Vault Core, you need to:

1.  Add the prerequisite secrets that are detailed in the [TMComponent Operator User Guide](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/tmcomponent_operator_user_guide/), such as the `root-db-secrets`.
    
2.  Add these secrets under the path “<tm\_iam\_prefix>/<secret\_prefix>”. For example: “<tm\_iam\_prefix>/<secret\_prefix>/root-db-secrets”
    

## [](#vault_installer_operations "Copy link to heading")Vault Installer operations

chat\_bubble

If you have previously used Vault Core 4.6 and 4.7 with ASM, make sure that you read the information here as there are differences in Vault Core 5.0.

### [](#role_policy_and_secret_creation "Copy link to heading")Role, policy and secret creation

The Vault Installer creates IAM roles for each Vault Core deployment/Service Account, and attaches an inline policy that allows a pod that assumes the IAM role access to ASM. However, it restricts it to only access the secrets that it requires.

Using Permissions Boundaries can enforce that the Vault Installer can only give IAM roles the `GetSecretValue` policy. It also creates the secrets and push them to ASM.

It creates the roles, policies and secrets with a specific path prefix given in `values.yaml` to separate Vault Core IAM resources from the rest of a client’s IAM resources in their AWS account. For example, you could find the IAM role `vault-account` at `tm_iam_prefix/vault-account_<vault-namespace>` and the secret in `tm_iam_prefix/secret_prefix/vault-account`.

A concrete example of an access policy for Vault Core applications is as follows, where you would supply the values for `Region`, `AccountId`, `tm_iam_prefix` and `secret_prefix` in `values.yaml`.

The policies for each role would give access to only the secrets within `tm_iam_prefix/secret_prefix/` that it requires to function.

Having both a `tm_iam_prefix` and a `secret_prefix` allows for more than one Vault Core instance to use the same ASM instance, by having a unique `secret_prefix` value per Vault Core instance.

We suggest setting the `tm_iam_prefix` to something similar to `tm-prefix/$cluster_name` and `secret_prefix` to something similar to `$namespace`, as this gives isolation across different Vault Core instances in different clusters.

The Vault Core installation also deploys the `SecretProviderClass` CRs that the CSI secret driver uses to find which secrets it needs to fetch from ASM for each pod.

### [](#certificate_rotation "Copy link to heading")Certificate rotation

Vault Core ships with the `cert-rotation-pkg` package, which you can use to rotate Kafka certificates for both with HashiCorp Vault and AWS Secrets Manager. This is compatible with both HashiCorp Vault and ASM from Vault Core 5.0.1.

For a guide, see: [Configuring certificate rotation with AWS Secrets Manager](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager#configuring_certificate_rotation_with_aws_secrets_manager)

error

Prior to 5.0.1, the Vault Installer is NOT compatible with ASM for this feature. The included packages only interact directly with HashiCorp Vault itself and would need changes similar to the Vault installer. For Vault Core versions earlier than 5.0.1, such as 4.6, you must not include these packages (“cert-rotation-pkg”, “kafka-ca-rotation-pkg” and “kafka-cert-rotation-pkg”) in `packages.txt` or `packages_info.yaml`.

## [](#configuring_certificate_rotation_with_aws_secrets_manager "Copy link to heading")Configuring certificate rotation with AWS Secrets Manager

The `vaultctl` for rotating Kafka broker and client certificates is compatible with AWS Secrets Manager. We recommend setting up Vault Core with a permissions boundary that limits the automated Vault Installer to only create IAM roles with read-only IAM policies for their secrets. This permissions boundary limits the automated Vault Installer to read-only actions. Therefore, in order to ensure that you can use the `vaultctl` command to update your certificates, you must manually create a role to allow certificate rotation with Create/Update privileges.

Here, we explain how to manually create an AWS role to use for certificate rotation, with an in-line policy and the necessary privileges to Read, Create, and Modify secrets. This is a one-time configuration action; you only need to do this once.

### [](#before_you_start "Copy link to heading")Before you start

In this guide, you can find examples with `<placeholders>`. You must replace the `<placeholders>`, including the braces/brackets that indicate them, with the correct values as indicated and/or for your setup.

Here is a quick key to the placeholder values and what they represent.

chat\_bubble

\*The values that are denoted as being defined in the `values.yaml` file are defined under: `secrets_management/aws_secrets_manager`

-   `<namespace>`: The Kubernetes namespace of the Vault Core instance
    
-   `<tm_iam_prefix>`: The prefix defined in `values.yaml`\*
    
-   `<oidc_provider>`: The OIDC (OpenID Connect) provider defined in `values.yaml`\*
    
-   `<account_id>`: The AWS account ID\*
    
-   `<region>`: The region defined in `values.yaml`\*
    
-   `<secret_prefix>`: The secret prefix defined in `values.yaml`\*
    

### [](#create_an_aws_role "Copy link to heading")Create an AWS role

Use the command line to create the role, using the following command:

Example of `trust_relationship.json`:

chat\_bubble

You cannot specify the role path using the UI (user interface). Use the CLI (Command Line Interface) instead.

The ARN (Amazon Resource Name) should look similar to the following example:

### [](#attach_an_in_line_policy_to_the_role "Copy link to heading")Attach an in-line policy to the role

Use the command line to attach the policy to the role, using the following command:

Example of `cert-rotation-policy.json`:

The script should now be able to rotate certificates.

## [](#migrating_vault_core_secrets_from_hashicorp_vault_to_aws_secrets_manager_asm "Copy link to heading")Migrating Vault Core secrets from HashiCorp Vault to AWS Secrets Manager (ASM)

chat\_bubble

You must follow the steps in [Prerequisites](/vault-core/5-8/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configuring_vault_with_aws_secrets_manager#prerequisites) before migrating any secrets.

Thought Machine does not provide an automated migration of secret data from HashiCorp Vault to ASM. Clients should be able to migrate secrets from HashiCorp Vault to ASM themselves and keep Vault Core running without downtime.

To achieve this, follow these steps:

1.  Manually copy (or create a script to copy) the secrets from HashiCorp Vault to the same relative secret path in ASM. Specifically, if a secret in HashiCorp Vault has the path “secret-mount/secret-prefix/vault-account” (where you would define `secret-mount` and `secret-prefix` in `values.yaml` when using HashiCorp Vault), then ensure that it moves to ASM as “tm-iam-prefix/secret-prefix/vault-account”.
    
2.  Configure the `values.yaml` file to point towards ASM instead of HashiCorp Vault.
    
3.  Deploy Vault Core - either as an upgrade or re-run the installer, as both will roll out the Pods.
    
4.  Check that all of the Pods are running and are using ASM; once you have verified this, remove the secrets from HashiCorp Vault.