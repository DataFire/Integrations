# @datafire/azure_azsadmin_storage

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_storage
```
```js
let azure_azsadmin_storage = require('@datafire/azure_azsadmin_storage').create({
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

The Admin Storage Management Client.

## Actions

### Operations_List
Get the list of support rest operations.


```js
azure_azsadmin_storage.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: REST Api Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views.
  * operation `string`: The localized friendly name for the operation, as it should be shown to the user.
  * provider `string`: The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider.

### ErrorResponse
* ErrorResponse `object`: The error response for request which failed.
  * code `string`: The error description code.
  * details `array`: The error details information.
    * items `string`
  * message `string`: The error description message.
  * target `string`: The error target description.

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service.

### OperationList
* OperationList `object`: Pageable list of supported operations.
  * value `array`: List of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Base resource object.
  * id `string`: Resource ID.
  * location `string`: Resource Location.
  * name `string`: Resource Name.
  * type `string`: Resource Type.


