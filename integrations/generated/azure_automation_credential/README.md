# @datafire/azure_automation_credential

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_credential
```
```js
let azure_automation_credential = require('@datafire/azure_automation_credential').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_credential.Credential_ListByAutomationAccount({
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

### Credential_ListByAutomationAccount
Retrieve a list of credentials.


```js
azure_automation_credential.Credential_ListByAutomationAccount({
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
* output `object`: The response model for the list credential operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of credentials.
    * items `object`: Definition of the credential.
      * id `string`: Gets the id of the resource.
      * name `string`: Gets the name of the credential.
      * properties `object`: Definition of the credential properties
        * creationTime `string`: Gets the creation time.
        * description `string`: Gets or sets the description.
        * lastModifiedTime `string`: Gets the last modified time.
        * userName `string`: Gets the user name of the credential.

### Credential_Delete
Delete the credential.


```js
azure_automation_credential.Credential_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "credentialName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * credentialName **required** `string`: The name of credential.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Credential_Get
Retrieve the credential identified by credential name.


```js
azure_automation_credential.Credential_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "credentialName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * credentialName **required** `string`: The name of credential.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the credential.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the credential.
  * properties `object`: Definition of the credential properties
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * lastModifiedTime `string`: Gets the last modified time.
    * userName `string`: Gets the user name of the credential.

### Credential_Update
Update a credential.


```js
azure_automation_credential.Credential_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "credentialName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * credentialName **required** `string`: The parameters supplied to the Update credential operation.
  * parameters **required** `object`: The parameters supplied to the Update credential operation.
    * name **required** `string`: Gets or sets the name of the credential.
    * properties `object`: The properties of the Update credential
      * description `string`: Gets or sets the description of the credential.
      * password `string`: Gets or sets the password of the credential.
      * userName `string`: Gets or sets the user name of the credential.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the credential.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the credential.
  * properties `object`: Definition of the credential properties
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * lastModifiedTime `string`: Gets the last modified time.
    * userName `string`: Gets the user name of the credential.

### Credential_CreateOrUpdate
Create a credential.


```js
azure_automation_credential.Credential_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "credentialName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * credentialName **required** `string`: The parameters supplied to the create or update credential operation.
  * parameters **required** `object`: The parameters supplied to the create or update credential operation.
    * name **required** `string`: Gets or sets the name of the credential.
    * properties **required** `object`: The properties of the create cerdential operation.
      * description `string`: Gets or sets the description of the credential.
      * password **required** `string`: Gets or sets the password of the credential.
      * userName **required** `string`: Gets or sets the user name of the credential.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the credential.
  * id `string`: Gets the id of the resource.
  * name `string`: Gets the name of the credential.
  * properties `object`: Definition of the credential properties
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * lastModifiedTime `string`: Gets the last modified time.
    * userName `string`: Gets the user name of the credential.



## Definitions

*This integration has no definitions*
