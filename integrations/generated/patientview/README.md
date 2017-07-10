# @datafire/patientview
The recommended REST API endpoints to be used when integrating with PatientView

## Operation: logIn
Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Credentials"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserToken"
}
```
## Operation: logOut
Log Out

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getBasicUserInformation
Once logged in and have a token, get basic user information including group role membership

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: getBasicPatientDetails
Given a User ID, get basic patient information for a user from clinical data stored in FHIR

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Patient"
  },
  "type": "array",
  "uniqueItems": false
}
```
## Operation: getPatientManagementDiagnoses
getPatientManagementDiagnoses

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Code"
  },
  "type": "array",
  "uniqueItems": false
}
```
## Operation: getPatientManagementLookupTypes
getPatientManagementLookupTypes

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/LookupType"
  },
  "type": "array",
  "uniqueItems": false
}
```
## Operation: validatePatientManagement
validatePatientManagement

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/PatientManagement"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: getPatientManagement
getPatientManagement

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "groupId": {
      "type": "integer",
      "format": "int64",
      "description": "groupId"
    },
    "identifierId": {
      "type": "integer",
      "format": "int64",
      "description": "identifierId"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "groupId",
    "identifierId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PatientManagement"
}
```
## Operation: savePatientManagement
savePatientManagement

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "groupId": {
      "type": "integer",
      "format": "int64",
      "description": "groupId"
    },
    "identifierId": {
      "type": "integer",
      "format": "int64",
      "description": "identifierId"
    },
    "body": {
      "$ref": "#/definitions/PatientManagement"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "groupId",
    "identifierId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: savePatientManagementSurgeries
savePatientManagementSurgeries

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "groupId": {
      "type": "integer",
      "format": "int64",
      "description": "groupId"
    },
    "identifierId": {
      "type": "integer",
      "format": "int64",
      "description": "identifierId"
    },
    "body": {
      "$ref": "#/definitions/PatientManagement"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "groupId",
    "identifierId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAvailableObservationHeadings
Given a User ID retrieve a list of available observation types for that user (where they have observation data).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ObservationHeading"
  },
  "type": "array",
  "uniqueItems": false
}
```
## Operation: getObservationsByCodes
Given a User ID and search parameters, retrieve a page of observations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "code": {
      "type": "array",
      "description": "code",
      "uniqueItems": false
    },
    "limit": {
      "type": "integer",
      "format": "int64",
      "description": "limit"
    },
    "offset": {
      "type": "integer",
      "format": "int64",
      "description": "offset"
    },
    "orderDirection": {
      "type": "string",
      "description": "orderDirection"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "code",
    "limit",
    "offset",
    "orderDirection"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FhirObservationPage"
}
```
## Operation: getObservationsByCode
Given a User ID and observation code, retrieve all observations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "code": {
      "type": "string",
      "description": "code"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "code"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/FhirObservation"
  },
  "type": "array",
  "uniqueItems": false
}
```
## Operation: getPatientEnteredObservationsByCode
Given a User ID and observation code, retrieve patient entered observations.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "code": {
      "type": "string",
      "description": "code"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "code"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/FhirObservation"
  },
  "type": "array",
  "uniqueItems": false
}
```
## Operation: getPatientEnteredObservationHeadings
Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ObservationHeading"
  },
  "type": "array",
  "uniqueItems": false
}
```
