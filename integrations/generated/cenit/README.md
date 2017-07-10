# @datafire/cenit
Cenit IO is an Open Platform for Data and Business Integration (iPaaS)


## Operation: setup.connection.get
Returns a list of connections you've previously created. The connections are returned in sorted order, with the most recent connection appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/connection"
  },
  "type": "array"
}
```
## Operation: setup.connection.post
Creates or updates the specified connection by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/connection"
}
```
## Operation: setup.connection.id.delete
Permanently deletes a connection. It cannot be undone.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Connection ID"
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
## Operation: setup.connection.id.get
Retrieves the details of an existing connection. You need only supply the unique connection identifier that was returned upon connection creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Connection ID"
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
{
  "$ref": "#/definitions/connection"
}
```
## Operation: setup.connection_role.get
Returns a list of connection roles you've previously created. The connection roles are returned in sorted order, with the most recent connection role appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/connection_role"
  },
  "type": "array"
}
```
## Operation: setup.connection_role.post
Creates or updates the specified connection role by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/connection_role"
}
```
## Operation: setup.connection_role.id.delete
Deletes the specified connection role.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Connection role ID"
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
## Operation: setup.connection_role.id.get
Returns a connection role

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Connection role ID"
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
{
  "$ref": "#/definitions/connection_role"
}
```
## Operation: setup.data_type.get
Returns a list of data types you've previously created. The data types are returned in sorted order, with the most recent DataType appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/data_type"
  },
  "type": "array"
}
```
## Operation: setup.data_type.post
Creates or updates the specified data type by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/data_type"
}
```
## Operation: setup.data_type.id.delete
Deletes the specified data type.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "data type ID"
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
## Operation: setup.data_type.id.get
Retrieves the details of an existing data type. You need only supply the unique data  type identifier that was returned upon DataType creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "data type ID"
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
{
  "$ref": "#/definitions/data_type"
}
```
## Operation: setup.flow.get
Returns a list of flows you've previously created. The flows are returned in sorted order, with the most recent flow appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/flow"
  },
  "type": "array"
}
```
## Operation: setup.flow.post
Creates or updates the specified flow. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/flow"
}
```
## Operation: setup.flow.id.delete
Deletes the specified flow.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Flow ID"
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
## Operation: setup.flow.id.get
Retrieves the details of an existing flow. You need only supply the unique flow identifier that was returned upon flow creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Flow ID"
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
{
  "$ref": "#/definitions/flow"
}
```
## Operation: setup.namespace.get
Returns a list of namespaces you've previously created. The namespaces are returned in sorted order, with the most recent namespace appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/namespace"
  },
  "type": "array"
}
```
## Operation: setup.namespace.post
Creates or updates the specified namespace. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/namespace"
}
```
## Operation: setup.namespace.id.delete
Deletes the specified namespace.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Namespace ID."
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
## Operation: setup.namespace.id.get
Retrieves the details of an existing namespace. You need only supply the unique webhook namespace that was returned upon namespace creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Namespace ID."
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
{
  "$ref": "#/definitions/namespace"
}
```
## Operation: setup.observer.get
Returns a list of events you've previously created. The events are returned in sorted order, with the most recent event appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/observer"
  },
  "type": "array"
}
```
## Operation: setup.observer.post
Creates or updates the specified event observer. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/observer"
}
```
## Operation: setup.observer.id.delete
Deletes the specified event observer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Observer ID"
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
## Operation: setup.observer.id.get
Retrieves the details of an existing event. You need only supply the unique event identifier that was returned upon event creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Observer ID"
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
{
  "$ref": "#/definitions/observer"
}
```
## Operation: setup.scheduler.get
Returns a list of schedulers you've previously created. The schedulers are returned in sorted order, with the most recent scheduler appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/scheduler"
  },
  "type": "array"
}
```
## Operation: setup.scheduler.post
Creates or updates the specified scheduler. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/scheduler"
}
```
## Operation: setup.scheduler.id.delete
Deletes the specified scheduler.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Scheduler ID"
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
## Operation: setup.scheduler.id.get
Retrieves the details of an existing scheduler. You need only supply the unique scheduler identifier that was returned upon scheduler creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Scheduler ID"
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
{
  "$ref": "#/definitions/scheduler"
}
```
## Operation: setup.schema.get
Returns a list of schemas you've previously created. The schemas are returned in sorted order, with the most recent schema appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/schema"
  },
  "type": "array"
}
```
## Operation: setup.schema.post
Creates or updates the specified schema. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/schema"
}
```
## Operation: setup.schema.id.delete
Deletes the specified schema.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Schema ID"
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
## Operation: setup.schema.id.get
Retrieves the details of an existing schema. You need only supply the unique schema identifier that was returned upon schema creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Schema ID"
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
{
  "$ref": "#/definitions/schema"
}
```
## Operation: setup.translator.get
Returns a list of translators you've previously created. The translators are returned in sorted order, with the most recent translator appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/translator"
  },
  "type": "array"
}
```
## Operation: setup.translator.post
Creates or updates the specified translator. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/translator"
}
```
## Operation: setup.translator.id.delete
Deletes the specified translator.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Translator ID."
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
## Operation: setup.translator.id.get
Retrieves the details of an existing translator. You need only supply the unique translator identifier that was returned upon translator creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Translator ID."
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
{
  "$ref": "#/definitions/translator"
}
```
## Operation: setup.webhook.get
Returns a list of webhooks you've previously created. The webhooks are returned in sorted order, with the most recent webhook appearing first.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/webhook"
  },
  "type": "array"
}
```
## Operation: setup.webhook.post
Creates or updates the specified webhook. Any parameters not provided will be left unchanged.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/webhook"
}
```
## Operation: setup.webhook.id.delete
Deletes the specified webhook.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Webhook ID."
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
## Operation: setup.webhook.id.get
Retrieves the details of an existing webhook. You need only supply the unique webhook identifier that was returned upon webhook creation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Webhook ID."
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
{
  "$ref": "#/definitions/webhook"
}
```
