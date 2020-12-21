# @datafire/naviplancentral_plan

Client library for NaviPlan API

## Installation and Usage
```bash
npm install --save @datafire/naviplancentral_plan
```
```js
let naviplancentral_plan = require('@datafire/naviplancentral_plan').create();

.then(data => {
  console.log(data);
});
```

## Description

An API for accessing NaviPlan plan data for a client.

## Actions

### Advisors_Get
This operation retrieves a list of all of the Advisors in the plan.


```js
naviplancentral_plan.Advisors_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AdvisorsModel](#advisorsmodel)

### Advisors_GetByHouseholdidClientid
This operation retrieves a list of all of the Advisors for the client.


```js
naviplancentral_plan.Advisors_GetByHouseholdidClientid({
  "householdId": 0,
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * householdId **required** `integer`: Integer id of the household
  * clientId **required** `string`: Guid id of the client.

#### Output
* output [AdvisorsModel](#advisorsmodel)

### Advisors_GetById
This operation retrieves an Advisor from the plan.


```js
naviplancentral_plan.Advisors_GetById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Guid id of the advisor

#### Output
* output [AdvisorModel](#advisormodel)

### Assumptions_GetByPlanid
This operation retrieves an object containing all assumptions for the specified plan.


```js
naviplancentral_plan.Assumptions_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [AssumptionsModel](#assumptionsmodel)

### BusinessEntities_GetByPlanid
This operation retrieves a list of all of the business entities in the plan.


```js
naviplancentral_plan.BusinessEntities_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [BusinessEntitiesModel](#businessentitiesmodel)

### BusinessEntities_GetByIdPlanid
This operation retrieves a business entity from the plan.


```js
naviplancentral_plan.BusinessEntities_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of business entity to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [BusinessEntityModel](#businessentitymodel)

### Calculations_GetByPlanid
Currently just stubbed out, POC in development


```js
naviplancentral_plan.Calculations_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output `boolean`

### DefinedBenefitPensions_GetByPlanid
This operation retrieves a list of all of the defined benefit pensions in the plan.


```js
naviplancentral_plan.DefinedBenefitPensions_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [DefinedBenefitPensionsModel](#definedbenefitpensionsmodel)

### DefinedBenefitPensions_GetByIdPlanid
This operation retrieves a defined benefit pension from the plan.


```js
naviplancentral_plan.DefinedBenefitPensions_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of defined benefit pension to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [DefinedBenefitPensionModel](#definedbenefitpensionmodel)

### Eula_Accept
Accepts the EULA


```js
naviplancentral_plan.Eula_Accept(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Family_GetByPlanid
This operation retrieves an object containing all familymembers for the specified plan.


```js
naviplancentral_plan.Family_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [FamilyModel](#familymodel)

### GoalAdjustments_GetEducationByIdClientidPlanid
This function retrieves a goal and the adjustments made to it


```js
naviplancentral_plan.GoalAdjustments_GetEducationByIdClientidPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the goal to retrieve adjustments for.
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsEducationGoalAdjustmentsModel](#advicentnaviplanrestapigoaladjustmentsmodelseducationgoaladjustmentsmodel)

### GoalAdjustments_PostEducationByIdGoaladjustmentsPlanid
This function returns the posted object and the adjusted calculation values


```js
naviplancentral_plan.GoalAdjustments_PostEducationByIdGoaladjustmentsPlanid({
  "id": 0,
  "goalAdjustments": {},
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the goal to retrieve adjustments for.
  * goalAdjustments **required** [AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsmodelsgoaladjustmentsmodeladvicentdomainlogicgoalwhatifeducationgoaladjustments)
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsmodelscoverageprojectionsresultmodeladvicentdomainlogicgoalwhatifeducationgoaladjustments)

### GoalAdjustments_GetGoalSuccessRatesByClientidPlanid
Returns a list of goals with their relevant success rates.


```js
naviplancentral_plan.GoalAdjustments_GetGoalSuccessRatesByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalSuccessRateResultsModel](#advicentnaviplanrestapigoaladjustmentsmodelsgoalsuccessrateresultsmodel)

### GoalAdjustments_GetMajorPurchaseByIdClientidPlanid
This function retrieves a goal and the adjustments made to it


```js
naviplancentral_plan.GoalAdjustments_GetMajorPurchaseByIdClientidPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the goal to retrieve adjustments for.
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsMajorPurchaseGoalAdjustmentsModel](#advicentnaviplanrestapigoaladjustmentsmodelsmajorpurchasegoaladjustmentsmodel)

### GoalAdjustments_PostMajorPurchaseByIdGoaladjustmentsPlanid
This function returns the posted object and the adjusted calculation values


```js
naviplancentral_plan.GoalAdjustments_PostMajorPurchaseByIdGoaladjustmentsPlanid({
  "id": 0,
  "goalAdjustments": {},
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the goal to retrieve adjustments for.
  * goalAdjustments **required** [AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsmodelsgoaladjustmentsmodeladvicentdomainlogicgoalwhatifmajorpurchasegoaladjustments)
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsmodelscoverageprojectionsresultmodeladvicentdomainlogicgoalwhatifmajorpurchasegoaladjustments)

### GoalAdjustments_GetGoalAdjustmentRestrictionsByClientidPlanid
This function returns a list of adjustment restrictions for all goals.


```js
naviplancentral_plan.GoalAdjustments_GetGoalAdjustmentRestrictionsByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsRestrictionsResultModel](#advicentnaviplanrestapigoaladjustmentsmodelsrestrictionsresultmodel)

### GoalAdjustments_GetRetirementByClientidPlanid
This function retrieves a goal and the adjustments made to it for a particular client


```js
naviplancentral_plan.GoalAdjustments_GetRetirementByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsRetirementGoalAdjustmentsModel](#advicentnaviplanrestapigoaladjustmentsmodelsretirementgoaladjustmentsmodel)

### GoalAdjustments_PostRetirementByGoaladjustmentsPlanid
This function returns the posted object and the adjusted calculation values


```js
naviplancentral_plan.GoalAdjustments_PostRetirementByGoaladjustmentsPlanid({
  "goalAdjustments": {},
  "planId": ""
}, context)
```

#### Input
* input `object`
  * goalAdjustments **required** [AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsmodelsgoaladjustmentsmodeladvicentdomainlogicgoalwhatifretirementgoaladjustments)
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsmodelscoverageprojectionsresultmodeladvicentdomainlogicgoalwhatifretirementgoaladjustments)

### GoalAdjustments_GetWhatAreMyOptionsByIdClientidPlanid
Returns WAMO values for current goal


```js
naviplancentral_plan.GoalAdjustments_GetWhatAreMyOptionsByIdClientidPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the goal to retrieve WAMO values for.
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsWhatAreMyOptionsModel](#advicentnaviplanrestapigoaladjustmentsmodelswhataremyoptionsmodel)

### Goals_GetByPlanid
This operation retrieves a list of all of the goals in the plan.


```js
naviplancentral_plan.Goals_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [GoalsModel](#goalsmodel)

### Goals_GetByIdPlanid
This operation retrieves a goal from the plan.


```js
naviplancentral_plan.Goals_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of goal to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [GoalModel](#goalmodel)

### HoldingCompanies_GetByPlanid
This operation retrieves a list of all of the holding companies in the plan.


```js
naviplancentral_plan.HoldingCompanies_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [HoldingCompaniesModel](#holdingcompaniesmodel)

### HoldingCompanies_GetByIdPlanid
This operation retrieves a holding company from the plan.


```js
naviplancentral_plan.HoldingCompanies_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of holding company to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [HoldingCompanyModel](#holdingcompanymodel)

### Households_GetByHouseholdid
This operation retrieves a list of households the current user has access to or one household specified by a householdId parameter


```js
naviplancentral_plan.Households_GetByHouseholdid({}, context)
```

#### Input
* input `object`
  * householdId `integer`: The Id of the specific household to retrieve

#### Output
* output [HouseholdsModel](#householdsmodel)

### Liabilities_GetByPlanid
This operation retrieves a list of all of the liabilities in the plan.


```js
naviplancentral_plan.Liabilities_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [LiabilitiesModel](#liabilitiesmodel)

### Liabilities_GetByIdPlanid
This operation retrieves a liability from the plan.


```js
naviplancentral_plan.Liabilities_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of liability to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [LiabilityModel](#liabilitymodel)

### LifestyleAssets_GetByPlanid
This operation retrieves a list of all of the lifestyle assets in the plan.


```js
naviplancentral_plan.LifestyleAssets_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [LifestyleAssetsModel](#lifestyleassetsmodel)

### LifestyleAssets_GetByIdPlanid
This operation retrieves a lifestyle asset from the plan.


```js
naviplancentral_plan.LifestyleAssets_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of lifestyle asset to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [LifestyleAssetModel](#lifestyleassetmodel)

### LivePlan_GetGoalsByClientidPlanid
Retrieves all goals from the live plan


```js
naviplancentral_plan.LivePlan_GetGoalsByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalsModelsLiveGoalBaseModel](#advicentnaviplanrestapigoalsmodelslivegoalbasemodel)

### LivePlan_GetGoalFundingListByClientidPlanid
This function retrieves a list of funding accounts for the goals in the plan


```js
naviplancentral_plan.LivePlan_GetGoalFundingListByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalsModelsGoalFundingListModel](#advicentnaviplanrestapigoalsmodelsgoalfundinglistmodel)

### LivePlan_GetWhatAreMyOptionsByIdClientidPlanid
This function retrieves the WAMO values for the specified goal


```js
naviplancentral_plan.LivePlan_GetWhatAreMyOptionsByIdClientidPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The id of the goal
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiGoalAdjustmentsModelsWhatAreMyOptionsModel](#advicentnaviplanrestapigoaladjustmentsmodelswhataremyoptionsmodel)

### LivePlan_GetAccountsByClientidPlanid
Retrieves accounts for a given plan


```js
naviplancentral_plan.LivePlan_GetAccountsByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiNetWorthModelsAccountBaseModel](#advicentnaviplanrestapinetworthmodelsaccountbasemodel)

### LivePlan_GetLiabilitiesByClientidPlanid
Retrieves liabilities for a given plan


```js
naviplancentral_plan.LivePlan_GetLiabilitiesByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiNetWorthModelsLiabilityBaseModel](#advicentnaviplanrestapinetworthmodelsliabilitybasemodel)

### LivePlan_GetLifestyleAssetsByClientidPlanid
Retrieves lifestyle assets for a given plan


```js
naviplancentral_plan.LivePlan_GetLifestyleAssetsByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiNetWorthModelsLifestyleAssetBaseModel](#advicentnaviplanrestapinetworthmodelslifestyleassetbasemodel)

### LivePlan_GetRealEstateAssetsByClientidPlanid
Retrieves real estate accounts for a given plan


```js
naviplancentral_plan.LivePlan_GetRealEstateAssetsByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiNetWorthModelsRealEstateBaseModel](#advicentnaviplanrestapinetworthmodelsrealestatebasemodel)

### LivePlan_GetProjectedNetWorthByClientidPlanid
Retrieves net worth projections


```js
naviplancentral_plan.LivePlan_GetProjectedNetWorthByClientidPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiProjectionsModelsNetWorthProjectionsModel](#advicentnaviplanrestapiprojectionsmodelsnetworthprojectionsmodel)

### LivePlan_GetProjectedNeedsVsAbilitiesByIdClientidPlanid
Retrieves needs vs abilities projections


```js
naviplancentral_plan.LivePlan_GetProjectedNeedsVsAbilitiesByIdClientidPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

#### Output
* output [AdvicentNaviPlanRestApiProjectionsModelsNeedsVsAbilitiesProjectionsModel](#advicentnaviplanrestapiprojectionsmodelsneedsvsabilitiesprojectionsmodel)

### NetWorth_GetByPlanid
This operation retrieves an object containing net worth values for specific dates within the plan:
              * Plan Start Date
              * Retirement Date
              * Plan End Date.


```js
naviplancentral_plan.NetWorth_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [NetWorthModel](#networthmodel)

### Password_HasUserSetPassword
Determines if the currently logged in user has set their own password


```js
naviplancentral_plan.Password_HasUserSetPassword(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Password_PasswordRequirements
Gets the password complexity requirements


```js
naviplancentral_plan.Password_PasswordRequirements(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Password_ResetByModel
Resets the password for the supplied user name


```js
naviplancentral_plan.Password_ResetByModel({
  "model": {
    "userName": "",
    "locale": ""
  }
}, context)
```

#### Input
* input `object`
  * model **required** [ResetPasswordModel](#resetpasswordmodel)

#### Output
*Output schema unknown*

### Password_SetByModel
Sets the password for the currently logged in user


```js
naviplancentral_plan.Password_SetByModel({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [SetPasswordModel](#setpasswordmodel)

#### Output
*Output schema unknown*

### PlanInformation_GetByPlanid
This operation retrieves the high level plan information for a given plan


```js
naviplancentral_plan.PlanInformation_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [PlanInformationModel](#planinformationmodel)

### PlanStatuses_GetByPlanid
This operation retrieves the data statuses of the published plan if on demand updates
            are enabled


```js
naviplancentral_plan.PlanStatuses_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3)

#### Output
* output [PlanStatusesModel](#planstatusesmodel)

### PortfolioAccounts_GetByPlanid
This operation retrieves a list of all of the portfolio accounts in the plan.


```js
naviplancentral_plan.PortfolioAccounts_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [PortfolioAccountsModel](#portfolioaccountsmodel)

### PortfolioAccounts_GetByIdPlanid
This operation retrieves a portfolio account from the plan.


```js
naviplancentral_plan.PortfolioAccounts_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of portfolio account to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [PortfolioAccountModel](#portfolioaccountmodel)

### ProjectedAnnualSummary_GetByPlanid
This operation retrieves an object containing annual summary information 
              for each year of the projected plan.


```js
naviplancentral_plan.ProjectedAnnualSummary_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [ProjectedAnnualSummariesModel](#projectedannualsummariesmodel)

### ProjectedAnnualSummary_GetByIdPlanid
This operation retrieves an object containing annual summary information 
              for a single specified year of the projected plan.


```js
naviplancentral_plan.ProjectedAnnualSummary_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Index into the list of annual projections
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [ProjectedAnnualSummaryModel](#projectedannualsummarymodel)

### ProjectedCashFlow_GetByPlanid
This operation retrieves an object containing cash flow information 
              for each year of the projected plan.


```js
naviplancentral_plan.ProjectedCashFlow_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [CashFlowProjectionsModel](#cashflowprojectionsmodel)

### ProjectedCashFlow_GetByIdPlanid
This operation retrieves an object containing cash flow information 
              for a single specified year of the projected plan.


```js
naviplancentral_plan.ProjectedCashFlow_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Index into the list of annual projections
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [CashFlowProjectionModel](#cashflowprojectionmodel)

### ProjectedGoals_GetAssetsFundingGoalsByPlanid
This operation retrieves the assets funding each goal throughout the plan years


```js
naviplancentral_plan.ProjectedGoals_GetAssetsFundingGoalsByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [AssetsFundingGoalModel](#assetsfundinggoalmodel)

### ProjectedGoals_GetNeedsVsAbilitiesByPlanid
This operation retrieves a needs and abilities data for all goals throughout
              the plan years.


```js
naviplancentral_plan.ProjectedGoals_GetNeedsVsAbilitiesByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [NeedsVsAbilitiesModel](#needsvsabilitiesmodel)

### ProjectedNetWorth_GetByPlanid
This operation retrieves an object containing net worth information 
              for each year of the projected plan. These are EOY numbers.


```js
naviplancentral_plan.ProjectedNetWorth_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [NetWorthProjectionsModel](#networthprojectionsmodel)

### ProjectedNetWorth_GetByIdPlanid
This operation retrieves an object containing net worth information 
              for a single specified year of the projected plan. These are EOY numbers.


```js
naviplancentral_plan.ProjectedNetWorth_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Index into the list of annual projections
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [NetWorthProjectionModel](#networthprojectionmodel)

### RestrictedStocks_GetByPlanid
This operation retrieves a list of all of the restricted stocks in the plan.


```js
naviplancentral_plan.RestrictedStocks_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [RestrictedStocksModel](#restrictedstocksmodel)

### RestrictedStocks_GetByIdPlanid
This operation retrieves a restricted stock from the plan.


```js
naviplancentral_plan.RestrictedStocks_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of restricted stock to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [RestrictedStockModel](#restrictedstockmodel)

### ServiceInformation_Statistics
This resource can be used to check the status of the service.


```js
naviplancentral_plan.ServiceInformation_Statistics(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServiceInformation](#serviceinformation)

### StockOptions_GetByPlanid
This operation retrieves a list of all of the stock options in the plan.


```js
naviplancentral_plan.StockOptions_GetByPlanid({
  "planId": ""
}, context)
```

#### Input
* input `object`
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [StockOptionsModel](#stockoptionsmodel)

### StockOptions_GetByIdPlanid
This operation retrieves a stock option from the plan.


```js
naviplancentral_plan.StockOptions_GetByIdPlanid({
  "id": 0,
  "planId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of stock option to retrieve
  * planId **required** `string`: Id of the plan to retrieve data from (e.g. 1001-11-3).

#### Output
* output [StockOptionModel](#stockoptionmodel)

### Auth_LoginByModel
Start a session with the DomainProviders user store


```js
naviplancentral_plan.Auth_LoginByModel({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [LoginModel](#loginmodel)

#### Output
* output [PublicSessionInfoModel](#publicsessioninfomodel)

### Auth_PasswordRequirements
Gets the login rules


```js
naviplancentral_plan.Auth_PasswordRequirements(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Auth_Logout



```js
naviplancentral_plan.Auth_Logout(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Auth_ResumeSession
Validate and extend the duration of a session


```js
naviplancentral_plan.Auth_ResumeSession(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PublicSessionInfoModel](#publicsessioninfomodel)



## Definitions

### AdvicentDomainLogicGoalWhatIfEducationGoalAdjustments
* AdvicentDomainLogicGoalWhatIfEducationGoalAdjustments `object`
  * duration `number`
  * expensesCovered `number`
  * lumpSumContribution `number`
  * lumpSumDate `string`
  * monthlySavingsContribution `number`

### AdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments
* AdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments `object`
  * lumpSumContribution `number`
  * lumpSumDate `string`
  * monthlySavingsContribution `number`
  * targetDate `string`
  * totalNeed `number`

### AdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments
* AdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments `object`
  * clientRetirementAge `number`
  * coClientRetirementAge `number`
  * discretionaryExpenseCoverage `number`
  * fixedExpenseCoverage `number`
  * lumpSumContribution `number`
  * lumpSumDate `string`
  * monthlySavingsContribution `number`

### AdvicentNaviPlanRestApiGoalAdjustmentsCalcProjection
* AdvicentNaviPlanRestApiGoalAdjustmentsCalcProjection `object`
  * projectedAbilities `number`
  * projectedNeed `number`
  * projectedRetirementAssetValues `number`
  * year `integer`

### AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections
* AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections `object`
  * goalId `integer`
  * percentCovered `number`
  * projections `array`
    * items [AdvicentNaviPlanRestApiGoalAdjustmentsCalcProjection](#advicentnaviplanrestapigoaladjustmentscalcprojection)

### AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfEducationGoalAdjustments](#advicentdomainlogicgoalwhatifeducationgoaladjustments)
  * created `string`
  * goalId `integer`

### AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments](#advicentdomainlogicgoalwhatifmajorpurchasegoaladjustments)
  * created `string`
  * goalId `integer`

### AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments](#advicentdomainlogicgoalwhatifretirementgoaladjustments)
  * created `string`
  * goalId `integer`

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments `object`
  * goalAdjustments [AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsgoaladjustmentsresultadvicentdomainlogicgoalwhatifeducationgoaladjustments)
  * projectedResults [AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections](#advicentnaviplanrestapigoaladjustmentscoverageprojections)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments `object`
  * goalAdjustments [AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsgoaladjustmentsresultadvicentdomainlogicgoalwhatifmajorpurchasegoaladjustments)
  * projectedResults [AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections](#advicentnaviplanrestapigoaladjustmentscoverageprojections)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsCoverageProjectionsResultModelAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments `object`
  * goalAdjustments [AdvicentNaviPlanRestApiGoalAdjustmentsGoalAdjustmentsResultAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments](#advicentnaviplanrestapigoaladjustmentsgoaladjustmentsresultadvicentdomainlogicgoalwhatifretirementgoaladjustments)
  * projectedResults [AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections](#advicentnaviplanrestapigoaladjustmentscoverageprojections)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsEducationGoalAdjustmentsModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsEducationGoalAdjustmentsModel `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfEducationGoalAdjustments](#advicentdomainlogicgoalwhatifeducationgoaladjustments)
  * created `string`
  * goalId `integer`
  * projectedResults [AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections](#advicentnaviplanrestapigoaladjustmentscoverageprojections)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfEducationGoalAdjustments `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfEducationGoalAdjustments](#advicentdomainlogicgoalwhatifeducationgoaladjustments)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments](#advicentdomainlogicgoalwhatifmajorpurchasegoaladjustments)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalAdjustmentsModelAdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments](#advicentdomainlogicgoalwhatifretirementgoaladjustments)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalSuccessRateModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalSuccessRateModel `object`
  * description `string`
  * goalId `integer`
  * successRate `number`

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalSuccessRateResultsModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalSuccessRateResultsModel `object`
  * goalSuccessRateResults `array`
    * items [AdvicentNaviPlanRestApiGoalAdjustmentsModelsGoalSuccessRateModel](#advicentnaviplanrestapigoaladjustmentsmodelsgoalsuccessratemodel)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsMajorPurchaseGoalAdjustmentsModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsMajorPurchaseGoalAdjustmentsModel `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfMajorPurchaseGoalAdjustments](#advicentdomainlogicgoalwhatifmajorpurchasegoaladjustments)
  * created `string`
  * goalId `integer`
  * projectedResults [AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections](#advicentnaviplanrestapigoaladjustmentscoverageprojections)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsRestrictionsEducationRestriction
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsRestrictionsEducationRestriction `object`
  * canChangeDuration `boolean`
  * goalId `integer`

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsRestrictionsResultModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsRestrictionsResultModel `object`
  * educationRestrictions `array`
    * items [AdvicentNaviPlanRestApiGoalAdjustmentsModelsRestrictionsEducationRestriction](#advicentnaviplanrestapigoaladjustmentsmodelsrestrictionseducationrestriction)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsRetirementGoalAdjustmentsModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsRetirementGoalAdjustmentsModel `object`
  * adjustedValues [AdvicentDomainLogicGoalWhatIfRetirementGoalAdjustments](#advicentdomainlogicgoalwhatifretirementgoaladjustments)
  * created `string`
  * goalId `integer`
  * projectedResults [AdvicentNaviPlanRestApiGoalAdjustmentsCoverageProjections](#advicentnaviplanrestapigoaladjustmentscoverageprojections)

### AdvicentNaviPlanRestApiGoalAdjustmentsModelsWhatAreMyOptionsModel
* AdvicentNaviPlanRestApiGoalAdjustmentsModelsWhatAreMyOptionsModel `object`
  * additionalMonthlySavings `number`
  * clientRetirementAge `integer`
  * clientRetirementAgeDate `string`
  * coClientRetirementAge `integer`
  * coClientRetirementAgeDate `string`
  * expenseCoverageDollars `number`
  * expenseCoveragePercentage `number`
  * lumpSumSavings `number`
  * purchaseDate `string`

### AdvicentNaviPlanRestApiGoalsModelsGoalFundingAccount
* AdvicentNaviPlanRestApiGoalsModelsGoalFundingAccount `object`
  * accountId `integer`
  * description `string`
  * fundingAmount `number`

### AdvicentNaviPlanRestApiGoalsModelsGoalFundingListItem
* AdvicentNaviPlanRestApiGoalsModelsGoalFundingListItem `object`
  * description `string`
  * fundingAccounts `array`
    * items [AdvicentNaviPlanRestApiGoalsModelsGoalFundingAccount](#advicentnaviplanrestapigoalsmodelsgoalfundingaccount)
  * goalId `integer`

### AdvicentNaviPlanRestApiGoalsModelsGoalFundingListModel
* AdvicentNaviPlanRestApiGoalsModelsGoalFundingListModel `object`
  * goals `array`
    * items [AdvicentNaviPlanRestApiGoalsModelsGoalFundingListItem](#advicentnaviplanrestapigoalsmodelsgoalfundinglistitem)

### AdvicentNaviPlanRestApiGoalsModelsLiveGoalBase
* AdvicentNaviPlanRestApiGoalsModelsLiveGoalBase `object`
  * amount `number`
  * coveragePercentage `number`
  * description `string`
  * endDate `string`
  * id `integer`
  * inflationRate `number`
  * owners `array`
    * items [AdvicentNaviPlanRestApiModelsOwnerModel](#advicentnaviplanrestapimodelsownermodel)
  * startDate `string`
  * type `string`

### AdvicentNaviPlanRestApiGoalsModelsLiveGoalBaseModel
* AdvicentNaviPlanRestApiGoalsModelsLiveGoalBaseModel `object`
  * clientDescription `string`
  * clientId `integer`
  * goals `array`
    * items [AdvicentNaviPlanRestApiGoalsModelsLiveGoalBase](#advicentnaviplanrestapigoalsmodelslivegoalbase)
  * planDescription `string`
  * planLastUpdateTime `string`

### AdvicentNaviPlanRestApiModelsOwnerModel
* AdvicentNaviPlanRestApiModelsOwnerModel `object`
  * firstName `string`
  * id `integer`
  * lastName `string`

### AdvicentNaviPlanRestApiNetWorthModelsAccountBaseModel
* AdvicentNaviPlanRestApiNetWorthModelsAccountBaseModel `object`
  * accounts `array`
    * items [AdvicentNaviPlanRestApiNetWorthModelsAccountModel](#advicentnaviplanrestapinetworthmodelsaccountmodel)

### AdvicentNaviPlanRestApiNetWorthModelsAccountModel
* AdvicentNaviPlanRestApiNetWorthModelsAccountModel `object`
  * description `string`
  * holdings `array`
    * items [AdvicentNaviPlanRestApiNetWorthModelsHoldingModel](#advicentnaviplanrestapinetworthmodelsholdingmodel)
  * id `integer`
  * legacyId `string`
  * owner [AdvicentNaviPlanRestApiModelsOwnerModel](#advicentnaviplanrestapimodelsownermodel)
  * type `integer`

### AdvicentNaviPlanRestApiNetWorthModelsHoldingModel
* AdvicentNaviPlanRestApiNetWorthModelsHoldingModel `object`
  * description `string`
  * marketValue `number`
  * valuationDate `string`

### AdvicentNaviPlanRestApiNetWorthModelsLiabilityBaseModel
* AdvicentNaviPlanRestApiNetWorthModelsLiabilityBaseModel `object`
  * liabilities `array`
    * items [AdvicentNaviPlanRestApiNetWorthModelsLiabilityModel](#advicentnaviplanrestapinetworthmodelsliabilitymodel)

### AdvicentNaviPlanRestApiNetWorthModelsLiabilityModel
* AdvicentNaviPlanRestApiNetWorthModelsLiabilityModel `object`
  * description `string`
  * endDate `string`
  * id `integer`
  * legacyId `string`
  * outstandingPrincipal `number`
  * outstandingPrincipalAsOfDate `string`
  * owner [AdvicentNaviPlanRestApiModelsOwnerModel](#advicentnaviplanrestapimodelsownermodel)
  * startDate `string`
  * type `integer`

### AdvicentNaviPlanRestApiNetWorthModelsLifestyleAssetBaseModel
* AdvicentNaviPlanRestApiNetWorthModelsLifestyleAssetBaseModel `object`
  * lifestyleAssets `array`
    * items [AdvicentNaviPlanRestApiNetWorthModelsLifestyleAssetModel](#advicentnaviplanrestapinetworthmodelslifestyleassetmodel)

### AdvicentNaviPlanRestApiNetWorthModelsLifestyleAssetModel
* AdvicentNaviPlanRestApiNetWorthModelsLifestyleAssetModel `object`
  * description `string`
  * id `integer`
  * owner [AdvicentNaviPlanRestApiModelsOwnerModel](#advicentnaviplanrestapimodelsownermodel)
  * purchaseDate `string`
  * purchaseValue `number`
  * type `integer`
  * valuationDate `string`
  * valuationValue `number`

### AdvicentNaviPlanRestApiNetWorthModelsRealEstateBaseModel
* AdvicentNaviPlanRestApiNetWorthModelsRealEstateBaseModel `object`
  * realEstateAssets `array`
    * items [AdvicentNaviPlanRestApiNetWorthModelsRealEstateModel](#advicentnaviplanrestapinetworthmodelsrealestatemodel)

### AdvicentNaviPlanRestApiNetWorthModelsRealEstateModel
* AdvicentNaviPlanRestApiNetWorthModelsRealEstateModel `object`
  * description `string`
  * id `integer`
  * legacyId `string`
  * marketValue `number`
  * owner [AdvicentNaviPlanRestApiModelsOwnerModel](#advicentnaviplanrestapimodelsownermodel)
  * purchaseAmount `number`
  * purchaseDate `string`
  * valuationDate `string`

### AdvicentNaviPlanRestApiProjectionsModelsNeedsVsAbilitiesProjectionsModel
* AdvicentNaviPlanRestApiProjectionsModelsNeedsVsAbilitiesProjectionsModel `object`
  * goalId `integer`
  * percentCovered `number`
  * projections `array`
    * items [AdvicentNaviPlanRestApiProjectionsModelsNeedsVsAbilitiesProjectionsYear](#advicentnaviplanrestapiprojectionsmodelsneedsvsabilitiesprojectionsyear)

### AdvicentNaviPlanRestApiProjectionsModelsNeedsVsAbilitiesProjectionsYear
* AdvicentNaviPlanRestApiProjectionsModelsNeedsVsAbilitiesProjectionsYear `object`
  * projectedAbilities `number`
  * projectedNeed `number`
  * year `integer`

### AdvicentNaviPlanRestApiProjectionsModelsNetWorthProjectionsModel
* AdvicentNaviPlanRestApiProjectionsModelsNetWorthProjectionsModel `object`
  * netWorthProjections `array`
    * items [AdvicentNaviPlanRestApiProjectionsModelsNetWorthProjectionsYearModel](#advicentnaviplanrestapiprojectionsmodelsnetworthprojectionsyearmodel)

### AdvicentNaviPlanRestApiProjectionsModelsNetWorthProjectionsYearModel
* AdvicentNaviPlanRestApiProjectionsModelsNetWorthProjectionsYearModel `object`
  * endOfYearRetirementAssets `number`
  * endOfYearTotalAssets `number`
  * year `integer`

### AdvisorModel
* AdvisorModel `object`
  * addressLine1 `string`
  * addressLine2 `string`
  * advisorId `string`
  * advisorTitle `string`
  * businessPhone `string`
  * cellPhone `string`
  * city `string`
  * emailAddress `string`
  * faxPhone `string`
  * firstName `string`
  * homePhone `string`
  * lastName `string`
  * links `array`
    * items [ObjectLink](#objectlink)
  * middleName `string`
  * officeName `string`
  * officeWebsite `string`
  * pagerNumber `string`
  * postalCode `string`
  * stateProvince `string`

### AdvisorsModel
* AdvisorsModel `object`
  * advisors `array`
    * items [AdvisorModel](#advisormodel)

### AssetsFundingGoalModel
* AssetsFundingGoalModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * projections `array`
    * items [ProjectedGoalsSummary[AssetsFundingGoalSummary]](#projectedgoalssummary[assetsfundinggoalsummary])

### AssetsFundingGoalSummary
* AssetsFundingGoalSummary `object`
  * contributions [IAccumulationCategoryData](#iaccumulationcategorydata)
  * endOfYearAssets [IAccumulationCategoryData](#iaccumulationcategorydata)
  * goalType `string`
  * growthAndReinvestments [IAccumulationCategoryData](#iaccumulationcategorydata)
  * identifier `integer`
  * netWithdrawals `number`
  * withdrawals [IAccumulationCategoryData](#iaccumulationcategorydata)

### AssumptionsModel
* AssumptionsModel `object`
  * assumptions [IAssumptions](#iassumptions)
  * links `array`
    * items [ObjectLink](#objectlink)

### Benefit[CurrencyWithGrowth]
* Benefit[CurrencyWithGrowth] `object`
  * benefitType `string` (values: DeathBenefit, MonthlyBenefit, DailyBenefit, MaximumBenefit, WeeklyBenefit, AnnualBenefit, LumpSum)
  * value [CurrencyWithGrowth](#currencywithgrowth)

### BusinessEntitiesModel
* BusinessEntitiesModel `object`
  * businessEntities `array`
    * items [IBusinessEntity](#ibusinessentity)
  * links `array`
    * items [ObjectLink](#objectlink)

### BusinessEntityModel
* BusinessEntityModel `object`
  * businessEntity [IBusinessEntity](#ibusinessentity)
  * links `array`
    * items [ObjectLink](#objectlink)

### CashFlowProjectionModel
* CashFlowProjectionModel `object`
  * cashFlow [ProjectedCashFlowSummary](#projectedcashflowsummary)
  * links `array`
    * items [ObjectLink](#objectlink)

### CashFlowProjectionsModel
* CashFlowProjectionsModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * projections `array`
    * items [CashFlowProjectionModel](#cashflowprojectionmodel)

### CashFlowSummary
* CashFlowSummary `object`
  * surplusDeficit `number`
  * totalIncome `number`
  * totalOutflowsWithTaxes `number`
  * totalOutflowsWithoutTaxes `number`
  * totalTaxes `number`

### ClientPlanSelectorParams
* ClientPlanSelectorParams `object`: Parameters to select a plan from a client file
  * clientId `string`: Id of the client user for the plan. Required if current session user is an advisor. Ignored for client user sessions.
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

### Currency
* Currency `object`
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * raw `number`

### CurrencyWithDate
* CurrencyWithDate `object`
  * date [Date](#date)
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * raw `number`

### CurrencyWithGrowth
* CurrencyWithGrowth `object`
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * growth [GrowthRateValues](#growthratevalues)
  * raw `number`

### Date
* Date `object`
  * day `integer`
  * formatted `string`
  * formattedMMMMddyyyy `string`
  * formattedMMMdd `string`
  * formattedMMMddyyyy `string`
  * formattedMMMyyyy `string`
  * formattedNA `string`
  * month `integer`
  * toDateTime `string`
  * urlEncoded `string`
  * year `integer`

### DefinedBenefitPensionModel
* DefinedBenefitPensionModel `object`
  * definedBenefitPension [IDefinedBenefitPension](#idefinedbenefitpension)
  * links `array`
    * items [ObjectLink](#objectlink)

### DefinedBenefitPensionsModel
* DefinedBenefitPensionsModel `object`
  * definedBenefitPensions `array`
    * items [IDefinedBenefitPension](#idefinedbenefitpension)
  * links `array`
    * items [ObjectLink](#objectlink)

### DescriptiveBoolean
* DescriptiveBoolean `object`
  * rawValue `boolean`
  * valueAsYesNo `string`

### FamilyModel
* FamilyModel `object`
  * family [IFamily](#ifamily)
  * links `array`
    * items [ObjectLink](#objectlink)

### FormattedDateRange
* FormattedDateRange `object`
  * endDate [Date](#date)
  * startDate [Date](#date)

### FormattedEnumType[DistributionDividendType]
* FormattedEnumType[DistributionDividendType] `object`
  * value `string` (values: TaxableIneligible, NonTaxable, TaxableEligible)

### FormattedEnumType[Frequency]
* FormattedEnumType[Frequency] `object`
  * value `string` (values: Annual, SemiAnnual, Quarterly, Bimonthly, Monthly, TwiceMonthly, BiWeekly, Weekly, Daily, Continuously, Onetime, EveryXYears)

### FormattedEnumType[Gender]
* FormattedEnumType[Gender] `object`
  * value `string` (values: Male, Female)

### FormattedEnumType[InterCompanyDividendType]
* FormattedEnumType[InterCompanyDividendType] `object`
  * value `string` (values: NonTaxable, NonTaxableCda, NonTaxableEligible, TaxableEligible, TaxableIneligible)

### FormattedEnumType[LiabilityType]
* FormattedEnumType[LiabilityType] `object`
  * value `string` (values: Personal, Business, CreditCard, Mortgage, Vehicle, PolicyLoan)

### FormattedEnumType[PayOffOptionsType]
* FormattedEnumType[PayOffOptionsType] `object`
  * value `string` (values: TransferToSurvivor, PayOffAtFirstDeath, PayOffAtOwnerDeath, InsuredForLife)

### FormattedEnumType[PaymentType]
* FormattedEnumType[PaymentType] `object`
  * value `string` (values: InterestOnly, PrincipalAndInterest, SetPayment, LastPeriodPayment)

### FormattedEnumType[PrivateCorporationShareType]
* FormattedEnumType[PrivateCorporationShareType] `object`
  * value `string` (values: Undefined, Common, Preferred)

### FormattedEnumType[SEPPDistributionMethod]
* FormattedEnumType[SEPPDistributionMethod] `object`
  * value `string` (values: RequiredMinDistribution, Amortization, Annuitization)

### FormattedEnumType[SEPPLifeExpectancyTable]
* FormattedEnumType[SEPPLifeExpectancyTable] `object`
  * value `string` (values: NOT_APPLICABLE_UPPER_CASE, SingleLifeExpectancy, NonSingleLifeExpectancy)

### FormattedEnumType[SavingsStrategyType]
* FormattedEnumType[SavingsStrategyType] `object`
  * value `string` (values: PreTax, PostTax, Employer, Owner, Mandatory)

### FormattedLifestyleType
* FormattedLifestyleType `object`
  * formatted `string`
  * value `string` (values: Undefined, PersonalUse, ListedPersonal, PrimaryResidence, SecondaryResidence, BusinessInterest, Automobile)

### FormattedMaritalOrTaxFilingStatus
* FormattedMaritalOrTaxFilingStatus `object`
  * value `string` (values: Undefined, Single, HeadOfHousehold, MarriedFilingJointly, MarriedFilingSeparately, SingleParent, Married, CommonLaw, Partner, Divorced, Widowed, Separated)

### GoalCoveragePercent
* GoalCoveragePercent `object`
  * formattedRaw `number`
  * raw `number`

### GoalId
* GoalId `object`
  * id `integer`

### GoalModel
* GoalModel `object`
  * goal [IGoal](#igoal)
  * links `array`
    * items [ObjectLink](#objectlink)

### GoalNeedsVsAbilitiesSummary
* GoalNeedsVsAbilitiesSummary `object`
  * abilities `number`
  * fixedNeeds `number`
  * fixedNeedsWithTaxes `number`
  * goalType `string`
  * identifier `integer`
  * totalNeeds `number`
  * totalNeedsWithTaxes `number`

### GoalsModel
* GoalsModel `object`
  * goals `array`
    * items [IGoal](#igoal)
  * links `array`
    * items [ObjectLink](#objectlink)

### GrowthRateValues
* GrowthRateValues `object`
  * additionalGrowthPercent [Percent](#percent)
  * isInflationAdjusted `boolean`
  * totalGrowth [Percent](#percent)

### HoldingCompaniesModel
* HoldingCompaniesModel `object`
  * holdingCompanies `array`
    * items [IHoldingCompany](#iholdingcompany)
  * links `array`
    * items [ObjectLink](#objectlink)

### HoldingCompanyModel
* HoldingCompanyModel `object`
  * holdingCompany [IHoldingCompany](#iholdingcompany)
  * links `array`
    * items [ObjectLink](#objectlink)

### HouseholdExternalModel
* HouseholdExternalModel `object`
  * accessiblePlans `array`
    * items [PublishedPlanModel](#publishedplanmodel)
  * clientDescription `string`
  * householdId `integer`
  * legacyClientId `string`

### HouseholdModel
* HouseholdModel `object`
  * accessiblePlans `array`
    * items [PublishedPlanModel](#publishedplanmodel)
  * clientDescription `string`
  * householdId `integer`

### HouseholdsExternalDataModel
* HouseholdsExternalDataModel `object`
  * externalHouseholdsData `array`
    * items [HouseholdExternalModel](#householdexternalmodel)

### HouseholdsModel
* HouseholdsModel `object`
  * households `array`
    * items [HouseholdModel](#householdmodel)
  * links `array`
    * items [ObjectLink](#objectlink)

### IAccumulationCategoryData
* IAccumulationCategoryData `object`
  * allAssets [Currency](#currency)
  * lockedIn [Currency](#currency)
  * nonQualified [Currency](#currency)
  * qualified [Currency](#currency)
  * roth [Currency](#currency)
  * tfsa [Currency](#currency)

### IActivityData
* IActivityData `object`
  * amountWithGrowth [CurrencyWithGrowth](#currencywithgrowth)
  * applicableDateRange [FormattedDateRange](#formatteddaterange)
  * directTo `string`
  * frequency [IFormattedFrequency](#iformattedfrequency)

### IAddress
* IAddress `object`
  * city `string`
  * combinedCityStateProvince `string`
  * country `string`
  * stateOrProvince `string`
  * stateOrProvinceAbbrev `string`
  * street1 `string`
  * street2 `string`
  * zipOrPostalCode `string`

### IAssetCategories
* IAssetCategories `object`
  * allAssets `array`
    * items [IValueDescriptionPair[Currency]](#ivaluedescriptionpair[currency])
  * businessAssets [INetWorthCategory](#inetworthcategory)
  * lifestyleAssets [INetWorthCategory](#inetworthcategory)
  * nonQualifiedAnnuities [INetWorthCategory](#inetworthcategory)
  * nonQualifiedAssets [INetWorthCategory](#inetworthcategory)
  * privateCorporations [INetWorthCategory](#inetworthcategory)
  * qualifiedAnnuities [INetWorthCategory](#inetworthcategory)
  * qualifiedAssets [INetWorthCategory](#inetworthcategory)
  * realEstate [INetWorthCategory](#inetworthcategory)
  * totalAssets [INetWorthCategory](#inetworthcategory)

### IAssetClass
* IAssetClass `object`
  * index `integer`
  * maxConstraint [Percent](#percent)
  * minConstraint [Percent](#percent)
  * name `string`
  * parentSuperAssetClassIndex `integer`
  * weight [IAssetClassWeight](#iassetclassweight)

### IAssetClassWeight
* IAssetClassWeight `object`
  * dollarValue [Currency](#currency)
  * percentage [Percent](#percent)

### IAssetId
* IAssetId `object`
  * rawId `integer`

### IAssetMix
* IAssetMix `object`
  * assetClassDisplayLevel `integer`
  * assetClassInfoForDisplayLevel `array`
    * items `integer`
  * classes `array`
    * items [IAssetClass](#iassetclass)
  * superAssetClasses `array`
    * items [IAssetClass](#iassetclass)

### IAssetValuation
* IAssetValuation `object`
  * costBasis [Currency](#currency)
  * marketValue [Currency](#currency)
  * valuationDate [Date](#date)

### IAssets
* IAssets `object`
  * allAssets [IAssetCategories](#iassetcategories)
  * clientAssets [IAssetCategories](#iassetcategories)
  * coClientAssets [IAssetCategories](#iassetcategories)
  * communityPropertyAssets [IAssetCategories](#iassetcategories)
  * jointAssets [IAssetCategories](#iassetcategories)

### IAssumptions
* IAssumptions `object`
  * anyHeadAlreadyRetired `boolean`
  * bothRetired `boolean`
  * bucketing [IBucketing](#ibucketing)
  * client [IHeadAssumptions](#iheadassumptions)
  * coClient [IHeadAssumptions](#iheadassumptions)
  * firstToDieDate [Date](#date)
  * firstToDieMember `string` (values: Client, CoClient)
  * firstToRetireDate [Date](#date)
  * inflationRate [Percent](#percent)
  * lastToDieDate [Date](#date)
  * lastToDieMember `string` (values: Client, CoClient)
  * lastToRetireDate [Date](#date)
  * retirementYearAdjustedIfAlreadyRetired [Year](#year)
  * splitSurplusSavingsStrategiesEnabled `boolean`
  * taxMethod `string` (values: Average, Simplified, Detailed)

### IBucketing
* IBucketing `object`
  * distributionBucketTargetBalance [Currency](#currency)
  * endDate [Date](#date)
  * indexedAt [Percent](#percent)
  * returnRate [Percent](#percent)
  * standardDeviation [Percent](#percent)
  * startDate [Date](#date)

### IBusinessEntity
* IBusinessEntity `object`
  * activities `array`
    * items [IBusinessEntityActivity](#ibusinessentityactivity)
  * assetId [IAssetId](#iassetid)
  * businessType `string` (values: Undefined, LLC, Partnership, SCorporation, CCorporation)
  * businessTypeFormatted `string`
  * currentAnnualDistributions [Currency](#currency)
  * currentAnnualDividends [Currency](#currency)
  * currentAnnualGrowthRate [Percent](#percent)
  * currentAnnualNetIncome [Currency](#currency)
  * entityName `string`
  * liquidationEvent [ILiquidationEvent](#iliquidationevent)
  * marketValuationDate [Date](#date)
  * marketValue [Currency](#currency)
  * owner `string`
  * purchaseAmount [Currency](#currency)
  * purchaseDate [Date](#date)
  * standardDeviation [Percent](#percent)

### IBusinessEntityActivity
* IBusinessEntityActivity `object`
  * applicableDateRange [FormattedDateRange](#formatteddaterange)
  * distributions [Currency](#currency)
  * expense [Currency](#currency)
  * frequency [FormattedEnumType[Frequency]](#formattedenumtype[frequency])
  * income [Currency](#currency)
  * indexRate [GrowthRateValues](#growthratevalues)

### IBusinessPhoneNumbers
* IBusinessPhoneNumbers `object`
  * business `string`
  * fax `string`

### ICanadianGovernmentPensions
* ICanadianGovernmentPensions `object`
  * canadianOrQuebecPensionPlan [Currency](#currency)
  * oldAgeSecurity [Currency](#currency)

### ICashFlow
* ICashFlow `object`
  * incomes [ICashFlowIncomes](#icashflowincomes)
  * outflows [ICashFlowOutflows](#icashflowoutflows)
  * surplusDeficit [Currency](#currency)
  * taxes [ITaxes](#itaxes)

### ICashFlowByOwner
* ICashFlowByOwner `object`
  * clientCashFlow [ICashFlow](#icashflow)
  * coClientCashFlow [ICashFlow](#icashflow)
  * totalCashFlow [ICashFlow](#icashflow)

### ICashFlowCategory
* ICashFlowCategory `object`
  * isItemizedEnabled `boolean`
  * itemized `array`
    * items [ICashFlowItem](#icashflowitem)
  * total [Currency](#currency)

### ICashFlowIncomes
* ICashFlowIncomes `object`
  * annuityPayments [ICashFlowCategory](#icashflowcategory)
  * disabilityIncomes [Currency](#currency)
  * earnedIncome [ICashFlowCategory](#icashflowcategory)
  * insuranceBenefits [ICashFlowCategory](#icashflowcategory)
  * investmentIncomes [ICashFlowCategory](#icashflowcategory)
  * lifestyleAssetLiquidations [ICashFlowCategory](#icashflowcategory)
  * lockedInLiquidations [Currency](#currency)
  * longTermCareBenefits [Currency](#currency)
  * miscellaneousIncomes [ICashFlowCategory](#icashflowcategory)
  * nonQualifiedLiquidations [ICashFlowCategory](#icashflowcategory)
  * pension [ICashFlowCategory](#icashflowcategory)
  * privateCorporations [ICashFlowCategory](#icashflowcategory)
  * qualifiedLiquidations [ICashFlowCategory](#icashflowcategory)
  * qualifiedLiquidationsNonRequiredMinimumDistributions [ICashFlowCategory](#icashflowcategory)
  * requiredMinimumDistributions [ICashFlowCategory](#icashflowcategory)
  * retirementIncome [Currency](#currency)
  * rothLiquidations [Currency](#currency)
  * socialSecurity [ICashFlowCategory](#icashflowcategory)
  * tfsaLiquidations [Currency](#currency)
  * total [ICashFlowCategory](#icashflowcategory)
  * withdrawals [Currency](#currency)

### ICashFlowItem
* ICashFlowItem `object`
  * description `string`
  * descriptionWithOwner `string`
  * isCPP `boolean`
  * isOAS `boolean`
  * sourceId `string`
  * typeDescription `string`
  * value [Currency](#currency)

### ICashFlowOutflows
* ICashFlowOutflows `object`
  * contributions [Currency](#currency)
  * educationExpenses [ICashFlowCategory](#icashflowcategory)
  * employerExpenses [ICashFlowCategory](#icashflowcategory)
  * employmentBusinessExpenses [ICashFlowCategory](#icashflowcategory)
  * investmentExpenses [ICashFlowCategory](#icashflowcategory)
  * lifestyleExpenses [ICashFlowCategory](#icashflowcategory)
  * lifestyleExpensesDiscretionary [ICashFlowCategory](#icashflowcategory)
  * lifestyleExpensesFixed [ICashFlowCategory](#icashflowcategory)
  * lockedInContributions [Currency](#currency)
  * medicalExpenses [ICashFlowCategory](#icashflowcategory)
  * miscellaneousExpenses [ICashFlowCategory](#icashflowcategory)
  * miscellaneousExpensesDiscretionary [ICashFlowCategory](#icashflowcategory)
  * miscellaneousExpensesFixed [ICashFlowCategory](#icashflowcategory)
  * nonQualifiedContributions [ICashFlowCategory](#icashflowcategory)
  * nonQualifiedReinvestments [ICashFlowCategory](#icashflowcategory)
  * privateCorporationOutflows [ICashFlowCategory](#icashflowcategory)
  * qualifiedContributions [ICashFlowCategory](#icashflowcategory)
  * rothContributions [Currency](#currency)
  * surplusOutflows [ICashFlowCategory](#icashflowcategory)
  * surplusSavings [Currency](#currency)
  * tfsaContributions [Currency](#currency)
  * totalNeeds [Currency](#currency)
  * totalWithTaxes [Currency](#currency)
  * totalWithoutTaxes [Currency](#currency)

### ICommonShareClassDetails
* ICommonShareClassDetails `object`
  * shareClassStructure [IShareClassStructure](#ishareclassstructure)

### IContributions
* IContributions `object`
  * interCompanyDividendsReceived `array`
    * items [IInterCompanyDividendReceived](#iintercompanydividendreceived)
  * sharePurchases `array`
    * items [ISharePurchase](#isharepurchase)
  * shareholderLoans `array`
    * items [IShareholderLoan](#ishareholderloan)

### ICorporationRealEstateAsset
* ICorporationRealEstateAsset `object`
  * currentYearNetRentalIncome [Currency](#currency)
  * description `string`
  * id `string`
  * isActiveBusinessIncome [DescriptiveBoolean](#descriptiveboolean)
  * marketValueAsOf [CurrencyWithDate](#currencywithdate)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * preTaxGrowthRate [Percent](#percent)
  * purchaseAmount [Currency](#currency)
  * purchaseDate [Date](#date)
  * standardDeviation [Percent](#percent)
  * startOfYearCostBasis [Currency](#currency)
  * startOfYearMarketValue [Currency](#currency)

### IDebtModStrategies
* IDebtModStrategies `object`
  * lumpSumDebtModStrategies `array`
    * items [ILumpSumDebtModStrategy](#ilumpsumdebtmodstrategy)
  * periodicDebtModStrategies `array`
    * items [IPeriodicDebtModStrategy](#iperiodicdebtmodstrategy)

### IDefinedBenefitPension
* IDefinedBenefitPension `object`
  * benefit [IOptionalField[Benefit[CurrencyWithGrowth]]](#ioptionalfield[benefit[currencywithgrowth]])
  * description `string`
  * isBenefitFormula `boolean`
  * isBenefitIntegratedWithCppQpp `boolean`
  * isFormulaIntegratedWithCppQpp `boolean`
  * owner `string` (values: Client, CoClient)
  * pensionType `string`
  * percentPayableToSurvivor [Percent](#percent)
  * projectedYearsOfService `integer`
  * startDate [Date](#date)

### IDependent
* IDependent `object`
  * address [IAddress](#iaddress)
  * ageAsOfPlanDate `integer`
  * birthdate [Date](#date)
  * citizenship `string`
  * dependentOf `string`
  * dependentOfId `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * email `string`
  * employer [IEmployer](#iemployer)
  * gender [FormattedEnumType[Gender]](#formattedenumtype[gender])
  * name [IPersonName](#ipersonname)
  * ownershipId `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * phone [IPhoneNumbers](#iphonenumbers)
  * relationship `string`

### IEmployer
* IEmployer `object`
  * address [IAddress](#iaddress)
  * name `string`
  * phone [IBusinessPhoneNumbers](#ibusinessphonenumbers)

### IEstateDetails
* IEstateDetails `object`
  * enableFiftyPercentSolution [DescriptiveBoolean](#descriptiveboolean)
  * estateFreeze [DescriptiveBoolean](#descriptiveboolean)
  * estateFreezeDate [Date](#date)
  * shareOptionsAtFirstDeath `string`
  * shareOptionsAtSecondDeathAndDeathInTheSameYear `string`

### IFamily
* IFamily `object`
  * address [IAddress](#iaddress)
  * client [IFamilyMember](#ifamilymember)
  * coClient [IFamilyMember](#ifamilymember)
  * dependents `array`
    * items [IDependent](#idependent)
  * headFullNames `string`

### IFamilyMember
* IFamilyMember `object`
  * address [IAddress](#iaddress)
  * ageAsOfPlanDate `integer`
  * birthdate [Date](#date)
  * citizenship `string`
  * email `string`
  * employer [IEmployer](#iemployer)
  * gender [FormattedEnumType[Gender]](#formattedenumtype[gender])
  * name [IPersonName](#ipersonname)
  * ownershipId `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * phone [IPhoneNumbers](#iphonenumbers)

### IFormattedFrequency
* IFormattedFrequency `object`
  * everyNPeriods `integer`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: Annual, SemiAnnual, Quarterly, Bimonthly, Monthly, TwiceMonthly, BiWeekly, Weekly, Daily, Continuously, Onetime, EveryXYears)

### IGeneralSetups
* IGeneralSetups `object`
  * appliedBusinessLimit [Currency](#currency)
  * goodWillFutureSalesMarketValue [Currency](#currency)
  * percentageOfLimitToUse [Percent](#percent)
  * previousYearAdjustedAggregateInvestmentIncome [Currency](#currency)

### IGoal
* IGoal `object`
  * assetsRemainingAfterFundingGoal [IOptionalField[Currency]](#ioptionalfield[currency])
  * coverage [IOptionalField[GoalCoveragePercent]](#ioptionalfield[goalcoveragepercent])
  * description `string`
  * endDate [Date](#date)
  * identifier [GoalId](#goalid)
  * startDate [Date](#date)
  * type `string` (values: Retirement, SurvivorIncome, CriticalIllness, LongTermCareInsurance, Cashflow, DisabilityIncome, Education, MajorPurchase, EmergencyFund, Undefined, NotSupported)
  * yearAssetsDepleted [IOptionalField[Year]](#ioptionalfield[year])

### IGovernmentPensions
* IGovernmentPensions `object`
  * estimatedCanadianGovernmentPensions [ICanadianGovernmentPensions](#icanadiangovernmentpensions)
  * estimatedSocialSecurity [Currency](#currency)

### IHeadAssumptions
* IHeadAssumptions `object`
  * alreadyRetired `boolean`
  * deceasedAge `integer`
  * deceasedDate [Date](#date)
  * estateIncomeTaxes [IIncomeTaxes](#iincometaxes)
  * governmentPensions [IGovernmentPensions](#igovernmentpensions)
  * maritalOrTaxFilingStatus [FormattedMaritalOrTaxFilingStatus](#formattedmaritalortaxfilingstatus)
  * preRetirementIncomeTaxes [IIncomeTaxes](#iincometaxes)
  * retirementAge `integer`
  * retirementDate [Date](#date)
  * retirementIncomeTaxes [IIncomeTaxes](#iincometaxes)

### IHistoricalData
* IHistoricalData `object`
  * generalSetups [IGeneralSetups](#igeneralsetups)
  * notionalAccounts [INotionalAccounts](#inotionalaccounts)
  * outstandingShareholderLoans [IOutstandingShareholderLoans](#ioutstandingshareholderloans)

### IHolding
* IHolding `object`
  * assetMix [IAssetMix](#iassetmix)
  * description `string`
  * holdAmount [PercentOr[Currency]](#percentor[currency])
  * id `string`
  * isClassified `boolean`
  * preRetirementReturnRates [IPeriodRateOfReturnDetails](#iperiodrateofreturndetails)
  * retirementReturnRates [IPeriodRateOfReturnDetails](#iperiodrateofreturndetails)
  * symbol `string`
  * valuation [IAssetValuation](#iassetvaluation)

### IHoldingCompany
* IHoldingCompany `object`
  * annualDividendYield [Percent](#percent)
  * ccpc [DescriptiveBoolean](#descriptiveboolean)
  * commonSharesOutstanding `integer`
  * contributions [IContributions](#icontributions)
  * corporateYearEnd [Date](#date)
  * description `string`
  * dividendType `string` (values: Taxable, NonTaxable)
  * dividendTypeFormatted `string`
  * estateDetails [IEstateDetails](#iestatedetails)
  * historicalData [IHistoricalData](#ihistoricaldata)
  * id `string`
  * investmentAccounts `array`
    * items [IInvestmentAccount](#iinvestmentaccount)
  * liabilities `array`
    * items [ILiability](#iliability)
  * lifeInsurancePolicies `array`
    * items [ILifeInsurancePolicy](#ilifeinsurancepolicy)
  * marketValue [Currency](#currency)
  * numPreferredShareClasses `integer`
  * otherAssets `array`
    * items [IRealEstateAsset](#irealestateasset)
  * ownershipAsOfDate [Date](#date)
  * ownershipDetails [IOwnershipDetails](#iownershipdetails)
  * preferredSharesOutstanding `integer`
  * provinceOfIncorporation `string`
  * provinceOfTaxation `string`
  * realEstateAssets `array`
    * items [ICorporationRealEstateAsset](#icorporationrealestateasset)
  * valueOfAllCommonShares [Currency](#currency)
  * valueOfAllPreferredShares [Currency](#currency)
  * withdrawals [IWithdrawals](#iwithdrawals)

### IIncomeTaxes
* IIncomeTaxes `object`
  * averageTaxRate [Percent](#percent)
  * combinedStateAndAverageTaxRate [Percent](#percent)
  * combinedStateAndLongTermCapitalGainsTaxRate [Percent](#percent)
  * combinedStateAndMarginalTaxRate [Percent](#percent)
  * longTermCapitalGainsTaxRate [Percent](#percent)
  * marginalTaxRate [Percent](#percent)
  * stateTaxRate [Percent](#percent)

### IInsurancePremium
* IInsurancePremium `object`
  * amount [CurrencyWithGrowth](#currencywithgrowth)
  * annualAmount [Currency](#currency)
  * ceaseDate [Date](#date)
  * formattedPayingMember `string`
  * frequency [IFormattedFrequency](#iformattedfrequency)
  * payingMember `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * premiumRefundAmount [Percent](#percent)
  * startDate [Date](#date)

### IInterCompanyDividendReceived
* IInterCompanyDividendReceived `object`
  * activityData [IActivityData](#iactivitydata)
  * dividendType [FormattedEnumType[InterCompanyDividendType]](#formattedenumtype[intercompanydividendtype])
  * generalRateOfIncomePoolAmount [Currency](#currency)
  * receivedFrom `string`

### IInvestmentAccount
* IInvestmentAccount `object`
  * annualFee [Percent](#percent)
  * costBasis [Currency](#currency)
  * description `string`
  * excludeInAA `boolean`
  * holdings `array`
    * items [IHolding](#iholding)
  * id `string`
  * marketValue [Currency](#currency)
  * rateOfReturn [IRateOfReturnDetails](#irateofreturndetails)
  * type `string`
  * valuationDate [Date](#date)

### IInvestmentAccountOwnershipData
* IInvestmentAccountOwnershipData `object`
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * ownersName `string`
  * ownershipPercent [Percent](#percent)

### ILiabilities
* ILiabilities `object`
  * clientLiabilities [INetWorthCategory](#inetworthcategory)
  * coClientLiabilities [INetWorthCategory](#inetworthcategory)
  * communityPropertyLiabilities [INetWorthCategory](#inetworthcategory)
  * jointLiabilities [INetWorthCategory](#inetworthcategory)
  * totalLiabilities [INetWorthCategory](#inetworthcategory)

### ILiability
* ILiability `object`
  * annualPaymentAmount [Currency](#currency)
  * balanceAsOf [CurrencyWithDate](#currencywithdate)
  * balanceAsOfPlanDate [Currency](#currency)
  * debtModStrategies [IDebtModStrategies](#idebtmodstrategies)
  * description `string`
  * id `string`
  * insuredForDisability [DescriptiveBoolean](#descriptiveboolean)
  * insuredForLife [DescriptiveBoolean](#descriptiveboolean)
  * interestRate [Percent](#percent)
  * isInterestRateVariable [DescriptiveBoolean](#descriptiveboolean)
  * isPaymentVariable [DescriptiveBoolean](#descriptiveboolean)
  * linkedAssetId `string`
  * linkedAssetName `string`
  * loanDate [Date](#date)
  * originalBalance [Currency](#currency)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * paidOffByRetirement [IOptionalField[DescriptiveBoolean]](#ioptionalfield[descriptiveboolean])
  * payOffDate [IOptionalField[Date]](#ioptionalfield[date])
  * payOffOptionType [FormattedEnumType[PayOffOptionsType]](#formattedenumtype[payoffoptionstype])
  * paymentAmount [IOptionalField[Currency]](#ioptionalfield[currency])
  * paymentFrequency [FormattedEnumType[Frequency]](#formattedenumtype[frequency])
  * paymentType [FormattedEnumType[PaymentType]](#formattedenumtype[paymenttype])
  * type [FormattedEnumType[LiabilityType]](#formattedenumtype[liabilitytype])

### ILifeInsurancePolicy
* ILifeInsurancePolicy `object`
  * beneficiaryName `string`
  * benefitPeriod [TimePeriod](#timeperiod)
  * cashSurrenderValue [Currency](#currency)
  * coverageCeaseDate [Date](#date)
  * dailyBenefitValue `number`
  * description `string`
  * effectiveDate [Date](#date)
  * formattedBenefitValue `string`
  * formattedInsuredType `string`
  * formattedPolicyType `string`
  * id `string`
  * insured `string` (values: Client, CoClient, FirstToDie, SecondToDie, Other)
  * isCSVPayableWithDeathBenefit [DescriptiveBoolean](#descriptiveboolean)
  * monthlyBenefitValue `number`
  * ownerName `string`
  * policyType `string` (values: WholeLife, UniversalLife, Term1Life, Term5Life, Term10Life, Term20Life, Term100Life, VariableLife, VariableUniversalLife, GroupLongTermDisability, GroupShortTermDisability, IndividualDisability, LongTermCare, CriticalIllness, MedicalCoveragePlan, CashToInsuredCoverage)
  * premiumData [IInsurancePremium](#iinsurancepremium)
  * premiumsWaivedAtDisability [DescriptiveBoolean](#descriptiveboolean)
  * rawBenefitValue `number`
  * waitingPeriod [TimePeriod](#timeperiod)

### ILifestyleAsset
* ILifestyleAsset `object`
  * afterTaxProceedsAccountName `string`
  * description `string`
  * futureValueProjectedGrossSaleValue [Currency](#currency)
  * id `string`
  * isMajorPurchaseGoal `boolean`
  * marketValueAsOf [CurrencyWithDate](#currencywithdate)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * preTaxGrowthRate [Percent](#percent)
  * presentValueProjectedGrossSaleValue [Currency](#currency)
  * projectedSaleDate [Date](#date)
  * purchaseAmount [Currency](#currency)
  * purchaseDate [Date](#date)
  * sellingCostPercent [Percent](#percent)
  * standardDeviation [Percent](#percent)
  * type [FormattedLifestyleType](#formattedlifestyletype)

### ILiquidationEvent
* ILiquidationEvent `object`
  * firstSaleDate [Date](#date)
  * lastSaleDate [Date](#date)
  * liquidationType `string` (values: SellAtPlanEnd, SellAllOnSpecificDate, SellInInstallments)
  * liquidationTypeDescription `string`
  * saleDatesDescription `string`

### ILoanRepaymentToShareholder
* ILoanRepaymentToShareholder `object`
  * activityData [IActivityData](#iactivitydata)
  * shareholder `string` (values: Undefined, Head1, Head2, Other)

### ILumpSumDebtModStrategy
* ILumpSumDebtModStrategy `object`
  * amount [Currency](#currency)
  * debtModificationDate [Date](#date)
  * indexRate [GrowthRateValues](#growthratevalues)

### ILumpSumRedemptionStrategy
* ILumpSumRedemptionStrategy `object`
  * amountOrPercentOfValue [PercentOr[Currency]](#percentor[currency])
  * indexRate [GrowthRateValues](#growthratevalues)
  * redemptionDate [Date](#date)

### ILumpSumSavingsStrategy
* ILumpSumSavingsStrategy `object`
  * amountOrPercentOfSalary [PercentOr[Currency]](#percentor[currency])
  * formattedSavingsTypeWithDash `string`
  * indexRate [GrowthRateValues](#growthratevalues)
  * savingsDate [Date](#date)
  * savingsType [FormattedEnumType[SavingsStrategyType]](#formattedenumtype[savingsstrategytype])

### IManualDividendDistribution
* IManualDividendDistribution `object`
  * activityData [IActivityData](#iactivitydata)
  * directCoClientAfterTaxProceedsTo `string`
  * dividendType [FormattedEnumType[DistributionDividendType]](#formattedenumtype[distributiondividendtype])
  * shareId `integer`
  * shareType [FormattedEnumType[PrivateCorporationShareType]](#formattedenumtype[privatecorporationsharetype])

### INetWorth
* INetWorth `object`
  * netWorthAtPlanDate [INetWorthAtDate](#inetworthatdate)
  * netWorthAtPlanEnd [IOptionalField[INetWorthAtDate]](#ioptionalfield[inetworthatdate])
  * netWorthAtRetirement [IOptionalField[INetWorthAtDate]](#ioptionalfield[inetworthatdate])

### INetWorthAtDate
* INetWorthAtDate `object`
  * assets [IAssets](#iassets)
  * assetsFundingRetirement [IRetirementAssets](#iretirementassets)
  * clientNetWorth [Currency](#currency)
  * coClientNetWorth [Currency](#currency)
  * communityPropertyNetWorth [Currency](#currency)
  * jointNetWorth [Currency](#currency)
  * liabilities [ILiabilities](#iliabilities)
  * totalNetWorth [Currency](#currency)

### INetWorthCategory
* INetWorthCategory `object`
  * description `string`
  * itemized `array`
    * items [INetWorthItem](#inetworthitem)
  * total [Currency](#currency)

### INetWorthItem
* INetWorthItem `object`
  * accountType `string`
  * description `string`
  * id `string`
  * value [Currency](#currency)

### INotionalAccounts
* INotionalAccounts `object`
  * capitalDividendAccountEndOfYearValue [Currency](#currency)
  * capitalLossesCarryoverEndOfYearValue [Currency](#currency)
  * dividendRefund [Currency](#currency)
  * generalRateOfIncomePoolEndOfYearValue [Currency](#currency)
  * nonEligibleRefundableDividendTaxOnHandEndOfYearValue [Currency](#currency)
  * nrdtohDividendRefund [Currency](#currency)
  * refundableDividendTaxOnHandEndOfYearValue [Currency](#currency)

### IOptionalField[Benefit[CurrencyWithGrowth]]
* IOptionalField[Benefit[CurrencyWithGrowth]] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [Benefit[CurrencyWithGrowth]](#benefit[currencywithgrowth])

### IOptionalField[Currency]
* IOptionalField[Currency] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [Currency](#currency)

### IOptionalField[Date]
* IOptionalField[Date] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [Date](#date)

### IOptionalField[DescriptiveBoolean]
* IOptionalField[DescriptiveBoolean] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [DescriptiveBoolean](#descriptiveboolean)

### IOptionalField[GoalCoveragePercent]
* IOptionalField[GoalCoveragePercent] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [GoalCoveragePercent](#goalcoveragepercent)

### IOptionalField[INetWorthAtDate]
* IOptionalField[INetWorthAtDate] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [INetWorthAtDate](#inetworthatdate)

### IOptionalField[Year]
* IOptionalField[Year] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [Year](#year)

### IOutstandingShareholderLoans
* IOutstandingShareholderLoans `object`
  * clientAmount [Currency](#currency)
  * coClientAmount [Currency](#currency)
  * otherAmount [Currency](#currency)

### IOwnershipData
* IOwnershipData `object`
  * marketValue [Currency](#currency)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * ownersName `string`
  * ownershipPercent [Percent](#percent)
  * shares `integer`

### IOwnershipDetails
* IOwnershipDetails `object`
  * common `array`
    * items [IOwnershipData](#iownershipdata)
  * commonSharesDetails `array`
    * items [ICommonShareClassDetails](#icommonshareclassdetails)
  * preferred `array`
    * items [IOwnershipData](#iownershipdata)
  * preferredSharesDetails `array`
    * items [IPreferredShareClassDetails](#ipreferredshareclassdetails)
  * shareholderPercentOwnership `array`
    * items [IInvestmentAccountOwnershipData](#iinvestmentaccountownershipdata)

### IPeriodRateOfReturnDetails
* IPeriodRateOfReturnDetails `object`
  * breakdown [IRateOfReturnBreakdown](#irateofreturnbreakdown)
  * standardDeviation [Percent](#percent)
  * total [Percent](#percent)

### IPeriodicDebtModStrategy
* IPeriodicDebtModStrategy `object`
  * amount [Currency](#currency)
  * applicableDateRange [FormattedDateRange](#formatteddaterange)
  * debtModificationFrequency [FormattedEnumType[Frequency]](#formattedenumtype[frequency])
  * indexRate [GrowthRateValues](#growthratevalues)

### IPeriodicRedemptionStrategy
* IPeriodicRedemptionStrategy `object`
  * amountOrPercentOfValue [PercentOr[Currency]](#percentor[currency])
  * applicableDateRange [FormattedDateRange](#formatteddaterange)
  * indexRate [GrowthRateValues](#growthratevalues)
  * redemptionFrequency [FormattedEnumType[Frequency]](#formattedenumtype[frequency])

### IPeriodicSavingsStrategy
* IPeriodicSavingsStrategy `object`
  * amountOrPercentOfSalary [PercentOr[Currency]](#percentor[currency])
  * endDate [Date](#date)
  * formattedFrequencyAbbrv `string`
  * formattedSavingsTypeWithDash `string`
  * indexRate [GrowthRateValues](#growthratevalues)
  * isMaxContribution `boolean`
  * savingsFrequency [FormattedEnumType[Frequency]](#formattedenumtype[frequency])
  * savingsType [FormattedEnumType[SavingsStrategyType]](#formattedenumtype[savingsstrategytype])
  * startDate [Date](#date)

### IPersonName
* IPersonName `object`
  * firstName `string`
  * formal `string`
  * full `string`
  * lastName `string`
  * middle `string`
  * title `string`

### IPhoneNumbers
* IPhoneNumbers `object`
  * additionalNumbers [IBusinessPhoneNumbers](#ibusinessphonenumbers)
  * business `string`
  * cell `string`
  * fax `string`
  * home `string`
  * pager `string`

### IPlanModules
* IPlanModules `object`
  * isCriticalIllnessModuleEnabled `boolean`
  * isDisabilityIncomeModuleEnabled `boolean`
  * isEstatePlanningModuleEabled `boolean`
  * isLongTermCareModuleEnabled `boolean`
  * isSurvivorIncomeModuleEnabled `boolean`

### IPortfolioAccount
* IPortfolioAccount `object`
  * accountReturnRatesNoLongerCorrelateToAssumedAssetMixDueToOverrideInGsm `boolean`
  * annualFee [Percent](#percent)
  * applicableRangeRetirementLiquidatedAssets [FormattedDateRange](#formatteddaterange)
  * costBasis [Currency](#currency)
  * description `string`
  * descriptionWithOwner `string`
  * excludeInAA `boolean`
  * holdings `array`
    * items [IHolding](#iholding)
  * id `string`
  * isSystemGenerated `boolean`
  * marketValue [Currency](#currency)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * portfolioAssets `array`
    * items [IPortfolioAsset](#iportfolioasset)
  * rateOfReturn [IRateOfReturnDetails](#irateofreturndetails)
  * savingsStrategies [ISavingsStrategies](#isavingsstrategies)
  * seppRedemptionStrategy [ISEPPRedemptionStrategy](#iseppredemptionstrategy)
  * type `string`
  * valuationDate [Date](#date)

### IPortfolioAsset
* IPortfolioAsset `object`
  * applicableRangeRetirementLiquidatedAssets [FormattedDateRange](#formatteddaterange)
  * costBasis [Currency](#currency)
  * description `string`
  * goalFundingDescription `string`
  * goalFundingGoalId [GoalId](#goalid)
  * id `string`
  * incomeReinvested [IReturnIncomeReinvestedDetails](#ireturnincomereinvesteddetails)
  * isSystemGenerated `boolean`
  * marketValue [Currency](#currency)
  * parentAccountId `string`
  * rateOfReturn [IRateOfReturnDetails](#irateofreturndetails)
  * redemptionStrategies [IRedemptionStrategies](#iredemptionstrategies)

### IPreferredShareClassDetails
* IPreferredShareClassDetails `object`
  * annualDividendYield [Percent](#percent)
  * dividendType [FormattedEnumType[DistributionDividendType]](#formattedenumtype[distributiondividendtype])
  * redemptionValuePerShare [Currency](#currency)
  * shareClassStructure [IShareClassStructure](#ishareclassstructure)

### IRateOfReturnBreakdown
* IRateOfReturnBreakdown `object`
  * capitalGain [Percent](#percent)
  * deferredGrowth [Percent](#percent)
  * dividend [Percent](#percent)
  * interest [Percent](#percent)
  * taxFree [Percent](#percent)

### IRateOfReturnDetails
* IRateOfReturnDetails `object`
  * preRetirement [IPeriodRateOfReturnDetails](#iperiodrateofreturndetails)
  * retirement [IPeriodRateOfReturnDetails](#iperiodrateofreturndetails)

### IRealEstateAsset
* IRealEstateAsset `object`
  * currentYearNetRentalIncome [Currency](#currency)
  * description `string`
  * id `string`
  * marketValueAsOf [CurrencyWithDate](#currencywithdate)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * preTaxGrowthRate [Percent](#percent)
  * purchaseAmount [Currency](#currency)
  * purchaseDate [Date](#date)
  * standardDeviation [Percent](#percent)
  * startOfYearCostBasis [Currency](#currency)
  * startOfYearMarketValue [Currency](#currency)

### IRedemptionStrategies
* IRedemptionStrategies `object`
  * lumpSumRedemptionStrategies `array`
    * items [ILumpSumRedemptionStrategy](#ilumpsumredemptionstrategy)
  * periodicRedemptionStrategies `array`
    * items [IPeriodicRedemptionStrategy](#iperiodicredemptionstrategy)

### IRestrictedStock
* IRestrictedStock `object`
  * annualDividendPerUnit [Currency](#currency)
  * applicableRangeRetirementLiquidatedAssets [FormattedDateRange](#formatteddaterange)
  * awardedDate [Date](#date)
  * currentUnitValue [Currency](#currency)
  * description `string`
  * growthRate [Percent](#percent)
  * id `string`
  * numberOfUnits `integer`
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers, Corporation)
  * pricePaidForAward [Currency](#currency)
  * type `string`

### IRetirementAssetCategories
* IRetirementAssetCategories `object`
  * allAssets `array`
    * items [IValueDescriptionPair[Currency]](#ivaluedescriptionpair[currency])
  * nonQualifiedAnnuities [INetWorthCategory](#inetworthcategory)
  * nonQualifiedAssets [INetWorthCategory](#inetworthcategory)
  * qualifiedAnnuities [INetWorthCategory](#inetworthcategory)
  * qualifiedAssets [INetWorthCategory](#inetworthcategory)
  * totalAssets [INetWorthCategory](#inetworthcategory)

### IRetirementAssets
* IRetirementAssets `object`
  * allAssets [IRetirementAssetCategories](#iretirementassetcategories)
  * clientAssets [IRetirementAssetCategories](#iretirementassetcategories)
  * coClientAssets [IRetirementAssetCategories](#iretirementassetcategories)
  * communityPropertyAssets [IRetirementAssetCategories](#iretirementassetcategories)
  * jointAssets [IRetirementAssetCategories](#iretirementassetcategories)
  * withdrawalRate [Percent](#percent)

### IReturnIncomeReinvestedDetails
* IReturnIncomeReinvestedDetails `object`
  * duringPreRetirementPeriod [DescriptiveBoolean](#descriptiveboolean)
  * duringRetirementPeriod [DescriptiveBoolean](#descriptiveboolean)

### IRrspMaximizerStrategy
* IRrspMaximizerStrategy `object`
  * applicable `string`
  * applicableRange [FormattedDateRange](#formatteddaterange)
  * assetName `string`
  * constrainedByCashflow [DescriptiveBoolean](#descriptiveboolean)
  * month `string`

### ISEPPRedemptionStrategy
* ISEPPRedemptionStrategy `object`
  * applicableDateRange [FormattedDateRange](#formatteddaterange)
  * distributionMethod [FormattedEnumType[SEPPDistributionMethod]](#formattedenumtype[seppdistributionmethod])
  * lifeExpectancyTable [FormattedEnumType[SEPPLifeExpectancyTable]](#formattedenumtype[sepplifeexpectancytable])
  * redemptionFrequency [FormattedEnumType[Frequency]](#formattedenumtype[frequency])

### ISavingsStrategies
* ISavingsStrategies `object`
  * lumpSumSavingsStrategies `array`
    * items [ILumpSumSavingsStrategy](#ilumpsumsavingsstrategy)
  * periodicSavingsStrategies `array`
    * items [IPeriodicSavingsStrategy](#iperiodicsavingsstrategy)
  * rrspMaximizerStrategies `array`
    * items [IRrspMaximizerStrategy](#irrspmaximizerstrategy)
  * surplusSavingsStrategies `array`
    * items [ISurplusSavingsStrategy](#isurplussavingsstrategy)

### IShareClassStructure
* IShareClassStructure `object`
  * clientOwnershipData [IOwnershipData](#iownershipdata)
  * coClientOwnershipData [IOwnershipData](#iownershipdata)
  * description `string`
  * id `integer`
  * otherOwnershipData [IOwnershipData](#iownershipdata)
  * parentCorporationOwnershipData [IOwnershipData](#iownershipdata)

### ISharePurchase
* ISharePurchase `object`
  * activityData [IActivityData](#iactivitydata)
  * shareHolder `string` (values: Undefined, Head1, Head2, Other)
  * shareId `integer`
  * shareType [FormattedEnumType[PrivateCorporationShareType]](#formattedenumtype[privatecorporationsharetype])

### IShareRedemption
* IShareRedemption `object`
  * activityData [IActivityData](#iactivitydata)
  * shareId `integer`
  * shareType [FormattedEnumType[PrivateCorporationShareType]](#formattedenumtype[privatecorporationsharetype])
  * shareholder `string` (values: Undefined, Head1, Head2, Other)

### IShareholderLoan
* IShareholderLoan `object`
  * activityData [IActivityData](#iactivitydata)
  * shareHolder `string` (values: Undefined, Head1, Head2, Other)

### IStockOption
* IStockOption `object`
  * annualDividendPerUnit [Currency](#currency)
  * applicableRangeRetirementLiquidatedAssets [FormattedDateRange](#formatteddaterange)
  * company `string`
  * currentUnitPrice [Currency](#currency)
  * currentUnitPriceDate [Date](#date)
  * description `string`
  * endOfPlanYearExercisableGrossValue [Currency](#currency)
  * exerciseCost [Currency](#currency)
  * expirationDate [Date](#date)
  * grantDate [Date](#date)
  * grantedOptions `integer`
  * growthRate [Percent](#percent)
  * id `string`
  * optionsExercisable `integer`
  * optionsExercised `integer`
  * optionsVested `integer`
  * owner `string`
  * preTaxProfit [Currency](#currency)
  * startOfYearAMTBasis [Currency](#currency)
  * startOfYearCostBasis [Currency](#currency)
  * startOfYearUnitPrice [Currency](#currency)
  * strikePrice [Currency](#currency)
  * symbol `string`
  * type `string` (values: NonQualifiedStockOption, IncentiveStockOption)
  * typeFormatted `string`
  * vestingSchedule `array`
    * items [IVestingData](#ivestingdata)

### ISurplusSavingsStrategy
* ISurplusSavingsStrategy `object`
  * endDate [Date](#date)
  * percentOfSurplus [Percent](#percent)
  * percentOfSurplusClient [Percent](#percent)
  * percentOfSurplusCoClient [Percent](#percent)
  * startDate [Date](#date)

### ITaxes
* ITaxes `object`
  * estate [Currency](#currency)
  * federalIncome [Currency](#currency)
  * giftAndGenerationSkippingTransfer [Currency](#currency)
  * medicare [Currency](#currency)
  * pensionEarlyDistributionPenalty [Currency](#currency)
  * pensionPenaltyOnExcessDistributions [Currency](#currency)
  * refundableCredits [Currency](#currency)
  * socialSecurityEmployer [Currency](#currency)
  * socialSecuritySelfEmployed [Currency](#currency)
  * stateIncome [Currency](#currency)
  * total [Currency](#currency)

### IValueDescriptionPair[Currency]
* IValueDescriptionPair[Currency] `object`
  * description `string`
  * value [Currency](#currency)

### IVestingData
* IVestingData `object`
  * date [Date](#date)
  * percentVested [Percent](#percent)

### IWithdrawals
* IWithdrawals `object`
  * loanRepaymentsToShareholder `array`
    * items [ILoanRepaymentToShareholder](#iloanrepaymenttoshareholder)
  * manualDividendDistributions `array`
    * items [IManualDividendDistribution](#imanualdividenddistribution)
  * shareRedemptions `array`
    * items [IShareRedemption](#ishareredemption)

### LiabilitiesModel
* LiabilitiesModel `object`
  * liabilities `array`
    * items [ILiability](#iliability)
  * links `array`
    * items [ObjectLink](#objectlink)

### LiabilityModel
* LiabilityModel `object`
  * liability [ILiability](#iliability)
  * links `array`
    * items [ObjectLink](#objectlink)

### LifestyleAssetModel
* LifestyleAssetModel `object`
  * lifestyleAsset [ILifestyleAsset](#ilifestyleasset)
  * links `array`
    * items [ObjectLink](#objectlink)

### LifestyleAssetsModel
* LifestyleAssetsModel `object`
  * lifestyleAssets `array`
    * items [ILifestyleAsset](#ilifestyleasset)
  * links `array`
    * items [ObjectLink](#objectlink)

### LoginModel
* LoginModel `object`
  * password `string`
  * username `string`

### NeedsVsAbilitiesModel
* NeedsVsAbilitiesModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * projections `array`
    * items [ProjectedGoalsSummary[GoalNeedsVsAbilitiesSummary]](#projectedgoalssummary[goalneedsvsabilitiessummary])

### NetWorthModel
* NetWorthModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * netWorth [INetWorth](#inetworth)

### NetWorthProjectionModel
* NetWorthProjectionModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * netWorth [ProjectedNetWorthSummary](#projectednetworthsummary)

### NetWorthProjectionsModel
* NetWorthProjectionsModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * projections `array`
    * items [NetWorthProjectionModel](#networthprojectionmodel)

### NetWorthSummary
* NetWorthSummary `object`
  * totalAssets `number`
  * totalLiabilities `number`
  * totalNetWorth `number`

### Object
* Object `object`

### ObjectLink
* ObjectLink `object`
  * href `string`
  * rel `string`

### Percent
* Percent `object`
  * formattedDoubleDecimal `string`
  * formattedNoDecimal `string`
  * formattedSingleDecimal `string`
  * raw `number`
  * rawCappedAt100 `number`

### PercentOr[Currency]
* PercentOr[Currency] `object`
  * currency [Currency](#currency)
  * percent [Percent](#percent)

### PlanInformationModel
* PlanInformationModel `object`
  * country `string`
  * description `string`
  * isJointAnalysis `boolean`
  * links `array`
    * items [ObjectLink](#objectlink)
  * locale `string`
  * planDate [Date](#date)
  * planDescription `string`
  * planId `string`
  * planLevel `string` (values: Calculator, FinancialAssessment, AssetAllocation, Level1, Level2, Level3, Undefined)
  * planModules [IPlanModules](#iplanmodules)
  * planType `string`
  * publishDate [Date](#date)

### PlanSelectorParam
* PlanSelectorParam `object`
  * planId **required** `string`: Id of the Plan to retrieve or update data for (e.g. 1001-11-3).

### PlanStatusesModel
* PlanStatusesModel `object`
  * hasIntegratedAccounts `string` (values: Unknown, Yes, No)
  * links `array`
    * items [ObjectLink](#objectlink)
  * planDataStatus `string` (values: UpdateNotRequired, UpdateRequired, UpdateInProgress, UpdateFailed, NoSuchPlan)
  * serializedDataStatus `string` (values: UpdateNotRequired, UpdateRequired, UpdateInProgress, UpdateFailed, NoSuchPlan)

### PortfolioAccountModel
* PortfolioAccountModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * portfolioAccount [IPortfolioAccount](#iportfolioaccount)

### PortfolioAccountsModel
* PortfolioAccountsModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * portfolioAccounts `array`
    * items [IPortfolioAccount](#iportfolioaccount)

### ProjectedAnnualSummariesModel
* ProjectedAnnualSummariesModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * projections `array`
    * items [ProjectedAnnualSummaryModel](#projectedannualsummarymodel)

### ProjectedAnnualSummary
* ProjectedAnnualSummary `object`
  * cashFlow [CashFlowSummary](#cashflowsummary)
  * clientAge `integer`
  * coClientAge `integer`
  * netWorth [NetWorthSummary](#networthsummary)
  * year `integer`

### ProjectedAnnualSummaryModel
* ProjectedAnnualSummaryModel `object`
  * annualSummary [ProjectedAnnualSummary](#projectedannualsummary)
  * links `array`
    * items [ObjectLink](#objectlink)

### ProjectedCashFlowSummary
* ProjectedCashFlowSummary `object`
  * cashFlow [ICashFlowByOwner](#icashflowbyowner)
  * clientAge `integer`
  * coClientAge `integer`
  * year `integer`

### ProjectedGoalsSummary[AssetsFundingGoalSummary]
* ProjectedGoalsSummary[AssetsFundingGoalSummary] `object`
  * clientAge `integer`
  * coClientAge `integer`
  * goals `array`
    * items [AssetsFundingGoalSummary](#assetsfundinggoalsummary)
  * year `integer`

### ProjectedGoalsSummary[GoalNeedsVsAbilitiesSummary]
* ProjectedGoalsSummary[GoalNeedsVsAbilitiesSummary] `object`
  * clientAge `integer`
  * coClientAge `integer`
  * goals `array`
    * items [GoalNeedsVsAbilitiesSummary](#goalneedsvsabilitiessummary)
  * year `integer`

### ProjectedNetWorthSummary
* ProjectedNetWorthSummary `object`
  * clientAge `integer`
  * coClientAge `integer`
  * endOfYearNetWorth [INetWorthAtDate](#inetworthatdate)
  * year `integer`

### PublicSessionInfoModel
* PublicSessionInfoModel `object`
  * eulaAccepted `boolean`
  * hasAccountAggregation `boolean`
  * hasGoalWhatIfing `boolean`
  * hasUserSetPassword `boolean`
  * isAdmin `boolean`
  * isAdvisor `boolean`
  * isClient `boolean`
  * isPasswordExpired `boolean`
  * userId `string`
  * userName `string`

### PublishedPlanModel
* PublishedPlanModel `object`
  * internalPlanId `integer`
  * planId `string`
  * planPublishDate `string`

### ResetPasswordModel
* ResetPasswordModel `object`
  * locale **required** `string`: Supported locales are: "en-US", "en-CA", and "fr-CA"
  * userName **required** `string`

### RestrictedStockModel
* RestrictedStockModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * restrictedStock [IRestrictedStock](#irestrictedstock)

### RestrictedStocksModel
* RestrictedStocksModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * restrictedStocks `array`
    * items [IRestrictedStock](#irestrictedstock)

### ServiceInformation
* ServiceInformation `object`
  * altairConnectionStatus `boolean`
  * name `string`
  * pomVersion `string`
  * serviceVersion `string`
  * status `string`

### SetPasswordModel
* SetPasswordModel `object`
  * newPassword `string`
  * oldPassword `string`

### StockOptionModel
* StockOptionModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * stockOption [IStockOption](#istockoption)

### StockOptionsModel
* StockOptionsModel `object`
  * links `array`
    * items [ObjectLink](#objectlink)
  * stockOptions `array`
    * items [IStockOption](#istockoption)

### TimePeriod
* TimePeriod `object`
  * count `integer`
  * duration `string` (values: Days, Weeks, Months, Years, YearsOfAge)

### Year
* Year `object`
  * raw `integer`


