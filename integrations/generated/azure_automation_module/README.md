# @datafire/azure_automation_module

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_module
```
```js
let azure_automation_module = require('@datafire/azure_automation_module').create({
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

### Module_ListByAutomationAccount
Retrieve a list of modules.


```js
azure_automation_module.Module_ListByAutomationAccount({
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

#### Output
* output [ModuleListResult](#modulelistresult)

### Module_Delete
Delete the module by name.


```js
azure_automation_module.Module_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The module name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Module_Get
Retrieve the module identified by module name.


```js
azure_automation_module.Module_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The module name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Module](#module)

### Module_Update
Update the module identified by module name.


```js
azure_automation_module.Module_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The name of module.
  * parameters **required** [ModuleUpdateParameters](#moduleupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Module](#module)

### Module_CreateOrUpdate
Create or Update the module identified by module name.


```js
azure_automation_module.Module_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The name of module.
  * parameters **required** [ModuleCreateOrUpdateParameters](#modulecreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Module](#module)

### Activity_ListByModule
Retrieve a list of activities in the module identified by module name.


```js
azure_automation_module.Activity_ListByModule({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The name of module.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivityListResult](#activitylistresult)

### Activity_Get
Retrieve the activity in the module identified by module name and activity name.


```js
azure_automation_module.Activity_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "activityName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The name of module.
  * activityName **required** `string`: The name of activity.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Activity](#activity)

### ObjectDataTypes_ListFieldsByModuleAndType
Retrieve a list of fields of a given type identified by module name.


```js
azure_automation_module.ObjectDataTypes_ListFieldsByModuleAndType({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "typeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The name of module.
  * typeName **required** `string`: The name of type.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TypeFieldListResult](#typefieldlistresult)

### Fields_ListByType
Retrieve a list of fields of a given type identified by module name.


```js
azure_automation_module.Fields_ListByType({
  "resourceGroupName": "",
  "automationAccountName": "",
  "moduleName": "",
  "typeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * moduleName **required** `string`: The name of module.
  * typeName **required** `string`: The name of type.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TypeFieldListResult](#typefieldlistresult)

### ObjectDataTypes_ListFieldsByType
Retrieve a list of fields of a given type across all accessible modules.


```js
azure_automation_module.ObjectDataTypes_ListFieldsByType({
  "resourceGroupName": "",
  "automationAccountName": "",
  "typeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * typeName **required** `string`: The name of type.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TypeFieldListResult](#typefieldlistresult)



## Definitions

### Activity
* Activity `object`: Definition of the activity.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets the name of the activity.
  * properties [ActivityProperties](#activityproperties)

### ActivityListResult
* ActivityListResult `object`: The response model for the list activity operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of activities.
    * items [Activity](#activity)

### ActivityOutputType
* ActivityOutputType `object`: Definition of the activity output type.
  * name `string`: Gets or sets the name of the activity output type.
  * type `string`: Gets or sets the type of the activity output type.

### ActivityParameter
* ActivityParameter `object`: Definition of the activity parameter.
  * description `string`: Gets or sets the description of the activity parameter.
  * isDynamic `boolean`: Gets or sets a Boolean value that indicates true if the parameter is dynamic.
  * isMandatory `boolean`: Gets or sets a Boolean value that indicates true if the parameter is required. If the value is false, the parameter is optional.
  * name `string`: Gets or sets the name of the activity parameter.
  * position `integer`: Gets or sets the position of the activity parameter.
  * type `string`: Gets or sets the type of the activity parameter.
  * validationSet `array`: Gets or sets the validation set of activity parameter.
    * items [ActivityParameterValidationSet](#activityparametervalidationset)
  * valueFromPipeline `boolean`: Gets or sets a Boolean value that indicates true if the parameter can take values from the incoming pipeline objects. This setting is used if the cmdlet must access the complete input object. false indicates that the parameter cannot take values from the complete input object.
  * valueFromPipelineByPropertyName `boolean`: Gets or sets a Boolean value that indicates true if the parameter can be filled from a property of the incoming pipeline object that has the same name as this parameter. false indicates that the parameter cannot be filled from the incoming pipeline object property with the same name. 
  * valueFromRemainingArguments `boolean`: Gets or sets a Boolean value that indicates true if the cmdlet parameter accepts all the remaining command-line arguments that are associated with this parameter in the form of an array. false if the cmdlet parameter does not accept all the remaining argument values.

### ActivityParameterSet
* ActivityParameterSet `object`: Definition of the activity parameter set.
  * name `string`: Gets or sets the name of the activity parameter set.
  * parameters `array`: Gets or sets the parameters of the activity parameter set.
    * items [ActivityParameter](#activityparameter)

### ActivityParameterValidationSet
* ActivityParameterValidationSet `object`: Definition of the activity parameter validation set.
  * memberValue `string`: Gets or sets the name of the activity parameter validation set member.

### ActivityProperties
* ActivityProperties `object`: Properties of the activity.
  * creationTime `string`: Gets or sets the creation time.
  * definition `string`: Gets or sets the user name of the activity.
  * description `string`: Gets or sets the description.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * outputTypes `array`: Gets or sets the output types of the activity.
    * items [ActivityOutputType](#activityoutputtype)
  * parameterSets `array`: Gets or sets the parameter sets of the activity.
    * items [ActivityParameterSet](#activityparameterset)

### ContentHash
* ContentHash `object`: Definition of the runbook property type.
  * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
  * value **required** `string`: Gets or sets expected hash value of the content.

### ContentLink
* ContentLink `object`: Definition of the content link.
  * contentHash [ContentHash](#contenthash)
  * uri `string`: Gets or sets the uri of the runbook content.
  * version `string`: Gets or sets the version of the content.

### Module
* Module `object`: Definition of the module type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties [ModuleProperties](#moduleproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### ModuleCreateOrUpdateParameters
* ModuleCreateOrUpdateParameters `object`: The parameters supplied to the create or update module operation.
  * location `string`: Gets or sets the location of the resource.
  * name `string`: Gets or sets name of the resource.
  * properties **required** [ModuleCreateOrUpdateProperties](#modulecreateorupdateproperties)
  * tags `object`: Gets or sets the tags attached to the resource.

### ModuleCreateOrUpdateProperties
* ModuleCreateOrUpdateProperties `object`: The parameters supplied to the create or update module properties.
  * contentLink **required** [ContentLink](#contentlink)

### ModuleErrorInfo
* ModuleErrorInfo `object`: Definition of the module error info type.
  * code `string`: Gets or sets the error code.
  * message `string`: Gets or sets the error message.

### ModuleListResult
* ModuleListResult `object`: The response model for the list module operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of modules.
    * items [Module](#module)

### ModuleProperties
* ModuleProperties `object`: Definition of the module property type.
  * activityCount `integer`: Gets or sets the activity count of the module.
  * contentLink [ContentLink](#contentlink)
  * creationTime `string`: Gets or sets the creation time.
  * description `string`: Gets or sets the description.
  * error [ModuleErrorInfo](#moduleerrorinfo)
  * isComposite `boolean`: Gets or sets type of module, if its composite or not.
  * isGlobal `boolean`: Gets or sets the isGlobal flag of the module.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * provisioningState `string` (values: Created, Creating, StartingImportModuleRunbook, RunningImportModuleRunbook, ContentRetrieved, ContentDownloaded, ContentValidated, ConnectionTypeImported, ContentStored, ModuleDataStored, ActivitiesStored, ModuleImportRunbookComplete, Succeeded, Failed, Cancelled, Updating): Gets or sets the provisioning state of the module.
  * sizeInBytes `integer`: Gets or sets the size in bytes of the module.
  * version `string`: Gets or sets the version of the module.

### ModuleUpdateParameters
* ModuleUpdateParameters `object`: The parameters supplied to the update module operation.
  * location `string`: Gets or sets the location of the resource.
  * name `string`: Gets or sets name of the resource.
  * properties [ModuleUpdateProperties](#moduleupdateproperties)
  * tags `object`: Gets or sets the tags attached to the resource.

### ModuleUpdateProperties
* ModuleUpdateProperties `object`: The parameters supplied to the update properties.
  * contentLink [ContentLink](#contentlink)

### TypeField
* TypeField `object`: Information about a field of a type.
  * name `string`: Gets or sets the name of the field.
  * type `string`: Gets or sets the type of the field.

### TypeFieldListResult
* TypeFieldListResult `object`: The response model for the list fields operation.
  * value `array`: Gets or sets a list of fields.
    * items [TypeField](#typefield)


