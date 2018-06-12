# @datafire/azure_automation_certificate

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_certificate
```
```js
let azure_automation_certificate = require('@datafire/azure_automation_certificate').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_certificate.Certificate_ListByAutomationAccount({
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

### Certificate_ListByAutomationAccount
Retrieve a list of certificates.


```js
azure_automation_certificate.Certificate_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list certificate operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of certificates.
    * items `object`: Definition of the certificate.
      * properties `object`: Properties of the certificate.
        * creationTime `string`: Gets the creation time.
        * description `string`: Gets or sets the description.
        * expiryTime `string`: Gets the expiry time of the certificate.
        * isExportable `boolean`: Gets the is exportable flag of the certificate.
        * lastModifiedTime `string`: Gets the last modified time.
        * thumbprint `string`: Gets the thumbprint of the certificate.
      * id `string`: Fully qualified resource Id for the resource
      * name `string`: The name of the resource
      * type `string`: The type of the resource.

### Certificate_Delete
Delete the certificate.


```js
azure_automation_certificate.Certificate_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "certificateName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * certificateName **required** `string`: The name of certificate.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Certificate_Get
Retrieve the certificate identified by certificate name.


```js
azure_automation_certificate.Certificate_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "certificateName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * certificateName **required** `string`: The name of certificate.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the certificate.
  * properties `object`: Properties of the certificate.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * expiryTime `string`: Gets the expiry time of the certificate.
    * isExportable `boolean`: Gets the is exportable flag of the certificate.
    * lastModifiedTime `string`: Gets the last modified time.
    * thumbprint `string`: Gets the thumbprint of the certificate.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Certificate_Update
Update a certificate.


```js
azure_automation_certificate.Certificate_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "certificateName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * certificateName **required** `string`: The parameters supplied to the update certificate operation.
  * parameters **required** `object`: The parameters supplied to the update certificate operation.
    * name `string`: Gets or sets the name of the certificate.
    * properties `object`: The properties of the update certificate operation
      * description `string`: Gets or sets the description of the certificate.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the certificate.
  * properties `object`: Properties of the certificate.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * expiryTime `string`: Gets the expiry time of the certificate.
    * isExportable `boolean`: Gets the is exportable flag of the certificate.
    * lastModifiedTime `string`: Gets the last modified time.
    * thumbprint `string`: Gets the thumbprint of the certificate.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Certificate_CreateOrUpdate
Create a certificate.


```js
azure_automation_certificate.Certificate_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "certificateName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * certificateName **required** `string`: The parameters supplied to the create or update certificate operation.
  * parameters **required** `object`: The parameters supplied to the create or update or replace certificate operation.
    * name **required** `string`: Gets or sets the name of the certificate.
    * properties **required** `object`: The properties of the create certificate operation.
      * base64Value **required** `string`: Gets or sets the base64 encoded value of the certificate.
      * description `string`: Gets or sets the description of the certificate.
      * isExportable `boolean`: Gets or sets the is exportable flag of the certificate.
      * thumbprint `string`: Gets or sets the thumbprint of the certificate.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the certificate.
  * properties `object`: Properties of the certificate.
    * creationTime `string`: Gets the creation time.
    * description `string`: Gets or sets the description.
    * expiryTime `string`: Gets the expiry time of the certificate.
    * isExportable `boolean`: Gets the is exportable flag of the certificate.
    * lastModifiedTime `string`: Gets the last modified time.
    * thumbprint `string`: Gets the thumbprint of the certificate.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.



## Definitions

*This integration has no definitions*
