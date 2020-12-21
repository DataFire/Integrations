# @datafire/azure_monitor_diagnosticssettings_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_diagnosticssettings_api
```
```js
let azure_monitor_diagnosticssettings_api = require('@datafire/azure_monitor_diagnosticssettings_api').create({
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

### DiagnosticSettings_List
Gets the active diagnostic settings list for the specified resource.


```js
azure_monitor_diagnosticssettings_api.DiagnosticSettings_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiagnosticSettingsResourceCollection](#diagnosticsettingsresourcecollection)

### DiagnosticSettings_Delete
Deletes existing diagnostic settings for the specified resource.


```js
azure_monitor_diagnosticssettings_api.DiagnosticSettings_Delete({
  "resourceUri": "",
  "api-version": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.
  * name **required** `string`: The name of the diagnostic setting.

#### Output
*Output schema unknown*

### DiagnosticSettings_Get
Gets the active diagnostic settings for the specified resource.


```js
azure_monitor_diagnosticssettings_api.DiagnosticSettings_Get({
  "resourceUri": "",
  "api-version": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.
  * name **required** `string`: The name of the diagnostic setting.

#### Output
* output [DiagnosticSettingsResource](#diagnosticsettingsresource)

### DiagnosticSettings_CreateOrUpdate
Creates or updates diagnostic settings for the specified resource.


```js
azure_monitor_diagnosticssettings_api.DiagnosticSettings_CreateOrUpdate({
  "resourceUri": "",
  "api-version": "",
  "parameters": {},
  "name": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [DiagnosticSettingsResource](#diagnosticsettingsresource)
  * name **required** `string`: The name of the diagnostic setting.

#### Output
* output [DiagnosticSettingsResource](#diagnosticsettingsresource)



## Definitions

### DiagnosticSettings
* DiagnosticSettings `object`: The diagnostic settings.
  * eventHubAuthorizationRuleId `string`: The resource Id for the event hub authorization rule.
  * eventHubName `string`: The name of the event hub. If none is specified, the default event hub will be selected.
  * logAnalyticsDestinationType `string`: A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: <normalized service identity>_<normalized category name>. Possible values are: Dedicated and null (null is default.)
  * logs `array`: The list of logs settings.
    * items [LogSettings](#logsettings)
  * metrics `array`: The list of metric settings.
    * items [MetricSettings](#metricsettings)
  * serviceBusRuleId `string`: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
  * storageAccountId `string`: The resource ID of the storage account to which you would like to send Diagnostic Logs.
  * workspaceId `string`: The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

### DiagnosticSettingsResource
* DiagnosticSettingsResource `object`: The diagnostic setting resource.
  * properties [DiagnosticSettings](#diagnosticsettings)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### DiagnosticSettingsResourceCollection
* DiagnosticSettingsResourceCollection `object`: Represents a collection of alert rule resources.
  * value `array`: The collection of diagnostic settings resources;.
    * items [DiagnosticSettingsResource](#diagnosticsettingsresource)

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
  * category `string`: Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
  * enabled **required** `boolean`: a value indicating whether this category is enabled.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)
  * timeGrain `string`: the timegrain of the metric in ISO8601 format.

### ProxyOnlyResource
* ProxyOnlyResource `object`: A proxy only azure resource object
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### RetentionPolicy
* RetentionPolicy `object`: Specifies the retention policy for the log.
  * days **required** `integer`: the number of days for the retention in days. A value of 0 will retain the events indefinitely.
  * enabled **required** `boolean`: a value indicating whether the retention policy is enabled.


