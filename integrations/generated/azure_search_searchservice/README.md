# @datafire/azure_search_searchservice

Client library for SearchServiceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_search_searchservice
```
```js
let azure_search_searchservice = require('@datafire/azure_search_searchservice').create();

.then(data => {
  console.log(data);
});
```

## Description

Client that can be used to manage and query indexes and documents, as well as manage other resources, on a search service.

## Actions

### DataSources_List
Lists all datasources available for a search service.


```js
azure_search_searchservice.DataSources_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: Selects which top-level properties of the data sources to retrieve. Specified as a comma-separated list of JSON property names, or '*' for all properties. The default is all properties.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataSourceListResult](#datasourcelistresult)

### DataSources_Create
Creates a new datasource.


```js
azure_search_searchservice.DataSources_Create({
  "dataSource": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataSource **required** [DataSource](#datasource)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataSource](#datasource)

### DataSources_Delete
Deletes a datasource.


```js
azure_search_searchservice.DataSources_Delete({
  "dataSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataSourceName **required** `string`: The name of the datasource to delete.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### DataSources_Get
Retrieves a datasource definition.


```js
azure_search_searchservice.DataSources_Get({
  "dataSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataSourceName **required** `string`: The name of the datasource to retrieve.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataSource](#datasource)

### DataSources_CreateOrUpdate
Creates a new datasource or updates a datasource if it already exists.


```js
azure_search_searchservice.DataSources_CreateOrUpdate({
  "dataSourceName": "",
  "dataSource": null,
  "Prefer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * dataSourceName **required** `string`: The name of the datasource to create or update.
  * dataSource **required** [DataSource](#datasource)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * Prefer **required** `string` (values: return=representation): For HTTP PUT requests, instructs the service to return the created/updated resource on success.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DataSource](#datasource)

### Indexers_List
Lists all indexers available for a search service.


```js
azure_search_searchservice.Indexers_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: Selects which top-level properties of the indexers to retrieve. Specified as a comma-separated list of JSON property names, or '*' for all properties. The default is all properties.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [IndexerListResult](#indexerlistresult)

### Indexers_Create
Creates a new indexer.


```js
azure_search_searchservice.Indexers_Create({
  "indexer": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexer **required** [Indexer](#indexer)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Indexer](#indexer)

### Indexers_Delete
Deletes an indexer.


```js
azure_search_searchservice.Indexers_Delete({
  "indexerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexerName **required** `string`: The name of the indexer to delete.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Indexers_Get
Retrieves an indexer definition.


```js
azure_search_searchservice.Indexers_Get({
  "indexerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexerName **required** `string`: The name of the indexer to retrieve.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Indexer](#indexer)

### Indexers_CreateOrUpdate
Creates a new indexer or updates an indexer if it already exists.


```js
azure_search_searchservice.Indexers_CreateOrUpdate({
  "indexerName": "",
  "indexer": null,
  "Prefer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexerName **required** `string`: The name of the indexer to create or update.
  * indexer **required** [Indexer](#indexer)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * Prefer **required** `string` (values: return=representation): For HTTP PUT requests, instructs the service to return the created/updated resource on success.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Indexer](#indexer)

### Indexers_Reset
Resets the change tracking state associated with an indexer.


```js
azure_search_searchservice.Indexers_Reset({
  "indexerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexerName **required** `string`: The name of the indexer to reset.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Indexers_Run
Runs an indexer on-demand.


```js
azure_search_searchservice.Indexers_Run({
  "indexerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexerName **required** `string`: The name of the indexer to run.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Indexers_GetStatus
Returns the current status and execution history of an indexer.


```js
azure_search_searchservice.Indexers_GetStatus({
  "indexerName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexerName **required** `string`: The name of the indexer for which to retrieve status.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [IndexerExecutionInfo](#indexerexecutioninfo)

### Indexes_List
Lists all indexes available for a search service.


```js
azure_search_searchservice.Indexes_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: Selects which top-level properties of the index definitions to retrieve. Specified as a comma-separated list of JSON property names, or '*' for all properties. The default is all properties.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [IndexListResult](#indexlistresult)

### Indexes_Create
Creates a new search index.


```js
azure_search_searchservice.Indexes_Create({
  "index": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * index **required** [Index](#index)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Index](#index)

### Indexes_Delete
Deletes a search index and all the documents it contains.


```js
azure_search_searchservice.Indexes_Delete({
  "indexName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexName **required** `string`: The name of the index to delete.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Indexes_Get
Retrieves an index definition.


```js
azure_search_searchservice.Indexes_Get({
  "indexName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexName **required** `string`: The name of the index to retrieve.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Index](#index)

### Indexes_CreateOrUpdate
Creates a new search index or updates an index if it already exists.


```js
azure_search_searchservice.Indexes_CreateOrUpdate({
  "indexName": "",
  "index": null,
  "Prefer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexName **required** `string`: The definition of the index to create or update.
  * index **required** [Index](#index)
  * allowIndexDowntime `boolean`: Allows new analyzers, tokenizers, token filters, or char filters to be added to an index by taking the index offline for at least a few seconds. This temporarily causes indexing and query requests to fail. Performance and write availability of the index can be impaired for several minutes after the index is updated, or longer for very large indexes.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * Prefer **required** `string` (values: return=representation): For HTTP PUT requests, instructs the service to return the created/updated resource on success.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Index](#index)

### Indexes_Analyze
Shows how an analyzer breaks text into tokens.


```js
azure_search_searchservice.Indexes_Analyze({
  "indexName": "",
  "request": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexName **required** `string`: The name of the index for which to test an analyzer.
  * request **required** [AnalyzeRequest](#analyzerequest)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [AnalyzeResult](#analyzeresult)

### Indexes_GetStatistics
Returns statistics for the given index, including a document count and storage usage.


```js
azure_search_searchservice.Indexes_GetStatistics({
  "indexName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * indexName **required** `string`: The name of the index for which to retrieve statistics.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [IndexGetStatisticsResult](#indexgetstatisticsresult)

### GetServiceStatistics
Gets service level statistics for a search service.


```js
azure_search_searchservice.GetServiceStatistics({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ServiceStatistics](#servicestatistics)

### Skillsets_List
List all skillsets in a search service.


```js
azure_search_searchservice.Skillsets_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: Selects which top-level properties of the skillsets to retrieve. Specified as a comma-separated list of JSON property names, or '*' for all properties. The default is all properties.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SkillsetListResult](#skillsetlistresult)

### Skillsets_Create
Creates a new skillset in a search service.


```js
azure_search_searchservice.Skillsets_Create({
  "skillset": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * skillset **required** [Skillset](#skillset)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Skillset](#skillset)

### Skillsets_Delete
Deletes a skillset in a search service.


```js
azure_search_searchservice.Skillsets_Delete({
  "skillsetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * skillsetName **required** `string`: The name of the skillset to delete.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Skillsets_Get
Retrieves a skillset in a search service.


```js
azure_search_searchservice.Skillsets_Get({
  "skillsetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * skillsetName **required** `string`: The name of the skillset to retrieve.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Skillset](#skillset)

### Skillsets_CreateOrUpdate
Creates a new skillset in a search service or updates the skillset if it already exists.


```js
azure_search_searchservice.Skillsets_CreateOrUpdate({
  "skillsetName": "",
  "skillset": null,
  "Prefer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * skillsetName **required** `string`: The name of the skillset to create or update.
  * skillset **required** [Skillset](#skillset)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * Prefer **required** `string` (values: return=representation): For HTTP PUT requests, instructs the service to return the created/updated resource on success.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Skillset](#skillset)

### SynonymMaps_List
Lists all synonym maps available for a search service.


```js
azure_search_searchservice.SynonymMaps_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: Selects which top-level properties of the synonym maps to retrieve. Specified as a comma-separated list of JSON property names, or '*' for all properties. The default is all properties.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SynonymMapListResult](#synonymmaplistresult)

### SynonymMaps_Create
Creates a new synonym map.


```js
azure_search_searchservice.SynonymMaps_Create({
  "synonymMap": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * synonymMap **required** [SynonymMap](#synonymmap)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SynonymMap](#synonymmap)

### SynonymMaps_Delete
Deletes a synonym map.


```js
azure_search_searchservice.SynonymMaps_Delete({
  "synonymMapName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * synonymMapName **required** `string`: The name of the synonym map to delete.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### SynonymMaps_Get
Retrieves a synonym map definition.


```js
azure_search_searchservice.SynonymMaps_Get({
  "synonymMapName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * synonymMapName **required** `string`: The name of the synonym map to retrieve.
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SynonymMap](#synonymmap)

### SynonymMaps_CreateOrUpdate
Creates a new synonym map or updates a synonym map if it already exists.


```js
azure_search_searchservice.SynonymMaps_CreateOrUpdate({
  "synonymMapName": "",
  "synonymMap": null,
  "Prefer": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * synonymMapName **required** `string`: The name of the synonym map to create or update.
  * synonymMap **required** [SynonymMap](#synonymmap)
  * client-request-id `string`: The tracking ID sent with the request to help with debugging.
  * If-Match `string`: Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value.
  * If-None-Match `string`: Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value.
  * Prefer **required** `string` (values: return=representation): For HTTP PUT requests, instructs the service to return the created/updated resource on success.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SynonymMap](#synonymmap)



## Definitions

### AnalyzeRequest
* AnalyzeRequest `object`: Specifies some text and analysis components used to break that text into tokens.
  * analyzer [AnalyzerName](#analyzername)
  * charFilters `array`: An optional list of character filters to use when breaking the given text. This parameter can only be set when using the tokenizer parameter.
    * items [CharFilterName](#charfiltername)
  * text **required** `string`: The text to break into tokens.
  * tokenFilters `array`: An optional list of token filters to use when breaking the given text. This parameter can only be set when using the tokenizer parameter.
    * items [TokenFilterName](#tokenfiltername)
  * tokenizer [TokenizerName](#tokenizername)

### AnalyzeResult
* AnalyzeResult `object`: The result of testing an analyzer on text.
  * tokens `array`: The list of tokens returned by the analyzer specified in the request.
    * items [TokenInfo](#tokeninfo)

### Analyzer
* Analyzer `object`: Abstract base class for analyzers.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### AnalyzerName
* AnalyzerName `string` (values: ar.microsoft, ar.lucene, hy.lucene, bn.microsoft, eu.lucene, bg.microsoft, bg.lucene, ca.microsoft, ca.lucene, zh-Hans.microsoft, zh-Hans.lucene, zh-Hant.microsoft, zh-Hant.lucene, hr.microsoft, cs.microsoft, cs.lucene, da.microsoft, da.lucene, nl.microsoft, nl.lucene, en.microsoft, en.lucene, et.microsoft, fi.microsoft, fi.lucene, fr.microsoft, fr.lucene, gl.lucene, de.microsoft, de.lucene, el.microsoft, el.lucene, gu.microsoft, he.microsoft, hi.microsoft, hi.lucene, hu.microsoft, hu.lucene, is.microsoft, id.microsoft, id.lucene, ga.lucene, it.microsoft, it.lucene, ja.microsoft, ja.lucene, kn.microsoft, ko.microsoft, ko.lucene, lv.microsoft, lv.lucene, lt.microsoft, ml.microsoft, ms.microsoft, mr.microsoft, nb.microsoft, no.lucene, fa.lucene, pl.microsoft, pl.lucene, pt-BR.microsoft, pt-BR.lucene, pt-PT.microsoft, pt-PT.lucene, pa.microsoft, ro.microsoft, ro.lucene, ru.microsoft, ru.lucene, sr-cyrillic.microsoft, sr-latin.microsoft, sk.microsoft, sl.microsoft, es.microsoft, es.lucene, sv.microsoft, sv.lucene, ta.microsoft, te.microsoft, th.microsoft, th.lucene, tr.microsoft, tr.lucene, uk.microsoft, ur.microsoft, vi.microsoft, standard.lucene, standardasciifolding.lucene, keyword, pattern, simple, stop, whitespace): Defines the names of all text analyzers supported by Azure Cognitive Search.

### AsciiFoldingTokenFilter
* AsciiFoldingTokenFilter `object`: Converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if such equivalents exist. This token filter is implemented using Apache Lucene.
  * preserveOriginal `boolean`: A value indicating whether the original token will be kept. Default is false.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### AzureActiveDirectoryApplicationCredentials
* AzureActiveDirectoryApplicationCredentials `object`: Credentials of a registered application created for your search service, used for authenticated access to the encryption keys stored in Azure Key Vault.
  * applicationId **required** `string`: An AAD Application ID that was granted the required access permissions to the Azure Key Vault that is to be used when encrypting your data at rest. The Application ID should not be confused with the Object ID for your AAD Application.
  * applicationSecret `string`: The authentication key of the specified AAD application.

### CharFilter
* CharFilter `object`: Abstract base class for character filters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the char filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### CharFilterName
* CharFilterName `string` (values: html_strip): Defines the names of all character filters supported by Azure Cognitive Search.

### CjkBigramTokenFilter
* CjkBigramTokenFilter `object`: Forms bigrams of CJK terms that are generated from StandardTokenizer. This token filter is implemented using Apache Lucene.
  * ignoreScripts `array`: The scripts to ignore.
    * items [CjkBigramTokenFilterScripts](#cjkbigramtokenfilterscripts)
  * outputUnigrams `boolean`: A value indicating whether to output both unigrams and bigrams (if true), or just bigrams (if false). Default is false.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### CjkBigramTokenFilterScripts
* CjkBigramTokenFilterScripts `string` (values: han, hiragana, katakana, hangul): Scripts that can be ignored by CjkBigramTokenFilter.

### ClassicTokenizer
* ClassicTokenizer `object`: Grammar-based tokenizer that is suitable for processing most European-language documents. This tokenizer is implemented using Apache Lucene.
  * maxTokenLength `integer`: The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### CognitiveServices
* CognitiveServices `object`: Abstract base class for describing any cognitive service resource attached to the skillset.
  * @odata.type **required** `string`
  * description `string`

### CognitiveServicesByKey
* CognitiveServicesByKey `object`: A cognitive service resource provisioned with a key that is attached to a skillset.
  * key **required** `string`
  * @odata.type **required** `string`
  * description `string`

### CommonGramTokenFilter
* CommonGramTokenFilter `object`: Construct bigrams for frequently occurring terms while indexing. Single terms are still indexed too, with bigrams overlaid. This token filter is implemented using Apache Lucene.
  * commonWords **required** `array`: The set of common words.
    * items `string`
  * ignoreCase `boolean`: A value indicating whether common words matching will be case insensitive. Default is false.
  * queryMode `boolean`: A value that indicates whether the token filter is in query mode. When in query mode, the token filter generates bigrams and then removes common words and single terms followed by a common word. Default is false.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### ConditionalSkill
* ConditionalSkill: A skill that enables scenarios that require a Boolean operation to determine the data to assign to an output.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### CorsOptions
* CorsOptions `object`: Defines options to control Cross-Origin Resource Sharing (CORS) for an index.
  * allowedOrigins **required** `array`: The list of origins from which JavaScript code will be granted access to your index. Can contain a list of hosts of the form {protocol}://{fully-qualified-domain-name}[:{port#}], or a single '*' to allow all origins (not recommended).
    * items `string`
  * maxAgeInSeconds `integer`: The duration for which browsers should cache CORS preflight responses. Defaults to 5 minutes.

### CustomAnalyzer
* CustomAnalyzer `object`: Allows you to take control over the process of converting text into indexable/searchable tokens. It's a user-defined configuration consisting of a single predefined tokenizer and one or more filters. The tokenizer is responsible for breaking text into tokens, and the filters for modifying tokens emitted by the tokenizer.
  * charFilters `array`: A list of character filters used to prepare input text before it is processed by the tokenizer. For instance, they can replace certain characters or symbols. The filters are run in the order in which they are listed.
    * items [CharFilterName](#charfiltername)
  * tokenFilters `array`: A list of token filters used to filter out or modify the tokens generated by a tokenizer. For example, you can specify a lowercase filter that converts all characters to lowercase. The filters are run in the order in which they are listed.
    * items [TokenFilterName](#tokenfiltername)
  * tokenizer **required** [TokenizerName](#tokenizername)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### DataChangeDetectionPolicy
* DataChangeDetectionPolicy `object`: Abstract base class for data change detection policies.
  * @odata.type **required** `string`

### DataContainer
* DataContainer `object`: Represents information about the entity (such as Azure SQL table or CosmosDB collection) that will be indexed.
  * name **required** `string`: The name of the table or view (for Azure SQL data source) or collection (for CosmosDB data source) that will be indexed.
  * query `string`: A query that is applied to this data container. The syntax and meaning of this parameter is datasource-specific. Not supported by Azure SQL datasources.

### DataDeletionDetectionPolicy
* DataDeletionDetectionPolicy `object`: Abstract base class for data deletion detection policies.
  * @odata.type **required** `string`

### DataSource
* DataSource `object`: Represents a datasource definition, which can be used to configure an indexer.
  * @odata.etag `string`: The ETag of the DataSource.
  * container **required** [DataContainer](#datacontainer)
  * credentials **required** [DataSourceCredentials](#datasourcecredentials)
  * dataChangeDetectionPolicy [DataChangeDetectionPolicy](#datachangedetectionpolicy)
  * dataDeletionDetectionPolicy [DataDeletionDetectionPolicy](#datadeletiondetectionpolicy)
  * description `string`: The description of the datasource.
  * name **required** `string`: The name of the datasource.
  * type **required** [DataSourceType](#datasourcetype)

### DataSourceCredentials
* DataSourceCredentials `object`: Represents credentials that can be used to connect to a datasource.
  * connectionString `string`: The connection string for the datasource.

### DataSourceListResult
* DataSourceListResult `object`: Response from a List Datasources request. If successful, it includes the full definitions of all datasources.
  * value `array`: The datasources in the Search service.
    * items [DataSource](#datasource)

### DataSourceType
* DataSourceType `string` (values: azuresql, cosmosdb, azureblob, azuretable, mysql): Defines the type of a datasource.

### DataType
* DataType `string` (values: Edm.String, Edm.Int32, Edm.Int64, Edm.Double, Edm.Boolean, Edm.DateTimeOffset, Edm.GeographyPoint, Edm.ComplexType): Defines the data type of a field in a search index.

### DefaultCognitiveServices
* DefaultCognitiveServices: An empty object that represents the default cognitive service resource for a skillset.
  * @odata.type **required** `string`
  * description `string`

### DictionaryDecompounderTokenFilter
* DictionaryDecompounderTokenFilter `object`: Decomposes compound words found in many Germanic languages. This token filter is implemented using Apache Lucene.
  * maxSubwordSize `integer`: The maximum subword size. Only subwords shorter than this are outputted. Default is 15. Maximum is 300.
  * minSubwordSize `integer`: The minimum subword size. Only subwords longer than this are outputted. Default is 2. Maximum is 300.
  * minWordSize `integer`: The minimum word size. Only words longer than this get processed. Default is 5. Maximum is 300.
  * onlyLongestMatch `boolean`: A value indicating whether to add only the longest matching subword to the output. Default is false.
  * wordList **required** `array`: The list of words to match against.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### DistanceScoringFunction
* DistanceScoringFunction `object`: Defines a function that boosts scores based on distance from a geographic location.
  * distance **required** [DistanceScoringParameters](#distancescoringparameters)
  * boost **required** `number`: A multiplier for the raw score. Must be a positive number not equal to 1.0.
  * fieldName **required** `string`: The name of the field used as input to the scoring function.
  * interpolation [ScoringFunctionInterpolation](#scoringfunctioninterpolation)
  * type **required** `string`

### DistanceScoringParameters
* DistanceScoringParameters `object`: Provides parameter values to a distance scoring function.
  * boostingDistance **required** `number`: The distance in kilometers from the reference location where the boosting range ends.
  * referencePointParameter **required** `string`: The name of the parameter passed in search queries to specify the reference location.

### EdgeNGramTokenFilter
* EdgeNGramTokenFilter `object`: Generates n-grams of the given size(s) starting from the front or the back of an input token. This token filter is implemented using Apache Lucene.
  * maxGram `integer`: The maximum n-gram length. Default is 2.
  * minGram `integer`: The minimum n-gram length. Default is 1. Must be less than the value of maxGram.
  * side [EdgeNGramTokenFilterSide](#edgengramtokenfilterside)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### EdgeNGramTokenFilterSide
* EdgeNGramTokenFilterSide `string` (values: front, back): Specifies which side of the input an n-gram should be generated from.

### EdgeNGramTokenFilterV2
* EdgeNGramTokenFilterV2 `object`: Generates n-grams of the given size(s) starting from the front or the back of an input token. This token filter is implemented using Apache Lucene.
  * maxGram `integer`: The maximum n-gram length. Default is 2. Maximum is 300.
  * minGram `integer`: The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram.
  * side [EdgeNGramTokenFilterSide](#edgengramtokenfilterside)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### EdgeNGramTokenizer
* EdgeNGramTokenizer `object`: Tokenizes the input from an edge into n-grams of the given size(s). This tokenizer is implemented using Apache Lucene.
  * maxGram `integer`: The maximum n-gram length. Default is 2. Maximum is 300.
  * minGram `integer`: The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram.
  * tokenChars `array`: Character classes to keep in the tokens.
    * items [TokenCharacterKind](#tokencharacterkind)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### ElisionTokenFilter
* ElisionTokenFilter `object`: Removes elisions. For example, "l'avion" (the plane) will be converted to "avion" (plane). This token filter is implemented using Apache Lucene.
  * articles `array`: The set of articles to remove.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### EncryptionKey
* EncryptionKey `object`: A customer-managed encryption key in Azure Key Vault. Keys that you create and manage can be used to encrypt or decrypt data-at-rest in Azure Cognitive Search, such as indexes and synonym maps.
  * accessCredentials [AzureActiveDirectoryApplicationCredentials](#azureactivedirectoryapplicationcredentials)
  * keyVaultKeyName **required** `string`: The name of your Azure Key Vault key to be used to encrypt your data at rest.
  * keyVaultKeyVersion **required** `string`: The version of your Azure Key Vault key to be used to encrypt your data at rest.
  * keyVaultUri **required** `string`: The URI of your Azure Key Vault, also referred to as DNS name, that contains the key to be used to encrypt your data at rest. An example URI might be https://my-keyvault-name.vault.azure.net.

### EntityCategory
* EntityCategory `string` (values: location, organization, person, quantity, datetime, url, email): A string indicating what entity categories to return.

### EntityRecognitionSkill
* EntityRecognitionSkill `object`: Text analytics entity recognition.
  * categories `array`: A list of entity categories that should be extracted.
    * items [EntityCategory](#entitycategory)
  * defaultLanguageCode [EntityRecognitionSkillLanguage](#entityrecognitionskilllanguage)
  * includeTypelessEntities `boolean`: Determines whether or not to include entities which are well known but don't conform to a pre-defined type. If this configuration is not set (default), set to null or set to false, entities which don't conform to one of the pre-defined types will not be surfaced.
  * minimumPrecision `number`: A value between 0 and 1 that be used to only include entities whose confidence score is greater than the value specified. If not set (default), or if explicitly set to null, all entities will be included.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### EntityRecognitionSkillLanguage
* EntityRecognitionSkillLanguage `string` (values: ar, cs, zh-Hans, zh-Hant, da, nl, en, fi, fr, de, el, hu, it, ja, ko, no, pl, pt-PT, pt-BR, ru, es, sv, tr): The language codes supported for input text by EntityRecognitionSkill.

### Field
* Field `object`: Represents a field in an index definition, which describes the name, data type, and search behavior of a field.
  * analyzer [AnalyzerName](#analyzername)
  * facetable `boolean`: A value indicating whether to enable the field to be referenced in facet queries. Typically used in a presentation of search results that includes hit count by category (for example, search for digital cameras and see hits by brand, by megapixels, by price, and so on). This property must be null for complex fields. Fields of type Edm.GeographyPoint or Collection(Edm.GeographyPoint) cannot be facetable. Default is true for all other simple fields.
  * fields `array`: A list of sub-fields if this is a field of type Edm.ComplexType or Collection(Edm.ComplexType). Must be null or empty for simple fields.
    * items [Field](#field)
  * filterable `boolean`: A value indicating whether to enable the field to be referenced in $filter queries. filterable differs from searchable in how strings are handled. Fields of type Edm.String or Collection(Edm.String) that are filterable do not undergo word-breaking, so comparisons are for exact matches only. For example, if you set such a field f to "sunny day", $filter=f eq 'sunny' will find no matches, but $filter=f eq 'sunny day' will. This property must be null for complex fields. Default is true for simple fields and null for complex fields.
  * indexAnalyzer [AnalyzerName](#analyzername)
  * key `boolean`: A value indicating whether the field uniquely identifies documents in the index. Exactly one top-level field in each index must be chosen as the key field and it must be of type Edm.String. Key fields can be used to look up documents directly and update or delete specific documents. Default is false for simple fields and null for complex fields.
  * name **required** `string`: The name of the field, which must be unique within the fields collection of the index or parent field.
  * retrievable `boolean`: A value indicating whether the field can be returned in a search result. You can disable this option if you want to use a field (for example, margin) as a filter, sorting, or scoring mechanism but do not want the field to be visible to the end user. This property must be true for key fields, and it must be null for complex fields. This property can be changed on existing fields. Enabling this property does not cause any increase in index storage requirements. Default is true for simple fields and null for complex fields.
  * searchAnalyzer [AnalyzerName](#analyzername)
  * searchable `boolean`: A value indicating whether the field is full-text searchable. This means it will undergo analysis such as word-breaking during indexing. If you set a searchable field to a value like "sunny day", internally it will be split into the individual tokens "sunny" and "day". This enables full-text searches for these terms. Fields of type Edm.String or Collection(Edm.String) are searchable by default. This property must be false for simple fields of other non-string data types, and it must be null for complex fields. Note: searchable fields consume extra space in your index since Azure Cognitive Search will store an additional tokenized version of the field value for full-text searches. If you want to save space in your index and you don't need a field to be included in searches, set searchable to false.
  * sortable `boolean`: A value indicating whether to enable the field to be referenced in $orderby expressions. By default Azure Cognitive Search sorts results by score, but in many experiences users will want to sort by fields in the documents. A simple field can be sortable only if it is single-valued (it has a single value in the scope of the parent document). Simple collection fields cannot be sortable, since they are multi-valued. Simple sub-fields of complex collections are also multi-valued, and therefore cannot be sortable. This is true whether it's an immediate parent field, or an ancestor field, that's the complex collection. Complex fields cannot be sortable and the sortable property must be null for such fields. The default for sortable is true for single-valued simple fields, false for multi-valued simple fields, and null for complex fields.
  * synonymMaps `array`: A list of the names of synonym maps to associate with this field. This option can be used only with searchable fields. Currently only one synonym map per field is supported. Assigning a synonym map to a field ensures that query terms targeting that field are expanded at query-time using the rules in the synonym map. This attribute can be changed on existing fields. Must be null or an empty collection for complex fields.
    * items `string`
  * type **required** [DataType](#datatype)

### FieldMapping
* FieldMapping `object`: Defines a mapping between a field in a data source and a target field in an index.
  * mappingFunction [FieldMappingFunction](#fieldmappingfunction)
  * sourceFieldName **required** `string`: The name of the field in the data source.
  * targetFieldName `string`: The name of the target field in the index. Same as the source field name by default.

### FieldMappingFunction
* FieldMappingFunction `object`: Represents a function that transforms a value from a data source before indexing.
  * name **required** `string`: The name of the field mapping function.
  * parameters `object`: A dictionary of parameter name/value pairs to pass to the function. Each value must be of a primitive type.

### FreshnessScoringFunction
* FreshnessScoringFunction `object`: Defines a function that boosts scores based on the value of a date-time field.
  * freshness **required** [FreshnessScoringParameters](#freshnessscoringparameters)
  * boost **required** `number`: A multiplier for the raw score. Must be a positive number not equal to 1.0.
  * fieldName **required** `string`: The name of the field used as input to the scoring function.
  * interpolation [ScoringFunctionInterpolation](#scoringfunctioninterpolation)
  * type **required** `string`

### FreshnessScoringParameters
* FreshnessScoringParameters `object`: Provides parameter values to a freshness scoring function.
  * boostingDuration **required** `string`: The expiration period after which boosting will stop for a particular document.

### HighWaterMarkChangeDetectionPolicy
* HighWaterMarkChangeDetectionPolicy `object`: Defines a data change detection policy that captures changes based on the value of a high water mark column.
  * highWaterMarkColumnName **required** `string`: The name of the high water mark column.
  * @odata.type **required** `string`

### ImageAnalysisSkill
* ImageAnalysisSkill `object`: A skill that analyzes image files. It extracts a rich set of visual features based on the image content.
  * defaultLanguageCode [ImageAnalysisSkillLanguage](#imageanalysisskilllanguage)
  * details `array`: A string indicating which domain-specific details to return.
    * items [ImageDetail](#imagedetail)
  * visualFeatures `array`: A list of visual features.
    * items [VisualFeature](#visualfeature)
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### ImageAnalysisSkillLanguage
* ImageAnalysisSkillLanguage `string` (values: en, zh): The language codes supported for input by ImageAnalysisSkill.

### ImageDetail
* ImageDetail `string` (values: celebrities, landmarks): A string indicating which domain-specific details to return.

### Index
* Index `object`: Represents a search index definition, which describes the fields and search behavior of an index.
  * @odata.etag `string`: The ETag of the index.
  * analyzers `array`: The analyzers for the index.
    * items [Analyzer](#analyzer)
  * charFilters `array`: The character filters for the index.
    * items [CharFilter](#charfilter)
  * corsOptions [CorsOptions](#corsoptions)
  * defaultScoringProfile `string`: The name of the scoring profile to use if none is specified in the query. If this property is not set and no scoring profile is specified in the query, then default scoring (tf-idf) will be used.
  * encryptionKey [EncryptionKey](#encryptionkey)
  * fields **required** `array`: The fields of the index.
    * items [Field](#field)
  * name **required** `string`: The name of the index.
  * scoringProfiles `array`: The scoring profiles for the index.
    * items [ScoringProfile](#scoringprofile)
  * suggesters `array`: The suggesters for the index.
    * items [Suggester](#suggester)
  * tokenFilters `array`: The token filters for the index.
    * items [TokenFilter](#tokenfilter)
  * tokenizers `array`: The tokenizers for the index.
    * items [Tokenizer](#tokenizer)

### IndexGetStatisticsResult
* IndexGetStatisticsResult `object`: Statistics for a given index. Statistics are collected periodically and are not guaranteed to always be up-to-date.
  * documentCount `integer`: The number of documents in the index.
  * storageSize `integer`: The amount of storage in bytes consumed by the index.

### IndexListResult
* IndexListResult `object`: Response from a List Indexes request. If successful, it includes the full definitions of all indexes.
  * value `array`: The indexes in the Search service.
    * items [Index](#index)

### Indexer
* Indexer `object`: Represents an indexer.
  * @odata.etag `string`: The ETag of the Indexer.
  * dataSourceName **required** `string`: The name of the datasource from which this indexer reads data.
  * description `string`: The description of the indexer.
  * disabled `boolean`: A value indicating whether the indexer is disabled. Default is false.
  * fieldMappings `array`: Defines mappings between fields in the data source and corresponding target fields in the index.
    * items [FieldMapping](#fieldmapping)
  * name **required** `string`: The name of the indexer.
  * outputFieldMappings `array`: Output field mappings are applied after enrichment and immediately before indexing.
    * items [FieldMapping](#fieldmapping)
  * parameters [IndexingParameters](#indexingparameters)
  * schedule [IndexingSchedule](#indexingschedule)
  * skillsetName `string`: The name of the skillset executing with this indexer.
  * targetIndexName **required** `string`: The name of the index to which this indexer writes data.

### IndexerExecutionInfo
* IndexerExecutionInfo `object`: Represents the current status and execution history of an indexer.
  * executionHistory `array`: History of the recent indexer executions, sorted in reverse chronological order.
    * items [IndexerExecutionResult](#indexerexecutionresult)
  * lastResult [IndexerExecutionResult](#indexerexecutionresult)
  * limits [IndexerLimits](#indexerlimits)
  * status [IndexerStatus](#indexerstatus)

### IndexerExecutionResult
* IndexerExecutionResult `object`: Represents the result of an individual indexer execution.
  * endTime `string`: The end time of this indexer execution, if the execution has already completed.
  * errorMessage `string`: The error message indicating the top-level error, if any.
  * errors `array`: The item-level indexing errors.
    * items [ItemError](#itemerror)
  * finalTrackingState `string`: Change tracking state with which an indexer execution finished.
  * initialTrackingState `string`: Change tracking state with which an indexer execution started.
  * itemsFailed `integer`: The number of items that failed to be indexed during this indexer execution.
  * itemsProcessed `integer`: The number of items that were processed during this indexer execution. This includes both successfully processed items and items where indexing was attempted but failed.
  * startTime `string`: The start time of this indexer execution.
  * status [IndexerExecutionStatus](#indexerexecutionstatus)
  * warnings `array`: The item-level indexing warnings.
    * items [ItemWarning](#itemwarning)

### IndexerExecutionStatus
* IndexerExecutionStatus `string` (values: transientFailure, success, inProgress, reset): Represents the status of an individual indexer execution.

### IndexerLimits
* IndexerLimits `object`
  * maxDocumentContentCharactersToExtract `number`: The maximum number of characters that will be extracted from a document picked up for indexing.
  * maxDocumentExtractionSize `number`: The maximum size of a document, in bytes, which will be considered valid for indexing.
  * maxRunTime `string`: The maximum duration that the indexer is permitted to run for one execution.

### IndexerListResult
* IndexerListResult `object`: Response from a List Indexers request. If successful, it includes the full definitions of all indexers.
  * value `array`: The indexers in the Search service.
    * items [Indexer](#indexer)

### IndexerStatus
* IndexerStatus `string` (values: unknown, error, running): Represents the overall indexer status.

### IndexingParameters
* IndexingParameters `object`: Represents parameters for indexer execution.
  * base64EncodeKeys `boolean`: Whether indexer will base64-encode all values that are inserted into key field of the target index. This is needed if keys can contain characters that are invalid in keys (such as dot '.'). Default is false.
  * batchSize `integer`: The number of items that are read from the data source and indexed as a single batch in order to improve performance. The default depends on the data source type.
  * configuration `object`: A dictionary of indexer-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type.
  * maxFailedItems `integer`: The maximum number of items that can fail indexing for indexer execution to still be considered successful. -1 means no limit. Default is 0.
  * maxFailedItemsPerBatch `integer`: The maximum number of items in a single batch that can fail indexing for the batch to still be considered successful. -1 means no limit. Default is 0.

### IndexingSchedule
* IndexingSchedule `object`: Represents a schedule for indexer execution.
  * interval **required** `string`: The interval of time between indexer executions.
  * startTime `string`: The time when an indexer should start running.

### InputFieldMappingEntry
* InputFieldMappingEntry `object`: Input field mapping for a skill.
  * inputs `array`: The recursive inputs used when creating a complex type.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name **required** `string`: The name of the input.
  * source `string`: The source of the input.
  * sourceContext `string`: The source context used for selecting recursive inputs.

### ItemError
* ItemError `object`: Represents an item- or document-level indexing error.
  * details `string`: Additional, verbose details about the error to assist in debugging the indexer. This may not be always available.
  * documentationLink `string`: A link to a troubleshooting guide for these classes of errors. This may not be always available.
  * errorMessage `string`: The message describing the error that occurred while processing the item.
  * key `string`: The key of the item for which indexing failed.
  * name `string`: The name of the source at which the error originated. For example, this could refer to a particular skill in the attached skillset. This may not be always available.
  * statusCode `integer`: The status code indicating why the indexing operation failed. Possible values include: 400 for a malformed input document, 404 for document not found, 409 for a version conflict, 422 when the index is temporarily unavailable, or 503 for when the service is too busy.

### ItemWarning
* ItemWarning `object`: Represents an item-level warning.
  * details `string`: Additional, verbose details about the warning to assist in debugging the indexer. This may not be always available.
  * documentationLink `string`: A link to a troubleshooting guide for these classes of warnings. This may not be always available.
  * key `string`: The key of the item which generated a warning.
  * message `string`: The message describing the warning that occurred while processing the item.
  * name `string`: The name of the source at which the warning originated. For example, this could refer to a particular skill in the attached skillset. This may not be always available.

### KeepTokenFilter
* KeepTokenFilter `object`: A token filter that only keeps tokens with text contained in a specified list of words. This token filter is implemented using Apache Lucene.
  * keepWords **required** `array`: The list of words to keep.
    * items `string`
  * keepWordsCase `boolean`: A value indicating whether to lower case all words first. Default is false.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### KeyPhraseExtractionSkill
* KeyPhraseExtractionSkill `object`: A skill that uses text analytics for key phrase extraction.
  * defaultLanguageCode [KeyPhraseExtractionSkillLanguage](#keyphraseextractionskilllanguage)
  * maxKeyPhraseCount `integer`: A number indicating how many key phrases to return. If absent, all identified key phrases will be returned.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### KeyPhraseExtractionSkillLanguage
* KeyPhraseExtractionSkillLanguage `string` (values: da, nl, en, fi, fr, de, it, ja, ko, no, pl, pt-PT, pt-BR, ru, es, sv): The language codes supported for input text by KeyPhraseExtractionSkill.

### KeywordMarkerTokenFilter
* KeywordMarkerTokenFilter `object`: Marks terms as keywords. This token filter is implemented using Apache Lucene.
  * ignoreCase `boolean`: A value indicating whether to ignore case. If true, all words are converted to lower case first. Default is false.
  * keywords **required** `array`: A list of words to mark as keywords.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### KeywordTokenizer
* KeywordTokenizer `object`: Emits the entire input as a single token. This tokenizer is implemented using Apache Lucene.
  * bufferSize `integer`: The read buffer size in bytes. Default is 256.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### KeywordTokenizerV2
* KeywordTokenizerV2 `object`: Emits the entire input as a single token. This tokenizer is implemented using Apache Lucene.
  * maxTokenLength `integer`: The maximum token length. Default is 256. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### LanguageDetectionSkill
* LanguageDetectionSkill: A skill that detects the language of input text and reports a single language code for every document submitted on the request. The language code is paired with a score indicating the confidence of the analysis.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### LengthTokenFilter
* LengthTokenFilter `object`: Removes words that are too long or too short. This token filter is implemented using Apache Lucene.
  * max `integer`: The maximum length in characters. Default and maximum is 300.
  * min `integer`: The minimum length in characters. Default is 0. Maximum is 300. Must be less than the value of max.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### LimitTokenFilter
* LimitTokenFilter `object`: Limits the number of tokens while indexing. This token filter is implemented using Apache Lucene.
  * consumeAllTokens `boolean`: A value indicating whether all tokens from the input must be consumed even if maxTokenCount is reached. Default is false.
  * maxTokenCount `integer`: The maximum number of tokens to produce. Default is 1.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### MagnitudeScoringFunction
* MagnitudeScoringFunction `object`: Defines a function that boosts scores based on the magnitude of a numeric field.
  * magnitude **required** [MagnitudeScoringParameters](#magnitudescoringparameters)
  * boost **required** `number`: A multiplier for the raw score. Must be a positive number not equal to 1.0.
  * fieldName **required** `string`: The name of the field used as input to the scoring function.
  * interpolation [ScoringFunctionInterpolation](#scoringfunctioninterpolation)
  * type **required** `string`

### MagnitudeScoringParameters
* MagnitudeScoringParameters `object`: Provides parameter values to a magnitude scoring function.
  * boostingRangeEnd **required** `number`: The field value at which boosting ends.
  * boostingRangeStart **required** `number`: The field value at which boosting starts.
  * constantBoostBeyondRange `boolean`: A value indicating whether to apply a constant boost for field values beyond the range end value; default is false.

### MappingCharFilter
* MappingCharFilter `object`: A character filter that applies mappings defined with the mappings option. Matching is greedy (longest pattern matching at a given point wins). Replacement is allowed to be the empty string. This character filter is implemented using Apache Lucene.
  * mappings **required** `array`: A list of mappings of the following format: "a=>b" (all occurrences of the character "a" will be replaced with character "b").
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the char filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### MergeSkill
* MergeSkill `object`: A skill for merging two or more strings into a single unified string, with an optional user-defined delimiter separating each component part.
  * insertPostTag `string`: The tag indicates the end of the merged text. By default, the tag is an empty space.
  * insertPreTag `string`: The tag indicates the start of the merged text. By default, the tag is an empty space.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### MicrosoftLanguageStemmingTokenizer
* MicrosoftLanguageStemmingTokenizer `object`: Divides text using language-specific rules and reduces words to their base forms.
  * isSearchTokenizer `boolean`: A value indicating how the tokenizer is used. Set to true if used as the search tokenizer, set to false if used as the indexing tokenizer. Default is false.
  * language [MicrosoftStemmingTokenizerLanguage](#microsoftstemmingtokenizerlanguage)
  * maxTokenLength `integer`: The maximum token length. Tokens longer than the maximum length are split. Maximum token length that can be used is 300 characters. Tokens longer than 300 characters are first split into tokens of length 300 and then each of those tokens is split based on the max token length set. Default is 255.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### MicrosoftLanguageTokenizer
* MicrosoftLanguageTokenizer `object`: Divides text using language-specific rules.
  * isSearchTokenizer `boolean`: A value indicating how the tokenizer is used. Set to true if used as the search tokenizer, set to false if used as the indexing tokenizer. Default is false.
  * language [MicrosoftTokenizerLanguage](#microsofttokenizerlanguage)
  * maxTokenLength `integer`: The maximum token length. Tokens longer than the maximum length are split. Maximum token length that can be used is 300 characters. Tokens longer than 300 characters are first split into tokens of length 300 and then each of those tokens is split based on the max token length set. Default is 255.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### MicrosoftStemmingTokenizerLanguage
* MicrosoftStemmingTokenizerLanguage `string` (values: arabic, bangla, bulgarian, catalan, croatian, czech, danish, dutch, english, estonian, finnish, french, german, greek, gujarati, hebrew, hindi, hungarian, icelandic, indonesian, italian, kannada, latvian, lithuanian, malay, malayalam, marathi, norwegianBokmaal, polish, portuguese, portugueseBrazilian, punjabi, romanian, russian, serbianCyrillic, serbianLatin, slovak, slovenian, spanish, swedish, tamil, telugu, turkish, ukrainian, urdu): Lists the languages supported by the Microsoft language stemming tokenizer.

### MicrosoftTokenizerLanguage
* MicrosoftTokenizerLanguage `string` (values: bangla, bulgarian, catalan, chineseSimplified, chineseTraditional, croatian, czech, danish, dutch, english, french, german, greek, gujarati, hindi, icelandic, indonesian, italian, japanese, kannada, korean, malay, malayalam, marathi, norwegianBokmaal, polish, portuguese, portugueseBrazilian, punjabi, romanian, russian, serbianCyrillic, serbianLatin, slovenian, spanish, swedish, tamil, telugu, thai, ukrainian, urdu, vietnamese): Lists the languages supported by the Microsoft language tokenizer.

### NGramTokenFilter
* NGramTokenFilter `object`: Generates n-grams of the given size(s). This token filter is implemented using Apache Lucene.
  * maxGram `integer`: The maximum n-gram length. Default is 2.
  * minGram `integer`: The minimum n-gram length. Default is 1. Must be less than the value of maxGram.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### NGramTokenFilterV2
* NGramTokenFilterV2 `object`: Generates n-grams of the given size(s). This token filter is implemented using Apache Lucene.
  * maxGram `integer`: The maximum n-gram length. Default is 2. Maximum is 300.
  * minGram `integer`: The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### NGramTokenizer
* NGramTokenizer `object`: Tokenizes the input into n-grams of the given size(s). This tokenizer is implemented using Apache Lucene.
  * maxGram `integer`: The maximum n-gram length. Default is 2. Maximum is 300.
  * minGram `integer`: The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram.
  * tokenChars `array`: Character classes to keep in the tokens.
    * items [TokenCharacterKind](#tokencharacterkind)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### OcrSkill
* OcrSkill `object`: A skill that extracts text from image files.
  * defaultLanguageCode [OcrSkillLanguage](#ocrskilllanguage)
  * detectOrientation `boolean`: A value indicating to turn orientation detection on or not. Default is false.
  * textExtractionAlgorithm [TextExtractionAlgorithm](#textextractionalgorithm)
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### OcrSkillLanguage
* OcrSkillLanguage `string` (values: zh-Hans, zh-Hant, cs, da, nl, en, fi, fr, de, el, hu, it, ja, ko, nb, pl, pt, ru, es, sv, tr, ar, ro, sr-Cyrl, sr-Latn, sk): The language codes supported for input by OcrSkill.

### OutputFieldMappingEntry
* OutputFieldMappingEntry `object`: Output field mapping for a skill.
  * name **required** `string`: The name of the output defined by the skill.
  * targetName `string`: The target name of the output. It is optional and default to name.

### PathHierarchyTokenizer
* PathHierarchyTokenizer `object`: Tokenizer for path-like hierarchies. This tokenizer is implemented using Apache Lucene.
  * bufferSize `integer`: The buffer size. Default is 1024.
  * delimiter `string`: The delimiter character to use. Default is "/".
  * replacement `string`: A value that, if set, replaces the delimiter character. Default is "/".
  * reverse `boolean`: A value indicating whether to generate tokens in reverse order. Default is false.
  * skip `integer`: The number of initial tokens to skip. Default is 0.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PathHierarchyTokenizerV2
* PathHierarchyTokenizerV2 `object`: Tokenizer for path-like hierarchies. This tokenizer is implemented using Apache Lucene.
  * delimiter `string`: The delimiter character to use. Default is "/".
  * maxTokenLength `integer`: The maximum token length. Default and maximum is 300.
  * replacement `string`: A value that, if set, replaces the delimiter character. Default is "/".
  * reverse `boolean`: A value indicating whether to generate tokens in reverse order. Default is false.
  * skip `integer`: The number of initial tokens to skip. Default is 0.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PatternAnalyzer
* PatternAnalyzer `object`: Flexibly separates text into terms via a regular expression pattern. This analyzer is implemented using Apache Lucene.
  * flags [RegexFlags](#regexflags)
  * lowercase `boolean`: A value indicating whether terms should be lower-cased. Default is true.
  * pattern `string`: A regular expression pattern to match token separators. Default is an expression that matches one or more whitespace characters.
  * stopwords `array`: A list of stopwords.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PatternCaptureTokenFilter
* PatternCaptureTokenFilter `object`: Uses Java regexes to emit multiple tokens - one for each capture group in one or more patterns. This token filter is implemented using Apache Lucene.
  * patterns **required** `array`: A list of patterns to match against each token.
    * items `string`
  * preserveOriginal `boolean`: A value indicating whether to return the original token even if one of the patterns matches. Default is true.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PatternReplaceCharFilter
* PatternReplaceCharFilter `object`: A character filter that replaces characters in the input string. It uses a regular expression to identify character sequences to preserve and a replacement pattern to identify characters to replace. For example, given the input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement "$1#$2", the result would be "aa#bb aa#bb". This character filter is implemented using Apache Lucene.
  * pattern **required** `string`: A regular expression pattern.
  * replacement **required** `string`: The replacement text.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the char filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PatternReplaceTokenFilter
* PatternReplaceTokenFilter `object`: A character filter that replaces characters in the input string. It uses a regular expression to identify character sequences to preserve and a replacement pattern to identify characters to replace. For example, given the input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement "$1#$2", the result would be "aa#bb aa#bb". This token filter is implemented using Apache Lucene.
  * pattern **required** `string`: A regular expression pattern.
  * replacement **required** `string`: The replacement text.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PatternTokenizer
* PatternTokenizer `object`: Tokenizer that uses regex pattern matching to construct distinct tokens. This tokenizer is implemented using Apache Lucene.
  * flags [RegexFlags](#regexflags)
  * group `integer`: The zero-based ordinal of the matching group in the regular expression pattern to extract into tokens. Use -1 if you want to use the entire pattern to split the input into tokens, irrespective of matching groups. Default is -1.
  * pattern `string`: A regular expression pattern to match token separators. Default is an expression that matches one or more whitespace characters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### PhoneticEncoder
* PhoneticEncoder `string` (values: metaphone, doubleMetaphone, soundex, refinedSoundex, caverphone1, caverphone2, cologne, nysiis, koelnerPhonetik, haasePhonetik, beiderMorse): Identifies the type of phonetic encoder to use with a PhoneticTokenFilter.

### PhoneticTokenFilter
* PhoneticTokenFilter `object`: Create tokens for phonetic matches. This token filter is implemented using Apache Lucene.
  * encoder [PhoneticEncoder](#phoneticencoder)
  * replace `boolean`: A value indicating whether encoded tokens should replace original tokens. If false, encoded tokens are added as synonyms. Default is true.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### RegexFlags
* RegexFlags `string` (values: CANON_EQ, CASE_INSENSITIVE, COMMENTS, DOTALL, LITERAL, MULTILINE, UNICODE_CASE, UNIX_LINES): Defines flags that can be combined to control how regular expressions are used in the pattern analyzer and pattern tokenizer.

### ResourceCounter
* ResourceCounter `object`: Represents a resource's usage and quota.
  * quota `integer`: The resource amount quota.
  * usage `integer`: The resource usage amount.

### ScoringFunction
* ScoringFunction `object`: Abstract base class for functions that can modify document scores during ranking.
  * boost **required** `number`: A multiplier for the raw score. Must be a positive number not equal to 1.0.
  * fieldName **required** `string`: The name of the field used as input to the scoring function.
  * interpolation [ScoringFunctionInterpolation](#scoringfunctioninterpolation)
  * type **required** `string`

### ScoringFunctionAggregation
* ScoringFunctionAggregation `string` (values: sum, average, minimum, maximum, firstMatching): Defines the aggregation function used to combine the results of all the scoring functions in a scoring profile.

### ScoringFunctionInterpolation
* ScoringFunctionInterpolation `string` (values: linear, constant, quadratic, logarithmic): Defines the function used to interpolate score boosting across a range of documents.

### ScoringProfile
* ScoringProfile `object`: Defines parameters for a search index that influence scoring in search queries.
  * functionAggregation [ScoringFunctionAggregation](#scoringfunctionaggregation)
  * functions `array`: The collection of functions that influence the scoring of documents.
    * items [ScoringFunction](#scoringfunction)
  * name **required** `string`: The name of the scoring profile.
  * text [TextWeights](#textweights)

### SentimentSkill
* SentimentSkill `object`: Text analytics positive-negative sentiment analysis, scored as a floating point value in a range of zero to 1.
  * defaultLanguageCode [SentimentSkillLanguage](#sentimentskilllanguage)
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### SentimentSkillLanguage
* SentimentSkillLanguage `string` (values: da, nl, en, fi, fr, de, el, it, no, pl, pt-PT, ru, es, sv, tr): The language codes supported for input text by SentimentSkill.

### ServiceCounters
* ServiceCounters `object`: Represents service-level resource counters and quotas.
  * dataSourcesCount [ResourceCounter](#resourcecounter)
  * documentCount [ResourceCounter](#resourcecounter)
  * indexersCount [ResourceCounter](#resourcecounter)
  * indexesCount [ResourceCounter](#resourcecounter)
  * storageSize [ResourceCounter](#resourcecounter)
  * synonymMaps [ResourceCounter](#resourcecounter)

### ServiceLimits
* ServiceLimits `object`: Represents various service level limits.
  * maxComplexCollectionFieldsPerIndex `integer`: The maximum number of fields of type Collection(Edm.ComplexType) allowed in an index.
  * maxComplexObjectsInCollectionsPerDocument `integer`: The maximum number of objects in complex collections allowed per document.
  * maxFieldNestingDepthPerIndex `integer`: The maximum depth which you can nest sub-fields in an index, including the top-level complex field. For example, a/b/c has a nesting depth of 3.
  * maxFieldsPerIndex `integer`: The maximum allowed fields per index.

### ServiceStatistics
* ServiceStatistics `object`: Response from a get service statistics request. If successful, it includes service level counters and limits.
  * counters [ServiceCounters](#servicecounters)
  * limits [ServiceLimits](#servicelimits)

### ShaperSkill
* ShaperSkill: A skill for reshaping the outputs. It creates a complex type to support composite fields (also known as multipart fields).
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### ShingleTokenFilter
* ShingleTokenFilter `object`: Creates combinations of tokens as a single token. This token filter is implemented using Apache Lucene.
  * filterToken `string`: The string to insert for each position at which there is no token. Default is an underscore ("_").
  * maxShingleSize `integer`: The maximum shingle size. Default and minimum value is 2.
  * minShingleSize `integer`: The minimum shingle size. Default and minimum value is 2. Must be less than the value of maxShingleSize.
  * outputUnigrams `boolean`: A value indicating whether the output stream will contain the input tokens (unigrams) as well as shingles. Default is true.
  * outputUnigramsIfNoShingles `boolean`: A value indicating whether to output unigrams for those times when no shingles are available. This property takes precedence when outputUnigrams is set to false. Default is false.
  * tokenSeparator `string`: The string to use when joining adjacent tokens to form a shingle. Default is a single space (" ").
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### Skill
* Skill `object`: Abstract base class for skills.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### Skillset
* Skillset `object`: A list of skills.
  * @odata.etag `string`: The ETag of the skillset.
  * cognitiveServices [CognitiveServices](#cognitiveservices)
  * description **required** `string`: The description of the skillset.
  * name **required** `string`: The name of the skillset.
  * skills **required** `array`: A list of skills in the skillset.
    * items [Skill](#skill)

### SkillsetListResult
* SkillsetListResult `object`: Response from a list Skillset request. If successful, it includes the full definitions of all skillsets.
  * value `array`: The skillsets defined in the Search service.
    * items [Skillset](#skillset)

### SnowballTokenFilter
* SnowballTokenFilter `object`: A filter that stems words using a Snowball-generated stemmer. This token filter is implemented using Apache Lucene.
  * language **required** [SnowballTokenFilterLanguage](#snowballtokenfilterlanguage)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### SnowballTokenFilterLanguage
* SnowballTokenFilterLanguage `string` (values: armenian, basque, catalan, danish, dutch, english, finnish, french, german, german2, hungarian, italian, kp, lovins, norwegian, porter, portuguese, romanian, russian, spanish, swedish, turkish): The language to use for a Snowball token filter.

### SoftDeleteColumnDeletionDetectionPolicy
* SoftDeleteColumnDeletionDetectionPolicy `object`: Defines a data deletion detection policy that implements a soft-deletion strategy. It determines whether an item should be deleted based on the value of a designated 'soft delete' column.
  * softDeleteColumnName `string`: The name of the column to use for soft-deletion detection.
  * softDeleteMarkerValue `string`: The marker value that identifies an item as deleted.
  * @odata.type **required** `string`

### SplitSkill
* SplitSkill `object`: A skill to split a string into chunks of text.
  * defaultLanguageCode [SplitSkillLanguage](#splitskilllanguage)
  * maximumPageLength `integer`: The desired maximum page length. Default is 10000.
  * textSplitMode [TextSplitMode](#textsplitmode)
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### SplitSkillLanguage
* SplitSkillLanguage `string` (values: da, de, en, es, fi, fr, it, ko, pt): The language codes supported for input text by SplitSkill.

### SqlIntegratedChangeTrackingPolicy
* SqlIntegratedChangeTrackingPolicy: Defines a data change detection policy that captures changes using the Integrated Change Tracking feature of Azure SQL Database.
  * @odata.type **required** `string`

### StandardAnalyzer
* StandardAnalyzer `object`: Standard Apache Lucene analyzer; Composed of the standard tokenizer, lowercase filter and stop filter.
  * maxTokenLength `integer`: The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters.
  * stopwords `array`: A list of stopwords.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### StandardTokenizer
* StandardTokenizer `object`: Breaks text following the Unicode Text Segmentation rules. This tokenizer is implemented using Apache Lucene.
  * maxTokenLength `integer`: The maximum token length. Default is 255. Tokens longer than the maximum length are split.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### StandardTokenizerV2
* StandardTokenizerV2 `object`: Breaks text following the Unicode Text Segmentation rules. This tokenizer is implemented using Apache Lucene.
  * maxTokenLength `integer`: The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### StemmerOverrideTokenFilter
* StemmerOverrideTokenFilter `object`: Provides the ability to override other stemming filters with custom dictionary-based stemming. Any dictionary-stemmed terms will be marked as keywords so that they will not be stemmed with stemmers down the chain. Must be placed before any stemming filters. This token filter is implemented using Apache Lucene.
  * rules **required** `array`: A list of stemming rules in the following format: "word => stem", for example: "ran => run".
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### StemmerTokenFilter
* StemmerTokenFilter `object`: Language specific stemming filter. This token filter is implemented using Apache Lucene.
  * language **required** [StemmerTokenFilterLanguage](#stemmertokenfilterlanguage)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### StemmerTokenFilterLanguage
* StemmerTokenFilterLanguage `string` (values: arabic, armenian, basque, brazilian, bulgarian, catalan, czech, danish, dutch, dutchKp, english, lightEnglish, minimalEnglish, possessiveEnglish, porter2, lovins, finnish, lightFinnish, french, lightFrench, minimalFrench, galician, minimalGalician, german, german2, lightGerman, minimalGerman, greek, hindi, hungarian, lightHungarian, indonesian, irish, italian, lightItalian, sorani, latvian, norwegian, lightNorwegian, minimalNorwegian, lightNynorsk, minimalNynorsk, portuguese, lightPortuguese, minimalPortuguese, portugueseRslp, romanian, russian, lightRussian, spanish, lightSpanish, swedish, lightSwedish, turkish): The language to use for a stemmer token filter.

### StopAnalyzer
* StopAnalyzer `object`: Divides text at non-letters; Applies the lowercase and stopword token filters. This analyzer is implemented using Apache Lucene.
  * stopwords `array`: A list of stopwords.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### StopwordsList
* StopwordsList `string` (values: arabic, armenian, basque, brazilian, bulgarian, catalan, czech, danish, dutch, english, finnish, french, galician, german, greek, hindi, hungarian, indonesian, irish, italian, latvian, norwegian, persian, portuguese, romanian, russian, sorani, spanish, swedish, thai, turkish): Identifies a predefined list of language-specific stopwords.

### StopwordsTokenFilter
* StopwordsTokenFilter `object`: Removes stop words from a token stream. This token filter is implemented using Apache Lucene.
  * ignoreCase `boolean`: A value indicating whether to ignore case. If true, all words are converted to lower case first. Default is false.
  * removeTrailing `boolean`: A value indicating whether to ignore the last search term if it's a stop word. Default is true.
  * stopwords `array`: The list of stopwords. This property and the stopwords list property cannot both be set.
    * items `string`
  * stopwordsList [StopwordsList](#stopwordslist)
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### Suggester
* Suggester `object`: Defines how the Suggest API should apply to a group of fields in the index.
  * name **required** `string`: The name of the suggester.
  * searchMode **required** `string` (values: analyzingInfixMatching): A value indicating the capabilities of the suggester.
  * sourceFields **required** `array`: The list of field names to which the suggester applies. Each field must be searchable.
    * items `string`

### SynonymMap
* SynonymMap `object`: Represents a synonym map definition.
  * @odata.etag `string`: The ETag of the synonym map.
  * encryptionKey [EncryptionKey](#encryptionkey)
  * format **required** `string` (values: solr): The format of the synonym map. Only the 'solr' format is currently supported.
  * name **required** `string`: The name of the synonym map.
  * synonyms **required** `string`: A series of synonym rules in the specified synonym map format. The rules must be separated by newlines.

### SynonymMapListResult
* SynonymMapListResult `object`: Response from a List SynonymMaps request. If successful, it includes the full definitions of all synonym maps.
  * value `array`: The synonym maps in the Search service.
    * items [SynonymMap](#synonymmap)

### SynonymTokenFilter
* SynonymTokenFilter `object`: Matches single or multi-word synonyms in a token stream. This token filter is implemented using Apache Lucene.
  * expand `boolean`: A value indicating whether all words in the list of synonyms (if => notation is not used) will map to one another. If true, all words in the list of synonyms (if => notation is not used) will map to one another. The following list: incredible, unbelievable, fabulous, amazing is equivalent to: incredible, unbelievable, fabulous, amazing => incredible, unbelievable, fabulous, amazing. If false, the following list: incredible, unbelievable, fabulous, amazing will be equivalent to: incredible, unbelievable, fabulous, amazing => incredible. Default is true.
  * ignoreCase `boolean`: A value indicating whether to case-fold input for matching. Default is false.
  * synonyms **required** `array`: A list of synonyms in following one of two formats: 1. incredible, unbelievable, fabulous => amazing - all terms on the left side of => symbol will be replaced with all terms on its right side; 2. incredible, unbelievable, fabulous, amazing - comma separated list of equivalent words. Set the expand option to change how this list is interpreted.
    * items `string`
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### TagScoringFunction
* TagScoringFunction `object`: Defines a function that boosts scores of documents with string values matching a given list of tags.
  * tag **required** [TagScoringParameters](#tagscoringparameters)
  * boost **required** `number`: A multiplier for the raw score. Must be a positive number not equal to 1.0.
  * fieldName **required** `string`: The name of the field used as input to the scoring function.
  * interpolation [ScoringFunctionInterpolation](#scoringfunctioninterpolation)
  * type **required** `string`

### TagScoringParameters
* TagScoringParameters `object`: Provides parameter values to a tag scoring function.
  * tagsParameter **required** `string`: The name of the parameter passed in search queries to specify the list of tags to compare against the target field.

### TextExtractionAlgorithm
* TextExtractionAlgorithm `string` (values: printed, handwritten): A value indicating which algorithm to use. Default is printed.

### TextSplitMode
* TextSplitMode `string` (values: pages, sentences): A value indicating which split mode to perform.

### TextTranslationSkill
* TextTranslationSkill `object`: A skill to translate text from one language to another.
  * defaultFromLanguageCode [TextTranslationSkillLanguage](#texttranslationskilllanguage)
  * defaultToLanguageCode **required** [TextTranslationSkillLanguage](#texttranslationskilllanguage)
  * suggestedFrom [TextTranslationSkillLanguage](#texttranslationskilllanguage)
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### TextTranslationSkillLanguage
* TextTranslationSkillLanguage `string` (values: af, ar, bn, bs, bg, yue, ca, zh-Hans, zh-Hant, hr, cs, da, nl, en, et, fj, fil, fi, fr, de, el, ht, he, hi, mww, hu, is, id, it, ja, sw, tlh, ko, lv, lt, mg, ms, mt, nb, fa, pl, pt, otq, ro, ru, sm, sr-Cyrl, sr-Latn, sk, sl, es, sv, ty, ta, te, th, to, tr, uk, ur, vi, cy, yua): The language codes supported for input text by TextTranslationSkill.

### TextWeights
* TextWeights `object`: Defines weights on index fields for which matches should boost scoring in search queries.
  * weights **required** `object`: The dictionary of per-field weights to boost document scoring. The keys are field names and the values are the weights for each field.

### TokenCharacterKind
* TokenCharacterKind `string` (values: letter, digit, whitespace, punctuation, symbol): Represents classes of characters on which a token filter can operate.

### TokenFilter
* TokenFilter `object`: Abstract base class for token filters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### TokenFilterName
* TokenFilterName `string` (values: arabic_normalization, apostrophe, asciifolding, cjk_bigram, cjk_width, classic, common_grams, edgeNGram_v2, elision, german_normalization, hindi_normalization, indic_normalization, keyword_repeat, kstem, length, limit, lowercase, nGram_v2, persian_normalization, phonetic, porter_stem, reverse, scandinavian_normalization, scandinavian_folding, shingle, snowball, sorani_normalization, stemmer, stopwords, trim, truncate, unique, uppercase, word_delimiter): Defines the names of all token filters supported by Azure Cognitive Search.

### TokenInfo
* TokenInfo `object`: Information about a token returned by an analyzer.
  * endOffset `integer`: The index of the last character of the token in the input text.
  * position `integer`: The position of the token in the input text relative to other tokens. The first token in the input text has position 0, the next has position 1, and so on. Depending on the analyzer used, some tokens might have the same position, for example if they are synonyms of each other.
  * startOffset `integer`: The index of the first character of the token in the input text.
  * token `string`: The token returned by the analyzer.

### Tokenizer
* Tokenizer `object`: Abstract base class for tokenizers.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### TokenizerName
* TokenizerName `string` (values: classic, edgeNGram, keyword_v2, letter, lowercase, microsoft_language_tokenizer, microsoft_language_stemming_tokenizer, nGram, path_hierarchy_v2, pattern, standard_v2, uax_url_email, whitespace): Defines the names of all tokenizers supported by Azure Cognitive Search.

### TruncateTokenFilter
* TruncateTokenFilter `object`: Truncates the terms to a specific length. This token filter is implemented using Apache Lucene.
  * length `integer`: The length at which terms will be truncated. Default and maximum is 300.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### UaxUrlEmailTokenizer
* UaxUrlEmailTokenizer `object`: Tokenizes urls and emails as one token. This tokenizer is implemented using Apache Lucene.
  * maxTokenLength `integer`: The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### UniqueTokenFilter
* UniqueTokenFilter `object`: Filters out tokens with same text as the previous token. This token filter is implemented using Apache Lucene.
  * onlyOnSamePosition `boolean`: A value indicating whether to remove duplicates only at the same position. Default is false.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.

### VisualFeature
* VisualFeature `string` (values: categories, tags, description, faces, imageType, color): The strings indicating what visual feature types to return.

### WebApiHttpHeaders
* WebApiHttpHeaders `object`: A dictionary of http request headers.

### WebApiSkill
* WebApiSkill `object`: A skill that can call a Web API endpoint, allowing you to extend a skillset by having it call your custom code.
  * batchSize `integer`: The desired batch size which indicates number of documents.
  * degreeOfParallelism `integer`: If set, the number of parallel calls that can be made to the Web API.
  * httpHeaders [WebApiHttpHeaders](#webapihttpheaders)
  * httpMethod `string`: The method for the http request.
  * timeout `string`: The desired timeout for the request. Default is 30 seconds.
  * uri **required** `string`: The url for the Web API.
  * @odata.type **required** `string`
  * context `string`: Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document.
  * description `string`: The description of the skill which describes the inputs, outputs, and usage of the skill.
  * inputs **required** `array`: Inputs of the skills could be a column in the source data set, or the output of an upstream skill.
    * items [InputFieldMappingEntry](#inputfieldmappingentry)
  * name `string`: The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'.
  * outputs **required** `array`: The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill.
    * items [OutputFieldMappingEntry](#outputfieldmappingentry)

### WordDelimiterTokenFilter
* WordDelimiterTokenFilter `object`: Splits words into subwords and performs optional transformations on subword groups. This token filter is implemented using Apache Lucene.
  * catenateAll `boolean`: A value indicating whether all subword parts will be catenated. For example, if this is set to true, "Azure-Search-1" becomes "AzureSearch1". Default is false.
  * catenateNumbers `boolean`: A value indicating whether maximum runs of number parts will be catenated. For example, if this is set to true, "1-2" becomes "12". Default is false.
  * catenateWords `boolean`: A value indicating whether maximum runs of word parts will be catenated. For example, if this is set to true, "Azure-Search" becomes "AzureSearch". Default is false.
  * generateNumberParts `boolean`: A value indicating whether to generate number subwords. Default is true.
  * generateWordParts `boolean`: A value indicating whether to generate part words. If set, causes parts of words to be generated; for example "AzureSearch" becomes "Azure" "Search". Default is true.
  * preserveOriginal `boolean`: A value indicating whether original words will be preserved and added to the subword list. Default is false.
  * protectedWords `array`: A list of tokens to protect from being delimited.
    * items `string`
  * splitOnCaseChange `boolean`: A value indicating whether to split words on caseChange. For example, if this is set to true, "AzureSearch" becomes "Azure" "Search". Default is true.
  * splitOnNumerics `boolean`: A value indicating whether to split on numbers. For example, if this is set to true, "Azure1Search" becomes "Azure" "1" "Search". Default is true.
  * stemEnglishPossessive `boolean`: A value indicating whether to remove trailing "'s" for each subword. Default is true.
  * @odata.type **required** `string`
  * name **required** `string`: The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters.


