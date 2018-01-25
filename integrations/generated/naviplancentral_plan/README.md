# @datafire/naviplancentral_plan

Client library for Published Plan Service

## Installation and Usage
```bash
npm install --save @datafire/naviplancentral_plan
```
```js
let naviplancentral_plan = require('@datafire/naviplancentral_plan').create();

naviplancentral_plan.StockOptions_GetByPlanidScenariotype({}).then(data => {
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

### Advicent.Altair.Common.ServiceInformation
* Advicent.Altair.Common.ServiceInformation `object`
  * altairConnectionStatus `boolean`
  * name `string`
  * serviceVersion [System.Version](#system.version)
  * status `string`

### Advicent.DomainLogic.Models.ProjectedAnnualSummary.CashFlowSummary
* Advicent.DomainLogic.Models.ProjectedAnnualSummary.CashFlowSummary `object`
  * surplusDeficit `number`
  * totalIncome `number`
  * totalOutflowsWithTaxes `number`
  * totalOutflowsWithoutTaxes `number`
  * totalTaxes `number`

### Advicent.DomainLogic.Models.ProjectedAnnualSummary.NetWorthSummary
* Advicent.DomainLogic.Models.ProjectedAnnualSummary.NetWorthSummary `object`
  * totalAssets `number`
  * totalLiabilities `number`
  * totalNetWorth `number`

### Advicent.DomainLogic.Models.ProjectedAnnualSummary.ProjectedAnnualSummary
* Advicent.DomainLogic.Models.ProjectedAnnualSummary.ProjectedAnnualSummary `object`
  * cashFlow [Advicent.DomainLogic.Models.ProjectedAnnualSummary.CashFlowSummary](#advicent.domainlogic.models.projectedannualsummary.cashflowsummary)
  * clientAge `integer`
  * coClientAge `integer`
  * netWorth [Advicent.DomainLogic.Models.ProjectedAnnualSummary.NetWorthSummary](#advicent.domainlogic.models.projectedannualsummary.networthsummary)
  * year `integer`

### Advicent.DomainLogic.Models.ProjectedCashFlow.ProjectedCashFlowSummary
* Advicent.DomainLogic.Models.ProjectedCashFlow.ProjectedCashFlowSummary `object`
  * cashFlow [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowByOwner](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowbyowner)
  * clientAge `integer`
  * coClientAge `integer`
  * year `integer`

### Advicent.DomainLogic.Models.ProjectedGoals.AssetsFundingGoalSummary
* Advicent.DomainLogic.Models.ProjectedGoals.AssetsFundingGoalSummary `object`
  * contributions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAccumulationCategoryData](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iaccumulationcategorydata)
  * endOfYearAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAccumulationCategoryData](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iaccumulationcategorydata)
  * goalType `string`
  * growthAndReinvestments [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAccumulationCategoryData](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iaccumulationcategorydata)
  * identifier `integer`
  * netWithdrawals `number`
  * withdrawals [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAccumulationCategoryData](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iaccumulationcategorydata)

### Advicent.DomainLogic.Models.ProjectedGoals.GoalNeedsVsAbilitiesSummary
* Advicent.DomainLogic.Models.ProjectedGoals.GoalNeedsVsAbilitiesSummary `object`
  * abilities `number`
  * fixedNeeds `number`
  * fixedNeedsWithTaxes `number`
  * goalType `string`
  * identifier `integer`
  * totalNeeds `number`
  * totalNeedsWithTaxes `number`

### Advicent.DomainLogic.Models.ProjectedGoals.ProjectedGoalsSummary[Advicent.DomainLogic.Models.ProjectedGoals.AssetsFundingGoalSummary]
* Advicent.DomainLogic.Models.ProjectedGoals.ProjectedGoalsSummary[Advicent.DomainLogic.Models.ProjectedGoals.AssetsFundingGoalSummary] `object`
  * clientAge `integer`
  * coClientAge `integer`
  * goals `array`
    * items [Advicent.DomainLogic.Models.ProjectedGoals.AssetsFundingGoalSummary](#advicent.domainlogic.models.projectedgoals.assetsfundinggoalsummary)
  * year `integer`

### Advicent.DomainLogic.Models.ProjectedGoals.ProjectedGoalsSummary[Advicent.DomainLogic.Models.ProjectedGoals.GoalNeedsVsAbilitiesSummary]
* Advicent.DomainLogic.Models.ProjectedGoals.ProjectedGoalsSummary[Advicent.DomainLogic.Models.ProjectedGoals.GoalNeedsVsAbilitiesSummary] `object`
  * clientAge `integer`
  * coClientAge `integer`
  * goals `array`
    * items [Advicent.DomainLogic.Models.ProjectedGoals.GoalNeedsVsAbilitiesSummary](#advicent.domainlogic.models.projectedgoals.goalneedsvsabilitiessummary)
  * year `integer`

### Advicent.DomainLogic.Models.ProjectedNetWorth.ProjectedNetWorthSummary
* Advicent.DomainLogic.Models.ProjectedNetWorth.ProjectedNetWorthSummary `object`
  * clientAge `integer`
  * coClientAge `integer`
  * endOfYearNetWorth [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthatdate)
  * year `integer`

### Advicent.PublishedPlanService.Auth.Models.LoginModel
* Advicent.PublishedPlanService.Auth.Models.LoginModel `object`
  * npoIdentifiers `array`
    * items `string`
  * password `string`
  * username `string`

### Advicent.PublishedPlanService.Models.AdvisorModel
* Advicent.PublishedPlanService.Models.AdvisorModel `object`
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
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * middleName `string`
  * officeName `string`
  * officeWebsite `string`
  * pagerNumber `string`
  * postalCode `string`
  * stateProvince `string`

### Advicent.PublishedPlanService.Models.AdvisorsModel
* Advicent.PublishedPlanService.Models.AdvisorsModel `object`
  * advisors `array`
    * items [Advicent.PublishedPlanService.Models.AdvisorModel](#advicent.publishedplanservice.models.advisormodel)

### Advicent.PublishedPlanService.Models.AssetsFundingGoalModel
* Advicent.PublishedPlanService.Models.AssetsFundingGoalModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * projections `array`
    * items [Advicent.DomainLogic.Models.ProjectedGoals.ProjectedGoalsSummary[Advicent.DomainLogic.Models.ProjectedGoals.AssetsFundingGoalSummary]](#advicent.domainlogic.models.projectedgoals.projectedgoalssummary[advicent.domainlogic.models.projectedgoals.assetsfundinggoalsummary])

### Advicent.PublishedPlanService.Models.AssumptionsModel
* Advicent.PublishedPlanService.Models.AssumptionsModel `object`
  * assumptions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IAssumptions](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.iassumptions)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.BusinessEntitiesModel
* Advicent.PublishedPlanService.Models.BusinessEntitiesModel `object`
  * businessEntities `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntity](#naviplan.planobjectmodel.planpropertiesdata.assetdata.businessentitydata.ibusinessentity)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.BusinessEntityModel
* Advicent.PublishedPlanService.Models.BusinessEntityModel `object`
  * businessEntity [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntity](#naviplan.planobjectmodel.planpropertiesdata.assetdata.businessentitydata.ibusinessentity)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.CashFlowProjectionModel
* Advicent.PublishedPlanService.Models.CashFlowProjectionModel `object`
  * cashFlow [Advicent.DomainLogic.Models.ProjectedCashFlow.ProjectedCashFlowSummary](#advicent.domainlogic.models.projectedcashflow.projectedcashflowsummary)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.CashFlowProjectionsModel
* Advicent.PublishedPlanService.Models.CashFlowProjectionsModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * projections `array`
    * items [Advicent.PublishedPlanService.Models.CashFlowProjectionModel](#advicent.publishedplanservice.models.cashflowprojectionmodel)

### Advicent.PublishedPlanService.Models.DefinedBenefitPensionModel
* Advicent.PublishedPlanService.Models.DefinedBenefitPensionModel `object`
  * definedBenefitPension [NaviPlan.PlanObjectModel.PlanPropertiesData.DefinedBenefitPensionData.IDefinedBenefitPension](#naviplan.planobjectmodel.planpropertiesdata.definedbenefitpensiondata.idefinedbenefitpension)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.DefinedBenefitPensionsModel
* Advicent.PublishedPlanService.Models.DefinedBenefitPensionsModel `object`
  * definedBenefitPensions `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.DefinedBenefitPensionData.IDefinedBenefitPension](#naviplan.planobjectmodel.planpropertiesdata.definedbenefitpensiondata.idefinedbenefitpension)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.FamilyModel
* Advicent.PublishedPlanService.Models.FamilyModel `object`
  * family [NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamily](#naviplan.planobjectmodel.scenariopropertiesdata.clientdata.ifamily)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.GoalModel
* Advicent.PublishedPlanService.Models.GoalModel `object`
  * goal [NaviPlan.PlanObjectModel.PlanPropertiesData.GoalData.IGoal](#naviplan.planobjectmodel.planpropertiesdata.goaldata.igoal)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.GoalsModel
* Advicent.PublishedPlanService.Models.GoalsModel `object`
  * goals `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.GoalData.IGoal](#naviplan.planobjectmodel.planpropertiesdata.goaldata.igoal)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.HoldingCompaniesModel
* Advicent.PublishedPlanService.Models.HoldingCompaniesModel `object`
  * holdingCompanies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IHoldingCompany](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iholdingcompany)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.HoldingCompanyModel
* Advicent.PublishedPlanService.Models.HoldingCompanyModel `object`
  * holdingCompany [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IHoldingCompany](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iholdingcompany)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.LiabilitiesModel
* Advicent.PublishedPlanService.Models.LiabilitiesModel `object`
  * liabilities `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILiability](#naviplan.planobjectmodel.planpropertiesdata.liabilitydata.iliability)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.LiabilityModel
* Advicent.PublishedPlanService.Models.LiabilityModel `object`
  * liability [NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILiability](#naviplan.planobjectmodel.planpropertiesdata.liabilitydata.iliability)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.LifestyleAssetModel
* Advicent.PublishedPlanService.Models.LifestyleAssetModel `object`
  * lifestyleAsset [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.LifestyleAssetData.ILifestyleAsset](#naviplan.planobjectmodel.planpropertiesdata.assetdata.lifestyleassetdata.ilifestyleasset)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.LifestyleAssetsModel
* Advicent.PublishedPlanService.Models.LifestyleAssetsModel `object`
  * lifestyleAssets `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.LifestyleAssetData.ILifestyleAsset](#naviplan.planobjectmodel.planpropertiesdata.assetdata.lifestyleassetdata.ilifestyleasset)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.NeedsVsAbilitiesModel
* Advicent.PublishedPlanService.Models.NeedsVsAbilitiesModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * projections `array`
    * items [Advicent.DomainLogic.Models.ProjectedGoals.ProjectedGoalsSummary[Advicent.DomainLogic.Models.ProjectedGoals.GoalNeedsVsAbilitiesSummary]](#advicent.domainlogic.models.projectedgoals.projectedgoalssummary[advicent.domainlogic.models.projectedgoals.goalneedsvsabilitiessummary])

### Advicent.PublishedPlanService.Models.NetWorthModel
* Advicent.PublishedPlanService.Models.NetWorthModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * netWorth [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorth](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworth)

### Advicent.PublishedPlanService.Models.NetWorthProjectionModel
* Advicent.PublishedPlanService.Models.NetWorthProjectionModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * netWorth [Advicent.DomainLogic.Models.ProjectedNetWorth.ProjectedNetWorthSummary](#advicent.domainlogic.models.projectednetworth.projectednetworthsummary)

### Advicent.PublishedPlanService.Models.NetWorthProjectionsModel
* Advicent.PublishedPlanService.Models.NetWorthProjectionsModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * projections `array`
    * items [Advicent.PublishedPlanService.Models.NetWorthProjectionModel](#advicent.publishedplanservice.models.networthprojectionmodel)

### Advicent.PublishedPlanService.Models.PlanInformationModel
* Advicent.PublishedPlanService.Models.PlanInformationModel `object`
  * country `string`
  * description `string`
  * isJointAnalysis `boolean`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * locale `string`
  * planDate [NaviPlan.Util.Date](#naviplan.util.date)
  * planDescription `string`
  * planId `string`
  * planLevel `string`
  * planModules [NaviPlan.PlanObjectModel.IPlanModules](#naviplan.planobjectmodel.iplanmodules)
  * planType `string`

### Advicent.PublishedPlanService.Models.PortfolioAccountModel
* Advicent.PublishedPlanService.Models.PortfolioAccountModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * portfolioAccount [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAccount](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.iportfolioaccount)

### Advicent.PublishedPlanService.Models.PortfolioAccountsModel
* Advicent.PublishedPlanService.Models.PortfolioAccountsModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * portfolioAccounts `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAccount](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.iportfolioaccount)

### Advicent.PublishedPlanService.Models.ProjectedAnnualSummariesModel
* Advicent.PublishedPlanService.Models.ProjectedAnnualSummariesModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * projections `array`
    * items [Advicent.PublishedPlanService.Models.ProjectedAnnualSummaryModel](#advicent.publishedplanservice.models.projectedannualsummarymodel)

### Advicent.PublishedPlanService.Models.ProjectedAnnualSummaryModel
* Advicent.PublishedPlanService.Models.ProjectedAnnualSummaryModel `object`
  * annualSummary [Advicent.DomainLogic.Models.ProjectedAnnualSummary.ProjectedAnnualSummary](#advicent.domainlogic.models.projectedannualsummary.projectedannualsummary)
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)

### Advicent.PublishedPlanService.Models.PublicSessionInfoModel
* Advicent.PublishedPlanService.Models.PublicSessionInfoModel `object`
  * eulaAccepted `boolean`
  * hasAccountAggregation `boolean`
  * hasUserSetPassword `boolean`
  * isAdmin `boolean`
  * isAdvisor `boolean`
  * isClient `boolean`
  * planIds `array`
    * items `string`
  * userId `string`
  * userName `string`

### Advicent.PublishedPlanService.Models.RestrictedStockModel
* Advicent.PublishedPlanService.Models.RestrictedStockModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * restrictedStock [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IRestrictedStock](#naviplan.planobjectmodel.planpropertiesdata.assetdata.equitycompensationdata.irestrictedstock)

### Advicent.PublishedPlanService.Models.RestrictedStocksModel
* Advicent.PublishedPlanService.Models.RestrictedStocksModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * restrictedStocks `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IRestrictedStock](#naviplan.planobjectmodel.planpropertiesdata.assetdata.equitycompensationdata.irestrictedstock)

### Advicent.PublishedPlanService.Models.StockOptionModel
* Advicent.PublishedPlanService.Models.StockOptionModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * stockOption [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IStockOption](#naviplan.planobjectmodel.planpropertiesdata.assetdata.equitycompensationdata.istockoption)

### Advicent.PublishedPlanService.Models.StockOptionsModel
* Advicent.PublishedPlanService.Models.StockOptionsModel `object`
  * links `array`
    * items [Advicent.Web.Base.Links.ObjectLink](#advicent.web.base.links.objectlink)
  * stockOptions `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IStockOption](#naviplan.planobjectmodel.planpropertiesdata.assetdata.equitycompensationdata.istockoption)

### Advicent.PublishedPlanService.Password.Models.ResetPasswordModel
* Advicent.PublishedPlanService.Password.Models.ResetPasswordModel `object`
  * locale `string`
  * userName `string`

### Advicent.PublishedPlanService.Password.Models.SetPasswordModel
* Advicent.PublishedPlanService.Password.Models.SetPasswordModel `object`
  * newPassword `string`
  * oldPassword `string`

### Advicent.Web.Base.Links.ObjectLink
* Advicent.Web.Base.Links.ObjectLink `object`
  * href `string`
  * rel `string`

### NaviPlan.PlanObjectModel.IPlanModules
* NaviPlan.PlanObjectModel.IPlanModules `object`
  * isCriticalIllnessModuleEnabled `boolean`
  * isDisabilityIncomeModuleEnabled `boolean`
  * isEstatePlanningModuleEabled `boolean`
  * isLongTermCareModuleEnabled `boolean`
  * isSurvivorIncomeModuleEnabled `boolean`

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntity
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntity `object`
  * activities `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntityActivity](#naviplan.planobjectmodel.planpropertiesdata.assetdata.businessentitydata.ibusinessentityactivity)
  * assetId [NaviPlan.PlanObjectModel.Util.IAssetId](#naviplan.planobjectmodel.util.iassetid)
  * businessType `string` (values: Undefined, LLC, Partnership, SCorporation, CCorporation)
  * businessTypeFormatted `string`
  * currentAnnualDistributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * currentAnnualDividends [NaviPlan.Util.Currency](#naviplan.util.currency)
  * currentAnnualGrowthRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * currentAnnualNetIncome [NaviPlan.Util.Currency](#naviplan.util.currency)
  * entityName `string`
  * liquidationEvent [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.ILiquidationEvent](#naviplan.planobjectmodel.planpropertiesdata.assetdata.businessentitydata.iliquidationevent)
  * marketValuationDate [NaviPlan.Util.Date](#naviplan.util.date)
  * marketValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * owner `string`
  * purchaseAmount [NaviPlan.Util.Currency](#naviplan.util.currency)
  * purchaseDate [NaviPlan.Util.Date](#naviplan.util.date)
  * standardDeviation [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntityActivity
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.IBusinessEntityActivity `object`
  * applicableDateRange [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * distributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * expense [NaviPlan.Util.Currency](#naviplan.util.currency)
  * frequency [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.frequency])
  * income [NaviPlan.Util.Currency](#naviplan.util.currency)
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.ILiquidationEvent
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.BusinessEntityData.ILiquidationEvent `object`
  * firstSaleDate [NaviPlan.Util.Date](#naviplan.util.date)
  * lastSaleDate [NaviPlan.Util.Date](#naviplan.util.date)
  * liquidationType `string` (values: SellAtPlanEnd, SellAllOnSpecificDate, SellInInstallments)
  * liquidationTypeDescription `string`
  * saleDatesDescription `string`

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IRestrictedStock
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IRestrictedStock `object`
  * annualDividendPerUnit [NaviPlan.Util.Currency](#naviplan.util.currency)
  * applicableRangeRetirementLiquidatedAssets [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * awardedDate [NaviPlan.Util.Date](#naviplan.util.date)
  * currentUnitValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * description `string`
  * growthRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * numberOfUnits `integer`
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * pricePaidForAward [NaviPlan.Util.Currency](#naviplan.util.currency)
  * type `string`

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IStockOption
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IStockOption `object`
  * annualDividendPerUnit [NaviPlan.Util.Currency](#naviplan.util.currency)
  * applicableRangeRetirementLiquidatedAssets [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * company `string`
  * currentUnitPrice [NaviPlan.Util.Currency](#naviplan.util.currency)
  * currentUnitPriceDate [NaviPlan.Util.Date](#naviplan.util.date)
  * description `string`
  * endOfPlanYearExercisableGrossValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * exerciseCost [NaviPlan.Util.Currency](#naviplan.util.currency)
  * expirationDate [NaviPlan.Util.Date](#naviplan.util.date)
  * grantDate [NaviPlan.Util.Date](#naviplan.util.date)
  * grantedOptions `integer`
  * growthRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * optionsExercisable `integer`
  * optionsExercised `integer`
  * optionsVested `integer`
  * owner `string`
  * preTaxProfit [NaviPlan.Util.Currency](#naviplan.util.currency)
  * startOfYearAMTBasis [NaviPlan.Util.Currency](#naviplan.util.currency)
  * startOfYearCostBasis [NaviPlan.Util.Currency](#naviplan.util.currency)
  * startOfYearUnitPrice [NaviPlan.Util.Currency](#naviplan.util.currency)
  * strikePrice [NaviPlan.Util.Currency](#naviplan.util.currency)
  * symbol `string`
  * type `string` (values: NonQualifiedStockOption, IncentiveStockOption)
  * typeFormatted `string`
  * vestingSchedule `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IVestingData](#naviplan.planobjectmodel.planpropertiesdata.assetdata.equitycompensationdata.ivestingdata)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IVestingData
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.EquityCompensationData.IVestingData `object`
  * date [NaviPlan.Util.Date](#naviplan.util.date)
  * percentVested [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IHoldingCompany
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IHoldingCompany `object`
  * annualDividendYield [NaviPlan.Util.Percent](#naviplan.util.percent)
  * commonSharesOutstanding `integer`
  * corporateYearEnd [NaviPlan.Util.Date](#naviplan.util.date)
  * description `string`
  * dividendType `string` (values: Taxable, NonTaxable)
  * dividendTypeFormatted `string`
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * investmentAccounts `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IInvestmentAccount](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iinvestmentaccount)
  * marketValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * numPreferredShareClasses `integer`
  * ownershipAsOfDate [NaviPlan.Util.Date](#naviplan.util.date)
  * ownershipDetails [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipDetails](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iownershipdetails)
  * preferredSharesOutstanding `integer`
  * provinceOfIncorporation `string`
  * provinceOfTaxation `string`
  * valueOfAllCommonShares [NaviPlan.Util.Currency](#naviplan.util.currency)
  * valueOfAllPreferredShares [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IInvestmentAccount
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IInvestmentAccount `object`
  * annualFee [NaviPlan.Util.Percent](#naviplan.util.percent)
  * costBasis [NaviPlan.Util.Currency](#naviplan.util.currency)
  * description `string`
  * excludeInAA `boolean`
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * marketValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * rateOfReturn [NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnDetails](#naviplan.planobjectmodel.util.assetallocation.irateofreturndetails)
  * type `string`
  * valuationDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IInvestmentAccountOwnershipData
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IInvestmentAccountOwnershipData `object`
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * ownersName `string`
  * ownershipPercent [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipData
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipData `object`
  * marketValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * ownersName `string`
  * ownershipPercent [NaviPlan.Util.Percent](#naviplan.util.percent)
  * shares `integer`

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipDetails
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipDetails `object`
  * common `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipData](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iownershipdata)
  * preferred `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IOwnershipData](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iownershipdata)
  * shareholderPercentOwnership `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.HoldingCompanyData.IInvestmentAccountOwnershipData](#naviplan.planobjectmodel.planpropertiesdata.assetdata.holdingcompanydata.iinvestmentaccountownershipdata)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.ISEPPRedemptionStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.ISEPPRedemptionStrategy `object`
  * applicableDateRange [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * distributionMethod [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.SEPPDistributionMethod]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.planpropertiesdata.assetdata.seppdistributionmethod])
  * lifeExpectancyTable [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.SEPPLifeExpectancyTable]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.planpropertiesdata.assetdata.sepplifeexpectancytable])
  * redemptionFrequency [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.frequency])

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.LifestyleAssetData.ILifestyleAsset
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.LifestyleAssetData.ILifestyleAsset `object`
  * afterTaxProceedsAccountName `string`
  * description `string`
  * futureValueProjectedGrossSaleValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * marketValueAsOf [NaviPlan.Util.CurrencyWithDate](#naviplan.util.currencywithdate)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * preTaxGrowthRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * presentValueProjectedGrossSaleValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * projectedSaleDate [NaviPlan.Util.Date](#naviplan.util.date)
  * purchaseAmount [NaviPlan.Util.Currency](#naviplan.util.currency)
  * purchaseDate [NaviPlan.Util.Date](#naviplan.util.date)
  * standardDeviation [NaviPlan.Util.Percent](#naviplan.util.percent)
  * type [NaviPlan.Util.FormattedLifestyleType](#naviplan.util.formattedlifestyletype)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ILumpSumRedemptionStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ILumpSumRedemptionStrategy `object`
  * amountOrPercentOfValue [NaviPlan.Util.PercentOr[NaviPlan.Util.Currency]](#naviplan.util.percentor[naviplan.util.currency])
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)
  * redemptionDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ILumpSumSavingsStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ILumpSumSavingsStrategy `object`
  * amountOrPercentOfSalary [NaviPlan.Util.PercentOr[NaviPlan.Util.Currency]](#naviplan.util.percentor[naviplan.util.currency])
  * formattedSavingsTypeWithDash `string`
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)
  * savingsDate [NaviPlan.Util.Date](#naviplan.util.date)
  * savingsType [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.SavingsStrategyType]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.savingsstrategytype])

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPeriodicRedemptionStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPeriodicRedemptionStrategy `object`
  * amountOrPercentOfValue [NaviPlan.Util.PercentOr[NaviPlan.Util.Currency]](#naviplan.util.percentor[naviplan.util.currency])
  * applicableDateRange [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)
  * redemptionFrequency [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.frequency])

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPeriodicSavingsStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPeriodicSavingsStrategy `object`
  * amountOrPercentOfSalary [NaviPlan.Util.PercentOr[NaviPlan.Util.Currency]](#naviplan.util.percentor[naviplan.util.currency])
  * endDate [NaviPlan.Util.Date](#naviplan.util.date)
  * formattedFrequencyAbbrv `string`
  * formattedSavingsTypeWithDash `string`
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)
  * savingsFrequency [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.frequency])
  * savingsType [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.SavingsStrategyType]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.savingsstrategytype])
  * startDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAccount
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAccount `object`
  * annualFee [NaviPlan.Util.Percent](#naviplan.util.percent)
  * applicableRangeRetirementLiquidatedAssets [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * costBasis [NaviPlan.Util.Currency](#naviplan.util.currency)
  * description `string`
  * descriptionWithOwner `string`
  * excludeInAA `boolean`
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * isSystemGenerated `boolean`
  * marketValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * portfolioAssets `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAsset](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.iportfolioasset)
  * rateOfReturn [NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnDetails](#naviplan.planobjectmodel.util.assetallocation.irateofreturndetails)
  * savingsStrategies [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ISavingsStrategies](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.isavingsstrategies)
  * seppRedemptionStrategy [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.ISEPPRedemptionStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.iseppredemptionstrategy)
  * type `string`
  * valuationDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAsset
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPortfolioAsset `object`
  * applicableRangeRetirementLiquidatedAssets [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * costBasis [NaviPlan.Util.Currency](#naviplan.util.currency)
  * description `string`
  * goalFundingDescription `string`
  * goalFundingGoalId [NaviPlan.Util.GoalId](#naviplan.util.goalid)
  * id [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * incomeReinvested [NaviPlan.PlanObjectModel.Util.AssetAllocation.IReturnIncomeReinvestedDetails](#naviplan.planobjectmodel.util.assetallocation.ireturnincomereinvesteddetails)
  * isSystemGenerated `boolean`
  * marketValue [NaviPlan.Util.Currency](#naviplan.util.currency)
  * parentAccountId [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * rateOfReturn [NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnDetails](#naviplan.planobjectmodel.util.assetallocation.irateofreturndetails)
  * redemptionStrategies [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IRedemptionStrategies](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.iredemptionstrategies)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IRedemptionStrategies
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IRedemptionStrategies `object`
  * lumpSumRedemptionStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ILumpSumRedemptionStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.ilumpsumredemptionstrategy)
  * periodicRedemptionStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPeriodicRedemptionStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.iperiodicredemptionstrategy)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IRrspMaximizerStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IRrspMaximizerStrategy `object`
  * applicable `string`
  * applicableRange [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * assetName `string`
  * constrainedByCashflow [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)
  * month `string`

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ISavingsStrategies
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ISavingsStrategies `object`
  * lumpSumSavingsStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ILumpSumSavingsStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.ilumpsumsavingsstrategy)
  * periodicSavingsStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IPeriodicSavingsStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.iperiodicsavingsstrategy)
  * rrspMaximizerStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.IRrspMaximizerStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.irrspmaximizerstrategy)
  * surplusSavingsStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ISurplusSavingsStrategy](#naviplan.planobjectmodel.planpropertiesdata.assetdata.portfolioassetdata.isurplussavingsstrategy)

### NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ISurplusSavingsStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.ISurplusSavingsStrategy `object`
  * endDate [NaviPlan.Util.Date](#naviplan.util.date)
  * percentOfSurplus [NaviPlan.Util.Percent](#naviplan.util.percent)
  * startDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.PlanPropertiesData.DefinedBenefitPensionData.IDefinedBenefitPension
* NaviPlan.PlanObjectModel.PlanPropertiesData.DefinedBenefitPensionData.IDefinedBenefitPension `object`
  * benefit [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Benefit[NaviPlan.Util.CurrencyWithGrowth]]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.benefit[naviplan.util.currencywithgrowth]])
  * description `string`
  * isBenefitFormula `boolean`
  * isBenefitIntegratedWithCppQpp `boolean`
  * isFormulaIntegratedWithCppQpp `boolean`
  * owner `string` (values: Client, CoClient)
  * pensionType `string`
  * percentPayableToSurvivor [NaviPlan.Util.Percent](#naviplan.util.percent)
  * projectedYearsOfService `integer`
  * startDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.PlanPropertiesData.GoalData.IGoal
* NaviPlan.PlanObjectModel.PlanPropertiesData.GoalData.IGoal `object`
  * assetsRemainingAfterFundingGoal [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Currency]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.currency])
  * coverage [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.GoalCoveragePercent]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.goalcoveragepercent])
  * description `string`
  * endDate [NaviPlan.Util.Date](#naviplan.util.date)
  * identifier [NaviPlan.Util.GoalId](#naviplan.util.goalid)
  * startDate [NaviPlan.Util.Date](#naviplan.util.date)
  * type `string` (values: Retirement, SurvivorIncome, CriticalIllness, LongTermCareInsurance, Cashflow, DisabilityIncome, Education, MajorPurchase, EmergencyFund, Undefined, NotSupported)
  * yearAssetsDepleted [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Year]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.year])

### NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.IDebtModStrategies
* NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.IDebtModStrategies `object`
  * lumpSumDebtModStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILumpSumDebtModStrategy](#naviplan.planobjectmodel.planpropertiesdata.liabilitydata.ilumpsumdebtmodstrategy)
  * periodicDebtModStrategies `array`
    * items [NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.IPeriodicDebtModStrategy](#naviplan.planobjectmodel.planpropertiesdata.liabilitydata.iperiodicdebtmodstrategy)

### NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILiability
* NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILiability `object`
  * annualPaymentAmount [NaviPlan.Util.Currency](#naviplan.util.currency)
  * balanceAsOf [NaviPlan.Util.CurrencyWithDate](#naviplan.util.currencywithdate)
  * balanceAsOfPlanDate [NaviPlan.Util.Currency](#naviplan.util.currency)
  * debtModStrategies [NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.IDebtModStrategies](#naviplan.planobjectmodel.planpropertiesdata.liabilitydata.idebtmodstrategies)
  * description `string`
  * insuredForDisability [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)
  * insuredForLife [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)
  * interestRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * isInterestRateVariable [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)
  * linkedAssetName `string`
  * loanDate [NaviPlan.Util.Date](#naviplan.util.date)
  * originalBalance [NaviPlan.Util.Currency](#naviplan.util.currency)
  * owner `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * paidOffByRetirement [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.DescriptiveBoolean]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.descriptiveboolean])
  * payOffDate [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Date]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.date])
  * payOffOptionType [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.PayOffOptionsType]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.planpropertiesdata.liabilitydata.payoffoptionstype])
  * paymentAmount [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Currency]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.util.currency])
  * paymentFrequency [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.frequency])
  * paymentType [NaviPlan.Util.FormattedEnumType[NaviPlan.Util.PaymentType]](#naviplan.util.formattedenumtype[naviplan.util.paymenttype])
  * type [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.LiabilityType]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.planpropertiesdata.liabilitydata.liabilitytype])

### NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILumpSumDebtModStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.ILumpSumDebtModStrategy `object`
  * amount [NaviPlan.Util.Currency](#naviplan.util.currency)
  * debtModificationDate [NaviPlan.Util.Date](#naviplan.util.date)
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)

### NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.IPeriodicDebtModStrategy
* NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.IPeriodicDebtModStrategy `object`
  * amount [NaviPlan.Util.Currency](#naviplan.util.currency)
  * applicableDateRange [NaviPlan.Util.FormattedDateRange](#naviplan.util.formatteddaterange)
  * debtModificationFrequency [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.frequency])
  * indexRate [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IAssumptions
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IAssumptions `object`
  * anyHeadAlreadyRetired `boolean`
  * bothRetired `boolean`
  * bucketing [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IBucketing](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.ibucketing)
  * client [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IHeadAssumptions](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.iheadassumptions)
  * coClient [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IHeadAssumptions](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.iheadassumptions)
  * firstToDieDate [NaviPlan.Util.Date](#naviplan.util.date)
  * firstToDieMember `string` (values: Client, CoClient)
  * firstToRetireDate [NaviPlan.Util.Date](#naviplan.util.date)
  * inflationRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * lastToDieDate [NaviPlan.Util.Date](#naviplan.util.date)
  * lastToDieMember `string` (values: Client, CoClient)
  * lastToRetireDate [NaviPlan.Util.Date](#naviplan.util.date)
  * retirementYearAdjustedIfAlreadyRetired [NaviPlan.Util.Year](#naviplan.util.year)
  * taxMethod `string` (values: Average, Simplified, Detailed)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IBucketing
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IBucketing `object`
  * distributionBucketTargetBalance [NaviPlan.Util.Currency](#naviplan.util.currency)
  * endDate [NaviPlan.Util.Date](#naviplan.util.date)
  * indexedAt [NaviPlan.Util.Percent](#naviplan.util.percent)
  * returnRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * standardDeviation [NaviPlan.Util.Percent](#naviplan.util.percent)
  * startDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.ICanadianGovernmentPensions
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.ICanadianGovernmentPensions `object`
  * canadianOrQuebecPensionPlan [NaviPlan.Util.Currency](#naviplan.util.currency)
  * oldAgeSecurity [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IGovernmentPensions
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IGovernmentPensions `object`
  * estimatedCanadianGovernmentPensions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.ICanadianGovernmentPensions](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.icanadiangovernmentpensions)
  * estimatedSocialSecurity [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IHeadAssumptions
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IHeadAssumptions `object`
  * alreadyRetired `boolean`
  * deceasedAge `integer`
  * deceasedDate [NaviPlan.Util.Date](#naviplan.util.date)
  * estateIncomeTaxes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IIncomeTaxes](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.iincometaxes)
  * governmentPensions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IGovernmentPensions](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.igovernmentpensions)
  * maritalOrTaxFilingStatus [NaviPlan.Util.FormattedMaritalOrTaxFilingStatus](#naviplan.util.formattedmaritalortaxfilingstatus)
  * preRetirementIncomeTaxes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IIncomeTaxes](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.iincometaxes)
  * retirementAge `integer`
  * retirementDate [NaviPlan.Util.Date](#naviplan.util.date)
  * retirementIncomeTaxes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IIncomeTaxes](#naviplan.planobjectmodel.scenariopropertiesdata.assumptionsdata.iincometaxes)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IIncomeTaxes
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.AssumptionsData.IIncomeTaxes `object`
  * averageTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * combinedStateAndAverageTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * combinedStateAndLongTermCapitalGainsTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * combinedStateAndMarginalTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * longTermCapitalGainsTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * marginalTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)
  * stateTaxRate [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlow
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlow `object`
  * incomes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowIncomes](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowincomes)
  * outflows [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowOutflows](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowoutflows)
  * surplusDeficit [NaviPlan.Util.Currency](#naviplan.util.currency)
  * taxes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ITaxes](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.itaxes)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowByOwner
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowByOwner `object`
  * clientCashFlow [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlow](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflow)
  * coClientCashFlow [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlow](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflow)
  * totalCashFlow [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlow](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflow)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory `object`
  * isItemizedEnabled `boolean`
  * itemized `array`
    * items [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowItem](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowitem)
  * total [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowIncomes
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowIncomes `object`
  * annuityPayments [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * disabilityIncomes [NaviPlan.Util.Currency](#naviplan.util.currency)
  * earnedIncome [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * holdingCompanies [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * insuranceBenefits [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * investmentIncomes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * lifestyleAssetLiquidations [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * lockedInLiquidations [NaviPlan.Util.Currency](#naviplan.util.currency)
  * longTermCareBenefits [NaviPlan.Util.Currency](#naviplan.util.currency)
  * miscellaneousIncomes [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * nonQualifiedLiquidations [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * pension [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * qualifiedLiquidations [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * qualifiedLiquidationsNonRequiredMinimumDistributions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * requiredMinimumDistributions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * retirementIncome [NaviPlan.Util.Currency](#naviplan.util.currency)
  * rothLiquidations [NaviPlan.Util.Currency](#naviplan.util.currency)
  * socialSecurity [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * tfsaLiquidations [NaviPlan.Util.Currency](#naviplan.util.currency)
  * total [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * withdrawals [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowItem
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowItem `object`
  * description `string`
  * descriptionWithOwner `string`
  * isCPP `boolean`
  * isOAS `boolean`
  * sourceId [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * value [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowOutflows
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowOutflows `object`
  * contributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * educationExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * employerExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * employmentBusinessExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * holdingCompanyOutflows [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * investmentExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * lifestyleExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * lifestyleExpensesDiscretionary [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * lifestyleExpensesFixed [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * lockedInContributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * medicalExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * miscellaneousExpenses [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * miscellaneousExpensesDiscretionary [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * miscellaneousExpensesFixed [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * nonQualifiedContributions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * nonQualifiedReinvestments [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * qualifiedContributions [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * rothContributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * surplusOutflows [NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ICashFlowCategory](#naviplan.planobjectmodel.scenariopropertiesdata.cashflowdata.icashflowcategory)
  * surplusSavings [NaviPlan.Util.Currency](#naviplan.util.currency)
  * tfsaContributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * totalNeeds [NaviPlan.Util.Currency](#naviplan.util.currency)
  * totalWithTaxes [NaviPlan.Util.Currency](#naviplan.util.currency)
  * totalWithoutTaxes [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ITaxes
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.CashFlowData.ITaxes `object`
  * estate [NaviPlan.Util.Currency](#naviplan.util.currency)
  * federalIncome [NaviPlan.Util.Currency](#naviplan.util.currency)
  * giftAndGenerationSkippingTransfer [NaviPlan.Util.Currency](#naviplan.util.currency)
  * medicare [NaviPlan.Util.Currency](#naviplan.util.currency)
  * pensionEarlyDistributionPenalty [NaviPlan.Util.Currency](#naviplan.util.currency)
  * pensionPenaltyOnExcessDistributions [NaviPlan.Util.Currency](#naviplan.util.currency)
  * refundableCredits [NaviPlan.Util.Currency](#naviplan.util.currency)
  * socialSecurityEmployer [NaviPlan.Util.Currency](#naviplan.util.currency)
  * socialSecuritySelfEmployed [NaviPlan.Util.Currency](#naviplan.util.currency)
  * stateIncome [NaviPlan.Util.Currency](#naviplan.util.currency)
  * total [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IDependent
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IDependent `object`
  * address [NaviPlan.PlanObjectModel.Util.Demographics.IAddress](#naviplan.planobjectmodel.util.demographics.iaddress)
  * ageAsOfPlanDate `integer`
  * birthdate [NaviPlan.Util.Date](#naviplan.util.date)
  * citizenship `string`
  * dependentOf `string`
  * dependentOfId `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * email `string`
  * employer [NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IEmployer](#naviplan.planobjectmodel.scenariopropertiesdata.clientdata.iemployer)
  * gender [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.Gender]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.scenariopropertiesdata.clientdata.gender])
  * name [NaviPlan.PlanObjectModel.Util.Demographics.IPersonName](#naviplan.planobjectmodel.util.demographics.ipersonname)
  * ownershipId `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * phone [NaviPlan.PlanObjectModel.Util.Demographics.IPhoneNumbers](#naviplan.planobjectmodel.util.demographics.iphonenumbers)
  * relationship `string`

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IEmployer
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IEmployer `object`
  * address [NaviPlan.PlanObjectModel.Util.Demographics.IAddress](#naviplan.planobjectmodel.util.demographics.iaddress)
  * name `string`
  * phone [NaviPlan.PlanObjectModel.Util.Demographics.IBusinessPhoneNumbers](#naviplan.planobjectmodel.util.demographics.ibusinessphonenumbers)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamily
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamily `object`
  * address [NaviPlan.PlanObjectModel.Util.Demographics.IAddress](#naviplan.planobjectmodel.util.demographics.iaddress)
  * client [NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamilyMember](#naviplan.planobjectmodel.scenariopropertiesdata.clientdata.ifamilymember)
  * coClient [NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamilyMember](#naviplan.planobjectmodel.scenariopropertiesdata.clientdata.ifamilymember)
  * dependents `array`
    * items [NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IDependent](#naviplan.planobjectmodel.scenariopropertiesdata.clientdata.idependent)
  * headFullNames `string`

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamilyMember
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IFamilyMember `object`
  * address [NaviPlan.PlanObjectModel.Util.Demographics.IAddress](#naviplan.planobjectmodel.util.demographics.iaddress)
  * ageAsOfPlanDate `integer`
  * birthdate [NaviPlan.Util.Date](#naviplan.util.date)
  * citizenship `string`
  * email `string`
  * employer [NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.IEmployer](#naviplan.planobjectmodel.scenariopropertiesdata.clientdata.iemployer)
  * gender [NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.Gender]](#naviplan.util.formattedenumtype[naviplan.planobjectmodel.scenariopropertiesdata.clientdata.gender])
  * name [NaviPlan.PlanObjectModel.Util.Demographics.IPersonName](#naviplan.planobjectmodel.util.demographics.ipersonname)
  * ownershipId `string` (values: All, Head1, Head2, NonHead1, NonHead2, NonHead3, NonHead4, NonHead5, NonHead6, NonHead7, NonHead8, NonHead9, CommunityProperty, Joint, Other, AllDependents, AllFamilyMembers)
  * phone [NaviPlan.PlanObjectModel.Util.Demographics.IPhoneNumbers](#naviplan.planobjectmodel.util.demographics.iphonenumbers)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAccumulationCategoryData
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAccumulationCategoryData `object`
  * allAssets [NaviPlan.Util.Currency](#naviplan.util.currency)
  * lockedIn [NaviPlan.Util.Currency](#naviplan.util.currency)
  * nonQualified [NaviPlan.Util.Currency](#naviplan.util.currency)
  * qualified [NaviPlan.Util.Currency](#naviplan.util.currency)
  * roth [NaviPlan.Util.Currency](#naviplan.util.currency)
  * tfsa [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories `object`
  * allAssets `array`
    * items [NaviPlan.PlanObjectModel.Util.IValueDescriptionPair[NaviPlan.Util.Currency]](#naviplan.planobjectmodel.util.ivaluedescriptionpair[naviplan.util.currency])
  * businessAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * holdingCompany [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * lifestyleAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * nonQualifiedAnnuities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * nonQualifiedAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * qualifiedAnnuities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * qualifiedAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * realEstate [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * totalAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssets
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssets `object`
  * allAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iassetcategories)
  * clientAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iassetcategories)
  * coClientAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iassetcategories)
  * communityPropertyAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iassetcategories)
  * jointAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iassetcategories)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.ILiabilities
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.ILiabilities `object`
  * clientLiabilities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * coClientLiabilities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * communityPropertyLiabilities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * jointLiabilities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * totalLiabilities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorth
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorth `object`
  * netWorthAtPlanDate [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthatdate)
  * netWorthAtPlanEnd [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthatdate])
  * netWorthAtRetirement [NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate]](#naviplan.planobjectmodel.util.ioptionalfield[naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthatdate])

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate `object`
  * assets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IAssets](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iassets)
  * assetsFundingRetirement [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssets](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iretirementassets)
  * clientNetWorth [NaviPlan.Util.Currency](#naviplan.util.currency)
  * coClientNetWorth [NaviPlan.Util.Currency](#naviplan.util.currency)
  * communityPropertyNetWorth [NaviPlan.Util.Currency](#naviplan.util.currency)
  * jointNetWorth [NaviPlan.Util.Currency](#naviplan.util.currency)
  * liabilities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.ILiabilities](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iliabilities)
  * totalNetWorth [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory `object`
  * description `string`
  * itemized `array`
    * items [NaviPlan.PlanObjectModel.Util.IKeyedValueDescriptionPair[NaviPlan.Util.NaviplanItemIdentifier,NaviPlan.Util.Currency]](#naviplan.planobjectmodel.util.ikeyedvaluedescriptionpair[naviplan.util.naviplanitemidentifier,naviplan.util.currency])
  * total [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories `object`
  * allAssets `array`
    * items [NaviPlan.PlanObjectModel.Util.IValueDescriptionPair[NaviPlan.Util.Currency]](#naviplan.planobjectmodel.util.ivaluedescriptionpair[naviplan.util.currency])
  * nonQualifiedAnnuities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * nonQualifiedAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * qualifiedAnnuities [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * qualifiedAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)
  * totalAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthCategory](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthcategory)

### NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssets
* NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssets `object`
  * allAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iretirementassetcategories)
  * clientAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iretirementassetcategories)
  * coClientAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iretirementassetcategories)
  * communityPropertyAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iretirementassetcategories)
  * jointAssets [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.IRetirementAssetCategories](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.iretirementassetcategories)
  * withdrawalRate [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.Util.AssetAllocation.IPeriodRateOfReturnDetails
* NaviPlan.PlanObjectModel.Util.AssetAllocation.IPeriodRateOfReturnDetails `object`
  * breakdown [NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnBreakdown](#naviplan.planobjectmodel.util.assetallocation.irateofreturnbreakdown)
  * standardDeviation [NaviPlan.Util.Percent](#naviplan.util.percent)
  * total [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnBreakdown
* NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnBreakdown `object`
  * capitalGain [NaviPlan.Util.Percent](#naviplan.util.percent)
  * deferredGrowth [NaviPlan.Util.Percent](#naviplan.util.percent)
  * dividend [NaviPlan.Util.Percent](#naviplan.util.percent)
  * interest [NaviPlan.Util.Percent](#naviplan.util.percent)
  * taxFree [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnDetails
* NaviPlan.PlanObjectModel.Util.AssetAllocation.IRateOfReturnDetails `object`
  * preRetirement [NaviPlan.PlanObjectModel.Util.AssetAllocation.IPeriodRateOfReturnDetails](#naviplan.planobjectmodel.util.assetallocation.iperiodrateofreturndetails)
  * retirement [NaviPlan.PlanObjectModel.Util.AssetAllocation.IPeriodRateOfReturnDetails](#naviplan.planobjectmodel.util.assetallocation.iperiodrateofreturndetails)

### NaviPlan.PlanObjectModel.Util.AssetAllocation.IReturnIncomeReinvestedDetails
* NaviPlan.PlanObjectModel.Util.AssetAllocation.IReturnIncomeReinvestedDetails `object`
  * duringPreRetirementPeriod [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)
  * duringRetirementPeriod [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)

### NaviPlan.PlanObjectModel.Util.Demographics.IAddress
* NaviPlan.PlanObjectModel.Util.Demographics.IAddress `object`
  * city `string`
  * combinedCityStateProvince `string`
  * country `string`
  * stateOrProvince `string`
  * stateOrProvinceAbbrev `string`
  * street1 `string`
  * street2 `string`
  * zipOrPostalCode `string`

### NaviPlan.PlanObjectModel.Util.Demographics.IBusinessPhoneNumbers
* NaviPlan.PlanObjectModel.Util.Demographics.IBusinessPhoneNumbers `object`
  * business `string`
  * fax `string`

### NaviPlan.PlanObjectModel.Util.Demographics.IPersonName
* NaviPlan.PlanObjectModel.Util.Demographics.IPersonName `object`
  * firstName `string`
  * formal `string`
  * full `string`
  * lastName `string`
  * middle `string`
  * title `string`

### NaviPlan.PlanObjectModel.Util.Demographics.IPhoneNumbers
* NaviPlan.PlanObjectModel.Util.Demographics.IPhoneNumbers `object`
  * additionalNumbers [NaviPlan.PlanObjectModel.Util.Demographics.IBusinessPhoneNumbers](#naviplan.planobjectmodel.util.demographics.ibusinessphonenumbers)
  * business `string`
  * cell `string`
  * fax `string`
  * home `string`
  * pager `string`

### NaviPlan.PlanObjectModel.Util.IAssetId
* NaviPlan.PlanObjectModel.Util.IAssetId `object`
  * rawId `integer`

### NaviPlan.PlanObjectModel.Util.IKeyedValueDescriptionPair[NaviPlan.Util.NaviplanItemIdentifier,NaviPlan.Util.Currency]
* NaviPlan.PlanObjectModel.Util.IKeyedValueDescriptionPair[NaviPlan.Util.NaviplanItemIdentifier,NaviPlan.Util.Currency] `object`
  * description `string`
  * key [NaviPlan.Util.NaviplanItemIdentifier](#naviplan.util.naviplanitemidentifier)
  * value [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.PlanObjectModel.ScenarioPropertiesData.NetWorthData.INetWorthAtDate](#naviplan.planobjectmodel.scenariopropertiesdata.networthdata.inetworthatdate)

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Benefit[NaviPlan.Util.CurrencyWithGrowth]]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Benefit[NaviPlan.Util.CurrencyWithGrowth]] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.Util.Benefit[NaviPlan.Util.CurrencyWithGrowth]](#naviplan.util.benefit[naviplan.util.currencywithgrowth])

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Currency]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Currency] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Date]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Date] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.DescriptiveBoolean]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.DescriptiveBoolean] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.Util.DescriptiveBoolean](#naviplan.util.descriptiveboolean)

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.GoalCoveragePercent]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.GoalCoveragePercent] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.Util.GoalCoveragePercent](#naviplan.util.goalcoveragepercent)

### NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Year]
* NaviPlan.PlanObjectModel.Util.IOptionalField[NaviPlan.Util.Year] `object`
  * enabled `boolean`
  * populated `boolean`
  * value [NaviPlan.Util.Year](#naviplan.util.year)

### NaviPlan.PlanObjectModel.Util.IValueDescriptionPair[NaviPlan.Util.Currency]
* NaviPlan.PlanObjectModel.Util.IValueDescriptionPair[NaviPlan.Util.Currency] `object`
  * description `string`
  * value [NaviPlan.Util.Currency](#naviplan.util.currency)

### NaviPlan.Util.Benefit[NaviPlan.Util.CurrencyWithGrowth]
* NaviPlan.Util.Benefit[NaviPlan.Util.CurrencyWithGrowth] `object`
  * benefitType `string` (values: DeathBenefit, MonthlyBenefit, DailyBenefit, MaximumBenefit, WeeklyBenefit, AnnualBenefit, LumpSum)
  * formattedBenefitType `string`
  * value [NaviPlan.Util.CurrencyWithGrowth](#naviplan.util.currencywithgrowth)

### NaviPlan.Util.Currency
* NaviPlan.Util.Currency `object`
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * raw `number`

### NaviPlan.Util.CurrencyWithDate
* NaviPlan.Util.CurrencyWithDate `object`
  * date [NaviPlan.Util.Date](#naviplan.util.date)
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * raw `number`

### NaviPlan.Util.CurrencyWithGrowth
* NaviPlan.Util.CurrencyWithGrowth `object`
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * growth [NaviPlan.Util.GrowthRateValues](#naviplan.util.growthratevalues)
  * raw `number`

### NaviPlan.Util.Date
* NaviPlan.Util.Date `object`
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

### NaviPlan.Util.DescriptiveBoolean
* NaviPlan.Util.DescriptiveBoolean `object`
  * rawValue `boolean`
  * valueAsYesNo `string`

### NaviPlan.Util.FormattedDateRange
* NaviPlan.Util.FormattedDateRange `object`
  * endDate [NaviPlan.Util.Date](#naviplan.util.date)
  * formattedValue `string`
  * startDate [NaviPlan.Util.Date](#naviplan.util.date)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.Frequency] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: Annual, SemiAnnual, Quarterly, Bimonthly, Monthly, TwiceMonthly, BiWeekly, Weekly, Daily, Continuously, Onetime, EveryXYears)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.SavingsStrategyType]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.PortfolioAssetData.SavingsStrategyType] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: PreTax, PostTax, Employer, Owner, Mandatory)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.SEPPDistributionMethod]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.SEPPDistributionMethod] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: RequiredMinDistribution, Amortization, Annuitization)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.SEPPLifeExpectancyTable]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.AssetData.SEPPLifeExpectancyTable] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: NOT_APPLICABLE_UPPER_CASE, SingleLifeExpectancy, NonSingleLifeExpectancy)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.LiabilityType]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.LiabilityType] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: Personal, Business, CreditCard, Mortgage, Vehicle, PolicyLoan)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.PayOffOptionsType]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.PlanPropertiesData.LiabilityData.PayOffOptionsType] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: TransferToSurvivor, PayOffAtFirstDeath, PayOffAtOwnerDeath, InsuredForLife)

### NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.Gender]
* NaviPlan.Util.FormattedEnumType[NaviPlan.PlanObjectModel.ScenarioPropertiesData.ClientData.Gender] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: Male, Female)

### NaviPlan.Util.FormattedEnumType[NaviPlan.Util.PaymentType]
* NaviPlan.Util.FormattedEnumType[NaviPlan.Util.PaymentType] `object`
  * formatted `string`
  * formattedAbbrv `string`
  * value `string` (values: InterestOnly, PrincipalAndInterest, SetPayment, LastPeriodPayment)

### NaviPlan.Util.FormattedLifestyleType
* NaviPlan.Util.FormattedLifestyleType `object`
  * formatted `string`
  * value `string` (values: Undefined, PersonalUse, ListedPersonal, PrimaryResidence, SecondaryResidence, BusinessInterest, Automobile)

### NaviPlan.Util.FormattedMaritalOrTaxFilingStatus
* NaviPlan.Util.FormattedMaritalOrTaxFilingStatus `object`
  * formatted `string`
  * value `string` (values: Undefined, Single, HeadOfHousehold, MarriedFilingJointly, MarriedFilingSeparately, SingleParent, Married, CommonLaw, Partner, Divorced, Widowed, Separated)

### NaviPlan.Util.GoalCoveragePercent
* NaviPlan.Util.GoalCoveragePercent `object`
  * formatted `string`
  * formattedRaw `number`
  * raw `number`
  * rawCappedAt100 `number`

### NaviPlan.Util.GoalId
* NaviPlan.Util.GoalId `object`
  * id `integer`

### NaviPlan.Util.GrowthRateValues
* NaviPlan.Util.GrowthRateValues `object`
  * additionalGrowthPercent [NaviPlan.Util.Percent](#naviplan.util.percent)
  * isInflationAdjusted `boolean`
  * totalGrowth [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.Util.NaviplanItemIdentifier
* NaviPlan.Util.NaviplanItemIdentifier `object`

### NaviPlan.Util.Percent
* NaviPlan.Util.Percent `object`
  * formattedDoubleDecimal `string`
  * formattedNoDecimal `string`
  * formattedSingleDecimal `string`
  * raw `number`
  * rawCappedAt100 `number`

### NaviPlan.Util.PercentOr[NaviPlan.Util.Currency]
* NaviPlan.Util.PercentOr[NaviPlan.Util.Currency] `object`
  * currency [NaviPlan.Util.Currency](#naviplan.util.currency)
  * formattedDecimal `string`
  * formattedNoDecimal `string`
  * formattedPercentDoubleDecimalCurrenyNoDecimal `string`
  * isCurrency `boolean`
  * isNonZero `boolean`
  * isPercent `boolean`
  * percent [NaviPlan.Util.Percent](#naviplan.util.percent)

### NaviPlan.Util.Year
* NaviPlan.Util.Year `object`
  * formatted `string`
  * raw `integer`

### System.Object
* System.Object `object`

### System.Version
* System.Version `object`
  * build `integer`
  * major `integer`
  * majorRevision `integer`
  * minor `integer`
  * minorRevision `integer`
  * revision `integer`


