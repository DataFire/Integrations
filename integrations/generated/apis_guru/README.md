# @datafire/apis_guru

Client library for APIs.guru

## Installation and Usage
```bash
npm install --save @datafire/apis_guru
```
```js
let apis_guru = require('@datafire/apis_guru').create();

apis_guru.listAPIs(null).then(data => {
  console.log(data);
});
```

## Description

Wikipedia for Web APIs. Repository of API specs in OpenAPI(fka Swagger) 2.0 format.

**Warning**: If you want to be notified about changes in advance please subscribe to our [Gitter channel](https://gitter.im/APIs-guru/api-models).

Client sample: [[Demo]](https://apis.guru/simple-ui) [[Repo]](https://github.com/APIs-guru/simple-ui)


## Actions

### listAPIs
List all APIs in the directory.
Returns links to OpenAPI specification for each API in the directory.
If API exist in multiple versions `preferred` one is explicitly marked.

Some basic info from OpenAPI spec is cached inside each object.
This allows to generate some simple views without need to fetch OpenAPI spec for each API.



```js
apis_guru.listAPIs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIs](#apis)

### getMetrics
Some basic metrics for the entire directory.
Just stunning numbers to put on a front page and are intended purely for WoW effect :)



```js
apis_guru.getMetrics(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Metrics](#metrics)



## Definitions

### API
* API `object`: Meta information about API
  * added **required** `string`: Timestamp when the API was first added to the directory
  * preferred **required** `string`: Recommended version
  * versions **required** `object`: List of supported versions of the API

### APIs
* APIs `object`: List of API details.

### ApiVersion
* ApiVersion `object`
  * added **required** `string`: Timestamp when the version was added
  * externalDocs `object`: Copy of `externalDocs` section from Swagger spec
  * info **required** `object`: Copy of `info` section from Swagger spec
  * swaggerUrl **required** `string`: URL to Swagger spec in JSON format
  * swaggerYamlUrl **required** `string`: URL to Swagger spec in YAML format
  * updated **required** `string`: Timestamp when the version was updated

### Metrics
* Metrics `object`: List of basic metrics
  * numAPIs **required** `integer`: Number of APIs
  * numEndpoints **required** `integer`: Total number of endpoints inside all specifications
  * numSpecs **required** `integer`: Number of API specifications including different versions of the same API


