# @datafire/azure_applicationinsights_componentproactivedetection_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_componentproactivedetection_api
```
```js
let azure_applicationinsights_componentproactivedetection_api = require('@datafire/azure_applicationinsights_componentproactivedetection_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_applicationinsights_componentproactivedetection_api.ProactiveDetectionConfigurations_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for ProactiveDetection configurations of a component.

## Actions

### ProactiveDetectionConfigurations_List
Gets a list of ProactiveDetection configurations of an Application Insights component.


```js
azure_applicationinsights_componentproactivedetection_api.ProactiveDetectionConfigurations_List({
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
* output [ApplicationInsightsComponentProactiveDetectionConfigurationListResult](#applicationinsightscomponentproactivedetectionconfigurationlistresult)

### ProactiveDetectionConfigurations_Get
Get the ProactiveDetection configuration for this configuration id.


```js
azure_applicationinsights_componentproactivedetection_api.ProactiveDetectionConfigurations_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "ConfigurationId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * ConfigurationId **required** `string`: The ProactiveDetection configuration ID. This is unique within a Application Insights component.

#### Output
* output [ApplicationInsightsComponentProactiveDetectionConfiguration](#applicationinsightscomponentproactivedetectionconfiguration)

### ProactiveDetectionConfigurations_Update
Update the ProactiveDetection configuration for this configuration id.


```js
azure_applicationinsights_componentproactivedetection_api.ProactiveDetectionConfigurations_Update({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "ConfigurationId": "",
  "ProactiveDetectionProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * ConfigurationId **required** `string`: The ProactiveDetection configuration ID. This is unique within a Application Insights component.
  * ProactiveDetectionProperties **required** [ApplicationInsightsComponentProactiveDetectionConfiguration](#applicationinsightscomponentproactivedetectionconfiguration)

#### Output
* output [ApplicationInsightsComponentProactiveDetectionConfiguration](#applicationinsightscomponentproactivedetectionconfiguration)



## Definitions

### ApplicationInsightsComponentProactiveDetectionConfiguration
* ApplicationInsightsComponentProactiveDetectionConfiguration `object`: Properties that define a ProactiveDetection configuration.
  * CustomEmails `array`: Custom email addresses for this rule notifications
    * items `string`
  * Enabled `boolean`: A flag that indicates whether this rule is enabled by the user
  * LastUpdatedTime `string`: The last time this rule was updated
  * Name `string`: The rule name
  * RuleDefinitions `object`: Static definitions of the ProactiveDetection configuration rule (same values for all components).
    * Description `string`: The rule description
    * DisplayName `string`: The rule name as it is displayed in UI
    * HelpUrl `string`: URL which displays aditional info about the proactive detection rule
    * IsEnabledByDefault `boolean`: A flag indicating whether the rule is enabled by default
    * IsHidden `boolean`: A flag indicating whether the rule is hidden (from the UI)
    * IsInPreview `boolean`: A flag indicating whether the rule is in preview
    * Name `string`: The rule name
    * SupportsEmailNotifications `boolean`: A flag indicating whether email notifications are supported for detections for this rule
  * SendEmailsToSubscriptionOwners `boolean`: A flag that indicated whether notifications on this rule should be sent to subscription owners

### ApplicationInsightsComponentProactiveDetectionConfigurationListResult
* ApplicationInsightsComponentProactiveDetectionConfigurationListResult `array`: A list of ProactiveDetection configurations.
  * items [ApplicationInsightsComponentProactiveDetectionConfiguration](#applicationinsightscomponentproactivedetectionconfiguration)


