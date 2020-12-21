# @datafire/azure_storage

Client library for StorageManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_storage
```
```js
let azure_storage = require('@datafire/azure_storage').create({
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

### Operations_List
Lists all of the available Storage Rest API operations.


```js
azure_storage.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationListResult](#operationlistresult)

### StorageAccounts_CheckNameAvailability
Checks that the storage account name is valid and is not already in use.


```js
azure_storage.StorageAccounts_CheckNameAvailability({
  "accountName": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** [StorageAccountCheckNameAvailabilityParameters](#storageaccountchecknameavailabilityparameters)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Usages_ListByLocation
Gets the current usage count and the limit for the resources of the location under the subscription.


```js
azure_storage.Usages_ListByLocation({
  "api-version": "",
  "subscriptionId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * location **required** `string`: The location of the Azure Storage resource.

#### Output
* output [UsageListResult](#usagelistresult)

### Skus_List
Lists the available SKUs supported by Microsoft.Storage for given subscription.


```js
azure_storage.Skus_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [StorageSkuListResult](#storageskulistresult)

### StorageAccounts_List
Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.


```js
azure_storage.StorageAccounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [StorageAccountListResult](#storageaccountlistresult)

### StorageAccounts_ListByResourceGroup
Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.


```js
azure_storage.StorageAccounts_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [StorageAccountListResult](#storageaccountlistresult)

### StorageAccounts_Delete
Deletes a storage account in Microsoft Azure.


```js
azure_storage.StorageAccounts_Delete({
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
*Output schema unknown*

### StorageAccounts_GetProperties
Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.


```js
azure_storage.StorageAccounts_GetProperties({
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
  * $expand `string` (values: geoReplicationStats): May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats.

#### Output
* output [StorageAccount](#storageaccount)

### StorageAccounts_Update
The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.


```js
azure_storage.StorageAccounts_Update({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * parameters **required** [StorageAccountUpdateParameters](#storageaccountupdateparameters)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [StorageAccount](#storageaccount)

### StorageAccounts_Create
Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.


```js
azure_storage.StorageAccounts_Create({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * parameters **required** [StorageAccountCreateParameters](#storageaccountcreateparameters)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [StorageAccount](#storageaccount)

### StorageAccounts_ListAccountSAS
List SAS credentials of a storage account.


```js
azure_storage.StorageAccounts_ListAccountSAS({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * parameters **required** [AccountSasParameters](#accountsasparameters)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ListAccountSasResponse](#listaccountsasresponse)

### StorageAccounts_ListServiceSAS
List service SAS credentials of a specific resource.


```js
azure_storage.StorageAccounts_ListServiceSAS({
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * parameters **required** [ServiceSasParameters](#servicesasparameters)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ListServiceSasResponse](#listservicesasresponse)

### StorageAccounts_Failover
Failover request can be triggered for a storage account in case of availability issues. The failover occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The secondary cluster will become primary after failover.


```js
azure_storage.StorageAccounts_Failover({
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
*Output schema unknown*

### StorageAccounts_ListKeys
Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account.


```js
azure_storage.StorageAccounts_ListKeys({
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
  * $expand `string` (values: kerb): Specifies type of the key to be listed. Possible value is kerb.

#### Output
* output [StorageAccountListKeysResult](#storageaccountlistkeysresult)

### ManagementPolicies_Delete
Deletes the managementpolicy associated with the specified storage account.


```js
azure_storage.ManagementPolicies_Delete({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "managementPolicyName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * managementPolicyName **required** `string` (values: default): The name of the Storage Account Management Policy. It should always be 'default'

#### Output
*Output schema unknown*

### ManagementPolicies_Get
Gets the managementpolicy associated with the specified storage account.


```js
azure_storage.ManagementPolicies_Get({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "managementPolicyName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * managementPolicyName **required** `string` (values: default): The name of the Storage Account Management Policy. It should always be 'default'

#### Output
* output [ManagementPolicy](#managementpolicy)

### ManagementPolicies_CreateOrUpdate
Sets the managementpolicy to the specified storage account.


```js
azure_storage.ManagementPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "accountName": "",
  "api-version": "",
  "subscriptionId": "",
  "managementPolicyName": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * managementPolicyName **required** `string` (values: default): The name of the Storage Account Management Policy. It should always be 'default'
  * properties **required** [ManagementPolicy](#managementpolicy)

#### Output
* output [ManagementPolicy](#managementpolicy)

### StorageAccounts_RegenerateKey
Regenerates one of the access keys or Kerberos keys for the specified storage account.


```js
azure_storage.StorageAccounts_RegenerateKey({
  "resourceGroupName": "",
  "accountName": "",
  "regenerateKey": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * accountName **required** `string`: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
  * regenerateKey **required** [StorageAccountRegenerateKeyParameters](#storageaccountregeneratekeyparameters)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [StorageAccountListKeysResult](#storageaccountlistkeysresult)

### StorageAccounts_RevokeUserDelegationKeys
Revoke user delegation keys.


```js
azure_storage.StorageAccounts_RevokeUserDelegationKeys({
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
*Output schema unknown*



## Definitions

### AccountSasParameters
* AccountSasParameters `object`: The parameters to list SAS credentials of a storage account.
  * keyToSign `string`: The key to sign the account SAS token with.
  * signedExpiry **required** `string`: The time at which the shared access signature becomes invalid.
  * signedIp `string`: An IP address or a range of IP addresses from which to accept requests.
  * signedPermission **required** `string` (values: r, d, w, l, a, c, u, p): The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
  * signedProtocol `string` (values: https,http, https): The protocol permitted for a request made with the account SAS.
  * signedResourceTypes **required** `string` (values: s, c, o): The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files.
  * signedServices **required** `string` (values: b, q, t, f): The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
  * signedStart `string`: The time at which the SAS becomes valid.

### ActiveDirectoryProperties
* ActiveDirectoryProperties `object`: Settings properties for Active Directory (AD).
  * azureStorageSid **required** `string`: Specifies the security identifier (SID) for Azure Storage.
  * domainGuid **required** `string`: Specifies the domain GUID.
  * domainName **required** `string`: Specifies the primary domain that the AD DNS server is authoritative for.
  * domainSid **required** `string`: Specifies the security identifier (SID).
  * forestName **required** `string`: Specifies the Active Directory forest to get.
  * netBiosDomainName **required** `string`: Specifies the NetBIOS domain name.

### AzureFilesIdentityBasedAuthentication
* AzureFilesIdentityBasedAuthentication `object`: Settings for Azure Files identity based authentication.
  * activeDirectoryProperties [ActiveDirectoryProperties](#activedirectoryproperties)
  * directoryServiceOptions **required** `string` (values: None, AADDS, AD): Indicates the directory service used.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The CheckNameAvailability operation response.
  * message `string`: Gets an error message explaining the Reason value in more detail.
  * nameAvailable `boolean`: Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used.
  * reason `string` (values: AccountNameInvalid, AlreadyExists): Gets the reason that a storage account name could not be used. The Reason element is only returned if NameAvailable is false.

### CustomDomain
* CustomDomain `object`: The custom domain assigned to this storage account. This can be set via Update.
  * name **required** `string`: Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
  * useSubDomainName `boolean`: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

### DateAfterCreation
* DateAfterCreation `object`: Object to define the number of days after creation.
  * daysAfterCreationGreaterThan **required** `number`: Value indicating the age in days after creation

### DateAfterModification
* DateAfterModification `object`: Object to define the number of days after last modification.
  * daysAfterModificationGreaterThan **required** `number`: Value indicating the age in days after last modification

### Dimension
* Dimension `object`: Dimension of blobs, possibly be blob type or access tier.
  * displayName `string`: Display name of dimension.
  * name `string`: Display name of dimension.

### Encryption
* Encryption `object`: The encryption settings on the storage account.
  * keySource **required** `string` (values: Microsoft.Storage, Microsoft.Keyvault): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
  * keyvaultproperties [KeyVaultProperties](#keyvaultproperties)
  * services [EncryptionServices](#encryptionservices)

### EncryptionService
* EncryptionService `object`: A service that allows server-side encryption to be used.
  * enabled `boolean`: A boolean indicating whether or not the service encrypts the data as it is stored.
  * lastEnabledTime `string`: Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate.

### EncryptionServices
* EncryptionServices `object`: A list of services that support encryption.
  * blob [EncryptionService](#encryptionservice)
  * file [EncryptionService](#encryptionservice)
  * queue [EncryptionService](#encryptionservice)
  * table [EncryptionService](#encryptionservice)

### Endpoints
* Endpoints `object`: The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object.
  * blob `string`: Gets the blob endpoint.
  * dfs `string`: Gets the dfs endpoint.
  * file `string`: Gets the file endpoint.
  * queue `string`: Gets the queue endpoint.
  * table `string`: Gets the table endpoint.
  * web `string`: Gets the web endpoint.

### GeoReplicationStats
* GeoReplicationStats `object`: Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account.
  * canFailover `boolean`: A boolean flag which indicates whether or not account failover is supported for the account.
  * lastSyncTime `string`: All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap.
  * status `string` (values: Live, Bootstrap, Unavailable): The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable.

### IPRule
* IPRule `object`: IP rule with specific IP or IP range in CIDR format.
  * action `string` (values: Allow): The action of IP ACL rule.
  * value **required** `string`: Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type **required** `string` (values: SystemAssigned): The identity type.

### KeyVaultProperties
* KeyVaultProperties `object`: Properties of key vault.
  * keyname `string`: The name of KeyVault key.
  * keyvaulturi `string`: The Uri of KeyVault.
  * keyversion `string`: The version of KeyVault key.

### ListAccountSasResponse
* ListAccountSasResponse `object`: The List SAS credentials operation response.
  * accountSasToken `string`: List SAS credentials of storage account.

### ListServiceSasResponse
* ListServiceSasResponse `object`: The List service SAS credentials operation response.
  * serviceSasToken `string`: List service SAS credentials of specific resource.

### ManagementPolicy
* ManagementPolicy `object`: The Get Storage Account ManagementPolicies operation response.
  * properties [ManagementPolicyProperties](#managementpolicyproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### ManagementPolicyAction
* ManagementPolicyAction `object`: Actions are applied to the filtered blobs when the execution condition is met.
  * baseBlob [ManagementPolicyBaseBlob](#managementpolicybaseblob)
  * snapshot [ManagementPolicySnapShot](#managementpolicysnapshot)

### ManagementPolicyBaseBlob
* ManagementPolicyBaseBlob `object`: Management policy action for base blob.
  * delete [DateAfterModification](#dateaftermodification)
  * tierToArchive [DateAfterModification](#dateaftermodification)
  * tierToCool [DateAfterModification](#dateaftermodification)

### ManagementPolicyDefinition
* ManagementPolicyDefinition `object`: An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set.
  * actions **required** [ManagementPolicyAction](#managementpolicyaction)
  * filters [ManagementPolicyFilter](#managementpolicyfilter)

### ManagementPolicyFilter
* ManagementPolicyFilter `object`: Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. 
  * blobTypes **required** `array`: An array of predefined enum values. Only blockBlob is supported.
    * items `string`
  * prefixMatch `array`: An array of strings for prefixes to be match.
    * items `string`

### ManagementPolicyProperties
* ManagementPolicyProperties `object`: The Storage Account ManagementPolicy properties.
  * lastModifiedTime `string`: Returns the date and time the ManagementPolicies was last modified.
  * policy **required** [ManagementPolicySchema](#managementpolicyschema)

### ManagementPolicyRule
* ManagementPolicyRule `object`: An object that wraps the Lifecycle rule. Each rule is uniquely defined by name.
  * definition **required** [ManagementPolicyDefinition](#managementpolicydefinition)
  * enabled `boolean`: Rule is enabled if set to true.
  * name **required** `string`: A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
  * type **required** `string` (values: Lifecycle): The valid value is Lifecycle

### ManagementPolicySchema
* ManagementPolicySchema `object`: The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
  * rules **required** `array`: The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
    * items [ManagementPolicyRule](#managementpolicyrule)

### ManagementPolicySnapShot
* ManagementPolicySnapShot `object`: Management policy action for snapshot.
  * delete [DateAfterCreation](#dateaftercreation)

### MetricSpecification
* MetricSpecification `object`: Metric specification of operation.
  * aggregationType `string`: Aggregation type could be Average.
  * category `string`: The category this metric specification belong to, could be Capacity.
  * dimensions `array`: Dimensions of blobs, including blob type and access tier.
    * items [Dimension](#dimension)
  * displayDescription `string`: Display description of metric specification.
  * displayName `string`: Display name of metric specification.
  * fillGapWithZero `boolean`: The property to decide fill gap with zero or not.
  * name `string`: Name of metric specification.
  * resourceIdDimensionNameOverride `string`: Account Resource Id.
  * unit `string`: Unit could be Bytes or Count.

### NetworkRuleSet
* NetworkRuleSet `object`: Network rule set
  * bypass `string` (values: None, Logging, Metrics, AzureServices): Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
  * defaultAction **required** `string` (values: Allow, Deny): Specifies the default action of allow or deny when no other rules match.
  * ipRules `array`: Sets the IP ACL rules
    * items [IPRule](#iprule)
  * virtualNetworkRules `array`: Sets the virtual network rules
    * items [VirtualNetworkRule](#virtualnetworkrule)

### Operation
* Operation `object`: Storage REST API operation definition.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Description of the operation.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft Storage.
    * resource `string`: Resource on which the operation is performed etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}
  * origin `string`: The origin of operations.
  * properties [OperationProperties](#operationproperties)

### OperationListResult
* OperationListResult `object`: Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results.
  * value `array`: List of Storage operations supported by the Storage resource provider.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Properties of operation, include metric specifications.
  * serviceSpecification [ServiceSpecification](#servicespecification)

### Restriction
* Restriction `object`: The restriction because of which SKU cannot be used.
  * reasonCode `string` (values: QuotaId, NotAvailableForSubscription): The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC.
  * type `string`: The type of restrictions. As of now only possible value for this is location.
  * values `array`: The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted.
    * items `string`

### SKUCapability
* SKUCapability `object`: The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
  * name `string`: The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
  * value `string`: A string value to indicate states of given capability. Possibly 'true' or 'false'.

### ServiceSasParameters
* ServiceSasParameters `object`: The parameters to list service SAS credentials of a specific resource.
  * canonicalizedResource **required** `string`: The canonical path to the signed resource.
  * endPk `string`: The end of partition key.
  * endRk `string`: The end of row key.
  * keyToSign `string`: The key to sign the account SAS token with.
  * rscc `string`: The response header override for cache control.
  * rscd `string`: The response header override for content disposition.
  * rsce `string`: The response header override for content encoding.
  * rscl `string`: The response header override for content language.
  * rsct `string`: The response header override for content type.
  * signedExpiry `string`: The time at which the shared access signature becomes invalid.
  * signedIdentifier `string`: A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
  * signedIp `string`: An IP address or a range of IP addresses from which to accept requests.
  * signedPermission `string` (values: r, d, w, l, a, c, u, p): The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
  * signedProtocol `string` (values: https,http, https): The protocol permitted for a request made with the account SAS.
  * signedResource `string` (values: b, c, f, s): The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
  * signedStart `string`: The time at which the SAS becomes valid.
  * startPk `string`: The start of partition key.
  * startRk `string`: The start of row key.

### ServiceSpecification
* ServiceSpecification `object`: One property of operation, include metric specifications.
  * metricSpecifications `array`: Metric specifications of operation.
    * items [MetricSpecification](#metricspecification)

### Sku
* Sku `object`: The SKU of the storage account.
  * capabilities `array`: The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.
    * items [SKUCapability](#skucapability)
  * kind `string` (values: Storage, StorageV2, BlobStorage, FileStorage, BlockBlobStorage): Indicates the type of storage account.
  * locations `array`: The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.).
    * items `string`
  * name **required** `string` (values: Standard_LRS, Standard_GRS, Standard_RAGRS, Standard_ZRS, Premium_LRS, Premium_ZRS, Standard_GZRS, Standard_RAGZRS): Gets or sets the SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
  * resourceType `string`: The type of the resource, usually it is 'storageAccounts'.
  * restrictions `array`: The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
    * items [Restriction](#restriction)
  * tier `string` (values: Standard, Premium): Gets the SKU tier. This is based on the SKU name.

### StorageAccount
* StorageAccount `object`: The storage account.
  * identity [Identity](#identity)
  * kind `string` (values: Storage, StorageV2, BlobStorage, FileStorage, BlockBlobStorage): Gets the Kind.
  * properties [StorageAccountProperties](#storageaccountproperties)
  * sku [Sku](#sku)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### StorageAccountCheckNameAvailabilityParameters
* StorageAccountCheckNameAvailabilityParameters `object`: The parameters used to check the availability of the storage account name.
  * name **required** `string`: The storage account name.
  * type **required** `string` (values: Microsoft.Storage/storageAccounts): The type of resource, Microsoft.Storage/storageAccounts

### StorageAccountCreateParameters
* StorageAccountCreateParameters `object`: The parameters used when creating a storage account.
  * identity [Identity](#identity)
  * kind **required** `string` (values: Storage, StorageV2, BlobStorage, FileStorage, BlockBlobStorage): Required. Indicates the type of storage account.
  * location **required** `string`: Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
  * properties [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters)
  * sku **required** [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.

### StorageAccountKey
* StorageAccountKey `object`: An access key for the storage account.
  * keyName `string`: Name of the key.
  * permissions `string` (values: Read, Full): Permissions for the key -- read-only or full permissions.
  * value `string`: Base 64-encoded value of the key.

### StorageAccountListKeysResult
* StorageAccountListKeysResult `object`: The response from the ListKeys operation.
  * keys `array`: Gets the list of storage account keys and their properties for the specified storage account.
    * items [StorageAccountKey](#storageaccountkey)

### StorageAccountListResult
* StorageAccountListResult `object`: The response from the List Storage Accounts operation.
  * nextLink `string`: Request URL that can be used to query next page of storage accounts. Returned when total number of requested storage accounts exceed maximum page size.
  * value `array`: Gets the list of storage accounts and their properties.
    * items [StorageAccount](#storageaccount)

### StorageAccountProperties
* StorageAccountProperties `object`: Properties of the storage account.
  * accessTier `string` (values: Hot, Cool): Required for storage accounts where kind = BlobStorage. The access tier used for billing.
  * azureFilesIdentityBasedAuthentication [AzureFilesIdentityBasedAuthentication](#azurefilesidentitybasedauthentication)
  * creationTime `string`: Gets the creation date and time of the storage account in UTC.
  * customDomain [CustomDomain](#customdomain)
  * encryption [Encryption](#encryption)
  * failoverInProgress `boolean`: If the failover is in progress, the value will be true, otherwise, it will be null.
  * geoReplicationStats [GeoReplicationStats](#georeplicationstats)
  * isHnsEnabled `boolean`: Account HierarchicalNamespace enabled if sets to true.
  * largeFileSharesState `string` (values: Disabled, Enabled): Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
  * lastGeoFailoverTime `string`: Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
  * networkAcls [NetworkRuleSet](#networkruleset)
  * primaryEndpoints [Endpoints](#endpoints)
  * primaryLocation `string`: Gets the location of the primary data center for the storage account.
  * provisioningState `string` (values: Creating, ResolvingDNS, Succeeded): Gets the status of the storage account at the time the operation was called.
  * secondaryEndpoints [Endpoints](#endpoints)
  * secondaryLocation `string`: Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
  * statusOfPrimary `string` (values: available, unavailable): Gets the status indicating whether the primary location of the storage account is available or unavailable.
  * statusOfSecondary `string` (values: available, unavailable): Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
  * supportsHttpsTrafficOnly `boolean`: Allows https traffic only to storage service if sets to true.

### StorageAccountPropertiesCreateParameters
* StorageAccountPropertiesCreateParameters `object`: The parameters used to create the storage account.
  * accessTier `string` (values: Hot, Cool): Required for storage accounts where kind = BlobStorage. The access tier used for billing.
  * azureFilesIdentityBasedAuthentication [AzureFilesIdentityBasedAuthentication](#azurefilesidentitybasedauthentication)
  * customDomain [CustomDomain](#customdomain)
  * encryption [Encryption](#encryption)
  * isHnsEnabled `boolean`: Account HierarchicalNamespace enabled if sets to true.
  * largeFileSharesState `string` (values: Disabled, Enabled): Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
  * networkAcls [NetworkRuleSet](#networkruleset)
  * supportsHttpsTrafficOnly `boolean`: Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01.

### StorageAccountPropertiesUpdateParameters
* StorageAccountPropertiesUpdateParameters `object`: The parameters used when updating a storage account.
  * accessTier `string` (values: Hot, Cool): Required for storage accounts where kind = BlobStorage. The access tier used for billing.
  * azureFilesIdentityBasedAuthentication [AzureFilesIdentityBasedAuthentication](#azurefilesidentitybasedauthentication)
  * customDomain [CustomDomain](#customdomain)
  * encryption [Encryption](#encryption)
  * largeFileSharesState `string` (values: Disabled, Enabled): Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
  * networkAcls [NetworkRuleSet](#networkruleset)
  * supportsHttpsTrafficOnly `boolean`: Allows https traffic only to storage service if sets to true.

### StorageAccountRegenerateKeyParameters
* StorageAccountRegenerateKeyParameters `object`: The parameters used to regenerate the storage account key.
  * keyName **required** `string`: The name of storage keys that want to be regenerated, possible values are key1, key2, kerb1, kerb2.

### StorageAccountUpdateParameters
* StorageAccountUpdateParameters `object`: The parameters that can be provided when updating the storage account properties.
  * identity [Identity](#identity)
  * kind `string` (values: Storage, StorageV2, BlobStorage, FileStorage, BlockBlobStorage): Optional. Indicates the type of storage account. Currently only StorageV2 value supported by server.
  * properties [StorageAccountPropertiesUpdateParameters](#storageaccountpropertiesupdateparameters)
  * sku [Sku](#sku)
  * tags `object`: Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters.

### StorageSkuListResult
* StorageSkuListResult `object`: The response from the List Storage SKUs operation.
  * value `array`: Get the list result of storage SKUs and their properties.
    * items [Sku](#sku)

### Usage
* Usage `object`: Describes Storage Resource Usage.
  * currentValue `integer`: Gets the current count of the allocated resources in the subscription.
  * limit `integer`: Gets the maximum count of the resources that can be allocated in the subscription.
  * name [UsageName](#usagename)
  * unit `string` (values: Count, Bytes, Seconds, Percent, CountsPerSecond, BytesPerSecond): Gets the unit of measurement.

### UsageListResult
* UsageListResult `object`: The response from the List Usages operation.
  * value `array`: Gets or sets the list of Storage Resource Usages.
    * items [Usage](#usage)

### UsageName
* UsageName `object`: The usage names that can be used; currently limited to StorageAccount.
  * localizedValue `string`: Gets a localized string describing the resource name.
  * value `string`: Gets a string describing the resource name.

### VirtualNetworkRule
* VirtualNetworkRule `object`: Virtual Network rule.
  * action `string` (values: Allow): The action of virtual network rule.
  * id **required** `string`: Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
  * state `string` (values: provisioning, deprovisioning, succeeded, failed, networkSourceDeleted): Gets the state of virtual network rule.


