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

.then(data => {
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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [CredentialListResult](#credentiallistresult)

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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * credentialName **required** `string`: The name of credential.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Credential](#credential)

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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * credentialName **required** `string`: The parameters supplied to the Update credential operation.
  * parameters **required** [CredentialUpdateParameters](#credentialupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Credential](#credential)

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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * credentialName **required** `string`: The parameters supplied to the create or update credential operation.
  * parameters **required** [CredentialCreateOrUpdateParameters](#credentialcreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Credential](#credential)



## Definitions

### Credential
* Credential `object`: Definition of the credential.
  * properties [CredentialProperties](#credentialproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### CredentialCreateOrUpdateParameters
* CredentialCreateOrUpdateParameters `object`: The parameters supplied to the create or update credential operation.
  * name **required** `string`: Gets or sets the name of the credential.
  * properties **required** [CredentialCreateOrUpdateProperties](#credentialcreateorupdateproperties)

### CredentialCreateOrUpdateProperties
* CredentialCreateOrUpdateProperties `object`: The properties of the create credential operation.
  * description `string`: Gets or sets the description of the credential.
  * password **required** `string`: Gets or sets the password of the credential.
  * userName **required** `string`: Gets or sets the user name of the credential.

### CredentialListResult
* CredentialListResult `object`: The response model for the list credential operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of credentials.
    * items [Credential](#credential)

### CredentialProperties
* CredentialProperties `object`: Definition of the credential properties
  * creationTime `string`: Gets the creation time.
  * description `string`: Gets or sets the description.
  * lastModifiedTime `string`: Gets the last modified time.
  * userName `string`: Gets the user name of the credential.

### CredentialUpdateParameters
* CredentialUpdateParameters `object`: The parameters supplied to the Update credential operation.
  * name `string`: Gets or sets the name of the credential.
  * properties [CredentialUpdateProperties](#credentialupdateproperties)

### CredentialUpdateProperties
* CredentialUpdateProperties `object`: The properties of the Update credential
  * description `string`: Gets or sets the description of the credential.
  * password `string`: Gets or sets the password of the credential.
  * userName `string`: Gets or sets the user name of the credential.


