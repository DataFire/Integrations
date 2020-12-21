# @datafire/azure_recoveryservices_vaults

Client library for RecoveryServicesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservices_vaults
```
```js
let azure_recoveryservices_vaults = require('@datafire/azure_recoveryservices_vaults').create({
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

### Operations_List
Returns the list of available operations.


```js
azure_recoveryservices_vaults.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [ClientDiscoveryResponse](#clientdiscoveryresponse)

### Vaults_ListBySubscriptionId
Fetches all the resources of the specified type in the subscription.


```js
azure_recoveryservices_vaults.Vaults_ListBySubscriptionId({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [VaultList](#vaultlist)

### RecoveryServices_CheckNameAvailability
API to check for resource name availability.
A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago


```js
azure_recoveryservices_vaults.RecoveryServices_CheckNameAvailability({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "location": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * api-version **required** `string`: Client Api Version.
  * location **required** `string`: Location of the resource
  * input **required** [CheckNameAvailabilityParameters](#checknameavailabilityparameters)

#### Output
* output [CheckNameAvailabilityResultResource](#checknameavailabilityresultresource)

### Vaults_ListByResourceGroup
Retrieve a list of Vaults.


```js
azure_recoveryservices_vaults.Vaults_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.

#### Output
* output [VaultList](#vaultlist)

### Vaults_Delete
Deletes a vault.


```js
azure_recoveryservices_vaults.Vaults_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.

#### Output
*Output schema unknown*

### Vaults_Get
Get the Vault details.


```js
azure_recoveryservices_vaults.Vaults_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.

#### Output
* output [Vault](#vault)

### Vaults_Update
Updates the vault.


```js
azure_recoveryservices_vaults.Vaults_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "vault": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * vault **required** [PatchVault](#patchvault)

#### Output
* output [Vault](#vault)

### Vaults_CreateOrUpdate
Creates or updates a Recovery Services vault.


```js
azure_recoveryservices_vaults.Vaults_CreateOrUpdate({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": "",
  "vault": {
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * vault **required** [Vault](#vault)

#### Output
* output [Vault](#vault)

### VaultExtendedInfo_Get
Get the vault extended info.


```js
azure_recoveryservices_vaults.VaultExtendedInfo_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.

#### Output
* output [VaultExtendedInfoResource](#vaultextendedinforesource)

### VaultExtendedInfo_Update
Update vault extended info.


```js
azure_recoveryservices_vaults.VaultExtendedInfo_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "resourceResourceExtendedInfoDetails": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * api-version **required** `string`: Client Api Version.
  * resourceResourceExtendedInfoDetails **required** [VaultExtendedInfoResource](#vaultextendedinforesource)

#### Output
* output [VaultExtendedInfoResource](#vaultextendedinforesource)

### VaultExtendedInfo_CreateOrUpdate
Create vault extended info.


```js
azure_recoveryservices_vaults.VaultExtendedInfo_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "vaultName": "",
  "api-version": "",
  "resourceResourceExtendedInfoDetails": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.
  * api-version **required** `string`: Client Api Version.
  * resourceResourceExtendedInfoDetails **required** [VaultExtendedInfoResource](#vaultextendedinforesource)

#### Output
* output [VaultExtendedInfoResource](#vaultextendedinforesource)



## Definitions

### CheckNameAvailabilityParameters
* CheckNameAvailabilityParameters `object`: Resource Name availability input parameters - Resource type and resource name
  * name `string`: Resource name for which availability needs to be checked
  * type `string`: Describes the Resource type: Microsoft.RecoveryServices/Vaults

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: Response for check name availability API. Resource provider will set availability as true | false.
  * message `string`
  * nameAvailable `boolean`
  * reason `string`

### CheckNameAvailabilityResultResource
* CheckNameAvailabilityResultResource `object`: Response for check name availability API. Resource provider will set availability as true | false.
  * properties [CheckNameAvailabilityResult](#checknameavailabilityresult)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### ClientDiscoveryDisplay
* ClientDiscoveryDisplay `object`: Localized display information of an operation.
  * description `string`: Description of the operation having details of what operation is about.
  * operation `string`: Operations Name itself.
  * provider `string`: Name of the provider for display purposes
  * resource `string`: ResourceType for which this Operation can be performed.

### ClientDiscoveryForLogSpecification
* ClientDiscoveryForLogSpecification `object`: Class to represent shoebox log specification in json client discovery.
  * blobDuration `string`: Blobs created in customer storage account per hour
  * displayName `string`: Localized display name
  * name `string`: Name of the log.

### ClientDiscoveryForProperties
* ClientDiscoveryForProperties `object`: Class to represent shoebox properties in json client discovery.
  * serviceSpecification [ClientDiscoveryForServiceSpecification](#clientdiscoveryforservicespecification)

### ClientDiscoveryForServiceSpecification
* ClientDiscoveryForServiceSpecification `object`: Class to represent shoebox service specification in json client discovery.
  * logSpecifications `array`: List of log specifications of this operation.
    * items [ClientDiscoveryForLogSpecification](#clientdiscoveryforlogspecification)

### ClientDiscoveryResponse
* ClientDiscoveryResponse `object`: Operations List response which contains list of available APIs.
  * nextLink `string`: Link to the next chunk of the response
  * value `array`: List of available operations.
    * items [ClientDiscoveryValueForSingleApi](#clientdiscoveryvalueforsingleapi)

### ClientDiscoveryValueForSingleApi
* ClientDiscoveryValueForSingleApi `object`: Available operation details.
  * display [ClientDiscoveryDisplay](#clientdiscoverydisplay)
  * name `string`: Name of the Operation.
  * origin `string`: The intended executor of the operation;governs the display of the operation in the RBAC UX and the audit logs UX
  * properties [ClientDiscoveryForProperties](#clientdiscoveryforproperties)

### PatchTrackedResource
* PatchTrackedResource `object`: Tracked resource with location.
  * location `string`: Resource location.
  * tags `object`: Resource tags.
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### PatchVault
* PatchVault `object`: Patch Resource information, as returned by the resource provider.
  * properties [VaultProperties](#vaultproperties)
  * sku [Sku](#sku)
  * location `string`: Resource location.
  * tags `object`: Resource tags.
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### Resource
* Resource `object`: ARM Resource.
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### Sku
* Sku `object`: Identifies the unique system identifier for each Azure resource.
  * name **required** `string` (values: Standard, RS0): The Sku name.

### TrackedResource
* TrackedResource `object`: Tracked resource with location.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### UpgradeDetails
* UpgradeDetails `object`: Details for upgrading vault.
  * endTimeUtc `string`: UTC time at which the upgrade operation has ended.
  * lastUpdatedTimeUtc `string`: UTC time at which the upgrade operation status was last updated.
  * message `string`: Message to the user containing information about the upgrade operation.
  * operationId `string`: ID of the vault upgrade operation.
  * previousResourceId `string`: Resource ID of the vault before the upgrade.
  * startTimeUtc `string`: UTC time at which the upgrade operation has started.
  * status `string` (values: Unknown, InProgress, Upgraded, Failed): Status of the vault upgrade operation.
  * triggerType `string` (values: UserTriggered, ForcedUpgrade): The way the vault upgrade was triggered.
  * upgradedResourceId `string`: Resource ID of the upgraded vault.

### Vault
* Vault `object`: Resource information, as returned by the resource provider.
  * properties [VaultProperties](#vaultproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### VaultExtendedInfo
* VaultExtendedInfo `object`: Vault extended information.
  * algorithm `string`: Algorithm for Vault ExtendedInfo
  * encryptionKey `string`: Encryption key.
  * encryptionKeyThumbprint `string`: Encryption key thumbprint.
  * integrityKey `string`: Integrity key.

### VaultExtendedInfoResource
* VaultExtendedInfoResource `object`: Vault extended information.
  * properties [VaultExtendedInfo](#vaultextendedinfo)
  * eTag `string`: Optional ETag.
  * id `string`: Resource Id represents the complete path to the resource.
  * name `string`: Resource name associated with the resource.
  * type `string`: Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...

### VaultList
* VaultList `object`: The response model for a list of Vaults.
  * nextLink `string`
  * value `array`
    * items [Vault](#vault)

### VaultProperties
* VaultProperties `object`: Properties of the vault.
  * provisioningState `string`: Provisioning State.
  * upgradeDetails [UpgradeDetails](#upgradedetails)


