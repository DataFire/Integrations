# @datafire/azure_azurestack_product

Client library for AzureStack Azure Bridge Client

## Installation and Usage
```bash
npm install --save @datafire/azure_azurestack_product
```
```js
let azure_azurestack_product = require('@datafire/azure_azurestack_product').create({
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

### Products_List
Returns a list of products.


```js
azure_azurestack_product.Products_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ProductList](#productlist)

### Products_GetProducts
Returns a list of products.


```js
azure_azurestack_product.Products_GetProducts({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * deviceConfiguration [DeviceConfiguration](#deviceconfiguration)
  * api-version **required** `string`: Client API Version.

#### Output
* output [ProductList](#productlist)

### Products_Get
Returns the specified product.


```js
azure_azurestack_product.Products_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Product](#product)

### Products_GetProduct
Returns the specified product.


```js
azure_azurestack_product.Products_GetProduct({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.
  * deviceConfiguration [DeviceConfiguration](#deviceconfiguration)

#### Output
* output [Product](#product)

### Products_ListDetails
Returns the extended properties of a product.


```js
azure_azurestack_product.Products_ListDetails({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ExtendedProduct](#extendedproduct)

### Products_UploadLog
Returns the specified product.


```js
azure_azurestack_product.Products_UploadLog({
  "subscriptionId": "",
  "resourceGroup": "",
  "registrationName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: Name of the resource group.
  * registrationName **required** `string`: Name of the Azure Stack registration.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client API Version.
  * marketplaceProductLogUpdate [MarketplaceProductLogUpdate](#marketplaceproductlogupdate)

#### Output
* output [ProductLog](#productlog)



## Definitions

### Compatibility
* Compatibility `object`: Product compatibility
  * description `string`: Full error message if any compatibility issues are found
  * isCompatible `boolean`: Tells if product is compatible with current device
  * issues `array`: List of all issues found
    * items [CompatibilityIssue](#compatibilityissue)
  * message `string`: Short error message if any compatibility issues are found

### CompatibilityIssue
* CompatibilityIssue `string` (values: HigherDeviceVersionRequired, LowerDeviceVersionRequired, CapacityBillingModelRequired, PayAsYouGoBillingModelRequired, DevelopmentBillingModelRequired, AzureADIdentitySystemRequired, ADFSIdentitySystemRequired, ConnectionToInternetRequired, ConnectionToAzureRequired, DisconnectedEnvironmentRequired): Compatibility issue

### ComputeRole
* ComputeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).

### DataDiskImage
* DataDiskImage `object`: Data disk image.
  * lun `integer`: The LUN.
  * sourceBlobSasUri `string`: SAS key for source blob.

### DeviceConfiguration
* DeviceConfiguration `object`: Device Configuration.
  * deviceVersion `string`: Version of the device.
  * identitySystem `string` (values: AzureAD, ADFS): Identity system of the device.

### ExtendedProduct
* ExtendedProduct `object`: Extended description about the product required for installing it into Azure Stack.
  * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
  * productKind `string`: Specifies the kind of the product (virtualMachine or virtualMachineExtension).
  * properties [ExtendedProductProperties](#extendedproductproperties)

### ExtendedProductProperties
* ExtendedProductProperties `object`: Product information.
  * computeRole [ComputeRole](#computerole)
  * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
  * sourceBlob [Uri](#uri)
  * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
  * version `string`: Specifies product version.
  * vmOsType [OperatingSystem](#operatingsystem)
  * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.
  * dataDiskImages `array`: List of attached data disks.
    * items [DataDiskImage](#datadiskimage)
  * osDiskImage [OsDiskImage](#osdiskimage)
  * version `string`: Specifies product version.

### IconUris
* IconUris `object`: Links to product icons.
  * hero `string`: URI to hero icon.
  * large `string`: URI to large icon.
  * medium `string`: URI to medium icon.
  * small `string`: URI to small icon.
  * wide `string`: URI to wide icon.

### MarketplaceProductLogUpdate
* MarketplaceProductLogUpdate `object`: Update details for product log.
  * details `string`: Error details related to operation.
  * error `string`: Error related to the operation.
  * operation `string`: Operation to log.
  * status `string`: Operation status to log.

### OperatingSystem
* OperatingSystem `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).

### OsDiskImage
* OsDiskImage `object`: OS disk image.
  * operatingSystem [OperatingSystem](#operatingsystem)
  * sourceBlobSasUri `string`: SAS key for source blob.

### Product
* Product `object`: Product information.
  * properties [ProductNestedProperties](#productnestedproperties)
  * etag `string`: The entity tag used for optimistic concurrency when modifying the resource.
  * id `string`: ID of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### ProductLink
* ProductLink `object`: Link with additional information about a product.
  * displayName `string`: The description of the link.
  * uri `string`: The URI corresponding to the link.

### ProductList
* ProductList `object`: Pageable list of products.
  * nextLink `string`: URI to the next page.
  * value `array`: List of products.
    * items [Product](#product)

### ProductLog
* ProductLog `object`: Product action log.
  * details `string`: Operation error details.
  * endDate `string`: Operation end datetime.
  * error `string`: Operation error data.
  * id `string`: Log ID.
  * operation `string`: Logged operation.
  * productId `string`: Logged product ID.
  * registrationName `string`: Logged registration name.
  * resourceGroupName `string`: Logged resource group name.
  * startDate `string`: Operation start datetime.
  * status `string`: Operation status.
  * subscriptionId `string`: Logged subscription ID.

### ProductNestedProperties
* ProductNestedProperties `object`: Properties portion of the product resource.
  * billingPartNumber `string`: The part number used for billing purposes.
  * compatibility [Compatibility](#compatibility)
  * description `string`: The description of the product.
  * displayName `string`: The display name of the product.
  * galleryItemIdentity `string`: The identifier of the gallery item corresponding to the product.
  * iconUris [IconUris](#iconuris)
  * legalTerms `string`: The legal terms.
  * links `array`: Additional links available for this product.
    * items [ProductLink](#productlink)
  * offer `string`: The offer representing the product.
  * offerVersion `string`: The version of the product offer.
  * payloadLength `integer`: The length of product content.
  * privacyPolicy `string`: The privacy policy.
  * productKind `string`: The kind of the product (virtualMachine or virtualMachineExtension)
  * productProperties [ProductProperties](#productproperties)
  * publisherDisplayName `string`: The user-friendly name of the product publisher.
  * publisherIdentifier `string`: Publisher identifier.
  * sku `string`: The product SKU.
  * vmExtensionType `string`: The type of the Virtual Machine Extension.

### ProductProperties
* ProductProperties `object`: Additional properties of the product
  * version `string`: The version.

### Uri
* Uri `object`: The URI.
  * uri `string`: The URI.

### VirtualMachineExtensionProductProperties
* VirtualMachineExtensionProductProperties `object`: Product information.
  * computeRole [ComputeRole](#computerole)
  * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
  * sourceBlob [Uri](#uri)
  * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
  * version `string`: Specifies product version.
  * vmOsType [OperatingSystem](#operatingsystem)
  * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.

### VirtualMachineProductProperties
* VirtualMachineProductProperties `object`: Product information.
  * dataDiskImages `array`: List of attached data disks.
    * items [DataDiskImage](#datadiskimage)
  * osDiskImage [OsDiskImage](#osdiskimage)
  * version `string`: Specifies product version.


