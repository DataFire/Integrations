# @datafire/patientview

Client library for PatientView

## Installation and Usage
```bash
npm install --save @datafire/patientview
```
```js
let patientview = require('@datafire/patientview').create();

patientview.validatePatientManagement({}).then(data => {
  console.log(data);
});
```

## Description

The recommended REST API endpoints to be used when integrating with PatientView

## Actions

### logIn
Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests


```js
patientview.logIn({}, context)
```

#### Input
* input `object`
  * body [Credentials](#credentials)

#### Output
* output [UserToken](#usertoken)

### logOut
Log Out


```js
patientview.logOut({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: token

#### Output
*Output schema unknown*

### getBasicUserInformation
Once logged in and have a token, get basic user information including group role membership


```js
patientview.getBasicUserInformation({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: token

#### Output
* output [User](#user)

### getBasicPatientDetails
Given a User ID, get basic patient information for a user from clinical data stored in FHIR


```js
patientview.getBasicPatientDetails({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId

#### Output
* output `array`
  * items [Patient](#patient)

### getPatientManagementDiagnoses
getPatientManagementDiagnoses


```js
patientview.getPatientManagementDiagnoses(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Code](#code)

### getPatientManagementLookupTypes
getPatientManagementLookupTypes


```js
patientview.getPatientManagementLookupTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [LookupType](#lookuptype)

### validatePatientManagement
validatePatientManagement


```js
patientview.validatePatientManagement({}, context)
```

#### Input
* input `object`
  * body [PatientManagement](#patientmanagement)

#### Output
*Output schema unknown*

### getPatientManagement
getPatientManagement


```js
patientview.getPatientManagement({
  "userId": 0,
  "groupId": 0,
  "identifierId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId
  * groupId **required** `integer`: groupId
  * identifierId **required** `integer`: identifierId

#### Output
* output [PatientManagement](#patientmanagement)

### savePatientManagement
savePatientManagement


```js
patientview.savePatientManagement({
  "userId": 0,
  "groupId": 0,
  "identifierId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId
  * groupId **required** `integer`: groupId
  * identifierId **required** `integer`: identifierId
  * body [PatientManagement](#patientmanagement)

#### Output
*Output schema unknown*

### savePatientManagementSurgeries
savePatientManagementSurgeries


```js
patientview.savePatientManagementSurgeries({
  "userId": 0,
  "groupId": 0,
  "identifierId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId
  * groupId **required** `integer`: groupId
  * identifierId **required** `integer`: identifierId
  * body [PatientManagement](#patientmanagement)

#### Output
*Output schema unknown*

### getAvailableObservationHeadings
Given a User ID retrieve a list of available observation types for that user (where they have observation data).


```js
patientview.getAvailableObservationHeadings({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId

#### Output
* output `array`
  * items [ObservationHeading](#observationheading)

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

#### Input
* input `object`
  * userId **required** `integer`: userId
  * code **required** `array`: code
  * limit **required** `integer`: limit
  * offset **required** `integer`: offset
  * orderDirection **required** `string`: orderDirection

#### Output
* output [FhirObservationPage](#fhirobservationpage)

### getObservationsByCode
Given a User ID and observation code, retrieve all observations.


```js
patientview.getObservationsByCode({
  "userId": 0,
  "code": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId
  * code **required** `string`: code

#### Output
* output `array`
  * items [FhirObservation](#fhirobservation)

### getPatientEnteredObservationsByCode
Given a User ID and observation code, retrieve patient entered observations.


```js
patientview.getPatientEnteredObservationsByCode({
  "userId": 0,
  "code": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId
  * code **required** `string`: code

#### Output
* output `array`
  * items [FhirObservation](#fhirobservation)

### getPatientEnteredObservationHeadings
Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).


```js
patientview.getPatientEnteredObservationHeadings({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: userId

#### Output
* output `array`
  * items [ObservationHeading](#observationheading)



## Definitions

### ApiKey
* ApiKey `object`
  * expired `boolean`
  * expiryDate `string`
  * key `string`

### BaseGroup
* BaseGroup `object`
  * code `string`
  * groupType [Lookup](#lookup)
  * id `integer`
  * lastImportDate `string`
  * name `string`
  * parentCodes `array`
    * items `string`
  * shortName `string`
  * visible `boolean`
  * visibleToJoin `boolean`

### Category
* Category `object`
  * friendlyDescription `string`
  * hidden `boolean`
  * icd10Description `string`
  * id `integer`
  * number `integer`

### Code
* Code `object`
  * code `string`
  * codeCategories `array`
    * items [CodeCategory](#codecategory)
  * codeType [Lookup](#lookup)
  * created `string`
  * description `string`
  * displayOrder `integer`
  * externalStandards `array`
    * items [CodeExternalStandard](#codeexternalstandard)
  * fullDescription `string`
  * hideFromPatients `boolean`
  * id `integer`
  * lastUpdate `string`
  * links `array`
    * items [Link](#link)
  * patientFriendlyName `string`
  * removedExternally `boolean`
  * sourceType `string` (values: PATIENTVIEW, NHS_CHOICES)
  * standardType [Lookup](#lookup)

### CodeCategory
* CodeCategory `object`
  * category [Category](#category)
  * id `integer`

### CodeExternalStandard
* CodeExternalStandard `object`
  * codeString `string`
  * externalStandard [ExternalStandard](#externalstandard)
  * id `integer`

### ContactPoint
* ContactPoint `object`
  * contactPointType [ContactPointType](#contactpointtype)
  * content `string`
  * created `string`
  * id `integer`
  * lastUpdate `string`

### ContactPointType
* ContactPointType `object`
  * description `string`
  * id `integer`
  * lookupType [LookupType](#lookuptype)
  * value `string` (values: UNIT_WEB_ADDRESS, TRUST_WEB_ADDRESS, PV_ADMIN_NAME, PV_ADMIN_PHONE, PV_ADMIN_EMAIL, UNIT_ENQUIRIES_PHONE, UNIT_ENQUIRIES_EMAIL, APPOINTMENT_PHONE, APPOINTMENT_EMAIL, OUT_OF_HOURS_INFO)

### Credentials
* Credentials `object`
  * apiKey `string`
  * password `string`
  * username `string`

### Entry«long,Map«string,List«FhirObservation»»»
* Entry«long,Map«string,List«FhirObservation»»» `object`
  * key `array`
    * items [Entry«string,List«FhirObservation»»](#entry«string,list«fhirobservation»»)

### Entry«string,List«FhirObservation»»
* Entry«string,List«FhirObservation»» `object`
  * key `array`
    * items [FhirObservation](#fhirobservation)

### ExternalStandard
* ExternalStandard `object`
  * description `string`
  * id `integer`
  * name `string`

### Feature
* Feature `object`
  * created `string`
  * description `string`
  * id `integer`
  * lastUpdate `string`
  * name `string`

### FhirAllergy
* FhirAllergy `object`
  * confidenceLevel `string`
  * group [Group](#group)
  * id `integer`
  * identifier `string`
  * infoSource `string`
  * reaction `string`
  * recordedDate `string`
  * status `string`
  * substance `string`
  * type `string`

### FhirCondition
* FhirCondition `object`
  * asserter `string`
  * category `string`
  * code `string`
  * date `string`
  * description `string`
  * fullDescription `string`
  * group [Group](#group)
  * id `integer`
  * identifier `string`
  * links `array`
    * items [Link](#link)
  * notes `string`
  * severity `string`
  * status `string`

### FhirContact
* FhirContact `object`
  * id `integer`
  * system `string`
  * use `string`
  * value `string`

### FhirEncounter
* FhirEncounter `object`
  * date `string`
  * encounterType `string`
  * group [Group](#group)
  * id `integer`
  * identifier `string`
  * links `array`
    * items [Link](#link)
  * observations `array`
    * items [FhirObservation](#fhirobservation)
  * procedures `array`
    * items [FhirProcedure](#fhirprocedure)
  * status `string`

### FhirIdentifier
* FhirIdentifier `object`
  * id `integer`
  * label `string`
  * value `string`

### FhirObservation
* FhirObservation `object`
  * applies `string`
  * bodySite `string`
  * comments `string`
  * comparator `string`
  * diagram `string`
  * group [Group](#group)
  * id `integer`
  * identifier `string`
  * location `string`
  * name `string`
  * temporaryUuid `string`
  * units `string`
  * value `string`

### FhirObservationPage
* FhirObservationPage `object`
  * data `array`
    * items [Entry«long,Map«string,List«FhirObservation»»»](#entry«long,map«string,list«fhirobservation»»»)
  * totalElements `integer`
  * totalPages `integer`

### FhirPatient
* FhirPatient `object`
  * address1 `string`
  * address2 `string`
  * address3 `string`
  * address4 `string`
  * contacts `array`
    * items [FhirContact](#fhircontact)
  * dateOfBirth `string`
  * dateOfBirthNoTime `string`
  * forename `string`
  * gender `string`
  * group [Group](#group)
  * groupCode `string`
  * identifier `string`
  * identifiers `array`
    * items [FhirIdentifier](#fhiridentifier)
  * postcode `string`
  * practitioners `array`
    * items [FhirPractitioner](#fhirpractitioner)
  * surname `string`

### FhirPractitioner
* FhirPractitioner `object`
  * address1 `string`
  * address2 `string`
  * address3 `string`
  * address4 `string`
  * allowInviteGp `boolean`
  * contacts `array`
    * items [FhirContact](#fhircontact)
  * gender `string`
  * groupCode `string`
  * identifier `string`
  * inviteDate `string`
  * name `string`
  * postcode `string`
  * role `string`

### FhirProcedure
* FhirProcedure `object`
  * bodySite `string`
  * id `integer`
  * type `string`

### Group
* Group `object`
  * address1 `string`
  * address2 `string`
  * address3 `string`
  * childGroups `array`
    * items [Group](#group)
  * code `string`
  * contactPoints `array`
    * items [ContactPoint](#contactpoint)
  * created `string`
  * fhirResourceId `string`
  * groupFeatures `array`
    * items [GroupFeature](#groupfeature)
  * groupType [Lookup](#lookup)
  * id `integer`
  * lastImportDate `string`
  * lastUpdate `string`
  * links `array`
    * items [Link](#link)
  * locations `array`
    * items [Location](#location)
  * name `string`
  * parentGroups `array`
    * items [Group](#group)
  * postcode `string`
  * sftpUser `string`
  * shortName `string`
  * visible `boolean`
  * visibleToJoin `boolean`

### GroupFeature
* GroupFeature `object`
  * created `string`
  * feature [Feature](#feature)
  * id `integer`
  * lastUpdate `string`

### GroupRole
* GroupRole `object`
  * group [Group](#group)
  * id `integer`
  * role [Role](#role)

### Link
* Link `object`
  * created `string`
  * displayOrder `integer`
  * id `integer`
  * lastUpdate `string`
  * link `string`
  * linkType [Lookup](#lookup)
  * name `string`

### Location
* Location `object`
  * address `string`
  * created `string`
  * email `string`
  * id `integer`
  * label `string`
  * lastUpdate `string`
  * name `string`
  * phone `string`
  * web `string`

### Lookup
* Lookup `object`
  * created `string`
  * description `string`
  * descriptionFriendly `string`
  * displayOrder `integer`
  * id `integer`
  * lastUpdate `string`
  * lookupType [LookupType](#lookuptype)
  * value `string`

### LookupType
* LookupType `object`
  * created `string`
  * description `string`
  * id `integer`
  * lastUpdate `string`
  * type `string` (values: GROUP, MENU, ROLE, CODE_STANDARD, CODE_TYPE, FEATURE_TYPE, RELATIONSHIP_TYPE, IDENTIFIER, CONTACT_POINT_TYPE, STATISTIC_TYPE, NEWS_TYPE, GENDER, IBD_CROHNSLOCATION, IBD_CROHNSPROXIMALTERMINALILEUM, IBD_CROHNSPERIANAL, IBD_CROHNSBEHAVIOUR, IBD_UCEXTENT, IBD_EGIMCOMPLICATION, IBD_SURGERYMAINPROCEDURE, IBD_SMOKINGSTATUS, IBD_FAMILYHISTORY, LINK_TYPE)

### ObservationHeading
* ObservationHeading `object`
  * code `string`
  * created `string`
  * decimalPlaces `integer`
  * defaultPanel `integer`
  * defaultPanelOrder `integer`
  * heading `string`
  * id `integer`
  * infoLink `string`
  * lastUpdate `string`
  * maxGraph `number`
  * minGraph `number`
  * name `string`
  * normalRange `string`
  * observationHeadingGroups `array`
    * items [ObservationHeadingGroup](#observationheadinggroup)
  * units `string`

### ObservationHeadingGroup
* ObservationHeadingGroup `object`
  * created `string`
  * group [Group](#group)
  * id `integer`
  * panel `integer`
  * panelOrder `integer`

### Patient
* Patient `object`
  * diagnosisCodes `array`
    * items [Code](#code)
  * fhirAllergies `array`
    * items [FhirAllergy](#fhirallergy)
  * fhirConditions `array`
    * items [FhirCondition](#fhircondition)
  * fhirEncounters `array`
    * items [FhirEncounter](#fhirencounter)
  * fhirObservations `array`
    * items [FhirObservation](#fhirobservation)
  * fhirPatient [FhirPatient](#fhirpatient)
  * fhirPractitioners `array`
    * items [FhirPractitioner](#fhirpractitioner)
  * group [Group](#group)
  * id `integer`

### PatientManagement
* PatientManagement `object`
  * condition [FhirCondition](#fhircondition)
  * encounters `array`
    * items [FhirEncounter](#fhirencounter)
  * groupCode `string`
  * identifier `string`
  * observations `array`
    * items [FhirObservation](#fhirobservation)
  * patient [FhirPatient](#fhirpatient)
  * practitioners `array`
    * items [FhirPractitioner](#fhirpractitioner)

### Role
* Role `object`
  * description `string`
  * id `integer`
  * name `string` (values: PATIENT, UNIT_ADMIN, STAFF_ADMIN, DISEASE_GROUP_ADMIN, SPECIALTY_ADMIN, GLOBAL_ADMIN, GP_ADMIN, MEMBER, PUBLIC, UNIT_ADMIN_API, IMPORTER)
  * visible `boolean`

### Route
* Route `object`
  * controller `string`
  * created `string`
  * displayOrder `integer`
  * id `integer`
  * lookup [Lookup](#lookup)
  * templateUrl `string`
  * title `string`
  * url `string`

### UUID


### User
* User `object`
  * apiKey [ApiKey](#apikey)
  * canSwitchUser `boolean`
  * changePassword `boolean`
  * contactNumber `string`
  * created `string`
  * currentLogin `string`
  * currentLoginIpAddress `string`
  * dateOfBirth `string`
  * deleted `boolean`
  * dummy `boolean`
  * email `string`
  * emailVerified `boolean`
  * forename `string`
  * groupRoles `array`
    * items [GroupRole](#grouprole)
  * hideSecretWordNotification `boolean`
  * id `integer`
  * identifiers `array`
    * items `object`
  * lastLogin `string`
  * lastLoginIpAddress `string`
  * latestDataReceivedBy [BaseGroup](#basegroup)
  * latestDataReceivedDate `string`
  * locked `boolean`
  * picture `string`
  * roleDescription `string`
  * secretWordIsSet `boolean`
  * surname `string`
  * userFeatures `array`
    * items [UserFeature](#userfeature)
  * username `string`

### UserFeature
* UserFeature `object`
  * created `string`
  * feature [Feature](#feature)
  * id `integer`
  * lastUpdate `string`
  * optInDate `string`
  * optInHidden `boolean`
  * optInStatus `boolean`
  * optOutHidden `boolean`

### UserToken
* UserToken `object`
  * auditActions `array`
    * items `string`
  * checkSecretWord `boolean`
  * created `string`
  * expiration `string`
  * externalStandards `array`
    * items [ExternalStandard](#externalstandard)
  * groupFeatures `array`
    * items [Feature](#feature)
  * groupMessagingEnabled `boolean`
  * mustSetSecretWord `boolean`
  * patientFeatures `array`
    * items [Feature](#feature)
  * patientMessagingFeatureTypes `array`
    * items `string`
  * patientRoles `array`
    * items [Role](#role)
  * routes `array`
    * items [Route](#route)
  * secretWord `string`
  * secretWordChoices `object`
  * secretWordIndexes `array`
    * items `string`
  * secretWordToken `string`
  * securityRoles `array`
    * items [Role](#role)
  * shouldEnterCondition `boolean`
  * staffFeatures `array`
    * items [Feature](#feature)
  * staffRoles `array`
    * items [Role](#role)
  * token `string`
  * user [User](#user)
  * userFeatures `array`
    * items [Feature](#feature)
  * userGroups `array`
    * items [BaseGroup](#basegroup)


