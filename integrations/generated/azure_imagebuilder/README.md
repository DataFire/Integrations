# @datafire/azure_imagebuilder

Client library for VirtualMachineImageTemplate

## Installation and Usage
```bash
npm install --save @datafire/azure_imagebuilder
```
```js
let azure_imagebuilder = require('@datafire/azure_imagebuilder').create({
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

Virtual Machine Image Template

## Actions

### Operations_List
Lists available operations for the Microsoft.VirtualMachineImages provider


```js
azure_imagebuilder.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### VirtualMachineImageTemplates_List
Gets information about the VM image templates associated with the subscription.


```js
azure_imagebuilder.VirtualMachineImageTemplates_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ImageTemplateListResult](#imagetemplatelistresult)

### VirtualMachineImageTemplates_ListByResourceGroup
Gets information about the VM image templates associated with the specified resource group.


```js
azure_imagebuilder.VirtualMachineImageTemplates_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ImageTemplateListResult](#imagetemplatelistresult)

### VirtualMachineImageTemplates_Delete
Delete a virtual machine image template


```js
azure_imagebuilder.VirtualMachineImageTemplates_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template

#### Output
*Output schema unknown*

### VirtualMachineImageTemplates_Get
Get information about a virtual machine image template


```js
azure_imagebuilder.VirtualMachineImageTemplates_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template

#### Output
* output [ImageTemplate](#imagetemplate)

### VirtualMachineImageTemplates_Update
Update the tags for this Virtual Machine Image Template


```js
azure_imagebuilder.VirtualMachineImageTemplates_Update({
  "parameters": null,
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ImageTemplateUpdateParameters](#imagetemplateupdateparameters)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ImageTemplate](#imagetemplate)

### VirtualMachineImageTemplates_CreateOrUpdate
Create or update a virtual machine image template


```js
azure_imagebuilder.VirtualMachineImageTemplates_CreateOrUpdate({
  "parameters": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ImageTemplate](#imagetemplate)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template

#### Output
* output [ImageTemplate](#imagetemplate)

### VirtualMachineImageTemplates_Run
Create artifacts from a existing image template


```js
azure_imagebuilder.VirtualMachineImageTemplates_Run({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template

#### Output
*Output schema unknown*

### VirtualMachineImageTemplates_ListRunOutputs
List all run outputs for the specified Image Template resource


```js
azure_imagebuilder.VirtualMachineImageTemplates_ListRunOutputs({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template

#### Output
* output [RunOutputCollection](#runoutputcollection)

### VirtualMachineImageTemplates_GetRunOutput
Get the specified run output for the specified image template resource


```js
azure_imagebuilder.VirtualMachineImageTemplates_GetRunOutput({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "imageTemplateName": "",
  "runOutputName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription Id forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * imageTemplateName **required** `string`: The name of the image Template
  * runOutputName **required** `string`: The name of the run output

#### Output
* output [RunOutput](#runoutput)



## Definitions

### ApiError
* ApiError `object`: Api error.
  * code `string`: The error code.
  * details `array`: The Api error details
    * items [ApiErrorBase](#apierrorbase)
  * innerError [InnerError](#innererror)
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### ApiErrorBase
* ApiErrorBase `object`: Api error base.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### ImageTemplate
* ImageTemplate `object`: Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider
  * identity [ImageTemplateIdentity](#imagetemplateidentity)
  * properties [ImageTemplateProperties](#imagetemplateproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ImageTemplateCustomizer
* ImageTemplateCustomizer `object`: Describes a unit of image customization
  * name `string`: Friendly Name to provide context on what this customization step does
  * type **required** `string`: The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateDistributor
* ImageTemplateDistributor `object`: Generic distribution object
  * artifactTags `object`: Tags that will be applied to the artifact once it has been created/updated by the distributor.
  * runOutputName **required** `string`: The name to be used for the associated RunOutput.
  * type **required** `string`: Type of distribution.

### ImageTemplateFileCustomizer
* ImageTemplateFileCustomizer `object`: Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner
  * destination `string`: The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
  * sha256Checksum `string`: SHA256 checksum of the file provided in the sourceUri field above
  * sourceUri `string`: The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
  * name `string`: Friendly Name to provide context on what this customization step does
  * type **required** `string`: The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateIdentity
* ImageTemplateIdentity `object`: Identity for the image template.
  * type `string` (values: UserAssigned, None): The type of identity used for the image template. The type 'None' will remove any identities from the image template.
  * userAssignedIdentities `object`: The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

### ImageTemplateIsoSource
* ImageTemplateIsoSource `object`: Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's.
  * sha256Checksum **required** `string`: SHA256 Checksum of the ISO image.
  * sourceUri **required** `string`: URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation.
  * type **required** `string`: Specifies the type of source image you want to start with.

### ImageTemplateLastRunStatus
* ImageTemplateLastRunStatus `object`: Describes the latest status of running an image template
  * endTime `string`: End time of the last run (UTC)
  * message `string`: Verbose information about the last run state
  * runState `string` (values: Running, Succeeded, PartiallySucceeded, Failed): State of the last run
  * runSubState `string` (values: Queued, Building, Customizing, Distributing): Sub-state of the last run
  * startTime `string`: Start time of the last run (UTC)

### ImageTemplateListResult
* ImageTemplateListResult `object`: The result of List image templates operation
  * nextLink `string`: The continuation token.
  * value `array`: An array of image templates
    * items [ImageTemplate](#imagetemplate)

### ImageTemplateManagedImageDistributor
* ImageTemplateManagedImageDistributor `object`: Distribute as a Managed Disk Image.
  * imageId **required** `string`: Resource Id of the Managed Disk Image
  * location **required** `string`: Azure location for the image, should match if image already exists
  * artifactTags `object`: Tags that will be applied to the artifact once it has been created/updated by the distributor.
  * runOutputName **required** `string`: The name to be used for the associated RunOutput.
  * type **required** `string`: Type of distribution.

### ImageTemplateManagedImageSource
* ImageTemplateManagedImageSource `object`: Describes an image source that is a managed image in customer subscription.
  * imageId **required** `string`: ARM resource id of the managed image in customer subscription
  * type **required** `string`: Specifies the type of source image you want to start with.

### ImageTemplatePlatformImageSource
* ImageTemplatePlatformImageSource `object`: Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
  * offer `string`: Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
  * publisher `string`: Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
  * sku `string`: Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
  * version `string`: Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
  * type **required** `string`: Specifies the type of source image you want to start with.

### ImageTemplatePowerShellCustomizer
* ImageTemplatePowerShellCustomizer `object`: Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
  * inline `array`: Array of PowerShell commands to execute
    * items `string`
  * runElevated `boolean`: If specified, the PowerShell script will be run with elevated privileges
  * scriptUri `string`: URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
  * sha256Checksum `string`: SHA256 checksum of the power shell script provided in the scriptUri field above
  * validExitCodes `array`: Valid exit codes for the PowerShell script. [Default: 0]
    * items `integer`
  * name `string`: Friendly Name to provide context on what this customization step does
  * type **required** `string`: The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateProperties
* ImageTemplateProperties `object`: Describes the properties of an image template
  * buildTimeoutInMinutes `integer`: Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours).
  * customize `array`: Specifies the properties used to describe the customization steps of the image, like Image source etc
    * items [ImageTemplateCustomizer](#imagetemplatecustomizer)
  * distribute **required** `array`: The distribution targets where the image output needs to go to.
    * items [ImageTemplateDistributor](#imagetemplatedistributor)
  * lastRunStatus [ImageTemplateLastRunStatus](#imagetemplatelastrunstatus)
  * provisioningError [ProvisioningError](#provisioningerror)
  * provisioningState [ProvisioningState](#provisioningstate)
  * source **required** [ImageTemplateSource](#imagetemplatesource)
  * vmProfile [ImageTemplateVmProfile](#imagetemplatevmprofile)

### ImageTemplateRestartCustomizer
* ImageTemplateRestartCustomizer `object`: Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner
  * restartCheckCommand `string`: Command to check if restart succeeded [Default: '']
  * restartCommand `string`: Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
  * restartTimeout `string`: Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
  * name `string`: Friendly Name to provide context on what this customization step does
  * type **required** `string`: The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateSharedImageDistributor
* ImageTemplateSharedImageDistributor `object`: Distribute via Shared Image Gallery.
  * galleryImageId **required** `string`: Resource Id of the Shared Image Gallery image
  * replicationRegions **required** `array`: A list of regions that the image will be replicated to
    * items `string`
  * artifactTags `object`: Tags that will be applied to the artifact once it has been created/updated by the distributor.
  * runOutputName **required** `string`: The name to be used for the associated RunOutput.
  * type **required** `string`: Type of distribution.

### ImageTemplateSharedImageVersionSource
* ImageTemplateSharedImageVersionSource `object`: Describes an image source that is an image version in a shared image gallery.
  * imageVersionId **required** `string`: ARM resource id of the image version in the shared image gallery
  * type **required** `string`: Specifies the type of source image you want to start with.

### ImageTemplateShellCustomizer
* ImageTemplateShellCustomizer `object`: Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
  * inline `array`: Array of shell commands to execute
    * items `string`
  * scriptUri `string`: URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
  * sha256Checksum `string`: SHA256 checksum of the shell script provided in the scriptUri field
  * name `string`: Friendly Name to provide context on what this customization step does
  * type **required** `string`: The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer

### ImageTemplateSource
* ImageTemplateSource `object`: Describes a virtual machine image source for building, customizing and distributing
  * type **required** `string`: Specifies the type of source image you want to start with.

### ImageTemplateUpdateParameters
* ImageTemplateUpdateParameters `object`: Parameters for updating an image template.
  * identity [ImageTemplateIdentity](#imagetemplateidentity)
  * tags `object`: The user-specified tags associated with the image template.

### ImageTemplateVhdDistributor
* ImageTemplateVhdDistributor `object`: Distribute via VHD in a storage account.
  * artifactTags `object`: Tags that will be applied to the artifact once it has been created/updated by the distributor.
  * runOutputName **required** `string`: The name to be used for the associated RunOutput.
  * type **required** `string`: Type of distribution.

### ImageTemplateVmProfile
* ImageTemplateVmProfile `object`: Describes the virtual machine used to build, customize and capture images
  * vmSize `string`: Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2).

### InnerError
* InnerError `object`: Inner error details.
  * errorDetail `string`: The internal error message or exception dump.
  * exceptionType `string`: The exception type.

### Operation
* A REST API operation `object`
  * display `object`
    * description `string`
    * operation `string`: For example: read, write, delete, or listKeys/action
    * provider `string`
    * resource `string`
  * name `string`: This is of the format {provider}/{resource}/{operation}
  * origin `string`
  * properties `object`

### OperationListResult
* Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results. `object`
  * nextLink `string`
  * value `array`
    * items [Operation](#operation)

### ProvisioningError
* ProvisioningError `object`: Describes the error happened when create or update an image template
  * message `string`: Verbose error message about the provisioning failure
  * provisioningErrorCode `string` (values: BadSourceType, BadPIRSource, BadISOSource, BadManagedImageSource, BadSharedImageVersionSource, BadCustomizerType, UnsupportedCustomizerType, NoCustomizerScript, BadDistributeType, BadSharedImageDistribute, ServerError, Other): Error code of the provisioning failure

### ProvisioningState
* ProvisioningState `string` (values: Creating, Updating, Succeeded, Failed, Deleting): Provisioning state of the resource

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### RunOutput
* RunOutput `object`: Represents an output that was created by running an image template.
  * properties [RunOutputProperties](#runoutputproperties)
  * id `string`: Resource Id
  * name **required** `string`: Resource name
  * type `string`: Resource type

### RunOutputCollection
* RunOutputCollection `object`: The result of List run outputs operation
  * nextLink `string`: The continuation token.
  * value `array`: An array of run outputs
    * items [RunOutput](#runoutput)

### RunOutputProperties
* RunOutputProperties `object`: Describes the properties of a run output
  * artifactId `string`: The resource id of the artifact.
  * artifactUri `string`: The location URI of the artifact.
  * provisioningState [ProvisioningState](#provisioningstate)

### SubResource
* SubResource `object`: The Sub Resource model definition.
  * id `string`: Resource Id
  * name **required** `string`: Resource name
  * type `string`: Resource type


