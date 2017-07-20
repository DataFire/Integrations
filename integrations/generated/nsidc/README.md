# @datafire/nsidc

Client library for NSIDC Web Service Documentation Index

## Installation and Usage
```bash
npm install --save datafire @datafire/nsidc
```

```js
let datafire = require('datafire');
let nsidc = require('@datafire/nsidc').actions;
let context = new datafire.Context();

nsidc.OpenSearch.get({}, context).then(data => {
  console.log(data);
})
```

## Description
This API allows programmers to build National Snow and Ice Data Center data and metadata services into their applications.

## Actions
### facets
In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.


```js
nsidc.facets({}, context)
```

#### Parameters
* searchTerms (string) - URL-encoded keyword or keywords desired by the client; OpenSearch 1.1
* count (integer) - The number of search results per page desired by the client; OpenSearch 1.1
* startIndex (integer) - First search result desired by the search client; OpenSearch 1.1
* spatial (string) - 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter
* sortKeys (string) - Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0
* startDate (string) - The start date in yyyy-mm-dd format
* endDate (string) - The end date in yyyy-mm-dd format
* facetFilters (string) - Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values
* source (string) - Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC

### OpenSearch.get
This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.


```js
nsidc.OpenSearch.get({}, context)
```

#### Parameters
* searchTerms (string) - URL-encoded keyword or keywords desired by the client; OpenSearch 1.1
* count (integer) - The number of search results per page desired by the client; OpenSearch 1.1
* startIndex (integer) - First search result desired by the search client; OpenSearch 1.1
* spatial (string) - 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter
* sortKeys (string) - Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0
* startDate (string) - The start date in yyyy-mm-dd format
* endDate (string) - The end date in yyyy-mm-dd format
* facetFilters (string) - Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values
* source (string) - Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC

### OpenSearchDescription.get
Describes the web interface of NSIDC's data search engine


```js
nsidc.OpenSearchDescription.get(null, context)
```


### id
In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.


```js
nsidc.id({
  "q": "",
  "source": ""
}, context)
```

#### Parameters
* q (string) **required** - Search terms typed into the interface (minimum two characters)
* source (string) **required** - Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC

