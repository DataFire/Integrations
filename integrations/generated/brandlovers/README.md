# @datafire/brandlovers

Client library for BrandLovers Marketplace API V1

## Installation and Usage
```bash
npm install --save @datafire/brandlovers
```
```js
let brandlovers = require('@datafire/brandlovers').create({
  authorization: ""
});

brandlovers.order.orderId.get({
  "authorization": "",
  "orderId": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * orderId **required** `string`: Unique Id of this order.

#### Output
* output [Order](#order)

### order.orderId.shipment.cancel.post
Confirm shipment canceletion (when requested by the customer) or failure to deliver one shipment


```js
brandlovers.order.orderId.shipment.cancel.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** [NewTrackingRefund](#newtrackingrefund)
  * orderId **required** `string`: Unique Order Id

#### Output
*Output schema unknown*

### order.orderId.shipment.delivered.post
Confirms that a shipment was delivered. Must inform quantity of successfully deliverd items even if items deliverd was less than the original order


```js
brandlovers.order.orderId.shipment.delivered.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** [Newshipmentstatus](#newshipmentstatus)
  * orderId **required** `string`: Unique Order Id

#### Output
*Output schema unknown*

### order.orderId.shipment.exchange.post
This enpoint to confirm item exchange when failure to deliver or requested by the customer. All customer requests are tracket via trouble tickets


```js
brandlovers.order.orderId.shipment.exchange.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** [NewTrackingRefund](#newtrackingrefund)
  * orderId **required** `string`: Unique Order Id

#### Output
*Output schema unknown*

### order.orderId.shipment.return.post
Use this endpoint to return and refund items froma a order. In order to fully return an order list all items and applicate quantity.


```js
brandlovers.order.orderId.shipment.return.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** [NewTrackingRefund](#newtrackingrefund)
  * orderId **required** `string`: Order unique Id

#### Output
*Output schema unknown*

### order.orderId.shipment.sent.post
Updates order to include shipment shiped information. This endpoint can be used to include a single or multiple shipments for any give order. In order to inform that all items of a order where shipped list all of them, including applicable quantities in the payload.


```js
brandlovers.order.orderId.shipment.sent.post({
  "authorization": "",
  "body": null,
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** [Newshipmentstatus](#newshipmentstatus)
  * orderId **required** `string`: Unique Order Id

#### Output
*Output schema unknown*

### orders.get
Retuns a list of orders associated with this seller. The list is ordered by dateCreated.


```js
brandlovers.orders.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.shipments.delivered.get
Returns list of shipments. By default this will return list of the last shipments ordered by dateCreated, folowed by last update date.


```js
brandlovers.orders.shipments.delivered.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * status `string`: Query by shippment status.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrdersShipments](#getordersshipments)

### orders.shipments.delivered.post
Bulk update of order shipments status. This alows to inform multiple shipments status


```js
brandlovers.orders.shipments.delivered.post({
  "authorization": "",
  "ordersshipments": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * ordersshipments **required** [OrdersShipments](#ordersshipments)

#### Output
*Output schema unknown*

### orders.shipments.shipped.get
Returns a list of shipments shipped. By Default returns items ordered by dateCreated folowed by last update


```js
brandlovers.orders.shipments.shipped.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * status `string` (values: NEW, APPROVED, DECLINED, PENDING): Product status.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrdersShipments](#getordersshipments)

### orders.shipments.shipped.post
Allows bulk updates of orders shippments.


```js
brandlovers.orders.shipments.shipped.post({
  "ordersshipments": null
}, context)
```

#### Input
* input `object`
  * ordersshipments **required** [OrdersShipments](#ordersshipments)

#### Output
*Output schema unknown*

### orders.status.approved.get
Returns a list of approved orders. Orders in the `approved` state must be fullfiled imediadetelly.


```js
brandlovers.orders.status.approved.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 100, max 200. Use this in conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.status.canceled.get
Returns a list with canceled orders. Canceled orders should not be fullfiled.


```js
brandlovers.orders.status.canceled.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Default 100, max 250. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.status.delivered.get
Returns a list of orders successfully delivered associated with this seller.


```js
brandlovers.orders.status.delivered.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.status.new.get
Returns a list of orders flagged as new. New orders should not be fullfiled until marketplace flags them as approved.


```js
brandlovers.orders.status.new.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.status.partiallyDelivered.get
Returns a list of partially deliverd orders. This is a list of orders with items shipped but with not all items ackwlodged as deliverd


```js
brandlovers.orders.status.partiallyDelivered.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.status.partiallySent.get
Returns a list of orders that contain one (or more) items that where not shipped. This will list the entire order as well the items with peding shipment. Use this service to track orders that need to be fullfiled.


```js
brandlovers.orders.status.partiallySent.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 100. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### orders.status.sent.get
Returns a list with orders completely fullfiled, this means orders with all items sent. Orders will ordered by dateCreated fowllowed by last update


```js
brandlovers.orders.status.sent.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetOrders](#getorders)

### product.post
Use this enpoint to create a single new product to the Marketplace. This enpoint expects a json document with one product. If you whant to upload multiple products in a single API call use POST /products method. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. This system is idenpontent, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update, edit a product use the PUT method with the correct reference to your `skuSellerId`


```js
brandlovers.product.post({
  "authorization": "",
  "product": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * product **required** [Product](#product)

#### Output
*Output schema unknown*

### product.skuSellerId.get
Returns detailed information of a single product with the seller `skuSellerId`. This service will return a json document with product detail, status, price, invetory among other infomarion availble in the Brand Lovers marketplace


```js
brandlovers.product.skuSellerId.get({
  "authorization": "",
  "skuSellerId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * skuSellerId **required** `string`: SKU ID do Lojista.

#### Output
* output [GetProduct](#getproduct)

### product.skuSellerId.put
Update a single product information such as name, brand, attribute, dimension, etc. Please note that data from your request will be merged with existing data. This allows you to easliy update only certain fields without the need to re-inform the other unchanged fields. For example in order to update just the field `title` simply send just this field with new information, remaining fields will not be changed. In order to erase an item the field must be informed as its default value, for example in order to erase the `videos` field must be sent as videos:[]. The `skuSellerId` field is always mandatory in the path and in the product json Object.


```js
brandlovers.product.skuSellerId.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system that will be updated.
  * body **required** [ProductUpdate](#productupdate)

#### Output
*Output schema unknown*

### product.skuSellerId.prices.put
Allows seller to set the SKU prices (MSRP and/or offer price). All prices must be informed in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. Same as $1,2345.67 must be informed solely as 1234567


```js
brandlovers.product.skuSellerId.prices.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * skuSellerId **required** `string`: Product SKU
  * body **required** [ProductPrice](#productprice)

#### Output
*Output schema unknown*

### product.skuSellerId.status.put
Update product status in the Marketplace. Set to `true` to enable, `false` to disable sale.


```js
brandlovers.product.skuSellerId.status.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system
  * body **required** [SellerItemStatus](#selleritemstatus)

#### Output
*Output schema unknown*

### product.skuSellerId.stock.put
Update a single product inventory information. Products with zero stock will not be eligible for sale.


```js
brandlovers.product.skuSellerId.stock.put({
  "authorization": "",
  "skuSellerId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system that will be updated
  * body **required** [Stock](#stock)

#### Output
*Output schema unknown*

### products.get
Get a list of my products loaded into the Marketplace. This dosen't means that products are eligible for sale, just that they are loaded in the database.


```js
brandlovers.products.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number of items to retun. Defaults to 100. Max alowed is 200. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetProductsResponse](#getproductsresponse)

### products.post
This enpoint to creates new products in the Marketplace using `skuSellerId` as a primary key. This enpoint expects a json document with array of products. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. All requests to This endpoint are idenpontent with respect of the `skuSellerId`, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update use the PUT method with the correct `skuSellerId`. You can also use the POST /product to create a single product per request


```js
brandlovers.products.post({
  "authorization": "",
  "products": []
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * products **required** `array`
    * items [Product](#product)

#### Output
*Output schema unknown*

### products.prices.put
Allows bulk update of product prices. This endpoint expects a json document with an array of products with the `skuSellerId` and the new price. Server will process each new product update individually and will ackwlodge as much updates as possible, even if a single product update fails. After this request you can query product final status with GET /product/status


```js
brandlovers.products.prices.put({
  "authorization": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** `array`
    * items [SellerItemPrices](#selleritemprices)

#### Output
*Output schema unknown*

### products.status.get
Returns a list with seller products status. Please note that this endpoint will not return all details of each product, just the skuSellerId and status. Also please note that this endpoint will return 250 products per call. For full details of a given procuct use GET /product/{skuSellerId}


```js
brandlovers.products.status.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number of items to return in this query. Defaults to 250. Maximum 1000. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetSellerProductsStatus](#getsellerproductsstatus)

### products.status.put
Bulk enable/disable products in the marketplace. This endpoint requires an array of objects with the seller SKU `skuSellerId` and boolean value that defines if the product is enabled or not for sale. This endpoint can be used to set a single product or many products.


```js
brandlovers.products.status.put({
  "authorization": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** `array`
    * items [ProductStatusUpdate](#productstatusupdate)

#### Output
*Output schema unknown*

### products.status.selling.get
Returns products that are successfully listed for sale.


```js
brandlovers.products.status.selling.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetProductsStatusSelling](#getproductsstatusselling)

### products.stocks.put
Bulk product stock update. This endpoint expect a array of products `skuSellerId` with new inventory data


```js
brandlovers.products.stocks.put({
  "authorization": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * body **required** `array`
    * items [ProductStock](#productstock)

#### Output
*Output schema unknown*

### ticket.post
Use this service to create a new trouble ticket. Use this to include relevant information about the order, comunicate with the customer or marketplace team. Whenever possible message will be pushed to Mobile first. This is the primary mean of comunicaiton with the customer regarding orders, shippments, shippments status. New tickets will be automatically be set to 'OPEN'. Trouble tickets need to be associated with a orderId or customer. New tickets can optionally include a new message.


```js
brandlovers.ticket.post({
  "authorization": "",
  "newTicket": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * newTicket **required** [NewTicket](#newticket)

#### Output
*Output schema unknown*

### ticket.ticketId.message.post
Add a new message to this trouble ticket. Messages can be `CUSTOMER` (customer will be able to see it) or `INTERNAL`.


```js
brandlovers.ticket.ticketId.message.post({
  "authorization": "",
  "ticketId": "",
  "message": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * ticketId **required** `string`: Trouble ticket ID.
  * message **required** [NewTicketMessage](#newticketmessage)

#### Output
*Output schema unknown*

### ticket.ticketId.messages.get
Returns trouble ticket history with all messages exchanged. Only tickets related to your seller will be returned. Attempt to read other tickets will return 403 (acess denied).


```js
brandlovers.ticket.ticketId.messages.get({
  "authorization": "",
  "ticketId": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * ticketId **required** `string`: Trouble ticket ID.
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetTicketMessages](#getticketmessages)

### ticket.ticketId.status.put
Alows the seller to update the status of a trouble ticket


```js
brandlovers.ticket.ticketId.status.put({
  "authorization": "",
  "ticketId": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * ticketId **required** `string`: Trouble ticket unique identification
  * body **required** [TicketStatus](#ticketstatus)

#### Output
*Output schema unknown*

### tickets.get
Allows seller to receive and status, queries, requests and complaints from customers. As well related messages


```js
brandlovers.tickets.get({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`: Authorization token. The Authorization token can be found in your Admin console.
  * status `string` (values: OPEN, REOPENED, CLOSED): Query by trouble ticket status
  * offset `integer`: Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results.
  * limit `integer`: Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results.

#### Output
* output [GetTickets](#gettickets)



## Definitions

### Address
* Address `object`
  * address **required** `string`: Address first line (ave, street name, etc..)
  * city **required** `string`: City
  * complement **required** `string`: Complementary info (aptartament number, building name, suite)
  * countryId **required** `string`: Contry code using aplpha ISO-3166, Example: BR, US, AR, GB, CN
  * neighbourhood **required** `string`: Address neighbourhood
  * number **required** `string`: Address number
  * recipientName `string`: Recipient Name
  * reference `string`: Pontos de referência
  * state **required** `string`: State
  * zipCode **required** `string`: Zip Code

### ControlledStock
* ControlledStock `object`
  * crossDockingTime `integer`: Time it will take to manufacture, prepare or setup this product. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the ETA informed to the customer
  * quantity **required** `integer`: Quantity of product available for sale
  * reserved `integer`: Locked product invetory for orders that are not approved and are not ready to fullfil.

### Courier
* Courier `object`
  * name **required** `string`: Courier name
  * taxID `string`: Courier taxId information. For example CNPJ

### Customer
* Customer `object`
  * documentNumber **required** `string`: Customer tax information
  * email `string`: Customer Email (when available). Please note: Email is not a mandatory field
  * id **required** `string`: Customer unqiue Id
  * name **required** `string`: Customer Name
  * phones **required** `array`: Customer phone number
    * items [Phone](#phone)
  * type **required** `string`: Customer type: Enterprise or Consumer

### CustomerReference
* CustomerReference `object`
  * name `string`: Customer name
  * phoneNumber `string`: Customer phone mumber

### Dimensions
* Dimensions `object`
  * height **required** `integer`: Product height in millimeters. No commas or periods are accepeted. For example one meter produc must be informed as 1000. Another example 1 meter and 23 centimeters should be informed solely as 1230
  * length **required** `integer`: Product length in millimeters. No commas or periods are accepeted. For example one meter produc must be informed as 1000. Another example 1 meter and 23 centimeters should be informed solely as 1230
  * weight **required** `integer`: Product weight in Grams. No commas or periods are accepeted. For example one killo must be informed as 1000. Another example 1 Kilo and 234 grams should be informed solely as 1234
  * width **required** `integer`: Product width in millimeters. No commas or periods are accepeted. For example one meter produc must be informed as 1000. Another example 1 meter and 23 centimeters should be informed solely as 1230

### Error
* Error `object`
  * message **required** `string`: Friendly message describing the error
  * skuSellerId `string`: When applicabe will include `skuSellerId` related to this error
  * type **required** `string`: Error type

### Freight
* Freight `object`
  * ETA `string`: Estimated time of arrival
  * additionalInfo **required** `string`: Aditional information for the courier
  * chargedAmount **required** `integer`: Shipment cost. Must be informed in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. Same as $1,2345.67 must be informed solely as 1234567
  * crossDockingTime **required** `integer`: Time it will take to manufacture, prepare or setup this product. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the product ETA informed to the customer
  * defaultAmount **required** `integer`: Default value of this shippment.
  * scheduledPeriod `string`: Scheduled period
  * transitTime **required** `integer`: Deliver time in seconds. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the product ETA informed to the customer
  * type `string`: Freight type

### GetOrders
* GetOrders `object`
  * metadata **required** `array`
    * items [Metadata](#metadata)
  * orders **required** `array`
    * items [Order](#order)

### GetOrdersShipments
* GetOrdersShipments `object`
  * metadata `array`: Response payload
    * items [Metadata](#metadata)
  * shipments `array`: Order Shippment Status
    * items [OrderShippmentStatus](#ordershippmentstatus)

### GetProduct
* GetProduct `object`
  * attributes **required** `array`
    * items [ProductAttribute](#productattribute)
  * brand **required** `string`: Brand name
  * categories **required** `array`: Array of categories associated with this product
    * items `string`
  * description **required** `string`: Product text description.
  * dimensions [Dimensions](#dimensions)
  * errors `array`
    * items [Error](#error)
  * giftWrap [GiftWrap](#giftwrap)
  * gtin `array`: Array of product EAN and/or ISBN and/or ASIN codes
    * items `string`
  * images **required** `array`: List of valid Product image URLs. HTTP or HTTPS are valid. HTTPS is prefered.
    * items `string`
  * price **required** [ProductPrice](#productprice)
  * productGroupId `string`: Unique Product Group ID. Products with the same `productGroupId` will be grouped and displayed as a unique entry. Use `productGroupId` to group diferent SKUs that represent diferent colors, sizes, capacities, etc..
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system
  * status **required** `string`: Product status
  * stock **required** `integer`: Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available.
  * title **required** `string`: Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace
  * videos `array`: List of videos de URLs associated with this product. HTTP or HTTPS are valid. HTTPS is prefered.
    * items `string`

### GetProductsResponse
* GetProductsResponse `object`
  * metadata `array`: Payload with response
    * items [Metadata](#metadata)
  * skus `array`
    * items [GetProduct](#getproduct)

### GetProductsStatusSelling
* GetProductsStatusSelling `object`
  * metadata **required** `array`
    * items [Metadata](#metadata)
  * sellerItems **required** `array`
    * items [SellerItem](#selleritem)

### GetSellerProductStatus
* GetSellerProductStatus `object`
  * errors `array`
    * items [Error](#error)
  * price **required** [ProductPrice](#productprice)
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system.
  * status **required** `string`: Product status in the marketplace
  * stock **required** `integer`: Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available.

### GetSellerProductsStatus
* GetSellerProductsStatus `object`
  * metadata `array`: Response payload
    * items [Metadata](#metadata)
  * skus `array`: Status of the products from the seller
    * items [GetSellerProductStatus](#getsellerproductstatus)

### GetTicketMessages
* GetTicketMessages `object`
  * messages `array`
    * items [TicketMessage](#ticketmessage)
  * metadata **required** `array`
    * items [Metadata](#metadata)

### GetTickets
* GetTickets `object`
  * metadata `array`
    * items [Metadata](#metadata)
  * tickets `array`
    * items [Ticket](#ticket)

### GiftCard
* GiftCard `object`
  * from **required** `string`: Giftcard `from` field
  * message **required** `string`: Giftcard `body` message
  * to **required** `string`: Giftcard `to` field

### GiftWrap
* GiftWrap `object`
  * available **required** `boolean`: Flag that defines if this product is eligible for giftwrapping
  * messageSupport `boolean`: Flag that defines if seller supports giftwrapp with a message
  * value **required** `integer`: Amount charged for gift wrap. All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567

### Image
* Image `object`
  * main **required** `boolean`: Sets as main image
  * type **required** `string`: Image format
  * url **required** `string`: Image URL

### Invoice
* Invoice `object`
  * accessKey **required** `string`: Número da chave de acesso à nota fiscal. A chave possui 44 dígitos e contém todas as informações da DANFE
  * cnpj `string`: CNPJ responsável pelo envio dos produtos. Pode ser diferente caso a empresa possua diversos Centros de Distribuição (CDs)
  * issuedAt `string`: Data de emissão da Nota Fiscal
  * linkDanfe `string`: Url para consulta da DANFE
  * linkXml `string`: Url para consulta da NFE
  * number **required** `string`: Número da Nota Fiscal
  * serie **required** `string`: Número de serie da Nota Fiscal

### Metadata
* Metadata `object`
  * key **required** `string`: JSON attribute key
  * value **required** `string`: JSON object value

### NewTicket
* NewTicket `object`
  * body **required** `string`: Message to the customer
  * customer [CustomerReference](#customerreference)
  * description `string`: Trouble ticked brief description
  * from **required** `string`: Friendly name of the person sending this message, if not provided the seller `name` will be used
  * message [NewTicketMessage](#newticketmessage)
  * orderId **required** `string`: Unique order Id that this trouble ticket belongs to
  * type **required** `string`: Trouble ticket type.

### NewTicketMessage
* NewTicketMessage `object`
  * body **required** `string`: Message text
  * visibility **required** `string`: Defines if this message is `CUSTOMER` (customer will receive a copy) or `INTERNAL`

### NewTrackingRefund
* NewTrackingRefund `object`
  * courier [Courier](#courier)
  * cte `string`: Conhecimento do Transporte Eletrônico
  * info **required** `string`: Aditional information about this shippment
  * items **required** `array`
    * items [OrderItemReference](#orderitemreference)
  * number `string`: Tracking Id in the courier
  * occurredAt `string`: Date time that this was created
  * sellerShipmentId `string`: Unique Seller shipment Id. This must be unique across all orders and shipments
  * tranckingUrl `string`: Courier tracking URL

### Newshipmentstatus
* Newshipmentstatus `object`
  * courier **required** [Courier](#courier)
  * cte `string`: Conhecimento do Transporte Eletrônico
  * invoice **required** [Invoice](#invoice)
  * items **required** `array`: List of Order IDs of this items from this order that will be updated in this shipment
    * items `string`
  * number `string`: Unique id shipment Id in the courier system
  * occurredAt **required** `string`: Data da ocorrência
  * sellerShipmentId **required** `string`: Unique Seller shipment Id. This must be unique across all orders and shipmnents
  * trackingUrl `string`: Courier tracking URL

### Order
* Order `object`
  * approvedAt `string`: Date that this order was approved for fullfilment
  * billingAddress **required** [Address](#address)
  * createdAt **required** `string`: Date that this order was created
  * customer **required** [Customer](#customer)
  * freight **required** [Freight](#freight)
  * items **required** `array`
    * items [OrderItem](#orderitem)
  * orderId **required** `string`: Unique order Id (related to this seller)
  * orderMarketplaceId **required** `string`: Unique Order Id that will be displayed to the customer. This Id is not the same as `orderId`
  * seller [Seller](#seller)
  * shipments **required** `array`
    * items [Shippment](#shippment)
  * shippingAddress **required** [Address](#address)
  * status **required** `string`: Order status
  * totalAmount **required** `integer`: Order total in cents, this is what the customer will be charged for. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567
  * totalDiscountAmount **required** `integer`: Total order discounts in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567
  * totalItemsAmount **required** `integer`: Order items total amount in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567
  * totalShippingAmount **required** `integer`: Total shipments amount items. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567
  * updatedAt **required** `string`: Last update data of this order

### OrderGiftWrap
* OrderGiftWrap `object`
  * available **required** `boolean`: Defines if giftwrpping is available for this product.
  * giftCard [GiftCard](#giftcard)
  * messageSupport `boolean`: Defines if giftwrpping is available for this product.
  * value **required** `integer`: Amount charged for gift wrap. All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567

### OrderItem
* OrderItem `object`
  * freight **required** [Freight](#freight)
  * giftWrap [OrderGiftWrap](#ordergiftwrap)
  * id **required** `string`: Unique Id representing this item
  * name **required** `string`: Product name
  * promotions `array`: Promotions array
    * items [Promotion](#promotion)
  * salePrice **required** `integer`: Product unit price
  * sent **required** `boolean`: Flag if product was already shipped
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system

### OrderItemReference
* OrderItemReference `object`
  * quantity **required** `integer`: Quantity of items
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system. This is the key that defines witch product will be updated

### OrderShippment
* OrderShippment `object`
  * courier [Courier](#courier)
  * cte `string`: Conhecimento de Transporte Eletôniconico
  * invoice [Invoice](#invoice)
  * items `array`
    * items [OrderItemReference](#orderitemreference)
  * number `string`: Courier unique trackign Id associated with this shipment
  * occurredAt `string`: Date that this shippment was shiped
  * order `string`: Order unique Id
  * sellerShipmentId `string`: Unique Seller shipment Id. This must be unique across all orders and shipments
  * status `string`: Shipment status.
  * trackingUrl `string`: Courier tracking URL

### OrderShippmentStatus
* OrderShippmentStatus `object`
  * errors `array`
    * items [Error](#error)
  * items `array`
    * items [OrderItemReference](#orderitemreference)
  * shipmentId `string`: Shippment unique Id
  * status `string`: Shipment status
  * trackingUrl `string`: Courier tracking URL

### OrdersShipments
* OrdersShipments `object`
  * shipments `array`
    * items [OrderShippment](#ordershippment)

### Phone
* Phone `object`
  * number **required** `string`: Phone number
  * type **required** `string`: Phone number type, home, office, mobile, etc

### Product
* Product `object`
  * attributes **required** `array`: List of `key` `value` attributes of this product. This is very important for search and SEO optmization. Include all relevant information
    * items [ProductAttribute](#productattribute)
  * brand **required** `string`: Brand name
  * categories **required** `array`: Array of categories associated with this product
    * items `string`
  * description **required** `string`: Product description.
  * dimensions [Dimensions](#dimensions)
  * giftWrap [GiftWrap](#giftwrap)
  * gtin `array`: Array of product EAN and/or ISBN and/or ASIN codes
    * items `string`
  * images **required** `array`: List of valid Product image URLs. HTTP or HTTPS are valid. HTTPS is prefered.
    * items `string`
  * price **required** [ProductPrice](#productprice)
  * productGroupId `string`: Unique Product Group ID. Products with the same `productGroupId` will be grouped and displayed as a unique entry. Use `productGroupId` to group diferent SKUs that represent diferent colors, sizes, capacities, etc..
  * productId `string`: Brand Lovers Product ID. Use this to suggest a product association. This field is optional.
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system
  * stock **required** `integer`: Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available.
  * title **required** `string`: Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace
  * videos `array`: List of videos de URLs associated with this product. HTTP or HTTPS are valid. HTTPS is prefered.
    * items `string`

### ProductAttribute
* ProductAttribute `object`
  * name **required** `string`: Attribute name
  * value **required** `string`: Attribute value

### ProductPrice
* ProductPrice `object`
  * default **required** `integer`: List price, also known as MSRP (Manufacturer Suggest Retail Price) or the recommended retail price (RRP). All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567
  * offer **required** `integer`: Product price. This is what will be offered to the customer. All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567

### ProductReference
* ProductReference `object`
  * href **required** `string`: Link para acesso ao recurso
  * id **required** `string`: ID do recurso

### ProductSiteReference
* ProductSiteReference `object`
  * skuSellerId **required** `string`: Seller unique product Id
  * url **required** `string`: Link do produto no site

### ProductStatusUpdate
* ProductStatusUpdate `object`
  * active **required** `boolean`: Defines if this product is ready for sale. Active `true`, disabled `false`
  * skuSellerId **required** `string`: Seller product unique Id that will be updated

### ProductStock
* ProductStock `object`
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system
  * stocks **required** `array`: Invetory information
    * items [Stock](#stock)

### ProductUpdate
* ProductUpdate `object`
  * attributes `array`: List of `key` `value` attributes of this product. This is very important for search and SEO optmization. Include all relevant information
    * items [ProductAttribute](#productattribute)
  * brand `string`: Brand name
  * categories `array`: Array of categories associated with this product
    * items `string`
  * description `string`: Product text description.
  * dimensions [Dimensions](#dimensions)
  * giftWrap [GiftWrap](#giftwrap)
  * gtin `array`: Array of product EAN and/or ISBN and/or ASIN codes
    * items `string`
  * images `array`: List of valid Product image URLs. HTTP or HTTPS are valid. HTTPS is prefered.
    * items `string`
  * price [ProductPrice](#productprice)
  * productGroupId `string`: Unique Product Group ID. Products with the same `productGroupId` will be grouped and displayed as a unique entry. Use `productGroupId` to group diferent SKUs that represent diferent colors, sizes, capacities, etc..
  * productId `string`: Brand Lovers Product Id. Use this to recommend a product association
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system
  * stock `integer`: Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available.
  * title `string`: Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace
  * videos `array`: List of videos de URLs associated with this product. HTTP or HTTPS are valid. HTTPS is prefered.
    * items `string`

### Promotion
* Promotion `object`
  * amount `integer`: Total discount in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567
  * id **required** `string`: Promotion unique idenfitcation number
  * name `string`: Promotion name
  * type `string`: Promotion type

### Seller
* Seller `object`
  * id `string`: Seller unique Id in the Brand Lovers Marketplace
  * name `string`: Seller name in the Brand Lovers Marketplace

### SellerItem
* SellerItem `object`
  * attributes **required** `array`
    * items [ProductAttribute](#productattribute)
  * brand **required** `string`: Brand name
  * dimensions **required** [Dimensions](#dimensions)
  * giftWrap [GiftWrap](#giftwrap)
  * gtin `array`: Array of product EAN and/or ISBN and/or ASIN codes
    * items `string`
  * images **required** `array`: List of valid Product image URLs.
    * items [Image](#image)
  * prices **required** `array`: Price information for each marketplace that this product is listed
    * items [ProductPrice](#productprice)
  * product **required** [ProductReference](#productreference)
  * skuSellerId **required** `string`: Unique Product Id (SKU) in the seller system
  * status **required** `array`: Product status for each marketplace that this product is listed
    * items [SellerItemStatus](#selleritemstatus)
  * stocks **required** `array`: Invetory information for each marketplace that this product is listed
    * items [ControlledStock](#controlledstock)
  * title **required** `string`: Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace
  * urls `array`: List of URLs where the product is listed for sale
    * items [ProductSiteReference](#productsitereference)

### SellerItemPrices
* SellerItemPrices `object`
  * price **required** [ProductPrice](#productprice)
  * skuSellerId **required** `string`: Unique product Id from seller that will be updated

### SellerItemStatus
* SellerItemStatus `object`
  * active **required** `boolean`: Defines if this product is ready for sale. Active `true`, disabled `false` 

### Shippment
* Shippment `object`
  * courier **required** [Courier](#courier)
  * cte `string`: Conhecimento de Transporte Eletrônico
  * description `string`: Additinal shipment tracking information
  * id `string`: Shipment Id associated with this shippment used to group diferent item or items from a single order
  * invoice **required** [Invoice](#invoice)
  * items **required** `array`: List of items of this shippment
    * items [OrderItemReference](#orderitemreference)
  * number `string`: Courier unique trackign Id associated with this shipment
  * occurredAt **required** `string`: Date time when this shippment happened
  * sellerShipmentId **required** `string`: Unique Seller shipment Id. This must be unique across all orders and shipments
  * status **required** `string`: Shipment status
  * trackingUrl `string`: Courier tracking URL

### Stock
* Stock `object`
  * crossDockingTime `integer`: Time it will take to manufacture, prepare or setup this product. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the product ETA informed to the customer
  * quantity **required** `integer`: Stock available

### Ticket
* Ticket `object`
  * closedAt `string`: Date-time when ticket was closed
  * createdAt `string`: Date time that ticket was created
  * customer [CustomerReference](#customerreference)
  * description `string`: Trouble ticked brief description
  * metadata `array`
    * items [Metadata](#metadata)
  * priority `string`: Trouble ticket priority
  * sla `string`: Date-time with a promisse for the customer when this ticket will be resolved
  * status `string`: Trouble Ticket status. 'OPEN','CLOSED','REOPENED'
  * subject `string`: Short one line title describing ticket.
  * ticketId `string`: Trouble Ticket unique identification Id
  * type `string`: Trouble ticket type.
  * updatedAt `string`: Date-time with last update of this ticket

### TicketMessage
* TicketMessage `object`
  * body **required** `string`: Message text
  * createdAt **required** `string`: Date created
  * id **required** `string`: Trouble Ticket Id.
  * visibility **required** `string`: Defines if this message is `CUSTOMER` (customer will receive a copy) or `INTERNAL`

### TicketStatus
* TicketStatus `object`
  * ticketStatus **required** `string`: New trouble ticket status. Valid options are `REOPENED`, `CLOSED`


