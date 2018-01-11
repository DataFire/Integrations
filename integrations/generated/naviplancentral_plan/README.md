# @datafire/naviplancentral_plan

Client library for Narrator Connect powered by NaviPlan

## Installation and Usage
```bash
npm install --save @datafire/naviplancentral_plan
```
```js
let naviplancentral_plan = require('@datafire/naviplancentral_plan').create();

naviplancentral_plan.StockOptions_GetByPlanidScenariotype({}).then(data => {
  console.log(data);
})
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
* output [Advicent.PublishedPlanService.Models.AdvisorsModel](#advicent.publishedplanservice.models.advisorsmodel)

### Advisors_GetById
This operation retrieves an Advisor from the plan.


```js
naviplancentral_plan.Advisors_GetById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Advicent.PublishedPlanService.Models.AdvisorModel](#advicent.publishedplanservice.models.advisormodel)

### Assumptions_GetByPlanidScenariotype
This operation retrieves an object containing all assumptions for the specified plan.


```js
naviplancentral_plan.Assumptions_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.AssumptionsModel](#advicent.publishedplanservice.models.assumptionsmodel)

### BusinessEntities_GetByPlanidScenariotype
This operation retrieves a list of all of the business entities in the plan.


```js
naviplancentral_plan.BusinessEntities_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.BusinessEntitiesModel](#advicent.publishedplanservice.models.businessentitiesmodel)

### BusinessEntities_GetByIdPlanidScenariotype
This operation retrieves a business entity from the plan.


```js
naviplancentral_plan.BusinessEntities_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of business entity to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.BusinessEntityModel](#advicent.publishedplanservice.models.businessentitymodel)

### Calculations_GetByPlanidScenariotype
Currently just stubbed out, POC in development


```js
naviplancentral_plan.Calculations_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output `boolean`

### DefinedBenefitPensions_GetByPlanidScenariotype
This operation retrieves a list of all of the defined benefit pensions in the plan.


```js
naviplancentral_plan.DefinedBenefitPensions_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.DefinedBenefitPensionsModel](#advicent.publishedplanservice.models.definedbenefitpensionsmodel)

### DefinedBenefitPensions_GetByIdPlanidScenariotype
This operation retrieves a defined benefit pension from the plan.


```js
naviplancentral_plan.DefinedBenefitPensions_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of defined benefit pension to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.DefinedBenefitPensionModel](#advicent.publishedplanservice.models.definedbenefitpensionmodel)

### Eula_Accept
Accepts the EULA


```js
naviplancentral_plan.Eula_Accept(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Family_GetByPlanidScenariotype
This operation retrieves an object containing all familymembers for the specified plan.


```js
naviplancentral_plan.Family_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.FamilyModel](#advicent.publishedplanservice.models.familymodel)

### Goals_GetByPlanidScenariotype
This operation retrieves a list of all of the goals in the plan.


```js
naviplancentral_plan.Goals_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.GoalsModel](#advicent.publishedplanservice.models.goalsmodel)

### Goals_GetByIdPlanidScenariotype
This operation retrieves a goal from the plan.


```js
naviplancentral_plan.Goals_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of goal to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.GoalModel](#advicent.publishedplanservice.models.goalmodel)

### HoldingCompanies_GetByPlanidScenariotype
This operation retrieves a list of all of the holding companies in the plan.


```js
naviplancentral_plan.HoldingCompanies_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.HoldingCompaniesModel](#advicent.publishedplanservice.models.holdingcompaniesmodel)

### HoldingCompanies_GetByIdPlanidScenariotype
This operation retrieves a holding company from the plan.


```js
naviplancentral_plan.HoldingCompanies_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of holding company to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.HoldingCompanyModel](#advicent.publishedplanservice.models.holdingcompanymodel)

### Liabilities_GetByPlanidScenariotype
This operation retrieves a list of all of the liabilities in the plan.


```js
naviplancentral_plan.Liabilities_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.LiabilitiesModel](#advicent.publishedplanservice.models.liabilitiesmodel)

### Liabilities_GetByIdPlanidScenariotype
This operation retrieves a liability from the plan.


```js
naviplancentral_plan.Liabilities_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of liability to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.LiabilityModel](#advicent.publishedplanservice.models.liabilitymodel)

### LifestyleAssets_GetByPlanidScenariotype
This operation retrieves a list of all of the lifestyle assets in the plan.


```js
naviplancentral_plan.LifestyleAssets_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.LifestyleAssetsModel](#advicent.publishedplanservice.models.lifestyleassetsmodel)

### LifestyleAssets_GetByIdPlanidScenariotype
This operation retrieves a lifestyle asset from the plan.


```js
naviplancentral_plan.LifestyleAssets_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of lifestyle asset to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.LifestyleAssetModel](#advicent.publishedplanservice.models.lifestyleassetmodel)

### NetWorth_GetByPlanidScenariotype
This operation retrieves an object containing net worth values for specific dates within the plan:
              * Plan Start Date
              * Retirement Date
              * Plan End Date.


```js
naviplancentral_plan.NetWorth_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.NetWorthModel](#advicent.publishedplanservice.models.networthmodel)

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
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Advicent.PublishedPlanService.Password.Models.ResetPasswordModel](#advicent.publishedplanservice.password.models.resetpasswordmodel)

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
  * model **required** [Advicent.PublishedPlanService.Password.Models.SetPasswordModel](#advicent.publishedplanservice.password.models.setpasswordmodel)

#### Output
*Output schema unknown*

### PlanInformation_GetByPlanidScenariotype
This operation retrieves the high level plan information for a given plan


```js
naviplancentral_plan.PlanInformation_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.PlanInformationModel](#advicent.publishedplanservice.models.planinformationmodel)

### PortfolioAccounts_GetByPlanidScenariotype
This operation retrieves a list of all of the portfolio accounts in the plan.


```js
naviplancentral_plan.PortfolioAccounts_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.PortfolioAccountsModel](#advicent.publishedplanservice.models.portfolioaccountsmodel)

### PortfolioAccounts_GetByIdPlanidScenariotype
This operation retrieves a portfolio account from the plan.


```js
naviplancentral_plan.PortfolioAccounts_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of portfolio account to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.PortfolioAccountModel](#advicent.publishedplanservice.models.portfolioaccountmodel)

### ProjectedAnnualSummary_GetByPlanidScenariotype
This operation retrieves an object containing annual summary information 
              for each year of the projected plan.


```js
naviplancentral_plan.ProjectedAnnualSummary_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.ProjectedAnnualSummariesModel](#advicent.publishedplanservice.models.projectedannualsummariesmodel)

### ProjectedAnnualSummary_GetByIdPlanidScenariotype
This operation retrieves an object containing annual summary information 
              for a single specified year of the projected plan.


```js
naviplancentral_plan.ProjectedAnnualSummary_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Index into the list of annual projections
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.ProjectedAnnualSummaryModel](#advicent.publishedplanservice.models.projectedannualsummarymodel)

### ProjectedCashFlow_GetByPlanidScenariotype
This operation retrieves an object containing cash flow information 
              for each year of the projected plan.


```js
naviplancentral_plan.ProjectedCashFlow_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.CashFlowProjectionsModel](#advicent.publishedplanservice.models.cashflowprojectionsmodel)

### ProjectedCashFlow_GetByIdPlanidScenariotype
This operation retrieves an object containing cash flow information 
              for a single specified year of the projected plan.


```js
naviplancentral_plan.ProjectedCashFlow_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Index into the list of annual projections
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.CashFlowProjectionModel](#advicent.publishedplanservice.models.cashflowprojectionmodel)

### ProjectedGoals_GetAssetsFundingGoalsByPlanidScenariotype
This operation retrieves the assets funding each goal throughout the plan years


```js
naviplancentral_plan.ProjectedGoals_GetAssetsFundingGoalsByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.AssetsFundingGoalModel](#advicent.publishedplanservice.models.assetsfundinggoalmodel)

### ProjectedGoals_GetNeedsVsAbilitiesByPlanidScenariotype
This operation retrieves a needs and abilities data for all goals throughout
              the plan years.


```js
naviplancentral_plan.ProjectedGoals_GetNeedsVsAbilitiesByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.NeedsVsAbilitiesModel](#advicent.publishedplanservice.models.needsvsabilitiesmodel)

### ProjectedNetWorth_GetByPlanidScenariotype
This operation retrieves an object containing net worth information 
              for each year of the projected plan. These are EOY numbers.


```js
naviplancentral_plan.ProjectedNetWorth_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.NetWorthProjectionsModel](#advicent.publishedplanservice.models.networthprojectionsmodel)

### ProjectedNetWorth_GetByIdPlanidScenariotype
This operation retrieves an object containing net worth information 
              for a single specified year of the projected plan. These are EOY numbers.


```js
naviplancentral_plan.ProjectedNetWorth_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Index into the list of annual projections
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.NetWorthProjectionModel](#advicent.publishedplanservice.models.networthprojectionmodel)

### RestrictedStocks_GetByPlanidScenariotype
This operation retrieves a list of all of the restricted stocks in the plan.


```js
naviplancentral_plan.RestrictedStocks_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.RestrictedStocksModel](#advicent.publishedplanservice.models.restrictedstocksmodel)

### RestrictedStocks_GetByIdPlanidScenariotype
This operation retrieves a restricted stock from the plan.


```js
naviplancentral_plan.RestrictedStocks_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of restricted stock to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.RestrictedStockModel](#advicent.publishedplanservice.models.restrictedstockmodel)

### ServiceInformation_Statistics
This resource can be used to check the status of the service.


```js
naviplancentral_plan.ServiceInformation_Statistics(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Advicent.Altair.Common.ServiceInformation](#advicent.altair.common.serviceinformation)

### StockOptions_GetByPlanidScenariotype
This operation retrieves a list of all of the stock options in the plan.


```js
naviplancentral_plan.StockOptions_GetByPlanidScenariotype({}, context)
```

#### Input
* input `object`
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.StockOptionsModel](#advicent.publishedplanservice.models.stockoptionsmodel)

### StockOptions_GetByIdPlanidScenariotype
This operation retrieves a stock option from the plan.


```js
naviplancentral_plan.StockOptions_GetByIdPlanidScenariotype({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of stock option to retrieve
  * planId `string`: Id of the plan to retrieve data from (e.g. 1001-11-3). Default value is the first plan the user is authorized to access.
  * scenarioType `integer`: Type of plan to retrieve data from (0:Current-default, 1:Recommended)

#### Output
* output [Advicent.PublishedPlanService.Models.StockOptionModel](#advicent.publishedplanservice.models.stockoptionmodel)

### Auth_LoginByModel
Start a session with the DomainProviders user store


```js
naviplancentral_plan.Auth_LoginByModel({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [Advicent.PublishedPlanService.Auth.Models.LoginModel](#advicent.publishedplanservice.auth.models.loginmodel)

#### Output
* output [Advicent.PublishedPlanService.Models.PublicSessionInfoModel](#advicent.publishedplanservice.models.publicsessioninfomodel)

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
Validate a session


```js
naviplancentral_plan.Auth_ResumeSession(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Advicent.PublishedPlanService.Models.PublicSessionInfoModel](#advicent.publishedplanservice.models.publicsessioninfomodel)



## Definitions

**This integration has no definitions**
