# @datafire/azure_security_compliances

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_compliances
```
```js
let azure_security_compliances = require('@datafire/azure_security_compliances').create({
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

### Compliances_List
The Compliance scores of the specific management group.


```js
azure_security_compliances.Compliances_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [ComplianceList](#compliancelist)

### Compliances_Get
Details of a specific Compliance.


```js
azure_security_compliances.Compliances_Get({
  "api-version": "",
  "scope": "",
  "complianceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * complianceName **required** `string`: name of the Compliance

#### Output
* output [Compliance](#compliance)



## Definitions

### Compliance
* Compliance `object`: Compliance of a scope
  * properties [ComplianceProperties](#complianceproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ComplianceList
* ComplianceList `object`: List of Compliance objects response
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of Compliance objects
    * items [Compliance](#compliance)

### ComplianceProperties
* ComplianceProperties `object`: The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource.
  * assessmentResult `array`: An array of segment, which is the actually the compliance assessment.
    * items [ComplianceSegment](#compliancesegment)
  * assessmentTimestampUtcDate `string`: The timestamp when the Compliance calculation was conducted.
  * resourceCount `integer`: The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).

### ComplianceSegment
* ComplianceSegment `object`: A segment of a compliance assessment.
  * percentage `number`: The size (%) of the segment.
  * segmentType `string`: The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc.


