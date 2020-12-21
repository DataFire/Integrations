# @datafire/europeana_eu

Client library for Europeana Search & Record API

## Installation and Usage
```bash
npm install --save @datafire/europeana_eu
```
```js
let europeana_eu = require('@datafire/europeana_eu').create();

.then(data => {
  console.log(data);
});
```

## Description

This Swagger API console provides an overview of the Europeana Search & Record API. You can build and test anything from the simplest search to a complex query using facetList such as dates, geotags and permissions. For more help and information, head to our comprehensive <a href="https://pro.europeana.eu/page/intro">online documentation</a>.

## Actions

### openSearch
basic search function following the OpenSearch specification


```js
europeana_eu.openSearch({
  "searchTerms": ""
}, context)
```

#### Input
* input `object`
  * count `integer`: count
  * searchTerms **required** `string`: searchTerms
  * startIndex `integer`: startIndex

#### Output
* output [ModelAndView](#modelandview)

### getSingleRecordJson
get a single record in JSON format


```js
europeana_eu.getSingleRecordJson({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * callback `string`: callback
  * collectionId **required** `string`: collectionId
  * profile `string`: profile
  * recordId **required** `string`: recordId
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### getSingleRecordJsonLD
get single record in JSON LD format


```js
europeana_eu.getSingleRecordJsonLD({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * callback `string`: callback
  * collectionId **required** `string`: collectionId
  * recordId **required** `string`: recordId
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### getSingleRecordRDF
get single record in RDF format)


```js
europeana_eu.getSingleRecordRDF({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * collectionId **required** `string`: collectionId
  * recordId **required** `string`: recordId
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### getSingleRecordSchemaOrg
get single record in Schema.org JSON LD format


```js
europeana_eu.getSingleRecordSchemaOrg({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * callback `string`: callback
  * collectionId **required** `string`: collectionId
  * recordId **required** `string`: recordId
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### getSingleRecordTurtle
get single record in turtle format)


```js
europeana_eu.getSingleRecordTurtle({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * collectionId **required** `string`: collectionId
  * recordId **required** `string`: recordId
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### searchRecords
search for records


```js
europeana_eu.searchRecords({
  "query": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * callback `string`: callback
  * colourpalette `array`: colourpalette
  * cursor `string`: cursor
  * facet `array`: facet
  * hit.fl `string`: hit.fl
  * hit.selectors `string`: hit.selectors
  * landingpage `boolean`: landingpage
  * media `boolean`: media
  * profile `string`: profile
  * qf `array`: qf
  * query **required** `string`: query
  * reusability `array`: reusability
  * rows `integer`: rows
  * sort `string`: sort
  * start `integer`: start
  * text_fulltext `boolean`: text_fulltext
  * theme `string`: theme
  * thumbnail `boolean`: thumbnail
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### searchRecordsPost
search for records post


```js
europeana_eu.searchRecordsPost({
  "searchRequest": {
    "query": ""
  },
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * searchRequest **required** [SearchRequest](#searchrequest)
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)

### translateQueryUsingGET
translate a term to different languages


```js
europeana_eu.translateQueryUsingGET({
  "languageCodes": [],
  "term": "",
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * callback `string`: callback
  * languageCodes **required** `array`: languageCodes
  * profile `string`: profile
  * term **required** `string`: term
  * wskey **required** `string`: wskey

#### Output
* output [ModelAndView](#modelandview)



## Definitions

### Hit
* Hit `object`
  * fl `string`
  * selectors `string`

### ModelAndView
* ModelAndView `object`
  * empty `boolean`
  * model `object`
  * modelMap `object`
  * reference `boolean`
  * status `string` (values: 100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511)
  * view [View](#view)
  * viewName `string`

### SearchRequest
* SearchRequest `object`
  * callback `string`
  * colourPalette `array`
    * items `string`
  * cursor `string`
  * facet `array`
    * items `string`
  * hit [Hit](#hit)
  * landingPage `boolean`
  * media `boolean`
  * profile `array`
    * items `string`
  * qf `array`
    * items `string`
  * query **required** `string`
  * reusability `array`
    * items `string`
  * rows `integer`
  * sort `array`
    * items `string`
  * start `integer`
  * textFulltext `boolean`
  * theme `string`
  * thumbnail `boolean`

### View
* View `object`
  * contentType `string`


