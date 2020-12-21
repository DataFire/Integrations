# @datafire/azure_databox

Client library for DataBoxManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_databox
```
```js
let azure_databox = require('@datafire/azure_databox').create({
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
This method gets all the operations.


```js
azure_databox.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API Version

#### Output
* output [OperationList](#operationlist)

### Jobs_List
Lists all the jobs available under the subscription.


```js
azure_databox.Jobs_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * api-version **required** `string`: The API Version
  * $skipToken `string`: $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.

#### Output
* output [JobResourceList](#jobresourcelist)

### Service_ListAvailableSkus
This method provides the list of available skus for the given subscription and location.


```js
azure_databox.Service_ListAvailableSkus({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "availableSkuRequest": {
    "transferType": "",
    "country": "",
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * location **required** `string`: The location of the resource
  * api-version **required** `string`: The API Version
  * availableSkuRequest **required** [AvailableSkuRequest](#availableskurequest)

#### Output
* output [AvailableSkusResult](#availableskusresult)

### Service_RegionConfiguration
This API provides configuration details specific to given region/location.


```js
azure_databox.Service_RegionConfiguration({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "regionConfigurationRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * location **required** `string`: The location of the resource
  * api-version **required** `string`: The API Version
  * regionConfigurationRequest **required** [RegionConfigurationRequest](#regionconfigurationrequest)

#### Output
* output [RegionConfigurationResponse](#regionconfigurationresponse)

### Service_ValidateAddress
[DEPRECATED NOTICE: This operation will soon be removed] This method validates the customer shipping address and provide alternate addresses if any.


```js
azure_databox.Service_ValidateAddress({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "validateAddress": {
    "shippingAddress": {
      "streetAddress1": "",
      "country": "",
      "postalCode": ""
    },
    "deviceType": "",
    "validationType": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * location **required** `string`: The location of the resource
  * api-version **required** `string`: The API Version
  * validateAddress **required** [ValidateAddress](#validateaddress)

#### Output
* output [AddressValidationOutput](#addressvalidationoutput)

### Service_ValidateInputs
This method does all necessary pre-job creation validation under subscription.


```js
azure_databox.Service_ValidateInputs({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "validationRequest": {
    "validationCategory": "",
    "individualRequestDetails": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * location **required** `string`: The location of the resource
  * api-version **required** `string`: The API Version
  * validationRequest **required** [ValidationRequest](#validationrequest)

#### Output
* output [ValidationResponse](#validationresponse)

### Jobs_ListByResourceGroup
Lists all the jobs available under the given resource group.


```js
azure_databox.Jobs_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * api-version **required** `string`: The API Version
  * $skipToken `string`: $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.

#### Output
* output [JobResourceList](#jobresourcelist)

### Jobs_Delete
Deletes a job.


```js
azure_databox.Jobs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
*Output schema unknown*

### Jobs_Get
Gets information about the specified job.


```js
azure_databox.Jobs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * $expand `string`: $expand is supported on details parameter for job, which provides details on the job stages.

#### Output
* output [JobResource](#jobresource)

### Jobs_Update
Updates the properties of an existing job.


```js
azure_databox.Jobs_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "jobResourceUpdateParameter": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * If-Match `string`: Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value.
  * jobResourceUpdateParameter **required** [JobResourceUpdateParameter](#jobresourceupdateparameter)

#### Output
* output [JobResource](#jobresource)

### Jobs_Create
Creates a new job with the specified parameters. Existing job cannot be updated with this API and should instead be updated with the Update job API.


```js
azure_databox.Jobs_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "jobResource": {
    "properties": {},
    "location": "",
    "sku": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * jobResource **required** [JobResource](#jobresource)

#### Output
* output [JobResource](#jobresource)

### Jobs_BookShipmentPickUp
Book shipment pick up.


```js
azure_databox.Jobs_BookShipmentPickUp({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "shipmentPickUpRequest": {
    "startTime": "",
    "endTime": "",
    "shipmentLocation": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * shipmentPickUpRequest **required** [ShipmentPickUpRequest](#shipmentpickuprequest)

#### Output
* output [ShipmentPickUpResponse](#shipmentpickupresponse)

### Jobs_Cancel
CancelJob.


```js
azure_databox.Jobs_Cancel({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": "",
  "cancellationReason": {
    "reason": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version
  * cancellationReason **required** [CancellationReason](#cancellationreason)

#### Output
*Output schema unknown*

### Jobs_ListCredentials
This method gets the unencrypted secrets related to the job.


```js
azure_databox.Jobs_ListCredentials({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * jobName **required** `string`: The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
  * api-version **required** `string`: The API Version

#### Output
* output [UnencryptedCredentialsList](#unencryptedcredentialslist)

### Service_ListAvailableSkusByResourceGroup
This method provides the list of available skus for the given subscription, resource group and location.


```js
azure_databox.Service_ListAvailableSkusByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": "",
  "availableSkuRequest": {
    "transferType": "",
    "country": "",
    "location": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * location **required** `string`: The location of the resource
  * api-version **required** `string`: The API Version
  * availableSkuRequest **required** [AvailableSkuRequest](#availableskurequest)

#### Output
* output [AvailableSkusResult](#availableskusresult)

### Service_ValidateInputsByResourceGroup
This method does all necessary pre-job creation validation under resource group.


```js
azure_databox.Service_ValidateInputsByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "location": "",
  "api-version": "",
  "validationRequest": {
    "validationCategory": "",
    "individualRequestDetails": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Subscription Id
  * resourceGroupName **required** `string`: The Resource Group Name
  * location **required** `string`: The location of the resource
  * api-version **required** `string`: The API Version
  * validationRequest **required** [ValidationRequest](#validationrequest)

#### Output
* output [ValidationResponse](#validationresponse)



## Definitions

### AccountCredentialDetails
* AccountCredentialDetails `object`: Credential details of the account.
  * accountConnectionString `string`: Connection string of the account endpoint to use the account as a storage endpoint on the device.
  * accountName `string`: Name of the account.
  * dataDestinationType `string` (values: StorageAccount, ManagedDisk): Data Destination Type.
  * shareCredentialDetails `array`: Per share level unencrypted access credentials.
    * items [ShareCredentialDetails](#sharecredentialdetails)

### AddressValidationOutput
* AddressValidationOutput `object`: Output of the address validation api.
  * properties [AddressValidationProperties](#addressvalidationproperties)

### AddressValidationProperties
* AddressValidationProperties `object`: The address validation output.
  * alternateAddresses `array`: List of alternate addresses.
    * items [ShippingAddress](#shippingaddress)
  * validationStatus `string` (values: Valid, Invalid, Ambiguous): The address validation status.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### ApplianceNetworkConfiguration
* ApplianceNetworkConfiguration `object`: The Network Adapter configuration of a DataBox.
  * macAddress `string`: Mac Address.
  * name `string`: Name of the network.

### ArmBaseObject
* ArmBaseObject `object`: Base class for all objects under resource.
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * type `string`: Type of the object.

### AvailableSkuRequest
* AvailableSkuRequest `object`: The filters for showing the available skus.
  * country **required** `string`: ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
  * location **required** `string`: Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
  * skuNames `array`: Sku Names to filter for available skus
    * items `string` (values: DataBox, DataBoxDisk, DataBoxHeavy)
  * transferType **required** `string` (values: ImportToAzure): Type of the transfer.

### AvailableSkusResult
* AvailableSkusResult `object`: The available skus operation response.
  * nextLink `string`: Link for the next set of skus.
  * value `array`: List of available skus.
    * items [SkuInformation](#skuinformation)

### CancellationReason
* CancellationReason `object`: Reason for cancellation.
  * reason **required** `string`: Reason for cancellation.

### CloudError
* CloudError `object`: The error information object.
  * code `string`: Error code string.
  * details `array`: More detailed error information.
    * items [CloudError](#clouderror)
  * message `string`: Descriptive error information.
  * target `string`: Error target

### ContactDetails
* ContactDetails `object`: Contact Details.
  * contactName **required** `string`: Contact name of the person.
  * emailList **required** `array`: List of Email-ids to be notified about job progress.
    * items `string`
  * mobile `string`: Mobile number of the contact person.
  * notificationPreference `array`: Notification preference for a job stage.
    * items [NotificationPreference](#notificationpreference)
  * phone **required** `string`: Phone number of the contact person.
  * phoneExtension `string`: Phone extension number of the contact person.

### CopyLogDetails
* CopyLogDetails `object`: Details for log generated during copy.
  * copyLogDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.

### CopyProgress
* CopyProgress `object`: Copy progress.
  * accountId `string`: Id of the account where the data needs to be uploaded.
  * bytesSentToCloud `integer`: Amount of data uploaded by the job as of now.
  * dataDestinationType `string` (values: StorageAccount, ManagedDisk): Data Destination Type.
  * filesErroredOut `integer`: Number of files which could not be copied
  * filesProcessed `integer`: Number of files processed by the job as of now.
  * invalidFileBytesUploaded `integer`: Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
  * invalidFilesProcessed `integer`: Number of files not adhering to azure naming conventions which were processed by automatic renaming
  * renamedContainerCount `integer`: Number of folders not adhering to azure naming conventions which were processed by automatic renaming
  * storageAccountName `string`: Name of the storage account where the data needs to be uploaded.
  * totalBytesToProcess `integer`: Total amount of data to be processed by the job.
  * totalFilesToProcess `integer`: Total number of files to be processed by the job.

### CreateJobValidations
* CreateJobValidations `object`: It does all pre-job creation validations.
  * individualRequestDetails **required** `array`: List of request details contain validationType and its request as key and value respectively.
    * items [ValidationInputRequest](#validationinputrequest)
  * validationCategory **required** `string` (values: JobCreationValidation): Identify the nature of validation.

### CreateOrderLimitForSubscriptionValidationRequest
* CreateOrderLimitForSubscriptionValidationRequest `object`: Request to validate create order limit for current subscription.
  * deviceType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Device type to be used for the job.
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### CreateOrderLimitForSubscriptionValidationResponseProperties
* CreateOrderLimitForSubscriptionValidationResponseProperties `object`: Properties of create order limit for subscription validation response.
  * status `string` (values: Valid, Invalid, Skipped): Create order limit validation status.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### DataBoxAccountCopyLogDetails
* DataBoxAccountCopyLogDetails `object`: Copy log details for a storage account of a DataBox job
  * accountName `string`: Destination account name.
  * copyLogLink `string`: Link for copy logs.
  * copyLogDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.

### DataBoxDiskCopyLogDetails
* DataBoxDiskCopyLogDetails `object`: Copy Log Details for a disk
  * diskSerialNumber `string`: Disk Serial Number.
  * errorLogLink `string`: Link for copy error logs.
  * verboseLogLink `string`: Link for copy verbose logs.
  * copyLogDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.

### DataBoxDiskCopyProgress
* DataBoxDiskCopyProgress `object`: DataBox Disk Copy Progress
  * bytesCopied `integer`: Bytes copied during the copy of disk.
  * percentComplete `integer`: Indicates the percentage completed for the copy of the disk.
  * serialNumber `string`: The serial number of the disk
  * status `string` (values: NotStarted, InProgress, Completed, CompletedWithErrors, Failed, NotReturned, HardwareError, DeviceFormatted, DeviceMetadataModified, StorageAccountNotAccessible, UnsupportedData): The Status of the copy

### DataBoxDiskJobDetails
* DataBoxDiskJobDetails `object`: DataBox Disk Job Details.
  * copyProgress `array`: Copy progress per disk.
    * items [DataBoxDiskCopyProgress](#databoxdiskcopyprogress)
  * disksAndSizeDetails `object`: Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer.
  * passkey `string`: User entered passkey for DataBox Disk job.
  * preferredDisks `object`: User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.
  * chainOfCustodySasKey `string`: Shared access key to download the chain of custody logs
  * contactDetails **required** [ContactDetails](#contactdetails)
  * copyLogDetails `array`: List of copy log details.
    * items [CopyLogDetails](#copylogdetails)
  * deliveryPackage [PackageShippingDetails](#packageshippingdetails)
  * destinationAccountDetails **required** `array`: Destination account details.
    * items [DestinationAccountDetails](#destinationaccountdetails)
  * errorDetails `array`: Error details for failure. This is optional.
    * items [JobErrorDetails](#joberrordetails)
  * expectedDataSizeInTerabytes `integer`: The expected size of the data, which needs to be transferred in this job, in terabytes.
  * jobDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.
  * jobStages `array`: List of stages that run in the job.
    * items [JobStages](#jobstages)
  * preferences [Preferences](#preferences)
  * returnPackage [PackageShippingDetails](#packageshippingdetails)
  * reverseShipmentLabelSasKey `string`: Shared access key to download the return shipment label
  * shippingAddress **required** [ShippingAddress](#shippingaddress)

### DataBoxDiskJobSecrets
* DataBoxDiskJobSecrets `object`: The secrets related to disk job.
  * diskSecrets `array`: Contains the list of secrets object for that device.
    * items [DiskSecret](#disksecret)
  * isPasskeyUserDefined `boolean`: Whether passkey was provided by user.
  * passKey `string`: PassKey for the disk Job.
  * dcAccessSecurityCode [DcAccessSecurityCode](#dcaccesssecuritycode)
  * jobSecretsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Used to indicate what type of job secrets object.

### DataBoxHeavyAccountCopyLogDetails
* DataBoxHeavyAccountCopyLogDetails `object`: Copy log details for a storage account for Databox heavy
  * accountName `string`: Destination account name.
  * copyLogLink `array`: Link for copy logs.
    * items `string`
  * copyLogDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.

### DataBoxHeavyJobDetails
* DataBoxHeavyJobDetails `object`: Databox Heavy Device Job Details
  * copyProgress `array`: Copy progress per account.
    * items [CopyProgress](#copyprogress)
  * devicePassword `string`: Set Device password for unlocking Databox Heavy
  * chainOfCustodySasKey `string`: Shared access key to download the chain of custody logs
  * contactDetails **required** [ContactDetails](#contactdetails)
  * copyLogDetails `array`: List of copy log details.
    * items [CopyLogDetails](#copylogdetails)
  * deliveryPackage [PackageShippingDetails](#packageshippingdetails)
  * destinationAccountDetails **required** `array`: Destination account details.
    * items [DestinationAccountDetails](#destinationaccountdetails)
  * errorDetails `array`: Error details for failure. This is optional.
    * items [JobErrorDetails](#joberrordetails)
  * expectedDataSizeInTerabytes `integer`: The expected size of the data, which needs to be transferred in this job, in terabytes.
  * jobDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.
  * jobStages `array`: List of stages that run in the job.
    * items [JobStages](#jobstages)
  * preferences [Preferences](#preferences)
  * returnPackage [PackageShippingDetails](#packageshippingdetails)
  * reverseShipmentLabelSasKey `string`: Shared access key to download the return shipment label
  * shippingAddress **required** [ShippingAddress](#shippingaddress)

### DataBoxHeavyJobSecrets
* DataBoxHeavyJobSecrets `object`: The secrets related to a databox heavy job.
  * cabinetPodSecrets `array`: Contains the list of secret objects for a databox heavy job.
    * items [DataBoxHeavySecret](#databoxheavysecret)
  * dcAccessSecurityCode [DcAccessSecurityCode](#dcaccesssecuritycode)
  * jobSecretsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Used to indicate what type of job secrets object.

### DataBoxHeavySecret
* DataBoxHeavySecret `object`: The secrets related to a databox heavy.
  * accountCredentialDetails `array`: Per account level access credentials.
    * items [AccountCredentialDetails](#accountcredentialdetails)
  * devicePassword `string`: Password for out of the box experience on device.
  * deviceSerialNumber `string`: Serial number of the assigned device.
  * encodedValidationCertPubKey `string`: The base 64 encoded public key to authenticate with the device
  * networkConfigurations `array`: Network configuration of the appliance.
    * items [ApplianceNetworkConfiguration](#appliancenetworkconfiguration)

### DataBoxJobDetails
* DataBoxJobDetails `object`: Databox Job Details
  * copyProgress `array`: Copy progress per storage account.
    * items [CopyProgress](#copyprogress)
  * devicePassword `string`: Set Device password for unlocking Databox
  * chainOfCustodySasKey `string`: Shared access key to download the chain of custody logs
  * contactDetails **required** [ContactDetails](#contactdetails)
  * copyLogDetails `array`: List of copy log details.
    * items [CopyLogDetails](#copylogdetails)
  * deliveryPackage [PackageShippingDetails](#packageshippingdetails)
  * destinationAccountDetails **required** `array`: Destination account details.
    * items [DestinationAccountDetails](#destinationaccountdetails)
  * errorDetails `array`: Error details for failure. This is optional.
    * items [JobErrorDetails](#joberrordetails)
  * expectedDataSizeInTerabytes `integer`: The expected size of the data, which needs to be transferred in this job, in terabytes.
  * jobDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.
  * jobStages `array`: List of stages that run in the job.
    * items [JobStages](#jobstages)
  * preferences [Preferences](#preferences)
  * returnPackage [PackageShippingDetails](#packageshippingdetails)
  * reverseShipmentLabelSasKey `string`: Shared access key to download the return shipment label
  * shippingAddress **required** [ShippingAddress](#shippingaddress)

### DataBoxScheduleAvailabilityRequest
* DataBoxScheduleAvailabilityRequest `object`: Request body to get the availability for scheduling data box orders orders.
  * skuName **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Sku Name for which the order is to be scheduled.
  * storageLocation **required** `string`: Location for data transfer. 

### DataBoxSecret
* DataBoxSecret `object`: The secrets related to a DataBox.
  * accountCredentialDetails `array`: Per account level access credentials.
    * items [AccountCredentialDetails](#accountcredentialdetails)
  * devicePassword `string`: Password for out of the box experience on device.
  * deviceSerialNumber `string`: Serial number of the assigned device.
  * encodedValidationCertPubKey `string`: The base 64 encoded public key to authenticate with the device
  * networkConfigurations `array`: Network configuration of the appliance.
    * items [ApplianceNetworkConfiguration](#appliancenetworkconfiguration)

### DataDestinationDetailsValidationRequest
* DataDestinationDetailsValidationRequest `object`: Request to validate data destination details.
  * destinationAccountDetails **required** `array`: Destination account details list.
    * items [DestinationAccountDetails](#destinationaccountdetails)
  * location **required** `string`: Location of stamp or geo.
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### DataDestinationDetailsValidationResponseProperties
* DataDestinationDetailsValidationResponseProperties `object`: Properties of data destination details validation response.
  * status `string` (values: Valid, Invalid, Skipped): Data destination details validation status.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### DataboxJobSecrets
* DataboxJobSecrets `object`: The secrets related to a databox job.
  * podSecrets `array`: Contains the list of secret objects for a job.
    * items [DataBoxSecret](#databoxsecret)
  * dcAccessSecurityCode [DcAccessSecurityCode](#dcaccesssecuritycode)
  * jobSecretsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Used to indicate what type of job secrets object.

### DcAccessSecurityCode
* DcAccessSecurityCode `object`: Dc Access Security code for device.
  * forwardDcAccessCode `string`: Dc Access Code for dispatching from DC.
  * reverseDcAccessCode `string`: Dc Access code for dropping off at DC.

### DestinationAccountDetails
* DestinationAccountDetails `object`: Details of the destination storage accounts.
  * accountId `string`: Arm Id of the destination where the data has to be moved.
  * dataDestinationType **required** `string` (values: StorageAccount, ManagedDisk): Data Destination Type.
  * sharePassword `string`: Share password to be shared by all shares in SA.

### DestinationManagedDiskDetails
* DestinationManagedDiskDetails `object`: Details for the destination compute disks.
  * resourceGroupId **required** `string`: Destination Resource Group Id where the Compute disks should be created.
  * stagingStorageAccountId **required** `string`: Arm Id of the storage account that can be used to copy the vhd for staging.
  * accountId `string`: Arm Id of the destination where the data has to be moved.
  * dataDestinationType **required** `string` (values: StorageAccount, ManagedDisk): Data Destination Type.
  * sharePassword `string`: Share password to be shared by all shares in SA.

### DestinationStorageAccountDetails
* DestinationStorageAccountDetails `object`: Details for the destination storage account.
  * storageAccountId **required** `string`: Destination Storage Account Arm Id.
  * accountId `string`: Arm Id of the destination where the data has to be moved.
  * dataDestinationType **required** `string` (values: StorageAccount, ManagedDisk): Data Destination Type.
  * sharePassword `string`: Share password to be shared by all shares in SA.

### DestinationToServiceLocationMap
* DestinationToServiceLocationMap `object`: Map of destination location to service location.
  * destinationLocation `string`: Location of the destination.
  * serviceLocation `string`: Location of the service.

### DiskScheduleAvailabilityRequest
* DiskScheduleAvailabilityRequest `object`: Request body to get the availability for scheduling disk orders.
  * expectedDataSizeInTerabytes **required** `integer`: The expected size of the data, which needs to be transferred in this job, in terabytes.
  * skuName **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Sku Name for which the order is to be scheduled.
  * storageLocation **required** `string`: Location for data transfer. 

### DiskSecret
* DiskSecret `object`: Contains all the secrets of a Disk.
  * bitLockerKey `string`: Bit Locker key of the disk which can be used to unlock the disk to copy data.
  * diskSerialNumber `string`: Serial number of the assigned disk.

### Error
* Error `object`: Top level error for the job.
  * code `string`: Error code that can be used to programmatically identify the error.
  * message `string`: Describes the error in detail and provides debugging information.

### HeavyScheduleAvailabilityRequest
* HeavyScheduleAvailabilityRequest `object`: Request body to get the availability for scheduling heavy orders.
  * skuName **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Sku Name for which the order is to be scheduled.
  * storageLocation **required** `string`: Location for data transfer. 

### JobDeliveryInfo
* JobDeliveryInfo `object`: Additional delivery info.
  * scheduledDateTime `string`: Scheduled date time.

### JobDetails
* JobDetails `object`: Job details.
  * chainOfCustodySasKey `string`: Shared access key to download the chain of custody logs
  * contactDetails **required** [ContactDetails](#contactdetails)
  * copyLogDetails `array`: List of copy log details.
    * items [CopyLogDetails](#copylogdetails)
  * deliveryPackage [PackageShippingDetails](#packageshippingdetails)
  * destinationAccountDetails **required** `array`: Destination account details.
    * items [DestinationAccountDetails](#destinationaccountdetails)
  * errorDetails `array`: Error details for failure. This is optional.
    * items [JobErrorDetails](#joberrordetails)
  * expectedDataSizeInTerabytes `integer`: The expected size of the data, which needs to be transferred in this job, in terabytes.
  * jobDetailsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Indicates the type of job details.
  * jobStages `array`: List of stages that run in the job.
    * items [JobStages](#jobstages)
  * preferences [Preferences](#preferences)
  * returnPackage [PackageShippingDetails](#packageshippingdetails)
  * reverseShipmentLabelSasKey `string`: Shared access key to download the return shipment label
  * shippingAddress **required** [ShippingAddress](#shippingaddress)

### JobErrorDetails
* JobErrorDetails `object`: Job Error Details for providing the information and recommended action.
  * errorCode `integer`: Code for the error.
  * errorMessage `string`: Message for the error.
  * exceptionMessage `string`: Contains the non localized exception message
  * recommendedAction `string`: Recommended action for the error.

### JobProperties
* JobProperties `object`: Job Properties
  * cancellationReason `string`: Reason for cancellation.
  * deliveryInfo [JobDeliveryInfo](#jobdeliveryinfo)
  * deliveryType `string` (values: NonScheduled, Scheduled): Delivery type of Job.
  * details [JobDetails](#jobdetails)
  * error [Error](#error)
  * isCancellable `boolean`: Describes whether the job is cancellable or not.
  * isCancellableWithoutFee `boolean`: Flag to indicate cancellation of scheduled job.
  * isDeletable `boolean`: Describes whether the job is deletable or not.
  * isShippingAddressEditable `boolean`: Describes whether the shipping address is editable or not.
  * startTime `string`: Time at which the job was started in UTC ISO 8601 format.
  * status `string` (values: DeviceOrdered, DevicePrepared, Dispatched, Delivered, PickedUp, AtAzureDC, DataCopy, Completed, CompletedWithErrors, Cancelled, Failed_IssueReportedAtCustomer, Failed_IssueDetectedAtAzureDC, Aborted, CompletedWithWarnings, ReadyToDispatchFromAzureDC, ReadyToReceiveAtAzureDC): Name of the stage which is in progress.

### JobResource
* JobResource `object`: Job Resource.
  * id `string`: Id of the object.
  * name `string`: Name of the object.
  * properties **required** [JobProperties](#jobproperties)
  * type `string`: Type of the object.
  * location **required** `string`: The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
  * sku **required** [Sku](#sku)
  * tags `object`: The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).

### JobResourceList
* JobResourceList `object`: Job Resource Collection
  * nextLink `string`: Link for the next set of job resources.
  * value `array`: List of job resources.
    * items [JobResource](#jobresource)

### JobResourceUpdateParameter
* JobResourceUpdateParameter `object`: The JobResourceUpdateParameter.
  * properties [UpdateJobProperties](#updatejobproperties)
  * tags `object`: The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).

### JobSecrets
* JobSecrets `object`: The base class for the secrets
  * dcAccessSecurityCode [DcAccessSecurityCode](#dcaccesssecuritycode)
  * jobSecretsType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Used to indicate what type of job secrets object.

### JobStages
* JobStages `object`: Job stages.
  * displayName `string`: Display name of the job stage.
  * errorDetails `array`: Error details for the stage.
    * items [JobErrorDetails](#joberrordetails)
  * jobStageDetails `object`: Job Stage Details
  * stageName `string` (values: DeviceOrdered, DevicePrepared, Dispatched, Delivered, PickedUp, AtAzureDC, DataCopy, Completed, CompletedWithErrors, Cancelled, Failed_IssueReportedAtCustomer, Failed_IssueDetectedAtAzureDC, Aborted, CompletedWithWarnings, ReadyToDispatchFromAzureDC, ReadyToReceiveAtAzureDC): Name of the job stage.
  * stageStatus `string` (values: None, InProgress, Succeeded, Failed, Cancelled, Cancelling, SucceededWithErrors): Status of the job stage.
  * stageTime `string`: Time for the job stage in UTC ISO 8601 format.

### NotificationPreference
* NotificationPreference `object`: Notification preference for a job stage.
  * sendNotification **required** `boolean`: Notification is required or not.
  * stageName **required** `string` (values: DevicePrepared, Dispatched, Delivered, PickedUp, AtAzureDC, DataCopy): Name of the stage.

### Operation
* Operation `object`: Operation entity.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: Name of the operation. Format: {resourceProviderNamespace}/{resourceType}/{read|write|delete|action}
  * origin `string`: Origin of the operation. Can be : user|system|user,system
  * properties [OperationProperties](#operationproperties)

### OperationDisplay
* OperationDisplay `object`: Operation display
  * description `string`: Localized description of the operation for display purpose.
  * operation `string`: Localized name of the operation for display purpose.
  * provider `string`: Provider name.
  * resource `string`: Resource name.

### OperationList
* OperationList `object`: Operation Collection.
  * nextLink `string`: Link for the next set of operations.
  * value `array`: List of operations.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Operation properties.

### PackageShippingDetails
* PackageShippingDetails `object`: Shipping details.
  * carrierName `string`: Name of the carrier.
  * trackingId `string`: Tracking Id of shipment.
  * trackingUrl `string`: Url where shipment can be tracked.

### Preferences
* Preferences `object`: Preferences related to the order
  * preferredDataCenterRegion `array`: Preferred Data Center Region.
    * items `string`
  * transportPreferences [TransportPreferences](#transportpreferences)

### PreferencesValidationRequest
* PreferencesValidationRequest `object`: Request to validate preference of transport and data center.
  * deviceType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Device type to be used for the job.
  * preference [Preferences](#preferences)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### PreferencesValidationResponseProperties
* PreferencesValidationResponseProperties `object`: Properties of data center and transport preference validation response.
  * status `string` (values: Valid, Invalid, Skipped): Validation status of requested data center and transport.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### RegionConfigurationRequest
* RegionConfigurationRequest `object`: Request body to get the configuration for the region.
  * scheduleAvailabilityRequest [ScheduleAvailabilityRequest](#scheduleavailabilityrequest)
  * transportAvailabilityRequest [TransportAvailabilityRequest](#transportavailabilityrequest)

### RegionConfigurationResponse
* RegionConfigurationResponse `object`: Configuration response specific to a region.
  * scheduleAvailabilityResponse [ScheduleAvailabilityResponse](#scheduleavailabilityresponse)
  * transportAvailabilityResponse [TransportAvailabilityResponse](#transportavailabilityresponse)

### Resource
* Resource `object`: Model of the Resource.
  * location **required** `string`: The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
  * sku **required** [Sku](#sku)
  * tags `object`: The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).

### ScheduleAvailabilityRequest
* ScheduleAvailabilityRequest `object`: Request body to get the availability for scheduling orders.
  * skuName **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Sku Name for which the order is to be scheduled.
  * storageLocation **required** `string`: Location for data transfer. 

### ScheduleAvailabilityResponse
* ScheduleAvailabilityResponse `object`: Schedule availability response for given sku in a region.
  * availableDates `array`: List of dates available to schedule
    * items `string`

### ShareCredentialDetails
* ShareCredentialDetails `object`: Credential details of the shares in account.
  * password `string`: Password for the share.
  * shareName `string`: Name of the share.
  * shareType `string` (values: UnknownType, HCS, BlockBlob, PageBlob, AzureFile, ManagedDisk): Type of the share.
  * supportedAccessProtocols `array`: Access protocols supported on the device.
    * items `string` (values: SMB, NFS)
  * userName `string`: User name for the share.

### ShipmentPickUpRequest
* ShipmentPickUpRequest `object`: Shipment pick up request details.
  * endTime **required** `string`: Maximum date before which the pick up should commence, this must be in local time of pick up area.
  * shipmentLocation **required** `string`: Shipment Location in the pickup place. Eg.front desk
  * startTime **required** `string`: Minimum date after which the pick up should commence, this must be in local time of pick up area.

### ShipmentPickUpResponse
* ShipmentPickUpResponse `object`: Shipment pick up response.
  * confirmationNumber `string`: Confirmation number for the pick up request.
  * readyByTime `string`: Time by which shipment should be ready for pick up, this is in local time of pick up area.

### ShippingAddress
* ShippingAddress `object`: Shipping address where customer wishes to receive the device.
  * addressType `string` (values: None, Residential, Commercial): Type of address.
  * city `string`: Name of the City.
  * companyName `string`: Name of the company.
  * country **required** `string`: Name of the Country.
  * postalCode **required** `string`: Postal code.
  * stateOrProvince `string`: Name of the State or Province.
  * streetAddress1 **required** `string`: Street Address line 1.
  * streetAddress2 `string`: Street Address line 2.
  * streetAddress3 `string`: Street Address line 3.
  * zipExtendedCode `string`: Extended Zip Code.

### Sku
* Sku `object`: The Sku.
  * displayName `string`: The display name of the sku.
  * family `string`: The sku family.
  * name **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): The sku name.

### SkuAvailabilityValidationRequest
* SkuAvailabilityValidationRequest `object`: Request to validate sku availability.
  * country **required** `string`: ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
  * deviceType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Device type to be used for the job.
  * location **required** `string`: Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
  * transferType **required** `string` (values: ImportToAzure): Type of the transfer.
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### SkuAvailabilityValidationResponseProperties
* SkuAvailabilityValidationResponseProperties `object`: Properties of sku availability validation response.
  * status `string` (values: Valid, Invalid, Skipped): Sku availability validation status.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### SkuCapacity
* SkuCapacity `object`: Capacity of the sku.
  * maximum `string`: Maximum capacity in TB.
  * usable `string`: Usable capacity in TB.

### SkuCost
* SkuCost `object`: Describes metadata for retrieving price info.
  * meterId `string`: Meter id of the Sku.
  * meterType `string`: The type of the meter.

### SkuInformation
* SkuInformation `object`: Information of the sku.
  * enabled `boolean`: The sku is enabled or not.
  * properties [SkuProperties](#skuproperties)
  * sku [Sku](#sku)

### SkuProperties
* SkuProperties `object`: Properties of the sku.
  * apiVersions `array`: Api versions that support this Sku.
    * items `string`
  * capacity [SkuCapacity](#skucapacity)
  * costs `array`: Cost of the Sku.
    * items [SkuCost](#skucost)
  * destinationToServiceLocationMap `array`: The map of destination location to service location.
    * items [DestinationToServiceLocationMap](#destinationtoservicelocationmap)
  * disabledReason `string` (values: None, Country, Region, Feature, OfferType, NoSubscriptionInfo): Reason why the Sku is disabled.
  * disabledReasonMessage `string`: Message for why the Sku is disabled.
  * requiredFeature `string`: Required feature to access the sku.

### SubscriptionIsAllowedToCreateJobValidationRequest
* SubscriptionIsAllowedToCreateJobValidationRequest `object`: Request to validate subscription permission to create jobs.
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### SubscriptionIsAllowedToCreateJobValidationResponseProperties
* SubscriptionIsAllowedToCreateJobValidationResponseProperties `object`: Properties of subscription permission to create job validation response.
  * status `string` (values: Valid, Invalid, Skipped): Validation status of subscription permission to create job.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### TransportAvailabilityDetails
* TransportAvailabilityDetails `object`: Transport options availability details for given region.
  * shipmentType `string` (values: CustomerManaged, MicrosoftManaged): Transport Shipment Type supported for given region.

### TransportAvailabilityRequest
* TransportAvailabilityRequest `object`: Request body to get the transport availability for given sku.
  * skuName `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Type of the device.

### TransportAvailabilityResponse
* TransportAvailabilityResponse `object`: Transport options available for given sku in a region.
  * transportAvailabilityDetails `array`: List of transport availability details for given region
    * items [TransportAvailabilityDetails](#transportavailabilitydetails)

### TransportPreferences
* TransportPreferences `object`: Preferences related to the shipment logistics of the sku
  * preferredShipmentType **required** `string` (values: CustomerManaged, MicrosoftManaged): Indicates Shipment Logistics type that the customer preferred.

### UnencryptedCredentials
* UnencryptedCredentials `object`: Unencrypted credentials for accessing device.
  * jobName `string`: Name of the job.
  * jobSecrets [JobSecrets](#jobsecrets)

### UnencryptedCredentialsList
* UnencryptedCredentialsList `object`: List of unencrypted credentials for accessing device.
  * nextLink `string`: Link for the next set of unencrypted credentials.
  * value `array`: List of unencrypted credentials.
    * items [UnencryptedCredentials](#unencryptedcredentials)

### UpdateJobDetails
* UpdateJobDetails `object`: Job details for update.
  * contactDetails [ContactDetails](#contactdetails)
  * shippingAddress [ShippingAddress](#shippingaddress)

### UpdateJobProperties
* UpdateJobProperties `object`: Job Properties for update
  * destinationAccountDetails `array`: Destination account details.
    * items [DestinationAccountDetails](#destinationaccountdetails)
  * details [UpdateJobDetails](#updatejobdetails)

### ValidateAddress
* ValidateAddress `object`: The requirements to validate customer address where the device needs to be shipped.
  * deviceType **required** `string` (values: DataBox, DataBoxDisk, DataBoxHeavy): Device type to be used for the job.
  * shippingAddress **required** [ShippingAddress](#shippingaddress)
  * transportPreferences [TransportPreferences](#transportpreferences)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### ValidationInputRequest
* ValidationInputRequest `object`: Minimum fields that must be present in any type of validation request.
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation request.

### ValidationInputResponse
* ValidationInputResponse `object`: Minimum properties that should be present in each individual validation response.
  * error [Error](#error)
  * validationType **required** `string` (values: ValidateAddress, ValidateDataDestinationDetails, ValidateSubscriptionIsAllowedToCreateJob, ValidatePreferences, ValidateCreateOrderLimit, ValidateSkuAvailability): Identifies the type of validation response.

### ValidationRequest
* ValidationRequest `object`: Input request for all pre job creation validation.
  * individualRequestDetails **required** `array`: List of request details contain validationType and its request as key and value respectively.
    * items [ValidationInputRequest](#validationinputrequest)
  * validationCategory **required** `string` (values: JobCreationValidation): Identify the nature of validation.

### ValidationResponse
* ValidationResponse `object`: Response of pre job creation validations.
  * properties [ValidationResponseProperties](#validationresponseproperties)

### ValidationResponseProperties
* ValidationResponseProperties `object`: Properties of pre job creation validation response.
  * individualResponseDetails `array`: List of response details contain validationType and its response as key and value respectively.
    * items [ValidationInputResponse](#validationinputresponse)
  * status `string` (values: AllValidToProceed, InputsRevisitRequired, CertainInputValidationsSkipped): Overall validation status.


