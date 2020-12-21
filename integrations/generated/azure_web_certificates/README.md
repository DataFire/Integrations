# @datafire/azure_web_certificates

Client library for Certificates API Client

## Installation and Usage
```bash
npm install --save @datafire/azure_web_certificates
```
```js
let azure_web_certificates = require('@datafire/azure_web_certificates').create({
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

### Certificates_List
Get all certificates for a subscription.


```js
azure_web_certificates.Certificates_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [CertificateCollection](#certificatecollection)

### Certificates_ListByResourceGroup
Get all certificates in a resource group.


```js
azure_web_certificates.Certificates_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [CertificateCollection](#certificatecollection)

### Certificates_Delete
Delete a certificate.


```js
azure_web_certificates.Certificates_Delete({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the certificate.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
*Output schema unknown*

### Certificates_Get
Get a certificate.


```js
azure_web_certificates.Certificates_Get({
  "resourceGroupName": "",
  "name": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the certificate.
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Certificate](#certificate)

### Certificates_Update
Create or update a certificate.


```js
azure_web_certificates.Certificates_Update({
  "resourceGroupName": "",
  "name": "",
  "certificateEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the certificate.
  * certificateEnvelope **required** [CertificatePatchResource](#certificatepatchresource)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Certificate](#certificate)

### Certificates_CreateOrUpdate
Create or update a certificate.


```js
azure_web_certificates.Certificates_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "certificateEnvelope": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group to which the resource belongs.
  * name **required** `string`: Name of the certificate.
  * certificateEnvelope **required** [Certificate](#certificate)
  * subscriptionId **required** `string`: Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API Version

#### Output
* output [Certificate](#certificate)



## Definitions

### Certificate
* Certificate `object`: SSL certificate for an app.
  * properties `object`: Certificate resource specific properties
    * cerBlob `string`: Raw bytes of .cer file
    * expirationDate `string`: Certificate expiration date.
    * friendlyName `string`: Friendly name of the certificate.
    * hostNames `array`: Host names the certificate applies to.
      * items `string`
    * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
      * id `string`: Resource ID of the App Service Environment.
      * name `string`: Name of the App Service Environment.
      * type `string`: Resource type of the App Service Environment.
    * issueDate `string`: Certificate issue Date.
    * issuer `string`: Certificate issuer.
    * keyVaultId `string`: Key Vault Csm resource Id.
    * keyVaultSecretName `string`: Key Vault secret name.
    * keyVaultSecretStatus `string` (values: Initialized, WaitingOnCertificateOrder, Succeeded, CertificateOrderFailed, OperationNotPermittedOnKeyVault, AzureServiceUnauthorizedToAccessKeyVault, KeyVaultDoesNotExist, KeyVaultSecretDoesNotExist, UnknownError, ExternalPrivateKey, Unknown): Status of the Key Vault secret.
    * password **required** `string`: Certificate password.
    * pfxBlob `string`: Pfx blob.
    * publicKeyHash `string`: Public key hash.
    * selfLink `string`: Self link.
    * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
    * siteName `string`: App name.
    * subjectName `string`: Subject name of the certificate.
    * thumbprint `string`: Certificate thumbprint.
    * valid `boolean`: Is the certificate valid?.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * location **required** `string`: Resource Location.
  * name `string`: Resource Name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### CertificateCollection
* CertificateCollection `object`: Collection of certificates.
  * nextLink `string`: Link to next page of resources.
  * value **required** `array`: Collection of resources.
    * items [Certificate](#certificate)

### CertificatePatchResource
* CertificatePatchResource `object`: ARM resource for a certificate.
  * properties `object`: CertificatePatchResource resource specific properties
    * cerBlob `string`: Raw bytes of .cer file
    * expirationDate `string`: Certificate expiration date.
    * friendlyName `string`: Friendly name of the certificate.
    * hostNames `array`: Host names the certificate applies to.
      * items `string`
    * hostingEnvironmentProfile `object`: Specification for an App Service Environment to use for this resource.
      * id `string`: Resource ID of the App Service Environment.
      * name `string`: Name of the App Service Environment.
      * type `string`: Resource type of the App Service Environment.
    * issueDate `string`: Certificate issue Date.
    * issuer `string`: Certificate issuer.
    * keyVaultId `string`: Key Vault Csm resource Id.
    * keyVaultSecretName `string`: Key Vault secret name.
    * keyVaultSecretStatus `string` (values: Initialized, WaitingOnCertificateOrder, Succeeded, CertificateOrderFailed, OperationNotPermittedOnKeyVault, AzureServiceUnauthorizedToAccessKeyVault, KeyVaultDoesNotExist, KeyVaultSecretDoesNotExist, UnknownError, ExternalPrivateKey, Unknown): Status of the Key Vault secret.
    * password **required** `string`: Certificate password.
    * pfxBlob `string`: Pfx blob.
    * publicKeyHash `string`: Public key hash.
    * selfLink `string`: Self link.
    * serverFarmId `string`: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
    * siteName `string`: App name.
    * subjectName `string`: Subject name of the certificate.
    * thumbprint `string`: Certificate thumbprint.
    * valid `boolean`: Is the certificate valid?.
  * id `string`: Resource Id.
  * kind `string`: Kind of resource.
  * name `string`: Resource Name.
  * type `string`: Resource type.


