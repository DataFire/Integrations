# @datafire/azure_automation_dscconfiguration

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_dscconfiguration
```
```js
let azure_automation_dscconfiguration = require('@datafire/azure_automation_dscconfiguration').create({
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

### DscConfiguration_ListByAutomationAccount
Retrieve a list of configurations.


```js
azure_automation_dscconfiguration.DscConfiguration_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.
  * $filter `string`: The filter to apply on the operation.
  * $skip `integer`: The number of rows to skip.
  * $top `integer`: The number of rows to take.
  * $inlinecount `string`: Return total rows.

#### Output
* output [DscConfigurationListResult](#dscconfigurationlistresult)

### DscConfiguration_Delete
Delete the dsc configuration identified by configuration name.


```js
azure_automation_dscconfiguration.DscConfiguration_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "configurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * configurationName **required** `string`: The configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### DscConfiguration_Get
Retrieve the configuration identified by configuration name.


```js
azure_automation_dscconfiguration.DscConfiguration_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "configurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * configurationName **required** `string`: The configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscConfiguration](#dscconfiguration)

### DscConfiguration_Update
Create the configuration identified by configuration name.


```js
azure_automation_dscconfiguration.DscConfiguration_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "configurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * configurationName **required** `string`: The create or update parameters for configuration.
  * parameters [DscConfigurationUpdateParameters](#dscconfigurationupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscConfiguration](#dscconfiguration)

### DscConfiguration_CreateOrUpdate
Create the configuration identified by configuration name.


```js
azure_automation_dscconfiguration.DscConfiguration_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "configurationName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * configurationName **required** `string`: The create or update parameters for configuration.
  * parameters **required** [DscConfigurationCreateOrUpdateParameters](#dscconfigurationcreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscConfiguration](#dscconfiguration)

### DscConfiguration_GetContent
Retrieve the configuration script identified by configuration name.


```js
azure_automation_dscconfiguration.DscConfiguration_GetContent({
  "resourceGroupName": "",
  "automationAccountName": "",
  "configurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * configurationName **required** `string`: The configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`



## Definitions

### ContentHash
* ContentHash `object`: Definition of the runbook property type.
  * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
  * value **required** `string`: Gets or sets expected hash value of the content.

### ContentSource
* ContentSource `object`: Definition of the content source.
  * hash [ContentHash](#contenthash)
  * type `string` (values: embeddedContent, uri): Gets or sets the content source type.
  * value `string`: Gets or sets the value of the content. This is based on the content source type.
  * version `string`: Gets or sets the version of the content.

### DscConfiguration
* DscConfiguration `object`: Definition of the configuration type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties [DscConfigurationProperties](#dscconfigurationproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### DscConfigurationCreateOrUpdateParameters
* DscConfigurationCreateOrUpdateParameters `object`: The parameters supplied to the create or update configuration operation.
  * location `string`: Gets or sets the location of the resource.
  * name `string`: Gets or sets name of the resource.
  * properties **required** [DscConfigurationCreateOrUpdateProperties](#dscconfigurationcreateorupdateproperties)
  * tags `object`: Gets or sets the tags attached to the resource.

### DscConfigurationCreateOrUpdateProperties
* DscConfigurationCreateOrUpdateProperties `object`: The properties to create or update configuration.
  * description `string`: Gets or sets the description of the configuration.
  * logProgress `boolean`: Gets or sets progress log option.
  * logVerbose `boolean`: Gets or sets verbose log option.
  * parameters `object`: Gets or sets the configuration parameters.
  * source **required** [ContentSource](#contentsource)

### DscConfigurationListResult
* DscConfigurationListResult `object`: The response model for the list configuration operation.
  * nextLink `string`: Gets or sets the next link.
  * totalCount `integer`: Gets the total number of configurations matching filter criteria.
  * value `array`: Gets or sets a list of configurations.
    * items [DscConfiguration](#dscconfiguration)

### DscConfigurationParameter
* DscConfigurationParameter `object`: Definition of the configuration parameter type.
  * defaultValue `string`: Gets or sets the default value of parameter.
  * isMandatory `boolean`: Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
  * position `integer`: Get or sets the position of the parameter.
  * type `string`: Gets or sets the type of the parameter.

### DscConfigurationProperties
* DscConfigurationProperties `object`: Definition of the configuration property type.
  * creationTime `string`: Gets or sets the creation time.
  * description `string`: Gets or sets the description.
  * jobCount `integer`: Gets or sets the job count of the configuration.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * logVerbose `boolean`: Gets or sets verbose log option.
  * nodeConfigurationCount `integer`: Gets the number of compiled node configurations.
  * parameters `object`: Gets or sets the configuration parameters.
  * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the configuration.
  * source [ContentSource](#contentsource)
  * state `string` (values: New, Edit, Published): Gets or sets the state of the configuration.

### DscConfigurationUpdateParameters
* DscConfigurationUpdateParameters `object`: The parameters supplied to the create or update configuration operation.
  * name `string`: Gets or sets name of the resource.
  * properties [DscConfigurationCreateOrUpdateProperties](#dscconfigurationcreateorupdateproperties)
  * tags `object`: Gets or sets the tags attached to the resource.


