# @datafire/extendsclass_json_storage

Client library for JSON storage

## Installation and Usage
```bash
npm install --save @datafire/extendsclass_json_storage
```
```js
let extendsclass_json_storage = require('@datafire/extendsclass_json_storage').create();

.then(data => {
  console.log(data);
});
```

## Description

JSON storage API

## Actions

### bin.post
Create a json bin


```js
extendsclass_json_storage.bin.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CreateStatus](#createstatus)

### bin.id.delete
Delete a json bin


```js
extendsclass_json_storage.bin.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DeleteStatus](#deletestatus)

### bin.id.get
Return a json bin


```js
extendsclass_json_storage.bin.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output `object`

### bin.id.patch
Partially update a json bin with JSON Merge Patch


```js
extendsclass_json_storage.bin.id.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [UpdateStatus](#updatestatus)

### bin.id.put
Update a json bin


```js
extendsclass_json_storage.bin.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [UpdateStatus](#updatestatus)



## Definitions

### CreateStatus
* CreateStatus `object`
  * id `string`
  * status `integer`
  * uri `string`

### DeleteStatus
* DeleteStatus `object`
  * status `integer`

### Error
* Error `object`
  * message `string`
  * status `integer`

### UpdateStatus
* UpdateStatus `object`
  * data `object`
  * status `integer`


