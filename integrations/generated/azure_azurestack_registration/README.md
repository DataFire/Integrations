# @datafire/azure_azurestack_registration

Client library for Azure Stack Azure Bridge Client

## Installation and Usage
```bash
npm install --save @datafire/azure_azurestack_registration
```
```js
let azure_azurestack_registration = require('@datafire/azure_azurestack_registration').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azurestack_registration.Registrations_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Registrations_List
Returns a list of all registrations.


```js
azure_azurestack_registration.Registrations_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * api-version **required** `string`: Client API Version.

#### Output
* output [RegistrationList](#registrationlist)

### Registrations_Delete
Delete the requested Azure Stack registration.


```js
azure_azurestack_registration.Registrations_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Registrations_Get
Returns the properties of an Azure Stack registration.


```js
azure_azurestack_registration.Registrations_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Registration](#registration)

### Registrations_CreateOrUpdate
Create or update an Azure Stack registration.


```js
azure_azurestack_registration.Registrations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": "",
  "token": {
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * api-version **required** `string`: Client API Version.
  * token **required** [RegistrationParameter](#registrationparameter)

#### Output
* output [Registration](#registration)

### Registrations_GetActivationKey
Returns Azure Stack Activation Key.


```js
azure_azurestack_registration.Registrations_GetActivationKey({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ActivationKeyResult](#activationkeyresult)



## Definitions

### ActivationKeyResult
* ActivationKeyResult `object`: The resource containing the Azure Stack activation key.
  * activationKey `string`: Azure Stack activation key.

### Registration
* Registration `object`: Registration information.
  * properties [RegistrationProperties](#registrationproperties)
  * etag `string`: The entity tag used for optimistic concurency when modifying the resource.
  * id `string`: ID of the resource.
  * location **required** `string` (values: global): Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: Custom tags for the resource.
  * type `string`: Type of Resource.

### RegistrationList
* RegistrationList `object`: Pageable list of registrations.
  * nextLink `string`: URI to the next page.
  * value `array`: List of Registrations
    * items [Registration](#registration)

### RegistrationParameter
* RegistrationParameter `object`: Registration resource
  * properties [RegistrationParameterProperties](#registrationparameterproperties)
  * etag `string`: The entity tag used for optimistic concurency when modifying the resource.
  * id `string`: ID of the resource.
  * location **required** `string` (values: global): Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: Custom tags for the resource.
  * type `string`: Type of Resource.

### RegistrationParameterProperties
* RegistrationParameterProperties `object`: Properties of the Azure Stack regstration resource
  * registrationToken **required** `string`: The token identifying registered Azure Stack

### RegistrationProperties
* RegistrationProperties `object`: Properties portion of the registration resource.
  * billingModel `string`: Specifies the billing mode for the Azure Stack registration.
  * cloudId `string`: The identifier of the registered Azure Stack.
  * objectId `string`: The object identifier associated with the Azure Stack connecting to Azure.


