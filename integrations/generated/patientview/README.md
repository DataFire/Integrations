# @datafire/patientview

Client library for PatientView

## Installation and Usage
```bash
npm install --save datafire @datafire/patientview
```

```js
let datafire = require('datafire');
let patientview = require('@datafire/patientview').create();

patientview.validatePatientManagement({}).then(data => {
  console.log(data);
})
```

## Description
The recommended REST API endpoints to be used when integrating with PatientView

## Actions
### logIn
Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests


```js
patientview.logIn({}, context)
```

#### Parameters
* body (undefined)

### logOut
Log Out


```js
patientview.logOut({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - token

### getBasicUserInformation
Once logged in and have a token, get basic user information including group role membership


```js
patientview.getBasicUserInformation({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - token

### getBasicPatientDetails
Given a User ID, get basic patient information for a user from clinical data stored in FHIR


```js
patientview.getBasicPatientDetails({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId

### getPatientManagementDiagnoses
getPatientManagementDiagnoses


```js
patientview.getPatientManagementDiagnoses(null, context)
```

#### Parameters
*This action has no parameters*

### getPatientManagementLookupTypes
getPatientManagementLookupTypes


```js
patientview.getPatientManagementLookupTypes(null, context)
```

#### Parameters
*This action has no parameters*

### validatePatientManagement
validatePatientManagement


```js
patientview.validatePatientManagement({}, context)
```

#### Parameters
* body (undefined)

### getPatientManagement
getPatientManagement


```js
patientview.getPatientManagement({
  "userId": 0,
  "groupId": 0,
  "identifierId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* groupId (integer) **required** - groupId
* identifierId (integer) **required** - identifierId

### savePatientManagement
savePatientManagement


```js
patientview.savePatientManagement({
  "userId": 0,
  "groupId": 0,
  "identifierId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* groupId (integer) **required** - groupId
* identifierId (integer) **required** - identifierId
* body (undefined)

### savePatientManagementSurgeries
savePatientManagementSurgeries


```js
patientview.savePatientManagementSurgeries({
  "userId": 0,
  "groupId": 0,
  "identifierId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* groupId (integer) **required** - groupId
* identifierId (integer) **required** - identifierId
* body (undefined)

### getAvailableObservationHeadings
Given a User ID retrieve a list of available observation types for that user (where they have observation data).


```js
patientview.getAvailableObservationHeadings({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId

### getObservationsByCodes
Given a User ID and search parameters, retrieve a page of observations.


```js
patientview.getObservationsByCodes({
  "userId": 0,
  "code": [],
  "limit": 0,
  "offset": 0,
  "orderDirection": ""
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* code (array) **required** - code
* limit (integer) **required** - limit
* offset (integer) **required** - offset
* orderDirection (string) **required** - orderDirection

### getObservationsByCode
Given a User ID and observation code, retrieve all observations.


```js
patientview.getObservationsByCode({
  "userId": 0,
  "code": ""
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* code (string) **required** - code

### getPatientEnteredObservationsByCode
Given a User ID and observation code, retrieve patient entered observations.


```js
patientview.getPatientEnteredObservationsByCode({
  "userId": 0,
  "code": ""
}, context)
```

#### Parameters
* userId (integer) **required** - userId
* code (string) **required** - code

### getPatientEnteredObservationHeadings
Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).


```js
patientview.getPatientEnteredObservationHeadings({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - userId

