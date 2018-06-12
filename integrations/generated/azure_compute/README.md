# @datafire/azure_compute

Client library for ComputeManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_compute
```
```js
let azure_compute = require('@datafire/azure_compute').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_compute.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Compute Management Client.

## Actions

### Operations_List
Gets a list of compute operations.


```js
azure_compute.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ComputeOperationListResult](#computeoperationlistresult)

### Images_List
Gets the list of Images in the subscription. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images.


```js
azure_compute.Images_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ImageListResult](#imagelistresult)

### LogAnalytics_ExportRequestRateByInterval
Export logs that show Api requests made by this subscription in the given time window to show throttling activities.


```js
azure_compute.LogAnalytics_ExportRequestRateByInterval({
  "parameters": null,
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [RequestRateByIntervalInput](#requestratebyintervalinput)
  * location **required** `string`: The location upon which virtual-machine-sizes is queried.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LogAnalyticsOperationResult](#loganalyticsoperationresult)

### LogAnalytics_ExportThrottledRequests
Export logs that show total throttled Api requests for this subscription in the given time window.


```js
azure_compute.LogAnalytics_ExportThrottledRequests({
  "parameters": null,
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ThrottledRequestsInput](#throttledrequestsinput)
  * location **required** `string`: The location upon which virtual-machine-sizes is queried.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LogAnalyticsOperationResult](#loganalyticsoperationresult)

### VirtualMachineImages_ListPublishers
Gets a list of virtual machine image publishers for the specified Azure location.


```js
azure_compute.VirtualMachineImages_ListPublishers({
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
azure_compute.VirtualMachineExtensionImages_ListTypes({
  "location": "",
  "publisherName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
  * publisherName **required** `string`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [VirtualMachineExtensionImage](#virtualmachineextensionimage)

### VirtualMachineExtensionImages_ListVersions
Gets a list of virtual machine extension image versions.


```js
azure_compute.VirtualMachineExtensionImages_ListVersions({
  "location": "",
  "publisherName": "",
  "type": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The name of a supported Azure region.
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
azure_compute.VirtualMachineExtensionImages_Get({
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
  * location **required** `string`: The name of a supported Azure region.
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
azure_compute.VirtualMachineImages_ListOffers({
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
azure_compute.VirtualMachineImages_ListSkus({
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
azure_compute.VirtualMachineImages_List({
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
azure_compute.VirtualMachineImages_Get({
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
azure_compute.Usage_List({
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
azure_compute.VirtualMachineSizes_List({
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
Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is null to fetch all the VM Scale Sets.


```js
azure_compute.VirtualMachineScaleSets_ListAll({
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
azure_compute.VirtualMachines_ListAll({
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
azure_compute.AvailabilitySets_List({
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
azure_compute.AvailabilitySets_Delete({
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
azure_compute.AvailabilitySets_Get({
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

### AvailabilitySets_Update
Update an availability set.


```js
azure_compute.AvailabilitySets_Update({
  "resourceGroupName": "",
  "availabilitySetName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * availabilitySetName **required** `string`: The name of the availability set.
  * parameters **required** [AvailabilitySetUpdate](#availabilitysetupdate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailabilitySet](#availabilityset)

### AvailabilitySets_CreateOrUpdate
Create or update an availability set.


```js
azure_compute.AvailabilitySets_CreateOrUpdate({
  "resourceGroupName": "",
  "availabilitySetName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * availabilitySetName **required** `string`: The name of the availability set.
  * parameters **required** [AvailabilitySet](#availabilityset)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AvailabilitySet](#availabilityset)

### AvailabilitySets_ListAvailableSizes
Lists all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.


```js
azure_compute.AvailabilitySets_ListAvailableSizes({
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

### Images_ListByResourceGroup
Gets the list of images under a resource group.


```js
azure_compute.Images_ListByResourceGroup({
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
* output [ImageListResult](#imagelistresult)

### Images_Delete
Deletes an Image.


```js
azure_compute.Images_Delete({
  "resourceGroupName": "",
  "imageName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageName **required** `string`: The name of the image.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### Images_Get
Gets an image.


```js
azure_compute.Images_Get({
  "resourceGroupName": "",
  "imageName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageName **required** `string`: The name of the image.
  * $expand `string`: The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Image](#image)

### Images_Update
Update an image.


```js
azure_compute.Images_Update({
  "resourceGroupName": "",
  "imageName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageName **required** `string`: The name of the image.
  * parameters **required** [ImageUpdate](#imageupdate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Image](#image)

### Images_CreateOrUpdate
Create or update an image.


```js
azure_compute.Images_CreateOrUpdate({
  "resourceGroupName": "",
  "imageName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageName **required** `string`: The name of the image.
  * parameters **required** [Image](#image)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Image](#image)

### VirtualMachineScaleSets_List
Gets a list of all VM scale sets under a resource group.


```js
azure_compute.VirtualMachineScaleSets_List({
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

### VirtualMachineScaleSetVMs_List
Gets a list of all virtual machines in a VM scale sets.


```js
azure_compute.VirtualMachineScaleSetVMs_List({
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
azure_compute.VirtualMachineScaleSets_Delete({
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
azure_compute.VirtualMachineScaleSets_Get({
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

### VirtualMachineScaleSets_Update
Update a VM scale set.


```js
azure_compute.VirtualMachineScaleSets_Update({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set to create or update.
  * parameters **required** [VirtualMachineScaleSetUpdate](#virtualmachinescalesetupdate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSet](#virtualmachinescaleset)

### VirtualMachineScaleSets_CreateOrUpdate
Create or update a VM scale set.


```js
azure_compute.VirtualMachineScaleSets_CreateOrUpdate({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set to create or update.
  * parameters **required** [VirtualMachineScaleSet](#virtualmachinescaleset)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSet](#virtualmachinescaleset)

### VirtualMachineScaleSets_Deallocate
Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.


```js
azure_compute.VirtualMachineScaleSets_Deallocate({
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
azure_compute.VirtualMachineScaleSets_DeleteInstances({
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

### VirtualMachineScaleSetExtensions_List
Gets a list of all extensions in a VM scale set.


```js
azure_compute.VirtualMachineScaleSetExtensions_List({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set containing the extension.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetExtensionListResult](#virtualmachinescalesetextensionlistresult)

### VirtualMachineScaleSetExtensions_Delete
The operation to delete the extension.


```js
azure_compute.VirtualMachineScaleSetExtensions_Delete({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "vmssExtensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set where the extension should be deleted.
  * vmssExtensionName **required** `string`: The name of the VM scale set extension.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### VirtualMachineScaleSetExtensions_Get
The operation to get the extension.


```js
azure_compute.VirtualMachineScaleSetExtensions_Get({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "vmssExtensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set containing the extension.
  * vmssExtensionName **required** `string`: The name of the VM scale set extension.
  * $expand `string`: The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)

### VirtualMachineScaleSetExtensions_CreateOrUpdate
The operation to create or update an extension.


```js
azure_compute.VirtualMachineScaleSetExtensions_CreateOrUpdate({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "vmssExtensionName": "",
  "extensionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set where the extension should be create or updated.
  * vmssExtensionName **required** `string`: The name of the VM scale set extension.
  * extensionParameters **required** [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)

### VirtualMachineScaleSets_ForceRecoveryServiceFabricPlatformUpdateDomainWalk
Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set.


```js
azure_compute.VirtualMachineScaleSets_ForceRecoveryServiceFabricPlatformUpdateDomainWalk({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "api-version": "",
  "subscriptionId": "",
  "platformUpdateDomain": 0
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * platformUpdateDomain **required** `integer`: The platform update domain for which a manual recovery walk is requested

#### Output
* output [RecoveryWalkResponse](#recoverywalkresponse)

### VirtualMachineScaleSets_GetInstanceView
Gets the status of a VM scale set instance.


```js
azure_compute.VirtualMachineScaleSets_GetInstanceView({
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
azure_compute.VirtualMachineScaleSets_UpdateInstances({
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

### VirtualMachineScaleSetRollingUpgrades_StartOSUpgrade
Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.


```js
azure_compute.VirtualMachineScaleSetRollingUpgrades_StartOSUpgrade({
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

### VirtualMachineScaleSets_GetOSUpgradeHistory
Gets list of OS upgrades on a VM scale set instance.


```js
azure_compute.VirtualMachineScaleSets_GetOSUpgradeHistory({
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
* output [VirtualMachineScaleSetListOSUpgradeHistory](#virtualmachinescalesetlistosupgradehistory)

### VirtualMachineScaleSets_PerformMaintenance
Perform maintenance on one or more virtual machines in a VM scale set.


```js
azure_compute.VirtualMachineScaleSets_PerformMaintenance({
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

### VirtualMachineScaleSets_PowerOff
Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.


```js
azure_compute.VirtualMachineScaleSets_PowerOff({
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

### VirtualMachineScaleSets_Redeploy
Redeploy one or more virtual machines in a VM scale set.


```js
azure_compute.VirtualMachineScaleSets_Redeploy({
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
azure_compute.VirtualMachineScaleSets_Reimage({
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

### VirtualMachineScaleSets_ReimageAll
Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.


```js
azure_compute.VirtualMachineScaleSets_ReimageAll({
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

### VirtualMachineScaleSets_Restart
Restarts one or more virtual machines in a VM scale set.


```js
azure_compute.VirtualMachineScaleSets_Restart({
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

### VirtualMachineScaleSetRollingUpgrades_Cancel
Cancels the current virtual machine scale set rolling upgrade.


```js
azure_compute.VirtualMachineScaleSetRollingUpgrades_Cancel({
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

### VirtualMachineScaleSetRollingUpgrades_GetLatest
Gets the status of the latest virtual machine scale set rolling upgrade.


```js
azure_compute.VirtualMachineScaleSetRollingUpgrades_GetLatest({
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
* output [RollingUpgradeStatusInfo](#rollingupgradestatusinfo)

### VirtualMachineScaleSets_ListSkus
Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.


```js
azure_compute.VirtualMachineScaleSets_ListSkus({
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
azure_compute.VirtualMachineScaleSets_Start({
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
azure_compute.VirtualMachineScaleSetVMs_Delete({
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
azure_compute.VirtualMachineScaleSetVMs_Get({
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

### VirtualMachineScaleSetVMs_Update
Updates a virtual machine of a VM scale set.


```js
azure_compute.VirtualMachineScaleSetVMs_Update({
  "resourceGroupName": "",
  "vmScaleSetName": "",
  "instanceId": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmScaleSetName **required** `string`: The name of the VM scale set where the extension should be create or updated.
  * instanceId **required** `string`: The instance ID of the virtual machine.
  * parameters **required** [VirtualMachineScaleSetVM](#virtualmachinescalesetvm)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineScaleSetVM](#virtualmachinescalesetvm)

### VirtualMachineScaleSetVMs_Deallocate
Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.


```js
azure_compute.VirtualMachineScaleSetVMs_Deallocate({
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
azure_compute.VirtualMachineScaleSetVMs_GetInstanceView({
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

### VirtualMachineScaleSetVMs_PerformMaintenance
Performs maintenance on a virtual machine in a VM scale set.


```js
azure_compute.VirtualMachineScaleSetVMs_PerformMaintenance({
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

### VirtualMachineScaleSetVMs_PowerOff
Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.


```js
azure_compute.VirtualMachineScaleSetVMs_PowerOff({
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

### VirtualMachineScaleSetVMs_Redeploy
Redeploys a virtual machine in a VM scale set.


```js
azure_compute.VirtualMachineScaleSetVMs_Redeploy({
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
azure_compute.VirtualMachineScaleSetVMs_Reimage({
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

### VirtualMachineScaleSetVMs_ReimageAll
Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This operation is only supported for managed disks.


```js
azure_compute.VirtualMachineScaleSetVMs_ReimageAll({
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
azure_compute.VirtualMachineScaleSetVMs_Restart({
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
azure_compute.VirtualMachineScaleSetVMs_Start({
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
azure_compute.VirtualMachines_List({
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
azure_compute.VirtualMachines_Delete({
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
azure_compute.VirtualMachines_Get({
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

### VirtualMachines_Update
The operation to update a virtual machine.


```js
azure_compute.VirtualMachines_Update({
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
  * parameters **required** [VirtualMachineUpdate](#virtualmachineupdate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachine](#virtualmachine)

### VirtualMachines_CreateOrUpdate
The operation to create or update a virtual machine.


```js
azure_compute.VirtualMachines_CreateOrUpdate({
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
azure_compute.VirtualMachines_Capture({
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

### VirtualMachines_ConvertToManagedDisks
Converts virtual machine disks from blob-based to managed disks. Virtual machine must be stop-deallocated before invoking this operation.


```js
azure_compute.VirtualMachines_ConvertToManagedDisks({
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

### VirtualMachines_Deallocate
Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses.


```js
azure_compute.VirtualMachines_Deallocate({
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

### VirtualMachines_GetExtensions
The operation to get all extensions of a Virtual Machine.


```js
azure_compute.VirtualMachines_GetExtensions({
  "resourceGroupName": "",
  "vmName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine containing the extension.
  * $expand `string`: The expand expression to apply on the operation.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineExtensionsListResult](#virtualmachineextensionslistresult)

### VirtualMachineExtensions_Delete
The operation to delete the extension.


```js
azure_compute.VirtualMachineExtensions_Delete({
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
azure_compute.VirtualMachineExtensions_Get({
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

### VirtualMachineExtensions_Update
The operation to update the extension.


```js
azure_compute.VirtualMachineExtensions_Update({
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
  * vmName **required** `string`: The name of the virtual machine where the extension should be updated.
  * vmExtensionName **required** `string`: The name of the virtual machine extension.
  * extensionParameters **required** [VirtualMachineExtensionUpdate](#virtualmachineextensionupdate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineExtension](#virtualmachineextension)

### VirtualMachineExtensions_CreateOrUpdate
The operation to create or update the extension.


```js
azure_compute.VirtualMachineExtensions_CreateOrUpdate({
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
  * vmName **required** `string`: The name of the virtual machine where the extension should be created or updated.
  * vmExtensionName **required** `string`: The name of the virtual machine extension.
  * extensionParameters **required** [VirtualMachineExtension](#virtualmachineextension)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [VirtualMachineExtension](#virtualmachineextension)

### VirtualMachines_Generalize
Sets the state of the virtual machine to generalized.


```js
azure_compute.VirtualMachines_Generalize({
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

### VirtualMachines_InstanceView
Retrieves information about the run-time state of a virtual machine.


```js
azure_compute.VirtualMachines_InstanceView({
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
* output [VirtualMachineInstanceView](#virtualmachineinstanceview)

### VirtualMachines_PerformMaintenance
The operation to perform maintenance on a virtual machine.


```js
azure_compute.VirtualMachines_PerformMaintenance({
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
azure_compute.VirtualMachines_PowerOff({
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
azure_compute.VirtualMachines_Redeploy({
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
azure_compute.VirtualMachines_Restart({
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
azure_compute.VirtualMachines_Start({
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
azure_compute.VirtualMachines_ListAvailableSizes({
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
* AdditionalUnattendContent `object`: Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
  * componentName `string` (values: Microsoft-Windows-Shell-Setup): The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
  * content `string`: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
  * passName `string` (values: OobeSystem): The pass name. Currently, the only allowable value is OobeSystem.
  * settingName `string` (values: AutoLogon, FirstLogonCommands): Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

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

### AutoOSUpgradePolicy
* AutoOSUpgradePolicy `object`: The configuration parameters used for performing automatic OS upgrade.
  * disableAutoRollback `boolean`: Whether OS image rollback feature should be disabled. Default value is false.

### AvailabilitySet
* AvailabilitySet `object`: Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintainance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
  * properties [AvailabilitySetProperties](#availabilitysetproperties)
  * sku [Sku](#sku)
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

### AvailabilitySetUpdate
* AvailabilitySetUpdate `object`: Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated.
  * properties [AvailabilitySetProperties](#availabilitysetproperties)
  * sku [Sku](#sku)
  * tags `object`: Resource tags

### BootDiagnostics
* BootDiagnostics `object`: Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> For Linux Virtual Machines, you can easily view the output of your console log. <br><br> For both Windows and Linux virtual machines, Azure also enables you to see a screenshot of the VM from the hypervisor.
  * enabled `boolean`: Whether boot diagnostics should be enabled on the Virtual Machine.
  * storageUri `string`: Uri of the storage account to use for placing the console output and screenshot.

### BootDiagnosticsInstanceView
* BootDiagnosticsInstanceView `object`: The instance view of a virtual machine boot diagnostics.
  * consoleScreenshotBlobUri `string`: The console screenshot blob URI.
  * serialConsoleLogBlobUri `string`: The Linux serial console log blob Uri.

### Caching
* Caching `string` (values: None, ReadOnly, ReadWrite): Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**

### ComputeLongRunningOperationProperties
* ComputeLongRunningOperationProperties `object`: Compute-specific operation properties, including output
  * output `object`: Operation output data (raw JSON)

### ComputeOperationListResult
* ComputeOperationListResult `object`: The List Compute Operation operation response.
  * value `array`: The list of compute operations
    * items [ComputeOperationValue](#computeoperationvalue)

### ComputeOperationValue
* ComputeOperationValue `object`: Describes the properties of a Compute Operation value.
  * display [ComputeOperationValueDisplay](#computeoperationvaluedisplay)
  * name `string`: The name of the compute operation.
  * origin `string`: The origin of the compute operation.

### ComputeOperationValueDisplay
* ComputeOperationValueDisplay `object`: Describes the properties of a Compute Operation Value Display.
  * description `string`: The description of the operation.
  * operation `string`: The display name of the compute operation.
  * provider `string`: The resource provider for the operation.
  * resource `string`: The display name of the resource the operation applies to.

### CreateOption
* CreateOption `string` (values: FromImage, Empty, Attach): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach**  This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage**  This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.

### DataDisk
* DataDisk `object`: Describes a data disk.
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * diskSizeGB `integer`: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
  * image [VirtualHardDisk](#virtualharddisk)
  * lun **required** `integer`: Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
  * managedDisk [ManagedDiskParameters](#manageddiskparameters)
  * name `string`: The disk name.
  * vhd [VirtualHardDisk](#virtualharddisk)
  * writeAcceleratorEnabled `boolean`: Specifies whether writeAccelerator should be enabled or disabled on the disk.

### DataDiskImage
* DataDiskImage `object`: Contains the data disk images information.
  * lun `integer`: Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.

### DiagnosticsProfile
* DiagnosticsProfile `object`: Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
  * bootDiagnostics [BootDiagnostics](#bootdiagnostics)

### DiskEncryptionSettings
* DiskEncryptionSettings `object`: Describes a Encryption Settings for a Disk
  * diskEncryptionKey [KeyVaultSecretReference](#keyvaultsecretreference)
  * enabled `boolean`: Specifies whether disk encryption should be enabled on the virtual machine.
  * keyEncryptionKey [KeyVaultKeyReference](#keyvaultkeyreference)

### DiskInstanceView
* DiskInstanceView `object`: The instance view of the disk.
  * encryptionSettings `array`: Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
    * items [DiskEncryptionSettings](#diskencryptionsettings)
  * name `string`: The disk name.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)

### HardwareProfile
* HardwareProfile `object`: Specifies the hardware settings for the virtual machine.
  * vmSize `string` (values: Basic_A0, Basic_A1, Basic_A2, Basic_A3, Basic_A4, Standard_A0, Standard_A1, Standard_A2, Standard_A3, Standard_A4, Standard_A5, Standard_A6, Standard_A7, Standard_A8, Standard_A9, Standard_A10, Standard_A11, Standard_A1_v2, Standard_A2_v2, Standard_A4_v2, Standard_A8_v2, Standard_A2m_v2, Standard_A4m_v2, Standard_A8m_v2, Standard_B1s, Standard_B1ms, Standard_B2s, Standard_B2ms, Standard_B4ms, Standard_B8ms, Standard_D1, Standard_D2, Standard_D3, Standard_D4, Standard_D11, Standard_D12, Standard_D13, Standard_D14, Standard_D1_v2, Standard_D2_v2, Standard_D3_v2, Standard_D4_v2, Standard_D5_v2, Standard_D2_v3, Standard_D4_v3, Standard_D8_v3, Standard_D16_v3, Standard_D32_v3, Standard_D64_v3, Standard_D2s_v3, Standard_D4s_v3, Standard_D8s_v3, Standard_D16s_v3, Standard_D32s_v3, Standard_D64s_v3, Standard_D11_v2, Standard_D12_v2, Standard_D13_v2, Standard_D14_v2, Standard_D15_v2, Standard_DS1, Standard_DS2, Standard_DS3, Standard_DS4, Standard_DS11, Standard_DS12, Standard_DS13, Standard_DS14, Standard_DS1_v2, Standard_DS2_v2, Standard_DS3_v2, Standard_DS4_v2, Standard_DS5_v2, Standard_DS11_v2, Standard_DS12_v2, Standard_DS13_v2, Standard_DS14_v2, Standard_DS15_v2, Standard_DS13-4_v2, Standard_DS13-2_v2, Standard_DS14-8_v2, Standard_DS14-4_v2, Standard_E2_v3, Standard_E4_v3, Standard_E8_v3, Standard_E16_v3, Standard_E32_v3, Standard_E64_v3, Standard_E2s_v3, Standard_E4s_v3, Standard_E8s_v3, Standard_E16s_v3, Standard_E32s_v3, Standard_E64s_v3, Standard_E32-16_v3, Standard_E32-8s_v3, Standard_E64-32s_v3, Standard_E64-16s_v3, Standard_F1, Standard_F2, Standard_F4, Standard_F8, Standard_F16, Standard_F1s, Standard_F2s, Standard_F4s, Standard_F8s, Standard_F16s, Standard_F2s_v2, Standard_F4s_v2, Standard_F8s_v2, Standard_F16s_v2, Standard_F32s_v2, Standard_F64s_v2, Standard_F72s_v2, Standard_G1, Standard_G2, Standard_G3, Standard_G4, Standard_G5, Standard_GS1, Standard_GS2, Standard_GS3, Standard_GS4, Standard_GS5, Standard_GS4-8, Standard_GS4-4, Standard_GS5-16, Standard_GS5-8, Standard_H8, Standard_H16, Standard_H8m, Standard_H16m, Standard_H16r, Standard_H16mr, Standard_L4s, Standard_L8s, Standard_L16s, Standard_L32s, Standard_M64s, Standard_M64ms, Standard_M128s, Standard_M128ms, Standard_M64-32ms, Standard_M64-16ms, Standard_M128-64ms, Standard_M128-32ms, Standard_NC6, Standard_NC12, Standard_NC24, Standard_NC24r, Standard_NC6s_v2, Standard_NC12s_v2, Standard_NC24s_v2, Standard_NC24rs_v2, Standard_NC6s_v3, Standard_NC12s_v3, Standard_NC24s_v3, Standard_NC24rs_v3, Standard_ND6s, Standard_ND12s, Standard_ND24s, Standard_ND24rs, Standard_NV6, Standard_NV12, Standard_NV24): Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes)

### Image
* Image `object`: The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
  * properties [ImageProperties](#imageproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ImageDataDisk
* ImageDataDisk `object`: Describes a data disk.
  * blobUri `string`: The Virtual Hard Disk.
  * caching `string` (values: None, ReadOnly, ReadWrite): Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
  * diskSizeGB `integer`: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
  * lun **required** `integer`: Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
  * managedDisk [SubResource](#subresource)
  * snapshot [SubResource](#subresource)
  * storageAccountType [StorageAccountType](#storageaccounttype)

### ImageListResult
* ImageListResult `object`: The List Image operation response.
  * nextLink `string`: The uri to fetch the next page of Images. Call ListNext() with this to fetch the next page of Images.
  * value **required** `array`: The list of Images.
    * items [Image](#image)

### ImageOSDisk
* ImageOSDisk `object`: Describes an Operating System disk.
  * blobUri `string`: The Virtual Hard Disk.
  * caching `string` (values: None, ReadOnly, ReadWrite): Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
  * diskSizeGB `integer`: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
  * managedDisk [SubResource](#subresource)
  * osState **required** `string` (values: Generalized, Specialized): The OS State.
  * osType **required** `string` (values: Windows, Linux): This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
  * snapshot [SubResource](#subresource)
  * storageAccountType [StorageAccountType](#storageaccounttype)

### ImageProperties
* ImageProperties `object`: Describes the properties of an Image.
  * provisioningState `string`: The provisioning state.
  * sourceVirtualMachine [SubResource](#subresource)
  * storageProfile [ImageStorageProfile](#imagestorageprofile)

### ImageReference
* ImageReference `object`: Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.
  * offer `string`: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
  * publisher `string`: The image publisher.
  * sku `string`: The image SKU.
  * version `string`: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
  * id `string`: Resource Id

### ImageStorageProfile
* ImageStorageProfile `object`: Describes a storage profile.
  * dataDisks `array`: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
    * items [ImageDataDisk](#imagedatadisk)
  * osDisk [ImageOSDisk](#imageosdisk)
  * zoneResilient `boolean`: Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).

### ImageUpdate
* ImageUpdate `object`: The source user image virtual hard disk. Only tags may be updated.
  * properties [ImageProperties](#imageproperties)
  * tags `object`: Resource tags

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
  * keyUrl **required** `string`: The URL referencing a key encryption key in Key Vault.
  * sourceVault **required** [SubResource](#subresource)

### KeyVaultSecretReference
* KeyVaultSecretReference `object`: Describes a reference to Key Vault Secret
  * secretUrl **required** `string`: The URL referencing a secret in a Key Vault.
  * sourceVault **required** [SubResource](#subresource)

### LinuxConfiguration
* LinuxConfiguration `object`: Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
  * disablePasswordAuthentication `boolean`: Specifies whether password authentication should be disabled.
  * ssh [SshConfiguration](#sshconfiguration)

### ListUsagesResult
* ListUsagesResult `object`: The List Usages operation response.
  * nextLink `string`: The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information.
  * value **required** `array`: The list of compute resource usages.
    * items [Usage](#usage)

### LogAnalyticsInputBase
* LogAnalyticsInputBase `object`: Api input base class for LogAnalytics Api.
  * blobContainerSasUri **required** `string`: SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
  * fromTime **required** `string`: From time of the query
  * groupByOperationName `boolean`: Group query result by  by Operation Name.
  * groupByResourceName `boolean`: Group query result by Resource Name.
  * groupByThrottlePolicy `boolean`: Group query result by Throttle Policy applied.
  * toTime **required** `string`: To time of the query

### LogAnalyticsOperationResult
* LogAnalyticsOperationResult `object`: LogAnalytics operation status response
  * properties [LogAnalyticsOutput](#loganalyticsoutput)
  * endTime `string`: End time of the operation
  * error [ApiError](#apierror)
  * name `string`: Operation ID
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### LogAnalyticsOutput
* LogAnalyticsOutput `object`: LogAnalytics output properties
  * output `string`: Output file Uri path to blob container.

### MaintenanceRedeployStatus
* MaintenanceRedeployStatus `object`: Maintenance Operation Status.
  * isCustomerInitiatedMaintenanceAllowed `boolean`: True, if customer is allowed to perform Maintenance.
  * lastOperationMessage `string`: Message returned for the last Maintenance Operation.
  * lastOperationResultCode `string` (values: None, RetryLater, MaintenanceAborted, MaintenanceCompleted): The Last Maintenance Operation Result Code.
  * maintenanceWindowEndTime `string`: End Time for the Maintenance Window.
  * maintenanceWindowStartTime `string`: Start Time for the Maintenance Window.
  * preMaintenanceWindowEndTime `string`: End Time for the Pre Maintenance Window.
  * preMaintenanceWindowStartTime `string`: Start Time for the Pre Maintenance Window.

### ManagedDiskParameters
* ManagedDiskParameters `object`: The parameters of a managed disk.
  * storageAccountType [StorageAccountType](#storageaccounttype)
  * id `string`: Resource Id

### NetworkInterfaceReference
* NetworkInterfaceReference `object`: Describes a network interface reference.
  * properties [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties)
  * id `string`: Resource Id

### NetworkInterfaceReferenceProperties
* NetworkInterfaceReferenceProperties `object`: Describes a network interface reference properties.
  * primary `boolean`: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

### NetworkProfile
* NetworkProfile `object`: Specifies the network interfaces of the virtual machine.
  * networkInterfaces `array`: Specifies the list of resource Ids for the network interfaces associated with the virtual machine.
    * items [NetworkInterfaceReference](#networkinterfacereference)

### OSDisk
* OSDisk `object`: Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * diskSizeGB `integer`: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
  * encryptionSettings [DiskEncryptionSettings](#diskencryptionsettings)
  * image [VirtualHardDisk](#virtualharddisk)
  * managedDisk [ManagedDiskParameters](#manageddiskparameters)
  * name `string`: The disk name.
  * osType `string` (values: Windows, Linux): This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
  * vhd [VirtualHardDisk](#virtualharddisk)
  * writeAcceleratorEnabled `boolean`: Specifies whether writeAccelerator should be enabled or disabled on the disk.

### OSDiskImage
* OSDiskImage `object`: Contains the os disk image information.
  * operatingSystem **required** `string` (values: Windows, Linux): The operating system of the osDiskImage.

### OSProfile
* OSProfile `object`: Specifies the operating system settings for the virtual machine.
  * adminPassword `string`: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
  * adminUsername `string`: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
  * computerName `string`: Specifies the host OS name of the virtual machine. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
  * customData `string`: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
  * linuxConfiguration [LinuxConfiguration](#linuxconfiguration)
  * secrets `array`: Specifies set of certificates that should be installed onto the virtual machine.
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
* Plan `object`: Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
  * name `string`: The plan ID.
  * product `string`: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
  * promotionCode `string`: The promotion code.
  * publisher `string`: The publisher ID.

### PurchasePlan
* PurchasePlan `object`: Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
  * name **required** `string`: The plan ID.
  * product **required** `string`: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
  * publisher **required** `string`: The publisher ID.

### RecoveryWalkResponse
* RecoveryWalkResponse `object`: Response after calling a manual recovery walk
  * nextPlatformUpdateDomain `integer`: The next update domain that needs to be walked. Null means walk spanning all update domains has been completed
  * walkPerformed `boolean`: Whether the recovery walk was performed

### RequestRateByIntervalInput
* RequestRateByIntervalInput `object`: Api request input for LogAnalytics getRequestRateByInterval Api.
  * intervalLength **required** `string` (values: ThreeMins, FiveMins, ThirtyMins, SixtyMins): Interval value in minutes used to create LogAnalytics call rate logs.
  * blobContainerSasUri **required** `string`: SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
  * fromTime **required** `string`: From time of the query
  * groupByOperationName `boolean`: Group query result by  by Operation Name.
  * groupByResourceName `boolean`: Group query result by Resource Name.
  * groupByThrottlePolicy `boolean`: Group query result by Throttle Policy applied.
  * toTime **required** `string`: To time of the query

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RollbackStatusInfo
* RollbackStatusInfo `object`: Information about rollback on failed VM instances after a OS Upgrade operation
  * failedRolledbackInstanceCount `integer`: The number of instances which failed to rollback.
  * rollbackError [ApiError](#apierror)
  * successfullyRolledbackInstanceCount `integer`: The number of instances which have been successfully rolled back.

### RollingUpgradePolicy
* RollingUpgradePolicy `object`: The configuration parameters used while performing a rolling upgrade.
  * maxBatchInstancePercent `integer`: The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
  * maxUnhealthyInstancePercent `integer`: The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
  * maxUnhealthyUpgradedInstancePercent `integer`: The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
  * pauseTimeBetweenBatches `string`: The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).

### RollingUpgradeProgressInfo
* RollingUpgradeProgressInfo `object`: Information about the number of virtual machine instances in each upgrade state.
  * failedInstanceCount `integer`: The number of instances that have failed to be upgraded successfully.
  * inProgressInstanceCount `integer`: The number of instances that are currently being upgraded.
  * pendingInstanceCount `integer`: The number of instances that have not yet begun to be upgraded.
  * successfulInstanceCount `integer`: The number of instances that have been successfully upgraded.

### RollingUpgradeRunningStatus
* RollingUpgradeRunningStatus `object`: Information about the current running state of the overall upgrade.
  * code `string` (values: RollingForward, Cancelled, Completed, Faulted): Code indicating the current status of the upgrade.
  * lastAction `string` (values: Start, Cancel): The last action performed on the rolling upgrade.
  * lastActionTime `string`: Last action time of the upgrade.
  * startTime `string`: Start time of the upgrade.

### RollingUpgradeStatusInfo
* RollingUpgradeStatusInfo `object`: The status of the latest virtual machine scale set rolling upgrade.
  * properties [RollingUpgradeStatusInfoProperties](#rollingupgradestatusinfoproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RollingUpgradeStatusInfoProperties
* RollingUpgradeStatusInfoProperties `object`: The status of the latest virtual machine scale set rolling upgrade.
  * error [ApiError](#apierror)
  * policy [RollingUpgradePolicy](#rollingupgradepolicy)
  * progress [RollingUpgradeProgressInfo](#rollingupgradeprogressinfo)
  * runningStatus [RollingUpgradeRunningStatus](#rollingupgraderunningstatus)

### Sku
* Sku `object`: Describes a virtual machine scale set sku.
  * capacity `integer`: Specifies the number of virtual machines in the scale set.
  * name `string`: The sku name.
  * tier `string`: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

### SshConfiguration
* SshConfiguration `object`: SSH configuration for Linux based VMs running on Azure
  * publicKeys `array`: The list of SSH public keys used to authenticate with linux based VMs.
    * items [SshPublicKey](#sshpublickey)

### SshPublicKey
* SshPublicKey `object`: Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
  * keyData `string`: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
  * path `string`: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

### StorageAccountType
* StorageAccountType `string` (values: Standard_LRS, Premium_LRS): Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.

### StorageProfile
* StorageProfile `object`: Specifies the storage settings for the virtual machine disks.
  * dataDisks `array`: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
    * items [DataDisk](#datadisk)
  * imageReference [ImageReference](#imagereference)
  * osDisk [OSDisk](#osdisk)

### SubResource
* SubResource `object`
  * id `string`: Resource Id

### SubResourceReadOnly
* SubResourceReadOnly `object`
  * id `string`: Resource Id

### ThrottledRequestsInput
* ThrottledRequestsInput: Api request input for LogAnalytics getThrottledRequests Api.
  * blobContainerSasUri **required** `string`: SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
  * fromTime **required** `string`: From time of the query
  * groupByOperationName `boolean`: Group query result by  by Operation Name.
  * groupByResourceName `boolean`: Group query result by Resource Name.
  * groupByThrottlePolicy `boolean`: Group query result by Throttle Policy applied.
  * toTime **required** `string`: To time of the query

### UpdateResource
* UpdateResource `object`: The Update Resource model definition.
  * tags `object`: Resource tags

### UpgradeOperationHistoricalStatusInfo
* UpgradeOperationHistoricalStatusInfo `object`: Virtual Machine Scale Set OS Upgrade History operation response.
  * location `string`: Resource location
  * properties [UpgradeOperationHistoricalStatusInfoProperties](#upgradeoperationhistoricalstatusinfoproperties)
  * type `string`: Resource type

### UpgradeOperationHistoricalStatusInfoProperties
* UpgradeOperationHistoricalStatusInfoProperties `object`: Describes each OS upgrade on the Virtual Machine Scale Set.
  * error [ApiError](#apierror)
  * progress [RollingUpgradeProgressInfo](#rollingupgradeprogressinfo)
  * rollbackInfo [RollbackStatusInfo](#rollbackstatusinfo)
  * runningStatus [UpgradeOperationHistoryStatus](#upgradeoperationhistorystatus)
  * startedBy `string` (values: Unknown, User, Platform): Invoker of the Upgrade Operation
  * targetImageReference [ImageReference](#imagereference)

### UpgradeOperationHistoryStatus
* UpgradeOperationHistoryStatus `object`: Information about the current running state of the overall upgrade.
  * code `string` (values: RollingForward, Cancelled, Completed, Faulted): Code indicating the current status of the upgrade.
  * endTime `string`: End time of the upgrade.
  * startTime `string`: Start time of the upgrade.

### UpgradePolicy
* UpgradePolicy `object`: Describes an upgrade policy - automatic, manual, or rolling.
  * autoOSUpgradePolicy [AutoOSUpgradePolicy](#autoosupgradepolicy)
  * automaticOSUpgrade `boolean`: Whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the image becomes available.
  * mode `string` (values: Automatic, Manual, Rolling): Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
  * rollingUpgradePolicy [RollingUpgradePolicy](#rollingupgradepolicy)

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
  * certificateStore `string`: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbpring>.prv for private key. Both of these files are .pem formatted.
  * certificateUrl `string`: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}

### VaultSecretGroup
* VaultSecretGroup `object`: Describes a set of certificates which are all in the same Key Vault.
  * sourceVault [SubResource](#subresource)
  * vaultCertificates `array`: The list of key vault references in SourceVault which contain certificates.
    * items [VaultCertificate](#vaultcertificate)

### VirtualHardDisk
* VirtualHardDisk `object`: Describes the uri of a disk.
  * uri `string`: Specifies the virtual hard disk's uri.

### VirtualMachine
* VirtualMachine `object`: Describes a Virtual Machine.
  * identity [VirtualMachineIdentity](#virtualmachineidentity)
  * plan [Plan](#plan)
  * properties [VirtualMachineProperties](#virtualmachineproperties)
  * resources `array`: The virtual machine child extension resources.
    * items [VirtualMachineExtension](#virtualmachineextension)
  * zones `array`: The virtual machine zones.
    * items `string`
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
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

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
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### VirtualMachineExtensionProperties
* VirtualMachineExtensionProperties `object`: Describes the properties of a Virtual Machine Extension.
  * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
  * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
  * instanceView [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
  * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### VirtualMachineExtensionUpdate
* VirtualMachineExtensionUpdate `object`: Describes a Virtual Machine Extension.
  * properties [VirtualMachineExtensionUpdateProperties](#virtualmachineextensionupdateproperties)
  * tags `object`: Resource tags

### VirtualMachineExtensionUpdateProperties
* VirtualMachineExtensionUpdateProperties `object`: Describes the properties of a Virtual Machine Extension.
  * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
  * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
  * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### VirtualMachineExtensionsListResult
* VirtualMachineExtensionsListResult `object`: The List Extension operation response
  * value `array`: The list of extensions
    * items [VirtualMachineExtension](#virtualmachineextension)

### VirtualMachineHealthStatus
* VirtualMachineHealthStatus `object`: The health status of the VM.
  * status [InstanceViewStatus](#instanceviewstatus)

### VirtualMachineIdentity
* VirtualMachineIdentity `object`: Identity for the virtual machine.
  * identityIds `array`: The list of user identities associated with the Virtual Machine. The user identity references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/identities/{identityName}'.
    * items `string`
  * principalId `string`: The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
  * tenantId `string`: The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
  * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.

### VirtualMachineImage
* VirtualMachineImage `object`: Describes a Virtual Machine Image.
  * properties [VirtualMachineImageProperties](#virtualmachineimageproperties)
  * location **required** `string`: The supported Azure location of the resource.
  * name **required** `string`: The name of the resource.
  * tags `object`: Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md).
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
  * tags `object`: Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md).
  * id `string`: Resource Id

### VirtualMachineInstanceView
* VirtualMachineInstanceView `object`: The instance view of a virtual machine.
  * bootDiagnostics [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview)
  * computerName `string`: The computer name assigned to the virtual machine.
  * disks `array`: The virtual machine disk information.
    * items [DiskInstanceView](#diskinstanceview)
  * extensions `array`: The extensions information.
    * items [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)
  * maintenanceRedeployStatus [MaintenanceRedeployStatus](#maintenanceredeploystatus)
  * osName `string`: The Operating System running on the virtual machine.
  * osVersion `string`: The version of Operating System running on the virtual machine.
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
  * licenseType `string`: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
  * networkProfile [NetworkProfile](#networkprofile)
  * osProfile [OSProfile](#osprofile)
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * storageProfile [StorageProfile](#storageprofile)
  * vmId `string`: Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.

### VirtualMachineScaleSet
* VirtualMachineScaleSet `object`: Describes a Virtual Machine Scale Set.
  * identity [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity)
  * plan [Plan](#plan)
  * properties [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties)
  * sku [Sku](#sku)
  * zones `array`: The virtual machine scale set zones.
    * items `string`
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### VirtualMachineScaleSetDataDisk
* VirtualMachineScaleSetDataDisk `object`: Describes a virtual machine scale set data disk.
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * diskSizeGB `integer`: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
  * lun **required** `integer`: Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
  * managedDisk [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
  * name `string`: The disk name.
  * writeAcceleratorEnabled `boolean`: Specifies whether writeAccelerator should be enabled or disabled on the disk.

### VirtualMachineScaleSetExtension
* VirtualMachineScaleSetExtension `object`: Describes a Virtual Machine Scale Set Extension.
  * name `string`: The name of the extension.
  * properties [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetExtensionListResult
* VirtualMachineScaleSetExtensionListResult `object`: The List VM scale set extension operation response.
  * nextLink `string`: The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions.
  * value **required** `array`: The list of VM scale set extensions.
    * items [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)

### VirtualMachineScaleSetExtensionProfile
* VirtualMachineScaleSetExtensionProfile `object`: Describes a virtual machine scale set extension profile.
  * extensions `array`: The virtual machine scale set child extension resources.
    * items [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)

### VirtualMachineScaleSetExtensionProperties
* VirtualMachineScaleSetExtensionProperties `object`: Describes the properties of a Virtual Machine Scale Set Extension.
  * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
  * forceUpdateTag `string`: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
  * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### VirtualMachineScaleSetIPConfiguration
* VirtualMachineScaleSetIPConfiguration `object`: Describes a virtual machine scale set network profile's IP configuration.
  * name **required** `string`: The IP configuration name.
  * properties [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetIPConfigurationProperties
* VirtualMachineScaleSetIPConfigurationProperties `object`: Describes a virtual machine scale set network profile's IP configuration properties.
  * applicationGatewayBackendAddressPools `array`: Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
    * items [SubResource](#subresource)
  * loadBalancerBackendAddressPools `array`: Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
    * items [SubResource](#subresource)
  * loadBalancerInboundNatPools `array`: Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer
    * items [SubResource](#subresource)
  * primary `boolean`: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
  * privateIPAddressVersion `string` (values: IPv4, IPv6): Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
  * publicIPAddressConfiguration [VirtualMachineScaleSetPublicIPAddressConfiguration](#virtualmachinescalesetpublicipaddressconfiguration)
  * subnet [ApiEntityReference](#apientityreference)

### VirtualMachineScaleSetIdentity
* VirtualMachineScaleSetIdentity `object`: Identity for the virtual machine scale set.
  * identityIds `array`: The list of user identities associated with the virtual machine scale set. The user identity references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/identities/{identityName}'.
    * items `string`
  * principalId `string`: The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
  * tenantId `string`: The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
  * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.

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

### VirtualMachineScaleSetListOSUpgradeHistory
* VirtualMachineScaleSetListOSUpgradeHistory `object`: List of Virtual Machine Scale Set OS Upgrade History operation response.
  * nextLink `string`: The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades.
  * value **required** `array`: The list of OS upgrades performed on the virtual machine scale set.
    * items [UpgradeOperationHistoricalStatusInfo](#upgradeoperationhistoricalstatusinfo)

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

### VirtualMachineScaleSetManagedDiskParameters
* VirtualMachineScaleSetManagedDiskParameters `object`: Describes the parameters of a ScaleSet managed disk.
  * storageAccountType [StorageAccountType](#storageaccounttype)

### VirtualMachineScaleSetNetworkConfiguration
* VirtualMachineScaleSetNetworkConfiguration `object`: Describes a virtual machine scale set network profile's network configurations.
  * name **required** `string`: The network configuration name.
  * properties [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetNetworkConfigurationDnsSettings
* VirtualMachineScaleSetNetworkConfigurationDnsSettings `object`: Describes a virtual machines scale sets network configuration's DNS settings.
  * dnsServers `array`: List of DNS servers IP addresses
    * items `string`

### VirtualMachineScaleSetNetworkConfigurationProperties
* VirtualMachineScaleSetNetworkConfigurationProperties `object`: Describes a virtual machine scale set network profile's IP configuration.
  * dnsSettings [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings)
  * enableAcceleratedNetworking `boolean`: Specifies whether the network interface is accelerated networking-enabled.
  * enableIPForwarding `boolean`: Whether IP forwarding enabled on this NIC.
  * ipConfigurations **required** `array`: Specifies the IP configurations of the network interface.
    * items [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)
  * networkSecurityGroup [SubResource](#subresource)
  * primary `boolean`: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

### VirtualMachineScaleSetNetworkProfile
* VirtualMachineScaleSetNetworkProfile `object`: Describes a virtual machine scale set network profile.
  * healthProbe [ApiEntityReference](#apientityreference)
  * networkInterfaceConfigurations `array`: The list of network configurations.
    * items [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)

### VirtualMachineScaleSetOSDisk
* VirtualMachineScaleSetOSDisk `object`: Describes a virtual machine scale set operating system disk.
  * caching [Caching](#caching)
  * createOption **required** [CreateOption](#createoption)
  * image [VirtualHardDisk](#virtualharddisk)
  * managedDisk [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
  * name `string`: The disk name.
  * osType `string` (values: Windows, Linux): This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
  * vhdContainers `array`: Specifies the container urls that are used to store operating system disks for the scale set.
    * items `string`
  * writeAcceleratorEnabled `boolean`: Specifies whether writeAccelerator should be enabled or disabled on the disk.

### VirtualMachineScaleSetOSProfile
* VirtualMachineScaleSetOSProfile `object`: Describes a virtual machine scale set OS profile.
  * adminPassword `string`: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
  * adminUsername `string`: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
  * computerNamePrefix `string`: Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
  * customData `string`: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
  * linuxConfiguration [LinuxConfiguration](#linuxconfiguration)
  * secrets `array`: Specifies set of certificates that should be installed onto the virtual machines in the scale set.
    * items [VaultSecretGroup](#vaultsecretgroup)
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### VirtualMachineScaleSetProperties
* VirtualMachineScaleSetProperties `object`: Describes the properties of a Virtual Machine Scale Set.
  * overprovision `boolean`: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
  * platformFaultDomainCount `integer`: Fault Domain count for each placement group.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * singlePlacementGroup `boolean`: When true this limits the scale set to a single placement group, of max size 100 virtual machines.
  * uniqueId `string`: Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
  * upgradePolicy [UpgradePolicy](#upgradepolicy)
  * virtualMachineProfile [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile)
  * zoneBalance `boolean`: Whether to force stictly even Virtual Machine distribution cross x-zones in case there is zone outage.

### VirtualMachineScaleSetPublicIPAddressConfiguration
* VirtualMachineScaleSetPublicIPAddressConfiguration `object`: Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
  * name **required** `string`: The publicIP address configuration name.
  * properties [VirtualMachineScaleSetPublicIPAddressConfigurationProperties](#virtualmachinescalesetpublicipaddressconfigurationproperties)

### VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
* VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings `object`: Describes a virtual machines scale sets network configuration's DNS settings.
  * domainNameLabel **required** `string`: The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created

### VirtualMachineScaleSetPublicIPAddressConfigurationProperties
* VirtualMachineScaleSetPublicIPAddressConfigurationProperties `object`: Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
  * dnsSettings [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings)
  * idleTimeoutInMinutes `integer`: The idle timeout of the public IP address.

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
  * dataDisks `array`: Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
    * items [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)
  * imageReference [ImageReference](#imagereference)
  * osDisk [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk)

### VirtualMachineScaleSetUpdate
* VirtualMachineScaleSetUpdate `object`: Describes a Virtual Machine Scale Set.
  * identity [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity)
  * plan [Plan](#plan)
  * properties [VirtualMachineScaleSetUpdateProperties](#virtualmachinescalesetupdateproperties)
  * sku [Sku](#sku)
  * tags `object`: Resource tags

### VirtualMachineScaleSetUpdateIPConfiguration
* VirtualMachineScaleSetUpdateIPConfiguration `object`: Describes a virtual machine scale set network profile's IP configuration.
  * name `string`: The IP configuration name.
  * properties [VirtualMachineScaleSetUpdateIPConfigurationProperties](#virtualmachinescalesetupdateipconfigurationproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetUpdateIPConfigurationProperties
* VirtualMachineScaleSetUpdateIPConfigurationProperties `object`: Describes a virtual machine scale set network profile's IP configuration properties.
  * applicationGatewayBackendAddressPools `array`: The application gateway backend address pools.
    * items [SubResource](#subresource)
  * loadBalancerBackendAddressPools `array`: The load balancer backend address pools.
    * items [SubResource](#subresource)
  * loadBalancerInboundNatPools `array`: The load balancer inbound nat pools.
    * items [SubResource](#subresource)
  * primary `boolean`: Specifies the primary IP Configuration in case the network interface has more than one IP Configuration.
  * privateIPAddressVersion `string` (values: IPv4, IPv6): Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
  * publicIPAddressConfiguration [VirtualMachineScaleSetUpdatePublicIPAddressConfiguration](#virtualmachinescalesetupdatepublicipaddressconfiguration)
  * subnet [ApiEntityReference](#apientityreference)

### VirtualMachineScaleSetUpdateNetworkConfiguration
* VirtualMachineScaleSetUpdateNetworkConfiguration `object`: Describes a virtual machine scale set network profile's network configurations.
  * name `string`: The network configuration name.
  * properties [VirtualMachineScaleSetUpdateNetworkConfigurationProperties](#virtualmachinescalesetupdatenetworkconfigurationproperties)
  * id `string`: Resource Id

### VirtualMachineScaleSetUpdateNetworkConfigurationProperties
* VirtualMachineScaleSetUpdateNetworkConfigurationProperties `object`: Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration.
  * dnsSettings [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings)
  * enableAcceleratedNetworking `boolean`: Specifies whether the network interface is accelerated networking-enabled.
  * enableIPForwarding `boolean`: Whether IP forwarding enabled on this NIC.
  * ipConfigurations `array`: The virtual machine scale set IP Configuration.
    * items [VirtualMachineScaleSetUpdateIPConfiguration](#virtualmachinescalesetupdateipconfiguration)
  * networkSecurityGroup [SubResource](#subresource)
  * primary `boolean`: Whether this is a primary NIC on a virtual machine.

### VirtualMachineScaleSetUpdateNetworkProfile
* VirtualMachineScaleSetUpdateNetworkProfile `object`: Describes a virtual machine scale set network profile.
  * networkInterfaceConfigurations `array`: The list of network configurations.
    * items [VirtualMachineScaleSetUpdateNetworkConfiguration](#virtualmachinescalesetupdatenetworkconfiguration)

### VirtualMachineScaleSetUpdateOSDisk
* VirtualMachineScaleSetUpdateOSDisk `object`: Describes virtual machine scale set operating system disk Update Object. This should be used for Updating VMSS OS Disk.
  * caching [Caching](#caching)
  * image [VirtualHardDisk](#virtualharddisk)
  * managedDisk [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters)
  * vhdContainers `array`: The list of virtual hard disk container uris.
    * items `string`
  * writeAcceleratorEnabled `boolean`: Specifies whether writeAccelerator should be enabled or disabled on the disk.

### VirtualMachineScaleSetUpdateOSProfile
* VirtualMachineScaleSetUpdateOSProfile `object`: Describes a virtual machine scale set OS profile.
  * customData `string`: A base-64 encoded string of custom data.
  * linuxConfiguration [LinuxConfiguration](#linuxconfiguration)
  * secrets `array`: The List of certificates for addition to the VM.
    * items [VaultSecretGroup](#vaultsecretgroup)
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### VirtualMachineScaleSetUpdateProperties
* VirtualMachineScaleSetUpdateProperties `object`: Describes the properties of a Virtual Machine Scale Set.
  * overprovision `boolean`: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
  * singlePlacementGroup `boolean`: When true this limits the scale set to a single placement group, of max size 100 virtual machines.
  * upgradePolicy [UpgradePolicy](#upgradepolicy)
  * virtualMachineProfile [VirtualMachineScaleSetUpdateVMProfile](#virtualmachinescalesetupdatevmprofile)

### VirtualMachineScaleSetUpdatePublicIPAddressConfiguration
* VirtualMachineScaleSetUpdatePublicIPAddressConfiguration `object`: Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
  * name `string`: The publicIP address configuration name.
  * properties [VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties](#virtualmachinescalesetupdatepublicipaddressconfigurationproperties)

### VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties
* VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties `object`: Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
  * dnsSettings [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings)
  * idleTimeoutInMinutes `integer`: The idle timeout of the public IP address.

### VirtualMachineScaleSetUpdateStorageProfile
* VirtualMachineScaleSetUpdateStorageProfile `object`: Describes a virtual machine scale set storage profile.
  * dataDisks `array`: The data disks.
    * items [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)
  * imageReference [ImageReference](#imagereference)
  * osDisk [VirtualMachineScaleSetUpdateOSDisk](#virtualmachinescalesetupdateosdisk)

### VirtualMachineScaleSetUpdateVMProfile
* VirtualMachineScaleSetUpdateVMProfile `object`: Describes a virtual machine scale set virtual machine profile.
  * diagnosticsProfile [DiagnosticsProfile](#diagnosticsprofile)
  * extensionProfile [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
  * licenseType `string`: The license type, which is for bring your own license scenario.
  * networkProfile [VirtualMachineScaleSetUpdateNetworkProfile](#virtualmachinescalesetupdatenetworkprofile)
  * osProfile [VirtualMachineScaleSetUpdateOSProfile](#virtualmachinescalesetupdateosprofile)
  * storageProfile [VirtualMachineScaleSetUpdateStorageProfile](#virtualmachinescalesetupdatestorageprofile)

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
  * instanceIds `array`: The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set.
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
  * maintenanceRedeployStatus [MaintenanceRedeployStatus](#maintenanceredeploystatus)
  * placementGroupId `string`: The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
  * platformFaultDomain `integer`: The Fault Domain count.
  * platformUpdateDomain `integer`: The Update Domain count.
  * rdpThumbPrint `string`: The Remote desktop certificate thumbprint.
  * statuses `array`: The resource status information.
    * items [InstanceViewStatus](#instanceviewstatus)
  * vmAgent [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview)
  * vmHealth [VirtualMachineHealthStatus](#virtualmachinehealthstatus)

### VirtualMachineScaleSetVMListResult
* VirtualMachineScaleSetVMListResult `object`: The List Virtual Machine Scale Set VMs operation response.
  * nextLink `string`: The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs
  * value **required** `array`: The list of virtual machine scale sets VMs.
    * items [VirtualMachineScaleSetVM](#virtualmachinescalesetvm)

### VirtualMachineScaleSetVMProfile
* VirtualMachineScaleSetVMProfile `object`: Describes a virtual machine scale set virtual machine profile.
  * diagnosticsProfile [DiagnosticsProfile](#diagnosticsprofile)
  * evictionPolicy `string` (values: Deallocate, Delete): Specifies the eviction policy for virtual machines in a low priority scale set. <br><br>Minimum api-version: 2017-10-30-preview
  * extensionProfile [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile)
  * licenseType `string`: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
  * networkProfile [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile)
  * osProfile [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile)
  * priority `string` (values: Regular, Low): Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
  * storageProfile [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile)

### VirtualMachineScaleSetVMProperties
* VirtualMachineScaleSetVMProperties `object`: Describes the properties of a virtual machine scale set virtual machine.
  * availabilitySet [SubResource](#subresource)
  * diagnosticsProfile [DiagnosticsProfile](#diagnosticsprofile)
  * hardwareProfile [HardwareProfile](#hardwareprofile)
  * instanceView [VirtualMachineInstanceView](#virtualmachineinstanceview)
  * latestModelApplied `boolean`: Specifies whether the latest model has been applied to the virtual machine.
  * licenseType `string`: Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
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

### VirtualMachineUpdate
* VirtualMachineUpdate `object`: Describes a Virtual Machine Update.
  * identity [VirtualMachineIdentity](#virtualmachineidentity)
  * plan [Plan](#plan)
  * properties [VirtualMachineProperties](#virtualmachineproperties)
  * zones `array`: The virtual machine zones.
    * items `string`
  * tags `object`: Resource tags

### WinRMConfiguration
* WinRMConfiguration `object`: Describes Windows Remote Management configuration of the VM
  * listeners `array`: The list of Windows Remote Management listeners
    * items [WinRMListener](#winrmlistener)

### WinRMListener
* WinRMListener `object`: Describes Protocol and thumbprint of Windows Remote Management listener
  * certificateUrl `string`: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
  * protocol `string` (values: Http, Https): Specifies the protocol of listener. <br><br> Possible values are: <br>**http** <br><br> **https**

### WindowsConfiguration
* WindowsConfiguration `object`: Specifies Windows operating system settings on the virtual machine.
  * additionalUnattendContent `array`: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
    * items [AdditionalUnattendContent](#additionalunattendcontent)
  * enableAutomaticUpdates `boolean`: Indicates whether virtual machine is enabled for automatic updates.
  * provisionVMAgent `boolean`: Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
  * timeZone `string`: Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time"
  * winRM [WinRMConfiguration](#winrmconfiguration)


