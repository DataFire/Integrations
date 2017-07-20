# @datafire/beezup

Client library for BeezUP

## Installation and Usage
```bash
npm install --save datafire @datafire/beezup
```

```js
let datafire = require('datafire');
let beezup = require('@datafire/beezup').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    beezup: account,
  }
})

beezup.GetOrderListLight({}, context).then(data => {
  console.log(data);
})
```

## Description
# The REST API of BeezUP system
## Overview
The REST APIs provide programmatic access to read and write BeezUP data. 
Basically, with this API you will be able to do everything like you were with your browser on https://go.beezup.com !

The main features are:
- Register and manage your account
- Create and manage and share your stores with your friends/co-workers.
- Import your product catalog and schedule the auto importation
- Search the channels your want to use
- Configure your channels for your catalogs to export your product information:
    - cost and general settings
    - category and columns mappings
    - your will be able to create and manage your custom column
    - put in place exlusion filters based on simple conditions on your product data
    - override product values
    - get product vision for a channel catalog scope
- Analyze and optimize your performance of your catalogs on all yours channels with different type of reportings by day, channel, category and by product.
- Automatize your optimisation by using rules!
- And of course... Manage your orders harvested from all your marketplaces:
    - Synchronize your orders in an uniformized way
    - Get the available actions and update the order status
- ...and more!

## Authentication credentials
The public API with the base path **/v2/public** have been put in place to give you an entry point to our system for the user registration, login and lost password. The public API does not require any credentials.
We give you the some public list of values and public channels for our public commercial web site [www.beezup.com](http://www.beezup.com).

The user API with the base path **/v2/user** requires a token which is available on this page:
https://go.beezup.com/Account/MyAccount

## Things to keep in mind
### API Rate Limits
- The BeezUP REST API is limited to 100 calls/minute.

### Media type
The default media type for requests and responses is application/json. Where noted, some operations support other content types. If no additional content type is mentioned for a specific operation, then the media type is application/json.

### Required content type
The required and default encoding for the request and responses is UTF8.

### Required date time format
All our date time are formatted in ISO 8601 format: 2014-06-24T16:25:00Z.

### Base URL
The Base URL of the BeezUP API Order Management REST API conforms to the following template.

https://api.beezup.com

All URLs returned by the BeezUP API are relative to this base URL, and all requests to the REST API must use this base URL template.

You can test our API on https://api-docs.beezup.com/swagger-ui\
You can contact us on [gitter, #BeezUP/API](https://gitter.im/beezUP/API)


## Actions
### GetAutomaticTransitions
Get automatic order status transition list


```js
beezup.GetAutomaticTransitions(null, context)
```


### ConfigureAutomaticTransitions
Configure automatic order status transitions


```js
beezup.ConfigureAutomaticTransitions({
  "request": {
    "automaticTransitions": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### ChangeOrderList
The purpose of this  operation is to reduce the amount of request to the API.


```js
beezup.ChangeOrderList({
  "changeOrderType": "",
  "userName": "",
  "request": {
    "changeOrders": []
  }
}, context)
```

#### Parameters
* changeOrderType (string) **required** - The order change type
* userName (string) **required** - Sometimes the user in the e-commerce application is not the same than the subscription key you indicate in your settings. We recommand you to indicate the login of the user in your appplication.
* testMode (boolean) - If true, the operation will be be commited. But the validation will be taken in account.
* request (object) **required** - Contains all change order operations you want to make

### ClearMerchantOrderInfoList
The purpose of this  operation is to reduce the amount of request to the API.


```js
beezup.ClearMerchantOrderInfoList({
  "request": {
    "orders": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### SetMerchantOrderInfoList
The purpose of this  operation is to reduce the amount of request to the API.


```js
beezup.SetMerchantOrderInfoList({
  "request": {
    "orders": []
  }
}, context)
```

#### Parameters
* request (object) **required**

### GetOrderExportations
Get the order exportation list


```js
beezup.GetOrderExportations({
  "pageNumber": 0,
  "pageSize": 0
}, context)
```

#### Parameters
* pageNumber (integer) **required** - The page number you want to get
* pageSize (integer) **required** - The count of orders exportation you want to get

### ExportOrders
This will create a file with all your orders related to your filter


```js
beezup.ExportOrders({
  "format": "",
  "request": {
    "orderListRequest": {}
  }
}, context)
```

#### Parameters
* format (string) **required** - The type of the file to export
* request (object) **required**

### HarvestAll
Harvest orders from all marketplaces


```js
beezup.HarvestAll(null, context)
```


### GetOrderListFull
The purpose of this API is to reduce the request count.


```js
beezup.GetOrderListFull({
  "Accept-Encoding": []
}, context)
```

#### Parameters
* Accept-Encoding (array) **required** - Indicates that the client accepts that the response will be compressed to reduce traffic size.
* request (object)

### GetOrderListLight
Get order list without details


```js
beezup.GetOrderListLight({}, context)
```

#### Parameters
* request (object)

### GetMarketplaceAccountsSynchronization
Get marketplace accounts synchronization status


```js
beezup.GetMarketplaceAccountsSynchronization(null, context)
```


### GetOrder
Get order details


```js
beezup.GetOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The order BeezUP identifier

### ClearMerchantOrderInfo
Clear the merchant info related to this order


```js
beezup.ClearMerchantOrderInfo({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The order BeezUP identifier

### HarvestOrder
Harvest a specific order from the marketplace


```js
beezup.HarvestOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The order BeezUP identifier

### GetOrderHistory
Get the harvest history and the change status operations


```js
beezup.GetOrderHistory({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": ""
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The order BeezUP identifier

### SetMerchantOrderInfo
Associate your merchant order identifier to this order


```js
beezup.SetMerchantOrderInfo({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": "",
  "request": {
    "order_MerchantOrderId": ""
  }
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The order BeezUP identifier
* request (object) **required**

### ChangeOrder
Change order status


```js
beezup.ChangeOrder({
  "marketplaceTechnicalCode": "",
  "accountId": 0,
  "beezUPOrderId": "",
  "changeOrderType": "",
  "userName": "",
  "request": {}
}, context)
```

#### Parameters
* marketplaceTechnicalCode (string) **required** - The marketplace technical code
* accountId (integer) **required** - The account identifier
* beezUPOrderId (string) **required** - The order BeezUP identifier
* changeOrderType (string) **required** - The order change type
* userName (string) **required** - Sometimes the user in the e-commerce application is not the same than the subscription key you indicate in your settings. We recommand you to indicate the login of the user in your appplication.
* testMode (boolean) - If true, the operation will be be commited. But the validation will be taken in account.
* request (object) **required** - All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoPosted

