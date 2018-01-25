# @datafire/azure_arm_compute

Client library for ComputeManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_compute
```
```js
let azure_arm_compute = require('@datafire/azure_arm_compute').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_compute.VirtualMachineImages_ListPublishers({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Compute Management Client.

## Actions

### VirtualMachineImages_ListPublishers
Gets a list of virtual machine image publishers for the specified Azure location.


```js
azure_arm_compute.VirtualMachineImages_ListPublishers({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineImageResource](#virtualmachineimageresource)

### VirtualMachineExtensionImages_ListTypes
Gets a list of virtual machine extension image types.


```js
azure_arm_compute.VirtualMachineExtensionImages_ListTypes({
  "location": "",
  "publisherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * publisherName **required** `string`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineExtensionImage](#virtualmachineextensionimage)

### VirtualMachineExtensionImages_ListVersions
Gets a list of virtual machine extension image versions.


```js
azure_arm_compute.VirtualMachineExtensionImages_ListVersions({
  "location": "",
  "publisherName": "",
  "type": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * publisherName **required** `string`
  * type **required** `string`
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $orderby `string`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineExtensionImage](#virtualmachineextensionimage)

### VirtualMachineExtensionImages_Get
Gets a virtual machine extension image.


```js
azure_arm_compute.VirtualMachineExtensionImages_Get({
  "location": "",
  "publisherName": "",
  "type": "",
  "version": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * publisherName **required** `string`
  * type **required** `string`
  * version **required** `string`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineExtensionImage](#virtualmachineextensionimage)

### VirtualMachineImages_ListOffers
Gets a list of virtual machine image offers for the specified location and publisher.


```js
azure_arm_compute.VirtualMachineImages_ListOffers({
  "location": "",
  "publisherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
  * publisherName **required** `string`: A valid image publisher.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineImageResource](#virtualmachineimageresource)

### VirtualMachineImages_ListSkus
Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.


```js
azure_arm_compute.VirtualMachineImages_ListSkus({
  "location": "",
  "publisherName": "",
  "offer": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
  * publisherName **required** `string`: A valid image publisher.
  * offer **required** `string`: A valid image publisher offer.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineImageResource](#virtualmachineimageresource)

### VirtualMachineImages_List
Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.


```js
azure_arm_compute.VirtualMachineImages_List({
  "location": "",
  "publisherName": "",
  "offer": "",
  "skus": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
  * publisherName **required** `string`: A valid image publisher.
  * offer **required** `string`: A valid image publisher offer.
  * skus **required** `string`: A valid image SKU.
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`
  * $orderby `string`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineImageResource](#virtualmachineimageresource)

### VirtualMachineImages_Get
Gets a virtual machine image.


```js
azure_arm_compute.VirtualMachineImages_Get({
  "location": "",
  "publisherName": "",
  "offer": "",
  "skus": "",
  "version": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
  * publisherName **required** `string`: A valid image publisher.
  * offer **required** `string`: A valid image publisher offer.
  * skus **required** `string`: A valid image SKU.
  * version **required** `string`: A valid image SKU version.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineImage](#virtualmachineimage)

### Usage_List
Gets, for the specified location, the current compute resource usage information as well as the limits for compute resources under the subscription.


```js
azure_arm_compute.Usage_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location for which resource usage is queried.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ListUsagesResult](#listusagesresult)

### VirtualMachineSizes_List
Lists all available virtual machine sizes for a subscription in a location.


```js
azure_arm_compute.VirtualMachineSizes_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location upon which virtual-machine-sizes is queried.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineSizeListResult](#virtualmachinesizelistresult)

### VirtualMachineScaleSets_ListAll
Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is not null to fetch all the VM Scale Sets.


```js
azure_arm_compute.VirtualMachineScaleSets_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetListWithLinkResult](#virtualmachinescalesetlistwithlinkresult)

### VirtualMachines_ListAll
Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines.


```js
azure_arm_compute.VirtualMachines_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineListResult](#virtualmachinelistresult)

### AvailabilitySets_List
Lists all availability sets in a resource group.


```js
azure_arm_compute.AvailabilitySets_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailabilitySetListResult](#availabilitysetlistresult)

### AvailabilitySets_Delete
Delete an availability set.


```js
azure_arm_compute.AvailabilitySets_Delete({
  "resourceGroupName": "",
  "availabilitySetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * availabilitySetName **required** `string`: The name of the availability set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### AvailabilitySets_Get
Retrieves information about an availability set.


```js
azure_arm_compute.AvailabilitySets_Get({
  "resourceGroupName": "",
  "availabilitySetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * availabilitySetName **required** `string`: The name of the availability set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailabilitySet](#availabilityset)

### AvailabilitySets_ListAvailableSizes
Lists all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.


```js
azure_arm_compute.AvailabilitySets_ListAvailableSizes({
  "resourceGroupName": "",
  "availabilitySetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * availabilitySetName **required** `string`: The name of the availability set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineSizeListResult](#virtualmachinesizelistresult)

### AvailabilitySets_CreateOrUpdate
Create or update an availability set.


```js
azure_arm_compute.AvailabilitySets_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the availability set.
  * parameters **required** [AvailabilitySet](#availabilityset)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailabilitySet](#availabilityset)

### VirtualMachineScaleSets_List
Gets a list of all VM scale sets under a resource group.


```js
azure_arm_compute.VirtualMachineScaleSets_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetListResult](#virtualmachinescalesetlistresult)

### VirtualMachineScaleSets_CreateOrUpdate
Create or update a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the VM scale set to create or update.
  * parameters **required** [VirtualMachineScaleSet](#virtualmachinescaleset)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSet](#virtualmachinescaleset)

### VirtualMachineScaleSetVMs_List
Gets a list of all virtual machines in a VM scale sets.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_List({
  "resourceGroupName": "",
  "virtualMachineScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * virtualMachineScaleSetName **required** `string`: The name of the VM scale set.
  * $filter `string`: The filter to apply to the operation.
  * $select `string`: The list parameters.
  * $expand `string`: The expand expression to apply to the operation.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetVMListResult](#virtualmachinescalesetvmlistresult)

### VirtualMachineScaleSets_Delete
Deletes a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_Delete({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_Get
Display information about a virtual machine scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_Get({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSet](#virtualmachinescaleset)

### VirtualMachineScaleSets_Deallocate
Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.


```js
azure_arm_compute.VirtualMachineScaleSets_Deallocate({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * vmInstanceIDs [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_DeleteInstances
Deletes virtual machines in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_DeleteInstances({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "vmInstanceIDs": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * vmInstanceIDs **required** [VirtualMachineScaleSetVMInstanceRequiredIDs](#virtualmachinescalesetvminstancerequiredids)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_GetInstanceView
Gets the status of a VM scale set instance.


```js
azure_arm_compute.VirtualMachineScaleSets_GetInstanceView({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetInstanceView](#virtualmachinescalesetinstanceview)

### VirtualMachineScaleSets_UpdateInstances
Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.


```js
azure_arm_compute.VirtualMachineScaleSets_UpdateInstances({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "vmInstanceIDs": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * vmInstanceIDs **required** [VirtualMachineScaleSetVMInstanceRequiredIDs](#virtualmachinescalesetvminstancerequiredids)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_PowerOff
Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.


```js
azure_arm_compute.VirtualMachineScaleSets_PowerOff({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * vmInstanceIDs [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_Reimage
Reimages (upgrade the operating system) one or more virtual machines in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_Reimage({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_Restart
Restarts one or more virtual machines in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_Restart({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * vmInstanceIDs [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSets_ListSkus
Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.


```js
azure_arm_compute.VirtualMachineScaleSets_ListSkus({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetListSkusResult](#virtualmachinescalesetlistskusresult)

### VirtualMachineScaleSets_Start
Starts one or more virtual machines in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSets_Start({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * vmInstanceIDs [VirtualMachineScaleSetVMInstanceIDs](#virtualmachinescalesetvminstanceids)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetVMs_Delete
Deletes a virtual machine from a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_Delete({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetVMs_Get
Gets a virtual machine from a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_Get({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetVM](#virtualmachinescalesetvm)

### VirtualMachineScaleSetVMs_Deallocate
Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_Deallocate({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetVMs_GetInstanceView
Gets the status of a virtual machine from a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_GetInstanceView({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetVMInstanceView](#virtualmachinescalesetvminstanceview)

### VirtualMachineScaleSetVMs_PowerOff
Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_PowerOff({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetVMs_Reimage
Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_Reimage({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetVMs_Restart
Restarts a virtual machine in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_Restart({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetVMs_Start
Starts a virtual machine in a VM scale set.


```js
azure_arm_compute.VirtualMachineScaleSetVMs_Start({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_List
Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.


```js
azure_arm_compute.VirtualMachines_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineListResult](#virtualmachinelistresult)

### VirtualMachines_Delete
The operation to delete a virtual machine.


```js
azure_arm_compute.VirtualMachines_Delete({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_Get
Retrieves information about the model view or the instance view of a virtual machine.


```js
azure_arm_compute.VirtualMachines_Get({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * $expand `string` (values: instanceView): The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachine](#virtualmachine)

### VirtualMachines_CreateOrUpdate
The operation to create or update a virtual machine.


```js
azure_arm_compute.VirtualMachines_CreateOrUpdate({
  "resourceGroupName": "",
  "vmName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * parameters **required** [VirtualMachine](#virtualmachine)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachine](#virtualmachine)

### VirtualMachines_Capture
Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to create similar VMs.


```js
azure_arm_compute.VirtualMachines_Capture({
  "resourceGroupName": "",
  "vmName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * parameters **required** [VirtualMachineCaptureParameters](#virtualmachinecaptureparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineCaptureResult](#virtualmachinecaptureresult)

### VirtualMachines_Deallocate
Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses.


```js
azure_arm_compute.VirtualMachines_Deallocate({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineExtensions_Delete
The operation to delete the extension.


```js
azure_arm_compute.VirtualMachineExtensions_Delete({
  "resourceGroupName": "",
  "vmName": "",
  "vmExtensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine where the extension should be deleted.
  * vmExtensionName **required** `string`: The name of the virtual machine extension.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineExtensions_Get
The operation to get the extension.


```js
azure_arm_compute.VirtualMachineExtensions_Get({
  "resourceGroupName": "",
  "vmName": "",
  "vmExtensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine containing the extension.
  * vmExtensionName **required** `string`: The name of the virtual machine extension.
  * $expand `string`: The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineExtension](#virtualmachineextension)

### VirtualMachineExtensions_CreateOrUpdate
The operation to create or update the extension.


```js
azure_arm_compute.VirtualMachineExtensions_CreateOrUpdate({
  "resourceGroupName": "",
  "vmName": "",
  "vmExtensionName": "",
  "extensionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine where the extension should be create or updated.
  * vmExtensionName **required** `string`: The name of the virtual machine extension.
  * extensionParameters **required** [VirtualMachineExtension](#virtualmachineextension)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineExtension](#virtualmachineextension)

### VirtualMachines_Generalize
Sets the state of the virtual machine to generalized.


```js
azure_arm_compute.VirtualMachines_Generalize({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_PowerOff
The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the same provisioned resources. You are still charged for this virtual machine.


```js
azure_arm_compute.VirtualMachines_PowerOff({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_Redeploy
The operation to redeploy a virtual machine.


```js
azure_arm_compute.VirtualMachines_Redeploy({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_Restart
The operation to restart a virtual machine.


```js
azure_arm_compute.VirtualMachines_Restart({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_Start
The operation to start a virtual machine.


```js
azure_arm_compute.VirtualMachines_Start({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachines_ListAvailableSizes
Lists all available virtual machine sizes to which the specified virtual machine can be resized.


```js
azure_arm_compute.VirtualMachines_ListAvailableSizes({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineSizeListResult](#virtualmachinesizelistresult)



## Definitions

### AdditionalUnattendContent
* AdditionalUnattendContent `object`: Additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is a applied.
  * componentName `string` (values: Microsoft-Windows-Shell-Setup): The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
  * content `string`: XML formatted content that is added to the unattend.xml file in the specified pass and component. The XML must be less than 4 KB and must include the root element for the setting or feature that is being inserted.
  * passName `string` (values: oobeSystem): The pass name. Currently, the only allowable value is oobeSystem.
  * settingName `string` (values: AutoLogon, FirstLogonCommands): Setting name (e.g. FirstLogonCommands, AutoLogon )

### ApiEntityReference
* ApiEntityReference `object`: The API entity reference.
  * id `string`: The ARM resource id in the form of /subscriptions/{SubcriptionId}/resourceGroups/{ResourceGroupName}/...

### ApiError
* ApiError `object`: Api error.
  * code `string`: The error code.
  * details `array`: The Api error details
    * items [ApiErrorBase](#apierrorbase)
  * innererror [InnerError](#innererror)
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### ApiErrorBase
* ApiErrorBase `object`: Api error base.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### AvailabilitySet
* AvailabilitySet `object`: Create or update availability set parameters.
  * properties [AvailabilitySetProperties](#availabilitysetproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### AvailabilitySetListResult
* AvailabilitySetListResult `object`: The List Availability Set operation response.
  * value `array`: The list of availability sets
    * items [AvailabilitySet](#availabilityset)

### AvailabilitySetProperties
* AvailabilitySetProperties `object`: The instance view of a resource.
  * platformFaultDomainCount `integer`: Fault Domain count.
  * platformUpdateDomainCount `integer`: Update Domain count.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * virtualMachines `array`: A list of references to all virtual machines in the availability set.
    * items [SubResource](#subresource)

### BootDiagnostics
* BootDiagnostics `object`: Describes Boot Diagnostics.
  * enabled `boolean`: Whether boot diagnostics should be enabled on the Virtual Machine.
  * storageUri `string`: URI of the storage account to use for placing the console output and screenshot.

### BootDiagnosticsInstanceView
* BootDiagnosticsInstanceView `object`: The instance view of a virtual machine boot diagnostics.
  * consoleScreenshotBlobUri `string`: The console screenshot blob URI.
  * serialConsoleLogBlobUri `string`: The Linux serial console log blob Uri.

### Caching
* Caching `string` (values: None, ReadOnly, ReadWrite): The caching type.

### ComputeLongRunningOperationProperties
* ComputeLongRunningOperationProperties `object`: Compute-specific operation properties, including output
  * output `object`: Operation output data (raw JSON)

### CreateOption
* CreateOption `string` (values: fromImage, empty, attach): The create option.

### DataDisk
* DataDisk `object`: Describes a data disk.
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * diskSizeGB `integer`: The initial disk size in GB for blank data disks, and the new desired size for resizing existing OS and data disks.
  * image [VirtualHardDisk](#virtualharddisk)
  * lun **required** `integer`: The logical unit number.
  * name **required** `string`: The disk name.
  * vhd **required** [VirtualHardDisk](#virtualharddisk)

### DataDiskImage
* DataDiskImage `object`: Contains the data disk images information.
  * lun `integer`: The LUN number for a data disk. This value is used to identify data disk image inside the VMImage and therefore it must be unique for each data disk.

### DiagnosticsProfile
* DiagnosticsProfile `object`: Describes a diagnostics profile.
  * bootDiagnostics [BootDiagnostics](#bootdiagnostics)

### DiskEncryptionSettings
* DiskEncryptionSettings `object`: Describes a Encryption Settings for a Disk
  * diskEncryptionKey [KeyVaultSecretReference](#keyvaultsecretreference)
  * enabled `boolean`: Specifies whether disk encryption should be enabled on the virtual machine.
  * keyEncryptionKey [KeyVaultKeyReference](#keyvaultkeyreference)

### DiskInstanceView
* DiskInstanceView `object`: The instance view of the disk.
  * name `string`: The disk name.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)

### HardwareProfile
* HardwareProfile `object`: Describes a hardware profile.
  * vmSize `string` (values: Basic_A0, Basic_A1, Basic_A2, Basic_A3, Basic_A4, Standard_A0, Standard_A1, Standard_A2, Standard_A3, Standard_A4, Standard_A5, Standard_A6, Standard_A7, Standard_A8, Standard_A9, Standard_A10, Standard_A11, Standard_D1, Standard_D2, Standard_D3, Standard_D4, Standard_D11, Standard_D12, Standard_D13, Standard_D14, Standard_D1_v2, Standard_D2_v2, Standard_D3_v2, Standard_D4_v2, Standard_D5_v2, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_D15_v2, Standard_DS1, Standard_DS2, Standard_DS3, Standard_DS4, Standard_DS11, Standard_DS12, Standard_DS13, Standard_DS14, Standard_DS1_v2, Standard_DS2_v2, Standard_DS3_v2, Standard_DS4_v2, Standard_DS5_v2, Standard_DS11_v2, Standard_DS12_v2, Standard_DS13_v2, Standard_DS14_v2, Standard_DS15_v2, Standard_G1, Standard_G2, Standard_G3, Standard_G4, Standard_G5, Standard_GS1, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS5): The virtual machine size name.

### ImageReference
* ImageReference `object`: The image reference.
  * offer `string`: The image offer.
  * publisher `string`: The image publisher.
  * sku `string`: The image SKU.
  * version `string`: The image version. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor and Build are decimal numbers. Specify 'latest' to use the latest version of the image.

### InnerError
* InnerError `object`: Inner error details.
  * errordetail `string`: The internal error message or exception dump.
  * exceptiontype `string`: The exception type.

### InstanceViewStatus
* InstanceViewStatus `object`: Instance view status.
  * code `string`: The status code.
  * displayStatus `string`: The short localizable label for the status.
  * level `string` (values: Info, Warning, Error): The level code.
  * message `string`: The detailed status message, including for alerts and error messages.
  * time `string`: The time of the status.

### KeyVaultKeyReference
* KeyVaultKeyReference `object`: Describes a reference to Key Vault Key
  * keyUrl **required** `string`: The URL referencing a key in a Key Vault.
  * sourceVault **required** [SubResource](#subresource)

### KeyVaultSecretReference
* KeyVaultSecretReference `object`: Describes a reference to Key Vault Secret
  * secretUrl **required** `string`: The URL referencing a secret in a Key Vault.
  * sourceVault **required** [SubResource](#subresource)

### LinuxConfiguration
* LinuxConfiguration `object`: Describes Windows configuration of the OS Profile.
  * disablePasswordAuthentication `boolean`: Specifies whether password authentication should be disabled.
  * ssh [SshConfiguration](#sshconfiguration)

### ListUsagesResult
* ListUsagesResult `object`: The List Usages operation response.
  * nextLink `string`: The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information.
  * value **required** `array`: The list of compute resource usages.
    * items [Usage](#usage)

### NetworkInterfaceReference
* NetworkInterfaceReference `object`: Describes a network interface reference.
  * properties [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties)
  * id `string`: Resource Id

### NetworkInterfaceReferenceProperties
* NetworkInterfaceReferenceProperties `object`: Describes a network interface reference properties.
  * primary `boolean`: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

### NetworkProfile
* NetworkProfile `object`: Describes a network profile.
  * networkInterfaces `array`: Specifies the list of resource IDs for the network interfaces associated with the virtual machine.
    * items [NetworkInterfaceReference](#networkinterfacereference)

### OSDisk
* OSDisk `object`: Describes an Operating System disk.
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * diskSizeGB `integer`: The initial disk size, in GB, for blank data disks, and the new desired size for resizing existing OS and data disks.
  * encryptionSettings [DiskEncryptionSettings](#diskencryptionsettings)
  * image [VirtualHardDisk](#virtualharddisk)
  * name **required** `string`: The disk name.
  * osType `string` (values: Windows, Linux): The Operating System type.
  * vhd **required** [VirtualHardDisk](#virtualharddisk)

### OSDiskImage
* OSDiskImage `object`: Contains the os disk image information.
  * operatingSystem **required** `string` (values: Windows, Linux): The operating system of the osDiskImage.

### OSProfile
* OSProfile `object`: Describes an OS profile.
  * adminPassword `string`: Specifies the password of the administrator account.
  * adminUsername `string`: Specifies the name of the administrator account.
  * computerName `string`: Specifies the host OS name of the virtual machine.
  * customData `string`: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes
  * linuxConfiguration [LinuxConfiguration](#linuxconfiguration)
  * secrets `array`: The list of certificates for addition to the VM.
    * items [VaultSecretGroup](#vaultsecretgroup)
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### OperationStatusResponse
* OperationStatusResponse `object`: Operation status response
  * endTime `string`: End time of the operation
  * error [ApiError](#apierror)
  * name `string`: Operation ID
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### Plan
* Plan `object`: Plan for the resource.
  * name `string`: The plan ID.
  * product `string`: The offer ID.
  * promotionCode `string`: The promotion code.
  * publisher `string`: The publisher ID.

### PurchasePlan
* PurchasePlan `object`: Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
  * name **required** `string`: The plan ID.
  * product **required** `string`: The product ID.
  * publisher **required** `string`: The publisher ID.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Sku
* Sku `object`: Describes a virtual machine scale set sku.
  * capacity `integer`: The sku capacity.
  * name `string`: The sku name.
  * tier `string`: The sku tier.

### SshConfiguration
* SshConfiguration `object`: SSH configuration for Linux based VMs running on Azure
  * publicKeys `array`: The list of SSH public keys used to authenticate with linux based VMs.
    * items [SshPublicKey](#sshpublickey)

### SshPublicKey
* SshPublicKey `object`: Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
  * keyData `string`: Certificate public key used to authenticate to the VM through SSH. The certificate must be in Pem format with or without headers.
  * path `string`: Specifies the full path on the created VM where SSH public key is stored. If the file already exists, the specified key is appended to the file.

### StorageProfile
* StorageProfile `object`: Describes a storage profile.
  * dataDisks `array`: The data disks.
    * items [DataDisk](#datadisk)
  * imageReference [ImageReference](#imagereference)
  * osDisk [OSDisk](#osdisk)

### SubResource
* SubResource `object`
  * id `string`: Resource Id

### UpgradePolicy
* UpgradePolicy `object`: Describes an upgrade policy - automatic or manual.
  * mode `string` (values: Automatic, Manual): The upgrade mode.

### Usage
* Usage `object`: Describes Compute Resource Usage.
  * currentValue **required** `integer`: The current usage of the resource.
  * limit **required** `integer`: The maximum permitted usage of the resource.
  * name **required** [UsageName](#usagename)
  * unit **required** `string` (values: Count): An enum describing the unit of usage measurement.

### UsageName
* UsageName `object`: The Usage Names.
  * localizedValue `string`: The localized name of the resource.
  * value `string`: The name of the resource.

### VaultCertificate
* VaultCertificate `object`: Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
  * certificateStore `string`: The Certificate store in LocalMachine to add the certificate to on Windows, leave empty on Linux.
  * certificateUrl `string`: The URL referencing a secret in a Key Vault which contains a properly formatted certificate.

### VaultSecretGroup
* VaultSecretGroup `object`: Describes a set of certificates which are all in the same Key Vault.
  * sourceVault [SubResource](#subresource)
  * vaultCertificates `array`: The list of key vault references in SourceVault which contain certificates.
    * items [VaultCertificate](#vaultcertificate)

### VirtualHardDisk
* VirtualHardDisk `object`: Describes the uri of a disk.
  * uri `string`: The virtual hard disk's URI. Must be a valid URI to a virtual hard disk.

### VirtualMachine
* VirtualMachine `object`: Describes a Virtual Machine.
  * identity [VirtualMachineIdentity](#virtualmachineidentity)
  * plan [Plan](#plan)
  * properties [VirtualMachineProperties](#virtualmachineproperties)
  * resources `array`: The virtual machine child extension resources.
    * items [VirtualMachineExtension](#virtualmachineextension)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualMachineAgentInstanceView
* VirtualMachineAgentInstanceView `object`: The instance view of the VM Agent running on the virtual machine.
  * extensionHandlers `array`: The virtual machine extension handler instance view.
    * items [VirtualMachineExtensionHandlerInstanceView](#virtualmachineextensionhandlerinstanceview)
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * vmAgentVersion `string`: The VM Agent full version.

### VirtualMachineCaptureParameters
* VirtualMachineCaptureParameters `object`: Capture Virtual Machine parameters.
  * destinationContainerName **required** `string`: The destination container name.
  * overwriteVhds **required** `boolean`: Specifies whether to overwrite the destination virtual hard disk, in case of conflict.
  * vhdPrefix **required** `string`: The captured virtual hard disk's name prefix.

### VirtualMachineCaptureResult
* VirtualMachineCaptureResult `object`: Resource Id.
  * properties [VirtualMachineCaptureResultProperties](#virtualmachinecaptureresultproperties)
  * id `string`: Resource Id

### VirtualMachineCaptureResultProperties
* VirtualMachineCaptureResultProperties `object`: Compute-specific operation properties, including output
  * output `object`: Operation output data (raw JSON)

### VirtualMachineExtension
* VirtualMachineExtension `object`: Describes a Virtual Machine Extension.
  * properties [VirtualMachineExtensionProperties](#virtualmachineextensionproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualMachineExtensionHandlerInstanceView
* VirtualMachineExtensionHandlerInstanceView `object`: The instance view of a virtual machine extension handler.
  * status [InstanceViewStatus](#instanceviewstatus)
  * type `string`: Full type of the extension handler which includes both publisher and type.
  * typeHandlerVersion `string`: The type version of the extension handler.

### VirtualMachineExtensionImage
* VirtualMachineExtensionImage `object`: Describes a Virtual Machine Extension Image.
  * properties [VirtualMachineExtensionImageProperties](#virtualmachineextensionimageproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualMachineExtensionImageProperties
* VirtualMachineExtensionImageProperties `object`: Describes the properties of a Virtual Machine Extension Image.
  * computeRole **required** `string`: The type of role (IaaS or PaaS) this extension supports.
  * handlerSchema **required** `string`: The schema defined by publisher, where extension consumers should provide settings in a matching schema.
  * operatingSystem **required** `string`: The operating system this extension supports.
  * supportsMultipleExtensions `boolean`: Whether the handler can support multiple extensions.
  * vmScaleSetEnabled `boolean`: Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS.

### VirtualMachineExtensionInstanceView
* VirtualMachineExtensionInstanceView `object`: The instance view of a virtual machine extension.
  * name `string`: The virtual machine extension name.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * substatuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * type `string`: The full type of the extension handler which includes both publisher and type.
  * typeHandlerVersion `string`: The type version of the extension handler.

### VirtualMachineExtensionProperties
* VirtualMachineExtensionProperties `object`: Describes the properties of a Virtual Machine Extension.
  * autoUpgradeMinorVersion `boolean`: Whether the extension handler should be automatically upgraded across minor versions.
  * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
  * instanceView [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
  * protectedSettings `object`: Json formatted protected settings for the extension.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: The type of the extension handler.
  * typeHandlerVersion `string`: The type version of the extension handler.

### VirtualMachineIdentity
* VirtualMachineIdentity `object`: Identity for the virtual machine.
  * principalId `string`: The principal id of virtual machine identity.
  * tenantId `string`: The tenant id associated with the virtual machine.
  * type `string` (values: SystemAssigned): The type of identity used for the virtual machine. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

### VirtualMachineImage
* VirtualMachineImage `object`: Describes a Virtual Machine Image.
  * properties [VirtualMachineImageProperties](#virtualmachineimageproperties)
  * location **required** `string`: The supported Azure location of the resource.
  * name **required** `string`: The name of the resource.
  * tags `object`: The tags attached to the resource.
  * id `string`: Resource Id

### VirtualMachineImageProperties
* VirtualMachineImageProperties `object`: Describes the properties of a Virtual Machine Image.
  * dataDiskImages `array`
    * items [DataDiskImage](#datadiskimage)
  * osDiskImage [OSDiskImage](#osdiskimage)
  * plan [PurchasePlan](#purchaseplan)

### VirtualMachineImageResource
* VirtualMachineImageResource `object`: Virtual machine image resource information.
  * location **required** `string`: The supported Azure location of the resource.
  * name **required** `string`: The name of the resource.
  * tags `object`: The tags attached to the resource.
  * id `string`: Resource Id

### VirtualMachineInstanceView
* VirtualMachineInstanceView `object`: The instance view of a virtual machine.
  * bootDiagnostics [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
  * disks `array`: The virtual machine disk information.
    * items [DiskInstanceView](#diskinstanceview)
  * extensions `array`: The extensions information.
    * items [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
  * platformFaultDomain `integer`: Specifies the fault domain of the virtual machine.
  * platformUpdateDomain `integer`: Specifies the update domain of the virtual machine.
  * rdpThumbPrint `string`: The Remote desktop certificate thumbprint.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * vmAgent [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)

### VirtualMachineListResult
* VirtualMachineListResult `object`: The List Virtual Machine operation response.
  * nextLink `string`: The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines.
  * value **required** `array`: The list of virtual machines.
    * items [VirtualMachine](#virtualmachine)

### VirtualMachineProperties
* VirtualMachineProperties `object`: Describes the properties of a Virtual Machine.
  * availabilitySet [SubResource](#subresource)
  * diagnosticsProfile [DiagnosticsProfile](#diagnosticsprofile)
  * hardwareProfile [HardwareProfile](#hardwareprofile)
  * instanceView [VirtualMachineInstanceView](#virtualmachineinstanceview)
  * licenseType `string`: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system.
  * networkProfile [NetworkProfile](#networkprofile)
  * osProfile [OSProfile](#osprofile)
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * storageProfile [StorageProfile](#storageprofile)
  * vmId `string`: Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.

### VirtualMachineScaleSet
* VirtualMachineScaleSet `object`: Describes a Virtual Machine Scale Set.
  * identity [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity)
  * properties [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties)
  * sku [Sku](#sku)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualMachineScaleSetExtension
* VirtualMachineScaleSetExtension `object`: Describes a Virtual Machine Scale Set Extension.
  * name `string`: The name of the extension.
  * properties [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetExtensionProfile
* VirtualMachineScaleSetExtensionProfile `object`: Describes a virtual machine scale set extension profile.
  * extensions `array`: The virtual machine scale set child extension resources.
    * items [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)

### VirtualMachineScaleSetExtensionProperties
* VirtualMachineScaleSetExtensionProperties `object`: Describes the properties of a Virtual Machine Scale Set Extension.
  * autoUpgradeMinorVersion `boolean`: Whether the extension handler should be automatically upgraded across minor versions.
  * protectedSettings `object`: Json formatted protected settings for the extension.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: The type of the extension handler.
  * typeHandlerVersion `string`: The type version of the extension handler.

### VirtualMachineScaleSetIPConfiguration
* VirtualMachineScaleSetIPConfiguration `object`: Describes a virtual machine scale set network profile's IP configuration.
  * name **required** `string`: The IP configuration name.
  * properties [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetIPConfigurationProperties
* VirtualMachineScaleSetIPConfigurationProperties `object`: Describes a virtual machine scale set network profile's IP configuration properties.
  * applicationGatewayBackendAddressPools `array`: The application gateway backend address pools.
    * items [SubResource](#subresource)
  * loadBalancerBackendAddressPools `array`: The load balancer backend address pools.
    * items [SubResource](#subresource)
  * loadBalancerInboundNatPools `array`: The load balancer inbound nat pools.
    * items [SubResource](#subresource)
  * subnet **required** [ApiEntityReference](#apientityreference)

### VirtualMachineScaleSetIdentity
* VirtualMachineScaleSetIdentity `object`: Identity for the virtual machine scale set.
  * principalId `string`: The principal id of virtual machine scale set identity.
  * tenantId `string`: The tenant id associated with the virtual machine scale set.
  * type `string` (values: SystemAssigned): The type of identity used for the virtual machine scale set. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

### VirtualMachineScaleSetInstanceView
* VirtualMachineScaleSetInstanceView `object`: The instance view of a virtual machine scale set.
  * extensions `array`: The extensions information.
    * items [VirtualMachineScaleSetVMExtensionsSummary](#virtualmachinescalesetvmextensionssummary)
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * virtualMachine [VirtualMachineScaleSetInstanceViewStatusesSummary](#virtualmachinescalesetinstanceviewstatusessummary)

### VirtualMachineScaleSetInstanceViewStatusesSummary
* VirtualMachineScaleSetInstanceViewStatusesSummary `object`: Instance view statuses summary for virtual machines of a virtual machine scale set.
  * statusesSummary `array`: The extensions information.
    * items [VirtualMachineStatusCodeCount](#virtualmachinestatuscodecount)

### VirtualMachineScaleSetListResult
* VirtualMachineScaleSetListResult `object`: The List Virtual Machine operation response.
  * nextLink `string`: The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of VMSS.
  * value **required** `array`: The list of virtual machine scale sets.
    * items [VirtualMachineScaleSet](#virtualmachinescaleset)

### VirtualMachineScaleSetListSkusResult
* VirtualMachineScaleSetListSkusResult `object`: The Virtual Machine Scale Set List Skus operation response.
  * nextLink `string`: The uri to fetch the next page of Virtual Machine Scale Set Skus. Call ListNext() with this to fetch the next page of VMSS Skus.
  * value **required** `array`: The list of skus available for the virtual machine scale set.
    * items [VirtualMachineScaleSetSku](#virtualmachinescalesetsku)

### VirtualMachineScaleSetListWithLinkResult
* VirtualMachineScaleSetListWithLinkResult `object`: The List Virtual Machine operation response.
  * nextLink `string`: The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets.
  * value **required** `array`: The list of virtual machine scale sets.
    * items [VirtualMachineScaleSet](#virtualmachinescaleset)

### VirtualMachineScaleSetNetworkConfiguration
* VirtualMachineScaleSetNetworkConfiguration `object`: Describes a virtual machine scale set network profile's network configurations.
  * name **required** `string`: The network configuration name.
  * properties [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetNetworkConfigurationProperties
* VirtualMachineScaleSetNetworkConfigurationProperties `object`: Describes a virtual machine scale set network profile's IP configuration.
  * ipConfigurations **required** `array`: The virtual machine scale set IP Configuration.
    * items [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)
  * primary `boolean`: Whether this is a primary NIC on a virtual machine.

### VirtualMachineScaleSetNetworkProfile
* VirtualMachineScaleSetNetworkProfile `object`: Describes a virtual machine scale set network profile.
  * networkInterfaceConfigurations `array`: The list of network configurations.
    * items [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)

### VirtualMachineScaleSetOSDisk
* VirtualMachineScaleSetOSDisk `object`: Describes a virtual machine scale set operating system disk.
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * image [VirtualHardDisk](#virtualharddisk)
  * name **required** `string`: The disk name.
  * osType `string` (values: Windows, Linux): The Operating System type.
  * vhdContainers `array`: The list of virtual hard disk container uris.
    * items `string`

### VirtualMachineScaleSetOSProfile
* VirtualMachineScaleSetOSProfile `object`: Describes a virtual machine scale set OS profile.
  * adminPassword `string`: The admin user password.
  * adminUsername `string`: The admin user name.
  * computerNamePrefix `string`: The computer name prefix.
  * customData `string`: A base-64 encoded string of custom data.
  * linuxConfiguration [LinuxConfiguration](#linuxconfiguration)
  * secrets `array`: The List of certificates for addition to the VM.
    * items [VaultSecretGroup](#vaultsecretgroup)
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### VirtualMachineScaleSetProperties
* VirtualMachineScaleSetProperties `object`: Describes the properties of a Virtual Machine Scale Set.
  * overprovision `boolean`: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * upgradePolicy [UpgradePolicy](#upgradepolicy)
  * virtualMachineProfile [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile)

### VirtualMachineScaleSetSku
* VirtualMachineScaleSetSku `object`: Describes an available virtual machine scale set sku.
  * capacity [VirtualMachineScaleSetSkuCapacity](#virtualmachinescalesetskucapacity)
  * resourceType `string`: The type of resource the sku applies to.
  * sku [Sku](#sku)

### VirtualMachineScaleSetSkuCapacity
* VirtualMachineScaleSetSkuCapacity `object`: Describes scaling information of a sku.
  * defaultCapacity `integer`: The default capacity.
  * maximum `integer`: The maximum capacity that can be set.
  * minimum `integer`: The minimum capacity.
  * scaleType `string` (values: Automatic, None): The scale type applicable to the sku.

### VirtualMachineScaleSetStorageProfile
* VirtualMachineScaleSetStorageProfile `object`: Describes a virtual machine scale set storage profile.
  * imageReference [ImageReference](#imagereference)
  * osDisk [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk)

### VirtualMachineScaleSetVM
* VirtualMachineScaleSetVM `object`: Describes a virtual machine scale set virtual machine.
  * instanceId `string`: The virtual machine instance ID.
  * plan [Plan](#plan)
  * properties [VirtualMachineScaleSetVMProperties](#virtualmachinescalesetvmproperties)
  * resources `array`: The virtual machine child extension resources.
    * items [VirtualMachineExtension](#virtualmachineextension)
  * sku [Sku](#sku)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualMachineScaleSetVMExtensionsSummary
* VirtualMachineScaleSetVMExtensionsSummary `object`: Extensions summary for virtual machines of a virtual machine scale set.
  * name `string`: The extension name.
  * statusesSummary `array`: The extensions information.
    * items [VirtualMachineStatusCodeCount](#virtualmachinestatuscodecount)

### VirtualMachineScaleSetVMInstanceIDs
* VirtualMachineScaleSetVMInstanceIDs `object`: Specifies a list of virtual machine instance IDs from the VM scale set.
  * instanceIds `array`: The virtual machine scale set instance ids.
    * items `string`

### VirtualMachineScaleSetVMInstanceRequiredIDs
* VirtualMachineScaleSetVMInstanceRequiredIDs `object`: Specifies a list of virtual machine instance IDs from the VM scale set.
  * instanceIds **required** `array`: The virtual machine scale set instance ids.
    * items `string`

### VirtualMachineScaleSetVMInstanceView
* VirtualMachineScaleSetVMInstanceView `object`: The instance view of a virtual machine scale set VM.
  * bootDiagnostics [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
  * disks `array`: The disks information.
    * items [DiskInstanceView](#diskinstanceview)
  * extensions `array`: The extensions information.
    * items [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
  * platformFaultDomain `integer`: The Fault Domain count.
  * platformUpdateDomain `integer`: The Update Domain count.
  * rdpThumbPrint `string`: The Remote desktop certificate thumbprint.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * vmAgent [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)

### VirtualMachineScaleSetVMListResult
* VirtualMachineScaleSetVMListResult `object`: The List Virtual Machine Scale Set VMs operation response.
  * nextLink `string`: The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs
  * value **required** `array`: The list of virtual machine scale sets VMs.
    * items [VirtualMachineScaleSetVM](#virtualmachinescalesetvm)

### VirtualMachineScaleSetVMProfile
* VirtualMachineScaleSetVMProfile `object`: Describes a virtual machine scale set virtual machine profile.
  * extensionProfile [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
  * networkProfile [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile)
  * osProfile [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile)
  * storageProfile [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile)

### VirtualMachineScaleSetVMProperties
* VirtualMachineScaleSetVMProperties `object`: Describes the properties of a virtual machine scale set virtual machine.
  * availabilitySet [SubResource](#subresource)
  * diagnosticsProfile [DiagnosticsProfile](#diagnosticsprofile)
  * hardwareProfile [HardwareProfile](#hardwareprofile)
  * instanceView [VirtualMachineInstanceView](#virtualmachineinstanceview)
  * latestModelApplied `boolean`: Specifies whether the latest model has been applied to the virtual machine.
  * licenseType `string`: The license type, which is for bring your own license scenario.
  * networkProfile [NetworkProfile](#networkprofile)
  * osProfile [OSProfile](#osprofile)
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * storageProfile [StorageProfile](#storageprofile)
  * vmId `string`: Azure VM unique ID.

### VirtualMachineSize
* VirtualMachineSize `object`: Describes the properties of a VM size.
  * maxDataDiskCount `integer`: The maximum number of data disks that can be attached to the virtual machine size.
  * memoryInMB `integer`: The amount of memory, in MB, supported by the virtual machine size.
  * name `string`: The name of the virtual machine size.
  * numberOfCores `integer`: The number of cores supported by the virtual machine size.
  * osDiskSizeInMB `integer`: The OS disk size, in MB, allowed by the virtual machine size.
  * resourceDiskSizeInMB `integer`: The resource disk size, in MB, allowed by the virtual machine size.

### VirtualMachineSizeListResult
* VirtualMachineSizeListResult `object`: The List Virtual Machine operation response.
  * value `array`: The list of virtual machine sizes.
    * items [VirtualMachineSize](#virtualmachinesize)

### VirtualMachineStatusCodeCount
* VirtualMachineStatusCodeCount `object`: The status code and count of the virtual machine scale set instance view status summary.
  * code `string`: The instance view status code.
  * count `integer`: The number of instances having a particular status code.

### WinRMConfiguration
* WinRMConfiguration `object`: Describes Windows Remote Management configuration of the VM
  * listeners `array`: The list of Windows Remote Management listeners
    * items [WinRMListener](#winrmlistener)

### WinRMListener
* WinRMListener `object`: Describes Protocol and thumbprint of Windows Remote Management listener
  * certificateUrl `string`: The Certificate URL in KMS for Https listeners. Should be null for Http listeners.
  * protocol `string` (values: Http, Https): The Protocol used by the WinRM listener. Http and Https are supported.

### WindowsConfiguration
* WindowsConfiguration `object`: Describes Windows Configuration of the OS Profile.
  * additionalUnattendContent `array`: Additional base-64 encoded XML formatted information that can be included in the Unattend.xml file.
    * items [AdditionalUnattendContent](#additionalunattendcontent)
  * enableAutomaticUpdates `boolean`: Indicates whether Windows updates are automatically installed on the VM.
  * provisionVMAgent `boolean`: Indicates whether the virtual machine agent should be provisioned on the Virtual Machine. If not specified, then the default behavior is to set it to true.
  * timeZone `string`: The time zone of the VM
  * winRM [WinRMConfiguration](#winrmconfiguration)


