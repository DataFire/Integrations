# @datafire/azure_monitor_guestdiagnosticsettings_api

Client library for Guest Diagnostic Settings

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_guestdiagnosticsettings_api
```
```js
let azure_monitor_guestdiagnosticsettings_api = require('@datafire/azure_monitor_guestdiagnosticsettings_api').create({
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

API to Add/Remove/List Guest Diagnostics Configuration to Azure Resources

## Actions

### guestDiagnosticsSettings_List
Get a list of all guest diagnostic settings in a subscription.


```js
azure_monitor_guestdiagnosticsettings_api.guestDiagnosticsSettings_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestDiagnosticSettingsList](#guestdiagnosticsettingslist)

### guestDiagnosticsSettings_ListByResourceGroup
Get a list of all guest diagnostic settings in a resource group.


```js
azure_monitor_guestdiagnosticsettings_api.guestDiagnosticsSettings_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestDiagnosticSettingsList](#guestdiagnosticsettingslist)

### guestDiagnosticsSettings_Delete
Delete guest diagnostics settings.


```js
azure_monitor_guestdiagnosticsettings_api.guestDiagnosticsSettings_Delete({
  "resourceGroupName": "",
  "diagnosticSettingsName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * diagnosticSettingsName **required** `string`: The name of the diagnostic setting.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### guestDiagnosticsSettings_Get
Gets guest diagnostics settings.


```js
azure_monitor_guestdiagnosticsettings_api.guestDiagnosticsSettings_Get({
  "resourceGroupName": "",
  "diagnosticSettingsName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * diagnosticSettingsName **required** `string`: The name of the diagnostic setting.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestDiagnosticSettingsResource](#guestdiagnosticsettingsresource)

### guestDiagnosticsSettings_Update
Updates guest diagnostics settings.


```js
azure_monitor_guestdiagnosticsettings_api.guestDiagnosticsSettings_Update({
  "resourceGroupName": "",
  "diagnosticSettingsName": "",
  "api-version": "",
  "subscriptionId": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * diagnosticSettingsName **required** `string`: The name of the diagnostic setting.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * parameters **required** [GuestDiagnosticSettingsPatchResource](#guestdiagnosticsettingspatchresource)

#### Output
* output [GuestDiagnosticSettingsResource](#guestdiagnosticsettingsresource)

### guestDiagnosticsSettings_CreateOrUpdate
Creates or updates guest diagnostics settings.


```js
azure_monitor_guestdiagnosticsettings_api.guestDiagnosticsSettings_CreateOrUpdate({
  "resourceGroupName": "",
  "diagnosticSettingsName": "",
  "api-version": "",
  "subscriptionId": "",
  "diagnosticSettings": {
    "properties": null
  }
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * diagnosticSettingsName **required** `string`: The name of the diagnostic setting.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription Id.
  * diagnosticSettings **required** [GuestDiagnosticSettingsResource](#guestdiagnosticsettingsresource)

#### Output
* output [GuestDiagnosticSettingsResource](#guestdiagnosticsettingsresource)



## Definitions

### DataSource
* DataSource `object`: Data source object contains configuration to collect telemetry and one or more sinks to send that telemetry data to
  * configuration **required** [DataSourceConfiguration](#datasourceconfiguration)
  * kind **required** `string` (values: PerformanceCounter, ETWProviders, WindowsEventLogs): Datasource kind
  * sinks **required** `array`
    * items [SinkConfiguration](#sinkconfiguration)

### DataSourceConfiguration
* DataSourceConfiguration `object`
  * eventLogs `array`: Windows event logs configuration.
    * items [EventLogConfiguration](#eventlogconfiguration)
  * perfCounters `array`: Performance counter configuration
    * items [PerformanceCounterConfiguration](#performancecounterconfiguration)
  * providers `array`: ETW providers configuration
    * items [EtwProviderConfiguration](#etwproviderconfiguration)

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### EtwEventConfiguration
* EtwEventConfiguration `object`
  * filter `string`
  * id **required** `integer`
  * name **required** `string`

### EtwProviderConfiguration
* EtwProviderConfiguration `object`
  * events **required** `array`
    * items [EtwEventConfiguration](#etweventconfiguration)
  * id **required** `string`

### EventLogConfiguration
* EventLogConfiguration `object`
  * filter `string`
  * logName **required** `string`

### GuestDiagnosticSettings
* GuestDiagnosticSettings `object`: Virtual machine diagnostic settings
  * dataSources `array`: the array of data source object which are configured to collect and send data
    * items [DataSource](#datasource)
  * osType `string` (values: Windows, Linux): Operating system type for the configuration
  * proxySetting `string`

### GuestDiagnosticSettingsList
* GuestDiagnosticSettingsList `object`: A list of guest diagnostic settings.
  * nextLink `string`: Provides the link to retrieve the next set of elements.
  * value `array`: The list of guest diagnostic settings.
    * items [GuestDiagnosticSettingsResource](#guestdiagnosticsettingsresource)

### GuestDiagnosticSettingsPatchResource
* GuestDiagnosticSettingsPatchResource `object`: An diagnostic settings object for the body of patch operations.
  * properties [GuestDiagnosticSettings](#guestdiagnosticsettings)

### GuestDiagnosticSettingsResource
* GuestDiagnosticSettingsResource `object`: Virtual machine guest diagnostics settings resource.
  * properties **required** [GuestDiagnosticSettings](#guestdiagnosticsettings)
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### PerformanceCounterConfiguration
* PerformanceCounterConfiguration `object`
  * instance `string`
  * name **required** `string`
  * samplingPeriod **required** `string`

### Resource
* Resource `object`: An azure resource object
  * id `string`: Azure resource Id
  * location **required** `string`: Resource location
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### SinkConfiguration
* SinkConfiguration `object`
  * kind **required** `string` (values: EventHub, ApplicationInsights, LogAnalytics)


