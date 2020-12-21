# @datafire/azure_monitor_subscriptiondiagnosticssettings_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_subscriptiondiagnosticssettings_api
```
```js
let azure_monitor_subscriptiondiagnosticssettings_api = require('@datafire/azure_monitor_subscriptiondiagnosticssettings_api').create({
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



## Actions

### SubscriptionDiagnosticSettings_List
Gets the active subscription diagnostic settings list for the specified subscriptionId.


```js
azure_monitor_subscriptiondiagnosticssettings_api.SubscriptionDiagnosticSettings_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SubscriptionDiagnosticSettingsResourceCollection](#subscriptiondiagnosticsettingsresourcecollection)

### SubscriptionDiagnosticSettings_Delete
Deletes existing subscription diagnostic settings for the specified resource.


```js
azure_monitor_subscriptiondiagnosticssettings_api.SubscriptionDiagnosticSettings_Delete({
  "subscriptionId": "",
  "api-version": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: Client Api Version.
  * name **required** `string`: The name of the diagnostic setting.

#### Output
*Output schema unknown*

### SubscriptionDiagnosticSettings_Get
Gets the active subscription diagnostic settings for the specified resource.


```js
azure_monitor_subscriptiondiagnosticssettings_api.SubscriptionDiagnosticSettings_Get({
  "subscriptionId": "",
  "api-version": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: Client Api Version.
  * name **required** `string`: The name of the diagnostic setting.

#### Output
* output [SubscriptionDiagnosticSettingsResource](#subscriptiondiagnosticsettingsresource)

### SubscriptionDiagnosticSettings_CreateOrUpdate
Creates or updates subscription diagnostic settings for the specified resource.


```js
azure_monitor_subscriptiondiagnosticssettings_api.SubscriptionDiagnosticSettings_CreateOrUpdate({
  "subscriptionId": "",
  "api-version": "",
  "parameters": {},
  "name": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [SubscriptionDiagnosticSettingsResource](#subscriptiondiagnosticsettingsresource)
  * name **required** `string`: The name of the diagnostic setting.

#### Output
* output [SubscriptionDiagnosticSettingsResource](#subscriptiondiagnosticsettingsresource)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### SubscriptionDiagnosticSettings
* SubscriptionDiagnosticSettings `object`: The subscription diagnostic settings.
  * eventHubAuthorizationRuleId `string`: The resource Id for the event hub authorization rule.
  * eventHubName `string`: The name of the event hub. If none is specified, the default event hub will be selected.
  * logs `array`: The list of logs settings.
    * items [SubscriptionLogSettings](#subscriptionlogsettings)
  * serviceBusRuleId `string`: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
  * storageAccountId `string`: The resource ID of the storage account to which you would like to send Diagnostic Logs.
  * workspaceId `string`: The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

### SubscriptionDiagnosticSettingsResource
* SubscriptionDiagnosticSettingsResource `object`: The subscription diagnostic setting resource.
  * properties [SubscriptionDiagnosticSettings](#subscriptiondiagnosticsettings)
  * id `string`: Azure resource Id
  * location `string`: Location of the resource
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### SubscriptionDiagnosticSettingsResourceCollection
* SubscriptionDiagnosticSettingsResourceCollection `object`: Represents a collection of subscription diagnostic settings resources.
  * value `array`: The collection of subscription diagnostic settings resources.
    * items [SubscriptionDiagnosticSettingsResource](#subscriptiondiagnosticsettingsresource)

### SubscriptionLogSettings
* SubscriptionLogSettings `object`: Part of Subscription diagnostic setting. Specifies the settings for a particular log.
  * category `string`: Name of a Subscription Diagnostic Log category for a resource type this setting is applied to.
  * enabled **required** `boolean`: a value indicating whether this log is enabled.

### SubscriptionProxyOnlyResource
* SubscriptionProxyOnlyResource `object`: A proxy only azure resource object
  * id `string`: Azure resource Id
  * location `string`: Location of the resource
  * name `string`: Azure resource name
  * type `string`: Azure resource type


