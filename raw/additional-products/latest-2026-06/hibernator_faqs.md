---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/hibernator/faqs"
title: "FAQs"
scraped_at: "2026-06-17T05:13:54.408Z"
images: 0
---

# FAQs

## [](#how_do_i_get_access_to_hibernator "Copy link to heading")How do I get access to Hibernator?

Hibernator is a paid for add on that requires a license key to access. To find out more on how you could access the benefits of Hibernator please reach out to your Thought Machine representative.

## [](#what_do_the_hibernatorschedule_statuses_mean "Copy link to heading")What do the HibernatorSchedule statuses mean?

The HibernatorSchedule status (seen with `kubectl get hibernatorschedule`) is a reflection of the uptime that’s defined in the schedule. It also shows you if a schedule is disabled or there have been any errors. Keep in mind that the status could differ from the actual state of your workloads when there are problems.

Here are the possible HibernatorSchedule statuses:

 
| Status | Meaning |
| --- | --- |
| 
```
ScaledUp
```






 | 

We’re within the schedule’s uptime window, and the instance should be scaled up.

 |
| 

```
ScalingUp
```






 | 

We’re within the 30 minute buffer window during which the instance should have begun scaling up.

 |
| 

```
ScaledDown
```






 | 

We’re outside the schedule’s uptime window, and the instance should be scaled down.

 |
| 

```
ScalingDown
```






 | 

We’re within the 30 minute buffer window during which the instance should be scaling down.

 |
| 

```
Errored
```






 | 

An error has occured. Describe the HibernatorSchedule for more information.

 |
| 

```
Disabled
```






 | 

Hibernator is disabled for this namespace, and can be enabled by editing the HibernatorSchedule.

 |
| 

```
Unknown
```






 | 

Unknown status.

 |

## [](#how_can_i_see_whats_going_on "Copy link to heading")How can I see what’s going on?

You can take a look at the Hibernator Metrics Grafana dashboard. This will be shipped with your Vault release, or will be sent to you if not yet available with Vault. Going through the commands listed in the Troubleshooting sections can also be very useful for following what’s happening and catching any errors.

## [](#how_does_instance_downscaling_work_in_practice "Copy link to heading")How does instance downscaling work in practice?

See [what happens when an environment is scaled?](overview/overview#what_happens_when_an_environment_is_scaled)

## [](#what_versions_of_vault_core_is_this_compatible_with "Copy link to heading")What versions of Vault Core is this compatible with?

Hibernator works with every Vault Core version supported by Thought Machine.

## [](#can_i_scale_my_instance_up_and_down_as_part_of_my_cicd_pipeline "Copy link to heading")Can I scale my instance up and down as part of my CI/CD pipeline?

Yes, you can do this by editing the uptime of your HibernatorSchedule programmatically. However, bear in mind that we generally scale stateful workloads 30 minutes apart from stateless ones (see [what happens when an environment is scaled?](overview/overview#what_happens_when_an_environment_is_scaled)) and this will not happen if the uptime is switched directly between `always` and `never`.

## [](#i_have_certain_workloads_in_my_vault_core_namespace_that_i_dont_want_to_scale_down_during_the_hibernation_window_can_i_keep_these_up "Copy link to heading")I have certain workloads in my Vault Core namespace that I don’t want to scale down during the hibernation window. Can I keep these up?

Yes. Add these to the `excludedResources` field of your HibernatorSchedule object.

## [](#how_long_does_it_take_for_an_instance_to_scale_back_up "Copy link to heading")How long does it take for an instance to scale back up?

This varies depending on the state of the cluster so is difficult to predict, but if things are working properly all endpoints should be available in anything from 5 to 30 minutes.

## [](#my_environment_is_set_to_scale_down_but_i_need_it_for_a_bit_longer_can_i_extend_my_uptime_temporarily "Copy link to heading")My environment is set to scale down, but I need it for a bit longer. Can I extend my uptime temporarily?

Yes. For example, if a user knows they will need an instance to stay up two hours beyond the scheduled scale down time, they can add a temporary override to the HibernatorSchedule. This is done by editing the HibernatorSchedule with `kubectl edit` and adding those two hours to the `override` field, e.g. `"2025-06-01T00:00:00Z-18:00-2025-06-01T00:00:00Z-20:00"`.

The override field follows the same format as the uptime field, and will be combined with the uptime using a logical OR, i.e. it can only extend the uptime. This field should ideally be removed after the override is no longer needed.

## [](#my_environment_is_on_a_schedule_but_wont_be_needed_for_some_time_what_should_i_do "Copy link to heading")My environment is on a schedule but won’t be needed for some time. What should I do?

Edit the uptime schedule on your HibernatorSchedule instance to `never`. Once the environment is needed again you can change this back to the original schedule.

## [](#will_metrics_continue_to_be_collected_while_the_environment_is_scaled_down "Copy link to heading")Will metrics continue to be collected while the environment is scaled down?

By default, Prometheus pods in your namespace are scaled down along with your other StatefulSets, and so won’t be gathering metrics from any pods still up.

## [](#what_will_happen_when_my_licence_expires "Copy link to heading")What will happen when my licence expires?

Your environment will scale up and your HibernatorSchedule will go into state `Errored`. Describing the HibernatorSchedule with `kubectl describe` will show the reason. Request a new licence and re-install the main Hibernator application with [running vaultctl install](overview/installation#running_vaultctl_install) to restart hibernation.

## [](#can_i_delete_a_hibernatorschedule "Copy link to heading")Can I delete a HibernatorSchedule?

Yes. The corresponding environment will spin up and will no longer be hibernated. To start hibernating again, you will need to re-install a HibernatorSchedule by following [adding HibernatorSchedules](overview/installation#adding_hibernatorschedules).

## [](#why_do_i_need_to_ensure_my_environment_is_scaled_up_before_uninstalling_hibernator "Copy link to heading")Why do I need to ensure my environment is scaled up before uninstalling Hibernator?

If your environment is scaled down when you uninstall Hibernator, it will remain in a scaled-down state and you will need to re-install Hibernator or [manually scale it up](troubleshooting#force_scaling_an_environment). We don’t scale up an environment when Hibernator is deleted, because we want to be able to delete and recreate the hibernator pod without it affecting the state of the environment.

## [](#what_happens_to_scheduled_account_events_that_are_due_to_execute_while_vault_core_is_hibernated "Copy link to heading")What happens to scheduled account events that are due to execute while Vault Core is hibernated?

If Vault Core is scaled down at the time the scheduled account events are triggered, then there will be no processing of these events until Vault Core is scaled back up. At this point, all events will be triggered and processed as normal. Users should allow time for this in their uptime window if required.