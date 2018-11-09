# @datafire/amazonaws_signer

Client library for AWS Signer

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_signer
```
```js
let amazonaws_signer = require('@datafire/amazonaws_signer').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_signer.ListSigningJobs({}).then(data => {
  console.log(data);
});
```

## Description

You can use Code Signing for Amazon FreeRTOS (AWS Signer) to sign code that you created for any of the IoT devices that Amazon Web Services supports. AWS Signer is integrated with Amazon FreeRTOS, AWS Certificate Manager, and AWS CloudTrail. Amazon FreeRTOS customers can use AWS Signer to sign code images before making them available for microcontrollers. You can use ACM to import third-party certificates to be used by AWS Signer. For general information about using AWS Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">Code Signing for Amazon FreeRTOS Developer Guide</a>.

## Actions

### ListSigningJobs



```js
amazonaws_signer.ListSigningJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListSigningJobsResponse](#listsigningjobsresponse)

### StartSigningJob



```js
amazonaws_signer.StartSigningJob({
  "source": {},
  "destination": {},
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * destination **required** [Destination](#destination)
  * profileName [ProfileName](#profilename)
  * source **required** [Source](#source)

#### Output
* output [StartSigningJobResponse](#startsigningjobresponse)

### DescribeSigningJob



```js
amazonaws_signer.DescribeSigningJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`

#### Output
* output [DescribeSigningJobResponse](#describesigningjobresponse)

### ListSigningPlatforms



```js
amazonaws_signer.ListSigningPlatforms({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListSigningPlatformsResponse](#listsigningplatformsresponse)

### GetSigningPlatform



```js
amazonaws_signer.GetSigningPlatform({
  "platformId": ""
}, context)
```

#### Input
* input `object`
  * platformId **required** `string`

#### Output
* output [GetSigningPlatformResponse](#getsigningplatformresponse)

### ListSigningProfiles



```js
amazonaws_signer.ListSigningProfiles({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [ListSigningProfilesResponse](#listsigningprofilesresponse)

### CancelSigningProfile



```js
amazonaws_signer.CancelSigningProfile({
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`

#### Output
*Output schema unknown*

### GetSigningProfile



```js
amazonaws_signer.GetSigningProfile({
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`

#### Output
* output [GetSigningProfileResponse](#getsigningprofileresponse)

### PutSigningProfile



```js
amazonaws_signer.PutSigningProfile({
  "profileName": "",
  "signingMaterial": {
    "certificateArn": ""
  },
  "platformId": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`
  * overrides [SigningPlatformOverrides](#signingplatformoverrides)
  * platformId **required** [PlatformId](#platformid)
  * signingMaterial **required** [SigningMaterial](#signingmaterial)
  * signingParameters [SigningParameters](#signingparameters)

#### Output
* output [PutSigningProfileResponse](#putsigningprofileresponse)



## Definitions

### AccessDeniedException


### BucketName
* BucketName `string`

### CancelSigningProfileRequest
* CancelSigningProfileRequest `object`

### Category
* Category `string` (values: AWSIoT)

### CertificateArn
* CertificateArn `string`

### ClientRequestToken
* ClientRequestToken `string`

### CompletedAt
* CompletedAt `string`

### CreatedAt
* CreatedAt `string`

### DescribeSigningJobRequest
* DescribeSigningJobRequest `object`

### DescribeSigningJobResponse
* DescribeSigningJobResponse `object`
  * completedAt [CompletedAt](#completedat)
  * createdAt [CreatedAt](#createdat)
  * jobId [JobId](#jobid)
  * overrides [SigningPlatformOverrides](#signingplatformoverrides)
  * platformId [PlatformId](#platformid)
  * profileName [ProfileName](#profilename)
  * requestedBy [RequestedBy](#requestedby)
  * signedObject [SignedObject](#signedobject)
  * signingMaterial [SigningMaterial](#signingmaterial)
  * signingParameters [SigningParameters](#signingparameters)
  * source [Source](#source)
  * status [SigningStatus](#signingstatus)
  * statusReason [StatusReason](#statusreason)

### Destination
* Destination `object`: Points to an <code>S3Destination</code> object that contains information about your S3 bucket.
  * s3 [S3Destination](#s3destination)

### DisplayName
* DisplayName `string`

### EncryptionAlgorithm
* EncryptionAlgorithm `string` (values: RSA, ECDSA)

### EncryptionAlgorithmOptions
* EncryptionAlgorithmOptions `object`: The encryption algorithm options that are available to an AWS Signer job.
  * allowedValues **required** [EncryptionAlgorithms](#encryptionalgorithms)
  * defaultValue **required** [EncryptionAlgorithm](#encryptionalgorithm)

### EncryptionAlgorithms
* EncryptionAlgorithms `array`
  * items [EncryptionAlgorithm](#encryptionalgorithm)

### GetSigningPlatformRequest
* GetSigningPlatformRequest `object`

### GetSigningPlatformResponse
* GetSigningPlatformResponse `object`
  * category [Category](#category)
  * displayName [DisplayName](#displayname)
  * maxSizeInMB [MaxSizeInMB](#maxsizeinmb)
  * partner [String](#string)
  * platformId [PlatformId](#platformid)
  * signingConfiguration [SigningConfiguration](#signingconfiguration)
  * signingImageFormat [SigningImageFormat](#signingimageformat)
  * target [String](#string)

### GetSigningProfileRequest
* GetSigningProfileRequest `object`

### GetSigningProfileResponse
* GetSigningProfileResponse `object`
  * overrides [SigningPlatformOverrides](#signingplatformoverrides)
  * platformId [PlatformId](#platformid)
  * profileName [ProfileName](#profilename)
  * signingMaterial [SigningMaterial](#signingmaterial)
  * signingParameters [SigningParameters](#signingparameters)
  * status [SigningProfileStatus](#signingprofilestatus)

### HashAlgorithm
* HashAlgorithm `string` (values: SHA1, SHA256)

### HashAlgorithmOptions
* HashAlgorithmOptions `object`: The hash algorithms that are available to an AWS Signer job.
  * allowedValues **required** [HashAlgorithms](#hashalgorithms)
  * defaultValue **required** [HashAlgorithm](#hashalgorithm)

### HashAlgorithms
* HashAlgorithms `array`
  * items [HashAlgorithm](#hashalgorithm)

### ImageFormat
* ImageFormat `string` (values: JSON)

### ImageFormats
* ImageFormats `array`
  * items [ImageFormat](#imageformat)

### InternalServiceErrorException


### JobId
* JobId `string`

### Key
* Key `string`

### ListSigningJobsRequest
* ListSigningJobsRequest `object`

### ListSigningJobsResponse
* ListSigningJobsResponse `object`
  * jobs [SigningJobs](#signingjobs)
  * nextToken [NextToken](#nexttoken)

### ListSigningPlatformsRequest
* ListSigningPlatformsRequest `object`

### ListSigningPlatformsResponse
* ListSigningPlatformsResponse `object`
  * nextToken [String](#string)
  * platforms [SigningPlatforms](#signingplatforms)

### ListSigningProfilesRequest
* ListSigningProfilesRequest `object`

### ListSigningProfilesResponse
* ListSigningProfilesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * profiles [SigningProfiles](#signingprofiles)

### MaxResults
* MaxResults `integer`

### MaxSizeInMB
* MaxSizeInMB `integer`

### NextToken
* NextToken `string`

### PlatformId
* PlatformId `string`

### Prefix
* Prefix `string`

### ProfileName
* ProfileName `string`

### PutSigningProfileRequest
* PutSigningProfileRequest `object`
  * overrides [SigningPlatformOverrides](#signingplatformoverrides)
  * platformId **required** [PlatformId](#platformid)
  * signingMaterial **required** [SigningMaterial](#signingmaterial)
  * signingParameters [SigningParameters](#signingparameters)

### PutSigningProfileResponse
* PutSigningProfileResponse `object`
  * arn [string](#string)

### RequestedBy
* RequestedBy `string`

### ResourceNotFoundException


### S3Destination
* S3Destination `object`: The name and prefix of the S3 bucket where AWS Signer saves your signed objects.
  * bucketName [BucketName](#bucketname)
  * prefix [Prefix](#prefix)

### S3SignedObject
* S3SignedObject `object`: The S3 bucket name and key where AWS Signer saved your signed code image.
  * bucketName [BucketName](#bucketname)
  * key [key](#key)

### S3Source
* S3Source `object`: Information about the S3 bucket where you saved your unsigned code.
  * bucketName **required** [BucketName](#bucketname)
  * key **required** [Key](#key)
  * version **required** [Version](#version)

### SignedObject
* SignedObject `object`: Points to an <code>S3SignedObject</code> object that contains information about your signed code image.
  * s3 [S3SignedObject](#s3signedobject)

### SigningConfiguration
* SigningConfiguration `object`: The configuration of an AWS Signer operation.
  * encryptionAlgorithmOptions **required** [EncryptionAlgorithmOptions](#encryptionalgorithmoptions)
  * hashAlgorithmOptions **required** [HashAlgorithmOptions](#hashalgorithmoptions)

### SigningConfigurationOverrides
* SigningConfigurationOverrides `object`: A signing configuration that overrides the default encryption or hash algorithm of a signing job.
  * encryptionAlgorithm [EncryptionAlgorithm](#encryptionalgorithm)
  * hashAlgorithm [HashAlgorithm](#hashalgorithm)

### SigningImageFormat
* SigningImageFormat `object`: The image format of an AWS Signer platform or profile.
  * defaultFormat **required** [ImageFormat](#imageformat)
  * supportedFormats **required** [ImageFormats](#imageformats)

### SigningJob
* SigningJob `object`: Contains information about a signing job.
  * createdAt [CreatedAt](#createdat)
  * jobId [JobId](#jobid)
  * signedObject [SignedObject](#signedobject)
  * signingMaterial [SigningMaterial](#signingmaterial)
  * source [Source](#source)
  * status [SigningStatus](#signingstatus)

### SigningJobs
* SigningJobs `array`
  * items [SigningJob](#signingjob)

### SigningMaterial
* SigningMaterial `object`: The ACM certificate that is used to sign your code.
  * certificateArn **required** [CertificateArn](#certificatearn)

### SigningParameterKey
* SigningParameterKey `string`

### SigningParameterValue
* SigningParameterValue `string`

### SigningParameters
* SigningParameters `array`
  * items `object`
    * key [SigningParameterKey](#signingparameterkey)
    * value [SigningParameterValue](#signingparametervalue)

### SigningPlatform
* SigningPlatform `object`: Contains information about the signing configurations and parameters that is used to perform an AWS Signer job.
  * category [Category](#category)
  * displayName [String](#string)
  * maxSizeInMB [MaxSizeInMB](#maxsizeinmb)
  * partner [String](#string)
  * platformId [String](#string)
  * signingConfiguration [SigningConfiguration](#signingconfiguration)
  * signingImageFormat [SigningImageFormat](#signingimageformat)
  * target [String](#string)

### SigningPlatformOverrides
* SigningPlatformOverrides `object`: Any overrides that are applied to the signing configuration of an AWS Signer platform.
  * signingConfiguration [SigningConfigurationOverrides](#signingconfigurationoverrides)

### SigningPlatforms
* SigningPlatforms `array`
  * items [SigningPlatform](#signingplatform)

### SigningProfile
* SigningProfile `object`: Contains information about the ACM certificates and AWS Signer configuration parameters that can be used by a given AWS Signer user.
  * platformId [PlatformId](#platformid)
  * profileName [ProfileName](#profilename)
  * signingMaterial [SigningMaterial](#signingmaterial)
  * signingParameters [SigningParameters](#signingparameters)
  * status [SigningProfileStatus](#signingprofilestatus)

### SigningProfileStatus
* SigningProfileStatus `string` (values: Active, Canceled)

### SigningProfiles
* SigningProfiles `array`
  * items [SigningProfile](#signingprofile)

### SigningStatus
* SigningStatus `string` (values: InProgress, Failed, Succeeded)

### Source
* Source `object`: An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.
  * s3 [S3Source](#s3source)

### StartSigningJobRequest
* StartSigningJobRequest `object`
  * clientRequestToken **required** [ClientRequestToken](#clientrequesttoken)
  * destination **required** [Destination](#destination)
  * profileName [ProfileName](#profilename)
  * source **required** [Source](#source)

### StartSigningJobResponse
* StartSigningJobResponse `object`
  * jobId [JobId](#jobid)

### StatusReason
* StatusReason `string`

### String
* String `string`

### ThrottlingException


### ValidationException


### Version
* Version `string`

### bool
* bool `boolean`

### key
* key `string`

### string
* string `string`


