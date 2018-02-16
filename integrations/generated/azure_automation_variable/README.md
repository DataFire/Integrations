# @datafire/azure_automation_variable

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_variable
```
```js
let azure_automation_variable = require('@datafire/azure_automation_variable').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_variable.Variable_ListByAutomationAccount({
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

### Variable_ListByAutomationAccount
Retrieve a list of variables.


```js
azure_automation_variable.Variable_ListByAutomationAccount({
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
* output `object`: The response model for the list variables operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of variables.
    * items `object`: Definition of the varible.
      * id `string`: Gets or sets the id of the resource.
      * name `string`: Gets or sets the name of the variable.
      * properties `object`: Definition of the varible properties
        * creationTime `string`: Gets or sets the creation time.
        * description `string`: Gets or sets the description.
        * isEncrypted `boolean`: Gets or sets the encrypted flag of the variable.
        * lastModifiedTime `string`: Gets or sets the last modified time.
        * value `string`: Gets or sets the value of the variable.

### Variable_Delete
Delete the variable.


```js
azure_automation_variable.Variable_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "variableName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * variableName **required** `string`: The name of variable.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Variable_Get
Retrieve the variable identified by variable name.


```js
azure_automation_variable.Variable_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "variableName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * variableName **required** `string`: The name of variable.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the varible.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the variable.
  * properties `object`: Definition of the varible properties
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * isEncrypted `boolean`: Gets or sets the encrypted flag of the variable.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * value `string`: Gets or sets the value of the variable.

### Variable_Update
Update a variable.


```js
azure_automation_variable.Variable_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "variableName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * variableName **required** `string`: The variable name.
  * parameters **required** `object`: The parameters supplied to the update variable operation.
    * name **required** `string`: Gets or sets the name of the variable.
    * properties `object`: The properties of the update variable
      * description `string`: Gets or sets the description of the variable.
      * value `string`: Gets or sets the value of the variable.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the varible.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the variable.
  * properties `object`: Definition of the varible properties
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * isEncrypted `boolean`: Gets or sets the encrypted flag of the variable.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * value `string`: Gets or sets the value of the variable.

### Variable_CreateOrUpdate
Create a variable.


```js
azure_automation_variable.Variable_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "variableName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * variableName **required** `string`: The variable name.
  * parameters **required** `object`: The parameters supplied to the create or update variable operation.
    * name **required** `string`: Gets or sets the name of the variable.
    * properties **required** `object`: The properties of the create variable operation.
      * description `string`: Gets or sets the description of the variable.
      * isEncrypted `boolean`: Gets or sets the encrypted flag of the variable.
      * value `string`: Gets or sets the value of the variable.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the varible.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the variable.
  * properties `object`: Definition of the varible properties
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * isEncrypted `boolean`: Gets or sets the encrypted flag of the variable.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * value `string`: Gets or sets the value of the variable.



## Definitions

*This integration has no definitions*
