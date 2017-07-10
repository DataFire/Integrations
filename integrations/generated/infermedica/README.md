# @datafire/infermedica
Empower your healthcare services with intelligent diagnostic insights of Infermedica API.

## Operation: getAllConditions
Returns a list of all available conditions.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Condition"
  },
  "type": "array"
}
```
## Operation: getCondition
Returns details of a single condition specified by id parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "condition id"
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
  "$ref": "#/definitions/Condition"
}
```
## Operation: computeDiagnosis
Computes possible diagnoses and relevant observations based on provided patient information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/DiagnosisRequest"
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
  "$ref": "#/definitions/DiagnosisResponse"
}
```
## Operation: getDatabaseInfo
Returns information about data used by diagnostic engine.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DatabaseInfo"
}
```
## Operation: getMatchingObservation
Returns details of a single observation if matched by the given phrase.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "phrase": {
      "type": "string",
      "description": "phrase to match"
    },
    "sex": {
      "type": "string",
      "description": "sex filter",
      "enum": [
        "female",
        "male"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "phrase"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Observation"
}
```
## Operation: getAllObservations
Returns a list of all available observations.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Observation"
  },
  "type": "array"
}
```
## Operation: getObservation
Returns details of a single observation specified by id parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "observation id"
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
  "$ref": "#/definitions/Observation"
}
```
## Operation: getAllRiskFactors
Returns a list of all available risk factors.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/RiskFactor"
  },
  "type": "array"
}
```
## Operation: getRiskFactor
Returns details of a single risk factor specified by id parameter.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "risk factor id"
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
  "$ref": "#/definitions/RiskFactor"
}
```
