# @datafire/azure_arm_compute

Client library for ComputeManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_compute
```

```js
let datafire = require('datafire');
let azure_arm_compute = require('@datafire/azure_arm_compute').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_compute: account,
  }
})

azure_arm_compute.VirtualMachineImages_ListPublishers({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* location (string) **required** - The name of a supported Azure region.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required**
* publisherName (string) **required**
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required**
* publisherName (string) **required**
* type (string) **required**
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $orderby (string)
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required**
* publisherName (string) **required**
* type (string) **required**
* version (string) **required**
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required** - The name of a supported Azure region.
* publisherName (string) **required** - A valid image publisher.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required** - The name of a supported Azure region.
* publisherName (string) **required** - A valid image publisher.
* offer (string) **required** - A valid image publisher offer.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required** - The name of a supported Azure region.
* publisherName (string) **required** - A valid image publisher.
* offer (string) **required** - A valid image publisher offer.
* skus (string) **required** - A valid image SKU.
* $filter (string) - The filter to apply on the operation.
* $top (integer)
* $orderby (string)
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* location (string) **required** - The name of a supported Azure region.
* publisherName (string) **required** - A valid image publisher.
* offer (string) **required** - A valid image publisher offer.
* skus (string) **required** - A valid image SKU.
* version (string) **required** - A valid image SKU version.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Usage_List
Gets, for the specified location, the current compute resource usage information as well as the limits for compute resources under the subscription.


```js
azure_arm_compute.Usage_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location for which resource usage is queried.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachineSizes_List
Lists all available virtual machine sizes for a subscription in a location.


```js
azure_arm_compute.VirtualMachineSizes_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location upon which virtual-machine-sizes is queried.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachineScaleSets_ListAll
Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is not null to fetch all the VM Scale Sets.


```js
azure_arm_compute.VirtualMachineScaleSets_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachines_ListAll
Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines.


```js
azure_arm_compute.VirtualMachines_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### AvailabilitySets_List
Lists all availability sets in a resource group.


```js
azure_arm_compute.AvailabilitySets_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* availabilitySetName (string) **required** - The name of the availability set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* availabilitySetName (string) **required** - The name of the availability set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* availabilitySetName (string) **required** - The name of the availability set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the availability set.
* parameters (undefined) **required** - Create or update availability set parameters.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachineScaleSets_List
Gets a list of all VM scale sets under a resource group.


```js
azure_arm_compute.VirtualMachineScaleSets_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* name (string) **required** - The name of the VM scale set to create or update.
* parameters (undefined) **required** - Describes a Virtual Machine Scale Set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* virtualMachineScaleSetName (string) **required** - The name of the VM scale set.
* $filter (string) - The filter to apply to the operation.
* $select (string) - The list parameters.
* $expand (string) - The expand expression to apply to the operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* vmInstanceIDs (undefined) - Specifies a list of virtual machine instance IDs from the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* vmInstanceIDs (undefined) **required** - Specifies a list of virtual machine instance IDs from the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* vmInstanceIDs (undefined) **required** - Specifies a list of virtual machine instance IDs from the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* vmInstanceIDs (undefined) - Specifies a list of virtual machine instance IDs from the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* vmInstanceIDs (undefined) - Specifies a list of virtual machine instance IDs from the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* vmInstanceIDs (undefined) - Specifies a list of virtual machine instance IDs from the VM scale set.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmScaleSetName (string) **required** - The name of the VM scale set.
* instanceId (string) **required** - The instance ID of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachines_List
Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.


```js
azure_arm_compute.VirtualMachines_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* $expand (string) - The expand expression to apply on the operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* parameters (undefined) **required** - Describes a Virtual Machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* parameters (undefined) **required** - Capture Virtual Machine parameters.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine where the extension should be deleted.
* vmExtensionName (string) **required** - The name of the virtual machine extension.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine containing the extension.
* vmExtensionName (string) **required** - The name of the virtual machine extension.
* $expand (string) - The expand expression to apply on the operation.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine where the extension should be create or updated.
* vmExtensionName (string) **required** - The name of the virtual machine extension.
* extensionParameters (undefined) **required** - Describes a Virtual Machine Extension.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

