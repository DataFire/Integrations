# @datafire/selectpdf

Client library for SelectPdf HTML To PDF

## Installation and Usage
```bash
npm install --save @datafire/selectpdf
```
```js
let selectpdf = require('@datafire/selectpdf').create();

selectpdf.api2.convert.post({}).then(data => {
  console.log(data);
});
```

## Description

SelectPdf HTML To PDF Online REST API is a professional solution that lets you create PDF from web pages and raw HTML code in your applications. The API is easy to use and the integration takes only a few lines of code.

## Actions

### api2.convert.post
Converts provided HTML string or url to PDF


```js
selectpdf.api2.convert.post({}, context)
```

#### Input
* input `object`
  * parameters [ConversionParameters](#conversionparameters)

#### Output
*Output schema unknown*



## Definitions

### ConversionParameters
* ConversionParameters `object`
  * base_url `string`: An optional base url parameter can be used together with html to resolve relative paths from the html string
  * html `string`: The raw html string that will be converted to PDF
  * key **required** `string`: The license key required to use the API
  * margin_bottom `integer`: Bottom margin of the generated PDF document in points (1 point = 1/72 inch)
  * margin_left `integer`: Left margin of the generated PDF document in points (1 point = 1/72 inch)
  * margin_right `integer`: Right margin of the generated PDF document in points (1 point = 1/72 inch)
  * margin_top `integer`: Top margin of the generated PDF document in points (1 point = 1/72 inch)
  * page_orientation `string` (values: Portrait, Landscape): Specifies the page orientation of the generated pdf document
  * page_size `string` (values: A1, A2, A3, A4, A5, Letter, HalfLetter, Ledger, Legal): Specifies the page size of the generated pdf document
  * url `string`: The url that will be converted to PDF


