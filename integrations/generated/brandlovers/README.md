# @datafire/brandlovers

Client library for BrandLovers Marketplace API V1

## Installation and Usage
```bash
npm install --save datafire @datafire/brandlovers
```

```js
let datafire = require('datafire');
let brandlovers = require('@datafire/brandlovers').actions;

let account = {
  authorization: "",
}
let context = new datafire.Context({
  accounts: {
    brandlovers: account,
  }
})

brandlovers.order.orderId.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Allows sellers to: 1) Load products definitions to the BrandLovers marktplace. 2) Receive and update orders status. 3) Receive and update shipping information. 4) Receive and update customer tickets. All requests consume and return application/json content. All request must be authenticated and use HTTPS.

## Actions
### order.orderId.get
Returns all details of a single order, including last status, items shipped or not.


```js
brandlovers.order.orderId.get({
  "authorization": "",
  "orderId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* orderId (string) **required** - Unique Id of this order.

### order.orderId.shipment.cancel.post
Confirm shipment canceletion (when requested by the customer) or failure to deliver one shipment


```js
brandlovers.order.orderId.shipment.cancel.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (undefined) **required**
* orderId (string) **required** - Unique Order Id

### order.orderId.shipment.delivered.post
Confirms that a shipment was delivered. Must inform quantity of successfully deliverd items even if items deliverd was less than the original order


```js
brandlovers.order.orderId.shipment.delivered.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (undefined) **required**
* orderId (string) **required** - Unique Order Id

### order.orderId.shipment.exchange.post
This enpoint to confirm item exchange when failure to deliver or requested by the customer. All customer requests are tracket via trouble tickets


```js
brandlovers.order.orderId.shipment.exchange.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (undefined) **required**
* orderId (string) **required** - Unique Order Id

### order.orderId.shipment.return.post
Use this endpoint to return and refund items froma a order. In order to fully return an order list all items and applicate quantity.


```js
brandlovers.order.orderId.shipment.return.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (undefined) **required**
* orderId (string) **required** - Order unique Id

### order.orderId.shipment.sent.post
Updates order to include shipment shiped information. This endpoint can be used to include a single or multiple shipments for any give order. In order to inform that all items of a order where shipped list all of them, including applicable quantities in the payload.


```js
brandlovers.order.orderId.shipment.sent.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (undefined) **required**
* orderId (string) **required** - Unique Order Id

### orders.get
Retuns a list of orders associated with this seller. The list is ordered by dateCreated.


```js
brandlovers.orders.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### orders.shipments.delivered.get
Returns list of shipments. By default this will return list of the last shipments ordered by dateCreated, folowed by last update date.


```js
brandlovers.orders.shipments.delivered.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* status (string) - Query by shippment status.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### orders.shipments.delivered.post
Bulk update of order shipments status. This alows to inform multiple shipments status


```js
brandlovers.orders.shipments.delivered.post({
  "authorization": "",
  "ordersshipments": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* ordersshipments (undefined) **required**

### orders.shipments.shipped.get
Returns a list of shipments shipped. By Default returns items ordered by dateCreated folowed by last update


```js
brandlovers.orders.shipments.shipped.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* status (string) - Product status.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### orders.shipments.shipped.post
Allows bulk updates of orders shippments.


```js
brandlovers.orders.shipments.shipped.post({
  "ordersshipments": null
}, context)
```

#### Parameters
* ordersshipments (undefined) **required**

### orders.status.approved.get
Returns a list of approved orders. Orders in the `approved` state must be fullfiled imediadetelly.


```js
brandlovers.orders.status.approved.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 100, max 200. Use this in conjuction with `offset` to paginate across the results.

### orders.status.canceled.get
Returns a list with canceled orders. Canceled orders should not be fullfiled.


```js
brandlovers.orders.status.canceled.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Default 100, max 250. Use this conjuction with `offset` to paginate across the results.

### orders.status.delivered.get
Returns a list of orders successfully delivered associated with this seller.


```js
brandlovers.orders.status.delivered.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### orders.status.new.get
Returns a list of orders flagged as new. New orders should not be fullfiled until marketplace flags them as approved.


```js
brandlovers.orders.status.new.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results.

### orders.status.partiallyDelivered.get
Returns a list of partially deliverd orders. This is a list of orders with items shipped but with not all items ackwlodged as deliverd


```js
brandlovers.orders.status.partiallyDelivered.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results.

### orders.status.partiallySent.get
Returns a list of orders that contain one (or more) items that where not shipped. This will list the entire order as well the items with peding shipment. Use this service to track orders that need to be fullfiled.


```js
brandlovers.orders.status.partiallySent.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 100. Use this conjuction with `offset` to paginate across the results.

### orders.status.sent.get
Returns a list with orders completely fullfiled, this means orders with all items sent. Orders will ordered by dateCreated fowllowed by last update


```js
brandlovers.orders.status.sent.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### product.post
Use this enpoint to create a single new product to the Marketplace. This enpoint expects a json document with one product. If you whant to upload multiple products in a single API call use POST /products method. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. This system is idenpontent, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update, edit a product use the PUT method with the correct reference to your `skuSellerId`


```js
brandlovers.product.post({
  "authorization": "",
  "product": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* product (undefined) **required**

### product.skuSellerId.get
Returns detailed information of a single product with the seller `skuSellerId`. This service will return a json document with product detail, status, price, invetory among other infomarion availble in the Brand Lovers marketplace


```js
brandlovers.product.skuSellerId.get({
  "authorization": "",
  "skuSellerId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* skuSellerId (string) **required** - SKU ID do Lojista.

### product.skuSellerId.put
Update a single product information such as name, brand, attribute, dimension, etc. Please note that data from your request will be merged with existing data. This allows you to easliy update only certain fields without the need to re-inform the other unchanged fields. For example in order to update just the field `title` simply send just this field with new information, remaining fields will not be changed. In order to erase an item the field must be informed as its default value, for example in order to erase the `videos` field must be sent as videos:[]. The `skuSellerId` field is always mandatory in the path and in the product json Object.


```js
brandlovers.product.skuSellerId.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* skuSellerId (string) **required** - Unique Product Id (SKU) in the seller system that will be updated.
* body (undefined) **required**

### product.skuSellerId.prices.put
Allows seller to set the SKU prices (MSRP and/or offer price). All prices must be informed in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. Same as $1,2345.67 must be informed solely as 1234567


```js
brandlovers.product.skuSellerId.prices.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* skuSellerId (string) **required** - Product SKU
* body (undefined) **required**

### product.skuSellerId.status.put
Update product status in the Marketplace. Set to `true` to enable, `false` to disable sale.


```js
brandlovers.product.skuSellerId.status.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* skuSellerId (string) **required** - Unique Product Id (SKU) in the seller system
* body (undefined) **required**

### product.skuSellerId.stock.put
Update a single product inventory information. Products with zero stock will not be eligible for sale.


```js
brandlovers.product.skuSellerId.stock.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* skuSellerId (string) **required** - Unique Product Id (SKU) in the seller system that will be updated
* body (undefined) **required**

### products.get
Get a list of my products loaded into the Marketplace. This dosen't means that products are eligible for sale, just that they are loaded in the database.


```js
brandlovers.products.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number of items to retun. Defaults to 100. Max alowed is 200. Use this conjuction with `offset` to paginate across the results.

### products.post
This enpoint to creates new products in the Marketplace using `skuSellerId` as a primary key. This enpoint expects a json document with array of products. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. All requests to This endpoint are idenpontent with respect of the `skuSellerId`, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update use the PUT method with the correct `skuSellerId`. You can also use the POST /product to create a single product per request


```js
brandlovers.products.post({
  "authorization": "",
  "products": []
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* products (array) **required**

### products.prices.put
Allows bulk update of product prices. This endpoint expects a json document with an array of products with the `skuSellerId` and the new price. Server will process each new product update individually and will ackwlodge as much updates as possible, even if a single product update fails. After this request you can query product final status with GET /product/status


```js
brandlovers.products.prices.put({
  "authorization": "",
  "body": []
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (array) **required**

### products.status.get
Returns a list with seller products status. Please note that this endpoint will not return all details of each product, just the skuSellerId and status. Also please note that this endpoint will return 250 products per call. For full details of a given procuct use GET /product/{skuSellerId}


```js
brandlovers.products.status.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number of items to return in this query. Defaults to 250. Maximum 1000. Use this conjuction with `offset` to paginate across the results.

### products.status.put
Bulk enable/disable products in the marketplace. This endpoint requires an array of objects with the seller SKU `skuSellerId` and boolean value that defines if the product is enabled or not for sale. This endpoint can be used to set a single product or many products.


```js
brandlovers.products.status.put({
  "authorization": "",
  "body": []
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (array) **required**

### products.status.selling.get
Returns products that are successfully listed for sale.


```js
brandlovers.products.status.selling.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### products.stocks.put
Bulk product stock update. This endpoint expect a array of products `skuSellerId` with new inventory data


```js
brandlovers.products.stocks.put({
  "authorization": "",
  "body": []
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* body (array) **required**

### ticket.post
Use this service to create a new trouble ticket. Use this to include relevant information about the order, comunicate with the customer or marketplace team. Whenever possible message will be pushed to Mobile first. This is the primary mean of comunicaiton with the customer regarding orders, shippments, shippments status. New tickets will be automatically be set to 'OPEN'. Trouble tickets need to be associated with a orderId or customer. New tickets can optionally include a new message.


```js
brandlovers.ticket.post({
  "authorization": "",
  "newTicket": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* newTicket (undefined) **required**

### ticket.ticketId.message.post
Add a new message to this trouble ticket. Messages can be `CUSTOMER` (customer will be able to see it) or `INTERNAL`.


```js
brandlovers.ticket.ticketId.message.post({
  "authorization": "",
  "ticketId": "",
  "message": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* ticketId (string) **required** - Trouble ticket ID.
* message (undefined) **required**

### ticket.ticketId.messages.get
Returns trouble ticket history with all messages exchanged. Only tickets related to your seller will be returned. Attempt to read other tickets will return 403 (acess denied).


```js
brandlovers.ticket.ticketId.messages.get({
  "authorization": "",
  "ticketId": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* ticketId (string) **required** - Trouble ticket ID.
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

### ticket.ticketId.status.put
Alows the seller to update the status of a trouble ticket


```js
brandlovers.ticket.ticketId.status.put({
  "authorization": "",
  "ticketId": "",
  "body": null
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* ticketId (string) **required** - Trouble ticket unique identification
* body (undefined) **required**

### tickets.get
Allows seller to receive and status, queries, requests and complaints from customers. As well related messages


```js
brandlovers.tickets.get({
  "authorization": ""
}, context)
```

#### Parameters
* authorization (string) **required** - Authorization token. The Authorization token can be found in your Admin console.
* status (string) - Query by trouble ticket status
* offset (integer) - Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
* limit (integer) - Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

