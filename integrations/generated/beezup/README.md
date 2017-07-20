# @datafire/beezup
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


## Operation: GetAutomaticTransitions
Get automatic order status transition list

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/automaticTransitionInfos"
}
```
## Operation: ConfigureAutomaticTransitions
Configure automatic order status transitions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/saveAutomaticTransitionRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ChangeOrderList
The purpose of this  operation is to reduce the amount of request to the API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "changeOrderType": {
      "type": "string",
      "description": "The order change type"
    },
    "userName": {
      "type": "string",
      "description": "Sometimes the user in the e-commerce application is not the same than the subscription key you indicate in your settings. We recommand you to indicate the login of the user in your appplication."
    },
    "testMode": {
      "type": "boolean",
      "description": "If true, the operation will be be commited. But the validation will be taken in account."
    },
    "request": {
      "$ref": "#/definitions/changeOrderListRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "changeOrderType",
    "userName",
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ClearMerchantOrderInfoList
The purpose of this  operation is to reduce the amount of request to the API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/clearMerchantOrderInfoListRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: SetMerchantOrderInfoList
The purpose of this  operation is to reduce the amount of request to the API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "request": {
      "$ref": "#/definitions/setMerchantOrderInfoListRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetOrderExportations
Get the order exportation list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageNumber": {
      "type": "integer",
      "format": "int32",
      "description": "The page number you want to get",
      "minimum": 1
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "The count of orders exportation you want to get",
      "maximum": 100,
      "minimum": 25
    }
  },
  "additionalProperties": false,
  "required": [
    "pageNumber",
    "pageSize"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/orderExportations"
}
```
## Operation: ExportOrders
This will create a file with all your orders related to your filter

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "The type of the file to export",
      "enum": [
        "csv"
      ]
    },
    "request": {
      "$ref": "#/definitions/exportOrderListRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: HarvestAll
Harvest orders from all marketplaces

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: GetOrderListFull
The purpose of this API is to reduce the request count.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Encoding": {
      "type": "array",
      "description": "Indicates that the client accepts that the response will be compressed to reduce traffic size."
    },
    "request": {
      "$ref": "#/definitions/orderListRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Accept-Encoding"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/orderListFull"
}
```
## Operation: GetOrderListLight
Get order list without details

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "request": {
      "$ref": "#/definitions/orderListRequest"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/orderListLight"
}
```
## Operation: GetMarketplaceAccountsSynchronization
Get marketplace accounts synchronization status

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/accountSynchronizations"
}
```
## Operation: GetOrder
Get order details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "marketplaceTechnicalCode": {
      "type": "string",
      "description": "The marketplace technical code"
    },
    "accountId": {
      "type": "integer",
      "format": "int32",
      "description": "The account identifier"
    },
    "beezUPOrderId": {
      "type": "string",
      "description": "The order BeezUP identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "marketplaceTechnicalCode",
    "accountId",
    "beezUPOrderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/order"
}
```
## Operation: ClearMerchantOrderInfo
Clear the merchant info related to this order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "marketplaceTechnicalCode": {
      "type": "string",
      "description": "The marketplace technical code"
    },
    "accountId": {
      "type": "integer",
      "format": "int32",
      "description": "The account identifier"
    },
    "beezUPOrderId": {
      "type": "string",
      "description": "The order BeezUP identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "marketplaceTechnicalCode",
    "accountId",
    "beezUPOrderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: HarvestOrder
Harvest a specific order from the marketplace

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "marketplaceTechnicalCode": {
      "type": "string",
      "description": "The marketplace technical code"
    },
    "accountId": {
      "type": "integer",
      "format": "int32",
      "description": "The account identifier"
    },
    "beezUPOrderId": {
      "type": "string",
      "description": "The order BeezUP identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "marketplaceTechnicalCode",
    "accountId",
    "beezUPOrderId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GetOrderHistory
Get the harvest history and the change status operations

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "marketplaceTechnicalCode": {
      "type": "string",
      "description": "The marketplace technical code"
    },
    "accountId": {
      "type": "integer",
      "format": "int32",
      "description": "The account identifier"
    },
    "beezUPOrderId": {
      "type": "string",
      "description": "The order BeezUP identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "marketplaceTechnicalCode",
    "accountId",
    "beezUPOrderId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/orderHistory"
}
```
## Operation: SetMerchantOrderInfo
Associate your merchant order identifier to this order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "marketplaceTechnicalCode": {
      "type": "string",
      "description": "The marketplace technical code"
    },
    "accountId": {
      "type": "integer",
      "format": "int32",
      "description": "The account identifier"
    },
    "beezUPOrderId": {
      "type": "string",
      "description": "The order BeezUP identifier"
    },
    "request": {
      "$ref": "#/definitions/setMerchantOrderInfoRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "marketplaceTechnicalCode",
    "accountId",
    "beezUPOrderId",
    "request"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ChangeOrder
Change order status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "marketplaceTechnicalCode": {
      "type": "string",
      "description": "The marketplace technical code"
    },
    "accountId": {
      "type": "integer",
      "format": "int32",
      "description": "The account identifier"
    },
    "beezUPOrderId": {
      "type": "string",
      "description": "The order BeezUP identifier"
    },
    "changeOrderType": {
      "type": "string",
      "description": "The order change type"
    },
    "userName": {
      "type": "string",
      "description": "Sometimes the user in the e-commerce application is not the same than the subscription key you indicate in your settings. We recommand you to indicate the login of the user in your appplication."
    },
    "testMode": {
      "type": "boolean",
      "description": "If true, the operation will be be commited. But the validation will be taken in account."
    },
    "request": {
      "$ref": "#/definitions/changeOrderRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "marketplaceTechnicalCode",
    "accountId",
    "beezUPOrderId",
    "changeOrderType",
    "userName",
    "request"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/changeOrderResponse"
}
```
