# @datafire/taggun

Client library for TAGGUN Receipt OCR Scanning API

## Installation and Usage
```bash
npm install --save @datafire/taggun
```
```js
let taggun = require('@datafire/taggun').create();

.then(data => {
  console.log(data);
});
```

## Description

Expects only running software, real reactions, and beautifully crafted APIs to serve your every desire to transcribe a piece of paper to digital form.

## Actions

### postApiAccountV1Feedback
Add manually verified receipt data to a given receipt for feedback and training purposes


```js
taggun.postApiAccountV1Feedback({
  "apikey": ""
}, context)
```

#### Input
* input `object`
  * apikey **required** `string`: API authentication key.
  * body [receiptFeedbackAddPayload](#receiptfeedbackaddpayload)

#### Output
* output [Result](#result)

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
  * body [merchantNameAddPayload](#merchantnameaddpayload)

#### Output
* output [Result](#result)

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
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh 

#### Output
* output [receiptMatchResult](#receiptmatchresult)

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
  * body [jsonPayload](#jsonpayload)

#### Output
* output [receiptResult](#receiptresult)

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
  * near `string`: A geo location to search for merchant. Typically in the format of city, state, country.
  * ignoreMerchantName `string`: Ignore this merchant name if detected on the receipt. Use this field to avoid detecting the customer name as the merchant name.
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh 
  * extractTime `boolean`: Set true to return time if found on the receipt. Otherwise, the time is always set to 12:00:00.000.
  * subAccountId `string`: Tag a request with sub-account ID for billing purposes
  * referenceId `string`: Tag a request with a unique reference ID for feedback and training purposes

#### Output
* output [receiptResult](#receiptresult)

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
  * body [storagePayload](#storagepayload)

#### Output
* output [receiptResult](#receiptresult)

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
  * body [urlPayload](#urlpayload)

#### Output
* output [receiptResult](#receiptresult)

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
  * body [jsonPayload](#jsonpayload)

#### Output
* output [receiptVerboseResult](#receiptverboseresult)

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
  * near `string`: A geo location to search for merchant. Typically in the format of city, state, country.
  * ignoreMerchantName `string`: Ignore this merchant name if detected on the receipt. Use this field to avoid detecting the customer name as the merchant name.
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh 
  * extractTime `boolean`: Set true to return time if found on the receipt. Otherwise, the time is always set to 12:00:00.000.
  * subAccountId `string`: Tag a request with sub-account ID for billing purposes
  * referenceId `string`: Tag a request with a unique reference ID for feedback and training purposes

#### Output
* output [receiptVerboseResult](#receiptverboseresult)

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
  * body [storagePayload](#storagepayload)

#### Output
* output [receiptVerboseResult](#receiptverboseresult)

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
  * body [urlPayload](#urlpayload)

#### Output
* output [receiptVerboseResult](#receiptverboseresult)



## Definitions

### ABN
* ABN `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### IBAN
* IBAN `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### LocationResult
* LocationResult `object`
  * location [location](#location)

### Model1
* Model1 `object`
  * x `number`
  * y `number`

### Model2
* Model2 `array`
  * items [Model1](#model1)

### Model3
* Model3 `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### Model4
* Model4 `object`
  * confidenceLevel `number`
  * data `number`
  * keyword `string`
  * text `string`

### Model5
* Model5 `object`
  * productName [productName](#productname)
  * quantity [quantity](#quantity)
  * unitPrice [unitPrice](#unitprice)
  * wineVarietal [wineVarietal](#winevarietal)

### Model6
* Model6 `object`
  * confidenceLevel `number`
  * data [data1](#data1)
  * index `number`
  * regions [regions](#regions)
  * text `string`

### Model7
* Model7 `object`
  * confidenceLevel `number`
  * data `number`
  * keyword `string`
  * text `string`

### Result
* Result `object`
  * result `string`

### badRequestError
* badRequestError `object`
  * error `string`
  * message `string`
  * statusCode `number`

### belgiumVATNumbers
* belgiumVATNumbers `array`
  * items [Model3](#model3)

### data
* data `array`
  * items `string`

### data1
* data1 `object`
  * metadata_type [metadata_type](#metadata_type)
  * quantity [quantity](#quantity)
  * unitPrice [unitPrice1](#unitprice1)

### data2
* data2 `object`
  * countryCode `string`
  * vatNo `string`
  * verificationId `string`
  * vies [vies](#vies)

### date
* date `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### date1
* date1 `object`
  * confidenceLevel `number`
  * data `string`

### entities
* entities `object`
  * ABN [ABN](#abn)
  * IBAN [IBAN](#iban)
  * belgiumVATNumbers [belgiumVATNumbers](#belgiumvatnumbers)
  * excludeItems [excludeItems](#excludeitems)
  * fapiaoInvoice [fapiaoInvoice](#fapiaoinvoice)
  * fapiaoInvoiceCode [fapiaoInvoiceCode](#fapiaoinvoicecode)
  * fapiaoInvoiceNumber [fapiaoInvoiceNumber](#fapiaoinvoicenumber)
  * fapiaoMerchantTaxId [fapiaoMerchantTaxId](#fapiaomerchanttaxid)
  * geoNames [geoNames](#geonames)
  * invoiceNumber [invoiceNumber](#invoicenumber)
  * lineItems [lineItems](#lineitems)
  * merchantVerification [merchantVerification](#merchantverification)
  * qrCodeData [qrCodeData](#qrcodedata)
  * receiptNumber [receiptNumber](#receiptnumber)
  * shoppingMallName [shoppingMallName](#shoppingmallname)
  * wineListItems [wineListItems](#winelistitems)

### excludeItems
* excludeItems `array`
  * items [Model4](#model4)

### fapiaoInvoice
* fapiaoInvoice `object`
  * confidenceLevel `number`
  * data `boolean`
  * keyword `string`
  * text `string`

### fapiaoInvoiceCode
* fapiaoInvoiceCode `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### fapiaoInvoiceNumber
* fapiaoInvoiceNumber `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### fapiaoMerchantTaxId
* fapiaoMerchantTaxId `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### geoNames
* geoNames `array`
  * items [Model7](#model7)

### headers
* headers `object`: Custom http headers can be set to forward to the target URL.
  * x-custom-key `string`

### invoiceNumber
* invoiceNumber `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### itemsCount
* itemsCount `object`
  * confidenceLevel `number`
  * data `number`

### jsonPayload
* jsonPayload `object`
  * contentType **required** `string`
  * extractTime `boolean`: Set true to return time if found on the receipt. Otherwise, the time is always set to 12:00:00.000.
  * filename **required** `string`
  * ignoreMerchantName `string`: Ignore this merchant name if detected on the receipt. Use this field to avoid detecting the customer name as the merchant name.
  * image **required** `string`
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh 
  * near `string`: A geo location to search for merchant. Typically in the format of city, state, country.
  * referenceId `string`: Tag a request with a unique reference ID for feedback and training purposes
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * subAccountId `string`: Tag a request with sub-account ID for billing purposes

### lineAmounts
* lineAmounts `array`
  * items `string`

### lineItems
* lineItems `array`
  * items [Model6](#model6)

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

### merchantAddress1
* merchantAddress1 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantCity
* merchantCity `object`
  * confidenceLevel `number`
  * data `string`

### merchantCity1
* merchantCity1 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantCountryCode
* merchantCountryCode `object`
  * confidenceLevel `number`
  * data `string`

### merchantCountryCode1
* merchantCountryCode1 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantName
* merchantName `object`
  * confidenceLevel `number`
  * data `string`

### merchantName1
* merchantName1 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantNameAddPayload
* merchantNameAddPayload `object`
  * merchantName **required** `string`

### merchantPostalCode
* merchantPostalCode `object`
  * confidenceLevel `number`
  * data `string`

### merchantPostalCode1
* merchantPostalCode1 `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantState
* merchantState `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantTypes
* merchantTypes `object`
  * confidenceLevel `number`
  * data [data](#data)

### merchantTypes1
* merchantTypes1 `object`
  * confidenceLevel `number`
  * data [data](#data)
  * index `number`
  * regions [regions](#regions)
  * text `string`

### merchantVerification
* merchantVerification `object`
  * confidenceLevel `number`
  * data [data2](#data2)
  * index `number`
  * regions [regions](#regions)
  * text `string`

### metadata_type
* metadata_type `object`
  * data `string`
  * text `string`

### paymentType
* paymentType `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### productName
* productName `object`
  * confidenceLevel `number`
  * keyword `string`
  * text `string`

### qrCodeData
* qrCodeData `object`
  * confidenceLevel `number`
  * data `string`
  * keyword `string`
  * text `string`

### quantity
* quantity `object`
  * data `number`
  * text `string`

### receiptFeedbackAddPayload
* receiptFeedbackAddPayload `object`
  * currencyCode `string`
  * date `string`
  * merchantName `string`
  * referenceId **required** `string`
  * taxAmount `number`
  * totalAmount `number`

### receiptMatchResult
* receiptMatchResult `object`
  * confidenceLevel `number`
  * date [date](#date)
  * error `string`
  * match [match](#match)

### receiptNumber
* receiptNumber `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * keyword `string`
  * regions [regions](#regions)
  * text `string`

### receiptResult
* receiptResult `object`
  * confidenceLevel `number`: Overall confidence level
  * date [date1](#date1)
  * error `string`
  * merchantAddress [merchantAddress](#merchantaddress)
  * merchantCity [merchantCity](#merchantcity)
  * merchantCountryCode [merchantCountryCode](#merchantcountrycode)
  * merchantName [merchantName](#merchantname)
  * merchantPostalCode [merchantPostalCode](#merchantpostalcode)
  * merchantState [merchantCity](#merchantcity)
  * merchantTypes [merchantTypes](#merchanttypes)
  * taxAmount [taxAmount](#taxamount)
  * totalAmount [totalAmount](#totalamount)

### receiptVerboseResult
* receiptVerboseResult `object`
  * amounts [lineAmounts](#lineamounts)
  * confidenceLevel `number`
  * date [date](#date)
  * elapsed `number`
  * entities [entities](#entities)
  * error `string`
  * itemsCount [itemsCount](#itemscount)
  * lineAmounts [lineAmounts](#lineamounts)
  * location [LocationResult](#locationresult)
  * merchantAddress [merchantAddress1](#merchantaddress1)
  * merchantCity [merchantCity1](#merchantcity1)
  * merchantCountryCode [merchantCountryCode1](#merchantcountrycode1)
  * merchantName [merchantName1](#merchantname1)
  * merchantPostalCode [merchantPostalCode1](#merchantpostalcode1)
  * merchantState [merchantState](#merchantstate)
  * merchantTypes [merchantTypes1](#merchanttypes1)
  * numbers [lineAmounts](#lineamounts)
  * paymentType [paymentType](#paymenttype)
  * taxAmount [taxAmount1](#taxamount1)
  * text [text](#text)
  * totalAmount [totalAmount1](#totalamount1)

### regions
* regions `array`
  * items [Model2](#model2)

### shoppingMallName
* shoppingMallName `object`
  * confidenceLevel `number`
  * data `string`
  * index `number`
  * regions [regions](#regions)
  * text `string`

### storagePayload
* storagePayload `object`
  * contentType **required** `string`
  * extractTime `boolean`: Set true to return time if found on the receipt. Otherwise, the time is always set to 12:00:00.000.
  * ignoreMerchantName `string`: Ignore this merchant name if detected on the receipt. Use this field to avoid detecting the customer name as the merchant name.
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh 
  * md5 **required** `string`: MD5 hash of the receipt
  * near `string`: A geo location to search for merchant. Typically in the format of city, state, country.
  * referenceId `string`: Tag a request with a unique reference ID for feedback and training purposes
  * refresh `boolean`: Refresh cache if exists
  * subAccountId `string`: Tag a request with sub-account ID for billing purposes

### taxAmount
* taxAmount `object`
  * confidenceLevel `number`
  * data `number`

### taxAmount1
* taxAmount1 `object`
  * confidenceLevel `number`
  * currencyCode `string`
  * data `number`
  * index `number`
  * keyword `string`
  * regions [regions](#regions)
  * text `string`

### text
* text `object`
  * regions [lineAmounts](#lineamounts)
  * text `string`

### totalAmount
* totalAmount `object`
  * confidenceLevel `number`
  * data `number`

### totalAmount1
* totalAmount1 `object`
  * confidenceLevel `number`
  * currencyCode `string`
  * data `number`
  * index `number`
  * keyword `string`
  * regions [regions](#regions)
  * text `string`

### unitPrice
* unitPrice `object`
  * data `number`
  * text `string`

### unitPrice1
* unitPrice1 `object`
  * data `number`
  * text `string`

### urlPayload
* urlPayload `object`
  * extractTime `boolean`: Set true to return time if found on the receipt. Otherwise, the time is always set to 12:00:00.000.
  * headers [headers](#headers)
  * ignoreMerchantName `string`: Ignore this merchant name if detected on the receipt. Use this field to avoid detecting the customer name as the merchant name.
  * incognito `boolean`: Set true to avoid saving the receipt in storage
  * ipAddress `string`: IP Address of the end user
  * language `string` (values: en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh): Set language as a hint. Leave empty for auto detect. Supported languages: , en, es, fr, jp, he, iw, et, lv, lt, fi, el, zh 
  * near `string`: A geo location to search for merchant. Typically in the format of city, state, country.
  * referenceId `string`: Tag a request with a unique reference ID for feedback and training purposes
  * refresh `boolean`: Set true to force re-process image transcription if the receipt is already in storage
  * subAccountId `string`: Tag a request with sub-account ID for billing purposes
  * url **required** `string`: The target URL that contains a receipt file

### vies
* vies `object`
  * address `string`
  * countryCode `string`
  * error `string`
  * name `string`
  * valid `boolean`
  * vatNumber `string`

### wineListItems
* wineListItems `array`
  * items [Model5](#model5)

### wineVarietal
* wineVarietal `object`
  * confidenceLevel `number`
  * keyword `string`
  * text `string`


