# @datafire/azure_monitor_diagnosticssettingscategories_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_diagnosticssettingscategories_api
```
```js
let azure_monitor_diagnosticssettingscategories_api = require('@datafire/azure_monitor_diagnosticssettingscategories_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_monitor_diagnosticssettingscategories_api.DiagnosticSettingsCategory_List({
  "resourceUri": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### DiagnosticSettingsCategory_List
Lists the diagnostic settings categories for the specified resource.


```js
azure_monitor_diagnosticssettingscategories_api.DiagnosticSettingsCategory_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiagnosticSettingsCategoryResourceCollection](#diagnosticsettingscategoryresourcecollection)

### DiagnosticSettingsCategory_Get
Gets the diagnostic settings category for the specified resource.


```js
azure_monitor_diagnosticssettingscategories_api.DiagnosticSettingsCategory_Get({
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
* output [DiagnosticSettingsCategoryResource](#diagnosticsettingscategoryresource)



## Definitions

### DiagnosticSettingsCategory
* DiagnosticSettingsCategory `object`: The diagnostic settings Category.
  * categoryType `string` (values: Metrics, Logs): The type of the diagnostic settings category.

### DiagnosticSettingsCategoryResource
* DiagnosticSettingsCategoryResource `object`: The diagnostic settings category resource.
  * properties [DiagnosticSettingsCategory](#diagnosticsettingscategory)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### DiagnosticSettingsCategoryResourceCollection
* DiagnosticSettingsCategoryResourceCollection `object`: Represents a collection of diagnostic setting category resources.
  * value `array`: The collection of diagnostic settings category resources.
    * items [DiagnosticSettingsCategoryResource](#diagnosticsettingscategoryresource)

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### ProxyOnlyResource
* ProxyOnlyResource `object`: A proxy only azure resource object
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type


