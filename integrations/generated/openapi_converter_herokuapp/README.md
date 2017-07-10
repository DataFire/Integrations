# @datafire/openapi_converter_herokuapp
Converter and validator for Swagger 2.0 to OpenAPI 3.0.x definitions

## Operation: getBadge
Return a redirect to a badge svg file depending on a source definition's validity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL to retrieve the OpenAPI 3.0.x definition from"
    }
  },
  "additionalProperties": false,
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: convertUrl
Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: convert
Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "filename": {
      "type": "string",
      "description": "The file to upload and convert"
    },
    "source": {
      "type": "string",
      "description": "The text of a Swagger 2.0 definition to convert"
    },
    "validate": {
      "type": "string",
      "enum": [
        "on"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getStatus
Get the status of the API

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: validateUrl
Validate an OpenAPI 3.0.x definition

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL to retrieve the OpenAPI 3.0.x definition from"
    }
  },
  "additionalProperties": false,
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: validate
Validate an OpenAPI 3.0.x definition supplied in the body of the request

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "filename": {
      "type": "string",
      "description": "The file to upload and validate"
    },
    "source": {
      "type": "string",
      "description": "The text of an OpenAPI 3.0.x definition to validate"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
