# @datafire/azure_azsadmin_azurebridge

Client library for AzureBridgeAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_azurebridge
```
```js
let azure_azsadmin_azurebridge = require('@datafire/azure_azsadmin_azurebridge').create({
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

AzureBridge Admin Client.

## Actions

### Operations_List
Returns the list of support REST operations.


```js
azure_azsadmin_azurebridge.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationList](#operationlist)



## Definitions

### Compatibility
* Compatibility `object`: Product compatibility
  * description `string`: Full error message if any compatibility issues are found
  * isCompatible `boolean`: Tells if product is compatible with current device
  * issues `array`: List of all issues found
    * items `string` (values: HigherDeviceVersionRequired, LowerDeviceVersionRequired, CapacityBillingModelRequired, PayAsYouGoBillingModelRequired, DevelopmentBillingModelRequired, AzureADIdentitySystemRequired, ADFSIdentitySystemRequired, ConnectionToInternetRequired, ConnectionToAzureRequired, DisconnectedEnvironmentRequired): Compatibility issue
  * message `string`: Short error message if any compatibility issues are found

### CompatibilityIssue
* CompatibilityIssue `string` (values: HigherDeviceVersionRequired, LowerDeviceVersionRequired, CapacityBillingModelRequired, PayAsYouGoBillingModelRequired, DevelopmentBillingModelRequired, AzureADIdentitySystemRequired, ADFSIdentitySystemRequired, ConnectionToInternetRequired, ConnectionToAzureRequired, DisconnectedEnvironmentRequired): Compatibility issue

### ComputeRole
* ComputeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).

### DataDiskImage
* DataDiskImage `object`: Data disk image.
  * lun `integer`: The LUN.
  * sourceBlobSasUri `string`: SAS key for source blob.

### Display
* Display `object`: Contains the localized display information for this particular operation / action.
  * description `string`: The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views.
  * operation `string`: The localized, friendly name for the operation. Use the name as it will displayed to the user.
  * provider `string`: The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider.

### DownloadedProduct
* DownloadedProduct `object`: Properties for aggregate usage.
  * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
  * legalTerms `string`: Legal terms for the product.
  * links `array`: List of product links.
    * items `object`: Link to a product.
      * displayName `string`: Displayed name of product.
      * uri `string`: URI to product.
  * privacyPolicy `string`: Privacy policy of the product.
  * productDetailsProperties [ExtendedProductProperties](#extendedproductproperties)
  * provisioningState `string` (values: Stopped, Starting, Running, Stopping, Succeeded, Downloading): The provisioning state of the resource.
  * vmExtensionType `string`: Extension type of the VM.
  * billingPartNumber `string`: Billing part number.
  * compatibility `object`: Product compatibility
    * description `string`: Full error message if any compatibility issues are found
    * isCompatible `boolean`: Tells if product is compatible with current device
    * issues `array`: List of all issues found
      * items `string` (values: HigherDeviceVersionRequired, LowerDeviceVersionRequired, CapacityBillingModelRequired, PayAsYouGoBillingModelRequired, DevelopmentBillingModelRequired, AzureADIdentitySystemRequired, ADFSIdentitySystemRequired, ConnectionToInternetRequired, ConnectionToAzureRequired, DisconnectedEnvironmentRequired): Compatibility issue
    * message `string`: Short error message if any compatibility issues are found
  * description `string`: Description of the product.
  * displayName `string`: Name displayed for the product.
  * galleryItemIdentity `string`: Gallery item identity.
  * iconUris `object`: Icons for the gallery items.
    * hero `string`: The hero (815x290) icon relative path.
    * large `string`: The large (115x115) icon relative path.
    * medium `string`: The medium (90x90) icon relative path.
    * small `string`: The small (40x40) icon relative path.
    * wide `string`: The wide (255x115) icon relative path.
  * offer `string`: Offer name.
  * offerVersion `string`: Offer version.
  * payloadLength `integer`: Size in bytes.
  * productKind `string`: The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate.
  * productProperties `object`: Additional properties of the product
    * version `string`: The version of the product
  * publisherDisplayName `string`: Name of publisher.
  * publisherIdentifier `string`: Publisher identifier.
  * sku `string`: Product SKU.

### DownloadedProductResource
* DownloadedProductResource `object`: Downloaded product resource.
  * properties [DownloadedProduct](#downloadedproduct)
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

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

### GalleryIcons
* GalleryIcons `object`: Icons for the gallery items.
  * hero `string`: The hero (815x290) icon relative path.
  * large `string`: The large (115x115) icon relative path.
  * medium `string`: The medium (90x90) icon relative path.
  * small `string`: The small (40x40) icon relative path.
  * wide `string`: The wide (255x115) icon relative path.

### OperatingSystem
* OperatingSystem `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).

### Operation
* Operation `object`: Describes the supported REST operation.
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service.

### OperationList
* OperationList `object`: List of Operations
  * nextLink `string`: URI to the next page of operations.
  * value `array`: Array of operations
    * items [Operation](#operation)

### OsDiskImage
* OsDiskImage `object`: OS disk image.
  * operatingSystem [OperatingSystem](#operatingsystem)
  * sourceBlobSasUri `string`: SAS key for source blob.

### ProductBase
* ProductBase `object`: Base object for all product classes.
  * billingPartNumber `string`: Billing part number.
  * compatibility `object`: Product compatibility
    * description `string`: Full error message if any compatibility issues are found
    * isCompatible `boolean`: Tells if product is compatible with current device
    * issues `array`: List of all issues found
      * items `string` (values: HigherDeviceVersionRequired, LowerDeviceVersionRequired, CapacityBillingModelRequired, PayAsYouGoBillingModelRequired, DevelopmentBillingModelRequired, AzureADIdentitySystemRequired, ADFSIdentitySystemRequired, ConnectionToInternetRequired, ConnectionToAzureRequired, DisconnectedEnvironmentRequired): Compatibility issue
    * message `string`: Short error message if any compatibility issues are found
  * description `string`: Description of the product.
  * displayName `string`: Name displayed for the product.
  * galleryItemIdentity `string`: Gallery item identity.
  * iconUris `object`: Icons for the gallery items.
    * hero `string`: The hero (815x290) icon relative path.
    * large `string`: The large (115x115) icon relative path.
    * medium `string`: The medium (90x90) icon relative path.
    * small `string`: The small (40x40) icon relative path.
    * wide `string`: The wide (255x115) icon relative path.
  * offer `string`: Offer name.
  * offerVersion `string`: Offer version.
  * payloadLength `integer`: Size in bytes.
  * productKind `string`: The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate.
  * productProperties `object`: Additional properties of the product
    * version `string`: The version of the product
  * publisherDisplayName `string`: Name of publisher.
  * publisherIdentifier `string`: Publisher identifier.
  * sku `string`: Product SKU.

### ProductLink
* ProductLink `object`: Link to a product.
  * displayName `string`: Displayed name of product.
  * uri `string`: URI to product.

### ProductLinks
* ProductLinks `array`: List of product links.
  * items `object`: Link to a product.
    * displayName `string`: Displayed name of product.
    * uri `string`: URI to product.

### ProductProperties
* ProductProperties `object`: Additional properties of the product
  * version `string`: The version of the product

### ProvisioningState
* ProvisioningState `string` (values: Stopped, Starting, Running, Stopping, Succeeded, Downloading): The provisioning state of the resource.

### Resource
* Resource `object`: Base Resource Object
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

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


