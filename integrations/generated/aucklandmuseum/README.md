# @datafire/aucklandmuseum

Client library for Auckland Museum API

## Installation and Usage
```bash
npm install --save @datafire/aucklandmuseum
```
```js
let aucklandmuseum = require('@datafire/aucklandmuseum').create();

.then(data => {
  console.log(data);
});
```

## Description

This is technical documentation for the Auckland Museum API


## Actions

### id.media.path.get
Gets `media` at a given path



```js
aucklandmuseum.id.media.path.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: The media `identifier`
  * rendering `string`: The desired media `rendering`

#### Output
*Output schema unknown*

### id.identifier.get
Gets information about a `subject` identified by the `identifier`.

The response format depends upon the `Accept` header.
  - `text/html` - the default response type. Returned data can be easily viewed in any modern Internet Browser
  - `application/ld+json` - the response will be in [JSON-LD](http://json-ld.org/)
  - `application/json` - the response will be a simple JSON Object with keys (predicates) and values (objects).



```js
aucklandmuseum.id.identifier.get({
  "identifier": ""
}, context)
```

#### Input
* input `object`
  * identifier **required** `string`: The identifier path of the `subject` you're looking for

#### Output
*Output schema unknown*

### search.index.operation.get
Use this endpoint to perform simple search queries for finding information and subjects you may be interested in

Searches performed via this endpoint run against an [Elastic](www.elastic.co) server. This endpoint mirrors the Elastic search API documented [here](https://www.elastic.co/guide/en/elasticsearch/reference/1.5/search-search.html)

Use the
  - `collectionsonline` index to perform searches over other all
Collections data
  - `cenotaph` index to perform searches over Cenotaph data



```js
aucklandmuseum.search.index.operation.get({
  "index": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * index **required** `string`: search index name
  * operation **required** `string`: One of the supported elasticsearch operations like `_search` or `_suggest`
  * q `string`: One of the supported elasticsearch query parameter values for key `q`

#### Output
*Output schema unknown*

### search.index.operation.post
Searches performed via this endpoint run against an [Elastic](www.elastic.co) server. This endpoint mirrors the Elastic search API documented [here](https://www.elastic.co/guide/en/elasticsearch/reference/1.5/search-search.html)

Use the
  - `collectionsonline` index to perform searches over other all Collections data
  - `cenotaph` index to perform searches over Cenotaph data



```js
aucklandmuseum.search.index.operation.post({
  "index": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * index **required** `string`: search index name
  * operation **required** `string`: One of the supported elasticsearch operations like `_search` or `_suggest`
  * body `object`

#### Output
*Output schema unknown*

### sparql.get
You can execute your [SPARQL](http://www.w3.org/TR/rdf-sparql-query/) queries against this endpoint.

The sparql query should be provided as the value of the request parameter `query`.
Set the `Accept` header to `application/sparql-results+xml` to get results in XML. Set it to `application/sparql-results+json` to get results in JSON. 

**Note:** This endpoints supports [JSON-P](http://json-p.org/). In order to get a JSON-P response, set the query parameter `callback` to your preferred callback function name. The default function name is `callback()`. When using JSON-P, there is no need to set the `Accept` header because the response will always be in `application/javascript`.



```js
aucklandmuseum.sparql.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: sparql query
  * callback `string`: The [JSON-P](http://json-p.org/) callback parameter
  * infer `boolean`: Whether to get inferred results in the response

#### Output
* output `object`

### sparql.post
You can execute your [SPARQL](http://www.w3.org/TR/rdf-sparql-query/) queries against this endpoint.
The sparql query should be provided as the value of the request parameter `query`.
Set the `Accept` header to `application/sparql-results+xml` to get results in XML. Set it to `application/sparql-results+json` to get results in JSON. 



```js
aucklandmuseum.sparql.post({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: sparql query
  * infer `boolean`: Whether to get inferred results in the response

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
