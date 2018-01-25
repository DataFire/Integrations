# @datafire/amazonaws_importexport

Client library for AWS Import/Export

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_importexport
```
```js
let amazonaws_importexport = require('@datafire/amazonaws_importexport').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_importexport.CancelJob({
  "JobId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

## Actions

### CancelJob



```js
amazonaws_importexport.CancelJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * APIVersion [APIVersion](#apiversion)
  * JobId **required** [JobId](#jobid)

#### Output
* output [CancelJobOutput](#canceljoboutput)

### CreateJob



```js
amazonaws_importexport.CreateJob({
  "JobType": "",
  "Manifest": "",
  "ValidateOnly": true
}, context)
```

#### Input
* input `object`
  * APIVersion [APIVersion](#apiversion)
  * JobType **required** [JobType](#jobtype)
  * Manifest **required** [Manifest](#manifest)
  * ManifestAddendum [ManifestAddendum](#manifestaddendum)
  * ValidateOnly **required** [ValidateOnly](#validateonly)

#### Output
* output [CreateJobOutput](#createjoboutput)

### GetShippingLabel



```js
amazonaws_importexport.GetShippingLabel({
  "jobIds": []
}, context)
```

#### Input
* input `object`
  * APIVersion [APIVersion](#apiversion)
  * city [city](#city)
  * company [company](#company)
  * country [country](#country)
  * jobIds **required** [JobIdList](#jobidlist)
  * name [name](#name)
  * phoneNumber [phoneNumber](#phonenumber)
  * postalCode [postalCode](#postalcode)
  * stateOrProvince [stateOrProvince](#stateorprovince)
  * street1 [street1](#street1)
  * street2 [street2](#street2)
  * street3 [street3](#street3)

#### Output
* output [GetShippingLabelOutput](#getshippinglabeloutput)

### GetStatus



```js
amazonaws_importexport.GetStatus({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * APIVersion [APIVersion](#apiversion)
  * JobId **required** [JobId](#jobid)

#### Output
* output [GetStatusOutput](#getstatusoutput)

### ListJobs



```js
amazonaws_importexport.ListJobs({}, context)
```

#### Input
* input `object`
  * MaxJobs `string`
  * Marker `string`
  * APIVersion [APIVersion](#apiversion)
  * Marker [Marker](#marker)
  * MaxJobs [MaxJobs](#maxjobs)

#### Output
* output [ListJobsOutput](#listjobsoutput)

### UpdateJob



```js
amazonaws_importexport.UpdateJob({
  "JobId": "",
  "Manifest": "",
  "JobType": "",
  "ValidateOnly": true
}, context)
```

#### Input
* input `object`
  * APIVersion [APIVersion](#apiversion)
  * JobId **required** [JobId](#jobid)
  * JobType **required** [JobType](#jobtype)
  * Manifest **required** [Manifest](#manifest)
  * ValidateOnly **required** [ValidateOnly](#validateonly)

#### Output
* output [UpdateJobOutput](#updatejoboutput)



## Definitions

### APIVersion
* APIVersion `string`: Specifies the version of the client tool.

### Artifact
* Artifact `object`: A discrete item that contains the description and URL of an artifact (such as a PDF).
  * Description [Description](#description)
  * URL [URL](#url)

### ArtifactList
* ArtifactList `array`: A collection of artifacts.
  * items [Artifact](#artifact)

### BucketPermissionException
* BucketPermissionException `object`: The account specified does not have the appropriate bucket permissions.
  * message [ErrorMessage](#errormessage)

### CancelJobInput
* CancelJobInput `object`: Input structure for the CancelJob operation.
  * APIVersion [APIVersion](#apiversion)
  * JobId **required** [JobId](#jobid)

### CancelJobOutput
* CancelJobOutput `object`: Output structure for the CancelJob operation.
  * Success [Success](#success)

### CanceledJobIdException
* CanceledJobIdException `object`: The specified job ID has been canceled and is no longer valid.
  * message [ErrorMessage](#errormessage)

### Carrier
* Carrier `string`: Name of the shipping company. This value is included when the LocationCode is "Returned".

### CreateJobInput
* CreateJobInput `object`: Input structure for the CreateJob operation.
  * APIVersion [APIVersion](#apiversion)
  * JobType **required** [JobType](#jobtype)
  * Manifest **required** [Manifest](#manifest)
  * ManifestAddendum [ManifestAddendum](#manifestaddendum)
  * ValidateOnly **required** [ValidateOnly](#validateonly)

### CreateJobOutput
* CreateJobOutput `object`: Output structure for the CreateJob operation.
  * ArtifactList [ArtifactList](#artifactlist)
  * JobId [JobId](#jobid)
  * JobType [JobType](#jobtype)
  * Signature [Signature](#signature)
  * SignatureFileContents [SignatureFileContents](#signaturefilecontents)
  * WarningMessage [WarningMessage](#warningmessage)

### CreateJobQuotaExceededException
* CreateJobQuotaExceededException `object`: Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.
  * message [ErrorMessage](#errormessage)

### CreationDate
* CreationDate `string`: Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".

### CurrentManifest
* CurrentManifest `string`: The last manifest submitted, which will be used to process the job.

### Description
* Description `string`: The associated description for this object.

### ErrorCount
* ErrorCount `integer`: Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors.

### ErrorMessage
* ErrorMessage `string`: The human-readable description of a particular error.

### ExpiredJobIdException
* ExpiredJobIdException `object`: Indicates that the specified job has expired out of the system.
  * message [ErrorMessage](#errormessage)

### GenericString
* GenericString `string`

### GetShippingLabelInput
* GetShippingLabelInput `object`
  * APIVersion [APIVersion](#apiversion)
  * city [city](#city)
  * company [company](#company)
  * country [country](#country)
  * jobIds **required** [JobIdList](#jobidlist)
  * name [name](#name)
  * phoneNumber [phoneNumber](#phonenumber)
  * postalCode [postalCode](#postalcode)
  * stateOrProvince [stateOrProvince](#stateorprovince)
  * street1 [street1](#street1)
  * street2 [street2](#street2)
  * street3 [street3](#street3)

### GetShippingLabelOutput
* GetShippingLabelOutput `object`
  * ShippingLabelURL [GenericString](#genericstring)
  * Warning [GenericString](#genericstring)

### GetStatusInput
* GetStatusInput `object`: Input structure for the GetStatus operation.
  * APIVersion [APIVersion](#apiversion)
  * JobId **required** [JobId](#jobid)

### GetStatusOutput
* GetStatusOutput `object`: Output structure for the GetStatus operation.
  * ArtifactList [ArtifactList](#artifactlist)
  * Carrier [Carrier](#carrier)
  * CreationDate [CreationDate](#creationdate)
  * CurrentManifest [CurrentManifest](#currentmanifest)
  * ErrorCount [ErrorCount](#errorcount)
  * JobId [JobId](#jobid)
  * JobType [JobType](#jobtype)
  * LocationCode [LocationCode](#locationcode)
  * LocationMessage [LocationMessage](#locationmessage)
  * LogBucket [LogBucket](#logbucket)
  * LogKey [LogKey](#logkey)
  * ProgressCode [ProgressCode](#progresscode)
  * ProgressMessage [ProgressMessage](#progressmessage)
  * Signature [Signature](#signature)
  * SignatureFileContents [Signature](#signature)
  * TrackingNumber [TrackingNumber](#trackingnumber)

### InvalidAccessKeyIdException
* InvalidAccessKeyIdException `object`: The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.
  * message [ErrorMessage](#errormessage)

### InvalidAddressException
* InvalidAddressException `object`: The address specified in the manifest is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidCustomsException
* InvalidCustomsException `object`: One or more customs parameters was invalid. Please correct and resubmit.
  * message [ErrorMessage](#errormessage)

### InvalidFileSystemException
* InvalidFileSystemException `object`: File system specified in export manifest is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidJobIdException
* InvalidJobIdException `object`: The JOBID was missing, not found, or not associated with the AWS account.
  * message [ErrorMessage](#errormessage)

### InvalidManifestFieldException
* InvalidManifestFieldException `object`: One or more manifest fields was invalid. Please correct and resubmit.
  * message [ErrorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: One or more parameters had an invalid value.
  * message [ErrorMessage](#errormessage)

### InvalidVersionException
* InvalidVersionException `object`: The client tool version is invalid.
  * message [ErrorMessage](#errormessage)

### IsCanceled
* IsCanceled `boolean`: Indicates whether the job was canceled.

### IsTruncated
* IsTruncated `boolean`: Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker.

### Job
* Job `object`: Representation of a job returned by the ListJobs operation.
  * CreationDate [CreationDate](#creationdate)
  * IsCanceled [IsCanceled](#iscanceled)
  * JobId [JobId](#jobid)
  * JobType [JobType](#jobtype)

### JobId
* JobId `string`: A unique identifier which refers to a particular job.

### JobIdList
* JobIdList `array`
  * items [GenericString](#genericstring)

### JobType
* JobType `string` (values: Import, Export): Specifies whether the job to initiate is an import or export job.

### JobsList
* JobsList `array`: A list container for Jobs returned by the ListJobs operation.
  * items [Job](#job)

### ListJobsInput
* ListJobsInput `object`: Input structure for the ListJobs operation.
  * APIVersion [APIVersion](#apiversion)
  * Marker [Marker](#marker)
  * MaxJobs [MaxJobs](#maxjobs)

### ListJobsOutput
* ListJobsOutput `object`: Output structure for the ListJobs operation.
  * IsTruncated [IsTruncated](#istruncated)
  * Jobs [JobsList](#jobslist)

### LocationCode
* LocationCode `string`: A token representing the location of the storage device, such as "AtAWS".

### LocationMessage
* LocationMessage `string`: A more human readable form of the physical location of the storage device.

### LogBucket
* LogBucket `string`: Amazon S3 bucket for user logs.

### LogKey
* LogKey `string`: The key where the user logs were stored.

### MalformedManifestException
* MalformedManifestException `object`: Your manifest is not well-formed.
  * message [ErrorMessage](#errormessage)

### Manifest
* Manifest `string`: The UTF-8 encoded text of the manifest file.

### ManifestAddendum
* ManifestAddendum `string`: For internal use only.

### Marker
* Marker `string`: Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.

### MaxJobs
* MaxJobs `integer`: Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.

### MissingCustomsException
* MissingCustomsException `object`: One or more required customs parameters was missing from the manifest.
  * message [ErrorMessage](#errormessage)

### MissingManifestFieldException
* MissingManifestFieldException `object`: One or more required fields were missing from the manifest file. Please correct and resubmit.
  * message [ErrorMessage](#errormessage)

### MissingParameterException
* MissingParameterException `object`: One or more required parameters was missing from the request.
  * message [ErrorMessage](#errormessage)

### MultipleRegionsException
* MultipleRegionsException `object`: Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
  * message [ErrorMessage](#errormessage)

### NoSuchBucketException
* NoSuchBucketException `object`: The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.
  * message [ErrorMessage](#errormessage)

### ProgressCode
* ProgressCode `string`: A token representing the state of the job, such as "Started".

### ProgressMessage
* ProgressMessage `string`: A more human readable form of the job status.

### Signature
* Signature `string`: An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.

### SignatureFileContents
* SignatureFileContents `string`: The actual text of the SIGNATURE file to be written to disk.

### Success
* Success `boolean`: Specifies whether (true) or not (false) AWS Import/Export updated your job.

### TrackingNumber
* TrackingNumber `string`: The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned".

### URL
* URL `string`: The URL for a given Artifact.

### UnableToCancelJobIdException
* UnableToCancelJobIdException `object`: AWS Import/Export cannot cancel the job
  * message [ErrorMessage](#errormessage)

### UnableToUpdateJobIdException
* UnableToUpdateJobIdException `object`: AWS Import/Export cannot update the job
  * message [ErrorMessage](#errormessage)

### UpdateJobInput
* UpdateJobInput `object`: Input structure for the UpateJob operation.
  * APIVersion [APIVersion](#apiversion)
  * JobId **required** [JobId](#jobid)
  * JobType **required** [JobType](#jobtype)
  * Manifest **required** [Manifest](#manifest)
  * ValidateOnly **required** [ValidateOnly](#validateonly)

### UpdateJobOutput
* UpdateJobOutput `object`: Output structure for the UpateJob operation.
  * ArtifactList [ArtifactList](#artifactlist)
  * Success [Success](#success)
  * WarningMessage [WarningMessage](#warningmessage)

### ValidateOnly
* ValidateOnly `boolean`: Validate the manifest and parameter values in the request but do not actually create a job.

### WarningMessage
* WarningMessage `string`: An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.

### city
* city `string`: Specifies the name of your city for the return address.

### company
* company `string`: Specifies the name of the company that will ship this package.

### country
* country `string`: Specifies the name of your country for the return address.

### name
* name `string`: Specifies the name of the person responsible for shipping this package.

### phoneNumber
* phoneNumber `string`: Specifies the phone number of the person responsible for shipping this package.

### postalCode
* postalCode `string`: Specifies the postal code for the return address.

### stateOrProvince
* stateOrProvince `string`: Specifies the name of your state or your province for the return address.

### street1
* street1 `string`: Specifies the first part of the street address for the return address, for example 1234 Main Street.

### street2
* street2 `string`: Specifies the optional second part of the street address for the return address, for example Suite 100.

### street3
* street3 `string`: Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.


