# @datafire/adyen_checkoututilityservice

Client library for Adyen Checkout Utility Service

## Installation and Usage
```bash
npm install --save @datafire/adyen_checkoututilityservice
```
```js
let adyen_checkoututilityservice = require('@datafire/adyen_checkoututilityservice').create();

.then(data => {
  console.log(data);
});
```

## Description

A web service containing utility functions available for merchants integrating with Checkout APIs.
## Authentication
Each request to the Checkout Utility API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the Checkout API key](https://docs.adyen.com/developers/user-management/how-to-get-the-checkout-api-key). Then set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: Your_Checkout_API_key" \
...
```
Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/developers/api-reference/live-endpoints).

## Versioning
Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://checkout-test.adyen.com/v1/originKeys
```

## Actions

### originKeys.post
This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.


```js
adyen_checkoututilityservice.originKeys.post({}, context)
```

#### Input
* input `object`
  * body [CheckoutUtilityRequest](#checkoututilityrequest)

#### Output
* output [CheckoutUtilityResponse](#checkoututilityresponse)



## Definitions

### CheckoutUtilityRequest
* CheckoutUtilityRequest `object`
  * originDomains **required** `array`: The list of origin domains, for which origin keys are requested.
    * items `string`

### CheckoutUtilityResponse
* CheckoutUtilityResponse `object`
  * originKeys `object`: The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.


