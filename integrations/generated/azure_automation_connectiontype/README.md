# @datafire/azure_automation_connectiontype

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_connectiontype
```
```js
let azure_automation_connectiontype = require('@datafire/azure_automation_connectiontype').create({
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

### ConnectionType_ListByAutomationAccount
Retrieve a list of connection types.


```js
azure_automation_connectiontype.ConnectionType_ListByAutomationAccount({
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
* output [ConnectionTypeListResult](#connectiontypelistresult)

### ConnectionType_Delete
Delete the connection type.


```js
azure_automation_connectiontype.ConnectionType_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionTypeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * connectionTypeName **required** `string`: The name of connection type.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ConnectionType_Get
Retrieve the connection type identified by connection type name.


```js
azure_automation_connectiontype.ConnectionType_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionTypeName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * connectionTypeName **required** `string`: The name of connection type.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ConnectionType](#connectiontype)

### ConnectionType_CreateOrUpdate
Create a connection type.


```js
azure_automation_connectiontype.ConnectionType_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionTypeName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * connectionTypeName **required** `string`: The parameters supplied to the create or update connection type operation.
  * parameters **required** [ConnectionTypeCreateOrUpdateParameters](#connectiontypecreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ConnectionType](#connectiontype)



## Definitions

### ConnectionType
* ConnectionType `object`: Definition of the connection type.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection type.
  * properties [ConnectionTypeProperties](#connectiontypeproperties)
  * type `string`: Resource type

### ConnectionTypeCreateOrUpdateParameters
* ConnectionTypeCreateOrUpdateParameters `object`: The parameters supplied to the create or update connection type operation.
  * name **required** `string`: Gets or sets the name of the connection type.
  * properties **required** [ConnectionTypeCreateOrUpdateProperties](#connectiontypecreateorupdateproperties)

### ConnectionTypeCreateOrUpdateProperties
* ConnectionTypeCreateOrUpdateProperties `object`: The properties of the create connection type.
  * fieldDefinitions **required** `object`: Gets or sets the field definitions of the connection type.
  * isGlobal `boolean`: Gets or sets a Boolean value to indicate if the connection type is global.

### ConnectionTypeListResult
* ConnectionTypeListResult `object`: The response model for the list connection type operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of connection types.
    * items [ConnectionType](#connectiontype)

### ConnectionTypeProperties
* ConnectionTypeProperties `object`: Properties of the connection type.
  * creationTime `string`: Gets the creation time.
  * description `string`: Gets or sets the description.
  * fieldDefinitions `object`: Gets the field definitions of the connection type.
  * isGlobal `boolean`: Gets or sets a Boolean value to indicate if the connection type is global.
  * lastModifiedTime `string`: Gets or sets the last modified time.

### FieldDefinition
* FieldDefinition `object`: Definition of the connection fields.
  * isEncrypted `boolean`: Gets or sets the isEncrypted flag of the connection field definition.
  * isOptional `boolean`: Gets or sets the isOptional flag of the connection field definition.
  * type **required** `string`: Gets or sets the type of the connection field definition.


