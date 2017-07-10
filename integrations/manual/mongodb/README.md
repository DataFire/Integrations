# @datafire/mongodb
Interact with MongoDB

## Operation: findOne
Find a single document in the database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "title": "collection",
      "type": "string"
    },
    "query": {
      "title": "query",
      "type": "object"
    },
    "projection": {
      "title": "projection",
      "type": "object",
      "default": {}
    }
  },
  "required": [
    "collection",
    "query"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: find
Find multiple documents in the database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "title": "collection",
      "type": "string"
    },
    "query": {
      "title": "query",
      "type": "object"
    },
    "projection": {
      "title": "projection",
      "type": "object",
      "default": {}
    }
  },
  "required": [
    "collection",
    "query"
  ]
}
```
### Output Schema
```json
{
  "type": "array",
  "items": {
    "type": "object"
  }
}
```
## Operation: insertOne
Insert a document into the database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "title": "collection",
      "type": "string"
    },
    "document": {
      "title": "document",
      "type": "object"
    }
  },
  "required": [
    "collection",
    "document"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: insertMany
Insert multiple documents into the database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "title": "collection",
      "type": "string"
    },
    "documents": {
      "title": "documents",
      "type": "array",
      "items": {
        "type": "object"
      }
    }
  },
  "required": [
    "collection",
    "documents"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: update
Update all matching documents in the database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "title": "collection",
      "type": "string"
    },
    "query": {
      "title": "query",
      "type": "object"
    },
    "update": {
      "title": "update",
      "type": "object"
    }
  },
  "required": [
    "collection",
    "query",
    "update"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
## Operation: remove
Remove all matching documents in the database

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collection": {
      "title": "collection",
      "type": "string"
    },
    "query": {
      "title": "query",
      "type": "object"
    },
    "justOne": {
      "title": "justOne",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "collection",
    "query"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
