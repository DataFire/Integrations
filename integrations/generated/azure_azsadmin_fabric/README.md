# @datafire/azure_azsadmin_fabric

Client library for FabricAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_fabric
```
```js
let azure_azsadmin_fabric = require('@datafire/azure_azsadmin_fabric').create({
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

The Admin Fabric Management Client.

## Actions

### Fabric_ListOperations
Returns the list of support REST operations.


```js
azure_azsadmin_fabric.Fabric_ListOperations({
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
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will be displayed to the user.
  * provider `string`: The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute.".
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service.

### OperationList
* OperationList `object`: A pageable list of supported operations objects.
  * nextLink `string`: URI to next page.
  * value `array`: List of supported operations.
    * items [Operation](#operation)

### ProvisioningState
* ProvisioningState `object`: Provisioning status of the resource.
  * properties [ProvisioningStateProperties](#provisioningstateproperties)

### ProvisioningStateProperties
* ProvisioningStateProperties `object`: Provisioning status of the resource.
  * provisioningState `string`: Provisioning status of the resource.

### Resource
* Resource `object`: Base resource object.
  * id `string`: URI of the resource.
  * location `string`: The region where the resource is located.
  * name `string`: Name of the resource.
  * tags `object`: List of key-value pairs.
  * type `string`: Type of resource.


