---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/creating_new_dashboards"
title: "Creating new Dashboards"
scraped_at: "2026-06-17T05:07:24.420Z"
images: 7
---

# Creating new Dashboards

In this tutorial we will show how to create new `Dashboards` and `Dashboard Versions`, using the Dashboards API and the Dashboard 'Developer view' of the Vault Payments app.

## [](#creating_a_dashboard "Copy link to heading")Creating a Dashboard

To begin setting up a new Dashboard, such that it may start being used in the application, a `Dashboard` resource must be created.

Once this request has completed successfully, you can navigate to the Vault Payments App to find it at [https://sandbox.payments.tmachine.io/payments/dashboards/example-dashboard](https://sandbox.payments.tmachine.io/payments/dashboards/example-dashboard) .

The page will be quite empty though, as there is no Version for this new Dashboard.

## [](#building_a_payments_dashboard_configuration "Copy link to heading")Building a Payments Dashboard configuration

To start building the new Dashboard configuration, you can navigate to the Dashboard Developer screen at [https://sandbox.payments.tmachine.io/payments/dashboarddeveloper?showConfig=true](https://sandbox.payments.tmachine.io/payments/dashboarddeveloper?showConfig=true) .

![The blank Dashboard developer](_assets/dashboard_developer_empty.d86Ku9i4_Mg6K1_vaultpay.webp)

This view can be used to validate new Payments Dashboards configurations and preview what the Dashboard you are creating will look like once persisted.

You can add a new widget to the layout. To add a simple widget showing the total number of Payments processed you can add:

The code panel will now contain:

The page will still not show any widgets. That’s because there was an error while validating the configuration:

![The errored Dashboard developer](_assets/dashboard_developer_error.DRK0ljau_1GKb1_vaultpay.webp)

The red icon can be clicked to view the full details of the error:

![The error message](_assets/invalid_dashboard_configuration.COgCJCUk_vaultpay.webp)

Every Dashboard needs to have a primary widget. This widget is used Now that you have added a widget to the layout, you can set it as the primary widget as well:

This will now compile successfully and you will be able to preview the new Dashboard:

![First widget](_assets/first_widget.JZDVmQ2e_1lhgvc_vaultpay.webp)

Changes made in the UI configuration editor are not persisted though, so if you want this Dashboard to be available for longer than your current session, you will need to save it using the API.

## [](#creating_a_dashboard_version "Copy link to heading")Creating a Dashboard version

To now persist this configuration, you can create a Dashboard Version for the `example-dashboard` created earlier.

This can be done by calling the Dashboard Version Create endpoint, placing the configuration you have built using the Dashboard developer in the `payments_dashboard` field:

Once done, you will be able to navigate to the Example Dashboard again at [https://sandbox.payments.tmachine.io/payments/dashboards/example-dashboard](https://sandbox.payments.tmachine.io/payments/dashboards/example-dashboard) to view the new version of the Dashboard:

![Example Dashboard with one widget](_assets/first_widget_saved.CHG3wnju_ZHVhub_vaultpay.webp)

You will now be able to view this Dashboard whenever you need it.

## [](#editing_a_dashboard "Copy link to heading")Editing a Dashboard

You can view the configuration of any of the Dashboards in the application by clicking the 'View Configuration' button at the bottom right of the page. This will open a configuration editor in place, showing you the full payments\_dashboard configuration, to edit or copy.

You could, for example edit this Dashboard you have created by adding a pie-chart containing a breakdown of Payments by type:

Your preview will now look like this:

![Second widget](_assets/second_widget.BOrREY9t_2uR115_vaultpay.webp)

To learn about the options for configuring widgets, view the [Widget](/vault-payments/latest/EN/using_vault_payments/dashboards#widget) documentation.

You may also wish to change the default filters, such that each time the Dashboard is viewed, the data of all Payments created this year will be shown instead of just today’s:

If you wish to leave the page, you will get an alert notifying you that the changes made will be lost:

![Navigating away](_assets/navigating_away.6Tfkd6ca_2e249T_vaultpay.webp)

To save the changes, you can create a new version of the Example Dashboard:

chat\_bubble

Note that the new version will need to have a higher semantic version (1.1.0 in this example) than the one previously created.

The latest version of the `Dashboard` will always be used when viewing a Dashboard, so now you will be able to see the Payment type breakdown everytime you load this Dashboard.