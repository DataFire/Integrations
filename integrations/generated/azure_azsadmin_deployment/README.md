# @datafire/azure_azsadmin_deployment

Client library for DeploymentAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_deployment
```
```js
let azure_azsadmin_deployment = require('@datafire/azure_azsadmin_deployment').create({
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

Deployment Admin Client.

## Actions

### Operations_List
Returns the list of supported REST operations.


```js
azure_azsadmin_deployment.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Display
* Display `object`: Contains the localized display information for this particular operation or action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will displayed to the user.
  * provider `string`: The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### ExtendedErrorInfo
* ExtendedErrorInfo `object`: Error information
  * code `string`: Error Code
  * details [ExtendedErrorInfo](#extendederrorinfo)
  * message `string`: Error Message

### JTokenString
* JTokenString `object`: Error information
  * value `string`: Parameters as JToken string

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service.
  * origin `string`: Origin for the operation. Eg. User, System

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Object model of azure resource manager base.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.


