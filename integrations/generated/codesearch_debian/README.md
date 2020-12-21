# @datafire/codesearch_debian

Client library for Debian Code Search

## Installation and Usage
```bash
npm install --save @datafire/codesearch_debian
```
```js
let codesearch_debian = require('@datafire/codesearch_debian').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

OpenAPI for https://codesearch.debian.net/

## Actions

### search
Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).

Search results are ordered by their ranking (best results come first).


```js
codesearch_debian.search({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
  * match_mode `string` (values: literal, regexp): Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.

#### Output
* output `array`
  * items [SearchResult](#searchresult)

### searchperpackage
The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719


```js
codesearch_debian.searchperpackage({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
  * match_mode `string` (values: literal, regexp): Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.

#### Output
* output `array`
  * items [PackageSearchResult](#packagesearchresult)



## Definitions

### PackageSearchResult
* PackageSearchResult `object`
  * package **required** `string`: The Debian source package for which up to 2 search results have been aggregated in `results`.
  * results **required** `array`
    * items [SearchResult](#searchresult)

### SearchResult
* SearchResult `object`: A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
  * context **required** `string`: The full line containing the search result.
  * context_after `array`: Up to 2 full lines after the search result (see `context`).
    * items `string`
  * context_before `array`: Up to 2 full lines before the search result (see `context`).
    * items `string`
  * line **required** `integer`: Line number containing the search result.
  * package **required** `string`: The Debian source package containing this search result, including the full Debian version number.
  * path **required** `string`: Path to the file containing the this search result, relative to `package`.


