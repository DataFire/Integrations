# @datafire/cenit

Client library for Cenit IO - REST API Specification

## Installation and Usage
```bash
npm install --save datafire @datafire/cenit
```

```js
let datafire = require('datafire');
let cenit = require('@datafire/cenit').actions;

let account = {
  X-User-Access-Key: "",
  X-User-Access-Token: "",
}
let context = new datafire.Context({
  accounts: {
    cenit: account,
  }
})

cenit.setup.connection.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Cenit IO is an Open Platform for Data and Business Integration (iPaaS)


## Actions
### setup.connection.get
Returns a list of connections you've previously created. The connections are returned in sorted order, with the most recent connection appearing first.


```js
cenit.setup.connection.get(null, context)
```


### setup.connection.post
Creates or updates the specified connection by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


```js
cenit.setup.connection.post(null, context)
```


### setup.connection.id.delete
Permanently deletes a connection. It cannot be undone.


```js
cenit.setup.connection.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Connection ID

### setup.connection.id.get
Retrieves the details of an existing connection. You need only supply the unique connection identifier that was returned upon connection creation.


```js
cenit.setup.connection.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Connection ID

### setup.connection_role.get
Returns a list of connection roles you've previously created. The connection roles are returned in sorted order, with the most recent connection role appearing first.


```js
cenit.setup.connection_role.get(null, context)
```


### setup.connection_role.post
Creates or updates the specified connection role by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


```js
cenit.setup.connection_role.post(null, context)
```


### setup.connection_role.id.delete
Deletes the specified connection role.


```js
cenit.setup.connection_role.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Connection role ID

### setup.connection_role.id.get
Returns a connection role


```js
cenit.setup.connection_role.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Connection role ID

### setup.data_type.get
Returns a list of data types you've previously created. The data types are returned in sorted order, with the most recent DataType appearing first.


```js
cenit.setup.data_type.get(null, context)
```


### setup.data_type.post
Creates or updates the specified data type by setting the values of the parameters passed. Any parameters not provided will be left unchanged.


```js
cenit.setup.data_type.post(null, context)
```


### setup.data_type.id.delete
Deletes the specified data type.


```js
cenit.setup.data_type.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - data type ID

### setup.data_type.id.get
Retrieves the details of an existing data type. You need only supply the unique data  type identifier that was returned upon DataType creation.


```js
cenit.setup.data_type.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - data type ID

### setup.flow.get
Returns a list of flows you've previously created. The flows are returned in sorted order, with the most recent flow appearing first.


```js
cenit.setup.flow.get(null, context)
```


### setup.flow.post
Creates or updates the specified flow. Any parameters not provided will be left unchanged.


```js
cenit.setup.flow.post(null, context)
```


### setup.flow.id.delete
Deletes the specified flow.


```js
cenit.setup.flow.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Flow ID

### setup.flow.id.get
Retrieves the details of an existing flow. You need only supply the unique flow identifier that was returned upon flow creation.


```js
cenit.setup.flow.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Flow ID

### setup.namespace.get
Returns a list of namespaces you've previously created. The namespaces are returned in sorted order, with the most recent namespace appearing first.


```js
cenit.setup.namespace.get(null, context)
```


### setup.namespace.post
Creates or updates the specified namespace. Any parameters not provided will be left unchanged.


```js
cenit.setup.namespace.post(null, context)
```


### setup.namespace.id.delete
Deletes the specified namespace.


```js
cenit.setup.namespace.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Namespace ID.

### setup.namespace.id.get
Retrieves the details of an existing namespace. You need only supply the unique webhook namespace that was returned upon namespace creation.


```js
cenit.setup.namespace.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Namespace ID.

### setup.observer.get
Returns a list of events you've previously created. The events are returned in sorted order, with the most recent event appearing first.


```js
cenit.setup.observer.get(null, context)
```


### setup.observer.post
Creates or updates the specified event observer. Any parameters not provided will be left unchanged.


```js
cenit.setup.observer.post(null, context)
```


### setup.observer.id.delete
Deletes the specified event observer.


```js
cenit.setup.observer.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Observer ID

### setup.observer.id.get
Retrieves the details of an existing event. You need only supply the unique event identifier that was returned upon event creation.


```js
cenit.setup.observer.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Observer ID

### setup.scheduler.get
Returns a list of schedulers you've previously created. The schedulers are returned in sorted order, with the most recent scheduler appearing first.


```js
cenit.setup.scheduler.get(null, context)
```


### setup.scheduler.post
Creates or updates the specified scheduler. Any parameters not provided will be left unchanged.


```js
cenit.setup.scheduler.post(null, context)
```


### setup.scheduler.id.delete
Deletes the specified scheduler.


```js
cenit.setup.scheduler.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Scheduler ID

### setup.scheduler.id.get
Retrieves the details of an existing scheduler. You need only supply the unique scheduler identifier that was returned upon scheduler creation.


```js
cenit.setup.scheduler.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Scheduler ID

### setup.schema.get
Returns a list of schemas you've previously created. The schemas are returned in sorted order, with the most recent schema appearing first.


```js
cenit.setup.schema.get(null, context)
```


### setup.schema.post
Creates or updates the specified schema. Any parameters not provided will be left unchanged.


```js
cenit.setup.schema.post(null, context)
```


### setup.schema.id.delete
Deletes the specified schema.


```js
cenit.setup.schema.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Schema ID

### setup.schema.id.get
Retrieves the details of an existing schema. You need only supply the unique schema identifier that was returned upon schema creation.


```js
cenit.setup.schema.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Schema ID

### setup.translator.get
Returns a list of translators you've previously created. The translators are returned in sorted order, with the most recent translator appearing first.


```js
cenit.setup.translator.get(null, context)
```


### setup.translator.post
Creates or updates the specified translator. Any parameters not provided will be left unchanged.


```js
cenit.setup.translator.post(null, context)
```


### setup.translator.id.delete
Deletes the specified translator.


```js
cenit.setup.translator.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Translator ID.

### setup.translator.id.get
Retrieves the details of an existing translator. You need only supply the unique translator identifier that was returned upon translator creation.


```js
cenit.setup.translator.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Translator ID.

### setup.webhook.get
Returns a list of webhooks you've previously created. The webhooks are returned in sorted order, with the most recent webhook appearing first.


```js
cenit.setup.webhook.get(null, context)
```


### setup.webhook.post
Creates or updates the specified webhook. Any parameters not provided will be left unchanged.


```js
cenit.setup.webhook.post(null, context)
```


### setup.webhook.id.delete
Deletes the specified webhook.


```js
cenit.setup.webhook.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Webhook ID.

### setup.webhook.id.get
Retrieves the details of an existing webhook. You need only supply the unique webhook identifier that was returned upon webhook creation.


```js
cenit.setup.webhook.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Webhook ID.

