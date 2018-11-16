# @datafire/taggun

Client library for taggun.io

## Installation and Usage
```bash
npm install --save @datafire/taggun
```
```js
let taggun = require('@datafire/taggun').create({
  apikey: ""
});

taggun.postApiAccountV1MerchantnameAdd({
  "apikey": ""
}).then(data => {
  console.log(data);
});
```

## Description

Expects only running software, real reactions, and beautifully crafted APIs to serve your every desire to transcript a piece of paper to digital form.

## Actions

### postApiAccountV1MerchantnameAdd
add a keyword to your account's model to predict merchant name


```js
taggun.postApiAccountV1MerchantnameAdd({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%201](#model%201)

#### Output
* output [Result](#result)

### postApiArticleV1VerboseFile
transcribe an article by uploading an image file and return detailed result


```js
taggun.postApiArticleV1VerboseFile({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * file `string`, `object`: file less than 20MB. Accepted file types: PDF, JPG, PNG, GIF
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 

#### Output
* output [Model%203](#model%203)

### postApiReceiptV1MatchFile
detect and match a receipt against keywords and metadata by uploading an image file


```js
taggun.postApiReceiptV1MatchFile({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * file `string`, `object`: file less than 20MB. Accepted file types: PDF, JPG, PNG, GIF
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * primaryKeywords `array`: An array of primary keywords to match
  * secondaryKeywords `array`: An array of secondary keywords to match (lower confidence level than primaryKeywords)
  * stopWords `array`: An array of stop words that negate the result to be UNLIKELY
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 

#### Output
* output [Model%204](#model%204)

### postApiReceiptV1SimpleEncoded
transcribe a receipt using base64 encoded image in json payload


```js
taggun.postApiReceiptV1SimpleEncoded({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%205](#model%205)

#### Output
* output [Model%207](#model%207)

### postApiReceiptV1SimpleFile
transcribe a receipt by uploading an image file


```js
taggun.postApiReceiptV1SimpleFile({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * file `string`, `object`: file less than 20MB. Accepted file types: PDF, JPG, PNG, GIF
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 

#### Output
* output [Model%207](#model%207)

### postApiReceiptV1SimpleStorage
transcribe a receipt in storage


```js
taggun.postApiReceiptV1SimpleStorage({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%208](#model%208)

#### Output
* output [Model%207](#model%207)

### postApiReceiptV1SimpleUrl
transcribe a receipt from URL


```js
taggun.postApiReceiptV1SimpleUrl({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%209](#model%209)

#### Output
* output [Model%207](#model%207)

### postApiReceiptV1VerboseEncoded
transcribe a receipt using base64 encoded image in json payload and return detailed result


```js
taggun.postApiReceiptV1VerboseEncoded({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%205](#model%205)

#### Output
* output [Model%2017](#model%2017)

### postApiReceiptV1VerboseFile
transcribe a receipt by uploading an image file and return detailed result


```js
taggun.postApiReceiptV1VerboseFile({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * file `string`, `object`: file less than 20MB. Accepted file types: PDF, JPG, PNG, GIF
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 

#### Output
* output [Model%2017](#model%2017)

### postApiReceiptV1VerboseStorage
transcribe a receipt in storage and return detailed result


```js
taggun.postApiReceiptV1VerboseStorage({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%208](#model%208)

#### Output
* output [Model%2017](#model%2017)

### postApiReceiptV1VerboseUrl
transcribe a receipt from URL and return detailed result


```js
taggun.postApiReceiptV1VerboseUrl({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [Model%209](#model%209)

#### Output
* output [Model%2017](#model%2017)



## Definitions

### Error
* Error `object`
  * error [error](#error)

### IBAN
* IBAN `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### Model 1


### Model 10


### Model 11


### Model 12


### Model 13


### Model 14


### Model 15


### Model 16


### Model 17


### Model 2


### Model 3


### Model 4


### Model 5


### Model 6


### Model 7


### Model 8


### Model 9


### Model_1
* Model_1 `object`
  * merchantName **required** `string`

### Model_10
* Model_10 `object`
  * confidenceLevel `number`
  * data `number`
  * index `number`
  * keyword `string`
  * regions [regions](#regions)
  * text `string`

### Model_11
* Model_11 `object`
  * confidenceLevel `number`
  * data `number`
  * index `number`
  * keyword `string`
  * regions [regions](#regions)
  * text `string`

### Model_12
* Model_12 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### Model_13
* Model_13 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### Model_14
* Model_14 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### Model_15
* Model_15 `object`
  * confidenceLevel `number`
  * data [data](#data)
  * index `number`
  * regions [regions](#regions)
  * text `string`

### Model_16
* Model_16 `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### Model_17
* Model_17 `object`
  * amounts [amounts](#amounts)
  * confidenceLevel `number`
  * currency [Model%2012](#model%2012)
  * date [date](#date)
  * elapsed `number`
  * entities [entities](#entities)
  * error `string`
  * lineAmounts [amounts](#amounts)
  * location [Model%202](#model%202)
  * merchantAddress [Model%2014](#model%2014)
  * merchantName [Model%2013](#model%2013)
  * merchantTypes [Model%2015](#model%2015)
  * numbers [amounts](#amounts)
  * taxAmount [Model%2011](#model%2011)
  * text [text](#text)
  * totalAmount [Model%2010](#model%2010)

### Model_2
* Model_2 `object`
  * location [location](#location)

### Model_3
* Model_3 `object`
  * amounts [amounts](#amounts)
  * dates [amounts](#amounts)
  * elapsed `number`
  * error `string`
  * lines [amounts](#amounts)
  * location [Model%202](#model%202)
  * numbers [amounts](#amounts)
  * text [text](#text)

### Model_4
* Model_4 `object`
  * confidenceLevel `number`
  * date [date](#date)
  * error `string`
  * match [match](#match)

### Model_5
* Model_5 `object`
  * contentType **required** `string`
  * filename **required** `string`
  * image **required** `string`
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage

### Model_6
* Model_6 `object`
  * confidenceLevel `number`
  * data `string`

### Model_7
* Model_7 `object`
  * confidenceLevel `number`: Overall confidence level
  * currency [currency](#currency)
  * date [Model%206](#model%206)
  * error `string`
  * merchantAddress [merchantAddress](#merchantaddress)
  * merchantName [merchantName](#merchantname)
  * merchantTypes [merchantTypes](#merchanttypes)
  * taxAmount [taxAmount](#taxamount)
  * totalAmount [totalAmount](#totalamount)

### Model_8
* Model_8 `object`
  * contentType **required** `string`
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 
  * md5 **required** `string`: MD5 hash of the receipt
  * refresh `boolean`: Refresh cache if exists

### Model_9
* Model_9 `object`
  * headers [headers](#headers)
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el 
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * url **required** `string`: The target URL that contains a receipt file

### Result
* Result `object`
  * error `string`
  * result `string`

### amounts
* amounts `array`
  * items `string`

### belgiumVATNumbers
* belgiumVATNumbers `array`
  * items [Model%2016](#model%2016)

### currency
* currency `object`
  * confidenceLevel `number`
  * data `string`

### data
* data `array`
  * items `string`

### date
* date `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### entities
* entities `object`
  * IBAN [IBAN](#iban)
  * belgiumVATNumbers [belgiumVATNumbers](#belgiumvatnumbers)
  * invoiceNumber [invoiceNumber](#invoicenumber)

### error
* error `object`
  * msg `string`: Human readable error
  * type `string`: Type of error

### headers
* headers `object`: Custom http headers can be set to forward to the target URL.
  * x-custom-key `string`

### invoiceNumber
* invoiceNumber `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### location
* location `object`

### match
* match `object`
  * confidenceLevel `number`
  * data `string` (values: LIKELY, UNLIKELY): LIKELY or UNLIKELY
  * index `number`
  * keyword `string`
  * regions [regions](#regions)
  * text `string`

### merchantAddress
* merchantAddress `object`
  * confidenceLevel `number`
  * data `string`

### merchantName
* merchantName `object`
  * confidenceLevel `number`
  * data `string`

### merchantTypes
* merchantTypes `object`
  * confidenceLevel `number`
  * data [data](#data)

### regions
* regions `array`
  * items `string`

### taxAmount
* taxAmount `object`
  * confidenceLevel `number`
  * data `number`

### text
* text `object`
  * regions [regions](#regions)
  * text `string`

### totalAmount
* totalAmount `object`
  * confidenceLevel `number`
  * data `number`


