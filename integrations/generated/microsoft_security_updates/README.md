# @datafire/microsoft_security_updates


## Operation: Updates.get
Get all updates with a link to the CVRF document


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdatesReturnTypes200"
}
```
## Operation: Updates_id_.get
Get updates with a link to the CVRF document for a particular ID.

ID can be:

  * Update ID (ie: 2016-Aug)
  * Vulnerability ID (ie: CVE-2016-0128)
  * Year (ie: 2016)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdatesReturnTypes200"
}
```
## Operation: cvrf.id.get
Gets a CVRF document by ID (ie: 2016-Aug)

Note: to view the correct XML response, please change *$ref: '#/definitions/cvrfReturnTypes200'* to *$ref: '#/definitions/cvrfReturnTypes200_xml'* in the swagger.json or swagger.yaml file


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cvrfReturnTypes200"
}
```
