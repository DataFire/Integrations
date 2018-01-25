# @datafire/deeparteffects

Client library for Deep Art Effects

## Installation and Usage
```bash
npm install --save @datafire/deeparteffects
```
```js
let deeparteffects = require('@datafire/deeparteffects').create({
  api_key: "",
  sigv4: ""
});

deeparteffects.noauth.result.get({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### noauth.result.get



```js
deeparteffects.noauth.result.get({}, context)
```

#### Input
* input `object`
  * submissionId `string`

#### Output
* output [Result](#result)

### noauth.styles.get



```js
deeparteffects.noauth.styles.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Styles](#styles)

### noauth.upload.post



```js
deeparteffects.noauth.upload.post({
  "UploadRequest": {}
}, context)
```

#### Input
* input `object`
  * UploadRequest **required** [UploadRequest](#uploadrequest)

#### Output
* output [UploadResponse](#uploadresponse)



## Definitions

### Empty
* Empty Schema `object`

### Error
* Error Schema `object`
  * message `string`

### Result
* GetResult Schema `object`
  * status `string`: Submissiond status. Can be 'new', 'error', 'processing', 'finished'
  * url `string`: Result url for the artwork

### Style
* Style Schema `object`
  * description `string`: Style description
  * id `string`: The unique identifier for a style
  * title `string`: Style title
  * url `string`: Style URL

### Styles
* List Styles Schema `object`
  * styles `array`
    * items [Style](#style)

### UploadRequest
* Request schema for a submission `object`
  * imageBase64Encoded `string`: Base64 decoded image
  * imageSize `integer`: Image size in px. Picture will be resized for processing.
  * optimizeForPrint `boolean`: Use this flag to get an artwork optimized for print.
  * partnerId `string`: The unique identifier for a partner with dedicated api access.
  * styleId `string`: The unique identifier for a style
  * useOriginalColors `boolean`: Use this flag to use the original color from your photo for the artwork.

### UploadResponse
* Response Schema for upload request `object`
  * submissionId `string`


