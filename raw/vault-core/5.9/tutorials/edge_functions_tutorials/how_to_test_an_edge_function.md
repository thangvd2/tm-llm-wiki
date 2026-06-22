---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_test_an_edge_function"
title: "How to test an Edge Function"
scraped_at: "2026-06-22T19:19:43.670Z"
images: 0
---

# How to test an Edge Function

## [](#overview_of_testing_edge_functions "Copy link to heading")Overview of testing Edge Functions

You can use a standard testing framework, such as the Python unittest module, pytest, to run tests for Edge Functions.

The [How to write a unit test for an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function) tutorial provides information about writing the tests yourself. This include instructions on mocking the Core API, using the `@patch_core_api_client` decorator, if it is used within your Edge Functions.

## [](#overview_of_the_testing_flow "Copy link to heading")Overview of the testing flow

Once you compose your Edge Function source code, you are ready to test it. The following overview is a recommendation of the best practice approach to the testing flow.

chat\_bubble

The platform always executes the current version of the Edge Function by default if you do not specify a version on execution. It is possible for you to specify a particular version of an Edge Function to execute. For example, to test a particular version and validate its behaviour before making it the current version. However, Thought Machine does not recommend using this pattern to retain a specific version outside of this use case. This is to ensure good Edge Function and execution management hygiene. You should only use this functionality to test a version in your environment. For example, before you set it as the current version in a production environment.

### [](#summary "Copy link to heading")Summary:

#### [](#1_develop_your_edge_function_code_and_tests_locally "Copy link to heading")1\. Develop your Edge Function code and tests locally:

1.  Compose your Edge Function source code for its initial or a new Edge Function Version - for a guide, see [How to write an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function).
    
2.  Compose a unit test - see [How to write a unit test for an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function).
    
3.  Run the unit tests against the Edge Function Version (this tutorial).
    

#### [](#2_test_and_deploy_in_your_pre_production_environment "Copy link to heading")2\. Test and deploy in your pre-production environment:

chat\_bubble

If you experience an error when uploading the Edge Function source code that states problems with the source code of the Edge Function Version, then you should revisit your source code to check it and make any necessary adjustments to make it comply.

1.  Upload the Edge Function to your pre-production environment - see [How to upload an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function) and the [Configuration Layer Utility Guide](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide).
    
2.  Test the Edge Function Version in your pre-production environment by executing the Edge Function and specifying the version in the execution request.
    
3.  Make the Edge Function Version the current version in your pre-production environment.
    
4.  Execute the Edge Function in your pre-production environment with the current version.
    
5.  Observe correct behaviour in your pre-production environment.
    

#### [](#3_test_and_deploy_in_your_production_environment "Copy link to heading")3\. Test and deploy in your production environment:

Your testing approach for a production environment should be different than for a pre-production environment.

Testing in a production environment that is running Vault Core involves executing Edge Functions and checking the results. Depending on the authored Edge Function logic, this may add or change resources in Vault Core on that environment. For example, executing an Edge Function that creates a Customer with an Account.

warning

Thought Machine strongly recommends that you do NOT run the types of tests that this guide describes in a production environment; these are suitable only for pre-production environments. This is in order to ensure that you do not pollute a live production environment with test data.

1.  Upload the Edge Function to the production environment.
    
2.  Test the Edge Function in the production environment by executing the Edge Function and specifying the version in the execution request.
    
3.  Make the Edge Function Version the current version in the production environment.
    
4.  Execute the Edge Function in the production environment with the tested code in the Edge Function Version set as the current version.
    
5.  Observe correct behaviour in the production environment.
    

## [](#prerequisites_for_testing_an_edge_function "Copy link to heading")Prerequisites for testing an Edge Function

You must first [compose an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function) before you can test it. You can then run unit tests against it using the unit testing utilities that are available in the Edge Functions SDK.

When you are ready to test it in your pre-production environment, you must [upload the Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function) to make it available as a resource in your pre-production and production environments.

This allows you to execute the Edge Function by making a call to the and the [`ExecuteEdgeFunction` endpoint](/vault-core/5-9/EN/api/edge_functions_api), with the option to specify a particular Edge Function Version.

## [](#composing_a_unit_test "Copy link to heading")Composing a unit test

The Edge Functions SDK provides `MockCoreAPIClient` that allows you to add responses or errors to specific requests made on the Core API Client. You can also validate the request parameters that you pass to the API functions.

chat\_bubble

For guidance on how to write a unit test for an Edge Function, see: [How to write a unit test for an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function)

## [](#running_a_unit_test_for_an_edge_function "Copy link to heading")Running a unit test for an Edge Function

To run all tests in a file for an Edge Function, run:

To run a specific test, you can use a separate command. For example, for the file `file_path/test_file.py` containing:

You could run:

Alternatively, you could run all test methods in the class. There are several different ways that you could run tests - for more information about using the unittest utility, refer to the [Python unittest documentation](https://docs.python.org/3/library/unittest.html#command-line-interface).

One of the most important considerations is to make sure that you use the correct version of Python. This is to ensure that you do not accidentally use language features from later Python versions. The correct Python version is that which corresponds with the supported version for the Edge Functions libraries. You can check this against the installation requirements.

For more information, see the [Edge Functions installation guide](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started).

## [](#example_unit_test_for_an_edge_function "Copy link to heading")Example unit test for an Edge Function

You can find the unit testing utilities under `vc_api.test`.

The following example is of a unit test file that is suitable to test the example simple Edge Function, which creates a Customer, in the [Quick start guide](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/quick_start_guide).

The unit test automatically checks if all the `add_response` and `add_error` calls that were set up have been made.

chat\_bubble

For detailed guidance on how to write a unit test and how to execute an Edge Function, see the following guides:

-   [How to write a unit test for an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function)
    
-   [How to execute an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function)
    

## [](#checking_the_test_results "Copy link to heading")Checking the test results

Here, you will find example outputs from three different test result scenarios:

-   a successful test
    
-   a test that fails with an unexpected arguments error
    
-   a test that fails due to attempts to set up expectations of invalid calls to the VC API
    

Refer to the documentation for the testing framework that you have used for general advice around testing. For the unittest documentation, see [Python unittest](https://docs.python.org/3/library/unittest.html#module-unittest).

If the testing is successful, you can proceed to upload and test the Edge Function in your pre-production environment.

However, if the testing returns errors, then you need to investigate and resolve them, before running tests again. A test could fail for any number of reasons. Should you experience any tests not passing, you need to investigate it further to identify the cause.

Possible reasons that a test could fail include:

-   Failures if the Edge Function under test makes a VC API call with unexpected methods and/or arguments
    
-   Errors if attempting to set up an `add_response` or `add_error` where the method name and/or arguments do not match the VC API. This is due to the test itself, rather than an issue with the Edge Function.
    

To provide some context to these and assist writers of tests, see [How to write a unit test for an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function).

### [](#example_test_output_from_a_successful_test "Copy link to heading")Example test output from a successful test

The following example provides the output of a successful test:

### [](#example_test_output_from_a_test_that_fails_with_an_unexpected_arguments_error "Copy link to heading")Example test output from a test that fails with an unexpected arguments error

The following example provides the output from a failed test.

This example output indicates an 'unexpected arguments' error. The error is caused by the code that is under test makes a call to the VC API, but the values differ from what the test expected. In this case the first/name names differ.

In order to remediate the issue in this scenario, you would need to make sure that the first/name names are the same.

chat\_bubble

These are placeholders for test file paths and names: `<EXAMPLE_FILE_PATH>/<EXAMPLE_TEST_FILE.py>`

### [](#example_test_that_sets_up_invalid_vc_api_expectation "Copy link to heading")Example test that sets up invalid VC API expectation

The following example provides the output from a failed test due to attempts to set up expectations of invalid calls to the VC API.

The error is caused by attempting to set up an `add_response` or `add_error` where the method name and/or arguments do not match the VC API.

You might otherwise know this as a 'bad expectation' error, where (typically the test) is setting up a call that is not even possible to make via the VC API.

chat\_bubble

These are placeholders for test file paths and names: `<EXAMPLE_FILE_PATH>/<EXAMPLE_TEST_FILE.py>`

## [](#upload_and_test_the_edge_function_in_a_pre_production_environment "Copy link to heading")Upload and test the Edge Function in a pre-production environment

Once you are satisfied with the Edge Function passing the unit tests, you can [upload the Edge Function to your pre-production environment](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function) to make it available to test.

### [](#test_an_edge_function_by_executing_it_in_a_pre_production_environment "Copy link to heading")Test an Edge Function by executing it in a pre-production environment

You can test the Edge Function Version before you make it the 'current version' by specifying the version in the execution request to the `edge_function_version_tag`. For example, if you have created a new Edge Function Version subresource with updated the source code for an existing Edge Function resource.

#### [](#example_request_to_execute_a_specific_version_of_an_edge_function_for_test "Copy link to heading")Example request to execute a specific version of an Edge Function for test:

For more information about making execution requests, see the Edge Functions Reference section and [How to execute an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function).

### [](#make_the_edge_function_version_the_current_version_in_your_pre_production_environment "Copy link to heading")Make the Edge Function Version the current version in your pre-production environment

Once you are satisfied that the Edge Function executes as you expect with the source code you are testing, you can make it the current version in your pre-production environment.

To do this, update the Edge Function - see [How to update an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_update_an_edge_function).

### [](#execute_the_edge_function_in_your_pre_production_environment_with_the_current_version "Copy link to heading")Execute the Edge Function in your pre-production environment with the current version

Once you have updated the Edge Function resource so that this Edge Function Version is the current version, you can test it again without specifying the version tag.

The platform will then always execute the current version of the Edge Function by default. For guidance on making execution requests, refer to the example below, the Reference section, and [How to execute an Edge Function](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function).

#### [](#example_request_to_test_the_current_version_of_an_edge_function "Copy link to heading")Example request to test the current version of an Edge Function:

If the execution request is successful, you receive a response without any HTTP errors, and can deem it as passing the first test. You may wish to conduct further testing to ensure that you are satisfied, such as making calls that you expect to result in an error (for example, with invalid parameters or values).

You can observe the general health of execution requests using the observability tools included with Edge Functions, such as the Grafana dashboards. For more information, see [Monitoring and Disaster Recovery](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/observability_and_disaster_recovery).

## [](#release_the_tested_edge_functions_to_a_production_environment "Copy link to heading")Release the tested Edge Functions to a production environment

Once you are satisfied that the Edge Function executes as you expect in a pre-production environment, you may wish to upload it to your production environment. You can do this explicitly using the Edge Function APIs or via the [Configuration Layer Utility](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/configuration_layer_utility_user_guide) (CLU) as part of your release pipeline.

The steps to add an Edge Function and make its version the current version in your production environment are as follows:

1.  Upload the Edge Function and its initial version or create a new Edge Function Version for an existing Edge Function resource
    
2.  If this is a new version for an existing Edge Function, update the parent Edge Function to use the new Edge Function Version as the current version.
    
    1.  In this case, you can use one call to the `UpdateEdgeFunction` API to upload the new Edge Function Version and set it as the current version. However, if you want to create the new Edge Function Version first, before setting as the current version, you should use the `CreateEdgeFunctionVersion` API. Then use the `UpdateEdgeFunction` API at a later stage to set it as the current version on the Edge Function resource.
        
    
3.  Once you have uploaded the new Edge Function Version code, the only way to test it is by executing the Edge Function. You can do this either by executing the current version or explicitly using the `edge_function_version_tag` parameter to specify a version. Thought Machine strongly recommends that you do NOT test Edge Functions that, on execution, result in creating data within Vault Core on a live production environment as part of the test. For example, test accounts created by the execution. This is because it could result in a negative business impact.
    

For monitoring and debugging issues in a production environment, see [Monitoring and Disaster Recovery](/vault-core/5-9/EN/reference/edge_functions/overview_and_getting_started/observability_and_disaster_recovery).

chat\_bubble

If you experience any issues with testing and Edge Functions, refer to [How to troubleshoot Edge Functions](/vault-core/5-9/EN/tutorials/edge_functions_tutorials/troubleshooting). If you require further assistance, contact Thought Machine Support.