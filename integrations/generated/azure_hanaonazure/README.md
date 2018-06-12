# @datafire/azure_hanaonazure

Client library for HanaManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hanaonazure
```
```js
let azure_hanaonazure = require('@datafire/azure_hanaonazure').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_hanaonazure.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The SAP HANA on Azure Management Client.

## Actions

### Operations_List
Gets a list of SAP HANA management operations.


```js
azure_hanaonazure.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [OperationList](#operationlist)

### HanaInstances_List
Gets a list of SAP HANA instances in the specified subscription. The operations returns various properties of each SAP HANA on Azure instance.


```js
azure_hanaonazure.HanaInstances_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HanaInstancesListResult](#hanainstanceslistresult)

### HanaInstances_ListByResourceGroup
Gets a list of SAP HANA instances in the specified subscription and the resource group. The operations returns various properties of each SAP HANA on Azure instance.


```js
azure_hanaonazure.HanaInstances_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.

#### Output
* output [HanaInstancesListResult](#hanainstanceslistresult)

### HanaInstances_Get
Gets properties of a SAP HANA instance for the specified subscription, resource group, and instance name.


```js
azure_hanaonazure.HanaInstances_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "hanaInstanceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * hanaInstanceName **required** `string`: Name of the SAP HANA on Azure instance.

#### Output
* output [HanaInstance](#hanainstance)



## Definitions

### Disk
* Disk `object`: Specifies the disk information fo the HANA instance
  * diskSizeGB `integer`: Specifies the size of an empty data disk in gigabytes.
  * lun `integer`: Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
  * name `string`: The disk name.

### Display
* Display `object`: Detailed HANA operation information
  * description `string`: The localized friendly description for the operation as shown to the user. This description should be thorough, yet concise. It will be used in tool-tips and detailed views.
  * operation `string`: The localized friendly name for the operation as shown to the user. This name should be concise (to fit in drop downs), but clear (self-documenting). Use Title Casing and include the entity/resource to which it applies.
  * origin `string`: The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is 'user,system'
  * provider `string`: The localized friendly form of the resource provider name. This form is also expected to include the publisher/company responsible. Use Title Casing. Begin with “Microsoft” for 1st party services.
  * resource `string`: The localized friendly form of the resource type related to this action/operation. This form should match the public documentation for the resource provider. Use Title Casing. For examples, refer to the “name” section.

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### HanaInstance
* HanaInstance `object`: HANA instance info on Azure (ARM properties and HANA properties)
  * properties [HanaInstanceProperties](#hanainstanceproperties)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### HanaInstanceProperties
* HanaInstanceProperties `object`: Describes the properties of a HANA instance.
  * hanaInstanceId `string`: Specifies the HANA instance unique ID.
  * hardwareProfile [HardwareProfile](#hardwareprofile)
  * networkProfile [NetworkProfile](#networkprofile)
  * osProfile [OSProfile](#osprofile)
  * storageProfile [StorageProfile](#storageprofile)

### HanaInstancesListResult
* HanaInstancesListResult `object`: The response from the List HANA Instances operation.
  * nextLink `string`: The URL to get the next set of HANA instances.
  * value `array`: The list of SAP HANA on Azure instances.
    * items [HanaInstance](#hanainstance)

### HardwareProfile
* HardwareProfile `object`: Specifies the hardware settings for the HANA instance.
  * hanaInstanceSize `string` (values: S72m, S144m, S72, S144, S192, S192m, S192xm, S384, S384m, S384xm, S384xxm, S576m, S576xm, S768, S768m, S768xm, S960m): Specifies the HANA instance SKU.
  * hardwareType `string` (values: Cisco_UCS, HPE): Name of the hardware type (vendor and/or their product name)

### IpAddress
* IpAddress `object`: Specifies the IP address of the network interaface.
  * ipAddress `string`: Specifies the IP address of the network interface.

### NetworkProfile
* NetworkProfile `object`: Specifies the network settings for the HANA instance disks.
  * circuitId `string`: Specifies the circuit id for connecting to express route.
  * networkInterfaces `array`: Specifies the network interfaces for the HANA instance.
    * items [IpAddress](#ipaddress)

### OSProfile
* OSProfile `object`: Specifies the operating system settings for the HANA instance.
  * computerName `string`: Specifies the host OS name of the HANA instance.
  * osType `string`: This property allows you to specify the type of the OS.
  * version `string`: Specifies version of operating system.

### Operation
* Operation `object`: HANA operation information
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the action name that appears in RBAC / the event service.

### OperationList
* OperationList `object`: List of HANA operations
  * value `array`: List of HANA operations
    * items [Operation](#operation)

### Resource
* Resource `object`: The resource model definition.
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### StorageProfile
* StorageProfile `object`: Specifies the storage settings for the HANA instance disks.
  * nfsIpAddress `string`: IP Address to connect to storage.
  * osDisks `array`: Specifies information about the operating system disk used by the hana instance.
    * items [Disk](#disk)


