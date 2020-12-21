# @datafire/azure_azsadmin_downloadedproduct

Client library for AzureBridgeAdminClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_downloadedproduct
```
```js
let azure_azsadmin_downloadedproduct = require('@datafire/azure_azsadmin_downloadedproduct').create({
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

### DownloadedProducts_List
Get a list of downloaded products.


```js
azure_azsadmin_downloadedproduct.DownloadedProducts_List({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DownloadedProductResourcesPage](#downloadedproductresourcespage)

### DownloadedProducts_Delete
Delete a downloaded product.


```js
azure_azsadmin_downloadedproduct.DownloadedProducts_Delete({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Downloaded product resource.
  * properties `object`: Properties for aggregate usage.
    * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
    * legalTerms `string`: Legal terms for the product.
    * links `array`: List of product links.
      * items `object`: Link to a product.
        * displayName `string`: Displayed name of product.
        * uri `string`: URI to product.
    * privacyPolicy `string`: Privacy policy of the product.
    * productDetailsProperties `object`: Product information.
      * computeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).
      * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
      * sourceBlob `object`: The URI.
        * uri `string`: The URI.
      * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
      * version `string`: Specifies product version.
      * vmOsType `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
      * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.
      * dataDiskImages `array`: List of attached data disks.
        * items `object`: Data disk image.
          * lun `integer`: The LUN.
          * sourceBlobSasUri `string`: SAS key for source blob.
      * osDiskImage `object`: OS disk image.
        * operatingSystem `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
        * sourceBlobSasUri `string`: SAS key for source blob.
      * version `string`: Specifies product version.
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
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### DownloadedProducts_Get
Get a downloaded product.


```js
azure_azsadmin_downloadedproduct.DownloadedProducts_Get({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "productName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Downloaded product resource.
  * properties `object`: Properties for aggregate usage.
    * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
    * legalTerms `string`: Legal terms for the product.
    * links `array`: List of product links.
      * items `object`: Link to a product.
        * displayName `string`: Displayed name of product.
        * uri `string`: URI to product.
    * privacyPolicy `string`: Privacy policy of the product.
    * productDetailsProperties `object`: Product information.
      * computeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).
      * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
      * sourceBlob `object`: The URI.
        * uri `string`: The URI.
      * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
      * version `string`: Specifies product version.
      * vmOsType `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
      * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.
      * dataDiskImages `array`: List of attached data disks.
        * items `object`: Data disk image.
          * lun `integer`: The LUN.
          * sourceBlobSasUri `string`: SAS key for source blob.
      * osDiskImage `object`: OS disk image.
        * operatingSystem `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
        * sourceBlobSasUri `string`: SAS key for source blob.
      * version `string`: Specifies product version.
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
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### DownloadedProducts_Create
Creates a downloaded product.


```js
azure_azsadmin_downloadedproduct.DownloadedProducts_Create({
  "subscriptionId": "",
  "resourceGroup": "",
  "activationName": "",
  "productName": "",
  "api-version": "",
  "downloadedProduct": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
  * resourceGroup **required** `string`: The resource group the resource is located under.
  * activationName **required** `string`: Name of the activation.
  * productName **required** `string`: Name of the product.
  * api-version **required** `string`: Client Api Version.
  * downloadedProduct **required** `object`: Downloaded product resource.
    * properties `object`: Properties for aggregate usage.
      * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
      * legalTerms `string`: Legal terms for the product.
      * links `array`: List of product links.
        * items `object`: Link to a product.
          * displayName `string`: Displayed name of product.
          * uri `string`: URI to product.
      * privacyPolicy `string`: Privacy policy of the product.
      * productDetailsProperties `object`: Product information.
        * computeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).
        * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
        * sourceBlob `object`: The URI.
          * uri `string`: The URI.
        * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
        * version `string`: Specifies product version.
        * vmOsType `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
        * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.
        * dataDiskImages `array`: List of attached data disks.
          * items `object`: Data disk image.
        * osDiskImage `object`: OS disk image.
          * operatingSystem `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
          * sourceBlobSasUri `string`: SAS key for source blob.
        * version `string`: Specifies product version.
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
    * id `string`: URI of the resource.
    * location `string`: Location of the resource
    * name `string`: Name of the resource.
    * tags `object`: List of key value pairs.
    * type `string`: Type of resource.

#### Output
* output `object`: Downloaded product resource.
  * properties `object`: Properties for aggregate usage.
    * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
    * legalTerms `string`: Legal terms for the product.
    * links `array`: List of product links.
      * items `object`: Link to a product.
        * displayName `string`: Displayed name of product.
        * uri `string`: URI to product.
    * privacyPolicy `string`: Privacy policy of the product.
    * productDetailsProperties `object`: Product information.
      * computeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).
      * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
      * sourceBlob `object`: The URI.
        * uri `string`: The URI.
      * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
      * version `string`: Specifies product version.
      * vmOsType `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
      * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.
      * dataDiskImages `array`: List of attached data disks.
        * items `object`: Data disk image.
          * lun `integer`: The LUN.
          * sourceBlobSasUri `string`: SAS key for source blob.
      * osDiskImage `object`: OS disk image.
        * operatingSystem `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
        * sourceBlobSasUri `string`: SAS key for source blob.
      * version `string`: Specifies product version.
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
  * id `string`: URI of the resource.
  * location `string`: Location of the resource
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.



## Definitions

### DownloadedProductResourcesPage
* DownloadedProductResourcesPage `object`: Holds an array of downloaded products and the URI to the next page.
  * nextLink `string`: URI to next page.
  * value `array`: Array of downloaded products.
    * items `object`: Downloaded product resource.
      * properties `object`: Properties for aggregate usage.
        * galleryPackageBlobSasUri `string`: The URI to the .azpkg file that provides information required for showing product in the gallery.
        * legalTerms `string`: Legal terms for the product.
        * links `array`: List of product links.
          * items `object`: Link to a product.
        * privacyPolicy `string`: Privacy policy of the product.
        * productDetailsProperties `object`: Product information.
          * computeRole `string` (values: None, IaaS, PaaS): Compute role type (IaaS or PaaS).
          * isSystemExtension `boolean`: Specifies if product is a Virtual Machine Extension.
          * sourceBlob `object`: The URI.
          * supportMultipleExtensions `boolean`: Indicates if specified product supports multiple extensions.
          * version `string`: Specifies product version.
          * vmOsType `string` (values: None, Windows, Linux): Operating system type (Windows or Linux).
          * vmScaleSetEnabled `boolean`: Indicates if virtual machine Scale Set is enabled in the specified product.
          * dataDiskImages `array`: List of attached data disks.
          * osDiskImage `object`: OS disk image.
          * version `string`: Specifies product version.
        * provisioningState `string` (values: Stopped, Starting, Running, Stopping, Succeeded, Downloading): The provisioning state of the resource.
        * vmExtensionType `string`: Extension type of the VM.
        * billingPartNumber `string`: Billing part number.
        * compatibility `object`: Product compatibility
          * description `string`: Full error message if any compatibility issues are found
          * isCompatible `boolean`: Tells if product is compatible with current device
          * issues `array`: List of all issues found
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
      * id `string`: URI of the resource.
      * location `string`: Location of the resource
      * name `string`: Name of the resource.
      * tags `object`: List of key value pairs.
      * type `string`: Type of resource.


