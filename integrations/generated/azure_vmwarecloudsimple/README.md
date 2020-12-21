# @datafire/azure_vmwarecloudsimple

Client library for VMwareCloudSimple

## Installation and Usage
```bash
npm install --save @datafire/azure_vmwarecloudsimple
```
```js
let azure_vmwarecloudsimple = require('@datafire/azure_vmwarecloudsimple').create({
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

Description of the new service

## Actions

### Operations_List
Return list of operations


```js
azure_vmwarecloudsimple.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.

#### Output
* output [AvailableOperationsListResponse](#availableoperationslistresponse)

### DedicatedCloudNodes_ListBySubscription
Returns list of dedicate cloud nodes within subscription


```js
azure_vmwarecloudsimple.DedicatedCloudNodes_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation
  * $top `integer`: The maximum number of record sets to return
  * $skipToken `string`: to be used by nextLink implementation

#### Output
* output [DedicatedCloudNodeListResponse](#dedicatedcloudnodelistresponse)

### DedicatedCloudServices_ListBySubscription
Returns list of dedicated cloud services within a subscription


```js
azure_vmwarecloudsimple.DedicatedCloudServices_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation
  * $top `integer`: The maximum number of record sets to return
  * $skipToken `string`: to be used by nextLink implementation

#### Output
* output [DedicatedCloudServiceListResponse](#dedicatedcloudservicelistresponse)

### SkusAvailability_List
Returns list of available resources in region


```js
azure_vmwarecloudsimple.SkusAvailability_List({
  "subscriptionId": "",
  "regionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * skuId `string`: sku id, if no sku is passed availability for all skus will be returned
  * api-version **required** `string`: Client API version.

#### Output
* output [SkuAvailabilityListResponse](#skuavailabilitylistresponse)

### Operations_Get
Return an async operation


```js
azure_vmwarecloudsimple.Operations_Get({
  "subscriptionId": "",
  "api-version": "",
  "regionId": "",
  "Referer": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: Client API version.
  * regionId **required** `string`: The region Id (westus, eastus)
  * Referer **required** `string`: referer url
  * operationId **required** `string`: operation id

#### Output
* output [OperationResource](#operationresource)

### PrivateClouds_List
Returns list of private clouds in particular region


```js
azure_vmwarecloudsimple.PrivateClouds_List({
  "subscriptionId": "",
  "regionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * api-version **required** `string`: Client API version.

#### Output
* output [PrivateCloudList](#privatecloudlist)

### PrivateClouds_Get
Returns private cloud by its name


```js
azure_vmwarecloudsimple.PrivateClouds_Get({
  "subscriptionId": "",
  "pcName": "",
  "regionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * pcName **required** `string`: The private cloud name
  * regionId **required** `string`: The region Id (westus, eastus)
  * api-version **required** `string`: Client API version.

#### Output
* output [PrivateCloud](#privatecloud)

### customizationPolicies_List
Returns list of customization policies in region for private cloud


```js
azure_vmwarecloudsimple.customizationPolicies_List({
  "subscriptionId": "",
  "regionId": "",
  "pcName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation. only type is allowed here as a filter e.g. $filter=type eq 'xxxx'

#### Output
* output [CustomizationPoliciesListResponse](#customizationpolicieslistresponse)

### customizationPolicies_Get
Returns customization policy by its name


```js
azure_vmwarecloudsimple.customizationPolicies_Get({
  "api-version": "",
  "subscriptionId": "",
  "regionId": "",
  "pcName": "",
  "customizationPolicyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * customizationPolicyName **required** `string`: customization policy name

#### Output
* output [CustomizationPolicy](#customizationpolicy)

### ResourcePools_List
Returns list of resource pools in region for private cloud


```js
azure_vmwarecloudsimple.ResourcePools_List({
  "subscriptionId": "",
  "regionId": "",
  "pcName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * api-version **required** `string`: Client API version.

#### Output
* output [ResourcePoolsListResponse](#resourcepoolslistresponse)

### ResourcePools_Get
Returns resource pool templates by its name


```js
azure_vmwarecloudsimple.ResourcePools_Get({
  "subscriptionId": "",
  "api-version": "",
  "regionId": "",
  "pcName": "",
  "resourcePoolName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: Client API version.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * resourcePoolName **required** `string`: resource pool id (vsphereId)

#### Output
* output [ResourcePool](#resourcepool)

### VirtualMachineTemplates_List
Returns list of virtual machine templates in region for private cloud


```js
azure_vmwarecloudsimple.VirtualMachineTemplates_List({
  "subscriptionId": "",
  "api-version": "",
  "pcName": "",
  "regionId": "",
  "resourcePoolName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: Client API version.
  * pcName **required** `string`: The private cloud name
  * regionId **required** `string`: The region Id (westus, eastus)
  * resourcePoolName **required** `string`: Resource pool used to derive vSphere cluster which contains VM templates

#### Output
* output [VirtualMachineTemplateListResponse](#virtualmachinetemplatelistresponse)

### VirtualMachineTemplates_Get
Returns virtual machine templates by its name


```js
azure_vmwarecloudsimple.VirtualMachineTemplates_Get({
  "subscriptionId": "",
  "regionId": "",
  "pcName": "",
  "virtualMachineTemplateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * virtualMachineTemplateName **required** `string`: virtual machine template id (vsphereId)
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualMachineTemplate](#virtualmachinetemplate)

### VirtualNetworks_List
Return list of virtual networks in location for private cloud


```js
azure_vmwarecloudsimple.VirtualNetworks_List({
  "subscriptionId": "",
  "regionId": "",
  "pcName": "",
  "api-version": "",
  "resourcePoolName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * api-version **required** `string`: Client API version.
  * resourcePoolName **required** `string`: Resource pool used to derive vSphere cluster which contains virtual networks

#### Output
* output [VirtualNetworkListResponse](#virtualnetworklistresponse)

### VirtualNetworks_Get
Return virtual network by its name


```js
azure_vmwarecloudsimple.VirtualNetworks_Get({
  "subscriptionId": "",
  "regionId": "",
  "pcName": "",
  "virtualNetworkName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * pcName **required** `string`: The private cloud name
  * virtualNetworkName **required** `string`: virtual network id (vsphereId)
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualNetwork](#virtualnetwork)

### Usages_List
Returns list of usage in region


```js
azure_vmwarecloudsimple.Usages_List({
  "subscriptionId": "",
  "regionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * regionId **required** `string`: The region Id (westus, eastus)
  * $filter `string`: The filter to apply on the list operation. only name.value is allowed here as a filter e.g. $filter=name.value eq 'xxxx'
  * api-version **required** `string`: Client API version.

#### Output
* output [UsageListResponse](#usagelistresponse)

### VirtualMachines_ListBySubscription
Returns list virtual machine within subscription


```js
azure_vmwarecloudsimple.VirtualMachines_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation
  * $top `integer`: The maximum number of record sets to return
  * $skipToken `string`: to be used by nextLink implementation

#### Output
* output [VirtualMachineListResponse](#virtualmachinelistresponse)

### DedicatedCloudNodes_ListByResourceGroup
Returns list of dedicate cloud nodes within resource group


```js
azure_vmwarecloudsimple.DedicatedCloudNodes_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation
  * $top `integer`: The maximum number of record sets to return
  * $skipToken `string`: to be used by nextLink implementation

#### Output
* output [DedicatedCloudNodeListResponse](#dedicatedcloudnodelistresponse)

### DedicatedCloudNodes_Delete
Delete dedicated cloud node


```js
azure_vmwarecloudsimple.DedicatedCloudNodes_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudNodeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudNodeName **required** `string`: dedicated cloud node name
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### DedicatedCloudNodes_Get
Returns dedicated cloud node


```js
azure_vmwarecloudsimple.DedicatedCloudNodes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudNodeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudNodeName **required** `string`: dedicated cloud node name
  * api-version **required** `string`: Client API version.

#### Output
* output [DedicatedCloudNode](#dedicatedcloudnode)

### DedicatedCloudNodes_Update
Patches dedicated node properties


```js
azure_vmwarecloudsimple.DedicatedCloudNodes_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudNodeName": "",
  "dedicatedCloudNodeRequest": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudNodeName **required** `string`: dedicated cloud node name
  * dedicatedCloudNodeRequest **required** [PatchPayload](#patchpayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [DedicatedCloudNode](#dedicatedcloudnode)

### DedicatedCloudNodes_CreateOrUpdate
Returns dedicated cloud node by its name


```js
azure_vmwarecloudsimple.DedicatedCloudNodes_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "Referer": "",
  "dedicatedCloudNodeName": "",
  "dedicatedCloudNodeRequest": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * Referer **required** `string`: referer url
  * dedicatedCloudNodeName **required** `string`: dedicated cloud node name
  * dedicatedCloudNodeRequest **required** [DedicatedCloudNode](#dedicatedcloudnode)
  * api-version **required** `string`: Client API version.

#### Output
* output [DedicatedCloudNode](#dedicatedcloudnode)

### DedicatedCloudServices_ListByResourceGroup
Returns list of dedicated cloud services within a resource group


```js
azure_vmwarecloudsimple.DedicatedCloudServices_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation
  * $top `integer`: The maximum number of record sets to return
  * $skipToken `string`: to be used by nextLink implementation

#### Output
* output [DedicatedCloudServiceListResponse](#dedicatedcloudservicelistresponse)

### DedicatedCloudServices_Delete
Delete dedicate cloud service


```js
azure_vmwarecloudsimple.DedicatedCloudServices_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudServiceName **required** `string`: dedicated cloud service name
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### DedicatedCloudServices_Get
Returns Dedicate Cloud Service


```js
azure_vmwarecloudsimple.DedicatedCloudServices_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudServiceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudServiceName **required** `string`: dedicated cloud Service name
  * api-version **required** `string`: Client API version.

#### Output
* output [DedicatedCloudService](#dedicatedcloudservice)

### DedicatedCloudServices_Update
Patch dedicated cloud service's properties


```js
azure_vmwarecloudsimple.DedicatedCloudServices_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudServiceName": "",
  "dedicatedCloudServiceRequest": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudServiceName **required** `string`: dedicated cloud service name
  * dedicatedCloudServiceRequest **required** [PatchPayload](#patchpayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [DedicatedCloudService](#dedicatedcloudservice)

### DedicatedCloudServices_CreateOrUpdate
Create dedicate cloud service


```js
azure_vmwarecloudsimple.DedicatedCloudServices_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "dedicatedCloudServiceName": "",
  "dedicatedCloudServiceRequest": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * dedicatedCloudServiceName **required** `string`: dedicated cloud Service name
  * dedicatedCloudServiceRequest **required** [DedicatedCloudService](#dedicatedcloudservice)
  * api-version **required** `string`: Client API version.

#### Output
* output [DedicatedCloudService](#dedicatedcloudservice)

### VirtualMachines_ListByResourceGroup
Returns list of virtual machine within resource group


```js
azure_vmwarecloudsimple.VirtualMachines_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * api-version **required** `string`: Client API version.
  * $filter `string`: The filter to apply on the list operation
  * $top `integer`: The maximum number of record sets to return
  * $skipToken `string`: to be used by nextLink implementation

#### Output
* output [VirtualMachineListResponse](#virtualmachinelistresponse)

### VirtualMachines_Delete
Delete virtual machine


```js
azure_vmwarecloudsimple.VirtualMachines_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "Referer": "",
  "virtualMachineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * Referer **required** `string`: referer url
  * virtualMachineName **required** `string`: virtual machine name
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Get
Get virtual machine


```js
azure_vmwarecloudsimple.VirtualMachines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualMachineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * virtualMachineName **required** `string`: virtual machine name
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualMachine](#virtualmachine)

### VirtualMachines_Update
Patch virtual machine properties


```js
azure_vmwarecloudsimple.VirtualMachines_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "virtualMachineName": "",
  "virtualMachineRequest": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * virtualMachineName **required** `string`: virtual machine name
  * virtualMachineRequest **required** [PatchPayload](#patchpayload)
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualMachine](#virtualmachine)

### VirtualMachines_CreateOrUpdate
Create Or Update Virtual Machine


```js
azure_vmwarecloudsimple.VirtualMachines_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "Referer": "",
  "virtualMachineName": "",
  "virtualMachineRequest": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * Referer **required** `string`: referer url
  * virtualMachineName **required** `string`: virtual machine name
  * virtualMachineRequest **required** [VirtualMachine](#virtualmachine)
  * api-version **required** `string`: Client API version.

#### Output
* output [VirtualMachine](#virtualmachine)

### VirtualMachines_Start
Power on virtual machine


```js
azure_vmwarecloudsimple.VirtualMachines_Start({
  "subscriptionId": "",
  "resourceGroupName": "",
  "Referer": "",
  "virtualMachineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * Referer **required** `string`: referer url
  * virtualMachineName **required** `string`: virtual machine name
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### VirtualMachines_Stop
Power off virtual machine, options: shutdown, poweroff, and suspend


```js
azure_vmwarecloudsimple.VirtualMachines_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "Referer": "",
  "virtualMachineName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group
  * Referer **required** `string`: referer url
  * virtualMachineName **required** `string`: virtual machine name
  * m [VirtualMachineStopMode](#virtualmachinestopmode)
  * mode `string` (values: reboot, suspend, shutdown, poweroff): query stop mode parameter (reboot, shutdown, etc...)
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*



## Definitions

### AvailableOperation
* AvailableOperation `object`: Resource provider available operation model
  * display [AvailableOperationDisplay](#availableoperationdisplay)
  * isDataAction `boolean`: Indicating whether the operation is a data action or not
  * name `string`: {resourceProviderNamespace}/{resourceType}/{read|write|delete|action}
  * origin `string` (values: user, system, user,system): The origin of operation
  * properties [AvailableOperationDisplayPropertyServiceSpecification](#availableoperationdisplaypropertyservicespecification)

### AvailableOperationDisplay
* AvailableOperationDisplay `object`: Resource provider available operation display model
  * description `string`: Description of the operation for display purposes
  * operation `string`: Name of the operation for display purposes
  * provider `string`: Name of the provider for display purposes
  * resource `string`: Name of the resource type for display purposes

### AvailableOperationDisplayPropertyServiceSpecification
* AvailableOperationDisplayPropertyServiceSpecification `object`: Available operation display property service specification model
  * serviceSpecification [AvailableOperationDisplayPropertyServiceSpecificationMetricsList](#availableoperationdisplaypropertyservicespecificationmetricslist)

### AvailableOperationDisplayPropertyServiceSpecificationMetricsItem
* AvailableOperationDisplayPropertyServiceSpecificationMetricsItem `object`: Available operation display property service specification metrics item
  * aggregationType **required** `string` (values: Average, Total): Metric's aggregation type for e.g. (Average, Total)
  * displayDescription **required** `string`: Metric's description
  * displayName **required** `string`: Human readable metric's name
  * name **required** `string`: Metric's name/id
  * unit **required** `string`: Metric's unit

### AvailableOperationDisplayPropertyServiceSpecificationMetricsList
* AvailableOperationDisplayPropertyServiceSpecificationMetricsList `object`: List of available operation display property service specification metrics
  * metricSpecifications `array`: Metric specifications of operation
    * items [AvailableOperationDisplayPropertyServiceSpecificationMetricsItem](#availableoperationdisplaypropertyservicespecificationmetricsitem)

### AvailableOperationsListResponse
* AvailableOperationsListResponse `object`: List of available operations
  * nextLink `string`: Link for next list of available operations
  * value `array`: Returns a list of available operations
    * items [AvailableOperation](#availableoperation)

### CSRPError
* CSRPError `object`: General error model
  * error [CSRPErrorBody](#csrperrorbody)

### CSRPErrorBody
* CSRPErrorBody `object`: Error properties
  * code `string`: Error's code
  * details `array`: Error's details
    * items [CSRPErrorBody](#csrperrorbody)
  * message `string`: Error's message
  * target `string`: Error's target

### CustomizationHostName
* CustomizationHostName `object`: Host name model
  * name `string`: Hostname
  * type `string` (values: USER_DEFINED, PREFIX_BASED, FIXED, VIRTUAL_MACHINE_NAME, CUSTOM_NAME): Type of host name

### CustomizationIPAddress
* CustomizationIPAddress `object`
  * argument `string`: Argument when Custom ip type is selected
  * ipAddress `string`: Defined Ip Address when Fixed ip type is selected
  * type `string` (values: CUSTOM, DHCP_IP, FIXED_IP, USER_DEFINED): Customization Specification ip type

### CustomizationIPSettings
* CustomizationIPSettings `object`
  * gateway `array`: The list of gateways
    * items `string`
  * ip [CustomizationIPAddress](#customizationipaddress)
  * subnetMask `string`: Adapter subnet mask

### CustomizationIdentity
* CustomizationIdentity `object`
  * data `string`: Windows Text Identity. Prepared data
  * hostName [CustomizationHostName](#customizationhostname)
  * type `string` (values: WINDOWS_TEXT, WINDOWS, LINUX): Identity type
  * userData `object`: Windows Identity. User data customization
    * isPasswordPredefined `boolean`: Is password predefined in customization policy

### CustomizationNicSetting
* CustomizationNicSetting `object`
  * adapter [CustomizationIPSettings](#customizationipsettings)
  * macAddress `string`: NIC mac address

### CustomizationPoliciesListResponse
* CustomizationPoliciesListResponse `object`: List of customization polices response model
  * nextLink `string`: Link for next list of the Customization policy
  * value `array`: List of the customization policies
    * items [CustomizationPolicy](#customizationpolicy)

### CustomizationPolicy
* CustomizationPolicy `object`: The virtual machine customization policy
  * id `string`: Customization policy azure id
  * location `string`: Azure region
  * name `string`: Customization policy name
  * properties [CustomizationPolicyProperties](#customizationpolicyproperties)
  * type `string`

### CustomizationPolicyProperties
* CustomizationPolicyProperties `object`: The properties of Customization policy
  * description `string`: Policy description
  * privateCloudId `string`: The Private cloud id
  * specification [CustomizationSpecification](#customizationspecification)
  * type `string` (values: LINUX, WINDOWS): The type of customization (Linux or Windows)
  * version `string`: Policy version

### CustomizationSpecification
* CustomizationSpecification `object`: The specification for Customization Policy
  * identity [CustomizationIdentity](#customizationidentity)
  * nicSettings `array`: Network interface settings
    * items [CustomizationNicSetting](#customizationnicsetting)

### DedicatedCloudNode
* DedicatedCloudNode `object`: Dedicated cloud node model
  * id `string`: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudNodes/{dedicatedCloudNodeName}
  * location **required** `string`: Azure region
  * name `string`: {dedicatedCloudNodeName}
  * properties [DedicatedCloudNodeProperties](#dedicatedcloudnodeproperties)
  * sku [Sku](#sku)
  * tags [Tags](#tags)
  * type `string`: {resourceProviderNamespace}/{resourceType}

### DedicatedCloudNodeListResponse
* DedicatedCloudNodeListResponse `object`: List of dedicated nodes response model
  * nextLink `string`: Link for next list of DedicatedCloudNode
  * value `array`: Results of the DedicatedCloudNode list
    * items [DedicatedCloudNode](#dedicatedcloudnode)

### DedicatedCloudNodeProperties
* DedicatedCloudNodeProperties `object`: Properties of dedicated cloud node
  * availabilityZoneId **required** `string`: Availability Zone id, e.g. "az1"
  * availabilityZoneName `string`: Availability Zone name, e.g. "Availability Zone 1"
  * cloudRackName `string`: VMWare Cloud Rack Name
  * nodesCount **required** `integer`: count of nodes to create
  * placementGroupId **required** `string`: Placement Group id, e.g. "n1"
  * placementGroupName `string`: Placement Name, e.g. "Placement Group 1"
  * privateCloudId `string`: Private Cloud Id
  * privateCloudName `string`: Resource Pool Name
  * provisioningState `string`: The provisioning status of the resource
  * purchaseId **required** `string`: purchase id
  * skuDescription [SkuDescription](#skudescription)
  * status `string` (values: unused, used): Node status, indicates is private cloud set up on this node or not
  * vmwareClusterName `string`: VMWare Cluster Name

### DedicatedCloudService
* DedicatedCloudService `object`: Dedicated cloud service model
  * id `string`: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudServices/{dedicatedCloudServiceName}
  * location **required** `string`: Azure region
  * name `string`: {dedicatedCloudServiceName}
  * properties [DedicatedCloudServiceProperties](#dedicatedcloudserviceproperties)
  * tags [Tags](#tags)
  * type `string`: {resourceProviderNamespace}/{resourceType}

### DedicatedCloudServiceListResponse
* DedicatedCloudServiceListResponse `object`: List of dedicated cloud services
  * nextLink `string`: Link for next list of DedicatedCloudNode
  * value `array`: Results of the DedicatedCloudService list
    * items [DedicatedCloudService](#dedicatedcloudservice)

### DedicatedCloudServiceProperties
* DedicatedCloudServiceProperties `object`: Properties of dedicated cloud service
  * gatewaySubnet **required** `string`: gateway Subnet for the account. It will collect the subnet address and always treat it as /28
  * isAccountOnboarded `string` (values: notOnBoarded, onBoarded, onBoardingFailed, onBoarding): indicates whether account onboarded or not in a given region
  * nodes `integer`: total nodes purchased
  * serviceURL `string`: link to a service management web portal

### GuestOSCustomization
* GuestOSCustomization `object`: Guest OS Customization properties
  * dnsServers `array`: List of dns servers to use
    * items [IPV4Address](#ipv4address)
  * hostName `string`: Virtual Machine hostname
  * password `string`: Password for login
  * policyId `string`: id of customization policy
  * username `string`: Username for login

### GuestOSNICCustomization
* GuestOSNICCustomization `object`: Guest OS nic customization
  * allocation `string` (values: static, dynamic): IP address allocation method
  * dnsServers `array`: List of dns servers to use
    * items [IPV4Address](#ipv4address)
  * gateway `array`: Gateway addresses assigned to nic
    * items [IPV4Address](#ipv4address)
  * ipAddress [IPV4Address](#ipv4address)
  * mask [IPV4Address](#ipv4address)
  * primaryWinsServer [IPV4Address](#ipv4address)
  * secondaryWinsServer [IPV4Address](#ipv4address)

### IPV4Address
* IPV4Address `string`

### OperationError
* OperationError `object`: Operation error model
  * code `string`: Error's code
  * message `string`: Error's message

### OperationResource
* OperationResource `object`: Operation status response
  * endTime `string`: End time of the operation
  * error [OperationError](#operationerror)
  * id `string`: Operation Id
  * name `string`: Operation ID
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### PatchPayload
* PatchPayload `object`: General patch payload modal
  * tags [Tags](#tags)

### PrivateCloud
* PrivateCloud `object`: Private cloud model
  * id `string`: Azure Id, e.g. "/subscriptions/4da99247-a172-4ed6-8ae9-ebed2d12f839/providers/Microsoft.VMwareCloudSimple/privateClouds/cloud123"
  * location `string`: Location where private cloud created, e.g "westus"
  * name `string`: Private cloud name
  * properties [PrivateCloudProperties](#privatecloudproperties)
  * type `string` (values: Microsoft.VMwareCloudSimple/privateClouds): Azure Resource type

### PrivateCloudList
* PrivateCloudList `object`: List of private clouds
  * nextLink `string`: Link for next list of Private Clouds
  * value `array`: the list of private clouds
    * items [PrivateCloud](#privatecloud)

### PrivateCloudProperties
* PrivateCloudProperties `object`: Properties of private
  * availabilityZoneId `string`: Availability Zone id, e.g. "az1"
  * availabilityZoneName `string`: Availability Zone name, e.g. "Availability Zone 1"
  * clustersNumber `integer`: Number of clusters
  * createdBy `string`: User's emails who created cloud
  * createdOn `string`: When private cloud was created
  * dnsServers `array`: Array of DNS servers
    * items `string`
  * expires `string`: Expiration date of PC
  * nsxType `string`: Nsx Type, e.g. "Advanced"
  * placementGroupId `string`: Placement Group id, e.g. "n1"
  * placementGroupName `string`: Placement Group name
  * privateCloudId `string`: Id of a private cloud
  * resourcePools `array`: The list of Resource Pools
    * items [ResourcePool](#resourcepool)
  * state `string`: Private Cloud state, e.g. "operational"
  * totalCpuCores `integer`: Number of cores
  * totalNodes `integer`: Number of nodes
  * totalRam `integer`: Memory size
  * totalStorage `number`: Disk space in TB
  * type `string`: Virtualization type e.g. "vSphere"
  * vSphereVersion `string`: e.g. "6.5u2"
  * vcenterFqdn `string`: FQDN for vcenter access
  * vcenterRefid `string`: Vcenter ip address
  * virtualMachineTemplates `array`: The list of Virtual Machine Templates
    * items [VirtualMachineTemplate](#virtualmachinetemplate)
  * virtualNetworks `array`: The list of Virtual Networks
    * items [VirtualNetwork](#virtualnetwork)
  * vrOpsEnabled `boolean`: Is Vrops enabled/disabled

### ResourcePool
* ResourcePool `object`: Resource pool model
  * id **required** `string`: resource pool id (privateCloudId:vsphereId)
  * location `string`: Azure region
  * name `string`: {ResourcePoolName}
  * privateCloudId `string`: The Private Cloud Id
  * properties [ResourcePoolProperties](#resourcepoolproperties)
  * type `string`: {resourceProviderNamespace}/{resourceType}

### ResourcePoolProperties
* ResourcePoolProperties `object`: Properties of resource pool
  * fullName `string`: Hierarchical resource pool name

### ResourcePoolsListResponse
* ResourcePoolsListResponse `object`: List of resource pools response model
  * nextLink `string`: Link for next list of ResourcePoolsList
  * value `array`: Results of the Resource pools list
    * items [ResourcePool](#resourcepool)

### Sku
* Sku `object`: The purchase SKU for CloudSimple paid resources
  * capacity `string`: The capacity of the SKU
  * description `string`: dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ...
  * family `string`: If the service has different generations of hardware, for the same SKU, then that can be captured here
  * name **required** `string`: The name of the SKU for VMWare CloudSimple Node
  * tier `string`: The tier of the SKU

### SkuAvailability
* SkuAvailability `object`: SKU availability model
  * dedicatedAvailabilityZoneId `string`: CloudSimple Availability Zone id
  * dedicatedAvailabilityZoneName `string`: CloudSimple Availability Zone Name
  * dedicatedPlacementGroupId `string`: CloudSimple Placement Group Id
  * dedicatedPlacementGroupName `string`: CloudSimple Placement Group name
  * limit **required** `integer`: indicates how many resources of a given SKU is available in a AZ->PG
  * resourceType `string`: resource type e.g. DedicatedCloudNodes
  * skuId `string`: sku id
  * skuName `string`: sku name

### SkuAvailabilityListResponse
* SkuAvailabilityListResponse `object`: List of SKU availabilities
  * nextLink `string`: Link for next list of DedicatedCloudNode
  * value `array`: Results of the DedicatedPlacementGroupSkuAvailability list
    * items [SkuAvailability](#skuavailability)

### SkuDescription
* SkuDescription `object`: The purchase SKU for CloudSimple paid resources
  * id **required** `string`: SKU's id
  * name **required** `string`: SKU's name

### Tags


### Usage
* Usage `object`: Usage model
  * currentValue **required** `integer`: The current usage value
  * limit **required** `integer`: limit of a given sku in a region for a subscription. The maximum permitted value for the usage quota. If there is no limit, this value will be -1
  * name [UsageName](#usagename)
  * unit `string` (values: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond): The usages' unit

### UsageListResponse
* UsageListResponse `object`: List of usages
  * nextLink `string`: Link for next list of DedicatedCloudNode
  * value `array`: The list of usages
    * items [Usage](#usage)

### UsageName
* UsageName `object`: User name model
  * localizedValue `string`: e.g. "Virtual Machines"
  * value `string`: resource type or resource type sku name, e.g. virtualMachines

### VirtualDisk
* VirtualDisk `object`: Virtual disk model
  * controllerId **required** `string`: Disk's Controller id
  * independenceMode **required** `string` (values: persistent, independent_persistent, independent_nonpersistent): Disk's independence mode type
  * totalSize **required** `integer`: Disk's total size
  * virtualDiskId `string`: Disk's id
  * virtualDiskName `string`: Disk's display name

### VirtualDiskController
* VirtualDiskController `object`: Virtual disk controller model
  * id `string`: Controller's id
  * name `string`: The display name of Controller
  * subType `string`: dik controller subtype (VMWARE_PARAVIRTUAL, BUS_PARALLEL, LSI_PARALLEL, LSI_SAS)
  * type `string`: disk controller type (SCSI)

### VirtualMachine
* VirtualMachine `object`: Virtual machine model
  * id `string`: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/virtualMachines/{virtualMachineName}
  * location **required** `string`: Azure region
  * name `string`: {virtualMachineName}
  * properties [VirtualMachineProperties](#virtualmachineproperties)
  * tags [Tags](#tags)
  * type `string`: {resourceProviderNamespace}/{resourceType}

### VirtualMachineListResponse
* VirtualMachineListResponse `object`: List of virtual machines
  * nextLink `string`: Link for next list of VirtualMachines
  * value `array`: Results of the VirtualMachine list
    * items [VirtualMachine](#virtualmachine)

### VirtualMachineProperties
* VirtualMachineProperties `object`: Properties of virtual machine
  * amountOfRam **required** `integer`: The amount of memory
  * controllers `array`: The list of Virtual Disks' Controllers
    * items [VirtualDiskController](#virtualdiskcontroller)
  * customization [GuestOSCustomization](#guestoscustomization)
  * disks `array`: The list of Virtual Disks
    * items [VirtualDisk](#virtualdisk)
  * dnsname `string`: The DNS name of Virtual Machine in VCenter
  * exposeToGuestVM `boolean`: Expose Guest OS or not
  * folder `string`: The path to virtual machine folder in VCenter
  * guestOS `string`: The name of Guest OS
  * guestOSType `string` (values: linux, windows, other): The Guest OS type
  * nics `array`: The list of Virtual NICs
    * items [VirtualNic](#virtualnic)
  * numberOfCores **required** `integer`: The number of CPU cores
  * password `string`: Password for login. Deprecated - use customization property
  * privateCloudId **required** `string`: Private Cloud Id
  * provisioningState `string`: The provisioning status of the resource
  * publicIP `string`: The public ip of Virtual Machine
  * resourcePool [ResourcePool](#resourcepool)
  * status `string` (values: running, suspended, poweredoff, updating, deallocating, deleting): The status of Virtual machine
  * templateId `string`: Virtual Machine Template Id
  * username `string`: Username for login. Deprecated - use customization property
  * vSphereNetworks `array`: The list of Virtual VSphere Networks
    * items `string`
  * vmId `string`: The internal id of Virtual Machine in VCenter
  * vmwaretools `string`: VMware tools version

### VirtualMachineStopMode
* VirtualMachineStopMode `object`: List of virtual machine stop modes
  * mode `string` (values: reboot, suspend, shutdown, poweroff): mode indicates a type of stop operation - reboot, suspend, shutdown or power-off

### VirtualMachineTemplate
* VirtualMachineTemplate `object`: Virtual machine template model
  * id `string`: virtual machine template id (privateCloudId:vsphereId)
  * location `string`: Azure region
  * name `string`: {virtualMachineTemplateName}
  * properties [VirtualMachineTemplateProperties](#virtualmachinetemplateproperties)
  * type `string`: {resourceProviderNamespace}/{resourceType}

### VirtualMachineTemplateListResponse
* VirtualMachineTemplateListResponse `object`: List of virtual machine templates
  * nextLink `string`: Link for next list of VirtualMachineTemplate
  * value `array`: Results of the VM template list
    * items [VirtualMachineTemplate](#virtualmachinetemplate)

### VirtualMachineTemplateProperties
* VirtualMachineTemplateProperties `object`: Properties of virtual machine template
  * amountOfRam `integer`: The amount of memory
  * controllers `array`: The list of Virtual Disk Controllers
    * items [VirtualDiskController](#virtualdiskcontroller)
  * description `string`: The description of Virtual Machine Template
  * disks `array`: The list of Virtual Disks
    * items [VirtualDisk](#virtualdisk)
  * exposeToGuestVM `boolean`: Expose Guest OS or not
  * guestOS `string`: The Guest OS
  * guestOSType `string`: The Guest OS types
  * nics `array`: The list of Virtual NICs
    * items [VirtualNic](#virtualnic)
  * numberOfCores `integer`: The number of CPU cores
  * path `string`: path to folder
  * privateCloudId **required** `string`: The Private Cloud Id
  * vSphereNetworks `array`: The list of VSphere networks
    * items `string`
  * vSphereTags `array`: The tags from VSphere
    * items `string`
  * vmwaretools `string`: The VMware tools version

### VirtualNetwork
* VirtualNetwork `object`: Virtual network model
  * assignable `boolean`: can be used in vm creation/deletion
  * id **required** `string`: virtual network id (privateCloudId:vsphereId)
  * location `string`: Azure region
  * name `string`: {VirtualNetworkName}
  * properties [VirtualNetworkProperties](#virtualnetworkproperties)
  * type `string`: {resourceProviderNamespace}/{resourceType}

### VirtualNetworkListResponse
* VirtualNetworkListResponse `object`: List of virtual networks
  * nextLink `string`: Link for next list of VirtualNetwork
  * value `array`: Results of the VirtualNetwork list
    * items [VirtualNetwork](#virtualnetwork)

### VirtualNetworkProperties
* VirtualNetworkProperties `object`: Properties of virtual network
  * privateCloudId `string`: The Private Cloud id

### VirtualNic
* VirtualNic `object`: Virtual NIC model
  * customization [GuestOSNICCustomization](#guestosniccustomization)
  * ipAddresses `array`: NIC ip address
    * items `string`
  * macAddress `string`: NIC MAC address
  * network **required** [VirtualNetwork](#virtualnetwork)
  * nicType **required** `string` (values: E1000, E1000E, PCNET32, VMXNET, VMXNET2, VMXNET3): NIC type
  * powerOnBoot `boolean`: Is NIC powered on/off on boot
  * virtualNicId `string`: NIC id
  * virtualNicName `string`: NIC name


