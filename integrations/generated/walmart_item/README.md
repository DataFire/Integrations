# @datafire/walmart_item

Client library for Item

## Installation and Usage
```bash
npm install --save @datafire/walmart_item
```
```js
let walmart_item = require('@datafire/walmart_item').create();

walmart_item.v2.feeds.get({
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

### v2.feeds.get
You can display the status of an item within a feed. Use the feed ID returned from the upload an item API.


```js
walmart_item.v2.feeds.get({
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
  * feedId `string`: The feed ID.
  * includeDetails `string`: Includes the status details for each item in the feed. Do not set this parameter to true as discrepancies may appear between the header and the item details (the item details may be incorrect). Instead, use the Get a feedItems status.
  * offset `string`: The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
  * limit `string`: The number of items to be returned. Cannot be more than 50 items. Use it only when the includeDetails is set to true.
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### v2.feeds.post
You can upload an item feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need your Consumer ID and the Private Key to upload an item.


```js
walmart_item.v2.feeds.post({
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
  * feedType `string` (values: item): Feed Type
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

### v2.feeds.feedId.get
You can display the status of all items within a feed. Use the feed ID returned from the upload an item API.


```js
walmart_item.v2.feeds.feedId.get({
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
  * feedId **required** `string`: The feed ID
  * includeDetails `string`: Includes details of each entity in the feed. Do not set this parameter to true.
  * offset `string`: The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
  * limit `string`: The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true.
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### v3.feeds.get
You can display the status of an item within a feed. Use the feed ID returned from the upload an item API.


```js
walmart_item.v3.feeds.get({
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
  * feedId `string`: The feed ID.
  * includeDetails `string`: Includes the status details for each item in the feed. Do not set this parameter to true as discrepancies may appear between the header and the item details (the item details may be incorrect). Instead, use the Get a feedItems status.
  * offset `string`: The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
  * limit `string`: The number of items to be returned. Cannot be more than 50 items. Use it only when the includeDetails is set to true.
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### v3.feeds.post
You can upload an item feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need your Consumer ID and the Private Key to upload an item.


```js
walmart_item.v3.feeds.post({
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
  * feedType `string` (values: item, SUPPLIER_FULL_ITEM, CONTENT_PRODUCT): Feed Type
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

### v3.feeds.feedId.get
You can display the status of all items within a feed. Use the feed ID returned from the upload an item API.


```js
walmart_item.v3.feeds.feedId.get({
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
  * feedId **required** `string`: The feed ID
  * includeDetails `string`: Includes details of each entity in the feed. Do not set this parameter to true.
  * offset `string`: The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
  * limit `string`: The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true.
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
