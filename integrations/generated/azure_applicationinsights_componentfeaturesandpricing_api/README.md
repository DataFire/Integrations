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

azure_applicationinsights_componentfeaturesandpricing_api.ComponentCurrentBillingFeatures_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for selecting pricing plans and options.

## Actions

### ComponentCurrentBillingFeatures_Get
Returns current billing features for an Application Insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentCurrentBillingFeatures_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponentBillingFeatures](#applicationinsightscomponentbillingfeatures)

### ComponentCurrentBillingFeatures_Update
Update current billing features for an Application Insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentCurrentBillingFeatures_Update({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "BillingFeaturesProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * BillingFeaturesProperties **required** [ApplicationInsightsComponentBillingFeatures](#applicationinsightscomponentbillingfeatures)

#### Output
* output [ApplicationInsightsComponentBillingFeatures](#applicationinsightscomponentbillingfeatures)

### ComponentFeatureCapabilities_Get
Returns feature capabilites of the application insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentFeatureCapabilities_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponentFeatureCapabilities](#applicationinsightscomponentfeaturecapabilities)

### ComponentAvailableFeatures_Get
Returns all available features of the application insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentAvailableFeatures_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponentAvailableFeatures](#applicationinsightscomponentavailablefeatures)

### ComponentQuotaStatus_Get
Returns daily data volume cap (quota) status for an Application Insights component.


```js
azure_applicationinsights_componentfeaturesandpricing_api.ComponentQuotaStatus_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [ApplicationInsightsComponentQuotaStatus](#applicationinsightscomponentquotastatus)



## Definitions

### ApplicationInsightsComponentAvailableFeatures
* ApplicationInsightsComponentAvailableFeatures `object`: An Application Insights component available features.
  * Result `array`: A list of Application Insigths component feature.
    * items [ApplicationInsightsComponentFeature](#applicationinsightscomponentfeature)

### ApplicationInsightsComponentBillingFeatures
* ApplicationInsightsComponentBillingFeatures `object`: An Application Insights component billing features
  * CurrentBillingFeatures `array`: Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
    * items `string`
  * DataVolumeCap [ApplicationInsightsComponentDataVolumeCap](#applicationinsightscomponentdatavolumecap)

### ApplicationInsightsComponentDataVolumeCap
* ApplicationInsightsComponentDataVolumeCap `object`: An Application Insights component daily data volumne cap
  * Cap `number`: Daily data volume cap in GB.
  * MaxHistoryCap `number`: Maximum daily data volume cap that the user can set for this component.
  * ResetTime `integer`: Daily data volume cap UTC reset hour.
  * StopSendNotificationWhenHitCap `boolean`: Do not send a notification email when the daily data volume cap is met.
  * StopSendNotificationWhenHitThreshold `boolean`: Reserved, not used for now.
  * WarningThreshold `integer`: Reserved, not used for now.

### ApplicationInsightsComponentFeature
* ApplicationInsightsComponentFeature `object`: An Application Insights component daily data volume cap status
  * Capabilities `array`: A list of Application Insigths component feature capability.
    * items [ApplicationInsightsComponentFeatureCapability](#applicationinsightscomponentfeaturecapability)
  * FeatureName `string`: The pricing feature name.
  * IsHidden `boolean`: Reserved, not used now.
  * IsMainFeature `boolean`: Whether can apply addon feature on to it.
  * MeterId `string`: The meter id used for the feature.
  * MeterRateFrequency `string`: The meter meter rate for the feature's meter.
  * ResouceId `string`: Reserved, not used now.
  * SupportedAddonFeatures `string`: The add on features on main feature.
  * Title `string`: Desplay name of the feature.

### ApplicationInsightsComponentFeatureCapabilities
* ApplicationInsightsComponentFeatureCapabilities `object`: An Application Insights component feature capabilities
  * AnalyticsIntegration `boolean`: Reserved, not used now.
  * ApiAccessLevel `string`: Reserved, not used now.
  * ApplicationMap `boolean`: Reserved, not used now.
  * BurstThrottlePolicy `string`: Reserved, not used now.
  * DailyCap `number`: Daily data volume cap in GB.
  * DailyCapResetTime `number`: Daily data volume cap UTC reset hour.
  * LiveStreamMetrics `boolean`: Reserved, not used now.
  * MetadataClass `string`: Reserved, not used now.
  * MultipleStepWebTest `boolean`: Whether allow to use multiple steps web test feature.
  * OpenSchema `boolean`: Reserved, not used now.
  * PowerBIIntegration `boolean`: Reserved, not used now.
  * ProactiveDetection `boolean`: Reserved, not used now.
  * SupportExportData `boolean`: Whether allow to use continuous export feature.
  * ThrottleRate `number`: Reserved, not used now.
  * TrackingType `string`: The applciation insights component used tracking type.
  * WorkItemIntegration `boolean`: Whether allow to use work item integration feature.

### ApplicationInsightsComponentFeatureCapability
* ApplicationInsightsComponentFeatureCapability `object`: An Application Insights component feature capability
  * Description `string`: The description of the capability.
  * MeterId `string`: The meter used for the capability.
  * MeterRateFrequency `string`: The meter rate of the meter.
  * Name `string`: The name of the capability.
  * Unit `string`: The unit of the capability.
  * Value `string`: The vaule of the capability.

### ApplicationInsightsComponentQuotaStatus
* ApplicationInsightsComponentQuotaStatus `object`: An Application Insights component daily data volume cap status
  * AppId `string`: The Application ID for the Application Insights component.
  * ExpirationTime `string`: Date and time when the daily data volume cap will be reset, and data ingestion will resume.
  * ShouldBeThrottled `boolean`: The daily data volume cap is met, and data ingestion will be stopped.


