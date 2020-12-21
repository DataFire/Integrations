# @datafire/azure_automation_dscnodeconfiguration

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_dscnodeconfiguration
```
```js
let azure_automation_dscnodeconfiguration = require('@datafire/azure_automation_dscnodeconfiguration').create({
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

### DscNodeConfiguration_ListByAutomationAccount
Retrieve a list of dsc node configurations.


```js
azure_automation_dscnodeconfiguration.DscNodeConfiguration_ListByAutomationAccount({
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
* output [DscNodeConfigurationListResult](#dscnodeconfigurationlistresult)

### DscNodeConfiguration_Delete
Delete the Dsc node configurations by node configuration.


```js
azure_automation_dscnodeconfiguration.DscNodeConfiguration_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeConfigurationName **required** `string`: The Dsc node configuration name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### DscNodeConfiguration_Get
Retrieve the Dsc node configurations by node configuration.


```js
azure_automation_dscnodeconfiguration.DscNodeConfiguration_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeConfigurationName **required** `string`: The Dsc node configuration name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNodeConfiguration](#dscnodeconfiguration)

### DscNodeConfiguration_CreateOrUpdate
Create the node configuration identified by node configuration name.


```js
azure_automation_dscnodeconfiguration.DscNodeConfiguration_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeConfigurationName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeConfigurationName **required** `string`: The Dsc node configuration name.
  * parameters **required** [DscNodeConfigurationCreateOrUpdateParameters](#dscnodeconfigurationcreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



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

### DscConfigurationAssociationProperty
* DscConfigurationAssociationProperty `object`: The Dsc configuration property associated with the entity.
  * name `string`: Gets or sets the name of the Dsc configuration.

### DscNodeConfiguration
* DscNodeConfiguration `object`: Definition of the dsc node configuration.
  * properties [DscNodeConfigurationProperties](#dscnodeconfigurationproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### DscNodeConfigurationCreateOrUpdateParameters
* DscNodeConfigurationCreateOrUpdateParameters `object`: The parameters supplied to the create or update node configuration operation.
  * name `string`: Name of the node configuration.
  * properties [DscNodeConfigurationCreateOrUpdateParametersProperties](#dscnodeconfigurationcreateorupdateparametersproperties)
  * tags `object`: Gets or sets the tags attached to the resource.

### DscNodeConfigurationCreateOrUpdateParametersProperties
* DscNodeConfigurationCreateOrUpdateParametersProperties `object`: The parameter properties supplied to the create or update node configuration operation.
  * configuration **required** [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty)
  * incrementNodeConfigurationBuild `boolean`: If a new build version of NodeConfiguration is required.
  * source **required** [ContentSource](#contentsource)

### DscNodeConfigurationListResult
* DscNodeConfigurationListResult `object`: The response model for the list job operation.
  * nextLink `string`: Gets or sets the next link.
  * totalCount `integer`: Gets or sets the total rows in query.
  * value `array`: Gets or sets a list of Dsc node configurations.
    * items [DscNodeConfiguration](#dscnodeconfiguration)

### DscNodeConfigurationProperties
* DscNodeConfigurationProperties `object`: Properties for the DscNodeConfiguration
  * configuration [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty)
  * creationTime `string`: Gets or sets creation time.
  * incrementNodeConfigurationBuild `boolean`: If a new build version of NodeConfiguration is required.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * nodeCount `integer`: Number of nodes with this node configuration assigned
  * source `string`: Source of node configuration.

### DscNodeExtensionHandlerAssociationProperty
* DscNodeExtensionHandlerAssociationProperty `object`: The dsc extensionHandler property associated with the node
  * name `string`: Gets or sets the name of the extension handler.
  * version `string`: Gets or sets the version of the extension handler.


