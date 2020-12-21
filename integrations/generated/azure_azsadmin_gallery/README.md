# @datafire/azure_azsadmin_gallery

Client library for GalleryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_gallery
```
```js
let azure_azsadmin_gallery = require('@datafire/azure_azsadmin_gallery').create({
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

The Admin Gallery Management Client.

## Actions

### Operations_List
Gets the available gallery admin operations.


```js
azure_azsadmin_gallery.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Operation
* Operation `object`: Represents a REST operation.
  * display [OperationDisplayDefinition](#operationdisplaydefinition)
  * name `string`: Name of the REST operation.
  * origin `string`: Origin of the REST operation.

### OperationDisplayDefinition
* OperationDisplayDefinition `object`: Information about the REST operation.
  * description `string`: Description of the REST operation.
  * operation `string`: Type of REST operation.
  * provider `string`: Provider of the REST operation.
  * resource `string`: Resource returned by the REST operation.

### OperationList
* OperationList `object`: List of operations.
  * value `array`: List of operations.
    * items [Operation](#operation)

### Resource
* Resource `object`: Base Resource Object.
  * id `string`: URI of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of the resource.


