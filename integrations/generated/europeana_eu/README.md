# @datafire/europeana_eu

Client library for Europeana

## Installation and Usage
```bash
npm install --save datafire @datafire/europeana_eu
```

```js
let datafire = require('datafire');
let europeana_eu = require('@datafire/europeana_eu').actions;
let context = new datafire.Context();

europeana_eu.listProviders({}, context).then(data => {
  console.log(data);
})
```

## Description
This Swagger API console provides an overview of an interface to the Europeana REST API. You can build and test anything from the simplest search to a complex query using facetList such as dates, geotags and permissions. For more help and information, head to our comprehensive <a href="http://labs.europeana.eu/api/">online documentation</a>.

## Actions
### getDataset
get information about a specific dataset


```js
europeana_eu.getDataset({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - id
* wskey (string) - wskey
* callback (string) - callback

### listDatasets
get the list of Europeana datasets


```js
europeana_eu.listDatasets({}, context)
```


### openSearch
basic search function following the OpenSearch specification


```js
europeana_eu.openSearch({
  "searchTerms": ""
}, context)
```

#### Parameters
* searchTerms (string) **required** - searchTerms
* startIndex (integer) - startIndex
* count (integer) - count

### getProvider
get information about a specific Europeana provider


```js
europeana_eu.getProvider({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - id
* wskey (string) - wskey
* callback (string) - callback

### listProviderDatasets
get the list of datasets provided by a specific provider


```js
europeana_eu.listProviderDatasets({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - id
* wskey (string) - wskey
* callback (string) - callback

### listProviders
get the list of Europeana data providers


```js
europeana_eu.listProviders({}, context)
```


### getSingleRecordJson
get a single record in JSON format


```js
europeana_eu.getSingleRecordJson({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Parameters
* collectionId (string) **required** - collectionId
* recordId (string) **required** - recordId
* profile (string) - profile
* wskey (string) **required** - wskey
* callback (string) - callback

### getSingleRecordJsonLD
get single record in JSON LD format


```js
europeana_eu.getSingleRecordJsonLD({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Parameters
* collectionId (string) **required** - collectionId
* recordId (string) **required** - recordId
* wskey (string) **required** - wskey
* format (string) - format
* callback (string) - callback

### getSingleRecordRDF
get single record in RDF format)


```js
europeana_eu.getSingleRecordRDF({
  "collectionId": "",
  "recordId": "",
  "wskey": ""
}, context)
```

#### Parameters
* collectionId (string) **required** - collectionId
* recordId (string) **required** - recordId
* wskey (string) **required** - wskey

### searchRecords
search for records


```js
europeana_eu.searchRecords({
  "wskey": ""
}, context)
```

#### Parameters
* wskey (string) **required** - wskey
* query (string) - query
* qf (array) - qf
* reusability (array) - reusability
* profile (string) - profile
* start (integer) - start
* rows (integer) - rows
* facet (array) - facet
* sort (string) - sort
* colourpalette (array) - colourpalette
* thumbnail (boolean) - thumbnail
* media (boolean) - media
* text_fulltext (boolean) - text_fulltext
* landingpage (boolean) - landingpage
* cursor (string) - cursor
* callback (string) - callback

### fieldTrip
Google Fieldtrip formatted RSS of selected collections


```js
europeana_eu.fieldTrip({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - query
* offset (integer) - offset
* limit (integer) - limit
* profile (string) - profile
* language (string) - language

### suggestions
get autocompletion recommendations for search queries


```js
europeana_eu.suggestions({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - query
* rows (integer) - rows
* phrases (boolean) - phrases
* callback (string) - callback

### translateQueryUsingGET
translate a term to different languages


```js
europeana_eu.translateQueryUsingGET({
  "term": "",
  "languageCodes": [],
  "wskey": ""
}, context)
```

#### Parameters
* term (string) **required** - term
* languageCodes (array) **required** - languageCodes
* wskey (string) **required** - wskey
* profile (string) - profile
* callback (string) - callback

