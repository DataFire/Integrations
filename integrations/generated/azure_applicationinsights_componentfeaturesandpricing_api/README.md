# @datafire/azure_applicationinsights_componentfeaturesandpricing_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_componentfeaturesandpricing_api
```
```js
let azure_applicationinsights_componentfeaturesandpricing_api = require('@datafire/azure_applicationinsights_componentfeaturesandpricing_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for selecting pricing plans and options.

## Actions

### ComponentCurrentPricingPlan_Get
Returns the current pricing plan setting for an Application Insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentCurrentPricingPlan_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponentPricingPlan](#applicationinsightscomponentpricingplan)

### ComponentCurrentPricingPlan_Update
Update current pricing plan for an Application Insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentCurrentPricingPlan_Update({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "PricingPlanProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * PricingPlanProperties **required** [ApplicationInsightsComponentPricingPlan](#applicationinsightscomponentpricingplan)

#### Output
* output [ApplicationInsightsComponentPricingPlan](#applicationinsightscomponentpricingplan)

### ComponentCurrentPricingPlan_CreateAndUpdate
Replace current pricing plan for an Application Insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentCurrentPricingPlan_CreateAndUpdate({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "PricingPlanProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * PricingPlanProperties **required** [ApplicationInsightsComponentPricingPlan](#applicationinsightscomponentpricingplan)

#### Output
* output [ApplicationInsightsComponentPricingPlan](#applicationinsightscomponentpricingplan)



## Definitions

### ApplicationInsightsComponentPricingPlan
* ApplicationInsightsComponentPricingPlan `object`: An Application Insights component pricing plan
  * properties [PricingPlanProperties](#pricingplanproperties)
  * id `string`: Azure resource Id.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.

### PricingPlanProperties
* PricingPlanProperties `object`: An Application Insights component daily data volume cap
  * cap `number`: Daily data volume cap in GB.
  * maxHistoryCap `number`: Maximum daily data volume cap that the user can set for this component.
  * planType `string`: Pricing Plan Type Name.
  * resetHour `integer`: Daily data volume cap UTC reset hour.
  * stopSendNotificationWhenHitCap `boolean`: Do not send a notification email when the daily data volume cap is met.
  * stopSendNotificationWhenHitThreshold `boolean`: Reserved, not used for now.
  * warningThreshold `integer`: Reserved, not used for now.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: Azure resource Id.
  * name `string`: Azure resource name.
  * type `string`: Azure resource type.


