# @datafire/thenounproject
Icons for Everything

## Operation: getCollectionById
Returns a single collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "Collection id"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollectionIconsById
Returns a list of icons associated with a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "Collection id"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results to displace or skip over"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results of limit length to displace or skip over"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollectionBySlug
Returns a single collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string",
      "description": "Collection slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCollectionIconsBySlug
Returns a list of icons associated with a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string",
      "description": "Collection slug"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results to displace or skip over"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results of limit length to displace or skip over"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAllCollections
Return's a list of all collections

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results to displace or skip over"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results of limit length to displace or skip over"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getIconById
Returns a single icon

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "Icon id"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getIconByTerm
Returns a single icon

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "term": {
      "type": "string",
      "description": "Icon term"
    }
  },
  "additionalProperties": false,
  "required": [
    "term"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getRecentIcons
Returns list of most recently uploaded icons

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results to displace or skip over"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results of limit length to displace or skip over"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getIconsByTerm
Returns a list of icons

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "term": {
      "type": "string",
      "description": "Icon term"
    },
    "limit_to_public_domain": {
      "type": "integer",
      "format": "int32",
      "description": "Limit results to public domain icons only"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results to displace or skip over"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results of limit length to displace or skip over"
    }
  },
  "additionalProperties": false,
  "required": [
    "term"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getApiQuotaStatus
Returns current oauth usage and limits

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getUserCollections
Returns a list of collections associated with a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "User id"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUserCollection
Returns a single collection associated with a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "integer",
      "format": "int32",
      "description": "User id"
    },
    "slug": {
      "type": "string",
      "description": "Collection slug"
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUserUploadsWithUser
Returns a list of uploads associated with a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Username"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum number of results"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results to displace or skip over"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Number of results of limit length to displace or skip over"
    }
  },
  "additionalProperties": false,
  "required": [
    "username"
  ]
}
```
### Output Schema
```json
{}
```
