# @datafire/azure_azsadmin_offer

Client library for SubscriptionClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_offer
```
```js
let azure_azsadmin_offer = require('@datafire/azure_azsadmin_offer').create({
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

The User Subscription Management Client.

## Actions

### DelegatedProviderOffers_List
Get the list of offers for the specified delegated provider.


```js
azure_azsadmin_offer.DelegatedProviderOffers_List({
  "delegatedProviderId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * delegatedProviderId **required** `string`: Id of the delegated provider.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OfferList](#offerlist)

### DelegatedProviderOffers_Get
Get the specified offer for the delegated provider.


```js
azure_azsadmin_offer.DelegatedProviderOffers_Get({
  "delegatedProviderId": "",
  "offerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * delegatedProviderId **required** `string`: Id of the delegated provider.
  * offerName **required** `string`: Name of the offer.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Offer](#offer)

### Offers_List
Get the list of public offers for the root provider.


```js
azure_azsadmin_offer.Offers_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OfferList](#offerlist)



## Definitions

### Offer
* Offer `object`: Represents an offering of services against which a subscription can be created.
  * description `string`: Description of offer.
  * displayName `string`: Display name of offer.
  * id `string`: The offer ID
  * name `string`: The name of the offer.

### OfferList
* OfferList `object`: List of public offers.
  * nextLink `string`: URI to next page.
  * value `array`: List of public offers.
    * items [Offer](#offer)


