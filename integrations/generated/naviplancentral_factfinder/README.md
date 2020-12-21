# @datafire/naviplancentral_factfinder

Client library for Advicent.FactFinderService

## Installation and Usage
```bash
npm install --save @datafire/naviplancentral_factfinder
```
```js
let naviplancentral_factfinder = require('@datafire/naviplancentral_factfinder').create();

.then(data => {
  console.log(data);
});
```

## Description

An API for accessing the NaviPlan Fact Finder.

## Actions

### AccountTypes_GetByCountry
Description: This operation retrieves all Account Types for the specified country.<br />
              Purpose: Provides access to the Account Types including id and type description.


```js
naviplancentral_factfinder.AccountTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Account Types

#### Output
* output [AccountTypesModel](#accounttypesmodel)

### AccountTypes_GetById
Description: This operation retrieves all Account Types for the specified id.<br />
              Purpose: Provides access to the Account Types including id and type description.


```js
naviplancentral_factfinder.AccountTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Account Type used to retreive the Account Type information

#### Output
* output [AccountTypeModel](#accounttypemodel)

### Accounts_GetAccountsByFactFinderIdByFactfinderidExternalsourceid
Description: This operation retrieves all Accounts for the specified Fact Finder ID and/or external source ID.<br />
              Purpose: Provides access to the Account information including description and market value.


```js
naviplancentral_factfinder.Accounts_GetAccountsByFactFinderIdByFactfinderidExternalsourceid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Accounts
  * externalSourceId `string`: The external ID used to filter Accounts

#### Output
* output [AccountsModel](#accountsmodel)

### Accounts_PostByModel
Description: The operation creates an Account.<br />
              Purpose: Allows for creation of Accounts on a Fact Finder.


```js
naviplancentral_factfinder.Accounts_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [AccountModel](#accountmodel)

#### Output
* output [AccountWithIdModel](#accountwithidmodel)

### Accounts_GetAccountHoldingsByAccountid
Retrieves all holdings in the specified Account.


```js
naviplancentral_factfinder.Accounts_GetAccountHoldingsByAccountid({
  "accountId": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The ID of the Account used to retrieve the Account Holding data

#### Output
* output [AccountHoldingsModel](#accountholdingsmodel)

### Accounts_PostAccountHoldingByAccountidModel
Creates a holding and adds it to an existing Account.


```js
naviplancentral_factfinder.Accounts_PostAccountHoldingByAccountidModel({
  "accountId": 0,
  "model": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The existing Account ID used to identify which Account to add the holding to
  * model **required** [AccountHoldingModel](#accountholdingmodel)

#### Output
* output [AccountHoldingWithIdModel](#accountholdingwithidmodel)

### Accounts_PutHoldingsByAccountidHoldings
Updates all holdings associated with an account


```js
naviplancentral_factfinder.Accounts_PutHoldingsByAccountidHoldings({
  "accountId": 0,
  "holdings": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The account with the holding to be updated
  * holdings **required** [AccountHoldingsWithoutIdModel](#accountholdingswithoutidmodel)

#### Output
* output [AccountHoldingsModel](#accountholdingsmodel)

### Accounts_DeleteAccountHoldingByAccountidId
Description: This operation deletes a single Account Holding for the specified Account Holding ID and Account ID.<br />
              Purpose: Provides the ability to remove individual holdings from a specified Account.


```js
naviplancentral_factfinder.Accounts_DeleteAccountHoldingByAccountidId({
  "accountId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The ID of the Account used to retrieve the Account data that the specified holding belongs to.
  * id **required** `integer`: The ID of the Account Holding used to delete the Account Holding

#### Output
*Output schema unknown*

### Accounts_GetAccountHoldingByAccountidId
Description: This operation retrieves a single Account Holding for the specified Account Holding ID and Account ID.<br />
              Purpose: Provides access to the Account Holding information including description and market value.


```js
naviplancentral_factfinder.Accounts_GetAccountHoldingByAccountidId({
  "accountId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The ID of the Account used to retrieve the Account Holding data
  * id **required** `integer`: The ID of the Account Holding used to retrieve the Account Holding data

#### Output
* output [AccountHoldingWithIdModel](#accountholdingwithidmodel)

### Accounts_PutByAccountidIdHolding
Updates a holding associated with an account


```js
naviplancentral_factfinder.Accounts_PutByAccountidIdHolding({
  "accountId": 0,
  "id": 0,
  "holding": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The account with the holding to be updated
  * id **required** `integer`: The id of the holding to update
  * holding **required** [AccountHoldingModel](#accountholdingmodel)

#### Output
* output [AccountHoldingModel](#accountholdingmodel)

### Accounts_DeleteSavingsStrategiesByAccountid
Deletes all savings strategies tied to an account


```js
naviplancentral_factfinder.Accounts_DeleteSavingsStrategiesByAccountid({
  "accountId": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: Id of the account that holds the savings strategies

#### Output
*Output schema unknown*

### Accounts_GetSavingsStrategiesByAccountIdByAccountid
Get all of the savings strategies for a specific account


```js
naviplancentral_factfinder.Accounts_GetSavingsStrategiesByAccountIdByAccountid({
  "accountId": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The id of the account to retrieve the savings strategies from

#### Output
* output [SavingsStrategiesModel](#savingsstrategiesmodel)

### Accounts_PostSavingsStrategyByAccountidSavingsstrategy
Creates a savings strategy on a specific account


```js
naviplancentral_factfinder.Accounts_PostSavingsStrategyByAccountidSavingsstrategy({
  "accountId": 0,
  "savingsStrategy": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: Id of the account to create a savings strategy for
  * savingsStrategy **required** [SavingsStrategyModel](#savingsstrategymodel)

#### Output
* output [SavingsStrategyWithIdModel](#savingsstrategywithidmodel)

### Accounts_DeleteSavingsStrategyByAccountidId
Deletes a specific savings strategy


```js
naviplancentral_factfinder.Accounts_DeleteSavingsStrategyByAccountidId({
  "accountId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: Id of the account that holds the savings strategy
  * id **required** `integer`: Id of the savings strategy to be deleted

#### Output
*Output schema unknown*

### Accounts_GetSavingsStrategiesByAccountIdAndSavingsStrategyIdByAccountidId
Get a specific savings strategy for an account


```js
naviplancentral_factfinder.Accounts_GetSavingsStrategiesByAccountIdAndSavingsStrategyIdByAccountidId({
  "accountId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The id of the account to retrieve the savings strategies from
  * id **required** `integer`: The id of the savings strategy to get

#### Output
* output [SavingsStrategyWithIdModel](#savingsstrategywithidmodel)

### Accounts_PutSavingsStrategyByAccountidIdSavingsstrategy
Updates a specific savings strategy


```js
naviplancentral_factfinder.Accounts_PutSavingsStrategyByAccountidIdSavingsstrategy({
  "accountId": 0,
  "id": 0,
  "savingsStrategy": {}
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: Id of the account that holds the savings strategy
  * id **required** `integer`: Id of the savings strategy to update
  * savingsStrategy **required** [SavingsStrategyModel](#savingsstrategymodel)

#### Output
* output [SavingsStrategyWithIdModel](#savingsstrategywithidmodel)

### Accounts_DeleteAccountById
Description: The operation removes an Account tied to a Fact Finder.<br />
              Purpose: Allows for removal of an Account from a Fact Finder.


```js
naviplancentral_factfinder.Accounts_DeleteAccountById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Account ID used to identify which Account to remove

#### Output
*Output schema unknown*

### Accounts_GetById
Description: This operation retrieves a single Account for the specified Account ID.<br />
              Purpose: Provides access to the Account information including description and market value.


```js
naviplancentral_factfinder.Accounts_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Account used to retrieve the Account data

#### Output
* output [AccountWithIdModel](#accountwithidmodel)

### Accounts_PutByIdModel
Description: The operation updates an Account, deletes associated saving strategies if the account type changes.<br />
              Purpose: Allows for complete replacement of an Account on a Fact Finder.


```js
naviplancentral_factfinder.Accounts_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Account ID used to identify which Account to update
  * model **required** [AccountModel](#accountmodel)

#### Output
* output [AccountWithIdModel](#accountwithidmodel)

### Clients_PostByModel
Description: This operation submits the Fact Finder data to an external system.<br />
              Purpose: Allows Fact Finder data to be persisted in another system for that system's consumption and use.


```js
naviplancentral_factfinder.Clients_PostByModel({
  "model": {
    "factFinderId": 0,
    "planAction": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [ClientsModel](#clientsmodel)

#### Output
* output [ClientModel](#clientmodel)

### CriticalIllnessInsurancePolicies_GetCriticalIllnessInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Critical Illness Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Critical Illness Insurance Policies including description and policy type.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicies_GetCriticalIllnessInsurancePoliciesByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Critical Illness Insurance Policies

#### Output
* output [CriticalIllnessInsurancePoliciesModel](#criticalillnessinsurancepoliciesmodel)

### CriticalIllnessInsurancePolicies_PostByModel
Description: The operation creates a Critical Illness Insurance Policy.<br />
              Purpose: Allows for creation of Critical Illness Insurance Policies on a Fact Finder.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicies_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [CriticalIllnessInsurancePolicyModel](#criticalillnessinsurancepolicymodel)

#### Output
* output [CriticalIllnessInsurancePolicyWithIdModel](#criticalillnessinsurancepolicywithidmodel)

### CriticalIllnessInsurancePolicies_DeleteById
Description: The operation removes a Critical Illness Insurance Policy tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Critical Illness Insurance Policy from a Fact Finder.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicies_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Critical Illness Insurance Policy ID used to identify which Critical Illness Insurance Policy to remove

#### Output
*Output schema unknown*

### CriticalIllnessInsurancePolicies_GetById
Description: This operation retrieves a single Critical Illness Insurance Policy for the specified Critical Illness Insurance Policy ID.<br />
              Purpose: Provides access to the Critical Illness Insurance Policy including description and policy type.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicies_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Critical Illness Insurance Policy used to retreive the Critical Illness Insurance Policy

#### Output
* output [CriticalIllnessInsurancePolicyWithIdModel](#criticalillnessinsurancepolicywithidmodel)

### CriticalIllnessInsurancePolicies_PutByIdModel
Description: The operation updates a Critical Illness Insurance Policy.<br />
              Purpose: Allows for complete replacement of a Critical Illness Insurance Policy on a Fact Finder.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicies_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Critical Illness Insurance Policy ID used to identify which Critical Illness Insurance Policy to update
  * model **required** [CriticalIllnessInsurancePolicyModel](#criticalillnessinsurancepolicymodel)

#### Output
* output [CriticalIllnessInsurancePolicyWithIdModel](#criticalillnessinsurancepolicywithidmodel)

### CriticalIllnessInsurancePolicyTypes_GetByCountry
Description: This operation retrieves all Critical Illness Insurance Policy Types for the specified country.<br />
              Purpose: Provides access to the Critical Illness Insurance Policy Types including id and type description.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicyTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Critical Illness Insurance Policy Types

#### Output
* output [CriticalIllnessInsurancePolicyTypesModel](#criticalillnessinsurancepolicytypesmodel)

### CriticalIllnessInsurancePolicyTypes_GetById
Description: This operation retrieves the Critical Illness Insurance Policy Type for the specified id.<br />
              Purpose: Provides access to the Critical Illness Insurance Policy Types including id and type description.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicyTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Critical Illness Insurance Policy Type used to retreive the Critical Illness Insurance Policy Type information

#### Output
* output [CriticalIllnessInsurancePolicyTypeModel](#criticalillnessinsurancepolicytypemodel)

### DefinedBenefitPensions_GetDefinedBenefitPensionsByFactFinderIdByFactfinderid
Description: This operation retrieves all Defined Benefit Pensions for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Defined Benefit Pensions including description and start date.


```js
naviplancentral_factfinder.DefinedBenefitPensions_GetDefinedBenefitPensionsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Defined Benefit Pensions

#### Output
* output [DefinedBenefitPensionsModel](#definedbenefitpensionsmodel)

### DefinedBenefitPensions_PostByModel
Description: The operation creates a Defined Benefit Pension.<br />
              Purpose: Allows for creation of Defined Benefit Pensions on a Fact Finder.


```js
naviplancentral_factfinder.DefinedBenefitPensions_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [DefinedBenefitPensionModel](#definedbenefitpensionmodel)

#### Output
* output [Object](#object)

### DefinedBenefitPensions_DeleteDefinedBenefitPensionById
Description: The operation removes a Defined Benefit Pension tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Defined Benefit Pension from a Fact Finder.


```js
naviplancentral_factfinder.DefinedBenefitPensions_DeleteDefinedBenefitPensionById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Defined Benefit Pension ID used to identify which Defined Benefit Pension to remove

#### Output
* output [Object](#object)

### DefinedBenefitPensions_GetById
Description: This operation retrieves a single Defined Benefit Pension for the specified Defined Benefit Pension ID.<br />
              Purpose: Provides access to the Defined Benefit Pension including description and start date.


```js
naviplancentral_factfinder.DefinedBenefitPensions_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Defined Benefit Pension used to retreive the Defined Benefit Pension

#### Output
* output [DefinedBenefitPensionWithIdModel](#definedbenefitpensionwithidmodel)

### DefinedBenefitPensions_PutDefinedBenefitPensionByIdModel
Description: The operation updates a Defined Benefit Pension.<br />
              Purpose: Allows for complete replacement of a Defined Benefit Pension on a Fact Finder.


```js
naviplancentral_factfinder.DefinedBenefitPensions_PutDefinedBenefitPensionByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Defined Benefit Pension ID used to identify which Defined Benefit Pension to update
  * model **required** [DefinedBenefitPensionModel](#definedbenefitpensionmodel)

#### Output
* output [DefinedBenefitPensionModel](#definedbenefitpensionmodel)

### Demographics_GetDemographicsByFactFinderIdByFactfinderid
Description: This operation retrieves all Demographic information for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Demographic information including city and state.


```js
naviplancentral_factfinder.Demographics_GetDemographicsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Demographic information

#### Output
* output [DemographicsWithIdModel](#demographicswithidmodel)

### Demographics_PostByModel
Description: The operation creates Demographic information.<br />
              Purpose: Allows for creation of Demographic information on a Fact Finder.


```js
naviplancentral_factfinder.Demographics_PostByModel({
  "model": {
    "jointAnalysis": true,
    "head1": {
      "firstName": "",
      "lastName": "",
      "birthDate": "",
      "gender": "",
      "taxFilingStatus": 0,
      "alreadyRetired": true
    },
    "factFinderId": 0,
    "city": "",
    "state": 0
  }
}, context)
```

#### Input
* input `object`
  * model **required** [DemographicsModel](#demographicsmodel)

#### Output
* output [DemographicsWithIdModel](#demographicswithidmodel)

### Demographics_GetDependentsByDemographicid
Description: This operation retrieves all Dependents for the specified Demographic information ID.<br />
              Purpose: Provides access to the Dependents including first and last name.


```js
naviplancentral_factfinder.Demographics_GetDependentsByDemographicid({
  "demographicId": 0
}, context)
```

#### Input
* input `object`
  * demographicId **required** `integer`: The ID of the Demographic information used to retrieve Dependents

#### Output
* output [DemographicsDependentsModel](#demographicsdependentsmodel)

### Demographics_PostByDemographicidModel
Description: The operation creates a Dependent.<br />
              Purpose: Allows for creation of Dependents on a Fact Finder.


```js
naviplancentral_factfinder.Demographics_PostByDemographicidModel({
  "demographicId": 0,
  "model": {
    "firstName": "",
    "lastName": "",
    "birthDate": "",
    "relationship": "",
    "dependentOf": ""
  }
}, context)
```

#### Input
* input `object`
  * demographicId **required** `integer`: The ID of the Demographic information to add the Dependent to
  * model **required** [DemographicsDependentModel](#demographicsdependentmodel)

#### Output
* output [DemographicsDependentWithIdModel](#demographicsdependentwithidmodel)

### Demographics_DeleteDependentByDemographicidId
Description: The operation removes a Dependent tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Dependent from a Fact Finder.


```js
naviplancentral_factfinder.Demographics_DeleteDependentByDemographicidId({
  "demographicId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * demographicId **required** `integer`: The ID of the Demographic information used to identify which Dependent to remove
  * id **required** `integer`: The Dependent ID used to identify which Dependent to remove

#### Output
*Output schema unknown*

### Demographics_GetDependentByDemographicidId
Description: This operation retrieves a single Dependent for the specified Dependent ID.<br />
              Purpose: Provides access to the Dependent including first and last name.


```js
naviplancentral_factfinder.Demographics_GetDependentByDemographicidId({
  "demographicId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * demographicId **required** `integer`: The ID of the Demographic information used to retrieve Dependents
  * id **required** `integer`: The ID of the Dependent used to retreive the Dependent

#### Output
* output [DemographicsDependentWithIdModel](#demographicsdependentwithidmodel)

### Demographics_PutByDemographicidIdModel
Description: The operation updates a Dependent.<br />
              Purpose: Allows for complete replacement of a Dependent on a Fact Finder.


```js
naviplancentral_factfinder.Demographics_PutByDemographicidIdModel({
  "demographicId": 0,
  "id": 0,
  "model": {
    "firstName": "",
    "lastName": "",
    "birthDate": "",
    "relationship": "",
    "dependentOf": ""
  }
}, context)
```

#### Input
* input `object`
  * demographicId **required** `integer`: The ID of the Demographic information used to identify which Dependent to update
  * id **required** `integer`: The existing Dependent ID used to identify which Dependent to update
  * model **required** [DemographicsDependentModel](#demographicsdependentmodel)

#### Output
* output [DemographicsDependentWithIdModel](#demographicsdependentwithidmodel)

### Demographics_GetById
Description: This operation retrieves Demographic information for the specified Demographic information ID.<br />
              Purpose: Provides access to the Demographic information including city and state.


```js
naviplancentral_factfinder.Demographics_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Demographic information used to retreive the Demographic information

#### Output
* output [DemographicsWithIdModel](#demographicswithidmodel)

### Demographics_PutByIdModel
Description: The operation updates Demographic information.<br />
              Purpose: Allows for complete replacement of Demographic information on a Fact Finder.


```js
naviplancentral_factfinder.Demographics_PutByIdModel({
  "id": 0,
  "model": {
    "jointAnalysis": true,
    "head1": {
      "firstName": "",
      "lastName": "",
      "birthDate": "",
      "gender": "",
      "taxFilingStatus": 0,
      "alreadyRetired": true
    },
    "factFinderId": 0,
    "city": "",
    "state": 0
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Demographic information ID used to identify which Demographic information to update
  * model **required** [DemographicsModel](#demographicsmodel)

#### Output
* output [DemographicsWithIdModel](#demographicswithidmodel)

### DisabilityInsurancePolicies_GetDisabilityInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Disability Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Disability Insurance Policies including description and policy type.


```js
naviplancentral_factfinder.DisabilityInsurancePolicies_GetDisabilityInsurancePoliciesByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Disability Insurance Policies

#### Output
* output [DisabilityInsurancePoliciesModel](#disabilityinsurancepoliciesmodel)

### DisabilityInsurancePolicies_PostByModel
Description: The operation creates a Disability Insurance Policy.<br />
              Purpose: Allows for creation of Disability Insurance Policies on a Fact Finder.


```js
naviplancentral_factfinder.DisabilityInsurancePolicies_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [DisabilityInsurancePolicyModel](#disabilityinsurancepolicymodel)

#### Output
* output [DisabilityInsurancePolicyWithIdModel](#disabilityinsurancepolicywithidmodel)

### DisabilityInsurancePolicies_DeleteById
Description: The operation removes a Disability Insurance Policy tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Disability Insurance Policy from a Fact Finder.


```js
naviplancentral_factfinder.DisabilityInsurancePolicies_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Disability Insurance Policy ID used to identify which Disability Insurance Policy to remove

#### Output
*Output schema unknown*

### DisabilityInsurancePolicies_GetById
Description: This operation retrieves a single Disability Insurance Policy for the specified Disability Insurance Policy ID.<br />
              Purpose: Provides access to the Disability Insurance Policy including description and policy type.


```js
naviplancentral_factfinder.DisabilityInsurancePolicies_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Disability Insurance Policy used to retreive the Disability Insurance Policy

#### Output
* output [DisabilityInsurancePolicyWithIdModel](#disabilityinsurancepolicywithidmodel)

### DisabilityInsurancePolicies_PutByIdModel
Description: The operation updates a Disability Insurance Policy.<br />
              Purpose: Allows for complete replacement of a Disability Insurance Policy on a Fact Finder.


```js
naviplancentral_factfinder.DisabilityInsurancePolicies_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Disability Insurance Policy ID used to identify which Disability Insurance Policy to update
  * model **required** [DisabilityInsurancePolicyModel](#disabilityinsurancepolicymodel)

#### Output
* output [DisabilityInsurancePolicyWithIdModel](#disabilityinsurancepolicywithidmodel)

### DisabilityInsurancePolicyTypes_GetByCountry
Description: This operation retrieves all Disability Insurance Policy Types for the specified country.<br />
              Purpose: Provides access to the Disability Insurance Policy Types including id and type description.


```js
naviplancentral_factfinder.DisabilityInsurancePolicyTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Disability Insurance Policy Types

#### Output
* output [DisabilityInsurancePolicyTypesModel](#disabilityinsurancepolicytypesmodel)

### DisabilityInsurancePolicyTypes_GetById
Description: This operation retrieves all Disability Insurance Policy Types for the specified id.<br />
              Purpose: Provides access to the Disability Insurance Policy Types including id and type description.


```js
naviplancentral_factfinder.DisabilityInsurancePolicyTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Disability Insurance Policy Type used to retreive the Disability Insurance Policy Type information

#### Output
* output [DisabilityInsurancePolicyTypeModel](#disabilityinsurancepolicytypemodel)

### EducationGoals_GetEducationGoalsByFactFinderIdByFactfinderid
Description: This operation retrieves all Education Goals for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Education Goals including description and projected cost.


```js
naviplancentral_factfinder.EducationGoals_GetEducationGoalsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Education Goals

#### Output
* output [EducationGoalsModel](#educationgoalsmodel)

### EducationGoals_PostByModel
Description: The operation creates an Education Goal.<br />
              Purpose: Allows for creation of Education Goals on a Fact Finder.


```js
naviplancentral_factfinder.EducationGoals_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [EducationGoalModel](#educationgoalmodel)

#### Output
* output [EducationGoalWithIdModel](#educationgoalwithidmodel)

### EducationGoals_GetEducationExpensesByEducationGoalIdByEducationgoalid
Description: This operation retrieves all Education Goal Expenses for the specified Education Goal ID.<br />
              Purpose: Provides access to the Education Goal Expenses including description and annual cost.


```js
naviplancentral_factfinder.EducationGoals_GetEducationExpensesByEducationGoalIdByEducationgoalid({
  "educationGoalId": 0
}, context)
```

#### Input
* input `object`
  * educationGoalId **required** `integer`: The ID of the Education Goal used to retrieve Education Goal Expenses

#### Output
* output [EducationExpensesModel](#educationexpensesmodel)

### EducationGoals_PostByEducationgoalidModel
Description: The operation creates an Education Goal Expense.<br />
              Purpose: Allows for creation of Education Goal Expenses on a Fact Finder.


```js
naviplancentral_factfinder.EducationGoals_PostByEducationgoalidModel({
  "educationGoalId": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * educationGoalId **required** `integer`: The Education Goal ID used to locate the Goal to add the expense to
  * model **required** [EducationExpenseModel](#educationexpensemodel)

#### Output
* output [EducationExpenseWithIdModel](#educationexpensewithidmodel)

### EducationGoals_DeleteByEducationgoalidId
Description: The operation removes an Education Goal Expense tied to a Fact Finder.<br />
              Purpose: Allows for removal of an Education Goal Expense from a Fact Finder.


```js
naviplancentral_factfinder.EducationGoals_DeleteByEducationgoalidId({
  "educationGoalId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * educationGoalId **required** `integer`: The Education Goal ID used to locate the Goal to delete the Expense under
  * id **required** `integer`: The Education Goal Expense ID used to identify which Education Goal Expense to remove

#### Output
*Output schema unknown*

### EducationGoals_GetEducationExpenseByEducationgoalidId
Description: This operation retrieves a single Education Goal Expense for the specified Education Goal Expense ID.<br />
              Purpose: Provides access to the Education Goal Expense including description and annual cost.


```js
naviplancentral_factfinder.EducationGoals_GetEducationExpenseByEducationgoalidId({
  "educationGoalId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * educationGoalId **required** `integer`: The ID of the Education Goal used to retrieve Education Goal Expenses
  * id **required** `integer`: The ID of the Education Goal Expense used to retreive the Education Goal Expense

#### Output
* output [EducationExpenseWithIdModel](#educationexpensewithidmodel)

### EducationGoals_PutByEducationgoalidIdModel
Description: The operation updates an Education Goal Expense.<br />
              Purpose: Allows for complete replacement of an Education Goal Expense on a Fact Finder.


```js
naviplancentral_factfinder.EducationGoals_PutByEducationgoalidIdModel({
  "educationGoalId": 0,
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * educationGoalId **required** `integer`: The Education Goal ID used to locate the Goal to update the Expense under
  * id **required** `integer`: The existing Education Goal Expense ID used to identify which Education Goal Expense to update
  * model **required** [EducationExpenseModel](#educationexpensemodel)

#### Output
* output [EducationExpenseWithIdModel](#educationexpensewithidmodel)

### EducationGoals_DeleteById
Description: The operation removes an Education Goal tied to a Fact Finder.<br />
              Purpose: Allows for removal of an Education Goal from a Fact Finder.


```js
naviplancentral_factfinder.EducationGoals_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Education Goal ID used to identify which Education Goal to remove

#### Output
*Output schema unknown*

### EducationGoals_GetById
Description: This operation retrieves a single Education Goal for the specified Education Goal ID.<br />
              Purpose: Provides access to the Education Goal including description and projected cost.


```js
naviplancentral_factfinder.EducationGoals_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Education Goal used to retreive the Education Goal

#### Output
* output [EducationGoalWithIdModel](#educationgoalwithidmodel)

### EducationGoals_PutByIdModel
Description: The operation creates an Education Goal Expense.<br />
              Purpose: Allows for creation of Education Goal Expenses on a Fact Finder.


```js
naviplancentral_factfinder.EducationGoals_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Education Goal ID used to locate the Goal to add the Expense to
  * model **required** [EducationGoalModel](#educationgoalmodel)

#### Output
* output [EducationGoalWithIdModel](#educationgoalwithidmodel)

### ExpenseTypes_GetByCountry
Description: This operation retrieves all Expense Types for the specified country.<br />
              Purpose: Provides access to the Expense Types including id and type description.


```js
naviplancentral_factfinder.ExpenseTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Expense Types

#### Output
* output [ExpenseTypesModel](#expensetypesmodel)

### ExpenseTypes_GetById
Description: This operation retrieves all Expense Types for the specified country.<br />
              Purpose: Provides access to the Expense Types including id and type description.


```js
naviplancentral_factfinder.ExpenseTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Expense Type used to retreive the Expense Type information

#### Output
* output [ExpenseTypeModel](#expensetypemodel)

### Expenses_GetExpensesByFactFinderIdByFactfinderid
Description: This operation retrieves all Expenses for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Expenses including description and Expense type.


```js
naviplancentral_factfinder.Expenses_GetExpensesByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Expenses

#### Output
* output [ExpensesModel](#expensesmodel)

### Expenses_PostByModel
Description: The operation creates an Expense.<br />
              Purpose: Allows for creation of Expenses on a Fact Finder.


```js
naviplancentral_factfinder.Expenses_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [ExpenseModel](#expensemodel)

#### Output
* output [ExpenseWithIdModel](#expensewithidmodel)

### Expenses_DeleteById
Description: The operation removes an Expense tied to a Fact Finder.<br />
              Purpose: Allows for removal of an Expense from a Fact Finder.


```js
naviplancentral_factfinder.Expenses_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Expense ID used to identify which Expense to remove

#### Output
*Output schema unknown*

### Expenses_GetById
Description: This operation retrieves a single Expense for the specified Expense ID.<br />
              Purpose: Provides access to the Expense including description and Expense type.


```js
naviplancentral_factfinder.Expenses_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Expense used to retreive the Expense

#### Output
* output [ExpenseWithIdModel](#expensewithidmodel)

### Expenses_PutByIdModel
Description: The operation updates an Expense.<br />
              Purpose: Allows for complete replacement of an Expense on a Fact Finder. <br /><br />
              Note: Expense type cannot be changed for expenses prepopulated from NaviPlan.


```js
naviplancentral_factfinder.Expenses_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Expense ID used to identify which Expense to update
  * model **required** [ExpenseModel](#expensemodel)

#### Output
* output [ExpenseWithIdModel](#expensewithidmodel)

### FactFinders_GetByHouseholdIdByHouseholdid
Description: This operation retrieves all Fact Finders for the specified householdId, 
              or if null, all households associated with the user.<br />
              Purpose: Provides access to the Fact Finder including status.


```js
naviplancentral_factfinder.FactFinders_GetByHouseholdIdByHouseholdid({}, context)
```

#### Input
* input `object`
  * householdId `integer`: The ID of the household used to retrieve the fact finders. If not set, uses all households associated with the user

#### Output
* output `array`
  * items [FactFinderWithIdModel](#factfinderwithidmodel)

### FactFinders_PostByModel
Description: The operation creates a completely empty draft Fact Finder.<br />
              Requirements: A householdId and list of modules must be provided.<br />
              Purpose: Stages a Fact Finder for population.


```js
naviplancentral_factfinder.FactFinders_PostByModel({
  "model": {
    "householdId": 0
  }
}, context)
```

#### Input
* input `object`
  * model **required** [FactFinderEntityModel](#factfinderentitymodel)

#### Output
* output [Object](#object)

### FactFinders_PostPopulateByModel
Description: The operation creates a new Populated Fact Finder.<br />
              Requirements: A householdId and list of modules must be provided.<br />
              Purpose: Creation of a Fact Finder.


```js
naviplancentral_factfinder.FactFinders_PostPopulateByModel({
  "model": {
    "householdId": 0
  }
}, context)
```

#### Input
* input `object`
  * model **required** [FactFinderPopulatableEntityModel](#factfinderpopulatableentitymodel)

#### Output
* output [Object](#object)

### FactFinderModules_GetByFactfinderid
Description: This operation retrieves all Fact Finder Modules for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Fact Finder Modules including description and policy type.


```js
naviplancentral_factfinder.FactFinderModules_GetByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Fact Finder Modules

#### Output
* output [FactFinderModulesModel](#factfindermodulesmodel)

### FactFinderModules_GetByFactfinderidId
Description: This operation retrieves a single Fact Finder Module for the specified Fact Finder Module ID.<br />
              Purpose: Provides access to the Fact Finder Module including description and policy type.


```js
naviplancentral_factfinder.FactFinderModules_GetByFactfinderidId({
  "factFinderId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Fact Finder Module
  * id **required** `integer`: The ID of the Fact Finder Module used to retreive the Fact Finder Module

#### Output
* output [FactFinderModuleWithIdModel](#factfindermodulewithidmodel)

### FactFinderModules_PutByModelFactfinderidId
Description: The operation updates a Fact Finder Module.<br />
              Purpose: Allows for complete replacement of a Fact Finder Module on a Fact Finder.


```js
naviplancentral_factfinder.FactFinderModules_PutByModelFactfinderidId({
  "model": {
    "moduleName": ""
  },
  "factFinderId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * model **required** [FactFinderModuleModel](#factfindermodulemodel)
  * factFinderId **required** `integer`: The ID of the Fact Finder used to identify the Fact Finder Module to update
  * id **required** `integer`: The existing Fact Finder Module ID used to identify which Fact Finder Module to update

#### Output
* output [FactFinderModuleWithIdModel](#factfindermodulewithidmodel)

### FactFinders_GetSnapshotsByFactfinderid
Description: The operation retrieves Snapshots of a Fact Finder.<br />
              Purpose: Allows for advisors to view all Snapshots taken of a Fact Finder.


```js
naviplancentral_factfinder.FactFinders_GetSnapshotsByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder to retrieve Snapshots for

#### Output
* output [FactFinderSnapshotsModel](#factfindersnapshotsmodel)

### FactFinders_PostSnapshotsByFactfinderid
Description: The operation creates a Snapshot of a Fact Finder.<br />
              Purpose: Allows for advisors to compare the current fact finder to a snapshot prior to acceptance.


```js
naviplancentral_factfinder.FactFinders_PostSnapshotsByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to create the Fact Finder Snapshot

#### Output
* output [Object](#object)

### FactFinders_DeleteById
Description: This operation deletes a single Fact Finder for the specified Fact Finder ID.<br />
              Purpose: Deletes the fact finder.


```js
naviplancentral_factfinder.FactFinders_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Fact Finder to be deleted

#### Output
* output [Object](#object)

### FactFinders_GetById
Description: This operation retrieves a single Fact Finder for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Fact Finder including status.


```js
naviplancentral_factfinder.FactFinders_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Fact Finder used to retrieve the Fact Finder

#### Output
* output [FactFinderWithIdModel](#factfinderwithidmodel)

### FactFinders_PutByIdModel
Description: The operation updates a Fact Finder.<br />
              Purpose: Allows for the updating of a Fact Finder.


```js
naviplancentral_factfinder.FactFinders_PutByIdModel({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Fact Finder ID used to identify which Fact Finder to update
  * model **required** [FactFinderModel](#factfindermodel)

#### Output
* output [FactFinderWithIdModel](#factfinderwithidmodel)

### FactFinders_PutPopulateFactFinderByIdModel
Description: The operation populates a fact finder.<br />
              Purpose: Allows for the population of a Fact Finder based on a NaviPlan plan or client. This
                       operation cannot be performed on a Fact Finder more than once.


```js
naviplancentral_factfinder.FactFinders_PutPopulateFactFinderByIdModel({
  "id": 0,
  "model": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Fact Finder ID used to identify which Fact Finder to populate.
  * model **required** [FactFinderPopulationModel](#factfinderpopulationmodel)

#### Output
* output [FactFinderWithIdModel](#factfinderwithidmodel)

### FilingStatusTypes_GetByCountry
Description: This operation retrieves all Filing Status Types for the specified country.<br />
              Purpose: Provides access to the Filing Status Types including id and type description.


```js
naviplancentral_factfinder.FilingStatusTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Filing Status Types

#### Output
* output [FilingStatusTypesModel](#filingstatustypesmodel)

### FilingStatusTypes_GetById
Description: This operation retrieves all Filing Status Type for the specified id.<br />
              Purpose: Provides access to the Filing Status Types including id and type description.


```js
naviplancentral_factfinder.FilingStatusTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Filing Status Type used to retreive the Filing Status Type information

#### Output
* output [FilingStatusTypeModel](#filingstatustypemodel)

### FrequencyTypes_GetByEntityCountry
Description: This operation retrieves all Frequency Types for the specified country and entity.<br />
              Purpose: Provides access to the Frequency Types including id and type description.


```js
naviplancentral_factfinder.FrequencyTypes_GetByEntityCountry({
  "entity": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * entity **required** `string` (values: CriticalIllnessInsurancePolicies, DisabilityInsurancePoliciesPremium, DisabilityInsurancePoliciesBenefit, Expenses, Liabilities, LifeInsurancePolicies, LongTermCareInsurancePoliciesBenefit, LongTermCareInsurancePoliciesPremium, RealEstateAssets, RetirementExpenses, SavingsStrategies): The entity used to filter Frequency Types
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Frequency Types

#### Output
* output [FrequencyTypesModel](#frequencytypesmodel)

### FrequencyTypes_GetById
Description: This operation retrieves the Frequency Type for the specified id.<br />
              Purpose: Provides access to the Frequency Types including id and type description.


```js
naviplancentral_factfinder.FrequencyTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Frequency Type used to retreive the Frequency Type information

#### Output
* output [FrequencyTypeModel](#frequencytypemodel)

### IncomeTypes_GetByCountry
Description: This operation retrieves all Income Types for the specified country.<br />
              Purpose: Provides access to the Income Types including id and type description.


```js
naviplancentral_factfinder.IncomeTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Income Types

#### Output
* output [IncomeTypesModel](#incometypesmodel)

### IncomeTypes_GetById
Description: This operation retrieves the Income Type for the specified id.<br />
              Purpose: Provides access to the Income Types including id and type description.


```js
naviplancentral_factfinder.IncomeTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Income Type used to retreive the Income Type information

#### Output
* output [IncomeTypeModel](#incometypemodel)

### Incomes_GetIncomesByFactFinderIdByFactfinderid
Description: This operation retrieves all Incomes for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Incomes including annual amount and start date.


```js
naviplancentral_factfinder.Incomes_GetIncomesByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Incomes

#### Output
* output [IncomesModel](#incomesmodel)

### Incomes_PostByModel
Description: The operation creates an Income.<br />
              Purpose: Allows for creation of Incomes on a Fact Finder.


```js
naviplancentral_factfinder.Incomes_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [IncomeModel](#incomemodel)

#### Output
* output [IncomeWithIdModel](#incomewithidmodel)

### Incomes_DeleteById
Description: The operation removes an Income tied to a Fact Finder.<br />
              Purpose: Allows for removal of an Income from a Fact Finder.


```js
naviplancentral_factfinder.Incomes_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Income ID used to identify which Income to remove

#### Output
*Output schema unknown*

### Incomes_GetById
Description: This operation retrieves a single Income for the specified Income ID.<br />
              Purpose: Provides access to the Income including annual amount and start date.


```js
naviplancentral_factfinder.Incomes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Income used to retreive the Income

#### Output
* output [IncomeWithIdModel](#incomewithidmodel)

### Incomes_PutByIdModel
Description: The operation updates an Income.<br />
              Purpose: Allows for complete replacement of an Income on a Fact Finder.


```js
naviplancentral_factfinder.Incomes_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Income ID used to identify which Income to update
  * model **required** [IncomeModel](#incomemodel)

#### Output
* output [IncomeWithIdModel](#incomewithidmodel)

### Liabilities_GetLiabilitiesByFactFinderIdByFactfinderidExternalsourceid
Description: This operation retrieves all Liabilities for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Liabilities including owner and type.


```js
naviplancentral_factfinder.Liabilities_GetLiabilitiesByFactFinderIdByFactfinderidExternalsourceid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Liabilities
  * externalSourceId `string`: The external source ID used to filter Liabilities

#### Output
* output [LiabilitiesModel](#liabilitiesmodel)

### Liabilities_PostByModel
Description: The operation creates a Liability.<br />
              Purpose: Allows for creation of Liabilities on a Fact Finder.


```js
naviplancentral_factfinder.Liabilities_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [LiabilityModel](#liabilitymodel)

#### Output
* output [LiabilityWithIdModel](#liabilitywithidmodel)

### Liabilities_DeleteById
Description: The operation removes a Liability tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Liability from a Fact Finder.


```js
naviplancentral_factfinder.Liabilities_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Liability ID used to identify which Liability to remove

#### Output
*Output schema unknown*

### Liabilities_GetById
Description: This operation retrieves a single Liability for the specified Liability ID.<br />
              Purpose: Provides access to the Liability including owner and type.


```js
naviplancentral_factfinder.Liabilities_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Liability used to retreive the Liability

#### Output
* output [LiabilityWithIdModel](#liabilitywithidmodel)

### Liabilities_PutByIdModel
Description: The operation updates a Liability.<br />
              Purpose: Allows for complete replacement of a Liability on a Fact Finder.


```js
naviplancentral_factfinder.Liabilities_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Liability ID used to identify which Liability to update
  * model **required** [LiabilityModel](#liabilitymodel)

#### Output
* output [LiabilityWithIdModel](#liabilitywithidmodel)

### LiabilityTypes_GetByCountry
Description: This operation retrieves all Liability Types for the specified country.<br />
              Purpose: Provides access to the Liability Types including id and type description.


```js
naviplancentral_factfinder.LiabilityTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Liability Types

#### Output
* output [LiabilityTypesModel](#liabilitytypesmodel)

### LiabilityTypes_GetById
Description: This operation retrieves the Liability Type for the specified id.<br />
              Purpose: Provides access to the Liability Types including id and type description.


```js
naviplancentral_factfinder.LiabilityTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Liability Type used to retreive the Liability Type information

#### Output
* output [LiabilityTypeModel](#liabilitytypemodel)

### LifeInsurancePolicies_GetLifeInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Life Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Life Insurance Policies including description and policy type.


```js
naviplancentral_factfinder.LifeInsurancePolicies_GetLifeInsurancePoliciesByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Life Insurance Policies

#### Output
* output [LifeInsurancePoliciesModel](#lifeinsurancepoliciesmodel)

### LifeInsurancePolicies_PostByModel
Description: The operation creates a Life Insurance Policy.<br />
              Purpose: Allows for creation of Life Insurance Policies on a Fact Finder.


```js
naviplancentral_factfinder.LifeInsurancePolicies_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [LifeInsurancePolicyModel](#lifeinsurancepolicymodel)

#### Output
* output [LifeInsurancePolicyWithIdModel](#lifeinsurancepolicywithidmodel)

### LifeInsurancePolicies_DeleteById
Description: The operation removes a Life Insurance Policy tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Life Insurance Policy and associated subaccounts from a Fact Finder.


```js
naviplancentral_factfinder.LifeInsurancePolicies_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Life Insurance Policy ID used to identify which Life Insurance Policy to remove

#### Output
*Output schema unknown*

### LifeInsurancePolicies_GetById
Description: This operation retrieves a single Life Insurance Policy for the specified Life Insurance Policy ID.<br />
              Purpose: Provides access to the Life Insurance Policy including description and policy type.


```js
naviplancentral_factfinder.LifeInsurancePolicies_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Life Insurance Policy used to retreive the Life Insurance Policy

#### Output
* output [LifeInsurancePolicyWithIdModel](#lifeinsurancepolicywithidmodel)

### LifeInsurancePolicies_PutByIdModel
Description: The operation updates a Life Insurance Policy, deletes associated sub-accounts if the policy type changes.<br />
              Purpose: Allows for complete replacement of a Life Insurance Policy on a Fact Finder.


```js
naviplancentral_factfinder.LifeInsurancePolicies_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Life Insurance Policy ID used to identify which Life Insurance Policy to update
  * model **required** [LifeInsurancePolicyModel](#lifeinsurancepolicymodel)

#### Output
* output [LifeInsurancePolicyWithIdModel](#lifeinsurancepolicywithidmodel)

### LifeInsurancePolicies_GetSubaccountsByLifeinsurancepolicyid
Description: Get all the subaccounts for an existing Life Insurance Policy.<br />
              Purpose: Provides access to all the Life Insurance Policy subaccounts.


```js
naviplancentral_factfinder.LifeInsurancePolicies_GetSubaccountsByLifeinsurancepolicyid({
  "lifeInsurancePolicyId": 0
}, context)
```

#### Input
* input `object`
  * lifeInsurancePolicyId **required** `integer`: The ID of the Life Insurance Policy used to retrieve the Life Insurance Policy Subaccounts.

#### Output
* output [LifeInsurancePolicySubaccountsModel](#lifeinsurancepolicysubaccountsmodel)

### LifeInsurancePolicies_PostSubaccountByLifeinsurancepolicyidModel
Description: Creates a subaccount and adds it to an existing Life Insurance Policy.<br />
              Purpose: Allows for creation of subaccount on a Life Insurance Policy.


```js
naviplancentral_factfinder.LifeInsurancePolicies_PostSubaccountByLifeinsurancepolicyidModel({
  "lifeInsurancePolicyId": 0,
  "model": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * lifeInsurancePolicyId **required** `integer`: The ID of the Life Insurance Policy used to create the Life Insurance Policy Subaccount.
  * model **required** [LifeInsurancePolicySubaccountModel](#lifeinsurancepolicysubaccountmodel)

#### Output
* output [LifeInsurancePolicySubaccountWithIdModel](#lifeinsurancepolicysubaccountwithidmodel)

### LifeInsurancePolicies_DeleteSubaccountByLifeinsurancepolicyidId
Description: Deletes an existing Life Insurance Policy Subaccount for an existing Life Insurance Policy.<br />
              Purpose: Allows for removal of a subaccount from a Life Insurance Policy.


```js
naviplancentral_factfinder.LifeInsurancePolicies_DeleteSubaccountByLifeinsurancepolicyidId({
  "lifeInsurancePolicyId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * lifeInsurancePolicyId **required** `integer`: The ID of the Life Insurance Policy used to delete the Life Insurance Policy Subaccount.
  * id **required** `integer`: The ID of the Life Insurance Policy Subaccount.

#### Output
*Output schema unknown*

### LifeInsurancePolicies_GetSubaccountByLifeinsurancepolicyidId
Description: Get a specific subaccount for an existing Life Insurance Policy.<br />
              Purpose: Provides access to the Life Insurance Policy subaccount.


```js
naviplancentral_factfinder.LifeInsurancePolicies_GetSubaccountByLifeinsurancepolicyidId({
  "lifeInsurancePolicyId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * lifeInsurancePolicyId **required** `integer`: The ID of the Life Insurance Policy used to retrieve the Life Insurance Policy Subaccount.
  * id **required** `integer`: The ID of the Life Insurance Policy Subaccount.

#### Output
* output [LifeInsurancePolicySubaccountWithIdModel](#lifeinsurancepolicysubaccountwithidmodel)

### LifeInsurancePolicies_PutSubaccountByLifeinsurancepolicyidIdModel
Description: Updates an existing Life Insurance Policy Subaccount for an existing Life Insurance Policy.<br />
              Purpose: Allows for complete replacement of a subaccount on a Life Insurance Policy.


```js
naviplancentral_factfinder.LifeInsurancePolicies_PutSubaccountByLifeinsurancepolicyidIdModel({
  "lifeInsurancePolicyId": 0,
  "id": 0,
  "model": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * lifeInsurancePolicyId **required** `integer`: The ID of the Life Insurance Policy used to update the Life Insurance Policy Subaccount.
  * id **required** `integer`: The ID of the Life Insurance Policy Subaccount.
  * model **required** [LifeInsurancePolicySubaccountModel](#lifeinsurancepolicysubaccountmodel)

#### Output
* output [LifeInsurancePolicySubaccountModel](#lifeinsurancepolicysubaccountmodel)

### LifeInsurancePolicyTypes_GetByCountry
Description: This operation retrieves all Life Insurance Policy Types for the specified country.<br />
              Purpose: Provides access to the Life Insurance Policy Types including id and type description.


```js
naviplancentral_factfinder.LifeInsurancePolicyTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Life Insurance Policy Types

#### Output
* output [LifeInsurancePolicyTypesModel](#lifeinsurancepolicytypesmodel)

### LifeInsurancePolicyTypes_GetById
Description: This operation retrieves the Life Insurance Policy Type for the specified id.<br />
              Purpose: Provides access to the Life Insurance Policy Types including id and type description.


```js
naviplancentral_factfinder.LifeInsurancePolicyTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Life Insurance Policy Type used to retreive the Life Insurance Policy Type information

#### Output
* output [LifeInsurancePolicyTypeModel](#lifeinsurancepolicytypemodel)

### LifestyleAssetTypes_GetByCountry
Description: This operation retrieves all Lifestyle Asset Types for the specified country.<br />
              Purpose: Provides access to the Lifestyle Asset Types including id and type description.


```js
naviplancentral_factfinder.LifestyleAssetTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Lifestyle Asset Types

#### Output
* output [LifestyleAssetTypesModel](#lifestyleassettypesmodel)

### LifestyleAssetTypes_GetById
Description: This operation retrieves the Lifestyle Asset Type for the specified id.<br />
              Purpose: Provides access to the Lifestyle Asset Types including id and type description.


```js
naviplancentral_factfinder.LifestyleAssetTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Lifestyle Asset Type used to retreive the Lifestyle Asset Type information

#### Output
* output [LifestyleAssetTypeModel](#lifestyleassettypemodel)

### LifestyleAssets_GetLifestyleAssetsByFactFinderIdByFactfinderid
Description: This operation retrieves all Lifestyle Assets for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Lifestyle Assets including description and market value.


```js
naviplancentral_factfinder.LifestyleAssets_GetLifestyleAssetsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Lifestyle Assets

#### Output
* output [LifestyleAssetsModel](#lifestyleassetsmodel)

### LifestyleAssets_PostByModel
Description: The operation creates a Lifestyle Asset.<br />
              Purpose: Allows for creation of Lifestyle Assets on a Fact Finder.


```js
naviplancentral_factfinder.LifestyleAssets_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [LifestyleAssetModel](#lifestyleassetmodel)

#### Output
* output [LifestyleAssetWithIdModel](#lifestyleassetwithidmodel)

### LifestyleAssets_DeleteById
Description: The operation removes a Lifestyle Asset tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Lifestyle Asset from a Fact Finder.


```js
naviplancentral_factfinder.LifestyleAssets_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Lifestyle Asset ID used to identify which Lifestyle Asset to remove

#### Output
*Output schema unknown*

### LifestyleAssets_GetById
Description: This operation retrieves a single Lifestyle Asset for the specified Lifestyle Asset ID.<br />
              Purpose: Provides access to the Lifestyle Asset including description and market value.


```js
naviplancentral_factfinder.LifestyleAssets_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Lifestyle Asset used to retreive the Lifestyle Asset

#### Output
* output [LifestyleAssetWithIdModel](#lifestyleassetwithidmodel)

### LifestyleAssets_PutByIdModel
Description: The operation updates a Lifestyle Asset.<br />
              Purpose: Allows for complete replacement of a Lifestyle Asset on a Fact Finder.


```js
naviplancentral_factfinder.LifestyleAssets_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Lifestyle Asset ID used to identify which Lifestyle Asset to update
  * model **required** [LifestyleAssetModel](#lifestyleassetmodel)

#### Output
* output [LifestyleAssetWithIdModel](#lifestyleassetwithidmodel)

### LongTermCareInsurancePolicies_GetLongTermCareInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Long Term Care Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Long Term Care Insurance Policies including description and premium.


```js
naviplancentral_factfinder.LongTermCareInsurancePolicies_GetLongTermCareInsurancePoliciesByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Long Term Care Insurance Policies

#### Output
* output [LongTermCareInsurancePoliciesModel](#longtermcareinsurancepoliciesmodel)

### LongTermCareInsurancePolicies_PostByModel
Description: The operation creates a Long Term Care Insurance Policy.<br />
              Purpose: Allows for creation of Long Term Care Insurance Policies on a Fact Finder.


```js
naviplancentral_factfinder.LongTermCareInsurancePolicies_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [LongTermCareInsurancePolicyModel](#longtermcareinsurancepolicymodel)

#### Output
* output [LongTermCareInsurancePolicyWithIdModel](#longtermcareinsurancepolicywithidmodel)

### LongTermCareInsurancePolicies_DeleteById
Description: The operation removes a Long Term Care Insurance Policy tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Long Term Care Insurance Policy from a Fact Finder.


```js
naviplancentral_factfinder.LongTermCareInsurancePolicies_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Long Term Care Insurance Policy ID used to identify which Long Term Care Insurance Policy to remove

#### Output
*Output schema unknown*

### LongTermCareInsurancePolicies_GetById
Description: This operation retrieves a single Long Term Care Insurance Policy for the specified Long Term Care Insurance Policy ID.<br />
              Purpose: Provides access to the Long Term Care Insurance Policy including description and premium.


```js
naviplancentral_factfinder.LongTermCareInsurancePolicies_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Long Term Care Insurance Policy used to retreive the Long Term Care Insurance Policy

#### Output
* output [LongTermCareInsurancePolicyWithIdModel](#longtermcareinsurancepolicywithidmodel)

### LongTermCareInsurancePolicies_PutByIdModel
Description: The operation updates a Long Term Care Insurance Policy.<br />
              Purpose: Allows for complete replacement of a Long Term Care Insurance Policy on a Fact Finder.


```js
naviplancentral_factfinder.LongTermCareInsurancePolicies_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Long Term Care Insurance Policy ID used to identify which Long Term Care Insurance Policy to update
  * model **required** [LongTermCareInsurancePolicyModel](#longtermcareinsurancepolicymodel)

#### Output
* output [LongTermCareInsurancePolicyWithIdModel](#longtermcareinsurancepolicywithidmodel)

### MajorPurchaseGoalTypes_GetByCountry
Description: This operation retrieves all Major Purchase Goal Types for the specified country.<br />
              Purpose: Provides access to the Major Purchase Goal Types including id and type description.


```js
naviplancentral_factfinder.MajorPurchaseGoalTypes_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Major Purchase Goal Types

#### Output
* output [MajorPurchaseGoalTypesModel](#majorpurchasegoaltypesmodel)

### MajorPurchaseGoalTypes_GetById
Description: This operation retrieves the Major Purchase Goal Type for the specified id.<br />
              Purpose: Provides access to the Major Purchase Goal Types including id and type description.


```js
naviplancentral_factfinder.MajorPurchaseGoalTypes_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of Major Purchase Goal Type used to retreive the Major Purchase Goal Type information

#### Output
* output [MajorPurchaseGoalTypeModel](#majorpurchasegoaltypemodel)

### MajorPurchaseGoals_GetMajorPurchaseGoalsByFactFinderIdByFactfinderid
Description: This operation retrieves all Major Purchases for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Major Purchases including description and amount.


```js
naviplancentral_factfinder.MajorPurchaseGoals_GetMajorPurchaseGoalsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Major Purchases

#### Output
* output [MajorPurchaseGoalsModel](#majorpurchasegoalsmodel)

### MajorPurchaseGoals_PostByModel
Description: The operation creates a Major Purchase.<br />
              Purpose: Allows for creation of Major Purchases on a Fact Finder.


```js
naviplancentral_factfinder.MajorPurchaseGoals_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [MajorPurchaseGoalModel](#majorpurchasegoalmodel)

#### Output
* output [MajorPurchaseGoalWithIdModel](#majorpurchasegoalwithidmodel)

### MajorPurchaseGoals_DeleteById
Description: The operation removes a Major Purchase tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Major Purchase from a Fact Finder.


```js
naviplancentral_factfinder.MajorPurchaseGoals_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Major Purchase ID used to identify which Major Purchase to remove

#### Output
*Output schema unknown*

### MajorPurchaseGoals_GetById
Description: This operation retrieves a single Major Purchase for the specified Major Purchase ID.<br />
              Purpose: Provides access to the Major Purchase including description and amount.


```js
naviplancentral_factfinder.MajorPurchaseGoals_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Major Purchase used to retreive the Major Purchase

#### Output
* output [MajorPurchaseGoalWithIdModel](#majorpurchasegoalwithidmodel)

### MajorPurchaseGoals_PutByIdModel
Description: The operation updates a Major Purchase.<br />
              Purpose: Allows for complete replacement of a Major Purchase on a Fact Finder.


```js
naviplancentral_factfinder.MajorPurchaseGoals_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Major Purchase ID used to identify which Major Purchase to update
  * model **required** [MajorPurchaseGoalModel](#majorpurchasegoalmodel)

#### Output
* output [MajorPurchaseGoalWithIdModel](#majorpurchasegoalwithidmodel)

### Presentation_GetAccountsByFactfinderidExternalsourceid
Description: This operation retrieves all current Accounts for the specified Fact Finder ID, as well as
                           all of the holdings and savings strategies belonging to those accounts.<br />
              Purpose: Provides access to the Accounts in a Fact Finder as well as any sub-entities belonging to them.


```js
naviplancentral_factfinder.Presentation_GetAccountsByFactfinderidExternalsourceid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Accounts
  * externalSourceId `string`: The external ID used to filter Accounts

#### Output
* output [AccountsWithSubEntitiesModel](#accountswithsubentitiesmodel)

### Presentation_GetDemographicOwnersByFactfinderid
Description: This operation retrieves owner values for the fact finder based on demographics data
              Purpose: Provides the list of valid options for owner, student, beneficiary, etc.


```js
naviplancentral_factfinder.Presentation_GetDemographicOwnersByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve owners.

#### Output
* output [OwnersModel](#ownersmodel)

### Presentation_GetDemographicRelationships
Description: This operation retrieves all relationship types relevant to demographics.<br />
              Purpose: Provides a list of relationship types organized by whether or not they can be defined as children.


```js
naviplancentral_factfinder.Presentation_GetDemographicRelationships(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RelationshipTypesModel](#relationshiptypesmodel)

### Presentation_GetIncomesByFactfinderid
Description: This operation retrieves all current Incomes for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Incomes in a Fact Finder, filtered by Incomes that are current.


```js
naviplancentral_factfinder.Presentation_GetIncomesByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Incomes

#### Output
* output [IncomesModel](#incomesmodel)

### Presentation_GetLiabilitiesByFactfinderid
Description: This operation retrieves all current Liabilities for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Liabilities in a Fact Finder, filtered by Liabilities that are current.


```js
naviplancentral_factfinder.Presentation_GetLiabilitiesByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Liabilities

#### Output
* output [LiabilitiesModel](#liabilitiesmodel)

### Presentation_GetLifeInsurancePoliciesByFactfinderid
Description: This operation retrieves all life insurance policies, including subaccounts if available, for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Life Insurance Policies in a Fact Finder.


```js
naviplancentral_factfinder.Presentation_GetLifeInsurancePoliciesByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Life Insurance Policies.

#### Output
* output [LifeInsurancePoliciesWithSubEntitiesModel](#lifeinsurancepolicieswithsubentitiesmodel)

### Presentation_GetPensionsByFactfinderid
Description: This operation retrieves all future Defined Benefit Pensions for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Pensions in a Fact Finder, filtered by Pensions that are in the future.


```js
naviplancentral_factfinder.Presentation_GetPensionsByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Pensions.

#### Output
* output [DefinedBenefitPensionsModel](#definedbenefitpensionsmodel)

### RealEstateAssets_GetRealEstateAssetsByFactFinderIdByFactfinderid
Description: This operation retrieves all Real Estate Assets for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Real Estate Assets including description and market value.


```js
naviplancentral_factfinder.RealEstateAssets_GetRealEstateAssetsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Real Estate Assets

#### Output
* output [RealEstateAssetsModel](#realestateassetsmodel)

### RealEstateAssets_PostByModel
Description: The operation creates a Real Estate Asset.<br />
              Purpose: Allows for creation of Real Estate Assets on a Fact Finder.


```js
naviplancentral_factfinder.RealEstateAssets_PostByModel({
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [RealEstateAssetModel](#realestateassetmodel)

#### Output
* output [RealEstateAssetWithIdModel](#realestateassetwithidmodel)

### RealEstateAssets_DeleteById
Description: The operation removes a Real Estate Asset tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Real Estate Asset from a Fact Finder.


```js
naviplancentral_factfinder.RealEstateAssets_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Real Estate Asset ID used to identify which Real Estate Asset to remove

#### Output
*Output schema unknown*

### RealEstateAssets_GetById
Description: This operation retrieves a single Real Estate Asset for the specified Real Estate Asset ID.<br />
              Purpose: Provides access to the Real Estate Asset including description and market value.


```js
naviplancentral_factfinder.RealEstateAssets_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Real Estate Asset used to retreive the Real Estate Asset

#### Output
* output [RealEstateAssetWithIdModel](#realestateassetwithidmodel)

### RealEstateAssets_PutByIdModel
Description: The operation updates a Real Estate Asset.<br />
              Purpose: Allows for complete replacement of a Real Estate Asset on a Fact Finder.


```js
naviplancentral_factfinder.RealEstateAssets_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0,
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Real Estate Asset ID used to identify which Real Estate Asset to update
  * model **required** [RealEstateAssetModel](#realestateassetmodel)

#### Output
* output [RealEstateAssetWithIdModel](#realestateassetwithidmodel)

### RetirementGoals_GetRetirementGoalsByFactFinderIdByFactfinderid
Description: This operation retrieves all Retirement Goals for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Retirement Goals including retirement date.


```js
naviplancentral_factfinder.RetirementGoals_GetRetirementGoalsByFactFinderIdByFactfinderid({
  "factFinderId": 0
}, context)
```

#### Input
* input `object`
  * factFinderId **required** `integer`: The ID of the Fact Finder used to retrieve Retirement Goals

#### Output
* output [RetirementGoalsModel](#retirementgoalsmodel)

### RetirementGoals_PostByModel
Description: The operation creates a Retirement Goal.<br />
              Purpose: Allows for creation of Retirement Goals on a Fact Finder.


```js
naviplancentral_factfinder.RetirementGoals_PostByModel({
  "model": {
    "factFinderId": 0
  }
}, context)
```

#### Input
* input `object`
  * model **required** [RetirementGoalModel](#retirementgoalmodel)

#### Output
* output [RetirementGoalWithIdModel](#retirementgoalwithidmodel)

### RetirementGoals_DeleteById
Description: The operation removes a Retirement Goal tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Retirement Goal from a Fact Finder.


```js
naviplancentral_factfinder.RetirementGoals_DeleteById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The Retirement Goal ID used to identify which Retirement Goal to remove

#### Output
*Output schema unknown*

### RetirementGoals_GetById
Description: This operation retrieves a single Retirement Goal for the specified Retirement Goal ID.<br />
              Purpose: Provides access to the Retirement Goal including retirement date.


```js
naviplancentral_factfinder.RetirementGoals_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Retirement Goal used to retreive the Retirement Goal

#### Output
* output [RetirementGoalWithIdModel](#retirementgoalwithidmodel)

### RetirementGoals_PutByIdModel
Description: The operation updates a Retirement Goal.<br />
              Purpose: Allows for complete replacement of a Retirement Goal on a Fact Finder.


```js
naviplancentral_factfinder.RetirementGoals_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderId": 0
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Retirement Goal ID used to identify which Retirement Goal to update
  * model **required** [RetirementGoalModel](#retirementgoalmodel)

#### Output
* output [RetirementGoalWithIdModel](#retirementgoalwithidmodel)

### RetirementGoals_GetRetirementExpensesByRetirementGoalIdByRetirementgoalid
Description: This operation retrieves all Retirement Goal Expenses for the specified Retirement Goal ID.<br />
              Purpose: Provides access to the Retirement Goal Expenses including description and amount.


```js
naviplancentral_factfinder.RetirementGoals_GetRetirementExpensesByRetirementGoalIdByRetirementgoalid({
  "retirementGoalId": 0
}, context)
```

#### Input
* input `object`
  * retirementGoalId **required** `integer`: The ID of the Retirement Goal used to retrieve Retirement Goal Expenses

#### Output
* output [RetirementExpensesModel](#retirementexpensesmodel)

### RetirementGoals_PostByRetirementgoalidModel
Description: The operation creates a Retirement Goal Expense.<br />
              Purpose: Allows for creation of Retirement Goal Expenses on a Fact Finder.


```js
naviplancentral_factfinder.RetirementGoals_PostByRetirementgoalidModel({
  "retirementGoalId": 0,
  "model": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * retirementGoalId **required** `integer`: The ID of the Retirement Goal to add the Retirement Goal Expense to
  * model **required** [RetirementExpenseModel](#retirementexpensemodel)

#### Output
* output [RetirementExpenseWithIdModel](#retirementexpensewithidmodel)

### RetirementGoals_DeleteByRetirementgoalidId
Description: The operation removes a Retirement Goal Expense tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Retirement Goal Expense from a Fact Finder.


```js
naviplancentral_factfinder.RetirementGoals_DeleteByRetirementgoalidId({
  "retirementGoalId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * retirementGoalId **required** `integer`: The Retirement Goal ID used to locate the Goal to delete the Retirement Goal Expense under
  * id **required** `integer`: The Retirement Goal Expense ID used to identify which Retirement Goal Expense to remove

#### Output
*Output schema unknown*

### RetirementGoals_GetRetirementExpenseByRetirementgoalidId
Description: This operation retrieves a single Retirement Goal Expense for the specified Retirement Goal Expense ID.<br />
              Purpose: Provides access to the Retirement Goal Expense including description and amount.


```js
naviplancentral_factfinder.RetirementGoals_GetRetirementExpenseByRetirementgoalidId({
  "retirementGoalId": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * retirementGoalId **required** `integer`: The ID of the Retirement Goal used to retrieve the Retirement Goal Expense
  * id **required** `integer`: The ID of the Retirement Goal Expense used to retreive the Retirement Goal Expense

#### Output
* output [RetirementExpenseWithIdModel](#retirementexpensewithidmodel)

### RetirementGoals_PutByRetirementgoalidIdModel
Description: The operation updates a Retirement Goal Expense.<br />
              Purpose: Allows for complete replacement of a Retirement Goal Expense on a Fact Finder.


```js
naviplancentral_factfinder.RetirementGoals_PutByRetirementgoalidIdModel({
  "retirementGoalId": 0,
  "id": 0,
  "model": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * retirementGoalId **required** `integer`: The Retirement Goal ID used to locate the Goal to update the Retirement Goal Expense under
  * id **required** `integer`: The existing Retirement Goal Expense ID used to identify which Retirement Goal Expense to update
  * model **required** [RetirementExpenseModel](#retirementexpensemodel)

#### Output
* output [RetirementExpenseWithIdModel](#retirementexpensewithidmodel)

### FactFinderServiceInformation_Get
Description: This operation retrieves information statistics for the current service.<br />
              Purpose: Provides access to Service Information.


```js
naviplancentral_factfinder.FactFinderServiceInformation_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServiceInformationModel](#serviceinformationmodel)

### StatesProvinces_GetByCountry
Description: This operation retrieves all States and Provinces for the specified country.<br />
              Purpose: Provides access to the States and Provinces.


```js
naviplancentral_factfinder.StatesProvinces_GetByCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter States and Provinces

#### Output
* output [StatesProvincesModel](#statesprovincesmodel)

### StatesProvinces_GetById
Description: This operation retrieves the States and Provinces for the specified id.<br />
              Purpose: Provides access to the States and Provinces.


```js
naviplancentral_factfinder.StatesProvinces_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the State or Province used to retreive the State or Province information

#### Output
* output [StateProvinceModel](#stateprovincemodel)



## Definitions

### AccountHoldingModel
* AccountHoldingModel `object`
  * costBasis `number`
  * cusip `string`
  * description **required** `string`
  * externalDestinationId `string`
  * marketValue `number`
  * symbol `string`
  * valuationDate `string`

### AccountHoldingWithIdModel
* AccountHoldingWithIdModel `object`
  * accountHoldingId `integer`
  * accountId `integer`
  * costBasis `number`
  * cusip `string`
  * description `string`
  * externalDestinationId `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * marketValue `number`
  * symbol `string`
  * valuationDate `string`

### AccountHoldingsModel
* AccountHoldingsModel `object`
  * holdings `array`
    * items [AccountHoldingWithIdModel](#accountholdingwithidmodel)

### AccountHoldingsWithoutIdModel
* AccountHoldingsWithoutIdModel `object`
  * holdings `array`
    * items [AccountHoldingModel](#accountholdingmodel)

### AccountModel
* AccountModel `object`
  * accountType `integer`
  * description **required** `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId **required** `integer`
  * lastUpdated `string`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint, Dependent, Other)
  * ownerDependentId `integer`

### AccountTypeModel
* AccountTypeModel `object`
  * allowedSavingsTypes `array`
    * items [SavingsTypeDomainObject](#savingstypedomainobject)
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### AccountTypesModel
* AccountTypesModel `object`
  * accountTypes `array`
    * items [AccountTypeModel](#accounttypemodel)

### AccountWithIdModel
* AccountWithIdModel `object`
  * accountId `integer`
  * accountType `integer`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId `integer`
  * lastUpdated `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint, Dependent, Other)
  * ownerDependentId `integer`

### AccountWithSubEntitiesModel
* AccountWithSubEntitiesModel `object`
  * accountId `integer`
  * accountType `integer`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId `integer`
  * holdings `array`
    * items [AccountHoldingWithIdModel](#accountholdingwithidmodel)
  * lastUpdated `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint, Dependent, Other)
  * ownerDependentId `integer`
  * savingsStrategies `array`
    * items [SavingsStrategyWithIdModel](#savingsstrategywithidmodel)

### AccountsModel
* AccountsModel `object`
  * accounts `array`
    * items [AccountWithIdModel](#accountwithidmodel)

### AccountsWithSubEntitiesModel
* AccountsWithSubEntitiesModel `object`
  * accounts `array`
    * items [AccountWithSubEntitiesModel](#accountwithsubentitiesmodel)

### ClientModel
* ClientModel `object`
  * clientId `integer`
  * message `string`
  * ownerUser `string`
  * planId `integer`
  * success `boolean`

### ClientsModel
* ClientsModel `object`
  * externalDestinationName `string`
  * factFinderId **required** `integer`
  * planAction **required** `string` (values: New, Duplicate, Project, Update)

### CriticalIllnessInsurancePoliciesModel
* CriticalIllnessInsurancePoliciesModel `object`
  * criticalIllnessInsurancePolicies `array`
    * items [CriticalIllnessInsurancePolicyWithIdModel](#criticalillnessinsurancepolicywithidmodel)

### CriticalIllnessInsurancePolicyModel
* CriticalIllnessInsurancePolicyModel `object`
  * benefit `number`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`

### CriticalIllnessInsurancePolicyTypeModel
* CriticalIllnessInsurancePolicyTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### CriticalIllnessInsurancePolicyTypesModel
* CriticalIllnessInsurancePolicyTypesModel `object`
  * insurancePolicyTypes `array`
    * items [CriticalIllnessInsurancePolicyTypeModel](#criticalillnessinsurancepolicytypemodel)

### CriticalIllnessInsurancePolicyWithIdModel
* CriticalIllnessInsurancePolicyWithIdModel `object`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient)
  * links `array`
    * items [ObjectLink](#objectlink)
  * policyType `integer`
  * premium `number`

### DefinedBenefitPensionModel
* DefinedBenefitPensionModel `object`
  * description **required** `string`
  * estimatedAmount `number`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * member `string` (values: Client, CoClient)
  * startDate `string`

### DefinedBenefitPensionWithIdModel
* DefinedBenefitPensionWithIdModel `object`
  * definedBenefitPensionId `integer`
  * description `string`
  * estimatedAmount `number`
  * externalDestinationId `string`
  * factFinderId `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * member `string` (values: Client, CoClient)
  * startDate `string`

### DefinedBenefitPensionsModel
* DefinedBenefitPensionsModel `object`
  * definedBenefitPensions `array`
    * items [DefinedBenefitPensionWithIdModel](#definedbenefitpensionwithidmodel)

### DemographicsDependentModel
* DemographicsDependentModel `object`
  * birthDate **required** `string`
  * dependentOf **required** `string` (values: Client, CoClient, Joint, Other)
  * externalDestinationId `string`
  * firstName **required** `string`
  * lastName **required** `string`
  * relationship **required** `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### DemographicsDependentWithIdModel
* DemographicsDependentWithIdModel `object`
  * birthDate `string`
  * demographicsId `integer`
  * dependentId `integer`
  * dependentOf `string` (values: Client, CoClient, Joint, Other)
  * externalDestinationId `string`
  * firstName `string`
  * lastName `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * relationship `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### DemographicsDependentsModel
* DemographicsDependentsModel `object`
  * dependents `array`
    * items [DemographicsDependentWithIdModel](#demographicsdependentwithidmodel)

### DemographicsModel
* DemographicsModel `object`
  * city **required** `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId **required** `integer`
  * head1 **required** [FamilyHeadModel](#familyheadmodel)
  * head2 [FamilyHeadModel](#familyheadmodel)
  * jointAnalysis **required** `boolean`
  * state **required** `integer`

### DemographicsWithIdModel
* DemographicsWithIdModel `object`
  * city `string`
  * created `string`
  * demographicsId `integer`
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId `integer`
  * head1 [FamilyHeadModel](#familyheadmodel)
  * head2 [FamilyHeadModel](#familyheadmodel)
  * jointAnalysis `boolean`
  * links `array`
    * items [ObjectLink](#objectlink)
  * lockRetirement `boolean`
  * state `integer`

### DisabilityInsurancePoliciesModel
* DisabilityInsurancePoliciesModel `object`
  * disabilityInsurancePolicies `array`
    * items [DisabilityInsurancePolicyWithIdModel](#disabilityinsurancepolicywithidmodel)

### DisabilityInsurancePolicyModel
* DisabilityInsurancePolicyModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * benefitType `string` (values: Dollar, Percent)
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`
  * premiumFrequency `integer`

### DisabilityInsurancePolicyTypeModel
* DisabilityInsurancePolicyTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### DisabilityInsurancePolicyTypesModel
* DisabilityInsurancePolicyTypesModel `object`
  * insurancePolicyTypes `array`
    * items [DisabilityInsurancePolicyTypeModel](#disabilityinsurancepolicytypemodel)

### DisabilityInsurancePolicyWithIdModel
* DisabilityInsurancePolicyWithIdModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * benefitType `string` (values: Dollar, Percent)
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient)
  * links `array`
    * items [ObjectLink](#objectlink)
  * policyType `integer`
  * premium `number`
  * premiumFrequency `integer`

### EducationExpenseModel
* EducationExpenseModel `object`
  * annualCost `number`
  * externalDestinationId `string`
  * member `string` (values: Client, CoClient, Dependent)
  * memberDependentId `integer`
  * startYear `string`
  * years `integer`

### EducationExpenseWithIdModel
* EducationExpenseWithIdModel `object`
  * annualCost `number`
  * educationExpenseId `integer`
  * educationGoalId `integer`
  * externalDestinationId `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * member `string` (values: Client, CoClient, Dependent)
  * memberDependentId `integer`
  * startYear `string`
  * years `integer`

### EducationExpensesModel
* EducationExpensesModel `object`
  * educationExpenses `array`
    * items [EducationExpenseWithIdModel](#educationexpensewithidmodel)

### EducationGoalModel
* EducationGoalModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * projectedCost `number`

### EducationGoalWithIdModel
* EducationGoalWithIdModel `object`
  * description `string`
  * educationGoalId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * projectedCost `number`

### EducationGoalsModel
* EducationGoalsModel `object`
  * educationGoals `array`
    * items [EducationGoalWithIdModel](#educationgoalwithidmodel)

### ExpenseModel
* ExpenseModel `object`
  * annualPeriod `integer`
  * description **required** `string`
  * endDate `string`
  * expenseAmount `number`
  * expenseTypeId `integer`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * member `string` (values: Client, CoClient, Joint)
  * startDate `string`

### ExpenseTypeModel
* ExpenseTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### ExpenseTypesModel
* ExpenseTypesModel `object`
  * expenseTypes `array`
    * items [ExpenseTypeModel](#expensetypemodel)

### ExpenseWithIdModel
* ExpenseWithIdModel `object`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * expenseAmount `number`
  * expenseId `integer`
  * expenseTypeId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * member `string` (values: Client, CoClient, Joint)
  * startDate `string`

### ExpensesModel
* ExpensesModel `object`
  * expenses `array`
    * items [ExpenseWithIdModel](#expensewithidmodel)

### FactFinderEntityModel
* FactFinderEntityModel `object`
  * householdId **required** `integer`
  * modules `array`
    * items `string` (values: Demographics, Assets, Liabilities, Incomes, Expenses, Insurance, Retirement, Education, MajorPurchase)
  * planLevel `string` (values: Level2, Level1)

### FactFinderModel
* FactFinderModel `object`
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted, Canceled, Draft, Deleted)

### FactFinderModuleModel
* FactFinderModuleModel `object`
  * available `boolean`
  * moduleName **required** `string` (values: Demographics, Assets, Liabilities, Incomes, Expenses, Insurance, Retirement, Education, MajorPurchase)
  * visited `boolean`

### FactFinderModuleWithIdModel
* FactFinderModuleWithIdModel `object`
  * available `boolean`
  * factFinderId `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * moduleId `integer`
  * moduleName `string` (values: Demographics, Assets, Liabilities, Incomes, Expenses, Insurance, Retirement, Education, MajorPurchase)
  * visited `boolean`

### FactFinderModulesModel
* FactFinderModulesModel `object`
  * factFinderModules `array`
    * items [FactFinderModuleWithIdModel](#factfindermodulewithidmodel)

### FactFinderPopulatableEntityModel
* FactFinderPopulatableEntityModel `object`
  * householdId **required** `integer`
  * modules `array`
    * items `string` (values: Demographics, Assets, Liabilities, Incomes, Expenses, Insurance, Retirement, Education, MajorPurchase)
  * planId `integer`
  * planLevel `string` (values: Level2, Level1)

### FactFinderPopulationModel
* FactFinderPopulationModel `object`
  * planId `integer`

### FactFinderSnapshotWithIdModel
* FactFinderSnapshotWithIdModel `object`
  * created `string`
  * factFinderData [IFactFinderSnapshotDomainObject](#ifactfindersnapshotdomainobject)
  * factFinderId `integer`
  * factFinderStatus `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted, Canceled, Draft, Deleted)
  * snapshotId `integer`

### FactFinderSnapshotsModel
* FactFinderSnapshotsModel `object`
  * snapshots `array`
    * items [FactFinderSnapshotWithIdModel](#factfindersnapshotwithidmodel)

### FactFinderWithIdModel
* FactFinderWithIdModel `object`
  * countryCode `string` (values: UnitedStates, Canada)
  * created `string`
  * factFinderId `integer`
  * householdId `integer`
  * lastStatusUpdate `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * modules [FactFinderModulesModel](#factfindermodulesmodel)
  * planId `integer`
  * planLevel `string` (values: Level2, Level1)
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted, Canceled, Draft, Deleted)

### FamilyHeadModel
* FamilyHeadModel `object`
  * alreadyRetired **required** `boolean`
  * birthDate **required** `string`
  * externalDestinationId `string`
  * firstName **required** `string`
  * gender **required** `string` (values: Male, Female, None)
  * lastName **required** `string`
  * taxFilingStatus **required** `integer`

### FilingStatusTypeModel
* FilingStatusTypeModel `object`
  * filingStatusTypeId `integer`
  * filingStatusTypeName `string`
  * hasJointDependent `boolean`
  * links `array`
    * items [ObjectLink](#objectlink)
  * partnerStatuses `array`
    * items `integer`
  * validForSingleAnalysis `boolean`

### FilingStatusTypesModel
* FilingStatusTypesModel `object`
  * filingStatusTypes `array`
    * items [FilingStatusTypeModel](#filingstatustypemodel)

### FrequencyTypeModel
* FrequencyTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### FrequencyTypesModel
* FrequencyTypesModel `object`
  * frequencyTypes `array`
    * items [FrequencyTypeModel](#frequencytypemodel)

### IAccountHoldingDomainObject
* IAccountHoldingDomainObject `object`
  * accountHoldingId `integer`
  * accountId `integer`
  * costBasis `number`
  * cusip `string`
  * description `string`
  * externalDestinationId `string`
  * heldAway `boolean`
  * marketValue `number`
  * symbol `string`
  * valuationDate `string`

### IAccountSavingsStrategyDomainObject
* IAccountSavingsStrategyDomainObject `object`
  * accountId `integer`
  * employerSavingsAmount `number`
  * employerSavingsAmountType `string` (values: Dollar, Percent, Max)
  * endDate `string`
  * externalDestinationId `string`
  * frequencyId `integer`
  * mandatoryAmount `number`
  * mandatoryAmountType `string` (values: Dollar, Percent, Max)
  * postTaxSavingsAmount `number`
  * postTaxSavingsAmountType `string` (values: Dollar, Percent, Max)
  * preTaxSavingsAmount `number`
  * preTaxSavingsAmountType `string` (values: Dollar, Percent, Max)
  * savingsStrategyId `integer`
  * startDate `string`

### IAccountWithSubEntitiesDomainObject
* IAccountWithSubEntitiesDomainObject `object`
  * accountHoldings `array`
    * items [IAccountHoldingDomainObject](#iaccountholdingdomainobject)
  * accountId `integer`
  * accountType `integer`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId `integer`
  * lastUpdated `string`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint, Dependent, Other)
  * ownerDependentId `integer`
  * savingsStrategies `array`
    * items [IAccountSavingsStrategyDomainObject](#iaccountsavingsstrategydomainobject)

### ICriticalIllnessInsurancePolicyDomainObject
* ICriticalIllnessInsurancePolicyDomainObject `object`
  * benefit `number`
  * criticalIllnessInsurancePolicyId `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`

### IDemographicsDependentDomainObject
* IDemographicsDependentDomainObject `object`
  * birthDate `string`
  * demographicsId `integer`
  * dependentId `integer`
  * dependentOf `string` (values: Client, CoClient, Joint, Other)
  * externalDestinationId `string`
  * firstName `string`
  * lastName `string`
  * relationship `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### IDemographicsWithDependentsDomainObject
* IDemographicsWithDependentsDomainObject `object`
  * city `string`
  * created `string`
  * demographicsId `integer`
  * dependents `array`
    * items [IDemographicsDependentDomainObject](#idemographicsdependentdomainobject)
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId `integer`
  * head1 [IFamilyHeadDomainObject](#ifamilyheaddomainobject)
  * head2 [IFamilyHeadDomainObject](#ifamilyheaddomainobject)
  * jointAnalysis `boolean`
  * lockRetirement `boolean`
  * state `integer`

### IDisabilityInsurancePolicyDomainObject
* IDisabilityInsurancePolicyDomainObject `object`
  * benefit `number`
  * benefitFrequency `integer`
  * benefitType `string` (values: Dollar, Percent)
  * description `string`
  * disabilityInsurancePolicyId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`
  * premiumFrequency `integer`

### IEducationExpenseDomainObject
* IEducationExpenseDomainObject `object`
  * annualCost `number`
  * educationExpenseId `integer`
  * educationGoalId `integer`
  * externalDestinationId `string`
  * member `string` (values: Client, CoClient, Dependent)
  * memberDependentId `integer`
  * startYear `string`
  * years `integer`

### IEducationGoalWithExpensesDomainObject
* IEducationGoalWithExpensesDomainObject `object`
  * description `string`
  * educationExpenses `array`
    * items [IEducationExpenseDomainObject](#ieducationexpensedomainobject)
  * educationGoalId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * projectedCost `number`

### IExpenseDomainObject
* IExpenseDomainObject `object`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * expenseAmount `number`
  * expenseId `integer`
  * expenseTypeId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * member `string` (values: Client, CoClient, Joint)
  * startDate `string`

### IFactFinderDefinedBenefitPensionDomainObject
* IFactFinderDefinedBenefitPensionDomainObject `object`
  * definedBenefitPensionId `integer`
  * description `string`
  * estimatedAmount `number`
  * externalDestinationId `string`
  * factFinderId `integer`
  * member `string` (values: Client, CoClient)
  * startDate `string`

### IFactFinderLiabilityDomainObject
* IFactFinderLiabilityDomainObject `object`
  * balance `number`
  * balanceAsOfDate `string`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId `integer`
  * frequency `integer`
  * importSource `string`
  * interestRate `number`
  * lastUpdated `string`
  * liabilityId `integer`
  * liabilityType `integer`
  * loanDate `string`
  * originalPrincipal `number`
  * owner `string` (values: Client, CoClient, Joint)
  * payment `number`
  * paymentType `string` (values: InterestOnly, PrincipalAndInterest, SetPrincipal, LastPeriod)

### IFactFinderLifestyleAssetDomainObject
* IFactFinderLifestyleAssetDomainObject `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * lifestyleAssetId `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * type `integer`

### IFactFinderSnapshotDomainObject
* IFactFinderSnapshotDomainObject `object`
  * accounts `array`
    * items [IAccountWithSubEntitiesDomainObject](#iaccountwithsubentitiesdomainobject)
  * criticalIllnessInsurancePolicies `array`
    * items [ICriticalIllnessInsurancePolicyDomainObject](#icriticalillnessinsurancepolicydomainobject)
  * definedBenefitPensions `array`
    * items [IFactFinderDefinedBenefitPensionDomainObject](#ifactfinderdefinedbenefitpensiondomainobject)
  * demographics [IDemographicsWithDependentsDomainObject](#idemographicswithdependentsdomainobject)
  * disabilityInsurancePolicies `array`
    * items [IDisabilityInsurancePolicyDomainObject](#idisabilityinsurancepolicydomainobject)
  * educationGoals `array`
    * items [IEducationGoalWithExpensesDomainObject](#ieducationgoalwithexpensesdomainobject)
  * expenses `array`
    * items [IExpenseDomainObject](#iexpensedomainobject)
  * incomes `array`
    * items [IIncomeDomainObject](#iincomedomainobject)
  * liabilities `array`
    * items [IFactFinderLiabilityDomainObject](#ifactfinderliabilitydomainobject)
  * lifeInsurancePolicies `array`
    * items [ILifeInsurancePolicyDomainObject](#ilifeinsurancepolicydomainobject)
  * lifestyleAssets `array`
    * items [IFactFinderLifestyleAssetDomainObject](#ifactfinderlifestyleassetdomainobject)
  * longTermCareInsurancePolicies `array`
    * items [ILongTermCareInsurancePolicyDomainObject](#ilongtermcareinsurancepolicydomainobject)
  * majorPurchaseGoals `array`
    * items [IMajorPurchaseGoalDomainObject](#imajorpurchasegoaldomainobject)
  * planYear `integer`
  * realEstateAssets `array`
    * items [IRealEstateAssetDomainObject](#irealestateassetdomainobject)
  * retirementGoal [IRetirementGoalWithExpensesDomainObject](#iretirementgoalwithexpensesdomainobject)

### IFamilyHeadDomainObject
* IFamilyHeadDomainObject `object`
  * alreadyRetired `boolean`
  * birthDate `string`
  * externalDestinationId `string`
  * firstName `string`
  * gender `string` (values: Male, Female, None)
  * lastName `string`
  * taxFilingStatus `integer`

### IIncomeDomainObject
* IIncomeDomainObject `object`
  * annualAmount `number`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * incomeId `integer`
  * incomeTypeId `integer`
  * owner `string` (values: Client, CoClient)
  * startDate `string`

### ILifeInsurancePolicyDomainObject
* ILifeInsurancePolicyDomainObject `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * generalAccountMarketValue `number`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * lifeInsurancePolicyId `integer`
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`
  * subaccounts `array`
    * items [LifeInsurancePolicySubaccountDomainObject](#lifeinsurancepolicysubaccountdomainobject)

### ILongTermCareInsurancePolicyDomainObject
* ILongTermCareInsurancePolicyDomainObject `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insured `string` (values: Client, CoClient)
  * longTermCareInsurancePolicyId `integer`
  * premium `number`
  * premiumFrequency `integer`

### IMajorPurchaseGoalDomainObject
* IMajorPurchaseGoalDomainObject `object`
  * amount `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * majorPurchaseGoalId `integer`
  * majorPurchaseGoalTypeId `integer`
  * member `string` (values: Client, CoClient, Joint)
  * targetDate `string`

### IRealEstateAssetDomainObject
* IRealEstateAssetDomainObject `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * realEstateAssetId `integer`
  * rentalIncome `number`

### IRetirementExpenseDomainObject
* IRetirementExpenseDomainObject `object`
  * amount `number`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * frequency `integer`
  * member `string` (values: Client, CoClient, Joint)
  * retirementExpenseId `integer`
  * retirementGoalId `integer`
  * startDate `string`

### IRetirementGoalWithExpensesDomainObject
* IRetirementGoalWithExpensesDomainObject `object`
  * externalDestinationId `string`
  * factFinderId `integer`
  * head1RetirementDate `string`
  * head2RetirementDate `string`
  * retirementExpenses `array`
    * items [IRetirementExpenseDomainObject](#iretirementexpensedomainobject)
  * retirementGoalId `integer`

### IncomeModel
* IncomeModel `object`
  * annualAmount `number`
  * description **required** `string`
  * endDate `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * incomeTypeId `integer`
  * owner `string` (values: Client, CoClient)
  * startDate `string`

### IncomeTypeModel
* IncomeTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### IncomeTypesModel
* IncomeTypesModel `object`
  * incomeTypes `array`
    * items [IncomeTypeModel](#incometypemodel)

### IncomeWithIdModel
* IncomeWithIdModel `object`
  * annualAmount `number`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * incomeId `integer`
  * incomeTypeId `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * owner `string` (values: Client, CoClient)
  * startDate `string`

### IncomesModel
* IncomesModel `object`
  * incomes `array`
    * items [IncomeWithIdModel](#incomewithidmodel)

### LiabilitiesModel
* LiabilitiesModel `object`
  * liabilities `array`
    * items [LiabilityWithIdModel](#liabilitywithidmodel)

### LiabilityModel
* LiabilityModel `object`
  * balance `number`
  * balanceAsOfDate `string`
  * description **required** `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * interestRate `number`
  * lastUpdated `string`
  * liabilityType `integer`
  * loanDate `string`
  * originalPrincipal `number`
  * owner `string` (values: Client, CoClient, Joint)
  * payment `number`
  * paymentType `string` (values: InterestOnly, PrincipalAndInterest, SetPrincipal, LastPeriod)

### LiabilityTypeModel
* LiabilityTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### LiabilityTypesModel
* LiabilityTypesModel `object`
  * liabilityTypes `array`
    * items [LiabilityTypeModel](#liabilitytypemodel)

### LiabilityWithIdModel
* LiabilityWithIdModel `object`
  * balance `number`
  * balanceAsOfDate `string`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId `integer`
  * frequency `integer`
  * interestRate `number`
  * lastUpdated `string`
  * liabilityId `integer`
  * liabilityType `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * loanDate `string`
  * originalPrincipal `number`
  * owner `string` (values: Client, CoClient, Joint)
  * payment `number`
  * paymentType `string` (values: InterestOnly, PrincipalAndInterest, SetPrincipal, LastPeriod)

### LifeInsurancePoliciesModel
* LifeInsurancePoliciesModel `object`
  * lifeInsurancePolicies `array`
    * items [LifeInsurancePolicyWithIdModel](#lifeinsurancepolicywithidmodel)

### LifeInsurancePoliciesWithSubEntitiesModel
* LifeInsurancePoliciesWithSubEntitiesModel `object`
  * lifeInsurancePolicies `array`
    * items [LifeInsurancePolicyWithSubEntitiesModel](#lifeinsurancepolicywithsubentitiesmodel)

### LifeInsurancePolicyModel
* LifeInsurancePolicyModel `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * generalAccountMarketValue `number`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`

### LifeInsurancePolicySubaccountDomainObject
* LifeInsurancePolicySubaccountDomainObject `object`
  * description `string`
  * externalDestinationId `string`
  * lifeInsurancePolicyId `integer`
  * lifeInsurancePolicySubaccountId `integer`
  * marketValue `number`
  * symbol `string`

### LifeInsurancePolicySubaccountModel
* LifeInsurancePolicySubaccountModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * marketValue `number`
  * symbol `string`

### LifeInsurancePolicySubaccountWithIdModel
* LifeInsurancePolicySubaccountWithIdModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * lifeInsurancePolicyId `integer`
  * lifeInsurancePolicySubaccountId `integer`
  * marketValue `number`
  * symbol `string`

### LifeInsurancePolicySubaccountsModel
* LifeInsurancePolicySubaccountsModel `object`
  * lifeInsurancePolicySubaccounts `array`
    * items [LifeInsurancePolicySubaccountWithIdModel](#lifeinsurancepolicysubaccountwithidmodel)

### LifeInsurancePolicyTypeModel
* LifeInsurancePolicyTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### LifeInsurancePolicyTypesModel
* LifeInsurancePolicyTypesModel `object`
  * insurancePolicyTypes `array`
    * items [LifeInsurancePolicyTypeModel](#lifeinsurancepolicytypemodel)

### LifeInsurancePolicyWithIdModel
* LifeInsurancePolicyWithIdModel `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * generalAccountMarketValue `number`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * links `array`
    * items [ObjectLink](#objectlink)
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`

### LifeInsurancePolicyWithSubEntitiesModel
* LifeInsurancePolicyWithSubEntitiesModel `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * generalAccountMarketValue `number`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * links `array`
    * items [ObjectLink](#objectlink)
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`
  * subaccounts `array`
    * items [LifeInsurancePolicySubaccountWithIdModel](#lifeinsurancepolicysubaccountwithidmodel)

### LifestyleAssetModel
* LifestyleAssetModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * type `integer`

### LifestyleAssetTypeModel
* LifestyleAssetTypeModel `object`
  * id `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * name `string`

### LifestyleAssetTypesModel
* LifestyleAssetTypesModel `object`
  * lifestyleAssetTypes `array`
    * items [LifestyleAssetTypeModel](#lifestyleassettypemodel)

### LifestyleAssetWithIdModel
* LifestyleAssetWithIdModel `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * lifestyleAssetId `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * type `integer`

### LifestyleAssetsModel
* LifestyleAssetsModel `object`
  * lifestyleAssets `array`
    * items [LifestyleAssetWithIdModel](#lifestyleassetwithidmodel)

### LongTermCareInsurancePoliciesModel
* LongTermCareInsurancePoliciesModel `object`
  * longTermCareInsurancePolicies `array`
    * items [LongTermCareInsurancePolicyWithIdModel](#longtermcareinsurancepolicywithidmodel)

### LongTermCareInsurancePolicyModel
* LongTermCareInsurancePolicyModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * insured `string` (values: Client, CoClient)
  * premium `number`
  * premiumFrequency `integer`

### LongTermCareInsurancePolicyWithIdModel
* LongTermCareInsurancePolicyWithIdModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient)
  * links `array`
    * items [ObjectLink](#objectlink)
  * premium `number`
  * premiumFrequency `integer`

### MajorPurchaseGoalModel
* MajorPurchaseGoalModel `object`
  * amount `number`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * majorPurchaseGoalTypeId `integer`
  * member `string` (values: Client, CoClient, Joint)
  * targetDate `string`

### MajorPurchaseGoalTypeModel
* MajorPurchaseGoalTypeModel `object`
  * description `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * majorPurchaseGoalTypeId `integer`

### MajorPurchaseGoalTypesModel
* MajorPurchaseGoalTypesModel `object`
  * majorPurchaseGoalTypes `array`
    * items [MajorPurchaseGoalTypeModel](#majorpurchasegoaltypemodel)

### MajorPurchaseGoalWithIdModel
* MajorPurchaseGoalWithIdModel `object`
  * amount `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * majorPurchaseGoalId `integer`
  * majorPurchaseGoalTypeId `integer`
  * member `string` (values: Client, CoClient, Joint)
  * targetDate `string`

### MajorPurchaseGoalsModel
* MajorPurchaseGoalsModel `object`
  * majorPurchaseGoals `array`
    * items [MajorPurchaseGoalWithIdModel](#majorpurchasegoalwithidmodel)

### Object
* Object `object`

### ObjectLink
* ObjectLink `object`
  * href `string`
  * rel `string`

### OwnerModel
* OwnerModel `object`
  * displayName `string`
  * owner `string`
  * ownerDependentId `integer`

### OwnersModel
* OwnersModel `object`
  * owners `array`
    * items [OwnerModel](#ownermodel)

### RealEstateAssetModel
* RealEstateAssetModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * rentalIncome `number`

### RealEstateAssetWithIdModel
* RealEstateAssetWithIdModel `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * realEstateAssetId `integer`
  * rentalIncome `number`

### RealEstateAssetsModel
* RealEstateAssetsModel `object`
  * realEstateAssets `array`
    * items [RealEstateAssetWithIdModel](#realestateassetwithidmodel)

### RelationshipTypeModel
* RelationshipTypeModel `object`
  * id `integer`
  * isChildType `boolean`
  * relationshipType `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### RelationshipTypesModel
* RelationshipTypesModel `object`
  * relationshipTypes `array`
    * items [RelationshipTypeModel](#relationshiptypemodel)

### RetirementExpenseModel
* RetirementExpenseModel `object`
  * amount `number`
  * annualPeriod `integer`
  * description **required** `string`
  * endDate `string`
  * externalDestinationId `string`
  * frequency `integer`
  * member `string` (values: Client, CoClient, Joint)
  * startDate `string`

### RetirementExpenseWithIdModel
* RetirementExpenseWithIdModel `object`
  * amount `number`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * frequency `integer`
  * links `array`
    * items [ObjectLink](#objectlink)
  * member `string` (values: Client, CoClient, Joint)
  * retirementExpenseId `integer`
  * retirementGoalId `integer`
  * startDate `string`

### RetirementExpensesModel
* RetirementExpensesModel `object`
  * retirementExpenses `array`
    * items [RetirementExpenseWithIdModel](#retirementexpensewithidmodel)

### RetirementGoalModel
* RetirementGoalModel `object`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * head1RetirementDate `string`
  * head2RetirementDate `string`

### RetirementGoalWithIdModel
* RetirementGoalWithIdModel `object`
  * externalDestinationId `string`
  * factFinderId `integer`
  * head1RetirementDate `string`
  * head2RetirementDate `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * retirementGoalId `integer`

### RetirementGoalsModel
* RetirementGoalsModel `object`
  * retirementGoals `array`
    * items [RetirementGoalWithIdModel](#retirementgoalwithidmodel)

### SavingsStrategiesModel
* SavingsStrategiesModel `object`
  * savingsStrategies `array`
    * items [SavingsStrategyWithIdModel](#savingsstrategywithidmodel)

### SavingsStrategyModel
* SavingsStrategyModel `object`
  * employerSavingsAmount `number`
  * employerSavingsAmountType `string` (values: Dollar, Percent, Max)
  * endDate `string`
  * externalDestinationId `string`
  * frequencyId `integer`
  * mandatoryAmount `number`
  * mandatoryAmountType `string` (values: Dollar, Percent, Max)
  * postTaxSavingsAmount `number`
  * postTaxSavingsAmountType `string` (values: Dollar, Percent, Max)
  * preTaxSavingsAmount `number`
  * preTaxSavingsAmountType `string` (values: Dollar, Percent, Max)
  * startDate `string`

### SavingsStrategyWithIdModel
* SavingsStrategyWithIdModel `object`
  * accountId `integer`
  * employerSavingsAmount `number`
  * employerSavingsAmountType `string` (values: Dollar, Percent, Max)
  * endDate `string`
  * externalDestinationId `string`
  * frequencyId `integer`
  * mandatoryAmount `number`
  * mandatoryAmountType `string` (values: Dollar, Percent, Max)
  * postTaxSavingsAmount `number`
  * postTaxSavingsAmountType `string` (values: Dollar, Percent, Max)
  * preTaxSavingsAmount `number`
  * preTaxSavingsAmountType `string` (values: Dollar, Percent, Max)
  * savingsStrategyId `integer`
  * startDate `string`

### SavingsTypeDomainObject
* SavingsTypeDomainObject `object`
  * typeName `string` (values: PostTaxSavings, PreTaxSavings, EmployerSavings, MandatorySavings)
  * validAmountTypes `array`
    * items `string` (values: Dollar, Percent, Max)

### ServiceInformationModel
* ServiceInformationModel `object`
  * name `string`
  * schemaVersion `integer`
  * serviceVersion `string`
  * status `string`

### StateProvinceModel
* StateProvinceModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * stateProvinceId `integer`
  * stateProvinceName `string`

### StatesProvincesModel
* StatesProvincesModel `object`
  * statesProvinces `array`
    * items [StateProvinceModel](#stateprovincemodel)


