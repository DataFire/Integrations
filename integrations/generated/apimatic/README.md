# @datafire/apimatic

Client library for APIMATIC API Transformer

## Installation and Usage
```bash
npm install --save @datafire/apimatic
```
```js
let apimatic = require('@datafire/apimatic').create({
  "api-key": "",
  username: "",
  password: ""
});

apimatic.ConvertAPI({}).then(data => {
  console.log(data);
})
```

## Description

Transform API Descriptions from/to various formats

## Actions

### ConvertAPI
Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.

### INPUTS
* API Blueprint
* Swagger 1.0 - 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* Google Discovery
* RAML 0.8
* I/O Docs - Mashery
* HAR 1.2
* Postman Collection 1.0 - 2.0
* APIMATIC Format
* Mashape

### OUTPUTS
* API Blueprint
* Swagger 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* RAML 0.8 - 1.0
* APIMATIC Format


```js
apimatic.ConvertAPI({
  "format": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string` (values: swagger10, swagger20, swaggeryaml, apiblueprint, wadl2009, raml, apimatic)
  * url `string`

#### Output
* output `object`



## Definitions

** No definitions **
