# @datafire/europeana_eu
This Swagger API console provides an overview of an interface to the Europeana REST API. You can build and test anything from the simplest search to a complex query using facetList such as dates, geotags and permissions. For more help and information, head to our comprehensive <a href="http://labs.europeana.eu/api/">online documentation</a>.

## Operation: getDataset
get information about a specific dataset

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "id"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: listDatasets
get the list of Europeana datasets

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    },
    "edmDatasetName": {
      "type": "string",
      "description": "edmDatasetName"
    },
    "countryCode": {
      "type": "string",
      "description": "countryCode"
    },
    "status": {
      "type": "string",
      "description": "status"
    },
    "offset": {
      "type": "string",
      "description": "offset"
    },
    "pagesize": {
      "type": "string",
      "description": "pagesize"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: openSearch
basic search function following the OpenSearch specification

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "searchTerms": {
      "type": "string",
      "description": "searchTerms"
    },
    "startIndex": {
      "type": "integer",
      "format": "int32",
      "description": "startIndex"
    },
    "count": {
      "type": "integer",
      "format": "int32",
      "description": "count"
    }
  },
  "additionalProperties": false,
  "required": [
    "searchTerms"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RssResponse"
}
```
## Operation: getProvider
get information about a specific Europeana provider

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "id"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: listProviderDatasets
get the list of datasets provided by a specific provider

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "id"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: listProviders
get the list of Europeana data providers

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    },
    "countryCode": {
      "type": "string",
      "description": "countryCode"
    },
    "offset": {
      "type": "string",
      "description": "offset"
    },
    "pagesize": {
      "type": "string",
      "description": "pagesize"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: getSingleRecordJson
get a single record in JSON format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collectionId": {
      "type": "string",
      "description": "collectionId"
    },
    "recordId": {
      "type": "string",
      "description": "recordId"
    },
    "profile": {
      "type": "string",
      "description": "profile"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "collectionId",
    "recordId",
    "wskey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: getSingleRecordJsonLD
get single record in JSON LD format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collectionId": {
      "type": "string",
      "description": "collectionId"
    },
    "recordId": {
      "type": "string",
      "description": "recordId"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "format": {
      "type": "string",
      "description": "format"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "collectionId",
    "recordId",
    "wskey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: getSingleRecordRDF
get single record in RDF format)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "collectionId": {
      "type": "string",
      "description": "collectionId"
    },
    "recordId": {
      "type": "string",
      "description": "recordId"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    }
  },
  "additionalProperties": false,
  "required": [
    "collectionId",
    "recordId",
    "wskey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: searchRecords
search for records

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "query": {
      "type": "string",
      "description": "query"
    },
    "qf": {
      "type": "array",
      "description": "qf"
    },
    "reusability": {
      "type": "array",
      "description": "reusability"
    },
    "profile": {
      "type": "string",
      "description": "profile"
    },
    "start": {
      "type": "integer",
      "format": "int32",
      "description": "start"
    },
    "rows": {
      "type": "integer",
      "format": "int32",
      "description": "rows"
    },
    "facet": {
      "type": "array",
      "description": "facet"
    },
    "sort": {
      "type": "string",
      "description": "sort"
    },
    "colourpalette": {
      "type": "array",
      "description": "colourpalette"
    },
    "thumbnail": {
      "type": "boolean",
      "description": "thumbnail"
    },
    "media": {
      "type": "boolean",
      "description": "media"
    },
    "text_fulltext": {
      "type": "boolean",
      "description": "text_fulltext"
    },
    "landingpage": {
      "type": "boolean",
      "description": "landingpage"
    },
    "cursor": {
      "type": "string",
      "description": "cursor"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "wskey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: fieldTrip
Google Fieldtrip formatted RSS of selected collections

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "query"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "offset"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "limit"
    },
    "profile": {
      "type": "string",
      "description": "profile"
    },
    "language": {
      "type": "string",
      "description": "language"
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
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: suggestions
get autocompletion recommendations for search queries

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "query"
    },
    "rows": {
      "type": "integer",
      "format": "int32",
      "description": "rows"
    },
    "phrases": {
      "type": "boolean",
      "description": "phrases"
    },
    "callback": {
      "type": "string",
      "description": "callback"
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
  "$ref": "#/definitions/ModelAndView"
}
```
## Operation: translateQueryUsingGET
translate a term to different languages

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "term": {
      "type": "string",
      "description": "term"
    },
    "languageCodes": {
      "type": "array",
      "description": "languageCodes"
    },
    "wskey": {
      "type": "string",
      "description": "wskey"
    },
    "profile": {
      "type": "string",
      "description": "profile"
    },
    "callback": {
      "type": "string",
      "description": "callback"
    }
  },
  "additionalProperties": false,
  "required": [
    "term",
    "languageCodes",
    "wskey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ModelAndView"
}
```
