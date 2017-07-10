# @datafire/rummblelabs
Seldon is an Open Predictive Platform that currently allows item recommendations and general predictive models to be deployed based on structured historical data.

## Operation: postAction
post new action between a user and an item

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "body": {
      "$ref": "#/definitions/Action"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getItems
get items

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "full": {
      "type": "boolean",
      "description": "get all attributes for item"
    },
    "name": {
      "type": "string",
      "description": "keywords to match"
    },
    "dimension": {
      "type": "integer",
      "description": "limit items to a particular dimension"
    },
    "type": {
      "type": "integer",
      "description": "limit items to a particular type"
    },
    "limit": {
      "type": "integer",
      "description": "limit number of items returned"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: postItem
post new item

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "body": {
      "$ref": "#/definitions/Item"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: putItem
update item

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "body": {
      "$ref": "#/definitions/Item"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getItemTypes
get item type

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getItem
get item

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "itemId": {
      "type": "string",
      "description": "the item id to get"
    },
    "full": {
      "type": "boolean",
      "description": "get all attributes for item"
    }
  },
  "additionalProperties": false,
  "required": [
    "itemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: addAction
Add a user interaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {
      "type": "string",
      "description": "consumer key"
    },
    "user": {
      "type": "string",
      "description": "user id"
    },
    "item": {
      "type": "string",
      "description": "item id"
    },
    "type": {
      "type": "string",
      "description": "type"
    },
    "jsonpCallback": {
      "type": "string",
      "description": "JSONP callback"
    },
    "timestamp": {
      "type": "integer",
      "description": "time"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user",
    "item",
    "type",
    "jsonpCallback"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRecommendation
Get recommendations for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {
      "type": "string",
      "description": "consumer key"
    },
    "user": {
      "type": "string",
      "description": "user id"
    },
    "item": {
      "type": "string",
      "description": "currently viewed item id"
    },
    "limit": {
      "type": "integer",
      "description": "max number of recommendations to return"
    },
    "dimension": {
      "type": "integer",
      "description": "get recommendations for a particular item dimension (e.g., just sports articles)"
    },
    "attributes": {
      "type": "string",
      "format": "command separated list",
      "description": "the fields to return"
    },
    "algorithms": {
      "type": "string",
      "description": "override default algorithms with specified algorithms"
    },
    "jsonpCallback": {
      "type": "string",
      "description": "JSONP callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "user",
    "jsonpCallback"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getToken
get token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "consumer_key": {
      "type": "string",
      "description": "consumer key"
    },
    "consumer_secret": {
      "type": "string",
      "description": "consumer secret"
    }
  },
  "additionalProperties": false,
  "required": [
    "consumer_key",
    "consumer_secret"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUsers
get users

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "full": {
      "type": "boolean",
      "description": "get all attributes for user"
    },
    "name": {
      "type": "string",
      "description": "keywords to match"
    },
    "limit": {
      "type": "integer",
      "description": "limit number of users returned"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: postUser
post new user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "body": {
      "$ref": "#/definitions/User"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateUser
update user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "body": {
      "$ref": "#/definitions/User"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUser
get a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "userId": {
      "type": "string",
      "description": "the user id to get"
    },
    "full": {
      "type": "boolean",
      "description": "get all attributes for user"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUserActions
get a user's recent actions

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "userId": {
      "type": "string",
      "description": "the user id to get"
    },
    "full": {
      "type": "boolean",
      "description": "get all attributes for user"
    },
    "limit": {
      "type": "integer",
      "description": "limit number of actions returned"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUserRecommendations
get recommendations for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "oauth_token": {
      "type": "string",
      "description": "oauth token"
    },
    "userId": {
      "type": "string",
      "description": "the user id to get"
    },
    "full": {
      "type": "boolean",
      "description": "get all attributes for user"
    },
    "limit": {
      "type": "integer",
      "description": "limit number of actions returned"
    },
    "dimension": {
      "type": "integer",
      "description": "get recommendations for a particular item dimension (e.g., just sports articles)"
    },
    "algorithms": {
      "type": "string",
      "description": "override default algorithms with specified algorithms"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
