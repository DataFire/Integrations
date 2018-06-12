# @datafire/archive_search

Client library for Search Services

## Installation and Usage
```bash
npm install --save @datafire/archive_search
```
```js
let archive_search = require('@datafire/archive_search').create();

archive_search.search.v1.scrape.get({}).then(data => {
  console.log(data);
});
```

## Description

API for Internet Archive's Search-related services


## Actions

### search.v1.fields.get
Fields that can be requested


```js
archive_search.search.v1.fields.get({}, context)
```

#### Input
* input `object`
  * callback `string`: Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.

#### Output
* output `array`
  * items [Field](#field)

### search.v1.organic.get
Return relevance-based results from search queries



```js
archive_search.search.v1.organic.get({}, context)
```

#### Input
* input `object`
  * q `string`: Lucene-type search query
  * field `string`: Metadata field
  * size `integer`: Number of query results to return
  * total_only `boolean`: Request total only; do not return hits
  * callback `string`: Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.

#### Output
* output [OrganicResult](#organicresult)

### search.v1.scrape.get
Scrape search results from Internet Archive, allowing a scrolling cursor



```js
archive_search.search.v1.scrape.get({}, context)
```

#### Input
* input `object`
  * q `string`: Lucene-type search query
  * field `string`: Metadata field
  * sort `string`: sort collations
  * size `integer`: Number of query results to return
  * cursor `string`: Cursor for scrolling (used for subsequent calls)
  * total_only `boolean`: Request total only; do not return hits
  * callback `string`: Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.

#### Output
* output [ScrapeResult](#scraperesult)



## Definitions

### Cursor
* Cursor `string`: A scroll handle

### Error
* Error `object`
  * code `integer`
  * message `string`

### Field
* Field `string`: The name of a field

### Hit
* Hit `object`: One item returned (object of fields and values)

### OrganicResult
* OrganicResult `object`: The result of a organic search request
  * count `integer`: Number of results returned
  * items `array`
    * items [Hit](#hit)
  * total `integer`: Approximate number of results meeting query

### ScrapeResult
* ScrapeResult `object`: The result of a scrape request
  * count `integer`: Number of results returned
  * cursor [Cursor](#cursor)
  * items `array`
    * items [Hit](#hit)
  * previous [Cursor](#cursor)
  * total `integer`: Total number of results from this cursor point


