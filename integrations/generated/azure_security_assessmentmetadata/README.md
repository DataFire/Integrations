# @datafire/azure_security_assessmentmetadata

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_assessmentmetadata
```
```js
let azure_security_assessmentmetadata = require('@datafire/azure_security_assessmentmetadata').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### AssessmentsMetadata_List
Get metadata information on all assessment types


```js
azure_security_assessmentmetadata.AssessmentsMetadata_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation

#### Output
* output [SecurityAssessmentMetadataList](#securityassessmentmetadatalist)

### AssessmentsMetadata_Get
Get metadata information on an assessment type


```js
azure_security_assessmentmetadata.AssessmentsMetadata_Get({
  "api-version": "",
  "assessmentMetadataName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * assessmentMetadataName **required** `string`: The Assessment Key - Unique key for the assessment type

#### Output
* output [SecurityAssessmentMetadata](#securityassessmentmetadata)

### AssessmentsMetadataSubscription_List
Get metadata information on all assessment types in a specific subscription


```js
azure_security_assessmentmetadata.AssessmentsMetadataSubscription_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [SecurityAssessmentMetadataList](#securityassessmentmetadatalist)

### AssessmentsMetadataSubscription_Delete
Delete metadata information on an assessment type in a specific subscription, will cause the deletion of all the assessments of that type in that subscription


```js
azure_security_assessmentmetadata.AssessmentsMetadataSubscription_Delete({
  "api-version": "",
  "assessmentMetadataName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * assessmentMetadataName **required** `string`: The Assessment Key - Unique key for the assessment type
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
*Output schema unknown*

### AssessmentsMetadataSubscription_Get
Get metadata information on an assessment type in a specific subscription


```js
azure_security_assessmentmetadata.AssessmentsMetadataSubscription_Get({
  "api-version": "",
  "assessmentMetadataName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * assessmentMetadataName **required** `string`: The Assessment Key - Unique key for the assessment type
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [SecurityAssessmentMetadata](#securityassessmentmetadata)

### AssessmentsMetadataSubscription_Create
Create metadata information on an assessment type in a specific subscription


```js
azure_security_assessmentmetadata.AssessmentsMetadataSubscription_Create({
  "api-version": "",
  "assessmentMetadataName": "",
  "subscriptionId": "",
  "assessmentMetadata": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * assessmentMetadataName **required** `string`: The Assessment Key - Unique key for the assessment type
  * subscriptionId **required** `string`: Azure subscription ID
  * assessmentMetadata **required** [SecurityAssessmentMetadata](#securityassessmentmetadata)

#### Output
* output [SecurityAssessmentMetadata](#securityassessmentmetadata)



## Definitions

### SecurityAssessmentMetadata
* SecurityAssessmentMetadata `object`: Security assessment metadata
  * properties [SecurityAssessmentMetadataProperties](#securityassessmentmetadataproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecurityAssessmentMetadataList
* SecurityAssessmentMetadataList `object`: List of security assessment metadata
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [SecurityAssessmentMetadata](#securityassessmentmetadata)

### SecurityAssessmentMetadataPartnerData
* SecurityAssessmentMetadataPartnerData `object`: Describes the partner that created the assessment
  * partnerName `string`: Name of the company of the partner
  * productName `string`: Name of the product of the partner that created the assessment
  * secret `string`: Secret to authenticate the partner and verify it created the assessment - write only

### SecurityAssessmentMetadataProperties
* SecurityAssessmentMetadataProperties `object`: Describes properties of an assessment metadata.
  * assessmentType **required** `string` (values: BuiltIn, CustomPolicy, CustomerManaged, VerifiedPartner): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
  * category `array`
    * items `string` (values: Compute, Networking, Data, IdentityAndAccess, IoT): The category of resource that is at risk when the assessment is unhealthy
  * description `string`: Human readable description of the assessment
  * displayName **required** `string`: User friendly display name of the assessment
  * implementationEffort `string` (values: Low, Moderate, High): The implementation effort required to remediate this assessment
  * partnerData [SecurityAssessmentMetadataPartnerData](#securityassessmentmetadatapartnerdata)
  * policyDefinitionId `string`: Azure resource ID of the policy definition that turns this assessment calculation on
  * preview `boolean`: True if this assessment is in preview release status
  * remediationDescription `string`: Human readable description of what you should do to mitigate this security issue
  * severity **required** `string` (values: Low, Medium, High): The severity level of the assessment
  * threats `array`
    * items `string` (values: accountBreach, dataExfiltration, dataSpillage, maliciousInsider, elevationOfPrivilege, threatResistance, missingCoverage, denialOfService): Threats impact of the assessment
  * userImpact `string` (values: Low, Moderate, High): The user impact of the assessment


