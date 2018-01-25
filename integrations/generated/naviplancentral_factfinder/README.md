# @datafire/naviplancentral_factfinder

Client library for Advicent.FactFinderService

## Installation and Usage
```bash
npm install --save @datafire/naviplancentral_factfinder
```
```js
let naviplancentral_factfinder = require('@datafire/naviplancentral_factfinder').create();

naviplancentral_factfinder.RetirementGoals_GetRetirementGoalsByFactFinderIdByFactfinderid({}).then(data => {
  console.log(data);
});
```

## Description

An API for accessing the Narrator Fact Finder.

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
* output [Advicent.FactFinderService.Models.AccountTypesModel](#advicent.factfinderservice.models.accounttypesmodel)

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
* output [Advicent.FactFinderService.Models.AccountTypeModel](#advicent.factfinderservice.models.accounttypemodel)

### Accounts_GetAccountsByFactFinderIdByFactfinderidExternalsourceid
Description: This operation retrieves all Accounts for the specified Fact Finder ID and/or external source ID.<br />
              Purpose: Provides access to the Account information including description and market value.


```js
naviplancentral_factfinder.Accounts_GetAccountsByFactFinderIdByFactfinderidExternalsourceid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Accounts
  * externalSourceId `string`: The external ID used to filter Accounts

#### Output
* output [Advicent.FactFinderService.Models.AccountsModel](#advicent.factfinderservice.models.accountsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.AccountModel](#advicent.factfinderservice.models.accountmodel)

#### Output
* output [Advicent.FactFinderService.Models.AccountWithIdModel](#advicent.factfinderservice.models.accountwithidmodel)

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
  * accountId **required** `integer`: The ID of the Account used to retreive the Account Holding data
  * id **required** `integer`: The ID of the Account Holding used to retreive the Account Holding data

#### Output
* output [Advicent.FactFinderService.Models.AccountHoldingWithIdModel](#advicent.factfinderservice.models.accountholdingwithidmodel)

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
  * id **required** `integer`: The ID of the Account used to retreive the Account data

#### Output
* output [Advicent.FactFinderService.Models.AccountWithIdModel](#advicent.factfinderservice.models.accountwithidmodel)

### Accounts_PutByIdModel
Description: The operation updates an Account.<br />
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
  * model **required** [Advicent.FactFinderService.Models.AccountModel](#advicent.factfinderservice.models.accountmodel)

#### Output
* output [Advicent.FactFinderService.Models.AccountWithIdModel](#advicent.factfinderservice.models.accountwithidmodel)

### Clients_PostByModel
Description: This operation submits the Fact Finder data to an external system.<br />
              Purpose: Allows Fact Finder data to be persisted in another system for that system's consumption and use.


```js
naviplancentral_factfinder.Clients_PostByModel({
  "model": {
    "factFinderId": 0,
    "externalSystem": "",
    "planAction": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [Advicent.FactFinderService.Models.ClientsModel](#advicent.factfinderservice.models.clientsmodel)

#### Output
* output [Advicent.FactFinderService.Models.ClientModel](#advicent.factfinderservice.models.clientmodel)

### CriticalIllnessInsurancePolicies_GetCriticalIllnessInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Critical Illness Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Critical Illness Insurance Policies including description and policy type.


```js
naviplancentral_factfinder.CriticalIllnessInsurancePolicies_GetCriticalIllnessInsurancePoliciesByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Critical Illness Insurance Policies

#### Output
* output [Advicent.FactFinderService.Models.CriticalIllnessInsurancePoliciesModel](#advicent.factfinderservice.models.criticalillnessinsurancepoliciesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyWithIdModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicywithidmodel)

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
* output [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyWithIdModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicywithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyWithIdModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicywithidmodel)

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
* output [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypesModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicytypesmodel)

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
* output [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypeModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicytypemodel)

### DefinedBenefitPensions_GetDefinedBenefitPensionsByFactFinderIdByFactfinderid
Description: This operation retrieves all Defined Benefit Pensions for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Defined Benefit Pensions including description and start date.


```js
naviplancentral_factfinder.DefinedBenefitPensions_GetDefinedBenefitPensionsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Defined Benefit Pensions

#### Output
* output [Advicent.FactFinderService.Models.DefinedBenefitPensionsModel](#advicent.factfinderservice.models.definedbenefitpensionsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DefinedBenefitPensionModel](#advicent.factfinderservice.models.definedbenefitpensionmodel)

#### Output
* output [System.Object](#system.object)

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
* output [System.Object](#system.object)

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
* output [Advicent.FactFinderService.Models.DefinedBenefitPensionWithIdModel](#advicent.factfinderservice.models.definedbenefitpensionwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DefinedBenefitPensionModel](#advicent.factfinderservice.models.definedbenefitpensionmodel)

#### Output
* output [Advicent.FactFinderService.Models.DefinedBenefitPensionModel](#advicent.factfinderservice.models.definedbenefitpensionmodel)

### Demographics_GetDemographicsByFactFinderIdByFactfinderid
Description: This operation retrieves all Demographic information for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Demographic information including city and state.


```js
naviplancentral_factfinder.Demographics_GetDemographicsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Demographic information

#### Output
* output [Advicent.FactFinderService.Models.DemographicsWithIdModel](#advicent.factfinderservice.models.demographicswithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DemographicsModel](#advicent.factfinderservice.models.demographicsmodel)

#### Output
* output [Advicent.FactFinderService.Models.DemographicsWithIdModel](#advicent.factfinderservice.models.demographicswithidmodel)

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
* output [Advicent.FactFinderService.Models.DemographicsDependentsModel](#advicent.factfinderservice.models.demographicsdependentsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DemographicsDependentModel](#advicent.factfinderservice.models.demographicsdependentmodel)

#### Output
* output [Advicent.FactFinderService.Models.DemographicsDependentWithIdModel](#advicent.factfinderservice.models.demographicsdependentwithidmodel)

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
* output [Advicent.FactFinderService.Models.DemographicsDependentWithIdModel](#advicent.factfinderservice.models.demographicsdependentwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DemographicsDependentModel](#advicent.factfinderservice.models.demographicsdependentmodel)

#### Output
* output [Advicent.FactFinderService.Models.DemographicsDependentWithIdModel](#advicent.factfinderservice.models.demographicsdependentwithidmodel)

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
* output [Advicent.FactFinderService.Models.DemographicsWithIdModel](#advicent.factfinderservice.models.demographicswithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DemographicsModel](#advicent.factfinderservice.models.demographicsmodel)

#### Output
* output [Advicent.FactFinderService.Models.DemographicsWithIdModel](#advicent.factfinderservice.models.demographicswithidmodel)

### DisabilityInsurancePolicies_GetDisabilityInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Disability Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Disability Insurance Policies including description and policy type.


```js
naviplancentral_factfinder.DisabilityInsurancePolicies_GetDisabilityInsurancePoliciesByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Disability Insurance Policies

#### Output
* output [Advicent.FactFinderService.Models.DisabilityInsurancePoliciesModel](#advicent.factfinderservice.models.disabilityinsurancepoliciesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DisabilityInsurancePolicyModel](#advicent.factfinderservice.models.disabilityinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.DisabilityInsurancePolicyWithIdModel](#advicent.factfinderservice.models.disabilityinsurancepolicywithidmodel)

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
* output [Advicent.FactFinderService.Models.DisabilityInsurancePolicyWithIdModel](#advicent.factfinderservice.models.disabilityinsurancepolicywithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.DisabilityInsurancePolicyModel](#advicent.factfinderservice.models.disabilityinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.DisabilityInsurancePolicyWithIdModel](#advicent.factfinderservice.models.disabilityinsurancepolicywithidmodel)

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
* output [Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypesModel](#advicent.factfinderservice.models.disabilityinsurancepolicytypesmodel)

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
* output [Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypeModel](#advicent.factfinderservice.models.disabilityinsurancepolicytypemodel)

### EducationGoals_GetEducationGoalsByFactFinderIdByFactfinderid
Description: This operation retrieves all Education Goals for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Education Goals including description and projected cost.


```js
naviplancentral_factfinder.EducationGoals_GetEducationGoalsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Education Goals

#### Output
* output [Advicent.FactFinderService.Models.EducationGoalsModel](#advicent.factfinderservice.models.educationgoalsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.EducationGoalModel](#advicent.factfinderservice.models.educationgoalmodel)

#### Output
* output [Advicent.FactFinderService.Models.EducationGoalWithIdModel](#advicent.factfinderservice.models.educationgoalwithidmodel)

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
* output [Advicent.FactFinderService.Models.EducationExpensesModel](#advicent.factfinderservice.models.educationexpensesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.EducationExpenseModel](#advicent.factfinderservice.models.educationexpensemodel)

#### Output
* output [Advicent.FactFinderService.Models.EducationExpenseWithIdModel](#advicent.factfinderservice.models.educationexpensewithidmodel)

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
* output [Advicent.FactFinderService.Models.EducationExpenseWithIdModel](#advicent.factfinderservice.models.educationexpensewithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.EducationExpenseModel](#advicent.factfinderservice.models.educationexpensemodel)

#### Output
* output [Advicent.FactFinderService.Models.EducationExpenseWithIdModel](#advicent.factfinderservice.models.educationexpensewithidmodel)

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
* output [Advicent.FactFinderService.Models.EducationGoalWithIdModel](#advicent.factfinderservice.models.educationgoalwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.EducationGoalModel](#advicent.factfinderservice.models.educationgoalmodel)

#### Output
* output [Advicent.FactFinderService.Models.EducationGoalWithIdModel](#advicent.factfinderservice.models.educationgoalwithidmodel)

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
* output [Advicent.FactFinderService.Models.ExpenseTypesModel](#advicent.factfinderservice.models.expensetypesmodel)

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
* output [Advicent.FactFinderService.Models.ExpenseTypeModel](#advicent.factfinderservice.models.expensetypemodel)

### Expenses_GetExpensesByFactFinderIdByFactfinderid
Description: This operation retrieves all Expenses for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Expenses including description and Expense type.


```js
naviplancentral_factfinder.Expenses_GetExpensesByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Expenses

#### Output
* output [Advicent.FactFinderService.Models.ExpensesModel](#advicent.factfinderservice.models.expensesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.ExpenseModel](#advicent.factfinderservice.models.expensemodel)

#### Output
* output [Advicent.FactFinderService.Models.ExpenseWithIdModel](#advicent.factfinderservice.models.expensewithidmodel)

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
* output [Advicent.FactFinderService.Models.ExpenseWithIdModel](#advicent.factfinderservice.models.expensewithidmodel)

### Expenses_PutByIdModel
Description: The operation updates an Expense.<br />
              Purpose: Allows for complete replacement of an Expense on a Fact Finder.


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
  * model **required** [Advicent.FactFinderService.Models.ExpenseModel](#advicent.factfinderservice.models.expensemodel)

#### Output
* output [Advicent.FactFinderService.Models.ExpenseWithIdModel](#advicent.factfinderservice.models.expensewithidmodel)

### FactFinders_PostByModel
Description: The operation creates a Fact Finder.<br />
              Purpose: Allows for creation of Fact Finders.


```js
naviplancentral_factfinder.FactFinders_PostByModel({
  "model": {
    "factFinderUserId": 0
  }
}, context)
```

#### Input
* input `object`
  * model **required** [Advicent.FactFinderService.Models.FactFinderWithExternalIdModel](#advicent.factfinderservice.models.factfinderwithexternalidmodel)

#### Output
* output [System.Object](#system.object)

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
* output [Advicent.FactFinderService.Models.FactFinderModulesModel](#advicent.factfinderservice.models.factfindermodulesmodel)

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
* output [Advicent.FactFinderService.Models.FactFinderModuleWithIdModel](#advicent.factfinderservice.models.factfindermodulewithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.FactFinderModuleModel](#advicent.factfinderservice.models.factfindermodulemodel)
  * factFinderId **required** `integer`: The ID of the Fact Finder used to identify the Fact Finder Module to update
  * id **required** `integer`: The existing Fact Finder Module ID used to identify which Fact Finder Module to update

#### Output
* output [Advicent.FactFinderService.Models.FactFinderModuleWithIdModel](#advicent.factfinderservice.models.factfindermodulewithidmodel)

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
  * id **required** `integer`: The ID of the Fact Finder used to retreive the Fact Finder

#### Output
* output [Advicent.FactFinderService.Models.FactFinderWithIdModel](#advicent.factfinderservice.models.factfinderwithidmodel)

### FactFinders_PutByIdModel
Description: The operation updates a Fact Finder.<br />
              Purpose: Allows for the updating of a Fact Finder.


```js
naviplancentral_factfinder.FactFinders_PutByIdModel({
  "id": 0,
  "model": {
    "factFinderUserId": 0
  }
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The existing Fact Finder ID used to identify which Fact Finder to update
  * model **required** [Advicent.FactFinderService.Models.FactFinderModel](#advicent.factfinderservice.models.factfindermodel)

#### Output
* output [Advicent.FactFinderService.Models.FactFinderWithIdModel](#advicent.factfinderservice.models.factfinderwithidmodel)

### FactFinders_PostById
Description: The operation produces a Fact Finder based on input from a back office system.<br />
              Purpose: Allows for advisors to compare the fact finder to the old plan prior to acceptance.


```js
naviplancentral_factfinder.FactFinders_PostById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The ID of the Fact Finder used to retreive the Fact Finder Snapshot

#### Output
* output [System.Object](#system.object)

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
* output [Advicent.FactFinderService.Models.FilingStatusTypesModel](#advicent.factfinderservice.models.filingstatustypesmodel)

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
* output [Advicent.FactFinderService.Models.FilingStatusTypeModel](#advicent.factfinderservice.models.filingstatustypemodel)

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
  * entity **required** `string` (values: CriticalIllnessInsurancePolicies, DisabilityInsurancePoliciesPremium, DisabilityInsurancePoliciesBenefit, Expenses, Liabilities, LifeInsurancePolicies, LongTermCareInsurancePoliciesBenefit, LongTermCareInsurancePoliciesPremium, RealEstateAssets, RetirementExpenses): The entity used to filter Frequency Types
  * country **required** `string` (values: UnitedStates, Canada): The country used to filter Frequency Types

#### Output
* output [Advicent.FactFinderService.Models.FrequencyTypesModel](#advicent.factfinderservice.models.frequencytypesmodel)

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
* output [Advicent.FactFinderService.Models.FrequencyTypeModel](#advicent.factfinderservice.models.frequencytypemodel)

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
* output [Advicent.FactFinderService.Models.IncomeTypesModel](#advicent.factfinderservice.models.incometypesmodel)

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
* output [Advicent.FactFinderService.Models.IncomeTypeModel](#advicent.factfinderservice.models.incometypemodel)

### Incomes_GetIncomesByFactFinderIdByFactfinderid
Description: This operation retrieves all Incomes for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Incomes including annual amount and start date.


```js
naviplancentral_factfinder.Incomes_GetIncomesByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Incomes

#### Output
* output [Advicent.FactFinderService.Models.IncomesModel](#advicent.factfinderservice.models.incomesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.IncomeModel](#advicent.factfinderservice.models.incomemodel)

#### Output
* output [Advicent.FactFinderService.Models.IncomeWithIdModel](#advicent.factfinderservice.models.incomewithidmodel)

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
* output [Advicent.FactFinderService.Models.IncomeWithIdModel](#advicent.factfinderservice.models.incomewithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.IncomeModel](#advicent.factfinderservice.models.incomemodel)

#### Output
* output [Advicent.FactFinderService.Models.IncomeWithIdModel](#advicent.factfinderservice.models.incomewithidmodel)

### Liabilities_GetLiabilitiesByFactFinderIdByFactfinderidExternalsourceid
Description: This operation retrieves all Liabilities for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Liabilities including owner and type.


```js
naviplancentral_factfinder.Liabilities_GetLiabilitiesByFactFinderIdByFactfinderidExternalsourceid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Liabilities
  * externalSourceId `string`: The external source ID used to filter Liabilities

#### Output
* output [Advicent.FactFinderService.Models.LiabilitiesModel](#advicent.factfinderservice.models.liabilitiesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LiabilityModel](#advicent.factfinderservice.models.liabilitymodel)

#### Output
* output [Advicent.FactFinderService.Models.LiabilityWithIdModel](#advicent.factfinderservice.models.liabilitywithidmodel)

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
* output [Advicent.FactFinderService.Models.LiabilityWithIdModel](#advicent.factfinderservice.models.liabilitywithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LiabilityModel](#advicent.factfinderservice.models.liabilitymodel)

#### Output
* output [Advicent.FactFinderService.Models.LiabilityWithIdModel](#advicent.factfinderservice.models.liabilitywithidmodel)

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
* output [Advicent.FactFinderService.Models.LiabilityTypesModel](#advicent.factfinderservice.models.liabilitytypesmodel)

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
* output [Advicent.FactFinderService.Models.LiabilityTypeModel](#advicent.factfinderservice.models.liabilitytypemodel)

### LifeInsurancePolicies_GetLifeInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Life Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Life Insurance Policies including description and policy type.


```js
naviplancentral_factfinder.LifeInsurancePolicies_GetLifeInsurancePoliciesByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Life Insurance Policies

#### Output
* output [Advicent.FactFinderService.Models.LifeInsurancePoliciesModel](#advicent.factfinderservice.models.lifeinsurancepoliciesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LifeInsurancePolicyModel](#advicent.factfinderservice.models.lifeinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.LifeInsurancePolicyWithIdModel](#advicent.factfinderservice.models.lifeinsurancepolicywithidmodel)

### LifeInsurancePolicies_DeleteById
Description: The operation removes a Life Insurance Policy tied to a Fact Finder.<br />
              Purpose: Allows for removal of a Life Insurance Policy from a Fact Finder.


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
* output [Advicent.FactFinderService.Models.LifeInsurancePolicyWithIdModel](#advicent.factfinderservice.models.lifeinsurancepolicywithidmodel)

### LifeInsurancePolicies_PutByIdModel
Description: The operation updates a Life Insurance Policy.<br />
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
  * model **required** [Advicent.FactFinderService.Models.LifeInsurancePolicyModel](#advicent.factfinderservice.models.lifeinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.LifeInsurancePolicyWithIdModel](#advicent.factfinderservice.models.lifeinsurancepolicywithidmodel)

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
* output [Advicent.FactFinderService.Models.LifeInsurancePolicyTypesModel](#advicent.factfinderservice.models.lifeinsurancepolicytypesmodel)

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
* output [Advicent.FactFinderService.Models.LifeInsurancePolicyTypeModel](#advicent.factfinderservice.models.lifeinsurancepolicytypemodel)

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
* output [Advicent.FactFinderService.Models.LifestyleAssetTypesModel](#advicent.factfinderservice.models.lifestyleassettypesmodel)

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
* output [Advicent.FactFinderService.Models.LifestyleAssetTypeModel](#advicent.factfinderservice.models.lifestyleassettypemodel)

### LifestyleAssets_GetLifestyleAssetsByFactFinderIdByFactfinderid
Description: This operation retrieves all Lifestyle Assets for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Lifestyle Assets including description and market value.


```js
naviplancentral_factfinder.LifestyleAssets_GetLifestyleAssetsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Lifestyle Assets

#### Output
* output [Advicent.FactFinderService.Models.LifestyleAssetsModel](#advicent.factfinderservice.models.lifestyleassetsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LifestyleAssetModel](#advicent.factfinderservice.models.lifestyleassetmodel)

#### Output
* output [Advicent.FactFinderService.Models.LifestyleAssetWithIdModel](#advicent.factfinderservice.models.lifestyleassetwithidmodel)

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
* output [Advicent.FactFinderService.Models.LifestyleAssetWithIdModel](#advicent.factfinderservice.models.lifestyleassetwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LifestyleAssetModel](#advicent.factfinderservice.models.lifestyleassetmodel)

#### Output
* output [Advicent.FactFinderService.Models.LifestyleAssetWithIdModel](#advicent.factfinderservice.models.lifestyleassetwithidmodel)

### LongTermCareInsurancePolicies_GetLongTermCareInsurancePoliciesByFactFinderIdByFactfinderid
Description: This operation retrieves all Long Term Care Insurance Policies for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Long Term Care Insurance Policies including description and premium.


```js
naviplancentral_factfinder.LongTermCareInsurancePolicies_GetLongTermCareInsurancePoliciesByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Long Term Care Insurance Policies

#### Output
* output [Advicent.FactFinderService.Models.LongTermCareInsurancePoliciesModel](#advicent.factfinderservice.models.longtermcareinsurancepoliciesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LongTermCareInsurancePolicyModel](#advicent.factfinderservice.models.longtermcareinsurancepolicymodel)

#### Output
* output [Advicent.FactFinderService.Models.LongTermCareInsurancePolicyWithIdModel](#advicent.factfinderservice.models.longtermcareinsurancepolicywithidmodel)

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
* output [Advicent.FactFinderService.Models.LongTermCareInsurancePolicyWithIdModel](#advicent.factfinderservice.models.longtermcareinsurancepolicywithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.LongTermCareInsurancePolicyModel](#advicent.factfinderservice.models.longtermcareinsurancepolicymodel)

#### Output
* output [System.Object](#system.object)

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
* output [Advicent.FactFinderService.Models.MajorPurchaseGoalTypesModel](#advicent.factfinderservice.models.majorpurchasegoaltypesmodel)

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
* output [Advicent.FactFinderService.Models.MajorPurchaseGoalTypeModel](#advicent.factfinderservice.models.majorpurchasegoaltypemodel)

### MajorPurchaseGoals_GetMajorPurchaseGoalsByFactFinderIdByFactfinderid
Description: This operation retrieves all Major Purchases for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Major Purchases including description and amount.


```js
naviplancentral_factfinder.MajorPurchaseGoals_GetMajorPurchaseGoalsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Major Purchases

#### Output
* output [Advicent.FactFinderService.Models.MajorPurchaseGoalsModel](#advicent.factfinderservice.models.majorpurchasegoalsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.MajorPurchaseGoalModel](#advicent.factfinderservice.models.majorpurchasegoalmodel)

#### Output
* output [Advicent.FactFinderService.Models.MajorPurchaseGoalWithIdModel](#advicent.factfinderservice.models.majorpurchasegoalwithidmodel)

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
* output [Advicent.FactFinderService.Models.MajorPurchaseGoalWithIdModel](#advicent.factfinderservice.models.majorpurchasegoalwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.MajorPurchaseGoalModel](#advicent.factfinderservice.models.majorpurchasegoalmodel)

#### Output
* output [Advicent.FactFinderService.Models.MajorPurchaseGoalWithIdModel](#advicent.factfinderservice.models.majorpurchasegoalwithidmodel)

### RealEstateAssets_GetRealEstateAssetsByFactFinderIdByFactfinderid
Description: This operation retrieves all Real Estate Assets for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Real Estate Assets including description and market value.


```js
naviplancentral_factfinder.RealEstateAssets_GetRealEstateAssetsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Real Estate Assets

#### Output
* output [Advicent.FactFinderService.Models.RealEstateAssetsModel](#advicent.factfinderservice.models.realestateassetsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.RealEstateAssetModel](#advicent.factfinderservice.models.realestateassetmodel)

#### Output
* output [Advicent.FactFinderService.Models.RealEstateAssetWithIdModel](#advicent.factfinderservice.models.realestateassetwithidmodel)

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
* output [Advicent.FactFinderService.Models.RealEstateAssetWithIdModel](#advicent.factfinderservice.models.realestateassetwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.RealEstateAssetModel](#advicent.factfinderservice.models.realestateassetmodel)

#### Output
* output [Advicent.FactFinderService.Models.RealEstateAssetWithIdModel](#advicent.factfinderservice.models.realestateassetwithidmodel)

### RetirementGoals_GetRetirementGoalsByFactFinderIdByFactfinderid
Description: This operation retrieves all Retirement Goals for the specified Fact Finder ID.<br />
              Purpose: Provides access to the Retirement Goals including retirement date.


```js
naviplancentral_factfinder.RetirementGoals_GetRetirementGoalsByFactFinderIdByFactfinderid({}, context)
```

#### Input
* input `object`
  * factFinderId `integer`: The ID of the Fact Finder used to retrieve Retirement Goals

#### Output
* output [Advicent.FactFinderService.Models.RetirementGoalsModel](#advicent.factfinderservice.models.retirementgoalsmodel)

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
  * model **required** [Advicent.FactFinderService.Models.RetirementGoalModel](#advicent.factfinderservice.models.retirementgoalmodel)

#### Output
* output [Advicent.FactFinderService.Models.RetirementGoalWithIdModel](#advicent.factfinderservice.models.retirementgoalwithidmodel)

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
* output [Advicent.FactFinderService.Models.RetirementGoalWithIdModel](#advicent.factfinderservice.models.retirementgoalwithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.RetirementGoalModel](#advicent.factfinderservice.models.retirementgoalmodel)

#### Output
* output [Advicent.FactFinderService.Models.RetirementGoalWithIdModel](#advicent.factfinderservice.models.retirementgoalwithidmodel)

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
* output [Advicent.FactFinderService.Models.RetirementExpensesModel](#advicent.factfinderservice.models.retirementexpensesmodel)

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
  * model **required** [Advicent.FactFinderService.Models.RetirementExpenseModel](#advicent.factfinderservice.models.retirementexpensemodel)

#### Output
* output [Advicent.FactFinderService.Models.RetirementExpenseWithIdModel](#advicent.factfinderservice.models.retirementexpensewithidmodel)

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
* output [Advicent.FactFinderService.Models.RetirementExpenseWithIdModel](#advicent.factfinderservice.models.retirementexpensewithidmodel)

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
  * model **required** [Advicent.FactFinderService.Models.RetirementExpenseModel](#advicent.factfinderservice.models.retirementexpensemodel)

#### Output
* output [Advicent.FactFinderService.Models.RetirementExpenseWithIdModel](#advicent.factfinderservice.models.retirementexpensewithidmodel)

### FactFinderServiceInformation_Get
Description: This operation retrieves information statistics for the current service.<br />
              Purpose: Provides access to Service Information.


```js
naviplancentral_factfinder.FactFinderServiceInformation_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Advicent.FactFinderService.Models.ServiceInformationModel](#advicent.factfinderservice.models.serviceinformationmodel)

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
* output [Advicent.FactFinderService.Models.StatesProvincesModel](#advicent.factfinderservice.models.statesprovincesmodel)

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
* output [Advicent.FactFinderService.Models.StateProvinceModel](#advicent.factfinderservice.models.stateprovincemodel)

### Users_GetByUsername
Description: This operation retrieves a single Fact Finder User.<br />
              Purpose: Provides access to a Fact Finder User information including the User ID.


```js
naviplancentral_factfinder.Users_GetByUsername({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username used to look up the Fact Finder User information

#### Output
* output [Advicent.FactFinderService.Models.FactFinderUserWithIdModel](#advicent.factfinderservice.models.factfinderuserwithidmodel)

### Users_PostByModel
Description: The operation creates a Fact Finder User.<br />
              Purpose: Allows for creation of Users to collect Fact Finder information.


```js
naviplancentral_factfinder.Users_PostByModel({
  "model": {
    "userName": "",
    "userGuid": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [Advicent.FactFinderService.Models.FactFinderUserModel](#advicent.factfinderservice.models.factfinderusermodel)

#### Output
* output [Advicent.FactFinderService.Models.FactFinderUserWithIdModel](#advicent.factfinderservice.models.factfinderuserwithidmodel)

### Users_GetFactFindersByAdvisorGuidByAdvisorguid
Description: This operation retrieves all Fact Finders related to the specified Advisor's Clients.<br />
              Purpose: Provides access to a Client Fact Finder listing.


```js
naviplancentral_factfinder.Users_GetFactFindersByAdvisorGuidByAdvisorguid({
  "advisorGuid": ""
}, context)
```

#### Input
* input `object`
  * advisorGuid **required** `string`: The Advisor Guid used to locate related Clients and then those Client's Fact Finders

#### Output
* output [Advicent.FactFinderService.Models.FactFinderWithUserGuidsModel](#advicent.factfinderservice.models.factfinderwithuserguidsmodel)

### Users_GetFactFinderByUserGuidByAdvisorguidClientguid
Description: This operation retrieves a list of Fact Finders related to the specified Advisor's Client.<br />
              Purpose: Provides access to a Client's Fact Finders.


```js
naviplancentral_factfinder.Users_GetFactFinderByUserGuidByAdvisorguidClientguid({
  "advisorGuid": "",
  "clientGuid": ""
}, context)
```

#### Input
* input `object`
  * advisorGuid **required** `string`: The Advisor Guid used to locate related Clients
  * clientGuid **required** `string`: The Client Guid used to locate related Fact Finders

#### Output
* output [Advicent.FactFinderService.Models.FactFinderWithUserGuidsModel](#advicent.factfinderservice.models.factfinderwithuserguidsmodel)

### Users_GetById
Description: This operation retrieves a single Fact Finder User.<br />
              Purpose: Provides access to a Fact Finder User information including the username.


```js
naviplancentral_factfinder.Users_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The User ID used to look up the Fact Finder User information

#### Output
* output [Advicent.FactFinderService.Models.FactFinderUserWithIdModel](#advicent.factfinderservice.models.factfinderuserwithidmodel)

### Users_GetFactFindersByUserNameByUsername
Description: This operation retrieves all Fact Finders for the specified username.<br />
              Purpose: Provides access to the Fact Finder listing including status.


```js
naviplancentral_factfinder.Users_GetFactFindersByUserNameByUsername({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: The username used to filter Fact Finders

#### Output
* output [Advicent.FactFinderService.Models.FactFindersWithUserNamesModel](#advicent.factfinderservice.models.factfinderswithusernamesmodel)



## Definitions

### Advicent.DomainLogic.Models.IAccountHoldingDomainObject
* Advicent.DomainLogic.Models.IAccountHoldingDomainObject `object`
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

### Advicent.DomainLogic.Models.IAccountWithHoldingsDomainObject
* Advicent.DomainLogic.Models.IAccountWithHoldingsDomainObject `object`
  * accountHoldings `array`
    * items [Advicent.DomainLogic.Models.IAccountHoldingDomainObject](#advicent.domainlogic.models.iaccountholdingdomainobject)
  * accountId `integer`
  * accountType `integer`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId `integer`
  * lastUpdated `string`
  * marketValue `number`
  * owner `string` (values: Head1, Head2, Joint, FamilyMember, Other)
  * ownerDependentId `integer`

### Advicent.DomainLogic.Models.ICriticalIllnessInsurancePolicyDomainObject
* Advicent.DomainLogic.Models.ICriticalIllnessInsurancePolicyDomainObject `object`
  * benefit `number`
  * criticalIllnessInsurancePolicyId `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`

### Advicent.DomainLogic.Models.IDemographicsDependentDomainObject
* Advicent.DomainLogic.Models.IDemographicsDependentDomainObject `object`
  * birthDate `string`
  * demographicsId `integer`
  * dependentId `integer`
  * dependentOf `string` (values: Head1, Head2, Joint, Other)
  * externalDestinationId `string`
  * firstName `string`
  * lastName `string`
  * relationship `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### Advicent.DomainLogic.Models.IDemographicsWithDependentsDomainObject
* Advicent.DomainLogic.Models.IDemographicsWithDependentsDomainObject `object`
  * city `string`
  * created `string`
  * demographicsId `integer`
  * dependents `array`
    * items [Advicent.DomainLogic.Models.IDemographicsDependentDomainObject](#advicent.domainlogic.models.idemographicsdependentdomainobject)
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId `integer`
  * head1 [Advicent.DomainLogic.Models.IFamilyHeadDomainObject](#advicent.domainlogic.models.ifamilyheaddomainobject)
  * head2 [Advicent.DomainLogic.Models.IFamilyHeadDomainObject](#advicent.domainlogic.models.ifamilyheaddomainobject)
  * jointAnalysis `boolean`
  * lockRetirement `boolean`
  * state `integer`

### Advicent.DomainLogic.Models.IDisabilityInsurancePolicyDomainObject
* Advicent.DomainLogic.Models.IDisabilityInsurancePolicyDomainObject `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description `string`
  * disabilityInsurancePolicyId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`
  * premiumFrequency `integer`

### Advicent.DomainLogic.Models.IEducationExpenseDomainObject
* Advicent.DomainLogic.Models.IEducationExpenseDomainObject `object`
  * annualCost `number`
  * educationExpenseId `integer`
  * educationGoalId `integer`
  * externalDestinationId `string`
  * member `string` (values: Head1, Head2, Dependent)
  * memberDependentId `integer`
  * startYear `string`
  * years `integer`

### Advicent.DomainLogic.Models.IEducationGoalWithExpensesDomainObject
* Advicent.DomainLogic.Models.IEducationGoalWithExpensesDomainObject `object`
  * description `string`
  * educationExpenses `array`
    * items [Advicent.DomainLogic.Models.IEducationExpenseDomainObject](#advicent.domainlogic.models.ieducationexpensedomainobject)
  * educationGoalId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * projectedCost `number`

### Advicent.DomainLogic.Models.IExpenseDomainObject
* Advicent.DomainLogic.Models.IExpenseDomainObject `object`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * expenseAmount `number`
  * expenseId `integer`
  * expenseTypeId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * member `string` (values: Head1, Head2, Joint)
  * startDate `string`

### Advicent.DomainLogic.Models.IFactFinderDefinedBenefitPensionDomainObject
* Advicent.DomainLogic.Models.IFactFinderDefinedBenefitPensionDomainObject `object`
  * definedBenefitPensionId `integer`
  * description `string`
  * estimatedAmount `number`
  * externalDestinationId `string`
  * factFinderId `integer`
  * member `string` (values: Client, CoClient)
  * startDate `string`

### Advicent.DomainLogic.Models.IFactFinderLiabilityDomainObject
* Advicent.DomainLogic.Models.IFactFinderLiabilityDomainObject `object`
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

### Advicent.DomainLogic.Models.IFactFinderLifestyleAssetDomainObject
* Advicent.DomainLogic.Models.IFactFinderLifestyleAssetDomainObject `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * lifestyleAssetId `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * type `integer`

### Advicent.DomainLogic.Models.IFamilyHeadDomainObject
* Advicent.DomainLogic.Models.IFamilyHeadDomainObject `object`
  * alreadyRetired `boolean`
  * birthDate `string`
  * externalDestinationId `string`
  * firstName `string`
  * gender `string` (values: Male, Female)
  * lastName `string`
  * taxFilingStatus `integer`

### Advicent.DomainLogic.Models.IIncomeDomainObject
* Advicent.DomainLogic.Models.IIncomeDomainObject `object`
  * annualAmount `number`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * incomeId `integer`
  * incomeTypeId `integer`
  * owner `string` (values: Client, CoClient)
  * startDate `string`

### Advicent.DomainLogic.Models.ILifeInsurancePolicyDomainObject
* Advicent.DomainLogic.Models.ILifeInsurancePolicyDomainObject `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * lifeInsurancePolicyId `integer`
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`

### Advicent.DomainLogic.Models.ILongTermCareInsurancePolicyDomainObject
* Advicent.DomainLogic.Models.ILongTermCareInsurancePolicyDomainObject `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insured `string` (values: Client, CoClient)
  * longTermCareInsurancePolicyId `integer`
  * premium `number`
  * premiumFrequency `integer`

### Advicent.DomainLogic.Models.IMajorPurchaseGoalDomainObject
* Advicent.DomainLogic.Models.IMajorPurchaseGoalDomainObject `object`
  * amount `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * majorPurchaseGoalId `integer`
  * majorPurchaseGoalTypeId `integer`
  * member `string` (values: Head1, Head2, Joint)
  * targetDate `string`

### Advicent.DomainLogic.Models.IRealEstateAssetDomainObject
* Advicent.DomainLogic.Models.IRealEstateAssetDomainObject `object`
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

### Advicent.DomainLogic.Models.IRetirementExpenseDomainObject
* Advicent.DomainLogic.Models.IRetirementExpenseDomainObject `object`
  * amount `number`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * frequency `integer`
  * member `string` (values: Head1, Head2, Joint)
  * retirementExpenseId `integer`
  * retirementGoalId `integer`
  * startDate `string`

### Advicent.DomainLogic.Models.IRetirementGoalWithExpensesDomainObject
* Advicent.DomainLogic.Models.IRetirementGoalWithExpensesDomainObject `object`
  * externalDestinationId `string`
  * factFinderId `integer`
  * head1RetirementDate `string`
  * head2RetirementDate `string`
  * retirementExpenses `array`
    * items [Advicent.DomainLogic.Models.IRetirementExpenseDomainObject](#advicent.domainlogic.models.iretirementexpensedomainobject)
  * retirementGoalId `integer`

### Advicent.FactFinderService.Models.AccountHoldingModel
* Advicent.FactFinderService.Models.AccountHoldingModel `object`
  * costBasis `number`
  * cusip `string`
  * description **required** `string`
  * externalDestinationId `string`
  * marketValue `number`
  * symbol `string`
  * valuationDate `string`

### Advicent.FactFinderService.Models.AccountHoldingWithIdModel
* Advicent.FactFinderService.Models.AccountHoldingWithIdModel `object`
  * accountHoldingId `integer`
  * accountId `integer`
  * costBasis `number`
  * cusip `string`
  * description `string`
  * externalDestinationId `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * marketValue `number`
  * symbol `string`
  * valuationDate `string`

### Advicent.FactFinderService.Models.AccountModel
* Advicent.FactFinderService.Models.AccountModel `object`
  * accountType `integer`
  * description **required** `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId **required** `integer`
  * holdings `array`
    * items [Advicent.FactFinderService.Models.AccountHoldingModel](#advicent.factfinderservice.models.accountholdingmodel)
  * lastUpdated `string`
  * marketValue `number`
  * owner `string` (values: Head1, Head2, Joint, FamilyMember, Other)
  * ownerDependentId `integer`

### Advicent.FactFinderService.Models.AccountTypeModel
* Advicent.FactFinderService.Models.AccountTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.AccountTypesModel
* Advicent.FactFinderService.Models.AccountTypesModel `object`
  * accountTypes `array`
    * items [Advicent.FactFinderService.Models.AccountTypeModel](#advicent.factfinderservice.models.accounttypemodel)

### Advicent.FactFinderService.Models.AccountWithIdModel
* Advicent.FactFinderService.Models.AccountWithIdModel `object`
  * accountId `integer`
  * accountType `integer`
  * description `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * externalSourceName `string`
  * factFinderId `integer`
  * lastUpdated `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * marketValue `number`
  * owner `string` (values: Head1, Head2, Joint, FamilyMember, Other)
  * ownerDependentId `integer`

### Advicent.FactFinderService.Models.AccountsModel
* Advicent.FactFinderService.Models.AccountsModel `object`
  * accounts `array`
    * items [Advicent.FactFinderService.Models.AccountWithIdModel](#advicent.factfinderservice.models.accountwithidmodel)

### Advicent.FactFinderService.Models.ClientModel
* Advicent.FactFinderService.Models.ClientModel `object`
  * clientId `integer`
  * message `string`
  * ownerUser `string`
  * planId `integer`
  * success `boolean`

### Advicent.FactFinderService.Models.ClientsModel
* Advicent.FactFinderService.Models.ClientsModel `object`
  * externalDestinationName `string`
  * externalSystem **required** `string` (values: Naviplan)
  * factFinderId **required** `integer`
  * planAction **required** `string` (values: New, Duplicate, Project)

### Advicent.FactFinderService.Models.CriticalIllnessInsurancePoliciesModel
* Advicent.FactFinderService.Models.CriticalIllnessInsurancePoliciesModel `object`
  * criticalIllnessInsurancePolicies `array`
    * items [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyWithIdModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicywithidmodel)

### Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyModel
* Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyModel `object`
  * benefit `number`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`

### Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypeModel
* Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypesModel
* Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypesModel `object`
  * insurancePolicyTypes `array`
    * items [Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyTypeModel](#advicent.factfinderservice.models.criticalillnessinsurancepolicytypemodel)

### Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyWithIdModel
* Advicent.FactFinderService.Models.CriticalIllnessInsurancePolicyWithIdModel `object`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * policyType `integer`
  * premium `number`

### Advicent.FactFinderService.Models.DefinedBenefitPensionModel
* Advicent.FactFinderService.Models.DefinedBenefitPensionModel `object`
  * description **required** `string`
  * estimatedAmount `number`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * member `string` (values: Client, CoClient)
  * startDate `string`

### Advicent.FactFinderService.Models.DefinedBenefitPensionWithIdModel
* Advicent.FactFinderService.Models.DefinedBenefitPensionWithIdModel `object`
  * definedBenefitPensionId `integer`
  * description `string`
  * estimatedAmount `number`
  * externalDestinationId `string`
  * factFinderId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * member `string` (values: Client, CoClient)
  * startDate `string`

### Advicent.FactFinderService.Models.DefinedBenefitPensionsModel
* Advicent.FactFinderService.Models.DefinedBenefitPensionsModel `object`
  * definedBenefitPensions `array`
    * items [Advicent.FactFinderService.Models.DefinedBenefitPensionWithIdModel](#advicent.factfinderservice.models.definedbenefitpensionwithidmodel)

### Advicent.FactFinderService.Models.DemographicsDependentModel
* Advicent.FactFinderService.Models.DemographicsDependentModel `object`
  * birthDate **required** `string`
  * dependentOf **required** `string` (values: Head1, Head2, Joint, Other)
  * externalDestinationId `string`
  * firstName **required** `string`
  * lastName **required** `string`
  * relationship **required** `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### Advicent.FactFinderService.Models.DemographicsDependentWithIdModel
* Advicent.FactFinderService.Models.DemographicsDependentWithIdModel `object`
  * birthDate `string`
  * demographicsId `integer`
  * dependentId `integer`
  * dependentOf `string` (values: Head1, Head2, Joint, Other)
  * externalDestinationId `string`
  * firstName `string`
  * lastName `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * relationship `string` (values: Son, Daughter, FosterSon, FosterDaughter, Grandson, Granddaughter, Nephew, Niece, MaleCousin, FemaleCousin, Father, Mother, Grandfather, Grandmother, Uncle, Aunt, Brother, Sister, SonInLaw, DaughterInLaw, MaleOther, FemaleOther)

### Advicent.FactFinderService.Models.DemographicsDependentsModel
* Advicent.FactFinderService.Models.DemographicsDependentsModel `object`
  * dependents `array`
    * items [Advicent.FactFinderService.Models.DemographicsDependentWithIdModel](#advicent.factfinderservice.models.demographicsdependentwithidmodel)

### Advicent.FactFinderService.Models.DemographicsModel
* Advicent.FactFinderService.Models.DemographicsModel `object`
  * city **required** `string`
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId **required** `integer`
  * head1 **required** [Advicent.FactFinderService.Models.FamilyHeadModel](#advicent.factfinderservice.models.familyheadmodel)
  * head2 [Advicent.FactFinderService.Models.FamilyHeadModel](#advicent.factfinderservice.models.familyheadmodel)
  * jointAnalysis **required** `boolean`
  * state **required** `integer`

### Advicent.FactFinderService.Models.DemographicsWithIdModel
* Advicent.FactFinderService.Models.DemographicsWithIdModel `object`
  * city `string`
  * created `string`
  * demographicsId `integer`
  * externalDestinationId `string`
  * externalSourceId `string`
  * factFinderId `integer`
  * head1 [Advicent.FactFinderService.Models.FamilyHeadModel](#advicent.factfinderservice.models.familyheadmodel)
  * head2 [Advicent.FactFinderService.Models.FamilyHeadModel](#advicent.factfinderservice.models.familyheadmodel)
  * jointAnalysis `boolean`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * lockRetirement `boolean`
  * state `integer`

### Advicent.FactFinderService.Models.DisabilityInsurancePoliciesModel
* Advicent.FactFinderService.Models.DisabilityInsurancePoliciesModel `object`
  * disabilityInsurancePolicies `array`
    * items [Advicent.FactFinderService.Models.DisabilityInsurancePolicyWithIdModel](#advicent.factfinderservice.models.disabilityinsurancepolicywithidmodel)

### Advicent.FactFinderService.Models.DisabilityInsurancePolicyModel
* Advicent.FactFinderService.Models.DisabilityInsurancePolicyModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * insured `string` (values: Client, CoClient)
  * policyType `integer`
  * premium `number`
  * premiumFrequency `integer`

### Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypeModel
* Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypesModel
* Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypesModel `object`
  * insurancePolicyTypes `array`
    * items [Advicent.FactFinderService.Models.DisabilityInsurancePolicyTypeModel](#advicent.factfinderservice.models.disabilityinsurancepolicytypemodel)

### Advicent.FactFinderService.Models.DisabilityInsurancePolicyWithIdModel
* Advicent.FactFinderService.Models.DisabilityInsurancePolicyWithIdModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * policyType `integer`
  * premium `number`
  * premiumFrequency `integer`

### Advicent.FactFinderService.Models.EducationExpenseModel
* Advicent.FactFinderService.Models.EducationExpenseModel `object`
  * annualCost `number`
  * externalDestinationId `string`
  * member `string` (values: Head1, Head2, Dependent)
  * memberDependentId `integer`
  * startYear `string`
  * years `integer`

### Advicent.FactFinderService.Models.EducationExpenseWithIdModel
* Advicent.FactFinderService.Models.EducationExpenseWithIdModel `object`
  * annualCost `number`
  * educationExpenseId `integer`
  * educationGoalId `integer`
  * externalDestinationId `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * member `string` (values: Head1, Head2, Dependent)
  * memberDependentId `integer`
  * startYear `string`
  * years `integer`

### Advicent.FactFinderService.Models.EducationExpensesModel
* Advicent.FactFinderService.Models.EducationExpensesModel `object`
  * educationExpenses `array`
    * items [Advicent.FactFinderService.Models.EducationExpenseWithIdModel](#advicent.factfinderservice.models.educationexpensewithidmodel)

### Advicent.FactFinderService.Models.EducationGoalModel
* Advicent.FactFinderService.Models.EducationGoalModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * projectedCost `number`

### Advicent.FactFinderService.Models.EducationGoalWithIdModel
* Advicent.FactFinderService.Models.EducationGoalWithIdModel `object`
  * description `string`
  * educationGoalId `integer`
  * externalDestinationId `string`
  * factFinderId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * projectedCost `number`

### Advicent.FactFinderService.Models.EducationGoalsModel
* Advicent.FactFinderService.Models.EducationGoalsModel `object`
  * educationGoals `array`
    * items [Advicent.FactFinderService.Models.EducationGoalWithIdModel](#advicent.factfinderservice.models.educationgoalwithidmodel)

### Advicent.FactFinderService.Models.ExpenseModel
* Advicent.FactFinderService.Models.ExpenseModel `object`
  * annualPeriod `integer`
  * description **required** `string`
  * endDate `string`
  * expenseAmount `number`
  * expenseTypeId `integer`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * member `string` (values: Head1, Head2, Joint)
  * startDate `string`

### Advicent.FactFinderService.Models.ExpenseTypeModel
* Advicent.FactFinderService.Models.ExpenseTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.ExpenseTypesModel
* Advicent.FactFinderService.Models.ExpenseTypesModel `object`
  * expenseTypes `array`
    * items [Advicent.FactFinderService.Models.ExpenseTypeModel](#advicent.factfinderservice.models.expensetypemodel)

### Advicent.FactFinderService.Models.ExpenseWithIdModel
* Advicent.FactFinderService.Models.ExpenseWithIdModel `object`
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
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * member `string` (values: Head1, Head2, Joint)
  * startDate `string`

### Advicent.FactFinderService.Models.ExpensesModel
* Advicent.FactFinderService.Models.ExpensesModel `object`
  * expenses `array`
    * items [Advicent.FactFinderService.Models.ExpenseWithIdModel](#advicent.factfinderservice.models.expensewithidmodel)

### Advicent.FactFinderService.Models.FactFinderModel
* Advicent.FactFinderService.Models.FactFinderModel `object`
  * countryCode `string` (values: UnitedStates, Canada)
  * factFinderUserId **required** `integer`
  * modules `array`
    * items [Advicent.FactFinderService.Models.FactFinderModuleModel](#advicent.factfinderservice.models.factfindermodulemodel)
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted)

### Advicent.FactFinderService.Models.FactFinderModuleModel
* Advicent.FactFinderService.Models.FactFinderModuleModel `object`
  * available `boolean`
  * moduleName **required** `string` (values: Demographics, Assets, Liabilities, Incomes, Expenses, Insurance, Retirement, Education, MajorPurchase)
  * visited `boolean`

### Advicent.FactFinderService.Models.FactFinderModuleWithIdModel
* Advicent.FactFinderService.Models.FactFinderModuleWithIdModel `object`
  * available `boolean`
  * factFinderId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * moduleId `integer`
  * moduleName `string` (values: Demographics, Assets, Liabilities, Incomes, Expenses, Insurance, Retirement, Education, MajorPurchase)
  * visited `boolean`

### Advicent.FactFinderService.Models.FactFinderModulesModel
* Advicent.FactFinderService.Models.FactFinderModulesModel `object`
  * factFinderModules `array`
    * items [Advicent.FactFinderService.Models.FactFinderModuleWithIdModel](#advicent.factfinderservice.models.factfindermodulewithidmodel)

### Advicent.FactFinderService.Models.FactFinderSnapshotModel
* Advicent.FactFinderService.Models.FactFinderSnapshotModel `object`
  * accounts `array`
    * items [Advicent.DomainLogic.Models.IAccountWithHoldingsDomainObject](#advicent.domainlogic.models.iaccountwithholdingsdomainobject)
  * criticalIllnessInsurancePolicies `array`
    * items [Advicent.DomainLogic.Models.ICriticalIllnessInsurancePolicyDomainObject](#advicent.domainlogic.models.icriticalillnessinsurancepolicydomainobject)
  * definedBenefitPensions `array`
    * items [Advicent.DomainLogic.Models.IFactFinderDefinedBenefitPensionDomainObject](#advicent.domainlogic.models.ifactfinderdefinedbenefitpensiondomainobject)
  * demographics [Advicent.DomainLogic.Models.IDemographicsWithDependentsDomainObject](#advicent.domainlogic.models.idemographicswithdependentsdomainobject)
  * disabilityInsurancePolicies `array`
    * items [Advicent.DomainLogic.Models.IDisabilityInsurancePolicyDomainObject](#advicent.domainlogic.models.idisabilityinsurancepolicydomainobject)
  * educationGoals `array`
    * items [Advicent.DomainLogic.Models.IEducationGoalWithExpensesDomainObject](#advicent.domainlogic.models.ieducationgoalwithexpensesdomainobject)
  * expenses `array`
    * items [Advicent.DomainLogic.Models.IExpenseDomainObject](#advicent.domainlogic.models.iexpensedomainobject)
  * incomes `array`
    * items [Advicent.DomainLogic.Models.IIncomeDomainObject](#advicent.domainlogic.models.iincomedomainobject)
  * liabilities `array`
    * items [Advicent.DomainLogic.Models.IFactFinderLiabilityDomainObject](#advicent.domainlogic.models.ifactfinderliabilitydomainobject)
  * lifeInsurancePolicies `array`
    * items [Advicent.DomainLogic.Models.ILifeInsurancePolicyDomainObject](#advicent.domainlogic.models.ilifeinsurancepolicydomainobject)
  * lifestyleAssets `array`
    * items [Advicent.DomainLogic.Models.IFactFinderLifestyleAssetDomainObject](#advicent.domainlogic.models.ifactfinderlifestyleassetdomainobject)
  * longTermCareInsurancePolicies `array`
    * items [Advicent.DomainLogic.Models.ILongTermCareInsurancePolicyDomainObject](#advicent.domainlogic.models.ilongtermcareinsurancepolicydomainobject)
  * majorPurchaseGoals `array`
    * items [Advicent.DomainLogic.Models.IMajorPurchaseGoalDomainObject](#advicent.domainlogic.models.imajorpurchasegoaldomainobject)
  * planYear `integer`
  * realEstateAssets `array`
    * items [Advicent.DomainLogic.Models.IRealEstateAssetDomainObject](#advicent.domainlogic.models.irealestateassetdomainobject)
  * retirementGoal [Advicent.DomainLogic.Models.IRetirementGoalWithExpensesDomainObject](#advicent.domainlogic.models.iretirementgoalwithexpensesdomainobject)

### Advicent.FactFinderService.Models.FactFinderUserModel
* Advicent.FactFinderService.Models.FactFinderUserModel `object`
  * userGuid **required** `string`
  * userName **required** `string`

### Advicent.FactFinderService.Models.FactFinderUserWithIdModel
* Advicent.FactFinderService.Models.FactFinderUserWithIdModel `object`
  * email `string`
  * factFinderUserId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * userGuid `string`
  * userName `string`

### Advicent.FactFinderService.Models.FactFinderWithExternalIdModel
* Advicent.FactFinderService.Models.FactFinderWithExternalIdModel `object`
  * countryCode `string` (values: UnitedStates, Canada)
  * externalDemographicsSourceId `string`
  * externalId `string`
  * externalSystem `string` (values: Naviplan)
  * factFinderUserId **required** `integer`
  * modules `array`
    * items [Advicent.FactFinderService.Models.FactFinderModuleModel](#advicent.factfinderservice.models.factfindermodulemodel)
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted)

### Advicent.FactFinderService.Models.FactFinderWithIdModel
* Advicent.FactFinderService.Models.FactFinderWithIdModel `object`
  * countryCode `string` (values: UnitedStates, Canada)
  * created `string`
  * externalId `string`
  * externalSystem `string` (values: Naviplan)
  * factFinderId `integer`
  * factFinderUserId `integer`
  * lastStatusUpdate `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * modules [Advicent.FactFinderService.Models.FactFinderModulesModel](#advicent.factfinderservice.models.factfindermodulesmodel)
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted)

### Advicent.FactFinderService.Models.FactFinderWithUserGuidModel
* Advicent.FactFinderService.Models.FactFinderWithUserGuidModel `object`
  * countryCode `string` (values: UnitedStates, Canada)
  * created `string`
  * externalId `string`
  * externalSystem `string` (values: Naviplan)
  * factFinderId `integer`
  * factFinderUserId `integer`
  * lastStatusUpdate `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * modules [Advicent.FactFinderService.Models.FactFinderModulesModel](#advicent.factfinderservice.models.factfindermodulesmodel)
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted)
  * userGuid `string`

### Advicent.FactFinderService.Models.FactFinderWithUserGuidsModel
* Advicent.FactFinderService.Models.FactFinderWithUserGuidsModel `object`
  * factFinderWithUserGuids `array`
    * items [Advicent.FactFinderService.Models.FactFinderWithUserGuidModel](#advicent.factfinderservice.models.factfinderwithuserguidmodel)

### Advicent.FactFinderService.Models.FactFinderWithUserNameModel
* Advicent.FactFinderService.Models.FactFinderWithUserNameModel `object`
  * countryCode `string` (values: UnitedStates, Canada)
  * created `string`
  * externalId `string`
  * externalSystem `string` (values: Naviplan)
  * factFinderId `integer`
  * factFinderUserId `integer`
  * lastStatusUpdate `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * modules [Advicent.FactFinderService.Models.FactFinderModulesModel](#advicent.factfinderservice.models.factfindermodulesmodel)
  * status `string` (values: New, InProgress, ClientSubmitted, AdvisorAccepted)
  * userName `string`

### Advicent.FactFinderService.Models.FactFindersWithUserNamesModel
* Advicent.FactFinderService.Models.FactFindersWithUserNamesModel `object`
  * factFinderWithUserNames `array`
    * items [Advicent.FactFinderService.Models.FactFinderWithUserNameModel](#advicent.factfinderservice.models.factfinderwithusernamemodel)

### Advicent.FactFinderService.Models.FamilyHeadModel
* Advicent.FactFinderService.Models.FamilyHeadModel `object`
  * alreadyRetired **required** `boolean`
  * birthDate **required** `string`
  * externalDestinationId `string`
  * firstName **required** `string`
  * gender **required** `string` (values: Male, Female)
  * lastName **required** `string`
  * taxFilingStatus **required** `integer`

### Advicent.FactFinderService.Models.FilingStatusTypeModel
* Advicent.FactFinderService.Models.FilingStatusTypeModel `object`
  * filingStatusTypeId `integer`
  * filingStatusTypeName `string`
  * hasJointDependent `boolean`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * partnerStatuses `array`
    * items `integer`
  * validForSingleAnalysis `boolean`

### Advicent.FactFinderService.Models.FilingStatusTypesModel
* Advicent.FactFinderService.Models.FilingStatusTypesModel `object`
  * filingStatusTypes `array`
    * items [Advicent.FactFinderService.Models.FilingStatusTypeModel](#advicent.factfinderservice.models.filingstatustypemodel)

### Advicent.FactFinderService.Models.FrequencyTypeModel
* Advicent.FactFinderService.Models.FrequencyTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.FrequencyTypesModel
* Advicent.FactFinderService.Models.FrequencyTypesModel `object`
  * frequencyTypes `array`
    * items [Advicent.FactFinderService.Models.FrequencyTypeModel](#advicent.factfinderservice.models.frequencytypemodel)

### Advicent.FactFinderService.Models.IncomeModel
* Advicent.FactFinderService.Models.IncomeModel `object`
  * annualAmount `number`
  * description **required** `string`
  * endDate `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * incomeTypeId `integer`
  * owner `string` (values: Client, CoClient)
  * startDate `string`

### Advicent.FactFinderService.Models.IncomeTypeModel
* Advicent.FactFinderService.Models.IncomeTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.IncomeTypesModel
* Advicent.FactFinderService.Models.IncomeTypesModel `object`
  * incomeTypes `array`
    * items [Advicent.FactFinderService.Models.IncomeTypeModel](#advicent.factfinderservice.models.incometypemodel)

### Advicent.FactFinderService.Models.IncomeWithIdModel
* Advicent.FactFinderService.Models.IncomeWithIdModel `object`
  * annualAmount `number`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * incomeId `integer`
  * incomeTypeId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * owner `string` (values: Client, CoClient)
  * startDate `string`

### Advicent.FactFinderService.Models.IncomesModel
* Advicent.FactFinderService.Models.IncomesModel `object`
  * incomes `array`
    * items [Advicent.FactFinderService.Models.IncomeWithIdModel](#advicent.factfinderservice.models.incomewithidmodel)

### Advicent.FactFinderService.Models.LiabilitiesModel
* Advicent.FactFinderService.Models.LiabilitiesModel `object`
  * liabilities `array`
    * items [Advicent.FactFinderService.Models.LiabilityWithIdModel](#advicent.factfinderservice.models.liabilitywithidmodel)

### Advicent.FactFinderService.Models.LiabilityModel
* Advicent.FactFinderService.Models.LiabilityModel `object`
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

### Advicent.FactFinderService.Models.LiabilityTypeModel
* Advicent.FactFinderService.Models.LiabilityTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.LiabilityTypesModel
* Advicent.FactFinderService.Models.LiabilityTypesModel `object`
  * liabilityTypes `array`
    * items [Advicent.FactFinderService.Models.LiabilityTypeModel](#advicent.factfinderservice.models.liabilitytypemodel)

### Advicent.FactFinderService.Models.LiabilityWithIdModel
* Advicent.FactFinderService.Models.LiabilityWithIdModel `object`
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
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * loanDate `string`
  * originalPrincipal `number`
  * owner `string` (values: Client, CoClient, Joint)
  * payment `number`
  * paymentType `string` (values: InterestOnly, PrincipalAndInterest, SetPrincipal, LastPeriod)

### Advicent.FactFinderService.Models.LifeInsurancePoliciesModel
* Advicent.FactFinderService.Models.LifeInsurancePoliciesModel `object`
  * lifeInsurancePolicies `array`
    * items [Advicent.FactFinderService.Models.LifeInsurancePolicyWithIdModel](#advicent.factfinderservice.models.lifeinsurancepolicywithidmodel)

### Advicent.FactFinderService.Models.LifeInsurancePolicyModel
* Advicent.FactFinderService.Models.LifeInsurancePolicyModel `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`

### Advicent.FactFinderService.Models.LifeInsurancePolicyTypeModel
* Advicent.FactFinderService.Models.LifeInsurancePolicyTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.LifeInsurancePolicyTypesModel
* Advicent.FactFinderService.Models.LifeInsurancePolicyTypesModel `object`
  * insurancePolicyTypes `array`
    * items [Advicent.FactFinderService.Models.LifeInsurancePolicyTypeModel](#advicent.factfinderservice.models.lifeinsurancepolicytypemodel)

### Advicent.FactFinderService.Models.LifeInsurancePolicyWithIdModel
* Advicent.FactFinderService.Models.LifeInsurancePolicyWithIdModel `object`
  * beneficiary `string` (values: Client, CoClient, Dependent, Other)
  * beneficiaryDependentId `integer`
  * benefit `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * payer `string` (values: Client, CoClient, Joint, Other)
  * policyType `integer`
  * premium `number`

### Advicent.FactFinderService.Models.LifestyleAssetModel
* Advicent.FactFinderService.Models.LifestyleAssetModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * type `integer`

### Advicent.FactFinderService.Models.LifestyleAssetTypeModel
* Advicent.FactFinderService.Models.LifestyleAssetTypeModel `object`
  * id `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * name `string`

### Advicent.FactFinderService.Models.LifestyleAssetTypesModel
* Advicent.FactFinderService.Models.LifestyleAssetTypesModel `object`
  * lifestyleAssetTypes `array`
    * items [Advicent.FactFinderService.Models.LifestyleAssetTypeModel](#advicent.factfinderservice.models.lifestyleassettypemodel)

### Advicent.FactFinderService.Models.LifestyleAssetWithIdModel
* Advicent.FactFinderService.Models.LifestyleAssetWithIdModel `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * lifestyleAssetId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * type `integer`

### Advicent.FactFinderService.Models.LifestyleAssetsModel
* Advicent.FactFinderService.Models.LifestyleAssetsModel `object`
  * lifestyleAssets `array`
    * items [Advicent.FactFinderService.Models.LifestyleAssetWithIdModel](#advicent.factfinderservice.models.lifestyleassetwithidmodel)

### Advicent.FactFinderService.Models.LongTermCareInsurancePoliciesModel
* Advicent.FactFinderService.Models.LongTermCareInsurancePoliciesModel `object`
  * longTermCareInsurancePolicies `array`
    * items [Advicent.FactFinderService.Models.LongTermCareInsurancePolicyWithIdModel](#advicent.factfinderservice.models.longtermcareinsurancepolicywithidmodel)

### Advicent.FactFinderService.Models.LongTermCareInsurancePolicyModel
* Advicent.FactFinderService.Models.LongTermCareInsurancePolicyModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * insured `string` (values: Client, CoClient)
  * premium `number`
  * premiumFrequency `integer`

### Advicent.FactFinderService.Models.LongTermCareInsurancePolicyWithIdModel
* Advicent.FactFinderService.Models.LongTermCareInsurancePolicyWithIdModel `object`
  * benefit `number`
  * benefitFrequency `integer`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * insurancePolicyId `integer`
  * insured `string` (values: Client, CoClient)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * premium `number`
  * premiumFrequency `integer`

### Advicent.FactFinderService.Models.MajorPurchaseGoalModel
* Advicent.FactFinderService.Models.MajorPurchaseGoalModel `object`
  * amount `number`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * majorPurchaseGoalTypeId `integer`
  * member `string` (values: Head1, Head2, Joint)
  * targetDate `string`

### Advicent.FactFinderService.Models.MajorPurchaseGoalTypeModel
* Advicent.FactFinderService.Models.MajorPurchaseGoalTypeModel `object`
  * description `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * majorPurchaseGoalTypeId `integer`

### Advicent.FactFinderService.Models.MajorPurchaseGoalTypesModel
* Advicent.FactFinderService.Models.MajorPurchaseGoalTypesModel `object`
  * majorPurchaseGoalTypes `array`
    * items [Advicent.FactFinderService.Models.MajorPurchaseGoalTypeModel](#advicent.factfinderservice.models.majorpurchasegoaltypemodel)

### Advicent.FactFinderService.Models.MajorPurchaseGoalWithIdModel
* Advicent.FactFinderService.Models.MajorPurchaseGoalWithIdModel `object`
  * amount `number`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * majorPurchaseGoalId `integer`
  * majorPurchaseGoalTypeId `integer`
  * member `string` (values: Head1, Head2, Joint)
  * targetDate `string`

### Advicent.FactFinderService.Models.MajorPurchaseGoalsModel
* Advicent.FactFinderService.Models.MajorPurchaseGoalsModel `object`
  * majorPurchaseGoals `array`
    * items [Advicent.FactFinderService.Models.MajorPurchaseGoalWithIdModel](#advicent.factfinderservice.models.majorpurchasegoalwithidmodel)

### Advicent.FactFinderService.Models.RealEstateAssetModel
* Advicent.FactFinderService.Models.RealEstateAssetModel `object`
  * description **required** `string`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * frequency `integer`
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * rentalIncome `number`

### Advicent.FactFinderService.Models.RealEstateAssetWithIdModel
* Advicent.FactFinderService.Models.RealEstateAssetWithIdModel `object`
  * description `string`
  * externalDestinationId `string`
  * factFinderId `integer`
  * frequency `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * marketValue `number`
  * owner `string` (values: Client, CoClient, Joint)
  * purchaseAmount `number`
  * purchaseDate `string`
  * realEstateAssetId `integer`
  * rentalIncome `number`

### Advicent.FactFinderService.Models.RealEstateAssetsModel
* Advicent.FactFinderService.Models.RealEstateAssetsModel `object`
  * realEstateAssets `array`
    * items [Advicent.FactFinderService.Models.RealEstateAssetWithIdModel](#advicent.factfinderservice.models.realestateassetwithidmodel)

### Advicent.FactFinderService.Models.RetirementExpenseModel
* Advicent.FactFinderService.Models.RetirementExpenseModel `object`
  * amount `number`
  * annualPeriod `integer`
  * description **required** `string`
  * endDate `string`
  * externalDestinationId `string`
  * frequency `integer`
  * member `string` (values: Head1, Head2, Joint)
  * startDate `string`

### Advicent.FactFinderService.Models.RetirementExpenseWithIdModel
* Advicent.FactFinderService.Models.RetirementExpenseWithIdModel `object`
  * amount `number`
  * annualPeriod `integer`
  * description `string`
  * endDate `string`
  * externalDestinationId `string`
  * frequency `integer`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * member `string` (values: Head1, Head2, Joint)
  * retirementExpenseId `integer`
  * retirementGoalId `integer`
  * startDate `string`

### Advicent.FactFinderService.Models.RetirementExpensesModel
* Advicent.FactFinderService.Models.RetirementExpensesModel `object`
  * retirementExpenses `array`
    * items [Advicent.FactFinderService.Models.RetirementExpenseWithIdModel](#advicent.factfinderservice.models.retirementexpensewithidmodel)

### Advicent.FactFinderService.Models.RetirementGoalModel
* Advicent.FactFinderService.Models.RetirementGoalModel `object`
  * externalDestinationId `string`
  * factFinderId **required** `integer`
  * head1RetirementDate `string`
  * head2RetirementDate `string`

### Advicent.FactFinderService.Models.RetirementGoalWithIdModel
* Advicent.FactFinderService.Models.RetirementGoalWithIdModel `object`
  * externalDestinationId `string`
  * factFinderId `integer`
  * head1RetirementDate `string`
  * head2RetirementDate `string`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * retirementGoalId `integer`

### Advicent.FactFinderService.Models.RetirementGoalsModel
* Advicent.FactFinderService.Models.RetirementGoalsModel `object`
  * retirementGoals `array`
    * items [Advicent.FactFinderService.Models.RetirementGoalWithIdModel](#advicent.factfinderservice.models.retirementgoalwithidmodel)

### Advicent.FactFinderService.Models.ServiceInformationModel
* Advicent.FactFinderService.Models.ServiceInformationModel `object`
  * name `string`
  * schemaVersion `integer`
  * serviceVersion `string`
  * status `string`

### Advicent.FactFinderService.Models.StateProvinceModel
* Advicent.FactFinderService.Models.StateProvinceModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * stateProvinceId `integer`
  * stateProvinceName `string`

### Advicent.FactFinderService.Models.StatesProvincesModel
* Advicent.FactFinderService.Models.StatesProvincesModel `object`
  * statesProvinces `array`
    * items [Advicent.FactFinderService.Models.StateProvinceModel](#advicent.factfinderservice.models.stateprovincemodel)

### Advicent.Web.Base.Links.ObjectLink
* Advicent.Web.Base.Links.ObjectLink `object`
  * href `string`
  * rel `string`

### System.Object
* System.Object `object`


