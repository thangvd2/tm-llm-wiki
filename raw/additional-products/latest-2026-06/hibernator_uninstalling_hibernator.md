---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/uninstalling_hibernator"
title: "Uninstalling Hibernator"
scraped_at: "2026-06-17T05:14:04.227Z"
images: 0
---

# Uninstalling Hibernator

Hibernator can be uninstalled in a couple of simple steps.

## [](#1_delete_any_hibernatorschedules_in_your_cluster "Copy link to heading")1\. Delete any HibernatorSchedules in your cluster

This can be done like so:

This should cause any scaled-down environments to scale back up. Check that your environments are scaled up before proceeding. If they have not scaled up, you will need to follow [force-scaling an environment](troubleshooting#force_scaling_an_environment).

HibernatorSchedule objects are not yet garbage collected by Kubernetes, so it is important to delete them manually.

## [](#2_delete_hibernator "Copy link to heading")2\. Delete Hibernator

After you have ensured that your environment is scaled up, you can proceed with deleting Hibernator. This can be done using *vaultctl*:

This will delete the Hibernator Deployment and all other associated resources. You will need to delete the namespace manually with `kubectl delete namespace hibernator`.

If you accidentally delete Hibernator while your environment is scaled down, you can either re-install Hibernator so that it scales it up again or manually scale it up by following [force-scaling an environment](troubleshooting#force_scaling_an_environment).

For information on what will happen if your licence expires, see the [FAQs](faqs#what_will_happen_when_my_licence_expires).