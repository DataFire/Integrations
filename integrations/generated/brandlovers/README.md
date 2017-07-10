# @datafire/brandlovers
Allows sellers to: 1) Load products definitions to the BrandLovers marktplace. 2) Receive and update orders status. 3) Receive and update shipping information. 4) Receive and update customer tickets. All requests consume and return application/json content. All request must be authenticated and use HTTPS.

## Operation: order.orderId.get
Returns all details of a single order, including last status, items shipped or not.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "orderId": {
      "type": "string",
      "description": "Unique Id of this order."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Order"
}
```
## Operation: order.orderId.shipment.cancel.post
Confirm shipment canceletion (when requested by the customer) or failure to deliver one shipment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "$ref": "#/definitions/NewTrackingRefund"
    },
    "orderId": {
      "type": "string",
      "description": "Unique Order Id"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body",
    "orderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: order.orderId.shipment.delivered.post
Confirms that a shipment was delivered. Must inform quantity of successfully deliverd items even if items deliverd was less than the original order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "$ref": "#/definitions/Newshipmentstatus"
    },
    "orderId": {
      "type": "string",
      "description": "Unique Order Id"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body",
    "orderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: order.orderId.shipment.exchange.post
This enpoint to confirm item exchange when failure to deliver or requested by the customer. All customer requests are tracket via trouble tickets

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "$ref": "#/definitions/NewTrackingRefund"
    },
    "orderId": {
      "type": "string",
      "description": "Unique Order Id"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body",
    "orderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: order.orderId.shipment.return.post
Use this endpoint to return and refund items froma a order. In order to fully return an order list all items and applicate quantity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "$ref": "#/definitions/NewTrackingRefund"
    },
    "orderId": {
      "type": "string",
      "description": "Order unique Id"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body",
    "orderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: order.orderId.shipment.sent.post
Updates order to include shipment shiped information. This endpoint can be used to include a single or multiple shipments for any give order. In order to inform that all items of a order where shipped list all of them, including applicable quantities in the payload.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "$ref": "#/definitions/Newshipmentstatus"
    },
    "orderId": {
      "type": "string",
      "description": "Unique Order Id"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body",
    "orderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orders.get
Retuns a list of orders associated with this seller. The list is ordered by dateCreated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.shipments.delivered.get
Returns list of shipments. By default this will return list of the last shipments ordered by dateCreated, folowed by last update date.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "status": {
      "type": "string",
      "description": "Query by shippment status."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrdersShipments"
}
```
## Operation: orders.shipments.delivered.post
Bulk update of order shipments status. This alows to inform multiple shipments status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "ordersshipments": {
      "$ref": "#/definitions/OrdersShipments"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "ordersshipments"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orders.shipments.shipped.get
Returns a list of shipments shipped. By Default returns items ordered by dateCreated folowed by last update

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "status": {
      "type": "string",
      "description": "Product status.",
      "enum": [
        "NEW",
        "APPROVED",
        "DECLINED",
        "PENDING"
      ]
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrdersShipments"
}
```
## Operation: orders.shipments.shipped.post
Allows bulk updates of orders shippments.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ordersshipments": {
      "$ref": "#/definitions/OrdersShipments"
    }
  },
  "additionalProperties": false,
  "required": [
    "ordersshipments"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orders.status.approved.get
Returns a list of approved orders. Orders in the `approved` state must be fullfiled imediadetelly.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 100, max 200. Use this in conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.status.canceled.get
Returns a list with canceled orders. Canceled orders should not be fullfiled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Default 100, max 250. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.status.delivered.get
Returns a list of orders successfully delivered associated with this seller.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.status.new.get
Returns a list of orders flagged as new. New orders should not be fullfiled until marketplace flags them as approved.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.status.partiallyDelivered.get
Returns a list of partially deliverd orders. This is a list of orders with items shipped but with not all items ackwlodged as deliverd

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 100. Max 250. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.status.partiallySent.get
Returns a list of orders that contain one (or more) items that where not shipped. This will list the entire order as well the items with peding shipment. Use this service to track orders that need to be fullfiled.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 100. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: orders.status.sent.get
Returns a list with orders completely fullfiled, this means orders with all items sent. Orders will ordered by dateCreated fowllowed by last update

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetOrders"
}
```
## Operation: product.post
Use this enpoint to create a single new product to the Marketplace. This enpoint expects a json document with one product. If you whant to upload multiple products in a single API call use POST /products method. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. This system is idenpontent, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update, edit a product use the PUT method with the correct reference to your `skuSellerId`

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "product": {
      "$ref": "#/definitions/Product"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "product"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: product.skuSellerId.get
Returns detailed information of a single product with the seller `skuSellerId`. This service will return a json document with product detail, status, price, invetory among other infomarion availble in the Brand Lovers marketplace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "skuSellerId": {
      "type": "string",
      "description": "SKU ID do Lojista."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "skuSellerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetProduct"
}
```
## Operation: product.skuSellerId.put
Update a single product information such as name, brand, attribute, dimension, etc. Please note that data from your request will be merged with existing data. This allows you to easliy update only certain fields without the need to re-inform the other unchanged fields. For example in order to update just the field `title` simply send just this field with new information, remaining fields will not be changed. In order to erase an item the field must be informed as its default value, for example in order to erase the `videos` field must be sent as videos:[]. The `skuSellerId` field is always mandatory in the path and in the product json Object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "skuSellerId": {
      "type": "string",
      "description": "Unique Product Id (SKU) in the seller system that will be updated."
    },
    "body": {
      "$ref": "#/definitions/ProductUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "skuSellerId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: product.skuSellerId.prices.put
Allows seller to set the SKU prices (MSRP and/or offer price). All prices must be informed in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. Same as $1,2345.67 must be informed solely as 1234567

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "skuSellerId": {
      "type": "string",
      "description": "Product SKU"
    },
    "body": {
      "$ref": "#/definitions/ProductPrice"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "skuSellerId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: product.skuSellerId.status.put
Update product status in the Marketplace. Set to `true` to enable, `false` to disable sale.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "skuSellerId": {
      "type": "string",
      "description": "Unique Product Id (SKU) in the seller system"
    },
    "body": {
      "$ref": "#/definitions/SellerItemStatus"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "skuSellerId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: product.skuSellerId.stock.put
Update a single product inventory information. Products with zero stock will not be eligible for sale.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "skuSellerId": {
      "type": "string",
      "description": "Unique Product Id (SKU) in the seller system that will be updated"
    },
    "body": {
      "$ref": "#/definitions/Stock"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "skuSellerId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.get
Get a list of my products loaded into the Marketplace. This dosen't means that products are eligible for sale, just that they are loaded in the database.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number of items to retun. Defaults to 100. Max alowed is 200. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetProductsResponse"
}
```
## Operation: products.post
This enpoint to creates new products in the Marketplace using `skuSellerId` as a primary key. This enpoint expects a json document with array of products. The server will load each product as an individual item that can be manipulated using your own `skuSellerId`. All requests to This endpoint are idenpontent with respect of the `skuSellerId`, this means that once a `skuSellerId` is created it cannot be re-created using this tool. In order to update use the PUT method with the correct `skuSellerId`. You can also use the POST /product to create a single product per request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "products": {
      "items": {
        "$ref": "#/definitions/Product"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "products"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.prices.put
Allows bulk update of product prices. This endpoint expects a json document with an array of products with the `skuSellerId` and the new price. Server will process each new product update individually and will ackwlodge as much updates as possible, even if a single product update fails. After this request you can query product final status with GET /product/status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "items": {
        "$ref": "#/definitions/SellerItemPrices"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.status.get
Returns a list with seller products status. Please note that this endpoint will not return all details of each product, just the skuSellerId and status. Also please note that this endpoint will return 250 products per call. For full details of a given procuct use GET /product/{skuSellerId}

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number of items to return in this query. Defaults to 250. Maximum 1000. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetSellerProductsStatus"
}
```
## Operation: products.status.put
Bulk enable/disable products in the marketplace. This endpoint requires an array of objects with the seller SKU `skuSellerId` and boolean value that defines if the product is enabled or not for sale. This endpoint can be used to set a single product or many products.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "items": {
        "$ref": "#/definitions/ProductStatusUpdate"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.status.selling.get
Returns products that are successfully listed for sale.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetProductsStatusSelling"
}
```
## Operation: products.stocks.put
Bulk product stock update. This endpoint expect a array of products `skuSellerId` with new inventory data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "body": {
      "items": {
        "$ref": "#/definitions/ProductStock"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ticket.post
Use this service to create a new trouble ticket. Use this to include relevant information about the order, comunicate with the customer or marketplace team. Whenever possible message will be pushed to Mobile first. This is the primary mean of comunicaiton with the customer regarding orders, shippments, shippments status. New tickets will be automatically be set to 'OPEN'. Trouble tickets need to be associated with a orderId or customer. New tickets can optionally include a new message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "newTicket": {
      "$ref": "#/definitions/NewTicket"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "newTicket"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ticket.ticketId.message.post
Add a new message to this trouble ticket. Messages can be `CUSTOMER` (customer will be able to see it) or `INTERNAL`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "ticketId": {
      "type": "string",
      "description": "Trouble ticket ID."
    },
    "message": {
      "$ref": "#/definitions/NewTicketMessage"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "ticketId",
    "message"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ticket.ticketId.messages.get
Returns trouble ticket history with all messages exchanged. Only tickets related to your seller will be returned. Attempt to read other tickets will return 403 (acess denied).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "ticketId": {
      "type": "string",
      "description": "Trouble ticket ID."
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "ticketId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetTicketMessages"
}
```
## Operation: ticket.ticketId.status.put
Alows the seller to update the status of a trouble ticket

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "ticketId": {
      "type": "string",
      "description": "Trouble ticket unique identification"
    },
    "body": {
      "$ref": "#/definitions/TicketStatus"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization",
    "ticketId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tickets.get
Allows seller to receive and status, queries, requests and complaints from customers. As well related messages

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorization": {
      "type": "string",
      "description": "Authorization token. The Authorization token can be found in your Admin console."
    },
    "status": {
      "type": "string",
      "description": "Query by trouble ticket status",
      "enum": [
        "OPEN",
        "REOPENED",
        "CLOSED"
      ]
    },
    "offset": {
      "type": "integer",
      "description": "Number or items to skip when executing query. List starts at zero. If omitted will default to zero. Use this conjuction with `limit` to paginate across the results."
    },
    "limit": {
      "type": "integer",
      "description": "Number or items to return when executing query. Defaults to 10. Use this conjuction with `offset` to paginate across the results."
    }
  },
  "additionalProperties": false,
  "required": [
    "authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetTickets"
}
```
