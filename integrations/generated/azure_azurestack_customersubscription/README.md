# @datafire/azure_azurestack_customersubscription

Client library for AzureStack Azure Bridge Client

## Installation and Usage
```bash
npm install --save @datafire/azure_azurestack_customersubscription
```
```js
let azure_azurestack_customersubscription = require('@datafire/azure_azurestack_customersubscription').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_azurestack_customersubscription.CustomerSubscriptions_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### CustomerSubscriptions_List
Returns a list of products.


```js
azure_azurestack_customersubscription.CustomerSubscriptions_List({
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
* output [CustomerSubscriptionList](#customersubscriptionlist)

### CustomerSubscriptions_Delete
Deletes a customer subscription under a registration.


```js
azure_azurestack_customersubscription.CustomerSubscriptions_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "customerSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * customerSubscriptionName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### CustomerSubscriptions_Get
Returns the specified product.


```js
azure_azurestack_customersubscription.CustomerSubscriptions_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "customerSubscriptionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * customerSubscriptionName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CustomerSubscription](#customersubscription)

### CustomerSubscriptions_Create
Creates a new customer subscription under a registration.


```js
azure_azurestack_customersubscription.CustomerSubscriptions_Create({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "customerSubscriptionName": "",
  "api-version": "",
  "customerCreationParameters": {
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * customerSubscriptionName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.
  * customerCreationParameters **required** [CustomerSubscription](#customersubscription)

#### Output
* output [CustomerSubscription](#customersubscription)



## Definitions

### CustomerSubscription
* CustomerSubscription `object`: Customer subcription.
  * properties [CustomerSubscriptionProperties](#customersubscriptionproperties)
  * etag `string`: The entity tag used for optimistic concurency when modifying the resource.
  * id `string`: ID of the resource.
  * location **required** `string` (values: global): Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: Custom tags for the resource.
  * type `string`: Type of Resource.

### CustomerSubscriptionList
* CustomerSubscriptionList `object`: Pageable list of customer subscriptions.
  * nextLink `string`: URI to the next page.
  * value `array`: List of customer subscriptions.
    * items [CustomerSubscription](#customersubscription)

### CustomerSubscriptionProperties
* CustomerSubscriptionProperties `object`: Customer subscription properties.
  * tenantId `string`: Tenant Id.


