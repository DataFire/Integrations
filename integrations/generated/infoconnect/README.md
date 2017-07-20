# @datafire/infoconnect
Search our rich and robust data on companies and people. Utilize our fuzzy matching to power your new app or website with Infoconnect from Infogroup Targeting Solutions.

## Operation: v1.companies.id.get
Retrieves details of the Company identified by the resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A nine to ten digit Infogroup identification number. A number referencing the company assigned by Infogroup. This number will always refer to a single company and the reference will never change, unless the resource is permanently removed. Requesting a record by {id} will always return zero or one response."
    },
    "resourcetype": {
      "type": "string",
      "description": "Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core.",
      "enum": [
        "basic",
        "enhanced",
        "core"
      ]
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.companies.get
Retrieves lists of companies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourcetype": {
      "type": "string",
      "description": "Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core.",
      "enum": [
        "basic",
        "enhanced",
        "core"
      ]
    },
    "city": {
      "type": "string",
      "description": "Filters through the Companies collection by city name."
    },
    "companyname": {
      "type": "string",
      "description": "Filters through the Companies collection and returns resources by company name."
    },
    "ein": {
      "type": "string",
      "description": "Filters through the Companies collection and returns resources with an Employer Identification Number (EIN)."
    },
    "email": {
      "type": "string",
      "description": "Filters through the Companies collection and returns resources with a case-insensitive email address match at the level."
    },
    "firstname": {
      "type": "string",
      "description": "Filters through the Companies collection by the primary contact's first name."
    },
    "lastname": {
      "type": "string",
      "description": "Filters through the Companies collection by the primary contact's last name."
    },
    "phone": {
      "type": "string",
      "description": "Filters through the Companies collection and returns resources with an ten-digit phone number match."
    },
    "postalcode": {
      "type": "string",
      "description": "Filters through the Companies collection by ZIP code or Postal code."
    },
    "stateprovince": {
      "type": "string",
      "description": "Filters through the Companies collection by State or Province abbreviation."
    },
    "limit": {
      "type": "integer",
      "description": "Number of responses to return. If used, must be a number between 1 and 10. Default is 10."
    },
    "offset": {
      "type": "integer",
      "description": "Number of responses to be skipped for generating the output. If used, must be a number between 0-100 minus limit. Default is 0."
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.companies.search.post
Retrieves details of resources matching a given set of search fields that are submitted along with the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.companies.counts.post
Retrieves counts on resources matching a given set of search fields that are submitted along with the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.people.id.get
Retrieves details of the individual identified by the resource.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A twelve digit Infogroup identification number. A number referencing the individual assigned by Infogroup. This number will always refer to a single individual and the reference will never change, unless the resource is permanently removed. Requesting a record by {id} will always return zero or one response."
    },
    "resourcetype": {
      "type": "string",
      "description": "Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core. Additional ResourceTypes are Core, LifeStyle and TargetReady.",
      "enum": [
        "basic",
        "enhanced",
        "core",
        "LifeStyle",
        "TargetReady"
      ]
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.people.get
Retrieves lists of people.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourcetype": {
      "type": "string",
      "description": "Identifies the resource type for the response. The default value basic returns a base resource type that is valid across all methods; the resource type parameter is not needed to produce this response. To get a more detailed response set the resource type parameter to enhanced. To retrieve resources with Id's only, set the resource type parameter to core. Additional ResourceTypes are Core, LifeStyle and TargetReady.",
      "enum": [
        "basic",
        "enhanced",
        "core",
        "LifeStyle",
        "TargetReady"
      ]
    },
    "city": {
      "type": "string",
      "description": "Filters through the People collection by city name."
    },
    "email": {
      "type": "string",
      "description": "Filters through the People collection and returns resources with a case-insensitive email address match at the level."
    },
    "emailsha1upper": {
      "type": "string",
      "description": "Filters through the People collection and returns resources with a case-insensitive email address match at the level. If used, must be a SHA1 hashed upper case email address."
    },
    "includehistoricalemail": {
      "type": "boolean",
      "description": "IncludeHistoricalEmail can only be used in combination with Email or EmailSha1Upper. IncludeHistoricalEmail is used to retrieve historical records. Including this limits the ResourceType to Basic only. These records do not have an Id therefore cannot be used to return an Enhanced ResourceType. If used, must be True or False. Default is False."
    },
    "firstname": {
      "type": "string",
      "description": "Filters through the People collection by the primary contact's first name."
    },
    "lastname": {
      "type": "string",
      "description": "Filters through the People collection by the primary contact's last name."
    },
    "phone": {
      "type": "string",
      "description": "Filters through the People collection and returns resources with an ten-digit phone number match."
    },
    "postalcode": {
      "type": "string",
      "description": "Filters through the People collection by ZIP code or Postal code."
    },
    "stateprovince": {
      "type": "string",
      "description": "Filters through the People collection by State or Province abbreviation."
    },
    "limit": {
      "type": "integer",
      "description": "Number of responses to return. If used, must be a number between 1 and 10. Default is 10."
    },
    "offset": {
      "type": "integer",
      "description": "Number of responses to be skipped for generating the output. If used, must be a number between 0-100 minus limit. Default is 0."
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.people.search.post
Retrieves details of resources matching a given set of search fields that are submitted along with the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.people.counts.post
Retrieves counts on resources matching a given set of search fields that are submitted along with the request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v3.match.post
Matching and data append for partial name and address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v3.multiplematch.post
Multiple matching and data append for partial name and address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.sics.id.get
Retrieves details of Standard Identification Classification (SIC) code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A two, four, or six numeric Standard Identification Classification (SIC) code."
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v1.sics.get
Retrieves details of Standard Identification Classification (SIC) code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "keyword": {
      "type": "string",
      "description": "By SIC description. Example \"barber\"."
    },
    "Content-Type": {
      "type": "string",
      "description": "The content type.",
      "enum": [
        "application/json",
        "application/xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "keyword",
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
