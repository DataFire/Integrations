# @datafire/api2pdf

Client library for Api2Pdf - PDF Generation, Powered by AWS Lambda

## Installation and Usage
```bash
npm install --save @datafire/api2pdf
```
```js
let api2pdf = require('@datafire/api2pdf').create({
  HeaderApiKey: "",
  QueryApiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description


# Introduction
[Api2Pdf](https://www.api2pdf.com) is a powerful PDF generation API with no rate limits or file size constraints. Api2Pdf runs on AWS Lambda, a serverless architecture powered by Amazon to scale to millions of requests while being up to 90% cheaper than alternatives. **Supports wkhtmltopdf, Headless Chrome, LibreOffice, and PDF Merge.** You can also generate barcodes with ZXING (Zebra Crossing).
# SDKs & Client Libraries
We've made a number of open source libraries available for the API
- Python: [https://github.com/api2pdf/api2pdf.python](https://github.com/api2pdf/api2pdf.python)
- .NET: [https://github.com/api2pdf/api2pdf.dotnet](https://github.com/api2pdf/api2pdf.dotnet)
- Nodejs: [https://github.com/api2pdf/api2pdf.node](https://github.com/api2pdf/api2pdf.node)
- PHP: [https://github.com/Api2Pdf/api2pdf.php](https://github.com/Api2Pdf/api2pdf.php)
- Ruby: (Coming soon)
# Authorization
Create an account at [portal.api2pdf.com](https://portal.api2pdf.com/register) to get an API key.

**Authorize your API calls**
- GET requests, include apikey=YOUR-API-KEY as a query string parameter
- POST requests, add **Authorization** to your header.
``` Authorization: YOUR-API-KEY ```

# Quickstart
If you are looking for just a quick call to grab PDFs of a URL, you can do a GET request like:
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```

For more advanced usage and settings, see the API specification below.


## Actions

### chromeFromHtmlPost
Convert HTML to a PDF using Headless Chrome on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**


```js
api2pdf.chromeFromHtmlPost({}, context)
```

#### Input
* input `object`
  * body [ChromeHtmlToPdfRequest](#chromehtmltopdfrequest)

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### chromeFromUrlGET
Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 


```js
api2pdf.chromeFromUrlGET({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: Url of the page to convert to PDF. Must start with http:// or https://.
  * output `string`: Specify output=json to receive a JSON output. Defaults to PDF file.

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### chromeFromUrlPost
Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**


```js
api2pdf.chromeFromUrlPost({}, context)
```

#### Input
* input `object`
  * body [ChromeUrlToPdfRequest](#chromeurltopdfrequest)

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### libreConvertPost
Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**


```js
api2pdf.libreConvertPost({}, context)
```

#### Input
* input `object`
  * body [LibreOfficeConvertRequest](#libreofficeconvertrequest)

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### mergePost
Merge two or more PDFs together on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**


```js
api2pdf.mergePost({}, context)
```

#### Input
* input `object`
  * body [MergeRequest](#mergerequest)

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### wkhtmltopdfFromHtmlPost
Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**


```js
api2pdf.wkhtmltopdfFromHtmlPost({}, context)
```

#### Input
* input `object`
  * body [WkHtmlToPdfHtmlToPdfRequest](#wkhtmltopdfhtmltopdfrequest)

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### wkhtmltopdfFromUrlGET
Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 


```js
api2pdf.wkhtmltopdfFromUrlGET({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: Url of the page to convert to PDF. Must start with http:// or https://.
  * output `string`: Specify output=json to receive a JSON output. Defaults to PDF file.

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### wkhtmltopdfFromUrlPost
Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**


```js
api2pdf.wkhtmltopdfFromUrlPost({}, context)
```

#### Input
* input `object`
  * body [WkHtmlToPdfUrlToPdfRequest](#wkhtmltopdfurltopdfrequest)

#### Output
* output [ApiResponseSuccess](#apiresponsesuccess)

### zebraGET
See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 


```js
api2pdf.zebraGET({
  "format": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`: Most common is CODE_39 or QR_CODE
  * value **required** `string`: Specify the text value you want to convert
  * showlabel `boolean`: Show label of text below barcode
  * height `integer`: Height of the barcode generated image
  * width `integer`: Width of the barcode generated image

#### Output
* output `string`



## Definitions

### ApiResponseFailure
* ApiResponseFailure `object`
  * reason `string`: The reason for the PDF generation failure
  * success `boolean`: Will be false if the operation failed

### ApiResponseSuccess
* ApiResponseSuccess `object`
  * cost `number`: Cost of the operation (mbIn + mbOut) * $.001
  * mbIn `number`: The amount of megabytes of bandwidth used to process the pdf
  * mbOut `number`: The amount of megabytes of bandwidth generated from the resulting pdf
  * pdf `string`: A url to the PDF that will exist only for 24 hours
  * success `boolean`: Will be true if the operation suceeded

### ChromeAdvancedOptions
* ChromeAdvancedOptions `object`
  * landscape `string`
  * printBackground `boolean`

### ChromeHtmlToPdfRequest
* ChromeHtmlToPdfRequest `object`
  * fileName `string`
  * html **required** `string`
  * inlinePdf `boolean`
  * options [ChromeAdvancedOptions](#chromeadvancedoptions)

### ChromeUrlToPdfRequest
* ChromeUrlToPdfRequest `object`
  * fileName `string`
  * inlinePdf `boolean`
  * options [ChromeAdvancedOptions](#chromeadvancedoptions)
  * url **required** `string`

### LibreOfficeConvertRequest
* LibreOfficeConvertRequest `object`
  * fileName `string`
  * inlinePdf `boolean`
  * url **required** `string`

### MergeRequest
* MergeRequest `object`
  * fileName `string`
  * inlinePdf `boolean`
  * urls **required** `array`
    * items `string`

### WkHtmlToPdfAdvancedOptions
* WkHtmlToPdfAdvancedOptions `object`
  * orientation `string`
  * pageSize `string`

### WkHtmlToPdfHtmlToPdfRequest
* WkHtmlToPdfHtmlToPdfRequest `object`
  * fileName `string`
  * html **required** `string`
  * inlinePdf `boolean`
  * options [WkHtmlToPdfAdvancedOptions](#wkhtmltopdfadvancedoptions)

### WkHtmlToPdfUrlToPdfRequest
* WkHtmlToPdfUrlToPdfRequest `object`
  * fileName `string`
  * inlinePdf `boolean`
  * options [WkHtmlToPdfAdvancedOptions](#wkhtmltopdfadvancedoptions)
  * url **required** `string`


