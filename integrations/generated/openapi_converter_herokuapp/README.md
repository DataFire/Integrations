# @datafire/openapi_converter_herokuapp

Client library for Swagger2OpenAPI Converter

## Installation and Usage
```bash
npm install --save @datafire/openapi_converter_herokuapp
```
```js
let openapi_converter_herokuapp = require('@datafire/openapi_converter_herokuapp').create();

openapi_converter_herokuapp.validate({}).then(data => {
  console.log(data);
})
```

## Description

Converter and validator for Swagger 2.0 to OpenAPI 3.0.x definitions

## Actions

### getBadge
Return a redirect to a badge svg file depending on a source definition's validity


```js
openapi_converter_herokuapp.getBadge({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL to retrieve the OpenAPI 3.0.x definition from

#### Output
*Output schema unknown*

### convertUrl
Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL


```js
openapi_converter_herokuapp.convertUrl({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL to retrieve the OpenAPI 2.0 definition from

#### Output
*Output schema unknown*

### convert
Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 


```js
openapi_converter_herokuapp.convert({}, context)
```

#### Input
* input `object`
  * filename `string`: The file to upload and convert
  * source `string`: The text of a Swagger 2.0 definition to convert
  * validate `string` (values: on)

#### Output
*Output schema unknown*

### getStatus
Get the status of the API


```js
openapi_converter_herokuapp.getStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### validateUrl
Validate an OpenAPI 3.0.x definition


```js
openapi_converter_herokuapp.validateUrl({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL to retrieve the OpenAPI 3.0.x definition from

#### Output
*Output schema unknown*

### validate
Validate an OpenAPI 3.0.x definition supplied in the body of the request


```js
openapi_converter_herokuapp.validate({}, context)
```

#### Input
* input `object`
  * filename `string`: The file to upload and validate
  * source `string`: The text of an OpenAPI 3.0.x definition to validate

#### Output
*Output schema unknown*



## Definitions

** No definitions **
