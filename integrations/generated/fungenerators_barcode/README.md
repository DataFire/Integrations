# @datafire/fungenerators_barcode

Client library for Barcode API

## Installation and Usage
```bash
npm install --save @datafire/fungenerators_barcode
```
```js
let fungenerators_barcode = require('@datafire/fungenerators_barcode').create({
  "X-Fungenerators-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

Generate Barcode images for a given barcode number. You can decode Barcode images and get the barcodes in a numberic form as well. Many industry standard barcode types are supported. The best and complete Barcode API on the cloud. [Click here to subscribe](http://fungenerators.com/api/barcode/) 


## Actions

### barcode.decode.post
Decode a Barcode image and return the cotents if successful


```js
fungenerators_barcode.barcode.decode.post({
  "barimage": ""
}, context)
```

#### Input
* input `object`
  * barimage **required** `string`: Barcode image to decode and get the content value

#### Output
*Output schema unknown*

### barcode.decode.types.get
Get the supported barcode types for the decoding process.


```js
fungenerators_barcode.barcode.decode.types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### barcode.encode.get
Get a Bar Code image for the given barcode number


```js
fungenerators_barcode.barcode.encode.get({
  "number": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: Barcode number
  * barcodeformat `string`: Barcode format default C39. Valid values are the keys to those returned from /barcode/encode/types.
  * outputformat `string`: Output image format. Must be one of png/html/jpg/svg
  * widthfactor `integer`: Width factor of the image
  * totalheight `integer`: Total height of the image

#### Output
*Output schema unknown*

### barcode.encode.types.get
Get the supported barcode types for encoding / image generation.


```js
fungenerators_barcode.barcode.encode.types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
