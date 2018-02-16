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

azure_automation_connectiontype.ConnectionType_ListByAutomationAccount({
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

### ConnectionType_ListByAutomationAccount
Retrieve a list of connectiontypes.


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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list connection type operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of connection types.
    * items `object`: Definition of the connection type.
      * id `string`: Gets the id of the resource.
      * name `string`: Gets the name of the connection type.
      * properties `object`: Properties of the connection type.
        * creationTime `string`: Gets the creation time.
        * description `string`: Gets or sets the description.
        * fieldDefinitions `object`: Gets the field definitions of the connection type.
        * isGlobal `boolean`: Gets or sets a Boolean value to indicate if the connection type is global.
        * lastModifiedTime `string`: Gets or sets the last modified time.

### ConnectionType_Delete
Delete the connectiontype.


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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionTypeName **required** `string`: The name of connectiontype.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### ConnectionType_Get
Retrieve the connectiontype identified by connectiontype name.


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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionTypeName **required** `string`: The name of connectiontype.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the connection type.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection type.
  * properties `object`: Properties of the connection type.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * fieldDefinitions `object`: Gets the field definitions of the connection type.
    * isGlobal `boolean`: Gets or sets a Boolean value to indicate if the connection type is global.
    * lastModifiedTime `string`: Gets or sets the last modified time.

### ConnectionType_CreateOrUpdate
Create a connectiontype.


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
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionTypeName **required** `string`: The parameters supplied to the create or update connectiontype operation.
  * parameters **required** `object`: The parameters supplied to the create or update connection type operation.
    * name **required** `string`: Gets or sets the name of the connection type.
    * properties **required** `object`: The properties of the create connection type.
      * fieldDefinitions **required** `object`: Gets or sets the field definitions of the connection type.
      * isGlobal `boolean`: Gets or sets a Boolean value to indicate if the connection type is global.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the connection type.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection type.
  * properties `object`: Properties of the connection type.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * fieldDefinitions `object`: Gets the field definitions of the connection type.
    * isGlobal `boolean`: Gets or sets a Boolean value to indicate if the connection type is global.
    * lastModifiedTime `string`: Gets or sets the last modified time.



## Definitions

*This integration has no definitions*
