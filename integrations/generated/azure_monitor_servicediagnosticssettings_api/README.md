# @datafire/azure_monitor_servicediagnosticssettings_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_servicediagnosticssettings_api
```
```js
let azure_monitor_servicediagnosticssettings_api = require('@datafire/azure_monitor_servicediagnosticssettings_api').create({
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

### ServiceDiagnosticSettings_Get
Gets the active diagnostic settings for the specified resource. **WARNING**: This method will be deprecated in future releases.


```js
azure_monitor_servicediagnosticssettings_api.ServiceDiagnosticSettings_Get({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ServiceDiagnosticSettingsResource](#servicediagnosticsettingsresource)

### ServiceDiagnosticSettings_Update
Updates an existing ServiceDiagnosticSettingsResource. To update other fields use the CreateOrUpdate method. **WARNING**: This method will be deprecated in future releases.


```js
azure_monitor_servicediagnosticssettings_api.ServiceDiagnosticSettings_Update({
  "resourceUri": "",
  "api-version": "",
  "serviceDiagnosticSettingsResource": null
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.
  * serviceDiagnosticSettingsResource **required** [ServiceDiagnosticSettingsResourcePatch](#servicediagnosticsettingsresourcepatch)

#### Output
* output [ServiceDiagnosticSettingsResource](#servicediagnosticsettingsresource)

### ServiceDiagnosticSettings_CreateOrUpdate
Create or update new diagnostic settings for the specified resource. **WARNING**: This method will be deprecated in future releases.


```js
azure_monitor_servicediagnosticssettings_api.ServiceDiagnosticSettings_CreateOrUpdate({
  "resourceUri": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [ServiceDiagnosticSettingsResource](#servicediagnosticsettingsresource)

#### Output
* output [ServiceDiagnosticSettingsResource](#servicediagnosticsettingsresource)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LogSettings
* LogSettings `object`: Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
  * category `string`: Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
  * enabled **required** `boolean`: a value indicating whether this log is enabled.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)

### MetricSettings
* MetricSettings `object`: Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.
  * enabled **required** `boolean`: a value indicating whether this timegrain is enabled.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * timeGrain **required** `string`: the timegrain of the metric in ISO8601 format.

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### RetentionPolicy
* RetentionPolicy `object`: Specifies the retention policy for the log.
  * days **required** `integer`: the number of days for the retention in days. A value of 0 will retain the events indefinitely.
  * enabled **required** `boolean`: a value indicating whether the retention policy is enabled.

### ServiceDiagnosticSettings
* ServiceDiagnosticSettings `object`: The diagnostic settings for service.
  * eventHubAuthorizationRuleId `string`: The resource Id for the event hub namespace authorization rule.
  * logs `array`: the list of logs settings.
    * items [LogSettings](#logsettings)
  * metrics `array`: the list of metric settings.
    * items [MetricSettings](#metricsettings)
  * serviceBusRuleId `string`: The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming Diagnostic Logs. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
  * storageAccountId `string`: The resource ID of the storage account to which you would like to send Diagnostic Logs.
  * workspaceId `string`: The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

### ServiceDiagnosticSettingsResource
* ServiceDiagnosticSettingsResource `object`: Description of a service diagnostic setting
  * properties [ServiceDiagnosticSettings](#servicediagnosticsettings)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ServiceDiagnosticSettingsResourcePatch
* ServiceDiagnosticSettingsResourcePatch `object`: Service diagnostic setting resource for patch operations
  * properties [ServiceDiagnosticSettings](#servicediagnosticsettings)


