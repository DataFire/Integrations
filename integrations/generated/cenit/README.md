# @datafire/cenit

Client library for Cenit IO - REST API Specification

## Installation and Usage
```bash
npm install --save @datafire/cenit
```
```js
let cenit = require('@datafire/cenit').create({
  "X-User-Access-Key": "",
  "X-User-Access-Token": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Cenit IO is an Open Platform for Data and Business Integration (iPaaS)


## Actions

### setup.connection.get
Returns a list of connections you've previously created. The connections are returned in sorted order, with the most recent connection appearing first.


```js
cenit.setup.connection.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [connection](#connection)

### setup.connection.post
Creates or updates the specified connection by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


```js
cenit.setup.connection.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [connection](#connection)

### setup.connection.id.delete
Permanently deletes a connection. It cannot be undone.


```js
cenit.setup.connection.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Connection ID

#### Output
*Output schema unknown*

### setup.connection.id.get
Retrieves the details of an existing connection. You need only supply the unique connection identifier that was returned upon connection creation.


```js
cenit.setup.connection.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Connection ID

#### Output
* output [connection](#connection)

### setup.connection_role.get
Returns a list of connection roles you've previously created. The connection roles are returned in sorted order, with the most recent connection role appearing first.


```js
cenit.setup.connection_role.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [connection_role](#connection_role)

### setup.connection_role.post
Creates or updates the specified connection role by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


```js
cenit.setup.connection_role.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [connection_role](#connection_role)

### setup.connection_role.id.delete
Deletes the specified connection role.


```js
cenit.setup.connection_role.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Connection role ID

#### Output
*Output schema unknown*

### setup.connection_role.id.get
Returns a connection role


```js
cenit.setup.connection_role.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Connection role ID

#### Output
* output [connection_role](#connection_role)

### setup.data_type.get
Returns a list of data types you've previously created. The data types are returned in sorted order, with the most recent DataType appearing first.


```js
cenit.setup.data_type.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [data_type](#data_type)

### setup.data_type.post
Creates or updates the specified data type by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


```js
cenit.setup.data_type.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [data_type](#data_type)

### setup.data_type.id.delete
Deletes the specified data type.


```js
cenit.setup.data_type.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: data type ID

#### Output
*Output schema unknown*

### setup.data_type.id.get
Retrieves the details of an existing data type. You need only supply the unique data  type identifier that was returned upon DataType creation.


```js
cenit.setup.data_type.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: data type ID

#### Output
* output [data_type](#data_type)

### setup.flow.get
Returns a list of flows you've previously created. The flows are returned in sorted order, with the most recent flow appearing first.


```js
cenit.setup.flow.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [flow](#flow)

### setup.flow.post
Creates or updates the specified flow. Any parameters not provided will be left unchanged.


```js
cenit.setup.flow.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [flow](#flow)

### setup.flow.id.delete
Deletes the specified flow.


```js
cenit.setup.flow.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Flow ID

#### Output
*Output schema unknown*

### setup.flow.id.get
Retrieves the details of an existing flow. You need only supply the unique flow identifier that was returned upon flow creation.


```js
cenit.setup.flow.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Flow ID

#### Output
* output [flow](#flow)

### setup.namespace.get
Returns a list of namespaces you've previously created. The namespaces are returned in sorted order, with the most recent namespace appearing first.


```js
cenit.setup.namespace.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [namespace](#namespace)

### setup.namespace.post
Creates or updates the specified namespace. Any parameters not provided will be left unchanged.


```js
cenit.setup.namespace.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [namespace](#namespace)

### setup.namespace.id.delete
Deletes the specified namespace.


```js
cenit.setup.namespace.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Namespace ID.

#### Output
*Output schema unknown*

### setup.namespace.id.get
Retrieves the details of an existing namespace. You need only supply the unique webhook namespace that was returned upon namespace creation.


```js
cenit.setup.namespace.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Namespace ID.

#### Output
* output [namespace](#namespace)

### setup.observer.get
Returns a list of events you've previously created. The events are returned in sorted order, with the most recent event appearing first.


```js
cenit.setup.observer.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [observer](#observer)

### setup.observer.post
Creates or updates the specified event observer. Any parameters not provided will be left unchanged.


```js
cenit.setup.observer.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [observer](#observer)

### setup.observer.id.delete
Deletes the specified event observer.


```js
cenit.setup.observer.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Observer ID

#### Output
*Output schema unknown*

### setup.observer.id.get
Retrieves the details of an existing event. You need only supply the unique event identifier that was returned upon event creation.


```js
cenit.setup.observer.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Observer ID

#### Output
* output [observer](#observer)

### setup.scheduler.get
Returns a list of schedulers you've previously created. The schedulers are returned in sorted order, with the most recent scheduler appearing first.


```js
cenit.setup.scheduler.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [scheduler](#scheduler)

### setup.scheduler.post
Creates or updates the specified scheduler. Any parameters not provided will be left unchanged.


```js
cenit.setup.scheduler.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [scheduler](#scheduler)

### setup.scheduler.id.delete
Deletes the specified scheduler.


```js
cenit.setup.scheduler.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Scheduler ID

#### Output
*Output schema unknown*

### setup.scheduler.id.get
Retrieves the details of an existing scheduler. You need only supply the unique scheduler identifier that was returned upon scheduler creation.


```js
cenit.setup.scheduler.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Scheduler ID

#### Output
* output [scheduler](#scheduler)

### setup.schema.get
Returns a list of schemas you've previously created. The schemas are returned in sorted order, with the most recent schema appearing first.


```js
cenit.setup.schema.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [schema](#schema)

### setup.schema.post
Creates or updates the specified schema. Any parameters not provided will be left unchanged.


```js
cenit.setup.schema.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [schema](#schema)

### setup.schema.id.delete
Deletes the specified schema.


```js
cenit.setup.schema.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Schema ID

#### Output
*Output schema unknown*

### setup.schema.id.get
Retrieves the details of an existing schema. You need only supply the unique schema identifier that was returned upon schema creation.


```js
cenit.setup.schema.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Schema ID

#### Output
* output [schema](#schema)

### setup.translator.get
Returns a list of translators you've previously created. The translators are returned in sorted order, with the most recent translator appearing first.


```js
cenit.setup.translator.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [translator](#translator)

### setup.translator.post
Creates or updates the specified translator. Any parameters not provided will be left unchanged.


```js
cenit.setup.translator.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [translator](#translator)

### setup.translator.id.delete
Deletes the specified translator.


```js
cenit.setup.translator.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Translator ID.

#### Output
*Output schema unknown*

### setup.translator.id.get
Retrieves the details of an existing translator. You need only supply the unique translator identifier that was returned upon translator creation.


```js
cenit.setup.translator.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Translator ID.

#### Output
* output [translator](#translator)

### setup.webhook.get
Returns a list of webhooks you've previously created. The webhooks are returned in sorted order, with the most recent webhook appearing first.


```js
cenit.setup.webhook.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [webhook](#webhook)

### setup.webhook.post
Creates or updates the specified webhook. Any parameters not provided will be left unchanged.


```js
cenit.setup.webhook.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [webhook](#webhook)

### setup.webhook.id.delete
Deletes the specified webhook.


```js
cenit.setup.webhook.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Webhook ID.

#### Output
*Output schema unknown*

### setup.webhook.id.get
Retrieves the details of an existing webhook. You need only supply the unique webhook identifier that was returned upon webhook creation.


```js
cenit.setup.webhook.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Webhook ID.

#### Output
* output [webhook](#webhook)



## Definitions

### connection
* connection `object`
  * headers `array`
    * items `object`
      * key `string`
      * value `string`
  * id `string`
  * key `string`
  * name `string`
  * namespace [namespace](#namespace)
  * parameters `array`
    * items `object`
      * key `string`
      * value `string`
  * token `string`
  * url `string`

### connection_role
* connection_role `object`
  * connection `array`
    * items [connection](#connection)
  * id `string`
  * name `string`
  * namespace [namespace](#namespace)
  * webhook `array`
    * items [webhook](#webhook)

### data_type
* data_type `object`
  * id `string`
  * model_schema `string`
  * name `string`
  * namespace [namespace](#namespace)
  * show_navigation_link `string`
  * slug `string`
  * title `string`
  * type `object`

### flow
* flow `object`
  * active `boolean`
  * connection_role [connection_role](#connection_role)
  * custom_data_type [data_type](#data_type)
  * event `object`
  * id `string`
  * name `string`
  * namespace [namespace](#namespace)
  * notify_request `boolean`
  * notify_response `boolean`
  * response_translator [translator](#translator)
  * translator [translator](#translator)
  * webhook [webhook](#webhook)

### namespace
* namespace `object`
  * id `string`
  * name `string`
  * slug `string`

### observer
* observer `object`
  * data_type [data_type](#data_type)
  * id `string`
  * name `string`
  * namespace [namespace](#namespace)
  * triggers `string`
  * type `object`

### scheduler
* scheduler `object`
  * activated `boolean`
  * expression `string`
  * id `string`
  * name `string`
  * namespace [namespace](#namespace)

### schema
* schema `object`
  * id `string`
  * namespace [namespace](#namespace)
  * schema `string`
  * uri `string`

### translator
* translator `object`
  * custom_data_type [data_type](#data_type)
  * id `string`
  * name `string`
  * namespace [namespace](#namespace)
  * source_data_type [data_type](#data_type)
  * style `string` (values: Ruby, Liquid, xslt)
  * target_data_type [data_type](#data_type)
  * transformation `string`
  * type `string` (values: Import, Export, Convert, Update)

### webhook
* webhook `object`
  * headers `array`
    * items `object`
      * key `string`
      * value `string`
  * id `string`
  * name `string`
  * namespace [namespace](#namespace)
  * parameters `array`
    * items `object`
      * key `string`
      * value `string`
  * path `string`


