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

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS Signer is a fully managed code signing service to help you ensure the trust and integrity of your code. </p> <p>AWS Signer supports the following applications:</p> <p>With <i>code signing for AWS Lambda</i>, you can sign AWS Lambda deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch, and AWS CloudTrail. In order to sign code, you create a signing profile and then use Signer to sign Lambda zip files in S3. </p> <p>With <i>code signing for IoT</i>, you can sign code for any IoT device that is supported by AWS. IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign code, you import a third-party code signing certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p> <p>For more information about AWS Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer Guide</a>.</p> <p/>

## Actions

### ListSigningJobs



```js
amazonaws_signer.ListSigningJobs({}, context)
```

#### Input
* input `object`
  * status `string`
  * platformId `string`
  * requestedBy `string`
  * maxResults `integer`
  * nextToken `string`
  * isRevoked `boolean`
  * signatureExpiresBefore `string`
  * signatureExpiresAfter `string`
  * jobInvoker `string`

#### Output
* output [ListSigningJobsResponse](#listsigningjobsresponse)

### StartSigningJob



```js
amazonaws_signer.StartSigningJob({
  "source": {},
  "destination": {},
  "profileName": "",
  "clientRequestToken": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken **required** `string`: String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
  * destination **required** `object`: Points to an <code>S3Destination</code> object that contains information about your S3 bucket.
    * s3
      * bucketName
      * prefix
  * profileName **required** `string`: The name of the signing profile.
  * profileOwner `string`: The AWS account ID of the signing profile owner.
  * source **required** `object`: An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.
    * s3
      * bucketName **required**
      * key **required**
      * version **required**

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

### RevokeSignature



```js
amazonaws_signer.RevokeSignature({
  "jobId": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * jobOwner `string`: AWS account ID of the job owner.
  * reason **required** `string`: The reason for revoking the signing job.

#### Output
*Output schema unknown*

### ListSigningPlatforms



```js
amazonaws_signer.ListSigningPlatforms({}, context)
```

#### Input
* input `object`
  * category `string`
  * partner `string`
  * target `string`
  * maxResults `integer`
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
  * includeCanceled `boolean`
  * maxResults `integer`
  * nextToken `string`
  * platformId `string`
  * statuses `array`

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
  * profileOwner `string`

#### Output
* output [GetSigningProfileResponse](#getsigningprofileresponse)

### PutSigningProfile



```js
amazonaws_signer.PutSigningProfile({
  "profileName": "",
  "platformId": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`
  * tags `object`: Tags to be associated with the signing profile that is being created.
  * overrides `object`: Any overrides that are applied to the signing configuration of a code signing platform.
    * signingConfiguration
      * encryptionAlgorithm
      * hashAlgorithm
    * signingImageFormat
  * platformId **required** `string`: The ID of the signing platform to be created.
  * signatureValidityPeriod `object`: The validity period for a signing job.
    * type
    * value
  * signingMaterial `object`: The ACM certificate that is used to sign your code.
    * certificateArn
  * signingParameters `object`: Map of key-value pairs for signing. These can include any information that you want to use during signing.

#### Output
* output [PutSigningProfileResponse](#putsigningprofileresponse)

### ListProfilePermissions



```js
amazonaws_signer.ListProfilePermissions({
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`
  * nextToken `string`

#### Output
* output [ListProfilePermissionsResponse](#listprofilepermissionsresponse)

### AddProfilePermission



```js
amazonaws_signer.AddProfilePermission({
  "profileName": "",
  "action": "",
  "principal": "",
  "statementId": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`
  * action **required** `string`: The AWS Signer action permitted as part of cross-account permissions.
  * principal **required** `string`: The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.
  * profileVersion `string`: The version of the signing profile.
  * revisionId `string`: A unique identifier for the current profile revision.
  * statementId **required** `string`: A unique identifier for the cross-account permission statement.

#### Output
* output [AddProfilePermissionResponse](#addprofilepermissionresponse)

### RemoveProfilePermission



```js
amazonaws_signer.RemoveProfilePermission({
  "profileName": "",
  "revisionId": "",
  "statementId": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`
  * revisionId **required** `string`
  * statementId **required** `string`

#### Output
* output [RemoveProfilePermissionResponse](#removeprofilepermissionresponse)

### RevokeSigningProfile



```js
amazonaws_signer.RevokeSigningProfile({
  "profileName": "",
  "profileVersion": "",
  "reason": "",
  "effectiveTime": ""
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`
  * effectiveTime **required** `string`: A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.
  * profileVersion **required** `string`: The version of the signing profile to be revoked.
  * reason **required** `string`: The reason for revoking a signing profile.

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_signer.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_signer.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: One or more tags to be associated with the signing profile.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_signer.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`

### AddProfilePermissionRequest
* AddProfilePermissionRequest `object`
  * action **required**
  * principal **required**
  * profileVersion
  * revisionId
  * statementId **required**

### AddProfilePermissionResponse
* AddProfilePermissionResponse `object`
  * revisionId

### Arn
* Arn `string`

### BadRequestException


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

### ConflictException


### DescribeSigningJobRequest
* DescribeSigningJobRequest `object`

### DescribeSigningJobResponse
* DescribeSigningJobResponse `object`
  * completedAt
  * createdAt
  * jobId
  * jobInvoker
  * jobOwner
  * overrides
    * signingConfiguration
      * encryptionAlgorithm
      * hashAlgorithm
    * signingImageFormat
  * platformDisplayName
  * platformId
  * profileName
  * profileVersion
  * requestedBy
  * revocationRecord
    * reason
    * revokedAt
    * revokedBy
  * signatureExpiresAt
  * signedObject
    * s3
      * bucketName
      * key
  * signingMaterial
    * certificateArn **required**
  * signingParameters
  * source
    * s3
      * bucketName **required**
      * key **required**
      * version **required**
  * status
  * statusReason

### Destination
* Destination `object`: Points to an <code>S3Destination</code> object that contains information about your S3 bucket.
  * s3
    * bucketName
    * prefix

### DisplayName
* DisplayName `string`

### EncryptionAlgorithm
* EncryptionAlgorithm `string` (values: RSA, ECDSA)

### EncryptionAlgorithmOptions
* EncryptionAlgorithmOptions `object`: The encryption algorithm options that are available to a code signing job.
  * allowedValues **required**
    * items [EncryptionAlgorithm](#encryptionalgorithm)
  * defaultValue **required**

### EncryptionAlgorithms
* EncryptionAlgorithms `array`
  * items [EncryptionAlgorithm](#encryptionalgorithm)

### GetSigningPlatformRequest
* GetSigningPlatformRequest `object`

### GetSigningPlatformResponse
* GetSigningPlatformResponse `object`
  * category
  * displayName
  * maxSizeInMB
  * partner
  * platformId
  * revocationSupported
  * signingConfiguration
    * encryptionAlgorithmOptions **required**
      * allowedValues **required**
        * items [EncryptionAlgorithm](#encryptionalgorithm)
      * defaultValue **required**
    * hashAlgorithmOptions **required**
      * allowedValues **required**
        * items [HashAlgorithm](#hashalgorithm)
      * defaultValue **required**
  * signingImageFormat
    * defaultFormat **required**
    * supportedFormats **required**
      * items [ImageFormat](#imageformat)
  * target

### GetSigningProfileRequest
* GetSigningProfileRequest `object`

### GetSigningProfileResponse
* GetSigningProfileResponse `object`
  * tags
  * arn
  * overrides
    * signingConfiguration
      * encryptionAlgorithm
      * hashAlgorithm
    * signingImageFormat
  * platformDisplayName
  * platformId
  * profileName
  * profileVersion
  * profileVersionArn
  * revocationRecord [SigningProfileRevocationRecord](#signingprofilerevocationrecord)
  * signatureValidityPeriod [SignatureValidityPeriod](#signaturevalidityperiod)
  * signingMaterial
    * certificateArn **required**
  * signingParameters
  * status
  * statusReason

### HashAlgorithm
* HashAlgorithm `string` (values: SHA1, SHA256)

### HashAlgorithmOptions
* HashAlgorithmOptions `object`: The hash algorithms that are available to a code signing job.
  * allowedValues **required**
    * items [HashAlgorithm](#hashalgorithm)
  * defaultValue **required**

### HashAlgorithms
* HashAlgorithms `array`
  * items [HashAlgorithm](#hashalgorithm)

### ImageFormat
* ImageFormat `string` (values: JSON, JSONEmbedded, JSONDetached)

### ImageFormats
* ImageFormats `array`
  * items [ImageFormat](#imageformat)

### Integer
* Integer `integer`

### InternalServiceErrorException


### JobId
* JobId `string`

### Key
* Key `string`

### ListProfilePermissionsRequest
* ListProfilePermissionsRequest `object`

### ListProfilePermissionsResponse
* ListProfilePermissionsResponse `object`
  * nextToken
  * permissions
    * items [Permission](#permission)
  * policySizeBytes
  * revisionId

### ListSigningJobsRequest
* ListSigningJobsRequest `object`

### ListSigningJobsResponse
* ListSigningJobsResponse `object`
  * jobs
    * items [SigningJob](#signingjob)
  * nextToken

### ListSigningPlatformsRequest
* ListSigningPlatformsRequest `object`

### ListSigningPlatformsResponse
* ListSigningPlatformsResponse `object`
  * nextToken
  * platforms
    * items [SigningPlatform](#signingplatform)

### ListSigningProfilesRequest
* ListSigningProfilesRequest `object`

### ListSigningProfilesResponse
* ListSigningProfilesResponse `object`
  * nextToken
  * profiles
    * items [SigningProfile](#signingprofile)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### MaxResults
* MaxResults `integer`

### MaxSizeInMB
* MaxSizeInMB `integer`

### NextToken
* NextToken `string`

### NotFoundException


### Permission
* Permission `object`: A cross-account permission for a signing profile.
  * action
  * principal
  * profileVersion
  * statementId

### Permissions
* Permissions `array`
  * items [Permission](#permission)

### PlatformId
* PlatformId `string`

### PolicySizeBytes
* PolicySizeBytes `integer`

### Prefix
* Prefix `string`

### ProfileName
* ProfileName `string`

### ProfileVersion
* ProfileVersion `string`

### PutSigningProfileRequest
* PutSigningProfileRequest `object`
  * tags
  * overrides
    * signingConfiguration
      * encryptionAlgorithm
      * hashAlgorithm
    * signingImageFormat
  * platformId **required**
  * signatureValidityPeriod
    * type
    * value
  * signingMaterial
    * certificateArn **required**
  * signingParameters

### PutSigningProfileResponse
* PutSigningProfileResponse `object`
  * arn
  * profileVersion
  * profileVersionArn

### RemoveProfilePermissionRequest
* RemoveProfilePermissionRequest `object`

### RemoveProfilePermissionResponse
* RemoveProfilePermissionResponse `object`
  * revisionId

### RequestedBy
* RequestedBy `string`

### ResourceNotFoundException


### RevocationReasonString
* RevocationReasonString `string`

### RevokeSignatureRequest
* RevokeSignatureRequest `object`
  * jobOwner
  * reason **required**

### RevokeSigningProfileRequest
* RevokeSigningProfileRequest `object`
  * effectiveTime **required**
  * profileVersion **required**
  * reason **required**

### S3Destination
* S3Destination `object`: The name and prefix of the S3 bucket where code signing saves your signed objects.
  * bucketName
  * prefix

### S3SignedObject
* S3SignedObject `object`: The S3 bucket name and key where code signing saved your signed code image.
  * bucketName
  * key

### S3Source
* S3Source `object`: Information about the S3 bucket where you saved your unsigned code.
  * bucketName **required**
  * key **required**
  * version **required**

### ServiceLimitExceededException


### SignatureValidityPeriod
* SignatureValidityPeriod `object`: The validity period for a signing job.
  * type
  * value

### SignedObject
* SignedObject `object`: Points to an <code>S3SignedObject</code> object that contains information about your signed code image.
  * s3
    * bucketName
    * key

### SigningConfiguration
* SigningConfiguration `object`: The configuration of a code signing operation.
  * encryptionAlgorithmOptions **required**
    * allowedValues **required**
      * items [EncryptionAlgorithm](#encryptionalgorithm)
    * defaultValue **required**
  * hashAlgorithmOptions **required**
    * allowedValues **required**
      * items [HashAlgorithm](#hashalgorithm)
    * defaultValue **required**

### SigningConfigurationOverrides
* SigningConfigurationOverrides `object`: A signing configuration that overrides the default encryption or hash algorithm of a signing job.
  * encryptionAlgorithm
  * hashAlgorithm

### SigningImageFormat
* SigningImageFormat `object`: The image format of a code signing platform or profile.
  * defaultFormat **required**
  * supportedFormats **required**
    * items [ImageFormat](#imageformat)

### SigningJob
* SigningJob `object`: Contains information about a signing job.
  * createdAt
  * isRevoked
  * jobId
  * jobInvoker
  * jobOwner
  * platformDisplayName
  * platformId
  * profileName
  * profileVersion
  * signatureExpiresAt
  * signedObject
    * s3
      * bucketName
      * key
  * signingMaterial
    * certificateArn **required**
  * source
    * s3
      * bucketName **required**
      * key **required**
      * version **required**
  * status

### SigningJobRevocationRecord
* SigningJobRevocationRecord `object`: Revocation information for a signing job.
  * reason
  * revokedAt
  * revokedBy

### SigningJobs
* SigningJobs `array`
  * items [SigningJob](#signingjob)

### SigningMaterial
* SigningMaterial `object`: The ACM certificate that is used to sign your code.
  * certificateArn **required**

### SigningParameterKey
* SigningParameterKey `string`

### SigningParameterValue
* SigningParameterValue `string`

### SigningParameters
* SigningParameters `object`

### SigningPlatform
* SigningPlatform `object`: Contains information about the signing configurations and parameters that are used to perform a code signing job.
  * category
  * displayName
  * maxSizeInMB
  * partner
  * platformId
  * revocationSupported
  * signingConfiguration
    * encryptionAlgorithmOptions **required**
      * allowedValues **required**
        * items [EncryptionAlgorithm](#encryptionalgorithm)
      * defaultValue **required**
    * hashAlgorithmOptions **required**
      * allowedValues **required**
        * items [HashAlgorithm](#hashalgorithm)
      * defaultValue **required**
  * signingImageFormat [SigningImageFormat](#signingimageformat)
  * target

### SigningPlatformOverrides
* SigningPlatformOverrides `object`: Any overrides that are applied to the signing configuration of a code signing platform.
  * signingConfiguration
    * encryptionAlgorithm
    * hashAlgorithm
  * signingImageFormat

### SigningPlatforms
* SigningPlatforms `array`
  * items [SigningPlatform](#signingplatform)

### SigningProfile
* SigningProfile `object`: Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user.
  * tags
  * arn
  * platformDisplayName
  * platformId
  * profileName
  * profileVersion
  * profileVersionArn
  * signatureValidityPeriod
    * type
    * value
  * signingMaterial
    * certificateArn **required**
  * signingParameters
  * status

### SigningProfileRevocationRecord
* SigningProfileRevocationRecord `object`: Revocation information for a signing profile.
  * revocationEffectiveFrom
  * revokedAt
  * revokedBy

### SigningProfileStatus
* SigningProfileStatus `string` (values: Active, Canceled, Revoked)

### SigningProfiles
* SigningProfiles `array`
  * items [SigningProfile](#signingprofile)

### SigningStatus
* SigningStatus `string` (values: InProgress, Failed, Succeeded)

### Source
* Source `object`: An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.
  * s3
    * bucketName **required**
    * key **required**
    * version **required**

### StartSigningJobRequest
* StartSigningJobRequest `object`
  * clientRequestToken **required**
  * destination **required**
    * s3
      * bucketName
      * prefix
  * profileName **required**
  * profileOwner
  * source **required**
    * s3
      * bucketName **required**
      * key **required**
      * version **required**

### StartSigningJobResponse
* StartSigningJobResponse `object`
  * jobId
  * jobOwner

### StatusReason
* StatusReason `string`

### Statuses
* Statuses `array`
  * items [SigningProfileStatus](#signingprofilestatus)

### String
* String `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### TooManyRequestsException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### ValidationException


### ValidityType
* ValidityType `string` (values: DAYS, MONTHS, YEARS)

### Version
* Version `string`

### bool
* bool `boolean`

### string
* string `string`


