# @datafire/wso2apistore_transform

Client library for Transform

## Installation and Usage
```bash
npm install --save @datafire/wso2apistore_transform
```
```js
let wso2apistore_transform = require('@datafire/wso2apistore_transform').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This API provides XML to JSON, JSON to XML transformations.

## Actions

### jsontoxml.post



```js
wso2apistore_transform.jsontoxml.post({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### xmltojson.post



```js
wso2apistore_transform.xmltojson.post({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
