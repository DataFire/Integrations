# @datafire/azure_dynamicstelemetry

Client library for Dynamics Telemetry

## Installation and Usage
```bash
npm install --save @datafire/azure_dynamicstelemetry
```
```js
let azure_dynamicstelemetry = require('@datafire/azure_dynamicstelemetry').create({
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



## Actions

### Operations_List



```js
azure_dynamicstelemetry.Operations_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationList](#operationlist)



## Definitions

### Display
* Display `object`
  * description `string`
  * operation `string`
  * provider `string`
  * publisher `string`
  * resource `string`

### LogSpecification
* LogSpecification `object`
  * blobDuration `string`
  * displayName `string`
  * name `string`

### Operation
* Operation `object`
  * display [Display](#display)
  * isDataAction **required** `boolean`
  * name `string`
  * origin `string`
  * properties [Properties](#properties)

### OperationList
* OperationList `array`: List of supported operations.
  * items [Operation](#operation)

### Properties
* Properties `object`
  * serviceSpecification [ServiceSpecification](#servicespecification)

### ServiceSpecification
* ServiceSpecification `object`
  * logSpecifications `array`
    * items [LogSpecification](#logspecification)


