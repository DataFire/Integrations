# @datafire/jirafe

Client library for Jirafe Events

## Installation and Usage
```bash
npm install --save datafire @datafire/jirafe
```

```js
let datafire = require('datafire');
let jirafe = require('@datafire/jirafe').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    jirafe: account,
  }
})


jirafe.postBatch({}, context).then(data => {
  console.log(data);
})
```

## Description
API endpoins for sending Jirafe events

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
jirafe.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
jirafe.oauthRefresh(null, context)
```


### postBatch
Send a batch for the given site


```js
jirafe.postBatch({
  "siteId": "",
  "body": {}
}, context)
```

#### Parameters
* siteId (string) **required** - ID site to send the event
* body (object) **required**

### postCart
Send a cart for the given site


```js
jirafe.postCart({
  "siteId": "",
  "body": {
    "id": "",
    "create_date": "",
    "change_date": "",
    "subtotal": 0,
    "total": 0,
    "total_tax": 0,
    "total_shipping": 0,
    "total_payment_cost": 0,
    "total_discounts": 0,
    "currency": "",
    "customer": {
      "id": "",
      "create_date": "",
      "change_date": ""
    },
    "items": []
  }
}, context)
```

#### Parameters
* siteId (string) **required** - ID site to send the event
* body (object) **required**

### postCategory
Send a category for the given site


```js
jirafe.postCategory({
  "siteId": "",
  "body": {
    "id": "",
    "name": ""
  }
}, context)
```

#### Parameters
* siteId (string) **required** - ID site to send the event
* body (object) **required**

### postCustomer
Send a customer for the given site


```js
jirafe.postCustomer({
  "siteId": "",
  "body": {
    "id": "",
    "create_date": "",
    "change_date": ""
  }
}, context)
```

#### Parameters
* siteId (string) **required** - ID site to send the event
* body (object) **required**

### postOrderCancelled
Send a order for the given site


```js
jirafe.postOrderCancelled({
  "siteId": "",
  "body": {
    "order_number": "",
    "cancel_date": "",
    "status": ""
  }
}, context)
```

#### Parameters
* siteId (string) **required** - ID site to send the event
* body (object) **required**

### postProduct
Send a product for the given site


```js
jirafe.postProduct({
  "siteId": "",
  "body": {
    "id": "",
    "is_order": true,
    "is_sku": true,
    "code": "",
    "create_date": "",
    "change_date": ""
  }
}, context)
```

#### Parameters
* siteId (string) **required** - ID site to send the event
* body (object) **required**

