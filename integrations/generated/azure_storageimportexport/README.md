# @datafire/azure_storageimportexport

Client library for StorageImportExport

## Installation and Usage
```bash
npm install --save @datafire/azure_storageimportexport
```
```js
let azure_storageimportexport = require('@datafire/azure_storageimportexport').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_storageimportexport.Locations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Storage Import/Export Resource Provider API.

## Actions

### Locations_List
Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region.


```js
azure_storageimportexport.Locations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [LocationsResponse](#locationsresponse)

### Locations_Get
Returns the details about a location to which you can ship the disks associated with an import or export job. A location is an Azure region.


```js
azure_storageimportexport.Locations_Get({
  "locationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * locationName **required** `string`: The name of the location. For example, West US or westus.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [Location](#location)

### Operations_List
Returns the list of operations supported by the import/export resource provider.


```js
azure_storageimportexport.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### Jobs_ListBySubscription
Returns all active and completed jobs in a subscription.


```js
azure_storageimportexport.Jobs_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
  * $filter `string`: Can be used to restrict the results to certain conditions.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [ListJobsResponse](#listjobsresponse)

### Jobs_ListByResourceGroup
Returns all active and completed jobs in a resource group.


```js
azure_storageimportexport.Jobs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: An integer value that specifies how many jobs at most should be returned. The value cannot exceed 100.
  * $filter `string`: Can be used to restrict the results to certain conditions.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [ListJobsResponse](#listjobsresponse)

### Jobs_Delete
Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.


```js
azure_storageimportexport.Jobs_Delete({
  "jobName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: The name of the import/export job.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
*Output schema unknown*

### Jobs_Get
Gets information about an existing job.


```js
azure_storageimportexport.Jobs_Get({
  "jobName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: The name of the import/export job.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [JobResponse](#jobresponse)

### Jobs_Update
Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job.


```js
azure_storageimportexport.Jobs_Update({
  "jobName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: The name of the import/export job.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.
  * body **required** [UpdateJobParameters](#updatejobparameters)

#### Output
* output [JobResponse](#jobresponse)

### Jobs_Create
Creates a new job or updates an existing job in the specified subscription.


```js
azure_storageimportexport.Jobs_Create({
  "jobName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: The name of the import/export job.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.
  * x-ms-client-tenant-id `string`: The tenant ID of the client making the request.
  * body **required** [PutJobParameters](#putjobparameters)

#### Output
* output [JobResponse](#jobresponse)

### BitLockerKeys_List
Returns the BitLocker Keys for all drives in the specified job.


```js
azure_storageimportexport.BitLockerKeys_List({
  "jobName": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: The name of the import/export job.
  * subscriptionId **required** `string`: The subscription ID for the Azure user.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscription.
  * api-version **required** `string` (values: 2016-11-01): Specifies the API version to use for this request.
  * Accept-Language `string`: Specifies the preferred language for the response.

#### Output
* output [GetBitLockerKeysResponse](#getbitlockerkeysresponse)



## Definitions

### DriveBitLockerKey
* DriveBitLockerKey `object`: BitLocker recovery key or password to the specified drive
  * bitLockerKey `string`: BitLocker recovery key or password
  * driveId `string`: Drive ID

### DriveStatus
* DriveStatus `object`: Provides information about the drive's status
  * bitLockerKey `string`: The BitLocker key used to encrypt the drive.
  * bytesSucceeded `integer`: Bytes successfully transferred for the drive.
  * copyStatus `string`: Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
  * driveHeaderHash `string`: The drive header hash value.
  * driveId `string`: The drive's hardware serial number, without spaces.
  * errorLogUri `string`: A URI that points to the blob containing the error log for the data transfer operation.
  * manifestFile `string`: The relative path of the manifest file on the drive. 
  * manifestHash `string`: The Base16-encoded MD5 hash of the manifest file on the drive.
  * manifestUri `string`: A URI that points to the blob containing the drive manifest file. 
  * percentComplete `integer`: Percentage completed for the drive. 
  * state `string` (values: Specified, Received, NeverReceived, Transferring, Completed, CompletedMoreInfo, ShippedBack): The drive's current state. 
  * verboseLogUri `string`: A URI that points to the blob containing the verbose log for the data transfer operation. 

### ErrorResponse
* ErrorResponse `object`: Response when errors occurred
  * error `object`: Describes the error information.
    * code `string`: Provides information about the error code.
    * details `array`: Describes the error details if present.
      * items `object`
        * code `string`: Provides information about the error code.
        * message `string`: Provides information about the error message.
        * target `string`: Provides information about the error target.
    * innererror `object`: Inner error object if present.
    * message `string`: Provides information about the error message.
    * target `string`: Provides information about the error target.

### Export
* Export `object`: A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.
  * blobList `object`: A list of the blobs to be exported.
    * blobPath `array`: A collection of blob-path strings.
      * items `string`
    * blobPathPrefix `array`: A collection of blob-prefix strings.
      * items `string`
  * blobListblobPath `string`: The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. 

### GetBitLockerKeysResponse
* GetBitLockerKeysResponse `object`: GetBitLockerKeys response
  * value `array`: drive status
    * items [DriveBitLockerKey](#drivebitlockerkey)

### JobDetails
* JobDetails `object`: Specifies the job properties
  * backupDriveManifest `boolean`: Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
  * cancelRequested `boolean`: Indicates whether a request has been submitted to cancel the job.
  * deliveryPackage [PackageInfomation](#packageinfomation)
  * diagnosticsPath `string`: The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
  * driveList `array`: List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
    * items [DriveStatus](#drivestatus)
  * export [Export](#export)
  * incompleteBlobListUri `string`: A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
  * jobType `string`: The type of job
  * logLevel `string`: Default value is Error. Indicates whether error logging or verbose logging will be enabled.
  * percentComplete `integer`: Overall percentage completed for the job.
  * provisioningState `string`: Specifies the provisioning state of the job.
  * returnAddress [ReturnAddress](#returnaddress)
  * returnPackage [PackageInfomation](#packageinfomation)
  * returnShipping [ReturnShipping](#returnshipping)
  * shippingInformation [ShippingInformation](#shippinginformation)
  * state `string`: Current state of the job.
  * storageAccountId `string`: The resource identifier of the storage account where data will be imported to or exported from.

### JobResponse
* JobResponse `object`: Contains the job information.
  * id `string`: Specifies the resource identifier of the job.
  * location `string`: Specifies the Azure location where the job is created.
  * name `string`: Specifies the name of the job.
  * properties [JobDetails](#jobdetails)
  * tags `object`: Specifies the tags that are assigned to the job.
  * type `string`: Specifies the type of the job resource.

### ListJobsResponse
* ListJobsResponse `object`: List jobs response
  * nextLink `string`: link to next batch of jobs
  * value `array`: Job list
    * items [JobResponse](#jobresponse)

### ListOperationsResponse
* ListOperationsResponse `object`: List operations response
  * value `array`: operations
    * items [Operation](#operation)

### Location
* Location `object`: Provides information about an Azure data center location.
  * id `string`: Specifies the resource identifier of the location. 
  * name `string`: Specifies the name of the location. Use List Locations to get all supported locations. 
  * properties `object`: location properties
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
  * type `string`: Specifies the type of the location. 

### LocationsResponse
* LocationsResponse `object`: Locations response
  * value `array`: locations
    * items [Location](#location)

### Operation
* Operation `object`: Describes a supported operation by the Storage Import/Export job API.
  * display **required** `object`: operation display properties
    * description `string`: Short description of the operation.
    * operation `string`: The display name of the operation.
    * provider `string`: The resource provider name to which the operation belongs.
    * resource `string`: The name of the resource to which the operation belongs.
  * name **required** `string`: Name of the operation.

### PackageInfomation
* PackageInfomation `object`: Contains information about the package being shipped by the customer to the Microsoft data center.
  * carrierName **required** `string`: The name of the carrier that is used to ship the import or export drives.
  * driveCount **required** `integer`: The number of drives included in the package.
  * shipDate **required** `string`: The date when the package is shipped.
  * trackingNumber **required** `string`: The tracking number of the package.

### PutJobParameters
* PutJobParameters `object`: Put Job parameters
  * location `string`: Specifies the supported Azure location where the job should be created
  * properties [JobDetails](#jobdetails)
  * tags `object`: Specifies the tags that will be assigned to the job.

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
* ShippingInformation `object`: Contains information about the Microsoft datacenter to which the drives should be shipped.
  * city **required** `string`: The city name to use when returning the drives.
  * countryOrRegion **required** `string`: The country or region to use when returning the drives. 
  * phone `string`: Phone number of the recipient of the returned drives.
  * postalCode **required** `string`: The postal code to use when returning the drives.
  * recipientName **required** `string`: The name of the recipient who will receive the hard drives when they are returned. 
  * stateOrProvince **required** `string`: The state or province to use when returning the drives.
  * streetAddress1 **required** `string`: The first line of the street address to use when returning the drives. 
  * streetAddress2 `string`: The second line of the street address to use when returning the drives. 

### UpdateJobParameters
* UpdateJobParameters `object`: Update Job parameters
  * properties `object`: Specifies the properties of a UpdateJob.
    * backupDriveManifest `boolean`: Indicates whether the manifest files on the drives should be copied to block blobs.
    * cancelRequested `boolean`: If specified, the value must be true. The service will attempt to cancel the job. 
    * deliveryPackage [PackageInfomation](#packageinfomation)
    * driveList `array`: List of drives that comprise the job.
      * items [DriveStatus](#drivestatus)
    * logLevel `string`: Indicates whether error logging or verbose logging is enabled.
    * returnAddress [ReturnAddress](#returnaddress)
    * returnShipping [ReturnShipping](#returnshipping)
    * state `string`: If specified, the value must be Shipping, which tells the Import/Export service that the package for the job has been shipped. The ReturnAddress and DeliveryPackage properties must have been set either in this request or in a previous request, otherwise the request will fail. 
  * tags `object`: Specifies the tags that will be assigned to the job


