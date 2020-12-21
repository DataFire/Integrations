# @datafire/easypdfserver

Client library for EasyPDFServer

## Installation and Usage
```bash
npm install --save @datafire/easypdfserver
```
```js
let easypdfserver = require('@datafire/easypdfserver').create();

.then(data => {
  console.log(data);
});
```

## Description

API for converting HTML to PDF.

## Actions

### make_pdf.post
Generate a PDF from HTML or URL.


```js
easypdfserver.make_pdf.post({
  "body": {
    "key": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * html `string`
    * key **required** `string`
    * url `string`

#### Output
* output `string`



## Definitions

*This integration has no definitions*
