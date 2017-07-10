# @datafire/consumerfinance_gov
Learn more about home mortgage data, download the data yourself, or build new tools using our API.

## Operation: getDatasets
Get a list of all datasets.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getDatasetHmda
Get metadata for this dataset.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: getConceptHmda
Get information about a particular concept in this dataset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "concept": {
      "type": "string",
      "description": "Name of concept"
    }
  },
  "additionalProperties": false,
  "required": [
    "concept"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: querySliceHmda
Query a slice in this dataset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slice": {
      "type": "string",
      "description": "Name of slice"
    },
    "$select": {
      "type": "string",
      "description": "Fields to return, separated by commas."
    },
    "$where": {
      "type": "string",
      "description": "Conditions to search for in the slice, in SQL WHERE style."
    },
    "$group": {
      "type": "string",
      "description": "Fields to group by, summarizing the data, separated by commas."
    },
    "$limit": {
      "type": "integer",
      "description": "Number of records to return, 100 by default. Enter 0 for no limit."
    },
    "$offset": {
      "type": "integer",
      "description": "Number of records to skip."
    },
    "$orderBy": {
      "type": "string",
      "description": "Fields to order by, separated by commas. ASC and DESC can be used to modify the order."
    },
    "$callback": {
      "type": "string",
      "description": "JavaScript callback to invoke. Only useful with JSONP requests."
    }
  },
  "additionalProperties": false,
  "required": [
    "slice"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/QueryResponse"
}
```
## Operation: getSliceMetadataHmda
Get the metadata for a slice in this dataset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slice": {
      "type": "string",
      "description": "Name of slice"
    }
  },
  "additionalProperties": false,
  "required": [
    "slice"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDataset
Get metadata about a dataset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "dataset": {
      "type": "string",
      "description": "Name of dataset"
    }
  },
  "additionalProperties": false,
  "required": [
    "dataset"
  ]
}
```
### Output Schema
```json
{}
```
