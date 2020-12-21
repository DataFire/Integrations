# @datafire/azure_policyinsights_policymetadata

Client library for PolicyMetadataClient

## Installation and Usage
```bash
npm install --save @datafire/azure_policyinsights_policymetadata
```
```js
let azure_policyinsights_policymetadata = require('@datafire/azure_policyinsights_policymetadata').create({
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



## Actions

### PolicyMetadata_List
Get a list of the policy metadata resources.


```js
azure_policyinsights_policymetadata.PolicyMetadata_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * $top `integer`: Maximum number of records to return.

#### Output
* output [PolicyMetadataCollection](#policymetadatacollection)

### PolicyMetadata_GetResource
Get policy metadata resource.


```js
azure_policyinsights_policymetadata.PolicyMetadata_GetResource({
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: The name of the policy metadata resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [PolicyMetadata](#policymetadata)



## Definitions

### ErrorDefinition
* ErrorDefinition `object`: Error definition.
  * additionalInfo `array`: Additional scenario specific error details.
    * items [TypedErrorInfo](#typederrorinfo)
  * code `string`: Service specific error code which serves as the substatus for the HTTP error code.
  * details `array`: Internal error details.
    * items [ErrorDefinition](#errordefinition)
  * message `string`: Description of the error.
  * target `string`: The target of the error.

### ErrorResponse
* ErrorResponse `object`: Error response.
  * error [ErrorDefinition](#errordefinition)

### PolicyMetadata
* PolicyMetadata `object`: Policy metadata resource definition.
  * id `string`: The ID of the policy metadata.
  * name `string`: The name of the policy metadata.
  * properties [PolicyMetadataProperties](#policymetadataproperties)
  * type `string`: The type of the policy metadata.

### PolicyMetadataCollection
* PolicyMetadataCollection `object`: Collection of policy metadata resources.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: Array of policy metadata definitions.
    * items [SlimPolicyMetadata](#slimpolicymetadata)

### PolicyMetadataProperties
* PolicyMetadataProperties `object`: The properties of the policy metadata.
  * description `string`: The description of the policy metadata.
  * requirements `string`: The requirements of the policy metadata.
  * additionalContentUrl `string`: Url for getting additional content about the resource metadata.
  * category `string`: The category of the policy metadata.
  * metadata `object`: Additional metadata.
  * metadataId `string`: The policy metadata identifier.
  * owner `string`: The owner of the policy metadata.
  * title `string`: The title of the policy metadata.

### PolicyMetadataSlimProperties
* PolicyMetadataSlimProperties `object`: The properties of the policy metadata, excluding properties containing large strings
  * additionalContentUrl `string`: Url for getting additional content about the resource metadata.
  * category `string`: The category of the policy metadata.
  * metadata `object`: Additional metadata.
  * metadataId `string`: The policy metadata identifier.
  * owner `string`: The owner of the policy metadata.
  * title `string`: The title of the policy metadata.

### SlimPolicyMetadata
* SlimPolicyMetadata `object`: Slim version of policy metadata resource definition, excluding properties with large strings
  * id `string`: The ID of the policy metadata.
  * name `string`: The name of the policy metadata.
  * properties [PolicyMetadataSlimProperties](#policymetadataslimproperties)
  * type `string`: The type of the policy metadata.

### TypedErrorInfo
* TypedErrorInfo `object`: Scenario specific error details.
  * type `string`: The type of included error details.


