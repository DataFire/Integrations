# @datafire/google_kgsearch

Client library for Knowledge Graph Search API

## Installation and Usage
```bash
npm install --save @datafire/google_kgsearch
```
```js
let google_kgsearch = require('@datafire/google_kgsearch').create();

.then(data => {
  console.log(data);
});
```

## Description

Searches the Google Knowledge Graph for entities.

## Actions

### kgsearch.entities.search
Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org


```js
google_kgsearch.kgsearch.entities.search({}, context)
```

#### Input
* input `object`
  * ids `array`: The list of entity id to be used for search instead of query string. To specify multiple ids in the HTTP request, repeat the parameter in the URL as in ...?ids=A&ids=B
  * indent `boolean`: Enables indenting of json results.
  * languages `array`: The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'.
  * limit `integer`: Limits the number of entities to be returned.
  * prefix `boolean`: Enables prefix match against names and aliases of entities
  * query `string`: The literal query string for search.
  * types `array`: Restricts returned entities with these types, e.g. Person (as defined in http://schema.org/Person). If multiple types are specified, returned entities will contain one or more of these types.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchResponse](#searchresponse)



## Definitions

### SearchResponse
* SearchResponse `object`: Response message includes the context and a list of matching results which contain the detail of associated entities.
  * itemListElement `array`: The item list of search results.


