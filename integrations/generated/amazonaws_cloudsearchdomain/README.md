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

.then(data => {
  console.log(data);
});
```

## Description

<p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p> <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p> <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>

## Actions

### UploadDocuments



```js
amazonaws_cloudsearchdomain.UploadDocuments({
  "Content-Type": "",
  "format": "",
  "documents": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`
  * format **required** `string`
  * documents **required** `string`: A batch of documents formatted in JSON or HTML.

#### Output
* output [UploadDocumentsResponse](#uploaddocumentsresponse)

### Search



```js
amazonaws_cloudsearchdomain.Search({
  "q": "",
  "format": "",
  "pretty": ""
}, context)
```

#### Input
* input `object`
  * cursor `string`
  * expr `string`
  * facet `string`
  * fq `string`
  * highlight `string`
  * partial `boolean`
  * q **required** `string`
  * q.options `string`
  * q.parser `string`
  * return `string`
  * size `integer`
  * sort `string`
  * start `integer`
  * stats `string`
  * format **required** `string`
  * pretty **required** `string`

#### Output
* output [SearchResponse](#searchresponse)

### Suggest



```js
amazonaws_cloudsearchdomain.Suggest({
  "q": "",
  "suggester": "",
  "format": "",
  "pretty": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`
  * suggester **required** `string`
  * size `integer`
  * format **required** `string`
  * pretty **required** `string`

#### Output
* output [SuggestResponse](#suggestresponse)



## Definitions

### Adds
* Adds `integer`

### Blob
* Blob `string`

### Bucket
* Bucket `object`: A container for facet information. 
  * count
  * value

### BucketInfo
* BucketInfo `object`: A container for the calculated facet values and counts.
  * buckets
    * items [Bucket](#bucket)

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
  * message
  * status

### DocumentServiceWarning
* DocumentServiceWarning `object`: A warning returned by the document service when an issue is discovered while processing an upload request.
  * message

### DocumentServiceWarnings
* DocumentServiceWarnings `array`
  * items [DocumentServiceWarning](#documentservicewarning)

### Double
* Double `number`

### Expr
* Expr `string`

### Exprs
* Exprs `object`

### Facet
* Facet `string`

### Facets
* Facets `object`

### FieldStats
* FieldStats `object`: The statistics for a field calculated in the request.
  * count
  * max
  * mean
  * min
  * missing
  * stddev
  * sum
  * sumOfSquares

### FieldValue
* FieldValue `array`
  * items [String](#string)

### Fields
* Fields `object`

### FilterQuery
* FilterQuery `string`

### Highlight
* Highlight `string`

### Highlights
* Highlights `object`

### Hit
* Hit `object`: Information about a document that matches the search request.
  * exprs
  * fields
  * highlights
  * id

### HitList
* HitList `array`
  * items [Hit](#hit)

### Hits
* Hits `object`: The collection of documents that match the search request.
  * cursor
  * found
  * hit
    * items [Hit](#hit)
  * start

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
  * message

### SearchRequest
* SearchRequest `object`: Container for the parameters to the <code>Search</code> request.

### SearchResponse
* SearchResponse `object`: The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
  * facets
  * hits
    * cursor
    * found
    * hit
      * items [Hit](#hit)
    * start
  * stats
  * status
    * rid
    * timems

### SearchStatus
* SearchStatus `object`: Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
  * rid
  * timems

### Size
* Size `integer`

### Sort
* Sort `string`

### Start
* Start `integer`

### Stat
* Stat `string`

### Stats
* Stats `object`: The statistics calculated in the request.

### String
* String `string`

### SuggestModel
* SuggestModel `object`: Container for the suggestion information returned in a <code>SuggestResponse</code>.
  * found
  * query
  * suggestions
    * items [SuggestionMatch](#suggestionmatch)

### SuggestRequest
* SuggestRequest `object`: Container for the parameters to the <code>Suggest</code> request.

### SuggestResponse
* SuggestResponse `object`: Contains the response to a <code>Suggest</code> request.
  * status
    * rid
    * timems
  * suggest
    * found
    * query
    * suggestions
      * items [SuggestionMatch](#suggestionmatch)

### SuggestStatus
* SuggestStatus `object`: Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
  * rid
  * timems

### Suggester
* Suggester `string`

### SuggestionMatch
* SuggestionMatch `object`: An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>. 
  * id
  * score
  * suggestion

### Suggestions
* Suggestions `array`
  * items [SuggestionMatch](#suggestionmatch)

### SuggestionsSize
* SuggestionsSize `integer`

### UploadDocumentsRequest
* UploadDocumentsRequest `object`: Container for the parameters to the <code>UploadDocuments</code> request.
  * documents **required**

### UploadDocumentsResponse
* UploadDocumentsResponse `object`: Contains the response to an <code>UploadDocuments</code> request.
  * adds
  * deletes
  * status
  * warnings
    * items [DocumentServiceWarning](#documentservicewarning)


