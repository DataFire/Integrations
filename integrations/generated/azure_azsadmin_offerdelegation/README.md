# @datafire/azure_azsadmin_offerdelegation

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_offerdelegation
```
```js
let azure_azsadmin_offerdelegation = require('@datafire/azure_azsadmin_offerdelegation').create({
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

The Admin Subscriptions Management Client.

## Actions

### OfferDelegations_List
Get the list of offer delegations.


```js
azure_azsadmin_offerdelegation.OfferDelegations_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "offer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * offer **required** `string`: Name of an offer.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OfferDelegationList](#offerdelegationlist)

### OfferDelegations_Delete
Delete the specified offer delegation.


```js
azure_azsadmin_offerdelegation.OfferDelegations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "offer": "",
  "offerDelegationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * offer **required** `string`: Name of an offer.
  * offerDelegationName **required** `string`: Name of a offer delegation.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### OfferDelegations_Get
Get the specified offer delegation.


```js
azure_azsadmin_offerdelegation.OfferDelegations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "offer": "",
  "offerDelegationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * offer **required** `string`: Name of an offer.
  * offerDelegationName **required** `string`: Name of a offer delegation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OfferDelegation](#offerdelegation)

### OfferDelegations_CreateOrUpdate
Create or update the offer delegation.


```js
azure_azsadmin_offerdelegation.OfferDelegations_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "offer": "",
  "offerDelegationName": "",
  "api-version": "",
  "newOfferDelegation": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group the resource is located under.
  * offer **required** `string`: Name of an offer.
  * offerDelegationName **required** `string`: Name of a offer delegation.
  * api-version **required** `string`: Client Api Version.
  * newOfferDelegation **required** [OfferDelegation](#offerdelegation)

#### Output
* output [OfferDelegation](#offerdelegation)



## Definitions

### OfferDelegation
* OfferDelegation `object`: Offer delegation.
  * properties [OfferDelegationProperties](#offerdelegationproperties)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### OfferDelegationList
* OfferDelegationList `object`: .
  * nextLink `string`: Continuation token
  * value `array`: Array of usage aggregates.
    * items [OfferDelegation](#offerdelegation)

### OfferDelegationProperties
* OfferDelegationProperties `object`: Properties for an offer delegation.
  * subscriptionId `string`: Identifier of the subscription receiving the delegated offer.


