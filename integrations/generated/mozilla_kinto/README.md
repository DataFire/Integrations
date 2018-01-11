# @datafire/mozilla_kinto

Client library for kinto

## Installation and Usage
```bash
npm install --save @datafire/mozilla_kinto
```
```js
let mozilla_kinto = require('@datafire/mozilla_kinto').create({
  username: "",
  password: ""
});

mozilla_kinto.get_changess({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### server_info



```js
mozilla_kinto.server_info(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### get_openapi_spec



```js
mozilla_kinto.get_openapi_spec(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### __heartbeat__



```js
mozilla_kinto.__heartbeat__(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### __lbheartbeat__



```js
mozilla_kinto.__lbheartbeat__(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### __version__



```js
mozilla_kinto.__version__(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### batch



```js
mozilla_kinto.batch({
  "BatchPayloadSchema": {
    "requests": []
  }
}, context)
```

#### Input
* input `object`
  * BatchPayloadSchema **required** `object`
    * defaults `object`
      * body `object`
      * headers `object`
      * method `string` (values: GET, HEAD, DELETE, TRACE, POST, PUT, PATCH)
      * path `string`
    * requests **required** `array`
      * items `object`
        * body `object`
        * headers `object`
        * method `string` (values: GET, HEAD, DELETE, TRACE, POST, PUT, PATCH)
        * path **required** `string`

#### Output
* output `object`
  * responses **required** `array`
    * items `object`
      * body `object`
      * headers `object`
      * path **required** `string`
      * status **required** `integer`

### get_buckets



```js
mozilla_kinto.get_buckets({}, context)
```

#### Input
* input `object`
  * _limit `integer`
  * _sort `array`
  * _token `string`
  * _since `integer`
  * _to `integer`
  * _before `integer`
  * id `string`
  * last_modified `integer`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`

#### Output
* output `object`
  * data `array`
    * items `object`

### get_changess



```js
mozilla_kinto.get_changess({}, context)
```

#### Input
* input `object`
  * _limit `integer`
  * _sort `array`
  * _token `string`
  * _since `integer`
  * _to `integer`
  * _before `integer`
  * id `string`
  * last_modified `integer`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`

#### Output
* output `object`
  * data `array`
    * items `object`
      * bucket **required** `string`
      * collection **required** `string`
      * host **required** `string`

### get_collections



```js
mozilla_kinto.get_collections({
  "bucket_id": ""
}, context)
```

#### Input
* input `object`
  * _limit `integer`
  * _sort `array`
  * _token `string`
  * _since `integer`
  * _to `integer`
  * _before `integer`
  * id `string`
  * last_modified `integer`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * bucket_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
      * cache_expires `integer`
      * schema `object`

### get_records



```js
mozilla_kinto.get_records({
  "bucket_id": "",
  "collection_id": ""
}, context)
```

#### Input
* input `object`
  * _limit `integer`
  * _sort `array`
  * _token `string`
  * _since `integer`
  * _to `integer`
  * _before `integer`
  * id `string`
  * last_modified `integer`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * bucket_id **required** `string`
  * collection_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`

### get_record



```js
mozilla_kinto.get_record({
  "bucket_id": "",
  "collection_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * bucket_id **required** `string`
  * collection_id **required** `string`
  * id **required** `string`

#### Output
* output `object`
  * data `object`
  * permissions `object`
    * read `array`
      * items `string`
    * write `array`
      * items `string`

### get_collection



```js
mozilla_kinto.get_collection({
  "bucket_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * bucket_id **required** `string`
  * id **required** `string`

#### Output
* output `object`
  * data `object`
    * cache_expires `integer`
    * schema `object`
  * permissions `object`
    * read `array`
      * items `string`
    * record:create `array`
      * items `string`
    * write `array`
      * items `string`

### get_groups



```js
mozilla_kinto.get_groups({
  "bucket_id": ""
}, context)
```

#### Input
* input `object`
  * _limit `integer`
  * _sort `array`
  * _token `string`
  * _since `integer`
  * _to `integer`
  * _before `integer`
  * id `string`
  * last_modified `integer`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * bucket_id **required** `string`

#### Output
* output `object`
  * data `array`
    * items `object`
      * members `array`
        * items `string`

### get_group



```js
mozilla_kinto.get_group({
  "bucket_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * bucket_id **required** `string`
  * id **required** `string`

#### Output
* output `object`
  * data `object`
    * members `array`
      * items `string`
  * permissions `object`
    * read `array`
      * items `string`
    * write `array`
      * items `string`

### get_bucket



```js
mozilla_kinto.get_bucket({
  "id": ""
}, context)
```

#### Input
* input `object`
  * _fields `array`
  * If-Match `string`
  * If-None-Match `string`
  * id **required** `string`

#### Output
* output `object`
  * data `object`
  * permissions `object`
    * collection:create `array`
      * items `string`
    * group:create `array`
      * items `string`
    * read `array`
      * items `string`
    * write `array`
      * items `string`

### contribute



```js
mozilla_kinto.contribute(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### get_blocklist



```js
mozilla_kinto.get_blocklist({
  "api_ver:\\d+": "",
  "metrics:.*": "",
  "prefix": "",
  "application_guid": "",
  "application_ver": ""
}, context)
```

#### Input
* input `object`
  * api_ver:\d+ **required** `string`
  * metrics:.* **required** `string`
  * prefix **required** `string`
  * application_guid **required** `string`
  * application_ver **required** `string`

#### Output
*Output schema unknown*



## Definitions

** No definitions **
