# @datafire/azure_recoveryservices_registeredidentities

Client library for RecoveryServicesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservices_registeredidentities
```
```js
let azure_recoveryservices_registeredidentities = require('@datafire/azure_recoveryservices_registeredidentities').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservices_registeredidentities.VaultCertificates_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "certificateName": "",
  "certificateRequest": {}
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### VaultCertificates_Create
Uploads a certificate for a resource.


```js
azure_recoveryservices_registeredidentities.VaultCertificates_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "certificateName": "",
  "certificateRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * certificateName **required** `string`: Certificate friendly name.
  * certificateRequest **required** [CertificateRequest](#certificaterequest)

#### Output
* output [VaultCertificateResponse](#vaultcertificateresponse)

### RegisteredIdentities_Delete
Unregisters the given container from your Recovery Services vault.


```js
azure_recoveryservices_registeredidentities.RegisteredIdentities_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "identityName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * identityName **required** `string`: Name of the protection container to unregister.

#### Output
*Output schema unknown*



## Definitions

### CertificateRequest
* CertificateRequest `object`: Details of the certificate to be uploaded to the vault.
  * properties [RawCertificateData](#rawcertificatedata)

### RawCertificateData
* RawCertificateData `object`: Raw certificate data.
  * authType `string` (values: Invalid, ACS, AAD, AccessControlService, AzureActiveDirectory): Specifies the authentication type.
  * certificate `string`: The base64 encoded certificate raw data string

### ResourceCertificateAndAadDetails
* ResourceCertificateAndAadDetails `object`: Certificate details representing the Vault credentials for AAD.
  * aadAuthority **required** `string`: AAD tenant authority.
  * aadTenantId **required** `string`: AAD tenant Id.
  * azureManagementEndpointAudience **required** `string`: Azure Management Endpoint Audience.
  * servicePrincipalClientId **required** `string`: AAD service principal clientId.
  * servicePrincipalObjectId **required** `string`: AAD service principal ObjectId.
  * authType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * certificate `string`: The base64 encoded certificate raw data string.
  * friendlyName `string`: Certificate friendlyname.
  * issuer `string`: Certificate issuer.
  * resourceId `integer`: Resource ID of the vault.
  * subject `string`: Certificate Subject Name.
  * thumbprint `string`: Certificate thumbprint.
  * validFrom `string`: Certificate Validity start Date time.
  * validTo `string`: Certificate Validity End Date time.

### ResourceCertificateAndAcsDetails
* ResourceCertificateAndAcsDetails `object`: Certificate details representing the Vault credentials for ACS.
  * globalAcsHostName **required** `string`: Acs mgmt host name to connect to.
  * globalAcsNamespace **required** `string`: ACS namespace name - tenant for our service.
  * globalAcsRPRealm **required** `string`: Global ACS namespace RP realm.
  * authType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * certificate `string`: The base64 encoded certificate raw data string.
  * friendlyName `string`: Certificate friendlyname.
  * issuer `string`: Certificate issuer.
  * resourceId `integer`: Resource ID of the vault.
  * subject `string`: Certificate Subject Name.
  * thumbprint `string`: Certificate thumbprint.
  * validFrom `string`: Certificate Validity start Date time.
  * validTo `string`: Certificate Validity End Date time.

### ResourceCertificateDetails
* ResourceCertificateDetails `object`: Certificate details representing the Vault credentials.
  * authType **required** `string`: This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types.
  * certificate `string`: The base64 encoded certificate raw data string.
  * friendlyName `string`: Certificate friendlyname.
  * issuer `string`: Certificate issuer.
  * resourceId `integer`: Resource ID of the vault.
  * subject `string`: Certificate Subject Name.
  * thumbprint `string`: Certificate thumbprint.
  * validFrom `string`: Certificate Validity start Date time.
  * validTo `string`: Certificate Validity End Date time.

### VaultCertificateResponse
* VaultCertificateResponse `object`: Certificate corresponding to a vault that can be used by clients to register themselves with the vault.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * properties [ResourceCertificateDetails](#resourcecertificatedetails)
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...


