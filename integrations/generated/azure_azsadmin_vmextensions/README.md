# @datafire/azure_azsadmin_vmextensions

Client library for Compute Admin Client

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_vmextensions
```
```js
let azure_azsadmin_vmextensions = require('@datafire/azure_azsadmin_vmextensions').create({
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

### VMExtensions_List
List of all Virtual Machine Extension Images for the current location are returned.


```js
azure_azsadmin_vmextensions.VMExtensions_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * api-version **required** `string`: Client API Version.

#### Output
* output [VMExtensionList](#vmextensionlist)

### VMExtensions_Delete
Deletes specified Virtual Machine Extension Image.


```js
azure_azsadmin_vmextensions.VMExtensions_Delete({
  "subscriptionId": "",
  "location": "",
  "publisher": "",
  "type": "",
  "version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * publisher **required** `string`: Name of the publisher.
  * type **required** `string`: Type of extension.
  * version **required** `string`: The version of the resource.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### VMExtensions_Get
Returns requested Virtual Machine Extension Image matching publisher, type, version.


```js
azure_azsadmin_vmextensions.VMExtensions_Get({
  "subscriptionId": "",
  "location": "",
  "publisher": "",
  "type": "",
  "version": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * publisher **required** `string`: Name of the publisher.
  * type **required** `string`: Type of extension.
  * version **required** `string`: The version of the resource.
  * api-version **required** `string`: Client API Version.

#### Output
* output [VMExtension](#vmextension)

### VMExtensions_Create
Create a Virtual Machine Extension Image with publisher, version.


```js
azure_azsadmin_vmextensions.VMExtensions_Create({
  "subscriptionId": "",
  "location": "",
  "publisher": "",
  "type": "",
  "version": "",
  "api-version": "",
  "extension": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * publisher **required** `string`: Name of the publisher.
  * type **required** `string`: Type of extension.
  * version **required** `string`: The version of the resource.
  * api-version **required** `string`: Client API Version.
  * extension **required** [VMExtensionParameters](#vmextensionparameters)

#### Output
* output [VMExtension](#vmextension)



## Definitions

### AzureBlob
* AzureBlob `object`: Azure or AzureStack blob information.
  * uri `string`: URI to Azure or AzureStack blob.

### VMExtension
* VMExtension `object`: Virtual Machine Extension Image.
  * properties [VMExtensionProperties](#vmextensionproperties)
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### VMExtensionList
* VMExtensionList `array`: List of virtual machine extensions.
  * items [VMExtension](#vmextension)

### VMExtensionParameters
* VMExtensionParameters `object`: Parameters used to create a new Virtual Machine Extension Image.
  * properties [VMExtensionProperties](#vmextensionproperties)

### VMExtensionProperties
* VMExtensionProperties `object`: Properties of a Virtual Machine Extension Image.
  * computeRole `string`: Compute role
  * isSystemExtension `boolean`: Indicates if the extension is for the system.
  * provisioningState `string` (values: Creating, Failed, Succeeded, Canceled): The provisioning state of the resource.
  * sourceBlob [AzureBlob](#azureblob)
  * supportMultipleExtensions `boolean`: True if supports multiple extensions.
  * vmOsType `string` (values: Unknown, Windows, Linux): Operating system type.
  * vmScaleSetEnabled `boolean`: Value indicating whether the extension is enabled for virtual machine scale set support.


