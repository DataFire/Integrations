# @datafire/azure_arm_compute
The Compute Management Client.

## Operation: VirtualMachineImages_ListPublishers
Gets a list of virtual machine image publishers for the specified Azure location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The name of a supported Azure region."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VirtualMachineImageResource"
  },
  "type": "array"
}
```
## Operation: VirtualMachineExtensionImages_ListTypes
Gets a list of virtual machine extension image types.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string"
    },
    "publisherName": {
      "type": "string"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VirtualMachineExtensionImage"
  },
  "type": "array"
}
```
## Operation: VirtualMachineExtensionImages_ListVersions
Gets a list of virtual machine extension image versions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string"
    },
    "publisherName": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$orderby": {
      "type": "string"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "type",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VirtualMachineExtensionImage"
  },
  "type": "array"
}
```
## Operation: VirtualMachineExtensionImages_Get
Gets a virtual machine extension image.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string"
    },
    "publisherName": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "type",
    "version",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineExtensionImage"
}
```
## Operation: VirtualMachineImages_ListOffers
Gets a list of virtual machine image offers for the specified location and publisher.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The name of a supported Azure region."
    },
    "publisherName": {
      "type": "string",
      "description": "A valid image publisher."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VirtualMachineImageResource"
  },
  "type": "array"
}
```
## Operation: VirtualMachineImages_ListSkus
Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The name of a supported Azure region."
    },
    "publisherName": {
      "type": "string",
      "description": "A valid image publisher."
    },
    "offer": {
      "type": "string",
      "description": "A valid image publisher offer."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "offer",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VirtualMachineImageResource"
  },
  "type": "array"
}
```
## Operation: VirtualMachineImages_List
Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The name of a supported Azure region."
    },
    "publisherName": {
      "type": "string",
      "description": "A valid image publisher."
    },
    "offer": {
      "type": "string",
      "description": "A valid image publisher offer."
    },
    "skus": {
      "type": "string",
      "description": "A valid image SKU."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply on the operation."
    },
    "$top": {
      "type": "integer",
      "format": "int32"
    },
    "$orderby": {
      "type": "string"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "offer",
    "skus",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/VirtualMachineImageResource"
  },
  "type": "array"
}
```
## Operation: VirtualMachineImages_Get
Gets a virtual machine image.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The name of a supported Azure region."
    },
    "publisherName": {
      "type": "string",
      "description": "A valid image publisher."
    },
    "offer": {
      "type": "string",
      "description": "A valid image publisher offer."
    },
    "skus": {
      "type": "string",
      "description": "A valid image SKU."
    },
    "version": {
      "type": "string",
      "description": "A valid image SKU version."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "publisherName",
    "offer",
    "skus",
    "version",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineImage"
}
```
## Operation: Usage_List
Gets, for the specified location, the current compute resource usage information as well as the limits for compute resources under the subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The location for which resource usage is queried.",
      "pattern": "^[-\\w\\._]+$"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListUsagesResult"
}
```
## Operation: VirtualMachineSizes_List
Lists all available virtual machine sizes for a subscription in a location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The location upon which virtual-machine-sizes is queried.",
      "pattern": "^[-\\w\\._]+$"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineSizeListResult"
}
```
## Operation: VirtualMachineScaleSets_ListAll
Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is not null to fetch all the VM Scale Sets.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetListWithLinkResult"
}
```
## Operation: VirtualMachines_ListAll
Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineListResult"
}
```
## Operation: AvailabilitySets_List
Lists all availability sets in a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AvailabilitySetListResult"
}
```
## Operation: AvailabilitySets_Delete
Delete an availability set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "availabilitySetName": {
      "type": "string",
      "description": "The name of the availability set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "availabilitySetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: AvailabilitySets_Get
Retrieves information about an availability set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "availabilitySetName": {
      "type": "string",
      "description": "The name of the availability set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "availabilitySetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AvailabilitySet"
}
```
## Operation: AvailabilitySets_ListAvailableSizes
Lists all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "availabilitySetName": {
      "type": "string",
      "description": "The name of the availability set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "availabilitySetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineSizeListResult"
}
```
## Operation: AvailabilitySets_CreateOrUpdate
Create or update an availability set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the availability set."
    },
    "parameters": {
      "$ref": "#/definitions/AvailabilitySet"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AvailabilitySet"
}
```
## Operation: VirtualMachineScaleSets_List
Gets a list of all VM scale sets under a resource group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetListResult"
}
```
## Operation: VirtualMachineScaleSets_CreateOrUpdate
Create or update a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "name": {
      "type": "string",
      "description": "The name of the VM scale set to create or update."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualMachineScaleSet"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "name",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSet"
}
```
## Operation: VirtualMachineScaleSetVMs_List
Gets a list of all virtual machines in a VM scale sets.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "virtualMachineScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "$filter": {
      "type": "string",
      "description": "The filter to apply to the operation."
    },
    "$select": {
      "type": "string",
      "description": "The list parameters."
    },
    "$expand": {
      "type": "string",
      "description": "The expand expression to apply to the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "virtualMachineScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetVMListResult"
}
```
## Operation: VirtualMachineScaleSets_Delete
Deletes a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_Get
Display information about a virtual machine scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSet"
}
```
## Operation: VirtualMachineScaleSets_Deallocate
Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "vmInstanceIDs": {
      "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceIDs"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_DeleteInstances
Deletes virtual machines in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "vmInstanceIDs": {
      "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceRequiredIDs"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "vmInstanceIDs",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_GetInstanceView
Gets the status of a VM scale set instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetInstanceView"
}
```
## Operation: VirtualMachineScaleSets_UpdateInstances
Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "vmInstanceIDs": {
      "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceRequiredIDs"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "vmInstanceIDs",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_PowerOff
Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "vmInstanceIDs": {
      "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceIDs"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_Reimage
Reimages (upgrade the operating system) one or more virtual machines in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_Restart
Restarts one or more virtual machines in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "vmInstanceIDs": {
      "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceIDs"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSets_ListSkus
Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetListSkusResult"
}
```
## Operation: VirtualMachineScaleSets_Start
Starts one or more virtual machines in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "vmInstanceIDs": {
      "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceIDs"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSetVMs_Delete
Deletes a virtual machine from a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSetVMs_Get
Gets a virtual machine from a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetVM"
}
```
## Operation: VirtualMachineScaleSetVMs_Deallocate
Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSetVMs_GetInstanceView
Gets the status of a virtual machine from a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineScaleSetVMInstanceView"
}
```
## Operation: VirtualMachineScaleSetVMs_PowerOff
Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSetVMs_Reimage
Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSetVMs_Restart
Restarts a virtual machine in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineScaleSetVMs_Start
Starts a virtual machine in a VM scale set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmScaleSetName": {
      "type": "string",
      "description": "The name of the VM scale set."
    },
    "instanceId": {
      "type": "string",
      "description": "The instance ID of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_List
Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineListResult"
}
```
## Operation: VirtualMachines_Delete
The operation to delete a virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_Get
Retrieves information about the model view or the instance view of a virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "$expand": {
      "type": "string",
      "description": "The expand expression to apply on the operation.",
      "enum": [
        "instanceView"
      ]
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachine"
}
```
## Operation: VirtualMachines_CreateOrUpdate
The operation to create or update a virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualMachine"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachine"
}
```
## Operation: VirtualMachines_Capture
Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to create similar VMs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "parameters": {
      "$ref": "#/definitions/VirtualMachineCaptureParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "parameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineCaptureResult"
}
```
## Operation: VirtualMachines_Deallocate
Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineExtensions_Delete
The operation to delete the extension.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine where the extension should be deleted."
    },
    "vmExtensionName": {
      "type": "string",
      "description": "The name of the virtual machine extension."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "vmExtensionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachineExtensions_Get
The operation to get the extension.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine containing the extension."
    },
    "vmExtensionName": {
      "type": "string",
      "description": "The name of the virtual machine extension."
    },
    "$expand": {
      "type": "string",
      "description": "The expand expression to apply on the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "vmExtensionName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineExtension"
}
```
## Operation: VirtualMachineExtensions_CreateOrUpdate
The operation to create or update the extension.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine where the extension should be create or updated."
    },
    "vmExtensionName": {
      "type": "string",
      "description": "The name of the virtual machine extension."
    },
    "extensionParameters": {
      "$ref": "#/definitions/VirtualMachineExtension"
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "vmExtensionName",
    "extensionParameters",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineExtension"
}
```
## Operation: VirtualMachines_Generalize
Sets the state of the virtual machine to generalized.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_PowerOff
The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the same provisioned resources. You are still charged for this virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_Redeploy
The operation to redeploy a virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_Restart
The operation to restart a virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_Start
The operation to start a virtual machine.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OperationStatusResponse"
}
```
## Operation: VirtualMachines_ListAvailableSizes
Lists all available virtual machine sizes to which the specified virtual machine can be resized.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "resourceGroupName": {
      "type": "string",
      "description": "The name of the resource group."
    },
    "vmName": {
      "type": "string",
      "description": "The name of the virtual machine."
    },
    "api-version": {
      "type": "string",
      "description": "Client Api Version."
    },
    "subscriptionId": {
      "type": "string",
      "description": "Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call."
    }
  },
  "additionalProperties": false,
  "required": [
    "resourceGroupName",
    "vmName",
    "api-version",
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VirtualMachineSizeListResult"
}
```
