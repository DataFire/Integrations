# @datafire/presalytics_converter

Client library for Doc Converter

## Installation and Usage
```bash
npm install --save @datafire/presalytics_converter
```
```js
let presalytics_converter = require('@datafire/presalytics_converter').create();

.then(data => {
  console.log(data);
});
```

## Description

This api converts file formats of OpenXml and OpenOffice documents formats to vector files (e.g., svg)

## Actions

### svgconvert
converts pptx file to svg image


```js
presalytics_converter.svgconvert({}, context)
```

#### Input
* input `object`
  * file `string`

#### Output
* output `object`
  * blob_name `string`
  * blob_url `string`



## Definitions

*This integration has no definitions*
