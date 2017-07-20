# @datafire/mozilla_kinto

Client library for kinto

## Installation and Usage
```bash
npm install --save datafire @datafire/mozilla_kinto
```

```js
let datafire = require('datafire');
let mozilla_kinto = require('@datafire/mozilla_kinto').actions;

let account = {
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    mozilla_kinto: account,
  }
})

mozilla_kinto.get_changess({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### server_info



```js
mozilla_kinto.server_info(null, context)
```


### get_openapi_spec



```js
mozilla_kinto.get_openapi_spec(null, context)
```


### __heartbeat__



```js
mozilla_kinto.__heartbeat__(null, context)
```


### __lbheartbeat__



```js
mozilla_kinto.__lbheartbeat__(null, context)
```


### __version__



```js
mozilla_kinto.__version__(null, context)
```


### batch



```js
mozilla_kinto.batch({
  "BatchPayloadSchema": {
    "requests": []
  }
}, context)
```

#### Parameters
* BatchPayloadSchema (object) **required**

### get_buckets



```js
mozilla_kinto.get_buckets({}, context)
```

#### Parameters
* _limit (integer)
* _sort (array)
* _token (string)
* _since (integer)
* _to (integer)
* _before (integer)
* id (string)
* last_modified (integer)
* _fields (array)
* If-Match (string)
* If-None-Match (string)

### get_changess



```js
mozilla_kinto.get_changess({}, context)
```

#### Parameters
* _limit (integer)
* _sort (array)
* _token (string)
* _since (integer)
* _to (integer)
* _before (integer)
* id (string)
* last_modified (integer)
* _fields (array)
* If-Match (string)
* If-None-Match (string)

### get_collections



```js
mozilla_kinto.get_collections({
  "bucket_id": ""
}, context)
```

#### Parameters
* _limit (integer)
* _sort (array)
* _token (string)
* _since (integer)
* _to (integer)
* _before (integer)
* id (string)
* last_modified (integer)
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* bucket_id (string) **required**

### get_records



```js
mozilla_kinto.get_records({
  "bucket_id": "",
  "collection_id": ""
}, context)
```

#### Parameters
* _limit (integer)
* _sort (array)
* _token (string)
* _since (integer)
* _to (integer)
* _before (integer)
* id (string)
* last_modified (integer)
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* bucket_id (string) **required**
* collection_id (string) **required**

### get_record



```js
mozilla_kinto.get_record({
  "bucket_id": "",
  "collection_id": "",
  "id": ""
}, context)
```

#### Parameters
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* bucket_id (string) **required**
* collection_id (string) **required**
* id (string) **required**

### get_collection



```js
mozilla_kinto.get_collection({
  "bucket_id": "",
  "id": ""
}, context)
```

#### Parameters
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* bucket_id (string) **required**
* id (string) **required**

### get_groups



```js
mozilla_kinto.get_groups({
  "bucket_id": ""
}, context)
```

#### Parameters
* _limit (integer)
* _sort (array)
* _token (string)
* _since (integer)
* _to (integer)
* _before (integer)
* id (string)
* last_modified (integer)
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* bucket_id (string) **required**

### get_group



```js
mozilla_kinto.get_group({
  "bucket_id": "",
  "id": ""
}, context)
```

#### Parameters
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* bucket_id (string) **required**
* id (string) **required**

### get_bucket



```js
mozilla_kinto.get_bucket({
  "id": ""
}, context)
```

#### Parameters
* _fields (array)
* If-Match (string)
* If-None-Match (string)
* id (string) **required**

### contribute



```js
mozilla_kinto.contribute(null, context)
```


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

#### Parameters
* api_ver:\d+ (string) **required**
* metrics:.* (string) **required**
* prefix (string) **required**
* application_guid (string) **required**
* application_ver (string) **required**

