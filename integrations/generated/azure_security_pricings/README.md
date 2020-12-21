# @datafire/azure_security_pricings

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_pricings
```
```js
let azure_security_pricings = require('@datafire/azure_security_pricings').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### Pricings_List
Lists Security Center pricing configurations in the subscription.


```js
azure_security_pricings.Pricings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [PricingList](#pricinglist)

### Pricings_Get
Gets a provided Security Center pricing configuration in the subscription.


```js
azure_security_pricings.Pricings_Get({
  "api-version": "",
  "subscriptionId": "",
  "pricingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * pricingName **required** `string`: name of the pricing configuration

#### Output
* output [Pricing](#pricing)

### Pricings_Update
Updates a provided Security Center pricing configuration in the subscription.


```js
azure_security_pricings.Pricings_Update({
  "api-version": "",
  "subscriptionId": "",
  "pricingName": "",
  "pricing": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * pricingName **required** `string`: name of the pricing configuration
  * pricing **required** [Pricing](#pricing)

#### Output
* output [Pricing](#pricing)



## Definitions

### Pricing
* Pricing `object`: Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
  * properties [PricingProperties](#pricingproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### PricingList
* PricingList `object`: List of pricing configurations response.
  * value **required** `array`: List of pricing configurations
    * items [Pricing](#pricing)

### PricingProperties
* PricingProperties `object`: Pricing properties for the relevant scope
  * freeTrialRemainingTime `string`: The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S).
  * pricingTier **required** `string` (values: Free, Standard): The pricing tier value. Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features.


