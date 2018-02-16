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

azure_automation_dscconfiguration.DscConfiguration_ListByAutomationAccount({
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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list configuration operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of configurations.
    * items `object`: Definition of the configuration type.
      * etag `string`: Gets or sets the etag of the resource.
      * properties `object`: Definition of the configuration property type.
        * creationTime `string`: Gets or sets the creation time.
        * description `string`: Gets or sets the description.
        * jobCount `integer`: Gets or sets the job count of the configuration.
        * lastModifiedTime `string`: Gets or sets the last modified time.
        * logVerbose `boolean`: Gets or sets verbose log option.
        * parameters `object`: Gets or sets the configuration parameters.
        * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the configuration.
        * source `object`: Definition of the content source.
          * hash `object`: Definition of the runbook property type.
            * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
            * value **required** `string`: Gets or sets expected hash value of the content.
          * type `string` (values: embeddedContent, uri): Gets or sets the content source type.
          * value `string`: Gets or sets the value of the content. This is based on the content source type.
          * version `string`: Gets or sets the version of the content.
        * state `string` (values: New, Edit, Published): Gets or sets the state of the configuration.
      * id `string`: Resource Id
      * location **required** `string`: Resource location
      * name `string`: Resource name
      * tags `object`: Resource tags
      * type `string`: Resource type

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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * configurationName **required** `string`: The configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the configuration type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the configuration property type.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * jobCount `integer`: Gets or sets the job count of the configuration.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * logVerbose `boolean`: Gets or sets verbose log option.
    * parameters `object`: Gets or sets the configuration parameters.
    * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the configuration.
    * source `object`: Definition of the content source.
      * hash `object`: Definition of the runbook property type.
        * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
        * value **required** `string`: Gets or sets expected hash value of the content.
      * type `string` (values: embeddedContent, uri): Gets or sets the content source type.
      * value `string`: Gets or sets the value of the content. This is based on the content source type.
      * version `string`: Gets or sets the version of the content.
    * state `string` (values: New, Edit, Published): Gets or sets the state of the configuration.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * configurationName **required** `string`: The create or update parameters for configuration.
  * parameters **required** `object`: The parameters supplied to the create or update configuration operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets name of the resource.
    * properties **required** `object`: The properties to create or update configuration.
      * description `string`: Gets or sets the description of the configuration.
      * logProgress `boolean`: Gets or sets progress log option.
      * logVerbose `boolean`: Gets or sets verbose log option.
      * parameters `object`: Gets or sets the configuration parameters.
      * source **required** `object`: Definition of the content source.
        * hash `object`: Definition of the runbook property type.
          * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
          * value **required** `string`: Gets or sets expected hash value of the content.
        * type `string` (values: embeddedContent, uri): Gets or sets the content source type.
        * value `string`: Gets or sets the value of the content. This is based on the content source type.
        * version `string`: Gets or sets the version of the content.
    * tags `object`: Gets or sets the tags attached to the resource.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the configuration type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the configuration property type.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * jobCount `integer`: Gets or sets the job count of the configuration.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * logVerbose `boolean`: Gets or sets verbose log option.
    * parameters `object`: Gets or sets the configuration parameters.
    * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the configuration.
    * source `object`: Definition of the content source.
      * hash `object`: Definition of the runbook property type.
        * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
        * value **required** `string`: Gets or sets expected hash value of the content.
      * type `string` (values: embeddedContent, uri): Gets or sets the content source type.
      * value `string`: Gets or sets the value of the content. This is based on the content source type.
      * version `string`: Gets or sets the version of the content.
    * state `string` (values: New, Edit, Published): Gets or sets the state of the configuration.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * configurationName **required** `string`: The configuration name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`



## Definitions

*This integration has no definitions*
