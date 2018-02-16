# @datafire/cloudmersive_ocr

Client library for ocrapi

## Installation and Usage
```bash
npm install --save @datafire/cloudmersive_ocr
```
```js
let cloudmersive_ocr = require('@datafire/cloudmersive_ocr').create({
  Apikey: ""
});

cloudmersive_ocr.ImageOcr_Post({
  "imageFile": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ImageOcr_Post
Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.


```js
cloudmersive_ocr.ImageOcr_Post({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [ImageToTextResponse](#imagetotextresponse)



## Definitions

### ImageToTextResponse
* ImageToTextResponse `object`: Response from an OCR to text operation.  Includes the confience rating and converted text result.
  * MeanConfidenceLevel `number`
  * TextResult `string`


