# @datafire/walmart_order

Client library for Orders

## Installation and Usage
```bash
npm install --save @datafire/walmart_order
```
```js
let walmart_order = require('@datafire/walmart_order').create();

walmart_order.getAllOrders({
  "Accept": "",
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

### getAllOrders
You can display a list of all orders with the query parameter filter criteria.


```js
walmart_order.getAllOrders({
  "Accept": "",
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
  * sku `string`: Retrieves all orders with the specified SKU.
  * customerOrderId `string`: Retrives the details of the specified customerOrderId.
  * purchaseOrderId `string`: The purchase order ID associated with the order to retrieve. One customer order can have multiple purchase orders associated with it.
  * status `string`: The list of orders corresponding to the requested status.
  * createdStartDate `string`: Limit orders to those created after this date or a timestamp.
  * createdEndDate `string`: Limit orders to those created before this date or timestamp.
  * fromExpectedShipDate `string`: Limit orders to those that have order lines with an expected ship date after this date.
  * toExpectedShipDate `string`: Limit orders to those that have order lines with an expected ship date before this date. 
  * limit `integer`: The number of orders to be returned. Do not set this parameter to over 200 orders.
  * nextCursor `integer`: Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call.
  * Accept **required** `string`: application/xml
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### getReleasedOrders
You can display all released orders that have been created and are ready for fulfilment.


```js
walmart_order.getReleasedOrders({
  "createdStartDate": "",
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
  * createdStartDate **required** `string`: Limit orders to those created after this date or a timestamp.
  * limit `integer`: The number of orders to be returned. Do not set this parameter to over 200 orders.
  * nextCursor `integer`: Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call.
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### getOrderByPurchaseOrderId
You can display details of a specific order based on the purchaseOrderId.


```js
walmart_order.getOrderByPurchaseOrderId({
  "purchaseOrderId": "",
  "Accept": "",
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
  * purchaseOrderId **required** `string`: Purchase Order ID
  * Accept **required** `string`: application/xml
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### acknowledgeOrders
You can acknowledge an entire order, including all of its order lines. Walmart business rules require to acknowledge orders within four hour of receipt of the order, except in extenuating circumstances.


```js
walmart_order.acknowledgeOrders({
  "purchaseOrderId": "",
  "Accept": "",
  "Content-Type": "",
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
  * purchaseOrderId **required** `string`: Purchase Order ID
  * Accept **required** `string`: application/xml
  * Content-Type **required** `string`: application/xml
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### cancelOrder
You can cancel one or more order lines. You must include a purchaseOrderLineNumber when cancelling an order. After cancelling your order, update the inventory for the cancelled order and send it in the next inventory feed.


```js
walmart_order.cancelOrder({
  "purchaseOrderId": "",
  "Accept": "",
  "Content-Type": "",
  "Request body": "",
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
  * purchaseOrderId **required** `string`: Purchase Order ID
  * Accept **required** `string`: application/xml
  * Content-Type **required** `string`: application/xml
  * Request body **required** `string`
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### refundOrder
You can refund one or more order lines that have been shipped. The response to a successful call contains the order with the refunded line item.


```js
walmart_order.refundOrder({
  "purchaseOrderId": "",
  "Accept": "",
  "Content-Type": "",
  "Request body": "",
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
  * purchaseOrderId **required** `string`: Purchase Order ID
  * Accept **required** `string`: application/xml
  * Content-Type **required** `string`: application/xml
  * Request body **required** `string`
  * WM_CONSUMER.CHANNEL.TYPE **required** `string` (values: SWAGGER_CHANNEL_TYPE): Channel Type
  * WM_CONSUMER.ID **required** `string`: Your Consumer ID
  * WM_SEC.TIMESTAMP **required** `string`: Epoch timestamp
  * WM_SEC.AUTH_SIGNATURE **required** `string`: Authentication signature
  * WM_SVC.NAME **required** `string`: The Service name
  * WM_QOS.CORRELATION_ID **required** `string`: A Transaction ID

#### Output
*Output schema unknown*

### shippingOrder
You can change the status of order lines to "Shipped" and trigger the charge to a customer. You must acknowledge your orders before sending a shipping update to avoid underselling. An order line, once marked as shipped, cannot be updated.


```js
walmart_order.shippingOrder({
  "purchaseOrderId": "",
  "Accept": "",
  "Content-Type": "",
  "Request body": "",
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
  * purchaseOrderId **required** `string`: Purchase Order ID
  * Accept **required** `string`: application/xml
  * Content-Type **required** `string`: application/xml
  * Request body **required** `string`
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
