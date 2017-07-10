# @datafire/core_ac_uk
<p style="text-align: justify;">You can use the CORE API to access the 
    resources harvested and enriched by CORE. If you encounter any problems with the API, please <a href="/contact">report them to us</a>.</p>

<h2>Overview</h2>
<p style="text-align: justify;">The API is organised by resource type. The resources are <b>articles</b>, 
    <b>journals</b> and <b>repositories</b> and are represented using JSON data format. Furthermore, 
    each resource has a list of methods. The API also provides two global methods for accessing all resources at once.</p>

<h2>Response format</h2>
<p style="text-align: justify;">Response for each query contains two fields: <b>status</b> and <b>data</b>.
    In case of an error status, the data field is empty. The data field contains a single object
    in case the request is for a specific identifier (e.g. CORE ID, CORE repository ID, etc.), or  
    contains a list of objects, for example for search queries. In case of batch requests, the response
    is an array of objects, each of which contains its own <b>status</b> and <b>data</b> fields.
    For search queries the response contains an additional field <b>totalHits</b>, which is the 
    total number of items which match the search criteria.</p>

<h2>Search query syntax</h2>

<p style="text-align: justify">Complex search queries can be used in all of the API search methods.
    The query can be a simple string or it can be built using terms and operators described in Elasticsearch
    <a href="http://www.elastic.co/guide/en/elasticsearch/reference/1.4/query-dsl-query-string-query.html#query-string-syntax">documentation</a>.
    The usable field names are <strong>title</strong>, <strong>description</strong>, <strong>fullText</strong>, 
    <strong>authorsString</strong>, <strong>publisher</strong>, <strong>repositories.id</strong>, <strong>repositories.name</strong>, 
    <strong>doi</strong>, <strong>oai</strong>, <strong>identifiers</strong> (which is a list of article identifiers including OAI, URL, etc.), <strong>language.name</strong> 
    and <strong>year</strong>. Some example queries:
</p>

<ul style="margin-left: 30px;">
    <li><p>title:psychology and language.name:English</p></li>
    <li><p>repositories.id:86 AND year:2014</p></li>
    <li><p>identifiers:"oai:aura.abdn.ac.uk:2164/3837" OR identifiers:"oai:aura.abdn.ac.uk:2164/3843"</p></li>
    <li><p>doi:"10.1186/1471-2458-6-309"</p></li>
</ul>

<h2>Sort order</h2>

<p style="text-align: justify;">For search queries, the results are ordered by relevance score. For batch 
    requests, the results are retrieved in the order of the requests.</p>

<h2>Parameters</h2>
<p style="text-align: justify;">The API methods allow different parameters to be passed. Additionally, there is an API key parameter which is common to all API methods. For all API methods 
    the API key can be provided either as a query parameter or in the request header. If the API key 
    is not provided, the API will return HTTP 401 error. You can register for an API key <a href="/services#api">here</a>.</p>

<h2>API methods</h2>

## Operation: getArticleByCoreIdBatch
Method accepts a JSON array of CORE IDs and retrieves a list of articles. The response array is ordered based on the order of the IDs in the request array.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "type": "integer"
      },
      "type": "array"
    },
    "metadata": {
      "type": "boolean",
      "description": "Whether to retrieve the full article metadata or only the IDs. The default value is true"
    },
    "fulltext": {
      "type": "boolean",
      "description": "Whether to retrieve fulltexts of the articles. The default value is false"
    },
    "citations": {
      "type": "boolean",
      "description": "Whether to retrieve citations found in the articles. The default value is false"
    },
    "similar": {
      "type": "boolean",
      "description": "Whether to retrieve lists of similar articles. The default value is false. Because the similar articles are calculated on demand, setting this parameter to true might slightly slow down the response time"
    },
    "duplicate": {
      "type": "boolean",
      "description": "Whether to retrieve CORE IDs of different versions of the articles. The default value is false"
    },
    "urls": {
      "type": "boolean",
      "description": "Whether to retrieve lists of URLs of the article fulltexts. The default value is false"
    },
    "faithfulMetadata": {
      "type": "boolean",
      "description": "Returns the records raw XML metadata from the original repository. The default value is false"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ArticleResponse"
  },
  "type": "array"
}
```
## Operation: getArticleByCoreId
Method will retrieve an article based on given CORE ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "coreId": {
      "type": "integer",
      "format": "int64",
      "description": "CORE ID of the article that needs to be fetched."
    },
    "metadata": {
      "type": "boolean",
      "description": "Whether to retrieve the full article metadata or only the ID. The default value is true."
    },
    "fulltext": {
      "type": "boolean",
      "description": "Whether to retrieve full text of the article. The default value is false"
    },
    "citations": {
      "type": "boolean",
      "description": "Whether to retrieve citations found in the article. The default value is false"
    },
    "similar": {
      "type": "boolean",
      "description": "Whether to retrieve a list of similar articles. The default value is false. Because the similar articles are calculated on demand, setting this parameter to true might slightly slow down the response time"
    },
    "duplicate": {
      "type": "boolean",
      "description": "Whether to retrieve a list of CORE IDs of different versions of the article. The default value is false"
    },
    "urls": {
      "type": "boolean",
      "description": "Whether to retrieve a list of URLs from which the article can be downloaded. This can include links to PDFs as well as HTML pages. The default value is false"
    },
    "faithfulMetadata": {
      "type": "boolean",
      "description": "Returns the records raw XML metadata from the original repository. The default value is false"
    }
  },
  "additionalProperties": false,
  "required": [
    "coreId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleResponse"
}
```
## Operation: getArticlePdfByCoreId
Method will retrieve an article based on given CORE ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "coreId": {
      "type": "string",
      "description": "ID of article history that needs to be fetched"
    }
  },
  "additionalProperties": false,
  "required": [
    "coreId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getArticleHistoryByCoreId
Method accepts a single CORE ID and returns a list of all historical versions of the article, which are stored in CORE database. The results are ordered from the newest one to the oldest one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "coreId": {
      "type": "string",
      "description": "CORE ID of the article which history should be fetched"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Which page of the history results should be retrieved. Can be any number betwen 1 and 100, default is 1 (first page).",
      "maximum": 100,
      "minimum": 1
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "The number of results to return per page. Can be any number between 10 and 100, default is 10.",
      "maximum": 100,
      "minimum": 10
    }
  },
  "additionalProperties": false,
  "required": [
    "coreId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleHistoryResponse"
}
```
## Operation: searchArticlesBatch
Method accepts a JSON array of search queries and parameters. It then searches through all articles and returns a JSON array of search results for each of the queries. Method searches through all article fields (title, authors, subjects, identifiers, etc.).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "$ref": "#/definitions/SearchRequest"
      },
      "type": "array"
    },
    "metadata": {
      "type": "boolean",
      "description": "Whether to retrieve the full article metadata or only the ID. The default value is true."
    },
    "fulltext": {
      "type": "boolean",
      "description": "Whether to retrieve full text of the article. The default value is false"
    },
    "citations": {
      "type": "boolean",
      "description": "Whether to retrieve citations found in the article. The default value is false"
    },
    "similar": {
      "type": "boolean",
      "description": "Whether to retrieve a list of similar articles. The default value is false. Because the similar articles are calculated on demand, setting this parameter to true might slightly slow down the response time"
    },
    "duplicate": {
      "type": "boolean",
      "description": "Whether to retrieve a list of CORE IDs of different versions of the article. The default value is false"
    },
    "urls": {
      "type": "boolean",
      "description": "Whether to retrieve a list of URLs from which the article can be downloaded. This can include links to PDFs as well as HTML pages. The default value is false"
    },
    "faithfulMetadata": {
      "type": "boolean",
      "description": "Whether to retrieve the raw XML metadata of the article. The default value is false"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ArticleSearchResponse"
  },
  "type": "array"
}
```
## Operation: searchArticles
Searches through all articles and returns a JSON array with search results. Method searches through all article fields.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "integer",
      "format": "int64",
      "description": "The search query"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Which page of the search results should be retrieved. Can be any number betwen 1 and 100, default is 1 (first page).",
      "maximum": 100,
      "minimum": 1
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "The number of results to return per page. Can be any number between 10 and 100, default is 10.",
      "maximum": 100,
      "minimum": 10
    },
    "metadata": {
      "type": "boolean",
      "description": "Whether to retrieve the full article metadata or only the ID. The default value is true."
    },
    "fulltext": {
      "type": "boolean",
      "description": "Whether to retrieve full text of the article. The default value is false"
    },
    "citations": {
      "type": "boolean",
      "description": "Whether to retrieve citations found in the article. The default value is false"
    },
    "similar": {
      "type": "boolean",
      "description": "Whether to retrieve a list of similar articles. The default value is false. Because the similar articles are calculated on demand, setting this parameter to true might slightly slow down the response time"
    },
    "duplicate": {
      "type": "boolean",
      "description": "Whether to retrieve a list of CORE IDs of different versions of the article. The default value is false"
    },
    "urls": {
      "type": "boolean",
      "description": "Whether to retrieve a list of URLs from which the article can be downloaded. This can include links to PDFs as well as HTML pages. The default value is false"
    },
    "faithfulMetadata": {
      "type": "boolean",
      "description": "Returns the records raw XML metadata from the original repository. The default value is false"
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleSearchResponse"
}
```
## Operation: similarArticles
Method accepts a text and retrieves a JSON array of articles which are similar to the given text. The response array is ordered based on similarity score, starting from the most similar.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SimilarRequest"
    },
    "limit": {
      "type": "integer",
      "description": "How many similar articles to retrieve at most. Can be any number betwen 1 and 100, default is 10",
      "maximum": 100,
      "minimum": 1
    },
    "metadata": {
      "type": "boolean",
      "description": "Whether to retrieve the full article metadata or only the IDs of the similar articles. The default value is true"
    },
    "fulltext": {
      "type": "boolean",
      "description": "Whether to retrieve fulltexts of the similar articles. The default value is false"
    },
    "citations": {
      "type": "boolean",
      "description": "Whether to retrieve citations found in the articles. The default value is false"
    },
    "similar": {
      "type": "boolean",
      "description": "Whether to retrieve lists of similar articles. The default value is false. Because the similar articles are calculated on demand, setting this parameter to true might slightly slow down the response time"
    },
    "duplicate": {
      "type": "boolean",
      "description": "Whether to retrieve CORE IDs of different versions of the articles. The default value is false"
    },
    "urls": {
      "type": "boolean",
      "description": "Whether to retrieve lists of URLs of the article fulltexts. The default value is false"
    },
    "faithfulMetadata": {
      "type": "boolean",
      "description": "Whether to retrieve the raw XML metadata of the articles. The default value is false"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ArticleSimilarResponse"
}
```
## Operation: getJournalByIssnBatch
Method accepts a JSON array of ISSNs and retrieves a list of journals.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/JournalResponse"
  },
  "type": "array"
}
```
## Operation: getJournalByIssn
Returns a journal with given ISSN identifier.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "issn": {
      "type": "string",
      "description": "ISSN identifier of journal that needs to be fetched."
    }
  },
  "additionalProperties": false,
  "required": [
    "issn"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JournalResponse"
}
```
## Operation: journals.search.post
Method accepts a JSON array of search queries and parameters. It then searches through all journals and returns a JSON array of search results for each of the queries. Method searches through all journal fields (title, identifiers, subjects, language, rights and publisher).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "$ref": "#/definitions/SearchRequest"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/JournalResponse"
  },
  "type": "array"
}
```
## Operation: journals.search.query.get
Searches through all journals and returns a JSON array of search results. Method searches through all journal fields (title, identifiers, subjects, language, rights and publisher).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Which page of the search results should be retrieved. Can be any number betwen 1 and 100, default is 1 (first page).",
      "maximum": 100,
      "minimum": 1
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "The number of results to return per page. Can be any number between 10 and 100, default is 10.",
      "maximum": 100,
      "minimum": 10
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JournalSearchResponse"
}
```
## Operation: getRepositoryByIdBatch
Method accepts a JSON array of CORE repository IDs and retrieves a list of repositories. The response array is ordered based on the order of the IDs in the request array. The maximum number of IDs in request is 100.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "type": "integer"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RepositoryResponse"
  },
  "type": "array"
}
```
## Operation: getRepositoryById
Method will retrieve a repository based on given CORE repository ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "repositoryId": {
      "type": "integer",
      "description": "CORE repository ID of the article that needs to be fetched."
    }
  },
  "additionalProperties": false,
  "required": [
    "repositoryId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepositoryResponse"
}
```
## Operation: repositories.search.post
Method accepts a JSON array of search queries and parameters. It then searches through all repositories and returns a JSON array of search results for each of the queries. Method searches through all repository fields.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "$ref": "#/definitions/SearchRequest"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepositorySearchResponse"
}
```
## Operation: repositories.search.query.get
Searches through all repositories and returns a JSON array with search results. Method searches through all repository fields.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Which page of the search results should be retrieved. Can be any number betwen 1 and 100, default is 1 (first page).",
      "maximum": 100,
      "minimum": 1
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "The number of results to return per page. Can be any number between 10 and 100, default is 10.",
      "maximum": 100,
      "minimum": 10
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RepositorySearchResponse"
}
```
## Operation: search.post
Method accepts a JSON array of search queries. It searches through all resources and returns a JSON array with search results for each of the queries. Method searches through all resources and all fields. The results are ordered by relevance score and contain type of the relevant resource and its ID. Furthermore, the responses are oredered based on the order of the request items. The metadata of each resource need to be obtained through an appropriate method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "items": {
        "$ref": "#/definitions/SearchRequest"
      },
      "type": "array"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/SearchAllResponse"
  },
  "type": "array"
}
```
## Operation: search.query.get
Searches through all resources and returns a JSON array with search results. Method searches through all resources and all fields. The results are ordered by relevance score and contain type of the relevant resource and its ID. The metadata of each resource need to be obtained through an appropriate method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Which page of the search results should be retrieved. Can be any number betwen 1 and 100, default is 1 (first page).",
      "maximum": 100,
      "minimum": 1
    },
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "The number of results to return per page. Can be any number between 10 and 100, default is 10.",
      "maximum": 100,
      "minimum": 10
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SearchAllResponse"
}
```
