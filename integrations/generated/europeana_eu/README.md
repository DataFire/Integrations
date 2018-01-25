# @datafire/europeana_eu

Client library for Europeana

## Installation and Usage
```bash
npm install --save @datafire/europeana_eu
```
```js
let europeana_eu = require('@datafire/europeana_eu').create();

europeana_eu.listProviders({}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * id **required** `string`: id
  * wskey `string`: wskey
  * callback `string`: callback

#### Output
* output [ModelAndView](#modelandview)

### listDatasets
get the list of Europeana datasets


```js
europeana_eu.listDatasets({}, context)
```

#### Input
* input `object`
  * wskey `string`: wskey
  * callback `string`: callback
  * edmDatasetName `string`: edmDatasetName
  * countryCode `string`: countryCode
  * status `string`: status
  * offset `string`: offset
  * pagesize `string`: pagesize

#### Output
* output [ModelAndView](#modelandview)

### openSearch
basic search function following the OpenSearch specification


```js
europeana_eu.openSearch({
  "searchTerms": ""
}, context)
```

#### Input
* input `object`
  * searchTerms **required** `string`: searchTerms
  * startIndex `integer`: startIndex
  * count `integer`: count

#### Output
* output [RssResponse](#rssresponse)

### getProvider
get information about a specific Europeana provider


```js
europeana_eu.getProvider({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id
  * wskey `string`: wskey
  * callback `string`: callback

#### Output
* output [ModelAndView](#modelandview)

### listProviderDatasets
get the list of datasets provided by a specific provider


```js
europeana_eu.listProviderDatasets({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id
  * wskey `string`: wskey
  * callback `string`: callback

#### Output
* output [ModelAndView](#modelandview)

### listProviders
get the list of Europeana data providers


```js
europeana_eu.listProviders({}, context)
```

#### Input
* input `object`
  * wskey `string`: wskey
  * callback `string`: callback
  * countryCode `string`: countryCode
  * offset `string`: offset
  * pagesize `string`: pagesize

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
  * collectionId **required** `string`: collectionId
  * recordId **required** `string`: recordId
  * profile `string`: profile
  * wskey **required** `string`: wskey
  * callback `string`: callback
  * hierarchytimeout `integer`: hierarchytimeout

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
  * collectionId **required** `string`: collectionId
  * recordId **required** `string`: recordId
  * wskey **required** `string`: wskey
  * format `string`: format
  * callback `string`: callback

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

### searchRecords
search for records


```js
europeana_eu.searchRecords({
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * wskey **required** `string`: wskey
  * query `string`: query
  * qf `array`: qf
  * reusability `array`: reusability
  * profile `string`: profile
  * start `integer`: start
  * rows `integer`: rows
  * facet `array`: facet
  * sort `string`: sort
  * colourpalette `array`: colourpalette
  * thumbnail `boolean`: thumbnail
  * media `boolean`: media
  * text_fulltext `boolean`: text_fulltext
  * landingpage `boolean`: landingpage
  * cursor `string`: cursor
  * callback `string`: callback

#### Output
* output [ModelAndView](#modelandview)

### fieldTrip
Google Fieldtrip formatted RSS of selected collections


```js
europeana_eu.fieldTrip({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: query
  * offset `integer`: offset
  * limit `integer`: limit
  * profile `string`: profile
  * language `string`: language

#### Output
* output [ModelAndView](#modelandview)

### suggestions
get autocompletion recommendations for search queries


```js
europeana_eu.suggestions({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: query
  * rows `integer`: rows
  * phrases `boolean`: phrases
  * callback `string`: callback

#### Output
* output [ModelAndView](#modelandview)

### translateQueryUsingGET
translate a term to different languages


```js
europeana_eu.translateQueryUsingGET({
  "term": "",
  "languageCodes": [],
  "wskey": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: term
  * languageCodes **required** `array`: languageCodes
  * wskey **required** `string`: wskey
  * profile `string`: profile
  * callback `string`: callback

#### Output
* output [ModelAndView](#modelandview)



## Definitions

### AtomLink
* AtomLink `object`
  * href `string`

### Channel
* Channel `object`
  * atomLink [AtomLink](#atomlink)
  * image [ChannelImage](#channelimage)
  * items `array`
    * items [Item](#item)
  * itemsPerPage [Statistic](#statistic)
  * query [Query](#query)
  * startIndex [Statistic](#statistic)
  * totalResults [Statistic](#statistic)

### ChannelImage


### Enclosure
* Enclosure `object`
  * url `string`

### Item
* Item `object`
  * dcCreator `string`
  * dcTermsHasPart `array`
    * items `string`
  * dcTermsIsPartOf `array`
    * items `string`
  * description `string`
  * enclosure [Enclosure](#enclosure)
  * enrichmentAgentLabel `array`
    * items `string`
  * enrichmentAgentTerm `array`
    * items `string`
  * enrichmentConceptLabel `array`
    * items `string`
  * enrichmentConceptTerm `array`
    * items `string`
  * enrichmentPeriodBegin `string`
  * enrichmentPeriodEnd `string`
  * enrichmentPeriodLabel `array`
    * items `string`
  * enrichmentPeriodTerm `array`
    * items `string`
  * enrichmentPlaceLabel `array`
    * items `string`
  * enrichmentPlaceLatitude `number`
  * enrichmentPlaceLongitude `number`
  * enrichmentPlaceTerm `array`
    * items `string`
  * europeanaDataProvider `string`
  * europeanaLanguage `string`
  * europeanaProvider `string`
  * europeanaRights `array`
    * items `string`
  * europeanaType `string`
  * europeanaYear `string`
  * guid `string`
  * link `string`
  * title `string`

### ModelAndView
* ModelAndView `object`
  * empty `boolean`
  * model `object`
  * modelMap `object`
  * reference `boolean`
  * view [View](#view)
  * viewName `string`

### ModelMap
* ModelMap `object`

### Query
* Query `object`
  * searchTerms `string`
  * startPage `integer`

### RssResponse
* RssResponse `object`
  * channel [Channel](#channel)

### Statistic
* Statistic `object`
  * value `integer`

### View
* View `object`
  * contentType `string`


