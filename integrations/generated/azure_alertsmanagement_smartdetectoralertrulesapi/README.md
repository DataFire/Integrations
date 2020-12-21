# @datafire/azure_alertsmanagement_smartdetectoralertrulesapi

Client library for Azure Alerts Management Service Resource Provider

## Installation and Usage
```bash
npm install --save @datafire/azure_alertsmanagement_smartdetectoralertrulesapi
```
```js
let azure_alertsmanagement_smartdetectoralertrulesapi = require('@datafire/azure_alertsmanagement_smartdetectoralertrulesapi').create({
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

APIs for Azure Smart Detector Alert Rules CRUD operations.

## Actions

### SmartDetectorAlertRules_List
List all the existing Smart Detector alert rules within the subscription.


```js
azure_alertsmanagement_smartdetectoralertrulesapi.SmartDetectorAlertRules_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: Client Api Version.
  * expandDetector `boolean`: Indicates if Smart Detector should be expanded.

#### Output
* output [AlertRulesList](#alertruleslist)

### SmartDetectorAlertRules_ListByResourceGroup
List all the existing Smart Detector alert rules within the subscription and resource group.


```js
azure_alertsmanagement_smartdetectoralertrulesapi.SmartDetectorAlertRules_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * expandDetector `boolean`: Indicates if Smart Detector should be expanded.

#### Output
* output [AlertRulesList](#alertruleslist)

### SmartDetectorAlertRules_Delete
Delete an existing Smart Detector alert rule.


```js
azure_alertsmanagement_smartdetectoralertrulesapi.SmartDetectorAlertRules_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "alertRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * alertRuleName **required** `string`: The name of the alert rule.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### SmartDetectorAlertRules_Get
Get a specific Smart Detector alert rule.


```js
azure_alertsmanagement_smartdetectoralertrulesapi.SmartDetectorAlertRules_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "alertRuleName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * alertRuleName **required** `string`: The name of the alert rule.
  * api-version **required** `string`: Client Api Version.
  * expandDetector `boolean`: Indicates if Smart Detector should be expanded.

#### Output
* output [AlertRule](#alertrule)

### SmartDetectorAlertRules_Patch
Patch a specific Smart Detector alert rule.


```js
azure_alertsmanagement_smartdetectoralertrulesapi.SmartDetectorAlertRules_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "alertRuleName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * alertRuleName **required** `string`: The name of the alert rule.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [AlertRulePatchObject](#alertrulepatchobject)

#### Output
* output [AlertRule](#alertrule)

### SmartDetectorAlertRules_CreateOrUpdate
Create or update a Smart Detector alert rule.


```js
azure_alertsmanagement_smartdetectoralertrulesapi.SmartDetectorAlertRules_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "alertRuleName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * alertRuleName **required** `string`: The name of the alert rule.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [AlertRule](#alertrule)

#### Output
* output [AlertRule](#alertrule)



## Definitions

### ActionGroupsInformation
* ActionGroupsInformation `object`: The Action Groups information, used by the alert rule.
  * customEmailSubject `string`: An optional custom email subject to use in email notifications.
  * customWebhookPayload `string`: An optional custom web-hook payload to use in web-hook notifications.
  * groupIds **required** `array`: The Action Group resource IDs.
    * items `string`

### AlertRule
* AlertRule `object`: The alert rule information
  * properties [AlertRuleProperties](#alertruleproperties)
  * id `string`: The resource ID.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### AlertRulePatchObject
* AlertRulePatchObject `object`: The alert rule patch information
  * id `string`: The resource ID.
  * name `string`: The resource name.
  * properties [AlertRulePatchProperties](#alertrulepatchproperties)
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### AlertRulePatchProperties
* AlertRulePatchProperties `object`: The alert rule properties.
  * actionGroups [ActionGroupsInformation](#actiongroupsinformation)
  * description `string`: The alert rule description.
  * frequency `string`: The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
  * severity `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): The alert rule severity.
  * state `string` (values: Enabled, Disabled): The alert rule state.
  * throttling [ThrottlingInformation](#throttlinginformation)

### AlertRuleProperties
* AlertRuleProperties `object`: The alert rule properties.
  * actionGroups **required** [ActionGroupsInformation](#actiongroupsinformation)
  * description `string`: The alert rule description.
  * detector **required** [Detector](#detector)
  * frequency **required** `string`: The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
  * scope **required** `array`: The alert rule resources scope.
    * items `string`
  * severity **required** `string` (values: Sev0, Sev1, Sev2, Sev3, Sev4): The alert rule severity.
  * state **required** `string` (values: Enabled, Disabled): The alert rule state.
  * throttling [ThrottlingInformation](#throttlinginformation)

### AlertRulesList
* AlertRulesList `object`: List of Smart Detector alert rules.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: List of Smart Detector alert rules.
    * items [AlertRule](#alertrule)

### AzureResource
* AzureResource `object`: An Azure resource object
  * id `string`: The resource ID.
  * location `string`: The resource location.
  * name `string`: The resource name.
  * tags `object`: The resource tags.
  * type `string`: The resource type.

### Detector
* Detector `object`: The detector information. By default this is not populated, unless it's specified in expandDetector
  * description `string`: The Smart Detector description. By default this is not populated, unless it's specified in expandDetector
  * id **required** `string`: The detector id.
  * imagePaths `array`: The Smart Detector image path. By default this is not populated, unless it's specified in expandDetector
    * items `string`
  * name `string`: The Smart Detector name. By default this is not populated, unless it's specified in expandDetector
  * parameters `object`: The detector's parameters.'
  * supportedResourceTypes `array`: The Smart Detector supported resource types. By default this is not populated, unless it's specified in expandDetector
    * items `string`

### ErrorResponse
* ErrorResponse `object`: Describe the format of an Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### ThrottlingInformation
* ThrottlingInformation `object`: Optional throttling information for the alert rule.
  * duration `string`: The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes


