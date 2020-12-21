# @datafire/azure_sql_managedinstances

Client library for SqlManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_managedinstances
```
```js
let azure_sql_managedinstances = require('@datafire/azure_sql_managedinstances').create({
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

The Azure SQL Database management API provides a RESTful set of web APIs that interact with Azure SQL Database services to manage your databases. The API enables users to create, retrieve, update, and delete databases, servers, and other entities.

## Actions

### ManagedInstances_List
Gets a list of all managed instances in the subscription.


```js
azure_sql_managedinstances.ManagedInstances_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceListResult](#managedinstancelistresult)

### ManagedInstances_ListByInstancePool
Gets a list of all managed instances in an instance pool.


```js
azure_sql_managedinstances.ManagedInstances_ListByInstancePool({
  "resourceGroupName": "",
  "instancePoolName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * instancePoolName **required** `string`: The instance pool name.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceListResult](#managedinstancelistresult)

### ManagedInstances_ListByResourceGroup
Gets a list of managed instances in a resource group.


```js
azure_sql_managedinstances.ManagedInstances_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstanceListResult](#managedinstancelistresult)

### ManagedInstances_Delete
Deletes a managed instance.


```js
azure_sql_managedinstances.ManagedInstances_Delete({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
*Output schema unknown*

### ManagedInstances_Get
Gets a managed instance.


```js
azure_sql_managedinstances.ManagedInstances_Get({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstance](#managedinstance)

### ManagedInstances_Update
Updates a managed instance.


```js
azure_sql_managedinstances.ManagedInstances_Update({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "parameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * parameters **required** [ManagedInstanceUpdate](#managedinstanceupdate)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstance](#managedinstance)

### ManagedInstances_CreateOrUpdate
Creates or updates a managed instance.


```js
azure_sql_managedinstances.ManagedInstances_CreateOrUpdate({
  "resourceGroupName": "",
  "managedInstanceName": "",
  "parameters": {
    "location": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * managedInstanceName **required** `string`: The name of the managed instance.
  * parameters **required** [ManagedInstance](#managedinstance)
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * api-version **required** `string`: The API version to use for the request.

#### Output
* output [ManagedInstance](#managedinstance)



## Definitions

### ManagedInstance
* ManagedInstance `object`: An Azure SQL managed instance.
  * identity `object`: Azure Active Directory identity configuration for a resource.
    * principalId `string`: The Azure Active Directory principal id.
    * tenantId `string`: The Azure Active Directory tenant id.
    * type `string` (values: SystemAssigned): The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
  * properties [ManagedInstanceProperties](#managedinstanceproperties)
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedInstanceListResult
* ManagedInstanceListResult `object`: A list of managed instances.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: Array of results.
    * items [ManagedInstance](#managedinstance)

### ManagedInstanceProperties
* ManagedInstanceProperties `object`: The properties of a managed instance.
  * administratorLogin `string`: Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
  * administratorLoginPassword `string`: The administrator login password (required for managed instance creation).
  * collation `string`: Collation of the managed instance.
  * dnsZone `string`: The Dns Zone that the managed instance is in.
  * dnsZonePartner `string`: The resource id of another managed instance whose DNS zone this managed instance will share after creation.
  * fullyQualifiedDomainName `string`: The fully qualified domain name of the managed instance.
  * instancePoolId `string`: The Id of the instance pool this managed server belongs to.
  * licenseType `string` (values: LicenseIncluded, BasePrice): The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
  * managedInstanceCreateMode `string` (values: Default, PointInTimeRestore): Specifies the mode of database creation.
  * proxyOverride `string` (values: Proxy, Redirect, Default): Connection type used for connecting to the instance.
  * publicDataEndpointEnabled `boolean`: Whether or not the public data endpoint is enabled.
  * restorePointInTime `string`: Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
  * sourceManagedInstanceId `string`: The resource identifier of the source managed instance associated with create operation of this instance.
  * state `string`: The state of the managed instance.
  * storageSizeInGB `integer`: Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
  * subnetId `string`: Subnet resource ID for the managed instance.
  * timezoneId `string`: Id of the timezone. Allowed values are timezones supported by Windows.
  * vCores `integer`: The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.

### ManagedInstanceUpdate
* ManagedInstanceUpdate `object`: An update request for an Azure SQL Database managed instance.
  * properties [ManagedInstanceProperties](#managedinstanceproperties)
  * sku `object`: An ARM Resource SKU.
    * capacity `integer`: Capacity of the particular SKU.
    * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here.
    * name **required** `string`: The name of the SKU, typically, a letter + Number code, e.g. P3.
    * size `string`: Size of the particular SKU
    * tier `string`: The tier or edition of the particular SKU, e.g. Basic, Premium.
  * tags `object`: Resource tags.


