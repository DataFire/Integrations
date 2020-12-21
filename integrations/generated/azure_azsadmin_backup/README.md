# @datafire/azure_azsadmin_backup

Client library for BackupManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_backup
```
```js
let azure_azsadmin_backup = require('@datafire/azure_azsadmin_backup').create({
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

The Admin Backup Management Client.

## Actions

### Operations_List
Returns the list of support REST operations.


```js
azure_azsadmin_backup.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will displayed to the user.
  * provider `string`: The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### LongRunningOperationStatus
* LongRunningOperationStatus `object`: Status of a long running operation.
  * code `string`: Operation result code.
  * message `string`: Description of the operation status.

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service.

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.


