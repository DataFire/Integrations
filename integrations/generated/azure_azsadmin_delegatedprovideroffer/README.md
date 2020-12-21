# @datafire/azure_azsadmin_delegatedprovideroffer

Client library for SubscriptionsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_delegatedprovideroffer
```
```js
let azure_azsadmin_delegatedprovideroffer = require('@datafire/azure_azsadmin_delegatedprovideroffer').create({
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

### DelegatedProviderOffers_List
Get the list of delegated provider offers.


```js
azure_azsadmin_delegatedprovideroffer.DelegatedProviderOffers_List({
  "subscriptionId": "",
  "delegatedProviderSubscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * delegatedProviderSubscriptionId **required** `string`: Delegated provider subscription identifier.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DelegatedProviderOfferList](#delegatedproviderofferlist)

### DelegatedProviderOffers_Get
Get the specified delegated provider offer.


```js
azure_azsadmin_delegatedprovideroffer.DelegatedProviderOffers_Get({
  "subscriptionId": "",
  "delegatedProviderSubscriptionId": "",
  "offer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * delegatedProviderSubscriptionId **required** `string`: Delegated provider subscription identifier.
  * offer **required** `string`: Name of an offer.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DelegatedProviderOffer](#delegatedprovideroffer)



## Definitions

### AccessibilityState
* AccessibilityState `string` (values: Private, Public, Decommissioned): Represents the state of the offer

### DelegatedProviderOffer
* DelegatedProviderOffer `object`: The delegated provider offer.
  * properties [DelegatedProviderOfferProperties](#delegatedproviderofferproperties)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.

### DelegatedProviderOfferList
* DelegatedProviderOfferList `object`: List of delegated provider offers.
  * nextLink `string`: Continuation token
  * value `array`: Array of delegated provider offers.
    * items [DelegatedProviderOffer](#delegatedprovideroffer)

### DelegatedProviderOfferProperties
* DelegatedProviderOfferProperties `object`: Properties for an delegated provider.
  * accessibilityState [AccessibilityState](#accessibilitystate)
  * delegatedOfferId `string`: The delegated offer identifier.
  * description `string`: Description of offer.
  * displayName `string`: Display name of offer.
  * externalReferenceId `string`: External reference identifier.
  * subscriptionCount `integer`: Current subscription count.


