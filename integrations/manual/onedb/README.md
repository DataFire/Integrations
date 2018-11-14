# @datafire/onedb

Client library for OneDB

## Installation and Usage
```bash
npm install --save @datafire/onedb
```
```js
let onedb = require('@datafire/onedb').create({
  host: "",
  core_host: "",
  username: "",
  password: "",
  access_token: ""
});

onedb.get({
  "namespace": "",
  "type": "",
  "id": ""
}).then(data => {
  console.log(data);
});
```

## Description

An open source backend-as-a-service

## Actions

### get



```js
onedb.get({
  "namespace": "",
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### list



```js
onedb.list({
  "namespace": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * query `object`
    * sort `string`
    * created_before `string`
    * created_since `string`
    * updated_before `string`
    * updated_since `string`
    * created_by `string`
    * owner `string`

#### Output
*Output schema unknown*

### create



```js
onedb.create({
  "namespace": "",
  "type": "",
  "item": {}
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * id `string`
  * item **required** `object`

#### Output
*Output schema unknown*

### update



```js
onedb.update({
  "namespace": "",
  "type": "",
  "id": "",
  "item": {}
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * id **required** `string`
  * item **required** `object`

#### Output
*Output schema unknown*

### append



```js
onedb.append({
  "namespace": "",
  "type": "",
  "id": "",
  "item": {}
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * id **required** `string`
  * item **required** `object`

#### Output
*Output schema unknown*

### delete



```js
onedb.delete({
  "namespace": "",
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * id **required** `string`

#### Output
*Output schema unknown*

### updateACL



```js
onedb.updateACL({
  "namespace": "",
  "type": "",
  "acl": {}
}, context)
```

#### Input
* input `object`
  * namespace **required** `string`
  * type **required** `string`
  * acl **required** `object`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
