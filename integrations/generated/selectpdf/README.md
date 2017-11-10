# @datafire/selectpdf

Client library for SelectPdf HTML To PDF

## Installation and Usage
```bash
npm install --save datafire @datafire/selectpdf
```

```js
let datafire = require('datafire');
let selectpdf = require('@datafire/selectpdf').create();

selectpdf.api2.convert.post({}).then(data => {
  console.log(data);
})
```

## Description
SelectPdf HTML To PDF Online REST API is a professional solution that lets you create PDF from web pages and raw HTML code in your applications. The API is easy to use and the integration takes only a few lines of code.

## Actions
### api2.convert.post
Converts provided HTML string or url to PDF


```js
selectpdf.api2.convert.post({}, context)
```

#### Parameters
* parameters (object)

