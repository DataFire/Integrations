# @datafire/azure_security_regulatorycompliance

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_regulatorycompliance
```
```js
let azure_security_regulatorycompliance = require('@datafire/azure_security_regulatorycompliance').create({
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

### RegulatoryComplianceStandards_List
Supported regulatory compliance standards details and state


```js
azure_security_regulatorycompliance.RegulatoryComplianceStandards_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * $filter `string`: OData filter. Optional.

#### Output
* output [RegulatoryComplianceStandardList](#regulatorycompliancestandardlist)

### RegulatoryComplianceStandards_Get
Supported regulatory compliance details state for selected standard


```js
azure_security_regulatorycompliance.RegulatoryComplianceStandards_Get({
  "api-version": "",
  "subscriptionId": "",
  "regulatoryComplianceStandardName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * regulatoryComplianceStandardName **required** `string`: Name of the regulatory compliance standard object

#### Output
* output [RegulatoryComplianceStandard](#regulatorycompliancestandard)

### RegulatoryComplianceControls_List
All supported regulatory compliance controls details and state for selected standard


```js
azure_security_regulatorycompliance.RegulatoryComplianceControls_List({
  "api-version": "",
  "subscriptionId": "",
  "regulatoryComplianceStandardName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * regulatoryComplianceStandardName **required** `string`: Name of the regulatory compliance standard object
  * $filter `string`: OData filter. Optional.

#### Output
* output [RegulatoryComplianceControlList](#regulatorycompliancecontrollist)

### RegulatoryComplianceControls_Get
Selected regulatory compliance control details and state


```js
azure_security_regulatorycompliance.RegulatoryComplianceControls_Get({
  "api-version": "",
  "subscriptionId": "",
  "regulatoryComplianceStandardName": "",
  "regulatoryComplianceControlName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * regulatoryComplianceStandardName **required** `string`: Name of the regulatory compliance standard object
  * regulatoryComplianceControlName **required** `string`: Name of the regulatory compliance control object

#### Output
* output [RegulatoryComplianceControl](#regulatorycompliancecontrol)

### RegulatoryComplianceAssessments_List
Details and state of assessments mapped to selected regulatory compliance control


```js
azure_security_regulatorycompliance.RegulatoryComplianceAssessments_List({
  "api-version": "",
  "subscriptionId": "",
  "regulatoryComplianceStandardName": "",
  "regulatoryComplianceControlName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * regulatoryComplianceStandardName **required** `string`: Name of the regulatory compliance standard object
  * regulatoryComplianceControlName **required** `string`: Name of the regulatory compliance control object
  * $filter `string`: OData filter. Optional.

#### Output
* output [RegulatoryComplianceAssessmentList](#regulatorycomplianceassessmentlist)

### RegulatoryComplianceAssessments_Get
Supported regulatory compliance details and state for selected assessment


```js
azure_security_regulatorycompliance.RegulatoryComplianceAssessments_Get({
  "api-version": "",
  "subscriptionId": "",
  "regulatoryComplianceStandardName": "",
  "regulatoryComplianceControlName": "",
  "regulatoryComplianceAssessmentName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * regulatoryComplianceStandardName **required** `string`: Name of the regulatory compliance standard object
  * regulatoryComplianceControlName **required** `string`: Name of the regulatory compliance control object
  * regulatoryComplianceAssessmentName **required** `string`: Name of the regulatory compliance assessment object

#### Output
* output [RegulatoryComplianceAssessment](#regulatorycomplianceassessment)



## Definitions

### RegulatoryComplianceAssessment
* RegulatoryComplianceAssessment `object`: Regulatory compliance assessment details and state
  * properties [RegulatoryComplianceAssessmentProperties](#regulatorycomplianceassessmentproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### RegulatoryComplianceAssessmentList
* RegulatoryComplianceAssessmentList `object`: List of regulatory compliance assessment response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`
    * items [RegulatoryComplianceAssessment](#regulatorycomplianceassessment)

### RegulatoryComplianceAssessmentProperties
* RegulatoryComplianceAssessmentProperties `object`: Regulatory compliance assessment data
  * assessmentDetailsLink `string`: Link to more detailed assessment results data. The response type will be according to the assessmentType field
  * assessmentType `string`: The expected type of assessment contained in the AssessmentDetailsLink
  * description `string`: The description of the regulatory compliance assessment
  * failedResources `integer`: The given assessment's related resources count with failed state.
  * passedResources `integer`: The given assessment's related resources count with passed state.
  * skippedResources `integer`: The given assessment's related resources count with skipped state.
  * state `string` (values: Passed, Failed, Skipped, Unsupported): Aggregative state based on the assessment's scanned resources states
  * unsupportedResources `integer`: The given assessment's related resources count with unsupported state.

### RegulatoryComplianceControl
* RegulatoryComplianceControl `object`: Regulatory compliance control details and state
  * properties [RegulatoryComplianceControlProperties](#regulatorycompliancecontrolproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### RegulatoryComplianceControlList
* RegulatoryComplianceControlList `object`: List of regulatory compliance controls response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: List of regulatory compliance controls
    * items [RegulatoryComplianceControl](#regulatorycompliancecontrol)

### RegulatoryComplianceControlProperties
* RegulatoryComplianceControlProperties `object`: Regulatory compliance control data
  * description `string`: The description of the regulatory compliance control
  * failedAssessments `integer`: The number of supported regulatory compliance assessments of the given control with a failed state
  * passedAssessments `integer`: The number of supported regulatory compliance assessments of the given control with a passed state
  * skippedAssessments `integer`: The number of supported regulatory compliance assessments of the given control with a skipped state
  * state `string` (values: Passed, Failed, Skipped, Unsupported): Aggregative state based on the control's supported assessments states

### RegulatoryComplianceStandard
* RegulatoryComplianceStandard `object`: Regulatory compliance standard details and state
  * properties [RegulatoryComplianceStandardProperties](#regulatorycompliancestandardproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### RegulatoryComplianceStandardList
* RegulatoryComplianceStandardList `object`: List of regulatory compliance standards response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`
    * items [RegulatoryComplianceStandard](#regulatorycompliancestandard)

### RegulatoryComplianceStandardProperties
* RegulatoryComplianceStandardProperties `object`: Regulatory compliance standard data
  * failedControls `integer`: The number of supported regulatory compliance controls of the given standard with a failed state
  * passedControls `integer`: The number of supported regulatory compliance controls of the given standard with a passed state
  * skippedControls `integer`: The number of supported regulatory compliance controls of the given standard with a skipped state
  * state `string` (values: Passed, Failed, Skipped, Unsupported): Aggregative state based on the standard's supported controls states
  * unsupportedControls `integer`: The number of regulatory compliance controls of the given standard which are unsupported by automated assessments


