# @datafire/azure_azsadmin_activation

Client library for AzureBridgeAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_activation
```
```js
let azure_azsadmin_activation = require('@datafire/azure_azsadmin_activation').create({
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

AzureBridge Admin Client.

## Actions

### Activations_List
Returns the list of activations.


```js
azure_azsadmin_activation.Activations_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivationResourcesPage](#activationresourcespage)

### Activations_Delete
Delete an activation.


```js
azure_azsadmin_activation.Activations_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivationResource](#activationresource)

### Activations_Get
Returns activation name.


```js
azure_azsadmin_activation.Activations_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ActivationResource](#activationresource)

### Activations_CreateOrUpdate
Create a new activation.


```js
azure_azsadmin_activation.Activations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "api-version": "",
  "activation": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * api-version **required** `string`: Client Api Version.
  * activation **required** [Activation](#activation)

#### Output
* output [ActivationResource](#activationresource)



## Definitions

### Activation
* Activation `object`: Holds properties related to activation.
  * azureRegistrationResourceIdentifier `string`: Azure registration resource identifier.
  * displayName `string`: Name displayed for the product.
  * expiration `string`: The activation expiration.
  * marketplaceSyndicationEnabled `boolean`: Value indicating whether the marketplace syndication feature is enabled.
  * provisioningState `string` (values: Stopped, Starting, Running, Stopping, Succeeded, Downloading): The provisioning state of the resource.
  * usageReportingEnabled `boolean`: Value indicating whether the usage reporting feature is enabled.

### ActivationResource
* ActivationResource `object`: Published activation resource.
  * properties [Activation](#activation)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### ActivationResourcesPage
* ActivationResourcesPage `object`: Holds an array of activation resources and the next link.
  * nextLink `string`: URI to the next page.
  * value `array`: List of activation resources.
    * items [ActivationResource](#activationresource)


