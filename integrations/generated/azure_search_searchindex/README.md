# @datafire/azure_search_searchindex

Client library for SearchIndexClient

## Installation and Usage
```bash
npm install --save @datafire/azure_search_searchindex
```
```js
let azure_search_searchindex = require('@datafire/azure_search_searchindex').create();

azure_search_searchindex.DocumentsProxy_Count({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Client that can be used to query an Azure Search index and upload, merge, or delete documents.

## Actions

### DocumentsProxy_Count
Queries the number of documents in the Azure Search index.


```js
azure_search_searchindex.DocumentsProxy_Count({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `integer`



## Definitions

### DocumentIndexResult
* DocumentIndexResult `object`: Response containing the status of operations for all documents in the indexing request.
  * value `array`: The list of status information for each document in the indexing request.
    * items [IndexingResult](#indexingresult)

### IndexActionType
* IndexActionType `string` (values: upload, merge, mergeOrUpload, delete): Specifies the operation to perform on a document in an indexing batch.

### IndexingResult
* IndexingResult `object`: Status of an indexing operation for a single document.
  * errorMessage `string`: The error message explaining why the indexing operation failed for the document identified by the key; null if indexing succeeded.
  * key `string`: The key of a document that was in the indexing request.
  * status `boolean`: A value indicating whether the indexing operation succeeded for the document identified by the key.
  * statusCode `integer`: The status code of the indexing operation. Possible values include: 200 for a successful update or delete, 201 for successful document creation, 400 for a malformed input document, 404 for document not found, 409 for a version conflict, 422 when the index is temporarily unavailable, or 503 for when the service is too busy.

### QueryType
* QueryType `string` (values: simple, full): Specifies the syntax of the search query. The default is 'simple'. Use 'full' if your query uses the Lucene query syntax.

### SearchMode
* SearchMode `string` (values: any, all): Specifies whether any or all of the search terms must be matched in order to count the document as a match.

### SearchParametersPayload
* SearchParametersPayload `object`: Parameters for filtering, sorting, faceting, paging, and other search query behaviors.
  * count `boolean`: A value that specifies whether to fetch the total count of results. Default is false. Setting this value to true may have a performance impact. Note that the count returned is an approximation.
  * facets `array`: The list of facet expressions to apply to the search query. Each facet expression contains a field name, optionally followed by a comma-separated list of name:value pairs.
    * items `string`
  * filter `string`: The OData $filter expression to apply to the search query.
  * highlight `string`: The comma-separated list of field names to use for hit highlights. Only searchable fields can be used for hit highlighting.
  * highlightPostTag `string`: A string tag that is appended to hit highlights. Must be set with HighlightPreTag. Default is &lt;/em&gt;.
  * highlightPreTag `string`: A string tag that is prepended to hit highlights. Must be set with HighlightPostTag. Default is &lt;em&gt;.
  * minimumCoverage `number`: A number between 0 and 100 indicating the percentage of the index that must be covered by a search query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 100.
  * orderby `string`: The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to the geo.distance() function. Each expression can be followed by asc to indicate ascending, and desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no OrderBy is specified, the default sort order is descending by document match score. There can be at most 32 Orderby clauses.
  * queryType [QueryType](#querytype)
  * scoringParameters `array`: The list of parameter values to be used in scoring functions (for example, referencePointParameter) using the format name:value. For example, if the scoring profile defines a function with a parameter called 'mylocation' the parameter string would be "mylocation:-122.2,44.8"(without the quotes).
    * items `string`
  * scoringProfile `string`: The name of a scoring profile to evaluate match scores for matching documents in order to sort the results.
  * search `string`: A full-text search query expression; Use null or "*" to match all documents.
  * searchFields `string`: The comma-separated list of field names to include in the full-text search.
  * searchMode [SearchMode](#searchmode)
  * select `string`: The comma-separated list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included.
  * skip `integer`: The number of search results to skip. This value cannot be greater than 100,000. If you need to scan documents in sequence, but cannot use Skip due to this limitation, consider using OrderBy on a totally-ordered key and Filter with a range query instead.
  * top `integer`: The number of search results to retrieve. This can be used in conjunction with Skip to implement client-side paging of search results. If results are truncated due to server-side paging, the response will include a continuation token that can be passed to ContinueSearch to retrieve the next page of results. See DocumentSearchResponse.ContinuationToken for more information.

### SuggestParametersPayload
* SuggestParametersPayload `object`: Parameters for filtering, sorting, fuzzy matching, and other suggestions query behaviors.
  * filter `string`: The OData $filter expression to apply to the suggestions query.
  * fuzzy `boolean`: A value indicating whether to use fuzzy matching for the suggestion query. Default is false. when set to true, the query will find suggestions even if there's a substituted or missing character in the search text. While this provides a better experience in some scenarios it comes at a performance cost as fuzzy suggestion searches are slower and consume more resources.
  * highlightPostTag `string`: A string tag that is appended to hit highlights. Must be set with HighlightPreTag. If omitted, hit highlighting of suggestions is disabled.
  * highlightPreTag `string`: A string tag that is prepended to hit highlights. Must be set with HighlightPostTag. If omitted, hit highlighting of suggestions is disabled.
  * minimumCoverage `number`: A number between 0 and 100 indicating the percentage of the index that must be covered by a suggestion query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80.
  * orderby `string`: The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to the geo.distance() function. Each expression can be followed by asc to indicate ascending, and desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no OrderBy is specified, the default sort order is descending by document match score. There can be at most 32 Orderby clauses.
  * search `string`: The search text on which to base suggestions.
  * searchFields `string`: The comma-separated list of field names to consider when querying for suggestions.
  * select `string`: The comma-separated list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included.
  * suggesterName `string`: The name of the suggester as specified in the suggesters collection that's part of the index definition.
  * top `integer`: The number of suggestions to retrieve. This must be a value between 1 and 100. The default is to 5.


