# @datafire/azure_storage_blob

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_storage_blob
```
```js
let azure_storage_blob = require('@datafire/azure_storage_blob').create({
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

The Azure Storage Management API.

## Actions

### BlobServices_List
List blob services of storage account. It returns a collection of one object named default.


```js
azure_storage_blob.BlobServices_List({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [BlobServiceItems](#blobserviceitems)

### BlobContainers_List
Lists all containers and does not support a prefix like data plane. Also SRP today does not return continuation token.


```js
azure_storage_blob.BlobContainers_List({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * $skipToken `string`: Optional. Continuation token for the list operation.
  * $maxpagesize `string`: Optional. Specified maximum number of containers that can be included in the list.
  * $filter `string`: Optional. When specified, only container names starting with the filter will be listed.

#### Output
* output [ListContainerItems](#listcontaineritems)

### BlobContainers_Delete
Deletes specified container under its account.


```js
azure_storage_blob.BlobContainers_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### BlobContainers_Get
Gets properties of a specified container. 


```js
azure_storage_blob.BlobContainers_Get({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [BlobContainer](#blobcontainer)

### BlobContainers_Update
Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist. 


```js
azure_storage_blob.BlobContainers_Update({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "blobContainer": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * blobContainer **required** [BlobContainer](#blobcontainer)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [BlobContainer](#blobcontainer)

### BlobContainers_Create
Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container. 


```js
azure_storage_blob.BlobContainers_Create({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "blobContainer": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * blobContainer **required** [BlobContainer](#blobcontainer)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [BlobContainer](#blobcontainer)

### BlobContainers_ClearLegalHold
Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation. ClearLegalHold clears out only the specified tags in the request.


```js
azure_storage_blob.BlobContainers_ClearLegalHold({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": "",
  "LegalHold": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * LegalHold **required** [LegalHold](#legalhold)

#### Output
* output [LegalHold](#legalhold)

### BlobContainers_ExtendImmutabilityPolicy
Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.


```js
azure_storage_blob.BlobContainers_ExtendImmutabilityPolicy({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * parameters [ImmutabilityPolicy](#immutabilitypolicy)
  * If-Match **required** `string`: The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

#### Output
* output [ImmutabilityPolicy](#immutabilitypolicy)

### BlobContainers_LockImmutabilityPolicy
Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.


```js
azure_storage_blob.BlobContainers_LockImmutabilityPolicy({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * If-Match **required** `string`: The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

#### Output
* output [ImmutabilityPolicy](#immutabilitypolicy)

### BlobContainers_DeleteImmutabilityPolicy
Aborts an unlocked immutability policy. The response of delete has immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation. Deleting a locked immutability policy is not allowed, only way is to delete the container after deleting all blobs inside the container.


```js
azure_storage_blob.BlobContainers_DeleteImmutabilityPolicy({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "immutabilityPolicyName": "",
  "api-version": "",
  "subscriptionId": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * immutabilityPolicyName **required** `string` (values: default): The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * If-Match **required** `string`: The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

#### Output
* output [ImmutabilityPolicy](#immutabilitypolicy)

### BlobContainers_GetImmutabilityPolicy
Gets the existing immutability policy along with the corresponding ETag in response headers and body.


```js
azure_storage_blob.BlobContainers_GetImmutabilityPolicy({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "immutabilityPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * immutabilityPolicyName **required** `string` (values: default): The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * If-Match `string`: The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

#### Output
* output [ImmutabilityPolicy](#immutabilitypolicy)

### BlobContainers_CreateOrUpdateImmutabilityPolicy
Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.


```js
azure_storage_blob.BlobContainers_CreateOrUpdateImmutabilityPolicy({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "immutabilityPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * immutabilityPolicyName **required** `string` (values: default): The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * parameters [ImmutabilityPolicy](#immutabilitypolicy)
  * If-Match `string`: The entity state (ETag) version of the immutability policy to update. A value of "*" can be used to apply the operation only if the immutability policy already exists. If omitted, this operation will always be applied.

#### Output
* output [ImmutabilityPolicy](#immutabilitypolicy)

### BlobContainers_Lease
The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.


```js
azure_storage_blob.BlobContainers_Lease({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * parameters [LeaseContainerRequest](#leasecontainerrequest)

#### Output
* output [LeaseContainerResponse](#leasecontainerresponse)

### BlobContainers_SetLegalHold
Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.


```js
azure_storage_blob.BlobContainers_SetLegalHold({
  "resourceGroupName": "",
  "accountName": "",
  "containerName": "",
  "api-version": "",
  "subscriptionId": "",
  "LegalHold": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * containerName **required** `string`: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * LegalHold **required** [LegalHold](#legalhold)

#### Output
* output [LegalHold](#legalhold)

### BlobServices_GetServiceProperties
Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.


```js
azure_storage_blob.BlobServices_GetServiceProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "BlobServicesName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * BlobServicesName **required** `string` (values: default): The name of the blob Service within the specified storage account. Blob Service Name must be 'default'

#### Output
* output [BlobServiceProperties](#blobserviceproperties)

### BlobServices_SetServiceProperties
Sets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. 


```js
azure_storage_blob.BlobServices_SetServiceProperties({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "BlobServicesName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * BlobServicesName **required** `string` (values: default): The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
  * parameters **required** [BlobServiceProperties](#blobserviceproperties)

#### Output
* output [BlobServiceProperties](#blobserviceproperties)



## Definitions

### BlobContainer
* BlobContainer `object`: Properties of the blob container, including Id, resource name, resource type, Etag.
  * properties [ContainerProperties](#containerproperties)
  * etag `string`: Resource Etag.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### BlobServiceItems
* BlobServiceItems `object`
  * value `array`: List of blob services returned.
    * items [BlobServiceProperties](#blobserviceproperties)

### BlobServiceProperties
* BlobServiceProperties `object`: The properties of a storage account’s Blob service.
  * properties `object`: The properties of a storage account’s Blob service.
    * automaticSnapshotPolicyEnabled `boolean`: Automatic Snapshot is enabled if set to true.
    * changeFeed [ChangeFeed](#changefeed)
    * cors [CorsRules](#corsrules)
    * defaultServiceVersion `string`: DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
    * deleteRetentionPolicy [DeleteRetentionPolicy](#deleteretentionpolicy)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ChangeFeed
* ChangeFeed `object`: The blob service properties for change feed events.
  * enabled `boolean`: Indicates whether change feed event logging is enabled for the Blob service.

### ContainerProperties
* ContainerProperties `object`: The properties of a container.
  * hasImmutabilityPolicy `boolean`: The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
  * hasLegalHold `boolean`: The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
  * immutabilityPolicy [ImmutabilityPolicyProperties](#immutabilitypolicyproperties)
  * lastModifiedTime `string`: Returns the date and time the container was last modified.
  * leaseDuration `string` (values: Infinite, Fixed): Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
  * leaseState `string` (values: Available, Leased, Expired, Breaking, Broken): Lease state of the container.
  * leaseStatus `string` (values: Locked, Unlocked): The lease status of the container.
  * legalHold [LegalHoldProperties](#legalholdproperties)
  * metadata `object`: A name-value pair to associate with the container as metadata.
  * publicAccess `string` (values: Container, Blob, None): Specifies whether data in the container may be accessed publicly and the level of access.

### CorsRule
* CorsRule `object`: Specifies a CORS rule for the Blob service.
  * allowedHeaders **required** `array`: Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.
    * items `string`
  * allowedMethods **required** `array`: Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.
    * items `string` (values: DELETE, GET, HEAD, MERGE, POST, OPTIONS, PUT)
  * allowedOrigins **required** `array`: Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
    * items `string`
  * exposedHeaders **required** `array`: Required if CorsRule element is present. A list of response headers to expose to CORS clients.
    * items `string`
  * maxAgeInSeconds **required** `integer`: Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.

### CorsRules
* CorsRules `object`: Sets the CORS rules. You can include up to five CorsRule elements in the request. 
  * corsRules `array`: The List of CORS rules. You can include up to five CorsRule elements in the request. 
    * items [CorsRule](#corsrule)

### DeleteRetentionPolicy
* DeleteRetentionPolicy `object`: The blob service properties for soft delete.
  * days `integer`: Indicates the number of days that the deleted blob should be retained. The minimum specified value can be 1 and the maximum value can be 365.
  * enabled `boolean`: Indicates whether DeleteRetentionPolicy is enabled for the Blob service.

### ImmutabilityPolicy
* ImmutabilityPolicy `object`: The ImmutabilityPolicy property of a blob container, including Id, resource name, resource type, Etag.
  * properties **required** [ImmutabilityPolicyProperty](#immutabilitypolicyproperty)
  * etag `string`: Resource Etag.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ImmutabilityPolicyProperties
* ImmutabilityPolicyProperties `object`: The properties of an ImmutabilityPolicy of a blob container.
  * etag `string`: ImmutabilityPolicy Etag.
  * properties [ImmutabilityPolicyProperty](#immutabilitypolicyproperty)
  * updateHistory `array`: The ImmutabilityPolicy update history of the blob container.
    * items [UpdateHistoryProperty](#updatehistoryproperty)

### ImmutabilityPolicyProperty
* ImmutabilityPolicyProperty `object`: The properties of an ImmutabilityPolicy of a blob container.
  * immutabilityPeriodSinceCreationInDays **required** `integer`: The immutability period for the blobs in the container since the policy creation, in days.
  * state `string` (values: Locked, Unlocked): The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.

### LeaseContainerRequest
* LeaseContainerRequest `object`: Lease Container request schema.
  * action **required** `string` (values: Acquire, Renew, Change, Release, Break): Specifies the lease action. Can be one of the available actions.
  * breakPeriod `integer`: Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60.
  * leaseDuration `integer`: Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires.
  * leaseId `string`: Identifies the lease. Can be specified in any valid GUID string format.
  * proposedLeaseId `string`: Optional for acquire, required for change. Proposed lease ID, in a GUID string format.

### LeaseContainerResponse
* LeaseContainerResponse `object`: Lease Container response schema.
  * leaseId `string`: Returned unique lease ID that must be included with any request to delete the container, or to renew, change, or release the lease.
  * leaseTimeSeconds `string`: Approximate time remaining in the lease period, in seconds.

### LegalHold
* LegalHold `object`: The LegalHold property of a blob container.
  * hasLegalHold `boolean`: The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
  * tags **required** `array`: Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case at SRP.
    * items `string`

### LegalHoldProperties
* LegalHoldProperties `object`: The LegalHold property of a blob container.
  * hasLegalHold `boolean`: The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
  * tags `array`: The list of LegalHold tags of a blob container.
    * items [TagProperty](#tagproperty)

### ListContainerItem
* ListContainerItem `object`: The blob container properties be listed out.
  * properties [ContainerProperties](#containerproperties)
  * etag `string`: Resource Etag.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ListContainerItems
* ListContainerItems `object`: Response schema. Contains list of blobs returned, and if paging is requested or required, a URL to next page of containers.
  * nextLink `string`: Request URL that can be used to query next page of containers. Returned when total number of requested containers exceed maximum page size.
  * value `array`: List of blobs containers returned.
    * items [ListContainerItem](#listcontaineritem)

### TagProperty
* TagProperty `object`: A tag of the LegalHold of a blob container.
  * objectIdentifier `string`: Returns the Object ID of the user who added the tag.
  * tag `string`: The tag value.
  * tenantId `string`: Returns the Tenant ID that issued the token for the user who added the tag.
  * timestamp `string`: Returns the date and time the tag was added.
  * upn `string`: Returns the User Principal Name of the user who added the tag.

### UpdateHistoryProperty
* UpdateHistoryProperty `object`: An update history of the ImmutabilityPolicy of a blob container.
  * immutabilityPeriodSinceCreationInDays `integer`: The immutability period for the blobs in the container since the policy creation, in days.
  * objectIdentifier `string`: Returns the Object ID of the user who updated the ImmutabilityPolicy.
  * tenantId `string`: Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy.
  * timestamp `string`: Returns the date and time the ImmutabilityPolicy was updated.
  * update `string` (values: put, lock, extend): The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend.
  * upn `string`: Returns the User Principal Name of the user who updated the ImmutabilityPolicy.


