---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/remote-access-tool/faqs"
title: "FAQs"
scraped_at: "2026-06-17T05:14:16.064Z"
images: 0
---

# FAQs

This section addresses some of the common questions arising from use of Remote Access Tool.

## [](#do_i_need_to_make_any_changes_to_my_network "Copy link to heading")Do I need to make any changes to my network?

Yes, possibly. The `remote-access` pod needs to be able to reach AWS SSM Service (as detailed in the `VPC network prerequisites` section of the [Installation Guide](/additional-product-offerings/latest/EN/remote-access-tool/installation_guide#prerequisites_for_a_vpc_network). Allowlisting the AWS SSM Service domain is required if it is not already allowed.

## [](#can_thought_machine_use_this_solution_if_im_hosting_on_a_cloud_provider_other_than_aws "Copy link to heading")Can Thought Machine use this solution if I’m hosting on a cloud provider other than AWS?

Yes, the solution is agnostic to the host vendor/distribution - it relies on network access only. This is described in `VPC network prerequisites` section of the [Installation Guide](/additional-product-offerings/latest/EN/remote-access-tool/installation_guide#prerequisites_for_a_vpc_network)

## [](#i_am_hosting_on_aws_can_i_use_private_networking "Copy link to heading")I am hosting on AWS, can I use private networking?

Yes, you can. You must set up the required VPC Endpoints for access to AWS SSM Service over the AWS private network. For more information, see [Installation guide Appendix A](/additional-product-offerings/latest/EN/remote-access-tool/installation_guide#appendix_a) for more information.

## [](#do_i_have_full_control_over_when_thought_machine_connects_to_and_disconnects_from_my_environment "Copy link to heading")Do I have full control over when Thought Machine connects to and disconnects from my environment?

Yes, you may scale up and scale down the `remote-access` pod to establish or destroy the connection to the Thought Machine estate.

To terminate the connection:

To re-establish the connection:

## [](#how_do_i_stop_thought_machine_from_accessing_my_environment_once_an_incident_is_resolved "Copy link to heading")How do I stop Thought Machine from accessing my environment once an Incident is resolved?

You can scale the `remote-access` StatefulSet down, this terminates the connection with AWS SSM and consequently Thought Machine. See the previous question for specific commands.

## [](#can_i_use_one_remote_access_tool_solution_for_all_my_environments "Copy link to heading")Can I use one Remote Access Tool solution for all my environments?

No, Thought Machine has kept security and audit at the forefront throughout implementation of this tool and require a complete separation between all environments you wish to onboard. The estate structure is explained in \[Remote Access Tool\]: Overview + Architecture. You require one `remote-access` pod per environment that you wish to onboard. This is mirrored on the Thought Machine side where Thought Machine will host one Remote Access Tool account per environment that you wish to onboard.

## [](#what_will_thought_machine_be_able_to_access "Copy link to heading")What will Thought Machine be able to access?

Remote Access Tool establishes connectivity with the bank-hosted Kubernetes API server and the Thought Machine metrics stack, through the `thanos-query` service.

## [](#i_am_not_happy_with_the_permissions_granted_by_the_view_cluster_role_what_can_i_do "Copy link to heading")I am not happy with the permissions granted by the `view` Cluster Role, what can I do?

If you are not happy with the level of privilege granted by the default view Cluster Role, you can create your own Cluster Role and point the Remote Access Tool Role Binding at that instead.

## [](#i_want_to_know_what_thought_machine_engineers_saw_while_they_were_in_my_environment_can_i_do_this "Copy link to heading")I want to know what Thought Machine engineers saw while they were in my environment, can I do this?

Every Remote Access Tool session is recorded from start to finish and persisted to an Amazon S3 bucket within the account. Thought Machine can share pre-signed URLs for access to these recordings can be shared with clients so they can watch recordings back.

## [](#can_i_audit_kubernetes_commands_executed_by_thought_machine_engineers "Copy link to heading")Can I audit Kubernetes commands executed by Thought Machine engineers?

Yes, every call made by a Thought Machine engineer is associated with the `remote-access` Service Account. Enabling Kubernetes audit logs on the bank-hosted Kubernetes cluster allows you to capture commands that a Thought Machine engineer has executed using Remote Access Tool.

## [](#can_remote_access_tool_access_arbitrary_endpoints_on_my_kubernetes_cluster "Copy link to heading")Can Remote Access Tool access arbitrary endpoints on my Kubernetes cluster?

No, it is strictly limited using client side Access Control lists enforced by Istio. To see the endpoints that Remote Access Tool has access to you can run:

## [](#how_do_i_make_sure_the_configuration_is_correct "Copy link to heading")How do I make sure the configuration is correct?

Check the following:

-   Is the `remote-access` pod running without error logs?
    
-   Can the `remote-access` pod reach AWS SSM Service at any `ssm.{{ region }}.amazonaws.com`?
    
-   Is the `remote-access-egress` Istio Sidecar configured with egress hosts that include `./kubernetes.default.svc` and `<monitoring-namespace>/thanos-query.<monitoring-namespace>.svc.cluster.local`?
    
-   Is the `remote-access` Service Account bound to a ClusterRole with sufficient permissions to view the resources you wish Thought Machine to access?