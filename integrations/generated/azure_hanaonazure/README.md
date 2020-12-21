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

.then(data => {
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

### SapMonitors_List
Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor.


```js
azure_hanaonazure.SapMonitors_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SapMonitorListResult](#sapmonitorlistresult)

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

### HanaInstances_Delete
Deletes a SAP HANA instance with the specified subscription, resource group, and instance name.


```js
azure_hanaonazure.HanaInstances_Delete({
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
*Output schema unknown*

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

### HanaInstances_Update
Patches the Tags field of a SAP HANA instance for the specified subscription, resource group, and instance name.


```js
azure_hanaonazure.HanaInstances_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "hanaInstanceName": "",
  "tagsParameter": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * hanaInstanceName **required** `string`: Name of the SAP HANA on Azure instance.
  * tagsParameter **required** [Tags](#tags)

#### Output
* output [HanaInstance](#hanainstance)

### HanaInstances_Create
Creates a SAP HANA instance for the specified subscription, resource group, and instance name.


```js
azure_hanaonazure.HanaInstances_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "hanaInstanceName": "",
  "hanaInstanceParameter": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * hanaInstanceName **required** `string`: Name of the SAP HANA on Azure instance.
  * hanaInstanceParameter **required** [HanaInstance](#hanainstance)

#### Output
* output [HanaInstance](#hanainstance)

### HanaInstances_Restart
The operation to restart a SAP HANA instance.


```js
azure_hanaonazure.HanaInstances_Restart({
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
*Output schema unknown*

### HanaInstances_Shutdown
The operation to shutdown a SAP HANA instance.


```js
azure_hanaonazure.HanaInstances_Shutdown({
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
*Output schema unknown*

### HanaInstances_Start
The operation to start a SAP HANA instance.


```js
azure_hanaonazure.HanaInstances_Start({
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
*Output schema unknown*

### SapMonitors_Delete
Deletes a SAP monitor with the specified subscription, resource group, and monitor name.


```js
azure_hanaonazure.SapMonitors_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "sapMonitorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * sapMonitorName **required** `string`: Name of the SAP monitor resource.

#### Output
*Output schema unknown*

### SapMonitors_Get
Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.


```js
azure_hanaonazure.SapMonitors_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "sapMonitorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * sapMonitorName **required** `string`: Name of the SAP monitor resource.

#### Output
* output [SapMonitor](#sapmonitor)

### SapMonitors_Update
Patches the Tags field of a SAP monitor for the specified subscription, resource group, and monitor name.


```js
azure_hanaonazure.SapMonitors_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "sapMonitorName": "",
  "tagsParameter": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * sapMonitorName **required** `string`: Name of the SAP monitor resource.
  * tagsParameter **required** [Tags](#tags)

#### Output
* output [SapMonitor](#sapmonitor)

### SapMonitors_Create
Creates a SAP monitor for the specified subscription, resource group, and resource name.


```js
azure_hanaonazure.SapMonitors_Create({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "sapMonitorName": "",
  "sapMonitorParameter": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of the resource group.
  * sapMonitorName **required** `string`: Name of the SAP monitor resource.
  * sapMonitorParameter **required** [SapMonitor](#sapmonitor)

#### Output
* output [SapMonitor](#sapmonitor)



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
  * provider `string`: The localized friendly form of the resource provider name. This form is also expected to include the publisher/company responsible. Use Title Casing. Begin with "Microsoft" for 1st party services.
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
  * hwRevision `string`: Hardware revision of a HANA instance
  * networkProfile [NetworkProfile](#networkprofile)
  * osProfile [OSProfile](#osprofile)
  * partnerNodeId `string`: ARM ID of another HanaInstance that will share a network with this HanaInstance
  * powerState `string` (values: starting, started, stopping, stopped, restarting, unknown): Resource power state
  * provisioningState `string` (values: Accepted, Creating, Updating, Failed, Succeeded, Deleting, Migrating): State of provisioning of the HanaInstance
  * proximityPlacementGroup `string`: Resource proximity placement group
  * storageProfile [StorageProfile](#storageprofile)

### HanaInstancesListResult
* HanaInstancesListResult `object`: The response from the List HANA Instances operation.
  * nextLink `string`: The URL to get the next set of HANA instances.
  * value `array`: The list of SAP HANA on Azure instances.
    * items [HanaInstance](#hanainstance)

### HardwareProfile
* HardwareProfile `object`: Specifies the hardware settings for the HANA instance.
  * hanaInstanceSize `string` (values: S72m, S144m, S72, S144, S192, S192m, S192xm, S96, S112, S224m, S224o, S224om, S224oo, S224oom, S224ooo, S224oxm, S224oxxm, S384, S384m, S384xm, S384xxm, S576m, S576xm, S768, S768m, S768xm, S960m): Specifies the HANA instance SKU.
  * hardwareType `string` (values: Cisco_UCS, HPE): Name of the hardware type (vendor and/or their product name)

### IpAddress
* IpAddress `object`: Specifies the IP address of the network interface.
  * ipAddress `string`: Specifies the IP address of the network interface.

### MonitoringDetails
* MonitoringDetails `object`: Details needed to monitor a Hana Instance
  * hanaDbName `string`: Name of the database itself.
  * hanaDbPassword `string`: Password for the HANA database to login for monitoring
  * hanaDbSqlPort `integer`: The port number of the tenant DB. Used to connect to the DB.
  * hanaDbUsername `string`: Username for the HANA database to login to for monitoring
  * hanaHostname `string`: Hostname of the HANA Instance blade.
  * hanaSubnet `string`: ARM ID of an Azure Subnet with access to the HANA instance.

### NetworkProfile
* NetworkProfile `object`: Specifies the network settings for the HANA instance disks.
  * circuitId `string`: Specifies the circuit id for connecting to express route.
  * networkInterfaces `array`: Specifies the network interfaces for the HANA instance.
    * items [IpAddress](#ipaddress)

### OSProfile
* OSProfile `object`: Specifies the operating system settings for the HANA instance.
  * computerName `string`: Specifies the host OS name of the HANA instance.
  * osType `string`: This property allows you to specify the type of the OS.
  * sshPublicKey `string`: Specifies the SSH public key used to access the operating system.
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

### SapMonitor
* SapMonitor `object`: SAP monitor info on Azure (ARM properties and SAP monitor properties)
  * properties [SapMonitorProperties](#sapmonitorproperties)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SapMonitorListResult
* SapMonitorListResult `object`: The response from the List SAP monitors operation.
  * nextLink `string`: The URL to get the next set of SAP monitors.
  * value `array`: The list of SAP monitors.
    * items [SapMonitor](#sapmonitor)

### SapMonitorProperties
* SapMonitorProperties `object`: Describes the properties of a SAP monitor.
  * enableCustomerAnalytics `boolean`: The value indicating whether to send analytics to Microsoft
  * hanaDbCredentialsMsiId `string`: MSI ID passed by customer which has access to customer's KeyVault and to be assigned to the Collector VM.
  * hanaDbName `string`: Database name of the HANA instance.
  * hanaDbPassword `string`: Database password of the HANA instance.
  * hanaDbPasswordKeyVaultUrl `string`: KeyVault URL link to the password for the HANA database.
  * hanaDbSqlPort `integer`: Database port of the HANA instance.
  * hanaDbUsername `string`: Database username of the HANA instance.
  * hanaHostname `string`: Hostname of the HANA instance.
  * hanaSubnet `string`: Specifies the SAP monitor unique ID.
  * keyVaultId `string`: Key Vault ID containing customer's HANA credentials.
  * logAnalyticsWorkspaceArmId `string`: The ARM ID of the Log Analytics Workspace that is used for monitoring
  * logAnalyticsWorkspaceId `string`: The workspace ID of the log analytics workspace to be used for monitoring
  * logAnalyticsWorkspaceSharedKey `string`: The shared key of the log analytics workspace that is used for monitoring
  * managedResourceGroupName `string`: The name of the resource group the SAP Monitor resources get deployed into.
  * provisioningState `string` (values: Accepted, Creating, Updating, Failed, Succeeded, Deleting, Migrating): State of provisioning of the HanaInstance

### StorageProfile
* StorageProfile `object`: Specifies the storage settings for the HANA instance disks.
  * nfsIpAddress `string`: IP Address to connect to storage.
  * osDisks `array`: Specifies information about the operating system disk used by the hana instance.
    * items [Disk](#disk)

### Tags
* Tags `object`: Tags field of the HANA instance.
  * tags `object`: Tags field of the HANA instance.


