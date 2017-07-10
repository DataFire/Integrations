# @datafire/bclaws_ca_bclaws
BC Laws is an electronic library providing free public access to the laws of British Columbia. BC Laws is hosted by the Queen's Printer of British Columbia and published in partnership with the Ministry of Justice and the Law Clerk of the Legislative Assembly.BC Laws contains a comprehensive collection of BC legislation and related materials. It is available on the internet in two forms:First: The library is available as a web site in which users can browse and search the laws of British Columbia.Second: The library is available as a portal to legislation in raw XML data format, accessible via the BC Laws API2. This direct access to raw data is intended to enable third parties to build or add their own custom applications based on the structure of the data and all the associated search functionality inherent in that structure. The BC Laws website itself is an example of one such application.

## Operation: content.aspectId.get
Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: content.aspectId.civixDocumentId.get
Lists the metadata available for the specified index or directory from the BCLaws legislative respository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    },
    "civixDocumentId": {
      "type": "string",
      "description": "The document identification code for an index or directory"
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId",
    "civixDocumentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: document.id.aspectId.civixIndexId.civixDocumentId.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    },
    "civixIndexId": {
      "type": "string",
      "description": "Index identification code"
    },
    "civixDocumentId": {
      "type": "string",
      "description": "The document identification code for an index or directory"
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId",
    "civixIndexId",
    "civixDocumentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: document.id.aspectId.civixIndexId.civixDocumentId.search.searchString.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    },
    "civixIndexId": {
      "type": "string",
      "description": "Index identification code"
    },
    "civixDocumentId": {
      "type": "string",
      "description": "The document identification code for an index or directory"
    },
    "searchString": {
      "type": "string",
      "description": "The text to search for within the document"
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId",
    "civixIndexId",
    "civixDocumentId",
    "searchString"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: document.id.aspectId.civixIndexId.civixDocumentId.xml.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    },
    "civixIndexId": {
      "type": "string",
      "description": "Index identification code"
    },
    "civixDocumentId": {
      "type": "string",
      "description": "The document identification code for an index or directory"
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId",
    "civixIndexId",
    "civixDocumentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: document.id.aspectId.civixIndexId.civixDocumentId.xml.search.searchString.get
The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    },
    "civixIndexId": {
      "type": "string",
      "description": "Index identification code"
    },
    "civixDocumentId": {
      "type": "string",
      "description": "The document identification code for an index or directory"
    },
    "searchString": {
      "type": "string",
      "description": "The text to search for within the document"
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId",
    "civixIndexId",
    "civixDocumentId",
    "searchString"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: search.aspectId.fullsearch.get
A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "aspectId": {
      "type": "string",
      "description": "The identifier of the 'aspect' (content group) to search",
      "enum": [
        "complete",
        "corpreg",
        "bcgaz1",
        "bcgaz2",
        "oic",
        "psl",
        "ecb",
        "hscr",
        "arch_oic"
      ]
    },
    "q": {
      "type": "string",
      "description": "query term"
    },
    "s": {
      "type": "string",
      "description": "first hit (start index)"
    },
    "e": {
      "type": "integer",
      "description": "last hit (end index)"
    },
    "nFrag": {
      "type": "integer",
      "description": "number of fragment snippets to return (< 10)"
    },
    "lFrag": {
      "type": "integer",
      "description": "length of fragment snippets (< 200)"
    }
  },
  "additionalProperties": false,
  "required": [
    "aspectId",
    "q",
    "s",
    "e",
    "nFrag",
    "lFrag"
  ]
}
```
### Output Schema
```json
{}
```
