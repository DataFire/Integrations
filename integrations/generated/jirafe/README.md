# @datafire/jirafe
API endpoins for sending Jirafe events

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: postBatch
Send a batch for the given site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "ID site to send the event"
    },
    "body": {
      "$ref": "#/definitions/Batch"
    }
  },
  "additionalProperties": false,
  "required": [
    "siteId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postCart
Send a cart for the given site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "ID site to send the event"
    },
    "body": {
      "$ref": "#/definitions/Cart"
    }
  },
  "additionalProperties": false,
  "required": [
    "siteId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postCategory
Send a category for the given site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "ID site to send the event"
    },
    "body": {
      "$ref": "#/definitions/Category"
    }
  },
  "additionalProperties": false,
  "required": [
    "siteId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postCustomer
Send a customer for the given site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "ID site to send the event"
    },
    "body": {
      "$ref": "#/definitions/Customer"
    }
  },
  "additionalProperties": false,
  "required": [
    "siteId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postOrderCancelled
Send a order for the given site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "ID site to send the event"
    },
    "body": {
      "$ref": "#/definitions/OrderCancelled"
    }
  },
  "additionalProperties": false,
  "required": [
    "siteId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: postProduct
Send a product for the given site

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "ID site to send the event"
    },
    "body": {
      "$ref": "#/definitions/Product"
    }
  },
  "additionalProperties": false,
  "required": [
    "siteId",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
