# @datafire/azure_arm_storageimportexport

Client library for StorageImportExport

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_storageimportexport
```
```js
let azure_arm_storageimportexport = require('@datafire/azure_arm_storageimportexport').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_storageimportexport.ListLocations({}).then(data => {
  console.log(data);
})
```

## Description

The Microsoft Azure Storage Import/Export Resource Provider API.

## Actions

### ListLocations
Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.


```js
azure_arm_storageimportexport.ListLocations({
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [LocationsListResult](#locationslistresult)

### GetLocation
Gets a location to which you can ship the disks associated with an import or export job. A location is an Azure region.


```js
azure_arm_storageimportexport.GetLocation({
  "locationName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The name of the location. For example, 'West US' or 'westus'.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [Location](#location)

### ListSupportedOperations
Returns the list of operations supported by the import/export resource provider.


```js
azure_arm_storageimportexport.ListSupportedOperations({
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [SupportedOperationsListResult](#supportedoperationslistresult)

### Jobs_List
Gets all the active and completed import/export jobs in a subscription.


```js
azure_arm_storageimportexport.Jobs_List({
  "subscriptionId": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.
  * $top `integer`: An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
  * $filter `string`: Can be used to restrict the results to certain conditions. The following possible values can be used with $filter: 1) $filter=type eq '{type}'; 2) $filter=trackingnumber eq '{trackingnumber}'; 3) $filter=state eq '{state}'; 4) Logical and combination of the above, for example: $filter=type eq 'Import' and state eq 'Transferring'. Valid values for type are Import and Export. Valid values for state are Creating, Shipping, Received, Transferring, Packaging, Closed, and Completed.

#### Output
* output [JobListResult](#joblistresult)

### Jobs_ListByResourceGroup
Returns all active and completed import/export jobs in a resource group.


```js
azure_arm_storageimportexport.Jobs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.
  * $top `integer`: An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
  * $filter `string`: Can be used to restrict the results to certain conditions. The following possible values can be used with $filter: 1) $filter=type eq '{type}'; 2) $filter=trackingnumber eq '{trackingnumber}'; 3) $filter=state eq '{state}'; 4) Logical and combination of the above, for example: $filter=type eq 'Import' and state eq 'Transferring'. Valid values for type are Import and Export. Valid values for state are Creating, Shipping, Received, Transferring, Packaging, Closed, and Completed.

#### Output
* output [JobListResult](#joblistresult)

### Jobs_Delete
Deletes an existing import/export job. Only import/export jobs in the Creating or Completed states can be deleted.


```js
azure_arm_storageimportexport.Jobs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * jobName **required** `string`: The name of the import/export job.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
*Output schema unknown*

### Jobs_Get
Gets information about an existing import/export job.


```js
azure_arm_storageimportexport.Jobs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * jobName **required** `string`: The name of the import/export job.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [Job](#job)

### Jobs_Update
Updates specific properties of the import/export job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.


```js
azure_arm_storageimportexport.Jobs_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "jobProperties": null,
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * jobName **required** `string`: The name of the import/export job.
  * jobProperties **required** [MutableJob](#mutablejob)
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [Job](#job)

### Jobs_CreateOrUpdate
Creates a new import/export job or updates an existing import/export job in the specified subscription.


```js
azure_arm_storageimportexport.Jobs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "jobProperties": null,
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * jobName **required** `string`: The name of the import/export job.
  * jobProperties **required** [Job](#job)
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [Job](#job)

### Jobs_ListBitLockerKeys
Lists the BitLocker keys for all drives in the specified import/export job.


```js
azure_arm_storageimportexport.Jobs_ListBitLockerKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * jobName **required** `string`: The name of the import/export job.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
* output [BitLockerKeysListResult](#bitlockerkeyslistresult)

### Jobs_Move
Moves the specified import/export jobs from the resource group to a target resource group. The target resource group may be in a different subscription.


```js
azure_arm_storageimportexport.Jobs_Move({
  "subscriptionId": "",
  "resourceGroupName": "",
  "MoveJobsParameters": null,
  "api-version": "",
  "Accept-Language": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * MoveJobsParameters **required** [MoveJobParameters](#movejobparameters)
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language **required** `string` (values: en-us): Specifies the preferred language for the response.

#### Output
*Output schema unknown*



## Definitions

### BitLockerKeysListResult
* BitLockerKeysListResult `object`: List of BitLocker keys for the specified import/export job.
  * value `array`: List of BitLocker keys for the specified import/export job.
    * items [DriveStatus](#drivestatus)

### Drive
* Drive `object`: Provides information about the drive that contains information about the import/export jobs.
  * bitLockerKey **required** `string`: The BitLocker key used to encrypt the drive.
  * driveId **required** `string`: The drive's hardware serial number, without spaces.
  * manifestFile **required** `string`: The relative path of the manifest file on the drive.
  * manifestHash **required** `string`: The Base16-encoded MD5 hash of the manifest file on the drive.

### DriveStatus
* DriveStatus `object`: Provides information about the drive's status.
  * copyStatus `string`: Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
  * errorLogUri `string`: A URI that points to the blob containing the error log for the data transfer operation.
  * manifestUri `string`: A URI that points to the blob containing the drive manifest file.
  * percentComplete `integer`: Percentage completed for the drive.
  * state `string` (values: Specified, Received, NeverReceived, Transferring, Completed, CompletedMoreInfo, ShippedBack): The drive's current state.
  * verboseLogUri `string`: A URI that points to the blob containing the verbose log for the data transfer operation.
  * bitLockerKey **required** `string`: The BitLocker key used to encrypt the drive.
  * driveId **required** `string`: The drive's hardware serial number, without spaces.
  * manifestFile **required** `string`: The relative path of the manifest file on the drive.
  * manifestHash **required** `string`: The Base16-encoded MD5 hash of the manifest file on the drive.

### ErrorBase
* ErrorBase `object`: Describes the common properties of the Error object
  * code `string`: Provides information about the error code.
  * message `string`: Provides information about the error message.
  * target `string`: Provides information about the error target.

### ErrorInfo
* ErrorInfo `object`: Describes the error information.
  * details `array`: Describes the error details if present.
    * items [ErrorBase](#errorbase)
  * code `string`: Provides information about the error code.
  * message `string`: Provides information about the error message.
  * target `string`: Provides information about the error target.

### ErrorResponse
* ErrorResponse `object`: Describes the model for Error Response.
  * error [ErrorInfo](#errorinfo)

### Export
* Export `object`: A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.
  * blobList `object`: A list of the blobs to be exported.
    * blobPath `array`: A collection of blob-path strings.
      * items `string`
    * blobPathPrefix `array`: A collection of blob-prefix strings.
      * items `string`
  * blobListblobPath `string`: The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in the root container, the URI must begin with $root.

### Job
* Job `object`: Describes an import/export job.
  * properties **required** [JobProperties](#jobproperties)
  * id `string`: Specifies the resource identifier of the job.
  * location **required** `string`: Specifies the Azure location where the job is created.
  * name `string`: Specifies the name of the job.
  * tags `object`: Specifies the tags that are assigned to the job.
  * type `string`: Specifies the type of the job resource.

### JobListResult
* JobListResult `object`: List of import/export jobs.
  * nextLink `string`
  * value **required** `array`
    * items [Job](#job)

### JobProperties
* JobProperties `object`: Import/export job specific properties.
  * backupDriveManifest `boolean`: Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
  * cancelRequested `boolean`: Indicates whether a request has been submitted to cancel the job.
  * containerSas `string`: The container shared access signature (SAS) to be used to import or export data to or from the storage account.
  * deliveryPackage [PackageInfomation](#packageinfomation)
  * diagnosticsPath **required** `string`: The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
  * driveList `array`: List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
    * items [DriveStatus](#drivestatus)
  * export [Export](#export)
  * incompleteBlobListUri `string`: A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
  * jobType **required** `string` (values: Import, Export): The type of job: Import or Export.
  * logLevel `string` (values: Error, Verbose): Default value is Error. Indicates whether error logging or verbose logging will be enabled.
  * percentComplete `integer`: Overall percentage completed for the job.
  * provisioningState `string`: Specifies the provisioning state of the job.
  * returnAddress **required** [ReturnAddress](#returnaddress)
  * returnPackage [PackageInfomation](#packageinfomation)
  * returnShipping **required** [ReturnShipping](#returnshipping)
  * shippingInformation [ShippingInformation](#shippinginformation)
  * state `string` (values: Creating, Shipping, Received, Transferring, Packaging, Closed, Completed): Current state of the job.
  * storageAccountId **required** `string`: The resource identifier of the storage account where data will be imported to or exported from.

### Location
* Location `object`: Provides information about an Azure data center location.
  * id `string`: Specifies the resource identifier of the location.
  * name `string`: Specifies the name of the location. Use List Locations to get all supported locations.
  * properties [LocationProperties](#locationproperties)
  * type `string`: Specifies the resource type of the location.

### LocationProperties
* LocationProperties `object`: Describes the properties of a location.
  * alternateLocations `array`: A list of location IDs that should be used to ship shipping drives to for jobs created against the current location. If the current location is active, it will be part of the list. If it is temporarily closed due to maintenance, this list may contain other locations.
    * items `string`
  * city `string`: The city name to use when shipping the drives to the Azure data center.
  * countryOrRegion `string`: The country or region to use when shipping the drives to the Azure data center.
  * phone `string`: The phone number for the Azure data center.
  * postalCode `string`: The postal code to use when shipping the drives to the Azure data center.
  * recipientName `string`: The recipient name to use when shipping the drives to the Azure data center.
  * stateOrProvince `string`: The state or province to use when shipping the drives to the Azure data center.
  * streetAddress1 `string`: The first line of the street address to use when shipping the drives to the Azure data center.
  * streetAddress2 `string`: The second line of the street address to use when shipping the drives to the Azure data center.
  * supportedCarriers `array`: A list of carriers that are supported at this location.
    * items `string`

### LocationsListResult
* LocationsListResult `object`: List of locations.
  * value **required** `array`: List of locations.
    * items [Location](#location)

### MoveJobParameters
* MoveJobParameters `object`: Defines the parameters that need to be provided for moving an import/export job from one reesource group to another.
  * resources **required** `array`: Specifies the list of jobs to move to the target resource group. The jobs must be from the current resource group from the request URL.
    * items `string`
  * targetResourceGroup **required** `string`: Specifies the target resource group ID to move the jobs to.

### MutableJob
* MutableJob `object`: Describes the updatable properties of the job
  * properties [MutableJobProperties](#mutablejobproperties)
  * tags `object`

### MutableJobProperties
* MutableJobProperties `object`: Properties of the job that can be updated.
  * backupDriveManifest `boolean`: Indicates whether the manifest files on the drives should be copied to block blobs.
  * cancelRequested `boolean`: If specified, the value must be true. The service will attempt to cancel the job.
  * deliveryPackage [PackageInfomation](#packageinfomation)
  * logLevel `string`: Indicates whether error logging or verbose logging is enabled.
  * returnAddress [ReturnAddress](#returnaddress)
  * returnShipping [ReturnShipping](#returnshipping)
  * state `string` (values: Shipping): If specified, the value must be Shipping, which tells the Import/Export service that the package for the job has been shipped. The ReturnAddress and DeliveryPackage properties must have been set either in this request or in a previous request, otherwise the request will fail.

### Operation
* Operation `object`: Describes a supported operation by the Storage Import/Export job API.
  * display **required** [OperationDisplayInformation](#operationdisplayinformation)
  * name **required** `string`: Name of the operation.

### OperationDisplayInformation
* OperationDisplayInformation `object`: Display information about the operation.
  * description `string`: Short description of the operation.
  * operation `string`: The display name of the operation.
  * provider `string`: The resource provider name to which the operation belongs.
  * resource `string`: The name of the resource to which the operation belongs.

### PackageInfomation
* PackageInfomation `object`: Provides information about the package being shipped by the customer to the Microsoft data center.
  * carrierName **required** `string`: The name of the carrier that is used to ship the import or export drives.
  * driveCount **required** `integer`: The number of drives included in the package.
  * shipDate **required** `string`: The date the package is shipped.
  * trackingNumber **required** `string`: The tracking number of the package.

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Specifies the resource identifier of the job.
  * location **required** `string`: Specifies the Azure location where the job is created.
  * name `string`: Specifies the name of the job.
  * tags `object`: Specifies the tags that are assigned to the job.
  * type `string`: Specifies the type of the job resource.

### ReturnAddress
* ReturnAddress `object`: Specifies the return address information for the job.
  * city **required** `string`: The city name to use when returning the drives.
  * countryOrRegion **required** `string`: The country or region to use when returning the drives.
  * email **required** `string`: Email address of the recipient of the returned drives.
  * phone **required** `string`: Phone number of the recipient of the returned drives.
  * postalCode **required** `string`: The postal code to use when returning the drives.
  * recipientName **required** `string`: The name of the recipient who will receive the hard drives when they are returned.
  * stateOrProvince `string`: The state or province to use when returning the drives.
  * streetAddress1 **required** `string`: The first line of the street address to use when returning the drives.
  * streetAddress2 `string`: The second line of the street address to use when returning the drives.

### ReturnShipping
* ReturnShipping `object`: Specifies the return carrier and customer's account with the carrier.
  * carrierAccountNumber **required** `string`: The customer's account number with the carrier.
  * carrierName **required** `string`: The carrier's name.

### ShippingInformation
* ShippingInformation `object`: Provides information about the Microsoft datacenter to which the drives should be shipped.
  * address **required** `string`: The address of the datacenter.
  * name **required** `string`: The name of the recipient at the datacenter.

### SupportedOperationsListResult
* SupportedOperationsListResult `object`: List of supported operations by the import/export resource provider.
  * value `array`: List of supported operations by the import/export resource provider.
    * items [Operation](#operation)


