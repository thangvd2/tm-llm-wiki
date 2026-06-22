---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/remote-access-tool/installation_guide"
title: "Installation guide"
scraped_at: "2026-06-17T15:52:46.708Z"
images: 0
---

# Installation guide

This guide details the requirements for installing Remote Access Tool for Thought Machine access to client environments.

## [](#prerequisites "Copy link to heading")Prerequisites

All of the following prerequisites are mandatory unless indicated otherwise.

### [](#remote_access_tool_image "Copy link to heading")Remote Access Tool image

Remote Access Tool uses the Amazon EKS Connector and the AWS SSM Agent images to connect with Thought Machine - the required images must be available to pull.

Below are the public locations of these images and the version of the images Remote Access Tool was tested against:

If your organisation requires use of a private image registry, the public AWS image must be mirrored and the required path supplied via the values.yaml.

For more information, see the [Schema](#schema) section.

### [](#prerequisites_for_a_vpc_network "Copy link to heading")Prerequisites for a VPC network

The `remote-access` pod running on the bank-hosted Vault Core environment requires network access to/from the following.

#### [](#ssm_egress "Copy link to heading")SSM Egress

The `remote-access` pod must be able to register itself with the AWS SSM service and provide instance information; therefore, it must be able to egress from the host VPC. The domain that you must add to your allowlist for egress is:

##### [](#prerequisites_specific_to_aws_optional "Copy link to heading")Prerequisites specific to AWS (optional)

If the bank-hosted environment is on AWS, consider configuring a VPC endpoint to the SSM Service - see [Appendix A](#appendix_a).

#### [](#container_registry_egress "Copy link to heading")Container registry egress

If you are using the public ECR to pull the EKS Connector image, you must allow egress traffic from the nodes to the public ECR.

### [](#prerequisites_for_kubernetes "Copy link to heading")Prerequisites for Kubernetes

#### [](#namespace "Copy link to heading")Namespace

You must deploy Remote Access Tool into its own namespace, separate from the Vault Core namespace. Remote Access Tool must read secrets in its own namespace to connect with Thought Machine so deploying into a separate namespace removes its ability to access Vault Core secrets. This namespace must exist before installing the tool.

#### [](#role_based_access_control "Copy link to heading")Role-based access control

Remote Access Tool ships with a ClusterRoleBinding that, by default, binds its Service Account to the ClusterRole view - this Cluster Role exists on all Kubernetes clusters by default.

#### [](#customisations_optional "Copy link to heading")Customisations (optional)

Clients must manage any customisations to the Remote Access Tool RBAC themselves. You can template the binding using the values file to bind the Service Account to a custom Cluster Role.

See Section [Schema](#schema).

Any custom ClusterRole must exist on the cluster before installing the tool.

### [](#component_prerequisites "Copy link to heading")Component prerequisites

#### [](#istio "Copy link to heading")Istio

Remote Access Tool requires you to have installed an Open Source API-compliant distribution of Istio on the cluster before installing the tool.

It requires the following APIs:

-   Sidecar
    
-   ServiceEntry
    
-   DestinationRule
    
-   EnvoyFilter
    

You must label Remote Access Tool’s namespace for injection by Istio prior to installation.

#### [](#metrics "Copy link to heading")Metrics

To use Remote Access Tool with Thought Machine’s metrics stack, you must expose the `thanos-query` service in the standard way.

Thus it must be resolvable on cluster using the FQDN:

You can configure the monitoring namespace using the value:

See Section [Schema](#schema).

## [](#installation_guide "Copy link to heading")Installation guide

You must follow all steps in [Prerequisites](#prerequisites) before using the following installation steps.

### [](#onboarding "Copy link to heading")Onboarding

To onboard onto Remote Access Tool, you must contact your Client Success Manager and create a support ticket through the regular channels. Your Client Success Manager can then ensure the proper action is taken by Thought Machine.

The Customer Success Manager will share a temporary link to a Thought Machine secret transfer service, Locker. Following that, the Customer Success Manager will then share a temporary decryption key.

Once decrypted, the link displays credentials for an AWS SSM Hybrid Activation.

You must save these credentials to a secure location for use in the installation pipeline.

### [](#installation "Copy link to heading")Installation

The following steps detail how to deploy Remote Access Tool onto a bank hosted environment.

1.  Save the yaml manifest, as shown in [Appendix B](#appendix_b), to the file `${HOME}/remote-access-tool-manifest.yaml`.
    
2.  Substitute any required values, denoted in the standard Helm syntax, using the Schema from [Appendix B](#appendix_b).
    

3.  Apply the manifest to the cluster.
    

4.  Ensure the `remote-access` pod is running successfully.
    

5.  Notify Thought Machine that you have deployed `remote-access` pod for Remote Access Tool, so that a Thought Machine engineer can validate the connection.
    
6.  Finally, scale down the `remote-access` pod to disable Remote Access Tool on the bank-side when you do not need it.
    

## [](#appendix_a "Copy link to heading")Appendix A

For an AWS-specific VPC configuration, a bank hosted client may consider creating VPC endpoints to enable the `remote-access` pod to reach the AWS SSM service. The primary benefit is that the traffic between the `remote-access` pod and the Thought Machine estate will not leave the AWS Private Network.

The following steps detail the configuration of VPC Endpoint for access to SSM.

1.  Modify the VPC to ensure the settings:
    
    -   DNS Support enabled
        
    -   DNS Hostnames enabled
        
    

2.  Create an AWS security group to allow communication to/from the SSM endpoint and the `remote-access` pod.
    
    1.  Add an Ingress rule to allow HTTPS traffic to port 443.
        
    2.  Add an Egress rule to allow HTTPS traffic to port 443.
        
    3.  Ensure the IP CIDR on the Security Group rules encompasses the Pod IP ranges.
        
    

3.  Create a VPC Endpoint as follows:
    
    -   Type: Interface
        
    -   Service Name: ssm.{{ region }}.amazonaws.com
        
    -   Subnets: Pod subnets
        
    -   Security Group ID: as you created in step 2
        
    -   Private DNS: Enabled
        
    

### [](#test_setup "Copy link to heading")Test Setup

To test the configuration of the VPC Endpoint:

1.  Create an ephemeral pod on the Kubernetes cluster to which an interactive shell can be established.
    
2.  Use the networking utility dig to validate that the DNS resolution of the AWS SSM service on-cluster is contained within the Subnet IP ranges in 3.c.
    

3.  Ensure that the Security Group allows the required access from the pod to the Endpoint.
    

## [](#appendix_b "Copy link to heading")Appendix B

This is the Remote Access Tool manifest - you can find the reference in [Installation](#installation):

### [](#schema "Copy link to heading")Schema

The yaml manifest above requires templating/substitution subject to the following schema:

1.  `.Values.k8s.namespace`: The Kubernetes namespace to deploy Remote Access Tool into. This must be separate to the Vault Core namespace.
    
2.  `.Values.k8s.monitoring_namespace`: The Kubernetes namespace where the Thanos Query service is deployed, or where the Thought Machine monitoring stack is deployed. \*Default: tm-monitoring
    
3.  `.Values.remote_access.aws.activation_code`: The Activation Code for SSM sent over Locker by Thought Machine.
    
    info
    
    The Activation Code must be base64 encoded before it is added. If `echo` shell command is used to generate the base64 encoded string, then run it with `-n` flag so a newline character is not appended to the end of the string.
    
4.  `.Values.remote_access.aws.activation_id`: The Activation ID for SSM sent over Locker by Thought Machine.
    
5.  `.Values.remote_access.k8s.cluster_role`: The Cluster Role to be bound to the Remote Access Tool service account.
    
    -   Default: view
        
    

6.  `.Values.remote_access.images.eks_connector`: The EKS Connector image to use for the `remote-access` pod.
    
    -   Default: public.ecr.aws/eks-connector/eks-connector:0.0.11
        
    

7.  `.Values.remote_access.images.ssm_agent`: The SSM Agent image to use for the `remote-access` pod.
    
    -   Default: public.ecr.aws/amazon-ssm-agent/amazon-ssm-agent:3