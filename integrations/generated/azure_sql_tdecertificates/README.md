# @datafire/azure_sql_tdecertificates

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_tdecertificates
```
```js
let azure_sql_tdecertificates = require('@datafire/azure_sql_tdecertificates').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### TdeCertificates_Create
Creates a TDE certificate for a given server.


```js
azure_sql_tdecertificates.TdeCertificates_Create({
  "resourceGroupName": "",
  "serverName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * parameters **required** [TdeCertificate](#tdecertificate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*



## Definitions

### TdeCertificate
* TdeCertificate `object`: A TDE certificate that can be uploaded into a server.
  * properties [TdeCertificateProperties](#tdecertificateproperties)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### TdeCertificateProperties
* TdeCertificateProperties `object`: Properties of a TDE certificate.
  * certPassword `string`: The certificate password.
  * privateBlob **required** `string`: The base64 encoded certificate private blob.


