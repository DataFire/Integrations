# @datafire/azure_security_complianceresults

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_complianceresults
```
```js
let azure_security_complianceresults = require('@datafire/azure_security_complianceresults').create({
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

### ComplianceResults_Get
Security Compliance Result


```js
azure_security_complianceresults.ComplianceResults_Get({
  "api-version": "",
  "resourceId": "",
  "complianceResultName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * resourceId **required** `string`: The identifier of the resource.
  * complianceResultName **required** `string`: name of the desired assessment compliance result

#### Output
* output [ComplianceResult](#complianceresult)

### ComplianceResults_List
Security compliance results in the subscription


```js
azure_security_complianceresults.ComplianceResults_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [ComplianceResultList](#complianceresultlist)



## Definitions

### ComplianceResult
* ComplianceResult `object`: a compliance result
  * properties [ComplianceResultProperties](#complianceresultproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ComplianceResultList
* ComplianceResultList `object`: List of compliance results response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: List of compliance results
    * items [ComplianceResult](#complianceresult)

### ComplianceResultProperties
* ComplianceResultProperties `object`: Compliance result data
  * resourceStatus `string` (values: Healthy, NotApplicable, OffByPolicy, NotHealthy): The status of the resource regarding a single assessment


