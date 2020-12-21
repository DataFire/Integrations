# @datafire/pdfbroker

Client library for PdfBroker.io API

## Installation and Usage
```bash
npm install --save @datafire/pdfbroker
```
```js
let pdfbroker = require('@datafire/pdfbroker').create({
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

PdfBroker.io is an api for creating pdf files from Xsl-Fo or Html and other useful pdf utilities.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
pdfbroker.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
pdfbroker.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### api.pdf.get
Basic method to verify api is up and running


```js
pdfbroker.api.pdf.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.pdf.pdfconcat.post
Concatenate multiple pdf files into single pdf file..


```js
pdfbroker.api.pdf.pdfconcat.post({}, context)
```

#### Input
* input `object`
  * body [PdfConcatenationRequestDto](#pdfconcatenationrequestdto)

#### Output
* output [PdfResponseDto](#pdfresponsedto)

### api.pdf.pdftoimage.post
Generate an image of to provided pdf file


```js
pdfbroker.api.pdf.pdftoimage.post({}, context)
```

#### Input
* input `object`
  * body [PdfToImageRequestDto](#pdftoimagerequestdto)

#### Output
* output [ImageResponseDto](#imageresponsedto)

### api.pdf.pdfwritestring.post
Write text on a page in a pdf document.


```js
pdfbroker.api.pdf.pdfwritestring.post({}, context)
```

#### Input
* input `object`
  * body [PdfWriteStringRequestDto](#pdfwritestringrequestdto)

#### Output
* output [PdfResponseDto](#pdfresponsedto)

### api.pdf.wkhtmltopdf.post
Generate pdf file from url using the excellent tool wkhtmltopdf.


```js
pdfbroker.api.pdf.wkhtmltopdf.post({}, context)
```

#### Input
* input `object`
  * body [WkHtmlToPdfRequestDto](#wkhtmltopdfrequestdto)

#### Output
* output [PdfResponseDto](#pdfresponsedto)

### api.pdf.xslfo.post
Create pdf-file from complete XSL-FO document.


```js
pdfbroker.api.pdf.xslfo.post({}, context)
```

#### Input
* input `object`
  * body [FoRequestDto](#forequestdto)

#### Output
* output [PdfResponseDto](#pdfresponsedto)

### api.pdf.xslfowithtransform.post
Create pdf-file from transforming xml document with Xsl-Fo transform document.


```js
pdfbroker.api.pdf.xslfowithtransform.post({}, context)
```

#### Input
* input `object`
  * body [FoTransformRequestDto](#fotransformrequestdto)

#### Output
* output [PdfResponseDto](#pdfresponsedto)



## Definitions

### ColorDto
* ColorDto `object`: Set color
  * b `integer`: Get or sets B value of RGB color
  * g `integer`: Get or sets G value of RGB color
  * r `integer`: Get or sets R value of RGB color

### FoRequestDto
* FoRequestDto `object`: The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
  * foDocumentBase64String `string`: This is the complete XSL-FO document provided using Base64 encoding.
  * resources `object`: This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.

### FoTransformRequestDto
* FoTransformRequestDto `object`: The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
  * foDocumentBase64String `string`: This is the complete XSL-FO document provided using Base64 encoding.
  * resources `object`: This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.
  * xmlDataDocumentBase64String `string`: This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding.

### FontDto
* FontDto `object`: The Font dto object
  * name `string`: Gets the name of the font
  * size `number`: Gets the size of the font
  * style `string` (values: Regular, Bold, Italic, BoldItalic): Gets the style of the font

### ImageResponseDto
* ImageResponseDto `object`: When setting the Accept-header in the request to "application/json" the image file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "image/jpeg", "image/png" or "image/gif".
  * errorMessage `string`: If any error occurs the message will be displayed in here
  * imageBase64String `string`: The Base64 encoded string that is the image file.

### PdfConcatenationRequestDto
* PdfConcatenationRequestDto `object`: Request to concatenate a list of Pdf documents to a single Pdf document.
  * pdfDocumentsAsBase64String `array`: The list of Pdf documents encoded as Base64 strings.
    * items `string`

### PdfResponseDto
* PdfResponseDto `object`: When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "application/pdf".
  * errorMessage `string`: If any error occurs the message will be displayed in here
  * pdfFileBase64String `string`: The Base64 encoded string that is the pdf file.

### PdfToImageOptions
* PdfToImageOptions `object`
  * height `integer`: Set the height of the output image, default value is width of source document. To scale height, and keeping proportions, do not set width;
  * horizontalResolution `number`: Set the horizontal resolution, default is 96 dpi;
  * imageFormat `string`: Valid options are "image/jpeg", "image/png" or "image/gif". Default is "image/png"
  * jpegQuality `integer`: Sets the quality of jpeg images, range 0 to 100, default is 75
  * pageNumber `integer`: Which page of the pdf file to generate image from, default is first page
  * pngCompressionLevel `integer`: Sets the png compression level, range 1 - 9, default is 6
  * transparent `boolean`: Keep the background of the image transparent. This setting is not available in JPEG-files, since transparency is not supported in the JPEG format.
  * verticalResolution `number`: Set the vertical resolution, default is 96 dpi;
  * width `integer`: Set the width of the output image, default value is width of source document. To scale width, and keeping proportions, do not set height;

### PdfToImageRequestDto
* PdfToImageRequestDto `object`
  * options [PdfToImageOptions](#pdftoimageoptions)
  * pdfFileBase64String `string`: The pdf file to generate image from, as Base64 encoded string.

### PdfWriteStringOptions
* PdfWriteStringOptions `object`: Options for writing string in pdf page;
  * font [FontDto](#fontdto)
  * pageNumber `integer`: Get or set which page in the pdf to write on, default is first page.
  * text `string`: The text to write in the pdf
  * textColor [ColorDto](#colordto)
  * xOrigin `string` (values: Left, Center, Right): Get or set the point from where the X axis position should be calculated from. Default value is from left side of page.
  * xPosition `number`: Get or set the X axis position on where to write string, in reference to XOrigin.
  * yOrigin `string` (values: Top, Center, Bottom): Get or set the point from where the Y axis position should be calculated from. Default value is from top of page.
  * yPosition `number`: Get or set the Y axis position on where to write string, in reference to YOrigin.

### PdfWriteStringRequestDto
* PdfWriteStringRequestDto `object`: The request dto object to write a string on pdf page
  * fontFileBase64String `string`: System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string.
  * options [PdfWriteStringOptions](#pdfwritestringoptions)
  * pdfFileBase64String `string`: The pdf file to add text to, as Base64 encoded string.

### ProblemDetails
* ProblemDetails `object`
  * detail `string`
  * instance `string`
  * status `integer`
  * title `string`
  * type `string`

### WkHtmlToPdfRequestDto
* WkHtmlToPdfRequestDto `object`: WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;
  * htmlBase64String `string`: Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String.
  * resources `object`: This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string.
  * url `string`: The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set.
  * wkHtmlToPdfArguments `object`: Command line arguments passed to wkhtmltopdf.


