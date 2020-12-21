# @datafire/azure_azsadmin_keyvault

Client library for KeyVaultManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_keyvault
```
```js
let azure_azsadmin_keyvault = require('@datafire/azure_azsadmin_keyvault').create({
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

The Admin KeyVault Management Client.

## Actions

### Operations_List
Get the list of support rest operations.


```js
azure_azsadmin_keyvault.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise it will be used in tool tips and detailed views.
  * operation `string`: The localized friendly name for the operation, as it should be shown to the user.
  * provider `string`: The localized friendly form of the resource provider name; it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The localized friendly form of the resource type related to this action/operation; it should match the public documentation for the resource provider.

### Operation
* Operation `object`: Describes the supported rest operation.
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
  * location `string`: Location where resource is location.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.


