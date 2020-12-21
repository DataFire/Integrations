# @datafire/azure_azsadmin_update

Client library for UpdateAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_update
```
```js
let azure_azsadmin_update = require('@datafire/azure_azsadmin_update').create({
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

The Update Admin Management Client.

## Actions

### Operations_List
Get the list of support rest operations.


```js
azure_azsadmin_update.Operations_List({
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
  * operation `string`: The localized friendly name for the operation, as it should be shown to the user.
  * provider `string`: The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with Microsoft for first-party services. For example, the provider name may be Microsoft Monitoring Insights or Microsoft Compute.
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service.

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.


