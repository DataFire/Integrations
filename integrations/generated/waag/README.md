# @datafire/waag
An API for the distribution and annotation of open data, for small cities and big metropolitan areas.

## Operation: layers.get
Return all layers

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: layers.post
Create new layer

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.delete
Delete a layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.get
Return single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.patch
Edit a layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.context.get
Return JSON-LD context of single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.context.put
Overwrite JSON-LD context of single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.fields.get
Return all fields of single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.fields.post
Create new field for single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.fields.field.delete
Delete a single field on single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    },
    "field": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer",
    "field"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.fields.field.get
Return single field of single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    },
    "field": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer",
    "field"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.fields.field.patch
Edit single field on single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    },
    "field": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer",
    "field"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.fields.field.put
Overwrite single field on single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    },
    "field": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer",
    "field"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.objects.delete
Delete all objects from a single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.objects.get
Return all objects with data on single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.objects.patch
Edit one or more objects and data on single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.objects.post
Create one or more objects with data on single layer, or add data to existing objects (or a combination thereof)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.objects.cdk_id.get
Return metadata of single layer about single object, e.g. the date the data was added/modified, etc.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    },
    "cdk_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer",
    "cdk_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: layers.layer.owners.get
Return all owners associated with single layer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.contextEntities.entity.get
Return single context entity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "entity": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "entity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.contextEntities.entity.attributes.put
Update attributes for single context entity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "entity": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "entity"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.contextEntities.entity.attributes.attribute.get
Return single context entity attribute

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "entity": {
      "type": "string"
    },
    "attribute": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "entity",
    "attribute"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.contextEntityTypes.cetype.get
Return objects of particular type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cetype": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cetype"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.contextEntityTypes.cetype.attributes.attribute.get
Return objects of particular type

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cetype": {
      "type": "string"
    },
    "attribute": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cetype",
    "attribute"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.queryContext.post
Query context broker for contextElements

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.subscribeContext.post
Create a new context subscription

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.unsubscribeContext.post
Delete a context subscription

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.updateContext.post
Add or update NGSI contextElements

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: ngsi10.updateContextSubscription.post
Update/edit a context subscription

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: objects.get
Return all objects

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.delete
Delete a single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.get
Get a single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.patch
Edit a single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.layers.get
Get all layers that contain data of single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.layers.layer.delete
Remove data on layer from single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    },
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id",
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.layers.layer.get
Return all data on single layer of single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    },
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id",
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.layers.layer.patch
Update data on layer to single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    },
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id",
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.layers.layer.post
Add data on layer to single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    },
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id",
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: objects.cdk_id.layers.layer.put
Overwrite data on layer to single object

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cdk_id": {
      "type": "string"
    },
    "layer": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cdk_id",
    "layer"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: owners.get
Return all owners

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: owners.post
Create new owner

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: owners.owner.delete
Delete owner - and all layers and data belonging to this owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: owners.owner.get
Get a single owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: owners.owner.patch
Edit an owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: owners.owner.layers.get
Return all layers belonging to a single owner

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "owner": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "owner"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: session.delete
Close session

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: session.get
Return a session key

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Login name."
    },
    "password": {
      "type": "string",
      "description": "Login password."
    }
  },
  "additionalProperties": false,
  "required": [
    "name",
    "password"
  ]
}
```
### Output Schema
```json
{}
```
