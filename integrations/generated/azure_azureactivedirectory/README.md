# @datafire/azure_azureactivedirectory

Client library for azureactivedirectory

## Installation and Usage
```bash
npm install --save @datafire/azure_azureactivedirectory
```
```js
let azure_azureactivedirectory = require('@datafire/azure_azureactivedirectory').create({
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

Azure Active Directory Client.

## Actions

### DiagnosticSettings_List
Gets the active diagnostic settings list for AadIam.


```js
azure_azureactivedirectory.DiagnosticSettings_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiagnosticSettingsResourceCollection](#diagnosticsettingsresourcecollection)

### DiagnosticSettings_Delete
Deletes existing diagnostic setting for AadIam.


```js
azure_azureactivedirectory.DiagnosticSettings_Delete({
  "api-version": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * name **required** `string`: The name of the diagnostic setting.

#### Output
*Output schema unknown*

### DiagnosticSettings_Get
Gets the active diagnostic setting for AadIam.


```js
azure_azureactivedirectory.DiagnosticSettings_Get({
  "api-version": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * name **required** `string`: The name of the diagnostic setting.

#### Output
* output [DiagnosticSettingsResource](#diagnosticsettingsresource)

### DiagnosticSettings_CreateOrUpdate
Creates or updates diagnostic settings for AadIam.


```js
azure_azureactivedirectory.DiagnosticSettings_CreateOrUpdate({
  "api-version": "",
  "parameters": {},
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * parameters **required** [DiagnosticSettingsResource](#diagnosticsettingsresource)
  * name **required** `string`: The name of the diagnostic setting.

#### Output
* output [DiagnosticSettingsResource](#diagnosticsettingsresource)

### DiagnosticSettingsCategory_List
Lists the diagnostic settings categories for AadIam.


```js
azure_azureactivedirectory.DiagnosticSettingsCategory_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiagnosticSettingsCategoryResourceCollection](#diagnosticsettingscategoryresourcecollection)

### Operations_List
Operation to return the list of available operations.


```js
azure_azureactivedirectory.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationsDiscoveryCollection](#operationsdiscoverycollection)



## Definitions

### DiagnosticSettings
* DiagnosticSettings `object`: The diagnostic settings.
  * eventHubAuthorizationRuleId `string`: The resource Id for the event hub authorization rule.
  * eventHubName `string`: The name of the event hub. If none is specified, the default event hub will be selected.
  * logs `array`: The list of logs settings.
    * items [LogSettings](#logsettings)
  * serviceBusRuleId `string`: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
  * storageAccountId `string`: The resource ID of the storage account to which you would like to send Diagnostic Logs.
  * workspaceId `string`: The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

### DiagnosticSettingsCategory
* DiagnosticSettingsCategory `object`: The diagnostic settings Category.
  * categoryType `string` (values: Logs): The type of the diagnostic settings category.

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

### DiagnosticSettingsResource
* DiagnosticSettingsResource `object`: The diagnostic setting resource.
  * properties [DiagnosticSettings](#diagnosticsettings)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### DiagnosticSettingsResourceCollection
* DiagnosticSettingsResourceCollection `object`: Represents a collection of alert rule resources.
  * value `array`: The collection of diagnostic settings resources.
    * items [DiagnosticSettingsResource](#diagnosticsettingsresource)

### Display
* Display `object`: Contains the localized display information for this particular operation / action. These value will be used by several clients for (1) custom role definitions for RBAC; (2) complex query filters for the event service; and (3) audit history / records for management operations.
  * description `string`: The description. The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views. Prescriptive guidance for namespaces: Read any 'display.provider' resource Create or Update any 'display.provider' resource Delete any 'display.provider' resource Perform any other action on any 'display.provider' resource Prescriptive guidance for namespaces: Read any 'display.resource' Create or Update any 'display.resource' Delete any 'display.resource' 'ActionName' any 'display.resources'
  * operation `string`: The operation. The localized friendly name for the operation, as it should be shown to the user. It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing. Prescriptive guidance: Read Create or Update Delete 'ActionName'
  * provider `string`: The provider. The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * publisher `string`: The publisher. The localized friendly form of the resource publisher name.
  * resource `string`: The resource. The localized friendly form of the resource related to this action/operation – it should match the public documentation for the resource provider. It should use Title Casing. This value should be unique for a particular URL type (e.g. nested types should *not* reuse their parent’s display.resource field). e.g. "Virtual Machines" or "Scheduler Job Collections", or "Virtual Machine VM Sizes" or "Scheduler Jobs"

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### LogSettings
* LogSettings `object`: Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
  * category `string` (values: AuditLogs, SignInLogs): Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
  * enabled **required** `boolean`: A value indicating whether this log is enabled.
  * retentionPolicy [RetentionPolicy](#retentionpolicy)

### OperationsDiscovery
* OperationsDiscovery `object`: Operations discovery class.
  * display [Display](#display)
  * name `string`: Name of the API. The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. Examples of operations include: * Microsoft.Compute/virtualMachine/capture/action * Microsoft.Compute/virtualMachine/restart/action * Microsoft.Compute/virtualMachine/write * Microsoft.Compute/virtualMachine/read * Microsoft.Compute/virtualMachine/delete Each action should include, in order: (1) Resource Provider Namespace (2) Type hierarchy for which the action applies (e.g. server/databases for a SQL Azure database) (3) Read, Write, Action or Delete indicating which type applies. If it is a PUT/PATCH on a collection or named value, Write should be used. If it is a GET, Read should be used. If it is a DELETE, Delete should be used. If it is a POST, Action should be used.
  * origin `string`: Origin. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is "user,system"
  * properties [OperationsDiscoveryProperties](#operationsdiscoveryproperties)

### OperationsDiscoveryCollection
* OperationsDiscoveryCollection `object`: Collection of ClientDiscovery details.
  * value `array`: The ClientDiscovery details.
    * items [OperationsDiscovery](#operationsdiscovery)

### OperationsDiscoveryProperties
* OperationsDiscoveryProperties `object`: ClientDiscovery properties.

### ProxyOnlyResource
* ProxyOnlyResource `object`: A proxy only azure resource object.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### RetentionPolicy
* RetentionPolicy `object`: Specifies the retention policy for the log.
  * days **required** `integer`: The number of days for the retention in days. A value of 0 will retain the events indefinitely.
  * enabled **required** `boolean`: A value indicating whether the retention policy is enabled.


