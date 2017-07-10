# @datafire/nsidc
This API allows programmers to build National Snow and Ice Data Center data and metadata services into their applications.

## Operation: facets
In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchTerms": {
      "type": "string",
      "description": "URL-encoded keyword or keywords desired by the client; OpenSearch 1.1"
    },
    "count": {
      "type": "integer",
      "description": "The number of search results per page desired by the client; OpenSearch 1.1"
    },
    "startIndex": {
      "type": "integer",
      "description": "First search result desired by the search client; OpenSearch 1.1"
    },
    "spatial": {
      "type": "string",
      "description": "4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, \"box\" parameter"
    },
    "sortKeys": {
      "type": "string",
      "description": "Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0",
      "enum": [
        "score,,desc",
        "spatial_area,,asc",
        "spatial_area,,desc",
        "temporal_duration,,asc",
        "temporal_duration,,desc",
        "updated,,desc"
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date",
      "description": "The start date in yyyy-mm-dd format"
    },
    "endDate": {
      "type": "string",
      "format": "date",
      "description": "The end date in yyyy-mm-dd format"
    },
    "facetFilters": {
      "type": "string",
      "description": "Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values"
    },
    "source": {
      "type": "string",
      "description": "Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC",
      "enum": [
        "NSIDC",
        "ADE"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: OpenSearch.get
This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchTerms": {
      "type": "string",
      "description": "URL-encoded keyword or keywords desired by the client; OpenSearch 1.1"
    },
    "count": {
      "type": "integer",
      "description": "The number of search results per page desired by the client; OpenSearch 1.1"
    },
    "startIndex": {
      "type": "integer",
      "description": "First search result desired by the search client; OpenSearch 1.1"
    },
    "spatial": {
      "type": "string",
      "description": "4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, \"box\" parameter"
    },
    "sortKeys": {
      "type": "string",
      "description": "Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0",
      "enum": [
        "score,,desc",
        "spatial_area,,asc",
        "spatial_area,,desc",
        "temporal_duration,,asc",
        "temporal_duration,,desc",
        "updated,,desc"
      ]
    },
    "startDate": {
      "type": "string",
      "format": "date",
      "description": "The start date in yyyy-mm-dd format"
    },
    "endDate": {
      "type": "string",
      "format": "date",
      "description": "The end date in yyyy-mm-dd format"
    },
    "facetFilters": {
      "type": "string",
      "description": "Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values"
    },
    "source": {
      "type": "string",
      "description": "Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC",
      "enum": [
        "NSIDC",
        "ADE"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: OpenSearchDescription.get
Describes the web interface of NSIDC's data search engine

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: id
In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "Search terms typed into the interface (minimum two characters)"
    },
    "source": {
      "type": "string",
      "description": "Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC",
      "enum": [
        "NSIDC",
        "ADE"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "q",
    "source"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
