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

azure_automation_dscnodeconfiguration.DscNodeConfiguration_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list job operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of Dsc node configurations.
    * items `object`: Definition of the dsc node configuration.
      * configuration `object`: The Dsc configuration property associated with the entity.
        * name `string`: Gets or sets the name of the Dsc configuration.
      * creationTime `string`: Gets or sets creation time.
      * id `string`: Gets or sets the id of the resource.
      * lastModifiedTime `string`: Gets or sets the last modified time.
      * name `string`: Gets or sets the node configuration name.

### DscNodeConfiguration_Delete
Delete the Dsc node configurations by node configuration.


```js
azure_automation_dscnodeconfiguration.DscNodeConfiguration_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeConfigurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * nodeConfigurationName **required** `string`: The Dsc node configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### DscNodeConfiguration_Get
Retrieve the Dsc node configurations by node configuration.


```js
azure_automation_dscnodeconfiguration.DscNodeConfiguration_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeConfigurationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * nodeConfigurationName **required** `string`: The Dsc node configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the dsc node configuration.
  * configuration `object`: The Dsc configuration property associated with the entity.
    * name `string`: Gets or sets the name of the Dsc configuration.
  * creationTime `string`: Gets or sets creation time.
  * id `string`: Gets or sets the id of the resource.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * name `string`: Gets or sets the node configuration name.

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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * nodeConfigurationName **required** `string`: The create or update parameters for configuration.
  * parameters **required** `object`: The parameters supplied to the create or update node configuration operation.
    * configuration **required** `object`: The Dsc configuration property associated with the entity.
      * name `string`: Gets or sets the name of the Dsc configuration.
    * name **required** `string`: Gets or sets the type of the parameter.
    * newNodeConfigurationBuildVersionRequired `boolean`: If a new build version of NodeConfiguration is required.
    * source **required** `object`: Definition of the content source.
      * hash `object`: Definition of the runbook property type.
        * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
        * value **required** `string`: Gets or sets expected hash value of the content.
      * type `string` (values: embeddedContent, uri): Gets or sets the content source type.
      * value `string`: Gets or sets the value of the content. This is based on the content source type.
      * version `string`: Gets or sets the version of the content.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the dsc node configuration.
  * configuration `object`: The Dsc configuration property associated with the entity.
    * name `string`: Gets or sets the name of the Dsc configuration.
  * creationTime `string`: Gets or sets creation time.
  * id `string`: Gets or sets the id of the resource.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * name `string`: Gets or sets the node configuration name.



## Definitions

*This integration has no definitions*
