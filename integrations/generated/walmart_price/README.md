# @datafire/walmart_price

Client library for Price

## Installation and Usage
```bash
npm install --save @datafire/walmart_price
```
```js
let walmart_price = require('@datafire/walmart_price').create();

walmart_price.updatePrice({
  "feedType": "",
  "file": "",
  "WM_CONSUMER.CHANNEL.TYPE": "",
  "WM_CONSUMER.ID": "",
  "WM_SEC.TIMESTAMP": "",
  "WM_SEC.AUTH_SIGNATURE": "",
  "WM_SVC.NAME": "",
  "WM_QOS.CORRELATION_ID": ""
}).then(data => {
  console.log(data);
});
```

## Description

Please make sure you use the correct version of the APIs for your use case. To find out the appropriate version, go to the API Docs  drop down on the menu.

## Actions

### updatePrice
You can upload a price feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need Your Consumer ID and the private key to upload the feed


```js
walmart_price.updatePrice({
  "feedType": "",
  "file": "",
  "WM_CONSUMER.CHANNEL.TYPE": "",
  "WM_CONSUMER.ID": "",
  "WM_SEC.TIMESTAMP": "",
  "WM_SEC.AUTH_SIGNATURE": "",
  "WM_SVC.NAME": "",
  "WM_QOS.CORRELATION_ID": ""
}, context)
```

#### Input
* input `object`
  * feedType **required** `string` (values: price, promo): Feed Type
  * file **required** `string`: Feed File to upload
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### getFeedsStatus
You can display the status of an item price within a feed. Use the feed ID returned from the upload a price feed API.


```js
walmart_price.getFeedsStatus({
  "feedId": "",
  "WM_CONSUMER.CHANNEL.TYPE": "",
  "WM_CONSUMER.ID": "",
  "WM_SEC.TIMESTAMP": "",
  "WM_SEC.AUTH_SIGNATURE": "",
  "WM_SVC.NAME": "",
  "WM_QOS.CORRELATION_ID": ""
}, context)
```

#### Input
* input `object`
  * feedId **required** `string`: The feed ID which status you want to retrieve.
  * includeDetails `string`: Includes details of each entity in the feed. Do not set this parameter to true.
  * offset `string`: The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
  * limit `string`: The number of entities to be returned. It cannot be more than 50 entities. Only used when includeDetails is set to true.
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
