# @datafire/azure_edgegateway

Client library for DataBoxEdgeManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_edgegateway
```
```js
let azure_edgegateway = require('@datafire/azure_edgegateway').create({
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

### Operations_List
List all the supported operations.


```js
azure_edgegateway.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version.

#### Output
* output [OperationsList](#operationslist)

### Devices_ListBySubscription
Gets all the data box edge/gateway devices in a subscription.


```js
azure_edgegateway.Devices_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: The API version.
  * $expand `string`: Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=<token> to populate the next page in the list.

#### Output
* output [DataBoxEdgeDeviceList](#databoxedgedevicelist)

### Devices_ListByResourceGroup
Gets all the data box edge/gateway devices in a resource group.


```js
azure_edgegateway.Devices_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.
  * $expand `string`: Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=<token> to populate the next page in the list.

#### Output
* output [DataBoxEdgeDeviceList](#databoxedgedevicelist)

### Devices_Delete
Deletes the data box edge/gateway device.


```js
azure_edgegateway.Devices_Delete({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Devices_Get
Gets the properties of the data box edge/gateway device.


```js
azure_edgegateway.Devices_Get({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [DataBoxEdgeDevice](#databoxedgedevice)

### Devices_Update
Modifies a Data Box Edge/Gateway resource.


```js
azure_edgegateway.Devices_Update({
  "deviceName": "",
  "parameters": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * parameters **required** [DataBoxEdgeDevicePatch](#databoxedgedevicepatch)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [DataBoxEdgeDevice](#databoxedgedevice)

### Devices_CreateOrUpdate
Creates or updates a Data Box Edge/Gateway resource.


```js
azure_edgegateway.Devices_CreateOrUpdate({
  "deviceName": "",
  "DataBoxEdgeDevice": {
    "location": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * DataBoxEdgeDevice **required** [DataBoxEdgeDevice](#databoxedgedevice)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [DataBoxEdgeDevice](#databoxedgedevice)

### Alerts_ListByDataBoxEdgeDevice
Gets all the alerts for a data box edge/gateway device.


```js
azure_edgegateway.Alerts_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [AlertList](#alertlist)

### Alerts_Get
Gets an alert by name.


```js
azure_edgegateway.Alerts_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The alert name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Alert](#alert)

### BandwidthSchedules_ListByDataBoxEdgeDevice
Gets all the bandwidth schedules for a data box edge/gateway device.


```js
azure_edgegateway.BandwidthSchedules_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [BandwidthSchedulesList](#bandwidthscheduleslist)

### BandwidthSchedules_Delete
Deletes the specified bandwidth schedule.


```js
azure_edgegateway.BandwidthSchedules_Delete({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The bandwidth schedule name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### BandwidthSchedules_Get
Gets the properties of the specified bandwidth schedule.


```js
azure_edgegateway.BandwidthSchedules_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The bandwidth schedule name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [BandwidthSchedule](#bandwidthschedule)

### BandwidthSchedules_CreateOrUpdate
Creates or updates a bandwidth schedule.


```js
azure_edgegateway.BandwidthSchedules_CreateOrUpdate({
  "deviceName": "",
  "name": "",
  "parameters": {
    "properties": {
      "start": "",
      "stop": "",
      "rateInMbps": 0,
      "days": []
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The bandwidth schedule name which needs to be added/updated.
  * parameters **required** [BandwidthSchedule](#bandwidthschedule)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [BandwidthSchedule](#bandwidthschedule)

### Devices_DownloadUpdates
Downloads the updates on a data box edge/gateway device.


```js
azure_edgegateway.Devices_DownloadUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Devices_GetExtendedInformation
Gets additional information for the specified data box edge/gateway device.


```js
azure_edgegateway.Devices_GetExtendedInformation({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [DataBoxEdgeDeviceExtendedInfo](#databoxedgedeviceextendedinfo)

### Devices_InstallUpdates
Installs the updates on the data box edge/gateway device.


```js
azure_edgegateway.Devices_InstallUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Jobs_Get
Gets the details of a specified job on a data box edge/gateway device.


```js
azure_edgegateway.Jobs_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The job name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Job](#job)

### Devices_GetNetworkSettings
Gets the network settings of the specified data box edge/gateway device.


```js
azure_edgegateway.Devices_GetNetworkSettings({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [NetworkSettings](#networksettings)

### OperationsStatus_Get
Gets the details of a specified job on a data box edge/gateway device.


```js
azure_edgegateway.OperationsStatus_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The job name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Job](#job)

### Orders_ListByDataBoxEdgeDevice
Lists all the orders related to a data box edge/gateway device.


```js
azure_edgegateway.Orders_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [OrderList](#orderlist)

### Orders_Delete
Deletes the order related to the device.


```js
azure_edgegateway.Orders_Delete({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Orders_Get
Gets a specific order by name.


```js
azure_edgegateway.Orders_Get({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Order](#order)

### Orders_CreateOrUpdate
Creates or updates an order.


```js
azure_edgegateway.Orders_CreateOrUpdate({
  "deviceName": "",
  "order": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * order **required** [Order](#order)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Order](#order)

### Roles_ListByDataBoxEdgeDevice
Lists all the roles configured in a data box edge/gateway device.


```js
azure_edgegateway.Roles_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [RoleList](#rolelist)

### Roles_Delete
Deletes the role on the data box edge device.


```js
azure_edgegateway.Roles_Delete({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The role name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Roles_Get
Gets a specific role by name.


```js
azure_edgegateway.Roles_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The role name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Role](#role)

### Roles_CreateOrUpdate
Create or update a role.


```js
azure_edgegateway.Roles_CreateOrUpdate({
  "deviceName": "",
  "name": "",
  "role": {
    "kind": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The role name.
  * role **required** [Role](#role)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Role](#role)

### Devices_ScanForUpdates
Scans for updates on a data box edge/gateway device.


```js
azure_edgegateway.Devices_ScanForUpdates({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Devices_CreateOrUpdateSecuritySettings
Updates the security settings on a data box edge/gateway device.


```js
azure_edgegateway.Devices_CreateOrUpdateSecuritySettings({
  "deviceName": "",
  "securitySettings": {
    "properties": {
      "deviceAdminPassword": {
        "value": "",
        "encryptionAlgorithm": ""
      }
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * securitySettings **required** [SecuritySettings](#securitysettings)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Shares_ListByDataBoxEdgeDevice
Lists all the shares in a data box edge/gateway device.


```js
azure_edgegateway.Shares_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [ShareList](#sharelist)

### Shares_Delete
Deletes the share on the data box edge/gateway device.


```js
azure_edgegateway.Shares_Delete({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The share name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Shares_Get
Gets a share by name.


```js
azure_edgegateway.Shares_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The share name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Share](#share)

### Shares_CreateOrUpdate
Creates a new share or updates an existing share on the device.


```js
azure_edgegateway.Shares_CreateOrUpdate({
  "deviceName": "",
  "name": "",
  "share": {
    "properties": {
      "shareStatus": "",
      "monitoringStatus": "",
      "accessProtocol": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The share name.
  * share **required** [Share](#share)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Share](#share)

### Shares_Refresh
Refreshes the share metadata with the data from the cloud.


```js
azure_edgegateway.Shares_Refresh({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The share name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### StorageAccountCredentials_ListByDataBoxEdgeDevice
Gets all the storage account credentials in a data box edge/gateway device.


```js
azure_edgegateway.StorageAccountCredentials_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [StorageAccountCredentialList](#storageaccountcredentiallist)

### StorageAccountCredentials_Delete
Deletes the storage account credential.


```js
azure_edgegateway.StorageAccountCredentials_Delete({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The storage account credential name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### StorageAccountCredentials_Get
Gets the properties of the specified storage account credential.


```js
azure_edgegateway.StorageAccountCredentials_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The storage account credential name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [StorageAccountCredential](#storageaccountcredential)

### StorageAccountCredentials_CreateOrUpdate
Creates or updates the storage account credential.


```js
azure_edgegateway.StorageAccountCredentials_CreateOrUpdate({
  "deviceName": "",
  "name": "",
  "storageAccountCredential": {
    "properties": {
      "alias": "",
      "sslStatus": "",
      "accountType": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The storage account credential name.
  * storageAccountCredential **required** [StorageAccountCredential](#storageaccountcredential)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [StorageAccountCredential](#storageaccountcredential)

### Triggers_ListByDataBoxEdgeDevice
Lists all the triggers configured in the device.


```js
azure_edgegateway.Triggers_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.
  * $expand `string`: Specify $filter='CustomContextTag eq <tag>' to filter on custom context tag property

#### Output
* output [TriggerList](#triggerlist)

### Triggers_Delete
Deletes the trigger on the gateway device.


```js
azure_edgegateway.Triggers_Delete({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The trigger name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Triggers_Get
Get a specific trigger by name.


```js
azure_edgegateway.Triggers_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The trigger name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Trigger](#trigger)

### Triggers_CreateOrUpdate
Creates or updates a trigger.


```js
azure_edgegateway.Triggers_CreateOrUpdate({
  "deviceName": "",
  "name": "",
  "trigger": {
    "kind": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: Creates or updates a trigger
  * name **required** `string`: The trigger name.
  * trigger **required** [Trigger](#trigger)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [Trigger](#trigger)

### Devices_GetUpdateSummary
Gets information about the availability of updates based on the last scan of the device. It also gets information about any ongoing download or install jobs on the device.


```js
azure_edgegateway.Devices_GetUpdateSummary({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [UpdateSummary](#updatesummary)

### Devices_UploadCertificate
Uploads registration certificate for the device.


```js
azure_edgegateway.Devices_UploadCertificate({
  "deviceName": "",
  "parameters": {
    "properties": {
      "certificate": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * parameters **required** [UploadCertificateRequest](#uploadcertificaterequest)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [UploadCertificateResponse](#uploadcertificateresponse)

### Users_ListByDataBoxEdgeDevice
Gets all the users registered on a data box edge/gateway device.


```js
azure_edgegateway.Users_ListByDataBoxEdgeDevice({
  "deviceName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [UserList](#userlist)

### Users_Delete
Deletes the user on a databox edge/gateway device.


```js
azure_edgegateway.Users_Delete({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The user name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Users_Get
Gets the properties of the specified user.


```js
azure_edgegateway.Users_Get({
  "deviceName": "",
  "name": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The user name.
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [User](#user)

### Users_CreateOrUpdate
Creates a new user or updates an existing user's information on a data box edge/gateway device.


```js
azure_edgegateway.Users_CreateOrUpdate({
  "deviceName": "",
  "name": "",
  "user": {
    "properties": {}
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deviceName **required** `string`: The device name.
  * name **required** `string`: The user name.
  * user **required** [User](#user)
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [User](#user)



## Definitions

### ARMBaseModel
* ARMBaseModel `object`: Represents the base class for all object models.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### Address
* Address `object`: The shipping address of the customer.
  * addressLine1 **required** `string`: The address line1.
  * addressLine2 `string`: The address line2.
  * addressLine3 `string`: The address line3.
  * city **required** `string`: The city name.
  * country **required** `string`: The country name.
  * postalCode **required** `string`: The postal code.
  * state **required** `string`: The state name.

### Alert
* Alert `object`: Alert on the data box edge/gateway device.
  * properties [AlertProperties](#alertproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### AlertErrorDetails
* AlertErrorDetails `object`: Error details for the alert.
  * errorCode `string`: Error code.
  * errorMessage `string`: Error Message.
  * occurrences `integer`: Number of occurrences.

### AlertList
* AlertList `object`: Collection of alerts.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The value.
    * items [Alert](#alert)

### AlertProperties
* AlertProperties `object`: Properties of alert.
  * alertType `string`: Alert type.
  * appearedAtDateTime `string`: UTC time when the alert appeared.
  * detailedInformation `object`: Alert details.
  * errorDetails [AlertErrorDetails](#alerterrordetails)
  * recommendation `string`: Alert recommendation.
  * severity `string` (values: Informational, Warning, Critical): Severity of the alert.
  * title `string`: Alert title.

### AsymmetricEncryptedSecret
* AsymmetricEncryptedSecret `object`: Represent the secrets intended for encryption with asymmetric key pair.
  * encryptionAlgorithm **required** `string` (values: None, AES256, RSAES_PKCS1_v_1_5): The algorithm used to encrypt "Value".
  * encryptionCertThumbprint `string`: Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
  * value **required** `string`: The value of the secret.

### Authentication
* Authentication `object`: Authentication mechanism for IoT devices.
  * symmetricKey [SymmetricKey](#symmetrickey)

### AzureContainerInfo
* AzureContainerInfo `object`: Azure container mapping of the endpoint.
  * containerName **required** `string`: Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
  * dataFormat **required** `string` (values: BlockBlob, PageBlob, AzureFile): Storage format used for the file represented by the share.
  * storageAccountCredentialId **required** `string`: ID of the storage account credential used to access storage.

### BandwidthSchedule
* BandwidthSchedule `object`: The bandwidth schedule details.
  * properties **required** [BandwidthScheduleProperties](#bandwidthscheduleproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### BandwidthScheduleProperties
* BandwidthScheduleProperties `object`: The properties of the bandwidth schedule.
  * days **required** `array`: The days of the week when this schedule is applicable.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * rateInMbps **required** `integer`: The bandwidth rate in Mbps.
  * start **required** `string`: The start time of the schedule in UTC.
  * stop **required** `string`: The stop time of the schedule in UTC.

### BandwidthSchedulesList
* BandwidthSchedulesList `object`: The collection of bandwidth schedules.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The list of bandwidth schedules.
    * items [BandwidthSchedule](#bandwidthschedule)

### ClientAccessRight
* ClientAccessRight `object`: The mapping between a particular client IP and the type of access client has on the NFS share.
  * accessPermission **required** `string` (values: NoAccess, ReadOnly, ReadWrite): Type of access to be allowed for the client.
  * client **required** `string`: IP of the client.

### CloudError
* CloudError `object`: An error response from the service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.

### ContactDetails
* ContactDetails `object`: Contains all the contact details of the customer.
  * companyName **required** `string`: The name of the company.
  * contactPerson **required** `string`: The contact person name.
  * emailList **required** `array`: The email list.
    * items `string`
  * phone **required** `string`: The phone number.

### DataBoxEdgeDevice
* DataBoxEdgeDevice `object`: The Data Box Edge/Gateway device.
  * etag `string`: The etag for the devices.
  * location **required** `string`: The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
  * properties [DataBoxEdgeDeviceProperties](#databoxedgedeviceproperties)
  * sku [Sku](#sku)
  * tags `object`: The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### DataBoxEdgeDeviceExtendedInfo
* DataBoxEdgeDeviceExtendedInfo `object`: The extended Info of the Data Box Edge/Gateway device.
  * properties [DataBoxEdgeDeviceExtendedInfoProperties](#databoxedgedeviceextendedinfoproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### DataBoxEdgeDeviceExtendedInfoProperties
* DataBoxEdgeDeviceExtendedInfoProperties `object`: The properties of the Data Box Edge/Gateway device extended info.
  * encryptionKey `string`: The public part of the encryption certificate. Client uses this to encrypt any secret.
  * encryptionKeyThumbprint `string`: The digital signature of encrypted certificate.
  * resourceKey `string`: The Resource ID of the Resource.

### DataBoxEdgeDeviceList
* DataBoxEdgeDeviceList `object`: The collection of Data Box Edge/Gateway devices.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The list of Data Box Edge/Gateway devices.
    * items [DataBoxEdgeDevice](#databoxedgedevice)

### DataBoxEdgeDevicePatch
* DataBoxEdgeDevicePatch `object`: The Data Box Edge/Gateway device patch.
  * tags `object`: The tags attached to the Data Box Edge/Gateway resource.

### DataBoxEdgeDeviceProperties
* DataBoxEdgeDeviceProperties `object`: The properties of the Data Box Edge/Gateway device.
  * configuredRoleTypes `array`: Type of compute roles configured.
    * items `string` (values: IOT, ASA, Functions, Cognitive)
  * culture `string`: The Data Box Edge/Gateway device culture.
  * dataBoxEdgeDeviceStatus `string` (values: ReadyToSetup, Online, Offline, NeedsAttention, Disconnected, PartiallyDisconnected): The status of the Data Box Edge/Gateway device.
  * description `string`: The Description of the Data Box Edge/Gateway device.
  * deviceHcsVersion `string`: The device software version number of the device (eg: 1.2.18105.6).
  * deviceLocalCapacity `integer`: The Data Box Edge/Gateway device local capacity in MB.
  * deviceModel `string`: The Data Box Edge/Gateway device model.
  * deviceSoftwareVersion `string`: The Data Box Edge/Gateway device software version.
  * deviceType `string` (values: DataBoxEdgeDevice): The type of the Data Box Edge/Gateway device.
  * friendlyName `string`: The Data Box Edge/Gateway device name.
  * modelDescription `string`: The description of the Data Box Edge/Gateway device model.
  * serialNumber `string`: The Serial Number of Data Box Edge/Gateway device.
  * timeZone `string`: The Data Box Edge/Gateway device timezone.

### FileEventTrigger
* FileEventTrigger `object`: Trigger details.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * properties **required** [FileTriggerProperties](#filetriggerproperties)
  * type `string`: The hierarchical type of the object.
  * kind **required** `string` (values: FileEvent, PeriodicTimerEvent): Trigger Kind.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### FileSourceInfo
* FileSourceInfo `object`: File source details.
  * shareId **required** `string`: File share ID.

### FileTriggerProperties
* FileTriggerProperties `object`: File trigger properties.
  * customContextTag `string`: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
  * sinkInfo **required** [RoleSinkInfo](#rolesinkinfo)
  * sourceInfo **required** [FileSourceInfo](#filesourceinfo)

### IoTDeviceInfo
* IoTDeviceInfo `object`: Metadata of IoT device/IoT Edge device to be configured.
  * authentication [Authentication](#authentication)
  * deviceId **required** `string`: ID of the IoT device/edge device.
  * ioTHostHub **required** `string`: Host name for the IoT hub associated to the device.

### IoTRole
* IoTRole `object`: Compute role.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * properties [IoTRoleProperties](#iotroleproperties)
  * type `string`: The hierarchical type of the object.
  * kind **required** `string` (values: IOT, ASA, Functions, Cognitive): Role type.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### IoTRoleProperties
* IoTRoleProperties `object`: IoT role properties.
  * hostPlatform **required** `string` (values: Windows, Linux): Host OS supported by the IoT role.
  * ioTDeviceDetails **required** [IoTDeviceInfo](#iotdeviceinfo)
  * ioTEdgeDeviceDetails **required** [IoTDeviceInfo](#iotdeviceinfo)
  * roleStatus **required** `string` (values: Enabled, Disabled): Role status.
  * shareMappings `array`: Mount points of shares in role(s).
    * items [MountPointMap](#mountpointmap)

### Ipv4Config
* Ipv4Config `object`: Details related to the IPv4 address configuration.
  * gateway `string`: The IPv4 gateway of the network adapter.
  * ipAddress `string`: The IPv4 address of the network adapter.
  * subnet `string`: The IPv4 subnet of the network adapter.

### Ipv6Config
* Ipv6Config `object`: Details related to the IPv6 address configuration.
  * gateway `string`: The IPv6 gateway of the network adapter.
  * ipAddress `string`: The IPv6 address of the network adapter.
  * prefixLength `integer`: The IPv6 prefix of the network adapter.

### Job
* Job `object`: A device job.
  * endTime `string`: The UTC date and time at which the job completed.
  * error [JobErrorDetails](#joberrordetails)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The name of the object.
  * percentComplete `integer`: The percentage of the job that is complete.
  * properties [JobProperties](#jobproperties)
  * startTime `string`: The UTC date and time at which the job started.
  * status `string` (values: Invalid, Running, Succeeded, Failed, Canceled, Paused, Scheduled): The current status of the job.
  * type `string`: The hierarchical type of the object.

### JobErrorDetails
* JobErrorDetails `object`: The job error information containing the list of job errors.
  * code `string`: The code intended for programmatic access.
  * errorDetails `array`: The error details.
    * items [JobErrorItem](#joberroritem)
  * message `string`: The message that describes the error in detail.

### JobErrorItem
* JobErrorItem `object`: The job error items.
  * code `string`: The code intended for programmatic access.
  * message `string`: The message that describes the error in detail.
  * recommendations `array`: The recommended actions.
    * items `string`

### JobProperties
* JobProperties `object`: The properties for the job.
  * currentStage `string` (values: Unknown, Initial, ScanStarted, ScanComplete, ScanFailed, DownloadStarted, DownloadComplete, DownloadFailed, InstallStarted, InstallComplete, InstallFailed, RebootInitiated, Success, Failure, RescanStarted, RescanComplete, RescanFailed): Current stage of the update operation.
  * downloadProgress [UpdateDownloadProgress](#updatedownloadprogress)
  * errorManifestFile `string`: Local share/remote container relative path to the error manifest file of the refresh.
  * folder `string`: If only subfolders need to be refreshed, then the subfolder path inside the share. (The path is empty if there are no subfolders.)
  * installProgress [UpdateInstallProgress](#updateinstallprogress)
  * jobType `string` (values: Invalid, ScanForUpdates, DownloadUpdates, InstallUpdates, RefreshShare): The type of the job.
  * shareId `string`: ARM ID of the share that was refreshed.
  * totalRefreshErrors `integer`: Total number of errors encountered during the refresh process.

### MetricDimension_V1
* MetricDimension_V1 `object`: Metric Dimension v1.
  * displayName `string`: Display name of the metrics dimension.
  * name `string`: Name of the metrics dimension.
  * toBeExportedForShoebox `boolean`: To be exported to shoe box.

### MetricSpecification_V1
* MetricSpecification_V1 `object`: Metric specification version 1.
  * aggregationType `string` (values: NotSpecified, None, Average, Minimum, Maximum, Total, Count): Metric aggregation type.
  * category `string` (values: Capacity, Transaction): Metric category.
  * dimensions `array`: Metric dimensions, other than default dimension which is resource.
    * items [MetricDimension_V1](#metricdimension_v1)
  * displayDescription `string`: Description of the metric to be displayed.
  * displayName `string`: Display name of the metric.
  * fillGapWithZero `boolean`: Set true to fill the gaps with zero.
  * name `string`: Name of the metric.
  * resourceIdDimensionNameOverride `string`: Resource name override.
  * supportedAggregationTypes `array`: Support metric aggregation type.
    * items `string` (values: NotSpecified, None, Average, Minimum, Maximum, Total, Count)
  * supportedTimeGrainTypes `array`: Support granularity of metrics.
    * items `string` (values: PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT1D)
  * unit `string` (values: NotSpecified, Percent, Count, Seconds, Milliseconds, Bytes, BytesPerSecond, CountPerSecond): Metric units.

### MountPointMap
* MountPointMap `object`: The share mount point.
  * mountPoint `string`: Mount point for the share.
  * roleId `string`: ID of the role to which share is mounted.
  * roleType `string` (values: IOT, ASA, Functions, Cognitive): Role type.
  * shareId **required** `string`: ID of the share mounted to the role VM.

### NetworkAdapter
* NetworkAdapter `object`: Represents the networkAdapter on a device.
  * adapterId `string`: Instance ID of network adapter.
  * adapterPosition [NetworkAdapterPosition](#networkadapterposition)
  * dhcpStatus `string` (values: Disabled, Enabled): Value indicating whether this adapter has DHCP enabled.
  * dnsServers `array`: The list of DNS Servers of the device.
    * items `string`
  * index `integer`: Logical index of the adapter.
  * ipv4Configuration [Ipv4Config](#ipv4config)
  * ipv6Configuration [Ipv6Config](#ipv6config)
  * ipv6LinkLocalAddress `string`: The IPv6 local address.
  * label `string`: Hardware label for the adapter.
  * linkSpeed `integer`: Link speed.
  * macAddress `string`: MAC address.
  * networkAdapterName `string`: Network adapter name.
  * nodeId `string`: Node ID of the network adapter.
  * rdmaStatus `string` (values: Incapable, Capable): Value indicating whether this adapter is RDMA capable.
  * status `string` (values: Inactive, Active): Value indicating whether this adapter is valid.

### NetworkAdapterPosition
* NetworkAdapterPosition `object`: The network adapter position.
  * networkGroup `string` (values: None, NonRDMA, RDMA): The network group.
  * port `integer`: The port.

### NetworkSettings
* NetworkSettings `object`: The network settings of a device.
  * properties [NetworkSettingsProperties](#networksettingsproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### NetworkSettingsProperties
* NetworkSettingsProperties `object`: The properties of network settings.
  * networkAdapters `array`: The network adapter list on the device.
    * items [NetworkAdapter](#networkadapter)

### Operation
* Operation `object`: Operations.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation.
  * origin `string`: Origin of the operation.
  * properties [OperationProperties](#operationproperties)

### OperationDisplay
* OperationDisplay `object`: Operation display properties.
  * description `string`: Description of the operation to be performed.
  * operation `string`: Operation to be performed on the resource.
  * provider `string`: Provider name.
  * resource `string`: The type of resource in which the operation is performed.

### OperationProperties
* OperationProperties `object`: Operation properties.
  * serviceSpecification [ServiceSpecification](#servicespecification)

### OperationsList
* OperationsList `object`: The list of operations used for the discovery of available provider operations.
  * nextLink `string`: Link to the next set of results.
  * value **required** `array`: The value.
    * items [Operation](#operation)

### Order
* Order `object`: The order details.
  * properties [OrderProperties](#orderproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### OrderList
* OrderList `object`: List of order entities.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The list of orders.
    * items [Order](#order)

### OrderProperties
* OrderProperties `object`: Order properties.
  * contactInformation **required** [ContactDetails](#contactdetails)
  * currentStatus [OrderStatus](#orderstatus)
  * deliveryTrackingInfo `array`: Tracking information for the package delivered to the customer whether it has an original or a replacement device.
    * items [TrackingInfo](#trackinginfo)
  * orderHistory `array`: List of status changes in the order.
    * items [OrderStatus](#orderstatus)
  * returnTrackingInfo `array`: Tracking information for the package returned from the customer whether it has an original or a replacement device.
    * items [TrackingInfo](#trackinginfo)
  * serialNumber `string`: Serial number of the device.
  * shippingAddress **required** [Address](#address)

### OrderStatus
* OrderStatus `object`: Represents a single status change.
  * comments `string`: Comments related to this status change.
  * status **required** `string` (values: Untracked, AwaitingFulfilment, AwaitingPreparation, AwaitingShipment, Shipped, Arriving, Delivered, ReplacementRequested, LostDevice, Declined, ReturnInitiated, AwaitingReturnShipment, ShippedBack, CollectedAtMicrosoft): Status of the order as per the allowed status types.
  * updateDateTime `string`: Time of status update.

### PeriodicTimerEventTrigger
* PeriodicTimerEventTrigger `object`: Trigger details.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * properties **required** [PeriodicTimerProperties](#periodictimerproperties)
  * type `string`: The hierarchical type of the object.
  * kind **required** `string` (values: FileEvent, PeriodicTimerEvent): Trigger Kind.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### PeriodicTimerProperties
* PeriodicTimerProperties `object`: Periodic timer trigger properties.
  * customContextTag `string`: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
  * sinkInfo **required** [RoleSinkInfo](#rolesinkinfo)
  * sourceInfo **required** [PeriodicTimerSourceInfo](#periodictimersourceinfo)

### PeriodicTimerSourceInfo
* PeriodicTimerSourceInfo `object`: Periodic timer event source.
  * schedule **required** `string`: Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
  * startTime **required** `string`: The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified up to seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
  * topic `string`: Topic where periodic events are published to IoT device.

### RawCertificateData
* RawCertificateData `object`: Raw Certificate Data.
  * authenticationType `string` (values: Invalid, AzureActiveDirectory): The authentication type.
  * certificate **required** `string`: The base64 encoded certificate raw data.

### RefreshDetails
* RefreshDetails `object`: Fields for tracking refresh job on the share.
  * errorManifestFile `string`: Indicates the relative path of the error xml for the last refresh job on this particular share, if any. This could be a failed job or a successful job.
  * inProgressRefreshJobId `string`: If a refresh share job is currently in progress on this share, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
  * lastCompletedRefreshJobTimeInUTC `string`: Indicates the completed time for the last refresh job on this particular share, if any.This could be a failed job or a successful job.
  * lastJob `string`: Indicates the id of the last refresh job on this particular share,if any. This could be a failed job or a successful job.

### Role
* Role `object`: Compute role.
  * kind **required** `string` (values: IOT, ASA, Functions, Cognitive): Role type.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### RoleList
* RoleList `object`: Collection of all the roles on the Data Box Edge device.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The Value.
    * items [Role](#role)

### RoleSinkInfo
* RoleSinkInfo `object`: Compute role against which events will be raised.
  * roleId **required** `string`: Compute role ID.

### SecuritySettings
* SecuritySettings `object`: The security settings of a device.
  * properties **required** [SecuritySettingsProperties](#securitysettingsproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### SecuritySettingsProperties
* SecuritySettingsProperties `object`: The properties of security settings.
  * deviceAdminPassword **required** [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

### ServiceSpecification
* ServiceSpecification `object`: Service specification.
  * metricSpecifications `array`: Metric specification as defined by shoebox.
    * items [MetricSpecification_V1](#metricspecification_v1)

### Share
* Share `object`: Represents a share on the  Data Box Edge/Gateway device.
  * properties **required** [ShareProperties](#shareproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### ShareAccessRight
* ShareAccessRight `object`: Specifies the mapping between this particular user and the type of access he has on shares on this device.
  * accessType **required** `string` (values: Change, Read, Custom): Type of access to be allowed on the share for this user.
  * shareId **required** `string`: The share ID.

### ShareList
* ShareList `object`: Collection of all the shares on the Data Box Edge/Gateway device.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The list of shares.
    * items [Share](#share)

### ShareProperties
* ShareProperties `object`: The share properties.
  * accessProtocol **required** `string` (values: SMB, NFS): Access protocol to be used by the share.
  * azureContainerInfo [AzureContainerInfo](#azurecontainerinfo)
  * clientAccessRights `array`: List of IP addresses and corresponding access rights on the share(required for NFS protocol).
    * items [ClientAccessRight](#clientaccessright)
  * dataPolicy `string` (values: Cloud, Local): Data policy of the share.
  * description `string`: Description for the share.
  * monitoringStatus **required** `string` (values: Enabled, Disabled): Current monitoring status of the share.
  * refreshDetails [RefreshDetails](#refreshdetails)
  * shareMappings `array`: Share mount point to the role.
    * items [MountPointMap](#mountpointmap)
  * shareStatus **required** `string` (values: Online, Offline): Current status of the share.
  * userAccessRights `array`: Mapping of users and corresponding access rights on the share (required for SMB protocol).
    * items [UserAccessRight](#useraccessright)

### Sku
* Sku `object`: The SKU type.
  * name `string` (values: Gateway, Edge): SKU name.
  * tier `string` (values: Standard): The SKU tier. This is based on the SKU name.

### StorageAccountCredential
* StorageAccountCredential `object`: The storage account credential.
  * properties **required** [StorageAccountCredentialProperties](#storageaccountcredentialproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### StorageAccountCredentialList
* StorageAccountCredentialList `object`: The collection of storage account credentials.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The value.
    * items [StorageAccountCredential](#storageaccountcredential)

### StorageAccountCredentialProperties
* StorageAccountCredentialProperties `object`: The storage account credential properties.
  * accountKey [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * accountType **required** `string` (values: GeneralPurposeStorage, BlobStorage): Type of storage accessed on the storage account.
  * alias **required** `string`: Alias for the storage account.
  * blobDomainName `string`: Blob end point for private clouds.
  * connectionString `string`: Connection string for the storage account. Use this string if username and account key are not specified.
  * sslStatus **required** `string` (values: Enabled, Disabled): Signifies whether SSL needs to be enabled or not.
  * userName `string`: Username for the storage account.

### SymmetricKey
* SymmetricKey `object`: Symmetric key for authentication.
  * connectionString [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

### TrackingInfo
* TrackingInfo `object`: Tracking courier information.
  * carrierName `string`: Name of the carrier used in the delivery.
  * serialNumber `string`: Serial number of the device being tracked.
  * trackingId `string`: Tracking ID of the shipment.
  * trackingUrl `string`: Tracking URL of the shipment.

### Trigger
* Trigger `object`: Trigger details.
  * kind **required** `string` (values: FileEvent, PeriodicTimerEvent): Trigger Kind.
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### TriggerList
* TriggerList `object`: Collection of all trigger on the data box edge device.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The list of triggers.
    * items [Trigger](#trigger)

### UpdateDownloadProgress
* UpdateDownloadProgress `object`: Details about the download progress of update.
  * downloadPhase `string` (values: Unknown, Initializing, Downloading, Verifying): The download phase.
  * numberOfUpdatesDownloaded `integer`: Number of updates downloaded.
  * numberOfUpdatesToDownload `integer`: Number of updates to download.
  * percentComplete `integer`: Percentage of completion.
  * totalBytesDownloaded `number`: Total bytes downloaded.
  * totalBytesToDownload `number`: Total bytes to download.

### UpdateInstallProgress
* UpdateInstallProgress `object`: Progress details during installation of updates.
  * numberOfUpdatesInstalled `integer`: Number of updates installed.
  * numberOfUpdatesToInstall `integer`: Number of updates to install.
  * percentComplete `integer`: Percentage completed.

### UpdateSummary
* UpdateSummary `object`: Details about ongoing updates and availability of updates on the device.
  * properties [UpdateSummaryProperties](#updatesummaryproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### UpdateSummaryProperties
* UpdateSummaryProperties `object`: The device update information summary.
  * deviceLastScannedDateTime `string`: The last time when a scan was done on the device.
  * deviceVersionNumber `string`: The current version of the device in format: 1.2.17312.13.",
  * friendlyDeviceVersionName `string`: The current version of the device in text format.
  * inProgressDownloadJobId `string`: The job ID of the download job in progress.
  * inProgressDownloadJobStartedDateTime `string`: The time when the currently running download (if any) started.
  * inProgressInstallJobId `string`: The job ID of the install job in progress.
  * inProgressInstallJobStartedDateTime `string`: The time when the currently running install (if any) started.
  * lastCompletedDownloadJobDateTime `string`: The time when the last Download job was completed (success/cancelled/failed) on the appliance.
  * lastCompletedInstallJobDateTime `string`: The time when the last Install job was completed (success/cancelled/failed) on the appliance.
  * lastCompletedScanJobDateTime `string`: The time when the last scan job was completed (success/cancelled/failed) on the appliance.
  * ongoingUpdateOperation `string` (values: None, Scan, Download, Install): The current update operation.
  * rebootBehavior `string` (values: NeverReboots, RequiresReboot, RequestReboot): Indicates if updates are available and at least one of the updates needs a reboot.
  * totalNumberOfUpdatesAvailable `integer`: The number of updates available for the current device version as per the last device scan.
  * totalNumberOfUpdatesPendingDownload `integer`: The total number of items pending download.
  * totalNumberOfUpdatesPendingInstall `integer`: The total number of items pending install.
  * totalUpdateSizeInBytes `number`: The total size of updates available for download in bytes.
  * updateTitles `array`: The list of updates available for install.
    * items `string`

### UploadCertificateRequest
* UploadCertificateRequest `object`: The upload certificate request.
  * properties **required** [RawCertificateData](#rawcertificatedata)

### UploadCertificateResponse
* UploadCertificateResponse `object`: The upload registration certificate response.
  * aadAuthority **required** `string`: Azure Active Directory tenant authority.
  * aadTenantId **required** `string`: Azure Active Directory tenant ID.
  * authType `string` (values: Invalid, AzureActiveDirectory): Specifies authentication type.
  * azureManagementEndpointAudience **required** `string`: The azure management endpoint audience.
  * resourceId **required** `string`: The resource ID of the Data Box Edge/Gateway device.
  * servicePrincipalClientId **required** `string`: Azure Active Directory service principal client ID.
  * servicePrincipalObjectId **required** `string`: Azure Active Directory service principal object ID.

### User
* User `object`: Represents a user who has access to one or more shares on the Data Box Edge/Gateway device.
  * properties **required** [UserProperties](#userproperties)
  * id `string`: The path ID that uniquely identifies the object.
  * name `string`: The object name.
  * type `string`: The hierarchical type of the object.

### UserAccessRight
* UserAccessRight `object`: The mapping between a particular user and the access type on the SMB share.
  * accessType **required** `string` (values: Change, Read, Custom): Type of access to be allowed for the user.
  * userId **required** `string`: User ID (already existing in the device).

### UserList
* UserList `object`: Collection of users.
  * nextLink `string`: Link to the next set of results.
  * value `array`: The list of users.
    * items [User](#user)

### UserProperties
* UserProperties `object`: The user properties.
  * encryptedPassword [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
  * shareAccessRights `array`: List of shares that the user has rights on. This field should not be specified during user creation.
    * items [ShareAccessRight](#shareaccessright)


