# @datafire/azure_azsadmin_productsecret

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_productsecret
```
```js
let azure_azsadmin_productsecret = require('@datafire/azure_azsadmin_productsecret').create({
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

Deployment Admin Client.

## Actions

### ProductSecrets_List
Returns an array of product secrets.


```js
azure_azsadmin_productsecret.ProductSecrets_List({
  "subscriptionId": "",
  "api-version": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * productId **required** `string`: The product identifier.

#### Output
* output [ProductSecretsList](#productsecretslist)

### ProductSecrets_Get
Retrieves the specific product secret details.


```js
azure_azsadmin_productsecret.ProductSecrets_Get({
  "subscriptionId": "",
  "productId": "",
  "api-version": "",
  "secretName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * api-version **required** `string`: Client API Version.
  * secretName **required** `string`: The secret name.

#### Output
* output [ProductSecret](#productsecret)

### ProductSecrets_Import
Imports a product secret.


```js
azure_azsadmin_productsecret.ProductSecrets_Import({
  "subscriptionId": "",
  "productId": "",
  "secretName": "",
  "api-version": "",
  "secretParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * secretName **required** `string`: The secret name.
  * api-version **required** `string`: Client API Version.
  * secretParameters **required** [SecretParameters](#secretparameters)

#### Output
*Output schema unknown*

### ProductSecrets_Validate
Validates a product secret.


```js
azure_azsadmin_productsecret.ProductSecrets_Validate({
  "subscriptionId": "",
  "productId": "",
  "secretName": "",
  "api-version": "",
  "secretParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * productId **required** `string`: The product identifier.
  * secretName **required** `string`: The secret name.
  * api-version **required** `string`: Client API Version.
  * secretParameters **required** [SecretParameters](#secretparameters)

#### Output
*Output schema unknown*



## Definitions

### AlternativeDnsNames
* AlternativeDnsNames `string`: List of alternative DNS names.

### AlternativeIpAddresses
* AlternativeIpAddresses `string`: List of alternative IP Addresses.

### Password
* Password `string`: The password as a secure string.

### PfxFileName
* PfxFileName `string`: The pfx certificate file location.

### PfxPassword
* PfxPassword `string`: The pfx certificate file password as a secure string.

### ProductSecret
* ProductSecret `object`: Properties for a product secret.
  * properties [ProductSecretProperties](#productsecretproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### ProductSecretProperties
* ProductSecretProperties `object`: Properties of product secret.
  * description `string`: The secret description.
  * expiresAfter `string`: The expiration period of the secret (in ISO8601 format).
  * provisioningState `string`: Provisioning state of the resource.
  * secretDescriptor [SecretDescriptor](#secretdescriptor)
  * secretKind `string` (values: AdHoc, Certificate, Password, StorageAccount, SymmetricKey): Specifies the secret kind.
  * secretState [SecretState](#secretstate)

### ProductSecretsList
* ProductSecretsList `object`: List of product secrets.
  * nextLink `string`: URI to the next page.
  * value `array`: List of product secrets.
    * items [ProductSecret](#productsecret)

### SecretDescriptor
* SecretDescriptor `object`: The secret type-specific descriptor.
  * allowedCharacters `string`: The allowed characters in the password
  * alternativeDnsNames `array`: Alternative DNS Names.
    * items [AlternativeDnsNames](#alternativednsnames)
  * alternativeIpAddresses `array`: The list of alternative IP addresses.
    * items [AlternativeIpAddresses](#alternativeipaddresses)
  * keyLength `integer`: The key length.
  * passwordLength `integer`: The minimum password length is 8 characters, and the maximum password length is 128 characters.
  * passwordValidationRegex `string`: Password validation regular expression.
  * rotationStatus `string` (values: None, PlantNewSak, RotateInactiveSak, Complete): The storage account key secret rotation status.
  * secondaryKeyIsActive `boolean`: A value indicating whether the secondary or primary storage account key is active as a secret.
  * subject `string`: Certificate's subject

### SecretParameters
* SecretParameters `object`: Parameters required for creating/updating a product secret.
  * password [Password](#password)
  * pfxFileName [PfxFileName](#pfxfilename)
  * pfxPassword [PfxPassword](#pfxpassword)
  * secretValue [SecretValue](#secretvalue)
  * symmetricKey [SymmetricKey](#symmetrickey)

### SecretRotationStatus
* SecretRotationStatus `string` (values: None, InProgress, Complete): Specifies the secret rotation status.

### SecretState
* SecretState `object`: Represents the secret state.
  * expirationDate `string`: The secret expiration date.
  * rotationStatus [SecretRotationStatus](#secretrotationstatus)
  * status [SecretStatus](#secretstatus)

### SecretStatus
* SecretStatus `string` (values: NotUploaded, Uploaded, Deployed): Specifies the secret status.

### SecretValue
* SecretValue `string`: The secret value in a secure string format.

### SymmetricKey
* SymmetricKey `string`: The symmetric key as a secure string.


