# @datafire/azure_hybridcompute_hybridcompute

Client library for HybridComputeManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hybridcompute_hybridcompute
```
```js
let azure_hybridcompute_hybridcompute = require('@datafire/azure_hybridcompute_hybridcompute').create({
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

The Hybrid Compute Management Client.

## Actions

### Operations_List
Gets a list of hybrid compute operations.


```js
azure_hybridcompute_hybridcompute.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationListResult](#operationlistresult)

### Machines_ListBySubscription
Lists all the hybrid machines in the specified subscription. Use the nextLink property in the response to get the next page of hybrid machines.


```js
azure_hybridcompute_hybridcompute.Machines_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [MachineListResult](#machinelistresult)

### Machines_ListByResourceGroup
Lists all the hybrid machines in the specified resource group. Use the nextLink property in the response to get the next page of hybrid machines.


```js
azure_hybridcompute_hybridcompute.Machines_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.

#### Output
* output [MachineListResult](#machinelistresult)

### Machines_Delete
The operation to remove a hybrid machine identity in Azure.


```js
azure_hybridcompute_hybridcompute.Machines_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the hybrid machine.

#### Output
*Output schema unknown*

### Machines_Get
Retrieves information about the model view or the instance view of a hybrid machine.


```js
azure_hybridcompute_hybridcompute.Machines_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the hybrid machine.
  * $expand `string` (values: instanceView): The expand expression to apply on the operation.

#### Output
* output [Machine](#machine)

### Machines_Update
The operation to update a hybrid machine.


```js
azure_hybridcompute_hybridcompute.Machines_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the hybrid machine.
  * parameters **required** [MachineUpdate](#machineupdate)

#### Output
* output [Machine](#machine)

### Machines_CreateOrUpdate
The operation to create or update a hybrid machine resource identity in Azure.


```js
azure_hybridcompute_hybridcompute.Machines_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the hybrid machine.
  * parameters **required** [Machine](#machine)

#### Output
* output [Machine](#machine)

### MachineExtensions_List
The operation to get all extensions of a non-Azure machine


```js
azure_hybridcompute_hybridcompute.MachineExtensions_List({
  "resourceGroupName": "",
  "name": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the machine containing the extension.
  * $expand `string`: The expand expression to apply on the operation.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [MachineExtensionsListResult](#machineextensionslistresult)

### MachineExtensions_Delete
The operation to delete the extension.


```js
azure_hybridcompute_hybridcompute.MachineExtensions_Delete({
  "resourceGroupName": "",
  "name": "",
  "extensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the machine where the extension should be deleted.
  * extensionName **required** `string`: The name of the machine extension.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### MachineExtensions_Get
The operation to get the extension.


```js
azure_hybridcompute_hybridcompute.MachineExtensions_Get({
  "resourceGroupName": "",
  "name": "",
  "extensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the machine containing the extension.
  * extensionName **required** `string`: The name of the machine extension.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [MachineExtension](#machineextension)

### MachineExtensions_Update
The operation to create or update the extension.


```js
azure_hybridcompute_hybridcompute.MachineExtensions_Update({
  "resourceGroupName": "",
  "name": "",
  "extensionName": "",
  "extensionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the machine where the extension should be created or updated.
  * extensionName **required** `string`: The name of the machine extension.
  * extensionParameters **required** [MachineExtensionUpdate](#machineextensionupdate)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [MachineExtension](#machineextension)

### MachineExtensions_CreateOrUpdate
The operation to create or update the extension.


```js
azure_hybridcompute_hybridcompute.MachineExtensions_CreateOrUpdate({
  "resourceGroupName": "",
  "name": "",
  "extensionName": "",
  "extensionParameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the machine where the extension should be created or updated.
  * extensionName **required** `string`: The name of the machine extension.
  * extensionParameters **required** [MachineExtension](#machineextension)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [MachineExtension](#machineextension)

### Machines_Reconnect
The operation to reconnect a hybrid machine resource to its identity in Azure.


```js
azure_hybridcompute_hybridcompute.Machines_Reconnect({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "name": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * name **required** `string`: The name of the hybrid machine.
  * parameters **required** [MachineReconnect](#machinereconnect)

#### Output
* output [Machine](#machine)



## Definitions

### ErrorDetail
* Error details. `object`
  * code **required** `string`: The error's code.
  * details `array`: Additional error details.
    * items [ErrorDetail](#errordetail)
  * message **required** `string`: A human readable error message.
  * target `string`: Indicates which property in the request is responsible for the error.

### ErrorResponse


### Machine
* Machine `object`: Describes a hybrid machine.
  * identity
    * principalId `string`: The principal ID of resource identity.
    * tenantId `string`: The tenant ID of resource.
    * type `string` (values: SystemAssigned): The identity type.
  * properties: Hybrid Compute Machine properties
    * agentVersion `string`: The hybrid machine agent full version.
    * clientPublicKey `string`: Public Key that the client provides to be used during initial resource onboarding
    * displayName `string`: Specifies the hybrid machine display name.
    * errorDetails `array`: Details about the error state.
      * items [ErrorDetail](#errordetail)
    * extensions `array`: Machine Extensions information
      * items [MachineExtensionInstanceView](#machineextensioninstanceview)
    * lastStatusChange `string`: The time of the last status change.
    * locationData `object`: Metadata pertaining to the geographic location of the resource.
      * city `string`: The city or locality where the resource is located.
      * countryOrRegion `string`: The country or region where the resource is located
      * district `string`: The district, state, or province where the resource is located.
      * name **required** `string`: A canonical name for the geographic or physical location.
    * machineFqdn `string`: Specifies the hybrid machine FQDN.
    * osName `string`: The Operating System running on the hybrid machine.
    * osProfile: Specifies the operating system settings for the hybrid machine.
      * computerName `string`: Specifies the host OS name of the hybrid machine.
    * osVersion `string`: The version of Operating System running on the hybrid machine.
    * provisioningState `string`: The provisioning state, which only appears in the response.
    * status `string` (values: Connected, Disconnected, Error): The status of the hybrid machine agent.
    * vmId `string`: Specifies the hybrid machine unique ID.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### MachineExtension
* MachineExtension `object`: Describes a Machine Extension.
  * properties: Describes Machine Extension Properties.
    * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
    * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
    * instanceView: The machine extension instance view.
      * name `string`: The machine extension name.
      * status `object`: Instance view status.
        * code `string`: The status code.
        * displayStatus `string`: The short localizable label for the status.
        * level `string` (values: Info, Warning, Error): The level code.
        * message `string`: The detailed status message, including for alerts and error messages.
        * time `string`: The time of the status.
      * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
      * typeHandlerVersion `string`: Specifies the version of the script handler.
    * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
    * provisioningState `string`: The provisioning state, which only appears in the response.
    * publisher `string`: The name of the extension handler publisher.
    * settings `object`: Json formatted public settings for the extension.
    * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
    * typeHandlerVersion `string`: Specifies the version of the script handler.
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### MachineExtensionInstanceView
* MachineExtensionInstanceView `object`: Describes the Machine Extension Instance View.
  * name `string`: The machine extension name.
  * status `object`: Instance view status.
    * code `string`: The status code.
    * displayStatus `string`: The short localizable label for the status.
    * level `string` (values: Info, Warning, Error): The level code.
    * message `string`: The detailed status message, including for alerts and error messages.
    * time `string`: The time of the status.
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### MachineExtensionProperties
* MachineExtensionProperties `object`: Describes the properties of a Machine Extension.
  * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
  * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
  * instanceView: The machine extension instance view.
    * name `string`: The machine extension name.
    * status `object`: Instance view status.
      * code `string`: The status code.
      * displayStatus `string`: The short localizable label for the status.
      * level `string` (values: Info, Warning, Error): The level code.
      * message `string`: The detailed status message, including for alerts and error messages.
      * time `string`: The time of the status.
    * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
    * typeHandlerVersion `string`: Specifies the version of the script handler.
  * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### MachineExtensionUpdate
* MachineExtensionUpdate `object`: Describes a Machine Extension Update.
  * properties: Describes Machine Extension Update Properties.
    * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
    * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
    * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
    * publisher `string`: The name of the extension handler publisher.
    * settings `object`: Json formatted public settings for the extension.
    * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
    * typeHandlerVersion `string`: Specifies the version of the script handler.
  * tags `object`: Resource tags

### MachineExtensionUpdateProperties
* MachineExtensionUpdateProperties `object`: Describes the properties of a Machine Extension.
  * autoUpgradeMinorVersion `boolean`: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
  * forceUpdateTag `string`: How the extension handler should be forced to update even if the extension configuration has not changed.
  * protectedSettings `object`: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
  * publisher `string`: The name of the extension handler publisher.
  * settings `object`: Json formatted public settings for the extension.
  * type `string`: Specifies the type of the extension; an example is "CustomScriptExtension".
  * typeHandlerVersion `string`: Specifies the version of the script handler.

### MachineExtensionsListResult
* MachineExtensionsListResult `object`: Describes the Machine Extensions List Result.
  * nextLink `string`: The uri to fetch the next page of machine extensions. Call ListNext() with this to fetch the next page of extensions.
  * value `array`: The list of extensions
    * items [MachineExtension](#machineextension)

### MachineListResult
* MachineListResult `object`: The List hybrid machine operation response.
  * nextLink `string`: The URI to fetch the next page of Machines. Call ListNext() with this URI to fetch the next page of hybrid machines.
  * value **required** `array`: The list of hybrid machines.
    * items [Machine](#machine)

### MachineProperties
* MachineProperties `object`: Describes the properties of a hybrid machine.
  * agentVersion `string`: The hybrid machine agent full version.
  * clientPublicKey `string`: Public Key that the client provides to be used during initial resource onboarding
  * displayName `string`: Specifies the hybrid machine display name.
  * errorDetails `array`: Details about the error state.
    * items [ErrorDetail](#errordetail)
  * extensions `array`: Machine Extensions information
    * items [MachineExtensionInstanceView](#machineextensioninstanceview)
  * lastStatusChange `string`: The time of the last status change.
  * locationData `object`: Metadata pertaining to the geographic location of the resource.
    * city `string`: The city or locality where the resource is located.
    * countryOrRegion `string`: The country or region where the resource is located
    * district `string`: The district, state, or province where the resource is located.
    * name **required** `string`: A canonical name for the geographic or physical location.
  * machineFqdn `string`: Specifies the hybrid machine FQDN.
  * osName `string`: The Operating System running on the hybrid machine.
  * osProfile: Specifies the operating system settings for the hybrid machine.
    * computerName `string`: Specifies the host OS name of the hybrid machine.
  * osVersion `string`: The version of Operating System running on the hybrid machine.
  * provisioningState `string`: The provisioning state, which only appears in the response.
  * status `string` (values: Connected, Disconnected, Error): The status of the hybrid machine agent.
  * vmId `string`: Specifies the hybrid machine unique ID.

### MachineReconnect
* MachineReconnect `object`: Describes a hybrid machine reconnect.
  * properties: Hybrid Compute Machine properties
    * clientPublicKey `string`: Public Key that the client provides to be used during initial resource onboarding.
    * vmId `string`: Specifies the hybrid machine unique ID.

### MachineReconnectProperties
* MachineReconnectProperties `object`: Describes the properties required to reconnect a hybrid machine.
  * clientPublicKey `string`: Public Key that the client provides to be used during initial resource onboarding.
  * vmId `string`: Specifies the hybrid machine unique ID.

### MachineUpdate
* MachineUpdate `object`: Describes a hybrid machine Update.
  * identity: Hybrid Compute Machine Managed Identity
    * principalId `string`: The principal ID of resource identity.
    * tenantId `string`: The tenant ID of resource.
    * type `string` (values: SystemAssigned): The identity type.
  * properties: Hybrid Compute Machine properties
    * locationData `object`: Metadata pertaining to the geographic location of the resource.
      * city `string`: The city or locality where the resource is located.
      * countryOrRegion `string`: The country or region where the resource is located
      * district `string`: The district, state, or province where the resource is located.
      * name **required** `string`: A canonical name for the geographic or physical location.
  * tags `object`: Resource tags

### MachineUpdateProperties
* MachineUpdateProperties `object`: Describes the ARM updatable properties of a hybrid machine.
  * locationData `object`: Metadata pertaining to the geographic location of the resource.
    * city `string`: The city or locality where the resource is located.
    * countryOrRegion `string`: The country or region where the resource is located
    * district `string`: The district, state, or province where the resource is located.
    * name **required** `string`: A canonical name for the geographic or physical location.

### OSProfile
* OSProfile `object`: Specifies the operating system settings for the hybrid machine.
  * computerName `string`: Specifies the host OS name of the hybrid machine.

### OperationListResult
* OperationListResult `object`: The List Compute Operation operation response.
  * value `array`: The list of compute operations
    * items [OperationValue](#operationvalue)

### OperationValue
* OperationValue `object`: Describes the properties of a Compute Operation value.
  * display: Display properties
    * description `string`: The description of the operation.
    * operation `string`: The display name of the compute operation.
    * provider `string`: The resource provider for the operation.
    * resource `string`: The display name of the resource the operation applies to.
  * name `string`: The name of the compute operation.
  * origin `string`: The origin of the compute operation.

### OperationValueDisplay
* OperationValueDisplay `object`: Describes the properties of a Hybrid Compute Operation Value Display.
  * description `string`: The description of the operation.
  * operation `string`: The display name of the compute operation.
  * provider `string`: The resource provider for the operation.
  * resource `string`: The display name of the resource the operation applies to.

### UpdateResource
* UpdateResource `object`: The Update Resource model definition.
  * tags `object`: Resource tags


