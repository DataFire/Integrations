# @datafire/waag

Client library for CitySDK Linked Data

## Installation and Usage
```bash
npm install --save datafire @datafire/waag
```

```js
let datafire = require('datafire');
let waag = require('@datafire/waag').create();

waag.layers.get({}).then(data => {
  console.log(data);
})
```

## Description
An API for the distribution and annotation of open data, for small cities and big metropolitan areas.

## Actions
### layers.get
Return all layers


```js
waag.layers.get(null, context)
```

#### Parameters
*This action has no parameters*

### layers.post
Create new layer


```js
waag.layers.post(null, context)
```

#### Parameters
*This action has no parameters*

### layers.layer.delete
Delete a layer


```js
waag.layers.layer.delete({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.get
Return single layer


```js
waag.layers.layer.get({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.patch
Edit a layer


```js
waag.layers.layer.patch({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.context.get
Return JSON-LD context of single layer


```js
waag.layers.layer.context.get({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.context.put
Overwrite JSON-LD context of single layer


```js
waag.layers.layer.context.put({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.fields.get
Return all fields of single layer


```js
waag.layers.layer.fields.get({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.fields.post
Create new field for single layer


```js
waag.layers.layer.fields.post({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.fields.field.delete
Delete a single field on single layer


```js
waag.layers.layer.fields.field.delete({
  "layer": "",
  "field": ""
}, context)
```

#### Parameters
* layer (string) **required**
* field (string) **required**

### layers.layer.fields.field.get
Return single field of single layer


```js
waag.layers.layer.fields.field.get({
  "layer": "",
  "field": ""
}, context)
```

#### Parameters
* layer (string) **required**
* field (string) **required**

### layers.layer.fields.field.patch
Edit single field on single layer


```js
waag.layers.layer.fields.field.patch({
  "layer": "",
  "field": ""
}, context)
```

#### Parameters
* layer (string) **required**
* field (string) **required**

### layers.layer.fields.field.put
Overwrite single field on single layer


```js
waag.layers.layer.fields.field.put({
  "layer": "",
  "field": ""
}, context)
```

#### Parameters
* layer (string) **required**
* field (string) **required**

### layers.layer.objects.delete
Delete all objects from a single layer


```js
waag.layers.layer.objects.delete({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.objects.get
Return all objects with data on single layer


```js
waag.layers.layer.objects.get({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.objects.patch
Edit one or more objects and data on single layer


```js
waag.layers.layer.objects.patch({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.objects.post
Create one or more objects with data on single layer, or add data to existing objects (or a combination thereof)


```js
waag.layers.layer.objects.post({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### layers.layer.objects.cdk_id.get
Return metadata of single layer about single object, e.g. the date the data was added/modified, etc.


```js
waag.layers.layer.objects.cdk_id.get({
  "layer": "",
  "cdk_id": ""
}, context)
```

#### Parameters
* layer (string) **required**
* cdk_id (string) **required**

### layers.layer.owners.get
Return all owners associated with single layer


```js
waag.layers.layer.owners.get({
  "layer": ""
}, context)
```

#### Parameters
* layer (string) **required**

### ngsi10.contextEntities.entity.get
Return single context entity


```js
waag.ngsi10.contextEntities.entity.get({
  "entity": ""
}, context)
```

#### Parameters
* entity (string) **required**

### ngsi10.contextEntities.entity.attributes.put
Update attributes for single context entity


```js
waag.ngsi10.contextEntities.entity.attributes.put({
  "entity": ""
}, context)
```

#### Parameters
* entity (string) **required**

### ngsi10.contextEntities.entity.attributes.attribute.get
Return single context entity attribute


```js
waag.ngsi10.contextEntities.entity.attributes.attribute.get({
  "entity": "",
  "attribute": ""
}, context)
```

#### Parameters
* entity (string) **required**
* attribute (string) **required**

### ngsi10.contextEntityTypes.cetype.get
Return objects of particular type


```js
waag.ngsi10.contextEntityTypes.cetype.get({
  "cetype": ""
}, context)
```

#### Parameters
* cetype (string) **required**

### ngsi10.contextEntityTypes.cetype.attributes.attribute.get
Return objects of particular type


```js
waag.ngsi10.contextEntityTypes.cetype.attributes.attribute.get({
  "cetype": "",
  "attribute": ""
}, context)
```

#### Parameters
* cetype (string) **required**
* attribute (string) **required**

### ngsi10.queryContext.post
Query context broker for contextElements


```js
waag.ngsi10.queryContext.post(null, context)
```

#### Parameters
*This action has no parameters*

### ngsi10.subscribeContext.post
Create a new context subscription


```js
waag.ngsi10.subscribeContext.post(null, context)
```

#### Parameters
*This action has no parameters*

### ngsi10.unsubscribeContext.post
Delete a context subscription


```js
waag.ngsi10.unsubscribeContext.post(null, context)
```

#### Parameters
*This action has no parameters*

### ngsi10.updateContext.post
Add or update NGSI contextElements


```js
waag.ngsi10.updateContext.post(null, context)
```

#### Parameters
*This action has no parameters*

### ngsi10.updateContextSubscription.post
Update/edit a context subscription


```js
waag.ngsi10.updateContextSubscription.post(null, context)
```

#### Parameters
*This action has no parameters*

### objects.get
Return all objects


```js
waag.objects.get(null, context)
```

#### Parameters
*This action has no parameters*

### objects.cdk_id.delete
Delete a single object


```js
waag.objects.cdk_id.delete({
  "cdk_id": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**

### objects.cdk_id.get
Get a single object


```js
waag.objects.cdk_id.get({
  "cdk_id": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**

### objects.cdk_id.patch
Edit a single object


```js
waag.objects.cdk_id.patch({
  "cdk_id": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**

### objects.cdk_id.layers.get
Get all layers that contain data of single object


```js
waag.objects.cdk_id.layers.get({
  "cdk_id": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**

### objects.cdk_id.layers.layer.delete
Remove data on layer from single object


```js
waag.objects.cdk_id.layers.layer.delete({
  "cdk_id": "",
  "layer": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**
* layer (string) **required**

### objects.cdk_id.layers.layer.get
Return all data on single layer of single object


```js
waag.objects.cdk_id.layers.layer.get({
  "cdk_id": "",
  "layer": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**
* layer (string) **required**

### objects.cdk_id.layers.layer.patch
Update data on layer to single object


```js
waag.objects.cdk_id.layers.layer.patch({
  "cdk_id": "",
  "layer": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**
* layer (string) **required**

### objects.cdk_id.layers.layer.post
Add data on layer to single object


```js
waag.objects.cdk_id.layers.layer.post({
  "cdk_id": "",
  "layer": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**
* layer (string) **required**

### objects.cdk_id.layers.layer.put
Overwrite data on layer to single object


```js
waag.objects.cdk_id.layers.layer.put({
  "cdk_id": "",
  "layer": ""
}, context)
```

#### Parameters
* cdk_id (string) **required**
* layer (string) **required**

### owners.get
Return all owners


```js
waag.owners.get(null, context)
```

#### Parameters
*This action has no parameters*

### owners.post
Create new owner


```js
waag.owners.post(null, context)
```

#### Parameters
*This action has no parameters*

### owners.owner.delete
Delete owner - and all layers and data belonging to this owner


```js
waag.owners.owner.delete({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required**

### owners.owner.get
Get a single owner


```js
waag.owners.owner.get({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required**

### owners.owner.patch
Edit an owner


```js
waag.owners.owner.patch({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required**

### owners.owner.layers.get
Return all layers belonging to a single owner


```js
waag.owners.owner.layers.get({
  "owner": ""
}, context)
```

#### Parameters
* owner (string) **required**

### session.delete
Close session


```js
waag.session.delete(null, context)
```

#### Parameters
*This action has no parameters*

### session.get
Return a session key


```js
waag.session.get({
  "name": "",
  "password": ""
}, context)
```

#### Parameters
* name (string) **required** - Login name.
* password (string) **required** - Login password.

