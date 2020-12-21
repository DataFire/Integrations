# @datafire/azure_security_informationprotectionpolicies

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_informationprotectionpolicies
```
```js
let azure_security_informationprotectionpolicies = require('@datafire/azure_security_informationprotectionpolicies').create({
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

### InformationProtectionPolicies_List
Information protection policies of a specific management group.


```js
azure_security_informationprotectionpolicies.InformationProtectionPolicies_List({
  "api-version": "",
  "scope": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

#### Output
* output [InformationProtectionPolicyList](#informationprotectionpolicylist)

### InformationProtectionPolicies_Get
Details of the information protection policy.


```js
azure_security_informationprotectionpolicies.InformationProtectionPolicies_Get({
  "api-version": "",
  "scope": "",
  "informationProtectionPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * informationProtectionPolicyName **required** `string` (values: effective, custom): Name of the information protection policy.

#### Output
* output [InformationProtectionPolicy](#informationprotectionpolicy)

### InformationProtectionPolicies_CreateOrUpdate
Details of the information protection policy.


```js
azure_security_informationprotectionpolicies.InformationProtectionPolicies_CreateOrUpdate({
  "api-version": "",
  "scope": "",
  "informationProtectionPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * scope **required** `string`: Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
  * informationProtectionPolicyName **required** `string` (values: effective, custom): Name of the information protection policy.

#### Output
* output [InformationProtectionPolicy](#informationprotectionpolicy)



## Definitions

### InformationProtectionKeyword
* InformationProtectionKeyword `object`: The information type keyword.
  * canBeNumeric `boolean`: Indicates whether the keyword can be applied on numeric types or not.
  * custom `boolean`: Indicates whether the keyword is custom or not.
  * excluded `boolean`: Indicates whether the keyword is excluded or not.
  * pattern `string`: The keyword pattern.

### InformationProtectionPolicy
* InformationProtectionPolicy `object`: Information protection policy.
  * properties [InformationProtectionPolicyProperties](#informationprotectionpolicyproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### InformationProtectionPolicyList
* InformationProtectionPolicyList `object`: Information protection policies response.
  * nextLink `string`: The URI to fetch the next page.
  * value `array`: List of information protection policies.
    * items [InformationProtectionPolicy](#informationprotectionpolicy)

### InformationProtectionPolicyProperties
* InformationProtectionPolicyProperties `object`: describes properties of an information protection policy.
  * informationTypes `object`: The sensitivity information types.
  * labels `object`: Dictionary of sensitivity labels.
  * lastModifiedUtc `string`: Describes the last UTC time the policy was modified.

### InformationType
* InformationType `object`: The information type.
  * custom `boolean`: Indicates whether the information type is custom or not.
  * displayName `string`: The name of the information type.
  * enabled `boolean`: Indicates whether the information type is enabled or not.
  * keywords `array`: The information type keywords.
    * items [InformationProtectionKeyword](#informationprotectionkeyword)
  * order `number`: The order of the information type.
  * recommendedLabelId `string`: The recommended label id to be associated with this information type.

### SensitivityLabel
* SensitivityLabel `object`: The sensitivity label.
  * displayName `string`: The name of the sensitivity label.
  * enabled `boolean`: Indicates whether the label is enabled or not.
  * order `number`: The order of the sensitivity label.


