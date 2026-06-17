---
source_url: "https://vault-portal.thoughtmachine.net/learning/latest/EN/labs/lab_3_basic_smart_contract_tutorial/exercise-5"
title: "Exercise 5 - Using Parameters"
scraped_at: "2026-06-17T05:19:03.625Z"
images: 0
---

# Exercise 5 - Using Parameters

## [](#parameters_as_configuration "Copy link to heading")Parameters as Configuration

In the previous exercise we hard coded the acceptable denomination to be 'GBP'. It would be much better to pass this into the contract as a [parameter](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/concepts#parameters). In this exercise, we will define a parameter to hold the denomination our Smart Contract will accept.

Any hook can access the parameters timeseries by adding parameters to its requirements. A parameter timeseries is a Python object with methods to access the value of the parameter at different points in time.

## [](#parameters_overview "Copy link to heading")Parameters Overview

Parameters are high level variables that can be changed and updated without needing to change the smart contract code itself. Therefore, they’re useful for setting values such as interest rates, denominations, account tiers, and so on.

The parameters required by an account can be divided into these tiers:

-   `TEMPLATE` (also known as `PRODUCT`): Values common to all accounts running on a particular Smart Contract
    
-   `EXPECTED`: Core [Parameters](/vault-core/latest/EN/api/core_api#parameters) that can be referenced in Smart Contract metadata with the `expected_parameters` syntax.
    
-   `GLOBAL`: Bank-wide values such as the native currency or central bank interest rate. Contract - e.g. a product-specific interest rate, overdraft rate, or deposit limit.
    
-   `INSTANCE` (also known as `ACCOUNT`): Values specific to one account running on the Smart Contract
    
    -   e.g. a day-of-month the customer would like their interest paid on, or a particular limit placed on the customer’s individual account.
        
    

From Vault Core 5, `GLOBAL` and `INSTANCE` parameters are considered legacy, and `EXPECTED` should be used instead, where possible.

### [](#using_template_parameters "Copy link to heading")Using Template Parameters

Each Smart Contract must import and define (and assign to a variable named `parameters`) a list of [Parameter](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#parameter) objects:

## [](#parameter_objects "Copy link to heading")Parameter Objects

As we can see in the example above, the `Parameter` object takes a number of fields:

-   `name`: The name of the Parameter. This is how the Parameter is referred to programmatically by the Smart Contract when it fetches the Parameter value from the ParameterTimeseries.
    
-   `description`: The description of the Parameter. This may be used in a front-end user interface to show a user the meaning of the Parameter. This field is optional.
    
-   `display_name`: The name of Parameter as may be show in a front-end user interface. This field is optional.
    
-   `shape`: Defines the 'shape' of the Parameter - i.e. the type that the Parameter is. In this case, as interest rate is a number, it takes the [NumberShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#numbershape). Other possible shapes include [AccountIdShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#accountidshape), [DateShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#dateshape), [DenominationShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#denominationshape), [OptionalShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#optionalshape), [StringShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#stringshape) and [UnionShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#unionshape).
    
-   `level`: The level of the parameter, either `GLOBAL`, `TEMPLATE` or `INSTANCE` of the [ParameterLevel](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/enums#parameterlevel) enum.
    
-   `default_value`: The default value of the Parameter. This field is optional.
    

## [](#reading_parameters "Copy link to heading")Reading Parameters

Now that we have our Parameter metadata defined, we can use them within our contract logic. In order to do this, we will start using the `vault` object - the other argument in our hooks. `vault` has a method [get\_parameter\_timeseries](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault#get_parameter_timeseries). This function only has one argument, `name`, which is the name of the parameter we’re trying to fetch - for example, `an_interest_rate` from the sample above.

This method will return a [ParameterTimeSeries](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#parametertimeseries), which is essentially a series of Parameter values sorted by time that they changed. Calling `latest()` on this object will allow us to get the current parameter value.

This method also requires a decorator on the hook - `@requires(parameters=True)`. This decorator will pre-fetch data needed in the method, and the method will automatically fail without it.

## [](#exercise "Copy link to heading")Exercise

### [](#declaring_and_fetching_a_denomination_parameter "Copy link to heading")Declaring and Fetching a Denomination Parameter

With all this in mind, we can now go about de-hardcoding 'GBP' as the denomination we’re checking for, and instead passing it in as a parameter.

As before, we will test sending a couple of different denominations into the account, but first we will test creating a product version with a `TEMPLATE` parameter, with the name `denomination` and a value of `GBP`.

Let’s try the following:

-   Declare a new `Parameter` in the `parameters` list, with a `name` of `'denomination'` and a shape of [DenominationShape](/vault-core/latest/EN/smart_contracts/contracts_api_4xx/common_types_4xx/classes#denominationshape).
    
-   Add a decorator to the `pre_posting_hook` function to allow this function to make use of parameters.
    
-   In the `pre_posting_hook`, use `get_parameter_timeseries` to fetch this parameter. Use its value to check it against the Posting Instruction Batch denomination in the `if` statement already in the contract.
    

Don’t forget to:

-   Import new object types as you need them, for example `Parameter`.
    
-   Use the `@requires(parameters=True)` decorator.
    

When ready to check your work, run:

`python -m unittest smart_contract_tutorials/library/basic_smart_contract_tutorial/exercise_5/test.py`