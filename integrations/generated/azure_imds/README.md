# @datafire/azure_imds

Client library for InstanceMetadataClient

## Installation and Usage
```bash
npm install --save @datafire/azure_imds
```
```js
let azure_imds = require('@datafire/azure_imds').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Azure Instance Metadata Client

## Actions

### Attested_GetDocument
Get Attested Data for the Virtual Machine.


```js
azure_imds.Attested_GetDocument({
  "api-version": "",
  "Metadata": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-10-01): This is the API version to use.
  * nonce `string`: This is a string of up to 32 random alphanumeric characters.
  * Metadata **required** `string` (values: true): This must be set to 'true'.

#### Output
* output [AttestedData](#attesteddata)

### Identity_GetInfo
Get information about AAD Metadata


```js
azure_imds.Identity_GetInfo({
  "Metadata": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * Metadata **required** `string` (values: true): This must be set to 'true'.
  * api-version **required** `string` (values: 2018-10-01): This is the API version to use.

#### Output
* output [IdentityInfoResponse](#identityinforesponse)

### Identity_GetToken
Get a Token from Azure AD


```js
azure_imds.Identity_GetToken({
  "Metadata": "",
  "resource": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * Metadata **required** `string` (values: true): This must be set to 'true'.
  * resource **required** `string`: This is the urlencoded identifier URI of the sink resource for the requested Azure AD token. The resulting token contains the corresponding aud for this resource.
  * api-version **required** `string` (values: 2018-10-01): This is the API version to use.
  * client_id `string`: This identifies, by Azure AD client id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with object_id and msi_res_id.
  * object_id `string`: This identifies, by Azure AD object id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and msi_res_id.
  * msi_res_id `string`: This identifies, by urlencoded ARM resource id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and object_id.
  * authority `string`: This indicates the authority to request AAD tokens from. Defaults to the known authority of the identity to be used.
  * bypass_cache `string` (values: true): If provided, the value must be 'true'. This indicates to the server that the token must be retrieved from Azure AD and cannot be retrieved from an internal cache.

#### Output
* output [IdentityTokenResponse](#identitytokenresponse)

### Instances_GetMetadata
Get Instance Metadata for the Virtual Machine.


```js
azure_imds.Instances_GetMetadata({
  "api-version": "",
  "Metadata": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2018-10-01): This is the API version to use.
  * Metadata **required** `string` (values: true): This must be set to 'true'.

#### Output
* output [Instance](#instance)



## Definitions

### ApplicationResponse
* ApplicationResponse `string`: This is a binary string containing the application.

### AttestedData
* AttestedData `object`: This is the response from the Attested_GetDocument operation.
  * encoding `string`: This is the encoding scheme of the signature.
  * signature `string`: This is the encoded string containing the VM ID, plan information, public key, timestamp, and nonce value.

### Compute
* Compute `object`: Compute Metadata
  * azEnvironment `string`: This is the name of the environment in which the VM is running.
  * location `string`: This is the Azure Region in which the VM is running.
  * name `string`: This is the name of the VM.
  * offer `string`: This is the offer information for the VM image. This value is only present for images deployed from the Azure Image Gallery.
  * osType `string`: This value indicates the type of OS the VM is running, either Linux or Windows.
  * placementGroupId `string`: This is the placement group of your Virtual Machine Scale Set.
  * plan [PlanProperties](#planproperties)
  * platformFaultDomain `string`: This is the fault domain in which the VM.
  * platformUpdateDomain `string`: This is the update domain in which the VM.
  * provider `string`: This is the provider of the VM.
  * publicKeys `array`: This is information about the SSH certificate
    * items [PublicKeysProperties](#publickeysproperties)
  * publisher `string`: This is the publisher of the VM image.
  * resourceGroupName `string`: This is the resource group for the VM.
  * resourceId `string`: This is the fully qualified ID for the VM.
  * sku `string`: This is the specific SKU for the VM image.
  * storageProfile [StorageProfile](#storageprofile)
  * subscriptionId `string`: This is the Azure subscription for the VM.
  * tags `string`: This is the list of tags for your VM.
  * version `string`: This is the version of the VM image.
  * vmId `string`: This is the unique identifier for the VM.
  * vmScaleSetName `string`: This is the resource name of the VMSS.
  * vmSize `string`: This is the size of the VM.
  * zone `string`: This is the availability zone of the VM.

### DataDisk
* DataDisk `object`: This contains information about the data disk.
  * caching `string`: This is the caching requirements.
  * createOption `string`: This is information about how the VM was created.
  * diskSizeGB `string`: This is the size of the disk in GB.
  * image [DiskImage](#diskimage)
  * lun `string`: This is the logical unit number of the disk.
  * managedDisk [ManagedDisk](#manageddisk)
  * name `string`: This is the disk name.
  * vhd [VirtualHardDisk](#virtualharddisk)
  * writeAcceleratorEnabled `string`: This specifies whether or not writeAccelerator is enabled on the disk.

### DiffDiskSettings
* DiffDiskSettings `object`: This is the ephemeral disk settings.
  * option `string`: This specifies the ephemeral disk settings.

### DiskImage
* DiskImage `object`: This is the source user image virtual hard disk.
  * uri `string`: This is the uri of the virtual hard disk.

### EncryptionSettings
* EncryptionSettings `object`: This is the encryption settings for the disk.
  * enabled `string`: This specifies whether or not disk encryption is enabled on the VM.

### ErrorResponse
* ErrorResponse `object`: This is the response from an operation in the case an error occurs.
  * error `string`: Error message indicating why the operation failed.

### IdentityErrorResponse
* IdentityErrorResponse `object`: This is the response from an Identity operation in the case an error occurs.
  * error `string` (values: invalid_request, unauthorized_client, access_denied, unsupported_response_type, invalid_scope, server_error, service_unavailable, bad_request, forbidden, not_found, method_not_allowed, too_many_requests): Error code
  * error_description `string`: Error message indicating why the operation failed.

### IdentityInfoResponse
* IdentityInfoResponse `object`: This is the response from the Identity_GetInfo operation.
  * tenantId `string`: This is the AAD tenantId of the identity of the system assigned managed identity.

### IdentityTokenResponse
* IdentityTokenResponse `object`: This is the response from the Identity_GetToken operation.
  * access_token `string`: This is the requested access token. The app can use this token to authenticate to the sink resource.
  * client_id `string`: This is the client_id specified in the request, if any.
  * expires_in `string`: This is how long the access token is valid (in seconds).
  * expires_on `string`: This is the time when the access token expires. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. This value is used to determine the lifetime of cached tokens.
  * ext_expires_in `string`: This indicates the extended lifetime of the token (in seconds).
  * msi_res_id `string`: This is the msi_res_id specified in the request, if any.
  * not_before `string`: This is the time when the access token becomes effective. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time.
  * object_id `string`: This is the object_id specified in the request, if any.
  * resource `string`: This is the app ID URI of the sink resource.
  * token_type `string`: This indicates the token type value.

### ImageReference
* ImageReference `object`: This contains information about the OS image.
  * id `string`: This is the resource ID.
  * offer `string`: This is the offer of the platform or marketplace image.
  * publisher `string`: This is the image publisher.
  * sku `string`: This is the image SKU.
  * version `string`: This is the version of the platform or marketplace image.

### Instance
* Instance `object`: This is the response from the Instance_GetMetadata operation.
  * compute [Compute](#compute)
  * network [Network](#network)

### Ipv4Properties
* Ipv4Properties `object`: This contains the IPv4 properties.
  * privateIpAddress `string`: This is the private IP address assigned to the interface.
  * publicIpAddress `string`: This is the public IP address assigned to the interface.

### Ipv6Properties
* Ipv6Properties `object`: This contains the IPv6 properties.
  * privateIpAddress `string`: This is the private IPv6 address assigned to the interface.

### ManagedDisk
* ManagedDisk `object`: This is managed disk parameters.
  * id `string`: This is the resource ID.
  * storageAccountType `string`: This is the storage account type for the managed disk.

### Network
* Network `object`: Network Metadata
  * interface `array`: This contains data about the network interface.
    * items [NetworkInterface](#networkinterface)

### NetworkInterface
* NetworkInterface `object`: This contains data about the network interface.
  * ipv4 `object`: This contains the IPv4 address.
    * ipAddress `array`: This is the IP address
      * items [Ipv4Properties](#ipv4properties)
    * subnet `array`: This is the subnet
      * items [SubnetProperties](#subnetproperties)
  * ipv6 `object`: This contains the IPv6 address.
    * ipAddress `array`: This is the IP address
      * items [Ipv6Properties](#ipv6properties)
  * macAddress `string`: This is the MAC address of the interface.

### OsDisk
* OsDisk `object`: This contains information about the OS disk used by the VM.
  * caching `string`: This is the caching requirements.
  * createOption `string`: This is information about how the VM was created.
  * diffDiskSettings [DiffDiskSettings](#diffdisksettings)
  * diskSizeGB `string`: This is the size of the disk in GB.
  * encryptionSettings [EncryptionSettings](#encryptionsettings)
  * image [DiskImage](#diskimage)
  * managedDisk [ManagedDisk](#manageddisk)
  * name `string`: This is the disk name.
  * osType `string`: This is the type of OS included in the disk.
  * vhd [VirtualHardDisk](#virtualharddisk)
  * writeAcceleratorEnabled `string`: This specifies whether or not writeAccelerator is enabled on the disk.

### PlanProperties
* PlanProperties `object`: This contains the data about the plan.
  * name `string`: This is the Plan ID.
  * product `string`: This is the product of the image from the Marketplace.
  * publisher `string`: This is the publisher ID.

### PublicKeysProperties
* PublicKeysProperties `object`: This contains the data about the public key.
  * keyData `string`: This is the SSH public key certificate used to authenticate with the VM.
  * path `string`: This specifies the full path on the VM where the SSH public key is stored.

### StorageProfile
* StorageProfile `object`: This contains the data about the storage disks associated with the VM.
  * dataDisks `array`: Data disk information
    * items [DataDisk](#datadisk)
  * imageReference [ImageReference](#imagereference)
  * osDisk [OsDisk](#osdisk)

### SubnetProperties
* SubnetProperties `object`: This contains the properties of the subnet.
  * address `string`: This is the address range of the subnet.
  * prefix `string`: This is the prefix of the subnet.

### VirtualHardDisk
* VirtualHardDisk `object`: This is the virtual hard disk.
  * uri `string`: This is the uri of the virtual hard disk.


