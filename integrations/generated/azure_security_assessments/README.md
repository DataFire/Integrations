# @datafire/azure_security_assessments

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_assessments
```
```js
let azure_security_assessments = require('@datafire/azure_security_assessments').create({
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

### Assessments_Delete
Delete a security assessment on your resource. An assessment metadata that describes this assessment must be predefined with the same name before inserting the assessment result


```js
azure_security_assessments.Assessments_Delete({
  "api-version": "",
  "resourceId": "",
  "assessmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * assessmentName **required** `string`: The Assessment Key - Unique key for the assessment type

#### Output
*Output schema unknown*

### Assessments_Get
Get a security assessment on your scanned resource


```js
azure_security_assessments.Assessments_Get({
  "api-version": "",
  "resourceId": "",
  "assessmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * assessmentName **required** `string`: The Assessment Key - Unique key for the assessment type
  * $expand `string` (values: links, metadata): OData expand. Optional.

#### Output
* output [SecurityAssessment](#securityassessment)

### Assessments_CreateOrUpdate
Create a security assessment on your resource. An assessment metadata that describes this assessment must be predefined with the same name before inserting the assessment result


```js
azure_security_assessments.Assessments_CreateOrUpdate({
  "api-version": "",
  "resourceId": "",
  "assessmentName": "",
  "assessment": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * assessmentName **required** `string`: The Assessment Key - Unique key for the assessment type
  * assessment **required** [SecurityAssessment](#securityassessment)

#### Output
* output [SecurityAssessment](#securityassessment)

### Assessments_List
Get security assessments on all your scanned resources inside a scope


```js
azure_security_assessments.Assessments_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [SecurityAssessmentList](#securityassessmentlist)



## Definitions

### AssessmentLinks
* AssessmentLinks `object`: Links relevant to the assessment
  * azurePortalUri `string`: Link to assessment in Azure Portal

### AssessmentStatus
* AssessmentStatus `object`: The result of the assessment
  * cause `string`: Programmatic code for the cause of the assessment status
  * code **required** `string` (values: Healthy, Unhealthy, NotApplicable): Programmatic code for the status of the assessment
  * description `string`: Human readable description of the assessment status

### SecurityAssessment
* SecurityAssessment `object`: Security assessment on a resource
  * properties [SecurityAssessmentProperties](#securityassessmentproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecurityAssessmentList
* SecurityAssessmentList `object`: Page of a security assessments list
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: Collection of security assessments in this page
    * items [SecurityAssessment](#securityassessment)

### SecurityAssessmentPartnerData
* SecurityAssessmentPartnerData `object`: Data regarding 3rd party partner integration
  * secret `string`: secret to authenticate the partner - write only

### SecurityAssessmentProperties
* SecurityAssessmentProperties `object`: Describes properties of an assessment.
  * additionalData `object`: Additional data regarding the assessment
  * displayName `string`: User friendly display name of the assessment
  * links [AssessmentLinks](#assessmentlinks)
  * metadata `object`: Describes properties of an assessment metadata.
    * assessmentType **required** `string` (values: BuiltIn, CustomPolicy, CustomerManaged, VerifiedPartner): BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
    * category `array`
      * items `string` (values: Compute, Networking, Data, IdentityAndAccess, IoT): The category of resource that is at risk when the assessment is unhealthy
    * description `string`: Human readable description of the assessment
    * displayName **required** `string`: User friendly display name of the assessment
    * implementationEffort `string` (values: Low, Moderate, High): The implementation effort required to remediate this assessment
    * partnerData `object`: Describes the partner that created the assessment
      * partnerName `string`: Name of the company of the partner
      * productName `string`: Name of the product of the partner that created the assessment
      * secret `string`: Secret to authenticate the partner and verify it created the assessment - write only
    * policyDefinitionId `string`: Azure resource ID of the policy definition that turns this assessment calculation on
    * preview `boolean`: True if this assessment is in preview release status
    * remediationDescription `string`: Human readable description of what you should do to mitigate this security issue
    * severity **required** `string` (values: Low, Medium, High): The severity level of the assessment
    * threats `array`
      * items `string` (values: accountBreach, dataExfiltration, dataSpillage, maliciousInsider, elevationOfPrivilege, threatResistance, missingCoverage, denialOfService): Threats impact of the assessment
    * userImpact `string` (values: Low, Moderate, High): The user impact of the assessment
  * partnersData [SecurityAssessmentPartnerData](#securityassessmentpartnerdata)
  * resourceDetails **required** `object`: Details of the resource that was assessed
    * source **required** `string` (values: Azure, OnPremise): The platform where the assessed resource resides
  * status **required** [AssessmentStatus](#assessmentstatus)


