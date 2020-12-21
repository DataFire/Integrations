# @datafire/http

Client library for HTTP

## Installation and Usage
```bash
npm install --save @datafire/http
```
```js
let http = require('@datafire/http').create();

.then(data => {
  console.log(data);
});
```

## Description

Make HTTP calls

## Actions

### request
Make an HTTP request


```js
http.request(null, context)
```

#### Input
* input [MethodRequest](#methodrequest)

#### Output
* output [Response](#response)

### get



```js
http.get({
  "url": ""
}, context)
```

#### Input
* input [Request](#request)

#### Output
* output [Response](#response)

### put



```js
http.put(null, context)
```

#### Input
* input [BodyRequest](#bodyrequest)

#### Output
* output [Response](#response)

### post



```js
http.post(null, context)
```

#### Input
* input [BodyRequest](#bodyrequest)

#### Output
* output [Response](#response)

### patch



```js
http.patch(null, context)
```

#### Input
* input [BodyRequest](#bodyrequest)

#### Output
* output [Response](#response)

### delete



```js
http.delete({
  "url": ""
}, context)
```

#### Input
* input [Request](#request)

#### Output
* output [Response](#response)

### options



```js
http.options({
  "url": ""
}, context)
```

#### Input
* input [Request](#request)

#### Output
* output [Response](#response)

### head



```js
http.head({
  "url": ""
}, context)
```

#### Input
* input [Request](#request)

#### Output
* output [Response](#response)



## Definitions

### Response
* Response `object`
  * statusCode `integer`
  * headers `object`
  * body `string`

### Request
* Request `object`
  * url **required** `string`
  * query `object`
  * headers `object`

### BodyRequest
* BodyRequest `object`
  * body `string`
  * url **required** `string`
  * query `object`
  * headers `object`

### MethodRequest
* MethodRequest `object`
  * method **required** `string`
  * body `string`
  * url **required** `string`
  * query `object`
  * headers `object`


