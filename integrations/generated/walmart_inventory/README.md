# @datafire/walmart_inventory

Client library for Inventory

## Installation and Usage
```bash
npm install --save @datafire/walmart_inventory
```
```js
let walmart_inventory = require('@datafire/walmart_inventory').create();

.then(data => {
  console.log(data);
});
```

## Description

Please make sure you use the correct version of the APIs for your use case. To find out the appropriate version, go to the API Docs  drop down on the menu.

## Actions

### v2.feeds.post
You can upload an inventory feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need Your Consumer ID and the private key to upload the feed


```js
walmart_inventory.v2.feeds.post({
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
  * feedType **required** `string` (values: inventory): Feed Type
  * file **required** `string`, `object`: Feed File to upload
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### v2.inventory.get
This endpoint retrieves inventory for a given item.


```js
walmart_inventory.v2.inventory.get({
  "sku": "",
  "WM_CONSUMER.CHANNEL.TYPE": "",
  "WM_CONSUMER.ID": "",
  "WM_SEC.TIMESTAMP": "",
  "WM_SEC.AUTH_SIGNATURE": "",
  "WM_SVC.NAME": "",
  "WM_QOS.CORRELATION_ID": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`: The SKU (seller-provided product identifier) of the item whose inventory we are retrieving
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your consumer id
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: Service name
  * WM_QOS.CORRELATION_ID **required** `string`: Correlation id
  * Accept **required** `string`: application/xml

#### Output
*Output schema unknown*

### v3.feeds.post
You can upload an inventory feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need Your Consumer ID and the private key to upload the feed


```js
walmart_inventory.v3.feeds.post({
  "feedType": "",
  "shipNode": "",
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
  * feedType **required** `string` (values: inventory): Feed Type
  * shipNode **required** `string`: Ship Node
  * file **required** `string`, `object`: Feed File to upload
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### v3.inventory.get
This endpoint retrieves inventory for a given item.


```js
walmart_inventory.v3.inventory.get({
  "sku": "",
  "shipNode": "",
  "WM_CONSUMER.CHANNEL.TYPE": "",
  "WM_CONSUMER.ID": "",
  "WM_SEC.TIMESTAMP": "",
  "WM_SEC.AUTH_SIGNATURE": "",
  "WM_SVC.NAME": "",
  "WM_QOS.CORRELATION_ID": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * sku **required** `string`: The SKU (seller-provided product identifier) of the item whose inventory we are retrieving
  * shipNode **required** `string`: Ship Node
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your consumer id
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: Service name
  * WM_QOS.CORRELATION_ID **required** `string`: Correlation id
  * Accept **required** `string`: application/xml

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
