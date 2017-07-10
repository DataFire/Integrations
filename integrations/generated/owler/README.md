# @datafire/owler
Search for information on companies using a website or company name and get access to Company Data, News, Blog Posts, Competitor Lists and much more.

## Operation: basicCompanySearch
The Company Basic Search API searches for a company based on the input and will returns results containing basic details about matching companies. By default the API returns the top 10 available results unless the limit is specified. The maximum limit is restricted to 30.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "Search term"
    },
    "fields": {
      "type": "array",
      "description": "Fields to be searched - name, website, ticker, permid. If not specfied, will be searched against all fields"
    },
    "limit": {
      "type": "string",
      "description": "Number of results to be displayed - 10 (by default, if not specified) to 30"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/basic_results"
}
```
## Operation: v1.company.competitor.id.companyId.get
The Competitors API provides basic information about top 3 competitors of a company specified in the Company Id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "companyId": {
      "type": "string",
      "description": "Company Id"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "companyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CompanyCompetitorVO"
}
```
## Operation: v1.company.competitor.url.website.get
The Competitors API provides basic information about top 3 competitors of a company specified in the website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "Company Id"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "website"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CompanyCompetitorVO"
}
```
## Operation: v1.company.competitorpremium.id.companyId.get
The Competitors API provides basic information about all competitors of a given company Id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "companyId": {
      "type": "string",
      "description": "Company Id"
    },
    "pagination_id": {
      "type": "string",
      "description": "Pass pagination_id as * in the first API request. The API response will return top competitors along with the next pagination_id which can be passed in the subsequent API request to get the next set of competitors. Repeat this process until needed or till the pagination_id returned is blank. Note:Every response will have maximum of 50 competitors."
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "companyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/competitors"
}
```
## Operation: v1.company.competitorpremium.url.website.get
The Competitors API provides basic information about all competitors of a given company Id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "Company Id"
    },
    "pagination_id": {
      "type": "string",
      "description": "Pass pagination_id as * in the first API request. The API response will return top competitors along with the next pagination_id which can be passed in the subsequent API request to get the next set of competitors. Repeat this process until needed or till the pagination_id returned is blank. Note:Every response will have maximum of 50 competitors."
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "website"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/competitors"
}
```
## Operation: v1.company.id.companyId.get
The Company Data API provides complete information about a company for the specified Company Id 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "companyId": {
      "type": "string",
      "description": "Company Id"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "companyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/company"
}
```
## Operation: searchCompany
The Company Search API searches for a company based on the input and will returns results containing basic details about matching companies. By default the API returns the top 10 available results unless the limit is specified. The maximum limit is restricted to 30.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "Search term"
    },
    "fields": {
      "type": "array",
      "description": "Fields to be searched - name, website, ticker. If not specified, will be searched against all fields"
    },
    "limit": {
      "type": "string",
      "description": "Number of results to be displayed - 10 (by default, if not specified) to 30"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/results"
}
```
## Operation: v1.company.url.website.get
The Company Data API provides complete information about a company for the specified URL 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "Company Domain"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "website"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/company"
}
```
## Operation: v1.companypremium.id.companyId.get
The Company Premium Data API provides complete information about a company for the specified Company Id 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "companyId": {
      "type": "string",
      "description": "Company Id"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "companyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/company"
}
```
## Operation: v1.companypremium.url.website.get
The Company Data API provides complete information about a company for the specified URL 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "Company Domain"
    },
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "website"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/company"
}
```
## Operation: getFeeds
The Feeds API provides a list of feeds and individual feed information for the given Company Ids and Category. By default the API returns the latest 10 feeds available unless the limit is specified. The maximum result is restricted to 100 feeds per API request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Format of the response content - json (by default if not specified), xml",
      "enum": [
        "xml",
        "json"
      ]
    },
    "company_id": {
      "type": "array",
      "description": "Company Ids separated by comma (Maximum of 150 Company Ids)"
    },
    "limit": {
      "type": "string",
      "description": "Number of results to be displayed - 10 (by default, if not specified) to 100"
    },
    "pagination_id": {
      "type": "string",
      "description": "Pass pagination_id as blank in the first API request. The API response will return the latest feeds along with the next pagination_id which can be passed in the subsequent API request to get the next set of feeds. Repeat this process until needed or till the pagination_id returned is blank"
    },
    "category": {
      "type": "array",
      "description": "Categories separated by comma. If not specified, will search against all categories"
    }
  },
  "additionalProperties": false,
  "required": [
    "company_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/results"
}
```
