# @datafire/azure_security_subassessments

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_subassessments
```
```js
let azure_security_subassessments = require('@datafire/azure_security_subassessments').create({
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

### SubAssessments_List
Get security sub-assessments on all your scanned resources inside a scope


```js
azure_security_subassessments.SubAssessments_List({
  "api-version": "",
  "scope": "",
  "assessmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * assessmentName **required** `string`: The Assessment Key - Unique key for the assessment type

#### Output
* output [SecuritySubAssessmentList](#securitysubassessmentlist)

### SubAssessments_Get
Get a security sub-assessment on your scanned resource


```js
azure_security_subassessments.SubAssessments_Get({
  "api-version": "",
  "scope": "",
  "assessmentName": "",
  "subAssessmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * assessmentName **required** `string`: The Assessment Key - Unique key for the assessment type
  * subAssessmentName **required** `string`: The Sub-Assessment Key - Unique key for the sub-assessment type

#### Output
* output [SecuritySubAssessment](#securitysubassessment)

### SubAssessments_ListAll
Get security sub-assessments on all your scanned resources inside a subscription scope


```js
azure_security_subassessments.SubAssessments_ListAll({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [SecuritySubAssessmentList](#securitysubassessmentlist)



## Definitions

### AdditionalData
* AdditionalData `object`: Details of the sub-assessment
  * assessedResourceType **required** `string` (values: SqlServerVulnerability, ContainerRegistryVulnerability, ServerVulnerability): Sub-assessment resource type

### CVE
* CVE `object`: CVE details
  * link `string`: Link url
  * title `string`: CVE title

### CVSS
* CVSS `object`: CVSS details
  * base `number`: CVSS base

### ContainerRegistryVulnerabilityProperties
* ContainerRegistryVulnerabilityProperties `object`: Additional context fields for container registry Vulnerability assessment
  * cve `array`: List of CVEs
    * items [CVE](#cve)
  * cvss `object`: Dictionary from cvss version to cvss details object
  * imageDigest `string`: Digest of the vulnerable image
  * patchable `boolean`: Indicates whether a patch is available or not
  * publishedTime `string`: Published time
  * repositoryName `string`: Name of the repository which the vulnerable image belongs to
  * type `string`: Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered, Vulnerability
  * vendorReferences `array`
    * items [VendorReference](#vendorreference)
  * assessedResourceType **required** `string` (values: SqlServerVulnerability, ContainerRegistryVulnerability, ServerVulnerability): Sub-assessment resource type

### SecuritySubAssessment
* SecuritySubAssessment `object`: Security sub-assessment on a resource
  * properties [SecuritySubAssessmentProperties](#securitysubassessmentproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### SecuritySubAssessmentList
* SecuritySubAssessmentList `object`: List of security sub-assessments
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [SecuritySubAssessment](#securitysubassessment)

### SecuritySubAssessmentProperties
* SecuritySubAssessmentProperties `object`: Describes properties of an sub-assessment.
  * additionalData [AdditionalData](#additionaldata)
  * category `string`: Category of the sub-assessment
  * description `string`: Human readable description of the assessment status
  * displayName `string`: User friendly display name of the sub-assessment
  * id `string`: Vulnerability ID
  * impact `string`: Description of the impact of this sub-assessment
  * remediation `string`: Information on how to remediate this sub-assessment
  * resourceDetails `object`: Details of the resource that was assessed
    * source **required** `string` (values: Azure, OnPremise): The platform where the assessed resource resides
  * status [SubAssessmentStatus](#subassessmentstatus)
  * timeGenerated `string`: The date and time the sub-assessment was generated

### ServerVulnerabilityProperties
* ServerVulnerabilityProperties `object`: Additional context fields for server vulnerability assessment
  * cve `array`: List of CVEs
    * items [CVE](#cve)
  * cvss `object`: Dictionary from cvss version to cvss details object
  * patchable `boolean`: Indicates whether a patch is available or not
  * publishedTime `string`: Published time
  * threat `string`: Threat name
  * type `string`: Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered
  * vendorReferences `array`
    * items [VendorReference](#vendorreference)
  * assessedResourceType **required** `string` (values: SqlServerVulnerability, ContainerRegistryVulnerability, ServerVulnerability): Sub-assessment resource type

### SqlServerVulnerabilityProperties
* SqlServerVulnerabilityProperties `object`: Details of the resource that was assessed
  * query `string`: The T-SQL query that runs on your SQL database to perform the particular check
  * type `string`: The resource type the sub assessment refers to in its resource details
  * assessedResourceType **required** `string` (values: SqlServerVulnerability, ContainerRegistryVulnerability, ServerVulnerability): Sub-assessment resource type

### SubAssessmentStatus
* SubAssessmentStatus `object`: Status of the sub-assessment
  * cause `string`: Programmatic code for the cause of the assessment status
  * code `string` (values: Healthy, Unhealthy, NotApplicable): Programmatic code for the status of the assessment
  * description `string`: Human readable description of the assessment status
  * severity `string` (values: Low, Medium, High): The sub-assessment severity level

### VendorReference
* VendorReference `object`: Vendor reference
  * link `string`: Link url
  * title `string`: Link title


