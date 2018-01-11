# @datafire/amazonaws_cloudsearchdomain

Client library for Amazon CloudSearch Domain

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudsearchdomain
```
```js
let amazonaws_cloudsearchdomain = require('@datafire/amazonaws_cloudsearchdomain').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_cloudsearchdomain.UploadDocuments({}).then(data => {
  console.log(data);
})
```

## Description

<p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p> <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p> <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>

## Actions

### UploadDocuments



```js
amazonaws_cloudsearchdomain.UploadDocuments({
  "documents": ""
}, context)
```

#### Input
* input `object`
  * documents **required** [Blob](#blob)

#### Output
* output [UploadDocumentsResponse](#uploaddocumentsresponse)

### Search



```js
amazonaws_cloudsearchdomain.Search({}, context)
```

#### Input
* input `object`

#### Output
* output [SearchResponse](#searchresponse)

### Suggest



```js
amazonaws_cloudsearchdomain.Suggest({}, context)
```

#### Input
* input `object`

#### Output
* output [SuggestResponse](#suggestresponse)



## Definitions

### Adds
* Adds `integer`

### Blob
* Blob `string`

### Bucket
* Bucket `object`: A container for facet information. 
  * count [Long](#long)
  * value [String](#string)

### BucketInfo
* BucketInfo `object`: A container for the calculated facet values and counts.
  * buckets [BucketList](#bucketlist)

### BucketList
* BucketList `array`
  * items [Bucket](#bucket)

### ContentType
* ContentType `string` (values: application/json, application/xml)

### Cursor
* Cursor `string`

### Deletes
* Deletes `integer`

### DocumentServiceException
* DocumentServiceException `object`: Information about any problems encountered while processing an upload request.
  * message [String](#string)
  * status [String](#string)

### DocumentServiceWarning
* DocumentServiceWarning `object`: A warning returned by the document service when an issue is discovered while processing an upload request.
  * message [String](#string)

### DocumentServiceWarnings
* DocumentServiceWarnings `array`
  * items [DocumentServiceWarning](#documentservicewarning)

### Double
* Double `number`

### Expr
* Expr `string`

### Exprs
* Exprs `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Facet
* Facet `string`

### Facets
* Facets `array`
  * items `object`
    * key [String](#string)
    * value [BucketInfo](#bucketinfo)

### FieldStats
* FieldStats `object`: The statistics for a field calculated in the request.
  * count [Long](#long)
  * max [String](#string)
  * mean [String](#string)
  * min [String](#string)
  * missing [Long](#long)
  * stddev [Double](#double)
  * sum [Double](#double)
  * sumOfSquares [Double](#double)

### FieldValue
* FieldValue `array`
  * items [String](#string)

### Fields
* Fields `array`
  * items `object`
    * key [String](#string)
    * value [FieldValue](#fieldvalue)

### FilterQuery
* FilterQuery `string`

### Highlight
* Highlight `string`

### Highlights
* Highlights `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Hit
* Hit `object`: Information about a document that matches the search request.
  * exprs [Exprs](#exprs)
  * fields [Fields](#fields)
  * highlights [Highlights](#highlights)
  * id [String](#string)

### HitList
* HitList `array`
  * items [Hit](#hit)

### Hits
* Hits `object`: The collection of documents that match the search request.
  * cursor [String](#string)
  * found [Long](#long)
  * hit [HitList](#hitlist)
  * start [Long](#long)

### Long
* Long `integer`

### Partial
* Partial `boolean`

### Query
* Query `string`

### QueryOptions
* QueryOptions `string`

### QueryParser
* QueryParser `string` (values: simple, structured, lucene, dismax)

### Return
* Return `string`

### SearchException
* SearchException `object`: Information about any problems encountered while processing a search request.
  * message [String](#string)

### SearchRequest
* SearchRequest `object`: Container for the parameters to the <code>Search</code> request.

### SearchResponse
* SearchResponse `object`: The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
  * facets [Facets](#facets)
  * hits [Hits](#hits)
  * stats [Stats](#stats)
  * status [SearchStatus](#searchstatus)

### SearchStatus
* SearchStatus `object`: Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
  * rid [String](#string)
  * timems [Long](#long)

### Size
* Size `integer`

### Sort
* Sort `string`

### Start
* Start `integer`

### Stat
* Stat `string`

### Stats
* Stats `array`: The statistics calculated in the request.
  * items `object`
    * key [String](#string)
    * value [FieldStats](#fieldstats)

### String
* String `string`

### SuggestModel
* SuggestModel `object`: Container for the suggestion information returned in a <code>SuggestResponse</code>.
  * found [Long](#long)
  * query [String](#string)
  * suggestions [Suggestions](#suggestions)

### SuggestRequest
* SuggestRequest `object`: Container for the parameters to the <code>Suggest</code> request.

### SuggestResponse
* SuggestResponse `object`: Contains the response to a <code>Suggest</code> request.
  * status [SuggestStatus](#suggeststatus)
  * suggest [SuggestModel](#suggestmodel)

### SuggestStatus
* SuggestStatus `object`: Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
  * rid [String](#string)
  * timems [Long](#long)

### Suggester
* Suggester `string`

### SuggestionMatch
* SuggestionMatch `object`: An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>. 
  * id [String](#string)
  * score [Long](#long)
  * suggestion [String](#string)

### Suggestions
* Suggestions `array`
  * items [SuggestionMatch](#suggestionmatch)

### SuggestionsSize
* SuggestionsSize `integer`

### UploadDocumentsRequest
* UploadDocumentsRequest `object`: Container for the parameters to the <code>UploadDocuments</code> request.
  * documents **required** [Blob](#blob)

### UploadDocumentsResponse
* UploadDocumentsResponse `object`: Contains the response to an <code>UploadDocuments</code> request.
  * adds [Adds](#adds)
  * deletes [Deletes](#deletes)
  * status [String](#string)
  * warnings [DocumentServiceWarnings](#documentservicewarnings)


