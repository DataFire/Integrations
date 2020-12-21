# @datafire/mongodb

Client library for MongoDB

## Installation and Usage
```bash
npm install --save @datafire/mongodb
```
```js
let mongodb = require('@datafire/mongodb').create({
  database: "",
  url: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Interact with MongoDB

## Actions

### findOne
Find a single document in the database


```js
mongodb.findOne({
  "collection": "",
  "query": {}
}, context)
```

#### Input
* input `object`
  * collection **required** `string`
  * query **required** `object`
  * projection `object`

#### Output
* output `object`

### find
Find multiple documents in the database


```js
mongodb.find({
  "collection": "",
  "query": {}
}, context)
```

#### Input
* input `object`
  * collection **required** `string`
  * query **required** `object`
  * projection `object`

#### Output
* output `array`
  * items `object`

### insertOne
Insert a document into the database


```js
mongodb.insertOne({
  "collection": "",
  "document": {}
}, context)
```

#### Input
* input `object`
  * collection **required** `string`
  * document **required** `object`

#### Output
* output `object`

### insertMany
Insert multiple documents into the database


```js
mongodb.insertMany({
  "collection": "",
  "documents": []
}, context)
```

#### Input
* input `object`
  * collection **required** `string`
  * documents **required** `array`
    * items `object`

#### Output
* output `object`

### update
Update all matching documents in the database


```js
mongodb.update({
  "collection": "",
  "query": {},
  "update": {}
}, context)
```

#### Input
* input `object`
  * collection **required** `string`
  * query **required** `object`
  * update **required** `object`

#### Output
* output `object`

### remove
Remove all matching documents in the database


```js
mongodb.remove({
  "collection": "",
  "query": {}
}, context)
```

#### Input
* input `object`
  * collection **required** `string`
  * query **required** `object`
  * justOne `boolean`

#### Output
* output `object`



## Definitions

*This integration has no definitions*
