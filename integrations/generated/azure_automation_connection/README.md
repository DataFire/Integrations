# @datafire/azure_automation_connection

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_connection
```
```js
let azure_automation_connection = require('@datafire/azure_automation_connection').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_connection.Connection_ListByAutomationAccount({
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

### Connection_ListByAutomationAccount
Retrieve a list of connections.


```js
azure_automation_connection.Connection_ListByAutomationAccount({
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
* output `object`: The response model for the list connection operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of connection.
    * items `object`: Definition of the connection.
      * id `string`: Gets the id of the resource.
      * name `string`: Gets the name of the connection.
      * properties `object`: Definition of the connection properties.
        * connectionType `object`: The connection type property associated with the entity.
          * name `string`: Gets or sets the name of the connection type.
        * creationTime `string`: Gets the creation time.
        * description `string`: Gets or sets the description.
        * fieldDefinitionValues `object`: Gets the field definition values of the connection.
        * lastModifiedTime `string`: Gets the last modified time.

### Connection_Delete
Delete the connection.


```js
azure_automation_connection.Connection_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionName **required** `string`: The name of connection.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the connection.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection.
  * properties `object`: Definition of the connection properties.
    * connectionType `object`: The connection type property associated with the entity.
      * name `string`: Gets or sets the name of the connection type.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * fieldDefinitionValues `object`: Gets the field definition values of the connection.
    * lastModifiedTime `string`: Gets the last modified time.

### Connection_Get
Retrieve the connection identified by connection name.


```js
azure_automation_connection.Connection_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionName **required** `string`: The name of connection.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the connection.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection.
  * properties `object`: Definition of the connection properties.
    * connectionType `object`: The connection type property associated with the entity.
      * name `string`: Gets or sets the name of the connection type.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * fieldDefinitionValues `object`: Gets the field definition values of the connection.
    * lastModifiedTime `string`: Gets the last modified time.

### Connection_Update
Update a connection.


```js
azure_automation_connection.Connection_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionName **required** `string`: The parameters supplied to the update a connection operation.
  * parameters **required** `object`: The parameters supplied to the update connection operation.
    * name `string`: Gets or sets the name of the connection.
    * properties **required** `object`: The properties of the update connection operation.
      * description `string`: Gets or sets the description of the connection.
      * fieldDefinitionValues `object`: Gets or sets the field definition values of the connection.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the connection.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection.
  * properties `object`: Definition of the connection properties.
    * connectionType `object`: The connection type property associated with the entity.
      * name `string`: Gets or sets the name of the connection type.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * fieldDefinitionValues `object`: Gets the field definition values of the connection.
    * lastModifiedTime `string`: Gets the last modified time.

### Connection_CreateOrUpdate
Create or update a connection.


```js
azure_automation_connection.Connection_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "connectionName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * connectionName **required** `string`: The parameters supplied to the create or update connection operation.
  * parameters **required** `object`: The parameters supplied to the create or update connection operation.
    * name **required** `string`: Gets or sets the name of the connection.
    * properties **required** `object`: The properties of the create connection properties
      * connectionType **required** `object`: The connection type property associated with the entity.
        * name `string`: Gets or sets the name of the connection type.
      * description `string`: Gets or sets the description of the connection.
      * fieldDefinitionValues `object`: Gets or sets the field definition properties of the connection.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the connection.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the connection.
  * properties `object`: Definition of the connection properties.
    * connectionType `object`: The connection type property associated with the entity.
      * name `string`: Gets or sets the name of the connection type.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * fieldDefinitionValues `object`: Gets the field definition values of the connection.
    * lastModifiedTime `string`: Gets the last modified time.



## Definitions

*This integration has no definitions*
