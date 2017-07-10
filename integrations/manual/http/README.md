# @datafire/
Make HTTP calls

## Operation: request
Make an HTTP request

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    },
    "method": {
      "type": "string",
      "default": "get",
      "enum": [
        "get",
        "put",
        "post",
        "patch",
        "delete",
        "options",
        "head"
      ]
    }
  },
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
## Operation: put


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
## Operation: post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
## Operation: patch


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
## Operation: delete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
## Operation: options


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
## Operation: head


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "query": {
      "type": "object"
    },
    "body": {
      "type": "string"
    },
    "headers": {
      "type": "object"
    }
  }
}
```
### Output Schema
```json
{}
```
